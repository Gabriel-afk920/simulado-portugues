
// ══════════════════════════════════════════════════════════
//  HISTÓRICO DE DESEMPENHO (localStorage)
// ══════════════════════════════════════════════════════════
function _historico() {
  try { return JSON.parse(localStorage.getItem('desempenho') || '{}'); } catch { return {}; }
}
function _salvarSessao(temaId, acertos, total) {
  const h = _historico();
  if (!h[temaId]) h[temaId] = { acertos: 0, total: 0, sessoes: 0 };
  h[temaId].acertos += acertos;
  h[temaId].total   += total;
  h[temaId].sessoes += 1;
  localStorage.setItem('desempenho', JSON.stringify(h));
}

// ══════════════════════════════════════════════════════════
//  SESSÃO ATIVA — continuar de onde parou
// ══════════════════════════════════════════════════════════
function _salvarSessaoAtiva() {
  if (!temaAtual || !questoes.length) return;
  const estado = {
    temaId:           temaAtual.id,
    questaoHashes:    questoes.map(_qHash),
    indiceAtual,
    respostasMap,
    shuffleMap,
    teoriaConsultada,
    pontuacao,
  };
  localStorage.setItem('sessao_ativa', JSON.stringify(estado));
}

function _sessaoAtiva(temaId) {
  try {
    const s = JSON.parse(localStorage.getItem('sessao_ativa') || 'null');
    return s && s.temaId === temaId && s.indiceAtual < (s.questaoHashes || []).length ? s : null;
  } catch { return null; }
}

function _limparSessaoAtiva() {
  localStorage.removeItem('sessao_ativa');
}

function _restaurarSessaoAtiva(s, tema) {
  temaAtual        = tema;
  questoes         = s.questaoHashes.map(h => tema.questoes.find(q => _qHash(q) === h)).filter(Boolean);
  indiceAtual      = s.indiceAtual;
  pontuacao        = s.pontuacao || 0;
  respostasMap     = s.respostasMap || {};
  shuffleMap       = s.shuffleMap  || {};
  teoriaConsultada = s.teoriaConsultada || {};
  tempoSimulado    = TEMPO_POR_QUESTAO;

  clearInterval(timerInterval);
  simuladoPausado = false;
  document.getElementById('btn-pausar').textContent = '⏸ Pausar';

  ir('screen-quiz');
  renderQuestao();
}

// ══════════════════════════════════════════════════════════
//  SISTEMA ADAPTATIVO DE DIFICULDADE (localStorage)
// ══════════════════════════════════════════════════════════
function _qHash(q) {
  return (q.banca || '') + '_' + (q.ano || '') + '_' + q.enunciado.substring(0, 50);
}
function _qDificuldade() {
  try { return JSON.parse(localStorage.getItem('qdif') || '{}'); } catch { return {}; }
}
function _qPeso(q) {
  const d = _qDificuldade()[_qHash(q)];
  if (!d) return 1;
  if (d.d > 0) return 3;
  if (d.m > 0 && d.s === 0) return 1.5;
  if (d.s >= 2) return 0.2;
  return 1;
}
function _atualizarQDif(q, acertou, usouTeoria) {
  const d = _qDificuldade();
  const k = _qHash(q);
  if (!d[k]) d[k] = { s: 0, m: 0, d: 0 };
  if (!acertou)        d[k].d++;
  else if (usouTeoria) d[k].m++;
  else                 d[k].s++;
  localStorage.setItem('qdif', JSON.stringify(d));
}
function shuffleAdaptativo(arr, excluir = new Set()) {
  const pesar = (qs) => {
    const items = qs.map(q => ({ q, score: _qPeso(q) * Math.random() }));
    items.sort((a, b) => b.score - a.score);
    return items.map(x => x.q);
  };
  if (!excluir.size) return pesar(arr);
  const naoVistas = arr.filter(q => !excluir.has(_qHash(q)));
  const vistas    = arr.filter(q =>  excluir.has(_qHash(q)));
  // Questões não vistas primeiro (adaptive), vistas só se esgotar o pool
  return [...pesar(naoVistas), ...pesar(vistas)];
}

// ══════════════════════════════════════════════════════════
//  ESTADO DO SIMULADO
// ══════════════════════════════════════════════════════════
const TEMPO_POR_QUESTAO = 600; // 10 minutos por questão
let temaAtual        = null;
let questoes         = [];
let indiceAtual      = 0;
let pontuacao        = 0;
let respostas        = [];
let respostasMap     = {};
let shuffleMap       = {};
let teoriaConsultada = {};
let timerInterval    = null;
let simuladoPausado  = false;
let qsVistasNaSessao = new Set();  // acumula hashes de questões já exibidas (reseta ao sair para temas)
let tempoSimulado    = TEMPO_POR_QUESTAO;
let respondeu        = false;


// ══════════════════════════════════════════════════════════
//  NAVEGAÇÃO ENTRE TELAS
// ══════════════════════════════════════════════════════════
const TELAS = ['screen-home','screen-study-topics','screen-study-fonetica','screen-study-content',
               'screen-quiz-topics','screen-quiz-fonetica','screen-quiz','screen-result'];

function ir(id) {
  TELAS.forEach(t => {
    const el = document.getElementById(t);
    if (t === id) { el.style.display = 'block'; el.classList.remove('hidden'); }
    else          { el.style.display = 'none';  el.classList.add('hidden'); }
  });
  window.scrollTo(0, 0);
}

// ══════════════════════════════════════════════════════════
//  HOME
// ══════════════════════════════════════════════════════════
document.getElementById('btn-ir-estudar').addEventListener('click', () => {
  renderTemaGrid('study-tema-grid', abrirTeoria, IDS_FONETICA_ORTOGRAFIA);
  ir('screen-study-topics');
});

function _abrirTelaSimulado() {
  renderTemaGrid('quiz-tema-grid', selecionarTemaQuiz, IDS_FONETICA_ORTOGRAFIA);
  temaAtual = null;
  document.getElementById('btn-iniciar').disabled = true;
  ir('screen-quiz-topics');

  // Auto-detectar sessão salva e pré-selecionar o card correto
  try {
    const s = JSON.parse(localStorage.getItem('sessao_ativa') || 'null');
    if (!s || !s.temaId) return;
    if (s.temaId === 'fonetica_mix') {
      // Sessão de Fonética: reconstruir tema com todas as questões disponíveis
      temaAtual = {
        id: 'fonetica_mix',
        nome: 'Fonética e Ortografia',
        questoes: IDS_FONETICA_ORTOGRAFIA.flatMap(id => {
          const t = TEMAS.find(x => x.id === id);
          return t ? t.questoes : [];
        }),
      };
      const respondidas = Object.keys(s.respostasMap || {}).length;
      document.getElementById('continuar-info').textContent =
        `questão ${s.indiceAtual + 1} de ${s.questaoHashes.length} · ${respondidas} respondidas`;
      document.getElementById('continuar-box').style.display = '';
    } else {
      const card = document.querySelector(`#quiz-tema-grid [data-id="${s.temaId}"]`);
      if (card) card.click();
    }
  } catch {}
}

document.getElementById('btn-ir-simulado').addEventListener('click', _abrirTelaSimulado);

document.getElementById('btn-back-study-home').addEventListener('click', () => ir('screen-home'));
document.getElementById('btn-back-quiz-home').addEventListener('click',  () => ir('screen-home'));

// ══════════════════════════════════════════════════════════
//  GRADE DE TEMAS (reutilizável)
// ══════════════════════════════════════════════════════════
const IDS_FONETICA_ORTOGRAFIA = ['ditongos','digrafos','encontrosConsonantais','hiatos','fonemas','ortografia','tritongos','silabas','acentuacaoGrafica','crase','tonicidade','hifen','oxitonas','paroxitonas','proparoxitonas'];
// Excluídos da grade de sub-temas (conteúdo já coberto pelo card Acentuação Gráfica renomeado)
const IDS_OCULTAR_SUBTELA = ['oxitonas','paroxitonas','proparoxitonas','acentuacaoGrafica'];

function renderTemaGrid(gridId, onClickFn, excluir) {
  const grid = document.getElementById(gridId);
  const hist = _historico();
  grid.innerHTML = '';
  TEMAS.forEach(t => {
    if (excluir && excluir.includes(t.id)) return;
    const card = document.createElement('div');
    card.className = 'tema-card';
    card.dataset.id = t.id;

    let badge = '';
    const h = hist[t.id];
    if (h && h.total > 0) {
      const pct = Math.round((h.acertos / h.total) * 100);
      const cor = pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
      badge = `<div class="perf-badge" style="background:${cor}">${pct}%</div>`;
    }

    card.innerHTML = `${badge}<div class="icon">${t.icon}</div><div class="nome">${t.nome}</div><div class="desc">${t.desc}</div>`;
    card.addEventListener('click', () => onClickFn(t.id, card));
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════════════════
//  SEÇÃO ESTUDAR
// ══════════════════════════════════════════════════════════
let origemTeoria = 'screen-study-topics';

function abrirTeoria(id) {
  if (id === 'fonetica_ortografia') {
    const grid = document.getElementById('study-fonetica-grid');
    grid.innerHTML = '';
    IDS_FONETICA_ORTOGRAFIA.forEach(subId => {
      if (IDS_OCULTAR_SUBTELA.includes(subId)) return;
      const sub = TEMAS.find(x => x.id === subId);
      if (!sub) return;
      const card = document.createElement('div');
      card.className = 'tema-card';
      card.innerHTML = `<div class="icon">${sub.icon}</div><div class="nome">${sub.nome}</div><div class="desc">${sub.desc}</div>`;
      card.addEventListener('click', () => {
        origemTeoria = 'screen-study-fonetica';
        abrirTeoria(sub.id);
      });
      grid.appendChild(card);
    });
    ir('screen-study-fonetica');
    return;
  }

  const t = TEMAS.find(x => x.id === id);
  temaAtual = t;

  const container = document.getElementById('teoria-container');
  container.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <span style="font-size:2rem;">${t.icon}</span>
      <div>
        <h1 style="margin-bottom:2px;">${t.nome}</h1>
        <p style="color:#94a3b8;font-size:0.85rem;">${t.desc}</p>
      </div>
    </div>
    <div class="teoria-body">${t.teoria}</div>
  `;
  ir('screen-study-content');
}

document.getElementById('btn-back-study-fonetica').addEventListener('click', () => ir('screen-study-topics'));
document.getElementById('btn-back-quiz-fonetica').addEventListener('click', () => ir('screen-quiz-topics'));
document.getElementById('btn-back-study-topics').addEventListener('click', () => {
  const dest = origemTeoria;
  origemTeoria = 'screen-study-topics';
  ir(dest);
});
document.getElementById('btn-back-study-topics-2').addEventListener('click', () => {
  const dest = origemTeoria;
  origemTeoria = 'screen-study-topics';
  ir(dest);
});

document.getElementById('btn-fazer-simulado-da-teoria').addEventListener('click', () => {
  if (!temaAtual) return;
  iniciarSimulado(temaAtual);
});

// ══════════════════════════════════════════════════════════
//  SEÇÃO SIMULADO — seleção de tema
// ══════════════════════════════════════════════════════════
function selecionarTemaQuiz(id, card) {
  if (id === 'fonetica_ortografia') {
    const grid = document.getElementById('quiz-fonetica-grid');
    const subtemasDisponiveis = IDS_FONETICA_ORTOGRAFIA
      .map(id => TEMAS.find(x => x.id === id))
      .filter(sub => sub && sub.questoes && sub.questoes.length && !IDS_OCULTAR_SUBTELA.includes(sub.id));
    _renderSubtemasQuiz(subtemasDisponiveis);
    ir('screen-quiz-fonetica');
    return;
  }
  document.querySelectorAll('#quiz-tema-grid .tema-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  temaAtual = TEMAS.find(t => t.id === id);
  const semQuestoes = !temaAtual.questoes.length;
  const btn = document.getElementById('btn-iniciar');
  btn.disabled    = semQuestoes;
  btn.textContent = semQuestoes ? 'Sem questões disponíveis' : 'Iniciar Simulado';

  const sessao = _sessaoAtiva(id);
  const box    = document.getElementById('continuar-box');
  if (sessao && !semQuestoes) {
    const respondidas = Object.keys(sessao.respostasMap || {}).length;
    document.getElementById('continuar-info').textContent =
      `questão ${sessao.indiceAtual + 1} de ${sessao.questaoHashes.length} · ${respondidas} respondidas`;
    box.style.display = '';
  } else {
    box.style.display = 'none';
  }
}

document.getElementById('btn-iniciar').addEventListener('click', () => {
  if (temaAtual) { _limparSessaoAtiva(); iniciarSimulado(temaAtual); }
});

document.getElementById('btn-continuar').addEventListener('click', () => {
  if (!temaAtual) return;
  const s = _sessaoAtiva(temaAtual.id);
  if (s) _restaurarSessaoAtiva(s, temaAtual);
});

document.getElementById('btn-novo-simulado').addEventListener('click', () => {
  if (temaAtual) {
    _limparSessaoAtiva();
    document.getElementById('continuar-box').style.display = 'none';
    iniciarSimulado(temaAtual);
  }
});

// ── Seleção múltipla de subtemas (Fonética e Ortografia no Simulado) ──
let _subtemasQuizSelecionados = new Set();

function _renderSubtemasQuiz(subs) {
  _subtemasQuizSelecionados.clear();
  const grid = document.getElementById('quiz-fonetica-grid');
  const btnIniciar = document.getElementById('btn-iniciar-fonetica');
  grid.innerHTML = '';
  const hist = _historico();

  subs.forEach(sub => {
    const div = document.createElement('div');
    div.className = 'tema-card';
    div.dataset.subId = sub.id;
    let badge = '';
    const h = hist[sub.id];
    if (h && h.total > 0) {
      const pct = Math.round((h.acertos / h.total) * 100);
      const cor = pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
      badge = `<div class="perf-badge" style="background:${cor}">${pct}%</div>`;
    }
    div.innerHTML = `${badge}<div class="icon">${sub.icon}</div><div class="nome">${sub.nome}</div><div class="desc">${sub.desc}</div>`;
    div.addEventListener('click', () => {
      if (_subtemasQuizSelecionados.has(sub.id)) {
        _subtemasQuizSelecionados.delete(sub.id);
        div.classList.remove('selected');
      } else {
        _subtemasQuizSelecionados.add(sub.id);
        div.classList.add('selected');
      }
      _atualizarBtnFonetica(btnIniciar);
    });
    grid.appendChild(div);
  });
  btnIniciar.disabled = true;
}

function _atualizarBtnFonetica(btn) {
  const btnIniciar = btn || document.getElementById('btn-iniciar-fonetica');
  btnIniciar.disabled    = _subtemasQuizSelecionados.size === 0;
  btnIniciar.textContent = 'Iniciar Simulado';
}

document.getElementById('btn-select-all-fonetica').addEventListener('click', () => {
  const btnIniciar = document.getElementById('btn-iniciar-fonetica');
  document.querySelectorAll('#quiz-fonetica-grid .tema-card').forEach(card => {
    card.classList.add('selected');
    _subtemasQuizSelecionados.add(card.dataset.subId);
  });
  _atualizarBtnFonetica(btnIniciar);
});

document.getElementById('btn-iniciar-fonetica').addEventListener('click', () => {
  if (_subtemasQuizSelecionados.size === 0) return;
  const questoesCombinadas = [];
  _subtemasQuizSelecionados.forEach(subId => {
    const sub = TEMAS.find(x => x.id === subId);
    if (sub && sub.questoes) questoesCombinadas.push(...sub.questoes);
  });
  iniciarSimulado({ id: 'fonetica_mix', nome: 'Fonética e Ortografia', questoes: questoesCombinadas });
});

// ══════════════════════════════════════════════════════════
//  SIMULADO — questões
// ══════════════════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function _fmtTempo(s) {
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
}

function iniciarSimulado(tema, excluirHashes = new Set()) {
  temaAtual = tema;
  questoes  = shuffleAdaptativo(tema.questoes, excluirHashes);
  indiceAtual      = 0;
  pontuacao        = 0;
  respostas        = [];
  respostasMap     = {};
  shuffleMap       = {};
  teoriaConsultada = {};
  clearInterval(timerInterval);
  simuladoPausado = false;
  document.getElementById('btn-pausar').textContent = '⏸ Pausar';

  ir('screen-quiz');
  renderQuestao();
}

function _iniciarTimerQuestao() {
  clearInterval(timerInterval);
  tempoSimulado = TEMPO_POR_QUESTAO;
  const timerEl = document.getElementById('timer-box');
  timerEl.textContent = _fmtTempo(tempoSimulado);
  timerEl.className   = 'timer-box';
  timerInterval = setInterval(() => {
    if (simuladoPausado) return;
    tempoSimulado--;
    timerEl.textContent = _fmtTempo(tempoSimulado);
    if      (tempoSimulado <= 30) timerEl.className = 'timer-box danger';
    else if (tempoSimulado <= 60) timerEl.className = 'timer-box warning';
    if (tempoSimulado <= 0) {
      clearInterval(timerInterval);
      registrarResposta(-1);
      setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < questoes.length) renderQuestao();
        else mostrarResultado();
      }, 2000);
    }
  }, 1000);
}

function _atualizarPlacar() {
  const respondidas = Object.keys(respostasMap).length;
  const certas      = Object.values(respostasMap).filter(r => r.acertou).length;
  const erradas     = respondidas - certas;
  document.getElementById('placar-respondidas').textContent = respondidas + ' respondidas';
  document.getElementById('placar-certas').textContent      = '✔ ' + certas;
  document.getElementById('placar-erradas').textContent     = '✗ ' + erradas;
}

function renderQuestao() {
  const q         = questoes[indiceAtual];
  qsVistasNaSessao.add(_qHash(q));  // marca questão como vista nesta sessão
  const total     = questoes.length;
  const jaResp    = respostasMap.hasOwnProperty(indiceAtual);
  respondeu       = jaResp;

  if (jaResp) {
    clearInterval(timerInterval);
    const timerEl = document.getElementById('timer-box');
    timerEl.textContent = '0:00';
    timerEl.className   = 'timer-box';
  } else {
    _iniciarTimerQuestao();
  }

  _atualizarPlacar();
  document.getElementById('progress-info').textContent = `Questão ${indiceAtual + 1} de ${total}`;
  document.getElementById('progress-bar').style.width  = ((indiceAtual / total) * 100) + '%';
  document.getElementById('topic-tag').textContent     = temaAtual.nome;

  // Mostra botão de teoria só se a questão tiver temas_relacionados
  const btnTeoria = document.getElementById('btn-consultar-teoria');
  btnTeoria.style.display = (q.temas_relacionados && q.temas_relacionados.length) ? '' : 'none';

  // Cabeçalho no formato de questão de concurso público
  let cabecalho = '';
  if (q.banca || q.ano) {
    const partes  = [q.banca, q.ano].filter(Boolean).join(' — ');
    const tipo    = q.tipo === 'certo_errado' ? '<span class="concurso-tipo">Certo ou Errado</span>' : '';
    cabecalho = `<div class="concurso-header"><span class="concurso-banca">${partes}</span>${tipo}</div>`;
  }
  let enuncHtml = q.enunciado;
  if (q.imagens && q.imagens.length > 0) {
    q.imagens.forEach(function(src, i) {
      enuncHtml = enuncHtml.replace('[[IMG_' + i + ']]',
        '<div class="questao-imagem"><img src="' + src + '" alt="Imagem da questão"></div>');
    });
  }
  document.getElementById('question-text').innerHTML = cabecalho + enuncHtml;


  // Ordem das opções: reutiliza se já foi gerada para esta questão
  if (!shuffleMap[indiceAtual]) shuffleMap[indiceAtual] = shuffle(q.opcoes.map((_, i) => i));
  const shuffled = shuffleMap[indiceAtual];
  const letras   = ['A', 'B', 'C', 'D', 'E'];

  const lista = document.getElementById('options-list');
  lista.innerHTML = '';
  shuffled.forEach((origIdx, pos) => {
    const li = document.createElement('li');
    li.className    = 'option-item';
    li.dataset.orig = origIdx;
    li.innerHTML    = `<span class="option-letter">${letras[pos]}</span><span>${q.opcoes[origIdx]}</span>`;
    if (jaResp) {
      li.classList.add('disabled');
      const resp = respostasMap[indiceAtual];
      if (origIdx === q.correta)                       li.classList.add('correct');
      if (origIdx === resp.escolhida && !resp.acertou) li.classList.add('wrong');
    } else {
      li.addEventListener('click', () => { if (!respondeu) registrarResposta(origIdx); });
    }
    lista.appendChild(li);
  });

  // Explicação: mostra se já respondeu
  const expBox = document.getElementById('explanation-box');
  if (jaResp) {
    const resp = respostasMap[indiceAtual];
    expBox.innerHTML = `<strong>${resp.acertou ? '✔ Correto!' : resp.escolhida === -1 ? '⏱ Tempo esgotado!' : '✘ Incorreto!'}</strong><br><br>${q.explicacao}`;
    expBox.className = 'explanation-box show';
  } else {
    expBox.className = 'explanation-box';
  }

  // Botões de navegação
  const btnPular = document.getElementById('btn-pular');
  const btnNext  = document.getElementById('btn-next');

  btnPular.style.display = jaResp ? 'none' : '';
  btnNext.style.display  = jaResp ? '' : 'none';
  btnNext.textContent    = indiceAtual + 1 < total ? 'Próxima questão →' : 'Ver resultado';
}

function registrarResposta(escolhida) {
  if (respondeu) return;
  respondeu = true;
  clearInterval(timerInterval);

  const q             = questoes[indiceAtual];
  const acertou       = escolhida === q.correta;
  const usouTeoria    = !!teoriaConsultada[indiceAtual];
  const pts           = acertou ? (usouTeoria ? 0.5 : 1) : 0;
  pontuacao          += pts;

  respostasMap[indiceAtual] = {
    acertou, escolhida, pts, usouTeoria,
    corretaIdx: q.correta,
    enunciado:  q.enunciado,
    opcoes:     q.opcoes,
    explicacao: q.explicacao,
    banca:      q.banca, ano: q.ano
  };
  _atualizarQDif(q, acertou, usouTeoria);
  _atualizarPlacar();
  _salvarSessaoAtiva();

  document.querySelectorAll('.option-item').forEach(li => {
    li.classList.add('disabled');
    const orig = parseInt(li.dataset.orig);
    if (orig === q.correta)             li.classList.add('correct');
    if (orig === escolhida && !acertou) li.classList.add('wrong');
  });

  const expBox = document.getElementById('explanation-box');
  expBox.innerHTML = `<strong>${acertou ? '✔ Correto!' : escolhida === -1 ? '⏱ Tempo esgotado!' : '✘ Incorreto!'}</strong><br><br>${q.explicacao}`;
  expBox.classList.add('show');

  document.getElementById('btn-pular').style.display = 'none';
  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = indiceAtual + 1 < questoes.length ? 'Próxima questão →' : 'Ver resultado';
  btnNext.style.display = '';
}

document.getElementById('btn-next').addEventListener('click', () => {
  indiceAtual++;
  if (indiceAtual < questoes.length) renderQuestao();
  else mostrarResultado();
});


document.getElementById('btn-pular').addEventListener('click', () => {
  indiceAtual++;
  if (indiceAtual < questoes.length) renderQuestao();
  else mostrarResultado();
});

document.getElementById('btn-voltar-temas').addEventListener('click', () => {
  clearInterval(timerInterval);
  document.getElementById('teoria-overlay').classList.remove('visivel');
  document.getElementById('teoria-panel').classList.remove('visivel');
  document.getElementById('teoria-overlay').classList.add('hidden');
  document.getElementById('teoria-panel').classList.add('hidden');
  qsVistasNaSessao = new Set();
  _abrirTelaSimulado();
});

document.getElementById('btn-desistir').addEventListener('click', () => {
  mostrarResultado();
});

document.getElementById('btn-pausar').addEventListener('click', () => {
  simuladoPausado = !simuladoPausado;
  const btn = document.getElementById('btn-pausar');
  const quizBody = document.getElementById('question-text');
  if (simuladoPausado) {
    btn.textContent = '▶ Continuar';
    btn.style.borderColor = '#22c55e';
    btn.style.color       = '#22c55e';
    document.getElementById('options-list').style.visibility   = 'hidden';
    document.getElementById('explanation-box').style.visibility = 'hidden';
    quizBody.style.filter = 'blur(4px)';
  } else {
    btn.textContent = '⏸ Pausar';
    btn.style.borderColor = '#6366f1';
    btn.style.color       = '#6366f1';
    document.getElementById('options-list').style.visibility   = '';
    document.getElementById('explanation-box').style.visibility = '';
    quizBody.style.filter = '';
  }
});

// ══════════════════════════════════════════════════════════
//  RESULTADO
// ══════════════════════════════════════════════════════════
function mostrarResultado() {
  _limparSessaoAtiva();
  clearInterval(timerInterval);
  document.getElementById('teoria-overlay').classList.remove('visivel');
  document.getElementById('teoria-panel').classList.remove('visivel');
  document.getElementById('teoria-overlay').classList.add('hidden');
  document.getElementById('teoria-panel').classList.add('hidden');
  ir('screen-result');

  const total = questoes.length;
  const pts   = pontuacao;
  const pct   = Math.round((pts / total) * 100);

  document.getElementById('result-tema').textContent = `Tema: ${temaAtual.nome}`;
  document.getElementById('score-num').textContent   = pts % 1 === 0 ? pts : pts.toFixed(1);
  document.getElementById('score-total').textContent = total;

  let msg, sub;
  if      (pct === 100) { msg = 'Perfeito!';            sub = 'Você acertou tudo sem consultar a teoria!'; }
  else if (pct >= 70)   { msg = 'Muito bem!';           sub = `${pts.toFixed(1)} de ${total} pontos. Continue assim!`; }
  else if (pct >= 50)   { msg = 'Bom desempenho!';      sub = `${pts.toFixed(1)} de ${total} pontos. Revise os pontos errados.`; }
  else                  { msg = 'Continue praticando!'; sub = `${pts.toFixed(1)} de ${total} pontos. Estude a teoria e tente novamente.`; }

  document.getElementById('score-msg').textContent = msg;
  document.getElementById('score-sub').textContent = sub;

  // Salva e exibe histórico — só se pelo menos uma questão foi respondida
  const respondidas   = Object.keys(respostasMap).length;
  const acertosSessao = Object.values(respostasMap).filter(r => r.acertou).length;
  if (respondidas > 0) _salvarSessao(temaAtual.id, acertosSessao, respondidas);
  const hist = _historico()[temaAtual.id];
  const histEl = document.getElementById('score-hist');
  if (hist && hist.sessoes > 1) {
    const pctH = Math.round((hist.acertos / hist.total) * 100);
    histEl.innerHTML = `Histórico acumulado: <strong>${hist.acertos}/${hist.total}</strong> acertos em <strong>${hist.sessoes}</strong> sessões — ${pctH}%`;
  } else {
    histEl.textContent = '';
  }

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';
  questoes.forEach((q, idx) => {
    const r   = respostasMap[idx];
    const div = document.createElement('div');
    if (!r) {
      div.className = 'review-item errou';
      const eq = q.enunciado.replace(/<[^>]+>/g, '').substring(0, 120);
      div.innerHTML = `<div class="ri-q">${idx + 1}. ${eq}…</div><div class="ri-resp"><span class="err">⏭ Pulada</span></div>`;
    } else {
      div.className = `review-item ${r.acertou ? 'acertou' : 'errou'}`;
      const eq     = r.enunciado.replace(/<[^>]+>/g, '').substring(0, 120);
      const rt     = r.opcoes[r.escolhida];
      const ct     = r.opcoes[r.corretaIdx];
      const ptLabel = r.pts === 1 ? '1 pt' : r.pts === 0.5 ? '0,5 pt' : '0 pt';
      const teoriaTag = r.usouTeoria ? ' <span class="ri-teoria-tag">📖 teoria consultada</span>' : '';
      div.innerHTML = `
        <div class="ri-q">${idx + 1}. ${eq}… <span class="ri-pts">${ptLabel}</span>${teoriaTag}</div>
        <div class="ri-resp">
          ${r.acertou
            ? `<span class="ok">✔ ${ct}</span>`
            : `<span class="err">✘ ${rt}</span> &nbsp;|&nbsp; <span class="ok">Correta: ${ct}</span>`
          }
        </div>`;
    }
    reviewList.appendChild(div);
  });
}

document.getElementById('btn-retry').addEventListener('click', () => {
  // Passa as questões já vistas: retry mostrará primeiro as que o usuário ainda não respondeu
  iniciarSimulado(temaAtual, new Set(qsVistasNaSessao));
});

document.getElementById('btn-home-result').addEventListener('click', () => {
  qsVistasNaSessao = new Set();
  _abrirTelaSimulado();
});

document.getElementById('btn-estudar-result').addEventListener('click', () => {
  if (temaAtual) {
    renderTemaGrid('study-tema-grid', abrirTeoria, IDS_FONETICA_ORTOGRAFIA);
    abrirTeoria(temaAtual.id);
  }
});

// ══════════════════════════════════════════════════════════
//  PAINEL DE TEORIA
// ══════════════════════════════════════════════════════════

// IDs que não têm entrada própria em TEMAS ou são redundantes com seu pai:
// colapsar para o tema pai antes de renderizar.
// Para adicionar um novo grupo: inserir uma entrada em _GRUPOS_COLAPSO.
const _GRUPOS_COLAPSO = [
  {
    membros: ['oxitonas', 'paroxitonas', 'proparoxitonas', 'acentuacaoGrafica'],
    pai:     'tonicidade',
  }
];

function _resolverTemasParaPanel(ids) {
  const set = new Set(ids);

  for (const grupo of _GRUPOS_COLAPSO) {
    if (grupo.membros.some(id => set.has(id))) {
      for (const id of grupo.membros) set.delete(id);
      set.add(grupo.pai);
    }
  }

  // Remover IDs que não existem em TEMAS (não têm teoria para exibir)
  return [...set].filter(id => TEMAS.some(t => t.id === id && t.teoria));
}

function abrirPainelTeoria() {
  const q = questoes[indiceAtual];
  if (!q || !q.temas_relacionados || !q.temas_relacionados.length) return;

  // Marca que teoria foi consultada nesta questão (penalidade de 0,5pt se acertar)
  if (!respondeu) teoriaConsultada[indiceAtual] = true;

  const temaIds = _resolverTemasParaPanel(q.temas_relacionados);
  if (!temaIds.length) return;

  _mostrarTodasTeoriasEmpilhadas(temaIds);

  const overlay = document.getElementById('teoria-overlay');
  const panel   = document.getElementById('teoria-panel');
  overlay.classList.remove('hidden');
  panel.classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay.classList.add('visivel');
    panel.classList.add('visivel');
  });
}

function _mostrarTodasTeoriasEmpilhadas(temaIds) {
  const body = document.getElementById('teoria-panel-body');
  body.innerHTML = '';

  const temas = temaIds.map(id => TEMAS.find(x => x.id === id)).filter(Boolean);

  // Índice de navegação rápida (só quando há mais de um tema)
  if (temas.length > 1) {
    const nav = document.createElement('div');
    nav.className = 'teoria-nav';
    nav.innerHTML = temas.map((t, i) =>
      `<a class="teoria-nav-link" href="#teoria-sec-${i}">${t.icon} ${t.nome}</a>`
    ).join('');
    body.appendChild(nav);
  }

  // Uma seção por tema, todas empilhadas
  temas.forEach((t, i) => {
    const sec = document.createElement('div');
    sec.className = 'teoria-panel-tema';
    sec.id = `teoria-sec-${i}`;
    sec.innerHTML = `<h2>${t.icon} ${t.nome}</h2><div class="teoria-body">${t.teoria}</div>`;
    body.appendChild(sec);

    if (i < temas.length - 1) {
      const hr = document.createElement('hr');
      hr.className = 'teoria-divisor';
      body.appendChild(hr);
    }
  });

  body.scrollTop = 0;
}

function fecharPainelTeoria() {
  const overlay = document.getElementById('teoria-overlay');
  const panel   = document.getElementById('teoria-panel');
  overlay.classList.remove('visivel');
  panel.classList.remove('visivel');
  setTimeout(() => {
    overlay.classList.add('hidden');
    panel.classList.add('hidden');
  }, 300);

}

document.getElementById('btn-consultar-teoria').addEventListener('click', abrirPainelTeoria);
document.getElementById('btn-fechar-teoria').addEventListener('click', fecharPainelTeoria);
document.getElementById('teoria-overlay').addEventListener('click', fecharPainelTeoria);

// ══════════════════════════════════════════════════════════
//  INICIALIZAÇÃO
// ══════════════════════════════════════════════════════════
ir('screen-home');
