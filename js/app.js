
// ══════════════════════════════════════════════════════════
//  HISTÓRICO DE DESEMPENHO (localStorage)
//  Chave namespaced por matéria ("<materia>::<temaId>") para não colidir
//  entre matérias diferentes que por acaso usem o mesmo temaId. Enquanto
//  só existir 'portugues', toda chave nova é "portugues::<temaId>" — e a
//  leitura ainda cai de volta pra chave antiga (bare temaId) se existir,
//  então dado de usuário já salvo antes desta mudança não se perde.
// ══════════════════════════════════════════════════════════
function _historico() {
  try { return JSON.parse(localStorage.getItem('desempenho') || '{}'); } catch { return {}; }
}
function _histKey(temaId, materia) {
  return (materia || 'portugues') + '::' + temaId;
}
function _histEntry(temaId, materia) {
  const h = _historico();
  return h[_histKey(temaId, materia)] || h[temaId] || null;
}
function _salvarSessao(temaId, acertos, total, materia) {
  const h   = _historico();
  const key = _histKey(temaId, materia);
  if (!h[key]) {
    // Migra estatística salva com a chave antiga (bare temaId), se existir
    h[key] = h[temaId] ? h[temaId] : { acertos: 0, total: 0, sessoes: 0 };
    if (h[temaId]) delete h[temaId];
  }
  h[key].acertos += acertos;
  h[key].total   += total;
  h[key].sessoes += 1;
  localStorage.setItem('desempenho', JSON.stringify(h));
  if (window.progressoSync) window.progressoSync.marcarAtualizado();
}

// ══════════════════════════════════════════════════════════
//  SESSÕES ATIVAS — continuar de onde parou
//  Uma sessão por tema (chave = temaId), para permitir pausar um simulado
//  e iniciar/continuar outro sem perder o progresso do primeiro. Lê também
//  a chave singular antiga ('sessao_ativa') como migração, já que antes só
//  existia uma sessão ativa por vez no app inteiro.
// ══════════════════════════════════════════════════════════
function _todasSessoesAtivas() {
  try {
    const mapa = JSON.parse(localStorage.getItem('sessoes_ativas') || '{}');
    const antiga = JSON.parse(localStorage.getItem('sessao_ativa') || 'null');
    if (antiga && antiga.temaId && !mapa[antiga.temaId]) {
      mapa[antiga.temaId] = antiga;
      localStorage.setItem('sessoes_ativas', JSON.stringify(mapa));
      localStorage.removeItem('sessao_ativa');
    }
    return mapa;
  } catch { return {}; }
}

function _salvarSessaoAtiva() {
  if (!temaAtual || !questoes.length) return;
  const mapa = _todasSessoesAtivas();
  mapa[temaAtual.id] = {
    temaId:           temaAtual.id,
    questaoHashes:    questoes.map(_qHash),
    indiceAtual,
    respostasMap,
    shuffleMap,
    teoriaConsultada,
    pontuacao,
  };
  localStorage.setItem('sessoes_ativas', JSON.stringify(mapa));
  if (window.progressoSync) window.progressoSync.marcarAtualizado();
}

function _sessaoAtiva(temaId) {
  const s = _todasSessoesAtivas()[temaId];
  return s && s.indiceAtual < (s.questaoHashes || []).length ? s : null;
}

function _limparSessaoAtiva(temaId) {
  const mapa = _todasSessoesAtivas();
  delete mapa[temaId];
  localStorage.setItem('sessoes_ativas', JSON.stringify(mapa));
  if (window.progressoSync) window.progressoSync.marcarAtualizado();
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
  if (window.progressoSync) window.progressoSync.marcarAtualizado();
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
const TEMPO_POR_QUESTAO = 1200; // 20 minutos por questão
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
let selecionadaAtual = null; // índice original da alternativa marcada, aguardando confirmação
let filaPuladas      = [];   // questões puladas aguardando rodada extra
let emRodadaPuladas  = false; // true quando estamos respondendo as puladas


// ══════════════════════════════════════════════════════════
//  NAVEGAÇÃO ENTRE TELAS
// ══════════════════════════════════════════════════════════
const TELAS = ['screen-login','screen-home','screen-materia-estudar','screen-materia-simulado',
               'screen-study-topics','screen-study-fonetica','screen-study-content',
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
//  A tela de seleção de matéria (screen-materia-estudar/simulado) só
//  aparece quando existe mais de uma matéria cadastrada em MATERIAS
//  (ver temas.js). Com uma matéria só (hoje: 'portugues'), Estudar/
//  Simulado pulam direto pra tela de temas de sempre — nenhuma mudança
//  de UX enquanto MATERIAS.length === 1.
// ══════════════════════════════════════════════════════════
function _abrirTopicosEstudar(materiaId) {
  renderTemaGrid('study-tema-grid', abrirTeoria, materiaId);
  ir('screen-study-topics');
}

document.getElementById('btn-ir-estudar').addEventListener('click', () => {
  if (MATERIAS.length > 1) {
    renderMateriaGrid('materia-estudar-grid', (materiaId) => _abrirTopicosEstudar(materiaId));
    ir('screen-materia-estudar');
  } else {
    _abrirTopicosEstudar(MATERIAS[0] && MATERIAS[0].id);
  }
});

function _abrirTopicosSimulado(materiaId) {
  renderTemaGrid('quiz-tema-grid', selecionarTemaQuiz, materiaId);
  temaAtual = null;
  document.getElementById('btn-iniciar').disabled = true;
  ir('screen-quiz-topics');

  // Marca com um selo "em andamento" todo card que tenha sessão salva --
  // várias sessões podem coexistir agora (uma por tema), então não
  // seleciona nenhuma automaticamente, só sinaliza onde há progresso.
  try {
    const mapa = _todasSessoesAtivas();
    Object.values(mapa).forEach(s => {
      if (!s || !s.temaId || s.indiceAtual >= (s.questaoHashes || []).length) return;
      const idAlvo = s.temaId.endsWith('_mix') ? s.temaId.replace(/_mix$/, '') : s.temaId;
      const card = document.querySelector(`#quiz-tema-grid [data-id="${idAlvo}"]`);
      if (card && !card.querySelector('.andamento-badge')) {
        const b = document.createElement('div');
        b.className = 'andamento-badge';
        b.textContent = '▶ Em andamento';
        card.appendChild(b);
      }
    });
  } catch {}
}

function _abrirTelaSimulado() {
  if (MATERIAS.length > 1) {
    renderMateriaGrid('materia-simulado-grid', (materiaId) => _abrirTopicosSimulado(materiaId));
    ir('screen-materia-simulado');
  } else {
    _abrirTopicosSimulado(MATERIAS[0] && MATERIAS[0].id);
  }
}

document.getElementById('btn-ir-simulado').addEventListener('click', _abrirTelaSimulado);

// Volta da tela de tópicos pra tela de seleção de matéria quando ela existe
// (MATERIAS.length > 1) -- senão a tela de seleção nunca foi exibida (pulada
// em _abrirTopicosEstudar/_abrirTopicosSimulado), então "voltar" vai direto
// pra home, preservando o comportamento de quando só havia 1 matéria (achado
// em teste: com 15 matérias, "Voltar" da lista de tópicos pulava a tela de
// seleção de matéria inteira e caía direto na home).
function _voltarParaSelecaoOuHome(screenSelecaoMateria) {
  ir(MATERIAS.length > 1 ? screenSelecaoMateria : 'screen-home');
}

document.getElementById('btn-back-study-home').addEventListener('click', () => _voltarParaSelecaoOuHome('screen-materia-estudar'));
document.getElementById('btn-back-quiz-home').addEventListener('click',  () => _voltarParaSelecaoOuHome('screen-materia-simulado'));
// Estes dois já ESTÃO na tela de seleção de matéria -- voltar delas sempre
// significa home (não há nível intermediário entre home e seleção de matéria).
document.getElementById('btn-back-materia-estudar').addEventListener('click',  () => ir('screen-home'));
document.getElementById('btn-back-materia-simulado').addEventListener('click', () => ir('screen-home'));

// ══════════════════════════════════════════════════════════
//  GRADE DE TEMAS (reutilizável)
// ══════════════════════════════════════════════════════════
let _temaSubtemasAtual = null;

function renderTemaGrid(gridId, onClickFn, materiaFiltro) {
  // Só esconde da grade principal os subtemas de um grupo marcado com
  // esconderSubtemasDaGrade (ex.: Fonética e Ortografia) -- os grupos "_todos"
  // (Legislação, Noções de Administração, Matemática, Informática) também têm
  // `subtemas` (pra habilitar a mistura de temas no simulado, ver init.js
  // _criarGrupoCombinado), mas SEM essa flag, senão TODOS os subtemas de cada
  // uma dessas 4 matérias somem da grade e só resta o card único "Todos" --
  // sem nenhum jeito de iniciar simulado de um tema específico (achado em
  // teste: usuário só conseguia iniciar 18 simulados avulsos em Português,
  // zero nas outras 4 matérias, violando a regra de estrutura de temas do
  // CLAUDE.md).
  const excluir = TEMAS.filter(t => t.esconderSubtemasDaGrade).flatMap(t => t.subtemas || []);
  const grid = document.getElementById(gridId);
  const hist = _historico();
  grid.innerHTML = '';
  TEMAS.forEach(t => {
    if (excluir.includes(t.id)) return;
    if (materiaFiltro && (t.materia || 'portugues') !== materiaFiltro) return;
    const card = document.createElement('div');
    card.className = 'tema-card';
    card.dataset.id = t.id;

    let badge = '';
    const h = hist[_histKey(t.id, t.materia)] || hist[t.id];
    if (h && h.total > 0) {
      const pct = Math.round((h.acertos / h.total) * 100);
      const cor = pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
      badge = `<div class="perf-badge" style="background:${cor}">${pct}%</div>`;
    }

    const nQ = t.questoes ? t.questoes.length : 0;
    const countEl = nQ > 0 ? `<div class="card-count">${nQ} questões</div>` : '';
    card.innerHTML = `${badge}<div class="icon">${t.icon}</div><div class="nome">${t.nome}</div>${countEl}<div class="desc">${t.desc}</div>`;
    card.addEventListener('click', () => onClickFn(t.id, card));
    grid.appendChild(card);
  });
}

// Grade de seleção de matéria — só é usada quando MATERIAS.length > 1
function renderMateriaGrid(gridId, onClickFn) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  MATERIAS.forEach(m => {
    const card = document.createElement('div');
    card.className = 'tema-card';
    card.dataset.id = m.id;
    card.innerHTML = `<div class="icon">${m.icon}</div><div class="nome">${m.nome}</div><div class="desc">${m.desc}</div>`;
    card.addEventListener('click', () => onClickFn(m.id, card));
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════════════════
//  SEÇÃO ESTUDAR
// ══════════════════════════════════════════════════════════
let origemTeoria = 'screen-study-topics';

function abrirTeoria(id) {
  const t = TEMAS.find(x => x.id === id);
  if (!t) return;

  if (t.subtemas && t.subtemas.length) {
    document.getElementById('study-fonetica-titulo').textContent = `${t.icon} ${t.nome}`;
    const ocultar = t.ocultar_subtemas || [];
    const grid = document.getElementById('study-fonetica-grid');
    grid.innerHTML = '';
    t.subtemas.forEach(subId => {
      if (ocultar.includes(subId)) return;
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

// ══════════════════════════════════════════════════════════
//  COPIAR CONTEÚDO DA TEORIA (substitui o download de PDF -- o PDF exigia
//  html2pdf.js via CDN e nunca funcionou de forma confiável no Safari/iOS,
//  mesmo depois de várias tentativas de correção. Copiar pra área de
//  transferência é universal, sem dependência externa, sem limite de
//  tamanho de canvas no mobile.)
// ══════════════════════════════════════════════════════════
function copiarTeoriaConteudo() {
  if (!temaAtual) return;
  const corpo = document.querySelector('#teoria-container .teoria-body');
  if (!corpo) return;

  const texto = `${temaAtual.nome}\n\n${corpo.innerText}`;
  const btn = document.getElementById('btn-copiar-teoria');
  const textoOriginal = btn.textContent;

  const mostrarSucesso = () => {
    btn.textContent = '✅ Copiado!';
    setTimeout(() => { btn.textContent = textoOriginal; }, 2000);
  };
  const mostrarFalha = () => {
    alert('Não foi possível copiar. Selecione o texto manualmente.');
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(mostrarSucesso).catch(() => {
      if (!_copiarViaExecCommand(texto)) mostrarFalha(); else mostrarSucesso();
    });
  } else {
    if (_copiarViaExecCommand(texto)) mostrarSucesso(); else mostrarFalha();
  }
}

// Fallback pra contextos sem Clipboard API (ex: HTTP não-seguro) --
// document.execCommand está deprecated mas ainda é o único jeito de copiar
// nesses casos.
function _copiarViaExecCommand(texto) {
  const textarea = document.createElement('textarea');
  textarea.value = texto;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  document.body.removeChild(textarea);
  return ok;
}

document.getElementById('btn-copiar-teoria').addEventListener('click', copiarTeoriaConteudo);

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
  const t = TEMAS.find(x => x.id === id);
  if (t && t.subtemas && t.subtemas.length) {
    // Sessão de tema com subtemas já em andamento (id sintético "<id>_mix")
    // -- oferece continuar direto, sem passar pela tela de seleção de subtema.
    const sessaoMix = _sessaoAtiva(id + '_mix');
    if (sessaoMix) {
      document.querySelectorAll('#quiz-tema-grid .tema-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      temaAtual = {
        id: id + '_mix',
        nome: t.nome,
        materia: t.materia,
        questoes: t.subtemas.flatMap(subId => {
          const sub = TEMAS.find(x => x.id === subId);
          return sub ? sub.questoes : [];
        }),
      };
      const respondidas = Object.keys(sessaoMix.respostasMap || {}).length;
      document.getElementById('continuar-info').textContent =
        `questão ${sessaoMix.indiceAtual + 1} de ${sessaoMix.questaoHashes.length} · ${respondidas} respondidas`;
      document.getElementById('continuar-box').style.display = '';
      document.getElementById('btn-iniciar').style.display = 'none';
      return;
    }
    _temaSubtemasAtual = t;
    document.getElementById('quiz-fonetica-titulo').textContent = `${t.icon} ${t.nome}`;
    const ocultar = t.ocultar_subtemas || [];
    // Mostra TODOS os subtemas (mesmo com 0 questões ainda) -- só oculta os
    // explicitamente marcados em ocultar_subtemas. Subtemas vazios aparecem
    // desabilitados na grade (ver _renderSubtemasQuiz), em vez de sumirem —
    // assim o usuário vê o escopo completo da seção mesmo antes da extração
    // terminar de popular todos os subtemas.
    const subtemasDisponiveis = t.subtemas
      .map(subId => TEMAS.find(x => x.id === subId))
      .filter(sub => sub && !ocultar.includes(sub.id));
    _renderSubtemasQuiz(subtemasDisponiveis);
    ir('screen-quiz-fonetica');
    return;
  }
  document.querySelectorAll('#quiz-tema-grid .tema-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  temaAtual = TEMAS.find(t => t.id === id);
  const semQuestoes = !temaAtual.questoes.length;
  const btn = document.getElementById('btn-iniciar');
  const box = document.getElementById('continuar-box');

  const sessao = _sessaoAtiva(id);
  if (sessao && !semQuestoes) {
    const respondidas = Object.keys(sessao.respostasMap || {}).length;
    document.getElementById('continuar-info').textContent =
      `questão ${sessao.indiceAtual + 1} de ${sessao.questaoHashes.length} · ${respondidas} respondidas`;
    box.style.display = '';
    // Sessão ativa: só "Continuar"/"Novo simulado" decidem o destino do progresso —
    // "Iniciar Simulado" ficava disponível e reiniciava do zero sem excluir as já respondidas.
    btn.style.display = 'none';
  } else {
    box.style.display = 'none';
    btn.style.display = '';
    btn.disabled    = semQuestoes;
    btn.textContent = semQuestoes ? 'Sem questões disponíveis' : 'Iniciar Simulado';
  }
}

document.getElementById('btn-iniciar').addEventListener('click', () => {
  if (temaAtual) { _limparSessaoAtiva(temaAtual.id); iniciarSimulado(temaAtual); }
});

document.getElementById('btn-continuar').addEventListener('click', () => {
  if (!temaAtual) return;
  const s = _sessaoAtiva(temaAtual.id);
  if (s) _restaurarSessaoAtiva(s, temaAtual);
});

document.getElementById('btn-novo-simulado').addEventListener('click', () => {
  if (!temaAtual) return;
  const s = _sessaoAtiva(temaAtual.id);
  const respondidas = s ? Object.keys(s.respostasMap || {}).length : 0;
  if (respondidas > 0 && !confirm(`Isso vai apagar seu progresso atual (${respondidas} respondidas). Continuar?`)) return;
  _limparSessaoAtiva(temaAtual.id);
  document.getElementById('continuar-box').style.display = 'none';
  iniciarSimulado(temaAtual);
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
    const semQuestoes = !sub.questoes || !sub.questoes.length;
    div.className = 'tema-card' + (semQuestoes ? ' sem-questoes' : '');
    div.dataset.subId = sub.id;
    let badge = '';
    const h = hist[_histKey(sub.id, sub.materia)] || hist[sub.id];
    if (h && h.total > 0) {
      const pct = Math.round((h.acertos / h.total) * 100);
      const cor = pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
      badge = `<div class="perf-badge" style="background:${cor}">${pct}%</div>`;
    }
    const countEl = semQuestoes ? '<div class="card-count">Em breve — sem questões ainda</div>' : '';
    div.innerHTML = `${badge}<div class="icon">${sub.icon}</div><div class="nome">${sub.nome}</div>${countEl}<div class="desc">${sub.desc}</div>`;
    if (semQuestoes) {
      div.style.opacity = '0.5';
      div.style.cursor = 'not-allowed';
    } else {
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
    }
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
  document.querySelectorAll('#quiz-fonetica-grid .tema-card:not(.sem-questoes)').forEach(card => {
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
  const parent = _temaSubtemasAtual || { id: 'fonetica', nome: 'Fonética e Ortografia' };
  iniciarSimulado({ id: parent.id + '_mix', nome: parent.nome, materia: parent.materia, questoes: questoesCombinadas });
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
  filaPuladas      = [];
  emRodadaPuladas  = false;
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
    if      (tempoSimulado <= 60)  timerEl.className = 'timer-box danger';
    else if (tempoSimulado <= 120) timerEl.className = 'timer-box warning';
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
  selecionadaAtual = null;

  if (jaResp) {
    clearInterval(timerInterval);
    const timerEl = document.getElementById('timer-box');
    timerEl.textContent = '0:00';
    timerEl.className   = 'timer-box';
  } else {
    _iniciarTimerQuestao();
  }

  _atualizarPlacar();
  document.getElementById('progress-info').textContent = emRodadaPuladas
    ? `🔄 Questão pulada — ${indiceAtual + 1} de ${total}`
    : `Questão ${indiceAtual + 1} de ${total}`;
  document.getElementById('progress-bar').style.width  = ((indiceAtual / total) * 100) + '%';
  document.getElementById('topic-tag').textContent     = temaAtual.nome;

  // Mostra botão de teoria só se houver teoria de verdade pra exibir (mesmo
  // filtro usado por abrirPainelTeoria/_resolverTemasParaPanel) -- só ter
  // temas_relacionados não basta, o tema pode existir com teoria vazia (ex:
  // matérias de concurso além de Português, que ainda não têm teoria escrita).
  const btnTeoria = document.getElementById('btn-consultar-teoria');
  const temTeoriaReal = q.temas_relacionados && _resolverTemasParaPanel(q.temas_relacionados).length > 0;
  btnTeoria.style.display = temTeoriaReal ? '' : 'none';

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
      li.addEventListener('click', () => { if (!respondeu) selecionarAlternativa(origIdx); });
    }
    lista.appendChild(li);
  });

  // Botão de confirmação: só aparece quando ainda não respondeu; fica
  // desabilitado até o usuário marcar alguma alternativa.
  const btnConfirmar = document.getElementById('btn-confirmar-resposta');
  btnConfirmar.style.display = jaResp ? 'none' : '';
  btnConfirmar.disabled      = true;

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
  btnNext.textContent    = (indiceAtual + 1 < total || filaPuladas.length > 0) ? 'Próxima questão →' : 'Ver resultado';
}

// Marca visualmente a alternativa escolhida, sem revelar o gabarito ainda --
// só habilita o botão "Confirmar Resposta". A revelação em si continua
// acontecendo só dentro de registrarResposta(), chamada pelo botão.
function selecionarAlternativa(origIdx) {
  if (respondeu) return;
  selecionadaAtual = origIdx;
  document.querySelectorAll('.option-item').forEach(li => {
    li.classList.toggle('selected', parseInt(li.dataset.orig) === origIdx);
  });
  const btnConfirmar = document.getElementById('btn-confirmar-resposta');
  btnConfirmar.disabled = false;
}

document.getElementById('btn-confirmar-resposta').addEventListener('click', () => {
  if (respondeu || selecionadaAtual === null) return;
  registrarResposta(selecionadaAtual);
});

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
    li.classList.remove('selected');
    li.classList.add('disabled');
    const orig = parseInt(li.dataset.orig);
    if (orig === q.correta)             li.classList.add('correct');
    if (orig === escolhida && !acertou) li.classList.add('wrong');
  });

  const btnConfirmar = document.getElementById('btn-confirmar-resposta');
  btnConfirmar.style.display = 'none';
  btnConfirmar.disabled      = true;

  const expBox = document.getElementById('explanation-box');
  expBox.innerHTML = `<strong>${acertou ? '✔ Correto!' : escolhida === -1 ? '⏱ Tempo esgotado!' : '✘ Incorreto!'}</strong><br><br>${q.explicacao}`;
  expBox.classList.add('show');

  document.getElementById('btn-pular').style.display = 'none';
  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = (indiceAtual + 1 < questoes.length || filaPuladas.length > 0) ? 'Próxima questão →' : 'Ver resultado';
  btnNext.style.display = '';
}

// Avança para próxima questão ou, se acabaram, processa a fila de puladas.
// Só chama mostrarResultado() quando a fila de puladas também está vazia.
function _avancarOuResultado() {
  indiceAtual++;
  if (indiceAtual < questoes.length) {
    _salvarSessaoAtiva();
    renderQuestao();
  } else if (filaPuladas.length > 0) {
    const idxInicio = questoes.length;
    questoes       = questoes.concat(filaPuladas);
    filaPuladas    = [];
    emRodadaPuladas = true;
    indiceAtual    = idxInicio;
    _salvarSessaoAtiva();
    renderQuestao();
  } else {
    mostrarResultado();
  }
}

document.getElementById('btn-next').addEventListener('click', _avancarOuResultado);


document.getElementById('btn-pular').addEventListener('click', () => {
  // Sempre guarda na fila — o simulado não termina enquanto houver questões puladas
  filaPuladas.push(questoes[indiceAtual]);
  _avancarOuResultado();
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
  if (temaAtual) _limparSessaoAtiva(temaAtual.id);
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
  if (respondidas > 0) _salvarSessao(temaAtual.id, acertosSessao, respondidas, temaAtual.materia);
  const hist = _histEntry(temaAtual.id, temaAtual.materia);
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
    renderTemaGrid('study-tema-grid', abrirTeoria);
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
// Não força nenhuma tela aqui -- js/firebase-sync.js decide screen-login
// vs screen-home assim que souber se há sessão autenticada (evita
// mostrar Estudar/Simulado antes de confirmar o login).
