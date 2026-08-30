'use strict';

// Bump this version whenever you deploy new files.
// The browser detects any change in sw.js and reinstalls automatically.
const CACHE_VERSION = 'v81';
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
  './questoes_banco.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
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

// ── Fetch: cache-first + atualização em background (stale-while-revalidate) ──
self.addEventListener('fetch', event => {
  // Ignora requisições que não sejam GET (nenhuma no app, mas por segurança)
  if (event.request.method !== 'GET') return;

  // Ignora requisições cross-origin (extensões do navegador, etc.)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        // Busca na rede em background e atualiza o cache silenciosamente
        const networkFetch = fetch(event.request)
          .then(response => {
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => null);

        // Serve do cache instantaneamente; se não tiver, espera a rede
        return cached ?? networkFetch;
      })
    )
  );
});
