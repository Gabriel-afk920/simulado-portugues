// Mock do SDK do Firebase pra simular sincronizarNaAbertura/onSnapshot/
// enviarParaNuvem contra um "Firestore" em memória, sem rede real.
// Importado com o MESMO caminho (sem query string) pelos dois "dispositivos"
// simulados -- por isso o estado abaixo (CLOUD, USUARIOS_AUTH) é
// compartilhado entre eles, como um Firestore real seria.

export const CLOUD = new Map(); // path "usuarios/{uid}" -> dados do doc
const listenersPorPath = new Map(); // path -> Set de callbacks onSnapshot

function caminho(uid) { return 'usuarios/' + uid; }

function notificarListeners(path) {
  const cbs = listenersPorPath.get(path);
  if (!cbs) return;
  const dados = CLOUD.get(path);
  const snap = {
    exists: () => dados !== undefined,
    data: () => dados,
    metadata: { hasPendingWrites: false, fromCache: false },
  };
  cbs.forEach(cb => cb(snap));
}

export function initializeApp() { return { name: 'mock-app' }; }
export function initializeFirestore() { return { name: 'mock-db' }; }
export function persistentLocalCache(x) { return x; }
export function persistentSingleTabManager(x) { return x; }

export function doc(_db, colecao, uid) {
  return { path: colecao + '/' + uid, uid };
}

export async function getDoc(ref) {
  const dados = CLOUD.get(ref.path);
  return {
    exists: () => dados !== undefined,
    data: () => dados,
  };
}

export async function setDoc(ref, dados) {
  CLOUD.set(ref.path, JSON.parse(JSON.stringify(dados)));
  console.log('  [MOCK CLOUD] setDoc em ' + ref.path + ' -> sessoes_ativas=' + JSON.stringify(dados.sessoes_ativas) + ' ts=' + dados.atualizadoEmCliente);
  // Dispara listeners (como o Firestore real faria, incluindo o eco pro
  // próprio autor da escrita).
  notificarListeners(ref.path);
}

export function onSnapshot(ref, opcoesOuCb, cbOuErr, errTalvez) {
  const cb = typeof opcoesOuCb === 'function' ? opcoesOuCb : cbOuErr;
  if (!listenersPorPath.has(ref.path)) listenersPorPath.set(ref.path, new Set());
  listenersPorPath.get(ref.path).add(cb);
  return () => listenersPorPath.get(ref.path)?.delete(cb);
}

// ── Auth mock ────────────────────────────────────────────────────────────
// Cada "dispositivo" (cada import separado de firebase-sync.js) chama
// getAuth(app) 1x no carregamento do módulo -- guarda o objeto criado pra
// o harness de teste conseguir pegá-lo logo em seguida (_getUltimoAuth) e
// fazer login especificamente NESSE dispositivo via _mockLogin.
let ultimoAuth = null;
export function getAuth() { ultimoAuth = { currentUser: null }; return ultimoAuth; }
export function _getUltimoAuth() { return ultimoAuth; }
export async function setPersistence() {}
export const browserLocalPersistence = 'local';
export async function createUserWithEmailAndPassword() { throw new Error('nao usado na simulacao'); }
export async function signInWithEmailAndPassword() { throw new Error('nao usado na simulacao'); }
export async function signOut(auth) { auth.currentUser = null; }

const authCallbacks = new Map(); // auth object -> Set(callback)
export function onAuthStateChanged(auth, cb) {
  if (!authCallbacks.has(auth)) authCallbacks.set(auth, new Set());
  authCallbacks.get(auth).add(cb);
  // Simula o disparo inicial (com o usuário já setado antes de registrar,
  // exatamente como o Firebase real dispara com o estado persistido).
  cb(auth.currentUser);
  return () => authCallbacks.get(auth)?.delete(cb);
}

// Helper de teste (não existe no SDK real) -- simula "logar" um uid neste
// objeto `auth`, disparando os callbacks registrados.
export function _mockLogin(auth, uid, email) {
  auth.currentUser = { uid, email };
  (authCallbacks.get(auth) || []).forEach(cb => cb(auth.currentUser));
}
