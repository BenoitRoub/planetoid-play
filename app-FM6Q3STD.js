import{W as G,aa as p,ba as J,d,da as u,e as w,fa as z,ga as f,h as B,ia as Z,j as l,ja as H,ka as _,la as Y,ma as R,na as T,oa as W,qa as A,r as L,ra as O}from"./chunk-PWXGLQRV.js";import{Pb as K}from"./chunk-6JYWWMBA.js";var E=`/* The screens out of the game (accueil.ts), in the theme \xAB Pierre et or \xBB (game/src/ui/menus.css): the war map
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
`;var S="./assets/accueil-YMZL46TB.webp";var ce="planetoid-carte-2",Q=new URLSearchParams(location.search),s=e=>document.getElementById(e),I=()=>{try{return JSON.parse(localStorage.getItem(ce)??"null")?.world?.v===G}catch{return!1}},V=()=>new Promise(e=>requestAnimationFrame(()=>setTimeout(e,30))),X=()=>{},le=[p.villages.min,Math.round((p.villages.min+p.villages.max)/2),p.villages.max],j=p.villages.min;function ee(){B();let e=document.createElement("style");return e.textContent=E,document.head.appendChild(e),s("load-logo").style.backgroundImage=`url(${L})`,te(12,"Chargement\u2026"),new Promise(t=>{X=t,pe()})}function te(e,t){s("load-bar").style.width=`${e}%`,s("load-step").textContent=t}async function pe(){let e=z(),t=(Q.get("partie")??"").trim().toUpperCase(),a=!!t&&t!==e?.code;if(!Q.has("accueil")&&!a){if(e&&e.launched===!1){await N(),$(e);return}if(e||I()||["fresh","seed","solo","manual"].some(o=>Q.has(o))){b();return}}await N(),y(),a&&U(t)}async function b(){M();let e=new URLSearchParams(location.search);e.delete("accueil"),e.delete("partie");let t=e.toString();history.replaceState(null,"",location.pathname+(t?`?${t}`:"")),s("loading").hidden=!1,te(22,"La carte se dessine\u2026"),document.getElementById("out")?.remove(),await V(),X()}async function N(){let e=document.createElement("div");e.id="out",e.style.backgroundImage=`url(${S})`,e.innerHTML=`<div class="shade"></div>
  <div class="screen home" id="o-home">
    <div class="brand"><span class="logo" style="background-image:url(${L})"></span><span class="name n">Shardholm</span></div>
    <div class="choices">
      <button class="choice go" id="o-create"><img data-art="soldat"><span class="band"><span class="n">Cr\xE9er une partie</span></span></button>
      <button class="choice nav" id="o-join"><img data-art="archere"><span class="band"><span class="n">Rejoindre</span></span></button>
      <button class="choice neutral" id="o-solo"><span class="tag n" id="o-solo-tag" hidden></span><img data-art="recolteur"><span class="band"><span class="n" id="o-solo-lab">Jouer seul</span></span></button>
    </div>
    <p class="say">Chacun son village sur la m\xEAme carte. Le monde continue quand personne ne joue, et les notifications pr\xE9viennent de ce qui arrive.</p>
  </div>
  <div class="screen form" id="o-form" hidden></div>
  <div class="screen room" id="o-room" hidden></div>`,document.body.appendChild(e),w();let t=z();if(t){s("o-solo-lab").textContent="Reprendre";let o=s("o-solo-tag");o.textContent=t.code,o.hidden=!1}else if(I()){let o=s("o-solo-tag");o.textContent="en cours",o.hidden=!1}if(s("o-solo").onclick=()=>{b()},s("o-create").onclick=()=>ne(),s("o-join").onclick=()=>U(),!_())for(let o of["o-create","o-join"])s(o).disabled=!0;let a=new Image;a.src=S,await Promise.race([Promise.all([a.decode().catch(()=>null),document.fonts.load('20px "Lilita"'),document.fonts.load('600 12px "Fredoka"')]),new Promise(o=>setTimeout(o,2500))]),s("loading").hidden=!0}function P(e){for(let t of["o-home","o-form","o-room"])s(t).hidden=t!==e}function y(){M(),P("o-home")}function ae(e,t,a,o){M(),P("o-form"),s("o-form").innerHTML=`<button class="back" id="o-back" aria-label="Revenir \xE0 l\u2019accueil"><span class="face">${d("arrow")}</span><span class="n">Accueil</span></button>
    <div class="win"><div class="ribbon plain"><span class="n">${e}</span></div>
      <div class="cols"><div class="hero"><img data-art="${t}"></div><div class="well fields">${a}</div></div>
      <div class="rfoot">${o}</div><div class="msg"></div></div>`,s("o-back").onclick=y,w()}var oe=()=>`<label class="fld"><span class="n">Ton nom</span><input id="o-name" maxlength="24" placeholder="Ton nom" autocomplete="nickname" value="${l(Z())}"></label>`;function r(e,t=!1){let a=document.querySelector("#out .msg");a&&(a.textContent=e,a.classList.toggle("ok",t))}var se=()=>s("o-name").value.trim();function ne(){ae("Nouvelle partie","soldat",`${oe()}
    <div class="fld"><span class="n">Villages</span><div class="seg">${le.map(t=>`<button data-n="${t}" class="${t===j?"on":""}" aria-label="${t} villages">${d("house")}<span class="n">${t}</span></button>`).join("")}</div></div>
    <p class="say">Tes fr\xE8res prennent les places avec le code de la partie. Celles qui sont encore libres au lancement vont \xE0 des bots. La partie dure 4 jours.</p>`,`<button class="go" id="o-create-go"><span class="face">${d("flag")}<span class="n">Cr\xE9er la partie</span></span></button>`),document.querySelectorAll("#o-form .seg button").forEach(t=>{t.onclick=()=>{j=Number(t.dataset.n),document.querySelectorAll("#o-form .seg button").forEach(a=>a.classList.toggle("on",a===t))}});let e=s("o-create-go");e.onclick=async()=>{let t=se();if(!t){r("Choisis d\u2019abord ton nom.");return}H(t),e.disabled=!0,r("Cr\xE9ation de la partie\u2026",!0);try{let a=await R(u(),t,1+Math.floor(Math.random()*9998),j),o={id:a.id,code:a.code,seat:a.seat,seats:a.seats,seed:a.seed,name:t,launched:!1};f(o),$(o,a)}catch(a){r(a.message),e.disabled=!1}}}function U(e=""){ae("Rejoindre une partie","archere",`${oe()}
    <label class="fld"><span class="n">Code</span><input id="o-code" class="code" maxlength="5" autocapitalize="characters" autocomplete="off" spellcheck="false" value="${l(e)}" aria-label="Code de la partie"></label>
    <p class="say">Le code de 5 lettres que ton fr\xE8re t\u2019a envoy\xE9. Le m\xEAme nom sur un autre t\xE9l\xE9phone reprend le m\xEAme village.</p>`,`<button class="go blue" id="o-join-go"><span class="face">${d("arrow")}<span class="n">Rejoindre</span></span></button>`);let t=s("o-join-go");t.onclick=async()=>{let a=se(),o=s("o-code").value.trim().toUpperCase();if(!a){r("Choisis d\u2019abord ton nom.");return}if(o.length!==5){r("Le code a 5 lettres.");return}H(a),t.disabled=!0,r("\u2026",!0);try{let n=await Y(u(),o,a),c={id:n.id,code:n.code,seat:n.seat,seats:n.seats,seed:n.seed,name:a,launched:n.launched};f(c),n.launched?b():$(c)}catch(n){r(n.message),t.disabled=!1}}}var C=0,m=null,g=!1;function M(){clearInterval(C),C=0,m=null}function $(e,t){P("o-room"),m=e,g=!1;let a=s("o-room");a.innerHTML=`<button class="back" id="o-leave" aria-label="Revenir \xE0 l\u2019accueil"><span class="face">${d("arrow")}</span><span class="n">Accueil</span></button>
    <button class="back bell" id="o-push" aria-label="Notifications"><span class="face">${d("bell")}</span><span class="ok" hidden>${d("check")}</span><span class="n">Notifications</span></button>
    <div class="win"><div class="ribbon plain"><span class="n">Salle d\u2019attente</span></div>
      <div class="cols">
        <div class="well codebox"><div class="head"><span class="n">Code de la partie</span></div>
          <div class="letters">${[...e.code].map(o=>`<span class="n">${o}</span>`).join("")}</div>
          <button class="rb nav" id="o-share"><span class="face">${d("person")}<span class="n">Inviter</span></span></button>
          <p class="say">Tes fr\xE8res ouvrent Shardholm, touchent Rejoindre et entrent ce code.</p></div>
        <div class="well seatsbox"><div class="head"><span class="n">Les villages</span><small id="o-count"></small></div><div class="seats" id="o-seats"></div></div>
      </div>
      <div class="rfoot" id="o-foot"></div><div class="msg"></div>
    </div>`,s("o-leave").onclick=()=>y(),s("o-share").onclick=async()=>{let o=`${location.origin}${location.pathname}?partie=${e.code}`,n=`Rejoins ma partie de Shardholm : ouvre le jeu, touche Rejoindre et entre le code ${e.code}.`;try{if(navigator.share){await navigator.share({title:"Shardholm",text:n,url:o});return}await navigator.clipboard.writeText(`${n} ${o}`),r("Invitation copi\xE9e.",!0)}catch{}},F(),t&&ie(t),D(),C=window.setInterval(()=>{document.hidden||D()},2500)}async function D(){let e=m;if(!(!e||g))try{let t=await T(u(),e.id);if(m!==e||g)return;if(t.launched){f({...e,launched:!0}),b();return}ie(t)}catch(t){m===e&&r(t.message)}}function ie(e){let t=i=>i.seat===e.seat||!!i.seenAt&&e.now-i.seenAt<12e3,a=e.players.length,o=e.seats-a,n=[...e.players].sort((i,x)=>i.seat-x.seat).map(i=>`<div class="seat${i.seat===e.seat?" me":""}">${i.seat===0?d("star","ic chief"):""}<i class="dot${t(i)?" on":""}"></i><img data-art="soldat-tete"><span class="nm"><span class="n">${l(i.name)}</span></span></div>`);o&&n.push(`<div class="seat free"><span class="plus n">${o}</span><span class="nm"><span class="n">${o>1?"Libres":"Libre"}</span></span></div>`),s("o-seats").innerHTML=n.join("");let c=n.length;s("o-seats").style.gridTemplateColumns=`repeat(${c<=3?c:c===4?2:c<=6?3:4}, 74px)`,w(),s("o-count").textContent=`${a} / ${e.seats}`;let v=e.players.find(i=>i.seat===0)?.name??"",k=s("o-foot");if(e.seat===0){let i=o?`${a===1?"Toi":`${a} joueurs`} et ${o} bot${o>1?"s":""}.`:"Toutes les places sont prises.";document.getElementById("o-launch")||(k.innerHTML=`<button class="go" id="o-launch"><span class="face">${d("swords")}<span class="n">Lancer la partie</span></span></button><p class="say" id="o-launch-sub"></p>`,s("o-launch").onclick=()=>{ue(e)}),s("o-launch-sub").innerHTML=`${l(i)}<br>Le monde d\xE9marre au lancement, pour 4 jours.`}else k.innerHTML=`<div class="waiting">${d("hourglass")}<span class="n">${l(v)} lance la partie quand tout le monde est l\xE0</span></div>`}async function ue(e){let t=m;if(!t||g)return;g=!0;let a=s("o-launch");a.disabled=!0,r("Lancement\u2026",!0);try{let o=u(),n=await T(o,t.id).catch(()=>e);if(!n.launched){await V();let c=new K(n.seed,8e3,n.seats),v=x=>n.players.find(h=>h.seat===x),k=Array.from({length:n.seats},(x,h)=>v(h)?.owner??null),i=Array.from({length:n.seats},(x,h)=>v(h)?.name);await W(o,t.id,J.fresh(c,k,i))}f({...t,launched:!0}),b()}catch(o){g=!1,a.disabled=!1,r(o.message)}}var q={on:"Notifications activ\xE9es sur ce t\xE9l\xE9phone.",off:"",install:"Sur iPhone, les notifications marchent dans le jeu ajout\xE9 \xE0 l\u2019\xE9cran d\u2019accueil (Partager, \xAB Sur l\u2019\xE9cran d\u2019accueil \xBB).",denied:"Notifications refus\xE9es : autorise-les dans R\xE9glages, Notifications.",unsupported:""};async function F(e){let t=document.getElementById("o-push");if(!t)return;let a=e??await A().catch(()=>"unsupported");t.hidden=a==="unsupported",t.querySelector(".ok").hidden=a!=="on",t.onclick=async()=>{if(a!=="off"){r(q[a],a==="on");return}try{let o=await O(u());r(o==="on"?"Notifications activ\xE9es : tu sauras quand la partie commence.":q[o],o==="on"),await F()}catch(o){r(o.message)}}}window.out={home:y,create:()=>ne(),join:(e="")=>U(e),msg:e=>r(e),push:e=>F(e),room:e=>{$({id:e.id,code:e.code,seat:e.seat,seats:e.seats,seed:e.seed,name:"",launched:!1},e),M()}};ee().then(()=>import("./carte-6T4CAWYN.js"));
