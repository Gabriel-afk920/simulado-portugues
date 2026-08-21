// firebase-sync.js
// Sincronização automática de progresso entre dispositivos via Firestore.
// Sem login real: um "syncId" (UUID gerado uma vez, salvo em localStorage)
// funciona como conta -- documento usuarios/{syncId} no Firestore guarda as
// mesmas 3 chaves já usadas localmente (desempenho, sessoes_ativas, qdif).
// Pra usar em outro dispositivo: cola o mesmo syncId lá (ver #input-sync-id
// em index.html) -- os dois dispositivos passam a apontar pro mesmo doc.
//
// Carregado como <script type="module">, então roda depois do parsing do
// documento (módulos são adiados por padrão) -- os elementos do DOM já
// existem quando este script executa.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAZhLiu3quZjobChLVGZfwoo8xMJ7qvHgk",
  authDomain: "silulado-questoes.firebaseapp.com",
  projectId: "silulado-questoes",
  storageBucket: "silulado-questoes.firebasestorage.app",
  messagingSenderId: "833304621650",
  appId: "1:833304621650:web:72087c569b53602b7be58b",
};

const CHAVES = ['desempenho', 'sessoes_ativas', 'qdif'];
const CHAVE_SYNC_ID = 'syncId';
const CHAVE_ATUALIZADO_EM = 'progressoAtualizadoEm';

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

function obterSyncId() {
  let id = localStorage.getItem(CHAVE_SYNC_ID);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(CHAVE_SYNC_ID, id);
  }
  return id;
}

function docDoUsuario(syncId) {
  return doc(db, 'usuarios', syncId || obterSyncId());
}

async function enviarParaNuvem() {
  const dados = {};
  CHAVES.forEach(chave => { dados[chave] = localStorage.getItem(chave) || ''; });
  dados.atualizadoEmCliente = Number(localStorage.getItem(CHAVE_ATUALIZADO_EM) || Date.now());
  try {
    await setDoc(docDoUsuario(), dados);
  } catch (e) {
    console.warn('[progressoSync] falha ao enviar pro Firestore:', e);
  }
}

// Debounce -- evita 1 escrita no Firestore por tecla/clique quando várias
// respostas seguidas disparam _salvarSessaoAtiva/_atualizarQDif em sequência
// rápida. flushImediato() (chamado no fechamento/troca de aba) cancela o
// debounce e envia na hora, pra não perder a última resposta se a aba fechar
// antes do timer disparar.
let timerDebounce = null;
function enviarComDebounce() {
  clearTimeout(timerDebounce);
  timerDebounce = setTimeout(enviarParaNuvem, 1500);
}
function flushImediato() {
  clearTimeout(timerDebounce);
  enviarParaNuvem();
}

async function buscarDaNuvem(syncId) {
  try {
    const snap = await getDoc(docDoUsuario(syncId));
    return snap.exists() ? snap.data() : null;
  } catch (e) {
    console.warn('[progressoSync] falha ao buscar do Firestore:', e);
    return null;
  }
}

function aplicarDadosDaNuvem(dadosNuvem) {
  CHAVES.forEach(chave => {
    if (typeof dadosNuvem[chave] === 'string') {
      localStorage.setItem(chave, dadosNuvem[chave]);
    }
  });
  localStorage.setItem(CHAVE_ATUALIZADO_EM, String(dadosNuvem.atualizadoEmCliente || Date.now()));
}

// Roda uma vez na abertura do app: compara o timestamp local com o da nuvem
// e usa sempre o mais recente dos dois -- nunca sobrescreve dado mais novo
// por um mais velho, em nenhuma direção.
async function sincronizarNaAbertura() {
  const nuvem = await buscarDaNuvem();
  const localTs = Number(localStorage.getItem(CHAVE_ATUALIZADO_EM) || 0);
  if (!nuvem) {
    if (localTs > 0) await enviarParaNuvem(); // primeiro sync deste dispositivo
    return;
  }
  const nuvemTs = Number(nuvem.atualizadoEmCliente || 0);
  if (nuvemTs > localTs) {
    aplicarDadosDaNuvem(nuvem);
  } else if (localTs > nuvemTs) {
    await enviarParaNuvem();
  }
}

// Troca de dispositivo: usuário colou o syncId de outro aparelho -- adota
// esse id como o próprio, puxa o progresso salvo nele e recarrega o app.
async function trocarDispositivo(novoSyncId) {
  localStorage.setItem(CHAVE_SYNC_ID, novoSyncId);
  const nuvem = await buscarDaNuvem(novoSyncId);
  if (nuvem) aplicarDadosDaNuvem(nuvem);
  window.location.reload();
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') flushImediato();
});
window.addEventListener('pagehide', flushImediato);

window.progressoSync = {
  marcarAtualizado() {
    localStorage.setItem(CHAVE_ATUALIZADO_EM, String(Date.now()));
    enviarComDebounce();
  },
  obterSyncId,
  trocarDispositivo,
};

// Preenche a caixa do syncId na tela inicial e liga os botões de troca de
// dispositivo (ver bloco "sync-progresso" em index.html).
function iniciarUI() {
  const campoId = document.getElementById('sync-id-atual');
  if (campoId) campoId.textContent = obterSyncId();

  document.getElementById('btn-copiar-sync-id')?.addEventListener('click', () => {
    navigator.clipboard.writeText(obterSyncId())
      .then(() => alert('Código copiado! Cole no outro dispositivo pra sincronizar.'))
      .catch(() => alert('Não foi possível copiar automaticamente. Copie o código exibido na tela manualmente.'));
  });

  document.getElementById('btn-usar-sync-id')?.addEventListener('click', () => {
    const campo = document.getElementById('input-sync-id');
    const valor = (campo?.value || '').trim();
    if (!valor) return;
    if (valor === obterSyncId()) { alert('Esse já é o código deste dispositivo.'); return; }
    if (!confirm('Isso vai substituir o progresso salvo neste dispositivo pelo do código informado. Continuar?')) return;
    trocarDispositivo(valor);
  });
}

iniciarUI();
sincronizarNaAbertura();
