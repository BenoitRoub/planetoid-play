var vy=Object.defineProperty;var Ry=(i,t,e)=>t in i?vy(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var S=(i,t,e)=>Ry(i,typeof t!="symbol"?t+"":t,e);var N0=()=>document.documentElement.classList.contains("rot"),Dy=()=>window.__screen??{w:innerWidth,h:innerHeight};function My(){let i=(t,e,n)=>{Object.defineProperty(t,"clientX",{configurable:!0,enumerable:!0,get(){return N0()?n.call(this):e.call(this)}}),Object.defineProperty(t,"clientY",{configurable:!0,enumerable:!0,get(){return N0()?Dy().w-e.call(this):n.call(this)}})};for(let t of[MouseEvent,typeof Touch<"u"?Touch:null]){if(!t)continue;let e=Object.getOwnPropertyDescriptor(t.prototype,"clientX"),n=Object.getOwnPropertyDescriptor(t.prototype,"clientY");e?.get&&n?.get&&i(t.prototype,e.get,n.get)}}var X0=window;X0.__rotate||(X0.__rotate=!0,My());var J0="./assets/lilita-BW72GA3X.woff2";var z0="./assets/fredoka-3UPZTCSC.woff2";var Q0="./assets/soldat-VD7AFEPS.webp";var j0="./assets/archere-FKKFB2P7.webp";var Z0="./assets/recolteur-33TAN3DD.webp";var Y0="./assets/soldat-tete-AGMCDKZK.webp";var G0="./assets/colosse-JB5EJSFW.webp";var W0="./assets/recolteur-tete-7BNM6UJ6.webp";var q0="./assets/pillard-333ZQL3C.webp";var bs={soldat:Q0,archere:j0,recolteur:Z0,veteran:G0,pillard:q0,"soldat-tete":Y0,"recolteur-tete":W0},Jt="#2a1709",th=3.6,Z=(i=th)=>`stroke="${Jt}" stroke-width="${i}" stroke-linejoin="round" stroke-linecap="round"`,rn=(i,t,e='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${i}" ${e}>${t.map(([n,o])=>`<stop offset="${n}" stop-color="${o}"/>`).join("")}</linearGradient>`,Xy=[rn("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),rn("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',rn("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',rn("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),rn("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),rn("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),rn("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),rn("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),rn("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),rn("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),rn("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),rn("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),rn("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),rn("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),rn("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),rn("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),ds=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${Z()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${Z()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${Z(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${Z(3)}/>`,Sr=`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="var(--rc, #cfd5e2)" ${Z()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".5"/>
    <path d="M16 58 L50 56 L58 30 L52 32 L46 50 L18 52 Z" fill="#000" opacity=".16"/>`,Jy={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${Z()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${Z()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${Jt}" stroke-width="${th}" stroke-linecap="round"/>`,trophy:`
    <path d="M18 8 L46 8 L46 22 C46 32 40 38 32 39 C24 38 18 32 18 22 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="${Jt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="${Jt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <rect x="28" y="38" width="8" height="10" fill="url(#h-gold)" ${Z(3)}/>
    <rect x="18" y="47" width="28" height="10" rx="3" fill="url(#h-wood)" ${Z()}/>
    <path d="M24 13 L24 24 C24 28 26 31 29 33" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".75"/>`,rank:`
    <rect x="22" y="22" width="20" height="36" rx="2" fill="url(#h-gold)" ${Z()}/>
    <rect x="4" y="34" width="18" height="24" rx="2" fill="url(#h-steel)" ${Z()}/>
    <rect x="42" y="42" width="18" height="16" rx="2" fill="url(#h-wood)" ${Z()}/>
    <path d="M32 4 L35 10 L42 11 L37 16 L38 22 L32 19 L26 22 L27 16 L22 11 L29 10 Z" fill="url(#h-gold)" ${Z(2.6)}/>
    <path d="M26 27 L26 52" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".6"/>`,countdown:`
    <circle cx="32" cy="35" r="24" fill="url(#h-white)" ${Z()}/>
    <path d="M32 35 L32 15 A20 20 0 0 1 51 41 Z" fill="url(#h-red)" opacity=".85"/>
    <circle cx="32" cy="35" r="24" fill="none" ${Z()}/>
    <path d="M32 21 L32 35 L22 41" fill="none" ${Z()}/>
    <rect x="26" y="3" width="12" height="7" rx="3" fill="url(#h-gold)" ${Z(2.5)}/>
    <path d="M50 10 L56 16" stroke="${Jt}" stroke-width="6" stroke-linecap="round"/>`,forge:`
    <path d="M6 26 L32 8 L58 26 L52 29 L32 16 L12 29 Z" fill="url(#h-roof)" ${Z()}/>
    <path d="M12 28 L12 56 M52 28 L52 56" stroke="${Jt}" stroke-width="7"/><path d="M12 29 L12 55 M52 29 L52 55" stroke="url(#h-wood-x)" stroke-width="3"/>
    <circle cx="32" cy="36" r="10" fill="url(#h-gold-glow)"/>
    <path d="M18 40 L46 40 L42 46 L36 46 L38 54 L26 54 L28 46 L22 46 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M44 40 L54 40 L48 44 L44 44 Z" fill="url(#h-steel)" ${Z(2.6)}/>
    <path d="M22 41 L34 41" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`,reserve:`
    <path d="M18 14 L30 6 L36 12 L46 8 L50 20 L42 26 L22 26 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M29 8 L31 22 L26 22 Z" fill="#fff" opacity=".7"/>
    <path d="M6 22 L32 12 L58 22 L58 46 L32 58 L6 46 Z" fill="url(#h-white)" ${Z()}/>
    <path d="M6 22 L32 32 L58 22 L32 12 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M14 22 L32 16 L44 20" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M32 32 L32 58" stroke="${Jt}" stroke-width="3.2"/>
    <path d="M6 34 L32 44 L58 34" stroke="#a89f8c" stroke-width="2.2" fill="none"/>
    <path d="M6 22 L6 46 M32 32 L32 58 M58 22 L58 46" stroke="${Jt}" stroke-width="8"/>
    <path d="M6 23 L6 45 M32 33 L32 57 M58 23 L58 45" stroke="#5a5560" stroke-width="4"/>`,sanctuaire:`
    <ellipse cx="32" cy="50" rx="28" ry="10" fill="url(#h-white)" ${Z()}/>
    <circle cx="32" cy="34" r="22" fill="url(#h-cry-glow)"/>
    <path d="M17 42 L18 22 L23 19 L27 23 L26 42 Z" fill="url(#h-steel)" ${Z(2.8)}/>
    <path d="M37 42 L37 23 L41 19 L46 22 L47 42 Z" fill="url(#h-steel)" ${Z(2.8)}/>
    <path d="M24 49 L25 16 L32 6 L39 16 L40 49 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M32 18 L32 40 M27 24 L32 29 L37 24 M28 36 L32 40 L36 36" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
    <path d="M4 52 L6 30 L12 27 L16 31 L15 54 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M48 54 L48 31 L53 27 L58 30 L60 52 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M8 33 L11 30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`,"rune-soldat":`${Sr}<g transform="translate(32 33) scale(.42) rotate(38) translate(-32 -32)">${ds}</g>`,"rune-archere":`${Sr}
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="${Jt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="url(#h-wood-x)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M22 16 L22 50" stroke="${Jt}" stroke-width="1.6"/>
    <path d="M18 33 L44 33" stroke="${Jt}" stroke-width="3.2" stroke-linecap="round"/><path d="M44 33 L38 29 M44 33 L38 37" stroke="${Jt}" stroke-width="3" stroke-linecap="round"/>`,"rune-veteran":`${Sr}
    <path d="M28 26 L40 48" stroke="${Jt}" stroke-width="8" stroke-linecap="round"/><path d="M28 26 L40 48" stroke="url(#h-wood-x)" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M17 24 L27 14 L37 22 L27 32 Z" fill="url(#h-steel)" ${Z(2.6)}/>`,"rune-pillard":`${Sr}
    <path d="M24 48 L38 20" stroke="${Jt}" stroke-width="7" stroke-linecap="round"/><path d="M24 48 L38 20" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <path d="M33 18 C38 12 46 14 48 20 C44 22 41 26 40 30 Z" fill="url(#h-steel)" ${Z(2.6)}/>`,"rune-tour":`${Sr}
    <path d="M25 30 L39 30 L41 48 L23 48 Z" fill="url(#h-white)" ${Z(2.6)}/>
    <path d="M21 22 L43 22 L43 30 L21 30 Z" fill="url(#h-wood)" ${Z(2.6)}/>
    <path d="M18 23 L32 12 L46 23 Z" fill="url(#h-roof)" ${Z(2.6)}/>`,"rune-mortier":`${Sr}
    <ellipse cx="32" cy="42" rx="14" ry="6" fill="url(#h-white)" ${Z(2.6)}/>
    <path d="M24 40 C23 31 27 24 34 20 L41 30 C37 33 34 37 31 42 Z" fill="#4a4f5e" ${Z(2.6)}/>
    <circle cx="44" cy="17" r="4" fill="#2b2f3a" ${Z(2.2)}/>`,swords:`<g transform="rotate(-42 32 32)">${ds}</g><g transform="rotate(42 32 32)">${ds}</g>`,shovel:`
    <g transform="rotate(-32 32 32)">
      <path d="M22 4 L42 4" stroke="${Jt}" stroke-width="11" stroke-linecap="round"/>
      <path d="M22 4 L42 4" stroke="url(#h-wood-x)" stroke-width="5" stroke-linecap="round"/>
      <rect x="28.5" y="4" width="7" height="32" rx="2" fill="url(#h-wood-x)" ${Z()}/>
      <path d="M18 36 L46 36 L46 48 C46 56 40 63 32 63 C24 63 18 56 18 48 Z" fill="url(#h-steel)" ${Z()}/>
      <path d="M23 41 L28 41 L28 52 C25 51 23 48 23 45 Z" fill="#fff" opacity=".75"/>
      <rect x="27" y="31" width="10" height="8" rx="2" fill="#8f97ab" ${Z(3)}/>
    </g>`,house:`
    <path d="M14 30 L50 30 L50 57 L14 57 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M14 46 L50 46 L50 57 L14 57 Z" fill="#cfc6b6" ${Z(3)}/>
    <path d="M27 57 L27 45 C27 41 37 41 37 45 L37 57 Z" fill="url(#h-wood)" ${Z(3)}/>
    <path d="M32 33 L35.5 37 L32 41 L28.5 37 Z" fill="url(#h-cry)" ${Z(2.4)}/>
    <path d="M5 34 L32 8 L59 34 L52 37 L32 18 L12 37 Z" fill="url(#h-roof)" ${Z()}/>
    <path d="M14 30 L32 13 L36 16 L17 33 Z" fill="#fff" opacity=".45"/>`,map:`
    <path d="M6 14 L23 8 L41 14 L58 8 L58 50 L41 56 L23 50 L6 56 Z" fill="url(#h-parch)" ${Z()}/>
    <path d="M23 8 L23 50 L41 56 L41 14 Z" fill="#d9b779" opacity=".55"/>
    <path d="M23 8 L23 50 M41 14 L41 56" stroke="${Jt}" stroke-width="2.4"/>
    <path d="M10 22 C13 18 18 19 18 24 C18 28 12 29 10 26 Z" fill="#6fae3e" ${Z(2.2)}/>
    <path d="M13 46 C20 40 24 36 31 36 C38 36 40 30 46 24" fill="none" stroke="#c22a20" stroke-width="3.2" stroke-dasharray="4 4.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="${Jt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="#ff5a47" stroke-width="3.5" stroke-linecap="round"/>`,village:`
    <path d="M2 56 C10 40 54 40 62 56 L62 60 L2 60 Z" fill="url(#h-green)" ${Z()}/>
    <path d="M44 44 L44 34" stroke="${Jt}" stroke-width="7" stroke-linecap="round"/>
    <path d="M44 44 L44 34" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="44" cy="25" r="11" fill="url(#h-green)" ${Z()}/>
    <path d="M38 22 C39 18 42 16 45 16" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M10 26 L32 26 L32 46 L10 46 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M18 46 L18 37 C18 34 24 34 24 37 L24 46 Z" fill="url(#h-wood)" ${Z(2.6)}/>
    <path d="M4 30 L21 12 L38 30 L33 32 L21 20 L9 32 Z" fill="url(#h-roof)" ${Z()}/>`,book:`
    <path d="M16 10 L54 10 L54 58 L16 58 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M50 14 L50 54" stroke="#cbbb98" stroke-width="2"/><path d="M46 14 L46 54" stroke="#cbbb98" stroke-width="2"/>
    <path d="M10 6 L44 6 C46 6 47 7 47 9 L47 56 C47 58 46 59 44 59 L10 59 Z" fill="url(#h-leather)" ${Z()}/>
    <path d="M10 6 L18 6 L18 59 L10 59 Z" fill="#5a2610" ${Z(3)}/>
    <path d="M32 20 L39 31 L32 42 L25 31 Z" fill="url(#h-cry)" ${Z(2.8)}/>
    <path d="M30 24 L32 21 L32 30 L28 30 Z" fill="#fff" opacity=".7"/>
    <path d="M22 10 L42 10" stroke="#f5b97c" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`,hourglass:`
    <path d="M18 11 L46 11 C46 23 36 28 34 32 C36 36 46 41 46 53 L18 53 C18 41 28 36 30 32 C28 28 18 23 18 11 Z" fill="url(#h-glass)" ${Z()}/>
    <path d="M22 15 L42 15 C40 22 34 25 32 29 C30 25 24 22 22 15 Z" fill="url(#h-sand)"/>
    <path d="M21 50 C24 43 40 43 43 50 Z" fill="url(#h-sand)"/>
    <path d="M32 30 L32 46" stroke="#e7ae45" stroke-width="2"/>
    <path d="M24 14 C24 20 28 24 30 26" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>
    <rect x="10" y="4" width="44" height="8" rx="3" fill="url(#h-wood)" ${Z()}/>
    <rect x="10" y="52" width="44" height="8" rx="3" fill="url(#h-wood)" ${Z()}/>`,fast:`
    <path d="M6 14 L30 32 L6 50 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M30 14 L54 32 L30 50 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M10 21 L20 28 L10 31 Z" fill="#fff" opacity=".7"/><path d="M34 21 L44 28 L34 31 Z" fill="#fff" opacity=".7"/>
    <path d="M58 14 L58 50" stroke="${Jt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 14 L58 50" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>`,clock:`
    <circle cx="32" cy="34" r="24" fill="url(#h-white)" ${Z()}/>
    <path d="M32 20 L32 34 L42 40" fill="none" ${Z()}/>
    <rect x="26" y="4" width="12" height="7" rx="3" fill="url(#h-gold)" ${Z(2.5)}/>`,helmet:`
    <path d="M10 40 C10 22 20 12 32 12 C44 12 54 22 54 40 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M32 6 L32 13" stroke="${Jt}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 6 L32 13" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="6" y="38" width="52" height="9" rx="4.5" fill="url(#h-gold)" ${Z()}/>
    <rect x="28.5" y="45" width="7" height="14" rx="2.5" fill="url(#h-steel)" ${Z(3)}/>
    <path d="M18 34 C18 26 23 20 30 18" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".85"/>`,tent:`
    <path d="M6 56 L32 8 L58 56 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M32 8 L58 56 L40 56 Z" fill="#d8c7a2" opacity=".8"/>
    <path d="M24 56 L32 34 L40 56 Z" fill="#5a3418" ${Z(3)}/>
    <path d="M32 8 L32 2" stroke="${Jt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 2 L44 5 L32 9 Z" fill="url(#h-red)" ${Z(2.4)}/>`,flag:`
    <path d="M16 6 L16 60" stroke="${Jt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M16 6 L16 60" stroke="url(#h-wood-x)" stroke-width="4" stroke-linecap="round"/>
    <path d="M18 10 C30 4 38 16 54 10 L54 36 C38 42 30 30 18 36 Z" fill="url(#h-white)" ${Z()}/>
    <path d="M22 14 C28 11 32 13 36 15" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,mushroom:`
    <path d="M24 34 C24 44 22 52 20 58 L44 58 C42 52 40 44 40 34 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M26 40 C27 47 26 52 25 56" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M4 34 C4 16 18 6 32 6 C46 6 60 16 60 34 C60 38 56 40 52 40 L12 40 C8 40 4 38 4 34 Z" fill="url(#h-roof)" ${Z()}/>
    <circle cx="20" cy="22" r="5" fill="#fff4dc" ${Z(2.4)}/><circle cx="38" cy="15" r="4" fill="#fff4dc" ${Z(2.4)}/><circle cx="46" cy="29" r="4.5" fill="#fff4dc" ${Z(2.4)}/><circle cx="29" cy="32" r="3" fill="#fff4dc" ${Z(2.2)}/>
    <path d="M12 26 C14 18 20 13 27 11" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>`,rune:`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".55"/>
    <path d="M20 22 L32 16 L44 22 M32 16 L32 48 M22 44 L32 48 L42 44" fill="none" stroke="#6b7186" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 26 L38 33 L32 40 L26 33 Z" fill="url(#h-cry)" ${Z(2.6)}/>`,hammer:`
    <path d="M26 30 L46 58" stroke="${Jt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M26 30 L46 58" stroke="url(#h-wood-x)" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M8 26 L22 8 L32 14 L40 10 L50 18 L42 26 L34 24 L20 40 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M14 24 L23 13 L30 17 L22 22 Z" fill="#fff" opacity=".85"/>`,shield:`
    <path d="M32 5 L54 13 L54 30 C54 45 44 55 32 59 C20 55 10 45 10 30 L10 13 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M32 12 L47 17.5 L47 30 C47 40 41 47 32 51 Z" fill="#9aa2b8" opacity=".55"/>
    <path d="M17 18 L29 13.5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>`,lock:`
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="${Jt}" stroke-width="11"/>
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="url(#h-steel)" stroke-width="5"/>
    <rect x="12" y="26" width="40" height="32" rx="7" fill="url(#h-gold)" ${Z()}/>
    <circle cx="32" cy="40" r="4.5" fill="${Jt}"/><rect x="30" y="41" width="4" height="9" rx="2" fill="${Jt}"/>`,heart:`
    <path d="M32 56 C18 46 6 36 6 22 C6 13 13 7 21 7 C26 7 30 10 32 14 C34 10 38 7 43 7 C51 7 58 13 58 22 C58 36 46 46 32 56 Z" fill="url(#h-red)" ${Z()}/>
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${ds}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${Z()}/>
    <path d="M10 50 L56 50" stroke="${Jt}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${Z(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${Z()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${Z(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${Z(2.4)}/>
    <path d="M32 32 L58 6" stroke="${Jt}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${Jt}" stroke-width="3" stroke-linejoin="round"/>`,eye:`
    <path d="M3 33 C13 15 51 15 61 33 C51 51 13 51 3 33 Z" fill="url(#h-white)" ${Z()}/>
    <circle cx="32" cy="33" r="13" fill="url(#h-cry)" ${Z(3)}/>
    <circle cx="32" cy="33" r="5.5" fill="${Jt}"/>
    <circle cx="27.5" cy="28.5" r="3" fill="#fff"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${Z()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${Z()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${Z()}/>
    <circle cx="32" cy="18" r="4.5" fill="${Jt}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${Jt}"/>`,minus:`<path d="M16 32 L48 32" stroke="${Jt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,plus:`<path d="M16 32 L48 32 M32 16 L32 48" stroke="${Jt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32 M32 16 L32 48" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${Z()}/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${Z(3)}/>
    <path d="M32 7 C20 7 15 17 15 28 L15 37 L8 46 L56 46 L49 37 L49 28 C49 17 44 7 32 7 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M22 26 C22 19 26 14 31 13" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`,sound:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M42 22 C47 27 47 37 42 42" fill="none" stroke="${Jt}" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 15 C57 24 57 40 48 49" fill="none" stroke="${Jt}" stroke-width="5" stroke-linecap="round"/>`,mute:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M42 24 L56 40 M56 24 L42 40" fill="none" stroke="${Jt}" stroke-width="5.5" stroke-linecap="round"/>`,check:`<path d="M12 34 L26 48 L52 18" fill="none" stroke="${Jt}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 34 L26 48 L52 18" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>`,move:`
    <path d="M32 4 L42 16 L35 16 L35 29 L48 29 L48 22 L60 32 L48 42 L48 35 L35 35 L35 48 L42 48 L32 60 L22 48 L29 48 L29 35 L16 35 L16 42 L4 32 L16 22 L16 29 L29 29 L29 16 L22 16 Z" fill="url(#h-white)" ${Z()}/>`,barracks:`
    <path d="M10 30 L54 30 L54 58 L10 58 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M10 46 L54 46 L54 58 L10 58 Z" fill="#cfc6b6" ${Z(3)}/>
    <path d="M4 33 L32 8 L60 33 L53 36 L32 17 L11 36 Z" fill="url(#h-roof)" ${Z()}/>
    <path d="M24 58 L24 46 C24 40 40 40 40 46 L40 58 Z" fill="url(#h-wood)" ${Z(3)}/>
    <path d="M24 26 L40 26 L40 34 C40 39 36 42 32 43 C28 42 24 39 24 34 Z" fill="url(#h-red)" ${Z(2.6)}/>
    <path d="M27 28 L37 39 M37 28 L27 39" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,tower:`
    <path d="M20 34 L44 34 L47 61 L17 61 Z" fill="url(#h-white)" ${Z()}/>
    <path d="M19 44 L45 44 M18 53 L46 53 M28 34 L28 44 M38 44 L38 53 M27 53 L27 61" stroke="#a89f8c" stroke-width="2.2"/>
    <path d="M14 22 L50 22 L50 34 L14 34 Z" fill="url(#h-wood)" ${Z()}/>
    <path d="M20 22 L20 34 M27 22 L27 34 M37 22 L37 34 M44 22 L44 34" stroke="#7c4420" stroke-width="2.2"/>
    <path d="M30 44 L34 44 L34 52 L30 52 Z" fill="${Jt}"/>
    <path d="M9 24 L32 2 L55 24 Z" fill="url(#h-roof)" ${Z()}/>
    <path d="M17 21 L32 7 L29 21 Z" fill="#fff" opacity=".4"/>`,mortar:`
    <ellipse cx="32" cy="48" rx="26" ry="11" fill="url(#h-white)" ${Z()}/>
    <path d="M6 48 L6 53 C6 59 58 59 58 53 L58 48" fill="#b8ae99" ${Z()}/>
    <path d="M18 44 C16 30 22 18 34 12 L46 30 C40 36 34 42 30 48 Z" fill="#4a4f5e" ${Z()}/>
    <ellipse cx="40" cy="21" rx="8" ry="11" transform="rotate(-56 40 21)" fill="#2b2f3a" ${Z()}/>
    <path d="M22 40 C21 31 25 23 32 18" stroke="#9aa1b5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="40" r="5" fill="#3a3f4c" ${Z(2.4)}/>`,wall:`
    <path d="M4 30 C4 24 12 22 16 26 C20 21 28 21 32 26 C36 21 44 21 48 26 C52 22 60 24 60 30 L60 56 L4 56 Z" fill="url(#h-white)" ${Z()}/>
    <path d="M4 42 L60 42 M18 30 L18 42 M32 30 L32 42 M46 30 L46 42 M11 42 L11 56 M25 42 L25 56 M39 42 L39 56 M53 42 L53 56" stroke="#9b917c" stroke-width="2.4"/>
    <path d="M8 31 C10 27 14 27 15 29" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,chest:`
    <path d="M8 30 L56 30 L56 56 L8 56 Z" fill="url(#h-wood)" ${Z()}/>
    <path d="M8 30 C8 16 56 16 56 30 Z" fill="url(#h-wood)" ${Z()}/>
    <path d="M8 36 L56 36" stroke="${Jt}" stroke-width="3"/>
    <path d="M18 18 L18 56 M46 18 L46 56" stroke="${Jt}" stroke-width="7"/><path d="M18 19 L18 55 M46 19 L46 55" stroke="url(#h-gold)" stroke-width="3.6"/>
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${Z(2.4)}/>`,rotate:`
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="${Jt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 6 L60 10 L54 30 Z" fill="url(#h-gold)" ${Z(2.6)}/>`,replay:`
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="${Jt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 10 L16 30 L22 12 Z" fill="url(#h-white)" ${Z(2.6)}/>
    <path d="M26 22 L44 32 L26 42 Z" fill="url(#h-gold)" ${Z(2.6)}/>`,alert:`
    <path d="M32 5 L60 54 C61 57 59 59 56 59 L8 59 C5 59 3 57 4 54 Z" fill="url(#h-red)" ${Z()}/>
    <rect x="28.5" y="20" width="7" height="22" rx="3" fill="#fff" ${Z(2)}/>
    <circle cx="32" cy="50" r="4" fill="#fff" ${Z(2)}/>`,star:`<path d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M32 13 L37 25 L28 26 Z" fill="#fff" opacity=".7"/>`,gate:`
    <rect x="4" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${Z()}/><rect x="46" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${Z()}/>
    <path d="M18 58 L18 34 C18 22 46 22 46 34 L46 58 Z" fill="url(#h-wood)" ${Z()}/>
    <path d="M32 26 L32 58" stroke="${Jt}" stroke-width="3"/>
    <path d="M18 40 L46 40" stroke="url(#h-gold)" stroke-width="3.5"/>`,close:`<path d="M18 18 L46 46 M46 18 L18 46" stroke="${Jt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},ct=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,K0=!1;function _l(){if(K0){document.querySelectorAll("img[data-art]").forEach(e=>{e.src=bs[e.dataset.art],e.alt="",e.draggable=!1});return}K0=!0;let i=document.createElement("style");i.textContent=`@font-face{font-family:"Lilita";src:url(${J0}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${z0}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(i);let t=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${Xy}</defs>`;for(let[e,n]of Object.entries(Jy))t+=`<symbol id="i-${e}" viewBox="0 0 64 64" overflow="visible">${n}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${t}</svg>`),document.querySelectorAll("img[data-art]").forEach(e=>{e.src=bs[e.dataset.art],e.alt="",e.draggable=!1})}var ys=(i,t,e,n,o="")=>`<div class="ctr ${i}">${o?`<span class="max n">${o}</span>`:""}<span class="track"><i style="width:${n}%"></i></span><span class="v n">${e}</span>${ct(t)}</div>`,xE=`<button class="x"><span class="face">${ct("close")}</span></button>`,OE=`<div class="hud">
  <div class="tl">${ys("cry","crystal","1 240",83,"Max 1 500")}${ys("mush","mushroom","860",57,"Max 1 500")}${ys("rune","rune","3",0)}</div>
  <div class="tc">${ys("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${ct("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${ct("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${ct("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${ct("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${ct("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${ct("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${ct("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;function $l(i){i.querySelectorAll("img[data-art]").forEach(t=>{let e=bs[t.dataset.art];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var jt=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Io=i=>(i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`);var eh="./assets/ui_tap-KWIPUKCV.mp3";var nh="./assets/ui_open-YSL7SZAG.mp3";var oh="./assets/ui_close-EFYUEE7E.mp3";var ih="./assets/ui_error-ZUUDUV6B.mp3";var rh="./assets/ui_coins-UQFARDBX.mp3";var ah="./assets/build_place-AJNKOBOM.mp3";var ph="./assets/build_lift-ROHD6QPX.mp3";var sh="./assets/build_hammer-ETQSYE7E.mp3";var uh="./assets/build_done-LHFJ763M.mp3";var fh="./assets/collect_crystal-EH5LY25Y.mp3";var lh="./assets/collect_mushroom-P4PKF7JT.mp3";var ch="./assets/alert_attack-4JCOXVK2.mp3";var hh="./assets/raid_start-GQO57AU3.mp3";var dh="./assets/troop_drop-TXHYCU7M.mp3";var bh="./assets/battle_cry-MHWM65EL.mp3";var yh="./assets/sword_hit-C3I5IP4X.mp3";var mh="./assets/bow_shot-DU3Q5ME7.mp3";var gh="./assets/arrow_hit-GU5F3AZO.mp3";var Th="./assets/mortar_fire-55PCFJWD.mp3";var Eh="./assets/mortar_impact-FFLUEV66.mp3";var Vh="./assets/building_hit-SVLVCHM7.mp3";var Sh="./assets/building_fall-HN64CLQT.mp3";var wh="./assets/unit_death-VKWG44ZQ.mp3";var Ph="./assets/loot-4CMJPKD5.mp3";var Lh="./assets/map_clouds-JUUCDZDP.mp3";var Uh="./assets/amb_village-VUB2HF6J.mp3";var Ch="./assets/music_village-OMKKDIQC.mp3";var xh="./assets/music_raid-VAZ2GGVK.mp3";var Oh="./assets/music_win-LAC54U6M.mp3";var vh="./assets/music_lose-RWDS7XZ3.mp3";var V3={ui_tap:eh,ui_open:nh,ui_close:oh,ui_error:ih,ui_coins:rh,build_place:ah,build_lift:ph,build_hammer:sh,build_done:uh,collect_crystal:fh,collect_mushroom:lh,alert_attack:ch,raid_start:hh,troop_drop:dh,battle_cry:bh,sword_hit:yh,bow_shot:mh,arrow_hit:gh,mortar_fire:Th,mortar_impact:Eh,building_hit:Vh,building_fall:Sh,unit_death:wh,loot:Ph,map_clouds:Lh,amb_village:Uh,music_village:Ch,music_raid:xh,music_win:Oh,music_lose:vh},S3={ui_tap:.45,ui_open:.45,ui_close:.4,ui_error:.55,ui_coins:.6,build_place:.8,build_lift:.5,build_hammer:.6,build_done:.7,collect_crystal:.6,collect_mushroom:.6,alert_attack:.85,raid_start:.85,troop_drop:.5,battle_cry:.6,sword_hit:.5,bow_shot:.45,arrow_hit:.45,mortar_fire:.7,mortar_impact:.75,building_hit:.6,building_fall:.8,unit_death:.55,loot:.7,map_clouds:.6},w3=.9,P3=new Set(["troop_drop","battle_cry","sword_hit","bow_shot","arrow_hit","mortar_fire","mortar_impact","building_hit","unit_death","build_hammer","collect_crystal","collect_mushroom"]),L3=.06,U3=100,C3=4,x3=24,O3=250,Rh=1.2,Dh=1.5,Mh=.25,v3={sfx:1,music:.55,ambience:.6},kl={sfx:"shardholm.mute.sfx",music:"shardholm.mute.music"},Hl={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}};function R3(i,t){return new Promise((e,n)=>{try{let o=i.decodeAudioData(t,e,n);o&&typeof o.then=="function"&&o.then(e,n)}catch(o){n(o)}})}var D3={music_village:2822621/44100,music_raid:2419326/44100,amb_village:1014311/44100},M3=1105/44100;function A3(i,t){let e=D3[i];if(!e||e>t.duration+.004)return[0,t.duration];if(Math.abs(t.duration-e)<.004)return[0,t.duration];let n=Math.min(M3,t.duration-e);return[n,n+e]}function Bl(i,t,e,n){i.cancelScheduledValues(e),i.setValueAtTime(i.value,e),i.linearRampToValueAtTime(t,e+n)}var Fl=class{constructor(){S(this,"g",null);S(this,"dead",!1);S(this,"primed",!1);S(this,"hidden",!1);S(this,"mutes",null);S(this,"vol",{...v3});S(this,"buffers",new Map);S(this,"ready",new Map);S(this,"recent",new Map);S(this,"voices",0);S(this,"wantMusic",null);S(this,"track",null);S(this,"wantAmb",!1);S(this,"amb",null)}unlock(){let t=this.graph();if(t)try{if(t.ctx.state!=="running"&&!this.hidden&&t.ctx.resume().catch(()=>{}),!this.primed){this.primed=!0;let e=t.ctx.createBufferSource();e.buffer=t.ctx.createBuffer(1,1,22050),e.connect(t.ctx.destination),e.start(0)}}catch{}}play(t,e={}){try{let n=this.graph();if(!n||this.m().sfx||n.ctx.state!=="running")return;let o=performance.now();if(!this.allow(t,o))return;let r=this.ready.get(t);if(r){this.start(n,r,t,e);return}this.load(t).then(a=>{a&&performance.now()-o<O3&&this.start(n,a,t,e)})}catch{}}music(t){try{this.wantMusic=t;let e=this.graph();if(!e)return;if(!t||this.m().music){this.stopTrack(e);return}if(this.track?.name===t)return;this.withBuffer(t,n=>{this.wantMusic!==t||this.m().music||this.track?.name===t||(this.stopTrack(e),this.track=this.loop(e,t,n,e.loops,Rh))})}catch{}}ambience(t){try{this.wantAmb=t;let e=this.graph();if(!e)return;if(!t||this.m().sfx){this.amb&&(this.fadeOut(e,this.amb,Dh),this.amb=null);return}if(this.amb)return;this.withBuffer("amb_village",n=>{!this.wantAmb||this.amb||this.m().sfx||(this.amb=this.loop(e,"amb_village",n,e.bus.ambience,Dh))})}catch{}}jingle(t){try{let e=this.graph();if(!e||this.m().music||e.ctx.state!=="running")return;this.withBuffer(t,n=>{let{ctx:o}=e,r=o.currentTime,a=r+n.duration,p=o.createBufferSource();p.buffer=n;let s=o.createGain();s.gain.value=w3,p.connect(s).connect(e.bus.music),p.onended=()=>{try{p.disconnect(),s.disconnect()}catch{}};let u=e.loops.gain;Bl(u,Mh,r,.2),u.setValueAtTime(Mh,Math.max(r+.2,a-.2)),u.linearRampToValueAtTime(1,a+1.2),p.start(r)})}catch{}}setMuted(t,e){try{this.m()[t]=e,Hl.set(kl[t],e?"1":"0");let n=this.g;if(!n)return;this.applyBus(n),t==="music"?this.music(this.wantMusic):this.ambience(this.wantAmb)}catch{}}muted(t){return this.m()[t]}setVolume(t,e){this.vol[t]=Math.min(1,Math.max(0,Number.isFinite(e)?e:0));try{this.g&&this.applyBus(this.g)}catch{}}volume(t){return this.vol[t]}preload(t){return Promise.all(t.map(e=>this.load(e))).then(()=>{},()=>{})}m(){return this.mutes||(this.mutes={sfx:Hl.get(kl.sfx)==="1",music:Hl.get(kl.music)==="1"}),this.mutes}graph(){if(this.g||this.dead)return this.g;try{let t=typeof AudioContext<"u"?AudioContext:globalThis.webkitAudioContext;if(!t)return this.dead=!0,null;let e=new t,n=r=>{let a=e.createGain();return a.connect(r),a},o={sfx:n(e.destination),music:n(e.destination),ambience:n(e.destination)};this.g={ctx:e,bus:o,loops:n(o.music)},this.applyBus(this.g,0),typeof document<"u"&&document.addEventListener("visibilitychange",()=>this.onVisibility())}catch{this.dead=!0,this.g=null}return this.g}applyBus(t,e=.08){let n=this.m(),o=t.ctx.currentTime,r={sfx:n.sfx?0:this.vol.sfx,ambience:n.sfx?0:this.vol.ambience,music:n.music?0:this.vol.music};for(let a of["sfx","music","ambience"])e>0?Bl(t.bus[a].gain,r[a],o,e):t.bus[a].gain.value=r[a]}onVisibility(){try{let t=this.g;if(!t)return;document.hidden?t.ctx.state==="running"&&(this.hidden=!0,t.ctx.suspend().catch(()=>{})):this.hidden&&(this.hidden=!1,t.ctx.resume().catch(()=>{}))}catch{}}load(t){let e=this.buffers.get(t);if(e)return e;let n=this.graph();if(!n)return Promise.resolve(null);try{e=fetch(V3[t]).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(`${t}: HTTP ${o.status}`))).then(o=>R3(n.ctx,o)).then(o=>(this.ready.set(t,o),o),()=>null)}catch{e=Promise.resolve(null)}return this.buffers.set(t,e),e}withBuffer(t,e){let n=this.ready.get(t);if(n){e(n);return}this.load(t).then(o=>{if(o)try{e(o)}catch{}})}allow(t,e){let n=(this.recent.get(t)??[]).filter(r=>e-r<U3),o=n.length<C3;return o&&n.push(e),this.recent.set(t,n),o}start(t,e,n,o){try{if(this.voices>=x3)return;let{ctx:r}=t,a=r.createBufferSource();a.buffer=e;let p=o.rate??(P3.has(n)?1+(Math.random()*2-1)*L3:1);a.playbackRate.value=Math.min(4,Math.max(.25,p));let s=r.createGain();s.gain.value=Math.max(0,(o.vol??1)*S3[n]),a.connect(s);let u=s;if(o.pan&&typeof r.createStereoPanner=="function"){let f=r.createStereoPanner();f.pan.value=Math.min(1,Math.max(-1,o.pan)),s.connect(f),u=f}u.connect(t.bus.sfx),a.onended=()=>{this.voices--;try{a.disconnect(),s.disconnect(),u.disconnect()}catch{}},a.start(),this.voices++}catch{}}loop(t,e,n,o,r){let{ctx:a}=t,p=a.currentTime,s=a.createBufferSource();s.buffer=n,s.loop=!0;let[u,f]=A3(e,n);s.loopStart=u,s.loopEnd=f;let l=a.createGain();return l.gain.setValueAtTime(0,p),l.gain.linearRampToValueAtTime(1,p+r),s.connect(l).connect(o),s.start(p,u),{name:e,src:s,gain:l}}stopTrack(t){this.track&&(this.fadeOut(t,this.track,Rh),this.track=null)}fadeOut(t,e,n){try{let o=t.ctx.currentTime;Bl(e.gain.gain,0,o,n),e.src.onended=()=>{try{e.src.disconnect(),e.gain.disconnect()}catch{}},e.src.stop(o+n+.05)}catch{}}},oi=new Fl;var Ah=`/* L'\xC9clat in direction D \xAB Banni\xE8res \xBB (chosen by Benoit on 06/11 among the four of design/ui/eclat/): the mode's own
   theme, read by its page (client/main.ts) and by its boards (design/ui/eclat/boards.py). Flat and graphic, like a
   match broadcast: solid slate plates without bevel or gradient, square corners, headers as pennants with a notched
   end, the two sides' colours as big solid fields (blue for me, red for the other), yellow for the main action with a
   hard shadow under it. Bungee for titles and numbers, Rubik for the rest. The game's icons stay (ui/hud.ts), turned
   white where they only decorate (the heart and the coin keep their colours).
   This file holds the tokens and the components; client/style.css places them on the screen. Sizes are iPhone points. */

/* ================= the tokens ================= */
body {
  /* the plates: flat slate, opaque; the rows inside them a step lighter */
  --slate: #1a2130; --slate2: #252e40; --slate3: #34405a; --steel: #3a465e; --deep: #0d121c;
  /* the writing */
  --ink: #ffffff; --mute: #9aa6bb; --dark: #14181f;
  /* the two sides of a duel, and the main action */
  --me: #3f8cff; --me-sh: #1f4f9e; --op: #ff4757; --op-soft: #ff8a94; --yel: #ffd23f; --yel-sh: #a8820a;
  /* the rarities: common, rare, epic, legendary */
  --r1: #8b95a8; --r2: #3f8cff; --r3: #a35cff; --r4: #ffb200;
  /* the hard shadows: under a plate, under what you press */
  --plate-sh: 0 4px 0 rgba(0, 0, 0, .35); --key-sh: 0 3px 0 var(--deep);
  --title: 'Bungee', 'Rubik', system-ui, sans-serif;
  --text: 'Rubik', system-ui, sans-serif;
  /* the screen's safe margins (a phone held sideways: the notch and the home bar) */
  --l: max(16px, env(safe-area-inset-left, 0px)); --r: max(16px, env(safe-area-inset-right, 0px));
  --t: max(6px, env(safe-area-inset-top, 0px)); --b: max(10px, env(safe-area-inset-bottom, 0px));
}

/* ================= the page ================= */
html, body { height: 100%; margin: 0; overflow: hidden; }
body { position: relative; color: var(--ink); font-family: var(--text); font-weight: 700; font-synthesis: none;
  -webkit-font-smoothing: antialiased; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
/* the resets weigh nothing (:where), so that every component's own rules win */
:where(.ab, #out) *, :where(.ab, #out) *::before, :where(.ab, #out) *::after, #toast { box-sizing: border-box; }
:where(.ab, #out) :where(button) { font: inherit; color: inherit; border: 0; border-radius: 0; background: none; padding: 0; margin: 0; cursor: pointer; text-align: inherit; }
:where(.ab, #out) :where(button):focus-visible { outline: 3px solid var(--yel); outline-offset: 2px; }
[hidden] { display: none !important; }
:where(.ab, #out) :where(img) { display: block; -webkit-user-drag: none; }
:where(.ab, #out) :where(p, h1) { margin: 0; }
.ic { width: 1em; height: 1em; flex: none; overflow: visible; }
/* a decorative icon in white, or in black on the yellow (the heart and the coin are never turned) */
.ic.w { filter: brightness(0) invert(1); }
.ic.k { filter: brightness(0); }
.num { font-family: var(--title); font-weight: 400; }
.mute { color: var(--mute); }

/* ================= the plate and the pennant ================= */
.plate, .panel, .win { background: var(--slate); box-shadow: var(--plate-sh); }
.panel { padding: 8px; display: flex; flex-direction: column; }
/* a plate's header: the pennant on the left (a solid colour, its end notched), what it counts on the right */
.ph { display: flex; justify-content: space-between; align-items: center; flex: none; height: 30px; margin: -8px -8px 0; padding: 0 10px 0 0; }
.fan, .ph .t { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 22px 0 10px; background: var(--me); color: #fff;
  font-family: var(--title); font-weight: 400; font-size: 14px; line-height: 1; white-space: nowrap;
  clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%); }
.fan.steel, .ph .t.steel { background: var(--steel); }
.fan.red, .ph .t.red { background: var(--op); }
.fan.yel, .ph .t.yel { background: var(--yel); color: var(--dark); }
.fan .ic, .ph .t .ic { width: 16px; height: 16px; filter: brightness(0) invert(1); }
.ph .cap { display: flex; align-items: center; gap: 3px; font-size: 12px; color: var(--mute); }
.ph .cap .ic { width: 14px; height: 14px; filter: brightness(0) invert(1); }
.ph .cap b { color: #fff; font-family: var(--title); font-weight: 400; font-size: 13px; }
.ph .cap.full b { color: var(--yel); }
/* a window's title: a banner notched at both ends, over its top edge */
.wt { position: absolute; top: -16px; left: 50%; transform: translateX(-50%); z-index: 3; padding: 6px 34px; background: var(--op); color: #fff;
  font-family: var(--title); font-weight: 400; font-size: 22px; line-height: 1.15; white-space: nowrap;
  clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%); }
.wt.me { background: var(--me); } .wt.steel { background: var(--steel); } .wt.yel { background: var(--yel); color: var(--dark); }

/* ================= the buttons ================= */
/* the main action: solid yellow, its hard shadow under it */
.go { display: flex; align-items: center; justify-content: center; gap: 8px; height: 52px; padding: 0 18px; background: var(--yel); color: var(--dark);
  box-shadow: 0 5px 0 var(--yel-sh); font-family: var(--title); font-weight: 400; font-size: 24px; line-height: 1; white-space: nowrap; }
.go .ic { width: 24px; height: 24px; filter: brightness(0); }
.go:active { transform: translateY(3px); box-shadow: 0 2px 0 var(--yel-sh); }
.go.small { height: 40px; padding: 0 24px; font-size: 17px; box-shadow: 0 4px 0 var(--yel-sh); }
.go.small .ic { width: 18px; height: 18px; }
.go.small:active { box-shadow: 0 1px 0 var(--yel-sh); }
/* the secondary one: steel, capitals; .big for a screen's second choice, .blue for a second choice of my side */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 24px; padding: 0 12px; background: var(--steel); color: #fff;
  box-shadow: var(--key-sh); font-family: var(--text); font-weight: 700; font-size: 11px; line-height: 1; text-transform: uppercase; letter-spacing: .02em; white-space: nowrap; }
.btn .ic { width: 14px; height: 14px; filter: brightness(0) invert(1); }
.btn:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--deep); }
.btn.big { height: 44px; padding: 0 18px; font-size: 14px; box-shadow: 0 4px 0 var(--deep); }
.btn.big .ic { width: 18px; height: 18px; }
.btn.mid { height: 34px; padding: 0 14px; font-size: 12px; }
.btn.blue { background: var(--me); box-shadow: 0 3px 0 var(--me-sh); }
.btn.big.blue { box-shadow: 0 4px 0 var(--me-sh); }
.btn.red { background: var(--op); box-shadow: 0 3px 0 #9e2632; }
.btn.big.red { box-shadow: 0 4px 0 #9e2632; }
.btn.red:active { box-shadow: 0 1px 0 #9e2632; }
.btn.blue:active { box-shadow: 0 1px 0 var(--me-sh); }
/* the square \u2212 and + of a count (+ in my blue) */
.sq { width: 23px; height: 23px; display: grid; place-items: center; flex: none; background: var(--steel); box-shadow: 0 2px 0 var(--deep); }
.sq .ic { width: 12px; height: 12px; filter: brightness(0) invert(1); }
.sq.plus { background: var(--me); }
.sq:active { transform: translateY(2px); box-shadow: none; }
/* a press that cannot be done stays touchable (it says why), only faded */
.off { opacity: .4; }
.go.off { opacity: 1; background: var(--steel); color: var(--mute); box-shadow: 0 5px 0 var(--deep); }
.go.off .ic { filter: brightness(0) invert(.65); }
/* the way back, at the top left of the screens out of the game */
.back { display: inline-flex; align-items: center; gap: 8px; height: 32px; padding: 0 12px 0 0; background: var(--steel); box-shadow: var(--key-sh);
  font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .02em; }
.back .bk { width: 32px; height: 32px; display: grid; place-items: center; background: var(--slate3); }
.back .ic { width: 16px; height: 16px; transform: scaleX(-1); filter: brightness(0) invert(1); }

/* ================= the bar, the counters, the tags ================= */
.bar { position: relative; display: block; overflow: hidden; background: var(--deep); }
.bar > i { position: absolute; left: 0; top: 0; bottom: 0; background: var(--me); }
.bar.red > i { background: var(--op); } .bar.white > i { background: #fff; }
.bar.rtl > i { left: auto; right: 0; }
/* a bonus: the stat's icon (white) and its value, on a lighter slate */
.chip { display: inline-flex; align-items: center; gap: 2px; padding: 2px 4px 2px 2px; background: var(--slate3); color: #fff; font-size: 9.5px; font-weight: 600; line-height: 1; white-space: nowrap; }
.chip .ic { width: 11px; height: 11px; filter: brightness(0) invert(1); }
.trow .chips .chip { padding-top: 1px; padding-bottom: 1px; }
.chips .more { flex: none; padding: 2px 3px; background: var(--slate); font-family: var(--title); font-weight: 400; font-size: 9px; line-height: 1; color: var(--mute); white-space: nowrap; }
.trow .chips .chip { flex: 0 1 auto; min-width: 0; overflow: hidden; gap: 1px; padding: 1px 3px 1px 1px; font-size: 9px; }
.trow .chips .chip .ic { width: 10px; height: 10px; }
/* a price: the coin and the number in yellow */
.price { display: inline-flex; align-items: center; gap: 2px; color: var(--yel); font-family: var(--title); font-weight: 400; font-size: 11px; line-height: 1; }
.price .ic { width: 12px; height: 12px; }
/* a small label set on a row (\xAB toi \xBB, \xAB cr\xE9ateur \xBB) */
.tag { display: inline-flex; align-items: center; height: 15px; padding: 0 5px; background: var(--yel); color: var(--dark); font-family: var(--title); font-weight: 400; font-size: 9px; line-height: 1; letter-spacing: .02em; flex: none; }
.tag.blue { background: var(--me); color: #fff; } .tag.white { background: #fff; color: var(--me); } .tag.steel { background: var(--steel); color: #fff; }

/* ================= the cards ================= */
/* a shop offer: the rarity's band at the top, the troop, the bonus, the price */
.card { --rc: var(--r1); position: relative; display: flex; flex-direction: column; align-items: center; flex: 1; min-width: 0;
  background: var(--slate2); box-shadow: var(--key-sh); border-top: 5px solid var(--rc); }
.card.r2 { --rc: var(--r2); } .card.r3 { --rc: var(--r3); } .card.r4 { --rc: var(--r4); }
.card .cp { width: 100%; height: 40px; object-fit: cover; object-position: center 20%; background: var(--slate3); }
.card .bonus { display: flex; align-items: center; gap: 1px; margin-top: 4px; font-family: var(--title); font-weight: 400; font-size: 10.5px; line-height: 1; white-space: nowrap; }
.card .bonus .ic { width: 12px; height: 12px; filter: brightness(0) invert(1); }
.card .price { margin-top: 4px; }
.card:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--deep); }
.card.poor .cp { filter: grayscale(1) brightness(.75); } .card.poor .price { color: var(--op-soft); }
/* a slot already bought: empty until the next round */
/* a bought offer leaves its slot: a dashed outline on the plate, not a dark hole */
.card.sold { background: transparent; box-shadow: none; border: 2px dashed rgba(154, 166, 187, .35); border-top: 2px dashed rgba(154, 166, 187, .35); }
/* a shop offer as a line (06/11, direction B \xAB Avant \u2192 apr\xE8s \xBB, design/ui/eclat/retours-boutique.html): its rarity's
   band on the left, the troop with the price on it, the stat in full, then my troop's value now \u2192 after the purchase */
.ot { --rc: var(--r1); container: offer / inline-size; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; min-width: 0; background: var(--slate2);
  box-shadow: inset 4px 0 0 var(--rc), var(--key-sh); text-align: left; }
.ot.r2 { --rc: var(--r2); } .ot.r3 { --rc: var(--r3); } .ot.r4 { --rc: var(--r4); }
.ot:active { transform: translateY(2px); box-shadow: inset 4px 0 0 var(--rc), 0 1px 0 var(--deep); }
.opw { position: relative; align-self: stretch; margin: 0 5px 0 4px; width: 32px; background: var(--slate3); }
.ot .op { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
.opw .price { position: absolute; left: 0; bottom: 0; padding: 2px 3px 1px 2px; background: var(--dark); font-size: 10px; }
.opw .price .ic { width: 10px; height: 10px; }
.ott { display: flex; flex-direction: column; gap: 3px; min-width: 0; padding-right: 5px; }
.otn { display: flex; align-items: center; gap: 3px; min-width: 0; line-height: 1; white-space: nowrap; }
.otn b { font-weight: 600; font-size: 10.5px; overflow: hidden; text-overflow: ellipsis; }
.otv { display: flex; align-items: baseline; gap: 3px; line-height: 1; white-space: nowrap; }
.otv .b { font-family: var(--title); font-weight: 400; font-size: 10px; color: var(--mute); } .otv .ar { font-size: 10px; color: var(--mute); }
.otv b { font-family: var(--title); font-weight: 400; font-size: 13px; color: #fff; }
.otv em { font-style: normal; font-size: 8.5px; font-weight: 600; color: var(--mute); }
/* two values of four characters and \xAB coup/s \xBB, in the board's sizes: a little smaller (the narrow line below holds
   them) */
@container offer (min-width: 136px) {
  .ot.long .otv { gap: 2px; } .ot.long .otv .b, .ot.long .otv .ar { font-size: 9px; } .ot.long .otv b { font-size: 12px; } .ot.long .otv em { font-size: 8px; }
}
.ot.poor .op { filter: grayscale(1) brightness(.75); } .ot.poor .price { color: var(--op-soft); }
.ot.sold { background: transparent; box-shadow: none; border: 2px dashed rgba(154, 166, 187, .35); }
/* a narrow line (a shop under 430 wide: 667 and 812 wide screens): a narrower portrait, the stat's name on two lines
   when it must, smaller numbers */
@container offer (max-width: 135px) {
  .opw { width: 24px; margin-right: 4px; }
  .opw .price { padding: 1px 2px 1px 1px; font-size: 9px; } .opw .price .ic { width: 9px; height: 9px; }
  .ott { gap: 2px; padding-right: 3px; }
  .otn { white-space: normal; } .otn b { font-size: 9.5px; line-height: 1.05; overflow: visible; }
  .otv { gap: 2px; } .otv .b { font-size: 8.5px; } .otv .ar { font-size: 8px; } .otv b { font-size: 11px; } .otv em { margin-left: -1px; font-size: 7px; }
}
/* a card of the battle's deck: the troop, how many are left; the one picked raised and ringed in yellow */
.foedeck .fk { flex-basis: 100%; padding: 0 1px; text-align: right; text-shadow: 0 1px 2px #000, 0 0 6px rgba(0, 0, 0, .6); font-size: 9.5px; font-weight: 700; color: var(--op-soft); text-transform: uppercase; letter-spacing: .06em; }
.foedeck.all .fk { color: var(--mute); }
.fcard { position: relative; display: block; width: 34px; height: 40px; background: var(--slate2); box-shadow: 0 0 0 2px var(--op), var(--plate-sh); }
.fcard img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; background: var(--slate3); }
.fcard i { position: absolute; left: 0; bottom: 0; padding: 0 3px; background: var(--dark); font-style: normal; font-family: var(--title); font-weight: 400; font-size: 11px; line-height: 1.2; }
.fcard.empty { box-shadow: 0 0 0 2px var(--steel), var(--plate-sh); } .fcard.empty img { filter: grayscale(1) brightness(.55); } .fcard.empty i { color: var(--mute); }
.dcard { position: relative; display: block; flex: none; width: 54px; height: 64px; background: var(--slate2); box-shadow: var(--key-sh); }
.dcard .dp { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; background: var(--slate3); }
.dcard i { position: absolute; left: 0; top: 0; z-index: 2; padding: 1px 4px; background: var(--dark); font-style: normal; font-family: var(--title); font-weight: 400; font-size: 13px; line-height: 1.15; }
.dcard.sel { transform: translateY(-8px); box-shadow: var(--key-sh), 0 0 0 3px var(--yel); }
.dcard.empty .dp { filter: grayscale(1) brightness(.6); }
/* a small troop of an army (the next opponent's, a face in a list) */
.mini { position: relative; width: 26px; height: 26px; flex: none; }
.mini img { width: 100%; height: 100%; object-fit: cover; background: var(--slate2); }
.mini i { position: absolute; right: -3px; bottom: -4px; font-style: normal; font-family: var(--title); font-weight: 400; font-size: 10px; color: #fff; text-shadow: 0 0 2px #000, 0 1px 0 #000; }
.face { display: block; flex: none; width: 26px; height: 26px; overflow: hidden; background: var(--slate3); }
.face img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
.face .ic { width: 100%; height: 100%; padding: 4px; filter: brightness(0) invert(1); opacity: .6; }

/* ================= the rows ================= */
/* a troop of my army: portrait, count and places, two bonuses, \u2212 and + */
.trow { display: grid; grid-template-columns: 38px 26px minmax(0, 1fr) 50px; align-items: center; gap: 5px; height: 40px; padding: 0 4px 0 2px; background: var(--slate2); }
.trow .pt { width: 38px; height: 38px; object-fit: cover; background: var(--slate3); }
.tn { display: flex; flex-direction: column; line-height: 1; }
.tn b { font-family: var(--title); font-weight: 400; font-size: 16px; } .tn small { margin-top: 2px; font-size: 9px; font-weight: 500; color: var(--mute); }
.chips { display: flex; flex-direction: row; flex-wrap: nowrap; gap: 3px; align-items: center; min-width: 0; overflow: hidden; }
.pm { display: flex; gap: 4px; }
/* a type out of the army that no longer fits: faded, like the barracks' tiles that cannot be trained */
.trow.nofit .pt, .trow.nofit .tn { opacity: .45; }
/* a player: the name, the life in a bar; me in blue, the next opponent in red */
.prow { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 4px; width: 100%; height: 25px; padding: 0 6px; background: var(--slate2); font-size: 12px; font-weight: 600; text-align: left; }
.prow .nm { display: flex; align-items: center; gap: 3px; min-width: 0; }
.prow .nm .ic { width: 13px; height: 13px; filter: brightness(0) invert(1); }
.prow .nm span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.php { display: flex; align-items: center; position: relative; }
.php .ic { width: 15px; height: 15px; position: relative; z-index: 2; }
.php .bar { width: 52px; height: 9px; margin-left: -4px; }
.php .bar > i { background: var(--op); }
.php b { min-width: 16px; margin-left: 4px; text-align: right; font-family: var(--title); font-weight: 400; font-size: 10px; }
.prow.me { background: var(--me); } .prow.opp { background: var(--op); }
.prow.me .php .bar > i, .prow.opp .php .bar > i { background: #fff; }
.prow.me .php .ic, .prow.opp .php .ic { filter: brightness(0) invert(1); }
.prow.low .php b { color: var(--op); }
.prow.out { opacity: .5; }
.prow .place { font-family: var(--title); font-weight: 400; font-size: 11px; color: var(--mute); }
/* another duel of the round: the two names, the life the loser lost */
.oline { display: grid; grid-template-columns: 16px minmax(0, 1fr) auto; align-items: center; gap: 8px; height: 26px; padding: 0 10px; background: var(--slate2); font-size: 12px; font-weight: 600; }
.oline .ic { width: 14px; height: 14px; }
.oline > .ic { filter: brightness(0) invert(1); }
.oline .pair { color: var(--mute); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .oline .pair b { color: #fff; }
.loss { display: flex; align-items: center; gap: 3px; color: var(--op-soft); font-family: var(--title); font-weight: 400; font-size: 11px; white-space: nowrap; }
.loss .ic { width: 12px; height: 12px; }
.loss.none { color: var(--mute); }
/* a seat of the waiting room: its number, the player (or the bot that will take it), its tags */
.seat { display: grid; grid-template-columns: 18px minmax(0, 1fr) auto; align-items: center; gap: 8px; height: 26px; padding: 0 8px; background: var(--slate2); font-size: 13px; font-weight: 600; }
.seat .sn { font-family: var(--title); font-weight: 400; font-size: 11px; color: var(--mute); text-align: center; }
.seat .li { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.seat .tags { display: flex; gap: 4px; align-items: center; }
.seat.me { background: var(--me); } .seat.me .sn { color: #fff; }
.seat.free { background: rgba(37, 46, 64, .45); color: var(--mute); font-weight: 500; }
.seat.away .li { color: var(--mute); }
/* a stat on a line (life, places, round): the icon and its value */
.stl { display: flex; align-items: center; gap: 6px; font-family: var(--title); font-weight: 400; font-size: 14px; }
.stl .ic { width: 18px; height: 18px; }
.stl .ic.w { filter: brightness(0) invert(1); }
.stl small { font-family: var(--text); font-weight: 600; font-size: 11px; color: var(--mute); }

/* ================= a troop's sheet ================= */
/* (06/11, direction B \xAB \xC0 c\xF4t\xE9 de l'arm\xE9e \xBB, design/ui/eclat/retours-fiche.html) the role, a line per stat (its icon, its
   name, the purchases made on it, base \u2192 with the bonuses), the rules, the troops it fears and beats */
.ic.up { transform: rotate(-90deg); }
.tf-role { font-size: 12px; font-weight: 500; line-height: 1.35; color: #fff; }
.tf-k { margin: 8px 0 4px; font-size: 9.5px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .08em; }
.none { font-size: 11px; font-weight: 500; color: var(--mute); line-height: 1.3; }
/* a purchase: its bonus, its rarity's name, its rarity's colour on the left */
.buy { --rc: var(--r1); display: inline-flex; align-items: center; gap: 4px; height: 20px; padding: 0 6px 0 8px; background: var(--slate2); box-shadow: inset 4px 0 0 var(--rc); }
.buy.r2 { --rc: var(--r2); } .buy.r3 { --rc: var(--r3); } .buy.r4 { --rc: var(--r4); }
.buy b { font-family: var(--title); font-weight: 400; font-size: 10px; } .buy small { font-size: 9.5px; font-weight: 600; color: var(--mute); }
.tfb-sells { display: flex; align-items: center; gap: 4px; margin: 6px 0 0; min-width: 0; }
.tfb-sells .tf-k { flex: none; margin: 0 4px 0 2px; }
/* one line whatever was bought: it slides sideways, its end fading */
.sline { display: flex; gap: 4px; min-width: 0; padding-bottom: 2px; overflow: auto hidden; scrollbar-width: none; -webkit-mask-image: linear-gradient(90deg, #000 calc(100% - 18px), transparent); mask-image: linear-gradient(90deg, #000 calc(100% - 18px), transparent); }
.sline::-webkit-scrollbar { display: none; }
.sell { flex: none; }
.sell em { font-style: normal; font-family: var(--title); font-weight: 400; font-size: 10px; color: var(--mute); }
/* a purchase to sell back (08/11): its rarity on the left, what it gives back in gold; touched once, it asks */
.sell { --rc: var(--r1); display: inline-flex; align-items: center; gap: 6px; height: 24px; padding: 0 7px 0 10px; border: 0; background: var(--slate2);
  box-shadow: inset 4px 0 0 var(--rc), 0 2px 0 var(--deep); color: var(--ink); cursor: pointer; }
.sell.r2 { --rc: var(--r2); } .sell.r3 { --rc: var(--r3); } .sell.r4 { --rc: var(--r4); }
.sell b { font-size: 10.5px; font-weight: 700; white-space: nowrap; }
.sell:active { transform: translateY(2px); box-shadow: inset 4px 0 0 var(--rc); }
.sell.arm { background: var(--yel); box-shadow: inset 4px 0 0 var(--yel-sh), 0 2px 0 var(--yel-sh); color: var(--dark); }
.sell.arm b { font-family: var(--title); font-weight: 400; font-size: 11px; } .sell.arm .price { color: var(--dark); }
.tfb-st { display: grid; grid-template-columns: 16px 102px minmax(0, 1fr) auto; align-items: center; gap: 6px; height: 26px; padding: 0 8px 0 6px; background: var(--slate2); }
.tfb-st .ic { width: 15px; height: 15px; }
.tfb-st .n { font-size: 11.5px; font-weight: 600; white-space: nowrap; }
.tfb-st .comp { display: flex; gap: 3px; min-width: 0; overflow: hidden; }
/* more purchases than the line holds: they shrink, each one's colour still seen */
.tfb-st .buy { flex: 0 1 auto; min-width: 12px; height: 18px; padding: 0 5px 0 8px; overflow: hidden; white-space: nowrap; }
/* several purchases on one stat: their bonuses only */
.tfb-st .comp .buy:not(:only-child) small { display: none; }
.tfb-st .none { font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tfb-st .vv { display: flex; align-items: baseline; gap: 4px; white-space: nowrap; }
.tfb-st .b { font-family: var(--title); font-weight: 400; font-size: 11px; color: var(--mute); } .tfb-st .ar { font-size: 11px; color: var(--mute); }
.tfb-st .v { font-family: var(--title); font-weight: 400; font-size: 14px; } .tfb-st .v.up { color: var(--yel); }
.tfb-st .vv small { min-width: 30px; font-size: 9.5px; font-weight: 600; color: var(--mute); }
.tf-rules { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.tf-rules li { display: flex; align-items: flex-start; gap: 6px; font-size: 10.5px; font-weight: 500; color: var(--mute); line-height: 1.3; }
.tf-rules li .ic { width: 15px; height: 15px; }
.tf-rules b { color: #fff; font-weight: 700; }
/* a troop it fears (ringed red), or beats (ringed blue): the portrait over its name */
.vsi { display: flex; flex-wrap: wrap; gap: 4px 10px; }
.vsf { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.vsf img { width: 24px; height: 24px; object-fit: cover; object-position: center 20%; background: var(--slate3); flex: none; }
.vsf.fear img { box-shadow: 0 0 0 2px var(--op); } .vsf.beat img { box-shadow: 0 0 0 2px var(--me); }
.vsf b { font-family: var(--title); font-weight: 400; font-size: 8.5px; }

/* ================= the window ================= */
.dim { position: absolute; inset: 0; background: rgba(4, 8, 16, .5); }
.winwrap { position: absolute; left: 50%; transform: translateX(-50%); }
.win { position: relative; width: 100%; padding: 28px 18px 14px; }
.win > * { position: relative; z-index: 1; }
.win .say { font-size: 12px; font-weight: 500; color: var(--mute); line-height: 1.35; }
/* the close square, at the top right */
.x { position: absolute; top: 0; right: 0; width: 30px; height: 30px; display: grid; place-items: center; background: var(--steel); z-index: 4; }
.x .ic { width: 14px; height: 14px; filter: brightness(0) invert(1); }

/* ================= the message ================= */
#toast { position: fixed; left: 50%; top: calc(var(--t) + 62px); transform: translateX(-50%); z-index: 6; max-width: min(340px, calc(100% - 40px)); padding: 8px 14px 9px 19px;
  background: var(--slate); box-shadow: inset 5px 0 0 var(--op), var(--plate-sh); color: #fff; font: 600 13px/1.3 var(--text); text-align: center; pointer-events: none; }
body:has(.ab .dim) #toast { top: calc(var(--t) + 4px); }

/* ================= the fields ================= */
.fld { display: flex; flex-direction: column; gap: 5px; }
.fld > span { font-size: 11px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .06em; }
.fld input { width: 100%; height: 42px; padding: 0 12px; border: 0; border-radius: 0; outline: none; background: var(--deep); color: #fff; box-shadow: inset 0 -3px 0 var(--steel);
  font: 600 16px var(--text); -webkit-user-select: text; user-select: text; -webkit-appearance: none; appearance: none; }
.fld input:focus { box-shadow: inset 0 -3px 0 var(--me); }
.fld input::placeholder { color: #5b6780; }
/* a game's code, typed: five boxes over one field (the field itself is invisible, in front of them) */
.code5 { position: relative; display: flex; gap: 6px; }
.code5 i { width: 40px; height: 48px; display: grid; place-items: center; background: var(--deep); box-shadow: inset 0 -3px 0 var(--steel);
  font-style: normal; font-family: var(--title); font-weight: 400; font-size: 24px; color: #fff; }
.code5:focus-within i.on, .code5.focus i.on { box-shadow: inset 0 -3px 0 var(--yel); }
.code5 input { position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; outline: none; background: transparent; color: transparent; caret-color: transparent;
  font-size: 16px; -webkit-user-select: text; user-select: text; -webkit-appearance: none; appearance: none; }
.code5 input::selection { background: transparent; }
/* a game's code, shown: five big letters */
.bigcode { display: flex; gap: 6px; }
.bigcode span { width: 50px; height: 62px; display: grid; place-items: center; background: var(--deep); box-shadow: inset 0 -4px 0 var(--yel);
  font-family: var(--title); font-weight: 400; font-size: 36px; line-height: 1; }

/* ================= the notes: an error, a note on its way ================= */
.err { display: flex; gap: 10px; align-items: center; padding: 8px 12px; background: var(--op); color: #fff; box-shadow: var(--plate-sh); }
.err b { font-family: var(--title); font-weight: 400; font-size: 13px; white-space: nowrap; }
.err span { font-size: 12px; font-weight: 500; line-height: 1.3; }
.note { display: flex; gap: 8px; align-items: center; padding: 8px 12px; background: var(--slate2); color: #fff; font-size: 12px; font-weight: 600; }
.note .ic { width: 16px; height: 16px; filter: brightness(0) invert(1); }

/* ================= the augments (08/11) ================= */
/* a shop's perk: its name, then what it does on two lines at most (in full in its title) */
.ot.perk .otp { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; font-size: 8.5px; font-weight: 600; line-height: 1.15; color: var(--mute); }
/* a choice's card: its rarity's band at the top (the beast's in green), its name, what it does */
.achip { --rc: var(--r2); display: inline-flex; align-items: center; height: 20px; padding: 0 7px 0 9px; background: var(--slate2); box-shadow: inset 4px 0 0 var(--rc);
  font-size: 10.5px; font-weight: 700; white-space: nowrap; }
.achip.r3 { --rc: var(--r3); } .achip.r4 { --rc: var(--r4); } .achip.beast { --rc: #3bbf6a; }

/* ================= the choice's window (08/11, direction A) ================= */
.wt.r2 { background: var(--r2); } .wt.r3 { background: var(--r3); } .wt.r4 { background: var(--r4); color: var(--dark); } .wt.beast { background: #3bbf6a; color: var(--dark); }
.pa-sub { display: block; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--mute); }
.pa-sub.r2 { color: var(--r2); } .pa-sub.r3 { color: var(--r3); } .pa-sub.r4 { color: var(--r4); } .pa-sub.beast { color: #3bbf6a; } .pa-sub.yel { color: var(--yel); }
.pa-card .num { font-family: inherit; font-weight: 800; color: var(--yel); }
/* an option's troops: their portraits, with how many my army fields; dim when it fields none; its other tags as signs */
.tf { position: relative; display: block; flex: none; width: 26px; height: 26px; background: var(--slate3); box-shadow: 0 0 0 1.5px var(--steel); }
.tf img { width: 100%; height: 100%; object-fit: cover; object-position: center 22%; filter: grayscale(.85) brightness(.7); }
.tf.have { box-shadow: 0 0 0 2px var(--me); } .tf.have img { filter: none; }
.tf i { position: absolute; right: -3px; bottom: -3px; padding: 0 2px; background: var(--me); font-style: normal; font-family: var(--title); font-weight: 400; font-size: 8.5px; line-height: 1.2; color: #fff; }
.tf.big { width: 34px; height: 34px; } .tf.big i { font-size: 10px; }
.tg { display: grid; place-items: center; flex: none; width: 26px; height: 26px; background: var(--deep); }
.tg .ic { width: 15px; height: 15px; filter: brightness(0) invert(1); opacity: .8; } .tg.big { width: 34px; height: 34px; } .tg.big .ic { width: 19px; height: 19px; }
.pk-mine { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; margin-top: 10px; } .pk-mine .tf-k { margin: 0 4px 0 0; }

/* A: four cards */
.pa-cards { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-top: 8px; }
.pa-cards:has(> :nth-child(5)) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.pa-card { --rc: var(--r2); display: flex; flex-direction: column; align-items: stretch; gap: 5px; min-width: 0; padding: 10px 9px 8px; border: 0; background: var(--slate2); color: var(--ink); text-align: left;
  box-shadow: inset 0 4px 0 var(--rc), 0 4px 0 var(--deep); cursor: pointer; }
.pa-card.r1 { --rc: var(--r1); } .pa-card.r3 { --rc: var(--r3); } .pa-card.r4 { --rc: var(--r4); } .pa-card.beast { --rc: #3bbf6a; }
.pa-card:active { transform: translateY(3px); box-shadow: inset 0 4px 0 var(--rc), 0 1px 0 var(--deep); }
.pa-faces { display: flex; gap: 5px; min-height: 34px; padding: 2px 0 2px 1px; }
.pa-fam { font-size: 9px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--rc); }
.pa-name { font-family: var(--title); font-weight: 400; font-size: 15px; line-height: 1.05; }
.pa-text { flex: 1; font-size: 11.5px; font-weight: 500; line-height: 1.3; color: #d5dceb; }
.pa-foot { display: flex; align-items: center; gap: 4px; min-height: 14px; font-size: 9.5px; font-weight: 700; color: var(--me); text-transform: uppercase; letter-spacing: .05em; }
.pa-foot .ic { width: 11px; height: 11px; }
`;var Ih=`/* The auto-battler's page: where its pieces go and how big they are. Their look is the mode's theme (client/
   bannieres.css, direction D \xAB Banni\xE8res \xBB); the boards of design/ui/eclat/ are drawn with these two files. Sizes are
   iPhone points for a phone held sideways (844 \xD7 390): the arena keeps the middle of the screen, the preparation's
   panels stand on its two sides, the shop between them at the bottom. */
/* the page's ground, under the arena: the scene's own ground colour (arena.ts), so a band left by a late size reads as
   the forest's shade rather than a bright green edge */
html, body { background: #3e5a2c; }
#scene { position: fixed; top: 0; left: 0; width: var(--pw, 100%); height: var(--ph, 100%); display: block; touch-action: none; }
html.rot #scene { width: 100%; height: 100%; }
/* in landscape at once, as the game (pages/carte.html, whose script page.html copies): a phone held upright shows the
   whole page turned a quarter clockwise (ui/rotate.ts turns the touches back), the safe areas follow the turn */
:root { --vw: 1vw; --vh: 1vh; }
html.rot { --vw: calc(var(--ph) / 100); --vh: calc(var(--pw) / 100); }
html.rot body { position: fixed; top: 0; left: 0; width: var(--ph); height: var(--pw); transform-origin: 0 0; transform: translateX(var(--pw)) rotate(90deg);
  --l: max(16px, env(safe-area-inset-top, 0px)); --r: max(16px, env(safe-area-inset-bottom, 0px));
  --t: max(6px, env(safe-area-inset-right, 0px)); --b: max(10px, env(safe-area-inset-left, 0px)); }

/* the game's layer over the arena: one full-screen layer per part (ui.ts), the touches go through to the arena except
   on what is pressed; the HUD of the top stays over a window's dimming (the result of a round leaves it visible), and
   the connection over everything */
.ab { position: fixed; inset: 0; z-index: 2; pointer-events: none;
  --ml: calc(var(--l) - 6px); --mr: calc(var(--r) - 6px); --army-w: 222px; --pl-w: 176px; }
.ab > div { position: absolute; inset: 0; pointer-events: none; }
.ab > [data-part=top] { z-index: 2; }
/* each part its own layer (08/11): the hearts of the players' list (z-index 2 in their row) went over the windows */
.ab > div { isolation: isolate; }
.ab > [data-part=win] { z-index: 1; }
.ab > [data-part=net] { z-index: 3; }
.ab button, .ab .panel, .ab .win, .ab .dim, .ab .plate { pointer-events: auto; }

/* ================= the HUD of the top ================= */
.hud-l { position: absolute; left: calc(var(--l) - 4px); top: calc(var(--t) + 2px); display: flex; gap: 14px; align-items: center; }
.stat { display: flex; align-items: center; position: relative; }
.stat .ic { width: 26px; height: 26px; position: relative; z-index: 2; }
.stat .track { position: relative; margin-left: -10px; display: flex; align-items: center; }
.stat.hp .bar { width: 104px; height: 20px; }
.stat.hp .bar > i { background: var(--op); }
.stat.hp b { position: absolute; left: 16px; font-family: var(--title); font-weight: 400; font-size: 14px; }
.stat.gold b { margin-left: 4px; font-family: var(--title); font-weight: 400; font-size: 16px; color: var(--yel); }
.hud-r { position: absolute; right: calc(var(--r) + 38px); top: var(--t); display: flex; gap: 12px; align-items: center; }
/* giving up: a white flag on a slate square in the corner, the round and its timer to its left */
.qbtn { position: absolute; right: calc(var(--r) - 4px); top: calc(var(--t) + 2px); width: 34px; height: 34px; display: grid; place-items: center;
  background: var(--slate2); box-shadow: var(--key-sh); pointer-events: auto; }
.qbtn .ic { width: 18px; height: 18px; filter: brightness(0) invert(1); }
.qbtn:active { transform: translateY(2px); box-shadow: none; }
.round { display: flex; flex-direction: column; align-items: flex-end; line-height: 1; }
.round b { font-family: var(--title); font-weight: 400; font-size: 15px; }
.round small { margin-top: 2px; font-size: 10px; font-weight: 700; color: var(--yel); text-transform: uppercase; letter-spacing: .08em; }
.timer { display: flex; align-items: center; gap: 5px; }
.timer .ic { width: 22px; height: 22px; }
.timer b { min-width: 50px; font-family: var(--title); font-weight: 400; font-size: 20px; line-height: 1; }
/* the next opponent, at the top in the middle: its name and the army it shows now (touch: its sheet) */
.hud-c { position: absolute; top: calc(var(--t) + 1px); left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 8px; height: 32px; padding: 0 12px;
  background: var(--slate); box-shadow: inset 5px 0 0 var(--op), var(--plate-sh); }
.next > .ic { width: 20px; height: 20px; filter: brightness(0) invert(1); }
.next .who { max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--title); font-weight: 400; font-size: 14px; line-height: 1.1; }
.minis { display: flex; gap: 4px; }

/* ================= the preparation ================= */
/* the army, on the left: the places, a row per troop, fill and empty */
.army { position: absolute; left: var(--ml); top: calc(var(--t) + 42px); width: var(--army-w); max-height: calc(100% - var(--t) - 42px - var(--b) + 2px); }
.capbar { height: 6px; margin: 8px 0 6px; flex: none; }
.rows { display: flex; flex-direction: column; gap: 4px; }
.foot { margin-top: 8px; display: flex; gap: 6px; justify-content: center; flex: none; padding-bottom: 3px; }
/* the players, on the right */
.players { position: absolute; right: var(--mr); top: calc(var(--t) + 42px); width: var(--pl-w); }
.plist { display: flex; flex-direction: column; gap: 3px; margin-top: 6px; }
/* the shop, between the two at the bottom: more places, a new draw, then the offers */
.shop { position: absolute; left: calc(var(--ml) + var(--army-w) + 8px); right: calc(var(--mr) + var(--pl-w) + 10px); bottom: calc(var(--b) - 2px);
  max-width: 430px; margin: 0 auto; height: 96px; padding: 7px; flex-direction: row; gap: 6px; align-items: stretch; }
.util { width: 46px; flex: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; background: var(--steel); box-shadow: var(--key-sh); }
.util > .ic { width: 22px; height: 22px; filter: brightness(0) invert(1); }
.util b { font-family: var(--title); font-weight: 400; font-size: 13px; line-height: 1; }
.util:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--deep); }
.utils { display: contents; }
/* the four offers, as lines in 2 \xD7 2 after the two buttons */
.shop.lines .otg { flex: 1; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 6px; }
/* a troop's sheet, beside the army in the shop's place and up to the top of the panels: the row touched ringed in
   yellow, the sheet's arrow pointing at it from the army's edge */
.tfb { position: absolute; left: calc(var(--ml) + var(--army-w) + 8px); right: calc(var(--mr) + var(--pl-w) + 10px); top: calc(var(--t) + 42px); bottom: calc(var(--b) - 2px);
  padding: 8px 10px 10px; box-shadow: inset 0 0 0 2px var(--yel), var(--plate-sh);
  /* its rules and purchases (08/11) can outgrow it on the small phones: it scrolls */
  overflow: hidden auto; scrollbar-width: none; }
.tfb .ph { margin: -8px -10px 0; }
.tfb .ph .cap { margin-right: 34px; font-family: var(--title); font-weight: 400; color: #fff; font-size: 12px; }
.tfb-role { margin: 8px 2px 7px; }
.tfb-stats { display: flex; flex-direction: column; gap: 3px; }
.tfb-none { margin: 6px 2px 0; font-size: 10.5px; }
.tfb-f { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; gap: 12px; }
.trow { cursor: pointer; }
.trow.on { position: relative; z-index: 2; box-shadow: inset 0 0 0 2px var(--yel); }
.trow.on::after { content: ""; position: absolute; left: calc(100% + 6px); top: 50%; width: 10px; height: 20px; margin-top: -10px; background: var(--yel);
  clip-path: polygon(100% 0, 0 50%, 100% 100%); }
/* \xAB Pr\xEAt \xBB (alone), under the players; between friends the same corner says when the battle starts */
.ready { position: absolute; right: var(--mr); bottom: calc(var(--b) + 3px); width: var(--pl-w); }
.until { position: absolute; right: var(--mr); bottom: calc(var(--b) + 3px); width: var(--pl-w); height: 52px; display: flex; align-items: center; justify-content: center; gap: 8px; }
.until > .ic { width: 22px; height: 22px; filter: brightness(0) invert(1); }
.until span { display: flex; flex-direction: column; line-height: 1; font-size: 10px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .06em; }
.until b { margin-top: 3px; font-family: var(--title); font-weight: 400; font-size: 22px; color: #fff; letter-spacing: 0; }

/* ================= the battle ================= */
/* the \xC9clat's two gauges, the timer between them in yellow */
.gauge { position: absolute; top: calc(var(--t) + 2px); left: 50%; transform: translateX(-50%); width: 452px; height: 52px; display: grid; grid-template-columns: minmax(0, 1fr) 80px minmax(0, 1fr); align-items: center; }
.side { display: grid; grid-template-columns: minmax(0, 1fr) auto; row-gap: 4px; align-content: center; height: 100%; padding: 6px 10px; background: var(--slate); }
.side.me { box-shadow: inset 0 -4px 0 var(--me); } .side.op { box-shadow: inset 0 -4px 0 var(--op); }
.side .nm, .side .pct { font-family: var(--title); font-weight: 400; font-size: 12px; line-height: 1.1; }
.side .nm { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.side .pct { text-align: right; padding-left: 6px; }
.side .gbar { grid-column: 1 / 3; height: 10px; }
.side.op { grid-template-columns: auto minmax(0, 1fr); }
.side.op .nm { order: 2; text-align: right; } .side.op .pct { order: 1; text-align: left; padding: 0 6px 0 0; } .side.op .gbar { order: 3; }
.side.op .gbar > i { left: auto; right: 0; background: var(--op); }
.clock { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: var(--yel); color: var(--dark); line-height: 1; }
.clock b { font-family: var(--title); font-weight: 400; font-size: 19px; }
.clock small { margin-top: 2px; font-size: 9.5px; font-weight: 700; text-transform: uppercase; }
/* what my opponent still holds (08/11): its cards, small, in red, under its gauge, to its right edge */
.foedeck { position: absolute; top: calc(var(--t) + 60px); left: calc(50% + 40px); width: 186px; display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 4px; pointer-events: none; }
/* the deck, at the bottom left; my life, discreet, at the bottom right; the help over the deck at the start */
.deck { position: absolute; left: var(--ml); bottom: var(--b); display: flex; gap: 6px; align-items: flex-end; }
.hp-mini { position: absolute; right: calc(var(--r) - 4px); bottom: calc(var(--b) + 2px); display: flex; align-items: center; gap: 5px; padding: 4px 10px 4px 6px; }
.hp-mini .ic { width: 20px; height: 20px; }
.hp-mini b { font-family: var(--title); font-weight: 400; font-size: 16px; }
/* the count before the drops (07/11): the seconds big over the field, a line under them */
.bcount { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; gap: 4px; pointer-events: none; }
.bcount b { font-family: var(--title); font-weight: 400; font-size: 84px; line-height: 1; color: var(--yel); text-shadow: 0 4px 0 var(--dark), 0 0 18px rgba(0, 0, 0, .5); -webkit-text-stroke: 3px var(--dark); paint-order: stroke fill; }
.bcount span { padding: 5px 12px 6px; background: var(--slate); box-shadow: var(--plate-sh); color: #fff; font-size: 12px; font-weight: 600; }
.ahint { position: absolute; left: var(--ml); bottom: calc(var(--b) + 84px); padding: 7px 12px 8px 15px; box-shadow: inset 4px 0 0 var(--yel), var(--plate-sh); font-size: 12px; font-weight: 600; }
/* a monster slain (08/11): the plate in the slayer's colour; its boon's badge by the side's name in the gauges */
.ahint.slain.me { box-shadow: inset 4px 0 0 var(--me), var(--plate-sh); } .ahint.slain.op { box-shadow: inset 4px 0 0 var(--op), var(--plate-sh); }
.ahint.slain b { font-weight: 800; } .ahint.slain.me b { color: #8fbaff; } .ahint.slain.op b { color: #ff8f99; }
.side .boon { display: inline-block; margin: 0 5px 0 0; padding: 1px 4px; background: #ff8a2a; color: var(--dark); font-style: normal; font-size: 10px; border-radius: 2px; vertical-align: 1px; }
.side.op .boon { margin: 0 0 0 5px; }

/* ================= the windows ================= */
.winwrap { top: 50%; transform: translate(-50%, -50%); }
/* the round's result: under the HUD of the top, which stays visible */
.winwrap.res { top: calc(var(--t) + 54px); transform: translateX(-50%); width: 470px; max-width: calc(100% - var(--l) - var(--r)); }
.duel { display: grid; grid-template-columns: minmax(0, 1fr) 34px minmax(0, 1fr); align-items: center; gap: 8px; }
.dside { display: grid; grid-template-columns: minmax(0, 1fr) auto; row-gap: 4px; align-items: center; min-width: 0; }
.dside .nm { grid-column: 1 / 3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--title); font-weight: 400; font-size: 12px; }
.dside .gbar { height: 12px; }
.dside .pct { margin-left: 6px; font-family: var(--title); font-weight: 400; font-size: 12px; }
.dside.op .nm { text-align: right; }
.dside.me .gbar > i { background: var(--me); } .dside.op .gbar > i { background: var(--op); }
.vs { display: grid; place-items: center; }
.vs .ic { width: 24px; height: 24px; filter: brightness(0) invert(1); }
.lost { display: flex; align-items: center; gap: 6px; margin: 10px 0 8px; }
.lost .ic { width: 18px; height: 18px; }
.lost b { font-family: var(--title); font-weight: 400; font-size: 17px; color: var(--op); }
.lost b.zero { color: var(--mute); }
.lost span { margin-left: 4px; font-size: 12px; font-weight: 500; color: var(--mute); }
.lost span strong { color: #fff; font-weight: 600; }
.others { display: flex; flex-direction: column; gap: 4px; }
.win .go.small { margin: 16px auto 4px; width: 168px; }
/* a player's sheet: its name on the pennant, the close square, life and places, a row per troop with all its bonuses */
.winwrap.sheet { width: 380px; max-width: calc(100% - var(--l) - var(--r)); }
.win.flat { padding: 8px 10px 10px; }
.win.flat .ph { margin: -8px -10px 0; padding: 0; }
.sstats { display: flex; align-items: center; gap: 18px; margin: 8px 2px 6px; }
.sstats .bar { width: 90px; height: 12px; margin-left: -6px; }
.sstats .bar > i { background: var(--op); }
.srows { display: flex; flex-direction: column; gap: 3px; }
.srow { display: grid; grid-template-columns: 30px 40px minmax(0, 1fr); align-items: center; gap: 8px; min-height: 32px; padding: 1px 6px 1px 1px; background: var(--slate2); }
.srow .pt { width: 30px; height: 30px; object-fit: cover; background: var(--slate3); }
.srow b { font-family: var(--title); font-weight: 400; font-size: 15px; }
.srow .chips { flex-direction: row; flex-wrap: wrap; gap: 3px; }
.srow .chip { font-size: 10.5px; } .srow .chip .ic { width: 12px; height: 12px; }
.win .say.empty { margin: 4px 2px; }
/* eliminated: the place, big */
.winwrap.out { width: 400px; }
.winwrap.quit { width: 360px; max-width: calc(100% - var(--l) - var(--r)); }
.winwrap.quit .say { text-align: center; }
.oplace { display: flex; align-items: baseline; justify-content: center; gap: 8px; margin: 2px 0 4px; }
.oplace b { font-family: var(--title); font-weight: 400; font-size: 52px; line-height: 1; }
.oplace span { font-size: 15px; font-weight: 600; color: var(--mute); }
.win .stl.c { justify-content: center; }
.win.out .say { text-align: center; margin: 6px 0 2px; }
.foot2 { display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 16px; padding-bottom: 4px; }
.foot2 .go.small { margin: 0; width: auto; }
.foot2 .btn.big { height: 40px; }
/* the final ranking: the podium, then the rest; the winner in yellow, me in blue */
.winwrap.over { width: 560px; max-width: calc(100% - var(--l) - var(--r)); }
.headline { display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--title); font-weight: 400; font-size: 14px; }
.headline .ic { width: 20px; height: 20px; }
.final { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 14px; align-items: end; margin-top: 12px; }
.podium { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; align-items: end; }
.pod { display: flex; flex-direction: column; align-items: center; min-width: 0; }
.pod .face { width: 44px; height: 44px; }
.pod .pn { max-width: 100%; margin: 4px 0 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; font-weight: 600; }
.pod .blk { width: 100%; display: grid; place-items: center; background: var(--steel); font-family: var(--title); font-weight: 400; font-size: 24px; }
.pod.p1 .blk { height: 74px; background: var(--yel); color: var(--dark); } .pod.p2 .blk { height: 54px; } .pod.p3 .blk { height: 40px; }
.pod.me .blk { background: var(--me); color: #fff; } .pod.p1.me .blk { background: var(--yel); color: var(--dark); box-shadow: inset 0 -6px 0 var(--me); }
.pod.me .pn { color: #8fbcff; }
.rest { display: flex; flex-direction: column; gap: 3px; }
.rrow { display: grid; grid-template-columns: 20px 22px minmax(0, 1fr) auto; align-items: center; gap: 8px; height: 26px; padding: 0 8px; background: var(--slate2); font-size: 12px; font-weight: 600; }
.rrow > b { font-family: var(--title); font-weight: 400; font-size: 12px; color: var(--mute); text-align: center; }
.rrow .face { width: 22px; height: 22px; }
.rrow .nm { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.rrow .rr { display: flex; align-items: center; gap: 3px; font-family: var(--title); font-weight: 400; font-size: 10px; color: var(--mute); }
.rrow .rr .ic { width: 12px; height: 12px; filter: brightness(0) invert(1); opacity: .7; }
.rrow.me { background: var(--me); } .rrow.me > b, .rrow.me .rr { color: #fff; }
/* the connection: mine lost, a window in the middle over a light shade (the battle stays in view), the three dots of
   the reconnection; cut off from the battle, or my opponent's lost, a plate under the gauges, marked red; out of a
   battle, the same plate a little higher */
.dim.soft { background: rgba(4, 8, 16, .32); }
.winwrap.net { width: 300px; }
.winwrap.net .nsig { display: block; width: 58px; height: 58px; margin: 8px auto 2px; }
.winwrap.net .say { text-align: center; font-size: 14px; }
.nsig .w { stroke: #fff; stroke-width: 4.5; } .nsig .o { stroke: var(--slate); stroke-width: 10; } .nsig .r { stroke: var(--op); stroke-width: 5; }
.dots i { font-style: normal; animation: dot 1.2s infinite both; }
.dots i:nth-child(2) { animation-delay: .2s; } .dots i:nth-child(3) { animation-delay: .4s; }
@keyframes dot { 0%, 80%, 100% { opacity: .15; } 40% { opacity: 1; } }
.netp { position: absolute; top: calc(var(--t) + 62px); left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  max-width: calc(100% - var(--l) - var(--r)); padding: 7px 16px 8px 12px; box-shadow: inset 4px 0 0 var(--op), var(--plate-sh); }
.netp .nsig { width: 30px; height: 30px; }
.netp > span { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.netp b { font-family: var(--title); font-weight: 400; font-size: 13px; line-height: 1.1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.netp small { font-size: 11.5px; font-weight: 500; color: var(--mute); }
.netp.top { top: calc(var(--t) + 42px); }
/* over a window (the round's result): one line in the free space between the corners of the HUD */
.netp.top.hi { top: calc(var(--t) + 2px); padding: 6px 14px 6px 10px; }
.netp.hi .nsig { width: 22px; height: 22px; }
.netp.hi > span { flex-direction: row; align-items: baseline; gap: 10px; }
/* the 5 s before round 1 (between friends): the count, big, in the middle */
.winwrap.count { width: 300px; }
.cnum { display: block; text-align: center; font-family: var(--title); font-weight: 400; font-size: 64px; line-height: 1; }
.win.count .say { text-align: center; margin-top: 6px; }

/* ================= out of the game: the start, the private game ================= */
#out { position: fixed; inset: 0; z-index: 4; overflow: hidden; background: #0d121c center / cover no-repeat;
  --ml: calc(var(--l) - 6px); --mr: calc(var(--r) - 6px); }
#out .shade { position: absolute; inset: 0; background: rgba(13, 18, 28, .5); }
#out.home { background-position: 62% 40%; }
#out.form .shade, #out.room .shade { background: rgba(13, 18, 28, .66); }
/* the start: the plate on the left (the title, the name, the two ways to play), the arena on the right */
.hplate { position: absolute; left: 0; top: 0; bottom: 0; width: calc(var(--l) + 340px); display: flex; flex-direction: column; justify-content: center;
  padding: calc(var(--t) + 14px) 28px calc(var(--b) + 10px) calc(var(--l) + 22px); background: var(--slate); box-shadow: 6px 0 0 rgba(0, 0, 0, .3); }
.hplate::after { content: ""; position: absolute; top: 0; bottom: 0; right: 0; width: 6px; background: var(--me); }
.title { margin: 0; font-family: var(--title); font-weight: 400; font-size: 58px; line-height: 1; letter-spacing: .01em; text-shadow: 0 4px 0 rgba(0, 0, 0, .45); }
.tagline { margin: 10px 0 0; font-size: 15px; font-weight: 600; color: #fff; }
.tagline + .say { margin-top: 3px; font-size: 12px; font-weight: 500; color: var(--mute); line-height: 1.35; }
.hplate .fld { margin-top: 18px; }
.hplate .go { margin-top: 16px; width: 100%; font-size: 19px; }
.hplate .go .ic { width: 22px; height: 22px; }
.hplate .btn.big { margin-top: 12px; width: 100%; }
.invite { display: flex; align-items: center; gap: 8px; margin-top: 12px; padding: 7px 10px; background: var(--me); font-size: 12px; font-weight: 600; }
.invite b { font-family: var(--title); font-weight: 400; letter-spacing: .08em; }
/* eight banners hanging over the arena: eight armies, mine in blue */
/* the troops, at the bottom right */
.cast { position: absolute; right: calc(var(--r) + 8px); bottom: calc(var(--b) + 6px); display: flex; gap: 6px; }
.cast .dcard { width: 50px; height: 58px; }
.devbar { position: absolute; right: calc(var(--r) + 8px); bottom: calc(var(--b) + 78px); display: flex; align-items: center; gap: 6px; padding: 6px 8px; }
.devbar > span { font-size: 11px; font-weight: 600; color: var(--mute); margin-right: 2px; }
/* the private game: the way back at the top left, the screen's title, then its plates side by side */
.otop { position: absolute; left: var(--l); top: calc(var(--t) + 8px); z-index: 2; display: flex; align-items: center; gap: 12px; }
.otop .fan { height: 32px; font-size: 16px; padding-right: 26px; box-shadow: var(--plate-sh); }
.lob { position: absolute; left: 50%; top: calc(50% + 22px); transform: translate(-50%, -50%); width: 600px; max-width: calc(100% - var(--l) - var(--r)); display: flex; flex-direction: column; gap: 12px; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: stretch; }
.lob .panel { padding: 8px 14px 14px; }
.lob .create .go { margin-top: auto; }
.lob .panel .ph { margin: -8px -14px 0; }
.lob .panel .say { margin: 10px 0 12px; font-size: 12px; font-weight: 500; color: var(--mute); line-height: 1.35; min-height: 32px; }
.lob .panel .go { width: 100%; font-size: 18px; height: 48px; }
.lob .panel .go .ic { width: 20px; height: 20px; }
.lob .join .code5 { margin-bottom: 12px; }
.lob .join .code5 i { flex: 1; }
.lob .join .btn.big { width: 100%; }
.lob .resume { align-self: flex-start; }
/* what happened (an error, a note on its way): at the bottom of the screen, apart from the plates */
#out > .msg { position: absolute; left: 50%; bottom: calc(var(--b) + 4px); transform: translateX(-50%); z-index: 3; width: 600px; max-width: calc(100% - var(--l) - var(--r)); }
#out > .msg:empty { display: none; }
/* the waiting room: the code and the launch on the left, the eight seats on the right */
.room .lob { width: 620px; }
.room .cols { align-items: start; }
.room .cols { grid-template-columns: 290px minmax(0, 1fr); }
.lcol { display: flex; flex-direction: column; gap: 14px; }
.codep .bigcode { margin: 12px 0 10px; justify-content: space-between; }
.codep .btn { width: 100%; }
.codep .say { margin: 10px 0 0 !important; min-height: 0 !important; }
.lcol .go { width: 100%; font-size: 20px; }
.lcol .go .ic { width: 22px; height: 22px; }
.lcol > .say { margin-top: -6px; font-size: 12px; font-weight: 500; color: var(--mute); text-align: center; }
.waiting { display: flex; align-items: center; gap: 10px; height: 52px; padding: 0 14px; }
.waiting > .ic { width: 22px; height: 22px; filter: brightness(0) invert(1); }
.waiting span { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.waiting b { font-family: var(--title); font-weight: 400; font-size: 14px; }
.waiting small { font-size: 11px; font-weight: 500; color: var(--mute); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.seats .slist { display: flex; flex-direction: column; gap: 3px; margin-top: 8px; }
.seats.panel { padding-bottom: 10px; }

/* the load test: its numbers at the bottom right, the way back at the top left */
.ab .fps { position: absolute; right: var(--r); bottom: var(--b); padding: 5px 9px; font-size: 12px; font-weight: 600; }
.ab .loadbar { position: absolute; left: var(--l); top: calc(var(--t) + 6px); display: flex; align-items: center; gap: 8px; pointer-events: auto; }
.ic.flip { transform: scaleX(-1); }
.ab .loadbar > span { padding: 6px 10px; font-size: 12px; font-weight: 600; }

/* ================= the screen's size ================= */
/* The sizes follow the page's own frame (a container: the game's layer, or the screens out of the game), which is
   the landscape one even when a phone held upright turns the page; the boards get the same answers at 844 \xD7 390. */
.ab, #out { container: page / size; }
/* the army's nine rows (07/11: six troops, three spells) and the eight players fit a phone 390 high, its home bar's
   margin included (9 \xD7 26 + 8; seven rows of 31 with the banner, six of 37 before it) */
.army { padding-bottom: 7px; }
.capbar { margin: 6px 0 5px; }
.rows { gap: 1px; } .trow { height: 26px; } .trow .pt { width: 26px; height: 26px; }
.trow .sq { height: 22px; }
.trow .tn b { font-size: 14px; } .trow .tn small { margin-top: 1px; font-size: 8.5px; }
.foot { margin-top: 5px; }
.prow { height: 24px; }
/* taller (932 \xD7 430): the board's own sizes */
@container page (min-height: 420px) {
  .rows { gap: 2px; } .trow { height: 30px; } .trow .pt { width: 30px; height: 30px; }
  .prow { height: 26px; }
}
/* shorter (667 \xD7 375) */
@container page (max-height: 380px) {
  .trow { height: 25px; } .trow .pt { width: 25px; height: 25px; } .trow .sq { height: 21px; }
  .prow { height: 23px; } .plist { margin-top: 5px; }
  .title { font-size: 52px; }
  /* the troop sheet, a little tighter from top to bottom */
  .tfb { padding-top: 6px; padding-bottom: 8px; }
  .tfb .ph { margin-top: -6px; }
  .tfb-role { margin: 6px 2px 5px; line-height: 1.3; }
  .tfb-stats { gap: 2px; } .tfb-st { height: 23px; }
  .tfb-none { margin-top: 4px; }
  .tfb-f .tf-k { margin: 6px 0 3px; }
  .tf-rules { gap: 3px; } .tf-rules li { line-height: 1.25; }
}
/* narrower (667 wide): narrower panels, the players' life as a number, the shop's two buttons one over the other */
@container page (max-width: 760px) {
  .ab > div { --army-w: 196px; --pl-w: 132px; }
  .trow { grid-template-columns: 26px 24px minmax(0, 1fr) 46px; gap: 4px; }
  .trow .pt { width: 25px; height: 25px; }
  .tn b { font-size: 14px; }
  .pm { gap: 3px; } .sq { width: 21px; height: 22px; }
  .chip { font-size: 9px; padding: 1px 3px 1px 1px; } .chip .ic { width: 10px; height: 10px; }
  .php .bar { display: none; } .php b { margin-left: 2px; font-size: 11px; }
  .prow { font-size: 11.5px; padding: 0 5px; }
  .shop { gap: 5px; padding: 6px; }
  .utils { display: flex; flex-direction: column; gap: 5px; flex: none; }
  /* the two buttons one over the other, each still its icon over its price (the place's price has two digits from
     45 places), to leave the four lines their width */
  .util { flex: 1; width: 42px; gap: 1px; }
  .util > .ic { width: 13px; height: 13px; } .util b { font-size: 10px; }
  .util .price { font-size: 9.5px; } .util .price .ic { width: 9px; height: 9px; }
  .card .bonus { font-size: 9.5px; } .card .bonus .ic { width: 11px; height: 11px; }
  .shop.lines .otg { gap: 4px; }
  /* the troop sheet (shorter too, above): narrower lines, the troops it fears and beats as portraits only (their
     names in the label) */
  .tfb { padding-left: 8px; padding-right: 8px; }
  .tfb .ph { margin-left: -8px; margin-right: -8px; }
  .tfb-role { font-size: 11px; }
  .tfb-st { grid-template-columns: 13px 84px minmax(0, 1fr) auto; gap: 4px; padding: 0 6px 0 4px; }
  .tfb-st .ic { width: 13px; height: 13px; }
  .tfb-st .n { font-size: 10px; }
  .tfb-st .buy { height: 16px; gap: 3px; padding: 0 4px 0 7px; } .tfb-st .buy b { font-size: 9px; } .tfb-st .buy small { font-size: 8.5px; }
  .tfb-st .b, .tfb-st .ar { font-size: 10px; }
  /* two purchases on a stat (08/11): the value before goes, the purchases keep their room */
  .tfb-st:has(.comp .buy + .buy) .b, .tfb-st:has(.comp .buy + .buy) .ar { display: none; } .tfb-st .v { font-size: 12.5px; } .tfb-st .vv small { min-width: 22px; font-size: 8.5px; }
  .tfb-none { font-size: 9.5px; }
  .tfb-f { gap: 10px; }
  .tf-rules li { gap: 5px; font-size: 10px; } .tf-rules li .ic { width: 13px; height: 13px; }
  .vsi { gap: 4px 6px; } .vsf img { width: 22px; height: 22px; } .vsf b { display: none; }
  .ready { font-size: 20px; } .ready .ic { width: 20px; height: 20px; }
  .until b { font-size: 19px; }
  .stat.hp .bar { width: 78px; }
  .next .who { max-width: 76px; font-size: 12px; } .hud-c { gap: 6px; padding: 0 9px; } .minis { gap: 3px; } .mini { width: 22px; height: 22px; }
  .round b { font-size: 13px; } .timer b { font-size: 18px; min-width: 44px; } .hud-r { gap: 8px; }
  .gauge { width: 420px; } .foedeck { width: 170px; }
  .hplate { width: calc(var(--l) + 300px); padding-right: 22px; }
  .hplate .go { font-size: 17px; padding: 0 12px; gap: 6px; } .hplate .go .ic { width: 19px; height: 19px; }
  #out > .msg { width: 560px; }
  .title { font-size: 50px; }
  .cast .dcard { width: 42px; height: 50px; }
  .lob { width: 560px; }
  .room .lob { width: 590px; } .room .cols { grid-template-columns: 270px minmax(0, 1fr); }
  .bigcode span { width: 46px; height: 58px; font-size: 32px; }
  .winwrap.over { width: 540px; } .final { grid-template-columns: 220px minmax(0, 1fr); }
}

/* watching another battle of the round (06/11, direction C of design/ui/eclat/retours-spectate.html): \xAB Tu regardes \xBB
   under its gauges, and the duels of the round where the players were */
.wtag { position: absolute; top: calc(var(--t) + 56px); left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 6px; height: 22px; padding: 0 10px 0 6px;
  background: var(--yel); color: var(--dark); font-family: var(--title); font-size: 11px; line-height: 1; box-shadow: var(--plate-sh); white-space: nowrap; }
.wtag .ic { width: 16px; height: 16px; }
/* 07/11: watching from the early preparation, the tag takes me back to it */
button.wtag { border: 0; cursor: pointer; height: 28px; font-size: 12px; }
.players.duels { height: calc(100% - var(--t) - 42px - 52px - var(--b) - 3px - 8px); }
.dlist { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }
.dblock { position: relative; display: flex; flex-direction: column; gap: 2px; width: 100%; padding: 2px; background: var(--slate3); text-align: left; pointer-events: auto; }
.dblock.sel { background: var(--yel); }
.dblock.done:not(.sel) { background: transparent; }
.drow { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 4px; height: 21px; padding: 0 6px; background: var(--slate2); font-size: 12px; font-weight: 600; color: #fff; }
.drow .nm { min-width: 0; } .drow .nm span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dlife { display: flex; align-items: center; gap: 3px; } .dlife .ic { width: 14px; height: 14px; } .dlife b { min-width: 16px; text-align: right; font-family: var(--title); font-weight: 400; font-size: 11px; }
.drow .dg { font-family: var(--title); font-size: 10px; color: var(--yel); }
.drow .dl { font-family: var(--title); font-size: 10px; color: var(--op-soft); }
.drow.me { background: var(--me); } .drow.me .dlife .ic { filter: brightness(0) invert(1); }
.drow.dlost .nm { color: var(--op-soft); } .drow.me.dlost .nm { color: #fff; } .drow.me .dl { color: #fff; }
.drow .place { font-family: var(--title); font-size: 11px; color: var(--mute); }
.dblock.done .drow:not(.me) { background: rgba(37, 46, 64, .7); }
.dst { position: absolute; left: -27px; top: 50%; transform: translateY(-50%); width: 24px; height: 24px; display: grid; place-items: center; background: var(--yel); z-index: 2; }
.dst .ic { width: 18px; height: 18px; }

/* ================= the spells (07/11) ================= */
/* in the army, a spell's name in its bonuses' place; its portrait is its sign on its colour */
.sname { font-family: var(--title); font-weight: 400; font-size: 11px; line-height: 1; color: #fff; text-shadow: 0 1px 0 rgba(0, 0, 0, .5); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.trow.spell { background: color-mix(in srgb, var(--slate2) 82%, #7a3fb8); }
/* in the deck, a spell is cast once per touch: its card a little apart from the troops' */
.dcard.spell { margin-left: 4px; }
.dcard.spell + .dcard.spell { margin-left: 0; }

/* the choice of an augment (08/11): four cards across the middle */
.saugs { display: flex; flex-direction: column; gap: 4px; margin: 6px 0 2px; max-height: 132px; overflow-y: auto; }
.arow { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 7px; }
.arow small { font-size: 10px; font-weight: 500; line-height: 1.25; color: var(--mute); }

/* the choice's window (08/11) */
.winwrap.pa { width: 760px; max-width: calc(100% - var(--l) - var(--r)); }
.win.pa { padding: 26px 12px 12px; } .win.pa .pa-sub { text-align: center; }
`;var _h=`/* L'\xC9clat out of a game, since 08/11 (client/hub.ts, client/ranked.ts): the shell (the bar, Jouer, Profil, Historique),
   the new profile, the queue, the ranked card, the end of a game of the queues. Taken from the boards
   design/ui/eclat/classe.py, classe-fiche.py and classe-hub.py (direction C \xAB La fiche dans une coque \xBB), whose markup
   client/hub.ts writes; \`.hbar\`, \`.hbody\` and \`.hpl\` are the boards' \`.bar\`, \`.body\` and \`.hp\` (the game has its own). */

#out.end .shade { background: rgba(13, 18, 28, .35); }
.emb { flex: none; display: block; filter: drop-shadow(0 3px 0 rgba(0,0,0,.35)); }
.pbar { display: block; height: 10px; background: var(--deep); position: relative; overflow: hidden; }
.pbar > i { position: absolute; left: 0; top: 0; bottom: 0; background: var(--me); }
.pbar.gain > i { background: var(--yel); } .pbar.loss > i { background: var(--op); }
#out em, .winwrap.c em { font-style: normal; color: #fff; font-family: var(--title); font-weight: 400; }
/* the group: faces in a row, mine edged blue, \xAB Inviter \xBB a dashed slot */
.grp { display: flex; gap: 6px; margin-top: 12px; }
.gm { display: flex; flex-direction: column; align-items: center; gap: 3px; width: 64px; min-width: 0; }
.gm .face { width: 44px; height: 44px; background: var(--slate3); display: grid; place-items: center; overflow: hidden; box-shadow: inset 0 -3px 0 var(--steel); }
.gm .face img { width: 100%; height: 100%; object-fit: cover; }
.gm.me .face { box-shadow: inset 0 0 0 3px var(--me); }
.gm .gn { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-weight: 600; color: #fff; }
.gm.add .face { background: transparent; box-shadow: inset 0 0 0 2px var(--steel); }
.gm.add .face .ic { width: 18px; height: 18px; filter: brightness(0) invert(.75); }
.gm.add .gn { color: var(--mute); }

.ccard { position: absolute; right: calc(var(--r) + 8px); top: calc(var(--t) + 16px); width: 318px; background: var(--slate); box-shadow: var(--plate-sh); padding: 8px 12px 12px; }
.ccard .ph { margin: -8px -12px 0; }
.crank { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
.hl { margin-top: 12px; } .hl .lab, .kv span { font-size: 10px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .06em; }
.hcs { display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; margin-top: 5px; }
.hc { display: flex; flex-direction: column; align-items: center; padding: 4px 0 5px; background: var(--slate2); box-shadow: inset 0 -3px 0 var(--me); }
.hc.l { box-shadow: inset 0 -3px 0 var(--op); }
.hc b { font-family: var(--title); font-weight: 400; font-size: 18px; line-height: 1.1; }
.hc small { font-size: 10px; font-weight: 700; color: var(--mute); }
.hc.w small { color: #8fbaff; } .hc.l small { color: var(--op-soft); }
.kv { display: flex; justify-content: space-between; align-items: baseline; margin-top: 8px; padding-top: 6px; box-shadow: inset 0 1px 0 var(--slate3); }
.kv b { font-family: var(--title); font-weight: 400; font-size: 13px; }
.ccard .say.empty { margin: 12px 0 0; font-size: 12px; line-height: 1.4; }
.seat.q { grid-template-columns: 18px 22px minmax(0, 1fr) 24px 52px; }
.seat.q .face { width: 22px; height: 22px; overflow: hidden; } .seat.q .face img { width: 100%; height: 100%; object-fit: cover; }
.seat.q .sr { text-align: right; font-size: 10px; font-weight: 700; color: var(--mute); } .seat.q.me .sr { color: #fff; }
.seat.q.free { grid-template-columns: 18px minmax(0, 1fr); }
.winwrap.over.c { top: 50%; width: 620px; }
.cend { display: grid; grid-template-columns: 1fr 190px; gap: 12px; align-items: stretch; }
.elist { display: flex; flex-direction: column; gap: 2px; }
.erow { display: grid; grid-template-columns: 20px 22px 1fr auto; align-items: center; gap: 8px; height: 26px; padding: 0 10px 0 8px; background: var(--slate2); }
.erow b { font-family: var(--title); font-weight: 400; font-size: 13px; color: var(--mute); }
.erow .face { width: 22px; height: 22px; overflow: hidden; } .erow .face img { width: 100%; height: 100%; object-fit: cover; }
.erow .nm { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; font-weight: 600; }
.erow .ed { font-family: var(--title); font-weight: 400; font-size: 13px; } .ed.w { color: #8fbaff; } .ed.l { color: var(--op-soft); }
.erow.me { background: var(--me); } .erow.me b, .erow.me .ed { color: #fff; }
.emine { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 10px; background: var(--slate2); box-shadow: inset 0 -4px 0 var(--me); }
.emine.up { box-shadow: inset 0 -4px 0 var(--yel); } .emine.down { box-shadow: inset 0 -4px 0 var(--op); }
.emine b { font-family: var(--title); font-weight: 400; font-size: 22px; } .emine small { font-size: 11px; font-weight: 600; color: var(--mute); }
.emine.up small { color: var(--yel); } .emine .pbar { width: 100%; margin-top: 4px; } .emine .mx { font-size: 11px; color: var(--mute); }


.ccard .ph .who { font-family: var(--title); font-weight: 400; font-size: 12px; color: var(--mute); }
.modes { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 16px; background: var(--deep); padding: 3px; }
.md { height: 32px; display: grid; place-items: center; font-family: var(--title); font-weight: 400; font-size: 13px; color: var(--mute); text-transform: uppercase; }
.md.on { background: var(--steel); color: #fff; box-shadow: 0 3px 0 rgba(0,0,0,.35); }
.modes .md.on:last-child { background: var(--me); }
.lvl { display: flex; align-items: center; gap: 10px; margin-top: 10px; padding-top: 8px; box-shadow: inset 0 1px 0 var(--slate3); }
.lv { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 40px; height: 40px; background: var(--slate3); box-shadow: inset 0 -3px 0 var(--yel); }
.lv small { font-size: 8px; font-weight: 700; color: var(--mute); text-transform: uppercase; line-height: 1; }
.lv b { font-family: var(--title); font-weight: 400; font-size: 17px; line-height: 1; }
.lx { flex: 1; display: flex; flex-direction: column; gap: 4px; } .lx small { font-size: 10px; font-weight: 600; color: var(--mute); }
.pbar.xp > i { background: var(--yel); }
.lvl.big { margin-top: 12px; padding-top: 0; box-shadow: none; gap: 14px; }
.lvl.big .lv { width: 66px; height: 66px; } .lvl.big .lv b { font-size: 30px; } .lvl.big .lv small { font-size: 10px; }
.lvl.big .lx small { font-size: 11px; }
.say.gain { margin: 8px 0 0; font-size: 11px; }
.norm .hc { box-shadow: inset 0 -3px 0 var(--steel); } .norm .hc.w { box-shadow: inset 0 -3px 0 var(--me); }
.norm .hc small { color: var(--mute) !important; }
.seat.q .lvtag { grid-column: 4 / 6; color: var(--yel); font-family: var(--title); font-weight: 400; font-size: 10px; }
.mtag { position: absolute; top: 6px; right: 12px; z-index: 2; font-size: 10px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .06em; }
.ed.xp { color: var(--yel) !important; font-size: 11px !important; }
.erow.me .ed.xp { color: var(--yel) !important; }
.erow { grid-template-columns: 20px 22px 1fr auto !important; }
.xpl { display: flex; align-items: center; gap: 6px; width: 100%; margin-top: 6px; padding-top: 6px; box-shadow: inset 0 1px 0 var(--slate3); font-size: 11px; font-weight: 700; color: var(--yel); }
.xpl .ic { width: 14px; height: 14px; } .xpl .mx { margin-left: auto; }
.emine .kick { font-family: var(--title); font-weight: 400; font-size: 11px; color: var(--yel) !important; text-transform: uppercase; }
.emine.lvlup { box-shadow: inset 0 -4px 0 var(--yel); }
.lvbig { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 78px; height: 78px; background: var(--slate3); box-shadow: inset 0 -4px 0 var(--yel); margin: 2px 0 4px; }
.lvbig small { font-size: 10px !important; color: var(--mute) !important; text-transform: uppercase; } .lvbig b { font-family: var(--title); font-weight: 400; font-size: 36px; line-height: 1; }
.emine.placed { background: #2e2a1a; }
.go.cl { background: var(--yel); }


#out.hub .shade { background: rgba(13, 18, 28, .62); }
#out.hub.dark .shade { background: rgba(13, 18, 28, .72); }
/* the bar: the logo, the three tabs, me on the right */
.hbar { position: absolute; left: 0; right: 0; top: 0; height: 46px; display: flex; align-items: center; gap: 18px; padding: 0 var(--r) 0 var(--l); background: var(--slate); box-shadow: 0 4px 0 rgba(0,0,0,.35); z-index: 3; }
.blogo { font-family: var(--title); font-weight: 400; font-size: 18px; text-shadow: 0 2px 0 rgba(0,0,0,.4); }
.tabs { display: flex; height: 100%; }
.tab { height: 100%; padding: 0 14px; font-family: var(--title); font-weight: 400; font-size: 13px; color: var(--mute); text-transform: uppercase; box-shadow: inset 0 -4px 0 transparent; }
.tab.on { color: #fff; box-shadow: inset 0 -4px 0 var(--yel); background: var(--slate2); }
.prof { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.prof .av { width: 32px; height: 32px; overflow: hidden; box-shadow: inset 0 0 0 2px var(--me); } .prof .av img { width: 100%; height: 100%; object-fit: cover; }
.prof .mn { display: flex; flex-direction: column; gap: 3px; width: 92px; } .prof .mn b { font-size: 12px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ml { display: flex; align-items: center; gap: 5px; } .ml small { font-size: 9px; font-weight: 700; color: var(--yel); white-space: nowrap; } .ml .pbar { flex: 1; height: 5px; }
/* the body under the bar */
.hbody { position: absolute; left: var(--l); right: var(--r); top: 58px; bottom: calc(var(--b) + 2px); display: flex; gap: 12px; }
.salon { width: 300px; flex: none; background: var(--slate); box-shadow: var(--plate-sh); padding: 8px 12px 12px; }
.salon .ph { margin: -8px -12px 0; }
.salon .modes { margin-top: 12px; }
.salon .grp { margin-top: 12px; }
.sfoot { margin-top: auto; } .sfoot .go { width: 100%; font-size: 20px; } .sfoot .btn.big { width: 100%; margin-top: 8px; }
.srow2 { display: flex; align-items: center; gap: 12px; }
.sring.sm { width: 58px; height: 58px; margin: 0; } .sring.sm b { font-size: 15px; } .sring.sm circle { stroke-width: 11; }
.stxt { display: flex; flex-direction: column; } .stxt b { font-family: var(--title); font-weight: 400; font-size: 17px; } .stxt small { font-size: 11px; color: var(--mute); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
.ccard.hub { position: static; flex: 1; width: auto; }
.ccard .more { display: inline-flex; align-items: center; gap: 4px; font-size: 10px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .06em; }
.ccard .more .ic { width: 12px; height: 12px; filter: brightness(0) invert(.6); }
.norm .hc b { padding: 4px 0; }
.hubseats { flex: 1; background: var(--slate); box-shadow: var(--plate-sh); }
/* the new profile */
.newp { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 360px; padding: 30px 18px 16px; background: var(--slate); box-shadow: var(--plate-sh); display: flex; flex-direction: column; gap: 14px; }
.newp .wt { top: -16px; }
.newp .hint { font-size: 10px; font-weight: 600; color: var(--mute); }
.avs { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
.avc { aspect-ratio: 1; overflow: hidden; background: var(--slate3); box-shadow: inset 0 -3px 0 var(--steel); opacity: .6; } .avc img { width: 100%; height: 100%; object-fit: cover; }
.avc.on { opacity: 1; box-shadow: inset 0 0 0 3px var(--yel); }
.newp .go { width: 100%; font-size: 18px; height: 48px; }
/* the profile */
.pcard { flex: 1; background: var(--slate); box-shadow: var(--plate-sh); padding: 14px; }
.pid { display: flex; gap: 14px; align-items: center; }
.avbig { width: 92px; height: 92px; overflow: hidden; flex: none; box-shadow: inset 0 0 0 3px var(--me); } .avbig img { width: 100%; height: 100%; object-fit: cover; }
.pid .pn { flex: 1; } .pid .pn > b { font-family: var(--title); font-weight: 400; font-size: 26px; } .pid .lvl { margin-top: 6px; padding-top: 0; box-shadow: none; }
.stg { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 16px; }
.stc { display: flex; flex-direction: column; align-items: center; padding: 10px 0; background: var(--slate2); }
.stc b { font-family: var(--title); font-weight: 400; font-size: 22px; } .stc small { font-size: 10px; font-weight: 700; color: var(--mute); text-transform: uppercase; letter-spacing: .04em; }
.pcol { width: 300px; display: flex; flex-direction: column; gap: 12px; }
.prank, .pfav { background: var(--slate); box-shadow: var(--plate-sh); padding: 8px 12px 12px; } .prank .ph, .pfav .ph { margin: -8px -12px 0; }
.fts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 10px; }
.ft { display: flex; flex-direction: column; align-items: center; background: var(--slate2); padding-bottom: 5px; } .ft img { width: 100%; height: 50px; object-fit: cover; }
.ft b { font-family: var(--title); font-weight: 400; font-size: 14px; margin-top: 3px; } .ft small { font-size: 9px; color: var(--mute); font-weight: 700; text-transform: uppercase; }
/* the history */
.hist { flex: 1; background: var(--slate); box-shadow: var(--plate-sh); padding: 8px 12px 10px; } .hist .ph { margin: -8px -12px 0; }
.filters { display: flex; gap: 4px; padding-right: 2px; }
.ft2 { height: 22px; padding: 0 10px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--mute); background: var(--deep); }
.ft2.on { background: var(--steel); color: #fff; }
.hlist { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }
.hrow { display: grid; grid-template-columns: 46px 74px 56px 76px 1fr 64px; align-items: center; gap: 10px; height: 41px; padding-right: 10px; background: var(--slate2); box-shadow: inset 4px 0 0 var(--me); }
.hrow.l { box-shadow: inset 4px 0 0 var(--op); }
.hpl { display: flex; align-items: baseline; justify-content: center; } .hpl b { font-family: var(--title); font-weight: 400; font-size: 22px; } .hpl small { font-size: 10px; font-weight: 700; color: var(--mute); }
.hm { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--mute); } .hm.cl { color: #8fbaff; }
.ha { display: flex; gap: 3px; } .ha .face { width: 26px; height: 26px; overflow: hidden; } .ha .face img { width: 100%; height: 100%; object-fit: cover; }
.hg { font-family: var(--title); font-weight: 400; font-size: 13px; } .hg.up { color: #8fbaff; } .hg.dn { color: var(--op-soft); }
.hrow .hg:not(.up):not(.dn) { color: var(--yel); }
.hr { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; }
.hw { display: flex; flex-direction: column; align-items: flex-end; } .hw b { font-family: var(--title); font-weight: 400; font-size: 12px; } .hw small { font-size: 10px; color: var(--mute); font-weight: 600; white-space: nowrap; }
.hc.empty { background: var(--deep); box-shadow: inset 0 -3px 0 var(--slate3); } .hc.empty b { color: var(--steel); }
/* the ends */
.kick.red { color: var(--op) !important; }
.eacts { display: flex; justify-content: center; gap: 10px; margin-top: 12px; } .eacts .btn.big { width: 140px; height: 40px; } .eacts .go.small { margin: 0 !important; }

/* the waits: a spinner (my result on its way) */
.spin { display: inline-block; width: 18px; height: 18px; border: 3px solid var(--steel); border-top-color: var(--mute); border-radius: 50%; animation: abspin .8s linear infinite; }
@keyframes abspin { to { transform: rotate(360deg); } }
.emine.wait { gap: 8px; } .emine.wait small { color: var(--mute); }
/* the queue's ring turns */
.sring .sp { transition: none; }
.modes.off { opacity: .55; pointer-events: none; }
.hmsg { position: absolute; left: 50%; bottom: calc(var(--b) + 6px); transform: translateX(-50%); z-index: 6; padding: 6px 14px; background: var(--slate); box-shadow: inset 4px 0 0 var(--op), var(--plate-sh); font-size: 12px; font-weight: 600; }
.newp .err { margin: 0; }
.sfoot .stxt { margin-bottom: 8px; } .sfoot .go + .btn.big { margin-top: 8px; }
.ccard.hub, .salon, .pcard, .hist, .hubseats { overflow: hidden; }
.hlist { overflow-y: auto; min-height: 0; flex: 1; } .hist { display: flex; flex-direction: column; }
.hist .say.empty, .pfav .say.empty { margin: 10px 2px; font-size: 12px; color: var(--mute); }
/* the rank's block, the queue's ring (classe.py, direction A's shared parts) */
.rt { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
.rt b { font-family: var(--title); font-weight: 400; font-size: 28px; line-height: 1; }
.rt small { font-size: 11px; font-weight: 600; color: var(--mute); }
.sring { position: relative; width: 104px; height: 104px; margin: 2px auto 8px; flex: none; }
.sring svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.sring circle { fill: none; stroke-width: 9; } .sring .tr { stroke: var(--deep); } .sring .sp { stroke: var(--me); stroke-dasharray: 80 247; }
.sring b { position: absolute; inset: 0; display: grid; place-items: center; font-family: var(--title); font-weight: 400; font-size: 26px; }
.hg.pl { font-family: var(--text); font-weight: 700; font-size: 11px; color: var(--mute) !important; }
.seat.q { grid-template-columns: 18px 22px minmax(0, 1fr) 24px 74px; } .seat.q .sr { white-space: nowrap; }
`;var $h="./assets/bungee-MGYHQTP2.woff2";var kh="./assets/rubik-2B7SUW46.woff2";var Hh={about:"pipeline/concepts/ile/terrain.py: rows from v = 0 (my corner) up, 0.5 m cells, u from -20 to 20; . out # ground ~ shallows w water",step:.5,half:20,frame:{cx:3166,cy:1324,ppm:70.8,image:"d.jpg"},rows:[".......................................##.......................................","......................................####......................................",".....................................######.....................................","....................................########....................................","...................................##########...................................","..................................############..................................","..................................############..................................",".................................##############.................................","...............................##################...............................","..............................####################..............................",".............................######################.............................","............................########################............................","...........................##########################...........................","..........................############################..........................",".........................##############################.........................","........................################################........................",".......................##################################.......................","......................####################################......................",".....................######################################.....................","....................########################################....................","...................##########################################...................","..................############################################..................",".................#########w##########################w#########.................","................###~~ww##wwww######################wwww##ww~~###................","...............###~wwwwwwwwwww####################wwwwwwwwwww~###...............","..............###~wwwwwwwwwwwww##################wwwwwwwwwwwww~###..............","..............##~wwwwwwwwwwwwwwwwwwwww####wwwwwwwwwwwwwwwwwwwww~##..............","............##~~wwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwww~~##............","...........##~~wwwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwwww~~##...........","...........#~~www~~~~~~wwwwwwwwwwwwwwww##wwwwwwwwwwwwwwww~~~~~~www~~#...........","..........#~~ww~~~~~~~~~wwwwwwwwwwwwwww##wwwwwwwwwwwwwww~~~~~~~~~ww~~#..........","........##~~ww~~~~~~~~~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~~~~~~~~~ww~~##........",".......##~~ww~~~~~####~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~####~~~~~ww~~##.......","......###~ww~~~~~######~~wwwwwwwwwwww######wwwwwwwwwwww~~######~~~~~ww~###......",".....####www~~~~#######~~wwwwwwwwww##########wwwwwwwwww~~#######~~~~www####.....","....#####ww~~~~########~~wwwwwwwww############wwwwwwwww~~########~~~~ww#####....","...######~~~~~#########~~wwwwwwwww############wwwwwwwww~~#########~~~~~######...","...######~~~~~#########~wwwwwwwww##############wwwwwwwww~#########~~~~~######...","...#####~~~~~##########wwwwwwwww################wwwwwwwww##########~~~~~#####...","w.######~~~~~######################################################~~~~~######.w","w.######~~~~~######################################################~~~~~######.w","...#####~~~~~##########wwwwwwwww################wwwwwwwww##########~~~~~#####...","...######~~~~~#########~wwwwwwwww##############wwwwwwwww~#########~~~~~######...","...######~~~~~#########~~wwwwwwwww############wwwwwwwww~~#########~~~~~######...","....#####ww~~~~########~~wwwwwwwww############wwwwwwwww~~########~~~~ww#####....",".....####www~~~~#######~~wwwwwwwwww##########wwwwwwwwww~~#######~~~~www####.....","......###~ww~~~~~######~~wwwwwwwwwwww######wwwwwwwwwwww~~######~~~~~ww~###......",".......##~~ww~~~~~####~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~####~~~~~ww~~##.......","........##~~ww~~~~~~~~~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~~~~~~~~~ww~~##........","..........#~~ww~~~~~~~~~wwwwwwwwwwwwwww##wwwwwwwwwwwwwww~~~~~~~~~ww~~#..........","...........#~~www~~~~~~wwwwwwwwwwwwwwww##wwwwwwwwwwwwwwww~~~~~~www~~#...........","...........##~~wwwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwwww~~##...........","............##~~wwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwww~~##............","..............##~wwwwwwwwwwwwwwwwwwwww####wwwwwwwwwwwwwwwwwwwww~##..............","..............###~wwwwwwwwwwwww##################wwwwwwwwwwwww~###..............","...............###~wwwwwwwwwww####################wwwwwwwwwww~###...............","................###~~ww##wwww######################wwww##ww~~###................",".................#########w##########################w#########.................","..................############################################..................","...................##########################################...................","....................########################################....................",".....................######################################.....................","......................####################################......................",".......................##################################.......................","........................################################........................",".........................##############################.........................","..........................############################..........................","...........................##########################...........................","............................########################............................",".............................######################.............................","..............................####################..............................","...............................##################...............................",".................................##############.................................","..................................############..................................","..................................############..................................","...................................##########...................................","....................................########....................................",".....................................######.....................................","......................................####......................................",".......................................##......................................."]};var xe=["barbarian","archer","tank","assassin","druid","whale","banner"],F3=["barbarian","archer","tank","assassin","druid","whale"],Xn=["barbarian","archer","tank","assassin","druid","whale"],_o=["heal","rage","portal"],Vn=[...xe,..._o],ms=[...F3,..._o],Fe=i=>i==="heal"||i==="rage"||i==="portal",Bh=["guardian","beast"],Ri=["hp","damage","attackSpeed","moveSpeed","range"],N3={id:"ile",name:"L\u2019\xEEle de l\u2019\xC9clat",width:40,length:40,shape:"diamond",terrain:Hh,starts:[[[0,0,40,12.5]],[[0,27.5,40,40]]],places:[{id:"centre",name:"l\u2019\xC9clat",x:20,y:20},{id:"banc-ouest",name:"le banc de sable ouest",x:9,y:20},{id:"banc-est",name:"le banc de sable est",x:31,y:20}],monsters:[{kind:"beast",at:0,place:1},{kind:"beast",at:0,place:2}]},Fh={id:"plaine",name:"La plaine",width:28,length:40,shape:"rect",starts:[[[0,0,28,9.5]],[[0,30.5,28,40]]],places:[{id:"centre",name:"l\u2019\xC9clat",x:14,y:20},{id:"banc-ouest",name:"le banc de sable ouest",x:3,y:20},{id:"banc-est",name:"le banc de sable est",x:25,y:20}],monsters:[{kind:"beast",at:0,place:1},{kind:"beast",at:0,place:2}]},ho=[N3],k={tickHz:20,arena:{eclatRadius:1.4},battle:{maxSeconds:90,countdown:5,aggro:8,retargetTicks:4,dropGap:{base:.1,perPlace:.15},separation:.5},troops:{barbarian:{places:1,hp:230,damage:15.5,attackSpeed:1.05,moveSpeed:.9,range:1,radius:.35,mass:1,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!1},archer:{places:1,hp:70,damage:8.5,attackSpeed:1,moveSpeed:.85,range:6.5,radius:.35,mass:1,rangeUpgradable:!0,ranged:!0,flying:!1,hitsAir:!0,splash:0,crowd:!1,anchored:!1},tank:{places:5,hp:1060,damage:40,attackSpeed:.6,moveSpeed:.625,range:1.2,radius:.7,mass:5,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!1},assassin:{places:2,hp:260,damage:56,attackSpeed:.8,moveSpeed:1.35,range:1,radius:.35,mass:1.2,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!1},druid:{places:3,hp:190,damage:18,attackSpeed:.55,moveSpeed:.775,range:7,radius:.35,mass:1,rangeUpgradable:!0,ranged:!0,flying:!1,hitsAir:!0,splash:1.5,crowd:!1,anchored:!1},whale:{places:4,hp:500,damage:50,attackSpeed:.34,moveSpeed:.6,range:2,radius:1.2,mass:3,rangeUpgradable:!1,ranged:!1,flying:!0,hitsAir:!1,splash:1.2,crowd:!0,anchored:!1},banner:{places:3,hp:250,damage:0,attackSpeed:0,moveSpeed:0,range:0,radius:.45,mass:1,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!0}},banner:{radius:4,seconds:15,monsterGap:3},half:{reach:.5,enemyGap:3.5},spells:{heal:{places:2,radius:3,seconds:8,heal:.08},rage:{places:2,radius:3,seconds:8,damage:.5,attackSpeed:.3},portal:{places:2,radius:3.5,seconds:12,drop:!0}},monsters:{guardian:{name:"Le gardien de l\u2019\xC9clat",hp:2400,damage:60,attackSpeed:.7,moveSpeed:1,range:1.4,radius:1.1,mass:8,sight:7,leash:4,splash:1.2,boon:{stat:"damage",value:.2}},beast:{name:"La b\xEAte du lac",hp:1500,damage:35,attackSpeed:.8,moveSpeed:.7,range:1.2,radius:.9,mass:5,sight:6,leash:4,splash:0,boon:{stat:"damage",value:.4}}},monsterCall:{announce:5,afterDeath:5},assassinHunt:12,taunt:{every:5,radius:5,seconds:2},army:{startPlaces:10,maxPlaces:40,step:2,stepCost:3,stepRise:1},economy:{goldPerRound:7,startGold:3,reroll:2,offers:4},rarities:[{id:"common",name:"Commune",bonus:.15,cost:2,early:70,late:25},{id:"rare",name:"Rare",bonus:.3,cost:3,early:24,late:35},{id:"epic",name:"\xC9pique",bonus:.5,cost:4,early:5,late:27},{id:"legendary",name:"L\xE9gendaire",bonus:.8,cost:6,early:1,late:13}],lateRound:12,statScale:{moveSpeed:.5},hp:{start:100,damage:{base:5,perRound:1.7,perPlace:.8,max:40}},round:{prep:30,battle:95,results:5},maxRounds:40,match:{players:8,humanPairWeight:.35,pairingTries:24},bots:{firstWave:.55,counter:.25,firstWaveTicks:[6,30],reserveAfter:40,banners:[100,0,0],bannerPlaces:15,bannerBeyond:3,bannerBack:4.5,focusOne:.5,bankLane:6,spellPlaces:12,healAt:.35,ragePlaces:6,pushAfter:12,capacityEagerUntil:6,rerollsPerRound:1,playedShare:.15},net:{delayTicks:8,cutSeconds:3,lostSeconds:3,sendEvery:50,grace:3,launchDelay:5,readyDelay:2}},Me=1/k.tickHz,wr=k.battle.maxSeconds*k.tickHz,ii=k.round.prep+k.round.battle+k.round.results,X3={barbarian:"Barbare",archer:"Archer",tank:"Tank",assassin:"Assassin",druid:"Druidesse",whale:"Baleine",banner:"Porte-\xE9tendard"},J3={heal:"Gu\xE9rison",rage:"Rage",portal:"Portail"},ri={...X3,...J3},Pr=i=>Fe(i)?k.spells[i].places:k.troops[i].places,Di={hp:"PV",damage:"D\xE9g\xE2ts",attackSpeed:"Vitesse d\u2019attaque",moveSpeed:"D\xE9placement",range:"Port\xE9e"};var Nh=k.round,$o=i=>(i-1)*ii,Sn=i=>$o(i)+Nh.prep,Lr=i=>Sn(i)+k.battle.countdown,Mi=i=>Sn(i)+Nh.battle,gs=i=>Mi(i)+k.net.grace;var z3=new Set(["buy","reroll","cap","army","pick","sell"]);function Ts(i,t,e,n=0){if(t<1)return!1;if(i==="drops"||i==="takeover"||i==="end")return t>n&&e>=Sn(t)&&e<gs(t);let o=z3.has(i)&&t>1?Sn(t-1):$o(t);return e>=o&&e<Sn(t)}var Q3=0,Nl=()=>`${Date.now().toString(36)}-${(Q3++).toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,Es=class{constructor(t,e,n=()=>performance.now()/1e3,o=0){S(this,"seed",t);S(this,"now",n);S(this,"solo",!0);S(this,"humans");S(this,"mySeat",0);S(this,"log",[]);S(this,"offset");S(this,"onChange");this.humans=[e],this.offset=-this.now()-o}clock(){return this.now()+this.offset}post(t,e,n){let o=Nl();return Ts(e,t,this.clock())&&this.log.push({seq:this.log.length,seat:this.mySeat,round:t,kind:e,data:n,cid:o}),o}confirmed(){return this.log}syncedTo(){return 1/0}pending(){return[]}skip(t){let e=this.clock();t>e&&(this.offset+=t-e)}close(){}};var j3={".":0,"#":1,"~":2,w:3},Xh=1073741823,Ra=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],Z3=128,Y3=8,Ur=class Ur{constructor(t){S(this,"step");S(this,"nx");S(this,"ny");S(this,"cells");S(this,"near");S(this,"fields",new Map);S(this,"zones",new Map);let e=t.terrain;this.step=e.step,this.nx=Math.round(t.width/e.step),this.ny=Math.round(t.length/e.step),this.cells=new Uint8Array(this.nx*this.ny);for(let n=0;n<this.ny;n++){let o=e.rows[n]??"";for(let r=0;r<this.nx;r++)this.cells[r+n*this.nx]=j3[o[r]??"."]??0}this.near=this.nearest()}static of(t){if(!t.terrain)return null;let e=Ur.cache.get(t.terrain);return e||(e=new Ur(t),Ur.cache.set(t.terrain,e)),e}cell(t,e){let n=Math.floor(t/this.step),o=Math.floor(e/this.step);return n<0||o<0||n>=this.nx||o>=this.ny?-1:n+o*this.nx}kind(t,e){let n=this.cell(t,e);return n<0?0:this.cells[n]}inField(t,e){return this.kind(t,e)!==0}walkable(t,e){let n=this.kind(t,e);return n===1||n===2}open(t){let e=this.cells[t];return e===1||e===2}foot(t,e){let n=this.cell(t,e);if(n<0||this.open(n))return[t,e];let o=this.near[n];return o>=0?this.centre(o):[t,e]}centre(t){return[(t%this.nx+.5)*this.step,(Math.floor(t/this.nx)+.5)*this.step]}clear(t,e,n,o){let r=n-t,a=o-e,p=Math.sqrt(r*r+a*a),s=Math.ceil(p/(this.step*.5));for(let u=1;u<=s;u++)if(!this.walkable(t+r*u/s,e+a*u/s))return!1;return!0}field(t,e){let n=this.cell(t,e);n<0&&(n=this.cell(t<0?0:t>=this.nx*this.step?this.nx*this.step-1e-6:t,e<0?0:e>=this.ny*this.step?this.ny*this.step-1e-6:e));let o=this.near[n],r=this.fields.get(o);return r?(this.fields.delete(o),this.fields.set(o,r),r):(r=this.dijkstra([o]),this.fields.set(o,r),this.fields.size>Z3&&this.fields.delete(this.fields.keys().next().value),r)}zone(t){let e=t.map(r=>r.join(",")).join(";"),n=this.zones.get(e);if(n)return n;let o=[];for(let r=0;r<this.cells.length;r++){if(!this.open(r))continue;let[a,p]=this.centre(r);t.some(s=>a>=s[0]&&a<=s[2]&&p>=s[1]&&p<=s[3])&&o.push(r)}return n=this.dijkstra(o),this.zones.set(e,n),n}heading(t,e,n){let o=this.cell(t,e);if(o<0||n[o]>=Xh||n[o]===0)return null;let r=[];for(let a=0;a<Y3;a++){let p=this.down(o,n);if(p<0||(r.push(p),o=p,n[p]===0))break}if(!r.length)return null;for(let a=r.length-1;a>0;a--){let p=this.centre(r[a]);if(this.clear(t,e,p[0],p[1]))return p}return this.centre(r[0])}down(t,e){let n=t%this.nx,o=(t-n)/this.nx,r=-1,a=e[t];for(let p=0;p<8;p++){let s=this.move(n,o,Ra[p][0],Ra[p][1]);s>=0&&e[s]<a&&(a=e[s],r=s)}return r}move(t,e,n,o){let r=t+n,a=e+o;if(r<0||a<0||r>=this.nx||a>=this.ny)return-1;let p=r+a*this.nx;return!this.open(p)||n!==0&&o!==0&&(!this.open(r+e*this.nx)||!this.open(t+a*this.nx))?-1:p}dijkstra(t){let e=new Int32Array(this.cells.length).fill(Xh),n=new Xl;for(let o of t)e[o]=0,n.push(0,o);for(;n.size;){let o=n.topKey(),r=n.pop();if(o>e[r])continue;let a=r%this.nx,p=(r-a)/this.nx,s=this.cells[r]===2?2:1;for(let u=0;u<8;u++){let f=this.move(a,p,Ra[u][0],Ra[u][1]);if(f<0)continue;let l=this.cells[f]===2?2:1,c=o+(u<4?5:7)*(s+l);c<e[f]&&(e[f]=c,n.push(c,f))}}return e}nearest(){let t=new Int32Array(this.cells.length).fill(-1),e=[];for(let n=0;n<this.cells.length;n++)this.open(n)&&(t[n]=n,e.push(n));for(let n=0;n<e.length;n++){let o=e[n],r=o%this.nx,a=(o-r)/this.nx;for(let[p,s]of Ra){let u=r+p,f=a+s;if(u<0||f<0||u>=this.nx||f>=this.ny)continue;let l=u+f*this.nx;t[l]<0&&(t[l]=t[o],e.push(l))}}for(let n=0;n<t.length;n++)t[n]<0&&(t[n]=n);return t}};S(Ur,"cache",new WeakMap);var Cr=Ur,Xl=class{constructor(){S(this,"k",[]);S(this,"v",[])}get size(){return this.k.length}topKey(){return this.k[0]}push(t,e){let n=this.k,o=this.v,r=n.length;for(n.push(t),o.push(e);r>0;){let a=r-1>>1;if(n[a]<t||n[a]===t&&o[a]<=e)break;n[r]=n[a],o[r]=o[a],r=a}n[r]=t,o[r]=e}pop(){let t=this.k,e=this.v,n=e[0],o=t.pop(),r=e.pop(),a=t.length;if(a){let p=0;for(;;){let s=2*p+1,u=s+1,f=p,l=o,c=r;if(s<a&&(t[s]<l||t[s]===l&&e[s]<c)&&(f=s,l=t[s],c=e[s]),u<a&&(t[u]<l||t[u]===l&&e[u]<c)&&(f=u,l=t[u],c=e[u]),f===p)break;t[p]=t[f],e[p]=e[f],p=f}t[p]=o,e[p]=r}return n}};var Ut=(i,t,e,n,o,r,a)=>({id:i,code:t,name:o,text:r,tier:e,family:n,tags:a}),Jl=[Ut("rampart","R1",1,"lien","Rempart","Quand le colosse crie, les alli\xE9s \xE0 4 m de lui prennent 25 % de d\xE9g\xE2ts en moins pendant 2 s.",["tank","archer","druid"]),Ut("phalanx","R2",1,"lien","Phalange","Les barbares \xE0 3 m d\u2019un colosse alli\xE9 ont +40 % de PV.",["tank","barbarian"]),Ut("pack","R3",1,"lien","Meute","Chaque barbare alli\xE9 \xE0 3 m donne +5 % de vitesse d\u2019attaque \xE0 un barbare (50 % au plus).",["barbarian"]),Ut("bloodlust","R4",1,"lien","Sang pour sang","Sous la rage, chaque coup soigne de 20 % des d\xE9g\xE2ts qu\u2019il porte.",["rage","barbarian","assassin"]),Ut("sap","R5",1,"lien","S\xE8ve","Chaque foudre de la druidesse soigne de 5 % de leur vie les alli\xE9s autour de sa cible.",["druid","barbarian","tank"]),Ut("counterhunt","R6",1,"lien","Contre-chasse","Les arch\xE8res visent d\u2019abord les assassins ennemis \xE0 leur port\xE9e.",["archer"]),Ut("bodyguard","R7",1,"lien","Garde rapproch\xE9e","Quand une arch\xE8re alli\xE9e est frapp\xE9e, l\u2019assassin alli\xE9 le plus proche (8 m) part frapper l\u2019agresseur.",["assassin","archer"]),Ut("marked","R8",1,"lien","Cible marqu\xE9e","Un ennemi touch\xE9 par une arch\xE8re prend +25 % de d\xE9g\xE2ts de tes troupes de m\xEAl\xE9e pendant 2 s.",["archer","barbarian","assassin"]),Ut("chain","R9",1,"lien","Foudre en cha\xEEne","La foudre de la druidesse rebondit sur un second ennemi \xE0 3 m, \xE0 moiti\xE9 de ses d\xE9g\xE2ts.",["druid"]),Ut("shockwave","R10",1,"lien","Onde de choc","L\u2019\xE9clat de la baleine \xE9tourdit 0,5 s les ennemis qu\u2019il touche.",["whale","barbarian"]),Ut("noquarter","R11",1,"chef","Pas de quartier","Tu poses \xE0 2 m des ennemis et des b\xEAtes (au lieu de 3,5).",["pose","assassin","barbarian"]),Ut("tide","R12",1,"chef","Mar\xE9e","Tes troupes marchent \xE0 pleine vitesse dans les hauts-fonds.",["carte","bete"]),Ut("vanguard","R13",1,"chef","Avant-garde","Tes 6 premi\xE8res places pos\xE9es dans une bataille ont un bouclier de 30 % de leurs PV.",["pose","barbarian","archer"]),Ut("quickhand","R14",1,"chef","Main leste","Tu poses deux fois plus vite (la cadence entre deux poses divis\xE9e par 2).",["pose","barbarian","archer"]),Ut("hidden","R15",1,"chef","Embusqu\xE9s","Tes troupes pos\xE9es depuis moins de 3 s ne peuvent pas \xEAtre vis\xE9es.",["pose","archer","druid"]),Ut("firstblood","R16",1,"chef","Premier sang","La premi\xE8re troupe ennemie que tu tues dans une bataille fait appara\xEEtre 2 barbares \xE0 toi, l\xE0 o\xF9 elle tombe.",["barbarian","pose"]),Ut("bridgeward","R17",1,"chef","Gardien du pont","Une troupe \xE0 toi qui tient un pont depuis 5 s se soigne de 3 % de sa vie par seconde.",["carte","tank"]),Ut("hunter","R18",1,"chef","Chasse \xE0 la b\xEAte","Tes troupes font +100 % de d\xE9g\xE2ts aux b\xEAtes.",["bete"]),Ut("fearless","R19",1,"chef","Sans peur","Les b\xEAtes ne te font que la moiti\xE9 de leurs d\xE9g\xE2ts.",["bete","barbarian"]),Ut("cheapspells","R20",1,"chef","Sorts au rabais","Tes sorts prennent 1 place de moins.",["heal","rage","portal"]),Ut("rush","R21",1,"chef","\xC9lan","Tes troupes pos\xE9es dans les 10 premi\xE8res secondes de la bataille marchent 50 % plus vite pendant 6 s.",["pose","assassin"]),Ut("bounty","R22",1,"chef","Chasseur de primes","+1 or au round suivant par tranche de 6 places ennemies tu\xE9es.",["boutique"]),Ut("thrifty","R23",1,"chef","\xC9conome","Chaque palier de places co\xFBte 1 or de moins.",["boutique","toutes"]),Ut("rummage","R24",1,"chef","Fouineur","Ton premier reroll de chaque round est gratuit.",["boutique"]),Ut("savings","R25",1,"chef","Bas de laine","Au d\xE9but du round, +1 or par tranche de 10 or gard\xE9s (2 au plus).",["boutique"]),Ut("storm","E1",2,"lien","Temp\xEAte","Sous la rage, la foudre de la druidesse touche deux fois plus large.",["druid","rage"]),Ut("ambush","E2",2,"lien","Embuscade","Un assassin pos\xE9 dans un portail triple son premier coup.",["assassin","portal"]),Ut("shadow","E3",2,"lien","Ombre de la baleine","Les assassins sous une baleine alli\xE9e ne peuvent pas \xEAtre vis\xE9s par les tireurs.",["whale","assassin"]),Ut("rider","E4",2,"lien","Cavali\xE8re","Une baleine qui meurt l\xE2che 3 barbares l\xE0 o\xF9 elle tombe.",["whale","barbarian"]),Ut("livingshield","E5",2,"lien","Bouclier vivant","Un colosse prend \xE0 sa place la moiti\xE9 des d\xE9g\xE2ts re\xE7us par les arch\xE8res et druidesses \xE0 3 m de lui.",["tank","archer","druid"]),Ut("magnet","E6",2,"lien","Aimant","Le cri du colosse tire les ennemis \xE0 5 m de 2 m vers lui : ils se serrent sous la foudre et l\u2019\xE9clat.",["tank","druid","whale"]),Ut("duo","E7",2,"lien","Duo","Une arch\xE8re \xE0 3 m d\u2019un barbare alli\xE9 tire aussi sur un second ennemi, \xE0 chaque fl\xE8che.",["archer","barbarian"]),Ut("martyr","E8",2,"lien","Martyr","Un barbare qui meurt soigne de 10 % de leur vie les alli\xE9s \xE0 3 m.",["barbarian","tank"]),Ut("nest","E9",2,"lien","Nid","Chaque baleine porte 2 arch\xE8res sur son dos : elles tirent de l\xE0-haut, la m\xEAl\xE9e ne les touche pas, elles tombent avec elle.",["whale","archer"]),Ut("blaze","E10",2,"lien","Brasier","Ta rage br\xFBle aussi les ennemis dans sa zone (2 % de leur vie par seconde).",["rage","tank"]),Ut("sanctuary","E11",2,"lien","Sanctuaire","Une troupe \xE0 toi qui meurt dans ta gu\xE9rison revient une fois, \xE0 30 % de sa vie.",["heal"]),Ut("longspells","E12",2,"chef","Sorts longs","Tes sorts durent deux fois plus longtemps.",["heal","rage","portal"]),Ut("heldportal","E13",2,"chef","Portail tenu","Ton portail reste ouvert toute la bataille, \xE0 la moiti\xE9 de son rayon.",["portal","pose"]),Ut("conquest","E14",2,"chef","Terrain conquis","Ta zone de pose avance de 4 m au-del\xE0 du milieu.",["pose"]),Ut("decoy","E15",2,"chef","Leurre","Au d\xE9but de chaque bataille, un faux colosse appara\xEEt sur ta rive : il attire les coups et ne frappe pas.",["pose","archer","druid"]),Ut("flood","E16",2,"chef","Mar\xE9e humaine","Chaque fois que tu poses 8 places en moins de 4 s, 2 barbares de plus arrivent avec elles.",["barbarian","archer"]),Ut("relief","E17",2,"chef","Rel\xE8ve","Quand une de tes troupes meurt, ta pose suivante part tout de suite, sans attendre la cadence.",["pose","barbarian"]),Ut("patience","E18",2,"chef","Patience","Si ta premi\xE8re troupe se pose apr\xE8s 15 s de bataille, toutes celles pos\xE9es dans les 10 s qui suivent ont +40 % de PV.",["pose"]),Ut("laststand","E19",2,"chef","Dernier carr\xE9","Quand il te reste moins d\u2019un quart de tes places sur le terrain, elles font +50 % de d\xE9g\xE2ts.",["toutes"]),Ut("secondwind","E20",2,"chef","Second souffle","La premi\xE8re troupe de chaque type qui meurt dans une bataille revient 5 s plus tard, \xE0 moiti\xE9 de sa vie.",["toutes"]),Ut("plunder","E21",2,"chef","Pillard","Chaque b\xEAte que tu ach\xE8ves donne +2 or, et l\u2019enclume te propose 5 offres.",["bete","boutique"]),Ut("revenge","E22",2,"chef","Revanche","Apr\xE8s un round perdu, ta boutique suivante tire chaque offre une raret\xE9 au-dessus.",["boutique","pv"]),Ut("thickskin","E23",2,"chef","Cuir \xE9pais","Quand tu perds un round, tu perds 4 PV de moins.",["pv"]),Ut("specialist","E24",2,"chef","Sp\xE9cialiste","Si ton arm\xE9e n\u2019a qu\u2019un seul type de troupe (sorts \xE0 part), chaque offre de ta boutique vise ce type et co\xFBte 1 or de moins.",["boutique"]),Ut("echo","L1",3,"chef","\xC9cho","Chaque sort que tu emportes compte double : tu le lances deux fois, sans place de plus.",["heal","rage","portal"]),Ut("shades","L2",3,"chef","Arm\xE9e des ombres","Chaque troupe \xE0 toi qui meurt revient une fois en ombre, \xE0 30 % de sa vie, pendant 10 s.",["toutes"]),Ut("legion","L3",3,"lien","L\xE9gion","Tes barbares arrivent par deux pour une place.",["barbarian"]),Ut("mother","L4",3,"lien","M\xE8re des baleines","Chaque baleine pos\xE9e en am\xE8ne une petite (moiti\xE9 de sa vie et de ses d\xE9g\xE2ts, sans place).",["whale"]),Ut("king","L5",3,"chef","Roi de l\u2019\xC9clat","Tes troupes sur l\u2019\xEEle de l\u2019\xC9clat se soignent de 4 % par seconde et frappent 30 % plus fort.",["carte","tank"]),Ut("ironhand","L6",3,"chef","Main de fer","Tu poses n\u2019importe o\xF9 sur le terrain, \xE0 3,5 m des ennemis.",["pose"]),Ut("column","L7",3,"lien","Colonne","Chaque colosse pos\xE9 ouvre un portail sur lui : tu poses autour de lui tant qu\u2019il vit.",["tank","pose"]),Ut("promotion","L8",3,"lien","Promotion","Un barbare qui ach\xE8ve 3 ennemis devient un colosse.",["barbarian","tank"]),Ut("execute","L9",3,"lien","Assassinat","Tes assassins tuent d\u2019un coup toute troupe sous 25 % de sa vie.",["assassin"]),Ut("siege","L10",3,"lien","Tir de si\xE8ge","Une arch\xE8re qui ne bouge pas depuis 2 s tire 50 % plus loin.",["archer","tank"]),Ut("tempest","L11",3,"chef","Orage","Toutes les 6 s, une foudre tombe sur le groupe ennemi le plus serr\xE9, o\xF9 qu\u2019il soit.",["druid","whale"]),Ut("heritage","L12",3,"chef","H\xE9ritage","Le bonus de la premi\xE8re b\xEAte que tu ach\xE8ves dans une bataille reste pour toute la partie (une fois).",["bete"]),Ut("treasure","L13",3,"chef","Tr\xE9sor","+12 or tout de suite, et ta boutique a une offre de plus pour le reste de la partie.",["boutique"]),Ut("backtowall","L14",3,"chef","Dos au mur","Tant que tu as le moins de PV des joueurs encore en vie, tes troupes font +30 % de d\xE9g\xE2ts et tu poses deux fois plus vite.",["pv"])],zl=[{id:"beastblood",code:"B1",name:"Sang de la b\xEAte",text:"Le bonus d\u2019une b\xEAte que tu ach\xE8ves passe de +40 % \xE0 +60 % de d\xE9g\xE2ts.",tags:["bete"]},{id:"roar",code:"B2",name:"Rugissement",text:"Quand tu ach\xE8ves une b\xEAte, tes troupes \xE0 6 m d\u2019elle se soignent de 30 % de leur vie.",tags:["bete"]},{id:"lakepack",code:"B3",name:"Meute du lac",text:"Quand tu ach\xE8ves une b\xEAte, 3 barbares \xE0 toi apparaissent l\xE0 o\xF9 elle tombe.",tags:["bete","barbarian"]},{id:"devourer",code:"B4",name:"D\xE9voreur",text:"La troupe qui ach\xE8ve une b\xEAte se soigne enti\xE8rement et gagne +50 % de PV pour la bataille.",tags:["bete"]},{id:"lakeloot",code:"B5",name:"Butin du lac",text:"+1 or \xE0 chaque round.",tags:["boutique"]},{id:"scales",code:"B6",name:"\xC9cailles",text:"Tes troupes prennent 15 % de d\xE9g\xE2ts en moins des tireurs.",tags:["toutes"]},{id:"lakecry",code:"B7",name:"Cri du lac",text:"Quand tu ach\xE8ves une b\xEAte, les ennemis \xE0 6 m d\u2019elle sont \xE9tourdis 1 s.",tags:["bete"]},{id:"fineanvil",code:"B8",name:"Enclume fine",text:"Les offres de ton enclume sont tir\xE9es une raret\xE9 au-dessus.",tags:["bete","boutique"]},{id:"charmer",code:"B9",name:"Charmeur",text:"Les b\xEAtes frappent d\u2019abord les troupes de ton adversaire.",tags:["bete"]},{id:"doubletrophy",code:"B10",name:"Double troph\xE9e",text:"Le bonus de la seconde b\xEAte que tu ach\xE8ves dans une bataille compte double.",tags:["bete"]}],bo=Object.fromEntries([...Jl,...zl].map(i=>[i.id,i]));var tn=i=>`${Math.round(i*100)} %`,xr=["barbarian","archer","tank","assassin","druid","whale"],Vs=[{id:"heavyarrows",code:"O2",family:"trade",name:"Fl\xE8ches lourdes",troops:["archer"],up:{gain:{damage:.35},loss:{hp:-.3}},text:i=>`+${tn(.35*i)} de d\xE9g\xE2ts, \u221230 % de PV.`,tags:["archer"]},{id:"bastion",code:"O3",family:"trade",name:"Bastion",troops:["tank"],up:{gain:{hp:.6},loss:{moveSpeed:-.3}},text:i=>`+${tn(.6*i)} de PV, \u221230 % de vitesse.`,tags:["tank"]},{id:"berserk",code:"O4",family:"trade",name:"Berserk",troops:["barbarian"],up:{gain:{attackSpeed:.4},loss:{hp:-.15}},text:i=>`+${tn(.4*i)} de vitesse d\u2019attaque, \u221215 % de PV.`,tags:["barbarian"]},{id:"shortblade",code:"O5",family:"trade",name:"Lame courte",troops:["assassin"],up:{gain:{damage:.4},loss:{}},text:i=>`+${tn(.4*i)} de d\xE9g\xE2ts, mais il frappe le plus proche au lieu de chasser les tireurs.`,tags:["assassin"]},{id:"widestorm",code:"O6",family:"trade",name:"Foudre large",troops:["druid"],up:{gain:{},loss:{damage:-.25}},power:.5,text:i=>`Foudre ${tn(i)} plus large, \u221225 % de d\xE9g\xE2ts.`,tags:["druid"]},{id:"lowflight",code:"O7",family:"trade",name:"Vol bas",troops:["whale"],up:{gain:{moveSpeed:.5},loss:{}},text:i=>`+${tn(.5*i)} de vitesse, mais les troupes de m\xEAl\xE9e peuvent la frapper.`,tags:["whale"]},{id:"rageborn",code:"O8",family:"cond",name:"N\xE9 de la rage",troops:xr,power:.4,text:i=>`+${tn(i)} de d\xE9g\xE2ts sous la rage.`,tags:["rage"]},{id:"mending",code:"O9",family:"cond",name:"Soins re\xE7us",troops:xr,power:1,text:i=>`La gu\xE9rison la soigne ${tn(1+i)} (au lieu de 100 %).`,tags:["heal"]},{id:"portalborn",code:"O10",family:"cond",name:"Passe-portail",troops:xr,power:.3,text:i=>`+${tn(i)} de PV si elle est pos\xE9e dans un portail.`,tags:["portal"]},{id:"beastbane",code:"O11",family:"cond",name:"Fl\xE9au des b\xEAtes",troops:xr,power:.6,text:i=>`+${tn(i)} de d\xE9g\xE2ts contre les b\xEAtes.`,tags:["bete"]},{id:"giantbane",code:"O12",family:"cond",name:"Tueur de g\xE9ants",troops:xr,power:.4,text:i=>`+${tn(i)} de d\xE9g\xE2ts contre les colosses et les baleines.`,tags:["toutes"]},{id:"bridgehold",code:"O13",family:"cond",name:"Tient le pont",troops:xr,power:.3,text:i=>`${tn(Math.min(.6,i))} de d\xE9g\xE2ts en moins sur un pont.`,tags:["carte"]},{id:"skybane",code:"O14",family:"cond",name:"Chasse au ciel",troops:["archer","druid"],power:.4,text:i=>`+${tn(i)} de d\xE9g\xE2ts contre ce qui vole.`,tags:["whale"]},{id:"rangedbane",code:"O15",family:"cond",name:"Chasse aux tireurs",troops:["barbarian","assassin","tank"],power:.4,text:i=>`+${tn(i)} de d\xE9g\xE2ts contre les tireurs.`,tags:["archer","druid"]},{id:"stunblow",code:"O16",family:"effect",name:"Coup sourd",troops:["barbarian"],power:1,text:i=>`1 coup sur ${Da(6,i)} \xE9tourdit sa cible 0,5 s.`,tags:["barbarian"]},{id:"pierce",code:"O17",family:"effect",name:"Transperce",troops:["archer"],power:1,text:i=>`1 fl\xE8che sur ${Da(5,i)} touche aussi l\u2019ennemi derri\xE8re.`,tags:["archer"]},{id:"thorns",code:"O18",family:"effect",name:"\xC9pines",troops:["tank"],power:.15,text:i=>`Renvoie ${tn(i)} des d\xE9g\xE2ts de m\xEAl\xE9e qu\u2019il re\xE7oit.`,tags:["tank"]},{id:"opener",code:"O19",family:"effect",name:"Premier coup",troops:["assassin"],power:.5,text:i=>`Son premier coup sur une nouvelle cible fait +${tn(i)}.`,tags:["assassin"]},{id:"slowbolt",code:"O20",family:"effect",name:"Foudre lente",troops:["druid"],power:.15,text:i=>`Sa foudre ralentit de ${tn(Math.min(.6,i))} pendant 2 s.`,tags:["druid"]},{id:"puddle",code:"O21",family:"effect",name:"Flaque de cristal",troops:["whale"],power:1,text:i=>`Son \xE9clat laisse une flaque qui ralentit de 30 % pendant ${(3*i).toFixed(1).replace(".",",").replace(",0","")} s.`,tags:["whale"]}],yo=Object.fromEntries(Vs.map(i=>[i.id,i]));function Da(i,t){let e=Math.round(i/t);return e<2?2:e}var Ai=i=>k.rarities[i].bonus/k.rarities[1].bonus,K={rounds:[1,3,6,9],beastRounds:[4,7,10],offers:4,sequences:[[1,2,2,3],[2,1,3,2],[1,1,2,3],[2,2,2,2],[1,2,3,3],[2,1,2,3]],families:{stat:40,trade:20,cond:20,effect:20},shopLean:.6,rampart:{radius:4,cut:.25,seconds:2},phalanx:{radius:3,hp:.4},pack:{radius:3,each:.05,max:.5},bloodlust:.2,sap:{heal:.05,radius:2.5},bodyguard:8,marked:{more:.25,seconds:2},chain:{radius:3,share:.5},shockwave:.5,noquarter:2,vanguard:{places:6,shield:.3},hidden:3,firstblood:2,bridgeward:{after:5,heal:.03},hunter:1,fearless:.5,rush:{within:10,speed:.5,seconds:6},bounty:6,savings:{per:10,max:2},storm:2,ambush:3,livingshield:{radius:3,share:.5},magnet:{radius:5,pull:2},duo:3,martyr:{radius:3,heal:.1},nest:2,blaze:.02,sanctuary:.3,conquest:4,decoy:.5,flood:{places:8,seconds:4,barbarians:2},patience:{after:15,within:10,hp:.4},laststand:{share:.25,damage:.5},secondwind:{seconds:5,hp:.5},plunder:{gold:2,offers:5},thickskin:4,shades:{hp:.3,seconds:10},mother:.5,king:{radius:3.8,heal:.04,damage:.3},column:3,promotion:3,execute:.25,siege:{still:2,range:1.5},tempest:{every:6,damage:40,radius:1.5},treasure:{gold:12,offers:1},backtowall:{damage:.3},beastblood:.2,roar:{radius:6,heal:.3},lakepack:3,devourer:.5,scales:.15,lakecry:{radius:6,seconds:1},stun:.5,slowSeconds:2,puddle:{radius:1.2,slow:.3,seconds:3}};var we=2,Jh=()=>({aug:{},shop:{},kept:0}),zh=()=>({stunUntil:-1,slowUntil:-1,slow:0,guardUntil:-1,shield:0,hiddenUntil:-1,markUntil:-1,markSide:-1,summoned:!1,revived:!1,shadeUntil:-1,portal:!1,blows:0,lastTarget:-1,kills:0,riderOf:-1,rushUntil:-1,bridgeSince:-1,low:!1}),Us=k.arena,Ia=k.battle,Ma=k.banner,Qh=k.half,jh=k.monsterCall,ws=k.spells,Zh=()=>({hits:[],deaths:[],landed:[],refused:[],blasts:[],cries:[],rose:[],slain:[],cast:[]}),Jn=()=>({barbarian:0,archer:0,tank:0,assassin:0,druid:0,whale:0,banner:0,heal:0,rage:0,portal:0});function Rr(){let i={};for(let t of xe){i[t]={};for(let e of Ri)i[t][e]=0}return i}var Ql=i=>Vn.reduce((t,e)=>t+(i[e]??0)*Pr(e),0),q3=i=>xe.reduce((t,e)=>t+(i[e]??0),0);function _a(i,t){let e=k.troops[i],n=t[i];return{hp:e.hp*(1+n.hp),damage:e.damage*(1+n.damage),attackSpeed:e.attackSpeed*(1+n.attackSpeed),moveSpeed:e.moveSpeed*(1+n.moveSpeed),range:e.range*(1+(e.rangeUpgradable?n.range:0))}}var Dr=i=>Math.round((Ia.dropGap.base+Ia.dropGap.perPlace*Pr(i))*k.tickHz);function Cs(i,t,e){let n=Cr.of(i);if(n)return n.inField(t,e);if(i.shape==="rect")return t>=0&&t<=i.width&&e>=0&&e<=i.length;let o=i.width/2,r=i.length/2,a=t-o,p=e-r;return(a<0?-a:a)/o+(p<0?-p:p)/r<=1}function K3(i,t,e){let n=Cr.of(i);return n?n.walkable(t,e):Cs(i,t,e)}function tm(i,t,e){let n=t-i.width/2,o=e-i.length/2;return n*n+o*o<Us.eclatRadius*Us.eclatRadius}var em=(i,t,e)=>t>=i[0]&&t<=i[2]&&e>=i[1]&&e<=i[3],Yh=(i,t,e,n)=>i.starts[t].some(o=>em(o,e,n)),nm=Fh,vr=class{constructor(t,e={}){S(this,"tick",0);S(this,"units",[]);S(this,"stock");S(this,"killed",[0,0]);S(this,"boons",[{damage:0,attackSpeed:0},{damage:0,attackSpeed:0}]);S(this,"monsters");S(this,"map");S(this,"ground");S(this,"cx");S(this,"cy");S(this,"result",null);S(this,"events",Zh());S(this,"zones",[]);S(this,"perks");S(this,"puddles",[]);S(this,"beasts",[0,0]);S(this,"firstBeast",-1);S(this,"firstKill",[!1,!1]);S(this,"windUsed",[[],[]]);S(this,"landedPlaces",[0,0]);S(this,"firstLand",[-1,-1]);S(this,"flood",[[],[]]);S(this,"revivals",[]);S(this,"nextStorm",[K.tempest.every*k.tickHz,K.tempest.every*k.tickHz]);S(this,"dmg",new Float64Array(0));S(this,"by",new Float64Array(0));S(this,"best",new Int32Array(0));S(this,"bestAmt",new Float64Array(0));S(this,"exec",new Uint8Array(0));S(this,"pending",[]);S(this,"nextLand",[0,0]);S(this,"nextId",0);S(this,"walked",[]);S(this,"up");S(this,"cell",1.5);S(this,"gw");S(this,"gh");S(this,"grid",[]);this.stock=[{...t[0].counts},{...t[1].counts}];for(let n of this.stock)for(let o of xe)n[o]=n[o]??0;this.up=[t[0].upgrades,t[1].upgrades],this.perks=[t[0].perks??Jh(),t[1].perks??Jh()],this.boons[0].damage=this.perks[0].kept,this.boons[1].damage=this.perks[1].kept,this.map=e.map??nm,this.ground=Cr.of(this.map),this.cx=this.map.width/2,this.cy=this.map.length/2,this.gw=Math.ceil(this.map.width/this.cell)+1,this.gh=Math.ceil(this.map.length/this.cell)+1,this.monsters=this.map.monsters.map(n=>{let o=this.map.places[n.place];return{kind:n.kind,place:n.place,x:o.x,y:o.y,at:Math.round(n.at*k.tickHz),after:n.after??-1,id:-1,born:-1,died:-1,by:-1}});for(let n=0;n<this.gw*this.gh;n++)this.grid.push([]);for(let n of[0,1]){if(!this.has(n,"decoy"))continue;let o=this.map.starts[n][0],r=this.summon(n,"tank",(o[0]+o[2])/2,(o[1]+o[3])/2,{hp:K.decoy});r.anchored=!0,r.places=0}}has(t,e){return t!==we&&this.perks[t].aug[e]===!0}pk(t,e){return t.side===we?0:this.perks[t.side].shop[`${e}:${t.kind}`]??0}gapOf(t,e){let n=Dr(e);return this.has(t,"quickhand")&&(n=Math.round(n/2)),this.has(t,"lowest")&&(n=Math.round(n/2)),n}onBridge(t){let e=this.ground;return!e||t.flying||e.kind(t.x,t.y)!==1?!1:e.kind(t.x-1.2,t.y)===3&&e.kind(t.x+1.2,t.y)===3||e.kind(t.x,t.y-1.2)===3&&e.kind(t.x,t.y+1.2)===3}onIsland(t){if(t.flying)return!1;let e=t.x-this.cx,n=t.y-this.cy,o=K.king.radius;return e*e+n*n<=o*o}nearOf(t,e,n,o){let r=null,a=o*o;for(let p of this.units){if(!p.alive||p.side!==t||p.kind!==e||p.id===n.id||p.anchored)continue;let s=p.x-n.x,u=p.y-n.y,f=s*s+u*u;f<a&&(a=f,r=p)}return r}canTarget(t,e){return!(e.hiddenUntil>this.tick||e.kind==="assassin"&&t.ranged&&this.has(e.side,"shadow")&&this.nearOf(e.side,"whale",e,k.troops.whale.radius+1.5))}get time(){return this.tick*Me}get over(){return this.result!==null}alive(t){return this.units.filter(e=>e.alive&&(t===void 0||e.side===t))}left(t){let e={...this.stock[t]};for(let n of this.pending)n.side===t&&e[n.kind]>0&&e[n.kind]--;return e}pendingDrops(){return this.pending}get awake(){let t=[];for(let e of this.monsters)e.id>=0&&e.died<0&&t.push(this.units[e.id]);return t}get next(){let t=[];return this.monsters.forEach((e,n)=>{if(e.id>=0)return;let o=this.dueAt(e);o>=0&&t.push({call:n,kind:e.kind,place:e.place,x:e.x,y:e.y,tick:o})}),t.sort((e,n)=>e.tick-n.tick||e.call-n.call)}get heralds(){return this.next.filter(t=>t.tick-this.tick<=jh.announce*k.tickHz)}dueAt(t){if(t.after<0)return t.at;let e=this.monsters[t.after];return e.died<0?-1:Math.max(t.at,e.died+jh.afterDeath*k.tickHz)}bannerOpen(t){return t.alive&&t.kind==="banner"&&this.tick<t.zoneUntil}banners(t){return this.units.filter(e=>e.side===t&&this.bannerOpen(e))}open(t,e){return this.zones.filter(n=>n.side===t&&this.tick<n.until&&(!e||n.kind===e))}inDropZone(t,e,n){if(Yh(this.map,t,e,n))return!0;let o=Ma.radius*Ma.radius;for(let r of this.units){if(r.side!==t||!this.bannerOpen(r))continue;let a=e-r.x,p=n-r.y;if(a*a+p*p<=o)return!0}for(let r of this.zones){if(r.side!==t||r.kind!=="portal"||this.tick>=r.until)continue;let a=e-r.x,p=n-r.y;if(a*a+p*p<=r.r*r.r)return!0}if(this.has(t,"column")){let r=K.column*K.column;for(let a of this.units){if(!a.alive||a.side!==t||a.kind!=="tank"||a.anchored)continue;let p=e-a.x,s=n-a.y;if(p*p+s*s<=r)return!0}}return this.inHalf(t,e,n)}inHalf(t,e,n){let o=this.has(t,"ironhand")?this.map.length:this.map.length*Qh.reach+(this.has(t,"conquest")?K.conquest:0);if(t===0?n>o:n<this.map.length-o)return!1;let r=this.has(t,"noquarter")?K.noquarter:Qh.enemyGap,a=r*r;for(let p of this.units){if(!p.alive||p.side===t)continue;let s=e-p.x,u=n-p.y;if(s*s+u*u<a)return!1}return!0}canDrop(t,e,n,o){if(Fe(o))return Cs(this.map,e,n);if(!K3(this.map,e,n)||tm(this.map,e,n))return!1;if(o!=="banner")return this.inDropZone(t,e,n);if(Yh(this.map,1-t,e,n))return!1;for(let r of this.awake){let a=e-r.x,p=n-r.y;if(a*a+p*p<Ma.monsterGap*Ma.monsterGap)return!1}return!0}wiped(t){return q3(this.stock[t])===0&&!this.units.some(e=>e.alive&&e.side===t&&!e.anchored)&&!this.revivals.some(e=>e.side===t)}schedule(t){let e=this.pending.length;for(;e>0&&om(t,this.pending[e-1]);)e--;this.pending.splice(e,0,t)}step(){if(this.result)return;let t=this.events=Zh();for(let h of this.monsters){if(h.id>=0)continue;let b=this.dueAt(h);if(b<0||this.tick<b)continue;let E=this.rise(h.kind,h.x,h.y);h.id=E.id,h.born=this.tick,t.rose.push(E.id)}if(this.revivals.length){let h=this.revivals.filter(b=>b.tick<=this.tick);this.revivals=this.revivals.filter(b=>b.tick>this.tick);for(let b of h){let E=this.summon(b.side,b.kind,b.x,b.y,{hp:b.hp});E.revived=!0,b.shade&&(E.shadeUntil=this.tick+K.shades.seconds*k.tickHz),t.landed.push(E.id)}}for(let h of this.units)h.alive&&h.shadeUntil>=0&&this.tick>=h.shadeUntil&&(h.alive=!1,t.deaths.push(h.id));let e=[],n=[!1,!1],o=0;for(;o<this.pending.length&&this.pending[o].tick<=this.tick;o++){let h=this.pending[o];if(n[h.side]||this.tick<this.nextLand[h.side]){n[h.side]=!0,e.push(h);continue}this.stock[h.side][h.kind]>0&&this.canDrop(h.side,h.x,h.y,h.kind)?(this.stock[h.side][h.kind]--,Fe(h.kind)?t.cast.push(this.cast(h.side,h.kind,h.x,h.y).id):t.landed.push(this.spawn(h).id),this.nextLand[h.side]=this.tick+this.gapOf(h.side,h.kind),n[h.side]=!0):t.refused.push(h)}o&&(this.pending=e.concat(this.pending.slice(o)));let r=this.units.filter(h=>h.alive),a=k.taunt,p=a.radius*a.radius;for(let h of r)if(!(h.kind!=="tank"||this.tick<h.nextCry)){h.nextCry=this.tick+a.every*k.tickHz,h.cried=this.tick,t.cries.push(h.id);for(let b of r){if(b.side===h.side||b.anchored)continue;let E=b.x-h.x,T=b.y-h.y;if(!(E*E+T*T>p)&&(b.tauntBy=h,b.tauntUntil=this.tick+a.seconds*k.tickHz,b.target=h,this.has(h.side,"magnet")&&b.side!==we&&!b.flying)){let g=Math.sqrt(E*E+T*T),x=Math.min(K.magnet.pull,g-h.radius-b.radius);if(x>0&&g>1e-9){let U=b.x,V=b.y;b.x-=E/g*x,b.y-=T/g*x,this.ground&&this.keep(b,U,V)}}}if(this.has(h.side,"rampart")){let b=K.rampart.radius*K.rampart.radius;for(let E of r){if(E.side!==h.side||E===h)continue;let T=E.x-h.x,g=E.y-h.y;T*T+g*g<=b&&(E.guardUntil=this.tick+K.rampart.seconds*k.tickHz)}}}let s=this.nextId;this.dmg=new Float64Array(s),this.by=new Float64Array(s*3),this.best=new Int32Array(s).fill(-1),this.bestAmt=new Float64Array(s),this.exec=new Uint8Array(s);let u=this.awake,f=this.zones.filter(h=>h.kind==="rage"&&this.tick<h.until);for(let h of this.puddles)if(!(this.tick>=h.until))for(let b of r){if(b.side===h.side||b.side===we||b.flying)continue;let E=b.x-h.x,T=b.y-h.y;E*E+T*T<=h.r*h.r&&(b.slowUntil<=this.tick||b.slow<h.slow)&&(b.slow=h.slow,b.slowUntil=this.tick+1)}let l=[0,1].map(h=>this.has(h,"laststand")&&this.landedPlaces[h]>0&&this.placesAlive(h)<this.landedPlaces[h]*K.laststand.share);for(let h of r){if(h.anchored||!h.alive||h.stunUntil>this.tick)continue;let b=f.length&&h.side!==we&&f.some(x=>x.side===h.side&&Aa(x,h)),E=h.damage*this.strength(h,!!b,l),T=b?ws.rage.attackSpeed:0;if(h.kind==="barbarian"&&this.has(h.side,"pack")){let x=0,U=K.pack.radius*K.pack.radius;for(let V of r)V!==h&&V.alive&&V.side===h.side&&V.kind==="barbarian"&&(V.x-h.x)*(V.x-h.x)+(V.y-h.y)*(V.y-h.y)<=U&&x++;T+=Math.min(K.pack.max,x*K.pack.each)}h.cd>0&&(h.cd-=Me*(1+T)),(!h.target||!h.target.alive||(this.tick+h.id)%Ia.retargetTicks===0)&&(h.target=this.look(h,r));let g=h.target;if(g){let x=g.x-h.x,U=g.y-h.y,V=Math.sqrt(x*x+U*U),O=V-h.radius-g.radius,P=this.rangeOf(h);O<=P?h.cd<=0&&(this.strike(h,g,E,!!b,r),h.cd+=h.period,h.cd<0&&(h.cd=0),h.struck=this.tick,t.hits.push({from:h.id,to:g.id})):this.walk(h,g.x,g.y,h.radius+g.radius+P*.9)}else if(h.side===we)this.walk(h,h.homeX,h.homeY,0);else if(u.length){let x=u[0],U=1/0;for(let V of u){let O=(V.x-h.x)*(V.x-h.x)+(V.y-h.y)*(V.y-h.y);O<U&&(U=O,x=V)}this.walk(h,x.x,x.y,h.radius+x.radius+h.range*.9)}else{let x=h.side,U=Ls(h,r,1/0,!1,!0);if(U)this.walk(h,U.x,U.y,h.radius+U.radius+h.range*.9);else{let[V,O]=this.ahead(x,h.x,h.y);this.walk(h,V,O,0,this.ground&&!h.flying?this.ground.zone(this.map.starts[1-x]):null)}}}this.overTime(r,f);let c=this.dmg,d=this.by;for(let h of r){if(!(c[h.id]>0)||!h.alive)continue;let b=c[h.id];if(h.shield>0){let x=Math.min(h.shield,b);h.shield-=x,b-=x}if(h.hp-=b,h.hp>0&&this.exec[h.id]&&h.side!==we&&h.hp<h.maxHp*K.execute&&(h.hp=0),h.hp>0)continue;h.hp=0,h.alive=!1,t.deaths.push(h.id);let E=-1,T=0;for(let x=0;x<3;x++)d[h.id*3+x]>T&&(T=d[h.id*3+x],E=x);let g=this.best[h.id]>=0?this.units[this.best[h.id]]:null;h.side===we?this.slay(h,E===0||E===1?E:-1,g&&g.side===E?g:null):(E===1-h.side&&(this.killed[E]+=h.places,this.onKill(E,h,g&&g.side===E?g:null)),this.onDeath(h))}for(let h of this.zones)if(!(h.kind!=="heal"||this.tick>=h.until))for(let b of r)!b.alive||b.side!==h.side||b.anchored||!Aa(h,b)||(b.hp=Math.min(b.maxHp,b.hp+b.maxHp*ws.heal.heal*Me*(1+this.pk(b,"mending"))));for(let h of r)if(!(!h.alive||h.side===we)&&(this.has(h.side,"bridgeward")&&(this.onBridge(h)?h.bridgeSince<0?h.bridgeSince=this.tick:this.tick-h.bridgeSince>=K.bridgeward.after*k.tickHz&&(h.hp=Math.min(h.maxHp,h.hp+h.maxHp*K.bridgeward.heal*Me)):h.bridgeSince=-1),this.has(h.side,"king")&&this.onIsland(h)&&(h.hp=Math.min(h.maxHp,h.hp+h.maxHp*K.king.heal*Me)),h.riderOf>=0)){let b=this.units[h.riderOf];b.alive&&(h.x=b.x+(h.id%2?.35:-.35),h.y=b.y)}this.separate(),this.tick++;let y=this.wiped(0),m=this.wiped(1);y&&m?this.judge("empty"):y||m?this.finish(y?1:0,"wipe"):this.tick>=wr&&this.judge("time")}placesAlive(t){let e=0;for(let n of this.units)n.alive&&n.side===t&&(e+=n.places);return e}judge(t="time"){let[e,n]=this.killed;if(e!==n){this.finish(e>n?0:1,t);return}let o=this.placesAlive(0),r=this.placesAlive(1);this.finish(o===r?-1:o>r?0:1,t)}finish(t,e){this.result={winner:t,outcome:e,tick:this.tick,killed:[this.killed[0],this.killed[1]],places:[this.placesAlive(0),this.placesAlive(1)],beasts:[this.beasts[0],this.beasts[1]],firstBeast:this.firstBeast}}strength(t,e,n){if(t.side===we)return 1;let o=1+(e?ws.rage.damage+this.pk(t,"rageborn"):0);return this.has(t.side,"king")&&this.onIsland(t)&&(o*=1+K.king.damage),n[t.side]&&(o*=1+K.laststand.damage),this.has(t.side,"lowest")&&(o*=1+K.backtowall.damage),o}against(t,e){if(t.side===we)return 1;let n=1;return e.side===we?n*=(1+this.pk(t,"beastbane"))*(this.has(t.side,"hunter")?1+K.hunter:1):((e.kind==="tank"||e.kind==="whale")&&(n*=1+this.pk(t,"giantbane")),e.flying&&(n*=1+this.pk(t,"skybane")),e.ranged&&(n*=1+this.pk(t,"rangedbane")),e.markUntil>this.tick&&e.markSide===t.side&&!t.ranged&&(n*=1+K.marked.more)),n}rangeOf(t){return t.kind==="archer"&&this.has(t.side,"siege")&&this.tick-(this.walked[t.id]??t.born)>=K.siege.still*k.tickHz?t.range*K.siege.range:t.range}hurt(t,e,n,o){if(!(e>0)||!t.alive||t.side===n||t.id>=this.dmg.length)return;let r=e;if(t.side!==we){let a=t.side;t.guardUntil>this.tick&&(r*=1-K.rampart.cut),t.kind==="barbarian"&&this.has(a,"phalanx")&&this.nearOf(a,"tank",t,K.phalanx.radius)&&(r/=1+K.phalanx.hp);let p=this.pk(t,"bridgehold");if(p>0&&this.onBridge(t)&&(r*=1-Math.min(.6,p)),n===we&&this.has(a,"fearless")&&(r*=1-K.fearless),o&&o.ranged&&this.has(a,"scales")&&(r*=1-K.scales),(t.kind==="archer"||t.kind==="druid")&&this.has(a,"livingshield")){let s=this.nearOf(a,"tank",t,K.livingshield.radius);if(s){let u=r*K.livingshield.share;r-=u,this.add(s,u,n,o)}}if(o&&o.alive&&!o.ranged){let s=this.pk(t,"thorns");s>0&&this.add(o,r*s,a,t)}if(o&&o.side!==we&&t.kind==="archer"&&this.has(a,"bodyguard")){let s=this.nearOf(a,"assassin",t,K.bodyguard);s&&Or(s,o)&&(s.tauntBy=o,s.tauntUntil=this.tick+3*k.tickHz,s.target=o)}o&&o.kind==="archer"&&this.has(o.side,"marked")&&(t.markUntil=this.tick+K.marked.seconds*k.tickHz,t.markSide=o.side),o&&o.kind==="assassin"&&this.has(o.side,"execute")&&(this.exec[t.id]=1)}this.add(t,r,n,o)}add(t,e,n,o){t.id>=this.dmg.length||(this.dmg[t.id]+=e,this.by[t.id*3+n]+=e,o&&e>this.bestAmt[t.id]&&(this.bestAmt[t.id]=e,this.best[t.id]=o.id))}nextTo(t,e,n,o,r,a){let p=null,s=o*o;for(let u of r){if(!u.alive||u.side===t.side||!Or(t,u)||a.includes(u))continue;let f=u.x-e,l=u.y-n,c=f*f+l*l;c<s&&(s=c,p=u)}return p}strike(t,e,n,o,r){let a=t.side,p=t.lastTarget!==e.id,s=this.events,u=n*this.against(t,e);p&&t.kind==="assassin"&&(u*=1+this.pk(t,"opener")),t.blows===0&&t.portal&&t.kind==="assassin"&&this.has(a,"ambush")&&(u*=K.ambush),t.blows++;let f=[],l=0;if(t.splash>0){let m=t.splash*(1+this.pk(t,"widestorm"))*(o&&t.kind==="druid"&&this.has(a,"storm")?K.storm:1);for(let h of r){if(!h.alive||h.side===a||h.flying&&!t.hitsAir)continue;let b=h.x-e.x,E=h.y-e.y,T=m+h.radius;if(b*b+E*E<=T*T){let g=h===e?u:n*this.against(t,h);this.hurt(h,g,a,t),l+=g,f.push(h)}}s.blasts.push({from:t.id,x:e.x,y:e.y})}else this.hurt(e,u,a,t),l+=u,f.push(e);if(t.lastTarget=e.id,a===we)return;let c=k.tickHz,d=this.pk(t,"stunblow");d>0&&t.blows%Da(6,d)===0&&(e.stunUntil=Math.max(e.stunUntil,this.tick+K.stun*c));let y=this.pk(t,"pierce");if(y>0&&t.blows%Da(5,y)===0){let m=this.nextTo(t,e.x,e.y,1.5,r,f);m&&(this.hurt(m,n*this.against(t,m),a,t),f.push(m))}if(t.kind==="druid"&&this.has(a,"chain")){let m=this.nextTo(t,e.x,e.y,K.chain.radius,r,f);m&&this.hurt(m,n*K.chain.share*this.against(t,m),a,t)}if(t.kind==="archer"&&this.has(a,"duo")&&this.nearOf(a,"barbarian",t,K.duo)){let m=this.nextTo(t,t.x,t.y,this.rangeOf(t)+t.radius+1,r,f);m&&this.hurt(m,n*this.against(t,m),a,t)}if(t.kind==="whale"){if(this.has(a,"shockwave"))for(let h of f)h.stunUntil=Math.max(h.stunUntil,this.tick+K.shockwave*c);let m=this.pk(t,"puddle");m>0&&this.puddles.push({side:a,x:e.x,y:e.y,r:K.puddle.radius,until:this.tick+Math.round(K.puddle.seconds*m*c),slow:K.puddle.slow})}if(t.kind==="druid"){let m=this.pk(t,"slowbolt");if(m>0)for(let h of f)h.slow=Math.min(.6,m),h.slowUntil=this.tick+K.slowSeconds*c;if(this.has(a,"sap")){let h=K.sap.radius*K.sap.radius;for(let b of r)b.alive&&b.side===a&&(b.x-e.x)*(b.x-e.x)+(b.y-e.y)*(b.y-e.y)<=h&&(b.hp=Math.min(b.maxHp,b.hp+b.maxHp*K.sap.heal))}}o&&this.has(a,"bloodlust")&&(t.hp=Math.min(t.maxHp,t.hp+l*K.bloodlust))}overTime(t,e){for(let n of e)if(this.has(n.side,"blaze"))for(let o of t)o.alive&&o.side===1-n.side&&Aa(n,o)&&this.hurt(o,o.maxHp*K.blaze*Me,n.side,null);for(let n of[0,1]){if(!this.has(n,"tempest")||this.tick<this.nextStorm[n])continue;this.nextStorm[n]+=K.tempest.every*k.tickHz;let o=K.tempest.radius*K.tempest.radius,r=null,a=0;for(let p of t){if(!p.alive||p.side!==1-n||p.flying)continue;let s=0;for(let u of t)u.alive&&u.side===p.side&&!u.flying&&(u.x-p.x)*(u.x-p.x)+(u.y-p.y)*(u.y-p.y)<=o&&s++;s>a&&(a=s,r=p)}if(r){for(let p of t)p.alive&&p.side===r.side&&!p.flying&&(p.x-r.x)*(p.x-r.x)+(p.y-r.y)*(p.y-r.y)<=o&&this.hurt(p,K.tempest.damage,n,null);this.events.blasts.push({from:-1,x:r.x,y:r.y})}}}onKill(t,e,n){if(!this.firstKill[t]&&(this.firstKill[t]=!0,this.has(t,"firstblood")))for(let o=0;o<K.firstblood;o++)this.summon(t,"barbarian",e.x+o*.4,e.y);if(n&&n.alive&&n.kind==="barbarian"&&this.has(t,"promotion")&&++n.kills>=K.promotion){let o=_a("tank",this.up[t]),r=k.troops.tank;n.kind="tank",n.maxHp=o.hp,n.hp=o.hp,n.speed=o.moveSpeed,n.range=o.range,n.radius=r.radius,n.mass=r.mass,n.nextCry=this.tick+1,this.boost(n)}}onDeath(t){let e=t.side,n=t.kind,o=k.tickHz;if(!t.revived&&!t.summoned&&(this.zones.some(a=>a.kind==="heal"&&a.side===e&&this.tick<a.until&&Aa(a,t))&&this.has(e,"sanctuary")?this.revivals.push({tick:this.tick+1,side:e,kind:n,x:t.x,y:t.y,hp:K.sanctuary,shade:!1}):this.has(e,"secondwind")&&!this.windUsed[e].includes(n)?(this.windUsed[e].push(n),this.revivals.push({tick:this.tick+K.secondwind.seconds*o,side:e,kind:n,x:t.x,y:t.y,hp:K.secondwind.hp,shade:!1})):this.has(e,"shades")&&this.revivals.push({tick:this.tick+1,side:e,kind:n,x:t.x,y:t.y,hp:K.shades.hp,shade:!0})),n==="whale"){if(this.has(e,"rider")&&!t.summoned)for(let r=0;r<3;r++)this.summon(e,"barbarian",t.x+(r-1)*.45,t.y);for(let r of this.units)r.alive&&r.riderOf===t.id&&(r.alive=!1,r.hp=0,this.events.deaths.push(r.id))}if(n==="barbarian"&&this.has(e,"martyr")){let r=K.martyr.radius*K.martyr.radius;for(let a of this.units)a.alive&&a.side===e&&(a.x-t.x)*(a.x-t.x)+(a.y-t.y)*(a.y-t.y)<=r&&(a.hp=Math.min(a.maxHp,a.hp+a.maxHp*K.martyr.heal))}this.has(e,"relief")&&this.nextLand[e]>this.tick&&(this.nextLand[e]=this.tick)}summon(t,e,n,o,r={}){this.ground&&!k.troops[e].flying&&([n,o]=this.ground.foot(n,o));let a=this.make({tick:this.tick,side:t,kind:e,x:n,y:o,seq:0});return a.places=0,a.summoned=!0,r.hp!==void 0&&(a.maxHp*=r.hp,a.hp=a.maxHp),r.dmg!==void 0&&(a.damage*=r.dmg),this.units.push(a),a}slay(t,e,n=null){this.events.slain.push({id:t.id,by:e});let o=this.monsters.find(p=>p.id===t.id);if(o&&(o.died=this.tick+1,o.by=e),e===-1)return;t.kind==="beast"&&(this.firstBeast===-1&&(this.firstBeast=e),this.beasts[e]++);let r=k.monsters[t.kind].boon,a=r.value+(this.has(e,"beastblood")?K.beastblood:0);this.has(e,"doubletrophy")&&this.beasts[e]===2&&(a*=2),this.boons[e][r.stat]+=a;for(let p of this.units)p.alive&&p.side===e&&!p.anchored&&this.boost(p);if(this.has(e,"roar")){let p=K.roar.radius*K.roar.radius;for(let s of this.units)s.alive&&s.side===e&&(s.x-t.x)*(s.x-t.x)+(s.y-t.y)*(s.y-t.y)<=p&&(s.hp=Math.min(s.maxHp,s.hp+s.maxHp*K.roar.heal))}if(this.has(e,"lakecry")){let p=K.lakecry.radius*K.lakecry.radius;for(let s of this.units)s.alive&&s.side===1-e&&(s.x-t.x)*(s.x-t.x)+(s.y-t.y)*(s.y-t.y)<=p&&(s.stunUntil=Math.max(s.stunUntil,this.tick+K.lakecry.seconds*k.tickHz))}if(this.has(e,"lakepack"))for(let p=0;p<K.lakepack;p++)this.summon(e,"barbarian",t.x+(p-1)*.45,t.y);n&&n.alive&&this.has(e,"devourer")&&(n.maxHp*=1+K.devourer,n.hp=n.maxHp)}boost(t){let e=t.side,n=_a(t.kind,this.up[e]),o=this.boons[e];t.damage=n.damage*(1+o.damage);let r=n.attackSpeed*(1+o.attackSpeed);t.period=r>0?1/r:1/0}spawn(t){let e=this.make(t),n=t.side,o=k.tickHz;this.units.push(e),e.portal=this.zones.some(a=>a.side===n&&a.kind==="portal"&&this.tick<a.until&&Aa(a,e));let r=1;if(e.portal&&(r+=this.pk(e,"portalborn")),this.firstLand[n]<0&&(this.firstLand[n]=this.tick),this.has(n,"patience")&&this.firstLand[n]>=K.patience.after*o&&this.tick<this.firstLand[n]+K.patience.within*o&&(r*=1+K.patience.hp),r!==1&&(e.maxHp*=r,e.hp=e.maxHp),this.has(n,"vanguard")&&this.landedPlaces[n]<K.vanguard.places&&(e.shield=e.maxHp*K.vanguard.shield),this.landedPlaces[n]+=e.places,this.has(n,"hidden")&&(e.hiddenUntil=this.tick+K.hidden*o),this.has(n,"rush")&&this.tick<K.rush.within*o&&(e.rushUntil=this.tick+K.rush.seconds*o),t.kind==="barbarian"&&this.has(n,"legion")&&this.summon(n,"barbarian",e.x+.4,e.y),t.kind==="whale"&&(this.has(n,"mother")&&this.summon(n,"whale",e.x+1,e.y,{hp:K.mother,dmg:K.mother}),this.has(n,"nest")))for(let a=0;a<K.nest;a++){let p=this.summon(n,"archer",e.x,e.y);p.riderOf=e.id,p.flying=!0,p.speed=0}if(this.has(n,"flood")){let a=this.flood[n].filter(p=>this.tick-p.tick<K.flood.seconds*o);if(a.push({tick:this.tick,places:e.places}),a.reduce((p,s)=>p+s.places,0)>=K.flood.places){for(let p=0;p<K.flood.barbarians;p++)this.summon(n,"barbarian",e.x+(p?.4:-.4),e.y);a.length=0}this.flood[n]=a}return e}make(t){let e=_a(t.kind,this.up[t.side]),n=k.troops[t.kind],o={id:this.nextId++,side:t.side,kind:t.kind,places:n.places,x:t.x,y:t.y,hp:e.hp,maxHp:e.hp,damage:e.damage,period:1/0,speed:e.moveSpeed,range:e.range,radius:n.radius,mass:n.mass,sight:Math.max(Ia.aggro,e.range+2*n.radius),flying:n.flying,hitsAir:n.hitsAir,splash:n.splash,crowd:n.crowd,ranged:n.ranged,anchored:n.anchored,cd:.4,target:null,alive:!0,tauntBy:null,tauntUntil:-1,nextCry:t.kind==="tank"?this.tick+Math.round(.4*k.tickHz):1/0,born:this.tick,struck:-1,cried:-1,zoneUntil:t.kind==="banner"?this.tick+Math.round(Ma.seconds*k.tickHz):-1,homeX:0,homeY:0,leash:0,...zh()};return this.boost(o),t.kind==="whale"&&this.pk(o,"lowflight")>0&&(o.low=!0),o}cast(t,e,n,o){let r=ws[e],a=e==="portal"&&this.has(t,"heldportal"),p=r.seconds*(this.has(t,"longspells")?2:1),s={id:this.zones.length,side:t,kind:e,x:n,y:o,r:a?r.radius/2:r.radius,born:this.tick,until:a?wr+1:this.tick+Math.round(p*k.tickHz)};return this.zones.push(s),s}rise(t,e,n){let o=k.monsters[t],r={id:this.nextId++,side:we,kind:t,places:0,x:e,y:n,hp:o.hp,maxHp:o.hp,damage:o.damage,period:1/o.attackSpeed,speed:o.moveSpeed,range:o.range,radius:o.radius,mass:o.mass,sight:o.sight,flying:!1,hitsAir:!0,splash:o.splash,crowd:!1,ranged:!1,anchored:!1,cd:.4,target:null,alive:!0,tauntBy:null,tauntUntil:-1,nextCry:1/0,born:this.tick,struck:-1,cried:-1,zoneUntil:-1,homeX:e,homeY:n,leash:o.leash,...zh()};return this.units.push(r),r}ahead(t,e,n){let o=e,r=n,a=1/0;for(let p of this.map.starts[1-t]){let s=e<p[0]?p[0]:e>p[2]?p[2]:e,u=n<p[1]?p[1]:n>p[3]?p[3]:n,f=(s-e)*(s-e)+(u-n)*(u-n);f<a&&(a=f,o=s,r=u)}return[o,r]}look(t,e){let n=t.tauntBy;if(n&&n.alive&&this.tick<t.tauntUntil&&Or(t,n))return n;if(t.side===we){let p=this.has(0,"charmer"),s=this.has(1,"charmer");if(p!==s){let u=Gh(t,e,f=>f.side===(p?1:0));if(u)return u}return Gh(t,e)}let o=p=>this.canTarget(t,p);if(t.kind==="assassin"&&!(this.pk(t,"shortblade")>0)){let p=Ls(t,e,k.assassinHunt,!0,!1,o);if(p)return p}let r=this.rangeOf(t),a=Math.max(t.sight,r+2*t.radius);if(t.kind==="archer"&&this.has(t.side,"counterhunt")){let p=Ls(t,e,r+t.radius+.5,!1,!1,s=>s.kind==="assassin"&&o(s));if(p)return p}return t.crowd?im(t,e,a,o):Ls(t,e,a,!1,!1,o)}walk(t,e,n,o,r=null){let a=e-t.x,p=n-t.y,s=Math.sqrt(a*a+p*p);if(s<=o||s<=1e-9)return;let u=this.ground,f=u!==null&&!t.flying,l=t.speed*(t.slowUntil>this.tick?1-t.slow:1)*(t.rushUntil>this.tick?1+K.rush.speed:1),c=f&&u.kind(t.x,t.y)===2&&!this.has(t.side,"tide")?.5:1,d=Math.min(l*Me,s-o),y=a/s,m=p/s;if(f&&(d*=c,!u.clear(t.x,t.y,e,n))){let E=u.heading(t.x,t.y,r??u.field(e,n));if(E){let T=E[0]-t.x,g=E[1]-t.y,x=Math.sqrt(T*T+g*g);x>1e-9&&(y=T/x,m=g/x,d=l*Me*c)}}if(!t.flying&&t.side!==we){let E=t.x-this.cx,T=t.y-this.cy,g=E*E+T*T,x=Us.eclatRadius+t.radius+.3;if(g<x*x&&g>1e-12&&E*y+T*m<0){let U=Math.sqrt(g),V=-T/U,O=E/U,P=V*y+O*m;(P<0||P===0&&t.id%2===1)&&(V=-V,O=-O),y=V,m=O}}let h=t.x,b=t.y;if(t.x+=y*d,t.y+=m*d,this.walked[t.id]=this.tick,t.leash>0){let E=t.x-t.homeX,T=t.y-t.homeY,g=E*E+T*T;if(g>t.leash*t.leash){let x=Math.sqrt(g);t.x=t.homeX+E/x*t.leash,t.y=t.homeY+T/x*t.leash}}u&&this.keep(t,h,b)}keep(t,e,n){let o=this.ground,r=t.flying?(a,p)=>o.inField(a,p):(a,p)=>o.walkable(a,p);r(t.x,t.y)||(r(t.x,n)?t.y=n:r(e,t.y)?t.x=e:(t.x=e,t.y=n))}separate(){let t=this.grid,e=this.cell,n=this.gw;for(let d of t)d.length=0;let o=[];for(let d of this.units)d.alive&&o.push(d);let r=this.ground?o.map(d=>d.x):[],a=this.ground?o.map(d=>d.y):[];for(let d=0;d<o.length;d++){let y=o[d];t[Ps(y.x,e,n-1)+Ps(y.y,e,this.gh-1)*n].push(d)}let p=Ia.separation;for(let d=0;d<o.length;d++){let y=o[d],m=Ps(y.x,e,n-1),h=Ps(y.y,e,this.gh-1);for(let b=-1;b<=1;b++){let E=h+b;if(!(E<0||E>=this.gh))for(let T=-1;T<=1;T++){let g=m+T;if(!(g<0||g>=n))for(let x of t[g+E*n]){if(x<=d)continue;let U=o[x];if(y.flying!==U.flying||y.anchored||U.anchored)continue;let V=U.x-y.x,O=U.y-y.y,P=y.radius+U.radius,L=V*V+O*O;if(L>=P*P)continue;let D=Math.sqrt(L);D<1e-6&&(V=(y.id*7+U.id*13)%11/11-.5,O=.5,D=Math.sqrt(V*V+O*O));let I=y.side===U.side&&this.walked[y.id]===this.tick?0:U.mass/(y.mass+U.mass),H=1-I,N=(P-D)*p,Y=V/D,J=O/D;y.x-=Y*N*I,y.y-=J*N*I,U.x+=Y*N*H,U.y+=J*N*H}}}}let s=Us.eclatRadius,u=this.map.width,f=this.map.length,l=this.cx,c=this.cy;for(let d=0;d<o.length;d++){let y=o[d];if(y.anchored)continue;let m=y.x-l,h=y.y-c,b=m*m+h*h,E=s+y.radius;if(b<E*E&&!y.flying&&y.side!==we){let T=Math.sqrt(b);T<1e-6?y.y=c+(y.side===0?-E:E):(y.x=l+m/T*E,y.y=c+h/T*E)}if(this.ground){this.keep(y,r[d],a[d]);continue}y.x<y.radius?y.x=y.radius:y.x>u-y.radius&&(y.x=u-y.radius),y.y<y.radius?y.y=y.radius:y.y>f-y.radius&&(y.y=f-y.radius)}}},Aa=(i,t)=>{let e=t.x-i.x,n=t.y-i.y;return e*e+n*n<=i.r*i.r},om=(i,t)=>i.tick!==t.tick?i.tick<t.tick:i.side!==t.side?i.side<t.side:i.seq<t.seq,Ps=(i,t,e)=>{let n=Math.floor(i/t);return n<0?0:n>e?e:n},Or=(i,t)=>!t.flying||i.hitsAir||t.low,jl=()=>!0;function im(i,t,e,n=jl){let o=null,r=0,a=e*e;for(let p of t){if(!p.alive||p.side===i.side||!Or(i,p)||!n(p))continue;let s=p.x-i.x,u=p.y-i.y,f=s*s+u*u;if(f>e*e)continue;let l=0;for(let c of t){if(!c.alive||c.side===i.side||c.flying&&!i.hitsAir)continue;let d=c.x-p.x,y=c.y-p.y,m=i.splash+c.radius;d*d+y*y<=m*m&&l++}(l>r||l===r&&(f<a||f===a&&o&&p.id<o.id))&&(r=l,a=f,o=p)}return o}function Gh(i,t,e=jl){let n=null,o=i.sight*i.sight;for(let r of t){if(!r.alive||r.side===i.side||!Or(i,r)||!e(r))continue;let a=r.x-i.x,p=r.y-i.y,s=a*a+p*p;if(s>o||s===o&&n&&r.id>n.id)continue;let u=r.x-i.homeX,f=r.y-i.homeY,l=i.leash+i.radius+r.radius+i.range;u*u+f*f>l*l||(o=s,n=r)}return n}function Ls(i,t,e,n,o=!1,r=jl){let a=null,p=e*e;for(let s of t){if(!s.alive||s.side===i.side||!Or(i,s)||n&&!s.ranged||!r(s)||o&&(s.side===we||s.anchored))continue;let u=s.x-i.x,f=s.y-i.y,l=u*u+f*f;(l<p||l===p&&a&&s.id<a.id)&&(p=l,a=s)}return a}var B1=0,_2=1,F1=2;var Rp=1,N1=2,Lo=3,po=0,yn=1,fn=2,Qe=0,Ni=1,uo=2,$2=3,k2=4,Ou=5,In=100,X1=101,J1=102,z1=103,Q1=104,or=200,j1=201,Z1=202,Y1=203,nu=204,ou=205,Dp=206,G1=207,Mp=208,W1=209,q1=210,K1=211,td=212,ed=213,nd=214,vu=0,Ru=1,Du=2,Xi=3,Mu=4,Au=5,Iu=6,_u=7,H2=0,od=1,id=2,Wo=0,$u=1,ku=2,Hu=3,Bu=4,Fu=5,Nu=6,ba=7,P2="attached",rd="detached",B2=300,ir=301,rr=302,Xu=303,Ju=304,Ap=306,wn=1e3,mo=1001,Yr=1002,ze=1003,zu=1004;var ar=1005;var en=1006,ya=1007;var Cn=1008;var kn=1009,F2=1010,N2=1011,ma=1012,Qu=1013,mi=1014,Gn=1015,Hn=1016,ju=1017,Zu=1018,gi=1020,X2=35902,J2=35899,z2=1021,Q2=1022,mn=1023,Gr=1026,Ti=1027,Yu=1028,Gu=1029,j2=1030,Wu=1031;var qu=1033,Ip=33776,_p=33777,$p=33778,kp=33779,Ku=35840,tf=35841,ef=35842,nf=35843,of=36196,rf=37492,af=37496,pf=37808,sf=37809,uf=37810,ff=37811,lf=37812,cf=37813,hf=37814,df=37815,bf=37816,yf=37817,mf=37818,gf=37819,Tf=37820,Ef=37821,Vf=36492,Sf=36494,wf=36495,Pf=36283,Lf=36284,Uf=36285,Cf=36286,xf=2200,ad=2201,pd=2202,Ji=2300,zi=2301,eu=2302,Bi=2400,Fi=2401,Ga=2402,Of=2500,sd=2501,Z2=0,Hp=1,ga=2,ud=3200,fd=3201;var vf=0,ld=1,fo="",Ve="srgb",nn="srgb-linear",Wa="linear",fe="srgb";var Hi=7680;var L2=519,cd=512,hd=513,dd=514,Y2=515,bd=516,yd=517,md=518,gd=519,iu=35044;var G2="300 es",ao=2e3,qa=2001;var To=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let o=n[t];if(o!==void 0){let r=o.indexOf(e);r!==-1&&o.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let o=n.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,Qa=Math.PI/180,Qi=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function W2(i,t){return(i%t+t)%t}function rm(i,t,e,n,o){return n+(i-t)*(o-n)/(e-t)}function am(i,t,e){return i!==t?(e-i)/(t-i):0}function ja(i,t,e){return(1-e)*i+e*t}function pm(i,t,e,n){return ja(i,t,1-Math.exp(-e*n))}function sm(i,t=1){return t-Math.abs(W2(i,t*2)-t)}function um(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cm(i,t){return i+Math.random()*(t-i)}function hm(i){return i*(.5-Math.random())}function dm(i){i!==void 0&&(Wh=i);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bm(i){return i*Qa}function ym(i){return i*Qi}function mm(i){return(i&i-1)===0&&i!==0}function gm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Em(i,t,e,n,o){let r=Math.cos,a=Math.sin,p=r(e/2),s=a(e/2),u=r((t+n)/2),f=a((t+n)/2),l=r((t-n)/2),c=a((t-n)/2),d=r((n-t)/2),y=a((n-t)/2);switch(o){case"XYX":i.set(p*f,s*l,s*c,p*u);break;case"YZY":i.set(s*c,p*f,s*l,p*u);break;case"ZXZ":i.set(s*l,s*c,p*f,p*u);break;case"XZX":i.set(p*f,s*y,s*d,p*u);break;case"YXY":i.set(s*d,p*f,s*y,p*u);break;case"ZYZ":i.set(s*y,s*d,p*f,p*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ro(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ln={DEG2RAD:Qa,RAD2DEG:Qi,generateUUID:jn,clamp:qt,euclideanModulo:W2,mapLinear:rm,inverseLerp:am,lerp:ja,damp:pm,pingpong:sm,smoothstep:um,smootherstep:fm,randInt:lm,randFloat:cm,randFloatSpread:hm,seededRandom:dm,degToRad:bm,radToDeg:ym,isPowerOfTwo:mm,ceilPowerOfTwo:gm,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Em,normalize:be,denormalize:ro},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6],this.y=o[1]*e+o[4]*n+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),o=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*o+t.x,this.y=r*o+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(t=0,e=0,n=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=o}static slerpFlat(t,e,n,o,r,a,p){let s=n[o+0],u=n[o+1],f=n[o+2],l=n[o+3],c=r[a+0],d=r[a+1],y=r[a+2],m=r[a+3];if(p===0){t[e+0]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l;return}if(p===1){t[e+0]=c,t[e+1]=d,t[e+2]=y,t[e+3]=m;return}if(l!==m||s!==c||u!==d||f!==y){let h=1-p,b=s*c+u*d+f*y+l*m,E=b>=0?1:-1,T=1-b*b;if(T>Number.EPSILON){let x=Math.sqrt(T),U=Math.atan2(x,b*E);h=Math.sin(h*U)/x,p=Math.sin(p*U)/x}let g=p*E;if(s=s*h+c*g,u=u*h+d*g,f=f*h+y*g,l=l*h+m*g,h===1-p){let x=1/Math.sqrt(s*s+u*u+f*f+l*l);s*=x,u*=x,f*=x,l*=x}}t[e]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,o,r,a){let p=n[o],s=n[o+1],u=n[o+2],f=n[o+3],l=r[a],c=r[a+1],d=r[a+2],y=r[a+3];return t[e]=p*y+f*l+s*d-u*c,t[e+1]=s*y+f*c+u*l-p*d,t[e+2]=u*y+f*d+p*c-s*l,t[e+3]=f*y-p*l-s*c-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,o){return this._x=t,this._y=e,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,o=t._y,r=t._z,a=t._order,p=Math.cos,s=Math.sin,u=p(n/2),f=p(o/2),l=p(r/2),c=s(n/2),d=s(o/2),y=s(r/2);switch(a){case"XYZ":this._x=c*f*l+u*d*y,this._y=u*d*l-c*f*y,this._z=u*f*y+c*d*l,this._w=u*f*l-c*d*y;break;case"YXZ":this._x=c*f*l+u*d*y,this._y=u*d*l-c*f*y,this._z=u*f*y-c*d*l,this._w=u*f*l+c*d*y;break;case"ZXY":this._x=c*f*l-u*d*y,this._y=u*d*l+c*f*y,this._z=u*f*y+c*d*l,this._w=u*f*l-c*d*y;break;case"ZYX":this._x=c*f*l-u*d*y,this._y=u*d*l+c*f*y,this._z=u*f*y-c*d*l,this._w=u*f*l+c*d*y;break;case"YZX":this._x=c*f*l+u*d*y,this._y=u*d*l+c*f*y,this._z=u*f*y-c*d*l,this._w=u*f*l-c*d*y;break;case"XZY":this._x=c*f*l-u*d*y,this._y=u*d*l-c*f*y,this._z=u*f*y+c*d*l,this._w=u*f*l+c*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,o=Math.sin(n);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],o=e[4],r=e[8],a=e[1],p=e[5],s=e[9],u=e[2],f=e[6],l=e[10],c=n+p+l;if(c>0){let d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(f-s)*d,this._y=(r-u)*d,this._z=(a-o)*d}else if(n>p&&n>l){let d=2*Math.sqrt(1+n-p-l);this._w=(f-s)/d,this._x=.25*d,this._y=(o+a)/d,this._z=(r+u)/d}else if(p>l){let d=2*Math.sqrt(1+p-n-l);this._w=(r-u)/d,this._x=(o+a)/d,this._y=.25*d,this._z=(s+f)/d}else{let d=2*Math.sqrt(1+l-n-p);this._w=(a-o)/d,this._x=(r+u)/d,this._y=(s+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let o=Math.min(1,e/n);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,o=t._y,r=t._z,a=t._w,p=e._x,s=e._y,u=e._z,f=e._w;return this._x=n*f+a*p+o*u-r*s,this._y=o*f+a*s+r*p-n*u,this._z=r*f+a*u+n*s-o*p,this._w=a*f-n*p-o*s-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,o=this._y,r=this._z,a=this._w,p=a*t._w+n*t._x+o*t._y+r*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=a,this._x=n,this._y=o,this._z=r,this;let s=1-p*p;if(s<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*o+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let u=Math.sqrt(s),f=Math.atan2(u,p),l=Math.sin((1-e)*f)/u,c=Math.sin(e*f)/u;return this._w=a*l+this._w*c,this._x=n*l+this._x*c,this._y=o*l+this._y*c,this._z=r*l+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(o*Math.sin(t),o*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*o,this.y=r[1]*e+r[4]*n+r[7]*o,this.z=r[2]*e+r[5]*n+r[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*o+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*o+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*o+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*o+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,o=this.z,r=t.x,a=t.y,p=t.z,s=t.w,u=2*(a*o-p*n),f=2*(p*e-r*o),l=2*(r*n-a*e);return this.x=e+s*u+a*l-p*f,this.y=n+s*f+p*u-r*l,this.z=o+s*l+r*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*o,this.y=r[1]*e+r[5]*n+r[9]*o,this.z=r[2]*e+r[6]*n+r[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,o=t.y,r=t.z,a=e.x,p=e.y,s=e.z;return this.x=o*s-r*p,this.y=r*a-n*s,this.z=n*p-o*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,o=this.z-t.z;return e*e+n*n+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let o=Math.sin(e)*t;return this.x=o*Math.sin(n),this.y=Math.cos(e)*t,this.z=o*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zl=new v,qh=new Je,Yt=class i{constructor(t,e,n,o,r,a,p,s,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u)}set(t,e,n,o,r,a,p,s,u){let f=this.elements;return f[0]=t,f[1]=o,f[2]=p,f[3]=e,f[4]=r,f[5]=s,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[3],s=n[6],u=n[1],f=n[4],l=n[7],c=n[2],d=n[5],y=n[8],m=o[0],h=o[3],b=o[6],E=o[1],T=o[4],g=o[7],x=o[2],U=o[5],V=o[8];return r[0]=a*m+p*E+s*x,r[3]=a*h+p*T+s*U,r[6]=a*b+p*g+s*V,r[1]=u*m+f*E+l*x,r[4]=u*h+f*T+l*U,r[7]=u*b+f*g+l*V,r[2]=c*m+d*E+y*x,r[5]=c*h+d*T+y*U,r[8]=c*b+d*g+y*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8];return e*a*f-e*p*u-n*r*f+n*p*s+o*r*u-o*a*s}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=f*a-p*u,c=p*s-f*r,d=u*r-a*s,y=e*l+n*c+o*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/y;return t[0]=l*m,t[1]=(o*u-f*n)*m,t[2]=(p*n-o*a)*m,t[3]=c*m,t[4]=(f*e-o*s)*m,t[5]=(o*r-p*e)*m,t[6]=d*m,t[7]=(n*s-u*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,o,r,a,p){let s=Math.cos(r),u=Math.sin(r);return this.set(n*s,n*u,-n*(s*a+u*p)+a+t,-o*u,o*s,-o*(-u*a+s*p)+p+e,0,0,1),this}scale(t,e){return this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<9;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new Yt;function q2(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=Wr("canvas");return i.style.display="block",i}var Kh={};function qr(i){i in Kh||(Kh[i]=!0,console.warn(i))}function Ed(i,t,e){return new Promise(function(n,o){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var t1=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e1=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){let i={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(o,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(o.r=Jo(o.r),o.g=Jo(o.g),o.b=Jo(o.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(o.r=jr(o.r),o.g=jr(o.g),o.b=jr(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fo?Wa:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,a){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nn]:{primaries:t,whitePoint:n,transfer:Wa,toXYZ:t1,fromXYZ:e1,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:t1,fromXYZ:e1,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}var Kt=Vm();function Jo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mr,ru=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mr===void 0&&(Mr=Wr("canvas")),Mr.width=t.width,Mr.height=t.height;let o=Mr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),n=Mr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let o=n.getImageData(0,0,t.width,t.height),r=o.data;for(let a=0;a<r.length;a++)r[a]=Jo(r[a]/255)*255;return n.putImageData(o,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jo(e[n]/255)*255):e[n]=Jo(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sm=0,Kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let a=0,p=o.length;a<p;a++)o[a].isDataTexture?r.push(Gl(o[a].image)):r.push(Gl(o[a]))}else r=Gl(o);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wm=0,Wl=new v,je=class i extends To{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mo,o=mo,r=en,a=Cn,p=mn,s=kn,u=i.DEFAULT_ANISOTROPY,f=fo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=jn(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=p,this.internalFormat=null,this.type=s,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==B2)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case mo:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case mo:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=B2;je.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,o=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*o+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*o+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*o+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*o+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,o,r,s=t.elements,u=s[0],f=s[4],l=s[8],c=s[1],d=s[5],y=s[9],m=s[2],h=s[6],b=s[10];if(Math.abs(f-c)<.01&&Math.abs(l-m)<.01&&Math.abs(y-h)<.01){if(Math.abs(f+c)<.1&&Math.abs(l+m)<.1&&Math.abs(y+h)<.1&&Math.abs(u+d+b-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(u+1)/2,g=(d+1)/2,x=(b+1)/2,U=(f+c)/4,V=(l+m)/4,O=(y+h)/4;return T>g&&T>x?T<.01?(n=0,o=.707106781,r=.707106781):(n=Math.sqrt(T),o=U/n,r=V/n):g>x?g<.01?(n=.707106781,o=0,r=.707106781):(o=Math.sqrt(g),n=U/o,r=O/o):x<.01?(n=.707106781,o=.707106781,r=0):(r=Math.sqrt(x),n=V/r,o=O/r),this.set(n,o,r,e),this}let E=Math.sqrt((h-y)*(h-y)+(l-m)*(l-m)+(c-f)*(c-f));return Math.abs(E)<.001&&(E=1),this.x=(h-y)/E,this.y=(l-m)/E,this.z=(c-f)/E,this.w=Math.acos((u+d+b-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},au=class extends To{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let o={width:t,height:e,depth:n.depth},r=new je(o);this.textures=[];let a=n.count;for(let p=0;p<a;p++)this.textures[p]=r.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let o=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ka=class extends je{constructor(t=null,e=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=ze,this.minFilter=ze,this.wrapR=mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pu=class extends je{constructor(t=null,e=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=ze,this.minFilter=ze,this.wrapR=mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(t=new v(1/0,1/0,1/0),e=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(no.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(no.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=no.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,p=r.count;a<p;a++)t.isMesh===!0?t.getVertexPosition(a,no):no.fromBufferAttribute(r,a),no.applyMatrix4(t.matrixWorld),this.expandByPoint(no);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}let o=t.children;for(let r=0,a=o.length;r<a;r++)this.expandByObject(o[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,no),no.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($a),Os.subVectors(this.max,$a),Ar.subVectors(t.a,$a),Ir.subVectors(t.b,$a),_r.subVectors(t.c,$a),ai.subVectors(Ir,Ar),pi.subVectors(_r,Ir),Ii.subVectors(Ar,_r);let e=[0,-ai.z,ai.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!ql(e,Ar,Ir,_r,Os)||(e=[1,0,0,0,1,0,0,0,1],!ql(e,Ar,Ir,_r,Os))?!1:(vs.crossVectors(ai,pi),e=[vs.x,vs.y,vs.z],ql(e,Ar,Ir,_r,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,no).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(no).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ko[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ko[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ko[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ko[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ko[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ko[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ko[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ko[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ko),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ko=[new v,new v,new v,new v,new v,new v,new v,new v],no=new v,xs=new bn,Ar=new v,Ir=new v,_r=new v,ai=new v,pi=new v,Ii=new v,$a=new v,Os=new v,vs=new v,_i=new v;function ql(i,t,e,n,o){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);let p=o.x*Math.abs(_i.x)+o.y*Math.abs(_i.y)+o.z*Math.abs(_i.z),s=t.dot(_i),u=e.dot(_i),f=n.dot(_i);if(Math.max(-Math.max(s,u,f),Math.min(s,u,f))>p)return!1}return!0}var Pm=new bn,ka=new v,Kl=new v,Pn=class{constructor(t=new v,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pm.setFromPoints(t).getCenter(n);let o=0;for(let r=0,a=t.length;r<a;r++)o=Math.max(o,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ka.subVectors(t,this.center);let e=ka.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),o=(n-this.radius)*.5;this.center.addScaledVector(ka,o/n),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ka.copy(t.center).add(Kl)),this.expandByPoint(ka.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ho=new v,t2=new v,Rs=new v,si=new v,e2=new v,Ds=new v,n2=new v,hi=class{constructor(t=new v,e=new v(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ho)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ho.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ho.copy(this.origin).addScaledVector(this.direction,e),Ho.distanceToSquared(t))}distanceSqToSegment(t,e,n,o){t2.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),si.copy(this.origin).sub(t2);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),p=si.dot(this.direction),s=-si.dot(Rs),u=si.lengthSq(),f=Math.abs(1-a*a),l,c,d,y;if(f>0)if(l=a*s-p,c=a*p-s,y=r*f,l>=0)if(c>=-y)if(c<=y){let m=1/f;l*=m,c*=m,d=l*(l+a*c+2*p)+c*(a*l+c+2*s)+u}else c=r,l=Math.max(0,-(a*c+p)),d=-l*l+c*(c+2*s)+u;else c=-r,l=Math.max(0,-(a*c+p)),d=-l*l+c*(c+2*s)+u;else c<=-y?(l=Math.max(0,-(-a*r+p)),c=l>0?-r:Math.min(Math.max(-r,-s),r),d=-l*l+c*(c+2*s)+u):c<=y?(l=0,c=Math.min(Math.max(-r,-s),r),d=c*(c+2*s)+u):(l=Math.max(0,-(a*r+p)),c=l>0?r:Math.min(Math.max(-r,-s),r),d=-l*l+c*(c+2*s)+u);else c=a>0?-r:r,l=Math.max(0,-(a*c+p)),d=-l*l+c*(c+2*s)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),o&&o.copy(t2).addScaledVector(Rs,c),d}intersectSphere(t,e){Ho.subVectors(t.center,this.origin);let n=Ho.dot(this.direction),o=Ho.dot(Ho)-n*n,r=t.radius*t.radius;if(o>r)return null;let a=Math.sqrt(r-o),p=n-a,s=n+a;return s<0?null:p<0?this.at(s,e):this.at(p,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,o,r,a,p,s,u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,c=this.origin;return u>=0?(n=(t.min.x-c.x)*u,o=(t.max.x-c.x)*u):(n=(t.max.x-c.x)*u,o=(t.min.x-c.x)*u),f>=0?(r=(t.min.y-c.y)*f,a=(t.max.y-c.y)*f):(r=(t.max.y-c.y)*f,a=(t.min.y-c.y)*f),n>a||r>o||((r>n||isNaN(n))&&(n=r),(a<o||isNaN(o))&&(o=a),l>=0?(p=(t.min.z-c.z)*l,s=(t.max.z-c.z)*l):(p=(t.max.z-c.z)*l,s=(t.min.z-c.z)*l),n>s||p>o)||((p>n||n!==n)&&(n=p),(s<o||o!==o)&&(o=s),o<0)?null:this.at(n>=0?n:o,e)}intersectsBox(t){return this.intersectBox(t,Ho)!==null}intersectTriangle(t,e,n,o,r){e2.subVectors(e,t),Ds.subVectors(n,t),n2.crossVectors(e2,Ds);let a=this.direction.dot(n2),p;if(a>0){if(o)return null;p=1}else if(a<0)p=-1,a=-a;else return null;si.subVectors(this.origin,t);let s=p*this.direction.dot(Ds.crossVectors(si,Ds));if(s<0)return null;let u=p*this.direction.dot(e2.cross(si));if(u<0||s+u>a)return null;let f=-p*si.dot(n2);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class i{constructor(t,e,n,o,r,a,p,s,u,f,l,c,d,y,m,h){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u,f,l,c,d,y,m,h)}set(t,e,n,o,r,a,p,s,u,f,l,c,d,y,m,h){let b=this.elements;return b[0]=t,b[4]=e,b[8]=n,b[12]=o,b[1]=r,b[5]=a,b[9]=p,b[13]=s,b[2]=u,b[6]=f,b[10]=l,b[14]=c,b[3]=d,b[7]=y,b[11]=m,b[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,o=1/$r.setFromMatrixColumn(t,0).length(),r=1/$r.setFromMatrixColumn(t,1).length(),a=1/$r.setFromMatrixColumn(t,2).length();return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,o=t.y,r=t.z,a=Math.cos(n),p=Math.sin(n),s=Math.cos(o),u=Math.sin(o),f=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let c=a*f,d=a*l,y=p*f,m=p*l;e[0]=s*f,e[4]=-s*l,e[8]=u,e[1]=d+y*u,e[5]=c-m*u,e[9]=-p*s,e[2]=m-c*u,e[6]=y+d*u,e[10]=a*s}else if(t.order==="YXZ"){let c=s*f,d=s*l,y=u*f,m=u*l;e[0]=c+m*p,e[4]=y*p-d,e[8]=a*u,e[1]=a*l,e[5]=a*f,e[9]=-p,e[2]=d*p-y,e[6]=m+c*p,e[10]=a*s}else if(t.order==="ZXY"){let c=s*f,d=s*l,y=u*f,m=u*l;e[0]=c-m*p,e[4]=-a*l,e[8]=y+d*p,e[1]=d+y*p,e[5]=a*f,e[9]=m-c*p,e[2]=-a*u,e[6]=p,e[10]=a*s}else if(t.order==="ZYX"){let c=a*f,d=a*l,y=p*f,m=p*l;e[0]=s*f,e[4]=y*u-d,e[8]=c*u+m,e[1]=s*l,e[5]=m*u+c,e[9]=d*u-y,e[2]=-u,e[6]=p*s,e[10]=a*s}else if(t.order==="YZX"){let c=a*s,d=a*u,y=p*s,m=p*u;e[0]=s*f,e[4]=m-c*l,e[8]=y*l+d,e[1]=l,e[5]=a*f,e[9]=-p*f,e[2]=-u*f,e[6]=d*l+y,e[10]=c-m*l}else if(t.order==="XZY"){let c=a*s,d=a*u,y=p*s,m=p*u;e[0]=s*f,e[4]=-l,e[8]=u*f,e[1]=c*l+m,e[5]=a*f,e[9]=d*l-y,e[2]=y*l-d,e[6]=p*f,e[10]=m*l+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Um)}lookAt(t,e,n){let o=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ui.crossVectors(n,Mn),ui.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ui.crossVectors(n,Mn)),ui.normalize(),Ms.crossVectors(Mn,ui),o[0]=ui.x,o[4]=Ms.x,o[8]=Mn.x,o[1]=ui.y,o[5]=Ms.y,o[9]=Mn.y,o[2]=ui.z,o[6]=Ms.z,o[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[4],s=n[8],u=n[12],f=n[1],l=n[5],c=n[9],d=n[13],y=n[2],m=n[6],h=n[10],b=n[14],E=n[3],T=n[7],g=n[11],x=n[15],U=o[0],V=o[4],O=o[8],P=o[12],L=o[1],D=o[5],I=o[9],H=o[13],N=o[2],Y=o[6],J=o[10],Q=o[14],F=o[3],G=o[7],ft=o[11],yt=o[15];return r[0]=a*U+p*L+s*N+u*F,r[4]=a*V+p*D+s*Y+u*G,r[8]=a*O+p*I+s*J+u*ft,r[12]=a*P+p*H+s*Q+u*yt,r[1]=f*U+l*L+c*N+d*F,r[5]=f*V+l*D+c*Y+d*G,r[9]=f*O+l*I+c*J+d*ft,r[13]=f*P+l*H+c*Q+d*yt,r[2]=y*U+m*L+h*N+b*F,r[6]=y*V+m*D+h*Y+b*G,r[10]=y*O+m*I+h*J+b*ft,r[14]=y*P+m*H+h*Q+b*yt,r[3]=E*U+T*L+g*N+x*F,r[7]=E*V+T*D+g*Y+x*G,r[11]=E*O+T*I+g*J+x*ft,r[15]=E*P+T*H+g*Q+x*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],o=t[8],r=t[12],a=t[1],p=t[5],s=t[9],u=t[13],f=t[2],l=t[6],c=t[10],d=t[14],y=t[3],m=t[7],h=t[11],b=t[15];return y*(+r*s*l-o*u*l-r*p*c+n*u*c+o*p*d-n*s*d)+m*(+e*s*d-e*u*c+r*a*c-o*a*d+o*u*f-r*s*f)+h*(+e*u*l-e*p*d-r*a*l+n*a*d+r*p*f-n*u*f)+b*(-o*p*f-e*s*l+e*p*c+o*a*l-n*a*c+n*s*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=t[9],c=t[10],d=t[11],y=t[12],m=t[13],h=t[14],b=t[15],E=l*h*u-m*c*u+m*s*d-p*h*d-l*s*b+p*c*b,T=y*c*u-f*h*u-y*s*d+a*h*d+f*s*b-a*c*b,g=f*m*u-y*l*u+y*p*d-a*m*d-f*p*b+a*l*b,x=y*l*s-f*m*s-y*p*c+a*m*c+f*p*h-a*l*h,U=e*E+n*T+o*g+r*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/U;return t[0]=E*V,t[1]=(m*c*r-l*h*r-m*o*d+n*h*d+l*o*b-n*c*b)*V,t[2]=(p*h*r-m*s*r+m*o*u-n*h*u-p*o*b+n*s*b)*V,t[3]=(l*s*r-p*c*r-l*o*u+n*c*u+p*o*d-n*s*d)*V,t[4]=T*V,t[5]=(f*h*r-y*c*r+y*o*d-e*h*d-f*o*b+e*c*b)*V,t[6]=(y*s*r-a*h*r-y*o*u+e*h*u+a*o*b-e*s*b)*V,t[7]=(a*c*r-f*s*r+f*o*u-e*c*u-a*o*d+e*s*d)*V,t[8]=g*V,t[9]=(y*l*r-f*m*r-y*n*d+e*m*d+f*n*b-e*l*b)*V,t[10]=(a*m*r-y*p*r+y*n*u-e*m*u-a*n*b+e*p*b)*V,t[11]=(f*p*r-a*l*r-f*n*u+e*l*u+a*n*d-e*p*d)*V,t[12]=x*V,t[13]=(f*m*o-y*l*o+y*n*c-e*m*c-f*n*h+e*l*h)*V,t[14]=(y*p*o-a*m*o-y*n*s+e*m*s+a*n*h-e*p*h)*V,t[15]=(a*l*o-f*p*o+f*n*s-e*l*s-a*n*c+e*p*c)*V,this}scale(t){let e=this.elements,n=t.x,o=t.y,r=t.z;return e[0]*=n,e[4]*=o,e[8]*=r,e[1]*=n,e[5]*=o,e[9]*=r,e[2]*=n,e[6]*=o,e[10]*=r,e[3]*=n,e[7]*=o,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,o))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),o=Math.sin(e),r=1-n,a=t.x,p=t.y,s=t.z,u=r*a,f=r*p;return this.set(u*a+n,u*p-o*s,u*s+o*p,0,u*p+o*s,f*p+n,f*s-o*a,0,u*s-o*p,f*s+o*a,r*s*s+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,o,r,a){return this.set(1,n,r,0,t,1,a,0,e,o,1,0,0,0,0,1),this}compose(t,e,n){let o=this.elements,r=e._x,a=e._y,p=e._z,s=e._w,u=r+r,f=a+a,l=p+p,c=r*u,d=r*f,y=r*l,m=a*f,h=a*l,b=p*l,E=s*u,T=s*f,g=s*l,x=n.x,U=n.y,V=n.z;return o[0]=(1-(m+b))*x,o[1]=(d+g)*x,o[2]=(y-T)*x,o[3]=0,o[4]=(d-g)*U,o[5]=(1-(c+b))*U,o[6]=(h+E)*U,o[7]=0,o[8]=(y+T)*V,o[9]=(h-E)*V,o[10]=(1-(c+m))*V,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,n){let o=this.elements,r=$r.set(o[0],o[1],o[2]).length(),a=$r.set(o[4],o[5],o[6]).length(),p=$r.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),t.x=o[12],t.y=o[13],t.z=o[14],oo.copy(this);let u=1/r,f=1/a,l=1/p;return oo.elements[0]*=u,oo.elements[1]*=u,oo.elements[2]*=u,oo.elements[4]*=f,oo.elements[5]*=f,oo.elements[6]*=f,oo.elements[8]*=l,oo.elements[9]*=l,oo.elements[10]*=l,e.setFromRotationMatrix(oo),n.x=r,n.y=a,n.z=p,this}makePerspective(t,e,n,o,r,a,p=ao,s=!1){let u=this.elements,f=2*r/(e-t),l=2*r/(n-o),c=(e+t)/(e-t),d=(n+o)/(n-o),y,m;if(s)y=r/(a-r),m=a*r/(a-r);else if(p===ao)y=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(p===qa)y=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=l,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,o,r,a,p=ao,s=!1){let u=this.elements,f=2/(e-t),l=2/(n-o),c=-(e+t)/(e-t),d=-(n+o)/(n-o),y,m;if(s)y=1/(a-r),m=a/(a-r);else if(p===ao)y=-2/(a-r),m=-(a+r)/(a-r);else if(p===qa)y=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=l,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=y,u[14]=m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<16;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$r=new v,oo=new _t,Lm=new v(0,0,0),Um=new v(1,1,1),ui=new v,Ms=new v,Mn=new v,n1=new _t,o1=new Je,_n=class i{constructor(t=0,e=0,n=0,o=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,o=this._order){return this._x=t,this._y=e,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let o=t.elements,r=o[0],a=o[4],p=o[8],s=o[1],u=o[5],f=o[9],l=o[2],c=o[6],d=o[10];switch(e){case"XYZ":this._y=Math.asin(qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(p,d),this._z=Math.atan2(s,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(s,r));break;case"ZYX":this._y=Math.asin(-qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(s,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(p,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(p,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return n1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(n1,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return o1.setFromEuler(this),this.setFromQuaternion(o1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cm=0,i1=new v,kr=new Je,Bo=new _t,As=new v,Ha=new v,xm=new v,Om=new Je,r1=new v(1,0,0),a1=new v(0,1,0),p1=new v(0,0,1),s1={type:"added"},vm={type:"removed"},Hr={type:"childadded",child:null},o2={type:"childremoved",child:null},Oe=class i extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new v,e=new _n,n=new Je,o=new v(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _t},normalMatrix:{value:new Yt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(r1,t)}rotateY(t){return this.rotateOnAxis(a1,t)}rotateZ(t){return this.rotateOnAxis(p1,t)}translateOnAxis(t,e){return i1.copy(t).applyQuaternion(this.quaternion),this.position.add(i1.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(r1,t)}translateY(t){return this.translateOnAxis(a1,t)}translateZ(t){return this.translateOnAxis(p1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bo.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);let o=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bo.lookAt(Ha,As,this.up):Bo.lookAt(As,Ha,this.up),this.quaternion.setFromRotationMatrix(Bo),o&&(Bo.extractRotation(o.matrixWorld),kr.setFromRotationMatrix(Bo),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s1),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vm),o2.child=t,this.dispatchEvent(o2),o2.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bo.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bo.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bo),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s1),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,o=this.children.length;n<o;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,t,xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,Om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(p,s){return p[s.uuid]===void 0&&(p[s.uuid]=s.toJSON(t)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(t.geometries,this.geometry);let p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){let s=p.shapes;if(Array.isArray(s))for(let u=0,f=s.length;u<f;u++){let l=s[u];r(t.shapes,l)}else r(t.shapes,s)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let p=[];for(let s=0,u=this.material.length;s<u;s++)p.push(r(t.materials,this.material[s]));o.material=p}else o.material=r(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){let s=this.animations[p];o.animations.push(r(t.animations,s))}}if(e){let p=a(t.geometries),s=a(t.materials),u=a(t.textures),f=a(t.images),l=a(t.shapes),c=a(t.skeletons),d=a(t.animations),y=a(t.nodes);p.length>0&&(n.geometries=p),s.length>0&&(n.materials=s),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),y.length>0&&(n.nodes=y)}return n.object=o,n;function a(p){let s=[];for(let u in p){let f=p[u];delete f.metadata,s.push(f)}return s}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let o=t.children[n];this.add(o.clone())}return this}};Oe.DEFAULT_UP=new v(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var io=new v,Fo=new v,i2=new v,No=new v,Br=new v,Fr=new v,u1=new v,r2=new v,a2=new v,p2=new v,s2=new ue,u2=new ue,f2=new ue,ci=class i{constructor(t=new v,e=new v,n=new v){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,o){o.subVectors(n,e),io.subVectors(t,e),o.cross(io);let r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(t,e,n,o,r){io.subVectors(o,e),Fo.subVectors(n,e),i2.subVectors(t,e);let a=io.dot(io),p=io.dot(Fo),s=io.dot(i2),u=Fo.dot(Fo),f=Fo.dot(i2),l=a*u-p*p;if(l===0)return r.set(0,0,0),null;let c=1/l,d=(u*s-p*f)*c,y=(a*f-p*s)*c;return r.set(1-d-y,y,d)}static containsPoint(t,e,n,o){return this.getBarycoord(t,e,n,o,No)===null?!1:No.x>=0&&No.y>=0&&No.x+No.y<=1}static getInterpolation(t,e,n,o,r,a,p,s){return this.getBarycoord(t,e,n,o,No)===null?(s.x=0,s.y=0,"z"in s&&(s.z=0),"w"in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(r,No.x),s.addScaledVector(a,No.y),s.addScaledVector(p,No.z),s)}static getInterpolatedAttribute(t,e,n,o,r,a){return s2.setScalar(0),u2.setScalar(0),f2.setScalar(0),s2.fromBufferAttribute(t,e),u2.fromBufferAttribute(t,n),f2.fromBufferAttribute(t,o),a.setScalar(0),a.addScaledVector(s2,r.x),a.addScaledVector(u2,r.y),a.addScaledVector(f2,r.z),a}static isFrontFacing(t,e,n,o){return io.subVectors(n,e),Fo.subVectors(t,e),io.cross(Fo).dot(o)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,o){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,n,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return io.subVectors(this.c,this.b),Fo.subVectors(this.a,this.b),io.cross(Fo).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,o,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,o,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,o=this.b,r=this.c,a,p;Br.subVectors(o,n),Fr.subVectors(r,n),r2.subVectors(t,n);let s=Br.dot(r2),u=Fr.dot(r2);if(s<=0&&u<=0)return e.copy(n);a2.subVectors(t,o);let f=Br.dot(a2),l=Fr.dot(a2);if(f>=0&&l<=f)return e.copy(o);let c=s*l-f*u;if(c<=0&&s>=0&&f<=0)return a=s/(s-f),e.copy(n).addScaledVector(Br,a);p2.subVectors(t,r);let d=Br.dot(p2),y=Fr.dot(p2);if(y>=0&&d<=y)return e.copy(r);let m=d*u-s*y;if(m<=0&&u>=0&&y<=0)return p=u/(u-y),e.copy(n).addScaledVector(Fr,p);let h=f*y-d*l;if(h<=0&&l-f>=0&&d-y>=0)return u1.subVectors(r,o),p=(l-f)/(l-f+(d-y)),e.copy(o).addScaledVector(u1,p);let b=1/(h+m+c);return a=m*b,p=c*b,e.copy(n).addScaledVector(Br,a).addScaledVector(Fr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function l2(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,o=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,o),this}setHSL(t,e,n,o=Kt.workingColorSpace){if(t=W2(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=l2(a,r,t+1/3),this.g=l2(a,r,t),this.b=l2(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,o),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=o[1],p=o[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=o[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jo(t.r),this.g=Jo(t.g),this.b=Jo(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Kt.workingToColorSpace(pn.copy(this),t),Math.round(qt(pn.r*255,0,255))*65536+Math.round(qt(pn.g*255,0,255))*256+Math.round(qt(pn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(pn.copy(this),e);let n=pn.r,o=pn.g,r=pn.b,a=Math.max(n,o,r),p=Math.min(n,o,r),s,u,f=(p+a)/2;if(p===a)s=0,u=0;else{let l=a-p;switch(u=f<=.5?l/(a+p):l/(2-a-p),a){case n:s=(o-r)/l+(o<r?6:0);break;case o:s=(r-n)/l+2;break;case r:s=(n-o)/l+4;break}s/=6}return t.h=s,t.s=u,t.l=f,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Ve){Kt.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,o=pn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Is);let n=ja(fi.h,Is.h,e),o=ja(fi.s,Is.s,e),r=ja(fi.l,Is.l,e);return this.setHSL(n,o,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,o=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*o,this.g=r[1]*e+r[4]*n+r[7]*o,this.b=r[2]*e+r[5]*n+r[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Tt;Tt.NAMES=Vd;var Rm=0,sn=class extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ni,this.side=po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=ou,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==po&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nu&&(n.blendSrc=this.blendSrc),this.blendDst!==ou&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L2&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(r){let a=[];for(let p in r){let s=r[p];delete s.metadata,a.push(s)}return a}if(e){let r=o(t.textures),a=o(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let o=e.length;n=new Array(o);for(let r=0;r!==o;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ne=class extends sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=H2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new v,_s=new ot,Dm=0,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[t+o]=e.array[n+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,o){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),o=be(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),o=be(o,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==iu&&(t.usage=this.usage),t}};var tp=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ep=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mm=0,zn=new _t,c2=new Oe,Nr=new v,An=new bn,Ba=new bn,qe=new v,le=class i extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q2(t)?ep:tp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return c2.lookAt(t),c2.updateMatrix(),this.applyMatrix4(c2.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let o=0,r=t.length;o<r;o++){let a=t[o];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(t.length,e.count);for(let o=0;o<n;o++){let r=t[o];e.setXYZ(o,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,o=e.length;n<o;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let p=e[r];Ba.setFromBufferAttribute(p),this.morphTargetsRelative?(qe.addVectors(An.min,Ba.min),An.expandByPoint(qe),qe.addVectors(An.max,Ba.max),An.expandByPoint(qe)):(An.expandByPoint(Ba.min),An.expandByPoint(Ba.max))}An.getCenter(n);let o=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),o=Math.max(o,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let p=e[r],s=this.morphTargetsRelative;for(let u=0,f=p.count;u<f;u++)qe.fromBufferAttribute(p,u),s&&(Nr.fromBufferAttribute(t,u),qe.add(Nr)),o=Math.max(o,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,o=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),p=[],s=[];for(let O=0;O<n.count;O++)p[O]=new v,s[O]=new v;let u=new v,f=new v,l=new v,c=new ot,d=new ot,y=new ot,m=new v,h=new v;function b(O,P,L){u.fromBufferAttribute(n,O),f.fromBufferAttribute(n,P),l.fromBufferAttribute(n,L),c.fromBufferAttribute(r,O),d.fromBufferAttribute(r,P),y.fromBufferAttribute(r,L),f.sub(u),l.sub(u),d.sub(c),y.sub(c);let D=1/(d.x*y.y-y.x*d.y);isFinite(D)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(l,-d.y).multiplyScalar(D),h.copy(l).multiplyScalar(d.x).addScaledVector(f,-y.x).multiplyScalar(D),p[O].add(m),p[P].add(m),p[L].add(m),s[O].add(h),s[P].add(h),s[L].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,P=E.length;O<P;++O){let L=E[O],D=L.start,I=L.count;for(let H=D,N=D+I;H<N;H+=3)b(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let T=new v,g=new v,x=new v,U=new v;function V(O){x.fromBufferAttribute(o,O),U.copy(x);let P=p[O];T.copy(P),T.sub(x.multiplyScalar(x.dot(P))).normalize(),g.crossVectors(U,P);let D=g.dot(s[O])<0?-1:1;a.setXYZW(O,T.x,T.y,T.z,D)}for(let O=0,P=E.length;O<P;++O){let L=E[O],D=L.start,I=L.count;for(let H=D,N=D+I;H<N;H+=3)V(t.getX(H+0)),V(t.getX(H+1)),V(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);let o=new v,r=new v,a=new v,p=new v,s=new v,u=new v,f=new v,l=new v;if(t)for(let c=0,d=t.count;c<d;c+=3){let y=t.getX(c+0),m=t.getX(c+1),h=t.getX(c+2);o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,h),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),p.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),u.fromBufferAttribute(n,h),p.add(f),s.add(f),u.add(f),n.setXYZ(y,p.x,p.y,p.z),n.setXYZ(m,s.x,s.y,s.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let c=0,d=e.count;c<d;c+=3)o.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(p,s){let u=p.array,f=p.itemSize,l=p.normalized,c=new u.constructor(s.length*f),d=0,y=0;for(let m=0,h=s.length;m<h;m++){p.isInterleavedBufferAttribute?d=s[m]*p.data.stride+p.offset:d=s[m]*f;for(let b=0;b<f;b++)c[y++]=u[d++]}return new _e(c,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,o=this.attributes;for(let p in o){let s=o[p],u=t(s,n);e.setAttribute(p,u)}let r=this.morphAttributes;for(let p in r){let s=[],u=r[p];for(let f=0,l=u.length;f<l;f++){let c=u[f],d=t(c,n);s.push(d)}e.morphAttributes[p]=s}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let p=0,s=a.length;p<s;p++){let u=a[p];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let s=this.parameters;for(let u in s)s[u]!==void 0&&(t[u]=s[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let s in n){let u=n[s];t.data.attributes[s]=u.toJSON(t.data)}let o={},r=!1;for(let s in this.morphAttributes){let u=this.morphAttributes[s],f=[];for(let l=0,c=u.length;l<c;l++){let d=u[l];f.push(d.toJSON(t.data))}f.length>0&&(o[s]=f,r=!0)}r&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let o=t.attributes;for(let u in o){let f=o[u];this.setAttribute(u,f.clone(e))}let r=t.morphAttributes;for(let u in r){let f=[],l=r[u];for(let c=0,d=l.length;c<d;c++)f.push(l[c].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,f=a.length;u<f;u++){let l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}let p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());let s=t.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},f1=new _t,$i=new hi,$s=new Pn,l1=new v,ks=new v,Hs=new v,Bs=new v,h2=new v,Fs=new v,c1=new v,Ns=new v,Bt=class extends Oe{constructor(t=new le,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}getVertexPosition(t,e){let n=this.geometry,o=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(o,t);let p=this.morphTargetInfluences;if(r&&p){Fs.set(0,0,0);for(let s=0,u=r.length;s<u;s++){let f=p[s],l=r[s];f!==0&&(h2.fromBufferAttribute(l,t),a?Fs.addScaledVector(h2,f):Fs.addScaledVector(h2.sub(e),f))}e.add(Fs)}return e}raycast(t,e){let n=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!($s.containsPoint($i.origin)===!1&&($i.intersectSphere($s,l1)===null||$i.origin.distanceToSquared(l1)>(t.far-t.near)**2))&&(f1.copy(r).invert(),$i.copy(t.ray).applyMatrix4(f1),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let o,r=this.geometry,a=this.material,p=r.index,s=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,l=r.attributes.normal,c=r.groups,d=r.drawRange;if(p!==null)if(Array.isArray(a))for(let y=0,m=c.length;y<m;y++){let h=c[y],b=a[h.materialIndex],E=Math.max(h.start,d.start),T=Math.min(p.count,Math.min(h.start+h.count,d.start+d.count));for(let g=E,x=T;g<x;g+=3){let U=p.getX(g),V=p.getX(g+1),O=p.getX(g+2);o=Xs(this,b,t,n,u,f,l,U,V,O),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=h.materialIndex,e.push(o))}}else{let y=Math.max(0,d.start),m=Math.min(p.count,d.start+d.count);for(let h=y,b=m;h<b;h+=3){let E=p.getX(h),T=p.getX(h+1),g=p.getX(h+2);o=Xs(this,a,t,n,u,f,l,E,T,g),o&&(o.faceIndex=Math.floor(h/3),e.push(o))}}else if(s!==void 0)if(Array.isArray(a))for(let y=0,m=c.length;y<m;y++){let h=c[y],b=a[h.materialIndex],E=Math.max(h.start,d.start),T=Math.min(s.count,Math.min(h.start+h.count,d.start+d.count));for(let g=E,x=T;g<x;g+=3){let U=g,V=g+1,O=g+2;o=Xs(this,b,t,n,u,f,l,U,V,O),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=h.materialIndex,e.push(o))}}else{let y=Math.max(0,d.start),m=Math.min(s.count,d.start+d.count);for(let h=y,b=m;h<b;h+=3){let E=h,T=h+1,g=h+2;o=Xs(this,a,t,n,u,f,l,E,T,g),o&&(o.faceIndex=Math.floor(h/3),e.push(o))}}}};function Am(i,t,e,n,o,r,a,p){let s;if(t.side===yn?s=n.intersectTriangle(a,r,o,!0,p):s=n.intersectTriangle(o,r,a,t.side===po,p),s===null)return null;Ns.copy(p),Ns.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ns);return u<e.near||u>e.far?null:{distance:u,point:Ns.clone(),object:i}}function Xs(i,t,e,n,o,r,a,p,s,u){i.getVertexPosition(p,ks),i.getVertexPosition(s,Hs),i.getVertexPosition(u,Bs);let f=Am(i,t,e,n,ks,Hs,Bs,c1);if(f){let l=new v;ci.getBarycoord(c1,ks,Hs,Bs,l),o&&(f.uv=ci.getInterpolatedAttribute(o,p,s,u,l,new ot)),r&&(f.uv1=ci.getInterpolatedAttribute(r,p,s,u,l,new ot)),a&&(f.normal=ci.getInterpolatedAttribute(a,p,s,u,l,new v),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:p,b:s,c:u,normal:new v,materialIndex:0};ci.getNormal(ks,Hs,Bs,c.normal),f.face=c,f.barycoord=l}return f}var ji=class i extends le{constructor(t=1,e=1,n=1,o=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:o,heightSegments:r,depthSegments:a};let p=this;o=Math.floor(o),r=Math.floor(r),a=Math.floor(a);let s=[],u=[],f=[],l=[],c=0,d=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,o,a,2),y("x","z","y",1,-1,t,n,-e,o,a,3),y("x","y","z",1,-1,t,e,n,o,r,4),y("x","y","z",-1,-1,t,e,-n,o,r,5),this.setIndex(s),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(l,2));function y(m,h,b,E,T,g,x,U,V,O,P){let L=g/V,D=x/O,I=g/2,H=x/2,N=U/2,Y=V+1,J=O+1,Q=0,F=0,G=new v;for(let ft=0;ft<J;ft++){let yt=ft*D-H;for(let $t=0;$t<Y;$t++){let re=$t*L-I;G[m]=re*E,G[h]=yt*T,G[b]=N,u.push(G.x,G.y,G.z),G[m]=0,G[h]=0,G[b]=U>0?1:-1,f.push(G.x,G.y,G.z),l.push($t/V),l.push(1-ft/O),Q+=1}}for(let ft=0;ft<O;ft++)for(let yt=0;yt<V;yt++){let $t=c+yt+Y*ft,re=c+yt+Y*(ft+1),te=c+(yt+1)+Y*(ft+1),ee=c+(yt+1)+Y*ft;s.push($t,re,ee),s.push(re,te,ee),F+=6}p.addGroup(d,F,P),d+=F,c+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function pr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let o=i[e][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=o.clone():Array.isArray(o)?t[e][n]=o.slice():t[e][n]=o}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=pr(i[e]);for(let o in n)t[o]=n[o]}return t}function Im(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function K2(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Wn={clone:pr,merge:cn},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=Im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let o in this.uniforms){let a=this.uniforms[o].value;a&&a.isTexture?e.uniforms[o]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[o]={type:"m4",value:a.toArray()}:e.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},np=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ao,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new v,h1=new ot,d1=new ot,Xe=class extends np{constructor(t=50,e=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,h1,d1),e.subVectors(d1,h1)}setViewOffset(t,e,n,o,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,o=this.aspect*n,r=-.5*o,a=this.view;if(this.view!==null&&this.view.enabled){let s=a.fullWidth,u=a.fullHeight;r+=a.offsetX*o/s,e-=a.offsetY*n/u,o*=a.width/s,n*=a.height/u}let p=this.filmOffset;p!==0&&(r+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xr=-90,Jr=1,su=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new Xe(Xr,Jr,t,e);o.layers=this.layers,this.add(o);let r=new Xe(Xr,Jr,t,e);r.layers=this.layers,this.add(r);let a=new Xe(Xr,Jr,t,e);a.layers=this.layers,this.add(a);let p=new Xe(Xr,Jr,t,e);p.layers=this.layers,this.add(p);let s=new Xe(Xr,Jr,t,e);s.layers=this.layers,this.add(s);let u=new Xe(Xr,Jr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,o,r,a,p,s]=e;for(let u of e)this.remove(u);if(t===ao)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(t===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,p,s,u,f]=this.children,l=t.getRenderTarget(),c=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,o),t.render(e,r),t.setRenderTarget(n,1,o),t.render(e,a),t.setRenderTarget(n,2,o),t.render(e,p),t.setRenderTarget(n,3,o),t.render(e,s),t.setRenderTarget(n,4,o),t.render(e,u),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,o),t.render(e,f),t.setRenderTarget(l,c,d),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},op=class extends je{constructor(t=[],e=ir,n,o,r,a,p,s,u,f){super(t,e,n,o,r,a,p,s,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uu=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},o=[n,n,n,n,n,n];this.texture=new op(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ji(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Qe});r.uniforms.tEquirect.value=e;let a=new Bt(o,r),p=e.minFilter;return e.minFilter===Cn&&(e.minFilter=en),new su(1,10,this).update(t,a),e.minFilter=p,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,o=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,o);t.setRenderTarget(r)}},Ie=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},km={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let o=null,r=null,a=null,p=this._targetRay,s=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let m of t.hand.values()){let h=e.getJointPose(m,n),b=this._getHandJoint(u,m);h!==null&&(b.matrix.fromArray(h.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=h.radius),b.visible=h!==null}let f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],c=f.position.distanceTo(l.position),d=.02,y=.005;u.inputState.pinching&&c>d+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=d-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else s!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1));p!==null&&(o=e.getPose(t.targetRaySpace,n),o===null&&r!==null&&(o=r),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(km)))}return p!==null&&(p.visible=o!==null),s!==null&&(s.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ip=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rp=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=iu,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let o=0,r=this.stride;o<r;o++)this.array[t+o]=e.array[n+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new v,oa=class i{constructor(t,e,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ro(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ro(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ro(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ro(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),o=be(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),o=be(o,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var b1=new v,y1=new ue,m1=new ue,Hm=new v,g1=new _t,Js=new v,d2=new Pn,T1=new _t,b2=new hi,ap=class extends Bt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=P2,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Js),this.boundingBox.expandByPoint(Js)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Js),this.boundingSphere.expandByPoint(Js)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,o=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),d2.copy(this.boundingSphere),d2.applyMatrix4(o),t.ray.intersectsSphere(d2)!==!1&&(T1.copy(o).invert(),b2.copy(t.ray).applyMatrix4(T1),!(this.boundingBox!==null&&b2.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,b2)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ue,e=this.geometry.attributes.skinWeight;for(let n=0,o=e.count;n<o;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===P2?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,o=this.geometry;y1.fromBufferAttribute(o.attributes.skinIndex,t),m1.fromBufferAttribute(o.attributes.skinWeight,t),b1.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=m1.getComponent(r);if(a!==0){let p=y1.getComponent(r);g1.multiplyMatrices(n.bones[p].matrixWorld,n.boneInverses[p]),e.addScaledVector(Hm.copy(b1).applyMatrix4(g1),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},ia=class extends Oe{constructor(){super(),this.isBone=!0,this.type="Bone"}},zo=class extends je{constructor(t=null,e=1,n=1,o,r,a,p,s,u=ze,f=ze,l,c){super(null,a,p,s,u,f,o,r,l,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},E1=new _t,Bm=new _t,pp=class i{constructor(t=[],e=[]){this.uuid=jn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,o=this.bones.length;n<o;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new _t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,o=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let p=t[r]?t[r].matrixWorld:Bm;E1.multiplyMatrices(p,e[r]),E1.toArray(n,r*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new zo(e,t,t,mn,Gn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let o=this.bones[e];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,o=t.bones.length;n<o;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ia),this.bones.push(a),this.boneInverses.push(new _t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let o=0,r=e.length;o<r;o++){let a=e[o];t.bones.push(a.uuid);let p=n[o];t.boneInverses.push(p.toArray())}return t}},di=class extends _e{constructor(t,e,n,o=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zr=new _t,V1=new _t,zs=[],S1=new bn,Fm=new _t,Fa=new Bt,Na=new Pn,Zn=class extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,Fm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zr),S1.copy(t.boundingBox).applyMatrix4(zr),this.boundingBox.union(S1)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zr),Na.copy(t.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,o=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let p=0;p<n.length;p++)n[p]=o[a+p]}raycast(t,e){let n=this.matrixWorld,o=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),t.ray.intersectsSphere(Na)!==!1))for(let r=0;r<o;r++){this.getMatrixAt(r,zr),V1.multiplyMatrices(n,zr),Fa.matrixWorld=V1,Fa.raycast(t,zs);for(let a=0,p=zs.length;a<p;a++){let s=zs[a];s.instanceId=r,s.object=this,e.push(s)}zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new zo(new Float32Array(o*this.count),o,this.count,Yu,Gn));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let p=this.geometry.morphTargetsRelative?1:1-a,s=o*t;r[s]=p,r.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},y2=new v,Nm=new v,Xm=new Yt,Qn=class{constructor(t=new v(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,o){return this.normal.set(t,e,n),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let o=y2.subVectors(n,e).cross(Nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(y2),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xm.getNormalMatrix(t),o=this.coplanarPoint(y2).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Pn,Jm=new ot(.5,.5),Qs=new v,ra=class{constructor(t=new Qn,e=new Qn,n=new Qn,o=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,o,r,a]}set(t,e,n,o,r,a){let p=this.planes;return p[0].copy(t),p[1].copy(e),p[2].copy(n),p[3].copy(o),p[4].copy(r),p[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ao,n=!1){let o=this.planes,r=t.elements,a=r[0],p=r[1],s=r[2],u=r[3],f=r[4],l=r[5],c=r[6],d=r[7],y=r[8],m=r[9],h=r[10],b=r[11],E=r[12],T=r[13],g=r[14],x=r[15];if(o[0].setComponents(u-a,d-f,b-y,x-E).normalize(),o[1].setComponents(u+a,d+f,b+y,x+E).normalize(),o[2].setComponents(u+p,d+l,b+m,x+T).normalize(),o[3].setComponents(u-p,d-l,b-m,x-T).normalize(),n)o[4].setComponents(s,c,h,g).normalize(),o[5].setComponents(u-s,d-c,b-h,x-g).normalize();else if(o[4].setComponents(u-s,d-c,b-h,x-g).normalize(),e===ao)o[5].setComponents(u+s,d+c,b+h,x+g).normalize();else if(e===qa)o[5].setComponents(s,c,h,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=Jm.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,o=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<o)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let o=e[n];if(Qs.x=o.normal.x>0?t.max.x:t.min.x,Qs.y=o.normal.y>0?t.max.y:t.min.y,Qs.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var aa=class extends sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fu=new v,lu=new v,w1=new _t,Xa=new hi,js=new Pn,m2=new v,P1=new v,Zi=class extends Oe{constructor(t=new le,e=new aa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let o=1,r=e.count;o<r;o++)fu.fromBufferAttribute(e,o-1),lu.fromBufferAttribute(e,o),n[o]=n[o-1],n[o]+=fu.distanceTo(lu);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(o),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;w1.copy(o).invert(),Xa.copy(t.ray).applyMatrix4(w1);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){let d=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let m=d,h=y-1;m<h;m+=u){let b=f.getX(m),E=f.getX(m+1),T=Zs(this,t,Xa,s,b,E,m);T&&e.push(T)}if(this.isLineLoop){let m=f.getX(y-1),h=f.getX(d),b=Zs(this,t,Xa,s,m,h,y-1);b&&e.push(b)}}else{let d=Math.max(0,a.start),y=Math.min(c.count,a.start+a.count);for(let m=d,h=y-1;m<h;m+=u){let b=Zs(this,t,Xa,s,m,m+1,m);b&&e.push(b)}if(this.isLineLoop){let m=Zs(this,t,Xa,s,y-1,d,y-1);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function Zs(i,t,e,n,o,r,a){let p=i.geometry.attributes.position;if(fu.fromBufferAttribute(p,o),lu.fromBufferAttribute(p,r),e.distanceSqToSegment(fu,lu,m2,P1)>n)return;m2.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(m2);if(!(u<t.near||u>t.far))return{distance:u,point:P1.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var L1=new v,U1=new v,sp=class extends Zi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let o=0,r=e.count;o<r;o+=2)L1.fromBufferAttribute(e,o),U1.fromBufferAttribute(e,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+L1.distanceTo(U1);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},up=class extends Zi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},pa=class extends sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},C1=new _t,U2=new hi,Ys=new Pn,Gs=new v,fp=class extends Oe{constructor(t=new le,e=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(o),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;C1.copy(o).invert(),U2.copy(t.ray).applyMatrix4(C1);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=n.index,l=n.attributes.position;if(u!==null){let c=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let y=c,m=d;y<m;y++){let h=u.getX(y);Gs.fromBufferAttribute(l,h),x1(Gs,h,s,o,t,e,this)}}else{let c=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let y=c,m=d;y<m;y++)Gs.fromBufferAttribute(l,y),x1(Gs,y,s,o,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function x1(i,t,e,n,o,r,a){let p=U2.distanceSqToPoint(i);if(p<e){let s=new v;U2.closestPointToPoint(i,s),s.applyMatrix4(n);let u=o.ray.origin.distanceTo(s);if(u<o.near||u>o.far)return;r.push({distance:u,distanceToRay:Math.sqrt(p),point:s,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var so=class extends je{constructor(t,e,n,o,r,a,p,s,u){super(t,e,n,o,r,a,p,s,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends je{constructor(t,e,n=mi,o,r,a,p=ze,s=ze,u,f=Gr,l=1){if(f!==Gr&&f!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:t,height:e,depth:l};super(c,o,r,a,p,s,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lp=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Gi=class i extends le{constructor(t=1,e=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:o},e=Math.max(3,e);let r=[],a=[],p=[],s=[],u=new v,f=new ot;a.push(0,0,0),p.push(0,0,1),s.push(.5,.5);for(let l=0,c=3;l<=e;l++,c+=3){let d=n+l/e*o;u.x=t*Math.cos(d),u.y=t*Math.sin(d),a.push(u.x,u.y,u.z),p.push(0,0,1),f.x=(a[c]/t+1)/2,f.y=(a[c+1]/t+1)/2,s.push(f.x,f.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yn=class i extends le{constructor(t=1,e=1,n=1,o=32,r=1,a=!1,p=0,s=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:o,heightSegments:r,openEnded:a,thetaStart:p,thetaLength:s};let u=this;o=Math.floor(o),r=Math.floor(r);let f=[],l=[],c=[],d=[],y=0,m=[],h=n/2,b=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(d,2));function E(){let g=new v,x=new v,U=0,V=(e-t)/n;for(let O=0;O<=r;O++){let P=[],L=O/r,D=L*(e-t)+t;for(let I=0;I<=o;I++){let H=I/o,N=H*s+p,Y=Math.sin(N),J=Math.cos(N);x.x=D*Y,x.y=-L*n+h,x.z=D*J,l.push(x.x,x.y,x.z),g.set(Y,V,J).normalize(),c.push(g.x,g.y,g.z),d.push(H,1-L),P.push(y++)}m.push(P)}for(let O=0;O<o;O++)for(let P=0;P<r;P++){let L=m[P][O],D=m[P+1][O],I=m[P+1][O+1],H=m[P][O+1];(t>0||P!==0)&&(f.push(L,D,H),U+=3),(e>0||P!==r-1)&&(f.push(D,I,H),U+=3)}u.addGroup(b,U,0),b+=U}function T(g){let x=y,U=new ot,V=new v,O=0,P=g===!0?t:e,L=g===!0?1:-1;for(let I=1;I<=o;I++)l.push(0,h*L,0),c.push(0,L,0),d.push(.5,.5),y++;let D=y;for(let I=0;I<=o;I++){let N=I/o*s+p,Y=Math.cos(N),J=Math.sin(N);V.x=P*J,V.y=h*L,V.z=P*Y,l.push(V.x,V.y,V.z),c.push(0,L,0),U.x=Y*.5+.5,U.y=J*.5*L+.5,d.push(U.x,U.y),y++}for(let I=0;I<o;I++){let H=x+I,N=D+I;g===!0?f.push(N,N+1,H):f.push(N+1,N,H),O+=3}u.addGroup(b,O,g===!0?1:2),b+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class i extends Yn{constructor(t=1,e=1,n=32,o=1,r=!1,a=0,p=Math.PI*2){super(0,t,e,n,o,r,a,p),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:p}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cu=class i extends le{constructor(t=[],e=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:o};let r=[],a=[];p(o),u(n),f(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(a,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function p(E){let T=new v,g=new v,x=new v;for(let U=0;U<e.length;U+=3)d(e[U+0],T),d(e[U+1],g),d(e[U+2],x),s(T,g,x,E)}function s(E,T,g,x){let U=x+1,V=[];for(let O=0;O<=U;O++){V[O]=[];let P=E.clone().lerp(g,O/U),L=T.clone().lerp(g,O/U),D=U-O;for(let I=0;I<=D;I++)I===0&&O===U?V[O][I]=P:V[O][I]=P.clone().lerp(L,I/D)}for(let O=0;O<U;O++)for(let P=0;P<2*(U-O)-1;P++){let L=Math.floor(P/2);P%2===0?(c(V[O][L+1]),c(V[O+1][L]),c(V[O][L])):(c(V[O][L+1]),c(V[O+1][L+1]),c(V[O+1][L]))}}function u(E){let T=new v;for(let g=0;g<r.length;g+=3)T.x=r[g+0],T.y=r[g+1],T.z=r[g+2],T.normalize().multiplyScalar(E),r[g+0]=T.x,r[g+1]=T.y,r[g+2]=T.z}function f(){let E=new v;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];let g=h(E)/2/Math.PI+.5,x=b(E)/Math.PI+.5;a.push(g,1-x)}y(),l()}function l(){for(let E=0;E<a.length;E+=6){let T=a[E+0],g=a[E+2],x=a[E+4],U=Math.max(T,g,x),V=Math.min(T,g,x);U>.9&&V<.1&&(T<.2&&(a[E+0]+=1),g<.2&&(a[E+2]+=1),x<.2&&(a[E+4]+=1))}}function c(E){r.push(E.x,E.y,E.z)}function d(E,T){let g=E*3;T.x=t[g+0],T.y=t[g+1],T.z=t[g+2]}function y(){let E=new v,T=new v,g=new v,x=new v,U=new ot,V=new ot,O=new ot;for(let P=0,L=0;P<r.length;P+=9,L+=6){E.set(r[P+0],r[P+1],r[P+2]),T.set(r[P+3],r[P+4],r[P+5]),g.set(r[P+6],r[P+7],r[P+8]),U.set(a[L+0],a[L+1]),V.set(a[L+2],a[L+3]),O.set(a[L+4],a[L+5]),x.copy(E).add(T).add(g).divideScalar(3);let D=h(x);m(U,L+0,E,D),m(V,L+2,T,D),m(O,L+4,g,D)}}function m(E,T,g,x){x<0&&E.x===1&&(a[T]=E.x-1),g.x===0&&g.z===0&&(a[T]=x/2/Math.PI+.5)}function h(E){return Math.atan2(E.z,-E.x)}function b(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,o=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(o),e.push(r),o=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),o=0,r=n.length,a;e?a=e:a=t*n[r-1];let p=0,s=r-1,u;for(;p<=s;)if(o=Math.floor(p+(s-p)/2),u=n[o]-a,u<0)p=o+1;else if(u>0)s=o-1;else{s=o;break}if(o=s,n[o]===a)return o/(r-1);let f=n[o],c=n[o+1]-f,d=(a-f)/c;return(o+d)/(r-1)}getTangent(t,e){let o=t-1e-4,r=t+1e-4;o<0&&(o=0),r>1&&(r=1);let a=this.getPoint(o),p=this.getPoint(r),s=e||(a.isVector2?new ot:new v);return s.copy(p).sub(a).normalize(),s}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new v,o=[],r=[],a=[],p=new v,s=new _t;for(let d=0;d<=t;d++){let y=d/t;o[d]=this.getTangentAt(y,new v)}r[0]=new v,a[0]=new v;let u=Number.MAX_VALUE,f=Math.abs(o[0].x),l=Math.abs(o[0].y),c=Math.abs(o[0].z);f<=u&&(u=f,n.set(1,0,0)),l<=u&&(u=l,n.set(0,1,0)),c<=u&&n.set(0,0,1),p.crossVectors(o[0],n).normalize(),r[0].crossVectors(o[0],p),a[0].crossVectors(o[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),p.crossVectors(o[d-1],o[d]),p.length()>Number.EPSILON){p.normalize();let y=Math.acos(qt(o[d-1].dot(o[d]),-1,1));r[d].applyMatrix4(s.makeRotationAxis(p,y))}a[d].crossVectors(o[d],r[d])}if(e===!0){let d=Math.acos(qt(r[0].dot(r[t]),-1,1));d/=t,o[0].dot(p.crossVectors(r[0],r[t]))>0&&(d=-d);for(let y=1;y<=t;y++)r[y].applyMatrix4(s.makeRotationAxis(o[y],d*y)),a[y].crossVectors(o[y],r[y])}return{tangents:o,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ua=class extends $n{constructor(t=0,e=0,n=1,o=1,r=0,a=Math.PI*2,p=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=o,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=p,this.aRotation=s}getPoint(t,e=new ot){let n=e,o=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=o;for(;r>o;)r-=o;r<Number.EPSILON&&(a?r=0:r=o),this.aClockwise===!0&&!a&&(r===o?r=-o:r=r-o);let p=this.aStartAngle+t*r,s=this.aX+this.xRadius*Math.cos(p),u=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){let f=Math.cos(this.aRotation),l=Math.sin(this.aRotation),c=s-this.aX,d=u-this.aY;s=c*f-d*l+this.aX,u=c*l+d*f+this.aY}return n.set(s,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hu=class extends ua{constructor(t,e,n,o,r,a){super(t,e,n,n,o,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tc(){let i=0,t=0,e=0,n=0;function o(r,a,p,s){i=r,t=p,e=-3*r+3*a-2*p-s,n=2*r-2*a+p+s}return{initCatmullRom:function(r,a,p,s,u){o(a,p,u*(p-r),u*(s-a))},initNonuniformCatmullRom:function(r,a,p,s,u,f,l){let c=(a-r)/u-(p-r)/(u+f)+(p-a)/f,d=(p-a)/f-(s-a)/(f+l)+(s-p)/l;c*=f,d*=f,o(a,p,c,d)},calc:function(r){let a=r*r,p=a*r;return i+t*r+e*a+n*p}}}var Ws=new v,g2=new tc,T2=new tc,E2=new tc,du=class extends $n{constructor(t=[],e=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=o}getPoint(t,e=new v){let n=e,o=this.points,r=o.length,a=(r-(this.closed?0:1))*t,p=Math.floor(a),s=a-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/r)+1)*r:s===0&&p===r-1&&(p=r-2,s=1);let u,f;this.closed||p>0?u=o[(p-1)%r]:(Ws.subVectors(o[0],o[1]).add(o[0]),u=Ws);let l=o[p%r],c=o[(p+1)%r];if(this.closed||p+2<r?f=o[(p+2)%r]:(Ws.subVectors(o[r-1],o[r-2]).add(o[r-1]),f=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,y=Math.pow(u.distanceToSquared(l),d),m=Math.pow(l.distanceToSquared(c),d),h=Math.pow(c.distanceToSquared(f),d);m<1e-4&&(m=1),y<1e-4&&(y=m),h<1e-4&&(h=m),g2.initNonuniformCatmullRom(u.x,l.x,c.x,f.x,y,m,h),T2.initNonuniformCatmullRom(u.y,l.y,c.y,f.y,y,m,h),E2.initNonuniformCatmullRom(u.z,l.z,c.z,f.z,y,m,h)}else this.curveType==="catmullrom"&&(g2.initCatmullRom(u.x,l.x,c.x,f.x,this.tension),T2.initCatmullRom(u.y,l.y,c.y,f.y,this.tension),E2.initCatmullRom(u.z,l.z,c.z,f.z,this.tension));return n.set(g2.calc(s),T2.calc(s),E2.calc(s)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(new v().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function O1(i,t,e,n,o){let r=(n-t)*.5,a=(o-e)*.5,p=i*i,s=i*p;return(2*e-2*n+r+a)*s+(-3*e+3*n-2*r-a)*p+r*i+e}function zm(i,t){let e=1-i;return e*e*t}function Qm(i,t){return 2*(1-i)*i*t}function jm(i,t){return i*i*t}function Za(i,t,e,n){return zm(i,t)+Qm(i,e)+jm(i,n)}function Zm(i,t){let e=1-i;return e*e*e*t}function Ym(i,t){let e=1-i;return 3*e*e*i*t}function Gm(i,t){return 3*(1-i)*i*i*t}function Wm(i,t){return i*i*i*t}function Ya(i,t,e,n,o){return Zm(i,t)+Ym(i,e)+Gm(i,n)+Wm(i,o)}var cp=class extends $n{constructor(t=new ot,e=new ot,n=new ot,o=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new ot){let n=e,o=this.v0,r=this.v1,a=this.v2,p=this.v3;return n.set(Ya(t,o.x,r.x,a.x,p.x),Ya(t,o.y,r.y,a.y,p.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bu=class extends $n{constructor(t=new v,e=new v,n=new v,o=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new v){let n=e,o=this.v0,r=this.v1,a=this.v2,p=this.v3;return n.set(Ya(t,o.x,r.x,a.x,p.x),Ya(t,o.y,r.y,a.y,p.y),Ya(t,o.z,r.z,a.z,p.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hp=class extends $n{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yu=class extends $n{constructor(t=new v,e=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new v){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new v){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dp=class extends $n{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,o=this.v0,r=this.v1,a=this.v2;return n.set(Za(t,o.x,r.x,a.x),Za(t,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mu=class extends $n{constructor(t=new v,e=new v,n=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new v){let n=e,o=this.v0,r=this.v1,a=this.v2;return n.set(Za(t,o.x,r.x,a.x),Za(t,o.y,r.y,a.y),Za(t,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,o=this.points,r=(o.length-1)*t,a=Math.floor(r),p=r-a,s=o[a===0?a:a-1],u=o[a],f=o[a>o.length-2?o.length-1:a+1],l=o[a>o.length-3?o.length-1:a+2];return n.set(O1(p,s.x,u.x,f.x,l.x),O1(p,s.y,u.y,f.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(o.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(new ot().fromArray(o))}return this}},v1=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:du,CubicBezierCurve:cp,CubicBezierCurve3:bu,EllipseCurve:ua,LineCurve:hp,LineCurve3:yu,QuadraticBezierCurve:dp,QuadraticBezierCurve3:mu,SplineCurve:fa}),gu=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new v1[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),o=this.getCurveLengths(),r=0;for(;r<o.length;){if(o[r]>=n){let a=o[r]-n,p=this.curves[r],s=p.getLength(),u=s===0?0:1-a/s;return p.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,o=this.curves.length;n<o;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let o=0,r=this.curves;o<r.length;o++){let a=r[o],p=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,s=a.getPoints(p);for(let u=0;u<s.length;u++){let f=s[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let o=t.curves[e];this.curves.push(new v1[o.type]().fromJSON(o))}return this}},Wi=class extends gu{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new hp(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,o){let r=new dp(this.currentPoint.clone(),new ot(t,e),new ot(n,o));return this.curves.push(r),this.currentPoint.set(n,o),this}bezierCurveTo(t,e,n,o,r,a){let p=new cp(this.currentPoint.clone(),new ot(t,e),new ot(n,o),new ot(r,a));return this.curves.push(p),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new fa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,o,r,a){let p=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(t+p,e+s,n,o,r,a),this}absarc(t,e,n,o,r,a){return this.absellipse(t,e,n,n,o,r,a),this}ellipse(t,e,n,o,r,a,p,s){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,o,r,a,p,s),this}absellipse(t,e,n,o,r,a,p,s){let u=new ua(t,e,n,o,r,a,p,s);if(this.curves.length>0){let l=u.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bi=class extends Wi{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,o=this.holes.length;n<o;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let o=t.holes[e];this.holes.push(new Wi().fromJSON(o))}return this}};function qm(i,t,e=2){let n=t&&t.length,o=n?t[0]*e:i.length,r=Sd(i,0,o,e,!0),a=[];if(!r||r.next===r.prev)return a;let p,s,u;if(n&&(r=o4(i,t,r,e)),i.length>80*e){p=1/0,s=1/0;let f=-1/0,l=-1/0;for(let c=e;c<o;c+=e){let d=i[c],y=i[c+1];d<p&&(p=d),y<s&&(s=y),d>f&&(f=d),y>l&&(l=y)}u=Math.max(f-p,l-s),u=u!==0?32767/u:0}return bp(r,a,e,p,s,u,0),a}function Sd(i,t,e,n,o){let r;if(o===d4(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=R1(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=R1(a/n|0,i[a],i[a+1],r);return r&&la(r,r.next)&&(mp(r),r=r.next),r}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(la(e,e.next)||Ae(e.prev,e,e.next)===0)){if(mp(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bp(i,t,e,n,o,r,a){if(!i)return;!a&&r&&s4(i,n,o,r);let p=i;for(;i.prev!==i.next;){let s=i.prev,u=i.next;if(r?t4(i,n,o,r):Km(i)){t.push(s.i,i.i,u.i),mp(i),i=u.next,p=u.next;continue}if(i=u,i===p){a?a===1?(i=e4(qi(i),t),bp(i,t,e,n,o,r,2)):a===2&&n4(i,t,e,n,o,r):bp(qi(i),t,e,n,o,r,1);break}}}function Km(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let o=t.x,r=e.x,a=n.x,p=t.y,s=e.y,u=n.y,f=Math.min(o,r,a),l=Math.min(p,s,u),c=Math.max(o,r,a),d=Math.max(p,s,u),y=n.next;for(;y!==t;){if(y.x>=f&&y.x<=c&&y.y>=l&&y.y<=d&&za(o,p,r,s,a,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function t4(i,t,e,n){let o=i.prev,r=i,a=i.next;if(Ae(o,r,a)>=0)return!1;let p=o.x,s=r.x,u=a.x,f=o.y,l=r.y,c=a.y,d=Math.min(p,s,u),y=Math.min(f,l,c),m=Math.max(p,s,u),h=Math.max(f,l,c),b=C2(d,y,t,e,n),E=C2(m,h,t,e,n),T=i.prevZ,g=i.nextZ;for(;T&&T.z>=b&&g&&g.z<=E;){if(T.x>=d&&T.x<=m&&T.y>=y&&T.y<=h&&T!==o&&T!==a&&za(p,f,s,l,u,c,T.x,T.y)&&Ae(T.prev,T,T.next)>=0||(T=T.prevZ,g.x>=d&&g.x<=m&&g.y>=y&&g.y<=h&&g!==o&&g!==a&&za(p,f,s,l,u,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;T&&T.z>=b;){if(T.x>=d&&T.x<=m&&T.y>=y&&T.y<=h&&T!==o&&T!==a&&za(p,f,s,l,u,c,T.x,T.y)&&Ae(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;g&&g.z<=E;){if(g.x>=d&&g.x<=m&&g.y>=y&&g.y<=h&&g!==o&&g!==a&&za(p,f,s,l,u,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function e4(i,t){let e=i;do{let n=e.prev,o=e.next.next;!la(n,o)&&Pd(n,e,e.next,o)&&yp(n,o)&&yp(o,n)&&(t.push(n.i,e.i,o.i),mp(e),mp(e.next),e=i=o),e=e.next}while(e!==i);return qi(e)}function n4(i,t,e,n,o,r){let a=i;do{let p=a.next.next;for(;p!==a.prev;){if(a.i!==p.i&&l4(a,p)){let s=Ld(a,p);a=qi(a,a.next),s=qi(s,s.next),bp(a,t,e,n,o,r,0),bp(s,t,e,n,o,r,0);return}p=p.next}a=a.next}while(a!==i)}function o4(i,t,e,n){let o=[];for(let r=0,a=t.length;r<a;r++){let p=t[r]*n,s=r<a-1?t[r+1]*n:i.length,u=Sd(i,p,s,n,!1);u===u.next&&(u.steiner=!0),o.push(f4(u))}o.sort(i4);for(let r=0;r<o.length;r++)e=r4(o[r],e);return e}function i4(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),o=(t.next.y-t.y)/(t.next.x-t.x);e=n-o}return e}function r4(i,t){let e=a4(i,t);if(!e)return t;let n=Ld(e,i);return qi(n,n.next),qi(e,e.next)}function a4(i,t){let e=t,n=i.x,o=i.y,r=-1/0,a;if(la(i,e))return e;do{if(la(i,e.next))return e.next;if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let l=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,a=e.x<e.next.x?e:e.next,l===n))return a}e=e.next}while(e!==t);if(!a)return null;let p=a,s=a.x,u=a.y,f=1/0;e=a;do{if(n>=e.x&&e.x>=s&&n!==e.x&&wd(o<u?n:r,o,s,u,o<u?r:n,o,e.x,e.y)){let l=Math.abs(o-e.y)/(n-e.x);yp(e,i)&&(l<f||l===f&&(e.x>a.x||e.x===a.x&&p4(a,e)))&&(a=e,f=l)}e=e.next}while(e!==p);return a}function p4(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function s4(i,t,e,n){let o=i;do o.z===0&&(o.z=C2(o.x,o.y,t,e,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,u4(o)}function u4(i){let t,e=1;do{let n=i,o;i=null;let r=null;for(t=0;n;){t++;let a=n,p=0;for(let u=0;u<e&&(p++,a=a.nextZ,!!a);u++);let s=e;for(;p>0||s>0&&a;)p!==0&&(s===0||!a||n.z<=a.z)?(o=n,n=n.nextZ,p--):(o=a,a=a.nextZ,s--),r?r.nextZ=o:i=o,o.prevZ=r,r=o;n=a}r.nextZ=null,e*=2}while(t>1);return i}function C2(i,t,e,n,o){return i=(i-e)*o|0,t=(t-n)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function f4(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function wd(i,t,e,n,o,r,a,p){return(o-a)*(t-p)>=(i-a)*(r-p)&&(i-a)*(n-p)>=(e-a)*(t-p)&&(e-a)*(r-p)>=(o-a)*(n-p)}function za(i,t,e,n,o,r,a,p){return!(i===a&&t===p)&&wd(i,t,e,n,o,r,a,p)}function l4(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!c4(i,t)&&(yp(i,t)&&yp(t,i)&&h4(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||la(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function la(i,t){return i.x===t.x&&i.y===t.y}function Pd(i,t,e,n){let o=Ks(Ae(i,t,e)),r=Ks(Ae(i,t,n)),a=Ks(Ae(e,n,i)),p=Ks(Ae(e,n,t));return!!(o!==r&&a!==p||o===0&&qs(i,e,t)||r===0&&qs(i,n,t)||a===0&&qs(e,i,n)||p===0&&qs(e,t,n))}function qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ks(i){return i>0?1:i<0?-1:0}function c4(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yp(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function h4(i,t){let e=i,n=!1,o=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&o<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){let e=x2(i.i,i.x,i.y),n=x2(t.i,t.x,t.y),o=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=o,o.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function R1(i,t,e,n){let o=x2(i,t,e);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function mp(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function x2(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d4(i,t,e,n){let o=0;for(let r=t,a=e-n;r<e;r+=n)o+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return o}var O2=class{static triangulate(t,e,n=2){return qm(t,e,n)}},Zr=class i{static area(t){let e=t.length,n=0;for(let o=e-1,r=0;r<e;o=r++)n+=t[o].x*t[r].y-t[r].x*t[o].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],o=[],r=[];D1(t),M1(n,t);let a=t.length;e.forEach(D1);for(let s=0;s<e.length;s++)o.push(a),a+=e[s].length,M1(n,e[s]);let p=O2.triangulate(n,o);for(let s=0;s<p.length;s+=3)r.push(p.slice(s,s+3));return r}};function D1(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function M1(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gp=class i extends cu{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},un=class i extends le{constructor(t=1,e=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:o};let r=t/2,a=e/2,p=Math.floor(n),s=Math.floor(o),u=p+1,f=s+1,l=t/p,c=e/s,d=[],y=[],m=[],h=[];for(let b=0;b<f;b++){let E=b*c-a;for(let T=0;T<u;T++){let g=T*l-r;y.push(g,-E,0),m.push(0,0,1),h.push(T/p),h.push(1-b/s)}}for(let b=0;b<s;b++)for(let E=0;E<p;E++){let T=E+u*b,g=E+u*(b+1),x=E+1+u*(b+1),U=E+1+u*b;d.push(T,g,U),d.push(g,x,U)}this.setIndex(d),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(m,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yi=class i extends le{constructor(t=.5,e=1,n=32,o=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:o,thetaStart:r,thetaLength:a},n=Math.max(3,n),o=Math.max(1,o);let p=[],s=[],u=[],f=[],l=t,c=(e-t)/o,d=new v,y=new ot;for(let m=0;m<=o;m++){for(let h=0;h<=n;h++){let b=r+h/n*a;d.x=l*Math.cos(b),d.y=l*Math.sin(b),s.push(d.x,d.y,d.z),u.push(0,0,1),y.x=(d.x/e+1)/2,y.y=(d.y/e+1)/2,f.push(y.x,y.y)}l+=c}for(let m=0;m<o;m++){let h=m*(n+1);for(let b=0;b<n;b++){let E=b+h,T=E,g=E+n+1,x=E+n+2,U=E+1;p.push(T,g,U),p.push(g,x,U)}}this.setIndex(p),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ca=class i extends le{constructor(t=new bi([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],o=[],r=[],a=[],p=0,s=0;if(Array.isArray(t)===!1)u(t);else for(let f=0;f<t.length;f++)u(t[f]),this.addGroup(p,s,f),p+=s,s=0;this.setIndex(n),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(a,2));function u(f){let l=o.length/3,c=f.extractPoints(e),d=c.shape,y=c.holes;Zr.isClockWise(d)===!1&&(d=d.reverse());for(let h=0,b=y.length;h<b;h++){let E=y[h];Zr.isClockWise(E)===!0&&(y[h]=E.reverse())}let m=Zr.triangulateShape(d,y);for(let h=0,b=y.length;h<b;h++){let E=y[h];d=d.concat(E)}for(let h=0,b=d.length;h<b;h++){let E=d[h];o.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let h=0,b=m.length;h<b;h++){let E=m[h],T=E[0]+l,g=E[1]+l,x=E[2]+l;n.push(T,g,x),s+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return b4(e,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}return new i(n,t.curveSegments)}};function b4(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let o=i[e];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t}var Ki=class i extends le{constructor(t=1,e=32,n=16,o=0,r=Math.PI*2,a=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:o,phiLength:r,thetaStart:a,thetaLength:p},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let s=Math.min(a+p,Math.PI),u=0,f=[],l=new v,c=new v,d=[],y=[],m=[],h=[];for(let b=0;b<=n;b++){let E=[],T=b/n,g=0;b===0&&a===0?g=.5/e:b===n&&s===Math.PI&&(g=-.5/e);for(let x=0;x<=e;x++){let U=x/e;l.x=-t*Math.cos(o+U*r)*Math.sin(a+T*p),l.y=t*Math.cos(a+T*p),l.z=t*Math.sin(o+U*r)*Math.sin(a+T*p),y.push(l.x,l.y,l.z),c.copy(l).normalize(),m.push(c.x,c.y,c.z),h.push(U+g,1-T),E.push(u++)}f.push(E)}for(let b=0;b<n;b++)for(let E=0;E<e;E++){let T=f[b][E+1],g=f[b][E],x=f[b+1][E],U=f[b+1][E+1];(b!==0||a>0)&&d.push(T,g,U),(b!==n-1||s<Math.PI)&&d.push(g,x,U)}this.setIndex(d),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(m,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ha=class extends sn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Tt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Tp=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ln=class extends Ke{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ep=class extends sn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Tu=class extends sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eu=class extends sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tu(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function y4(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function m4(i){function t(o,r){return i[o]-i[r]}let e=i.length,n=new Array(e);for(let o=0;o!==e;++o)n[o]=o;return n.sort(t),n}function A1(i,t,e){let n=i.length,o=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let p=e[r]*t;for(let s=0;s!==t;++s)o[a++]=i[p+s]}return o}function Ud(i,t,e,n){let o=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[o++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[o++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[o++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[o++];while(r!==void 0)}var Qo=class{constructor(t,e,n,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,o=e[n],r=e[n-1];t:{e:{let a;n:{o:if(!(t<o)){for(let p=n+2;;){if(o===void 0){if(t<r)break o;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===p)break;if(r=o,o=e[++n],t<o)break e}a=e.length;break n}if(!(t>=r)){let p=e[1];t<p&&(n=2,r=p);for(let s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(o=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let p=n+a>>>1;t<e[p]?a=p:n=p+1}if(o=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,o)}return this.interpolate_(n,r,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o;for(let a=0;a!==o;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vu=class extends Qo{constructor(t,e,n,o){super(t,e,n,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bi,endingEnd:Bi}}intervalChanged_(t,e,n){let o=this.parameterPositions,r=t-2,a=t+1,p=o[r],s=o[a];if(p===void 0)switch(this.getSettings_().endingStart){case Fi:r=t,p=2*e-n;break;case Ga:r=o.length-2,p=e+o[r]-o[r+1];break;default:r=t,p=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fi:a=t,s=2*n-e;break;case Ga:a=1,s=n+o[1]-o[0];break;default:a=t-1,s=e}let u=(n-e)*.5,f=this.valueSize;this._weightPrev=u/(e-p),this._weightNext=u/(s-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=this._offsetPrev,l=this._offsetNext,c=this._weightPrev,d=this._weightNext,y=(n-e)/(o-e),m=y*y,h=m*y,b=-c*h+2*c*m-c*y,E=(1+c)*h+(-1.5-2*c)*m+(-.5+c)*y+1,T=(-1-d)*h+(1.5+d)*m+.5*y,g=d*h-d*m;for(let x=0;x!==p;++x)r[x]=b*a[f+x]+E*a[u+x]+T*a[s+x]+g*a[l+x];return r}},Vp=class extends Qo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=(n-e)/(o-e),l=1-f;for(let c=0;c!==p;++c)r[c]=a[u+c]*l+a[s+c]*f;return r}},Su=class extends Qo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tu(e,this.TimeBufferType),this.values=tu(n,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tu(t.times,Array),values:tu(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(n.interpolation=o)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Su(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ji:e=this.InterpolantFactoryMethodDiscrete;break;case zi:e=this.InterpolantFactoryMethodLinear;break;case eu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return zi;case this.InterpolantFactoryMethodSmooth:return eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]*=t}return this}trim(t,e){let n=this.times,o=n.length,r=0,a=o-1;for(;r!==o&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==o){r>=a&&(a=Math.max(a,1),r=a-1);let p=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*p,a*p)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,o=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let p=0;p!==r;p++){let s=n[p];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,p,s),t=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,p,s,a),t=!1;break}a=s}if(o!==void 0&&y4(o))for(let p=0,s=o.length;p!==s;++p){let u=o[p];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,p,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),o=this.getInterpolation()===eu,r=t.length-1,a=1;for(let p=1;p<r;++p){let s=!1,u=t[p],f=t[p+1];if(u!==f&&(p!==1||u!==t[0]))if(o)s=!0;else{let l=p*n,c=l-n,d=l+n;for(let y=0;y!==n;++y){let m=e[l+y];if(m!==e[c+y]||m!==e[d+y]){s=!0;break}}}if(s){if(p!==a){t[a]=t[p];let l=p*n,c=a*n;for(let d=0;d!==n;++d)e[c+d]=e[l+d]}++a}}if(r>0){t[a]=t[r];for(let p=r*n,s=a*n,u=0;u!==n;++u)e[s+u]=e[p+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,o=new n(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=zi;var jo=class extends Un{constructor(t,e,n){super(t,e,n)}};jo.prototype.ValueTypeName="bool";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=Ji;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Sp=class extends Un{constructor(t,e,n,o){super(t,e,n,o)}};Sp.prototype.ValueTypeName="color";var Eo=class extends Un{constructor(t,e,n,o){super(t,e,n,o)}};Eo.prototype.ValueTypeName="number";var wu=class extends Qo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=(n-e)/(o-e),u=t*p;for(let f=u+p;u!==f;u+=4)Je.slerpFlat(r,0,a,u-p,a,u,s);return r}},Vo=class extends Un{constructor(t,e,n,o){super(t,e,n,o)}InterpolantFactoryMethodLinear(t){return new wu(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends Un{constructor(t,e,n){super(t,e,n)}};Zo.prototype.ValueTypeName="string";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=Ji;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Un{constructor(t,e,n,o){super(t,e,n,o)}};So.prototype.ValueTypeName="vector";var tr=class{constructor(t="",e=-1,n=[],o=Of){this.name=t,this.tracks=n,this.duration=e,this.blendMode=o,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,o=1/(t.fps||1);for(let a=0,p=n.length;a!==p;++a)e.push(T4(n[a]).scale(o));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,o={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(Un.toJSON(n[r]));return o}static CreateFromMorphTargetSequence(t,e,n,o){let r=e.length,a=[];for(let p=0;p<r;p++){let s=[],u=[];s.push((p+r-1)%r,p,(p+1)%r),u.push(0,1,0);let f=m4(s);s=A1(s,1,f),u=A1(u,1,f),!o&&s[0]===0&&(s.push(r),u.push(u[0])),a.push(new Eo(".morphTargetInfluences["+e[p].name+"]",s,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let o=t;n=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<n.length;o++)if(n[o].name===e)return n[o];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let o={},r=/^([\w-]*?)([\d]+)$/;for(let p=0,s=t.length;p<s;p++){let u=t[p],f=u.name.match(r);if(f&&f.length>1){let l=f[1],c=o[l];c||(o[l]=c=[]),c.push(u)}}let a=[];for(let p in o)a.push(this.CreateFromMorphTargetSequence(p,o[p],e,n));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(l,c,d,y,m){if(d.length!==0){let h=[],b=[];Ud(d,h,b,y),h.length!==0&&m.push(new l(c,h,b))}},o=[],r=t.name||"default",a=t.fps||30,p=t.blendMode,s=t.length||-1,u=t.hierarchy||[];for(let l=0;l<u.length;l++){let c=u[l].keys;if(!(!c||c.length===0))if(c[0].morphTargets){let d={},y;for(y=0;y<c.length;y++)if(c[y].morphTargets)for(let m=0;m<c[y].morphTargets.length;m++)d[c[y].morphTargets[m]]=-1;for(let m in d){let h=[],b=[];for(let E=0;E!==c[y].morphTargets.length;++E){let T=c[y];h.push(T.time),b.push(T.morphTarget===m?1:0)}o.push(new Eo(".morphTargetInfluence["+m+"]",h,b))}s=d.length*a}else{let d=".bones["+e[l].name+"]";n(So,d+".position",c,"pos",o),n(Vo,d+".quaternion",c,"rot",o),n(So,d+".scale",c,"scl",o)}}return o.length===0?null:new this(r,s,o,p)}resetDuration(){let t=this.tracks,e=0;for(let n=0,o=t.length;n!==o;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function g4(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return Sp;case"quaternion":return Vo;case"bool":case"boolean":return jo;case"string":return Zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function T4(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=g4(i.type);if(i.times===void 0){let e=[],n=[];Ud(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var go={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Pu=class{constructor(t,e,n){let o=this,r=!1,a=0,p=0,s,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){p++,r===!1&&o.onStart!==void 0&&o.onStart(f,a,p),r=!0},this.itemEnd=function(f){a++,o.onProgress!==void 0&&o.onProgress(f,a,p),a===p&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return s?s(f):f},this.setURLModifier=function(f){return s=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){let l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,c=u.length;l<c;l+=2){let d=u[l],y=u[l+1];if(d.global&&(d.lastIndex=0),d.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Cd=new Pu,wo=class{constructor(t){this.manager=t!==void 0?t:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(o,r){n.load(t,o,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xo={},v2=class extends Error{constructor(t,e){super(t),this.response=e}},da=class extends wo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=go.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Xo[t]!==void 0){Xo[t].push({onLoad:e,onProgress:n,onError:o});return}Xo[t]=[],Xo[t].push({onLoad:e,onProgress:n,onError:o});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,s=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let f=Xo[t],l=u.body.getReader(),c=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=c?parseInt(c):0,y=d!==0,m=0,h=new ReadableStream({start(b){E();function E(){l.read().then(({done:T,value:g})=>{if(T)b.close();else{m+=g.byteLength;let x=new ProgressEvent("progress",{lengthComputable:y,loaded:m,total:d});for(let U=0,V=f.length;U<V;U++){let O=f[U];O.onProgress&&O.onProgress(x)}b.enqueue(g),E()}},T=>{b.error(T)})}}});return new Response(h)}else throw new v2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(s){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,p));case"json":return u.json();default:if(p==="")return u.text();{let l=/charset="?([^;"\s]*)"?/i.exec(p),c=l&&l[1]?l[1].toLowerCase():void 0,d=new TextDecoder(c);return u.arrayBuffer().then(y=>d.decode(y))}}}).then(u=>{go.add(`file:${t}`,u);let f=Xo[t];delete Xo[t];for(let l=0,c=f.length;l<c;l++){let d=f[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{let f=Xo[t];if(f===void 0)throw this.manager.itemError(t),u;delete Xo[t];for(let l=0,c=f.length;l<c;l++){let d=f[l];d.onError&&d.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qr=new WeakMap,Lu=class extends wo{constructor(t){super(t)}load(t,e,n,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=go.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let l=Qr.get(a);l===void 0&&(l=[],Qr.set(a,l)),l.push({onLoad:e,onError:o})}return a}let p=Wr("img");function s(){f(),e&&e(this);let l=Qr.get(this)||[];for(let c=0;c<l.length;c++){let d=l[c];d.onLoad&&d.onLoad(this)}Qr.delete(this),r.manager.itemEnd(t)}function u(l){f(),o&&o(l),go.remove(`image:${t}`);let c=Qr.get(this)||[];for(let d=0;d<c.length;d++){let y=c[d];y.onError&&y.onError(l)}Qr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){p.removeEventListener("load",s,!1),p.removeEventListener("error",u,!1)}return p.addEventListener("load",s,!1),p.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),go.add(`image:${t}`,p),r.manager.itemStart(t),p.src=t,p}};var Po=class extends wo{constructor(t){super(t)}load(t,e,n,o){let r=new je,a=new Lu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(p){r.image=p,r.needsUpdate=!0,e!==void 0&&e(r)},n,o),r}},er=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},wp=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},V2=new _t,I1=new v,_1=new v,Pp=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;I1.setFromMatrixPosition(t.matrixWorld),e.position.copy(I1),_1.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_1),e.updateMatrixWorld(),V2.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V2,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(V2)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},R2=class extends Pp{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Qi*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||o!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=o,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Lp=class extends er{constructor(t,e,n=0,o=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=o,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new R2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$1=new _t,Ja=new v,S2=new v,D2=class extends Pp{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,o=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ja.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ja),S2.copy(n.position),S2.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(S2),n.updateMatrixWorld(),o.makeTranslation(-Ja.x,-Ja.y,-Ja.z),$1.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($1,n.coordinateSystem,n.reversedDepth)}},Up=class extends er{constructor(t,e,n=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new D2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yo=class extends np{constructor(t=-1,e=1,n=1,o=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=o,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,o,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2,r=n-t,a=n+t,p=o+e,s=o-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,p-=f*this.view.offsetY,s=p-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,p,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},M2=class extends Pp{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new M2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Go=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var w2=new WeakMap,Cp=class extends wo{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=go.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{if(w2.has(a)===!0)o&&o(w2.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(u),r.manager.itemEnd(t),u});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}let p={};p.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",p.headers=this.requestHeader,p.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(t,p).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return go.add(`image-bitmap:${t}`,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){o&&o(u),w2.set(s,u),go.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});go.add(`image-bitmap:${t}`,s),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Uu=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},xp=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Cu=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let o,r,a;switch(e){case"quaternion":o=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":o=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:o=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=o,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,o=this.valueSize,r=t*o+o,a=this.cumulativeWeight;if(a===0){for(let p=0;p!==o;++p)n[r+p]=n[p];a=e}else{a+=e;let p=e/a;this._mixBufferRegion(n,r,0,p,o)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,o=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,o,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,o=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,p=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let s=e*this._origIndex;this._mixBufferRegion(n,o,s,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,o,this._addIndex*e,1,e);for(let s=e,u=e+e;s!==u;++s)if(n[s]!==n[s+e]){p.setValue(n,o);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,o=n*this._origIndex;t.getValue(e,o);for(let r=n,a=o;r!==a;++r)e[r]=e[o+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,o,r){if(o>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,o){Je.slerpFlat(t,e,t,e,t,n,o)}_slerpAdditive(t,e,n,o,r){let a=this._workIndex*r;Je.multiplyQuaternionsFlat(t,a,t,e,t,n),Je.slerpFlat(t,e,t,e,t,a,o)}_lerp(t,e,n,o,r){let a=1-o;for(let p=0;p!==r;++p){let s=e+p;t[s]=t[s]*a+t[n+p]*o}}_lerpAdditive(t,e,n,o,r){for(let a=0;a!==r;++a){let p=e+a;t[p]=t[p]+t[n+a]*o}}},ec="\\[\\]\\.:\\/",E4=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",V4="[^"+ec.replace("\\.","")+"]",S4=/((?:WC+[\/:])*)/.source.replace("WC",nc),w4=/(WCOD+)?/.source.replace("WCOD",V4),P4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),L4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),U4=new RegExp("^"+S4+w4+P4+L4+"$"),C4=["material","materials","bones","map"],A2=class{constructor(t,e,n){let o=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,o=this._bindings[n];o!==void 0&&o.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let o=this._targetGroup.nCachedObjects_,r=n.length;o!==r;++o)n[o].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E4,"")}static parseTrackName(t){let e=U4.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=n.nodeName&&n.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let r=n.nodeName.substring(o+1);C4.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,o),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let p=r[a];if(p.name===e||p.uuid===e)return p;let s=n(p.children);if(s)return s}return null},o=n(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)t[e++]=n[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,o=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let p=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?p=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(p=this.Versioning.MatrixWorldNeedsUpdate);let s=this.BindingType.Direct;if(r!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}s=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(s=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(s=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[s],this.setValue=this.SetterByBindingTypeAndVersioning[s][p]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=A2;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xu=class{constructor(t,e,n=null,o=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=o;let r=e.tracks,a=r.length,p=new Array(a),s={endingStart:Bi,endingEnd:Bi};for(let u=0;u!==a;++u){let f=r[u].createInterpolant(null);p[u]=f,f.settings=s}this._interpolantSettings=s,this._interpolants=p,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let o=this._clip.duration,r=t._clip.duration,a=r/o,p=o/r;t.warp(1,a,e),this.warp(p,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let o=this._mixer,r=o.time,a=this.timeScale,p=this._timeScaleInterpolant;p===null&&(p=o._lendControlInterpolant(),this._timeScaleInterpolant=p);let s=p.parameterPositions,u=p.sampleValues;return s[0]=r,s[1]=r+n,u[0]=t/a,u[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,o){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let s=(t-r)*n;s<0||n===0?e=0:(this._startTime=null,e=n*s)}e*=this._updateTimeScale(t);let a=this._updateTime(e),p=this._updateWeight(t);if(p>0){let s=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case sd:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulateAdditive(p);break;case Of:default:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulate(o,p)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,o=this.time+t,r=this._loopCount,a=n===pd;if(t===0)return r===-1?o:a&&(r&1)===1?e-o:o;if(n===xf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(o>=e)o=e;else if(o<0)o=0;else{this.time=o;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),o>=e||o<0){let p=Math.floor(o/e);o-=e*p,r+=Math.abs(p);let s=this.repetitions-r;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=t>0?e:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(s===1){let u=t<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:p})}}else this.time=o;if(a&&(r&1)===1)return e-o}return o}_setEndings(t,e,n){let o=this._interpolantSettings;n?(o.endingStart=Fi,o.endingEnd=Fi):(t?o.endingStart=this.zeroSlopeAtStart?Fi:Bi:o.endingStart=Ga,e?o.endingEnd=this.zeroSlopeAtEnd?Fi:Bi:o.endingEnd=Ga)}_scheduleFading(t,e,n){let o=this._mixer,r=o.time,a=this._weightInterpolant;a===null&&(a=o._lendControlInterpolant(),this._weightInterpolant=a);let p=a.parameterPositions,s=a.sampleValues;return p[0]=r,s[0]=e,p[1]=r+t,s[1]=n,this}},x4=new Float32Array(1),Op=class extends To{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,o=t._clip.tracks,r=o.length,a=t._propertyBindings,p=t._interpolants,s=n.uuid,u=this._bindingsByRootAndName,f=u[s];f===void 0&&(f={},u[s]=f);for(let l=0;l!==r;++l){let c=o[l],d=c.name,y=f[d];if(y!==void 0)++y.referenceCount,a[l]=y;else{if(y=a[l],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,s,d));continue}let m=e&&e._propertyBindings[l].binding.parsedPath;y=new Cu(ge.create(n,d,m),c.ValueTypeName,c.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,s,d),a[l]=y}p[l].resultBuffer=y.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,o=t._clip.uuid,r=this._actionsByClip[o];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,o,n)}let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let o=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let p=a.knownActions;t._byClipCacheIndex=p.length,p.push(t)}t._cacheIndex=o.length,o.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],o=t._cacheIndex;n._cacheIndex=o,e[o]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,p=a[r],s=p.knownActions,u=s[s.length-1],f=t._byClipCacheIndex;u._byClipCacheIndex=f,s[f]=u,s.pop(),t._byClipCacheIndex=null;let l=p.actionByRoot,c=(t._localRoot||this._root).uuid;delete l[c],s.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,o=this._nActiveActions++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,o=--this._nActiveActions,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let o=this._bindingsByRootAndName,r=this._bindings,a=o[e];a===void 0&&(a={},o[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,o=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,p=a[o],s=e[e.length-1],u=t._cacheIndex;s._cacheIndex=u,e[u]=s,e.pop(),delete p[r],Object.keys(p).length===0&&delete a[o]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,o=this._nActiveBindings++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,o=--this._nActiveBindings,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Vp(new Float32Array(2),new Float32Array(2),1,x4),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,o=--this._nActiveControlInterpolants,r=e[o];t.__cacheIndex=o,e[o]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let o=e||this._root,r=o.uuid,a=typeof t=="string"?tr.findByName(o,t):t,p=a!==null?a.uuid:t,s=this._actionsByClip[p],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Of),s!==void 0){let l=s.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=s.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let f=new xu(this,a,e,n);return this._bindAction(f,u),this._addInactiveAction(f,p,r),f}existingAction(t,e){let n=e||this._root,o=n.uuid,r=typeof t=="string"?tr.findByName(n,t):t,a=r?r.uuid:t,p=this._actionsByClip[a];return p!==void 0&&p.actionByRoot[o]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,o=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(o,t,r,a);let p=this._bindings,s=this._nActiveBindings;for(let u=0;u!==s;++u)p[u].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,o=this._actionsByClip,r=o[n];if(r!==void 0){let a=r.knownActions;for(let p=0,s=a.length;p!==s;++p){let u=a[p];this._deactivateAction(u);let f=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=f,e[f]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete o[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let p=n[a].actionByRoot,s=p[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let o=this._bindingsByRootAndName,r=o[e];if(r!==void 0)for(let a in r){let p=r[a];p.restoreOriginalState(),this._removeInactiveBinding(p)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var k1=new _t,vp=class{constructor(t,e,n=0,o=1/0){this.ray=new hi(t,e),this.near=n,this.far=o,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return k1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(k1),this}intersectObject(t,e=!0,n=[]){return I2(t,this,n,e),n.sort(H1),n}intersectObjects(t,e=!0,n=[]){for(let o=0,r=t.length;o<r;o++)I2(t[o],this,n,e);return n.sort(H1),n}};function H1(i,t){return i.distance-t.distance}function I2(i,t,e,n){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(o=!1),o===!0&&n===!0){let r=i.children;for(let a=0,p=r.length;a<p;a++)I2(r[a],t,e,!0)}}function oc(i,t,e,n){let o=O4(n);switch(e){case z2:return i*t;case Yu:return i*t/o.components*o.byteLength;case Gu:return i*t/o.components*o.byteLength;case j2:return i*t*2/o.components*o.byteLength;case Wu:return i*t*2/o.components*o.byteLength;case Q2:return i*t*3/o.components*o.byteLength;case mn:return i*t*4/o.components*o.byteLength;case qu:return i*t*4/o.components*o.byteLength;case Ip:case _p:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $p:case kp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tf:case nf:return Math.max(i,16)*Math.max(t,8)/4;case Ku:case ef:return Math.max(i,8)*Math.max(t,8)/2;case of:case rf:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case af:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pf:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sf:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uf:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ff:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lf:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cf:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hf:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case df:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bf:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yf:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mf:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gf:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tf:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ef:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vf:case Sf:case wf:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pf:case Lf:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Uf:case Cf:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O4(i){switch(i){case kn:case F2:return{byteLength:1,components:1};case ma:case N2:case Hn:return{byteLength:2,components:1};case ju:case Zu:return{byteLength:2,components:4};case mi:case Qu:case Gn:return{byteLength:4,components:1};case X2:case J2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Kd(){let i=null,t=!1,e=null,n=null;function o(r,a){e(r,a),n=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function M4(i){let t=new WeakMap;function e(p,s){let u=p.array,f=p.usage,l=u.byteLength,c=i.createBuffer();i.bindBuffer(s,c),i.bufferData(s,u,f),p.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=i.HALF_FLOAT;else if(u instanceof Uint16Array)p.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:p.version,size:l}}function n(p,s,u){let f=s.array,l=s.updateRanges;if(i.bindBuffer(u,p),l.length===0)i.bufferSubData(u,0,f);else{l.sort((d,y)=>d.start-y.start);let c=0;for(let d=1;d<l.length;d++){let y=l[c],m=l[d];m.start<=y.start+y.count+1?y.count=Math.max(y.count,m.start+m.count-y.start):(++c,l[c]=m)}l.length=c+1;for(let d=0,y=l.length;d<y;d++){let m=l[d];i.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count)}s.clearUpdateRanges()}s.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function r(p){p.isInterleavedBufferAttribute&&(p=p.data);let s=t.get(p);s&&(i.deleteBuffer(s.buffer),t.delete(p))}function a(p,s){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){let f=t.get(p);(!f||f.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}let u=t.get(p);if(u===void 0)t.set(p,e(p,s));else if(u.version<p.version){if(u.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,p,s),u.version=p.version}}return{get:o,remove:r,update:a}}var A4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I4=`#ifdef USE_ALPHAHASH
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
#endif`,_4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B4=`#ifdef USE_AOMAP
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
#endif`,F4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N4=`#ifdef USE_BATCHING
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
#endif`,X4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j4=`#ifdef USE_IRIDESCENCE
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
#endif`,Z4=`#ifdef USE_BUMPMAP
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
#endif`,Y4=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n5=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o5=`#define PI 3.141592653589793
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
} // validated`,i5=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r5=`vec3 transformedNormal = objectNormal;
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
#endif`,a5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f5="gl_FragColor = linearToOutputTexel( gl_FragColor );",l5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c5=`#ifdef USE_ENVMAP
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
#endif`,h5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d5=`#ifdef USE_ENVMAP
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
#endif`,b5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y5=`#ifdef USE_ENVMAP
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
#endif`,m5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V5=`#ifdef USE_GRADIENTMAP
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
}`,S5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L5=`uniform bool receiveShadow;
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
#endif`,U5=`#ifdef USE_ENVMAP
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
#endif`,C5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R5=`PhysicalMaterial material;
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
#endif`,D5=`struct PhysicalMaterial {
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
}`,M5=`
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
#endif`,A5=`#if defined( RE_IndirectDiffuse )
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
#endif`,I5=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X5=`#if defined( USE_POINTS_UV )
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
#endif`,J5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y5=`#ifdef USE_MORPHTARGETS
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
#endif`,G5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gg=`float getShadowMask() {
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,qg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,t6=`#define NORMAL
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
}`,e6=`#define PHONG
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
}`,n6=`#define PHONG
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
}`,o6=`#define STANDARD
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
}`,i6=`#define STANDARD
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
}`,r6=`#define TOON
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
}`,a6=`#define TOON
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
}`,p6=`uniform float size;
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
}`,s6=`uniform vec3 diffuse;
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
}`,u6=`#include <common>
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
}`,f6=`uniform vec3 color;
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
}`,l6=`uniform float rotation;
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
}`,c6=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:A4,alphahash_pars_fragment:I4,alphamap_fragment:_4,alphamap_pars_fragment:$4,alphatest_fragment:k4,alphatest_pars_fragment:H4,aomap_fragment:B4,aomap_pars_fragment:F4,batching_pars_vertex:N4,batching_vertex:X4,begin_vertex:J4,beginnormal_vertex:z4,bsdfs:Q4,iridescence_fragment:j4,bumpmap_pars_fragment:Z4,clipping_planes_fragment:Y4,clipping_planes_pars_fragment:G4,clipping_planes_pars_vertex:W4,clipping_planes_vertex:q4,color_fragment:K4,color_pars_fragment:t5,color_pars_vertex:e5,color_vertex:n5,common:o5,cube_uv_reflection_fragment:i5,defaultnormal_vertex:r5,displacementmap_pars_vertex:a5,displacementmap_vertex:p5,emissivemap_fragment:s5,emissivemap_pars_fragment:u5,colorspace_fragment:f5,colorspace_pars_fragment:l5,envmap_fragment:c5,envmap_common_pars_fragment:h5,envmap_pars_fragment:d5,envmap_pars_vertex:b5,envmap_physical_pars_fragment:U5,envmap_vertex:y5,fog_vertex:m5,fog_pars_vertex:g5,fog_fragment:T5,fog_pars_fragment:E5,gradientmap_pars_fragment:V5,lightmap_pars_fragment:S5,lights_lambert_fragment:w5,lights_lambert_pars_fragment:P5,lights_pars_begin:L5,lights_toon_fragment:C5,lights_toon_pars_fragment:x5,lights_phong_fragment:O5,lights_phong_pars_fragment:v5,lights_physical_fragment:R5,lights_physical_pars_fragment:D5,lights_fragment_begin:M5,lights_fragment_maps:A5,lights_fragment_end:I5,logdepthbuf_fragment:_5,logdepthbuf_pars_fragment:$5,logdepthbuf_pars_vertex:k5,logdepthbuf_vertex:H5,map_fragment:B5,map_pars_fragment:F5,map_particle_fragment:N5,map_particle_pars_fragment:X5,metalnessmap_fragment:J5,metalnessmap_pars_fragment:z5,morphinstance_vertex:Q5,morphcolor_vertex:j5,morphnormal_vertex:Z5,morphtarget_pars_vertex:Y5,morphtarget_vertex:G5,normal_fragment_begin:W5,normal_fragment_maps:q5,normal_pars_fragment:K5,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:rg,iridescence_pars_fragment:ag,opaque_fragment:pg,packing:sg,premultiplied_alpha_fragment:ug,project_vertex:fg,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:yg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:Tg,skinning_pars_vertex:Eg,skinning_vertex:Vg,skinnormal_vertex:Sg,specularmap_fragment:wg,specularmap_pars_fragment:Pg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ug,transmission_fragment:Cg,transmission_pars_fragment:xg,uv_pars_fragment:Og,uv_pars_vertex:vg,uv_vertex:Rg,worldpos_vertex:Dg,background_vert:Mg,background_frag:Ag,backgroundCube_vert:Ig,backgroundCube_frag:_g,cube_vert:$g,cube_frag:kg,depth_vert:Hg,depth_frag:Bg,distanceRGBA_vert:Fg,distanceRGBA_frag:Ng,equirect_vert:Xg,equirect_frag:Jg,linedashed_vert:zg,linedashed_frag:Qg,meshbasic_vert:jg,meshbasic_frag:Zg,meshlambert_vert:Yg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:qg,meshnormal_vert:Kg,meshnormal_frag:t6,meshphong_vert:e6,meshphong_frag:n6,meshphysical_vert:o6,meshphysical_frag:i6,meshtoon_vert:r6,meshtoon_frag:a6,points_vert:p6,points_frag:s6,shadow_vert:u6,shadow_frag:f6,sprite_vert:l6,sprite_frag:c6},bt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Uo={basic:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:cn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:cn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:cn([bt.points,bt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:cn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:cn([bt.common,bt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:cn([bt.sprite,bt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:cn([bt.common,bt.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:cn([bt.lights,bt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Uo.physical={uniforms:cn([Uo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Rf={r:0,b:0,g:0},sr=new _n,h6=new _t;function d6(i,t,e,n,o,r,a){let p=new Tt(0),s=r===!0?0:1,u,f,l=null,c=0,d=null;function y(T){let g=T.isScene===!0?T.background:null;return g&&g.isTexture&&(g=(T.backgroundBlurriness>0?e:t).get(g)),g}function m(T){let g=!1,x=y(T);x===null?b(p,s):x&&x.isColor&&(b(x,1),g=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(T,g){let x=y(g);x&&(x.isCubeTexture||x.mapping===Ap)?(f===void 0&&(f=new Bt(new ji(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:pr(Uo.backgroundCube.uniforms),vertexShader:Uo.backgroundCube.vertexShader,fragmentShader:Uo.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,V,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),sr.copy(g.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(h6.makeRotationFromEuler(sr)),f.material.toneMapped=Kt.getTransfer(x.colorSpace)!==fe,(l!==x||c!==x.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,l=x,c=x.version,d=i.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Bt(new un(2,2),new $e({name:"BackgroundMaterial",uniforms:pr(Uo.background.uniforms),vertexShader:Uo.background.vertexShader,fragmentShader:Uo.background.fragmentShader,side:po,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Kt.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||c!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,l=x,c=x.version,d=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function b(T,g){T.getRGB(Rf,K2(i)),n.buffers.color.setClear(Rf.r,Rf.g,Rf.b,g,a)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return p},setClearColor:function(T,g=1){p.set(T),s=g,b(p,s)},getClearAlpha:function(){return s},setClearAlpha:function(T){s=T,b(p,s)},render:m,addToRenderList:h,dispose:E}}function b6(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=c(null),r=o,a=!1;function p(L,D,I,H,N){let Y=!1,J=l(H,I,D);r!==J&&(r=J,u(r.object)),Y=d(L,H,I,N),Y&&y(L,H,I,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,g(L,D,I,H),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function s(){return i.createVertexArray()}function u(L){return i.bindVertexArray(L)}function f(L){return i.deleteVertexArray(L)}function l(L,D,I){let H=I.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let Y=N[D.id];Y===void 0&&(Y={},N[D.id]=Y);let J=Y[H];return J===void 0&&(J=c(s()),Y[H]=J),J}function c(L){let D=[],I=[],H=[];for(let N=0;N<e;N++)D[N]=0,I[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:H,object:L,attributes:{},index:null}}function d(L,D,I,H){let N=r.attributes,Y=D.attributes,J=0,Q=I.getAttributes();for(let F in Q)if(Q[F].location>=0){let ft=N[F],yt=Y[F];if(yt===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),ft===void 0||ft.attribute!==yt||yt&&ft.data!==yt.data)return!0;J++}return r.attributesNum!==J||r.index!==H}function y(L,D,I,H){let N={},Y=D.attributes,J=0,Q=I.getAttributes();for(let F in Q)if(Q[F].location>=0){let ft=Y[F];ft===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor));let yt={};yt.attribute=ft,ft&&ft.data&&(yt.data=ft.data),N[F]=yt,J++}r.attributes=N,r.attributesNum=J,r.index=H}function m(){let L=r.newAttributes;for(let D=0,I=L.length;D<I;D++)L[D]=0}function h(L){b(L,0)}function b(L,D){let I=r.newAttributes,H=r.enabledAttributes,N=r.attributeDivisors;I[L]=1,H[L]===0&&(i.enableVertexAttribArray(L),H[L]=1),N[L]!==D&&(i.vertexAttribDivisor(L,D),N[L]=D)}function E(){let L=r.newAttributes,D=r.enabledAttributes;for(let I=0,H=D.length;I<H;I++)D[I]!==L[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function T(L,D,I,H,N,Y,J){J===!0?i.vertexAttribIPointer(L,D,I,N,Y):i.vertexAttribPointer(L,D,I,H,N,Y)}function g(L,D,I,H){m();let N=H.attributes,Y=I.getAttributes(),J=D.defaultAttributeValues;for(let Q in Y){let F=Y[Q];if(F.location>=0){let G=N[Q];if(G===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let ft=G.normalized,yt=G.itemSize,$t=t.get(G);if($t===void 0)continue;let re=$t.buffer,te=$t.type,ee=$t.bytesPerElement,q=te===i.INT||te===i.UNSIGNED_INT||G.gpuType===Qu;if(G.isInterleavedBufferAttribute){let tt=G.data,dt=tt.stride,Vt=G.offset;if(tt.isInstancedInterleavedBuffer){for(let Et=0;Et<F.locationSize;Et++)b(F.location+Et,tt.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Et=0;Et<F.locationSize;Et++)h(F.location+Et);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Et=0;Et<F.locationSize;Et++)T(F.location+Et,yt/F.locationSize,te,ft,dt*ee,(Vt+yt/F.locationSize*Et)*ee,q)}else{if(G.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)b(F.location+tt,G.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let tt=0;tt<F.locationSize;tt++)h(F.location+tt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let tt=0;tt<F.locationSize;tt++)T(F.location+tt,yt/F.locationSize,te,ft,yt*ee,yt/F.locationSize*tt*ee,q)}}else if(J!==void 0){let ft=J[Q];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(F.location,ft);break;case 3:i.vertexAttrib3fv(F.location,ft);break;case 4:i.vertexAttrib4fv(F.location,ft);break;default:i.vertexAttrib1fv(F.location,ft)}}}}E()}function x(){O();for(let L in n){let D=n[L];for(let I in D){let H=D[I];for(let N in H)f(H[N].object),delete H[N];delete D[I]}delete n[L]}}function U(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let I in D){let H=D[I];for(let N in H)f(H[N].object),delete H[N];delete D[I]}delete n[L.id]}function V(L){for(let D in n){let I=n[D];if(I[L.id]===void 0)continue;let H=I[L.id];for(let N in H)f(H[N].object),delete H[N];delete I[L.id]}}function O(){P(),a=!0,r!==o&&(r=o,u(r.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:O,resetDefaultState:P,dispose:x,releaseStatesOfGeometry:U,releaseStatesOfProgram:V,initAttributes:m,enableAttribute:h,disableUnusedAttributes:E}}function y6(i,t,e){let n;function o(u){n=u}function r(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,l){l!==0&&(i.drawArraysInstanced(n,u,f,l),e.update(f,n,l))}function p(u,f,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,l);let d=0;for(let y=0;y<l;y++)d+=f[y];e.update(d,n,1)}function s(u,f,l,c){if(l===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let y=0;y<u.length;y++)a(u[y],f[y],c[y]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,f,0,c,0,l);let y=0;for(let m=0;m<l;m++)y+=f[m]*c[m];e.update(y,n,1)}}this.setMode=o,this.render=r,this.renderInstances=a,this.renderMultiDraw=p,this.renderMultiDrawInstances=s}function m6(i,t,e,n){let o;function r(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(V){return!(V!==mn&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(V){let O=V===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==kn&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Gn&&!O)}function s(V){if(V==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",f=s(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let l=e.logarithmicDepthBuffer===!0,c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=y>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,textureFormatReadable:a,textureTypeReadable:p,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:y,maxTextureSize:m,maxCubemapSize:h,maxAttributes:b,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:g,vertexTextures:x,maxSamples:U}}function g6(i){let t=this,e=null,n=0,o=!1,r=!1,a=new Qn,p=new Yt,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(l,c){let d=l.length!==0||c||n!==0||o;return o=c,n=l.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,c){e=f(l,c,0)},this.setState=function(l,c,d){let y=l.clippingPlanes,m=l.clipIntersection,h=l.clipShadows,b=i.get(l);if(!o||y===null||y.length===0||r&&!h)r?f(null):u();else{let E=r?0:n,T=E*4,g=b.clippingState||null;s.value=g,g=f(y,c,T,d);for(let x=0;x!==T;++x)g[x]=e[x];b.clippingState=g,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function u(){s.value!==e&&(s.value=e,s.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(l,c,d,y){let m=l!==null?l.length:0,h=null;if(m!==0){if(h=s.value,y!==!0||h===null){let b=d+m*4,E=c.matrixWorldInverse;p.getNormalMatrix(E),(h===null||h.length<b)&&(h=new Float32Array(b));for(let T=0,g=d;T!==m;++T,g+=4)a.copy(l[T]).applyMatrix4(E,p),a.normal.toArray(h,g),h[g+3]=a.constant}s.value=h,s.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,h}}function T6(i){let t=new WeakMap;function e(a,p){return p===Xu?a.mapping=ir:p===Ju&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){let p=a.mapping;if(p===Xu||p===Ju)if(t.has(a)){let s=t.get(a).texture;return e(s,a.mapping)}else{let s=a.image;if(s&&s.height>0){let u=new uu(s.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",o),e(u.texture,a.mapping)}else return null}}return a}function o(a){let p=a.target;p.removeEventListener("dispose",o);let s=t.get(p);s!==void 0&&(t.delete(p),s.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ea=4,xd=[.125,.215,.35,.446,.526,.582],lr=20,ic=new Yo,Od=new Tt,rc=null,ac=0,pc=0,sc=!1,fr=(1+Math.sqrt(5))/2,Ta=1/fr,vd=[new v(-fr,Ta,0),new v(fr,Ta,0),new v(-Ta,0,fr),new v(Ta,0,fr),new v(0,fr,-Ta),new v(0,fr,Ta),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],E6=new v,Af=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,o=100,r={}){let{size:a=256,position:p=E6}=r;rc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,o,s,p),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,ac,pc),this._renderer.xr.enabled=sc,t.scissorTest=!1,Df(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Hn,format:mn,colorSpace:nn,depthBuffer:!1},o=Rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V6(r)),this._blurMaterial=S6(r,t,e)}return o}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,ic)}_sceneToCubeUV(t,e,n,o,r){let s=new Xe(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,d=l.toneMapping;l.getClearColor(Od),l.toneMapping=Wo,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(o),l.clearDepth(),l.setRenderTarget(null));let m=new ne({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),h=new Bt(new ji,m),b=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,b=!0):(m.color.copy(Od),b=!0);for(let T=0;T<6;T++){let g=T%3;g===0?(s.up.set(0,u[T],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+f[T],r.y,r.z)):g===1?(s.up.set(0,0,u[T]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+f[T],r.z)):(s.up.set(0,u[T],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+f[T]));let x=this._cubeSize;Df(o,g*x,T>2?x:0,x,x),l.setRenderTarget(o),b&&l.render(h,s),l.render(t,s)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=d,l.autoClear=c,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,o=t.mapping===ir||t.mapping===rr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());let r=o?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),p=r.uniforms;p.envMap.value=t;let s=this._cubeSize;Df(e,0,0,3*s,2*s),n.setRenderTarget(e),n.render(a,ic)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let o=this._lodPlanes.length;for(let r=1;r<o;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),p=vd[(o-r-1)%vd.length];this._blur(t,r-1,r,a,p)}e.autoClear=n}_blur(t,e,n,o,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,o,"latitudinal",r),this._halfBlur(a,t,n,n,o,"longitudinal",r)}_halfBlur(t,e,n,o,r,a,p){let s=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,l=new Bt(this._lodPlanes[o],u),c=u.uniforms,d=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*lr-1),m=r/y,h=isFinite(r)?1+Math.floor(f*m):lr;h>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${lr}`);let b=[],E=0;for(let V=0;V<lr;++V){let O=V/m,P=Math.exp(-O*O/2);b.push(P),V===0?E+=P:V<h&&(E+=2*P)}for(let V=0;V<b.length;V++)b[V]=b[V]/E;c.envMap.value=t.texture,c.samples.value=h,c.weights.value=b,c.latitudinal.value=a==="latitudinal",p&&(c.poleAxis.value=p);let{_lodMax:T}=this;c.dTheta.value=y,c.mipInt.value=T-n;let g=this._sizeLods[o],x=3*g*(o>T-Ea?o-T+Ea:0),U=4*(this._cubeSize-g);Df(e,x,U,3*g,2*g),s.setRenderTarget(e),s.render(l,ic)}};function V6(i){let t=[],e=[],n=[],o=i,r=i-Ea+1+xd.length;for(let a=0;a<r;a++){let p=Math.pow(2,o);e.push(p);let s=1/p;a>i-Ea?s=xd[a-i+Ea-1]:a===0&&(s=0),n.push(s);let u=1/(p-2),f=-u,l=1+u,c=[f,f,l,f,l,l,f,f,l,l,f,l],d=6,y=6,m=3,h=2,b=1,E=new Float32Array(m*y*d),T=new Float32Array(h*y*d),g=new Float32Array(b*y*d);for(let U=0;U<d;U++){let V=U%3*2/3-1,O=U>2?0:-1,P=[V,O,0,V+2/3,O,0,V+2/3,O+1,0,V,O,0,V+2/3,O+1,0,V,O+1,0];E.set(P,m*y*U),T.set(c,h*y*U);let L=[U,U,U,U,U,U];g.set(L,b*y*U)}let x=new le;x.setAttribute("position",new _e(E,m)),x.setAttribute("uv",new _e(T,h)),x.setAttribute("faceIndex",new _e(g,b)),t.push(x),o>Ea&&o--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rd(i,t,e){let n=new on(i,t,e);return n.texture.mapping=Ap,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Df(i,t,e,n,o){i.viewport.set(t,e,n,o),i.scissor.set(t,e,n,o)}function S6(i,t,e){let n=new Float32Array(lr),o=new v(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function Dd(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function Md(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function w6(i){let t=new WeakMap,e=null;function n(p){if(p&&p.isTexture){let s=p.mapping,u=s===Xu||s===Ju,f=s===ir||s===rr;if(u||f){let l=t.get(p),c=l!==void 0?l.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==c)return e===null&&(e=new Af(i)),l=u?e.fromEquirectangular(p,l):e.fromCubemap(p,l),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),l.texture;if(l!==void 0)return l.texture;{let d=p.image;return u&&d&&d.height>0||f&&d&&o(d)?(e===null&&(e=new Af(i)),l=u?e.fromEquirectangular(p):e.fromCubemap(p),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),p.addEventListener("dispose",r),l.texture):null}}}return p}function o(p){let s=0,u=6;for(let f=0;f<u;f++)p[f]!==void 0&&s++;return s===u}function r(p){let s=p.target;s.removeEventListener("dispose",r);let u=t.get(s);u!==void 0&&(t.delete(s),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function P6(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return t[n]=o,o}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let o=e(n);return o===null&&qr("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function L6(i,t,e,n){let o={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&t.remove(c.index);for(let y in c.attributes)t.remove(c.attributes[y]);c.removeEventListener("dispose",a),delete o[c.id];let d=r.get(c);d&&(t.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function p(l,c){return o[c.id]===!0||(c.addEventListener("dispose",a),o[c.id]=!0,e.memory.geometries++),c}function s(l){let c=l.attributes;for(let d in c)t.update(c[d],i.ARRAY_BUFFER)}function u(l){let c=[],d=l.index,y=l.attributes.position,m=0;if(d!==null){let E=d.array;m=d.version;for(let T=0,g=E.length;T<g;T+=3){let x=E[T+0],U=E[T+1],V=E[T+2];c.push(x,U,U,V,V,x)}}else if(y!==void 0){let E=y.array;m=y.version;for(let T=0,g=E.length/3-1;T<g;T+=3){let x=T+0,U=T+1,V=T+2;c.push(x,U,U,V,V,x)}}else return;let h=new(q2(c)?ep:tp)(c,1);h.version=m;let b=r.get(l);b&&t.remove(b),r.set(l,h)}function f(l){let c=r.get(l);if(c){let d=l.index;d!==null&&c.version<d.version&&u(l)}else u(l);return r.get(l)}return{get:p,update:s,getWireframeAttribute:f}}function U6(i,t,e){let n;function o(c){n=c}let r,a;function p(c){r=c.type,a=c.bytesPerElement}function s(c,d){i.drawElements(n,d,r,c*a),e.update(d,n,1)}function u(c,d,y){y!==0&&(i.drawElementsInstanced(n,d,r,c*a,y),e.update(d,n,y))}function f(c,d,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,c,0,y);let h=0;for(let b=0;b<y;b++)h+=d[b];e.update(h,n,1)}function l(c,d,y,m){if(y===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let b=0;b<c.length;b++)u(c[b]/a,d[b],m[b]);else{h.multiDrawElementsInstancedWEBGL(n,d,0,r,c,0,m,0,y);let b=0;for(let E=0;E<y;E++)b+=d[E]*m[E];e.update(b,n,1)}}this.setMode=o,this.setIndex=p,this.render=s,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=l}function C6(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,p){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=p*(r/3);break;case i.LINES:e.lines+=p*(r/2);break;case i.LINE_STRIP:e.lines+=p*(r-1);break;case i.LINE_LOOP:e.lines+=p*r;break;case i.POINTS:e.points+=p*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:n}}function x6(i,t,e){let n=new WeakMap,o=new ue;function r(a,p,s){let u=a.morphTargetInfluences,f=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,l=f!==void 0?f.length:0,c=n.get(p);if(c===void 0||c.count!==l){let P=function(){V.dispose(),n.delete(p),p.removeEventListener("dispose",P)};c!==void 0&&c.texture.dispose();let d=p.morphAttributes.position!==void 0,y=p.morphAttributes.normal!==void 0,m=p.morphAttributes.color!==void 0,h=p.morphAttributes.position||[],b=p.morphAttributes.normal||[],E=p.morphAttributes.color||[],T=0;d===!0&&(T=1),y===!0&&(T=2),m===!0&&(T=3);let g=p.attributes.position.count*T,x=1;g>t.maxTextureSize&&(x=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let U=new Float32Array(g*x*4*l),V=new Ka(U,g,x,l);V.type=Gn,V.needsUpdate=!0;let O=T*4;for(let L=0;L<l;L++){let D=h[L],I=b[L],H=E[L],N=g*x*4*L;for(let Y=0;Y<D.count;Y++){let J=Y*O;d===!0&&(o.fromBufferAttribute(D,Y),U[N+J+0]=o.x,U[N+J+1]=o.y,U[N+J+2]=o.z,U[N+J+3]=0),y===!0&&(o.fromBufferAttribute(I,Y),U[N+J+4]=o.x,U[N+J+5]=o.y,U[N+J+6]=o.z,U[N+J+7]=0),m===!0&&(o.fromBufferAttribute(H,Y),U[N+J+8]=o.x,U[N+J+9]=o.y,U[N+J+10]=o.z,U[N+J+11]=H.itemSize===4?o.w:1)}}c={count:l,texture:V,size:new ot(g,x)},n.set(p,c),p.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let m=0;m<u.length;m++)d+=u[m];let y=p.morphTargetsRelative?1:1-d;s.getUniforms().setValue(i,"morphTargetBaseInfluence",y),s.getUniforms().setValue(i,"morphTargetInfluences",u)}s.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),s.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function O6(i,t,e,n){let o=new WeakMap;function r(s){let u=n.render.frame,f=s.geometry,l=t.get(s,f);if(o.get(l)!==u&&(t.update(l),o.set(l,u)),s.isInstancedMesh&&(s.hasEventListener("dispose",p)===!1&&s.addEventListener("dispose",p),o.get(s)!==u&&(e.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&e.update(s.instanceColor,i.ARRAY_BUFFER),o.set(s,u))),s.isSkinnedMesh){let c=s.skeleton;o.get(c)!==u&&(c.update(),o.set(c,u))}return l}function a(){o=new WeakMap}function p(s){let u=s.target;u.removeEventListener("dispose",p),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}var tb=new je,Ad=new Yi(1,1),eb=new Ka,nb=new pu,ob=new op,Id=[],_d=[],$d=new Float32Array(16),kd=new Float32Array(9),Hd=new Float32Array(4);function Sa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let o=t*e,r=Id[o];if(r===void 0&&(r=new Float32Array(o),Id[o]=r),t!==0){n.toArray(r,0);for(let a=1,p=0;a!==t;++a)p+=e,i[a].toArray(r,p)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _f(i,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v6(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function D6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function M6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function A6(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Ze(e,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),Ye(e,n)}}function I6(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Ze(e,n))return;kd.set(n),i.uniformMatrix3fv(this.addr,!1,kd),Ye(e,n)}}function _6(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Ze(e,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),Ye(e,n)}}function $6(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function k6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function H6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function B6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function F6(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function X6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function J6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function z6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let r;this.type===i.SAMPLER_2D_SHADOW?(Ad.compareFunction=Y2,r=Ad):r=tb,e.setTexture2D(t||r,o)}function Q6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture3D(t||nb,o)}function j6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTextureCube(t||ob,o)}function Z6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture2DArray(t||eb,o)}function Y6(i){switch(i){case 5126:return v6;case 35664:return R6;case 35665:return D6;case 35666:return M6;case 35674:return A6;case 35675:return I6;case 35676:return _6;case 5124:case 35670:return $6;case 35667:case 35671:return k6;case 35668:case 35672:return H6;case 35669:case 35673:return B6;case 5125:return F6;case 36294:return N6;case 36295:return X6;case 36296:return J6;case 35678:case 36198:case 36298:case 36306:case 35682:return z6;case 35679:case 36299:case 36307:return Q6;case 35680:case 36300:case 36308:case 36293:return j6;case 36289:case 36303:case 36311:case 36292:return Z6}}function G6(i,t){i.uniform1fv(this.addr,t)}function W6(i,t){let e=Sa(t,this.size,2);i.uniform2fv(this.addr,e)}function q6(i,t){let e=Sa(t,this.size,3);i.uniform3fv(this.addr,e)}function K6(i,t){let e=Sa(t,this.size,4);i.uniform4fv(this.addr,e)}function tT(i,t){let e=Sa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function eT(i,t){let e=Sa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nT(i,t){let e=Sa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function oT(i,t){i.uniform1iv(this.addr,t)}function iT(i,t){i.uniform2iv(this.addr,t)}function rT(i,t){i.uniform3iv(this.addr,t)}function aT(i,t){i.uniform4iv(this.addr,t)}function pT(i,t){i.uniform1uiv(this.addr,t)}function sT(i,t){i.uniform2uiv(this.addr,t)}function uT(i,t){i.uniform3uiv(this.addr,t)}function fT(i,t){i.uniform4uiv(this.addr,t)}function lT(i,t,e){let n=this.cache,o=t.length,r=_f(e,o);Ze(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==o;++a)e.setTexture2D(t[a]||tb,r[a])}function cT(i,t,e){let n=this.cache,o=t.length,r=_f(e,o);Ze(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==o;++a)e.setTexture3D(t[a]||nb,r[a])}function hT(i,t,e){let n=this.cache,o=t.length,r=_f(e,o);Ze(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==o;++a)e.setTextureCube(t[a]||ob,r[a])}function dT(i,t,e){let n=this.cache,o=t.length,r=_f(e,o);Ze(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==o;++a)e.setTexture2DArray(t[a]||eb,r[a])}function bT(i){switch(i){case 5126:return G6;case 35664:return W6;case 35665:return q6;case 35666:return K6;case 35674:return tT;case 35675:return eT;case 35676:return nT;case 5124:case 35670:return oT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return aT;case 5125:return pT;case 36294:return sT;case 36295:return uT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}var fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y6(e.type)}},lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bT(e.type)}},cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let o=this.seq;for(let r=0,a=o.length;r!==a;++r){let p=o[r];p.setValue(t,e[p.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Bd(i,t){i.seq.push(t),i.map[t.id]=t}function yT(i,t,e){let n=i.name,o=n.length;for(uc.lastIndex=0;;){let r=uc.exec(n),a=uc.lastIndex,p=r[1],s=r[2]==="]",u=r[3];if(s&&(p=p|0),u===void 0||u==="["&&a+2===o){Bd(e,u===void 0?new fc(p,i,t):new lc(p,i,t));break}else{let l=e.map[p];l===void 0&&(l=new cc(p),Bd(e,l)),e=l}}}var Va=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let r=t.getActiveUniform(e,o),a=t.getUniformLocation(e,r.name);yT(r,a,this)}}setValue(t,e,n,o){let r=this.map[e];r!==void 0&&r.setValue(t,n,o)}setOptional(t,e,n){let o=e[n];o!==void 0&&this.setValue(t,n,o)}static upload(t,e,n,o){for(let r=0,a=e.length;r!==a;++r){let p=e[r],s=n[p.id];s.needsUpdate!==!1&&p.setValue(t,s.value,o)}}static seqWithValue(t,e){let n=[];for(let o=0,r=t.length;o!==r;++o){let a=t[o];a.id in e&&n.push(a)}return n}};function Fd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mT=37297,gT=0;function TT(i,t){let e=i.split(`
`),n=[],o=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=o;a<r;a++){let p=a+1;n.push(`${p===t?">":" "} ${p}: ${e[a]}`)}return n.join(`
`)}var Nd=new Yt;function ET(i){Kt._getMatrix(Nd,Kt.workingColorSpace,i);let t=`mat3( ${Nd.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Wa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let p=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+TT(i.getShaderSource(t),p)}else return r}function VT(i,t){let e=ET(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ST(i,t){let e;switch(t){case $u:e="Linear";break;case ku:e="Reinhard";break;case Hu:e="Cineon";break;case Bu:e="ACESFilmic";break;case Nu:e="AgX";break;case ba:e="Neutral";break;case Fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mf=new v;function wT(){Kt.getLuminanceCoefficients(Mf);let i=Mf.x.toFixed(4),t=Mf.y.toFixed(4),e=Mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bp).join(`
`)}function LT(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function UT(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){let r=i.getActiveAttrib(t,o),a=r.name,p=1;r.type===i.FLOAT_MAT2&&(p=2),r.type===i.FLOAT_MAT3&&(p=3),r.type===i.FLOAT_MAT4&&(p=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:p}}return e}function Bp(i){return i!==""}function Jd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var CT=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(CT,OT)}var xT=new Map;function OT(i,t){let e=Gt[t];if(e===void 0){let n=xT.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}var vT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(vT,RT)}function RT(i,t,e,n){let o="";for(let r=parseInt(t);r<parseInt(e);r++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function jd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function DT(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===N1?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Lo&&(t="SHADOWMAP_TYPE_VSM"),t}function MT(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case Ap:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AT(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===rr&&(t="ENVMAP_MODE_REFRACTION"),t}function IT(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case H2:t="ENVMAP_BLENDING_MULTIPLY";break;case od:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function _T(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $T(i,t,e,n){let o=i.getContext(),r=e.defines,a=e.vertexShader,p=e.fragmentShader,s=DT(e),u=MT(e),f=AT(e),l=IT(e),c=_T(e),d=PT(e),y=LT(r),m=o.createProgram(),h,b,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Bp).join(`
`),h.length>0&&(h+=`
`),b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Bp).join(`
`),b.length>0&&(b+=`
`)):(h=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bp).join(`
`),b=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+l:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wo?"#define TONE_MAPPING":"",e.toneMapping!==Wo?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Wo?ST("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,VT("linearToOutputTexel",e.outputColorSpace),wT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bp).join(`
`)),a=hc(a),a=Jd(a,e),a=zd(a,e),p=hc(p),p=Jd(p,e),p=zd(p,e),a=Qd(a),p=Qd(p),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,b=["#define varying in",e.glslVersion===G2?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===G2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let T=E+h+a,g=E+b+p,x=Fd(o,o.VERTEX_SHADER,T),U=Fd(o,o.FRAGMENT_SHADER,g);o.attachShader(m,x),o.attachShader(m,U),e.index0AttributeName!==void 0?o.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m);function V(D){if(i.debug.checkShaderErrors){let I=o.getProgramInfoLog(m)||"",H=o.getShaderInfoLog(x)||"",N=o.getShaderInfoLog(U)||"",Y=I.trim(),J=H.trim(),Q=N.trim(),F=!0,G=!0;if(o.getProgramParameter(m,o.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,m,x,U);else{let ft=Xd(o,x,"vertex"),yt=Xd(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,o.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+ft+`
`+yt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(J===""||Q==="")&&(G=!1);G&&(D.diagnostics={runnable:F,programLog:Y,vertexShader:{log:J,prefix:h},fragmentShader:{log:Q,prefix:b}})}o.deleteShader(x),o.deleteShader(U),O=new Va(o,m),P=UT(o,m)}let O;this.getUniforms=function(){return O===void 0&&V(this),O};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(m,mT)),L},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gT++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=U,this}var kT=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,o=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bc(t),e.set(t,n)),n}},bc=class{constructor(t){this.id=kT++,this.code=t,this.usedTimes=0}};function HT(i,t,e,n,o,r,a){let p=new ta,s=new dc,u=new Set,f=[],l=o.logarithmicDepthBuffer,c=o.vertexTextures,d=o.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(P){return u.add(P),P===0?"uv":`uv${P}`}function h(P,L,D,I,H){let N=I.fog,Y=H.geometry,J=P.isMeshStandardMaterial?I.environment:null,Q=(P.isMeshStandardMaterial?e:t).get(P.envMap||J),F=Q&&Q.mapping===Ap?Q.image.height:null,G=y[P.type];P.precision!==null&&(d=o.getMaxPrecision(P.precision),d!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",d,"instead."));let ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yt=ft!==void 0?ft.length:0,$t=0;Y.morphAttributes.position!==void 0&&($t=1),Y.morphAttributes.normal!==void 0&&($t=2),Y.morphAttributes.color!==void 0&&($t=3);let re,te,ee,q;if(G){let he=Uo[G];re=he.vertexShader,te=he.fragmentShader}else re=P.vertexShader,te=P.fragmentShader,s.update(P),ee=s.getVertexShaderID(P),q=s.getFragmentShaderID(P);let tt=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Vt=H.isInstancedMesh===!0,Et=H.isBatchedMesh===!0,Wt=!!P.map,Te=!!P.matcap,M=!!Q,ae=!!P.aoMap,At=!!P.lightMap,Mt=!!P.bumpMap,lt=!!P.normalMap,pe=!!P.displacementMap,Pt=!!P.emissiveMap,Qt=!!P.metalnessMap,ke=!!P.roughnessMap,Pe=P.anisotropy>0,R=P.clearcoat>0,w=P.dispersion>0,B=P.iridescence>0,W=P.sheen>0,nt=P.transmission>0,j=Pe&&!!P.anisotropyMap,Ct=R&&!!P.clearcoatMap,st=R&&!!P.clearcoatNormalMap,wt=R&&!!P.clearcoatRoughnessMap,vt=B&&!!P.iridescenceMap,at=B&&!!P.iridescenceThicknessMap,mt=W&&!!P.sheenColorMap,Ht=W&&!!P.sheenRoughnessMap,Rt=!!P.specularMap,ht=!!P.specularColorMap,Nt=!!P.specularIntensityMap,A=nt&&!!P.transmissionMap,it=nt&&!!P.thicknessMap,ut=!!P.gradientMap,Lt=!!P.alphaMap,rt=P.alphaTest>0,et=!!P.alphaHash,Ot=!!P.extensions,Zt=Wo;P.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Se={shaderID:G,shaderType:P.type,shaderName:P.name,vertexShader:re,fragmentShader:te,defines:P.defines,customVertexShaderID:ee,customFragmentShaderID:q,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:d,batching:Et,batchingColor:Et&&H._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&H.instanceColor!==null,instancingMorph:Vt&&H.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:nn,alphaToCoverage:!!P.alphaToCoverage,map:Wt,matcap:Te,envMap:M,envMapMode:M&&Q.mapping,envMapCubeUVHeight:F,aoMap:ae,lightMap:At,bumpMap:Mt,normalMap:lt,displacementMap:c&&pe,emissiveMap:Pt,normalMapObjectSpace:lt&&P.normalMapType===ld,normalMapTangentSpace:lt&&P.normalMapType===vf,metalnessMap:Qt,roughnessMap:ke,anisotropy:Pe,anisotropyMap:j,clearcoat:R,clearcoatMap:Ct,clearcoatNormalMap:st,clearcoatRoughnessMap:wt,dispersion:w,iridescence:B,iridescenceMap:vt,iridescenceThicknessMap:at,sheen:W,sheenColorMap:mt,sheenRoughnessMap:Ht,specularMap:Rt,specularColorMap:ht,specularIntensityMap:Nt,transmission:nt,transmissionMap:A,thicknessMap:it,gradientMap:ut,opaque:P.transparent===!1&&P.blending===Ni&&P.alphaToCoverage===!1,alphaMap:Lt,alphaTest:rt,alphaHash:et,combine:P.combine,mapUv:Wt&&m(P.map.channel),aoMapUv:ae&&m(P.aoMap.channel),lightMapUv:At&&m(P.lightMap.channel),bumpMapUv:Mt&&m(P.bumpMap.channel),normalMapUv:lt&&m(P.normalMap.channel),displacementMapUv:pe&&m(P.displacementMap.channel),emissiveMapUv:Pt&&m(P.emissiveMap.channel),metalnessMapUv:Qt&&m(P.metalnessMap.channel),roughnessMapUv:ke&&m(P.roughnessMap.channel),anisotropyMapUv:j&&m(P.anisotropyMap.channel),clearcoatMapUv:Ct&&m(P.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&m(P.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&m(P.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(P.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&m(P.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(P.sheenRoughnessMap.channel),specularMapUv:Rt&&m(P.specularMap.channel),specularColorMapUv:ht&&m(P.specularColorMap.channel),specularIntensityMapUv:Nt&&m(P.specularIntensityMap.channel),transmissionMapUv:A&&m(P.transmissionMap.channel),thicknessMapUv:it&&m(P.thicknessMap.channel),alphaMapUv:Lt&&m(P.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(lt||Pe),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Wt||Lt),fog:!!N,useFog:P.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:dt,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:$t,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Wt&&P.map.isVideoTexture===!0&&Kt.getTransfer(P.map.colorSpace)===fe,decodeVideoTextureEmissive:Pt&&P.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(P.emissiveMap.colorSpace)===fe,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===fn,flipSided:P.side===yn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ot&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&P.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Se.vertexUv1s=u.has(1),Se.vertexUv2s=u.has(2),Se.vertexUv3s=u.has(3),u.clear(),Se}function b(P){let L=[];if(P.shaderID?L.push(P.shaderID):(L.push(P.customVertexShaderID),L.push(P.customFragmentShaderID)),P.defines!==void 0)for(let D in P.defines)L.push(D),L.push(P.defines[D]);return P.isRawShaderMaterial===!1&&(E(L,P),T(L,P),L.push(i.outputColorSpace)),L.push(P.customProgramCacheKey),L.join()}function E(P,L){P.push(L.precision),P.push(L.outputColorSpace),P.push(L.envMapMode),P.push(L.envMapCubeUVHeight),P.push(L.mapUv),P.push(L.alphaMapUv),P.push(L.lightMapUv),P.push(L.aoMapUv),P.push(L.bumpMapUv),P.push(L.normalMapUv),P.push(L.displacementMapUv),P.push(L.emissiveMapUv),P.push(L.metalnessMapUv),P.push(L.roughnessMapUv),P.push(L.anisotropyMapUv),P.push(L.clearcoatMapUv),P.push(L.clearcoatNormalMapUv),P.push(L.clearcoatRoughnessMapUv),P.push(L.iridescenceMapUv),P.push(L.iridescenceThicknessMapUv),P.push(L.sheenColorMapUv),P.push(L.sheenRoughnessMapUv),P.push(L.specularMapUv),P.push(L.specularColorMapUv),P.push(L.specularIntensityMapUv),P.push(L.transmissionMapUv),P.push(L.thicknessMapUv),P.push(L.combine),P.push(L.fogExp2),P.push(L.sizeAttenuation),P.push(L.morphTargetsCount),P.push(L.morphAttributeCount),P.push(L.numDirLights),P.push(L.numPointLights),P.push(L.numSpotLights),P.push(L.numSpotLightMaps),P.push(L.numHemiLights),P.push(L.numRectAreaLights),P.push(L.numDirLightShadows),P.push(L.numPointLightShadows),P.push(L.numSpotLightShadows),P.push(L.numSpotLightShadowsWithMaps),P.push(L.numLightProbes),P.push(L.shadowMapType),P.push(L.toneMapping),P.push(L.numClippingPlanes),P.push(L.numClipIntersection),P.push(L.depthPacking)}function T(P,L){p.disableAll(),L.supportsVertexTextures&&p.enable(0),L.instancing&&p.enable(1),L.instancingColor&&p.enable(2),L.instancingMorph&&p.enable(3),L.matcap&&p.enable(4),L.envMap&&p.enable(5),L.normalMapObjectSpace&&p.enable(6),L.normalMapTangentSpace&&p.enable(7),L.clearcoat&&p.enable(8),L.iridescence&&p.enable(9),L.alphaTest&&p.enable(10),L.vertexColors&&p.enable(11),L.vertexAlphas&&p.enable(12),L.vertexUv1s&&p.enable(13),L.vertexUv2s&&p.enable(14),L.vertexUv3s&&p.enable(15),L.vertexTangents&&p.enable(16),L.anisotropy&&p.enable(17),L.alphaHash&&p.enable(18),L.batching&&p.enable(19),L.dispersion&&p.enable(20),L.batchingColor&&p.enable(21),L.gradientMap&&p.enable(22),P.push(p.mask),p.disableAll(),L.fog&&p.enable(0),L.useFog&&p.enable(1),L.flatShading&&p.enable(2),L.logarithmicDepthBuffer&&p.enable(3),L.reversedDepthBuffer&&p.enable(4),L.skinning&&p.enable(5),L.morphTargets&&p.enable(6),L.morphNormals&&p.enable(7),L.morphColors&&p.enable(8),L.premultipliedAlpha&&p.enable(9),L.shadowMapEnabled&&p.enable(10),L.doubleSided&&p.enable(11),L.flipSided&&p.enable(12),L.useDepthPacking&&p.enable(13),L.dithering&&p.enable(14),L.transmission&&p.enable(15),L.sheen&&p.enable(16),L.opaque&&p.enable(17),L.pointsUvs&&p.enable(18),L.decodeVideoTexture&&p.enable(19),L.decodeVideoTextureEmissive&&p.enable(20),L.alphaToCoverage&&p.enable(21),P.push(p.mask)}function g(P){let L=y[P.type],D;if(L){let I=Uo[L];D=Wn.clone(I.uniforms)}else D=P.uniforms;return D}function x(P,L){let D;for(let I=0,H=f.length;I<H;I++){let N=f[I];if(N.cacheKey===L){D=N,++D.usedTimes;break}}return D===void 0&&(D=new $T(i,L,P,r),f.push(D)),D}function U(P){if(--P.usedTimes===0){let L=f.indexOf(P);f[L]=f[f.length-1],f.pop(),P.destroy()}}function V(P){s.remove(P)}function O(){s.dispose()}return{getParameters:h,getProgramCacheKey:b,getUniforms:g,acquireProgram:x,releaseProgram:U,releaseShaderCache:V,programs:f,dispose:O}}function BT(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let p=i.get(a);return p===void 0&&(p={},i.set(a,p)),p}function n(a){i.delete(a)}function o(a,p,s){i.get(a)[p]=s}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:o,dispose:r}}function FT(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yd(){let i=[],t=0,e=[],n=[],o=[];function r(){t=0,e.length=0,n.length=0,o.length=0}function a(l,c,d,y,m,h){let b=i[t];return b===void 0?(b={id:l.id,object:l,geometry:c,material:d,groupOrder:y,renderOrder:l.renderOrder,z:m,group:h},i[t]=b):(b.id=l.id,b.object=l,b.geometry=c,b.material=d,b.groupOrder=y,b.renderOrder=l.renderOrder,b.z=m,b.group=h),t++,b}function p(l,c,d,y,m,h){let b=a(l,c,d,y,m,h);d.transmission>0?n.push(b):d.transparent===!0?o.push(b):e.push(b)}function s(l,c,d,y,m,h){let b=a(l,c,d,y,m,h);d.transmission>0?n.unshift(b):d.transparent===!0?o.unshift(b):e.unshift(b)}function u(l,c){e.length>1&&e.sort(l||FT),n.length>1&&n.sort(c||Zd),o.length>1&&o.sort(c||Zd)}function f(){for(let l=t,c=i.length;l<c;l++){let d=i[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:o,init:r,push:p,unshift:s,finish:f,sort:u}}function NT(){let i=new WeakMap;function t(n,o){let r=i.get(n),a;return r===void 0?(a=new Yd,i.set(n,[a])):o>=r.length?(a=new Yd,r.push(a)):a=r[o],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function XT(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new v,color:new Tt};break;case"SpotLight":e={position:new v,direction:new v,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new v,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new v,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new v,halfWidth:new v,halfHeight:new v};break}return i[t.id]=e,e}}}function JT(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zT=0;function QT(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jT(i){let t=new XT,e=JT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new v);let o=new v,r=new _t,a=new _t;function p(u){let f=0,l=0,c=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,y=0,m=0,h=0,b=0,E=0,T=0,g=0,x=0,U=0,V=0;u.sort(QT);for(let P=0,L=u.length;P<L;P++){let D=u[P],I=D.color,H=D.intensity,N=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*H,l+=I.g*H,c+=I.b*H;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],H);V++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,F=e.get(D);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=D.shadow.matrix,E++}n.directional[d]=J,d++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(I).multiplyScalar(H),J.distance=N,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[m]=J;let Q=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&U++),n.spotLightMatrix[m]=Q.matrix,D.castShadow){let F=e.get(D);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,n.spotShadow[m]=F,n.spotShadowMap[m]=Y,g++}m++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(I).multiplyScalar(H),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[h]=J,h++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let Q=D.shadow,F=e.get(D);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,n.pointShadow[y]=F,n.pointShadowMap[y]=Y,n.pointShadowMatrix[y]=D.shadow.matrix,T++}n.point[y]=J,y++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(H),J.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[b]=J,b++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=l,n.ambient[2]=c;let O=n.hash;(O.directionalLength!==d||O.pointLength!==y||O.spotLength!==m||O.rectAreaLength!==h||O.hemiLength!==b||O.numDirectionalShadows!==E||O.numPointShadows!==T||O.numSpotShadows!==g||O.numSpotMaps!==x||O.numLightProbes!==V)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=h,n.point.length=y,n.hemi.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=g+x-U,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=V,O.directionalLength=d,O.pointLength=y,O.spotLength=m,O.rectAreaLength=h,O.hemiLength=b,O.numDirectionalShadows=E,O.numPointShadows=T,O.numSpotShadows=g,O.numSpotMaps=x,O.numLightProbes=V,n.version=zT++)}function s(u,f){let l=0,c=0,d=0,y=0,m=0,h=f.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){let T=u[b];if(T.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(h),l++}else if(T.isSpotLight){let g=n.spot[d];g.position.setFromMatrixPosition(T.matrixWorld),g.position.applyMatrix4(h),g.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(h),d++}else if(T.isRectAreaLight){let g=n.rectArea[y];g.position.setFromMatrixPosition(T.matrixWorld),g.position.applyMatrix4(h),a.identity(),r.copy(T.matrixWorld),r.premultiply(h),a.extractRotation(r),g.halfWidth.set(T.width*.5,0,0),g.halfHeight.set(0,T.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let g=n.point[c];g.position.setFromMatrixPosition(T.matrixWorld),g.position.applyMatrix4(h),c++}else if(T.isHemisphereLight){let g=n.hemi[m];g.direction.setFromMatrixPosition(T.matrixWorld),g.direction.transformDirection(h),m++}}}return{setup:p,setupView:s,state:n}}function Gd(i){let t=new jT(i),e=[],n=[];function o(f){u.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function p(){t.setup(e)}function s(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:p,setupLightsView:s,pushLight:r,pushShadow:a}}function ZT(i){let t=new WeakMap;function e(o,r=0){let a=t.get(o),p;return a===void 0?(p=new Gd(i),t.set(o,[p])):r>=a.length?(p=new Gd(i),a.push(p)):p=a[r],p}function n(){t=new WeakMap}return{get:e,dispose:n}}var YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
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
}`;function WT(i,t,e){let n=new ra,o=new ot,r=new ot,a=new ue,p=new Tu({depthPacking:fd}),s=new Eu,u={},f=e.maxTextureSize,l={[po]:yn,[yn]:po,[fn]:fn},c=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:YT,fragmentShader:GT}),d=c.clone();d.defines.HORIZONTAL_PASS=1;let y=new le;y.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Bt(y,c),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp;let b=this.type;this.render=function(U,V,O){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||U.length===0)return;let P=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Qe),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=b!==Lo&&this.type===Lo,N=b===Lo&&this.type!==Lo;for(let Y=0,J=U.length;Y<J;Y++){let Q=U[Y],F=Q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);let G=F.getFrameExtents();if(o.multiply(G),r.copy(F.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/G.x),o.x=r.x*G.x,F.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/G.y),o.y=r.y*G.y,F.mapSize.y=r.y)),F.map===null||H===!0||N===!0){let yt=this.type!==Lo?{minFilter:ze,magFilter:ze}:{};F.map!==null&&F.map.dispose(),F.map=new on(o.x,o.y,yt),F.map.texture.name=Q.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let ft=F.getViewportCount();for(let yt=0;yt<ft;yt++){let $t=F.getViewport(yt);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),I.viewport(a),F.updateMatrices(Q,yt),n=F.getFrustum(),g(V,O,F.camera,Q,this.type)}F.isPointLightShadow!==!0&&this.type===Lo&&E(F,O),F.needsUpdate=!1}b=this.type,h.needsUpdate=!1,i.setRenderTarget(P,L,D)};function E(U,V){let O=t.update(m);c.defines.VSM_SAMPLES!==U.blurSamples&&(c.defines.VSM_SAMPLES=U.blurSamples,d.defines.VSM_SAMPLES=U.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new on(o.x,o.y)),c.uniforms.shadow_pass.value=U.map.texture,c.uniforms.resolution.value=U.mapSize,c.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(V,null,O,c,m,null),d.uniforms.shadow_pass.value=U.mapPass.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(V,null,O,d,m,null)}function T(U,V,O,P){let L=null,D=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)L=D;else if(L=O.isPointLight===!0?s:p,i.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){let I=L.uuid,H=V.uuid,N=u[I];N===void 0&&(N={},u[I]=N);let Y=N[H];Y===void 0&&(Y=L.clone(),N[H]=Y,V.addEventListener("dispose",x)),L=Y}if(L.visible=V.visible,L.wireframe=V.wireframe,P===Lo?L.side=V.shadowSide!==null?V.shadowSide:V.side:L.side=V.shadowSide!==null?V.shadowSide:l[V.side],L.alphaMap=V.alphaMap,L.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,L.map=V.map,L.clipShadows=V.clipShadows,L.clippingPlanes=V.clippingPlanes,L.clipIntersection=V.clipIntersection,L.displacementMap=V.displacementMap,L.displacementScale=V.displacementScale,L.displacementBias=V.displacementBias,L.wireframeLinewidth=V.wireframeLinewidth,L.linewidth=V.linewidth,O.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let I=i.properties.get(L);I.light=O}return L}function g(U,V,O,P,L){if(U.visible===!1)return;if(U.layers.test(V.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&L===Lo)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);let H=t.update(U),N=U.material;if(Array.isArray(N)){let Y=H.groups;for(let J=0,Q=Y.length;J<Q;J++){let F=Y[J],G=N[F.materialIndex];if(G&&G.visible){let ft=T(U,G,P,L);U.onBeforeShadow(i,U,V,O,H,ft,F),i.renderBufferDirect(O,null,H,ft,U,F),U.onAfterShadow(i,U,V,O,H,ft,F)}}}else if(N.visible){let Y=T(U,N,P,L);U.onBeforeShadow(i,U,V,O,H,Y,null),i.renderBufferDirect(O,null,H,Y,U,null),U.onAfterShadow(i,U,V,O,H,Y,null)}}let I=U.children;for(let H=0,N=I.length;H<N;H++)g(I[H],V,O,P,L)}function x(U){U.target.removeEventListener("dispose",x);for(let O in u){let P=u[O],L=U.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}}var qT={[vu]:Ru,[Du]:Iu,[Mu]:_u,[Xi]:Au,[Ru]:vu,[Iu]:Du,[_u]:Mu,[Au]:Xi};function KT(i,t){function e(){let A=!1,it=new ue,ut=null,Lt=new ue(0,0,0,0);return{setMask:function(rt){ut!==rt&&!A&&(i.colorMask(rt,rt,rt,rt),ut=rt)},setLocked:function(rt){A=rt},setClear:function(rt,et,Ot,Zt,Se){Se===!0&&(rt*=Zt,et*=Zt,Ot*=Zt),it.set(rt,et,Ot,Zt),Lt.equals(it)===!1&&(i.clearColor(rt,et,Ot,Zt),Lt.copy(it))},reset:function(){A=!1,ut=null,Lt.set(-1,0,0,0)}}}function n(){let A=!1,it=!1,ut=null,Lt=null,rt=null;return{setReversed:function(et){if(it!==et){let Ot=t.get("EXT_clip_control");et?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),it=et;let Zt=rt;rt=null,this.setClear(Zt)}},getReversed:function(){return it},setTest:function(et){et?tt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(et){ut!==et&&!A&&(i.depthMask(et),ut=et)},setFunc:function(et){if(it&&(et=qT[et]),Lt!==et){switch(et){case vu:i.depthFunc(i.NEVER);break;case Ru:i.depthFunc(i.ALWAYS);break;case Du:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Mu:i.depthFunc(i.EQUAL);break;case Au:i.depthFunc(i.GEQUAL);break;case Iu:i.depthFunc(i.GREATER);break;case _u:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=et}},setLocked:function(et){A=et},setClear:function(et){rt!==et&&(it&&(et=1-et),i.clearDepth(et),rt=et)},reset:function(){A=!1,ut=null,Lt=null,rt=null,it=!1}}}function o(){let A=!1,it=null,ut=null,Lt=null,rt=null,et=null,Ot=null,Zt=null,Se=null;return{setTest:function(he){A||(he?tt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(he){it!==he&&!A&&(i.stencilMask(he),it=he)},setFunc:function(he,Ao,co){(ut!==he||Lt!==Ao||rt!==co)&&(i.stencilFunc(he,Ao,co),ut=he,Lt=Ao,rt=co)},setOp:function(he,Ao,co){(et!==he||Ot!==Ao||Zt!==co)&&(i.stencilOp(he,Ao,co),et=he,Ot=Ao,Zt=co)},setLocked:function(he){A=he},setClear:function(he){Se!==he&&(i.clearStencil(he),Se=he)},reset:function(){A=!1,it=null,ut=null,Lt=null,rt=null,et=null,Ot=null,Zt=null,Se=null}}}let r=new e,a=new n,p=new o,s=new WeakMap,u=new WeakMap,f={},l={},c=new WeakMap,d=[],y=null,m=!1,h=null,b=null,E=null,T=null,g=null,x=null,U=null,V=new Tt(0,0,0),O=0,P=!1,L=null,D=null,I=null,H=null,N=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Q=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=Q>=1):F.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=Q>=2);let G=null,ft={},yt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),re=new ue().fromArray(yt),te=new ue().fromArray($t);function ee(A,it,ut,Lt){let rt=new Uint8Array(4),et=i.createTexture();i.bindTexture(A,et),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<ut;Ot++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(it+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return et}let q={};q[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),p.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Xi),Mt(!1),lt(_2),tt(i.CULL_FACE),ae(Qe);function tt(A){f[A]!==!0&&(i.enable(A),f[A]=!0)}function dt(A){f[A]!==!1&&(i.disable(A),f[A]=!1)}function Vt(A,it){return l[A]!==it?(i.bindFramebuffer(A,it),l[A]=it,A===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=it),A===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Et(A,it){let ut=d,Lt=!1;if(A){ut=c.get(it),ut===void 0&&(ut=[],c.set(it,ut));let rt=A.textures;if(ut.length!==rt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Ot=rt.length;et<Ot;et++)ut[et]=i.COLOR_ATTACHMENT0+et;ut.length=rt.length,Lt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(ut)}function Wt(A){return y!==A?(i.useProgram(A),y=A,!0):!1}let Te={[In]:i.FUNC_ADD,[X1]:i.FUNC_SUBTRACT,[J1]:i.FUNC_REVERSE_SUBTRACT};Te[z1]=i.MIN,Te[Q1]=i.MAX;let M={[or]:i.ZERO,[j1]:i.ONE,[Z1]:i.SRC_COLOR,[nu]:i.SRC_ALPHA,[q1]:i.SRC_ALPHA_SATURATE,[Mp]:i.DST_COLOR,[Dp]:i.DST_ALPHA,[Y1]:i.ONE_MINUS_SRC_COLOR,[ou]:i.ONE_MINUS_SRC_ALPHA,[W1]:i.ONE_MINUS_DST_COLOR,[G1]:i.ONE_MINUS_DST_ALPHA,[K1]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(A,it,ut,Lt,rt,et,Ot,Zt,Se,he){if(A===Qe){m===!0&&(dt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),A!==Ou){if(A!==h||he!==P){if((b!==In||g!==In)&&(i.blendEquation(i.FUNC_ADD),b=In,g=In),he)switch(A){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case $2:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case k2:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $2:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k2:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}E=null,T=null,x=null,U=null,V.set(0,0,0),O=0,h=A,P=he}return}rt=rt||it,et=et||ut,Ot=Ot||Lt,(it!==b||rt!==g)&&(i.blendEquationSeparate(Te[it],Te[rt]),b=it,g=rt),(ut!==E||Lt!==T||et!==x||Ot!==U)&&(i.blendFuncSeparate(M[ut],M[Lt],M[et],M[Ot]),E=ut,T=Lt,x=et,U=Ot),(Zt.equals(V)===!1||Se!==O)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Se),V.copy(Zt),O=Se),h=A,P=!1}function At(A,it){A.side===fn?dt(i.CULL_FACE):tt(i.CULL_FACE);let ut=A.side===yn;it&&(ut=!ut),Mt(ut),A.blending===Ni&&A.transparent===!1?ae(Qe):ae(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let Lt=A.stencilWrite;p.setTest(Lt),Lt&&(p.setMask(A.stencilWriteMask),p.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),p.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Pt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(A){L!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),L=A)}function lt(A){A!==B1?(tt(i.CULL_FACE),A!==D&&(A===_2?i.cullFace(i.BACK):A===F1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),D=A}function pe(A){A!==I&&(J&&i.lineWidth(A),I=A)}function Pt(A,it,ut){A?(tt(i.POLYGON_OFFSET_FILL),(H!==it||N!==ut)&&(i.polygonOffset(it,ut),H=it,N=ut)):dt(i.POLYGON_OFFSET_FILL)}function Qt(A){A?tt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function ke(A){A===void 0&&(A=i.TEXTURE0+Y-1),G!==A&&(i.activeTexture(A),G=A)}function Pe(A,it,ut){ut===void 0&&(G===null?ut=i.TEXTURE0+Y-1:ut=G);let Lt=ft[ut];Lt===void 0&&(Lt={type:void 0,texture:void 0},ft[ut]=Lt),(Lt.type!==A||Lt.texture!==it)&&(G!==ut&&(i.activeTexture(ut),G=ut),i.bindTexture(A,it||q[A]),Lt.type=A,Lt.texture=it)}function R(){let A=ft[G];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{i.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function nt(){try{i.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function st(){try{i.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function wt(){try{i.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function vt(){try{i.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{i.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(A){re.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),re.copy(A))}function Ht(A){te.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),te.copy(A))}function Rt(A,it){let ut=u.get(it);ut===void 0&&(ut=new WeakMap,u.set(it,ut));let Lt=ut.get(A);Lt===void 0&&(Lt=i.getUniformBlockIndex(it,A.name),ut.set(A,Lt))}function ht(A,it){let Lt=u.get(it).get(A);s.get(it)!==Lt&&(i.uniformBlockBinding(it,Lt,A.__bindingPointIndex),s.set(it,Lt))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},G=null,ft={},l={},c=new WeakMap,d=[],y=null,m=!1,h=null,b=null,E=null,T=null,g=null,x=null,U=null,V=new Tt(0,0,0),O=0,P=!1,L=null,D=null,I=null,H=null,N=null,re.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),p.reset()}return{buffers:{color:r,depth:a,stencil:p},enable:tt,disable:dt,bindFramebuffer:Vt,drawBuffers:Et,useProgram:Wt,setBlending:ae,setMaterial:At,setFlipSided:Mt,setCullFace:lt,setLineWidth:pe,setPolygonOffset:Pt,setScissorTest:Qt,activeTexture:ke,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:B,texImage2D:vt,texImage3D:at,updateUBOMapping:Rt,uniformBlockBinding:ht,texStorage2D:st,texStorage3D:wt,texSubImage2D:W,texSubImage3D:nt,compressedTexSubImage2D:j,compressedTexSubImage3D:Ct,scissor:mt,viewport:Ht,reset:Nt}}function t9(i,t,e,n,o,r,a){let p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,f=new WeakMap,l,c=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,w){return d?new OffscreenCanvas(R,w):Wr("canvas")}function m(R,w,B){let W=1,nt=Pe(R);if((nt.width>B||nt.height>B)&&(W=B/Math.max(nt.width,nt.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(W*nt.width),Ct=Math.floor(W*nt.height);l===void 0&&(l=y(j,Ct));let st=w?y(j,Ct):l;return st.width=j,st.height=Ct,st.getContext("2d").drawImage(R,0,0,j,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Ct+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function h(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,w,B,W,nt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=w;if(w===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),w===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),w===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),w===i.RGBA){let Ct=nt?Wa:Kt.getTransfer(W);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Ct===fe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function g(R,w){let B;return R?w===null||w===mi||w===gi?B=i.DEPTH24_STENCIL8:w===Gn?B=i.DEPTH32F_STENCIL8:w===ma&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===mi||w===gi?B=i.DEPTH_COMPONENT24:w===Gn?B=i.DEPTH_COMPONENT32F:w===ma&&(B=i.DEPTH_COMPONENT16),B}function x(R,w){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==ze&&R.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function U(R){let w=R.target;w.removeEventListener("dispose",U),O(w),w.isVideoTexture&&f.delete(w)}function V(R){let w=R.target;w.removeEventListener("dispose",V),L(w)}function O(R){let w=n.get(R);if(w.__webglInit===void 0)return;let B=R.source,W=c.get(B);if(W){let nt=W[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(R),Object.keys(W).length===0&&c.delete(B)}n.remove(R)}function P(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let B=R.source,W=c.get(B);delete W[w.__cacheKey],a.memory.textures--}function L(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(w.__webglFramebuffer[W]))for(let nt=0;nt<w.__webglFramebuffer[W].length;nt++)i.deleteFramebuffer(w.__webglFramebuffer[W][nt]);else i.deleteFramebuffer(w.__webglFramebuffer[W]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[W])}else{if(Array.isArray(w.__webglFramebuffer))for(let W=0;W<w.__webglFramebuffer.length;W++)i.deleteFramebuffer(w.__webglFramebuffer[W]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let W=0;W<w.__webglColorRenderbuffer.length;W++)w.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[W]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let B=R.textures;for(let W=0,nt=B.length;W<nt;W++){let j=n.get(B[W]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(R)}let D=0;function I(){D=0}function H(){let R=D;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),D+=1,R}function N(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function Y(R,w){let B=n.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,w);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+w)}function J(R,w){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+w)}function Q(R,w){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,w);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+w)}function F(R,w){let B=n.get(R);if(R.version>0&&B.__version!==R.version){tt(B,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+w)}let G={[wn]:i.REPEAT,[mo]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},ft={[ze]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},yt={[cd]:i.NEVER,[gd]:i.ALWAYS,[hd]:i.LESS,[Y2]:i.LEQUAL,[dd]:i.EQUAL,[md]:i.GEQUAL,[bd]:i.GREATER,[yd]:i.NOTEQUAL};function $t(R,w){if(w.type===Gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===ya||w.magFilter===ar||w.magFilter===Cn||w.minFilter===en||w.minFilter===ya||w.minFilter===ar||w.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,G[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,G[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,G[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ft[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ft[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,yt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ze||w.minFilter!==ar&&w.minFilter!==Cn||w.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function re(R,w){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",U));let W=w.source,nt=c.get(W);nt===void 0&&(nt={},c.set(W,nt));let j=N(w);if(j!==R.__cacheKey){nt[j]===void 0&&(nt[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),nt[j].usedTimes++;let Ct=nt[R.__cacheKey];Ct!==void 0&&(nt[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&P(w)),R.__cacheKey=j,R.__webglTexture=nt[j].texture}return B}function te(R,w,B){return Math.floor(Math.floor(R/B)/w)}function ee(R,w,B,W){let j=R.updateRanges;if(j.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,B,W,w.data);else{j.sort((at,mt)=>at.start-mt.start);let Ct=0;for(let at=1;at<j.length;at++){let mt=j[Ct],Ht=j[at],Rt=mt.start+mt.count,ht=te(Ht.start,w.width,4),Nt=te(mt.start,w.width,4);Ht.start<=Rt+1&&ht===Nt&&te(Ht.start+Ht.count-1,w.width,4)===ht?mt.count=Math.max(mt.count,Ht.start+Ht.count-mt.start):(++Ct,j[Ct]=Ht)}j.length=Ct+1;let st=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let at=0,mt=j.length;at<mt;at++){let Ht=j[at],Rt=Math.floor(Ht.start/4),ht=Math.ceil(Ht.count/4),Nt=Rt%w.width,A=Math.floor(Rt/w.width),it=ht,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,A),e.texSubImage2D(i.TEXTURE_2D,0,Nt,A,it,ut,B,W,w.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function q(R,w,B){let W=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(W=i.TEXTURE_3D);let nt=re(R,w),j=w.source;e.bindTexture(W,R.__webglTexture,i.TEXTURE0+B);let Ct=n.get(j);if(j.version!==Ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);let st=Kt.getPrimaries(Kt.workingColorSpace),wt=w.colorSpace===fo?null:Kt.getPrimaries(w.colorSpace),vt=w.colorSpace===fo||st===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let at=m(w.image,!1,o.maxTextureSize);at=ke(w,at);let mt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),Rt=T(w.internalFormat,mt,Ht,w.colorSpace,w.isVideoTexture);$t(W,w);let ht,Nt=w.mipmaps,A=w.isVideoTexture!==!0,it=Ct.__version===void 0||nt===!0,ut=j.dataReady,Lt=x(w,at);if(w.isDepthTexture)Rt=g(w.format===Ti,w.type),it&&(A?e.texStorage2D(i.TEXTURE_2D,1,Rt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Rt,at.width,at.height,0,mt,Ht,null));else if(w.isDataTexture)if(Nt.length>0){A&&it&&e.texStorage2D(i.TEXTURE_2D,Lt,Rt,Nt[0].width,Nt[0].height);for(let rt=0,et=Nt.length;rt<et;rt++)ht=Nt[rt],A?ut&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ht.width,ht.height,mt,Ht,ht.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,ht.width,ht.height,0,mt,Ht,ht.data);w.generateMipmaps=!1}else A?(it&&e.texStorage2D(i.TEXTURE_2D,Lt,Rt,at.width,at.height),ut&&ee(w,at,mt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Rt,at.width,at.height,0,mt,Ht,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){A&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Rt,Nt[0].width,Nt[0].height,at.depth);for(let rt=0,et=Nt.length;rt<et;rt++)if(ht=Nt[rt],w.format!==mn)if(mt!==null)if(A){if(ut)if(w.layerUpdates.size>0){let Ot=oc(ht.width,ht.height,w.format,w.type);for(let Zt of w.layerUpdates){let Se=ht.data.subarray(Zt*Ot/ht.data.BYTES_PER_ELEMENT,(Zt+1)*Ot/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Zt,ht.width,ht.height,1,mt,Se)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,ht.width,ht.height,at.depth,mt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,ht.width,ht.height,at.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,ht.width,ht.height,at.depth,mt,Ht,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,ht.width,ht.height,at.depth,0,mt,Ht,ht.data)}else{A&&it&&e.texStorage2D(i.TEXTURE_2D,Lt,Rt,Nt[0].width,Nt[0].height);for(let rt=0,et=Nt.length;rt<et;rt++)ht=Nt[rt],w.format!==mn?mt!==null?A?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,ht.width,ht.height,mt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Rt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?ut&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ht.width,ht.height,mt,Ht,ht.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,ht.width,ht.height,0,mt,Ht,ht.data)}else if(w.isDataArrayTexture)if(A){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Rt,at.width,at.height,at.depth),ut)if(w.layerUpdates.size>0){let rt=oc(at.width,at.height,w.format,w.type);for(let et of w.layerUpdates){let Ot=at.data.subarray(et*rt/at.data.BYTES_PER_ELEMENT,(et+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,mt,Ht,Ot)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,Ht,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,at.width,at.height,at.depth,0,mt,Ht,at.data);else if(w.isData3DTexture)A?(it&&e.texStorage3D(i.TEXTURE_3D,Lt,Rt,at.width,at.height,at.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,Ht,at.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,at.width,at.height,at.depth,0,mt,Ht,at.data);else if(w.isFramebufferTexture){if(it)if(A)e.texStorage2D(i.TEXTURE_2D,Lt,Rt,at.width,at.height);else{let rt=at.width,et=at.height;for(let Ot=0;Ot<Lt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,Rt,rt,et,0,mt,Ht,null),rt>>=1,et>>=1}}else if(Nt.length>0){if(A&&it){let rt=Pe(Nt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Rt,rt.width,rt.height)}for(let rt=0,et=Nt.length;rt<et;rt++)ht=Nt[rt],A?ut&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt,Ht,ht):e.texImage2D(i.TEXTURE_2D,rt,Rt,mt,Ht,ht);w.generateMipmaps=!1}else if(A){if(it){let rt=Pe(at);e.texStorage2D(i.TEXTURE_2D,Lt,Rt,rt.width,rt.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ht,at)}else e.texImage2D(i.TEXTURE_2D,0,Rt,mt,Ht,at);h(w)&&b(W),Ct.__version=j.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function tt(R,w,B){if(w.image.length!==6)return;let W=re(R,w),nt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let j=n.get(nt);if(nt.version!==j.__version||W===!0){e.activeTexture(i.TEXTURE0+B);let Ct=Kt.getPrimaries(Kt.workingColorSpace),st=w.colorSpace===fo?null:Kt.getPrimaries(w.colorSpace),wt=w.colorSpace===fo||Ct===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let vt=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let et=0;et<6;et++)!vt&&!at?mt[et]=m(w.image[et],!0,o.maxCubemapSize):mt[et]=at?w.image[et].image:w.image[et],mt[et]=ke(w,mt[et]);let Ht=mt[0],Rt=r.convert(w.format,w.colorSpace),ht=r.convert(w.type),Nt=T(w.internalFormat,Rt,ht,w.colorSpace),A=w.isVideoTexture!==!0,it=j.__version===void 0||W===!0,ut=nt.dataReady,Lt=x(w,Ht);$t(i.TEXTURE_CUBE_MAP,w);let rt;if(vt){A&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Nt,Ht.width,Ht.height);for(let et=0;et<6;et++){rt=mt[et].mipmaps;for(let Ot=0;Ot<rt.length;Ot++){let Zt=rt[Ot];w.format!==mn?Rt!==null?A?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,0,0,Zt.width,Zt.height,Rt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,Nt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,0,0,Zt.width,Zt.height,Rt,ht,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot,Nt,Zt.width,Zt.height,0,Rt,ht,Zt.data)}}}else{if(rt=w.mipmaps,A&&it){rt.length>0&&Lt++;let et=Pe(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Nt,et.width,et.height)}for(let et=0;et<6;et++)if(at){A?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,mt[et].width,mt[et].height,Rt,ht,mt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Nt,mt[et].width,mt[et].height,0,Rt,ht,mt[et].data);for(let Ot=0;Ot<rt.length;Ot++){let Se=rt[Ot].image[et].image;A?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,0,0,Se.width,Se.height,Rt,ht,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,Nt,Se.width,Se.height,0,Rt,ht,Se.data)}}else{A?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt,ht,mt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Nt,Rt,ht,mt[et]);for(let Ot=0;Ot<rt.length;Ot++){let Zt=rt[Ot];A?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,0,0,Rt,ht,Zt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ot+1,Nt,Rt,ht,Zt.image[et])}}}h(w)&&b(i.TEXTURE_CUBE_MAP),j.__version=nt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function dt(R,w,B,W,nt,j){let Ct=r.convert(B.format,B.colorSpace),st=r.convert(B.type),wt=T(B.internalFormat,Ct,st,B.colorSpace),vt=n.get(w),at=n.get(B);if(at.__renderTarget=w,!vt.__hasExternalTextures){let mt=Math.max(1,w.width>>j),Ht=Math.max(1,w.height>>j);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,wt,mt,Ht,w.depth,0,Ct,st,null):e.texImage2D(nt,j,wt,mt,Ht,0,Ct,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Pt(w)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,nt,at.__webglTexture,0,pe(w)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,nt,at.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(R,w,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let W=w.depthTexture,nt=W&&W.isDepthTexture?W.type:null,j=g(w.stencilBuffer,nt),Ct=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=pe(w);Pt(w)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,j,w.width,w.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let W=w.textures;for(let nt=0;nt<W.length;nt++){let j=W[nt],Ct=r.convert(j.format,j.colorSpace),st=r.convert(j.type),wt=T(j.internalFormat,Ct,st,j.colorSpace),vt=pe(w);B&&Pt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,wt,w.width,w.height):Pt(w)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,wt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,wt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(w.depthTexture);W.__renderTarget=w,(!W.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);let nt=W.__webglTexture,j=pe(w);if(w.depthTexture.format===Gr)Pt(w)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(w.depthTexture.format===Ti)Pt(w)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Wt(R){let w=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),W){let nt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,W.removeEventListener("dispose",nt)};W.addEventListener("dispose",nt),w.__depthDisposeCallback=nt}w.__boundDepthTexture=W}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let W=R.texture.mipmaps;W&&W.length>0?Et(w.__webglFramebuffer[0],R):Et(w.__webglFramebuffer,R)}else if(B){w.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[W]),w.__webglDepthbuffer[W]===void 0)w.__webglDepthbuffer[W]=i.createRenderbuffer(),Vt(w.__webglDepthbuffer[W],R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,j)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Vt(w.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(R,w,B){let W=n.get(R);w!==void 0&&dt(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Wt(R)}function M(R){let w=R.texture,B=n.get(R),W=n.get(w);R.addEventListener("dispose",V);let nt=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=w.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let wt=0;wt<w.mipmaps.length;wt++)B.__webglFramebuffer[st][wt]=i.createFramebuffer()}else B.__webglFramebuffer[st]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<w.mipmaps.length;st++)B.__webglFramebuffer[st]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let st=0,wt=nt.length;st<wt;st++){let vt=n.get(nt[st]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Pt(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<nt.length;st++){let wt=nt[st];B.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[st]);let vt=r.convert(wt.format,wt.colorSpace),at=r.convert(wt.type),mt=T(wt.internalFormat,vt,at,wt.colorSpace,R.isXRRenderTarget===!0),Ht=pe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,B.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),$t(i.TEXTURE_CUBE_MAP,w);for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)dt(B.__webglFramebuffer[st][wt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt);else dt(B.__webglFramebuffer[st],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);h(w)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let st=0,wt=nt.length;st<wt;st++){let vt=nt[st],at=n.get(vt),mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,at.__webglTexture),$t(mt,vt),dt(B.__webglFramebuffer,R,vt,i.COLOR_ATTACHMENT0+st,mt,0),h(vt)&&b(mt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,W.__webglTexture),$t(st,w),w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)dt(B.__webglFramebuffer[wt],R,w,i.COLOR_ATTACHMENT0,st,wt);else dt(B.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,st,0);h(w)&&b(st),e.unbindTexture()}R.depthBuffer&&Wt(R)}function ae(R){let w=R.textures;for(let B=0,W=w.length;B<W;B++){let nt=w[B];if(h(nt)){let j=E(R),Ct=n.get(nt).__webglTexture;e.bindTexture(j,Ct),b(j),e.unbindTexture()}}}let At=[],Mt=[];function lt(R){if(R.samples>0){if(Pt(R)===!1){let w=R.textures,B=R.width,W=R.height,nt=i.COLOR_BUFFER_BIT,j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),st=w.length>1;if(st)for(let vt=0;vt<w.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let vt=0;vt<w.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);let at=n.get(w[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,nt,i.NEAREST),s===!0&&(At.length=0,Mt.length=0,At.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(At.push(j),Mt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let vt=0;vt<w.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);let at=n.get(w[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&s){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function pe(R){return Math.min(o.maxSamples,R.samples)}function Pt(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(R){let w=a.render.frame;f.get(R)!==w&&(f.set(R,w),R.update())}function ke(R,w){let B=R.colorSpace,W=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==nn&&B!==fo&&(Kt.getTransfer(B)===fe?(W!==mn||nt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=F,this.rebindTextures=Te,this.setupRenderTarget=M,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Pt}function e9(i,t){function e(n,o=fo){let r,a=Kt.getTransfer(o);if(n===kn)return i.UNSIGNED_BYTE;if(n===ju)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===X2)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===J2)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===F2)return i.BYTE;if(n===N2)return i.SHORT;if(n===ma)return i.UNSIGNED_SHORT;if(n===Qu)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===z2)return i.ALPHA;if(n===Q2)return i.RGB;if(n===mn)return i.RGBA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===Gu)return i.RED_INTEGER;if(n===j2)return i.RG;if(n===Wu)return i.RG_INTEGER;if(n===qu)return i.RGBA_INTEGER;if(n===Ip||n===_p||n===$p||n===kp)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ip)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_p)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$p)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kp)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ip)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_p)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$p)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kp)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ku||n===tf||n===ef||n===nf)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ku)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ef)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===of||n===rf||n===af)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===of||n===rf)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===af)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pf||n===sf||n===uf||n===ff||n===lf||n===cf||n===hf||n===df||n===bf||n===yf||n===mf||n===gf||n===Tf||n===Ef)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ff)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===df)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tf)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ef)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vf||n===Sf||n===wf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vf)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===Lf||n===Uf||n===Cf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pf)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var n9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o9=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new lp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:n9,fragmentShader:o9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mc=class extends To{constructor(t,e){super();let n=this,o=null,r=1,a=null,p="local-floor",s=1,u=null,f=null,l=null,c=null,d=null,y=null,m=typeof XRWebGLBinding<"u",h=new yc,b={},E=e.getContextAttributes(),T=null,g=null,x=[],U=[],V=new ot,O=null,P=new Xe;P.viewport=new ue;let L=new Xe;L.viewport=new ue;let D=[P,L],I=new Uu,H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=x[q];return tt===void 0&&(tt=new ea,x[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=x[q];return tt===void 0&&(tt=new ea,x[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=x[q];return tt===void 0&&(tt=new ea,x[q]=tt),tt.getHandSpace()};function Y(q){let tt=U.indexOf(q.inputSource);if(tt===-1)return;let dt=x[tt];dt!==void 0&&(dt.update(q.inputSource,q.frame,u||a),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",Q);for(let q=0;q<x.length;q++){let tt=U[q];tt!==null&&(U[q]=null,x[q].disconnect(tt))}H=null,N=null,h.reset();for(let q in b)delete b[q];t.setRenderTarget(T),d=null,c=null,l=null,o=null,g=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return l===null&&m&&(l=new XRWebGLBinding(o,e)),l},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(T=t.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",J),o.addEventListener("inputsourceschange",Q),E.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(V),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Vt=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=E.stencil?Ti:Gr,Vt=E.stencil?gi:mi);let Wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};l=this.getBinding(),c=l.createProjectionLayer(Wt),o.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),g=new on(c.textureWidth,c.textureHeight,{format:mn,type:kn,depthTexture:new Yi(c.textureWidth,c.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{let dt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(o,e,dt),o.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new on(d.framebufferWidth,d.framebufferHeight,{format:mn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(s),u=null,a=await o.requestReferenceSpace(p),ee.setContext(o),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function Q(q){for(let tt=0;tt<q.removed.length;tt++){let dt=q.removed[tt],Vt=U.indexOf(dt);Vt>=0&&(U[Vt]=null,x[Vt].disconnect(dt))}for(let tt=0;tt<q.added.length;tt++){let dt=q.added[tt],Vt=U.indexOf(dt);if(Vt===-1){for(let Wt=0;Wt<x.length;Wt++)if(Wt>=U.length){U.push(dt),Vt=Wt;break}else if(U[Wt]===null){U[Wt]=dt,Vt=Wt;break}if(Vt===-1)break}let Et=x[Vt];Et&&Et.connect(dt)}}let F=new v,G=new v;function ft(q,tt,dt){F.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(dt.matrixWorld);let Vt=F.distanceTo(G),Et=tt.projectionMatrix.elements,Wt=dt.projectionMatrix.elements,Te=Et[14]/(Et[10]-1),M=Et[14]/(Et[10]+1),ae=(Et[9]+1)/Et[5],At=(Et[9]-1)/Et[5],Mt=(Et[8]-1)/Et[0],lt=(Wt[8]+1)/Wt[0],pe=Te*Mt,Pt=Te*lt,Qt=Vt/(-Mt+lt),ke=Qt*-Mt;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(Qt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Pe=Te+Qt,R=M+Qt,w=pe-ke,B=Pt+(Vt-ke),W=ae*M/R*Pe,nt=At*M/R*Pe;q.projectionMatrix.makePerspective(w,B,W,nt,Pe,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let tt=q.near,dt=q.far;h.texture!==null&&(h.depthNear>0&&(tt=h.depthNear),h.depthFar>0&&(dt=h.depthFar)),I.near=L.near=P.near=tt,I.far=L.far=P.far=dt,(H!==I.near||N!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,N=I.far),I.layers.mask=q.layers.mask|6,P.layers.mask=I.layers.mask&3,L.layers.mask=I.layers.mask&5;let Vt=q.parent,Et=I.cameras;yt(I,Vt);for(let Wt=0;Wt<Et.length;Wt++)yt(Et[Wt],Vt);Et.length===2?ft(I,P,L):I.projectionMatrix.copy(P.projectionMatrix),$t(q,I,Vt)};function $t(q,tt,dt){dt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(c===null&&d===null))return s},this.setFoveation=function(q){s=q,c!==null&&(c.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(I)},this.getCameraTexture=function(q){return b[q]};let re=null;function te(q,tt){if(f=tt.getViewerPose(u||a),y=tt,f!==null){let dt=f.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let Vt=!1;dt.length!==I.cameras.length&&(I.cameras.length=0,Vt=!0);for(let M=0;M<dt.length;M++){let ae=dt[M],At=null;if(d!==null)At=d.getViewport(ae);else{let lt=l.getViewSubImage(c,ae);At=lt.viewport,M===0&&(t.setRenderTargetTextures(g,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(g))}let Mt=D[M];Mt===void 0&&(Mt=new Xe,Mt.layers.enable(M),Mt.viewport=new ue,D[M]=Mt),Mt.matrix.fromArray(ae.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(ae.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(At.x,At.y,At.width,At.height),M===0&&(I.matrix.copy(Mt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Vt===!0&&I.cameras.push(Mt)}let Et=o.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&m){l=n.getBinding();let M=l.getDepthInformation(dt[0]);M&&M.isValid&&M.texture&&h.init(M,o.renderState)}if(Et&&Et.includes("camera-access")&&m){t.state.unbindTexture(),l=n.getBinding();for(let M=0;M<dt.length;M++){let ae=dt[M].camera;if(ae){let At=b[ae];At||(At=new lp,b[ae]=At);let Mt=l.getCameraImage(ae);At.sourceTexture=Mt}}}}for(let dt=0;dt<x.length;dt++){let Vt=U[dt],Et=x[dt];Vt!==null&&Et!==void 0&&Et.update(Vt,tt,u||a)}re&&re(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),y=null}let ee=new Kd;ee.setAnimationLoop(te),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}},ur=new _n,i9=new _t;function r9(i,t){function e(h,b){h.matrixAutoUpdate===!0&&h.updateMatrix(),b.value.copy(h.matrix)}function n(h,b){b.color.getRGB(h.fogColor.value,K2(i)),b.isFog?(h.fogNear.value=b.near,h.fogFar.value=b.far):b.isFogExp2&&(h.fogDensity.value=b.density)}function o(h,b,E,T,g){b.isMeshBasicMaterial||b.isMeshLambertMaterial?r(h,b):b.isMeshToonMaterial?(r(h,b),l(h,b)):b.isMeshPhongMaterial?(r(h,b),f(h,b)):b.isMeshStandardMaterial?(r(h,b),c(h,b),b.isMeshPhysicalMaterial&&d(h,b,g)):b.isMeshMatcapMaterial?(r(h,b),y(h,b)):b.isMeshDepthMaterial?r(h,b):b.isMeshDistanceMaterial?(r(h,b),m(h,b)):b.isMeshNormalMaterial?r(h,b):b.isLineBasicMaterial?(a(h,b),b.isLineDashedMaterial&&p(h,b)):b.isPointsMaterial?s(h,b,E,T):b.isSpriteMaterial?u(h,b):b.isShadowMaterial?(h.color.value.copy(b.color),h.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function r(h,b){h.opacity.value=b.opacity,b.color&&h.diffuse.value.copy(b.color),b.emissive&&h.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(h.map.value=b.map,e(b.map,h.mapTransform)),b.alphaMap&&(h.alphaMap.value=b.alphaMap,e(b.alphaMap,h.alphaMapTransform)),b.bumpMap&&(h.bumpMap.value=b.bumpMap,e(b.bumpMap,h.bumpMapTransform),h.bumpScale.value=b.bumpScale,b.side===yn&&(h.bumpScale.value*=-1)),b.normalMap&&(h.normalMap.value=b.normalMap,e(b.normalMap,h.normalMapTransform),h.normalScale.value.copy(b.normalScale),b.side===yn&&h.normalScale.value.negate()),b.displacementMap&&(h.displacementMap.value=b.displacementMap,e(b.displacementMap,h.displacementMapTransform),h.displacementScale.value=b.displacementScale,h.displacementBias.value=b.displacementBias),b.emissiveMap&&(h.emissiveMap.value=b.emissiveMap,e(b.emissiveMap,h.emissiveMapTransform)),b.specularMap&&(h.specularMap.value=b.specularMap,e(b.specularMap,h.specularMapTransform)),b.alphaTest>0&&(h.alphaTest.value=b.alphaTest);let E=t.get(b),T=E.envMap,g=E.envMapRotation;T&&(h.envMap.value=T,ur.copy(g),ur.x*=-1,ur.y*=-1,ur.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),h.envMapRotation.value.setFromMatrix4(i9.makeRotationFromEuler(ur)),h.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=b.reflectivity,h.ior.value=b.ior,h.refractionRatio.value=b.refractionRatio),b.lightMap&&(h.lightMap.value=b.lightMap,h.lightMapIntensity.value=b.lightMapIntensity,e(b.lightMap,h.lightMapTransform)),b.aoMap&&(h.aoMap.value=b.aoMap,h.aoMapIntensity.value=b.aoMapIntensity,e(b.aoMap,h.aoMapTransform))}function a(h,b){h.diffuse.value.copy(b.color),h.opacity.value=b.opacity,b.map&&(h.map.value=b.map,e(b.map,h.mapTransform))}function p(h,b){h.dashSize.value=b.dashSize,h.totalSize.value=b.dashSize+b.gapSize,h.scale.value=b.scale}function s(h,b,E,T){h.diffuse.value.copy(b.color),h.opacity.value=b.opacity,h.size.value=b.size*E,h.scale.value=T*.5,b.map&&(h.map.value=b.map,e(b.map,h.uvTransform)),b.alphaMap&&(h.alphaMap.value=b.alphaMap,e(b.alphaMap,h.alphaMapTransform)),b.alphaTest>0&&(h.alphaTest.value=b.alphaTest)}function u(h,b){h.diffuse.value.copy(b.color),h.opacity.value=b.opacity,h.rotation.value=b.rotation,b.map&&(h.map.value=b.map,e(b.map,h.mapTransform)),b.alphaMap&&(h.alphaMap.value=b.alphaMap,e(b.alphaMap,h.alphaMapTransform)),b.alphaTest>0&&(h.alphaTest.value=b.alphaTest)}function f(h,b){h.specular.value.copy(b.specular),h.shininess.value=Math.max(b.shininess,1e-4)}function l(h,b){b.gradientMap&&(h.gradientMap.value=b.gradientMap)}function c(h,b){h.metalness.value=b.metalness,b.metalnessMap&&(h.metalnessMap.value=b.metalnessMap,e(b.metalnessMap,h.metalnessMapTransform)),h.roughness.value=b.roughness,b.roughnessMap&&(h.roughnessMap.value=b.roughnessMap,e(b.roughnessMap,h.roughnessMapTransform)),b.envMap&&(h.envMapIntensity.value=b.envMapIntensity)}function d(h,b,E){h.ior.value=b.ior,b.sheen>0&&(h.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),h.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(h.sheenColorMap.value=b.sheenColorMap,e(b.sheenColorMap,h.sheenColorMapTransform)),b.sheenRoughnessMap&&(h.sheenRoughnessMap.value=b.sheenRoughnessMap,e(b.sheenRoughnessMap,h.sheenRoughnessMapTransform))),b.clearcoat>0&&(h.clearcoat.value=b.clearcoat,h.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(h.clearcoatMap.value=b.clearcoatMap,e(b.clearcoatMap,h.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,e(b.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(h.clearcoatNormalMap.value=b.clearcoatNormalMap,e(b.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===yn&&h.clearcoatNormalScale.value.negate())),b.dispersion>0&&(h.dispersion.value=b.dispersion),b.iridescence>0&&(h.iridescence.value=b.iridescence,h.iridescenceIOR.value=b.iridescenceIOR,h.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(h.iridescenceMap.value=b.iridescenceMap,e(b.iridescenceMap,h.iridescenceMapTransform)),b.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=b.iridescenceThicknessMap,e(b.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),b.transmission>0&&(h.transmission.value=b.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),b.transmissionMap&&(h.transmissionMap.value=b.transmissionMap,e(b.transmissionMap,h.transmissionMapTransform)),h.thickness.value=b.thickness,b.thicknessMap&&(h.thicknessMap.value=b.thicknessMap,e(b.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=b.attenuationDistance,h.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(h.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(h.anisotropyMap.value=b.anisotropyMap,e(b.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=b.specularIntensity,h.specularColor.value.copy(b.specularColor),b.specularColorMap&&(h.specularColorMap.value=b.specularColorMap,e(b.specularColorMap,h.specularColorMapTransform)),b.specularIntensityMap&&(h.specularIntensityMap.value=b.specularIntensityMap,e(b.specularIntensityMap,h.specularIntensityMapTransform))}function y(h,b){b.matcap&&(h.matcap.value=b.matcap)}function m(h,b){let E=t.get(b).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function a9(i,t,e,n){let o={},r={},a=[],p=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function s(E,T){let g=T.program;n.uniformBlockBinding(E,g)}function u(E,T){let g=o[E.id];g===void 0&&(y(E),g=f(E),o[E.id]=g,E.addEventListener("dispose",h));let x=T.program;n.updateUBOMapping(E,x);let U=t.render.frame;r[E.id]!==U&&(c(E),r[E.id]=U)}function f(E){let T=l();E.__bindingPointIndex=T;let g=i.createBuffer(),x=E.__size,U=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,x,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,g),g}function l(){for(let E=0;E<p;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(E){let T=o[E.id],g=E.uniforms,x=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let U=0,V=g.length;U<V;U++){let O=Array.isArray(g[U])?g[U]:[g[U]];for(let P=0,L=O.length;P<L;P++){let D=O[P];if(d(D,U,P,x)===!0){let I=D.__offset,H=Array.isArray(D.value)?D.value:[D.value],N=0;for(let Y=0;Y<H.length;Y++){let J=H[Y],Q=m(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,I+N,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,T,g,x){let U=E.value,V=T+"_"+g;if(x[V]===void 0)return typeof U=="number"||typeof U=="boolean"?x[V]=U:x[V]=U.clone(),!0;{let O=x[V];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return x[V]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function y(E){let T=E.uniforms,g=0,x=16;for(let V=0,O=T.length;V<O;V++){let P=Array.isArray(T[V])?T[V]:[T[V]];for(let L=0,D=P.length;L<D;L++){let I=P[L],H=Array.isArray(I.value)?I.value:[I.value];for(let N=0,Y=H.length;N<Y;N++){let J=H[N],Q=m(J),F=g%x,G=F%Q.boundary,ft=F+G;g+=G,ft!==0&&x-ft<Q.storage&&(g+=x-ft),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=g,g+=Q.storage}}}let U=g%x;return U>0&&(g+=x-U),E.__size=g,E.__cache={},this}function m(E){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function h(E){let T=E.target;T.removeEventListener("dispose",h);let g=a.indexOf(T.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(o[T.id]),delete o[T.id],delete r[T.id]}function b(){for(let E in o)i.deleteBuffer(o[E]);a=[],o={},r={}}return{bind:s,update:u,dispose:b}}var If=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:o=!0,stencil:r=!1,alpha:a=!1,antialias:p=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let y=new Uint32Array(4),m=new Int32Array(4),h=null,b=null,E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wo,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,x=!1;this._outputColorSpace=Ve;let U=0,V=0,O=null,P=-1,L=null,D=new ue,I=new ue,H=null,N=new Tt(0),Y=0,J=e.width,Q=e.height,F=1,G=null,ft=null,yt=new ue(0,0,J,Q),$t=new ue(0,0,J,Q),re=!1,te=new ra,ee=!1,q=!1,tt=new _t,dt=new v,Vt=new ue,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Te(){return O===null?F:1}let M=n;function ae(C,_){return e.getContext(C,_)}try{let C={alpha:!0,depth:o,stencil:r,antialias:p,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),M===null){let _="webgl2";if(M=ae(_,C),M===null)throw ae(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let At,Mt,lt,pe,Pt,Qt,ke,Pe,R,w,B,W,nt,j,Ct,st,wt,vt,at,mt,Ht,Rt,ht,Nt;function A(){At=new P6(M),At.init(),Rt=new e9(M,At),Mt=new m6(M,At,t,Rt),lt=new KT(M,At),Mt.reversedDepthBuffer&&c&&lt.buffers.depth.setReversed(!0),pe=new C6(M),Pt=new BT,Qt=new t9(M,At,lt,Pt,Mt,Rt,pe),ke=new T6(g),Pe=new w6(g),R=new M4(M),ht=new b6(M,R),w=new L6(M,R,pe,ht),B=new O6(M,w,R,pe),at=new x6(M,Mt,Qt),st=new g6(Pt),W=new HT(g,ke,Pe,At,Mt,ht,st),nt=new r9(g,Pt),j=new NT,Ct=new ZT(At),vt=new d6(g,ke,Pe,lt,B,d,s),wt=new WT(g,B,Mt),Nt=new a9(M,pe,Mt,lt),mt=new y6(M,At,pe),Ht=new U6(M,At,pe),pe.programs=W.programs,g.capabilities=Mt,g.extensions=At,g.properties=Pt,g.renderLists=j,g.shadowMap=wt,g.state=lt,g.info=pe}A();let it=new mc(g,M);this.xr=it,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let C=At.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=At.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(J,Q,!1))},this.getSize=function(C){return C.set(J,Q)},this.setSize=function(C,_,X=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,Q=_,e.width=Math.floor(C*F),e.height=Math.floor(_*F),X===!0&&(e.style.width=C+"px",e.style.height=_+"px"),this.setViewport(0,0,C,_)},this.getDrawingBufferSize=function(C){return C.set(J*F,Q*F).floor()},this.setDrawingBufferSize=function(C,_,X){J=C,Q=_,F=X,e.width=Math.floor(C*X),e.height=Math.floor(_*X),this.setViewport(0,0,C,_)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,_,X,z){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,_,X,z),lt.viewport(D.copy(yt).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy($t)},this.setScissor=function(C,_,X,z){C.isVector4?$t.set(C.x,C.y,C.z,C.w):$t.set(C,_,X,z),lt.scissor(I.copy($t).multiplyScalar(F).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){lt.setScissorTest(re=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(C=!0,_=!0,X=!0){let z=0;if(C){let $=!1;if(O!==null){let pt=O.texture.format;$=pt===qu||pt===Wu||pt===Gu}if($){let pt=O.texture.type,gt=pt===kn||pt===mi||pt===ma||pt===gi||pt===ju||pt===Zu,xt=vt.getClearColor(),St=vt.getClearAlpha(),Ft=xt.r,Xt=xt.g,It=xt.b;gt?(y[0]=Ft,y[1]=Xt,y[2]=It,y[3]=St,M.clearBufferuiv(M.COLOR,0,y)):(m[0]=Ft,m[1]=Xt,m[2]=It,m[3]=St,M.clearBufferiv(M.COLOR,0,m))}else z|=M.COLOR_BUFFER_BIT}_&&(z|=M.DEPTH_BUFFER_BIT),X&&(z|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),vt.dispose(),j.dispose(),Ct.dispose(),Pt.dispose(),ke.dispose(),Pe.dispose(),B.dispose(),ht.dispose(),Nt.dispose(),W.dispose(),it.dispose(),it.removeEventListener("sessionstart",co),it.removeEventListener("sessionend",_0),Oi.stop()};function ut(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let C=pe.autoReset,_=wt.enabled,X=wt.autoUpdate,z=wt.needsUpdate,$=wt.type;A(),pe.autoReset=C,wt.enabled=_,wt.autoUpdate=X,wt.needsUpdate=z,wt.type=$}function rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){let _=C.target;_.removeEventListener("dispose",et),Ot(_)}function Ot(C){Zt(C),Pt.remove(C)}function Zt(C){let _=Pt.get(C).programs;_!==void 0&&(_.forEach(function(X){W.releaseProgram(X)}),C.isShaderMaterial&&W.releaseShaderCache(C))}this.renderBufferDirect=function(C,_,X,z,$,pt){_===null&&(_=Et);let gt=$.isMesh&&$.matrixWorld.determinant()<0,xt=Py(C,_,X,z,$);lt.setMaterial(z,gt);let St=X.index,Ft=1;if(z.wireframe===!0){if(St=w.getWireframeAttribute(X),St===void 0)return;Ft=2}let Xt=X.drawRange,It=X.attributes.position,ie=Xt.start*Ft,me=(Xt.start+Xt.count)*Ft;pt!==null&&(ie=Math.max(ie,pt.start*Ft),me=Math.min(me,(pt.start+pt.count)*Ft)),St!==null?(ie=Math.max(ie,0),me=Math.min(me,St.count)):It!=null&&(ie=Math.max(ie,0),me=Math.min(me,It.count));let He=me-ie;if(He<0||He===1/0)return;ht.setup($,z,xt,X,St);let Le,Ee=mt;if(St!==null&&(Le=R.get(St),Ee=Ht,Ee.setIndex(Le)),$.isMesh)z.wireframe===!0?(lt.setLineWidth(z.wireframeLinewidth*Te()),Ee.setMode(M.LINES)):Ee.setMode(M.TRIANGLES);else if($.isLine){let kt=z.linewidth;kt===void 0&&(kt=1),lt.setLineWidth(kt*Te()),$.isLineSegments?Ee.setMode(M.LINES):$.isLineLoop?Ee.setMode(M.LINE_LOOP):Ee.setMode(M.LINE_STRIP)}else $.isPoints?Ee.setMode(M.POINTS):$.isSprite&&Ee.setMode(M.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Ee.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let kt=$._multiDrawStarts,Re=$._multiDrawCounts,se=$._multiDrawCount,Rn=St?R.get(St).bytesPerElement:1,Vr=Pt.get(z).currentProgram.getUniforms();for(let Dn=0;Dn<se;Dn++)Vr.setValue(M,"_gl_DrawID",Dn),Ee.render(kt[Dn]/Rn,Re[Dn])}else if($.isInstancedMesh)Ee.renderInstances(ie,He,$.count);else if(X.isInstancedBufferGeometry){let kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,kt);Ee.renderInstances(ie,He,Re)}else Ee.render(ie,He)};function Se(C,_,X){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=yn,C.needsUpdate=!0,hs(C,_,X),C.side=po,C.needsUpdate=!0,hs(C,_,X),C.side=fn):hs(C,_,X)}this.compile=function(C,_,X=null){X===null&&(X=C),b=Ct.get(X),b.init(_),T.push(b),X.traverseVisible(function($){$.isLight&&$.layers.test(_.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),C!==X&&C.traverseVisible(function($){$.isLight&&$.layers.test(_.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights();let z=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let pt=$.material;if(pt)if(Array.isArray(pt))for(let gt=0;gt<pt.length;gt++){let xt=pt[gt];Se(xt,X,$),z.add(xt)}else Se(pt,X,$),z.add(pt)}),b=T.pop(),z},this.compileAsync=function(C,_,X=null){let z=this.compile(C,_,X);return new Promise($=>{function pt(){if(z.forEach(function(gt){Pt.get(gt).currentProgram.isReady()&&z.delete(gt)}),z.size===0){$(C);return}setTimeout(pt,10)}At.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let he=null;function Ao(C){he&&he(C)}function co(){Oi.stop()}function _0(){Oi.start()}let Oi=new Kd;Oi.setAnimationLoop(Ao),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){he=C,it.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},it.addEventListener("sessionstart",co),it.addEventListener("sessionend",_0),this.render=function(C,_){if(_!==void 0&&_.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(_),_=it.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,_,O),b=Ct.get(C,T.length),b.init(_),T.push(b),tt.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),te.setFromProjectionMatrix(tt,ao,_.reversedDepth),q=this.localClippingEnabled,ee=st.init(this.clippingPlanes,q),h=j.get(C,E.length),h.init(),E.push(h),it.enabled===!0&&it.isPresenting===!0){let pt=g.xr.getDepthSensingMesh();pt!==null&&Al(pt,_,-1/0,g.sortObjects)}Al(C,_,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(G,ft),Wt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Wt&&vt.addToRenderList(h,C),this.info.render.frame++,ee===!0&&st.beginShadows();let X=b.state.shadowsArray;wt.render(X,C,_),ee===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=h.opaque,$=h.transmissive;if(b.setupLights(),_.isArrayCamera){let pt=_.cameras;if($.length>0)for(let gt=0,xt=pt.length;gt<xt;gt++){let St=pt[gt];k0(z,$,C,St)}Wt&&vt.render(C);for(let gt=0,xt=pt.length;gt<xt;gt++){let St=pt[gt];$0(h,C,St,St.viewport)}}else $.length>0&&k0(z,$,C,_),Wt&&vt.render(C),$0(h,C,_);O!==null&&V===0&&(Qt.updateMultisampleRenderTarget(O),Qt.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(g,C,_),ht.resetDefaultState(),P=-1,L=null,T.pop(),T.length>0?(b=T[T.length-1],ee===!0&&st.setGlobalState(g.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?h=E[E.length-1]:h=null};function Al(C,_,X,z){if(C.visible===!1)return;if(C.layers.test(_.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(_);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){z&&Vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);let gt=B.update(C),xt=C.material;xt.visible&&h.push(C,gt,xt,X,Vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){let gt=B.update(C),xt=C.material;if(z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Vt.copy(C.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Vt.copy(gt.boundingSphere.center)),Vt.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(xt)){let St=gt.groups;for(let Ft=0,Xt=St.length;Ft<Xt;Ft++){let It=St[Ft],ie=xt[It.materialIndex];ie&&ie.visible&&h.push(C,gt,ie,X,Vt.z,It)}}else xt.visible&&h.push(C,gt,xt,X,Vt.z,null)}}let pt=C.children;for(let gt=0,xt=pt.length;gt<xt;gt++)Al(pt[gt],_,X,z)}function $0(C,_,X,z){let $=C.opaque,pt=C.transmissive,gt=C.transparent;b.setupLightsView(X),ee===!0&&st.setGlobalState(g.clippingPlanes,X),z&&lt.viewport(D.copy(z)),$.length>0&&cs($,_,X),pt.length>0&&cs(pt,_,X),gt.length>0&&cs(gt,_,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function k0(C,_,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[z.id]===void 0&&(b.state.transmissionRenderTarget[z.id]=new on(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Hn:kn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let pt=b.state.transmissionRenderTarget[z.id],gt=z.viewport||D;pt.setSize(gt.z*g.transmissionResolutionScale,gt.w*g.transmissionResolutionScale);let xt=g.getRenderTarget(),St=g.getActiveCubeFace(),Ft=g.getActiveMipmapLevel();g.setRenderTarget(pt),g.getClearColor(N),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear(),Wt&&vt.render(X);let Xt=g.toneMapping;g.toneMapping=Wo;let It=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),ee===!0&&st.setGlobalState(g.clippingPlanes,z),cs(C,X,z),Qt.updateMultisampleRenderTarget(pt),Qt.updateRenderTargetMipmap(pt),At.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let me=0,He=_.length;me<He;me++){let Le=_[me],Ee=Le.object,kt=Le.geometry,Re=Le.material,se=Le.group;if(Re.side===fn&&Ee.layers.test(z.layers)){let Rn=Re.side;Re.side=yn,Re.needsUpdate=!0,H0(Ee,X,z,kt,Re,se),Re.side=Rn,Re.needsUpdate=!0,ie=!0}}ie===!0&&(Qt.updateMultisampleRenderTarget(pt),Qt.updateRenderTargetMipmap(pt))}g.setRenderTarget(xt,St,Ft),g.setClearColor(N,Y),It!==void 0&&(z.viewport=It),g.toneMapping=Xt}function cs(C,_,X){let z=_.isScene===!0?_.overrideMaterial:null;for(let $=0,pt=C.length;$<pt;$++){let gt=C[$],xt=gt.object,St=gt.geometry,Ft=gt.group,Xt=gt.material;Xt.allowOverride===!0&&z!==null&&(Xt=z),xt.layers.test(X.layers)&&H0(xt,_,X,St,Xt,Ft)}}function H0(C,_,X,z,$,pt){C.onBeforeRender(g,_,X,z,$,pt),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(g,_,X,z,C,pt),$.transparent===!0&&$.side===fn&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,g.renderBufferDirect(X,_,z,$,C,pt),$.side=po,$.needsUpdate=!0,g.renderBufferDirect(X,_,z,$,C,pt),$.side=fn):g.renderBufferDirect(X,_,z,$,C,pt),C.onAfterRender(g,_,X,z,$,pt)}function hs(C,_,X){_.isScene!==!0&&(_=Et);let z=Pt.get(C),$=b.state.lights,pt=b.state.shadowsArray,gt=$.state.version,xt=W.getParameters(C,$.state,pt,_,X),St=W.getProgramCacheKey(xt),Ft=z.programs;z.environment=C.isMeshStandardMaterial?_.environment:null,z.fog=_.fog,z.envMap=(C.isMeshStandardMaterial?Pe:ke).get(C.envMap||z.environment),z.envMapRotation=z.environment!==null&&C.envMap===null?_.environmentRotation:C.envMapRotation,Ft===void 0&&(C.addEventListener("dispose",et),Ft=new Map,z.programs=Ft);let Xt=Ft.get(St);if(Xt!==void 0){if(z.currentProgram===Xt&&z.lightsStateVersion===gt)return F0(C,xt),Xt}else xt.uniforms=W.getUniforms(C),C.onBeforeCompile(xt,g),Xt=W.acquireProgram(xt,St),Ft.set(St,Xt),z.uniforms=xt.uniforms;let It=z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=st.uniform),F0(C,xt),z.needsLights=Uy(C),z.lightsStateVersion=gt,z.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.directionalShadowMap.value=$.state.directionalShadowMap,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotShadowMap.value=$.state.spotShadowMap,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMap.value=$.state.pointShadowMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix),z.currentProgram=Xt,z.uniformsList=null,Xt}function B0(C){if(C.uniformsList===null){let _=C.currentProgram.getUniforms();C.uniformsList=Va.seqWithValue(_.seq,C.uniforms)}return C.uniformsList}function F0(C,_){let X=Pt.get(C);X.outputColorSpace=_.outputColorSpace,X.batching=_.batching,X.batchingColor=_.batchingColor,X.instancing=_.instancing,X.instancingColor=_.instancingColor,X.instancingMorph=_.instancingMorph,X.skinning=_.skinning,X.morphTargets=_.morphTargets,X.morphNormals=_.morphNormals,X.morphColors=_.morphColors,X.morphTargetsCount=_.morphTargetsCount,X.numClippingPlanes=_.numClippingPlanes,X.numIntersection=_.numClipIntersection,X.vertexAlphas=_.vertexAlphas,X.vertexTangents=_.vertexTangents,X.toneMapping=_.toneMapping}function Py(C,_,X,z,$){_.isScene!==!0&&(_=Et),Qt.resetTextureUnits();let pt=_.fog,gt=z.isMeshStandardMaterial?_.environment:null,xt=O===null?g.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nn,St=(z.isMeshStandardMaterial?Pe:ke).get(z.envMap||gt),Ft=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,me=!!X.morphAttributes.color,He=Wo;z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(He=g.toneMapping);let Le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=Le!==void 0?Le.length:0,kt=Pt.get(z),Re=b.state.lights;if(ee===!0&&(q===!0||C!==L)){let hn=C===L&&z.id===P;st.setState(z,C,hn)}let se=!1;z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Re.state.version||kt.outputColorSpace!==xt||$.isBatchedMesh&&kt.batching===!1||!$.isBatchedMesh&&kt.batching===!0||$.isBatchedMesh&&kt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&kt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||$.isInstancedMesh&&kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&kt.instancingMorph===!1&&$.morphTexture!==null||kt.envMap!==St||z.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==st.numPlanes||kt.numIntersection!==st.numIntersection)||kt.vertexAlphas!==Ft||kt.vertexTangents!==Xt||kt.morphTargets!==It||kt.morphNormals!==ie||kt.morphColors!==me||kt.toneMapping!==He||kt.morphTargetsCount!==Ee)&&(se=!0):(se=!0,kt.__version=z.version);let Rn=kt.currentProgram;se===!0&&(Rn=hs(z,_,$));let Vr=!1,Dn=!1,va=!1,De=Rn.getUniforms(),Fn=kt.uniforms;if(lt.useProgram(Rn.program)&&(Vr=!0,Dn=!0,va=!0),z.id!==P&&(P=z.id,Dn=!0),Vr||L!==C){lt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),De.setValue(M,"projectionMatrix",C.projectionMatrix),De.setValue(M,"viewMatrix",C.matrixWorldInverse);let En=De.map.cameraPosition;En!==void 0&&En.setValue(M,dt.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&De.setValue(M,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&De.setValue(M,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,Dn=!0,va=!0)}if($.isSkinnedMesh){De.setOptional(M,$,"bindMatrix"),De.setOptional(M,$,"bindMatrixInverse");let hn=$.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),De.setValue(M,"boneTexture",hn.boneTexture,Qt))}$.isBatchedMesh&&(De.setOptional(M,$,"batchingTexture"),De.setValue(M,"batchingTexture",$._matricesTexture,Qt),De.setOptional(M,$,"batchingIdTexture"),De.setValue(M,"batchingIdTexture",$._indirectTexture,Qt),De.setOptional(M,$,"batchingColorTexture"),$._colorsTexture!==null&&De.setValue(M,"batchingColorTexture",$._colorsTexture,Qt));let Nn=X.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&at.update($,X,Rn),(Dn||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,De.setValue(M,"receiveShadow",$.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Fn.envMap.value=St,Fn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&_.environment!==null&&(Fn.envMapIntensity.value=_.environmentIntensity),Dn&&(De.setValue(M,"toneMappingExposure",g.toneMappingExposure),kt.needsLights&&Ly(Fn,va),pt&&z.fog===!0&&nt.refreshFogUniforms(Fn,pt),nt.refreshMaterialUniforms(Fn,z,F,Q,b.state.transmissionRenderTarget[C.id]),Va.upload(M,B0(kt),Fn,Qt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Va.upload(M,B0(kt),Fn,Qt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&De.setValue(M,"center",$.center),De.setValue(M,"modelViewMatrix",$.modelViewMatrix),De.setValue(M,"normalMatrix",$.normalMatrix),De.setValue(M,"modelMatrix",$.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let hn=z.uniformsGroups;for(let En=0,Il=hn.length;En<Il;En++){let vi=hn[En];Nt.update(vi,Rn),Nt.bind(vi,Rn)}}return Rn}function Ly(C,_){C.ambientLightColor.needsUpdate=_,C.lightProbe.needsUpdate=_,C.directionalLights.needsUpdate=_,C.directionalLightShadows.needsUpdate=_,C.pointLights.needsUpdate=_,C.pointLightShadows.needsUpdate=_,C.spotLights.needsUpdate=_,C.spotLightShadows.needsUpdate=_,C.rectAreaLights.needsUpdate=_,C.hemisphereLights.needsUpdate=_}function Uy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,_,X){let z=Pt.get(C);z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Pt.get(C.texture).__webglTexture=_,Pt.get(C.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,_){let X=Pt.get(C);X.__webglFramebuffer=_,X.__useDefaultFramebuffer=_===void 0};let Cy=M.createFramebuffer();this.setRenderTarget=function(C,_=0,X=0){O=C,U=_,V=X;let z=!0,$=null,pt=!1,gt=!1;if(C){let St=Pt.get(C);if(St.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(M.FRAMEBUFFER,null),z=!1;else if(St.__webglFramebuffer===void 0)Qt.setupRenderTarget(C);else if(St.__hasExternalTextures)Qt.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let It=C.depthTexture;if(St.__boundDepthTexture!==It){if(It!==null&&Pt.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(C)}}let Ft=C.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(gt=!0);let Xt=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[_])?$=Xt[_][X]:$=Xt[_],pt=!0):C.samples>0&&Qt.useMultisampledRTT(C)===!1?$=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[X]:$=Xt,D.copy(C.viewport),I.copy(C.scissor),H=C.scissorTest}else D.copy(yt).multiplyScalar(F).floor(),I.copy($t).multiplyScalar(F).floor(),H=re;if(X!==0&&($=Cy),lt.bindFramebuffer(M.FRAMEBUFFER,$)&&z&&lt.drawBuffers(C,$),lt.viewport(D),lt.scissor(I),lt.setScissorTest(H),pt){let St=Pt.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+_,St.__webglTexture,X)}else if(gt){let St=_;for(let Ft=0;Ft<C.textures.length;Ft++){let Xt=Pt.get(C.textures[Ft]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ft,Xt.__webglTexture,X,St)}}else if(C!==null&&X!==0){let St=Pt.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,St.__webglTexture,X)}P=-1},this.readRenderTargetPixels=function(C,_,X,z,$,pt,gt,xt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){lt.bindFramebuffer(M.FRAMEBUFFER,St);try{let Ft=C.textures[xt],Xt=Ft.format,It=Ft.type;if(!Mt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=C.width-z&&X>=0&&X<=C.height-$&&(C.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+xt),M.readPixels(_,X,z,$,Rt.convert(Xt),Rt.convert(It),pt))}finally{let Ft=O!==null?Pt.get(O).__webglFramebuffer:null;lt.bindFramebuffer(M.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,_,X,z,$,pt,gt,xt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St)if(_>=0&&_<=C.width-z&&X>=0&&X<=C.height-$){lt.bindFramebuffer(M.FRAMEBUFFER,St);let Ft=C.textures[xt],Xt=Ft.format,It=Ft.type;if(!Mt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,ie),M.bufferData(M.PIXEL_PACK_BUFFER,pt.byteLength,M.STREAM_READ),C.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+xt),M.readPixels(_,X,z,$,Rt.convert(Xt),Rt.convert(It),0);let me=O!==null?Pt.get(O).__webglFramebuffer:null;lt.bindFramebuffer(M.FRAMEBUFFER,me);let He=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Ed(M,He,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,ie),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,pt),M.deleteBuffer(ie),M.deleteSync(He),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,_=null,X=0){let z=Math.pow(2,-X),$=Math.floor(C.image.width*z),pt=Math.floor(C.image.height*z),gt=_!==null?_.x:0,xt=_!==null?_.y:0;Qt.setTexture2D(C,0),M.copyTexSubImage2D(M.TEXTURE_2D,X,0,0,gt,xt,$,pt),lt.unbindTexture()};let xy=M.createFramebuffer(),Oy=M.createFramebuffer();this.copyTextureToTexture=function(C,_,X=null,z=null,$=0,pt=null){pt===null&&($!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=$,$=0):pt=0);let gt,xt,St,Ft,Xt,It,ie,me,He,Le=C.isCompressedTexture?C.mipmaps[pt]:C.image;if(X!==null)gt=X.max.x-X.min.x,xt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,Xt=X.min.y,It=X.isBox3?X.min.z:0;else{let Nn=Math.pow(2,-$);gt=Math.floor(Le.width*Nn),xt=Math.floor(Le.height*Nn),C.isDataArrayTexture?St=Le.depth:C.isData3DTexture?St=Math.floor(Le.depth*Nn):St=1,Ft=0,Xt=0,It=0}z!==null?(ie=z.x,me=z.y,He=z.z):(ie=0,me=0,He=0);let Ee=Rt.convert(_.format),kt=Rt.convert(_.type),Re;_.isData3DTexture?(Qt.setTexture3D(_,0),Re=M.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(Qt.setTexture2DArray(_,0),Re=M.TEXTURE_2D_ARRAY):(Qt.setTexture2D(_,0),Re=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,_.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,_.unpackAlignment);let se=M.getParameter(M.UNPACK_ROW_LENGTH),Rn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Vr=M.getParameter(M.UNPACK_SKIP_PIXELS),Dn=M.getParameter(M.UNPACK_SKIP_ROWS),va=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Le.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Le.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ft),M.pixelStorei(M.UNPACK_SKIP_ROWS,Xt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,It);let De=C.isDataArrayTexture||C.isData3DTexture,Fn=_.isDataArrayTexture||_.isData3DTexture;if(C.isDepthTexture){let Nn=Pt.get(C),hn=Pt.get(_),En=Pt.get(Nn.__renderTarget),Il=Pt.get(hn.__renderTarget);lt.bindFramebuffer(M.READ_FRAMEBUFFER,En.__webglFramebuffer),lt.bindFramebuffer(M.DRAW_FRAMEBUFFER,Il.__webglFramebuffer);for(let vi=0;vi<St;vi++)De&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Pt.get(C).__webglTexture,$,It+vi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Pt.get(_).__webglTexture,pt,He+vi)),M.blitFramebuffer(Ft,Xt,gt,xt,ie,me,gt,xt,M.DEPTH_BUFFER_BIT,M.NEAREST);lt.bindFramebuffer(M.READ_FRAMEBUFFER,null),lt.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Pt.has(C)){let Nn=Pt.get(C),hn=Pt.get(_);lt.bindFramebuffer(M.READ_FRAMEBUFFER,xy),lt.bindFramebuffer(M.DRAW_FRAMEBUFFER,Oy);for(let En=0;En<St;En++)De?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Nn.__webglTexture,$,It+En):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Nn.__webglTexture,$),Fn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,hn.__webglTexture,pt,He+En):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,hn.__webglTexture,pt),$!==0?M.blitFramebuffer(Ft,Xt,gt,xt,ie,me,gt,xt,M.COLOR_BUFFER_BIT,M.NEAREST):Fn?M.copyTexSubImage3D(Re,pt,ie,me,He+En,Ft,Xt,gt,xt):M.copyTexSubImage2D(Re,pt,ie,me,Ft,Xt,gt,xt);lt.bindFramebuffer(M.READ_FRAMEBUFFER,null),lt.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Fn?C.isDataTexture||C.isData3DTexture?M.texSubImage3D(Re,pt,ie,me,He,gt,xt,St,Ee,kt,Le.data):_.isCompressedArrayTexture?M.compressedTexSubImage3D(Re,pt,ie,me,He,gt,xt,St,Ee,Le.data):M.texSubImage3D(Re,pt,ie,me,He,gt,xt,St,Ee,kt,Le):C.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,pt,ie,me,gt,xt,Ee,kt,Le.data):C.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,pt,ie,me,Le.width,Le.height,Ee,Le.data):M.texSubImage2D(M.TEXTURE_2D,pt,ie,me,gt,xt,Ee,kt,Le);M.pixelStorei(M.UNPACK_ROW_LENGTH,se),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Rn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Vr),M.pixelStorei(M.UNPACK_SKIP_ROWS,Dn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,va),pt===0&&_.generateMipmaps&&M.generateMipmap(Re),lt.unbindTexture()},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&Qt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Qt.setTextureCube(C,0):C.isData3DTexture?Qt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Qt.setTexture2DArray(C,0):Qt.setTexture2D(C,0),lt.unbindTexture()},this.resetState=function(){U=0,V=0,O=null,lt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ao}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};function ib(i){let t=new Map,e=new Map,n=i.clone();return rb(i,n,function(o,r){t.set(r,o),e.set(o,r)}),n.traverse(function(o){if(!o.isSkinnedMesh)return;let r=o,a=t.get(o),p=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=p.map(function(s){return e.get(s)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rb(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)rb(i.children[n],t.children[n],e)}function Tc(i,t){if(t===Z2)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===ga||t===Hp){let e=i.getIndex();if(e===null){let a=[],p=i.getAttribute("position");if(p!==void 0){for(let s=0;s<p.count;s++)a.push(s);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,o=[];if(t===ga)for(let a=1;a<=n;a++)o.push(e.getX(0)),o.push(e.getX(a)),o.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(o.push(e.getX(a)),o.push(e.getX(a+1)),o.push(e.getX(a+2))):(o.push(e.getX(a+2)),o.push(e.getX(a+1)),o.push(e.getX(a)));o.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(o),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var $f=class extends wo{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Uc(e)}),this.register(function(e){return new Cc(e)}),this.register(function(e){return new _c(e)}),this.register(function(e){return new $c(e)}),this.register(function(e){return new kc(e)}),this.register(function(e){return new Oc(e)}),this.register(function(e){return new vc(e)}),this.register(function(e){return new Rc(e)}),this.register(function(e){return new Dc(e)}),this.register(function(e){return new Lc(e)}),this.register(function(e){return new Mc(e)}),this.register(function(e){return new xc(e)}),this.register(function(e){return new Ic(e)}),this.register(function(e){return new Ac(e)}),this.register(function(e){return new wc(e)}),this.register(function(e){return new Hc(e)}),this.register(function(e){return new Bc(e)})}load(t,e,n,o){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=Go.extractUrlBase(t);a=Go.resolveURL(u,this.path)}else a=Go.extractUrlBase(t);this.manager.itemStart(t);let p=function(u){o?o(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},s=new da(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(u){try{r.parse(u,a,function(f){e(f),r.manager.itemEnd(t)},p)}catch(f){p(f)}},n,p)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,o){let r,a={},p={},s=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(s.decode(new Uint8Array(t,0,4))===fb){try{a[oe.KHR_BINARY_GLTF]=new Fc(t)}catch(l){o&&o(l);return}r=JSON.parse(a[oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(s.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Zc(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let l=this.pluginCallbacks[f](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),p[l.name]=l,a[l.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let l=r.extensionsUsed[f],c=r.extensionsRequired||[];switch(l){case oe.KHR_MATERIALS_UNLIT:a[l]=new Pc;break;case oe.KHR_DRACO_MESH_COMPRESSION:a[l]=new Nc(r,this.dracoLoader);break;case oe.KHR_TEXTURE_TRANSFORM:a[l]=new Xc;break;case oe.KHR_MESH_QUANTIZATION:a[l]=new Jc;break;default:c.indexOf(l)>=0&&p[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(p),u.parse(n,o)}parseAsync(t,e){let n=this;return new Promise(function(o,r){n.parse(t,e,o,r)})}};function s9(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wc=class{constructor(t){this.parser=t,this.name=oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,o=e.length;n<o;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,o=e.cache.get(n);if(o)return o;let r=e.json,s=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],u,f=new Tt(16777215);s.color!==void 0&&f.setRGB(s.color[0],s.color[1],s.color[2],nn);let l=s.range!==void 0?s.range:0;switch(s.type){case"directional":u=new nr(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Up(f),u.distance=l;break;case"spot":u=new Lp(f),u.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,u.angle=s.spot.outerConeAngle,u.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return u.position.set(0,0,0),Co(u,s),s.intensity!==void 0&&(u.intensity=s.intensity),u.name=e.createUniqueName(s.name||"light_"+t),o=Promise.resolve(u),e.cache.add(n,o),o}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],p=(r.extensions&&r.extensions[this.name]||{}).light;return p===void 0?null:this._loadLight(p).then(function(s){return n._getNodeRef(e.cache,p,s)})}},Pc=class{constructor(){this.name=oe.KHR_MATERIALS_UNLIT}getMaterialType(){return ne}extendParams(t,e,n){let o=[];t.color=new Tt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],nn),t.opacity=a[3]}r.baseColorTexture!==void 0&&o.push(n.assignTexture(t,"map",r.baseColorTexture,Ve))}return Promise.all(o)}},Lc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Uc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let p=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ot(p,p)}return Promise.all(r)}},Cc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},xc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Oc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=o.extensions[this.name];if(a.sheenColorFactor!==void 0){let p=a.sheenColorFactor;e.sheenColor.setRGB(p[0],p[1],p[2],nn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ve)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},vc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Rc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let p=a.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(p[0],p[1],p[2],nn),Promise.all(r)}},Dc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mc=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let p=a.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(p[0],p[1],p[2],nn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ve)),Promise.all(r)}},Ac=class{constructor(t){this.parser=t,this.name=oe.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ic=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},_c=class{constructor(t){this.parser=t,this.name=oe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,o=n.textures[t];if(!o.extensions||!o.extensions[this.name])return null;let r=o.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},$c=class{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},kc=class{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},Hc=class{constructor(t){this.name=oe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let o=n.extensions[this.name],r=this.parser.getDependency("buffer",o.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(p){let s=o.byteOffset||0,u=o.byteLength||0,f=o.count,l=o.byteStride,c=new Uint8Array(p,s,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,l,c,o.mode,o.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(f*l);return a.decodeGltfBuffer(new Uint8Array(d),f,l,c,o.mode,o.filter),d})})}else return null}},Bc=class{constructor(t){this.name=oe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let o=e.meshes[n.mesh];for(let u of o.primitives)if(u.mode!==qn.TRIANGLES&&u.mode!==qn.TRIANGLE_STRIP&&u.mode!==qn.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,p=[],s={};for(let u in a)p.push(this.parser.getDependency("accessor",a[u]).then(f=>(s[u]=f,s[u])));return p.length<1?null:(p.push(this.parser.createNodeMesh(t)),Promise.all(p).then(u=>{let f=u.pop(),l=f.isGroup?f.children:[f],c=u[0].count,d=[];for(let y of l){let m=new _t,h=new v,b=new Je,E=new v(1,1,1),T=new Zn(y.geometry,y.material,c);for(let g=0;g<c;g++)s.TRANSLATION&&h.fromBufferAttribute(s.TRANSLATION,g),s.ROTATION&&b.fromBufferAttribute(s.ROTATION,g),s.SCALE&&E.fromBufferAttribute(s.SCALE,g),T.setMatrixAt(g,m.compose(h,b,E));for(let g in s)if(g==="_COLOR_0"){let x=s[g];T.instanceColor=new di(x.array,x.itemSize,x.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&y.geometry.setAttribute(g,s[g]);Oe.prototype.copy.call(T,y),this.parser.assignFinalMaterial(T),d.push(T)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}},fb="glTF",Fp=12,ab={JSON:1313821514,BIN:5130562},Fc=class{constructor(t){this.name=oe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Fp),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==fb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let o=this.header.length-Fp,r=new DataView(t,Fp),a=0;for(;a<o;){let p=r.getUint32(a,!0);a+=4;let s=r.getUint32(a,!0);if(a+=4,s===ab.JSON){let u=new Uint8Array(t,Fp+a,p);this.content=n.decode(u)}else if(s===ab.BIN){let u=Fp+a;this.body=t.slice(u,u+p)}a+=p}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nc=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=oe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,o=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,p={},s={},u={};for(let f in a){let l=Qc[f]||f.toLowerCase();p[l]=a[f]}for(let f in t.attributes){let l=Qc[f]||f.toLowerCase();if(a[f]!==void 0){let c=n.accessors[t.attributes[f]],d=wa[c.componentType];u[l]=d.name,s[l]=c.normalized===!0}}return e.getDependency("bufferView",r).then(function(f){return new Promise(function(l,c){o.decodeDracoFile(f,function(d){for(let y in d.attributes){let m=d.attributes[y],h=s[y];h!==void 0&&(m.normalized=h)}l(d)},p,u,nn,c)})})}},Xc=class{constructor(){this.name=oe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Jc=class{constructor(){this.name=oe.KHR_MESH_QUANTIZATION}},kf=class extends Qo{constructor(t,e,n,o){super(t,e,n,o)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o*3+o;for(let a=0;a!==o;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=p*2,u=p*3,f=o-e,l=(n-e)/f,c=l*l,d=c*l,y=t*u,m=y-u,h=-2*d+3*c,b=d-c,E=1-h,T=b-c+l;for(let g=0;g!==p;g++){let x=a[m+g+p],U=a[m+g+s]*f,V=a[y+g+p],O=a[y+g]*f;r[g]=E*x+T*U+h*V+b*O}return r}},u9=new Je,zc=class extends kf{interpolate_(t,e,n,o){let r=super.interpolate_(t,e,n,o);return u9.fromArray(r).normalize().toArray(r),r}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pb={9728:ze,9729:en,9984:zu,9985:ya,9986:ar,9987:Cn},sb={33071:mo,33648:Yr,10497:wn},Ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f9={CUBICSPLINE:void 0,LINEAR:zi,STEP:Ji},Vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function l9(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:po})),i.DefaultMaterial}function cr(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Co(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function c9(i,t,e){let n=!1,o=!1,r=!1;for(let u=0,f=t.length;u<f;u++){let l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(o=!0),l.COLOR_0!==void 0&&(r=!0),n&&o&&r)break}if(!n&&!o&&!r)return Promise.resolve(i);let a=[],p=[],s=[];for(let u=0,f=t.length;u<f;u++){let l=t[u];if(n){let c=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;a.push(c)}if(o){let c=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;p.push(c)}if(r){let c=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;s.push(c)}}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s)]).then(function(u){let f=u[0],l=u[1],c=u[2];return n&&(i.morphAttributes.position=f),o&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=c),i.morphTargetsRelative=!0,i})}function h9(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,o=e.length;n<o;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function d9(i){let t,e=i.extensions&&i.extensions[oe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Sc(e.attributes):t=i.indices+":"+Sc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,o=i.targets.length;n<o;n++)t+=":"+Sc(i.targets[n]);return t}function Sc(i){let t="",e=Object.keys(i).sort();for(let n=0,o=e.length;n<o;n++)t+=e[n]+":"+i[e[n]]+";";return t}function jc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b9(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var y9=new _t,Zc=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new s9,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,r=!1,a=-1;if(typeof navigator<"u"){let p=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(p)===!0;let s=p.match(/Version\/(\d+)/);o=n&&s?parseInt(s[1],10):-1,r=p.indexOf("Firefox")>-1,a=r?p.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&o<17||r&&a<98?this.textureLoader=new Po(this.options.manager):this.textureLoader=new Cp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,o=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let p={scene:a[0][o.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:o.asset,parser:n,userData:{}};return cr(r,p,o),Co(p,o),Promise.all(n._invokeAll(function(s){return s.afterRoot&&s.afterRoot(p)})).then(function(){for(let s of p.scenes)s.updateMatrixWorld();t(p)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let o=0,r=e.length;o<r;o++){let a=e[o].joints;for(let p=0,s=a.length;p<s;p++)t[a[p]].isBone=!0}for(let o=0,r=t.length;o<r;o++){let a=t[o];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let o=n.clone(),r=(a,p)=>{let s=this.associations.get(a);s!=null&&this.associations.set(p,s);for(let[u,f]of a.children.entries())r(f,p.children[u])};return r(n,o),o.name+="_instance_"+t.uses[e]++,o}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let o=t(e[n]);if(o)return o}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let o=0;o<e.length;o++){let r=t(e[o]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,o=this.cache.get(n);if(!o){switch(t){case"scene":o=this.loadScene(e);break;case"node":o=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":o=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":o=this.loadAccessor(e);break;case"bufferView":o=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":o=this.loadBuffer(e);break;case"material":o=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":o=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":o=this.loadSkin(e);break;case"animation":o=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":o=this.loadCamera(e);break;default:if(o=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!o)throw new Error("Unknown type: "+t);break}this.cache.add(n,o)}return o}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,o=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(o.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[oe.KHR_BINARY_GLTF].body);let o=this.options;return new Promise(function(r,a){n.load(Go.resolveURL(e.uri,o.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let o=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+o)})}loadAccessor(t){let e=this,n=this.json,o=this.json.accessors[t];if(o.bufferView===void 0&&o.sparse===void 0){let a=Ec[o.type],p=wa[o.componentType],s=o.normalized===!0,u=new p(o.count*a);return Promise.resolve(new _e(u,a,s))}let r=[];return o.bufferView!==void 0?r.push(this.getDependency("bufferView",o.bufferView)):r.push(null),o.sparse!==void 0&&(r.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(r).then(function(a){let p=a[0],s=Ec[o.type],u=wa[o.componentType],f=u.BYTES_PER_ELEMENT,l=f*s,c=o.byteOffset||0,d=o.bufferView!==void 0?n.bufferViews[o.bufferView].byteStride:void 0,y=o.normalized===!0,m,h;if(d&&d!==l){let b=Math.floor(c/d),E="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+b+":"+o.count,T=e.cache.get(E);T||(m=new u(p,b*d,o.count*d/f),T=new na(m,d/f),e.cache.add(E,T)),h=new oa(T,s,c%d/f,y)}else p===null?m=new u(o.count*s):m=new u(p,c,o.count*s),h=new _e(m,s,y);if(o.sparse!==void 0){let b=Ec.SCALAR,E=wa[o.sparse.indices.componentType],T=o.sparse.indices.byteOffset||0,g=o.sparse.values.byteOffset||0,x=new E(a[1],T,o.sparse.count*b),U=new u(a[2],g,o.sparse.count*s);p!==null&&(h=new _e(h.array.slice(),h.itemSize,h.normalized)),h.normalized=!1;for(let V=0,O=x.length;V<O;V++){let P=x[V];if(h.setX(P,U[V*s]),s>=2&&h.setY(P,U[V*s+1]),s>=3&&h.setZ(P,U[V*s+2]),s>=4&&h.setW(P,U[V*s+3]),s>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}h.normalized=y}return h})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],p=this.textureLoader;if(a.uri){let s=n.manager.getHandler(a.uri);s!==null&&(p=s)}return this.loadTextureImage(t,r,p)}loadTextureImage(t,e,n){let o=this,r=this.json,a=r.textures[t],p=r.images[e],s=(p.uri||p.bufferView)+":"+a.sampler;if(this.textureCache[s])return this.textureCache[s];let u=this.loadImageSource(e,n).then(function(f){f.flipY=!1,f.name=a.name||p.name||"",f.name===""&&typeof p.uri=="string"&&p.uri.startsWith("data:image/")===!1&&(f.name=p.uri);let c=(r.samplers||{})[a.sampler]||{};return f.magFilter=pb[c.magFilter]||en,f.minFilter=pb[c.minFilter]||Cn,f.wrapS=sb[c.wrapS]||wn,f.wrapT=sb[c.wrapT]||wn,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==ze&&f.minFilter!==en,o.associations.set(f,{textures:t}),f}).catch(function(){return null});return this.textureCache[s]=u,u}loadImageSource(t,e){let n=this,o=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());let a=o.images[t],p=self.URL||self.webkitURL,s=a.uri||"",u=!1;if(a.bufferView!==void 0)s=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;let c=new Blob([l],{type:a.mimeType});return s=p.createObjectURL(c),s});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let f=Promise.resolve(s).then(function(l){return new Promise(function(c,d){let y=c;e.isImageBitmapLoader===!0&&(y=function(m){let h=new je(m);h.needsUpdate=!0,c(h)}),e.load(Go.resolveURL(l,r.path),y,void 0,d)})}).then(function(l){return u===!0&&p.revokeObjectURL(s),Co(l,a),l.userData.mimeType=a.mimeType||b9(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),l});return this.sourceCache[t]=f,f}assignTexture(t,e,n,o){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[oe.KHR_TEXTURE_TRANSFORM]){let p=n.extensions!==void 0?n.extensions[oe.KHR_TEXTURE_TRANSFORM]:void 0;if(p){let s=r.associations.get(a);a=r.extensions[oe.KHR_TEXTURE_TRANSFORM].extendTexture(a,p),r.associations.set(a,s)}}return o!==void 0&&(a.colorSpace=o),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,o=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let p="PointsMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new pa,sn.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,s.sizeAttenuation=!1,this.cache.add(p,s)),n=s}else if(t.isLine){let p="LineBasicMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new aa,sn.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,this.cache.add(p,s)),n=s}if(o||r||a){let p="ClonedMaterial:"+n.uuid+":";o&&(p+="derivative-tangents:"),r&&(p+="vertex-colors:"),a&&(p+="flat-shading:");let s=this.cache.get(p);s||(s=n.clone(),r&&(s.vertexColors=!0),a&&(s.flatShading=!0),o&&(s.normalScale&&(s.normalScale.y*=-1),s.clearcoatNormalScale&&(s.clearcoatNormalScale.y*=-1)),this.cache.add(p,s),this.associations.set(s,this.associations.get(n))),n=s}t.material=n}getMaterialType(){return Ke}loadMaterial(t){let e=this,n=this.json,o=this.extensions,r=n.materials[t],a,p={},s=r.extensions||{},u=[];if(s[oe.KHR_MATERIALS_UNLIT]){let l=o[oe.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(p,r,e))}else{let l=r.pbrMetallicRoughness||{};if(p.color=new Tt(1,1,1),p.opacity=1,Array.isArray(l.baseColorFactor)){let c=l.baseColorFactor;p.color.setRGB(c[0],c[1],c[2],nn),p.opacity=c[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(p,"map",l.baseColorTexture,Ve)),p.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,p.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(p,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(p,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(t,p)})))}r.doubleSided===!0&&(p.side=fn);let f=r.alphaMode||Vc.OPAQUE;if(f===Vc.BLEND?(p.transparent=!0,p.depthWrite=!1):(p.transparent=!1,f===Vc.MASK&&(p.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ne&&(u.push(e.assignTexture(p,"normalMap",r.normalTexture)),p.normalScale=new ot(1,1),r.normalTexture.scale!==void 0)){let l=r.normalTexture.scale;p.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&a!==ne&&(u.push(e.assignTexture(p,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(p.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ne){let l=r.emissiveFactor;p.emissive=new Tt().setRGB(l[0],l[1],l[2],nn)}return r.emissiveTexture!==void 0&&a!==ne&&u.push(e.assignTexture(p,"emissiveMap",r.emissiveTexture,Ve)),Promise.all(u).then(function(){let l=new a(p);return r.name&&(l.name=r.name),Co(l,r),e.associations.set(l,{materials:t}),r.extensions&&cr(o,l,r),l})}createUniqueName(t){let e=ge.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,o=this.primitiveCache;function r(p){return n[oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(p,e).then(function(s){return ub(s,p,e)})}let a=[];for(let p=0,s=t.length;p<s;p++){let u=t[p],f=d9(u),l=o[f];if(l)a.push(l.promise);else{let c;u.extensions&&u.extensions[oe.KHR_DRACO_MESH_COMPRESSION]?c=r(u):c=ub(new le,u,e),o[f]={primitive:u,promise:c},a.push(c)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,o=this.extensions,r=n.meshes[t],a=r.primitives,p=[];for(let s=0,u=a.length;s<u;s++){let f=a[s].material===void 0?l9(this.cache):this.getDependency("material",a[s].material);p.push(f)}return p.push(e.loadGeometries(a)),Promise.all(p).then(function(s){let u=s.slice(0,s.length-1),f=s[s.length-1],l=[];for(let d=0,y=f.length;d<y;d++){let m=f[d],h=a[d],b,E=u[d];if(h.mode===qn.TRIANGLES||h.mode===qn.TRIANGLE_STRIP||h.mode===qn.TRIANGLE_FAN||h.mode===void 0)b=r.isSkinnedMesh===!0?new ap(m,E):new Bt(m,E),b.isSkinnedMesh===!0&&b.normalizeSkinWeights(),h.mode===qn.TRIANGLE_STRIP?b.geometry=Tc(b.geometry,Hp):h.mode===qn.TRIANGLE_FAN&&(b.geometry=Tc(b.geometry,ga));else if(h.mode===qn.LINES)b=new sp(m,E);else if(h.mode===qn.LINE_STRIP)b=new Zi(m,E);else if(h.mode===qn.LINE_LOOP)b=new up(m,E);else if(h.mode===qn.POINTS)b=new fp(m,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(b.geometry.morphAttributes).length>0&&h9(b,r),b.name=e.createUniqueName(r.name||"mesh_"+t),Co(b,r),h.extensions&&cr(o,b,h),e.assignFinalMaterial(b),l.push(b)}for(let d=0,y=l.length;d<y;d++)e.associations.set(l[d],{meshes:t,primitives:d});if(l.length===1)return r.extensions&&cr(o,l[0],r),l[0];let c=new Ie;r.extensions&&cr(o,c,r),e.associations.set(c,{meshes:t});for(let d=0,y=l.length;d<y;d++)c.add(l[d]);return c})}loadCamera(t){let e,n=this.json.cameras[t],o=n[n.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Xe(ln.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):n.type==="orthographic"&&(e=new Yo(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Co(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let o=0,r=e.joints.length;o<r;o++)n.push(this._loadNodeShallow(e.joints[o]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(o){let r=o.pop(),a=o,p=[],s=[];for(let u=0,f=a.length;u<f;u++){let l=a[u];if(l){p.push(l);let c=new _t;r!==null&&c.fromArray(r.array,u*16),s.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new pp(p,s)})}loadAnimation(t){let e=this.json,n=this,o=e.animations[t],r=o.name?o.name:"animation_"+t,a=[],p=[],s=[],u=[],f=[];for(let l=0,c=o.channels.length;l<c;l++){let d=o.channels[l],y=o.samplers[d.sampler],m=d.target,h=m.node,b=o.parameters!==void 0?o.parameters[y.input]:y.input,E=o.parameters!==void 0?o.parameters[y.output]:y.output;m.node!==void 0&&(a.push(this.getDependency("node",h)),p.push(this.getDependency("accessor",b)),s.push(this.getDependency("accessor",E)),u.push(y),f.push(m))}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s),Promise.all(u),Promise.all(f)]).then(function(l){let c=l[0],d=l[1],y=l[2],m=l[3],h=l[4],b=[];for(let T=0,g=c.length;T<g;T++){let x=c[T],U=d[T],V=y[T],O=m[T],P=h[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let L=n._createAnimationTracks(x,U,V,O,P);if(L)for(let D=0;D<L.length;D++)b.push(L[D])}let E=new tr(r,void 0,b);return Co(E,o),E})}createNodeMesh(t){let e=this.json,n=this,o=e.nodes[t];return o.mesh===void 0?null:n.getDependency("mesh",o.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,o.mesh,r);return o.weights!==void 0&&a.traverse(function(p){if(p.isMesh)for(let s=0,u=o.weights.length;s<u;s++)p.morphTargetInfluences[s]=o.weights[s]}),a})}loadNode(t){let e=this.json,n=this,o=e.nodes[t],r=n._loadNodeShallow(t),a=[],p=o.children||[];for(let u=0,f=p.length;u<f;u++)a.push(n.getDependency("node",p[u]));let s=o.skin===void 0?Promise.resolve(null):n.getDependency("skin",o.skin);return Promise.all([r,Promise.all(a),s]).then(function(u){let f=u[0],l=u[1],c=u[2];c!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(c,y9)});for(let d=0,y=l.length;d<y;d++)f.add(l[d]);return f})}_loadNodeShallow(t){let e=this.json,n=this.extensions,o=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?o.createUniqueName(r.name):"",p=[],s=o._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return s&&p.push(s),r.camera!==void 0&&p.push(o.getDependency("camera",r.camera).then(function(u){return o._getNodeRef(o.cameraCache,r.camera,u)})),o._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){p.push(u)}),this.nodeCache[t]=Promise.all(p).then(function(u){let f;if(r.isBone===!0?f=new ia:u.length>1?f=new Ie:u.length===1?f=u[0]:f=new Oe,f!==u[0])for(let l=0,c=u.length;l<c;l++)f.add(u[l]);if(r.name&&(f.userData.name=r.name,f.name=a),Co(f,r),r.extensions&&cr(n,f,r),r.matrix!==void 0){let l=new _t;l.fromArray(r.matrix),f.applyMatrix4(l)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!o.associations.has(f))o.associations.set(f,{});else if(r.mesh!==void 0&&o.meshCache.refs[r.mesh]>1){let l=o.associations.get(f);o.associations.set(f,{...l})}return o.associations.get(f).nodes=t,f}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],o=this,r=new Ie;n.name&&(r.name=o.createUniqueName(n.name)),Co(r,n),n.extensions&&cr(e,r,n);let a=n.nodes||[],p=[];for(let s=0,u=a.length;s<u;s++)p.push(o.getDependency("node",a[s]));return Promise.all(p).then(function(s){for(let f=0,l=s.length;f<l;f++)r.add(s[f]);let u=f=>{let l=new Map;for(let[c,d]of o.associations)(c instanceof sn||c instanceof je)&&l.set(c,d);return f.traverse(c=>{let d=o.associations.get(c);d!=null&&l.set(c,d)}),l};return o.associations=u(r),r})}_createAnimationTracks(t,e,n,o,r){let a=[],p=t.name?t.name:t.uuid,s=[];Vi[r.path]===Vi.weights?t.traverse(function(c){c.morphTargetInfluences&&s.push(c.name?c.name:c.uuid)}):s.push(p);let u;switch(Vi[r.path]){case Vi.weights:u=Eo;break;case Vi.rotation:u=Vo;break;case Vi.translation:case Vi.scale:u=So;break;default:n.itemSize===1?u=Eo:u=So;break}let f=o.interpolation!==void 0?f9[o.interpolation]:zi,l=this._getArrayFromAccessor(n);for(let c=0,d=s.length;c<d;c++){let y=new u(s[c]+"."+Vi[r.path],e.array,l,f);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=jc(e.constructor),o=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)o[r]=e[r]*n;e=o}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let o=this instanceof Vo?zc:kf;return new o(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function m9(i,t,e){let n=t.attributes,o=new bn;if(n.POSITION!==void 0){let p=e.json.accessors[n.POSITION],s=p.min,u=p.max;if(s!==void 0&&u!==void 0){if(o.set(new v(s[0],s[1],s[2]),new v(u[0],u[1],u[2])),p.normalized){let f=jc(wa[p.componentType]);o.min.multiplyScalar(f),o.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let p=new v,s=new v;for(let u=0,f=r.length;u<f;u++){let l=r[u];if(l.POSITION!==void 0){let c=e.json.accessors[l.POSITION],d=c.min,y=c.max;if(d!==void 0&&y!==void 0){if(s.setX(Math.max(Math.abs(d[0]),Math.abs(y[0]))),s.setY(Math.max(Math.abs(d[1]),Math.abs(y[1]))),s.setZ(Math.max(Math.abs(d[2]),Math.abs(y[2]))),c.normalized){let m=jc(wa[c.componentType]);s.multiplyScalar(m)}p.max(s)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(p)}i.boundingBox=o;let a=new Pn;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,i.boundingSphere=a}function ub(i,t,e){let n=t.attributes,o=[];function r(a,p){return e.getDependency("accessor",a).then(function(s){i.setAttribute(p,s)})}for(let a in n){let p=Qc[a]||a.toLowerCase();p in i.attributes||o.push(r(n[a],p))}if(t.indices!==void 0&&!i.index){let a=e.getDependency("accessor",t.indices).then(function(p){i.setIndex(p)});o.push(a)}return Kt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),Co(i,t),m9(i,t,e),Promise.all(o).then(function(){return t.targets!==void 0?c9(i,t.targets,e):i})}function lb(i,t,e){fetch(i).then(n=>{if(!n.ok)throw new Error(`${i}: ${n.status}`);return n.arrayBuffer()}).then(n=>new $f().parse(n,"",t,e),e)}var Pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},g9=new Yo(-1,1,1,-1,0,1),Yc=class extends le{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}},T9=new Yc,Si=class{constructor(t){this._mesh=new Bt(T9,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,g9)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hf=class extends Bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wn.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Si(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Np=class extends Bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let o=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,p;this.inverse?(a=0,p=1):(a=1,p=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),r.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),r.buffers.stencil.setClear(p),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(o.EQUAL,1,4294967295),r.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),r.buffers.stencil.setLocked(!0)}},Bf=class extends Bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ff=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hf(Pa),this.copyPass.material.blending=Qe,this.clock=new xp}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let o=0,r=this.passes.length;o<r;o++){let a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let p=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),s.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}Np!==void 0&&(a instanceof Np?n=!0:a instanceof Bf&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nf=class extends Bn{constructor(t,e,n=null,o=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){let o=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=o}};var Xp={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new _t},cameraProjectionMatrixInverse:{value:new _t},cameraWorldMatrix:{value:new _t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new v(-1,-1,-1)},sceneBoxMax:{value:new v(1,1,1)}},vertexShader:`

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
		}`},Jp={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Xf={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function cb(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=E9(t),n=e.length,o=new Uint8Array(n*4);for(let a=0;a<n;++a){let p=e[a],s=2*Math.PI*p/n,u=new v(Math.cos(s),Math.sin(s),0).normalize();o[a*4]=(u.x*.5+.5)*255,o[a*4+1]=(u.y*.5+.5)*255,o[a*4+2]=127,o[a*4+3]=255}let r=new zo(o,t,t);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}function E9(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),o=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(o===-1&&r===t?(r=t-2,o=0):(r===t&&(r=0),o<0&&(o=t-1)),n[o*t+r]!==0){r-=2,o++;continue}else n[o*t+r]=a++;r++,o--}return n}var zp={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new _t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Gc(i,t,e){let n=V9(i,t,e),o="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];o+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return o}function V9(i,t,e){let n=[];for(let o=0;o<i;o++){let r=2*Math.PI*t*o/i,a=Math.pow(o/(i-1),e);n.push(new v(Math.cos(r),Math.sin(r),a))}return n}var Jf=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,o,r,a=.5*(Math.sqrt(3)-1),p=(t+e)*a,s=Math.floor(t+p),u=Math.floor(e+p),f=(3-Math.sqrt(3))/6,l=(s+u)*f,c=s-l,d=u-l,y=t-c,m=e-d,h,b;y>m?(h=1,b=0):(h=0,b=1);let E=y-h+f,T=m-b+f,g=y-1+2*f,x=m-1+2*f,U=s&255,V=u&255,O=this.perm[U+this.perm[V]]%12,P=this.perm[U+h+this.perm[V+b]]%12,L=this.perm[U+1+this.perm[V+1]]%12,D=.5-y*y-m*m;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[O],y,m));let I=.5-E*E-T*T;I<0?o=0:(I*=I,o=I*I*this._dot(this.grad3[P],E,T));let H=.5-g*g-x*x;return H<0?r=0:(H*=H,r=H*H*this._dot(this.grad3[L],g,x)),70*(n+o+r)}noise3d(t,e,n){let o,r,a,p,u=(t+e+n)*.3333333333333333,f=Math.floor(t+u),l=Math.floor(e+u),c=Math.floor(n+u),d=1/6,y=(f+l+c)*d,m=f-y,h=l-y,b=c-y,E=t-m,T=e-h,g=n-b,x,U,V,O,P,L;E>=T?T>=g?(x=1,U=0,V=0,O=1,P=1,L=0):E>=g?(x=1,U=0,V=0,O=1,P=0,L=1):(x=0,U=0,V=1,O=1,P=0,L=1):T<g?(x=0,U=0,V=1,O=0,P=1,L=1):E<g?(x=0,U=1,V=0,O=0,P=1,L=1):(x=0,U=1,V=0,O=1,P=1,L=0);let D=E-x+d,I=T-U+d,H=g-V+d,N=E-O+2*d,Y=T-P+2*d,J=g-L+2*d,Q=E-1+3*d,F=T-1+3*d,G=g-1+3*d,ft=f&255,yt=l&255,$t=c&255,re=this.perm[ft+this.perm[yt+this.perm[$t]]]%12,te=this.perm[ft+x+this.perm[yt+U+this.perm[$t+V]]]%12,ee=this.perm[ft+O+this.perm[yt+P+this.perm[$t+L]]]%12,q=this.perm[ft+1+this.perm[yt+1+this.perm[$t+1]]]%12,tt=.6-E*E-T*T-g*g;tt<0?o=0:(tt*=tt,o=tt*tt*this._dot3(this.grad3[re],E,T,g));let dt=.6-D*D-I*I-H*H;dt<0?r=0:(dt*=dt,r=dt*dt*this._dot3(this.grad3[te],D,I,H));let Vt=.6-N*N-Y*Y-J*J;Vt<0?a=0:(Vt*=Vt,a=Vt*Vt*this._dot3(this.grad3[ee],N,Y,J));let Et=.6-Q*Q-F*F-G*G;return Et<0?p=0:(Et*=Et,p=Et*Et*this._dot3(this.grad3[q],Q,F,G)),32*(o+r+a+p)}noise4d(t,e,n,o){let r=this.grad4,a=this.simplex,p=this.perm,s=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20,f,l,c,d,y,m=(t+e+n+o)*s,h=Math.floor(t+m),b=Math.floor(e+m),E=Math.floor(n+m),T=Math.floor(o+m),g=(h+b+E+T)*u,x=h-g,U=b-g,V=E-g,O=T-g,P=t-x,L=e-U,D=n-V,I=o-O,H=P>L?32:0,N=P>D?16:0,Y=L>D?8:0,J=P>I?4:0,Q=L>I?2:0,F=D>I?1:0,G=H+N+Y+J+Q+F,ft=a[G][0]>=3?1:0,yt=a[G][1]>=3?1:0,$t=a[G][2]>=3?1:0,re=a[G][3]>=3?1:0,te=a[G][0]>=2?1:0,ee=a[G][1]>=2?1:0,q=a[G][2]>=2?1:0,tt=a[G][3]>=2?1:0,dt=a[G][0]>=1?1:0,Vt=a[G][1]>=1?1:0,Et=a[G][2]>=1?1:0,Wt=a[G][3]>=1?1:0,Te=P-ft+u,M=L-yt+u,ae=D-$t+u,At=I-re+u,Mt=P-te+2*u,lt=L-ee+2*u,pe=D-q+2*u,Pt=I-tt+2*u,Qt=P-dt+3*u,ke=L-Vt+3*u,Pe=D-Et+3*u,R=I-Wt+3*u,w=P-1+4*u,B=L-1+4*u,W=D-1+4*u,nt=I-1+4*u,j=h&255,Ct=b&255,st=E&255,wt=T&255,vt=p[j+p[Ct+p[st+p[wt]]]]%32,at=p[j+ft+p[Ct+yt+p[st+$t+p[wt+re]]]]%32,mt=p[j+te+p[Ct+ee+p[st+q+p[wt+tt]]]]%32,Ht=p[j+dt+p[Ct+Vt+p[st+Et+p[wt+Wt]]]]%32,Rt=p[j+1+p[Ct+1+p[st+1+p[wt+1]]]]%32,ht=.6-P*P-L*L-D*D-I*I;ht<0?f=0:(ht*=ht,f=ht*ht*this._dot4(r[vt],P,L,D,I));let Nt=.6-Te*Te-M*M-ae*ae-At*At;Nt<0?l=0:(Nt*=Nt,l=Nt*Nt*this._dot4(r[at],Te,M,ae,At));let A=.6-Mt*Mt-lt*lt-pe*pe-Pt*Pt;A<0?c=0:(A*=A,c=A*A*this._dot4(r[mt],Mt,lt,pe,Pt));let it=.6-Qt*Qt-ke*ke-Pe*Pe-R*R;it<0?d=0:(it*=it,d=it*it*this._dot4(r[Ht],Qt,ke,Pe,R));let ut=.6-w*w-B*B-W*W-nt*nt;return ut<0?y=0:(ut*=ut,y=ut*ut*this._dot4(r[Rt],w,B,W,nt)),27*(f+l+c+d+y)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,o){return t[0]*e+t[1]*n+t[2]*o}_dot4(t,e,n,o,r){return t[0]*e+t[1]*n+t[2]*o+t[3]*r}};var Qp=class i extends Bn{constructor(t,e,n=512,o=512,r,a,p){super(),this.width=n,this.height=o,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=cb(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new on(this.width,this.height,{type:Hn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $e({defines:Object.assign({},Xp.defines),uniforms:Wn.clone(Xp.uniforms),vertexShader:Xp.vertexShader,fragmentShader:Xp.fragmentShader,blending:Qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ep,this.normalMaterial.blending=Qe,this.pdMaterial=new $e({defines:Object.assign({},zp.defines),uniforms:Wn.clone(zp.uniforms),vertexShader:zp.vertexShader,fragmentShader:zp.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $e({defines:Object.assign({},Jp.defines),uniforms:Wn.clone(Jp.uniforms),vertexShader:Jp.vertexShader,fragmentShader:Jp.fragmentShader,blending:Qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $e({uniforms:Wn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Mp,blendDst:or,blendEquation:In,blendSrcAlpha:Dp,blendDstAlpha:or,blendEquationAlpha:In}),this.blendMaterial=new $e({uniforms:Wn.clone(Xf.uniforms),vertexShader:Xf.vertexShader,fragmentShader:Xf.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ou,blendSrc:Mp,blendDst:or,blendEquation:In,blendSrcAlpha:Dp,blendDstAlpha:or,blendEquationAlpha:In}),this._fsQuad=new Si(null),this._originalClearColor=new Tt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),p!==void 0&&this.updatePdMaterial(p)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Yi,this.depthTexture.format=Ti,this.depthTexture.type=gi,this.normalRenderTarget=new on(this.width,this.height,{minFilter:ze,magFilter:ze,type:Hn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,o=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=o,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=o,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o=e.clearColor||o,r=e.clearAlpha||r,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Jf,n=t*t*4,o=new Uint8Array(n);for(let a=0;a<t;a++)for(let p=0;p<t;p++){let s=a,u=p;o[(a*t+p)*4]=(e.noise(s,u)*.5+.5)*255,o[(a*t+p)*4+1]=(e.noise(s+t,u)*.5+.5)*255,o[(a*t+p)*4+2]=(e.noise(s,u+t)*.5+.5)*255,o[(a*t+p)*4+3]=(e.noise(s+t,u+t)*.5+.5)*255}let r=new zo(o,t,t,mn,kn);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}};Qp.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var jp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zf=class extends Bn{constructor(){super(),this.uniforms=Wn.clone(jp.uniforms),this.material=new Tp({name:jp.name,uniforms:this.uniforms,vertexShader:jp.vertexShader,fragmentShader:jp.fragmentShader}),this._fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$u?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ye=i=>new Tt(i),cP=new Tt,hP=new v(-.99,1.9,.42).normalize();function w9(i=.35){return Gt.lights_physical_pars_fragment.replace("vec3 irradiance = dotNL * directLight.color;",`vec3 irradiance = dotNL * directLight.color;
	vec3 wrapIrradiance = clamp((dot(geometryNormal, directLight.direction) + ${i.toFixed(2)}) / ${(1+i).toFixed(2)}, 0.0, 1.0) * directLight.color;`).replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );","reflectedLight.directDiffuse += wrapIrradiance * BRDF_Lambert( material.diffuseColor );")}function hb(i=.35,t=.82){let e=new Ke({vertexColors:!0,roughness:t,metalness:0});return e.customProgramCacheKey=()=>`veg${i}`,e.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",w9(i))},e}var dP={deep:ye(3105856),mid:ye(5808210),lit:ye(10146920),tip:ye(11853424)},bP={dark:ye(4139548),lit:ye(7754810)};var yP={deep:ye(1324063),mid:ye(2843175),lit:ye(5741104),sun:ye(9421374)};var mP={base:ye(5082924),tip:ye(10408527)};var gP=ye(16512740),TP=ye(15908655);var Ue=i=>new Tt(i);var SP=new _t,wP=new Je,PP=new _n,LP=new v,UP=new v;var P9={stone:Ue(11579308),stoneLight:Ue(13289668),stoneDark:Ue(9276553),mortar:Ue(7237230),roof:Ue(10898229),roofDark:Ue(8862506),roofLight:Ue(12278850),wood:Ue(10117686),woodDark:Ue(7225892),woodLight:Ue(12090183),plaster:Ue(15721156),iron:Ue(4869461),ironLight:Ue(7567493),gold:Ue(14857029),goldDark:Ue(12093994),blue:Ue(3104708),blueDark:Ue(2312860),grass:Ue(9420629),dirt:Ue(11569754),paving:Ue(13221806),canvas:Ue(13214282),canvasDark:Ue(11043898),charcoal:Ue(3881528),straw:Ue(14729314)};var L9=null;function db(i){L9=i}var bb=14280372,U9=new v(-.99,1.9,.42).normalize();function yb(i){let t=new If({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=ba,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Rp,t.info.autoReset=!1,db(hb(.3,.86));let e=new rp;e.background=new Tt(bb),e.fog=new ip(bb,60,140);let n=new Xe(30,16/9,.5,400);e.add(new wp(13953535,6257978,.85));let o=new nr(16773327,3.3);o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.radius=3,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.camera.near=1,o.shadow.camera.far=200,e.add(o,o.target);let r=location.search.includes("manual"),a={on:!location.search.includes("noao")},p=new Ff(t,new on(1,1,{type:Hn,samples:4}));p.addPass(new Nf(e,n));let s=new Qp(e,n,1,1);s.updateGtaoMaterial({radius:1.2,distanceExponent:1.6,thickness:1.2,scale:1.3,samples:12,distanceFallOff:1}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});let u=s,f=u._overrideVisibility.bind(s);u._overrideVisibility=()=>{f(),e.traverse(h=>{(h.isSprite||h.userData.noAO)&&h.visible&&(h.visible=!1,u._visibilityCache.push(h))})},p.addPass(s),p.addPass(new zf);let l=0,c=0,d=()=>{let h=i.clientWidth||window.innerWidth,b=i.clientHeight||window.innerHeight;l=i.clientWidth,c=i.clientHeight,t.setSize(h,b,!1),p.setSize(h,b),n.aspect=h/b,n.updateProjectionMatrix()};return window.addEventListener("resize",d),typeof ResizeObserver<"u"&&new ResizeObserver(()=>d()).observe(i),d(),{renderer:t,scene:e,camera:n,sun:o,draw:()=>{i.clientWidth&&(i.clientWidth!==l||i.clientHeight!==c)&&d(),t.info.reset(),a.on?p.render():t.render(e,n)},resize:d,aimSun:(h,b)=>{o.target.position.copy(h),o.position.copy(h).addScaledVector(U9,80);let E=o.shadow.camera;E.left=-b,E.right=b,E.top=b,E.bottom=-b,E.updateProjectionMatrix()},manual:r,ao:a}}var oL=new Tt;var iL={dark:ye(9405305),mid:ye(11773847),lit:ye(14077116),moss:ye(8367685)};var rL={bark:ye(8011298),barkLit:ye(11230515),ring:ye(14262369),core:ye(12944455),groove:ye(5975064)};var aL={top:ye(9724991),lit:ye(11565643),side:ye(5912613),deep:ye(4139550),crack:ye(15327439)};var Qf=null;function mb(){if(Qf)return Qf;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.45,"rgba(0,0,0,0.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Qf=new so(i),Qf}var gb="./assets/soldat-jeu-RISUTZOK.glb";var Tb="./assets/archere-jeu-TJ352OCY.glb";var qc="./assets/colosse-jeu-77SM33LG.glb";var Eb="./assets/brigand-jeu-AGABQCJG.glb";var Vb="./assets/druidesse-jeu-HCATNSXO.glb";var Sb="./assets/baleine-jeu-FE5ANNKN.glb";var wb="./assets/troll-jeu-D72UI5RL.glb";var Zp={about:"The painted surroundings of a site (game/src/map/backdrop.ts): one image per kind of site, seen from the game camera (yaw, pitch), projected orthographically along its axis onto the ground. The image is w metres wide in the camera's plane (across the screen) and w * py / px metres high; its centre is the plot's centre, raised by up metres on the screen. plotHalf must be the rules' (sim/village.ts PLOT_HALF, sim/camps.ts CAMP_HALF); band: the darker border band just outside the plot, in metres. pipeline/diorama/layout.py draws the framing for the image generator; game/tools/backdrop.mjs bakes the placeholders.",camera:{yaw:45,pitch:47},village:{plotHalf:26,band:2.5,w:163.8,up:.36,px:4096,py:1728,image:"village.webp"},camp:{plotHalf:18,band:2,w:114.7,up:.34,px:4096,py:1728,image:"camp.webp"},arene:{halfX:14,halfZ:20,band:1.5,w:140,up:3,px:4096,py:1728,image:"arene.webp",about:"the auto-battler's first arena (retired on 06/11 for l'\xEEle de l'\xC9clat; its picture is no longer in the game): a rectangle of halfX by halfZ metres, its long side along z, my edge at +z (the lower left of the screen); pipeline/diorama/layout.py draws its framing and the island's plan from it"},ile:{w:89.435,up:-.1624,px:4096,py:1728,image:"ile.webp",about:"L'\xC9clat's map, l'\xEEle de l'\xC9clat (game/src/autobattler/client/backdrop.ts): the field is the diamond of 40 m corner to corner seen from the camera, my corner at the bottom of the screen, the \xC9clat at the picture's centre across and `up` metres below it; pipeline/concepts/ile/jeu.py cuts it from the validated painting and prints these numbers, terrain.py reads the rules' ground from the same framing"}};var La=ln.degToRad(Zp.camera.yaw),hr=ln.degToRad(Zp.camera.pitch),mL={view:new v(Math.sin(La)*Math.cos(hr),Math.sin(hr),Math.cos(La)*Math.cos(hr)),right:new v(Math.cos(La),0,-Math.sin(La)),up:new v(-Math.sin(La)*Math.sin(hr),Math.cos(hr),-Math.cos(La)*Math.sin(hr))};function jf(i,t){let e=i,n=-t/Math.sin(hr),o=Math.SQRT1_2;return{x:o*(e+n),z:o*(n-e)}}var Zf="./assets/ile-V6VVSPMK.webp";var Yp=Zp.ile,xo={w:Yp.w,h:Yp.w*Yp.py/Yp.px,up:Yp.up},Yf=class{constructor(t){S(this,"group",new Ie);S(this,"ready");S(this,"corners",[]);S(this,"catcher");this.group.name="arena backdrop";let e=[],n=[];for(let[s,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let f=jf(s*xo.w/2,xo.up+u*xo.h/2);e.push(f.x,0,f.z),n.push((s+1)/2,(u+1)/2),this.corners.push(new v(f.x,0,f.z))}let o=new le;o.setAttribute("position",new zt(e,3)),o.setAttribute("uv",new zt(n,2)),o.setIndex([0,2,1,0,3,2]),o.computeVertexNormals(),o.getAttribute("normal").getY(0)<0&&(o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals());let r=new ne({toneMapped:!1,fog:!1}),a=new Bt(o,r);a.frustumCulled=!1,a.renderOrder=-2,a.visible=!1,this.group.add(a),this.catcher=new Bt(new un(48,48).rotateX(-Math.PI/2),new ha({color:1714704,opacity:.36,depthWrite:!1})),this.catcher.position.y=.01,this.catcher.receiveShadow=!0,this.catcher.renderOrder=-1,this.group.add(this.catcher);let p=Math.min(8,t.capabilities.getMaxAnisotropy());this.ready=new Po().loadAsync(Zf).then(s=>{s.colorSpace=Ve,s.anisotropy=p,s.minFilter=Cn,r.map=s,r.needsUpdate=!0,a.visible=!0},()=>{})}};var Pb="./assets/ile-vie-7U7YUT2S.webp";var $9=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,k9=`
uniform sampler2D tMask;
uniform float uTime;
uniform vec2 uSize;     // metres across and up the picture
uniform float uUp;      // the picture's centre raised above the field's (metres up the screen)
varying vec2 vUv;
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
// glints: one per cell, a small soft point that twinkles with its own phase
float glints(vec2 q, float cell, float t, float size) {
  vec2 c = floor(q / cell), f = q / cell - c;
  float h = hash(c), h2 = hash(c + 17.3);
  vec2 at = vec2(h, h2) * 0.7 + 0.15;
  float d = length((f - at) * cell);
  float tw = pow(max(0.0, sin(t * (1.3 + h * 1.7) + h2 * 6.283)), 6.0);
  return smoothstep(size, 0.0, d) * tw;
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
void main() {
  vec4 m = texture2D(tMask, vUv);
  float water = m.r, foam = m.g, calm = m.b;
  if (water + foam < 0.02) discard;
  // the point in metres in the picture's plane
  vec2 P = vec2((vUv.x - 0.5) * uSize.x, uUp + (vUv.y - 0.5) * uSize.y);
  // the river flows towards my edge: +z on the ground, down-left on the screen
  vec2 flow = normalize(vec2(-0.707, -0.517));
  float run = 1.0 - calm;
  vec2 q = P - flow * uTime * 1.1 * run;
  float g = glints(q, 2.1, uTime, 0.34) + 0.6 * glints(q * 1.37 + 7.0, 1.7, uTime * 1.2, 0.27);
  // broad slow bands of light drifting along the river
  float band = smoothstep(0.62, 0.92, vnoise(q * vec2(0.35, 0.35) + vec2(uTime * 0.05, 0.0)));
  float light = water * (g * 0.75 + band * 0.13 * run);
  // the falls: white streaks running down the screen, foam that boils at their foot
  vec2 s = vec2(P.x * 3.2, P.y * 0.55 + uTime * 2.6);
  float streak = smoothstep(0.55, 0.95, vnoise(s)) * 0.8 + glints(P * 1.0 + vec2(0.0, uTime * 1.5), 0.45, uTime * 3.0, 0.14) * 0.6;
  light += foam * streak;
  gl_FragColor = vec4(vec3(1.0, 1.0, 0.96) * light, 1.0);
}`,Gf=class{constructor(){S(this,"group",new Ie);S(this,"mat");S(this,"birds",[]);S(this,"nextFlock",4+Math.random()*6);S(this,"birdGeo",H9());S(this,"birdMat",new Ke({vertexColors:!0,roughness:.8,side:fn}));S(this,"shadowGeo",new Gi(.55,16).rotateX(-Math.PI/2).scale(1.4,1,.8));S(this,"shadowMat",new ne({color:989704,transparent:!0,opacity:.18,depthWrite:!1,toneMapped:!1}));S(this,"ready");this.group.name="arena life";let t=[],e=[];for(let[r,a]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let p=jf(r*xo.w/2,xo.up+a*xo.h/2);t.push(p.x,.02,p.z),e.push((r+1)/2,(a+1)/2)}let n=new le;n.setAttribute("position",new zt(t,3)),n.setAttribute("uv",new zt(e,2)),n.setIndex([0,2,1,0,3,2]),n.computeVertexNormals(),n.getAttribute("normal").getY(0)<0&&(n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals()),this.mat=new $e({vertexShader:$9,fragmentShader:k9,transparent:!0,depthWrite:!1,blending:uo,toneMapped:!1,uniforms:{tMask:{value:null},uTime:{value:0},uSize:{value:new ot(xo.w,xo.h)},uUp:{value:xo.up}}});let o=new Bt(n,this.mat);o.frustumCulled=!1,o.renderOrder=-1,o.visible=!1,this.group.add(o),this.ready=new Po().loadAsync(Pb).then(r=>{r.colorSpace=fo,r.minFilter=en,r.generateMipmaps=!1,this.mat.uniforms.tMask.value=r,o.visible=!0},()=>{})}frame(t){this.mat.uniforms.uTime.value+=t,this.nextFlock-=t,this.nextFlock<=0&&this.birds.length===0&&(this.flock(),this.nextFlock=14+Math.random()*14),this.birds=this.birds.filter(e=>{e.t+=t;let n=e.root.position.copy(e.from).addScaledVector(e.dir,e.t*6.5);n.y=e.from.y+Math.sin(e.t*.7+e.phase)*.6;let o=Math.sin(e.t*9+e.phase)*(.5+.5*Math.max(0,Math.sin(e.t*.9+e.phase)));return e.wings[0].rotation.z=.15+o*.55,e.wings[1].rotation.z=-.15-o*.55,e.shadow.position.set(n.x+n.y*.52,.04,n.z-n.y*.22),e.t>22?(this.group.remove(e.root,e.shadow),!1):!0})}flock(){let t=new v(1,0,-1).normalize(),e=new v(-1,0,-1).normalize(),n=(Math.random()-.5)*.5,o=t.clone().addScaledVector(e,n).normalize();Math.random()<.5&&o.negate();let r=o.clone().multiplyScalar(-72).addScaledVector(e,(Math.random()-.5)*24),a=3+Math.floor(Math.random()*3);for(let p=0;p<a;p++){let s=new Ie,u=new Bt(this.birdGeo.body,this.birdMat),f=new Bt(this.birdGeo.wing,this.birdMat),l=new Bt(this.birdGeo.wing,this.birdMat);l.scale.x=-1,s.add(u,f,l),s.scale.setScalar(.9+Math.random()*.3);let c=new v(-o.z,0,o.x),d=r.clone().addScaledVector(o,-p*1.8-Math.random()).addScaledVector(c,(p%2?1:-1)*Math.ceil(p/2)*1.6);d.y=13+Math.random()*3,s.position.copy(d),s.rotation.y=Math.atan2(o.x,o.z);let y=new Bt(this.shadowGeo,this.shadowMat);y.rotation.y=s.rotation.y,y.renderOrder=1,this.group.add(s,y),this.birds.push({root:s,wings:[f,l],shadow:y,from:d,dir:o,t:0,phase:Math.random()*6.283})}}};function H9(){let i=(n,o)=>{let r=n.getAttribute("position").count,a=[];for(let p=0;p<r;p++)a.push(...o.slice(p%(o.length/3)*3,p%(o.length/3)*3+3));return n.setAttribute("color",new zt(a,3)),n},t=new sa(.13,.75,5).rotateX(Math.PI/2);i(t,[.96,.96,.94]);let e=new le;return e.setAttribute("position",new zt([0,0,.18,0,0,-.16,.55,.05,.06,.55,.05,.06,0,0,-.16,.6,.02,-.12,.55,.05,.06,.6,.02,-.12,1.05,-.04,-.08],3)),e.setAttribute("color",new zt([.93,.94,.95,.93,.94,.95,.86,.88,.9,.86,.88,.9,.93,.94,.95,.86,.88,.9,.86,.88,.9,.86,.88,.9,.2,.2,.22],3)),e.computeVertexNormals(),{body:t,wing:e}}var Ua=ln.degToRad(45),qo=ln.degToRad(47),Lb=20,B9=new v(-.99,1.9,.42).normalize(),Kc={top:52,bottom:26,side:18},t0=2.6,F9=1.8,N9=4,dr={barbarian:{url:gb,height:1.7},archer:{url:Tb,height:1.65},tank:{url:qc,height:2.6},assassin:{url:Eb,height:1.75},druid:{url:Vb,height:1.95,blow:16},whale:{url:Sb,height:2,bar:3.6,blow:16},banner:{url:null,height:2.6},guardian:{url:qc,height:4.4},beast:{url:wb,height:3,blow:11}},Kf=.6,X9=1.35;for(let i of xe){let t=dr[i];t.height*=Kf,t.bar&&(t.bar*=Kf)}dr.beast.height*=X9;var Ub=i=>i==="beast"||i==="guardian"?1:Kf,J9=.75,z9=.82,Gp=new Tt(4164863),Wp=new Tt(16729943),e0=new Tt(16747050),Cb=2.6,Wf=null;function Q9(){if(Wf)return Wf;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Wf=new so(i),Wf}var i0=new Tt(16761402),j9=new Tt(16777215),Z9=new Tt(7332863),xb=new Map;function Y9(i,t){let e=xb.get(i);return e||(e=[n0(i,Gp),n0(i,Wp),n0(i,i0,.5)],xb.set(i,e)),e[t]}function n0(i,t,e=1.4){let n=i.clone(),o=t.getHexString();return n.onBeforeCompile=r=>{r.uniforms.rimColor={value:t},r.fragmentShader=`uniform vec3 rimColor;
`+r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rimK = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
      totalEmissiveRadiance += rimColor * pow(rimK, 2.0) * ${e.toFixed(2)};`)},n.customProgramCacheKey=()=>`rim-${o}-${e}`,n}var tl=class{constructor(t){S(this,"stage");S(this,"scene");S(this,"group",new Ie);S(this,"kinds",{});S(this,"figs",new Map);S(this,"side",0);S(this,"map",ho[0]);S(this,"mapped",null);S(this,"half",{x:14,z:14});S(this,"battle",null);S(this,"noDrop");S(this,"noDropMat");S(this,"noDropCtx");S(this,"noDropKey","");S(this,"outside");S(this,"dropKind","barbarian");S(this,"spellZones",new Map);S(this,"spellMats",new Map);S(this,"zones",new Map);S(this,"zoneMats");S(this,"heralds",[]);S(this,"heraldMat");S(this,"redK",0);S(this,"aimedAt","");S(this,"fit",{dist:120,target:new v});S(this,"zoom",1);S(this,"minZoom",1);S(this,"chosen",null);S(this,"pan",new v);S(this,"placedAt","");S(this,"backdrop");S(this,"life",new Gf);S(this,"rings");S(this,"auras");S(this,"slainShown",new Set);S(this,"blobs");S(this,"bars");S(this,"fills");S(this,"marks");S(this,"arrows",[]);S(this,"arrowGeo",new Yn(.025,.025,.7,4).rotateX(Math.PI/2));S(this,"arrowMat",new ne({color:5913372}));S(this,"fxs",[]);S(this,"shardGeo",new gp(.32,0).scale(.7,1.3,.7));S(this,"shardMat",new Ke({color:7336686,emissive:4184544,emissiveIntensity:.9,roughness:.3}));S(this,"boltMat",new ne({color:15262975,transparent:!0,depthWrite:!1,blending:uo}));S(this,"boltGeo",new Yn(.07,.07,1,5).translate(0,.5,0));S(this,"ringGeo",new yi(.86,1,48).rotateX(-Math.PI/2));S(this,"discGeo",new Gi(1,40).rotateX(-Math.PI/2));S(this,"raycaster",new vp);S(this,"plane",new Qn(new v(0,1,0),0));S(this,"time",0);S(this,"lastTick",-1);S(this,"frameNo",0);S(this,"jsMs",0);S(this,"ready");S(this,"showRed",!1);S(this,"readyRed",!1);S(this,"noDropSmall",null);this.stage=yb(t),this.stage.ao.on=!1,this.stage.sun.shadow.mapSize.set(2048,2048),this.scene=this.stage.scene,this.scene.fog=null,this.scene.background=new Tt(4086316),this.stage.camera.fov=Lb,this.backdrop=new Yf(this.stage.renderer),this.scene.add(this.backdrop.group,this.life.group,this.group);let e=document.createElement("canvas");this.noDropCtx=e.getContext("2d");let n=new so(e);n.colorSpace=Ve,this.noDropMat=new ne({map:n,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}),this.noDrop=new Bt(new le,this.noDropMat),this.noDrop.position.y=.04,this.noDrop.visible=!1,this.noDrop.renderOrder=2;let o=k.banner.radius;this.zoneMats=[Gp,Wp].map(a=>new ne({map:Ob(o,"rgba(255,255,255,0.13)"),color:a,transparent:!0,depthWrite:!1,toneMapped:!1})),this.heraldMat=new ne({map:Ob(2.2,"rgba(255,255,255,0.18)"),color:i0,transparent:!0,depthWrite:!1,toneMapped:!1}),this.outside=new Bt(new le,new ne({color:1317386,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1})),this.outside.position.y=.05,this.outside.visible=!1,this.outside.renderOrder=2,this.group.add(this.outside),this.rings=new Zn(new yi(.4,.48,32).rotateX(-Math.PI/2),new ne({color:16777215,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),400),this.blobs=new Zn(new un(1.15,1.15).rotateX(-Math.PI/2),new ne({map:mb(),color:1055240,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1}),400),this.blobs.count=0,this.blobs.frustumCulled=!1,this.blobs.renderOrder=0,this.rings.count=0,this.rings.frustumCulled=!1,this.auras=new Zn(new un(1.6,1.6).rotateX(-Math.PI/2),new ne({map:Q9(),color:e0,transparent:!0,depthWrite:!1,toneMapped:!1,blending:uo}),400),this.auras.count=0,this.auras.frustumCulled=!1,this.auras.renderOrder=1,this.marks=new Zn(new yi(.25,.42,16).rotateX(-Math.PI/2),new ne({color:16777215,transparent:!0,opacity:.9,depthWrite:!1}),120),this.marks.count=0,this.marks.frustumCulled=!1;let r=new un(1,.17);this.bars=new Zn(r,new ne({color:1774604,depthTest:!1,transparent:!0,opacity:.8}),400),this.fills=new Zn(r.clone().translate(.5,0,0),new ne({color:16777215,depthTest:!1,transparent:!0,toneMapped:!1}),400);for(let a of[this.bars,this.fills])a.count=0,a.frustumCulled=!1,a.renderOrder=10;this.fills.renderOrder=11,this.group.add(this.blobs,this.auras,this.noDrop,this.rings,this.marks,this.bars,this.fills),this.setMap(ho[0]),this.aim(),this.ready=Promise.all([this.load(),this.backdrop.ready,this.life.ready]).then(()=>{})}aim(){let t=this.stage.camera,e=this.stage.renderer.domElement,n=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight,r=`${n}x${o}`;r!==this.aimedAt&&(this.aimedAt=r,this.frame0(t,n,o),this.minZoom=this.coverZoom(t),this.placedAt=""),this.zoom<this.minZoom&&(this.zoom=this.minZoom);let a=1-1/this.zoom,p=this.half.x*a,s=this.half.z*a;this.pan.x=ln.clamp(this.pan.x,-p-this.fit.target.x,p-this.fit.target.x),this.pan.z=ln.clamp(this.pan.z,-s-this.fit.target.z,s-this.fit.target.z),this.zoom<=this.minZoom+1e-4&&this.pan.set(0,0,0);let u=`${this.zoom.toFixed(4)}:${this.pan.x.toFixed(3)}:${this.pan.z.toFixed(3)}`;if(u===this.placedAt)return;this.placedAt=u;let f=new v(Math.sin(Ua)*Math.cos(qo),Math.sin(qo),Math.cos(Ua)*Math.cos(qo)),l=this.fit.target.clone().add(this.pan);t.position.copy(l).addScaledVector(f,this.fit.dist/this.zoom),t.lookAt(l),t.updateMatrixWorld(!0),this.stage.aimSun(l,30),this.stage.sun.position.copy(l).addScaledVector(B9,120)}zoomAt(t,e,n,o){let r=this.groundAt(e,n,o);this.zoom=ln.clamp(this.zoom*t,this.minZoom,t0),this.aim();let a=this.groundAt(e,n,o);r&&a&&(this.pan.x+=r.x-a.x,this.pan.z+=r.z-a.z),this.aim()}panScreen(t,e,n,o,r){let a=this.groundAt(t,e,r),p=this.groundAt(n,o,r);a&&p&&(this.pan.x+=a.x-p.x,this.pan.z+=a.z-p.z,this.aim())}resetView(){this.zoom=this.minZoom,this.pan.set(0,0,0),this.aim()}battleView(){if(this.chosen){this.zoom=this.chosen.zoom,this.pan.copy(this.chosen.pan),this.aim();return}this.zoom=F9;let t=this.toWorld(this.map.width/2,this.map.length/2-N9,0);this.pan.set(t.x-this.fit.target.x,0,t.z-this.fit.target.z),this.aim()}lookAt(t,e,n){let o=this.toWorld(t,e,this.side);this.zoom=ln.clamp(n,this.minZoom,t0),this.pan.set(o.x-this.fit.target.x,0,o.z-this.fit.target.z),this.aim()}keepView(){this.chosen={zoom:this.zoom,pan:this.pan.clone()}}groundAt(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new ot(p,s),this.stage.camera);let u=new v;return this.raycaster.ray.intersectPlane(this.plane,u)?u:null}coverZoom(t){let e=new v(Math.sin(Ua)*Math.cos(qo),Math.sin(qo),Math.cos(Ua)*Math.cos(qo)),n=this.backdrop.corners,o=new v,r=[new ot,new ot,new ot,new ot],a=s=>{t.position.copy(this.fit.target).addScaledVector(e,this.fit.dist/s),t.lookAt(this.fit.target),t.updateMatrixWorld(!0),n.forEach((f,l)=>{o.copy(f).project(t),r[l].set(o.x,o.y)});let u=0;for(let[f,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])for(let c=0;c<4;c++){let d=r[c],y=r[(c+1)%4],m=(y.x-d.x)*(l-d.y)-(y.y-d.y)*(f-d.x);if(m!==0){if(u===0)u=Math.sign(m);else if(Math.sign(m)!==u)return!1}}return!0},p=1;if(!a(1)){let s=1,u=t0;if(!a(u))return 1;for(let f=0;f<30;f++){let l=(s+u)/2;a(l)?u=l:s=l}p=u*1.002}return p}frame0(t,e,n){t.fov=Lb,t.aspect=e/n,t.near=1,t.far=600;let o=new v(Math.sin(Ua)*Math.cos(qo),Math.sin(qo),Math.cos(Ua)*Math.cos(qo)),r=new v(-1,0,-1).normalize(),a=this.outline().map(([d,y])=>this.toWorld(d,y,0)),p={x:1-2*Kc.side/e,top:1-2*Kc.top/n,bottom:-1+2*Kc.bottom/n},s=new v,u=new v,f=(d,y)=>{s.copy(r).multiplyScalar(d),t.position.copy(s).addScaledVector(o,y),t.lookAt(s),t.updateProjectionMatrix(),t.updateMatrixWorld(!0)},l=()=>a.every(d=>(u.copy(d).project(t),Math.abs(u.x)<=p.x&&u.y<=p.top&&u.y>=p.bottom)),c={dist:400,shift:0};for(let d=-6;d<=6;d+=.25){let y=20,m=400;if(f(d,m),!!l()){for(let h=0;h<40;h++){let b=(y+m)/2;f(d,b),l()?m=b:y=b}m<c.dist&&(c={dist:m,shift:d})}}f(c.shift,c.dist),this.fit={dist:c.dist,target:s.clone()}}async load(){let t=e=>new Promise((n,o)=>lb(e,n,o));await Promise.all([...[...xe,"guardian","beast"].map(async e=>{let n=dr[e].url;if(!n)return;let o=await t(n),r=new bn().setFromObject(o.scene),a=r.max.y-r.min.y||1;o.scene.traverse(p=>{let s=p;if(s.isMesh&&(s.castShadow=!0,s.frustumCulled=!1,e==="whale")){let u=s.material;u.transparent=!0,u.opacity=z9,u.depthWrite=!0}}),this.kinds[e]={template:o.scene,clips:o.animations,scale:dr[e].height/a}})])}setSide(t){this.side=t,this.group.rotation.y=this.turnOf(t)}turnOf(t){return(this.map.shape==="diamond"?Math.PI/4:0)+(t===1?Math.PI:0)}toWorld(t,e,n){return this.at(t,e).applyAxisAngle(new v(0,1,0),this.turnOf(n))}outline(){let t=this.map.width,e=this.map.length;return this.map.shape==="diamond"?[[t/2,0],[t,e/2],[t/2,e],[0,e/2]]:[[0,0],[t,0],[t,e],[0,e]]}setMap(t){if(this.mapped===t)return;this.mapped=this.map=t,this.noDropKey="";let e=this.noDropCtx.canvas;e.width=t.width*Oo,e.height=t.length*Oo,this.noDropMat.map?.dispose();let n=new so(e);n.colorSpace=Ve,this.noDropMat.map=n,this.noDropMat.needsUpdate=!0,this.noDrop.geometry.dispose(),this.noDrop.geometry=new un(t.width,t.length).rotateX(-Math.PI/2),this.outside.geometry.dispose(),this.outside.geometry=e8(this.outline().map(([r,a])=>this.at(r,a)),160);let o=this.outline().map(([r,a])=>this.toWorld(r,a,0));this.half={x:Math.max(...o.map(r=>Math.abs(r.x))),z:Math.max(...o.map(r=>Math.abs(r.z)))},this.group.rotation.y=this.turnOf(this.side),this.aimedAt=""}setBattle(t){if(t!==this.battle){t&&this.setMap(t.map);for(let e of this.figs.values())this.group.remove(e.root);for(let e of this.arrows)this.group.remove(e.m);for(let e of this.fxs)this.group.remove(e.obj);this.figs.clear(),this.arrows=[],this.fxs=[],this.slainShown.clear(),this.battle=t}}at(t,e,n=new v){return n.set(t-this.map.width/2,0,this.map.length/2-e)}pick(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new ot(p,s),this.stage.camera);let u=new v;if(!this.raycaster.ray.intersectPlane(this.plane,u))return null;let f=u.applyAxisAngle(new v(0,1,0),-this.turnOf(this.side));return{x:f.x+this.map.width/2,y:this.map.length/2-f.z}}frame(t,e){this.time+=t,this.frameNo++;let n=performance.now(),o=this.battle,r=new _t,a=new Je,p=new v,s=new v(1,1,1);this.aim(),this.life.frame(t);let u=o?this.showRed?1:this.readyRed?o0:0:0;this.redK+=(u-this.redK)*(1-Math.exp(-t*(u>this.redK?12:4)));let f=this.redK>.01;f&&o&&this.paintNoDrop(o),this.noDrop.visible=f,this.noDropMat.opacity=this.redK,this.drawZones(o);let l=Math.max(0,(this.redK-o0)/(1-o0));if(this.outside.visible=l>.01,this.outside.material.opacity=.34*l,!o){this.rings.count=0,this.blobs.count=0,this.bars.count=0,this.fills.count=0,this.marks.count=0,this.auras.count=0;for(let V of this.fxs)this.group.remove(V.obj);this.fxs=[],this.stage.draw();return}let c=this.stage.camera.quaternion.clone().premultiply(this.group.quaternion.clone().invert()),d=0,y=0,m=0,h=new Tt,b=[o.boons[0].damage+o.boons[0].attackSpeed>0,o.boons[1].damage+o.boons[1].attackSpeed>0],E=1+.12*Math.sin(this.time*5);for(let V of o.monsters){if(V.died<0||V.by<0||V.id<0||this.slainShown.has(V.id)||(this.slainShown.add(V.id),o.tick-V.died>k.tickHz))continue;let O=o.units[V.id];this.slain(this.at(O.x,O.y),this.colour(V.by))}let T=o.tick!==this.lastTick;this.lastTick=o.tick;for(let V of o.units){let O=this.figs.get(V.id);if(!O&&(!V.alive||(O=this.make(V),!O)))continue;T&&(O.px=O.cx,O.py=O.cy,O.cx=V.x,O.cy=V.y);let P=O.px+(O.cx-O.px)*e,L=O.py+(O.cy-O.py)*e,D=!o.over&&Math.abs(O.cx-O.px)+Math.abs(O.cy-O.py)>.004;this.at(P,L,O.root.position);let I=Math.max(0,1-(o.tick-O.born+e)*Me/.3);O.root.position.y=I*I*3;let H=O.ry;if(V.target&&V.target.alive?H=Math.atan2(V.target.x-V.x,-(V.target.y-V.y)):D&&(H=Math.atan2(O.cx-O.px,-(O.cy-O.py))),O.ry=W9(O.ry,H,t*10),O.root.rotation.y=O.ry,V.alive)if(V.struck!==O.struck&&V.struck>=0){O.struck=V.struck,qf(O,"attack",!0,Math.max(1,.9/V.period));let F=dr[V.kind].blow,G=O.actions.attack;F!==void 0&&G&&(G.time=Math.max(0,F/30-.12)),V.kind==="archer"&&V.target&&this.shoot(V,V.target),V.kind==="whale"&&V.target&&this.shard(O,V.target,V.splash),V.kind==="druid"&&V.target&&this.lightning(V.target.x,V.target.y,V.splash)}else(O.current!=="attack"||!O.actions.attack?.isRunning())&&qf(O,D?"run":"idle",!1,D?G9(V.speed):1);else if(O.dead||(O.dead=this.time,qf(O,"death",!0)),this.time-O.dead>1.6&&(O.root.position.y-=(this.time-O.dead-1.6)*.8),this.time-O.dead>2.6){this.group.remove(O.root),this.figs.delete(V.id);continue}if(this.figs.size<=80?O.mixer.update(t):(this.frameNo+V.id)%2===0&&O.mixer.update(t*2),V.cried!==O.cried&&V.cried>=0&&(O.cried=V.cried,this.cry(O.root.position,this.colour(V.side))),!V.alive)continue;let N=V.radius/.35*.75*Ub(V.kind),Y=V.kind==="whale";r.compose(p.set(O.root.position.x,.03,O.root.position.z),a.identity(),new v(N*(Y?.8:1),1,N*(Y?.8:1))),this.blobs.setMatrixAt(d,r),r.compose(p.set(O.root.position.x,.05,O.root.position.z),a.identity(),new v(N,1,N));let J=o.tick,Q=V.stunUntil>J?j9:V.slowUntil>J?Z9:null;if(this.rings.setMatrixAt(d,r),this.rings.setColorAt(d++,Q??this.colour(V.side)),V.side!==we&&b[V.side]&&m<400&&(r.compose(p.set(O.root.position.x,.045,O.root.position.z),a.identity(),new v(N*Cb*E,1,N*Cb*E)),this.auras.setMatrixAt(m++,r)),V.hp<V.maxHp&&y<400){let F=V.side===we?2.4:(V.kind==="tank"||V.kind==="whale"?1.5:1.1)*J9,G=dr[V.kind].bar??dr[V.kind].height+.35*Ub(V.kind);r.compose(p.set(O.root.position.x,G,O.root.position.z),c,new v(F,1,1)),this.bars.setMatrixAt(y,r);let ft=Math.max(.02,V.hp/V.maxHp),yt=new v(-F/2,0,0).applyQuaternion(c);r.compose(p.set(O.root.position.x+yt.x,G+yt.y,O.root.position.z+yt.z),c,new v(F*ft,1,1)),this.fills.setMatrixAt(y,r),this.fills.setColorAt(y++,h.copy(this.colour(V.side)))}}this.auras.count=m,this.auras.instanceMatrix.needsUpdate=!0,this.rings.count=d,this.rings.instanceMatrix.needsUpdate=!0,this.blobs.count=d,this.blobs.instanceMatrix.needsUpdate=!0,this.rings.instanceColor&&(this.rings.instanceColor.needsUpdate=!0),this.bars.count=y,this.fills.count=y,this.bars.instanceMatrix.needsUpdate=!0,this.fills.instanceMatrix.needsUpdate=!0,this.fills.instanceColor&&(this.fills.instanceColor.needsUpdate=!0);let g=0,x=1+.25*Math.sin(this.time*14);for(let V of o.pendingDrops()){if(g>=120)break;this.at(V.x,V.y,p),r.compose(p.setY(.06),a.identity(),s.clone().multiplyScalar(x)),this.marks.setMatrixAt(g,r),this.marks.setColorAt(g++,V.side===this.side?Gp:Wp)}this.marks.count=g,this.marks.instanceMatrix.needsUpdate=!0,this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0),this.jsMs=performance.now()-n,this.arrows=this.arrows.filter(V=>(V.t+=t/.22,V.t>=1?(this.group.remove(V.m),!1):(V.m.position.lerpVectors(V.from,V.to,V.t),V.m.position.y+=Math.sin(V.t*Math.PI)*.8,V.m.lookAt(V.to.x,V.m.position.y,V.to.z),!0)));let U=this.fxs;this.fxs=[];for(let V of U){if(V.t+=t/V.dur,V.t>=1){this.group.remove(V.obj);continue}this.fxs.push(V),V.tick(V.t)}this.stage.draw()}shard(t,e,n){let o=new v;t.blowhole?(t.blowhole.getWorldPosition(o),this.group.worldToLocal(o)):o.copy(t.root.position).setY(3.5);let r=this.at(e.x,e.y).setY(.3),a=new Bt(this.shardGeo,this.shardMat);this.group.add(a);let p=!1;this.fxs.push({obj:a,t:0,dur:.32,tick:s=>{a.position.lerpVectors(o,r,s),a.position.y+=Math.sin(s*Math.PI)*.6,a.rotation.set(s*6,s*9,0),s>.92&&!p&&(p=!0,this.impact(r,n+.35))}})}impact(t,e){let n=new Ie,o=new Bt(this.discGeo,new ne({color:4184532,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),r=new Bt(this.ringGeo,new ne({color:12124153,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,blending:uo}));o.position.set(t.x,.07,t.z),r.position.set(t.x,.075,t.z),n.add(o,r);let a=[];for(let p=0;p<5;p++){let s=new Bt(this.shardGeo,this.shardMat),u=p/5*Math.PI*2+.4;s.scale.setScalar(.6),n.add(s),a.push({m:s,a:u})}this.group.add(n),this.fxs.push({obj:n,t:0,dur:.42,tick:p=>{let s=.7+.3*Math.min(1,p*4);o.scale.setScalar(e*s),r.scale.setScalar(e*s),o.material.opacity=.5*(1-p),r.material.opacity=.9*(1-p);for(let u of a)u.m.position.set(t.x+Math.cos(u.a)*e*p,.15+Math.sin(p*Math.PI)*.5,t.z+Math.sin(u.a)*e*p),u.m.rotation.set(p*8,u.a+p*5,0),u.m.visible=p<.8}})}lightning(t,e,n){let o=new Ie,r=this.at(t,e),a=r.clone().add(new v(.6,9,-.4));for(let s=0;s<6;s++){let u=s===5?r.clone():a.clone().lerp(r,1/(6-s)).add(new v((Math.random()-.5)*.9,0,(Math.random()-.5)*.9)),f=new Bt(this.boltGeo,this.boltMat),l=u.clone().sub(a);f.position.copy(a),f.scale.set(1,l.length(),1),f.quaternion.setFromUnitVectors(new v(0,1,0),l.normalize()),o.add(f),a=u}let p=new Bt(this.discGeo,new ne({color:13616383,transparent:!0,opacity:.6,depthWrite:!1,blending:uo}));p.position.set(r.x,.07,r.z),p.scale.setScalar(n+.35),o.add(p),this.group.add(o),this.fxs.push({obj:o,t:0,dur:.38,tick:s=>{this.boltMat.opacity=s<.5?1:2*(1-s),p.material.opacity=.6*(1-s),o.children.forEach((u,f)=>{u!==p&&(u.visible=s<.35||(f+Math.floor(s*20))%2===0)})}})}cry(t,e){let n=new Bt(this.ringGeo,new ne({color:e,transparent:!0,opacity:.85,depthWrite:!1}));n.position.set(t.x,.08,t.z),this.group.add(n);let o=k.taunt.radius;this.fxs.push({obj:n,t:0,dur:.5,tick:r=>{n.scale.setScalar(.8+(o-.8)*r),n.material.opacity=.85*(1-r)}})}slain(t,e){let n=new Ie,o=new Bt(this.discGeo,new ne({color:e0,transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1,blending:uo})),r=new Bt(this.ringGeo,new ne({color:e,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1})),a=new Bt(this.ringGeo,new ne({color:e0,transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1}));o.position.set(t.x,.07,t.z),r.position.set(t.x,.08,t.z),a.position.set(t.x,.085,t.z),n.add(o,r,a),this.group.add(n),this.fxs.push({obj:n,t:0,dur:1.1,tick:p=>{let s=1-(1-p)*(1-p);o.scale.setScalar(1.5+3*s),o.material.opacity=.7*(1-p),r.scale.setScalar(1+9*s),r.material.opacity=.95*(1-p);let u=Math.max(0,p-.15)/.85;a.scale.setScalar(.5+7*(1-(1-u)*(1-u))),a.material.opacity=.8*(1-u)}})}colour(t){return t===we?i0:t===this.side?Gp:Wp}make(t){let e=t.side===we?2:t.side===this.side?0:1,n,o=[];if(t.kind==="banner")n=q9(e===0?Gp:Wp),n.scale.setScalar(Kf);else{let s=this.kinds[t.kind];if(!s)return null;n=ib(s.template),n.scale.setScalar(s.scale),o=s.clips,n.traverse(u=>{let f=u;f.isMesh&&(f.material=Y9(f.material,e))})}this.figs.size>70&&n.traverse(s=>{s.castShadow=!1}),this.group.add(n);let r=new Op(n),a={};for(let s of o){let u=r.clipAction(s);(s.name==="death"||s.name==="attack"||s.name==="hit")&&(u.setLoop(xf,1),u.clampWhenFinished=!0),a[s.name]=u}let p={root:n,mixer:r,actions:a,current:"",px:t.x,py:t.y,cx:t.x,cy:t.y,ry:t.side===0?Math.PI:0,struck:-1,dead:0,born:t.born,phase:t.id*.618%1,cried:-1,blowhole:n.getObjectByName("blowhole")??null};return qf(p,"idle"),this.figs.set(t.id,p),p}shoot(t,e){let n=new Bt(this.arrowGeo,this.arrowMat),o={m:n,from:this.at(t.x,t.y).setY(1),to:this.at(e.x,e.y).setY(.7),t:0};this.group.add(n),this.arrows.push(o)}paintNoDrop(t){let e=this.dropKind==="banner",n=Fe(this.dropKind),o=this.side,r=t.banners(o),a=e?t.awake:[],p=n||e?[]:t.open(o,"portal"),s=e||n?"":String(Math.floor(t.tick/(k.tickHz/2))),u=`${e}|${n}|${o}|${r.map(U=>U.id).join()}|${p.map(U=>U.id).join()}|${a.map(U=>`${U.x.toFixed(1)},${U.y.toFixed(1)}`).join()}|${t.map.id}|${s}`;if(u===this.noDropKey)return;this.noDropKey=u;let f=this.noDropCtx,l=t.map,c=l.width*Oo,d=l.length*Oo,y=4,m=l.width*y,h=l.length*y,b=this.noDropSmall??(this.noDropSmall=document.createElement("canvas"));b.width=m,b.height=h;let E=b.getContext("2d"),T=E.createImageData(m,h),g=this.dropKind;for(let U=0;U<h;U++)for(let V=0;V<m;V++){let O=(V+.5)/y,P=l.length-(U+.5)/y;if(!Cs(l,O,P)||t.canDrop(o,O,P,g))continue;let L=(V+U*m)*4;T.data[L]=176,T.data[L+1]=62,T.data[L+2]=40,T.data[L+3]=128}E.putImageData(T,0,0),f.clearRect(0,0,c,d),f.imageSmoothingEnabled=!0,f.drawImage(b,0,0,c,d);let x=(U,V,O)=>{f.beginPath(),f.arc(U*Oo,d-V*Oo,O*Oo,0,Math.PI*2)};if(f.setLineDash([1.6*Oo,1.1*Oo]),f.lineWidth=.3*Oo,f.strokeStyle="rgba(255,222,212,0.95)",e)for(let U of a)x(U.x,U.y,k.banner.monsterGap),f.stroke();else if(!n){for(let U of r)x(U.x,U.y,k.banner.radius),f.stroke();for(let U of p)x(U.x,U.y,U.r),f.stroke()}f.setLineDash([]),this.noDropMat.map.needsUpdate=!0}drawZones(t){let e=new Set;if(t)for(let r of[0,1])for(let a of t.banners(r)){e.add(a.id);let p=this.zones.get(a.id);if(!p){let u=k.banner.radius;p=new Bt(new un(2*u+.6,2*u+.6).rotateX(-Math.PI/2),this.zoneMats[r===this.side?0:1]),p.renderOrder=1,this.at(a.x,a.y,p.position).setY(.03),this.group.add(p),this.zones.set(a.id,p)}let s=(a.zoneUntil-t.tick)*Me;p.visible=s>3||Math.sin(this.time*12)>-.3}for(let[r,a]of this.zones)e.has(r)||(this.group.remove(a),a.geometry.dispose(),this.zones.delete(r));let n=new Set;if(t)for(let r of t.zones){if(t.tick>=r.until)continue;n.add(r.id);let a=this.spellZones.get(r.id);a||(a=new Bt(new un(2*r.r+.6,2*r.r+.6).rotateX(-Math.PI/2),this.spellMat(r.kind,r.side===this.side?0:1)),a.renderOrder=1,this.at(r.x,r.y,a.position).setY(.032),this.group.add(a),this.spellZones.set(r.id,a));let p=(r.until-t.tick)*Me,s=(t.tick-r.born)*Me;a.visible=p>2||Math.sin(this.time*12)>-.3,a.scale.setScalar(Math.min(1,.4+s*2.4)*(1+.03*Math.sin(this.time*(r.kind==="rage"?9:4)))),a.rotation.y=this.time*(r.kind==="portal"?.6:.25)}for(let[r,a]of this.spellZones)n.has(r)||(this.group.remove(a),a.geometry.dispose(),this.spellZones.delete(r));let o=t?t.heralds.filter(r=>r.tick>t.tick):[];for(;this.heralds.length<o.length;){let r=new Bt(new un(5,5).rotateX(-Math.PI/2),this.heraldMat);r.renderOrder=1,this.group.add(r),this.heralds.push(r)}this.heralds.forEach((r,a)=>{let p=o[a];r.visible=!!p,p&&(this.at(p.x,p.y,r.position).setY(.035),r.scale.setScalar(1+.12*Math.sin(this.time*6)))})}spellMat(t,e){let n=`${t}${e}`,o=this.spellMats.get(n);return o||(o=new ne({map:t8(t,k.spells[t].radius,e===0?"#3f8cff":"#ff4757"),transparent:!0,depthWrite:!1,toneMapped:!1}),this.spellMats.set(n,o)),o}get drawn(){return this.figs.size}},G9=i=>Math.min(1.3,Math.max(.8,i/.9));function qf(i,t,e=!1,n=1){let o=i.actions[t]??(t==="run"?i.actions.walk:void 0);if(!o||(o.timeScale=n,i.current===t&&!e))return;let r=i.actions[i.current];o.reset(),o.setEffectiveWeight(1),o.play(),(t==="idle"||t==="run")&&(o.time=i.phase*o.getClip().duration),r&&r!==o&&r.crossFadeTo(o,t==="attack"?.08:.18,!1),i.current=t}var W9=(i,t,e)=>{let n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+Math.sign(n)*Math.min(Math.abs(n),e)},o0=.7,Oo=12;function q9(i){let t=new Ie,e=new Ke({color:7029795,roughness:.8}),n=new Bt(new Yn(.06,.08,2.6,8).translate(0,1.3,0),e),o=new Bt(new Yn(.3,.38,.2,10).translate(0,.1,0),new Ke({color:9077624,roughness:.9})),r=new Bt(new Ki(.11,10,8).translate(0,2.66,0),new Ke({color:16765770,metalness:.6,roughness:.35})),a=new bi([new ot(0,0),new ot(1.15,0),new ot(.85,-.38),new ot(1.15,-.76),new ot(0,-.76)]),p=new Bt(new ca(a).translate(.06,2.5,0),new Ke({color:i,emissive:i,emissiveIntensity:.25,roughness:.7,side:fn}));for(let s of[n,o,r,p])s.castShadow=!0,t.add(s);return t}function Ob(i,t,e="rgba(255,255,255,0.9)"){let n=2*i+.6,o=512/n,r=document.createElement("canvas");r.width=r.height=512;let a=r.getContext("2d"),p=256;a.fillStyle=t,a.beginPath(),a.arc(p,p,i*o,0,Math.PI*2),a.fill(),a.setLineDash([1.6*o*Math.min(1,i/4),1.1*o*Math.min(1,i/4)]),a.lineWidth=.3*o,a.strokeStyle=e,a.beginPath(),a.arc(p,p,i*o-.15*o,0,Math.PI*2),a.stroke();let s=new so(r);return s.colorSpace=Ve,s.anisotropy=4,s}var K9={heal:"#5fe08a",rage:"#c06bff",portal:"#ffd34a"};function t8(i,t,e){let n=2*t+.6,o=512/n,r=document.createElement("canvas");r.width=r.height=512;let a=r.getContext("2d"),p=256,s=t*o,u=K9[i],f=a.createRadialGradient(p,p,s*.2,p,p,s);f.addColorStop(0,`${u}26`),f.addColorStop(.8,`${u}40`),f.addColorStop(1,`${u}70`),a.fillStyle=f,a.beginPath(),a.arc(p,p,s,0,Math.PI*2),a.fill(),a.lineWidth=.14*o,a.strokeStyle=e,a.beginPath(),a.arc(p,p,s-.1*o,0,Math.PI*2),a.stroke(),a.setLineDash([1.2*o,.8*o]),a.lineWidth=.26*o,a.strokeStyle=u,a.beginPath(),a.arc(p,p,s-.32*o,0,Math.PI*2),a.stroke(),a.setLineDash([]);let l=.6*o;a.globalAlpha=.55,a.fillStyle=u,a.strokeStyle=u,a.lineCap="round",a.lineJoin="round",i==="heal"?(a.fillRect(p-l*.28,p-l,l*.56,2*l),a.fillRect(p-l,p-l*.28,2*l,l*.56)):i==="rage"?(a.beginPath(),a.moveTo(p,p-l*1.1),a.bezierCurveTo(p+l*.9,p-l*.2,p+l*.8,p+l,p,p+l),a.bezierCurveTo(p-l*.8,p+l,p-l*.9,p-l*.1,p-l*.3,p-l*.5),a.lineTo(p-l*.1,p-l*.1),a.closePath(),a.fill()):(a.lineWidth=l*.3,a.beginPath(),a.moveTo(p,p-l),a.lineTo(p,p+l*.6),a.stroke(),a.beginPath(),a.moveTo(p-l*.6,p+l*.05),a.lineTo(p,p+l*.75),a.lineTo(p+l*.6,p+l*.05),a.stroke()),a.globalAlpha=1;let c=new so(r);return c.colorSpace=Ve,c.anisotropy=4,c}function e8(i,t){let e=new bi([new ot(-t,-t),new ot(t,-t),new ot(t,t),new ot(-t,t)]);return e.holes.push(new Wi(i.map(n=>new ot(n.x,-n.z)))),new ca(e).rotateX(-Math.PI/2)}function Be(...i){let t=2166136261;for(let e of i){let n=e|0;for(let o=0;o<4;o++)t^=n&255,t=Math.imul(t,16777619),n>>>=8}return t^=t>>>16,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}var gn=class{constructor(t){S(this,"s");this.s=t>>>0}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}int(t){return Math.floor(this.next()*t)}range(t,e){return t+(e-t)*this.next()}pick(t){return t[this.int(t.length)]}weighted(t){let e=0;for(let o of t)e+=o;let n=this.next()*e;for(let o=0;o<t.length;o++)if(n-=t[o],n<0)return o;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){let n=this.int(e+1);[t[e],t[n]]=[t[n],t[e]]}return t}};var Dt={tiers:["Bronze","Argent","Or","Platine","Diamant"],apex:"Gladiateur",divisions:["IV","III","II","I"],perDivision:100,base:[40,28,16,6,-6,-16,-28,-40],spread:400,maxShift:.5,placements:5,placementStart:400,placementFactor:2,xp:[200,170,140,120,100,80,70,60],perLevel:500,fakeSpread:150,fakeLevels:6,wait:[20,55]};function lo(i,t){if(t<Dt.placements)return{tier:null,div:"",pts:0};let e=Dt.tiers.length*Dt.divisions.length*Dt.perDivision;if(i>=e)return{tier:"Gladiateur",div:"",pts:i-e};let n=Math.max(0,Math.floor(i/Dt.perDivision));return{tier:Dt.tiers[Math.floor(n/Dt.divisions.length)],div:Dt.divisions[n%Dt.divisions.length],pts:i-n*Dt.perDivision}}var vo=i=>i.tier===null?"Non class\xE9":i.div?`${i.tier} ${i.div}`:i.tier;function el(i,t,e,n){let o=Dt.base[Math.min(Dt.base.length,Math.max(1,i))-1],r=Math.min(Dt.maxShift,Math.max(-Dt.maxShift,(e-t)/Dt.spread)),a=Math.round(o>0?o*(1+r):o*(1-r));return n?a*Dt.placementFactor:a}var vb=i=>Dt.xp[Math.min(Dt.xp.length,Math.max(1,i))-1];function Ko(i){let t=1+Math.floor(Math.max(0,i)/Dt.perLevel);return{level:t,into:Math.max(0,i)-(t-1)*Dt.perLevel,need:Dt.perLevel}}var n8=["Brann","Ysolde","Korgan","Ma\xEBlis","Torvik","Sigrun","Aldric","Nessa","Hrolf","Elyne","Bastien","Ombrelune","Garrick","Isaure","Tarek","Solveig","Kaelen","Mira","Orsolya","Dorian","Fenwick","Lysandre","Ragna","Cassien","Wyll","Tha\xEFs","Gunnar","Azilis","Morvan","Eirik","N\xE9va","Barnab\xE9","Iolanthe","Kjell","S\xE9l\xE9n\xE9","Hugues","Talia","Oswin","Yrsa","Gauvain","Frida","Ulric","Rosalind","Jory","Edwige","Varek","Liv","Anselme","Mordred","Ingrid","Corentin","Nymeria","Baldur","H\xE9lia","Rurik","Clothilde","Tybalt","Ondine","Sven","Aubr\xE9e"];function nl(i,t,e){let n=new gn(Be(i,23)).shuffle(n8.filter(o=>!t.includes(o)));return Array.from({length:Math.max(0,e-t.length)},(o,r)=>n[r%n.length])}var r0=(i,t,e)=>Math.max(0,Math.round(e+new gn(Be(i,29,t)).range(-Dt.fakeSpread,Dt.fakeSpread))),a0=(i,t,e)=>Math.max(1,Math.round(e+new gn(Be(i,31,t)).range(-Dt.fakeLevels,Dt.fakeLevels)));function Rb(i,t,e){let n=Math.max(1,t.length),o=t.reduce((s,u)=>s+u.points,0)/n,r=t.reduce((s,u)=>s+u.level,0)/n,a=[],p=[];for(let s=0;s<e;s++)a.push(s<t.length?t[s].points:r0(i,s,o)),p.push(s<t.length?t[s].level:a0(i,s,r));return{points:a,levels:p,mean:a.reduce((s,u)=>s+u,0)/e}}function Db(i){let t={};for(let e of i)e.human&&e.out&&(t[e.seat]=e.out.place);return t}var qp=(i,t)=>k.army.stepCost+k.army.stepRise*Math.max(0,(i-k.army.startPlaces)/k.army.step)-(t&&Ge(t,"thrifty")?1:0),Ge=(i,t)=>i.augments.includes(t),Kp=(i,t)=>Pr(t)-(i&&Fe(t)&&Ge(i,"cheapspells")?1:0),wi=(i,t)=>Vn.reduce((e,n)=>e+(t[n]??0)*Kp(i,n),0);function Ab(i,t){let e=[],n=nl(i,t,k.match.players);for(let o=0;o<k.match.players;o++){let r=o<t.length;e.push({seat:o,name:r?t[o]:n[o-t.length],human:r,hp:k.hp.start,gold:0,places:k.army.startPlaces,army:Jn(),up:Rr(),buys:[],offers:[],rerolls:0,augments:[],perks:{},picks:[],kept:0,heritage:!1,lostLast:!1,killedLast:0,beastsLast:0,out:null,lastOpp:null,here:!r,profile:zb(Be(i,7,o))})}return{seed:i,round:0,phase:"lobby",players:e,pairs:[],history:[]}}var ti=i=>i.players.filter(t=>!t.out);function Ib(i){let t=Math.min(1,Math.max(0,(i-1)/(k.lateRound-1)));return k.rarities.map(e=>e.early+(e.late-e.early)*t)}function p0(i){let t=new Map,e=(n,o)=>{t.set(n,(t.get(n)??0)+o)};for(let n of i.augments)for(let o of bo[n]?.tags??[])e(o,2);for(let n of i.buys)if(e(n.kind,1),n.perk)for(let o of yo[n.perk]?.tags??[])e(o,.5);for(let n of xe)i.army[n]>0&&e(n,i.army[n]*Pr(n)/4);for(let n of _o)i.army[n]>0&&e(n,i.army[n]);return t}function _b(i){let t=Xn.filter(e=>i.army[e]>0);return t.length===1?t[0]:null}function $b(i,t,e,n,o){let r=K.families,a=i.weighted([r.stat,r.trade,r.cond,r.effect]),p=Math.min(k.rarities.length-1,i.weighted(t)+n),s=y=>1+K.shopLean*(e.get(y)??0);if(a===0){let y=o??Xn[i.weighted(Xn.map(s))],m=Ri.filter(h=>h!=="range"||k.troops[y].rangeUpgradable);return{kind:y,stat:i.pick(m),rarity:p}}let u=a===1?"trade":a===2?"cond":"effect",f=Vs.filter(y=>y.family===u&&(!o||y.troops.includes(o)));f.length||(f=Vs.filter(y=>y.family===u));let l=f[i.weighted(f.map(y=>1+K.shopLean*y.tags.reduce((m,h)=>m+(e.get(h)??0),0)+(o?0:K.shopLean*y.troops.reduce((m,h)=>m+(e.get(h)??0),0)/y.troops.length)))],c=o&&l.troops.includes(o)?[o]:l.troops;return{kind:c[i.weighted(c.map(s))],perk:l.id,rarity:p}}function kb(i,t,e){let n=new gn(Be(i.seed,11,t.seat,i.round,e)),o=Ib(i.round),r=p0(t),a=t.lostLast&&Ge(t,"revenge")?1:0,p=Ge(t,"specialist")?_b(t):null,s=k.economy.offers+(Ge(t,"treasure")?K.treasure.offers:0),u=[];for(let f=0;f<s;f++)u.push($b(n,o,r,a,p));return u}var br=(i,t)=>Math.max(1,k.rarities[i.rarity].cost-(i.perk?0:1)-(t&&Ge(t,"specialist")&&_b(t)===i.kind?1:0));function Hb(i,t){if(t.stat)i.up[t.kind][t.stat]+=Pi(t);else if(t.perk){let e=yo[t.perk],n=Ai(t.rarity);if(e.up){for(let[o,r]of Object.entries(e.up.gain))i.up[t.kind][o]+=r*n;for(let[o,r]of Object.entries(e.up.loss))i.up[t.kind][o]+=r}if(!e.up||e.power!==void 0||e.id==="shortblade"||e.id==="lowflight"){let o=`${t.perk}:${t.kind}`;i.perks[o]=(i.perks[o]??0)+(e.power??1)*n}}}function Mb(i,t,e){Hb(i,t);let n={kind:t.kind,rarity:t.rarity};t.stat&&(n.stat=t.stat),t.perk&&(n.perk=t.perk),e!==void 0&&(n.paid=e),i.buys.push(n)}var Ca=i=>i.paid??0,s0=i=>i.paid!==void 0;function o8(i,t){let[e]=i.buys.splice(t,1);i.gold+=Ca(e),i.up=Rr(),i.perks={};for(let n of i.buys)Hb(i,n)}var i8=(i,t)=>K.sequences[Be(i,29)%K.sequences.length][t];function r8(i,t,e){let n=new gn(Be(i.seed,23,t.seat,i.round)),o=i8(i.seed,e),r=p0(t),a=Jl.filter(f=>f.tier===o&&!t.augments.includes(f.id)),p=f=>bo[f].tags.reduce((l,c)=>l+(r.get(c)??0),0),s=(f,l)=>{let c=f.filter(d=>!u.includes(d.id));return c.length?c[n.weighted(c.map(d=>l(d.id)))].id:null},u=[];if(r.size===0)for(let f of["lien","lien","chef","chef"]){let l=s(a.filter(c=>c.family===f),()=>1);l&&u.push(l)}else{for(let c=0;c<K.offers-1;c++){let d=s(a,y=>.25+p(y));d&&u.push(d)}let f=a.filter(c=>!u.includes(c.id)&&p(c.id)===0),l=s(f.length?f:a,()=>1);l&&u.push(l)}for(;u.length<K.offers;){let f=s(a,()=>1);if(!f)break;u.push(f)}return u}function a8(i,t){let e=new gn(Be(i.seed,31,t.seat,i.round)),n=[],o=zl.filter(r=>!t.augments.includes(r.id));for(;n.length<K.offers&&n.length<o.length;){let r=o.filter(a=>!n.includes(a.id));n.push(r[e.int(r.length)].id)}return n}function p8(i,t){let e=new gn(Be(i.seed,37,t.seat,i.round)),n=Ib(i.round),o=p0(t),r=Ge(t,"plunder")?K.plunder.offers:K.offers,a=Ge(t,"fineanvil")?1:0,p=[];for(let s=0;s<r;s++)p.push($b(e,n,o,a,null));return p}function s8(i,t){i.augments.push(t),t==="treasure"&&(i.gold+=K.treasure.gold)}var u0=(i,t)=>k.rarities[i].bonus*(k.statScale[t]??1),Pi=i=>i.stat?u0(i.rarity,i.stat):0;function Bb(i){if(i.phase!=="over"){i.round++,i.phase="prep";for(let t of ti(i))f0(i,t);i.pairs=u8(i);for(let t of ti(i))t.human||Qb(i,t)}}function f0(i,t){let e=Ge(t,"savings")?Math.min(K.savings.max,Math.floor(t.gold/K.savings.per)):0;t.gold+=k.economy.goldPerRound+(i.round===1?k.economy.startGold:0)+e+(Ge(t,"lakeloot")?1:0)+(Ge(t,"bounty")?Math.floor(t.killedLast/K.bounty):0)+(Ge(t,"plunder")?K.plunder.gold*t.beastsLast:0),t.rerolls=0,t.offers=kb(i,t,0);let n=K.rounds.indexOf(i.round);n>=0&&t.picks.push({id:`m${i.round}`,source:"moment",augments:r8(i,t,n)}),t.here=!t.human}function xn(i,t,e){let n=i.players[t];if(!n||n.out||i.phase!=="prep")return!1;switch(e.k){case"here":return n.here=!0,!0;case"buy":{let o=n.offers[e.slot];if(!o||n.gold<br(o,n))return!1;let r=br(o,n);return n.gold-=r,Mb(n,o,r),n.offers[e.slot]=null,!0}case"reroll":{let o=Ge(n,"rummage")&&n.rerolls===0?0:k.economy.reroll;return n.gold<o?!1:(n.gold-=o,n.rerolls++,n.offers=kb(i,n,n.rerolls),!0)}case"pick":{let o=n.picks.findIndex(p=>p.id===e.id);if(o<0||!Number.isInteger(e.i))return!1;let r=n.picks[o],a=(r.augments??r.offers??[]).length;return e.i<0||e.i>=a?!1:(r.augments?s8(n,r.augments[e.i]):Mb(n,r.offers[e.i]),n.picks.splice(o,1),!0)}case"sell":return!Number.isInteger(e.i)||e.i<0||e.i>=n.buys.length||!s0(n.buys[e.i])?!1:(o8(n,e.i),!0);case"cap":{let o=qp(n.places,n);return n.gold<o||n.places>=k.army.maxPlaces?!1:(n.gold-=o,n.places=Math.min(k.army.maxPlaces,n.places+k.army.step),!0)}case"army":{let o=Jn();for(let r of Vn){let a=e.army[r]??0;if(!Number.isInteger(a)||a<0)return!1;o[r]=ms.includes(r)?a:0}return wi(n,o)>n.places?!1:(n.army=o,!0)}}}function Fb(i){if(i.phase==="prep"){for(let t of ti(i))for(;t.picks.length;)xn(i,t.seat,{k:"pick",id:t.picks[0].id,i:0});i.phase="battle"}}function l0(i,t){let e=i.players[t],n={...e.army};if(Ge(e,"echo"))for(let p of _o)n[p]*=2;let o={};for(let p of e.augments)o[p]=!0;ti(i).every(p=>p.seat===t||p.hp>e.hp)&&Ge(e,"backtowall")&&ti(i).length>1&&(o.lowest=!0);let a={aug:o,shop:{...e.perks},kept:e.kept};return{counts:n,upgrades:e.up,perks:a}}function ts(i,t,e){if(e===1&&t.ghost)return null;let n=i.players[e===0?t.a:t.b];return n.human?n.seat:null}var Nb=i=>ho[Be(i.seed,19,i.round)%ho.length],Xb=(i,t)=>Be(i.seed,13,i.round,t);function es(i,t,e){let n=k.hp.damage,o=Math.min(n.max,Math.ceil(n.base+n.perRound*i+n.perPlace*t));return e&&Ge(e,"thickskin")?Math.max(1,o-K.thickskin):o}function ol(i,t,e,n,o){let r=o.damage&&e.winner!==-1&&e.winner!==n?es(i.round,e.places[e.winner],t):0;if(t.hp-=r,!o.rewards)return r;if(t.lostLast=r>0,t.killedLast=e.killed[n],t.beastsLast=e.beasts?.[n]??0,e.firstBeast===n)if(Ge(t,"heritage")&&!t.heritage&&(t.heritage=!0,t.kept+=k.monsters.beast.boon.value),K.beastRounds.includes(i.round)){let a=a8(i,t);a.length&&t.picks.push({id:`b${i.round}`,source:"beast",augments:a})}else t.picks.push({id:`b${i.round}`,source:"anvil",offers:p8(i,t)});return r}function Jb(i,t){if(i.phase!=="battle")throw new Error("resolve outside a battle");let e=[],n=ti(i).length;i.pairs.forEach((a,p)=>{let s=t[p],u=0,f=null,l=ol(i,i.players[a.a],s,0,{damage:!a.ghost,rewards:!0}),c=ol(i,i.players[a.b],s,1,{damage:!a.ghost,rewards:!a.ghost});l>0&&(f=a.a,u=l),c>0&&(f=a.b,u=c),i.players[a.a].lastOpp=a.b,a.ghost||(i.players[a.b].lastOpp=a.a),e.push({pair:a,result:s,damage:u,loser:f})});let o=ti(i).filter(a=>a.hp<=0).sort((a,p)=>p.hp-a.hp||a.seat-p.seat);o.forEach((a,p)=>{a.out={round:i.round,place:n-o.length+1+p}}),i.history.push(e);let r=ti(i);return r.length<=1||i.round>=k.maxRounds?(r.sort((a,p)=>p.hp-a.hp||a.seat-p.seat).forEach((a,p)=>{a.out={round:i.round,place:p+1}}),i.phase="over"):i.phase="prep",e}function ns(i){return[...i.players].sort((t,e)=>t.out&&e.out?t.out.place-e.out.place:t.out?1:e.out?-1:e.hp-t.hp||t.seat-e.seat)}function u8(i){let t=new gn(Be(i.seed,17,i.round)),e=ti(i).map(a=>a.seat),n=null,o=-1/0,r=1/0;for(let a=0;a<k.match.pairingTries;a++){let p=t.shuffle([...e]),s=[],u=0,f=t.next();for(let l=0;l+1<p.length;l+=2){let c=i.players[p[l]],d=i.players[p[l+1]];(c.lastOpp===d.seat||d.lastOpp===c.seat)&&u++,c.human&&d.human&&(f+=k.match.humanPairWeight),s.push({a:c.seat,b:d.seat,ghost:!1})}if(p.length%2){let l=p[p.length-1],c=p.slice(0,-1).filter(y=>y!==i.players[l].lastOpp),d=c.length?c[t.int(c.length)]:p[0];i.players[l].lastOpp===d&&u++,s.push({a:l,b:d,ghost:!0})}(u<r||u===r&&f>o)&&(n=s,o=f,r=u)}return n.map(a=>!a.ghost&&t.next()<.5?{a:a.b,b:a.a,ghost:!1}:a)}function os(i,t){for(let e of i.pairs){if(e.a===t)return{seat:e.b,ghost:e.ghost,side:0};if(e.b===t&&!e.ghost)return{seat:e.a,ghost:!1,side:1}}return null}var Ce=k.bots;function zb(i){let t=new gn(i),e=t.pick(Xn),n=t.pick(Xn.filter(d=>d!==e)),o={banner:0},r=t.range(.45,.65),a=t.range(.2,.35),p=Math.max(0,1-r-a),s=Xn.filter(d=>d!==e&&d!==n);for(let d of s)o[d]=p*t.range(0,1);let u=s.reduce((d,y)=>d+o[y],0)||1;for(let d of s)o[d]=o[d]/u*p;o[e]=r,o[n]=a;let f=t.range(-6,6),l=t.weighted(Ce.banners),c=[..._o];for(let d=c.length-1;d>0;d--){let y=t.int(d+1);[c[d],c[y]]=[c[y],c[d]]}return{weights:o,lane:f,banners:l,spells:c.slice(0,1+t.int(c.length))}}var f8={hp:1,damage:1,attackSpeed:1,moveSpeed:.45,range:.7},l8=(i,t)=>i.profile.weights[t]>=Ce.playedShare||i.army[t]>0&&i.profile.weights[t]>.05;function Qb(i,t){let e=t.seat;for(xn(i,e,{k:"here"});t.picks.length;){let s=t.picks[0],u=s.augments?s.augments.map(l=>c8(t,l)):s.offers.map(l=>Yb(t,l)),f=0;u.forEach((l,c)=>{l>u[f]&&(f=c)}),xn(i,e,{k:"pick",id:s.id,i:f})}let n=i.round<=Ce.capacityEagerUntil;n&&xn(i,e,{k:"cap"});let o=()=>{let s=0,u=t.offers.map((f,l)=>({o:f,i:l})).filter(f=>f.o&&l8(t,f.o.kind)).sort((f,l)=>jb(t,l.o)-jb(t,f.o)||f.i-l.i);for(let{o:f,i:l}of u)t.gold>=br(f,t)&&xn(i,e,{k:"buy",slot:l})&&s++;return s},r=o();for(;!r&&t.rerolls<Ce.rerollsPerRound&&t.gold>=k.economy.reroll+3;)xn(i,e,{k:"reroll"}),r=o();for(;!n&&t.gold>=qp(t.places,t)&&t.places<k.army.maxPlaces;)xn(i,e,{k:"cap"});let a=os(i,e),p=a?i.players[a.seat]:null;xn(i,e,{k:"army",army:h8(t,p?p.army:null)})}function Yb(i,t){let e=i.profile.weights[t.kind];if(t.stat)return e*f8[t.stat]*Pi(t);let n=yo[t.perk],o=Ai(t.rarity),r=n.family==="trade"?.35:n.family==="effect"?.3:.2,a=n.tags.find(p=>_o.includes(p));return e*r*o*(a&&!i.profile.spells.includes(a)?.2:1)}var jb=(i,t)=>Yb(i,t)/br(t,i);function c8(i,t){let e=bo[t].tags.map(n=>Xn.includes(n)?i.profile.weights[n]:_o.includes(n)?i.profile.spells.includes(n)?.25:-.1:.2).sort((n,o)=>o-n);return .15+e[0]+e.slice(1).reduce((n,o)=>n+o/3,0)}function h8(i,t=null){let e={},n=0;for(let s of Xn){let u=i.up[s],f=i.profile.weights[s],l=i.augments.filter(c=>bo[c]?.tags?.includes(s)).length;e[s]=f<.04?0:f*(1+1.2*(u.hp+u.damage+u.attackSpeed+.5*(u.moveSpeed+u.range)))*(1+.3*l),n+=e[s]}if(e.banner=0,t){let s=Ql(t),u=s?t.whale*k.troops.whale.places/s:0;if(u>0){let f=n*Math.min(.6,.9*u);e.archer+=f,n+=f}}let o=Jn();o.banner=Math.min(i.profile.banners??0,Math.floor(i.places/Ce.bannerPlaces));let r=i.profile.spells??[];if(r.length)for(let s=0;s<Math.floor(i.places/Ce.spellPlaces);s++)o[r[s%r.length]]++;let a=i.places-wi(i,o);for(let s of Xn)o[s]=Math.floor(a*e[s]/n/k.troops[s].places);let p=i.places-wi(i,o);for(;p>0;){let s=null,u=-1/0;for(let f of Xn){let l=k.troops[f].places;if(l>p||e[f]===0)continue;let c=a*e[f]/n-o[f]*l;c>u&&(u=c,s=f)}s||(s="barbarian"),o[s]++,p-=k.troops[s].places}return o}function d8(i){let t={...i,assassin:0,banner:0},e=xe.reduce((r,a)=>r+t[a],0),n=[],o=Jn();for(let r=0;r<e;r++){let a=null,p=-1/0;for(let s of xe){if(o[s]>=t[s])continue;let u=(r+1)*(t[s]/e)-o[s]+(s==="tank"||s==="whale"?.5:0);u>p&&(p=u,a=s)}n.push(a),o[a]++}for(let r=0;r<i.assassin;r++)n.push("assassin");return n}var il=class{constructor(t,e,n,o=0,r=!1){S(this,"side",t);S(this,"lane",o);S(this,"wave",[]);S(this,"push",[]);S(this,"reserve",[]);S(this,"queue",[]);S(this,"sent",{wave:!1,push:!1,reserve:!1});S(this,"waveAt");S(this,"next",0);S(this,"seq",0);S(this,"flagAt",-1e3);S(this,"follow",[]);S(this,"planted",[]);S(this,"cast",[]);S(this,"rng");S(this,"focus");S(this,"lean");S(this,"W",28);S(this,"L",40);S(this,"why","fight");S(this,"spell",null);this.rng=new gn(e);let a=d8(n),p=Ql({...n,banner:0,heal:0,rage:0,portal:0}),s=0;for(let u of a){let f=s/Math.max(1,p);!r&&f<Ce.firstWave?this.wave.push(u):f<(r?.5:Ce.firstWave+Ce.counter)?this.push.push(u):this.reserve.push(u),s+=k.troops[u].places}r&&(this.sent.wave=!0),this.waveAt=Ce.firstWaveTicks[0]+this.rng.int(Ce.firstWaveTicks[1]-Ce.firstWaveTicks[0]+1),this.focus=this.rng.next()<Ce.focusOne?"one":"split",this.lean=o>=0?1:-1}get bank(){return this.W/2+this.lean*Ce.bankLane}think(t){let e=this.side,n=1-e,o=t.tick;if(this.W=t.map.width,this.L=t.map.length,!this.sent.wave&&o>=this.waveAt&&(this.sent.wave=!0,this.formation(t,this.wave)),this.follow.length){let p=this.myBanner(t);p?(this.toZone(t,p,this.follow),this.follow=[]):o-this.flagAt>2*k.tickHz&&!this.queue.some(s=>s.kind==="banner")&&!this.spell&&(this.toShore(t,this.follow,null),this.follow=[])}if(o%5===0&&this.sent.wave){let p=null,s=!1,u=-1/0;for(let h of t.awake){let b=this.around(t,h.x,h.y,7),E=b[n]>0&&b[n]>=b[e],T=this.focus==="one"&&Math.abs(this.own(h.x,h.y)[0]-this.bank)<6,g=(E?100:0)+b[n]+b[e]*.5+(T?10:0);g>u&&(u=g,p=h,s=E)}let f=t.heralds[0]??null,l=this.fight(t),c=p&&(s||!f)?[p.x,p.y,"monster"]:f?[f.x,f.y,"herald"]:p?[p.x,p.y,"monster"]:l?[l[0],l[1],"fight"]:null,d=t.left(e);if(c&&d.portal>0&&!this.myBanner(t)&&!this.spell&&o-this.flagAt>3*k.tickHz&&this.own(c[0],c[1])[1]>this.L*k.half.reach+2&&(s||this.sent.push||t.time>20)){let[h,b]=this.own(c[0],c[1]);this.spell={kind:"portal",at:this.world(Kn(h,2,this.W-2),Math.max(this.L*k.half.reach+2,b-Ce.bannerBack))},this.flagAt=o,this.sent.push?this.sent.reserve||(this.sent.reserve=!0,this.follow=this.reserve):(this.sent.push=!0,this.follow=this.push)}!this.spell&&l&&(this.spell=this.boost(t,l,d)),c&&d.banner>0&&!this.myBanner(t)&&o-this.flagAt>3*k.tickHz&&this.own(c[0],c[1])[1]>this.shore(t)+Ce.bannerBeyond&&(c[2]!=="fight"||s||this.sent.push||t.time>20)&&this.plant(t,c[0],c[1],c[2])&&(this.flagAt=o,this.sent.push?!this.sent.reserve&&(s||c[2]!=="fight")&&(this.sent.reserve=!0,this.follow=this.reserve):(this.sent.push=!0,this.follow=this.push)),!this.sent.push&&(s||t.time>Ce.pushAfter)&&(this.sent.push=!0,this.send(t,this.push,c));let y=t.time,m=t.alive(e).length;!this.sent.reserve&&(this.sent.wave&&m===0&&!this.queue.length&&!this.follow.length||y>Ce.reserveAfter&&t.killed[e]<=t.killed[n]||y>k.battle.maxSeconds-15)&&(this.sent.reserve=!0,this.sent.push||(this.sent.push=!0,this.reserve=[...this.push,...this.reserve]),this.send(t,this.reserve,c))}if(this.spell&&o>=this.next){let{kind:p,at:s}=this.spell;if(this.spell=null,t.left(e)[p]>0&&t.canDrop(e,s[0],s[1],p))return this.next=o+Dr(p),this.cast.push({kind:p,x:s[0],y:s[1],tick:o}),[{tick:o,side:e,kind:p,x:s[0],y:s[1],seq:this.seq++}]}if(!this.queue.length||o<this.next)return[];let r=this.queue[0],a=this.findSpot(t,r);return a?(this.queue.shift(),this.next=o+Dr(r.kind),r.kind==="banner"&&this.planted.push({x:a[0],y:a[1],tick:o,why:this.why}),[{tick:o,side:e,kind:r.kind,x:a[0],y:a[1],seq:this.seq++}]):r.kind==="banner"?(this.queue.shift(),[]):(this.queue.push(this.queue.shift()),this.next=o+2,[])}boost(t,e,n){if(n.heal<=0&&n.rage<=0||t.open(this.side).some(c=>c.kind!=="portal"))return null;let o=0,r=0,a=0,p=0,s=0,u=0;for(let c of t.units){if(!c.alive||c.side!==this.side||c.anchored)continue;let d=c.x-e[0],y=c.y-e[1];d*d+y*y>64||(o+=c.x,r+=c.y,a++,p+=c.places,s+=c.hp,u+=c.maxHp)}if(!a)return null;let f=[o/a,r/a],l=this.around(t,e[0],e[1],8)[1-this.side];return n.heal>0&&p>=Ce.ragePlaces/2&&s<u*(1-Ce.healAt)?{kind:"heal",at:f}:n.rage>0&&p>=Ce.ragePlaces&&l>=Ce.ragePlaces/2?{kind:"rage",at:f}:null}send(t,e,n){let o=this.myBanner(t);if(o){this.toZone(t,o,e);return}let r=n?this.front(t,n[0],n[1]):null;r?this.behind(r,e):this.toShore(t,e,n)}front(t,e,n){let o=this.shore(t),r=null,a=100;for(let p of t.units){if(!p.alive||p.side!==this.side||p.flying||p.anchored)continue;let[s,u]=this.own(p.x,p.y);if(u<=o)continue;let f=(p.x-e)*(p.x-e)+(p.y-n)*(p.y-n);f<a&&(a=f,r=[s,u])}return r}behind(t,e){let o=0;for(let r of e){let a=Math.floor(o/6),p=o%6;this.queue.push({kind:r,ox:Kn(t[0]+(p-2.5)*.8,.5,this.W-.5),oy:t[1]-2.4-a*.8,far:!0}),o++}}myBanner(t){let e=t.open(this.side,"portal");if(e.length)return e[e.length-1];let n=t.banners(this.side);return n.length?{x:n[n.length-1].x,y:n[n.length-1].y,r:k.banner.radius}:null}around(t,e,n,o){let r=[0,0];for(let a of t.units){if(!a.alive||a.side>1)continue;let p=a.x-e,s=a.y-n;p*p+s*s<=o*o&&(r[a.side]+=a.places)}return r}fight(t){let e=t.alive(this.side),n=t.alive(1-this.side),o=0,r=0,a=0;for(let p of n)p.anchored||e.some(s=>(s.x-p.x)*(s.x-p.x)+(s.y-p.y)*(s.y-p.y)<64)&&(o+=p.x,r+=p.y,a++);return a?[o/a,r/a]:null}plant(t,e,n,o){let[r,a]=this.own(e,n),p=Math.max(this.shore(t)+1,a-Ce.bannerBack),s={kind:"banner",ox:Kn(r,1,this.W-1),oy:p};return this.findSpot(t,s)?(this.why=o,this.queue.unshift(s),!0):!1}formation(t,e){if(this.focus==="split"){let n=[],o=[];e.forEach((r,a)=>(a%2?o:n).push(r)),this.rows(t,n,this.W/2-Ce.bankLane+1),this.rows(t,o,this.W/2+Ce.bankLane-1)}else this.rows(t,e,this.bank)}rows(t,e,n){let o={tank:.5,whale:.5,barbarian:2,assassin:3,archer:5.5,druid:6.5,banner:.5},r=this.shore(t),a=new Map,p=n,s=Jn();for(let u of e)s[u]++;for(let u of e){let f=a.get(u)??0;a.set(u,f+1);let l=14,c=Math.floor(f/l),d=f%l,y=Math.min(l,s[u]-c*l),m=u==="tank"?1.7:u==="whale"?2.4:.9,h=p+(d-(y-1)/2)*m;u==="assassin"&&(h=(d%2?p+7:p-7)+Math.floor(d/2)*.8*(d%2?1:-1)),this.queue.push({kind:u,ox:Kn(h,1,this.W-1),oy:r-o[u]-c*1.1})}}toZone(t,e,n){let[o,r]=this.own(e.x,e.y),a=e.r*.75,p=0;for(let s of n){let u=1+Math.floor(p/8),f=p%8,l=u*.9>a?a:u*.9,c=Zb[f][0]*l,d=Zb[f][1]*l;this.queue.push({kind:s,ox:Kn(o+c,.5,this.W-.5),oy:r+d}),p++}}toShore(t,e,n){let o=1-this.side,r=0,a=0,p=0,s=0;for(let h of t.units){if(!h.alive||h.side!==o)continue;let[b]=this.own(h.x,h.y);r+=b,a++,h.ranged&&(p+=b,s++)}let u=this.W,f=n?this.own(n[0],n[1])[0]:a?r/a:u/2,l=Kn(f,4,u-4),c=this.shore(t)-.6,d=s?Kn(p/s,3,u-3):l,y=0,m=0;for(let h of e)h==="assassin"?(this.queue.push({kind:h,ox:Kn(d+(m%6-2.5)*.85,1,u-1),oy:c-Math.floor(m/6)*1.1}),m++):(this.queue.push({kind:h,ox:Kn(l+(y%10-4.5)*.85,1,u-1),oy:c-Math.floor(y/10)*1.1}),y++)}shore(t){let e=t.map.starts[this.side][0];return this.side===0?e[3]:this.L-e[1]}findSpot(t,e){let n=this.W,o=this.L;if(e.kind==="banner"&&t.ground)return this.nearest(t,e.ox,e.oy,e.kind,6);for(let[p,s]of y8){let[u,f]=this.world(Kn(e.ox+p,.5,n-.5),Kn(e.oy+s,.5,o-.5));if(t.canDrop(this.side,u,f,e.kind))return[u,f]}if(e.kind==="banner")return null;if(e.far){let p=this.nearest(t,e.ox,e.oy,e.kind,5);if(p)return p}let[r,a]=this.world(Kn(e.ox,.5,n-.5),Math.min(e.oy,this.shore(t)-.5));return t.canDrop(this.side,r,a,e.kind)?[r,a]:t.ground?this.nearest(t,e.ox,e.oy,e.kind,14):null}nearest(t,e,n,o,r){let a=r*r;for(let[p,s,u]of b8){if(u>a)break;let[f,l]=this.world(e+p,n+s);if(t.canDrop(this.side,f,l,o))return[f,l]}return null}world(t,e){return this.side===0?[t,e]:[this.W-t,this.L-e]}own(t,e){return this.side===0?[t,e]:[this.W-t,this.L-e]}},b8=(()=>{let i=[];for(let t=-28;t<=28;t++)for(let e=-28;e<=28;e++)e*e+t*t<=784&&i.push([e*.5,t*.5,(e*e+t*t)*.25]);return i.sort((t,e)=>t[2]-e[2]||t[1]-e[1]||t[0]-e[0])})(),y8=[[0,0],[1.5,0],[-1.5,0],[0,-1.5],[3,-1.5],[-3,-1.5],[0,-3.5],[5,-3],[-5,-3],[0,-6],[8,-6],[-8,-6]],Zb=[[0,1],[.7,.7],[-.7,.7],[1,0],[-1,0],[.7,-.7],[-.7,-.7],[0,-1]],Kn=(i,t,e)=>i<t?t:i>e?e:i;var c0=class{constructor(t,e,n,o=ho[0]){S(this,"controls",e);S(this,"seed",n);S(this,"b");S(this,"pilots",[null,null]);this.b=new vr(t,{map:o}),e.forEach((r,a)=>{if(r.bot)this.pilots[a]=new il(a,Be(n,a),t[a].counts,r.lane??0);else for(let p of r.drops)(r.stopFrom===void 0||p.tick<r.stopFrom)&&this.b.schedule({...p,side:a})})}drop(t){this.b.schedule(t)}step(){let t=this.b;if(!t.over){for(let e of[0,1]){let n=this.pilots[e];if(n)for(let o of n.think(t))t.schedule(o)}t.step()}}run(){for(;!this.b.over;)this.step();return this.b.result}},m8=()=>({drops:new Map,takeover:new Map});function is(i,t,e=m8()){let n=i.pairs[t],o=[l0(i,n.a),l0(i,n.b)],r=[0,1].map(a=>{let p=ts(i,n,a),s=i.players[a===0?n.a:n.b].profile.lane;return p===null?{bot:!0,lane:s}:{drops:e.drops.get(p)??[],stopFrom:e.takeover.get(p),lane:s}});return new c0(o,r,Xb(i,t),Nb(i))}var h0=new Set(["here","buy","reroll","cap","army","pick","sell"]),rl=class{constructor(){S(this,"holds",0);S(this,"holdMax",0);S(this,"lost",0);S(this,"frameMax",0);S(this,"slow",0);S(this,"replayMs",0);S(this,"holdFrom",-1);S(this,"holdLast",-1)}hold(t){(this.holdLast<0||t-this.holdLast>.1)&&(this.holds++,this.holdFrom=t),this.holdLast=t;let e=t-this.holdFrom;e>this.holdMax&&(this.holdMax=e)}frame(t,e){let n=t*1e3;n>this.frameMax&&(this.frameMax=n),n>50&&this.slow++,e&&(this.lost+=t)}sum(){let t=(e,n=100)=>Math.round(e*n)/n;return{holds:this.holds,holdMax:t(this.holdMax),lost:t(this.lost),frameMax:Math.round(this.frameMax),slow:this.slow,replayMs:Math.round(this.replayMs)}}},al=class{constructor(t,e=null,n=t.solo?2:k.net.delayTicks){S(this,"auth",t);S(this,"duelFactory",e);S(this,"delayTicks",n);S(this,"m");S(this,"stage","wait");S(this,"fight",null);S(this,"mySide",0);S(this,"oppSeat",null);S(this,"ghost",!1);S(this,"last",null);S(this,"myDrops",[]);S(this,"link","ok");S(this,"smooth",!1);S(this,"replayBudgetMs",1/0);S(this,"stats",new rl);S(this,"watchers",null);S(this,"queue",null);S(this,"watching",null);S(this,"watches",new Map);S(this,"announce",null);S(this,"oppLost",!1);S(this,"lastDown",-1/0);S(this,"pairIndex",-1);S(this,"refought",!1);S(this,"base",null);S(this,"seen","");S(this,"dropSeq",0);S(this,"posted",!1);S(this,"duel",null);S(this,"oppDrops",[]);S(this,"replay",null);S(this,"endSent",!1);S(this,"readyNow",!1);S(this,"next",null);S(this,"nextBase",null);S(this,"nextSeen","");S(this,"myEndAt",-1);S(this,"readyLater",!1);this.m=Ab(t.seed,t.humans)}get me(){return this.auth.mySeat}get player(){return this.m.players[this.me]}get round(){return this.m.round}get alive(){return!this.player.out}get preparing(){return this.stage==="prep"&&this.alive||this.next!==null}get prepMatch(){return this.next??this.m}get mine(){return this.prepMatch.players[this.me]}get prepRound(){return this.prepMatch.round}get prepEnd(){return Sn(this.prepRound)}get stageEnd(){let t=this.m.round;switch(this.stage){case"wait":return $o(1);case"prep":return Sn(t);case"battle":return Mi(t);case"results":return $o(t+1);default:return 1/0}}get myBattleOver(){return!this.fight||this.fight.b.over}update(){let t=this.auth.clock();this.checkLink(t),this.rebuildNext();for(let e=0;e<400;e++){let n=this.m.round;if(this.stage==="over")return;if(this.stage==="wait"||this.stage==="results"){if(this.m.phase==="over"){this.stage="over";return}if(t<$o(n+1))return;this.beginRound();continue}if(this.stage==="prep"){if(this.rebuild(),this.readyLater&&this.alive&&t>=$o(n)+k.net.readyDelay&&(this.readyLater=!1,this.auth.post(n,"ready",{k:"ready"})),t<Sn(n)||this.auth.syncedTo()<Sn(n))return;this.rebuild(!0,!0),Fb(this.m),this.readyNow=!1,this.readyLater=!1,this.stage="battle",this.setupFight(t<Mi(n),t);continue}this.stepFight(t),this.myEndAt<0&&this.fight?.b.over&&(this.myEndAt=t,this.openNext()),this.stepOthers(t);let o=this.auth.solo?Mi(n):gs(n)+.3;if(!(!this.auth.solo&&this.auth.confirmed().some(a=>a.kind==="end"&&a.round===n))&&(t<o||this.auth.syncedTo()<(this.auth.solo?0:gs(n)))){this.earlyEnd(t);return}if(!this.finishRound())return}}do(t){if(this.next){let n=structuredClone(this.next);return xn(n,this.me,t)?(this.auth.post(this.next.round,t.k,t),this.rebuildNext(!0),!0):!1}if(this.stage!=="prep"||!this.alive)return!1;let e=structuredClone(this.m);return xn(e,this.me,t)?(this.auth.post(this.m.round,t.k,t),this.rebuild(!0),!0):!1}canDrop(t,e,n){let o=this.fight;return!!o&&!o.b.over&&this.stage==="battle"&&o.b.canDrop(this.mySide,e,n,t)}get counting(){return this.stage==="battle"?Math.max(0,Lr(this.m.round)-this.auth.clock()):0}drop(t,e,n){let o=this.fight;if(!o||o.b.over||this.stage!=="battle"||this.link!=="ok"||this.counting>0||o.b.left(this.mySide)[t]<=0||!o.b.canDrop(this.mySide,e,n,t))return!1;let r=this.duel??this.announce,p={tick:Math.max(o.b.tick+this.delayTicks,r?r.promised()+1:0),side:this.mySide,kind:t,x:e,y:n,seq:this.dropSeq++};return o.drop(p),this.myDrops.push(p),this.duel?.send(p),this.announce?.send(p),!0}alpha(){let e=(this.watching!==null?this.watches.get(this.watching)?.fight:null)??this.fight;if(!e||e.b.over||this.stage!=="battle")return 1;let n=(this.auth.clock()-Lr(this.m.round))/Me;return Math.max(0,Math.min(1,n-e.b.tick+1))}beginRound(){let t=!!this.next&&this.readyNow;this.next=null,this.nextBase=null,this.nextSeen="",this.myEndAt=-1,Bb(this.m),this.base=structuredClone(this.m),this.seen="",this.stage="prep",this.fight=null,this.oppSeat=null,this.ghost=!1,this.myDrops.length=0,this.dropSeq=0,this.posted=!1,this.oppDrops=[],this.endSent=!1,this.readyNow=t,this.readyLater=t,this.replay=null,this.pairIndex=-1,this.refought=!1,this.oppLost=!1,this.duel?.close(),this.duel=null,this.closeWatches(),!this.auth.solo&&this.alive&&this.m.round>1&&this.auth.post(this.m.round,"stats",{round:this.m.round-1,...this.stats.sum()}),this.stats=new rl,this.alive&&this.auth.clock()<Sn(this.m.round)&&this.auth.post(this.m.round,"here",{k:"here"}),this.rebuild(!0)}openNext(){let t=this.fight,e=t?.b.result;if(this.auth.solo||!t||!e||!this.alive||this.m.round>=k.maxRounds||this.pairIndex<0)return;let n=this.m.pairs[this.pairIndex].ghost,o=!n&&e.winner!==-1&&e.winner!==this.mySide?es(this.m.round,e.places[e.winner],this.player):0;if(this.player.hp-o<=0)return;let r=structuredClone(this.m),a=r.players[this.me];ol(r,a,e,this.mySide,{damage:!n,rewards:!0}),r.round++,r.phase="prep",r.pairs=[],f0(r,a),this.nextBase=r,this.nextSeen="",this.rebuildNext(!0)}rebuildNext(t=!1){if(!this.nextBase)return;let e=this.nextBase.round,n=u=>u.round===e&&u.seat===this.me&&h0.has(u.kind),o=this.auth.confirmed().filter(n),r=this.auth.pending().filter(n),a=`${o.length}/${r.length}/${o.at(-1)?.seq??-1}`;if(!t&&a===this.nextSeen)return;this.nextSeen=a;let p=structuredClone(this.nextBase),s=new Set;for(let u of[...o,...r])s.has(u.cid)||(s.add(u.cid),xn(p,this.me,u.data));this.next=p}rebuild(t=!1,e=!1){if(!this.base)return;let n=this.m.round,o=e?[]:this.auth.pending().filter(u=>u.round===n&&h0.has(u.kind)),r=this.auth.confirmed().filter(u=>u.round===n&&h0.has(u.kind)),a=`${r.length}/${o.length}/${r.at(-1)?.seq??-1}`;if(!t&&a===this.seen)return;this.seen=a;let p=structuredClone(this.base),s=new Set;for(let u of[...r,...o])s.has(u.cid)||(s.add(u.cid),xn(p,u.seat,u.data));this.m=p}setupFight(t,e){let n=this.alive?this.m.pairs.findIndex(s=>s.a===this.me||s.b===this.me&&!s.ghost):-1;if(this.followOthers(n),n<0)return;let o=this.m.pairs[n];if(this.mySide=o.a===this.me?0:1,this.oppSeat=this.mySide===0?o.b:o.a,this.ghost=o.ghost,this.pairIndex=n,!t||!this.player.here||!this.auth.solo&&e>Sn(this.m.round)+k.net.cutSeconds-.5)return;let r={drops:new Map([[this.me,[]]]),takeover:new Map},a=this.m.players[this.oppSeat];!o.ghost&&a.human&&a.here?(r.drops.set(a.seat,[]),this.duel=this.duelFactory?this.duelFactory(this.m.round,this.me,a.seat,this.mySide):null,this.duel||r.takeover.set(a.seat,0)):this.watchers&&(this.announce=this.watchers.announce(this.m.round,this.me,this.oppSeat)),this.fight=is(this.m,n,r)}checkLink(t){if(this.auth.solo)return;let e=t-this.auth.syncedTo(),n=this.stage==="battle"?this.duel:null,o=e>k.net.lostSeconds,r=!!n&&!n.linked();(o||r)&&(this.lastDown=t);let p=(this.stage==="battle"&&this.fight&&!this.fight.b.over?r:o||r)?"lost":"ok";this.stage==="battle"&&this.alive&&!this.fight&&this.oppSeat!==null&&(p="away"),n&&(n.cutMe()!==null?p="cut":this.fight&&!this.fight.b.over&&n.gone()===null&&n.silence()>k.net.cutSeconds&&(!o&&!r&&e<n.silence()-1&&this.lastDown<t-n.silence()?n.cutOff():p="lost")),this.link=p,this.oppLost=!!n&&n.gone()!==null}stepFight(t){let e=this.duel?.cutMe()??null;e!==null&&!this.refought&&this.refight(e);let n=this.fight;if(!n)return;let o=Math.min(wr,Math.floor((t-Lr(this.m.round))/Me)),r=1-this.mySide,a=o-n.b.tick,p=a>3&&this.smooth?n.b.tick+2+Math.ceil(a/4):o;for(this.duel&&this.duel.frontier(Math.max(0,o)),this.announce?.at(Math.max(0,o));!n.b.over&&n.b.tick<p;){if(this.duel){if(this.oppDrops.push(...this.duel.take()),n.b.tick>=this.duel.frontier(n.b.tick)){this.stats.hold(t);break}let s=this.duel.gone(),u=this.oppDrops.filter(f=>f.tick<=n.b.tick);this.oppDrops=this.oppDrops.filter(f=>f.tick>n.b.tick);for(let f of u)(s===null||f.tick<s)&&n.drop({...f,side:r})}n.step()}n.b.over&&!this.posted&&this.postDrops()}refight(t){this.refought=!0;let e=this.fight,n=this.duel;if(!e||!n||this.oppSeat===null||this.pairIndex<0)return;let o=this.myDrops.filter(p=>p.tick<t);this.myDrops.splice(0,this.myDrops.length,...o);let r=is(this.m,this.pairIndex,{drops:new Map([[this.me,o],[this.oppSeat,[]]]),takeover:new Map([[this.me,t]])});n.take();let a=1-this.mySide;for(let p of n.seen())r.drop({...p,side:a});this.oppDrops=[],this.fight=r}postDrops(){this.posted=!0,this.auth.post(this.m.round,"drops",{drops:this.myDrops});let t=this.duel?.gone();this.duel&&t!==null&&t!==void 0&&this.oppSeat!==null&&this.auth.post(this.m.round,"takeover",{seat:this.oppSeat,tick:t,drops:this.duel.seen().filter(e=>e.tick<t)})}followOthers(t){if(!this.watchers)return;let e=this.m.round;this.m.pairs.forEach((n,o)=>{if(o===t)return;let r=[ts(this.m,n,0),ts(this.m,n,1)],a=r[0]===null&&r[1]===null?null:this.watchers.watch(e,r,[r[0]===null||this.m.players[r[0]].here,r[1]===null||this.m.players[r[1]].here]);this.watches.set(o,{link:a,fight:null,seats:r})})}stepOthers(t){if(!this.watches.size||!this.myBattleOver)return;let e=Math.min(wr,Math.floor((t-Lr(this.m.round))/Me)),n=performance.now()+this.replayBudgetMs;for(let[o,r]of this.watches){if(!r.fight){let s=new Map;for(let u of r.seats)u!==null&&s.set(u,[]);r.fight=is(this.m,o,{drops:s,takeover:new Map})}let a=r.fight;if(r.link)for(let s of[0,1])for(let u of r.link.take(s))a.drop({...u,side:s});let p=Math.min(e,r.link?r.link.frontier():1/0);for(;!a.b.over&&a.b.tick<p;)if(a.step(),(a.b.tick&15)===0&&performance.now()>n)return}}shown(){let t=this.watching!==null?this.watches.get(this.watching):void 0;if(t?.fight){let e=this.m.pairs[this.watching];return{b:t.fight.b,side:0,seats:[e.a,e.b],watched:!0}}return!this.fight||this.oppSeat===null?null:{b:this.fight.b,side:this.mySide,seats:this.mySide===0?[this.me,this.oppSeat]:[this.oppSeat,this.me],watched:!1}}duels(){return this.m.pairs.map((t,e)=>{let n=t.a===this.me||t.b===this.me&&!t.ghost,o=n?this.fight?.b:this.watches.get(e)?.fight?.b,r=o?.result??null,a=r&&r.winner!==-1&&!t.ghost?r.winner===0?t.b:t.a:null;return{pair:e,seats:[t.a,t.b],ghost:t.ghost,mine:n,watched:this.watching===e,killed:o?[o.killed[0],o.killed[1]]:null,over:!!r,loser:a,damage:a!==null&&r?es(this.m.round,r.places[r.winner],this.m.players[a]):0}})}myFought(){let t=this.fight?.b.result;if(!t||this.pairIndex<0)return null;let e=this.m.pairs[this.pairIndex],n=e.ghost||t.winner===-1?null:t.winner===0?e.b:e.a;return{pair:e,result:t,loser:n,damage:n===null?0:es(this.m.round,t.places[t.winner],this.m.players[n])}}watch(t){this.watching=t!==null&&this.watches.has(t)&&this.myBattleOver?t:null}closeWatches(){for(let t of this.watches.values())t.link?.close();this.watches.clear(),this.watching=null,this.announce?.close(),this.announce=null}ready(){if(this.next){this.readyNow=!0;return}if(!(this.stage!=="prep"||!this.alive)){if(this.auth.solo){this.auth.skip?.(this.stageEnd);return}this.readyNow||(this.readyNow=!0,this.auth.post(this.m.round,"ready",{k:"ready"}))}}inputsKey(t){return this.auth.confirmed().filter(e=>e.round===t&&(e.kind==="drops"||e.kind==="takeover")).map(e=>e.seq).join(",")}earlyEnd(t){let e=this.m.round;if(this.auth.solo||this.endSent||this.fight&&!this.fight.b.over)return;let n=this.auth.confirmed().filter(a=>a.round===e),o=new Set(n.filter(a=>a.kind==="drops").map(a=>a.seat));if(!n.some(a=>a.kind==="here")||n.some(a=>a.kind==="here"&&!o.has(a.seat))||!this.playAll())return;let r=Math.max(...this.replay.fights.map(a=>a.b.result.tick));t<Lr(e)+r*Me+.5||(this.endSent=!0,this.auth.post(e,"end",{k:"end"}))}playAll(){let t=this.inputsKey(this.m.round);if(!this.replay||this.replay.key!==t){let n=this.inputsOf(this.m.round);this.replay={fights:this.m.pairs.map((o,r)=>is(this.m,r,n)),t0:performance.now(),key:t}}let e=performance.now()+this.replayBudgetMs;for(let n of this.replay.fights)for(;!n.b.over;)if(n.step(),(n.b.tick&15)===0&&performance.now()>e)return!1;return!0}finishRound(){let t=this.fight;if(t&&!t.b.over)for(;!t.b.over;)t.step();return t&&!this.posted&&this.postDrops(),this.duel?.close(),this.duel=null,this.closeWatches(),this.playAll()?(this.stats.replayMs=performance.now()-this.replay.t0,this.last=Jb(this.m,this.replay.fights.map(e=>e.b.result)),this.replay=null,this.stage=this.m.phase==="over"?"over":"results",!0):!1}inputsOf(t){let e={drops:new Map,takeover:new Map},n=new Map,o=this.auth.confirmed().filter(a=>a.round===t),r=a=>{let p=this.m.pairs.find(s=>!s.ghost&&(s.a===a||s.b===a));return p?p.a===a?p.b:p.a:null};for(let a of o)if(a.kind==="drops"&&!e.drops.has(a.seat)&&e.drops.set(a.seat,a.data.drops),a.kind==="takeover"){let p=a.data;if(r(p.seat)!==a.seat||e.takeover.has(p.seat)||e.takeover.has(a.seat))continue;e.takeover.set(p.seat,p.tick),n.set(p.seat,p.drops)}for(let[a,p]of n)e.drops.set(a,p);return this.auth.solo&&this.fight&&!e.drops.has(this.me)&&e.drops.set(this.me,[...this.myDrops]),e}};var d0=(i,t)=>i("autobattler_profile",{p_secret:t}),Gb=(i,t,e,n)=>i("autobattler_profile_save",{p_secret:t,p_name:e,p_avatar:n}),pl=(i,t,e="")=>i("autobattler_party",{p_secret:t,p_code:e||null}),Wb=(i,t,e)=>i("autobattler_party_view",{p_secret:t,p_party:e}),yr=(i,t,e,n,o=null)=>i("autobattler_party_set",{p_secret:t,p_party:e,p_what:n,p_mode:o}),qb=(i,t,e,n,o)=>i("autobattler_finish",{p_secret:t,p_game:e,p_places:n,p_army:o}),Kb=(i,t)=>i("autobattler_history",{p_secret:t});var g8={Bronze:["#b8733f","#5e3519"],Argent:["#b9c4d4","#5c6778"],Or:["#ffd23f","#8a6a07"],Platine:["#3fd1c0","#13685f"],Diamant:["#7fb2ff","#2a4f9e"],Gladiateur:["#ff5c6c","#7a1622"]};function Ro(i,t=64,e=!0){if(i.tier===null)return`<svg class="emb" width="${t}" height="${t}" viewBox="0 0 64 64" aria-hidden="true"><path d="M16 15 H48 V34 C48 43 40 49 32 53 C24 49 16 43 16 34Z" fill="rgba(13,18,28,.6)" stroke="#5b6780" stroke-width="3" stroke-dasharray="5 4"/><text x="32" y="39" text-anchor="middle" font-family="Bungee" font-size="16" fill="#5b6780">?</text></svg>`;let n=[...Dt.tiers,Dt.apex].indexOf(i.tier),[o,r]=g8[i.tier],a=1+(n>=1?1:0)+(n>=3?1:0),p=a===1?[32]:a===2?[26,38]:[22,32,42],s=n<3?"":`<path d="M14 30 L2 22 L6 38 L16 44Z M50 30 L62 22 L58 38 L48 44Z" fill="${o}" stroke="${r}" stroke-width="2"/>`,u=n<5?"":'<path d="M14 30 L4 14 L14 20 L20 8 L26 18 L32 4 L38 18 L44 8 L50 20 L60 14 L50 30Z" fill="#ffd23f" stroke="#8a6a07" stroke-width="2"/>',f=p.map(c=>`<path d="M${c} 26 L${c+5} 33 L${c} 41 L${c-5} 33Z" fill="#fff" opacity=".9"/>`).join(""),l=e&&i.div?`<text x="32" y="62" text-anchor="middle" font-family="Bungee" font-size="11" fill="#fff" stroke="${r}" stroke-width="3" paint-order="stroke">${i.div}</text>`:"";return`<svg class="emb" width="${t}" height="${t}" viewBox="0 0 64 64" aria-hidden="true">${s}${u}<path d="M12 12 H52 V34 C52 46 42 53 32 58 C22 53 12 46 12 34Z" fill="${r}"/><path d="M16 15 H48 V34 C48 43 40 49 32 53 C24 49 16 43 16 34Z" fill="${o}"/>${f}${l}</svg>`}var ei=(i,t="")=>`<span class="pbar${t?` ${t}`:""}"><i style="width:${Math.max(0,Math.min(100,i))}%"></i></span>`,rs=i=>i.tier==="Gladiateur"?`<em>${i.pts}</em> pts`:`<em>${i.pts}</em> / ${Dt.perDivision} pts`,ty=i=>i>=0?`+${i}`:`\u2212${-i}`;function T8(i){return xe.filter(t=>i[t]>0).sort((t,e)=>i[e]*k.troops[e].places-i[t]*k.troops[t].places).slice(0,2)}var sl=class{constructor(t,e,n){S(this,"rpc",e);S(this,"key",n);S(this,"mode");S(this,"lobby");S(this,"placements");S(this,"result",null);S(this,"sent","");S(this,"busy",!1);S(this,"game");this.mode=t.mode??"normale";let o=[...t.players].sort((r,a)=>r.seat-a.seat);this.placements=o.map(r=>r.placements??0),this.lobby=Rb(t.seed??0,o.map(r=>({points:r.points??Dt.placementStart,level:r.level??1,placements:r.placements??0})),k.match.players),this.game=t.id}tick(t,e){let n=Db(t.players),o=JSON.stringify(n);o===this.sent||this.busy||!Object.keys(n).length||(this.busy=!0,qb(this.rpc,this.key,this.game,n,T8(t.players[e].army)).then(r=>{this.sent=o,r&&(this.result=r)},()=>{}).finally(()=>{this.busy=!1}))}deltaOf(t,e,n){let o=n&&(this.placements[t]??Dt.placements)<Dt.placements;return el(e,this.lobby.points[t],this.lobby.mean,o)}},E8=i=>i===1?"1re place":`${i}e place`;function ey(i,t,e,n){let o=ns(i),r=i.players[t].out?.place??o.findIndex(u=>u.seat===t)+1,a=o.map((u,f)=>{let l=u.out?.place,c=u.human&&(e.placements[u.seat]??Dt.placements)<Dt.placements,d=l?e.mode==="classee"&&!c?(()=>{let y=u.seat===t&&e.result?e.result.delta:e.deltaOf(u.seat,l,u.human);return`<span class="ed ${y>0?"w":"l"}">${ty(y)}</span>`})():u.seat===t?`<span class="ed xp">+${Dt.xp[l-1]} XP</span>`:"<span></span>":'<span class="ed">\u2014</span>';return`<div class="erow${u.seat===t?" me":""}"><b>${l??f+1}</b>${fl(ul(u))}<span class="nm">${jt(u.name)}</span>${d}</div>`}).join(""),p=r<=4,s=n?`<button class="btn big" data-do="home">Retour</button><button class="go small" data-do="again">${ct("replay")}<span>Rejouer</span></button>`:'<button class="btn big" data-do="spectate">Regarder la fin</button><button class="go small" data-do="home"><span>Retour</span></button>';return`<div class="dim"></div><div class="winwrap over c"><div class="wt ${p?"yel":"steel"}">${E8(r)}</div><div class="win">
    <div class="mtag">${e.mode==="classee"?"Class\xE9e":"Normale"}</div>
    <div class="cend"><div class="elist">${a}</div>${V8(e,r)}</div>
    <div class="eacts">${s}</div></div></div>`}function V8(i,t){let e=i.result;if(!e)return'<div class="emine wait"><span class="spin"></span><small>R\xE9sultat\u2026</small></div>';let n=e.levelBefore,o=Ko(e.profile.xp),r=`<div class="xpl">${ct("star","ic")}<span>+${e.xp} XP</span><span class="mx">Niv. ${o.level}</span></div>`;if(i.mode==="normale"){let c=o.level>n;return`<div class="emine ${c?"lvlup":""}">${c?'<small class="kick">Niveau sup\xE9rieur</small>':""}<span class="lvbig"><small>Niv.</small><b>${o.level}</b></span>
      ${ei(100*o.into/o.need,"xp")}<span class="mx"><em>+${e.xp}</em> XP \xB7 ${o.into} / ${o.need}</span></div>`}let a=lo(e.pointsBefore,e.placementsBefore),p=lo(e.pointsAfter,e.placementsBefore+1);if(p.tier===null){let c=e.placementsBefore+1;return`<div class="emine">${Ro(p,54)}<b>Non class\xE9</b><small>Placement <em>${c}</em> / ${Dt.placements}</small>${r}</div>`}if(a.tier===null)return`<div class="emine up placed"><small class="kick">Placement termin\xE9</small>${Ro(p,60)}<b>${vo(p)}</b>${p.tier==="Gladiateur"?"":ei(p.pts,"gain")}<span class="mx">${rs(p)}</span>${r}</div>`;let s=c=>c.tier==="Gladiateur"?99:Dt.tiers.indexOf(c.tier)*4+Dt.divisions.indexOf(c.div),u=s(p)-s(a),f=u>0?"up":u<0?"down":e.delta>=0?"gain":"loss",l=u>0?'<small class="kick">Promotion</small>':u<0?'<small class="kick red">R\xE9trogradation</small>':"";return`<div class="emine ${f}">${l}${Ro(p,54)}<b>${vo(p)}</b>${p.tier==="Gladiateur"?"":ei(p.pts,e.delta>=0?"gain":"loss")}
    <span class="mx"><em>${ty(e.delta)}</em> pts \xB7 ${p.tier==="Gladiateur"?`${p.pts} pts`:`${p.pts} / ${Dt.perDivision}`}</span>${r}</div>`}var as=0,b0=()=>{let i=document.getElementById("toast");return i||(i=document.createElement("div"),i.id="toast",i.setAttribute("role","status"),i.hidden=!0,document.body.appendChild(i)),i},y0={show(i,t=2.6){let e=b0();e.textContent=i,e.hidden=!1,as=t},hide(){as=0,b0().hidden=!0},tick(i){as>0&&(as-=i,as<=0&&(b0().hidden=!0))}},$U=`<button class="x" data-do="close" aria-label="Fermer"><span class="face">${ct("close")}</span></button>`;var ny="./assets/druidesse-RZQML5EB.webp";var oy="./assets/baleine-VRPXIB3D.webp";var to={barbarian:"soldat",archer:"archere",tank:"veteran",assassin:"pillard",druid:"druidesse",whale:"baleine",banner:"etendard",heal:"sort-soin",rage:"sort-rage",portal:"sort-pose"},P8=`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b6b7a"/><stop offset="1" stop-color="#2c3540"/></linearGradient></defs>
  <rect width="64" height="64" fill="url(#s)"/><rect x="18" y="6" width="4.5" height="56" rx="2" fill="#6b4423" stroke="#2a1709" stroke-width="1.6"/>
  <circle cx="20.25" cy="7" r="3.6" fill="#ffd34a" stroke="#2a1709" stroke-width="1.6"/>
  <path d="M22.5 11 H52 L44 21.5 L52 32 H22.5 Z" fill="#3f8cff" stroke="#2a1709" stroke-width="2" stroke-linejoin="round"/>
  <path d="M27 16 H43" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
  <ellipse cx="20.25" cy="60" rx="10" ry="3" fill="#8a8378" stroke="#2a1709" stroke-width="1.6"/></svg>`)}`,m0=(i,t,e)=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><radialGradient id="g" cx=".5" cy=".42" r=".75"><stop offset="0" stop-color="${i}"/><stop offset="1" stop-color="${t}"/></radialGradient></defs>
  <rect width="64" height="64" fill="url(#g)"/><ellipse cx="32" cy="52" rx="22" ry="6.5" fill="#000" opacity=".22"/>${e}</svg>`)}`,ll='stroke="#2a1709" stroke-width="2.6" stroke-linejoin="round"',L8={"sort-soin":m0("#3f9e5c","#163a24",`<path d="M26 12 H38 V25 H51 V37 H38 V50 H26 V37 H13 V25 H26 Z" fill="#7cf0a0" ${ll}/>
    <path d="M29 15 H35 V28" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M51 10 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 Z M12 44 l1.5 3 3 1.5 -3 1.5 -1.5 3 -1.5 -3 -3 -1.5 3 -1.5 Z" fill="#e9fff0"/>`),"sort-rage":m0("#7a3fb8","#2a1240",`<path d="M33 8 C46 20 50 30 47 40 C45 49 39 54 32 54 C24 54 17 48 17 39 C17 31 22 27 24 20 C27 25 28 28 31 29 C33 22 34 16 33 8 Z" fill="#c06bff" ${ll}/>
    <path d="M32 30 C38 36 40 41 38 46 C36 50 28 50 26 46 C24 41 28 38 29 34 C30 37 31 38 32 38 C33 35 33 33 32 30 Z" fill="#f4dcff"/>`),"sort-pose":m0("#3d5f9e","#16233f",`<ellipse cx="32" cy="47" rx="20" ry="7.5" fill="#ffd34a" opacity=".35" ${ll}/>
    <ellipse cx="32" cy="47" rx="12" ry="4.2" fill="none" stroke="#ffd34a" stroke-width="2.6"/>
    <path d="M27 9 H37 V27 H45 L32 42 L19 27 H27 Z" fill="#ffd34a" ${ll}/><path d="M30 12 V27" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`)},U8={druidesse:ny,baleine:oy,etendard:P8,...L8},iy=3e3,C8=5,ry=(i,t)=>Math.round(i.boons[t].damage*100);function x8(i,t,e){let n=k.monsters[i].name,o=n.charAt(0).toLowerCase()+n.slice(1),r=k.monsters[i].boon,a=`+${Math.round(r.value*100)} % ${r.stat==="damage"?"de d\xE9g\xE2ts":"de vitesse d\u2019attaque"}`;return t?`<div class="plate ahint slain me"><b>Ton arm\xE9e</b> a abattu ${o} : ${a} pour elle</div>`:`<div class="plate ahint slain op"><b>${jt(e||"L\u2019adversaire")}</b> a abattu ${o} : ${a} pour son arm\xE9e</div>`}var O8=Object.fromEntries(Bh.map(i=>[i,k.monsters[i].name]));function cl(i,t){let e=i.killed[t],n=i.killed[0]+i.killed[1];return{n:e,pc:n?100*e/n:0}}var xa=i=>`${i} pl.`;function E0(i){$l(i),i.querySelectorAll("img[data-art]").forEach(t=>{let e=U8[t.dataset.art??""];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var V0={hp:"heart",damage:"sword",attackSpeed:"fast",moveSpeed:"boot",range:"target"},Do=i=>`${Math.round(i*100)}`,ss=i=>String(Math.max(0,i)),S0=i=>Math.max(0,Math.min(100,100*i/k.hp.start)),v8=4,R8=15;function ul(i){let t=null,e=0;for(let n of xe){let o=i.army[n]*k.troops[n].places;o>e&&(e=o,t=n)}return t}var fl=i=>`<span class="face">${i?`<img data-art="${to[i]}" alt="">`:ct("person")}</span>`,hl=i=>i===1?"1er":`${i}e`,ni=(i,t="")=>`<span class="bar${t?` ${t}`:""}"><i style="width:${Math.max(0,Math.min(100,i))}%"></i></span>`,D8=i=>`<div class="stat hp">${ct("heart")}<span class="track">${ni(S0(i))}<b>${ss(i)}</b></span></div>`,M8=(i,t,e)=>`<span class="chip">${ct(V0[e])}+${Do(i.up[t][e])} %</span>`;function A8(i,t){let e=T0(i,t),n=Object.keys(i.perks).filter(a=>a.endsWith(`:${t}`)).length,o=e.length-1+n,r=o>0?`<small class="more" title="${o} autre${o>1?"s":""}">+${o}</small>`:"";return e.length?`<span class="chip">${ct(V0[e[0]])}+${Do(i.up[t][e[0]])}%</span>${r}`:n?`<small class="more">${n} effet${n>1?"s":""}</small>`:""}var T0=(i,t)=>Ri.filter(e=>i.up[t][e]>0).sort((e,n)=>i.up[t][n]-i.up[t][e]),mr={hp:"",damage:"",attackSpeed:"coup/s",moveSpeed:"m/s",range:"m"},I8={hp:0,damage:1,attackSpeed:2,moveSpeed:1,range:1};function Tn(i,t=1){let e=(i+1e-9).toFixed(t);return e.includes(".")&&(e=e.replace(/0+$/,"").replace(/\.$/,"")),e.replace(".",",")}var us=(i,t,e)=>_a(i,e)[t],gr=(i,t)=>Tn(t,I8[i]);function py(i,t){let e={...i,[t.kind]:{...i[t.kind]}};return t.stat&&(e[t.kind][t.stat]+=Pi(t)),e}var ps=k.troops,Tr={barbarian:{name:"Barbare",she:!1,role:"Solide et rapide pour une seule place. Il fonce au contact et tient le front.",rules:[["sword","Corps \xE0 corps",`\xE0 ${Tn(ps.barbarian.range)} m`]],fears:["druid","whale"],beats:["tank"]},archer:{name:"Arch\xE8re",she:!0,role:"Fragile, elle tire de loin et touche ce qui vole.",rules:[["target","Tire de loin",`\xE0 ${Tn(ps.archer.range)} m`],["fly","Touche ce qui vole","avec la druidesse, contre la baleine"]],fears:["assassin","druid"],beats:["whale"]},tank:{name:"Colosse",she:!1,role:"Lent et massif, il encaisse. Son cri attire sur lui les ennemis proches.",rules:[["swords","Cri de guerre",`les ennemis \xE0 ${Tn(k.taunt.radius)} m le frappent ${Tn(k.taunt.seconds)} s, toutes les ${Tn(k.taunt.every)} s`]],fears:["barbarian","assassin","whale"],beats:[]},assassin:{name:"Assassin",she:!1,role:"Le plus rapide. Il fonce sur les arch\xE8res et les druidesses avant le reste.",rules:[["target","Chasse les tireurs",`arch\xE8res et druidesses \xE0 ${Tn(k.assassinHunt)} m d\u2019abord`]],fears:["whale"],beats:["archer","druid","tank"]},druid:{name:"Druidesse",she:!0,role:"Fragile, elle frappe de loin. Sa foudre touche tout un groupe, la baleine aussi.",rules:[["target","Tire de loin",`\xE0 ${Tn(ps.druid.range)} m`],["star","Foudre en zone",`tout \xE0 ${Tn(ps.druid.splash)} m de sa cible`],["fly","Touche ce qui vole","avec l\u2019arch\xE8re, contre la baleine"]],fears:["assassin"],beats:["barbarian","archer","whale"]},whale:{name:"Baleine",she:!0,role:"Elle survole la m\xEAl\xE9e et nettoie le sol. Seules les arch\xE8res et les druidesses l\u2019atteignent.",rules:[["fly","Vole","seules les arch\xE8res et les druidesses la touchent"],["crystal","Frappe en zone",`tout le sol \xE0 ${Tn(ps.whale.splash)} m de sa cible`]],fears:["archer","druid"],beats:["barbarian","assassin"]},banner:{name:"Porte-\xE9tendard",she:!1,role:"Il ne se bat pas. Plant\xE9 o\xF9 tu veux, il ouvre un endroit o\xF9 poser tes renforts.",rules:[["target","O\xF9 tu veux",`sauf sur la rive ennemie et \xE0 moins de ${Tn(k.banner.monsterGap)} m d\u2019un monstre`],["star","Zone de pose",`tes troupes se posent \xE0 ${Tn(k.banner.radius)} m de lui pendant ${Tn(k.banner.seconds)} s`]],fears:[],beats:[]}},Oa=k.spells,_8={heal:{role:"Pose-la sur tes troupes qui se battent : elles reprennent de la vie tant qu\u2019elles sont dedans.",rules:[["heart","Soigne",`${Do(Oa.heal.heal)} % de leur vie par seconde, ${Do(Oa.heal.heal*Oa.heal.seconds)} % en tout`]]},rage:{role:"Pose-la sur tes troupes au contact : elles frappent plus fort et plus vite tant qu\u2019elles sont dedans.",rules:[["sword","D\xE9g\xE2ts",`+${Do(Oa.rage.damage)} %`],["fast","Vitesse d\u2019attaque",`+${Do(Oa.rage.attackSpeed)} %`]]},portal:{role:"Ouvre un portail o\xF9 poser tes troupes, o\xF9 tu veux sur le terrain, m\xEAme chez l\u2019ennemi.",rules:[["star","Zone de pose","tes troupes s\u2019y posent, m\xEAme pr\xE8s des ennemis"]]}},sy=i=>i==="fly"?ct("arrow","ic up"):ct(i),ay=!1;function w0(){if(ay)return;ay=!0;let i='stroke="#2a1709" stroke-width="3.6" stroke-linejoin="round"';document.body.insertAdjacentHTML("afterbegin",`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true">
    <symbol id="i-coin" viewBox="0 0 64 64" overflow="visible">
      <ellipse cx="32" cy="36" rx="26" ry="25" fill="#a8641a" ${i}/>
      <circle cx="32" cy="32" r="25" fill="url(#h-gold)" ${i}/>
      <circle cx="32" cy="32" r="17.5" fill="none" stroke="#c97a12" stroke-width="2.6" opacity=".8"/>
      <path d="M32 20 L40 32 L32 44 L24 32 Z" fill="url(#h-gold)" stroke="#2a1709" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M32 23 L35 28 L32 30 Z" fill="#fff" opacity=".7"/>
      <path d="M17 25 C19 18 24 13 31 12" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".8"/>
    </symbol></svg>`)}var $8=["top","quit","opp","army","shop","players","ready","gauges","deck","hint","count","life","win","net"],dl=`<svg class="nsig" viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke-linecap="round">
  <path class="w" d="M6 20a26 26 0 0 1 36 0M12.5 27a17 17 0 0 1 23 0M19 34a8 8 0 0 1 10 0"/><path class="o" d="M11 7l26 32"/><path class="r" d="M11 7l26 32"/></g>
  <circle cx="24" cy="40" r="3.4" fill="#fff"/></svg>`,bl=class{constructor(t,e){S(this,"s",t);S(this,"acts",e);S(this,"root",document.createElement("div"));S(this,"parts",{});S(this,"pick",xe[0]);S(this,"armed",!0);S(this,"pickRound",-1);S(this,"sheet",-1);S(this,"troop",null);S(this,"selling",{i:-1,at:0});S(this,"toastAt",0);S(this,"lastFrame",performance.now());S(this,"spectating",!1);S(this,"asking",!1);S(this,"mineWin",{round:-1,at:0,closed:!1});S(this,"prepShown",!1);w0(),this.root.className="ab",document.body.appendChild(this.root);for(let n of $8){let o=document.createElement("div");o.dataset.part=n,this.root.appendChild(o),this.parts[n]={el:o,key:""}}this.root.addEventListener("click",n=>this.click(n))}put(t,e,n){let o=this.parts[t];o.key!==e&&(o.key=e,o.el.innerHTML=e?n():"",E0(o.el))}toast(t){let e=performance.now();e-this.toastAt<700||(this.toastAt=e,y0.show(t,1.5))}render(){let t=performance.now();y0.tick(Math.min(.5,(t-this.lastFrame)/1e3)),this.lastFrame=t;let e=this.s(),n=e.stage,o=e.mine,r=e.auth.clock(),a=!!e.next,p=this.mineOpen(e,t),s=a&&e.watching!==null,u=e.preparing&&!p&&!s,f=n==="battle"&&!!e.fight&&!a;this.prepShown=u;let l=Math.max(0,(a?e.prepEnd:e.stageEnd)-r),c=n==="prep"?os(e.m,e.me):null;n!=="prep"&&n!=="results"&&n!=="wait"&&(this.sheet=-1),u||(this.troop=null);let d=n==="results"&&e.alive&&!!e.last&&!a,y=n==="prep"||a?"Pr\xE9paration":n==="results"?"R\xE9sultats":"",m=!f&&!s&&n!=="over"&&(e.alive||this.spectating);this.put("top",m?`${n}|${e.prepRound}|${Math.ceil(l)}|${o.gold}|${o.hp}|${e.alive}|${a}`:"",()=>`
      <div class="hud-l">${D8(o.hp)}${e.alive&&n!=="wait"?`<div class="stat gold">${ct("coin")}<b>${o.gold}</b></div>`:""}</div>
      ${n==="wait"?"":`<div class="hud-r"><div class="round"><b>Round ${e.prepRound||1}</b>${y?`<small>${y}</small>`:""}</div>
        <div class="timer">${ct("clock")}<b>${Io(l)}</b></div></div>`}`),this.put("quit",(e.alive||this.spectating)&&n!=="over"?"q":"",()=>`<button class="qbtn" data-do="askquit" aria-label="Abandonner la partie">${ct("flag")}</button>`);let h=u&&c?e.m.players[c.seat]:null;this.put("opp",h?`o|${h.seat}|${c.ghost}|${JSON.stringify(h.army)}`:"",()=>`
      <button class="hud-c next" data-do="row" data-i="${h.seat}" aria-label="Prochain adversaire : ${jt(h.name)}">${ct("swords")}<span class="who">${c.ghost?"Copie de ":""}${jt(h.name)}</span>
        <span class="minis">${Vn.filter(Q=>h.army[Q]>0).map(Q=>`<span class="mini"><img data-art="${to[Q]}" alt=""><i>${h.army[Q]}</i></span>`).join("")}</span></button>`);let b=wi(o,o.army),E=b>=o.places;this.put("army",u?`a|${JSON.stringify(o.army)}|${o.places}|${JSON.stringify(o.up)}|${this.troop}|${o.augments.length}`:"",()=>`
      <div class="panel army"><div class="ph"><span class="t">Arm\xE9e</span><span class="cap${E?" full":""}">${ct("person")}<b>${b}</b>/${o.places}</span></div>
        ${ni(100*b/o.places,"capbar")}
        <div class="rows">${ms.map(Q=>this.trow(o,Q,b)).join("")}</div>
        <div class="foot"><button class="btn${E?" off":""}" data-do="fill">Remplir</button><button class="btn${b?"":" off"}" data-do="clear">Vider</button></div></div>`);let T=o.places>=k.army.maxPlaces,g=qp(o.places,o),x=!T&&o.gold>=g,U=Ge(o,"rummage")&&o.rerolls===0?0:k.economy.reroll;this.put("shop",u&&!this.troop?`s|${JSON.stringify(o.offers)}|${o.gold}|${o.places}|${JSON.stringify(o.up)}|${U}|${o.augments.length}`:"",()=>`
      <div class="panel shop lines"><div class="utils">
        ${T?`<button class="util off max" data-do="cap" aria-label="Ton arm\xE9e a toutes ses places">${ct("person")}<b>Max</b><span class="price">${o.places}</span></button>`:`<button class="util${x?"":" off"}" data-do="cap" aria-label="${k.army.step} places de plus pour ${g} or">${ct("person")}<b>+${k.army.step}</b><span class="price">${ct("coin")}${g}</span></button>`}
        <button class="util${o.gold>=U?"":" off"}" data-do="reroll" aria-label="Relancer la boutique pour ${U} or">${ct("rotate")}<b>&nbsp;</b><span class="price">${ct("coin")}${U}</span></button></div>
        <div class="otg">${o.offers.map((Q,F)=>k8(Q,F,o)).join("")}</div></div>`);let V=(n==="prep"||n==="wait"||n==="results")&&!d,O=n==="battle"&&(!e.auth.solo||!!e.watchers)&&e.myBattleOver&&(e.alive||this.spectating)&&!p;if(O){let Q=e.duels(),F=Q.filter(G=>!G.over).length;this.put("players",`d|${Q.map(G=>`${G.pair}${G.watched}${G.over}${G.loser}${G.killed}`).join()}|${e.m.players.map(G=>G.hp).join()}`,()=>`
        <div class="panel players duels"><div class="ph"><span class="t steel">Duels</span><span class="cap">${F?`<b>${F}</b>&nbsp;en cours`:"finis"}</span></div>
        <div class="dlist">${Q.map(G=>this.duelBlock(e,G)).join("")}</div></div>`)}else this.put("players",V?`p|${e.m.players.map(Q=>`${Q.hp}${Q.out?.place}`).join()}|${c?.seat}`:"",()=>`
      <div class="panel players"><div class="ph"><span class="t steel">Joueurs</span></div><div class="plist">${ns(e.m).map(Q=>{let F=Q.seat===e.me,G=!!c&&Q.seat===c.seat;return`<button class="prow${`${F?" me":""}${G?" opp":""}${!F&&!G&&!Q.out&&Q.hp<=R8?" low":""}${Q.out?" out":""}`}" data-do="row" data-i="${Q.seat}"><span class="nm">${G?ct("swords"):""}<span>${jt(Q.name)}</span></span>${Q.out?`<span class="place">${hl(Q.out.place)}</span>`:`<span class="php">${ct("heart")}${ni(S0(Q.hp))}<b>${ss(Q.hp)}</b></span>`}</button>`}).join("")}</div></div>`);let P=Math.max(0,$o(e.round+1)-r),L=n==="battle"&&(e.alive||this.spectating)&&(!e.auth.solo||!!e.watchers)&&e.myBattleOver&&!p;this.put("ready",u?e.readyNow?`u|${Math.ceil(l)}`:"r":L?`w|${Math.ceil(P)}`:"",()=>u&&!e.readyNow?`<button class="go ready" data-do="ready">${ct("check")}<span>Pr\xEAt</span></button>`:u?`<div class="plate until">${ct("hourglass")}<span>Bataille dans<b>${Io(l)}</b></span></div>`:`<div class="plate until">${ct("hourglass")}<span>Prochain round dans<b>${Io(P)}</b></span></div>`);let D=n==="battle"&&e.watching!==null&&!p?e.shown():null,I=D?.watched?D:null;if(I){let[Q,F]=I.seats.map(te=>e.m.players[te]),G=I.b,ft=cl(G,0),yt=cl(G,1),$t=Math.max(0,k.battle.maxSeconds-G.time),re=e.m.pairs[e.watching].ghost;this.put("gauges",`w|${e.watching}|${ft.n}|${yt.n}|${Math.ceil($t)}|${G.over}|${a}`,()=>`<div class="gauge">
        <div class="side me"><span class="nm">${jt(Q.name)}</span><span class="pct">${xa(ft.n)}</span>${ni(ft.pc,"gbar")}</div>
        <div class="clock"><b>${Io($t)}</b><small>${G.over?"Fini":`Round ${e.round}`}</small></div>
        <div class="side op"><span class="nm">${jt(F.name)}${re?" (copie)":""}</span><span class="pct">${xa(yt.n)}</span>${ni(yt.pc,"gbar")}</div></div>
        ${a?`<button class="wtag back" data-do="unwatch">${ct("eye")}<span>Tu regardes \xB7 Retour \xE0 ta pr\xE9paration</span></button>`:`<div class="wtag">${ct("eye")}<span>Tu regardes</span></div>`}`)}let H=e.fight?.b;if(I||O)for(let Q of["deck","hint","life"])this.put(Q,"",()=>"");if(!I)if(f&&H){let Q=cl(H,e.mySide),F=cl(H,1-e.mySide),G=e.oppSeat!==null?e.m.players[e.oppSeat].name:"",ft=Math.max(0,k.battle.maxSeconds-H.time),yt=ry(H,e.mySide),$t=ry(H,1-e.mySide),re=1-e.mySide,te=H.left(re),ee=e.oppSeat!==null?e.m.players[e.oppSeat].army:Jn(),q=Vn.filter(Vt=>ee[Vt]>0||te[Vt]>0),tt=q.every(Vt=>te[Vt]<=0);this.put("gauges",`g|${Q.n}|${F.n}|${Math.ceil(ft)}|${yt}|${$t}|${JSON.stringify(te)}`,()=>`${q.length?`<div class="foedeck${tt?" all":""}" aria-label="Ce qu\u2019il reste \xE0 poser \xE0 ${jt(G)}">
        <span class="fk">${tt?"Tout pos\xE9":"\xC0 poser"}</span>${q.map(Vt=>`<span class="fcard${te[Vt]?"":" empty"}${Fe(Vt)?" spell":""}" title="${ri[Vt]}"><img data-art="${to[Vt]}" alt=""><i>\xD7${te[Vt]}</i></span>`).join("")}</div>`:""}<div class="gauge">
        <div class="side me"><span class="nm">${yt?`<em class="boon">+${yt} %</em>`:""}${jt(o.name)}</span><span class="pct">${xa(Q.n)}</span>${ni(Q.pc,"gbar")}</div>
        <div class="clock"><b>${Io(ft)}</b><small>Round ${e.round}</small></div>
        <div class="side op"><span class="nm">${jt(G)}${e.ghost?" (copie)":""}${$t?`<em class="boon">+${$t} %</em>`:""}</span><span class="pct">${xa(F.n)}</span>${ni(F.pc,"gbar")}</div></div>`);let dt=H.left(e.mySide);if(!O){if(this.pickRound!==e.round){this.pickRound=e.round;let lt=Vn.find(pe=>dt[pe]>0&&!Fe(pe))??Vn.find(pe=>dt[pe]>0);lt&&(this.pick=lt,this.armed=!0)}else this.armed&&dt[this.pick]<=0&&(this.armed=!1);let Vt=Vn.filter(lt=>e.player.army[lt]>0),Et=e.link==="cut"||e.link==="away";this.put("deck",Et?"":`d|${JSON.stringify(dt)}|${this.pick}|${this.armed}`,()=>`<div class="deck">${Vt.map(lt=>`
        <button class="dcard${lt===this.pick&&this.armed?" sel":""}${dt[lt]?"":" empty"}${Fe(lt)?" spell":""}" data-do="pick" data-t="${lt}" aria-label="${ri[lt]}"><img class="dp" data-art="${to[lt]}" alt=""><i>\xD7${dt[lt]}</i></button>`).join("")}</div>`);let Wt=Vn.every(lt=>dt[lt]===0),Te=H.heralds.find(lt=>lt.tick>H.tick),M=Te?Math.ceil((Te.tick-H.tick)/k.tickHz):0,ae=Math.ceil(e.counting);this.put("count",ae>0&&!Et?`c|${ae}`:"",()=>`<div class="bcount"><b>${ae}</b><span>Choisis une carte, la pose arrive</span></div>`);let At=H.monsters.find(lt=>lt.died>=0&&lt.by>=0&&H.tick-lt.died<C8*k.tickHz),Mt=At?At.by===e.mySide?"me":"op":"";this.put("hint",Te?`m|${Te.kind}|${M}`:At?`k|${At.id}|${Mt}`:H.tick<120&&!Wt&&!Et&&ae===0?"h":"",()=>Te?`<div class="plate ahint">${O8[Te.kind]} se r\xE9veille dans ${M} s</div>`:At?x8(At.kind,Mt==="me",G):'<div class="plate ahint">Touche une carte, puis garde le pouce sur le terrain</div>'),this.put("life",`l|${o.hp}`,()=>`<div class="plate hp-mini">${ct("heart")}<b>${ss(o.hp)}</b></div>`)}}else for(let Q of["gauges","deck","hint","count","life"])this.put(Q,"",()=>"");(!f||O||I)&&this.put("count","",()=>"");let N=e.link,Y=e.oppSeat!==null?e.m.players[e.oppSeat].name:"",J=!e.alive||n==="over"?"":n==="battle"&&!a?N==="lost"?"lost":N==="cut"||N==="away"?"cut":e.oppLost?`opp|${Y}`:"":N==="lost"?u?"top":"top hi":"";this.put("net",J,()=>J==="lost"?`<div class="dim soft"></div><div class="winwrap net"><div class="wt">Connexion perdue</div><div class="win">${dl}
          <p class="say">Reconnexion<span class="dots"><i>.</i><i>.</i><i>.</i></span></p></div></div>`:J==="cut"?`<div class="plate netp">${dl}<span><b>Connexion perdue</b><small>La bataille continue sans toi. Tu reviens au prochain round.</small></span></div>`:J.startsWith("top")?`<div class="plate netp ${J}">${dl}<span><b>Connexion perdue</b><small>Reconnexion<span class="dots"><i>.</i><i>.</i><i>.</i></span></small></span></div>`:`<div class="plate netp foe">${dl}<span><b>${jt(Y)} a perdu la connexion</b><small>Plus de renforts de son c\xF4t\xE9</small></span></div>`),this.windows(e,l,p)}mineOpen(t,e){return!t.next||t.myEndAt<0?!1:(this.mineWin.round!==t.prepRound&&(this.mineWin={round:t.prepRound,at:e,closed:!1}),!this.mineWin.closed&&e-this.mineWin.at>v8*1e3&&(this.mineWin.closed=!0),!this.mineWin.closed)}duelBlock(t,e){let n=`${e.watched?" sel":""}${e.over?" done":""}${e.mine?" mine":""}`,o=(r,a)=>{let p=t.m.players[r],s=e.over&&e.loser===r,u=a===1&&e.ghost,f=`${r===t.me&&!u?" me":""}${s?" dlost":""}`,l=!e.over&&e.killed?`<span class="dg">${xa(e.killed[a])}</span>`:s&&e.damage?`<span class="dl">\u2212${e.damage}</span>`:"<span></span>",c=p.out?`<span class="place">${hl(p.out.place)}</span>`:`<span class="dlife">${ct("heart")}<b>${ss(p.hp)}</b></span>`;return`<span class="drow${f}"><span class="nm"><span>${jt(p.name)}${u?" (copie)":""}</span></span>${l}${c}</span>`};return`<button class="dblock${n}" data-do="watch" data-i="${e.pair}" aria-label="Regarder ${jt(t.m.players[e.seats[0]].name)} contre ${jt(t.m.players[e.seats[1]].name)}">${e.watched?`<span class="dst">${ct("eye")}</span>`:""}${o(e.seats[0],0)}${o(e.seats[1],1)}</button>`}trow(t,e,n){let o=t.army[e],r=Kp(t,e),a=n+r<=t.places,p=ri[e].toLowerCase();return`<div class="trow${o||a?"":" nofit"}${this.troop===e?" on":""}${Fe(e)?" spell":""}" data-do="troop" data-t="${e}"><img class="pt" data-art="${to[e]}" alt=""><div class="tn"><b>${o}</b><small>${r} pl.</small></div>
      <div class="chips">${Fe(e)?`<span class="sname">${ri[e]}</span>`:A8(t,e)}</div>
      <div class="pm"><button class="sq minus${o?"":" off"}" data-do="minus" data-t="${e}" aria-label="Un ${p} de moins">${ct("minus")}</button><button class="sq plus${a?"":" off"}" data-do="plus" data-t="${e}" aria-label="Un ${p} de plus">${ct("plus")}</button></div></div>`}windows(t,e,n){let o=t.stage,r=t.player;if(t.queue&&(o==="over"||!t.alive&&!this.spectating)){let p=t.queue,s=p.result;this.put("win",`q|${o}|${t.m.players.map(u=>u.out?.place??0).join()}|${s?`${s.delta}|${s.xp}|${s.profile.xp}`:""}`,()=>ey(t.m,t.me,p,o==="over"));return}if(o==="over"){let p=ns(t.m),s=p[0].seat===t.me,u=p.findIndex(f=>f.seat===t.me)+1;this.put("win",`over|${p.map(f=>f.seat).join()}`,()=>{let f=c=>{let d=p[c];return d?`<div class="pod p${c+1}${d.seat===t.me?" me":""}">${fl(ul(d))}<span class="pn">${jt(d.name)}</span><span class="blk">${c+1}</span></div>`:""},l=p.slice(3).map((c,d)=>`<div class="rrow${c.seat===t.me?" me":""}"><b>${d+4}</b>${fl(ul(c))}<span class="nm">${jt(c.name)}</span>
          <span class="rr">${c.out?`${ct("swords")}Round ${c.out.round}`:""}</span></div>`).join("");return`<div class="dim"></div><div class="winwrap over"><div class="wt ${s?"yel":"steel"}">${s?"Victoire !":"Fin de la partie"}</div><div class="win">
          <div class="headline">${ct(s?"trophy":"rank")}<span>${s?"Ton arm\xE9e est la derni\xE8re debout":`Tu finis ${hl(u)} sur ${p.length}`}</span></div>
          <div class="final"><div class="podium">${f(1)}${f(0)}${f(2)}</div><div class="rest">${l}</div></div>
          <button class="go small" data-do="again">${ct("replay")}<span>Rejouer</span></button></div></div>`});return}if(!t.alive&&!this.spectating){this.put("win",`out|${r.out?.place}`,()=>`<div class="dim"></div><div class="winwrap out"><div class="wt">\xC9limin\xE9</div><div class="win out">
        <div class="oplace"><b>${hl(r.out?.place??8)}</b><span>sur ${t.m.players.length}</span></div>
        <div class="stl c">${ct("swords","ic w")}Round ${r.out?.round}</div>
        <p class="say">La partie continue sans toi.</p>
        <div class="foot2"><button class="btn big" data-do="spectate">Regarder la fin</button><button class="go small" data-do="again">${ct("replay")}<span>Rejouer</span></button></div></div></div>`);return}if(this.asking&&t.alive){this.put("win",`quit|${t.auth.solo}`,()=>`<div class="dim"></div><div class="winwrap quit"><div class="wt">Abandonner ?</div><div class="win">
        <p class="say">${t.auth.solo?"La partie s\u2019arr\xEAte et tu reviens \xE0 l\u2019accueil.":"Tu quittes la partie. Elle continue sans toi et tu perds tes batailles, jusqu\u2019\xE0 ce que tu la reprennes depuis l\u2019accueil."}</p>
        <div class="foot2"><button class="btn big" data-do="stay">Continuer</button><button class="btn big red" data-do="quit">${ct("flag","ic w")}Abandonner</button></div></div></div>`);return}let a=n?t.myFought():null;if(a){this.put("win",`mine|${t.round}`,()=>this.results(t,[a],!0));return}if(o==="results"&&t.last&&t.alive&&!t.next){this.put("win",`res|${t.round}|${t.auth.solo}`,()=>this.results(t,t.last));return}if(t.preparing&&!n&&t.mine.picks.length){let p=t.mine.picks[0];this.put("win",`pick|${p.id}|${t.mine.gold}|${JSON.stringify(t.mine.army)}`,()=>G8(p,t.mine));return}if(this.troop&&t.preparing&&!n){let p=this.troop,s=t.mine,u=performance.now()-this.selling.at<iy?this.selling.i:-1;this.put("win",Fe(p)?`spell|${p}|${s.army[p]}`:`troop|${p}|${s.army[p]}|${JSON.stringify(s.up[p])}|${s.buys.length}|${u}`,()=>Fe(p)?B8(s,p):H8(s,p,u));return}if(this.sheet>=0&&(o==="prep"||o==="results"||o==="wait")){let p=t.m.players[this.sheet],s=o==="prep"?os(t.m,t.me):null;this.put("win",`sheet|${p.seat}|${p.hp}|${JSON.stringify(p.army)}|${p.places}|${JSON.stringify(p.up)}|${s?.seat}`,()=>F8(p,t.me,s?.seat??-1));return}if(o==="wait"){this.put("win",`wait|${Math.max(1,Math.ceil(e))}`,()=>`<div class="winwrap count"><div class="wt yel">La partie commence</div><div class="win count">
        <b class="cnum">${Math.max(1,Math.ceil(e))}</b><p class="say">Round 1 : ${k.round.prep} s pour pr\xE9parer ton arm\xE9e, puis la bataille.</p></div></div>`);return}this.put("win","",()=>"")}results(t,e,n=!1){let o=t.player,r=t.oppSeat!==null?t.m.players[t.oppSeat]:null,a=e.find(T=>T.pair.a===t.me||T.pair.b===t.me&&!T.pair.ghost),p=a?.result??null,s=t.mySide,u={won:!p||p.winner===-1?null:p.winner===s},f=u.won===null?"\xC9galit\xE9":u.won?"Victoire":"D\xE9faite",l=p?[p.killed[s],p.killed[1-s]]:[0,0],c=l[0]+l[1],d=r?jt(r.name)+(t.ghost?" (copie)":""):"",y=(T,g,x)=>`<div class="dside ${x}"><span class="nm">${T}</span>${ni(c?100*g/c:0,"gbar")}<span class="pct">${xa(g)}</span></div>`,m=a?.damage??0,h=(T,g)=>p?.outcome==="wipe"?g?`L\u2019arm\xE9e de ${T} est an\xE9antie`:"Ton arm\xE9e est an\xE9antie":p?.outcome==="time"?g?"Tu as tu\xE9 le plus de places":`${T} a tu\xE9 le plus de places`:"Plus personne sur le terrain",b=t.ghost?'<b class="zero">0</b><span>Contre une copie : aucun PV en jeu</span>':u.won===null?'<b class="zero">0</b><span>\xC9galit\xE9 : personne ne perd de PV</span>':u.won?`<b>\u2212${m}</b><span>pour <strong>${d}</strong> \xB7 ${h(d,!0)}</span>`:`<b>\u2212${m}</b><span>${h(d,!1)}</span>`,E=e.filter(T=>T!==a).map(T=>{let g=t.m.players[T.pair.a],x=t.m.players[T.pair.b],U=T.loser!==null?t.m.players[T.loser]:null,V=T.pair.ghost?'<span class="loss none">Copie</span>':U&&T.damage?`<span class="loss">${jt(U.name)} ${ct("heart")}\u2212${T.damage}</span>`:'<span class="loss none">\xC9galit\xE9</span>';return`<div class="oline">${ct("swords")}<span class="pair"><b>${jt(g.name)}</b> \xB7 <b>${jt(x.name)}${T.pair.ghost?" (copie)":""}</b></span>${V}</div>`}).join("");return`<div class="dim"></div><div class="winwrap res"><div class="wt ${u.won===null?"steel":u.won?"me":""}">${f}</div><div class="win">
      <div class="duel">${y(jt(o.name),l[0],"me")}<div class="vs">${ct("swords")}</div>${y(d,l[1],"op")}</div>
      <div class="lost">${ct("heart")}${b}</div>
      <div class="others">${E}</div>
      ${n?`<button class="go small" data-do="prepare">${ct("arrow")}<span>Pr\xE9parer</span></button>`:t.auth.solo?`<button class="go small" data-do="next">${ct("arrow")}<span>Continuer</span></button>`:""}</div></div>`}click(t){let e=t.target.closest("[data-do]");if(!e)return;let n=this.s(),o=n.mine,r=e.dataset.do,a=e.dataset.t,p={...o.army},s=(u,f)=>{u||this.toast(f)};switch(r){case"cap":s(o.places<k.army.maxPlaces&&n.do({k:"cap"}),o.places>=k.army.maxPlaces?"Ton arm\xE9e a d\xE9j\xE0 toutes ses places":"Pas assez d\u2019or");break;case"reroll":s(n.do({k:"reroll"}),"Pas assez d\u2019or");break;case"buy":s(n.do({k:"buy",slot:Number(e.dataset.i)}),"Pas assez d\u2019or");break;case"plus":p[a]++,s(n.do({k:"army",army:p}),"Plus de place");break;case"minus":p[a]>0&&(p[a]--,n.do({k:"army",army:p}));break;case"clear":n.do({k:"army",army:Jn()});break;case"fill":{let u=xe.reduce((l,c)=>p[c]*k.troops[c].places>p[l]*k.troops[l].places?c:l,xe[0]),f=o.places-wi(o,p);for(;f>=k.troops[u].places;)p[u]++,f-=k.troops[u].places;for(;f>0;)p[xe[0]]++,f-=k.troops[xe[0]].places;n.do({k:"army",army:p});break}case"row":this.sheet=Number(e.dataset.i),this.troop=null;break;case"sell":{let u=Number(e.dataset.i),f=performance.now();this.selling.i===u&&f-this.selling.at<iy?(this.selling={i:-1,at:0},s(n.do({k:"sell",i:u}),"Revente refus\xE9e")):this.selling={i:u,at:f};break}case"choose":{let u=o.picks[0];u&&s(n.do({k:"pick",id:u.id,i:Number(e.dataset.i)}),"Choix refus\xE9");break}case"watch":{let u=n.duels()[Number(e.dataset.i)];n.watch(!u||u.mine||u.watched?null:u.pair);break}case"unwatch":n.watch(null);break;case"prepare":this.mineWin.closed=!0;break;case"close":this.sheet=-1;break;case"troop":this.troop=this.troop===a?null:a,this.sheet=-1;break;case"tclose":this.troop=null;break;case"pick":a===this.pick&&this.armed?this.armed=!1:(this.pick=a,this.armed=!0);break;case"ready":this.acts.ready();break;case"next":this.acts.next();break;case"again":this.acts.again();break;case"home":this.acts.home();break;case"spectate":this.spectating=!0,this.acts.spectate();break;case"askquit":n.alive?this.asking=!0:this.acts.quit();break;case"stay":this.asking=!1;break;case"quit":this.asking=!1,this.acts.quit();return}this.render()}};function k8(i,t,e){if(!i)return'<span class="ot sold"></span>';let n=k.rarities[i.rarity],o=br(i,e);if(i.perk){let f=yo[i.perk],l=f.text((f.power??1)*Ai(i.rarity)),c=`${n.name} : ${f.name} pour ${Tr[i.kind].name.toLowerCase()}. ${l} ${o} or`;return`<button class="ot perk r${i.rarity+1}${e.gold<o?" poor":""}" data-do="buy" data-i="${t}" aria-label="${jt(c)}" title="${jt(c)}">
    <span class="opw"><img class="op" data-art="${to[i.kind]}" alt=""><span class="price">${ct("coin")}${o}</span></span><span class="ott"><span class="otn"><b>${jt(f.name)}</b></span>
    <span class="otp">${jt(l)}</span></span></button>`}let r=i.stat,a=gr(r,us(i.kind,r,e.up)),p=gr(r,us(i.kind,r,py(e.up,i))),s=`${n.name} : ${Di[r]} +${Do(Pi(i))} % pour ${Tr[i.kind].name.toLowerCase()} (${a} \u2192 ${p}${mr[r]?` ${mr[r]}`:""}), ${o} or`,u=a.length+p.length+mr[r].length>=14;return`<button class="ot r${i.rarity+1}${e.gold<o?" poor":""}${u?" long":""}" data-do="buy" data-i="${t}" aria-label="${s}" title="${s}">
    <span class="opw"><img class="op" data-art="${to[i.kind]}" alt=""><span class="price">${ct("coin")}${o}</span></span><span class="ott"><span class="otn"><b>${Di[r]}</b></span>
    <span class="otv"><span class="b">${a}</span><span class="ar">\u2192</span><b>${p}</b><em>${mr[r]}</em></span></span></button>`}function H8(i,t,e=-1){let n=Tr[t],o=k.troops[t],r=i.army[t],a=i.up[t],p=Object.entries(i.perks).filter(([h])=>h.endsWith(`:${t}`)).map(([h,b])=>{let E=yo[h.split(":")[0]];return E?["star",E.name,E.text(b)]:null}).filter(h=>!!h),s=Ri.map(h=>{let b=h==="range"&&!o.rangeUpgradable,E=[];for(let V of i.buys){if(V.kind!==t||V.stat!==h)continue;let O=E.find(P=>P.r===V.rarity);O?O.n++:E.push({r:V.rarity,n:1})}let T=E.reduce((V,O)=>V+O.n,0)>=3?E:E.flatMap(V=>Array.from({length:V.n},()=>({r:V.r,n:1}))),g=!b&&a[h]>0,x=T.length?T.map(({r:V,n:O})=>{let P=k.rarities[V];return`<span class="buy r${V+1}"><b>+${Do(u0(V,h))} %${O>1?` \xD7${O}`:""}</b><small>${P.name}</small></span>`}).join(""):b?'<span class="none">ne s\u2019am\xE9liore pas</span>':"",U=g?`<span class="b">${gr(h,o[h])}</span><span class="ar">\u2192</span><b class="v up">${gr(h,us(t,h,i.up))}</b>`:`<b class="v">${gr(h,o[h])}</b>`;return`<div class="tfb-st${g?" on":""}">${ct(V0[h])}<span class="n">${Di[h]}</span><span class="comp">${x}</span><span class="vv">${U}<small>${mr[h]}</small></span></div>`}).join(""),u=i.buys.map((h,b)=>({o:h,i:b})).filter(({o:h})=>h.kind===t),f=u.filter(({o:h})=>s0(h)),l=[];for(let{o:h,i:b}of f){let E=l.find(T=>T.o.stat===h.stat&&T.o.perk===h.perk&&T.o.rarity===h.rarity&&Ca(T.o)===Ca(h));E?(E.n++,E.last=b):l.push({o:h,last:b,n:1})}let c=l.map(({o:h,last:b,n:E})=>{let T=h.perk?yo[h.perk]?.name??h.perk:`${Di[h.stat]} +${Do(Pi(h))} %`;return`<button class="sell r${h.rarity+1}${b===e?" arm":""}" data-do="sell" data-i="${b}" aria-label="Revendre ${jt(T)} pour ${Ca(h)} or">
      <b>${b===e?"Revendre ?":jt(T)}</b>${E>1&&b!==e?`<em>\xD7${E}</em>`:""}<span class="price">${ct("coin")}+${Ca(h)}</span></button>`}).join(""),d=t==="banner"?'<p class="none tfb-none">La boutique ne lui propose rien.</p>':u.length?c?`<div class="tfb-sells"><span class="tf-k">Revendre</span><div class="sline">${c}</div></div>`:"":`<p class="none tfb-none">Rien d\u2019achet\xE9 pour ${n.she?"elle":"lui"}. La boutique peut tout lui am\xE9liorer${o.rangeUpgradable?"":", sauf la port\xE9e"}.</p>`,y=(h,b)=>h.map(E=>`<span class="vsf ${b}" title="${Tr[E].name}"><img data-art="${to[E]}" alt=""><b>${Tr[E].name}</b></span>`).join(""),m=(h,b,E)=>b.length?`<div><div class="tf-k">${h}</div><div class="vsi">${y(b,E)}</div></div>`:"";return`<div class="panel tfb">
    <div class="ph"><span class="t">${n.name}</span><span class="cap">\xD7${r} \xB7 ${o.places}&nbsp;place${o.places>1?"s":""}</span></div><button class="x" data-do="tclose" aria-label="Fermer">${ct("close")}</button>
    <p class="tf-role tfb-role">${n.role}</p>
    <div class="tfb-stats">${s}</div>
    ${d}
    <div class="tfb-f">
      <div><div class="tf-k">R\xE8gles</div><ul class="tf-rules">${[...n.rules,...p].map(([h,b,E])=>`<li>${sy(h)}<span><b>${b}</b> ${E}</span></li>`).join("")}</ul></div>
      ${m("Craint",n.fears,"fear")}${m("Bat",n.beats,"beat")}
    </div></div>`}function B8(i,t){let e=_8[t],n=Oa[t],o=(r,a,p,s)=>`<div class="tfb-st">${ct(r)}<span class="n">${a}</span><span class="comp"></span><span class="vv"><b class="v">${p}</b><small>${s}</small></span></div>`;return`<div class="panel tfb">
    <div class="ph"><span class="t">${ri[t]}</span><span class="cap">\xD7${i.army[t]} \xB7 ${Kp(i,t)}&nbsp;place${Kp(i,t)>1?"s":""}</span></div><button class="x" data-do="tclose" aria-label="Fermer">${ct("close")}</button>
    <p class="tf-role tfb-role">${e.role}</p>
    <div class="tfb-stats">${o("target","Rayon",Tn(n.radius),"m")}${o("clock","Dur\xE9e",Tn(n.seconds,0),"s")}</div>
    <div class="tfb-f">
      <div><div class="tf-k">R\xE8gles</div><ul class="tf-rules">${[["target","O\xF9 tu veux","sur tout le terrain, une fois"],...e.rules].map(([r,a,p])=>`<li>${sy(r)}<span><b>${a}</b> ${p}</span></li>`).join("")}</ul></div>
    </div></div>`}function F8(i,t,e){let n=Vn.filter(r=>i.army[r]>0||!Fe(r)&&T0(i,r).length).map(r=>`<div class="srow"><img class="pt" data-art="${to[r]}" alt=""><b>\xD7${i.army[r]}</b>
    <div class="chips">${Fe(r)?`<span class="sname">${ri[r]}</span>`:T0(i,r).map(a=>M8(i,r,a)).join("")}</div></div>`).join("");return`<div class="dim" data-do="close"></div><div class="winwrap sheet"><div class="win flat">
    <div class="ph"><span class="t${i.seat===t?"":i.seat===e?" red":" steel"}">${i.seat===e?ct("swords"):""}${jt(i.name)}${i.seat===t?" (toi)":""}</span></div><button class="x" data-do="close" aria-label="Fermer">${ct("close")}</button>
    <div class="sstats"><span class="stl">${ct("heart")}${ni(S0(i.hp))}${ss(i.hp)}</span><span class="stl">${ct("person","ic w")}${wi(i,i.army)}<small>/ ${i.places} places</small></span></div>
    ${i.augments.length?`<div class="saugs">${i.augments.map(r=>`<div class="arow">${uy(r)}<small>${jt(bo[r]?.text??"")}</small></div>`).join("")}</div>`:""}
    ${n?`<div class="srows">${n}</div>`:'<p class="say empty">Pas encore d\u2019arm\xE9e.</p>'}</div></div>`}function uy(i){let t=bo[i];if(!t)return"";let e=t.tier;return`<span class="achip ${e?`r${e+1}`:"beast"}" title="${jt(t.text)}">${jt(t.name)}</span>`}var g0={pose:["move","La pose"],boutique:["coin","La boutique"],bete:["trophy","Les b\xEAtes"],carte:["map","La carte"],pv:["heart","Tes PV"],toutes:["person","Toute l\u2019arm\xE9e"]},fy=i=>Vn.includes(i),N8=i=>Fe(i)?ri[i]:Tr[i].name;function X8(i,t){return i.augments?i.augments.map(e=>{let n=bo[e],o=n.tier??0;return{name:n.name,text:n.text,rarity:o,tags:[...n.tags]}}):i.offers.map(e=>{let n=e.perk?yo[e.perk]:null,o=n?n.name:`${Di[e.stat]} +${Do(Pi(e))} %`,r=n?n.text((n.power??1)*Ai(e.rarity)):`${Di[e.stat]} de tes ${Tr[e.kind].name.toLowerCase()}s : ${gr(e.stat,us(e.kind,e.stat,t.up))} \u2192 ${gr(e.stat,us(e.kind,e.stat,py(t.up,e)))}${mr[e.stat]?` ${mr[e.stat]}`:""}.`;return{name:o,text:r,rarity:e.rarity,tags:[e.kind]}})}var J8=i=>jt(i).replace(/([+−-]?\d+(?:,\d+)?(?:\s?(?:%|m|s|or|PV)(?![\wàéèêù]))?)/g,'<b class="num">$1</b>'),z8=(i,t)=>i.source==="beast"?"beast":`r${t.rarity+1}`;function Q8(i,t){return i.source==="anvil"?{t:"L\u2019enclume",sub:"Une offre de la boutique, gratuite",cls:"yel"}:i.source==="beast"?{t:"Augment de la b\xEAte",sub:"Pour la b\xEAte achev\xE9e",cls:"beast"}:{t:"Choisis un augment",sub:`Augment ${k.rarities[t[0]?.rarity??1].name.toLowerCase()}`,cls:`r${(t[0]?.rarity??1)+1}`}}function j8(i,t,e=!1){return i.tags.map(n=>fy(n)?`<span class="tf${t.army[n]?" have":""}${e?" big":""}" title="${N8(n)}"><img data-art="${to[n]}" alt="">${t.army[n]?`<i>\xD7${t.army[n]}</i>`:""}</span>`:g0[n]?`<span class="tg${e?" big":""}" title="${g0[n][1]}">${ct(g0[n][0])}</span>`:"").join("")}var Z8=(i,t)=>i.tags.some(e=>fy(e)&&t.army[e]>0),Y8=i=>i.augments.length?`<div class="pk-mine"><span class="tf-k">Tes augments</span>${i.augments.map(uy).join("")}</div>`:"";function G8(i,t){let e=X8(i,t),n=Q8(i,e),o=e.map((r,a)=>`<button class="pa-card ${z8(i,r)}" data-do="choose" data-i="${a}">
    <span class="pa-faces">${j8(r,t,!0)}</span>
    ${i.source==="anvil"?`<span class="pa-fam">${k.rarities[r.rarity].name}</span>`:""}
    <b class="pa-name">${jt(r.name)}</b>
    <span class="pa-text">${J8(r.text)}</span>
    <span class="pa-foot">${Z8(r,t)?`${ct("check")}Ton arm\xE9e`:""}</span></button>`).join("");return`<div class="dim"></div><div class="winwrap pa"><div class="wt ${n.cls}">${n.t}</div><div class="win pa">
    <div class="pa-sub ${n.cls}">${n.sub}</div><div class="pa-cards">${o}</div>${Y8(t)}</div></div>`}function ml(i){return/unknown game/.test(i)?"Aucune partie avec ce code.":/game full/.test(i)?"La partie est compl\xE8te (8 joueurs).":/already started/.test(i)?"La partie a d\xE9j\xE0 commenc\xE9.":/bad name/.test(i)?"Pseudo : 3 \xE0 16 caract\xE8res.":/only the creator/.test(i)?"Seul le cr\xE9ateur de la partie peut la lancer.":/not a player/.test(i)?"Ce t\xE9l\xE9phone ne fait pas partie de cette partie.":/unknown party/.test(i)?"Invitation expir\xE9e.":/party busy/.test(i)?"Groupe en partie.":/party full/.test(i)?"Groupe complet.":/no profile/.test(i)?"Profil introuvable.":/bad avatar/.test(i)?"Avatar inconnu.":i}var yl=class{constructor(t,e,n,o,r=()=>Date.now(),a=!0){S(this,"rpc",t);S(this,"key",e);S(this,"game",n);S(this,"now",r);S(this,"solo",!1);S(this,"seed");S(this,"humans");S(this,"mySeat");S(this,"code");S(this,"onChange");S(this,"log",[]);S(this,"mine",[]);S(this,"lastSeq",0);S(this,"synced",-1/0);S(this,"offset");S(this,"bestRtt",1/0);S(this,"shift",0);S(this,"startAt");S(this,"closed",!1);S(this,"timer",null);S(this,"busy",!1);if(o.seed===null||o.startAt===null)throw new Error("the game is not launched");this.seed=o.seed,this.startAt=o.startAt,this.mySeat=o.seat,this.code=o.code,this.humans=[...o.players].sort((p,s)=>p.seat-s.seat).map(p=>p.name),this.offset=o.now-r(),a&&this.loop()}clock(){return(this.now()+this.offset-this.startAt)/1e3+this.shift}syncedTo(){return this.synced}confirmed(){return this.log}pending(){return this.mine}post(t,e,n){let o={seq:-1,seat:this.mySeat,round:t,kind:e,data:n,cid:Nl(),sent:0};return this.mine.push(o),this.sendOne(o),o.cid}async sendOne(t){t.sent=this.now();try{let e=await this.rpc("autobattler_act",{p_secret:this.key,p_game:this.game,p_round:t.round,p_kind:t.kind,p_data:t.data,p_cid:t.cid});typeof e?.shift=="number"&&e.shift>this.shift&&(this.shift=e.shift,this.onChange?.())}catch(e){let n=e.message??"";/connexion|fetch|network/i.test(n)||(this.mine=this.mine.filter(o=>o!==t),this.onChange?.())}}async poll(){if(!this.busy){this.busy=!0;try{let t=this.now(),e=await this.rpc("autobattler_log",{p_secret:this.key,p_game:this.game,p_since:this.lastSeq}),n=this.now();n-t<=this.bestRtt+30&&(this.bestRtt=Math.min(this.bestRtt,n-t),this.offset=e.now-(t+n)/2);let o=!1;for(let a of e.entries)a.seq<=this.lastSeq||(this.log.push(a),this.lastSeq=a.seq,o=!0);let r=new Set(this.log.map(a=>a.cid));this.mine=this.mine.filter(a=>!r.has(a.cid)),typeof e.shift=="number"&&e.shift>this.shift&&(this.shift=e.shift),this.synced=(e.now-this.startAt)/1e3+this.shift-.25;for(let a of this.mine)this.now()-a.sent>2500&&this.sendOne(a);o&&this.onChange?.()}catch{}finally{this.busy=!1}}}loop(){this.closed||this.poll().finally(()=>{let t=this.clock(),e=(t%ii+ii)%ii,n=k.round.prep,o=e>=n-1&&e<n+2||e>=ii-2.5&&e<ii;this.timer=setTimeout(()=>this.loop(),o?250:e>=n?500:1e3)})}close(){this.closed=!0,this.timer&&clearTimeout(this.timer)}};var W8=(i,t)=>`<div id="out" class="${i}" style="background-image:url(${Zf})"><div class="shade"></div>${t}</div>`,P0=["barbarian","archer","tank","assassin","druid","whale"],Li=i=>`<img data-art="${to[i??"barbarian"]??"soldat"}" alt="">`,q8=i=>`<b>${i}</b><small>e</small>`,gl=class{constructor(t,e="",n=null){S(this,"d",t);S(this,"invite",e);S(this,"after",n);S(this,"profile",null);S(this,"party",null);S(this,"past",[]);S(this,"tab","jouer");S(this,"filter","toutes");S(this,"msg","");S(this,"offset",0);S(this,"timer",null);S(this,"shown","");S(this,"closed",!1);S(this,"draftName","");S(this,"draftAvatar","barbarian");try{this.draftName=localStorage.getItem("ab-nom")??""}catch{}t.el.onclick=o=>this.click(o),t.el.oninput=o=>{let r=o.target;r.id==="ab-name"&&(this.draftName=r.value)},this.boot()}get code(){return this.party?.code??""}close(){this.closed=!0,this.timer&&clearTimeout(this.timer),this.d.el.onclick=null,this.d.el.oninput=null}async boot(){try{if(this.profile=await d0(this.d.rpc,this.d.key),!this.profile){this.render();return}await this.enter()}catch(t){this.fail(t),this.render(),this.retry()}}async enter(){let t=this.invite;this.invite="";try{this.party=await pl(this.d.rpc,this.d.key,t)}catch(e){this.fail(e),this.party=await pl(this.d.rpc,this.d.key)}this.sync(this.party),this.party.state==="launched"&&this.after&&(this.party=await yr(this.d.rpc,this.d.key,this.party.id,"reopen")??this.party),this.after==="again"&&this.party.state==="open"&&(this.party=await yr(this.d.rpc,this.d.key,this.party.id,"queue")??this.party),this.after=null,this.render(),this.loadHistory(),this.poll()}async loadHistory(){try{this.past=await Kb(this.d.rpc,this.d.key),this.render()}catch{}}sync(t){this.offset=t.now-Date.now()}retry(){this.timer=setTimeout(()=>{this.closed||this.boot()},3e3)}fail(t){this.msg=ml(t.message??String(t))}poll(){if(this.closed||!this.party)return;let t=this.party,e=t.state==="queued";this.timer=setTimeout(async()=>{if(!(this.closed||!this.party)){try{let n=await Wb(this.d.rpc,this.d.key,this.party.id);this.sync(n);let o=this.party.state;if(this.party=n,this.msg="",n.state==="launched"&&n.room&&o!=="launched"){this.close(),this.d.start(n.room);return}}catch(n){if(/not in this party/.test(n.message))try{this.party=await pl(this.d.rpc,this.d.key)}catch{}else this.fail(n)}this.render(),this.poll()}},e?1e3:1500),e&&setTimeout(()=>this.render(),500)}render(){if(this.closed)return;let t=this.profile?this.shell():this.creation();if(t===this.shown)return;let e=document.activeElement?.id;if(this.shown=t,this.d.el.innerHTML=W8(this.profile?"hub":"hub dark",t),E0(this.d.el),e==="ab-name"){let n=this.d.el.querySelector("#ab-name");n&&(n.focus(),n.setSelectionRange(n.value.length,n.value.length))}}creation(){let t=P0.map(e=>`<button class="avc${e===this.draftAvatar?" on":""}" data-a="avatar" data-t="${e}" aria-label="${e}">${Li(e)}</button>`).join("");return`<div class="newp"><div class="wt me">Nouveau profil</div>
      <label class="fld"><span>Pseudo</span><input id="ab-name" maxlength="16" value="${jt(this.draftName)}" autocomplete="nickname" spellcheck="false"><small class="hint">3 \xE0 16 caract\xE8res</small></label>
      <div class="fld"><span>Avatar</span><div class="avs">${t}</div></div>
      <button class="go" data-a="create">${ct("check")}<span>Confirmer</span></button>
      ${this.msg?`<div class="err" role="alert"><b>${jt(this.msg)}</b></div>`:""}</div>`}shell(){let t=this.profile,e=Ko(t.xp),n=lo(t.points,t.placements),r=`<div class="hbar"><span class="blogo">L\u2019\xC9clat</span><nav class="tabs">${["jouer","profil","historique"].map(p=>`<button class="tab${p===this.tab?" on":""}" data-a="tab" data-t="${p}">${p==="jouer"?"Jouer":p==="profil"?"Profil":"Historique"}</button>`).join("")}</nav>
      <div class="prof"><span class="av">${Li(t.avatar)}</span><span class="mn"><b>${jt(t.name)}</b><span class="ml"><small>Niv. ${e.level}</small>${ei(100*e.into/e.need,"xp")}</span></span>${Ro(n,30)}</div></div>`,a=this.tab==="jouer"?this.play():this.tab==="profil"?this.profileTab():this.historyTab();return`${r}<div class="hbody">${a}</div>${this.msg?`<div class="hmsg" role="alert">${jt(this.msg)}</div>`:""}`}group(t,e){let n=t.map(r=>`<div class="gm${r.me?" me":""}"><span class="face">${Li(r.avatar)}</span><span class="gn">${jt(r.name)}</span></div>`).join(""),o=e&&t.length<k.match.players?`<button class="gm add" data-a="invite"><span class="face">${ct("plus")}</span><span class="gn">Inviter</span></button>`:"";return`<div class="grp">${n}${o}</div>`}play(){let t=this.party;if(!t)return'<div class="panel salon"><div class="ph"><span class="t">Salon</span></div><p class="say">Connexion\u2026</p></div>';let e=t.state==="queued",n=t.state==="launched",o=`<div class="modes${e||n?" off":""}"><button class="md${t.mode==="normale"?" on":""}" data-a="mode" data-t="normale">Normale</button><button class="md${t.mode==="classee"?" on":""}" data-a="mode" data-t="classee">Class\xE9e</button></div>`,r;if(e){let p=this.elapsed();r=`<div class="srow2"><div class="sring sm"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="tr"/><circle cx="60" cy="60" r="52" class="sp" style="transform:rotate(${p*140%360}deg);transform-origin:60px 60px"/></svg><b>${Io(Math.floor(p))}</b></div>
        <div class="stxt"><b>Recherche\u2026</b><small>${t.mode==="classee"?"Class\xE9e":"Normale"}</small></div></div>
        <button class="btn big" data-a="cancel">${ct("close")}Annuler</button>`}else n?r=`<div class="stxt"><b>Partie en cours</b></div><button class="go" data-a="resume">${ct("replay")}<span>Reprendre</span></button><button class="btn big" data-a="abandon">Quitter la partie</button>`:r=`<button class="go" data-a="queue">${ct("swords")}<span>Jouer</span></button>`;return`<div class="panel salon"><div class="ph"><span class="t">Salon</span><span class="cap">${ct("person")}<b>${t.members.length}</b>/${k.match.players}</span></div>
      ${o}${this.group(t.members,!e&&!n)}<div class="sfoot">${r}</div></div>`+(e?this.searchList(t):t.mode==="classee"?this.rankedCard():this.normalCard())}elapsed(){let t=this.party;return t?.queuedAt?Math.max(0,(Date.now()+this.offset-t.queuedAt)/1e3):0}searchList(t){let e=t.found??t.members,n=k.match.players,o=n-e.length,r=t.seed===null||!t.wait?0:Math.min(o,Math.floor(o*this.elapsed()/t.wait)),a=t.seed===null?[]:nl(t.seed,e.map(c=>c.name),n),p=e.reduce((c,d)=>c+d.points,0)/e.length,s=e.reduce((c,d)=>c+d.level,0)/e.length,u=t.mode==="classee",f=(c,d,y)=>{if(!u)return`<span class="sr lvtag">Niv. ${y}</span>`;let m=lo(c,d);return`${Ro(m,24,!1)}<span class="sr">${vo(m)}</span>`},l=e.map((c,d)=>`<div class="seat q${c.me?" me":""}"><span class="sn">${d+1}</span><span class="face">${Li(c.avatar)}</span><span class="li">${jt(c.name)}</span>${f(c.points,c.placements,c.level)}</div>`);for(let c=0;c<r;c++){let d=e.length+c,y=P0[Be(t.seed,41,d)%P0.length];l.push(`<div class="seat q"><span class="sn">${d+1}</span><span class="face">${Li(y)}</span><span class="li">${jt(a[c])}</span>${f(r0(t.seed,d,p),Dt.placements,a0(t.seed,d,s))}</div>`)}for(let c=e.length+r;c<n;c++)l.push(`<div class="seat q free"><span class="sn">${c+1}</span><span class="li">\u2026</span></div>`);return`<div class="panel seats hubseats"><div class="ph"><span class="t steel">Joueurs</span><span class="cap">${ct("person")}<b>${e.length+r}</b>/${n}</span></div><div class="slist">${l.join("")}</div></div>`}lastOf(t){return this.past.filter(e=>e.mode===t).slice(0,5)}rankedCard(){let t=this.profile,e=lo(t.points,t.placements),n=`<button class="more" data-a="tab" data-t="historique">Historique${ct("arrow")}</button>`;if(e.tier===null){let p=this.lastOf("classee").slice(0,t.placements).reverse(),s=Array.from({length:Dt.placements},(u,f)=>{let l=p[f];return l?`<span class="hc ${l.place<=4?"w":"l"}"><b>${l.place}</b><small>${l.place<=4?"top 4":"\u2014"}</small></span>`:'<span class="hc empty"><b>\xB7</b><small>&nbsp;</small></span>'}).join("");return`<div class="panel ccard hub"><div class="ph"><span class="t">Class\xE9e</span>${n}</div>
        <div class="crank">${Ro(e,76)}<div class="rt"><b>Non class\xE9</b><small>Placement <em>${t.placements}</em> / ${Dt.placements}</small></div></div>
        <div class="hl"><span class="lab">Placement</span><div class="hcs">${s}</div></div></div>`}let o=this.lastOf("classee"),r=o.map(p=>`<span class="hc ${p.delta>=0?"w":"l"}"><b>${p.place}</b><small>${p.delta>=0?"+":"\u2212"}${Math.abs(p.delta)}</small></span>`).join("")+'<span class="hc empty"><b>\xB7</b><small>&nbsp;</small></span>'.repeat(Math.max(0,5-o.length)),a=t.best!==null?vo(lo(t.best,Dt.placements)):"\u2014";return`<div class="panel ccard hub"><div class="ph"><span class="t">Class\xE9e</span>${n}</div>
      <div class="crank">${Ro(e,76)}<div class="rt"><b>${vo(e)}</b>${e.tier==="Gladiateur"?"":ei(e.pts)}<small>${rs(e)}</small></div></div>
      <div class="hl"><span class="lab">Derni\xE8res parties</span><div class="hcs">${r}</div></div>
      <div class="kv"><span>Meilleur rang</span><b>${a}</b></div></div>`}normalCard(){let t=this.profile,e=Ko(t.xp),n=this.lastOf("normale"),o=this.past.filter(p=>p.mode==="normale"),r=n.map(p=>`<span class="hc ${p.place<=4?"w":"l"}"><b>${p.place}</b></span>`).join("")+'<span class="hc empty"><b>\xB7</b></span>'.repeat(Math.max(0,5-n.length)),a=o.length?`${Math.round(100*o.filter(p=>p.place<=4).length/o.length)} %`:"\u2014";return`<div class="panel ccard hub norm"><div class="ph"><span class="t steel">Normale</span><button class="more" data-a="tab" data-t="historique">Historique${ct("arrow")}</button></div>
      <div class="lvl big"><span class="lv"><small>Niv.</small><b>${e.level}</b></span><div class="lx">${ei(100*e.into/e.need,"xp")}<small><em>${e.into}</em> / ${e.need} XP</small></div></div>
      <div class="hl"><span class="lab">Derni\xE8res parties</span><div class="hcs">${r}</div></div>
      <div class="kv"><span>Parties</span><b>${t.stats?.normale??0}</b></div><div class="kv"><span>Top 4</span><b>${a}</b></div></div>`}profileTab(){let t=this.profile,e=Ko(t.xp),n=lo(t.points,t.placements),o=t.stats,r=o?.games??0,a=[["Parties",String(r)],["Victoires",String(o?.wins??0)],["Top 4",r?`${Math.round(100*(o?.top4??0)/r)} %`:"\u2014"],["Place moy.",o?.avg?String(Math.round(o.avg*10)/10).replace(".",","):"\u2014"]].map(([f,l])=>`<div class="stc"><b>${l}</b><small>${f}</small></div>`).join(""),p=Object.entries(t.troops).sort((f,l)=>l[1]-f[1]).slice(0,3),s=p.length?p.map(([f,l])=>`<div class="ft">${Li(f)}<b>${l}</b><small>parties</small></div>`).join(""):'<p class="say empty">\u2014</p>',u=t.best!==null?vo(lo(t.best,Dt.placements)):"\u2014";return`<div class="panel pcard"><div class="pid"><span class="avbig">${Li(t.avatar)}</span><div class="pn"><b>${jt(t.name)}</b>
        <div class="lvl"><span class="lv"><small>Niv.</small><b>${e.level}</b></span><div class="lx">${ei(100*e.into/e.need,"xp")}<small><em>${e.into}</em> / ${e.need} XP</small></div></div></div></div>
        <div class="stg">${a}</div></div>
      <div class="pcol">
        <div class="panel prank"><div class="ph"><span class="t">Class\xE9e</span></div>
          <div class="crank">${Ro(n,60)}<div class="rt"><b>${vo(n)}</b>${n.tier===null?`<small>Placement <em>${t.placements}</em> / ${Dt.placements}</small>`:n.tier==="Gladiateur"?`<small>${rs(n)}</small>`:`${ei(n.pts)}<small>${rs(n)}</small>`}</div></div>
          <div class="kv"><span>Meilleur rang</span><b>${u}</b></div></div>
        <div class="panel pfav"><div class="ph"><span class="t steel">Troupes favorites</span></div><div class="fts">${s}</div></div>
      </div>`}historyTab(){let t=this.past.filter(n=>this.filter==="toutes"||n.mode===this.filter).map(n=>{let o=n.mode==="classee",r=o&&n.placements<=Dt.placements,a=r?`Placement ${n.placements}/${Dt.placements}`:o?`${n.delta>=0?"+":"\u2212"}${Math.abs(n.delta)} pts`:`+${n.xp} XP`,p=o?lo(n.points,n.placements):null,s=p?`${Ro(p,22,!1)}<span>${vo(p)}</span>`:"<span></span>",u=(n.army?.length?n.army:[null]).map(f=>`<span class="face">${f?Li(f):ct("person")}</span>`).join("");return`<div class="hrow ${n.place<=4?"w":"l"}"><span class="hpl">${q8(n.place)}</span><span class="hm${o?" cl":""}">${o?"Class\xE9e":"Normale"}</span>
        <span class="ha">${u}</span><span class="hg ${o&&!r?n.delta>=0?"up":"dn":""}${r?" pl":""}">${a}</span><span class="hr">${s}</span>
        <span class="hw"><b>${Io(Math.max(0,(n.end-n.start)/1e3))}</b><small>${K8(Date.now()+this.offset-n.end)}</small></span></div>`}).join("");return`<div class="panel hist"><div class="ph"><span class="t">Historique</span><div class="filters">${["toutes","normale","classee"].map(n=>`<button class="ft2${n===this.filter?" on":""}" data-a="filter" data-t="${n}">${n==="toutes"?"Toutes":n==="normale"?"Normale":"Class\xE9e"}</button>`).join("")}</div></div>
      <div class="hlist">${t||'<p class="say empty">Aucune partie.</p>'}</div></div>`}async act(t){try{let e=await t();e&&(this.party=e,this.sync(e)),this.msg=""}catch(e){this.fail(e)}this.render()}click(t){let e=t.target.closest("[data-a]");if(!e)return;let n=e.dataset.a,o=e.dataset.t??"",r=this.party,a=this.d.key,p=this.d.rpc;switch(n){case"avatar":this.draftAvatar=o,this.render();break;case"create":{let s=this.draftName.trim();try{localStorage.setItem("ab-nom",s)}catch{}Gb(p,a,s,this.draftAvatar).then(async u=>{this.profile=u,this.msg="",await this.enter()},u=>{this.fail(u),this.render()});break}case"tab":this.tab=o,(o==="historique"||o==="profil")&&(this.loadHistory(),d0(p,a).then(s=>{s&&(this.profile=s,this.render())})),this.render();break;case"filter":this.filter=o,this.render();break;case"mode":r&&r.state==="open"&&(r.mode=o,this.render(),this.act(()=>yr(p,a,r.id,"mode",o)));break;case"queue":r&&this.act(()=>yr(p,a,r.id,"queue"));break;case"cancel":r&&this.act(()=>yr(p,a,r.id,"cancel"));break;case"abandon":r&&this.act(()=>yr(p,a,r.id,"reopen"));break;case"resume":r?.room&&(this.close(),this.d.start(r.room));break;case"invite":r&&this.share(r.code,e);break}}share(t,e){let n=`${location.origin}${location.pathname}?groupe=${t}`,o="Rejoins mon groupe sur L\u2019\xC9clat";if(typeof navigator.share=="function"){navigator.share({title:"L\u2019\xC9clat",text:o,url:n}).catch(()=>{});return}let r=()=>{let a=e.querySelector(".gn");a&&(a.textContent="Lien copi\xE9",setTimeout(()=>{a.textContent="Inviter"},2500))};navigator.clipboard?navigator.clipboard.writeText(`${o}
${n}`).then(r,()=>{this.msg=`Lien : ${n}`,this.render()}):(this.msg=`Lien : ${n}`,this.render())}};function K8(i){let t=Math.max(0,Math.floor(i/6e4));if(t<1)return"\xE0 l\u2019instant";if(t<60)return`il y a ${t} min`;let e=Math.floor(t/60);if(e<24)return`il y a ${e} h`;let n=Math.floor(e/24);return n===1?"hier":`il y a ${n} j`}var Tl=class{constructor(t,e){S(this,"now",t);S(this,"seed",e);S(this,"games",new Map);S(this,"seq",0);S(this,"n",0);S(this,"profiles",new Map);S(this,"parties",new Map);S(this,"waitOf",()=>Dt.wait[0]+this.n++%(Dt.wait[1]-Dt.wait[0]+1));S(this,"rpc",async(t,e)=>{let n=e.p_secret;switch(t){case"autobattler_open":{let o={id:`g${++this.n}`,code:`C${this.n}`.padEnd(5,"X"),seed:null,startAt:null,seats:[{seat:0,name:e.p_name,key:n,seenAt:this.now()}],log:[],shift:0,closed:0};return this.games.set(o.id,o),this.room(o,0)}case"autobattler_join":{let o=[...this.games.values()].find(a=>a.code===String(e.p_code).toUpperCase());if(!o)throw new Error("unknown game");let r=o.seats.find(a=>a.key===n);if(r)return this.room(o,r.seat);if(o.startAt!==null)throw new Error("already started");if(o.seats.length>=8)throw new Error("game full");return o.seats.push({seat:o.seats.length,name:e.p_name,key:n,seenAt:this.now()}),this.room(o,o.seats.length-1)}case"autobattler_room":{let{g:o,seat:r}=this.me(n,e.p_game);return this.room(o,r)}case"autobattler_launch":{let{g:o,seat:r}=this.me(n,e.p_game);if(r!==0)throw new Error("only the creator can launch");return o.startAt===null&&(o.seed=this.seed?this.seed():Be(this.n,99)&2147483647,o.startAt=this.now()+5e3),this.room(o,r)}case"autobattler_act":{let{g:o,seat:r}=this.me(n,e.p_game);if(o.startAt===null)throw new Error("not started");let a=o.log.find(c=>c.cid===e.p_cid);if(a)return{seq:a.seq,now:this.now(),shift:o.shift};let p=(this.now()-o.startAt)/1e3+o.shift,s=e.p_kind,u=e.p_round;if(!Ts(s,u,p,o.closed))throw new Error("late");let f=c=>o.log.some(d=>d.round===u&&d.kind==="here"&&!o.log.some(y=>y.round===u&&y.kind===c&&y.seat===d.seat));if(s==="end"&&f("drops"))throw new Error("not over");let l={seq:++this.seq,seat:r,round:u,kind:s,data:JSON.parse(JSON.stringify(e.p_data)),cid:e.p_cid};return o.log.push(l),s==="end"?(o.closed=u,o.shift+=Math.max(0,Mi(u)-p)):s==="ready"&&!f("ready")&&(o.shift+=Math.max(0,Sn(u)-p)),{seq:l.seq,now:this.now(),shift:o.shift}}case"autobattler_log":{let{g:o}=this.me(n,e.p_game);return{now:this.now(),shift:o.shift,entries:o.log.filter(r=>r.seq>e.p_since).map(r=>({...r}))}}case"autobattler_profile":{let o=this.profiles.get(n);return o?this.profileJson(o):null}case"autobattler_profile_save":{let o=String(e.p_name??"").trim();if(o.length<3||o.length>16)throw new Error("bad name");if(!["barbarian","archer","tank","assassin","druid","whale"].includes(e.p_avatar))throw new Error("bad avatar");let r=this.profiles.get(n)??{key:n,name:o,avatar:"barbarian",xp:0,points:Dt.placementStart,placements:0,best:null};return r.name=o,r.avatar=e.p_avatar,this.profiles.set(n,r),this.profileJson(r)}case"autobattler_party":{if(!this.profiles.has(n))throw new Error("no profile");let o=this.partyOf(n),r=String(e.p_code??"").trim().toUpperCase();if(r){let p=[...this.parties.values()].find(s=>s.code===r);if(!p)throw new Error("unknown party");if(o!==p){if(p.state!=="open")throw new Error("party busy");if(p.members.length>=8)throw new Error("party full");o&&(o.members=o.members.filter(s=>s.key!==n),o.members.length||this.parties.delete(o.id)),p.members.push({key:n,joined:this.now()+this.n++*.001,seen:this.now()})}return this.partyJson(p,n)}if(o)return this.partyJson(o,n);let a={id:`p${++this.n}`,code:`G${this.n}`.padEnd(5,"Z"),mode:"normale",state:"open",queuedAt:null,wait:null,seed:null,game:null,members:[{key:n,joined:this.now(),seen:this.now()}]};return this.parties.set(a.id,a),this.partyJson(a,n)}case"autobattler_party_view":{let o=this.parties.get(e.p_party),r=o?.members.find(a=>a.key===n);if(!o||!r)throw new Error("not in this party");if(r.seen=this.now(),o.state==="open")o.members=o.members.filter(a=>this.now()-a.seen<=2e4);else if(o.state==="queued"){let a=this.batch(o);(this.now()>=o.queuedAt+o.wait*1e3||a.reduce((p,s)=>p+s.members.length,0)>=8)&&this.launch(a)}return this.partyJson(o,n)}case"autobattler_party_set":{let o=this.parties.get(e.p_party);if(!o||!o.members.some(a=>a.key===n))throw new Error("not in this party");let r=e.p_what;if(r==="mode"&&o.state==="open"&&(e.p_mode==="normale"||e.p_mode==="classee"))o.mode=e.p_mode;else if(r==="queue"&&o.state==="open")o.state="queued",o.queuedAt=this.now(),o.wait=this.waitOf(),o.seed=this.seed?this.seed():Be(++this.n,77)&2147483647;else if(r==="cancel"&&o.state==="queued")o.state="open",o.queuedAt=null,o.wait=null;else if(r==="reopen"&&o.state==="launched")o.state="open",o.queuedAt=null,o.wait=null,o.game=null;else if(r==="leave")return o.state==="queued"&&(o.state="open",o.queuedAt=null,o.wait=null),o.members=o.members.filter(a=>a.key!==n),o.members.length||this.parties.delete(o.id),null;return this.partyJson(o,n)}case"autobattler_finish":{let{g:o,seat:r}=this.me(n,e.p_game);if(!o.mode)throw new Error("not a queue game");let a=o.seats[r];Array.isArray(e.p_army)&&e.p_army.length<=3&&(a.army=e.p_army);let p=o.seats.reduce((s,u)=>s+(u.points??0),0)/o.seats.length;for(let[s,u]of Object.entries(e.p_places??{})){let f=o.seats[Number(s)];if(!f||f.place)continue;let l=Math.min(8,Math.max(1,Number(u))),c=(f.placements??0)<Dt.placements,d=o.mode==="classee"?el(l,f.points??0,p,c):0;f.place=l,f.xp=vb(l),f.delta=d,f.after=Math.max(0,(f.points??0)+d),f.endedAt=this.now();let y=this.profiles.get(f.key);y.xp+=f.xp,o.mode==="classee"&&(y.points=Math.max(0,y.points+d),y.placements++,y.placements>=Dt.placements&&(y.best=Math.max(y.best??0,y.points)))}return a.place?{place:a.place,delta:a.delta,xp:a.xp,pointsBefore:a.points,pointsAfter:a.after,placementsBefore:a.placements,levelBefore:a.level,profile:this.profileJson(this.profiles.get(n))}:null}case"autobattler_history":return[...this.games.values()].filter(r=>r.mode).flatMap(r=>r.seats.filter(a=>a.key===n&&a.place).map(a=>({mode:r.mode,place:a.place,delta:a.delta,xp:a.xp,points:a.after,placements:(a.placements??0)+(r.mode==="classee"?1:0),army:a.army??null,start:r.startAt,end:a.endedAt}))).sort((r,a)=>a.end-r.end).slice(0,30)}throw new Error(`unknown function ${t}`)})}room(t,e){return{id:t.id,code:t.code,seat:e,seed:t.seed,startAt:t.startAt,now:this.now(),mode:t.mode??null,players:t.seats.map(n=>({seat:n.seat,name:n.name,seenAt:n.seenAt,points:n.points??null,level:n.level??null,placements:n.placements??null,avatar:n.avatar??null}))}}profileJson(t){let e=[...this.games.values()].flatMap(r=>r.seats.filter(a=>a.key===t.key&&a.place).map(a=>({s:a,g:r}))),n={};for(let{s:r}of e)for(let a of r.army??[])n[a]=(n[a]??0)+1;let o={games:e.length,wins:e.filter(({s:r})=>r.place===1).length,top4:e.filter(({s:r})=>r.place<=4).length,avg:e.length?e.reduce((r,{s:a})=>r+a.place,0)/e.length:null,normale:e.filter(({g:r})=>r.mode==="normale").length};return{name:t.name,avatar:t.avatar,xp:t.xp,points:t.points,placements:t.placements,best:t.best,stats:o,troops:n}}member(t,e){let n=this.profiles.get(e.key);return{name:n.name,avatar:n.avatar,level:Ko(n.xp).level,points:n.points,placements:n.placements,me:e.key===t}}batch(t){let e=[t],n=t.members.length,o=[...this.parties.values()].filter(r=>r.state==="queued"&&r.mode===t.mode&&r!==t).sort((r,a)=>r.queuedAt-a.queuedAt);for(let r of o)n+r.members.length<=8&&(e.push(r),n+=r.members.length);return e}partyJson(t,e){let n=t.state==="launched"&&t.game?(()=>{let o=this.games.get(t.game);return this.room(o,o.seats.find(r=>r.key===e)?.seat??-1)})():null;return{id:t.id,code:t.code,mode:t.mode,state:t.state,now:this.now(),queuedAt:t.queuedAt,wait:t.wait,seed:t.state==="queued"?t.seed:null,members:[...t.members].sort((o,r)=>o.joined-r.joined).map(o=>this.member(e,o)),found:t.state==="queued"?this.batch(t).flatMap(o=>[...o.members].sort((r,a)=>r.joined-a.joined).map(r=>this.member(e,r))):null,room:n}}launch(t){let e={id:`g${++this.n}`,code:`Q${this.n}`.padEnd(5,"X"),seed:t[0].seed??Be(this.n,77)&2147483647,startAt:this.now()+5e3,seats:[],log:[],shift:0,closed:0,mode:t[0].mode};for(let n of t)for(let o of[...n.members].sort((r,a)=>r.joined-a.joined)){let r=this.profiles.get(o.key);e.seats.push({seat:e.seats.length,name:r.name,key:o.key,seenAt:this.now(),points:r.points,level:Ko(r.xp).level,placements:r.placements,avatar:r.avatar})}this.games.set(e.id,e);for(let n of t)n.state="launched",n.game=e.id}partyOf(t){return[...this.parties.values()].find(e=>e.members.some(n=>n.key===t))}me(t,e){let n=this.games.get(e),o=n?.seats.find(r=>r.key===t);if(!n||!o)throw new Error("not a player of this game");return o.seenAt=this.now(),{g:n,seat:o.seat}}},El=class{constructor(t,e=80,n=0){S(this,"now",t);S(this,"latency",e);S(this,"loss",n);S(this,"queue",[]);S(this,"listeners",new Set);S(this,"cut",new Set);S(this,"k",1)}channel(t){return{connected:()=>t===void 0||!this.cut.has(t),send:e=>{this.cut.has(e.from)||(this.k=this.k*16807%2147483647,!(this.loss&&this.k%1e3/1e3<this.loss)&&this.queue.push({at:this.now()+this.latency+this.k%40,m:JSON.parse(JSON.stringify(e))}))},listen:e=>(this.listeners.add(e),()=>this.listeners.delete(e))}}deliver(){let t=this.now(),e=this.queue.filter(n=>n.at<=t);this.queue=this.queue.filter(n=>n.at>t);for(let n of e)if(!this.cut.has(n.m.to))for(let o of this.listeners)o(n.m)}};var tE=globalThis.__PLANETOID_NET,Mo=tE??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var cy=()=>!!Mo.url&&!!Mo.key;var hy=async(i,t)=>{let e={apikey:Mo.key,"Content-Type":"application/json"};Mo.key.startsWith("sb_")||(e.Authorization=`Bearer ${Mo.key}`);let n;try{n=await fetch(`${Mo.url}/rest/v1/rpc/${i}`,{method:"POST",headers:e,body:JSON.stringify(t)})}catch{throw new Error("Pas de connexion au serveur.")}let o=await n.text();if(!n.ok){let r=o;try{r=JSON.parse(o).message??o}catch{}throw(n.status===404||/Could not find the function/.test(r))&&(r="Le serveur de ce mode n\u2019est pas encore install\xE9 (game/src/autobattler/net/schema.sql)."),new Error(ml(r))}return o?JSON.parse(o):null},ly={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function Vl(){let i=ly.get("ab-cle");if(!i||i.length<20){let t=crypto.getRandomValues(new Uint8Array(32));i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),ly.set("ab-cle",i)}return i}var Sl=class{constructor(t,e,n){S(this,"url",t);S(this,"key",e);S(this,"ws",null);S(this,"ref",0);S(this,"joined",!1);S(this,"queue",[]);S(this,"listeners",new Set);S(this,"beat",null);S(this,"closed",!1);S(this,"topic");this.topic=`realtime:${n}`,this.open()}open(){if(this.closed)return;let t=new WebSocket(`${this.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${encodeURIComponent(this.key)}&vsn=1.0.0`);this.ws=t,this.joined=!1,t.onopen=()=>{this.raw({topic:this.topic,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:""},postgres_changes:[],private:!1}},ref:String(++this.ref),join_ref:"1"}),this.beat=setInterval(()=>this.raw({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++this.ref)}),25e3)},t.onmessage=e=>{let n;try{n=JSON.parse(String(e.data))}catch{return}if(n.topic===this.topic){if(n.event==="phx_reply"&&n.payload.status==="ok"&&!this.joined){this.joined=!0;for(let o of this.queue.splice(0))t.send(o)}else if(n.event==="broadcast"&&n.payload.event==="duel"&&n.payload.payload)for(let o of this.listeners)o(n.payload.payload)}},t.onclose=()=>{this.beat&&clearInterval(this.beat),this.beat=null,this.closed||setTimeout(()=>this.open(),800)},t.onerror=()=>{try{t.close()}catch{}}}raw(t){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}send(t){let e=JSON.stringify({topic:this.topic,event:"broadcast",payload:{type:"broadcast",event:"duel",payload:t},ref:String(++this.ref),join_ref:"1"});this.joined&&this.ws?.readyState===WebSocket.OPEN?this.ws.send(e):this.queue.length<50&&this.queue.push(e)}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}connected(){return this.joined&&this.ws?.readyState===WebSocket.OPEN&&(typeof navigator>"u"||navigator.onLine!==!1)}close(){this.closed=!0,this.beat&&clearInterval(this.beat),this.ws?.close()}};var wl=class{constructor(t,e,n,o,r,a,p=!0,s=k.net.delayTicks){S(this,"game",t);S(this,"round",e);S(this,"me",n);S(this,"opp",o);S(this,"net",r);S(this,"now",a);S(this,"delay",s);S(this,"mine",[]);S(this,"theirs",[]);S(this,"prefix",0);S(this,"delivered",0);S(this,"acked",0);S(this,"best",k.net.delayTicks-1);S(this,"claims",[]);S(this,"myTick",0);S(this,"heard");S(this,"goneAt",null);S(this,"cutAt",null);S(this,"stop");S(this,"timer",null);this.heard=a(),this.stop=r.listen(u=>this.receive(u)),p&&(this.timer=setInterval(()=>this.flush(),k.net.sendEvery)),this.flush()}send(t){this.mine.push(t),this.flush()}flush(){this.net.send({g:this.game,r:this.round,from:this.me,to:this.opp,upTo:this.myTick+this.delay-1,count:this.mine.length,base:this.acked,drops:this.mine.slice(this.acked),ack:this.prefix,...this.goneAt===null?{}:{cut:this.goneAt}})}receive(t){if(!(t.g!==this.game||t.r!==this.round||t.from!==this.opp||t.to!==this.me)){for(this.heard=this.now(),typeof t.cut=="number"&&this.cutAt===null&&(this.cutAt=t.cut),t.ack>this.acked&&(this.acked=Math.min(t.ack,this.mine.length)),t.drops.forEach((e,n)=>{this.theirs[t.base+n]||(this.theirs[t.base+n]=e)});this.theirs[this.prefix];)this.prefix++;this.claims.push({upTo:t.upTo,count:t.count}),this.claims=this.claims.filter(e=>e.count<=this.prefix?(e.upTo>this.best&&(this.best=e.upTo),!1):!0)}}take(){let t=this.theirs.slice(this.delivered,this.prefix);return this.delivered=this.prefix,t}promised(){return this.myTick+this.delay-1}frontier(t){return t>this.myTick&&(this.myTick=t),this.goneAt===null?this.best+1:1/0}silence(){return this.now()-this.heard}linked(){return this.net.connected?.()??!0}cutOff(){return this.goneAt===null&&(this.goneAt=this.best+1,this.flush()),this.goneAt}gone(){return this.goneAt}cutMe(){return this.cutAt}seen(){return this.theirs.slice(0,this.prefix)}close(){this.timer&&clearInterval(this.timer),this.timer=null,this.stop()}};var Pl=class{constructor(t,e,n){S(this,"seat",t);S(this,"drops",[]);S(this,"prefix",0);S(this,"delivered",0);S(this,"best",-1);S(this,"claims",[]);S(this,"heard");S(this,"stopAt",null);this.heard=e,(t===null||!n)&&(this.stopAt=0)}},Ll=class{constructor(t,e,n,o,r,a){S(this,"game",t);S(this,"round",e);S(this,"now",a);S(this,"sides");S(this,"stop");this.sides=[new Pl(n[0],a(),o[0]),new Pl(n[1],a(),o[1])],this.stop=r.listen(p=>this.receive(p))}receive(t){if(t.g!==this.game||t.r!==this.round)return;let e=this.sides.findIndex(r=>r.seat===t.from);if(e<0)return;let n=this.sides[e],o=this.sides[1-e];for(n.heard=this.now(),t.drops.forEach((r,a)=>{n.drops[t.base+a]||(n.drops[t.base+a]=r)});n.drops[n.prefix];)n.prefix++;n.claims.push({upTo:t.upTo,count:t.count}),n.claims=n.claims.filter(r=>r.count<=n.prefix?(r.upTo>n.best&&(n.best=r.upTo),!1):!0),typeof t.cut=="number"&&o.seat===t.to&&(o.stopAt===null||t.cut<o.stopAt)&&(o.stopAt=t.cut)}take(t){let e=this.sides[t],n=e.drops.slice(e.delivered,e.prefix);return e.delivered=e.prefix,e.stopAt===null?n:n.filter(o=>o.tick<e.stopAt)}frontier(){let t=1/0;for(let e of this.sides)if(e.stopAt===null){if(this.now()-e.heard>k.net.cutSeconds){e.stopAt=e.best+1;continue}t=Math.min(t,e.best+1)}return t}close(){this.stop()}},Ul=class{constructor(t,e,n,o,r,a=!0,p=k.net.delayTicks){S(this,"game",t);S(this,"round",e);S(this,"me",n);S(this,"opp",o);S(this,"net",r);S(this,"delay",p);S(this,"mine",[]);S(this,"myTick",0);S(this,"timer",null);a&&(this.timer=setInterval(()=>this.flush(),200))}at(t){t>this.myTick&&(this.myTick=t)}promised(){return this.myTick+this.delay-1}send(t){this.mine.push(t),this.flush()}flush(){this.net.send({g:this.game,r:this.round,from:this.me,to:this.opp,upTo:this.promised(),count:this.mine.length,base:0,drops:this.mine,ack:0})}close(){this.timer&&clearInterval(this.timer),this.timer=null}};var xi=new URLSearchParams(location.search),my=xi.has("local")||!cy(),fs=my?new Tl(()=>Date.now()):null;fs&&xi.has("wait")&&(fs.waitOf=()=>Number(xi.get("wait")));var C0=fs?fs.rpc:hy,x0=my?new El(()=>Date.now(),0):null;{let i=document.createElement("style");i.textContent=`@font-face{font-family:"Bungee";src:url(${$h}) format("woff2");font-display:block}
@font-face{font-family:"Rubik";src:url(${kh}) format("woff2");font-weight:400 800;font-display:block}
${Ah}
${Ih}
${_h}`,document.head.appendChild(i)}_l();w0();Promise.race([Promise.all([document.fonts.load("16px Bungee"),document.fonts.load("600 16px Rubik")]),new Promise(i=>setTimeout(i,2500))]).then(()=>document.getElementById("boot")?.remove(),()=>document.getElementById("boot")?.remove());var On=document.getElementById("scene"),ce=new tl(On),O0=window,de=null,ve=null,I0=document.createElement("div");document.body.appendChild(I0);function gy(i,t=null,e=null){I0.innerHTML="",de?.auth.close(),ve?.root.remove(),de=new al(i,t),Ml=-1,Rl=!1,de.smooth=!0,de.replayBudgetMs=8,de.watchers=e,i.solo&&xi.has("spect")&&(de.watchers={watch:()=>{throw new Error("no humans to follow alone")},announce:()=>({at(){},promised:()=>-1,send(){},close(){}})}),i.onChange=()=>de?.update(),ve=new bl(()=>de,{ready:()=>de.ready(),next:()=>{let n=de;n.auth.skip?.(n.stageEnd)},again:()=>vl("again"),home:()=>vl("back"),quit:()=>vl(),spectate:()=>{}}),de.update()}function vl(i=null){de?.auth.close(),de=null,ve?.root.remove(),ve=null,ce.setBattle(null),ls?.close(),ls=new gl({el:I0,rpc:C0,key:Vl(),start:eE},dy,i),dy=""}var dy=(xi.get("groupe")??"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5),ls=null;function eE(i){ls?.close(),ls=null;let t=x0?x0.channel(i.seat):new Sl(Mo.url,Mo.key,`ab-${i.id}`),e=new yl(C0,Vl(),i.id,i),n=e.close.bind(e);e.close=()=>{n(),t.close?.()};let o=()=>performance.now()/1e3;gy(e,(p,s,u)=>new wl(i.id,p,s,u,t,o),{watch:(p,s,u)=>new Ll(i.id,p,s,u,t,o),announce:(p,s,u)=>new Ul(i.id,p,s,u,t)}),i.mode&&(de.queue=new sl(i,C0,Vl()))}var nE=110,oE=12,vn=null,We=null,eo=null,v0=0,Cl=0,R0=!1,Ci=new Map,Ui=null;On.style.touchAction="none";var Ty=()=>{let[i,t]=[...Ci.values()];return{d:Math.hypot(i.x-t.x,i.y-t.y)||1,x:(i.x+t.x)/2,y:(i.y+t.y)/2}},iE=()=>{let i=de,t=i?.fight;return!!i&&!!ve&&!!t&&i.stage==="battle"&&!t.b.over&&i.link==="ok"&&i.counting<=0&&ve.armed&&t.b.left(i.mySide)[ve.pick]>0},rE=()=>{let i=de,t=i?.fight;return!!i&&!!ve&&!!t&&i.stage==="battle"&&!t.b.over&&i.link==="ok"&&!ve.prepShown&&!i.next&&ve.armed&&t.b.left(i.mySide)[ve.pick]>0},Ey=(i,t,e)=>{We=null,vn={x:t,y:e,id:i},ce.showRed=!0,v0=0,R0=!1,Sy(performance.now())};On.addEventListener("pointerdown",i=>{if(oi.unlock(),Ci.set(i.pointerId,{x:i.clientX,y:i.clientY}),On.setPointerCapture?.(i.pointerId),Ci.size===2){vn=null,We=null,eo=null,ce.showRed=!1,Ui=Ty();return}if(!(Ci.size>2||Ui)){if(iE()){We={x:i.clientX,y:i.clientY,id:i.pointerId,at:performance.now()};return}eo={x:i.clientX,y:i.clientY,id:i.pointerId}}});On.addEventListener("pointermove",i=>{let t=Ci.get(i.pointerId);if(t&&(t.x=i.clientX,t.y=i.clientY),Ui&&Ci.size>=2){let e=Ty();ce.zoomAt(e.d/Ui.d,e.x,e.y,On),ce.panScreen(Ui.x,Ui.y,e.x,e.y,On),Ui=e,D0();return}if(We&&i.pointerId===We.id&&Math.hypot(i.clientX-We.x,i.clientY-We.y)>oE&&(eo={x:We.x,y:We.y,id:We.id},We=null),eo&&i.pointerId===eo.id){ce.panScreen(eo.x,eo.y,i.clientX,i.clientY,On),eo.x=i.clientX,eo.y=i.clientY,D0();return}vn&&i.pointerId===vn.id&&(vn.x=i.clientX,vn.y=i.clientY)});var D0=()=>{de?.stage==="battle"&&!ve?.prepShown&&ce.keepView()},Vy=i=>{if(Ci.delete(i.pointerId),We&&i.pointerId===We.id){let t=We;Ey(t.id,t.x,t.y),vn=null,ce.showRed=!1}vn&&i.pointerId===vn.id&&(vn=null,ce.showRed=!1),eo&&i.pointerId===eo.id&&(eo=null),Ci.size===0&&(Ui=null)};On.addEventListener("pointerup",Vy);On.addEventListener("pointercancel",Vy);On.addEventListener("wheel",i=>{i.preventDefault(),ce.zoomAt(Math.exp(-i.deltaY*.0015),i.clientX,i.clientY,On),D0()},{passive:!1});function Sy(i){let t=de;if(We&&i-We.at>=nE&&Ey(We.id,We.x,We.y),!vn||!t||!ve||i-v0<1e3*Dr(ve.pick)/k.tickHz)return;let e=Fe(ve.pick);if(e&&R0)return;v0=i;let n=ce.pick(vn.x,vn.y,On);if(!n)return;let o=Cl*2.399,r=e?0:.25+.12*(Cl%5),a=n.x+Math.cos(o)*r,p=n.y+Math.sin(o)*r;t.drop(ve.pick,a,p)?(Cl++,e?(R0=!0,oi.play("troop_drop",{vol:.7})):Cl%3===1&&oi.play("troop_drop",{vol:.5})):t.link==="ok"&&t.fight&&t.fight.b.left(t.mySide)[ve.pick]>0&&ve.toast(ve.pick==="banner"?"Pas ici : chez l\u2019ennemi ou trop pr\xE8s d\u2019un monstre":e?"Pas ici : sur le terrain":"Pas ici : sur ta moiti\xE9, loin des ennemis")}var by=performance.now(),L0=0,xl=0,M0=0,U0="",Ol=0,Rl=!1,Ml=-1,yy=i=>{if(Ml===i.round||!i.alive)return;Ml=i.round;let t=i.myFought();oi.jingle(t&&t.loser===i.me?"music_lose":"music_win")};function wy(i){let t=Math.min(.1,(i-by)/1e3);by=i,L0++,xl+=t,xl>1&&(M0=L0/xl,L0=0,xl=0),Er&&Er.step(t),x0?.deliver();let e=de;if(e){e.stats.frame(t,e.link!=="ok"),e.update(),Sy(i),e.stage!==U0&&(e.stage==="battle"&&(oi.music("music_raid"),Ol=0,ce.battleView()),e.stage==="prep"&&!Rl&&ce.resetView(),U0==="battle"&&oi.music(null),e.stage==="results"&&!e.next&&yy(e),U0=e.stage),e.next&&e.myEndAt>=0&&Ml!==e.round&&(oi.music(null),yy(e)),e.queue?.tick(e.m,e.me),ve?.render();let n=!!ve?.prepShown;n&&!Rl&&e.stage!=="prep"&&ce.resetView(),Rl=n,e.auth.solo&&(e.stage==="battle"&&e.myBattleOver&&!e.watchers&&(Ol||(Ol=i),i-Ol>1600&&e.auth.skip?.(e.stageEnd)),!e.alive&&e.stage!=="over"&&e.auth.skip?.(e.stageEnd));let o=(e.stage==="battle"||e.stage==="results")&&!n?e.shown():null;ce.setSide(o?o.side:e.mySide),ce.setBattle(o?.b??null)}ve&&(ce.dropKind=ve.pick),ce.readyRed=!vn&&!!de&&!!ve&&rE(),ce.frame(t,e?e.alpha():Er?Er.alpha:1),A0&&(A0.textContent=`${M0.toFixed(0)} i/s \xB7 ${ce.drawn} troupes \xB7 ${ce.jsMs.toFixed(1)} ms de script`),requestAnimationFrame(wy)}var Dl=Number(xi.get("load")??0),A0=null,Er=Dl>0?(()=>{let i=Jn();i.barbarian=Dl;let t={...ho[0],monsters:[]},e=t.width,n=t.length,o=t.starts[0][0][3]-1,r=new vr([{counts:{...i},upgrades:Rr()},{counts:{...i},upgrades:Rr()}],{map:t});for(let p=0;p<Dl;p++){let s=e/2+(p%14-6.5)*.7,u=o-Math.floor(p/14)*.9;r.schedule({tick:0,side:0,kind:"barbarian",x:s,y:u,seq:p}),r.schedule({tick:0,side:1,kind:"barbarian",x:e-s,y:n-u,seq:p})}ce.setBattle(r);let a={acc:0,alpha:1,b:r,step(p){for(a.acc+=p;a.acc>=Me;)a.acc-=Me,r.over||r.step();a.alpha=a.acc/Me}};return a})():null;if(Er||xi.has("fps")){let i=document.createElement("div");i.className="ab",i.innerHTML=`<div><div class="plate fps"></div>${Er?`<div class="loadbar">
    <button class="btn mid" onclick="location.search='?dev'">${ct("arrow","ic flip")}Retour</button>
    <button class="btn mid" onclick="location.reload()">${ct("replay")}Relancer</button><span class="plate">2 \xD7 ${Dl} en m\xEAl\xE9e</span></div>`:""}</div>`,document.body.appendChild(i),A0=i.querySelector(".fps")}O0.game={get session(){return de},party:()=>ls?.code??"",memory:fs,solo(i=1,t="Benoit"){return gy(new Es(i,t)),de.stage},skip(){let i=de;return i.auth.skip?.(i.stageEnd),i.update(),i.stage},advance(i){let t=de;return t.auth.skip?.(t.auth.clock()+i),t.update(),{stage:t.stage,tick:t.fight?.b.tick}},do(i){return de.do(i)},drop(i,t,e,n=1){let o=0;for(let r=0;r<n;r++)de.drop(i,t+r%6*.7,e+Math.floor(r/6)*.7)&&o++;return o},red(i){ce.showRed=i},state(){let i=de;return{stage:i.stage,round:i.round,hp:i.player.hp,gold:i.player.gold,side:i.mySide,opp:i.oppSeat,alive:i.alive,units:i.fight?.b.units.length??0,troops:xe.length}},fps:()=>({fps:M0,js:ce.jsMs,drawn:ce.drawn}),link(i,t=!1){let e=de;return e.link=i,e.oppLost=t,e.link},watch(i){return de.watch(i),de.watching},look(i,t,e=1.8){return ce.lookAt(i,t,e),ce.zoom},zoom(i,t=innerWidth/2,e=innerHeight/2){return i===0?ce.resetView():ce.zoomAt(i,t,e,On),ce.zoom}};ce.ready.then(()=>{O0.__ready=!0},i=>{console.error(i),O0.__ready=!0});!Er&&!xi.has("nohome")&&vl();requestAnimationFrame(wy);export{gy as play};
