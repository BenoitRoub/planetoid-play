import{Ac as K,Bc as p,Dc as M,Ec as b,Gc as G,Hc as $,Ic as J,Jc as Z,Kc as _,Lc as z,Mc as Y,Oc as R,Pc as W,Vb as B,e as c,f as k,i as F,k as l,q as y}from"./chunk-ZGSWGGPZ.js";var A=`/* The screens out of the game (accueil.ts), in the theme \xAB Pierre et or \xBB (game/src/ui/menus.css): the war map
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
#out .seats { display: grid; grid-template-columns: repeat(3, 74px); gap: 8px; justify-content: center; }
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
`;var L="./assets/accueil-YMZL46TB.webp";var re="planetoid-carte-2",H=new URLSearchParams(location.search),n=e=>document.getElementById(e),D=()=>{try{return JSON.parse(localStorage.getItem(re)??"null")?.world?.v===6}catch{return!1}},E=()=>new Promise(e=>requestAnimationFrame(()=>setTimeout(e,30))),X=()=>{},T=4;function I(){F();let e=document.createElement("style");return e.textContent=A,document.head.appendChild(e),n("load-logo").style.backgroundImage=`url(${y})`,V(12,"Chargement\u2026"),new Promise(t=>{X=t,ce()})}function V(e,t){n("load-bar").style.width=`${e}%`,n("load-step").textContent=t}async function ce(){let e=M(),t=(H.get("partie")??"").trim().toUpperCase(),o=!!t&&t!==e?.code;if(!H.has("accueil")&&!o){if(e&&e.launched===!1){await O(),j(e);return}if(e||D()||["fresh","seed","solo","manual"].some(a=>H.has(a))){v();return}}await O(),w(),o&&C(t)}async function v(){P();let e=new URLSearchParams(location.search);e.delete("accueil"),e.delete("partie");let t=e.toString();history.replaceState(null,"",location.pathname+(t?`?${t}`:"")),n("loading").hidden=!1,V(22,"La carte se dessine\u2026"),document.getElementById("out")?.remove(),await E(),X()}async function O(){let e=document.createElement("div");e.id="out",e.style.backgroundImage=`url(${L})`,e.innerHTML=`<div class="shade"></div>
  <div class="screen home" id="o-home">
    <div class="brand"><span class="logo" style="background-image:url(${y})"></span><span class="name n">Shardholm</span></div>
    <div class="choices">
      <button class="choice go" id="o-create"><img data-art="soldat"><span class="band"><span class="n">Cr\xE9er une partie</span></span></button>
      <button class="choice nav" id="o-join"><img data-art="archere"><span class="band"><span class="n">Rejoindre</span></span></button>
      <button class="choice neutral" id="o-solo"><span class="tag n" id="o-solo-tag" hidden></span><img data-art="recolteur"><span class="band"><span class="n" id="o-solo-lab">Jouer seul</span></span></button>
    </div>
    <p class="say">Chacun son village sur la m\xEAme carte. Le monde continue quand personne ne joue, et les notifications pr\xE9viennent de ce qui arrive.</p>
  </div>
  <div class="screen form" id="o-form" hidden></div>
  <div class="screen room" id="o-room" hidden></div>`,document.body.appendChild(e),k();let t=M();if(t){n("o-solo-lab").textContent="Reprendre";let a=n("o-solo-tag");a.textContent=t.code,a.hidden=!1}else if(D()){let a=n("o-solo-tag");a.textContent="en cours",a.hidden=!1}if(n("o-solo").onclick=()=>{v()},n("o-create").onclick=()=>ae(),n("o-join").onclick=()=>C(),!J())for(let a of["o-create","o-join"])n(a).disabled=!0;let o=new Image;o.src=L,await Promise.race([Promise.all([o.decode().catch(()=>null),document.fonts.load('20px "Lilita"'),document.fonts.load('600 12px "Fredoka"')]),new Promise(a=>setTimeout(a,2500))]),n("loading").hidden=!0}function Q(e){for(let t of["o-home","o-form","o-room"])n(t).hidden=t!==e}function w(){P(),Q("o-home")}function ee(e,t,o,a){P(),Q("o-form"),n("o-form").innerHTML=`<button class="back" id="o-back" aria-label="Revenir \xE0 l\u2019accueil"><span class="face">${c("arrow")}</span><span class="n">Accueil</span></button>
    <div class="win"><div class="ribbon plain"><span class="n">${e}</span></div>
      <div class="cols"><div class="hero"><img data-art="${t}"></div><div class="well fields">${o}</div></div>
      <div class="rfoot">${a}</div><div class="msg"></div></div>`,n("o-back").onclick=w,k()}var te=()=>`<label class="fld"><span class="n">Ton nom</span><input id="o-name" maxlength="24" placeholder="Ton nom" autocomplete="nickname" value="${l(G())}"></label>`;function r(e,t=!1){let o=document.querySelector("#out .msg");o&&(o.textContent=e,o.classList.toggle("ok",t))}var oe=()=>n("o-name").value.trim();function ae(){ee("Nouvelle partie","soldat",`${te()}
    <div class="fld"><span class="n">Villages</span><div class="seg">${[3,4,5,6].map(t=>`<button data-n="${t}" class="${t===T?"on":""}" aria-label="${t} villages">${c("house")}<span class="n">${t}</span></button>`).join("")}</div></div>
    <p class="say">Tes fr\xE8res prennent les places avec le code de la partie. Celles qui sont encore libres au lancement vont \xE0 des bots.</p>`,`<button class="go" id="o-create-go"><span class="face">${c("flag")}<span class="n">Cr\xE9er la partie</span></span></button>`),document.querySelectorAll("#o-form .seg button").forEach(t=>{t.onclick=()=>{T=Number(t.dataset.n),document.querySelectorAll("#o-form .seg button").forEach(o=>o.classList.toggle("on",o===t))}});let e=n("o-create-go");e.onclick=async()=>{let t=oe();if(!t){r("Choisis d\u2019abord ton nom.");return}$(t),e.disabled=!0,r("Cr\xE9ation de la partie\u2026",!0);try{let o=await _(p(),t,1+Math.floor(Math.random()*9998),T),a={id:o.id,code:o.code,seat:o.seat,seats:o.seats,seed:o.seed,name:t,launched:!1};b(a),j(a,o)}catch(o){r(o.message),e.disabled=!1}}}function C(e=""){ee("Rejoindre une partie","archere",`${te()}
    <label class="fld"><span class="n">Code</span><input id="o-code" class="code" maxlength="5" autocapitalize="characters" autocomplete="off" spellcheck="false" value="${l(e)}" aria-label="Code de la partie"></label>
    <p class="say">Le code de 5 lettres que ton fr\xE8re t\u2019a envoy\xE9. Le m\xEAme nom sur un autre t\xE9l\xE9phone reprend le m\xEAme village.</p>`,`<button class="go blue" id="o-join-go"><span class="face">${c("arrow")}<span class="n">Rejoindre</span></span></button>`);let t=n("o-join-go");t.onclick=async()=>{let o=oe(),a=n("o-code").value.trim().toUpperCase();if(!o){r("Choisis d\u2019abord ton nom.");return}if(a.length!==5){r("Le code a 5 lettres.");return}$(o),t.disabled=!0,r("\u2026",!0);try{let s=await Z(p(),a,o),d={id:s.id,code:s.code,seat:s.seat,seats:s.seats,seed:s.seed,name:o,launched:s.launched};b(d),s.launched?v():j(d)}catch(s){r(s.message),t.disabled=!1}}}var S=0,u=null,m=!1;function P(){clearInterval(S),S=0,u=null}function j(e,t){Q("o-room"),u=e,m=!1;let o=n("o-room");o.innerHTML=`<button class="back" id="o-leave" aria-label="Revenir \xE0 l\u2019accueil"><span class="face">${c("arrow")}</span><span class="n">Accueil</span></button>
    <button class="back bell" id="o-push" aria-label="Notifications"><span class="face">${c("bell")}</span><span class="ok" hidden>${c("check")}</span><span class="n">Notifications</span></button>
    <div class="win"><div class="ribbon plain"><span class="n">Salle d\u2019attente</span></div>
      <div class="cols">
        <div class="well codebox"><div class="head"><span class="n">Code de la partie</span></div>
          <div class="letters">${[...e.code].map(a=>`<span class="n">${a}</span>`).join("")}</div>
          <button class="rb nav" id="o-share"><span class="face">${c("person")}<span class="n">Inviter</span></span></button>
          <p class="say">Tes fr\xE8res ouvrent Shardholm, touchent Rejoindre et entrent ce code.</p></div>
        <div class="well seatsbox"><div class="head"><span class="n">Les villages</span><small id="o-count"></small></div><div class="seats" id="o-seats"></div></div>
      </div>
      <div class="rfoot" id="o-foot"></div><div class="msg"></div>
    </div>`,n("o-leave").onclick=()=>w(),n("o-share").onclick=async()=>{let a=`${location.origin}${location.pathname}?partie=${e.code}`,s=`Rejoins ma partie de Shardholm : ouvre le jeu, touche Rejoindre et entre le code ${e.code}.`;try{if(navigator.share){await navigator.share({title:"Shardholm",text:s,url:a});return}await navigator.clipboard.writeText(`${s} ${a}`),r("Invitation copi\xE9e.",!0)}catch{}},U(),t&&ne(t),N(),S=window.setInterval(()=>{document.hidden||N()},2500)}async function N(){let e=u;if(!(!e||m))try{let t=await z(p(),e.id);if(u!==e||m)return;if(t.launched){b({...e,launched:!0}),v();return}ne(t)}catch(t){u===e&&r(t.message)}}function ne(e){let t=i=>i.seat===e.seat||!!i.seenAt&&e.now-i.seenAt<12e3,o=[];for(let i=0;i<e.seats;i++){let x=e.players.find(h=>h.seat===i);o.push(x?`<div class="seat${i===e.seat?" me":""}">${i===0?c("star","ic chief"):""}<i class="dot${t(x)?" on":""}"></i><img data-art="soldat-tete"><span class="nm"><span class="n">${l(x.name)}</span></span></div>`:'<div class="seat free"><span class="plus n">+</span><span class="nm"><span class="n">Libre</span></span></div>')}n("o-seats").innerHTML=o.join(""),n("o-seats").style.gridTemplateColumns=`repeat(${e.seats===4?2:3}, 74px)`,k();let a=e.players.length,s=e.seats-a;n("o-count").textContent=`${a} / ${e.seats}`;let d=e.players.find(i=>i.seat===0)?.name??"",g=n("o-foot");if(e.seat===0){let i=s?`${a===1?"Toi":`${a} joueurs`} et ${s} bot${s>1?"s":""}.`:"Toutes les places sont prises.";document.getElementById("o-launch")||(g.innerHTML=`<button class="go" id="o-launch"><span class="face">${c("swords")}<span class="n">Lancer la partie</span></span></button><p class="say" id="o-launch-sub"></p>`,n("o-launch").onclick=()=>{de(e)}),n("o-launch-sub").innerHTML=`${l(i)}<br>Le monde d\xE9marre au lancement.`}else g.innerHTML=`<div class="waiting">${c("hourglass")}<span class="n">${l(d)} lance la partie quand tout le monde est l\xE0</span></div>`}async function de(e){let t=u;if(!t||m)return;m=!0;let o=n("o-launch");o.disabled=!0,r("Lancement\u2026",!0);try{let a=p(),s=await z(a,t.id).catch(()=>e);if(!s.launched){await E();let d=new B(s.seed,8e3,s.seats),g=h=>s.players.find(f=>f.seat===h),i=Array.from({length:s.seats},(h,f)=>g(f)?.owner??null),x=Array.from({length:s.seats},(h,f)=>g(f)?.name);await Y(a,t.id,K.fresh(d,i,x))}b({...t,launched:!0}),v()}catch(a){m=!1,o.disabled=!1,r(a.message)}}var q={on:"Notifications activ\xE9es sur ce t\xE9l\xE9phone.",off:"",install:"Sur iPhone, les notifications marchent dans le jeu ajout\xE9 \xE0 l\u2019\xE9cran d\u2019accueil (Partager, \xAB Sur l\u2019\xE9cran d\u2019accueil \xBB).",denied:"Notifications refus\xE9es : autorise-les dans R\xE9glages, Notifications.",unsupported:""};async function U(e){let t=document.getElementById("o-push");if(!t)return;let o=e??await R().catch(()=>"unsupported");t.hidden=o==="unsupported",t.querySelector(".ok").hidden=o!=="on",t.onclick=async()=>{if(o!=="off"){r(q[o],o==="on");return}try{let a=await W(p());r(a==="on"?"Notifications activ\xE9es : tu sauras quand la partie commence.":q[a],a==="on"),await U()}catch(a){r(a.message)}}}window.out={home:w,create:()=>ae(),join:(e="")=>C(e),msg:e=>r(e),push:e=>U(e)};I().then(()=>import("./carte-4M3WWH3X.js"));
