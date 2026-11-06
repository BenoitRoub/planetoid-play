var Bh=Object.defineProperty;var kh=(i,t,e)=>t in i?Bh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var $=(i,t,e)=>kh(i,typeof t!="symbol"?t+"":t,e);var Fl=()=>document.documentElement.classList.contains("rot"),Fh=()=>window.__screen??{w:innerWidth,h:innerHeight};function Jh(){let i=(t,e,n)=>{Object.defineProperty(t,"clientX",{configurable:!0,enumerable:!0,get(){return Fl()?n.call(this):e.call(this)}}),Object.defineProperty(t,"clientY",{configurable:!0,enumerable:!0,get(){return Fl()?Fh().w-e.call(this):n.call(this)}})};for(let t of[MouseEvent,typeof Touch<"u"?Touch:null]){if(!t)continue;let e=Object.getOwnPropertyDescriptor(t.prototype,"clientX"),n=Object.getOwnPropertyDescriptor(t.prototype,"clientY");e?.get&&n?.get&&i(t.prototype,e.get,n.get)}}var Jl=window;Jl.__rotate||(Jl.__rotate=!0,Jh());var Nl=`/* The interface of the fantasy village, direction A \xAB Pierre et or \xBB (validated 04/11), as a theme: every colour and
   material is a token on [data-theme="pierre"], so another theme only redefines the tokens. Sizes are iPhone points
   on the 844x390 landscape screen at Clash of Clans' measured scale. The HUD sits bare on the scene; the material
   dresses the buttons and the windows only. Windows open centred over the dimmed scene, like Clash's. Used as is by the mockups (with frame.css) and by the
   game page (game/src/map/carte.ts). */
[data-theme="pierre"] {
  --ink: #26211b;                    /* every outline */
  --text-ink: #1d1409;               /* the outline of white lettering */
  --gold: #f2c35a;                   /* the thread of the windows, selection */
  --stone: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, .1) 0 .8px, transparent 1.3px) 0 0 / 6px 6px, radial-gradient(circle at 60% 70%, rgba(40, 30, 20, .1) 0 .8px, transparent 1.4px) 0 0 / 9px 8px, linear-gradient(#ddd6c7, #b4ab99 52%, #918877);
  --well: linear-gradient(#6a5f4f, #514839);              /* the dark inside of a window */
  --card: linear-gradient(#f2ebdb, #cdc3ae);              /* a tile or a card */
  --card-off: linear-gradient(#958d80, #706a5f);          /* locked or unavailable */
  --band: rgba(26, 22, 18, .72);                          /* the dark band under a card */
  --ribbon: linear-gradient(#e86a55, #bf3a2c 55%, #8f2419);
  --btn-go: linear-gradient(#c9ff8a, #66d43c 45%, #2f9e2c);
  --btn-action: linear-gradient(#ffcc6e, #f79a2c 50%, #e0700f);
  --btn-nav: linear-gradient(#9fdcff, #3f9cf0 50%, #1f66c8);
  --btn-close: linear-gradient(#ff9a88, #ee4a37 50%, #c22a20);
  --btn-unit: linear-gradient(#f6efe0, #d3c8b1);
  --bad: #ff7a66;                                         /* a price you cannot pay */
  --soft-text: #f3ead8;
  /* outlined white lettering: an 8-way outline and a hard drop */
  --o: 0 1.2px 0 var(--text-ink), 1.2px 0 0 var(--text-ink), -1.2px 0 0 var(--text-ink), 0 -1.2px 0 var(--text-ink), .9px .9px 0 var(--text-ink), -.9px .9px 0 var(--text-ink), .9px -.9px 0 var(--text-ink), -.9px -.9px 0 var(--text-ink), 0 1.8px 0 var(--text-ink);
}

/* The page provides --l, --r, --t, --b (the safe margins) and the frame: frame.css for the mockups, the game page
   its own. Everything below is the theme's components. */
* { box-sizing: border-box; margin: 0; padding: 0; }
button { font: inherit; color: inherit; border: 0; background: none; padding: 0; }
svg.ic { display: block; overflow: visible; flex: none; }
.n { font-family: "Lilita"; color: #fff; text-shadow: var(--o); letter-spacing: .2px; line-height: 1; white-space: nowrap; }

/* ================= HUD (bare) ================= */
.hud { position: absolute; inset: 0; }
.tl { position: absolute; left: calc(var(--l) + 8px); top: calc(var(--t) + 8px); display: flex; flex-direction: column; gap: 12px; }
.ctr { position: relative; width: 112px; height: 15px; }
.ctr .track { position: absolute; inset: 0; border-radius: 4px; background: rgba(28, 22, 14, .42); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .5), inset 0 1.5px 0 rgba(255, 255, 255, .16); overflow: hidden; }
.ctr .track i { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 3px; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .35); }
.ctr .track i::after { content: ""; position: absolute; left: 3px; right: 3px; top: 2px; height: 2.5px; border-radius: 2px; background: rgba(255, 255, 255, .45); }
.ctr .v { position: absolute; left: 20px; top: 50%; transform: translateY(-47%); font-size: 13px; }
.ctr > .ic { position: absolute; left: -12px; top: 50%; transform: translateY(-50%); width: 25px; height: 25px; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .45)); }
.ctr .max { position: absolute; right: 2px; top: -10px; font-size: 8.5px; }
.cry .track i { background: linear-gradient(#b9fff3, #3fe0c8 60%, #0f9e90); }
.mush .track i { background: linear-gradient(#ffd9a0, #f0913a 60%, #bf5c1b); }
.nrg .track i { background: linear-gradient(#fff2a8, #ffc93e 60%, #e2780f); }
.ctr.rune { width: 52px; }
.tc { position: absolute; left: 50%; top: calc(var(--t) + 4px); transform: translateX(-50%); display: flex; gap: 26px; }
.ctr.nrg { width: 92px; } .ctr.shield { width: 66px; }
.tr { position: absolute; right: var(--r); top: calc(var(--t) + 4px); display: flex; flex-direction: column; align-items: flex-end; gap: 3px; }
.tr b { font-weight: normal; font-size: 13px; } .tr span { font-size: 10px; }

/* the army's button: framed, the portrait, a status icon and what is missing */
.bl { position: absolute; left: var(--l); bottom: var(--b); display: flex; flex-direction: column; align-items: flex-start; gap: 9px; }
.units { display: flex; gap: 8px; }
.ubtn { position: relative; display: block; }
.ubtn .face { position: relative; display: block; width: 40px; height: 40px; border-radius: 8px; overflow: hidden; background: var(--btn-unit); border: 1.5px solid var(--ink);
  box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .7), inset 0 -3px 0 rgba(0, 0, 0, .12); }
.ubtn .face img { position: absolute; left: -3px; top: -2px; width: 44px; height: 44px; }
.ubtn .tm { position: absolute; left: 0; right: 0; bottom: 2px; text-align: center; font-size: 9.5px; z-index: 1; }
.ubtn .st { position: absolute; right: -7px; top: -7px; width: 19px; height: 19px; z-index: 2; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .45)); }
.ubtn .st .ic { width: 19px; height: 19px; }
.ubtn.on .face { border-color: #5a4210; box-shadow: 0 2px 0 var(--ink), 0 0 0 2px var(--gold), 0 0 10px 2px rgba(255, 210, 90, .7), inset 0 1.5px 0 rgba(255, 255, 255, .7); }

.br { position: absolute; right: var(--r); bottom: var(--b); display: flex; align-items: flex-end; gap: 8px; }
.btn { position: relative; display: block; }
.btn .face { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 1.5px solid var(--ink);
  box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .55), inset 0 0 0 2px rgba(255, 255, 255, .12), inset 0 -3px 0 rgba(0, 0, 0, .18); }
.btn.big .face { width: 58px; height: 58px; padding-bottom: 12px; border-radius: 9px; }
.btn.big .ic { width: 34px; height: 34px; filter: drop-shadow(0 1.5px 0 rgba(0, 0, 0, .35)); }
.btn.big .lab { position: absolute; left: 0; right: 0; bottom: 6px; text-align: center; font-size: 11px; }
.btn.small .face { width: 30px; height: 30px; border-radius: 7px; }
.btn.small .ic { width: 21px; height: 21px; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .35)); }
.btn.action .face { background: var(--btn-action); } .btn.nav .face { background: var(--btn-nav); } .btn.neutral .face { background: var(--stone); }
.badge { position: absolute; top: -5px; right: -5px; z-index: 2; min-width: 13px; height: 13px; padding: 0 3px; border-radius: 4px; display: grid; place-items: center; font-size: 9px;
  background: linear-gradient(#ff7d6b, #e0281c); border: 1px solid #5c0e08; box-shadow: 0 1px 0 rgba(0, 0, 0, .4); }

/* ================= windows ================= */
.dim { position: absolute; inset: 0; background: rgba(12, 10, 6, .42); }
/* a window open: the HUD steps aside, the window carries the counters it needs */
.hud:has(~ .dim) { display: none; }
.win { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -46%); padding: 24px 10px 10px; border: 2px solid var(--ink); border-radius: 12px; background: var(--stone);
  box-shadow: 0 3px 0 var(--ink), 0 10px 30px rgba(0, 0, 0, .35), inset 0 2px 0 rgba(255, 255, 255, .5), inset 0 -3px 0 rgba(0, 0, 0, .2); }
.win::before { content: ""; position: absolute; inset: 4px; border-radius: 8px; border: 1.5px solid var(--gold); opacity: .85; pointer-events: none; }
.ribbon { position: absolute; left: 50%; top: -16px; transform: translateX(-50%); height: 30px; display: flex; align-items: center; gap: 7px; padding: 0 22px 0 8px; white-space: nowrap; z-index: 2;
  border: 2px solid var(--ink); border-radius: 7px; background: var(--ribbon); box-shadow: 0 2px 0 var(--ink), inset 0 0 0 1.5px rgba(242, 195, 90, .8); }
.ribbon.plain { padding: 0 22px; }
.ribbon .n { font-size: 17px; }
.lvl { position: relative; width: 24px; height: 26px; display: grid; place-items: center; }
.lvl svg { position: absolute; inset: 0; width: 24px; height: 26px; }
.lvl .n { position: relative; font-size: 12.5px; padding-top: 1px; }
.x { position: absolute; right: -11px; top: -13px; z-index: 3; }
.x .face { width: 30px; height: 30px; display: grid; place-items: center; border-radius: 8px; border: 1.5px solid var(--ink); background: var(--btn-close); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5); }
.x .ic { width: 16px; height: 16px; }
.wres { position: absolute; top: 6px; left: 18px; display: flex; gap: 22px; }
.wres.right { left: auto; right: 30px; top: 30px; gap: 20px; }
.wres .ctr { width: 84px; height: 13px; }
.wres.right .ctr { width: 70px; }
.wres .ctr > .ic { width: 21px; height: 21px; left: -9px; }
.wres .ctr .v { font-size: 11.5px; left: 16px; }
.well { border: 2px solid var(--ink); border-radius: 8px; background: var(--well); box-shadow: inset 0 2px 0 rgba(0, 0, 0, .3); padding: 8px; }
.sep { height: 1.5px; margin: 8px 2px; background: linear-gradient(90deg, transparent, rgba(242, 195, 90, .55), transparent); }

/* small cards: what the army holds and what is being trained */
.strip { display: flex; align-items: flex-start; gap: 12px; }
.grp { display: flex; flex-direction: column; gap: 5px; }
.grp + .grp { padding-left: 12px; border-left: 1.5px solid rgba(242, 195, 90, .4); }
.ghead { display: flex; align-items: center; gap: 5px; height: 16px; }
.ghead .ic { width: 17px; height: 17px; }
.ghead .n { font-size: 12px; }
.cap { width: 74px; height: 9px; border-radius: 3px; background: rgba(0, 0, 0, .45); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .5); overflow: hidden; }
.cap i { display: block; height: 100%; background: linear-gradient(#fff2a8, #ffc93e 60%, #e2780f); }
.cap.full i { background: linear-gradient(#ffb0a0, #ff5a47 60%, #c22a20); }
.cards { display: flex; gap: 5px; }
.card { position: relative; width: 44px; height: 50px; border-radius: 7px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 1.5px 0 var(--ink), inset 0 1.5px 0 #fff; }
.card img { position: absolute; left: -4px; top: -1px; width: 52px; height: 52px; }
.card .cnt { position: absolute; left: 3px; top: 3px; font-size: 11px; z-index: 1; }
.card .pb { position: absolute; left: 0; right: 0; bottom: 0; height: 13px; background: var(--band); z-index: 1; display: grid; place-items: center; }
.card .pb i { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(#c9ff8a, #4cc93f); opacity: .85; }
.card .pb .n { position: relative; font-size: 9px; }
.card .rm { position: absolute; right: -1px; top: -1px; width: 15px; height: 15px; z-index: 2; border-radius: 4px; background: var(--btn-close); border: 1px solid var(--ink); display: grid; place-items: center; }
.card .rm .ic { width: 10px; height: 10px; }
.where { margin-left: auto; display: flex; align-items: center; gap: 4px; }
.where .ic { width: 18px; height: 18px; }
.where .n { font-size: 11px; }

/* tiles: the troops you can train */
.row { display: flex; gap: 8px; align-items: stretch; }
.tile { position: relative; width: 98px; height: 122px; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; }
.tile img { position: absolute; left: 50%; bottom: 20px; transform: translateX(-50%); width: 92px; height: 92px; }
.tile .pl { position: absolute; left: 5px; top: 5px; display: flex; align-items: center; gap: 2px; z-index: 1; }
.tile .pl .ic { width: 14px; height: 14px; }
.tile .pl .n { font-size: 11px; }
.tile .i { position: absolute; right: 4px; top: 4px; width: 18px; height: 18px; z-index: 1; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .35)); }
.tile .i .ic { width: 18px; height: 18px; }
.tile .price { position: absolute; left: 0; right: 0; bottom: 0; height: 22px; display: flex; align-items: center; justify-content: center; gap: 3px; background: var(--band); border-top: 1.5px solid var(--ink); z-index: 1; }
.tile .price .ic { width: 17px; height: 17px; }
.tile .price .n { font-size: 13px; }
.tile.short .price .n { color: var(--bad); }
.tile.off { background: var(--card-off); }
.tile.off img { filter: grayscale(1) brightness(.75); opacity: .6; }
.tile.dim { position: relative; inset: auto; z-index: auto; }   /* not the windows' backdrop, which shares the name */
.tile.dim img { filter: grayscale(.85); }
.tile .lockc { position: absolute; inset: 0 0 22px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; z-index: 1; }
.tile .lockc .ic { width: 30px; height: 30px; filter: drop-shadow(0 1.5px 0 rgba(0, 0, 0, .4)); }
.need { display: flex; align-items: center; gap: 3px; }
.need .n { font-size: 11px; }
.need .lvl { width: 18px; height: 20px; } .need .lvl svg { width: 18px; height: 20px; } .need .lvl .n { font-size: 10px; }

/* the upgrade card, at the end of the row */
.up { flex: 1; display: flex; flex-direction: column; gap: 8px; padding: 8px 10px; border-radius: 8px; border: 1.5px solid rgba(242, 195, 90, .55); background: rgba(0, 0, 0, .18); }
.up .uhead { display: flex; align-items: center; gap: 6px; }
.up .uhead .ic { width: 16px; height: 16px; }
.gains { display: flex; flex-direction: column; gap: 6px; }
.gain { display: flex; align-items: center; gap: 6px; }
.gain .ic { width: 20px; height: 20px; }
.gain .n { font-size: 12.5px; }
.gain .n.plus { color: #b6ff7a; }
.gain .mini { width: 26px; height: 26px; border-radius: 6px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); position: relative; }
.gain .mini img { position: absolute; left: -3px; top: -1px; width: 32px; height: 32px; }
.gain .mini.lockmini { display: grid; place-items: center; background: var(--card-off); }
.gain .mini.lockmini .ic { width: 16px; height: 16px; }
.go { display: block; margin-top: auto; }
.go .face { display: flex; align-items: center; justify-content: center; gap: 7px; height: 32px; padding: 0 12px; border-radius: 8px; border: 1.5px solid var(--ink); background: var(--btn-go); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5), inset 0 -3px 0 rgba(0, 0, 0, .15); }
.go .face .ic { width: 18px; height: 18px; }
.go .face .n { font-size: 14px; }
.go .face .tmc { display: flex; align-items: center; gap: 2px; font-size: 11px; opacity: .95; }
.go .face .tmc .ic { width: 13px; height: 13px; }
.prog { display: flex; flex-direction: column; gap: 6px; margin-top: auto; }
.prog .bar { height: 12px; border-radius: 4px; background: rgba(0, 0, 0, .45); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .55); overflow: hidden; }
.prog .bar i { display: block; height: 100%; background: linear-gradient(#c9ff8a, #4cc93f); }
.prog .t { display: flex; align-items: center; gap: 4px; } .prog .t .ic { width: 16px; height: 16px; } .prog .t .n { font-size: 13px; }

/* a troop's sheet */
.sheet { display: flex; gap: 12px; }
.big-port { position: relative; width: 150px; height: 176px; border-radius: 9px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; flex: none; }
.big-port img { position: absolute; left: 50%; top: 4px; transform: translateX(-50%); width: 170px; height: 170px; }
.big-port .pl { position: absolute; left: 6px; top: 6px; display: flex; align-items: center; gap: 2px; z-index: 1; }
.big-port .pl .ic { width: 16px; height: 16px; } .big-port .pl .n { font-size: 13px; }
.stats { display: flex; flex-direction: column; gap: 7px; flex: 1; }
.stat { display: flex; align-items: center; gap: 8px; height: 24px; }
.stat > .ic { width: 22px; height: 22px; }
.stat .sb { flex: 1; position: relative; height: 18px; border-radius: 5px; background: rgba(0, 0, 0, .4); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .55); overflow: hidden; }
.stat .sb i { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(#ffe6a8, #f2b23c 60%, #c97a12); }
.stat .sb b { position: absolute; top: 0; bottom: 0; background: linear-gradient(#c9ff8a, #4cc93f 60%, #2f9e2c); }
.stat .sb .n { position: absolute; left: 7px; top: 50%; transform: translateY(-46%); font-size: 12px; }
.stat .sb .n .plus { color: #b6ff7a; }
.facts { display: flex; gap: 16px; padding: 2px 2px 0; }
.fact { display: flex; align-items: center; gap: 4px; } .fact .ic { width: 17px; height: 17px; } .fact .n { font-size: 12px; }
.runes { display: flex; align-items: center; gap: 10px; margin-top: 2px; }
.sock { position: relative; width: 44px; height: 44px; border-radius: 10px; border: 1.5px solid var(--ink); background: radial-gradient(circle at 50% 40%, #4c4438, #2e2820); box-shadow: inset 0 2px 4px rgba(0, 0, 0, .55), 0 1.5px 0 rgba(255, 255, 255, .25); display: grid; place-items: center; }
.sock .ic { width: 34px; height: 34px; }
.sock.rare { box-shadow: inset 0 2px 4px rgba(0, 0, 0, .55), 0 0 0 2px #59d36b, 0 0 10px rgba(89, 211, 107, .7); }
.sock.rare .ic { filter: hue-rotate(-60deg) saturate(1.4); }
.sock .eff { position: absolute; bottom: -7px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 1px; padding: 1px 4px; border-radius: 4px; background: var(--band); border: 1px solid var(--ink); }
.sock .eff .ic { width: 11px; height: 11px; } .sock .eff .n { font-size: 9.5px; color: #b6ff7a; }
.sock.empty::after { content: "+"; font-family: "Lilita"; font-size: 22px; color: rgba(255, 255, 255, .35); }
.sock.locked { background: radial-gradient(circle at 50% 40%, #3c362d, #26211b); }
.sock.locked .ic { width: 20px; height: 20px; opacity: .9; }
.sock .tier { position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); }

/* the upgrade window */
.lvlswap { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 4px 0 10px; }
.lvlswap .lvl { width: 40px; height: 44px; } .lvlswap .lvl svg { width: 40px; height: 44px; } .lvlswap .lvl .n { font-size: 20px; }
.lvlswap .arrow { width: 28px; height: 28px; }
.cmp { display: flex; flex-direction: column; gap: 8px; }
.cmpr { display: flex; align-items: center; gap: 8px; height: 30px; padding: 0 10px; border-radius: 7px; background: rgba(0, 0, 0, .2); }
.cmpr > .ic { width: 22px; height: 22px; }
.cmpr .n { font-size: 14px; }
.cmpr .ic.arrow { width: 16px; height: 16px; }
.cmpr .n.plus { color: #b6ff7a; }
.cmpr .new { display: flex; align-items: center; gap: 6px; }
.cmpr .new .mini { width: 26px; height: 26px; border-radius: 6px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); position: relative; }
.cmpr .new .mini img { position: absolute; left: -3px; top: -1px; width: 32px; height: 32px; }
.foot { display: flex; justify-content: center; margin-top: 12px; }
.foot .go .face { height: 36px; padding: 0 18px; }

/* ================= tapping a building: its name over it and its actions at the bottom (option A) ================= */
.bl.hide, .hud:has(.bl.hide) .br { display: none; }
.selring { position: absolute; width: 124px; height: 58px; transform: translate(-50%, -50%); border-radius: 50%; border: 2px solid rgba(255, 246, 214, .9); box-shadow: 0 0 10px rgba(255, 235, 170, .8), inset 0 0 10px rgba(255, 235, 170, .6); }
.selname { position: absolute; transform: translate(-50%, -100%); display: flex; align-items: center; gap: 5px; }
.selname .n { font-size: 15px; }
.seltimer { position: absolute; transform: translate(-50%, -100%); display: flex; align-items: center; gap: 4px; }
.seltimer .ic { width: 16px; height: 16px; } .seltimer .n { font-size: 12px; }
.seltimer i { display: block; width: 56px; height: 7px; border-radius: 3px; background: rgba(28, 22, 14, .55); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .6); overflow: hidden; }
.seltimer i b { display: block; height: 100%; background: linear-gradient(#c9ff8a, #4cc93f); }
.acts { position: absolute; left: 50%; bottom: var(--b); transform: translateX(-50%); display: flex; gap: 10px; }
.act { display: block; }
.act .face { position: relative; display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; padding-bottom: 12px; border-radius: 9px; border: 1.5px solid var(--ink); background: var(--stone);
  box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .55), inset 0 -3px 0 rgba(0, 0, 0, .18); }
.act.main .face { background: var(--btn-action); }
.act.stop .face { background: var(--btn-close); }
.act .face > .ic { width: 28px; height: 28px; filter: drop-shadow(0 1.5px 0 rgba(0, 0, 0, .35)); }
.act .lab { position: absolute; left: 0; right: 0; bottom: 5px; display: flex; align-items: center; justify-content: center; gap: 1px; font-size: 10px; }
.act .lab .ic { width: 13px; height: 13px; }
.ic.up-arrow { transform: rotate(-90deg); }
.cmpr .mini.off img { filter: grayscale(1) brightness(.8); }

/* ================= option B: one window, tabs along its top edge ================= */
.win.tabbed { padding-top: 44px; }
.tabs { position: absolute; left: 14px; top: 20px; display: flex; gap: 6px; }
.tab { display: grid; place-items: center; width: 44px; height: 26px; border-radius: 7px 7px 0 0; border: 1.5px solid var(--ink); border-bottom: 0; background: var(--card-off); }
.tab .ic { width: 18px; height: 18px; }
.tab.on { background: var(--well); height: 30px; margin-top: -4px; box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, .25); }

.cmpr .new > .ic { width: 18px; height: 18px; }
.cmpr .new .lvl { width: 20px; height: 22px; } .cmpr .new .lvl svg { width: 20px; height: 22px; } .cmpr .new .lvl .n { font-size: 11px; }

/* ================= selecting and moving a building (validated option A) ================= */
/* selected: the building glows (in the scene); its name and level float over it, like Clash's */
.bname { position: absolute; transform: translate(-50%, -100%); display: flex; align-items: center; gap: 5px; }
.bname .n { font-size: 15px; }
/* moving: the footprint on the ground and four arrows, drawn in the scene's own perspective */
svg.ground { position: absolute; inset: 0; overflow: visible; pointer-events: none; }
.foot { stroke-width: 1.6; stroke-linejoin: round; }
.foot.ok { fill: rgba(96, 226, 92, .38); stroke: rgba(214, 255, 196, .95); }
.foot.bad { fill: rgba(240, 72, 52, .42); stroke: rgba(255, 196, 184, .95); }
.cell { fill: none; stroke: rgba(255, 255, 255, .22); stroke-width: .8; }
.cell.ok { fill: rgba(96, 226, 92, .34); stroke: rgba(214, 255, 196, .9); stroke-width: 1; }
.arr { stroke: rgba(255, 255, 255, .92); stroke-width: 4; stroke-linecap: round; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .45)); }
.arr-head { fill: rgba(255, 255, 255, .95); stroke: rgba(29, 20, 9, .55); stroke-width: 1; stroke-linejoin: round; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .45)); }
/* placing something new: confirm or cancel over it */
.confirm { position: absolute; transform: translate(-50%, -100%); display: flex; gap: 10px; }
.cbtn .face { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 8px; border: 1.5px solid var(--ink); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5), inset 0 -3px 0 rgba(0, 0, 0, .15); }
.cbtn .ic { width: 18px; height: 18px; }
.cbtn.yes .face { background: var(--btn-go); }
.cbtn.no .face { background: var(--btn-close); }
.cbtn.off .face { filter: grayscale(1) brightness(.8); }

/* ================= the shop ================= */
.srow { display: flex; gap: 8px; }
.stile { position: relative; width: 108px; height: 150px; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; display: flex; flex-direction: column; align-items: center; }
.stile .sname { position: relative; z-index: 1; margin-top: 7px; font-size: 12px; white-space: nowrap; }
.stile .i { position: absolute; right: 4px; top: 22px; width: 17px; height: 17px; z-index: 1; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .35)); }
.stile .i .ic { width: 17px; height: 17px; }
.stile .sill { position: absolute; left: 50%; top: 32px; transform: translateX(-50%); width: 70px; height: 70px; filter: drop-shadow(0 3px 0 rgba(0, 0, 0, .25)); }
.stile .sill .ic { width: 70px; height: 70px; }
.stile .sbuilt { position: absolute; right: 6px; bottom: 28px; font-size: 12px; z-index: 1; }
.stile .price { position: absolute; left: 0; right: 0; bottom: 0; height: 23px; display: flex; align-items: center; justify-content: space-between; padding: 0 6px 0 4px; background: var(--band); border-top: 1.5px solid var(--ink); }
.stile .price > .n { display: flex; align-items: center; gap: 2px; font-size: 12.5px; }
.stile .price .ic { width: 16px; height: 16px; }
.stile .price .tm { font-size: 10px; gap: 1px; } .stile .price .tm .ic { width: 12px; height: 12px; }
.stile.short .price > .n:first-child { color: var(--bad); }
.stile.max { background: var(--card-off); } .stile.max .sill { filter: grayscale(.9) brightness(.85); opacity: .75; }
.stile.max .sbuilt { color: #ffd36a; }
.stile.off { background: var(--card-off); } .stile.off .sill { filter: grayscale(1) brightness(.6); opacity: .5; }
.stile .slock { position: absolute; left: 0; right: 0; top: 40px; display: flex; flex-direction: column; align-items: center; gap: 4px; z-index: 1; }
.stile .slock > .ic { width: 28px; height: 28px; filter: drop-shadow(0 1.5px 0 rgba(0, 0, 0, .4)); }
.ic.mini-house { width: 18px; height: 18px; }
.cprice { display: flex; align-items: center; gap: 2px; font-size: 13px; align-self: center; }
.cprice .ic { width: 16px; height: 16px; }
.confirm { align-items: center; }
.seltimer.site i { width: 64px; }
.shop .wres.right { top: 4px; right: 34px; }
.confirm.below { transform: translate(-50%, 0); }

/* ================= the raid ================= */
.rloot { position: absolute; left: calc(var(--l) + 6px); top: calc(var(--t) + 6px); display: flex; flex-direction: column; gap: 5px; }
.rloot .lrow { display: flex; align-items: center; gap: 4px; }
.rloot .ic { width: 22px; height: 22px; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .45)); }
.rloot .big { font-size: 15px; } .rloot .of { font-size: 11px; color: #e9e1cd; }
.rwho { position: absolute; left: 50%; top: calc(var(--t) + 6px); transform: translateX(-50%); display: flex; align-items: center; gap: 5px; }
.rwho .n { font-size: 14px; }
.rclock { position: absolute; right: var(--r); top: calc(var(--t) + 6px); display: flex; align-items: center; gap: 4px; }
.rclock .ic { width: 20px; height: 20px; } .rclock .n { font-size: 16px; }
.rretreat { position: absolute; right: var(--r); top: calc(var(--t) + 32px); }
.rretreat .face { display: flex; align-items: center; gap: 4px; height: 26px; padding: 0 9px 0 6px; border-radius: 7px; border: 1.5px solid var(--ink); background: var(--btn-close); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5), inset 0 -3px 0 rgba(0, 0, 0, .15); }
.rretreat .ic { width: 17px; height: 17px; } .rretreat .n { font-size: 12px; }
.deck { position: absolute; left: var(--l); bottom: var(--b); display: flex; gap: 6px; }
.dcard { position: relative; width: 48px; height: 58px; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 #fff; transition: transform .1s; }
.dcard img { position: absolute; left: -6px; top: 0; width: 60px; height: 60px; }
.dcard .cnt { position: absolute; left: 4px; top: 3px; font-size: 12px; z-index: 1; }
.dcard.sel { transform: translateY(-5px); box-shadow: 0 2px 0 var(--ink), 0 0 0 2px var(--gold), 0 0 10px 2px rgba(255, 210, 90, .7), inset 0 1.5px 0 #fff; }
.dcard.empty { filter: grayscale(1) brightness(.75); }
.lootpop { position: absolute; transform: translate(-50%, -100%); display: flex; flex-direction: column; align-items: center; gap: 2px; }
.lootpop .n { display: flex; align-items: center; gap: 2px; font-size: 14px; }
.lootpop .ic { width: 18px; height: 18px; }
/* the end of the raid */
.eres { display: flex; flex-direction: column; gap: 8px; }
.erow { display: flex; align-items: center; gap: 10px; min-height: 40px; padding: 4px 10px; border-radius: 7px; background: rgba(0, 0, 0, .2); }
.elab { width: 24px; height: 24px; display: grid; place-items: center; flex: none; } .elab .ic { width: 24px; height: 24px; }
.eitems { display: flex; align-items: center; gap: 12px; }
.efell { position: relative; width: 32px; height: 32px; } .efell > .ic { width: 32px; height: 32px; }
.efell .tick { position: absolute; right: -6px; bottom: -4px; width: 16px; height: 16px; }
.efell.off > .ic { filter: grayscale(1) brightness(.7); opacity: .55; }
.eloot { display: flex; align-items: center; gap: 3px; } .eloot .ic { width: 24px; height: 24px; } .eloot .n { font-size: 17px; color: #b6ff7a; }
.erune { position: relative; display: flex; align-items: center; gap: 4px; padding: 2px 7px 2px 3px; border-radius: 8px; box-shadow: 0 0 0 2px #59d36b, 0 0 10px rgba(89, 211, 107, .6); background: rgba(0, 0, 0, .25); }
.erune .ic { width: 26px; height: 26px; filter: hue-rotate(-60deg) saturate(1.4); } .erune .tag { font-size: 11px; color: #9dff9a; }
.elost { display: flex; align-items: center; gap: 4px; }
.elost .lp { position: relative; width: 34px; height: 34px; border-radius: 7px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--card); }
.elost img { position: absolute; left: -4px; top: -2px; width: 42px; height: 42px; }
.elost .n { font-size: 16px; color: #ff9a88; }
.efell .cnt { position: absolute; left: -4px; top: -6px; font-size: 11px; }
.ehome { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 10px; }
.ehome > .ic { width: 22px; height: 22px; } .ehome .n { display: flex; align-items: center; gap: 3px; font-size: 14px; } .ehome .n .ic { width: 16px; height: 16px; }

/* ================= coming back: the absence report and the journal ================= */
.jlist { display: flex; flex-direction: column; gap: 6px; }
.jrow { display: flex; align-items: center; gap: 10px; min-height: 42px; padding: 4px 8px 4px 6px; border-radius: 7px; background: rgba(0, 0, 0, .2); }
.jrow.hit { background: rgba(190, 50, 34, .3); box-shadow: inset 0 0 0 1px rgba(255, 120, 100, .35); }
.jrow .lead { width: 34px; height: 34px; display: grid; place-items: center; flex: none; }
.jrow .lead > .ic { width: 26px; height: 26px; }
.jrow .body { flex: 1; display: flex; align-items: center; gap: 12px; flex-wrap: nowrap; }
.hd { position: relative; display: block; width: 34px; height: 34px; border-radius: 7px; overflow: hidden; border: 1.5px solid var(--ink); background: var(--btn-unit); }
.hd img { position: absolute; left: -3px; top: -2px; width: 38px; height: 38px; }
.who { display: flex; align-items: center; gap: 4px; font-size: 12px; }
.who .lvl { width: 18px; height: 20px; } .who .lvl svg { width: 18px; height: 20px; } .who .lvl .n { font-size: 10px; }
.ic.tiny { width: 14px; height: 14px; display: inline-block; vertical-align: -2px; }
.amt { display: flex; align-items: center; gap: 2px; } .amt .ic { width: 19px; height: 19px; } .amt .n { font-size: 14px; }
.amt.good .n { color: #b6ff7a; } .amt.bad .n { color: #ff9a88; }
.fell { position: relative; display: flex; align-items: center; gap: 2px; } .fell .ic { width: 22px; height: 22px; } .fell .n { font-size: 11px; color: #ff9a88; }
.rare { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 6px; box-shadow: 0 0 0 2px #59d36b, 0 0 8px rgba(89, 211, 107, .6); }
.rare .ic { width: 20px; height: 20px; filter: hue-rotate(-60deg) saturate(1.4); }
.ic.gem { width: 26px; height: 26px; }
.held { display: flex; align-items: center; gap: 3px; font-size: 12px; color: #b6ff7a; }
.ago { font-size: 10.5px; color: #e9e1cd; white-space: nowrap; flex: none; }
.rb .face { display: flex; align-items: center; gap: 4px; height: 28px; padding: 0 9px 0 6px; border-radius: 7px; border: 1.5px solid var(--ink); box-shadow: 0 2px 0 var(--ink), inset 0 1.5px 0 rgba(255, 255, 255, .5), inset 0 -3px 0 rgba(0, 0, 0, .15); }
.rb .face .ic { width: 16px; height: 16px; } .rb .face .n { font-size: 11.5px; }
.rb.action .face { background: var(--btn-action); } .rb.neutral .face { background: var(--stone); }
.win.tabbed .tabs { top: 18px; }
/* ================= the other buildings ================= */
.bport { display: grid; place-items: center; } .bport .ic { width: 120px; height: 120px; filter: drop-shadow(0 4px 0 rgba(0, 0, 0, .25)); }
.gbar { flex: 1; position: relative; height: 18px; border-radius: 5px; background: rgba(0, 0, 0, .4); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .55); overflow: hidden; }
.gbar i { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(#b9fff3, #3fe0c8 60%, #0f9e90); }
.gbar .n { position: absolute; left: 8px; top: 50%; transform: translateY(-46%); font-size: 12px; }
.cmpr .new > .ic { width: 24px; height: 24px; }
/* the build timer, Clash's way: the time over a centred bar */
.seltimer { flex-direction: column; align-items: center; gap: 3px; }
.seltimer .n { display: flex; align-items: center; gap: 3px; font-size: 13px; }
.seltimer .n .ic { width: 15px; height: 15px; }
.seltimer i, .seltimer.site i { width: 70px; height: 9px; border-radius: 4px; background: rgba(28, 22, 14, .6); box-shadow: inset 0 0 0 1.2px rgba(0, 0, 0, .7), 0 1px 0 rgba(255, 255, 255, .2); }
.seltimer i b { border-radius: 3px; box-shadow: inset 0 2px 0 rgba(255, 255, 255, .45); }
/* shop pictures */
.stile .sill img { width: 84px; height: 84px; object-fit: contain; object-position: center bottom; margin: -8px 0 0 -7px; filter: drop-shadow(0 3px 2px rgba(0, 0, 0, .25)); }
.stile .ph .ic { filter: grayscale(1) brightness(1.5) contrast(.6); opacity: .35; }
/* a tap in the no-deployment zone: nothing is placed, a cross where the finger was */
.notap { position: absolute; transform: translate(-50%, -50%); width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: rgba(236, 64, 46, .85); border: 2px solid #fff; box-shadow: 0 0 10px rgba(255, 80, 60, .8); }
.notap .ic { width: 16px; height: 16px; }
.ctr.builders { width: 58px; }

/* ================= the war map ================= */
.mname { position: absolute; transform: translateX(-50%); display: flex; align-items: center; gap: 4px; white-space: nowrap; }
.mname .n { font-size: 12.5px; }
.mname .lvl { width: 20px; height: 22px; } .mname .lvl svg { width: 20px; height: 22px; } .mname .lvl .n { font-size: 10.5px; }
.mscale { position: absolute; right: calc(var(--r) + 50px); bottom: calc(var(--b) + 6px); display: flex; align-items: center; gap: 6px; }
.mscale i { display: block; width: 46px; height: 5px; border-radius: 2px; background: #fff; box-shadow: 0 0 0 1.2px var(--text-ink), 0 1.5px 0 1.2px var(--text-ink); }
.mscale .n { display: flex; align-items: center; gap: 2px; font-size: 11px; } .mscale .ic { width: 13px; height: 13px; }
/* the selected flag stands on the validated plate: a gold-edged ellipse on the ground at its foot */
.mring { position: absolute; width: 30px; height: 22px; transform: translate(-50%, -50%); border-radius: 50%; background: rgba(240, 230, 204, .55);
  box-shadow: 0 0 0 2px #f2c35a, 0 0 0 3.5px var(--ink), inset 0 0 0 1px rgba(242, 195, 90, .7), 0 0 10px 2px rgba(255, 220, 120, .6); }
.mring.small { width: 24px; height: 17px; }
.mring.big { width: 74px; height: 30px; transform: translate(-50%, -38%); }
/* bubbles: Clash's collector bubble, the action's icon, the energy it costs */
.mbub { position: absolute; transform: translate(-50%, -100%); padding-bottom: 7px; }
.mbub .bb { position: relative; display: flex; align-items: center; justify-content: center; gap: 3px; min-width: 30px; height: 30px; padding: 0 4px; border-radius: 8px;
  background: linear-gradient(#fffdf6, #e9e1cd); border: 1.5px solid var(--ink); box-shadow: 0 2px 0 var(--ink); }
.mbub .bb::after { content: ""; position: absolute; left: 50%; bottom: -7px; width: 9px; height: 9px; transform: translateX(-50%) rotate(45deg); background: #e9e1cd; border-right: 1.5px solid var(--ink); border-bottom: 1.5px solid var(--ink); z-index: -1; }
.mbub .bb .ic { width: 21px; height: 21px; }
.mbub .cost { position: absolute; left: 50%; top: calc(100% - 3px); transform: translateX(-50%); display: flex; align-items: center; gap: 0; font-size: 10px; white-space: nowrap; }
.mbub .cost .ic { width: 12px; height: 12px; }
.mbub.raid .bb { background: linear-gradient(#ff9a88, #ee4a37 50%, #c22a20); padding: 0 8px 0 5px; }
.mbub.raid .bb::after { background: #d0372a; }
.mbub.raid .w { font-size: 13px; }
.mbub .cost { top: auto; bottom: -11px; }
/* the marks of the world view seen from afar (05/11): smaller, not touchable, the brigands' in red */
.mbub.mark { pointer-events: none; transform: translate(-50%, -100%) scale(.78); transform-origin: 50% 100%; }
.mbub.mark.foe .bb { background: linear-gradient(#ffb3a6, #e8695a); }
.mbub.mark.foe .bb::after { background: #e8695a; }
/* routes and their times */
svg.mroute { position: absolute; inset: 0; pointer-events: none; overflow: visible; }
svg.mroute circle { fill: #fff; stroke: rgba(29, 20, 9, .55); stroke-width: 1; }
svg.mroute.enemy circle { fill: #ff8f7f; stroke: rgba(90, 12, 6, .8); }
.meta { position: absolute; transform: translate(-50%, -100%); display: flex; align-items: center; gap: 3px; }
.meta .ic { width: 15px; height: 15px; } .meta .n { font-size: 13px; }
.meta.enemy { padding: 2px 8px 2px 4px; border-radius: 7px; border: 1.5px solid #4a0c06; background: linear-gradient(#e86a55, #bf3a2c 55%, #8f2419); box-shadow: 0 2px 0 var(--ink), 0 0 10px rgba(255, 80, 60, .6); }
.mcamp { position: absolute; transform: translateY(-50%); display: flex; align-items: center; gap: 3px; }
.mcamp .ic { width: 16px; height: 16px; } .mcamp .n { font-size: 12px; }
.mname.sel .n { font-size: 15px; } .mname.sel .lvl { width: 24px; height: 26px; } .mname.sel .lvl svg { width: 24px; height: 26px; } .mname.sel .lvl .n { font-size: 12.5px; }

/* ================= the short loop (05/11) ================= */
/* an action that cannot be done now: still touchable, it says why */
.act.off .face { filter: grayscale(.85) brightness(.9); }
/* the ladder in the HUD: the rank, the trophies, the time left in the game */
.ctr.rank { width: 50px; } .ctr.troph { width: 66px; } .ctr.end { width: 74px; }
/* a rune's colour is its rarity (the stone of the typed glyphs, ui/hud.ts) */
.r0 { --rc: #dcd6ca; } .r1 { --rc: #66b8ff; } .r2 { --rc: #c08bff; } .r3 { --rc: #ffbf3a; }
/* the war map's labels (05/11, GDD \xAB La carte de guerre \xBB): the name bare, then the rank, the trophies and the crystal
   to take, as icons and short numbers */
.mvil { position: absolute; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 2px; white-space: nowrap; pointer-events: none; }
.mvil .nm { font-size: 12.5px; }
.mvil.me .nm { color: #ffe08a; }
.mvil .st { display: flex; align-items: center; gap: 6px; }
.mvil .st > span { display: flex; align-items: center; gap: 1px; font-size: 10.5px; }
.mvil .st .ic { width: 14px; height: 14px; filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .45)); }
.mvil.sel .nm { font-size: 15px; } .mvil.sel .st > span { font-size: 12px; } .mvil.sel .st .ic { width: 16px; height: 16px; }
.mvil.locked .nm { opacity: .75; }
.mvil .busy .ic { width: 13px; height: 13px; }
.mtent { position: absolute; transform: translate(-50%, -100%); display: flex; flex-direction: column; align-items: center; pointer-events: none; }
.mtent .ic { width: 20px; height: 20px; filter: drop-shadow(0 1.5px 0 rgba(0, 0, 0, .45)); }
.mtent.moyen .ic { width: 24px; height: 24px; } .mtent.difficile .ic { width: 28px; height: 28px; }
.mtent .pips { display: flex; gap: 2px; margin-top: 1px; }
.mtent .pips i { width: 6px; height: 6px; border-radius: 50%; background: #ff8f7f; box-shadow: 0 0 0 1.2px var(--text-ink); }
.mtent.sel .ic { filter: drop-shadow(0 0 6px rgba(255, 220, 120, .95)); }
/* the ladder's window: each place, its village, its trophies, what it is paid */
.lad { display: flex; flex-direction: column; gap: 4px; max-height: min(230px, calc(54 * var(--vh, 1vh))); overflow: auto; -webkit-overflow-scrolling: touch; }
.lrow2 { display: flex; align-items: center; gap: 8px; min-height: 28px; padding: 2px 8px; border-radius: 6px; background: rgba(0, 0, 0, .2); }
.lrow2.me { background: rgba(242, 195, 90, .3); box-shadow: inset 0 0 0 1px rgba(242, 195, 90, .7); }
.lrow2 .pl { width: 26px; font-size: 13px; text-align: right; }
.lrow2 .who { flex: 1; font-size: 12.5px; overflow: hidden; text-overflow: ellipsis; }
.lrow2 .tr2, .lrow2 .pay { display: flex; align-items: center; gap: 2px; font-size: 12px; }
.lrow2 .pay { width: 64px; justify-content: flex-end; }
.lrow2 .ic { width: 16px; height: 16px; }
.ladhead { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 6px; font-size: 12px; }
.ladhead .ic { width: 18px; height: 18px; }
/* the forge (05/11): each troop, its level, the next, its price; a troop's level on its card and tile */
.flist { display: flex; flex-direction: column; gap: 6px; max-height: min(240px, calc(56 * var(--vh, 1vh))); overflow: auto; }
.frow { display: flex; align-items: center; gap: 8px; min-height: 52px; padding: 3px 8px 3px 4px; border-radius: 7px; background: rgba(0, 0, 0, .2); }
.frow .card { flex: none; }
.frow .fname { width: 74px; font-size: 13px; }
.frow .lvl { width: 22px; height: 24px; } .frow .lvl svg { width: 22px; height: 24px; } .frow .lvl .n { font-size: 11px; }
.frow .ic.arrow { width: 14px; height: 14px; }
.frow .fplus { display: flex; align-items: center; gap: 2px; min-width: 70px; font-size: 11.5px; }
.frow .fact2 { margin-left: auto; display: flex; align-items: center; }
.frow .fbar { display: flex; flex-direction: column; align-items: center; gap: 3px; }
.frow .fbar .n { display: flex; align-items: center; gap: 3px; font-size: 13px; } .frow .fbar .ic { width: 15px; height: 15px; }
.frow .fbar i { position: relative; display: block; width: 90px; height: 9px; border-radius: 4px; background: rgba(28, 22, 14, .6); box-shadow: inset 0 0 0 1.2px rgba(0, 0, 0, .7); overflow: hidden; }
.frow .fbar i b { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(#c9ff8a, #4cc93f); }
.rb.off { filter: grayscale(.8) brightness(.9); }
.tlv { position: absolute; right: 1px; bottom: 1px; z-index: 2; }
.tlv .lvl { width: 16px; height: 18px; } .tlv .lvl svg { width: 16px; height: 18px; } .tlv .lvl .n { font-size: 9px; }
.tile .tlv { right: 4px; bottom: 26px; }
`;var Xl=`/* A game page in the validated interface (direction A, GDD 04/11): what every page needs around the theme's
   components (game/src/ui/menus.css), injected after them by ui/theme.ts. The page's own sheet keeps only what is
   its own (its canvases, its special screens). Sizes are iPhone points. */
html, body { height: 100%; margin: 0; overflow: hidden; }
body { position: relative; color: #fff; font-family: "Lilita", "Arial Rounded MT Bold", system-ui, sans-serif;
  -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent;
  --l: max(16px, env(safe-area-inset-left, 0px)); --r: max(16px, env(safe-area-inset-right, 0px));
  --t: max(6px, env(safe-area-inset-top, 0px)); --b: max(10px, env(safe-area-inset-bottom, 0px)); }
button { cursor: pointer; }
[hidden] { display: none !important; }
button:focus-visible { outline: 3px solid #f2c35a; outline-offset: 3px; }
/* what floats over the world lets the touches through to it, except the buttons */
.hud, .hud > div, .hud .units, .bname, .notap, .mname, .mvil, .mtent, .seltimer { pointer-events: none; }
.hud button, .acts, .mbub, .confirm { pointer-events: auto; }
.dim, .win { position: fixed; z-index: 5; }
.mbub, .confirm { position: fixed; z-index: 2; }
.bname, .seltimer { position: fixed; z-index: 1; }
.hud .tr { flex-direction: row; align-items: center; gap: 8px; }
.hud .tr #version { font-size: 9px; opacity: .85; align-self: flex-end; }
.hud .tr .badge { min-width: 18px; top: -6px; right: -9px; }
/* a window open hides the selection and the bubbles */
body.winopen .acts, body.winopen .bname, body.winopen .mbub, body.winopen .confirm, body.winopen .seltimer { display: none; }
/* a message: a short dark stone plate under the top counters */
#toast { position: fixed; left: 50%; top: calc(var(--t) + 34px); transform: translateX(-50%); z-index: 6; max-width: min(420px, calc(60 * var(--vw, 1vw))); padding: 6px 12px 7px; border-radius: 8px;
  background: rgba(38, 33, 27, .82); box-shadow: 0 2px 0 rgba(0, 0, 0, .35), inset 0 0 0 1px rgba(242, 195, 90, .45);
  font: 600 12.5px/1.3 "Fredoka", system-ui, sans-serif; color: #f6efe0; text-align: center; pointer-events: none; }
body.winopen #toast { top: calc(var(--t) + 4px); }
@media (orientation: portrait) { html:not(.rot) #toast { top: calc(var(--t) + 120px); max-width: 82vw; } }
/* the windows' writing, under the theme's lines */
.jrow .txt { flex: 1; font: 600 12px/1.3 "Fredoka", system-ui, sans-serif; color: #f6efe0; white-space: normal; }
.jlist { max-height: min(220px, calc(52 * var(--vh, 1vh))); overflow: auto; -webkit-overflow-scrolling: touch; }
.win p.say { font: 600 12.5px/1.35 "Fredoka", system-ui, sans-serif; color: #f6efe0; text-align: center; margin: 2px 6px 4px; }
.cmpr .n.soft { display: flex; align-items: center; gap: 2px; margin-left: auto; opacity: .8; font-size: 12px; }
.card.none { background: var(--card-off); opacity: .45; }
.tile, .stile { cursor: pointer; }
.big-port.pic img { object-fit: contain; width: 140px; height: 150px; top: 12px; }
.gbar.mush i { background: linear-gradient(#ffd9a0, #f0913a 60%, #bf5c1b); }
/* the theme's small buttons in their other colours, and a pressed action */
.rb.go .face { background: var(--btn-go); } .rb.nav .face { background: var(--btn-nav); }
.rb:disabled { filter: grayscale(.8) brightness(.9); }
.act.on .face { box-shadow: 0 2px 0 var(--ink), 0 0 0 2px var(--gold), 0 0 10px 2px rgba(255, 210, 90, .7), inset 0 1.5px 0 rgba(255, 255, 255, .55); }
/* a phone held upright: the windows keep inside the screen, the shop's tiles go on several rows */
.win { max-width: calc(100 * var(--vw, 1vw) - 28px); }
.srow { flex-wrap: wrap; justify-content: center; }
`;var Ql="./assets/lilita-BW72GA3X.woff2";var Zl="./assets/fredoka-3UPZTCSC.woff2";var zl="./assets/soldat-VD7AFEPS.webp";var Yl="./assets/archere-FKKFB2P7.webp";var jl="./assets/recolteur-33TAN3DD.webp";var Gl="./assets/soldat-tete-AGMCDKZK.webp";var Kl="./assets/colosse-JB5EJSFW.webp";var Wl="./assets/recolteur-tete-7BNM6UJ6.webp";var ql="./assets/pillard-333ZQL3C.webp";var Da={soldat:zl,archere:Yl,recolteur:jl,veteran:Kl,pillard:ql,"soldat-tete":Gl,"recolteur-tete":Wl},Bt="#2a1709",ec=3.6,Q=(i=ec)=>`stroke="${Bt}" stroke-width="${i}" stroke-linejoin="round" stroke-linecap="round"`,Fe=(i,t,e='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${i}" ${e}>${t.map(([n,o])=>`<stop offset="${n}" stop-color="${o}"/>`).join("")}</linearGradient>`,td=[Fe("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),Fe("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',Fe("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',Fe("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),Fe("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),Fe("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),Fe("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),Fe("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),Fe("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),Fe("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),Fe("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),Fe("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),Fe("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),Fe("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),Fe("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),Fe("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),xa=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${Q()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${Q()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${Q(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${Q(3)}/>`,Ci=`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="var(--rc, #cfd5e2)" ${Q()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".5"/>
    <path d="M16 58 L50 56 L58 30 L52 32 L46 50 L18 52 Z" fill="#000" opacity=".16"/>`,ed={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${Q()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${Q()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${Q()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${Bt}" stroke-width="${ec}" stroke-linecap="round"/>`,trophy:`
    <path d="M18 8 L46 8 L46 22 C46 32 40 38 32 39 C24 38 18 32 18 22 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="${Bt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="${Bt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <rect x="28" y="38" width="8" height="10" fill="url(#h-gold)" ${Q(3)}/>
    <rect x="18" y="47" width="28" height="10" rx="3" fill="url(#h-wood)" ${Q()}/>
    <path d="M24 13 L24 24 C24 28 26 31 29 33" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".75"/>`,rank:`
    <rect x="22" y="22" width="20" height="36" rx="2" fill="url(#h-gold)" ${Q()}/>
    <rect x="4" y="34" width="18" height="24" rx="2" fill="url(#h-steel)" ${Q()}/>
    <rect x="42" y="42" width="18" height="16" rx="2" fill="url(#h-wood)" ${Q()}/>
    <path d="M32 4 L35 10 L42 11 L37 16 L38 22 L32 19 L26 22 L27 16 L22 11 L29 10 Z" fill="url(#h-gold)" ${Q(2.6)}/>
    <path d="M26 27 L26 52" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".6"/>`,countdown:`
    <circle cx="32" cy="35" r="24" fill="url(#h-white)" ${Q()}/>
    <path d="M32 35 L32 15 A20 20 0 0 1 51 41 Z" fill="url(#h-red)" opacity=".85"/>
    <circle cx="32" cy="35" r="24" fill="none" ${Q()}/>
    <path d="M32 21 L32 35 L22 41" fill="none" ${Q()}/>
    <rect x="26" y="3" width="12" height="7" rx="3" fill="url(#h-gold)" ${Q(2.5)}/>
    <path d="M50 10 L56 16" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/>`,forge:`
    <path d="M6 26 L32 8 L58 26 L52 29 L32 16 L12 29 Z" fill="url(#h-roof)" ${Q()}/>
    <path d="M12 28 L12 56 M52 28 L52 56" stroke="${Bt}" stroke-width="7"/><path d="M12 29 L12 55 M52 29 L52 55" stroke="url(#h-wood-x)" stroke-width="3"/>
    <circle cx="32" cy="36" r="10" fill="url(#h-gold-glow)"/>
    <path d="M18 40 L46 40 L42 46 L36 46 L38 54 L26 54 L28 46 L22 46 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M44 40 L54 40 L48 44 L44 44 Z" fill="url(#h-steel)" ${Q(2.6)}/>
    <path d="M22 41 L34 41" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`,reserve:`
    <path d="M18 14 L30 6 L36 12 L46 8 L50 20 L42 26 L22 26 Z" fill="url(#h-cry)" ${Q()}/>
    <path d="M29 8 L31 22 L26 22 Z" fill="#fff" opacity=".7"/>
    <path d="M6 22 L32 12 L58 22 L58 46 L32 58 L6 46 Z" fill="url(#h-white)" ${Q()}/>
    <path d="M6 22 L32 32 L58 22 L32 12 Z" fill="url(#h-cry)" ${Q()}/>
    <path d="M14 22 L32 16 L44 20" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M32 32 L32 58" stroke="${Bt}" stroke-width="3.2"/>
    <path d="M6 34 L32 44 L58 34" stroke="#a89f8c" stroke-width="2.2" fill="none"/>
    <path d="M6 22 L6 46 M32 32 L32 58 M58 22 L58 46" stroke="${Bt}" stroke-width="8"/>
    <path d="M6 23 L6 45 M32 33 L32 57 M58 23 L58 45" stroke="#5a5560" stroke-width="4"/>`,sanctuaire:`
    <ellipse cx="32" cy="50" rx="28" ry="10" fill="url(#h-white)" ${Q()}/>
    <circle cx="32" cy="34" r="22" fill="url(#h-cry-glow)"/>
    <path d="M17 42 L18 22 L23 19 L27 23 L26 42 Z" fill="url(#h-steel)" ${Q(2.8)}/>
    <path d="M37 42 L37 23 L41 19 L46 22 L47 42 Z" fill="url(#h-steel)" ${Q(2.8)}/>
    <path d="M24 49 L25 16 L32 6 L39 16 L40 49 Z" fill="url(#h-cry)" ${Q()}/>
    <path d="M32 18 L32 40 M27 24 L32 29 L37 24 M28 36 L32 40 L36 36" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
    <path d="M4 52 L6 30 L12 27 L16 31 L15 54 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M48 54 L48 31 L53 27 L58 30 L60 52 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M8 33 L11 30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`,"rune-soldat":`${Ci}<g transform="translate(32 33) scale(.42) rotate(38) translate(-32 -32)">${xa}</g>`,"rune-archere":`${Ci}
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="url(#h-wood-x)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M22 16 L22 50" stroke="${Bt}" stroke-width="1.6"/>
    <path d="M18 33 L44 33" stroke="${Bt}" stroke-width="3.2" stroke-linecap="round"/><path d="M44 33 L38 29 M44 33 L38 37" stroke="${Bt}" stroke-width="3" stroke-linecap="round"/>`,"rune-veteran":`${Ci}
    <path d="M28 26 L40 48" stroke="${Bt}" stroke-width="8" stroke-linecap="round"/><path d="M28 26 L40 48" stroke="url(#h-wood-x)" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M17 24 L27 14 L37 22 L27 32 Z" fill="url(#h-steel)" ${Q(2.6)}/>`,"rune-pillard":`${Ci}
    <path d="M24 48 L38 20" stroke="${Bt}" stroke-width="7" stroke-linecap="round"/><path d="M24 48 L38 20" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <path d="M33 18 C38 12 46 14 48 20 C44 22 41 26 40 30 Z" fill="url(#h-steel)" ${Q(2.6)}/>`,"rune-tour":`${Ci}
    <path d="M25 30 L39 30 L41 48 L23 48 Z" fill="url(#h-white)" ${Q(2.6)}/>
    <path d="M21 22 L43 22 L43 30 L21 30 Z" fill="url(#h-wood)" ${Q(2.6)}/>
    <path d="M18 23 L32 12 L46 23 Z" fill="url(#h-roof)" ${Q(2.6)}/>`,"rune-mortier":`${Ci}
    <ellipse cx="32" cy="42" rx="14" ry="6" fill="url(#h-white)" ${Q(2.6)}/>
    <path d="M24 40 C23 31 27 24 34 20 L41 30 C37 33 34 37 31 42 Z" fill="#4a4f5e" ${Q(2.6)}/>
    <circle cx="44" cy="17" r="4" fill="#2b2f3a" ${Q(2.2)}/>`,swords:`<g transform="rotate(-42 32 32)">${xa}</g><g transform="rotate(42 32 32)">${xa}</g>`,shovel:`
    <g transform="rotate(-32 32 32)">
      <path d="M22 4 L42 4" stroke="${Bt}" stroke-width="11" stroke-linecap="round"/>
      <path d="M22 4 L42 4" stroke="url(#h-wood-x)" stroke-width="5" stroke-linecap="round"/>
      <rect x="28.5" y="4" width="7" height="32" rx="2" fill="url(#h-wood-x)" ${Q()}/>
      <path d="M18 36 L46 36 L46 48 C46 56 40 63 32 63 C24 63 18 56 18 48 Z" fill="url(#h-steel)" ${Q()}/>
      <path d="M23 41 L28 41 L28 52 C25 51 23 48 23 45 Z" fill="#fff" opacity=".75"/>
      <rect x="27" y="31" width="10" height="8" rx="2" fill="#8f97ab" ${Q(3)}/>
    </g>`,house:`
    <path d="M14 30 L50 30 L50 57 L14 57 Z" fill="url(#h-cream)" ${Q()}/>
    <path d="M14 46 L50 46 L50 57 L14 57 Z" fill="#cfc6b6" ${Q(3)}/>
    <path d="M27 57 L27 45 C27 41 37 41 37 45 L37 57 Z" fill="url(#h-wood)" ${Q(3)}/>
    <path d="M32 33 L35.5 37 L32 41 L28.5 37 Z" fill="url(#h-cry)" ${Q(2.4)}/>
    <path d="M5 34 L32 8 L59 34 L52 37 L32 18 L12 37 Z" fill="url(#h-roof)" ${Q()}/>
    <path d="M14 30 L32 13 L36 16 L17 33 Z" fill="#fff" opacity=".45"/>`,map:`
    <path d="M6 14 L23 8 L41 14 L58 8 L58 50 L41 56 L23 50 L6 56 Z" fill="url(#h-parch)" ${Q()}/>
    <path d="M23 8 L23 50 L41 56 L41 14 Z" fill="#d9b779" opacity=".55"/>
    <path d="M23 8 L23 50 M41 14 L41 56" stroke="${Bt}" stroke-width="2.4"/>
    <path d="M10 22 C13 18 18 19 18 24 C18 28 12 29 10 26 Z" fill="#6fae3e" ${Q(2.2)}/>
    <path d="M13 46 C20 40 24 36 31 36 C38 36 40 30 46 24" fill="none" stroke="#c22a20" stroke-width="3.2" stroke-dasharray="4 4.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="${Bt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="#ff5a47" stroke-width="3.5" stroke-linecap="round"/>`,village:`
    <path d="M2 56 C10 40 54 40 62 56 L62 60 L2 60 Z" fill="url(#h-green)" ${Q()}/>
    <path d="M44 44 L44 34" stroke="${Bt}" stroke-width="7" stroke-linecap="round"/>
    <path d="M44 44 L44 34" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="44" cy="25" r="11" fill="url(#h-green)" ${Q()}/>
    <path d="M38 22 C39 18 42 16 45 16" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M10 26 L32 26 L32 46 L10 46 Z" fill="url(#h-cream)" ${Q()}/>
    <path d="M18 46 L18 37 C18 34 24 34 24 37 L24 46 Z" fill="url(#h-wood)" ${Q(2.6)}/>
    <path d="M4 30 L21 12 L38 30 L33 32 L21 20 L9 32 Z" fill="url(#h-roof)" ${Q()}/>`,book:`
    <path d="M16 10 L54 10 L54 58 L16 58 Z" fill="url(#h-cream)" ${Q()}/>
    <path d="M50 14 L50 54" stroke="#cbbb98" stroke-width="2"/><path d="M46 14 L46 54" stroke="#cbbb98" stroke-width="2"/>
    <path d="M10 6 L44 6 C46 6 47 7 47 9 L47 56 C47 58 46 59 44 59 L10 59 Z" fill="url(#h-leather)" ${Q()}/>
    <path d="M10 6 L18 6 L18 59 L10 59 Z" fill="#5a2610" ${Q(3)}/>
    <path d="M32 20 L39 31 L32 42 L25 31 Z" fill="url(#h-cry)" ${Q(2.8)}/>
    <path d="M30 24 L32 21 L32 30 L28 30 Z" fill="#fff" opacity=".7"/>
    <path d="M22 10 L42 10" stroke="#f5b97c" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`,hourglass:`
    <path d="M18 11 L46 11 C46 23 36 28 34 32 C36 36 46 41 46 53 L18 53 C18 41 28 36 30 32 C28 28 18 23 18 11 Z" fill="url(#h-glass)" ${Q()}/>
    <path d="M22 15 L42 15 C40 22 34 25 32 29 C30 25 24 22 22 15 Z" fill="url(#h-sand)"/>
    <path d="M21 50 C24 43 40 43 43 50 Z" fill="url(#h-sand)"/>
    <path d="M32 30 L32 46" stroke="#e7ae45" stroke-width="2"/>
    <path d="M24 14 C24 20 28 24 30 26" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>
    <rect x="10" y="4" width="44" height="8" rx="3" fill="url(#h-wood)" ${Q()}/>
    <rect x="10" y="52" width="44" height="8" rx="3" fill="url(#h-wood)" ${Q()}/>`,fast:`
    <path d="M6 14 L30 32 L6 50 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M30 14 L54 32 L30 50 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M10 21 L20 28 L10 31 Z" fill="#fff" opacity=".7"/><path d="M34 21 L44 28 L34 31 Z" fill="#fff" opacity=".7"/>
    <path d="M58 14 L58 50" stroke="${Bt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 14 L58 50" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>`,clock:`
    <circle cx="32" cy="34" r="24" fill="url(#h-white)" ${Q()}/>
    <path d="M32 20 L32 34 L42 40" fill="none" ${Q()}/>
    <rect x="26" y="4" width="12" height="7" rx="3" fill="url(#h-gold)" ${Q(2.5)}/>`,helmet:`
    <path d="M10 40 C10 22 20 12 32 12 C44 12 54 22 54 40 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M32 6 L32 13" stroke="${Bt}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 6 L32 13" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="6" y="38" width="52" height="9" rx="4.5" fill="url(#h-gold)" ${Q()}/>
    <rect x="28.5" y="45" width="7" height="14" rx="2.5" fill="url(#h-steel)" ${Q(3)}/>
    <path d="M18 34 C18 26 23 20 30 18" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".85"/>`,tent:`
    <path d="M6 56 L32 8 L58 56 Z" fill="url(#h-cream)" ${Q()}/>
    <path d="M32 8 L58 56 L40 56 Z" fill="#d8c7a2" opacity=".8"/>
    <path d="M24 56 L32 34 L40 56 Z" fill="#5a3418" ${Q(3)}/>
    <path d="M32 8 L32 2" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 2 L44 5 L32 9 Z" fill="url(#h-red)" ${Q(2.4)}/>`,flag:`
    <path d="M16 6 L16 60" stroke="${Bt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M16 6 L16 60" stroke="url(#h-wood-x)" stroke-width="4" stroke-linecap="round"/>
    <path d="M18 10 C30 4 38 16 54 10 L54 36 C38 42 30 30 18 36 Z" fill="url(#h-white)" ${Q()}/>
    <path d="M22 14 C28 11 32 13 36 15" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,mushroom:`
    <path d="M24 34 C24 44 22 52 20 58 L44 58 C42 52 40 44 40 34 Z" fill="url(#h-cream)" ${Q()}/>
    <path d="M26 40 C27 47 26 52 25 56" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M4 34 C4 16 18 6 32 6 C46 6 60 16 60 34 C60 38 56 40 52 40 L12 40 C8 40 4 38 4 34 Z" fill="url(#h-roof)" ${Q()}/>
    <circle cx="20" cy="22" r="5" fill="#fff4dc" ${Q(2.4)}/><circle cx="38" cy="15" r="4" fill="#fff4dc" ${Q(2.4)}/><circle cx="46" cy="29" r="4.5" fill="#fff4dc" ${Q(2.4)}/><circle cx="29" cy="32" r="3" fill="#fff4dc" ${Q(2.2)}/>
    <path d="M12 26 C14 18 20 13 27 11" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>`,rune:`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".55"/>
    <path d="M20 22 L32 16 L44 22 M32 16 L32 48 M22 44 L32 48 L42 44" fill="none" stroke="#6b7186" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 26 L38 33 L32 40 L26 33 Z" fill="url(#h-cry)" ${Q(2.6)}/>`,hammer:`
    <path d="M26 30 L46 58" stroke="${Bt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M26 30 L46 58" stroke="url(#h-wood-x)" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M8 26 L22 8 L32 14 L40 10 L50 18 L42 26 L34 24 L20 40 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M14 24 L23 13 L30 17 L22 22 Z" fill="#fff" opacity=".85"/>`,shield:`
    <path d="M32 5 L54 13 L54 30 C54 45 44 55 32 59 C20 55 10 45 10 30 L10 13 Z" fill="url(#h-steel)" ${Q()}/>
    <path d="M32 12 L47 17.5 L47 30 C47 40 41 47 32 51 Z" fill="#9aa2b8" opacity=".55"/>
    <path d="M17 18 L29 13.5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>`,lock:`
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="${Bt}" stroke-width="11"/>
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="url(#h-steel)" stroke-width="5"/>
    <rect x="12" y="26" width="40" height="32" rx="7" fill="url(#h-gold)" ${Q()}/>
    <circle cx="32" cy="40" r="4.5" fill="${Bt}"/><rect x="30" y="41" width="4" height="9" rx="2" fill="${Bt}"/>`,heart:`
    <path d="M32 56 C18 46 6 36 6 22 C6 13 13 7 21 7 C26 7 30 10 32 14 C34 10 38 7 43 7 C51 7 58 13 58 22 C58 36 46 46 32 56 Z" fill="url(#h-red)" ${Q()}/>
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${xa}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${Q()}/>
    <path d="M10 50 L56 50" stroke="${Bt}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${Q(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${Q()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${Q(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${Q(2.4)}/>
    <path d="M32 32 L58 6" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${Bt}" stroke-width="3" stroke-linejoin="round"/>`,eye:`
    <path d="M3 33 C13 15 51 15 61 33 C51 51 13 51 3 33 Z" fill="url(#h-white)" ${Q()}/>
    <circle cx="32" cy="33" r="13" fill="url(#h-cry)" ${Q(3)}/>
    <circle cx="32" cy="33" r="5.5" fill="${Bt}"/>
    <circle cx="27.5" cy="28.5" r="3" fill="#fff"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${Q()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${Q()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${Q()}/>
    <circle cx="32" cy="18" r="4.5" fill="${Bt}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${Bt}"/>`,minus:`<path d="M16 32 L48 32" stroke="${Bt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,plus:`<path d="M16 32 L48 32 M32 16 L32 48" stroke="${Bt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32 M32 16 L32 48" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${Q()}/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${Q(3)}/>
    <path d="M32 7 C20 7 15 17 15 28 L15 37 L8 46 L56 46 L49 37 L49 28 C49 17 44 7 32 7 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M22 26 C22 19 26 14 31 13" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`,sound:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M42 22 C47 27 47 37 42 42" fill="none" stroke="${Bt}" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 15 C57 24 57 40 48 49" fill="none" stroke="${Bt}" stroke-width="5" stroke-linecap="round"/>`,mute:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M42 24 L56 40 M56 24 L42 40" fill="none" stroke="${Bt}" stroke-width="5.5" stroke-linecap="round"/>`,check:`<path d="M12 34 L26 48 L52 18" fill="none" stroke="${Bt}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 34 L26 48 L52 18" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>`,move:`
    <path d="M32 4 L42 16 L35 16 L35 29 L48 29 L48 22 L60 32 L48 42 L48 35 L35 35 L35 48 L42 48 L32 60 L22 48 L29 48 L29 35 L16 35 L16 42 L4 32 L16 22 L16 29 L29 29 L29 16 L22 16 Z" fill="url(#h-white)" ${Q()}/>`,barracks:`
    <path d="M10 30 L54 30 L54 58 L10 58 Z" fill="url(#h-cream)" ${Q()}/>
    <path d="M10 46 L54 46 L54 58 L10 58 Z" fill="#cfc6b6" ${Q(3)}/>
    <path d="M4 33 L32 8 L60 33 L53 36 L32 17 L11 36 Z" fill="url(#h-roof)" ${Q()}/>
    <path d="M24 58 L24 46 C24 40 40 40 40 46 L40 58 Z" fill="url(#h-wood)" ${Q(3)}/>
    <path d="M24 26 L40 26 L40 34 C40 39 36 42 32 43 C28 42 24 39 24 34 Z" fill="url(#h-red)" ${Q(2.6)}/>
    <path d="M27 28 L37 39 M37 28 L27 39" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,tower:`
    <path d="M20 34 L44 34 L47 61 L17 61 Z" fill="url(#h-white)" ${Q()}/>
    <path d="M19 44 L45 44 M18 53 L46 53 M28 34 L28 44 M38 44 L38 53 M27 53 L27 61" stroke="#a89f8c" stroke-width="2.2"/>
    <path d="M14 22 L50 22 L50 34 L14 34 Z" fill="url(#h-wood)" ${Q()}/>
    <path d="M20 22 L20 34 M27 22 L27 34 M37 22 L37 34 M44 22 L44 34" stroke="#7c4420" stroke-width="2.2"/>
    <path d="M30 44 L34 44 L34 52 L30 52 Z" fill="${Bt}"/>
    <path d="M9 24 L32 2 L55 24 Z" fill="url(#h-roof)" ${Q()}/>
    <path d="M17 21 L32 7 L29 21 Z" fill="#fff" opacity=".4"/>`,mortar:`
    <ellipse cx="32" cy="48" rx="26" ry="11" fill="url(#h-white)" ${Q()}/>
    <path d="M6 48 L6 53 C6 59 58 59 58 53 L58 48" fill="#b8ae99" ${Q()}/>
    <path d="M18 44 C16 30 22 18 34 12 L46 30 C40 36 34 42 30 48 Z" fill="#4a4f5e" ${Q()}/>
    <ellipse cx="40" cy="21" rx="8" ry="11" transform="rotate(-56 40 21)" fill="#2b2f3a" ${Q()}/>
    <path d="M22 40 C21 31 25 23 32 18" stroke="#9aa1b5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="40" r="5" fill="#3a3f4c" ${Q(2.4)}/>`,wall:`
    <path d="M4 30 C4 24 12 22 16 26 C20 21 28 21 32 26 C36 21 44 21 48 26 C52 22 60 24 60 30 L60 56 L4 56 Z" fill="url(#h-white)" ${Q()}/>
    <path d="M4 42 L60 42 M18 30 L18 42 M32 30 L32 42 M46 30 L46 42 M11 42 L11 56 M25 42 L25 56 M39 42 L39 56 M53 42 L53 56" stroke="#9b917c" stroke-width="2.4"/>
    <path d="M8 31 C10 27 14 27 15 29" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,chest:`
    <path d="M8 30 L56 30 L56 56 L8 56 Z" fill="url(#h-wood)" ${Q()}/>
    <path d="M8 30 C8 16 56 16 56 30 Z" fill="url(#h-wood)" ${Q()}/>
    <path d="M8 36 L56 36" stroke="${Bt}" stroke-width="3"/>
    <path d="M18 18 L18 56 M46 18 L46 56" stroke="${Bt}" stroke-width="7"/><path d="M18 19 L18 55 M46 19 L46 55" stroke="url(#h-gold)" stroke-width="3.6"/>
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${Q(2.4)}/>`,rotate:`
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="${Bt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 6 L60 10 L54 30 Z" fill="url(#h-gold)" ${Q(2.6)}/>`,replay:`
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="${Bt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 10 L16 30 L22 12 Z" fill="url(#h-white)" ${Q(2.6)}/>
    <path d="M26 22 L44 32 L26 42 Z" fill="url(#h-gold)" ${Q(2.6)}/>`,alert:`
    <path d="M32 5 L60 54 C61 57 59 59 56 59 L8 59 C5 59 3 57 4 54 Z" fill="url(#h-red)" ${Q()}/>
    <rect x="28.5" y="20" width="7" height="22" rx="3" fill="#fff" ${Q(2)}/>
    <circle cx="32" cy="50" r="4" fill="#fff" ${Q(2)}/>`,star:`<path d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z" fill="url(#h-gold)" ${Q()}/>
    <path d="M32 13 L37 25 L28 26 Z" fill="#fff" opacity=".7"/>`,gate:`
    <rect x="4" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${Q()}/><rect x="46" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${Q()}/>
    <path d="M18 58 L18 34 C18 22 46 22 46 34 L46 58 Z" fill="url(#h-wood)" ${Q()}/>
    <path d="M32 26 L32 58" stroke="${Bt}" stroke-width="3"/>
    <path d="M18 40 L46 40" stroke="url(#h-gold)" stroke-width="3.5"/>`,close:`<path d="M18 18 L46 46 M46 18 L18 46" stroke="${Bt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},Oe=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,tc=!1;function au(){if(tc){document.querySelectorAll("img[data-art]").forEach(e=>{e.src=Da[e.dataset.art],e.alt="",e.draggable=!1});return}tc=!0;let i=document.createElement("style");i.textContent=`@font-face{font-family:"Lilita";src:url(${Ql}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${Zl}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(i);let t=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${td}</defs>`;for(let[e,n]of Object.entries(ed))t+=`<symbol id="i-${e}" viewBox="0 0 64 64" overflow="visible">${n}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${t}</svg>`),document.querySelectorAll("img[data-art]").forEach(e=>{e.src=Da[e.dataset.art],e.alt="",e.draggable=!1})}var Ra=(i,t,e,n,o="")=>`<div class="ctr ${i}">${o?`<span class="max n">${o}</span>`:""}<span class="track"><i style="width:${n}%"></i></span><span class="v n">${e}</span>${Oe(t)}</div>`,B5=`<button class="x"><span class="face">${Oe("close")}</span></button>`,k5=`<div class="hud">
  <div class="tl">${Ra("cry","crystal","1 240",83,"Max 1 500")}${Ra("mush","mushroom","860",57,"Max 1 500")}${Ra("rune","rune","3",0)}</div>
  <div class="tc">${Ra("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${Oe("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${Oe("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${Oe("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${Oe("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${Oe("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${Oe("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${Oe("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;var nc=!1;function oc(){if(nc){au();return}nc=!0;let i=document.createElement("style");i.textContent=`${Nl}
${Xl}`,document.head.prepend(i),document.body.dataset.theme="pierre",au()}function Ma(i){i.querySelectorAll("img[data-art]").forEach(t=>{let e=Da[t.dataset.art];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var He=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var pu=i=>(i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`);var ic="./assets/ui_tap-KWIPUKCV.mp3";var rc="./assets/ui_open-YSL7SZAG.mp3";var ac="./assets/ui_close-EFYUEE7E.mp3";var pc="./assets/ui_error-ZUUDUV6B.mp3";var sc="./assets/ui_coins-UQFARDBX.mp3";var uc="./assets/build_place-AJNKOBOM.mp3";var fc="./assets/build_lift-ROHD6QPX.mp3";var lc="./assets/build_hammer-ETQSYE7E.mp3";var cc="./assets/build_done-LHFJ763M.mp3";var hc="./assets/collect_crystal-EH5LY25Y.mp3";var dc="./assets/collect_mushroom-P4PKF7JT.mp3";var bc="./assets/alert_attack-4JCOXVK2.mp3";var mc="./assets/raid_start-GQO57AU3.mp3";var yc="./assets/troop_drop-TXHYCU7M.mp3";var gc="./assets/battle_cry-MHWM65EL.mp3";var Tc="./assets/sword_hit-C3I5IP4X.mp3";var Ec="./assets/bow_shot-DU3Q5ME7.mp3";var Uc="./assets/arrow_hit-GU5F3AZO.mp3";var Vc="./assets/mortar_fire-55PCFJWD.mp3";var Sc="./assets/mortar_impact-FFLUEV66.mp3";var Pc="./assets/building_hit-SVLVCHM7.mp3";var Lc="./assets/building_fall-HN64CLQT.mp3";var wc="./assets/unit_death-VKWG44ZQ.mp3";var Cc="./assets/loot-4CMJPKD5.mp3";var xc="./assets/map_clouds-JUUCDZDP.mp3";var Dc="./assets/amb_village-VUB2HF6J.mp3";var Rc="./assets/music_village-OMKKDIQC.mp3";var Mc="./assets/music_raid-VAZ2GGVK.mp3";var vc="./assets/music_win-LAC54U6M.mp3";var Ac="./assets/music_lose-RWDS7XZ3.mp3";var vd={ui_tap:ic,ui_open:rc,ui_close:ac,ui_error:pc,ui_coins:sc,build_place:uc,build_lift:fc,build_hammer:lc,build_done:cc,collect_crystal:hc,collect_mushroom:dc,alert_attack:bc,raid_start:mc,troop_drop:yc,battle_cry:gc,sword_hit:Tc,bow_shot:Ec,arrow_hit:Uc,mortar_fire:Vc,mortar_impact:Sc,building_hit:Pc,building_fall:Lc,unit_death:wc,loot:Cc,map_clouds:xc,amb_village:Dc,music_village:Rc,music_raid:Mc,music_win:vc,music_lose:Ac},Ad={ui_tap:.45,ui_open:.45,ui_close:.4,ui_error:.55,ui_coins:.6,build_place:.8,build_lift:.5,build_hammer:.6,build_done:.7,collect_crystal:.6,collect_mushroom:.6,alert_attack:.85,raid_start:.85,troop_drop:.5,battle_cry:.6,sword_hit:.5,bow_shot:.45,arrow_hit:.45,mortar_fire:.7,mortar_impact:.75,building_hit:.6,building_fall:.8,unit_death:.55,loot:.7,map_clouds:.6},Id=.9,Od=new Set(["troop_drop","battle_cry","sword_hit","bow_shot","arrow_hit","mortar_fire","mortar_impact","building_hit","unit_death","build_hammer","collect_crystal","collect_mushroom"]),_d=.06,$d=100,Hd=4,Bd=24,kd=250,Ic=1.2,Oc=1.5,_c=.25,Fd={sfx:1,music:.55,ambience:.6},su={sfx:"shardholm.mute.sfx",music:"shardholm.mute.music"},uu={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}};function Jd(i,t){return new Promise((e,n)=>{try{let o=i.decodeAudioData(t,e,n);o&&typeof o.then=="function"&&o.then(e,n)}catch(o){n(o)}})}var Nd={music_village:2822621/44100,music_raid:2419326/44100,amb_village:1014311/44100},Xd=1105/44100;function Qd(i,t){let e=Nd[i];if(!e||e>t.duration+.004)return[0,t.duration];if(Math.abs(t.duration-e)<.004)return[0,t.duration];let n=Math.min(Xd,t.duration-e);return[n,n+e]}function fu(i,t,e,n){i.cancelScheduledValues(e),i.setValueAtTime(i.value,e),i.linearRampToValueAtTime(t,e+n)}var lu=class{constructor(){$(this,"g",null);$(this,"dead",!1);$(this,"primed",!1);$(this,"hidden",!1);$(this,"mutes",null);$(this,"vol",{...Fd});$(this,"buffers",new Map);$(this,"ready",new Map);$(this,"recent",new Map);$(this,"voices",0);$(this,"wantMusic",null);$(this,"track",null);$(this,"wantAmb",!1);$(this,"amb",null)}unlock(){let t=this.graph();if(t)try{if(t.ctx.state!=="running"&&!this.hidden&&t.ctx.resume().catch(()=>{}),!this.primed){this.primed=!0;let e=t.ctx.createBufferSource();e.buffer=t.ctx.createBuffer(1,1,22050),e.connect(t.ctx.destination),e.start(0)}}catch{}}play(t,e={}){try{let n=this.graph();if(!n||this.m().sfx||n.ctx.state!=="running")return;let o=performance.now();if(!this.allow(t,o))return;let r=this.ready.get(t);if(r){this.start(n,r,t,e);return}this.load(t).then(a=>{a&&performance.now()-o<kd&&this.start(n,a,t,e)})}catch{}}music(t){try{this.wantMusic=t;let e=this.graph();if(!e)return;if(!t||this.m().music){this.stopTrack(e);return}if(this.track?.name===t)return;this.withBuffer(t,n=>{this.wantMusic!==t||this.m().music||this.track?.name===t||(this.stopTrack(e),this.track=this.loop(e,t,n,e.loops,Ic))})}catch{}}ambience(t){try{this.wantAmb=t;let e=this.graph();if(!e)return;if(!t||this.m().sfx){this.amb&&(this.fadeOut(e,this.amb,Oc),this.amb=null);return}if(this.amb)return;this.withBuffer("amb_village",n=>{!this.wantAmb||this.amb||this.m().sfx||(this.amb=this.loop(e,"amb_village",n,e.bus.ambience,Oc))})}catch{}}jingle(t){try{let e=this.graph();if(!e||this.m().music||e.ctx.state!=="running")return;this.withBuffer(t,n=>{let{ctx:o}=e,r=o.currentTime,a=r+n.duration,p=o.createBufferSource();p.buffer=n;let s=o.createGain();s.gain.value=Id,p.connect(s).connect(e.bus.music),p.onended=()=>{try{p.disconnect(),s.disconnect()}catch{}};let u=e.loops.gain;fu(u,_c,r,.2),u.setValueAtTime(_c,Math.max(r+.2,a-.2)),u.linearRampToValueAtTime(1,a+1.2),p.start(r)})}catch{}}setMuted(t,e){try{this.m()[t]=e,uu.set(su[t],e?"1":"0");let n=this.g;if(!n)return;this.applyBus(n),t==="music"?this.music(this.wantMusic):this.ambience(this.wantAmb)}catch{}}muted(t){return this.m()[t]}setVolume(t,e){this.vol[t]=Math.min(1,Math.max(0,Number.isFinite(e)?e:0));try{this.g&&this.applyBus(this.g)}catch{}}volume(t){return this.vol[t]}preload(t){return Promise.all(t.map(e=>this.load(e))).then(()=>{},()=>{})}m(){return this.mutes||(this.mutes={sfx:uu.get(su.sfx)==="1",music:uu.get(su.music)==="1"}),this.mutes}graph(){if(this.g||this.dead)return this.g;try{let t=typeof AudioContext<"u"?AudioContext:globalThis.webkitAudioContext;if(!t)return this.dead=!0,null;let e=new t,n=r=>{let a=e.createGain();return a.connect(r),a},o={sfx:n(e.destination),music:n(e.destination),ambience:n(e.destination)};this.g={ctx:e,bus:o,loops:n(o.music)},this.applyBus(this.g,0),typeof document<"u"&&document.addEventListener("visibilitychange",()=>this.onVisibility())}catch{this.dead=!0,this.g=null}return this.g}applyBus(t,e=.08){let n=this.m(),o=t.ctx.currentTime,r={sfx:n.sfx?0:this.vol.sfx,ambience:n.sfx?0:this.vol.ambience,music:n.music?0:this.vol.music};for(let a of["sfx","music","ambience"])e>0?fu(t.bus[a].gain,r[a],o,e):t.bus[a].gain.value=r[a]}onVisibility(){try{let t=this.g;if(!t)return;document.hidden?t.ctx.state==="running"&&(this.hidden=!0,t.ctx.suspend().catch(()=>{})):this.hidden&&(this.hidden=!1,t.ctx.resume().catch(()=>{}))}catch{}}load(t){let e=this.buffers.get(t);if(e)return e;let n=this.graph();if(!n)return Promise.resolve(null);try{e=fetch(vd[t]).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(`${t}: HTTP ${o.status}`))).then(o=>Jd(n.ctx,o)).then(o=>(this.ready.set(t,o),o),()=>null)}catch{e=Promise.resolve(null)}return this.buffers.set(t,e),e}withBuffer(t,e){let n=this.ready.get(t);if(n){e(n);return}this.load(t).then(o=>{if(o)try{e(o)}catch{}})}allow(t,e){let n=(this.recent.get(t)??[]).filter(r=>e-r<$d),o=n.length<Hd;return o&&n.push(e),this.recent.set(t,n),o}start(t,e,n,o){try{if(this.voices>=Bd)return;let{ctx:r}=t,a=r.createBufferSource();a.buffer=e;let p=o.rate??(Od.has(n)?1+(Math.random()*2-1)*_d:1);a.playbackRate.value=Math.min(4,Math.max(.25,p));let s=r.createGain();s.gain.value=Math.max(0,(o.vol??1)*Ad[n]),a.connect(s);let u=s;if(o.pan&&typeof r.createStereoPanner=="function"){let f=r.createStereoPanner();f.pan.value=Math.min(1,Math.max(-1,o.pan)),s.connect(f),u=f}u.connect(t.bus.sfx),a.onended=()=>{this.voices--;try{a.disconnect(),s.disconnect(),u.disconnect()}catch{}},a.start(),this.voices++}catch{}}loop(t,e,n,o,r){let{ctx:a}=t,p=a.currentTime,s=a.createBufferSource();s.buffer=n,s.loop=!0;let[u,f]=Qd(e,n);s.loopStart=u,s.loopEnd=f;let l=a.createGain();return l.gain.setValueAtTime(0,p),l.gain.linearRampToValueAtTime(1,p+r),s.connect(l).connect(o),s.start(p,u),{name:e,src:s,gain:l}}stopTrack(t){this.track&&(this.fadeOut(t,this.track,Ic),this.track=null)}fadeOut(t,e,n){try{let o=t.ctx.currentTime;fu(e.gain.gain,0,o,n),e.src.onended=()=>{try{e.src.disconnect(),e.gain.disconnect()}catch{}},e.src.stop(o+n+.05)}catch{}}},xi=new lu;var $c=`/* The auto-battler's own screens, in the theme's tokens (ui/menus.css, direction A \xAB Pierre et or \xBB) and its fonts.
   Sizes are iPhone points, for a phone held sideways (844 \xD7 390). A first layout, not a validated mockup. */
html, body { background: #6d8f3c; }
#scene { position: fixed; top: 0; left: 0; width: var(--pw, 100%); height: var(--ph, 100%); display: block; touch-action: none; }
html.rot #scene { width: 100%; height: 100%; }
.ab { position: fixed; inset: 0; pointer-events: none; z-index: 2; font-family: "Lilita", system-ui, sans-serif; }
.ab button { pointer-events: auto; }
.ab .pane { pointer-events: auto; }
.f { font: 600 11.5px/1.25 "Fredoka", system-ui, sans-serif; color: #f6efe0; }
.coin { display: inline-block; width: 12px; height: 12px; border-radius: 50%; vertical-align: -2px; background: radial-gradient(circle at 35% 30%, #fff3b0, #f2c35a 45%, #b07a1e); box-shadow: 0 0 0 1.2px var(--ink); }
.plate { background: rgba(38, 33, 27, .84); border-radius: 10px; box-shadow: 0 2px 0 rgba(0, 0, 0, .35), inset 0 0 0 1.5px rgba(242, 195, 90, .45); }
.pbtn { border: 1.5px solid var(--ink); border-radius: 8px; background: var(--stone); color: var(--ink); font: normal 13px "Lilita"; box-shadow: 0 2px 0 var(--ink); padding: 0 8px; height: 26px; display: inline-flex; align-items: center; gap: 4px; }
.pbtn.go { background: var(--btn-go); color: #fff; text-shadow: var(--o); }
.pbtn.gold { background: linear-gradient(#ffe7a6, #e7ae45); }
.pbtn .ic { width: 16px; height: 16px; }
.pbtn:disabled { filter: grayscale(.8) brightness(.85); opacity: .7; }
.pbtn:active:not(:disabled) { transform: translateY(1.5px); box-shadow: 0 .5px 0 var(--ink); }

/* the top bar: round and stage, timer, gold, life */
.topbar { position: absolute; left: calc(var(--l) + 4px); right: calc(var(--r) + 4px); top: calc(var(--t) + 4px); display: flex; align-items: center; gap: 10px; height: 30px; }
.topbar .rnd { padding: 4px 10px; font-size: 15px; }
.topbar .rnd small { font: 600 11px "Fredoka", sans-serif; color: #e9e1cd; margin-left: 6px; }
.topbar .clock { font-size: 18px; min-width: 44px; text-align: center; }
.topbar .res { display: flex; align-items: center; gap: 4px; padding: 4px 9px; font-size: 15px; }
.topbar .res .ic { width: 16px; height: 16px; }
.topbar .sp { flex: 1; }
.topbar .next { padding: 4px 10px; display: flex; align-items: center; gap: 6px; font-size: 13px; pointer-events: auto; }
.topbar .next .f { color: #e9e1cd; }
.mini { display: inline-flex; align-items: center; gap: 2px; font-size: 12px; }
.mini img { width: 18px; height: 18px; border-radius: 4px; object-fit: cover; object-position: 50% 15%; background: var(--card); border: 1px solid var(--ink); }

/* the army, on the left */
.army { position: absolute; left: calc(var(--l) + 4px); top: calc(var(--t) + 42px); bottom: calc(var(--b) + 4px); width: 236px; padding: 8px; display: flex; flex-direction: column; gap: 6px; }
.army .head { display: flex; align-items: center; justify-content: space-between; }
.army .head .n { font-size: 16px; }
.army .cap { display: flex; flex-direction: column; align-items: stretch; gap: 5px; }
.army .cap .pbtn { justify-content: center; }
.army .cap .bar { height: 10px; border-radius: 5px; background: rgba(0, 0, 0, .4); overflow: hidden; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .5); }
.army .cap .bar i { display: block; height: 100%; background: linear-gradient(#bff27a, #59b52c); }
.army .cap .bar i.full { background: linear-gradient(#ffe7a6, #e7ae45); }
.trow { display: flex; align-items: center; gap: 6px; padding: 3px 4px; border-radius: 8px; background: rgba(0, 0, 0, .22); }
.trow .pic { width: 38px; height: 38px; flex: none; border-radius: 7px; border: 1.5px solid var(--ink); background: var(--card); object-fit: cover; object-position: 50% 15%; }
.trow .mid { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.trow .mid .n { font-size: 13px; }
.trow .mid .n small { font: 600 10px "Fredoka", sans-serif; color: #e9e1cd; margin-left: 4px; text-shadow: none; }
.chips { display: flex; flex-wrap: wrap; gap: 2px; }
.chip { display: inline-flex; align-items: center; gap: 1px; padding: 0 3px; border-radius: 4px; background: rgba(242, 195, 90, .22); font: 600 9.5px/14px "Fredoka", sans-serif; color: #ffe7a6; }
.chip .ic { width: 10px; height: 10px; }
.stepper { display: flex; align-items: center; gap: 3px; }
.stepper .n { width: 22px; text-align: center; font-size: 15px; }
.stepper button { width: 26px; height: 26px; padding: 0; justify-content: center; font-size: 17px; }

/* the shop, at the bottom in the middle */
.shop { position: absolute; left: calc(var(--l) + 250px); right: calc(var(--r) + 210px); bottom: calc(var(--b) + 4px); padding: 6px 8px 8px; display: flex; flex-direction: column; gap: 5px; }
.shop .head { display: flex; align-items: center; justify-content: space-between; }
.shop .head .n { font-size: 14px; }
.offers { display: flex; gap: 6px; }
.offer { flex: 1; min-width: 0; height: 104px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 2px; padding: 4px 2px 0; border-radius: 9px; border: 1.5px solid var(--ink); box-shadow: 0 2px 0 var(--ink); cursor: pointer; font: inherit; color: var(--ink); }
.offer.r0 { background: linear-gradient(#f4f0e8, #d9d2c4); } .offer.r1 { background: linear-gradient(#e6f3ff, #b9dbfb); }
.offer.r2 { background: linear-gradient(#f3e8ff, #d4b8fb); } .offer.r3 { background: linear-gradient(#fff4d6, #f7d685); }
.offer .pic { width: 40px; height: 40px; border-radius: 7px; object-fit: cover; object-position: 50% 15%; border: 1.2px solid var(--ink); background: var(--card); }
.offer .rar { font: 700 8.5px "Fredoka", sans-serif; text-transform: uppercase; letter-spacing: .4px; opacity: .8; }
.offer .what { display: flex; align-items: center; gap: 2px; font-size: 13px; }
.offer .what .ic { width: 14px; height: 14px; }
.offer .who { font: 600 9.5px/1.1 "Fredoka", sans-serif; text-align: center; white-space: normal; padding: 0 2px; }
.offer .price { position: absolute; left: 50%; bottom: -9px; transform: translateX(-50%); display: flex; align-items: center; gap: 3px; padding: 1px 7px; border-radius: 7px; background: var(--ink); color: #fff; font-size: 12px; }
.offer.poor { filter: saturate(.4) brightness(.85); }
.offer.sold { visibility: hidden; }
.offer.sold.slot { visibility: visible; background: rgba(0, 0, 0, .2); border-style: dashed; box-shadow: none; }

/* the players, on the right */
.players { position: absolute; right: calc(var(--r) + 4px); top: calc(var(--t) + 42px); bottom: calc(var(--b) + 4px); width: 196px; padding: 6px; display: flex; flex-direction: column; gap: 4px; overflow: auto; }
.prow { display: flex; flex-direction: column; gap: 2px; padding: 3px 6px; border-radius: 7px; background: rgba(0, 0, 0, .22); cursor: pointer; }
.prow.me { box-shadow: inset 0 0 0 1.5px rgba(72, 168, 255, .9); }
.prow.opp { box-shadow: inset 0 0 0 1.5px rgba(255, 76, 59, .95); }
.prow.out { opacity: .45; }
.prow .l1 { display: flex; align-items: center; gap: 5px; font-size: 12.5px; }
.prow .l1 .nm { flex: 1; overflow: hidden; text-overflow: ellipsis; }
.prow .l1 .ic { width: 13px; height: 13px; }
.prow .hpbar { height: 6px; border-radius: 3px; background: rgba(0, 0, 0, .45); overflow: hidden; }
.prow .hpbar i { display: block; height: 100%; background: linear-gradient(#ffb0a0, #ff5a47 60%, #c22a20); }
.prow .det { display: none; flex-direction: column; gap: 2px; padding-top: 2px; }
.prow.open .det { display: flex; }

.ready { position: absolute; right: calc(var(--r) + 214px); bottom: calc(var(--b) + 132px); }
.ready .pbtn { height: 34px; font-size: 16px; padding: 0 14px; }

/* the battle: the gauges, the deck */
.gauges { position: absolute; left: 50%; top: calc(var(--t) + 4px); transform: translateX(-50%); display: flex; align-items: center; gap: 10px; padding: 5px 10px; }
.gauge { width: 150px; display: flex; flex-direction: column; gap: 2px; }
.gauge .nm { font-size: 12px; display: flex; justify-content: space-between; }
.gauge .bar { height: 14px; border-radius: 7px; background: rgba(0, 0, 0, .45); overflow: hidden; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .6); }
.gauge .bar i { display: block; height: 100%; transition: width .15s linear; }
.gauge.mine .bar i { background: linear-gradient(#a8dcff, #48a8ff 60%, #1f6fc2); }
.gauge.theirs .bar i { background: linear-gradient(#ffb0a0, #ff4c3b 60%, #b52416); margin-left: auto; }
.gauge.theirs .nm { flex-direction: row-reverse; }
.gauges .vs { display: flex; flex-direction: column; align-items: center; }
.gauges .vs .n { font-size: 18px; }
.gauges .vs .f { font-size: 10px; }
.deck { position: absolute; left: 50%; bottom: calc(var(--b) + 4px); transform: translateX(-50%); display: flex; gap: 8px; }
.tcard { position: relative; width: 62px; height: 70px; padding: 0; border-radius: 9px; border: 1.5px solid var(--ink); background: var(--card); box-shadow: 0 2px 0 var(--ink); overflow: hidden; }
.tcard img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 15%; }
.tcard .cnt { position: absolute; right: 3px; bottom: 2px; font-size: 15px; }
.tcard .pl { position: absolute; left: 3px; top: 2px; font-size: 10px; }
.tcard.sel { outline: 3px solid var(--gold); outline-offset: 1px; transform: translateY(-5px); box-shadow: 0 2px 0 var(--ink), 0 0 12px 2px rgba(255, 210, 90, .8); }
.tcard.empty { filter: grayscale(1) brightness(.7); }
.hint { position: absolute; left: 50%; bottom: calc(var(--b) + 84px); transform: translateX(-50%); padding: 4px 10px; font: 600 12px "Fredoka", sans-serif; color: #f6efe0; white-space: nowrap; }
.mylife { position: absolute; left: calc(var(--l) + 4px); bottom: calc(var(--b) + 4px); padding: 5px 10px; display: flex; align-items: center; gap: 5px; font-size: 14px; }
.mylife .ic { width: 16px; height: 16px; }

/* windows: results, elimination, the end, the start */
.cover { position: absolute; inset: 0; background: rgba(12, 10, 6, .45); pointer-events: auto; display: flex; align-items: center; justify-content: center; }
.box { width: min(460px, calc(100% - 40px)); max-height: calc(100% - 30px); overflow: auto; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; align-items: stretch; }
.box h2 { margin: 0; text-align: center; font: normal 26px "Lilita"; color: #fff; text-shadow: var(--o); }
.box h2.good { color: #b6ff7a; } .box h2.bad { color: #ff9a88; }
.box p { margin: 0; text-align: center; }
.box .row { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.box .list { display: flex; flex-direction: column; gap: 3px; }
.box .li { display: flex; align-items: center; gap: 6px; padding: 3px 8px; border-radius: 6px; background: rgba(0, 0, 0, .22); font-size: 13px; }
.box .li .nm { flex: 1; } .box .li.me { box-shadow: inset 0 0 0 1.5px rgba(72, 168, 255, .9); }
.box .li .f { font-size: 11px; }
.box input { height: 32px; padding: 0 10px; border: 1.5px solid var(--ink); border-radius: 7px; background: #fffaf0; font: 600 15px "Fredoka", sans-serif; color: var(--ink); -webkit-user-select: text; user-select: text; }
.box input.code { text-transform: uppercase; letter-spacing: 4px; font-family: "Lilita"; width: 130px; text-align: center; }
.box .big { font: normal 30px "Lilita"; letter-spacing: 6px; text-align: center; color: #fff; text-shadow: var(--o); }
.box .msg { min-height: 15px; text-align: center; color: #ff9a88; }
.title { font: normal 34px "Lilita"; text-align: center; color: #fff; text-shadow: var(--o); }
.fps { position: absolute; right: calc(var(--r) + 4px); bottom: calc(var(--b) + 4px); padding: 3px 8px; font: 600 12px "Fredoka", monospace; }
#toast2 { position: absolute; left: 50%; top: calc(var(--t) + 48px); transform: translateX(-50%); padding: 5px 12px; font: 600 12.5px "Fredoka", sans-serif; color: #f6efe0; }
@media (max-width: 760px) { .army { width: 206px; } .shop { left: calc(var(--l) + 218px); right: calc(var(--r) + 184px); } .players { width: 172px; } .ready { right: calc(var(--r) + 188px); } .gauge { width: 120px; } }
`;var ae=["barbarian","archer","tank","assassin"],va=["hp","damage","attackSpeed","moveSpeed","range"],pt={tickHz:20,arena:{width:28,length:40,eclatRadius:1.4,zoneRadius:5,noDropRadius:8.5,enemyHalo:3},battle:{maxSeconds:75,aggro:8,retargetTicks:4,gauge:{base:2,perTroop:.4,cap:8},dropRate:10,zoneStop:.55,separation:.5},troops:{barbarian:{places:1,hp:115,damage:13.5,attackSpeed:1,moveSpeed:3,range:1,radius:.35,mass:1,rangeUpgradable:!1},archer:{places:1,hp:41,damage:7.5,attackSpeed:1,moveSpeed:2.8,range:5.5,radius:.35,mass:1,rangeUpgradable:!0},tank:{places:5,hp:820,damage:40,attackSpeed:.6,moveSpeed:1.8,range:1.2,radius:.7,mass:5,rangeUpgradable:!1},assassin:{places:2,hp:145,damage:55,attackSpeed:.8,moveSpeed:4.5,range:1,radius:.35,mass:1.2,rangeUpgradable:!1}},assassinHunt:12,army:{startPlaces:20,maxPlaces:60,step:5,stepCost:4},economy:{goldPerRound:7,startGold:3,reroll:2,offers:4},rarities:[{id:"common",name:"Commune",bonus:.15,cost:2,early:70,late:25},{id:"rare",name:"Rare",bonus:.3,cost:3,early:24,late:35},{id:"epic",name:"\xC9pique",bonus:.5,cost:4,early:5,late:27},{id:"legendary",name:"L\xE9gendaire",bonus:.8,cost:6,early:1,late:13}],lateRound:12,hp:{start:100,damage:{base:4,perRound:1.5,perPlace:.4,max:40}},round:{prep:30,battle:75,results:5},maxRounds:40,match:{players:8,humanPairWeight:.35,pairingTries:24},bots:{firstWave:.55,counter:.25,firstWaveTicks:[6,30],reserveAfter:40,reserveGauge:55,capacityEagerUntil:6,rerollsPerRound:1,playedShare:.15},net:{delayTicks:8,takeoverSeconds:3,sendEvery:100,grace:3,launchDelay:5}},ze=1/pt.tickHz,Aa=pt.battle.maxSeconds*pt.tickHz,Ia=pt.round.prep+pt.round.battle+pt.round.results,yr={barbarian:"Barbare",archer:"Archer",tank:"Tank",assassin:"Assassin"},Hc={hp:"PV",damage:"D\xE9g\xE2ts",attackSpeed:"Vitesse d\u2019attaque",moveSpeed:"D\xE9placement",range:"Port\xE9e"};var Bc=pt.round,Di=i=>(i-1)*Ia,kn=i=>Di(i)+Bc.prep,gr=i=>kn(i)+Bc.battle,Oa=i=>gr(i)+pt.net.grace;function kc(i,t,e){return t<1?!1:i==="drops"||i==="takeover"?e>=kn(t)&&e<Oa(t):e>=Di(t)&&e<kn(t)}var zd=0,cu=()=>`${Date.now().toString(36)}-${(zd++).toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,Tr=class{constructor(t,e,n=()=>performance.now()/1e3,o=0){$(this,"seed",t);$(this,"now",n);$(this,"solo",!0);$(this,"humans");$(this,"mySeat",0);$(this,"log",[]);$(this,"offset");$(this,"onChange");this.humans=[e],this.offset=-this.now()-o}clock(){return this.now()+this.offset}post(t,e,n){let o=cu();return kc(e,t,this.clock())&&this.log.push({seq:this.log.length,seat:this.mySeat,round:t,kind:e,data:n,cid:o}),o}confirmed(){return this.log}syncedTo(){return 1/0}pending(){return[]}skip(t){let e=this.clock();t>e&&(this.offset+=t-e)}close(){}};var _e=pt.arena,Fo=pt.battle,Eo=_e.width/2,wn=_e.length/2,to=()=>({barbarian:0,archer:0,tank:0,assassin:0});function Er(){let i={};for(let t of ae){i[t]={};for(let e of va)i[t][e]=0}return i}var eo=i=>ae.reduce((t,e)=>t+i[e]*pt.troops[e].places,0),Fc=i=>ae.reduce((t,e)=>t+i[e],0);function Yd(i,t){let e=pt.troops[i],n=t[i];return{hp:e.hp*(1+n.hp),damage:e.damage*(1+n.damage),attackSpeed:e.attackSpeed*(1+n.attackSpeed),moveSpeed:e.moveSpeed*(1+n.moveSpeed),range:e.range*(1+(e.rangeUpgradable?n.range:0))}}var jd=(i,t)=>i>=0&&i<=_e.width&&t>=0&&t<=_e.length;function Gd(i,t){let e=i-Eo,n=t-wn;return e*e+n*n<_e.noDropRadius*_e.noDropRadius}var Ri=class{constructor(t){$(this,"tick",0);$(this,"units",[]);$(this,"stock");$(this,"gauges",[0,0]);$(this,"inZone",[0,0]);$(this,"result",null);$(this,"events",{hits:[],deaths:[],landed:[],refused:[]});$(this,"pending",[]);$(this,"nextId",0);$(this,"up");$(this,"cell",1.5);$(this,"gw",Math.ceil(_e.width/1.5)+1);$(this,"gh",Math.ceil(_e.length/1.5)+1);$(this,"grid",[]);this.stock=[{...t[0].counts},{...t[1].counts}],this.up=[t[0].upgrades,t[1].upgrades];for(let e=0;e<this.gw*this.gh;e++)this.grid.push([])}get time(){return this.tick*ze}get over(){return this.result!==null}alive(t){return this.units.filter(e=>e.alive&&(t===void 0||e.side===t))}left(t){let e={...this.stock[t]};for(let n of this.pending)n.side===t&&e[n.kind]>0&&e[n.kind]--;return e}pendingDrops(){return this.pending}canDrop(t,e,n){if(!jd(e,n)||Gd(e,n))return!1;let o=_e.enemyHalo*_e.enemyHalo;for(let r of this.units){if(!r.alive||r.side===t)continue;let a=r.x-e,p=r.y-n;if(a*a+p*p<o)return!1}return!0}schedule(t){let e=this.pending.length;for(;e>0&&Kd(t,this.pending[e-1]);)e--;this.pending.splice(e,0,t)}step(){if(this.result)return;let t=this.events={hits:[],deaths:[],landed:[],refused:[]};for(;this.pending.length&&this.pending[0].tick<=this.tick;){let p=this.pending.shift();this.stock[p.side][p.kind]>0&&this.canDrop(p.side,p.x,p.y)?(this.stock[p.side][p.kind]--,t.landed.push(this.spawn(p).id)):t.refused.push(p)}let e=this.units.filter(p=>p.alive),n=new Float64Array(this.nextId);for(let p of e){p.cd>0&&(p.cd-=ze),(!p.target||!p.target.alive||(this.tick+p.id)%Fo.retargetTicks===0)&&(p.target=this.look(p,e));let s=p.target;if(s){let u=s.x-p.x,f=s.y-p.y,l=Math.sqrt(u*u+f*f);l-p.radius-s.radius<=p.range?p.cd<=0&&(n[s.id]+=p.damage,p.cd+=p.period,p.cd<0&&(p.cd=0),p.struck=this.tick,t.hits.push({from:p.id,to:s.id})):this.walk(p,u,f,l,p.radius+s.radius+p.range*.9)}else{let u=Eo-p.x,f=wn-p.y,l=Math.sqrt(u*u+f*f);this.walk(p,u,f,l,_e.zoneRadius*Fo.zoneStop)}}for(let p of e)n[p.id]>0&&(p.hp-=n[p.id],p.hp<=0&&(p.hp=0,p.alive=!1,t.deaths.push(p.id)));this.separate();let o=0,r=0,a=_e.zoneRadius*_e.zoneRadius;for(let p of this.units){if(!p.alive)continue;let s=p.x-Eo,u=p.y-wn;s*s+u*u<=a&&(p.side===0?o++:r++)}this.inZone[0]=o,this.inZone[1]=r,o>0&&r===0&&(this.gauges[0]=Math.min(100,this.gauges[0]+Jc(o)*ze)),r>0&&o===0&&(this.gauges[1]=Math.min(100,this.gauges[1]+Jc(r)*ze)),this.tick++,this.gauges[0]>=100||this.gauges[1]>=100?this.finish(this.gauges[0]>=100?0:1,"capture"):this.tick>=Aa?this.judge("time"):!this.pending.length&&!this.units.some(p=>p.alive)&&Fc(this.stock[0])===0&&Fc(this.stock[1])===0&&this.judge("empty")}placesAlive(t){let e=0;for(let n of this.units)n.alive&&n.side===t&&(e+=n.places);return e}judge(t="time"){let[e,n]=this.gauges;if(e!==n){this.finish(e>n?0:1,t);return}let o=this.placesAlive(0),r=this.placesAlive(1);this.finish(o===r?-1:o>r?0:1,t)}finish(t,e){this.result={winner:t,outcome:e,tick:this.tick,gauges:[this.gauges[0],this.gauges[1]],places:[this.placesAlive(0),this.placesAlive(1)]}}spawn(t){let e=Yd(t.kind,this.up[t.side]),n=pt.troops[t.kind],o={id:this.nextId++,side:t.side,kind:t.kind,places:n.places,x:t.x,y:t.y,hp:e.hp,maxHp:e.hp,damage:e.damage,period:1/e.attackSpeed,speed:e.moveSpeed,range:e.range,radius:n.radius,mass:n.mass,sight:Math.max(Fo.aggro,e.range+2*n.radius),cd:.4,target:null,alive:!0,born:this.tick,struck:-1};return this.units.push(o),o}look(t,e){if(t.kind==="assassin"){let n=Nc(t,e,pt.assassinHunt,"archer");if(n)return n}return Nc(t,e,t.sight,null)}walk(t,e,n,o,r){if(o<=r||o<=1e-9)return;let a=Math.min(t.speed*ze,o-r);t.x+=e/o*a,t.y+=n/o*a}separate(){let t=this.grid,e=this.cell,n=this.gw;for(let p of t)p.length=0;let o=[];for(let p of this.units)p.alive&&o.push(p);for(let p=0;p<o.length;p++){let s=o[p];t[_a(s.x,e,n-1)+_a(s.y,e,this.gh-1)*n].push(p)}let r=Fo.separation;for(let p=0;p<o.length;p++){let s=o[p],u=_a(s.x,e,n-1),f=_a(s.y,e,this.gh-1);for(let l=-1;l<=1;l++){let c=f+l;if(!(c<0||c>=this.gh))for(let h=-1;h<=1;h++){let m=u+h;if(!(m<0||m>=n))for(let y of t[m+c*n]){if(y<=p)continue;let b=o[y],d=b.x-s.x,T=b.y-s.y,P=s.radius+b.radius,V=d*d+T*T;if(V>=P*P)continue;let C=Math.sqrt(V);C<1e-6&&(d=(s.id*7+b.id*13)%11/11-.5,T=.5,C=Math.sqrt(d*d+T*T));let w=(P-C)*r,x=b.mass/(s.mass+b.mass),A=1-x,S=d/C,E=T/C;s.x-=S*w*x,s.y-=E*w*x,b.x+=S*w*A,b.y+=E*w*A}}}}let a=_e.eclatRadius;for(let p of o){let s=p.x-Eo,u=p.y-wn,f=s*s+u*u,l=a+p.radius;if(f<l*l){let c=Math.sqrt(f);c<1e-6?p.y=wn+(p.side===0?-l:l):(p.x=Eo+s/c*l,p.y=wn+u/c*l)}p.x<p.radius?p.x=p.radius:p.x>_e.width-p.radius&&(p.x=_e.width-p.radius),p.y<p.radius?p.y=p.radius:p.y>_e.length-p.radius&&(p.y=_e.length-p.radius)}}},Jc=i=>Math.min(Fo.gauge.cap,Fo.gauge.base+Fo.gauge.perTroop*i),Kd=(i,t)=>i.tick!==t.tick?i.tick<t.tick:i.side!==t.side?i.side<t.side:i.seq<t.seq,_a=(i,t,e)=>{let n=Math.floor(i/t);return n<0?0:n>e?e:n};function Nc(i,t,e,n){let o=null,r=e*e;for(let a of t){if(!a.alive||a.side===i.side||n&&a.kind!==n)continue;let p=a.x-i.x,s=a.y-i.y,u=p*p+s*s;(u<r||u===r&&o&&a.id<o.id)&&(r=u,o=a)}return o}var x2=0,ju=1,D2=2;var aa=1,R2=2,Yn=3,An=0,Ke=1,Vn=2,De=0,jo=1,Gu=2,Ku=3,Wu=4,xp=5,hn=100,M2=101,v2=102,A2=103,I2=104,fi=200,O2=201,_2=202,$2=203,sp=204,up=205,pa=206,H2=207,sa=208,B2=209,k2=210,F2=211,J2=212,N2=213,X2=214,Dp=0,Rp=1,Mp=2,Go=3,vp=4,Ap=5,Ip=6,Op=7,qu=0,Q2=1,Z2=2,mo=0,_p=1,$p=2,Hp=3,Bp=4,kp=5,Fp=6,ar=7,ku="attached",z2="detached",tf=300,li=301,ci=302,Jp=303,Np=304,ua=306,tn=1e3,Fn=1001,Zi=1002,Ce=1003,Xp=1004;var hi=1005;var je=1006,pr=1007;var _n=1008;var bn=1009,ef=1010,nf=1011,sr=1012,Qp=1013,Mo=1014,Sn=1015,mn=1016,Zp=1017,zp=1018,vo=1020,of=35902,rf=35899,af=1021,pf=1022,We=1023,zi=1026,Ao=1027,Yp=1028,jp=1029,sf=1030,Gp=1031;var Kp=1033,fa=33776,la=33777,ca=33778,ha=33779,Wp=35840,qp=35841,ts=35842,es=35843,ns=36196,os=37492,is=37496,rs=37808,as=37809,ps=37810,ss=37811,us=37812,fs=37813,ls=37814,cs=37815,hs=37816,ds=37817,bs=37818,ms=37819,ys=37820,gs=37821,Ts=36492,Es=36494,Us=36495,Vs=36283,Ss=36284,Ps=36285,Ls=36286,ws=2200,Y2=2201,j2=2202,Ko=2300,Wo=2301,pp=2302,zo=2400,Yo=2401,Mr=2402,Cs=2500,G2=2501,uf=0,da=1,ur=2,K2=3200,W2=3201;var xs=0,q2=1,yo="",Ue="srgb",Be="srgb-linear",vr="linear",qt="srgb";var Zo=7680;var Fu=519,t0=512,e0=513,n0=514,ff=515,o0=516,i0=517,r0=518,a0=519,fp=35044;var lf="300 es",Mn=2e3,Ar=2001;var Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let o=n[t];if(o!==void 0){let r=o.indexOf(e);r!==-1&&o.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let o=n.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,Dr=Math.PI/180,qo=180/Math.PI;function vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function cf(i,t){return(i%t+t)%t}function Wd(i,t,e,n,o){return n+(i-t)*(o-n)/(e-t)}function qd(i,t,e){return i!==t?(e-i)/(t-i):0}function Rr(i,t,e){return(1-e)*i+e*t}function t1(i,t,e,n){return Rr(i,t,1-Math.exp(-e*n))}function e1(i,t=1){return t-Math.abs(cf(i,t*2)-t)}function n1(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function o1(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function i1(i,t){return i+Math.floor(Math.random()*(t-i+1))}function r1(i,t){return i+Math.random()*(t-i)}function a1(i){return i*(.5-Math.random())}function p1(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function s1(i){return i*Dr}function u1(i){return i*qo}function f1(i){return(i&i-1)===0&&i!==0}function l1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function h1(i,t,e,n,o){let r=Math.cos,a=Math.sin,p=r(e/2),s=a(e/2),u=r((t+n)/2),f=a((t+n)/2),l=r((t-n)/2),c=a((t-n)/2),h=r((n-t)/2),m=a((n-t)/2);switch(o){case"XYX":i.set(p*f,s*l,s*c,p*u);break;case"YZY":i.set(s*c,p*f,s*l,p*u);break;case"ZXZ":i.set(s*l,s*c,p*f,p*u);break;case"XZX":i.set(p*f,s*m,s*h,p*u);break;case"YXY":i.set(s*h,p*f,s*m,p*u);break;case"ZYZ":i.set(s*m,s*h,p*f,p*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ba={DEG2RAD:Dr,RAD2DEG:qo,generateUUID:vn,clamp:Zt,euclideanModulo:cf,mapLinear:Wd,inverseLerp:qd,lerp:Rr,damp:t1,pingpong:e1,smoothstep:n1,smootherstep:o1,randInt:i1,randFloat:r1,randFloatSpread:a1,seededRandom:p1,degToRad:s1,radToDeg:u1,isPowerOfTwo:f1,ceilPowerOfTwo:l1,floorPowerOfTwo:c1,setQuaternionFromProperEuler:h1,normalize:ne,denormalize:Rn},Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6],this.y=o[1]*e+o[4]*n+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),o=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*o+t.x,this.y=r*o+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class{constructor(t=0,e=0,n=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=o}static slerpFlat(t,e,n,o,r,a,p){let s=n[o+0],u=n[o+1],f=n[o+2],l=n[o+3],c=r[a+0],h=r[a+1],m=r[a+2],y=r[a+3];if(p===0){t[e+0]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l;return}if(p===1){t[e+0]=c,t[e+1]=h,t[e+2]=m,t[e+3]=y;return}if(l!==y||s!==c||u!==h||f!==m){let b=1-p,d=s*c+u*h+f*m+l*y,T=d>=0?1:-1,P=1-d*d;if(P>Number.EPSILON){let C=Math.sqrt(P),w=Math.atan2(C,d*T);b=Math.sin(b*w)/C,p=Math.sin(p*w)/C}let V=p*T;if(s=s*b+c*V,u=u*b+h*V,f=f*b+m*V,l=l*b+y*V,b===1-p){let C=1/Math.sqrt(s*s+u*u+f*f+l*l);s*=C,u*=C,f*=C,l*=C}}t[e]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,o,r,a){let p=n[o],s=n[o+1],u=n[o+2],f=n[o+3],l=r[a],c=r[a+1],h=r[a+2],m=r[a+3];return t[e]=p*m+f*l+s*h-u*c,t[e+1]=s*m+f*c+u*l-p*h,t[e+2]=u*m+f*h+p*c-s*l,t[e+3]=f*m-p*l-s*c-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,o){return this._x=t,this._y=e,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,o=t._y,r=t._z,a=t._order,p=Math.cos,s=Math.sin,u=p(n/2),f=p(o/2),l=p(r/2),c=s(n/2),h=s(o/2),m=s(r/2);switch(a){case"XYZ":this._x=c*f*l+u*h*m,this._y=u*h*l-c*f*m,this._z=u*f*m+c*h*l,this._w=u*f*l-c*h*m;break;case"YXZ":this._x=c*f*l+u*h*m,this._y=u*h*l-c*f*m,this._z=u*f*m-c*h*l,this._w=u*f*l+c*h*m;break;case"ZXY":this._x=c*f*l-u*h*m,this._y=u*h*l+c*f*m,this._z=u*f*m+c*h*l,this._w=u*f*l-c*h*m;break;case"ZYX":this._x=c*f*l-u*h*m,this._y=u*h*l+c*f*m,this._z=u*f*m-c*h*l,this._w=u*f*l+c*h*m;break;case"YZX":this._x=c*f*l+u*h*m,this._y=u*h*l+c*f*m,this._z=u*f*m-c*h*l,this._w=u*f*l-c*h*m;break;case"XZY":this._x=c*f*l-u*h*m,this._y=u*h*l-c*f*m,this._z=u*f*m+c*h*l,this._w=u*f*l+c*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,o=Math.sin(n);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],o=e[4],r=e[8],a=e[1],p=e[5],s=e[9],u=e[2],f=e[6],l=e[10],c=n+p+l;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-s)*h,this._y=(r-u)*h,this._z=(a-o)*h}else if(n>p&&n>l){let h=2*Math.sqrt(1+n-p-l);this._w=(f-s)/h,this._x=.25*h,this._y=(o+a)/h,this._z=(r+u)/h}else if(p>l){let h=2*Math.sqrt(1+p-n-l);this._w=(r-u)/h,this._x=(o+a)/h,this._y=.25*h,this._z=(s+f)/h}else{let h=2*Math.sqrt(1+l-n-p);this._w=(a-o)/h,this._x=(r+u)/h,this._y=(s+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let o=Math.min(1,e/n);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,o=t._y,r=t._z,a=t._w,p=e._x,s=e._y,u=e._z,f=e._w;return this._x=n*f+a*p+o*u-r*s,this._y=o*f+a*s+r*p-n*u,this._z=r*f+a*u+n*s-o*p,this._w=a*f-n*p-o*s-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,o=this._y,r=this._z,a=this._w,p=a*t._w+n*t._x+o*t._y+r*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=a,this._x=n,this._y=o,this._z=r,this;let s=1-p*p;if(s<=Number.EPSILON){let h=1-e;return this._w=h*a+e*this._w,this._x=h*n+e*this._x,this._y=h*o+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}let u=Math.sqrt(s),f=Math.atan2(u,p),l=Math.sin((1-e)*f)/u,c=Math.sin(e*f)/u;return this._w=a*l+this._w*c,this._x=n*l+this._x*c,this._y=o*l+this._y*c,this._z=r*l+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(o*Math.sin(t),o*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*o,this.y=r[1]*e+r[4]*n+r[7]*o,this.z=r[2]*e+r[5]*n+r[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*o+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*o+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*o+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*o+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,o=this.z,r=t.x,a=t.y,p=t.z,s=t.w,u=2*(a*o-p*n),f=2*(p*e-r*o),l=2*(r*n-a*e);return this.x=e+s*u+a*l-p*f,this.y=n+s*f+p*u-r*l,this.z=o+s*l+r*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*o,this.y=r[1]*e+r[5]*n+r[9]*o,this.z=r[2]*e+r[6]*n+r[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,o=t.y,r=t.z,a=e.x,p=e.y,s=e.z;return this.x=o*s-r*p,this.y=r*a-n*s,this.z=n*p-o*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hu.copy(this).projectOnVector(t),this.sub(hu)}reflect(t){return this.sub(hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,o=this.z-t.z;return e*e+n*n+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let o=Math.sin(e)*t;return this.x=o*Math.sin(n),this.y=Math.cos(e)*t,this.z=o*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new M,Qc=new we,Jt=class i{constructor(t,e,n,o,r,a,p,s,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u)}set(t,e,n,o,r,a,p,s,u){let f=this.elements;return f[0]=t,f[1]=o,f[2]=p,f[3]=e,f[4]=r,f[5]=s,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[3],s=n[6],u=n[1],f=n[4],l=n[7],c=n[2],h=n[5],m=n[8],y=o[0],b=o[3],d=o[6],T=o[1],P=o[4],V=o[7],C=o[2],w=o[5],x=o[8];return r[0]=a*y+p*T+s*C,r[3]=a*b+p*P+s*w,r[6]=a*d+p*V+s*x,r[1]=u*y+f*T+l*C,r[4]=u*b+f*P+l*w,r[7]=u*d+f*V+l*x,r[2]=c*y+h*T+m*C,r[5]=c*b+h*P+m*w,r[8]=c*d+h*V+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8];return e*a*f-e*p*u-n*r*f+n*p*s+o*r*u-o*a*s}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=f*a-p*u,c=p*s-f*r,h=u*r-a*s,m=e*l+n*c+o*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=l*y,t[1]=(o*u-f*n)*y,t[2]=(p*n-o*a)*y,t[3]=c*y,t[4]=(f*e-o*s)*y,t[5]=(o*r-p*e)*y,t[6]=h*y,t[7]=(n*s-u*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,o,r,a,p){let s=Math.cos(r),u=Math.sin(r);return this.set(n*s,n*u,-n*(s*a+u*p)+a+t,-o*u,o*s,-o*(-u*a+s*p)+p+e,0,0,1),this}scale(t,e){return this.premultiply(du.makeScale(t,e)),this}rotate(t){return this.premultiply(du.makeRotation(-t)),this}translate(t,e){return this.premultiply(du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<9;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},du=new Jt;function hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function p0(){let i=Yi("canvas");return i.style.display="block",i}var Zc={};function ji(i){i in Zc||(Zc[i]=!0,console.warn(i))}function s0(i,t,e){return new Promise(function(n,o){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d1(){let i={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(o,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qt&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yo?vr:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,a){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Be]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:zc,fromXYZ:Yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:qt,toXYZ:zc,fromXYZ:Yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var Xt=d1();function so(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mi,lp=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=Yi("canvas")),Mi.width=t.width,Mi.height=t.height;let o=Mi.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let o=n.getImageData(0,0,t.width,t.height),r=o.data;for(let a=0;a<r.length;a++)r[a]=so(r[a]/255)*255;return n.putImageData(o,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(so(e[n]/255)*255):e[n]=so(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},b1=0,Gi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let a=0,p=o.length;a<p;a++)o[a].isDataTexture?r.push(bu(o[a].image)):r.push(bu(o[a]))}else r=bu(o);n.url=r}return e||(t.images[this.uuid]=n),n}};function bu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var m1=0,mu=new M,Re=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,o=Fn,r=je,a=_n,p=We,s=bn,u=i.DEFAULT_ANISOTROPY,f=yo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=vn(),this.name="",this.source=new Gi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=p,this.internalFormat=null,this.type=s,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Zi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Zi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=tf;Re.DEFAULT_ANISOTROPY=1;var Kt=class i{constructor(t=0,e=0,n=0,o=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*o+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*o+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*o+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*o+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,o,r,s=t.elements,u=s[0],f=s[4],l=s[8],c=s[1],h=s[5],m=s[9],y=s[2],b=s[6],d=s[10];if(Math.abs(f-c)<.01&&Math.abs(l-y)<.01&&Math.abs(m-b)<.01){if(Math.abs(f+c)<.1&&Math.abs(l+y)<.1&&Math.abs(m+b)<.1&&Math.abs(u+h+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(u+1)/2,V=(h+1)/2,C=(d+1)/2,w=(f+c)/4,x=(l+y)/4,A=(m+b)/4;return P>V&&P>C?P<.01?(n=0,o=.707106781,r=.707106781):(n=Math.sqrt(P),o=w/n,r=x/n):V>C?V<.01?(n=.707106781,o=0,r=.707106781):(o=Math.sqrt(V),n=w/o,r=A/o):C<.01?(n=.707106781,o=.707106781,r=0):(r=Math.sqrt(C),n=x/r,o=A/r),this.set(n,o,r,e),this}let T=Math.sqrt((b-m)*(b-m)+(l-y)*(l-y)+(c-f)*(c-f));return Math.abs(T)<.001&&(T=1),this.x=(b-m)/T,this.y=(l-y)/T,this.z=(c-f)/T,this.w=Math.acos((u+h+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cp=class extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);let o={width:t,height:e,depth:n.depth},r=new Re(o);this.textures=[];let a=n.count;for(let p=0;p<a;p++)this.textures[p]=r.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let o=Object.assign({},t.textures[e].image);this.textures[e].source=new Gi(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends cp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ir=class extends Re{constructor(t=null,e=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hp=class extends Re{constructor(t=null,e=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xe=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,p=r.count;a<p;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(t.matrixWorld),this.union($a)}let o=t.children;for(let r=0,a=o.length;r<a;r++)this.expandByObject(o[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Ha.subVectors(this.max,Ur),vi.subVectors(t.a,Ur),Ai.subVectors(t.b,Ur),Ii.subVectors(t.c,Ur),Uo.subVectors(Ai,vi),Vo.subVectors(Ii,Ai),Jo.subVectors(vi,Ii);let e=[0,-Uo.z,Uo.y,0,-Vo.z,Vo.y,0,-Jo.z,Jo.y,Uo.z,0,-Uo.x,Vo.z,0,-Vo.x,Jo.z,0,-Jo.x,-Uo.y,Uo.x,0,-Vo.y,Vo.x,0,-Jo.y,Jo.x,0];return!yu(e,vi,Ai,Ii,Ha)||(e=[1,0,0,0,1,0,0,0,1],!yu(e,vi,Ai,Ii,Ha))?!1:(Ba.crossVectors(Uo,Vo),e=[Ba.x,Ba.y,Ba.z],yu(e,vi,Ai,Ii,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(no[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),no[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),no[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),no[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),no[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),no[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),no[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),no[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(no),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},no=[new M,new M,new M,new M,new M,new M,new M,new M],Cn=new M,$a=new Xe,vi=new M,Ai=new M,Ii=new M,Uo=new M,Vo=new M,Jo=new M,Ur=new M,Ha=new M,Ba=new M,No=new M;function yu(i,t,e,n,o){for(let r=0,a=i.length-3;r<=a;r+=3){No.fromArray(i,r);let p=o.x*Math.abs(No.x)+o.y*Math.abs(No.y)+o.z*Math.abs(No.z),s=t.dot(No),u=e.dot(No),f=n.dot(No);if(Math.max(-Math.max(s,u,f),Math.min(s,u,f))>p)return!1}return!0}var y1=new Xe,Vr=new M,gu=new M,en=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):y1.setFromPoints(t).getCenter(n);let o=0;for(let r=0,a=t.length;r<a;r++)o=Math.max(o,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);let e=Vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),o=(n-this.radius)*.5;this.center.addScaledVector(Vr,o/n),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(gu)),this.expandByPoint(Vr.copy(t.center).sub(gu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},oo=new M,Tu=new M,ka=new M,So=new M,Eu=new M,Fa=new M,Uu=new M,xo=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oo)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oo.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oo.copy(this.origin).addScaledVector(this.direction,e),oo.distanceToSquared(t))}distanceSqToSegment(t,e,n,o){Tu.copy(t).add(e).multiplyScalar(.5),ka.copy(e).sub(t).normalize(),So.copy(this.origin).sub(Tu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ka),p=So.dot(this.direction),s=-So.dot(ka),u=So.lengthSq(),f=Math.abs(1-a*a),l,c,h,m;if(f>0)if(l=a*s-p,c=a*p-s,m=r*f,l>=0)if(c>=-m)if(c<=m){let y=1/f;l*=y,c*=y,h=l*(l+a*c+2*p)+c*(a*l+c+2*s)+u}else c=r,l=Math.max(0,-(a*c+p)),h=-l*l+c*(c+2*s)+u;else c=-r,l=Math.max(0,-(a*c+p)),h=-l*l+c*(c+2*s)+u;else c<=-m?(l=Math.max(0,-(-a*r+p)),c=l>0?-r:Math.min(Math.max(-r,-s),r),h=-l*l+c*(c+2*s)+u):c<=m?(l=0,c=Math.min(Math.max(-r,-s),r),h=c*(c+2*s)+u):(l=Math.max(0,-(a*r+p)),c=l>0?r:Math.min(Math.max(-r,-s),r),h=-l*l+c*(c+2*s)+u);else c=a>0?-r:r,l=Math.max(0,-(a*c+p)),h=-l*l+c*(c+2*s)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),o&&o.copy(Tu).addScaledVector(ka,c),h}intersectSphere(t,e){oo.subVectors(t.center,this.origin);let n=oo.dot(this.direction),o=oo.dot(oo)-n*n,r=t.radius*t.radius;if(o>r)return null;let a=Math.sqrt(r-o),p=n-a,s=n+a;return s<0?null:p<0?this.at(s,e):this.at(p,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,o,r,a,p,s,u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,c=this.origin;return u>=0?(n=(t.min.x-c.x)*u,o=(t.max.x-c.x)*u):(n=(t.max.x-c.x)*u,o=(t.min.x-c.x)*u),f>=0?(r=(t.min.y-c.y)*f,a=(t.max.y-c.y)*f):(r=(t.max.y-c.y)*f,a=(t.min.y-c.y)*f),n>a||r>o||((r>n||isNaN(n))&&(n=r),(a<o||isNaN(o))&&(o=a),l>=0?(p=(t.min.z-c.z)*l,s=(t.max.z-c.z)*l):(p=(t.max.z-c.z)*l,s=(t.min.z-c.z)*l),n>s||p>o)||((p>n||n!==n)&&(n=p),(s<o||o!==o)&&(o=s),o<0)?null:this.at(n>=0?n:o,e)}intersectsBox(t){return this.intersectBox(t,oo)!==null}intersectTriangle(t,e,n,o,r){Eu.subVectors(e,t),Fa.subVectors(n,t),Uu.crossVectors(Eu,Fa);let a=this.direction.dot(Uu),p;if(a>0){if(o)return null;p=1}else if(a<0)p=-1,a=-a;else return null;So.subVectors(this.origin,t);let s=p*this.direction.dot(Fa.crossVectors(So,Fa));if(s<0)return null;let u=p*this.direction.dot(Eu.cross(So));if(u<0||s+u>a)return null;let f=-p*So.dot(Uu);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(t,e,n,o,r,a,p,s,u,f,l,c,h,m,y,b){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u,f,l,c,h,m,y,b)}set(t,e,n,o,r,a,p,s,u,f,l,c,h,m,y,b){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=o,d[1]=r,d[5]=a,d[9]=p,d[13]=s,d[2]=u,d[6]=f,d[10]=l,d[14]=c,d[3]=h,d[7]=m,d[11]=y,d[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,o=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,o=t.y,r=t.z,a=Math.cos(n),p=Math.sin(n),s=Math.cos(o),u=Math.sin(o),f=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let c=a*f,h=a*l,m=p*f,y=p*l;e[0]=s*f,e[4]=-s*l,e[8]=u,e[1]=h+m*u,e[5]=c-y*u,e[9]=-p*s,e[2]=y-c*u,e[6]=m+h*u,e[10]=a*s}else if(t.order==="YXZ"){let c=s*f,h=s*l,m=u*f,y=u*l;e[0]=c+y*p,e[4]=m*p-h,e[8]=a*u,e[1]=a*l,e[5]=a*f,e[9]=-p,e[2]=h*p-m,e[6]=y+c*p,e[10]=a*s}else if(t.order==="ZXY"){let c=s*f,h=s*l,m=u*f,y=u*l;e[0]=c-y*p,e[4]=-a*l,e[8]=m+h*p,e[1]=h+m*p,e[5]=a*f,e[9]=y-c*p,e[2]=-a*u,e[6]=p,e[10]=a*s}else if(t.order==="ZYX"){let c=a*f,h=a*l,m=p*f,y=p*l;e[0]=s*f,e[4]=m*u-h,e[8]=c*u+y,e[1]=s*l,e[5]=y*u+c,e[9]=h*u-m,e[2]=-u,e[6]=p*s,e[10]=a*s}else if(t.order==="YZX"){let c=a*s,h=a*u,m=p*s,y=p*u;e[0]=s*f,e[4]=y-c*l,e[8]=m*l+h,e[1]=l,e[5]=a*f,e[9]=-p*f,e[2]=-u*f,e[6]=h*l+m,e[10]=c-y*l}else if(t.order==="XZY"){let c=a*s,h=a*u,m=p*s,y=p*u;e[0]=s*f,e[4]=-l,e[8]=u*f,e[1]=c*l+y,e[5]=a*f,e[9]=h*l-m,e[2]=m*l-h,e[6]=p*f,e[10]=y*l+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g1,t,T1)}lookAt(t,e,n){let o=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Po.crossVectors(n,fn),Po.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Po.crossVectors(n,fn)),Po.normalize(),Ja.crossVectors(fn,Po),o[0]=Po.x,o[4]=Ja.x,o[8]=fn.x,o[1]=Po.y,o[5]=Ja.y,o[9]=fn.y,o[2]=Po.z,o[6]=Ja.z,o[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[4],s=n[8],u=n[12],f=n[1],l=n[5],c=n[9],h=n[13],m=n[2],y=n[6],b=n[10],d=n[14],T=n[3],P=n[7],V=n[11],C=n[15],w=o[0],x=o[4],A=o[8],S=o[12],E=o[1],R=o[5],I=o[9],B=o[13],X=o[2],Y=o[6],Z=o[10],nt=o[14],J=o[3],tt=o[7],ft=o[11],Ut=o[15];return r[0]=a*w+p*E+s*X+u*J,r[4]=a*x+p*R+s*Y+u*tt,r[8]=a*A+p*I+s*Z+u*ft,r[12]=a*S+p*B+s*nt+u*Ut,r[1]=f*w+l*E+c*X+h*J,r[5]=f*x+l*R+c*Y+h*tt,r[9]=f*A+l*I+c*Z+h*ft,r[13]=f*S+l*B+c*nt+h*Ut,r[2]=m*w+y*E+b*X+d*J,r[6]=m*x+y*R+b*Y+d*tt,r[10]=m*A+y*I+b*Z+d*ft,r[14]=m*S+y*B+b*nt+d*Ut,r[3]=T*w+P*E+V*X+C*J,r[7]=T*x+P*R+V*Y+C*tt,r[11]=T*A+P*I+V*Z+C*ft,r[15]=T*S+P*B+V*nt+C*Ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],o=t[8],r=t[12],a=t[1],p=t[5],s=t[9],u=t[13],f=t[2],l=t[6],c=t[10],h=t[14],m=t[3],y=t[7],b=t[11],d=t[15];return m*(+r*s*l-o*u*l-r*p*c+n*u*c+o*p*h-n*s*h)+y*(+e*s*h-e*u*c+r*a*c-o*a*h+o*u*f-r*s*f)+b*(+e*u*l-e*p*h-r*a*l+n*a*h+r*p*f-n*u*f)+d*(-o*p*f-e*s*l+e*p*c+o*a*l-n*a*c+n*s*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=t[9],c=t[10],h=t[11],m=t[12],y=t[13],b=t[14],d=t[15],T=l*b*u-y*c*u+y*s*h-p*b*h-l*s*d+p*c*d,P=m*c*u-f*b*u-m*s*h+a*b*h+f*s*d-a*c*d,V=f*y*u-m*l*u+m*p*h-a*y*h-f*p*d+a*l*d,C=m*l*s-f*y*s-m*p*c+a*y*c+f*p*b-a*l*b,w=e*T+n*P+o*V+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/w;return t[0]=T*x,t[1]=(y*c*r-l*b*r-y*o*h+n*b*h+l*o*d-n*c*d)*x,t[2]=(p*b*r-y*s*r+y*o*u-n*b*u-p*o*d+n*s*d)*x,t[3]=(l*s*r-p*c*r-l*o*u+n*c*u+p*o*h-n*s*h)*x,t[4]=P*x,t[5]=(f*b*r-m*c*r+m*o*h-e*b*h-f*o*d+e*c*d)*x,t[6]=(m*s*r-a*b*r-m*o*u+e*b*u+a*o*d-e*s*d)*x,t[7]=(a*c*r-f*s*r+f*o*u-e*c*u-a*o*h+e*s*h)*x,t[8]=V*x,t[9]=(m*l*r-f*y*r-m*n*h+e*y*h+f*n*d-e*l*d)*x,t[10]=(a*y*r-m*p*r+m*n*u-e*y*u-a*n*d+e*p*d)*x,t[11]=(f*p*r-a*l*r-f*n*u+e*l*u+a*n*h-e*p*h)*x,t[12]=C*x,t[13]=(f*y*o-m*l*o+m*n*c-e*y*c-f*n*b+e*l*b)*x,t[14]=(m*p*o-a*y*o-m*n*s+e*y*s+a*n*b-e*p*b)*x,t[15]=(a*l*o-f*p*o+f*n*s-e*l*s-a*n*c+e*p*c)*x,this}scale(t){let e=this.elements,n=t.x,o=t.y,r=t.z;return e[0]*=n,e[4]*=o,e[8]*=r,e[1]*=n,e[5]*=o,e[9]*=r,e[2]*=n,e[6]*=o,e[10]*=r,e[3]*=n,e[7]*=o,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,o))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),o=Math.sin(e),r=1-n,a=t.x,p=t.y,s=t.z,u=r*a,f=r*p;return this.set(u*a+n,u*p-o*s,u*s+o*p,0,u*p+o*s,f*p+n,f*s-o*a,0,u*s-o*p,f*s+o*a,r*s*s+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,o,r,a){return this.set(1,n,r,0,t,1,a,0,e,o,1,0,0,0,0,1),this}compose(t,e,n){let o=this.elements,r=e._x,a=e._y,p=e._z,s=e._w,u=r+r,f=a+a,l=p+p,c=r*u,h=r*f,m=r*l,y=a*f,b=a*l,d=p*l,T=s*u,P=s*f,V=s*l,C=n.x,w=n.y,x=n.z;return o[0]=(1-(y+d))*C,o[1]=(h+V)*C,o[2]=(m-P)*C,o[3]=0,o[4]=(h-V)*w,o[5]=(1-(c+d))*w,o[6]=(b+T)*w,o[7]=0,o[8]=(m+P)*x,o[9]=(b-T)*x,o[10]=(1-(c+y))*x,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,n){let o=this.elements,r=Oi.set(o[0],o[1],o[2]).length(),a=Oi.set(o[4],o[5],o[6]).length(),p=Oi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),t.x=o[12],t.y=o[13],t.z=o[14],xn.copy(this);let u=1/r,f=1/a,l=1/p;return xn.elements[0]*=u,xn.elements[1]*=u,xn.elements[2]*=u,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=l,xn.elements[9]*=l,xn.elements[10]*=l,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=p,this}makePerspective(t,e,n,o,r,a,p=Mn,s=!1){let u=this.elements,f=2*r/(e-t),l=2*r/(n-o),c=(e+t)/(e-t),h=(n+o)/(n-o),m,y;if(s)m=r/(a-r),y=a*r/(a-r);else if(p===Mn)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(p===Ar)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=l,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,o,r,a,p=Mn,s=!1){let u=this.elements,f=2/(e-t),l=2/(n-o),c=-(e+t)/(e-t),h=-(n+o)/(n-o),m,y;if(s)m=1/(a-r),y=a/(a-r);else if(p===Mn)m=-2/(a-r),y=-(a+r)/(a-r);else if(p===Ar)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=l,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<16;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Oi=new M,xn=new Rt,g1=new M(0,0,0),T1=new M(1,1,1),Po=new M,Ja=new M,fn=new M,jc=new Rt,Gc=new we,dn=class i{constructor(t=0,e=0,n=0,o=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,o=this._order){return this._x=t,this._y=e,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let o=t.elements,r=o[0],a=o[4],p=o[8],s=o[1],u=o[5],f=o[9],l=o[2],c=o[6],h=o[10];switch(e){case"XYZ":this._y=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(p,h),this._z=Math.atan2(s,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-l,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(s,r));break;case"ZYX":this._y=Math.asin(-Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(s,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(p,h));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(p,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var Ki=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E1=0,Kc=new M,_i=new we,io=new Rt,Na=new M,Sr=new M,U1=new M,V1=new we,Wc=new M(1,0,0),qc=new M(0,1,0),t2=new M(0,0,1),e2={type:"added"},S1={type:"removed"},$i={type:"childadded",child:null},Vu={type:"childremoved",child:null},be=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new M,e=new dn,n=new we,o=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Jt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(t2,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(t2,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(io.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);let o=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?io.lookAt(Sr,Na,this.up):io.lookAt(Na,Sr,this.up),this.quaternion.setFromRotationMatrix(io),o&&(io.extractRotation(o.matrixWorld),_i.setFromRotationMatrix(io),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e2),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(S1),Vu.child=t,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),io.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),io.multiply(t.parent.matrixWorld)),t.applyMatrix4(io),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e2),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,o=this.children.length;n<o;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,U1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,V1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(p,s){return p[s.uuid]===void 0&&(p[s.uuid]=s.toJSON(t)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(t.geometries,this.geometry);let p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){let s=p.shapes;if(Array.isArray(s))for(let u=0,f=s.length;u<f;u++){let l=s[u];r(t.shapes,l)}else r(t.shapes,s)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let p=[];for(let s=0,u=this.material.length;s<u;s++)p.push(r(t.materials,this.material[s]));o.material=p}else o.material=r(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){let s=this.animations[p];o.animations.push(r(t.animations,s))}}if(e){let p=a(t.geometries),s=a(t.materials),u=a(t.textures),f=a(t.images),l=a(t.shapes),c=a(t.skeletons),h=a(t.animations),m=a(t.nodes);p.length>0&&(n.geometries=p),s.length>0&&(n.materials=s),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=o,n;function a(p){let s=[];for(let u in p){let f=p[u];delete f.metadata,s.push(f)}return s}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let o=t.children[n];this.add(o.clone())}return this}};be.DEFAULT_UP=new M(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new M,ro=new M,Su=new M,ao=new M,Hi=new M,Bi=new M,n2=new M,Pu=new M,Lu=new M,wu=new M,Cu=new Kt,xu=new Kt,Du=new Kt,Co=class i{constructor(t=new M,e=new M,n=new M){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,o){o.subVectors(n,e),Dn.subVectors(t,e),o.cross(Dn);let r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(t,e,n,o,r){Dn.subVectors(o,e),ro.subVectors(n,e),Su.subVectors(t,e);let a=Dn.dot(Dn),p=Dn.dot(ro),s=Dn.dot(Su),u=ro.dot(ro),f=ro.dot(Su),l=a*u-p*p;if(l===0)return r.set(0,0,0),null;let c=1/l,h=(u*s-p*f)*c,m=(a*f-p*s)*c;return r.set(1-h-m,m,h)}static containsPoint(t,e,n,o){return this.getBarycoord(t,e,n,o,ao)===null?!1:ao.x>=0&&ao.y>=0&&ao.x+ao.y<=1}static getInterpolation(t,e,n,o,r,a,p,s){return this.getBarycoord(t,e,n,o,ao)===null?(s.x=0,s.y=0,"z"in s&&(s.z=0),"w"in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(r,ao.x),s.addScaledVector(a,ao.y),s.addScaledVector(p,ao.z),s)}static getInterpolatedAttribute(t,e,n,o,r,a){return Cu.setScalar(0),xu.setScalar(0),Du.setScalar(0),Cu.fromBufferAttribute(t,e),xu.fromBufferAttribute(t,n),Du.fromBufferAttribute(t,o),a.setScalar(0),a.addScaledVector(Cu,r.x),a.addScaledVector(xu,r.y),a.addScaledVector(Du,r.z),a}static isFrontFacing(t,e,n,o){return Dn.subVectors(n,e),ro.subVectors(t,e),Dn.cross(ro).dot(o)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,o){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,n,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ro.subVectors(this.a,this.b),Dn.cross(ro).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,o,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,o,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,o=this.b,r=this.c,a,p;Hi.subVectors(o,n),Bi.subVectors(r,n),Pu.subVectors(t,n);let s=Hi.dot(Pu),u=Bi.dot(Pu);if(s<=0&&u<=0)return e.copy(n);Lu.subVectors(t,o);let f=Hi.dot(Lu),l=Bi.dot(Lu);if(f>=0&&l<=f)return e.copy(o);let c=s*l-f*u;if(c<=0&&s>=0&&f<=0)return a=s/(s-f),e.copy(n).addScaledVector(Hi,a);wu.subVectors(t,r);let h=Hi.dot(wu),m=Bi.dot(wu);if(m>=0&&h<=m)return e.copy(r);let y=h*u-s*m;if(y<=0&&u>=0&&m<=0)return p=u/(u-m),e.copy(n).addScaledVector(Bi,p);let b=f*m-h*l;if(b<=0&&l-f>=0&&h-m>=0)return n2.subVectors(r,o),p=(l-f)/(l-f+(h-m)),e.copy(o).addScaledVector(n2,p);let d=1/(b+y+c);return a=y*d,p=c*d,e.copy(n).addScaledVector(Hi,a).addScaledVector(Bi,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lo={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Ru(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,o=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,o),this}setHSL(t,e,n,o=Xt.workingColorSpace){if(t=cf(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ru(a,r,t+1/3),this.g=Ru(a,r,t),this.b=Ru(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,o),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=o[1],p=o[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=o[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=u0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Xt.workingToColorSpace(Ne.copy(this),t),Math.round(Zt(Ne.r*255,0,255))*65536+Math.round(Zt(Ne.g*255,0,255))*256+Math.round(Zt(Ne.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,o=Ne.g,r=Ne.b,a=Math.max(n,o,r),p=Math.min(n,o,r),s,u,f=(p+a)/2;if(p===a)s=0,u=0;else{let l=a-p;switch(u=f<=.5?l/(a+p):l/(2-a-p),a){case n:s=(o-r)/l+(o<r?6:0);break;case o:s=(r-n)/l+2;break;case r:s=(n-o)/l+4;break}s/=6}return t.h=s,t.s=u,t.l=f,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ue){Xt.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,o=Ne.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(t,e,n){return this.getHSL(Lo),this.setHSL(Lo.h+t,Lo.s+e,Lo.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Lo),t.getHSL(Xa);let n=Rr(Lo.h,Xa.h,e),o=Rr(Lo.s,Xa.s,e),r=Rr(Lo.l,Xa.l,e);return this.setHSL(n,o,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,o=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*o,this.g=r[1]*e+r[4]*n+r[7]*o,this.b=r[2]*e+r[5]*n+r[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new bt;bt.NAMES=u0;var P1=0,Ge=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=jo,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=up,this.blendEquation=hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sp&&(n.blendSrc=this.blendSrc),this.blendDst!==up&&(n.blendDst=this.blendDst),this.blendEquation!==hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(r){let a=[];for(let p in r){let s=r[p];delete s.metadata,a.push(s)}return a}if(e){let r=o(t.textures),a=o(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let o=e.length;n=new Array(o);for(let r=0;r!==o;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xe=class extends Ge{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new M,Qa=new Dt,L1=0,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fp,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[t+o]=e.array[n+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,o){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),o=ne(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),o=ne(o,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fp&&(t.usage=this.usage),t}};var Or=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _r=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},w1=0,En=new Rt,Mu=new be,ki=new M,ln=new Xe,Pr=new Xe,$e=new M,Me=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?_r:Or)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Mu.lookAt(t),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let o=0,r=t.length;o<r;o++){let a=t[o];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let o=0;o<n;o++){let r=t[o];e.setXYZ(o,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,o=e.length;n<o;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let p=e[r];Pr.setFromBufferAttribute(p),this.morphTargetsRelative?($e.addVectors(ln.min,Pr.min),ln.expandByPoint($e),$e.addVectors(ln.max,Pr.max),ln.expandByPoint($e)):(ln.expandByPoint(Pr.min),ln.expandByPoint(Pr.max))}ln.getCenter(n);let o=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),o=Math.max(o,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let p=e[r],s=this.morphTargetsRelative;for(let u=0,f=p.count;u<f;u++)$e.fromBufferAttribute(p,u),s&&(ki.fromBufferAttribute(t,u),$e.add(ki)),o=Math.max(o,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,o=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),p=[],s=[];for(let A=0;A<n.count;A++)p[A]=new M,s[A]=new M;let u=new M,f=new M,l=new M,c=new Dt,h=new Dt,m=new Dt,y=new M,b=new M;function d(A,S,E){u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),l.fromBufferAttribute(n,E),c.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),m.fromBufferAttribute(r,E),f.sub(u),l.sub(u),h.sub(c),m.sub(c);let R=1/(h.x*m.y-m.x*h.y);isFinite(R)&&(y.copy(f).multiplyScalar(m.y).addScaledVector(l,-h.y).multiplyScalar(R),b.copy(l).multiplyScalar(h.x).addScaledVector(f,-m.x).multiplyScalar(R),p[A].add(y),p[S].add(y),p[E].add(y),s[A].add(b),s[S].add(b),s[E].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let A=0,S=T.length;A<S;++A){let E=T[A],R=E.start,I=E.count;for(let B=R,X=R+I;B<X;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let P=new M,V=new M,C=new M,w=new M;function x(A){C.fromBufferAttribute(o,A),w.copy(C);let S=p[A];P.copy(S),P.sub(C.multiplyScalar(C.dot(S))).normalize(),V.crossVectors(w,S);let R=V.dot(s[A])<0?-1:1;a.setXYZW(A,P.x,P.y,P.z,R)}for(let A=0,S=T.length;A<S;++A){let E=T[A],R=E.start,I=E.count;for(let B=R,X=R+I;B<X;B+=3)x(t.getX(B+0)),x(t.getX(B+1)),x(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let o=new M,r=new M,a=new M,p=new M,s=new M,u=new M,f=new M,l=new M;if(t)for(let c=0,h=t.count;c<h;c+=3){let m=t.getX(c+0),y=t.getX(c+1),b=t.getX(c+2);o.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,b),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),p.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),p.add(f),s.add(f),u.add(f),n.setXYZ(m,p.x,p.y,p.z),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(b,u.x,u.y,u.z)}else for(let c=0,h=e.count;c<h;c+=3)o.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(p,s){let u=p.array,f=p.itemSize,l=p.normalized,c=new u.constructor(s.length*f),h=0,m=0;for(let y=0,b=s.length;y<b;y++){p.isInterleavedBufferAttribute?h=s[y]*p.data.stride+p.offset:h=s[y]*f;for(let d=0;d<f;d++)c[m++]=u[h++]}return new Ee(c,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,o=this.attributes;for(let p in o){let s=o[p],u=t(s,n);e.setAttribute(p,u)}let r=this.morphAttributes;for(let p in r){let s=[],u=r[p];for(let f=0,l=u.length;f<l;f++){let c=u[f],h=t(c,n);s.push(h)}e.morphAttributes[p]=s}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let p=0,s=a.length;p<s;p++){let u=a[p];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let s=this.parameters;for(let u in s)s[u]!==void 0&&(t[u]=s[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let s in n){let u=n[s];t.data.attributes[s]=u.toJSON(t.data)}let o={},r=!1;for(let s in this.morphAttributes){let u=this.morphAttributes[s],f=[];for(let l=0,c=u.length;l<c;l++){let h=u[l];f.push(h.toJSON(t.data))}f.length>0&&(o[s]=f,r=!0)}r&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let o=t.attributes;for(let u in o){let f=o[u];this.setAttribute(u,f.clone(e))}let r=t.morphAttributes;for(let u in r){let f=[],l=r[u];for(let c=0,h=l.length;c<h;c++)f.push(l[c].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,f=a.length;u<f;u++){let l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}let p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());let s=t.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},o2=new Rt,Xo=new xo,Za=new en,i2=new M,za=new M,Ya=new M,ja=new M,vu=new M,Ga=new M,r2=new M,Ka=new M,he=class extends be{constructor(t=new Me,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}getVertexPosition(t,e){let n=this.geometry,o=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(o,t);let p=this.morphTargetInfluences;if(r&&p){Ga.set(0,0,0);for(let s=0,u=r.length;s<u;s++){let f=p[s],l=r[s];f!==0&&(vu.fromBufferAttribute(l,t),a?Ga.addScaledVector(vu,f):Ga.addScaledVector(vu.sub(e),f))}e.add(Ga)}return e}raycast(t,e){let n=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Xo.copy(t.ray).recast(t.near),!(Za.containsPoint(Xo.origin)===!1&&(Xo.intersectSphere(Za,i2)===null||Xo.origin.distanceToSquared(i2)>(t.far-t.near)**2))&&(o2.copy(r).invert(),Xo.copy(t.ray).applyMatrix4(o2),!(n.boundingBox!==null&&Xo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xo)))}_computeIntersections(t,e,n){let o,r=this.geometry,a=this.material,p=r.index,s=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,l=r.attributes.normal,c=r.groups,h=r.drawRange;if(p!==null)if(Array.isArray(a))for(let m=0,y=c.length;m<y;m++){let b=c[m],d=a[b.materialIndex],T=Math.max(b.start,h.start),P=Math.min(p.count,Math.min(b.start+b.count,h.start+h.count));for(let V=T,C=P;V<C;V+=3){let w=p.getX(V),x=p.getX(V+1),A=p.getX(V+2);o=Wa(this,d,t,n,u,f,l,w,x,A),o&&(o.faceIndex=Math.floor(V/3),o.face.materialIndex=b.materialIndex,e.push(o))}}else{let m=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=m,d=y;b<d;b+=3){let T=p.getX(b),P=p.getX(b+1),V=p.getX(b+2);o=Wa(this,a,t,n,u,f,l,T,P,V),o&&(o.faceIndex=Math.floor(b/3),e.push(o))}}else if(s!==void 0)if(Array.isArray(a))for(let m=0,y=c.length;m<y;m++){let b=c[m],d=a[b.materialIndex],T=Math.max(b.start,h.start),P=Math.min(s.count,Math.min(b.start+b.count,h.start+h.count));for(let V=T,C=P;V<C;V+=3){let w=V,x=V+1,A=V+2;o=Wa(this,d,t,n,u,f,l,w,x,A),o&&(o.faceIndex=Math.floor(V/3),o.face.materialIndex=b.materialIndex,e.push(o))}}else{let m=Math.max(0,h.start),y=Math.min(s.count,h.start+h.count);for(let b=m,d=y;b<d;b+=3){let T=b,P=b+1,V=b+2;o=Wa(this,a,t,n,u,f,l,T,P,V),o&&(o.faceIndex=Math.floor(b/3),e.push(o))}}}};function C1(i,t,e,n,o,r,a,p){let s;if(t.side===Ke?s=n.intersectTriangle(a,r,o,!0,p):s=n.intersectTriangle(o,r,a,t.side===An,p),s===null)return null;Ka.copy(p),Ka.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ka);return u<e.near||u>e.far?null:{distance:u,point:Ka.clone(),object:i}}function Wa(i,t,e,n,o,r,a,p,s,u){i.getVertexPosition(p,za),i.getVertexPosition(s,Ya),i.getVertexPosition(u,ja);let f=C1(i,t,e,n,za,Ya,ja,r2);if(f){let l=new M;Co.getBarycoord(r2,za,Ya,ja,l),o&&(f.uv=Co.getInterpolatedAttribute(o,p,s,u,l,new Dt)),r&&(f.uv1=Co.getInterpolatedAttribute(r,p,s,u,l,new Dt)),a&&(f.normal=Co.getInterpolatedAttribute(a,p,s,u,l,new M),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:p,b:s,c:u,normal:new M,materialIndex:0};Co.getNormal(za,Ya,ja,c.normal),f.face=c,f.barycoord=l}return f}var ti=class i extends Me{constructor(t=1,e=1,n=1,o=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:o,heightSegments:r,depthSegments:a};let p=this;o=Math.floor(o),r=Math.floor(r),a=Math.floor(a);let s=[],u=[],f=[],l=[],c=0,h=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,o,a,2),m("x","z","y",1,-1,t,n,-e,o,a,3),m("x","y","z",1,-1,t,e,n,o,r,4),m("x","y","z",-1,-1,t,e,-n,o,r,5),this.setIndex(s),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(l,2));function m(y,b,d,T,P,V,C,w,x,A,S){let E=V/x,R=C/A,I=V/2,B=C/2,X=w/2,Y=x+1,Z=A+1,nt=0,J=0,tt=new M;for(let ft=0;ft<Z;ft++){let Ut=ft*R-B;for(let Ht=0;Ht<Y;Ht++){let Wt=Ht*E-I;tt[y]=Wt*T,tt[b]=Ut*P,tt[d]=X,u.push(tt.x,tt.y,tt.z),tt[y]=0,tt[b]=0,tt[d]=w>0?1:-1,f.push(tt.x,tt.y,tt.z),l.push(Ht/x),l.push(1-ft/A),nt+=1}}for(let ft=0;ft<A;ft++)for(let Ut=0;Ut<x;Ut++){let Ht=c+Ut+Y*ft,Wt=c+Ut+Y*(ft+1),ee=c+(Ut+1)+Y*(ft+1),jt=c+(Ut+1)+Y*ft;s.push(Ht,Wt,jt),s.push(Wt,ee,jt),J+=6}p.addGroup(h,J,S),h+=J,c+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let o=i[e][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=o.clone():Array.isArray(o)?t[e][n]=o.slice():t[e][n]=o}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=di(i[e]);for(let o in n)t[o]=n[o]}return t}function x1(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function df(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Pn={clone:di,merge:Qe},D1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Ge{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=x1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let o in this.uniforms){let a=this.uniforms[o].value;a&&a.isTexture?e.uniforms[o]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[o]={type:"m4",value:a.toArray()}:e.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},$r=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wo=new M,a2=new Dt,p2=new Dt,Le=class extends $r{constructor(t=50,e=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wo.x,wo.y).multiplyScalar(-t/wo.z),wo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wo.x,wo.y).multiplyScalar(-t/wo.z)}getViewSize(t,e){return this.getViewBounds(t,a2,p2),e.subVectors(p2,a2)}setViewOffset(t,e,n,o,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,o=this.aspect*n,r=-.5*o,a=this.view;if(this.view!==null&&this.view.enabled){let s=a.fullWidth,u=a.fullHeight;r+=a.offsetX*o/s,e-=a.offsetY*n/u,o*=a.width/s,n*=a.height/u}let p=this.filmOffset;p!==0&&(r+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fi=-90,Ji=1,dp=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new Le(Fi,Ji,t,e);o.layers=this.layers,this.add(o);let r=new Le(Fi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Le(Fi,Ji,t,e);a.layers=this.layers,this.add(a);let p=new Le(Fi,Ji,t,e);p.layers=this.layers,this.add(p);let s=new Le(Fi,Ji,t,e);s.layers=this.layers,this.add(s);let u=new Le(Fi,Ji,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,o,r,a,p,s]=e;for(let u of e)this.remove(u);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,p,s,u,f]=this.children,l=t.getRenderTarget(),c=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,o),t.render(e,r),t.setRenderTarget(n,1,o),t.render(e,a),t.setRenderTarget(n,2,o),t.render(e,p),t.setRenderTarget(n,3,o),t.render(e,s),t.setRenderTarget(n,4,o),t.render(e,u),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,o),t.render(e,f),t.setRenderTarget(l,c,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Hr=class extends Re{constructor(t=[],e=li,n,o,r,a,p,s,u,f){super(t,e,n,o,r,a,p,s,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bp=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},o=[n,n,n,n,n,n];this.texture=new Hr(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ti(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:De});r.uniforms.tEquirect.value=e;let a=new he(o,r),p=e.minFilter;return e.minFilter===_n&&(e.minFilter=je),new dp(1,10,this).update(t,a),e.minFilter=p,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,o=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,o);t.setRenderTarget(r)}},cn=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},M1={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let o=null,r=null,a=null,p=this._targetRay,s=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let y of t.hand.values()){let b=e.getJointPose(y,n),d=this._getHandJoint(u,y);b!==null&&(d.matrix.fromArray(b.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=b.radius),d.visible=b!==null}let f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],c=f.position.distanceTo(l.position),h=.02,m=.005;u.inputState.pinching&&c>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else s!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1));p!==null&&(o=e.getPose(t.targetRaySpace,n),o===null&&r!==null&&(o=r),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return p!==null&&(p.visible=o!==null),s!==null&&(s.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ei=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Br=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},qi=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fp,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let o=0,r=this.stride;o<r;o++)this.array[t+o]=e.array[n+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new M,tr=class i{constructor(t,e,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),o=ne(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),o=ne(o,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var s2=new M,u2=new Kt,f2=new Kt,v1=new M,l2=new Rt,qa=new M,Au=new en,c2=new Rt,Iu=new xo,kr=class extends he{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ku,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qa),this.boundingBox.expandByPoint(qa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qa),this.boundingSphere.expandByPoint(qa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,o=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Au.copy(this.boundingSphere),Au.applyMatrix4(o),t.ray.intersectsSphere(Au)!==!1&&(c2.copy(o).invert(),Iu.copy(t.ray).applyMatrix4(c2),!(this.boundingBox!==null&&Iu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Iu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Kt,e=this.geometry.attributes.skinWeight;for(let n=0,o=e.count;n<o;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===z2?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,o=this.geometry;u2.fromBufferAttribute(o.attributes.skinIndex,t),f2.fromBufferAttribute(o.attributes.skinWeight,t),s2.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=f2.getComponent(r);if(a!==0){let p=u2.getComponent(r);l2.multiplyMatrices(n.bones[p].matrixWorld,n.boneInverses[p]),e.addScaledVector(v1.copy(s2).applyMatrix4(l2),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},er=class extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}},uo=class extends Re{constructor(t=null,e=1,n=1,o,r,a,p,s,u=Ce,f=Ce,l,c){super(null,a,p,s,u,f,o,r,l,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},h2=new Rt,A1=new Rt,Fr=class i{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,o=this.bones.length;n<o;n++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Rt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,o=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let p=t[r]?t[r].matrixWorld:A1;h2.multiplyMatrices(p,e[r]),h2.toArray(n,r*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new uo(e,t,t,We,Sn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let o=this.bones[e];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,o=t.bones.length;n<o;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new er),this.bones.push(a),this.boneInverses.push(new Rt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let o=0,r=e.length;o<r;o++){let a=e[o];t.bones.push(a.uuid);let p=n[o];t.boneInverses.push(p.toArray())}return t}},Do=class extends Ee{constructor(t,e,n,o=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new Rt,d2=new Rt,tp=[],b2=new Xe,I1=new Rt,Lr=new he,wr=new en,In=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,I1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),b2.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(b2)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),wr.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,o=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let p=0;p<n.length;p++)n[p]=o[a+p]}raycast(t,e){let n=this.matrixWorld,o=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),t.ray.intersectsSphere(wr)!==!1))for(let r=0;r<o;r++){this.getMatrixAt(r,Ni),d2.multiplyMatrices(n,Ni),Lr.matrixWorld=d2,Lr.raycast(t,tp);for(let a=0,p=tp.length;a<p;a++){let s=tp[a];s.instanceId=r,s.object=this,e.push(s)}tp.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new uo(new Float32Array(o*this.count),o,this.count,Yp,Sn));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let p=this.geometry.morphTargetsRelative?1:1-a,s=o*t;r[s]=p,r.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ou=new M,O1=new M,_1=new Jt,Un=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,o){return this.normal.set(t,e,n),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let o=Ou.subVectors(n,e).cross(O1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ou),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_1.getNormalMatrix(t),o=this.coplanarPoint(Ou).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qo=new en,$1=new Dt(.5,.5),ep=new M,nr=class{constructor(t=new Un,e=new Un,n=new Un,o=new Un,r=new Un,a=new Un){this.planes=[t,e,n,o,r,a]}set(t,e,n,o,r,a){let p=this.planes;return p[0].copy(t),p[1].copy(e),p[2].copy(n),p[3].copy(o),p[4].copy(r),p[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let o=this.planes,r=t.elements,a=r[0],p=r[1],s=r[2],u=r[3],f=r[4],l=r[5],c=r[6],h=r[7],m=r[8],y=r[9],b=r[10],d=r[11],T=r[12],P=r[13],V=r[14],C=r[15];if(o[0].setComponents(u-a,h-f,d-m,C-T).normalize(),o[1].setComponents(u+a,h+f,d+m,C+T).normalize(),o[2].setComponents(u+p,h+l,d+y,C+P).normalize(),o[3].setComponents(u-p,h-l,d-y,C-P).normalize(),n)o[4].setComponents(s,c,b,V).normalize(),o[5].setComponents(u-s,h-c,d-b,C-V).normalize();else if(o[4].setComponents(u-s,h-c,d-b,C-V).normalize(),e===Mn)o[5].setComponents(u+s,h+c,d+b,C+V).normalize();else if(e===Ar)o[5].setComponents(s,c,b,V).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qo)}intersectsSprite(t){Qo.center.set(0,0,0);let e=$1.distanceTo(t.center);return Qo.radius=.7071067811865476+e,Qo.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qo)}intersectsSphere(t){let e=this.planes,n=t.center,o=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<o)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let o=e[n];if(ep.x=o.normal.x>0?t.max.x:t.min.x,ep.y=o.normal.y>0?t.max.y:t.min.y,ep.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ep)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends Ge{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},mp=new M,yp=new M,m2=new Rt,Cr=new xo,np=new en,_u=new M,y2=new M,ni=class extends be{constructor(t=new Me,e=new or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let o=1,r=e.count;o<r;o++)mp.fromBufferAttribute(e,o-1),yp.fromBufferAttribute(e,o),n[o]=n[o-1],n[o]+=mp.distanceTo(yp);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),np.copy(n.boundingSphere),np.applyMatrix4(o),np.radius+=r,t.ray.intersectsSphere(np)===!1)return;m2.copy(o).invert(),Cr.copy(t.ray).applyMatrix4(m2);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){let h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let y=h,b=m-1;y<b;y+=u){let d=f.getX(y),T=f.getX(y+1),P=op(this,t,Cr,s,d,T,y);P&&e.push(P)}if(this.isLineLoop){let y=f.getX(m-1),b=f.getX(h),d=op(this,t,Cr,s,y,b,m-1);d&&e.push(d)}}else{let h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let y=h,b=m-1;y<b;y+=u){let d=op(this,t,Cr,s,y,y+1,y);d&&e.push(d)}if(this.isLineLoop){let y=op(this,t,Cr,s,m-1,h,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function op(i,t,e,n,o,r,a){let p=i.geometry.attributes.position;if(mp.fromBufferAttribute(p,o),yp.fromBufferAttribute(p,r),e.distanceSqToSegment(mp,yp,_u,y2)>n)return;_u.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(_u);if(!(u<t.near||u>t.far))return{distance:u,point:y2.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var g2=new M,T2=new M,Jr=class extends ni{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let o=0,r=e.count;o<r;o+=2)g2.fromBufferAttribute(e,o),T2.fromBufferAttribute(e,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+g2.distanceTo(T2);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Nr=class extends ni{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends Ge{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},E2=new Rt,Ju=new xo,ip=new en,rp=new M,Xr=class extends be{constructor(t=new Me,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ip.copy(n.boundingSphere),ip.applyMatrix4(o),ip.radius+=r,t.ray.intersectsSphere(ip)===!1)return;E2.copy(o).invert(),Ju.copy(t.ray).applyMatrix4(E2);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=n.index,l=n.attributes.position;if(u!==null){let c=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let m=c,y=h;m<y;m++){let b=u.getX(m);rp.fromBufferAttribute(l,b),U2(rp,b,s,o,t,e,this)}}else{let c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let m=c,y=h;m<y;m++)rp.fromBufferAttribute(l,m),U2(rp,m,s,o,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function U2(i,t,e,n,o,r,a){let p=Ju.distanceSqToPoint(i);if(p<e){let s=new M;Ju.closestPointToPoint(i,s),s.applyMatrix4(n);let u=o.ray.origin.distanceTo(s);if(u<o.near||u>o.far)return;r.push({distance:u,distanceToRay:Math.sqrt(p),point:s,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends Re{constructor(t,e,n,o,r,a,p,s,u){super(t,e,n,o,r,a,p,s,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class extends Re{constructor(t,e,n=Mo,o,r,a,p=Ce,s=Ce,u,f=zi,l=1){if(f!==zi&&f!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:t,height:e,depth:l};super(c,o,r,a,p,s,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zr=class extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ii=class i extends Me{constructor(t=1,e=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:o},e=Math.max(3,e);let r=[],a=[],p=[],s=[],u=new M,f=new Dt;a.push(0,0,0),p.push(0,0,1),s.push(.5,.5);for(let l=0,c=3;l<=e;l++,c+=3){let h=n+l/e*o;u.x=t*Math.cos(h),u.y=t*Math.sin(h),a.push(u.x,u.y,u.z),p.push(0,0,1),f.x=(a[c]/t+1)/2,f.y=(a[c+1]/t+1)/2,s.push(f.x,f.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(p,3)),this.setAttribute("uv",new fe(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ri=class i extends Me{constructor(t=1,e=1,n=1,o=32,r=1,a=!1,p=0,s=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:o,heightSegments:r,openEnded:a,thetaStart:p,thetaLength:s};let u=this;o=Math.floor(o),r=Math.floor(r);let f=[],l=[],c=[],h=[],m=0,y=[],b=n/2,d=0;T(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(f),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2));function T(){let V=new M,C=new M,w=0,x=(e-t)/n;for(let A=0;A<=r;A++){let S=[],E=A/r,R=E*(e-t)+t;for(let I=0;I<=o;I++){let B=I/o,X=B*s+p,Y=Math.sin(X),Z=Math.cos(X);C.x=R*Y,C.y=-E*n+b,C.z=R*Z,l.push(C.x,C.y,C.z),V.set(Y,x,Z).normalize(),c.push(V.x,V.y,V.z),h.push(B,1-E),S.push(m++)}y.push(S)}for(let A=0;A<o;A++)for(let S=0;S<r;S++){let E=y[S][A],R=y[S+1][A],I=y[S+1][A+1],B=y[S][A+1];(t>0||S!==0)&&(f.push(E,R,B),w+=3),(e>0||S!==r-1)&&(f.push(R,I,B),w+=3)}u.addGroup(d,w,0),d+=w}function P(V){let C=m,w=new Dt,x=new M,A=0,S=V===!0?t:e,E=V===!0?1:-1;for(let I=1;I<=o;I++)l.push(0,b*E,0),c.push(0,E,0),h.push(.5,.5),m++;let R=m;for(let I=0;I<=o;I++){let X=I/o*s+p,Y=Math.cos(X),Z=Math.sin(X);x.x=S*Z,x.y=b*E,x.z=S*Y,l.push(x.x,x.y,x.z),c.push(0,E,0),w.x=Y*.5+.5,w.y=Z*.5*E+.5,h.push(w.x,w.y),m++}for(let I=0;I<o;I++){let B=C+I,X=R+I;V===!0?f.push(X,X+1,B):f.push(X+1,X,B),A+=3}u.addGroup(d,A,V===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ro=class i extends Me{constructor(t=1,e=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:o};let r=t/2,a=e/2,p=Math.floor(n),s=Math.floor(o),u=p+1,f=s+1,l=t/p,c=e/s,h=[],m=[],y=[],b=[];for(let d=0;d<f;d++){let T=d*c-a;for(let P=0;P<u;P++){let V=P*l-r;m.push(V,-T,0),y.push(0,0,1),b.push(P/p),b.push(1-d/s)}}for(let d=0;d<s;d++)for(let T=0;T<p;T++){let P=T+u*d,V=T+u*(d+1),C=T+1+u*(d+1),w=T+1+u*d;h.push(P,V,w),h.push(V,C,w)}this.setIndex(h),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ai=class i extends Me{constructor(t=.5,e=1,n=32,o=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:o,thetaStart:r,thetaLength:a},n=Math.max(3,n),o=Math.max(1,o);let p=[],s=[],u=[],f=[],l=t,c=(e-t)/o,h=new M,m=new Dt;for(let y=0;y<=o;y++){for(let b=0;b<=n;b++){let d=r+b/n*a;h.x=l*Math.cos(d),h.y=l*Math.sin(d),s.push(h.x,h.y,h.z),u.push(0,0,1),m.x=(h.x/e+1)/2,m.y=(h.y/e+1)/2,f.push(m.x,m.y)}l+=c}for(let y=0;y<o;y++){let b=y*(n+1);for(let d=0;d<n;d++){let T=d+b,P=T,V=T+n+1,C=T+n+2,w=T+1;p.push(P,V,w),p.push(V,C,w)}}this.setIndex(p),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var zr=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},On=class extends Ge{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},nn=class extends On{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Yr=class extends Ge{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var gp=class extends Ge{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tp=class extends Ge{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ap(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function H1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function B1(i){function t(o,r){return i[o]-i[r]}let e=i.length,n=new Array(e);for(let o=0;o!==e;++o)n[o]=o;return n.sort(t),n}function V2(i,t,e){let n=i.length,o=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let p=e[r]*t;for(let s=0;s!==t;++s)o[a++]=i[p+s]}return o}function f0(i,t,e,n){let o=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[o++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[o++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[o++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[o++];while(r!==void 0)}var fo=class{constructor(t,e,n,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,o=e[n],r=e[n-1];t:{e:{let a;n:{o:if(!(t<o)){for(let p=n+2;;){if(o===void 0){if(t<r)break o;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===p)break;if(r=o,o=e[++n],t<o)break e}a=e.length;break n}if(!(t>=r)){let p=e[1];t<p&&(n=2,r=p);for(let s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(o=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let p=n+a>>>1;t<e[p]?a=p:n=p+1}if(o=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,o)}return this.interpolate_(n,r,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o;for(let a=0;a!==o;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ep=class extends fo{constructor(t,e,n,o){super(t,e,n,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zo,endingEnd:zo}}intervalChanged_(t,e,n){let o=this.parameterPositions,r=t-2,a=t+1,p=o[r],s=o[a];if(p===void 0)switch(this.getSettings_().endingStart){case Yo:r=t,p=2*e-n;break;case Mr:r=o.length-2,p=e+o[r]-o[r+1];break;default:r=t,p=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Yo:a=t,s=2*n-e;break;case Mr:a=1,s=n+o[1]-o[0];break;default:a=t-1,s=e}let u=(n-e)*.5,f=this.valueSize;this._weightPrev=u/(e-p),this._weightNext=u/(s-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=this._offsetPrev,l=this._offsetNext,c=this._weightPrev,h=this._weightNext,m=(n-e)/(o-e),y=m*m,b=y*m,d=-c*b+2*c*y-c*m,T=(1+c)*b+(-1.5-2*c)*y+(-.5+c)*m+1,P=(-1-h)*b+(1.5+h)*y+.5*m,V=h*b-h*y;for(let C=0;C!==p;++C)r[C]=d*a[f+C]+T*a[u+C]+P*a[s+C]+V*a[l+C];return r}},jr=class extends fo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=(n-e)/(o-e),l=1-f;for(let c=0;c!==p;++c)r[c]=a[u+c]*l+a[s+c]*f;return r}},Up=class extends fo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ap(e,this.TimeBufferType),this.values=ap(n,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ap(t.times,Array),values:ap(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(n.interpolation=o)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Up(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ep(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ko:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case pp:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return pp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]*=t}return this}trim(t,e){let n=this.times,o=n.length,r=0,a=o-1;for(;r!==o&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==o){r>=a&&(a=Math.max(a,1),r=a-1);let p=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*p,a*p)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,o=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let p=0;p!==r;p++){let s=n[p];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,p,s),t=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,p,s,a),t=!1;break}a=s}if(o!==void 0&&H1(o))for(let p=0,s=o.length;p!==s;++p){let u=o[p];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,p,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),o=this.getInterpolation()===pp,r=t.length-1,a=1;for(let p=1;p<r;++p){let s=!1,u=t[p],f=t[p+1];if(u!==f&&(p!==1||u!==t[0]))if(o)s=!0;else{let l=p*n,c=l-n,h=l+n;for(let m=0;m!==n;++m){let y=e[l+m];if(y!==e[c+m]||y!==e[h+m]){s=!0;break}}}if(s){if(p!==a){t[a]=t[p];let l=p*n,c=a*n;for(let h=0;h!==n;++h)e[c+h]=e[l+h]}++a}}if(r>0){t[a]=t[r];for(let p=r*n,s=a*n,u=0;u!==n;++u)e[s+u]=e[p+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,o=new n(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Wo;var lo=class extends on{constructor(t,e,n){super(t,e,n)}};lo.prototype.ValueTypeName="bool";lo.prototype.ValueBufferType=Array;lo.prototype.DefaultInterpolation=Ko;lo.prototype.InterpolantFactoryMethodLinear=void 0;lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends on{constructor(t,e,n,o){super(t,e,n,o)}};Gr.prototype.ValueTypeName="color";var Xn=class extends on{constructor(t,e,n,o){super(t,e,n,o)}};Xn.prototype.ValueTypeName="number";var Vp=class extends fo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=(n-e)/(o-e),u=t*p;for(let f=u+p;u!==f;u+=4)we.slerpFlat(r,0,a,u-p,a,u,s);return r}},Qn=class extends on{constructor(t,e,n,o){super(t,e,n,o)}InterpolantFactoryMethodLinear(t){return new Vp(this.times,this.values,this.getValueSize(),t)}};Qn.prototype.ValueTypeName="quaternion";Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends on{constructor(t,e,n){super(t,e,n)}};co.prototype.ValueTypeName="string";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=Ko;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends on{constructor(t,e,n,o){super(t,e,n,o)}};Zn.prototype.ValueTypeName="vector";var pi=class{constructor(t="",e=-1,n=[],o=Cs){this.name=t,this.tracks=n,this.duration=e,this.blendMode=o,this.uuid=vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,o=1/(t.fps||1);for(let a=0,p=n.length;a!==p;++a)e.push(F1(n[a]).scale(o));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,o={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(on.toJSON(n[r]));return o}static CreateFromMorphTargetSequence(t,e,n,o){let r=e.length,a=[];for(let p=0;p<r;p++){let s=[],u=[];s.push((p+r-1)%r,p,(p+1)%r),u.push(0,1,0);let f=B1(s);s=V2(s,1,f),u=V2(u,1,f),!o&&s[0]===0&&(s.push(r),u.push(u[0])),a.push(new Xn(".morphTargetInfluences["+e[p].name+"]",s,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let o=t;n=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<n.length;o++)if(n[o].name===e)return n[o];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let o={},r=/^([\w-]*?)([\d]+)$/;for(let p=0,s=t.length;p<s;p++){let u=t[p],f=u.name.match(r);if(f&&f.length>1){let l=f[1],c=o[l];c||(o[l]=c=[]),c.push(u)}}let a=[];for(let p in o)a.push(this.CreateFromMorphTargetSequence(p,o[p],e,n));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(l,c,h,m,y){if(h.length!==0){let b=[],d=[];f0(h,b,d,m),b.length!==0&&y.push(new l(c,b,d))}},o=[],r=t.name||"default",a=t.fps||30,p=t.blendMode,s=t.length||-1,u=t.hierarchy||[];for(let l=0;l<u.length;l++){let c=u[l].keys;if(!(!c||c.length===0))if(c[0].morphTargets){let h={},m;for(m=0;m<c.length;m++)if(c[m].morphTargets)for(let y=0;y<c[m].morphTargets.length;y++)h[c[m].morphTargets[y]]=-1;for(let y in h){let b=[],d=[];for(let T=0;T!==c[m].morphTargets.length;++T){let P=c[m];b.push(P.time),d.push(P.morphTarget===y?1:0)}o.push(new Xn(".morphTargetInfluence["+y+"]",b,d))}s=h.length*a}else{let h=".bones["+e[l].name+"]";n(Zn,h+".position",c,"pos",o),n(Qn,h+".quaternion",c,"rot",o),n(Zn,h+".scale",c,"scl",o)}}return o.length===0?null:new this(r,s,o,p)}resetDuration(){let t=this.tracks,e=0;for(let n=0,o=t.length;n!==o;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function k1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xn;case"vector":case"vector2":case"vector3":case"vector4":return Zn;case"color":return Gr;case"quaternion":return Qn;case"bool":case"boolean":return lo;case"string":return co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function F1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=k1(i.type);if(i.times===void 0){let e=[],n=[];f0(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Jn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Sp=class{constructor(t,e,n){let o=this,r=!1,a=0,p=0,s,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){p++,r===!1&&o.onStart!==void 0&&o.onStart(f,a,p),r=!0},this.itemEnd=function(f){a++,o.onProgress!==void 0&&o.onProgress(f,a,p),a===p&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return s?s(f):f},this.setURLModifier=function(f){return s=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){let l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,c=u.length;l<c;l+=2){let h=u[l],m=u[l+1];if(h.global&&(h.lastIndex=0),h.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},l0=new Sp,zn=class{constructor(t){this.manager=t!==void 0?t:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(o,r){n.load(t,o,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var po={},Nu=class extends Error{constructor(t,e){super(t),this.response=e}},rr=class extends zn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Jn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(po[t]!==void 0){po[t].push({onLoad:e,onProgress:n,onError:o});return}po[t]=[],po[t].push({onLoad:e,onProgress:n,onError:o});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,s=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let f=po[t],l=u.body.getReader(),c=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),h=c?parseInt(c):0,m=h!==0,y=0,b=new ReadableStream({start(d){T();function T(){l.read().then(({done:P,value:V})=>{if(P)d.close();else{y+=V.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:h});for(let w=0,x=f.length;w<x;w++){let A=f[w];A.onProgress&&A.onProgress(C)}d.enqueue(V),T()}},P=>{d.error(P)})}}});return new Response(b)}else throw new Nu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(s){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,p));case"json":return u.json();default:if(p==="")return u.text();{let l=/charset="?([^;"\s]*)"?/i.exec(p),c=l&&l[1]?l[1].toLowerCase():void 0,h=new TextDecoder(c);return u.arrayBuffer().then(m=>h.decode(m))}}}).then(u=>{Jn.add(`file:${t}`,u);let f=po[t];delete po[t];for(let l=0,c=f.length;l<c;l++){let h=f[l];h.onLoad&&h.onLoad(u)}}).catch(u=>{let f=po[t];if(f===void 0)throw this.manager.itemError(t),u;delete po[t];for(let l=0,c=f.length;l<c;l++){let h=f[l];h.onError&&h.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Xi=new WeakMap,Pp=class extends zn{constructor(t){super(t)}load(t,e,n,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Jn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let l=Xi.get(a);l===void 0&&(l=[],Xi.set(a,l)),l.push({onLoad:e,onError:o})}return a}let p=Yi("img");function s(){f(),e&&e(this);let l=Xi.get(this)||[];for(let c=0;c<l.length;c++){let h=l[c];h.onLoad&&h.onLoad(this)}Xi.delete(this),r.manager.itemEnd(t)}function u(l){f(),o&&o(l),Jn.remove(`image:${t}`);let c=Xi.get(this)||[];for(let h=0;h<c.length;h++){let m=c[h];m.onError&&m.onError(l)}Xi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){p.removeEventListener("load",s,!1),p.removeEventListener("error",u,!1)}return p.addEventListener("load",s,!1),p.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,p),r.manager.itemStart(t),p.src=t,p}};var Kr=class extends zn{constructor(t){super(t)}load(t,e,n,o){let r=new Re,a=new Pp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(p){r.image=p,r.needsUpdate=!0,e!==void 0&&e(r)},n,o),r}},si=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Wr=class extends si{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},$u=new Rt,S2=new M,P2=new M,qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;S2.setFromMatrixPosition(t.matrixWorld),e.position.copy(S2),P2.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(P2),e.updateMatrixWorld(),$u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($u)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xu=class extends qr{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=qo*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||o!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=o,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ta=class extends si{constructor(t,e,n=0,o=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=o,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},L2=new Rt,xr=new M,Hu=new M,Qu=class extends qr{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,o=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),Hu.copy(n.position),Hu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hu),n.updateMatrixWorld(),o.makeTranslation(-xr.x,-xr.y,-xr.z),L2.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L2,n.coordinateSystem,n.reversedDepth)}},ea=class extends si{constructor(t,e,n=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new Qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ho=class extends $r{constructor(t=-1,e=1,n=1,o=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=o,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,o,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2,r=n-t,a=n+t,p=o+e,s=o-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,p-=f*this.view.offsetY,s=p-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,p,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zu=class extends qr{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ui=class extends si{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Bu=new WeakMap,na=class extends zn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Jn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{if(Bu.has(a)===!0)o&&o(Bu.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(u),r.manager.itemEnd(t),u});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}let p={};p.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",p.headers=this.requestHeader,p.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(t,p).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Jn.add(`image-bitmap:${t}`,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){o&&o(u),Bu.set(s,u),Jn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,s),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lp=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},oa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var wp=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let o,r,a;switch(e){case"quaternion":o=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":o=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:o=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=o,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,o=this.valueSize,r=t*o+o,a=this.cumulativeWeight;if(a===0){for(let p=0;p!==o;++p)n[r+p]=n[p];a=e}else{a+=e;let p=e/a;this._mixBufferRegion(n,r,0,p,o)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,o=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,o,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,o=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,p=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let s=e*this._origIndex;this._mixBufferRegion(n,o,s,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,o,this._addIndex*e,1,e);for(let s=e,u=e+e;s!==u;++s)if(n[s]!==n[s+e]){p.setValue(n,o);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,o=n*this._origIndex;t.getValue(e,o);for(let r=n,a=o;r!==a;++r)e[r]=e[o+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,o,r){if(o>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,o){we.slerpFlat(t,e,t,e,t,n,o)}_slerpAdditive(t,e,n,o,r){let a=this._workIndex*r;we.multiplyQuaternionsFlat(t,a,t,e,t,n),we.slerpFlat(t,e,t,e,t,a,o)}_lerp(t,e,n,o,r){let a=1-o;for(let p=0;p!==r;++p){let s=e+p;t[s]=t[s]*a+t[n+p]*o}}_lerpAdditive(t,e,n,o,r){for(let a=0;a!==r;++a){let p=e+a;t[p]=t[p]+t[n+a]*o}}},bf="\\[\\]\\.:\\/",J1=new RegExp("["+bf+"]","g"),mf="[^"+bf+"]",N1="[^"+bf.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",mf),Q1=/(WCOD+)?/.source.replace("WCOD",N1),Z1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),z1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),Y1=new RegExp("^"+X1+Q1+Z1+z1+"$"),j1=["material","materials","bones","map"],zu=class{constructor(t,e,n){let o=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,o=this._bindings[n];o!==void 0&&o.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let o=this._targetGroup.nCachedObjects_,r=n.length;o!==r;++o)n[o].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J1,"")}static parseTrackName(t){let e=Y1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=n.nodeName&&n.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let r=n.nodeName.substring(o+1);j1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,o),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let p=r[a];if(p.name===e||p.uuid===e)return p;let s=n(p.children);if(s)return s}return null},o=n(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)t[e++]=n[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,o=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let p=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?p=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(p=this.Versioning.MatrixWorldNeedsUpdate);let s=this.BindingType.Direct;if(r!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}s=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(s=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(s=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[s],this.setValue=this.SetterByBindingTypeAndVersioning[s][p]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=zu;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cp=class{constructor(t,e,n=null,o=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=o;let r=e.tracks,a=r.length,p=new Array(a),s={endingStart:zo,endingEnd:zo};for(let u=0;u!==a;++u){let f=r[u].createInterpolant(null);p[u]=f,f.settings=s}this._interpolantSettings=s,this._interpolants=p,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Y2,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let o=this._clip.duration,r=t._clip.duration,a=r/o,p=o/r;t.warp(1,a,e),this.warp(p,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let o=this._mixer,r=o.time,a=this.timeScale,p=this._timeScaleInterpolant;p===null&&(p=o._lendControlInterpolant(),this._timeScaleInterpolant=p);let s=p.parameterPositions,u=p.sampleValues;return s[0]=r,s[1]=r+n,u[0]=t/a,u[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,o){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let s=(t-r)*n;s<0||n===0?e=0:(this._startTime=null,e=n*s)}e*=this._updateTimeScale(t);let a=this._updateTime(e),p=this._updateWeight(t);if(p>0){let s=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case G2:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulateAdditive(p);break;case Cs:default:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulate(o,p)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,o=this.time+t,r=this._loopCount,a=n===j2;if(t===0)return r===-1?o:a&&(r&1)===1?e-o:o;if(n===ws){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(o>=e)o=e;else if(o<0)o=0;else{this.time=o;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),o>=e||o<0){let p=Math.floor(o/e);o-=e*p,r+=Math.abs(p);let s=this.repetitions-r;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=t>0?e:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(s===1){let u=t<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:p})}}else this.time=o;if(a&&(r&1)===1)return e-o}return o}_setEndings(t,e,n){let o=this._interpolantSettings;n?(o.endingStart=Yo,o.endingEnd=Yo):(t?o.endingStart=this.zeroSlopeAtStart?Yo:zo:o.endingStart=Mr,e?o.endingEnd=this.zeroSlopeAtEnd?Yo:zo:o.endingEnd=Mr)}_scheduleFading(t,e,n){let o=this._mixer,r=o.time,a=this._weightInterpolant;a===null&&(a=o._lendControlInterpolant(),this._weightInterpolant=a);let p=a.parameterPositions,s=a.sampleValues;return p[0]=r,s[0]=e,p[1]=r+t,s[1]=n,this}},G1=new Float32Array(1),ia=class extends Nn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,o=t._clip.tracks,r=o.length,a=t._propertyBindings,p=t._interpolants,s=n.uuid,u=this._bindingsByRootAndName,f=u[s];f===void 0&&(f={},u[s]=f);for(let l=0;l!==r;++l){let c=o[l],h=c.name,m=f[h];if(m!==void 0)++m.referenceCount,a[l]=m;else{if(m=a[l],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,s,h));continue}let y=e&&e._propertyBindings[l].binding.parsedPath;m=new wp(pe.create(n,h,y),c.ValueTypeName,c.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,s,h),a[l]=m}p[l].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,o=t._clip.uuid,r=this._actionsByClip[o];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,o,n)}let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let o=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let p=a.knownActions;t._byClipCacheIndex=p.length,p.push(t)}t._cacheIndex=o.length,o.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],o=t._cacheIndex;n._cacheIndex=o,e[o]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,p=a[r],s=p.knownActions,u=s[s.length-1],f=t._byClipCacheIndex;u._byClipCacheIndex=f,s[f]=u,s.pop(),t._byClipCacheIndex=null;let l=p.actionByRoot,c=(t._localRoot||this._root).uuid;delete l[c],s.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,o=this._nActiveActions++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,o=--this._nActiveActions,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let o=this._bindingsByRootAndName,r=this._bindings,a=o[e];a===void 0&&(a={},o[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,o=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,p=a[o],s=e[e.length-1],u=t._cacheIndex;s._cacheIndex=u,e[u]=s,e.pop(),delete p[r],Object.keys(p).length===0&&delete a[o]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,o=this._nActiveBindings++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,o=--this._nActiveBindings,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new jr(new Float32Array(2),new Float32Array(2),1,G1),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,o=--this._nActiveControlInterpolants,r=e[o];t.__cacheIndex=o,e[o]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let o=e||this._root,r=o.uuid,a=typeof t=="string"?pi.findByName(o,t):t,p=a!==null?a.uuid:t,s=this._actionsByClip[p],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cs),s!==void 0){let l=s.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=s.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let f=new Cp(this,a,e,n);return this._bindAction(f,u),this._addInactiveAction(f,p,r),f}existingAction(t,e){let n=e||this._root,o=n.uuid,r=typeof t=="string"?pi.findByName(n,t):t,a=r?r.uuid:t,p=this._actionsByClip[a];return p!==void 0&&p.actionByRoot[o]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,o=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(o,t,r,a);let p=this._bindings,s=this._nActiveBindings;for(let u=0;u!==s;++u)p[u].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,o=this._actionsByClip,r=o[n];if(r!==void 0){let a=r.knownActions;for(let p=0,s=a.length;p!==s;++p){let u=a[p];this._deactivateAction(u);let f=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=f,e[f]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete o[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let p=n[a].actionByRoot,s=p[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let o=this._bindingsByRootAndName,r=o[e];if(r!==void 0)for(let a in r){let p=r[a];p.restoreOriginalState(),this._removeInactiveBinding(p)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var w2=new Rt,ra=class{constructor(t,e,n=0,o=1/0){this.ray=new xo(t,e),this.near=n,this.far=o,this.camera=null,this.layers=new Ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return w2.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w2),this}intersectObject(t,e=!0,n=[]){return Yu(t,this,n,e),n.sort(C2),n}intersectObjects(t,e=!0,n=[]){for(let o=0,r=t.length;o<r;o++)Yu(t[o],this,n,e);return n.sort(C2),n}};function C2(i,t){return i.distance-t.distance}function Yu(i,t,e,n){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(o=!1),o===!0&&n===!0){let r=i.children;for(let a=0,p=r.length;a<p;a++)Yu(r[a],t,e,!0)}}function yf(i,t,e,n){let o=K1(n);switch(e){case af:return i*t;case Yp:return i*t/o.components*o.byteLength;case jp:return i*t/o.components*o.byteLength;case sf:return i*t*2/o.components*o.byteLength;case Gp:return i*t*2/o.components*o.byteLength;case pf:return i*t*3/o.components*o.byteLength;case We:return i*t*4/o.components*o.byteLength;case Kp:return i*t*4/o.components*o.byteLength;case fa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qp:case es:return Math.max(i,16)*Math.max(t,8)/4;case Wp:case ts:return Math.max(i,8)*Math.max(t,8)/2;case ns:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case as:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ps:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ss:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case us:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ls:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ds:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ms:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ys:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ts:case Es:case Us:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vs:case Ss:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ps:case Ls:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K1(i){switch(i){case bn:case ef:return{byteLength:1,components:1};case sr:case nf:case mn:return{byteLength:2,components:1};case Zp:case zp:return{byteLength:2,components:4};case Mo:case Qp:case Sn:return{byteLength:4,components:1};case of:case rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function _0(){let i=null,t=!1,e=null,n=null;function o(r,a){e(r,a),n=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ib(i){let t=new WeakMap;function e(p,s){let u=p.array,f=p.usage,l=u.byteLength,c=i.createBuffer();i.bindBuffer(s,c),i.bufferData(s,u,f),p.onUploadCallback();let h;if(u instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=i.HALF_FLOAT;else if(u instanceof Uint16Array)p.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=i.SHORT;else if(u instanceof Uint32Array)h=i.UNSIGNED_INT;else if(u instanceof Int32Array)h=i.INT;else if(u instanceof Int8Array)h=i.BYTE;else if(u instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:p.version,size:l}}function n(p,s,u){let f=s.array,l=s.updateRanges;if(i.bindBuffer(u,p),l.length===0)i.bufferSubData(u,0,f);else{l.sort((h,m)=>h.start-m.start);let c=0;for(let h=1;h<l.length;h++){let m=l[c],y=l[h];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++c,l[c]=y)}l.length=c+1;for(let h=0,m=l.length;h<m;h++){let y=l[h];i.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}s.clearUpdateRanges()}s.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function r(p){p.isInterleavedBufferAttribute&&(p=p.data);let s=t.get(p);s&&(i.deleteBuffer(s.buffer),t.delete(p))}function a(p,s){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){let f=t.get(p);(!f||f.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}let u=t.get(p);if(u===void 0)t.set(p,e(p,s));else if(u.version<p.version){if(u.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,p,s),u.version=p.version}}return{get:o,remove:r,update:a}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",_b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,by=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:rb,alphahash_pars_fragment:ab,alphamap_fragment:pb,alphamap_pars_fragment:sb,alphatest_fragment:ub,alphatest_pars_fragment:fb,aomap_fragment:lb,aomap_pars_fragment:cb,batching_pars_vertex:hb,batching_vertex:db,begin_vertex:bb,beginnormal_vertex:mb,bsdfs:yb,iridescence_fragment:gb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:Ub,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:Sb,color_fragment:Pb,color_pars_fragment:Lb,color_pars_vertex:wb,color_vertex:Cb,common:xb,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Rb,displacementmap_pars_vertex:Mb,displacementmap_vertex:vb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Ib,colorspace_fragment:Ob,colorspace_pars_fragment:_b,envmap_fragment:$b,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Bb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:Kb,envmap_vertex:Fb,fog_vertex:Jb,fog_pars_vertex:Nb,fog_fragment:Xb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:zb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:jb,lights_pars_begin:Gb,lights_toon_fragment:Wb,lights_toon_pars_fragment:qb,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:om,lights_fragment_begin:im,lights_fragment_maps:rm,lights_fragment_end:am,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:fm,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:dm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:mm,morphinstance_vertex:ym,morphcolor_vertex:gm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Em,morphtarget_vertex:Um,normal_fragment_begin:Vm,normal_fragment_maps:Sm,normal_pars_fragment:Pm,normal_pars_vertex:Lm,normal_vertex:wm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Mm,opaque_fragment:vm,packing:Am,premultiplied_alpha_fragment:Im,project_vertex:Om,dithering_fragment:_m,dithering_pars_fragment:$m,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Fm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Nm,skinbase_vertex:Xm,skinning_pars_vertex:Qm,skinning_vertex:Zm,skinnormal_vertex:zm,specularmap_fragment:Ym,specularmap_pars_fragment:jm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Km,transmission_fragment:Wm,transmission_pars_fragment:qm,uv_pars_fragment:ty,uv_pars_vertex:ey,uv_vertex:ny,worldpos_vertex:oy,background_vert:iy,background_frag:ry,backgroundCube_vert:ay,backgroundCube_frag:py,cube_vert:sy,cube_frag:uy,depth_vert:fy,depth_frag:ly,distanceRGBA_vert:cy,distanceRGBA_frag:hy,equirect_vert:dy,equirect_frag:by,linedashed_vert:my,linedashed_frag:yy,meshbasic_vert:gy,meshbasic_frag:Ty,meshlambert_vert:Ey,meshlambert_frag:Uy,meshmatcap_vert:Vy,meshmatcap_frag:Sy,meshnormal_vert:Py,meshnormal_frag:Ly,meshphong_vert:wy,meshphong_frag:Cy,meshphysical_vert:xy,meshphysical_frag:Dy,meshtoon_vert:Ry,meshtoon_frag:My,points_vert:vy,points_frag:Ay,shadow_vert:Iy,shadow_frag:Oy,sprite_vert:_y,sprite_frag:$y},ut={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},jn={basic:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new bt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Qe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Qe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new bt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Qe([ut.points,ut.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Qe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Qe([ut.common,ut.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Qe([ut.sprite,ut.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Qe([ut.common,ut.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Qe([ut.lights,ut.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};jn.physical={uniforms:Qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Ds={r:0,b:0,g:0},bi=new dn,Hy=new Rt;function By(i,t,e,n,o,r,a){let p=new bt(0),s=r===!0?0:1,u,f,l=null,c=0,h=null;function m(P){let V=P.isScene===!0?P.background:null;return V&&V.isTexture&&(V=(P.backgroundBlurriness>0?e:t).get(V)),V}function y(P){let V=!1,C=m(P);C===null?d(p,s):C&&C.isColor&&(d(C,1),V=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||V)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(P,V){let C=m(V);C&&(C.isCubeTexture||C.mapping===ua)?(f===void 0&&(f=new he(new ti(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:di(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),bi.copy(V.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(bi)),f.material.toneMapped=Xt.getTransfer(C.colorSpace)!==qt,(l!==C||c!==C.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,l=C,c=C.version,h=i.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new he(new Ro(2,2),new Ve({name:"BackgroundMaterial",uniforms:di(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,u.material.toneMapped=Xt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(l!==C||c!==C.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,l=C,c=C.version,h=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function d(P,V){P.getRGB(Ds,df(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,V,a)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return p},setClearColor:function(P,V=1){p.set(P),s=V,d(p,s)},getClearAlpha:function(){return s},setClearAlpha:function(P){s=P,d(p,s)},render:y,addToRenderList:b,dispose:T}}function ky(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=c(null),r=o,a=!1;function p(E,R,I,B,X){let Y=!1,Z=l(B,I,R);r!==Z&&(r=Z,u(r.object)),Y=h(E,B,I,X),Y&&m(E,B,I,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,V(E,R,I,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function s(){return i.createVertexArray()}function u(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function l(E,R,I){let B=I.wireframe===!0,X=n[E.id];X===void 0&&(X={},n[E.id]=X);let Y=X[R.id];Y===void 0&&(Y={},X[R.id]=Y);let Z=Y[B];return Z===void 0&&(Z=c(s()),Y[B]=Z),Z}function c(E){let R=[],I=[],B=[];for(let X=0;X<e;X++)R[X]=0,I[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:B,object:E,attributes:{},index:null}}function h(E,R,I,B){let X=r.attributes,Y=R.attributes,Z=0,nt=I.getAttributes();for(let J in nt)if(nt[J].location>=0){let ft=X[J],Ut=Y[J];if(Ut===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Ut=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Ut=E.instanceColor)),ft===void 0||ft.attribute!==Ut||Ut&&ft.data!==Ut.data)return!0;Z++}return r.attributesNum!==Z||r.index!==B}function m(E,R,I,B){let X={},Y=R.attributes,Z=0,nt=I.getAttributes();for(let J in nt)if(nt[J].location>=0){let ft=Y[J];ft===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(ft=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(ft=E.instanceColor));let Ut={};Ut.attribute=ft,ft&&ft.data&&(Ut.data=ft.data),X[J]=Ut,Z++}r.attributes=X,r.attributesNum=Z,r.index=B}function y(){let E=r.newAttributes;for(let R=0,I=E.length;R<I;R++)E[R]=0}function b(E){d(E,0)}function d(E,R){let I=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;I[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),X[E]!==R&&(i.vertexAttribDivisor(E,R),X[E]=R)}function T(){let E=r.newAttributes,R=r.enabledAttributes;for(let I=0,B=R.length;I<B;I++)R[I]!==E[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function P(E,R,I,B,X,Y,Z){Z===!0?i.vertexAttribIPointer(E,R,I,X,Y):i.vertexAttribPointer(E,R,I,B,X,Y)}function V(E,R,I,B){y();let X=B.attributes,Y=I.getAttributes(),Z=R.defaultAttributeValues;for(let nt in Y){let J=Y[nt];if(J.location>=0){let tt=X[nt];if(tt===void 0&&(nt==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),nt==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),tt!==void 0){let ft=tt.normalized,Ut=tt.itemSize,Ht=t.get(tt);if(Ht===void 0)continue;let Wt=Ht.buffer,ee=Ht.type,jt=Ht.bytesPerElement,j=ee===i.INT||ee===i.UNSIGNED_INT||tt.gpuType===Qp;if(tt.isInterleavedBufferAttribute){let K=tt.data,ht=K.stride,Ct=tt.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<J.locationSize;mt++)d(J.location+mt,K.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<J.locationSize;mt++)b(J.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<J.locationSize;mt++)P(J.location+mt,Ut/J.locationSize,ee,ft,ht*jt,(Ct+Ut/J.locationSize*mt)*jt,j)}else{if(tt.isInstancedBufferAttribute){for(let K=0;K<J.locationSize;K++)d(J.location+K,tt.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let K=0;K<J.locationSize;K++)b(J.location+K);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let K=0;K<J.locationSize;K++)P(J.location+K,Ut/J.locationSize,ee,ft,Ut*jt,Ut/J.locationSize*K*jt,j)}}else if(Z!==void 0){let ft=Z[nt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(J.location,ft);break;case 3:i.vertexAttrib3fv(J.location,ft);break;case 4:i.vertexAttrib4fv(J.location,ft);break;default:i.vertexAttrib1fv(J.location,ft)}}}}T()}function C(){A();for(let E in n){let R=n[E];for(let I in R){let B=R[I];for(let X in B)f(B[X].object),delete B[X];delete R[I]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let R=n[E.id];for(let I in R){let B=R[I];for(let X in B)f(B[X].object),delete B[X];delete R[I]}delete n[E.id]}function x(E){for(let R in n){let I=n[R];if(I[E.id]===void 0)continue;let B=I[E.id];for(let X in B)f(B[X].object),delete B[X];delete I[E.id]}}function A(){S(),a=!0,r!==o&&(r=o,u(r.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:A,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:b,disableUnusedAttributes:T}}function Fy(i,t,e){let n;function o(u){n=u}function r(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,l){l!==0&&(i.drawArraysInstanced(n,u,f,l),e.update(f,n,l))}function p(u,f,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,l);let h=0;for(let m=0;m<l;m++)h+=f[m];e.update(h,n,1)}function s(u,f,l,c){if(l===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)a(u[m],f[m],c[m]);else{h.multiDrawArraysInstancedWEBGL(n,u,0,f,0,c,0,l);let m=0;for(let y=0;y<l;y++)m+=f[y]*c[y];e.update(m,n,1)}}this.setMode=o,this.render=r,this.renderInstances=a,this.renderMultiDraw=p,this.renderMultiDrawInstances=s}function Jy(i,t,e,n){let o;function r(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(x){return!(x!==We&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(x){let A=x===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==bn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==Sn&&!A)}function s(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",f=s(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let l=e.logarithmicDepthBuffer===!0,c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),V=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,textureFormatReadable:a,textureTypeReadable:p,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:b,maxAttributes:d,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:V,vertexTextures:C,maxSamples:w}}function Ny(i){let t=this,e=null,n=0,o=!1,r=!1,a=new Un,p=new Jt,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(l,c){let h=l.length!==0||c||n!==0||o;return o=c,n=l.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,c){e=f(l,c,0)},this.setState=function(l,c,h){let m=l.clippingPlanes,y=l.clipIntersection,b=l.clipShadows,d=i.get(l);if(!o||m===null||m.length===0||r&&!b)r?f(null):u();else{let T=r?0:n,P=T*4,V=d.clippingState||null;s.value=V,V=f(m,c,P,h);for(let C=0;C!==P;++C)V[C]=e[C];d.clippingState=V,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function u(){s.value!==e&&(s.value=e,s.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(l,c,h,m){let y=l!==null?l.length:0,b=null;if(y!==0){if(b=s.value,m!==!0||b===null){let d=h+y*4,T=c.matrixWorldInverse;p.getNormalMatrix(T),(b===null||b.length<d)&&(b=new Float32Array(d));for(let P=0,V=h;P!==y;++P,V+=4)a.copy(l[P]).applyMatrix4(T,p),a.normal.toArray(b,V),b[V+3]=a.constant}s.value=b,s.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,b}}function Xy(i){let t=new WeakMap;function e(a,p){return p===Jp?a.mapping=li:p===Np&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){let p=a.mapping;if(p===Jp||p===Np)if(t.has(a)){let s=t.get(a).texture;return e(s,a.mapping)}else{let s=a.image;if(s&&s.height>0){let u=new bp(s.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",o),e(u.texture,a.mapping)}else return null}}return a}function o(a){let p=a.target;p.removeEventListener("dispose",o);let s=t.get(p);s!==void 0&&(t.delete(p),s.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var lr=4,c0=[.125,.215,.35,.446,.526,.582],gi=20,gf=new ho,h0=new bt,Tf=null,Ef=0,Uf=0,Vf=!1,yi=(1+Math.sqrt(5))/2,fr=1/yi,d0=[new M(-yi,fr,0),new M(yi,fr,0),new M(-fr,0,yi),new M(fr,0,yi),new M(0,yi,-fr),new M(0,yi,fr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Qy=new M,vs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,o=100,r={}){let{size:a=256,position:p=Qy}=r;Tf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,o,s,p),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tf,Ef,Uf),this._renderer.xr.enabled=Vf,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:mn,format:We,colorSpace:Be,depthBuffer:!1},o=b0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zy(r)),this._blurMaterial=zy(r,t,e)}return o}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,gf)}_sceneToCubeUV(t,e,n,o,r){let s=new Le(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(h0),l.toneMapping=mo,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(o),l.clearDepth(),l.setRenderTarget(null));let y=new xe({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),b=new he(new ti,y),d=!1,T=t.background;T?T.isColor&&(y.color.copy(T),t.background=null,d=!0):(y.color.copy(h0),d=!0);for(let P=0;P<6;P++){let V=P%3;V===0?(s.up.set(0,u[P],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+f[P],r.y,r.z)):V===1?(s.up.set(0,0,u[P]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+f[P],r.z)):(s.up.set(0,u[P],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+f[P]));let C=this._cubeSize;Rs(o,V*C,P>2?C:0,C,C),l.setRenderTarget(o),d&&l.render(b,s),l.render(t,s)}b.geometry.dispose(),b.material.dispose(),l.toneMapping=h,l.autoClear=c,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,o=t.mapping===li||t.mapping===ci;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());let r=o?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],r),p=r.uniforms;p.envMap.value=t;let s=this._cubeSize;Rs(e,0,0,3*s,2*s),n.setRenderTarget(e),n.render(a,gf)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let o=this._lodPlanes.length;for(let r=1;r<o;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),p=d0[(o-r-1)%d0.length];this._blur(t,r-1,r,a,p)}e.autoClear=n}_blur(t,e,n,o,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,o,"latitudinal",r),this._halfBlur(a,t,n,n,o,"longitudinal",r)}_halfBlur(t,e,n,o,r,a,p){let s=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,l=new he(this._lodPlanes[o],u),c=u.uniforms,h=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*gi-1),y=r/m,b=isFinite(r)?1+Math.floor(f*y):gi;b>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${gi}`);let d=[],T=0;for(let x=0;x<gi;++x){let A=x/y,S=Math.exp(-A*A/2);d.push(S),x===0?T+=S:x<b&&(T+=2*S)}for(let x=0;x<d.length;x++)d[x]=d[x]/T;c.envMap.value=t.texture,c.samples.value=b,c.weights.value=d,c.latitudinal.value=a==="latitudinal",p&&(c.poleAxis.value=p);let{_lodMax:P}=this;c.dTheta.value=m,c.mipInt.value=P-n;let V=this._sizeLods[o],C=3*V*(o>P-lr?o-P+lr:0),w=4*(this._cubeSize-V);Rs(e,C,w,3*V,2*V),s.setRenderTarget(e),s.render(l,gf)}};function Zy(i){let t=[],e=[],n=[],o=i,r=i-lr+1+c0.length;for(let a=0;a<r;a++){let p=Math.pow(2,o);e.push(p);let s=1/p;a>i-lr?s=c0[a-i+lr-1]:a===0&&(s=0),n.push(s);let u=1/(p-2),f=-u,l=1+u,c=[f,f,l,f,l,l,f,f,l,l,f,l],h=6,m=6,y=3,b=2,d=1,T=new Float32Array(y*m*h),P=new Float32Array(b*m*h),V=new Float32Array(d*m*h);for(let w=0;w<h;w++){let x=w%3*2/3-1,A=w>2?0:-1,S=[x,A,0,x+2/3,A,0,x+2/3,A+1,0,x,A,0,x+2/3,A+1,0,x,A+1,0];T.set(S,y*m*w),P.set(c,b*m*w);let E=[w,w,w,w,w,w];V.set(E,d*m*w)}let C=new Me;C.setAttribute("position",new Ee(T,y)),C.setAttribute("uv",new Ee(P,b)),C.setAttribute("faceIndex",new Ee(V,d)),t.push(C),o>lr&&o--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function b0(i,t,e){let n=new ke(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,t,e,n,o){i.viewport.set(t,e,n,o),i.scissor.set(t,e,n,o)}function zy(i,t,e){let n=new Float32Array(gi),o=new M(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:De,depthTest:!1,depthWrite:!1})}function m0(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:De,depthTest:!1,depthWrite:!1})}function y0(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:De,depthTest:!1,depthWrite:!1})}function vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yy(i){let t=new WeakMap,e=null;function n(p){if(p&&p.isTexture){let s=p.mapping,u=s===Jp||s===Np,f=s===li||s===ci;if(u||f){let l=t.get(p),c=l!==void 0?l.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==c)return e===null&&(e=new vs(i)),l=u?e.fromEquirectangular(p,l):e.fromCubemap(p,l),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),l.texture;if(l!==void 0)return l.texture;{let h=p.image;return u&&h&&h.height>0||f&&h&&o(h)?(e===null&&(e=new vs(i)),l=u?e.fromEquirectangular(p):e.fromCubemap(p),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),p.addEventListener("dispose",r),l.texture):null}}}return p}function o(p){let s=0,u=6;for(let f=0;f<u;f++)p[f]!==void 0&&s++;return s===u}function r(p){let s=p.target;s.removeEventListener("dispose",r);let u=t.get(s);u!==void 0&&(t.delete(s),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return t[n]=o,o}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let o=e(n);return o===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Gy(i,t,e,n){let o={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&t.remove(c.index);for(let m in c.attributes)t.remove(c.attributes[m]);c.removeEventListener("dispose",a),delete o[c.id];let h=r.get(c);h&&(t.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function p(l,c){return o[c.id]===!0||(c.addEventListener("dispose",a),o[c.id]=!0,e.memory.geometries++),c}function s(l){let c=l.attributes;for(let h in c)t.update(c[h],i.ARRAY_BUFFER)}function u(l){let c=[],h=l.index,m=l.attributes.position,y=0;if(h!==null){let T=h.array;y=h.version;for(let P=0,V=T.length;P<V;P+=3){let C=T[P+0],w=T[P+1],x=T[P+2];c.push(C,w,w,x,x,C)}}else if(m!==void 0){let T=m.array;y=m.version;for(let P=0,V=T.length/3-1;P<V;P+=3){let C=P+0,w=P+1,x=P+2;c.push(C,w,w,x,x,C)}}else return;let b=new(hf(c)?_r:Or)(c,1);b.version=y;let d=r.get(l);d&&t.remove(d),r.set(l,b)}function f(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&u(l)}else u(l);return r.get(l)}return{get:p,update:s,getWireframeAttribute:f}}function Ky(i,t,e){let n;function o(c){n=c}let r,a;function p(c){r=c.type,a=c.bytesPerElement}function s(c,h){i.drawElements(n,h,r,c*a),e.update(h,n,1)}function u(c,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,c*a,m),e.update(h,n,m))}function f(c,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,c,0,m);let b=0;for(let d=0;d<m;d++)b+=h[d];e.update(b,n,1)}function l(c,h,m,y){if(m===0)return;let b=t.get("WEBGL_multi_draw");if(b===null)for(let d=0;d<c.length;d++)u(c[d]/a,h[d],y[d]);else{b.multiDrawElementsInstancedWEBGL(n,h,0,r,c,0,y,0,m);let d=0;for(let T=0;T<m;T++)d+=h[T]*y[T];e.update(d,n,1)}}this.setMode=o,this.setIndex=p,this.render=s,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=l}function Wy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,p){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=p*(r/3);break;case i.LINES:e.lines+=p*(r/2);break;case i.LINE_STRIP:e.lines+=p*(r-1);break;case i.LINE_LOOP:e.lines+=p*r;break;case i.POINTS:e.points+=p*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:n}}function qy(i,t,e){let n=new WeakMap,o=new Kt;function r(a,p,s){let u=a.morphTargetInfluences,f=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,l=f!==void 0?f.length:0,c=n.get(p);if(c===void 0||c.count!==l){let S=function(){x.dispose(),n.delete(p),p.removeEventListener("dispose",S)};c!==void 0&&c.texture.dispose();let h=p.morphAttributes.position!==void 0,m=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],d=p.morphAttributes.normal||[],T=p.morphAttributes.color||[],P=0;h===!0&&(P=1),m===!0&&(P=2),y===!0&&(P=3);let V=p.attributes.position.count*P,C=1;V>t.maxTextureSize&&(C=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);let w=new Float32Array(V*C*4*l),x=new Ir(w,V,C,l);x.type=Sn,x.needsUpdate=!0;let A=P*4;for(let E=0;E<l;E++){let R=b[E],I=d[E],B=T[E],X=V*C*4*E;for(let Y=0;Y<R.count;Y++){let Z=Y*A;h===!0&&(o.fromBufferAttribute(R,Y),w[X+Z+0]=o.x,w[X+Z+1]=o.y,w[X+Z+2]=o.z,w[X+Z+3]=0),m===!0&&(o.fromBufferAttribute(I,Y),w[X+Z+4]=o.x,w[X+Z+5]=o.y,w[X+Z+6]=o.z,w[X+Z+7]=0),y===!0&&(o.fromBufferAttribute(B,Y),w[X+Z+8]=o.x,w[X+Z+9]=o.y,w[X+Z+10]=o.z,w[X+Z+11]=B.itemSize===4?o.w:1)}}c={count:l,texture:x,size:new Dt(V,C)},n.set(p,c),p.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let y=0;y<u.length;y++)h+=u[y];let m=p.morphTargetsRelative?1:1-h;s.getUniforms().setValue(i,"morphTargetBaseInfluence",m),s.getUniforms().setValue(i,"morphTargetInfluences",u)}s.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),s.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function t3(i,t,e,n){let o=new WeakMap;function r(s){let u=n.render.frame,f=s.geometry,l=t.get(s,f);if(o.get(l)!==u&&(t.update(l),o.set(l,u)),s.isInstancedMesh&&(s.hasEventListener("dispose",p)===!1&&s.addEventListener("dispose",p),o.get(s)!==u&&(e.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&e.update(s.instanceColor,i.ARRAY_BUFFER),o.set(s,u))),s.isSkinnedMesh){let c=s.skeleton;o.get(c)!==u&&(c.update(),o.set(c,u))}return l}function a(){o=new WeakMap}function p(s){let u=s.target;u.removeEventListener("dispose",p),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}var $0=new Re,g0=new oi(1,1),H0=new Ir,B0=new hp,k0=new Hr,T0=[],E0=[],U0=new Float32Array(16),V0=new Float32Array(9),S0=new Float32Array(4);function hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let o=t*e,r=T0[o];if(r===void 0&&(r=new Float32Array(o),T0[o]=r),t!==0){n.toArray(r,0);for(let a=1,p=0;a!==t;++a)p+=e,i[a].toArray(r,p)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Is(i,t){let e=E0[t];e===void 0&&(e=new Int32Array(t),E0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function o3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function i3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function r3(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(ve(e,n))return;S0.set(n),i.uniformMatrix2fv(this.addr,!1,S0),Ae(e,n)}}function a3(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(ve(e,n))return;V0.set(n),i.uniformMatrix3fv(this.addr,!1,V0),Ae(e,n)}}function p3(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(ve(e,n))return;U0.set(n),i.uniformMatrix4fv(this.addr,!1,U0),Ae(e,n)}}function s3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function f3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function l3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function c3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function d3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function b3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function m3(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let r;this.type===i.SAMPLER_2D_SHADOW?(g0.compareFunction=ff,r=g0):r=$0,e.setTexture2D(t||r,o)}function y3(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture3D(t||B0,o)}function g3(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTextureCube(t||k0,o)}function T3(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture2DArray(t||H0,o)}function E3(i){switch(i){case 5126:return e3;case 35664:return n3;case 35665:return o3;case 35666:return i3;case 35674:return r3;case 35675:return a3;case 35676:return p3;case 5124:case 35670:return s3;case 35667:case 35671:return u3;case 35668:case 35672:return f3;case 35669:case 35673:return l3;case 5125:return c3;case 36294:return h3;case 36295:return d3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return m3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return T3}}function U3(i,t){i.uniform1fv(this.addr,t)}function V3(i,t){let e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function S3(i,t){let e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function P3(i,t){let e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function L3(i,t){let e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w3(i,t){let e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C3(i,t){let e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function x3(i,t){i.uniform1iv(this.addr,t)}function D3(i,t){i.uniform2iv(this.addr,t)}function R3(i,t){i.uniform3iv(this.addr,t)}function M3(i,t){i.uniform4iv(this.addr,t)}function v3(i,t){i.uniform1uiv(this.addr,t)}function A3(i,t){i.uniform2uiv(this.addr,t)}function I3(i,t){i.uniform3uiv(this.addr,t)}function O3(i,t){i.uniform4uiv(this.addr,t)}function _3(i,t,e){let n=this.cache,o=t.length,r=Is(e,o);ve(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==o;++a)e.setTexture2D(t[a]||$0,r[a])}function $3(i,t,e){let n=this.cache,o=t.length,r=Is(e,o);ve(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==o;++a)e.setTexture3D(t[a]||B0,r[a])}function H3(i,t,e){let n=this.cache,o=t.length,r=Is(e,o);ve(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==o;++a)e.setTextureCube(t[a]||k0,r[a])}function B3(i,t,e){let n=this.cache,o=t.length,r=Is(e,o);ve(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==o;++a)e.setTexture2DArray(t[a]||H0,r[a])}function k3(i){switch(i){case 5126:return U3;case 35664:return V3;case 35665:return S3;case 35666:return P3;case 35674:return L3;case 35675:return w3;case 35676:return C3;case 5124:case 35670:return x3;case 35667:case 35671:return D3;case 35668:case 35672:return R3;case 35669:case 35673:return M3;case 5125:return v3;case 36294:return A3;case 36295:return I3;case 36296:return O3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return $3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return B3}}var Pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E3(e.type)}},Lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k3(e.type)}},wf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let o=this.seq;for(let r=0,a=o.length;r!==a;++r){let p=o[r];p.setValue(t,e[p.id],n)}}},Sf=/(\w+)(\])?(\[|\.)?/g;function P0(i,t){i.seq.push(t),i.map[t.id]=t}function F3(i,t,e){let n=i.name,o=n.length;for(Sf.lastIndex=0;;){let r=Sf.exec(n),a=Sf.lastIndex,p=r[1],s=r[2]==="]",u=r[3];if(s&&(p=p|0),u===void 0||u==="["&&a+2===o){P0(e,u===void 0?new Pf(p,i,t):new Lf(p,i,t));break}else{let l=e.map[p];l===void 0&&(l=new wf(p),P0(e,l)),e=l}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let r=t.getActiveUniform(e,o),a=t.getUniformLocation(e,r.name);F3(r,a,this)}}setValue(t,e,n,o){let r=this.map[e];r!==void 0&&r.setValue(t,n,o)}setOptional(t,e,n){let o=e[n];o!==void 0&&this.setValue(t,n,o)}static upload(t,e,n,o){for(let r=0,a=e.length;r!==a;++r){let p=e[r],s=n[p.id];s.needsUpdate!==!1&&p.setValue(t,s.value,o)}}static seqWithValue(t,e){let n=[];for(let o=0,r=t.length;o!==r;++o){let a=t[o];a.id in e&&n.push(a)}return n}};function L0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var J3=37297,N3=0;function X3(i,t){let e=i.split(`
`),n=[],o=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=o;a<r;a++){let p=a+1;n.push(`${p===t?">":" "} ${p}: ${e[a]}`)}return n.join(`
`)}var w0=new Jt;function Q3(i){Xt._getMatrix(w0,Xt.workingColorSpace,i);let t=`mat3( ${w0.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function C0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let p=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+X3(i.getShaderSource(t),p)}else return r}function Z3(i,t){let e=Q3(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z3(i,t){let e;switch(t){case _p:e="Linear";break;case $p:e="Reinhard";break;case Hp:e="Cineon";break;case Bp:e="ACESFilmic";break;case Fp:e="AgX";break;case ar:e="Neutral";break;case kp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ms=new M;function Y3(){Xt.getLuminanceCoefficients(Ms);let i=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function G3(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K3(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){let r=i.getActiveAttrib(t,o),a=r.name,p=1;r.type===i.FLOAT_MAT2&&(p=2),r.type===i.FLOAT_MAT3&&(p=3),r.type===i.FLOAT_MAT4&&(p=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:p}}return e}function ma(i){return i!==""}function x0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function D0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(i){return i.replace(W3,t4)}var q3=new Map;function t4(i,t){let e=Nt[t];if(e===void 0){let n=q3.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cf(e)}var e4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(i){return i.replace(e4,n4)}function n4(i,t,e,n){let o="";for(let r=parseInt(t);r<parseInt(e);r++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function M0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o4(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===aa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===R2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function i4(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r4(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ci&&(t="ENVMAP_MODE_REFRACTION"),t}function a4(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Q2:t="ENVMAP_BLENDING_MIX";break;case Z2:t="ENVMAP_BLENDING_ADD";break}return t}function p4(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s4(i,t,e,n){let o=i.getContext(),r=e.defines,a=e.vertexShader,p=e.fragmentShader,s=o4(e),u=i4(e),f=r4(e),l=a4(e),c=p4(e),h=j3(e),m=G3(r),y=o.createProgram(),b,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ma).join(`
`),b.length>0&&(b+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ma).join(`
`),d.length>0&&(d+=`
`)):(b=[M0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),d=[M0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+l:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mo?"#define TONE_MAPPING":"",e.toneMapping!==mo?Nt.tonemapping_pars_fragment:"",e.toneMapping!==mo?z3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Z3("linearToOutputTexel",e.outputColorSpace),Y3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),a=Cf(a),a=x0(a,e),a=D0(a,e),p=Cf(p),p=x0(p,e),p=D0(p,e),a=R0(a),p=R0(p),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,d=["#define varying in",e.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=T+b+a,V=T+d+p,C=L0(o,o.VERTEX_SHADER,P),w=L0(o,o.FRAGMENT_SHADER,V);o.attachShader(y,C),o.attachShader(y,w),e.index0AttributeName!==void 0?o.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function x(R){if(i.debug.checkShaderErrors){let I=o.getProgramInfoLog(y)||"",B=o.getShaderInfoLog(C)||"",X=o.getShaderInfoLog(w)||"",Y=I.trim(),Z=B.trim(),nt=X.trim(),J=!0,tt=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,y,C,w);else{let ft=C0(o,C,"vertex"),Ut=C0(o,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+ft+`
`+Ut)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Z===""||nt==="")&&(tt=!1);tt&&(R.diagnostics={runnable:J,programLog:Y,vertexShader:{log:Z,prefix:b},fragmentShader:{log:nt,prefix:d}})}o.deleteShader(C),o.deleteShader(w),A=new cr(o,y),S=K3(o,y)}let A;this.getUniforms=function(){return A===void 0&&x(this),A};let S;this.getAttributes=function(){return S===void 0&&x(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(y,J3)),E},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N3++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}var u4=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,o=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Df(t),e.set(t,n)),n}},Df=class{constructor(t){this.id=u4++,this.code=t,this.usedTimes=0}};function f4(i,t,e,n,o,r,a){let p=new Ki,s=new xf,u=new Set,f=[],l=o.logarithmicDepthBuffer,c=o.vertexTextures,h=o.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return u.add(S),S===0?"uv":`uv${S}`}function b(S,E,R,I,B){let X=I.fog,Y=B.geometry,Z=S.isMeshStandardMaterial?I.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),J=nt&&nt.mapping===ua?nt.image.height:null,tt=m[S.type];S.precision!==null&&(h=o.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ut=ft!==void 0?ft.length:0,Ht=0;Y.morphAttributes.position!==void 0&&(Ht=1),Y.morphAttributes.normal!==void 0&&(Ht=2),Y.morphAttributes.color!==void 0&&(Ht=3);let Wt,ee,jt,j;if(tt){let te=jn[tt];Wt=te.vertexShader,ee=te.fragmentShader}else Wt=S.vertexShader,ee=S.fragmentShader,s.update(S),jt=s.getVertexShaderID(S),j=s.getFragmentShaderID(S);let K=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),Ct=B.isInstancedMesh===!0,mt=B.isBatchedMesh===!0,Qt=!!S.map,Se=!!S.matcap,D=!!nt,oe=!!S.aoMap,$t=!!S.lightMap,Mt=!!S.bumpMap,gt=!!S.normalMap,ie=!!S.displacementMap,Tt=!!S.emissiveMap,kt=!!S.metalnessMap,ge=!!S.roughnessMap,le=S.anisotropy>0,L=S.clearcoat>0,g=S.dispersion>0,H=S.iridescence>0,z=S.sheen>0,W=S.transmission>0,N=le&&!!S.anisotropyMap,Vt=L&&!!S.clearcoatMap,rt=L&&!!S.clearcoatNormalMap,yt=L&&!!S.clearcoatRoughnessMap,Lt=H&&!!S.iridescenceMap,ot=H&&!!S.iridescenceThicknessMap,lt=z&&!!S.sheenColorMap,At=z&&!!S.sheenRoughnessMap,wt=!!S.specularMap,st=!!S.specularColorMap,Ot=!!S.specularIntensityMap,v=W&&!!S.transmissionMap,q=W&&!!S.thicknessMap,at=!!S.gradientMap,Et=!!S.alphaMap,et=S.alphaTest>0,G=!!S.alphaHash,Pt=!!S.extensions,Ft=mo;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let ue={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:Wt,fragmentShader:ee,defines:S.defines,customVertexShaderID:jt,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:mt,batchingColor:mt&&B._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&B.instanceColor!==null,instancingMorph:Ct&&B.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Be,alphaToCoverage:!!S.alphaToCoverage,map:Qt,matcap:Se,envMap:D,envMapMode:D&&nt.mapping,envMapCubeUVHeight:J,aoMap:oe,lightMap:$t,bumpMap:Mt,normalMap:gt,displacementMap:c&&ie,emissiveMap:Tt,normalMapObjectSpace:gt&&S.normalMapType===q2,normalMapTangentSpace:gt&&S.normalMapType===xs,metalnessMap:kt,roughnessMap:ge,anisotropy:le,anisotropyMap:N,clearcoat:L,clearcoatMap:Vt,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:g,iridescence:H,iridescenceMap:Lt,iridescenceThicknessMap:ot,sheen:z,sheenColorMap:lt,sheenRoughnessMap:At,specularMap:wt,specularColorMap:st,specularIntensityMap:Ot,transmission:W,transmissionMap:v,thicknessMap:q,gradientMap:at,opaque:S.transparent===!1&&S.blending===jo&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:et,alphaHash:G,combine:S.combine,mapUv:Qt&&y(S.map.channel),aoMapUv:oe&&y(S.aoMap.channel),lightMapUv:$t&&y(S.lightMap.channel),bumpMapUv:Mt&&y(S.bumpMap.channel),normalMapUv:gt&&y(S.normalMap.channel),displacementMapUv:ie&&y(S.displacementMap.channel),emissiveMapUv:Tt&&y(S.emissiveMap.channel),metalnessMapUv:kt&&y(S.metalnessMap.channel),roughnessMapUv:ge&&y(S.roughnessMap.channel),anisotropyMapUv:N&&y(S.anisotropyMap.channel),clearcoatMapUv:Vt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&y(S.sheenRoughnessMap.channel),specularMapUv:wt&&y(S.specularMap.channel),specularColorMapUv:st&&y(S.specularColorMap.channel),specularIntensityMapUv:Ot&&y(S.specularIntensityMap.channel),transmissionMapUv:v&&y(S.transmissionMap.channel),thicknessMapUv:q&&y(S.thicknessMap.channel),alphaMapUv:Et&&y(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(gt||le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Qt||Et),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:ht,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Qt&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===qt,decodeVideoTextureEmissive:Tt&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vn,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ue.vertexUv1s=u.has(1),ue.vertexUv2s=u.has(2),ue.vertexUv3s=u.has(3),u.clear(),ue}function d(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)E.push(R),E.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(E,S),P(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function P(S,E){p.disableAll(),E.supportsVertexTextures&&p.enable(0),E.instancing&&p.enable(1),E.instancingColor&&p.enable(2),E.instancingMorph&&p.enable(3),E.matcap&&p.enable(4),E.envMap&&p.enable(5),E.normalMapObjectSpace&&p.enable(6),E.normalMapTangentSpace&&p.enable(7),E.clearcoat&&p.enable(8),E.iridescence&&p.enable(9),E.alphaTest&&p.enable(10),E.vertexColors&&p.enable(11),E.vertexAlphas&&p.enable(12),E.vertexUv1s&&p.enable(13),E.vertexUv2s&&p.enable(14),E.vertexUv3s&&p.enable(15),E.vertexTangents&&p.enable(16),E.anisotropy&&p.enable(17),E.alphaHash&&p.enable(18),E.batching&&p.enable(19),E.dispersion&&p.enable(20),E.batchingColor&&p.enable(21),E.gradientMap&&p.enable(22),S.push(p.mask),p.disableAll(),E.fog&&p.enable(0),E.useFog&&p.enable(1),E.flatShading&&p.enable(2),E.logarithmicDepthBuffer&&p.enable(3),E.reversedDepthBuffer&&p.enable(4),E.skinning&&p.enable(5),E.morphTargets&&p.enable(6),E.morphNormals&&p.enable(7),E.morphColors&&p.enable(8),E.premultipliedAlpha&&p.enable(9),E.shadowMapEnabled&&p.enable(10),E.doubleSided&&p.enable(11),E.flipSided&&p.enable(12),E.useDepthPacking&&p.enable(13),E.dithering&&p.enable(14),E.transmission&&p.enable(15),E.sheen&&p.enable(16),E.opaque&&p.enable(17),E.pointsUvs&&p.enable(18),E.decodeVideoTexture&&p.enable(19),E.decodeVideoTextureEmissive&&p.enable(20),E.alphaToCoverage&&p.enable(21),S.push(p.mask)}function V(S){let E=m[S.type],R;if(E){let I=jn[E];R=Pn.clone(I.uniforms)}else R=S.uniforms;return R}function C(S,E){let R;for(let I=0,B=f.length;I<B;I++){let X=f[I];if(X.cacheKey===E){R=X,++R.usedTimes;break}}return R===void 0&&(R=new s4(i,E,S,r),f.push(R)),R}function w(S){if(--S.usedTimes===0){let E=f.indexOf(S);f[E]=f[f.length-1],f.pop(),S.destroy()}}function x(S){s.remove(S)}function A(){s.dispose()}return{getParameters:b,getProgramCacheKey:d,getUniforms:V,acquireProgram:C,releaseProgram:w,releaseShaderCache:x,programs:f,dispose:A}}function l4(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let p=i.get(a);return p===void 0&&(p={},i.set(a,p)),p}function n(a){i.delete(a)}function o(a,p,s){i.get(a)[p]=s}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:o,dispose:r}}function c4(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function v0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function A0(){let i=[],t=0,e=[],n=[],o=[];function r(){t=0,e.length=0,n.length=0,o.length=0}function a(l,c,h,m,y,b){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:c,material:h,groupOrder:m,renderOrder:l.renderOrder,z:y,group:b},i[t]=d):(d.id=l.id,d.object=l,d.geometry=c,d.material=h,d.groupOrder=m,d.renderOrder=l.renderOrder,d.z=y,d.group=b),t++,d}function p(l,c,h,m,y,b){let d=a(l,c,h,m,y,b);h.transmission>0?n.push(d):h.transparent===!0?o.push(d):e.push(d)}function s(l,c,h,m,y,b){let d=a(l,c,h,m,y,b);h.transmission>0?n.unshift(d):h.transparent===!0?o.unshift(d):e.unshift(d)}function u(l,c){e.length>1&&e.sort(l||c4),n.length>1&&n.sort(c||v0),o.length>1&&o.sort(c||v0)}function f(){for(let l=t,c=i.length;l<c;l++){let h=i[l];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:o,init:r,push:p,unshift:s,finish:f,sort:u}}function h4(){let i=new WeakMap;function t(n,o){let r=i.get(n),a;return r===void 0?(a=new A0,i.set(n,[a])):o>=r.length?(a=new A0,r.push(a)):a=r[o],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d4(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new bt};break;case"SpotLight":e={position:new M,direction:new M,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new M,halfWidth:new M,halfHeight:new M};break}return i[t.id]=e,e}}}function b4(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m4=0;function y4(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g4(i){let t=new d4,e=b4(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new M);let o=new M,r=new Rt,a=new Rt;function p(u){let f=0,l=0,c=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,m=0,y=0,b=0,d=0,T=0,P=0,V=0,C=0,w=0,x=0;u.sort(y4);for(let S=0,E=u.length;S<E;S++){let R=u[S],I=R.color,B=R.intensity,X=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=I.r*B,l+=I.g*B,c+=I.b*B;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],B);x++}else if(R.isDirectionalLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let nt=R.shadow,J=e.get(R);J.shadowIntensity=nt.intensity,J.shadowBias=nt.bias,J.shadowNormalBias=nt.normalBias,J.shadowRadius=nt.radius,J.shadowMapSize=nt.mapSize,n.directionalShadow[h]=J,n.directionalShadowMap[h]=Y,n.directionalShadowMatrix[h]=R.shadow.matrix,T++}n.directional[h]=Z,h++}else if(R.isSpotLight){let Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(I).multiplyScalar(B),Z.distance=X,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[y]=Z;let nt=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,nt.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[y]=nt.matrix,R.castShadow){let J=e.get(R);J.shadowIntensity=nt.intensity,J.shadowBias=nt.bias,J.shadowNormalBias=nt.normalBias,J.shadowRadius=nt.radius,J.shadowMapSize=nt.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=Y,V++}y++}else if(R.isRectAreaLight){let Z=t.get(R);Z.color.copy(I).multiplyScalar(B),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=Z,b++}else if(R.isPointLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let nt=R.shadow,J=e.get(R);J.shadowIntensity=nt.intensity,J.shadowBias=nt.bias,J.shadowNormalBias=nt.normalBias,J.shadowRadius=nt.radius,J.shadowMapSize=nt.mapSize,J.shadowCameraNear=nt.camera.near,J.shadowCameraFar=nt.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=R.shadow.matrix,P++}n.point[m]=Z,m++}else if(R.isHemisphereLight){let Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(B),Z.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[d]=Z,d++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=l,n.ambient[2]=c;let A=n.hash;(A.directionalLength!==h||A.pointLength!==m||A.spotLength!==y||A.rectAreaLength!==b||A.hemiLength!==d||A.numDirectionalShadows!==T||A.numPointShadows!==P||A.numSpotShadows!==V||A.numSpotMaps!==C||A.numLightProbes!==x)&&(n.directional.length=h,n.spot.length=y,n.rectArea.length=b,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=V,n.spotShadowMap.length=V,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=V+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=x,A.directionalLength=h,A.pointLength=m,A.spotLength=y,A.rectAreaLength=b,A.hemiLength=d,A.numDirectionalShadows=T,A.numPointShadows=P,A.numSpotShadows=V,A.numSpotMaps=C,A.numLightProbes=x,n.version=m4++)}function s(u,f){let l=0,c=0,h=0,m=0,y=0,b=f.matrixWorldInverse;for(let d=0,T=u.length;d<T;d++){let P=u[d];if(P.isDirectionalLight){let V=n.directional[l];V.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),V.direction.sub(o),V.direction.transformDirection(b),l++}else if(P.isSpotLight){let V=n.spot[h];V.position.setFromMatrixPosition(P.matrixWorld),V.position.applyMatrix4(b),V.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),V.direction.sub(o),V.direction.transformDirection(b),h++}else if(P.isRectAreaLight){let V=n.rectArea[m];V.position.setFromMatrixPosition(P.matrixWorld),V.position.applyMatrix4(b),a.identity(),r.copy(P.matrixWorld),r.premultiply(b),a.extractRotation(r),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),V.halfWidth.applyMatrix4(a),V.halfHeight.applyMatrix4(a),m++}else if(P.isPointLight){let V=n.point[c];V.position.setFromMatrixPosition(P.matrixWorld),V.position.applyMatrix4(b),c++}else if(P.isHemisphereLight){let V=n.hemi[y];V.direction.setFromMatrixPosition(P.matrixWorld),V.direction.transformDirection(b),y++}}}return{setup:p,setupView:s,state:n}}function I0(i){let t=new g4(i),e=[],n=[];function o(f){u.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function p(){t.setup(e)}function s(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:p,setupLightsView:s,pushLight:r,pushShadow:a}}function T4(i){let t=new WeakMap;function e(o,r=0){let a=t.get(o),p;return a===void 0?(p=new I0(i),t.set(o,[p])):r>=a.length?(p=new I0(i),a.push(p)):p=a[r],p}function n(){t=new WeakMap}return{get:e,dispose:n}}var E4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V4(i,t,e){let n=new nr,o=new Dt,r=new Dt,a=new Kt,p=new gp({depthPacking:W2}),s=new Tp,u={},f=e.maxTextureSize,l={[An]:Ke,[Ke]:An,[Vn]:Vn},c=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:E4,fragmentShader:U4}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let m=new Me;m.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new he(m,c),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let d=this.type;this.render=function(w,x,A){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(De),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=d!==Yn&&this.type===Yn,X=d===Yn&&this.type!==Yn;for(let Y=0,Z=w.length;Y<Z;Y++){let nt=w[Y],J=nt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);let tt=J.getFrameExtents();if(o.multiply(tt),r.copy(J.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/tt.x),o.x=r.x*tt.x,J.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/tt.y),o.y=r.y*tt.y,J.mapSize.y=r.y)),J.map===null||B===!0||X===!0){let Ut=this.type!==Yn?{minFilter:Ce,magFilter:Ce}:{};J.map!==null&&J.map.dispose(),J.map=new ke(o.x,o.y,Ut),J.map.texture.name=nt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ft=J.getViewportCount();for(let Ut=0;Ut<ft;Ut++){let Ht=J.getViewport(Ut);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),I.viewport(a),J.updateMatrices(nt,Ut),n=J.getFrustum(),V(x,A,J.camera,nt,this.type)}J.isPointLightShadow!==!0&&this.type===Yn&&T(J,A),J.needsUpdate=!1}d=this.type,b.needsUpdate=!1,i.setRenderTarget(S,E,R)};function T(w,x){let A=t.update(y);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ke(o.x,o.y)),c.uniforms.shadow_pass.value=w.map.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,A,c,y,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,A,h,y,null)}function P(w,x,A,S){let E=null,R=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=A.isPointLight===!0?s:p,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=E.uuid,B=x.uuid,X=u[I];X===void 0&&(X={},u[I]=X);let Y=X[B];Y===void 0&&(Y=E.clone(),X[B]=Y,x.addEventListener("dispose",C)),E=Y}if(E.visible=x.visible,E.wireframe=x.wireframe,S===Yn?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:l[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=i.properties.get(E);I.light=A}return E}function V(w,x,A,S,E){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let B=t.update(w),X=w.material;if(Array.isArray(X)){let Y=B.groups;for(let Z=0,nt=Y.length;Z<nt;Z++){let J=Y[Z],tt=X[J.materialIndex];if(tt&&tt.visible){let ft=P(w,tt,S,E);w.onBeforeShadow(i,w,x,A,B,ft,J),i.renderBufferDirect(A,null,B,ft,w,J),w.onAfterShadow(i,w,x,A,B,ft,J)}}}else if(X.visible){let Y=P(w,X,S,E);w.onBeforeShadow(i,w,x,A,B,Y,null),i.renderBufferDirect(A,null,B,Y,w,null),w.onAfterShadow(i,w,x,A,B,Y,null)}}let I=w.children;for(let B=0,X=I.length;B<X;B++)V(I[B],x,A,S,E)}function C(w){w.target.removeEventListener("dispose",C);for(let A in u){let S=u[A],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var S4={[Dp]:Rp,[Mp]:Ip,[vp]:Op,[Go]:Ap,[Rp]:Dp,[Ip]:Mp,[Op]:vp,[Ap]:Go};function P4(i,t){function e(){let v=!1,q=new Kt,at=null,Et=new Kt(0,0,0,0);return{setMask:function(et){at!==et&&!v&&(i.colorMask(et,et,et,et),at=et)},setLocked:function(et){v=et},setClear:function(et,G,Pt,Ft,ue){ue===!0&&(et*=Ft,G*=Ft,Pt*=Ft),q.set(et,G,Pt,Ft),Et.equals(q)===!1&&(i.clearColor(et,G,Pt,Ft),Et.copy(q))},reset:function(){v=!1,at=null,Et.set(-1,0,0,0)}}}function n(){let v=!1,q=!1,at=null,Et=null,et=null;return{setReversed:function(G){if(q!==G){let Pt=t.get("EXT_clip_control");G?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),q=G;let Ft=et;et=null,this.setClear(Ft)}},getReversed:function(){return q},setTest:function(G){G?K(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(G){at!==G&&!v&&(i.depthMask(G),at=G)},setFunc:function(G){if(q&&(G=S4[G]),Et!==G){switch(G){case Dp:i.depthFunc(i.NEVER);break;case Rp:i.depthFunc(i.ALWAYS);break;case Mp:i.depthFunc(i.LESS);break;case Go:i.depthFunc(i.LEQUAL);break;case vp:i.depthFunc(i.EQUAL);break;case Ap:i.depthFunc(i.GEQUAL);break;case Ip:i.depthFunc(i.GREATER);break;case Op:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=G}},setLocked:function(G){v=G},setClear:function(G){et!==G&&(q&&(G=1-G),i.clearDepth(G),et=G)},reset:function(){v=!1,at=null,Et=null,et=null,q=!1}}}function o(){let v=!1,q=null,at=null,Et=null,et=null,G=null,Pt=null,Ft=null,ue=null;return{setTest:function(te){v||(te?K(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(te){q!==te&&!v&&(i.stencilMask(te),q=te)},setFunc:function(te,qn,Bn){(at!==te||Et!==qn||et!==Bn)&&(i.stencilFunc(te,qn,Bn),at=te,Et=qn,et=Bn)},setOp:function(te,qn,Bn){(G!==te||Pt!==qn||Ft!==Bn)&&(i.stencilOp(te,qn,Bn),G=te,Pt=qn,Ft=Bn)},setLocked:function(te){v=te},setClear:function(te){ue!==te&&(i.clearStencil(te),ue=te)},reset:function(){v=!1,q=null,at=null,Et=null,et=null,G=null,Pt=null,Ft=null,ue=null}}}let r=new e,a=new n,p=new o,s=new WeakMap,u=new WeakMap,f={},l={},c=new WeakMap,h=[],m=null,y=!1,b=null,d=null,T=null,P=null,V=null,C=null,w=null,x=new bt(0,0,0),A=0,S=!1,E=null,R=null,I=null,B=null,X=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,nt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=nt>=1):J.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=nt>=2);let tt=null,ft={},Ut=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Wt=new Kt().fromArray(Ut),ee=new Kt().fromArray(Ht);function jt(v,q,at,Et){let et=new Uint8Array(4),G=i.createTexture();i.bindTexture(v,G),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<at;Pt++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(q+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return G}let j={};j[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),p.setClear(0),K(i.DEPTH_TEST),a.setFunc(Go),Mt(!1),gt(ju),K(i.CULL_FACE),oe(De);function K(v){f[v]!==!0&&(i.enable(v),f[v]=!0)}function ht(v){f[v]!==!1&&(i.disable(v),f[v]=!1)}function Ct(v,q){return l[v]!==q?(i.bindFramebuffer(v,q),l[v]=q,v===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=q),v===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=q),!0):!1}function mt(v,q){let at=h,Et=!1;if(v){at=c.get(q),at===void 0&&(at=[],c.set(q,at));let et=v.textures;if(at.length!==et.length||at[0]!==i.COLOR_ATTACHMENT0){for(let G=0,Pt=et.length;G<Pt;G++)at[G]=i.COLOR_ATTACHMENT0+G;at.length=et.length,Et=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,Et=!0);Et&&i.drawBuffers(at)}function Qt(v){return m!==v?(i.useProgram(v),m=v,!0):!1}let Se={[hn]:i.FUNC_ADD,[M2]:i.FUNC_SUBTRACT,[v2]:i.FUNC_REVERSE_SUBTRACT};Se[A2]=i.MIN,Se[I2]=i.MAX;let D={[fi]:i.ZERO,[O2]:i.ONE,[_2]:i.SRC_COLOR,[sp]:i.SRC_ALPHA,[k2]:i.SRC_ALPHA_SATURATE,[sa]:i.DST_COLOR,[pa]:i.DST_ALPHA,[$2]:i.ONE_MINUS_SRC_COLOR,[up]:i.ONE_MINUS_SRC_ALPHA,[B2]:i.ONE_MINUS_DST_COLOR,[H2]:i.ONE_MINUS_DST_ALPHA,[F2]:i.CONSTANT_COLOR,[J2]:i.ONE_MINUS_CONSTANT_COLOR,[N2]:i.CONSTANT_ALPHA,[X2]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(v,q,at,Et,et,G,Pt,Ft,ue,te){if(v===De){y===!0&&(ht(i.BLEND),y=!1);return}if(y===!1&&(K(i.BLEND),y=!0),v!==xp){if(v!==b||te!==S){if((d!==hn||V!==hn)&&(i.blendEquation(i.FUNC_ADD),d=hn,V=hn),te)switch(v){case jo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gu:i.blendFunc(i.ONE,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ku:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}T=null,P=null,C=null,w=null,x.set(0,0,0),A=0,b=v,S=te}return}et=et||q,G=G||at,Pt=Pt||Et,(q!==d||et!==V)&&(i.blendEquationSeparate(Se[q],Se[et]),d=q,V=et),(at!==T||Et!==P||G!==C||Pt!==w)&&(i.blendFuncSeparate(D[at],D[Et],D[G],D[Pt]),T=at,P=Et,C=G,w=Pt),(Ft.equals(x)===!1||ue!==A)&&(i.blendColor(Ft.r,Ft.g,Ft.b,ue),x.copy(Ft),A=ue),b=v,S=!1}function $t(v,q){v.side===Vn?ht(i.CULL_FACE):K(i.CULL_FACE);let at=v.side===Ke;q&&(at=!at),Mt(at),v.blending===jo&&v.transparent===!1?oe(De):oe(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),a.setFunc(v.depthFunc),a.setTest(v.depthTest),a.setMask(v.depthWrite),r.setMask(v.colorWrite);let Et=v.stencilWrite;p.setTest(Et),Et&&(p.setMask(v.stencilWriteMask),p.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),p.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Tt(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(v){E!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),E=v)}function gt(v){v!==x2?(K(i.CULL_FACE),v!==R&&(v===ju?i.cullFace(i.BACK):v===D2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),R=v}function ie(v){v!==I&&(Z&&i.lineWidth(v),I=v)}function Tt(v,q,at){v?(K(i.POLYGON_OFFSET_FILL),(B!==q||X!==at)&&(i.polygonOffset(q,at),B=q,X=at)):ht(i.POLYGON_OFFSET_FILL)}function kt(v){v?K(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function ge(v){v===void 0&&(v=i.TEXTURE0+Y-1),tt!==v&&(i.activeTexture(v),tt=v)}function le(v,q,at){at===void 0&&(tt===null?at=i.TEXTURE0+Y-1:at=tt);let Et=ft[at];Et===void 0&&(Et={type:void 0,texture:void 0},ft[at]=Et),(Et.type!==v||Et.texture!==q)&&(tt!==at&&(i.activeTexture(at),tt=at),i.bindTexture(v,q||j[v]),Et.type=v,Et.texture=q)}function L(){let v=ft[tt];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function z(){try{i.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function W(){try{i.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Vt(){try{i.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function rt(){try{i.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function yt(){try{i.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Lt(){try{i.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ot(){try{i.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function lt(v){Wt.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Wt.copy(v))}function At(v){ee.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),ee.copy(v))}function wt(v,q){let at=u.get(q);at===void 0&&(at=new WeakMap,u.set(q,at));let Et=at.get(v);Et===void 0&&(Et=i.getUniformBlockIndex(q,v.name),at.set(v,Et))}function st(v,q){let Et=u.get(q).get(v);s.get(q)!==Et&&(i.uniformBlockBinding(q,Et,v.__bindingPointIndex),s.set(q,Et))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},tt=null,ft={},l={},c=new WeakMap,h=[],m=null,y=!1,b=null,d=null,T=null,P=null,V=null,C=null,w=null,x=new bt(0,0,0),A=0,S=!1,E=null,R=null,I=null,B=null,X=null,Wt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),p.reset()}return{buffers:{color:r,depth:a,stencil:p},enable:K,disable:ht,bindFramebuffer:Ct,drawBuffers:mt,useProgram:Qt,setBlending:oe,setMaterial:$t,setFlipSided:Mt,setCullFace:gt,setLineWidth:ie,setPolygonOffset:Tt,setScissorTest:kt,activeTexture:ge,bindTexture:le,unbindTexture:L,compressedTexImage2D:g,compressedTexImage3D:H,texImage2D:Lt,texImage3D:ot,updateUBOMapping:wt,uniformBlockBinding:st,texStorage2D:rt,texStorage3D:yt,texSubImage2D:z,texSubImage3D:W,compressedTexSubImage2D:N,compressedTexSubImage3D:Vt,scissor:lt,viewport:At,reset:Ot}}function L4(i,t,e,n,o,r,a){let p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Dt,f=new WeakMap,l,c=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,g){return h?new OffscreenCanvas(L,g):Yi("canvas")}function y(L,g,H){let z=1,W=le(L);if((W.width>H||W.height>H)&&(z=H/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let N=Math.floor(z*W.width),Vt=Math.floor(z*W.height);l===void 0&&(l=m(N,Vt));let rt=g?m(N,Vt):l;return rt.width=N,rt.height=Vt,rt.getContext("2d").drawImage(L,0,0,N,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+N+"x"+Vt+")."),rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),L;return L}function b(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(L,g,H,z,W=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let N=g;if(g===i.RED&&(H===i.FLOAT&&(N=i.R32F),H===i.HALF_FLOAT&&(N=i.R16F),H===i.UNSIGNED_BYTE&&(N=i.R8)),g===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(N=i.R8UI),H===i.UNSIGNED_SHORT&&(N=i.R16UI),H===i.UNSIGNED_INT&&(N=i.R32UI),H===i.BYTE&&(N=i.R8I),H===i.SHORT&&(N=i.R16I),H===i.INT&&(N=i.R32I)),g===i.RG&&(H===i.FLOAT&&(N=i.RG32F),H===i.HALF_FLOAT&&(N=i.RG16F),H===i.UNSIGNED_BYTE&&(N=i.RG8)),g===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(N=i.RG8UI),H===i.UNSIGNED_SHORT&&(N=i.RG16UI),H===i.UNSIGNED_INT&&(N=i.RG32UI),H===i.BYTE&&(N=i.RG8I),H===i.SHORT&&(N=i.RG16I),H===i.INT&&(N=i.RG32I)),g===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(N=i.RGB8UI),H===i.UNSIGNED_SHORT&&(N=i.RGB16UI),H===i.UNSIGNED_INT&&(N=i.RGB32UI),H===i.BYTE&&(N=i.RGB8I),H===i.SHORT&&(N=i.RGB16I),H===i.INT&&(N=i.RGB32I)),g===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),H===i.UNSIGNED_INT&&(N=i.RGBA32UI),H===i.BYTE&&(N=i.RGBA8I),H===i.SHORT&&(N=i.RGBA16I),H===i.INT&&(N=i.RGBA32I)),g===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(N=i.R11F_G11F_B10F)),g===i.RGBA){let Vt=W?vr:Xt.getTransfer(z);H===i.FLOAT&&(N=i.RGBA32F),H===i.HALF_FLOAT&&(N=i.RGBA16F),H===i.UNSIGNED_BYTE&&(N=Vt===qt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function V(L,g){let H;return L?g===null||g===Mo||g===vo?H=i.DEPTH24_STENCIL8:g===Sn?H=i.DEPTH32F_STENCIL8:g===sr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mo||g===vo?H=i.DEPTH_COMPONENT24:g===Sn?H=i.DEPTH_COMPONENT32F:g===sr&&(H=i.DEPTH_COMPONENT16),H}function C(L,g){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ce&&L.minFilter!==je?Math.log2(Math.max(g.width,g.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?g.mipmaps.length:1}function w(L){let g=L.target;g.removeEventListener("dispose",w),A(g),g.isVideoTexture&&f.delete(g)}function x(L){let g=L.target;g.removeEventListener("dispose",x),E(g)}function A(L){let g=n.get(L);if(g.__webglInit===void 0)return;let H=L.source,z=c.get(H);if(z){let W=z[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&S(L),Object.keys(z).length===0&&c.delete(H)}n.remove(L)}function S(L){let g=n.get(L);i.deleteTexture(g.__webglTexture);let H=L.source,z=c.get(H);delete z[g.__cacheKey],a.memory.textures--}function E(L){let g=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let W=0;W<g.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[z][W]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let H=L.textures;for(let z=0,W=H.length;z<W;z++){let N=n.get(H[z]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(H[z])}n.remove(L)}let R=0;function I(){R=0}function B(){let L=R;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),R+=1,L}function X(L){let g=[];return g.push(L.wrapS),g.push(L.wrapT),g.push(L.wrapR||0),g.push(L.magFilter),g.push(L.minFilter),g.push(L.anisotropy),g.push(L.internalFormat),g.push(L.format),g.push(L.type),g.push(L.generateMipmaps),g.push(L.premultiplyAlpha),g.push(L.flipY),g.push(L.unpackAlignment),g.push(L.colorSpace),g.join()}function Y(L,g){let H=n.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){let z=L.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,L,g);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+g)}function Z(L,g){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){j(H,L,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+g)}function nt(L,g){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){j(H,L,g);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+g)}function J(L,g){let H=n.get(L);if(L.version>0&&H.__version!==L.version){K(H,L,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+g)}let tt={[tn]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Zi]:i.MIRRORED_REPEAT},ft={[Ce]:i.NEAREST,[Xp]:i.NEAREST_MIPMAP_NEAREST,[hi]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[_n]:i.LINEAR_MIPMAP_LINEAR},Ut={[t0]:i.NEVER,[a0]:i.ALWAYS,[e0]:i.LESS,[ff]:i.LEQUAL,[n0]:i.EQUAL,[r0]:i.GEQUAL,[o0]:i.GREATER,[i0]:i.NOTEQUAL};function Ht(L,g){if(g.type===Sn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===je||g.magFilter===pr||g.magFilter===hi||g.magFilter===_n||g.minFilter===je||g.minFilter===pr||g.minFilter===hi||g.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,tt[g.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,tt[g.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,tt[g.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ft[g.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ft[g.minFilter]),g.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ut[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ce||g.minFilter!==hi&&g.minFilter!==_n||g.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,o.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Wt(L,g){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,g.addEventListener("dispose",w));let z=g.source,W=c.get(z);W===void 0&&(W={},c.set(z,W));let N=X(g);if(N!==L.__cacheKey){W[N]===void 0&&(W[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),W[N].usedTimes++;let Vt=W[L.__cacheKey];Vt!==void 0&&(W[L.__cacheKey].usedTimes--,Vt.usedTimes===0&&S(g)),L.__cacheKey=N,L.__webglTexture=W[N].texture}return H}function ee(L,g,H){return Math.floor(Math.floor(L/H)/g)}function jt(L,g,H,z){let N=L.updateRanges;if(N.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,H,z,g.data);else{N.sort((ot,lt)=>ot.start-lt.start);let Vt=0;for(let ot=1;ot<N.length;ot++){let lt=N[Vt],At=N[ot],wt=lt.start+lt.count,st=ee(At.start,g.width,4),Ot=ee(lt.start,g.width,4);At.start<=wt+1&&st===Ot&&ee(At.start+At.count-1,g.width,4)===st?lt.count=Math.max(lt.count,At.start+At.count-lt.start):(++Vt,N[Vt]=At)}N.length=Vt+1;let rt=i.getParameter(i.UNPACK_ROW_LENGTH),yt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ot=0,lt=N.length;ot<lt;ot++){let At=N[ot],wt=Math.floor(At.start/4),st=Math.ceil(At.count/4),Ot=wt%g.width,v=Math.floor(wt/g.width),q=st,at=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,v),e.texSubImage2D(i.TEXTURE_2D,0,Ot,v,q,at,H,z,g.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function j(L,g,H){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);let W=Wt(L,g),N=g.source;e.bindTexture(z,L.__webglTexture,i.TEXTURE0+H);let Vt=n.get(N);if(N.version!==Vt.__version||W===!0){e.activeTexture(i.TEXTURE0+H);let rt=Xt.getPrimaries(Xt.workingColorSpace),yt=g.colorSpace===yo?null:Xt.getPrimaries(g.colorSpace),Lt=g.colorSpace===yo||rt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ot=y(g.image,!1,o.maxTextureSize);ot=ge(g,ot);let lt=r.convert(g.format,g.colorSpace),At=r.convert(g.type),wt=P(g.internalFormat,lt,At,g.colorSpace,g.isVideoTexture);Ht(z,g);let st,Ot=g.mipmaps,v=g.isVideoTexture!==!0,q=Vt.__version===void 0||W===!0,at=N.dataReady,Et=C(g,ot);if(g.isDepthTexture)wt=V(g.format===Ao,g.type),q&&(v?e.texStorage2D(i.TEXTURE_2D,1,wt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,wt,ot.width,ot.height,0,lt,At,null));else if(g.isDataTexture)if(Ot.length>0){v&&q&&e.texStorage2D(i.TEXTURE_2D,Et,wt,Ot[0].width,Ot[0].height);for(let et=0,G=Ot.length;et<G;et++)st=Ot[et],v?at&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,st.width,st.height,lt,At,st.data):e.texImage2D(i.TEXTURE_2D,et,wt,st.width,st.height,0,lt,At,st.data);g.generateMipmaps=!1}else v?(q&&e.texStorage2D(i.TEXTURE_2D,Et,wt,ot.width,ot.height),at&&jt(g,ot,lt,At)):e.texImage2D(i.TEXTURE_2D,0,wt,ot.width,ot.height,0,lt,At,ot.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){v&&q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,wt,Ot[0].width,Ot[0].height,ot.depth);for(let et=0,G=Ot.length;et<G;et++)if(st=Ot[et],g.format!==We)if(lt!==null)if(v){if(at)if(g.layerUpdates.size>0){let Pt=yf(st.width,st.height,g.format,g.type);for(let Ft of g.layerUpdates){let ue=st.data.subarray(Ft*Pt/st.data.BYTES_PER_ELEMENT,(Ft+1)*Pt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Ft,st.width,st.height,1,lt,ue)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,st.width,st.height,ot.depth,lt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,wt,st.width,st.height,ot.depth,0,st.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else v?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,st.width,st.height,ot.depth,lt,At,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,wt,st.width,st.height,ot.depth,0,lt,At,st.data)}else{v&&q&&e.texStorage2D(i.TEXTURE_2D,Et,wt,Ot[0].width,Ot[0].height);for(let et=0,G=Ot.length;et<G;et++)st=Ot[et],g.format!==We?lt!==null?v?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,st.width,st.height,lt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,et,wt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v?at&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,st.width,st.height,lt,At,st.data):e.texImage2D(i.TEXTURE_2D,et,wt,st.width,st.height,0,lt,At,st.data)}else if(g.isDataArrayTexture)if(v){if(q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,wt,ot.width,ot.height,ot.depth),at)if(g.layerUpdates.size>0){let et=yf(ot.width,ot.height,g.format,g.type);for(let G of g.layerUpdates){let Pt=ot.data.subarray(G*et/ot.data.BYTES_PER_ELEMENT,(G+1)*et/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,ot.width,ot.height,1,lt,At,Pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,lt,At,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,ot.width,ot.height,ot.depth,0,lt,At,ot.data);else if(g.isData3DTexture)v?(q&&e.texStorage3D(i.TEXTURE_3D,Et,wt,ot.width,ot.height,ot.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,lt,At,ot.data)):e.texImage3D(i.TEXTURE_3D,0,wt,ot.width,ot.height,ot.depth,0,lt,At,ot.data);else if(g.isFramebufferTexture){if(q)if(v)e.texStorage2D(i.TEXTURE_2D,Et,wt,ot.width,ot.height);else{let et=ot.width,G=ot.height;for(let Pt=0;Pt<Et;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,wt,et,G,0,lt,At,null),et>>=1,G>>=1}}else if(Ot.length>0){if(v&&q){let et=le(Ot[0]);e.texStorage2D(i.TEXTURE_2D,Et,wt,et.width,et.height)}for(let et=0,G=Ot.length;et<G;et++)st=Ot[et],v?at&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,lt,At,st):e.texImage2D(i.TEXTURE_2D,et,wt,lt,At,st);g.generateMipmaps=!1}else if(v){if(q){let et=le(ot);e.texStorage2D(i.TEXTURE_2D,Et,wt,et.width,et.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,At,ot)}else e.texImage2D(i.TEXTURE_2D,0,wt,lt,At,ot);b(g)&&d(z),Vt.__version=N.version,g.onUpdate&&g.onUpdate(g)}L.__version=g.version}function K(L,g,H){if(g.image.length!==6)return;let z=Wt(L,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);let N=n.get(W);if(W.version!==N.__version||z===!0){e.activeTexture(i.TEXTURE0+H);let Vt=Xt.getPrimaries(Xt.workingColorSpace),rt=g.colorSpace===yo?null:Xt.getPrimaries(g.colorSpace),yt=g.colorSpace===yo||Vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Lt=g.isCompressedTexture||g.image[0].isCompressedTexture,ot=g.image[0]&&g.image[0].isDataTexture,lt=[];for(let G=0;G<6;G++)!Lt&&!ot?lt[G]=y(g.image[G],!0,o.maxCubemapSize):lt[G]=ot?g.image[G].image:g.image[G],lt[G]=ge(g,lt[G]);let At=lt[0],wt=r.convert(g.format,g.colorSpace),st=r.convert(g.type),Ot=P(g.internalFormat,wt,st,g.colorSpace),v=g.isVideoTexture!==!0,q=N.__version===void 0||z===!0,at=W.dataReady,Et=C(g,At);Ht(i.TEXTURE_CUBE_MAP,g);let et;if(Lt){v&&q&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ot,At.width,At.height);for(let G=0;G<6;G++){et=lt[G].mipmaps;for(let Pt=0;Pt<et.length;Pt++){let Ft=et[Pt];g.format!==We?wt!==null?v?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt,0,0,Ft.width,Ft.height,wt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt,Ot,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt,0,0,Ft.width,Ft.height,wt,st,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt,Ot,Ft.width,Ft.height,0,wt,st,Ft.data)}}}else{if(et=g.mipmaps,v&&q){et.length>0&&Et++;let G=le(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ot,G.width,G.height)}for(let G=0;G<6;G++)if(ot){v?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,lt[G].width,lt[G].height,wt,st,lt[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ot,lt[G].width,lt[G].height,0,wt,st,lt[G].data);for(let Pt=0;Pt<et.length;Pt++){let ue=et[Pt].image[G].image;v?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt+1,0,0,ue.width,ue.height,wt,st,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt+1,Ot,ue.width,ue.height,0,wt,st,ue.data)}}else{v?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,wt,st,lt[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ot,wt,st,lt[G]);for(let Pt=0;Pt<et.length;Pt++){let Ft=et[Pt];v?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt+1,0,0,wt,st,Ft.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt+1,Ot,wt,st,Ft.image[G])}}}b(g)&&d(i.TEXTURE_CUBE_MAP),N.__version=W.version,g.onUpdate&&g.onUpdate(g)}L.__version=g.version}function ht(L,g,H,z,W,N){let Vt=r.convert(H.format,H.colorSpace),rt=r.convert(H.type),yt=P(H.internalFormat,Vt,rt,H.colorSpace),Lt=n.get(g),ot=n.get(H);if(ot.__renderTarget=g,!Lt.__hasExternalTextures){let lt=Math.max(1,g.width>>N),At=Math.max(1,g.height>>N);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,N,yt,lt,At,g.depth,0,Vt,rt,null):e.texImage2D(W,N,yt,lt,At,0,Vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Tt(g)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,ot.__webglTexture,0,ie(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,ot.__webglTexture,N),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(L,g,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),g.depthBuffer){let z=g.depthTexture,W=z&&z.isDepthTexture?z.type:null,N=V(g.stencilBuffer,W),Vt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=ie(g);Tt(g)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,N,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,N,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,N,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Vt,i.RENDERBUFFER,L)}else{let z=g.textures;for(let W=0;W<z.length;W++){let N=z[W],Vt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),yt=P(N.internalFormat,Vt,rt,N.colorSpace),Lt=ie(g);H&&Tt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,yt,g.width,g.height):Tt(g)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,yt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,yt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(L,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);let W=z.__webglTexture,N=ie(g);if(g.depthTexture.format===zi)Tt(g)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(g.depthTexture.format===Ao)Tt(g)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Qt(L){let g=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==L.depthTexture){let z=L.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=z}if(L.depthTexture&&!g.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let z=L.texture.mipmaps;z&&z.length>0?mt(g.__webglFramebuffer[0],L):mt(g.__webglFramebuffer,L)}else if(H){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),Ct(g.__webglDepthbuffer[z],L,!1);else{let W=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,N)}}else{let z=L.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ct(g.__webglDepthbuffer,L,!1);else{let W=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,N)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(L,g,H){let z=n.get(L);g!==void 0&&ht(z.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Qt(L)}function D(L){let g=L.texture,H=n.get(L),z=n.get(g);L.addEventListener("dispose",x);let W=L.textures,N=L.isWebGLCubeRenderTarget===!0,Vt=W.length>1;if(Vt||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),N){H.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[rt]=[];for(let yt=0;yt<g.mipmaps.length;yt++)H.__webglFramebuffer[rt][yt]=i.createFramebuffer()}else H.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let rt=0;rt<g.mipmaps.length;rt++)H.__webglFramebuffer[rt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Vt)for(let rt=0,yt=W.length;rt<yt;rt++){let Lt=n.get(W[rt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Tt(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let rt=0;rt<W.length;rt++){let yt=W[rt];H.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[rt]);let Lt=r.convert(yt.format,yt.colorSpace),ot=r.convert(yt.type),lt=P(yt.internalFormat,Lt,ot,yt.colorSpace,L.isXRRenderTarget===!0),At=ie(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,lt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,H.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,g);for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)ht(H.__webglFramebuffer[rt][yt],L,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt);else ht(H.__webglFramebuffer[rt],L,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);b(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let rt=0,yt=W.length;rt<yt;rt++){let Lt=W[rt],ot=n.get(Lt),lt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(lt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,ot.__webglTexture),Ht(lt,Lt),ht(H.__webglFramebuffer,L,Lt,i.COLOR_ATTACHMENT0+rt,lt,0),b(Lt)&&d(lt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(rt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,z.__webglTexture),Ht(rt,g),g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)ht(H.__webglFramebuffer[yt],L,g,i.COLOR_ATTACHMENT0,rt,yt);else ht(H.__webglFramebuffer,L,g,i.COLOR_ATTACHMENT0,rt,0);b(g)&&d(rt),e.unbindTexture()}L.depthBuffer&&Qt(L)}function oe(L){let g=L.textures;for(let H=0,z=g.length;H<z;H++){let W=g[H];if(b(W)){let N=T(L),Vt=n.get(W).__webglTexture;e.bindTexture(N,Vt),d(N),e.unbindTexture()}}}let $t=[],Mt=[];function gt(L){if(L.samples>0){if(Tt(L)===!1){let g=L.textures,H=L.width,z=L.height,W=i.COLOR_BUFFER_BIT,N=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(L),rt=g.length>1;if(rt)for(let Lt=0;Lt<g.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);let yt=L.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Lt=0;Lt<g.length;Lt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Lt]);let ot=n.get(g[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,H,z,0,0,H,z,W,i.NEAREST),s===!0&&($t.length=0,Mt.length=0,$t.push(i.COLOR_ATTACHMENT0+Lt),L.depthBuffer&&L.resolveDepthBuffer===!1&&($t.push(N),Mt.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Lt=0;Lt<g.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Lt]);let ot=n.get(g[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&s){let g=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ie(L){return Math.min(o.maxSamples,L.samples)}function Tt(L){let g=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function kt(L){let g=a.render.frame;f.get(L)!==g&&(f.set(L,g),L.update())}function ge(L,g){let H=L.colorSpace,z=L.format,W=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Be&&H!==yo&&(Xt.getTransfer(H)===qt?(z!==We||W!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),g}function le(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=J,this.rebindTextures=Se,this.setupRenderTarget=D,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Tt}function w4(i,t){function e(n,o=yo){let r,a=Xt.getTransfer(o);if(n===bn)return i.UNSIGNED_BYTE;if(n===Zp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ef)return i.BYTE;if(n===nf)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Qp)return i.INT;if(n===Mo)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===pf)return i.RGB;if(n===We)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Ao)return i.DEPTH_STENCIL;if(n===Yp)return i.RED;if(n===jp)return i.RED_INTEGER;if(n===sf)return i.RG;if(n===Gp)return i.RG_INTEGER;if(n===Kp)return i.RGBA_INTEGER;if(n===fa||n===la||n===ca||n===ha)if(a===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wp||n===qp||n===ts||n===es)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ts)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===es)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ns||n===os||n===is)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ns||n===os)return a===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===is)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rs||n===as||n===ps||n===ss||n===us||n===fs||n===ls||n===cs||n===hs||n===ds||n===bs||n===ms||n===ys||n===gs)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rs)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===as)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ps)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ss)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===us)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fs)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ls)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cs)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hs)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ds)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bs)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ms)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ys)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gs)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===Es||n===Us)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ts)return a===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Es)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Us)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vs||n===Ss||n===Ps||n===Ls)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ss)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ls)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var C4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:C4,fragmentShader:x4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mf=class extends Nn{constructor(t,e){super();let n=this,o=null,r=1,a=null,p="local-floor",s=1,u=null,f=null,l=null,c=null,h=null,m=null,y=typeof XRWebGLBinding<"u",b=new Rf,d={},T=e.getContextAttributes(),P=null,V=null,C=[],w=[],x=new Dt,A=null,S=new Le;S.viewport=new Kt;let E=new Le;E.viewport=new Kt;let R=[S,E],I=new Lp,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=C[j];return K===void 0&&(K=new Wi,C[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=C[j];return K===void 0&&(K=new Wi,C[j]=K),K.getGripSpace()},this.getHand=function(j){let K=C[j];return K===void 0&&(K=new Wi,C[j]=K),K.getHandSpace()};function Y(j){let K=w.indexOf(j.inputSource);if(K===-1)return;let ht=C[K];ht!==void 0&&(ht.update(j.inputSource,j.frame,u||a),ht.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",nt);for(let j=0;j<C.length;j++){let K=w[j];K!==null&&(w[j]=null,C[j].disconnect(K))}B=null,X=null,b.reset();for(let j in d)delete d[j];t.setRenderTarget(P),h=null,c=null,l=null,o=null,V=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){p=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return l===null&&y&&(l=new XRWebGLBinding(o,e)),l},this.getFrame=function(){return m},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(P=t.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ct=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=T.stencil?Ao:zi,Ct=T.stencil?vo:Mo);let Qt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};l=this.getBinding(),c=l.createProjectionLayer(Qt),o.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),V=new ke(c.textureWidth,c.textureHeight,{format:We,type:bn,depthTexture:new oi(c.textureWidth,c.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{let ht={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(o,e,ht),o.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),V=new ke(h.framebufferWidth,h.framebufferHeight,{format:We,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}V.isXRRenderTarget=!0,this.setFoveation(s),u=null,a=await o.requestReferenceSpace(p),jt.setContext(o),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function nt(j){for(let K=0;K<j.removed.length;K++){let ht=j.removed[K],Ct=w.indexOf(ht);Ct>=0&&(w[Ct]=null,C[Ct].disconnect(ht))}for(let K=0;K<j.added.length;K++){let ht=j.added[K],Ct=w.indexOf(ht);if(Ct===-1){for(let Qt=0;Qt<C.length;Qt++)if(Qt>=w.length){w.push(ht),Ct=Qt;break}else if(w[Qt]===null){w[Qt]=ht,Ct=Qt;break}if(Ct===-1)break}let mt=C[Ct];mt&&mt.connect(ht)}}let J=new M,tt=new M;function ft(j,K,ht){J.setFromMatrixPosition(K.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);let Ct=J.distanceTo(tt),mt=K.projectionMatrix.elements,Qt=ht.projectionMatrix.elements,Se=mt[14]/(mt[10]-1),D=mt[14]/(mt[10]+1),oe=(mt[9]+1)/mt[5],$t=(mt[9]-1)/mt[5],Mt=(mt[8]-1)/mt[0],gt=(Qt[8]+1)/Qt[0],ie=Se*Mt,Tt=Se*gt,kt=Ct/(-Mt+gt),ge=kt*-Mt;if(K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ge),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),mt[10]===-1)j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let le=Se+kt,L=D+kt,g=ie-ge,H=Tt+(Ct-ge),z=oe*D/L*le,W=$t*D/L*le;j.projectionMatrix.makePerspective(g,H,z,W,le,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ut(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let K=j.near,ht=j.far;b.texture!==null&&(b.depthNear>0&&(K=b.depthNear),b.depthFar>0&&(ht=b.depthFar)),I.near=E.near=S.near=K,I.far=E.far=S.far=ht,(B!==I.near||X!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,X=I.far),I.layers.mask=j.layers.mask|6,S.layers.mask=I.layers.mask&3,E.layers.mask=I.layers.mask&5;let Ct=j.parent,mt=I.cameras;Ut(I,Ct);for(let Qt=0;Qt<mt.length;Qt++)Ut(mt[Qt],Ct);mt.length===2?ft(I,S,E):I.projectionMatrix.copy(S.projectionMatrix),Ht(j,I,Ct)};function Ht(j,K,ht){ht===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ht.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(c===null&&h===null))return s},this.setFoveation=function(j){s=j,c!==null&&(c.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(I)},this.getCameraTexture=function(j){return d[j]};let Wt=null;function ee(j,K){if(f=K.getViewerPose(u||a),m=K,f!==null){let ht=f.views;h!==null&&(t.setRenderTargetFramebuffer(V,h.framebuffer),t.setRenderTarget(V));let Ct=!1;ht.length!==I.cameras.length&&(I.cameras.length=0,Ct=!0);for(let D=0;D<ht.length;D++){let oe=ht[D],$t=null;if(h!==null)$t=h.getViewport(oe);else{let gt=l.getViewSubImage(c,oe);$t=gt.viewport,D===0&&(t.setRenderTargetTextures(V,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(V))}let Mt=R[D];Mt===void 0&&(Mt=new Le,Mt.layers.enable(D),Mt.viewport=new Kt,R[D]=Mt),Mt.matrix.fromArray(oe.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(oe.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set($t.x,$t.y,$t.width,$t.height),D===0&&(I.matrix.copy(Mt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ct===!0&&I.cameras.push(Mt)}let mt=o.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&y){l=n.getBinding();let D=l.getDepthInformation(ht[0]);D&&D.isValid&&D.texture&&b.init(D,o.renderState)}if(mt&&mt.includes("camera-access")&&y){t.state.unbindTexture(),l=n.getBinding();for(let D=0;D<ht.length;D++){let oe=ht[D].camera;if(oe){let $t=d[oe];$t||($t=new Zr,d[oe]=$t);let Mt=l.getCameraImage(oe);$t.sourceTexture=Mt}}}}for(let ht=0;ht<C.length;ht++){let Ct=w[ht],mt=C[ht];Ct!==null&&mt!==void 0&&mt.update(Ct,K,u||a)}Wt&&Wt(j,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let jt=new _0;jt.setAnimationLoop(ee),this.setAnimationLoop=function(j){Wt=j},this.dispose=function(){}}},mi=new dn,D4=new Rt;function R4(i,t){function e(b,d){b.matrixAutoUpdate===!0&&b.updateMatrix(),d.value.copy(b.matrix)}function n(b,d){d.color.getRGB(b.fogColor.value,df(i)),d.isFog?(b.fogNear.value=d.near,b.fogFar.value=d.far):d.isFogExp2&&(b.fogDensity.value=d.density)}function o(b,d,T,P,V){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(b,d):d.isMeshToonMaterial?(r(b,d),l(b,d)):d.isMeshPhongMaterial?(r(b,d),f(b,d)):d.isMeshStandardMaterial?(r(b,d),c(b,d),d.isMeshPhysicalMaterial&&h(b,d,V)):d.isMeshMatcapMaterial?(r(b,d),m(b,d)):d.isMeshDepthMaterial?r(b,d):d.isMeshDistanceMaterial?(r(b,d),y(b,d)):d.isMeshNormalMaterial?r(b,d):d.isLineBasicMaterial?(a(b,d),d.isLineDashedMaterial&&p(b,d)):d.isPointsMaterial?s(b,d,T,P):d.isSpriteMaterial?u(b,d):d.isShadowMaterial?(b.color.value.copy(d.color),b.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(b,d){b.opacity.value=d.opacity,d.color&&b.diffuse.value.copy(d.color),d.emissive&&b.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(b.map.value=d.map,e(d.map,b.mapTransform)),d.alphaMap&&(b.alphaMap.value=d.alphaMap,e(d.alphaMap,b.alphaMapTransform)),d.bumpMap&&(b.bumpMap.value=d.bumpMap,e(d.bumpMap,b.bumpMapTransform),b.bumpScale.value=d.bumpScale,d.side===Ke&&(b.bumpScale.value*=-1)),d.normalMap&&(b.normalMap.value=d.normalMap,e(d.normalMap,b.normalMapTransform),b.normalScale.value.copy(d.normalScale),d.side===Ke&&b.normalScale.value.negate()),d.displacementMap&&(b.displacementMap.value=d.displacementMap,e(d.displacementMap,b.displacementMapTransform),b.displacementScale.value=d.displacementScale,b.displacementBias.value=d.displacementBias),d.emissiveMap&&(b.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,b.emissiveMapTransform)),d.specularMap&&(b.specularMap.value=d.specularMap,e(d.specularMap,b.specularMapTransform)),d.alphaTest>0&&(b.alphaTest.value=d.alphaTest);let T=t.get(d),P=T.envMap,V=T.envMapRotation;P&&(b.envMap.value=P,mi.copy(V),mi.x*=-1,mi.y*=-1,mi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),b.envMapRotation.value.setFromMatrix4(D4.makeRotationFromEuler(mi)),b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=d.reflectivity,b.ior.value=d.ior,b.refractionRatio.value=d.refractionRatio),d.lightMap&&(b.lightMap.value=d.lightMap,b.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,b.lightMapTransform)),d.aoMap&&(b.aoMap.value=d.aoMap,b.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,b.aoMapTransform))}function a(b,d){b.diffuse.value.copy(d.color),b.opacity.value=d.opacity,d.map&&(b.map.value=d.map,e(d.map,b.mapTransform))}function p(b,d){b.dashSize.value=d.dashSize,b.totalSize.value=d.dashSize+d.gapSize,b.scale.value=d.scale}function s(b,d,T,P){b.diffuse.value.copy(d.color),b.opacity.value=d.opacity,b.size.value=d.size*T,b.scale.value=P*.5,d.map&&(b.map.value=d.map,e(d.map,b.uvTransform)),d.alphaMap&&(b.alphaMap.value=d.alphaMap,e(d.alphaMap,b.alphaMapTransform)),d.alphaTest>0&&(b.alphaTest.value=d.alphaTest)}function u(b,d){b.diffuse.value.copy(d.color),b.opacity.value=d.opacity,b.rotation.value=d.rotation,d.map&&(b.map.value=d.map,e(d.map,b.mapTransform)),d.alphaMap&&(b.alphaMap.value=d.alphaMap,e(d.alphaMap,b.alphaMapTransform)),d.alphaTest>0&&(b.alphaTest.value=d.alphaTest)}function f(b,d){b.specular.value.copy(d.specular),b.shininess.value=Math.max(d.shininess,1e-4)}function l(b,d){d.gradientMap&&(b.gradientMap.value=d.gradientMap)}function c(b,d){b.metalness.value=d.metalness,d.metalnessMap&&(b.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,b.metalnessMapTransform)),b.roughness.value=d.roughness,d.roughnessMap&&(b.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,b.roughnessMapTransform)),d.envMap&&(b.envMapIntensity.value=d.envMapIntensity)}function h(b,d,T){b.ior.value=d.ior,d.sheen>0&&(b.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),b.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(b.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,b.sheenColorMapTransform)),d.sheenRoughnessMap&&(b.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,b.sheenRoughnessMapTransform))),d.clearcoat>0&&(b.clearcoat.value=d.clearcoat,b.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(b.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,b.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(b.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&b.clearcoatNormalScale.value.negate())),d.dispersion>0&&(b.dispersion.value=d.dispersion),d.iridescence>0&&(b.iridescence.value=d.iridescence,b.iridescenceIOR.value=d.iridescenceIOR,b.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(b.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,b.iridescenceMapTransform)),d.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),d.transmission>0&&(b.transmission.value=d.transmission,b.transmissionSamplerMap.value=T.texture,b.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(b.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,b.transmissionMapTransform)),b.thickness.value=d.thickness,d.thicknessMap&&(b.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=d.attenuationDistance,b.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(b.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(b.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=d.specularIntensity,b.specularColor.value.copy(d.specularColor),d.specularColorMap&&(b.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,b.specularColorMapTransform)),d.specularIntensityMap&&(b.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,b.specularIntensityMapTransform))}function m(b,d){d.matcap&&(b.matcap.value=d.matcap)}function y(b,d){let T=t.get(d).light;b.referencePosition.value.setFromMatrixPosition(T.matrixWorld),b.nearDistance.value=T.shadow.camera.near,b.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function M4(i,t,e,n){let o={},r={},a=[],p=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function s(T,P){let V=P.program;n.uniformBlockBinding(T,V)}function u(T,P){let V=o[T.id];V===void 0&&(m(T),V=f(T),o[T.id]=V,T.addEventListener("dispose",b));let C=P.program;n.updateUBOMapping(T,C);let w=t.render.frame;r[T.id]!==w&&(c(T),r[T.id]=w)}function f(T){let P=l();T.__bindingPointIndex=P;let V=i.createBuffer(),C=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,V),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,V),V}function l(){for(let T=0;T<p;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(T){let P=o[T.id],V=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let w=0,x=V.length;w<x;w++){let A=Array.isArray(V[w])?V[w]:[V[w]];for(let S=0,E=A.length;S<E;S++){let R=A[S];if(h(R,w,S,C)===!0){let I=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],X=0;for(let Y=0;Y<B.length;Y++){let Z=B[Y],nt=y(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,I+X,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,X),X+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(T,P,V,C){let w=T.value,x=P+"_"+V;if(C[x]===void 0)return typeof w=="number"||typeof w=="boolean"?C[x]=w:C[x]=w.clone(),!0;{let A=C[x];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[x]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function m(T){let P=T.uniforms,V=0,C=16;for(let x=0,A=P.length;x<A;x++){let S=Array.isArray(P[x])?P[x]:[P[x]];for(let E=0,R=S.length;E<R;E++){let I=S[E],B=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Y=B.length;X<Y;X++){let Z=B[X],nt=y(Z),J=V%C,tt=J%nt.boundary,ft=J+tt;V+=tt,ft!==0&&C-ft<nt.storage&&(V+=C-ft),I.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=V,V+=nt.storage}}}let w=V%C;return w>0&&(V+=C-w),T.__size=V,T.__cache={},this}function y(T){let P={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(P.boundary=4,P.storage=4):T.isVector2?(P.boundary=8,P.storage=8):T.isVector3||T.isColor?(P.boundary=16,P.storage=12):T.isVector4?(P.boundary=16,P.storage=16):T.isMatrix3?(P.boundary=48,P.storage=48):T.isMatrix4?(P.boundary=64,P.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),P}function b(T){let P=T.target;P.removeEventListener("dispose",b);let V=a.indexOf(P.__bindingPointIndex);a.splice(V,1),i.deleteBuffer(o[P.id]),delete o[P.id],delete r[P.id]}function d(){for(let T in o)i.deleteBuffer(o[T]);a=[],o={},r={}}return{bind:s,update:u,dispose:d}}var As=class{constructor(t={}){let{canvas:e=p0(),context:n=null,depth:o=!0,stencil:r=!1,alpha:a=!1,antialias:p=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;let m=new Uint32Array(4),y=new Int32Array(4),b=null,d=null,T=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mo,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,C=!1;this._outputColorSpace=Ue;let w=0,x=0,A=null,S=-1,E=null,R=new Kt,I=new Kt,B=null,X=new bt(0),Y=0,Z=e.width,nt=e.height,J=1,tt=null,ft=null,Ut=new Kt(0,0,Z,nt),Ht=new Kt(0,0,Z,nt),Wt=!1,ee=new nr,jt=!1,j=!1,K=new Rt,ht=new M,Ct=new Kt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Se(){return A===null?J:1}let D=n;function oe(U,O){return e.getContext(U,O)}try{let U={alpha:!0,depth:o,stencil:r,antialias:p,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",et,!1),D===null){let O="webgl2";if(D=oe(O,U),D===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let $t,Mt,gt,ie,Tt,kt,ge,le,L,g,H,z,W,N,Vt,rt,yt,Lt,ot,lt,At,wt,st,Ot;function v(){$t=new jy(D),$t.init(),wt=new w4(D,$t),Mt=new Jy(D,$t,t,wt),gt=new P4(D,$t),Mt.reversedDepthBuffer&&c&&gt.buffers.depth.setReversed(!0),ie=new Wy(D),Tt=new l4,kt=new L4(D,$t,gt,Tt,Mt,wt,ie),ge=new Xy(V),le=new Yy(V),L=new ib(D),st=new ky(D,L),g=new Gy(D,L,ie,st),H=new t3(D,g,L,ie),ot=new qy(D,Mt,kt),rt=new Ny(Tt),z=new f4(V,ge,le,$t,Mt,st,rt),W=new R4(V,Tt),N=new h4,Vt=new T4($t),Lt=new By(V,ge,le,gt,H,h,s),yt=new V4(V,H,Mt),Ot=new M4(D,ie,Mt,gt),lt=new Fy(D,$t,ie),At=new Ky(D,$t,ie),ie.programs=z.programs,V.capabilities=Mt,V.extensions=$t,V.properties=Tt,V.renderLists=N,V.shadowMap=yt,V.state=gt,V.info=ie}v();let q=new Mf(V,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let U=$t.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=$t.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(U){U!==void 0&&(J=U,this.setSize(Z,nt,!1))},this.getSize=function(U){return U.set(Z,nt)},this.setSize=function(U,O,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=U,nt=O,e.width=Math.floor(U*J),e.height=Math.floor(O*J),k===!0&&(e.style.width=U+"px",e.style.height=O+"px"),this.setViewport(0,0,U,O)},this.getDrawingBufferSize=function(U){return U.set(Z*J,nt*J).floor()},this.setDrawingBufferSize=function(U,O,k){Z=U,nt=O,J=k,e.width=Math.floor(U*k),e.height=Math.floor(O*k),this.setViewport(0,0,U,O)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy(Ut)},this.setViewport=function(U,O,k,F){U.isVector4?Ut.set(U.x,U.y,U.z,U.w):Ut.set(U,O,k,F),gt.viewport(R.copy(Ut).multiplyScalar(J).round())},this.getScissor=function(U){return U.copy(Ht)},this.setScissor=function(U,O,k,F){U.isVector4?Ht.set(U.x,U.y,U.z,U.w):Ht.set(U,O,k,F),gt.scissor(I.copy(Ht).multiplyScalar(J).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(U){gt.setScissorTest(Wt=U)},this.setOpaqueSort=function(U){tt=U},this.setTransparentSort=function(U){ft=U},this.getClearColor=function(U){return U.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(U=!0,O=!0,k=!0){let F=0;if(U){let _=!1;if(A!==null){let it=A.texture.format;_=it===Kp||it===Gp||it===jp}if(_){let it=A.texture.type,ct=it===bn||it===Mo||it===sr||it===vo||it===Zp||it===zp,St=Lt.getClearColor(),dt=Lt.getClearAlpha(),It=St.r,_t=St.g,xt=St.b;ct?(m[0]=It,m[1]=_t,m[2]=xt,m[3]=dt,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=It,y[1]=_t,y[2]=xt,y[3]=dt,D.clearBufferiv(D.COLOR,0,y))}else F|=D.COLOR_BUFFER_BIT}O&&(F|=D.DEPTH_BUFFER_BIT),k&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Lt.dispose(),N.dispose(),Vt.dispose(),Tt.dispose(),ge.dispose(),le.dispose(),H.dispose(),st.dispose(),Ot.dispose(),z.dispose(),q.dispose(),q.removeEventListener("sessionstart",Bn),q.removeEventListener("sessionend",Ol),Bo.stop()};function at(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let U=ie.autoReset,O=yt.enabled,k=yt.autoUpdate,F=yt.needsUpdate,_=yt.type;v(),ie.autoReset=U,yt.enabled=O,yt.autoUpdate=k,yt.needsUpdate=F,yt.type=_}function et(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function G(U){let O=U.target;O.removeEventListener("dispose",G),Pt(O)}function Pt(U){Ft(U),Tt.remove(U)}function Ft(U){let O=Tt.get(U).programs;O!==void 0&&(O.forEach(function(k){z.releaseProgram(k)}),U.isShaderMaterial&&z.releaseShaderCache(U))}this.renderBufferDirect=function(U,O,k,F,_,it){O===null&&(O=mt);let ct=_.isMesh&&_.matrixWorld.determinant()<0,St=Ah(U,O,k,F,_);gt.setMaterial(F,ct);let dt=k.index,It=1;if(F.wireframe===!0){if(dt=g.getWireframeAttribute(k),dt===void 0)return;It=2}let _t=k.drawRange,xt=k.attributes.position,Yt=_t.start*It,re=(_t.start+_t.count)*It;it!==null&&(Yt=Math.max(Yt,it.start*It),re=Math.min(re,(it.start+it.count)*It)),dt!==null?(Yt=Math.max(Yt,0),re=Math.min(re,dt.count)):xt!=null&&(Yt=Math.max(Yt,0),re=Math.min(re,xt.count));let Te=re-Yt;if(Te<0||Te===1/0)return;st.setup(_,F,St,k,dt);let ce,se=lt;if(dt!==null&&(ce=L.get(dt),se=At,se.setIndex(ce)),_.isMesh)F.wireframe===!0?(gt.setLineWidth(F.wireframeLinewidth*Se()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(_.isLine){let vt=F.linewidth;vt===void 0&&(vt=1),gt.setLineWidth(vt*Se()),_.isLineSegments?se.setMode(D.LINES):_.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else _.isPoints?se.setMode(D.POINTS):_.isSprite&&se.setMode(D.TRIANGLES);if(_.isBatchedMesh)if(_._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(_._multiDrawStarts,_._multiDrawCounts,_._multiDrawCount,_._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))se.renderMultiDraw(_._multiDrawStarts,_._multiDrawCounts,_._multiDrawCount);else{let vt=_._multiDrawStarts,me=_._multiDrawCounts,Gt=_._multiDrawCount,sn=dt?L.get(dt).bytesPerElement:1,wi=Tt.get(F).currentProgram.getUniforms();for(let un=0;un<Gt;un++)wi.setValue(D,"_gl_DrawID",un),se.render(vt[un]/sn,me[un])}else if(_.isInstancedMesh)se.renderInstances(Yt,Te,_.count);else if(k.isInstancedBufferGeometry){let vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,me=Math.min(k.instanceCount,vt);se.renderInstances(Yt,Te,me)}else se.render(Yt,Te)};function ue(U,O,k){U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=Ke,U.needsUpdate=!0,Ca(U,O,k),U.side=An,U.needsUpdate=!0,Ca(U,O,k),U.side=Vn):Ca(U,O,k)}this.compile=function(U,O,k=null){k===null&&(k=U),d=Vt.get(k),d.init(O),P.push(d),k.traverseVisible(function(_){_.isLight&&_.layers.test(O.layers)&&(d.pushLight(_),_.castShadow&&d.pushShadow(_))}),U!==k&&U.traverseVisible(function(_){_.isLight&&_.layers.test(O.layers)&&(d.pushLight(_),_.castShadow&&d.pushShadow(_))}),d.setupLights();let F=new Set;return U.traverse(function(_){if(!(_.isMesh||_.isPoints||_.isLine||_.isSprite))return;let it=_.material;if(it)if(Array.isArray(it))for(let ct=0;ct<it.length;ct++){let St=it[ct];ue(St,k,_),F.add(St)}else ue(it,k,_),F.add(it)}),d=P.pop(),F},this.compileAsync=function(U,O,k=null){let F=this.compile(U,O,k);return new Promise(_=>{function it(){if(F.forEach(function(ct){Tt.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){_(U);return}setTimeout(it,10)}$t.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let te=null;function qn(U){te&&te(U)}function Bn(){Bo.stop()}function Ol(){Bo.start()}let Bo=new _0;Bo.setAnimationLoop(qn),typeof self<"u"&&Bo.setContext(self),this.setAnimationLoop=function(U){te=U,q.setAnimationLoop(U),U===null?Bo.stop():Bo.start()},q.addEventListener("sessionstart",Bn),q.addEventListener("sessionend",Ol),this.render=function(U,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),U.isScene===!0&&U.onBeforeRender(V,U,O,A),d=Vt.get(U,P.length),d.init(O),P.push(d),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(K,Mn,O.reversedDepth),j=this.localClippingEnabled,jt=rt.init(this.clippingPlanes,j),b=N.get(U,T.length),b.init(),T.push(b),q.enabled===!0&&q.isPresenting===!0){let it=V.xr.getDepthSensingMesh();it!==null&&iu(it,O,-1/0,V.sortObjects)}iu(U,O,0,V.sortObjects),b.finish(),V.sortObjects===!0&&b.sort(tt,ft),Qt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qt&&Lt.addToRenderList(b,U),this.info.render.frame++,jt===!0&&rt.beginShadows();let k=d.state.shadowsArray;yt.render(k,U,O),jt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=b.opaque,_=b.transmissive;if(d.setupLights(),O.isArrayCamera){let it=O.cameras;if(_.length>0)for(let ct=0,St=it.length;ct<St;ct++){let dt=it[ct];$l(F,_,U,dt)}Qt&&Lt.render(U);for(let ct=0,St=it.length;ct<St;ct++){let dt=it[ct];_l(b,U,dt,dt.viewport)}}else _.length>0&&$l(F,_,U,O),Qt&&Lt.render(U),_l(b,U,O);A!==null&&x===0&&(kt.updateMultisampleRenderTarget(A),kt.updateRenderTargetMipmap(A)),U.isScene===!0&&U.onAfterRender(V,U,O),st.resetDefaultState(),S=-1,E=null,P.pop(),P.length>0?(d=P[P.length-1],jt===!0&&rt.setGlobalState(V.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function iu(U,O,k,F){if(U.visible===!1)return;if(U.layers.test(O.layers)){if(U.isGroup)k=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(O);else if(U.isLight)d.pushLight(U),U.castShadow&&d.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ee.intersectsSprite(U)){F&&Ct.setFromMatrixPosition(U.matrixWorld).applyMatrix4(K);let ct=H.update(U),St=U.material;St.visible&&b.push(U,ct,St,k,Ct.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ee.intersectsObject(U))){let ct=H.update(U),St=U.material;if(F&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ct.copy(U.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ct.copy(ct.boundingSphere.center)),Ct.applyMatrix4(U.matrixWorld).applyMatrix4(K)),Array.isArray(St)){let dt=ct.groups;for(let It=0,_t=dt.length;It<_t;It++){let xt=dt[It],Yt=St[xt.materialIndex];Yt&&Yt.visible&&b.push(U,ct,Yt,k,Ct.z,xt)}}else St.visible&&b.push(U,ct,St,k,Ct.z,null)}}let it=U.children;for(let ct=0,St=it.length;ct<St;ct++)iu(it[ct],O,k,F)}function _l(U,O,k,F){let _=U.opaque,it=U.transmissive,ct=U.transparent;d.setupLightsView(k),jt===!0&&rt.setGlobalState(V.clippingPlanes,k),F&&gt.viewport(R.copy(F)),_.length>0&&wa(_,O,k),it.length>0&&wa(it,O,k),ct.length>0&&wa(ct,O,k),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function $l(U,O,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new ke(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?mn:bn,minFilter:_n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let it=d.state.transmissionRenderTarget[F.id],ct=F.viewport||R;it.setSize(ct.z*V.transmissionResolutionScale,ct.w*V.transmissionResolutionScale);let St=V.getRenderTarget(),dt=V.getActiveCubeFace(),It=V.getActiveMipmapLevel();V.setRenderTarget(it),V.getClearColor(X),Y=V.getClearAlpha(),Y<1&&V.setClearColor(16777215,.5),V.clear(),Qt&&Lt.render(k);let _t=V.toneMapping;V.toneMapping=mo;let xt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),jt===!0&&rt.setGlobalState(V.clippingPlanes,F),wa(U,k,F),kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let re=0,Te=O.length;re<Te;re++){let ce=O[re],se=ce.object,vt=ce.geometry,me=ce.material,Gt=ce.group;if(me.side===Vn&&se.layers.test(F.layers)){let sn=me.side;me.side=Ke,me.needsUpdate=!0,Hl(se,k,F,vt,me,Gt),me.side=sn,me.needsUpdate=!0,Yt=!0}}Yt===!0&&(kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it))}V.setRenderTarget(St,dt,It),V.setClearColor(X,Y),xt!==void 0&&(F.viewport=xt),V.toneMapping=_t}function wa(U,O,k){let F=O.isScene===!0?O.overrideMaterial:null;for(let _=0,it=U.length;_<it;_++){let ct=U[_],St=ct.object,dt=ct.geometry,It=ct.group,_t=ct.material;_t.allowOverride===!0&&F!==null&&(_t=F),St.layers.test(k.layers)&&Hl(St,O,k,dt,_t,It)}}function Hl(U,O,k,F,_,it){U.onBeforeRender(V,O,k,F,_,it),U.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),_.onBeforeRender(V,O,k,F,U,it),_.transparent===!0&&_.side===Vn&&_.forceSinglePass===!1?(_.side=Ke,_.needsUpdate=!0,V.renderBufferDirect(k,O,F,_,U,it),_.side=An,_.needsUpdate=!0,V.renderBufferDirect(k,O,F,_,U,it),_.side=Vn):V.renderBufferDirect(k,O,F,_,U,it),U.onAfterRender(V,O,k,F,_,it)}function Ca(U,O,k){O.isScene!==!0&&(O=mt);let F=Tt.get(U),_=d.state.lights,it=d.state.shadowsArray,ct=_.state.version,St=z.getParameters(U,_.state,it,O,k),dt=z.getProgramCacheKey(St),It=F.programs;F.environment=U.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(U.isMeshStandardMaterial?le:ge).get(U.envMap||F.environment),F.envMapRotation=F.environment!==null&&U.envMap===null?O.environmentRotation:U.envMapRotation,It===void 0&&(U.addEventListener("dispose",G),It=new Map,F.programs=It);let _t=It.get(dt);if(_t!==void 0){if(F.currentProgram===_t&&F.lightsStateVersion===ct)return kl(U,St),_t}else St.uniforms=z.getUniforms(U),U.onBeforeCompile(St,V),_t=z.acquireProgram(St,dt),It.set(dt,_t),F.uniforms=St.uniforms;let xt=F.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(xt.clippingPlanes=rt.uniform),kl(U,St),F.needsLights=Oh(U),F.lightsStateVersion=ct,F.needsLights&&(xt.ambientLightColor.value=_.state.ambient,xt.lightProbe.value=_.state.probe,xt.directionalLights.value=_.state.directional,xt.directionalLightShadows.value=_.state.directionalShadow,xt.spotLights.value=_.state.spot,xt.spotLightShadows.value=_.state.spotShadow,xt.rectAreaLights.value=_.state.rectArea,xt.ltc_1.value=_.state.rectAreaLTC1,xt.ltc_2.value=_.state.rectAreaLTC2,xt.pointLights.value=_.state.point,xt.pointLightShadows.value=_.state.pointShadow,xt.hemisphereLights.value=_.state.hemi,xt.directionalShadowMap.value=_.state.directionalShadowMap,xt.directionalShadowMatrix.value=_.state.directionalShadowMatrix,xt.spotShadowMap.value=_.state.spotShadowMap,xt.spotLightMatrix.value=_.state.spotLightMatrix,xt.spotLightMap.value=_.state.spotLightMap,xt.pointShadowMap.value=_.state.pointShadowMap,xt.pointShadowMatrix.value=_.state.pointShadowMatrix),F.currentProgram=_t,F.uniformsList=null,_t}function Bl(U){if(U.uniformsList===null){let O=U.currentProgram.getUniforms();U.uniformsList=cr.seqWithValue(O.seq,U.uniforms)}return U.uniformsList}function kl(U,O){let k=Tt.get(U);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Ah(U,O,k,F,_){O.isScene!==!0&&(O=mt),kt.resetTextureUnits();let it=O.fog,ct=F.isMeshStandardMaterial?O.environment:null,St=A===null?V.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Be,dt=(F.isMeshStandardMaterial?le:ge).get(F.envMap||ct),It=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,_t=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xt=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,re=!!k.morphAttributes.color,Te=mo;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Te=V.toneMapping);let ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=ce!==void 0?ce.length:0,vt=Tt.get(F),me=d.state.lights;if(jt===!0&&(j===!0||U!==E)){let Ze=U===E&&F.id===S;rt.setState(F,U,Ze)}let Gt=!1;F.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==me.state.version||vt.outputColorSpace!==St||_.isBatchedMesh&&vt.batching===!1||!_.isBatchedMesh&&vt.batching===!0||_.isBatchedMesh&&vt.batchingColor===!0&&_.colorTexture===null||_.isBatchedMesh&&vt.batchingColor===!1&&_.colorTexture!==null||_.isInstancedMesh&&vt.instancing===!1||!_.isInstancedMesh&&vt.instancing===!0||_.isSkinnedMesh&&vt.skinning===!1||!_.isSkinnedMesh&&vt.skinning===!0||_.isInstancedMesh&&vt.instancingColor===!0&&_.instanceColor===null||_.isInstancedMesh&&vt.instancingColor===!1&&_.instanceColor!==null||_.isInstancedMesh&&vt.instancingMorph===!0&&_.morphTexture===null||_.isInstancedMesh&&vt.instancingMorph===!1&&_.morphTexture!==null||vt.envMap!==dt||F.fog===!0&&vt.fog!==it||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==rt.numPlanes||vt.numIntersection!==rt.numIntersection)||vt.vertexAlphas!==It||vt.vertexTangents!==_t||vt.morphTargets!==xt||vt.morphNormals!==Yt||vt.morphColors!==re||vt.toneMapping!==Te||vt.morphTargetsCount!==se)&&(Gt=!0):(Gt=!0,vt.__version=F.version);let sn=vt.currentProgram;Gt===!0&&(sn=Ca(F,O,_));let wi=!1,un=!1,mr=!1,ye=sn.getUniforms(),gn=vt.uniforms;if(gt.useProgram(sn.program)&&(wi=!0,un=!0,mr=!0),F.id!==S&&(S=F.id,un=!0),wi||E!==U){gt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),ye.setValue(D,"projectionMatrix",U.projectionMatrix),ye.setValue(D,"viewMatrix",U.matrixWorldInverse);let qe=ye.map.cameraPosition;qe!==void 0&&qe.setValue(D,ht.setFromMatrixPosition(U.matrixWorld)),Mt.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ye.setValue(D,"isOrthographic",U.isOrthographicCamera===!0),E!==U&&(E=U,un=!0,mr=!0)}if(_.isSkinnedMesh){ye.setOptional(D,_,"bindMatrix"),ye.setOptional(D,_,"bindMatrixInverse");let Ze=_.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ye.setValue(D,"boneTexture",Ze.boneTexture,kt))}_.isBatchedMesh&&(ye.setOptional(D,_,"batchingTexture"),ye.setValue(D,"batchingTexture",_._matricesTexture,kt),ye.setOptional(D,_,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",_._indirectTexture,kt),ye.setOptional(D,_,"batchingColorTexture"),_._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",_._colorsTexture,kt));let Tn=k.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ot.update(_,k,sn),(un||vt.receiveShadow!==_.receiveShadow)&&(vt.receiveShadow=_.receiveShadow,ye.setValue(D,"receiveShadow",_.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(gn.envMap.value=dt,gn.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),un&&(ye.setValue(D,"toneMappingExposure",V.toneMappingExposure),vt.needsLights&&Ih(gn,mr),it&&F.fog===!0&&W.refreshFogUniforms(gn,it),W.refreshMaterialUniforms(gn,F,J,nt,d.state.transmissionRenderTarget[U.id]),cr.upload(D,Bl(vt),gn,kt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(cr.upload(D,Bl(vt),gn,kt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ye.setValue(D,"center",_.center),ye.setValue(D,"modelViewMatrix",_.modelViewMatrix),ye.setValue(D,"normalMatrix",_.normalMatrix),ye.setValue(D,"modelMatrix",_.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ze=F.uniformsGroups;for(let qe=0,ru=Ze.length;qe<ru;qe++){let ko=Ze[qe];Ot.update(ko,sn),Ot.bind(ko,sn)}}return sn}function Ih(U,O){U.ambientLightColor.needsUpdate=O,U.lightProbe.needsUpdate=O,U.directionalLights.needsUpdate=O,U.directionalLightShadows.needsUpdate=O,U.pointLights.needsUpdate=O,U.pointLightShadows.needsUpdate=O,U.spotLights.needsUpdate=O,U.spotLightShadows.needsUpdate=O,U.rectAreaLights.needsUpdate=O,U.hemisphereLights.needsUpdate=O}function Oh(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(U,O,k){let F=Tt.get(U);F.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Tt.get(U.texture).__webglTexture=O,Tt.get(U.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,O){let k=Tt.get(U);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};let _h=D.createFramebuffer();this.setRenderTarget=function(U,O=0,k=0){A=U,w=O,x=k;let F=!0,_=null,it=!1,ct=!1;if(U){let dt=Tt.get(U);if(dt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(dt.__webglFramebuffer===void 0)kt.setupRenderTarget(U);else if(dt.__hasExternalTextures)kt.rebindTextures(U,Tt.get(U.texture).__webglTexture,Tt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let xt=U.depthTexture;if(dt.__boundDepthTexture!==xt){if(xt!==null&&Tt.has(xt)&&(U.width!==xt.image.width||U.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(U)}}let It=U.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ct=!0);let _t=Tt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(_t[O])?_=_t[O][k]:_=_t[O],it=!0):U.samples>0&&kt.useMultisampledRTT(U)===!1?_=Tt.get(U).__webglMultisampledFramebuffer:Array.isArray(_t)?_=_t[k]:_=_t,R.copy(U.viewport),I.copy(U.scissor),B=U.scissorTest}else R.copy(Ut).multiplyScalar(J).floor(),I.copy(Ht).multiplyScalar(J).floor(),B=Wt;if(k!==0&&(_=_h),gt.bindFramebuffer(D.FRAMEBUFFER,_)&&F&&gt.drawBuffers(U,_),gt.viewport(R),gt.scissor(I),gt.setScissorTest(B),it){let dt=Tt.get(U.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,k)}else if(ct){let dt=O;for(let It=0;It<U.textures.length;It++){let _t=Tt.get(U.textures[It]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+It,_t.__webglTexture,k,dt)}}else if(U!==null&&k!==0){let dt=Tt.get(U.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(U,O,k,F,_,it,ct,St=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Tt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){gt.bindFramebuffer(D.FRAMEBUFFER,dt);try{let It=U.textures[St],_t=It.format,xt=It.type;if(!Mt.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=U.width-F&&k>=0&&k<=U.height-_&&(U.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),D.readPixels(O,k,F,_,wt.convert(_t),wt.convert(xt),it))}finally{let It=A!==null?Tt.get(A).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(U,O,k,F,_,it,ct,St=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Tt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(O>=0&&O<=U.width-F&&k>=0&&k<=U.height-_){gt.bindFramebuffer(D.FRAMEBUFFER,dt);let It=U.textures[St],_t=It.format,xt=It.type;if(!Mt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),U.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),D.readPixels(O,k,F,_,wt.convert(_t),wt.convert(xt),0);let re=A!==null?Tt.get(A).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,re);let Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await s0(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Yt),D.deleteSync(Te),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,O=null,k=0){let F=Math.pow(2,-k),_=Math.floor(U.image.width*F),it=Math.floor(U.image.height*F),ct=O!==null?O.x:0,St=O!==null?O.y:0;kt.setTexture2D(U,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ct,St,_,it),gt.unbindTexture()};let $h=D.createFramebuffer(),Hh=D.createFramebuffer();this.copyTextureToTexture=function(U,O,k=null,F=null,_=0,it=null){it===null&&(_!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=_,_=0):it=0);let ct,St,dt,It,_t,xt,Yt,re,Te,ce=U.isCompressedTexture?U.mipmaps[it]:U.image;if(k!==null)ct=k.max.x-k.min.x,St=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,It=k.min.x,_t=k.min.y,xt=k.isBox3?k.min.z:0;else{let Tn=Math.pow(2,-_);ct=Math.floor(ce.width*Tn),St=Math.floor(ce.height*Tn),U.isDataArrayTexture?dt=ce.depth:U.isData3DTexture?dt=Math.floor(ce.depth*Tn):dt=1,It=0,_t=0,xt=0}F!==null?(Yt=F.x,re=F.y,Te=F.z):(Yt=0,re=0,Te=0);let se=wt.convert(O.format),vt=wt.convert(O.type),me;O.isData3DTexture?(kt.setTexture3D(O,0),me=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(kt.setTexture2DArray(O,0),me=D.TEXTURE_2D_ARRAY):(kt.setTexture2D(O,0),me=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Gt=D.getParameter(D.UNPACK_ROW_LENGTH),sn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wi=D.getParameter(D.UNPACK_SKIP_PIXELS),un=D.getParameter(D.UNPACK_SKIP_ROWS),mr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,_t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xt);let ye=U.isDataArrayTexture||U.isData3DTexture,gn=O.isDataArrayTexture||O.isData3DTexture;if(U.isDepthTexture){let Tn=Tt.get(U),Ze=Tt.get(O),qe=Tt.get(Tn.__renderTarget),ru=Tt.get(Ze.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,qe.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ru.__webglFramebuffer);for(let ko=0;ko<dt;ko++)ye&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,_,xt+ko),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,it,Te+ko)),D.blitFramebuffer(It,_t,ct,St,Yt,re,ct,St,D.DEPTH_BUFFER_BIT,D.NEAREST);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(_!==0||U.isRenderTargetTexture||Tt.has(U)){let Tn=Tt.get(U),Ze=Tt.get(O);gt.bindFramebuffer(D.READ_FRAMEBUFFER,$h),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hh);for(let qe=0;qe<dt;qe++)ye?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tn.__webglTexture,_,xt+qe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tn.__webglTexture,_),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,it,Te+qe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,it),_!==0?D.blitFramebuffer(It,_t,ct,St,Yt,re,ct,St,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(me,it,Yt,re,Te+qe,It,_t,ct,St):D.copyTexSubImage2D(me,it,Yt,re,It,_t,ct,St);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?U.isDataTexture||U.isData3DTexture?D.texSubImage3D(me,it,Yt,re,Te,ct,St,dt,se,vt,ce.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(me,it,Yt,re,Te,ct,St,dt,se,ce.data):D.texSubImage3D(me,it,Yt,re,Te,ct,St,dt,se,vt,ce):U.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,Yt,re,ct,St,se,vt,ce.data):U.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,Yt,re,ce.width,ce.height,se,ce.data):D.texSubImage2D(D.TEXTURE_2D,it,Yt,re,ct,St,se,vt,ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,Gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,sn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wi),D.pixelStorei(D.UNPACK_SKIP_ROWS,un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,mr),it===0&&O.generateMipmaps&&D.generateMipmap(me),gt.unbindTexture()},this.initRenderTarget=function(U){Tt.get(U).__webglFramebuffer===void 0&&kt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?kt.setTextureCube(U,0):U.isData3DTexture?kt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?kt.setTexture2DArray(U,0):kt.setTexture2D(U,0),gt.unbindTexture()},this.resetState=function(){w=0,x=0,A=null,gt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};function F0(i){let t=new Map,e=new Map,n=i.clone();return J0(i,n,function(o,r){t.set(r,o),e.set(o,r)}),n.traverse(function(o){if(!o.isSkinnedMesh)return;let r=o,a=t.get(o),p=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=p.map(function(s){return e.get(s)}),r.bind(r.skeleton,r.bindMatrix)}),n}function J0(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)J0(i.children[n],t.children[n],e)}function Af(i,t){if(t===uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===ur||t===da){let e=i.getIndex();if(e===null){let a=[],p=i.getAttribute("position");if(p!==void 0){for(let s=0;s<p.count;s++)a.push(s);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,o=[];if(t===ur)for(let a=1;a<=n;a++)o.push(e.getX(0)),o.push(e.getX(a)),o.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(o.push(e.getX(a)),o.push(e.getX(a+1)),o.push(e.getX(a+2))):(o.push(e.getX(a+2)),o.push(e.getX(a+1)),o.push(e.getX(a)));o.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(o),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var _s=class extends zn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new kf(e)}),this.register(function(e){return new Ff(e)}),this.register(function(e){return new Gf(e)}),this.register(function(e){return new Kf(e)}),this.register(function(e){return new Wf(e)}),this.register(function(e){return new Nf(e)}),this.register(function(e){return new Xf(e)}),this.register(function(e){return new Qf(e)}),this.register(function(e){return new Zf(e)}),this.register(function(e){return new Bf(e)}),this.register(function(e){return new zf(e)}),this.register(function(e){return new Jf(e)}),this.register(function(e){return new jf(e)}),this.register(function(e){return new Yf(e)}),this.register(function(e){return new $f(e)}),this.register(function(e){return new qf(e)}),this.register(function(e){return new tl(e)})}load(t,e,n,o){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=bo.extractUrlBase(t);a=bo.resolveURL(u,this.path)}else a=bo.extractUrlBase(t);this.manager.itemStart(t);let p=function(u){o?o(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},s=new rr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(u){try{r.parse(u,a,function(f){e(f),r.manager.itemEnd(t)},p)}catch(f){p(f)}},n,p)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,o){let r,a={},p={},s=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(s.decode(new Uint8Array(t,0,4))===z0){try{a[zt.KHR_BINARY_GLTF]=new el(t)}catch(l){o&&o(l);return}r=JSON.parse(a[zt.KHR_BINARY_GLTF].content)}else r=JSON.parse(s.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new sl(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let l=this.pluginCallbacks[f](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),p[l.name]=l,a[l.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let l=r.extensionsUsed[f],c=r.extensionsRequired||[];switch(l){case zt.KHR_MATERIALS_UNLIT:a[l]=new Hf;break;case zt.KHR_DRACO_MESH_COMPRESSION:a[l]=new nl(r,this.dracoLoader);break;case zt.KHR_TEXTURE_TRANSFORM:a[l]=new ol;break;case zt.KHR_MESH_QUANTIZATION:a[l]=new il;break;default:c.indexOf(l)>=0&&p[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(p),u.parse(n,o)}parseAsync(t,e){let n=this;return new Promise(function(o,r){n.parse(t,e,o,r)})}};function A4(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$f=class{constructor(t){this.parser=t,this.name=zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,o=e.length;n<o;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,o=e.cache.get(n);if(o)return o;let r=e.json,s=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],u,f=new bt(16777215);s.color!==void 0&&f.setRGB(s.color[0],s.color[1],s.color[2],Be);let l=s.range!==void 0?s.range:0;switch(s.type){case"directional":u=new ui(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new ea(f),u.distance=l;break;case"spot":u=new ta(f),u.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,u.angle=s.spot.outerConeAngle,u.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return u.position.set(0,0,0),Gn(u,s),s.intensity!==void 0&&(u.intensity=s.intensity),u.name=e.createUniqueName(s.name||"light_"+t),o=Promise.resolve(u),e.cache.add(n,o),o}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],p=(r.extensions&&r.extensions[this.name]||{}).light;return p===void 0?null:this._loadLight(p).then(function(s){return n._getNodeRef(e.cache,p,s)})}},Hf=class{constructor(){this.name=zt.KHR_MATERIALS_UNLIT}getMaterialType(){return xe}extendParams(t,e,n){let o=[];t.color=new bt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Be),t.opacity=a[3]}r.baseColorTexture!==void 0&&o.push(n.assignTexture(t,"map",r.baseColorTexture,Ue))}return Promise.all(o)}},Bf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},kf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let p=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Dt(p,p)}return Promise.all(r)}},Ff=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Jf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Nf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new bt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=o.extensions[this.name];if(a.sheenColorFactor!==void 0){let p=a.sheenColorFactor;e.sheenColor.setRGB(p[0],p[1],p[2],Be)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ue)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Xf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Qf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let p=a.attenuationColor||[1,1,1];return e.attenuationColor=new bt().setRGB(p[0],p[1],p[2],Be),Promise.all(r)}},Zf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},zf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let p=a.specularColorFactor||[1,1,1];return e.specularColor=new bt().setRGB(p[0],p[1],p[2],Be),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ue)),Promise.all(r)}},Yf=class{constructor(t){this.parser=t,this.name=zt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}},jf=class{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Gf=class{constructor(t){this.parser=t,this.name=zt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,o=n.textures[t];if(!o.extensions||!o.extensions[this.name])return null;let r=o.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},Kf=class{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},Wf=class{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},qf=class{constructor(t){this.name=zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let o=n.extensions[this.name],r=this.parser.getDependency("buffer",o.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(p){let s=o.byteOffset||0,u=o.byteLength||0,f=o.count,l=o.byteStride,c=new Uint8Array(p,s,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,l,c,o.mode,o.filter).then(function(h){return h.buffer}):a.ready.then(function(){let h=new ArrayBuffer(f*l);return a.decodeGltfBuffer(new Uint8Array(h),f,l,c,o.mode,o.filter),h})})}else return null}},tl=class{constructor(t){this.name=zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let o=e.meshes[n.mesh];for(let u of o.primitives)if(u.mode!==Ln.TRIANGLES&&u.mode!==Ln.TRIANGLE_STRIP&&u.mode!==Ln.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,p=[],s={};for(let u in a)p.push(this.parser.getDependency("accessor",a[u]).then(f=>(s[u]=f,s[u])));return p.length<1?null:(p.push(this.parser.createNodeMesh(t)),Promise.all(p).then(u=>{let f=u.pop(),l=f.isGroup?f.children:[f],c=u[0].count,h=[];for(let m of l){let y=new Rt,b=new M,d=new we,T=new M(1,1,1),P=new In(m.geometry,m.material,c);for(let V=0;V<c;V++)s.TRANSLATION&&b.fromBufferAttribute(s.TRANSLATION,V),s.ROTATION&&d.fromBufferAttribute(s.ROTATION,V),s.SCALE&&T.fromBufferAttribute(s.SCALE,V),P.setMatrixAt(V,y.compose(b,d,T));for(let V in s)if(V==="_COLOR_0"){let C=s[V];P.instanceColor=new Do(C.array,C.itemSize,C.normalized)}else V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"&&m.geometry.setAttribute(V,s[V]);be.prototype.copy.call(P,m),this.parser.assignFinalMaterial(P),h.push(P)}return f.isGroup?(f.clear(),f.add(...h),f):h[0]}))}},z0="glTF",ya=12,N0={JSON:1313821514,BIN:5130562},el=class{constructor(t){this.name=zt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let o=this.header.length-ya,r=new DataView(t,ya),a=0;for(;a<o;){let p=r.getUint32(a,!0);a+=4;let s=r.getUint32(a,!0);if(a+=4,s===N0.JSON){let u=new Uint8Array(t,ya+a,p);this.content=n.decode(u)}else if(s===N0.BIN){let u=ya+a;this.body=t.slice(u,u+p)}a+=p}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,o=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,p={},s={},u={};for(let f in a){let l=al[f]||f.toLowerCase();p[l]=a[f]}for(let f in t.attributes){let l=al[f]||f.toLowerCase();if(a[f]!==void 0){let c=n.accessors[t.attributes[f]],h=dr[c.componentType];u[l]=h.name,s[l]=c.normalized===!0}}return e.getDependency("bufferView",r).then(function(f){return new Promise(function(l,c){o.decodeDracoFile(f,function(h){for(let m in h.attributes){let y=h.attributes[m],b=s[m];b!==void 0&&(y.normalized=b)}l(h)},p,u,Be,c)})})}},ol=class{constructor(){this.name=zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},il=class{constructor(){this.name=zt.KHR_MESH_QUANTIZATION}},$s=class extends fo{constructor(t,e,n,o){super(t,e,n,o)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o*3+o;for(let a=0;a!==o;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=p*2,u=p*3,f=o-e,l=(n-e)/f,c=l*l,h=c*l,m=t*u,y=m-u,b=-2*h+3*c,d=h-c,T=1-b,P=d-c+l;for(let V=0;V!==p;V++){let C=a[y+V+p],w=a[y+V+s]*f,x=a[m+V+p],A=a[m+V]*f;r[V]=T*C+P*w+b*x+d*A}return r}},I4=new we,rl=class extends $s{interpolate_(t,e,n,o){let r=super.interpolate_(t,e,n,o);return I4.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},X0={9728:Ce,9729:je,9984:Xp,9985:pr,9986:hi,9987:_n},Q0={33071:Fn,33648:Zi,10497:tn},If={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Io={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O4={CUBICSPLINE:void 0,LINEAR:Wo,STEP:Ko},Of={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _4(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new On({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),i.DefaultMaterial}function Ti(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Gn(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function $4(i,t,e){let n=!1,o=!1,r=!1;for(let u=0,f=t.length;u<f;u++){let l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(o=!0),l.COLOR_0!==void 0&&(r=!0),n&&o&&r)break}if(!n&&!o&&!r)return Promise.resolve(i);let a=[],p=[],s=[];for(let u=0,f=t.length;u<f;u++){let l=t[u];if(n){let c=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;a.push(c)}if(o){let c=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;p.push(c)}if(r){let c=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;s.push(c)}}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s)]).then(function(u){let f=u[0],l=u[1],c=u[2];return n&&(i.morphAttributes.position=f),o&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=c),i.morphTargetsRelative=!0,i})}function H4(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,o=e.length;n<o;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function B4(i){let t,e=i.extensions&&i.extensions[zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+_f(e.attributes):t=i.indices+":"+_f(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,o=i.targets.length;n<o;n++)t+=":"+_f(i.targets[n]);return t}function _f(i){let t="",e=Object.keys(i).sort();for(let n=0,o=e.length;n<o;n++)t+=e[n]+":"+i[e[n]]+";";return t}function pl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k4(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var F4=new Rt,sl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new A4,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,r=!1,a=-1;if(typeof navigator<"u"){let p=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(p)===!0;let s=p.match(/Version\/(\d+)/);o=n&&s?parseInt(s[1],10):-1,r=p.indexOf("Firefox")>-1,a=r?p.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&o<17||r&&a<98?this.textureLoader=new Kr(this.options.manager):this.textureLoader=new na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,o=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let p={scene:a[0][o.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:o.asset,parser:n,userData:{}};return Ti(r,p,o),Gn(p,o),Promise.all(n._invokeAll(function(s){return s.afterRoot&&s.afterRoot(p)})).then(function(){for(let s of p.scenes)s.updateMatrixWorld();t(p)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let o=0,r=e.length;o<r;o++){let a=e[o].joints;for(let p=0,s=a.length;p<s;p++)t[a[p]].isBone=!0}for(let o=0,r=t.length;o<r;o++){let a=t[o];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let o=n.clone(),r=(a,p)=>{let s=this.associations.get(a);s!=null&&this.associations.set(p,s);for(let[u,f]of a.children.entries())r(f,p.children[u])};return r(n,o),o.name+="_instance_"+t.uses[e]++,o}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let o=t(e[n]);if(o)return o}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let o=0;o<e.length;o++){let r=t(e[o]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,o=this.cache.get(n);if(!o){switch(t){case"scene":o=this.loadScene(e);break;case"node":o=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":o=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":o=this.loadAccessor(e);break;case"bufferView":o=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":o=this.loadBuffer(e);break;case"material":o=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":o=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":o=this.loadSkin(e);break;case"animation":o=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":o=this.loadCamera(e);break;default:if(o=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!o)throw new Error("Unknown type: "+t);break}this.cache.add(n,o)}return o}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,o=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(o.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[zt.KHR_BINARY_GLTF].body);let o=this.options;return new Promise(function(r,a){n.load(bo.resolveURL(e.uri,o.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let o=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+o)})}loadAccessor(t){let e=this,n=this.json,o=this.json.accessors[t];if(o.bufferView===void 0&&o.sparse===void 0){let a=If[o.type],p=dr[o.componentType],s=o.normalized===!0,u=new p(o.count*a);return Promise.resolve(new Ee(u,a,s))}let r=[];return o.bufferView!==void 0?r.push(this.getDependency("bufferView",o.bufferView)):r.push(null),o.sparse!==void 0&&(r.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(r).then(function(a){let p=a[0],s=If[o.type],u=dr[o.componentType],f=u.BYTES_PER_ELEMENT,l=f*s,c=o.byteOffset||0,h=o.bufferView!==void 0?n.bufferViews[o.bufferView].byteStride:void 0,m=o.normalized===!0,y,b;if(h&&h!==l){let d=Math.floor(c/h),T="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+d+":"+o.count,P=e.cache.get(T);P||(y=new u(p,d*h,o.count*h/f),P=new qi(y,h/f),e.cache.add(T,P)),b=new tr(P,s,c%h/f,m)}else p===null?y=new u(o.count*s):y=new u(p,c,o.count*s),b=new Ee(y,s,m);if(o.sparse!==void 0){let d=If.SCALAR,T=dr[o.sparse.indices.componentType],P=o.sparse.indices.byteOffset||0,V=o.sparse.values.byteOffset||0,C=new T(a[1],P,o.sparse.count*d),w=new u(a[2],V,o.sparse.count*s);p!==null&&(b=new Ee(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let x=0,A=C.length;x<A;x++){let S=C[x];if(b.setX(S,w[x*s]),s>=2&&b.setY(S,w[x*s+1]),s>=3&&b.setZ(S,w[x*s+2]),s>=4&&b.setW(S,w[x*s+3]),s>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=m}return b})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],p=this.textureLoader;if(a.uri){let s=n.manager.getHandler(a.uri);s!==null&&(p=s)}return this.loadTextureImage(t,r,p)}loadTextureImage(t,e,n){let o=this,r=this.json,a=r.textures[t],p=r.images[e],s=(p.uri||p.bufferView)+":"+a.sampler;if(this.textureCache[s])return this.textureCache[s];let u=this.loadImageSource(e,n).then(function(f){f.flipY=!1,f.name=a.name||p.name||"",f.name===""&&typeof p.uri=="string"&&p.uri.startsWith("data:image/")===!1&&(f.name=p.uri);let c=(r.samplers||{})[a.sampler]||{};return f.magFilter=X0[c.magFilter]||je,f.minFilter=X0[c.minFilter]||_n,f.wrapS=Q0[c.wrapS]||tn,f.wrapT=Q0[c.wrapT]||tn,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Ce&&f.minFilter!==je,o.associations.set(f,{textures:t}),f}).catch(function(){return null});return this.textureCache[s]=u,u}loadImageSource(t,e){let n=this,o=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());let a=o.images[t],p=self.URL||self.webkitURL,s=a.uri||"",u=!1;if(a.bufferView!==void 0)s=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;let c=new Blob([l],{type:a.mimeType});return s=p.createObjectURL(c),s});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let f=Promise.resolve(s).then(function(l){return new Promise(function(c,h){let m=c;e.isImageBitmapLoader===!0&&(m=function(y){let b=new Re(y);b.needsUpdate=!0,c(b)}),e.load(bo.resolveURL(l,r.path),m,void 0,h)})}).then(function(l){return u===!0&&p.revokeObjectURL(s),Gn(l,a),l.userData.mimeType=a.mimeType||k4(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),l});return this.sourceCache[t]=f,f}assignTexture(t,e,n,o){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[zt.KHR_TEXTURE_TRANSFORM]){let p=n.extensions!==void 0?n.extensions[zt.KHR_TEXTURE_TRANSFORM]:void 0;if(p){let s=r.associations.get(a);a=r.extensions[zt.KHR_TEXTURE_TRANSFORM].extendTexture(a,p),r.associations.set(a,s)}}return o!==void 0&&(a.colorSpace=o),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,o=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let p="PointsMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new ir,Ge.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,s.sizeAttenuation=!1,this.cache.add(p,s)),n=s}else if(t.isLine){let p="LineBasicMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new or,Ge.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,this.cache.add(p,s)),n=s}if(o||r||a){let p="ClonedMaterial:"+n.uuid+":";o&&(p+="derivative-tangents:"),r&&(p+="vertex-colors:"),a&&(p+="flat-shading:");let s=this.cache.get(p);s||(s=n.clone(),r&&(s.vertexColors=!0),a&&(s.flatShading=!0),o&&(s.normalScale&&(s.normalScale.y*=-1),s.clearcoatNormalScale&&(s.clearcoatNormalScale.y*=-1)),this.cache.add(p,s),this.associations.set(s,this.associations.get(n))),n=s}t.material=n}getMaterialType(){return On}loadMaterial(t){let e=this,n=this.json,o=this.extensions,r=n.materials[t],a,p={},s=r.extensions||{},u=[];if(s[zt.KHR_MATERIALS_UNLIT]){let l=o[zt.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(p,r,e))}else{let l=r.pbrMetallicRoughness||{};if(p.color=new bt(1,1,1),p.opacity=1,Array.isArray(l.baseColorFactor)){let c=l.baseColorFactor;p.color.setRGB(c[0],c[1],c[2],Be),p.opacity=c[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(p,"map",l.baseColorTexture,Ue)),p.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,p.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(p,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(p,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(t,p)})))}r.doubleSided===!0&&(p.side=Vn);let f=r.alphaMode||Of.OPAQUE;if(f===Of.BLEND?(p.transparent=!0,p.depthWrite=!1):(p.transparent=!1,f===Of.MASK&&(p.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==xe&&(u.push(e.assignTexture(p,"normalMap",r.normalTexture)),p.normalScale=new Dt(1,1),r.normalTexture.scale!==void 0)){let l=r.normalTexture.scale;p.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&a!==xe&&(u.push(e.assignTexture(p,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(p.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==xe){let l=r.emissiveFactor;p.emissive=new bt().setRGB(l[0],l[1],l[2],Be)}return r.emissiveTexture!==void 0&&a!==xe&&u.push(e.assignTexture(p,"emissiveMap",r.emissiveTexture,Ue)),Promise.all(u).then(function(){let l=new a(p);return r.name&&(l.name=r.name),Gn(l,r),e.associations.set(l,{materials:t}),r.extensions&&Ti(o,l,r),l})}createUniqueName(t){let e=pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,o=this.primitiveCache;function r(p){return n[zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(p,e).then(function(s){return Z0(s,p,e)})}let a=[];for(let p=0,s=t.length;p<s;p++){let u=t[p],f=B4(u),l=o[f];if(l)a.push(l.promise);else{let c;u.extensions&&u.extensions[zt.KHR_DRACO_MESH_COMPRESSION]?c=r(u):c=Z0(new Me,u,e),o[f]={primitive:u,promise:c},a.push(c)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,o=this.extensions,r=n.meshes[t],a=r.primitives,p=[];for(let s=0,u=a.length;s<u;s++){let f=a[s].material===void 0?_4(this.cache):this.getDependency("material",a[s].material);p.push(f)}return p.push(e.loadGeometries(a)),Promise.all(p).then(function(s){let u=s.slice(0,s.length-1),f=s[s.length-1],l=[];for(let h=0,m=f.length;h<m;h++){let y=f[h],b=a[h],d,T=u[h];if(b.mode===Ln.TRIANGLES||b.mode===Ln.TRIANGLE_STRIP||b.mode===Ln.TRIANGLE_FAN||b.mode===void 0)d=r.isSkinnedMesh===!0?new kr(y,T):new he(y,T),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),b.mode===Ln.TRIANGLE_STRIP?d.geometry=Af(d.geometry,da):b.mode===Ln.TRIANGLE_FAN&&(d.geometry=Af(d.geometry,ur));else if(b.mode===Ln.LINES)d=new Jr(y,T);else if(b.mode===Ln.LINE_STRIP)d=new ni(y,T);else if(b.mode===Ln.LINE_LOOP)d=new Nr(y,T);else if(b.mode===Ln.POINTS)d=new Xr(y,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(d.geometry.morphAttributes).length>0&&H4(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),Gn(d,r),b.extensions&&Ti(o,d,b),e.assignFinalMaterial(d),l.push(d)}for(let h=0,m=l.length;h<m;h++)e.associations.set(l[h],{meshes:t,primitives:h});if(l.length===1)return r.extensions&&Ti(o,l[0],r),l[0];let c=new cn;r.extensions&&Ti(o,c,r),e.associations.set(c,{meshes:t});for(let h=0,m=l.length;h<m;h++)c.add(l[h]);return c})}loadCamera(t){let e,n=this.json.cameras[t],o=n[n.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Le(ba.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):n.type==="orthographic"&&(e=new ho(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Gn(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let o=0,r=e.joints.length;o<r;o++)n.push(this._loadNodeShallow(e.joints[o]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(o){let r=o.pop(),a=o,p=[],s=[];for(let u=0,f=a.length;u<f;u++){let l=a[u];if(l){p.push(l);let c=new Rt;r!==null&&c.fromArray(r.array,u*16),s.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Fr(p,s)})}loadAnimation(t){let e=this.json,n=this,o=e.animations[t],r=o.name?o.name:"animation_"+t,a=[],p=[],s=[],u=[],f=[];for(let l=0,c=o.channels.length;l<c;l++){let h=o.channels[l],m=o.samplers[h.sampler],y=h.target,b=y.node,d=o.parameters!==void 0?o.parameters[m.input]:m.input,T=o.parameters!==void 0?o.parameters[m.output]:m.output;y.node!==void 0&&(a.push(this.getDependency("node",b)),p.push(this.getDependency("accessor",d)),s.push(this.getDependency("accessor",T)),u.push(m),f.push(y))}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s),Promise.all(u),Promise.all(f)]).then(function(l){let c=l[0],h=l[1],m=l[2],y=l[3],b=l[4],d=[];for(let P=0,V=c.length;P<V;P++){let C=c[P],w=h[P],x=m[P],A=y[P],S=b[P];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let E=n._createAnimationTracks(C,w,x,A,S);if(E)for(let R=0;R<E.length;R++)d.push(E[R])}let T=new pi(r,void 0,d);return Gn(T,o),T})}createNodeMesh(t){let e=this.json,n=this,o=e.nodes[t];return o.mesh===void 0?null:n.getDependency("mesh",o.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,o.mesh,r);return o.weights!==void 0&&a.traverse(function(p){if(p.isMesh)for(let s=0,u=o.weights.length;s<u;s++)p.morphTargetInfluences[s]=o.weights[s]}),a})}loadNode(t){let e=this.json,n=this,o=e.nodes[t],r=n._loadNodeShallow(t),a=[],p=o.children||[];for(let u=0,f=p.length;u<f;u++)a.push(n.getDependency("node",p[u]));let s=o.skin===void 0?Promise.resolve(null):n.getDependency("skin",o.skin);return Promise.all([r,Promise.all(a),s]).then(function(u){let f=u[0],l=u[1],c=u[2];c!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(c,F4)});for(let h=0,m=l.length;h<m;h++)f.add(l[h]);return f})}_loadNodeShallow(t){let e=this.json,n=this.extensions,o=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?o.createUniqueName(r.name):"",p=[],s=o._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return s&&p.push(s),r.camera!==void 0&&p.push(o.getDependency("camera",r.camera).then(function(u){return o._getNodeRef(o.cameraCache,r.camera,u)})),o._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){p.push(u)}),this.nodeCache[t]=Promise.all(p).then(function(u){let f;if(r.isBone===!0?f=new er:u.length>1?f=new cn:u.length===1?f=u[0]:f=new be,f!==u[0])for(let l=0,c=u.length;l<c;l++)f.add(u[l]);if(r.name&&(f.userData.name=r.name,f.name=a),Gn(f,r),r.extensions&&Ti(n,f,r),r.matrix!==void 0){let l=new Rt;l.fromArray(r.matrix),f.applyMatrix4(l)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!o.associations.has(f))o.associations.set(f,{});else if(r.mesh!==void 0&&o.meshCache.refs[r.mesh]>1){let l=o.associations.get(f);o.associations.set(f,{...l})}return o.associations.get(f).nodes=t,f}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],o=this,r=new cn;n.name&&(r.name=o.createUniqueName(n.name)),Gn(r,n),n.extensions&&Ti(e,r,n);let a=n.nodes||[],p=[];for(let s=0,u=a.length;s<u;s++)p.push(o.getDependency("node",a[s]));return Promise.all(p).then(function(s){for(let f=0,l=s.length;f<l;f++)r.add(s[f]);let u=f=>{let l=new Map;for(let[c,h]of o.associations)(c instanceof Ge||c instanceof Re)&&l.set(c,h);return f.traverse(c=>{let h=o.associations.get(c);h!=null&&l.set(c,h)}),l};return o.associations=u(r),r})}_createAnimationTracks(t,e,n,o,r){let a=[],p=t.name?t.name:t.uuid,s=[];Io[r.path]===Io.weights?t.traverse(function(c){c.morphTargetInfluences&&s.push(c.name?c.name:c.uuid)}):s.push(p);let u;switch(Io[r.path]){case Io.weights:u=Xn;break;case Io.rotation:u=Qn;break;case Io.translation:case Io.scale:u=Zn;break;default:n.itemSize===1?u=Xn:u=Zn;break}let f=o.interpolation!==void 0?O4[o.interpolation]:Wo,l=this._getArrayFromAccessor(n);for(let c=0,h=s.length;c<h;c++){let m=new u(s[c]+"."+Io[r.path],e.array,l,f);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=pl(e.constructor),o=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)o[r]=e[r]*n;e=o}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let o=this instanceof Qn?rl:$s;return new o(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function J4(i,t,e){let n=t.attributes,o=new Xe;if(n.POSITION!==void 0){let p=e.json.accessors[n.POSITION],s=p.min,u=p.max;if(s!==void 0&&u!==void 0){if(o.set(new M(s[0],s[1],s[2]),new M(u[0],u[1],u[2])),p.normalized){let f=pl(dr[p.componentType]);o.min.multiplyScalar(f),o.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let p=new M,s=new M;for(let u=0,f=r.length;u<f;u++){let l=r[u];if(l.POSITION!==void 0){let c=e.json.accessors[l.POSITION],h=c.min,m=c.max;if(h!==void 0&&m!==void 0){if(s.setX(Math.max(Math.abs(h[0]),Math.abs(m[0]))),s.setY(Math.max(Math.abs(h[1]),Math.abs(m[1]))),s.setZ(Math.max(Math.abs(h[2]),Math.abs(m[2]))),c.normalized){let y=pl(dr[c.componentType]);s.multiplyScalar(y)}p.max(s)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(p)}i.boundingBox=o;let a=new en;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,i.boundingSphere=a}function Z0(i,t,e){let n=t.attributes,o=[];function r(a,p){return e.getDependency("accessor",a).then(function(s){i.setAttribute(p,s)})}for(let a in n){let p=al[a]||a.toLowerCase();p in i.attributes||o.push(r(n[a],p))}if(t.indices!==void 0&&!i.index){let a=e.getDependency("accessor",t.indices).then(function(p){i.setIndex(p)});o.push(a)}return Xt.workingColorSpace!==Be&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xt.workingColorSpace}" not supported.`),Gn(i,t),J4(i,t,e),Promise.all(o).then(function(){return t.targets!==void 0?$4(i,t.targets,e):i})}function Y0(i,t,e){fetch(i).then(n=>{if(!n.ok)throw new Error(`${i}: ${n.status}`);return n.arrayBuffer()}).then(n=>new _s().parse(n,"",t,e),e)}var br={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},N4=new ho(-1,1,1,-1,0,1),ul=class extends Me{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}},X4=new ul,Oo=class{constructor(t){this._mesh=new he(X4,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N4)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hs=class extends yn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pn.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Oo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ga=class extends yn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let o=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,p;this.inverse?(a=0,p=1):(a=1,p=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),r.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),r.buffers.stencil.setClear(p),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(o.EQUAL,1,4294967295),r.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),r.buffers.stencil.setLocked(!0)}},Bs=class extends yn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ks=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(br),this.copyPass.material.blending=De,this.clock=new oa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let o=0,r=this.passes.length;o<r;o++){let a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let p=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),s.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}ga!==void 0&&(a instanceof ga?n=!0:a instanceof Bs&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fs=class extends yn{constructor(t,e,n=null,o=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){let o=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=o}};var Ta={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Dt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Rt},cameraProjectionMatrixInverse:{value:new Rt},cameraWorldMatrix:{value:new Rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new M(-1,-1,-1)},sceneBoxMax:{value:new M(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ea={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Js={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function j0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Q4(t),n=e.length,o=new Uint8Array(n*4);for(let a=0;a<n;++a){let p=e[a],s=2*Math.PI*p/n,u=new M(Math.cos(s),Math.sin(s),0).normalize();o[a*4]=(u.x*.5+.5)*255,o[a*4+1]=(u.y*.5+.5)*255,o[a*4+2]=127,o[a*4+3]=255}let r=new uo(o,t,t);return r.wrapS=tn,r.wrapT=tn,r.needsUpdate=!0,r}function Q4(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),o=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(o===-1&&r===t?(r=t-2,o=0):(r===t&&(r=0),o<0&&(o=t-1)),n[o*t+r]!==0){r-=2,o++;continue}else n[o*t+r]=a++;r++,o--}return n}var Ua={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:fl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Dt},cameraProjectionMatrixInverse:{value:new Rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function fl(i,t,e){let n=Z4(i,t,e),o="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];o+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return o}function Z4(i,t,e){let n=[];for(let o=0;o<i;o++){let r=2*Math.PI*t*o/i,a=Math.pow(o/(i-1),e);n.push(new M(Math.cos(r),Math.sin(r),a))}return n}var Ns=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,o,r,a=.5*(Math.sqrt(3)-1),p=(t+e)*a,s=Math.floor(t+p),u=Math.floor(e+p),f=(3-Math.sqrt(3))/6,l=(s+u)*f,c=s-l,h=u-l,m=t-c,y=e-h,b,d;m>y?(b=1,d=0):(b=0,d=1);let T=m-b+f,P=y-d+f,V=m-1+2*f,C=y-1+2*f,w=s&255,x=u&255,A=this.perm[w+this.perm[x]]%12,S=this.perm[w+b+this.perm[x+d]]%12,E=this.perm[w+1+this.perm[x+1]]%12,R=.5-m*m-y*y;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[A],m,y));let I=.5-T*T-P*P;I<0?o=0:(I*=I,o=I*I*this._dot(this.grad3[S],T,P));let B=.5-V*V-C*C;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[E],V,C)),70*(n+o+r)}noise3d(t,e,n){let o,r,a,p,u=(t+e+n)*.3333333333333333,f=Math.floor(t+u),l=Math.floor(e+u),c=Math.floor(n+u),h=1/6,m=(f+l+c)*h,y=f-m,b=l-m,d=c-m,T=t-y,P=e-b,V=n-d,C,w,x,A,S,E;T>=P?P>=V?(C=1,w=0,x=0,A=1,S=1,E=0):T>=V?(C=1,w=0,x=0,A=1,S=0,E=1):(C=0,w=0,x=1,A=1,S=0,E=1):P<V?(C=0,w=0,x=1,A=0,S=1,E=1):T<V?(C=0,w=1,x=0,A=0,S=1,E=1):(C=0,w=1,x=0,A=1,S=1,E=0);let R=T-C+h,I=P-w+h,B=V-x+h,X=T-A+2*h,Y=P-S+2*h,Z=V-E+2*h,nt=T-1+3*h,J=P-1+3*h,tt=V-1+3*h,ft=f&255,Ut=l&255,Ht=c&255,Wt=this.perm[ft+this.perm[Ut+this.perm[Ht]]]%12,ee=this.perm[ft+C+this.perm[Ut+w+this.perm[Ht+x]]]%12,jt=this.perm[ft+A+this.perm[Ut+S+this.perm[Ht+E]]]%12,j=this.perm[ft+1+this.perm[Ut+1+this.perm[Ht+1]]]%12,K=.6-T*T-P*P-V*V;K<0?o=0:(K*=K,o=K*K*this._dot3(this.grad3[Wt],T,P,V));let ht=.6-R*R-I*I-B*B;ht<0?r=0:(ht*=ht,r=ht*ht*this._dot3(this.grad3[ee],R,I,B));let Ct=.6-X*X-Y*Y-Z*Z;Ct<0?a=0:(Ct*=Ct,a=Ct*Ct*this._dot3(this.grad3[jt],X,Y,Z));let mt=.6-nt*nt-J*J-tt*tt;return mt<0?p=0:(mt*=mt,p=mt*mt*this._dot3(this.grad3[j],nt,J,tt)),32*(o+r+a+p)}noise4d(t,e,n,o){let r=this.grad4,a=this.simplex,p=this.perm,s=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20,f,l,c,h,m,y=(t+e+n+o)*s,b=Math.floor(t+y),d=Math.floor(e+y),T=Math.floor(n+y),P=Math.floor(o+y),V=(b+d+T+P)*u,C=b-V,w=d-V,x=T-V,A=P-V,S=t-C,E=e-w,R=n-x,I=o-A,B=S>E?32:0,X=S>R?16:0,Y=E>R?8:0,Z=S>I?4:0,nt=E>I?2:0,J=R>I?1:0,tt=B+X+Y+Z+nt+J,ft=a[tt][0]>=3?1:0,Ut=a[tt][1]>=3?1:0,Ht=a[tt][2]>=3?1:0,Wt=a[tt][3]>=3?1:0,ee=a[tt][0]>=2?1:0,jt=a[tt][1]>=2?1:0,j=a[tt][2]>=2?1:0,K=a[tt][3]>=2?1:0,ht=a[tt][0]>=1?1:0,Ct=a[tt][1]>=1?1:0,mt=a[tt][2]>=1?1:0,Qt=a[tt][3]>=1?1:0,Se=S-ft+u,D=E-Ut+u,oe=R-Ht+u,$t=I-Wt+u,Mt=S-ee+2*u,gt=E-jt+2*u,ie=R-j+2*u,Tt=I-K+2*u,kt=S-ht+3*u,ge=E-Ct+3*u,le=R-mt+3*u,L=I-Qt+3*u,g=S-1+4*u,H=E-1+4*u,z=R-1+4*u,W=I-1+4*u,N=b&255,Vt=d&255,rt=T&255,yt=P&255,Lt=p[N+p[Vt+p[rt+p[yt]]]]%32,ot=p[N+ft+p[Vt+Ut+p[rt+Ht+p[yt+Wt]]]]%32,lt=p[N+ee+p[Vt+jt+p[rt+j+p[yt+K]]]]%32,At=p[N+ht+p[Vt+Ct+p[rt+mt+p[yt+Qt]]]]%32,wt=p[N+1+p[Vt+1+p[rt+1+p[yt+1]]]]%32,st=.6-S*S-E*E-R*R-I*I;st<0?f=0:(st*=st,f=st*st*this._dot4(r[Lt],S,E,R,I));let Ot=.6-Se*Se-D*D-oe*oe-$t*$t;Ot<0?l=0:(Ot*=Ot,l=Ot*Ot*this._dot4(r[ot],Se,D,oe,$t));let v=.6-Mt*Mt-gt*gt-ie*ie-Tt*Tt;v<0?c=0:(v*=v,c=v*v*this._dot4(r[lt],Mt,gt,ie,Tt));let q=.6-kt*kt-ge*ge-le*le-L*L;q<0?h=0:(q*=q,h=q*q*this._dot4(r[At],kt,ge,le,L));let at=.6-g*g-H*H-z*z-W*W;return at<0?m=0:(at*=at,m=at*at*this._dot4(r[wt],g,H,z,W)),27*(f+l+c+h+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,o){return t[0]*e+t[1]*n+t[2]*o}_dot4(t,e,n,o,r){return t[0]*e+t[1]*n+t[2]*o+t[3]*r}};var Va=class i extends yn{constructor(t,e,n=512,o=512,r,a,p){super(),this.width=n,this.height=o,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=j0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ke(this.width,this.height,{type:mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ve({defines:Object.assign({},Ta.defines),uniforms:Pn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:De,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Yr,this.normalMaterial.blending=De,this.pdMaterial=new Ve({defines:Object.assign({},Ua.defines),uniforms:Pn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ve({defines:Object.assign({},Ea.defines),uniforms:Pn.clone(Ea.uniforms),vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,blending:De}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ve({uniforms:Pn.clone(br.uniforms),vertexShader:br.vertexShader,fragmentShader:br.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:sa,blendDst:fi,blendEquation:hn,blendSrcAlpha:pa,blendDstAlpha:fi,blendEquationAlpha:hn}),this.blendMaterial=new Ve({uniforms:Pn.clone(Js.uniforms),vertexShader:Js.vertexShader,fragmentShader:Js.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:xp,blendSrc:sa,blendDst:fi,blendEquation:hn,blendSrcAlpha:pa,blendDstAlpha:fi,blendEquationAlpha:hn}),this._fsQuad=new Oo(null),this._originalClearColor=new bt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),p!==void 0&&this.updatePdMaterial(p)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new oi,this.depthTexture.format=Ao,this.depthTexture.type=vo,this.normalRenderTarget=new ke(this.width,this.height,{minFilter:Ce,magFilter:Ce,type:mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,o=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=o,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=o,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=fl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=De,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=De,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=De,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=De,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=De,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o=e.clearColor||o,r=e.clearAlpha||r,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Ns,n=t*t*4,o=new Uint8Array(n);for(let a=0;a<t;a++)for(let p=0;p<t;p++){let s=a,u=p;o[(a*t+p)*4]=(e.noise(s,u)*.5+.5)*255,o[(a*t+p)*4+1]=(e.noise(s+t,u)*.5+.5)*255,o[(a*t+p)*4+2]=(e.noise(s,u+t)*.5+.5)*255,o[(a*t+p)*4+3]=(e.noise(s+t,u+t)*.5+.5)*255}let r=new uo(o,t,t,We,bn);return r.wrapS=tn,r.wrapT=tn,r.needsUpdate=!0,r}};Va.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xs=class extends yn{constructor(){super(),this.uniforms=Pn.clone(Sa.uniforms),this.material=new zr({name:Sa.name,uniforms:this.uniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader}),this._fsQuad=new Oo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_p?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$p?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ar?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===kp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rn=i=>new bt(i),A8=new bt,I8=new M(-.99,1.9,.42).normalize();function z4(i=.35){return Nt.lights_physical_pars_fragment.replace("vec3 irradiance = dotNL * directLight.color;",`vec3 irradiance = dotNL * directLight.color;
	vec3 wrapIrradiance = clamp((dot(geometryNormal, directLight.direction) + ${i.toFixed(2)}) / ${(1+i).toFixed(2)}, 0.0, 1.0) * directLight.color;`).replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );","reflectedLight.directDiffuse += wrapIrradiance * BRDF_Lambert( material.diffuseColor );")}function K0(i=.35,t=.82){let e=new On({vertexColors:!0,roughness:t,metalness:0});return e.customProgramCacheKey=()=>`veg${i}`,e.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",z4(i))},e}var O8={deep:rn(3105856),mid:rn(5808210),lit:rn(10146920),tip:rn(11853424)},_8={dark:rn(4139548),lit:rn(7754810)};var $8={deep:rn(1324063),mid:rn(2843175),lit:rn(5741104),sun:rn(9421374)};var H8={base:rn(5082924),tip:rn(10408527)};var B8=rn(16512740),k8=rn(15908655);var de=i=>new bt(i);var N8=new Rt,X8=new we,Q8=new dn,Z8=new M,z8=new M;var Y4={stone:de(11579308),stoneLight:de(13289668),stoneDark:de(9276553),mortar:de(7237230),roof:de(10898229),roofDark:de(8862506),roofLight:de(12278850),wood:de(10117686),woodDark:de(7225892),woodLight:de(12090183),plaster:de(15721156),iron:de(4869461),ironLight:de(7567493),gold:de(14857029),goldDark:de(12093994),blue:de(3104708),blueDark:de(2312860),grass:de(9420629),dirt:de(11569754),paving:de(13221806),canvas:de(13214282),canvasDark:de(11043898),charcoal:de(3881528),straw:de(14729314)};var j4=null;function W0(i){j4=i}var q0=14280372,G4=new M(-.99,1.9,.42).normalize();function th(i){let t=new As({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=ar,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=aa,t.info.autoReset=!1,W0(K0(.3,.86));let e=new Br;e.background=new bt(q0),e.fog=new ei(q0,60,140);let n=new Le(30,16/9,.5,400);e.add(new Wr(13953535,6257978,.85));let o=new ui(16773327,3.3);o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.radius=3,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.camera.near=1,o.shadow.camera.far=200,e.add(o,o.target);let r=location.search.includes("manual"),a={on:!location.search.includes("noao")},p=new ks(t,new ke(1,1,{type:mn,samples:4}));p.addPass(new Fs(e,n));let s=new Va(e,n,1,1);s.updateGtaoMaterial({radius:1.2,distanceExponent:1.6,thickness:1.2,scale:1.3,samples:12,distanceFallOff:1}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});let u=s,f=u._overrideVisibility.bind(s);u._overrideVisibility=()=>{f(),e.traverse(b=>{(b.isSprite||b.userData.noAO)&&b.visible&&(b.visible=!1,u._visibilityCache.push(b))})},p.addPass(s),p.addPass(new Xs);let l=0,c=0,h=()=>{let b=i.clientWidth||window.innerWidth,d=i.clientHeight||window.innerHeight;l=i.clientWidth,c=i.clientHeight,t.setSize(b,d,!1),p.setSize(b,d),n.aspect=b/d,n.updateProjectionMatrix()};return window.addEventListener("resize",h),typeof ResizeObserver<"u"&&new ResizeObserver(()=>h()).observe(i),h(),{renderer:t,scene:e,camera:n,sun:o,draw:()=>{i.clientWidth&&(i.clientWidth!==l||i.clientHeight!==c)&&h(),t.info.reset(),a.on?p.render():t.render(e,n)},resize:h,aimSun:(b,d)=>{o.target.position.copy(b),o.position.copy(b).addScaledVector(G4,80);let T=o.shadow.camera;T.left=-d,T.right=d,T.top=d,T.bottom=-d,T.updateProjectionMatrix()},manual:r,ao:a}}var eh="./assets/soldat-jeu-RISUTZOK.glb";var nh="./assets/archere-jeu-TJ352OCY.glb";var oh="./assets/colosse-jeu-77SM33LG.glb";var ih="./assets/brigand-jeu-AGABQCJG.glb";var rh="./assets/cristal-jeu-G4DRYLML.glb";var go=pt.arena,ll={barbarian:{url:eh,height:1.7},archer:{url:nh,height:1.65},tank:{url:oh,height:2.6},assassin:{url:ih,height:1.75}},cl=new bt(4761855),hl=new bt(16731195),n5=new bt(.78,.42,.42),Zs=class{constructor(t){$(this,"stage");$(this,"scene");$(this,"group",new cn);$(this,"kinds",{});$(this,"figs",new Map);$(this,"side",0);$(this,"battle",null);$(this,"zoneRing");$(this,"zoneMat");$(this,"noDrop");$(this,"halos");$(this,"rings");$(this,"bars");$(this,"fills");$(this,"marks");$(this,"arrows",[]);$(this,"arrowGeo",new ri(.025,.025,.7,4).rotateX(Math.PI/2));$(this,"arrowMat",new xe({color:5913372}));$(this,"eclat",null);$(this,"raycaster",new ra);$(this,"plane",new Un(new M(0,1,0),0));$(this,"time",0);$(this,"lastTick",-1);$(this,"frameNo",0);$(this,"enemyMats",new Map);$(this,"jsMs",0);$(this,"ready");$(this,"showRed",!1);this.stage=th(t),this.stage.ao.on=!1,this.stage.sun.shadow.mapSize.set(2048,2048),this.scene=this.stage.scene,this.scene.fog=new ei(14280372,90,180),this.scene.add(this.group),this.group.add(this.ground()),this.zoneMat=new xe({color:16777215,transparent:!0,opacity:.75,depthWrite:!1}),this.zoneRing=new he(new ai(go.zoneRadius-.18,go.zoneRadius,72).rotateX(-Math.PI/2),this.zoneMat),this.zoneRing.position.set(0,.03,0);let e=new he(new ii(go.zoneRadius,72).rotateX(-Math.PI/2),new xe({color:16774080,transparent:!0,opacity:.16,depthWrite:!1}));e.position.y=.02;let n=new xe({color:16722458,transparent:!0,opacity:.32,depthWrite:!1});this.noDrop=new he(new ii(go.noDropRadius,72).rotateX(-Math.PI/2),n),this.noDrop.position.y=.04,this.noDrop.visible=!1,this.halos=new In(new ii(go.enemyHalo,32).rotateX(-Math.PI/2),n,260),this.halos.count=0,this.halos.position.y=.045,this.halos.frustumCulled=!1,this.rings=new In(new ai(.62,.8,20).rotateX(-Math.PI/2),new xe({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),400),this.rings.count=0,this.rings.frustumCulled=!1,this.marks=new In(new ai(.25,.42,16).rotateX(-Math.PI/2),new xe({color:16777215,transparent:!0,opacity:.9,depthWrite:!1}),120),this.marks.count=0,this.marks.frustumCulled=!1;let o=new Ro(1,.13);this.bars=new In(o,new xe({color:1774604,depthTest:!1,transparent:!0,opacity:.8}),400),this.fills=new In(o.clone().translate(.5,0,0),new xe({color:16777215,depthTest:!1}),400);for(let r of[this.bars,this.fills])r.count=0,r.frustumCulled=!1,r.renderOrder=10;this.group.add(this.zoneRing,e,this.noDrop,this.halos,this.rings,this.marks,this.bars,this.fills),this.aim(),this.ready=this.load()}ground(){let e=go.width*8,n=go.length*8,o=document.createElement("canvas");o.width=e+256,o.height=n+256;let r=o.getContext("2d"),a=128;r.fillStyle="#6d8f3c",r.fillRect(0,0,o.width,o.height);let p=7;for(let l=0;l<9e3;l++){p=p*16807%2147483647;let c=p%o.width;p=p*16807%2147483647;let h=p%o.height;r.fillStyle=p%3?"rgba(40,70,20,.18)":"rgba(200,220,120,.16)",r.fillRect(c,h,3,3)}let s=r.createLinearGradient(0,a,0,a+n);s.addColorStop(0,"#9fbf5a"),s.addColorStop(.5,"#a9c562"),s.addColorStop(1,"#9fbf5a"),r.fillStyle=s,r.fillRect(a,a,e,n),r.fillStyle="rgba(255,70,50,.07)",r.fillRect(a,a,e,n/2),r.fillStyle="rgba(70,150,255,.08)",r.fillRect(a,a+n/2,e,n/2),r.strokeStyle="#d9cfb0",r.lineWidth=6,r.strokeRect(a+3,a+3,e-6,n-6),r.strokeStyle="rgba(60,45,25,.55)",r.lineWidth=2,r.strokeRect(a,a,e,n),r.setLineDash([10,10]),r.strokeStyle="rgba(255,255,255,.35)",r.beginPath(),r.moveTo(a,a+n/2),r.lineTo(a+e,a+n/2),r.stroke();let u=new Qr(o);u.colorSpace=Ue,u.anisotropy=4;let f=new he(new Ro(go.width+32,go.length+32).rotateX(-Math.PI/2),new On({map:u,roughness:1}));return f.receiveShadow=!0,f}aim(){let t=this.stage.camera;t.fov=34,t.position.set(0,29,27.5),t.lookAt(0,0,3.2),t.updateProjectionMatrix(),this.stage.aimSun(new M(0,0,0),28)}async load(){let t=e=>new Promise((n,o)=>Y0(e,n,o));await Promise.all([...ae.map(async e=>{let n=await t(ll[e].url),o=new Xe().setFromObject(n.scene),r=o.max.y-o.min.y||1;n.scene.traverse(a=>{let p=a;p.isMesh&&(p.castShadow=!0,p.frustumCulled=!1)}),this.kinds[e]={template:n.scene,clips:n.animations,scale:ll[e].height/r}}),t(rh).then(e=>{let n=new Xe().setFromObject(e.scene),o=n.max.y-n.min.y||1;e.scene.scale.setScalar(4.2/o),e.scene.traverse(r=>{let a=r;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.eclat=e.scene,this.group.add(e.scene)})])}setSide(t){this.side=t,this.group.rotation.y=t===1?Math.PI:0}setBattle(t){if(t!==this.battle){for(let e of this.figs.values())this.group.remove(e.root);for(let e of this.arrows)this.group.remove(e.m);this.figs.clear(),this.arrows=[],this.battle=t}}at(t,e,n=new M){return n.set(t-Eo,0,wn-e)}pick(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new Dt(p,s),this.stage.camera);let u=new M;if(!this.raycaster.ray.intersectPlane(this.plane,u))return null;let f=this.side===1?-u.x:u.x,l=this.side===1?-u.z:u.z;return{x:f+Eo,y:wn-l}}frame(t,e){this.time+=t,this.frameNo++;let n=performance.now(),o=this.battle,r=new Rt,a=new we,p=new M,s=new M(1,1,1);if(this.eclat&&(this.eclat.rotation.y=this.time*.25,this.eclat.position.y=.15*(1+Math.sin(this.time*1.6))),o){let d=o.inZone[this.side],T=o.inZone[1-this.side];this.zoneMat.color.set(d&&T?16765770:d?cl:T?hl:16777215)}else this.zoneMat.color.set(16777215);this.noDrop.visible=this.showRed&&!!o;let u=0;if(this.showRed&&o)for(let d of o.units)d.alive&&d.side!==this.side&&u<this.halos.instanceMatrix.count&&(this.at(d.x,d.y,p),r.makeTranslation(p.x,0,p.z),this.halos.setMatrixAt(u++,r));if(this.halos.count=u,this.halos.instanceMatrix.needsUpdate=!0,!o){this.rings.count=0,this.bars.count=0,this.fills.count=0,this.marks.count=0,this.stage.draw();return}let f=this.stage.camera.quaternion.clone().premultiply(this.group.quaternion.clone().invert()),l=0,c=0,h=new bt,m=o.tick!==this.lastTick;this.lastTick=o.tick;for(let d of o.units){let T=this.figs.get(d.id);if(!T&&(!d.alive||(T=this.make(d),!T)))continue;m&&(T.px=T.cx,T.py=T.cy,T.cx=d.x,T.cy=d.y);let P=T.px+(T.cx-T.px)*e,V=T.py+(T.cy-T.py)*e,C=Math.abs(T.cx-T.px)+Math.abs(T.cy-T.py)>.004;this.at(P,V,T.root.position);let w=Math.max(0,1-(o.tick-T.born+e)*ze/.3);T.root.position.y=w*w*3;let x=T.ry;if(d.target&&d.target.alive?x=Math.atan2(d.target.x-d.x,-(d.target.y-d.y)):C&&(x=Math.atan2(T.cx-T.px,-(T.cy-T.py))),T.ry=o5(T.ry,x,t*10),T.root.rotation.y=T.ry,d.alive)d.struck!==T.struck&&d.struck>=0?(T.struck=d.struck,Qs(T,"attack",!0,Math.max(1,.9/d.period)),d.kind==="archer"&&d.target&&this.shoot(d,d.target)):(T.current!=="attack"||!T.actions.attack?.isRunning())&&Qs(T,C?"run":"idle",!1,C?d.speed/2.6:1);else if(T.dead||(T.dead=this.time,Qs(T,"death",!0)),this.time-T.dead>1.6&&(T.root.position.y-=(this.time-T.dead-1.6)*.8),this.time-T.dead>2.6){this.group.remove(T.root),this.figs.delete(d.id);continue}if(this.figs.size<=80?T.mixer.update(t):(this.frameNo+d.id)%2===0&&T.mixer.update(t*2),!d.alive)continue;let A=d.radius/.35*.75;if(r.compose(p.set(T.root.position.x,.05,T.root.position.z),a.identity(),new M(A,1,A)),this.rings.setMatrixAt(l,r),this.rings.setColorAt(l++,d.side===this.side?cl:hl),d.hp<d.maxHp&&c<400){let S=d.kind==="tank"?1.5:.9,E=ll[d.kind].height+.35;r.compose(p.set(T.root.position.x,E,T.root.position.z),f,new M(S,1,1)),this.bars.setMatrixAt(c,r);let R=Math.max(.02,d.hp/d.maxHp),I=new M(-S/2,0,0).applyQuaternion(f);r.compose(p.set(T.root.position.x+I.x,E+I.y,T.root.position.z+I.z),f,new M(S*R,1,1)),this.fills.setMatrixAt(c,r),this.fills.setColorAt(c++,h.set(d.side===this.side?7331930:16734791))}}this.rings.count=l,this.rings.instanceMatrix.needsUpdate=!0,this.rings.instanceColor&&(this.rings.instanceColor.needsUpdate=!0),this.bars.count=c,this.fills.count=c,this.bars.instanceMatrix.needsUpdate=!0,this.fills.instanceMatrix.needsUpdate=!0,this.fills.instanceColor&&(this.fills.instanceColor.needsUpdate=!0);let y=0,b=1+.25*Math.sin(this.time*14);for(let d of o.pendingDrops()){if(y>=120)break;this.at(d.x,d.y,p),r.compose(p.setY(.06),a.identity(),s.clone().multiplyScalar(b)),this.marks.setMatrixAt(y,r),this.marks.setColorAt(y++,d.side===this.side?cl:hl)}this.marks.count=y,this.marks.instanceMatrix.needsUpdate=!0,this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0),this.jsMs=performance.now()-n,this.arrows=this.arrows.filter(d=>(d.t+=t/.22,d.t>=1?(this.group.remove(d.m),!1):(d.m.position.lerpVectors(d.from,d.to,d.t),d.m.position.y+=Math.sin(d.t*Math.PI)*.8,d.m.lookAt(d.to.x,d.m.position.y,d.to.z),!0))),this.stage.draw()}make(t){let e=this.kinds[t.kind];if(!e)return null;let n=F0(e.template);n.scale.setScalar(e.scale),t.side!==this.side&&n.traverse(p=>{let s=p;s.isMesh&&!Array.isArray(s.material)&&(s.material=this.enemyMat(s.material))}),this.figs.size>70&&n.traverse(p=>{p.castShadow=!1}),this.group.add(n);let o=new ia(n),r={};for(let p of e.clips){let s=o.clipAction(p);(p.name==="death"||p.name==="attack"||p.name==="hit")&&(s.setLoop(ws,1),s.clampWhenFinished=!0),r[p.name]=s}let a={root:n,mixer:o,actions:r,current:"",px:t.x,py:t.y,cx:t.x,cy:t.y,ry:t.side===0?Math.PI:0,struck:-1,dead:0,born:t.born,phase:t.id*.618%1};return Qs(a,"idle"),this.figs.set(t.id,a),a}enemyMat(t){let e=this.enemyMats.get(t);if(!e){e=t.clone();let n=e.color;n&&n.multiply(n5),this.enemyMats.set(t,e)}return e}shoot(t,e){let n=new he(this.arrowGeo,this.arrowMat),o={m:n,from:this.at(t.x,t.y).setY(1),to:this.at(e.x,e.y).setY(.7),t:0};this.group.add(n),this.arrows.push(o)}get drawn(){return this.figs.size}};function Qs(i,t,e=!1,n=1){let o=i.actions[t]??(t==="run"?i.actions.walk:void 0);if(!o||(o.timeScale=n,i.current===t&&!e))return;let r=i.actions[i.current];o.reset(),o.setEffectiveWeight(1),o.play(),(t==="idle"||t==="run")&&(o.time=i.phase*o.getClip().duration),r&&r!==o&&r.crossFadeTo(o,t==="attack"?.08:.18,!1),i.current=t}var o5=(i,t,e)=>{let n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+Math.sign(n)*Math.min(Math.abs(n),e)};function $o(...i){let t=2166136261;for(let e of i){let n=e|0;for(let o=0;o<4;o++)t^=n&255,t=Math.imul(t,16777619),n>>>=8}return t^=t>>>16,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}var _o=class{constructor(t){$(this,"s");this.s=t>>>0}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}int(t){return Math.floor(this.next()*t)}range(t,e){return t+(e-t)*this.next()}pick(t){return t[this.int(t.length)]}weighted(t){let e=0;for(let o of t)e+=o;let n=this.next()*e;for(let o=0;o<t.length;o++)if(n-=t[o],n<0)return o;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){let n=this.int(e+1);[t[e],t[n]]=[t[n],t[e]]}return t}};var i5=["Brann","Ysolde","Korgan","Ma\xEBlis","Torvik","Sigrun","Aldric","Nessa"];function ah(i,t){let e=[];for(let n=0;n<pt.match.players;n++){let o=n<t.length;e.push({seat:n,name:o?t[n]:i5[n],human:o,hp:pt.hp.start,gold:0,places:pt.army.startPlaces,army:to(),up:Er(),offers:[],rerolls:0,out:null,lastOpp:null,here:!o,profile:dh($o(i,7,n))})}return{seed:i,round:0,phase:"lobby",players:e,pairs:[],history:[]}}var Ei=i=>i.players.filter(t=>!t.out);function r5(i){let t=Math.min(1,Math.max(0,(i-1)/(pt.lateRound-1)));return pt.rarities.map(e=>e.early+(e.late-e.early)*t)}function ph(i,t,e,n){let o=new _o($o(i,11,t,e,n)),r=r5(e),a=[];for(let p=0;p<pt.economy.offers;p++){let s=o.pick(ae),u=va.filter(f=>f!=="range"||pt.troops[s].rangeUpgradable);a.push({kind:s,stat:o.pick(u),rarity:o.weighted(r)})}return a}var Ho=i=>pt.rarities[i.rarity].cost,dl=i=>pt.rarities[i.rarity].bonus;function sh(i){if(i.phase!=="over"){i.round++,i.phase="prep";for(let t of Ei(i))t.gold+=pt.economy.goldPerRound+(i.round===1?pt.economy.startGold:0),t.rerolls=0,t.offers=ph(i.seed,t.seat,i.round,0),t.here=!t.human;i.pairs=p5(i);for(let t of Ei(i))t.human||yl(i,t)}}function Kn(i,t,e){let n=i.players[t];if(!n||n.out||i.phase!=="prep")return!1;switch(e.k){case"here":return n.here=!0,!0;case"buy":{let o=n.offers[e.slot];return!o||n.gold<Ho(o)?!1:(n.gold-=Ho(o),n.up[o.kind][o.stat]+=dl(o),n.offers[e.slot]=null,!0)}case"reroll":return n.gold<pt.economy.reroll?!1:(n.gold-=pt.economy.reroll,n.rerolls++,n.offers=ph(i.seed,t,i.round,n.rerolls),!0);case"cap":return n.gold<pt.army.stepCost||n.places>=pt.army.maxPlaces?!1:(n.gold-=pt.army.stepCost,n.places=Math.min(pt.army.maxPlaces,n.places+pt.army.step),!0);case"army":{let o=to();for(let r of ae){let a=e.army[r];if(!Number.isInteger(a)||a<0)return!1;o[r]=a}return eo(o)>n.places?!1:(n.army=o,!0)}}}function uh(i){if(i.phase==="prep"){for(let t of Ei(i))t.human&&!t.here&&yl(i,t);i.phase="battle"}}function bl(i,t){let e=i.players[t];return{counts:{...e.army},upgrades:e.up}}function fh(i,t,e){if(e===1&&t.ghost)return null;let n=i.players[e===0?t.a:t.b];return n.human&&n.here?n.seat:null}var lh=(i,t)=>$o(i.seed,13,i.round,t);function a5(i,t){let e=pt.hp.damage;return Math.min(e.max,Math.ceil(e.base+e.perRound*i+e.perPlace*t))}function ch(i,t){if(i.phase!=="battle")throw new Error("resolve outside a battle");let e=[],n=Ei(i).length;i.pairs.forEach((a,p)=>{let s=t[p],u=0,f=null;!a.ghost&&s.winner!==-1&&(f=s.winner===0?a.b:a.a,u=a5(i.round,s.places[s.winner]),i.players[f].hp-=u),i.players[a.a].lastOpp=a.b,a.ghost||(i.players[a.b].lastOpp=a.a),e.push({pair:a,result:s,damage:u,loser:f})});let o=Ei(i).filter(a=>a.hp<=0).sort((a,p)=>p.hp-a.hp||a.seat-p.seat);o.forEach((a,p)=>{a.out={round:i.round,place:n-o.length+1+p}}),i.history.push(e);let r=Ei(i);return r.length<=1||i.round>=pt.maxRounds?(r.sort((a,p)=>p.hp-a.hp||a.seat-p.seat).forEach((a,p)=>{a.out={round:i.round,place:p+1}}),i.phase="over"):i.phase="prep",e}function ml(i){return[...i.players].sort((t,e)=>t.out&&e.out?t.out.place-e.out.place:t.out?1:e.out?-1:e.hp-t.hp||t.seat-e.seat)}function p5(i){let t=new _o($o(i.seed,17,i.round)),e=Ei(i).map(a=>a.seat),n=null,o=-1/0,r=1/0;for(let a=0;a<pt.match.pairingTries;a++){let p=t.shuffle([...e]),s=[],u=0,f=t.next();for(let l=0;l+1<p.length;l+=2){let c=i.players[p[l]],h=i.players[p[l+1]];(c.lastOpp===h.seat||h.lastOpp===c.seat)&&u++,c.human&&h.human&&(f+=pt.match.humanPairWeight),s.push({a:c.seat,b:h.seat,ghost:!1})}if(p.length%2){let l=p[p.length-1],c=p.slice(0,-1).filter(m=>m!==i.players[l].lastOpp),h=c.length?c[t.int(c.length)]:p[0];i.players[l].lastOpp===h&&u++,s.push({a:l,b:h,ghost:!0})}(u<r||u===r&&f>o)&&(n=s,o=f,r=u)}return n.map(a=>!a.ghost&&t.next()<.5?{a:a.b,b:a.a,ghost:!1}:a)}function hh(i,t){for(let e of i.pairs){if(e.a===t)return{seat:e.b,ghost:e.ghost,side:0};if(e.b===t&&!e.ghost)return{seat:e.a,ghost:!1,side:1}}return null}var an=pt.arena,$n=pt.bots;function dh(i){let t=new _o(i),e=t.pick(ae),n=t.pick(ae.filter(f=>f!==e)),o={},r=t.range(.45,.65),a=t.range(.2,.35),p=Math.max(0,1-r-a),s=ae.filter(f=>f!==e&&f!==n);for(let f of s)o[f]=p*t.range(0,1);let u=s.reduce((f,l)=>f+o[l],0)||1;for(let f of s)o[f]=o[f]/u*p;return o[e]=r,o[n]=a,{weights:o,lane:t.range(-6,6)}}var s5={hp:1,damage:1,attackSpeed:1,moveSpeed:.45,range:.7},u5=(i,t)=>i.profile.weights[t]>=$n.playedShare||i.army[t]>0&&i.profile.weights[t]>.05;function yl(i,t){let e=t.seat;Kn(i,e,{k:"here"});let n=i.round<=$n.capacityEagerUntil;n&&Kn(i,e,{k:"cap"});let o=()=>{let a=0,p=t.offers.map((s,u)=>({o:s,i:u})).filter(s=>s.o&&u5(t,s.o.kind)).sort((s,u)=>bh(t,u.o)-bh(t,s.o)||s.i-u.i);for(let{o:s,i:u}of p)t.gold>=Ho(s)&&Kn(i,e,{k:"buy",slot:u})&&a++;return a},r=o();for(;!r&&t.rerolls<$n.rerollsPerRound&&t.gold>=pt.economy.reroll+3;)Kn(i,e,{k:"reroll"}),r=o();for(;!n&&t.gold>=pt.army.stepCost&&t.places<pt.army.maxPlaces;)Kn(i,e,{k:"cap"});Kn(i,e,{k:"army",army:f5(t)})}var bh=(i,t)=>i.profile.weights[t.kind]*s5[t.stat]*dl(t)/Ho(t);function f5(i){let t={},e=0;for(let a of ae){let p=i.up[a],s=i.profile.weights[a];t[a]=s<.04?0:s*(1+1.2*(p.hp+p.damage+p.attackSpeed+.5*(p.moveSpeed+p.range))),e+=t[a]}let n=to(),o=i.places;for(let a of ae)n[a]=Math.floor(o*t[a]/e/pt.troops[a].places);let r=o-eo(n);for(;r>0;){let a=null,p=-1/0;for(let s of ae){let u=pt.troops[s].places;if(u>r||t[s]===0)continue;let f=o*t[s]/e-n[s]*u;f>p&&(p=f,a=s)}a||(a="barbarian"),n[a]++,r-=pt.troops[a].places}return n}function l5(i){let t={...i,assassin:0},e=ae.reduce((r,a)=>r+t[a],0),n=[],o=to();for(let r=0;r<e;r++){let a=null,p=-1/0;for(let s of ae){if(o[s]>=t[s])continue;let u=(r+1)*(t[s]/e)-o[s]+(s==="tank"?.5:0);u>p&&(p=u,a=s)}n.push(a),o[a]++}for(let r=0;r<i.assassin;r++)n.push("assassin");return n}var Pa=class{constructor(t,e,n,o=0,r=!1){$(this,"side",t);$(this,"lane",o);$(this,"wave",[]);$(this,"counter",[]);$(this,"reserve",[]);$(this,"queue",[]);$(this,"sent",{wave:!1,counter:!1,reserve:!1});$(this,"waveAt");$(this,"next",0);$(this,"seq",0);$(this,"rng");this.rng=new _o(e);let a=l5(n),p=eo(n),s=0;for(let u of a){let f=s/Math.max(1,p);!r&&f<$n.firstWave?this.wave.push(u):f<(r?.5:$n.firstWave+$n.counter)?this.counter.push(u):this.reserve.push(u),s+=pt.troops[u].places}r&&(this.sent.wave=!0),this.waveAt=$n.firstWaveTicks[0]+this.rng.int($n.firstWaveTicks[1]-$n.firstWaveTicks[0]+1)}think(t){let e=this.side,n=1-e,o=t.tick;if(!this.sent.wave&&o>=this.waveAt&&(this.sent.wave=!0,this.formation(this.wave)),o%5===0){let p=t.inZone[n]>0&&t.inZone[e]<t.inZone[n];p&&!this.sent.counter?(this.sent.counter=!0,this.toRing(t,this.counter)):p&&!this.sent.reserve&&!this.queue.length&&t.gauges[n]>20&&this.releaseReserve(t);let s=t.time,u=t.alive(e).length;!this.sent.reserve&&(s>$n.reserveAfter&&t.gauges[e]<=t.gauges[n]||t.gauges[n]>$n.reserveGauge||this.sent.wave&&u===0&&!this.queue.length||s>pt.battle.maxSeconds-12)&&this.releaseReserve(t)}if(!this.queue.length||o<this.next)return[];let r=this.queue[0],a=this.findSpot(t,r.ox,r.oy);return a?(this.queue.shift(),this.next=o+Math.round(pt.tickHz/pt.battle.dropRate),[{tick:o,side:e,kind:r.kind,x:a[0],y:a[1],seq:this.seq++}]):(this.queue.push(this.queue.shift()),this.next=o+2,[])}releaseReserve(t){this.sent.reserve=!0,this.sent.counter||(this.sent.counter=!0,this.reserve=[...this.counter,...this.reserve]),this.toRing(t,this.reserve)}formation(t){let e={tank:9,barbarian:7.5,assassin:6.5,archer:4},n=new Map,o=an.width/2+this.lane,r=to();for(let a of t)r[a]++;for(let a of t){let p=n.get(a)??0;n.set(a,p+1);let s=14,u=Math.floor(p/s),f=p%s,l=Math.min(s,r[a]-u*s),c=a==="tank"?1.7:.9,h=o+(f-(l-1)/2)*c;a==="assassin"&&(h=(f%2?o+7:o-7)+Math.floor(f/2)*.8*(f%2?1:-1)),this.queue.push({kind:a,ox:Ui(h,1,an.width-1),oy:e[a]-u*1.1})}}toRing(t,e){let n=1-this.side,o=0,r=0,a=0,p=0;for(let h of t.units){if(!h.alive||h.side!==n)continue;let[m]=this.own(h.x,h.y);o+=m,r++,h.kind==="archer"&&(a+=m,p++)}let s=Ui(r?o/r:an.width/2,4,an.width-4),u=wn-an.noDropRadius-1.2,f=p?Ui(a/p,3,an.width-3):s,l=0,c=0;for(let h of e)h==="assassin"?(this.queue.push({kind:h,ox:Ui(f+(c%6-2.5)*.85,1,an.width-1),oy:u-Math.floor(c/6)*1.1}),c++):(this.queue.push({kind:h,ox:Ui(s+(l%10-4.5)*.85,1,an.width-1),oy:u-Math.floor(l/10)*1.1}),l++)}findSpot(t,e,n){for(let[o,r]of c5){let[a,p]=this.world(Ui(e+o,.5,an.width-.5),Ui(n+r,.5,an.length-.5));if(t.canDrop(this.side,a,p))return[a,p]}return null}world(t,e){return this.side===0?[t,e]:[an.width-t,an.length-e]}own(t,e){return this.side===0?[t,e]:[an.width-t,an.length-e]}},c5=[[0,0],[1.5,0],[-1.5,0],[0,-1.5],[3,-1.5],[-3,-1.5],[0,-3.5],[5,-3],[-5,-3],[0,-6],[8,-6],[-8,-6]],Ui=(i,t,e)=>i<t?t:i>e?e:i;var gl=class{constructor(t,e,n){$(this,"controls",e);$(this,"seed",n);$(this,"b");$(this,"pilots",[null,null]);$(this,"takeover",[null,null]);this.b=new Ri(t),e.forEach((o,r)=>{if(o.bot)this.pilots[r]=new Pa(r,$o(n,r),t[r].counts,o.lane??0);else{for(let a of o.drops)(o.botFrom===void 0||a.tick<o.botFrom)&&this.b.schedule({...a,side:r});o.botFrom!==void 0&&(this.takeover[r]=o.botFrom)}})}drop(t){this.b.schedule(t)}takeOver(t,e=0){this.pilots[t]||(this.pilots[t]=new Pa(t,$o(this.seed,t,99),this.b.left(t),e,!0))}step(){let t=this.b;if(!t.over){for(let e of[0,1]){let n=this.takeover[e];n!==null&&t.tick>=n&&!this.pilots[e]&&this.takeOver(e,this.controls[e].lane??0);let o=this.pilots[e];if(o)for(let r of o.think(t))t.schedule(r)}t.step()}}run(){for(;!this.b.over;)this.step();return this.b.result}},mh=()=>({drops:new Map,takeover:new Map});function Tl(i,t,e=mh()){let n=i.pairs[t],o=[bl(i,n.a),bl(i,n.b)],r=[0,1].map(a=>{let p=fh(i,n,a),s=i.players[a===0?n.a:n.b].profile.lane;if(p===null)return{bot:!0,lane:s};let u=e.takeover.get(p);return{drops:e.drops.get(p)??[],botFrom:u??(e.drops.has(p)?void 0:0),lane:s}});return new gl(o,r,lh(i,t))}function yh(i,t=mh()){return i.pairs.map((e,n)=>Tl(i,n,t).run())}var gh=new Set(["here","buy","reroll","cap","army"]),zs=class{constructor(t,e=null,n=t.solo?2:pt.net.delayTicks){$(this,"auth",t);$(this,"duelFactory",e);$(this,"delayTicks",n);$(this,"m");$(this,"stage","wait");$(this,"fight",null);$(this,"mySide",0);$(this,"oppSeat",null);$(this,"ghost",!1);$(this,"last",null);$(this,"myDrops",[]);$(this,"base",null);$(this,"seen","");$(this,"dropSeq",0);$(this,"posted",!1);$(this,"duel",null);$(this,"takenOver",!1);$(this,"oppDrops",[]);this.m=ah(t.seed,t.humans)}get me(){return this.auth.mySeat}get player(){return this.m.players[this.me]}get round(){return this.m.round}get alive(){return!this.player.out}get stageEnd(){let t=this.m.round;switch(this.stage){case"wait":return Di(1);case"prep":return kn(t);case"battle":return gr(t);case"results":return Di(t+1);default:return 1/0}}get myBattleOver(){return!this.fight||this.fight.b.over}update(){let t=this.auth.clock();for(let e=0;e<400;e++){let n=this.m.round;if(this.stage==="over")return;if(this.stage==="wait"||this.stage==="results"){if(this.m.phase==="over"){this.stage="over";return}if(t<Di(n+1))return;this.beginRound();continue}if(this.stage==="prep"){if(this.rebuild(),t<kn(n)||this.auth.syncedTo()<kn(n))return;this.rebuild(!0,!0),uh(this.m),this.stage="battle",this.setupFight(t<gr(n));continue}this.stepFight(t);let o=this.auth.solo?gr(n):Oa(n)+.3;if(t<o||this.auth.syncedTo()<(this.auth.solo?0:Oa(n)))return;this.finishRound()}}do(t){if(this.stage!=="prep"||!this.alive)return!1;let e=structuredClone(this.m);return Kn(e,this.me,t)?(this.auth.post(this.m.round,t.k,t),this.rebuild(!0),!0):!1}canDrop(t,e){let n=this.fight;return!!n&&!n.b.over&&this.stage==="battle"&&n.b.canDrop(this.mySide,t,e)}drop(t,e,n){let o=this.fight;if(!o||o.b.over||this.stage!=="battle"||this.takenOver||o.b.left(this.mySide)[t]<=0||!o.b.canDrop(this.mySide,e,n))return!1;let r={tick:o.b.tick+this.delayTicks,side:this.mySide,kind:t,x:e,y:n,seq:this.dropSeq++};return o.drop(r),this.myDrops.push(r),this.duel?.send(r),!0}alpha(){let t=this.fight;if(!t||t.b.over||this.stage!=="battle")return 1;let e=(this.auth.clock()-kn(this.m.round))/ze;return Math.max(0,Math.min(1,e-t.b.tick+1))}beginRound(){sh(this.m),this.base=structuredClone(this.m),this.seen="",this.stage="prep",this.fight=null,this.oppSeat=null,this.ghost=!1,this.myDrops.length=0,this.dropSeq=0,this.posted=!1,this.takenOver=!1,this.oppDrops=[],this.duel?.close(),this.duel=null,this.alive&&this.auth.clock()<kn(this.m.round)&&this.auth.post(this.m.round,"here",{k:"here"}),this.rebuild(!0)}rebuild(t=!1,e=!1){if(!this.base)return;let n=this.m.round,o=e?[]:this.auth.pending().filter(u=>u.round===n&&gh.has(u.kind)),r=this.auth.confirmed().filter(u=>u.round===n&&gh.has(u.kind)),a=`${r.length}/${o.length}/${r.at(-1)?.seq??-1}`;if(!t&&a===this.seen)return;this.seen=a;let p=structuredClone(this.base),s=new Set;for(let u of[...r,...o])s.has(u.cid)||(s.add(u.cid),Kn(p,u.seat,u.data));this.m=p}setupFight(t){if(!this.alive)return;let e=this.m.pairs.findIndex(p=>p.a===this.me||p.b===this.me&&!p.ghost);if(e<0)return;let n=this.m.pairs[e];if(this.mySide=n.a===this.me?0:1,this.oppSeat=this.mySide===0?n.b:n.a,this.ghost=n.ghost,!t||!this.player.here)return;let o={drops:new Map([[this.me,[]]]),takeover:new Map},r=this.m.players[this.oppSeat];!n.ghost&&r.human&&r.here&&(o.drops.set(r.seat,[]),this.duel=this.duelFactory?this.duelFactory(this.m.round,this.me,r.seat,this.mySide):null,this.duel||o.takeover.set(r.seat,0)),this.fight=Tl(this.m,e,o)}stepFight(t){let e=this.fight;if(!e)return;let n=Math.min(Aa,Math.floor((t-kn(this.m.round))/ze)),o=1-this.mySide;for(;!e.b.over&&e.b.tick<n;){if(this.duel){this.oppDrops.push(...this.duel.take());let r=this.duel.gone();if(r!==null&&e.b.tick>=r&&!this.takenOver&&(this.takenOver=!0,e.takeOver(o,this.m.players[this.oppSeat].profile.lane)),!this.takenOver&&e.b.tick>=this.duel.frontier(e.b.tick))break;let a=this.oppDrops.filter(p=>p.tick<=e.b.tick);this.oppDrops=this.oppDrops.filter(p=>p.tick>e.b.tick);for(let p of a)(r===null||p.tick<r)&&e.drop({...p,side:o})}e.step()}e.b.over&&!this.posted&&this.postDrops()}postDrops(){this.posted=!0,this.auth.post(this.m.round,"drops",{drops:this.myDrops});let t=this.duel?.gone();this.duel&&t!==null&&t!==void 0&&this.oppSeat!==null&&this.auth.post(this.m.round,"takeover",{seat:this.oppSeat,tick:t,drops:this.duel.seen().filter(e=>e.tick<t)})}finishRound(){let t=this.fight;if(t&&!t.b.over)for(;!t.b.over;)t.step();t&&!this.posted&&this.postDrops(),this.duel?.close(),this.duel=null,this.last=ch(this.m,yh(this.m,this.inputsOf(this.m.round))),this.stage=this.m.phase==="over"?"over":"results"}inputsOf(t){let e={drops:new Map,takeover:new Map},n=new Map,o=[...this.auth.confirmed(),...this.auth.pending()].filter(r=>r.round===t);for(let r of o)if(r.kind==="drops"&&!e.drops.has(r.seat)&&e.drops.set(r.seat,r.data.drops),r.kind==="takeover"){let a=r.data;e.takeover.has(a.seat)||(e.takeover.set(a.seat,a.tick),n.set(a.seat,a.drops))}for(let[r,a]of n)e.drops.set(r,a);return this.fight&&!e.drops.has(this.me)&&e.drops.set(this.me,[...this.myDrops]),e}};function Th(i){let t=i.last?.find(n=>n.pair.a===i.me||n.pair.b===i.me&&!n.pair.ghost);if(!t)return{won:null,result:null,damage:0};let e=t.pair.a===i.me?0:1;return{won:t.result.winner===-1?null:t.result.winner===e,result:t.result,damage:t.loser===i.me?t.damage:0}}var h5={barbarian:"soldat",archer:"archere",tank:"veteran",assassin:"pillard"},Vl={hp:"heart",damage:"sword",attackSpeed:"fast",moveSpeed:"boot",range:"target"},Ys=(i,t="pic")=>`<img class="${t}" data-art="${h5[i]}" alt="">`,Eh=i=>`+${Math.round(i*100)} %`;function El(i,t){return Object.keys(Vl).filter(e=>i.up[t][e]>0).map(e=>`<span class="chip">${Oe(Vl[e])}${Eh(i.up[t][e])}</span>`).join("")}function Ul(i){return ae.filter(t=>i.army[t]>0).map(t=>`<span class="mini">${Ys(t,"")}<span class="n">${i.army[t]}</span></span>`).join(" ")||'<span class="f">arm\xE9e vide</span>'}var js=class{constructor(t,e){$(this,"s",t);$(this,"acts",e);$(this,"root",document.createElement("div"));$(this,"parts",{});$(this,"pick","barbarian");$(this,"openRow",-1);$(this,"toastAt",0);$(this,"spectating",!1);this.root.className="ab",document.body.appendChild(this.root);for(let n of["top","army","shop","players","ready","gauges","deck","hint","life","cover","toast"]){let o=document.createElement("div");o.dataset.part=n,this.root.appendChild(o),this.parts[n]={el:o,key:""}}this.root.addEventListener("click",n=>this.click(n))}put(t,e,n){let o=this.parts[t];o.key!==e&&(o.key=e,o.el.innerHTML=n(),Ma(o.el))}toast(t){let e=performance.now();if(e-this.toastAt<700)return;this.toastAt=e;let n=this.parts.toast.el;n.innerHTML=`<div id="toast2" class="plate">${He(t)}</div>`,setTimeout(()=>{performance.now()-this.toastAt>=1400&&(n.innerHTML="")},1500)}render(){let t=this.s(),e=t.stage,n=t.player,o=t.auth.clock(),r=e==="prep"&&t.alive,a=e==="battle"&&!!t.fight,p=Math.max(0,t.stageEnd-o),s=e==="wait"?"La partie commence":e==="prep"?"Pr\xE9paration":e==="battle"?"Bataille":e==="results"?"R\xE9sultats":"Fin",u=hh(t.m,t.me);this.put("top",a?"battle":`${e}|${t.round}|${Math.ceil(p)}|${n.gold}|${n.hp}|${u?.seat}|${u?Ul(t.m.players[u.seat]):""}`,()=>a?"":`
      <div class="topbar">
        <div class="rnd plate n">Round ${t.round||1}<small>${s}</small></div>
        <div class="clock plate n">${e==="over"?"":pu(p)}</div>
        <div class="res plate n"><span class="coin"></span>${n.gold}</div>
        <div class="res plate n">${Oe("heart")}${Math.max(0,n.hp)}</div>
        <div class="sp"></div>
        ${r&&u?`<div class="next plate"><span class="f">${u.ghost?"Contre la copie de":"Prochain adversaire"}</span><span class="n">${He(t.m.players[u.seat].name)}</span>${Ul(t.m.players[u.seat])}</div>`:""}
      </div>`);let f=eo(n.army);this.put("army",r?`a|${JSON.stringify(n.army)}|${n.places}|${n.gold}|${JSON.stringify(n.up)}`:"",()=>r?`
      <div class="army plate pane">
        <div class="head"><span class="n">Arm\xE9e</span><span class="n">${f} / ${n.places} places</span></div>
        <div class="cap"><span class="bar"><i class="${f>=n.places?"full":""}" style="width:${100*f/n.places}%"></i></span>
          <button class="pbtn gold" data-do="cap" ${n.places>=pt.army.maxPlaces||n.gold<pt.army.stepCost?"disabled":""}>+${pt.army.step} places \xB7 ${pt.army.stepCost} <span class="coin"></span></button></div>
        ${ae.map(h=>`<div class="trow">${Ys(h)}<div class="mid"><span class="n">${yr[h]}<small>${pt.troops[h].places} pl.</small></span><span class="chips">${El(n,h)}</span></div>
          <div class="stepper"><button class="pbtn" data-do="minus" data-t="${h}" ${n.army[h]?"":"disabled"}>\u2212</button><span class="n">${n.army[h]}</span>
          <button class="pbtn" data-do="plus" data-t="${h}" ${f+pt.troops[h].places>n.places?"disabled":""}>+</button></div></div>`).join("")}
        <div class="row" style="display:flex;gap:6px;justify-content:center"><button class="pbtn" data-do="fill">Remplir</button><button class="pbtn" data-do="clear">Vider</button></div>
      </div>`:""),this.put("shop",r?`s|${JSON.stringify(n.offers)}|${n.gold}`:"",()=>r?`
      <div class="shop plate pane">
        <div class="head"><span class="n">Am\xE9liorations</span><button class="pbtn" data-do="reroll" ${n.gold<pt.economy.reroll?"disabled":""}>${Oe("rotate")} Relancer \xB7 ${pt.economy.reroll} <span class="coin"></span></button></div>
        <div class="offers">${n.offers.map((h,m)=>h?`
          <button class="offer r${h.rarity} ${n.gold<Ho(h)?"poor":""}" data-do="buy" data-i="${m}">
            <span class="rar">${pt.rarities[h.rarity].name}</span>${Ys(h.kind)}
            <span class="what n">${Oe(Vl[h.stat])}<span class="n">${Eh(pt.rarities[h.rarity].bonus)}</span></span>
            <span class="who">${Hc[h.stat]} \xB7 ${yr[h.kind]}</span>
            <span class="price n">${Ho(h)} <span class="coin"></span></span></button>`:'<div class="offer sold slot"></div>').join("")}</div>
      </div>`:"");let l=e==="prep"||e==="results"||e==="wait";this.put("players",l?`p|${this.openRow}|${t.m.players.map(h=>`${h.hp}${h.out?.place}${JSON.stringify(h.army)}${h.places}${JSON.stringify(h.up)}`).join()}|${u?.seat}`:"",()=>l?`
      <div class="players plate pane">${ml(t.m).map(h=>`
        <div class="prow ${h.seat===t.me?"me":""} ${u&&h.seat===u.seat?"opp":""} ${h.out?"out":""} ${this.openRow===h.seat?"open":""}" data-do="row" data-i="${h.seat}">
          <div class="l1 n"><span class="nm">${He(h.name)}</span>${h.out?`<span class="f">${h.out.place}e</span>`:`${Oe("heart")}${Math.max(0,h.hp)}`}</div>
          <div class="hpbar"><i style="width:${Math.max(0,h.hp)}%"></i></div>
          <div class="det"><span class="f">${eo(h.army)} / ${h.places} places</span><div>${Ul(h)}</div>
            ${ae.map(m=>El(h,m)?`<div class="chips"><span class="f">${yr[m]}</span>${El(h,m)}</div>`:"").join("")}</div>
        </div>`).join("")}</div>`:""),this.put("ready",r&&t.auth.solo?"r":"",()=>r&&t.auth.solo?'<div class="ready"><button class="pbtn go" data-do="ready">Pr\xEAt</button></div>':"");let c=t.fight?.b;if(a&&c){let h=c.gauges[t.mySide],m=c.gauges[1-t.mySide],y=t.oppSeat!==null?t.m.players[t.oppSeat].name:"";this.put("gauges",`g|${h.toFixed(0)}|${m.toFixed(0)}|${Math.ceil(p)}|${c.over}`,()=>`
        <div class="gauges plate">
          <div class="gauge mine"><div class="nm n"><span>${He(n.name)}</span><span>${Math.floor(h)} %</span></div><div class="bar"><i style="width:${h}%"></i></div></div>
          <div class="vs"><span class="n">${pu(Math.max(0,pt.battle.maxSeconds-c.time))}</span><span class="f">Round ${t.round}</span></div>
          <div class="gauge theirs"><div class="nm n"><span>${He(y)}${t.ghost?" (copie)":""}</span><span>${Math.floor(m)} %</span></div><div class="bar"><i style="width:${m}%"></i></div></div>
        </div>`);let b=c.left(t.mySide);if(b[this.pick]<=0){let T=ae.find(P=>b[P]>0);T&&(this.pick=T)}this.put("deck",`d|${JSON.stringify(b)}|${this.pick}`,()=>`<div class="deck">${ae.filter(T=>t.player.army[T]>0).map(T=>`
        <button class="tcard ${T===this.pick?"sel":""} ${b[T]?"":"empty"}" data-do="pick" data-t="${T}" aria-label="${yr[T]}">${Ys(T,"")}<span class="cnt n">\xD7${b[T]}</span></button>`).join("")}</div>`);let d=ae.every(T=>b[T]===0);this.put("hint",c.tick<120&&!d?"h":"",()=>c.tick<120&&!d?'<div class="hint plate">Touche un type, puis maintiens le pouce sur le terrain pour poser</div>':""),this.put("life",`l|${n.hp}`,()=>`<div class="mylife plate n">${Oe("heart")}${Math.max(0,n.hp)}</div>`)}else for(let h of["gauges","deck","hint","life"])this.put(h,"",()=>"");this.cover(t)}cover(t){let e=t.stage;if(e==="over"){let n=ml(t.m);this.put("cover",`over|${n.map(o=>o.seat).join()}`,()=>`<div class="cover"><div class="box plate">
        <h2 class="${n[0].seat===t.me?"good":""}">${n[0].seat===t.me?"Victoire !":`${t.player.out?.place}e place`}</h2>
        <div class="list">${n.map(o=>`<div class="li n ${o.seat===t.me?"me":""}"><span>${o.out?.place}.</span><span class="nm">${He(o.name)}</span><span class="f">${o.human?"joueur":"bot"} \xB7 ${o.out?.place===1?"vainqueur":`\xE9limin\xE9 au round ${o.out?.round}`}</span></div>`).join("")}</div>
        <div class="row"><button class="pbtn go" data-do="again">Rejouer</button></div></div></div>`);return}if(!t.alive&&!this.spectating){this.put("cover",`out|${t.player.out?.place}`,()=>`<div class="cover"><div class="box plate">
        <h2 class="bad">\xC9limin\xE9</h2><p class="f">${t.player.out?.place}e place sur 8. La partie continue sans toi.</p>
        <div class="row"><button class="pbtn" data-do="spectate">Regarder la fin</button><button class="pbtn go" data-do="again">Rejouer</button></div></div></div>`);return}if(e==="results"&&t.last&&t.alive){let n=Th(t),o=t.oppSeat!==null?t.m.players[t.oppSeat]:null,r=n.won===null?"<h2>\xC9galit\xE9</h2>":n.won?'<h2 class="good">Victoire</h2>':'<h2 class="bad">D\xE9faite</h2>',a=n.result?n.result.outcome==="capture"?"L\u2019\xC9clat est pris.":"Temps \xE9coul\xE9 : la jauge la plus haute l\u2019emporte.":"";this.put("cover",`res|${t.round}`,()=>`<div class="cover" style="background:none;pointer-events:none"><div class="box plate" style="pointer-events:auto;width:min(360px,calc(100% - 40px))">
        ${r}<p class="f">${t.ghost?"Contre une copie : aucun PV en jeu.":n.damage?`Tu perds ${n.damage} PV.`:n.won?`${He(o?.name??"")} perd des PV.`:"Personne ne perd de PV."} ${a}</p>
        <div class="list">${t.last.map(p=>{let s=t.m.players[p.pair.a],u=t.m.players[p.pair.b],f=p.result.winner===-1?"nul":p.result.winner===0?s.name:u.name;return`<div class="li n"><span class="nm">${He(s.name)} \u2013 ${He(u.name)}${p.pair.ghost?" (copie)":""}</span><span class="f">${He(f)}${p.damage?` \xB7 \u2212${p.damage}`:""}</span></div>`}).join("")}</div>
        ${t.auth.solo?'<div class="row"><button class="pbtn go" data-do="next">Continuer</button></div>':""}</div></div>`);return}this.put("cover","",()=>"")}click(t){let e=t.target.closest("[data-do]");if(!e)return;let n=this.s(),o=n.player,r=e.dataset.do,a=e.dataset.t,p={...o.army},s=(u,f)=>{u||this.toast(f)};switch(r){case"cap":s(n.do({k:"cap"}),"Pas assez d\u2019or");break;case"reroll":s(n.do({k:"reroll"}),"Pas assez d\u2019or");break;case"buy":s(n.do({k:"buy",slot:Number(e.dataset.i)}),"Pas assez d\u2019or");break;case"plus":p[a]++,s(n.do({k:"army",army:p}),"Plus de place");break;case"minus":p[a]>0&&(p[a]--,n.do({k:"army",army:p}));break;case"clear":n.do({k:"army",army:{barbarian:0,archer:0,tank:0,assassin:0}});break;case"fill":{let u=ae.reduce((l,c)=>p[c]*pt.troops[c].places>p[l]*pt.troops[l].places?c:l,"barbarian"),f=o.places-eo(p);for(;f>=pt.troops[u].places;)p[u]++,f-=pt.troops[u].places;for(;f>0;)p.barbarian++,f--;n.do({k:"army",army:p});break}case"row":this.openRow=this.openRow===Number(e.dataset.i)?-1:Number(e.dataset.i);break;case"pick":this.pick=a;break;case"ready":this.acts.ready();break;case"next":this.acts.next();break;case"again":this.acts.again();break;case"spectate":this.spectating=!0,this.acts.spectate();break}this.render()}};var Gs=class{constructor(t,e,n,o,r,a,p=!0,s=pt.net.delayTicks){$(this,"game",t);$(this,"round",e);$(this,"me",n);$(this,"opp",o);$(this,"net",r);$(this,"now",a);$(this,"delay",s);$(this,"mine",[]);$(this,"theirs",[]);$(this,"prefix",0);$(this,"delivered",0);$(this,"acked",0);$(this,"best",pt.net.delayTicks-1);$(this,"claims",[]);$(this,"myTick",0);$(this,"heard");$(this,"goneAt",null);$(this,"stop");$(this,"timer",null);this.heard=a(),this.stop=r.listen(u=>this.receive(u)),p&&(this.timer=setInterval(()=>this.flush(),pt.net.sendEvery)),this.flush()}send(t){this.mine.push(t),this.flush()}flush(){this.net.send({g:this.game,r:this.round,from:this.me,to:this.opp,upTo:this.myTick+this.delay-1,count:this.mine.length,base:this.acked,drops:this.mine.slice(this.acked),ack:this.prefix})}receive(t){if(!(t.g!==this.game||t.r!==this.round||t.from!==this.opp||t.to!==this.me)){for(this.heard=this.now(),t.ack>this.acked&&(this.acked=Math.min(t.ack,this.mine.length)),t.drops.forEach((e,n)=>{this.theirs[t.base+n]||(this.theirs[t.base+n]=e)});this.theirs[this.prefix];)this.prefix++;this.claims.push({upTo:t.upTo,count:t.count}),this.claims=this.claims.filter(e=>e.count<=this.prefix?(e.upTo>this.best&&(this.best=e.upTo),!1):!0)}}take(){let t=this.theirs.slice(this.delivered,this.prefix);return this.delivered=this.prefix,t}frontier(t){return t>this.myTick&&(this.myTick=t),this.goneAt??this.best+1}gone(){return this.goneAt===null&&this.now()-this.heard>pt.net.takeoverSeconds&&(this.goneAt=this.best+1),this.goneAt}seen(){return this.theirs.slice(0,this.prefix)}close(){this.timer&&clearInterval(this.timer),this.timer=null,this.stop()}};var Ks=class{constructor(t,e,n){$(this,"url",t);$(this,"key",e);$(this,"ws",null);$(this,"ref",0);$(this,"joined",!1);$(this,"queue",[]);$(this,"listeners",new Set);$(this,"beat",null);$(this,"closed",!1);$(this,"topic");this.topic=`realtime:${n}`,this.open()}open(){if(this.closed)return;let t=new WebSocket(`${this.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${encodeURIComponent(this.key)}&vsn=1.0.0`);this.ws=t,this.joined=!1,t.onopen=()=>{this.raw({topic:this.topic,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:""},postgres_changes:[],private:!1}},ref:String(++this.ref),join_ref:"1"}),this.beat=setInterval(()=>this.raw({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++this.ref)}),25e3)},t.onmessage=e=>{let n;try{n=JSON.parse(String(e.data))}catch{return}if(n.topic===this.topic){if(n.event==="phx_reply"&&n.payload.status==="ok"&&!this.joined){this.joined=!0;for(let o of this.queue.splice(0))t.send(o)}else if(n.event==="broadcast"&&n.payload.event==="duel"&&n.payload.payload)for(let o of this.listeners)o(n.payload.payload)}},t.onclose=()=>{this.beat&&clearInterval(this.beat),this.beat=null,this.closed||setTimeout(()=>this.open(),800)},t.onerror=()=>{try{t.close()}catch{}}}raw(t){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}send(t){let e=JSON.stringify({topic:this.topic,event:"broadcast",payload:{type:"broadcast",event:"duel",payload:t},ref:String(++this.ref),join_ref:"1"});this.joined&&this.ws?.readyState===WebSocket.OPEN?this.ws.send(e):this.queue.length<50&&this.queue.push(e)}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}close(){this.closed=!0,this.beat&&clearInterval(this.beat),this.ws?.close()}};var d5=globalThis.__PLANETOID_NET,Wn=d5??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var Uh=(i,t,e)=>i("autobattler_open",{p_secret:t,p_name:e}),Vh=(i,t,e,n)=>i("autobattler_join",{p_secret:t,p_code:e,p_name:n}),Sl=(i,t,e)=>i("autobattler_room",{p_secret:t,p_game:e}),Sh=(i,t,e)=>i("autobattler_launch",{p_secret:t,p_game:e});function Ph(i){return/unknown game/.test(i)?"Aucune partie avec ce code.":/game full/.test(i)?"La partie est compl\xE8te (8 joueurs).":/already started/.test(i)?"La partie a d\xE9j\xE0 commenc\xE9.":/bad name/.test(i)?"Choisis un nom (24 lettres au plus).":/only the creator/.test(i)?"Seul le cr\xE9ateur de la partie peut la lancer.":/not a player/.test(i)?"Ce t\xE9l\xE9phone ne fait pas partie de cette partie.":i}var Ws=class{constructor(t,e,n,o,r=()=>Date.now(),a=!0){$(this,"rpc",t);$(this,"key",e);$(this,"game",n);$(this,"now",r);$(this,"solo",!1);$(this,"seed");$(this,"humans");$(this,"mySeat");$(this,"code");$(this,"onChange");$(this,"log",[]);$(this,"mine",[]);$(this,"lastSeq",0);$(this,"synced",-1/0);$(this,"offset");$(this,"bestRtt",1/0);$(this,"startAt");$(this,"closed",!1);$(this,"timer",null);$(this,"busy",!1);if(o.seed===null||o.startAt===null)throw new Error("the game is not launched");this.seed=o.seed,this.startAt=o.startAt,this.mySeat=o.seat,this.code=o.code,this.humans=[...o.players].sort((p,s)=>p.seat-s.seat).map(p=>p.name),this.offset=o.now-r(),a&&this.loop()}clock(){return(this.now()+this.offset-this.startAt)/1e3}syncedTo(){return this.synced}confirmed(){return this.log}pending(){return this.mine}post(t,e,n){let o={seq:-1,seat:this.mySeat,round:t,kind:e,data:n,cid:cu(),sent:0};return this.mine.push(o),this.sendOne(o),o.cid}async sendOne(t){t.sent=this.now();try{await this.rpc("autobattler_act",{p_secret:this.key,p_game:this.game,p_round:t.round,p_kind:t.kind,p_data:t.data,p_cid:t.cid})}catch(e){let n=e.message??"";/connexion|fetch|network/i.test(n)||(this.mine=this.mine.filter(o=>o!==t),this.onChange?.())}}async poll(){if(!this.busy){this.busy=!0;try{let t=this.now(),e=await this.rpc("autobattler_log",{p_secret:this.key,p_game:this.game,p_since:this.lastSeq}),n=this.now();n-t<=this.bestRtt+30&&(this.bestRtt=Math.min(this.bestRtt,n-t),this.offset=e.now-(t+n)/2);let o=!1;for(let a of e.entries)a.seq<=this.lastSeq||(this.log.push(a),this.lastSeq=a.seq,o=!0);let r=new Set(this.log.map(a=>a.cid));this.mine=this.mine.filter(a=>!r.has(a.cid)),this.synced=(e.now-this.startAt)/1e3-.25;for(let a of this.mine)this.now()-a.sent>2500&&this.sendOne(a);o&&this.onChange?.()}catch{}finally{this.busy=!1}}}loop(){this.closed||this.poll().finally(()=>{let t=this.clock(),e=(t%110+110)%110,n=e>=29&&e<32||e>=107.5&&e<110;this.timer=setTimeout(()=>this.loop(),n?250:1e3)})}close(){this.closed=!0,this.timer&&clearTimeout(this.timer)}};var Lh=()=>!!Wn.url&&!!Wn.key;var Vi=async(i,t)=>{let e={apikey:Wn.key,"Content-Type":"application/json"};Wn.key.startsWith("sb_")||(e.Authorization=`Bearer ${Wn.key}`);let n;try{n=await fetch(`${Wn.url}/rest/v1/rpc/${i}`,{method:"POST",headers:e,body:JSON.stringify(t)})}catch{throw new Error("Pas de connexion au serveur.")}let o=await n.text();if(!n.ok){let r=o;try{r=JSON.parse(o).message??o}catch{}throw(n.status===404||/Could not find the function/.test(r))&&(r="Le serveur de ce mode n\u2019est pas encore install\xE9 (game/src/autobattler/net/schema.sql)."),new Error(Ph(r))}return o?JSON.parse(o):null},La={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function qs(){let i=La.get("ab-cle");if(!i||i.length<20){let t=crypto.getRandomValues(new Uint8Array(32));i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),La.set("ab-cle",i)}return i}var Pl=()=>{try{let i=La.get("ab-partie");return i?JSON.parse(i):null}catch{return null}},wh=(i,t)=>La.set("ab-partie",JSON.stringify({id:i,code:t,at:Date.now()})),Ll=()=>La.del("ab-partie");function Ch(i,t,e,n){let o=null,r=()=>{o&&clearTimeout(o),o=null},a=l=>{i.innerHTML=`<div class="cover"><div class="box plate">${l}</div></div>`},p=l=>{let c=i.querySelector(".msg");c&&(c.textContent=l)};function s(){if(r(),!Lh()){a('<h2>Partie entre amis</h2><p class="f">Le serveur n\u2019est pas configur\xE9 dans cette version.</p><div class="row"><button class="pbtn" data-a="back">Retour</button></div>');return}let l=Pl(),c=l&&Date.now()-l.at<(pt.maxRounds*Ia+600)*1e3;a(`<h2>Partie entre amis</h2>
      <p class="f">Jusqu\u2019\xE0 8 joueurs ; les places libres sont prises par des bots.</p>
      ${c?`<div class="row"><button class="pbtn go" data-a="resume">Reprendre la partie ${He(l.code)}</button></div>`:""}
      <div class="row"><button class="pbtn go" data-a="open">Cr\xE9er une partie</button></div>
      <div class="row"><input class="code" maxlength="5" placeholder="CODE" id="ab-code"><button class="pbtn" data-a="join">Rejoindre</button></div>
      <div class="msg f"></div>
      <div class="row"><button class="pbtn" data-a="back">Retour</button></div>`)}function u(l){if(r(),wh(l.id,l.code),l.startAt!==null&&l.seed!==null){f(l);return}let c=l.seat;a(`<h2>Salle d\u2019attente</h2>
      <p class="f">Donne ce code \xE0 tes amis :</p><div class="big">${He(l.code)}</div>
      <div class="list">${l.players.map(h=>`<div class="li n ${h.seat===c?"me":""}"><span class="nm">${He(h.name)}</span><span class="f">${h.seat===0?"cr\xE9e la partie":"joueur"}</span></div>`).join("")}
        ${Array.from({length:8-l.players.length},()=>'<div class="li n"><span class="nm f">bot</span></div>').join("")}</div>
      <div class="msg f"></div>
      <div class="row">${c===0?'<button class="pbtn go" data-a="launch">Lancer la partie</button>':'<span class="f">Le cr\xE9ateur lance la partie.</span>'}<button class="pbtn" data-a="leave">Quitter</button></div>`),i.room=l,o=setTimeout(()=>{Sl(Vi,qs(),l.id).then(u,h=>{p(h.message),o=setTimeout(()=>u(l),2e3)})},1500)}function f(l){r();let c=new Ks(Wn.url,Wn.key,`ab-${l.id}`),h=new Ws(Vi,qs(),l.id,l),m=h.close.bind(h);h.close=()=>{m(),c.close()},e(h,(b,d,T)=>new Gs(l.id,b,d,T,c,()=>performance.now()/1e3))}i.onclick=l=>{let c=l.target.closest("[data-a]")?.dataset.a,h=qs();if(c==="back"&&(r(),i.onclick=null,n()),c==="open"&&Uh(Vi,h,t).then(u,m=>p(m.message)),c==="join"){let m=i.querySelector("#ab-code").value.trim().toUpperCase();if(m.length<4){p("Entre le code de la partie.");return}Vh(Vi,h,m,t).then(u,y=>p(y.message))}if(c==="resume"){let m=Pl();m&&Sl(Vi,h,m.id).then(u,y=>{Ll(),p(y.message)})}if(c==="launch"){let m=i.room;m&&Sh(Vi,h,m.id).then(u,y=>p(y.message))}c==="leave"&&(Ll(),s())},s()}var Al=new URLSearchParams(location.search);oc();{let i=document.createElement("style");i.textContent=$c,document.head.appendChild(i)}var Pi=document.getElementById("scene"),pn=new Zs(Pi),xl=window,Ie=null,To=null,Li=document.createElement("div");Li.className="ab";document.body.appendChild(Li);function Dl(i,t=null){Li.innerHTML="",Ie?.auth.close(),To?.root.remove(),Ie=new zs(i,t),i.onChange=()=>Ie?.update(),To=new js(()=>Ie,{ready:()=>{let e=Ie;e.auth.skip?.(e.stageEnd)},next:()=>{let e=Ie;e.auth.skip?.(e.stageEnd)},again:()=>Il(),spectate:()=>{}}),Ie.update()}function Il(){Ie?.auth.close(),Ie=null,To?.root.remove(),To=null,pn.setBattle(null);let i=localStorage.getItem("ab-nom")??"";Li.innerHTML=`<div class="cover"><div class="box plate">
    <div class="title">L\u2019\xC9clat</div>
    <p class="f">Huit arm\xE9es, une seule \xE0 la fin. Pr\xE9pare ton arm\xE9e, puis prends l\u2019\xC9clat au centre de l\u2019ar\xE8ne.</p>
    <input id="ab-name" maxlength="24" placeholder="Ton nom" value="${He(i)}">
    <div class="row"><button class="pbtn go" data-go="solo">Jouer contre 7 bots</button><button class="pbtn" data-go="multi">Partie entre amis</button></div>
    <div class="row"><span class="f">Test de charge :</span><button class="pbtn" data-go="load-50">2 \xD7 50</button><button class="pbtn" data-go="load-100">2 \xD7 100</button><button class="pbtn" data-go="load-150">2 \xD7 150</button></div>
  </div></div>`,Ma(Li)}var xh=()=>{let i=document.getElementById("ab-name")?.value.trim()||"Toi";try{localStorage.setItem("ab-nom",i)}catch{}return i.slice(0,24)};Li.addEventListener("click",i=>{let t=i.target.closest("[data-go]")?.dataset.go;t==="solo"&&Dl(new Tr(Math.floor(Math.random()*2**31),xh())),t==="multi"&&Ch(Li,xh(),Dl,Il),t?.startsWith("load-")&&(location.search=`?load=${t.slice(5)}`)});var Hn=null,Rl=0,tu=0;Pi.addEventListener("pointerdown",i=>{xi.unlock();let t=Ie;!t||t.stage!=="battle"||!t.fight||(Hn={x:i.clientX,y:i.clientY,id:i.pointerId},Pi.setPointerCapture?.(i.pointerId),pn.showRed=!0,Rl=0,Mh(performance.now()))});Pi.addEventListener("pointermove",i=>{Hn&&i.pointerId===Hn.id&&(Hn.x=i.clientX,Hn.y=i.clientY)});var Rh=i=>{Hn&&i.pointerId===Hn.id&&(Hn=null,pn.showRed=!1)};Pi.addEventListener("pointerup",Rh);Pi.addEventListener("pointercancel",Rh);function Mh(i){let t=Ie;if(!Hn||!t||!To||i-Rl<1e3/pt.battle.dropRate)return;Rl=i;let e=pn.pick(Hn.x,Hn.y,Pi);if(!e)return;let n=tu*2.399,o=.25+.12*(tu%5),r=e.x+Math.cos(n)*o,a=e.y+Math.sin(n)*o;t.drop(To.pick,r,a)?(tu++,tu%3===1&&xi.play("troop_drop",{vol:.5})):t.fight&&t.fight.b.left(t.mySide)[To.pick]>0&&To.toast("Pas ici : zone rouge")}var Dh=performance.now(),wl=0,eu=0,Ml=0,Cl="",nu=0;function vh(i){let t=Math.min(.1,(i-Dh)/1e3);Dh=i,wl++,eu+=t,eu>1&&(Ml=wl/eu,wl=0,eu=0),Si&&Si.step(t);let e=Ie;if(e){if(e.update(),Mh(i),e.stage!==Cl){if(e.stage==="battle"&&(xi.music("music_raid"),nu=0),Cl==="battle"&&xi.music(null),e.stage==="results"){let n=e.last?.find(o=>o.loser===e.me);e.alive&&xi.jingle(n?"music_lose":"music_win")}Cl=e.stage}e.auth.solo&&(e.stage==="battle"&&e.myBattleOver&&(nu||(nu=i),i-nu>1600&&e.auth.skip?.(e.stageEnd)),!e.alive&&e.stage!=="over"&&e.auth.skip?.(e.stageEnd)),pn.setSide(e.mySide),pn.setBattle(e.stage==="battle"||e.stage==="results"?e.fight?.b??null:null),To?.render()}pn.frame(t,e?e.alpha():Si?Si.alpha:1),vl&&(vl.textContent=`${Ml.toFixed(0)} i/s \xB7 ${pn.drawn} troupes \xB7 ${pn.jsMs.toFixed(1)} ms de script`),requestAnimationFrame(vh)}var ou=Number(Al.get("load")??0),vl=null,Si=ou>0?(()=>{let i=to();i.barbarian=ou;let t=new Ri([{counts:{...i},upgrades:Er()},{counts:{...i},upgrades:Er()}]);for(let n=0;n<ou;n++)t.schedule({tick:0,side:0,kind:"barbarian",x:2+n%24,y:9+Math.floor(n/24),seq:n}),t.schedule({tick:0,side:1,kind:"barbarian",x:2+n%24,y:31-Math.floor(n/24),seq:n});pn.setBattle(t);let e={acc:0,alpha:1,b:t,step(n){for(e.acc+=n;e.acc>=ze;)e.acc-=ze,t.over||t.step();e.alpha=e.acc/ze}};return e})():null;if(Si||Al.has("fps")){let i=document.createElement("div");i.className="ab",i.innerHTML=`<div class="fps plate"></div>${Si?`<div style="position:absolute;left:calc(var(--l) + 4px);top:calc(var(--t) + 4px);display:flex;gap:6px;align-items:center">
    <button class="pbtn" onclick="location.search=''">Retour</button><button class="pbtn" onclick="location.reload()">Relancer</button><span class="plate n" style="padding:4px 8px">2 \xD7 ${ou} en m\xEAl\xE9e</span></div>`:""}`,document.body.appendChild(i),vl=i.firstElementChild}xl.game={get session(){return Ie},solo(i=1,t="Benoit"){return Dl(new Tr(i,t)),Ie.stage},skip(){let i=Ie;return i.auth.skip?.(i.stageEnd),i.update(),i.stage},advance(i){let t=Ie;return t.auth.skip?.(t.auth.clock()+i),t.update(),{stage:t.stage,tick:t.fight?.b.tick}},do(i){return Ie.do(i)},drop(i,t,e,n=1){let o=0;for(let r=0;r<n;r++)Ie.drop(i,t+r%6*.7,e+Math.floor(r/6)*.7)&&o++;return o},red(i){pn.showRed=i},state(){let i=Ie;return{stage:i.stage,round:i.round,hp:i.player.hp,gold:i.player.gold,side:i.mySide,opp:i.oppSeat,alive:i.alive,units:i.fight?.b.units.length??0,troops:ae.length}},fps:()=>({fps:Ml,js:pn.jsMs,drawn:pn.drawn})};pn.ready.then(()=>{xl.__ready=!0},i=>{console.error(i),xl.__ready=!0});!Si&&!Al.has("nohome")&&Il();requestAnimationFrame(vh);export{Dl as play};
