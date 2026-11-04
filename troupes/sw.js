const CACHE = 'planetoid-troupes-1793765266117';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('planetoid-troupes-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const net = fetch(e.request).then((r) => { if (r.ok) cache.put(e.request, r.clone()); return r; });
    const timeout = new Promise((res) => setTimeout(res, 15000));
    const first = await Promise.race([net.catch(() => null), timeout]);
    if (first) return first;
    return (await cache.match(e.request)) || (await cache.match('./index.html')) || net;
  })());
});
