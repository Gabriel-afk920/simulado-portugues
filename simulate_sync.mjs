// simulate_sync.mjs
// Simula o fluxo REAL de app/js/firebase-sync.js (lê o arquivo de produção
// e gera uma cópia temporária só com o import do SDK trocado pro mock --
// nunca commitada, sempre gerada na hora a partir do arquivo atual, pra
// nunca ficar dessincronizada dele) contra um Firestore mockado em memória
// (_mock_firebase_sdk.mjs), simulando 2 dispositivos sequencialmente no
// mesmo processo Node (cada um com seu próprio localStorage/window/document
// fake, mas apontando pro mesmo "Firestore" compartilhado). Serve pra
// depurar bugs de sincronização sem precisar de login real no Firebase de
// produção -- se um cenário falhar aqui, o bug está na lógica de
// firebase-sync.js; se passar aqui mas falhar nos dispositivos reais, o
// problema está em infraestrutura (regras do Firestore, rede, login) fora
// do alcance desta simulação.
//
// Uso: node simulate_sync.mjs

import fs from 'fs';
import { CLOUD, _getUltimoAuth, _mockLogin } from './_mock_firebase_sdk.mjs';

const ARQUIVO_REAL = new URL('./js/firebase-sync.js', import.meta.url);
const ARQUIVO_TESTE = new URL('./_firebase_sync_teste_tmp.mjs', import.meta.url);

function gerarCopiaDeTeste() {
  const src = fs.readFileSync(ARQUIVO_REAL, 'utf8').replace(/\.\/lib\/firebase\/firebase-bundle\.js/g, './_mock_firebase_sdk.mjs');
  fs.writeFileSync(ARQUIVO_TESTE, src);
}
function removerCopiaDeTeste() {
  fs.rmSync(ARQUIVO_TESTE, { force: true });
}

class FakeLocalStorage {
  constructor() { this.store = new Map(); }
  getItem(k) { return this.store.has(k) ? this.store.get(k) : null; }
  setItem(k, v) { this.store.set(k, String(v)); }
  removeItem(k) { this.store.delete(k); }
}

function fakeElement() {
  return {
    textContent: '', value: '', innerHTML: '', style: {}, dataset: {},
    classList: { add() {}, remove() {}, toggle() {} },
    addEventListener() {}, reset() {},
  };
}

let contador = 0;
function setupGlobals(nomeDispositivo) {
  const ls = new FakeLocalStorage();
  globalThis.localStorage = ls;
  globalThis.document = {
    getElementById: () => fakeElement(),
    addEventListener() {},
    querySelectorAll: () => [],
    visibilityState: 'visible',
  };
  globalThis.window = {
    ir() {},
    addEventListener() {},
    dispatchEvent(e) { console.log(`  [${nomeDispositivo}] CustomEvent disparado: ${e.type}`); },
  };
  globalThis.CustomEvent = globalThis.CustomEvent || class {
    constructor(type, opts) { this.type = type; this.detail = opts && opts.detail; }
  };
  return ls;
}

async function carregarDispositivo(nome, uid, email) {
  const ls = setupGlobals(nome);
  contador++;
  // ?query cache-busting -- força uma instância de módulo NOVA e independente
  // por dispositivo (senão Node reusaria a mesma, com o mesmo estado interno
  // de auth/listener dos dois "dispositivos" ao mesmo tempo).
  await import(`./_firebase_sync_teste_tmp.mjs?dev=${nome}-${contador}`);
  const auth = _getUltimoAuth();
  console.log(`[${nome}] módulo carregado. Logando uid=${uid}...`);
  _mockLogin(auth, uid, email);
  await new Promise(r => setTimeout(r, 30)); // deixa sincronizarNaAbertura/onSnapshot assentarem
  return { localStorage: ls, progressoSync: globalThis.window.progressoSync };
}

// Imita o que app.js._salvarSessaoAtiva() faz de verdade (mesma lógica que
// foi aplicada lá: detecta sessão nova pro tema e passa imediato=true).
function salvarSessaoAtiva(dispositivo, nome, temaId, indiceAtual, questaoHashes) {
  const { localStorage: ls, progressoSync } = dispositivo;
  const mapaAtual = JSON.parse(ls.getItem('sessoes_ativas') || '{}');
  const eNova = !mapaAtual[temaId];
  mapaAtual[temaId] = { temaId, questaoHashes, indiceAtual, respostasMap: { 0: { acertou: true, pts: 1 } }, shuffleMap: {}, teoriaConsultada: {}, pontuacao: 1 };
  ls.setItem('sessoes_ativas', JSON.stringify(mapaAtual));
  console.log(`  [${nome}] _salvarSessaoAtiva: sessaoNova=${eNova}, chamando marcarAtualizado(${eNova})`);
  progressoSync.marcarAtualizado(eNova);
}

function temSessaoNoLocalStorage(ls, temaId) {
  const mapa = JSON.parse(ls.getItem('sessoes_ativas') || '{}');
  return !!mapa[temaId];
}

async function rodarCenario(nome, origemNome, origemUid, destinoNome, destinoUid, temaId) {
  console.log(`\n========== ${nome} ==========`);
  CLOUD.clear();

  const origem = await carregarDispositivo(origemNome, origemUid, 'teste@x.com');
  console.log(`[${origemNome}] localStorage inicial sessoes_ativas:`, origem.localStorage.getItem('sessoes_ativas'));

  console.log(`\n-- ${origemNome}: iniciarSimulado(${temaId}) + responde 1 questão --`);
  salvarSessaoAtiva(origem, origemNome, temaId, 0, ['hashA', 'hashB', 'hashC']);
  await new Promise(r => setTimeout(r, 60)); // deixa o flush imediato (setDoc) do mock terminar

  console.log(`\n[MOCK CLOUD] estado apos escrita do ${origemNome}:`, JSON.stringify(Object.fromEntries(CLOUD)));

  console.log(`\n-- ${destinoNome}: abre o app (sincronizarNaAbertura) --`);
  const destino = await carregarDispositivo(destinoNome, destinoUid, 'teste@x.com');

  const sessaoFinal = destino.localStorage.getItem('sessoes_ativas');
  console.log(`\n[${destinoNome}] localStorage FINAL sessoes_ativas:`, sessaoFinal);
  const recebeu = temSessaoNoLocalStorage(destino.localStorage, temaId);
  console.log(`\n>>> RESULTADO ${nome}: ${recebeu ? `SESSÃO CHEGOU NO ${destinoNome.toUpperCase()} ✅` : `SESSÃO NÃO CHEGOU NO ${destinoNome.toUpperCase()} ❌`}`);
  return recebeu;
}

gerarCopiaDeTeste();
try {
  const resultadoA = await rodarCenario('CENARIO A (notebook -> celular)', 'notebook', 'uid-teste-A', 'celular', 'uid-teste-A', 'etica_servico_publico');
  const resultadoB = await rodarCenario('CENARIO B (celular -> notebook)', 'celular', 'uid-teste-B', 'notebook', 'uid-teste-B', 'gestao_recursos_materiais');

  console.log('\n\n===== RESUMO FINAL =====');
  console.log('Cenário A (notebook -> celular):', resultadoA ? 'PASSOU ✅' : 'FALHOU ❌');
  console.log('Cenário B (celular -> notebook):', resultadoB ? 'PASSOU ✅' : 'FALHOU ❌');
  if (!resultadoA || !resultadoB) process.exitCode = 1;
} finally {
  removerCopiaDeTeste();
}
