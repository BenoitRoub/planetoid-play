import{Z as G,d as r,da as p,e as y,ea as J,ga as m,h as B,ia as H,j as u,ja as b,la as _,ma as T,na as Z,oa as Y,pa as R,qa as S,r as z,ra as W,ta as A,ua as O}from"./chunk-LIEFWKOI.js";import{Qb as K}from"./chunk-T7GJABOB.js";var E=`/* The screens out of the game (accueil.ts), in the theme \xAB Pierre et or \xBB (game/src/ui/menus.css): the war map
   seen from above behind them, the theme's stone windows, cards and candy buttons over it. Sizes are iPhone points
   on the 844x390 landscape screen; the page gives the safe margins (--l, --r, --t, --b). */
#out { position: fixed; inset: 0; z-index: 8; overflow: hidden; color: #fff; font-family: "Lilita", "Arial Rounded MT Bold", system-ui, sans-serif;
  background: #56743a center / cover no-repeat; -webkit-user-select: none; user-select: none; }
#out .shade { position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 70% 80% at 50% 52%, rgba(24, 16, 6, .12), rgba(24, 16, 6, .5) 100%), linear-gradient(rgba(24, 16, 6, .4), transparent 34%, transparent 66%, rgba(24, 16, 6, .45)); }
#out .screen { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
  padding: calc(var(--t) + 8px) var(--r) calc(var(--b) + 6px) var(--l); }
#out .screen[hidden] { display: none; }
#out .say { font: 600 12px/1.35 "Fredoka", system-ui, sans-serif; color: var(--soft-text); text-align: center; white-space: normal; text-shadow: 0 1px 0 rgba(0, 0, 0, .45); }
#out .msg { min-height: 15px; font: 600 12px/1.3 "Fredoka", system-ui, sans-serif; color: #ff9a88; text-align: center; text-shadow: 0 1px 0 rgba(0, 0, 0, .5); }
#out .msg.ok { color: #c9ff8a; }
#out button { cursor: pointer; }
#out button:disabled { filter: grayscale(.7) brightness(.92); cursor: default; }
#out button:not(:disabled):active .face, #out .choice:not(:disabled):active { transform: translateY(1.5px); }

/* ================= home: the name, three cards ================= */
#out .brand { display: flex; align-items: center; gap: 14px; }
#out .brand .logo { width: 60px; height: 60px; border-radius: 14px; background: #e8953a center / cover; box-shadow: 0 0 0 2px var(--ink), 0 3px 0 2px var(--ink), 0 8px 18px rgba(0, 0, 0, .35); }
#out .brand .name { font-size: 46px; letter-spacing: 1px;
  text-shadow: 0 2.4px 0 var(--text-ink), 2.4px 0 0 var(--text-ink), -2.4px 0 0 var(--text-ink), 0 -2.4px 0 var(--text-ink), 1.8px 1.8px 0 var(--text-ink), -1.8px 1.8px 0 var(--text-ink), 1.8px -1.8px 0 var(--text-ink), -1.8px -1.8px 0 var(--text-ink), 0 4px 0 var(--text-ink), 0 8px 14px rgba(0, 0, 0, .35); }
#out .choices { display: flex; gap: 16px; }
#out .choice { position: relative; display: block; width: 136px; height: 152px; border-radius: 10px; overflow: hidden; border: 2px solid var(--ink); background: var(--card);
  box-shadow: 0 3px 0 var(--ink), 0 10px 22px rgba(0, 0, 0, .35), inset 0 2px 0 #fff; }
#out .choice img { position: absolute; left: 50%; bottom: 32px; transform: translateX(-50%); width: 118px; height: 118px; }
#out .choice .band { position: absolute; left: 0; right: 0; bottom: 0; height: 36px; display: flex; align-items: center; justify-content: center; gap: 5px; border-top: 2px solid var(--ink);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, .5), inset 0 -3px 0 rgba(0, 0, 0, .15); }
#out .choice .band .n { font-size: 15px; }
#out .choice .band .ic { width: 19px; height: 19px; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .35)); }
#out .choice.go .band { background: var(--btn-go); } #out .choice.nav .band { background: var(--btn-nav); } #out .choice.neutral .band { background: var(--stone); }
#out .choice .tag { position: absolute; left: 6px; top: 6px; z-index: 1; padding: 3px 6px 2px; border-radius: 5px; background: var(--band); font-size: 10px; }
#out .home .say { max-width: 470px; }

/* ================= a screen with a window: a new game, joining one, the waiting room ================= */
#out .screen > .win { position: relative; left: auto; top: auto; transform: none; margin-top: 12px; padding: 22px 10px 8px; display: flex; flex-direction: column; gap: 8px; }
#out .screen .well { display: flex; flex-direction: column; gap: 10px; padding: 12px; }
#out .hero { position: relative; flex: none; width: 150px; border-radius: 8px; overflow: hidden; border: 2px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; }
#out .hero img { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 168px; height: 168px; }
#out .fields { width: 330px; justify-content: center; }
#out .fld { display: flex; align-items: center; gap: 10px; }
#out .fld > .n { width: 62px; flex: none; font-size: 13px; }
#out input { flex: 1; min-width: 0; height: 32px; padding: 0 10px; border: 1.5px solid var(--ink); border-radius: 7px; background: #fffaf0; box-shadow: inset 0 2px 0 rgba(0, 0, 0, .12);
  font: 600 15px "Fredoka", system-ui, sans-serif; color: var(--ink); -webkit-user-select: text; user-select: text; }
#out input::placeholder { color: #a39a88; }
#out input.code { flex: none; width: 184px; height: 44px; padding: 0 0 0 16px; font: normal 26px/1 "Lilita", system-ui, sans-serif; letter-spacing: 15px; text-transform: uppercase;
  background: repeating-linear-gradient(90deg, #fffaf0 0 30px, #efe6d2 30px 36px); }
#out .seg { display: flex; gap: 6px; }
#out .seg button { position: relative; width: 44px; height: 40px; border: 1.5px solid var(--ink); border-radius: 8px; background: var(--stone); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px; }
#out .seg button .ic { width: 17px; height: 17px; }
#out .seg button .n { font-size: 13px; }
#out .seg button.on { background: linear-gradient(#ffe7a6, #e7ae45); box-shadow: 0 2px 0 var(--ink), 0 0 0 2px var(--gold), inset 0 1.5px 0 rgba(255, 255, 255, .6); }
/* the number of villages: \u2212 and + round it, the quick picks under it */
#out .count { display: flex; align-items: center; gap: 8px; }
#out .count .step { width: 40px; height: 36px; display: grid; place-items: center; border: 1.5px solid var(--ink); border-radius: 8px; background: var(--stone); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5); }
#out .count .step:not(:disabled):active { transform: translateY(1.5px); }
#out .count .step .ic { width: 18px; height: 18px; }
#out .count .num { width: 78px; height: 38px; display: flex; align-items: center; justify-content: center; gap: 5px; border-radius: 7px; border: 1.5px solid var(--ink); background: var(--card);
  box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; }
#out .count .num .n { font-size: 26px; color: var(--ink); text-shadow: none; min-width: 30px; text-align: right; }
#out .count .num .ic { width: 20px; height: 20px; }
#out .seg.picks button { width: 40px; height: 28px; }
#out .wfoot { display: flex; justify-content: center; }
#out .go .face { height: 38px; padding: 0 20px; }
#out .go .face .n { font-size: 16px; }
#out .go .face .ic { width: 21px; height: 21px; }
#out .go.blue .face { background: var(--btn-nav); }

/* ================= the waiting room ================= */
#out .room { gap: 10px; }
#out .room .well { padding: 9px 10px; gap: 7px; }
#out .cols { display: flex; gap: 10px; align-items: stretch; }
#out .codebox { width: 226px; align-items: center; }
#out .head { display: flex; align-items: center; justify-content: space-between; gap: 6px; width: 100%; }
#out .head .n { font-size: 13px; }
#out .head small { font-size: 12px; color: var(--soft-text); }
#out .letters { display: flex; gap: 5px; }
#out .letters span { width: 33px; height: 38px; display: grid; place-items: center; border-radius: 7px; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff;
  font-size: 26px; color: var(--ink); text-shadow: none; }
#out .codebox .say { font-size: 11.5px; }
#out .seatsbox { min-width: 250px; }
#out .seats { display: grid; grid-template-columns: repeat(3, 74px); gap: 8px; justify-content: center; max-height: 178px; overflow-y: auto; padding: 2px 4px 4px; }
#out .seat { position: relative; width: 74px; height: 80px; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; }
#out .seat img { position: absolute; left: 50%; bottom: 18px; transform: translateX(-50%); width: 64px; height: 64px; }
#out .seat .nm { position: absolute; left: 0; right: 0; bottom: 0; height: 20px; display: grid; place-items: center; padding: 0 3px; background: var(--band); border-top: 1.5px solid var(--ink); }
#out .seat .nm .n { font-size: 11px; max-width: 100%; overflow: hidden; text-overflow: ellipsis; }
#out .seat .dot { position: absolute; right: 4px; top: 4px; width: 11px; height: 11px; border-radius: 50%; border: 1.5px solid var(--ink); background: #8f8676; z-index: 1; }
#out .seat .dot.on { background: #4cc93f; box-shadow: 0 0 6px 1px rgba(110, 255, 90, .6); }
#out .seat .chief { position: absolute; left: 3px; top: 3px; width: 17px; height: 17px; z-index: 1; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .4)); }
#out .seat.me { box-shadow: 0 2px 0 var(--ink), 0 0 0 2px var(--gold), 0 0 10px 2px rgba(255, 210, 90, .55), inset 0 1.5px 0 #fff; }
#out .seat.free { background: var(--card-off); }
#out .seat.free .plus { position: absolute; left: 0; right: 0; top: 12px; text-align: center; font-size: 34px; color: rgba(255, 255, 255, .35); text-shadow: none; }
#out .seat.free .nm .n { color: #e9e1cd; }
#out .seat.free .ghost { position: absolute; left: 50%; top: 14px; width: 40px; height: 40px; transform: translateX(-50%); opacity: .3; filter: grayscale(1); }
#out .seatsbox .seats { flex: 1; align-content: center; }
#out .rfoot { display: flex; align-items: center; justify-content: center; gap: 12px; min-height: 38px; }
#out .rfoot .say { text-align: left; font-size: 11.5px; }
#out .waiting { display: flex; align-items: center; gap: 8px; padding: 7px 14px 7px 10px; border-radius: 9px; background: rgba(26, 22, 18, .72); box-shadow: inset 0 0 0 1px rgba(242, 195, 90, .45); }
#out .waiting .ic { width: 22px; height: 22px; animation: out-turn 2.4s ease-in-out infinite; }
#out .waiting .n { font-size: 13px; }
@keyframes out-turn { 0%, 40% { transform: rotate(0); } 50%, 90% { transform: rotate(180deg); } 100% { transform: rotate(180deg); } }
#out .back { position: absolute; left: calc(var(--l) + 2px); top: calc(var(--t) + 6px); z-index: 5; display: flex; flex-direction: column; align-items: center; gap: 3px; }
#out .back .face { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 8px; border: 1.5px solid var(--ink); background: var(--stone); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .55); }
#out .back .ic { width: 22px; height: 22px; transform: scaleX(-1); }
#out .back .n { font-size: 10px; }
#out .rb .face { height: 30px; padding: 0 12px 0 8px; }
#out .rb .face .n { font-size: 12.5px; }
#out .rb .face .ic { width: 17px; height: 17px; }
#out .rb.nav .face { background: var(--btn-nav); } #out .rb.go .face { background: var(--btn-go); }
/* the bell at the top right of the room: the notifications */
#out .bell { left: auto; right: calc(var(--r) + 2px); }
#out .bell .ic { transform: none; }
#out .bell .ok { position: absolute; right: -5px; top: -5px; width: 17px; height: 17px; display: grid; place-items: center; border-radius: 50%; border: 1.5px solid var(--ink); background: var(--btn-go); }
#out .bell .ok .ic { width: 11px; height: 11px; }
@media (max-height: 340px) { #out .choice { height: 132px; } #out .choice img { width: 100px; height: 100px; } #out .brand .name { font-size: 38px; } }
@media (orientation: portrait) { html:not(.rot) #out .choices { flex-wrap: wrap; justify-content: center; } html:not(.rot) #out .cols { flex-direction: column; align-items: center; } html:not(.rot) #out .hero { height: 120px; } }
`;var C="./assets/accueil-YMZL46TB.webp";var ce="planetoid-carte-2",j=new URLSearchParams(location.search),s=e=>document.getElementById(e),X=()=>{try{return JSON.parse(localStorage.getItem(ce)??"null")?.world?.v===G}catch{return!1}},I=()=>new Promise(e=>requestAnimationFrame(()=>setTimeout(e,30))),V=()=>{},le=[3,5,10,20,30].filter(e=>e>=p.villages.min&&e<=p.villages.max),l=p.villages.min;function ee(){B();let e=document.createElement("style");return e.textContent=E,document.head.appendChild(e),s("load-logo").style.backgroundImage=`url(${z})`,te(12,"Chargement\u2026"),new Promise(a=>{V=a,pe()})}function te(e,a){s("load-bar").style.width=`${e}%`,s("load-step").textContent=a}async function pe(){let e=H(),a=(j.get("partie")??"").trim().toUpperCase(),o=!!a&&a!==e?.code;if(!j.has("accueil")&&!o){if(e&&e.launched===!1){await N(),L(e);return}if(e||X()||["fresh","seed","solo","manual"].some(t=>j.has(t))){v();return}}await N(),M(),o&&U(a)}async function v(){$();let e=new URLSearchParams(location.search);e.delete("accueil"),e.delete("partie");let a=e.toString();history.replaceState(null,"",location.pathname+(a?`?${a}`:"")),s("loading").hidden=!1,te(22,"La carte se dessine\u2026"),document.getElementById("out")?.remove(),await I(),V()}async function N(){let e=document.createElement("div");e.id="out",e.style.backgroundImage=`url(${C})`,e.innerHTML=`<div class="shade"></div>
  <div class="screen home" id="o-home">
    <div class="brand"><span class="logo" style="background-image:url(${z})"></span><span class="name n">Shardholm</span></div>
    <div class="choices">
      <button class="choice go" id="o-create"><img data-art="soldat"><span class="band"><span class="n">Cr\xE9er une partie</span></span></button>
      <button class="choice nav" id="o-join"><img data-art="archere"><span class="band"><span class="n">Rejoindre</span></span></button>
      <button class="choice neutral" id="o-solo"><span class="tag n" id="o-solo-tag" hidden></span><img data-art="recolteur"><span class="band"><span class="n" id="o-solo-lab">Jouer seul</span></span></button>
    </div>
    <p class="say">Chacun son village sur la m\xEAme carte. Le monde continue quand personne ne joue, et les notifications pr\xE9viennent de ce qui arrive.</p>
  </div>
  <div class="screen form" id="o-form" hidden></div>
  <div class="screen room" id="o-room" hidden></div>`,document.body.appendChild(e),y();let a=H();if(a){s("o-solo-lab").textContent="Reprendre";let t=s("o-solo-tag");t.textContent=a.code,t.hidden=!1}else if(X()){let t=s("o-solo-tag");t.textContent="en cours",t.hidden=!1}if(s("o-solo").onclick=()=>{v()},s("o-create").onclick=()=>ne(),s("o-join").onclick=()=>U(),!Z())for(let t of["o-create","o-join"])s(t).disabled=!0;let o=new Image;o.src=C,await Promise.race([Promise.all([o.decode().catch(()=>null),document.fonts.load('20px "Lilita"'),document.fonts.load('600 12px "Fredoka"')]),new Promise(t=>setTimeout(t,2500))]),s("loading").hidden=!0}function P(e){for(let a of["o-home","o-form","o-room"])s(a).hidden=a!==e}function M(){$(),P("o-home")}function ae(e,a,o,t){$(),P("o-form"),s("o-form").innerHTML=`<button class="back" id="o-back" aria-label="Revenir \xE0 l\u2019accueil"><span class="face">${r("arrow")}</span><span class="n">Accueil</span></button>
    <div class="win"><div class="ribbon plain"><span class="n">${e}</span></div>
      <div class="cols"><div class="hero"><img data-art="${a}"></div><div class="well fields">${o}</div></div>
      <div class="rfoot">${t}</div><div class="msg"></div></div>`,s("o-back").onclick=M,y()}var oe=()=>`<label class="fld"><span class="n">Ton nom</span><input id="o-name" maxlength="24" placeholder="Ton nom" autocomplete="nickname" value="${u(_())}"></label>`;function d(e,a=!1){let o=document.querySelector("#out .msg");o&&(o.textContent=e,o.classList.toggle("ok",a))}var se=()=>s("o-name").value.trim();function ne(){ae("Nouvelle partie","soldat",`${oe()}
    <div class="fld"><span class="n">Villages</span><div class="count">
      <button class="step" id="o-less" aria-label="Un village de moins">${r("minus")}</button>
      <span class="num"><span class="n" id="o-n"></span>${r("house")}</span>
      <button class="step" id="o-more" aria-label="Un village de plus">${r("plus")}</button>
    </div></div>
    <div class="fld"><span class="n"></span><div class="seg picks">${le.map(o=>`<button data-n="${o}" aria-label="${o} villages"><span class="n">${o}</span></button>`).join("")}</div></div>
    <p class="say">Tes fr\xE8res prennent les places avec le code de la partie. Celles qui sont encore libres au lancement vont \xE0 des bots. La partie dure 4 jours.</p>`,`<button class="go" id="o-create-go"><span class="face">${r("flag")}<span class="n">Cr\xE9er la partie</span></span></button>`);let e=o=>{l=Math.max(p.villages.min,Math.min(p.villages.max,o)),s("o-n").textContent=String(l),s("o-less").disabled=l<=p.villages.min,s("o-more").disabled=l>=p.villages.max,document.querySelectorAll("#o-form .picks button").forEach(t=>t.classList.toggle("on",Number(t.dataset.n)===l))};s("o-less").onclick=()=>e(l-1),s("o-more").onclick=()=>e(l+1),document.querySelectorAll("#o-form .picks button").forEach(o=>{o.onclick=()=>e(Number(o.dataset.n))}),e(l);let a=s("o-create-go");a.onclick=async()=>{let o=se();if(!o){d("Choisis d\u2019abord ton nom.");return}T(o),a.disabled=!0,d("Cr\xE9ation de la partie\u2026",!0);try{let t=await R(m(),o,1+Math.floor(Math.random()*9998),l),n={id:t.id,code:t.code,seat:t.seat,seats:t.seats,seed:t.seed,name:o,launched:!1};b(n),L(n,t)}catch(t){d(t.message),a.disabled=!1}}}function U(e=""){ae("Rejoindre une partie","archere",`${oe()}
    <label class="fld"><span class="n">Code</span><input id="o-code" class="code" maxlength="5" autocapitalize="characters" autocomplete="off" spellcheck="false" value="${u(e)}" aria-label="Code de la partie"></label>
    <p class="say">Le code de 5 lettres que ton fr\xE8re t\u2019a envoy\xE9. Le m\xEAme nom sur un autre t\xE9l\xE9phone reprend le m\xEAme village.</p>`,`<button class="go blue" id="o-join-go"><span class="face">${r("arrow")}<span class="n">Rejoindre</span></span></button>`);let a=s("o-join-go");a.onclick=async()=>{let o=se(),t=s("o-code").value.trim().toUpperCase();if(!o){d("Choisis d\u2019abord ton nom.");return}if(t.length!==5){d("Le code a 5 lettres.");return}T(o),a.disabled=!0,d("\u2026",!0);try{let n=await Y(m(),t,o),c={id:n.id,code:n.code,seat:n.seat,seats:n.seats,seed:n.seed,name:o,launched:n.launched};b(c),n.launched?v():L(c)}catch(n){d(n.message),a.disabled=!1}}}var Q=0,x=null,g=!1;function $(){clearInterval(Q),Q=0,x=null}function L(e,a){P("o-room"),x=e,g=!1;let o=s("o-room");o.innerHTML=`<button class="back" id="o-leave" aria-label="Revenir \xE0 l\u2019accueil"><span class="face">${r("arrow")}</span><span class="n">Accueil</span></button>
    <button class="back bell" id="o-push" aria-label="Notifications"><span class="face">${r("bell")}</span><span class="ok" hidden>${r("check")}</span><span class="n">Notifications</span></button>
    <div class="win"><div class="ribbon plain"><span class="n">Salle d\u2019attente</span></div>
      <div class="cols">
        <div class="well codebox"><div class="head"><span class="n">Code de la partie</span></div>
          <div class="letters">${[...e.code].map(t=>`<span class="n">${t}</span>`).join("")}</div>
          <button class="rb nav" id="o-share"><span class="face">${r("person")}<span class="n">Inviter</span></span></button>
          <p class="say">Tes fr\xE8res ouvrent Shardholm, touchent Rejoindre et entrent ce code.</p></div>
        <div class="well seatsbox"><div class="head"><span class="n">Les villages</span><small id="o-count"></small></div><div class="seats" id="o-seats"></div></div>
      </div>
      <div class="rfoot" id="o-foot"></div><div class="msg"></div>
    </div>`,s("o-leave").onclick=()=>M(),s("o-share").onclick=async()=>{let t=`${location.origin}${location.pathname}?partie=${e.code}`,n=`Rejoins ma partie de Shardholm : ouvre le jeu, touche Rejoindre et entre le code ${e.code}.`;try{if(navigator.share){await navigator.share({title:"Shardholm",text:n,url:t});return}await navigator.clipboard.writeText(`${n} ${t}`),d("Invitation copi\xE9e.",!0)}catch{}},F(),a&&ie(a),D(),Q=window.setInterval(()=>{document.hidden||D()},2500)}async function D(){let e=x;if(!(!e||g))try{let a=await S(m(),e.id);if(x!==e||g)return;if(a.launched){b({...e,launched:!0}),v();return}ie(a)}catch(a){x===e&&d(a.message)}}var ue=6;function ie(e){let a=i=>i.seat===e.seat||!!i.seenAt&&e.now-i.seenAt<12e3,o=e.players.length,t=e.seats-o,n=[...e.players].sort((i,h)=>i.seat-h.seat).map(i=>`<div class="seat${i.seat===e.seat?" me":""}">${i.seat===0?r("star","ic chief"):""}<i class="dot${a(i)?" on":""}"></i><img data-art="soldat-tete"><span class="nm"><span class="n">${u(i.name)}</span></span></div>`);if(t&&e.seats<=ue)for(let i=0;i<t;i++)n.push(`<div class="seat free">${r("person","ic ghost")}<span class="nm"><span class="n">Libre</span></span></div>`);else t&&n.push(`<div class="seat free"><span class="plus n">${t}</span><span class="nm"><span class="n">${t>1?"Libres":"Libre"}</span></span></div>`);s("o-seats").innerHTML=n.join("");let c=n.length;s("o-seats").style.gridTemplateColumns=`repeat(${c<=3?c:c===4?2:c<=6?3:4}, 74px)`,y(),s("o-count").textContent=`${o} / ${e.seats}`;let k=e.players.find(i=>i.seat===0)?.name??"",w=s("o-foot");if(e.seat===0){let i=t?`${o===1?"Toi":`${o} joueurs`} et ${t} bot${t>1?"s":""}.`:"Toutes les places sont prises.";document.getElementById("o-launch")||(w.innerHTML=`<button class="go" id="o-launch"><span class="face">${r("swords")}<span class="n">Lancer la partie</span></span></button><p class="say" id="o-launch-sub"></p>`,s("o-launch").onclick=()=>{me(e)}),s("o-launch-sub").innerHTML=`${u(i)}<br>Le monde d\xE9marre au lancement, pour 4 jours.`}else w.innerHTML=`<div class="waiting">${r("hourglass")}<span class="n">${u(k)} lance la partie quand tout le monde est l\xE0</span></div>`}async function me(e){let a=x;if(!a||g)return;g=!0;let o=s("o-launch");o.disabled=!0,d("Lancement\u2026",!0);try{let t=m(),n=await S(t,a.id).catch(()=>e);if(!n.launched){await I();let c=new K(n.seed,8e3,n.seats),k=h=>n.players.find(f=>f.seat===h),w=Array.from({length:n.seats},(h,f)=>k(f)?.owner??null),i=Array.from({length:n.seats},(h,f)=>k(f)?.name);await W(t,a.id,J.fresh(c,w,i))}b({...a,launched:!0}),v()}catch(t){g=!1,o.disabled=!1,d(t.message)}}var q={on:"Notifications activ\xE9es sur ce t\xE9l\xE9phone.",off:"",install:"Sur iPhone, les notifications marchent dans le jeu ajout\xE9 \xE0 l\u2019\xE9cran d\u2019accueil (Partager, \xAB Sur l\u2019\xE9cran d\u2019accueil \xBB).",denied:"Notifications refus\xE9es : autorise-les dans R\xE9glages, Notifications.",unsupported:""};async function F(e){let a=document.getElementById("o-push");if(!a)return;let o=e??await A().catch(()=>"unsupported");a.hidden=o==="unsupported",a.querySelector(".ok").hidden=o!=="on",a.onclick=async()=>{if(o!=="off"){d(q[o],o==="on");return}try{let t=await O(m());d(t==="on"?"Notifications activ\xE9es : tu sauras quand la partie commence.":q[t],t==="on"),await F()}catch(t){d(t.message)}}}window.out={home:M,create:()=>ne(),join:(e="")=>U(e),msg:e=>d(e),push:e=>F(e),room:e=>{L({id:e.id,code:e.code,seat:e.seat,seats:e.seats,seed:e.seed,name:"",launched:!1},e),$()}};ee().then(()=>import("./carte-4YKOHGBZ.js"));
