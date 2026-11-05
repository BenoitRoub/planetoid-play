const APP = 'shardholm-carte';
const FILES = ["./app-YIZQ2P32.js","./assets/accueil-YMZL46TB.webp","./assets/alert_attack-4JCOXVK2.mp3","./assets/amb_village-VUB2HF6J.mp3","./assets/archere-FKKFB2P7.webp","./assets/archere-jeu-TJ352OCY.glb","./assets/arrow_hit-GU5F3AZO.mp3","./assets/battle_cry-MHWM65EL.mp3","./assets/bow_shot-DU3Q5ME7.mp3","./assets/brigand-jeu-AGABQCJG.glb","./assets/build_done-LHFJ763M.mp3","./assets/build_hammer-ETQSYE7E.mp3","./assets/build_lift-ROHD6QPX.mp3","./assets/build_place-AJNKOBOM.mp3","./assets/building_fall-HN64CLQT.mp3","./assets/building_hit-SVLVCHM7.mp3","./assets/camp-26PEUMEA.webp","./assets/caserne-jeu-QVYZOZML.glb","./assets/champi-mere-jeu-OWUYSR7S.glb","./assets/champi-petit-jeu-JL2GQK3N.glb","./assets/collect_crystal-EH5LY25Y.mp3","./assets/collect_mushroom-P4PKF7JT.mp3","./assets/colosse-JB5EJSFW.webp","./assets/colosse-jeu-77SM33LG.glb","./assets/cristal-jeu-G4DRYLML.glb","./assets/forge-jeu-75WLRNXI.glb","./assets/fredoka-3UPZTCSC.woff2","./assets/icone-TVGJ5P4R.webp","./assets/lilita-BW72GA3X.woff2","./assets/loot-4CMJPKD5.mp3","./assets/maison-jeu-ZIO7ZLHW.glb","./assets/map_clouds-JUUCDZDP.mp3","./assets/mortar_fire-55PCFJWD.mp3","./assets/mortar_impact-FFLUEV66.mp3","./assets/mortier-jeu-QJVAONPD.glb","./assets/music_lose-RWDS7XZ3.mp3","./assets/music_raid-VAZ2GGVK.mp3","./assets/music_village-OMKKDIQC.mp3","./assets/music_win-LAC54U6M.mp3","./assets/pillard-333ZQL3C.webp","./assets/raid_start-GQO57AU3.mp3","./assets/recolteur-33TAN3DD.webp","./assets/recolteur-tete-7BNM6UJ6.webp","./assets/soldat-VD7AFEPS.webp","./assets/soldat-jeu-RISUTZOK.glb","./assets/soldat-tete-AGMCDKZK.webp","./assets/sword_hit-C3I5IP4X.mp3","./assets/tente-jeu-XHNDHU7J.glb","./assets/thumb-caserne-QZA7KSDD.webp","./assets/thumb-champi-VFSAERTF.webp","./assets/thumb-cristal-DYDVW2XR.webp","./assets/thumb-forge-CUZH2DZR.webp","./assets/thumb-grenier-OBZFKGDD.webp","./assets/thumb-maison-QP5FQHND.webp","./assets/thumb-mortier-5N3HR2GR.webp","./assets/thumb-muraille-UVYJVIR2.webp","./assets/thumb-reserve-XWPQUOHM.webp","./assets/thumb-tour-PLF3FIO2.webp","./assets/touffe-55S3CFWQ.webp","./assets/tour-jeu-42VJK24H.glb","./assets/troop_drop-TXHYCU7M.mp3","./assets/ui_close-EFYUEE7E.mp3","./assets/ui_coins-UQFARDBX.mp3","./assets/ui_error-ZUUDUV6B.mp3","./assets/ui_open-YSL7SZAG.mp3","./assets/ui_tap-KWIPUKCV.mp3","./assets/unit_death-VKWG44ZQ.mp3","./assets/village-DRIQKFKG.webp","./backdrop-bake-A5DLBOK5.js","./carte-4YKOHGBZ.js","./chunk-2ESOBYTO.js","./chunk-LIEFWKOI.js","./chunk-T7GJABOB.js"];
const PAGE = APP + '-page-1793889393363', KEEP = APP + '-files';
const FIXED = ["./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png","./favicon-32.png","./favicon-64.png"];
const rel = (u) => './' + new URL(u).pathname.slice(new URL(self.registration.scope).pathname.length);
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const keep = await caches.open(KEEP);
    for (const f of FILES) if (!(await keep.match(f))) await keep.add(f);
    await (await caches.open(PAGE)).addAll(FIXED);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== PAGE && k !== KEEP && (k.startsWith(APP) || k.startsWith('planetoid-'))) await caches.delete(k);
    // the files of older versions leave the kept cache
    const keep = await caches.open(KEEP);
    for (const r of await keep.keys()) if (!FILES.includes(rel(r.url))) await keep.delete(r);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (FILES.includes(rel(e.request.url))) {
    e.respondWith(caches.open(KEEP).then(async (c) => (await c.match(e.request)) || fetch(e.request).then((r) => { if (r.ok) c.put(e.request, r.clone()); return r; })));
    return;
  }
  e.respondWith((async () => {
    const cache = await caches.open(PAGE);
    const net = fetch(e.request).then((r) => { if (r.ok) cache.put(e.request, r.clone()); return r; });
    const first = await Promise.race([net.catch(() => null), new Promise((res) => setTimeout(res, 4000))]);
    if (first) return first;
    return (await cache.match(e.request, { ignoreSearch: true })) || (await cache.match('./index.html')) || net;
  })());
});
// the game's notifications (docs/MULTI.md): the server sends {title, body, tag}; a touch opens the game
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Shardholm', { body: d.body || '', tag: d.tag, icon: 'icon-192.png', badge: 'icon-192.png', data: { url: './' } }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) if ('focus' in w) return w.focus();
    return self.clients.openWindow('./');
  })());
});
