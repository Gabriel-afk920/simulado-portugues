'use strict';

// Bump this version whenever you deploy new files.
// The browser detects any change in sw.js and reinstalls automatically.
const CACHE_VERSION = 'v275';
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
];

// ── Install: pré-cacheia todos os assets ──────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() =>
        // questoes_banco.js pré-cacheado separadamente para não bloquear install
        // caso a quota de armazenamento seja insuficiente no dispositivo.
        caches.open(CACHE_NAME)
          .then(cache => cache.add('./questoes_banco.js'))
          .catch(() => {})  // falha silenciosa — install continua sem ele
      )
      .then(() => self.skipWaiting())
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
      .then(() => self.clients.claim())
  );
});

// ── Fetch: estratégias por tipo de arquivo ────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // questoes_banco.js: cache-first + atualização em background (stale-while-revalidate)
  // Serve do cache imediatamente (offline funciona), atualiza em background quando online.
  if (url.pathname.endsWith('questoes_banco.js')) {
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

          return cached || networkFetch;
        })
      )
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

        return cached || networkFetch;
      })
    )
  );
});
