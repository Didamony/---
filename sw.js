// كاش عشان اللعبة تشتغل من غير نت بعد أول مرة
const CACHE = 'kora-shaware3-v1';
const FILES = ['./', 'index.html', 'game.js', 'style.css', 'fonts.css', 'manifest.webmanifest',
  'assets/logo/icon-512.png', 'assets/logo/icon-192.png', 'assets/logo/favicon-64.png', 'assets/logo/favicon-32.png',
  'assets/logo/apple-touch-icon.png', 'assets/logo/graffiti-640.png', 'assets/logo/badge-400.png', 'assets/logo/wordmark-800.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// من النت الأول (عشان التحديثات توصل)، ولو مفيش نت من الكاش
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true })),
  );
});
