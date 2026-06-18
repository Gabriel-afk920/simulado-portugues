
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
function shuffleAdaptativo(arr) {
  // Weighted random shuffle: peso × random → sort. Questões difíceis tendem a aparecer
  // mais cedo, mas o random garante ordem diferente a cada sessão.
  const items = arr.map(q => ({ q, score: _qPeso(q) * Math.random() }));
  items.sort((a, b) => b.score - a.score);
  return items.map(x => x.q);
}

// ══════════════════════════════════════════════════════════
//  ESTADO DO SIMULADO
// ══════════════════════════════════════════════════════════
const TEMPO_SIMULADO = 10 * 60; // 10 minutos
let temaAtual        = null;
let questoes         = [];
let indiceAtual      = 0;
let pontuacao        = 0;
let respostas        = [];
let respostasMap     = {};
let shuffleMap       = {};
let teoriaConsultada = {};
let timerInterval    = null;
let tempoSimulado    = TEMPO_SIMULADO;
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

document.getElementById('btn-ir-simulado').addEventListener('click', () => {
  renderTemaGrid('quiz-tema-grid', selecionarTemaQuiz, IDS_FONETICA_ORTOGRAFIA);
  temaAtual = null;
  document.getElementById('btn-iniciar').disabled = true;
  ir('screen-quiz-topics');
});

document.getElementById('btn-back-study-home').addEventListener('click', () => ir('screen-home'));
document.getElementById('btn-back-quiz-home').addEventListener('click',  () => ir('screen-home'));

// ══════════════════════════════════════════════════════════
//  GRADE DE TEMAS (reutilizável)
// ══════════════════════════════════════════════════════════
const IDS_FONETICA_ORTOGRAFIA = ['ditongos','digrafos','hiatos','fonemas','ortografia','tritongos','silabas','acentuacaoGrafica','crase','tonicidade','hifen'];

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
      .filter(sub => sub && sub.questoes && sub.questoes.length);
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
}

document.getElementById('btn-iniciar').addEventListener('click', () => {
  if (temaAtual) iniciarSimulado(temaAtual);
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
      btnIniciar.disabled = _subtemasQuizSelecionados.size === 0;
    });
    grid.appendChild(div);
  });
  btnIniciar.disabled = true;
}

document.getElementById('btn-select-all-fonetica').addEventListener('click', () => {
  const btnIniciar = document.getElementById('btn-iniciar-fonetica');
  document.querySelectorAll('#quiz-fonetica-grid .tema-card').forEach(card => {
    card.classList.add('selected');
    _subtemasQuizSelecionados.add(card.dataset.subId);
  });
  btnIniciar.disabled = false;
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

function iniciarSimulado(tema) {
  temaAtual        = tema;
  questoes         = shuffleAdaptativo(tema.questoes);
  if (!questoes.length) return;
  indiceAtual      = 0;
  pontuacao        = 0;
  respostas        = [];
  respostasMap     = {};
  shuffleMap       = {};
  teoriaConsultada = {};
  tempoSimulado    = TEMPO_SIMULADO;

  clearInterval(timerInterval);
  const timerEl = document.getElementById('timer-box');
  timerEl.textContent = _fmtTempo(tempoSimulado);
  timerEl.className   = 'timer-box';
  timerInterval = setInterval(() => {
    tempoSimulado--;
    timerEl.textContent = _fmtTempo(tempoSimulado);
    if      (tempoSimulado <= 60)  timerEl.className = 'timer-box danger';
    else if (tempoSimulado <= 120) timerEl.className = 'timer-box warning';
    if (tempoSimulado <= 0) { clearInterval(timerInterval); mostrarResultado(); }
  }, 1000);

  ir('screen-quiz');
  renderQuestao();
}

function renderQuestao() {
  const q         = questoes[indiceAtual];
  const total     = questoes.length;
  const jaResp    = respostasMap.hasOwnProperty(indiceAtual);
  respondeu       = jaResp;

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
  document.getElementById('question-text').innerHTML = cabecalho + q.enunciado;


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
  const btnAnterior = document.getElementById('btn-anterior');
  const btnPular    = document.getElementById('btn-pular');
  const btnNext     = document.getElementById('btn-next');

  btnAnterior.style.display = indiceAtual > 0 ? '' : 'none';
  btnPular.style.display    = jaResp ? 'none' : '';
  btnNext.style.display     = jaResp ? '' : 'none';
  btnNext.textContent       = indiceAtual + 1 < total ? 'Próxima questão →' : 'Ver resultado';
}

function registrarResposta(escolhida) {
  if (respondeu) return;
  respondeu = true;

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

document.getElementById('btn-anterior').addEventListener('click', () => {
  if (indiceAtual > 0) { indiceAtual--; renderQuestao(); }
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
  renderTemaGrid('quiz-tema-grid', selecionarTemaQuiz, IDS_FONETICA_ORTOGRAFIA);
  temaAtual = null;
  document.getElementById('btn-iniciar').disabled = true;
  ir('screen-quiz-topics');
});

document.getElementById('btn-desistir').addEventListener('click', () => {
  mostrarResultado();
});

// ══════════════════════════════════════════════════════════
//  RESULTADO
// ══════════════════════════════════════════════════════════
function mostrarResultado() {
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

document.getElementById('btn-retry').addEventListener('click', () => iniciarSimulado(temaAtual));

document.getElementById('btn-home-result').addEventListener('click', () => {
  renderTemaGrid('quiz-tema-grid', selecionarTemaQuiz, IDS_FONETICA_ORTOGRAFIA);
  temaAtual = null;
  document.getElementById('btn-iniciar').disabled = true;
  ir('screen-quiz-topics');
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
const _TRIO_FENOMENOS = ['ditongos', 'tritongos', 'hiatos'];

function _expandirTemasTrio(ids) {
  if (ids.some(id => _TRIO_FENOMENOS.includes(id)))
    return [...new Set([..._TRIO_FENOMENOS, ...ids])];
  return ids;
}

function abrirPainelTeoria() {
  const q = questoes[indiceAtual];
  if (!q || !q.temas_relacionados || !q.temas_relacionados.length) return;

  // Marca que teoria foi consultada nesta questão (penalidade de 0,5pt se acertar)
  if (!respondeu) teoriaConsultada[indiceAtual] = true;

  const temaIds = _expandirTemasTrio(q.temas_relacionados);
  if (temaIds.length === 1) {
    const t = TEMAS.find(x => x.id === temaIds[0]);
    if (t) _mostrarConteudoTema(t, temaIds);
  } else {
    _mostrarSeletorTemas(temaIds);
  }

  const overlay = document.getElementById('teoria-overlay');
  const panel   = document.getElementById('teoria-panel');
  overlay.classList.remove('hidden');
  panel.classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay.classList.add('visivel');
    panel.classList.add('visivel');
  });
}

function _mostrarSeletorTemas(temaIds) {
  const body = document.getElementById('teoria-panel-body');
  body.innerHTML = '';

  const titulo = document.createElement('p');
  titulo.className = 'teoria-selector-titulo';
  titulo.textContent = 'Selecione o tema que deseja consultar:';
  body.appendChild(titulo);

  temaIds.forEach(temaId => {
    const t = TEMAS.find(x => x.id === temaId);
    if (!t) return;
    const btn = document.createElement('button');
    btn.className = 'teoria-tema-btn';
    btn.innerHTML = `<span class="teoria-tema-icon">${t.icon}</span><span class="teoria-tema-nome">${t.nome}</span>`;
    btn.addEventListener('click', () => _mostrarConteudoTema(t, temaIds));
    body.appendChild(btn);
  });

  body.scrollTop = 0;
}

function _mostrarConteudoTema(t, temaIds) {
  const body = document.getElementById('teoria-panel-body');
  body.innerHTML = '';

  if (temaIds.length > 1) {
    const btnVoltar = document.createElement('button');
    btnVoltar.className = 'teoria-voltar-btn';
    btnVoltar.innerHTML = '← Voltar aos temas';
    btnVoltar.addEventListener('click', () => _mostrarSeletorTemas(temaIds));
    body.appendChild(btnVoltar);
  }

  const div = document.createElement('div');
  div.className = 'teoria-panel-tema';
  div.innerHTML = `<h2>${t.icon} ${t.nome}</h2><div class="teoria-body">${t.teoria}</div>`;
  body.appendChild(div);

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
