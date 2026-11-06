var Sd=Object.defineProperty;var Pd=(i,t,e)=>t in i?Sd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var M=(i,t,e)=>Pd(i,typeof t!="symbol"?t+"":t,e);var oc=()=>document.documentElement.classList.contains("rot"),Ud=()=>window.__screen??{w:innerWidth,h:innerHeight};function wd(){let i=(t,e,n)=>{Object.defineProperty(t,"clientX",{configurable:!0,enumerable:!0,get(){return oc()?n.call(this):e.call(this)}}),Object.defineProperty(t,"clientY",{configurable:!0,enumerable:!0,get(){return oc()?Ud().w-e.call(this):n.call(this)}})};for(let t of[MouseEvent,typeof Touch<"u"?Touch:null]){if(!t)continue;let e=Object.getOwnPropertyDescriptor(t.prototype,"clientX"),n=Object.getOwnPropertyDescriptor(t.prototype,"clientY");e?.get&&n?.get&&i(t.prototype,e.get,n.get)}}var ic=window;ic.__rotate||(ic.__rotate=!0,wd());var rc="./assets/lilita-BW72GA3X.woff2";var ac="./assets/fredoka-3UPZTCSC.woff2";var pc="./assets/soldat-VD7AFEPS.webp";var sc="./assets/archere-FKKFB2P7.webp";var uc="./assets/recolteur-33TAN3DD.webp";var fc="./assets/soldat-tete-AGMCDKZK.webp";var lc="./assets/colosse-JB5EJSFW.webp";var cc="./assets/recolteur-tete-7BNM6UJ6.webp";var hc="./assets/pillard-333ZQL3C.webp";var Tp={soldat:pc,archere:sc,recolteur:uc,veteran:lc,pillard:hc,"soldat-tete":fc,"recolteur-tete":cc},Bt="#2a1709",bc=3.6,Z=(i=bc)=>`stroke="${Bt}" stroke-width="${i}" stroke-linejoin="round" stroke-linecap="round"`,Ze=(i,t,e='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${i}" ${e}>${t.map(([n,o])=>`<stop offset="${n}" stop-color="${o}"/>`).join("")}</linearGradient>`,Id=[Ze("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),Ze("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',Ze("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',Ze("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),Ze("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),Ze("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),Ze("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),Ze("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),Ze("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),Ze("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),Ze("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),Ze("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),Ze("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),Ze("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),Ze("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),Ze("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),gp=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${Z()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${Z()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${Z(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${Z(3)}/>`,Ni=`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="var(--rc, #cfd5e2)" ${Z()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".5"/>
    <path d="M16 58 L50 56 L58 30 L52 32 L46 50 L18 52 Z" fill="#000" opacity=".16"/>`,_d={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${Z()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${Z()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${Bt}" stroke-width="${bc}" stroke-linecap="round"/>`,trophy:`
    <path d="M18 8 L46 8 L46 22 C46 32 40 38 32 39 C24 38 18 32 18 22 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="${Bt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="${Bt}" stroke-width="7.5" stroke-linecap="round"/>
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
    <path d="M50 10 L56 16" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/>`,forge:`
    <path d="M6 26 L32 8 L58 26 L52 29 L32 16 L12 29 Z" fill="url(#h-roof)" ${Z()}/>
    <path d="M12 28 L12 56 M52 28 L52 56" stroke="${Bt}" stroke-width="7"/><path d="M12 29 L12 55 M52 29 L52 55" stroke="url(#h-wood-x)" stroke-width="3"/>
    <circle cx="32" cy="36" r="10" fill="url(#h-gold-glow)"/>
    <path d="M18 40 L46 40 L42 46 L36 46 L38 54 L26 54 L28 46 L22 46 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M44 40 L54 40 L48 44 L44 44 Z" fill="url(#h-steel)" ${Z(2.6)}/>
    <path d="M22 41 L34 41" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`,reserve:`
    <path d="M18 14 L30 6 L36 12 L46 8 L50 20 L42 26 L22 26 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M29 8 L31 22 L26 22 Z" fill="#fff" opacity=".7"/>
    <path d="M6 22 L32 12 L58 22 L58 46 L32 58 L6 46 Z" fill="url(#h-white)" ${Z()}/>
    <path d="M6 22 L32 32 L58 22 L32 12 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M14 22 L32 16 L44 20" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M32 32 L32 58" stroke="${Bt}" stroke-width="3.2"/>
    <path d="M6 34 L32 44 L58 34" stroke="#a89f8c" stroke-width="2.2" fill="none"/>
    <path d="M6 22 L6 46 M32 32 L32 58 M58 22 L58 46" stroke="${Bt}" stroke-width="8"/>
    <path d="M6 23 L6 45 M32 33 L32 57 M58 23 L58 45" stroke="#5a5560" stroke-width="4"/>`,sanctuaire:`
    <ellipse cx="32" cy="50" rx="28" ry="10" fill="url(#h-white)" ${Z()}/>
    <circle cx="32" cy="34" r="22" fill="url(#h-cry-glow)"/>
    <path d="M17 42 L18 22 L23 19 L27 23 L26 42 Z" fill="url(#h-steel)" ${Z(2.8)}/>
    <path d="M37 42 L37 23 L41 19 L46 22 L47 42 Z" fill="url(#h-steel)" ${Z(2.8)}/>
    <path d="M24 49 L25 16 L32 6 L39 16 L40 49 Z" fill="url(#h-cry)" ${Z()}/>
    <path d="M32 18 L32 40 M27 24 L32 29 L37 24 M28 36 L32 40 L36 36" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
    <path d="M4 52 L6 30 L12 27 L16 31 L15 54 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M48 54 L48 31 L53 27 L58 30 L60 52 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M8 33 L11 30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`,"rune-soldat":`${Ni}<g transform="translate(32 33) scale(.42) rotate(38) translate(-32 -32)">${gp}</g>`,"rune-archere":`${Ni}
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="url(#h-wood-x)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M22 16 L22 50" stroke="${Bt}" stroke-width="1.6"/>
    <path d="M18 33 L44 33" stroke="${Bt}" stroke-width="3.2" stroke-linecap="round"/><path d="M44 33 L38 29 M44 33 L38 37" stroke="${Bt}" stroke-width="3" stroke-linecap="round"/>`,"rune-veteran":`${Ni}
    <path d="M28 26 L40 48" stroke="${Bt}" stroke-width="8" stroke-linecap="round"/><path d="M28 26 L40 48" stroke="url(#h-wood-x)" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M17 24 L27 14 L37 22 L27 32 Z" fill="url(#h-steel)" ${Z(2.6)}/>`,"rune-pillard":`${Ni}
    <path d="M24 48 L38 20" stroke="${Bt}" stroke-width="7" stroke-linecap="round"/><path d="M24 48 L38 20" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <path d="M33 18 C38 12 46 14 48 20 C44 22 41 26 40 30 Z" fill="url(#h-steel)" ${Z(2.6)}/>`,"rune-tour":`${Ni}
    <path d="M25 30 L39 30 L41 48 L23 48 Z" fill="url(#h-white)" ${Z(2.6)}/>
    <path d="M21 22 L43 22 L43 30 L21 30 Z" fill="url(#h-wood)" ${Z(2.6)}/>
    <path d="M18 23 L32 12 L46 23 Z" fill="url(#h-roof)" ${Z(2.6)}/>`,"rune-mortier":`${Ni}
    <ellipse cx="32" cy="42" rx="14" ry="6" fill="url(#h-white)" ${Z(2.6)}/>
    <path d="M24 40 C23 31 27 24 34 20 L41 30 C37 33 34 37 31 42 Z" fill="#4a4f5e" ${Z(2.6)}/>
    <circle cx="44" cy="17" r="4" fill="#2b2f3a" ${Z(2.2)}/>`,swords:`<g transform="rotate(-42 32 32)">${gp}</g><g transform="rotate(42 32 32)">${gp}</g>`,shovel:`
    <g transform="rotate(-32 32 32)">
      <path d="M22 4 L42 4" stroke="${Bt}" stroke-width="11" stroke-linecap="round"/>
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
    <path d="M23 8 L23 50 M41 14 L41 56" stroke="${Bt}" stroke-width="2.4"/>
    <path d="M10 22 C13 18 18 19 18 24 C18 28 12 29 10 26 Z" fill="#6fae3e" ${Z(2.2)}/>
    <path d="M13 46 C20 40 24 36 31 36 C38 36 40 30 46 24" fill="none" stroke="#c22a20" stroke-width="3.2" stroke-dasharray="4 4.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="${Bt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="#ff5a47" stroke-width="3.5" stroke-linecap="round"/>`,village:`
    <path d="M2 56 C10 40 54 40 62 56 L62 60 L2 60 Z" fill="url(#h-green)" ${Z()}/>
    <path d="M44 44 L44 34" stroke="${Bt}" stroke-width="7" stroke-linecap="round"/>
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
    <path d="M58 14 L58 50" stroke="${Bt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 14 L58 50" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>`,clock:`
    <circle cx="32" cy="34" r="24" fill="url(#h-white)" ${Z()}/>
    <path d="M32 20 L32 34 L42 40" fill="none" ${Z()}/>
    <rect x="26" y="4" width="12" height="7" rx="3" fill="url(#h-gold)" ${Z(2.5)}/>`,helmet:`
    <path d="M10 40 C10 22 20 12 32 12 C44 12 54 22 54 40 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M32 6 L32 13" stroke="${Bt}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 6 L32 13" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="6" y="38" width="52" height="9" rx="4.5" fill="url(#h-gold)" ${Z()}/>
    <rect x="28.5" y="45" width="7" height="14" rx="2.5" fill="url(#h-steel)" ${Z(3)}/>
    <path d="M18 34 C18 26 23 20 30 18" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".85"/>`,tent:`
    <path d="M6 56 L32 8 L58 56 Z" fill="url(#h-cream)" ${Z()}/>
    <path d="M32 8 L58 56 L40 56 Z" fill="#d8c7a2" opacity=".8"/>
    <path d="M24 56 L32 34 L40 56 Z" fill="#5a3418" ${Z(3)}/>
    <path d="M32 8 L32 2" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 2 L44 5 L32 9 Z" fill="url(#h-red)" ${Z(2.4)}/>`,flag:`
    <path d="M16 6 L16 60" stroke="${Bt}" stroke-width="9" stroke-linecap="round"/>
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
    <path d="M26 30 L46 58" stroke="${Bt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M26 30 L46 58" stroke="url(#h-wood-x)" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M8 26 L22 8 L32 14 L40 10 L50 18 L42 26 L34 24 L20 40 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M14 24 L23 13 L30 17 L22 22 Z" fill="#fff" opacity=".85"/>`,shield:`
    <path d="M32 5 L54 13 L54 30 C54 45 44 55 32 59 C20 55 10 45 10 30 L10 13 Z" fill="url(#h-steel)" ${Z()}/>
    <path d="M32 12 L47 17.5 L47 30 C47 40 41 47 32 51 Z" fill="#9aa2b8" opacity=".55"/>
    <path d="M17 18 L29 13.5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>`,lock:`
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="${Bt}" stroke-width="11"/>
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="url(#h-steel)" stroke-width="5"/>
    <rect x="12" y="26" width="40" height="32" rx="7" fill="url(#h-gold)" ${Z()}/>
    <circle cx="32" cy="40" r="4.5" fill="${Bt}"/><rect x="30" y="41" width="4" height="9" rx="2" fill="${Bt}"/>`,heart:`
    <path d="M32 56 C18 46 6 36 6 22 C6 13 13 7 21 7 C26 7 30 10 32 14 C34 10 38 7 43 7 C51 7 58 13 58 22 C58 36 46 46 32 56 Z" fill="url(#h-red)" ${Z()}/>
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${gp}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${Z()}/>
    <path d="M10 50 L56 50" stroke="${Bt}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${Z(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${Z()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${Z(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${Z(2.4)}/>
    <path d="M32 32 L58 6" stroke="${Bt}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${Bt}" stroke-width="3" stroke-linejoin="round"/>`,eye:`
    <path d="M3 33 C13 15 51 15 61 33 C51 51 13 51 3 33 Z" fill="url(#h-white)" ${Z()}/>
    <circle cx="32" cy="33" r="13" fill="url(#h-cry)" ${Z(3)}/>
    <circle cx="32" cy="33" r="5.5" fill="${Bt}"/>
    <circle cx="27.5" cy="28.5" r="3" fill="#fff"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${Z()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${Z()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${Z()}/>
    <circle cx="32" cy="18" r="4.5" fill="${Bt}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${Bt}"/>`,minus:`<path d="M16 32 L48 32" stroke="${Bt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,plus:`<path d="M16 32 L48 32 M32 16 L32 48" stroke="${Bt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32 M32 16 L32 48" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${Z()}/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${Z(3)}/>
    <path d="M32 7 C20 7 15 17 15 28 L15 37 L8 46 L56 46 L49 37 L49 28 C49 17 44 7 32 7 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M22 26 C22 19 26 14 31 13" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`,sound:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M42 22 C47 27 47 37 42 42" fill="none" stroke="${Bt}" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 15 C57 24 57 40 48 49" fill="none" stroke="${Bt}" stroke-width="5" stroke-linecap="round"/>`,mute:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M42 24 L56 40 M56 24 L42 40" fill="none" stroke="${Bt}" stroke-width="5.5" stroke-linecap="round"/>`,check:`<path d="M12 34 L26 48 L52 18" fill="none" stroke="${Bt}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
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
    <path d="M30 44 L34 44 L34 52 L30 52 Z" fill="${Bt}"/>
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
    <path d="M8 36 L56 36" stroke="${Bt}" stroke-width="3"/>
    <path d="M18 18 L18 56 M46 18 L46 56" stroke="${Bt}" stroke-width="7"/><path d="M18 19 L18 55 M46 19 L46 55" stroke="url(#h-gold)" stroke-width="3.6"/>
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${Z(2.4)}/>`,rotate:`
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="${Bt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 6 L60 10 L54 30 Z" fill="url(#h-gold)" ${Z(2.6)}/>`,replay:`
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="${Bt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 10 L16 30 L22 12 Z" fill="url(#h-white)" ${Z(2.6)}/>
    <path d="M26 22 L44 32 L26 42 Z" fill="url(#h-gold)" ${Z(2.6)}/>`,alert:`
    <path d="M32 5 L60 54 C61 57 59 59 56 59 L8 59 C5 59 3 57 4 54 Z" fill="url(#h-red)" ${Z()}/>
    <rect x="28.5" y="20" width="7" height="22" rx="3" fill="#fff" ${Z(2)}/>
    <circle cx="32" cy="50" r="4" fill="#fff" ${Z(2)}/>`,star:`<path d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z" fill="url(#h-gold)" ${Z()}/>
    <path d="M32 13 L37 25 L28 26 Z" fill="#fff" opacity=".7"/>`,gate:`
    <rect x="4" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${Z()}/><rect x="46" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${Z()}/>
    <path d="M18 58 L18 34 C18 22 46 22 46 34 L46 58 Z" fill="url(#h-wood)" ${Z()}/>
    <path d="M32 26 L32 58" stroke="${Bt}" stroke-width="3"/>
    <path d="M18 40 L46 40" stroke="url(#h-gold)" stroke-width="3.5"/>`,close:`<path d="M18 18 L46 46 M46 18 L18 46" stroke="${Bt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},bt=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,dc=!1;function bf(){if(dc){document.querySelectorAll("img[data-art]").forEach(e=>{e.src=Tp[e.dataset.art],e.alt="",e.draggable=!1});return}dc=!0;let i=document.createElement("style");i.textContent=`@font-face{font-family:"Lilita";src:url(${rc}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${ac}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(i);let t=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${Id}</defs>`;for(let[e,n]of Object.entries(_d))t+=`<symbol id="i-${e}" viewBox="0 0 64 64" overflow="visible">${n}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${t}</svg>`),document.querySelectorAll("img[data-art]").forEach(e=>{e.src=Tp[e.dataset.art],e.alt="",e.draggable=!1})}var Ep=(i,t,e,n,o="")=>`<div class="ctr ${i}">${o?`<span class="max n">${o}</span>`:""}<span class="track"><i style="width:${n}%"></i></span><span class="v n">${e}</span>${bt(t)}</div>`,sT=`<button class="x"><span class="face">${bt("close")}</span></button>`,uT=`<div class="hud">
  <div class="tl">${Ep("cry","crystal","1 240",83,"Max 1 500")}${Ep("mush","mushroom","860",57,"Max 1 500")}${Ep("rune","rune","3",0)}</div>
  <div class="tc">${Ep("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${bt("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${bt("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${bt("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${bt("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${bt("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${bt("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${bt("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;function yf(i){i.querySelectorAll("img[data-art]").forEach(t=>{let e=Tp[t.dataset.art];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var de=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Vp=i=>(i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`);var yc="./assets/ui_tap-KWIPUKCV.mp3";var mc="./assets/ui_open-YSL7SZAG.mp3";var gc="./assets/ui_close-EFYUEE7E.mp3";var Tc="./assets/ui_error-ZUUDUV6B.mp3";var Ec="./assets/ui_coins-UQFARDBX.mp3";var Vc="./assets/build_place-AJNKOBOM.mp3";var Sc="./assets/build_lift-ROHD6QPX.mp3";var Pc="./assets/build_hammer-ETQSYE7E.mp3";var Uc="./assets/build_done-LHFJ763M.mp3";var wc="./assets/collect_crystal-EH5LY25Y.mp3";var Lc="./assets/collect_mushroom-P4PKF7JT.mp3";var Cc="./assets/alert_attack-4JCOXVK2.mp3";var xc="./assets/raid_start-GQO57AU3.mp3";var Dc="./assets/troop_drop-TXHYCU7M.mp3";var Rc="./assets/battle_cry-MHWM65EL.mp3";var Oc="./assets/sword_hit-C3I5IP4X.mp3";var vc="./assets/bow_shot-DU3Q5ME7.mp3";var Mc="./assets/arrow_hit-GU5F3AZO.mp3";var Ac="./assets/mortar_fire-55PCFJWD.mp3";var Ic="./assets/mortar_impact-FFLUEV66.mp3";var _c="./assets/building_hit-SVLVCHM7.mp3";var $c="./assets/building_fall-HN64CLQT.mp3";var Hc="./assets/unit_death-VKWG44ZQ.mp3";var kc="./assets/loot-4CMJPKD5.mp3";var Bc="./assets/map_clouds-JUUCDZDP.mp3";var Fc="./assets/amb_village-VUB2HF6J.mp3";var Nc="./assets/music_village-OMKKDIQC.mp3";var Xc="./assets/music_raid-VAZ2GGVK.mp3";var Jc="./assets/music_win-LAC54U6M.mp3";var Qc="./assets/music_lose-RWDS7XZ3.mp3";var hb={ui_tap:yc,ui_open:mc,ui_close:gc,ui_error:Tc,ui_coins:Ec,build_place:Vc,build_lift:Sc,build_hammer:Pc,build_done:Uc,collect_crystal:wc,collect_mushroom:Lc,alert_attack:Cc,raid_start:xc,troop_drop:Dc,battle_cry:Rc,sword_hit:Oc,bow_shot:vc,arrow_hit:Mc,mortar_fire:Ac,mortar_impact:Ic,building_hit:_c,building_fall:$c,unit_death:Hc,loot:kc,map_clouds:Bc,amb_village:Fc,music_village:Nc,music_raid:Xc,music_win:Jc,music_lose:Qc},db={ui_tap:.45,ui_open:.45,ui_close:.4,ui_error:.55,ui_coins:.6,build_place:.8,build_lift:.5,build_hammer:.6,build_done:.7,collect_crystal:.6,collect_mushroom:.6,alert_attack:.85,raid_start:.85,troop_drop:.5,battle_cry:.6,sword_hit:.5,bow_shot:.45,arrow_hit:.45,mortar_fire:.7,mortar_impact:.75,building_hit:.6,building_fall:.8,unit_death:.55,loot:.7,map_clouds:.6},bb=.9,yb=new Set(["troop_drop","battle_cry","sword_hit","bow_shot","arrow_hit","mortar_fire","mortar_impact","building_hit","unit_death","build_hammer","collect_crystal","collect_mushroom"]),mb=.06,gb=100,Tb=4,Eb=24,Vb=250,Zc=1.2,zc=1.5,jc=.25,Sb={sfx:1,music:.55,ambience:.6},mf={sfx:"shardholm.mute.sfx",music:"shardholm.mute.music"},gf={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}};function Pb(i,t){return new Promise((e,n)=>{try{let o=i.decodeAudioData(t,e,n);o&&typeof o.then=="function"&&o.then(e,n)}catch(o){n(o)}})}var Ub={music_village:2822621/44100,music_raid:2419326/44100,amb_village:1014311/44100},wb=1105/44100;function Lb(i,t){let e=Ub[i];if(!e||e>t.duration+.004)return[0,t.duration];if(Math.abs(t.duration-e)<.004)return[0,t.duration];let n=Math.min(wb,t.duration-e);return[n,n+e]}function Tf(i,t,e,n){i.cancelScheduledValues(e),i.setValueAtTime(i.value,e),i.linearRampToValueAtTime(t,e+n)}var Ef=class{constructor(){M(this,"g",null);M(this,"dead",!1);M(this,"primed",!1);M(this,"hidden",!1);M(this,"mutes",null);M(this,"vol",{...Sb});M(this,"buffers",new Map);M(this,"ready",new Map);M(this,"recent",new Map);M(this,"voices",0);M(this,"wantMusic",null);M(this,"track",null);M(this,"wantAmb",!1);M(this,"amb",null)}unlock(){let t=this.graph();if(t)try{if(t.ctx.state!=="running"&&!this.hidden&&t.ctx.resume().catch(()=>{}),!this.primed){this.primed=!0;let e=t.ctx.createBufferSource();e.buffer=t.ctx.createBuffer(1,1,22050),e.connect(t.ctx.destination),e.start(0)}}catch{}}play(t,e={}){try{let n=this.graph();if(!n||this.m().sfx||n.ctx.state!=="running")return;let o=performance.now();if(!this.allow(t,o))return;let r=this.ready.get(t);if(r){this.start(n,r,t,e);return}this.load(t).then(a=>{a&&performance.now()-o<Vb&&this.start(n,a,t,e)})}catch{}}music(t){try{this.wantMusic=t;let e=this.graph();if(!e)return;if(!t||this.m().music){this.stopTrack(e);return}if(this.track?.name===t)return;this.withBuffer(t,n=>{this.wantMusic!==t||this.m().music||this.track?.name===t||(this.stopTrack(e),this.track=this.loop(e,t,n,e.loops,Zc))})}catch{}}ambience(t){try{this.wantAmb=t;let e=this.graph();if(!e)return;if(!t||this.m().sfx){this.amb&&(this.fadeOut(e,this.amb,zc),this.amb=null);return}if(this.amb)return;this.withBuffer("amb_village",n=>{!this.wantAmb||this.amb||this.m().sfx||(this.amb=this.loop(e,"amb_village",n,e.bus.ambience,zc))})}catch{}}jingle(t){try{let e=this.graph();if(!e||this.m().music||e.ctx.state!=="running")return;this.withBuffer(t,n=>{let{ctx:o}=e,r=o.currentTime,a=r+n.duration,p=o.createBufferSource();p.buffer=n;let s=o.createGain();s.gain.value=bb,p.connect(s).connect(e.bus.music),p.onended=()=>{try{p.disconnect(),s.disconnect()}catch{}};let u=e.loops.gain;Tf(u,jc,r,.2),u.setValueAtTime(jc,Math.max(r+.2,a-.2)),u.linearRampToValueAtTime(1,a+1.2),p.start(r)})}catch{}}setMuted(t,e){try{this.m()[t]=e,gf.set(mf[t],e?"1":"0");let n=this.g;if(!n)return;this.applyBus(n),t==="music"?this.music(this.wantMusic):this.ambience(this.wantAmb)}catch{}}muted(t){return this.m()[t]}setVolume(t,e){this.vol[t]=Math.min(1,Math.max(0,Number.isFinite(e)?e:0));try{this.g&&this.applyBus(this.g)}catch{}}volume(t){return this.vol[t]}preload(t){return Promise.all(t.map(e=>this.load(e))).then(()=>{},()=>{})}m(){return this.mutes||(this.mutes={sfx:gf.get(mf.sfx)==="1",music:gf.get(mf.music)==="1"}),this.mutes}graph(){if(this.g||this.dead)return this.g;try{let t=typeof AudioContext<"u"?AudioContext:globalThis.webkitAudioContext;if(!t)return this.dead=!0,null;let e=new t,n=r=>{let a=e.createGain();return a.connect(r),a},o={sfx:n(e.destination),music:n(e.destination),ambience:n(e.destination)};this.g={ctx:e,bus:o,loops:n(o.music)},this.applyBus(this.g,0),typeof document<"u"&&document.addEventListener("visibilitychange",()=>this.onVisibility())}catch{this.dead=!0,this.g=null}return this.g}applyBus(t,e=.08){let n=this.m(),o=t.ctx.currentTime,r={sfx:n.sfx?0:this.vol.sfx,ambience:n.sfx?0:this.vol.ambience,music:n.music?0:this.vol.music};for(let a of["sfx","music","ambience"])e>0?Tf(t.bus[a].gain,r[a],o,e):t.bus[a].gain.value=r[a]}onVisibility(){try{let t=this.g;if(!t)return;document.hidden?t.ctx.state==="running"&&(this.hidden=!0,t.ctx.suspend().catch(()=>{})):this.hidden&&(this.hidden=!1,t.ctx.resume().catch(()=>{}))}catch{}}load(t){let e=this.buffers.get(t);if(e)return e;let n=this.graph();if(!n)return Promise.resolve(null);try{e=fetch(hb[t]).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(`${t}: HTTP ${o.status}`))).then(o=>Pb(n.ctx,o)).then(o=>(this.ready.set(t,o),o),()=>null)}catch{e=Promise.resolve(null)}return this.buffers.set(t,e),e}withBuffer(t,e){let n=this.ready.get(t);if(n){e(n);return}this.load(t).then(o=>{if(o)try{e(o)}catch{}})}allow(t,e){let n=(this.recent.get(t)??[]).filter(r=>e-r<gb),o=n.length<Tb;return o&&n.push(e),this.recent.set(t,n),o}start(t,e,n,o){try{if(this.voices>=Eb)return;let{ctx:r}=t,a=r.createBufferSource();a.buffer=e;let p=o.rate??(yb.has(n)?1+(Math.random()*2-1)*mb:1);a.playbackRate.value=Math.min(4,Math.max(.25,p));let s=r.createGain();s.gain.value=Math.max(0,(o.vol??1)*db[n]),a.connect(s);let u=s;if(o.pan&&typeof r.createStereoPanner=="function"){let f=r.createStereoPanner();f.pan.value=Math.min(1,Math.max(-1,o.pan)),s.connect(f),u=f}u.connect(t.bus.sfx),a.onended=()=>{this.voices--;try{a.disconnect(),s.disconnect(),u.disconnect()}catch{}},a.start(),this.voices++}catch{}}loop(t,e,n,o,r){let{ctx:a}=t,p=a.currentTime,s=a.createBufferSource();s.buffer=n,s.loop=!0;let[u,f]=Lb(e,n);s.loopStart=u,s.loopEnd=f;let l=a.createGain();return l.gain.setValueAtTime(0,p),l.gain.linearRampToValueAtTime(1,p+r),s.connect(l).connect(o),s.start(p,u),{name:e,src:s,gain:l}}stopTrack(t){this.track&&(this.fadeOut(t,this.track,Zc),this.track=null)}fadeOut(t,e,n){try{let o=t.ctx.currentTime;Tf(e.gain.gain,0,o,n),e.src.onended=()=>{try{e.src.disconnect(),e.gain.disconnect()}catch{}},e.src.stop(o+n+.05)}catch{}}},Xi=new Ef;var Yc=`/* L'\xC9clat in direction D \xAB Banni\xE8res \xBB (chosen by Benoit on 06/11 among the four of design/ui/eclat/): the mode's own
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
/* a card of the battle's deck: the troop, how many are left; the one picked raised and ringed in yellow */
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
.trow { display: grid; grid-template-columns: 38px 34px minmax(0, 1fr) 50px; align-items: center; gap: 6px; height: 40px; padding: 0 4px 0 2px; background: var(--slate2); }
.trow .pt { width: 38px; height: 38px; object-fit: cover; background: var(--slate3); }
.tn { display: flex; flex-direction: column; line-height: 1; }
.tn b { font-family: var(--title); font-weight: 400; font-size: 16px; } .tn small { margin-top: 2px; font-size: 9px; font-weight: 500; color: var(--mute); }
.chips { display: flex; flex-direction: column; gap: 2px; align-items: flex-start; min-width: 0; overflow: hidden; }
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
`;var Gc=`/* The auto-battler's page: where its pieces go and how big they are. Their look is the mode's theme (client/
   bannieres.css, direction D \xAB Banni\xE8res \xBB); the boards of design/ui/eclat/ are drawn with these two files. Sizes are
   iPhone points for a phone held sideways (844 \xD7 390): the arena keeps the middle of the screen, the preparation's
   panels stand on its two sides, the shop between them at the bottom. */
html, body { background: #6d8f3c; }
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
/* the deck, at the bottom left; my life, discreet, at the bottom right; the help over the deck at the start */
.deck { position: absolute; left: var(--ml); bottom: var(--b); display: flex; gap: 6px; align-items: flex-end; }
.hp-mini { position: absolute; right: calc(var(--r) - 4px); bottom: calc(var(--b) + 2px); display: flex; align-items: center; gap: 5px; padding: 4px 10px 4px 6px; }
.hp-mini .ic { width: 20px; height: 20px; }
.hp-mini b { font-family: var(--title); font-weight: 400; font-size: 16px; }
.ahint { position: absolute; left: var(--ml); bottom: calc(var(--b) + 84px); padding: 7px 12px 8px 15px; box-shadow: inset 4px 0 0 var(--yel), var(--plate-sh); font-size: 12px; font-weight: 600; }

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
/* the army's six rows and the eight players fit a phone 390 high, its home bar's margin included (6 \xD7 37) */
.army { padding-bottom: 7px; }
.capbar { margin: 6px 0 5px; }
.rows { gap: 3px; } .trow { height: 37px; } .trow .pt { width: 35px; height: 35px; }
.foot { margin-top: 5px; }
.prow { height: 24px; }
/* taller (932 \xD7 430): the board's own sizes */
@container page (min-height: 420px) {
  .rows { gap: 4px; } .trow { height: 41px; } .trow .pt { width: 38px; height: 38px; }
  .prow { height: 26px; }
}
/* shorter (667 \xD7 375) */
@container page (max-height: 380px) {
  .trow { height: 36px; } .trow .pt { width: 34px; height: 34px; }
  .prow { height: 23px; } .plist { margin-top: 5px; }
  .title { font-size: 52px; }
}
/* narrower (667 wide): narrower panels, the players' life as a number, the shop's two buttons one over the other */
@container page (max-width: 760px) {
  .ab > div { --army-w: 196px; --pl-w: 132px; }
  .trow { grid-template-columns: 34px 28px minmax(0, 1fr) 46px; gap: 5px; }
  .trow .pt { width: 34px; height: 34px; }
  .tn b { font-size: 14px; }
  .pm { gap: 3px; } .sq { width: 21px; height: 22px; }
  .chip { font-size: 9px; padding: 1px 3px 1px 1px; } .chip .ic { width: 10px; height: 10px; }
  .php .bar { display: none; } .php b { margin-left: 2px; font-size: 11px; }
  .prow { font-size: 11.5px; padding: 0 5px; }
  .shop { gap: 5px; padding: 6px; }
  .utils { display: flex; flex-direction: column; gap: 5px; flex: none; }
  .util { flex: 1; width: 52px; flex-direction: row; gap: 3px; }
  .util > .ic { width: 16px; height: 16px; } .util b { font-size: 11px; }
  .util .price { font-size: 10px; } .util .price .ic { width: 10px; height: 10px; }
  .card .bonus { font-size: 9.5px; } .card .bonus .ic { width: 11px; height: 11px; }
  .ready { font-size: 20px; } .ready .ic { width: 20px; height: 20px; }
  .until b { font-size: 19px; }
  .stat.hp .bar { width: 78px; }
  .next .who { max-width: 76px; font-size: 12px; } .hud-c { gap: 6px; padding: 0 9px; } .minis { gap: 3px; } .mini { width: 22px; height: 22px; }
  .round b { font-size: 13px; } .timer b { font-size: 18px; min-width: 44px; } .hud-r { gap: 8px; }
  .gauge { width: 420px; }
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
`;var Wc="./assets/bungee-MGYHQTP2.woff2";var Kc="./assets/rubik-2B7SUW46.woff2";var qt=["barbarian","archer","tank","assassin","druid","whale"],Ji=["hp","damage","attackSpeed","moveSpeed","range"],q={tickHz:20,arena:{width:28,length:40,eclatRadius:1.4,zoneRadius:5,noDropRadius:8.5,enemyHalo:3},battle:{maxSeconds:75,aggro:8,retargetTicks:4,gauge:{base:2,perTroop:.4,cap:8},dropRate:10,zoneStop:.55,separation:.5},troops:{barbarian:{places:1,hp:144,damage:15.5,attackSpeed:1.05,moveSpeed:3,range:1,radius:.35,mass:1,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0},archer:{places:1,hp:41,damage:7,attackSpeed:1,moveSpeed:2.8,range:5.5,radius:.35,mass:1,rangeUpgradable:!0,ranged:!0,flying:!1,hitsAir:!0,splash:0},tank:{places:5,hp:700,damage:40,attackSpeed:.6,moveSpeed:1.8,range:1.2,radius:.7,mass:5,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0},assassin:{places:2,hp:185,damage:55,attackSpeed:.8,moveSpeed:4.5,range:1,radius:.35,mass:1.2,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0},druid:{places:3,hp:110,damage:18,attackSpeed:.48,moveSpeed:2.6,range:6,radius:.35,mass:1,rangeUpgradable:!0,ranged:!0,flying:!1,hitsAir:!1,splash:1.5},whale:{places:4,hp:250,damage:20,attackSpeed:.5,moveSpeed:1.6,range:2,radius:1.2,mass:3,rangeUpgradable:!1,ranged:!1,flying:!0,hitsAir:!1,splash:.8}},assassinHunt:12,taunt:{every:5,radius:5,seconds:2},army:{startPlaces:20,maxPlaces:60,step:5,stepCost:4},economy:{goldPerRound:7,startGold:3,reroll:2,offers:4},rarities:[{id:"common",name:"Commune",bonus:.15,cost:2,early:70,late:25},{id:"rare",name:"Rare",bonus:.3,cost:3,early:24,late:35},{id:"epic",name:"\xC9pique",bonus:.5,cost:4,early:5,late:27},{id:"legendary",name:"L\xE9gendaire",bonus:.8,cost:6,early:1,late:13}],lateRound:12,hp:{start:100,damage:{base:4,perRound:1.5,perPlace:.4,max:40}},round:{prep:30,battle:75,results:5},maxRounds:40,match:{players:8,humanPairWeight:.35,pairingTries:24},bots:{firstWave:.55,counter:.25,firstWaveTicks:[6,30],reserveAfter:40,reserveGauge:55,capacityEagerUntil:6,rerollsPerRound:1,playedShare:.15},net:{delayTicks:8,cutSeconds:3,lostSeconds:3,sendEvery:100,grace:3,launchDelay:5}},Ke=1/q.tickHz,Sp=q.battle.maxSeconds*q.tickHz,Pp=q.round.prep+q.round.battle+q.round.results,Up={barbarian:"Barbare",archer:"Archer",tank:"Tank",assassin:"Assassin",druid:"Druidesse",whale:"Baleine"},qc={hp:"PV",damage:"D\xE9g\xE2ts",attackSpeed:"Vitesse d\u2019attaque",moveSpeed:"D\xE9placement",range:"Port\xE9e"};var t0=q.round,Qi=i=>(i-1)*Pp,Hn=i=>Qi(i)+t0.prep,Xr=i=>Hn(i)+t0.battle,wp=i=>Xr(i)+q.net.grace;function e0(i,t,e){return t<1?!1:i==="drops"||i==="takeover"?e>=Hn(t)&&e<wp(t):e>=Qi(t)&&e<Hn(t)}var Ob=0,Vf=()=>`${Date.now().toString(36)}-${(Ob++).toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,Jr=class{constructor(t,e,n=()=>performance.now()/1e3,o=0){M(this,"seed",t);M(this,"now",n);M(this,"solo",!0);M(this,"humans");M(this,"mySeat",0);M(this,"log",[]);M(this,"offset");M(this,"onChange");this.humans=[e],this.offset=-this.now()-o}clock(){return this.now()+this.offset}post(t,e,n){let o=Vf();return e0(e,t,this.clock())&&this.log.push({seq:this.log.length,seat:this.mySeat,round:t,kind:e,data:n,cid:o}),o}confirmed(){return this.log}syncedTo(){return 1/0}pending(){return[]}skip(t){let e=this.clock();t>e&&(this.offset+=t-e)}close(){}};var Fe=q.arena,ei=q.battle,Do=Fe.width/2,kn=Fe.length/2,Bn=()=>({barbarian:0,archer:0,tank:0,assassin:0,druid:0,whale:0});function Zr(){let i={};for(let t of qt){i[t]={};for(let e of Ji)i[t][e]=0}return i}var Gn=i=>qt.reduce((t,e)=>t+i[e]*q.troops[e].places,0),n0=i=>qt.reduce((t,e)=>t+i[e],0);function vb(i,t){let e=q.troops[i],n=t[i];return{hp:e.hp*(1+n.hp),damage:e.damage*(1+n.damage),attackSpeed:e.attackSpeed*(1+n.attackSpeed),moveSpeed:e.moveSpeed*(1+n.moveSpeed),range:e.range*(1+(e.rangeUpgradable?n.range:0))}}var Mb=(i,t)=>i>=0&&i<=Fe.width&&t>=0&&t<=Fe.length;function Ab(i,t){let e=i-Do,n=t-kn;return e*e+n*n<Fe.noDropRadius*Fe.noDropRadius}var Zi=class{constructor(t){M(this,"tick",0);M(this,"units",[]);M(this,"stock");M(this,"gauges",[0,0]);M(this,"inZone",[0,0]);M(this,"zoneShare",[0,0]);M(this,"result",null);M(this,"events",{hits:[],deaths:[],landed:[],refused:[],blasts:[],cries:[]});M(this,"pending",[]);M(this,"nextId",0);M(this,"up");M(this,"cell",1.5);M(this,"gw",Math.ceil(Fe.width/1.5)+1);M(this,"gh",Math.ceil(Fe.length/1.5)+1);M(this,"grid",[]);this.stock=[{...t[0].counts},{...t[1].counts}],this.up=[t[0].upgrades,t[1].upgrades];for(let e=0;e<this.gw*this.gh;e++)this.grid.push([])}get time(){return this.tick*Ke}get over(){return this.result!==null}alive(t){return this.units.filter(e=>e.alive&&(t===void 0||e.side===t))}left(t){let e={...this.stock[t]};for(let n of this.pending)n.side===t&&e[n.kind]>0&&e[n.kind]--;return e}pendingDrops(){return this.pending}canDrop(t,e,n){if(!Mb(e,n)||Ab(e,n))return!1;let o=Fe.enemyHalo*Fe.enemyHalo;for(let r of this.units){if(!r.alive||r.side===t)continue;let a=r.x-e,p=r.y-n;if(a*a+p*p<o)return!1}return!0}schedule(t){let e=this.pending.length;for(;e>0&&Ib(t,this.pending[e-1]);)e--;this.pending.splice(e,0,t)}step(){if(this.result)return;let t=this.events={hits:[],deaths:[],landed:[],refused:[],blasts:[],cries:[]};for(;this.pending.length&&this.pending[0].tick<=this.tick;){let b=this.pending.shift();this.stock[b.side][b.kind]>0&&this.canDrop(b.side,b.x,b.y)?(this.stock[b.side][b.kind]--,t.landed.push(this.spawn(b).id)):t.refused.push(b)}let e=this.units.filter(b=>b.alive),n=q.taunt,o=n.radius*n.radius;for(let b of e)if(!(b.kind!=="tank"||this.tick<b.nextCry)){b.nextCry=this.tick+n.every*q.tickHz,b.cried=this.tick,t.cries.push(b.id);for(let m of e){if(m.side===b.side)continue;let y=m.x-b.x,d=m.y-b.y;y*y+d*d>o||(m.tauntBy=b,m.tauntUntil=this.tick+n.seconds*q.tickHz,m.target=b)}}let r=new Float64Array(this.nextId);for(let b of e){b.cd>0&&(b.cd-=Ke),(!b.target||!b.target.alive||(this.tick+b.id)%ei.retargetTicks===0)&&(b.target=this.look(b,e));let m=b.target;if(m){let y=m.x-b.x,d=m.y-b.y,T=Math.sqrt(y*y+d*d);if(T-b.radius-m.radius<=b.range){if(b.cd<=0){if(b.splash>0){for(let g of e){if(g.side===b.side||g.flying&&!b.hitsAir)continue;let C=g.x-m.x,L=g.y-m.y,U=b.splash+g.radius;C*C+L*L<=U*U&&(r[g.id]+=b.damage)}t.blasts.push({from:b.id,x:m.x,y:m.y})}else r[m.id]+=b.damage;b.cd+=b.period,b.cd<0&&(b.cd=0),b.struck=this.tick,t.hits.push({from:b.id,to:m.id})}}else this.walk(b,y,d,T,b.radius+m.radius+b.range*.9)}else{let y=Do-b.x,d=kn-b.y,T=Math.sqrt(y*y+d*d);this.walk(b,y,d,T,Fe.zoneRadius*ei.zoneStop)}}for(let b of e)r[b.id]>0&&(b.hp-=r[b.id],b.hp<=0&&(b.hp=0,b.alive=!1,t.deaths.push(b.id)));this.separate();let a=0,p=0,s=0,u=0,f=Fe.zoneRadius*Fe.zoneRadius;for(let b of this.units){if(!b.alive)continue;let m=b.x-Do,y=b.y-kn;m*m+y*y<=f&&(b.side===0?(a++,s+=b.places):(p++,u+=b.places))}let l=s+u;this.inZone[0]=a,this.inZone[1]=p,this.zoneShare[0]=l>0?s/l:0,this.zoneShare[1]=l>0?u/l:0;let c=a>0?this.gauges[0]+Qr(a)*this.zoneShare[0]*Ke:this.gauges[0],h=p>0?this.gauges[1]+Qr(p)*this.zoneShare[1]*Ke:this.gauges[1];if(this.gauges[0]=Math.min(100,c),this.gauges[1]=Math.min(100,h),this.tick++,c>=100||h>=100)if(c!==h)this.finish(c>h?0:1,"capture");else{let b=this.placesAlive(0),m=this.placesAlive(1);this.finish(b===m?-1:b>m?0:1,"capture")}else this.tick>=Sp?this.judge("time"):!this.pending.length&&!this.units.some(b=>b.alive)&&n0(this.stock[0])===0&&n0(this.stock[1])===0&&this.judge("empty")}placesAlive(t){let e=0;for(let n of this.units)n.alive&&n.side===t&&(e+=n.places);return e}judge(t="time"){let[e,n]=this.gauges;if(e!==n){this.finish(e>n?0:1,t);return}let o=this.placesAlive(0),r=this.placesAlive(1);this.finish(o===r?-1:o>r?0:1,t)}finish(t,e){this.result={winner:t,outcome:e,tick:this.tick,gauges:[this.gauges[0],this.gauges[1]],places:[this.placesAlive(0),this.placesAlive(1)]}}spawn(t){let e=vb(t.kind,this.up[t.side]),n=q.troops[t.kind],o={id:this.nextId++,side:t.side,kind:t.kind,places:n.places,x:t.x,y:t.y,hp:e.hp,maxHp:e.hp,damage:e.damage,period:1/e.attackSpeed,speed:e.moveSpeed,range:e.range,radius:n.radius,mass:n.mass,sight:Math.max(ei.aggro,e.range+2*n.radius),flying:n.flying,hitsAir:n.hitsAir,splash:n.splash,cd:.4,target:null,alive:!0,tauntBy:null,tauntUntil:-1,nextCry:t.kind==="tank"?this.tick+Math.round(.4*q.tickHz):1/0,born:this.tick,struck:-1,cried:-1};return this.units.push(o),o}look(t,e){let n=t.tauntBy;if(n&&n.alive&&this.tick<t.tauntUntil&&i0(t,n))return n;if(t.kind==="assassin"){let o=o0(t,e,q.assassinHunt,!0);if(o)return o}return o0(t,e,t.sight,!1)}walk(t,e,n,o,r){if(o<=r||o<=1e-9)return;let a=Math.min(t.speed*Ke,o-r);t.x+=e/o*a,t.y+=n/o*a}separate(){let t=this.grid,e=this.cell,n=this.gw;for(let p of t)p.length=0;let o=[];for(let p of this.units)p.alive&&o.push(p);for(let p=0;p<o.length;p++){let s=o[p];t[Lp(s.x,e,n-1)+Lp(s.y,e,this.gh-1)*n].push(p)}let r=ei.separation;for(let p=0;p<o.length;p++){let s=o[p],u=Lp(s.x,e,n-1),f=Lp(s.y,e,this.gh-1);for(let l=-1;l<=1;l++){let c=f+l;if(!(c<0||c>=this.gh))for(let h=-1;h<=1;h++){let b=u+h;if(!(b<0||b>=n))for(let m of t[b+c*n]){if(m<=p)continue;let y=o[m];if(s.flying!==y.flying)continue;let d=y.x-s.x,T=y.y-s.y,E=s.radius+y.radius,g=d*d+T*T;if(g>=E*E)continue;let C=Math.sqrt(g);C<1e-6&&(d=(s.id*7+y.id*13)%11/11-.5,T=.5,C=Math.sqrt(d*d+T*T));let L=(E-C)*r,U=y.mass/(s.mass+y.mass),x=1-U,P=d/C,S=T/C;s.x-=P*L*U,s.y-=S*L*U,y.x+=P*L*x,y.y+=S*L*x}}}}let a=Fe.eclatRadius;for(let p of o){let s=p.x-Do,u=p.y-kn,f=s*s+u*u,l=a+p.radius;if(f<l*l&&!p.flying){let c=Math.sqrt(f);c<1e-6?p.y=kn+(p.side===0?-l:l):(p.x=Do+s/c*l,p.y=kn+u/c*l)}p.x<p.radius?p.x=p.radius:p.x>Fe.width-p.radius&&(p.x=Fe.width-p.radius),p.y<p.radius?p.y=p.radius:p.y>Fe.length-p.radius&&(p.y=Fe.length-p.radius)}}},Qr=i=>Math.min(ei.gauge.cap,ei.gauge.base+ei.gauge.perTroop*i),Ib=(i,t)=>i.tick!==t.tick?i.tick<t.tick:i.side!==t.side?i.side<t.side:i.seq<t.seq,Lp=(i,t,e)=>{let n=Math.floor(i/t);return n<0?0:n>e?e:n},i0=(i,t)=>!t.flying||i.hitsAir;function o0(i,t,e,n){let o=null,r=e*e;for(let a of t){if(!a.alive||a.side===i.side||!i0(i,a)||n&&!q.troops[a.kind].ranged)continue;let p=a.x-i.x,s=a.y-i.y,u=p*p+s*s;(u<r||u===r&&o&&a.id<o.id)&&(r=u,o=a)}return o}var j0=0,fl=1,Y0=2;var Na=1,G0=2,ao=3,Zn=0,nn=1,hn=2,_e=0,ui=1,Lo=2,ll=3,cl=4,xs=5,Vn=100,W0=101,K0=102,q0=103,th=104,Ui=200,eh=201,nh=202,oh=203,es=204,ns=205,Xa=206,ih=207,Ja=208,rh=209,ah=210,ph=211,sh=212,uh=213,fh=214,Ds=0,Rs=1,Os=2,fi=3,vs=4,Ms=5,As=6,Is=7,hl=0,lh=1,ch=2,Co=0,_s=1,$s=2,Hs=3,ks=4,Bs=5,Fs=6,xr=7,Kf="attached",hh="detached",dl=300,wi=301,Li=302,Ns=303,Xs=304,Qa=306,sn=1e3,Wn=1001,ur=1002,Ie=1003,Js=1004;var Ci=1005;var Xe=1006,Dr=1007;var dn=1008;var Un=1009,bl=1010,yl=1011,Rr=1012,Qs=1013,Fo=1014,An=1015,wn=1016,Zs=1017,zs=1018,No=1020,ml=35902,gl=35899,Tl=1021,El=1022,on=1023,fr=1026,Xo=1027,js=1028,Ys=1029,Vl=1030,Gs=1031;var Ws=1033,Za=33776,za=33777,ja=33778,Ya=33779,Ks=35840,qs=35841,tu=35842,eu=35843,nu=36196,ou=37492,iu=37496,ru=37808,au=37809,pu=37810,su=37811,uu=37812,fu=37813,lu=37814,cu=37815,hu=37816,du=37817,bu=37818,yu=37819,mu=37820,gu=37821,Tu=36492,Eu=36494,Vu=36495,Su=36283,Pu=36284,Uu=36285,wu=36286,Lu=2200,dh=2201,bh=2202,li=2300,ci=2301,ts=2302,pi=2400,si=2401,aa=2402,Cu=2500,yh=2501,Sl=0,Ga=1,Or=2,mh=3200,gh=3201;var xu=0,Th=1,zn="",Te="srgb",Je="srgb-linear",pa="linear",ie="srgb";var ai=7680;var qf=519,Eh=512,Vh=513,Sh=514,Pl=515,Ph=516,Uh=517,wh=518,Lh=519,os=35044;var Ul="300 es",Qn=2e3,sa=2001;var qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let o=n[t];if(o!==void 0){let r=o.indexOf(e);r!==-1&&o.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let o=n.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],r0=1234567,na=Math.PI/180,hi=180/Math.PI;function vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function wl(i,t){return(i%t+t)%t}function _b(i,t,e,n,o){return n+(i-t)*(o-n)/(e-t)}function $b(i,t,e){return i!==t?(e-i)/(t-i):0}function oa(i,t,e){return(1-e)*i+e*t}function Hb(i,t,e,n){return oa(i,t,1-Math.exp(-e*n))}function kb(i,t=1){return t-Math.abs(wl(i,t*2)-t)}function Bb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nb(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xb(i,t){return i+Math.random()*(t-i)}function Jb(i){return i*(.5-Math.random())}function Qb(i){i!==void 0&&(r0=i);let t=r0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zb(i){return i*na}function zb(i){return i*hi}function jb(i){return(i&i-1)===0&&i!==0}function Yb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wb(i,t,e,n,o){let r=Math.cos,a=Math.sin,p=r(e/2),s=a(e/2),u=r((t+n)/2),f=a((t+n)/2),l=r((t-n)/2),c=a((t-n)/2),h=r((n-t)/2),b=a((n-t)/2);switch(o){case"XYX":i.set(p*f,s*l,s*c,p*u);break;case"YZY":i.set(s*c,p*f,s*l,p*u);break;case"ZXZ":i.set(s*l,s*c,p*f,p*u);break;case"XZX":i.set(p*f,s*b,s*h,p*u);break;case"YXY":i.set(s*h,p*f,s*b,p*u);break;case"ZYZ":i.set(s*b,s*h,p*f,p*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var rn={DEG2RAD:na,RAD2DEG:hi,generateUUID:vn,clamp:zt,euclideanModulo:wl,mapLinear:_b,inverseLerp:$b,lerp:oa,damp:Hb,pingpong:kb,smoothstep:Bb,smootherstep:Fb,randInt:Nb,randFloat:Xb,randFloatSpread:Jb,seededRandom:Qb,degToRad:Zb,radToDeg:zb,isPowerOfTwo:jb,ceilPowerOfTwo:Yb,floorPowerOfTwo:Gb,setQuaternionFromProperEuler:Wb,normalize:pe,denormalize:Jn},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6],this.y=o[1]*e+o[4]*n+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),o=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*o+t.x,this.y=r*o+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ae=class{constructor(t=0,e=0,n=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=o}static slerpFlat(t,e,n,o,r,a,p){let s=n[o+0],u=n[o+1],f=n[o+2],l=n[o+3],c=r[a+0],h=r[a+1],b=r[a+2],m=r[a+3];if(p===0){t[e+0]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l;return}if(p===1){t[e+0]=c,t[e+1]=h,t[e+2]=b,t[e+3]=m;return}if(l!==m||s!==c||u!==h||f!==b){let y=1-p,d=s*c+u*h+f*b+l*m,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let C=Math.sqrt(E),L=Math.atan2(C,d*T);y=Math.sin(y*L)/C,p=Math.sin(p*L)/C}let g=p*T;if(s=s*y+c*g,u=u*y+h*g,f=f*y+b*g,l=l*y+m*g,y===1-p){let C=1/Math.sqrt(s*s+u*u+f*f+l*l);s*=C,u*=C,f*=C,l*=C}}t[e]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,o,r,a){let p=n[o],s=n[o+1],u=n[o+2],f=n[o+3],l=r[a],c=r[a+1],h=r[a+2],b=r[a+3];return t[e]=p*b+f*l+s*h-u*c,t[e+1]=s*b+f*c+u*l-p*h,t[e+2]=u*b+f*h+p*c-s*l,t[e+3]=f*b-p*l-s*c-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,o){return this._x=t,this._y=e,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,o=t._y,r=t._z,a=t._order,p=Math.cos,s=Math.sin,u=p(n/2),f=p(o/2),l=p(r/2),c=s(n/2),h=s(o/2),b=s(r/2);switch(a){case"XYZ":this._x=c*f*l+u*h*b,this._y=u*h*l-c*f*b,this._z=u*f*b+c*h*l,this._w=u*f*l-c*h*b;break;case"YXZ":this._x=c*f*l+u*h*b,this._y=u*h*l-c*f*b,this._z=u*f*b-c*h*l,this._w=u*f*l+c*h*b;break;case"ZXY":this._x=c*f*l-u*h*b,this._y=u*h*l+c*f*b,this._z=u*f*b+c*h*l,this._w=u*f*l-c*h*b;break;case"ZYX":this._x=c*f*l-u*h*b,this._y=u*h*l+c*f*b,this._z=u*f*b-c*h*l,this._w=u*f*l+c*h*b;break;case"YZX":this._x=c*f*l+u*h*b,this._y=u*h*l+c*f*b,this._z=u*f*b-c*h*l,this._w=u*f*l-c*h*b;break;case"XZY":this._x=c*f*l-u*h*b,this._y=u*h*l-c*f*b,this._z=u*f*b+c*h*l,this._w=u*f*l+c*h*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,o=Math.sin(n);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],o=e[4],r=e[8],a=e[1],p=e[5],s=e[9],u=e[2],f=e[6],l=e[10],c=n+p+l;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-s)*h,this._y=(r-u)*h,this._z=(a-o)*h}else if(n>p&&n>l){let h=2*Math.sqrt(1+n-p-l);this._w=(f-s)/h,this._x=.25*h,this._y=(o+a)/h,this._z=(r+u)/h}else if(p>l){let h=2*Math.sqrt(1+p-n-l);this._w=(r-u)/h,this._x=(o+a)/h,this._y=.25*h,this._z=(s+f)/h}else{let h=2*Math.sqrt(1+l-n-p);this._w=(a-o)/h,this._x=(r+u)/h,this._y=(s+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let o=Math.min(1,e/n);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,o=t._y,r=t._z,a=t._w,p=e._x,s=e._y,u=e._z,f=e._w;return this._x=n*f+a*p+o*u-r*s,this._y=o*f+a*s+r*p-n*u,this._z=r*f+a*u+n*s-o*p,this._w=a*f-n*p-o*s-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,o=this._y,r=this._z,a=this._w,p=a*t._w+n*t._x+o*t._y+r*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=a,this._x=n,this._y=o,this._z=r,this;let s=1-p*p;if(s<=Number.EPSILON){let h=1-e;return this._w=h*a+e*this._w,this._x=h*n+e*this._x,this._y=h*o+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}let u=Math.sqrt(s),f=Math.atan2(u,p),l=Math.sin((1-e)*f)/u,c=Math.sin(e*f)/u;return this._w=a*l+this._w*c,this._x=n*l+this._x*c,this._y=o*l+this._y*c,this._z=r*l+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(o*Math.sin(t),o*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(a0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(a0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*o,this.y=r[1]*e+r[4]*n+r[7]*o,this.z=r[2]*e+r[5]*n+r[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*o+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*o+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*o+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*o+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,o=this.z,r=t.x,a=t.y,p=t.z,s=t.w,u=2*(a*o-p*n),f=2*(p*e-r*o),l=2*(r*n-a*e);return this.x=e+s*u+a*l-p*f,this.y=n+s*f+p*u-r*l,this.z=o+s*l+r*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*o,this.y=r[1]*e+r[5]*n+r[9]*o,this.z=r[2]*e+r[6]*n+r[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,o=t.y,r=t.z,a=e.x,p=e.y,s=e.z;return this.x=o*s-r*p,this.y=r*a-n*s,this.z=n*p-o*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sf.copy(this).projectOnVector(t),this.sub(Sf)}reflect(t){return this.sub(Sf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,o=this.z-t.z;return e*e+n*n+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let o=Math.sin(e)*t;return this.x=o*Math.sin(n),this.y=Math.cos(e)*t,this.z=o*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sf=new R,a0=new Ae,Jt=class i{constructor(t,e,n,o,r,a,p,s,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u)}set(t,e,n,o,r,a,p,s,u){let f=this.elements;return f[0]=t,f[1]=o,f[2]=p,f[3]=e,f[4]=r,f[5]=s,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[3],s=n[6],u=n[1],f=n[4],l=n[7],c=n[2],h=n[5],b=n[8],m=o[0],y=o[3],d=o[6],T=o[1],E=o[4],g=o[7],C=o[2],L=o[5],U=o[8];return r[0]=a*m+p*T+s*C,r[3]=a*y+p*E+s*L,r[6]=a*d+p*g+s*U,r[1]=u*m+f*T+l*C,r[4]=u*y+f*E+l*L,r[7]=u*d+f*g+l*U,r[2]=c*m+h*T+b*C,r[5]=c*y+h*E+b*L,r[8]=c*d+h*g+b*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8];return e*a*f-e*p*u-n*r*f+n*p*s+o*r*u-o*a*s}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=f*a-p*u,c=p*s-f*r,h=u*r-a*s,b=e*l+n*c+o*h;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/b;return t[0]=l*m,t[1]=(o*u-f*n)*m,t[2]=(p*n-o*a)*m,t[3]=c*m,t[4]=(f*e-o*s)*m,t[5]=(o*r-p*e)*m,t[6]=h*m,t[7]=(n*s-u*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,o,r,a,p){let s=Math.cos(r),u=Math.sin(r);return this.set(n*s,n*u,-n*(s*a+u*p)+a+t,-o*u,o*s,-o*(-u*a+s*p)+p+e,0,0,1),this}scale(t,e){return this.premultiply(Pf.makeScale(t,e)),this}rotate(t){return this.premultiply(Pf.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<9;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pf=new Jt;function Ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){let i=lr("canvas");return i.style.display="block",i}var p0={};function cr(i){i in p0||(p0[i]=!0,console.warn(i))}function xh(i,t,e){return new Promise(function(n,o){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var s0=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u0=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kb(){let i={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(o,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(o.r=To(o.r),o.g=To(o.g),o.b=To(o.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(o.r=pr(o.r),o.g=pr(o.g),o.b=pr(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zn?pa:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,a){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Je]:{primaries:t,whitePoint:n,transfer:pa,toXYZ:s0,fromXYZ:u0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:s0,fromXYZ:u0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var jt=Kb();function To(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,is=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=lr("canvas")),zi.width=t.width,zi.height=t.height;let o=zi.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let o=n.getImageData(0,0,t.width,t.height),r=o.data;for(let a=0;a<r.length;a++)r[a]=To(r[a]/255)*255;return n.putImageData(o,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(To(e[n]/255)*255):e[n]=To(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qb=0,hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let a=0,p=o.length;a<p;a++)o[a].isDataTexture?r.push(Uf(o[a].image)):r.push(Uf(o[a]))}else r=Uf(o);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?is.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ty=0,wf=new R,He=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,o=Wn,r=Xe,a=dn,p=on,s=Un,u=i.DEFAULT_ANISOTROPY,f=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=vn(),this.name="",this.source=new hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=p,this.internalFormat=null,this.type=s,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wf).x}get height(){return this.source.getSize(wf).y}get depth(){return this.source.getSize(wf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sn:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sn:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=dl;He.DEFAULT_ANISOTROPY=1;var ne=class i{constructor(t=0,e=0,n=0,o=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*o+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*o+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*o+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*o+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,o,r,s=t.elements,u=s[0],f=s[4],l=s[8],c=s[1],h=s[5],b=s[9],m=s[2],y=s[6],d=s[10];if(Math.abs(f-c)<.01&&Math.abs(l-m)<.01&&Math.abs(b-y)<.01){if(Math.abs(f+c)<.1&&Math.abs(l+m)<.1&&Math.abs(b+y)<.1&&Math.abs(u+h+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(u+1)/2,g=(h+1)/2,C=(d+1)/2,L=(f+c)/4,U=(l+m)/4,x=(b+y)/4;return E>g&&E>C?E<.01?(n=0,o=.707106781,r=.707106781):(n=Math.sqrt(E),o=L/n,r=U/n):g>C?g<.01?(n=.707106781,o=0,r=.707106781):(o=Math.sqrt(g),n=L/o,r=x/o):C<.01?(n=.707106781,o=.707106781,r=0):(r=Math.sqrt(C),n=U/r,o=x/r),this.set(n,o,r,e),this}let T=Math.sqrt((y-b)*(y-b)+(l-m)*(l-m)+(c-f)*(c-f));return Math.abs(T)<.001&&(T=1),this.x=(y-b)/T,this.y=(l-m)/T,this.z=(c-f)/T,this.w=Math.acos((u+h+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rs=class extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let o={width:t,height:e,depth:n.depth},r=new He(o);this.textures=[];let a=n.count;for(let p=0;p<a;p++)this.textures[p]=r.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let o=Object.assign({},t.textures[e].image);this.textures[e].source=new hr(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends rs{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends He{constructor(t=null,e=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var as=class extends He{constructor(t=null,e=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,p=r.count;a<p;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cp.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cp.copy(n.boundingBox)),Cp.applyMatrix4(t.matrixWorld),this.union(Cp)}let o=t.children;for(let r=0,a=o.length;r<a;r++)this.expandByObject(o[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),xp.subVectors(this.max,zr),ji.subVectors(t.a,zr),Yi.subVectors(t.b,zr),Gi.subVectors(t.c,zr),Ro.subVectors(Yi,ji),Oo.subVectors(Gi,Yi),ni.subVectors(ji,Gi);let e=[0,-Ro.z,Ro.y,0,-Oo.z,Oo.y,0,-ni.z,ni.y,Ro.z,0,-Ro.x,Oo.z,0,-Oo.x,ni.z,0,-ni.x,-Ro.y,Ro.x,0,-Oo.y,Oo.x,0,-ni.y,ni.x,0];return!Lf(e,ji,Yi,Gi,xp)||(e=[1,0,0,0,1,0,0,0,1],!Lf(e,ji,Yi,Gi,xp))?!1:(Dp.crossVectors(Ro,Oo),e=[Dp.x,Dp.y,Dp.z],Lf(e,ji,Yi,Gi,xp))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(co[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),co[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),co[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),co[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),co[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),co[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),co[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),co[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(co),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},co=[new R,new R,new R,new R,new R,new R,new R,new R],Fn=new R,Cp=new tn,ji=new R,Yi=new R,Gi=new R,Ro=new R,Oo=new R,ni=new R,zr=new R,xp=new R,Dp=new R,oi=new R;function Lf(i,t,e,n,o){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let p=o.x*Math.abs(oi.x)+o.y*Math.abs(oi.y)+o.z*Math.abs(oi.z),s=t.dot(oi),u=e.dot(oi),f=n.dot(oi);if(Math.max(-Math.max(s,u,f),Math.min(s,u,f))>p)return!1}return!0}var ey=new tn,jr=new R,Cf=new R,un=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ey.setFromPoints(t).getCenter(n);let o=0;for(let r=0,a=t.length;r<a;r++)o=Math.max(o,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);let e=jr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),o=(n-this.radius)*.5;this.center.addScaledVector(jr,o/n),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(Cf)),this.expandByPoint(jr.copy(t.center).sub(Cf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ho=new R,xf=new R,Rp=new R,vo=new R,Df=new R,Op=new R,Rf=new R,$o=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ho)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ho.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ho.copy(this.origin).addScaledVector(this.direction,e),ho.distanceToSquared(t))}distanceSqToSegment(t,e,n,o){xf.copy(t).add(e).multiplyScalar(.5),Rp.copy(e).sub(t).normalize(),vo.copy(this.origin).sub(xf);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rp),p=vo.dot(this.direction),s=-vo.dot(Rp),u=vo.lengthSq(),f=Math.abs(1-a*a),l,c,h,b;if(f>0)if(l=a*s-p,c=a*p-s,b=r*f,l>=0)if(c>=-b)if(c<=b){let m=1/f;l*=m,c*=m,h=l*(l+a*c+2*p)+c*(a*l+c+2*s)+u}else c=r,l=Math.max(0,-(a*c+p)),h=-l*l+c*(c+2*s)+u;else c=-r,l=Math.max(0,-(a*c+p)),h=-l*l+c*(c+2*s)+u;else c<=-b?(l=Math.max(0,-(-a*r+p)),c=l>0?-r:Math.min(Math.max(-r,-s),r),h=-l*l+c*(c+2*s)+u):c<=b?(l=0,c=Math.min(Math.max(-r,-s),r),h=c*(c+2*s)+u):(l=Math.max(0,-(a*r+p)),c=l>0?r:Math.min(Math.max(-r,-s),r),h=-l*l+c*(c+2*s)+u);else c=a>0?-r:r,l=Math.max(0,-(a*c+p)),h=-l*l+c*(c+2*s)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),o&&o.copy(xf).addScaledVector(Rp,c),h}intersectSphere(t,e){ho.subVectors(t.center,this.origin);let n=ho.dot(this.direction),o=ho.dot(ho)-n*n,r=t.radius*t.radius;if(o>r)return null;let a=Math.sqrt(r-o),p=n-a,s=n+a;return s<0?null:p<0?this.at(s,e):this.at(p,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,o,r,a,p,s,u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,c=this.origin;return u>=0?(n=(t.min.x-c.x)*u,o=(t.max.x-c.x)*u):(n=(t.max.x-c.x)*u,o=(t.min.x-c.x)*u),f>=0?(r=(t.min.y-c.y)*f,a=(t.max.y-c.y)*f):(r=(t.max.y-c.y)*f,a=(t.min.y-c.y)*f),n>a||r>o||((r>n||isNaN(n))&&(n=r),(a<o||isNaN(o))&&(o=a),l>=0?(p=(t.min.z-c.z)*l,s=(t.max.z-c.z)*l):(p=(t.max.z-c.z)*l,s=(t.min.z-c.z)*l),n>s||p>o)||((p>n||n!==n)&&(n=p),(s<o||o!==o)&&(o=s),o<0)?null:this.at(n>=0?n:o,e)}intersectsBox(t){return this.intersectBox(t,ho)!==null}intersectTriangle(t,e,n,o,r){Df.subVectors(e,t),Op.subVectors(n,t),Rf.crossVectors(Df,Op);let a=this.direction.dot(Rf),p;if(a>0){if(o)return null;p=1}else if(a<0)p=-1,a=-a;else return null;vo.subVectors(this.origin,t);let s=p*this.direction.dot(Op.crossVectors(vo,Op));if(s<0)return null;let u=p*this.direction.dot(Df.cross(vo));if(u<0||s+u>a)return null;let f=-p*vo.dot(Rf);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class i{constructor(t,e,n,o,r,a,p,s,u,f,l,c,h,b,m,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u,f,l,c,h,b,m,y)}set(t,e,n,o,r,a,p,s,u,f,l,c,h,b,m,y){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=o,d[1]=r,d[5]=a,d[9]=p,d[13]=s,d[2]=u,d[6]=f,d[10]=l,d[14]=c,d[3]=h,d[7]=b,d[11]=m,d[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,o=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,o=t.y,r=t.z,a=Math.cos(n),p=Math.sin(n),s=Math.cos(o),u=Math.sin(o),f=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let c=a*f,h=a*l,b=p*f,m=p*l;e[0]=s*f,e[4]=-s*l,e[8]=u,e[1]=h+b*u,e[5]=c-m*u,e[9]=-p*s,e[2]=m-c*u,e[6]=b+h*u,e[10]=a*s}else if(t.order==="YXZ"){let c=s*f,h=s*l,b=u*f,m=u*l;e[0]=c+m*p,e[4]=b*p-h,e[8]=a*u,e[1]=a*l,e[5]=a*f,e[9]=-p,e[2]=h*p-b,e[6]=m+c*p,e[10]=a*s}else if(t.order==="ZXY"){let c=s*f,h=s*l,b=u*f,m=u*l;e[0]=c-m*p,e[4]=-a*l,e[8]=b+h*p,e[1]=h+b*p,e[5]=a*f,e[9]=m-c*p,e[2]=-a*u,e[6]=p,e[10]=a*s}else if(t.order==="ZYX"){let c=a*f,h=a*l,b=p*f,m=p*l;e[0]=s*f,e[4]=b*u-h,e[8]=c*u+m,e[1]=s*l,e[5]=m*u+c,e[9]=h*u-b,e[2]=-u,e[6]=p*s,e[10]=a*s}else if(t.order==="YZX"){let c=a*s,h=a*u,b=p*s,m=p*u;e[0]=s*f,e[4]=m-c*l,e[8]=b*l+h,e[1]=l,e[5]=a*f,e[9]=-p*f,e[2]=-u*f,e[6]=h*l+b,e[10]=c-m*l}else if(t.order==="XZY"){let c=a*s,h=a*u,b=p*s,m=p*u;e[0]=s*f,e[4]=-l,e[8]=u*f,e[1]=c*l+m,e[5]=a*f,e[9]=h*l-b,e[2]=b*l-h,e[6]=p*f,e[10]=m*l+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ny,t,oy)}lookAt(t,e,n){let o=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Mo.crossVectors(n,Tn),Mo.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Mo.crossVectors(n,Tn)),Mo.normalize(),vp.crossVectors(Tn,Mo),o[0]=Mo.x,o[4]=vp.x,o[8]=Tn.x,o[1]=Mo.y,o[5]=vp.y,o[9]=Tn.y,o[2]=Mo.z,o[6]=vp.z,o[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[4],s=n[8],u=n[12],f=n[1],l=n[5],c=n[9],h=n[13],b=n[2],m=n[6],y=n[10],d=n[14],T=n[3],E=n[7],g=n[11],C=n[15],L=o[0],U=o[4],x=o[8],P=o[12],S=o[1],O=o[5],I=o[9],B=o[13],_=o[2],z=o[6],J=o[10],tt=o[14],X=o[3],et=o[7],lt=o[11],Pt=o[15];return r[0]=a*L+p*S+s*_+u*X,r[4]=a*U+p*O+s*z+u*et,r[8]=a*x+p*I+s*J+u*lt,r[12]=a*P+p*B+s*tt+u*Pt,r[1]=f*L+l*S+c*_+h*X,r[5]=f*U+l*O+c*z+h*et,r[9]=f*x+l*I+c*J+h*lt,r[13]=f*P+l*B+c*tt+h*Pt,r[2]=b*L+m*S+y*_+d*X,r[6]=b*U+m*O+y*z+d*et,r[10]=b*x+m*I+y*J+d*lt,r[14]=b*P+m*B+y*tt+d*Pt,r[3]=T*L+E*S+g*_+C*X,r[7]=T*U+E*O+g*z+C*et,r[11]=T*x+E*I+g*J+C*lt,r[15]=T*P+E*B+g*tt+C*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],o=t[8],r=t[12],a=t[1],p=t[5],s=t[9],u=t[13],f=t[2],l=t[6],c=t[10],h=t[14],b=t[3],m=t[7],y=t[11],d=t[15];return b*(+r*s*l-o*u*l-r*p*c+n*u*c+o*p*h-n*s*h)+m*(+e*s*h-e*u*c+r*a*c-o*a*h+o*u*f-r*s*f)+y*(+e*u*l-e*p*h-r*a*l+n*a*h+r*p*f-n*u*f)+d*(-o*p*f-e*s*l+e*p*c+o*a*l-n*a*c+n*s*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=t[9],c=t[10],h=t[11],b=t[12],m=t[13],y=t[14],d=t[15],T=l*y*u-m*c*u+m*s*h-p*y*h-l*s*d+p*c*d,E=b*c*u-f*y*u-b*s*h+a*y*h+f*s*d-a*c*d,g=f*m*u-b*l*u+b*p*h-a*m*h-f*p*d+a*l*d,C=b*l*s-f*m*s-b*p*c+a*m*c+f*p*y-a*l*y,L=e*T+n*E+o*g+r*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return t[0]=T*U,t[1]=(m*c*r-l*y*r-m*o*h+n*y*h+l*o*d-n*c*d)*U,t[2]=(p*y*r-m*s*r+m*o*u-n*y*u-p*o*d+n*s*d)*U,t[3]=(l*s*r-p*c*r-l*o*u+n*c*u+p*o*h-n*s*h)*U,t[4]=E*U,t[5]=(f*y*r-b*c*r+b*o*h-e*y*h-f*o*d+e*c*d)*U,t[6]=(b*s*r-a*y*r-b*o*u+e*y*u+a*o*d-e*s*d)*U,t[7]=(a*c*r-f*s*r+f*o*u-e*c*u-a*o*h+e*s*h)*U,t[8]=g*U,t[9]=(b*l*r-f*m*r-b*n*h+e*m*h+f*n*d-e*l*d)*U,t[10]=(a*m*r-b*p*r+b*n*u-e*m*u-a*n*d+e*p*d)*U,t[11]=(f*p*r-a*l*r-f*n*u+e*l*u+a*n*h-e*p*h)*U,t[12]=C*U,t[13]=(f*m*o-b*l*o+b*n*c-e*m*c-f*n*y+e*l*y)*U,t[14]=(b*p*o-a*m*o-b*n*s+e*m*s+a*n*y-e*p*y)*U,t[15]=(a*l*o-f*p*o+f*n*s-e*l*s-a*n*c+e*p*c)*U,this}scale(t){let e=this.elements,n=t.x,o=t.y,r=t.z;return e[0]*=n,e[4]*=o,e[8]*=r,e[1]*=n,e[5]*=o,e[9]*=r,e[2]*=n,e[6]*=o,e[10]*=r,e[3]*=n,e[7]*=o,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,o))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),o=Math.sin(e),r=1-n,a=t.x,p=t.y,s=t.z,u=r*a,f=r*p;return this.set(u*a+n,u*p-o*s,u*s+o*p,0,u*p+o*s,f*p+n,f*s-o*a,0,u*s-o*p,f*s+o*a,r*s*s+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,o,r,a){return this.set(1,n,r,0,t,1,a,0,e,o,1,0,0,0,0,1),this}compose(t,e,n){let o=this.elements,r=e._x,a=e._y,p=e._z,s=e._w,u=r+r,f=a+a,l=p+p,c=r*u,h=r*f,b=r*l,m=a*f,y=a*l,d=p*l,T=s*u,E=s*f,g=s*l,C=n.x,L=n.y,U=n.z;return o[0]=(1-(m+d))*C,o[1]=(h+g)*C,o[2]=(b-E)*C,o[3]=0,o[4]=(h-g)*L,o[5]=(1-(c+d))*L,o[6]=(y+T)*L,o[7]=0,o[8]=(b+E)*U,o[9]=(y-T)*U,o[10]=(1-(c+m))*U,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,n){let o=this.elements,r=Wi.set(o[0],o[1],o[2]).length(),a=Wi.set(o[4],o[5],o[6]).length(),p=Wi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),t.x=o[12],t.y=o[13],t.z=o[14],Nn.copy(this);let u=1/r,f=1/a,l=1/p;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=l,Nn.elements[9]*=l,Nn.elements[10]*=l,e.setFromRotationMatrix(Nn),n.x=r,n.y=a,n.z=p,this}makePerspective(t,e,n,o,r,a,p=Qn,s=!1){let u=this.elements,f=2*r/(e-t),l=2*r/(n-o),c=(e+t)/(e-t),h=(n+o)/(n-o),b,m;if(s)b=r/(a-r),m=a*r/(a-r);else if(p===Qn)b=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(p===sa)b=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=l,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,o,r,a,p=Qn,s=!1){let u=this.elements,f=2/(e-t),l=2/(n-o),c=-(e+t)/(e-t),h=-(n+o)/(n-o),b,m;if(s)b=1/(a-r),m=a/(a-r);else if(p===Qn)b=-2/(a-r),m=-(a+r)/(a-r);else if(p===sa)b=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=l,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=b,u[14]=m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<16;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new R,Nn=new Ot,ny=new R(0,0,0),oy=new R(1,1,1),Mo=new R,vp=new R,Tn=new R,f0=new Ot,l0=new Ae,Sn=class i{constructor(t=0,e=0,n=0,o=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,o=this._order){return this._x=t,this._y=e,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let o=t.elements,r=o[0],a=o[4],p=o[8],s=o[1],u=o[5],f=o[9],l=o[2],c=o[6],h=o[10];switch(e){case"XYZ":this._y=Math.asin(zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(p,h),this._z=Math.atan2(s,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-l,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(s,r));break;case"ZYX":this._y=Math.asin(-zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(s,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(p,h));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(p,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return f0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return l0.setFromEuler(this),this.setFromQuaternion(l0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iy=0,c0=new R,Ki=new Ae,bo=new Ot,Mp=new R,Yr=new R,ry=new R,ay=new Ae,h0=new R(1,0,0),d0=new R(0,1,0),b0=new R(0,0,1),y0={type:"added"},py={type:"removed"},qi={type:"childadded",child:null},Of={type:"childremoved",child:null},Ve=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Sn,n=new Ae,o=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Jt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(h0,t)}rotateY(t){return this.rotateOnAxis(d0,t)}rotateZ(t){return this.rotateOnAxis(b0,t)}translateOnAxis(t,e){return c0.copy(t).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(h0,t)}translateY(t){return this.translateOnAxis(d0,t)}translateZ(t){return this.translateOnAxis(b0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bo.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mp.copy(t):Mp.set(t,e,n);let o=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bo.lookAt(Yr,Mp,this.up):bo.lookAt(Mp,Yr,this.up),this.quaternion.setFromRotationMatrix(bo),o&&(bo.extractRotation(o.matrixWorld),Ki.setFromRotationMatrix(bo),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(y0),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(py),Of.child=t,this.dispatchEvent(Of),Of.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bo.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bo.multiply(t.parent.matrixWorld)),t.applyMatrix4(bo),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(y0),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,o=this.children.length;n<o;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,ry),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,ay,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(p,s){return p[s.uuid]===void 0&&(p[s.uuid]=s.toJSON(t)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(t.geometries,this.geometry);let p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){let s=p.shapes;if(Array.isArray(s))for(let u=0,f=s.length;u<f;u++){let l=s[u];r(t.shapes,l)}else r(t.shapes,s)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let p=[];for(let s=0,u=this.material.length;s<u;s++)p.push(r(t.materials,this.material[s]));o.material=p}else o.material=r(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){let s=this.animations[p];o.animations.push(r(t.animations,s))}}if(e){let p=a(t.geometries),s=a(t.materials),u=a(t.textures),f=a(t.images),l=a(t.shapes),c=a(t.skeletons),h=a(t.animations),b=a(t.nodes);p.length>0&&(n.geometries=p),s.length>0&&(n.materials=s),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),b.length>0&&(n.nodes=b)}return n.object=o,n;function a(p){let s=[];for(let u in p){let f=p[u];delete f.metadata,s.push(f)}return s}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let o=t.children[n];this.add(o.clone())}return this}};Ve.DEFAULT_UP=new R(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new R,yo=new R,vf=new R,mo=new R,tr=new R,er=new R,m0=new R,Mf=new R,Af=new R,If=new R,_f=new ne,$f=new ne,Hf=new ne,_o=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,o){o.subVectors(n,e),Xn.subVectors(t,e),o.cross(Xn);let r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(t,e,n,o,r){Xn.subVectors(o,e),yo.subVectors(n,e),vf.subVectors(t,e);let a=Xn.dot(Xn),p=Xn.dot(yo),s=Xn.dot(vf),u=yo.dot(yo),f=yo.dot(vf),l=a*u-p*p;if(l===0)return r.set(0,0,0),null;let c=1/l,h=(u*s-p*f)*c,b=(a*f-p*s)*c;return r.set(1-h-b,b,h)}static containsPoint(t,e,n,o){return this.getBarycoord(t,e,n,o,mo)===null?!1:mo.x>=0&&mo.y>=0&&mo.x+mo.y<=1}static getInterpolation(t,e,n,o,r,a,p,s){return this.getBarycoord(t,e,n,o,mo)===null?(s.x=0,s.y=0,"z"in s&&(s.z=0),"w"in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(r,mo.x),s.addScaledVector(a,mo.y),s.addScaledVector(p,mo.z),s)}static getInterpolatedAttribute(t,e,n,o,r,a){return _f.setScalar(0),$f.setScalar(0),Hf.setScalar(0),_f.fromBufferAttribute(t,e),$f.fromBufferAttribute(t,n),Hf.fromBufferAttribute(t,o),a.setScalar(0),a.addScaledVector(_f,r.x),a.addScaledVector($f,r.y),a.addScaledVector(Hf,r.z),a}static isFrontFacing(t,e,n,o){return Xn.subVectors(n,e),yo.subVectors(t,e),Xn.cross(yo).dot(o)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,o){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,n,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),yo.subVectors(this.a,this.b),Xn.cross(yo).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,o,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,o,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,o=this.b,r=this.c,a,p;tr.subVectors(o,n),er.subVectors(r,n),Mf.subVectors(t,n);let s=tr.dot(Mf),u=er.dot(Mf);if(s<=0&&u<=0)return e.copy(n);Af.subVectors(t,o);let f=tr.dot(Af),l=er.dot(Af);if(f>=0&&l<=f)return e.copy(o);let c=s*l-f*u;if(c<=0&&s>=0&&f<=0)return a=s/(s-f),e.copy(n).addScaledVector(tr,a);If.subVectors(t,r);let h=tr.dot(If),b=er.dot(If);if(b>=0&&h<=b)return e.copy(r);let m=h*u-s*b;if(m<=0&&u>=0&&b<=0)return p=u/(u-b),e.copy(n).addScaledVector(er,p);let y=f*b-h*l;if(y<=0&&l-f>=0&&h-b>=0)return m0.subVectors(r,o),p=(l-f)/(l-f+(h-b)),e.copy(o).addScaledVector(m0,p);let d=1/(y+m+c);return a=m*d,p=c*d,e.copy(n).addScaledVector(tr,a).addScaledVector(er,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ao={h:0,s:0,l:0},Ap={h:0,s:0,l:0};function kf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,o=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,o),this}setHSL(t,e,n,o=jt.workingColorSpace){if(t=wl(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kf(a,r,t+1/3),this.g=kf(a,r,t),this.b=kf(a,r,t-1/3)}return jt.colorSpaceToWorking(this,o),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=o[1],p=o[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=o[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return jt.workingToColorSpace(je.copy(this),t),Math.round(zt(je.r*255,0,255))*65536+Math.round(zt(je.g*255,0,255))*256+Math.round(zt(je.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(je.copy(this),e);let n=je.r,o=je.g,r=je.b,a=Math.max(n,o,r),p=Math.min(n,o,r),s,u,f=(p+a)/2;if(p===a)s=0,u=0;else{let l=a-p;switch(u=f<=.5?l/(a+p):l/(2-a-p),a){case n:s=(o-r)/l+(o<r?6:0);break;case o:s=(r-n)/l+2;break;case r:s=(n-o)/l+4;break}s/=6}return t.h=s,t.s=u,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Te){jt.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,o=je.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(t,e,n){return this.getHSL(Ao),this.setHSL(Ao.h+t,Ao.s+e,Ao.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ao),t.getHSL(Ap);let n=oa(Ao.h,Ap.h,e),o=oa(Ao.s,Ap.s,e),r=oa(Ao.l,Ap.l,e);return this.setHSL(n,o,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,o=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*o,this.g=r[1]*e+r[4]*n+r[7]*o,this.b=r[2]*e+r[5]*n+r[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new yt;yt.NAMES=Dh;var sy=0,Ye=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=ui,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=es,this.blendDst=ns,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==es&&(n.blendSrc=this.blendSrc),this.blendDst!==ns&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(r){let a=[];for(let p in r){let s=r[p];delete s.metadata,a.push(s)}return a}if(e){let r=o(t.textures),a=o(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let o=e.length;n=new Array(o);for(let r=0;r!==o;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},te=class extends Ye{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new R,Ip=new ot,uy=0,we=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=os,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[t+o]=e.array[n+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ip.fromBufferAttribute(this,e),Ip.applyMatrix3(t),this.setXY(e,Ip.x,Ip.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,o){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),o=pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),o=pe(o,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==os&&(t.usage=this.usage),t}};var fa=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var la=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},fy=0,Rn=new Ot,Bf=new Ve,nr=new R,En=new tn,Gr=new tn,Ne=new R,be=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ll(t)?la:fa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Bf.lookAt(t),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let o=0,r=t.length;o<r;o++){let a=t[o];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let o=0;o<n;o++){let r=t[o];e.setXYZ(o,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,o=e.length;n<o;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let p=e[r];Gr.setFromBufferAttribute(p),this.morphTargetsRelative?(Ne.addVectors(En.min,Gr.min),En.expandByPoint(Ne),Ne.addVectors(En.max,Gr.max),En.expandByPoint(Ne)):(En.expandByPoint(Gr.min),En.expandByPoint(Gr.max))}En.getCenter(n);let o=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),o=Math.max(o,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let p=e[r],s=this.morphTargetsRelative;for(let u=0,f=p.count;u<f;u++)Ne.fromBufferAttribute(p,u),s&&(nr.fromBufferAttribute(t,u),Ne.add(nr)),o=Math.max(o,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,o=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),p=[],s=[];for(let x=0;x<n.count;x++)p[x]=new R,s[x]=new R;let u=new R,f=new R,l=new R,c=new ot,h=new ot,b=new ot,m=new R,y=new R;function d(x,P,S){u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,P),l.fromBufferAttribute(n,S),c.fromBufferAttribute(r,x),h.fromBufferAttribute(r,P),b.fromBufferAttribute(r,S),f.sub(u),l.sub(u),h.sub(c),b.sub(c);let O=1/(h.x*b.y-b.x*h.y);isFinite(O)&&(m.copy(f).multiplyScalar(b.y).addScaledVector(l,-h.y).multiplyScalar(O),y.copy(l).multiplyScalar(h.x).addScaledVector(f,-b.x).multiplyScalar(O),p[x].add(m),p[P].add(m),p[S].add(m),s[x].add(y),s[P].add(y),s[S].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,P=T.length;x<P;++x){let S=T[x],O=S.start,I=S.count;for(let B=O,_=O+I;B<_;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new R,g=new R,C=new R,L=new R;function U(x){C.fromBufferAttribute(o,x),L.copy(C);let P=p[x];E.copy(P),E.sub(C.multiplyScalar(C.dot(P))).normalize(),g.crossVectors(L,P);let O=g.dot(s[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,O)}for(let x=0,P=T.length;x<P;++x){let S=T[x],O=S.start,I=S.count;for(let B=O,_=O+I;B<_;B+=3)U(t.getX(B+0)),U(t.getX(B+1)),U(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let o=new R,r=new R,a=new R,p=new R,s=new R,u=new R,f=new R,l=new R;if(t)for(let c=0,h=t.count;c<h;c+=3){let b=t.getX(c+0),m=t.getX(c+1),y=t.getX(c+2);o.fromBufferAttribute(e,b),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,y),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),p.fromBufferAttribute(n,b),s.fromBufferAttribute(n,m),u.fromBufferAttribute(n,y),p.add(f),s.add(f),u.add(f),n.setXYZ(b,p.x,p.y,p.z),n.setXYZ(m,s.x,s.y,s.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let c=0,h=e.count;c<h;c+=3)o.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(p,s){let u=p.array,f=p.itemSize,l=p.normalized,c=new u.constructor(s.length*f),h=0,b=0;for(let m=0,y=s.length;m<y;m++){p.isInterleavedBufferAttribute?h=s[m]*p.data.stride+p.offset:h=s[m]*f;for(let d=0;d<f;d++)c[b++]=u[h++]}return new we(c,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,o=this.attributes;for(let p in o){let s=o[p],u=t(s,n);e.setAttribute(p,u)}let r=this.morphAttributes;for(let p in r){let s=[],u=r[p];for(let f=0,l=u.length;f<l;f++){let c=u[f],h=t(c,n);s.push(h)}e.morphAttributes[p]=s}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let p=0,s=a.length;p<s;p++){let u=a[p];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let s=this.parameters;for(let u in s)s[u]!==void 0&&(t[u]=s[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let s in n){let u=n[s];t.data.attributes[s]=u.toJSON(t.data)}let o={},r=!1;for(let s in this.morphAttributes){let u=this.morphAttributes[s],f=[];for(let l=0,c=u.length;l<c;l++){let h=u[l];f.push(h.toJSON(t.data))}f.length>0&&(o[s]=f,r=!0)}r&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let o=t.attributes;for(let u in o){let f=o[u];this.setAttribute(u,f.clone(e))}let r=t.morphAttributes;for(let u in r){let f=[],l=r[u];for(let c=0,h=l.length;c<h;c++)f.push(l[c].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,f=a.length;u<f;u++){let l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}let p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());let s=t.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},g0=new Ot,ii=new $o,_p=new un,T0=new R,$p=new R,Hp=new R,kp=new R,Ff=new R,Bp=new R,E0=new R,Fp=new R,Qt=class extends Ve{constructor(t=new be,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}getVertexPosition(t,e){let n=this.geometry,o=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(o,t);let p=this.morphTargetInfluences;if(r&&p){Bp.set(0,0,0);for(let s=0,u=r.length;s<u;s++){let f=p[s],l=r[s];f!==0&&(Ff.fromBufferAttribute(l,t),a?Bp.addScaledVector(Ff,f):Bp.addScaledVector(Ff.sub(e),f))}e.add(Bp)}return e}raycast(t,e){let n=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_p.copy(n.boundingSphere),_p.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(_p.containsPoint(ii.origin)===!1&&(ii.intersectSphere(_p,T0)===null||ii.origin.distanceToSquared(T0)>(t.far-t.near)**2))&&(g0.copy(r).invert(),ii.copy(t.ray).applyMatrix4(g0),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let o,r=this.geometry,a=this.material,p=r.index,s=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,l=r.attributes.normal,c=r.groups,h=r.drawRange;if(p!==null)if(Array.isArray(a))for(let b=0,m=c.length;b<m;b++){let y=c[b],d=a[y.materialIndex],T=Math.max(y.start,h.start),E=Math.min(p.count,Math.min(y.start+y.count,h.start+h.count));for(let g=T,C=E;g<C;g+=3){let L=p.getX(g),U=p.getX(g+1),x=p.getX(g+2);o=Np(this,d,t,n,u,f,l,L,U,x),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let b=Math.max(0,h.start),m=Math.min(p.count,h.start+h.count);for(let y=b,d=m;y<d;y+=3){let T=p.getX(y),E=p.getX(y+1),g=p.getX(y+2);o=Np(this,a,t,n,u,f,l,T,E,g),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}else if(s!==void 0)if(Array.isArray(a))for(let b=0,m=c.length;b<m;b++){let y=c[b],d=a[y.materialIndex],T=Math.max(y.start,h.start),E=Math.min(s.count,Math.min(y.start+y.count,h.start+h.count));for(let g=T,C=E;g<C;g+=3){let L=g,U=g+1,x=g+2;o=Np(this,d,t,n,u,f,l,L,U,x),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let b=Math.max(0,h.start),m=Math.min(s.count,h.start+h.count);for(let y=b,d=m;y<d;y+=3){let T=y,E=y+1,g=y+2;o=Np(this,a,t,n,u,f,l,T,E,g),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}}};function ly(i,t,e,n,o,r,a,p){let s;if(t.side===nn?s=n.intersectTriangle(a,r,o,!0,p):s=n.intersectTriangle(o,r,a,t.side===Zn,p),s===null)return null;Fp.copy(p),Fp.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Fp);return u<e.near||u>e.far?null:{distance:u,point:Fp.clone(),object:i}}function Np(i,t,e,n,o,r,a,p,s,u){i.getVertexPosition(p,$p),i.getVertexPosition(s,Hp),i.getVertexPosition(u,kp);let f=ly(i,t,e,n,$p,Hp,kp,E0);if(f){let l=new R;_o.getBarycoord(E0,$p,Hp,kp,l),o&&(f.uv=_o.getInterpolatedAttribute(o,p,s,u,l,new ot)),r&&(f.uv1=_o.getInterpolatedAttribute(r,p,s,u,l,new ot)),a&&(f.normal=_o.getInterpolatedAttribute(a,p,s,u,l,new R),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:p,b:s,c:u,normal:new R,materialIndex:0};_o.getNormal($p,Hp,kp,c.normal),f.face=c,f.barycoord=l}return f}var di=class i extends be{constructor(t=1,e=1,n=1,o=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:o,heightSegments:r,depthSegments:a};let p=this;o=Math.floor(o),r=Math.floor(r),a=Math.floor(a);let s=[],u=[],f=[],l=[],c=0,h=0;b("z","y","x",-1,-1,n,e,t,a,r,0),b("z","y","x",1,-1,n,e,-t,a,r,1),b("x","z","y",1,1,t,n,e,o,a,2),b("x","z","y",1,-1,t,n,-e,o,a,3),b("x","y","z",1,-1,t,e,n,o,r,4),b("x","y","z",-1,-1,t,e,-n,o,r,5),this.setIndex(s),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(l,2));function b(m,y,d,T,E,g,C,L,U,x,P){let S=g/U,O=C/x,I=g/2,B=C/2,_=L/2,z=U+1,J=x+1,tt=0,X=0,et=new R;for(let lt=0;lt<J;lt++){let Pt=lt*O-B;for(let kt=0;kt<z;kt++){let oe=kt*S-I;et[m]=oe*T,et[y]=Pt*E,et[d]=_,u.push(et.x,et.y,et.z),et[m]=0,et[y]=0,et[d]=L>0?1:-1,f.push(et.x,et.y,et.z),l.push(kt/U),l.push(1-lt/x),tt+=1}}for(let lt=0;lt<x;lt++)for(let Pt=0;Pt<U;Pt++){let kt=c+Pt+z*lt,oe=c+Pt+z*(lt+1),ae=c+(Pt+1)+z*(lt+1),Kt=c+(Pt+1)+z*lt;s.push(kt,oe,Kt),s.push(oe,ae,Kt),X+=6}p.addGroup(h,X,P),h+=X,c+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let o=i[e][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=o.clone():Array.isArray(o)?t[e][n]=o.slice():t[e][n]=o}}return t}function Ge(i){let t={};for(let e=0;e<i.length;e++){let n=xi(i[e]);for(let o in n)t[o]=n[o]}return t}function cy(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var In={clone:xi,merge:Ge},hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends Ye{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=cy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let o in this.uniforms){let a=this.uniforms[o].value;a&&a.isTexture?e.uniforms[o]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[o]={type:"m4",value:a.toArray()}:e.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ca=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Io=new R,V0=new ot,S0=new ot,Me=class extends ca{constructor(t=50,e=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hi*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Io.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Io.x,Io.y).multiplyScalar(-t/Io.z),Io.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Io.x,Io.y).multiplyScalar(-t/Io.z)}getViewSize(t,e){return this.getViewBounds(t,V0,S0),e.subVectors(S0,V0)}setViewOffset(t,e,n,o,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(na*.5*this.fov)/this.zoom,n=2*e,o=this.aspect*n,r=-.5*o,a=this.view;if(this.view!==null&&this.view.enabled){let s=a.fullWidth,u=a.fullHeight;r+=a.offsetX*o/s,e-=a.offsetY*n/u,o*=a.width/s,n*=a.height/u}let p=this.filmOffset;p!==0&&(r+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},or=-90,ir=1,ps=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new Me(or,ir,t,e);o.layers=this.layers,this.add(o);let r=new Me(or,ir,t,e);r.layers=this.layers,this.add(r);let a=new Me(or,ir,t,e);a.layers=this.layers,this.add(a);let p=new Me(or,ir,t,e);p.layers=this.layers,this.add(p);let s=new Me(or,ir,t,e);s.layers=this.layers,this.add(s);let u=new Me(or,ir,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,o,r,a,p,s]=e;for(let u of e)this.remove(u);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,p,s,u,f]=this.children,l=t.getRenderTarget(),c=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,o),t.render(e,r),t.setRenderTarget(n,1,o),t.render(e,a),t.setRenderTarget(n,2,o),t.render(e,p),t.setRenderTarget(n,3,o),t.render(e,s),t.setRenderTarget(n,4,o),t.render(e,u),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,o),t.render(e,f),t.setRenderTarget(l,c,h),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},ha=class extends He{constructor(t=[],e=wi,n,o,r,a,p,s,u,f){super(t,e,n,o,r,a,p,s,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ss=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},o=[n,n,n,n,n,n];this.texture=new ha(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new di(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:_e});r.uniforms.tEquirect.value=e;let a=new Qt(o,r),p=e.minFilter;return e.minFilter===dn&&(e.minFilter=Xe),new ps(1,10,this).update(t,a),e.minFilter=p,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,o=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,o);t.setRenderTarget(r)}},Re=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let o=null,r=null,a=null,p=this._targetRay,s=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let m of t.hand.values()){let y=e.getJointPose(m,n),d=this._getHandJoint(u,m);y!==null&&(d.matrix.fromArray(y.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=y.radius),d.visible=y!==null}let f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],c=f.position.distanceTo(l.position),h=.02,b=.005;u.inputState.pinching&&c>h+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=h-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else s!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1));p!==null&&(o=e.getPose(t.targetRaySpace,n),o===null&&r!==null&&(o=r),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(by)))}return p!==null&&(p.visible=o!==null),s!==null&&(s.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var da=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ba=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=os,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let o=0,r=this.stride;o<r;o++)this.array[t+o]=e.array[n+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new R,mr=class i{constructor(t,e,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),o=pe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),o=pe(o,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var P0=new R,U0=new ne,w0=new ne,yy=new R,L0=new Ot,Xp=new R,Nf=new un,C0=new Ot,Xf=new $o,ya=class extends Qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kf,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xp),this.boundingBox.expandByPoint(Xp)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xp),this.boundingSphere.expandByPoint(Xp)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,o=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nf.copy(this.boundingSphere),Nf.applyMatrix4(o),t.ray.intersectsSphere(Nf)!==!1&&(C0.copy(o).invert(),Xf.copy(t.ray).applyMatrix4(C0),!(this.boundingBox!==null&&Xf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Xf)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,o=e.count;n<o;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Kf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,o=this.geometry;U0.fromBufferAttribute(o.attributes.skinIndex,t),w0.fromBufferAttribute(o.attributes.skinWeight,t),P0.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=w0.getComponent(r);if(a!==0){let p=U0.getComponent(r);L0.multiplyMatrices(n.bones[p].matrixWorld,n.boneInverses[p]),e.addScaledVector(yy.copy(P0).applyMatrix4(L0),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},gr=class extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}},Eo=class extends He{constructor(t=null,e=1,n=1,o,r,a,p,s,u=Ie,f=Ie,l,c){super(null,a,p,s,u,f,o,r,l,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},x0=new Ot,my=new Ot,ma=class i{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,o=this.bones.length;n<o;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,o=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let p=t[r]?t[r].matrixWorld:my;x0.multiplyMatrices(p,e[r]),x0.toArray(n,r*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Eo(e,t,t,on,An);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let o=this.bones[e];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,o=t.bones.length;n<o;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new gr),this.bones.push(a),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let o=0,r=e.length;o<r;o++){let a=e[o];t.bones.push(a.uuid);let p=n[o];t.boneInverses.push(p.toArray())}return t}},Ho=class extends we{constructor(t,e,n,o=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new Ot,D0=new Ot,Jp=[],R0=new tn,gy=new Ot,Wr=new Qt,Kr=new un,Mn=class extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,gy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),R0.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(R0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),Kr.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,o=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let p=0;p<n.length;p++)n[p]=o[a+p]}raycast(t,e){let n=this.matrixWorld,o=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),t.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<o;r++){this.getMatrixAt(r,rr),D0.multiplyMatrices(n,rr),Wr.matrixWorld=D0,Wr.raycast(t,Jp);for(let a=0,p=Jp.length;a<p;a++){let s=Jp[a];s.instanceId=r,s.object=this,e.push(s)}Jp.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(o*this.count),o,this.count,js,An));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let p=this.geometry.morphTargetsRelative?1:1-a,s=o*t;r[s]=p,r.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jf=new R,Ty=new R,Ey=new Jt,On=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,o){return this.normal.set(t,e,n),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let o=Jf.subVectors(n,e).cross(Ty.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jf),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ey.getNormalMatrix(t),o=this.coplanarPoint(Jf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new un,Vy=new ot(.5,.5),Qp=new R,Tr=class{constructor(t=new On,e=new On,n=new On,o=new On,r=new On,a=new On){this.planes=[t,e,n,o,r,a]}set(t,e,n,o,r,a){let p=this.planes;return p[0].copy(t),p[1].copy(e),p[2].copy(n),p[3].copy(o),p[4].copy(r),p[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let o=this.planes,r=t.elements,a=r[0],p=r[1],s=r[2],u=r[3],f=r[4],l=r[5],c=r[6],h=r[7],b=r[8],m=r[9],y=r[10],d=r[11],T=r[12],E=r[13],g=r[14],C=r[15];if(o[0].setComponents(u-a,h-f,d-b,C-T).normalize(),o[1].setComponents(u+a,h+f,d+b,C+T).normalize(),o[2].setComponents(u+p,h+l,d+m,C+E).normalize(),o[3].setComponents(u-p,h-l,d-m,C-E).normalize(),n)o[4].setComponents(s,c,y,g).normalize(),o[5].setComponents(u-s,h-c,d-y,C-g).normalize();else if(o[4].setComponents(u-s,h-c,d-y,C-g).normalize(),e===Qn)o[5].setComponents(u+s,h+c,d+y,C+g).normalize();else if(e===sa)o[5].setComponents(s,c,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);let e=Vy.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,o=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<o)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let o=e[n];if(Qp.x=o.normal.x>0?t.max.x:t.min.x,Qp.y=o.normal.y>0?t.max.y:t.min.y,Qp.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Qp)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends Ye{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},us=new R,fs=new R,O0=new Ot,qr=new $o,Zp=new un,Qf=new R,v0=new R,bi=class extends Ve{constructor(t=new be,e=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let o=1,r=e.count;o<r;o++)us.fromBufferAttribute(e,o-1),fs.fromBufferAttribute(e,o),n[o]=n[o-1],n[o]+=us.distanceTo(fs);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zp.copy(n.boundingSphere),Zp.applyMatrix4(o),Zp.radius+=r,t.ray.intersectsSphere(Zp)===!1)return;O0.copy(o).invert(),qr.copy(t.ray).applyMatrix4(O0);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){let h=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let m=h,y=b-1;m<y;m+=u){let d=f.getX(m),T=f.getX(m+1),E=zp(this,t,qr,s,d,T,m);E&&e.push(E)}if(this.isLineLoop){let m=f.getX(b-1),y=f.getX(h),d=zp(this,t,qr,s,m,y,b-1);d&&e.push(d)}}else{let h=Math.max(0,a.start),b=Math.min(c.count,a.start+a.count);for(let m=h,y=b-1;m<y;m+=u){let d=zp(this,t,qr,s,m,m+1,m);d&&e.push(d)}if(this.isLineLoop){let m=zp(this,t,qr,s,b-1,h,b-1);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function zp(i,t,e,n,o,r,a){let p=i.geometry.attributes.position;if(us.fromBufferAttribute(p,o),fs.fromBufferAttribute(p,r),e.distanceSqToSegment(us,fs,Qf,v0)>n)return;Qf.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Qf);if(!(u<t.near||u>t.far))return{distance:u,point:v0.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var M0=new R,A0=new R,ga=class extends bi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let o=0,r=e.count;o<r;o+=2)M0.fromBufferAttribute(e,o),A0.fromBufferAttribute(e,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+M0.distanceTo(A0);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends bi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Vr=class extends Ye{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},I0=new Ot,tl=new $o,jp=new un,Yp=new R,Ea=class extends Ve{constructor(t=new be,e=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jp.copy(n.boundingSphere),jp.applyMatrix4(o),jp.radius+=r,t.ray.intersectsSphere(jp)===!1)return;I0.copy(o).invert(),tl.copy(t.ray).applyMatrix4(I0);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=n.index,l=n.attributes.position;if(u!==null){let c=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let b=c,m=h;b<m;b++){let y=u.getX(b);Yp.fromBufferAttribute(l,y),_0(Yp,y,s,o,t,e,this)}}else{let c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let b=c,m=h;b<m;b++)Yp.fromBufferAttribute(l,b),_0(Yp,b,s,o,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function _0(i,t,e,n,o,r,a){let p=tl.distanceSqToPoint(i);if(p<e){let s=new R;tl.closestPointToPoint(i,s),s.applyMatrix4(n);let u=o.ray.origin.distanceTo(s);if(u<o.near||u>o.far)return;r.push({distance:u,distanceToRay:Math.sqrt(p),point:s,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ko=class extends He{constructor(t,e,n,o,r,a,p,s,u){super(t,e,n,o,r,a,p,s,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class extends He{constructor(t,e,n=Fo,o,r,a,p=Ie,s=Ie,u,f=fr,l=1){if(f!==fr&&f!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:t,height:e,depth:l};super(c,o,r,a,p,s,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Va=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var mi=class i extends be{constructor(t=1,e=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:o},e=Math.max(3,e);let r=[],a=[],p=[],s=[],u=new R,f=new ot;a.push(0,0,0),p.push(0,0,1),s.push(.5,.5);for(let l=0,c=3;l<=e;l++,c+=3){let h=n+l/e*o;u.x=t*Math.cos(h),u.y=t*Math.sin(h),a.push(u.x,u.y,u.z),p.push(0,0,1),f.x=(a[c]/t+1)/2,f.y=(a[c+1]/t+1)/2,s.push(f.x,f.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},to=class i extends be{constructor(t=1,e=1,n=1,o=32,r=1,a=!1,p=0,s=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:o,heightSegments:r,openEnded:a,thetaStart:p,thetaLength:s};let u=this;o=Math.floor(o),r=Math.floor(r);let f=[],l=[],c=[],h=[],b=0,m=[],y=n/2,d=0;T(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2));function T(){let g=new R,C=new R,L=0,U=(e-t)/n;for(let x=0;x<=r;x++){let P=[],S=x/r,O=S*(e-t)+t;for(let I=0;I<=o;I++){let B=I/o,_=B*s+p,z=Math.sin(_),J=Math.cos(_);C.x=O*z,C.y=-S*n+y,C.z=O*J,l.push(C.x,C.y,C.z),g.set(z,U,J).normalize(),c.push(g.x,g.y,g.z),h.push(B,1-S),P.push(b++)}m.push(P)}for(let x=0;x<o;x++)for(let P=0;P<r;P++){let S=m[P][x],O=m[P+1][x],I=m[P+1][x+1],B=m[P][x+1];(t>0||P!==0)&&(f.push(S,O,B),L+=3),(e>0||P!==r-1)&&(f.push(O,I,B),L+=3)}u.addGroup(d,L,0),d+=L}function E(g){let C=b,L=new ot,U=new R,x=0,P=g===!0?t:e,S=g===!0?1:-1;for(let I=1;I<=o;I++)l.push(0,y*S,0),c.push(0,S,0),h.push(.5,.5),b++;let O=b;for(let I=0;I<=o;I++){let _=I/o*s+p,z=Math.cos(_),J=Math.sin(_);U.x=P*J,U.y=y*S,U.z=P*z,l.push(U.x,U.y,U.z),c.push(0,S,0),L.x=z*.5+.5,L.y=J*.5*S+.5,h.push(L.x,L.y),b++}for(let I=0;I<o;I++){let B=C+I,_=O+I;g===!0?f.push(_,_+1,B):f.push(_+1,_,B),x+=3}u.addGroup(d,x,g===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sr=class i extends to{constructor(t=1,e=1,n=32,o=1,r=!1,a=0,p=Math.PI*2){super(0,t,e,n,o,r,a,p),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:p}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ls=class i extends be{constructor(t=[],e=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:o};let r=[],a=[];p(o),u(n),f(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function p(T){let E=new R,g=new R,C=new R;for(let L=0;L<e.length;L+=3)h(e[L+0],E),h(e[L+1],g),h(e[L+2],C),s(E,g,C,T)}function s(T,E,g,C){let L=C+1,U=[];for(let x=0;x<=L;x++){U[x]=[];let P=T.clone().lerp(g,x/L),S=E.clone().lerp(g,x/L),O=L-x;for(let I=0;I<=O;I++)I===0&&x===L?U[x][I]=P:U[x][I]=P.clone().lerp(S,I/O)}for(let x=0;x<L;x++)for(let P=0;P<2*(L-x)-1;P++){let S=Math.floor(P/2);P%2===0?(c(U[x][S+1]),c(U[x+1][S]),c(U[x][S])):(c(U[x][S+1]),c(U[x+1][S+1]),c(U[x+1][S]))}}function u(T){let E=new R;for(let g=0;g<r.length;g+=3)E.x=r[g+0],E.y=r[g+1],E.z=r[g+2],E.normalize().multiplyScalar(T),r[g+0]=E.x,r[g+1]=E.y,r[g+2]=E.z}function f(){let T=new R;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let g=y(T)/2/Math.PI+.5,C=d(T)/Math.PI+.5;a.push(g,1-C)}b(),l()}function l(){for(let T=0;T<a.length;T+=6){let E=a[T+0],g=a[T+2],C=a[T+4],L=Math.max(E,g,C),U=Math.min(E,g,C);L>.9&&U<.1&&(E<.2&&(a[T+0]+=1),g<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function c(T){r.push(T.x,T.y,T.z)}function h(T,E){let g=T*3;E.x=t[g+0],E.y=t[g+1],E.z=t[g+2]}function b(){let T=new R,E=new R,g=new R,C=new R,L=new ot,U=new ot,x=new ot;for(let P=0,S=0;P<r.length;P+=9,S+=6){T.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),g.set(r[P+6],r[P+7],r[P+8]),L.set(a[S+0],a[S+1]),U.set(a[S+2],a[S+3]),x.set(a[S+4],a[S+5]),C.copy(T).add(E).add(g).divideScalar(3);let O=y(C);m(L,S+0,T,O),m(U,S+2,E,O),m(x,S+4,g,O)}}function m(T,E,g,C){C<0&&T.x===1&&(a[E]=T.x-1),g.x===0&&g.z===0&&(a[E]=C/2/Math.PI+.5)}function y(T){return Math.atan2(T.z,-T.x)}function d(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,o=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(o),e.push(r),o=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),o=0,r=n.length,a;e?a=e:a=t*n[r-1];let p=0,s=r-1,u;for(;p<=s;)if(o=Math.floor(p+(s-p)/2),u=n[o]-a,u<0)p=o+1;else if(u>0)s=o-1;else{s=o;break}if(o=s,n[o]===a)return o/(r-1);let f=n[o],c=n[o+1]-f,h=(a-f)/c;return(o+h)/(r-1)}getTangent(t,e){let o=t-1e-4,r=t+1e-4;o<0&&(o=0),r>1&&(r=1);let a=this.getPoint(o),p=this.getPoint(r),s=e||(a.isVector2?new ot:new R);return s.copy(p).sub(a).normalize(),s}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,o=[],r=[],a=[],p=new R,s=new Ot;for(let h=0;h<=t;h++){let b=h/t;o[h]=this.getTangentAt(b,new R)}r[0]=new R,a[0]=new R;let u=Number.MAX_VALUE,f=Math.abs(o[0].x),l=Math.abs(o[0].y),c=Math.abs(o[0].z);f<=u&&(u=f,n.set(1,0,0)),l<=u&&(u=l,n.set(0,1,0)),c<=u&&n.set(0,0,1),p.crossVectors(o[0],n).normalize(),r[0].crossVectors(o[0],p),a[0].crossVectors(o[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),p.crossVectors(o[h-1],o[h]),p.length()>Number.EPSILON){p.normalize();let b=Math.acos(zt(o[h-1].dot(o[h]),-1,1));r[h].applyMatrix4(s.makeRotationAxis(p,b))}a[h].crossVectors(o[h],r[h])}if(e===!0){let h=Math.acos(zt(r[0].dot(r[t]),-1,1));h/=t,o[0].dot(p.crossVectors(r[0],r[t]))>0&&(h=-h);for(let b=1;b<=t;b++)r[b].applyMatrix4(s.makeRotationAxis(o[b],h*b)),a[b].crossVectors(o[b],r[b])}return{tangents:o,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends Pn{constructor(t=0,e=0,n=1,o=1,r=0,a=Math.PI*2,p=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=o,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=p,this.aRotation=s}getPoint(t,e=new ot){let n=e,o=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=o;for(;r>o;)r-=o;r<Number.EPSILON&&(a?r=0:r=o),this.aClockwise===!0&&!a&&(r===o?r=-o:r=r-o);let p=this.aStartAngle+t*r,s=this.aX+this.xRadius*Math.cos(p),u=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){let f=Math.cos(this.aRotation),l=Math.sin(this.aRotation),c=s-this.aX,h=u-this.aY;s=c*f-h*l+this.aX,u=c*l+h*f+this.aY}return n.set(s,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cs=class extends Pr{constructor(t,e,n,o,r,a){super(t,e,n,n,o,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let i=0,t=0,e=0,n=0;function o(r,a,p,s){i=r,t=p,e=-3*r+3*a-2*p-s,n=2*r-2*a+p+s}return{initCatmullRom:function(r,a,p,s,u){o(a,p,u*(p-r),u*(s-a))},initNonuniformCatmullRom:function(r,a,p,s,u,f,l){let c=(a-r)/u-(p-r)/(u+f)+(p-a)/f,h=(p-a)/f-(s-a)/(f+l)+(s-p)/l;c*=f,h*=f,o(a,p,c,h)},calc:function(r){let a=r*r,p=a*r;return i+t*r+e*a+n*p}}}var Gp=new R,Zf=new xl,zf=new xl,jf=new xl,hs=class extends Pn{constructor(t=[],e=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=o}getPoint(t,e=new R){let n=e,o=this.points,r=o.length,a=(r-(this.closed?0:1))*t,p=Math.floor(a),s=a-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/r)+1)*r:s===0&&p===r-1&&(p=r-2,s=1);let u,f;this.closed||p>0?u=o[(p-1)%r]:(Gp.subVectors(o[0],o[1]).add(o[0]),u=Gp);let l=o[p%r],c=o[(p+1)%r];if(this.closed||p+2<r?f=o[(p+2)%r]:(Gp.subVectors(o[r-1],o[r-2]).add(o[r-1]),f=Gp),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,b=Math.pow(u.distanceToSquared(l),h),m=Math.pow(l.distanceToSquared(c),h),y=Math.pow(c.distanceToSquared(f),h);m<1e-4&&(m=1),b<1e-4&&(b=m),y<1e-4&&(y=m),Zf.initNonuniformCatmullRom(u.x,l.x,c.x,f.x,b,m,y),zf.initNonuniformCatmullRom(u.y,l.y,c.y,f.y,b,m,y),jf.initNonuniformCatmullRom(u.z,l.z,c.z,f.z,b,m,y)}else this.curveType==="catmullrom"&&(Zf.initCatmullRom(u.x,l.x,c.x,f.x,this.tension),zf.initCatmullRom(u.y,l.y,c.y,f.y,this.tension),jf.initCatmullRom(u.z,l.z,c.z,f.z,this.tension));return n.set(Zf.calc(s),zf.calc(s),jf.calc(s)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(new R().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $0(i,t,e,n,o){let r=(n-t)*.5,a=(o-e)*.5,p=i*i,s=i*p;return(2*e-2*n+r+a)*s+(-3*e+3*n-2*r-a)*p+r*i+e}function Sy(i,t){let e=1-i;return e*e*t}function Py(i,t){return 2*(1-i)*i*t}function Uy(i,t){return i*i*t}function ia(i,t,e,n){return Sy(i,t)+Py(i,e)+Uy(i,n)}function wy(i,t){let e=1-i;return e*e*e*t}function Ly(i,t){let e=1-i;return 3*e*e*i*t}function Cy(i,t){return 3*(1-i)*i*i*t}function xy(i,t){return i*i*i*t}function ra(i,t,e,n,o){return wy(i,t)+Ly(i,e)+Cy(i,n)+xy(i,o)}var Sa=class extends Pn{constructor(t=new ot,e=new ot,n=new ot,o=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new ot){let n=e,o=this.v0,r=this.v1,a=this.v2,p=this.v3;return n.set(ra(t,o.x,r.x,a.x,p.x),ra(t,o.y,r.y,a.y,p.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ds=class extends Pn{constructor(t=new R,e=new R,n=new R,o=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new R){let n=e,o=this.v0,r=this.v1,a=this.v2,p=this.v3;return n.set(ra(t,o.x,r.x,a.x,p.x),ra(t,o.y,r.y,a.y,p.y),ra(t,o.z,r.z,a.z,p.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends Pn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bs=class extends Pn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends Pn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,o=this.v0,r=this.v1,a=this.v2;return n.set(ia(t,o.x,r.x,a.x),ia(t,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ys=class extends Pn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,o=this.v0,r=this.v1,a=this.v2;return n.set(ia(t,o.x,r.x,a.x),ia(t,o.y,r.y,a.y),ia(t,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,o=this.points,r=(o.length-1)*t,a=Math.floor(r),p=r-a,s=o[a===0?a:a-1],u=o[a],f=o[a>o.length-2?o.length-1:a+1],l=o[a>o.length-3?o.length-1:a+2];return n.set($0(p,s.x,u.x,f.x,l.x),$0(p,s.y,u.y,f.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(o.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(new ot().fromArray(o))}return this}},H0=Object.freeze({__proto__:null,ArcCurve:cs,CatmullRomCurve3:hs,CubicBezierCurve:Sa,CubicBezierCurve3:ds,EllipseCurve:Pr,LineCurve:Pa,LineCurve3:bs,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:ys,SplineCurve:Ur}),ms=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new H0[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),o=this.getCurveLengths(),r=0;for(;r<o.length;){if(o[r]>=n){let a=o[r]-n,p=this.curves[r],s=p.getLength(),u=s===0?0:1-a/s;return p.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,o=this.curves.length;n<o;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let o=0,r=this.curves;o<r.length;o++){let a=r[o],p=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,s=a.getPoints(p);for(let u=0;u<s.length;u++){let f=s[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let o=t.curves[e];this.curves.push(new H0[o.type]().fromJSON(o))}return this}},gi=class extends ms{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pa(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,o){let r=new Ua(this.currentPoint.clone(),new ot(t,e),new ot(n,o));return this.curves.push(r),this.currentPoint.set(n,o),this}bezierCurveTo(t,e,n,o,r,a){let p=new Sa(this.currentPoint.clone(),new ot(t,e),new ot(n,o),new ot(r,a));return this.curves.push(p),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,o,r,a){let p=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(t+p,e+s,n,o,r,a),this}absarc(t,e,n,o,r,a){return this.absellipse(t,e,n,n,o,r,a),this}ellipse(t,e,n,o,r,a,p,s){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,o,r,a,p,s),this}absellipse(t,e,n,o,r,a,p,s){let u=new Pr(t,e,n,o,r,a,p,s);if(this.curves.length>0){let l=u.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ti=class extends gi{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,o=this.holes.length;n<o;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let o=t.holes[e];this.holes.push(new gi().fromJSON(o))}return this}};function Dy(i,t,e=2){let n=t&&t.length,o=n?t[0]*e:i.length,r=Rh(i,0,o,e,!0),a=[];if(!r||r.next===r.prev)return a;let p,s,u;if(n&&(r=Ay(i,t,r,e)),i.length>80*e){p=1/0,s=1/0;let f=-1/0,l=-1/0;for(let c=e;c<o;c+=e){let h=i[c],b=i[c+1];h<p&&(p=h),b<s&&(s=b),h>f&&(f=h),b>l&&(l=b)}u=Math.max(f-p,l-s),u=u!==0?32767/u:0}return wa(r,a,e,p,s,u,0),a}function Rh(i,t,e,n,o){let r;if(o===Qy(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=k0(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=k0(a/n|0,i[a],i[a+1],r);return r&&wr(r,r.next)&&(Ca(r),r=r.next),r}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Ca(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wa(i,t,e,n,o,r,a){if(!i)return;!a&&r&&ky(i,n,o,r);let p=i;for(;i.prev!==i.next;){let s=i.prev,u=i.next;if(r?Oy(i,n,o,r):Ry(i)){t.push(s.i,i.i,u.i),Ca(i),i=u.next,p=u.next;continue}if(i=u,i===p){a?a===1?(i=vy(Ei(i),t),wa(i,t,e,n,o,r,2)):a===2&&My(i,t,e,n,o,r):wa(Ei(i),t,e,n,o,r,1);break}}}function Ry(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let o=t.x,r=e.x,a=n.x,p=t.y,s=e.y,u=n.y,f=Math.min(o,r,a),l=Math.min(p,s,u),c=Math.max(o,r,a),h=Math.max(p,s,u),b=n.next;for(;b!==t;){if(b.x>=f&&b.x<=c&&b.y>=l&&b.y<=h&&ea(o,p,r,s,a,u,b.x,b.y)&&Ue(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Oy(i,t,e,n){let o=i.prev,r=i,a=i.next;if(Ue(o,r,a)>=0)return!1;let p=o.x,s=r.x,u=a.x,f=o.y,l=r.y,c=a.y,h=Math.min(p,s,u),b=Math.min(f,l,c),m=Math.max(p,s,u),y=Math.max(f,l,c),d=el(h,b,t,e,n),T=el(m,y,t,e,n),E=i.prevZ,g=i.nextZ;for(;E&&E.z>=d&&g&&g.z<=T;){if(E.x>=h&&E.x<=m&&E.y>=b&&E.y<=y&&E!==o&&E!==a&&ea(p,f,s,l,u,c,E.x,E.y)&&Ue(E.prev,E,E.next)>=0||(E=E.prevZ,g.x>=h&&g.x<=m&&g.y>=b&&g.y<=y&&g!==o&&g!==a&&ea(p,f,s,l,u,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;E&&E.z>=d;){if(E.x>=h&&E.x<=m&&E.y>=b&&E.y<=y&&E!==o&&E!==a&&ea(p,f,s,l,u,c,E.x,E.y)&&Ue(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;g&&g.z<=T;){if(g.x>=h&&g.x<=m&&g.y>=b&&g.y<=y&&g!==o&&g!==a&&ea(p,f,s,l,u,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function vy(i,t){let e=i;do{let n=e.prev,o=e.next.next;!wr(n,o)&&vh(n,e,e.next,o)&&La(n,o)&&La(o,n)&&(t.push(n.i,e.i,o.i),Ca(e),Ca(e.next),e=i=o),e=e.next}while(e!==i);return Ei(e)}function My(i,t,e,n,o,r){let a=i;do{let p=a.next.next;for(;p!==a.prev;){if(a.i!==p.i&&Ny(a,p)){let s=Mh(a,p);a=Ei(a,a.next),s=Ei(s,s.next),wa(a,t,e,n,o,r,0),wa(s,t,e,n,o,r,0);return}p=p.next}a=a.next}while(a!==i)}function Ay(i,t,e,n){let o=[];for(let r=0,a=t.length;r<a;r++){let p=t[r]*n,s=r<a-1?t[r+1]*n:i.length,u=Rh(i,p,s,n,!1);u===u.next&&(u.steiner=!0),o.push(Fy(u))}o.sort(Iy);for(let r=0;r<o.length;r++)e=_y(o[r],e);return e}function Iy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),o=(t.next.y-t.y)/(t.next.x-t.x);e=n-o}return e}function _y(i,t){let e=$y(i,t);if(!e)return t;let n=Mh(e,i);return Ei(n,n.next),Ei(e,e.next)}function $y(i,t){let e=t,n=i.x,o=i.y,r=-1/0,a;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let l=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,a=e.x<e.next.x?e:e.next,l===n))return a}e=e.next}while(e!==t);if(!a)return null;let p=a,s=a.x,u=a.y,f=1/0;e=a;do{if(n>=e.x&&e.x>=s&&n!==e.x&&Oh(o<u?n:r,o,s,u,o<u?r:n,o,e.x,e.y)){let l=Math.abs(o-e.y)/(n-e.x);La(e,i)&&(l<f||l===f&&(e.x>a.x||e.x===a.x&&Hy(a,e)))&&(a=e,f=l)}e=e.next}while(e!==p);return a}function Hy(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function ky(i,t,e,n){let o=i;do o.z===0&&(o.z=el(o.x,o.y,t,e,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,By(o)}function By(i){let t,e=1;do{let n=i,o;i=null;let r=null;for(t=0;n;){t++;let a=n,p=0;for(let u=0;u<e&&(p++,a=a.nextZ,!!a);u++);let s=e;for(;p>0||s>0&&a;)p!==0&&(s===0||!a||n.z<=a.z)?(o=n,n=n.nextZ,p--):(o=a,a=a.nextZ,s--),r?r.nextZ=o:i=o,o.prevZ=r,r=o;n=a}r.nextZ=null,e*=2}while(t>1);return i}function el(i,t,e,n,o){return i=(i-e)*o|0,t=(t-n)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Oh(i,t,e,n,o,r,a,p){return(o-a)*(t-p)>=(i-a)*(r-p)&&(i-a)*(n-p)>=(e-a)*(t-p)&&(e-a)*(r-p)>=(o-a)*(n-p)}function ea(i,t,e,n,o,r,a,p){return!(i===a&&t===p)&&Oh(i,t,e,n,o,r,a,p)}function Ny(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xy(i,t)&&(La(i,t)&&La(t,i)&&Jy(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||wr(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function vh(i,t,e,n){let o=Kp(Ue(i,t,e)),r=Kp(Ue(i,t,n)),a=Kp(Ue(e,n,i)),p=Kp(Ue(e,n,t));return!!(o!==r&&a!==p||o===0&&Wp(i,e,t)||r===0&&Wp(i,n,t)||a===0&&Wp(e,i,n)||p===0&&Wp(e,t,n))}function Wp(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Kp(i){return i>0?1:i<0?-1:0}function Xy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function La(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Jy(i,t){let e=i,n=!1,o=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&o<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mh(i,t){let e=nl(i.i,i.x,i.y),n=nl(t.i,t.x,t.y),o=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=o,o.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function k0(i,t,e,n){let o=nl(i,t,e);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qy(i,t,e,n){let o=0;for(let r=t,a=e-n;r<e;r+=n)o+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return o}var ol=class{static triangulate(t,e,n=2){return Dy(t,e,n)}},sr=class i{static area(t){let e=t.length,n=0;for(let o=e-1,r=0;r<e;o=r++)n+=t[o].x*t[r].y-t[r].x*t[o].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],o=[],r=[];B0(t),F0(n,t);let a=t.length;e.forEach(B0);for(let s=0;s<e.length;s++)o.push(a),a+=e[s].length,F0(n,e[s]);let p=ol.triangulate(n,o);for(let s=0;s<p.length;s+=3)r.push(p.slice(s,s+3));return r}};function B0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function F0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xa=class i extends ls{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},en=class i extends be{constructor(t=1,e=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:o};let r=t/2,a=e/2,p=Math.floor(n),s=Math.floor(o),u=p+1,f=s+1,l=t/p,c=e/s,h=[],b=[],m=[],y=[];for(let d=0;d<f;d++){let T=d*c-a;for(let E=0;E<u;E++){let g=E*l-r;b.push(g,-T,0),m.push(0,0,1),y.push(E/p),y.push(1-d/s)}}for(let d=0;d<s;d++)for(let T=0;T<p;T++){let E=T+u*d,g=T+u*(d+1),C=T+1+u*(d+1),L=T+1+u*d;h.push(E,g,L),h.push(g,C,L)}this.setIndex(h),this.setAttribute("position",new Xt(b,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Bo=class i extends be{constructor(t=.5,e=1,n=32,o=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:o,thetaStart:r,thetaLength:a},n=Math.max(3,n),o=Math.max(1,o);let p=[],s=[],u=[],f=[],l=t,c=(e-t)/o,h=new R,b=new ot;for(let m=0;m<=o;m++){for(let y=0;y<=n;y++){let d=r+y/n*a;h.x=l*Math.cos(d),h.y=l*Math.sin(d),s.push(h.x,h.y,h.z),u.push(0,0,1),b.x=(h.x/e+1)/2,b.y=(h.y/e+1)/2,f.push(b.x,b.y)}l+=c}for(let m=0;m<o;m++){let y=m*(n+1);for(let d=0;d<n;d++){let T=d+y,E=T,g=T+n+1,C=T+n+2,L=T+1;p.push(E,g,L),p.push(g,C,L)}}this.setIndex(p),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Da=class i extends be{constructor(t=new Ti([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],o=[],r=[],a=[],p=0,s=0;if(Array.isArray(t)===!1)u(t);else for(let f=0;f<t.length;f++)u(t[f]),this.addGroup(p,s,f),p+=s,s=0;this.setIndex(n),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(a,2));function u(f){let l=o.length/3,c=f.extractPoints(e),h=c.shape,b=c.holes;sr.isClockWise(h)===!1&&(h=h.reverse());for(let y=0,d=b.length;y<d;y++){let T=b[y];sr.isClockWise(T)===!0&&(b[y]=T.reverse())}let m=sr.triangulateShape(h,b);for(let y=0,d=b.length;y<d;y++){let T=b[y];h=h.concat(T)}for(let y=0,d=h.length;y<d;y++){let T=h[y];o.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let y=0,d=m.length;y<d;y++){let T=m[y],E=T[0]+l,g=T[1]+l,C=T[2]+l;n.push(E,g,C),s+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zy(e,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}return new i(n,t.curveSegments)}};function Zy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let o=i[e];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t}var Lr=class extends Ye{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Ra=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends Ye{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ln=class extends fn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Oa=class extends Ye{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var gs=class extends Ye{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ts=class extends Ye{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qp(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jy(i){function t(o,r){return i[o]-i[r]}let e=i.length,n=new Array(e);for(let o=0;o!==e;++o)n[o]=o;return n.sort(t),n}function N0(i,t,e){let n=i.length,o=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let p=e[r]*t;for(let s=0;s!==t;++s)o[a++]=i[p+s]}return o}function Ah(i,t,e,n){let o=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[o++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[o++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[o++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[o++];while(r!==void 0)}var Vo=class{constructor(t,e,n,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,o=e[n],r=e[n-1];t:{e:{let a;n:{o:if(!(t<o)){for(let p=n+2;;){if(o===void 0){if(t<r)break o;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===p)break;if(r=o,o=e[++n],t<o)break e}a=e.length;break n}if(!(t>=r)){let p=e[1];t<p&&(n=2,r=p);for(let s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(o=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let p=n+a>>>1;t<e[p]?a=p:n=p+1}if(o=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,o)}return this.interpolate_(n,r,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o;for(let a=0;a!==o;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Es=class extends Vo{constructor(t,e,n,o){super(t,e,n,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pi,endingEnd:pi}}intervalChanged_(t,e,n){let o=this.parameterPositions,r=t-2,a=t+1,p=o[r],s=o[a];if(p===void 0)switch(this.getSettings_().endingStart){case si:r=t,p=2*e-n;break;case aa:r=o.length-2,p=e+o[r]-o[r+1];break;default:r=t,p=n}if(s===void 0)switch(this.getSettings_().endingEnd){case si:a=t,s=2*n-e;break;case aa:a=1,s=n+o[1]-o[0];break;default:a=t-1,s=e}let u=(n-e)*.5,f=this.valueSize;this._weightPrev=u/(e-p),this._weightNext=u/(s-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=this._offsetPrev,l=this._offsetNext,c=this._weightPrev,h=this._weightNext,b=(n-e)/(o-e),m=b*b,y=m*b,d=-c*y+2*c*m-c*b,T=(1+c)*y+(-1.5-2*c)*m+(-.5+c)*b+1,E=(-1-h)*y+(1.5+h)*m+.5*b,g=h*y-h*m;for(let C=0;C!==p;++C)r[C]=d*a[f+C]+T*a[u+C]+E*a[s+C]+g*a[l+C];return r}},va=class extends Vo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=(n-e)/(o-e),l=1-f;for(let c=0;c!==p;++c)r[c]=a[u+c]*l+a[s+c]*f;return r}},Vs=class extends Vo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qp(e,this.TimeBufferType),this.values=qp(n,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qp(t.times,Array),values:qp(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(n.interpolation=o)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vs(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Es(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case li:e=this.InterpolantFactoryMethodDiscrete;break;case ci:e=this.InterpolantFactoryMethodLinear;break;case ts:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return li;case this.InterpolantFactoryMethodLinear:return ci;case this.InterpolantFactoryMethodSmooth:return ts}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]*=t}return this}trim(t,e){let n=this.times,o=n.length,r=0,a=o-1;for(;r!==o&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==o){r>=a&&(a=Math.max(a,1),r=a-1);let p=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*p,a*p)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,o=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let p=0;p!==r;p++){let s=n[p];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,p,s),t=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,p,s,a),t=!1;break}a=s}if(o!==void 0&&zy(o))for(let p=0,s=o.length;p!==s;++p){let u=o[p];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,p,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),o=this.getInterpolation()===ts,r=t.length-1,a=1;for(let p=1;p<r;++p){let s=!1,u=t[p],f=t[p+1];if(u!==f&&(p!==1||u!==t[0]))if(o)s=!0;else{let l=p*n,c=l-n,h=l+n;for(let b=0;b!==n;++b){let m=e[l+b];if(m!==e[c+b]||m!==e[h+b]){s=!0;break}}}if(s){if(p!==a){t[a]=t[p];let l=p*n,c=a*n;for(let h=0;h!==n;++h)e[c+h]=e[l+h]}++a}}if(r>0){t[a]=t[r];for(let p=r*n,s=a*n,u=0;u!==n;++u)e[s+u]=e[p+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,o=new n(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=ci;var So=class extends cn{constructor(t,e,n){super(t,e,n)}};So.prototype.ValueTypeName="bool";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=li;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends cn{constructor(t,e,n,o){super(t,e,n,o)}};Ma.prototype.ValueTypeName="color";var eo=class extends cn{constructor(t,e,n,o){super(t,e,n,o)}};eo.prototype.ValueTypeName="number";var Ss=class extends Vo{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=(n-e)/(o-e),u=t*p;for(let f=u+p;u!==f;u+=4)Ae.slerpFlat(r,0,a,u-p,a,u,s);return r}},no=class extends cn{constructor(t,e,n,o){super(t,e,n,o)}InterpolantFactoryMethodLinear(t){return new Ss(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends cn{constructor(t,e,n){super(t,e,n)}};Po.prototype.ValueTypeName="string";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=li;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends cn{constructor(t,e,n,o){super(t,e,n,o)}};oo.prototype.ValueTypeName="vector";var Vi=class{constructor(t="",e=-1,n=[],o=Cu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=o,this.uuid=vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,o=1/(t.fps||1);for(let a=0,p=n.length;a!==p;++a)e.push(Gy(n[a]).scale(o));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,o={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(cn.toJSON(n[r]));return o}static CreateFromMorphTargetSequence(t,e,n,o){let r=e.length,a=[];for(let p=0;p<r;p++){let s=[],u=[];s.push((p+r-1)%r,p,(p+1)%r),u.push(0,1,0);let f=jy(s);s=N0(s,1,f),u=N0(u,1,f),!o&&s[0]===0&&(s.push(r),u.push(u[0])),a.push(new eo(".morphTargetInfluences["+e[p].name+"]",s,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let o=t;n=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<n.length;o++)if(n[o].name===e)return n[o];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let o={},r=/^([\w-]*?)([\d]+)$/;for(let p=0,s=t.length;p<s;p++){let u=t[p],f=u.name.match(r);if(f&&f.length>1){let l=f[1],c=o[l];c||(o[l]=c=[]),c.push(u)}}let a=[];for(let p in o)a.push(this.CreateFromMorphTargetSequence(p,o[p],e,n));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(l,c,h,b,m){if(h.length!==0){let y=[],d=[];Ah(h,y,d,b),y.length!==0&&m.push(new l(c,y,d))}},o=[],r=t.name||"default",a=t.fps||30,p=t.blendMode,s=t.length||-1,u=t.hierarchy||[];for(let l=0;l<u.length;l++){let c=u[l].keys;if(!(!c||c.length===0))if(c[0].morphTargets){let h={},b;for(b=0;b<c.length;b++)if(c[b].morphTargets)for(let m=0;m<c[b].morphTargets.length;m++)h[c[b].morphTargets[m]]=-1;for(let m in h){let y=[],d=[];for(let T=0;T!==c[b].morphTargets.length;++T){let E=c[b];y.push(E.time),d.push(E.morphTarget===m?1:0)}o.push(new eo(".morphTargetInfluence["+m+"]",y,d))}s=h.length*a}else{let h=".bones["+e[l].name+"]";n(oo,h+".position",c,"pos",o),n(no,h+".quaternion",c,"rot",o),n(oo,h+".scale",c,"scl",o)}}return o.length===0?null:new this(r,s,o,p)}resetDuration(){let t=this.tracks,e=0;for(let n=0,o=t.length;n!==o;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Yy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return eo;case"vector":case"vector2":case"vector3":case"vector4":return oo;case"color":return Ma;case"quaternion":return no;case"bool":case"boolean":return So;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Yy(i.type);if(i.times===void 0){let e=[],n=[];Ah(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Kn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ps=class{constructor(t,e,n){let o=this,r=!1,a=0,p=0,s,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){p++,r===!1&&o.onStart!==void 0&&o.onStart(f,a,p),r=!0},this.itemEnd=function(f){a++,o.onProgress!==void 0&&o.onProgress(f,a,p),a===p&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return s?s(f):f},this.setURLModifier=function(f){return s=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){let l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,c=u.length;l<c;l+=2){let h=u[l],b=u[l+1];if(h.global&&(h.lastIndex=0),h.test(f))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ih=new Ps,io=class{constructor(t){this.manager=t!==void 0?t:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(o,r){n.load(t,o,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";var go={},il=class extends Error{constructor(t,e){super(t),this.response=e}},Cr=class extends io{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Kn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(go[t]!==void 0){go[t].push({onLoad:e,onProgress:n,onError:o});return}go[t]=[],go[t].push({onLoad:e,onProgress:n,onError:o});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,s=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let f=go[t],l=u.body.getReader(),c=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),h=c?parseInt(c):0,b=h!==0,m=0,y=new ReadableStream({start(d){T();function T(){l.read().then(({done:E,value:g})=>{if(E)d.close();else{m+=g.byteLength;let C=new ProgressEvent("progress",{lengthComputable:b,loaded:m,total:h});for(let L=0,U=f.length;L<U;L++){let x=f[L];x.onProgress&&x.onProgress(C)}d.enqueue(g),T()}},E=>{d.error(E)})}}});return new Response(y)}else throw new il(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(s){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,p));case"json":return u.json();default:if(p==="")return u.text();{let l=/charset="?([^;"\s]*)"?/i.exec(p),c=l&&l[1]?l[1].toLowerCase():void 0,h=new TextDecoder(c);return u.arrayBuffer().then(b=>h.decode(b))}}}).then(u=>{Kn.add(`file:${t}`,u);let f=go[t];delete go[t];for(let l=0,c=f.length;l<c;l++){let h=f[l];h.onLoad&&h.onLoad(u)}}).catch(u=>{let f=go[t];if(f===void 0)throw this.manager.itemError(t),u;delete go[t];for(let l=0,c=f.length;l<c;l++){let h=f[l];h.onError&&h.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ar=new WeakMap,Us=class extends io{constructor(t){super(t)}load(t,e,n,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Kn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let l=ar.get(a);l===void 0&&(l=[],ar.set(a,l)),l.push({onLoad:e,onError:o})}return a}let p=lr("img");function s(){f(),e&&e(this);let l=ar.get(this)||[];for(let c=0;c<l.length;c++){let h=l[c];h.onLoad&&h.onLoad(this)}ar.delete(this),r.manager.itemEnd(t)}function u(l){f(),o&&o(l),Kn.remove(`image:${t}`);let c=ar.get(this)||[];for(let h=0;h<c.length;h++){let b=c[h];b.onError&&b.onError(l)}ar.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){p.removeEventListener("load",s,!1),p.removeEventListener("error",u,!1)}return p.addEventListener("load",s,!1),p.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Kn.add(`image:${t}`,p),r.manager.itemStart(t),p.src=t,p}};var ro=class extends io{constructor(t){super(t)}load(t,e,n,o){let r=new He,a=new Us(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(p){r.image=p,r.needsUpdate=!0,e!==void 0&&e(r)},n,o),r}},Si=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Aa=class extends Si{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Yf=new Ot,X0=new R,J0=new R,Ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;X0.setFromMatrixPosition(t.matrixWorld),e.position.copy(X0),J0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(J0),e.updateMatrixWorld(),Yf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rl=class extends Ia{constructor(){super(new Me(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=hi*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||o!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=o,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},_a=class extends Si{constructor(t,e,n=0,o=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=o,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Q0=new Ot,ta=new R,Gf=new R,al=class extends Ia{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,o=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ta.setFromMatrixPosition(t.matrixWorld),n.position.copy(ta),Gf.copy(n.position),Gf.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gf),n.updateMatrixWorld(),o.makeTranslation(-ta.x,-ta.y,-ta.z),Q0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0,n.coordinateSystem,n.reversedDepth)}},$a=class extends Si{constructor(t,e,n=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Uo=class extends ca{constructor(t=-1,e=1,n=1,o=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=o,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,o,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2,r=n-t,a=n+t,p=o+e,s=o-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,p-=f*this.view.offsetY,s=p-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,p,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pl=class extends Ia{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends Si{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new pl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Wf=new WeakMap,Ha=class extends io{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Kn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{if(Wf.has(a)===!0)o&&o(Wf.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(u),r.manager.itemEnd(t),u});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}let p={};p.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",p.headers=this.requestHeader,p.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(t,p).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Kn.add(`image-bitmap:${t}`,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){o&&o(u),Wf.set(s,u),Kn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Kn.add(`image-bitmap:${t}`,s),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ws=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ka=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Ls=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let o,r,a;switch(e){case"quaternion":o=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":o=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:o=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=o,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,o=this.valueSize,r=t*o+o,a=this.cumulativeWeight;if(a===0){for(let p=0;p!==o;++p)n[r+p]=n[p];a=e}else{a+=e;let p=e/a;this._mixBufferRegion(n,r,0,p,o)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,o=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,o,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,o=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,p=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let s=e*this._origIndex;this._mixBufferRegion(n,o,s,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,o,this._addIndex*e,1,e);for(let s=e,u=e+e;s!==u;++s)if(n[s]!==n[s+e]){p.setValue(n,o);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,o=n*this._origIndex;t.getValue(e,o);for(let r=n,a=o;r!==a;++r)e[r]=e[o+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,o,r){if(o>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,o){Ae.slerpFlat(t,e,t,e,t,n,o)}_slerpAdditive(t,e,n,o,r){let a=this._workIndex*r;Ae.multiplyQuaternionsFlat(t,a,t,e,t,n),Ae.slerpFlat(t,e,t,e,t,a,o)}_lerp(t,e,n,o,r){let a=1-o;for(let p=0;p!==r;++p){let s=e+p;t[s]=t[s]*a+t[n+p]*o}}_lerpAdditive(t,e,n,o,r){for(let a=0;a!==r;++a){let p=e+a;t[p]=t[p]+t[n+a]*o}}},Dl="\\[\\]\\.:\\/",Wy=new RegExp("["+Dl+"]","g"),Rl="[^"+Dl+"]",Ky="[^"+Dl.replace("\\.","")+"]",qy=/((?:WC+[\/:])*)/.source.replace("WC",Rl),t3=/(WCOD+)?/.source.replace("WCOD",Ky),e3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),n3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),o3=new RegExp("^"+qy+t3+e3+n3+"$"),i3=["material","materials","bones","map"],sl=class{constructor(t,e,n){let o=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,o=this._bindings[n];o!==void 0&&o.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let o=this._targetGroup.nCachedObjects_,r=n.length;o!==r;++o)n[o].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wy,"")}static parseTrackName(t){let e=o3.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=n.nodeName&&n.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let r=n.nodeName.substring(o+1);i3.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,o),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let p=r[a];if(p.name===e||p.uuid===e)return p;let s=n(p.children);if(s)return s}return null},o=n(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)t[e++]=n[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,o=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let p=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?p=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(p=this.Versioning.MatrixWorldNeedsUpdate);let s=this.BindingType.Direct;if(r!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}s=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(s=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(s=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[s],this.setValue=this.SetterByBindingTypeAndVersioning[s][p]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=sl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cs=class{constructor(t,e,n=null,o=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=o;let r=e.tracks,a=r.length,p=new Array(a),s={endingStart:pi,endingEnd:pi};for(let u=0;u!==a;++u){let f=r[u].createInterpolant(null);p[u]=f,f.settings=s}this._interpolantSettings=s,this._interpolants=p,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=dh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let o=this._clip.duration,r=t._clip.duration,a=r/o,p=o/r;t.warp(1,a,e),this.warp(p,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let o=this._mixer,r=o.time,a=this.timeScale,p=this._timeScaleInterpolant;p===null&&(p=o._lendControlInterpolant(),this._timeScaleInterpolant=p);let s=p.parameterPositions,u=p.sampleValues;return s[0]=r,s[1]=r+n,u[0]=t/a,u[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,o){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let s=(t-r)*n;s<0||n===0?e=0:(this._startTime=null,e=n*s)}e*=this._updateTimeScale(t);let a=this._updateTime(e),p=this._updateWeight(t);if(p>0){let s=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case yh:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulateAdditive(p);break;case Cu:default:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulate(o,p)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,o=this.time+t,r=this._loopCount,a=n===bh;if(t===0)return r===-1?o:a&&(r&1)===1?e-o:o;if(n===Lu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(o>=e)o=e;else if(o<0)o=0;else{this.time=o;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),o>=e||o<0){let p=Math.floor(o/e);o-=e*p,r+=Math.abs(p);let s=this.repetitions-r;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=t>0?e:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(s===1){let u=t<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:p})}}else this.time=o;if(a&&(r&1)===1)return e-o}return o}_setEndings(t,e,n){let o=this._interpolantSettings;n?(o.endingStart=si,o.endingEnd=si):(t?o.endingStart=this.zeroSlopeAtStart?si:pi:o.endingStart=aa,e?o.endingEnd=this.zeroSlopeAtEnd?si:pi:o.endingEnd=aa)}_scheduleFading(t,e,n){let o=this._mixer,r=o.time,a=this._weightInterpolant;a===null&&(a=o._lendControlInterpolant(),this._weightInterpolant=a);let p=a.parameterPositions,s=a.sampleValues;return p[0]=r,s[0]=e,p[1]=r+t,s[1]=n,this}},r3=new Float32Array(1),Ba=class extends qn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,o=t._clip.tracks,r=o.length,a=t._propertyBindings,p=t._interpolants,s=n.uuid,u=this._bindingsByRootAndName,f=u[s];f===void 0&&(f={},u[s]=f);for(let l=0;l!==r;++l){let c=o[l],h=c.name,b=f[h];if(b!==void 0)++b.referenceCount,a[l]=b;else{if(b=a[l],b!==void 0){b._cacheIndex===null&&(++b.referenceCount,this._addInactiveBinding(b,s,h));continue}let m=e&&e._propertyBindings[l].binding.parsedPath;b=new Ls(ce.create(n,h,m),c.ValueTypeName,c.getValueSize()),++b.referenceCount,this._addInactiveBinding(b,s,h),a[l]=b}p[l].resultBuffer=b.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,o=t._clip.uuid,r=this._actionsByClip[o];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,o,n)}let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let o=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let p=a.knownActions;t._byClipCacheIndex=p.length,p.push(t)}t._cacheIndex=o.length,o.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],o=t._cacheIndex;n._cacheIndex=o,e[o]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,p=a[r],s=p.knownActions,u=s[s.length-1],f=t._byClipCacheIndex;u._byClipCacheIndex=f,s[f]=u,s.pop(),t._byClipCacheIndex=null;let l=p.actionByRoot,c=(t._localRoot||this._root).uuid;delete l[c],s.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,o=this._nActiveActions++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,o=--this._nActiveActions,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let o=this._bindingsByRootAndName,r=this._bindings,a=o[e];a===void 0&&(a={},o[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,o=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,p=a[o],s=e[e.length-1],u=t._cacheIndex;s._cacheIndex=u,e[u]=s,e.pop(),delete p[r],Object.keys(p).length===0&&delete a[o]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,o=this._nActiveBindings++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,o=--this._nActiveBindings,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new va(new Float32Array(2),new Float32Array(2),1,r3),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,o=--this._nActiveControlInterpolants,r=e[o];t.__cacheIndex=o,e[o]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let o=e||this._root,r=o.uuid,a=typeof t=="string"?Vi.findByName(o,t):t,p=a!==null?a.uuid:t,s=this._actionsByClip[p],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cu),s!==void 0){let l=s.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=s.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let f=new Cs(this,a,e,n);return this._bindAction(f,u),this._addInactiveAction(f,p,r),f}existingAction(t,e){let n=e||this._root,o=n.uuid,r=typeof t=="string"?Vi.findByName(n,t):t,a=r?r.uuid:t,p=this._actionsByClip[a];return p!==void 0&&p.actionByRoot[o]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,o=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(o,t,r,a);let p=this._bindings,s=this._nActiveBindings;for(let u=0;u!==s;++u)p[u].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,o=this._actionsByClip,r=o[n];if(r!==void 0){let a=r.knownActions;for(let p=0,s=a.length;p!==s;++p){let u=a[p];this._deactivateAction(u);let f=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=f,e[f]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete o[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let p=n[a].actionByRoot,s=p[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let o=this._bindingsByRootAndName,r=o[e];if(r!==void 0)for(let a in r){let p=r[a];p.restoreOriginalState(),this._removeInactiveBinding(p)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Z0=new Ot,Fa=class{constructor(t,e,n=0,o=1/0){this.ray=new $o(t,e),this.near=n,this.far=o,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Z0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Z0),this}intersectObject(t,e=!0,n=[]){return ul(t,this,n,e),n.sort(z0),n}intersectObjects(t,e=!0,n=[]){for(let o=0,r=t.length;o<r;o++)ul(t[o],this,n,e);return n.sort(z0),n}};function z0(i,t){return i.distance-t.distance}function ul(i,t,e,n){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(o=!1),o===!0&&n===!0){let r=i.children;for(let a=0,p=r.length;a<p;a++)ul(r[a],t,e,!0)}}function Ol(i,t,e,n){let o=a3(n);switch(e){case Tl:return i*t;case js:return i*t/o.components*o.byteLength;case Ys:return i*t/o.components*o.byteLength;case Vl:return i*t*2/o.components*o.byteLength;case Gs:return i*t*2/o.components*o.byteLength;case El:return i*t*3/o.components*o.byteLength;case on:return i*t*4/o.components*o.byteLength;case Ws:return i*t*4/o.components*o.byteLength;case Za:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qs:case eu:return Math.max(i,16)*Math.max(t,8)/4;case Ks:case tu:return Math.max(i,8)*Math.max(t,8)/2;case nu:case ou:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case iu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ru:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case au:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case su:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case du:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tu:case Eu:case Vu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Su:case Pu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Uu:case wu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a3(i){switch(i){case Un:case bl:return{byteLength:1,components:1};case Rr:case yl:case wn:return{byteLength:2,components:1};case Zs:case zs:return{byteLength:2,components:4};case Fo:case Qs:case An:return{byteLength:4,components:1};case ml:case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function s1(){let i=null,t=!1,e=null,n=null;function o(r,a){e(r,a),n=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function f3(i){let t=new WeakMap;function e(p,s){let u=p.array,f=p.usage,l=u.byteLength,c=i.createBuffer();i.bindBuffer(s,c),i.bufferData(s,u,f),p.onUploadCallback();let h;if(u instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=i.HALF_FLOAT;else if(u instanceof Uint16Array)p.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=i.SHORT;else if(u instanceof Uint32Array)h=i.UNSIGNED_INT;else if(u instanceof Int32Array)h=i.INT;else if(u instanceof Int8Array)h=i.BYTE;else if(u instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:p.version,size:l}}function n(p,s,u){let f=s.array,l=s.updateRanges;if(i.bindBuffer(u,p),l.length===0)i.bufferSubData(u,0,f);else{l.sort((h,b)=>h.start-b.start);let c=0;for(let h=1;h<l.length;h++){let b=l[c],m=l[h];m.start<=b.start+b.count+1?b.count=Math.max(b.count,m.start+m.count-b.start):(++c,l[c]=m)}l.length=c+1;for(let h=0,b=l.length;h<b;h++){let m=l[h];i.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count)}s.clearUpdateRanges()}s.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function r(p){p.isInterleavedBufferAttribute&&(p=p.data);let s=t.get(p);s&&(i.deleteBuffer(s.buffer),t.delete(p))}function a(p,s){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){let f=t.get(p);(!f||f.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}let u=t.get(p);if(u===void 0)t.set(p,e(p,s));else if(u.version<p.version){if(u.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,p,s),u.version=p.version}}return{get:o,remove:r,update:a}}var l3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c3=`#ifdef USE_ALPHAHASH
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
#endif`,h3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m3=`#ifdef USE_AOMAP
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
#endif`,g3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T3=`#ifdef USE_BATCHING
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
#endif`,E3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U3=`#ifdef USE_IRIDESCENCE
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
#endif`,w3=`#ifdef USE_BUMPMAP
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
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A3=`#define PI 3.141592653589793
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
} // validated`,I3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_3=`vec3 transformedNormal = objectNormal;
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
#endif`,$3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F3="gl_FragColor = linearToOutputTexel( gl_FragColor );",N3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X3=`#ifdef USE_ENVMAP
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
#endif`,J3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q3=`#ifdef USE_ENVMAP
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
#endif`,Z3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z3=`#ifdef USE_ENVMAP
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
#endif`,j3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K3=`#ifdef USE_GRADIENTMAP
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
}`,q3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,fm=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,t4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i4=`#ifdef USE_TRANSMISSION
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
#endif`,r4=`#ifdef USE_TRANSMISSION
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
#endif`,a4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l4=`uniform sampler2D t2D;
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
}`,c4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y4=`#include <common>
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
}`,m4=`#if DEPTH_PACKING == 3200
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
}`,g4=`#define DISTANCE
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
}`,T4=`#define DISTANCE
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
}`,E4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S4=`uniform float scale;
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
}`,P4=`uniform vec3 diffuse;
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
}`,U4=`#include <common>
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
}`,w4=`uniform vec3 diffuse;
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
}`,L4=`#define LAMBERT
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
}`,C4=`#define LAMBERT
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
}`,x4=`#define MATCAP
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
}`,D4=`#define MATCAP
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
}`,R4=`#define NORMAL
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
}`,O4=`#define NORMAL
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
}`,v4=`#define PHONG
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
}`,M4=`#define PHONG
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
}`,A4=`#define STANDARD
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
}`,I4=`#define STANDARD
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
}`,_4=`#define TOON
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
}`,$4=`#define TOON
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
}`,H4=`uniform float size;
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
}`,k4=`uniform vec3 diffuse;
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
}`,B4=`#include <common>
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
}`,F4=`uniform vec3 color;
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
}`,N4=`uniform float rotation;
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
}`,X4=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:l3,alphahash_pars_fragment:c3,alphamap_fragment:h3,alphamap_pars_fragment:d3,alphatest_fragment:b3,alphatest_pars_fragment:y3,aomap_fragment:m3,aomap_pars_fragment:g3,batching_pars_vertex:T3,batching_vertex:E3,begin_vertex:V3,beginnormal_vertex:S3,bsdfs:P3,iridescence_fragment:U3,bumpmap_pars_fragment:w3,clipping_planes_fragment:L3,clipping_planes_pars_fragment:C3,clipping_planes_pars_vertex:x3,clipping_planes_vertex:D3,color_fragment:R3,color_pars_fragment:O3,color_pars_vertex:v3,color_vertex:M3,common:A3,cube_uv_reflection_fragment:I3,defaultnormal_vertex:_3,displacementmap_pars_vertex:$3,displacementmap_vertex:H3,emissivemap_fragment:k3,emissivemap_pars_fragment:B3,colorspace_fragment:F3,colorspace_pars_fragment:N3,envmap_fragment:X3,envmap_common_pars_fragment:J3,envmap_pars_fragment:Q3,envmap_pars_vertex:Z3,envmap_physical_pars_fragment:om,envmap_vertex:z3,fog_vertex:j3,fog_pars_vertex:Y3,fog_fragment:G3,fog_pars_fragment:W3,gradientmap_pars_fragment:K3,lightmap_pars_fragment:q3,lights_lambert_fragment:tm,lights_lambert_pars_fragment:em,lights_pars_begin:nm,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:am,lights_phong_pars_fragment:pm,lights_physical_fragment:sm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:ym,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:Tm,map_particle_pars_fragment:Em,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:Pm,morphcolor_vertex:Um,morphnormal_vertex:wm,morphtarget_pars_vertex:Lm,morphtarget_vertex:Cm,normal_fragment_begin:xm,normal_fragment_maps:Dm,normal_pars_fragment:Rm,normal_pars_vertex:Om,normal_vertex:vm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:_m,iridescence_pars_fragment:$m,opaque_fragment:Hm,packing:km,premultiplied_alpha_fragment:Bm,project_vertex:Fm,dithering_fragment:Nm,dithering_pars_fragment:Xm,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:zm,shadowmap_vertex:jm,shadowmask_pars_fragment:Ym,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Km,skinnormal_vertex:qm,specularmap_fragment:t4,specularmap_pars_fragment:e4,tonemapping_fragment:n4,tonemapping_pars_fragment:o4,transmission_fragment:i4,transmission_pars_fragment:r4,uv_pars_fragment:a4,uv_pars_vertex:p4,uv_vertex:s4,worldpos_vertex:u4,background_vert:f4,background_frag:l4,backgroundCube_vert:c4,backgroundCube_frag:h4,cube_vert:d4,cube_frag:b4,depth_vert:y4,depth_frag:m4,distanceRGBA_vert:g4,distanceRGBA_frag:T4,equirect_vert:E4,equirect_frag:V4,linedashed_vert:S4,linedashed_frag:P4,meshbasic_vert:U4,meshbasic_frag:w4,meshlambert_vert:L4,meshlambert_frag:C4,meshmatcap_vert:x4,meshmatcap_frag:D4,meshnormal_vert:R4,meshnormal_frag:O4,meshphong_vert:v4,meshphong_frag:M4,meshphysical_vert:A4,meshphysical_frag:I4,meshtoon_vert:_4,meshtoon_frag:$4,points_vert:H4,points_frag:k4,shadow_vert:B4,shadow_frag:F4,sprite_vert:N4,sprite_frag:X4},ft={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},po={basic:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new yt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ge([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ge([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ge([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ge([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ge([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ge([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ge([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ge([ft.lights,ft.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};po.physical={uniforms:Ge([po.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Du={r:0,b:0,g:0},Di=new Sn,J4=new Ot;function Q4(i,t,e,n,o,r,a){let p=new yt(0),s=r===!0?0:1,u,f,l=null,c=0,h=null;function b(E){let g=E.isScene===!0?E.background:null;return g&&g.isTexture&&(g=(E.backgroundBlurriness>0?e:t).get(g)),g}function m(E){let g=!1,C=b(E);C===null?d(p,s):C&&C.isColor&&(d(C,1),g=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,g){let C=b(g);C&&(C.isCubeTexture||C.mapping===Qa)?(f===void 0&&(f=new Qt(new di(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:xi(po.backgroundCube.uniforms),vertexShader:po.backgroundCube.vertexShader,fragmentShader:po.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,U,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),Di.copy(g.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(J4.makeRotationFromEuler(Di)),f.material.toneMapped=jt.getTransfer(C.colorSpace)!==ie,(l!==C||c!==C.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,l=C,c=C.version,h=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new Qt(new en(2,2),new Le({name:"BackgroundMaterial",uniforms:xi(po.background.uniforms),vertexShader:po.background.vertexShader,fragmentShader:po.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=jt.getTransfer(C.colorSpace)!==ie,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(l!==C||c!==C.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,l=C,c=C.version,h=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function d(E,g){E.getRGB(Du,Cl(i)),n.buffers.color.setClear(Du.r,Du.g,Du.b,g,a)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return p},setClearColor:function(E,g=1){p.set(E),s=g,d(p,s)},getClearAlpha:function(){return s},setClearAlpha:function(E){s=E,d(p,s)},render:m,addToRenderList:y,dispose:T}}function Z4(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=c(null),r=o,a=!1;function p(S,O,I,B,_){let z=!1,J=l(B,I,O);r!==J&&(r=J,u(r.object)),z=h(S,B,I,_),z&&b(S,B,I,_),_!==null&&t.update(_,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,g(S,O,I,B),_!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(_).buffer))}function s(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function l(S,O,I){let B=I.wireframe===!0,_=n[S.id];_===void 0&&(_={},n[S.id]=_);let z=_[O.id];z===void 0&&(z={},_[O.id]=z);let J=z[B];return J===void 0&&(J=c(s()),z[B]=J),J}function c(S){let O=[],I=[],B=[];for(let _=0;_<e;_++)O[_]=0,I[_]=0,B[_]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:I,attributeDivisors:B,object:S,attributes:{},index:null}}function h(S,O,I,B){let _=r.attributes,z=O.attributes,J=0,tt=I.getAttributes();for(let X in tt)if(tt[X].location>=0){let lt=_[X],Pt=z[X];if(Pt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Pt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Pt=S.instanceColor)),lt===void 0||lt.attribute!==Pt||Pt&&lt.data!==Pt.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function b(S,O,I,B){let _={},z=O.attributes,J=0,tt=I.getAttributes();for(let X in tt)if(tt[X].location>=0){let lt=z[X];lt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor));let Pt={};Pt.attribute=lt,lt&&lt.data&&(Pt.data=lt.data),_[X]=Pt,J++}r.attributes=_,r.attributesNum=J,r.index=B}function m(){let S=r.newAttributes;for(let O=0,I=S.length;O<I;O++)S[O]=0}function y(S){d(S,0)}function d(S,O){let I=r.newAttributes,B=r.enabledAttributes,_=r.attributeDivisors;I[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),_[S]!==O&&(i.vertexAttribDivisor(S,O),_[S]=O)}function T(){let S=r.newAttributes,O=r.enabledAttributes;for(let I=0,B=O.length;I<B;I++)O[I]!==S[I]&&(i.disableVertexAttribArray(I),O[I]=0)}function E(S,O,I,B,_,z,J){J===!0?i.vertexAttribIPointer(S,O,I,_,z):i.vertexAttribPointer(S,O,I,B,_,z)}function g(S,O,I,B){m();let _=B.attributes,z=I.getAttributes(),J=O.defaultAttributeValues;for(let tt in z){let X=z[tt];if(X.location>=0){let et=_[tt];if(et===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){let lt=et.normalized,Pt=et.itemSize,kt=t.get(et);if(kt===void 0)continue;let oe=kt.buffer,ae=kt.type,Kt=kt.bytesPerElement,Y=ae===i.INT||ae===i.UNSIGNED_INT||et.gpuType===Qs;if(et.isInterleavedBufferAttribute){let W=et.data,dt=W.stride,Dt=et.offset;if(W.isInstancedInterleavedBuffer){for(let gt=0;gt<X.locationSize;gt++)d(X.location+gt,W.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let gt=0;gt<X.locationSize;gt++)y(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let gt=0;gt<X.locationSize;gt++)E(X.location+gt,Pt/X.locationSize,ae,lt,dt*Kt,(Dt+Pt/X.locationSize*gt)*Kt,Y)}else{if(et.isInstancedBufferAttribute){for(let W=0;W<X.locationSize;W++)d(X.location+W,et.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let W=0;W<X.locationSize;W++)y(X.location+W);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let W=0;W<X.locationSize;W++)E(X.location+W,Pt/X.locationSize,ae,lt,Pt*Kt,Pt/X.locationSize*W*Kt,Y)}}else if(J!==void 0){let lt=J[tt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(X.location,lt);break;case 3:i.vertexAttrib3fv(X.location,lt);break;case 4:i.vertexAttrib4fv(X.location,lt);break;default:i.vertexAttrib1fv(X.location,lt)}}}}T()}function C(){x();for(let S in n){let O=n[S];for(let I in O){let B=O[I];for(let _ in B)f(B[_].object),delete B[_];delete O[I]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;let O=n[S.id];for(let I in O){let B=O[I];for(let _ in B)f(B[_].object),delete B[_];delete O[I]}delete n[S.id]}function U(S){for(let O in n){let I=n[O];if(I[S.id]===void 0)continue;let B=I[S.id];for(let _ in B)f(B[_].object),delete B[_];delete I[S.id]}}function x(){P(),a=!0,r!==o&&(r=o,u(r.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:x,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:y,disableUnusedAttributes:T}}function z4(i,t,e){let n;function o(u){n=u}function r(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,l){l!==0&&(i.drawArraysInstanced(n,u,f,l),e.update(f,n,l))}function p(u,f,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,l);let h=0;for(let b=0;b<l;b++)h+=f[b];e.update(h,n,1)}function s(u,f,l,c){if(l===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let b=0;b<u.length;b++)a(u[b],f[b],c[b]);else{h.multiDrawArraysInstancedWEBGL(n,u,0,f,0,c,0,l);let b=0;for(let m=0;m<l;m++)b+=f[m]*c[m];e.update(b,n,1)}}this.setMode=o,this.render=r,this.renderInstances=a,this.renderMultiDraw=p,this.renderMultiDrawInstances=s}function j4(i,t,e,n){let o;function r(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(U){return!(U!==on&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(U){let x=U===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Un&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==An&&!x)}function s(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",f=s(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let l=e.logarithmicDepthBuffer===!0,c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=b>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,textureFormatReadable:a,textureTypeReadable:p,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:b,maxTextureSize:m,maxCubemapSize:y,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:g,vertexTextures:C,maxSamples:L}}function Y4(i){let t=this,e=null,n=0,o=!1,r=!1,a=new On,p=new Jt,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(l,c){let h=l.length!==0||c||n!==0||o;return o=c,n=l.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,c){e=f(l,c,0)},this.setState=function(l,c,h){let b=l.clippingPlanes,m=l.clipIntersection,y=l.clipShadows,d=i.get(l);if(!o||b===null||b.length===0||r&&!y)r?f(null):u();else{let T=r?0:n,E=T*4,g=d.clippingState||null;s.value=g,g=f(b,c,E,h);for(let C=0;C!==E;++C)g[C]=e[C];d.clippingState=g,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function u(){s.value!==e&&(s.value=e,s.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(l,c,h,b){let m=l!==null?l.length:0,y=null;if(m!==0){if(y=s.value,b!==!0||y===null){let d=h+m*4,T=c.matrixWorldInverse;p.getNormalMatrix(T),(y===null||y.length<d)&&(y=new Float32Array(d));for(let E=0,g=h;E!==m;++E,g+=4)a.copy(l[E]).applyMatrix4(T,p),a.normal.toArray(y,g),y[g+3]=a.constant}s.value=y,s.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,y}}function G4(i){let t=new WeakMap;function e(a,p){return p===Ns?a.mapping=wi:p===Xs&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){let p=a.mapping;if(p===Ns||p===Xs)if(t.has(a)){let s=t.get(a).texture;return e(s,a.mapping)}else{let s=a.image;if(s&&s.height>0){let u=new ss(s.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",o),e(u.texture,a.mapping)}else return null}}return a}function o(a){let p=a.target;p.removeEventListener("dispose",o);let s=t.get(p);s!==void 0&&(t.delete(p),s.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mr=4,_h=[.125,.215,.35,.446,.526,.582],vi=20,vl=new Uo,$h=new yt,Ml=null,Al=0,Il=0,_l=!1,Oi=(1+Math.sqrt(5))/2,vr=1/Oi,Hh=[new R(-Oi,vr,0),new R(Oi,vr,0),new R(-vr,0,Oi),new R(vr,0,Oi),new R(0,Oi,-vr),new R(0,Oi,vr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],W4=new R,vu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,o=100,r={}){let{size:a=256,position:p=W4}=r;Ml=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,o,s,p),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,Al,Il),this._renderer.xr.enabled=_l,t.scissorTest=!1,Ru(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:wn,format:on,colorSpace:Je,depthBuffer:!1},o=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K4(r)),this._blurMaterial=q4(r,t,e)}return o}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,vl)}_sceneToCubeUV(t,e,n,o,r){let s=new Me(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor($h),l.toneMapping=Co,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(o),l.clearDepth(),l.setRenderTarget(null));let m=new te({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),y=new Qt(new di,m),d=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,d=!0):(m.color.copy($h),d=!0);for(let E=0;E<6;E++){let g=E%3;g===0?(s.up.set(0,u[E],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+f[E],r.y,r.z)):g===1?(s.up.set(0,0,u[E]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+f[E],r.z)):(s.up.set(0,u[E],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+f[E]));let C=this._cubeSize;Ru(o,g*C,E>2?C:0,C,C),l.setRenderTarget(o),d&&l.render(y,s),l.render(t,s)}y.geometry.dispose(),y.material.dispose(),l.toneMapping=h,l.autoClear=c,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,o=t.mapping===wi||t.mapping===Li;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=o?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),p=r.uniforms;p.envMap.value=t;let s=this._cubeSize;Ru(e,0,0,3*s,2*s),n.setRenderTarget(e),n.render(a,vl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let o=this._lodPlanes.length;for(let r=1;r<o;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),p=Hh[(o-r-1)%Hh.length];this._blur(t,r-1,r,a,p)}e.autoClear=n}_blur(t,e,n,o,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,o,"latitudinal",r),this._halfBlur(a,t,n,n,o,"longitudinal",r)}_halfBlur(t,e,n,o,r,a,p){let s=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,l=new Qt(this._lodPlanes[o],u),c=u.uniforms,h=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*vi-1),m=r/b,y=isFinite(r)?1+Math.floor(f*m):vi;y>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vi}`);let d=[],T=0;for(let U=0;U<vi;++U){let x=U/m,P=Math.exp(-x*x/2);d.push(P),U===0?T+=P:U<y&&(T+=2*P)}for(let U=0;U<d.length;U++)d[U]=d[U]/T;c.envMap.value=t.texture,c.samples.value=y,c.weights.value=d,c.latitudinal.value=a==="latitudinal",p&&(c.poleAxis.value=p);let{_lodMax:E}=this;c.dTheta.value=b,c.mipInt.value=E-n;let g=this._sizeLods[o],C=3*g*(o>E-Mr?o-E+Mr:0),L=4*(this._cubeSize-g);Ru(e,C,L,3*g,2*g),s.setRenderTarget(e),s.render(l,vl)}};function K4(i){let t=[],e=[],n=[],o=i,r=i-Mr+1+_h.length;for(let a=0;a<r;a++){let p=Math.pow(2,o);e.push(p);let s=1/p;a>i-Mr?s=_h[a-i+Mr-1]:a===0&&(s=0),n.push(s);let u=1/(p-2),f=-u,l=1+u,c=[f,f,l,f,l,l,f,f,l,l,f,l],h=6,b=6,m=3,y=2,d=1,T=new Float32Array(m*b*h),E=new Float32Array(y*b*h),g=new Float32Array(d*b*h);for(let L=0;L<h;L++){let U=L%3*2/3-1,x=L>2?0:-1,P=[U,x,0,U+2/3,x,0,U+2/3,x+1,0,U,x,0,U+2/3,x+1,0,U,x+1,0];T.set(P,m*b*L),E.set(c,y*b*L);let S=[L,L,L,L,L,L];g.set(S,d*b*L)}let C=new be;C.setAttribute("position",new we(T,m)),C.setAttribute("uv",new we(E,y)),C.setAttribute("faceIndex",new we(g,d)),t.push(C),o>Mr&&o--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ru(i,t,e,n,o){i.viewport.set(t,e,n,o),i.scissor.set(t,e,n,o)}function q4(i,t,e){let n=new Float32Array(vi),o=new R(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:_e,depthTest:!1,depthWrite:!1})}function Bh(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:_e,depthTest:!1,depthWrite:!1})}function Fh(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_e,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function t5(i){let t=new WeakMap,e=null;function n(p){if(p&&p.isTexture){let s=p.mapping,u=s===Ns||s===Xs,f=s===wi||s===Li;if(u||f){let l=t.get(p),c=l!==void 0?l.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==c)return e===null&&(e=new vu(i)),l=u?e.fromEquirectangular(p,l):e.fromCubemap(p,l),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),l.texture;if(l!==void 0)return l.texture;{let h=p.image;return u&&h&&h.height>0||f&&h&&o(h)?(e===null&&(e=new vu(i)),l=u?e.fromEquirectangular(p):e.fromCubemap(p),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),p.addEventListener("dispose",r),l.texture):null}}}return p}function o(p){let s=0,u=6;for(let f=0;f<u;f++)p[f]!==void 0&&s++;return s===u}function r(p){let s=p.target;s.removeEventListener("dispose",r);let u=t.get(s);u!==void 0&&(t.delete(s),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function e5(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return t[n]=o,o}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let o=e(n);return o===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function n5(i,t,e,n){let o={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&t.remove(c.index);for(let b in c.attributes)t.remove(c.attributes[b]);c.removeEventListener("dispose",a),delete o[c.id];let h=r.get(c);h&&(t.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function p(l,c){return o[c.id]===!0||(c.addEventListener("dispose",a),o[c.id]=!0,e.memory.geometries++),c}function s(l){let c=l.attributes;for(let h in c)t.update(c[h],i.ARRAY_BUFFER)}function u(l){let c=[],h=l.index,b=l.attributes.position,m=0;if(h!==null){let T=h.array;m=h.version;for(let E=0,g=T.length;E<g;E+=3){let C=T[E+0],L=T[E+1],U=T[E+2];c.push(C,L,L,U,U,C)}}else if(b!==void 0){let T=b.array;m=b.version;for(let E=0,g=T.length/3-1;E<g;E+=3){let C=E+0,L=E+1,U=E+2;c.push(C,L,L,U,U,C)}}else return;let y=new(Ll(c)?la:fa)(c,1);y.version=m;let d=r.get(l);d&&t.remove(d),r.set(l,y)}function f(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&u(l)}else u(l);return r.get(l)}return{get:p,update:s,getWireframeAttribute:f}}function o5(i,t,e){let n;function o(c){n=c}let r,a;function p(c){r=c.type,a=c.bytesPerElement}function s(c,h){i.drawElements(n,h,r,c*a),e.update(h,n,1)}function u(c,h,b){b!==0&&(i.drawElementsInstanced(n,h,r,c*a,b),e.update(h,n,b))}function f(c,h,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,c,0,b);let y=0;for(let d=0;d<b;d++)y+=h[d];e.update(y,n,1)}function l(c,h,b,m){if(b===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let d=0;d<c.length;d++)u(c[d]/a,h[d],m[d]);else{y.multiDrawElementsInstancedWEBGL(n,h,0,r,c,0,m,0,b);let d=0;for(let T=0;T<b;T++)d+=h[T]*m[T];e.update(d,n,1)}}this.setMode=o,this.setIndex=p,this.render=s,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=l}function i5(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,p){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=p*(r/3);break;case i.LINES:e.lines+=p*(r/2);break;case i.LINE_STRIP:e.lines+=p*(r-1);break;case i.LINE_LOOP:e.lines+=p*r;break;case i.POINTS:e.points+=p*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:n}}function r5(i,t,e){let n=new WeakMap,o=new ne;function r(a,p,s){let u=a.morphTargetInfluences,f=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,l=f!==void 0?f.length:0,c=n.get(p);if(c===void 0||c.count!==l){let P=function(){U.dispose(),n.delete(p),p.removeEventListener("dispose",P)};c!==void 0&&c.texture.dispose();let h=p.morphAttributes.position!==void 0,b=p.morphAttributes.normal!==void 0,m=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],d=p.morphAttributes.normal||[],T=p.morphAttributes.color||[],E=0;h===!0&&(E=1),b===!0&&(E=2),m===!0&&(E=3);let g=p.attributes.position.count*E,C=1;g>t.maxTextureSize&&(C=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let L=new Float32Array(g*C*4*l),U=new ua(L,g,C,l);U.type=An,U.needsUpdate=!0;let x=E*4;for(let S=0;S<l;S++){let O=y[S],I=d[S],B=T[S],_=g*C*4*S;for(let z=0;z<O.count;z++){let J=z*x;h===!0&&(o.fromBufferAttribute(O,z),L[_+J+0]=o.x,L[_+J+1]=o.y,L[_+J+2]=o.z,L[_+J+3]=0),b===!0&&(o.fromBufferAttribute(I,z),L[_+J+4]=o.x,L[_+J+5]=o.y,L[_+J+6]=o.z,L[_+J+7]=0),m===!0&&(o.fromBufferAttribute(B,z),L[_+J+8]=o.x,L[_+J+9]=o.y,L[_+J+10]=o.z,L[_+J+11]=B.itemSize===4?o.w:1)}}c={count:l,texture:U,size:new ot(g,C)},n.set(p,c),p.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let m=0;m<u.length;m++)h+=u[m];let b=p.morphTargetsRelative?1:1-h;s.getUniforms().setValue(i,"morphTargetBaseInfluence",b),s.getUniforms().setValue(i,"morphTargetInfluences",u)}s.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),s.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function a5(i,t,e,n){let o=new WeakMap;function r(s){let u=n.render.frame,f=s.geometry,l=t.get(s,f);if(o.get(l)!==u&&(t.update(l),o.set(l,u)),s.isInstancedMesh&&(s.hasEventListener("dispose",p)===!1&&s.addEventListener("dispose",p),o.get(s)!==u&&(e.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&e.update(s.instanceColor,i.ARRAY_BUFFER),o.set(s,u))),s.isSkinnedMesh){let c=s.skeleton;o.get(c)!==u&&(c.update(),o.set(c,u))}return l}function a(){o=new WeakMap}function p(s){let u=s.target;u.removeEventListener("dispose",p),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}var u1=new He,Nh=new yi(1,1),f1=new ua,l1=new as,c1=new ha,Xh=[],Jh=[],Qh=new Float32Array(16),Zh=new Float32Array(9),zh=new Float32Array(4);function Ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let o=t*e,r=Xh[o];if(r===void 0&&(r=new Float32Array(o),Xh[o]=r),t!==0){n.toArray(r,0);for(let a=1,p=0;a!==t;++a)p+=e,i[a].toArray(r,p)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Au(i,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function p5(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function u5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function f5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function l5(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),Be(e,n)}}function c5(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),Be(e,n)}}function h5(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Qh.set(n),i.uniformMatrix4fv(this.addr,!1,Qh),Be(e,n)}}function d5(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function b5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function y5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function m5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function g5(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function T5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function E5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function V5(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function S5(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let r;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=Pl,r=Nh):r=u1,e.setTexture2D(t||r,o)}function P5(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture3D(t||l1,o)}function U5(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTextureCube(t||c1,o)}function w5(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture2DArray(t||f1,o)}function L5(i){switch(i){case 5126:return p5;case 35664:return s5;case 35665:return u5;case 35666:return f5;case 35674:return l5;case 35675:return c5;case 35676:return h5;case 5124:case 35670:return d5;case 35667:case 35671:return b5;case 35668:case 35672:return y5;case 35669:case 35673:return m5;case 5125:return g5;case 36294:return T5;case 36295:return E5;case 36296:return V5;case 35678:case 36198:case 36298:case 36306:case 35682:return S5;case 35679:case 36299:case 36307:return P5;case 35680:case 36300:case 36308:case 36293:return U5;case 36289:case 36303:case 36311:case 36292:return w5}}function C5(i,t){i.uniform1fv(this.addr,t)}function x5(i,t){let e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function D5(i,t){let e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function R5(i,t){let e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function O5(i,t){let e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v5(i,t){let e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function M5(i,t){let e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A5(i,t){i.uniform1iv(this.addr,t)}function I5(i,t){i.uniform2iv(this.addr,t)}function _5(i,t){i.uniform3iv(this.addr,t)}function $5(i,t){i.uniform4iv(this.addr,t)}function H5(i,t){i.uniform1uiv(this.addr,t)}function k5(i,t){i.uniform2uiv(this.addr,t)}function B5(i,t){i.uniform3uiv(this.addr,t)}function F5(i,t){i.uniform4uiv(this.addr,t)}function N5(i,t,e){let n=this.cache,o=t.length,r=Au(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTexture2D(t[a]||u1,r[a])}function X5(i,t,e){let n=this.cache,o=t.length,r=Au(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTexture3D(t[a]||l1,r[a])}function J5(i,t,e){let n=this.cache,o=t.length,r=Au(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTextureCube(t[a]||c1,r[a])}function Q5(i,t,e){let n=this.cache,o=t.length,r=Au(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTexture2DArray(t[a]||f1,r[a])}function Z5(i){switch(i){case 5126:return C5;case 35664:return x5;case 35665:return D5;case 35666:return R5;case 35674:return O5;case 35675:return v5;case 35676:return M5;case 5124:case 35670:return A5;case 35667:case 35671:return I5;case 35668:case 35672:return _5;case 35669:case 35673:return $5;case 5125:return H5;case 36294:return k5;case 36295:return B5;case 36296:return F5;case 35678:case 36198:case 36298:case 36306:case 35682:return N5;case 35679:case 36299:case 36307:return X5;case 35680:case 36300:case 36308:case 36293:return J5;case 36289:case 36303:case 36311:case 36292:return Q5}}var Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L5(e.type)}},kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z5(e.type)}},Bl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let o=this.seq;for(let r=0,a=o.length;r!==a;++r){let p=o[r];p.setValue(t,e[p.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function jh(i,t){i.seq.push(t),i.map[t.id]=t}function z5(i,t,e){let n=i.name,o=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,p=r[1],s=r[2]==="]",u=r[3];if(s&&(p=p|0),u===void 0||u==="["&&a+2===o){jh(e,u===void 0?new Hl(p,i,t):new kl(p,i,t));break}else{let l=e.map[p];l===void 0&&(l=new Bl(p),jh(e,l)),e=l}}}var Ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let r=t.getActiveUniform(e,o),a=t.getUniformLocation(e,r.name);z5(r,a,this)}}setValue(t,e,n,o){let r=this.map[e];r!==void 0&&r.setValue(t,n,o)}setOptional(t,e,n){let o=e[n];o!==void 0&&this.setValue(t,n,o)}static upload(t,e,n,o){for(let r=0,a=e.length;r!==a;++r){let p=e[r],s=n[p.id];s.needsUpdate!==!1&&p.setValue(t,s.value,o)}}static seqWithValue(t,e){let n=[];for(let o=0,r=t.length;o!==r;++o){let a=t[o];a.id in e&&n.push(a)}return n}};function Yh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var j5=37297,Y5=0;function G5(i,t){let e=i.split(`
`),n=[],o=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=o;a<r;a++){let p=a+1;n.push(`${p===t?">":" "} ${p}: ${e[a]}`)}return n.join(`
`)}var Gh=new Jt;function W5(i){jt._getMatrix(Gh,jt.workingColorSpace,i);let t=`mat3( ${Gh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case pa:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let p=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+G5(i.getShaderSource(t),p)}else return r}function K5(i,t){let e=W5(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q5(i,t){let e;switch(t){case _s:e="Linear";break;case $s:e="Reinhard";break;case Hs:e="Cineon";break;case ks:e="ACESFilmic";break;case Fs:e="AgX";break;case xr:e="Neutral";break;case Bs:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ou=new R;function tg(){jt.getLuminanceCoefficients(Ou);let i=Ou.x.toFixed(4),t=Ou.y.toFixed(4),e=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function ng(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){let r=i.getActiveAttrib(t,o),a=r.name,p=1;r.type===i.FLOAT_MAT2&&(p=2),r.type===i.FLOAT_MAT3&&(p=3),r.type===i.FLOAT_MAT4&&(p=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:p}}return e}function Wa(i){return i!==""}function Kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(ig,ag)}var rg=new Map;function ag(i,t){let e=Zt[t];if(e===void 0){let n=rg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}var pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t1(i){return i.replace(pg,sg)}function sg(i,t,e,n){let o="";for(let r=parseInt(t);r<parseInt(e);r++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function e1(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Na?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===G0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ao&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Li:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Li&&(t="ENVMAP_MODE_REFRACTION"),t}function cg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function hg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let o=i.getContext(),r=e.defines,a=e.vertexShader,p=e.fragmentShader,s=ug(e),u=fg(e),f=lg(e),l=cg(e),c=hg(e),h=eg(e),b=ng(r),m=o.createProgram(),y,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Wa).join(`
`),y.length>0&&(y+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Wa).join(`
`),d.length>0&&(d+=`
`)):(y=[e1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),d=[e1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+l:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Co?"#define TONE_MAPPING":"",e.toneMapping!==Co?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Co?q5("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,K5("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Fl(a),a=Kh(a,e),a=qh(a,e),p=Fl(p),p=Kh(p,e),p=qh(p,e),a=t1(a),p=t1(p),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,d=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=T+y+a,g=T+d+p,C=Yh(o,o.VERTEX_SHADER,E),L=Yh(o,o.FRAGMENT_SHADER,g);o.attachShader(m,C),o.attachShader(m,L),e.index0AttributeName!==void 0?o.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m);function U(O){if(i.debug.checkShaderErrors){let I=o.getProgramInfoLog(m)||"",B=o.getShaderInfoLog(C)||"",_=o.getShaderInfoLog(L)||"",z=I.trim(),J=B.trim(),tt=_.trim(),X=!0,et=!0;if(o.getProgramParameter(m,o.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,m,C,L);else{let lt=Wh(o,C,"vertex"),Pt=Wh(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+z+`
`+lt+`
`+Pt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(J===""||tt==="")&&(et=!1);et&&(O.diagnostics={runnable:X,programLog:z,vertexShader:{log:J,prefix:y},fragmentShader:{log:tt,prefix:d}})}o.deleteShader(C),o.deleteShader(L),x=new Ar(o,m),P=og(o,m)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(m,j5)),S},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y5++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=L,this}var bg=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,o=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xl(t),e.set(t,n)),n}},Xl=class{constructor(t){this.id=bg++,this.code=t,this.usedTimes=0}};function yg(i,t,e,n,o,r,a){let p=new dr,s=new Nl,u=new Set,f=[],l=o.logarithmicDepthBuffer,c=o.vertexTextures,h=o.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(P){return u.add(P),P===0?"uv":`uv${P}`}function y(P,S,O,I,B){let _=I.fog,z=B.geometry,J=P.isMeshStandardMaterial?I.environment:null,tt=(P.isMeshStandardMaterial?e:t).get(P.envMap||J),X=tt&&tt.mapping===Qa?tt.image.height:null,et=b[P.type];P.precision!==null&&(h=o.getMaxPrecision(P.precision),h!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",h,"instead."));let lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=lt!==void 0?lt.length:0,kt=0;z.morphAttributes.position!==void 0&&(kt=1),z.morphAttributes.normal!==void 0&&(kt=2),z.morphAttributes.color!==void 0&&(kt=3);let oe,ae,Kt,Y;if(et){let re=po[et];oe=re.vertexShader,ae=re.fragmentShader}else oe=P.vertexShader,ae=P.fragmentShader,s.update(P),Kt=s.getVertexShaderID(P),Y=s.getFragmentShaderID(P);let W=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,gt=B.isBatchedMesh===!0,Yt=!!P.map,Oe=!!P.matcap,v=!!tt,ue=!!P.aoMap,Ht=!!P.lightMap,vt=!!P.bumpMap,Et=!!P.normalMap,fe=!!P.displacementMap,Vt=!!P.emissiveMap,Ft=!!P.metalnessMap,Ce=!!P.roughnessMap,me=P.anisotropy>0,D=P.clearcoat>0,V=P.dispersion>0,k=P.iridescence>0,j=P.sheen>0,K=P.transmission>0,Q=me&&!!P.anisotropyMap,Ut=D&&!!P.clearcoatMap,pt=D&&!!P.clearcoatNormalMap,Tt=D&&!!P.clearcoatRoughnessMap,Ct=k&&!!P.iridescenceMap,rt=k&&!!P.iridescenceThicknessMap,ct=j&&!!P.sheenColorMap,At=j&&!!P.sheenRoughnessMap,xt=!!P.specularMap,ut=!!P.specularColorMap,_t=!!P.specularIntensityMap,A=K&&!!P.transmissionMap,nt=K&&!!P.thicknessMap,st=!!P.gradientMap,St=!!P.alphaMap,it=P.alphaTest>0,G=!!P.alphaHash,Lt=!!P.extensions,Nt=Co;P.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let ye={shaderID:et,shaderType:P.type,shaderName:P.name,vertexShader:oe,fragmentShader:ae,defines:P.defines,customVertexShaderID:Kt,customFragmentShaderID:Y,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:h,batching:gt,batchingColor:gt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Je,alphaToCoverage:!!P.alphaToCoverage,map:Yt,matcap:Oe,envMap:v,envMapMode:v&&tt.mapping,envMapCubeUVHeight:X,aoMap:ue,lightMap:Ht,bumpMap:vt,normalMap:Et,displacementMap:c&&fe,emissiveMap:Vt,normalMapObjectSpace:Et&&P.normalMapType===Th,normalMapTangentSpace:Et&&P.normalMapType===xu,metalnessMap:Ft,roughnessMap:Ce,anisotropy:me,anisotropyMap:Q,clearcoat:D,clearcoatMap:Ut,clearcoatNormalMap:pt,clearcoatRoughnessMap:Tt,dispersion:V,iridescence:k,iridescenceMap:Ct,iridescenceThicknessMap:rt,sheen:j,sheenColorMap:ct,sheenRoughnessMap:At,specularMap:xt,specularColorMap:ut,specularIntensityMap:_t,transmission:K,transmissionMap:A,thicknessMap:nt,gradientMap:st,opaque:P.transparent===!1&&P.blending===ui&&P.alphaToCoverage===!1,alphaMap:St,alphaTest:it,alphaHash:G,combine:P.combine,mapUv:Yt&&m(P.map.channel),aoMapUv:ue&&m(P.aoMap.channel),lightMapUv:Ht&&m(P.lightMap.channel),bumpMapUv:vt&&m(P.bumpMap.channel),normalMapUv:Et&&m(P.normalMap.channel),displacementMapUv:fe&&m(P.displacementMap.channel),emissiveMapUv:Vt&&m(P.emissiveMap.channel),metalnessMapUv:Ft&&m(P.metalnessMap.channel),roughnessMapUv:Ce&&m(P.roughnessMap.channel),anisotropyMapUv:Q&&m(P.anisotropyMap.channel),clearcoatMapUv:Ut&&m(P.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&m(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(P.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&m(P.sheenColorMap.channel),sheenRoughnessMapUv:At&&m(P.sheenRoughnessMap.channel),specularMapUv:xt&&m(P.specularMap.channel),specularColorMapUv:ut&&m(P.specularColorMap.channel),specularIntensityMapUv:_t&&m(P.specularIntensityMap.channel),transmissionMapUv:A&&m(P.transmissionMap.channel),thicknessMapUv:nt&&m(P.thicknessMap.channel),alphaMapUv:St&&m(P.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Et||me),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Yt||St),fog:!!_,useFog:P.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:dt,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Yt&&P.map.isVideoTexture===!0&&jt.getTransfer(P.map.colorSpace)===ie,decodeVideoTextureEmissive:Vt&&P.emissiveMap.isVideoTexture===!0&&jt.getTransfer(P.emissiveMap.colorSpace)===ie,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===hn,flipSided:P.side===nn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Lt&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&P.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ye.vertexUv1s=u.has(1),ye.vertexUv2s=u.has(2),ye.vertexUv3s=u.has(3),u.clear(),ye}function d(P){let S=[];if(P.shaderID?S.push(P.shaderID):(S.push(P.customVertexShaderID),S.push(P.customFragmentShaderID)),P.defines!==void 0)for(let O in P.defines)S.push(O),S.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(T(S,P),E(S,P),S.push(i.outputColorSpace)),S.push(P.customProgramCacheKey),S.join()}function T(P,S){P.push(S.precision),P.push(S.outputColorSpace),P.push(S.envMapMode),P.push(S.envMapCubeUVHeight),P.push(S.mapUv),P.push(S.alphaMapUv),P.push(S.lightMapUv),P.push(S.aoMapUv),P.push(S.bumpMapUv),P.push(S.normalMapUv),P.push(S.displacementMapUv),P.push(S.emissiveMapUv),P.push(S.metalnessMapUv),P.push(S.roughnessMapUv),P.push(S.anisotropyMapUv),P.push(S.clearcoatMapUv),P.push(S.clearcoatNormalMapUv),P.push(S.clearcoatRoughnessMapUv),P.push(S.iridescenceMapUv),P.push(S.iridescenceThicknessMapUv),P.push(S.sheenColorMapUv),P.push(S.sheenRoughnessMapUv),P.push(S.specularMapUv),P.push(S.specularColorMapUv),P.push(S.specularIntensityMapUv),P.push(S.transmissionMapUv),P.push(S.thicknessMapUv),P.push(S.combine),P.push(S.fogExp2),P.push(S.sizeAttenuation),P.push(S.morphTargetsCount),P.push(S.morphAttributeCount),P.push(S.numDirLights),P.push(S.numPointLights),P.push(S.numSpotLights),P.push(S.numSpotLightMaps),P.push(S.numHemiLights),P.push(S.numRectAreaLights),P.push(S.numDirLightShadows),P.push(S.numPointLightShadows),P.push(S.numSpotLightShadows),P.push(S.numSpotLightShadowsWithMaps),P.push(S.numLightProbes),P.push(S.shadowMapType),P.push(S.toneMapping),P.push(S.numClippingPlanes),P.push(S.numClipIntersection),P.push(S.depthPacking)}function E(P,S){p.disableAll(),S.supportsVertexTextures&&p.enable(0),S.instancing&&p.enable(1),S.instancingColor&&p.enable(2),S.instancingMorph&&p.enable(3),S.matcap&&p.enable(4),S.envMap&&p.enable(5),S.normalMapObjectSpace&&p.enable(6),S.normalMapTangentSpace&&p.enable(7),S.clearcoat&&p.enable(8),S.iridescence&&p.enable(9),S.alphaTest&&p.enable(10),S.vertexColors&&p.enable(11),S.vertexAlphas&&p.enable(12),S.vertexUv1s&&p.enable(13),S.vertexUv2s&&p.enable(14),S.vertexUv3s&&p.enable(15),S.vertexTangents&&p.enable(16),S.anisotropy&&p.enable(17),S.alphaHash&&p.enable(18),S.batching&&p.enable(19),S.dispersion&&p.enable(20),S.batchingColor&&p.enable(21),S.gradientMap&&p.enable(22),P.push(p.mask),p.disableAll(),S.fog&&p.enable(0),S.useFog&&p.enable(1),S.flatShading&&p.enable(2),S.logarithmicDepthBuffer&&p.enable(3),S.reversedDepthBuffer&&p.enable(4),S.skinning&&p.enable(5),S.morphTargets&&p.enable(6),S.morphNormals&&p.enable(7),S.morphColors&&p.enable(8),S.premultipliedAlpha&&p.enable(9),S.shadowMapEnabled&&p.enable(10),S.doubleSided&&p.enable(11),S.flipSided&&p.enable(12),S.useDepthPacking&&p.enable(13),S.dithering&&p.enable(14),S.transmission&&p.enable(15),S.sheen&&p.enable(16),S.opaque&&p.enable(17),S.pointsUvs&&p.enable(18),S.decodeVideoTexture&&p.enable(19),S.decodeVideoTextureEmissive&&p.enable(20),S.alphaToCoverage&&p.enable(21),P.push(p.mask)}function g(P){let S=b[P.type],O;if(S){let I=po[S];O=In.clone(I.uniforms)}else O=P.uniforms;return O}function C(P,S){let O;for(let I=0,B=f.length;I<B;I++){let _=f[I];if(_.cacheKey===S){O=_,++O.usedTimes;break}}return O===void 0&&(O=new dg(i,S,P,r),f.push(O)),O}function L(P){if(--P.usedTimes===0){let S=f.indexOf(P);f[S]=f[f.length-1],f.pop(),P.destroy()}}function U(P){s.remove(P)}function x(){s.dispose()}return{getParameters:y,getProgramCacheKey:d,getUniforms:g,acquireProgram:C,releaseProgram:L,releaseShaderCache:U,programs:f,dispose:x}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let p=i.get(a);return p===void 0&&(p={},i.set(a,p)),p}function n(a){i.delete(a)}function o(a,p,s){i.get(a)[p]=s}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:o,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function n1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function o1(){let i=[],t=0,e=[],n=[],o=[];function r(){t=0,e.length=0,n.length=0,o.length=0}function a(l,c,h,b,m,y){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:c,material:h,groupOrder:b,renderOrder:l.renderOrder,z:m,group:y},i[t]=d):(d.id=l.id,d.object=l,d.geometry=c,d.material=h,d.groupOrder=b,d.renderOrder=l.renderOrder,d.z=m,d.group=y),t++,d}function p(l,c,h,b,m,y){let d=a(l,c,h,b,m,y);h.transmission>0?n.push(d):h.transparent===!0?o.push(d):e.push(d)}function s(l,c,h,b,m,y){let d=a(l,c,h,b,m,y);h.transmission>0?n.unshift(d):h.transparent===!0?o.unshift(d):e.unshift(d)}function u(l,c){e.length>1&&e.sort(l||gg),n.length>1&&n.sort(c||n1),o.length>1&&o.sort(c||n1)}function f(){for(let l=t,c=i.length;l<c;l++){let h=i[l];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:o,init:r,push:p,unshift:s,finish:f,sort:u}}function Tg(){let i=new WeakMap;function t(n,o){let r=i.get(n),a;return r===void 0?(a=new o1,i.set(n,[a])):o>=r.length?(a=new o1,r.push(a)):a=r[o],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new yt};break;case"SpotLight":e={position:new R,direction:new R,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sg=0;function Pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ug(i){let t=new Eg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new R);let o=new R,r=new Ot,a=new Ot;function p(u){let f=0,l=0,c=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let h=0,b=0,m=0,y=0,d=0,T=0,E=0,g=0,C=0,L=0,U=0;u.sort(Pg);for(let P=0,S=u.length;P<S;P++){let O=u[P],I=O.color,B=O.intensity,_=O.distance,z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=I.r*B,l+=I.g*B,c+=I.b*B;else if(O.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(O.sh.coefficients[J],B);U++}else if(O.isDirectionalLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let tt=O.shadow,X=e.get(O);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[h]=X,n.directionalShadowMap[h]=z,n.directionalShadowMatrix[h]=O.shadow.matrix,T++}n.directional[h]=J,h++}else if(O.isSpotLight){let J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(I).multiplyScalar(B),J.distance=_,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,n.spot[m]=J;let tt=O.shadow;if(O.map&&(n.spotLightMap[C]=O.map,C++,tt.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[m]=tt.matrix,O.castShadow){let X=e.get(O);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[m]=X,n.spotShadowMap[m]=z,g++}m++}else if(O.isRectAreaLight){let J=t.get(O);J.color.copy(I).multiplyScalar(B),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),n.rectArea[y]=J,y++}else if(O.isPointLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){let tt=O.shadow,X=e.get(O);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[b]=X,n.pointShadowMap[b]=z,n.pointShadowMatrix[b]=O.shadow.matrix,E++}n.point[b]=J,b++}else if(O.isHemisphereLight){let J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(B),J.groundColor.copy(O.groundColor).multiplyScalar(B),n.hemi[d]=J,d++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=l,n.ambient[2]=c;let x=n.hash;(x.directionalLength!==h||x.pointLength!==b||x.spotLength!==m||x.rectAreaLength!==y||x.hemiLength!==d||x.numDirectionalShadows!==T||x.numPointShadows!==E||x.numSpotShadows!==g||x.numSpotMaps!==C||x.numLightProbes!==U)&&(n.directional.length=h,n.spot.length=m,n.rectArea.length=y,n.point.length=b,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=g+C-L,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=U,x.directionalLength=h,x.pointLength=b,x.spotLength=m,x.rectAreaLength=y,x.hemiLength=d,x.numDirectionalShadows=T,x.numPointShadows=E,x.numSpotShadows=g,x.numSpotMaps=C,x.numLightProbes=U,n.version=Sg++)}function s(u,f){let l=0,c=0,h=0,b=0,m=0,y=f.matrixWorldInverse;for(let d=0,T=u.length;d<T;d++){let E=u[d];if(E.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(y),l++}else if(E.isSpotLight){let g=n.spot[h];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(y),g.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(y),h++}else if(E.isRectAreaLight){let g=n.rectArea[b];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(y),a.identity(),r.copy(E.matrixWorld),r.premultiply(y),a.extractRotation(r),g.halfWidth.set(E.width*.5,0,0),g.halfHeight.set(0,E.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),b++}else if(E.isPointLight){let g=n.point[c];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(y),c++}else if(E.isHemisphereLight){let g=n.hemi[m];g.direction.setFromMatrixPosition(E.matrixWorld),g.direction.transformDirection(y),m++}}}return{setup:p,setupView:s,state:n}}function i1(i){let t=new Ug(i),e=[],n=[];function o(f){u.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function p(){t.setup(e)}function s(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:p,setupLightsView:s,pushLight:r,pushShadow:a}}function wg(i){let t=new WeakMap;function e(o,r=0){let a=t.get(o),p;return a===void 0?(p=new i1(i),t.set(o,[p])):r>=a.length?(p=new i1(i),a.push(p)):p=a[r],p}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`;function xg(i,t,e){let n=new Tr,o=new ot,r=new ot,a=new ne,p=new gs({depthPacking:gh}),s=new Ts,u={},f=e.maxTextureSize,l={[Zn]:nn,[nn]:Zn,[hn]:hn},c=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Lg,fragmentShader:Cg}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let b=new be;b.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Qt(b,c),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let d=this.type;this.render=function(L,U,x){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;let P=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),I=i.state;I.setBlending(_e),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=d!==ao&&this.type===ao,_=d===ao&&this.type!==ao;for(let z=0,J=L.length;z<J;z++){let tt=L[z],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);let et=X.getFrameExtents();if(o.multiply(et),r.copy(X.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/et.x),o.x=r.x*et.x,X.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/et.y),o.y=r.y*et.y,X.mapSize.y=r.y)),X.map===null||B===!0||_===!0){let Pt=this.type!==ao?{minFilter:Ie,magFilter:Ie}:{};X.map!==null&&X.map.dispose(),X.map=new Qe(o.x,o.y,Pt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let lt=X.getViewportCount();for(let Pt=0;Pt<lt;Pt++){let kt=X.getViewport(Pt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),I.viewport(a),X.updateMatrices(tt,Pt),n=X.getFrustum(),g(U,x,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===ao&&T(X,x),X.needsUpdate=!1}d=this.type,y.needsUpdate=!1,i.setRenderTarget(P,S,O)};function T(L,U){let x=t.update(m);c.defines.VSM_SAMPLES!==L.blurSamples&&(c.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qe(o.x,o.y)),c.uniforms.shadow_pass.value=L.map.texture,c.uniforms.resolution.value=L.mapSize,c.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(U,null,x,c,m,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(U,null,x,h,m,null)}function E(L,U,x,P){let S=null,O=x.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)S=O;else if(S=x.isPointLight===!0?s:p,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let I=S.uuid,B=U.uuid,_=u[I];_===void 0&&(_={},u[I]=_);let z=_[B];z===void 0&&(z=S.clone(),_[B]=z,U.addEventListener("dispose",C)),S=z}if(S.visible=U.visible,S.wireframe=U.wireframe,P===ao?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:l[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,x.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=x}return S}function g(L,U,x,P,S){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===ao)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,L.matrixWorld);let B=t.update(L),_=L.material;if(Array.isArray(_)){let z=B.groups;for(let J=0,tt=z.length;J<tt;J++){let X=z[J],et=_[X.materialIndex];if(et&&et.visible){let lt=E(L,et,P,S);L.onBeforeShadow(i,L,U,x,B,lt,X),i.renderBufferDirect(x,null,B,lt,L,X),L.onAfterShadow(i,L,U,x,B,lt,X)}}}else if(_.visible){let z=E(L,_,P,S);L.onBeforeShadow(i,L,U,x,B,z,null),i.renderBufferDirect(x,null,B,z,L,null),L.onAfterShadow(i,L,U,x,B,z,null)}}let I=L.children;for(let B=0,_=I.length;B<_;B++)g(I[B],U,x,P,S)}function C(L){L.target.removeEventListener("dispose",C);for(let x in u){let P=u[x],S=L.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}var Dg={[Ds]:Rs,[Os]:As,[vs]:Is,[fi]:Ms,[Rs]:Ds,[As]:Os,[Is]:vs,[Ms]:fi};function Rg(i,t){function e(){let A=!1,nt=new ne,st=null,St=new ne(0,0,0,0);return{setMask:function(it){st!==it&&!A&&(i.colorMask(it,it,it,it),st=it)},setLocked:function(it){A=it},setClear:function(it,G,Lt,Nt,ye){ye===!0&&(it*=Nt,G*=Nt,Lt*=Nt),nt.set(it,G,Lt,Nt),St.equals(nt)===!1&&(i.clearColor(it,G,Lt,Nt),St.copy(nt))},reset:function(){A=!1,st=null,St.set(-1,0,0,0)}}}function n(){let A=!1,nt=!1,st=null,St=null,it=null;return{setReversed:function(G){if(nt!==G){let Lt=t.get("EXT_clip_control");G?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),nt=G;let Nt=it;it=null,this.setClear(Nt)}},getReversed:function(){return nt},setTest:function(G){G?W(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(G){st!==G&&!A&&(i.depthMask(G),st=G)},setFunc:function(G){if(nt&&(G=Dg[G]),St!==G){switch(G){case Ds:i.depthFunc(i.NEVER);break;case Rs:i.depthFunc(i.ALWAYS);break;case Os:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case vs:i.depthFunc(i.EQUAL);break;case Ms:i.depthFunc(i.GEQUAL);break;case As:i.depthFunc(i.GREATER);break;case Is:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=G}},setLocked:function(G){A=G},setClear:function(G){it!==G&&(nt&&(G=1-G),i.clearDepth(G),it=G)},reset:function(){A=!1,st=null,St=null,it=null,nt=!1}}}function o(){let A=!1,nt=null,st=null,St=null,it=null,G=null,Lt=null,Nt=null,ye=null;return{setTest:function(re){A||(re?W(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(re){nt!==re&&!A&&(i.stencilMask(re),nt=re)},setFunc:function(re,lo,Yn){(st!==re||St!==lo||it!==Yn)&&(i.stencilFunc(re,lo,Yn),st=re,St=lo,it=Yn)},setOp:function(re,lo,Yn){(G!==re||Lt!==lo||Nt!==Yn)&&(i.stencilOp(re,lo,Yn),G=re,Lt=lo,Nt=Yn)},setLocked:function(re){A=re},setClear:function(re){ye!==re&&(i.clearStencil(re),ye=re)},reset:function(){A=!1,nt=null,st=null,St=null,it=null,G=null,Lt=null,Nt=null,ye=null}}}let r=new e,a=new n,p=new o,s=new WeakMap,u=new WeakMap,f={},l={},c=new WeakMap,h=[],b=null,m=!1,y=null,d=null,T=null,E=null,g=null,C=null,L=null,U=new yt(0,0,0),x=0,P=!1,S=null,O=null,I=null,B=null,_=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,tt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=tt>=2);let et=null,lt={},Pt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),oe=new ne().fromArray(Pt),ae=new ne().fromArray(kt);function Kt(A,nt,st,St){let it=new Uint8Array(4),G=i.createTexture();i.bindTexture(A,G),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<st;Lt++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(nt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return G}let Y={};Y[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),p.setClear(0),W(i.DEPTH_TEST),a.setFunc(fi),vt(!1),Et(fl),W(i.CULL_FACE),ue(_e);function W(A){f[A]!==!0&&(i.enable(A),f[A]=!0)}function dt(A){f[A]!==!1&&(i.disable(A),f[A]=!1)}function Dt(A,nt){return l[A]!==nt?(i.bindFramebuffer(A,nt),l[A]=nt,A===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=nt),A===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function gt(A,nt){let st=h,St=!1;if(A){st=c.get(nt),st===void 0&&(st=[],c.set(nt,st));let it=A.textures;if(st.length!==it.length||st[0]!==i.COLOR_ATTACHMENT0){for(let G=0,Lt=it.length;G<Lt;G++)st[G]=i.COLOR_ATTACHMENT0+G;st.length=it.length,St=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,St=!0);St&&i.drawBuffers(st)}function Yt(A){return b!==A?(i.useProgram(A),b=A,!0):!1}let Oe={[Vn]:i.FUNC_ADD,[W0]:i.FUNC_SUBTRACT,[K0]:i.FUNC_REVERSE_SUBTRACT};Oe[q0]=i.MIN,Oe[th]=i.MAX;let v={[Ui]:i.ZERO,[eh]:i.ONE,[nh]:i.SRC_COLOR,[es]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[Ja]:i.DST_COLOR,[Xa]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[ns]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[ih]:i.ONE_MINUS_DST_ALPHA,[ph]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(A,nt,st,St,it,G,Lt,Nt,ye,re){if(A===_e){m===!0&&(dt(i.BLEND),m=!1);return}if(m===!1&&(W(i.BLEND),m=!0),A!==xs){if(A!==y||re!==P){if((d!==Vn||g!==Vn)&&(i.blendEquation(i.FUNC_ADD),d=Vn,g=Vn),re)switch(A){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}T=null,E=null,C=null,L=null,U.set(0,0,0),x=0,y=A,P=re}return}it=it||nt,G=G||st,Lt=Lt||St,(nt!==d||it!==g)&&(i.blendEquationSeparate(Oe[nt],Oe[it]),d=nt,g=it),(st!==T||St!==E||G!==C||Lt!==L)&&(i.blendFuncSeparate(v[st],v[St],v[G],v[Lt]),T=st,E=St,C=G,L=Lt),(Nt.equals(U)===!1||ye!==x)&&(i.blendColor(Nt.r,Nt.g,Nt.b,ye),U.copy(Nt),x=ye),y=A,P=!1}function Ht(A,nt){A.side===hn?dt(i.CULL_FACE):W(i.CULL_FACE);let st=A.side===nn;nt&&(st=!st),vt(st),A.blending===ui&&A.transparent===!1?ue(_e):ue(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let St=A.stencilWrite;p.setTest(St),St&&(p.setMask(A.stencilWriteMask),p.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),p.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Vt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(A){S!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),S=A)}function Et(A){A!==j0?(W(i.CULL_FACE),A!==O&&(A===fl?i.cullFace(i.BACK):A===Y0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),O=A}function fe(A){A!==I&&(J&&i.lineWidth(A),I=A)}function Vt(A,nt,st){A?(W(i.POLYGON_OFFSET_FILL),(B!==nt||_!==st)&&(i.polygonOffset(nt,st),B=nt,_=st)):dt(i.POLYGON_OFFSET_FILL)}function Ft(A){A?W(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Ce(A){A===void 0&&(A=i.TEXTURE0+z-1),et!==A&&(i.activeTexture(A),et=A)}function me(A,nt,st){st===void 0&&(et===null?st=i.TEXTURE0+z-1:st=et);let St=lt[st];St===void 0&&(St={type:void 0,texture:void 0},lt[st]=St),(St.type!==A||St.texture!==nt)&&(et!==st&&(i.activeTexture(st),et=st),i.bindTexture(A,nt||Y[A]),St.type=A,St.texture=nt)}function D(){let A=lt[et];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function V(){try{i.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{i.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{i.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pt(){try{i.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Tt(){try{i.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ct(){try{i.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function rt(){try{i.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(A){oe.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),oe.copy(A))}function At(A){ae.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),ae.copy(A))}function xt(A,nt){let st=u.get(nt);st===void 0&&(st=new WeakMap,u.set(nt,st));let St=st.get(A);St===void 0&&(St=i.getUniformBlockIndex(nt,A.name),st.set(A,St))}function ut(A,nt){let St=u.get(nt).get(A);s.get(nt)!==St&&(i.uniformBlockBinding(nt,St,A.__bindingPointIndex),s.set(nt,St))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},et=null,lt={},l={},c=new WeakMap,h=[],b=null,m=!1,y=null,d=null,T=null,E=null,g=null,C=null,L=null,U=new yt(0,0,0),x=0,P=!1,S=null,O=null,I=null,B=null,_=null,oe.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),p.reset()}return{buffers:{color:r,depth:a,stencil:p},enable:W,disable:dt,bindFramebuffer:Dt,drawBuffers:gt,useProgram:Yt,setBlending:ue,setMaterial:Ht,setFlipSided:vt,setCullFace:Et,setLineWidth:fe,setPolygonOffset:Vt,setScissorTest:Ft,activeTexture:Ce,bindTexture:me,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:k,texImage2D:Ct,texImage3D:rt,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:pt,texStorage3D:Tt,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ut,scissor:ct,viewport:At,reset:_t}}function Og(i,t,e,n,o,r,a){let p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,f=new WeakMap,l,c=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,V){return h?new OffscreenCanvas(D,V):lr("canvas")}function m(D,V,k){let j=1,K=me(D);if((K.width>k||K.height>k)&&(j=k/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Q=Math.floor(j*K.width),Ut=Math.floor(j*K.height);l===void 0&&(l=b(Q,Ut));let pt=V?b(Q,Ut):l;return pt.width=Q,pt.height=Ut,pt.getContext("2d").drawImage(D,0,0,Q,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+Ut+")."),pt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function y(D){return D.generateMipmaps}function d(D){i.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,V,k,j,K=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=V;if(V===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),V===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),V===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),V===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),V===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),V===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),V===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),V===i.RGBA){let Ut=K?pa:jt.getTransfer(j);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Ut===ie?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(D,V){let k;return D?V===null||V===Fo||V===No?k=i.DEPTH24_STENCIL8:V===An?k=i.DEPTH32F_STENCIL8:V===Rr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):V===null||V===Fo||V===No?k=i.DEPTH_COMPONENT24:V===An?k=i.DEPTH_COMPONENT32F:V===Rr&&(k=i.DEPTH_COMPONENT16),k}function C(D,V){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ie&&D.minFilter!==Xe?Math.log2(Math.max(V.width,V.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?V.mipmaps.length:1}function L(D){let V=D.target;V.removeEventListener("dispose",L),x(V),V.isVideoTexture&&f.delete(V)}function U(D){let V=D.target;V.removeEventListener("dispose",U),S(V)}function x(D){let V=n.get(D);if(V.__webglInit===void 0)return;let k=D.source,j=c.get(k);if(j){let K=j[V.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(D),Object.keys(j).length===0&&c.delete(k)}n.remove(D)}function P(D){let V=n.get(D);i.deleteTexture(V.__webglTexture);let k=D.source,j=c.get(k);delete j[V.__cacheKey],a.memory.textures--}function S(D){let V=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(V.__webglFramebuffer[j]))for(let K=0;K<V.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(V.__webglFramebuffer[j][K]);else i.deleteFramebuffer(V.__webglFramebuffer[j]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[j])}else{if(Array.isArray(V.__webglFramebuffer))for(let j=0;j<V.__webglFramebuffer.length;j++)i.deleteFramebuffer(V.__webglFramebuffer[j]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let j=0;j<V.__webglColorRenderbuffer.length;j++)V.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[j]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let k=D.textures;for(let j=0,K=k.length;j<K;j++){let Q=n.get(k[j]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(D)}let O=0;function I(){O=0}function B(){let D=O;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),O+=1,D}function _(D){let V=[];return V.push(D.wrapS),V.push(D.wrapT),V.push(D.wrapR||0),V.push(D.magFilter),V.push(D.minFilter),V.push(D.anisotropy),V.push(D.internalFormat),V.push(D.format),V.push(D.type),V.push(D.generateMipmaps),V.push(D.premultiplyAlpha),V.push(D.flipY),V.push(D.unpackAlignment),V.push(D.colorSpace),V.join()}function z(D,V){let k=n.get(D);if(D.isVideoTexture&&Ft(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){let j=D.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,D,V);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+V)}function J(D,V){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){Y(k,D,V);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+V)}function tt(D,V){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){Y(k,D,V);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+V)}function X(D,V){let k=n.get(D);if(D.version>0&&k.__version!==D.version){W(k,D,V);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+V)}let et={[sn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[ur]:i.MIRRORED_REPEAT},lt={[Ie]:i.NEAREST,[Js]:i.NEAREST_MIPMAP_NEAREST,[Ci]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[dn]:i.LINEAR_MIPMAP_LINEAR},Pt={[Eh]:i.NEVER,[Lh]:i.ALWAYS,[Vh]:i.LESS,[Pl]:i.LEQUAL,[Sh]:i.EQUAL,[wh]:i.GEQUAL,[Ph]:i.GREATER,[Uh]:i.NOTEQUAL};function kt(D,V){if(V.type===An&&t.has("OES_texture_float_linear")===!1&&(V.magFilter===Xe||V.magFilter===Dr||V.magFilter===Ci||V.magFilter===dn||V.minFilter===Xe||V.minFilter===Dr||V.minFilter===Ci||V.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,et[V.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,et[V.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,et[V.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,lt[V.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,lt[V.minFilter]),V.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Pt[V.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===Ie||V.minFilter!==Ci&&V.minFilter!==dn||V.type===An&&t.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||n.get(V).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,o.getMaxAnisotropy())),n.get(V).__currentAnisotropy=V.anisotropy}}}function oe(D,V){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,V.addEventListener("dispose",L));let j=V.source,K=c.get(j);K===void 0&&(K={},c.set(j,K));let Q=_(V);if(Q!==D.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[Q].usedTimes++;let Ut=K[D.__cacheKey];Ut!==void 0&&(K[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&P(V)),D.__cacheKey=Q,D.__webglTexture=K[Q].texture}return k}function ae(D,V,k){return Math.floor(Math.floor(D/k)/V)}function Kt(D,V,k,j){let Q=D.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,k,j,V.data);else{Q.sort((rt,ct)=>rt.start-ct.start);let Ut=0;for(let rt=1;rt<Q.length;rt++){let ct=Q[Ut],At=Q[rt],xt=ct.start+ct.count,ut=ae(At.start,V.width,4),_t=ae(ct.start,V.width,4);At.start<=xt+1&&ut===_t&&ae(At.start+At.count-1,V.width,4)===ut?ct.count=Math.max(ct.count,At.start+At.count-ct.start):(++Ut,Q[Ut]=At)}Q.length=Ut+1;let pt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,V.width);for(let rt=0,ct=Q.length;rt<ct;rt++){let At=Q[rt],xt=Math.floor(At.start/4),ut=Math.ceil(At.count/4),_t=xt%V.width,A=Math.floor(xt/V.width),nt=ut,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),i.pixelStorei(i.UNPACK_SKIP_ROWS,A),e.texSubImage2D(i.TEXTURE_2D,0,_t,A,nt,st,k,j,V.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function Y(D,V,k){let j=i.TEXTURE_2D;(V.isDataArrayTexture||V.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),V.isData3DTexture&&(j=i.TEXTURE_3D);let K=oe(D,V),Q=V.source;e.bindTexture(j,D.__webglTexture,i.TEXTURE0+k);let Ut=n.get(Q);if(Q.version!==Ut.__version||K===!0){e.activeTexture(i.TEXTURE0+k);let pt=jt.getPrimaries(jt.workingColorSpace),Tt=V.colorSpace===zn?null:jt.getPrimaries(V.colorSpace),Ct=V.colorSpace===zn||pt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,V.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,V.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let rt=m(V.image,!1,o.maxTextureSize);rt=Ce(V,rt);let ct=r.convert(V.format,V.colorSpace),At=r.convert(V.type),xt=E(V.internalFormat,ct,At,V.colorSpace,V.isVideoTexture);kt(j,V);let ut,_t=V.mipmaps,A=V.isVideoTexture!==!0,nt=Ut.__version===void 0||K===!0,st=Q.dataReady,St=C(V,rt);if(V.isDepthTexture)xt=g(V.format===Xo,V.type),nt&&(A?e.texStorage2D(i.TEXTURE_2D,1,xt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,ct,At,null));else if(V.isDataTexture)if(_t.length>0){A&&nt&&e.texStorage2D(i.TEXTURE_2D,St,xt,_t[0].width,_t[0].height);for(let it=0,G=_t.length;it<G;it++)ut=_t[it],A?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,ct,At,ut.data):e.texImage2D(i.TEXTURE_2D,it,xt,ut.width,ut.height,0,ct,At,ut.data);V.generateMipmaps=!1}else A?(nt&&e.texStorage2D(i.TEXTURE_2D,St,xt,rt.width,rt.height),st&&Kt(V,rt,ct,At)):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,ct,At,rt.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){A&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,xt,_t[0].width,_t[0].height,rt.depth);for(let it=0,G=_t.length;it<G;it++)if(ut=_t[it],V.format!==on)if(ct!==null)if(A){if(st)if(V.layerUpdates.size>0){let Lt=Ol(ut.width,ut.height,V.format,V.type);for(let Nt of V.layerUpdates){let ye=ut.data.subarray(Nt*Lt/ut.data.BYTES_PER_ELEMENT,(Nt+1)*Lt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Nt,ut.width,ut.height,1,ct,ye)}V.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,rt.depth,ct,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,xt,ut.width,ut.height,rt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,rt.depth,ct,At,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,xt,ut.width,ut.height,rt.depth,0,ct,At,ut.data)}else{A&&nt&&e.texStorage2D(i.TEXTURE_2D,St,xt,_t[0].width,_t[0].height);for(let it=0,G=_t.length;it<G;it++)ut=_t[it],V.format!==on?ct!==null?A?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,ct,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,it,xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,ct,At,ut.data):e.texImage2D(i.TEXTURE_2D,it,xt,ut.width,ut.height,0,ct,At,ut.data)}else if(V.isDataArrayTexture)if(A){if(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,xt,rt.width,rt.height,rt.depth),st)if(V.layerUpdates.size>0){let it=Ol(rt.width,rt.height,V.format,V.type);for(let G of V.layerUpdates){let Lt=rt.data.subarray(G*it/rt.data.BYTES_PER_ELEMENT,(G+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,rt.width,rt.height,1,ct,At,Lt)}V.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ct,At,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,rt.width,rt.height,rt.depth,0,ct,At,rt.data);else if(V.isData3DTexture)A?(nt&&e.texStorage3D(i.TEXTURE_3D,St,xt,rt.width,rt.height,rt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ct,At,rt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,rt.width,rt.height,rt.depth,0,ct,At,rt.data);else if(V.isFramebufferTexture){if(nt)if(A)e.texStorage2D(i.TEXTURE_2D,St,xt,rt.width,rt.height);else{let it=rt.width,G=rt.height;for(let Lt=0;Lt<St;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,xt,it,G,0,ct,At,null),it>>=1,G>>=1}}else if(_t.length>0){if(A&&nt){let it=me(_t[0]);e.texStorage2D(i.TEXTURE_2D,St,xt,it.width,it.height)}for(let it=0,G=_t.length;it<G;it++)ut=_t[it],A?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct,At,ut):e.texImage2D(i.TEXTURE_2D,it,xt,ct,At,ut);V.generateMipmaps=!1}else if(A){if(nt){let it=me(rt);e.texStorage2D(i.TEXTURE_2D,St,xt,it.width,it.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,At,rt)}else e.texImage2D(i.TEXTURE_2D,0,xt,ct,At,rt);y(V)&&d(j),Ut.__version=Q.version,V.onUpdate&&V.onUpdate(V)}D.__version=V.version}function W(D,V,k){if(V.image.length!==6)return;let j=oe(D,V),K=V.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+k);let Q=n.get(K);if(K.version!==Q.__version||j===!0){e.activeTexture(i.TEXTURE0+k);let Ut=jt.getPrimaries(jt.workingColorSpace),pt=V.colorSpace===zn?null:jt.getPrimaries(V.colorSpace),Tt=V.colorSpace===zn||Ut===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,V.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,V.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ct=V.isCompressedTexture||V.image[0].isCompressedTexture,rt=V.image[0]&&V.image[0].isDataTexture,ct=[];for(let G=0;G<6;G++)!Ct&&!rt?ct[G]=m(V.image[G],!0,o.maxCubemapSize):ct[G]=rt?V.image[G].image:V.image[G],ct[G]=Ce(V,ct[G]);let At=ct[0],xt=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),_t=E(V.internalFormat,xt,ut,V.colorSpace),A=V.isVideoTexture!==!0,nt=Q.__version===void 0||j===!0,st=K.dataReady,St=C(V,At);kt(i.TEXTURE_CUBE_MAP,V);let it;if(Ct){A&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,_t,At.width,At.height);for(let G=0;G<6;G++){it=ct[G].mipmaps;for(let Lt=0;Lt<it.length;Lt++){let Nt=it[Lt];V.format!==on?xt!==null?A?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt,0,0,Nt.width,Nt.height,xt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt,_t,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt,0,0,Nt.width,Nt.height,xt,ut,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt,_t,Nt.width,Nt.height,0,xt,ut,Nt.data)}}}else{if(it=V.mipmaps,A&&nt){it.length>0&&St++;let G=me(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,_t,G.width,G.height)}for(let G=0;G<6;G++)if(rt){A?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ct[G].width,ct[G].height,xt,ut,ct[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,_t,ct[G].width,ct[G].height,0,xt,ut,ct[G].data);for(let Lt=0;Lt<it.length;Lt++){let ye=it[Lt].image[G].image;A?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt+1,0,0,ye.width,ye.height,xt,ut,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt+1,_t,ye.width,ye.height,0,xt,ut,ye.data)}}else{A?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,xt,ut,ct[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,_t,xt,ut,ct[G]);for(let Lt=0;Lt<it.length;Lt++){let Nt=it[Lt];A?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt+1,0,0,xt,ut,Nt.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt+1,_t,xt,ut,Nt.image[G])}}}y(V)&&d(i.TEXTURE_CUBE_MAP),Q.__version=K.version,V.onUpdate&&V.onUpdate(V)}D.__version=V.version}function dt(D,V,k,j,K,Q){let Ut=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),Tt=E(k.internalFormat,Ut,pt,k.colorSpace),Ct=n.get(V),rt=n.get(k);if(rt.__renderTarget=V,!Ct.__hasExternalTextures){let ct=Math.max(1,V.width>>Q),At=Math.max(1,V.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Q,Tt,ct,At,V.depth,0,Ut,pt,null):e.texImage2D(K,Q,Tt,ct,At,0,Ut,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Vt(V)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,rt.__webglTexture,0,fe(V)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,rt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(D,V,k){if(i.bindRenderbuffer(i.RENDERBUFFER,D),V.depthBuffer){let j=V.depthTexture,K=j&&j.isDepthTexture?j.type:null,Q=g(V.stencilBuffer,K),Ut=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=fe(V);Vt(V)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Q,V.width,V.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Q,V.width,V.height):i.renderbufferStorage(i.RENDERBUFFER,Q,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,D)}else{let j=V.textures;for(let K=0;K<j.length;K++){let Q=j[K],Ut=r.convert(Q.format,Q.colorSpace),pt=r.convert(Q.type),Tt=E(Q.internalFormat,Ut,pt,Q.colorSpace),Ct=fe(V);k&&Vt(V)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Tt,V.width,V.height):Vt(V)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Tt,V.width,V.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,V.width,V.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(D,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(V.depthTexture);j.__renderTarget=V,(!j.__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)&&(V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0),z(V.depthTexture,0);let K=j.__webglTexture,Q=fe(V);if(V.depthTexture.format===fr)Vt(V)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(V.depthTexture.format===Xo)Vt(V)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Yt(D){let V=n.get(D),k=D.isWebGLCubeRenderTarget===!0;if(V.__boundDepthTexture!==D.depthTexture){let j=D.depthTexture;if(V.__depthDisposeCallback&&V.__depthDisposeCallback(),j){let K=()=>{delete V.__boundDepthTexture,delete V.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),V.__depthDisposeCallback=K}V.__boundDepthTexture=j}if(D.depthTexture&&!V.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let j=D.texture.mipmaps;j&&j.length>0?gt(V.__webglFramebuffer[0],D):gt(V.__webglFramebuffer,D)}else if(k){V.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer[j]),V.__webglDepthbuffer[j]===void 0)V.__webglDepthbuffer[j]=i.createRenderbuffer(),Dt(V.__webglDepthbuffer[j],D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=V.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}}else{let j=D.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),V.__webglDepthbuffer===void 0)V.__webglDepthbuffer=i.createRenderbuffer(),Dt(V.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=V.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(D,V,k){let j=n.get(D);V!==void 0&&dt(j.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Yt(D)}function v(D){let V=D.texture,k=n.get(D),j=n.get(V);D.addEventListener("dispose",U);let K=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Ut=K.length>1;if(Ut||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=V.version,a.memory.textures++),Q){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(V.mipmaps&&V.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let Tt=0;Tt<V.mipmaps.length;Tt++)k.__webglFramebuffer[pt][Tt]=i.createFramebuffer()}else k.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<V.mipmaps.length;pt++)k.__webglFramebuffer[pt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let pt=0,Tt=K.length;pt<Tt;pt++){let Ct=n.get(K[pt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Vt(D)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<K.length;pt++){let Tt=K[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);let Ct=r.convert(Tt.format,Tt.colorSpace),rt=r.convert(Tt.type),ct=E(Tt.internalFormat,Ct,rt,Tt.colorSpace,D.isXRRenderTarget===!0),At=fe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ct,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),kt(i.TEXTURE_CUBE_MAP,V);for(let pt=0;pt<6;pt++)if(V.mipmaps&&V.mipmaps.length>0)for(let Tt=0;Tt<V.mipmaps.length;Tt++)dt(k.__webglFramebuffer[pt][Tt],D,V,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt);else dt(k.__webglFramebuffer[pt],D,V,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);y(V)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let pt=0,Tt=K.length;pt<Tt;pt++){let Ct=K[pt],rt=n.get(Ct),ct=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,rt.__webglTexture),kt(ct,Ct),dt(k.__webglFramebuffer,D,Ct,i.COLOR_ATTACHMENT0+pt,ct,0),y(Ct)&&d(ct)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),kt(pt,V),V.mipmaps&&V.mipmaps.length>0)for(let Tt=0;Tt<V.mipmaps.length;Tt++)dt(k.__webglFramebuffer[Tt],D,V,i.COLOR_ATTACHMENT0,pt,Tt);else dt(k.__webglFramebuffer,D,V,i.COLOR_ATTACHMENT0,pt,0);y(V)&&d(pt),e.unbindTexture()}D.depthBuffer&&Yt(D)}function ue(D){let V=D.textures;for(let k=0,j=V.length;k<j;k++){let K=V[k];if(y(K)){let Q=T(D),Ut=n.get(K).__webglTexture;e.bindTexture(Q,Ut),d(Q),e.unbindTexture()}}}let Ht=[],vt=[];function Et(D){if(D.samples>0){if(Vt(D)===!1){let V=D.textures,k=D.width,j=D.height,K=i.COLOR_BUFFER_BIT,Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(D),pt=V.length>1;if(pt)for(let Ct=0;Ct<V.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let Tt=D.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ct=0;Ct<V.length;Ct++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);let rt=n.get(V[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,K,i.NEAREST),s===!0&&(Ht.length=0,vt.length=0,Ht.push(i.COLOR_ATTACHMENT0+Ct),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ht.push(Q),vt.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Ct=0;Ct<V.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);let rt=n.get(V[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&s){let V=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[V])}}}function fe(D){return Math.min(o.maxSamples,D.samples)}function Vt(D){let V=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function Ft(D){let V=a.render.frame;f.get(D)!==V&&(f.set(D,V),D.update())}function Ce(D,V){let k=D.colorSpace,j=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==Je&&k!==zn&&(jt.getTransfer(k)===ie?(j!==on||K!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),V}function me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=Oe,this.setupRenderTarget=v,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Vt}function vg(i,t){function e(n,o=zn){let r,a=jt.getTransfer(o);if(n===Un)return i.UNSIGNED_BYTE;if(n===Zs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===yl)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Qs)return i.INT;if(n===Fo)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===El)return i.RGB;if(n===on)return i.RGBA;if(n===fr)return i.DEPTH_COMPONENT;if(n===Xo)return i.DEPTH_STENCIL;if(n===js)return i.RED;if(n===Ys)return i.RED_INTEGER;if(n===Vl)return i.RG;if(n===Gs)return i.RG_INTEGER;if(n===Ws)return i.RGBA_INTEGER;if(n===Za||n===za||n===ja||n===Ya)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ks||n===qs||n===tu||n===eu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===ou||n===iu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nu||n===ou)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===iu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ru||n===au||n===pu||n===su||n===uu||n===fu||n===lu||n===cu||n===hu||n===du||n===bu||n===yu||n===mu||n===gu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ru)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===su)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===du)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gu)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tu||n===Eu||n===Vu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tu)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Su||n===Pu||n===Uu||n===wu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Su)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:Mg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends qn{constructor(t,e){super();let n=this,o=null,r=1,a=null,p="local-floor",s=1,u=null,f=null,l=null,c=null,h=null,b=null,m=typeof XRWebGLBinding<"u",y=new Jl,d={},T=e.getContextAttributes(),E=null,g=null,C=[],L=[],U=new ot,x=null,P=new Me;P.viewport=new ne;let S=new Me;S.viewport=new ne;let O=[P,S],I=new ws,B=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let W=C[Y];return W===void 0&&(W=new br,C[Y]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Y){let W=C[Y];return W===void 0&&(W=new br,C[Y]=W),W.getGripSpace()},this.getHand=function(Y){let W=C[Y];return W===void 0&&(W=new br,C[Y]=W),W.getHandSpace()};function z(Y){let W=L.indexOf(Y.inputSource);if(W===-1)return;let dt=C[W];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,u||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<C.length;Y++){let W=L[Y];W!==null&&(L[Y]=null,C[Y].disconnect(W))}B=null,_=null,y.reset();for(let Y in d)delete d[Y];t.setRenderTarget(E),h=null,c=null,l=null,o=null,g=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){p=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return l===null&&m&&(l=new XRWebGLBinding(o,e)),l},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(E=t.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",J),o.addEventListener("inputsourceschange",tt),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(U),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Dt=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=T.stencil?Xo:fr,Dt=T.stencil?No:Fo);let Yt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};l=this.getBinding(),c=l.createProjectionLayer(Yt),o.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),g=new Qe(c.textureWidth,c.textureHeight,{format:on,type:Un,depthTexture:new yi(c.textureWidth,c.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{let dt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(o,e,dt),o.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),g=new Qe(h.framebufferWidth,h.framebufferHeight,{format:on,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(s),u=null,a=await o.requestReferenceSpace(p),Kt.setContext(o),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function tt(Y){for(let W=0;W<Y.removed.length;W++){let dt=Y.removed[W],Dt=L.indexOf(dt);Dt>=0&&(L[Dt]=null,C[Dt].disconnect(dt))}for(let W=0;W<Y.added.length;W++){let dt=Y.added[W],Dt=L.indexOf(dt);if(Dt===-1){for(let Yt=0;Yt<C.length;Yt++)if(Yt>=L.length){L.push(dt),Dt=Yt;break}else if(L[Yt]===null){L[Yt]=dt,Dt=Yt;break}if(Dt===-1)break}let gt=C[Dt];gt&&gt.connect(dt)}}let X=new R,et=new R;function lt(Y,W,dt){X.setFromMatrixPosition(W.matrixWorld),et.setFromMatrixPosition(dt.matrixWorld);let Dt=X.distanceTo(et),gt=W.projectionMatrix.elements,Yt=dt.projectionMatrix.elements,Oe=gt[14]/(gt[10]-1),v=gt[14]/(gt[10]+1),ue=(gt[9]+1)/gt[5],Ht=(gt[9]-1)/gt[5],vt=(gt[8]-1)/gt[0],Et=(Yt[8]+1)/Yt[0],fe=Oe*vt,Vt=Oe*Et,Ft=Dt/(-vt+Et),Ce=Ft*-vt;if(W.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(Ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),gt[10]===-1)Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let me=Oe+Ft,D=v+Ft,V=fe-Ce,k=Vt+(Dt-Ce),j=ue*v/D*me,K=Ht*v/D*me;Y.projectionMatrix.makePerspective(V,k,j,K,me,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Pt(Y,W){W===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(W.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let W=Y.near,dt=Y.far;y.texture!==null&&(y.depthNear>0&&(W=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),I.near=S.near=P.near=W,I.far=S.far=P.far=dt,(B!==I.near||_!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,_=I.far),I.layers.mask=Y.layers.mask|6,P.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;let Dt=Y.parent,gt=I.cameras;Pt(I,Dt);for(let Yt=0;Yt<gt.length;Yt++)Pt(gt[Yt],Dt);gt.length===2?lt(I,P,S):I.projectionMatrix.copy(P.projectionMatrix),kt(Y,I,Dt)};function kt(Y,W,dt){dt===null?Y.matrix.copy(W.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(W.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(c===null&&h===null))return s},this.setFoveation=function(Y){s=Y,c!==null&&(c.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(I)},this.getCameraTexture=function(Y){return d[Y]};let oe=null;function ae(Y,W){if(f=W.getViewerPose(u||a),b=W,f!==null){let dt=f.views;h!==null&&(t.setRenderTargetFramebuffer(g,h.framebuffer),t.setRenderTarget(g));let Dt=!1;dt.length!==I.cameras.length&&(I.cameras.length=0,Dt=!0);for(let v=0;v<dt.length;v++){let ue=dt[v],Ht=null;if(h!==null)Ht=h.getViewport(ue);else{let Et=l.getViewSubImage(c,ue);Ht=Et.viewport,v===0&&(t.setRenderTargetTextures(g,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(g))}let vt=O[v];vt===void 0&&(vt=new Me,vt.layers.enable(v),vt.viewport=new ne,O[v]=vt),vt.matrix.fromArray(ue.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ue.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),v===0&&(I.matrix.copy(vt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Dt===!0&&I.cameras.push(vt)}let gt=o.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&m){l=n.getBinding();let v=l.getDepthInformation(dt[0]);v&&v.isValid&&v.texture&&y.init(v,o.renderState)}if(gt&&gt.includes("camera-access")&&m){t.state.unbindTexture(),l=n.getBinding();for(let v=0;v<dt.length;v++){let ue=dt[v].camera;if(ue){let Ht=d[ue];Ht||(Ht=new Va,d[ue]=Ht);let vt=l.getCameraImage(ue);Ht.sourceTexture=vt}}}}for(let dt=0;dt<C.length;dt++){let Dt=L[dt],gt=C[dt];Dt!==null&&gt!==void 0&&gt.update(Dt,W,u||a)}oe&&oe(Y,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),b=null}let Kt=new s1;Kt.setAnimationLoop(ae),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}},Ri=new Sn,Ig=new Ot;function _g(i,t){function e(y,d){y.matrixAutoUpdate===!0&&y.updateMatrix(),d.value.copy(y.matrix)}function n(y,d){d.color.getRGB(y.fogColor.value,Cl(i)),d.isFog?(y.fogNear.value=d.near,y.fogFar.value=d.far):d.isFogExp2&&(y.fogDensity.value=d.density)}function o(y,d,T,E,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(y,d):d.isMeshToonMaterial?(r(y,d),l(y,d)):d.isMeshPhongMaterial?(r(y,d),f(y,d)):d.isMeshStandardMaterial?(r(y,d),c(y,d),d.isMeshPhysicalMaterial&&h(y,d,g)):d.isMeshMatcapMaterial?(r(y,d),b(y,d)):d.isMeshDepthMaterial?r(y,d):d.isMeshDistanceMaterial?(r(y,d),m(y,d)):d.isMeshNormalMaterial?r(y,d):d.isLineBasicMaterial?(a(y,d),d.isLineDashedMaterial&&p(y,d)):d.isPointsMaterial?s(y,d,T,E):d.isSpriteMaterial?u(y,d):d.isShadowMaterial?(y.color.value.copy(d.color),y.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(y,d){y.opacity.value=d.opacity,d.color&&y.diffuse.value.copy(d.color),d.emissive&&y.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(y.map.value=d.map,e(d.map,y.mapTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,e(d.alphaMap,y.alphaMapTransform)),d.bumpMap&&(y.bumpMap.value=d.bumpMap,e(d.bumpMap,y.bumpMapTransform),y.bumpScale.value=d.bumpScale,d.side===nn&&(y.bumpScale.value*=-1)),d.normalMap&&(y.normalMap.value=d.normalMap,e(d.normalMap,y.normalMapTransform),y.normalScale.value.copy(d.normalScale),d.side===nn&&y.normalScale.value.negate()),d.displacementMap&&(y.displacementMap.value=d.displacementMap,e(d.displacementMap,y.displacementMapTransform),y.displacementScale.value=d.displacementScale,y.displacementBias.value=d.displacementBias),d.emissiveMap&&(y.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,y.emissiveMapTransform)),d.specularMap&&(y.specularMap.value=d.specularMap,e(d.specularMap,y.specularMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest);let T=t.get(d),E=T.envMap,g=T.envMapRotation;E&&(y.envMap.value=E,Ri.copy(g),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),y.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Ri)),y.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=d.reflectivity,y.ior.value=d.ior,y.refractionRatio.value=d.refractionRatio),d.lightMap&&(y.lightMap.value=d.lightMap,y.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,y.lightMapTransform)),d.aoMap&&(y.aoMap.value=d.aoMap,y.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,y.aoMapTransform))}function a(y,d){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,d.map&&(y.map.value=d.map,e(d.map,y.mapTransform))}function p(y,d){y.dashSize.value=d.dashSize,y.totalSize.value=d.dashSize+d.gapSize,y.scale.value=d.scale}function s(y,d,T,E){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,y.size.value=d.size*T,y.scale.value=E*.5,d.map&&(y.map.value=d.map,e(d.map,y.uvTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,e(d.alphaMap,y.alphaMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest)}function u(y,d){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,y.rotation.value=d.rotation,d.map&&(y.map.value=d.map,e(d.map,y.mapTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,e(d.alphaMap,y.alphaMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest)}function f(y,d){y.specular.value.copy(d.specular),y.shininess.value=Math.max(d.shininess,1e-4)}function l(y,d){d.gradientMap&&(y.gradientMap.value=d.gradientMap)}function c(y,d){y.metalness.value=d.metalness,d.metalnessMap&&(y.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,y.metalnessMapTransform)),y.roughness.value=d.roughness,d.roughnessMap&&(y.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,y.roughnessMapTransform)),d.envMap&&(y.envMapIntensity.value=d.envMapIntensity)}function h(y,d,T){y.ior.value=d.ior,d.sheen>0&&(y.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),y.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(y.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,y.sheenColorMapTransform)),d.sheenRoughnessMap&&(y.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,y.sheenRoughnessMapTransform))),d.clearcoat>0&&(y.clearcoat.value=d.clearcoat,y.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(y.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,y.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(y.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&y.clearcoatNormalScale.value.negate())),d.dispersion>0&&(y.dispersion.value=d.dispersion),d.iridescence>0&&(y.iridescence.value=d.iridescence,y.iridescenceIOR.value=d.iridescenceIOR,y.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(y.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,y.iridescenceMapTransform)),d.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),d.transmission>0&&(y.transmission.value=d.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(y.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,y.transmissionMapTransform)),y.thickness.value=d.thickness,d.thicknessMap&&(y.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=d.attenuationDistance,y.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(y.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(y.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=d.specularIntensity,y.specularColor.value.copy(d.specularColor),d.specularColorMap&&(y.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,y.specularColorMapTransform)),d.specularIntensityMap&&(y.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,d){d.matcap&&(y.matcap.value=d.matcap)}function m(y,d){let T=t.get(d).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function $g(i,t,e,n){let o={},r={},a=[],p=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function s(T,E){let g=E.program;n.uniformBlockBinding(T,g)}function u(T,E){let g=o[T.id];g===void 0&&(b(T),g=f(T),o[T.id]=g,T.addEventListener("dispose",y));let C=E.program;n.updateUBOMapping(T,C);let L=t.render.frame;r[T.id]!==L&&(c(T),r[T.id]=L)}function f(T){let E=l();T.__bindingPointIndex=E;let g=i.createBuffer(),C=T.__size,L=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,C,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,g),g}function l(){for(let T=0;T<p;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(T){let E=o[T.id],g=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let L=0,U=g.length;L<U;L++){let x=Array.isArray(g[L])?g[L]:[g[L]];for(let P=0,S=x.length;P<S;P++){let O=x[P];if(h(O,L,P,C)===!0){let I=O.__offset,B=Array.isArray(O.value)?O.value:[O.value],_=0;for(let z=0;z<B.length;z++){let J=B[z],tt=m(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,I+_,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,_),_+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(T,E,g,C){let L=T.value,U=E+"_"+g;if(C[U]===void 0)return typeof L=="number"||typeof L=="boolean"?C[U]=L:C[U]=L.clone(),!0;{let x=C[U];if(typeof L=="number"||typeof L=="boolean"){if(x!==L)return C[U]=L,!0}else if(x.equals(L)===!1)return x.copy(L),!0}return!1}function b(T){let E=T.uniforms,g=0,C=16;for(let U=0,x=E.length;U<x;U++){let P=Array.isArray(E[U])?E[U]:[E[U]];for(let S=0,O=P.length;S<O;S++){let I=P[S],B=Array.isArray(I.value)?I.value:[I.value];for(let _=0,z=B.length;_<z;_++){let J=B[_],tt=m(J),X=g%C,et=X%tt.boundary,lt=X+et;g+=et,lt!==0&&C-lt<tt.storage&&(g+=C-lt),I.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=g,g+=tt.storage}}}let L=g%C;return L>0&&(g+=C-L),T.__size=g,T.__cache={},this}function m(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function y(T){let E=T.target;E.removeEventListener("dispose",y);let g=a.indexOf(E.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(o[E.id]),delete o[E.id],delete r[E.id]}function d(){for(let T in o)i.deleteBuffer(o[T]);a=[],o={},r={}}return{bind:s,update:u,dispose:d}}var Mu=class{constructor(t={}){let{canvas:e=Ch(),context:n=null,depth:o=!0,stencil:r=!1,alpha:a=!1,antialias:p=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;let b=new Uint32Array(4),m=new Int32Array(4),y=null,d=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Co,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,C=!1;this._outputColorSpace=Te;let L=0,U=0,x=null,P=-1,S=null,O=new ne,I=new ne,B=null,_=new yt(0),z=0,J=e.width,tt=e.height,X=1,et=null,lt=null,Pt=new ne(0,0,J,tt),kt=new ne(0,0,J,tt),oe=!1,ae=new Tr,Kt=!1,Y=!1,W=new Ot,dt=new R,Dt=new ne,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Oe(){return x===null?X:1}let v=n;function ue(w,$){return e.getContext(w,$)}try{let w={alpha:!0,depth:o,stencil:r,antialias:p,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",it,!1),v===null){let $="webgl2";if(v=ue($,w),v===null)throw ue($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,vt,Et,fe,Vt,Ft,Ce,me,D,V,k,j,K,Q,Ut,pt,Tt,Ct,rt,ct,At,xt,ut,_t;function A(){Ht=new e5(v),Ht.init(),xt=new vg(v,Ht),vt=new j4(v,Ht,t,xt),Et=new Rg(v,Ht),vt.reversedDepthBuffer&&c&&Et.buffers.depth.setReversed(!0),fe=new i5(v),Vt=new mg,Ft=new Og(v,Ht,Et,Vt,vt,xt,fe),Ce=new G4(g),me=new t5(g),D=new f3(v),ut=new Z4(v,D),V=new n5(v,D,fe,ut),k=new a5(v,V,D,fe),rt=new r5(v,vt,Ft),pt=new Y4(Vt),j=new yg(g,Ce,me,Ht,vt,ut,pt),K=new _g(g,Vt),Q=new Tg,Ut=new wg(Ht),Ct=new Q4(g,Ce,me,Et,k,h,s),Tt=new xg(g,k,vt),_t=new $g(v,fe,vt,Et),ct=new z4(v,Ht,fe),At=new o5(v,Ht,fe),fe.programs=j.programs,g.capabilities=vt,g.extensions=Ht,g.properties=Vt,g.renderLists=Q,g.shadowMap=Tt,g.state=Et,g.info=fe}A();let nt=new Ql(g,v);this.xr=nt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(J,tt,!1))},this.getSize=function(w){return w.set(J,tt)},this.setSize=function(w,$,F=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,tt=$,e.width=Math.floor(w*X),e.height=Math.floor($*X),F===!0&&(e.style.width=w+"px",e.style.height=$+"px"),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(J*X,tt*X).floor()},this.setDrawingBufferSize=function(w,$,F){J=w,tt=$,X=F,e.width=Math.floor(w*F),e.height=Math.floor($*F),this.setViewport(0,0,w,$)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(Pt)},this.setViewport=function(w,$,F,N){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,$,F,N),Et.viewport(O.copy(Pt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,$,F,N){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,$,F,N),Et.scissor(I.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){Et.setScissorTest(oe=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,F=!0){let N=0;if(w){let H=!1;if(x!==null){let at=x.texture.format;H=at===Ws||at===Gs||at===Ys}if(H){let at=x.texture.type,ht=at===Un||at===Fo||at===Rr||at===No||at===Zs||at===zs,wt=Ct.getClearColor(),mt=Ct.getClearAlpha(),It=wt.r,$t=wt.g,Rt=wt.b;ht?(b[0]=It,b[1]=$t,b[2]=Rt,b[3]=mt,v.clearBufferuiv(v.COLOR,0,b)):(m[0]=It,m[1]=$t,m[2]=Rt,m[3]=mt,v.clearBufferiv(v.COLOR,0,m))}else N|=v.COLOR_BUFFER_BIT}$&&(N|=v.DEPTH_BUFFER_BIT),F&&(N|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Ct.dispose(),Q.dispose(),Ut.dispose(),Vt.dispose(),Ce.dispose(),me.dispose(),k.dispose(),ut.dispose(),_t.dispose(),j.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Yn),nt.removeEventListener("sessionend",W2),qo.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=fe.autoReset,$=Tt.enabled,F=Tt.autoUpdate,N=Tt.needsUpdate,H=Tt.type;A(),fe.autoReset=w,Tt.enabled=$,Tt.autoUpdate=F,Tt.needsUpdate=N,Tt.type=H}function it(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function G(w){let $=w.target;$.removeEventListener("dispose",G),Lt($)}function Lt(w){Nt(w),Vt.remove(w)}function Nt(w){let $=Vt.get(w).programs;$!==void 0&&($.forEach(function(F){j.releaseProgram(F)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,F,N,H,at){$===null&&($=gt);let ht=H.isMesh&&H.matrixWorld.determinant()<0,wt=yd(w,$,F,N,H);Et.setMaterial(N,ht);let mt=F.index,It=1;if(N.wireframe===!0){if(mt=V.getWireframeAttribute(F),mt===void 0)return;It=2}let $t=F.drawRange,Rt=F.attributes.position,Wt=$t.start*It,le=($t.start+$t.count)*It;at!==null&&(Wt=Math.max(Wt,at.start*It),le=Math.min(le,(at.start+at.count)*It)),mt!==null?(Wt=Math.max(Wt,0),le=Math.min(le,mt.count)):Rt!=null&&(Wt=Math.max(Wt,0),le=Math.min(le,Rt.count));let xe=le-Wt;if(xe<0||xe===1/0)return;ut.setup(H,N,wt,F,mt);let ge,he=ct;if(mt!==null&&(ge=D.get(mt),he=At,he.setIndex(ge)),H.isMesh)N.wireframe===!0?(Et.setLineWidth(N.wireframeLinewidth*Oe()),he.setMode(v.LINES)):he.setMode(v.TRIANGLES);else if(H.isLine){let Mt=N.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*Oe()),H.isLineSegments?he.setMode(v.LINES):H.isLineLoop?he.setMode(v.LINE_LOOP):he.setMode(v.LINE_STRIP)}else H.isPoints?he.setMode(v.POINTS):H.isSprite&&he.setMode(v.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))he.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Mt=H._multiDrawStarts,Se=H._multiDrawCounts,ee=H._multiDrawCount,mn=mt?D.get(mt).bytesPerElement:1,Fi=Vt.get(N).currentProgram.getUniforms();for(let gn=0;gn<ee;gn++)Fi.setValue(v,"_gl_DrawID",gn),he.render(Mt[gn]/mn,Se[gn])}else if(H.isInstancedMesh)he.renderInstances(Wt,xe,H.count);else if(F.isInstancedBufferGeometry){let Mt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Se=Math.min(F.instanceCount,Mt);he.renderInstances(Wt,xe,Se)}else he.render(Wt,xe)};function ye(w,$,F){w.transparent===!0&&w.side===hn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,mp(w,$,F),w.side=Zn,w.needsUpdate=!0,mp(w,$,F),w.side=hn):mp(w,$,F)}this.compile=function(w,$,F=null){F===null&&(F=w),d=Ut.get(F),d.init($),E.push(d),F.traverseVisible(function(H){H.isLight&&H.layers.test($.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),w!==F&&w.traverseVisible(function(H){H.isLight&&H.layers.test($.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();let N=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let at=H.material;if(at)if(Array.isArray(at))for(let ht=0;ht<at.length;ht++){let wt=at[ht];ye(wt,F,H),N.add(wt)}else ye(at,F,H),N.add(at)}),d=E.pop(),N},this.compileAsync=function(w,$,F=null){let N=this.compile(w,$,F);return new Promise(H=>{function at(){if(N.forEach(function(ht){Vt.get(ht).currentProgram.isReady()&&N.delete(ht)}),N.size===0){H(w);return}setTimeout(at,10)}Ht.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let re=null;function lo(w){re&&re(w)}function Yn(){qo.stop()}function W2(){qo.start()}let qo=new s1;qo.setAnimationLoop(lo),typeof self<"u"&&qo.setContext(self),this.setAnimationLoop=function(w){re=w,nt.setAnimationLoop(w),w===null?qo.stop():qo.start()},nt.addEventListener("sessionstart",Yn),nt.addEventListener("sessionend",W2),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera($),$=nt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,$,x),d=Ut.get(w,E.length),d.init($),E.push(d),W.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ae.setFromProjectionMatrix(W,Qn,$.reversedDepth),Y=this.localClippingEnabled,Kt=pt.init(this.clippingPlanes,Y),y=Q.get(w,T.length),y.init(),T.push(y),nt.enabled===!0&&nt.isPresenting===!0){let at=g.xr.getDepthSensingMesh();at!==null&&hf(at,$,-1/0,g.sortObjects)}hf(w,$,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(et,lt),Yt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Yt&&Ct.addToRenderList(y,w),this.info.render.frame++,Kt===!0&&pt.beginShadows();let F=d.state.shadowsArray;Tt.render(F,w,$),Kt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let N=y.opaque,H=y.transmissive;if(d.setupLights(),$.isArrayCamera){let at=$.cameras;if(H.length>0)for(let ht=0,wt=at.length;ht<wt;ht++){let mt=at[ht];q2(N,H,w,mt)}Yt&&Ct.render(w);for(let ht=0,wt=at.length;ht<wt;ht++){let mt=at[ht];K2(y,w,mt,mt.viewport)}}else H.length>0&&q2(N,H,w,$),Yt&&Ct.render(w),K2(y,w,$);x!==null&&U===0&&(Ft.updateMultisampleRenderTarget(x),Ft.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(g,w,$),ut.resetDefaultState(),P=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],Kt===!0&&pt.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function hf(w,$,F,N){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){N&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(W);let ht=k.update(w),wt=w.material;wt.visible&&y.push(w,ht,wt,F,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){let ht=k.update(w),wt=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Dt.copy(ht.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(W)),Array.isArray(wt)){let mt=ht.groups;for(let It=0,$t=mt.length;It<$t;It++){let Rt=mt[It],Wt=wt[Rt.materialIndex];Wt&&Wt.visible&&y.push(w,ht,Wt,F,Dt.z,Rt)}}else wt.visible&&y.push(w,ht,wt,F,Dt.z,null)}}let at=w.children;for(let ht=0,wt=at.length;ht<wt;ht++)hf(at[ht],$,F,N)}function K2(w,$,F,N){let H=w.opaque,at=w.transmissive,ht=w.transparent;d.setupLightsView(F),Kt===!0&&pt.setGlobalState(g.clippingPlanes,F),N&&Et.viewport(O.copy(N)),H.length>0&&yp(H,$,F),at.length>0&&yp(at,$,F),ht.length>0&&yp(ht,$,F),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function q2(w,$,F,N){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new Qe(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?wn:Un,minFilter:dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let at=d.state.transmissionRenderTarget[N.id],ht=N.viewport||O;at.setSize(ht.z*g.transmissionResolutionScale,ht.w*g.transmissionResolutionScale);let wt=g.getRenderTarget(),mt=g.getActiveCubeFace(),It=g.getActiveMipmapLevel();g.setRenderTarget(at),g.getClearColor(_),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear(),Yt&&Ct.render(F);let $t=g.toneMapping;g.toneMapping=Co;let Rt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),Kt===!0&&pt.setGlobalState(g.clippingPlanes,N),yp(w,F,N),Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let le=0,xe=$.length;le<xe;le++){let ge=$[le],he=ge.object,Mt=ge.geometry,Se=ge.material,ee=ge.group;if(Se.side===hn&&he.layers.test(N.layers)){let mn=Se.side;Se.side=nn,Se.needsUpdate=!0,tc(he,F,N,Mt,Se,ee),Se.side=mn,Se.needsUpdate=!0,Wt=!0}}Wt===!0&&(Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at))}g.setRenderTarget(wt,mt,It),g.setClearColor(_,z),Rt!==void 0&&(N.viewport=Rt),g.toneMapping=$t}function yp(w,$,F){let N=$.isScene===!0?$.overrideMaterial:null;for(let H=0,at=w.length;H<at;H++){let ht=w[H],wt=ht.object,mt=ht.geometry,It=ht.group,$t=ht.material;$t.allowOverride===!0&&N!==null&&($t=N),wt.layers.test(F.layers)&&tc(wt,$,F,mt,$t,It)}}function tc(w,$,F,N,H,at){w.onBeforeRender(g,$,F,N,H,at),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(g,$,F,N,w,at),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,g.renderBufferDirect(F,$,N,H,w,at),H.side=Zn,H.needsUpdate=!0,g.renderBufferDirect(F,$,N,H,w,at),H.side=hn):g.renderBufferDirect(F,$,N,H,w,at),w.onAfterRender(g,$,F,N,H,at)}function mp(w,$,F){$.isScene!==!0&&($=gt);let N=Vt.get(w),H=d.state.lights,at=d.state.shadowsArray,ht=H.state.version,wt=j.getParameters(w,H.state,at,$,F),mt=j.getProgramCacheKey(wt),It=N.programs;N.environment=w.isMeshStandardMaterial?$.environment:null,N.fog=$.fog,N.envMap=(w.isMeshStandardMaterial?me:Ce).get(w.envMap||N.environment),N.envMapRotation=N.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",G),It=new Map,N.programs=It);let $t=It.get(mt);if($t!==void 0){if(N.currentProgram===$t&&N.lightsStateVersion===ht)return nc(w,wt),$t}else wt.uniforms=j.getUniforms(w),w.onBeforeCompile(wt,g),$t=j.acquireProgram(wt,mt),It.set(mt,$t),N.uniforms=wt.uniforms;let Rt=N.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=pt.uniform),nc(w,wt),N.needsLights=gd(w),N.lightsStateVersion=ht,N.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.directionalShadowMap.value=H.state.directionalShadowMap,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotShadowMap.value=H.state.spotShadowMap,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMap.value=H.state.pointShadowMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),N.currentProgram=$t,N.uniformsList=null,$t}function ec(w){if(w.uniformsList===null){let $=w.currentProgram.getUniforms();w.uniformsList=Ar.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function nc(w,$){let F=Vt.get(w);F.outputColorSpace=$.outputColorSpace,F.batching=$.batching,F.batchingColor=$.batchingColor,F.instancing=$.instancing,F.instancingColor=$.instancingColor,F.instancingMorph=$.instancingMorph,F.skinning=$.skinning,F.morphTargets=$.morphTargets,F.morphNormals=$.morphNormals,F.morphColors=$.morphColors,F.morphTargetsCount=$.morphTargetsCount,F.numClippingPlanes=$.numClippingPlanes,F.numIntersection=$.numClipIntersection,F.vertexAlphas=$.vertexAlphas,F.vertexTangents=$.vertexTangents,F.toneMapping=$.toneMapping}function yd(w,$,F,N,H){$.isScene!==!0&&($=gt),Ft.resetTextureUnits();let at=$.fog,ht=N.isMeshStandardMaterial?$.environment:null,wt=x===null?g.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Je,mt=(N.isMeshStandardMaterial?me:Ce).get(N.envMap||ht),It=N.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,$t=!!F.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Rt=!!F.morphAttributes.position,Wt=!!F.morphAttributes.normal,le=!!F.morphAttributes.color,xe=Co;N.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(xe=g.toneMapping);let ge=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=ge!==void 0?ge.length:0,Mt=Vt.get(N),Se=d.state.lights;if(Kt===!0&&(Y===!0||w!==S)){let We=w===S&&N.id===P;pt.setState(N,w,We)}let ee=!1;N.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Se.state.version||Mt.outputColorSpace!==wt||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==mt||N.fog===!0&&Mt.fog!==at||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==pt.numPlanes||Mt.numIntersection!==pt.numIntersection)||Mt.vertexAlphas!==It||Mt.vertexTangents!==$t||Mt.morphTargets!==Rt||Mt.morphNormals!==Wt||Mt.morphColors!==le||Mt.toneMapping!==xe||Mt.morphTargetsCount!==he)&&(ee=!0):(ee=!0,Mt.__version=N.version);let mn=Mt.currentProgram;ee===!0&&(mn=mp(N,$,H));let Fi=!1,gn=!1,Nr=!1,Pe=mn.getUniforms(),xn=Mt.uniforms;if(Et.useProgram(mn.program)&&(Fi=!0,gn=!0,Nr=!0),N.id!==P&&(P=N.id,gn=!0),Fi||S!==w){Et.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(v,"projectionMatrix",w.projectionMatrix),Pe.setValue(v,"viewMatrix",w.matrixWorldInverse);let pn=Pe.map.cameraPosition;pn!==void 0&&pn.setValue(v,dt.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&Pe.setValue(v,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Pe.setValue(v,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,gn=!0,Nr=!0)}if(H.isSkinnedMesh){Pe.setOptional(v,H,"bindMatrix"),Pe.setOptional(v,H,"bindMatrixInverse");let We=H.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Pe.setValue(v,"boneTexture",We.boneTexture,Ft))}H.isBatchedMesh&&(Pe.setOptional(v,H,"batchingTexture"),Pe.setValue(v,"batchingTexture",H._matricesTexture,Ft),Pe.setOptional(v,H,"batchingIdTexture"),Pe.setValue(v,"batchingIdTexture",H._indirectTexture,Ft),Pe.setOptional(v,H,"batchingColorTexture"),H._colorsTexture!==null&&Pe.setValue(v,"batchingColorTexture",H._colorsTexture,Ft));let Dn=F.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&rt.update(H,F,mn),(gn||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,Pe.setValue(v,"receiveShadow",H.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(xn.envMap.value=mt,xn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&$.environment!==null&&(xn.envMapIntensity.value=$.environmentIntensity),gn&&(Pe.setValue(v,"toneMappingExposure",g.toneMappingExposure),Mt.needsLights&&md(xn,Nr),at&&N.fog===!0&&K.refreshFogUniforms(xn,at),K.refreshMaterialUniforms(xn,N,X,tt,d.state.transmissionRenderTarget[w.id]),Ar.upload(v,ec(Mt),xn,Ft)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ar.upload(v,ec(Mt),xn,Ft),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Pe.setValue(v,"center",H.center),Pe.setValue(v,"modelViewMatrix",H.modelViewMatrix),Pe.setValue(v,"normalMatrix",H.normalMatrix),Pe.setValue(v,"modelMatrix",H.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let We=N.uniformsGroups;for(let pn=0,df=We.length;pn<df;pn++){let ti=We[pn];_t.update(ti,mn),_t.bind(ti,mn)}}return mn}function md(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function gd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,$,F){let N=Vt.get(w);N.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=$,Vt.get(w.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:F,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){let F=Vt.get(w);F.__webglFramebuffer=$,F.__useDefaultFramebuffer=$===void 0};let Td=v.createFramebuffer();this.setRenderTarget=function(w,$=0,F=0){x=w,L=$,U=F;let N=!0,H=null,at=!1,ht=!1;if(w){let mt=Vt.get(w);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(v.FRAMEBUFFER,null),N=!1;else if(mt.__webglFramebuffer===void 0)Ft.setupRenderTarget(w);else if(mt.__hasExternalTextures)Ft.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Rt=w.depthTexture;if(mt.__boundDepthTexture!==Rt){if(Rt!==null&&Vt.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);let $t=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[$])?H=$t[$][F]:H=$t[$],at=!0):w.samples>0&&Ft.useMultisampledRTT(w)===!1?H=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?H=$t[F]:H=$t,O.copy(w.viewport),I.copy(w.scissor),B=w.scissorTest}else O.copy(Pt).multiplyScalar(X).floor(),I.copy(kt).multiplyScalar(X).floor(),B=oe;if(F!==0&&(H=Td),Et.bindFramebuffer(v.FRAMEBUFFER,H)&&N&&Et.drawBuffers(w,H),Et.viewport(O),Et.scissor(I),Et.setScissorTest(B),at){let mt=Vt.get(w.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt.__webglTexture,F)}else if(ht){let mt=$;for(let It=0;It<w.textures.length;It++){let $t=Vt.get(w.textures[It]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+It,$t.__webglTexture,F,mt)}}else if(w!==null&&F!==0){let mt=Vt.get(w.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,mt.__webglTexture,F)}P=-1},this.readRenderTargetPixels=function(w,$,F,N,H,at,ht,wt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt){Et.bindFramebuffer(v.FRAMEBUFFER,mt);try{let It=w.textures[wt],$t=It.format,Rt=It.type;if(!vt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-N&&F>=0&&F<=w.height-H&&(w.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+wt),v.readPixels($,F,N,H,xt.convert($t),xt.convert(Rt),at))}finally{let It=x!==null?Vt.get(x).__webglFramebuffer:null;Et.bindFramebuffer(v.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,$,F,N,H,at,ht,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt)if($>=0&&$<=w.width-N&&F>=0&&F<=w.height-H){Et.bindFramebuffer(v.FRAMEBUFFER,mt);let It=w.textures[wt],$t=It.format,Rt=It.type;if(!vt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.bufferData(v.PIXEL_PACK_BUFFER,at.byteLength,v.STREAM_READ),w.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+wt),v.readPixels($,F,N,H,xt.convert($t),xt.convert(Rt),0);let le=x!==null?Vt.get(x).__webglFramebuffer:null;Et.bindFramebuffer(v.FRAMEBUFFER,le);let xe=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await xh(v,xe,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,at),v.deleteBuffer(Wt),v.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,F=0){let N=Math.pow(2,-F),H=Math.floor(w.image.width*N),at=Math.floor(w.image.height*N),ht=$!==null?$.x:0,wt=$!==null?$.y:0;Ft.setTexture2D(w,0),v.copyTexSubImage2D(v.TEXTURE_2D,F,0,0,ht,wt,H,at),Et.unbindTexture()};let Ed=v.createFramebuffer(),Vd=v.createFramebuffer();this.copyTextureToTexture=function(w,$,F=null,N=null,H=0,at=null){at===null&&(H!==0?(cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=H,H=0):at=0);let ht,wt,mt,It,$t,Rt,Wt,le,xe,ge=w.isCompressedTexture?w.mipmaps[at]:w.image;if(F!==null)ht=F.max.x-F.min.x,wt=F.max.y-F.min.y,mt=F.isBox3?F.max.z-F.min.z:1,It=F.min.x,$t=F.min.y,Rt=F.isBox3?F.min.z:0;else{let Dn=Math.pow(2,-H);ht=Math.floor(ge.width*Dn),wt=Math.floor(ge.height*Dn),w.isDataArrayTexture?mt=ge.depth:w.isData3DTexture?mt=Math.floor(ge.depth*Dn):mt=1,It=0,$t=0,Rt=0}N!==null?(Wt=N.x,le=N.y,xe=N.z):(Wt=0,le=0,xe=0);let he=xt.convert($.format),Mt=xt.convert($.type),Se;$.isData3DTexture?(Ft.setTexture3D($,0),Se=v.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Ft.setTexture2DArray($,0),Se=v.TEXTURE_2D_ARRAY):(Ft.setTexture2D($,0),Se=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,$.unpackAlignment);let ee=v.getParameter(v.UNPACK_ROW_LENGTH),mn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Fi=v.getParameter(v.UNPACK_SKIP_PIXELS),gn=v.getParameter(v.UNPACK_SKIP_ROWS),Nr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ge.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ge.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,It),v.pixelStorei(v.UNPACK_SKIP_ROWS,$t),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Rt);let Pe=w.isDataArrayTexture||w.isData3DTexture,xn=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){let Dn=Vt.get(w),We=Vt.get($),pn=Vt.get(Dn.__renderTarget),df=Vt.get(We.__renderTarget);Et.bindFramebuffer(v.READ_FRAMEBUFFER,pn.__webglFramebuffer),Et.bindFramebuffer(v.DRAW_FRAMEBUFFER,df.__webglFramebuffer);for(let ti=0;ti<mt;ti++)Pe&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,H,Rt+ti),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Vt.get($).__webglTexture,at,xe+ti)),v.blitFramebuffer(It,$t,ht,wt,Wt,le,ht,wt,v.DEPTH_BUFFER_BIT,v.NEAREST);Et.bindFramebuffer(v.READ_FRAMEBUFFER,null),Et.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||Vt.has(w)){let Dn=Vt.get(w),We=Vt.get($);Et.bindFramebuffer(v.READ_FRAMEBUFFER,Ed),Et.bindFramebuffer(v.DRAW_FRAMEBUFFER,Vd);for(let pn=0;pn<mt;pn++)Pe?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Dn.__webglTexture,H,Rt+pn):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Dn.__webglTexture,H),xn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,We.__webglTexture,at,xe+pn):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,We.__webglTexture,at),H!==0?v.blitFramebuffer(It,$t,ht,wt,Wt,le,ht,wt,v.COLOR_BUFFER_BIT,v.NEAREST):xn?v.copyTexSubImage3D(Se,at,Wt,le,xe+pn,It,$t,ht,wt):v.copyTexSubImage2D(Se,at,Wt,le,It,$t,ht,wt);Et.bindFramebuffer(v.READ_FRAMEBUFFER,null),Et.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else xn?w.isDataTexture||w.isData3DTexture?v.texSubImage3D(Se,at,Wt,le,xe,ht,wt,mt,he,Mt,ge.data):$.isCompressedArrayTexture?v.compressedTexSubImage3D(Se,at,Wt,le,xe,ht,wt,mt,he,ge.data):v.texSubImage3D(Se,at,Wt,le,xe,ht,wt,mt,he,Mt,ge):w.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,at,Wt,le,ht,wt,he,Mt,ge.data):w.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,at,Wt,le,ge.width,ge.height,he,ge.data):v.texSubImage2D(v.TEXTURE_2D,at,Wt,le,ht,wt,he,Mt,ge);v.pixelStorei(v.UNPACK_ROW_LENGTH,ee),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,mn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Fi),v.pixelStorei(v.UNPACK_SKIP_ROWS,gn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Nr),at===0&&$.generateMipmaps&&v.generateMipmap(Se),Et.unbindTexture()},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&Ft.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ft.setTextureCube(w,0):w.isData3DTexture?Ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ft.setTexture2DArray(w,0):Ft.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){L=0,U=0,x=null,Et.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};function h1(i){let t=new Map,e=new Map,n=i.clone();return d1(i,n,function(o,r){t.set(r,o),e.set(o,r)}),n.traverse(function(o){if(!o.isSkinnedMesh)return;let r=o,a=t.get(o),p=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=p.map(function(s){return e.get(s)}),r.bind(r.skeleton,r.bindMatrix)}),n}function d1(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)d1(i.children[n],t.children[n],e)}function zl(i,t){if(t===Sl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Or||t===Ga){let e=i.getIndex();if(e===null){let a=[],p=i.getAttribute("position");if(p!==void 0){for(let s=0;s<p.count;s++)a.push(s);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,o=[];if(t===Or)for(let a=1;a<=n;a++)o.push(e.getX(0)),o.push(e.getX(a)),o.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(o.push(e.getX(a)),o.push(e.getX(a+1)),o.push(e.getX(a+2))):(o.push(e.getX(a+2)),o.push(e.getX(a+1)),o.push(e.getX(a)));o.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(o),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var Iu=class extends io{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new t2(e)}),this.register(function(e){return new e2(e)}),this.register(function(e){return new f2(e)}),this.register(function(e){return new l2(e)}),this.register(function(e){return new c2(e)}),this.register(function(e){return new o2(e)}),this.register(function(e){return new i2(e)}),this.register(function(e){return new r2(e)}),this.register(function(e){return new a2(e)}),this.register(function(e){return new ql(e)}),this.register(function(e){return new p2(e)}),this.register(function(e){return new n2(e)}),this.register(function(e){return new u2(e)}),this.register(function(e){return new s2(e)}),this.register(function(e){return new Wl(e)}),this.register(function(e){return new h2(e)}),this.register(function(e){return new d2(e)})}load(t,e,n,o){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=wo.extractUrlBase(t);a=wo.resolveURL(u,this.path)}else a=wo.extractUrlBase(t);this.manager.itemStart(t);let p=function(u){o?o(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},s=new Cr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(u){try{r.parse(u,a,function(f){e(f),r.manager.itemEnd(t)},p)}catch(f){p(f)}},n,p)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,o){let r,a={},p={},s=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(s.decode(new Uint8Array(t,0,4))===T1){try{a[Gt.KHR_BINARY_GLTF]=new b2(t)}catch(l){o&&o(l);return}r=JSON.parse(a[Gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(s.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new S2(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let l=this.pluginCallbacks[f](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),p[l.name]=l,a[l.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let l=r.extensionsUsed[f],c=r.extensionsRequired||[];switch(l){case Gt.KHR_MATERIALS_UNLIT:a[l]=new Kl;break;case Gt.KHR_DRACO_MESH_COMPRESSION:a[l]=new y2(r,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:a[l]=new m2;break;case Gt.KHR_MESH_QUANTIZATION:a[l]=new g2;break;default:c.indexOf(l)>=0&&p[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(p),u.parse(n,o)}parseAsync(t,e){let n=this;return new Promise(function(o,r){n.parse(t,e,o,r)})}};function kg(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wl=class{constructor(t){this.parser=t,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,o=e.length;n<o;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,o=e.cache.get(n);if(o)return o;let r=e.json,s=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],u,f=new yt(16777215);s.color!==void 0&&f.setRGB(s.color[0],s.color[1],s.color[2],Je);let l=s.range!==void 0?s.range:0;switch(s.type){case"directional":u=new Pi(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new $a(f),u.distance=l;break;case"spot":u=new _a(f),u.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,u.angle=s.spot.outerConeAngle,u.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return u.position.set(0,0,0),so(u,s),s.intensity!==void 0&&(u.intensity=s.intensity),u.name=e.createUniqueName(s.name||"light_"+t),o=Promise.resolve(u),e.cache.add(n,o),o}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],p=(r.extensions&&r.extensions[this.name]||{}).light;return p===void 0?null:this._loadLight(p).then(function(s){return n._getNodeRef(e.cache,p,s)})}},Kl=class{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return te}extendParams(t,e,n){let o=[];t.color=new yt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Je),t.opacity=a[3]}r.baseColorTexture!==void 0&&o.push(n.assignTexture(t,"map",r.baseColorTexture,Te))}return Promise.all(o)}},ql=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},t2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let p=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ot(p,p)}return Promise.all(r)}},e2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},n2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},o2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new yt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=o.extensions[this.name];if(a.sheenColorFactor!==void 0){let p=a.sheenColorFactor;e.sheenColor.setRGB(p[0],p[1],p[2],Je)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Te)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},i2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},r2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let p=a.attenuationColor||[1,1,1];return e.attenuationColor=new yt().setRGB(p[0],p[1],p[2],Je),Promise.all(r)}},a2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},p2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let p=a.specularColorFactor||[1,1,1];return e.specularColor=new yt().setRGB(p[0],p[1],p[2],Je),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Te)),Promise.all(r)}},s2=class{constructor(t){this.parser=t,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}},u2=class{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},f2=class{constructor(t){this.parser=t,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,o=n.textures[t];if(!o.extensions||!o.extensions[this.name])return null;let r=o.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},l2=class{constructor(t){this.parser=t,this.name=Gt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},c2=class{constructor(t){this.parser=t,this.name=Gt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},h2=class{constructor(t){this.name=Gt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let o=n.extensions[this.name],r=this.parser.getDependency("buffer",o.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(p){let s=o.byteOffset||0,u=o.byteLength||0,f=o.count,l=o.byteStride,c=new Uint8Array(p,s,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,l,c,o.mode,o.filter).then(function(h){return h.buffer}):a.ready.then(function(){let h=new ArrayBuffer(f*l);return a.decodeGltfBuffer(new Uint8Array(h),f,l,c,o.mode,o.filter),h})})}else return null}},d2=class{constructor(t){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let o=e.meshes[n.mesh];for(let u of o.primitives)if(u.mode!==_n.TRIANGLES&&u.mode!==_n.TRIANGLE_STRIP&&u.mode!==_n.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,p=[],s={};for(let u in a)p.push(this.parser.getDependency("accessor",a[u]).then(f=>(s[u]=f,s[u])));return p.length<1?null:(p.push(this.parser.createNodeMesh(t)),Promise.all(p).then(u=>{let f=u.pop(),l=f.isGroup?f.children:[f],c=u[0].count,h=[];for(let b of l){let m=new Ot,y=new R,d=new Ae,T=new R(1,1,1),E=new Mn(b.geometry,b.material,c);for(let g=0;g<c;g++)s.TRANSLATION&&y.fromBufferAttribute(s.TRANSLATION,g),s.ROTATION&&d.fromBufferAttribute(s.ROTATION,g),s.SCALE&&T.fromBufferAttribute(s.SCALE,g),E.setMatrixAt(g,m.compose(y,d,T));for(let g in s)if(g==="_COLOR_0"){let C=s[g];E.instanceColor=new Ho(C.array,C.itemSize,C.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&b.geometry.setAttribute(g,s[g]);Ve.prototype.copy.call(E,b),this.parser.assignFinalMaterial(E),h.push(E)}return f.isGroup?(f.clear(),f.add(...h),f):h[0]}))}},T1="glTF",Ka=12,b1={JSON:1313821514,BIN:5130562},b2=class{constructor(t){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==T1)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let o=this.header.length-Ka,r=new DataView(t,Ka),a=0;for(;a<o;){let p=r.getUint32(a,!0);a+=4;let s=r.getUint32(a,!0);if(a+=4,s===b1.JSON){let u=new Uint8Array(t,Ka+a,p);this.content=n.decode(u)}else if(s===b1.BIN){let u=Ka+a;this.body=t.slice(u,u+p)}a+=p}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},y2=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,o=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,p={},s={},u={};for(let f in a){let l=E2[f]||f.toLowerCase();p[l]=a[f]}for(let f in t.attributes){let l=E2[f]||f.toLowerCase();if(a[f]!==void 0){let c=n.accessors[t.attributes[f]],h=_r[c.componentType];u[l]=h.name,s[l]=c.normalized===!0}}return e.getDependency("bufferView",r).then(function(f){return new Promise(function(l,c){o.decodeDracoFile(f,function(h){for(let b in h.attributes){let m=h.attributes[b],y=s[b];y!==void 0&&(m.normalized=y)}l(h)},p,u,Je,c)})})}},m2=class{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},g2=class{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}},_u=class extends Vo{constructor(t,e,n,o){super(t,e,n,o)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o*3+o;for(let a=0;a!==o;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=p*2,u=p*3,f=o-e,l=(n-e)/f,c=l*l,h=c*l,b=t*u,m=b-u,y=-2*h+3*c,d=h-c,T=1-y,E=d-c+l;for(let g=0;g!==p;g++){let C=a[m+g+p],L=a[m+g+s]*f,U=a[b+g+p],x=a[b+g]*f;r[g]=T*C+E*L+y*U+d*x}return r}},Bg=new Ae,T2=class extends _u{interpolate_(t,e,n,o){let r=super.interpolate_(t,e,n,o);return Bg.fromArray(r).normalize().toArray(r),r}},_n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y1={9728:Ie,9729:Xe,9984:Js,9985:Dr,9986:Ci,9987:dn},m1={33071:Wn,33648:ur,10497:sn},jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},E2={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qo={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fg={CUBICSPLINE:void 0,LINEAR:ci,STEP:li},Yl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ng(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),i.DefaultMaterial}function Mi(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function so(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Xg(i,t,e){let n=!1,o=!1,r=!1;for(let u=0,f=t.length;u<f;u++){let l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(o=!0),l.COLOR_0!==void 0&&(r=!0),n&&o&&r)break}if(!n&&!o&&!r)return Promise.resolve(i);let a=[],p=[],s=[];for(let u=0,f=t.length;u<f;u++){let l=t[u];if(n){let c=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;a.push(c)}if(o){let c=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;p.push(c)}if(r){let c=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;s.push(c)}}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s)]).then(function(u){let f=u[0],l=u[1],c=u[2];return n&&(i.morphAttributes.position=f),o&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=c),i.morphTargetsRelative=!0,i})}function Jg(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,o=e.length;n<o;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qg(i){let t,e=i.extensions&&i.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Gl(e.attributes):t=i.indices+":"+Gl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,o=i.targets.length;n<o;n++)t+=":"+Gl(i.targets[n]);return t}function Gl(i){let t="",e=Object.keys(i).sort();for(let n=0,o=e.length;n<o;n++)t+=e[n]+":"+i[e[n]]+";";return t}function V2(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zg=new Ot,S2=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new kg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,r=!1,a=-1;if(typeof navigator<"u"){let p=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(p)===!0;let s=p.match(/Version\/(\d+)/);o=n&&s?parseInt(s[1],10):-1,r=p.indexOf("Firefox")>-1,a=r?p.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&o<17||r&&a<98?this.textureLoader=new ro(this.options.manager):this.textureLoader=new Ha(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,o=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let p={scene:a[0][o.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:o.asset,parser:n,userData:{}};return Mi(r,p,o),so(p,o),Promise.all(n._invokeAll(function(s){return s.afterRoot&&s.afterRoot(p)})).then(function(){for(let s of p.scenes)s.updateMatrixWorld();t(p)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let o=0,r=e.length;o<r;o++){let a=e[o].joints;for(let p=0,s=a.length;p<s;p++)t[a[p]].isBone=!0}for(let o=0,r=t.length;o<r;o++){let a=t[o];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let o=n.clone(),r=(a,p)=>{let s=this.associations.get(a);s!=null&&this.associations.set(p,s);for(let[u,f]of a.children.entries())r(f,p.children[u])};return r(n,o),o.name+="_instance_"+t.uses[e]++,o}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let o=t(e[n]);if(o)return o}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let o=0;o<e.length;o++){let r=t(e[o]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,o=this.cache.get(n);if(!o){switch(t){case"scene":o=this.loadScene(e);break;case"node":o=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":o=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":o=this.loadAccessor(e);break;case"bufferView":o=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":o=this.loadBuffer(e);break;case"material":o=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":o=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":o=this.loadSkin(e);break;case"animation":o=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":o=this.loadCamera(e);break;default:if(o=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!o)throw new Error("Unknown type: "+t);break}this.cache.add(n,o)}return o}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,o=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(o.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);let o=this.options;return new Promise(function(r,a){n.load(wo.resolveURL(e.uri,o.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let o=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+o)})}loadAccessor(t){let e=this,n=this.json,o=this.json.accessors[t];if(o.bufferView===void 0&&o.sparse===void 0){let a=jl[o.type],p=_r[o.componentType],s=o.normalized===!0,u=new p(o.count*a);return Promise.resolve(new we(u,a,s))}let r=[];return o.bufferView!==void 0?r.push(this.getDependency("bufferView",o.bufferView)):r.push(null),o.sparse!==void 0&&(r.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(r).then(function(a){let p=a[0],s=jl[o.type],u=_r[o.componentType],f=u.BYTES_PER_ELEMENT,l=f*s,c=o.byteOffset||0,h=o.bufferView!==void 0?n.bufferViews[o.bufferView].byteStride:void 0,b=o.normalized===!0,m,y;if(h&&h!==l){let d=Math.floor(c/h),T="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+d+":"+o.count,E=e.cache.get(T);E||(m=new u(p,d*h,o.count*h/f),E=new yr(m,h/f),e.cache.add(T,E)),y=new mr(E,s,c%h/f,b)}else p===null?m=new u(o.count*s):m=new u(p,c,o.count*s),y=new we(m,s,b);if(o.sparse!==void 0){let d=jl.SCALAR,T=_r[o.sparse.indices.componentType],E=o.sparse.indices.byteOffset||0,g=o.sparse.values.byteOffset||0,C=new T(a[1],E,o.sparse.count*d),L=new u(a[2],g,o.sparse.count*s);p!==null&&(y=new we(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let U=0,x=C.length;U<x;U++){let P=C[U];if(y.setX(P,L[U*s]),s>=2&&y.setY(P,L[U*s+1]),s>=3&&y.setZ(P,L[U*s+2]),s>=4&&y.setW(P,L[U*s+3]),s>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=b}return y})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],p=this.textureLoader;if(a.uri){let s=n.manager.getHandler(a.uri);s!==null&&(p=s)}return this.loadTextureImage(t,r,p)}loadTextureImage(t,e,n){let o=this,r=this.json,a=r.textures[t],p=r.images[e],s=(p.uri||p.bufferView)+":"+a.sampler;if(this.textureCache[s])return this.textureCache[s];let u=this.loadImageSource(e,n).then(function(f){f.flipY=!1,f.name=a.name||p.name||"",f.name===""&&typeof p.uri=="string"&&p.uri.startsWith("data:image/")===!1&&(f.name=p.uri);let c=(r.samplers||{})[a.sampler]||{};return f.magFilter=y1[c.magFilter]||Xe,f.minFilter=y1[c.minFilter]||dn,f.wrapS=m1[c.wrapS]||sn,f.wrapT=m1[c.wrapT]||sn,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Ie&&f.minFilter!==Xe,o.associations.set(f,{textures:t}),f}).catch(function(){return null});return this.textureCache[s]=u,u}loadImageSource(t,e){let n=this,o=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());let a=o.images[t],p=self.URL||self.webkitURL,s=a.uri||"",u=!1;if(a.bufferView!==void 0)s=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;let c=new Blob([l],{type:a.mimeType});return s=p.createObjectURL(c),s});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let f=Promise.resolve(s).then(function(l){return new Promise(function(c,h){let b=c;e.isImageBitmapLoader===!0&&(b=function(m){let y=new He(m);y.needsUpdate=!0,c(y)}),e.load(wo.resolveURL(l,r.path),b,void 0,h)})}).then(function(l){return u===!0&&p.revokeObjectURL(s),so(l,a),l.userData.mimeType=a.mimeType||Zg(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),l});return this.sourceCache[t]=f,f}assignTexture(t,e,n,o){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Gt.KHR_TEXTURE_TRANSFORM]){let p=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(p){let s=r.associations.get(a);a=r.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,p),r.associations.set(a,s)}}return o!==void 0&&(a.colorSpace=o),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,o=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let p="PointsMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new Vr,Ye.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,s.sizeAttenuation=!1,this.cache.add(p,s)),n=s}else if(t.isLine){let p="LineBasicMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new Er,Ye.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,this.cache.add(p,s)),n=s}if(o||r||a){let p="ClonedMaterial:"+n.uuid+":";o&&(p+="derivative-tangents:"),r&&(p+="vertex-colors:"),a&&(p+="flat-shading:");let s=this.cache.get(p);s||(s=n.clone(),r&&(s.vertexColors=!0),a&&(s.flatShading=!0),o&&(s.normalScale&&(s.normalScale.y*=-1),s.clearcoatNormalScale&&(s.clearcoatNormalScale.y*=-1)),this.cache.add(p,s),this.associations.set(s,this.associations.get(n))),n=s}t.material=n}getMaterialType(){return fn}loadMaterial(t){let e=this,n=this.json,o=this.extensions,r=n.materials[t],a,p={},s=r.extensions||{},u=[];if(s[Gt.KHR_MATERIALS_UNLIT]){let l=o[Gt.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(p,r,e))}else{let l=r.pbrMetallicRoughness||{};if(p.color=new yt(1,1,1),p.opacity=1,Array.isArray(l.baseColorFactor)){let c=l.baseColorFactor;p.color.setRGB(c[0],c[1],c[2],Je),p.opacity=c[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(p,"map",l.baseColorTexture,Te)),p.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,p.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(p,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(p,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(t,p)})))}r.doubleSided===!0&&(p.side=hn);let f=r.alphaMode||Yl.OPAQUE;if(f===Yl.BLEND?(p.transparent=!0,p.depthWrite=!1):(p.transparent=!1,f===Yl.MASK&&(p.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==te&&(u.push(e.assignTexture(p,"normalMap",r.normalTexture)),p.normalScale=new ot(1,1),r.normalTexture.scale!==void 0)){let l=r.normalTexture.scale;p.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&a!==te&&(u.push(e.assignTexture(p,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(p.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==te){let l=r.emissiveFactor;p.emissive=new yt().setRGB(l[0],l[1],l[2],Je)}return r.emissiveTexture!==void 0&&a!==te&&u.push(e.assignTexture(p,"emissiveMap",r.emissiveTexture,Te)),Promise.all(u).then(function(){let l=new a(p);return r.name&&(l.name=r.name),so(l,r),e.associations.set(l,{materials:t}),r.extensions&&Mi(o,l,r),l})}createUniqueName(t){let e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,o=this.primitiveCache;function r(p){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(p,e).then(function(s){return g1(s,p,e)})}let a=[];for(let p=0,s=t.length;p<s;p++){let u=t[p],f=Qg(u),l=o[f];if(l)a.push(l.promise);else{let c;u.extensions&&u.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?c=r(u):c=g1(new be,u,e),o[f]={primitive:u,promise:c},a.push(c)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,o=this.extensions,r=n.meshes[t],a=r.primitives,p=[];for(let s=0,u=a.length;s<u;s++){let f=a[s].material===void 0?Ng(this.cache):this.getDependency("material",a[s].material);p.push(f)}return p.push(e.loadGeometries(a)),Promise.all(p).then(function(s){let u=s.slice(0,s.length-1),f=s[s.length-1],l=[];for(let h=0,b=f.length;h<b;h++){let m=f[h],y=a[h],d,T=u[h];if(y.mode===_n.TRIANGLES||y.mode===_n.TRIANGLE_STRIP||y.mode===_n.TRIANGLE_FAN||y.mode===void 0)d=r.isSkinnedMesh===!0?new ya(m,T):new Qt(m,T),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),y.mode===_n.TRIANGLE_STRIP?d.geometry=zl(d.geometry,Ga):y.mode===_n.TRIANGLE_FAN&&(d.geometry=zl(d.geometry,Or));else if(y.mode===_n.LINES)d=new ga(m,T);else if(y.mode===_n.LINE_STRIP)d=new bi(m,T);else if(y.mode===_n.LINE_LOOP)d=new Ta(m,T);else if(y.mode===_n.POINTS)d=new Ea(m,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(d.geometry.morphAttributes).length>0&&Jg(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),so(d,r),y.extensions&&Mi(o,d,y),e.assignFinalMaterial(d),l.push(d)}for(let h=0,b=l.length;h<b;h++)e.associations.set(l[h],{meshes:t,primitives:h});if(l.length===1)return r.extensions&&Mi(o,l[0],r),l[0];let c=new Re;r.extensions&&Mi(o,c,r),e.associations.set(c,{meshes:t});for(let h=0,b=l.length;h<b;h++)c.add(l[h]);return c})}loadCamera(t){let e,n=this.json.cameras[t],o=n[n.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Me(rn.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):n.type==="orthographic"&&(e=new Uo(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),so(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let o=0,r=e.joints.length;o<r;o++)n.push(this._loadNodeShallow(e.joints[o]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(o){let r=o.pop(),a=o,p=[],s=[];for(let u=0,f=a.length;u<f;u++){let l=a[u];if(l){p.push(l);let c=new Ot;r!==null&&c.fromArray(r.array,u*16),s.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new ma(p,s)})}loadAnimation(t){let e=this.json,n=this,o=e.animations[t],r=o.name?o.name:"animation_"+t,a=[],p=[],s=[],u=[],f=[];for(let l=0,c=o.channels.length;l<c;l++){let h=o.channels[l],b=o.samplers[h.sampler],m=h.target,y=m.node,d=o.parameters!==void 0?o.parameters[b.input]:b.input,T=o.parameters!==void 0?o.parameters[b.output]:b.output;m.node!==void 0&&(a.push(this.getDependency("node",y)),p.push(this.getDependency("accessor",d)),s.push(this.getDependency("accessor",T)),u.push(b),f.push(m))}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s),Promise.all(u),Promise.all(f)]).then(function(l){let c=l[0],h=l[1],b=l[2],m=l[3],y=l[4],d=[];for(let E=0,g=c.length;E<g;E++){let C=c[E],L=h[E],U=b[E],x=m[E],P=y[E];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let S=n._createAnimationTracks(C,L,U,x,P);if(S)for(let O=0;O<S.length;O++)d.push(S[O])}let T=new Vi(r,void 0,d);return so(T,o),T})}createNodeMesh(t){let e=this.json,n=this,o=e.nodes[t];return o.mesh===void 0?null:n.getDependency("mesh",o.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,o.mesh,r);return o.weights!==void 0&&a.traverse(function(p){if(p.isMesh)for(let s=0,u=o.weights.length;s<u;s++)p.morphTargetInfluences[s]=o.weights[s]}),a})}loadNode(t){let e=this.json,n=this,o=e.nodes[t],r=n._loadNodeShallow(t),a=[],p=o.children||[];for(let u=0,f=p.length;u<f;u++)a.push(n.getDependency("node",p[u]));let s=o.skin===void 0?Promise.resolve(null):n.getDependency("skin",o.skin);return Promise.all([r,Promise.all(a),s]).then(function(u){let f=u[0],l=u[1],c=u[2];c!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(c,zg)});for(let h=0,b=l.length;h<b;h++)f.add(l[h]);return f})}_loadNodeShallow(t){let e=this.json,n=this.extensions,o=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?o.createUniqueName(r.name):"",p=[],s=o._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return s&&p.push(s),r.camera!==void 0&&p.push(o.getDependency("camera",r.camera).then(function(u){return o._getNodeRef(o.cameraCache,r.camera,u)})),o._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){p.push(u)}),this.nodeCache[t]=Promise.all(p).then(function(u){let f;if(r.isBone===!0?f=new gr:u.length>1?f=new Re:u.length===1?f=u[0]:f=new Ve,f!==u[0])for(let l=0,c=u.length;l<c;l++)f.add(u[l]);if(r.name&&(f.userData.name=r.name,f.name=a),so(f,r),r.extensions&&Mi(n,f,r),r.matrix!==void 0){let l=new Ot;l.fromArray(r.matrix),f.applyMatrix4(l)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!o.associations.has(f))o.associations.set(f,{});else if(r.mesh!==void 0&&o.meshCache.refs[r.mesh]>1){let l=o.associations.get(f);o.associations.set(f,{...l})}return o.associations.get(f).nodes=t,f}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],o=this,r=new Re;n.name&&(r.name=o.createUniqueName(n.name)),so(r,n),n.extensions&&Mi(e,r,n);let a=n.nodes||[],p=[];for(let s=0,u=a.length;s<u;s++)p.push(o.getDependency("node",a[s]));return Promise.all(p).then(function(s){for(let f=0,l=s.length;f<l;f++)r.add(s[f]);let u=f=>{let l=new Map;for(let[c,h]of o.associations)(c instanceof Ye||c instanceof He)&&l.set(c,h);return f.traverse(c=>{let h=o.associations.get(c);h!=null&&l.set(c,h)}),l};return o.associations=u(r),r})}_createAnimationTracks(t,e,n,o,r){let a=[],p=t.name?t.name:t.uuid,s=[];Qo[r.path]===Qo.weights?t.traverse(function(c){c.morphTargetInfluences&&s.push(c.name?c.name:c.uuid)}):s.push(p);let u;switch(Qo[r.path]){case Qo.weights:u=eo;break;case Qo.rotation:u=no;break;case Qo.translation:case Qo.scale:u=oo;break;default:n.itemSize===1?u=eo:u=oo;break}let f=o.interpolation!==void 0?Fg[o.interpolation]:ci,l=this._getArrayFromAccessor(n);for(let c=0,h=s.length;c<h;c++){let b=new u(s[c]+"."+Qo[r.path],e.array,l,f);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=V2(e.constructor),o=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)o[r]=e[r]*n;e=o}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let o=this instanceof no?T2:_u;return new o(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function jg(i,t,e){let n=t.attributes,o=new tn;if(n.POSITION!==void 0){let p=e.json.accessors[n.POSITION],s=p.min,u=p.max;if(s!==void 0&&u!==void 0){if(o.set(new R(s[0],s[1],s[2]),new R(u[0],u[1],u[2])),p.normalized){let f=V2(_r[p.componentType]);o.min.multiplyScalar(f),o.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let p=new R,s=new R;for(let u=0,f=r.length;u<f;u++){let l=r[u];if(l.POSITION!==void 0){let c=e.json.accessors[l.POSITION],h=c.min,b=c.max;if(h!==void 0&&b!==void 0){if(s.setX(Math.max(Math.abs(h[0]),Math.abs(b[0]))),s.setY(Math.max(Math.abs(h[1]),Math.abs(b[1]))),s.setZ(Math.max(Math.abs(h[2]),Math.abs(b[2]))),c.normalized){let m=V2(_r[c.componentType]);s.multiplyScalar(m)}p.max(s)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(p)}i.boundingBox=o;let a=new un;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,i.boundingSphere=a}function g1(i,t,e){let n=t.attributes,o=[];function r(a,p){return e.getDependency("accessor",a).then(function(s){i.setAttribute(p,s)})}for(let a in n){let p=E2[a]||a.toLowerCase();p in i.attributes||o.push(r(n[a],p))}if(t.indices!==void 0&&!i.index){let a=e.getDependency("accessor",t.indices).then(function(p){i.setIndex(p)});o.push(a)}return jt.workingColorSpace!==Je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),so(i,t),jg(i,t,e),Promise.all(o).then(function(){return t.targets!==void 0?Xg(i,t.targets,e):i})}function E1(i,t,e){fetch(i).then(n=>{if(!n.ok)throw new Error(`${i}: ${n.status}`);return n.arrayBuffer()}).then(n=>new Iu().parse(n,"",t,e),e)}var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yg=new Uo(-1,1,1,-1,0,1),P2=class extends be{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Gg=new P2,Zo=class{constructor(t){this._mesh=new Qt(Gg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var $u=class extends Ln{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=In.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Zo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qa=class extends Ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let o=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,p;this.inverse?(a=0,p=1):(a=1,p=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),r.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),r.buffers.stencil.setClear(p),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(o.EQUAL,1,4294967295),r.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),r.buffers.stencil.setLocked(!0)}},Hu=class extends Ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ku=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $u($r),this.copyPass.material.blending=_e,this.clock=new ka}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let o=0,r=this.passes.length;o<r;o++){let a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let p=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),s.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}qa!==void 0&&(a instanceof qa?n=!0:a instanceof Hu&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bu=class extends Ln{constructor(t,e,n=null,o=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){let o=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=o}};var tp={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ot},cameraProjectionMatrixInverse:{value:new Ot},cameraWorldMatrix:{value:new Ot},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},ep={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Fu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function V1(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Wg(t),n=e.length,o=new Uint8Array(n*4);for(let a=0;a<n;++a){let p=e[a],s=2*Math.PI*p/n,u=new R(Math.cos(s),Math.sin(s),0).normalize();o[a*4]=(u.x*.5+.5)*255,o[a*4+1]=(u.y*.5+.5)*255,o[a*4+2]=127,o[a*4+3]=255}let r=new Eo(o,t,t);return r.wrapS=sn,r.wrapT=sn,r.needsUpdate=!0,r}function Wg(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),o=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(o===-1&&r===t?(r=t-2,o=0):(r===t&&(r=0),o<0&&(o=t-1)),n[o*t+r]!==0){r-=2,o++;continue}else n[o*t+r]=a++;r++,o--}return n}var np={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:U2(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new Ot},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function U2(i,t,e){let n=Kg(i,t,e),o="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];o+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return o}function Kg(i,t,e){let n=[];for(let o=0;o<i;o++){let r=2*Math.PI*t*o/i,a=Math.pow(o/(i-1),e);n.push(new R(Math.cos(r),Math.sin(r),a))}return n}var Nu=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,o,r,a=.5*(Math.sqrt(3)-1),p=(t+e)*a,s=Math.floor(t+p),u=Math.floor(e+p),f=(3-Math.sqrt(3))/6,l=(s+u)*f,c=s-l,h=u-l,b=t-c,m=e-h,y,d;b>m?(y=1,d=0):(y=0,d=1);let T=b-y+f,E=m-d+f,g=b-1+2*f,C=m-1+2*f,L=s&255,U=u&255,x=this.perm[L+this.perm[U]]%12,P=this.perm[L+y+this.perm[U+d]]%12,S=this.perm[L+1+this.perm[U+1]]%12,O=.5-b*b-m*m;O<0?n=0:(O*=O,n=O*O*this._dot(this.grad3[x],b,m));let I=.5-T*T-E*E;I<0?o=0:(I*=I,o=I*I*this._dot(this.grad3[P],T,E));let B=.5-g*g-C*C;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[S],g,C)),70*(n+o+r)}noise3d(t,e,n){let o,r,a,p,u=(t+e+n)*.3333333333333333,f=Math.floor(t+u),l=Math.floor(e+u),c=Math.floor(n+u),h=1/6,b=(f+l+c)*h,m=f-b,y=l-b,d=c-b,T=t-m,E=e-y,g=n-d,C,L,U,x,P,S;T>=E?E>=g?(C=1,L=0,U=0,x=1,P=1,S=0):T>=g?(C=1,L=0,U=0,x=1,P=0,S=1):(C=0,L=0,U=1,x=1,P=0,S=1):E<g?(C=0,L=0,U=1,x=0,P=1,S=1):T<g?(C=0,L=1,U=0,x=0,P=1,S=1):(C=0,L=1,U=0,x=1,P=1,S=0);let O=T-C+h,I=E-L+h,B=g-U+h,_=T-x+2*h,z=E-P+2*h,J=g-S+2*h,tt=T-1+3*h,X=E-1+3*h,et=g-1+3*h,lt=f&255,Pt=l&255,kt=c&255,oe=this.perm[lt+this.perm[Pt+this.perm[kt]]]%12,ae=this.perm[lt+C+this.perm[Pt+L+this.perm[kt+U]]]%12,Kt=this.perm[lt+x+this.perm[Pt+P+this.perm[kt+S]]]%12,Y=this.perm[lt+1+this.perm[Pt+1+this.perm[kt+1]]]%12,W=.6-T*T-E*E-g*g;W<0?o=0:(W*=W,o=W*W*this._dot3(this.grad3[oe],T,E,g));let dt=.6-O*O-I*I-B*B;dt<0?r=0:(dt*=dt,r=dt*dt*this._dot3(this.grad3[ae],O,I,B));let Dt=.6-_*_-z*z-J*J;Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this._dot3(this.grad3[Kt],_,z,J));let gt=.6-tt*tt-X*X-et*et;return gt<0?p=0:(gt*=gt,p=gt*gt*this._dot3(this.grad3[Y],tt,X,et)),32*(o+r+a+p)}noise4d(t,e,n,o){let r=this.grad4,a=this.simplex,p=this.perm,s=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20,f,l,c,h,b,m=(t+e+n+o)*s,y=Math.floor(t+m),d=Math.floor(e+m),T=Math.floor(n+m),E=Math.floor(o+m),g=(y+d+T+E)*u,C=y-g,L=d-g,U=T-g,x=E-g,P=t-C,S=e-L,O=n-U,I=o-x,B=P>S?32:0,_=P>O?16:0,z=S>O?8:0,J=P>I?4:0,tt=S>I?2:0,X=O>I?1:0,et=B+_+z+J+tt+X,lt=a[et][0]>=3?1:0,Pt=a[et][1]>=3?1:0,kt=a[et][2]>=3?1:0,oe=a[et][3]>=3?1:0,ae=a[et][0]>=2?1:0,Kt=a[et][1]>=2?1:0,Y=a[et][2]>=2?1:0,W=a[et][3]>=2?1:0,dt=a[et][0]>=1?1:0,Dt=a[et][1]>=1?1:0,gt=a[et][2]>=1?1:0,Yt=a[et][3]>=1?1:0,Oe=P-lt+u,v=S-Pt+u,ue=O-kt+u,Ht=I-oe+u,vt=P-ae+2*u,Et=S-Kt+2*u,fe=O-Y+2*u,Vt=I-W+2*u,Ft=P-dt+3*u,Ce=S-Dt+3*u,me=O-gt+3*u,D=I-Yt+3*u,V=P-1+4*u,k=S-1+4*u,j=O-1+4*u,K=I-1+4*u,Q=y&255,Ut=d&255,pt=T&255,Tt=E&255,Ct=p[Q+p[Ut+p[pt+p[Tt]]]]%32,rt=p[Q+lt+p[Ut+Pt+p[pt+kt+p[Tt+oe]]]]%32,ct=p[Q+ae+p[Ut+Kt+p[pt+Y+p[Tt+W]]]]%32,At=p[Q+dt+p[Ut+Dt+p[pt+gt+p[Tt+Yt]]]]%32,xt=p[Q+1+p[Ut+1+p[pt+1+p[Tt+1]]]]%32,ut=.6-P*P-S*S-O*O-I*I;ut<0?f=0:(ut*=ut,f=ut*ut*this._dot4(r[Ct],P,S,O,I));let _t=.6-Oe*Oe-v*v-ue*ue-Ht*Ht;_t<0?l=0:(_t*=_t,l=_t*_t*this._dot4(r[rt],Oe,v,ue,Ht));let A=.6-vt*vt-Et*Et-fe*fe-Vt*Vt;A<0?c=0:(A*=A,c=A*A*this._dot4(r[ct],vt,Et,fe,Vt));let nt=.6-Ft*Ft-Ce*Ce-me*me-D*D;nt<0?h=0:(nt*=nt,h=nt*nt*this._dot4(r[At],Ft,Ce,me,D));let st=.6-V*V-k*k-j*j-K*K;return st<0?b=0:(st*=st,b=st*st*this._dot4(r[xt],V,k,j,K)),27*(f+l+c+h+b)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,o){return t[0]*e+t[1]*n+t[2]*o}_dot4(t,e,n,o,r){return t[0]*e+t[1]*n+t[2]*o+t[3]*r}};var op=class i extends Ln{constructor(t,e,n=512,o=512,r,a,p){super(),this.width=n,this.height=o,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=V1(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Qe(this.width,this.height,{type:wn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Le({defines:Object.assign({},tp.defines),uniforms:In.clone(tp.uniforms),vertexShader:tp.vertexShader,fragmentShader:tp.fragmentShader,blending:_e,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Oa,this.normalMaterial.blending=_e,this.pdMaterial=new Le({defines:Object.assign({},np.defines),uniforms:In.clone(np.uniforms),vertexShader:np.vertexShader,fragmentShader:np.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Le({defines:Object.assign({},ep.defines),uniforms:In.clone(ep.uniforms),vertexShader:ep.vertexShader,fragmentShader:ep.fragmentShader,blending:_e}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Le({uniforms:In.clone($r.uniforms),vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ja,blendDst:Ui,blendEquation:Vn,blendSrcAlpha:Xa,blendDstAlpha:Ui,blendEquationAlpha:Vn}),this.blendMaterial=new Le({uniforms:In.clone(Fu.uniforms),vertexShader:Fu.vertexShader,fragmentShader:Fu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:xs,blendSrc:Ja,blendDst:Ui,blendEquation:Vn,blendSrcAlpha:Xa,blendDstAlpha:Ui,blendEquationAlpha:Vn}),this._fsQuad=new Zo(null),this._originalClearColor=new yt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),p!==void 0&&this.updatePdMaterial(p)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new yi,this.depthTexture.format=Xo,this.depthTexture.type=No,this.normalRenderTarget=new Qe(this.width,this.height,{minFilter:Ie,magFilter:Ie,type:wn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,o=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=o,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=o,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=U2(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=_e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=_e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=_e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=_e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=_e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o=e.clearColor||o,r=e.clearAlpha||r,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Nu,n=t*t*4,o=new Uint8Array(n);for(let a=0;a<t;a++)for(let p=0;p<t;p++){let s=a,u=p;o[(a*t+p)*4]=(e.noise(s,u)*.5+.5)*255,o[(a*t+p)*4+1]=(e.noise(s+t,u)*.5+.5)*255,o[(a*t+p)*4+2]=(e.noise(s,u+t)*.5+.5)*255,o[(a*t+p)*4+3]=(e.noise(s+t,u+t)*.5+.5)*255}let r=new Eo(o,t,t,on,Un);return r.wrapS=sn,r.wrapT=sn,r.needsUpdate=!0,r}};op.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ip={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Xu=class extends Ln{constructor(){super(),this.uniforms=In.clone(ip.uniforms),this.material=new Ra({name:ip.name,uniforms:this.uniforms,vertexShader:ip.vertexShader,fragmentShader:ip.fragmentShader}),this._fsQuad=new Zo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_s?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$s?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var se=i=>new yt(i),$V=new yt,HV=new R(-.99,1.9,.42).normalize();function t6(i=.35){return Zt.lights_physical_pars_fragment.replace("vec3 irradiance = dotNL * directLight.color;",`vec3 irradiance = dotNL * directLight.color;
	vec3 wrapIrradiance = clamp((dot(geometryNormal, directLight.direction) + ${i.toFixed(2)}) / ${(1+i).toFixed(2)}, 0.0, 1.0) * directLight.color;`).replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );","reflectedLight.directDiffuse += wrapIrradiance * BRDF_Lambert( material.diffuseColor );")}function S1(i=.35,t=.82){let e=new fn({vertexColors:!0,roughness:t,metalness:0});return e.customProgramCacheKey=()=>`veg${i}`,e.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",t6(i))},e}var kV={deep:se(3105856),mid:se(5808210),lit:se(10146920),tip:se(11853424)},BV={dark:se(4139548),lit:se(7754810)};var FV={deep:se(1324063),mid:se(2843175),lit:se(5741104),sun:se(9421374)};var NV={base:se(5082924),tip:se(10408527)};var XV=se(16512740),JV=se(15908655);var Ee=i=>new yt(i);var zV=new Ot,jV=new Ae,YV=new Sn,GV=new R,WV=new R;var e6={stone:Ee(11579308),stoneLight:Ee(13289668),stoneDark:Ee(9276553),mortar:Ee(7237230),roof:Ee(10898229),roofDark:Ee(8862506),roofLight:Ee(12278850),wood:Ee(10117686),woodDark:Ee(7225892),woodLight:Ee(12090183),plaster:Ee(15721156),iron:Ee(4869461),ironLight:Ee(7567493),gold:Ee(14857029),goldDark:Ee(12093994),blue:Ee(3104708),blueDark:Ee(2312860),grass:Ee(9420629),dirt:Ee(11569754),paving:Ee(13221806),canvas:Ee(13214282),canvasDark:Ee(11043898),charcoal:Ee(3881528),straw:Ee(14729314)};var n6=null;function P1(i){n6=i}var U1=14280372,o6=new R(-.99,1.9,.42).normalize();function w1(i){let t=new Mu({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=xr,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Na,t.info.autoReset=!1,P1(S1(.3,.86));let e=new ba;e.background=new yt(U1),e.fog=new da(U1,60,140);let n=new Me(30,16/9,.5,400);e.add(new Aa(13953535,6257978,.85));let o=new Pi(16773327,3.3);o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.radius=3,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.camera.near=1,o.shadow.camera.far=200,e.add(o,o.target);let r=location.search.includes("manual"),a={on:!location.search.includes("noao")},p=new ku(t,new Qe(1,1,{type:wn,samples:4}));p.addPass(new Bu(e,n));let s=new op(e,n,1,1);s.updateGtaoMaterial({radius:1.2,distanceExponent:1.6,thickness:1.2,scale:1.3,samples:12,distanceFallOff:1}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});let u=s,f=u._overrideVisibility.bind(s);u._overrideVisibility=()=>{f(),e.traverse(y=>{(y.isSprite||y.userData.noAO)&&y.visible&&(y.visible=!1,u._visibilityCache.push(y))})},p.addPass(s),p.addPass(new Xu);let l=0,c=0,h=()=>{let y=i.clientWidth||window.innerWidth,d=i.clientHeight||window.innerHeight;l=i.clientWidth,c=i.clientHeight,t.setSize(y,d,!1),p.setSize(y,d),n.aspect=y/d,n.updateProjectionMatrix()};return window.addEventListener("resize",h),typeof ResizeObserver<"u"&&new ResizeObserver(()=>h()).observe(i),h(),{renderer:t,scene:e,camera:n,sun:o,draw:()=>{i.clientWidth&&(i.clientWidth!==l||i.clientHeight!==c)&&h(),t.info.reset(),a.on?p.render():t.render(e,n)},resize:h,aimSun:(y,d)=>{o.target.position.copy(y),o.position.copy(y).addScaledVector(o6,80);let T=o.shadow.camera;T.left=-d,T.right=d,T.top=d,T.bottom=-d,T.updateProjectionMatrix()},manual:r,ao:a}}var xS=new yt;var DS={dark:se(9405305),mid:se(11773847),lit:se(14077116),moss:se(8367685)};var RS={bark:se(8011298),barkLit:se(11230515),ring:se(14262369),core:se(12944455),groove:se(5975064)};var OS={top:se(9724991),lit:se(11565643),side:se(5912613),deep:se(4139550),crack:se(15327439)};var Ju=null;function L1(){if(Ju)return Ju;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.45,"rgba(0,0,0,0.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ju=new ko(i),Ju}var C1="./assets/soldat-jeu-RISUTZOK.glb";var x1="./assets/archere-jeu-TJ352OCY.glb";var D1="./assets/colosse-jeu-77SM33LG.glb";var R1="./assets/brigand-jeu-AGABQCJG.glb";var O1="./assets/druidesse-jeu-HCATNSXO.glb";var v1="./assets/baleine-jeu-FE5ANNKN.glb";var rp={about:"The painted surroundings of a site (game/src/map/backdrop.ts): one image per kind of site, seen from the game camera (yaw, pitch), projected orthographically along its axis onto the ground. The image is w metres wide in the camera's plane (across the screen) and w * py / px metres high; its centre is the plot's centre, raised by up metres on the screen. plotHalf must be the rules' (sim/village.ts PLOT_HALF, sim/camps.ts CAMP_HALF); band: the darker border band just outside the plot, in metres. pipeline/diorama/layout.py draws the framing for the image generator; game/tools/backdrop.mjs bakes the placeholders.",camera:{yaw:45,pitch:47},village:{plotHalf:26,band:2.5,w:163.8,up:.36,px:4096,py:1728,image:"village.webp"},camp:{plotHalf:18,band:2,w:114.7,up:.34,px:4096,py:1728,image:"camp.webp"},arene:{halfX:14,halfZ:20,band:1.5,w:140,up:3,px:4096,py:1728,image:"arene.webp",about:"the auto-battler's arena (game/src/autobattler/client/backdrop.ts): a rectangle of halfX by halfZ metres, its long side along z, my edge at +z (the lower left of the screen); pipeline/diorama/layout.py draws its framing too"}};var Hr=rn.degToRad(rp.camera.yaw),Ai=rn.degToRad(rp.camera.pitch),FS={view:new R(Math.sin(Hr)*Math.cos(Ai),Math.sin(Ai),Math.cos(Hr)*Math.cos(Ai)),right:new R(Math.cos(Hr),0,-Math.sin(Hr)),up:new R(-Math.sin(Hr)*Math.sin(Ai),Math.cos(Ai),-Math.cos(Hr)*Math.sin(Ai))};function Qu(i,t){let e=i,n=-t/Math.sin(Ai),o=Math.SQRT1_2;return{x:o*(e+n),z:o*(n-e)}}var Zu="./assets/arene-E33SRDNK.webp";var zo=rp.arene,bn={w:zo.w,h:zo.w*zo.py/zo.px,up:zo.up,halfX:zo.halfX,halfZ:zo.halfZ,band:zo.band},zu=class{constructor(t){M(this,"group",new Re);M(this,"ready");M(this,"catcher");this.group.name="arena backdrop";let e=[],n=[];for(let[s,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let f=Qu(s*bn.w/2,bn.up+u*bn.h/2);e.push(f.x,0,f.z),n.push((s+1)/2,(u+1)/2)}let o=new be;o.setAttribute("position",new Xt(e,3)),o.setAttribute("uv",new Xt(n,2)),o.setIndex([0,2,1,0,3,2]),o.computeVertexNormals(),o.getAttribute("normal").getY(0)<0&&(o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals());let r=new te({toneMapped:!1,fog:!1}),a=new Qt(o,r);a.frustumCulled=!1,a.renderOrder=-2,a.visible=!1,this.group.add(a),this.catcher=new Qt(new en(2*(bn.halfX+bn.band+2),2*(bn.halfZ+bn.band+2)).rotateX(-Math.PI/2),new Lr({color:1714704,opacity:.36,depthWrite:!1})),this.catcher.position.y=.01,this.catcher.receiveShadow=!0,this.catcher.renderOrder=-1,this.group.add(this.catcher);let p=Math.min(8,t.capabilities.getMaxAnisotropy());this.ready=new ro().loadAsync(Zu).then(s=>{s.colorSpace=Te,s.anisotropy=p,s.minFilter=dn,r.map=s,r.needsUpdate=!0,a.visible=!0},()=>{})}};var M1="./assets/arene-vie-EPVTOQO6.webp";var h6=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,d6=`
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
}`,ju=class{constructor(){M(this,"group",new Re);M(this,"mat");M(this,"birds",[]);M(this,"nextFlock",4+Math.random()*6);M(this,"birdGeo",b6());M(this,"birdMat",new fn({vertexColors:!0,roughness:.8,side:hn}));M(this,"shadowGeo",new mi(.55,16).rotateX(-Math.PI/2).scale(1.4,1,.8));M(this,"shadowMat",new te({color:989704,transparent:!0,opacity:.18,depthWrite:!1,toneMapped:!1}));M(this,"ready");this.group.name="arena life";let t=[],e=[];for(let[r,a]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let p=Qu(r*bn.w/2,bn.up+a*bn.h/2);t.push(p.x,.02,p.z),e.push((r+1)/2,(a+1)/2)}let n=new be;n.setAttribute("position",new Xt(t,3)),n.setAttribute("uv",new Xt(e,2)),n.setIndex([0,2,1,0,3,2]),n.computeVertexNormals(),n.getAttribute("normal").getY(0)<0&&(n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals()),this.mat=new Le({vertexShader:h6,fragmentShader:d6,transparent:!0,depthWrite:!1,blending:Lo,toneMapped:!1,uniforms:{tMask:{value:null},uTime:{value:0},uSize:{value:new ot(bn.w,bn.h)},uUp:{value:bn.up}}});let o=new Qt(n,this.mat);o.frustumCulled=!1,o.renderOrder=-1,o.visible=!1,this.group.add(o),this.ready=new ro().loadAsync(M1).then(r=>{r.colorSpace=zn,r.minFilter=Xe,r.generateMipmaps=!1,this.mat.uniforms.tMask.value=r,o.visible=!0},()=>{})}frame(t){this.mat.uniforms.uTime.value+=t,this.nextFlock-=t,this.nextFlock<=0&&this.birds.length===0&&(this.flock(),this.nextFlock=14+Math.random()*14),this.birds=this.birds.filter(e=>{e.t+=t;let n=e.root.position.copy(e.from).addScaledVector(e.dir,e.t*6.5);n.y=e.from.y+Math.sin(e.t*.7+e.phase)*.6;let o=Math.sin(e.t*9+e.phase)*(.5+.5*Math.max(0,Math.sin(e.t*.9+e.phase)));return e.wings[0].rotation.z=.15+o*.55,e.wings[1].rotation.z=-.15-o*.55,e.shadow.position.set(n.x+n.y*.52,.04,n.z-n.y*.22),e.t>22?(this.group.remove(e.root,e.shadow),!1):!0})}flock(){let t=new R(1,0,-1).normalize(),e=new R(-1,0,-1).normalize(),n=(Math.random()-.5)*.5,o=t.clone().addScaledVector(e,n).normalize();Math.random()<.5&&o.negate();let r=o.clone().multiplyScalar(-72).addScaledVector(e,(Math.random()-.5)*24),a=3+Math.floor(Math.random()*3);for(let p=0;p<a;p++){let s=new Re,u=new Qt(this.birdGeo.body,this.birdMat),f=new Qt(this.birdGeo.wing,this.birdMat),l=new Qt(this.birdGeo.wing,this.birdMat);l.scale.x=-1,s.add(u,f,l),s.scale.setScalar(.9+Math.random()*.3);let c=new R(-o.z,0,o.x),h=r.clone().addScaledVector(o,-p*1.8-Math.random()).addScaledVector(c,(p%2?1:-1)*Math.ceil(p/2)*1.6);h.y=13+Math.random()*3,s.position.copy(h),s.rotation.y=Math.atan2(o.x,o.z);let b=new Qt(this.shadowGeo,this.shadowMat);b.rotation.y=s.rotation.y,b.renderOrder=1,this.group.add(s,b),this.birds.push({root:s,wings:[f,l],shadow:b,from:h,dir:o,t:0,phase:Math.random()*6.283})}}};function b6(){let i=(n,o)=>{let r=n.getAttribute("position").count,a=[];for(let p=0;p<r;p++)a.push(...o.slice(p%(o.length/3)*3,p%(o.length/3)*3+3));return n.setAttribute("color",new Xt(a,3)),n},t=new Sr(.13,.75,5).rotateX(Math.PI/2);i(t,[.96,.96,.94]);let e=new be;return e.setAttribute("position",new Xt([0,0,.18,0,0,-.16,.55,.05,.06,.55,.05,.06,0,0,-.16,.6,.02,-.12,.55,.05,.06,.6,.02,-.12,1.05,-.04,-.08],3)),e.setAttribute("color",new Xt([.93,.94,.95,.93,.94,.95,.86,.88,.9,.86,.88,.9,.93,.94,.95,.86,.88,.9,.86,.88,.9,.86,.88,.9,.2,.2,.22],3)),e.computeVertexNormals(),{body:t,wing:e}}var an=q.arena,Yu=rn.degToRad(45),kr=rn.degToRad(47),A1=20,y6=new R(-.99,1.9,.42).normalize(),L2={top:52,bottom:26,side:18},m6=2.6,ap={barbarian:{url:C1,height:1.7},archer:{url:x1,height:1.65},tank:{url:D1,height:2.6},assassin:{url:R1,height:1.75},druid:{url:O1,height:1.95,blow:16},whale:{url:v1,height:2,bar:3.6,blow:16}},g6=.82,pp=new yt(4164863),sp=new yt(16729943),Wu=class{constructor(t){M(this,"stage");M(this,"scene");M(this,"group",new Re);M(this,"kinds",{});M(this,"figs",new Map);M(this,"side",0);M(this,"battle",null);M(this,"zoneRing");M(this,"zoneMat");M(this,"noDrop");M(this,"noDropMat");M(this,"outside");M(this,"redK",0);M(this,"aimedAt","");M(this,"fit",{dist:120,target:new R});M(this,"zoom",1);M(this,"pan",new R);M(this,"placedAt","");M(this,"backdrop");M(this,"life",new ju);M(this,"halos");M(this,"rings");M(this,"blobs");M(this,"bars");M(this,"fills");M(this,"marks");M(this,"arrows",[]);M(this,"arrowGeo",new to(.025,.025,.7,4).rotateX(Math.PI/2));M(this,"arrowMat",new te({color:5913372}));M(this,"eclat");M(this,"eclatMat");M(this,"eclatK",0);M(this,"fxs",[]);M(this,"shardGeo",new xa(.32,0).scale(.7,1.3,.7));M(this,"shardMat",new fn({color:7336686,emissive:4184544,emissiveIntensity:.9,roughness:.3}));M(this,"boltMat",new te({color:15262975,transparent:!0,depthWrite:!1,blending:Lo}));M(this,"boltGeo",new to(.07,.07,1,5).translate(0,.5,0));M(this,"ringGeo",new Bo(.86,1,48).rotateX(-Math.PI/2));M(this,"discGeo",new mi(1,40).rotateX(-Math.PI/2));M(this,"raycaster",new Fa);M(this,"plane",new On(new R(0,1,0),0));M(this,"time",0);M(this,"lastTick",-1);M(this,"frameNo",0);M(this,"jsMs",0);M(this,"ready");M(this,"showRed",!1);this.stage=w1(t),this.stage.ao.on=!1,this.stage.sun.shadow.mapSize.set(2048,2048),this.scene=this.stage.scene,this.scene.fog=null,this.scene.background=new yt(4086316),this.stage.camera.fov=A1,this.backdrop=new zu(this.stage.renderer),this.scene.add(this.backdrop.group,this.life.group,this.group),this.zoneMat=new te({map:C2(an.zoneRadius,"rgba(255,252,228,0.10)"),color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}),this.zoneRing=new Qt(new en(2*an.zoneRadius+.6,2*an.zoneRadius+.6).rotateX(-Math.PI/2),this.zoneMat),this.zoneRing.position.set(0,.03,0),this.zoneRing.renderOrder=1,this.eclatMat=new te({map:V6(),color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.35}),this.eclat=new Qt(new en(6.6,6.6).rotateX(-Math.PI/2),this.eclatMat),this.eclat.position.y=.025,this.eclat.renderOrder=1,this.noDropMat=new te({map:C2(an.noDropRadius,"rgba(176,62,40,0.5)","rgba(255,222,212,0.95)"),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}),this.noDrop=new Qt(new en(2*an.noDropRadius+.6,2*an.noDropRadius+.6).rotateX(-Math.PI/2),this.noDropMat),this.noDrop.position.y=.04,this.noDrop.visible=!1,this.noDrop.renderOrder=2,this.outside=new Qt(E6(an.width/2,an.length/2,120),new te({color:1317386,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1})),this.outside.position.y=.05,this.outside.visible=!1,this.outside.renderOrder=2,this.scene.add(this.outside);let e=new te({map:C2(an.enemyHalo,"rgba(176,62,40,0.5)","rgba(255,222,212,0.95)"),transparent:!0,depthWrite:!1,toneMapped:!1});this.halos=new Mn(new en(2*an.enemyHalo+.6,2*an.enemyHalo+.6).rotateX(-Math.PI/2),e,260),this.halos.count=0,this.halos.position.y=.045,this.halos.frustumCulled=!1,this.rings=new Mn(new Bo(.4,.48,32).rotateX(-Math.PI/2),new te({color:16777215,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),400),this.blobs=new Mn(new en(1.15,1.15).rotateX(-Math.PI/2),new te({map:L1(),color:1055240,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1}),400),this.blobs.count=0,this.blobs.frustumCulled=!1,this.blobs.renderOrder=0,this.rings.count=0,this.rings.frustumCulled=!1,this.marks=new Mn(new Bo(.25,.42,16).rotateX(-Math.PI/2),new te({color:16777215,transparent:!0,opacity:.9,depthWrite:!1}),120),this.marks.count=0,this.marks.frustumCulled=!1;let n=new en(1,.13);this.bars=new Mn(n,new te({color:1774604,depthTest:!1,transparent:!0,opacity:.8}),400),this.fills=new Mn(n.clone().translate(.5,0,0),new te({color:16777215,depthTest:!1}),400);for(let o of[this.bars,this.fills])o.count=0,o.frustumCulled=!1,o.renderOrder=10;this.group.add(this.eclat,this.blobs,this.zoneRing,this.noDrop,this.halos,this.rings,this.marks,this.bars,this.fills),this.aim(),this.ready=Promise.all([this.load(),this.backdrop.ready,this.life.ready]).then(()=>{})}aim(){let t=this.stage.camera,e=this.stage.renderer.domElement,n=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight,r=`${n}x${o}`;r!==this.aimedAt&&(this.aimedAt=r,this.frame0(t,n,o),this.placedAt="");let a=1-1/this.zoom,p=an.width/2*a,s=an.length/2*a;this.pan.x=rn.clamp(this.pan.x,-p-this.fit.target.x,p-this.fit.target.x),this.pan.z=rn.clamp(this.pan.z,-s-this.fit.target.z,s-this.fit.target.z),this.zoom<=1.0001&&this.pan.set(0,0,0);let u=`${this.zoom.toFixed(4)}:${this.pan.x.toFixed(3)}:${this.pan.z.toFixed(3)}`;if(u===this.placedAt)return;this.placedAt=u;let f=new R(Math.sin(Yu)*Math.cos(kr),Math.sin(kr),Math.cos(Yu)*Math.cos(kr)),l=this.fit.target.clone().add(this.pan);t.position.copy(l).addScaledVector(f,this.fit.dist/this.zoom),t.lookAt(l),t.updateMatrixWorld(!0),this.stage.aimSun(l,30),this.stage.sun.position.copy(l).addScaledVector(y6,120)}zoomAt(t,e,n,o){let r=this.groundAt(e,n,o);this.zoom=rn.clamp(this.zoom*t,1,m6),this.aim();let a=this.groundAt(e,n,o);r&&a&&(this.pan.x+=r.x-a.x,this.pan.z+=r.z-a.z),this.aim()}panScreen(t,e,n,o,r){let a=this.groundAt(t,e,r),p=this.groundAt(n,o,r);a&&p&&(this.pan.x+=a.x-p.x,this.pan.z+=a.z-p.z,this.aim())}resetView(){this.zoom=1,this.pan.set(0,0,0),this.aim()}groundAt(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new ot(p,s),this.stage.camera);let u=new R;return this.raycaster.ray.intersectPlane(this.plane,u)?u:null}frame0(t,e,n){t.fov=A1,t.aspect=e/n,t.near=1,t.far=600;let o=new R(Math.sin(Yu)*Math.cos(kr),Math.sin(kr),Math.cos(Yu)*Math.cos(kr)),r=new R(-1,0,-1).normalize(),a=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,b])=>new R(h*an.width/2,0,b*an.length/2)),p={x:1-2*L2.side/e,top:1-2*L2.top/n,bottom:-1+2*L2.bottom/n},s=new R,u=new R,f=(h,b)=>{s.copy(r).multiplyScalar(h),t.position.copy(s).addScaledVector(o,b),t.lookAt(s),t.updateProjectionMatrix(),t.updateMatrixWorld(!0)},l=()=>a.every(h=>(u.copy(h).project(t),Math.abs(u.x)<=p.x&&u.y<=p.top&&u.y>=p.bottom)),c={dist:400,shift:0};for(let h=-6;h<=6;h+=.25){let b=20,m=400;if(f(h,m),!!l()){for(let y=0;y<40;y++){let d=(b+m)/2;f(h,d),l()?m=d:b=d}m<c.dist&&(c={dist:m,shift:h})}}f(c.shift,c.dist),this.fit={dist:c.dist,target:s.clone()}}async load(){let t=e=>new Promise((n,o)=>E1(e,n,o));await Promise.all([...qt.map(async e=>{let n=await t(ap[e].url),o=new tn().setFromObject(n.scene),r=o.max.y-o.min.y||1;n.scene.traverse(a=>{let p=a;if(p.isMesh&&(p.castShadow=!0,p.frustumCulled=!1,e==="whale")){let s=p.material;s.transparent=!0,s.opacity=g6,s.depthWrite=!0}}),this.kinds[e]={template:n.scene,clips:n.animations,scale:ap[e].height/r}})])}setSide(t){this.side=t,this.group.rotation.y=t===1?Math.PI:0}setBattle(t){if(t!==this.battle){for(let e of this.figs.values())this.group.remove(e.root);for(let e of this.arrows)this.group.remove(e.m);for(let e of this.fxs)this.group.remove(e.obj);this.figs.clear(),this.arrows=[],this.fxs=[],this.battle=t}}at(t,e,n=new R){return n.set(t-Do,0,kn-e)}pick(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new ot(p,s),this.stage.camera);let u=new R;if(!this.raycaster.ray.intersectPlane(this.plane,u))return null;let f=this.side===1?-u.x:u.x,l=this.side===1?-u.z:u.z;return{x:f+Do,y:kn-l}}frame(t,e){this.time+=t,this.frameNo++;let n=performance.now(),o=this.battle,r=new Ot,a=new Ae,p=new R,s=new R(1,1,1),u=o?o.zoneShare[this.side]:0,f=o?o.zoneShare[1-this.side]:0,l=u>f?pp:f>u?sp:u>0?16765770:16777215;this.zoneMat.color.set(l),this.eclatK+=((u>0||f>0?1:0)-this.eclatK)*(1-Math.exp(-t*5)),this.eclatMat.color.set(l),this.eclatMat.opacity=.3+this.eclatK*(.5+.15*Math.sin(this.time*4)),this.aim(),this.life.frame(t);let c=this.showRed&&o?1:0;this.redK+=(c-this.redK)*(1-Math.exp(-t*(c?12:4)));let h=this.redK>.01;this.noDrop.visible=h,this.noDropMat.opacity=this.redK,this.outside.visible=h,this.outside.material.opacity=.34*this.redK,this.halos.material.opacity=this.redK;let b=0;if(h&&o)for(let U of o.units)U.alive&&U.side!==this.side&&b<this.halos.instanceMatrix.count&&(this.at(U.x,U.y,p),r.makeTranslation(p.x,0,p.z),this.halos.setMatrixAt(b++,r));if(this.halos.count=b,this.halos.instanceMatrix.needsUpdate=!0,!o){this.rings.count=0,this.blobs.count=0,this.bars.count=0,this.fills.count=0,this.marks.count=0;for(let U of this.fxs)this.group.remove(U.obj);this.fxs=[],this.stage.draw();return}let m=this.stage.camera.quaternion.clone().premultiply(this.group.quaternion.clone().invert()),y=0,d=0,T=new yt,E=o.tick!==this.lastTick;this.lastTick=o.tick;for(let U of o.units){let x=this.figs.get(U.id);if(!x&&(!U.alive||(x=this.make(U),!x)))continue;E&&(x.px=x.cx,x.py=x.cy,x.cx=U.x,x.cy=U.y);let P=x.px+(x.cx-x.px)*e,S=x.py+(x.cy-x.py)*e,O=Math.abs(x.cx-x.px)+Math.abs(x.cy-x.py)>.004;this.at(P,S,x.root.position);let I=Math.max(0,1-(o.tick-x.born+e)*Ke/.3);x.root.position.y=I*I*3;let B=x.ry;if(U.target&&U.target.alive?B=Math.atan2(U.target.x-U.x,-(U.target.y-U.y)):O&&(B=Math.atan2(x.cx-x.px,-(x.cy-x.py))),x.ry=T6(x.ry,B,t*10),x.root.rotation.y=x.ry,U.alive)if(U.struck!==x.struck&&U.struck>=0){x.struck=U.struck,Gu(x,"attack",!0,Math.max(1,.9/U.period));let J=ap[U.kind].blow,tt=x.actions.attack;J!==void 0&&tt&&(tt.time=Math.max(0,J/30-.12)),U.kind==="archer"&&U.target&&this.shoot(U,U.target),U.kind==="whale"&&U.target&&this.shard(x,U.target,U.splash),U.kind==="druid"&&U.target&&this.lightning(U.target.x,U.target.y,U.splash)}else(x.current!=="attack"||!x.actions.attack?.isRunning())&&Gu(x,O?"run":"idle",!1,O?U.speed/2.6:1);else if(x.dead||(x.dead=this.time,Gu(x,"death",!0)),this.time-x.dead>1.6&&(x.root.position.y-=(this.time-x.dead-1.6)*.8),this.time-x.dead>2.6){this.group.remove(x.root),this.figs.delete(U.id);continue}if(this.figs.size<=80?x.mixer.update(t):(this.frameNo+U.id)%2===0&&x.mixer.update(t*2),U.cried!==x.cried&&U.cried>=0&&(x.cried=U.cried,this.cry(x.root.position,U.side===this.side?pp:sp)),!U.alive)continue;let _=U.radius/.35*.75,z=U.kind==="whale";if(r.compose(p.set(x.root.position.x,.03,x.root.position.z),a.identity(),new R(_*(z?.8:1),1,_*(z?.8:1))),this.blobs.setMatrixAt(y,r),r.compose(p.set(x.root.position.x,.05,x.root.position.z),a.identity(),new R(_,1,_)),this.rings.setMatrixAt(y,r),this.rings.setColorAt(y++,U.side===this.side?pp:sp),U.hp<U.maxHp&&d<400){let J=U.kind==="tank"||U.kind==="whale"?1.5:.9,tt=ap[U.kind].bar??ap[U.kind].height+.35;r.compose(p.set(x.root.position.x,tt,x.root.position.z),m,new R(J,1,1)),this.bars.setMatrixAt(d,r);let X=Math.max(.02,U.hp/U.maxHp),et=new R(-J/2,0,0).applyQuaternion(m);r.compose(p.set(x.root.position.x+et.x,tt+et.y,x.root.position.z+et.z),m,new R(J*X,1,1)),this.fills.setMatrixAt(d,r),this.fills.setColorAt(d++,T.copy(U.side===this.side?pp:sp))}}this.rings.count=y,this.rings.instanceMatrix.needsUpdate=!0,this.blobs.count=y,this.blobs.instanceMatrix.needsUpdate=!0,this.rings.instanceColor&&(this.rings.instanceColor.needsUpdate=!0),this.bars.count=d,this.fills.count=d,this.bars.instanceMatrix.needsUpdate=!0,this.fills.instanceMatrix.needsUpdate=!0,this.fills.instanceColor&&(this.fills.instanceColor.needsUpdate=!0);let g=0,C=1+.25*Math.sin(this.time*14);for(let U of o.pendingDrops()){if(g>=120)break;this.at(U.x,U.y,p),r.compose(p.setY(.06),a.identity(),s.clone().multiplyScalar(C)),this.marks.setMatrixAt(g,r),this.marks.setColorAt(g++,U.side===this.side?pp:sp)}this.marks.count=g,this.marks.instanceMatrix.needsUpdate=!0,this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0),this.jsMs=performance.now()-n,this.arrows=this.arrows.filter(U=>(U.t+=t/.22,U.t>=1?(this.group.remove(U.m),!1):(U.m.position.lerpVectors(U.from,U.to,U.t),U.m.position.y+=Math.sin(U.t*Math.PI)*.8,U.m.lookAt(U.to.x,U.m.position.y,U.to.z),!0)));let L=this.fxs;this.fxs=[];for(let U of L){if(U.t+=t/U.dur,U.t>=1){this.group.remove(U.obj);continue}this.fxs.push(U),U.tick(U.t)}this.stage.draw()}shard(t,e,n){let o=new R;t.blowhole?(t.blowhole.getWorldPosition(o),this.group.worldToLocal(o)):o.copy(t.root.position).setY(3.5);let r=this.at(e.x,e.y).setY(.3),a=new Qt(this.shardGeo,this.shardMat);this.group.add(a);let p=!1;this.fxs.push({obj:a,t:0,dur:.32,tick:s=>{a.position.lerpVectors(o,r,s),a.position.y+=Math.sin(s*Math.PI)*.6,a.rotation.set(s*6,s*9,0),s>.92&&!p&&(p=!0,this.impact(r,n+.35))}})}impact(t,e){let n=new Re,o=new Qt(this.discGeo,new te({color:4184532,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),r=new Qt(this.ringGeo,new te({color:12124153,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,blending:Lo}));o.position.set(t.x,.07,t.z),r.position.set(t.x,.075,t.z),n.add(o,r);let a=[];for(let p=0;p<5;p++){let s=new Qt(this.shardGeo,this.shardMat),u=p/5*Math.PI*2+.4;s.scale.setScalar(.6),n.add(s),a.push({m:s,a:u})}this.group.add(n),this.fxs.push({obj:n,t:0,dur:.42,tick:p=>{let s=.7+.3*Math.min(1,p*4);o.scale.setScalar(e*s),r.scale.setScalar(e*s),o.material.opacity=.5*(1-p),r.material.opacity=.9*(1-p);for(let u of a)u.m.position.set(t.x+Math.cos(u.a)*e*p,.15+Math.sin(p*Math.PI)*.5,t.z+Math.sin(u.a)*e*p),u.m.rotation.set(p*8,u.a+p*5,0),u.m.visible=p<.8}})}lightning(t,e,n){let o=new Re,r=this.at(t,e),a=r.clone().add(new R(.6,9,-.4));for(let s=0;s<6;s++){let u=s===5?r.clone():a.clone().lerp(r,1/(6-s)).add(new R((Math.random()-.5)*.9,0,(Math.random()-.5)*.9)),f=new Qt(this.boltGeo,this.boltMat),l=u.clone().sub(a);f.position.copy(a),f.scale.set(1,l.length(),1),f.quaternion.setFromUnitVectors(new R(0,1,0),l.normalize()),o.add(f),a=u}let p=new Qt(this.discGeo,new te({color:13616383,transparent:!0,opacity:.6,depthWrite:!1,blending:Lo}));p.position.set(r.x,.07,r.z),p.scale.setScalar(n+.35),o.add(p),this.group.add(o),this.fxs.push({obj:o,t:0,dur:.38,tick:s=>{this.boltMat.opacity=s<.5?1:2*(1-s),p.material.opacity=.6*(1-s),o.children.forEach((u,f)=>{u!==p&&(u.visible=s<.35||(f+Math.floor(s*20))%2===0)})}})}cry(t,e){let n=new Qt(this.ringGeo,new te({color:e,transparent:!0,opacity:.85,depthWrite:!1}));n.position.set(t.x,.08,t.z),this.group.add(n);let o=q.taunt.radius;this.fxs.push({obj:n,t:0,dur:.5,tick:r=>{n.scale.setScalar(.8+(o-.8)*r),n.material.opacity=.85*(1-r)}})}make(t){let e=this.kinds[t.kind];if(!e)return null;let n=h1(e.template);n.scale.setScalar(e.scale),this.figs.size>70&&n.traverse(p=>{p.castShadow=!1}),this.group.add(n);let o=new Ba(n),r={};for(let p of e.clips){let s=o.clipAction(p);(p.name==="death"||p.name==="attack"||p.name==="hit")&&(s.setLoop(Lu,1),s.clampWhenFinished=!0),r[p.name]=s}let a={root:n,mixer:o,actions:r,current:"",px:t.x,py:t.y,cx:t.x,cy:t.y,ry:t.side===0?Math.PI:0,struck:-1,dead:0,born:t.born,phase:t.id*.618%1,cried:-1,blowhole:n.getObjectByName("blowhole")??null};return Gu(a,"idle"),this.figs.set(t.id,a),a}shoot(t,e){let n=new Qt(this.arrowGeo,this.arrowMat),o={m:n,from:this.at(t.x,t.y).setY(1),to:this.at(e.x,e.y).setY(.7),t:0};this.group.add(n),this.arrows.push(o)}get drawn(){return this.figs.size}};function Gu(i,t,e=!1,n=1){let o=i.actions[t]??(t==="run"?i.actions.walk:void 0);if(!o||(o.timeScale=n,i.current===t&&!e))return;let r=i.actions[i.current];o.reset(),o.setEffectiveWeight(1),o.play(),(t==="idle"||t==="run")&&(o.time=i.phase*o.getClip().duration),r&&r!==o&&r.crossFadeTo(o,t==="attack"?.08:.18,!1),i.current=t}var T6=(i,t,e)=>{let n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+Math.sign(n)*Math.min(Math.abs(n),e)};function C2(i,t,e="rgba(255,255,255,0.9)"){let n=2*i+.6,o=512/n,r=document.createElement("canvas");r.width=r.height=512;let a=r.getContext("2d"),p=256;a.fillStyle=t,a.beginPath(),a.arc(p,p,i*o,0,Math.PI*2),a.fill(),a.setLineDash([1.6*o*Math.min(1,i/4),1.1*o*Math.min(1,i/4)]),a.lineWidth=.3*o,a.strokeStyle=e,a.beginPath(),a.arc(p,p,i*o-.15*o,0,Math.PI*2),a.stroke();let s=new ko(r);return s.colorSpace=Te,s.anisotropy=4,s}function E6(i,t,e){let n=new Ti([new ot(-e,-e),new ot(e,-e),new ot(e,e),new ot(-e,e)]);return n.holes.push(new gi([new ot(-i,-t),new ot(-i,t),new ot(i,t),new ot(i,-t)])),new Da(n).rotateX(-Math.PI/2)}function V6(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=128,n=256/6.6,o=2.26*.97*n/(.7*1.35),r=t.createRadialGradient(e,e,0,e,e,o*1.35);r.addColorStop(0,"rgba(255,255,255,0.35)"),r.addColorStop(.55,"rgba(255,255,255,0.18)"),r.addColorStop(.7,"rgba(255,255,255,0.75)"),r.addColorStop(.76,"rgba(255,255,255,0.25)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,256,256);let a=new ko(i);return a.colorSpace=Te,a}function Ii(...i){let t=2166136261;for(let e of i){let n=e|0;for(let o=0;o<4;o++)t^=n&255,t=Math.imul(t,16777619),n>>>=8}return t^=t>>>16,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}var jo=class{constructor(t){M(this,"s");this.s=t>>>0}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}int(t){return Math.floor(this.next()*t)}range(t,e){return t+(e-t)*this.next()}pick(t){return t[this.int(t.length)]}weighted(t){let e=0;for(let o of t)e+=o;let n=this.next()*e;for(let o=0;o<t.length;o++)if(n-=t[o],n<0)return o;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){let n=this.int(e+1);[t[e],t[n]]=[t[n],t[e]]}return t}};var S6=["Brann","Ysolde","Korgan","Ma\xEBlis","Torvik","Sigrun","Aldric","Nessa"];function I1(i,t){let e=[];for(let n=0;n<q.match.players;n++){let o=n<t.length;e.push({seat:n,name:o?t[n]:S6[n],human:o,hp:q.hp.start,gold:0,places:q.army.startPlaces,army:Bn(),up:Zr(),offers:[],rerolls:0,out:null,lastOpp:null,here:!o,profile:N1(Ii(i,7,n))})}return{seed:i,round:0,phase:"lobby",players:e,pairs:[],history:[]}}var Br=i=>i.players.filter(t=>!t.out);function P6(i){let t=Math.min(1,Math.max(0,(i-1)/(q.lateRound-1)));return q.rarities.map(e=>e.early+(e.late-e.early)*t)}function _1(i,t,e,n){let o=new jo(Ii(i,11,t,e,n)),r=P6(e),a=[];for(let p=0;p<q.economy.offers;p++){let s=o.pick(qt),u=Ji.filter(f=>f!=="range"||q.troops[s].rangeUpgradable);a.push({kind:s,stat:o.pick(u),rarity:o.weighted(r)})}return a}var _i=i=>q.rarities[i.rarity].cost,x2=i=>q.rarities[i.rarity].bonus;function $1(i){if(i.phase!=="over"){i.round++,i.phase="prep";for(let t of Br(i))t.gold+=q.economy.goldPerRound+(i.round===1?q.economy.startGold:0),t.rerolls=0,t.offers=_1(i.seed,t.seat,i.round,0),t.here=!t.human;i.pairs=w6(i);for(let t of Br(i))t.human||X1(i,t)}}function uo(i,t,e){let n=i.players[t];if(!n||n.out||i.phase!=="prep")return!1;switch(e.k){case"here":return n.here=!0,!0;case"buy":{let o=n.offers[e.slot];return!o||n.gold<_i(o)?!1:(n.gold-=_i(o),n.up[o.kind][o.stat]+=x2(o),n.offers[e.slot]=null,!0)}case"reroll":return n.gold<q.economy.reroll?!1:(n.gold-=q.economy.reroll,n.rerolls++,n.offers=_1(i.seed,t,i.round,n.rerolls),!0);case"cap":return n.gold<q.army.stepCost||n.places>=q.army.maxPlaces?!1:(n.gold-=q.army.stepCost,n.places=Math.min(q.army.maxPlaces,n.places+q.army.step),!0);case"army":{let o=Bn();for(let r of qt){let a=e.army[r]??0;if(!Number.isInteger(a)||a<0)return!1;o[r]=a}return Gn(o)>n.places?!1:(n.army=o,!0)}}}function H1(i){i.phase==="prep"&&(i.phase="battle")}function D2(i,t){let e=i.players[t];return{counts:{...e.army},upgrades:e.up}}function k1(i,t,e){if(e===1&&t.ghost)return null;let n=i.players[e===0?t.a:t.b];return n.human?n.seat:null}var B1=(i,t)=>Ii(i.seed,13,i.round,t);function U6(i,t){let e=q.hp.damage;return Math.min(e.max,Math.ceil(e.base+e.perRound*i+e.perPlace*t))}function F1(i,t){if(i.phase!=="battle")throw new Error("resolve outside a battle");let e=[],n=Br(i).length;i.pairs.forEach((a,p)=>{let s=t[p],u=0,f=null;!a.ghost&&s.winner!==-1&&(f=s.winner===0?a.b:a.a,u=U6(i.round,s.places[s.winner]),i.players[f].hp-=u),i.players[a.a].lastOpp=a.b,a.ghost||(i.players[a.b].lastOpp=a.a),e.push({pair:a,result:s,damage:u,loser:f})});let o=Br(i).filter(a=>a.hp<=0).sort((a,p)=>p.hp-a.hp||a.seat-p.seat);o.forEach((a,p)=>{a.out={round:i.round,place:n-o.length+1+p}}),i.history.push(e);let r=Br(i);return r.length<=1||i.round>=q.maxRounds?(r.sort((a,p)=>p.hp-a.hp||a.seat-p.seat).forEach((a,p)=>{a.out={round:i.round,place:p+1}}),i.phase="over"):i.phase="prep",e}function R2(i){return[...i.players].sort((t,e)=>t.out&&e.out?t.out.place-e.out.place:t.out?1:e.out?-1:e.hp-t.hp||t.seat-e.seat)}function w6(i){let t=new jo(Ii(i.seed,17,i.round)),e=Br(i).map(a=>a.seat),n=null,o=-1/0,r=1/0;for(let a=0;a<q.match.pairingTries;a++){let p=t.shuffle([...e]),s=[],u=0,f=t.next();for(let l=0;l+1<p.length;l+=2){let c=i.players[p[l]],h=i.players[p[l+1]];(c.lastOpp===h.seat||h.lastOpp===c.seat)&&u++,c.human&&h.human&&(f+=q.match.humanPairWeight),s.push({a:c.seat,b:h.seat,ghost:!1})}if(p.length%2){let l=p[p.length-1],c=p.slice(0,-1).filter(b=>b!==i.players[l].lastOpp),h=c.length?c[t.int(c.length)]:p[0];i.players[l].lastOpp===h&&u++,s.push({a:l,b:h,ghost:!0})}(u<r||u===r&&f>o)&&(n=s,o=f,r=u)}return n.map(a=>!a.ghost&&t.next()<.5?{a:a.b,b:a.a,ghost:!1}:a)}function up(i,t){for(let e of i.pairs){if(e.a===t)return{seat:e.b,ghost:e.ghost,side:0};if(e.b===t&&!e.ghost)return{seat:e.a,ghost:!1,side:1}}return null}var yn=q.arena,jn=q.bots;function N1(i){let t=new jo(i),e=t.pick(qt),n=t.pick(qt.filter(f=>f!==e)),o={},r=t.range(.45,.65),a=t.range(.2,.35),p=Math.max(0,1-r-a),s=qt.filter(f=>f!==e&&f!==n);for(let f of s)o[f]=p*t.range(0,1);let u=s.reduce((f,l)=>f+o[l],0)||1;for(let f of s)o[f]=o[f]/u*p;return o[e]=r,o[n]=a,{weights:o,lane:t.range(-6,6)}}var L6={hp:1,damage:1,attackSpeed:1,moveSpeed:.45,range:.7},C6=(i,t)=>i.profile.weights[t]>=jn.playedShare||i.army[t]>0&&i.profile.weights[t]>.05;function X1(i,t){let e=t.seat;uo(i,e,{k:"here"});let n=i.round<=jn.capacityEagerUntil;n&&uo(i,e,{k:"cap"});let o=()=>{let s=0,u=t.offers.map((f,l)=>({o:f,i:l})).filter(f=>f.o&&C6(t,f.o.kind)).sort((f,l)=>J1(t,l.o)-J1(t,f.o)||f.i-l.i);for(let{o:f,i:l}of u)t.gold>=_i(f)&&uo(i,e,{k:"buy",slot:l})&&s++;return s},r=o();for(;!r&&t.rerolls<jn.rerollsPerRound&&t.gold>=q.economy.reroll+3;)uo(i,e,{k:"reroll"}),r=o();for(;!n&&t.gold>=q.army.stepCost&&t.places<q.army.maxPlaces;)uo(i,e,{k:"cap"});let a=up(i,e),p=a?i.players[a.seat]:null;uo(i,e,{k:"army",army:x6(t,p?p.army:null)})}var J1=(i,t)=>i.profile.weights[t.kind]*L6[t.stat]*x2(t)/_i(t);function x6(i,t=null){let e={},n=0;for(let p of qt){let s=i.up[p],u=i.profile.weights[p];e[p]=u<.04?0:u*(1+1.2*(s.hp+s.damage+s.attackSpeed+.5*(s.moveSpeed+s.range))),n+=e[p]}if(t){let p=Gn(t),s=p?t.whale*q.troops.whale.places/p:0;if(s>0){let u=n*Math.min(.6,.9*s);e.archer+=u,n+=u}}let o=Bn(),r=i.places;for(let p of qt)o[p]=Math.floor(r*e[p]/n/q.troops[p].places);let a=r-Gn(o);for(;a>0;){let p=null,s=-1/0;for(let u of qt){let f=q.troops[u].places;if(f>a||e[u]===0)continue;let l=r*e[u]/n-o[u]*f;l>s&&(s=l,p=u)}p||(p="barbarian"),o[p]++,a-=q.troops[p].places}return o}function D6(i){let t={...i,assassin:0},e=qt.reduce((r,a)=>r+t[a],0),n=[],o=Bn();for(let r=0;r<e;r++){let a=null,p=-1/0;for(let s of qt){if(o[s]>=t[s])continue;let u=(r+1)*(t[s]/e)-o[s]+(s==="tank"||s==="whale"?.5:0);u>p&&(p=u,a=s)}n.push(a),o[a]++}for(let r=0;r<i.assassin;r++)n.push("assassin");return n}var Ku=class{constructor(t,e,n,o=0,r=!1){M(this,"side",t);M(this,"lane",o);M(this,"wave",[]);M(this,"counter",[]);M(this,"reserve",[]);M(this,"queue",[]);M(this,"sent",{wave:!1,counter:!1,reserve:!1});M(this,"waveAt");M(this,"next",0);M(this,"seq",0);M(this,"rng");this.rng=new jo(e);let a=D6(n),p=Gn(n),s=0;for(let u of a){let f=s/Math.max(1,p);!r&&f<jn.firstWave?this.wave.push(u):f<(r?.5:jn.firstWave+jn.counter)?this.counter.push(u):this.reserve.push(u),s+=q.troops[u].places}r&&(this.sent.wave=!0),this.waveAt=jn.firstWaveTicks[0]+this.rng.int(jn.firstWaveTicks[1]-jn.firstWaveTicks[0]+1)}think(t){let e=this.side,n=1-e,o=t.tick;if(!this.sent.wave&&o>=this.waveAt&&(this.sent.wave=!0,this.formation(this.wave)),o%5===0){let p=t.inZone[n]>0&&Qr(t.inZone[e])*t.zoneShare[e]<Qr(t.inZone[n])*t.zoneShare[n];p&&!this.sent.counter?(this.sent.counter=!0,this.toRing(t,this.counter)):p&&!this.sent.reserve&&!this.queue.length&&t.gauges[n]>20&&this.releaseReserve(t);let s=t.time,u=t.alive(e).length;!this.sent.reserve&&(s>jn.reserveAfter&&t.gauges[e]<=t.gauges[n]||t.gauges[n]>jn.reserveGauge||this.sent.wave&&u===0&&!this.queue.length||s>q.battle.maxSeconds-12)&&this.releaseReserve(t)}if(!this.queue.length||o<this.next)return[];let r=this.queue[0],a=this.findSpot(t,r.ox,r.oy);return a?(this.queue.shift(),this.next=o+Math.round(q.tickHz/q.battle.dropRate),[{tick:o,side:e,kind:r.kind,x:a[0],y:a[1],seq:this.seq++}]):(this.queue.push(this.queue.shift()),this.next=o+2,[])}releaseReserve(t){this.sent.reserve=!0,this.sent.counter||(this.sent.counter=!0,this.reserve=[...this.counter,...this.reserve]),this.toRing(t,this.reserve)}formation(t){let e={tank:9,whale:9,barbarian:7.5,assassin:6.5,archer:4,druid:3},n=new Map,o=yn.width/2+this.lane,r=Bn();for(let a of t)r[a]++;for(let a of t){let p=n.get(a)??0;n.set(a,p+1);let s=14,u=Math.floor(p/s),f=p%s,l=Math.min(s,r[a]-u*s),c=a==="tank"?1.7:a==="whale"?2.4:.9,h=o+(f-(l-1)/2)*c;a==="assassin"&&(h=(f%2?o+7:o-7)+Math.floor(f/2)*.8*(f%2?1:-1)),this.queue.push({kind:a,ox:$i(h,1,yn.width-1),oy:e[a]-u*1.1})}}toRing(t,e){let n=1-this.side,o=0,r=0,a=0,p=0;for(let h of t.units){if(!h.alive||h.side!==n)continue;let[b]=this.own(h.x,h.y);o+=b,r++,q.troops[h.kind].ranged&&(a+=b,p++)}let s=$i(r?o/r:yn.width/2,4,yn.width-4),u=kn-yn.noDropRadius-1.2,f=p?$i(a/p,3,yn.width-3):s,l=0,c=0;for(let h of e)h==="assassin"?(this.queue.push({kind:h,ox:$i(f+(c%6-2.5)*.85,1,yn.width-1),oy:u-Math.floor(c/6)*1.1}),c++):(this.queue.push({kind:h,ox:$i(s+(l%10-4.5)*.85,1,yn.width-1),oy:u-Math.floor(l/10)*1.1}),l++)}findSpot(t,e,n){for(let[o,r]of R6){let[a,p]=this.world($i(e+o,.5,yn.width-.5),$i(n+r,.5,yn.length-.5));if(t.canDrop(this.side,a,p))return[a,p]}return null}world(t,e){return this.side===0?[t,e]:[yn.width-t,yn.length-e]}own(t,e){return this.side===0?[t,e]:[yn.width-t,yn.length-e]}},R6=[[0,0],[1.5,0],[-1.5,0],[0,-1.5],[3,-1.5],[-3,-1.5],[0,-3.5],[5,-3],[-5,-3],[0,-6],[8,-6],[-8,-6]],$i=(i,t,e)=>i<t?t:i>e?e:i;var O2=class{constructor(t,e,n){M(this,"controls",e);M(this,"seed",n);M(this,"b");M(this,"pilots",[null,null]);this.b=new Zi(t),e.forEach((o,r)=>{if(o.bot)this.pilots[r]=new Ku(r,Ii(n,r),t[r].counts,o.lane??0);else for(let a of o.drops)(o.stopFrom===void 0||a.tick<o.stopFrom)&&this.b.schedule({...a,side:r})})}drop(t){this.b.schedule(t)}step(){let t=this.b;if(!t.over){for(let e of[0,1]){let n=this.pilots[e];if(n)for(let o of n.think(t))t.schedule(o)}t.step()}}run(){for(;!this.b.over;)this.step();return this.b.result}},Q1=()=>({drops:new Map,takeover:new Map});function qu(i,t,e=Q1()){let n=i.pairs[t],o=[D2(i,n.a),D2(i,n.b)],r=[0,1].map(a=>{let p=k1(i,n,a),s=i.players[a===0?n.a:n.b].profile.lane;return p===null?{bot:!0,lane:s}:{drops:e.drops.get(p)??[],stopFrom:e.takeover.get(p),lane:s}});return new O2(o,r,B1(i,t))}function Z1(i,t=Q1()){return i.pairs.map((e,n)=>qu(i,n,t).run())}var z1=new Set(["here","buy","reroll","cap","army"]),tf=class{constructor(t,e=null,n=t.solo?2:q.net.delayTicks){M(this,"auth",t);M(this,"duelFactory",e);M(this,"delayTicks",n);M(this,"m");M(this,"stage","wait");M(this,"fight",null);M(this,"mySide",0);M(this,"oppSeat",null);M(this,"ghost",!1);M(this,"last",null);M(this,"myDrops",[]);M(this,"link","ok");M(this,"oppLost",!1);M(this,"lastDown",-1/0);M(this,"pairIndex",-1);M(this,"refought",!1);M(this,"base",null);M(this,"seen","");M(this,"dropSeq",0);M(this,"posted",!1);M(this,"duel",null);M(this,"oppDrops",[]);this.m=I1(t.seed,t.humans)}get me(){return this.auth.mySeat}get player(){return this.m.players[this.me]}get round(){return this.m.round}get alive(){return!this.player.out}get stageEnd(){let t=this.m.round;switch(this.stage){case"wait":return Qi(1);case"prep":return Hn(t);case"battle":return Xr(t);case"results":return Qi(t+1);default:return 1/0}}get myBattleOver(){return!this.fight||this.fight.b.over}update(){let t=this.auth.clock();this.checkLink(t);for(let e=0;e<400;e++){let n=this.m.round;if(this.stage==="over")return;if(this.stage==="wait"||this.stage==="results"){if(this.m.phase==="over"){this.stage="over";return}if(t<Qi(n+1))return;this.beginRound();continue}if(this.stage==="prep"){if(this.rebuild(),t<Hn(n)||this.auth.syncedTo()<Hn(n))return;this.rebuild(!0,!0),H1(this.m),this.stage="battle",this.setupFight(t<Xr(n),t);continue}this.stepFight(t);let o=this.auth.solo?Xr(n):wp(n)+.3;if(t<o||this.auth.syncedTo()<(this.auth.solo?0:wp(n)))return;this.finishRound()}}do(t){if(this.stage!=="prep"||!this.alive)return!1;let e=structuredClone(this.m);return uo(e,this.me,t)?(this.auth.post(this.m.round,t.k,t),this.rebuild(!0),!0):!1}canDrop(t,e){let n=this.fight;return!!n&&!n.b.over&&this.stage==="battle"&&n.b.canDrop(this.mySide,t,e)}drop(t,e,n){let o=this.fight;if(!o||o.b.over||this.stage!=="battle"||this.link!=="ok"||o.b.left(this.mySide)[t]<=0||!o.b.canDrop(this.mySide,e,n))return!1;let r={tick:o.b.tick+this.delayTicks,side:this.mySide,kind:t,x:e,y:n,seq:this.dropSeq++};return o.drop(r),this.myDrops.push(r),this.duel?.send(r),!0}alpha(){let t=this.fight;if(!t||t.b.over||this.stage!=="battle")return 1;let e=(this.auth.clock()-Hn(this.m.round))/Ke;return Math.max(0,Math.min(1,e-t.b.tick+1))}beginRound(){$1(this.m),this.base=structuredClone(this.m),this.seen="",this.stage="prep",this.fight=null,this.oppSeat=null,this.ghost=!1,this.myDrops.length=0,this.dropSeq=0,this.posted=!1,this.oppDrops=[],this.pairIndex=-1,this.refought=!1,this.oppLost=!1,this.duel?.close(),this.duel=null,this.alive&&this.auth.clock()<Hn(this.m.round)&&this.auth.post(this.m.round,"here",{k:"here"}),this.rebuild(!0)}rebuild(t=!1,e=!1){if(!this.base)return;let n=this.m.round,o=e?[]:this.auth.pending().filter(u=>u.round===n&&z1.has(u.kind)),r=this.auth.confirmed().filter(u=>u.round===n&&z1.has(u.kind)),a=`${r.length}/${o.length}/${r.at(-1)?.seq??-1}`;if(!t&&a===this.seen)return;this.seen=a;let p=structuredClone(this.base),s=new Set;for(let u of[...r,...o])s.has(u.cid)||(s.add(u.cid),uo(p,u.seat,u.data));this.m=p}setupFight(t,e){if(!this.alive)return;let n=this.m.pairs.findIndex(s=>s.a===this.me||s.b===this.me&&!s.ghost);if(n<0)return;let o=this.m.pairs[n];if(this.mySide=o.a===this.me?0:1,this.oppSeat=this.mySide===0?o.b:o.a,this.ghost=o.ghost,this.pairIndex=n,!t||!this.player.here||!this.auth.solo&&e>Hn(this.m.round)+q.net.cutSeconds-.5)return;let r={drops:new Map([[this.me,[]]]),takeover:new Map},a=this.m.players[this.oppSeat];!o.ghost&&a.human&&a.here&&(r.drops.set(a.seat,[]),this.duel=this.duelFactory?this.duelFactory(this.m.round,this.me,a.seat,this.mySide):null,this.duel||r.takeover.set(a.seat,0)),this.fight=qu(this.m,n,r)}checkLink(t){if(this.auth.solo)return;let e=t-this.auth.syncedTo(),n=this.stage==="battle"?this.duel:null,o=e>q.net.lostSeconds||!!n&&!n.linked();o&&(this.lastDown=t);let r=o?"lost":"ok";this.stage==="battle"&&this.alive&&!this.fight&&this.oppSeat!==null&&(r="away"),n&&(n.cutMe()!==null?r="cut":this.fight&&!this.fight.b.over&&n.gone()===null&&n.silence()>q.net.cutSeconds&&(!o&&e<n.silence()-1&&this.lastDown<t-n.silence()?n.cutOff():r="lost")),this.link=r,this.oppLost=!!n&&n.gone()!==null}stepFight(t){let e=this.duel?.cutMe()??null;e!==null&&!this.refought&&this.refight(e);let n=this.fight;if(!n)return;let o=Math.min(Sp,Math.floor((t-Hn(this.m.round))/Ke)),r=1-this.mySide;for(;!n.b.over&&n.b.tick<o;){if(this.duel){if(this.oppDrops.push(...this.duel.take()),n.b.tick>=this.duel.frontier(n.b.tick))break;let a=this.duel.gone(),p=this.oppDrops.filter(s=>s.tick<=n.b.tick);this.oppDrops=this.oppDrops.filter(s=>s.tick>n.b.tick);for(let s of p)(a===null||s.tick<a)&&n.drop({...s,side:r})}n.step()}n.b.over&&!this.posted&&this.postDrops()}refight(t){this.refought=!0;let e=this.fight,n=this.duel;if(!e||!n||this.oppSeat===null||this.pairIndex<0)return;let o=this.myDrops.filter(p=>p.tick<t);this.myDrops.splice(0,this.myDrops.length,...o);let r=qu(this.m,this.pairIndex,{drops:new Map([[this.me,o],[this.oppSeat,[]]]),takeover:new Map([[this.me,t]])});n.take();let a=1-this.mySide;for(let p of n.seen())r.drop({...p,side:a});this.oppDrops=[],this.fight=r}postDrops(){this.posted=!0,this.auth.post(this.m.round,"drops",{drops:this.myDrops});let t=this.duel?.gone();this.duel&&t!==null&&t!==void 0&&this.oppSeat!==null&&this.auth.post(this.m.round,"takeover",{seat:this.oppSeat,tick:t,drops:this.duel.seen().filter(e=>e.tick<t)})}finishRound(){let t=this.fight;if(t&&!t.b.over)for(;!t.b.over;)t.step();t&&!this.posted&&this.postDrops(),this.duel?.close(),this.duel=null,this.last=F1(this.m,Z1(this.m,this.inputsOf(this.m.round))),this.stage=this.m.phase==="over"?"over":"results"}inputsOf(t){let e={drops:new Map,takeover:new Map},n=new Map,o=this.auth.confirmed().filter(a=>a.round===t),r=a=>{let p=this.m.pairs.find(s=>!s.ghost&&(s.a===a||s.b===a));return p?p.a===a?p.b:p.a:null};for(let a of o)if(a.kind==="drops"&&!e.drops.has(a.seat)&&e.drops.set(a.seat,a.data.drops),a.kind==="takeover"){let p=a.data;if(r(p.seat)!==a.seat||e.takeover.has(p.seat)||e.takeover.has(a.seat))continue;e.takeover.set(p.seat,p.tick),n.set(p.seat,p.drops)}for(let[a,p]of n)e.drops.set(a,p);return this.auth.solo&&this.fight&&!e.drops.has(this.me)&&e.drops.set(this.me,[...this.myDrops]),e}};function j1(i){let t=i.last?.find(n=>n.pair.a===i.me||n.pair.b===i.me&&!n.pair.ghost);if(!t)return{won:null,result:null,damage:0};let e=t.pair.a===i.me?0:1;return{won:t.result.winner===-1?null:t.result.winner===e,result:t.result,damage:t.loser===i.me?t.damage:0}}var fp=0,v2=()=>{let i=document.getElementById("toast");return i||(i=document.createElement("div"),i.id="toast",i.setAttribute("role","status"),i.hidden=!0,document.body.appendChild(i)),i},M2={show(i,t=2.6){let e=v2();e.textContent=i,e.hidden=!1,fp=t},hide(){fp=0,v2().hidden=!0},tick(i){fp>0&&(fp-=i,fp<=0&&(v2().hidden=!0))}},JP=`<button class="x" data-do="close" aria-label="Fermer"><span class="face">${bt("close")}</span></button>`;var Y1="./assets/druidesse-RZQML5EB.webp";var G1="./assets/baleine-VRPXIB3D.webp";var Yo={barbarian:"soldat",archer:"archere",tank:"veteran",assassin:"pillard",druid:"druidesse",whale:"baleine"},M6={druidesse:Y1,baleine:G1};function lp(i){yf(i),i.querySelectorAll("img[data-art]").forEach(t=>{let e=M6[t.dataset.art??""];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var td={hp:"heart",damage:"sword",attackSpeed:"fast",moveSpeed:"boot",range:"target"},I2=i=>`${Math.round(i*100)}`,nf=i=>String(Math.max(0,i)),$2=i=>Math.max(0,Math.min(100,100*i/q.hp.start)),A6=15;function W1(i){let t=null,e=0;for(let n of qt){let o=i.army[n]*q.troops[n].places;o>e&&(e=o,t=n)}return t}var K1=i=>`<span class="face">${i?`<img data-art="${Yo[i]}" alt="">`:bt("person")}</span>`,A2=i=>i===1?"1er":`${i}e`,Hi=(i,t="")=>`<span class="bar${t?` ${t}`:""}"><i style="width:${Math.max(0,Math.min(100,i))}%"></i></span>`,I6=i=>`<div class="stat hp">${bt("heart")}<span class="track">${Hi($2(i))}<b>${nf(i)}</b></span></div>`,ed=(i,t,e)=>`<span class="chip">${bt(td[e])}+${I2(i.up[t][e])} %</span>`,_2=(i,t)=>Ji.filter(e=>i.up[t][e]>0).sort((e,n)=>i.up[t][n]-i.up[t][e]),q1=!1;function H2(){if(q1)return;q1=!0;let i='stroke="#2a1709" stroke-width="3.6" stroke-linejoin="round"';document.body.insertAdjacentHTML("afterbegin",`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true">
    <symbol id="i-coin" viewBox="0 0 64 64" overflow="visible">
      <ellipse cx="32" cy="36" rx="26" ry="25" fill="#a8641a" ${i}/>
      <circle cx="32" cy="32" r="25" fill="url(#h-gold)" ${i}/>
      <circle cx="32" cy="32" r="17.5" fill="none" stroke="#c97a12" stroke-width="2.6" opacity=".8"/>
      <path d="M32 20 L40 32 L32 44 L24 32 Z" fill="url(#h-gold)" stroke="#2a1709" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M32 23 L35 28 L32 30 Z" fill="#fff" opacity=".7"/>
      <path d="M17 25 C19 18 24 13 31 12" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".8"/>
    </symbol></svg>`)}var _6=["top","quit","opp","army","shop","players","ready","gauges","deck","hint","life","win","net"],ef=`<svg class="nsig" viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke-linecap="round">
  <path class="w" d="M6 20a26 26 0 0 1 36 0M12.5 27a17 17 0 0 1 23 0M19 34a8 8 0 0 1 10 0"/><path class="o" d="M11 7l26 32"/><path class="r" d="M11 7l26 32"/></g>
  <circle cx="24" cy="40" r="3.4" fill="#fff"/></svg>`,of=class{constructor(t,e){M(this,"s",t);M(this,"acts",e);M(this,"root",document.createElement("div"));M(this,"parts",{});M(this,"pick",qt[0]);M(this,"sheet",-1);M(this,"toastAt",0);M(this,"lastFrame",performance.now());M(this,"spectating",!1);M(this,"asking",!1);H2(),this.root.className="ab",document.body.appendChild(this.root);for(let n of _6){let o=document.createElement("div");o.dataset.part=n,this.root.appendChild(o),this.parts[n]={el:o,key:""}}this.root.addEventListener("click",n=>this.click(n))}put(t,e,n){let o=this.parts[t];o.key!==e&&(o.key=e,o.el.innerHTML=e?n():"",lp(o.el))}toast(t){let e=performance.now();e-this.toastAt<700||(this.toastAt=e,M2.show(t,1.5))}render(){let t=performance.now();M2.tick(Math.min(.5,(t-this.lastFrame)/1e3)),this.lastFrame=t;let e=this.s(),n=e.stage,o=e.player,r=e.auth.clock(),a=n==="prep"&&e.alive,p=n==="battle"&&!!e.fight,s=Math.max(0,e.stageEnd-r),u=n==="prep"?up(e.m,e.me):null;n!=="prep"&&n!=="results"&&n!=="wait"&&(this.sheet=-1);let f=n==="results"&&e.alive&&!!e.last,l=n==="prep"?"Pr\xE9paration":n==="results"?"R\xE9sultats":"",c=!p&&n!=="over"&&(e.alive||this.spectating);this.put("top",c?`${n}|${e.round}|${Math.ceil(s)}|${o.gold}|${o.hp}|${e.alive}`:"",()=>`
      <div class="hud-l">${I6(o.hp)}${e.alive&&n!=="wait"?`<div class="stat gold">${bt("coin")}<b>${o.gold}</b></div>`:""}</div>
      ${n==="wait"?"":`<div class="hud-r"><div class="round"><b>Round ${e.round||1}</b>${l?`<small>${l}</small>`:""}</div>
        <div class="timer">${bt("clock")}<b>${Vp(s)}</b></div></div>`}`),this.put("quit",(e.alive||this.spectating)&&n!=="over"?"q":"",()=>`<button class="qbtn" data-do="askquit" aria-label="Abandonner la partie">${bt("flag")}</button>`);let h=a&&u?e.m.players[u.seat]:null;this.put("opp",h?`o|${h.seat}|${u.ghost}|${JSON.stringify(h.army)}`:"",()=>`
      <button class="hud-c next" data-do="row" data-i="${h.seat}" aria-label="Prochain adversaire : ${de(h.name)}">${bt("swords")}<span class="who">${u.ghost?"Copie de ":""}${de(h.name)}</span>
        <span class="minis">${qt.filter(L=>h.army[L]>0).map(L=>`<span class="mini"><img data-art="${Yo[L]}" alt=""><i>${h.army[L]}</i></span>`).join("")}</span></button>`);let b=Gn(o.army),m=b>=o.places;this.put("army",a?`a|${JSON.stringify(o.army)}|${o.places}|${JSON.stringify(o.up)}`:"",()=>`
      <div class="panel army"><div class="ph"><span class="t">Arm\xE9e</span><span class="cap${m?" full":""}">${bt("person")}<b>${b}</b>/${o.places}</span></div>
        ${Hi(100*b/o.places,"capbar")}
        <div class="rows">${qt.map(L=>this.trow(o,L,b)).join("")}</div>
        <div class="foot"><button class="btn${m?" off":""}" data-do="fill">Remplir</button><button class="btn${b?"":" off"}" data-do="clear">Vider</button></div></div>`);let y=o.places<q.army.maxPlaces&&o.gold>=q.army.stepCost;this.put("shop",a?`s|${JSON.stringify(o.offers)}|${o.gold}|${o.places}`:"",()=>`
      <div class="panel shop"><div class="utils">
        <button class="util${y?"":" off"}" data-do="cap" aria-label="${q.army.step} places de plus pour ${q.army.stepCost} or">${bt("person")}<b>+${q.army.step}</b><span class="price">${bt("coin")}${q.army.stepCost}</span></button>
        <button class="util${o.gold>=q.economy.reroll?"":" off"}" data-do="reroll" aria-label="Relancer la boutique pour ${q.economy.reroll} or">${bt("rotate")}<b>&nbsp;</b><span class="price">${bt("coin")}${q.economy.reroll}</span></button></div>
        ${o.offers.map((L,U)=>$6(L,U,o.gold)).join("")}</div>`);let d=(n==="prep"||n==="wait"||n==="results")&&!f;this.put("players",d?`p|${e.m.players.map(L=>`${L.hp}${L.out?.place}`).join()}|${u?.seat}`:"",()=>`
      <div class="panel players"><div class="ph"><span class="t steel">Joueurs</span></div><div class="plist">${R2(e.m).map(L=>{let U=L.seat===e.me,x=!!u&&L.seat===u.seat;return`<button class="prow${`${U?" me":""}${x?" opp":""}${!U&&!x&&!L.out&&L.hp<=A6?" low":""}${L.out?" out":""}`}" data-do="row" data-i="${L.seat}"><span class="nm">${x?bt("swords"):""}<span>${de(L.name)}</span></span>${L.out?`<span class="place">${A2(L.out.place)}</span>`:`<span class="php">${bt("heart")}${Hi($2(L.hp))}<b>${nf(L.hp)}</b></span>`}</button>`}).join("")}</div></div>`),this.put("ready",a?e.auth.solo?"r":`u|${Math.ceil(s)}`:"",()=>e.auth.solo?`<button class="go ready" data-do="ready">${bt("check")}<span>Pr\xEAt</span></button>`:`<div class="plate until">${bt("hourglass")}<span>Bataille dans<b>${Vp(s)}</b></span></div>`);let T=e.fight?.b;if(p&&T){let L=T.gauges[e.mySide],U=T.gauges[1-e.mySide],x=e.oppSeat!==null?e.m.players[e.oppSeat].name:"",P=Math.max(0,q.battle.maxSeconds-T.time);this.put("gauges",`g|${Math.floor(L)}|${Math.floor(U)}|${Math.ceil(P)}`,()=>`<div class="gauge">
        <div class="side me"><span class="nm">${de(o.name)}</span><span class="pct">${Math.floor(L)} %</span>${Hi(L,"gbar")}</div>
        <div class="clock"><b>${Vp(P)}</b><small>Round ${e.round}</small></div>
        <div class="side op"><span class="nm">${de(x)}${e.ghost?" (copie)":""}</span><span class="pct">${Math.floor(U)} %</span>${Hi(U,"gbar")}</div></div>`);let S=T.left(e.mySide);if(S[this.pick]<=0){let _=qt.find(z=>S[z]>0);_&&(this.pick=_)}let O=qt.filter(_=>e.player.army[_]>0),I=e.link==="cut"||e.link==="away";this.put("deck",I?"":`d|${JSON.stringify(S)}|${this.pick}`,()=>`<div class="deck">${O.map(_=>`
        <button class="dcard${_===this.pick?" sel":""}${S[_]?"":" empty"}" data-do="pick" data-t="${_}" aria-label="${Up[_]}"><img class="dp" data-art="${Yo[_]}" alt=""><i>\xD7${S[_]}</i></button>`).join("")}</div>`);let B=qt.every(_=>S[_]===0);this.put("hint",T.tick<120&&!B&&!I?"h":"",()=>'<div class="plate ahint">Touche une carte, puis garde le pouce sur le terrain</div>'),this.put("life",`l|${o.hp}`,()=>`<div class="plate hp-mini">${bt("heart")}<b>${nf(o.hp)}</b></div>`)}else for(let L of["gauges","deck","hint","life"])this.put(L,"",()=>"");let E=e.link,g=e.oppSeat!==null?e.m.players[e.oppSeat].name:"",C=!e.alive||n==="over"?"":n==="battle"?E==="lost"?"lost":E==="cut"||E==="away"?"cut":e.oppLost?`opp|${g}`:"":E==="lost"?n==="prep"?"top":"top hi":"";this.put("net",C,()=>C==="lost"?`<div class="dim soft"></div><div class="winwrap net"><div class="wt">Connexion perdue</div><div class="win">${ef}
          <p class="say">Reconnexion<span class="dots"><i>.</i><i>.</i><i>.</i></span></p></div></div>`:C==="cut"?`<div class="plate netp">${ef}<span><b>Connexion perdue</b><small>La bataille continue sans toi. Tu reviens au prochain round.</small></span></div>`:C.startsWith("top")?`<div class="plate netp ${C}">${ef}<span><b>Connexion perdue</b><small>Reconnexion<span class="dots"><i>.</i><i>.</i><i>.</i></span></small></span></div>`:`<div class="plate netp foe">${ef}<span><b>${de(g)} a perdu la connexion</b><small>Plus de renforts de son c\xF4t\xE9</small></span></div>`),this.windows(e,s)}trow(t,e,n){let o=t.army[e],r=n+q.troops[e].places<=t.places,a=Up[e].toLowerCase();return`<div class="trow${o||r?"":" nofit"}"><img class="pt" data-art="${Yo[e]}" alt=""><div class="tn"><b>${o}</b><small>${q.troops[e].places} pl.</small></div>
      <div class="chips">${_2(t,e).slice(0,2).map(p=>ed(t,e,p)).join("")}</div>
      <div class="pm"><button class="sq minus${o?"":" off"}" data-do="minus" data-t="${e}" aria-label="Un ${a} de moins">${bt("minus")}</button><button class="sq plus${r?"":" off"}" data-do="plus" data-t="${e}" aria-label="Un ${a} de plus">${bt("plus")}</button></div></div>`}windows(t,e){let n=t.stage,o=t.player;if(n==="over"){let r=R2(t.m),a=r[0].seat===t.me,p=r.findIndex(s=>s.seat===t.me)+1;this.put("win",`over|${r.map(s=>s.seat).join()}`,()=>{let s=f=>{let l=r[f];return l?`<div class="pod p${f+1}${l.seat===t.me?" me":""}">${K1(W1(l))}<span class="pn">${de(l.name)}</span><span class="blk">${f+1}</span></div>`:""},u=r.slice(3).map((f,l)=>`<div class="rrow${f.seat===t.me?" me":""}"><b>${l+4}</b>${K1(W1(f))}<span class="nm">${de(f.name)}</span>
          <span class="rr">${f.out?`${bt("swords")}Round ${f.out.round}`:""}</span></div>`).join("");return`<div class="dim"></div><div class="winwrap over"><div class="wt ${a?"yel":"steel"}">${a?"Victoire !":"Fin de la partie"}</div><div class="win">
          <div class="headline">${bt(a?"trophy":"rank")}<span>${a?"Ton arm\xE9e est la derni\xE8re debout":`Tu finis ${A2(p)} sur ${r.length}`}</span></div>
          <div class="final"><div class="podium">${s(1)}${s(0)}${s(2)}</div><div class="rest">${u}</div></div>
          <button class="go small" data-do="again">${bt("replay")}<span>Rejouer</span></button></div></div>`});return}if(!t.alive&&!this.spectating){this.put("win",`out|${o.out?.place}`,()=>`<div class="dim"></div><div class="winwrap out"><div class="wt">\xC9limin\xE9</div><div class="win out">
        <div class="oplace"><b>${A2(o.out?.place??8)}</b><span>sur ${t.m.players.length}</span></div>
        <div class="stl c">${bt("swords","ic w")}Round ${o.out?.round}</div>
        <p class="say">La partie continue sans toi.</p>
        <div class="foot2"><button class="btn big" data-do="spectate">Regarder la fin</button><button class="go small" data-do="again">${bt("replay")}<span>Rejouer</span></button></div></div></div>`);return}if(this.asking&&t.alive){this.put("win",`quit|${t.auth.solo}`,()=>`<div class="dim"></div><div class="winwrap quit"><div class="wt">Abandonner ?</div><div class="win">
        <p class="say">${t.auth.solo?"La partie s\u2019arr\xEAte et tu reviens \xE0 l\u2019accueil.":"Tu quittes la partie. Elle continue sans toi et tu perds tes batailles, jusqu\u2019\xE0 ce que tu la reprennes depuis l\u2019accueil."}</p>
        <div class="foot2"><button class="btn big" data-do="stay">Continuer</button><button class="btn big red" data-do="quit">${bt("flag","ic w")}Abandonner</button></div></div></div>`);return}if(n==="results"&&t.last&&t.alive){this.put("win",`res|${t.round}|${t.auth.solo}`,()=>this.results(t,t.last));return}if(this.sheet>=0&&(n==="prep"||n==="results"||n==="wait")){let r=t.m.players[this.sheet],a=n==="prep"?up(t.m,t.me):null;this.put("win",`sheet|${r.seat}|${r.hp}|${JSON.stringify(r.army)}|${r.places}|${JSON.stringify(r.up)}|${a?.seat}`,()=>H6(r,t.me,a?.seat??-1));return}if(n==="wait"){this.put("win",`wait|${Math.max(1,Math.ceil(e))}`,()=>`<div class="winwrap count"><div class="wt yel">La partie commence</div><div class="win count">
        <b class="cnum">${Math.max(1,Math.ceil(e))}</b><p class="say">Round 1 : ${q.round.prep} s pour pr\xE9parer ton arm\xE9e, puis la bataille.</p></div></div>`);return}this.put("win","",()=>"")}results(t,e){let n=j1(t),o=t.player,r=t.oppSeat!==null?t.m.players[t.oppSeat]:null,a=e.find(d=>d.pair.a===t.me||d.pair.b===t.me&&!d.pair.ghost),p=n.won===null?"\xC9galit\xE9":n.won?"Victoire":"D\xE9faite",s=n.result,u=t.mySide,f=s?[s.gauges[u],s.gauges[1-u]]:[0,0],l=r?de(r.name)+(t.ghost?" (copie)":""):"",c=(d,T,E)=>`<div class="dside ${E}"><span class="nm">${d}</span>${Hi(T,"gbar")}<span class="pct">${Math.floor(T)} %</span></div>`,h=a?.damage??0,b=(d,T)=>s?.outcome==="capture"?T?"Tu prends l\u2019\xC9clat":`${d} prend l\u2019\xC9clat`:s?.outcome==="time"?"Temps \xE9coul\xE9":"Plus personne sur le terrain",m=t.ghost?'<b class="zero">0</b><span>Contre une copie : aucun PV en jeu</span>':n.won===null?'<b class="zero">0</b><span>\xC9galit\xE9 : personne ne perd de PV</span>':n.won?`<b>\u2212${h}</b><span>pour <strong>${l}</strong> \xB7 ${b(l,!0)}</span>`:`<b>\u2212${h}</b><span>${b(l,!1)}</span>`,y=e.filter(d=>d!==a).map(d=>{let T=t.m.players[d.pair.a],E=t.m.players[d.pair.b],g=d.loser!==null?t.m.players[d.loser]:null,C=d.pair.ghost?'<span class="loss none">Copie</span>':g&&d.damage?`<span class="loss">${de(g.name)} ${bt("heart")}\u2212${d.damage}</span>`:'<span class="loss none">\xC9galit\xE9</span>';return`<div class="oline">${bt("swords")}<span class="pair"><b>${de(T.name)}</b> \xB7 <b>${de(E.name)}${d.pair.ghost?" (copie)":""}</b></span>${C}</div>`}).join("");return`<div class="dim"></div><div class="winwrap res"><div class="wt ${n.won===null?"steel":n.won?"me":""}">${p}</div><div class="win">
      <div class="duel">${c(de(o.name),f[0],"me")}<div class="vs">${bt("swords")}</div>${c(l,f[1],"op")}</div>
      <div class="lost">${bt("heart")}${m}</div>
      <div class="others">${y}</div>
      ${t.auth.solo?`<button class="go small" data-do="next">${bt("arrow")}<span>Continuer</span></button>`:""}</div></div>`}click(t){let e=t.target.closest("[data-do]");if(!e)return;let n=this.s(),o=n.player,r=e.dataset.do,a=e.dataset.t,p={...o.army},s=(u,f)=>{u||this.toast(f)};switch(r){case"cap":s(o.places<q.army.maxPlaces&&n.do({k:"cap"}),o.places>=q.army.maxPlaces?"Ton arm\xE9e a d\xE9j\xE0 toutes ses places":"Pas assez d\u2019or");break;case"reroll":s(n.do({k:"reroll"}),"Pas assez d\u2019or");break;case"buy":s(n.do({k:"buy",slot:Number(e.dataset.i)}),"Pas assez d\u2019or");break;case"plus":p[a]++,s(n.do({k:"army",army:p}),"Plus de place");break;case"minus":p[a]>0&&(p[a]--,n.do({k:"army",army:p}));break;case"clear":n.do({k:"army",army:Bn()});break;case"fill":{let u=qt.reduce((l,c)=>p[c]*q.troops[c].places>p[l]*q.troops[l].places?c:l,qt[0]),f=o.places-Gn(p);for(;f>=q.troops[u].places;)p[u]++,f-=q.troops[u].places;for(;f>0;)p[qt[0]]++,f-=q.troops[qt[0]].places;n.do({k:"army",army:p});break}case"row":this.sheet=Number(e.dataset.i);break;case"close":this.sheet=-1;break;case"pick":this.pick=a;break;case"ready":this.acts.ready();break;case"next":this.acts.next();break;case"again":this.acts.again();break;case"spectate":this.spectating=!0,this.acts.spectate();break;case"askquit":n.alive?this.asking=!0:this.acts.quit();break;case"stay":this.asking=!1;break;case"quit":this.asking=!1,this.acts.quit();return}this.render()}};function $6(i,t,e){if(!i)return'<span class="card sold"></span>';let n=q.rarities[i.rarity],o=_i(i),r=`${n.name} : ${qc[i.stat]} +${I2(n.bonus)} % pour ${Up[i.kind].toLowerCase()}, ${o} or`;return`<button class="card r${i.rarity+1}${e<o?" poor":""}" data-do="buy" data-i="${t}" aria-label="${r}" title="${r}">
    <img class="cp" data-art="${Yo[i.kind]}" alt=""><span class="bonus">${bt(td[i.stat])}+${I2(n.bonus)} %</span><span class="price">${bt("coin")}${o}</span></button>`}function H6(i,t,e){let n=qt.filter(r=>i.army[r]>0||_2(i,r).length).map(r=>`<div class="srow"><img class="pt" data-art="${Yo[r]}" alt=""><b>\xD7${i.army[r]}</b>
    <div class="chips">${_2(i,r).map(a=>ed(i,r,a)).join("")}</div></div>`).join("");return`<div class="dim" data-do="close"></div><div class="winwrap sheet"><div class="win flat">
    <div class="ph"><span class="t${i.seat===t?"":i.seat===e?" red":" steel"}">${i.seat===e?bt("swords"):""}${de(i.name)}${i.seat===t?" (toi)":""}</span></div><button class="x" data-do="close" aria-label="Fermer">${bt("close")}</button>
    <div class="sstats"><span class="stl">${bt("heart")}${Hi($2(i.hp))}${nf(i.hp)}</span><span class="stl">${bt("person","ic w")}${Gn(i.army)}<small>/ ${i.places} places</small></span></div>
    ${n?`<div class="srows">${n}</div>`:'<p class="say empty">Pas encore d\u2019arm\xE9e.</p>'}</div></div>`}var rf=class{constructor(t,e,n,o,r,a,p=!0,s=q.net.delayTicks){M(this,"game",t);M(this,"round",e);M(this,"me",n);M(this,"opp",o);M(this,"net",r);M(this,"now",a);M(this,"delay",s);M(this,"mine",[]);M(this,"theirs",[]);M(this,"prefix",0);M(this,"delivered",0);M(this,"acked",0);M(this,"best",q.net.delayTicks-1);M(this,"claims",[]);M(this,"myTick",0);M(this,"heard");M(this,"goneAt",null);M(this,"cutAt",null);M(this,"stop");M(this,"timer",null);this.heard=a(),this.stop=r.listen(u=>this.receive(u)),p&&(this.timer=setInterval(()=>this.flush(),q.net.sendEvery)),this.flush()}send(t){this.mine.push(t),this.flush()}flush(){this.net.send({g:this.game,r:this.round,from:this.me,to:this.opp,upTo:this.myTick+this.delay-1,count:this.mine.length,base:this.acked,drops:this.mine.slice(this.acked),ack:this.prefix,...this.goneAt===null?{}:{cut:this.goneAt}})}receive(t){if(!(t.g!==this.game||t.r!==this.round||t.from!==this.opp||t.to!==this.me)){for(this.heard=this.now(),typeof t.cut=="number"&&this.cutAt===null&&(this.cutAt=t.cut),t.ack>this.acked&&(this.acked=Math.min(t.ack,this.mine.length)),t.drops.forEach((e,n)=>{this.theirs[t.base+n]||(this.theirs[t.base+n]=e)});this.theirs[this.prefix];)this.prefix++;this.claims.push({upTo:t.upTo,count:t.count}),this.claims=this.claims.filter(e=>e.count<=this.prefix?(e.upTo>this.best&&(this.best=e.upTo),!1):!0)}}take(){let t=this.theirs.slice(this.delivered,this.prefix);return this.delivered=this.prefix,t}frontier(t){return t>this.myTick&&(this.myTick=t),this.goneAt===null?this.best+1:1/0}silence(){return this.now()-this.heard}linked(){return this.net.connected?.()??!0}cutOff(){return this.goneAt===null&&(this.goneAt=this.best+1,this.flush()),this.goneAt}gone(){return this.goneAt}cutMe(){return this.cutAt}seen(){return this.theirs.slice(0,this.prefix)}close(){this.timer&&clearInterval(this.timer),this.timer=null,this.stop()}};var af=class{constructor(t,e,n){M(this,"url",t);M(this,"key",e);M(this,"ws",null);M(this,"ref",0);M(this,"joined",!1);M(this,"queue",[]);M(this,"listeners",new Set);M(this,"beat",null);M(this,"closed",!1);M(this,"topic");this.topic=`realtime:${n}`,this.open()}open(){if(this.closed)return;let t=new WebSocket(`${this.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${encodeURIComponent(this.key)}&vsn=1.0.0`);this.ws=t,this.joined=!1,t.onopen=()=>{this.raw({topic:this.topic,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:""},postgres_changes:[],private:!1}},ref:String(++this.ref),join_ref:"1"}),this.beat=setInterval(()=>this.raw({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++this.ref)}),25e3)},t.onmessage=e=>{let n;try{n=JSON.parse(String(e.data))}catch{return}if(n.topic===this.topic){if(n.event==="phx_reply"&&n.payload.status==="ok"&&!this.joined){this.joined=!0;for(let o of this.queue.splice(0))t.send(o)}else if(n.event==="broadcast"&&n.payload.event==="duel"&&n.payload.payload)for(let o of this.listeners)o(n.payload.payload)}},t.onclose=()=>{this.beat&&clearInterval(this.beat),this.beat=null,this.closed||setTimeout(()=>this.open(),800)},t.onerror=()=>{try{t.close()}catch{}}}raw(t){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}send(t){let e=JSON.stringify({topic:this.topic,event:"broadcast",payload:{type:"broadcast",event:"duel",payload:t},ref:String(++this.ref),join_ref:"1"});this.joined&&this.ws?.readyState===WebSocket.OPEN?this.ws.send(e):this.queue.length<50&&this.queue.push(e)}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}connected(){return this.joined&&this.ws?.readyState===WebSocket.OPEN&&(typeof navigator>"u"||navigator.onLine!==!1)}close(){this.closed=!0,this.beat&&clearInterval(this.beat),this.ws?.close()}};var k6=globalThis.__PLANETOID_NET,fo=k6??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var nd=(i,t,e)=>i("autobattler_open",{p_secret:t,p_name:e}),od=(i,t,e,n)=>i("autobattler_join",{p_secret:t,p_code:e,p_name:n}),k2=(i,t,e)=>i("autobattler_room",{p_secret:t,p_game:e}),id=(i,t,e)=>i("autobattler_launch",{p_secret:t,p_game:e});function rd(i){return/unknown game/.test(i)?"Aucune partie avec ce code.":/game full/.test(i)?"La partie est compl\xE8te (8 joueurs).":/already started/.test(i)?"La partie a d\xE9j\xE0 commenc\xE9.":/bad name/.test(i)?"Choisis un nom (24 lettres au plus).":/only the creator/.test(i)?"Seul le cr\xE9ateur de la partie peut la lancer.":/not a player/.test(i)?"Ce t\xE9l\xE9phone ne fait pas partie de cette partie.":i}var pf=class{constructor(t,e,n,o,r=()=>Date.now(),a=!0){M(this,"rpc",t);M(this,"key",e);M(this,"game",n);M(this,"now",r);M(this,"solo",!1);M(this,"seed");M(this,"humans");M(this,"mySeat");M(this,"code");M(this,"onChange");M(this,"log",[]);M(this,"mine",[]);M(this,"lastSeq",0);M(this,"synced",-1/0);M(this,"offset");M(this,"bestRtt",1/0);M(this,"startAt");M(this,"closed",!1);M(this,"timer",null);M(this,"busy",!1);if(o.seed===null||o.startAt===null)throw new Error("the game is not launched");this.seed=o.seed,this.startAt=o.startAt,this.mySeat=o.seat,this.code=o.code,this.humans=[...o.players].sort((p,s)=>p.seat-s.seat).map(p=>p.name),this.offset=o.now-r(),a&&this.loop()}clock(){return(this.now()+this.offset-this.startAt)/1e3}syncedTo(){return this.synced}confirmed(){return this.log}pending(){return this.mine}post(t,e,n){let o={seq:-1,seat:this.mySeat,round:t,kind:e,data:n,cid:Vf(),sent:0};return this.mine.push(o),this.sendOne(o),o.cid}async sendOne(t){t.sent=this.now();try{await this.rpc("autobattler_act",{p_secret:this.key,p_game:this.game,p_round:t.round,p_kind:t.kind,p_data:t.data,p_cid:t.cid})}catch(e){let n=e.message??"";/connexion|fetch|network/i.test(n)||(this.mine=this.mine.filter(o=>o!==t),this.onChange?.())}}async poll(){if(!this.busy){this.busy=!0;try{let t=this.now(),e=await this.rpc("autobattler_log",{p_secret:this.key,p_game:this.game,p_since:this.lastSeq}),n=this.now();n-t<=this.bestRtt+30&&(this.bestRtt=Math.min(this.bestRtt,n-t),this.offset=e.now-(t+n)/2);let o=!1;for(let a of e.entries)a.seq<=this.lastSeq||(this.log.push(a),this.lastSeq=a.seq,o=!0);let r=new Set(this.log.map(a=>a.cid));this.mine=this.mine.filter(a=>!r.has(a.cid)),this.synced=(e.now-this.startAt)/1e3-.25;for(let a of this.mine)this.now()-a.sent>2500&&this.sendOne(a);o&&this.onChange?.()}catch{}finally{this.busy=!1}}}loop(){this.closed||this.poll().finally(()=>{let t=this.clock(),e=(t%110+110)%110,n=e>=29&&e<32||e>=107.5&&e<110;this.timer=setTimeout(()=>this.loop(),n?250:1e3)})}close(){this.closed=!0,this.timer&&clearTimeout(this.timer)}};var ad=()=>!!fo.url&&!!fo.key;var ki=async(i,t)=>{let e={apikey:fo.key,"Content-Type":"application/json"};fo.key.startsWith("sb_")||(e.Authorization=`Bearer ${fo.key}`);let n;try{n=await fetch(`${fo.url}/rest/v1/rpc/${i}`,{method:"POST",headers:e,body:JSON.stringify(t)})}catch{throw new Error("Pas de connexion au serveur.")}let o=await n.text();if(!n.ok){let r=o;try{r=JSON.parse(o).message??o}catch{}throw(n.status===404||/Could not find the function/.test(r))&&(r="Le serveur de ce mode n\u2019est pas encore install\xE9 (game/src/autobattler/net/schema.sql)."),new Error(rd(r))}return o?JSON.parse(o):null},cp={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function hp(){let i=cp.get("ab-cle");if(!i||i.length<20){let t=crypto.getRandomValues(new Uint8Array(32));i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),cp.set("ab-cle",i)}return i}var B2=()=>{try{let i=cp.get("ab-partie");return i?JSON.parse(i):null}catch{return null}},pd=(i,t)=>cp.set("ab-partie",JSON.stringify({id:i,code:t,at:Date.now()})),F2=()=>cp.del("ab-partie");var X2=(i,t)=>`<div id="out" class="${i}" style="background-image:url(${Zu})"><div class="shade"></div>${t}</div>`,N2=(i,t,e)=>`<div class="otop"><button class="back" data-a="${i}"><span class="bk">${bt("arrow")}</span>${t}</button><span class="fan">${e}</span></div>`;function dp(i){let[t,e]=/Aucune partie/.test(i)?["Code inconnu","Aucune partie avec ce code. V\xE9rifie les 5 lettres."]:/déjà commencé/.test(i)?["Partie lanc\xE9e","Elle a commenc\xE9 sans toi. Demande \xE0 ton ami d\u2019en cr\xE9er une autre."]:/complète/.test(i)?["Partie compl\xE8te","Les 8 places sont prises."]:/Pas de connexion/.test(i)?["Serveur injoignable","V\xE9rifie ta connexion, puis r\xE9essaie."]:/pas encore installé|pas configuré/.test(i)?["Pas de serveur",i]:/code de la partie|5 lettres/.test(i)?["Code incomplet","Entre les 5 lettres du code."]:/nom/.test(i)?["Ton nom",i]:["Erreur",i];return`<div class="err" role="alert"><b>${t}</b><span>${de(e)}</span></div>`}var sd=(i,t="hourglass")=>`<div class="note" role="status">${bt(t)}<span>${de(i)}</span></div>`;function ud(i,t,e,n,o=""){let r=null,a="",p=()=>{r&&clearTimeout(r),r=null},s=(d,T)=>{T!==a&&(a=T,i.innerHTML=X2(d,T),lp(i))},u=d=>{let T=i.querySelector(".msg");T&&(T.innerHTML=d)},f=d=>u(dp(d.message??String(d)));function l(){let d=i.querySelector(".code5"),T=i.querySelector("#ab-code");if(!d||!T)return;let E=[...d.querySelectorAll("i")],g=()=>{let C=T.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5);T.value!==C&&(T.value=C),E.forEach((L,U)=>{L.textContent=C[U]??"",L.classList.toggle("on",U===Math.min(C.length,4))})};T.addEventListener("input",g),T.addEventListener("keydown",C=>{C.key==="Enter"&&h()}),g()}function c(d=""){if(p(),!ad()){s("form",`${N2("back","Accueil","Partie entre amis")}<div class="msg">${dp("Le serveur n\u2019est pas configur\xE9 dans cette version.")}</div>`);return}let T=B2(),E=T&&Date.now()-T.at<(q.maxRounds*Pp+600)*1e3;s("form",`${N2("back","Accueil","Partie entre amis")}
      <div class="lob">
        <div class="cols">
          <div class="panel create"><div class="ph"><span class="t">Cr\xE9er</span></div>
            <p class="say">Une partie \xE0 ${q.match.players} joueurs. Les places encore libres au lancement vont \xE0 des bots.</p>
            <button class="go" data-a="open">${bt("flag")}<span>Cr\xE9er une partie</span></button></div>
          <div class="panel join"><div class="ph"><span class="t steel">Rejoindre</span></div>
            <p class="say">Entre le code de 5 lettres que ton ami t\u2019a donn\xE9.</p>
            <label class="code5">${"<i></i>".repeat(5)}<input id="ab-code" maxlength="5" value="${de(d)}" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="go" aria-label="Code de la partie"></label>
            <button class="btn big blue" data-a="join">${bt("arrow")}Rejoindre</button></div>
        </div>
        ${E?`<button class="btn mid resume" data-a="resume">${bt("replay")}Reprendre la partie <b>${de(T.code)}</b></button>`:""}
      </div>
      <div class="msg"></div>`),l()}function h(){let d=i.querySelector("#ab-code")?.value.trim().toUpperCase()??"";if(d.length<5){u(dp("Entre les 5 lettres du code de la partie."));return}u(sd("Connexion \xE0 la partie\u2026")),od(ki,hp(),d,t).then(b,f)}function b(d){if(p(),pd(d.id,d.code),d.startAt!==null&&d.seed!==null){y(d);return}let T=d.seat,E=q.match.players,g=_=>_.seat===T||_.seenAt!==null&&d.now-_.seenAt<12e3,C=[...d.players].sort((_,z)=>_.seat-z.seat),L=C.map(_=>`<div class="seat${_.seat===T?" me":""}${g(_)?"":" away"}"><span class="sn">${_.seat+1}</span><span class="li">${de(_.name)}</span>
      <span class="tags">${_.seat===0?'<span class="tag">Cr\xE9ateur</span>':""}${_.seat===T?'<span class="tag white">Toi</span>':""}${g(_)?"":'<span class="tag steel">Absent</span>'}</span></div>`);for(let _=C.length;_<E;_++)L.push(`<div class="seat free"><span class="sn">${_+1}</span><span class="li">Bot</span><span class="tags"></span></div>`);let U=C.find(_=>_.seat===0)?.name??"",x=C.length,P=E-x,S=x-1,O=(_,z)=>`${_} ${z}${_>1?"s":""}`,I=P?S?`Toi, ${O(S,"ami")} et ${O(P,"bot")}.`:`Toi et ${O(P,"bot")}.`:"Toutes les places sont prises.",B=typeof navigator.share=="function";s("room",`${N2("leave","Quitter","Salle d\u2019attente")}
      <div class="lob">
        <div class="cols">
          <div class="lcol">
            <div class="panel codep"><div class="ph"><span class="t">Code de la partie</span></div>
              <div class="bigcode">${[...d.code].map(_=>`<span>${de(_)}</span>`).join("")}</div>
              <button class="btn mid blue" data-a="share">${bt("arrow")}${B?"Partager le lien":"Copier le lien"}</button>
              <p class="say">Tes amis touchent \xAB Partie entre amis \xBB et entrent ce code.</p></div>
            ${T===0?`<button class="go" data-a="launch">${bt("swords")}<span>Lancer la partie</span></button><p class="say">${I}</p>`:`<div class="plate waiting">${bt("hourglass")}<span><b>En attente du cr\xE9ateur</b><small>${de(U)} lance la partie</small></span></div>`}
          </div>
          <div class="panel seats"><div class="ph"><span class="t steel">Joueurs</span><span class="cap">${bt("person")}<b>${x}</b>/${E}</span></div><div class="slist">${L.join("")}</div></div>
        </div>
      </div>
      <div class="msg"></div>`),i.room=d,r=setTimeout(()=>{k2(ki,hp(),d.id).then(b,_=>{f(_),r=setTimeout(()=>b(d),2e3)})},1500)}function m(d){let T=`${location.origin}${location.pathname}?code=${d.code}`,E=`Rejoins ma partie de L\u2019\xC9clat : code ${d.code}`;if(typeof navigator.share=="function"){navigator.share({title:"L\u2019\xC9clat",text:E,url:T}).catch(()=>{});return}let g=i.querySelector("[data-a=share]"),C=()=>{g&&(g.innerHTML=`${bt("check")}Lien copi\xE9`,setTimeout(()=>{g.innerHTML=`${bt("arrow")}Copier le lien`},2500))};navigator.clipboard?navigator.clipboard.writeText(`${E}
${T}`).then(C,()=>u(dp(`Copie impossible : le code est ${d.code}.`))):u(dp(`Copie impossible : le code est ${d.code}.`))}function y(d){p();let T=new af(fo.url,fo.key,`ab-${d.id}`),E=new pf(ki,hp(),d.id,d),g=E.close.bind(E);E.close=()=>{g(),T.close()},e(E,(L,U,x)=>new rf(d.id,L,U,x,T,()=>performance.now()/1e3))}i.onclick=d=>{let T=d.target.closest("[data-a]")?.dataset.a,E=hp(),g=i.room;if(T==="back"&&(p(),i.onclick=null,n()),T==="open"&&(u(sd("Cr\xE9ation de la partie\u2026")),nd(ki,E,t).then(b,f)),T==="join"&&h(),T==="resume"){let C=B2();C&&k2(ki,E,C.id).then(b,L=>{F2(),f(L)})}T==="launch"&&g&&id(ki,E,g.id).then(b,f),T==="share"&&g&&m(g),T==="leave"&&(F2(),c())},c(o),o.length===5&&h()}var bp=new URLSearchParams(location.search);{let i=document.createElement("style");i.textContent=`@font-face{font-family:"Bungee";src:url(${Wc}) format("woff2");font-display:block}
@font-face{font-family:"Rubik";src:url(${Kc}) format("woff2");font-weight:400 800;font-display:block}
${Yc}
${Gc}`,document.head.appendChild(i)}bf();H2();Promise.race([Promise.all([document.fonts.load("16px Bungee"),document.fonts.load("600 16px Rubik")]),new Promise(i=>setTimeout(i,2500))]).then(()=>document.getElementById("boot")?.remove(),()=>document.getElementById("boot")?.remove());var Cn=document.getElementById("scene"),De=new Wu(Cn),Z2=window,$e=null,xo=null,Fr=document.createElement("div");document.body.appendChild(Fr);function z2(i,t=null){Fr.innerHTML="",$e?.auth.close(),xo?.root.remove(),$e=new tf(i,t),i.onChange=()=>$e?.update(),xo=new of(()=>$e,{ready:()=>{let e=$e;e.auth.skip?.(e.stageEnd)},next:()=>{let e=$e;e.auth.skip?.(e.stageEnd)},again:()=>cf(),quit:()=>cf(),spectate:()=>{}}),$e.update()}function cf(){$e?.auth.close(),$e=null,xo?.root.remove(),xo=null,De.setBattle(null);let i="";try{i=localStorage.getItem("ab-nom")??""}catch{}Fr.innerHTML=X2("home",`
    <div class="cast" aria-hidden="true">${qt.map(t=>`<span class="dcard"><img class="dp" data-art="${Yo[t]}" alt=""></span>`).join("")}</div>
    <div class="hplate">
      <h1 class="title">L\u2019\xC9clat</h1>
      <p class="tagline">Huit arm\xE9es. Une seule \xE0 la fin.</p>
      <p class="say">Pr\xE9pare ton arm\xE9e, puis prends l\u2019\xC9clat au centre de l\u2019ar\xE8ne.</p>
      ${Go?`<div class="invite">${bt("flag","ic w")}<span>Invitation : partie <b>${de(Go)}</b></span></div>`:""}
      <label class="fld"><span>Ton nom</span><input id="ab-name" maxlength="24" placeholder="Ton nom" autocomplete="nickname" value="${de(i)}"></label>
      <button class="go" data-go="solo">${bt("swords")}<span>Jouer contre 7 bots</span></button>
      <button class="btn big${Go?" blue":""}" data-go="multi">${bt(Go?"arrow":"person")}${Go?`Rejoindre ${de(Go)}`:"Partie entre amis"}</button>
    </div>
    ${bp.has("dev")?`<div class="plate devbar"><span>Test de charge</span>${[50,100,150].map(t=>`<button class="btn mid" data-go="load-${t}">2 \xD7 ${t}</button>`).join("")}</div>`:""}`),lp(Fr)}var Go=(bp.get("code")??"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5),fd=()=>{let i=document.getElementById("ab-name")?.value.trim()||"Toi";try{localStorage.setItem("ab-nom",i)}catch{}return i.slice(0,24)};Fr.addEventListener("click",i=>{let t=i.target.closest("[data-go]")?.dataset.go;if(t==="solo"&&z2(new Jr(Math.floor(Math.random()*2**31),fd())),t==="multi"){let e=Go;Go="",ud(Fr,fd(),z2,cf,e)}t?.startsWith("load-")&&(location.search=`?load=${t.slice(5)}`)});var $n=null,j2=0,sf=0,Ko=new Map,Wo=null;Cn.style.touchAction="none";var cd=()=>{let[i,t]=[...Ko.values()];return{d:Math.hypot(i.x-t.x,i.y-t.y)||1,x:(i.x+t.x)/2,y:(i.y+t.y)/2}};Cn.addEventListener("pointerdown",i=>{if(Xi.unlock(),Ko.set(i.pointerId,{x:i.clientX,y:i.clientY}),Cn.setPointerCapture?.(i.pointerId),Ko.size===2){$n=null,De.showRed=!1,Wo=cd();return}if(Ko.size>2||Wo)return;let t=$e;!t||t.stage!=="battle"||!t.fight||t.link!=="ok"||($n={x:i.clientX,y:i.clientY,id:i.pointerId},De.showRed=!0,j2=0,dd(performance.now()))});Cn.addEventListener("pointermove",i=>{let t=Ko.get(i.pointerId);if(t&&(t.x=i.clientX,t.y=i.clientY),Wo&&Ko.size>=2){let e=cd();De.zoomAt(e.d/Wo.d,e.x,e.y,Cn),De.panScreen(Wo.x,Wo.y,e.x,e.y,Cn),Wo=e;return}$n&&i.pointerId===$n.id&&($n.x=i.clientX,$n.y=i.clientY)});var hd=i=>{Ko.delete(i.pointerId),$n&&i.pointerId===$n.id&&($n=null,De.showRed=!1),Ko.size===0&&(Wo=null)};Cn.addEventListener("pointerup",hd);Cn.addEventListener("pointercancel",hd);Cn.addEventListener("wheel",i=>{i.preventDefault(),De.zoomAt(Math.exp(-i.deltaY*.0015),i.clientX,i.clientY,Cn)},{passive:!1});function dd(i){let t=$e;if(!$n||!t||!xo||i-j2<1e3/q.battle.dropRate)return;j2=i;let e=De.pick($n.x,$n.y,Cn);if(!e)return;let n=sf*2.399,o=.25+.12*(sf%5),r=e.x+Math.cos(n)*o,a=e.y+Math.sin(n)*o;t.drop(xo.pick,r,a)?(sf++,sf%3===1&&Xi.play("troop_drop",{vol:.5})):t.link==="ok"&&t.fight&&t.fight.b.left(t.mySide)[xo.pick]>0&&xo.toast("Pas ici : zone rouge")}var ld=performance.now(),J2=0,uf=0,Y2=0,Q2="",ff=0;function bd(i){let t=Math.min(.1,(i-ld)/1e3);ld=i,J2++,uf+=t,uf>1&&(Y2=J2/uf,J2=0,uf=0),Bi&&Bi.step(t);let e=$e;if(e){if(e.update(),dd(i),e.stage!==Q2){if(e.stage==="battle"&&(Xi.music("music_raid"),ff=0),e.stage==="prep"&&De.resetView(),Q2==="battle"&&Xi.music(null),e.stage==="results"){let n=e.last?.find(o=>o.loser===e.me);e.alive&&Xi.jingle(n?"music_lose":"music_win")}Q2=e.stage}e.auth.solo&&(e.stage==="battle"&&e.myBattleOver&&(ff||(ff=i),i-ff>1600&&e.auth.skip?.(e.stageEnd)),!e.alive&&e.stage!=="over"&&e.auth.skip?.(e.stageEnd)),De.setSide(e.mySide),De.setBattle(e.stage==="battle"||e.stage==="results"?e.fight?.b??null:null),xo?.render()}De.frame(t,e?e.alpha():Bi?Bi.alpha:1),G2&&(G2.textContent=`${Y2.toFixed(0)} i/s \xB7 ${De.drawn} troupes \xB7 ${De.jsMs.toFixed(1)} ms de script`),requestAnimationFrame(bd)}var lf=Number(bp.get("load")??0),G2=null,Bi=lf>0?(()=>{let i=Bn();i.barbarian=lf;let t=new Zi([{counts:{...i},upgrades:Zr()},{counts:{...i},upgrades:Zr()}]);for(let n=0;n<lf;n++)t.schedule({tick:0,side:0,kind:"barbarian",x:2+n%24,y:9+Math.floor(n/24),seq:n}),t.schedule({tick:0,side:1,kind:"barbarian",x:2+n%24,y:31-Math.floor(n/24),seq:n});De.setBattle(t);let e={acc:0,alpha:1,b:t,step(n){for(e.acc+=n;e.acc>=Ke;)e.acc-=Ke,t.over||t.step();e.alpha=e.acc/Ke}};return e})():null;if(Bi||bp.has("fps")){let i=document.createElement("div");i.className="ab",i.innerHTML=`<div><div class="plate fps"></div>${Bi?`<div class="loadbar">
    <button class="btn mid" onclick="location.search='?dev'">${bt("arrow","ic flip")}Retour</button>
    <button class="btn mid" onclick="location.reload()">${bt("replay")}Relancer</button><span class="plate">2 \xD7 ${lf} en m\xEAl\xE9e</span></div>`:""}</div>`,document.body.appendChild(i),G2=i.querySelector(".fps")}Z2.game={get session(){return $e},solo(i=1,t="Benoit"){return z2(new Jr(i,t)),$e.stage},skip(){let i=$e;return i.auth.skip?.(i.stageEnd),i.update(),i.stage},advance(i){let t=$e;return t.auth.skip?.(t.auth.clock()+i),t.update(),{stage:t.stage,tick:t.fight?.b.tick}},do(i){return $e.do(i)},drop(i,t,e,n=1){let o=0;for(let r=0;r<n;r++)$e.drop(i,t+r%6*.7,e+Math.floor(r/6)*.7)&&o++;return o},red(i){De.showRed=i},state(){let i=$e;return{stage:i.stage,round:i.round,hp:i.player.hp,gold:i.player.gold,side:i.mySide,opp:i.oppSeat,alive:i.alive,units:i.fight?.b.units.length??0,troops:qt.length}},fps:()=>({fps:Y2,js:De.jsMs,drawn:De.drawn}),link(i,t=!1){let e=$e;return e.link=i,e.oppLost=t,e.link},zoom(i,t=innerWidth/2,e=innerHeight/2){return i===0?De.resetView():De.zoomAt(i,t,e,Cn),De.zoom}};De.ready.then(()=>{Z2.__ready=!0},i=>{console.error(i),Z2.__ready=!0});!Bi&&!bp.has("nohome")&&cf();requestAnimationFrame(bd);export{z2 as play};
