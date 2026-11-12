const APP = 'shardholm-autobattler';
const FILES = ["./app-KRTLWE7B.js","./assets/alert_attack-4JCOXVK2.mp3","./assets/amb_village-VUB2HF6J.mp3","./assets/archer_death_1-ILPW6W4G.mp3","./assets/archer_death_2-SFQ45Z3J.mp3","./assets/archer_deploy_1-5PC7JDIP.mp3","./assets/archer_deploy_2-DWOTE7RV.mp3","./assets/archer_deploy_3-CV5PUH37.mp3","./assets/archere-FKKFB2P7.webp","./assets/archere-jeu-TJ352OCY.glb","./assets/argent-X5EBXDA2.webp","./assets/arrow_hit-GU5F3AZO.mp3","./assets/arrow_impact_1-W4OV5DQW.mp3","./assets/arrow_impact_2-2V3SQVDJ.mp3","./assets/arrow_impact_3-5TV4L4KY.mp3","./assets/assassin_death_1-OTVRVGWA.mp3","./assets/assassin_death_2-4ZYMLRQB.mp3","./assets/assassin_deploy_1-BDHHENTS.mp3","./assets/assassin_deploy_2-5ML3SPFD.mp3","./assets/assassin_deploy_3-JCSMJNL5.mp3","./assets/augment_pick-E6YLX72P.mp3","./assets/augment_reveal-HUE5RSON.mp3","./assets/baleine-VRPXIB3D.webp","./assets/baleine-jeu-FE5ANNKN.glb","./assets/barbare-eclat-LHLQU5TS.webp","./assets/barbare-eclat-tete-SQ2LKMIJ.webp","./assets/barbare-eclat-tuile-K5MZMODN.webp","./assets/barbarian_death_1-GBGBGNUF.mp3","./assets/barbarian_death_2-VIKD7JHE.mp3","./assets/barbarian_deploy_1-CFFABW2A.mp3","./assets/barbarian_deploy_2-VLYRJWAG.mp3","./assets/barbarian_deploy_3-67ZOMWW6.mp3","./assets/battle_cry-MHWM65EL.mp3","./assets/battle_go-OMGXUUNI.mp3","./assets/beast_roar-NV55HEFT.mp3","./assets/blade_hit_1-YPA3UAAX.mp3","./assets/blade_hit_2-IO52QVD5.mp3","./assets/bombarde-jeu-VWOVW2FM.glb","./assets/boon-P6NJWMYH.mp3","./assets/bow_release_1-IYVGCQKV.mp3","./assets/bow_release_2-4IQ7MFR3.mp3","./assets/bow_shot-DU3Q5ME7.mp3","./assets/brigand-jeu-AGABQCJG.glb","./assets/bronze-SGKLH5NT.webp","./assets/build_done-LHFJ763M.mp3","./assets/build_hammer-ETQSYE7E.mp3","./assets/build_lift-ROHD6QPX.mp3","./assets/build_place-AJNKOBOM.mp3","./assets/building_fall-HN64CLQT.mp3","./assets/building_hit-SVLVCHM7.mp3","./assets/bungee-MGYHQTP2.woff2","./assets/coffre-jeu-TS6VSW4D.glb","./assets/collect_crystal-EH5LY25Y.mp3","./assets/collect_mushroom-P4PKF7JT.mp3","./assets/colosse-JB5EJSFW.webp","./assets/colosse-jeu-77SM33LG.glb","./assets/colossus_roar-UVKOPUEU.mp3","./assets/count_tick-V5HHNZ6T.mp3","./assets/diamant-GD5LRT3D.webp","./assets/druid_death_1-HQFWITPQ.mp3","./assets/druid_death_2-NHZDXVSP.mp3","./assets/druid_deploy_1-GPFK66IX.mp3","./assets/druid_deploy_2-MCRINAU4.mp3","./assets/druid_zap-F4Q5QDQR.mp3","./assets/druid_zap_2-OASEUHBV.mp3","./assets/druid_zap_3-TL4ND6BJ.mp3","./assets/druidesse-RZQML5EB.webp","./assets/druidesse-jeu-HCATNSXO.glb","./assets/fredoka-3UPZTCSC.woff2","./assets/gladiateur-2KYEA6L4.webp","./assets/guerrier-base-TVGZ4PIL.webp","./assets/heavy_hit_1-STMIXITP.mp3","./assets/heavy_hit_2-55PEABC3.mp3","./assets/heavy_hit_3-L42FIL2A.mp3","./assets/heavy_swing_1-7PVAKC5F.mp3","./assets/heavy_swing_2-5MPUQE75.mp3","./assets/heavy_swing_3-R3CC2BWU.mp3","./assets/hp_loss-USOPVWUW.mp3","./assets/ile-D3G4ODCJ.webp","./assets/ile-lande-KCIPZN6N.webp","./assets/ile-lande-vie-AG4CZUKJ.webp","./assets/ile-lave-QQ4YYIN4.webp","./assets/ile-lave-vie-O2ZNZU7Q.webp","./assets/ile-nuages-ALKGD2TV.webp","./assets/ile-nuages-vie-OXMTBYS5.webp","./assets/ile-vie-JKFBP2VK.webp","./assets/lilita-BW72GA3X.woff2","./assets/loot-4CMJPKD5.mp3","./assets/magic_cast_1-FNMOYVPT.mp3","./assets/magic_cast_2-DDGE466C.mp3","./assets/map_clouds-JUUCDZDP.mp3","./assets/match_found-A3LZ4MVK.mp3","./assets/mortar_fire-55PCFJWD.mp3","./assets/mortar_impact-FFLUEV66.mp3","./assets/muraille-JIPBNUHH.webp","./assets/muraille-masque-NLBBGDNO.webp","./assets/muraille-vie-I7P6SSYO.webp","./assets/music_champion-WJP7GREV.mp3","./assets/music_eclat_battle-IJNKIEJ4.mp3","./assets/music_eclat_final-IFVOOQ36.mp3","./assets/music_eclat_prep-OP5GLGQL.mp3","./assets/music_eclat_theme-P3IVHIMF.mp3","./assets/music_lose-RWDS7XZ3.mp3","./assets/music_raid-VAZ2GGVK.mp3","./assets/music_village-OMKKDIQC.mp3","./assets/music_win-LAC54U6M.mp3","./assets/or-AMW6VJZU.webp","./assets/pillard-333ZQL3C.webp","./assets/platine-4W6M2SBL.webp","./assets/raid_start-GQO57AU3.mp3","./assets/rank_up-S7JKVHZR.mp3","./assets/recolteur-33TAN3DD.webp","./assets/recolteur-tete-7BNM6UJ6.webp","./assets/rubik-2B7SUW46.woff2","./assets/shop_reroll-GRIN2XXT.mp3","./assets/soldat-VD7AFEPS.webp","./assets/soldat-eclat-jeu-3O4XNNXB.glb","./assets/soldat-jeu-RISUTZOK.glb","./assets/soldat-tete-AGMCDKZK.webp","./assets/spell_heal-R4VCTSVW.mp3","./assets/spell_portal-USQG6LZA.mp3","./assets/spell_rage-IO2FAGMQ.mp3","./assets/sword_hit-C3I5IP4X.mp3","./assets/sword_swing_1-YSAD5YYA.mp3","./assets/sword_swing_2-VLVUWKIN.mp3","./assets/sword_swing_3-YLAXK3LM.mp3","./assets/tank_death_1-Y3M2L7JG.mp3","./assets/tank_death_2-IO6KMU3V.mp3","./assets/tank_deploy_1-SEG77SRB.mp3","./assets/tank_deploy_2-77HRGTCP.mp3","./assets/tank_deploy_3-XECIZK42.mp3","./assets/tower_taken-7FAXCSLQ.mp3","./assets/troll-jeu-D72UI5RL.glb","./assets/troop_drop-TXHYCU7M.mp3","./assets/ui_close-EFYUEE7E.mp3","./assets/ui_coins-UQFARDBX.mp3","./assets/ui_error-ZUUDUV6B.mp3","./assets/ui_open-YSL7SZAG.mp3","./assets/ui_tap-KWIPUKCV.mp3","./assets/unit_death-VKWG44ZQ.mp3","./assets/ville-DN7PHZVR.webp","./assets/ville-masque-SVYJQDRK.webp","./assets/ville-vie-LDAKXRXA.webp","./assets/whale_death_1-RDLVM35K.mp3","./assets/whale_deploy_1-ITHAJFDO.mp3","./assets/whale_deploy_2-JMLOGVRC.mp3","./assets/whale_shard-RFYV6HWS.mp3","./assets/whale_shard_2-ZUZMDLMU.mp3","./assets/whale_shard_3-NLMALU5H.mp3"];
const PAGE = APP + '-page-1794484797936', KEEP = APP + '-files';
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
  e.waitUntil(self.registration.showNotification(d.title || 'Kelmora', { body: d.body || '', tag: d.tag, icon: 'icon-192.png', badge: 'icon-192.png', data: { url: './' } }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) if ('focus' in w) return w.focus();
    return self.clients.openWindow('./');
  })());
});
