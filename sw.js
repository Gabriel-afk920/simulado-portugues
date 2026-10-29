'use strict';

// Bump this version whenever you deploy new files.
// The browser detects any change in sw.js and reinstalls automatically.
const CACHE_VERSION = 'v272';
const CACHE_NAME    = `simulado-portugues-${CACHE_VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/init.js',
  './js/temas.js',
  './js/firebase-sync.js',
  './js/validar-staging.js',
  './js/lib/firebase/firebase-bundle.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  // questoes_banco.js excluído do cache estático — arquivo grande (>90 MB)
  // que muda com frequência; tratado com network-first no handler de fetch abaixo.
];

// ── Install: pré-cacheia todos os assets ──────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())   // ativa imediatamente, sem esperar fechar abas
  );
});

// ── Activate: remove caches de versões anteriores ────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k.startsWith('simulado-portugues-') && k !== CACHE_NAME)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())  // assume controle de todas as abas abertas
  );
});

// ── Fetch: estratégias por tipo de arquivo ────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // questoes_banco.js: network-first (arquivo grande, muda com frequência)
  // Garante que o usuário sempre recebe a versão mais recente; cache como fallback offline.
  if (url.pathname.endsWith('questoes_banco.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Demais assets: cache-first + atualização em background (stale-while-revalidate)
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request)
          .then(response => {
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => null);

        return cached ?? networkFetch;
      })
    )
  );
});
