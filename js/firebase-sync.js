// firebase-sync.js
// Login obrigatório (Firebase Authentication e-mail/senha) + sincronização
// automática de progresso via Firestore. Sessão persistente local -- o
// usuário só sai quando clica em "Sair" (setPersistence browserLocal); com
// token válido salvo, reabrir o app entra direto em screen-home sem logar
// de novo. Enquanto deslogado, só screen-login existe (ver TELAS em
// js/app.js) -- Estudar/Simulado ficam inacessíveis. Ao logar, o doc
// usuarios/{uid} no Firestore guarda as mesmas 3 chaves já usadas
// localmente (desempenho, sessoes_ativas, qdif).
//
// Carregado como <script type="module">, então roda depois do parsing do
// documento (módulos são adiados por padrão) -- os elementos do DOM já
// existem quando este script executa.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import {
  getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAZhLiu3quZjobChLVGZfwoo8xMJ7qvHgk",
  authDomain: "silulado-questoes.firebaseapp.com",
  projectId: "silulado-questoes",
  storageBucket: "silulado-questoes.firebasestorage.app",
  messagingSenderId: "833304621650",
  appId: "1:833304621650:web:72087c569b53602b7be58b",
};

const CHAVES = ['desempenho', 'sessoes_ativas', 'qdif'];
const CHAVE_ATUALIZADO_EM = 'progressoAtualizadoEm';

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

// Sessão nunca expira sozinha -- só sai no clique explícito em "Sair".
setPersistence(auth, browserLocalPersistence).catch(e => {
  console.warn('[progressoSync] falha ao configurar persistência:', e);
});

function docDoUsuario(uid) {
  return doc(db, 'usuarios', uid);
}

async function enviarParaNuvem() {
  if (!auth.currentUser) return; // deslogado: sem sync, só localStorage
  const dados = {};
  CHAVES.forEach(chave => { dados[chave] = localStorage.getItem(chave) || ''; });
  dados.atualizadoEmCliente = Number(localStorage.getItem(CHAVE_ATUALIZADO_EM) || Date.now());
  try {
    await setDoc(docDoUsuario(auth.currentUser.uid), dados);
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

async function buscarDaNuvem(uid) {
  try {
    const snap = await getDoc(docDoUsuario(uid));
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

// Roda a cada login (inclusive o automático da sessão persistida): compara
// o timestamp local com o da nuvem e usa sempre o mais recente dos dois --
// nunca sobrescreve dado mais novo por um mais velho, em nenhuma direção.
// Isso também cobre a "migração" natural do progresso feito antes de logar:
// se só existe dado local, ele é o mais novo e sobe pra nuvem.
async function sincronizarNaAbertura(uid) {
  const nuvem = await buscarDaNuvem(uid);
  const localTs = Number(localStorage.getItem(CHAVE_ATUALIZADO_EM) || 0);
  if (!nuvem) {
    if (localTs > 0) await enviarParaNuvem();
    return;
  }
  const nuvemTs = Number(nuvem.atualizadoEmCliente || 0);
  if (nuvemTs > localTs) {
    aplicarDadosDaNuvem(nuvem);
  } else if (localTs > nuvemTs) {
    await enviarParaNuvem();
  }
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
};

// ── UI de login/cadastro/logout (ver bloco "backup-progresso" em index.html) ──
function mostrarErroAuth(mensagem) {
  const el = document.getElementById('auth-erro');
  if (!el) return;
  el.textContent = mensagem;
  el.classList.toggle('hidden', !mensagem);
}

const MENSAGENS_ERRO = {
  'auth/invalid-email': 'E-mail inválido.',
  'auth/missing-password': 'Digite a senha.',
  'auth/weak-password': 'Senha muito curta (mínimo 6 caracteres).',
  'auth/email-already-in-use': 'Já existe uma conta com esse e-mail. Tente entrar.',
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
  'auth/wrong-password': 'E-mail ou senha incorretos.',
  'auth/user-not-found': 'Não existe conta com esse e-mail. Clique em "Criar conta".',
  'auth/too-many-requests': 'Muitas tentativas. Aguarde um pouco e tente de novo.',
  'auth/operation-not-allowed': 'Login por e-mail/senha ainda não foi habilitado no Firebase.',
  'auth/configuration-not-found': 'Firebase Authentication ainda não foi configurado neste projeto.',
};

function iniciarUI() {
  const form       = document.getElementById('form-auth');
  const campoEmail = document.getElementById('input-auth-email');
  const campoSenha = document.getElementById('input-auth-senha');
  const btnEntrar    = document.getElementById('btn-auth-entrar');
  const btnCadastrar = document.getElementById('btn-auth-cadastrar');
  const btnSair       = document.getElementById('btn-auth-sair');

  async function tentar(acao) {
    mostrarErroAuth('');
    const email = campoEmail.value.trim();
    const senha = campoSenha.value;
    if (!email || !senha) return;
    try {
      if (acao === 'cadastrar') {
        await createUserWithEmailAndPassword(auth, email, senha);
      } else {
        await signInWithEmailAndPassword(auth, email, senha);
      }
    } catch (e) {
      mostrarErroAuth(MENSAGENS_ERRO[e.code] || 'Não foi possível completar. Tente de novo.');
    }
  }

  form?.addEventListener('submit', e => { e.preventDefault(); tentar('entrar'); });
  btnCadastrar?.addEventListener('click', () => tentar('cadastrar'));
  btnSair?.addEventListener('click', () => signOut(auth));
}

function atualizarUI(user) {
  if (user) {
    document.getElementById('auth-email-atual').textContent = user.email;
    mostrarErroAuth('');
    document.getElementById('form-auth')?.reset();
    window.ir('screen-home');
  } else {
    window.ir('screen-login');
  }
}

iniciarUI();
onAuthStateChanged(auth, async user => {
  atualizarUI(user);
  if (user) await sincronizarNaAbertura(user.uid);
});
