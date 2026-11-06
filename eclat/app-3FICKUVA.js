var ad=Object.defineProperty;var pd=(i,t,e)=>t in i?ad(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var C=(i,t,e)=>pd(i,typeof t!="symbol"?t+"":t,e);var Ac=()=>document.documentElement.classList.contains("rot"),sd=()=>window.__screen??{w:innerWidth,h:innerHeight};function ud(){let i=(t,e,n)=>{Object.defineProperty(t,"clientX",{configurable:!0,enumerable:!0,get(){return Ac()?n.call(this):e.call(this)}}),Object.defineProperty(t,"clientY",{configurable:!0,enumerable:!0,get(){return Ac()?sd().w-e.call(this):n.call(this)}})};for(let t of[MouseEvent,typeof Touch<"u"?Touch:null]){if(!t)continue;let e=Object.getOwnPropertyDescriptor(t.prototype,"clientX"),n=Object.getOwnPropertyDescriptor(t.prototype,"clientY");e?.get&&n?.get&&i(t.prototype,e.get,n.get)}}var Ic=window;Ic.__rotate||(Ic.__rotate=!0,ud());var _c="./assets/lilita-BW72GA3X.woff2";var $c="./assets/fredoka-3UPZTCSC.woff2";var Hc="./assets/soldat-VD7AFEPS.webp";var kc="./assets/archere-FKKFB2P7.webp";var Bc="./assets/recolteur-33TAN3DD.webp";var Fc="./assets/soldat-tete-AGMCDKZK.webp";var Nc="./assets/colosse-JB5EJSFW.webp";var Xc="./assets/recolteur-tete-7BNM6UJ6.webp";var Jc="./assets/pillard-333ZQL3C.webp";var Hp={soldat:Hc,archere:kc,recolteur:Bc,veteran:Nc,pillard:Jc,"soldat-tete":Fc,"recolteur-tete":Xc},Nt="#2a1709",Qc=3.6,j=(i=Qc)=>`stroke="${Nt}" stroke-width="${i}" stroke-linejoin="round" stroke-linecap="round"`,Ye=(i,t,e='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${i}" ${e}>${t.map(([n,o])=>`<stop offset="${n}" stop-color="${o}"/>`).join("")}</linearGradient>`,Td=[Ye("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),Ye("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',Ye("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',Ye("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),Ye("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),Ye("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),Ye("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),Ye("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),Ye("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),Ye("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),Ye("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),Ye("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),Ye("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),Ye("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),Ye("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),Ye("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),$p=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${j()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${j()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${j(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${j(3)}/>`,Qi=`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="var(--rc, #cfd5e2)" ${j()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".5"/>
    <path d="M16 58 L50 56 L58 30 L52 32 L46 50 L18 52 Z" fill="#000" opacity=".16"/>`,Ed={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${j()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${j()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${j()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${Nt}" stroke-width="${Qc}" stroke-linecap="round"/>`,trophy:`
    <path d="M18 8 L46 8 L46 22 C46 32 40 38 32 39 C24 38 18 32 18 22 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="${Nt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="${Nt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <rect x="28" y="38" width="8" height="10" fill="url(#h-gold)" ${j(3)}/>
    <rect x="18" y="47" width="28" height="10" rx="3" fill="url(#h-wood)" ${j()}/>
    <path d="M24 13 L24 24 C24 28 26 31 29 33" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".75"/>`,rank:`
    <rect x="22" y="22" width="20" height="36" rx="2" fill="url(#h-gold)" ${j()}/>
    <rect x="4" y="34" width="18" height="24" rx="2" fill="url(#h-steel)" ${j()}/>
    <rect x="42" y="42" width="18" height="16" rx="2" fill="url(#h-wood)" ${j()}/>
    <path d="M32 4 L35 10 L42 11 L37 16 L38 22 L32 19 L26 22 L27 16 L22 11 L29 10 Z" fill="url(#h-gold)" ${j(2.6)}/>
    <path d="M26 27 L26 52" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".6"/>`,countdown:`
    <circle cx="32" cy="35" r="24" fill="url(#h-white)" ${j()}/>
    <path d="M32 35 L32 15 A20 20 0 0 1 51 41 Z" fill="url(#h-red)" opacity=".85"/>
    <circle cx="32" cy="35" r="24" fill="none" ${j()}/>
    <path d="M32 21 L32 35 L22 41" fill="none" ${j()}/>
    <rect x="26" y="3" width="12" height="7" rx="3" fill="url(#h-gold)" ${j(2.5)}/>
    <path d="M50 10 L56 16" stroke="${Nt}" stroke-width="6" stroke-linecap="round"/>`,forge:`
    <path d="M6 26 L32 8 L58 26 L52 29 L32 16 L12 29 Z" fill="url(#h-roof)" ${j()}/>
    <path d="M12 28 L12 56 M52 28 L52 56" stroke="${Nt}" stroke-width="7"/><path d="M12 29 L12 55 M52 29 L52 55" stroke="url(#h-wood-x)" stroke-width="3"/>
    <circle cx="32" cy="36" r="10" fill="url(#h-gold-glow)"/>
    <path d="M18 40 L46 40 L42 46 L36 46 L38 54 L26 54 L28 46 L22 46 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M44 40 L54 40 L48 44 L44 44 Z" fill="url(#h-steel)" ${j(2.6)}/>
    <path d="M22 41 L34 41" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`,reserve:`
    <path d="M18 14 L30 6 L36 12 L46 8 L50 20 L42 26 L22 26 Z" fill="url(#h-cry)" ${j()}/>
    <path d="M29 8 L31 22 L26 22 Z" fill="#fff" opacity=".7"/>
    <path d="M6 22 L32 12 L58 22 L58 46 L32 58 L6 46 Z" fill="url(#h-white)" ${j()}/>
    <path d="M6 22 L32 32 L58 22 L32 12 Z" fill="url(#h-cry)" ${j()}/>
    <path d="M14 22 L32 16 L44 20" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M32 32 L32 58" stroke="${Nt}" stroke-width="3.2"/>
    <path d="M6 34 L32 44 L58 34" stroke="#a89f8c" stroke-width="2.2" fill="none"/>
    <path d="M6 22 L6 46 M32 32 L32 58 M58 22 L58 46" stroke="${Nt}" stroke-width="8"/>
    <path d="M6 23 L6 45 M32 33 L32 57 M58 23 L58 45" stroke="#5a5560" stroke-width="4"/>`,sanctuaire:`
    <ellipse cx="32" cy="50" rx="28" ry="10" fill="url(#h-white)" ${j()}/>
    <circle cx="32" cy="34" r="22" fill="url(#h-cry-glow)"/>
    <path d="M17 42 L18 22 L23 19 L27 23 L26 42 Z" fill="url(#h-steel)" ${j(2.8)}/>
    <path d="M37 42 L37 23 L41 19 L46 22 L47 42 Z" fill="url(#h-steel)" ${j(2.8)}/>
    <path d="M24 49 L25 16 L32 6 L39 16 L40 49 Z" fill="url(#h-cry)" ${j()}/>
    <path d="M32 18 L32 40 M27 24 L32 29 L37 24 M28 36 L32 40 L36 36" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
    <path d="M4 52 L6 30 L12 27 L16 31 L15 54 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M48 54 L48 31 L53 27 L58 30 L60 52 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M8 33 L11 30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`,"rune-soldat":`${Qi}<g transform="translate(32 33) scale(.42) rotate(38) translate(-32 -32)">${$p}</g>`,"rune-archere":`${Qi}
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="${Nt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="url(#h-wood-x)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M22 16 L22 50" stroke="${Nt}" stroke-width="1.6"/>
    <path d="M18 33 L44 33" stroke="${Nt}" stroke-width="3.2" stroke-linecap="round"/><path d="M44 33 L38 29 M44 33 L38 37" stroke="${Nt}" stroke-width="3" stroke-linecap="round"/>`,"rune-veteran":`${Qi}
    <path d="M28 26 L40 48" stroke="${Nt}" stroke-width="8" stroke-linecap="round"/><path d="M28 26 L40 48" stroke="url(#h-wood-x)" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M17 24 L27 14 L37 22 L27 32 Z" fill="url(#h-steel)" ${j(2.6)}/>`,"rune-pillard":`${Qi}
    <path d="M24 48 L38 20" stroke="${Nt}" stroke-width="7" stroke-linecap="round"/><path d="M24 48 L38 20" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <path d="M33 18 C38 12 46 14 48 20 C44 22 41 26 40 30 Z" fill="url(#h-steel)" ${j(2.6)}/>`,"rune-tour":`${Qi}
    <path d="M25 30 L39 30 L41 48 L23 48 Z" fill="url(#h-white)" ${j(2.6)}/>
    <path d="M21 22 L43 22 L43 30 L21 30 Z" fill="url(#h-wood)" ${j(2.6)}/>
    <path d="M18 23 L32 12 L46 23 Z" fill="url(#h-roof)" ${j(2.6)}/>`,"rune-mortier":`${Qi}
    <ellipse cx="32" cy="42" rx="14" ry="6" fill="url(#h-white)" ${j(2.6)}/>
    <path d="M24 40 C23 31 27 24 34 20 L41 30 C37 33 34 37 31 42 Z" fill="#4a4f5e" ${j(2.6)}/>
    <circle cx="44" cy="17" r="4" fill="#2b2f3a" ${j(2.2)}/>`,swords:`<g transform="rotate(-42 32 32)">${$p}</g><g transform="rotate(42 32 32)">${$p}</g>`,shovel:`
    <g transform="rotate(-32 32 32)">
      <path d="M22 4 L42 4" stroke="${Nt}" stroke-width="11" stroke-linecap="round"/>
      <path d="M22 4 L42 4" stroke="url(#h-wood-x)" stroke-width="5" stroke-linecap="round"/>
      <rect x="28.5" y="4" width="7" height="32" rx="2" fill="url(#h-wood-x)" ${j()}/>
      <path d="M18 36 L46 36 L46 48 C46 56 40 63 32 63 C24 63 18 56 18 48 Z" fill="url(#h-steel)" ${j()}/>
      <path d="M23 41 L28 41 L28 52 C25 51 23 48 23 45 Z" fill="#fff" opacity=".75"/>
      <rect x="27" y="31" width="10" height="8" rx="2" fill="#8f97ab" ${j(3)}/>
    </g>`,house:`
    <path d="M14 30 L50 30 L50 57 L14 57 Z" fill="url(#h-cream)" ${j()}/>
    <path d="M14 46 L50 46 L50 57 L14 57 Z" fill="#cfc6b6" ${j(3)}/>
    <path d="M27 57 L27 45 C27 41 37 41 37 45 L37 57 Z" fill="url(#h-wood)" ${j(3)}/>
    <path d="M32 33 L35.5 37 L32 41 L28.5 37 Z" fill="url(#h-cry)" ${j(2.4)}/>
    <path d="M5 34 L32 8 L59 34 L52 37 L32 18 L12 37 Z" fill="url(#h-roof)" ${j()}/>
    <path d="M14 30 L32 13 L36 16 L17 33 Z" fill="#fff" opacity=".45"/>`,map:`
    <path d="M6 14 L23 8 L41 14 L58 8 L58 50 L41 56 L23 50 L6 56 Z" fill="url(#h-parch)" ${j()}/>
    <path d="M23 8 L23 50 L41 56 L41 14 Z" fill="#d9b779" opacity=".55"/>
    <path d="M23 8 L23 50 M41 14 L41 56" stroke="${Nt}" stroke-width="2.4"/>
    <path d="M10 22 C13 18 18 19 18 24 C18 28 12 29 10 26 Z" fill="#6fae3e" ${j(2.2)}/>
    <path d="M13 46 C20 40 24 36 31 36 C38 36 40 30 46 24" fill="none" stroke="#c22a20" stroke-width="3.2" stroke-dasharray="4 4.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="${Nt}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="#ff5a47" stroke-width="3.5" stroke-linecap="round"/>`,village:`
    <path d="M2 56 C10 40 54 40 62 56 L62 60 L2 60 Z" fill="url(#h-green)" ${j()}/>
    <path d="M44 44 L44 34" stroke="${Nt}" stroke-width="7" stroke-linecap="round"/>
    <path d="M44 44 L44 34" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="44" cy="25" r="11" fill="url(#h-green)" ${j()}/>
    <path d="M38 22 C39 18 42 16 45 16" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M10 26 L32 26 L32 46 L10 46 Z" fill="url(#h-cream)" ${j()}/>
    <path d="M18 46 L18 37 C18 34 24 34 24 37 L24 46 Z" fill="url(#h-wood)" ${j(2.6)}/>
    <path d="M4 30 L21 12 L38 30 L33 32 L21 20 L9 32 Z" fill="url(#h-roof)" ${j()}/>`,book:`
    <path d="M16 10 L54 10 L54 58 L16 58 Z" fill="url(#h-cream)" ${j()}/>
    <path d="M50 14 L50 54" stroke="#cbbb98" stroke-width="2"/><path d="M46 14 L46 54" stroke="#cbbb98" stroke-width="2"/>
    <path d="M10 6 L44 6 C46 6 47 7 47 9 L47 56 C47 58 46 59 44 59 L10 59 Z" fill="url(#h-leather)" ${j()}/>
    <path d="M10 6 L18 6 L18 59 L10 59 Z" fill="#5a2610" ${j(3)}/>
    <path d="M32 20 L39 31 L32 42 L25 31 Z" fill="url(#h-cry)" ${j(2.8)}/>
    <path d="M30 24 L32 21 L32 30 L28 30 Z" fill="#fff" opacity=".7"/>
    <path d="M22 10 L42 10" stroke="#f5b97c" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`,hourglass:`
    <path d="M18 11 L46 11 C46 23 36 28 34 32 C36 36 46 41 46 53 L18 53 C18 41 28 36 30 32 C28 28 18 23 18 11 Z" fill="url(#h-glass)" ${j()}/>
    <path d="M22 15 L42 15 C40 22 34 25 32 29 C30 25 24 22 22 15 Z" fill="url(#h-sand)"/>
    <path d="M21 50 C24 43 40 43 43 50 Z" fill="url(#h-sand)"/>
    <path d="M32 30 L32 46" stroke="#e7ae45" stroke-width="2"/>
    <path d="M24 14 C24 20 28 24 30 26" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>
    <rect x="10" y="4" width="44" height="8" rx="3" fill="url(#h-wood)" ${j()}/>
    <rect x="10" y="52" width="44" height="8" rx="3" fill="url(#h-wood)" ${j()}/>`,fast:`
    <path d="M6 14 L30 32 L6 50 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M30 14 L54 32 L30 50 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M10 21 L20 28 L10 31 Z" fill="#fff" opacity=".7"/><path d="M34 21 L44 28 L34 31 Z" fill="#fff" opacity=".7"/>
    <path d="M58 14 L58 50" stroke="${Nt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 14 L58 50" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>`,clock:`
    <circle cx="32" cy="34" r="24" fill="url(#h-white)" ${j()}/>
    <path d="M32 20 L32 34 L42 40" fill="none" ${j()}/>
    <rect x="26" y="4" width="12" height="7" rx="3" fill="url(#h-gold)" ${j(2.5)}/>`,helmet:`
    <path d="M10 40 C10 22 20 12 32 12 C44 12 54 22 54 40 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M32 6 L32 13" stroke="${Nt}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 6 L32 13" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="6" y="38" width="52" height="9" rx="4.5" fill="url(#h-gold)" ${j()}/>
    <rect x="28.5" y="45" width="7" height="14" rx="2.5" fill="url(#h-steel)" ${j(3)}/>
    <path d="M18 34 C18 26 23 20 30 18" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".85"/>`,tent:`
    <path d="M6 56 L32 8 L58 56 Z" fill="url(#h-cream)" ${j()}/>
    <path d="M32 8 L58 56 L40 56 Z" fill="#d8c7a2" opacity=".8"/>
    <path d="M24 56 L32 34 L40 56 Z" fill="#5a3418" ${j(3)}/>
    <path d="M32 8 L32 2" stroke="${Nt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 2 L44 5 L32 9 Z" fill="url(#h-red)" ${j(2.4)}/>`,flag:`
    <path d="M16 6 L16 60" stroke="${Nt}" stroke-width="9" stroke-linecap="round"/>
    <path d="M16 6 L16 60" stroke="url(#h-wood-x)" stroke-width="4" stroke-linecap="round"/>
    <path d="M18 10 C30 4 38 16 54 10 L54 36 C38 42 30 30 18 36 Z" fill="url(#h-white)" ${j()}/>
    <path d="M22 14 C28 11 32 13 36 15" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,mushroom:`
    <path d="M24 34 C24 44 22 52 20 58 L44 58 C42 52 40 44 40 34 Z" fill="url(#h-cream)" ${j()}/>
    <path d="M26 40 C27 47 26 52 25 56" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M4 34 C4 16 18 6 32 6 C46 6 60 16 60 34 C60 38 56 40 52 40 L12 40 C8 40 4 38 4 34 Z" fill="url(#h-roof)" ${j()}/>
    <circle cx="20" cy="22" r="5" fill="#fff4dc" ${j(2.4)}/><circle cx="38" cy="15" r="4" fill="#fff4dc" ${j(2.4)}/><circle cx="46" cy="29" r="4.5" fill="#fff4dc" ${j(2.4)}/><circle cx="29" cy="32" r="3" fill="#fff4dc" ${j(2.2)}/>
    <path d="M12 26 C14 18 20 13 27 11" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>`,rune:`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".55"/>
    <path d="M20 22 L32 16 L44 22 M32 16 L32 48 M22 44 L32 48 L42 44" fill="none" stroke="#6b7186" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 26 L38 33 L32 40 L26 33 Z" fill="url(#h-cry)" ${j(2.6)}/>`,hammer:`
    <path d="M26 30 L46 58" stroke="${Nt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M26 30 L46 58" stroke="url(#h-wood-x)" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M8 26 L22 8 L32 14 L40 10 L50 18 L42 26 L34 24 L20 40 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M14 24 L23 13 L30 17 L22 22 Z" fill="#fff" opacity=".85"/>`,shield:`
    <path d="M32 5 L54 13 L54 30 C54 45 44 55 32 59 C20 55 10 45 10 30 L10 13 Z" fill="url(#h-steel)" ${j()}/>
    <path d="M32 12 L47 17.5 L47 30 C47 40 41 47 32 51 Z" fill="#9aa2b8" opacity=".55"/>
    <path d="M17 18 L29 13.5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>`,lock:`
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="${Nt}" stroke-width="11"/>
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="url(#h-steel)" stroke-width="5"/>
    <rect x="12" y="26" width="40" height="32" rx="7" fill="url(#h-gold)" ${j()}/>
    <circle cx="32" cy="40" r="4.5" fill="${Nt}"/><rect x="30" y="41" width="4" height="9" rx="2" fill="${Nt}"/>`,heart:`
    <path d="M32 56 C18 46 6 36 6 22 C6 13 13 7 21 7 C26 7 30 10 32 14 C34 10 38 7 43 7 C51 7 58 13 58 22 C58 36 46 46 32 56 Z" fill="url(#h-red)" ${j()}/>
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${$p}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${j()}/>
    <path d="M10 50 L56 50" stroke="${Nt}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${j(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${j()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${j(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${j(2.4)}/>
    <path d="M32 32 L58 6" stroke="${Nt}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${Nt}" stroke-width="3" stroke-linejoin="round"/>`,eye:`
    <path d="M3 33 C13 15 51 15 61 33 C51 51 13 51 3 33 Z" fill="url(#h-white)" ${j()}/>
    <circle cx="32" cy="33" r="13" fill="url(#h-cry)" ${j(3)}/>
    <circle cx="32" cy="33" r="5.5" fill="${Nt}"/>
    <circle cx="27.5" cy="28.5" r="3" fill="#fff"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${j()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${j()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${j()}/>
    <circle cx="32" cy="18" r="4.5" fill="${Nt}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${Nt}"/>`,minus:`<path d="M16 32 L48 32" stroke="${Nt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,plus:`<path d="M16 32 L48 32 M32 16 L32 48" stroke="${Nt}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32 M32 16 L32 48" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${j()}/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${j(3)}/>
    <path d="M32 7 C20 7 15 17 15 28 L15 37 L8 46 L56 46 L49 37 L49 28 C49 17 44 7 32 7 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M22 26 C22 19 26 14 31 13" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`,sound:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M42 22 C47 27 47 37 42 42" fill="none" stroke="${Nt}" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 15 C57 24 57 40 48 49" fill="none" stroke="${Nt}" stroke-width="5" stroke-linecap="round"/>`,mute:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M42 24 L56 40 M56 24 L42 40" fill="none" stroke="${Nt}" stroke-width="5.5" stroke-linecap="round"/>`,check:`<path d="M12 34 L26 48 L52 18" fill="none" stroke="${Nt}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 34 L26 48 L52 18" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>`,move:`
    <path d="M32 4 L42 16 L35 16 L35 29 L48 29 L48 22 L60 32 L48 42 L48 35 L35 35 L35 48 L42 48 L32 60 L22 48 L29 48 L29 35 L16 35 L16 42 L4 32 L16 22 L16 29 L29 29 L29 16 L22 16 Z" fill="url(#h-white)" ${j()}/>`,barracks:`
    <path d="M10 30 L54 30 L54 58 L10 58 Z" fill="url(#h-cream)" ${j()}/>
    <path d="M10 46 L54 46 L54 58 L10 58 Z" fill="#cfc6b6" ${j(3)}/>
    <path d="M4 33 L32 8 L60 33 L53 36 L32 17 L11 36 Z" fill="url(#h-roof)" ${j()}/>
    <path d="M24 58 L24 46 C24 40 40 40 40 46 L40 58 Z" fill="url(#h-wood)" ${j(3)}/>
    <path d="M24 26 L40 26 L40 34 C40 39 36 42 32 43 C28 42 24 39 24 34 Z" fill="url(#h-red)" ${j(2.6)}/>
    <path d="M27 28 L37 39 M37 28 L27 39" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,tower:`
    <path d="M20 34 L44 34 L47 61 L17 61 Z" fill="url(#h-white)" ${j()}/>
    <path d="M19 44 L45 44 M18 53 L46 53 M28 34 L28 44 M38 44 L38 53 M27 53 L27 61" stroke="#a89f8c" stroke-width="2.2"/>
    <path d="M14 22 L50 22 L50 34 L14 34 Z" fill="url(#h-wood)" ${j()}/>
    <path d="M20 22 L20 34 M27 22 L27 34 M37 22 L37 34 M44 22 L44 34" stroke="#7c4420" stroke-width="2.2"/>
    <path d="M30 44 L34 44 L34 52 L30 52 Z" fill="${Nt}"/>
    <path d="M9 24 L32 2 L55 24 Z" fill="url(#h-roof)" ${j()}/>
    <path d="M17 21 L32 7 L29 21 Z" fill="#fff" opacity=".4"/>`,mortar:`
    <ellipse cx="32" cy="48" rx="26" ry="11" fill="url(#h-white)" ${j()}/>
    <path d="M6 48 L6 53 C6 59 58 59 58 53 L58 48" fill="#b8ae99" ${j()}/>
    <path d="M18 44 C16 30 22 18 34 12 L46 30 C40 36 34 42 30 48 Z" fill="#4a4f5e" ${j()}/>
    <ellipse cx="40" cy="21" rx="8" ry="11" transform="rotate(-56 40 21)" fill="#2b2f3a" ${j()}/>
    <path d="M22 40 C21 31 25 23 32 18" stroke="#9aa1b5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="40" r="5" fill="#3a3f4c" ${j(2.4)}/>`,wall:`
    <path d="M4 30 C4 24 12 22 16 26 C20 21 28 21 32 26 C36 21 44 21 48 26 C52 22 60 24 60 30 L60 56 L4 56 Z" fill="url(#h-white)" ${j()}/>
    <path d="M4 42 L60 42 M18 30 L18 42 M32 30 L32 42 M46 30 L46 42 M11 42 L11 56 M25 42 L25 56 M39 42 L39 56 M53 42 L53 56" stroke="#9b917c" stroke-width="2.4"/>
    <path d="M8 31 C10 27 14 27 15 29" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,chest:`
    <path d="M8 30 L56 30 L56 56 L8 56 Z" fill="url(#h-wood)" ${j()}/>
    <path d="M8 30 C8 16 56 16 56 30 Z" fill="url(#h-wood)" ${j()}/>
    <path d="M8 36 L56 36" stroke="${Nt}" stroke-width="3"/>
    <path d="M18 18 L18 56 M46 18 L46 56" stroke="${Nt}" stroke-width="7"/><path d="M18 19 L18 55 M46 19 L46 55" stroke="url(#h-gold)" stroke-width="3.6"/>
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${j(2.4)}/>`,rotate:`
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="${Nt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 6 L60 10 L54 30 Z" fill="url(#h-gold)" ${j(2.6)}/>`,replay:`
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="${Nt}" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 10 L16 30 L22 12 Z" fill="url(#h-white)" ${j(2.6)}/>
    <path d="M26 22 L44 32 L26 42 Z" fill="url(#h-gold)" ${j(2.6)}/>`,alert:`
    <path d="M32 5 L60 54 C61 57 59 59 56 59 L8 59 C5 59 3 57 4 54 Z" fill="url(#h-red)" ${j()}/>
    <rect x="28.5" y="20" width="7" height="22" rx="3" fill="#fff" ${j(2)}/>
    <circle cx="32" cy="50" r="4" fill="#fff" ${j(2)}/>`,star:`<path d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z" fill="url(#h-gold)" ${j()}/>
    <path d="M32 13 L37 25 L28 26 Z" fill="#fff" opacity=".7"/>`,gate:`
    <rect x="4" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${j()}/><rect x="46" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${j()}/>
    <path d="M18 58 L18 34 C18 22 46 22 46 34 L46 58 Z" fill="url(#h-wood)" ${j()}/>
    <path d="M32 26 L32 58" stroke="${Nt}" stroke-width="3"/>
    <path d="M18 40 L46 40" stroke="url(#h-gold)" stroke-width="3.5"/>`,close:`<path d="M18 18 L46 46 M46 18 L18 46" stroke="${Nt}" stroke-width="13" stroke-linecap="round"/>
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},lt=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,zc=!1;function kf(){if(zc){document.querySelectorAll("img[data-art]").forEach(e=>{e.src=Hp[e.dataset.art],e.alt="",e.draggable=!1});return}zc=!0;let i=document.createElement("style");i.textContent=`@font-face{font-family:"Lilita";src:url(${_c}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${$c}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(i);let t=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${Td}</defs>`;for(let[e,n]of Object.entries(Ed))t+=`<symbol id="i-${e}" viewBox="0 0 64 64" overflow="visible">${n}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${t}</svg>`),document.querySelectorAll("img[data-art]").forEach(e=>{e.src=Hp[e.dataset.art],e.alt="",e.draggable=!1})}var kp=(i,t,e,n,o="")=>`<div class="ctr ${i}">${o?`<span class="max n">${o}</span>`:""}<span class="track"><i style="width:${n}%"></i></span><span class="v n">${e}</span>${lt(t)}</div>`,b9=`<button class="x"><span class="face">${lt("close")}</span></button>`,d9=`<div class="hud">
  <div class="tl">${kp("cry","crystal","1 240",83,"Max 1 500")}${kp("mush","mushroom","860",57,"Max 1 500")}${kp("rune","rune","3",0)}</div>
  <div class="tc">${kp("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${lt("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${lt("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${lt("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${lt("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${lt("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${lt("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${lt("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;function Bf(i){i.querySelectorAll("img[data-art]").forEach(t=>{let e=Hp[t.dataset.art];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var ee=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var ji=i=>(i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`);var jc="./assets/ui_tap-KWIPUKCV.mp3";var Zc="./assets/ui_open-YSL7SZAG.mp3";var Yc="./assets/ui_close-EFYUEE7E.mp3";var Gc="./assets/ui_error-ZUUDUV6B.mp3";var Wc="./assets/ui_coins-UQFARDBX.mp3";var Kc="./assets/build_place-AJNKOBOM.mp3";var qc="./assets/build_lift-ROHD6QPX.mp3";var t0="./assets/build_hammer-ETQSYE7E.mp3";var e0="./assets/build_done-LHFJ763M.mp3";var n0="./assets/collect_crystal-EH5LY25Y.mp3";var o0="./assets/collect_mushroom-P4PKF7JT.mp3";var i0="./assets/alert_attack-4JCOXVK2.mp3";var r0="./assets/raid_start-GQO57AU3.mp3";var a0="./assets/troop_drop-TXHYCU7M.mp3";var p0="./assets/battle_cry-MHWM65EL.mp3";var s0="./assets/sword_hit-C3I5IP4X.mp3";var u0="./assets/bow_shot-DU3Q5ME7.mp3";var f0="./assets/arrow_hit-GU5F3AZO.mp3";var l0="./assets/mortar_fire-55PCFJWD.mp3";var c0="./assets/mortar_impact-FFLUEV66.mp3";var h0="./assets/building_hit-SVLVCHM7.mp3";var b0="./assets/building_fall-HN64CLQT.mp3";var d0="./assets/unit_death-VKWG44ZQ.mp3";var y0="./assets/loot-4CMJPKD5.mp3";var m0="./assets/map_clouds-JUUCDZDP.mp3";var g0="./assets/amb_village-VUB2HF6J.mp3";var T0="./assets/music_village-OMKKDIQC.mp3";var E0="./assets/music_raid-VAZ2GGVK.mp3";var V0="./assets/music_win-LAC54U6M.mp3";var S0="./assets/music_lose-RWDS7XZ3.mp3";var Wd={ui_tap:jc,ui_open:Zc,ui_close:Yc,ui_error:Gc,ui_coins:Wc,build_place:Kc,build_lift:qc,build_hammer:t0,build_done:e0,collect_crystal:n0,collect_mushroom:o0,alert_attack:i0,raid_start:r0,troop_drop:a0,battle_cry:p0,sword_hit:s0,bow_shot:u0,arrow_hit:f0,mortar_fire:l0,mortar_impact:c0,building_hit:h0,building_fall:b0,unit_death:d0,loot:y0,map_clouds:m0,amb_village:g0,music_village:T0,music_raid:E0,music_win:V0,music_lose:S0},Kd={ui_tap:.45,ui_open:.45,ui_close:.4,ui_error:.55,ui_coins:.6,build_place:.8,build_lift:.5,build_hammer:.6,build_done:.7,collect_crystal:.6,collect_mushroom:.6,alert_attack:.85,raid_start:.85,troop_drop:.5,battle_cry:.6,sword_hit:.5,bow_shot:.45,arrow_hit:.45,mortar_fire:.7,mortar_impact:.75,building_hit:.6,building_fall:.8,unit_death:.55,loot:.7,map_clouds:.6},qd=.9,ty=new Set(["troop_drop","battle_cry","sword_hit","bow_shot","arrow_hit","mortar_fire","mortar_impact","building_hit","unit_death","build_hammer","collect_crystal","collect_mushroom"]),ey=.06,ny=100,oy=4,iy=24,ry=250,w0=1.2,P0=1.5,L0=.25,ay={sfx:1,music:.55,ambience:.6},Ff={sfx:"shardholm.mute.sfx",music:"shardholm.mute.music"},Nf={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}};function py(i,t){return new Promise((e,n)=>{try{let o=i.decodeAudioData(t,e,n);o&&typeof o.then=="function"&&o.then(e,n)}catch(o){n(o)}})}var sy={music_village:2822621/44100,music_raid:2419326/44100,amb_village:1014311/44100},uy=1105/44100;function fy(i,t){let e=sy[i];if(!e||e>t.duration+.004)return[0,t.duration];if(Math.abs(t.duration-e)<.004)return[0,t.duration];let n=Math.min(uy,t.duration-e);return[n,n+e]}function Xf(i,t,e,n){i.cancelScheduledValues(e),i.setValueAtTime(i.value,e),i.linearRampToValueAtTime(t,e+n)}var Jf=class{constructor(){C(this,"g",null);C(this,"dead",!1);C(this,"primed",!1);C(this,"hidden",!1);C(this,"mutes",null);C(this,"vol",{...ay});C(this,"buffers",new Map);C(this,"ready",new Map);C(this,"recent",new Map);C(this,"voices",0);C(this,"wantMusic",null);C(this,"track",null);C(this,"wantAmb",!1);C(this,"amb",null)}unlock(){let t=this.graph();if(t)try{if(t.ctx.state!=="running"&&!this.hidden&&t.ctx.resume().catch(()=>{}),!this.primed){this.primed=!0;let e=t.ctx.createBufferSource();e.buffer=t.ctx.createBuffer(1,1,22050),e.connect(t.ctx.destination),e.start(0)}}catch{}}play(t,e={}){try{let n=this.graph();if(!n||this.m().sfx||n.ctx.state!=="running")return;let o=performance.now();if(!this.allow(t,o))return;let r=this.ready.get(t);if(r){this.start(n,r,t,e);return}this.load(t).then(a=>{a&&performance.now()-o<ry&&this.start(n,a,t,e)})}catch{}}music(t){try{this.wantMusic=t;let e=this.graph();if(!e)return;if(!t||this.m().music){this.stopTrack(e);return}if(this.track?.name===t)return;this.withBuffer(t,n=>{this.wantMusic!==t||this.m().music||this.track?.name===t||(this.stopTrack(e),this.track=this.loop(e,t,n,e.loops,w0))})}catch{}}ambience(t){try{this.wantAmb=t;let e=this.graph();if(!e)return;if(!t||this.m().sfx){this.amb&&(this.fadeOut(e,this.amb,P0),this.amb=null);return}if(this.amb)return;this.withBuffer("amb_village",n=>{!this.wantAmb||this.amb||this.m().sfx||(this.amb=this.loop(e,"amb_village",n,e.bus.ambience,P0))})}catch{}}jingle(t){try{let e=this.graph();if(!e||this.m().music||e.ctx.state!=="running")return;this.withBuffer(t,n=>{let{ctx:o}=e,r=o.currentTime,a=r+n.duration,p=o.createBufferSource();p.buffer=n;let s=o.createGain();s.gain.value=qd,p.connect(s).connect(e.bus.music),p.onended=()=>{try{p.disconnect(),s.disconnect()}catch{}};let u=e.loops.gain;Xf(u,L0,r,.2),u.setValueAtTime(L0,Math.max(r+.2,a-.2)),u.linearRampToValueAtTime(1,a+1.2),p.start(r)})}catch{}}setMuted(t,e){try{this.m()[t]=e,Nf.set(Ff[t],e?"1":"0");let n=this.g;if(!n)return;this.applyBus(n),t==="music"?this.music(this.wantMusic):this.ambience(this.wantAmb)}catch{}}muted(t){return this.m()[t]}setVolume(t,e){this.vol[t]=Math.min(1,Math.max(0,Number.isFinite(e)?e:0));try{this.g&&this.applyBus(this.g)}catch{}}volume(t){return this.vol[t]}preload(t){return Promise.all(t.map(e=>this.load(e))).then(()=>{},()=>{})}m(){return this.mutes||(this.mutes={sfx:Nf.get(Ff.sfx)==="1",music:Nf.get(Ff.music)==="1"}),this.mutes}graph(){if(this.g||this.dead)return this.g;try{let t=typeof AudioContext<"u"?AudioContext:globalThis.webkitAudioContext;if(!t)return this.dead=!0,null;let e=new t,n=r=>{let a=e.createGain();return a.connect(r),a},o={sfx:n(e.destination),music:n(e.destination),ambience:n(e.destination)};this.g={ctx:e,bus:o,loops:n(o.music)},this.applyBus(this.g,0),typeof document<"u"&&document.addEventListener("visibilitychange",()=>this.onVisibility())}catch{this.dead=!0,this.g=null}return this.g}applyBus(t,e=.08){let n=this.m(),o=t.ctx.currentTime,r={sfx:n.sfx?0:this.vol.sfx,ambience:n.sfx?0:this.vol.ambience,music:n.music?0:this.vol.music};for(let a of["sfx","music","ambience"])e>0?Xf(t.bus[a].gain,r[a],o,e):t.bus[a].gain.value=r[a]}onVisibility(){try{let t=this.g;if(!t)return;document.hidden?t.ctx.state==="running"&&(this.hidden=!0,t.ctx.suspend().catch(()=>{})):this.hidden&&(this.hidden=!1,t.ctx.resume().catch(()=>{}))}catch{}}load(t){let e=this.buffers.get(t);if(e)return e;let n=this.graph();if(!n)return Promise.resolve(null);try{e=fetch(Wd[t]).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(`${t}: HTTP ${o.status}`))).then(o=>py(n.ctx,o)).then(o=>(this.ready.set(t,o),o),()=>null)}catch{e=Promise.resolve(null)}return this.buffers.set(t,e),e}withBuffer(t,e){let n=this.ready.get(t);if(n){e(n);return}this.load(t).then(o=>{if(o)try{e(o)}catch{}})}allow(t,e){let n=(this.recent.get(t)??[]).filter(r=>e-r<ny),o=n.length<oy;return o&&n.push(e),this.recent.set(t,n),o}start(t,e,n,o){try{if(this.voices>=iy)return;let{ctx:r}=t,a=r.createBufferSource();a.buffer=e;let p=o.rate??(ty.has(n)?1+(Math.random()*2-1)*ey:1);a.playbackRate.value=Math.min(4,Math.max(.25,p));let s=r.createGain();s.gain.value=Math.max(0,(o.vol??1)*Kd[n]),a.connect(s);let u=s;if(o.pan&&typeof r.createStereoPanner=="function"){let f=r.createStereoPanner();f.pan.value=Math.min(1,Math.max(-1,o.pan)),s.connect(f),u=f}u.connect(t.bus.sfx),a.onended=()=>{this.voices--;try{a.disconnect(),s.disconnect(),u.disconnect()}catch{}},a.start(),this.voices++}catch{}}loop(t,e,n,o,r){let{ctx:a}=t,p=a.currentTime,s=a.createBufferSource();s.buffer=n,s.loop=!0;let[u,f]=fy(e,n);s.loopStart=u,s.loopEnd=f;let l=a.createGain();return l.gain.setValueAtTime(0,p),l.gain.linearRampToValueAtTime(1,p+r),s.connect(l).connect(o),s.start(p,u),{name:e,src:s,gain:l}}stopTrack(t){this.track&&(this.fadeOut(t,this.track,w0),this.track=null)}fadeOut(t,e,n){try{let o=t.ctx.currentTime;Xf(e.gain.gain,0,o,n),e.src.onended=()=>{try{e.src.disconnect(),e.gain.disconnect()}catch{}},e.src.stop(o+n+.05)}catch{}}},Zi=new Jf;var U0=`/* L'\xC9clat in direction D \xAB Banni\xE8res \xBB (chosen by Benoit on 06/11 among the four of design/ui/eclat/): the mode's own
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
`;var C0=`/* The auto-battler's page: where its pieces go and how big they are. Their look is the mode's theme (client/
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
/* the four offers, as lines in 2 \xD7 2 after the two buttons */
.shop.lines .otg { flex: 1; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 6px; }
/* a troop's sheet, beside the army in the shop's place and up to the top of the panels: the row touched ringed in
   yellow, the sheet's arrow pointing at it from the army's edge */
.tfb { position: absolute; left: calc(var(--ml) + var(--army-w) + 8px); right: calc(var(--mr) + var(--pl-w) + 10px); top: calc(var(--t) + 42px); bottom: calc(var(--b) - 2px);
  padding: 8px 10px 10px; box-shadow: inset 0 0 0 2px var(--yel), var(--plate-sh); }
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
/* the army's seven rows (06/11: the banner) and the eight players fit a phone 390 high, its home bar's margin included
   (7 \xD7 31; six rows of 37 before the banner) */
.army { padding-bottom: 7px; }
.capbar { margin: 6px 0 5px; }
.rows { gap: 2px; } .trow { height: 31px; } .trow .pt { width: 30px; height: 30px; }
.foot { margin-top: 5px; }
.prow { height: 24px; }
/* taller (932 \xD7 430): the board's own sizes */
@container page (min-height: 420px) {
  .rows { gap: 3px; } .trow { height: 35px; } .trow .pt { width: 34px; height: 34px; }
  .prow { height: 26px; }
}
/* shorter (667 \xD7 375) */
@container page (max-height: 380px) {
  .trow { height: 30px; } .trow .pt { width: 29px; height: 29px; }
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
  .trow { grid-template-columns: 34px 28px minmax(0, 1fr) 46px; gap: 5px; }
  .trow .pt { width: 34px; height: 34px; }
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
  .tfb-st .b, .tfb-st .ar { font-size: 10px; } .tfb-st .v { font-size: 12.5px; } .tfb-st .vv small { min-width: 22px; font-size: 8.5px; }
  .tfb-none { font-size: 9.5px; }
  .tfb-f { gap: 10px; }
  .tf-rules li { gap: 5px; font-size: 10px; } .tf-rules li .ic { width: 13px; height: 13px; }
  .vsi { gap: 4px 6px; } .vsf img { width: 22px; height: 22px; } .vsf b { display: none; }
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

/* watching another battle of the round (06/11, direction C of design/ui/eclat/retours-spectate.html): \xAB Tu regardes \xBB
   under its gauges, and the duels of the round where the players were */
.wtag { position: absolute; top: calc(var(--t) + 56px); left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 6px; height: 22px; padding: 0 10px 0 6px;
  background: var(--yel); color: var(--dark); font-family: var(--title); font-size: 11px; line-height: 1; box-shadow: var(--plate-sh); white-space: nowrap; }
.wtag .ic { width: 16px; height: 16px; }
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
`;var x0="./assets/bungee-MGYHQTP2.woff2";var O0="./assets/rubik-2B7SUW46.woff2";var R0={about:"pipeline/concepts/ile/terrain.py: rows from v = 0 (my corner) up, 0.5 m cells, u from -20 to 20; . out # ground ~ shallows w water",step:.5,half:20,frame:{cx:3166,cy:1324,ppm:70.8,image:"d.jpg"},rows:[".......................................##.......................................","......................................####......................................",".....................................######.....................................","....................................########....................................","...................................##########...................................","..................................############..................................","..................................############..................................",".................................##############.................................","...............................##################...............................","..............................####################..............................",".............................######################.............................","............................########################............................","...........................##########################...........................","..........................############################..........................",".........................##############################.........................","........................################################........................",".......................##################################.......................","......................####################################......................",".....................######################################.....................","....................########################################....................","...................##########################################...................","..................############################################..................",".................#########w##########################w#########.................","................###~~ww##wwww######################wwww##ww~~###................","...............###~wwwwwwwwwww####################wwwwwwwwwww~###...............","..............###~wwwwwwwwwwwww##################wwwwwwwwwwwww~###..............","..............##~wwwwwwwwwwwwwwwwwwwww####wwwwwwwwwwwwwwwwwwwww~##..............","............##~~wwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwww~~##............","...........##~~wwwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwwww~~##...........","...........#~~www~~~~~~wwwwwwwwwwwwwwww##wwwwwwwwwwwwwwww~~~~~~www~~#...........","..........#~~ww~~~~~~~~~wwwwwwwwwwwwwww##wwwwwwwwwwwwwww~~~~~~~~~ww~~#..........","........##~~ww~~~~~~~~~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~~~~~~~~~ww~~##........",".......##~~ww~~~~~####~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~####~~~~~ww~~##.......","......###~ww~~~~~######~~wwwwwwwwwwww######wwwwwwwwwwww~~######~~~~~ww~###......",".....####www~~~~#######~~wwwwwwwwww##########wwwwwwwwww~~#######~~~~www####.....","....#####ww~~~~########~~wwwwwwwww############wwwwwwwww~~########~~~~ww#####....","...######ww~~~#########~~wwwwwwwww############wwwwwwwww~~#########~~~ww######...","...######w~~~~#########~wwwwwwwww##############wwwwwwwww~#########~~~~w######...","...#####ww~~~##########wwwwwwwww################wwwwwwwww##########~~~ww#####...","w.######ww~~~######################################################~~~ww######.w","w.######ww~~~######################################################~~~ww######.w","...#####ww~~~##########wwwwwwwww################wwwwwwwww##########~~~ww#####...","...######w~~~~#########~wwwwwwwww##############wwwwwwwww~#########~~~~w######...","...######ww~~~#########~~wwwwwwwww############wwwwwwwww~~#########~~~ww######...","....#####ww~~~~########~~wwwwwwwww############wwwwwwwww~~########~~~~ww#####....",".....####www~~~~#######~~wwwwwwwwww##########wwwwwwwwww~~#######~~~~www####.....","......###~ww~~~~~######~~wwwwwwwwwwww######wwwwwwwwwwww~~######~~~~~ww~###......",".......##~~ww~~~~~####~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~####~~~~~ww~~##.......","........##~~ww~~~~~~~~~~~wwwwwwwwwwwww####wwwwwwwwwwwww~~~~~~~~~~~ww~~##........","..........#~~ww~~~~~~~~~wwwwwwwwwwwwwww##wwwwwwwwwwwwwww~~~~~~~~~ww~~#..........","...........#~~www~~~~~~wwwwwwwwwwwwwwww##wwwwwwwwwwwwwwww~~~~~~www~~#...........","...........##~~wwwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwwww~~##...........","............##~~wwwwwwwwwwwwwwwwwwwwwww##wwwwwwwwwwwwwwwwwwwwwww~~##............","..............##~wwwwwwwwwwwwwwwwwwwww####wwwwwwwwwwwwwwwwwwwww~##..............","..............###~wwwwwwwwwwwww##################wwwwwwwwwwwww~###..............","...............###~wwwwwwwwwww####################wwwwwwwwwww~###...............","................###~~ww##wwww######################wwww##ww~~###................",".................#########w##########################w#########.................","..................############################################..................","...................##########################################...................","....................########################################....................",".....................######################################.....................","......................####################################......................",".......................##################################.......................","........................################################........................",".........................##############################.........................","..........................############################..........................","...........................##########################...........................","............................########################............................",".............................######################.............................","..............................####################..............................","...............................##################...............................",".................................##############.................................","..................................############..................................","..................................############..................................","...................................##########...................................","....................................########....................................",".....................................######.....................................","......................................####......................................",".......................................##......................................."]};var be=["barbarian","archer","tank","assassin","druid","whale","banner"],mo=["barbarian","archer","tank","assassin","druid","whale"],D0=["guardian","beast"],_o=["hp","damage","attackSpeed","moveSpeed","range"],yy={id:"ile",name:"L\u2019\xEEle de l\u2019\xC9clat",width:40,length:40,shape:"diamond",terrain:R0,starts:[[[0,0,40,12.5]],[[0,27.5,40,40]]],places:[{id:"centre",name:"l\u2019\xC9clat",x:20,y:20},{id:"banc-ouest",name:"le banc de sable ouest",x:9,y:20},{id:"banc-est",name:"le banc de sable est",x:31,y:20}],monsters:[{kind:"beast",at:0,place:1},{kind:"beast",at:0,place:2}]},v0={id:"plaine",name:"La plaine",width:28,length:40,shape:"rect",starts:[[[0,0,28,9.5]],[[0,30.5,28,40]]],places:[{id:"centre",name:"l\u2019\xC9clat",x:14,y:20},{id:"banc-ouest",name:"le banc de sable ouest",x:3,y:20},{id:"banc-est",name:"le banc de sable est",x:25,y:20}],monsters:[{kind:"beast",at:0,place:1},{kind:"beast",at:0,place:2}]},Wn=[yy],Z={tickHz:20,arena:{eclatRadius:1.4},battle:{maxSeconds:75,aggro:8,retargetTicks:4,dropGap:{base:.1,perPlace:.15},separation:.5},troops:{barbarian:{places:1,hp:150,damage:15.5,attackSpeed:1.05,moveSpeed:3,range:1,radius:.35,mass:1,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!1},archer:{places:1,hp:50,damage:9.5,attackSpeed:1,moveSpeed:2.8,range:6.5,radius:.35,mass:1,rangeUpgradable:!0,ranged:!0,flying:!1,hitsAir:!0,splash:0,crowd:!1,anchored:!1},tank:{places:5,hp:760,damage:40,attackSpeed:.6,moveSpeed:2.1,range:1.2,radius:.7,mass:5,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!1},assassin:{places:2,hp:150,damage:50,attackSpeed:.8,moveSpeed:4.5,range:1,radius:.35,mass:1.2,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!1},druid:{places:3,hp:135,damage:23,attackSpeed:.55,moveSpeed:2.6,range:7,radius:.35,mass:1,rangeUpgradable:!0,ranged:!0,flying:!1,hitsAir:!1,splash:1.5,crowd:!1,anchored:!1},whale:{places:4,hp:215,damage:32,attackSpeed:.34,moveSpeed:2,range:2,radius:1.2,mass:3,rangeUpgradable:!1,ranged:!1,flying:!0,hitsAir:!1,splash:1.2,crowd:!0,anchored:!1},banner:{places:3,hp:250,damage:0,attackSpeed:0,moveSpeed:0,range:0,radius:.45,mass:1,rangeUpgradable:!1,ranged:!1,flying:!1,hitsAir:!1,splash:0,crowd:!1,anchored:!0}},banner:{radius:4,seconds:15,monsterGap:3},monsters:{guardian:{name:"Le gardien de l\u2019\xC9clat",hp:2400,damage:60,attackSpeed:.7,moveSpeed:2,range:1.4,radius:1.1,mass:8,sight:7,leash:4,splash:1.2,boon:{stat:"damage",value:.2}},beast:{name:"La b\xEAte du lac",hp:1500,damage:35,attackSpeed:.8,moveSpeed:2.2,range:1.2,radius:.9,mass:5,sight:6,leash:4,splash:0,boon:{stat:"damage",value:.2}}},monsterCall:{announce:5,afterDeath:5},assassinHunt:12,taunt:{every:5,radius:5,seconds:2},army:{startPlaces:20,maxPlaces:60,step:5,stepCost:4,stepRise:1},economy:{goldPerRound:7,startGold:3,reroll:2,offers:4},rarities:[{id:"common",name:"Commune",bonus:.15,cost:2,early:70,late:25},{id:"rare",name:"Rare",bonus:.3,cost:3,early:24,late:35},{id:"epic",name:"\xC9pique",bonus:.5,cost:4,early:5,late:27},{id:"legendary",name:"L\xE9gendaire",bonus:.8,cost:6,early:1,late:13}],lateRound:12,hp:{start:100,damage:{base:4,perRound:1.5,perPlace:.4,max:40}},round:{prep:30,battle:75,results:5},maxRounds:40,match:{players:8,humanPairWeight:.35,pairingTries:24},bots:{firstWave:.55,counter:.25,firstWaveTicks:[6,30],reserveAfter:40,banners:[25,45,30],bannerPlaces:15,bannerBeyond:3,bannerBack:4.5,focusOne:.5,bankLane:6,pushAfter:12,capacityEagerUntil:6,rerollsPerRound:1,playedShare:.15},net:{delayTicks:8,cutSeconds:3,lostSeconds:3,sendEvery:50,grace:3,launchDelay:5}},ze=1/Z.tickHz,Wr=Z.battle.maxSeconds*Z.tickHz,$o=Z.round.prep+Z.round.battle+Z.round.results,zf={barbarian:"Barbare",archer:"Archer",tank:"Tank",assassin:"Assassin",druid:"Druidesse",whale:"Baleine",banner:"Porte-\xE9tendard"},Bp={hp:"PV",damage:"D\xE9g\xE2ts",attackSpeed:"Vitesse d\u2019attaque",moveSpeed:"D\xE9placement",range:"Port\xE9e"};var M0=Z.round,Ho=i=>(i-1)*$o,Tn=i=>Ho(i)+M0.prep,Kr=i=>Tn(i)+M0.battle,Fp=i=>Kr(i)+Z.net.grace;function A0(i,t,e,n=0){return t<1?!1:i==="drops"||i==="takeover"||i==="end"?t>n&&e>=Tn(t)&&e<Fp(t):e>=Ho(t)&&e<Tn(t)}var my=0,Qf=()=>`${Date.now().toString(36)}-${(my++).toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,qr=class{constructor(t,e,n=()=>performance.now()/1e3,o=0){C(this,"seed",t);C(this,"now",n);C(this,"solo",!0);C(this,"humans");C(this,"mySeat",0);C(this,"log",[]);C(this,"offset");C(this,"onChange");this.humans=[e],this.offset=-this.now()-o}clock(){return this.now()+this.offset}post(t,e,n){let o=Qf();return A0(e,t,this.clock())&&this.log.push({seq:this.log.length,seat:this.mySeat,round:t,kind:e,data:n,cid:o}),o}confirmed(){return this.log}syncedTo(){return 1/0}pending(){return[]}skip(t){let e=this.clock();t>e&&(this.offset+=t-e)}close(){}};var gy={".":0,"#":1,"~":2,w:3},I0=1073741823,ta=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],Ty=128,Ey=8,Yi=class Yi{constructor(t){C(this,"step");C(this,"nx");C(this,"ny");C(this,"cells");C(this,"near");C(this,"fields",new Map);C(this,"zones",new Map);let e=t.terrain;this.step=e.step,this.nx=Math.round(t.width/e.step),this.ny=Math.round(t.length/e.step),this.cells=new Uint8Array(this.nx*this.ny);for(let n=0;n<this.ny;n++){let o=e.rows[n]??"";for(let r=0;r<this.nx;r++)this.cells[r+n*this.nx]=gy[o[r]??"."]??0}this.near=this.nearest()}static of(t){if(!t.terrain)return null;let e=Yi.cache.get(t.terrain);return e||(e=new Yi(t),Yi.cache.set(t.terrain,e)),e}cell(t,e){let n=Math.floor(t/this.step),o=Math.floor(e/this.step);return n<0||o<0||n>=this.nx||o>=this.ny?-1:n+o*this.nx}kind(t,e){let n=this.cell(t,e);return n<0?0:this.cells[n]}inField(t,e){return this.kind(t,e)!==0}walkable(t,e){let n=this.kind(t,e);return n===1||n===2}open(t){let e=this.cells[t];return e===1||e===2}centre(t){return[(t%this.nx+.5)*this.step,(Math.floor(t/this.nx)+.5)*this.step]}clear(t,e,n,o){let r=n-t,a=o-e,p=Math.sqrt(r*r+a*a),s=Math.ceil(p/(this.step*.5));for(let u=1;u<=s;u++)if(!this.walkable(t+r*u/s,e+a*u/s))return!1;return!0}field(t,e){let n=this.cell(t,e);n<0&&(n=this.cell(t<0?0:t>=this.nx*this.step?this.nx*this.step-1e-6:t,e<0?0:e>=this.ny*this.step?this.ny*this.step-1e-6:e));let o=this.near[n],r=this.fields.get(o);return r?(this.fields.delete(o),this.fields.set(o,r),r):(r=this.dijkstra([o]),this.fields.set(o,r),this.fields.size>Ty&&this.fields.delete(this.fields.keys().next().value),r)}zone(t){let e=t.map(r=>r.join(",")).join(";"),n=this.zones.get(e);if(n)return n;let o=[];for(let r=0;r<this.cells.length;r++){if(!this.open(r))continue;let[a,p]=this.centre(r);t.some(s=>a>=s[0]&&a<=s[2]&&p>=s[1]&&p<=s[3])&&o.push(r)}return n=this.dijkstra(o),this.zones.set(e,n),n}heading(t,e,n){let o=this.cell(t,e);if(o<0||n[o]>=I0||n[o]===0)return null;let r=[];for(let a=0;a<Ey;a++){let p=this.down(o,n);if(p<0||(r.push(p),o=p,n[p]===0))break}if(!r.length)return null;for(let a=r.length-1;a>0;a--){let p=this.centre(r[a]);if(this.clear(t,e,p[0],p[1]))return p}return this.centre(r[0])}down(t,e){let n=t%this.nx,o=(t-n)/this.nx,r=-1,a=e[t];for(let p=0;p<8;p++){let s=this.move(n,o,ta[p][0],ta[p][1]);s>=0&&e[s]<a&&(a=e[s],r=s)}return r}move(t,e,n,o){let r=t+n,a=e+o;if(r<0||a<0||r>=this.nx||a>=this.ny)return-1;let p=r+a*this.nx;return!this.open(p)||n!==0&&o!==0&&(!this.open(r+e*this.nx)||!this.open(t+a*this.nx))?-1:p}dijkstra(t){let e=new Int32Array(this.cells.length).fill(I0),n=new jf;for(let o of t)e[o]=0,n.push(0,o);for(;n.size;){let o=n.topKey(),r=n.pop();if(o>e[r])continue;let a=r%this.nx,p=(r-a)/this.nx,s=this.cells[r]===2?2:1;for(let u=0;u<8;u++){let f=this.move(a,p,ta[u][0],ta[u][1]);if(f<0)continue;let l=this.cells[f]===2?2:1,h=o+(u<4?5:7)*(s+l);h<e[f]&&(e[f]=h,n.push(h,f))}}return e}nearest(){let t=new Int32Array(this.cells.length).fill(-1),e=[];for(let n=0;n<this.cells.length;n++)this.open(n)&&(t[n]=n,e.push(n));for(let n=0;n<e.length;n++){let o=e[n],r=o%this.nx,a=(o-r)/this.nx;for(let[p,s]of ta){let u=r+p,f=a+s;if(u<0||f<0||u>=this.nx||f>=this.ny)continue;let l=u+f*this.nx;t[l]<0&&(t[l]=t[o],e.push(l))}}for(let n=0;n<t.length;n++)t[n]<0&&(t[n]=n);return t}};C(Yi,"cache",new WeakMap);var Gi=Yi,jf=class{constructor(){C(this,"k",[]);C(this,"v",[])}get size(){return this.k.length}topKey(){return this.k[0]}push(t,e){let n=this.k,o=this.v,r=n.length;for(n.push(t),o.push(e);r>0;){let a=r-1>>1;if(n[a]<t||n[a]===t&&o[a]<=e)break;n[r]=n[a],o[r]=o[a],r=a}n[r]=t,o[r]=e}pop(){let t=this.k,e=this.v,n=e[0],o=t.pop(),r=e.pop(),a=t.length;if(a){let p=0;for(;;){let s=2*p+1,u=s+1,f=p,l=o,h=r;if(s<a&&(t[s]<l||t[s]===l&&e[s]<h)&&(f=s,l=t[s],h=e[s]),u<a&&(t[u]<l||t[u]===l&&e[u]<h)&&(f=u,l=t[u],h=e[u]),f===p)break;t[p]=t[f],e[p]=e[f],p=f}t[p]=o,e[p]=r}return n}};var Kn=2,Xp=Z.arena,na=Z.battle,ea=Z.banner,$0=Z.monsterCall,H0=()=>({hits:[],deaths:[],landed:[],refused:[],blasts:[],cries:[],rose:[],slain:[]}),Bn=()=>({barbarian:0,archer:0,tank:0,assassin:0,druid:0,whale:0,banner:0});function oa(){let i={};for(let t of be){i[t]={};for(let e of _o)i[t][e]=0}return i}var Fn=i=>be.reduce((t,e)=>t+(i[e]??0)*Z.troops[e].places,0),Vy=i=>be.reduce((t,e)=>t+(i[e]??0),0);function Jp(i,t){let e=Z.troops[i],n=t[i];return{hp:e.hp*(1+n.hp),damage:e.damage*(1+n.damage),attackSpeed:e.attackSpeed*(1+n.attackSpeed),moveSpeed:e.moveSpeed*(1+n.moveSpeed),range:e.range*(1+(e.rangeUpgradable?n.range:0))}}var ia=i=>Math.round((na.dropGap.base+na.dropGap.perPlace*Z.troops[i].places)*Z.tickHz);function Zf(i,t,e){let n=Gi.of(i);if(n)return n.inField(t,e);if(i.shape==="rect")return t>=0&&t<=i.width&&e>=0&&e<=i.length;let o=i.width/2,r=i.length/2,a=t-o,p=e-r;return(a<0?-a:a)/o+(p<0?-p:p)/r<=1}function Sy(i,t,e){let n=Gi.of(i);return n?n.walkable(t,e):Zf(i,t,e)}function wy(i,t,e){let n=t-i.width/2,o=e-i.length/2;return n*n+o*o<Xp.eclatRadius*Xp.eclatRadius}var Py=(i,t,e)=>t>=i[0]&&t<=i[2]&&e>=i[1]&&e<=i[3],k0=(i,t,e,n)=>i.starts[t].some(o=>Py(o,e,n)),Ly=v0,Wi=class{constructor(t,e={}){C(this,"tick",0);C(this,"units",[]);C(this,"stock");C(this,"killed",[0,0]);C(this,"boons",[{damage:0,attackSpeed:0},{damage:0,attackSpeed:0}]);C(this,"monsters");C(this,"map");C(this,"ground");C(this,"cx");C(this,"cy");C(this,"result",null);C(this,"events",H0());C(this,"pending",[]);C(this,"nextLand",[0,0]);C(this,"nextId",0);C(this,"up");C(this,"cell",1.5);C(this,"gw");C(this,"gh");C(this,"grid",[]);this.stock=[{...t[0].counts},{...t[1].counts}];for(let n of this.stock)for(let o of be)n[o]=n[o]??0;this.up=[t[0].upgrades,t[1].upgrades],this.map=e.map??Ly,this.ground=Gi.of(this.map),this.cx=this.map.width/2,this.cy=this.map.length/2,this.gw=Math.ceil(this.map.width/this.cell)+1,this.gh=Math.ceil(this.map.length/this.cell)+1,this.monsters=this.map.monsters.map(n=>{let o=this.map.places[n.place];return{kind:n.kind,place:n.place,x:o.x,y:o.y,at:Math.round(n.at*Z.tickHz),after:n.after??-1,id:-1,born:-1,died:-1,by:-1}});for(let n=0;n<this.gw*this.gh;n++)this.grid.push([])}get time(){return this.tick*ze}get over(){return this.result!==null}alive(t){return this.units.filter(e=>e.alive&&(t===void 0||e.side===t))}left(t){let e={...this.stock[t]};for(let n of this.pending)n.side===t&&e[n.kind]>0&&e[n.kind]--;return e}pendingDrops(){return this.pending}get awake(){let t=[];for(let e of this.monsters)e.id>=0&&e.died<0&&t.push(this.units[e.id]);return t}get next(){let t=[];return this.monsters.forEach((e,n)=>{if(e.id>=0)return;let o=this.dueAt(e);o>=0&&t.push({call:n,kind:e.kind,place:e.place,x:e.x,y:e.y,tick:o})}),t.sort((e,n)=>e.tick-n.tick||e.call-n.call)}get heralds(){return this.next.filter(t=>t.tick-this.tick<=$0.announce*Z.tickHz)}dueAt(t){if(t.after<0)return t.at;let e=this.monsters[t.after];return e.died<0?-1:Math.max(t.at,e.died+$0.afterDeath*Z.tickHz)}bannerOpen(t){return t.alive&&t.kind==="banner"&&this.tick<t.zoneUntil}banners(t){return this.units.filter(e=>e.side===t&&this.bannerOpen(e))}inDropZone(t,e,n){if(k0(this.map,t,e,n))return!0;let o=ea.radius*ea.radius;for(let r of this.units){if(r.side!==t||!this.bannerOpen(r))continue;let a=e-r.x,p=n-r.y;if(a*a+p*p<=o)return!0}return!1}canDrop(t,e,n,o){if(!Sy(this.map,e,n)||wy(this.map,e,n))return!1;if(o!=="banner")return this.inDropZone(t,e,n);if(k0(this.map,1-t,e,n))return!1;for(let r of this.awake){let a=e-r.x,p=n-r.y;if(a*a+p*p<ea.monsterGap*ea.monsterGap)return!1}return!0}wiped(t){return Vy(this.stock[t])===0&&!this.units.some(e=>e.alive&&e.side===t&&!e.anchored)}schedule(t){let e=this.pending.length;for(;e>0&&Uy(t,this.pending[e-1]);)e--;this.pending.splice(e,0,t)}step(){if(this.result)return;let t=this.events=H0();for(let c of this.monsters){if(c.id>=0)continue;let d=this.dueAt(c);if(d<0||this.tick<d)continue;let T=this.rise(c.kind,c.x,c.y);c.id=T.id,c.born=this.tick,t.rose.push(T.id)}let e=[],n=[!1,!1],o=0;for(;o<this.pending.length&&this.pending[o].tick<=this.tick;o++){let c=this.pending[o];if(n[c.side]||this.tick<this.nextLand[c.side]){n[c.side]=!0,e.push(c);continue}this.stock[c.side][c.kind]>0&&this.canDrop(c.side,c.x,c.y,c.kind)?(this.stock[c.side][c.kind]--,t.landed.push(this.spawn(c).id),this.nextLand[c.side]=this.tick+ia(c.kind),n[c.side]=!0):t.refused.push(c)}o&&(this.pending=e.concat(this.pending.slice(o)));let r=this.units.filter(c=>c.alive),a=Z.taunt,p=a.radius*a.radius;for(let c of r)if(!(c.kind!=="tank"||this.tick<c.nextCry)){c.nextCry=this.tick+a.every*Z.tickHz,c.cried=this.tick,t.cries.push(c.id);for(let d of r){if(d.side===c.side||d.anchored)continue;let T=d.x-c.x,y=d.y-c.y;T*T+y*y>p||(d.tauntBy=c,d.tauntUntil=this.tick+a.seconds*Z.tickHz,d.target=c)}}let s=new Float64Array(this.nextId),u=new Float64Array(this.nextId*3),f=this.awake;for(let c of r){if(c.anchored)continue;c.cd>0&&(c.cd-=ze),(!c.target||!c.target.alive||(this.tick+c.id)%na.retargetTicks===0)&&(c.target=this.look(c,r));let d=c.target;if(d){let T=d.x-c.x,y=d.y-c.y;if(Math.sqrt(T*T+y*y)-c.radius-d.radius<=c.range){if(c.cd<=0){if(c.splash>0){for(let m of r){if(m.side===c.side||m.flying&&!c.hitsAir)continue;let g=m.x-d.x,L=m.y-d.y,U=c.splash+m.radius;g*g+L*L<=U*U&&(s[m.id]+=c.damage,u[m.id*3+c.side]+=c.damage)}t.blasts.push({from:c.id,x:d.x,y:d.y})}else s[d.id]+=c.damage,u[d.id*3+c.side]+=c.damage;c.cd+=c.period,c.cd<0&&(c.cd=0),c.struck=this.tick,t.hits.push({from:c.id,to:d.id})}}else this.walk(c,d.x,d.y,c.radius+d.radius+c.range*.9)}else if(c.side===Kn)this.walk(c,c.homeX,c.homeY,0);else if(f.length){let T=f[0],y=1/0;for(let b of f){let E=(b.x-c.x)*(b.x-c.x)+(b.y-c.y)*(b.y-c.y);E<y&&(y=E,T=b)}this.walk(c,T.x,T.y,c.radius+T.radius+c.range*.9)}else{let T=c.side,[y,b]=this.ahead(T,c.x,c.y);this.walk(c,y,b,0,this.ground&&!c.flying?this.ground.zone(this.map.starts[1-T]):null)}}for(let c of r){if(!(s[c.id]>0)||(c.hp-=s[c.id],c.hp>0))continue;c.hp=0,c.alive=!1,t.deaths.push(c.id);let d=-1,T=0;for(let y=0;y<3;y++)u[c.id*3+y]>T&&(T=u[c.id*3+y],d=y);c.side===Kn?this.slay(c,d===0||d===1?d:-1):d===1-c.side&&(this.killed[d]+=c.places)}this.separate(),this.tick++;let l=this.wiped(0),h=this.wiped(1);l&&h?this.judge("empty"):l||h?this.finish(l?1:0,"wipe"):this.tick>=Wr&&this.judge("time")}placesAlive(t){let e=0;for(let n of this.units)n.alive&&n.side===t&&(e+=n.places);return e}judge(t="time"){let[e,n]=this.killed;if(e!==n){this.finish(e>n?0:1,t);return}let o=this.placesAlive(0),r=this.placesAlive(1);this.finish(o===r?-1:o>r?0:1,t)}finish(t,e){this.result={winner:t,outcome:e,tick:this.tick,killed:[this.killed[0],this.killed[1]],places:[this.placesAlive(0),this.placesAlive(1)]}}slay(t,e){this.events.slain.push({id:t.id,by:e});let n=this.monsters.find(r=>r.id===t.id);if(n&&(n.died=this.tick+1,n.by=e),e===-1)return;let o=Z.monsters[t.kind].boon;this.boons[e][o.stat]+=o.value;for(let r of this.units)r.alive&&r.side===e&&!r.anchored&&this.boost(r)}boost(t){let e=t.side,n=Jp(t.kind,this.up[e]),o=this.boons[e];t.damage=n.damage*(1+o.damage);let r=n.attackSpeed*(1+o.attackSpeed);t.period=r>0?1/r:1/0}spawn(t){let e=Jp(t.kind,this.up[t.side]),n=Z.troops[t.kind],o={id:this.nextId++,side:t.side,kind:t.kind,places:n.places,x:t.x,y:t.y,hp:e.hp,maxHp:e.hp,damage:e.damage,period:1/0,speed:e.moveSpeed,range:e.range,radius:n.radius,mass:n.mass,sight:Math.max(na.aggro,e.range+2*n.radius),flying:n.flying,hitsAir:n.hitsAir,splash:n.splash,crowd:n.crowd,ranged:n.ranged,anchored:n.anchored,cd:.4,target:null,alive:!0,tauntBy:null,tauntUntil:-1,nextCry:t.kind==="tank"?this.tick+Math.round(.4*Z.tickHz):1/0,born:this.tick,struck:-1,cried:-1,zoneUntil:t.kind==="banner"?this.tick+Math.round(ea.seconds*Z.tickHz):-1,homeX:0,homeY:0,leash:0};return this.boost(o),this.units.push(o),o}rise(t,e,n){let o=Z.monsters[t],r={id:this.nextId++,side:Kn,kind:t,places:0,x:e,y:n,hp:o.hp,maxHp:o.hp,damage:o.damage,period:1/o.attackSpeed,speed:o.moveSpeed,range:o.range,radius:o.radius,mass:o.mass,sight:o.sight,flying:!1,hitsAir:!0,splash:o.splash,crowd:!1,ranged:!1,anchored:!1,cd:.4,target:null,alive:!0,tauntBy:null,tauntUntil:-1,nextCry:1/0,born:this.tick,struck:-1,cried:-1,zoneUntil:-1,homeX:e,homeY:n,leash:o.leash};return this.units.push(r),r}ahead(t,e,n){let o=e,r=n,a=1/0;for(let p of this.map.starts[1-t]){let s=e<p[0]?p[0]:e>p[2]?p[2]:e,u=n<p[1]?p[1]:n>p[3]?p[3]:n,f=(s-e)*(s-e)+(u-n)*(u-n);f<a&&(a=f,o=s,r=u)}return[o,r]}look(t,e){let n=t.tauntBy;if(n&&n.alive&&this.tick<t.tauntUntil&&zp(t,n))return n;if(t.side===Kn)return xy(t,e);if(t.kind==="assassin"){let o=B0(t,e,Z.assassinHunt,!0);if(o)return o}return t.crowd?Cy(t,e,t.sight):B0(t,e,t.sight,!1)}walk(t,e,n,o,r=null){let a=e-t.x,p=n-t.y,s=Math.sqrt(a*a+p*p);if(s<=o||s<=1e-9)return;let u=this.ground,f=u!==null&&!t.flying,l=Math.min(t.speed*ze,s-o),h=a/s,c=p/s;if(f&&(u.kind(t.x,t.y)===2&&(l*=.5),!u.clear(t.x,t.y,e,n))){let y=u.heading(t.x,t.y,r??u.field(e,n));if(y){let b=y[0]-t.x,E=y[1]-t.y,m=Math.sqrt(b*b+E*E);m>1e-9&&(h=b/m,c=E/m,l=t.speed*ze*(u.kind(t.x,t.y)===2?.5:1))}}if(!t.flying&&t.side!==Kn){let y=t.x-this.cx,b=t.y-this.cy,E=y*y+b*b,m=Xp.eclatRadius+t.radius+.3;if(E<m*m&&E>1e-12&&y*h+b*c<0){let g=Math.sqrt(E),L=-b/g,U=y/g,R=L*h+U*c;(R<0||R===0&&t.id%2===1)&&(L=-L,U=-U),h=L,c=U}}let d=t.x,T=t.y;if(t.x+=h*l,t.y+=c*l,t.leash>0){let y=t.x-t.homeX,b=t.y-t.homeY,E=y*y+b*b;if(E>t.leash*t.leash){let m=Math.sqrt(E);t.x=t.homeX+y/m*t.leash,t.y=t.homeY+b/m*t.leash}}u&&this.keep(t,d,T)}keep(t,e,n){let o=this.ground,r=t.flying?(a,p)=>o.inField(a,p):(a,p)=>o.walkable(a,p);r(t.x,t.y)||(r(t.x,n)?t.y=n:r(e,t.y)?t.x=e:(t.x=e,t.y=n))}separate(){let t=this.grid,e=this.cell,n=this.gw;for(let c of t)c.length=0;let o=[];for(let c of this.units)c.alive&&o.push(c);let r=this.ground?o.map(c=>c.x):[],a=this.ground?o.map(c=>c.y):[];for(let c=0;c<o.length;c++){let d=o[c];t[Np(d.x,e,n-1)+Np(d.y,e,this.gh-1)*n].push(c)}let p=na.separation;for(let c=0;c<o.length;c++){let d=o[c],T=Np(d.x,e,n-1),y=Np(d.y,e,this.gh-1);for(let b=-1;b<=1;b++){let E=y+b;if(!(E<0||E>=this.gh))for(let m=-1;m<=1;m++){let g=T+m;if(!(g<0||g>=n))for(let L of t[g+E*n]){if(L<=c)continue;let U=o[L];if(d.flying!==U.flying||d.anchored||U.anchored)continue;let R=U.x-d.x,v=U.y-d.y,V=d.radius+U.radius,S=R*R+v*v;if(S>=V*V)continue;let D=Math.sqrt(S);D<1e-6&&(R=(d.id*7+U.id*13)%11/11-.5,v=.5,D=Math.sqrt(R*R+v*v));let A=U.mass/(d.mass+U.mass),_=1-A,$=(V-D)*p,F=R/D,J=v/D;d.x-=F*$*A,d.y-=J*$*A,U.x+=F*$*_,U.y+=J*$*_}}}}let s=Xp.eclatRadius,u=this.map.width,f=this.map.length,l=this.cx,h=this.cy;for(let c=0;c<o.length;c++){let d=o[c];if(d.anchored)continue;let T=d.x-l,y=d.y-h,b=T*T+y*y,E=s+d.radius;if(b<E*E&&!d.flying&&d.side!==Kn){let m=Math.sqrt(b);m<1e-6?d.y=h+(d.side===0?-E:E):(d.x=l+T/m*E,d.y=h+y/m*E)}if(this.ground){this.keep(d,r[c],a[c]);continue}d.x<d.radius?d.x=d.radius:d.x>u-d.radius&&(d.x=u-d.radius),d.y<d.radius?d.y=d.radius:d.y>f-d.radius&&(d.y=f-d.radius)}}},Uy=(i,t)=>i.tick!==t.tick?i.tick<t.tick:i.side!==t.side?i.side<t.side:i.seq<t.seq,Np=(i,t,e)=>{let n=Math.floor(i/t);return n<0?0:n>e?e:n},zp=(i,t)=>!t.flying||i.hitsAir;function Cy(i,t,e){let n=null,o=0,r=e*e;for(let a of t){if(!a.alive||a.side===i.side||!zp(i,a))continue;let p=a.x-i.x,s=a.y-i.y,u=p*p+s*s;if(u>e*e)continue;let f=0;for(let l of t){if(!l.alive||l.side===i.side||l.flying&&!i.hitsAir)continue;let h=l.x-a.x,c=l.y-a.y,d=i.splash+l.radius;h*h+c*c<=d*d&&f++}(f>o||f===o&&(u<r||u===r&&n&&a.id<n.id))&&(o=f,r=u,n=a)}return n}function xy(i,t){let e=null,n=i.sight*i.sight;for(let o of t){if(!o.alive||o.side===i.side||!zp(i,o))continue;let r=o.x-i.x,a=o.y-i.y,p=r*r+a*a;if(p>n||p===n&&e&&o.id>e.id)continue;let s=o.x-i.homeX,u=o.y-i.homeY,f=i.leash+i.radius+o.radius+i.range;s*s+u*u>f*f||(n=p,e=o)}return e}function B0(i,t,e,n){let o=null,r=e*e;for(let a of t){if(!a.alive||a.side===i.side||!zp(i,a)||n&&!a.ranged)continue;let p=a.x-i.x,s=a.y-i.y,u=p*p+s*s;(u<r||u===r&&o&&a.id<o.id)&&(r=u,o=a)}return o}var R1=0,$2=1,D1=2;var qa=1,v1=2,po=3,jn=0,pn=1,qe=2,$e=0,yi=1,vo=2,H2=3,k2=4,js=5,Sn=100,M1=101,A1=102,I1=103,_1=104,Di=200,$1=201,H1=202,k1=203,Es=204,Vs=205,tp=206,B1=207,ep=208,F1=209,N1=210,X1=211,J1=212,z1=213,Q1=214,Zs=0,Ys=1,Gs=2,mi=3,Ws=4,Ks=5,qs=6,tu=7,B2=0,j1=1,Z1=2,Mo=0,eu=1,nu=2,ou=3,iu=4,ru=5,au=6,Ar=7,L2="attached",Y1="detached",F2=300,vi=301,Mi=302,pu=303,su=304,np=306,fn=1e3,qn=1001,br=1002,_e=1003,uu=1004;var Ai=1005;var Qe=1006,Ir=1007;var dn=1008;var Ln=1009,N2=1010,X2=1011,_r=1012,fu=1013,Go=1014,_n=1015,Un=1016,lu=1017,cu=1018,Wo=1020,J2=35902,z2=35899,Q2=1021,j2=1022,sn=1023,dr=1026,Ko=1027,hu=1028,bu=1029,Z2=1030,du=1031;var yu=1033,op=33776,ip=33777,rp=33778,ap=33779,mu=35840,gu=35841,Tu=35842,Eu=35843,Vu=36196,Su=37492,wu=37496,Pu=37808,Lu=37809,Uu=37810,Cu=37811,xu=37812,Ou=37813,Ru=37814,Du=37815,vu=37816,Mu=37817,Au=37818,Iu=37819,_u=37820,$u=37821,Hu=36492,ku=36494,Bu=36495,Fu=36283,Nu=36284,Xu=36285,Ju=36286,zu=2200,G1=2201,W1=2202,gi=2300,Ti=2301,Ts=2302,bi=2400,di=2401,ga=2402,Qu=2500,K1=2501,Y2=0,pp=1,$r=2,q1=3200,th=3201;var ju=0,eh=1,Yn="",Te="srgb",je="srgb-linear",Ta="linear",re="srgb";var hi=7680;var U2=519,nh=512,oh=513,ih=514,G2=515,rh=516,ah=517,ph=518,sh=519,Ss=35044;var W2="300 es",Qn=2e3,Ea=2001;var eo=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let o=n[t];if(o!==void 0){let r=o.indexOf(e);r!==-1&&o.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let o=n.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],F0=1234567,ba=Math.PI/180,Ei=180/Math.PI;function An(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function K2(i,t){return(i%t+t)%t}function Oy(i,t,e,n,o){return n+(i-t)*(o-n)/(e-t)}function Ry(i,t,e){return i!==t?(e-i)/(t-i):0}function da(i,t,e){return(1-e)*i+e*t}function Dy(i,t,e,n){return da(i,t,1-Math.exp(-e*n))}function vy(i,t=1){return t-Math.abs(K2(i,t*2)-t)}function My(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ay(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Iy(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _y(i,t){return i+Math.random()*(t-i)}function $y(i){return i*(.5-Math.random())}function Hy(i){i!==void 0&&(F0=i);let t=F0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ky(i){return i*ba}function By(i){return i*Ei}function Fy(i){return(i&i-1)===0&&i!==0}function Ny(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jy(i,t,e,n,o){let r=Math.cos,a=Math.sin,p=r(e/2),s=a(e/2),u=r((t+n)/2),f=a((t+n)/2),l=r((t-n)/2),h=a((t-n)/2),c=r((n-t)/2),d=a((n-t)/2);switch(o){case"XYX":i.set(p*f,s*l,s*h,p*u);break;case"YZY":i.set(s*h,p*f,s*l,p*u);break;case"ZXZ":i.set(s*l,s*h,p*f,p*u);break;case"XZX":i.set(p*f,s*d,s*c,p*u);break;case"YXY":i.set(s*c,p*f,s*d,p*u);break;case"ZYZ":i.set(s*d,s*c,p*f,p*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tn={DEG2RAD:ba,RAD2DEG:Ei,generateUUID:An,clamp:Zt,euclideanModulo:K2,mapLinear:Oy,inverseLerp:Ry,lerp:da,damp:Dy,pingpong:vy,smoothstep:My,smootherstep:Ay,randInt:Iy,randFloat:_y,randFloatSpread:$y,seededRandom:Hy,degToRad:ky,radToDeg:By,isPowerOfTwo:Fy,ceilPowerOfTwo:Ny,floorPowerOfTwo:Xy,setQuaternionFromProperEuler:Jy,normalize:ue,denormalize:zn},nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6],this.y=o[1]*e+o[4]*n+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),o=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*o+t.x,this.y=r*o+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class{constructor(t=0,e=0,n=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=o}static slerpFlat(t,e,n,o,r,a,p){let s=n[o+0],u=n[o+1],f=n[o+2],l=n[o+3],h=r[a+0],c=r[a+1],d=r[a+2],T=r[a+3];if(p===0){t[e+0]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l;return}if(p===1){t[e+0]=h,t[e+1]=c,t[e+2]=d,t[e+3]=T;return}if(l!==T||s!==h||u!==c||f!==d){let y=1-p,b=s*h+u*c+f*d+l*T,E=b>=0?1:-1,m=1-b*b;if(m>Number.EPSILON){let L=Math.sqrt(m),U=Math.atan2(L,b*E);y=Math.sin(y*U)/L,p=Math.sin(p*U)/L}let g=p*E;if(s=s*y+h*g,u=u*y+c*g,f=f*y+d*g,l=l*y+T*g,y===1-p){let L=1/Math.sqrt(s*s+u*u+f*f+l*l);s*=L,u*=L,f*=L,l*=L}}t[e]=s,t[e+1]=u,t[e+2]=f,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,o,r,a){let p=n[o],s=n[o+1],u=n[o+2],f=n[o+3],l=r[a],h=r[a+1],c=r[a+2],d=r[a+3];return t[e]=p*d+f*l+s*c-u*h,t[e+1]=s*d+f*h+u*l-p*c,t[e+2]=u*d+f*c+p*h-s*l,t[e+3]=f*d-p*l-s*h-u*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,o){return this._x=t,this._y=e,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,o=t._y,r=t._z,a=t._order,p=Math.cos,s=Math.sin,u=p(n/2),f=p(o/2),l=p(r/2),h=s(n/2),c=s(o/2),d=s(r/2);switch(a){case"XYZ":this._x=h*f*l+u*c*d,this._y=u*c*l-h*f*d,this._z=u*f*d+h*c*l,this._w=u*f*l-h*c*d;break;case"YXZ":this._x=h*f*l+u*c*d,this._y=u*c*l-h*f*d,this._z=u*f*d-h*c*l,this._w=u*f*l+h*c*d;break;case"ZXY":this._x=h*f*l-u*c*d,this._y=u*c*l+h*f*d,this._z=u*f*d+h*c*l,this._w=u*f*l-h*c*d;break;case"ZYX":this._x=h*f*l-u*c*d,this._y=u*c*l+h*f*d,this._z=u*f*d-h*c*l,this._w=u*f*l+h*c*d;break;case"YZX":this._x=h*f*l+u*c*d,this._y=u*c*l+h*f*d,this._z=u*f*d-h*c*l,this._w=u*f*l-h*c*d;break;case"XZY":this._x=h*f*l-u*c*d,this._y=u*c*l-h*f*d,this._z=u*f*d+h*c*l,this._w=u*f*l+h*c*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,o=Math.sin(n);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],o=e[4],r=e[8],a=e[1],p=e[5],s=e[9],u=e[2],f=e[6],l=e[10],h=n+p+l;if(h>0){let c=.5/Math.sqrt(h+1);this._w=.25/c,this._x=(f-s)*c,this._y=(r-u)*c,this._z=(a-o)*c}else if(n>p&&n>l){let c=2*Math.sqrt(1+n-p-l);this._w=(f-s)/c,this._x=.25*c,this._y=(o+a)/c,this._z=(r+u)/c}else if(p>l){let c=2*Math.sqrt(1+p-n-l);this._w=(r-u)/c,this._x=(o+a)/c,this._y=.25*c,this._z=(s+f)/c}else{let c=2*Math.sqrt(1+l-n-p);this._w=(a-o)/c,this._x=(r+u)/c,this._y=(s+f)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let o=Math.min(1,e/n);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,o=t._y,r=t._z,a=t._w,p=e._x,s=e._y,u=e._z,f=e._w;return this._x=n*f+a*p+o*u-r*s,this._y=o*f+a*s+r*p-n*u,this._z=r*f+a*u+n*s-o*p,this._w=a*f-n*p-o*s-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,o=this._y,r=this._z,a=this._w,p=a*t._w+n*t._x+o*t._y+r*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=a,this._x=n,this._y=o,this._z=r,this;let s=1-p*p;if(s<=Number.EPSILON){let c=1-e;return this._w=c*a+e*this._w,this._x=c*n+e*this._x,this._y=c*o+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let u=Math.sqrt(s),f=Math.atan2(u,p),l=Math.sin((1-e)*f)/u,h=Math.sin(e*f)/u;return this._w=a*l+this._w*h,this._x=n*l+this._x*h,this._y=o*l+this._y*h,this._z=r*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(o*Math.sin(t),o*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(N0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(N0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*o,this.y=r[1]*e+r[4]*n+r[7]*o,this.z=r[2]*e+r[5]*n+r[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*o+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*o+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*o+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*o+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,o=this.z,r=t.x,a=t.y,p=t.z,s=t.w,u=2*(a*o-p*n),f=2*(p*e-r*o),l=2*(r*n-a*e);return this.x=e+s*u+a*l-p*f,this.y=n+s*f+p*u-r*l,this.z=o+s*l+r*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*o,this.y=r[1]*e+r[5]*n+r[9]*o,this.z=r[2]*e+r[6]*n+r[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,o=t.y,r=t.z,a=e.x,p=e.y,s=e.z;return this.x=o*s-r*p,this.y=r*a-n*s,this.z=n*p-o*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yf.copy(this).projectOnVector(t),this.sub(Yf)}reflect(t){return this.sub(Yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,o=this.z-t.z;return e*e+n*n+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let o=Math.sin(e)*t;return this.x=o*Math.sin(n),this.y=Math.cos(e)*t,this.z=o*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yf=new x,N0=new Ie,Qt=class i{constructor(t,e,n,o,r,a,p,s,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u)}set(t,e,n,o,r,a,p,s,u){let f=this.elements;return f[0]=t,f[1]=o,f[2]=p,f[3]=e,f[4]=r,f[5]=s,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[3],s=n[6],u=n[1],f=n[4],l=n[7],h=n[2],c=n[5],d=n[8],T=o[0],y=o[3],b=o[6],E=o[1],m=o[4],g=o[7],L=o[2],U=o[5],R=o[8];return r[0]=a*T+p*E+s*L,r[3]=a*y+p*m+s*U,r[6]=a*b+p*g+s*R,r[1]=u*T+f*E+l*L,r[4]=u*y+f*m+l*U,r[7]=u*b+f*g+l*R,r[2]=h*T+c*E+d*L,r[5]=h*y+c*m+d*U,r[8]=h*b+c*g+d*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8];return e*a*f-e*p*u-n*r*f+n*p*s+o*r*u-o*a*s}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=f*a-p*u,h=p*s-f*r,c=u*r-a*s,d=e*l+n*h+o*c;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/d;return t[0]=l*T,t[1]=(o*u-f*n)*T,t[2]=(p*n-o*a)*T,t[3]=h*T,t[4]=(f*e-o*s)*T,t[5]=(o*r-p*e)*T,t[6]=c*T,t[7]=(n*s-u*e)*T,t[8]=(a*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,o,r,a,p){let s=Math.cos(r),u=Math.sin(r);return this.set(n*s,n*u,-n*(s*a+u*p)+a+t,-o*u,o*s,-o*(-u*a+s*p)+p+e,0,0,1),this}scale(t,e){return this.premultiply(Gf.makeScale(t,e)),this}rotate(t){return this.premultiply(Gf.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<9;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gf=new Qt;function q2(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){let i=yr("canvas");return i.style.display="block",i}var X0={};function mr(i){i in X0||(X0[i]=!0,console.warn(i))}function fh(i,t,e){return new Promise(function(n,o){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var J0=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zy(){let i={enabled:!0,workingColorSpace:je,spaces:{},convert:function(o,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(o.r=cr(o.r),o.g=cr(o.g),o.b=cr(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yn?Ta:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,a){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[je]:{primaries:t,whitePoint:n,transfer:Ta,toXYZ:J0,fromXYZ:z0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:re,toXYZ:J0,fromXYZ:z0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var Yt=zy();function Po(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,ws=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ki===void 0&&(Ki=yr("canvas")),Ki.width=t.width,Ki.height=t.height;let o=Ki.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),n=Ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let o=n.getImageData(0,0,t.width,t.height),r=o.data;for(let a=0;a<r.length;a++)r[a]=Po(r[a]/255)*255;return n.putImageData(o,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Po(e[n]/255)*255):e[n]=Po(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qy=0,gr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let a=0,p=o.length;a<p;a++)o[a].isDataTexture?r.push(Wf(o[a].image)):r.push(Wf(o[a]))}else r=Wf(o);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ws.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jy=0,Kf=new x,He=class i extends eo{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,o=qn,r=Qe,a=dn,p=sn,s=Ln,u=i.DEFAULT_ANISOTROPY,f=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=An(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=p,this.internalFormat=null,this.type=s,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F2)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fn:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fn:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=F2;He.DEFAULT_ANISOTROPY=1;var ne=class i{constructor(t=0,e=0,n=0,o=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,o=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*o+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*o+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*o+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*o+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,o,r,s=t.elements,u=s[0],f=s[4],l=s[8],h=s[1],c=s[5],d=s[9],T=s[2],y=s[6],b=s[10];if(Math.abs(f-h)<.01&&Math.abs(l-T)<.01&&Math.abs(d-y)<.01){if(Math.abs(f+h)<.1&&Math.abs(l+T)<.1&&Math.abs(d+y)<.1&&Math.abs(u+c+b-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let m=(u+1)/2,g=(c+1)/2,L=(b+1)/2,U=(f+h)/4,R=(l+T)/4,v=(d+y)/4;return m>g&&m>L?m<.01?(n=0,o=.707106781,r=.707106781):(n=Math.sqrt(m),o=U/n,r=R/n):g>L?g<.01?(n=.707106781,o=0,r=.707106781):(o=Math.sqrt(g),n=U/o,r=v/o):L<.01?(n=.707106781,o=.707106781,r=0):(r=Math.sqrt(L),n=R/r,o=v/r),this.set(n,o,r,e),this}let E=Math.sqrt((y-d)*(y-d)+(l-T)*(l-T)+(h-f)*(h-f));return Math.abs(E)<.001&&(E=1),this.x=(y-d)/E,this.y=(l-T)/E,this.z=(h-f)/E,this.w=Math.acos((u+c+b-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ps=class extends eo{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let o={width:t,height:e,depth:n.depth},r=new He(o);this.textures=[];let a=n.count;for(let p=0;p<a;p++)this.textures[p]=r.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let o=Object.assign({},t.textures[e].image);this.textures[e].source=new gr(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Ps{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Va=class extends He{constructor(t=null,e=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=_e,this.minFilter=_e,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ls=class extends He{constructor(t=null,e=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:o},this.magFilter=_e,this.minFilter=_e,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(t=new x(1/0,1/0,1/0),e=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,p=r.count;a<p;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qp.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qp.copy(n.boundingBox)),Qp.applyMatrix4(t.matrixWorld),this.union(Qp)}let o=t.children;for(let r=0,a=o.length;r<a;r++)this.expandByObject(o[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ra),jp.subVectors(this.max,ra),qi.subVectors(t.a,ra),tr.subVectors(t.b,ra),er.subVectors(t.c,ra),ko.subVectors(tr,qi),Bo.subVectors(er,tr),ui.subVectors(qi,er);let e=[0,-ko.z,ko.y,0,-Bo.z,Bo.y,0,-ui.z,ui.y,ko.z,0,-ko.x,Bo.z,0,-Bo.x,ui.z,0,-ui.x,-ko.y,ko.x,0,-Bo.y,Bo.x,0,-ui.y,ui.x,0];return!qf(e,qi,tr,er,jp)||(e=[1,0,0,0,1,0,0,0,1],!qf(e,qi,tr,er,jp))?!1:(Zp.crossVectors(ko,Bo),e=[Zp.x,Zp.y,Zp.z],qf(e,qi,tr,er,jp))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(go[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),go[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),go[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),go[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),go[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),go[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),go[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),go[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(go),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},go=[new x,new x,new x,new x,new x,new x,new x,new x],Nn=new x,Qp=new an,qi=new x,tr=new x,er=new x,ko=new x,Bo=new x,ui=new x,ra=new x,jp=new x,Zp=new x,fi=new x;function qf(i,t,e,n,o){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);let p=o.x*Math.abs(fi.x)+o.y*Math.abs(fi.y)+o.z*Math.abs(fi.z),s=t.dot(fi),u=e.dot(fi),f=n.dot(fi);if(Math.max(-Math.max(s,u,f),Math.min(s,u,f))>p)return!1}return!0}var Zy=new an,aa=new x,t2=new x,ln=class{constructor(t=new x,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zy.setFromPoints(t).getCenter(n);let o=0;for(let r=0,a=t.length;r<a;r++)o=Math.max(o,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;aa.subVectors(t,this.center);let e=aa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),o=(n-this.radius)*.5;this.center.addScaledVector(aa,o/n),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(t2.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(aa.copy(t.center).add(t2)),this.expandByPoint(aa.copy(t.center).sub(t2))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},To=new x,e2=new x,Yp=new x,Fo=new x,n2=new x,Gp=new x,o2=new x,Qo=class{constructor(t=new x,e=new x(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,To)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=To.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(To.copy(this.origin).addScaledVector(this.direction,e),To.distanceToSquared(t))}distanceSqToSegment(t,e,n,o){e2.copy(t).add(e).multiplyScalar(.5),Yp.copy(e).sub(t).normalize(),Fo.copy(this.origin).sub(e2);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yp),p=Fo.dot(this.direction),s=-Fo.dot(Yp),u=Fo.lengthSq(),f=Math.abs(1-a*a),l,h,c,d;if(f>0)if(l=a*s-p,h=a*p-s,d=r*f,l>=0)if(h>=-d)if(h<=d){let T=1/f;l*=T,h*=T,c=l*(l+a*h+2*p)+h*(a*l+h+2*s)+u}else h=r,l=Math.max(0,-(a*h+p)),c=-l*l+h*(h+2*s)+u;else h=-r,l=Math.max(0,-(a*h+p)),c=-l*l+h*(h+2*s)+u;else h<=-d?(l=Math.max(0,-(-a*r+p)),h=l>0?-r:Math.min(Math.max(-r,-s),r),c=-l*l+h*(h+2*s)+u):h<=d?(l=0,h=Math.min(Math.max(-r,-s),r),c=h*(h+2*s)+u):(l=Math.max(0,-(a*r+p)),h=l>0?r:Math.min(Math.max(-r,-s),r),c=-l*l+h*(h+2*s)+u);else h=a>0?-r:r,l=Math.max(0,-(a*h+p)),c=-l*l+h*(h+2*s)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),o&&o.copy(e2).addScaledVector(Yp,h),c}intersectSphere(t,e){To.subVectors(t.center,this.origin);let n=To.dot(this.direction),o=To.dot(To)-n*n,r=t.radius*t.radius;if(o>r)return null;let a=Math.sqrt(r-o),p=n-a,s=n+a;return s<0?null:p<0?this.at(s,e):this.at(p,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,o,r,a,p,s,u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(n=(t.min.x-h.x)*u,o=(t.max.x-h.x)*u):(n=(t.max.x-h.x)*u,o=(t.min.x-h.x)*u),f>=0?(r=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||r>o||((r>n||isNaN(n))&&(n=r),(a<o||isNaN(o))&&(o=a),l>=0?(p=(t.min.z-h.z)*l,s=(t.max.z-h.z)*l):(p=(t.max.z-h.z)*l,s=(t.min.z-h.z)*l),n>s||p>o)||((p>n||n!==n)&&(n=p),(s<o||o!==o)&&(o=s),o<0)?null:this.at(n>=0?n:o,e)}intersectsBox(t){return this.intersectBox(t,To)!==null}intersectTriangle(t,e,n,o,r){n2.subVectors(e,t),Gp.subVectors(n,t),o2.crossVectors(n2,Gp);let a=this.direction.dot(o2),p;if(a>0){if(o)return null;p=1}else if(a<0)p=-1,a=-a;else return null;Fo.subVectors(this.origin,t);let s=p*this.direction.dot(Gp.crossVectors(Fo,Gp));if(s<0)return null;let u=p*this.direction.dot(n2.cross(Fo));if(u<0||s+u>a)return null;let f=-p*Fo.dot(o2);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class i{constructor(t,e,n,o,r,a,p,s,u,f,l,h,c,d,T,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,o,r,a,p,s,u,f,l,h,c,d,T,y)}set(t,e,n,o,r,a,p,s,u,f,l,h,c,d,T,y){let b=this.elements;return b[0]=t,b[4]=e,b[8]=n,b[12]=o,b[1]=r,b[5]=a,b[9]=p,b[13]=s,b[2]=u,b[6]=f,b[10]=l,b[14]=h,b[3]=c,b[7]=d,b[11]=T,b[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,o=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,o=t.y,r=t.z,a=Math.cos(n),p=Math.sin(n),s=Math.cos(o),u=Math.sin(o),f=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let h=a*f,c=a*l,d=p*f,T=p*l;e[0]=s*f,e[4]=-s*l,e[8]=u,e[1]=c+d*u,e[5]=h-T*u,e[9]=-p*s,e[2]=T-h*u,e[6]=d+c*u,e[10]=a*s}else if(t.order==="YXZ"){let h=s*f,c=s*l,d=u*f,T=u*l;e[0]=h+T*p,e[4]=d*p-c,e[8]=a*u,e[1]=a*l,e[5]=a*f,e[9]=-p,e[2]=c*p-d,e[6]=T+h*p,e[10]=a*s}else if(t.order==="ZXY"){let h=s*f,c=s*l,d=u*f,T=u*l;e[0]=h-T*p,e[4]=-a*l,e[8]=d+c*p,e[1]=c+d*p,e[5]=a*f,e[9]=T-h*p,e[2]=-a*u,e[6]=p,e[10]=a*s}else if(t.order==="ZYX"){let h=a*f,c=a*l,d=p*f,T=p*l;e[0]=s*f,e[4]=d*u-c,e[8]=h*u+T,e[1]=s*l,e[5]=T*u+h,e[9]=c*u-d,e[2]=-u,e[6]=p*s,e[10]=a*s}else if(t.order==="YZX"){let h=a*s,c=a*u,d=p*s,T=p*u;e[0]=s*f,e[4]=T-h*l,e[8]=d*l+c,e[1]=l,e[5]=a*f,e[9]=-p*f,e[2]=-u*f,e[6]=c*l+d,e[10]=h-T*l}else if(t.order==="XZY"){let h=a*s,c=a*u,d=p*s,T=p*u;e[0]=s*f,e[4]=-l,e[8]=u*f,e[1]=h*l+T,e[5]=a*f,e[9]=c*l-d,e[2]=d*l-c,e[6]=p*f,e[10]=T*l+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yy,t,Gy)}lookAt(t,e,n){let o=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),No.crossVectors(n,En),No.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),No.crossVectors(n,En)),No.normalize(),Wp.crossVectors(En,No),o[0]=No.x,o[4]=Wp.x,o[8]=En.x,o[1]=No.y,o[5]=Wp.y,o[9]=En.y,o[2]=No.z,o[6]=Wp.z,o[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,o=e.elements,r=this.elements,a=n[0],p=n[4],s=n[8],u=n[12],f=n[1],l=n[5],h=n[9],c=n[13],d=n[2],T=n[6],y=n[10],b=n[14],E=n[3],m=n[7],g=n[11],L=n[15],U=o[0],R=o[4],v=o[8],V=o[12],S=o[1],D=o[5],A=o[9],_=o[13],$=o[2],F=o[6],J=o[10],tt=o[14],z=o[3],et=o[7],ft=o[11],yt=o[15];return r[0]=a*U+p*S+s*$+u*z,r[4]=a*R+p*D+s*F+u*et,r[8]=a*v+p*A+s*J+u*ft,r[12]=a*V+p*_+s*tt+u*yt,r[1]=f*U+l*S+h*$+c*z,r[5]=f*R+l*D+h*F+c*et,r[9]=f*v+l*A+h*J+c*ft,r[13]=f*V+l*_+h*tt+c*yt,r[2]=d*U+T*S+y*$+b*z,r[6]=d*R+T*D+y*F+b*et,r[10]=d*v+T*A+y*J+b*ft,r[14]=d*V+T*_+y*tt+b*yt,r[3]=E*U+m*S+g*$+L*z,r[7]=E*R+m*D+g*F+L*et,r[11]=E*v+m*A+g*J+L*ft,r[15]=E*V+m*_+g*tt+L*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],o=t[8],r=t[12],a=t[1],p=t[5],s=t[9],u=t[13],f=t[2],l=t[6],h=t[10],c=t[14],d=t[3],T=t[7],y=t[11],b=t[15];return d*(+r*s*l-o*u*l-r*p*h+n*u*h+o*p*c-n*s*c)+T*(+e*s*c-e*u*h+r*a*h-o*a*c+o*u*f-r*s*f)+y*(+e*u*l-e*p*c-r*a*l+n*a*c+r*p*f-n*u*f)+b*(-o*p*f-e*s*l+e*p*h+o*a*l-n*a*h+n*s*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],o=t[2],r=t[3],a=t[4],p=t[5],s=t[6],u=t[7],f=t[8],l=t[9],h=t[10],c=t[11],d=t[12],T=t[13],y=t[14],b=t[15],E=l*y*u-T*h*u+T*s*c-p*y*c-l*s*b+p*h*b,m=d*h*u-f*y*u-d*s*c+a*y*c+f*s*b-a*h*b,g=f*T*u-d*l*u+d*p*c-a*T*c-f*p*b+a*l*b,L=d*l*s-f*T*s-d*p*h+a*T*h+f*p*y-a*l*y,U=e*E+n*m+o*g+r*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/U;return t[0]=E*R,t[1]=(T*h*r-l*y*r-T*o*c+n*y*c+l*o*b-n*h*b)*R,t[2]=(p*y*r-T*s*r+T*o*u-n*y*u-p*o*b+n*s*b)*R,t[3]=(l*s*r-p*h*r-l*o*u+n*h*u+p*o*c-n*s*c)*R,t[4]=m*R,t[5]=(f*y*r-d*h*r+d*o*c-e*y*c-f*o*b+e*h*b)*R,t[6]=(d*s*r-a*y*r-d*o*u+e*y*u+a*o*b-e*s*b)*R,t[7]=(a*h*r-f*s*r+f*o*u-e*h*u-a*o*c+e*s*c)*R,t[8]=g*R,t[9]=(d*l*r-f*T*r-d*n*c+e*T*c+f*n*b-e*l*b)*R,t[10]=(a*T*r-d*p*r+d*n*u-e*T*u-a*n*b+e*p*b)*R,t[11]=(f*p*r-a*l*r-f*n*u+e*l*u+a*n*c-e*p*c)*R,t[12]=L*R,t[13]=(f*T*o-d*l*o+d*n*h-e*T*h-f*n*y+e*l*y)*R,t[14]=(d*p*o-a*T*o-d*n*s+e*T*s+a*n*y-e*p*y)*R,t[15]=(a*l*o-f*p*o+f*n*s-e*l*s-a*n*h+e*p*h)*R,this}scale(t){let e=this.elements,n=t.x,o=t.y,r=t.z;return e[0]*=n,e[4]*=o,e[8]*=r,e[1]*=n,e[5]*=o,e[9]*=r,e[2]*=n,e[6]*=o,e[10]*=r,e[3]*=n,e[7]*=o,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,o))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),o=Math.sin(e),r=1-n,a=t.x,p=t.y,s=t.z,u=r*a,f=r*p;return this.set(u*a+n,u*p-o*s,u*s+o*p,0,u*p+o*s,f*p+n,f*s-o*a,0,u*s-o*p,f*s+o*a,r*s*s+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,o,r,a){return this.set(1,n,r,0,t,1,a,0,e,o,1,0,0,0,0,1),this}compose(t,e,n){let o=this.elements,r=e._x,a=e._y,p=e._z,s=e._w,u=r+r,f=a+a,l=p+p,h=r*u,c=r*f,d=r*l,T=a*f,y=a*l,b=p*l,E=s*u,m=s*f,g=s*l,L=n.x,U=n.y,R=n.z;return o[0]=(1-(T+b))*L,o[1]=(c+g)*L,o[2]=(d-m)*L,o[3]=0,o[4]=(c-g)*U,o[5]=(1-(h+b))*U,o[6]=(y+E)*U,o[7]=0,o[8]=(d+m)*R,o[9]=(y-E)*R,o[10]=(1-(h+T))*R,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,n){let o=this.elements,r=nr.set(o[0],o[1],o[2]).length(),a=nr.set(o[4],o[5],o[6]).length(),p=nr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),t.x=o[12],t.y=o[13],t.z=o[14],Xn.copy(this);let u=1/r,f=1/a,l=1/p;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=f,Xn.elements[5]*=f,Xn.elements[6]*=f,Xn.elements[8]*=l,Xn.elements[9]*=l,Xn.elements[10]*=l,e.setFromRotationMatrix(Xn),n.x=r,n.y=a,n.z=p,this}makePerspective(t,e,n,o,r,a,p=Qn,s=!1){let u=this.elements,f=2*r/(e-t),l=2*r/(n-o),h=(e+t)/(e-t),c=(n+o)/(n-o),d,T;if(s)d=r/(a-r),T=a*r/(a-r);else if(p===Qn)d=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(p===Ea)d=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=l,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=d,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,o,r,a,p=Qn,s=!1){let u=this.elements,f=2/(e-t),l=2/(n-o),h=-(e+t)/(e-t),c=-(n+o)/(n-o),d,T;if(s)d=1/(a-r),T=a/(a-r);else if(p===Qn)d=-2/(a-r),T=-(a+r)/(a-r);else if(p===Ea)d=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=l,u[9]=0,u[13]=c,u[2]=0,u[6]=0,u[10]=d,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let o=0;o<16;o++)if(e[o]!==n[o])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},nr=new x,Xn=new Dt,Yy=new x(0,0,0),Gy=new x(1,1,1),No=new x,Wp=new x,En=new x,Q0=new Dt,j0=new Ie,wn=class i{constructor(t=0,e=0,n=0,o=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,o=this._order){return this._x=t,this._y=e,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let o=t.elements,r=o[0],a=o[4],p=o[8],s=o[1],u=o[5],f=o[9],l=o[2],h=o[6],c=o[10];switch(e){case"XYZ":this._y=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,c),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(p,c),this._z=Math.atan2(s,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,c),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(s,r));break;case"ZYX":this._y=Math.asin(-Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,c),this._z=Math.atan2(s,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(p,c));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(p,r)):(this._x=Math.atan2(-f,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Q0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Q0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return j0.setFromEuler(this),this.setFromQuaternion(j0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wy=0,Z0=new x,or=new Ie,Eo=new Dt,Kp=new x,pa=new x,Ky=new x,qy=new Ie,Y0=new x(1,0,0),G0=new x(0,1,0),W0=new x(0,0,1),K0={type:"added"},t3={type:"removed"},ir={type:"childadded",child:null},i2={type:"childremoved",child:null},we=class i extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new x,e=new wn,n=new Ie,o=new x(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Qt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Y0,t)}rotateY(t){return this.rotateOnAxis(G0,t)}rotateZ(t){return this.rotateOnAxis(W0,t)}translateOnAxis(t,e){return Z0.copy(t).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Y0,t)}translateY(t){return this.translateOnAxis(G0,t)}translateZ(t){return this.translateOnAxis(W0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Eo.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kp.copy(t):Kp.set(t,e,n);let o=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Eo.lookAt(pa,Kp,this.up):Eo.lookAt(Kp,pa,this.up),this.quaternion.setFromRotationMatrix(Eo),o&&(Eo.extractRotation(o.matrixWorld),or.setFromRotationMatrix(Eo),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(K0),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t3),i2.child=t,this.dispatchEvent(i2),i2.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Eo.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Eo.multiply(t.parent.matrixWorld)),t.applyMatrix4(Eo),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(K0),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,o=this.children.length;n<o;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,Ky),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,qy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,o=e.length;n<o;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(p,s){return p[s.uuid]===void 0&&(p[s.uuid]=s.toJSON(t)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(t.geometries,this.geometry);let p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){let s=p.shapes;if(Array.isArray(s))for(let u=0,f=s.length;u<f;u++){let l=s[u];r(t.shapes,l)}else r(t.shapes,s)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let p=[];for(let s=0,u=this.material.length;s<u;s++)p.push(r(t.materials,this.material[s]));o.material=p}else o.material=r(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){let s=this.animations[p];o.animations.push(r(t.animations,s))}}if(e){let p=a(t.geometries),s=a(t.materials),u=a(t.textures),f=a(t.images),l=a(t.shapes),h=a(t.skeletons),c=a(t.animations),d=a(t.nodes);p.length>0&&(n.geometries=p),s.length>0&&(n.materials=s),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),c.length>0&&(n.animations=c),d.length>0&&(n.nodes=d)}return n.object=o,n;function a(p){let s=[];for(let u in p){let f=p[u];delete f.metadata,s.push(f)}return s}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let o=t.children[n];this.add(o.clone())}return this}};we.DEFAULT_UP=new x(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new x,Vo=new x,r2=new x,So=new x,rr=new x,ar=new x,q0=new x,a2=new x,p2=new x,s2=new x,u2=new ne,f2=new ne,l2=new ne,zo=class i{constructor(t=new x,e=new x,n=new x){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,o){o.subVectors(n,e),Jn.subVectors(t,e),o.cross(Jn);let r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(t,e,n,o,r){Jn.subVectors(o,e),Vo.subVectors(n,e),r2.subVectors(t,e);let a=Jn.dot(Jn),p=Jn.dot(Vo),s=Jn.dot(r2),u=Vo.dot(Vo),f=Vo.dot(r2),l=a*u-p*p;if(l===0)return r.set(0,0,0),null;let h=1/l,c=(u*s-p*f)*h,d=(a*f-p*s)*h;return r.set(1-c-d,d,c)}static containsPoint(t,e,n,o){return this.getBarycoord(t,e,n,o,So)===null?!1:So.x>=0&&So.y>=0&&So.x+So.y<=1}static getInterpolation(t,e,n,o,r,a,p,s){return this.getBarycoord(t,e,n,o,So)===null?(s.x=0,s.y=0,"z"in s&&(s.z=0),"w"in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(r,So.x),s.addScaledVector(a,So.y),s.addScaledVector(p,So.z),s)}static getInterpolatedAttribute(t,e,n,o,r,a){return u2.setScalar(0),f2.setScalar(0),l2.setScalar(0),u2.fromBufferAttribute(t,e),f2.fromBufferAttribute(t,n),l2.fromBufferAttribute(t,o),a.setScalar(0),a.addScaledVector(u2,r.x),a.addScaledVector(f2,r.y),a.addScaledVector(l2,r.z),a}static isFrontFacing(t,e,n,o){return Jn.subVectors(n,e),Vo.subVectors(t,e),Jn.cross(Vo).dot(o)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,o){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,n,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Vo.subVectors(this.a,this.b),Jn.cross(Vo).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,o,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,o,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,o=this.b,r=this.c,a,p;rr.subVectors(o,n),ar.subVectors(r,n),a2.subVectors(t,n);let s=rr.dot(a2),u=ar.dot(a2);if(s<=0&&u<=0)return e.copy(n);p2.subVectors(t,o);let f=rr.dot(p2),l=ar.dot(p2);if(f>=0&&l<=f)return e.copy(o);let h=s*l-f*u;if(h<=0&&s>=0&&f<=0)return a=s/(s-f),e.copy(n).addScaledVector(rr,a);s2.subVectors(t,r);let c=rr.dot(s2),d=ar.dot(s2);if(d>=0&&c<=d)return e.copy(r);let T=c*u-s*d;if(T<=0&&u>=0&&d<=0)return p=u/(u-d),e.copy(n).addScaledVector(ar,p);let y=f*d-c*l;if(y<=0&&l-f>=0&&c-d>=0)return q0.subVectors(r,o),p=(l-f)/(l-f+(c-d)),e.copy(o).addScaledVector(q0,p);let b=1/(y+T+h);return a=T*b,p=h*b,e.copy(n).addScaledVector(rr,a).addScaledVector(ar,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xo={h:0,s:0,l:0},qp={h:0,s:0,l:0};function c2(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,o=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,o),this}setHSL(t,e,n,o=Yt.workingColorSpace){if(t=K2(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=c2(a,r,t+1/3),this.g=c2(a,r,t),this.b=c2(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,o),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=o[1],p=o[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=o[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Yt.workingToColorSpace(We.copy(this),t),Math.round(Zt(We.r*255,0,255))*65536+Math.round(Zt(We.g*255,0,255))*256+Math.round(Zt(We.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(We.copy(this),e);let n=We.r,o=We.g,r=We.b,a=Math.max(n,o,r),p=Math.min(n,o,r),s,u,f=(p+a)/2;if(p===a)s=0,u=0;else{let l=a-p;switch(u=f<=.5?l/(a+p):l/(2-a-p),a){case n:s=(o-r)/l+(o<r?6:0);break;case o:s=(r-n)/l+2;break;case r:s=(n-o)/l+4;break}s/=6}return t.h=s,t.s=u,t.l=f,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Te){Yt.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,o=We.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(t,e,n){return this.getHSL(Xo),this.setHSL(Xo.h+t,Xo.s+e,Xo.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xo),t.getHSL(qp);let n=da(Xo.h,qp.h,e),o=da(Xo.s,qp.s,e),r=da(Xo.l,qp.l,e);return this.setHSL(n,o,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,o=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*o,this.g=r[1]*e+r[4]*n+r[7]*o,this.b=r[2]*e+r[5]*n+r[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new mt;mt.NAMES=lh;var e3=0,Ke=class extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e3++}),this.uuid=An(),this.name="",this.type="Material",this.blending=yi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Es,this.blendDst=Vs,this.blendEquation=Sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Es&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==Sn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U2&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(r){let a=[];for(let p in r){let s=r[p];delete s.metadata,a.push(s)}return a}if(e){let r=o(t.textures),a=o(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let o=e.length;n=new Array(o);for(let r=0;r!==o;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},oe=class extends Ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=B2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new x,ts=new nt,n3=0,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n3++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ss,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[t+o]=e.array[n+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,o){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),o=ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),o=ue(o,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=o,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ss&&(t.usage=this.usage),t}};var Sa=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wa=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},o3=0,vn=new Dt,h2=new we,pr=new x,Vn=new an,sa=new an,Xe=new x,ae=class i extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o3++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q2(t)?wa:Sa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return h2.lookAt(t),h2.updateMatrix(),this.applyMatrix4(h2.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let o=0,r=t.length;o<r;o++){let a=t[o];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let o=0;o<n;o++){let r=t[o];e.setXYZ(o,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,o=e.length;n<o;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let p=e[r];sa.setFromBufferAttribute(p),this.morphTargetsRelative?(Xe.addVectors(Vn.min,sa.min),Vn.expandByPoint(Xe),Xe.addVectors(Vn.max,sa.max),Vn.expandByPoint(Xe)):(Vn.expandByPoint(sa.min),Vn.expandByPoint(sa.max))}Vn.getCenter(n);let o=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),o=Math.max(o,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let p=e[r],s=this.morphTargetsRelative;for(let u=0,f=p.count;u<f;u++)Xe.fromBufferAttribute(p,u),s&&(pr.fromBufferAttribute(t,u),Xe.add(pr)),o=Math.max(o,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,o=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),p=[],s=[];for(let v=0;v<n.count;v++)p[v]=new x,s[v]=new x;let u=new x,f=new x,l=new x,h=new nt,c=new nt,d=new nt,T=new x,y=new x;function b(v,V,S){u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,V),l.fromBufferAttribute(n,S),h.fromBufferAttribute(r,v),c.fromBufferAttribute(r,V),d.fromBufferAttribute(r,S),f.sub(u),l.sub(u),c.sub(h),d.sub(h);let D=1/(c.x*d.y-d.x*c.y);isFinite(D)&&(T.copy(f).multiplyScalar(d.y).addScaledVector(l,-c.y).multiplyScalar(D),y.copy(l).multiplyScalar(c.x).addScaledVector(f,-d.x).multiplyScalar(D),p[v].add(T),p[V].add(T),p[S].add(T),s[v].add(y),s[V].add(y),s[S].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,V=E.length;v<V;++v){let S=E[v],D=S.start,A=S.count;for(let _=D,$=D+A;_<$;_+=3)b(t.getX(_+0),t.getX(_+1),t.getX(_+2))}let m=new x,g=new x,L=new x,U=new x;function R(v){L.fromBufferAttribute(o,v),U.copy(L);let V=p[v];m.copy(V),m.sub(L.multiplyScalar(L.dot(V))).normalize(),g.crossVectors(U,V);let D=g.dot(s[v])<0?-1:1;a.setXYZW(v,m.x,m.y,m.z,D)}for(let v=0,V=E.length;v<V;++v){let S=E[v],D=S.start,A=S.count;for(let _=D,$=D+A;_<$;_+=3)R(t.getX(_+0)),R(t.getX(_+1)),R(t.getX(_+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,c=n.count;h<c;h++)n.setXYZ(h,0,0,0);let o=new x,r=new x,a=new x,p=new x,s=new x,u=new x,f=new x,l=new x;if(t)for(let h=0,c=t.count;h<c;h+=3){let d=t.getX(h+0),T=t.getX(h+1),y=t.getX(h+2);o.fromBufferAttribute(e,d),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,y),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),p.fromBufferAttribute(n,d),s.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),p.add(f),s.add(f),u.add(f),n.setXYZ(d,p.x,p.y,p.z),n.setXYZ(T,s.x,s.y,s.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let h=0,c=e.count;h<c;h+=3)o.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,r),l.subVectors(o,r),f.cross(l),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(p,s){let u=p.array,f=p.itemSize,l=p.normalized,h=new u.constructor(s.length*f),c=0,d=0;for(let T=0,y=s.length;T<y;T++){p.isInterleavedBufferAttribute?c=s[T]*p.data.stride+p.offset:c=s[T]*f;for(let b=0;b<f;b++)h[d++]=u[c++]}return new Ce(h,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,o=this.attributes;for(let p in o){let s=o[p],u=t(s,n);e.setAttribute(p,u)}let r=this.morphAttributes;for(let p in r){let s=[],u=r[p];for(let f=0,l=u.length;f<l;f++){let h=u[f],c=t(h,n);s.push(c)}e.morphAttributes[p]=s}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let p=0,s=a.length;p<s;p++){let u=a[p];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let s=this.parameters;for(let u in s)s[u]!==void 0&&(t[u]=s[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let s in n){let u=n[s];t.data.attributes[s]=u.toJSON(t.data)}let o={},r=!1;for(let s in this.morphAttributes){let u=this.morphAttributes[s],f=[];for(let l=0,h=u.length;l<h;l++){let c=u[l];f.push(c.toJSON(t.data))}f.length>0&&(o[s]=f,r=!0)}r&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let o=t.attributes;for(let u in o){let f=o[u];this.setAttribute(u,f.clone(e))}let r=t.morphAttributes;for(let u in r){let f=[],l=r[u];for(let h=0,c=l.length;h<c;h++)f.push(l[h].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,f=a.length;u<f;u++){let l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}let p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());let s=t.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},t1=new Dt,li=new Qo,es=new ln,e1=new x,ns=new x,os=new x,is=new x,b2=new x,rs=new x,n1=new x,as=new x,Ft=class extends we{constructor(t=new ae,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}getVertexPosition(t,e){let n=this.geometry,o=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(o,t);let p=this.morphTargetInfluences;if(r&&p){rs.set(0,0,0);for(let s=0,u=r.length;s<u;s++){let f=p[s],l=r[s];f!==0&&(b2.fromBufferAttribute(l,t),a?rs.addScaledVector(b2,f):rs.addScaledVector(b2.sub(e),f))}e.add(rs)}return e}raycast(t,e){let n=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(es.containsPoint(li.origin)===!1&&(li.intersectSphere(es,e1)===null||li.origin.distanceToSquared(e1)>(t.far-t.near)**2))&&(t1.copy(r).invert(),li.copy(t.ray).applyMatrix4(t1),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let o,r=this.geometry,a=this.material,p=r.index,s=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,l=r.attributes.normal,h=r.groups,c=r.drawRange;if(p!==null)if(Array.isArray(a))for(let d=0,T=h.length;d<T;d++){let y=h[d],b=a[y.materialIndex],E=Math.max(y.start,c.start),m=Math.min(p.count,Math.min(y.start+y.count,c.start+c.count));for(let g=E,L=m;g<L;g+=3){let U=p.getX(g),R=p.getX(g+1),v=p.getX(g+2);o=ps(this,b,t,n,u,f,l,U,R,v),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let d=Math.max(0,c.start),T=Math.min(p.count,c.start+c.count);for(let y=d,b=T;y<b;y+=3){let E=p.getX(y),m=p.getX(y+1),g=p.getX(y+2);o=ps(this,a,t,n,u,f,l,E,m,g),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}else if(s!==void 0)if(Array.isArray(a))for(let d=0,T=h.length;d<T;d++){let y=h[d],b=a[y.materialIndex],E=Math.max(y.start,c.start),m=Math.min(s.count,Math.min(y.start+y.count,c.start+c.count));for(let g=E,L=m;g<L;g+=3){let U=g,R=g+1,v=g+2;o=ps(this,b,t,n,u,f,l,U,R,v),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let d=Math.max(0,c.start),T=Math.min(s.count,c.start+c.count);for(let y=d,b=T;y<b;y+=3){let E=y,m=y+1,g=y+2;o=ps(this,a,t,n,u,f,l,E,m,g),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}}};function i3(i,t,e,n,o,r,a,p){let s;if(t.side===pn?s=n.intersectTriangle(a,r,o,!0,p):s=n.intersectTriangle(o,r,a,t.side===jn,p),s===null)return null;as.copy(p),as.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(as);return u<e.near||u>e.far?null:{distance:u,point:as.clone(),object:i}}function ps(i,t,e,n,o,r,a,p,s,u){i.getVertexPosition(p,ns),i.getVertexPosition(s,os),i.getVertexPosition(u,is);let f=i3(i,t,e,n,ns,os,is,n1);if(f){let l=new x;zo.getBarycoord(n1,ns,os,is,l),o&&(f.uv=zo.getInterpolatedAttribute(o,p,s,u,l,new nt)),r&&(f.uv1=zo.getInterpolatedAttribute(r,p,s,u,l,new nt)),a&&(f.normal=zo.getInterpolatedAttribute(a,p,s,u,l,new x),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a:p,b:s,c:u,normal:new x,materialIndex:0};zo.getNormal(ns,os,is,h.normal),f.face=h,f.barycoord=l}return f}var Vi=class i extends ae{constructor(t=1,e=1,n=1,o=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:o,heightSegments:r,depthSegments:a};let p=this;o=Math.floor(o),r=Math.floor(r),a=Math.floor(a);let s=[],u=[],f=[],l=[],h=0,c=0;d("z","y","x",-1,-1,n,e,t,a,r,0),d("z","y","x",1,-1,n,e,-t,a,r,1),d("x","z","y",1,1,t,n,e,o,a,2),d("x","z","y",1,-1,t,n,-e,o,a,3),d("x","y","z",1,-1,t,e,n,o,r,4),d("x","y","z",-1,-1,t,e,-n,o,r,5),this.setIndex(s),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(l,2));function d(T,y,b,E,m,g,L,U,R,v,V){let S=g/R,D=L/v,A=g/2,_=L/2,$=U/2,F=R+1,J=v+1,tt=0,z=0,et=new x;for(let ft=0;ft<J;ft++){let yt=ft*D-_;for(let _t=0;_t<F;_t++){let $t=_t*S-A;et[T]=$t*E,et[y]=yt*m,et[b]=$,u.push(et.x,et.y,et.z),et[T]=0,et[y]=0,et[b]=U>0?1:-1,f.push(et.x,et.y,et.z),l.push(_t/R),l.push(1-ft/v),tt+=1}}for(let ft=0;ft<v;ft++)for(let yt=0;yt<R;yt++){let _t=h+yt+F*ft,$t=h+yt+F*(ft+1),ie=h+(yt+1)+F*(ft+1),qt=h+(yt+1)+F*ft;s.push(_t,$t,qt),s.push($t,ie,qt),z+=6}p.addGroup(c,z,V),c+=z,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let o=i[e][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=o.clone():Array.isArray(o)?t[e][n]=o.slice():t[e][n]=o}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let o in n)t[o]=n[o]}return t}function r3(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var $n={clone:Ii,merge:en},a3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a3,this.fragmentShader=p3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=r3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let o in this.uniforms){let a=this.uniforms[o].value;a&&a.isTexture?e.uniforms[o]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[o]={type:"m4",value:a.toArray()}:e.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pa=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jo=new x,o1=new nt,i1=new nt,Ae=class extends Pa{constructor(t=50,e=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ei*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jo.x,Jo.y).multiplyScalar(-t/Jo.z),Jo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jo.x,Jo.y).multiplyScalar(-t/Jo.z)}getViewSize(t,e){return this.getViewBounds(t,o1,i1),e.subVectors(i1,o1)}setViewOffset(t,e,n,o,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,o=this.aspect*n,r=-.5*o,a=this.view;if(this.view!==null&&this.view.enabled){let s=a.fullWidth,u=a.fullHeight;r+=a.offsetX*o/s,e-=a.offsetY*n/u,o*=a.width/s,n*=a.height/u}let p=this.filmOffset;p!==0&&(r+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},sr=-90,ur=1,Us=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new Ae(sr,ur,t,e);o.layers=this.layers,this.add(o);let r=new Ae(sr,ur,t,e);r.layers=this.layers,this.add(r);let a=new Ae(sr,ur,t,e);a.layers=this.layers,this.add(a);let p=new Ae(sr,ur,t,e);p.layers=this.layers,this.add(p);let s=new Ae(sr,ur,t,e);s.layers=this.layers,this.add(s);let u=new Ae(sr,ur,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,o,r,a,p,s]=e;for(let u of e)this.remove(u);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(t===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,p,s,u,f]=this.children,l=t.getRenderTarget(),h=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,o),t.render(e,r),t.setRenderTarget(n,1,o),t.render(e,a),t.setRenderTarget(n,2,o),t.render(e,p),t.setRenderTarget(n,3,o),t.render(e,s),t.setRenderTarget(n,4,o),t.render(e,u),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,o),t.render(e,f),t.setRenderTarget(l,h,c),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},La=class extends He{constructor(t=[],e=vi,n,o,r,a,p,s,u,f){super(t,e,n,o,r,a,p,s,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},o=[n,n,n,n,n,n];this.texture=new La(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Vi(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:$e});r.uniforms.tEquirect.value=e;let a=new Ft(o,r),p=e.minFilter;return e.minFilter===dn&&(e.minFilter=Qe),new Us(1,10,this).update(t,a),e.minFilter=p,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,o=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,o);t.setRenderTarget(r)}},De=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},s3={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let o=null,r=null,a=null,p=this._targetRay,s=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let T of t.hand.values()){let y=e.getJointPose(T,n),b=this._getHandJoint(u,T);y!==null&&(b.matrix.fromArray(y.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=y.radius),b.visible=y!==null}let f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=f.position.distanceTo(l.position),c=.02,d=.005;u.inputState.pinching&&h>c+d?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=c-d&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else s!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1));p!==null&&(o=e.getPose(t.targetRaySpace,n),o===null&&r!==null&&(o=r),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(s3)))}return p!==null&&(p.visible=o!==null),s!==null&&(s.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Ua=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ca=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ss,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let o=0,r=this.stride;o<r;o++)this.array[t+o]=e.array[n+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new x,Sr=class i{constructor(t,e,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),o=ue(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this}setXYZW(t,e,n,o,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),o=ue(o,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=o,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let o=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[o+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var r1=new x,a1=new ne,p1=new ne,u3=new x,s1=new Dt,ss=new x,d2=new ln,u1=new Dt,y2=new Qo,xa=class extends Ft{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=L2,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ss),this.boundingBox.expandByPoint(ss)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ss),this.boundingSphere.expandByPoint(ss)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,o=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),d2.copy(this.boundingSphere),d2.applyMatrix4(o),t.ray.intersectsSphere(d2)!==!1&&(u1.copy(o).invert(),y2.copy(t.ray).applyMatrix4(u1),!(this.boundingBox!==null&&y2.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,y2)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,o=e.count;n<o;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===L2?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Y1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,o=this.geometry;a1.fromBufferAttribute(o.attributes.skinIndex,t),p1.fromBufferAttribute(o.attributes.skinWeight,t),r1.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=p1.getComponent(r);if(a!==0){let p=a1.getComponent(r);s1.multiplyMatrices(n.bones[p].matrixWorld,n.boneInverses[p]),e.addScaledVector(u3.copy(r1).applyMatrix4(s1),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},wr=class extends we{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lo=class extends He{constructor(t=null,e=1,n=1,o,r,a,p,s,u=_e,f=_e,l,h){super(null,a,p,s,u,f,o,r,l,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},f1=new Dt,f3=new Dt,Oa=class i{constructor(t=[],e=[]){this.uuid=An(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,o=this.bones.length;n<o;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,o=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let p=t[r]?t[r].matrixWorld:f3;f1.multiplyMatrices(p,e[r]),f1.toArray(n,r*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Lo(e,t,t,sn,_n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let o=this.bones[e];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,o=t.bones.length;n<o;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new wr),this.bones.push(a),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let o=0,r=e.length;o<r;o++){let a=e[o];t.bones.push(a.uuid);let p=n[o];t.boneInverses.push(p.toArray())}return t}},jo=class extends Ce{constructor(t,e,n,o=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fr=new Dt,l1=new Dt,us=[],c1=new an,l3=new Dt,ua=new Ft,fa=new ln,Zn=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,l3)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fr),c1.copy(t.boundingBox).applyMatrix4(fr),this.boundingBox.union(c1)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fr),fa.copy(t.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(fa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,o=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let p=0;p<n.length;p++)n[p]=o[a+p]}raycast(t,e){let n=this.matrixWorld,o=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),t.ray.intersectsSphere(fa)!==!1))for(let r=0;r<o;r++){this.getMatrixAt(r,fr),l1.multiplyMatrices(n,fr),ua.matrixWorld=l1,ua.raycast(t,us);for(let a=0,p=us.length;a<p;a++){let s=us[a];s.instanceId=r,s.object=this,e.push(s)}us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lo(new Float32Array(o*this.count),o,this.count,hu,_n));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let p=this.geometry.morphTargetsRelative?1:1-a,s=o*t;r[s]=p,r.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},m2=new x,c3=new x,h3=new Qt,Mn=class{constructor(t=new x(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,o){return this.normal.set(t,e,n),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let o=m2.subVectors(n,e).cross(c3.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(m2),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||h3.getNormalMatrix(t),o=this.coplanarPoint(m2).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new ln,b3=new nt(.5,.5),fs=new x,Pr=class{constructor(t=new Mn,e=new Mn,n=new Mn,o=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,o,r,a]}set(t,e,n,o,r,a){let p=this.planes;return p[0].copy(t),p[1].copy(e),p[2].copy(n),p[3].copy(o),p[4].copy(r),p[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let o=this.planes,r=t.elements,a=r[0],p=r[1],s=r[2],u=r[3],f=r[4],l=r[5],h=r[6],c=r[7],d=r[8],T=r[9],y=r[10],b=r[11],E=r[12],m=r[13],g=r[14],L=r[15];if(o[0].setComponents(u-a,c-f,b-d,L-E).normalize(),o[1].setComponents(u+a,c+f,b+d,L+E).normalize(),o[2].setComponents(u+p,c+l,b+T,L+m).normalize(),o[3].setComponents(u-p,c-l,b-T,L-m).normalize(),n)o[4].setComponents(s,h,y,g).normalize(),o[5].setComponents(u-s,c-h,b-y,L-g).normalize();else if(o[4].setComponents(u-s,c-h,b-y,L-g).normalize(),e===Qn)o[5].setComponents(u+s,c+h,b+y,L+g).normalize();else if(e===Ea)o[5].setComponents(s,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);let e=b3.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,o=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<o)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let o=e[n];if(fs.x=o.normal.x>0?t.max.x:t.min.x,fs.y=o.normal.y>0?t.max.y:t.min.y,fs.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends Ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xs=new x,Os=new x,h1=new Dt,la=new Qo,ls=new ln,g2=new x,b1=new x,Si=class extends we{constructor(t=new ae,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let o=1,r=e.count;o<r;o++)xs.fromBufferAttribute(e,o-1),Os.fromBufferAttribute(e,o),n[o]=n[o-1],n[o]+=xs.distanceTo(Os);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(o),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;h1.copy(o).invert(),la.copy(t.ray).applyMatrix4(h1);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){let c=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let T=c,y=d-1;T<y;T+=u){let b=f.getX(T),E=f.getX(T+1),m=cs(this,t,la,s,b,E,T);m&&e.push(m)}if(this.isLineLoop){let T=f.getX(d-1),y=f.getX(c),b=cs(this,t,la,s,T,y,d-1);b&&e.push(b)}}else{let c=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let T=c,y=d-1;T<y;T+=u){let b=cs(this,t,la,s,T,T+1,T);b&&e.push(b)}if(this.isLineLoop){let T=cs(this,t,la,s,d-1,c,d-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function cs(i,t,e,n,o,r,a){let p=i.geometry.attributes.position;if(xs.fromBufferAttribute(p,o),Os.fromBufferAttribute(p,r),e.distanceSqToSegment(xs,Os,g2,b1)>n)return;g2.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(g2);if(!(u<t.near||u>t.far))return{distance:u,point:b1.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var d1=new x,y1=new x,Ra=class extends Si{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let o=0,r=e.count;o<r;o+=2)d1.fromBufferAttribute(e,o),y1.fromBufferAttribute(e,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+d1.distanceTo(y1);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Si{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ur=class extends Ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},m1=new Dt,C2=new Qo,hs=new ln,bs=new x,va=class extends we{constructor(t=new ae,e=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,o=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(o),hs.radius+=r,t.ray.intersectsSphere(hs)===!1)return;m1.copy(o).invert(),C2.copy(t.ray).applyMatrix4(m1);let p=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=p*p,u=n.index,l=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),c=Math.min(u.count,a.start+a.count);for(let d=h,T=c;d<T;d++){let y=u.getX(d);bs.fromBufferAttribute(l,y),g1(bs,y,s,o,t,e,this)}}else{let h=Math.max(0,a.start),c=Math.min(l.count,a.start+a.count);for(let d=h,T=c;d<T;d++)bs.fromBufferAttribute(l,d),g1(bs,d,s,o,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let o=e[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){let p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}};function g1(i,t,e,n,o,r,a){let p=C2.distanceSqToPoint(i);if(p<e){let s=new x;C2.closestPointToPoint(i,s),s.applyMatrix4(n);let u=o.ray.origin.distanceTo(s);if(u<o.near||u>o.far)return;r.push({distance:u,distanceToRay:Math.sqrt(p),point:s,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Uo=class extends He{constructor(t,e,n,o,r,a,p,s,u){super(t,e,n,o,r,a,p,s,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},wi=class extends He{constructor(t,e,n=Go,o,r,a,p=_e,s=_e,u,f=dr,l=1){if(f!==dr&&f!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:l};super(h,o,r,a,p,s,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ma=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Pi=class i extends ae{constructor(t=1,e=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:o},e=Math.max(3,e);let r=[],a=[],p=[],s=[],u=new x,f=new nt;a.push(0,0,0),p.push(0,0,1),s.push(.5,.5);for(let l=0,h=3;l<=e;l++,h+=3){let c=n+l/e*o;u.x=t*Math.cos(c),u.y=t*Math.sin(c),a.push(u.x,u.y,u.z),p.push(0,0,1),f.x=(a[h]/t+1)/2,f.y=(a[h+1]/t+1)/2,s.push(f.x,f.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},In=class i extends ae{constructor(t=1,e=1,n=1,o=32,r=1,a=!1,p=0,s=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:o,heightSegments:r,openEnded:a,thetaStart:p,thetaLength:s};let u=this;o=Math.floor(o),r=Math.floor(r);let f=[],l=[],h=[],c=[],d=0,T=[],y=n/2,b=0;E(),a===!1&&(t>0&&m(!0),e>0&&m(!1)),this.setIndex(f),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(c,2));function E(){let g=new x,L=new x,U=0,R=(e-t)/n;for(let v=0;v<=r;v++){let V=[],S=v/r,D=S*(e-t)+t;for(let A=0;A<=o;A++){let _=A/o,$=_*s+p,F=Math.sin($),J=Math.cos($);L.x=D*F,L.y=-S*n+y,L.z=D*J,l.push(L.x,L.y,L.z),g.set(F,R,J).normalize(),h.push(g.x,g.y,g.z),c.push(_,1-S),V.push(d++)}T.push(V)}for(let v=0;v<o;v++)for(let V=0;V<r;V++){let S=T[V][v],D=T[V+1][v],A=T[V+1][v+1],_=T[V][v+1];(t>0||V!==0)&&(f.push(S,D,_),U+=3),(e>0||V!==r-1)&&(f.push(D,A,_),U+=3)}u.addGroup(b,U,0),b+=U}function m(g){let L=d,U=new nt,R=new x,v=0,V=g===!0?t:e,S=g===!0?1:-1;for(let A=1;A<=o;A++)l.push(0,y*S,0),h.push(0,S,0),c.push(.5,.5),d++;let D=d;for(let A=0;A<=o;A++){let $=A/o*s+p,F=Math.cos($),J=Math.sin($);R.x=V*J,R.y=y*S,R.z=V*F,l.push(R.x,R.y,R.z),h.push(0,S,0),U.x=F*.5+.5,U.y=J*.5*S+.5,c.push(U.x,U.y),d++}for(let A=0;A<o;A++){let _=L+A,$=D+A;g===!0?f.push($,$+1,_):f.push($+1,$,_),v+=3}u.addGroup(b,v,g===!0?1:2),b+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class i extends In{constructor(t=1,e=1,n=32,o=1,r=!1,a=0,p=Math.PI*2){super(0,t,e,n,o,r,a,p),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:p}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rs=class i extends ae{constructor(t=[],e=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:o};let r=[],a=[];p(o),u(n),f(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function p(E){let m=new x,g=new x,L=new x;for(let U=0;U<e.length;U+=3)c(e[U+0],m),c(e[U+1],g),c(e[U+2],L),s(m,g,L,E)}function s(E,m,g,L){let U=L+1,R=[];for(let v=0;v<=U;v++){R[v]=[];let V=E.clone().lerp(g,v/U),S=m.clone().lerp(g,v/U),D=U-v;for(let A=0;A<=D;A++)A===0&&v===U?R[v][A]=V:R[v][A]=V.clone().lerp(S,A/D)}for(let v=0;v<U;v++)for(let V=0;V<2*(U-v)-1;V++){let S=Math.floor(V/2);V%2===0?(h(R[v][S+1]),h(R[v+1][S]),h(R[v][S])):(h(R[v][S+1]),h(R[v+1][S+1]),h(R[v+1][S]))}}function u(E){let m=new x;for(let g=0;g<r.length;g+=3)m.x=r[g+0],m.y=r[g+1],m.z=r[g+2],m.normalize().multiplyScalar(E),r[g+0]=m.x,r[g+1]=m.y,r[g+2]=m.z}function f(){let E=new x;for(let m=0;m<r.length;m+=3){E.x=r[m+0],E.y=r[m+1],E.z=r[m+2];let g=y(E)/2/Math.PI+.5,L=b(E)/Math.PI+.5;a.push(g,1-L)}d(),l()}function l(){for(let E=0;E<a.length;E+=6){let m=a[E+0],g=a[E+2],L=a[E+4],U=Math.max(m,g,L),R=Math.min(m,g,L);U>.9&&R<.1&&(m<.2&&(a[E+0]+=1),g<.2&&(a[E+2]+=1),L<.2&&(a[E+4]+=1))}}function h(E){r.push(E.x,E.y,E.z)}function c(E,m){let g=E*3;m.x=t[g+0],m.y=t[g+1],m.z=t[g+2]}function d(){let E=new x,m=new x,g=new x,L=new x,U=new nt,R=new nt,v=new nt;for(let V=0,S=0;V<r.length;V+=9,S+=6){E.set(r[V+0],r[V+1],r[V+2]),m.set(r[V+3],r[V+4],r[V+5]),g.set(r[V+6],r[V+7],r[V+8]),U.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),v.set(a[S+4],a[S+5]),L.copy(E).add(m).add(g).divideScalar(3);let D=y(L);T(U,S+0,E,D),T(R,S+2,m,D),T(v,S+4,g,D)}}function T(E,m,g,L){L<0&&E.x===1&&(a[m]=E.x-1),g.x===0&&g.z===0&&(a[m]=L/2/Math.PI+.5)}function y(E){return Math.atan2(E.z,-E.x)}function b(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,o=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(o),e.push(r),o=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),o=0,r=n.length,a;e?a=e:a=t*n[r-1];let p=0,s=r-1,u;for(;p<=s;)if(o=Math.floor(p+(s-p)/2),u=n[o]-a,u<0)p=o+1;else if(u>0)s=o-1;else{s=o;break}if(o=s,n[o]===a)return o/(r-1);let f=n[o],h=n[o+1]-f,c=(a-f)/h;return(o+c)/(r-1)}getTangent(t,e){let o=t-1e-4,r=t+1e-4;o<0&&(o=0),r>1&&(r=1);let a=this.getPoint(o),p=this.getPoint(r),s=e||(a.isVector2?new nt:new x);return s.copy(p).sub(a).normalize(),s}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new x,o=[],r=[],a=[],p=new x,s=new Dt;for(let c=0;c<=t;c++){let d=c/t;o[c]=this.getTangentAt(d,new x)}r[0]=new x,a[0]=new x;let u=Number.MAX_VALUE,f=Math.abs(o[0].x),l=Math.abs(o[0].y),h=Math.abs(o[0].z);f<=u&&(u=f,n.set(1,0,0)),l<=u&&(u=l,n.set(0,1,0)),h<=u&&n.set(0,0,1),p.crossVectors(o[0],n).normalize(),r[0].crossVectors(o[0],p),a[0].crossVectors(o[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),a[c]=a[c-1].clone(),p.crossVectors(o[c-1],o[c]),p.length()>Number.EPSILON){p.normalize();let d=Math.acos(Zt(o[c-1].dot(o[c]),-1,1));r[c].applyMatrix4(s.makeRotationAxis(p,d))}a[c].crossVectors(o[c],r[c])}if(e===!0){let c=Math.acos(Zt(r[0].dot(r[t]),-1,1));c/=t,o[0].dot(p.crossVectors(r[0],r[t]))>0&&(c=-c);for(let d=1;d<=t;d++)r[d].applyMatrix4(s.makeRotationAxis(o[d],c*d)),a[d].crossVectors(o[d],r[d])}return{tangents:o,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends Pn{constructor(t=0,e=0,n=1,o=1,r=0,a=Math.PI*2,p=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=o,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=p,this.aRotation=s}getPoint(t,e=new nt){let n=e,o=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=o;for(;r>o;)r-=o;r<Number.EPSILON&&(a?r=0:r=o),this.aClockwise===!0&&!a&&(r===o?r=-o:r=r-o);let p=this.aStartAngle+t*r,s=this.aX+this.xRadius*Math.cos(p),u=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){let f=Math.cos(this.aRotation),l=Math.sin(this.aRotation),h=s-this.aX,c=u-this.aY;s=h*f-c*l+this.aX,u=h*l+c*f+this.aY}return n.set(s,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ds=class extends xr{constructor(t,e,n,o,r,a){super(t,e,n,n,o,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function el(){let i=0,t=0,e=0,n=0;function o(r,a,p,s){i=r,t=p,e=-3*r+3*a-2*p-s,n=2*r-2*a+p+s}return{initCatmullRom:function(r,a,p,s,u){o(a,p,u*(p-r),u*(s-a))},initNonuniformCatmullRom:function(r,a,p,s,u,f,l){let h=(a-r)/u-(p-r)/(u+f)+(p-a)/f,c=(p-a)/f-(s-a)/(f+l)+(s-p)/l;h*=f,c*=f,o(a,p,h,c)},calc:function(r){let a=r*r,p=a*r;return i+t*r+e*a+n*p}}}var ds=new x,T2=new el,E2=new el,V2=new el,vs=class extends Pn{constructor(t=[],e=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=o}getPoint(t,e=new x){let n=e,o=this.points,r=o.length,a=(r-(this.closed?0:1))*t,p=Math.floor(a),s=a-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/r)+1)*r:s===0&&p===r-1&&(p=r-2,s=1);let u,f;this.closed||p>0?u=o[(p-1)%r]:(ds.subVectors(o[0],o[1]).add(o[0]),u=ds);let l=o[p%r],h=o[(p+1)%r];if(this.closed||p+2<r?f=o[(p+2)%r]:(ds.subVectors(o[r-1],o[r-2]).add(o[r-1]),f=ds),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,d=Math.pow(u.distanceToSquared(l),c),T=Math.pow(l.distanceToSquared(h),c),y=Math.pow(h.distanceToSquared(f),c);T<1e-4&&(T=1),d<1e-4&&(d=T),y<1e-4&&(y=T),T2.initNonuniformCatmullRom(u.x,l.x,h.x,f.x,d,T,y),E2.initNonuniformCatmullRom(u.y,l.y,h.y,f.y,d,T,y),V2.initNonuniformCatmullRom(u.z,l.z,h.z,f.z,d,T,y)}else this.curveType==="catmullrom"&&(T2.initCatmullRom(u.x,l.x,h.x,f.x,this.tension),E2.initCatmullRom(u.y,l.y,h.y,f.y,this.tension),V2.initCatmullRom(u.z,l.z,h.z,f.z,this.tension));return n.set(T2.calc(s),E2.calc(s),V2.calc(s)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(new x().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function T1(i,t,e,n,o){let r=(n-t)*.5,a=(o-e)*.5,p=i*i,s=i*p;return(2*e-2*n+r+a)*s+(-3*e+3*n-2*r-a)*p+r*i+e}function d3(i,t){let e=1-i;return e*e*t}function y3(i,t){return 2*(1-i)*i*t}function m3(i,t){return i*i*t}function ya(i,t,e,n){return d3(i,t)+y3(i,e)+m3(i,n)}function g3(i,t){let e=1-i;return e*e*e*t}function T3(i,t){let e=1-i;return 3*e*e*i*t}function E3(i,t){return 3*(1-i)*i*i*t}function V3(i,t){return i*i*i*t}function ma(i,t,e,n,o){return g3(i,t)+T3(i,e)+E3(i,n)+V3(i,o)}var Aa=class extends Pn{constructor(t=new nt,e=new nt,n=new nt,o=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new nt){let n=e,o=this.v0,r=this.v1,a=this.v2,p=this.v3;return n.set(ma(t,o.x,r.x,a.x,p.x),ma(t,o.y,r.y,a.y,p.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ms=class extends Pn{constructor(t=new x,e=new x,n=new x,o=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=o}getPoint(t,e=new x){let n=e,o=this.v0,r=this.v1,a=this.v2,p=this.v3;return n.set(ma(t,o.x,r.x,a.x,p.x),ma(t,o.y,r.y,a.y,p.y),ma(t,o.z,r.z,a.z,p.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ia=class extends Pn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},As=class extends Pn{constructor(t=new x,e=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new x){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new x){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Pn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,o=this.v0,r=this.v1,a=this.v2;return n.set(ya(t,o.x,r.x,a.x),ya(t,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Is=class extends Pn{constructor(t=new x,e=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new x){let n=e,o=this.v0,r=this.v1,a=this.v2;return n.set(ya(t,o.x,r.x,a.x),ya(t,o.y,r.y,a.y),ya(t,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,o=this.points,r=(o.length-1)*t,a=Math.floor(r),p=r-a,s=o[a===0?a:a-1],u=o[a],f=o[a>o.length-2?o.length-1:a+1],l=o[a>o.length-3?o.length-1:a+2];return n.set(T1(p,s.x,u.x,f.x,l.x),T1(p,s.y,u.y,f.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(o.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let o=t.points[e];this.points.push(new nt().fromArray(o))}return this}},E1=Object.freeze({__proto__:null,ArcCurve:Ds,CatmullRomCurve3:vs,CubicBezierCurve:Aa,CubicBezierCurve3:Ms,EllipseCurve:xr,LineCurve:Ia,LineCurve3:As,QuadraticBezierCurve:_a,QuadraticBezierCurve3:Is,SplineCurve:Or}),_s=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new E1[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),o=this.getCurveLengths(),r=0;for(;r<o.length;){if(o[r]>=n){let a=o[r]-n,p=this.curves[r],s=p.getLength(),u=s===0?0:1-a/s;return p.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,o=this.curves.length;n<o;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let o=0,r=this.curves;o<r.length;o++){let a=r[o],p=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,s=a.getPoints(p);for(let u=0;u<s.length;u++){let f=s[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let o=t.curves[e];this.curves.push(new E1[o.type]().fromJSON(o))}return this}},Li=class extends _s{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ia(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,o){let r=new _a(this.currentPoint.clone(),new nt(t,e),new nt(n,o));return this.curves.push(r),this.currentPoint.set(n,o),this}bezierCurveTo(t,e,n,o,r,a){let p=new Aa(this.currentPoint.clone(),new nt(t,e),new nt(n,o),new nt(r,a));return this.curves.push(p),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Or(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,o,r,a){let p=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(t+p,e+s,n,o,r,a),this}absarc(t,e,n,o,r,a){return this.absellipse(t,e,n,n,o,r,a),this}ellipse(t,e,n,o,r,a,p,s){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,o,r,a,p,s),this}absellipse(t,e,n,o,r,a,p,s){let u=new xr(t,e,n,o,r,a,p,s);if(this.curves.length>0){let l=u.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zo=class extends Li{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,o=this.holes.length;n<o;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let o=t.holes[e];this.holes.push(new Li().fromJSON(o))}return this}};function S3(i,t,e=2){let n=t&&t.length,o=n?t[0]*e:i.length,r=ch(i,0,o,e,!0),a=[];if(!r||r.next===r.prev)return a;let p,s,u;if(n&&(r=C3(i,t,r,e)),i.length>80*e){p=1/0,s=1/0;let f=-1/0,l=-1/0;for(let h=e;h<o;h+=e){let c=i[h],d=i[h+1];c<p&&(p=c),d<s&&(s=d),c>f&&(f=c),d>l&&(l=d)}u=Math.max(f-p,l-s),u=u!==0?32767/u:0}return $a(r,a,e,p,s,u,0),a}function ch(i,t,e,n,o){let r;if(o===H3(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=V1(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=V1(a/n|0,i[a],i[a+1],r);return r&&Rr(r,r.next)&&(ka(r),r=r.next),r}function Ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ka(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $a(i,t,e,n,o,r,a){if(!i)return;!a&&r&&v3(i,n,o,r);let p=i;for(;i.prev!==i.next;){let s=i.prev,u=i.next;if(r?P3(i,n,o,r):w3(i)){t.push(s.i,i.i,u.i),ka(i),i=u.next,p=u.next;continue}if(i=u,i===p){a?a===1?(i=L3(Ui(i),t),$a(i,t,e,n,o,r,2)):a===2&&U3(i,t,e,n,o,r):$a(Ui(i),t,e,n,o,r,1);break}}}function w3(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let o=t.x,r=e.x,a=n.x,p=t.y,s=e.y,u=n.y,f=Math.min(o,r,a),l=Math.min(p,s,u),h=Math.max(o,r,a),c=Math.max(p,s,u),d=n.next;for(;d!==t;){if(d.x>=f&&d.x<=h&&d.y>=l&&d.y<=c&&ha(o,p,r,s,a,u,d.x,d.y)&&Ue(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function P3(i,t,e,n){let o=i.prev,r=i,a=i.next;if(Ue(o,r,a)>=0)return!1;let p=o.x,s=r.x,u=a.x,f=o.y,l=r.y,h=a.y,c=Math.min(p,s,u),d=Math.min(f,l,h),T=Math.max(p,s,u),y=Math.max(f,l,h),b=x2(c,d,t,e,n),E=x2(T,y,t,e,n),m=i.prevZ,g=i.nextZ;for(;m&&m.z>=b&&g&&g.z<=E;){if(m.x>=c&&m.x<=T&&m.y>=d&&m.y<=y&&m!==o&&m!==a&&ha(p,f,s,l,u,h,m.x,m.y)&&Ue(m.prev,m,m.next)>=0||(m=m.prevZ,g.x>=c&&g.x<=T&&g.y>=d&&g.y<=y&&g!==o&&g!==a&&ha(p,f,s,l,u,h,g.x,g.y)&&Ue(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;m&&m.z>=b;){if(m.x>=c&&m.x<=T&&m.y>=d&&m.y<=y&&m!==o&&m!==a&&ha(p,f,s,l,u,h,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=E;){if(g.x>=c&&g.x<=T&&g.y>=d&&g.y<=y&&g!==o&&g!==a&&ha(p,f,s,l,u,h,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function L3(i,t){let e=i;do{let n=e.prev,o=e.next.next;!Rr(n,o)&&bh(n,e,e.next,o)&&Ha(n,o)&&Ha(o,n)&&(t.push(n.i,e.i,o.i),ka(e),ka(e.next),e=i=o),e=e.next}while(e!==i);return Ui(e)}function U3(i,t,e,n,o,r){let a=i;do{let p=a.next.next;for(;p!==a.prev;){if(a.i!==p.i&&I3(a,p)){let s=dh(a,p);a=Ui(a,a.next),s=Ui(s,s.next),$a(a,t,e,n,o,r,0),$a(s,t,e,n,o,r,0);return}p=p.next}a=a.next}while(a!==i)}function C3(i,t,e,n){let o=[];for(let r=0,a=t.length;r<a;r++){let p=t[r]*n,s=r<a-1?t[r+1]*n:i.length,u=ch(i,p,s,n,!1);u===u.next&&(u.steiner=!0),o.push(A3(u))}o.sort(x3);for(let r=0;r<o.length;r++)e=O3(o[r],e);return e}function x3(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),o=(t.next.y-t.y)/(t.next.x-t.x);e=n-o}return e}function O3(i,t){let e=R3(i,t);if(!e)return t;let n=dh(e,i);return Ui(n,n.next),Ui(e,e.next)}function R3(i,t){let e=t,n=i.x,o=i.y,r=-1/0,a;if(Rr(i,e))return e;do{if(Rr(i,e.next))return e.next;if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let l=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,a=e.x<e.next.x?e:e.next,l===n))return a}e=e.next}while(e!==t);if(!a)return null;let p=a,s=a.x,u=a.y,f=1/0;e=a;do{if(n>=e.x&&e.x>=s&&n!==e.x&&hh(o<u?n:r,o,s,u,o<u?r:n,o,e.x,e.y)){let l=Math.abs(o-e.y)/(n-e.x);Ha(e,i)&&(l<f||l===f&&(e.x>a.x||e.x===a.x&&D3(a,e)))&&(a=e,f=l)}e=e.next}while(e!==p);return a}function D3(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function v3(i,t,e,n){let o=i;do o.z===0&&(o.z=x2(o.x,o.y,t,e,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,M3(o)}function M3(i){let t,e=1;do{let n=i,o;i=null;let r=null;for(t=0;n;){t++;let a=n,p=0;for(let u=0;u<e&&(p++,a=a.nextZ,!!a);u++);let s=e;for(;p>0||s>0&&a;)p!==0&&(s===0||!a||n.z<=a.z)?(o=n,n=n.nextZ,p--):(o=a,a=a.nextZ,s--),r?r.nextZ=o:i=o,o.prevZ=r,r=o;n=a}r.nextZ=null,e*=2}while(t>1);return i}function x2(i,t,e,n,o){return i=(i-e)*o|0,t=(t-n)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function A3(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hh(i,t,e,n,o,r,a,p){return(o-a)*(t-p)>=(i-a)*(r-p)&&(i-a)*(n-p)>=(e-a)*(t-p)&&(e-a)*(r-p)>=(o-a)*(n-p)}function ha(i,t,e,n,o,r,a,p){return!(i===a&&t===p)&&hh(i,t,e,n,o,r,a,p)}function I3(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_3(i,t)&&(Ha(i,t)&&Ha(t,i)&&$3(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Rr(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rr(i,t){return i.x===t.x&&i.y===t.y}function bh(i,t,e,n){let o=ms(Ue(i,t,e)),r=ms(Ue(i,t,n)),a=ms(Ue(e,n,i)),p=ms(Ue(e,n,t));return!!(o!==r&&a!==p||o===0&&ys(i,e,t)||r===0&&ys(i,n,t)||a===0&&ys(e,i,n)||p===0&&ys(e,t,n))}function ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ms(i){return i>0?1:i<0?-1:0}function _3(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ha(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function $3(i,t){let e=i,n=!1,o=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&o<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function dh(i,t){let e=O2(i.i,i.x,i.y),n=O2(t.i,t.x,t.y),o=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=o,o.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function V1(i,t,e,n){let o=O2(i,t,e);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function ka(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function O2(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function H3(i,t,e,n){let o=0;for(let r=t,a=e-n;r<e;r+=n)o+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return o}var R2=class{static triangulate(t,e,n=2){return S3(t,e,n)}},hr=class i{static area(t){let e=t.length,n=0;for(let o=e-1,r=0;r<e;o=r++)n+=t[o].x*t[r].y-t[r].x*t[o].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],o=[],r=[];S1(t),w1(n,t);let a=t.length;e.forEach(S1);for(let s=0;s<e.length;s++)o.push(a),a+=e[s].length,w1(n,e[s]);let p=R2.triangulate(n,o);for(let s=0;s<p.length;s+=3)r.push(p.slice(s,s+3));return r}};function S1(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function w1(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ba=class i extends Rs{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},cn=class i extends ae{constructor(t=1,e=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:o};let r=t/2,a=e/2,p=Math.floor(n),s=Math.floor(o),u=p+1,f=s+1,l=t/p,h=e/s,c=[],d=[],T=[],y=[];for(let b=0;b<f;b++){let E=b*h-a;for(let m=0;m<u;m++){let g=m*l-r;d.push(g,-E,0),T.push(0,0,1),y.push(m/p),y.push(1-b/s)}}for(let b=0;b<s;b++)for(let E=0;E<p;E++){let m=E+u*b,g=E+u*(b+1),L=E+1+u*(b+1),U=E+1+u*b;c.push(m,g,U),c.push(g,L,U)}this.setIndex(c),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yo=class i extends ae{constructor(t=.5,e=1,n=32,o=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:o,thetaStart:r,thetaLength:a},n=Math.max(3,n),o=Math.max(1,o);let p=[],s=[],u=[],f=[],l=t,h=(e-t)/o,c=new x,d=new nt;for(let T=0;T<=o;T++){for(let y=0;y<=n;y++){let b=r+y/n*a;c.x=l*Math.cos(b),c.y=l*Math.sin(b),s.push(c.x,c.y,c.z),u.push(0,0,1),d.x=(c.x/e+1)/2,d.y=(c.y/e+1)/2,f.push(d.x,d.y)}l+=h}for(let T=0;T<o;T++){let y=T*(n+1);for(let b=0;b<n;b++){let E=b+y,m=E,g=E+n+1,L=E+n+2,U=E+1;p.push(m,g,U),p.push(g,L,U)}}this.setIndex(p),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Dr=class i extends ae{constructor(t=new Zo([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],o=[],r=[],a=[],p=0,s=0;if(Array.isArray(t)===!1)u(t);else for(let f=0;f<t.length;f++)u(t[f]),this.addGroup(p,s,f),p+=s,s=0;this.setIndex(n),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(a,2));function u(f){let l=o.length/3,h=f.extractPoints(e),c=h.shape,d=h.holes;hr.isClockWise(c)===!1&&(c=c.reverse());for(let y=0,b=d.length;y<b;y++){let E=d[y];hr.isClockWise(E)===!0&&(d[y]=E.reverse())}let T=hr.triangulateShape(c,d);for(let y=0,b=d.length;y<b;y++){let E=d[y];c=c.concat(E)}for(let y=0,b=c.length;y<b;y++){let E=c[y];o.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let y=0,b=T.length;y<b;y++){let E=T[y],m=E[0]+l,g=E[1]+l,L=E[2]+l;n.push(m,g,L),s+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return k3(e,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}return new i(n,t.curveSegments)}};function k3(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let o=i[e];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t}var Ci=class i extends ae{constructor(t=1,e=32,n=16,o=0,r=Math.PI*2,a=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:o,phiLength:r,thetaStart:a,thetaLength:p},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let s=Math.min(a+p,Math.PI),u=0,f=[],l=new x,h=new x,c=[],d=[],T=[],y=[];for(let b=0;b<=n;b++){let E=[],m=b/n,g=0;b===0&&a===0?g=.5/e:b===n&&s===Math.PI&&(g=-.5/e);for(let L=0;L<=e;L++){let U=L/e;l.x=-t*Math.cos(o+U*r)*Math.sin(a+m*p),l.y=t*Math.cos(a+m*p),l.z=t*Math.sin(o+U*r)*Math.sin(a+m*p),d.push(l.x,l.y,l.z),h.copy(l).normalize(),T.push(h.x,h.y,h.z),y.push(U+g,1-m),E.push(u++)}f.push(E)}for(let b=0;b<n;b++)for(let E=0;E<e;E++){let m=f[b][E+1],g=f[b][E],L=f[b+1][E],U=f[b+1][E+1];(b!==0||a>0)&&c.push(m,g,U),(b!==n-1||s<Math.PI)&&c.push(g,L,U)}this.setIndex(c),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vr=class extends Ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new mt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Fa=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Je=class extends Ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hn=class extends Je{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Na=class extends Ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var $s=class extends Ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hs=class extends Ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function B3(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function F3(i){function t(o,r){return i[o]-i[r]}let e=i.length,n=new Array(e);for(let o=0;o!==e;++o)n[o]=o;return n.sort(t),n}function P1(i,t,e){let n=i.length,o=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let p=e[r]*t;for(let s=0;s!==t;++s)o[a++]=i[p+s]}return o}function yh(i,t,e,n){let o=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[o++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[o++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[o++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[o++];while(r!==void 0)}var Co=class{constructor(t,e,n,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,o=e[n],r=e[n-1];t:{e:{let a;n:{o:if(!(t<o)){for(let p=n+2;;){if(o===void 0){if(t<r)break o;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===p)break;if(r=o,o=e[++n],t<o)break e}a=e.length;break n}if(!(t>=r)){let p=e[1];t<p&&(n=2,r=p);for(let s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(o=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let p=n+a>>>1;t<e[p]?a=p:n=p+1}if(o=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,o)}return this.interpolate_(n,r,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o;for(let a=0;a!==o;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ks=class extends Co{constructor(t,e,n,o){super(t,e,n,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bi,endingEnd:bi}}intervalChanged_(t,e,n){let o=this.parameterPositions,r=t-2,a=t+1,p=o[r],s=o[a];if(p===void 0)switch(this.getSettings_().endingStart){case di:r=t,p=2*e-n;break;case ga:r=o.length-2,p=e+o[r]-o[r+1];break;default:r=t,p=n}if(s===void 0)switch(this.getSettings_().endingEnd){case di:a=t,s=2*n-e;break;case ga:a=1,s=n+o[1]-o[0];break;default:a=t-1,s=e}let u=(n-e)*.5,f=this.valueSize;this._weightPrev=u/(e-p),this._weightNext=u/(s-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,c=this._weightNext,d=(n-e)/(o-e),T=d*d,y=T*d,b=-h*y+2*h*T-h*d,E=(1+h)*y+(-1.5-2*h)*T+(-.5+h)*d+1,m=(-1-c)*y+(1.5+c)*T+.5*d,g=c*y-c*T;for(let L=0;L!==p;++L)r[L]=b*a[f+L]+E*a[u+L]+m*a[s+L]+g*a[l+L];return r}},Xa=class extends Co{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=t*p,u=s-p,f=(n-e)/(o-e),l=1-f;for(let h=0;h!==p;++h)r[h]=a[u+h]*l+a[s+h]*f;return r}},Bs=class extends Co{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(n.interpolation=o)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bs(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ks(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gi:e=this.InterpolantFactoryMethodDiscrete;break;case Ti:e=this.InterpolantFactoryMethodLinear;break;case Ts:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gi;case this.InterpolantFactoryMethodLinear:return Ti;case this.InterpolantFactoryMethodSmooth:return Ts}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,o=e.length;n!==o;++n)e[n]*=t}return this}trim(t,e){let n=this.times,o=n.length,r=0,a=o-1;for(;r!==o&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==o){r>=a&&(a=Math.max(a,1),r=a-1);let p=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*p,a*p)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,o=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let p=0;p!==r;p++){let s=n[p];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,p,s),t=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,p,s,a),t=!1;break}a=s}if(o!==void 0&&B3(o))for(let p=0,s=o.length;p!==s;++p){let u=o[p];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,p,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),o=this.getInterpolation()===Ts,r=t.length-1,a=1;for(let p=1;p<r;++p){let s=!1,u=t[p],f=t[p+1];if(u!==f&&(p!==1||u!==t[0]))if(o)s=!0;else{let l=p*n,h=l-n,c=l+n;for(let d=0;d!==n;++d){let T=e[l+d];if(T!==e[h+d]||T!==e[c+d]){s=!0;break}}}if(s){if(p!==a){t[a]=t[p];let l=p*n,h=a*n;for(let c=0;c!==n;++c)e[h+c]=e[l+c]}++a}}if(r>0){t[a]=t[r];for(let p=r*n,s=a*n,u=0;u!==n;++u)e[s+u]=e[p+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,o=new n(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}};bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ti;var xo=class extends bn{constructor(t,e,n){super(t,e,n)}};xo.prototype.ValueTypeName="bool";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=gi;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends bn{constructor(t,e,n,o){super(t,e,n,o)}};Ja.prototype.ValueTypeName="color";var no=class extends bn{constructor(t,e,n,o){super(t,e,n,o)}};no.prototype.ValueTypeName="number";var Fs=class extends Co{constructor(t,e,n,o){super(t,e,n,o)}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=(n-e)/(o-e),u=t*p;for(let f=u+p;u!==f;u+=4)Ie.slerpFlat(r,0,a,u-p,a,u,s);return r}},oo=class extends bn{constructor(t,e,n,o){super(t,e,n,o)}InterpolantFactoryMethodLinear(t){return new Fs(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends bn{constructor(t,e,n){super(t,e,n)}};Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=gi;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends bn{constructor(t,e,n,o){super(t,e,n,o)}};io.prototype.ValueTypeName="vector";var xi=class{constructor(t="",e=-1,n=[],o=Qu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=o,this.uuid=An(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,o=1/(t.fps||1);for(let a=0,p=n.length;a!==p;++a)e.push(X3(n[a]).scale(o));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,o={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(bn.toJSON(n[r]));return o}static CreateFromMorphTargetSequence(t,e,n,o){let r=e.length,a=[];for(let p=0;p<r;p++){let s=[],u=[];s.push((p+r-1)%r,p,(p+1)%r),u.push(0,1,0);let f=F3(s);s=P1(s,1,f),u=P1(u,1,f),!o&&s[0]===0&&(s.push(r),u.push(u[0])),a.push(new no(".morphTargetInfluences["+e[p].name+"]",s,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let o=t;n=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<n.length;o++)if(n[o].name===e)return n[o];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let o={},r=/^([\w-]*?)([\d]+)$/;for(let p=0,s=t.length;p<s;p++){let u=t[p],f=u.name.match(r);if(f&&f.length>1){let l=f[1],h=o[l];h||(o[l]=h=[]),h.push(u)}}let a=[];for(let p in o)a.push(this.CreateFromMorphTargetSequence(p,o[p],e,n));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(l,h,c,d,T){if(c.length!==0){let y=[],b=[];yh(c,y,b,d),y.length!==0&&T.push(new l(h,y,b))}},o=[],r=t.name||"default",a=t.fps||30,p=t.blendMode,s=t.length||-1,u=t.hierarchy||[];for(let l=0;l<u.length;l++){let h=u[l].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let c={},d;for(d=0;d<h.length;d++)if(h[d].morphTargets)for(let T=0;T<h[d].morphTargets.length;T++)c[h[d].morphTargets[T]]=-1;for(let T in c){let y=[],b=[];for(let E=0;E!==h[d].morphTargets.length;++E){let m=h[d];y.push(m.time),b.push(m.morphTarget===T?1:0)}o.push(new no(".morphTargetInfluence["+T+"]",y,b))}s=c.length*a}else{let c=".bones["+e[l].name+"]";n(io,c+".position",h,"pos",o),n(oo,c+".quaternion",h,"rot",o),n(io,c+".scale",h,"scl",o)}}return o.length===0?null:new this(r,s,o,p)}resetDuration(){let t=this.tracks,e=0;for(let n=0,o=t.length;n!==o;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function N3(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return no;case"vector":case"vector2":case"vector3":case"vector4":return io;case"color":return Ja;case"quaternion":return oo;case"bool":case"boolean":return xo;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function X3(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=N3(i.type);if(i.times===void 0){let e=[],n=[];yh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var to={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ns=class{constructor(t,e,n){let o=this,r=!1,a=0,p=0,s,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){p++,r===!1&&o.onStart!==void 0&&o.onStart(f,a,p),r=!0},this.itemEnd=function(f){a++,o.onProgress!==void 0&&o.onProgress(f,a,p),a===p&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return s?s(f):f},this.setURLModifier=function(f){return s=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){let l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,h=u.length;l<h;l+=2){let c=u[l],d=u[l+1];if(c.global&&(c.lastIndex=0),c.test(f))return d}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mh=new Ns,ro=class{constructor(t){this.manager=t!==void 0?t:mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(o,r){n.load(t,o,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var wo={},D2=class extends Error{constructor(t,e){super(t),this.response=e}},Mr=class extends ro{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=to.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(wo[t]!==void 0){wo[t].push({onLoad:e,onProgress:n,onError:o});return}wo[t]=[],wo[t].push({onLoad:e,onProgress:n,onError:o});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,s=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let f=wo[t],l=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),c=h?parseInt(h):0,d=c!==0,T=0,y=new ReadableStream({start(b){E();function E(){l.read().then(({done:m,value:g})=>{if(m)b.close();else{T+=g.byteLength;let L=new ProgressEvent("progress",{lengthComputable:d,loaded:T,total:c});for(let U=0,R=f.length;U<R;U++){let v=f[U];v.onProgress&&v.onProgress(L)}b.enqueue(g),E()}},m=>{b.error(m)})}}});return new Response(y)}else throw new D2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(s){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,p));case"json":return u.json();default:if(p==="")return u.text();{let l=/charset="?([^;"\s]*)"?/i.exec(p),h=l&&l[1]?l[1].toLowerCase():void 0,c=new TextDecoder(h);return u.arrayBuffer().then(d=>c.decode(d))}}}).then(u=>{to.add(`file:${t}`,u);let f=wo[t];delete wo[t];for(let l=0,h=f.length;l<h;l++){let c=f[l];c.onLoad&&c.onLoad(u)}}).catch(u=>{let f=wo[t];if(f===void 0)throw this.manager.itemError(t),u;delete wo[t];for(let l=0,h=f.length;l<h;l++){let c=f[l];c.onError&&c.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var lr=new WeakMap,Xs=class extends ro{constructor(t){super(t)}load(t,e,n,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=to.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let l=lr.get(a);l===void 0&&(l=[],lr.set(a,l)),l.push({onLoad:e,onError:o})}return a}let p=yr("img");function s(){f(),e&&e(this);let l=lr.get(this)||[];for(let h=0;h<l.length;h++){let c=l[h];c.onLoad&&c.onLoad(this)}lr.delete(this),r.manager.itemEnd(t)}function u(l){f(),o&&o(l),to.remove(`image:${t}`);let h=lr.get(this)||[];for(let c=0;c<h.length;c++){let d=h[c];d.onError&&d.onError(l)}lr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){p.removeEventListener("load",s,!1),p.removeEventListener("error",u,!1)}return p.addEventListener("load",s,!1),p.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),to.add(`image:${t}`,p),r.manager.itemStart(t),p.src=t,p}};var ao=class extends ro{constructor(t){super(t)}load(t,e,n,o){let r=new He,a=new Xs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(p){r.image=p,r.needsUpdate=!0,e!==void 0&&e(r)},n,o),r}},Oi=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},za=class extends Oi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},S2=new Dt,L1=new x,U1=new x,Qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;L1.setFromMatrixPosition(t.matrixWorld),e.position.copy(L1),U1.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(U1),e.updateMatrixWorld(),S2.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S2,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(S2)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},v2=class extends Qa{constructor(){super(new Ae(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ei*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||o!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=o,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ja=class extends Oi{constructor(t,e,n=0,o=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=n,this.angle=o,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new v2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},C1=new Dt,ca=new x,w2=new x,M2=class extends Qa{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,o=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ca.setFromMatrixPosition(t.matrixWorld),n.position.copy(ca),w2.copy(n.position),w2.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(w2),n.updateMatrixWorld(),o.makeTranslation(-ca.x,-ca.y,-ca.z),C1.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(C1,n.coordinateSystem,n.reversedDepth)}},Za=class extends Oi{constructor(t,e,n=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new M2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ro=class extends Pa{constructor(t=-1,e=1,n=1,o=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=o,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,o,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2,r=n-t,a=n+t,p=o+e,s=o-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,p-=f*this.view.offsetY,s=p-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,p,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},A2=class extends Qa{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends Oi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new A2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Do=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var P2=new WeakMap,Ya=class extends ro{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=to.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{if(P2.has(a)===!0)o&&o(P2.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(u),r.manager.itemEnd(t),u});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}let p={};p.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",p.headers=this.requestHeader,p.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(t,p).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return to.add(`image-bitmap:${t}`,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){o&&o(u),P2.set(s,u),to.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});to.add(`image-bitmap:${t}`,s),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Js=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ga=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var zs=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let o,r,a;switch(e){case"quaternion":o=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":o=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:o=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=o,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,o=this.valueSize,r=t*o+o,a=this.cumulativeWeight;if(a===0){for(let p=0;p!==o;++p)n[r+p]=n[p];a=e}else{a+=e;let p=e/a;this._mixBufferRegion(n,r,0,p,o)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,o=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,o,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,o=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,p=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let s=e*this._origIndex;this._mixBufferRegion(n,o,s,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,o,this._addIndex*e,1,e);for(let s=e,u=e+e;s!==u;++s)if(n[s]!==n[s+e]){p.setValue(n,o);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,o=n*this._origIndex;t.getValue(e,o);for(let r=n,a=o;r!==a;++r)e[r]=e[o+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,o,r){if(o>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,o){Ie.slerpFlat(t,e,t,e,t,n,o)}_slerpAdditive(t,e,n,o,r){let a=this._workIndex*r;Ie.multiplyQuaternionsFlat(t,a,t,e,t,n),Ie.slerpFlat(t,e,t,e,t,a,o)}_lerp(t,e,n,o,r){let a=1-o;for(let p=0;p!==r;++p){let s=e+p;t[s]=t[s]*a+t[n+p]*o}}_lerpAdditive(t,e,n,o,r){for(let a=0;a!==r;++a){let p=e+a;t[p]=t[p]+t[n+a]*o}}},nl="\\[\\]\\.:\\/",J3=new RegExp("["+nl+"]","g"),ol="[^"+nl+"]",z3="[^"+nl.replace("\\.","")+"]",Q3=/((?:WC+[\/:])*)/.source.replace("WC",ol),j3=/(WCOD+)?/.source.replace("WCOD",z3),Z3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),Y3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),G3=new RegExp("^"+Q3+j3+Z3+Y3+"$"),W3=["material","materials","bones","map"],I2=class{constructor(t,e,n){let o=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,o=this._bindings[n];o!==void 0&&o.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let o=this._targetGroup.nCachedObjects_,r=n.length;o!==r;++o)n[o].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J3,"")}static parseTrackName(t){let e=G3.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=n.nodeName&&n.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let r=n.nodeName.substring(o+1);W3.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,o),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let p=r[a];if(p.name===e||p.uuid===e)return p;let s=n(p.children);if(s)return s}return null},o=n(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)t[e++]=n[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let o=0,r=n.length;o!==r;++o)n[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,o=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let p=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?p=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(p=this.Versioning.MatrixWorldNeedsUpdate);let s=this.BindingType.Direct;if(r!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}s=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(s=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(s=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[s],this.setValue=this.SetterByBindingTypeAndVersioning[s][p]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=I2;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qs=class{constructor(t,e,n=null,o=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=o;let r=e.tracks,a=r.length,p=new Array(a),s={endingStart:bi,endingEnd:bi};for(let u=0;u!==a;++u){let f=r[u].createInterpolant(null);p[u]=f,f.settings=s}this._interpolantSettings=s,this._interpolants=p,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=G1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let o=this._clip.duration,r=t._clip.duration,a=r/o,p=o/r;t.warp(1,a,e),this.warp(p,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let o=this._mixer,r=o.time,a=this.timeScale,p=this._timeScaleInterpolant;p===null&&(p=o._lendControlInterpolant(),this._timeScaleInterpolant=p);let s=p.parameterPositions,u=p.sampleValues;return s[0]=r,s[1]=r+n,u[0]=t/a,u[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,o){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let s=(t-r)*n;s<0||n===0?e=0:(this._startTime=null,e=n*s)}e*=this._updateTimeScale(t);let a=this._updateTime(e),p=this._updateWeight(t);if(p>0){let s=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case K1:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulateAdditive(p);break;case Qu:default:for(let f=0,l=s.length;f!==l;++f)s[f].evaluate(a),u[f].accumulate(o,p)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let o=n.evaluate(t)[0];e*=o,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,o=this.time+t,r=this._loopCount,a=n===W1;if(t===0)return r===-1?o:a&&(r&1)===1?e-o:o;if(n===zu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(o>=e)o=e;else if(o<0)o=0;else{this.time=o;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),o>=e||o<0){let p=Math.floor(o/e);o-=e*p,r+=Math.abs(p);let s=this.repetitions-r;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=t>0?e:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(s===1){let u=t<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:p})}}else this.time=o;if(a&&(r&1)===1)return e-o}return o}_setEndings(t,e,n){let o=this._interpolantSettings;n?(o.endingStart=di,o.endingEnd=di):(t?o.endingStart=this.zeroSlopeAtStart?di:bi:o.endingStart=ga,e?o.endingEnd=this.zeroSlopeAtEnd?di:bi:o.endingEnd=ga)}_scheduleFading(t,e,n){let o=this._mixer,r=o.time,a=this._weightInterpolant;a===null&&(a=o._lendControlInterpolant(),this._weightInterpolant=a);let p=a.parameterPositions,s=a.sampleValues;return p[0]=r,s[0]=e,p[1]=r+t,s[1]=n,this}},K3=new Float32Array(1),Wa=class extends eo{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,o=t._clip.tracks,r=o.length,a=t._propertyBindings,p=t._interpolants,s=n.uuid,u=this._bindingsByRootAndName,f=u[s];f===void 0&&(f={},u[s]=f);for(let l=0;l!==r;++l){let h=o[l],c=h.name,d=f[c];if(d!==void 0)++d.referenceCount,a[l]=d;else{if(d=a[l],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,s,c));continue}let T=e&&e._propertyBindings[l].binding.parsedPath;d=new zs(de.create(n,c,T),h.ValueTypeName,h.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,s,c),a[l]=d}p[l].resultBuffer=d.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,o=t._clip.uuid,r=this._actionsByClip[o];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,o,n)}let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let o=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let p=a.knownActions;t._byClipCacheIndex=p.length,p.push(t)}t._cacheIndex=o.length,o.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],o=t._cacheIndex;n._cacheIndex=o,e[o]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,p=a[r],s=p.knownActions,u=s[s.length-1],f=t._byClipCacheIndex;u._byClipCacheIndex=f,s[f]=u,s.pop(),t._byClipCacheIndex=null;let l=p.actionByRoot,h=(t._localRoot||this._root).uuid;delete l[h],s.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,o=e.length;n!==o;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,o=this._nActiveActions++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,o=--this._nActiveActions,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let o=this._bindingsByRootAndName,r=this._bindings,a=o[e];a===void 0&&(a={},o[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,o=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,p=a[o],s=e[e.length-1],u=t._cacheIndex;s._cacheIndex=u,e[u]=s,e.pop(),delete p[r],Object.keys(p).length===0&&delete a[o]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,o=this._nActiveBindings++,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,o=--this._nActiveBindings,r=e[o];t._cacheIndex=o,e[o]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Xa(new Float32Array(2),new Float32Array(2),1,K3),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,o=--this._nActiveControlInterpolants,r=e[o];t.__cacheIndex=o,e[o]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let o=e||this._root,r=o.uuid,a=typeof t=="string"?xi.findByName(o,t):t,p=a!==null?a.uuid:t,s=this._actionsByClip[p],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Qu),s!==void 0){let l=s.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=s.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let f=new Qs(this,a,e,n);return this._bindAction(f,u),this._addInactiveAction(f,p,r),f}existingAction(t,e){let n=e||this._root,o=n.uuid,r=typeof t=="string"?xi.findByName(n,t):t,a=r?r.uuid:t,p=this._actionsByClip[a];return p!==void 0&&p.actionByRoot[o]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,o=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(o,t,r,a);let p=this._bindings,s=this._nActiveBindings;for(let u=0;u!==s;++u)p[u].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,o=this._actionsByClip,r=o[n];if(r!==void 0){let a=r.knownActions;for(let p=0,s=a.length;p!==s;++p){let u=a[p];this._deactivateAction(u);let f=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=f,e[f]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete o[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let p=n[a].actionByRoot,s=p[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let o=this._bindingsByRootAndName,r=o[e];if(r!==void 0)for(let a in r){let p=r[a];p.restoreOriginalState(),this._removeInactiveBinding(p)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var x1=new Dt,Ka=class{constructor(t,e,n=0,o=1/0){this.ray=new Qo(t,e),this.near=n,this.far=o,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return x1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(x1),this}intersectObject(t,e=!0,n=[]){return _2(t,this,n,e),n.sort(O1),n}intersectObjects(t,e=!0,n=[]){for(let o=0,r=t.length;o<r;o++)_2(t[o],this,n,e);return n.sort(O1),n}};function O1(i,t){return i.distance-t.distance}function _2(i,t,e,n){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(o=!1),o===!0&&n===!0){let r=i.children;for(let a=0,p=r.length;a<p;a++)_2(r[a],t,e,!0)}}function il(i,t,e,n){let o=q3(n);switch(e){case Q2:return i*t;case hu:return i*t/o.components*o.byteLength;case bu:return i*t/o.components*o.byteLength;case Z2:return i*t*2/o.components*o.byteLength;case du:return i*t*2/o.components*o.byteLength;case j2:return i*t*3/o.components*o.byteLength;case sn:return i*t*4/o.components*o.byteLength;case yu:return i*t*4/o.components*o.byteLength;case op:case ip:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rp:case ap:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gu:case Eu:return Math.max(i,16)*Math.max(t,8)/4;case mu:case Tu:return Math.max(i,8)*Math.max(t,8)/2;case Vu:case Su:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Du:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Au:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _u:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $u:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hu:case ku:case Bu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fu:case Nu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xu:case Ju:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q3(i){switch(i){case Ln:case N2:return{byteLength:1,components:1};case _r:case X2:case Un:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case Go:case fu:case _n:return{byteLength:4,components:1};case J2:case z2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Xh(){let i=null,t=!1,e=null,n=null;function o(r,a){e(r,a),n=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function om(i){let t=new WeakMap;function e(p,s){let u=p.array,f=p.usage,l=u.byteLength,h=i.createBuffer();i.bindBuffer(s,h),i.bufferData(s,u,f),p.onUploadCallback();let c;if(u instanceof Float32Array)c=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)c=i.HALF_FLOAT;else if(u instanceof Uint16Array)p.isFloat16BufferAttribute?c=i.HALF_FLOAT:c=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=i.SHORT;else if(u instanceof Uint32Array)c=i.UNSIGNED_INT;else if(u instanceof Int32Array)c=i.INT;else if(u instanceof Int8Array)c=i.BYTE;else if(u instanceof Uint8Array)c=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:p.version,size:l}}function n(p,s,u){let f=s.array,l=s.updateRanges;if(i.bindBuffer(u,p),l.length===0)i.bufferSubData(u,0,f);else{l.sort((c,d)=>c.start-d.start);let h=0;for(let c=1;c<l.length;c++){let d=l[h],T=l[c];T.start<=d.start+d.count+1?d.count=Math.max(d.count,T.start+T.count-d.start):(++h,l[h]=T)}l.length=h+1;for(let c=0,d=l.length;c<d;c++){let T=l[c];i.bufferSubData(u,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}s.clearUpdateRanges()}s.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function r(p){p.isInterleavedBufferAttribute&&(p=p.data);let s=t.get(p);s&&(i.deleteBuffer(s.buffer),t.delete(p))}function a(p,s){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){let f=t.get(p);(!f||f.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}let u=t.get(p);if(u===void 0)t.set(p,e(p,s));else if(u.version<p.version){if(u.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,p,s),u.version=p.version}}return{get:o,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e4=`PhysicalMaterial material;
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
#endif`,n4=`struct PhysicalMaterial {
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
}`,o4=`
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
#endif`,i4=`#if defined( RE_IndirectDiffuse )
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
#endif`,r4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a4=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p4=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s4=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u4=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h4=`#if defined( USE_POINTS_UV )
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
#endif`,b4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T4=`#ifdef USE_MORPHTARGETS
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
#endif`,E4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U4=`#ifdef USE_NORMALMAP
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
#endif`,C4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N4=`float getShadowMask() {
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
}`,X4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J4=`#ifdef USE_SKINNING
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
#endif`,z4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q4=`#ifdef USE_SKINNING
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
#endif`,j4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W4=`#ifdef USE_TRANSMISSION
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
#endif`,K4=`#ifdef USE_TRANSMISSION
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
#endif`,q4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i5=`uniform sampler2D t2D;
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
}`,r5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u5=`#include <common>
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
}`,f5=`#if DEPTH_PACKING == 3200
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
}`,l5=`#define DISTANCE
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
}`,c5=`#define DISTANCE
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
}`,h5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d5=`uniform float scale;
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
}`,y5=`uniform vec3 diffuse;
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
}`,m5=`#include <common>
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
}`,g5=`uniform vec3 diffuse;
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
}`,T5=`#define LAMBERT
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
}`,E5=`#define LAMBERT
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
}`,V5=`#define MATCAP
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
}`,S5=`#define MATCAP
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
}`,w5=`#define NORMAL
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
}`,P5=`#define NORMAL
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
}`,L5=`#define PHONG
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
}`,U5=`#define PHONG
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
}`,C5=`#define STANDARD
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
}`,x5=`#define STANDARD
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
}`,O5=`#define TOON
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
}`,R5=`#define TOON
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
}`,D5=`uniform float size;
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
}`,v5=`uniform vec3 diffuse;
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
}`,M5=`#include <common>
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
}`,A5=`uniform vec3 color;
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
}`,I5=`uniform float rotation;
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
}`,_5=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:im,alphahash_pars_fragment:rm,alphamap_fragment:am,alphamap_pars_fragment:pm,alphatest_fragment:sm,alphatest_pars_fragment:um,aomap_fragment:fm,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:bm,beginnormal_vertex:dm,bsdfs:ym,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Sm,color_fragment:wm,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Um,common:Cm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Rm,displacementmap_vertex:Dm,emissivemap_fragment:vm,emissivemap_pars_fragment:Mm,colorspace_fragment:Am,colorspace_pars_fragment:Im,envmap_fragment:_m,envmap_common_pars_fragment:$m,envmap_pars_fragment:Hm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Gm,envmap_vertex:Bm,fog_vertex:Fm,fog_pars_vertex:Nm,fog_fragment:Xm,fog_pars_fragment:Jm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Qm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Zm,lights_pars_begin:Ym,lights_toon_fragment:Wm,lights_toon_pars_fragment:Km,lights_phong_fragment:qm,lights_phong_pars_fragment:t4,lights_physical_fragment:e4,lights_physical_pars_fragment:n4,lights_fragment_begin:o4,lights_fragment_maps:i4,lights_fragment_end:r4,logdepthbuf_fragment:a4,logdepthbuf_pars_fragment:p4,logdepthbuf_pars_vertex:s4,logdepthbuf_vertex:u4,map_fragment:f4,map_pars_fragment:l4,map_particle_fragment:c4,map_particle_pars_fragment:h4,metalnessmap_fragment:b4,metalnessmap_pars_fragment:d4,morphinstance_vertex:y4,morphcolor_vertex:m4,morphnormal_vertex:g4,morphtarget_pars_vertex:T4,morphtarget_vertex:E4,normal_fragment_begin:V4,normal_fragment_maps:S4,normal_pars_fragment:w4,normal_pars_vertex:P4,normal_vertex:L4,normalmap_pars_fragment:U4,clearcoat_normal_fragment_begin:C4,clearcoat_normal_fragment_maps:x4,clearcoat_pars_fragment:O4,iridescence_pars_fragment:R4,opaque_fragment:D4,packing:v4,premultiplied_alpha_fragment:M4,project_vertex:A4,dithering_fragment:I4,dithering_pars_fragment:_4,roughnessmap_fragment:$4,roughnessmap_pars_fragment:H4,shadowmap_pars_fragment:k4,shadowmap_pars_vertex:B4,shadowmap_vertex:F4,shadowmask_pars_fragment:N4,skinbase_vertex:X4,skinning_pars_vertex:J4,skinning_vertex:z4,skinnormal_vertex:Q4,specularmap_fragment:j4,specularmap_pars_fragment:Z4,tonemapping_fragment:Y4,tonemapping_pars_fragment:G4,transmission_fragment:W4,transmission_pars_fragment:K4,uv_pars_fragment:q4,uv_pars_vertex:t5,uv_vertex:e5,worldpos_vertex:n5,background_vert:o5,background_frag:i5,backgroundCube_vert:r5,backgroundCube_frag:a5,cube_vert:p5,cube_frag:s5,depth_vert:u5,depth_frag:f5,distanceRGBA_vert:l5,distanceRGBA_frag:c5,equirect_vert:h5,equirect_frag:b5,linedashed_vert:d5,linedashed_frag:y5,meshbasic_vert:m5,meshbasic_frag:g5,meshlambert_vert:T5,meshlambert_frag:E5,meshmatcap_vert:V5,meshmatcap_frag:S5,meshnormal_vert:w5,meshnormal_frag:P5,meshphong_vert:L5,meshphong_frag:U5,meshphysical_vert:C5,meshphysical_frag:x5,meshtoon_vert:O5,meshtoon_frag:R5,points_vert:D5,points_frag:v5,shadow_vert:M5,shadow_frag:A5,sprite_vert:I5,sprite_frag:_5},ct={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},so={basic:{uniforms:en([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:en([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new mt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:en([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:en([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:en([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new mt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:en([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:en([ct.points,ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:en([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:en([ct.common,ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:en([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:en([ct.sprite,ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:en([ct.common,ct.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:en([ct.lights,ct.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};so.physical={uniforms:en([so.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Zu={r:0,b:0,g:0},_i=new wn,$5=new Dt;function H5(i,t,e,n,o,r,a){let p=new mt(0),s=r===!0?0:1,u,f,l=null,h=0,c=null;function d(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?e:t).get(g)),g}function T(m){let g=!1,L=d(m);L===null?b(p,s):L&&L.isColor&&(b(L,1),g=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(m,g){let L=d(g);L&&(L.isCubeTexture||L.mapping===np)?(f===void 0&&(f=new Ft(new Vi(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Ii(so.backgroundCube.uniforms),vertexShader:so.backgroundCube.vertexShader,fragmentShader:so.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),_i.copy(g.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4($5.makeRotationFromEuler(_i)),f.material.toneMapped=Yt.getTransfer(L.colorSpace)!==re,(l!==L||h!==L.version||c!==i.toneMapping)&&(f.material.needsUpdate=!0,l=L,h=L.version,c=i.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(u===void 0&&(u=new Ft(new cn(2,2),new xe({name:"BackgroundMaterial",uniforms:Ii(so.background.uniforms),vertexShader:so.background.vertexShader,fragmentShader:so.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=L,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(L.colorSpace)!==re,L.matrixAutoUpdate===!0&&L.updateMatrix(),u.material.uniforms.uvTransform.value.copy(L.matrix),(l!==L||h!==L.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,l=L,h=L.version,c=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function b(m,g){m.getRGB(Zu,tl(i)),n.buffers.color.setClear(Zu.r,Zu.g,Zu.b,g,a)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return p},setClearColor:function(m,g=1){p.set(m),s=g,b(p,s)},getClearAlpha:function(){return s},setClearAlpha:function(m){s=m,b(p,s)},render:T,addToRenderList:y,dispose:E}}function k5(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=h(null),r=o,a=!1;function p(S,D,A,_,$){let F=!1,J=l(_,A,D);r!==J&&(r=J,u(r.object)),F=c(S,_,A,$),F&&d(S,_,A,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,g(S,D,A,_),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function s(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function l(S,D,A){let _=A.wireframe===!0,$=n[S.id];$===void 0&&($={},n[S.id]=$);let F=$[D.id];F===void 0&&(F={},$[D.id]=F);let J=F[_];return J===void 0&&(J=h(s()),F[_]=J),J}function h(S){let D=[],A=[],_=[];for(let $=0;$<e;$++)D[$]=0,A[$]=0,_[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:A,attributeDivisors:_,object:S,attributes:{},index:null}}function c(S,D,A,_){let $=r.attributes,F=D.attributes,J=0,tt=A.getAttributes();for(let z in tt)if(tt[z].location>=0){let ft=$[z],yt=F[z];if(yt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),ft===void 0||ft.attribute!==yt||yt&&ft.data!==yt.data)return!0;J++}return r.attributesNum!==J||r.index!==_}function d(S,D,A,_){let $={},F=D.attributes,J=0,tt=A.getAttributes();for(let z in tt)if(tt[z].location>=0){let ft=F[z];ft===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));let yt={};yt.attribute=ft,ft&&ft.data&&(yt.data=ft.data),$[z]=yt,J++}r.attributes=$,r.attributesNum=J,r.index=_}function T(){let S=r.newAttributes;for(let D=0,A=S.length;D<A;D++)S[D]=0}function y(S){b(S,0)}function b(S,D){let A=r.newAttributes,_=r.enabledAttributes,$=r.attributeDivisors;A[S]=1,_[S]===0&&(i.enableVertexAttribArray(S),_[S]=1),$[S]!==D&&(i.vertexAttribDivisor(S,D),$[S]=D)}function E(){let S=r.newAttributes,D=r.enabledAttributes;for(let A=0,_=D.length;A<_;A++)D[A]!==S[A]&&(i.disableVertexAttribArray(A),D[A]=0)}function m(S,D,A,_,$,F,J){J===!0?i.vertexAttribIPointer(S,D,A,$,F):i.vertexAttribPointer(S,D,A,_,$,F)}function g(S,D,A,_){T();let $=_.attributes,F=A.getAttributes(),J=D.defaultAttributeValues;for(let tt in F){let z=F[tt];if(z.location>=0){let et=$[tt];if(et===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){let ft=et.normalized,yt=et.itemSize,_t=t.get(et);if(_t===void 0)continue;let $t=_t.buffer,ie=_t.type,qt=_t.bytesPerElement,G=ie===i.INT||ie===i.UNSIGNED_INT||et.gpuType===fu;if(et.isInterleavedBufferAttribute){let K=et.data,dt=K.stride,Ot=et.offset;if(K.isInstancedInterleavedBuffer){for(let Tt=0;Tt<z.locationSize;Tt++)b(z.location+Tt,K.meshPerAttribute);S.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Tt=0;Tt<z.locationSize;Tt++)y(z.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Tt=0;Tt<z.locationSize;Tt++)m(z.location+Tt,yt/z.locationSize,ie,ft,dt*qt,(Ot+yt/z.locationSize*Tt)*qt,G)}else{if(et.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)b(z.location+K,et.meshPerAttribute);S.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let K=0;K<z.locationSize;K++)y(z.location+K);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let K=0;K<z.locationSize;K++)m(z.location+K,yt/z.locationSize,ie,ft,yt*qt,yt/z.locationSize*K*qt,G)}}else if(J!==void 0){let ft=J[tt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(z.location,ft);break;case 3:i.vertexAttrib3fv(z.location,ft);break;case 4:i.vertexAttrib4fv(z.location,ft);break;default:i.vertexAttrib1fv(z.location,ft)}}}}E()}function L(){v();for(let S in n){let D=n[S];for(let A in D){let _=D[A];for(let $ in _)f(_[$].object),delete _[$];delete D[A]}delete n[S]}}function U(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let A in D){let _=D[A];for(let $ in _)f(_[$].object),delete _[$];delete D[A]}delete n[S.id]}function R(S){for(let D in n){let A=n[D];if(A[S.id]===void 0)continue;let _=A[S.id];for(let $ in _)f(_[$].object),delete _[$];delete A[S.id]}}function v(){V(),a=!0,r!==o&&(r=o,u(r.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:v,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:y,disableUnusedAttributes:E}}function B5(i,t,e){let n;function o(u){n=u}function r(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,l){l!==0&&(i.drawArraysInstanced(n,u,f,l),e.update(f,n,l))}function p(u,f,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,l);let c=0;for(let d=0;d<l;d++)c+=f[d];e.update(c,n,1)}function s(u,f,l,h){if(l===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let d=0;d<u.length;d++)a(u[d],f[d],h[d]);else{c.multiDrawArraysInstancedWEBGL(n,u,0,f,0,h,0,l);let d=0;for(let T=0;T<l;T++)d+=f[T]*h[T];e.update(d,n,1)}}this.setMode=o,this.render=r,this.renderInstances=a,this.renderMultiDraw=p,this.renderMultiDrawInstances=s}function F5(i,t,e,n){let o;function r(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(R){let v=R===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!v)}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",f=s(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let l=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=d>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,textureFormatReadable:a,textureTypeReadable:p,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:T,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:E,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:L,maxSamples:U}}function N5(i){let t=this,e=null,n=0,o=!1,r=!1,a=new Mn,p=new Qt,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){let c=l.length!==0||h||n!==0||o;return o=h,n=l.length,c},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,h){e=f(l,h,0)},this.setState=function(l,h,c){let d=l.clippingPlanes,T=l.clipIntersection,y=l.clipShadows,b=i.get(l);if(!o||d===null||d.length===0||r&&!y)r?f(null):u();else{let E=r?0:n,m=E*4,g=b.clippingState||null;s.value=g,g=f(d,h,m,c);for(let L=0;L!==m;++L)g[L]=e[L];b.clippingState=g,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function u(){s.value!==e&&(s.value=e,s.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(l,h,c,d){let T=l!==null?l.length:0,y=null;if(T!==0){if(y=s.value,d!==!0||y===null){let b=c+T*4,E=h.matrixWorldInverse;p.getNormalMatrix(E),(y===null||y.length<b)&&(y=new Float32Array(b));for(let m=0,g=c;m!==T;++m,g+=4)a.copy(l[m]).applyMatrix4(E,p),a.normal.toArray(y,g),y[g+3]=a.constant}s.value=y,s.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function X5(i){let t=new WeakMap;function e(a,p){return p===pu?a.mapping=vi:p===su&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){let p=a.mapping;if(p===pu||p===su)if(t.has(a)){let s=t.get(a).texture;return e(s,a.mapping)}else{let s=a.image;if(s&&s.height>0){let u=new Cs(s.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",o),e(u.texture,a.mapping)}else return null}}return a}function o(a){let p=a.target;p.removeEventListener("dispose",o);let s=t.get(p);s!==void 0&&(t.delete(p),s.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var kr=4,gh=[.125,.215,.35,.446,.526,.582],ki=20,rl=new Ro,Th=new mt,al=null,pl=0,sl=0,ul=!1,Hi=(1+Math.sqrt(5))/2,Hr=1/Hi,Eh=[new x(-Hi,Hr,0),new x(Hi,Hr,0),new x(-Hr,0,Hi),new x(Hr,0,Hi),new x(0,Hi,-Hr),new x(0,Hi,Hr),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],J5=new x,Wu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,o=100,r={}){let{size:a=256,position:p=J5}=r;al=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,o,s,p),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,pl,sl),this._renderer.xr.enabled=ul,t.scissorTest=!1,Yu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Un,format:sn,colorSpace:je,depthBuffer:!1},o=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z5(r)),this._blurMaterial=Q5(r,t,e)}return o}_compileMaterial(t){let e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,n,o,r){let s=new Ae(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Th),l.toneMapping=Mo,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(o),l.clearDepth(),l.setRenderTarget(null));let T=new oe({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),y=new Ft(new Vi,T),b=!1,E=t.background;E?E.isColor&&(T.color.copy(E),t.background=null,b=!0):(T.color.copy(Th),b=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(s.up.set(0,u[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+f[m],r.y,r.z)):g===1?(s.up.set(0,0,u[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+f[m],r.z)):(s.up.set(0,u[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+f[m]));let L=this._cubeSize;Yu(o,g*L,m>2?L:0,L,L),l.setRenderTarget(o),b&&l.render(y,s),l.render(t,s)}y.geometry.dispose(),y.material.dispose(),l.toneMapping=c,l.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,o=t.mapping===vi||t.mapping===Mi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());let r=o?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),p=r.uniforms;p.envMap.value=t;let s=this._cubeSize;Yu(e,0,0,3*s,2*s),n.setRenderTarget(e),n.render(a,rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let o=this._lodPlanes.length;for(let r=1;r<o;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),p=Eh[(o-r-1)%Eh.length];this._blur(t,r-1,r,a,p)}e.autoClear=n}_blur(t,e,n,o,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,o,"latitudinal",r),this._halfBlur(a,t,n,n,o,"longitudinal",r)}_halfBlur(t,e,n,o,r,a,p){let s=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,l=new Ft(this._lodPlanes[o],u),h=u.uniforms,c=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ki-1),T=r/d,y=isFinite(r)?1+Math.floor(f*T):ki;y>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ki}`);let b=[],E=0;for(let R=0;R<ki;++R){let v=R/T,V=Math.exp(-v*v/2);b.push(V),R===0?E+=V:R<y&&(E+=2*V)}for(let R=0;R<b.length;R++)b[R]=b[R]/E;h.envMap.value=t.texture,h.samples.value=y,h.weights.value=b,h.latitudinal.value=a==="latitudinal",p&&(h.poleAxis.value=p);let{_lodMax:m}=this;h.dTheta.value=d,h.mipInt.value=m-n;let g=this._sizeLods[o],L=3*g*(o>m-kr?o-m+kr:0),U=4*(this._cubeSize-g);Yu(e,L,U,3*g,2*g),s.setRenderTarget(e),s.render(l,rl)}};function z5(i){let t=[],e=[],n=[],o=i,r=i-kr+1+gh.length;for(let a=0;a<r;a++){let p=Math.pow(2,o);e.push(p);let s=1/p;a>i-kr?s=gh[a-i+kr-1]:a===0&&(s=0),n.push(s);let u=1/(p-2),f=-u,l=1+u,h=[f,f,l,f,l,l,f,f,l,l,f,l],c=6,d=6,T=3,y=2,b=1,E=new Float32Array(T*d*c),m=new Float32Array(y*d*c),g=new Float32Array(b*d*c);for(let U=0;U<c;U++){let R=U%3*2/3-1,v=U>2?0:-1,V=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];E.set(V,T*d*U),m.set(h,y*d*U);let S=[U,U,U,U,U,U];g.set(S,b*d*U)}let L=new ae;L.setAttribute("position",new Ce(E,T)),L.setAttribute("uv",new Ce(m,y)),L.setAttribute("faceIndex",new Ce(g,b)),t.push(L),o>kr&&o--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vh(i,t,e){let n=new Ze(i,t,e);return n.texture.mapping=np,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yu(i,t,e,n,o){i.viewport.set(t,e,n,o),i.scissor.set(t,e,n,o)}function Q5(i,t,e){let n=new Float32Array(ki),o=new x(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Sh(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function wh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function j5(i){let t=new WeakMap,e=null;function n(p){if(p&&p.isTexture){let s=p.mapping,u=s===pu||s===su,f=s===vi||s===Mi;if(u||f){let l=t.get(p),h=l!==void 0?l.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return e===null&&(e=new Wu(i)),l=u?e.fromEquirectangular(p,l):e.fromCubemap(p,l),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),l.texture;if(l!==void 0)return l.texture;{let c=p.image;return u&&c&&c.height>0||f&&c&&o(c)?(e===null&&(e=new Wu(i)),l=u?e.fromEquirectangular(p):e.fromCubemap(p),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),p.addEventListener("dispose",r),l.texture):null}}}return p}function o(p){let s=0,u=6;for(let f=0;f<u;f++)p[f]!==void 0&&s++;return s===u}function r(p){let s=p.target;s.removeEventListener("dispose",r);let u=t.get(s);u!==void 0&&(t.delete(s),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Z5(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return t[n]=o,o}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let o=e(n);return o===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Y5(i,t,e,n){let o={},r=new WeakMap;function a(l){let h=l.target;h.index!==null&&t.remove(h.index);for(let d in h.attributes)t.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete o[h.id];let c=r.get(h);c&&(t.remove(c),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function p(l,h){return o[h.id]===!0||(h.addEventListener("dispose",a),o[h.id]=!0,e.memory.geometries++),h}function s(l){let h=l.attributes;for(let c in h)t.update(h[c],i.ARRAY_BUFFER)}function u(l){let h=[],c=l.index,d=l.attributes.position,T=0;if(c!==null){let E=c.array;T=c.version;for(let m=0,g=E.length;m<g;m+=3){let L=E[m+0],U=E[m+1],R=E[m+2];h.push(L,U,U,R,R,L)}}else if(d!==void 0){let E=d.array;T=d.version;for(let m=0,g=E.length/3-1;m<g;m+=3){let L=m+0,U=m+1,R=m+2;h.push(L,U,U,R,R,L)}}else return;let y=new(q2(h)?wa:Sa)(h,1);y.version=T;let b=r.get(l);b&&t.remove(b),r.set(l,y)}function f(l){let h=r.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&u(l)}else u(l);return r.get(l)}return{get:p,update:s,getWireframeAttribute:f}}function G5(i,t,e){let n;function o(h){n=h}let r,a;function p(h){r=h.type,a=h.bytesPerElement}function s(h,c){i.drawElements(n,c,r,h*a),e.update(c,n,1)}function u(h,c,d){d!==0&&(i.drawElementsInstanced(n,c,r,h*a,d),e.update(c,n,d))}function f(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,h,0,d);let y=0;for(let b=0;b<d;b++)y+=c[b];e.update(y,n,1)}function l(h,c,d,T){if(d===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<h.length;b++)u(h[b]/a,c[b],T[b]);else{y.multiDrawElementsInstancedWEBGL(n,c,0,r,h,0,T,0,d);let b=0;for(let E=0;E<d;E++)b+=c[E]*T[E];e.update(b,n,1)}}this.setMode=o,this.setIndex=p,this.render=s,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=l}function W5(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,p){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=p*(r/3);break;case i.LINES:e.lines+=p*(r/2);break;case i.LINE_STRIP:e.lines+=p*(r-1);break;case i.LINE_LOOP:e.lines+=p*r;break;case i.POINTS:e.points+=p*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:n}}function K5(i,t,e){let n=new WeakMap,o=new ne;function r(a,p,s){let u=a.morphTargetInfluences,f=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,l=f!==void 0?f.length:0,h=n.get(p);if(h===void 0||h.count!==l){let V=function(){R.dispose(),n.delete(p),p.removeEventListener("dispose",V)};h!==void 0&&h.texture.dispose();let c=p.morphAttributes.position!==void 0,d=p.morphAttributes.normal!==void 0,T=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],b=p.morphAttributes.normal||[],E=p.morphAttributes.color||[],m=0;c===!0&&(m=1),d===!0&&(m=2),T===!0&&(m=3);let g=p.attributes.position.count*m,L=1;g>t.maxTextureSize&&(L=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let U=new Float32Array(g*L*4*l),R=new Va(U,g,L,l);R.type=_n,R.needsUpdate=!0;let v=m*4;for(let S=0;S<l;S++){let D=y[S],A=b[S],_=E[S],$=g*L*4*S;for(let F=0;F<D.count;F++){let J=F*v;c===!0&&(o.fromBufferAttribute(D,F),U[$+J+0]=o.x,U[$+J+1]=o.y,U[$+J+2]=o.z,U[$+J+3]=0),d===!0&&(o.fromBufferAttribute(A,F),U[$+J+4]=o.x,U[$+J+5]=o.y,U[$+J+6]=o.z,U[$+J+7]=0),T===!0&&(o.fromBufferAttribute(_,F),U[$+J+8]=o.x,U[$+J+9]=o.y,U[$+J+10]=o.z,U[$+J+11]=_.itemSize===4?o.w:1)}}h={count:l,texture:R,size:new nt(g,L)},n.set(p,h),p.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let c=0;for(let T=0;T<u.length;T++)c+=u[T];let d=p.morphTargetsRelative?1:1-c;s.getUniforms().setValue(i,"morphTargetBaseInfluence",d),s.getUniforms().setValue(i,"morphTargetInfluences",u)}s.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),s.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function q5(i,t,e,n){let o=new WeakMap;function r(s){let u=n.render.frame,f=s.geometry,l=t.get(s,f);if(o.get(l)!==u&&(t.update(l),o.set(l,u)),s.isInstancedMesh&&(s.hasEventListener("dispose",p)===!1&&s.addEventListener("dispose",p),o.get(s)!==u&&(e.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&e.update(s.instanceColor,i.ARRAY_BUFFER),o.set(s,u))),s.isSkinnedMesh){let h=s.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return l}function a(){o=new WeakMap}function p(s){let u=s.target;u.removeEventListener("dispose",p),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}var Jh=new He,Ph=new wi(1,1),zh=new Va,Qh=new Ls,jh=new La,Lh=[],Uh=[],Ch=new Float32Array(16),xh=new Float32Array(9),Oh=new Float32Array(4);function Fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let o=t*e,r=Lh[o];if(r===void 0&&(r=new Float32Array(o),Lh[o]=r),t!==0){n.toArray(r,0);for(let a=1,p=0;a!==t;++a)p+=e,i[a].toArray(r,p)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qu(i,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t6(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function n6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function o6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function i6(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),Be(e,n)}}function r6(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),Be(e,n)}}function a6(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),Be(e,n)}}function p6(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function u6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function f6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function l6(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function h6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function b6(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function d6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=G2,r=Ph):r=Jh,e.setTexture2D(t||r,o)}function y6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture3D(t||Qh,o)}function m6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTextureCube(t||jh,o)}function g6(i,t,e){let n=this.cache,o=e.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),e.setTexture2DArray(t||zh,o)}function T6(i){switch(i){case 5126:return t6;case 35664:return e6;case 35665:return n6;case 35666:return o6;case 35674:return i6;case 35675:return r6;case 35676:return a6;case 5124:case 35670:return p6;case 35667:case 35671:return s6;case 35668:case 35672:return u6;case 35669:case 35673:return f6;case 5125:return l6;case 36294:return c6;case 36295:return h6;case 36296:return b6;case 35678:case 36198:case 36298:case 36306:case 35682:return d6;case 35679:case 36299:case 36307:return y6;case 35680:case 36300:case 36308:case 36293:return m6;case 36289:case 36303:case 36311:case 36292:return g6}}function E6(i,t){i.uniform1fv(this.addr,t)}function V6(i,t){let e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function S6(i,t){let e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function w6(i,t){let e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function P6(i,t){let e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function L6(i,t){let e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function U6(i,t){let e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C6(i,t){i.uniform1iv(this.addr,t)}function x6(i,t){i.uniform2iv(this.addr,t)}function O6(i,t){i.uniform3iv(this.addr,t)}function R6(i,t){i.uniform4iv(this.addr,t)}function D6(i,t){i.uniform1uiv(this.addr,t)}function v6(i,t){i.uniform2uiv(this.addr,t)}function M6(i,t){i.uniform3uiv(this.addr,t)}function A6(i,t){i.uniform4uiv(this.addr,t)}function I6(i,t,e){let n=this.cache,o=t.length,r=qu(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTexture2D(t[a]||Jh,r[a])}function _6(i,t,e){let n=this.cache,o=t.length,r=qu(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTexture3D(t[a]||Qh,r[a])}function $6(i,t,e){let n=this.cache,o=t.length,r=qu(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTextureCube(t[a]||jh,r[a])}function H6(i,t,e){let n=this.cache,o=t.length,r=qu(e,o);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==o;++a)e.setTexture2DArray(t[a]||zh,r[a])}function k6(i){switch(i){case 5126:return E6;case 35664:return V6;case 35665:return S6;case 35666:return w6;case 35674:return P6;case 35675:return L6;case 35676:return U6;case 5124:case 35670:return C6;case 35667:case 35671:return x6;case 35668:case 35672:return O6;case 35669:case 35673:return R6;case 5125:return D6;case 36294:return v6;case 36295:return M6;case 36296:return A6;case 35678:case 36198:case 36298:case 36306:case 35682:return I6;case 35679:case 36299:case 36307:return _6;case 35680:case 36300:case 36308:case 36293:return $6;case 36289:case 36303:case 36311:case 36292:return H6}}var ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T6(e.type)}},cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k6(e.type)}},hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let o=this.seq;for(let r=0,a=o.length;r!==a;++r){let p=o[r];p.setValue(t,e[p.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function Rh(i,t){i.seq.push(t),i.map[t.id]=t}function B6(i,t,e){let n=i.name,o=n.length;for(fl.lastIndex=0;;){let r=fl.exec(n),a=fl.lastIndex,p=r[1],s=r[2]==="]",u=r[3];if(s&&(p=p|0),u===void 0||u==="["&&a+2===o){Rh(e,u===void 0?new ll(p,i,t):new cl(p,i,t));break}else{let l=e.map[p];l===void 0&&(l=new hl(p),Rh(e,l)),e=l}}}var Br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let r=t.getActiveUniform(e,o),a=t.getUniformLocation(e,r.name);B6(r,a,this)}}setValue(t,e,n,o){let r=this.map[e];r!==void 0&&r.setValue(t,n,o)}setOptional(t,e,n){let o=e[n];o!==void 0&&this.setValue(t,n,o)}static upload(t,e,n,o){for(let r=0,a=e.length;r!==a;++r){let p=e[r],s=n[p.id];s.needsUpdate!==!1&&p.setValue(t,s.value,o)}}static seqWithValue(t,e){let n=[];for(let o=0,r=t.length;o!==r;++o){let a=t[o];a.id in e&&n.push(a)}return n}};function Dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var F6=37297,N6=0;function X6(i,t){let e=i.split(`
`),n=[],o=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=o;a<r;a++){let p=a+1;n.push(`${p===t?">":" "} ${p}: ${e[a]}`)}return n.join(`
`)}var vh=new Qt;function J6(i){Yt._getMatrix(vh,Yt.workingColorSpace,i);let t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ta:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let p=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+X6(i.getShaderSource(t),p)}else return r}function z6(i,t){let e=J6(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q6(i,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case ou:e="Cineon";break;case iu:e="ACESFilmic";break;case au:e="AgX";break;case Ar:e="Neutral";break;case ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gu=new x;function j6(){Yt.getLuminanceCoefficients(Gu);let i=Gu.x.toFixed(4),t=Gu.y.toFixed(4),e=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z6(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sp).join(`
`)}function Y6(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G6(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){let r=i.getActiveAttrib(t,o),a=r.name,p=1;r.type===i.FLOAT_MAT2&&(p=2),r.type===i.FLOAT_MAT3&&(p=3),r.type===i.FLOAT_MAT4&&(p=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:p}}return e}function sp(i){return i!==""}function Ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var W6=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(i){return i.replace(W6,q6)}var K6=new Map;function q6(i,t){let e=jt[t];if(e===void 0){let n=K6.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bl(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(i){return i.replace(tg,eg)}function eg(i,t,e,n){let o="";for(let r=parseInt(t);r<parseInt(e);r++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function $h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ng(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===v1?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===po&&(t="SHADOWMAP_TYPE_VSM"),t}function og(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case Mi:t="ENVMAP_TYPE_CUBE";break;case np:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ig(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mi&&(t="ENVMAP_MODE_REFRACTION"),t}function rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case B2:t="ENVMAP_BLENDING_MULTIPLY";break;case j1:t="ENVMAP_BLENDING_MIX";break;case Z1:t="ENVMAP_BLENDING_ADD";break}return t}function ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pg(i,t,e,n){let o=i.getContext(),r=e.defines,a=e.vertexShader,p=e.fragmentShader,s=ng(e),u=og(e),f=ig(e),l=rg(e),h=ag(e),c=Z6(e),d=Y6(r),T=o.createProgram(),y,b,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(sp).join(`
`),y.length>0&&(y+=`
`),b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(sp).join(`
`),b.length>0&&(b+=`
`)):(y=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sp).join(`
`),b=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mo?"#define TONE_MAPPING":"",e.toneMapping!==Mo?jt.tonemapping_pars_fragment:"",e.toneMapping!==Mo?Q6("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,z6("linearToOutputTexel",e.outputColorSpace),j6(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sp).join(`
`)),a=bl(a),a=Ah(a,e),a=Ih(a,e),p=bl(p),p=Ah(p,e),p=Ih(p,e),a=_h(a),p=_h(p),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,y=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,b=["#define varying in",e.glslVersion===W2?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===W2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let m=E+y+a,g=E+b+p,L=Dh(o,o.VERTEX_SHADER,m),U=Dh(o,o.FRAGMENT_SHADER,g);o.attachShader(T,L),o.attachShader(T,U),e.index0AttributeName!==void 0?o.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function R(D){if(i.debug.checkShaderErrors){let A=o.getProgramInfoLog(T)||"",_=o.getShaderInfoLog(L)||"",$=o.getShaderInfoLog(U)||"",F=A.trim(),J=_.trim(),tt=$.trim(),z=!0,et=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,L,U);else{let ft=Mh(o,L,"vertex"),yt=Mh(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ft+`
`+yt)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(J===""||tt==="")&&(et=!1);et&&(D.diagnostics={runnable:z,programLog:F,vertexShader:{log:J,prefix:y},fragmentShader:{log:tt,prefix:b}})}o.deleteShader(L),o.deleteShader(U),v=new Br(o,T),V=G6(o,T)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let V;this.getAttributes=function(){return V===void 0&&R(this),V};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(T,F6)),S},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N6++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=U,this}var sg=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,o=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yl(t),e.set(t,n)),n}},yl=class{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}};function ug(i,t,e,n,o,r,a){let p=new Tr,s=new dl,u=new Set,f=[],l=o.logarithmicDepthBuffer,h=o.vertexTextures,c=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(V){return u.add(V),V===0?"uv":`uv${V}`}function y(V,S,D,A,_){let $=A.fog,F=_.geometry,J=V.isMeshStandardMaterial?A.environment:null,tt=(V.isMeshStandardMaterial?e:t).get(V.envMap||J),z=tt&&tt.mapping===np?tt.image.height:null,et=d[V.type];V.precision!==null&&(c=o.getMaxPrecision(V.precision),c!==V.precision&&console.warn("THREE.WebGLProgram.getParameters:",V.precision,"not supported, using",c,"instead."));let ft=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=ft!==void 0?ft.length:0,_t=0;F.morphAttributes.position!==void 0&&(_t=1),F.morphAttributes.normal!==void 0&&(_t=2),F.morphAttributes.color!==void 0&&(_t=3);let $t,ie,qt,G;if(et){let pe=so[et];$t=pe.vertexShader,ie=pe.fragmentShader}else $t=V.vertexShader,ie=V.fragmentShader,s.update(V),qt=s.getVertexShaderID(V),G=s.getFragmentShaderID(V);let K=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Ot=_.isInstancedMesh===!0,Tt=_.isBatchedMesh===!0,Gt=!!V.map,ve=!!V.matcap,M=!!tt,le=!!V.aoMap,Bt=!!V.lightMap,vt=!!V.bumpMap,Vt=!!V.normalMap,ce=!!V.displacementMap,St=!!V.emissiveMap,Jt=!!V.metalnessMap,Oe=!!V.roughnessMap,Ee=V.anisotropy>0,O=V.clearcoat>0,w=V.dispersion>0,B=V.iridescence>0,Y=V.sheen>0,q=V.transmission>0,Q=Ee&&!!V.anisotropyMap,Pt=O&&!!V.clearcoatMap,pt=O&&!!V.clearcoatNormalMap,Et=O&&!!V.clearcoatRoughnessMap,Ct=B&&!!V.iridescenceMap,rt=B&&!!V.iridescenceThicknessMap,ht=Y&&!!V.sheenColorMap,At=Y&&!!V.sheenRoughnessMap,xt=!!V.specularMap,ut=!!V.specularColorMap,Ht=!!V.specularIntensityMap,I=q&&!!V.transmissionMap,ot=q&&!!V.thicknessMap,st=!!V.gradientMap,wt=!!V.alphaMap,it=V.alphaTest>0,W=!!V.alphaHash,Ut=!!V.extensions,zt=Mo;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(zt=i.toneMapping);let ge={shaderID:et,shaderType:V.type,shaderName:V.name,vertexShader:$t,fragmentShader:ie,defines:V.defines,customVertexShaderID:qt,customFragmentShaderID:G,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:c,batching:Tt,batchingColor:Tt&&_._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&_.instanceColor!==null,instancingMorph:Ot&&_.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:je,alphaToCoverage:!!V.alphaToCoverage,map:Gt,matcap:ve,envMap:M,envMapMode:M&&tt.mapping,envMapCubeUVHeight:z,aoMap:le,lightMap:Bt,bumpMap:vt,normalMap:Vt,displacementMap:h&&ce,emissiveMap:St,normalMapObjectSpace:Vt&&V.normalMapType===eh,normalMapTangentSpace:Vt&&V.normalMapType===ju,metalnessMap:Jt,roughnessMap:Oe,anisotropy:Ee,anisotropyMap:Q,clearcoat:O,clearcoatMap:Pt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Et,dispersion:w,iridescence:B,iridescenceMap:Ct,iridescenceThicknessMap:rt,sheen:Y,sheenColorMap:ht,sheenRoughnessMap:At,specularMap:xt,specularColorMap:ut,specularIntensityMap:Ht,transmission:q,transmissionMap:I,thicknessMap:ot,gradientMap:st,opaque:V.transparent===!1&&V.blending===yi&&V.alphaToCoverage===!1,alphaMap:wt,alphaTest:it,alphaHash:W,combine:V.combine,mapUv:Gt&&T(V.map.channel),aoMapUv:le&&T(V.aoMap.channel),lightMapUv:Bt&&T(V.lightMap.channel),bumpMapUv:vt&&T(V.bumpMap.channel),normalMapUv:Vt&&T(V.normalMap.channel),displacementMapUv:ce&&T(V.displacementMap.channel),emissiveMapUv:St&&T(V.emissiveMap.channel),metalnessMapUv:Jt&&T(V.metalnessMap.channel),roughnessMapUv:Oe&&T(V.roughnessMap.channel),anisotropyMapUv:Q&&T(V.anisotropyMap.channel),clearcoatMapUv:Pt&&T(V.clearcoatMap.channel),clearcoatNormalMapUv:pt&&T(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&T(V.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&T(V.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&T(V.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&T(V.sheenColorMap.channel),sheenRoughnessMapUv:At&&T(V.sheenRoughnessMap.channel),specularMapUv:xt&&T(V.specularMap.channel),specularColorMapUv:ut&&T(V.specularColorMap.channel),specularIntensityMapUv:Ht&&T(V.specularIntensityMap.channel),transmissionMapUv:I&&T(V.transmissionMap.channel),thicknessMapUv:ot&&T(V.thicknessMap.channel),alphaMapUv:wt&&T(V.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Vt||Ee),vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!F.attributes.uv&&(Gt||wt),fog:!!$,useFog:V.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:V.flatShading===!0&&V.wireframe===!1,sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:dt,skinning:_.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:_t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:V.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Gt&&V.map.isVideoTexture===!0&&Yt.getTransfer(V.map.colorSpace)===re,decodeVideoTextureEmissive:St&&V.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(V.emissiveMap.colorSpace)===re,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===qe,flipSided:V.side===pn,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:Ut&&V.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&V.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return ge.vertexUv1s=u.has(1),ge.vertexUv2s=u.has(2),ge.vertexUv3s=u.has(3),u.clear(),ge}function b(V){let S=[];if(V.shaderID?S.push(V.shaderID):(S.push(V.customVertexShaderID),S.push(V.customFragmentShaderID)),V.defines!==void 0)for(let D in V.defines)S.push(D),S.push(V.defines[D]);return V.isRawShaderMaterial===!1&&(E(S,V),m(S,V),S.push(i.outputColorSpace)),S.push(V.customProgramCacheKey),S.join()}function E(V,S){V.push(S.precision),V.push(S.outputColorSpace),V.push(S.envMapMode),V.push(S.envMapCubeUVHeight),V.push(S.mapUv),V.push(S.alphaMapUv),V.push(S.lightMapUv),V.push(S.aoMapUv),V.push(S.bumpMapUv),V.push(S.normalMapUv),V.push(S.displacementMapUv),V.push(S.emissiveMapUv),V.push(S.metalnessMapUv),V.push(S.roughnessMapUv),V.push(S.anisotropyMapUv),V.push(S.clearcoatMapUv),V.push(S.clearcoatNormalMapUv),V.push(S.clearcoatRoughnessMapUv),V.push(S.iridescenceMapUv),V.push(S.iridescenceThicknessMapUv),V.push(S.sheenColorMapUv),V.push(S.sheenRoughnessMapUv),V.push(S.specularMapUv),V.push(S.specularColorMapUv),V.push(S.specularIntensityMapUv),V.push(S.transmissionMapUv),V.push(S.thicknessMapUv),V.push(S.combine),V.push(S.fogExp2),V.push(S.sizeAttenuation),V.push(S.morphTargetsCount),V.push(S.morphAttributeCount),V.push(S.numDirLights),V.push(S.numPointLights),V.push(S.numSpotLights),V.push(S.numSpotLightMaps),V.push(S.numHemiLights),V.push(S.numRectAreaLights),V.push(S.numDirLightShadows),V.push(S.numPointLightShadows),V.push(S.numSpotLightShadows),V.push(S.numSpotLightShadowsWithMaps),V.push(S.numLightProbes),V.push(S.shadowMapType),V.push(S.toneMapping),V.push(S.numClippingPlanes),V.push(S.numClipIntersection),V.push(S.depthPacking)}function m(V,S){p.disableAll(),S.supportsVertexTextures&&p.enable(0),S.instancing&&p.enable(1),S.instancingColor&&p.enable(2),S.instancingMorph&&p.enable(3),S.matcap&&p.enable(4),S.envMap&&p.enable(5),S.normalMapObjectSpace&&p.enable(6),S.normalMapTangentSpace&&p.enable(7),S.clearcoat&&p.enable(8),S.iridescence&&p.enable(9),S.alphaTest&&p.enable(10),S.vertexColors&&p.enable(11),S.vertexAlphas&&p.enable(12),S.vertexUv1s&&p.enable(13),S.vertexUv2s&&p.enable(14),S.vertexUv3s&&p.enable(15),S.vertexTangents&&p.enable(16),S.anisotropy&&p.enable(17),S.alphaHash&&p.enable(18),S.batching&&p.enable(19),S.dispersion&&p.enable(20),S.batchingColor&&p.enable(21),S.gradientMap&&p.enable(22),V.push(p.mask),p.disableAll(),S.fog&&p.enable(0),S.useFog&&p.enable(1),S.flatShading&&p.enable(2),S.logarithmicDepthBuffer&&p.enable(3),S.reversedDepthBuffer&&p.enable(4),S.skinning&&p.enable(5),S.morphTargets&&p.enable(6),S.morphNormals&&p.enable(7),S.morphColors&&p.enable(8),S.premultipliedAlpha&&p.enable(9),S.shadowMapEnabled&&p.enable(10),S.doubleSided&&p.enable(11),S.flipSided&&p.enable(12),S.useDepthPacking&&p.enable(13),S.dithering&&p.enable(14),S.transmission&&p.enable(15),S.sheen&&p.enable(16),S.opaque&&p.enable(17),S.pointsUvs&&p.enable(18),S.decodeVideoTexture&&p.enable(19),S.decodeVideoTextureEmissive&&p.enable(20),S.alphaToCoverage&&p.enable(21),V.push(p.mask)}function g(V){let S=d[V.type],D;if(S){let A=so[S];D=$n.clone(A.uniforms)}else D=V.uniforms;return D}function L(V,S){let D;for(let A=0,_=f.length;A<_;A++){let $=f[A];if($.cacheKey===S){D=$,++D.usedTimes;break}}return D===void 0&&(D=new pg(i,S,V,r),f.push(D)),D}function U(V){if(--V.usedTimes===0){let S=f.indexOf(V);f[S]=f[f.length-1],f.pop(),V.destroy()}}function R(V){s.remove(V)}function v(){s.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:g,acquireProgram:L,releaseProgram:U,releaseShaderCache:R,programs:f,dispose:v}}function fg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let p=i.get(a);return p===void 0&&(p={},i.set(a,p)),p}function n(a){i.delete(a)}function o(a,p,s){i.get(a)[p]=s}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:o,dispose:r}}function lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kh(){let i=[],t=0,e=[],n=[],o=[];function r(){t=0,e.length=0,n.length=0,o.length=0}function a(l,h,c,d,T,y){let b=i[t];return b===void 0?(b={id:l.id,object:l,geometry:h,material:c,groupOrder:d,renderOrder:l.renderOrder,z:T,group:y},i[t]=b):(b.id=l.id,b.object=l,b.geometry=h,b.material=c,b.groupOrder=d,b.renderOrder=l.renderOrder,b.z=T,b.group=y),t++,b}function p(l,h,c,d,T,y){let b=a(l,h,c,d,T,y);c.transmission>0?n.push(b):c.transparent===!0?o.push(b):e.push(b)}function s(l,h,c,d,T,y){let b=a(l,h,c,d,T,y);c.transmission>0?n.unshift(b):c.transparent===!0?o.unshift(b):e.unshift(b)}function u(l,h){e.length>1&&e.sort(l||lg),n.length>1&&n.sort(h||Hh),o.length>1&&o.sort(h||Hh)}function f(){for(let l=t,h=i.length;l<h;l++){let c=i[l];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:o,init:r,push:p,unshift:s,finish:f,sort:u}}function cg(){let i=new WeakMap;function t(n,o){let r=i.get(n),a;return r===void 0?(a=new kh,i.set(n,[a])):o>=r.length?(a=new kh,r.push(a)):a=r[o],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new x,color:new mt};break;case"SpotLight":e={position:new x,direction:new x,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new x,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new x,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new x,halfWidth:new x,halfHeight:new x};break}return i[t.id]=e,e}}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var dg=0;function yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mg(i){let t=new hg,e=bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new x);let o=new x,r=new Dt,a=new Dt;function p(u){let f=0,l=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let c=0,d=0,T=0,y=0,b=0,E=0,m=0,g=0,L=0,U=0,R=0;u.sort(yg);for(let V=0,S=u.length;V<S;V++){let D=u[V],A=D.color,_=D.intensity,$=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=A.r*_,l+=A.g*_,h+=A.b*_;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],_);R++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let tt=D.shadow,z=e.get(D);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.directionalShadow[c]=z,n.directionalShadowMap[c]=F,n.directionalShadowMatrix[c]=D.shadow.matrix,E++}n.directional[c]=J,c++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(A).multiplyScalar(_),J.distance=$,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[T]=J;let tt=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,tt.updateMatrices(D),D.castShadow&&U++),n.spotLightMatrix[T]=tt.matrix,D.castShadow){let z=e.get(D);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.spotShadow[T]=z,n.spotShadowMap[T]=F,g++}T++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(A).multiplyScalar(_),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=J,y++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let tt=D.shadow,z=e.get(D);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,n.pointShadow[d]=z,n.pointShadowMap[d]=F,n.pointShadowMatrix[d]=D.shadow.matrix,m++}n.point[d]=J,d++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(_),J.groundColor.copy(D.groundColor).multiplyScalar(_),n.hemi[b]=J,b++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=l,n.ambient[2]=h;let v=n.hash;(v.directionalLength!==c||v.pointLength!==d||v.spotLength!==T||v.rectAreaLength!==y||v.hemiLength!==b||v.numDirectionalShadows!==E||v.numPointShadows!==m||v.numSpotShadows!==g||v.numSpotMaps!==L||v.numLightProbes!==R)&&(n.directional.length=c,n.spot.length=T,n.rectArea.length=y,n.point.length=d,n.hemi.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=g+L-U,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,v.directionalLength=c,v.pointLength=d,v.spotLength=T,v.rectAreaLength=y,v.hemiLength=b,v.numDirectionalShadows=E,v.numPointShadows=m,v.numSpotShadows=g,v.numSpotMaps=L,v.numLightProbes=R,n.version=dg++)}function s(u,f){let l=0,h=0,c=0,d=0,T=0,y=f.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){let m=u[b];if(m.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(m.matrixWorld),o.setFromMatrixPosition(m.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(y),l++}else if(m.isSpotLight){let g=n.spot[c];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(y),g.direction.setFromMatrixPosition(m.matrixWorld),o.setFromMatrixPosition(m.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(y),c++}else if(m.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(y),a.identity(),r.copy(m.matrixWorld),r.premultiply(y),a.extractRotation(r),g.halfWidth.set(m.width*.5,0,0),g.halfHeight.set(0,m.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(m.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(y),h++}else if(m.isHemisphereLight){let g=n.hemi[T];g.direction.setFromMatrixPosition(m.matrixWorld),g.direction.transformDirection(y),T++}}}return{setup:p,setupView:s,state:n}}function Bh(i){let t=new mg(i),e=[],n=[];function o(f){u.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function p(){t.setup(e)}function s(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:p,setupLightsView:s,pushLight:r,pushShadow:a}}function gg(i){let t=new WeakMap;function e(o,r=0){let a=t.get(o),p;return a===void 0?(p=new Bh(i),t.set(o,[p])):r>=a.length?(p=new Bh(i),a.push(p)):p=a[r],p}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Vg(i,t,e){let n=new Pr,o=new nt,r=new nt,a=new ne,p=new $s({depthPacking:th}),s=new Hs,u={},f=e.maxTextureSize,l={[jn]:pn,[pn]:jn,[qe]:qe},h=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),c=h.clone();c.defines.HORIZONTAL_PASS=1;let d=new ae;d.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Ft(d,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let b=this.type;this.render=function(U,R,v){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;let V=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),A=i.state;A.setBlending($e),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let _=b!==po&&this.type===po,$=b===po&&this.type!==po;for(let F=0,J=U.length;F<J;F++){let tt=U[F],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);let et=z.getFrameExtents();if(o.multiply(et),r.copy(z.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/et.x),o.x=r.x*et.x,z.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/et.y),o.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||_===!0||$===!0){let yt=this.type!==po?{minFilter:_e,magFilter:_e}:{};z.map!==null&&z.map.dispose(),z.map=new Ze(o.x,o.y,yt),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ft=z.getViewportCount();for(let yt=0;yt<ft;yt++){let _t=z.getViewport(yt);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),A.viewport(a),z.updateMatrices(tt,yt),n=z.getFrustum(),g(R,v,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===po&&E(z,v),z.needsUpdate=!1}b=this.type,y.needsUpdate=!1,i.setRenderTarget(V,S,D)};function E(U,R){let v=t.update(T);h.defines.VSM_SAMPLES!==U.blurSamples&&(h.defines.VSM_SAMPLES=U.blurSamples,c.defines.VSM_SAMPLES=U.blurSamples,h.needsUpdate=!0,c.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ze(o.x,o.y)),h.uniforms.shadow_pass.value=U.map.texture,h.uniforms.resolution.value=U.mapSize,h.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(R,null,v,h,T,null),c.uniforms.shadow_pass.value=U.mapPass.texture,c.uniforms.resolution.value=U.mapSize,c.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(R,null,v,c,T,null)}function m(U,R,v,V){let S=null,D=v.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)S=D;else if(S=v.isPointLight===!0?s:p,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let A=S.uuid,_=R.uuid,$=u[A];$===void 0&&($={},u[A]=$);let F=$[_];F===void 0&&(F=S.clone(),$[_]=F,R.addEventListener("dispose",L)),S=F}if(S.visible=R.visible,S.wireframe=R.wireframe,V===po?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:l[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let A=i.properties.get(S);A.light=v}return S}function g(U,R,v,V,S){if(U.visible===!1)return;if(U.layers.test(R.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&S===po)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,U.matrixWorld);let _=t.update(U),$=U.material;if(Array.isArray($)){let F=_.groups;for(let J=0,tt=F.length;J<tt;J++){let z=F[J],et=$[z.materialIndex];if(et&&et.visible){let ft=m(U,et,V,S);U.onBeforeShadow(i,U,R,v,_,ft,z),i.renderBufferDirect(v,null,_,ft,U,z),U.onAfterShadow(i,U,R,v,_,ft,z)}}}else if($.visible){let F=m(U,$,V,S);U.onBeforeShadow(i,U,R,v,_,F,null),i.renderBufferDirect(v,null,_,F,U,null),U.onAfterShadow(i,U,R,v,_,F,null)}}let A=U.children;for(let _=0,$=A.length;_<$;_++)g(A[_],R,v,V,S)}function L(U){U.target.removeEventListener("dispose",L);for(let v in u){let V=u[v],S=U.target.uuid;S in V&&(V[S].dispose(),delete V[S])}}}var Sg={[Zs]:Ys,[Gs]:qs,[Ws]:tu,[mi]:Ks,[Ys]:Zs,[qs]:Gs,[tu]:Ws,[Ks]:mi};function wg(i,t){function e(){let I=!1,ot=new ne,st=null,wt=new ne(0,0,0,0);return{setMask:function(it){st!==it&&!I&&(i.colorMask(it,it,it,it),st=it)},setLocked:function(it){I=it},setClear:function(it,W,Ut,zt,ge){ge===!0&&(it*=zt,W*=zt,Ut*=zt),ot.set(it,W,Ut,zt),wt.equals(ot)===!1&&(i.clearColor(it,W,Ut,zt),wt.copy(ot))},reset:function(){I=!1,st=null,wt.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,st=null,wt=null,it=null;return{setReversed:function(W){if(ot!==W){let Ut=t.get("EXT_clip_control");W?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ot=W;let zt=it;it=null,this.setClear(zt)}},getReversed:function(){return ot},setTest:function(W){W?K(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(W){st!==W&&!I&&(i.depthMask(W),st=W)},setFunc:function(W){if(ot&&(W=Sg[W]),wt!==W){switch(W){case Zs:i.depthFunc(i.NEVER);break;case Ys:i.depthFunc(i.ALWAYS);break;case Gs:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case Ws:i.depthFunc(i.EQUAL);break;case Ks:i.depthFunc(i.GEQUAL);break;case qs:i.depthFunc(i.GREATER);break;case tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=W}},setLocked:function(W){I=W},setClear:function(W){it!==W&&(ot&&(W=1-W),i.clearDepth(W),it=W)},reset:function(){I=!1,st=null,wt=null,it=null,ot=!1}}}function o(){let I=!1,ot=null,st=null,wt=null,it=null,W=null,Ut=null,zt=null,ge=null;return{setTest:function(pe){I||(pe?K(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(pe){ot!==pe&&!I&&(i.stencilMask(pe),ot=pe)},setFunc:function(pe,yo,Gn){(st!==pe||wt!==yo||it!==Gn)&&(i.stencilFunc(pe,yo,Gn),st=pe,wt=yo,it=Gn)},setOp:function(pe,yo,Gn){(W!==pe||Ut!==yo||zt!==Gn)&&(i.stencilOp(pe,yo,Gn),W=pe,Ut=yo,zt=Gn)},setLocked:function(pe){I=pe},setClear:function(pe){ge!==pe&&(i.clearStencil(pe),ge=pe)},reset:function(){I=!1,ot=null,st=null,wt=null,it=null,W=null,Ut=null,zt=null,ge=null}}}let r=new e,a=new n,p=new o,s=new WeakMap,u=new WeakMap,f={},l={},h=new WeakMap,c=[],d=null,T=!1,y=null,b=null,E=null,m=null,g=null,L=null,U=null,R=new mt(0,0,0),v=0,V=!1,S=null,D=null,A=null,_=null,$=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,tt=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),J=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),J=tt>=2);let et=null,ft={},yt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),$t=new ne().fromArray(yt),ie=new ne().fromArray(_t);function qt(I,ot,st,wt){let it=new Uint8Array(4),W=i.createTexture();i.bindTexture(I,W),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<st;Ut++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(ot+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return W}let G={};G[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),p.setClear(0),K(i.DEPTH_TEST),a.setFunc(mi),vt(!1),Vt($2),K(i.CULL_FACE),le($e);function K(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function dt(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Ot(I,ot){return l[I]!==ot?(i.bindFramebuffer(I,ot),l[I]=ot,I===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Tt(I,ot){let st=c,wt=!1;if(I){st=h.get(ot),st===void 0&&(st=[],h.set(ot,st));let it=I.textures;if(st.length!==it.length||st[0]!==i.COLOR_ATTACHMENT0){for(let W=0,Ut=it.length;W<Ut;W++)st[W]=i.COLOR_ATTACHMENT0+W;st.length=it.length,wt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,wt=!0);wt&&i.drawBuffers(st)}function Gt(I){return d!==I?(i.useProgram(I),d=I,!0):!1}let ve={[Sn]:i.FUNC_ADD,[M1]:i.FUNC_SUBTRACT,[A1]:i.FUNC_REVERSE_SUBTRACT};ve[I1]=i.MIN,ve[_1]=i.MAX;let M={[Di]:i.ZERO,[$1]:i.ONE,[H1]:i.SRC_COLOR,[Es]:i.SRC_ALPHA,[N1]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[tp]:i.DST_ALPHA,[k1]:i.ONE_MINUS_SRC_COLOR,[Vs]:i.ONE_MINUS_SRC_ALPHA,[F1]:i.ONE_MINUS_DST_COLOR,[B1]:i.ONE_MINUS_DST_ALPHA,[X1]:i.CONSTANT_COLOR,[J1]:i.ONE_MINUS_CONSTANT_COLOR,[z1]:i.CONSTANT_ALPHA,[Q1]:i.ONE_MINUS_CONSTANT_ALPHA};function le(I,ot,st,wt,it,W,Ut,zt,ge,pe){if(I===$e){T===!0&&(dt(i.BLEND),T=!1);return}if(T===!1&&(K(i.BLEND),T=!0),I!==js){if(I!==y||pe!==V){if((b!==Sn||g!==Sn)&&(i.blendEquation(i.FUNC_ADD),b=Sn,g=Sn),pe)switch(I){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case H2:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case k2:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case H2:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k2:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,m=null,L=null,U=null,R.set(0,0,0),v=0,y=I,V=pe}return}it=it||ot,W=W||st,Ut=Ut||wt,(ot!==b||it!==g)&&(i.blendEquationSeparate(ve[ot],ve[it]),b=ot,g=it),(st!==E||wt!==m||W!==L||Ut!==U)&&(i.blendFuncSeparate(M[st],M[wt],M[W],M[Ut]),E=st,m=wt,L=W,U=Ut),(zt.equals(R)===!1||ge!==v)&&(i.blendColor(zt.r,zt.g,zt.b,ge),R.copy(zt),v=ge),y=I,V=!1}function Bt(I,ot){I.side===qe?dt(i.CULL_FACE):K(i.CULL_FACE);let st=I.side===pn;ot&&(st=!st),vt(st),I.blending===yi&&I.transparent===!1?le($e):le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let wt=I.stencilWrite;p.setTest(wt),wt&&(p.setMask(I.stencilWriteMask),p.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),p.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),St(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Vt(I){I!==R1?(K(i.CULL_FACE),I!==D&&(I===$2?i.cullFace(i.BACK):I===D1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),D=I}function ce(I){I!==A&&(J&&i.lineWidth(I),A=I)}function St(I,ot,st){I?(K(i.POLYGON_OFFSET_FILL),(_!==ot||$!==st)&&(i.polygonOffset(ot,st),_=ot,$=st)):dt(i.POLYGON_OFFSET_FILL)}function Jt(I){I?K(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=i.TEXTURE0+F-1),et!==I&&(i.activeTexture(I),et=I)}function Ee(I,ot,st){st===void 0&&(et===null?st=i.TEXTURE0+F-1:st=et);let wt=ft[st];wt===void 0&&(wt={type:void 0,texture:void 0},ft[st]=wt),(wt.type!==I||wt.texture!==ot)&&(et!==st&&(i.activeTexture(st),et=st),i.bindTexture(I,ot||G[I]),wt.type=I,wt.texture=ot)}function O(){let I=ft[et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){$t.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function At(I){ie.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function xt(I,ot){let st=u.get(ot);st===void 0&&(st=new WeakMap,u.set(ot,st));let wt=st.get(I);wt===void 0&&(wt=i.getUniformBlockIndex(ot,I.name),st.set(I,wt))}function ut(I,ot){let wt=u.get(ot).get(I);s.get(ot)!==wt&&(i.uniformBlockBinding(ot,wt,I.__bindingPointIndex),s.set(ot,wt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},et=null,ft={},l={},h=new WeakMap,c=[],d=null,T=!1,y=null,b=null,E=null,m=null,g=null,L=null,U=null,R=new mt(0,0,0),v=0,V=!1,S=null,D=null,A=null,_=null,$=null,$t.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),p.reset()}return{buffers:{color:r,depth:a,stencil:p},enable:K,disable:dt,bindFramebuffer:Ot,drawBuffers:Tt,useProgram:Gt,setBlending:le,setMaterial:Bt,setFlipSided:vt,setCullFace:Vt,setLineWidth:ce,setPolygonOffset:St,setScissorTest:Jt,activeTexture:Oe,bindTexture:Ee,unbindTexture:O,compressedTexImage2D:w,compressedTexImage3D:B,texImage2D:Ct,texImage3D:rt,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:pt,texStorage3D:Et,texSubImage2D:Y,texSubImage3D:q,compressedTexSubImage2D:Q,compressedTexSubImage3D:Pt,scissor:ht,viewport:At,reset:Ht}}function Pg(i,t,e,n,o,r,a){let p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,f=new WeakMap,l,h=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(O,w){return c?new OffscreenCanvas(O,w):yr("canvas")}function T(O,w,B){let Y=1,q=Ee(O);if((q.width>B||q.height>B)&&(Y=B/Math.max(q.width,q.height)),Y<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Q=Math.floor(Y*q.width),Pt=Math.floor(Y*q.height);l===void 0&&(l=d(Q,Pt));let pt=w?d(Q,Pt):l;return pt.width=Q,pt.height=Pt,pt.getContext("2d").drawImage(O,0,0,Q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Q+"x"+Pt+")."),pt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),O;return O}function y(O){return O.generateMipmaps}function b(O){i.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function m(O,w,B,Y,q=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Q=w;if(w===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),w===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),w===i.RGBA){let Pt=q?Ta:Yt.getTransfer(Y);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=Pt===re?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(O,w){let B;return O?w===null||w===Go||w===Wo?B=i.DEPTH24_STENCIL8:w===_n?B=i.DEPTH32F_STENCIL8:w===_r&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Go||w===Wo?B=i.DEPTH_COMPONENT24:w===_n?B=i.DEPTH_COMPONENT32F:w===_r&&(B=i.DEPTH_COMPONENT16),B}function L(O,w){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==_e&&O.minFilter!==Qe?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function U(O){let w=O.target;w.removeEventListener("dispose",U),v(w),w.isVideoTexture&&f.delete(w)}function R(O){let w=O.target;w.removeEventListener("dispose",R),S(w)}function v(O){let w=n.get(O);if(w.__webglInit===void 0)return;let B=O.source,Y=h.get(B);if(Y){let q=Y[w.__cacheKey];q.usedTimes--,q.usedTimes===0&&V(O),Object.keys(Y).length===0&&h.delete(B)}n.remove(O)}function V(O){let w=n.get(O);i.deleteTexture(w.__webglTexture);let B=O.source,Y=h.get(B);delete Y[w.__cacheKey],a.memory.textures--}function S(O){let w=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let q=0;q<w.__webglFramebuffer[Y].length;q++)i.deleteFramebuffer(w.__webglFramebuffer[Y][q]);else i.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[Y]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let B=O.textures;for(let Y=0,q=B.length;Y<q;Y++){let Q=n.get(B[Y]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(O)}let D=0;function A(){D=0}function _(){let O=D;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),D+=1,O}function $(O){let w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function F(O,w){let B=n.get(O);if(O.isVideoTexture&&Jt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&B.__version!==O.version){let Y=O.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,O,w);return}}else O.isExternalTexture&&(B.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+w)}function J(O,w){let B=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&B.__version!==O.version){G(B,O,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+w)}function tt(O,w){let B=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&B.__version!==O.version){G(B,O,w);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+w)}function z(O,w){let B=n.get(O);if(O.version>0&&B.__version!==O.version){K(B,O,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+w)}let et={[fn]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[br]:i.MIRRORED_REPEAT},ft={[_e]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[Ai]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[dn]:i.LINEAR_MIPMAP_LINEAR},yt={[nh]:i.NEVER,[sh]:i.ALWAYS,[oh]:i.LESS,[G2]:i.LEQUAL,[ih]:i.EQUAL,[ph]:i.GEQUAL,[rh]:i.GREATER,[ah]:i.NOTEQUAL};function _t(O,w){if(w.type===_n&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Qe||w.magFilter===Ir||w.magFilter===Ai||w.magFilter===dn||w.minFilter===Qe||w.minFilter===Ir||w.minFilter===Ai||w.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,et[w.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,et[w.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,et[w.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ft[w.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ft[w.minFilter]),w.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,yt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_e||w.minFilter!==Ai&&w.minFilter!==dn||w.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $t(O,w){let B=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",U));let Y=w.source,q=h.get(Y);q===void 0&&(q={},h.set(Y,q));let Q=$(w);if(Q!==O.__cacheKey){q[Q]===void 0&&(q[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),q[Q].usedTimes++;let Pt=q[O.__cacheKey];Pt!==void 0&&(q[O.__cacheKey].usedTimes--,Pt.usedTimes===0&&V(w)),O.__cacheKey=Q,O.__webglTexture=q[Q].texture}return B}function ie(O,w,B){return Math.floor(Math.floor(O/B)/w)}function qt(O,w,B,Y){let Q=O.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,B,Y,w.data);else{Q.sort((rt,ht)=>rt.start-ht.start);let Pt=0;for(let rt=1;rt<Q.length;rt++){let ht=Q[Pt],At=Q[rt],xt=ht.start+ht.count,ut=ie(At.start,w.width,4),Ht=ie(ht.start,w.width,4);At.start<=xt+1&&ut===Ht&&ie(At.start+At.count-1,w.width,4)===ut?ht.count=Math.max(ht.count,At.start+At.count-ht.start):(++Pt,Q[Pt]=At)}Q.length=Pt+1;let pt=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let rt=0,ht=Q.length;rt<ht;rt++){let At=Q[rt],xt=Math.floor(At.start/4),ut=Math.ceil(At.count/4),Ht=xt%w.width,I=Math.floor(xt/w.width),ot=ut,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Ht,I,ot,st,B,Y,w.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function G(O,w,B){let Y=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=i.TEXTURE_3D);let q=$t(O,w),Q=w.source;e.bindTexture(Y,O.__webglTexture,i.TEXTURE0+B);let Pt=n.get(Q);if(Q.version!==Pt.__version||q===!0){e.activeTexture(i.TEXTURE0+B);let pt=Yt.getPrimaries(Yt.workingColorSpace),Et=w.colorSpace===Yn?null:Yt.getPrimaries(w.colorSpace),Ct=w.colorSpace===Yn||pt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let rt=T(w.image,!1,o.maxTextureSize);rt=Oe(w,rt);let ht=r.convert(w.format,w.colorSpace),At=r.convert(w.type),xt=m(w.internalFormat,ht,At,w.colorSpace,w.isVideoTexture);_t(Y,w);let ut,Ht=w.mipmaps,I=w.isVideoTexture!==!0,ot=Pt.__version===void 0||q===!0,st=Q.dataReady,wt=L(w,rt);if(w.isDepthTexture)xt=g(w.format===Ko,w.type),ot&&(I?e.texStorage2D(i.TEXTURE_2D,1,xt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,ht,At,null));else if(w.isDataTexture)if(Ht.length>0){I&&ot&&e.texStorage2D(i.TEXTURE_2D,wt,xt,Ht[0].width,Ht[0].height);for(let it=0,W=Ht.length;it<W;it++)ut=Ht[it],I?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,ht,At,ut.data):e.texImage2D(i.TEXTURE_2D,it,xt,ut.width,ut.height,0,ht,At,ut.data);w.generateMipmaps=!1}else I?(ot&&e.texStorage2D(i.TEXTURE_2D,wt,xt,rt.width,rt.height),st&&qt(w,rt,ht,At)):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,ht,At,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){I&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,xt,Ht[0].width,Ht[0].height,rt.depth);for(let it=0,W=Ht.length;it<W;it++)if(ut=Ht[it],w.format!==sn)if(ht!==null)if(I){if(st)if(w.layerUpdates.size>0){let Ut=il(ut.width,ut.height,w.format,w.type);for(let zt of w.layerUpdates){let ge=ut.data.subarray(zt*Ut/ut.data.BYTES_PER_ELEMENT,(zt+1)*Ut/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,zt,ut.width,ut.height,1,ht,ge)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,rt.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,xt,ut.width,ut.height,rt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,rt.depth,ht,At,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,xt,ut.width,ut.height,rt.depth,0,ht,At,ut.data)}else{I&&ot&&e.texStorage2D(i.TEXTURE_2D,wt,xt,Ht[0].width,Ht[0].height);for(let it=0,W=Ht.length;it<W;it++)ut=Ht[it],w.format!==sn?ht!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,it,xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,ht,At,ut.data):e.texImage2D(i.TEXTURE_2D,it,xt,ut.width,ut.height,0,ht,At,ut.data)}else if(w.isDataArrayTexture)if(I){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,xt,rt.width,rt.height,rt.depth),st)if(w.layerUpdates.size>0){let it=il(rt.width,rt.height,w.format,w.type);for(let W of w.layerUpdates){let Ut=rt.data.subarray(W*it/rt.data.BYTES_PER_ELEMENT,(W+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,rt.width,rt.height,1,ht,At,Ut)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ht,At,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,rt.width,rt.height,rt.depth,0,ht,At,rt.data);else if(w.isData3DTexture)I?(ot&&e.texStorage3D(i.TEXTURE_3D,wt,xt,rt.width,rt.height,rt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ht,At,rt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,rt.width,rt.height,rt.depth,0,ht,At,rt.data);else if(w.isFramebufferTexture){if(ot)if(I)e.texStorage2D(i.TEXTURE_2D,wt,xt,rt.width,rt.height);else{let it=rt.width,W=rt.height;for(let Ut=0;Ut<wt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,xt,it,W,0,ht,At,null),it>>=1,W>>=1}}else if(Ht.length>0){if(I&&ot){let it=Ee(Ht[0]);e.texStorage2D(i.TEXTURE_2D,wt,xt,it.width,it.height)}for(let it=0,W=Ht.length;it<W;it++)ut=Ht[it],I?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ht,At,ut):e.texImage2D(i.TEXTURE_2D,it,xt,ht,At,ut);w.generateMipmaps=!1}else if(I){if(ot){let it=Ee(rt);e.texStorage2D(i.TEXTURE_2D,wt,xt,it.width,it.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,At,rt)}else e.texImage2D(i.TEXTURE_2D,0,xt,ht,At,rt);y(w)&&b(Y),Pt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function K(O,w,B){if(w.image.length!==6)return;let Y=$t(O,w),q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+B);let Q=n.get(q);if(q.version!==Q.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);let Pt=Yt.getPrimaries(Yt.workingColorSpace),pt=w.colorSpace===Yn?null:Yt.getPrimaries(w.colorSpace),Et=w.colorSpace===Yn||Pt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Ct=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,ht=[];for(let W=0;W<6;W++)!Ct&&!rt?ht[W]=T(w.image[W],!0,o.maxCubemapSize):ht[W]=rt?w.image[W].image:w.image[W],ht[W]=Oe(w,ht[W]);let At=ht[0],xt=r.convert(w.format,w.colorSpace),ut=r.convert(w.type),Ht=m(w.internalFormat,xt,ut,w.colorSpace),I=w.isVideoTexture!==!0,ot=Q.__version===void 0||Y===!0,st=q.dataReady,wt=L(w,At);_t(i.TEXTURE_CUBE_MAP,w);let it;if(Ct){I&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Ht,At.width,At.height);for(let W=0;W<6;W++){it=ht[W].mipmaps;for(let Ut=0;Ut<it.length;Ut++){let zt=it[Ut];w.format!==sn?xt!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut,0,0,zt.width,zt.height,xt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut,Ht,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut,0,0,zt.width,zt.height,xt,ut,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut,Ht,zt.width,zt.height,0,xt,ut,zt.data)}}}else{if(it=w.mipmaps,I&&ot){it.length>0&&wt++;let W=Ee(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Ht,W.width,W.height)}for(let W=0;W<6;W++)if(rt){I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ht[W].width,ht[W].height,xt,ut,ht[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ht,ht[W].width,ht[W].height,0,xt,ut,ht[W].data);for(let Ut=0;Ut<it.length;Ut++){let ge=it[Ut].image[W].image;I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut+1,0,0,ge.width,ge.height,xt,ut,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut+1,Ht,ge.width,ge.height,0,xt,ut,ge.data)}}else{I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,xt,ut,ht[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ht,xt,ut,ht[W]);for(let Ut=0;Ut<it.length;Ut++){let zt=it[Ut];I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut+1,0,0,xt,ut,zt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut+1,Ht,xt,ut,zt.image[W])}}}y(w)&&b(i.TEXTURE_CUBE_MAP),Q.__version=q.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function dt(O,w,B,Y,q,Q){let Pt=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),Et=m(B.internalFormat,Pt,pt,B.colorSpace),Ct=n.get(w),rt=n.get(B);if(rt.__renderTarget=w,!Ct.__hasExternalTextures){let ht=Math.max(1,w.width>>Q),At=Math.max(1,w.height>>Q);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,Q,Et,ht,At,w.depth,0,Pt,pt,null):e.texImage2D(q,Q,Et,ht,At,0,Pt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),St(w)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,q,rt.__webglTexture,0,ce(w)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,q,rt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(O,w,B){if(i.bindRenderbuffer(i.RENDERBUFFER,O),w.depthBuffer){let Y=w.depthTexture,q=Y&&Y.isDepthTexture?Y.type:null,Q=g(w.stencilBuffer,q),Pt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ce(w);St(w)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Q,w.width,w.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,O)}else{let Y=w.textures;for(let q=0;q<Y.length;q++){let Q=Y[q],Pt=r.convert(Q.format,Q.colorSpace),pt=r.convert(Q.type),Et=m(Q.internalFormat,Pt,pt,Q.colorSpace),Ct=ce(w);B&&St(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Et,w.width,w.height):St(w)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Et,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Et,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let q=Y.__webglTexture,Q=ce(w);if(w.depthTexture.format===dr)St(w)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(w.depthTexture.format===Ko)St(w)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Gt(O){let w=n.get(O),B=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){let Y=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){let q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",q)};Y.addEventListener("dispose",q),w.__depthDisposeCallback=q}w.__boundDepthTexture=Y}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let Y=O.texture.mipmaps;Y&&Y.length>0?Tt(w.__webglFramebuffer[0],O):Tt(w.__webglFramebuffer,O)}else if(B){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ot(w.__webglDepthbuffer[Y],O,!1);else{let q=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Q)}}else{let Y=O.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ot(w.__webglDepthbuffer,O,!1);else{let q=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(O,w,B){let Y=n.get(O);w!==void 0&&dt(Y.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Gt(O)}function M(O){let w=O.texture,B=n.get(O),Y=n.get(w);O.addEventListener("dispose",R);let q=O.textures,Q=O.isWebGLCubeRenderTarget===!0,Pt=q.length>1;if(Pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=w.version,a.memory.textures++),Q){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Et=0;Et<w.mipmaps.length;Et++)B.__webglFramebuffer[pt][Et]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let pt=0,Et=q.length;pt<Et;pt++){let Ct=n.get(q[pt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&St(O)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<q.length;pt++){let Et=q[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);let Ct=r.convert(Et.format,Et.colorSpace),rt=r.convert(Et.type),ht=m(Et.internalFormat,Ct,rt,Et.colorSpace,O.isXRRenderTarget===!0),At=ce(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ht,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(B.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),_t(i.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Et=0;Et<w.mipmaps.length;Et++)dt(B.__webglFramebuffer[pt][Et],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et);else dt(B.__webglFramebuffer[pt],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);y(w)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let pt=0,Et=q.length;pt<Et;pt++){let Ct=q[pt],rt=n.get(Ct),ht=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ht=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,rt.__webglTexture),_t(ht,Ct),dt(B.__webglFramebuffer,O,Ct,i.COLOR_ATTACHMENT0+pt,ht,0),y(Ct)&&b(ht)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(pt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),_t(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let Et=0;Et<w.mipmaps.length;Et++)dt(B.__webglFramebuffer[Et],O,w,i.COLOR_ATTACHMENT0,pt,Et);else dt(B.__webglFramebuffer,O,w,i.COLOR_ATTACHMENT0,pt,0);y(w)&&b(pt),e.unbindTexture()}O.depthBuffer&&Gt(O)}function le(O){let w=O.textures;for(let B=0,Y=w.length;B<Y;B++){let q=w[B];if(y(q)){let Q=E(O),Pt=n.get(q).__webglTexture;e.bindTexture(Q,Pt),b(Q),e.unbindTexture()}}}let Bt=[],vt=[];function Vt(O){if(O.samples>0){if(St(O)===!1){let w=O.textures,B=O.width,Y=O.height,q=i.COLOR_BUFFER_BIT,Q=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(O),pt=w.length>1;if(pt)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let Et=O.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ct]);let rt=n.get(w[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,q,i.NEAREST),s===!0&&(Bt.length=0,vt.length=0,Bt.push(i.COLOR_ATTACHMENT0+Ct),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Bt.push(Q),vt.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ct]);let rt=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&s){let w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ce(O){return Math.min(o.maxSamples,O.samples)}function St(O){let w=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Jt(O){let w=a.render.frame;f.get(O)!==w&&(f.set(O,w),O.update())}function Oe(O,w){let B=O.colorSpace,Y=O.format,q=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||B!==je&&B!==Yn&&(Yt.getTransfer(B)===re?(Y!==sn||q!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Ee(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=_,this.resetTextureUnits=A,this.setTexture2D=F,this.setTexture2DArray=J,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=ve,this.setupRenderTarget=M,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=St}function Lg(i,t){function e(n,o=Yn){let r,a=Yt.getTransfer(o);if(n===Ln)return i.UNSIGNED_BYTE;if(n===lu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===J2)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===z2)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===N2)return i.BYTE;if(n===X2)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===fu)return i.INT;if(n===Go)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Q2)return i.ALPHA;if(n===j2)return i.RGB;if(n===sn)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===Ko)return i.DEPTH_STENCIL;if(n===hu)return i.RED;if(n===bu)return i.RED_INTEGER;if(n===Z2)return i.RG;if(n===du)return i.RG_INTEGER;if(n===yu)return i.RGBA_INTEGER;if(n===op||n===ip||n===rp||n===ap)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===op)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ip)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rp)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ap)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===op)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ip)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rp)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ap)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mu||n===gu||n===Tu||n===Eu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vu||n===Su||n===wu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vu||n===Su)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pu||n===Lu||n===Uu||n===Cu||n===xu||n===Ou||n===Ru||n===Du||n===vu||n===Mu||n===Au||n===Iu||n===_u||n===$u)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ou)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ru)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Du)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Iu)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_u)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$u)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hu||n===ku||n===Bu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hu)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fu||n===Nu||n===Xu||n===Ju)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`,ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ma(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Ug,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gl=class extends eo{constructor(t,e){super();let n=this,o=null,r=1,a=null,p="local-floor",s=1,u=null,f=null,l=null,h=null,c=null,d=null,T=typeof XRWebGLBinding<"u",y=new ml,b={},E=e.getContextAttributes(),m=null,g=null,L=[],U=[],R=new nt,v=null,V=new Ae;V.viewport=new ne;let S=new Ae;S.viewport=new ne;let D=[V,S],A=new Js,_=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=L[G];return K===void 0&&(K=new Er,L[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=L[G];return K===void 0&&(K=new Er,L[G]=K),K.getGripSpace()},this.getHand=function(G){let K=L[G];return K===void 0&&(K=new Er,L[G]=K),K.getHandSpace()};function F(G){let K=U.indexOf(G.inputSource);if(K===-1)return;let dt=L[K];dt!==void 0&&(dt.update(G.inputSource,G.frame,u||a),dt.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",tt);for(let G=0;G<L.length;G++){let K=U[G];K!==null&&(U[G]=null,L[G].disconnect(K))}_=null,$=null,y.reset();for(let G in b)delete b[G];t.setRenderTarget(m),c=null,h=null,l=null,o=null,g=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){p=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:c},this.getBinding=function(){return l===null&&T&&(l=new XRWebGLBinding(o,e)),l},this.getFrame=function(){return d},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(m=t.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",J),o.addEventListener("inputsourceschange",tt),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Ot=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=E.stencil?Ko:dr,Ot=E.stencil?Wo:Go);let Gt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};l=this.getBinding(),h=l.createProjectionLayer(Gt),o.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),g=new Ze(h.textureWidth,h.textureHeight,{format:sn,type:Ln,depthTexture:new wi(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let dt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(o,e,dt),o.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),g=new Ze(c.framebufferWidth,c.framebufferHeight,{format:sn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(s),u=null,a=await o.requestReferenceSpace(p),qt.setContext(o),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function tt(G){for(let K=0;K<G.removed.length;K++){let dt=G.removed[K],Ot=U.indexOf(dt);Ot>=0&&(U[Ot]=null,L[Ot].disconnect(dt))}for(let K=0;K<G.added.length;K++){let dt=G.added[K],Ot=U.indexOf(dt);if(Ot===-1){for(let Gt=0;Gt<L.length;Gt++)if(Gt>=U.length){U.push(dt),Ot=Gt;break}else if(U[Gt]===null){U[Gt]=dt,Ot=Gt;break}if(Ot===-1)break}let Tt=L[Ot];Tt&&Tt.connect(dt)}}let z=new x,et=new x;function ft(G,K,dt){z.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(dt.matrixWorld);let Ot=z.distanceTo(et),Tt=K.projectionMatrix.elements,Gt=dt.projectionMatrix.elements,ve=Tt[14]/(Tt[10]-1),M=Tt[14]/(Tt[10]+1),le=(Tt[9]+1)/Tt[5],Bt=(Tt[9]-1)/Tt[5],vt=(Tt[8]-1)/Tt[0],Vt=(Gt[8]+1)/Gt[0],ce=ve*vt,St=ve*Vt,Jt=Ot/(-vt+Vt),Oe=Jt*-vt;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Oe),G.translateZ(Jt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ee=ve+Jt,O=M+Jt,w=ce-Oe,B=St+(Ot-Oe),Y=le*M/O*Ee,q=Bt*M/O*Ee;G.projectionMatrix.makePerspective(w,B,Y,q,Ee,O),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function yt(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;let K=G.near,dt=G.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),A.near=S.near=V.near=K,A.far=S.far=V.far=dt,(_!==A.near||$!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),_=A.near,$=A.far),A.layers.mask=G.layers.mask|6,V.layers.mask=A.layers.mask&3,S.layers.mask=A.layers.mask&5;let Ot=G.parent,Tt=A.cameras;yt(A,Ot);for(let Gt=0;Gt<Tt.length;Gt++)yt(Tt[Gt],Ot);Tt.length===2?ft(A,V,S):A.projectionMatrix.copy(V.projectionMatrix),_t(G,A,Ot)};function _t(G,K,dt){dt===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(dt.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ei*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&c===null))return s},this.setFoveation=function(G){s=G,h!==null&&(h.fixedFoveation=G),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(A)},this.getCameraTexture=function(G){return b[G]};let $t=null;function ie(G,K){if(f=K.getViewerPose(u||a),d=K,f!==null){let dt=f.views;c!==null&&(t.setRenderTargetFramebuffer(g,c.framebuffer),t.setRenderTarget(g));let Ot=!1;dt.length!==A.cameras.length&&(A.cameras.length=0,Ot=!0);for(let M=0;M<dt.length;M++){let le=dt[M],Bt=null;if(c!==null)Bt=c.getViewport(le);else{let Vt=l.getViewSubImage(h,le);Bt=Vt.viewport,M===0&&(t.setRenderTargetTextures(g,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(g))}let vt=D[M];vt===void 0&&(vt=new Ae,vt.layers.enable(M),vt.viewport=new ne,D[M]=vt),vt.matrix.fromArray(le.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(le.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),M===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ot===!0&&A.cameras.push(vt)}let Tt=o.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){l=n.getBinding();let M=l.getDepthInformation(dt[0]);M&&M.isValid&&M.texture&&y.init(M,o.renderState)}if(Tt&&Tt.includes("camera-access")&&T){t.state.unbindTexture(),l=n.getBinding();for(let M=0;M<dt.length;M++){let le=dt[M].camera;if(le){let Bt=b[le];Bt||(Bt=new Ma,b[le]=Bt);let vt=l.getCameraImage(le);Bt.sourceTexture=vt}}}}for(let dt=0;dt<L.length;dt++){let Ot=U[dt],Tt=L[dt];Ot!==null&&Tt!==void 0&&Tt.update(Ot,K,u||a)}$t&&$t(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),d=null}let qt=new Xh;qt.setAnimationLoop(ie),this.setAnimationLoop=function(G){$t=G},this.dispose=function(){}}},$i=new wn,xg=new Dt;function Og(i,t){function e(y,b){y.matrixAutoUpdate===!0&&y.updateMatrix(),b.value.copy(y.matrix)}function n(y,b){b.color.getRGB(y.fogColor.value,tl(i)),b.isFog?(y.fogNear.value=b.near,y.fogFar.value=b.far):b.isFogExp2&&(y.fogDensity.value=b.density)}function o(y,b,E,m,g){b.isMeshBasicMaterial||b.isMeshLambertMaterial?r(y,b):b.isMeshToonMaterial?(r(y,b),l(y,b)):b.isMeshPhongMaterial?(r(y,b),f(y,b)):b.isMeshStandardMaterial?(r(y,b),h(y,b),b.isMeshPhysicalMaterial&&c(y,b,g)):b.isMeshMatcapMaterial?(r(y,b),d(y,b)):b.isMeshDepthMaterial?r(y,b):b.isMeshDistanceMaterial?(r(y,b),T(y,b)):b.isMeshNormalMaterial?r(y,b):b.isLineBasicMaterial?(a(y,b),b.isLineDashedMaterial&&p(y,b)):b.isPointsMaterial?s(y,b,E,m):b.isSpriteMaterial?u(y,b):b.isShadowMaterial?(y.color.value.copy(b.color),y.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function r(y,b){y.opacity.value=b.opacity,b.color&&y.diffuse.value.copy(b.color),b.emissive&&y.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(y.map.value=b.map,e(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,e(b.alphaMap,y.alphaMapTransform)),b.bumpMap&&(y.bumpMap.value=b.bumpMap,e(b.bumpMap,y.bumpMapTransform),y.bumpScale.value=b.bumpScale,b.side===pn&&(y.bumpScale.value*=-1)),b.normalMap&&(y.normalMap.value=b.normalMap,e(b.normalMap,y.normalMapTransform),y.normalScale.value.copy(b.normalScale),b.side===pn&&y.normalScale.value.negate()),b.displacementMap&&(y.displacementMap.value=b.displacementMap,e(b.displacementMap,y.displacementMapTransform),y.displacementScale.value=b.displacementScale,y.displacementBias.value=b.displacementBias),b.emissiveMap&&(y.emissiveMap.value=b.emissiveMap,e(b.emissiveMap,y.emissiveMapTransform)),b.specularMap&&(y.specularMap.value=b.specularMap,e(b.specularMap,y.specularMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);let E=t.get(b),m=E.envMap,g=E.envMapRotation;m&&(y.envMap.value=m,$i.copy(g),$i.x*=-1,$i.y*=-1,$i.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),y.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler($i)),y.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=b.reflectivity,y.ior.value=b.ior,y.refractionRatio.value=b.refractionRatio),b.lightMap&&(y.lightMap.value=b.lightMap,y.lightMapIntensity.value=b.lightMapIntensity,e(b.lightMap,y.lightMapTransform)),b.aoMap&&(y.aoMap.value=b.aoMap,y.aoMapIntensity.value=b.aoMapIntensity,e(b.aoMap,y.aoMapTransform))}function a(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,b.map&&(y.map.value=b.map,e(b.map,y.mapTransform))}function p(y,b){y.dashSize.value=b.dashSize,y.totalSize.value=b.dashSize+b.gapSize,y.scale.value=b.scale}function s(y,b,E,m){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.size.value=b.size*E,y.scale.value=m*.5,b.map&&(y.map.value=b.map,e(b.map,y.uvTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,e(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function u(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.rotation.value=b.rotation,b.map&&(y.map.value=b.map,e(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,e(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function f(y,b){y.specular.value.copy(b.specular),y.shininess.value=Math.max(b.shininess,1e-4)}function l(y,b){b.gradientMap&&(y.gradientMap.value=b.gradientMap)}function h(y,b){y.metalness.value=b.metalness,b.metalnessMap&&(y.metalnessMap.value=b.metalnessMap,e(b.metalnessMap,y.metalnessMapTransform)),y.roughness.value=b.roughness,b.roughnessMap&&(y.roughnessMap.value=b.roughnessMap,e(b.roughnessMap,y.roughnessMapTransform)),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)}function c(y,b,E){y.ior.value=b.ior,b.sheen>0&&(y.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),y.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(y.sheenColorMap.value=b.sheenColorMap,e(b.sheenColorMap,y.sheenColorMapTransform)),b.sheenRoughnessMap&&(y.sheenRoughnessMap.value=b.sheenRoughnessMap,e(b.sheenRoughnessMap,y.sheenRoughnessMapTransform))),b.clearcoat>0&&(y.clearcoat.value=b.clearcoat,y.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(y.clearcoatMap.value=b.clearcoatMap,e(b.clearcoatMap,y.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,e(b.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(y.clearcoatNormalMap.value=b.clearcoatNormalMap,e(b.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===pn&&y.clearcoatNormalScale.value.negate())),b.dispersion>0&&(y.dispersion.value=b.dispersion),b.iridescence>0&&(y.iridescence.value=b.iridescence,y.iridescenceIOR.value=b.iridescenceIOR,y.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(y.iridescenceMap.value=b.iridescenceMap,e(b.iridescenceMap,y.iridescenceMapTransform)),b.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=b.iridescenceThicknessMap,e(b.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),b.transmission>0&&(y.transmission.value=b.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),b.transmissionMap&&(y.transmissionMap.value=b.transmissionMap,e(b.transmissionMap,y.transmissionMapTransform)),y.thickness.value=b.thickness,b.thicknessMap&&(y.thicknessMap.value=b.thicknessMap,e(b.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=b.attenuationDistance,y.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(y.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(y.anisotropyMap.value=b.anisotropyMap,e(b.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=b.specularIntensity,y.specularColor.value.copy(b.specularColor),b.specularColorMap&&(y.specularColorMap.value=b.specularColorMap,e(b.specularColorMap,y.specularColorMapTransform)),b.specularIntensityMap&&(y.specularIntensityMap.value=b.specularIntensityMap,e(b.specularIntensityMap,y.specularIntensityMapTransform))}function d(y,b){b.matcap&&(y.matcap.value=b.matcap)}function T(y,b){let E=t.get(b).light;y.referencePosition.value.setFromMatrixPosition(E.matrixWorld),y.nearDistance.value=E.shadow.camera.near,y.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Rg(i,t,e,n){let o={},r={},a=[],p=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function s(E,m){let g=m.program;n.uniformBlockBinding(E,g)}function u(E,m){let g=o[E.id];g===void 0&&(d(E),g=f(E),o[E.id]=g,E.addEventListener("dispose",y));let L=m.program;n.updateUBOMapping(E,L);let U=t.render.frame;r[E.id]!==U&&(h(E),r[E.id]=U)}function f(E){let m=l();E.__bindingPointIndex=m;let g=i.createBuffer(),L=E.__size,U=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,L,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,g),g}function l(){for(let E=0;E<p;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let m=o[E.id],g=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let U=0,R=g.length;U<R;U++){let v=Array.isArray(g[U])?g[U]:[g[U]];for(let V=0,S=v.length;V<S;V++){let D=v[V];if(c(D,U,V,L)===!0){let A=D.__offset,_=Array.isArray(D.value)?D.value:[D.value],$=0;for(let F=0;F<_.length;F++){let J=_[F],tt=T(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,A+$,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,$),$+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(E,m,g,L){let U=E.value,R=m+"_"+g;if(L[R]===void 0)return typeof U=="number"||typeof U=="boolean"?L[R]=U:L[R]=U.clone(),!0;{let v=L[R];if(typeof U=="number"||typeof U=="boolean"){if(v!==U)return L[R]=U,!0}else if(v.equals(U)===!1)return v.copy(U),!0}return!1}function d(E){let m=E.uniforms,g=0,L=16;for(let R=0,v=m.length;R<v;R++){let V=Array.isArray(m[R])?m[R]:[m[R]];for(let S=0,D=V.length;S<D;S++){let A=V[S],_=Array.isArray(A.value)?A.value:[A.value];for(let $=0,F=_.length;$<F;$++){let J=_[$],tt=T(J),z=g%L,et=z%tt.boundary,ft=z+et;g+=et,ft!==0&&L-ft<tt.storage&&(g+=L-ft),A.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=g,g+=tt.storage}}}let U=g%L;return U>0&&(g+=L-U),E.__size=g,E.__cache={},this}function T(E){let m={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(m.boundary=4,m.storage=4):E.isVector2?(m.boundary=8,m.storage=8):E.isVector3||E.isColor?(m.boundary=16,m.storage=12):E.isVector4?(m.boundary=16,m.storage=16):E.isMatrix3?(m.boundary=48,m.storage=48):E.isMatrix4?(m.boundary=64,m.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),m}function y(E){let m=E.target;m.removeEventListener("dispose",y);let g=a.indexOf(m.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(o[m.id]),delete o[m.id],delete r[m.id]}function b(){for(let E in o)i.deleteBuffer(o[E]);a=[],o={},r={}}return{bind:s,update:u,dispose:b}}var Ku=class{constructor(t={}){let{canvas:e=uh(),context:n=null,depth:o=!0,stencil:r=!1,alpha:a=!1,antialias:p=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;let d=new Uint32Array(4),T=new Int32Array(4),y=null,b=null,E=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mo,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,L=!1;this._outputColorSpace=Te;let U=0,R=0,v=null,V=-1,S=null,D=new ne,A=new ne,_=null,$=new mt(0),F=0,J=e.width,tt=e.height,z=1,et=null,ft=null,yt=new ne(0,0,J,tt),_t=new ne(0,0,J,tt),$t=!1,ie=new Pr,qt=!1,G=!1,K=new Dt,dt=new x,Ot=new ne,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function ve(){return v===null?z:1}let M=n;function le(P,H){return e.getContext(P,H)}try{let P={alpha:!0,depth:o,stencil:r,antialias:p,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",it,!1),M===null){let H="webgl2";if(M=le(H,P),M===null)throw le(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Bt,vt,Vt,ce,St,Jt,Oe,Ee,O,w,B,Y,q,Q,Pt,pt,Et,Ct,rt,ht,At,xt,ut,Ht;function I(){Bt=new Z5(M),Bt.init(),xt=new Lg(M,Bt),vt=new F5(M,Bt,t,xt),Vt=new wg(M,Bt),vt.reversedDepthBuffer&&h&&Vt.buffers.depth.setReversed(!0),ce=new W5(M),St=new fg,Jt=new Pg(M,Bt,Vt,St,vt,xt,ce),Oe=new X5(g),Ee=new j5(g),O=new om(M),ut=new k5(M,O),w=new Y5(M,O,ce,ut),B=new q5(M,w,O,ce),rt=new K5(M,vt,Jt),pt=new N5(St),Y=new ug(g,Oe,Ee,Bt,vt,ut,pt),q=new Og(g,St),Q=new cg,Pt=new gg(Bt),Ct=new H5(g,Oe,Ee,Vt,B,c,s),Et=new Vg(g,B,vt),Ht=new Rg(M,ce,vt,Vt),ht=new B5(M,Bt,ce),At=new G5(M,Bt,ce),ce.programs=Y.programs,g.capabilities=vt,g.extensions=Bt,g.properties=St,g.renderLists=Q,g.shadowMap=Et,g.state=Vt,g.info=ce}I();let ot=new gl(g,M);this.xr=ot,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let P=Bt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Bt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(J,tt,!1))},this.getSize=function(P){return P.set(J,tt)},this.setSize=function(P,H,N=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=P,tt=H,e.width=Math.floor(P*z),e.height=Math.floor(H*z),N===!0&&(e.style.width=P+"px",e.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(J*z,tt*z).floor()},this.setDrawingBufferSize=function(P,H,N){J=P,tt=H,z=N,e.width=Math.floor(P*N),e.height=Math.floor(H*N),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(yt)},this.setViewport=function(P,H,N,X){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,H,N,X),Vt.viewport(D.copy(yt).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(_t)},this.setScissor=function(P,H,N,X){P.isVector4?_t.set(P.x,P.y,P.z,P.w):_t.set(P,H,N,X),Vt.scissor(A.copy(_t).multiplyScalar(z).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(P){Vt.setScissorTest($t=P)},this.setOpaqueSort=function(P){et=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,N=!0){let X=0;if(P){let k=!1;if(v!==null){let at=v.texture.format;k=at===yu||at===du||at===bu}if(k){let at=v.texture.type,bt=at===Ln||at===Go||at===_r||at===Wo||at===lu||at===cu,Lt=Ct.getClearColor(),gt=Ct.getClearAlpha(),It=Lt.r,kt=Lt.g,Rt=Lt.b;bt?(d[0]=It,d[1]=kt,d[2]=Rt,d[3]=gt,M.clearBufferuiv(M.COLOR,0,d)):(T[0]=It,T[1]=kt,T[2]=Rt,T[3]=gt,M.clearBufferiv(M.COLOR,0,T))}else X|=M.COLOR_BUFFER_BIT}H&&(X|=M.DEPTH_BUFFER_BIT),N&&(X|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Ct.dispose(),Q.dispose(),Pt.dispose(),St.dispose(),Oe.dispose(),Ee.dispose(),B.dispose(),ut.dispose(),Ht.dispose(),Y.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Gn),ot.removeEventListener("sessionend",xc),pi.stop()};function st(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let P=ce.autoReset,H=Et.enabled,N=Et.autoUpdate,X=Et.needsUpdate,k=Et.type;I(),ce.autoReset=P,Et.enabled=H,Et.autoUpdate=N,Et.needsUpdate=X,Et.type=k}function it(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function W(P){let H=P.target;H.removeEventListener("dispose",W),Ut(H)}function Ut(P){zt(P),St.remove(P)}function zt(P){let H=St.get(P).programs;H!==void 0&&(H.forEach(function(N){Y.releaseProgram(N)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,N,X,k,at){H===null&&(H=Tt);let bt=k.isMesh&&k.matrixWorld.determinant()<0,Lt=td(P,H,N,X,k);Vt.setMaterial(X,bt);let gt=N.index,It=1;if(X.wireframe===!0){if(gt=w.getWireframeAttribute(N),gt===void 0)return;It=2}let kt=N.drawRange,Rt=N.attributes.position,Kt=kt.start*It,he=(kt.start+kt.count)*It;at!==null&&(Kt=Math.max(Kt,at.start*It),he=Math.min(he,(at.start+at.count)*It)),gt!==null?(Kt=Math.max(Kt,0),he=Math.min(he,gt.count)):Rt!=null&&(Kt=Math.max(Kt,0),he=Math.min(he,Rt.count));let Re=he-Kt;if(Re<0||Re===1/0)return;ut.setup(k,X,Lt,N,gt);let Ve,ye=ht;if(gt!==null&&(Ve=O.get(gt),ye=At,ye.setIndex(Ve)),k.isMesh)X.wireframe===!0?(Vt.setLineWidth(X.wireframeLinewidth*ve()),ye.setMode(M.LINES)):ye.setMode(M.TRIANGLES);else if(k.isLine){let Mt=X.linewidth;Mt===void 0&&(Mt=1),Vt.setLineWidth(Mt*ve()),k.isLineSegments?ye.setMode(M.LINES):k.isLineLoop?ye.setMode(M.LINE_LOOP):ye.setMode(M.LINE_STRIP)}else k.isPoints?ye.setMode(M.POINTS):k.isSprite&&ye.setMode(M.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Mt=k._multiDrawStarts,Pe=k._multiDrawCounts,te=k._multiDrawCount,mn=gt?O.get(gt).bytesPerElement:1,zi=St.get(X).currentProgram.getUniforms();for(let gn=0;gn<te;gn++)zi.setValue(M,"_gl_DrawID",gn),ye.render(Mt[gn]/mn,Pe[gn])}else if(k.isInstancedMesh)ye.renderInstances(Kt,Re,k.count);else if(N.isInstancedBufferGeometry){let Mt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Pe=Math.min(N.instanceCount,Mt);ye.renderInstances(Kt,Re,Pe)}else ye.render(Kt,Re)};function ge(P,H,N){P.transparent===!0&&P.side===qe&&P.forceSinglePass===!1?(P.side=pn,P.needsUpdate=!0,_p(P,H,N),P.side=jn,P.needsUpdate=!0,_p(P,H,N),P.side=qe):_p(P,H,N)}this.compile=function(P,H,N=null){N===null&&(N=P),b=Pt.get(N),b.init(H),m.push(b),N.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),P!==N&&P.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();let X=new Set;return P.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let at=k.material;if(at)if(Array.isArray(at))for(let bt=0;bt<at.length;bt++){let Lt=at[bt];ge(Lt,N,k),X.add(Lt)}else ge(at,N,k),X.add(at)}),b=m.pop(),X},this.compileAsync=function(P,H,N=null){let X=this.compile(P,H,N);return new Promise(k=>{function at(){if(X.forEach(function(bt){St.get(bt).currentProgram.isReady()&&X.delete(bt)}),X.size===0){k(P);return}setTimeout(at,10)}Bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let pe=null;function yo(P){pe&&pe(P)}function Gn(){pi.stop()}function xc(){pi.start()}let pi=new Xh;pi.setAnimationLoop(yo),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(P){pe=P,ot.setAnimationLoop(P),P===null?pi.stop():pi.start()},ot.addEventListener("sessionstart",Gn),ot.addEventListener("sessionend",xc),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(H),H=ot.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,H,v),b=Pt.get(P,m.length),b.init(H),m.push(b),K.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(K,Qn,H.reversedDepth),G=this.localClippingEnabled,qt=pt.init(this.clippingPlanes,G),y=Q.get(P,E.length),y.init(),E.push(y),ot.enabled===!0&&ot.isPresenting===!0){let at=g.xr.getDepthSensingMesh();at!==null&&$f(at,H,-1/0,g.sortObjects)}$f(P,H,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(et,ft),Gt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(y,P),this.info.render.frame++,qt===!0&&pt.beginShadows();let N=b.state.shadowsArray;Et.render(N,P,H),qt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=y.opaque,k=y.transmissive;if(b.setupLights(),H.isArrayCamera){let at=H.cameras;if(k.length>0)for(let bt=0,Lt=at.length;bt<Lt;bt++){let gt=at[bt];Rc(X,k,P,gt)}Gt&&Ct.render(P);for(let bt=0,Lt=at.length;bt<Lt;bt++){let gt=at[bt];Oc(y,P,gt,gt.viewport)}}else k.length>0&&Rc(X,k,P,H),Gt&&Ct.render(P),Oc(y,P,H);v!==null&&R===0&&(Jt.updateMultisampleRenderTarget(v),Jt.updateRenderTargetMipmap(v)),P.isScene===!0&&P.onAfterRender(g,P,H),ut.resetDefaultState(),V=-1,S=null,m.pop(),m.length>0?(b=m[m.length-1],qt===!0&&pt.setGlobalState(g.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function $f(P,H,N,X){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)N=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ie.intersectsSprite(P)){X&&Ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);let bt=B.update(P),Lt=P.material;Lt.visible&&y.push(P,bt,Lt,N,Ot.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ie.intersectsObject(P))){let bt=B.update(P),Lt=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ot.copy(P.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ot.copy(bt.boundingSphere.center)),Ot.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Lt)){let gt=bt.groups;for(let It=0,kt=gt.length;It<kt;It++){let Rt=gt[It],Kt=Lt[Rt.materialIndex];Kt&&Kt.visible&&y.push(P,bt,Kt,N,Ot.z,Rt)}}else Lt.visible&&y.push(P,bt,Lt,N,Ot.z,null)}}let at=P.children;for(let bt=0,Lt=at.length;bt<Lt;bt++)$f(at[bt],H,N,X)}function Oc(P,H,N,X){let k=P.opaque,at=P.transmissive,bt=P.transparent;b.setupLightsView(N),qt===!0&&pt.setGlobalState(g.clippingPlanes,N),X&&Vt.viewport(D.copy(X)),k.length>0&&Ip(k,H,N),at.length>0&&Ip(at,H,N),bt.length>0&&Ip(bt,H,N),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Rc(P,H,N,X){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[X.id]===void 0&&(b.state.transmissionRenderTarget[X.id]=new Ze(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Un:Ln,minFilter:dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let at=b.state.transmissionRenderTarget[X.id],bt=X.viewport||D;at.setSize(bt.z*g.transmissionResolutionScale,bt.w*g.transmissionResolutionScale);let Lt=g.getRenderTarget(),gt=g.getActiveCubeFace(),It=g.getActiveMipmapLevel();g.setRenderTarget(at),g.getClearColor($),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),g.clear(),Gt&&Ct.render(N);let kt=g.toneMapping;g.toneMapping=Mo;let Rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),qt===!0&&pt.setGlobalState(g.clippingPlanes,X),Ip(P,N,X),Jt.updateMultisampleRenderTarget(at),Jt.updateRenderTargetMipmap(at),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let he=0,Re=H.length;he<Re;he++){let Ve=H[he],ye=Ve.object,Mt=Ve.geometry,Pe=Ve.material,te=Ve.group;if(Pe.side===qe&&ye.layers.test(X.layers)){let mn=Pe.side;Pe.side=pn,Pe.needsUpdate=!0,Dc(ye,N,X,Mt,Pe,te),Pe.side=mn,Pe.needsUpdate=!0,Kt=!0}}Kt===!0&&(Jt.updateMultisampleRenderTarget(at),Jt.updateRenderTargetMipmap(at))}g.setRenderTarget(Lt,gt,It),g.setClearColor($,F),Rt!==void 0&&(X.viewport=Rt),g.toneMapping=kt}function Ip(P,H,N){let X=H.isScene===!0?H.overrideMaterial:null;for(let k=0,at=P.length;k<at;k++){let bt=P[k],Lt=bt.object,gt=bt.geometry,It=bt.group,kt=bt.material;kt.allowOverride===!0&&X!==null&&(kt=X),Lt.layers.test(N.layers)&&Dc(Lt,H,N,gt,kt,It)}}function Dc(P,H,N,X,k,at){P.onBeforeRender(g,H,N,X,k,at),P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),k.onBeforeRender(g,H,N,X,P,at),k.transparent===!0&&k.side===qe&&k.forceSinglePass===!1?(k.side=pn,k.needsUpdate=!0,g.renderBufferDirect(N,H,X,k,P,at),k.side=jn,k.needsUpdate=!0,g.renderBufferDirect(N,H,X,k,P,at),k.side=qe):g.renderBufferDirect(N,H,X,k,P,at),P.onAfterRender(g,H,N,X,k,at)}function _p(P,H,N){H.isScene!==!0&&(H=Tt);let X=St.get(P),k=b.state.lights,at=b.state.shadowsArray,bt=k.state.version,Lt=Y.getParameters(P,k.state,at,H,N),gt=Y.getProgramCacheKey(Lt),It=X.programs;X.environment=P.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(P.isMeshStandardMaterial?Ee:Oe).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,It===void 0&&(P.addEventListener("dispose",W),It=new Map,X.programs=It);let kt=It.get(gt);if(kt!==void 0){if(X.currentProgram===kt&&X.lightsStateVersion===bt)return Mc(P,Lt),kt}else Lt.uniforms=Y.getUniforms(P),P.onBeforeCompile(Lt,g),kt=Y.acquireProgram(Lt,gt),It.set(gt,kt),X.uniforms=Lt.uniforms;let Rt=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Rt.clippingPlanes=pt.uniform),Mc(P,Lt),X.needsLights=nd(P),X.lightsStateVersion=bt,X.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMap.value=k.state.directionalShadowMap,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotShadowMap.value=k.state.spotShadowMap,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMap.value=k.state.pointShadowMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=kt,X.uniformsList=null,kt}function vc(P){if(P.uniformsList===null){let H=P.currentProgram.getUniforms();P.uniformsList=Br.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function Mc(P,H){let N=St.get(P);N.outputColorSpace=H.outputColorSpace,N.batching=H.batching,N.batchingColor=H.batchingColor,N.instancing=H.instancing,N.instancingColor=H.instancingColor,N.instancingMorph=H.instancingMorph,N.skinning=H.skinning,N.morphTargets=H.morphTargets,N.morphNormals=H.morphNormals,N.morphColors=H.morphColors,N.morphTargetsCount=H.morphTargetsCount,N.numClippingPlanes=H.numClippingPlanes,N.numIntersection=H.numClipIntersection,N.vertexAlphas=H.vertexAlphas,N.vertexTangents=H.vertexTangents,N.toneMapping=H.toneMapping}function td(P,H,N,X,k){H.isScene!==!0&&(H=Tt),Jt.resetTextureUnits();let at=H.fog,bt=X.isMeshStandardMaterial?H.environment:null,Lt=v===null?g.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:je,gt=(X.isMeshStandardMaterial?Ee:Oe).get(X.envMap||bt),It=X.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,kt=!!N.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!N.morphAttributes.position,Kt=!!N.morphAttributes.normal,he=!!N.morphAttributes.color,Re=Mo;X.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Re=g.toneMapping);let Ve=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ye=Ve!==void 0?Ve.length:0,Mt=St.get(X),Pe=b.state.lights;if(qt===!0&&(G===!0||P!==S)){let on=P===S&&X.id===V;pt.setState(X,P,on)}let te=!1;X.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Pe.state.version||Mt.outputColorSpace!==Lt||k.isBatchedMesh&&Mt.batching===!1||!k.isBatchedMesh&&Mt.batching===!0||k.isBatchedMesh&&Mt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Mt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Mt.instancing===!1||!k.isInstancedMesh&&Mt.instancing===!0||k.isSkinnedMesh&&Mt.skinning===!1||!k.isSkinnedMesh&&Mt.skinning===!0||k.isInstancedMesh&&Mt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Mt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Mt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Mt.instancingMorph===!1&&k.morphTexture!==null||Mt.envMap!==gt||X.fog===!0&&Mt.fog!==at||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==pt.numPlanes||Mt.numIntersection!==pt.numIntersection)||Mt.vertexAlphas!==It||Mt.vertexTangents!==kt||Mt.morphTargets!==Rt||Mt.morphNormals!==Kt||Mt.morphColors!==he||Mt.toneMapping!==Re||Mt.morphTargetsCount!==ye)&&(te=!0):(te=!0,Mt.__version=X.version);let mn=Mt.currentProgram;te===!0&&(mn=_p(X,H,k));let zi=!1,gn=!1,Gr=!1,Le=mn.getUniforms(),Rn=Mt.uniforms;if(Vt.useProgram(mn.program)&&(zi=!0,gn=!0,Gr=!0),X.id!==V&&(V=X.id,gn=!0),zi||S!==P){Vt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Le.setValue(M,"projectionMatrix",P.projectionMatrix),Le.setValue(M,"viewMatrix",P.matrixWorldInverse);let un=Le.map.cameraPosition;un!==void 0&&un.setValue(M,dt.setFromMatrixPosition(P.matrixWorld)),vt.logarithmicDepthBuffer&&Le.setValue(M,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Le.setValue(M,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,gn=!0,Gr=!0)}if(k.isSkinnedMesh){Le.setOptional(M,k,"bindMatrix"),Le.setOptional(M,k,"bindMatrixInverse");let on=k.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Le.setValue(M,"boneTexture",on.boneTexture,Jt))}k.isBatchedMesh&&(Le.setOptional(M,k,"batchingTexture"),Le.setValue(M,"batchingTexture",k._matricesTexture,Jt),Le.setOptional(M,k,"batchingIdTexture"),Le.setValue(M,"batchingIdTexture",k._indirectTexture,Jt),Le.setOptional(M,k,"batchingColorTexture"),k._colorsTexture!==null&&Le.setValue(M,"batchingColorTexture",k._colorsTexture,Jt));let Dn=N.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&rt.update(k,N,mn),(gn||Mt.receiveShadow!==k.receiveShadow)&&(Mt.receiveShadow=k.receiveShadow,Le.setValue(M,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Rn.envMap.value=gt,Rn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(Rn.envMapIntensity.value=H.environmentIntensity),gn&&(Le.setValue(M,"toneMappingExposure",g.toneMappingExposure),Mt.needsLights&&ed(Rn,Gr),at&&X.fog===!0&&q.refreshFogUniforms(Rn,at),q.refreshMaterialUniforms(Rn,X,z,tt,b.state.transmissionRenderTarget[P.id]),Br.upload(M,vc(Mt),Rn,Jt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Br.upload(M,vc(Mt),Rn,Jt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Le.setValue(M,"center",k.center),Le.setValue(M,"modelViewMatrix",k.modelViewMatrix),Le.setValue(M,"normalMatrix",k.normalMatrix),Le.setValue(M,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let on=X.uniformsGroups;for(let un=0,Hf=on.length;un<Hf;un++){let si=on[un];Ht.update(si,mn),Ht.bind(si,mn)}}return mn}function ed(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function nd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(P,H,N){let X=St.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),St.get(P.texture).__webglTexture=H,St.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:N,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){let N=St.get(P);N.__webglFramebuffer=H,N.__useDefaultFramebuffer=H===void 0};let od=M.createFramebuffer();this.setRenderTarget=function(P,H=0,N=0){v=P,U=H,R=N;let X=!0,k=null,at=!1,bt=!1;if(P){let gt=St.get(P);if(gt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(M.FRAMEBUFFER,null),X=!1;else if(gt.__webglFramebuffer===void 0)Jt.setupRenderTarget(P);else if(gt.__hasExternalTextures)Jt.rebindTextures(P,St.get(P.texture).__webglTexture,St.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Rt=P.depthTexture;if(gt.__boundDepthTexture!==Rt){if(Rt!==null&&St.has(Rt)&&(P.width!==Rt.image.width||P.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(P)}}let It=P.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let kt=St.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[H])?k=kt[H][N]:k=kt[H],at=!0):P.samples>0&&Jt.useMultisampledRTT(P)===!1?k=St.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?k=kt[N]:k=kt,D.copy(P.viewport),A.copy(P.scissor),_=P.scissorTest}else D.copy(yt).multiplyScalar(z).floor(),A.copy(_t).multiplyScalar(z).floor(),_=$t;if(N!==0&&(k=od),Vt.bindFramebuffer(M.FRAMEBUFFER,k)&&X&&Vt.drawBuffers(P,k),Vt.viewport(D),Vt.scissor(A),Vt.setScissorTest(_),at){let gt=St.get(P.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+H,gt.__webglTexture,N)}else if(bt){let gt=H;for(let It=0;It<P.textures.length;It++){let kt=St.get(P.textures[It]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+It,kt.__webglTexture,N,gt)}}else if(P!==null&&N!==0){let gt=St.get(P.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,gt.__webglTexture,N)}V=-1},this.readRenderTargetPixels=function(P,H,N,X,k,at,bt,Lt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=St.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&bt!==void 0&&(gt=gt[bt]),gt){Vt.bindFramebuffer(M.FRAMEBUFFER,gt);try{let It=P.textures[Lt],kt=It.format,Rt=It.type;if(!vt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-X&&N>=0&&N<=P.height-k&&(P.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Lt),M.readPixels(H,N,X,k,xt.convert(kt),xt.convert(Rt),at))}finally{let It=v!==null?St.get(v).__webglFramebuffer:null;Vt.bindFramebuffer(M.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(P,H,N,X,k,at,bt,Lt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=St.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&bt!==void 0&&(gt=gt[bt]),gt)if(H>=0&&H<=P.width-X&&N>=0&&N<=P.height-k){Vt.bindFramebuffer(M.FRAMEBUFFER,gt);let It=P.textures[Lt],kt=It.format,Rt=It.type;if(!vt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Kt),M.bufferData(M.PIXEL_PACK_BUFFER,at.byteLength,M.STREAM_READ),P.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Lt),M.readPixels(H,N,X,k,xt.convert(kt),xt.convert(Rt),0);let he=v!==null?St.get(v).__webglFramebuffer:null;Vt.bindFramebuffer(M.FRAMEBUFFER,he);let Re=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await fh(M,Re,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Kt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,at),M.deleteBuffer(Kt),M.deleteSync(Re),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,N=0){let X=Math.pow(2,-N),k=Math.floor(P.image.width*X),at=Math.floor(P.image.height*X),bt=H!==null?H.x:0,Lt=H!==null?H.y:0;Jt.setTexture2D(P,0),M.copyTexSubImage2D(M.TEXTURE_2D,N,0,0,bt,Lt,k,at),Vt.unbindTexture()};let id=M.createFramebuffer(),rd=M.createFramebuffer();this.copyTextureToTexture=function(P,H,N=null,X=null,k=0,at=null){at===null&&(k!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=k,k=0):at=0);let bt,Lt,gt,It,kt,Rt,Kt,he,Re,Ve=P.isCompressedTexture?P.mipmaps[at]:P.image;if(N!==null)bt=N.max.x-N.min.x,Lt=N.max.y-N.min.y,gt=N.isBox3?N.max.z-N.min.z:1,It=N.min.x,kt=N.min.y,Rt=N.isBox3?N.min.z:0;else{let Dn=Math.pow(2,-k);bt=Math.floor(Ve.width*Dn),Lt=Math.floor(Ve.height*Dn),P.isDataArrayTexture?gt=Ve.depth:P.isData3DTexture?gt=Math.floor(Ve.depth*Dn):gt=1,It=0,kt=0,Rt=0}X!==null?(Kt=X.x,he=X.y,Re=X.z):(Kt=0,he=0,Re=0);let ye=xt.convert(H.format),Mt=xt.convert(H.type),Pe;H.isData3DTexture?(Jt.setTexture3D(H,0),Pe=M.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Jt.setTexture2DArray(H,0),Pe=M.TEXTURE_2D_ARRAY):(Jt.setTexture2D(H,0),Pe=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,H.unpackAlignment);let te=M.getParameter(M.UNPACK_ROW_LENGTH),mn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),zi=M.getParameter(M.UNPACK_SKIP_PIXELS),gn=M.getParameter(M.UNPACK_SKIP_ROWS),Gr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Ve.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ve.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,It),M.pixelStorei(M.UNPACK_SKIP_ROWS,kt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Rt);let Le=P.isDataArrayTexture||P.isData3DTexture,Rn=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){let Dn=St.get(P),on=St.get(H),un=St.get(Dn.__renderTarget),Hf=St.get(on.__renderTarget);Vt.bindFramebuffer(M.READ_FRAMEBUFFER,un.__webglFramebuffer),Vt.bindFramebuffer(M.DRAW_FRAMEBUFFER,Hf.__webglFramebuffer);for(let si=0;si<gt;si++)Le&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,St.get(P).__webglTexture,k,Rt+si),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,St.get(H).__webglTexture,at,Re+si)),M.blitFramebuffer(It,kt,bt,Lt,Kt,he,bt,Lt,M.DEPTH_BUFFER_BIT,M.NEAREST);Vt.bindFramebuffer(M.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(k!==0||P.isRenderTargetTexture||St.has(P)){let Dn=St.get(P),on=St.get(H);Vt.bindFramebuffer(M.READ_FRAMEBUFFER,id),Vt.bindFramebuffer(M.DRAW_FRAMEBUFFER,rd);for(let un=0;un<gt;un++)Le?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Dn.__webglTexture,k,Rt+un):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Dn.__webglTexture,k),Rn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,on.__webglTexture,at,Re+un):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,on.__webglTexture,at),k!==0?M.blitFramebuffer(It,kt,bt,Lt,Kt,he,bt,Lt,M.COLOR_BUFFER_BIT,M.NEAREST):Rn?M.copyTexSubImage3D(Pe,at,Kt,he,Re+un,It,kt,bt,Lt):M.copyTexSubImage2D(Pe,at,Kt,he,It,kt,bt,Lt);Vt.bindFramebuffer(M.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Rn?P.isDataTexture||P.isData3DTexture?M.texSubImage3D(Pe,at,Kt,he,Re,bt,Lt,gt,ye,Mt,Ve.data):H.isCompressedArrayTexture?M.compressedTexSubImage3D(Pe,at,Kt,he,Re,bt,Lt,gt,ye,Ve.data):M.texSubImage3D(Pe,at,Kt,he,Re,bt,Lt,gt,ye,Mt,Ve):P.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,at,Kt,he,bt,Lt,ye,Mt,Ve.data):P.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,at,Kt,he,Ve.width,Ve.height,ye,Ve.data):M.texSubImage2D(M.TEXTURE_2D,at,Kt,he,bt,Lt,ye,Mt,Ve);M.pixelStorei(M.UNPACK_ROW_LENGTH,te),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,mn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,zi),M.pixelStorei(M.UNPACK_SKIP_ROWS,gn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Gr),at===0&&H.generateMipmaps&&M.generateMipmap(Pe),Vt.unbindTexture()},this.initRenderTarget=function(P){St.get(P).__webglFramebuffer===void 0&&Jt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Jt.setTextureCube(P,0):P.isData3DTexture?Jt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Jt.setTexture2DArray(P,0):Jt.setTexture2D(P,0),Vt.unbindTexture()},this.resetState=function(){U=0,R=0,v=null,Vt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};function Zh(i){let t=new Map,e=new Map,n=i.clone();return Yh(i,n,function(o,r){t.set(r,o),e.set(o,r)}),n.traverse(function(o){if(!o.isSkinnedMesh)return;let r=o,a=t.get(o),p=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=p.map(function(s){return e.get(s)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yh(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Yh(i.children[n],t.children[n],e)}function El(i,t){if(t===Y2)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===$r||t===pp){let e=i.getIndex();if(e===null){let a=[],p=i.getAttribute("position");if(p!==void 0){for(let s=0;s<p.count;s++)a.push(s);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,o=[];if(t===$r)for(let a=1;a<=n;a++)o.push(e.getX(0)),o.push(e.getX(a)),o.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(o.push(e.getX(a)),o.push(e.getX(a+1)),o.push(e.getX(a+2))):(o.push(e.getX(a+2)),o.push(e.getX(a+1)),o.push(e.getX(a)));o.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(o),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var tf=class extends ro{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Cl(e)}),this.register(function(e){return new xl(e)}),this.register(function(e){return new $l(e)}),this.register(function(e){return new Hl(e)}),this.register(function(e){return new kl(e)}),this.register(function(e){return new Rl(e)}),this.register(function(e){return new Dl(e)}),this.register(function(e){return new vl(e)}),this.register(function(e){return new Ml(e)}),this.register(function(e){return new Ul(e)}),this.register(function(e){return new Al(e)}),this.register(function(e){return new Ol(e)}),this.register(function(e){return new _l(e)}),this.register(function(e){return new Il(e)}),this.register(function(e){return new Pl(e)}),this.register(function(e){return new Bl(e)}),this.register(function(e){return new Fl(e)})}load(t,e,n,o){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=Do.extractUrlBase(t);a=Do.resolveURL(u,this.path)}else a=Do.extractUrlBase(t);this.manager.itemStart(t);let p=function(u){o?o(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},s=new Mr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(u){try{r.parse(u,a,function(f){e(f),r.manager.itemEnd(t)},p)}catch(f){p(f)}},n,p)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,o){let r,a={},p={},s=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(s.decode(new Uint8Array(t,0,4))===tb){try{a[Wt.KHR_BINARY_GLTF]=new Nl(t)}catch(l){o&&o(l);return}r=JSON.parse(a[Wt.KHR_BINARY_GLTF].content)}else r=JSON.parse(s.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Yl(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let l=this.pluginCallbacks[f](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),p[l.name]=l,a[l.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let l=r.extensionsUsed[f],h=r.extensionsRequired||[];switch(l){case Wt.KHR_MATERIALS_UNLIT:a[l]=new Ll;break;case Wt.KHR_DRACO_MESH_COMPRESSION:a[l]=new Xl(r,this.dracoLoader);break;case Wt.KHR_TEXTURE_TRANSFORM:a[l]=new Jl;break;case Wt.KHR_MESH_QUANTIZATION:a[l]=new zl;break;default:h.indexOf(l)>=0&&p[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(p),u.parse(n,o)}parseAsync(t,e){let n=this;return new Promise(function(o,r){n.parse(t,e,o,r)})}};function vg(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var Wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Pl=class{constructor(t){this.parser=t,this.name=Wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,o=e.length;n<o;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,o=e.cache.get(n);if(o)return o;let r=e.json,s=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],u,f=new mt(16777215);s.color!==void 0&&f.setRGB(s.color[0],s.color[1],s.color[2],je);let l=s.range!==void 0?s.range:0;switch(s.type){case"directional":u=new Ri(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Za(f),u.distance=l;break;case"spot":u=new ja(f),u.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,u.angle=s.spot.outerConeAngle,u.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return u.position.set(0,0,0),uo(u,s),s.intensity!==void 0&&(u.intensity=s.intensity),u.name=e.createUniqueName(s.name||"light_"+t),o=Promise.resolve(u),e.cache.add(n,o),o}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],p=(r.extensions&&r.extensions[this.name]||{}).light;return p===void 0?null:this._loadLight(p).then(function(s){return n._getNodeRef(e.cache,p,s)})}},Ll=class{constructor(){this.name=Wt.KHR_MATERIALS_UNLIT}getMaterialType(){return oe}extendParams(t,e,n){let o=[];t.color=new mt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],je),t.opacity=a[3]}r.baseColorTexture!==void 0&&o.push(n.assignTexture(t,"map",r.baseColorTexture,Te))}return Promise.all(o)}},Ul=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Cl=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let p=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new nt(p,p)}return Promise.all(r)}},xl=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ol=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Rl=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new mt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=o.extensions[this.name];if(a.sheenColorFactor!==void 0){let p=a.sheenColorFactor;e.sheenColor.setRGB(p[0],p[1],p[2],je)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Te)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Dl=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},vl=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let p=a.attenuationColor||[1,1,1];return e.attenuationColor=new mt().setRGB(p[0],p[1],p[2],je),Promise.all(r)}},Ml=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=o.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Al=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let p=a.specularColorFactor||[1,1,1];return e.specularColor=new mt().setRGB(p[0],p[1],p[2],je),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Te)),Promise.all(r)}},Il=class{constructor(t){this.parser=t,this.name=Wt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}},_l=class{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,o=n.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();let r=[],a=o.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},$l=class{constructor(t){this.parser=t,this.name=Wt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,o=n.textures[t];if(!o.extensions||!o.extensions[this.name])return null;let r=o.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},Hl=class{constructor(t){this.parser=t,this.name=Wt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},kl=class{constructor(t){this.parser=t,this.name=Wt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,o=n.json,r=o.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],p=o.images[a.source],s=n.textureLoader;if(p.uri){let u=n.options.manager.getHandler(p.uri);u!==null&&(s=u)}return n.loadTextureImage(t,a.source,s)}},Bl=class{constructor(t){this.name=Wt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let o=n.extensions[this.name],r=this.parser.getDependency("buffer",o.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(p){let s=o.byteOffset||0,u=o.byteLength||0,f=o.count,l=o.byteStride,h=new Uint8Array(p,s,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,l,h,o.mode,o.filter).then(function(c){return c.buffer}):a.ready.then(function(){let c=new ArrayBuffer(f*l);return a.decodeGltfBuffer(new Uint8Array(c),f,l,h,o.mode,o.filter),c})})}else return null}},Fl=class{constructor(t){this.name=Wt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let o=e.meshes[n.mesh];for(let u of o.primitives)if(u.mode!==Hn.TRIANGLES&&u.mode!==Hn.TRIANGLE_STRIP&&u.mode!==Hn.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,p=[],s={};for(let u in a)p.push(this.parser.getDependency("accessor",a[u]).then(f=>(s[u]=f,s[u])));return p.length<1?null:(p.push(this.parser.createNodeMesh(t)),Promise.all(p).then(u=>{let f=u.pop(),l=f.isGroup?f.children:[f],h=u[0].count,c=[];for(let d of l){let T=new Dt,y=new x,b=new Ie,E=new x(1,1,1),m=new Zn(d.geometry,d.material,h);for(let g=0;g<h;g++)s.TRANSLATION&&y.fromBufferAttribute(s.TRANSLATION,g),s.ROTATION&&b.fromBufferAttribute(s.ROTATION,g),s.SCALE&&E.fromBufferAttribute(s.SCALE,g),m.setMatrixAt(g,T.compose(y,b,E));for(let g in s)if(g==="_COLOR_0"){let L=s[g];m.instanceColor=new jo(L.array,L.itemSize,L.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&d.geometry.setAttribute(g,s[g]);we.prototype.copy.call(m,d),this.parser.assignFinalMaterial(m),c.push(m)}return f.isGroup?(f.clear(),f.add(...c),f):c[0]}))}},tb="glTF",up=12,Gh={JSON:1313821514,BIN:5130562},Nl=class{constructor(t){this.name=Wt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,up),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==tb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let o=this.header.length-up,r=new DataView(t,up),a=0;for(;a<o;){let p=r.getUint32(a,!0);a+=4;let s=r.getUint32(a,!0);if(a+=4,s===Gh.JSON){let u=new Uint8Array(t,up+a,p);this.content=n.decode(u)}else if(s===Gh.BIN){let u=up+a;this.body=t.slice(u,u+p)}a+=p}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Wt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,o=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,p={},s={},u={};for(let f in a){let l=jl[f]||f.toLowerCase();p[l]=a[f]}for(let f in t.attributes){let l=jl[f]||f.toLowerCase();if(a[f]!==void 0){let h=n.accessors[t.attributes[f]],c=Nr[h.componentType];u[l]=c.name,s[l]=h.normalized===!0}}return e.getDependency("bufferView",r).then(function(f){return new Promise(function(l,h){o.decodeDracoFile(f,function(c){for(let d in c.attributes){let T=c.attributes[d],y=s[d];y!==void 0&&(T.normalized=y)}l(c)},p,u,je,h)})})}},Jl=class{constructor(){this.name=Wt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},zl=class{constructor(){this.name=Wt.KHR_MESH_QUANTIZATION}},ef=class extends Co{constructor(t,e,n,o){super(t,e,n,o)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,o=this.valueSize,r=t*o*3+o;for(let a=0;a!==o;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,o){let r=this.resultBuffer,a=this.sampleValues,p=this.valueSize,s=p*2,u=p*3,f=o-e,l=(n-e)/f,h=l*l,c=h*l,d=t*u,T=d-u,y=-2*c+3*h,b=c-h,E=1-y,m=b-h+l;for(let g=0;g!==p;g++){let L=a[T+g+p],U=a[T+g+s]*f,R=a[d+g+p],v=a[d+g]*f;r[g]=E*L+m*U+y*R+b*v}return r}},Mg=new Ie,Ql=class extends ef{interpolate_(t,e,n,o){let r=super.interpolate_(t,e,n,o);return Mg.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wh={9728:_e,9729:Qe,9984:uu,9985:Ir,9986:Ai,9987:dn},Kh={33071:qn,33648:br,10497:fn},Vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ag={CUBICSPLINE:void 0,LINEAR:Ti,STEP:gi},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ig(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function Bi(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function uo(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function _g(i,t,e){let n=!1,o=!1,r=!1;for(let u=0,f=t.length;u<f;u++){let l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(o=!0),l.COLOR_0!==void 0&&(r=!0),n&&o&&r)break}if(!n&&!o&&!r)return Promise.resolve(i);let a=[],p=[],s=[];for(let u=0,f=t.length;u<f;u++){let l=t[u];if(n){let h=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;a.push(h)}if(o){let h=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;p.push(h)}if(r){let h=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;s.push(h)}}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s)]).then(function(u){let f=u[0],l=u[1],h=u[2];return n&&(i.morphAttributes.position=f),o&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function $g(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,o=e.length;n<o;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hg(i){let t,e=i.extensions&&i.extensions[Wt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+wl(e.attributes):t=i.indices+":"+wl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,o=i.targets.length;n<o;n++)t+=":"+wl(i.targets[n]);return t}function wl(i){let t="",e=Object.keys(i).sort();for(let n=0,o=e.length;n<o;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Zl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Bg=new Dt,Yl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new vg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,r=!1,a=-1;if(typeof navigator<"u"){let p=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(p)===!0;let s=p.match(/Version\/(\d+)/);o=n&&s?parseInt(s[1],10):-1,r=p.indexOf("Firefox")>-1,a=r?p.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&o<17||r&&a<98?this.textureLoader=new ao(this.options.manager):this.textureLoader=new Ya(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,o=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let p={scene:a[0][o.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:o.asset,parser:n,userData:{}};return Bi(r,p,o),uo(p,o),Promise.all(n._invokeAll(function(s){return s.afterRoot&&s.afterRoot(p)})).then(function(){for(let s of p.scenes)s.updateMatrixWorld();t(p)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let o=0,r=e.length;o<r;o++){let a=e[o].joints;for(let p=0,s=a.length;p<s;p++)t[a[p]].isBone=!0}for(let o=0,r=t.length;o<r;o++){let a=t[o];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let o=n.clone(),r=(a,p)=>{let s=this.associations.get(a);s!=null&&this.associations.set(p,s);for(let[u,f]of a.children.entries())r(f,p.children[u])};return r(n,o),o.name+="_instance_"+t.uses[e]++,o}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let o=t(e[n]);if(o)return o}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let o=0;o<e.length;o++){let r=t(e[o]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,o=this.cache.get(n);if(!o){switch(t){case"scene":o=this.loadScene(e);break;case"node":o=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":o=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":o=this.loadAccessor(e);break;case"bufferView":o=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":o=this.loadBuffer(e);break;case"material":o=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":o=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":o=this.loadSkin(e);break;case"animation":o=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":o=this.loadCamera(e);break;default:if(o=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!o)throw new Error("Unknown type: "+t);break}this.cache.add(n,o)}return o}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,o=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(o.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Wt.KHR_BINARY_GLTF].body);let o=this.options;return new Promise(function(r,a){n.load(Do.resolveURL(e.uri,o.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let o=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+o)})}loadAccessor(t){let e=this,n=this.json,o=this.json.accessors[t];if(o.bufferView===void 0&&o.sparse===void 0){let a=Vl[o.type],p=Nr[o.componentType],s=o.normalized===!0,u=new p(o.count*a);return Promise.resolve(new Ce(u,a,s))}let r=[];return o.bufferView!==void 0?r.push(this.getDependency("bufferView",o.bufferView)):r.push(null),o.sparse!==void 0&&(r.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(r).then(function(a){let p=a[0],s=Vl[o.type],u=Nr[o.componentType],f=u.BYTES_PER_ELEMENT,l=f*s,h=o.byteOffset||0,c=o.bufferView!==void 0?n.bufferViews[o.bufferView].byteStride:void 0,d=o.normalized===!0,T,y;if(c&&c!==l){let b=Math.floor(h/c),E="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+b+":"+o.count,m=e.cache.get(E);m||(T=new u(p,b*c,o.count*c/f),m=new Vr(T,c/f),e.cache.add(E,m)),y=new Sr(m,s,h%c/f,d)}else p===null?T=new u(o.count*s):T=new u(p,h,o.count*s),y=new Ce(T,s,d);if(o.sparse!==void 0){let b=Vl.SCALAR,E=Nr[o.sparse.indices.componentType],m=o.sparse.indices.byteOffset||0,g=o.sparse.values.byteOffset||0,L=new E(a[1],m,o.sparse.count*b),U=new u(a[2],g,o.sparse.count*s);p!==null&&(y=new Ce(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let R=0,v=L.length;R<v;R++){let V=L[R];if(y.setX(V,U[R*s]),s>=2&&y.setY(V,U[R*s+1]),s>=3&&y.setZ(V,U[R*s+2]),s>=4&&y.setW(V,U[R*s+3]),s>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=d}return y})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],p=this.textureLoader;if(a.uri){let s=n.manager.getHandler(a.uri);s!==null&&(p=s)}return this.loadTextureImage(t,r,p)}loadTextureImage(t,e,n){let o=this,r=this.json,a=r.textures[t],p=r.images[e],s=(p.uri||p.bufferView)+":"+a.sampler;if(this.textureCache[s])return this.textureCache[s];let u=this.loadImageSource(e,n).then(function(f){f.flipY=!1,f.name=a.name||p.name||"",f.name===""&&typeof p.uri=="string"&&p.uri.startsWith("data:image/")===!1&&(f.name=p.uri);let h=(r.samplers||{})[a.sampler]||{};return f.magFilter=Wh[h.magFilter]||Qe,f.minFilter=Wh[h.minFilter]||dn,f.wrapS=Kh[h.wrapS]||fn,f.wrapT=Kh[h.wrapT]||fn,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==_e&&f.minFilter!==Qe,o.associations.set(f,{textures:t}),f}).catch(function(){return null});return this.textureCache[s]=u,u}loadImageSource(t,e){let n=this,o=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());let a=o.images[t],p=self.URL||self.webkitURL,s=a.uri||"",u=!1;if(a.bufferView!==void 0)s=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;let h=new Blob([l],{type:a.mimeType});return s=p.createObjectURL(h),s});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let f=Promise.resolve(s).then(function(l){return new Promise(function(h,c){let d=h;e.isImageBitmapLoader===!0&&(d=function(T){let y=new He(T);y.needsUpdate=!0,h(y)}),e.load(Do.resolveURL(l,r.path),d,void 0,c)})}).then(function(l){return u===!0&&p.revokeObjectURL(s),uo(l,a),l.userData.mimeType=a.mimeType||kg(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),l});return this.sourceCache[t]=f,f}assignTexture(t,e,n,o){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Wt.KHR_TEXTURE_TRANSFORM]){let p=n.extensions!==void 0?n.extensions[Wt.KHR_TEXTURE_TRANSFORM]:void 0;if(p){let s=r.associations.get(a);a=r.extensions[Wt.KHR_TEXTURE_TRANSFORM].extendTexture(a,p),r.associations.set(a,s)}}return o!==void 0&&(a.colorSpace=o),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,o=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let p="PointsMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new Ur,Ke.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,s.sizeAttenuation=!1,this.cache.add(p,s)),n=s}else if(t.isLine){let p="LineBasicMaterial:"+n.uuid,s=this.cache.get(p);s||(s=new Lr,Ke.prototype.copy.call(s,n),s.color.copy(n.color),s.map=n.map,this.cache.add(p,s)),n=s}if(o||r||a){let p="ClonedMaterial:"+n.uuid+":";o&&(p+="derivative-tangents:"),r&&(p+="vertex-colors:"),a&&(p+="flat-shading:");let s=this.cache.get(p);s||(s=n.clone(),r&&(s.vertexColors=!0),a&&(s.flatShading=!0),o&&(s.normalScale&&(s.normalScale.y*=-1),s.clearcoatNormalScale&&(s.clearcoatNormalScale.y*=-1)),this.cache.add(p,s),this.associations.set(s,this.associations.get(n))),n=s}t.material=n}getMaterialType(){return Je}loadMaterial(t){let e=this,n=this.json,o=this.extensions,r=n.materials[t],a,p={},s=r.extensions||{},u=[];if(s[Wt.KHR_MATERIALS_UNLIT]){let l=o[Wt.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(p,r,e))}else{let l=r.pbrMetallicRoughness||{};if(p.color=new mt(1,1,1),p.opacity=1,Array.isArray(l.baseColorFactor)){let h=l.baseColorFactor;p.color.setRGB(h[0],h[1],h[2],je),p.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(p,"map",l.baseColorTexture,Te)),p.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,p.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(p,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(p,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(t,p)})))}r.doubleSided===!0&&(p.side=qe);let f=r.alphaMode||Sl.OPAQUE;if(f===Sl.BLEND?(p.transparent=!0,p.depthWrite=!1):(p.transparent=!1,f===Sl.MASK&&(p.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==oe&&(u.push(e.assignTexture(p,"normalMap",r.normalTexture)),p.normalScale=new nt(1,1),r.normalTexture.scale!==void 0)){let l=r.normalTexture.scale;p.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&a!==oe&&(u.push(e.assignTexture(p,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(p.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==oe){let l=r.emissiveFactor;p.emissive=new mt().setRGB(l[0],l[1],l[2],je)}return r.emissiveTexture!==void 0&&a!==oe&&u.push(e.assignTexture(p,"emissiveMap",r.emissiveTexture,Te)),Promise.all(u).then(function(){let l=new a(p);return r.name&&(l.name=r.name),uo(l,r),e.associations.set(l,{materials:t}),r.extensions&&Bi(o,l,r),l})}createUniqueName(t){let e=de.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,o=this.primitiveCache;function r(p){return n[Wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(p,e).then(function(s){return qh(s,p,e)})}let a=[];for(let p=0,s=t.length;p<s;p++){let u=t[p],f=Hg(u),l=o[f];if(l)a.push(l.promise);else{let h;u.extensions&&u.extensions[Wt.KHR_DRACO_MESH_COMPRESSION]?h=r(u):h=qh(new ae,u,e),o[f]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,o=this.extensions,r=n.meshes[t],a=r.primitives,p=[];for(let s=0,u=a.length;s<u;s++){let f=a[s].material===void 0?Ig(this.cache):this.getDependency("material",a[s].material);p.push(f)}return p.push(e.loadGeometries(a)),Promise.all(p).then(function(s){let u=s.slice(0,s.length-1),f=s[s.length-1],l=[];for(let c=0,d=f.length;c<d;c++){let T=f[c],y=a[c],b,E=u[c];if(y.mode===Hn.TRIANGLES||y.mode===Hn.TRIANGLE_STRIP||y.mode===Hn.TRIANGLE_FAN||y.mode===void 0)b=r.isSkinnedMesh===!0?new xa(T,E):new Ft(T,E),b.isSkinnedMesh===!0&&b.normalizeSkinWeights(),y.mode===Hn.TRIANGLE_STRIP?b.geometry=El(b.geometry,pp):y.mode===Hn.TRIANGLE_FAN&&(b.geometry=El(b.geometry,$r));else if(y.mode===Hn.LINES)b=new Ra(T,E);else if(y.mode===Hn.LINE_STRIP)b=new Si(T,E);else if(y.mode===Hn.LINE_LOOP)b=new Da(T,E);else if(y.mode===Hn.POINTS)b=new va(T,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(b.geometry.morphAttributes).length>0&&$g(b,r),b.name=e.createUniqueName(r.name||"mesh_"+t),uo(b,r),y.extensions&&Bi(o,b,y),e.assignFinalMaterial(b),l.push(b)}for(let c=0,d=l.length;c<d;c++)e.associations.set(l[c],{meshes:t,primitives:c});if(l.length===1)return r.extensions&&Bi(o,l[0],r),l[0];let h=new De;r.extensions&&Bi(o,h,r),e.associations.set(h,{meshes:t});for(let c=0,d=l.length;c<d;c++)h.add(l[c]);return h})}loadCamera(t){let e,n=this.json.cameras[t],o=n[n.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ae(tn.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):n.type==="orthographic"&&(e=new Ro(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),uo(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let o=0,r=e.joints.length;o<r;o++)n.push(this._loadNodeShallow(e.joints[o]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(o){let r=o.pop(),a=o,p=[],s=[];for(let u=0,f=a.length;u<f;u++){let l=a[u];if(l){p.push(l);let h=new Dt;r!==null&&h.fromArray(r.array,u*16),s.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Oa(p,s)})}loadAnimation(t){let e=this.json,n=this,o=e.animations[t],r=o.name?o.name:"animation_"+t,a=[],p=[],s=[],u=[],f=[];for(let l=0,h=o.channels.length;l<h;l++){let c=o.channels[l],d=o.samplers[c.sampler],T=c.target,y=T.node,b=o.parameters!==void 0?o.parameters[d.input]:d.input,E=o.parameters!==void 0?o.parameters[d.output]:d.output;T.node!==void 0&&(a.push(this.getDependency("node",y)),p.push(this.getDependency("accessor",b)),s.push(this.getDependency("accessor",E)),u.push(d),f.push(T))}return Promise.all([Promise.all(a),Promise.all(p),Promise.all(s),Promise.all(u),Promise.all(f)]).then(function(l){let h=l[0],c=l[1],d=l[2],T=l[3],y=l[4],b=[];for(let m=0,g=h.length;m<g;m++){let L=h[m],U=c[m],R=d[m],v=T[m],V=y[m];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();let S=n._createAnimationTracks(L,U,R,v,V);if(S)for(let D=0;D<S.length;D++)b.push(S[D])}let E=new xi(r,void 0,b);return uo(E,o),E})}createNodeMesh(t){let e=this.json,n=this,o=e.nodes[t];return o.mesh===void 0?null:n.getDependency("mesh",o.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,o.mesh,r);return o.weights!==void 0&&a.traverse(function(p){if(p.isMesh)for(let s=0,u=o.weights.length;s<u;s++)p.morphTargetInfluences[s]=o.weights[s]}),a})}loadNode(t){let e=this.json,n=this,o=e.nodes[t],r=n._loadNodeShallow(t),a=[],p=o.children||[];for(let u=0,f=p.length;u<f;u++)a.push(n.getDependency("node",p[u]));let s=o.skin===void 0?Promise.resolve(null):n.getDependency("skin",o.skin);return Promise.all([r,Promise.all(a),s]).then(function(u){let f=u[0],l=u[1],h=u[2];h!==null&&f.traverse(function(c){c.isSkinnedMesh&&c.bind(h,Bg)});for(let c=0,d=l.length;c<d;c++)f.add(l[c]);return f})}_loadNodeShallow(t){let e=this.json,n=this.extensions,o=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?o.createUniqueName(r.name):"",p=[],s=o._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return s&&p.push(s),r.camera!==void 0&&p.push(o.getDependency("camera",r.camera).then(function(u){return o._getNodeRef(o.cameraCache,r.camera,u)})),o._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){p.push(u)}),this.nodeCache[t]=Promise.all(p).then(function(u){let f;if(r.isBone===!0?f=new wr:u.length>1?f=new De:u.length===1?f=u[0]:f=new we,f!==u[0])for(let l=0,h=u.length;l<h;l++)f.add(u[l]);if(r.name&&(f.userData.name=r.name,f.name=a),uo(f,r),r.extensions&&Bi(n,f,r),r.matrix!==void 0){let l=new Dt;l.fromArray(r.matrix),f.applyMatrix4(l)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!o.associations.has(f))o.associations.set(f,{});else if(r.mesh!==void 0&&o.meshCache.refs[r.mesh]>1){let l=o.associations.get(f);o.associations.set(f,{...l})}return o.associations.get(f).nodes=t,f}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],o=this,r=new De;n.name&&(r.name=o.createUniqueName(n.name)),uo(r,n),n.extensions&&Bi(e,r,n);let a=n.nodes||[],p=[];for(let s=0,u=a.length;s<u;s++)p.push(o.getDependency("node",a[s]));return Promise.all(p).then(function(s){for(let f=0,l=s.length;f<l;f++)r.add(s[f]);let u=f=>{let l=new Map;for(let[h,c]of o.associations)(h instanceof Ke||h instanceof He)&&l.set(h,c);return f.traverse(h=>{let c=o.associations.get(h);c!=null&&l.set(h,c)}),l};return o.associations=u(r),r})}_createAnimationTracks(t,e,n,o,r){let a=[],p=t.name?t.name:t.uuid,s=[];ti[r.path]===ti.weights?t.traverse(function(h){h.morphTargetInfluences&&s.push(h.name?h.name:h.uuid)}):s.push(p);let u;switch(ti[r.path]){case ti.weights:u=no;break;case ti.rotation:u=oo;break;case ti.translation:case ti.scale:u=io;break;default:n.itemSize===1?u=no:u=io;break}let f=o.interpolation!==void 0?Ag[o.interpolation]:Ti,l=this._getArrayFromAccessor(n);for(let h=0,c=s.length;h<c;h++){let d=new u(s[h]+"."+ti[r.path],e.array,l,f);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(d),a.push(d)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Zl(e.constructor),o=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)o[r]=e[r]*n;e=o}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let o=this instanceof oo?Ql:ef;return new o(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fg(i,t,e){let n=t.attributes,o=new an;if(n.POSITION!==void 0){let p=e.json.accessors[n.POSITION],s=p.min,u=p.max;if(s!==void 0&&u!==void 0){if(o.set(new x(s[0],s[1],s[2]),new x(u[0],u[1],u[2])),p.normalized){let f=Zl(Nr[p.componentType]);o.min.multiplyScalar(f),o.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let p=new x,s=new x;for(let u=0,f=r.length;u<f;u++){let l=r[u];if(l.POSITION!==void 0){let h=e.json.accessors[l.POSITION],c=h.min,d=h.max;if(c!==void 0&&d!==void 0){if(s.setX(Math.max(Math.abs(c[0]),Math.abs(d[0]))),s.setY(Math.max(Math.abs(c[1]),Math.abs(d[1]))),s.setZ(Math.max(Math.abs(c[2]),Math.abs(d[2]))),h.normalized){let T=Zl(Nr[h.componentType]);s.multiplyScalar(T)}p.max(s)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(p)}i.boundingBox=o;let a=new ln;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,i.boundingSphere=a}function qh(i,t,e){let n=t.attributes,o=[];function r(a,p){return e.getDependency("accessor",a).then(function(s){i.setAttribute(p,s)})}for(let a in n){let p=jl[a]||a.toLowerCase();p in i.attributes||o.push(r(n[a],p))}if(t.indices!==void 0&&!i.index){let a=e.getDependency("accessor",t.indices).then(function(p){i.setIndex(p)});o.push(a)}return Yt.workingColorSpace!==je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),uo(i,t),Fg(i,t,e),Promise.all(o).then(function(){return t.targets!==void 0?_g(i,t.targets,e):i})}function eb(i,t,e){fetch(i).then(n=>{if(!n.ok)throw new Error(`${i}: ${n.status}`);return n.arrayBuffer()}).then(n=>new tf().parse(n,"",t,e),e)}var Xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ng=new Ro(-1,1,1,-1,0,1),Gl=class extends ae{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Xg=new Gl,ei=class{constructor(t){this._mesh=new Ft(Xg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ng)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var nf=class extends Cn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=$n.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ei(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fp=class extends Cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let o=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,p;this.inverse?(a=0,p=1):(a=1,p=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),r.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),r.buffers.stencil.setClear(p),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(o.EQUAL,1,4294967295),r.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),r.buffers.stencil.setLocked(!0)}},of=class extends Cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var rf=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nf(Xr),this.copyPass.material.blending=$e,this.clock=new Ga}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let o=0,r=this.passes.length;o<r;o++){let a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let p=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),s.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}fp!==void 0&&(a instanceof fp?n=!0:a instanceof of&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var af=class extends Cn{constructor(t,e,n=null,o=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(t,e,n){let o=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=o}};var lp={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Dt},cameraProjectionMatrixInverse:{value:new Dt},cameraWorldMatrix:{value:new Dt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new x(-1,-1,-1)},sceneBoxMax:{value:new x(1,1,1)}},vertexShader:`

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
		}`},cp={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},pf={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function nb(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Jg(t),n=e.length,o=new Uint8Array(n*4);for(let a=0;a<n;++a){let p=e[a],s=2*Math.PI*p/n,u=new x(Math.cos(s),Math.sin(s),0).normalize();o[a*4]=(u.x*.5+.5)*255,o[a*4+1]=(u.y*.5+.5)*255,o[a*4+2]=127,o[a*4+3]=255}let r=new Lo(o,t,t);return r.wrapS=fn,r.wrapT=fn,r.needsUpdate=!0,r}function Jg(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),o=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(o===-1&&r===t?(r=t-2,o=0):(r===t&&(r=0),o<0&&(o=t-1)),n[o*t+r]!==0){r-=2,o++;continue}else n[o*t+r]=a++;r++,o--}return n}var hp={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Wl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraProjectionMatrixInverse:{value:new Dt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Wl(i,t,e){let n=zg(i,t,e),o="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];o+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return o}function zg(i,t,e){let n=[];for(let o=0;o<i;o++){let r=2*Math.PI*t*o/i,a=Math.pow(o/(i-1),e);n.push(new x(Math.cos(r),Math.sin(r),a))}return n}var sf=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,o,r,a=.5*(Math.sqrt(3)-1),p=(t+e)*a,s=Math.floor(t+p),u=Math.floor(e+p),f=(3-Math.sqrt(3))/6,l=(s+u)*f,h=s-l,c=u-l,d=t-h,T=e-c,y,b;d>T?(y=1,b=0):(y=0,b=1);let E=d-y+f,m=T-b+f,g=d-1+2*f,L=T-1+2*f,U=s&255,R=u&255,v=this.perm[U+this.perm[R]]%12,V=this.perm[U+y+this.perm[R+b]]%12,S=this.perm[U+1+this.perm[R+1]]%12,D=.5-d*d-T*T;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[v],d,T));let A=.5-E*E-m*m;A<0?o=0:(A*=A,o=A*A*this._dot(this.grad3[V],E,m));let _=.5-g*g-L*L;return _<0?r=0:(_*=_,r=_*_*this._dot(this.grad3[S],g,L)),70*(n+o+r)}noise3d(t,e,n){let o,r,a,p,u=(t+e+n)*.3333333333333333,f=Math.floor(t+u),l=Math.floor(e+u),h=Math.floor(n+u),c=1/6,d=(f+l+h)*c,T=f-d,y=l-d,b=h-d,E=t-T,m=e-y,g=n-b,L,U,R,v,V,S;E>=m?m>=g?(L=1,U=0,R=0,v=1,V=1,S=0):E>=g?(L=1,U=0,R=0,v=1,V=0,S=1):(L=0,U=0,R=1,v=1,V=0,S=1):m<g?(L=0,U=0,R=1,v=0,V=1,S=1):E<g?(L=0,U=1,R=0,v=0,V=1,S=1):(L=0,U=1,R=0,v=1,V=1,S=0);let D=E-L+c,A=m-U+c,_=g-R+c,$=E-v+2*c,F=m-V+2*c,J=g-S+2*c,tt=E-1+3*c,z=m-1+3*c,et=g-1+3*c,ft=f&255,yt=l&255,_t=h&255,$t=this.perm[ft+this.perm[yt+this.perm[_t]]]%12,ie=this.perm[ft+L+this.perm[yt+U+this.perm[_t+R]]]%12,qt=this.perm[ft+v+this.perm[yt+V+this.perm[_t+S]]]%12,G=this.perm[ft+1+this.perm[yt+1+this.perm[_t+1]]]%12,K=.6-E*E-m*m-g*g;K<0?o=0:(K*=K,o=K*K*this._dot3(this.grad3[$t],E,m,g));let dt=.6-D*D-A*A-_*_;dt<0?r=0:(dt*=dt,r=dt*dt*this._dot3(this.grad3[ie],D,A,_));let Ot=.6-$*$-F*F-J*J;Ot<0?a=0:(Ot*=Ot,a=Ot*Ot*this._dot3(this.grad3[qt],$,F,J));let Tt=.6-tt*tt-z*z-et*et;return Tt<0?p=0:(Tt*=Tt,p=Tt*Tt*this._dot3(this.grad3[G],tt,z,et)),32*(o+r+a+p)}noise4d(t,e,n,o){let r=this.grad4,a=this.simplex,p=this.perm,s=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20,f,l,h,c,d,T=(t+e+n+o)*s,y=Math.floor(t+T),b=Math.floor(e+T),E=Math.floor(n+T),m=Math.floor(o+T),g=(y+b+E+m)*u,L=y-g,U=b-g,R=E-g,v=m-g,V=t-L,S=e-U,D=n-R,A=o-v,_=V>S?32:0,$=V>D?16:0,F=S>D?8:0,J=V>A?4:0,tt=S>A?2:0,z=D>A?1:0,et=_+$+F+J+tt+z,ft=a[et][0]>=3?1:0,yt=a[et][1]>=3?1:0,_t=a[et][2]>=3?1:0,$t=a[et][3]>=3?1:0,ie=a[et][0]>=2?1:0,qt=a[et][1]>=2?1:0,G=a[et][2]>=2?1:0,K=a[et][3]>=2?1:0,dt=a[et][0]>=1?1:0,Ot=a[et][1]>=1?1:0,Tt=a[et][2]>=1?1:0,Gt=a[et][3]>=1?1:0,ve=V-ft+u,M=S-yt+u,le=D-_t+u,Bt=A-$t+u,vt=V-ie+2*u,Vt=S-qt+2*u,ce=D-G+2*u,St=A-K+2*u,Jt=V-dt+3*u,Oe=S-Ot+3*u,Ee=D-Tt+3*u,O=A-Gt+3*u,w=V-1+4*u,B=S-1+4*u,Y=D-1+4*u,q=A-1+4*u,Q=y&255,Pt=b&255,pt=E&255,Et=m&255,Ct=p[Q+p[Pt+p[pt+p[Et]]]]%32,rt=p[Q+ft+p[Pt+yt+p[pt+_t+p[Et+$t]]]]%32,ht=p[Q+ie+p[Pt+qt+p[pt+G+p[Et+K]]]]%32,At=p[Q+dt+p[Pt+Ot+p[pt+Tt+p[Et+Gt]]]]%32,xt=p[Q+1+p[Pt+1+p[pt+1+p[Et+1]]]]%32,ut=.6-V*V-S*S-D*D-A*A;ut<0?f=0:(ut*=ut,f=ut*ut*this._dot4(r[Ct],V,S,D,A));let Ht=.6-ve*ve-M*M-le*le-Bt*Bt;Ht<0?l=0:(Ht*=Ht,l=Ht*Ht*this._dot4(r[rt],ve,M,le,Bt));let I=.6-vt*vt-Vt*Vt-ce*ce-St*St;I<0?h=0:(I*=I,h=I*I*this._dot4(r[ht],vt,Vt,ce,St));let ot=.6-Jt*Jt-Oe*Oe-Ee*Ee-O*O;ot<0?c=0:(ot*=ot,c=ot*ot*this._dot4(r[At],Jt,Oe,Ee,O));let st=.6-w*w-B*B-Y*Y-q*q;return st<0?d=0:(st*=st,d=st*st*this._dot4(r[xt],w,B,Y,q)),27*(f+l+h+c+d)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,o){return t[0]*e+t[1]*n+t[2]*o}_dot4(t,e,n,o,r){return t[0]*e+t[1]*n+t[2]*o+t[3]*r}};var bp=class i extends Cn{constructor(t,e,n=512,o=512,r,a,p){super(),this.width=n,this.height=o,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=nb(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ze(this.width,this.height,{type:Un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xe({defines:Object.assign({},lp.defines),uniforms:$n.clone(lp.uniforms),vertexShader:lp.vertexShader,fragmentShader:lp.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Na,this.normalMaterial.blending=$e,this.pdMaterial=new xe({defines:Object.assign({},hp.defines),uniforms:$n.clone(hp.uniforms),vertexShader:hp.vertexShader,fragmentShader:hp.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xe({defines:Object.assign({},cp.defines),uniforms:$n.clone(cp.uniforms),vertexShader:cp.vertexShader,fragmentShader:cp.fragmentShader,blending:$e}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xe({uniforms:$n.clone(Xr.uniforms),vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ep,blendDst:Di,blendEquation:Sn,blendSrcAlpha:tp,blendDstAlpha:Di,blendEquationAlpha:Sn}),this.blendMaterial=new xe({uniforms:$n.clone(pf.uniforms),vertexShader:pf.vertexShader,fragmentShader:pf.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:js,blendSrc:ep,blendDst:Di,blendEquation:Sn,blendSrcAlpha:tp,blendDstAlpha:Di,blendEquationAlpha:Sn}),this._fsQuad=new ei(null),this._originalClearColor=new mt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),p!==void 0&&this.updatePdMaterial(p)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new wi,this.depthTexture.format=Ko,this.depthTexture.type=Wo,this.normalRenderTarget=new Ze(this.width,this.height,{minFilter:_e,magFilter:_e,type:Un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,o=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=o,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=o,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,o,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),p=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,o=e.clearColor||o,r=e.clearAlpha||r,o!=null&&(t.setClearColor(o),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=p,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new sf,n=t*t*4,o=new Uint8Array(n);for(let a=0;a<t;a++)for(let p=0;p<t;p++){let s=a,u=p;o[(a*t+p)*4]=(e.noise(s,u)*.5+.5)*255,o[(a*t+p)*4+1]=(e.noise(s+t,u)*.5+.5)*255,o[(a*t+p)*4+2]=(e.noise(s,u+t)*.5+.5)*255,o[(a*t+p)*4+3]=(e.noise(s+t,u+t)*.5+.5)*255}let r=new Lo(o,t,t,sn,Ln);return r.wrapS=fn,r.wrapT=fn,r.needsUpdate=!0,r}};bp.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var dp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var uf=class extends Cn{constructor(){super(),this.uniforms=$n.clone(dp.uniforms),this.material=new Fa({name:dp.name,uniforms:this.uniforms,vertexShader:dp.vertexShader,fragmentShader:dp.fragmentShader}),this._fsQuad=new ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===au?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ru&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fe=i=>new mt(i),Z7=new mt,Y7=new x(-.99,1.9,.42).normalize();function jg(i=.35){return jt.lights_physical_pars_fragment.replace("vec3 irradiance = dotNL * directLight.color;",`vec3 irradiance = dotNL * directLight.color;
	vec3 wrapIrradiance = clamp((dot(geometryNormal, directLight.direction) + ${i.toFixed(2)}) / ${(1+i).toFixed(2)}, 0.0, 1.0) * directLight.color;`).replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );","reflectedLight.directDiffuse += wrapIrradiance * BRDF_Lambert( material.diffuseColor );")}function ob(i=.35,t=.82){let e=new Je({vertexColors:!0,roughness:t,metalness:0});return e.customProgramCacheKey=()=>`veg${i}`,e.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",jg(i))},e}var G7={deep:fe(3105856),mid:fe(5808210),lit:fe(10146920),tip:fe(11853424)},W7={dark:fe(4139548),lit:fe(7754810)};var K7={deep:fe(1324063),mid:fe(2843175),lit:fe(5741104),sun:fe(9421374)};var q7={base:fe(5082924),tip:fe(10408527)};var tS=fe(16512740),eS=fe(15908655);var Se=i=>new mt(i);var iS=new Dt,rS=new Ie,aS=new wn,pS=new x,sS=new x;var Zg={stone:Se(11579308),stoneLight:Se(13289668),stoneDark:Se(9276553),mortar:Se(7237230),roof:Se(10898229),roofDark:Se(8862506),roofLight:Se(12278850),wood:Se(10117686),woodDark:Se(7225892),woodLight:Se(12090183),plaster:Se(15721156),iron:Se(4869461),ironLight:Se(7567493),gold:Se(14857029),goldDark:Se(12093994),blue:Se(3104708),blueDark:Se(2312860),grass:Se(9420629),dirt:Se(11569754),paving:Se(13221806),canvas:Se(13214282),canvasDark:Se(11043898),charcoal:Se(3881528),straw:Se(14729314)};var Yg=null;function ib(i){Yg=i}var rb=14280372,Gg=new x(-.99,1.9,.42).normalize();function ab(i){let t=new Ku({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=Ar,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=qa,t.info.autoReset=!1,ib(ob(.3,.86));let e=new Ca;e.background=new mt(rb),e.fog=new Ua(rb,60,140);let n=new Ae(30,16/9,.5,400);e.add(new za(13953535,6257978,.85));let o=new Ri(16773327,3.3);o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.radius=3,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.camera.near=1,o.shadow.camera.far=200,e.add(o,o.target);let r=location.search.includes("manual"),a={on:!location.search.includes("noao")},p=new rf(t,new Ze(1,1,{type:Un,samples:4}));p.addPass(new af(e,n));let s=new bp(e,n,1,1);s.updateGtaoMaterial({radius:1.2,distanceExponent:1.6,thickness:1.2,scale:1.3,samples:12,distanceFallOff:1}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});let u=s,f=u._overrideVisibility.bind(s);u._overrideVisibility=()=>{f(),e.traverse(y=>{(y.isSprite||y.userData.noAO)&&y.visible&&(y.visible=!1,u._visibilityCache.push(y))})},p.addPass(s),p.addPass(new uf);let l=0,h=0,c=()=>{let y=i.clientWidth||window.innerWidth,b=i.clientHeight||window.innerHeight;l=i.clientWidth,h=i.clientHeight,t.setSize(y,b,!1),p.setSize(y,b),n.aspect=y/b,n.updateProjectionMatrix()};return window.addEventListener("resize",c),typeof ResizeObserver<"u"&&new ResizeObserver(()=>c()).observe(i),c(),{renderer:t,scene:e,camera:n,sun:o,draw:()=>{i.clientWidth&&(i.clientWidth!==l||i.clientHeight!==h)&&c(),t.info.reset(),a.on?p.render():t.render(e,n)},resize:c,aimSun:(y,b)=>{o.target.position.copy(y),o.position.copy(y).addScaledVector(Gg,80);let E=o.shadow.camera;E.left=-b,E.right=b,E.top=b,E.bottom=-b,E.updateProjectionMatrix()},manual:r,ao:a}}var kS=new mt;var BS={dark:fe(9405305),mid:fe(11773847),lit:fe(14077116),moss:fe(8367685)};var FS={bark:fe(8011298),barkLit:fe(11230515),ring:fe(14262369),core:fe(12944455),groove:fe(5975064)};var NS={top:fe(9724991),lit:fe(11565643),side:fe(5912613),deep:fe(4139550),crack:fe(15327439)};var ff=null;function pb(){if(ff)return ff;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.45,"rgba(0,0,0,0.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ff=new Uo(i),ff}var sb="./assets/soldat-jeu-RISUTZOK.glb";var ub="./assets/archere-jeu-TJ352OCY.glb";var ql="./assets/colosse-jeu-77SM33LG.glb";var fb="./assets/brigand-jeu-AGABQCJG.glb";var lb="./assets/druidesse-jeu-HCATNSXO.glb";var cb="./assets/baleine-jeu-FE5ANNKN.glb";var hb="./assets/troll-jeu-D72UI5RL.glb";var yp={about:"The painted surroundings of a site (game/src/map/backdrop.ts): one image per kind of site, seen from the game camera (yaw, pitch), projected orthographically along its axis onto the ground. The image is w metres wide in the camera's plane (across the screen) and w * py / px metres high; its centre is the plot's centre, raised by up metres on the screen. plotHalf must be the rules' (sim/village.ts PLOT_HALF, sim/camps.ts CAMP_HALF); band: the darker border band just outside the plot, in metres. pipeline/diorama/layout.py draws the framing for the image generator; game/tools/backdrop.mjs bakes the placeholders.",camera:{yaw:45,pitch:47},village:{plotHalf:26,band:2.5,w:163.8,up:.36,px:4096,py:1728,image:"village.webp"},camp:{plotHalf:18,band:2,w:114.7,up:.34,px:4096,py:1728,image:"camp.webp"},arene:{halfX:14,halfZ:20,band:1.5,w:140,up:3,px:4096,py:1728,image:"arene.webp",about:"the auto-battler's first arena (retired on 06/11 for l'\xEEle de l'\xC9clat; its picture is no longer in the game): a rectangle of halfX by halfZ metres, its long side along z, my edge at +z (the lower left of the screen); pipeline/diorama/layout.py draws its framing and the island's plan from it"},ile:{w:89.435,up:-.1624,px:4096,py:1728,image:"ile.webp",about:"L'\xC9clat's map, l'\xEEle de l'\xC9clat (game/src/autobattler/client/backdrop.ts): the field is the diamond of 40 m corner to corner seen from the camera, my corner at the bottom of the screen, the \xC9clat at the picture's centre across and `up` metres below it; pipeline/concepts/ile/jeu.py cuts it from the validated painting and prints these numbers, terrain.py reads the rules' ground from the same framing"}};var Jr=tn.degToRad(yp.camera.yaw),Fi=tn.degToRad(yp.camera.pitch),qS={view:new x(Math.sin(Jr)*Math.cos(Fi),Math.sin(Fi),Math.cos(Jr)*Math.cos(Fi)),right:new x(Math.cos(Jr),0,-Math.sin(Jr)),up:new x(-Math.sin(Jr)*Math.sin(Fi),Math.cos(Fi),-Math.cos(Jr)*Math.sin(Fi))};function lf(i,t){let e=i,n=-t/Math.sin(Fi),o=Math.SQRT1_2;return{x:o*(e+n),z:o*(n-e)}}var cf="./assets/ile-V6VVSPMK.webp";var mp=yp.ile,fo={w:mp.w,h:mp.w*mp.py/mp.px,up:mp.up},hf=class{constructor(t){C(this,"group",new De);C(this,"ready");C(this,"catcher");this.group.name="arena backdrop";let e=[],n=[];for(let[s,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let f=lf(s*fo.w/2,fo.up+u*fo.h/2);e.push(f.x,0,f.z),n.push((s+1)/2,(u+1)/2)}let o=new ae;o.setAttribute("position",new Xt(e,3)),o.setAttribute("uv",new Xt(n,2)),o.setIndex([0,2,1,0,3,2]),o.computeVertexNormals(),o.getAttribute("normal").getY(0)<0&&(o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals());let r=new oe({toneMapped:!1,fog:!1}),a=new Ft(o,r);a.frustumCulled=!1,a.renderOrder=-2,a.visible=!1,this.group.add(a),this.catcher=new Ft(new cn(48,48).rotateX(-Math.PI/2),new vr({color:1714704,opacity:.36,depthWrite:!1})),this.catcher.position.y=.01,this.catcher.receiveShadow=!0,this.catcher.renderOrder=-1,this.group.add(this.catcher);let p=Math.min(8,t.capabilities.getMaxAnisotropy());this.ready=new ao().loadAsync(cf).then(s=>{s.colorSpace=Te,s.anisotropy=p,s.minFilter=dn,r.map=s,r.needsUpdate=!0,a.visible=!0},()=>{})}};var bb="./assets/ile-vie-7U7YUT2S.webp";var pT=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,sT=`
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
}`,bf=class{constructor(){C(this,"group",new De);C(this,"mat");C(this,"birds",[]);C(this,"nextFlock",4+Math.random()*6);C(this,"birdGeo",uT());C(this,"birdMat",new Je({vertexColors:!0,roughness:.8,side:qe}));C(this,"shadowGeo",new Pi(.55,16).rotateX(-Math.PI/2).scale(1.4,1,.8));C(this,"shadowMat",new oe({color:989704,transparent:!0,opacity:.18,depthWrite:!1,toneMapped:!1}));C(this,"ready");this.group.name="arena life";let t=[],e=[];for(let[r,a]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let p=lf(r*fo.w/2,fo.up+a*fo.h/2);t.push(p.x,.02,p.z),e.push((r+1)/2,(a+1)/2)}let n=new ae;n.setAttribute("position",new Xt(t,3)),n.setAttribute("uv",new Xt(e,2)),n.setIndex([0,2,1,0,3,2]),n.computeVertexNormals(),n.getAttribute("normal").getY(0)<0&&(n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals()),this.mat=new xe({vertexShader:pT,fragmentShader:sT,transparent:!0,depthWrite:!1,blending:vo,toneMapped:!1,uniforms:{tMask:{value:null},uTime:{value:0},uSize:{value:new nt(fo.w,fo.h)},uUp:{value:fo.up}}});let o=new Ft(n,this.mat);o.frustumCulled=!1,o.renderOrder=-1,o.visible=!1,this.group.add(o),this.ready=new ao().loadAsync(bb).then(r=>{r.colorSpace=Yn,r.minFilter=Qe,r.generateMipmaps=!1,this.mat.uniforms.tMask.value=r,o.visible=!0},()=>{})}frame(t){this.mat.uniforms.uTime.value+=t,this.nextFlock-=t,this.nextFlock<=0&&this.birds.length===0&&(this.flock(),this.nextFlock=14+Math.random()*14),this.birds=this.birds.filter(e=>{e.t+=t;let n=e.root.position.copy(e.from).addScaledVector(e.dir,e.t*6.5);n.y=e.from.y+Math.sin(e.t*.7+e.phase)*.6;let o=Math.sin(e.t*9+e.phase)*(.5+.5*Math.max(0,Math.sin(e.t*.9+e.phase)));return e.wings[0].rotation.z=.15+o*.55,e.wings[1].rotation.z=-.15-o*.55,e.shadow.position.set(n.x+n.y*.52,.04,n.z-n.y*.22),e.t>22?(this.group.remove(e.root,e.shadow),!1):!0})}flock(){let t=new x(1,0,-1).normalize(),e=new x(-1,0,-1).normalize(),n=(Math.random()-.5)*.5,o=t.clone().addScaledVector(e,n).normalize();Math.random()<.5&&o.negate();let r=o.clone().multiplyScalar(-72).addScaledVector(e,(Math.random()-.5)*24),a=3+Math.floor(Math.random()*3);for(let p=0;p<a;p++){let s=new De,u=new Ft(this.birdGeo.body,this.birdMat),f=new Ft(this.birdGeo.wing,this.birdMat),l=new Ft(this.birdGeo.wing,this.birdMat);l.scale.x=-1,s.add(u,f,l),s.scale.setScalar(.9+Math.random()*.3);let h=new x(-o.z,0,o.x),c=r.clone().addScaledVector(o,-p*1.8-Math.random()).addScaledVector(h,(p%2?1:-1)*Math.ceil(p/2)*1.6);c.y=13+Math.random()*3,s.position.copy(c),s.rotation.y=Math.atan2(o.x,o.z);let d=new Ft(this.shadowGeo,this.shadowMat);d.rotation.y=s.rotation.y,d.renderOrder=1,this.group.add(s,d),this.birds.push({root:s,wings:[f,l],shadow:d,from:c,dir:o,t:0,phase:Math.random()*6.283})}}};function uT(){let i=(n,o)=>{let r=n.getAttribute("position").count,a=[];for(let p=0;p<r;p++)a.push(...o.slice(p%(o.length/3)*3,p%(o.length/3)*3+3));return n.setAttribute("color",new Xt(a,3)),n},t=new Cr(.13,.75,5).rotateX(Math.PI/2);i(t,[.96,.96,.94]);let e=new ae;return e.setAttribute("position",new Xt([0,0,.18,0,0,-.16,.55,.05,.06,.55,.05,.06,0,0,-.16,.6,.02,-.12,.55,.05,.06,.6,.02,-.12,1.05,-.04,-.08],3)),e.setAttribute("color",new Xt([.93,.94,.95,.93,.94,.95,.86,.88,.9,.86,.88,.9,.93,.94,.95,.86,.88,.9,.86,.88,.9,.86,.88,.9,.2,.2,.22],3)),e.computeVertexNormals(),{body:t,wing:e}}var df=tn.degToRad(45),zr=tn.degToRad(47),db=20,fT=new x(-.99,1.9,.42).normalize(),tc={top:52,bottom:26,side:18},yb=2.6,lT=1.8,cT=4,gp={barbarian:{url:sb,height:1.7},archer:{url:ub,height:1.65},tank:{url:ql,height:2.6},assassin:{url:fb,height:1.75},druid:{url:lb,height:1.95,blow:16},whale:{url:cb,height:2,bar:3.6,blow:16},banner:{url:null,height:2.6},guardian:{url:ql,height:4.4},beast:{url:hb,height:3,blow:11}},hT=.82,Tp=new mt(4164863),Ep=new mt(16729943),nc=new mt(16761402),mb=new Map;function bT(i,t){let e=mb.get(i);return e||(e=[ec(i,Tp),ec(i,Ep),ec(i,nc,.5)],mb.set(i,e)),e[t]}function ec(i,t,e=1.4){let n=i.clone(),o=t.getHexString();return n.onBeforeCompile=r=>{r.uniforms.rimColor={value:t},r.fragmentShader=`uniform vec3 rimColor;
`+r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rimK = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
      totalEmissiveRadiance += rimColor * pow(rimK, 2.0) * ${e.toFixed(2)};`)},n.customProgramCacheKey=()=>`rim-${o}-${e}`,n}var mf=class{constructor(t){C(this,"stage");C(this,"scene");C(this,"group",new De);C(this,"kinds",{});C(this,"figs",new Map);C(this,"side",0);C(this,"map",Wn[0]);C(this,"mapped",null);C(this,"half",{x:14,z:14});C(this,"battle",null);C(this,"noDrop");C(this,"noDropMat");C(this,"noDropCtx");C(this,"noDropKey","");C(this,"outside");C(this,"dropKind","barbarian");C(this,"zones",new Map);C(this,"zoneMats");C(this,"heralds",[]);C(this,"heraldMat");C(this,"redK",0);C(this,"aimedAt","");C(this,"fit",{dist:120,target:new x});C(this,"zoom",1);C(this,"chosen",null);C(this,"pan",new x);C(this,"placedAt","");C(this,"backdrop");C(this,"life",new bf);C(this,"rings");C(this,"blobs");C(this,"bars");C(this,"fills");C(this,"marks");C(this,"arrows",[]);C(this,"arrowGeo",new In(.025,.025,.7,4).rotateX(Math.PI/2));C(this,"arrowMat",new oe({color:5913372}));C(this,"fxs",[]);C(this,"shardGeo",new Ba(.32,0).scale(.7,1.3,.7));C(this,"shardMat",new Je({color:7336686,emissive:4184544,emissiveIntensity:.9,roughness:.3}));C(this,"boltMat",new oe({color:15262975,transparent:!0,depthWrite:!1,blending:vo}));C(this,"boltGeo",new In(.07,.07,1,5).translate(0,.5,0));C(this,"ringGeo",new Yo(.86,1,48).rotateX(-Math.PI/2));C(this,"discGeo",new Pi(1,40).rotateX(-Math.PI/2));C(this,"raycaster",new Ka);C(this,"plane",new Mn(new x(0,1,0),0));C(this,"time",0);C(this,"lastTick",-1);C(this,"frameNo",0);C(this,"jsMs",0);C(this,"ready");C(this,"showRed",!1);C(this,"noDropSmall",null);this.stage=ab(t),this.stage.ao.on=!1,this.stage.sun.shadow.mapSize.set(2048,2048),this.scene=this.stage.scene,this.scene.fog=null,this.scene.background=new mt(4086316),this.stage.camera.fov=db,this.backdrop=new hf(this.stage.renderer),this.scene.add(this.backdrop.group,this.life.group,this.group);let e=document.createElement("canvas");this.noDropCtx=e.getContext("2d");let n=new Uo(e);n.colorSpace=Te,this.noDropMat=new oe({map:n,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}),this.noDrop=new Ft(new ae,this.noDropMat),this.noDrop.position.y=.04,this.noDrop.visible=!1,this.noDrop.renderOrder=2;let o=Z.banner.radius;this.zoneMats=[Tp,Ep].map(a=>new oe({map:gb(o,"rgba(255,255,255,0.13)"),color:a,transparent:!0,depthWrite:!1,toneMapped:!1})),this.heraldMat=new oe({map:gb(2.2,"rgba(255,255,255,0.18)"),color:nc,transparent:!0,depthWrite:!1,toneMapped:!1}),this.outside=new Ft(new ae,new oe({color:1317386,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1})),this.outside.position.y=.05,this.outside.visible=!1,this.outside.renderOrder=2,this.group.add(this.outside),this.rings=new Zn(new Yo(.4,.48,32).rotateX(-Math.PI/2),new oe({color:16777215,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),400),this.blobs=new Zn(new cn(1.15,1.15).rotateX(-Math.PI/2),new oe({map:pb(),color:1055240,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1}),400),this.blobs.count=0,this.blobs.frustumCulled=!1,this.blobs.renderOrder=0,this.rings.count=0,this.rings.frustumCulled=!1,this.marks=new Zn(new Yo(.25,.42,16).rotateX(-Math.PI/2),new oe({color:16777215,transparent:!0,opacity:.9,depthWrite:!1}),120),this.marks.count=0,this.marks.frustumCulled=!1;let r=new cn(1,.13);this.bars=new Zn(r,new oe({color:1774604,depthTest:!1,transparent:!0,opacity:.8}),400),this.fills=new Zn(r.clone().translate(.5,0,0),new oe({color:16777215,depthTest:!1}),400);for(let a of[this.bars,this.fills])a.count=0,a.frustumCulled=!1,a.renderOrder=10;this.group.add(this.blobs,this.noDrop,this.rings,this.marks,this.bars,this.fills),this.setMap(Wn[0]),this.aim(),this.ready=Promise.all([this.load(),this.backdrop.ready,this.life.ready]).then(()=>{})}aim(){let t=this.stage.camera,e=this.stage.renderer.domElement,n=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight,r=`${n}x${o}`;r!==this.aimedAt&&(this.aimedAt=r,this.frame0(t,n,o),this.placedAt="");let a=1-1/this.zoom,p=this.half.x*a,s=this.half.z*a;this.pan.x=tn.clamp(this.pan.x,-p-this.fit.target.x,p-this.fit.target.x),this.pan.z=tn.clamp(this.pan.z,-s-this.fit.target.z,s-this.fit.target.z),this.zoom<=1.0001&&this.pan.set(0,0,0);let u=`${this.zoom.toFixed(4)}:${this.pan.x.toFixed(3)}:${this.pan.z.toFixed(3)}`;if(u===this.placedAt)return;this.placedAt=u;let f=new x(Math.sin(df)*Math.cos(zr),Math.sin(zr),Math.cos(df)*Math.cos(zr)),l=this.fit.target.clone().add(this.pan);t.position.copy(l).addScaledVector(f,this.fit.dist/this.zoom),t.lookAt(l),t.updateMatrixWorld(!0),this.stage.aimSun(l,30),this.stage.sun.position.copy(l).addScaledVector(fT,120)}zoomAt(t,e,n,o){let r=this.groundAt(e,n,o);this.zoom=tn.clamp(this.zoom*t,1,yb),this.aim();let a=this.groundAt(e,n,o);r&&a&&(this.pan.x+=r.x-a.x,this.pan.z+=r.z-a.z),this.aim()}panScreen(t,e,n,o,r){let a=this.groundAt(t,e,r),p=this.groundAt(n,o,r);a&&p&&(this.pan.x+=a.x-p.x,this.pan.z+=a.z-p.z,this.aim())}resetView(){this.zoom=1,this.pan.set(0,0,0),this.aim()}battleView(){if(this.chosen){this.zoom=this.chosen.zoom,this.pan.copy(this.chosen.pan),this.aim();return}this.zoom=lT;let t=this.toWorld(this.map.width/2,this.map.length/2-cT,0);this.pan.set(t.x-this.fit.target.x,0,t.z-this.fit.target.z),this.aim()}lookAt(t,e,n){let o=this.toWorld(t,e,this.side);this.zoom=tn.clamp(n,1,yb),this.pan.set(o.x-this.fit.target.x,0,o.z-this.fit.target.z),this.aim()}keepView(){this.chosen={zoom:this.zoom,pan:this.pan.clone()}}toggleView(){this.zoom>1.0001?(this.resetView(),this.chosen=null):(this.chosen=null,this.battleView())}groundAt(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new nt(p,s),this.stage.camera);let u=new x;return this.raycaster.ray.intersectPlane(this.plane,u)?u:null}frame0(t,e,n){t.fov=db,t.aspect=e/n,t.near=1,t.far=600;let o=new x(Math.sin(df)*Math.cos(zr),Math.sin(zr),Math.cos(df)*Math.cos(zr)),r=new x(-1,0,-1).normalize(),a=this.outline().map(([c,d])=>this.toWorld(c,d,0)),p={x:1-2*tc.side/e,top:1-2*tc.top/n,bottom:-1+2*tc.bottom/n},s=new x,u=new x,f=(c,d)=>{s.copy(r).multiplyScalar(c),t.position.copy(s).addScaledVector(o,d),t.lookAt(s),t.updateProjectionMatrix(),t.updateMatrixWorld(!0)},l=()=>a.every(c=>(u.copy(c).project(t),Math.abs(u.x)<=p.x&&u.y<=p.top&&u.y>=p.bottom)),h={dist:400,shift:0};for(let c=-6;c<=6;c+=.25){let d=20,T=400;if(f(c,T),!!l()){for(let y=0;y<40;y++){let b=(d+T)/2;f(c,b),l()?T=b:d=b}T<h.dist&&(h={dist:T,shift:c})}}f(h.shift,h.dist),this.fit={dist:h.dist,target:s.clone()}}async load(){let t=e=>new Promise((n,o)=>eb(e,n,o));await Promise.all([...[...be,"guardian","beast"].map(async e=>{let n=gp[e].url;if(!n)return;let o=await t(n),r=new an().setFromObject(o.scene),a=r.max.y-r.min.y||1;o.scene.traverse(p=>{let s=p;if(s.isMesh&&(s.castShadow=!0,s.frustumCulled=!1,e==="whale")){let u=s.material;u.transparent=!0,u.opacity=hT,u.depthWrite=!0}}),this.kinds[e]={template:o.scene,clips:o.animations,scale:gp[e].height/a}})])}setSide(t){this.side=t,this.group.rotation.y=this.turnOf(t)}turnOf(t){return(this.map.shape==="diamond"?Math.PI/4:0)+(t===1?Math.PI:0)}toWorld(t,e,n){return this.at(t,e).applyAxisAngle(new x(0,1,0),this.turnOf(n))}outline(){let t=this.map.width,e=this.map.length;return this.map.shape==="diamond"?[[t/2,0],[t,e/2],[t/2,e],[0,e/2]]:[[0,0],[t,0],[t,e],[0,e]]}setMap(t){if(this.mapped===t)return;this.mapped=this.map=t,this.noDropKey="";let e=this.noDropCtx.canvas;e.width=t.width*lo,e.height=t.length*lo,this.noDropMat.map?.dispose();let n=new Uo(e);n.colorSpace=Te,this.noDropMat.map=n,this.noDropMat.needsUpdate=!0,this.noDrop.geometry.dispose(),this.noDrop.geometry=new cn(t.width,t.length).rotateX(-Math.PI/2),this.outside.geometry.dispose(),this.outside.geometry=mT(this.outline().map(([r,a])=>this.at(r,a)),160);let o=this.outline().map(([r,a])=>this.toWorld(r,a,0));this.half={x:Math.max(...o.map(r=>Math.abs(r.x))),z:Math.max(...o.map(r=>Math.abs(r.z)))},this.group.rotation.y=this.turnOf(this.side),this.aimedAt=""}setBattle(t){if(t!==this.battle){t&&this.setMap(t.map);for(let e of this.figs.values())this.group.remove(e.root);for(let e of this.arrows)this.group.remove(e.m);for(let e of this.fxs)this.group.remove(e.obj);this.figs.clear(),this.arrows=[],this.fxs=[],this.battle=t}}at(t,e,n=new x){return n.set(t-this.map.width/2,0,this.map.length/2-e)}pick(t,e,n){let o=n.getBoundingClientRect(),r=n.clientWidth,a=n.clientHeight,p=(t-(o.width===r?o.left:0))/r*2-1,s=-((e-(o.height===a?o.top:0))/a)*2+1;this.raycaster.setFromCamera(new nt(p,s),this.stage.camera);let u=new x;if(!this.raycaster.ray.intersectPlane(this.plane,u))return null;let f=u.applyAxisAngle(new x(0,1,0),-this.turnOf(this.side));return{x:f.x+this.map.width/2,y:this.map.length/2-f.z}}frame(t,e){this.time+=t,this.frameNo++;let n=performance.now(),o=this.battle,r=new Dt,a=new Ie,p=new x,s=new x(1,1,1);this.aim(),this.life.frame(t);let u=this.showRed&&o?1:0;this.redK+=(u-this.redK)*(1-Math.exp(-t*(u?12:4)));let f=this.redK>.01;if(f&&o&&this.paintNoDrop(o),this.noDrop.visible=f,this.noDropMat.opacity=this.redK,this.drawZones(o),this.outside.visible=f,this.outside.material.opacity=.34*this.redK,!o){this.rings.count=0,this.blobs.count=0,this.bars.count=0,this.fills.count=0,this.marks.count=0;for(let m of this.fxs)this.group.remove(m.obj);this.fxs=[],this.stage.draw();return}let l=this.stage.camera.quaternion.clone().premultiply(this.group.quaternion.clone().invert()),h=0,c=0,d=new mt,T=o.tick!==this.lastTick;this.lastTick=o.tick;for(let m of o.units){let g=this.figs.get(m.id);if(!g&&(!m.alive||(g=this.make(m),!g)))continue;T&&(g.px=g.cx,g.py=g.cy,g.cx=m.x,g.cy=m.y);let L=g.px+(g.cx-g.px)*e,U=g.py+(g.cy-g.py)*e,R=Math.abs(g.cx-g.px)+Math.abs(g.cy-g.py)>.004;this.at(L,U,g.root.position);let v=Math.max(0,1-(o.tick-g.born+e)*ze/.3);g.root.position.y=v*v*3;let V=g.ry;if(m.target&&m.target.alive?V=Math.atan2(m.target.x-m.x,-(m.target.y-m.y)):R&&(V=Math.atan2(g.cx-g.px,-(g.cy-g.py))),g.ry=dT(g.ry,V,t*10),g.root.rotation.y=g.ry,m.alive)if(m.struck!==g.struck&&m.struck>=0){g.struck=m.struck,yf(g,"attack",!0,Math.max(1,.9/m.period));let A=gp[m.kind].blow,_=g.actions.attack;A!==void 0&&_&&(_.time=Math.max(0,A/30-.12)),m.kind==="archer"&&m.target&&this.shoot(m,m.target),m.kind==="whale"&&m.target&&this.shard(g,m.target,m.splash),m.kind==="druid"&&m.target&&this.lightning(m.target.x,m.target.y,m.splash)}else(g.current!=="attack"||!g.actions.attack?.isRunning())&&yf(g,R?"run":"idle",!1,R?m.speed/2.6:1);else if(g.dead||(g.dead=this.time,yf(g,"death",!0)),this.time-g.dead>1.6&&(g.root.position.y-=(this.time-g.dead-1.6)*.8),this.time-g.dead>2.6){this.group.remove(g.root),this.figs.delete(m.id);continue}if(this.figs.size<=80?g.mixer.update(t):(this.frameNo+m.id)%2===0&&g.mixer.update(t*2),m.cried!==g.cried&&m.cried>=0&&(g.cried=m.cried,this.cry(g.root.position,this.colour(m.side))),!m.alive)continue;let S=m.radius/.35*.75,D=m.kind==="whale";if(r.compose(p.set(g.root.position.x,.03,g.root.position.z),a.identity(),new x(S*(D?.8:1),1,S*(D?.8:1))),this.blobs.setMatrixAt(h,r),r.compose(p.set(g.root.position.x,.05,g.root.position.z),a.identity(),new x(S,1,S)),this.rings.setMatrixAt(h,r),this.rings.setColorAt(h++,this.colour(m.side)),m.hp<m.maxHp&&c<400){let A=m.side===Kn?2.4:m.kind==="tank"||m.kind==="whale"?1.5:.9,_=gp[m.kind].bar??gp[m.kind].height+.35;r.compose(p.set(g.root.position.x,_,g.root.position.z),l,new x(A,1,1)),this.bars.setMatrixAt(c,r);let $=Math.max(.02,m.hp/m.maxHp),F=new x(-A/2,0,0).applyQuaternion(l);r.compose(p.set(g.root.position.x+F.x,_+F.y,g.root.position.z+F.z),l,new x(A*$,1,1)),this.fills.setMatrixAt(c,r),this.fills.setColorAt(c++,d.copy(this.colour(m.side)))}}this.rings.count=h,this.rings.instanceMatrix.needsUpdate=!0,this.blobs.count=h,this.blobs.instanceMatrix.needsUpdate=!0,this.rings.instanceColor&&(this.rings.instanceColor.needsUpdate=!0),this.bars.count=c,this.fills.count=c,this.bars.instanceMatrix.needsUpdate=!0,this.fills.instanceMatrix.needsUpdate=!0,this.fills.instanceColor&&(this.fills.instanceColor.needsUpdate=!0);let y=0,b=1+.25*Math.sin(this.time*14);for(let m of o.pendingDrops()){if(y>=120)break;this.at(m.x,m.y,p),r.compose(p.setY(.06),a.identity(),s.clone().multiplyScalar(b)),this.marks.setMatrixAt(y,r),this.marks.setColorAt(y++,m.side===this.side?Tp:Ep)}this.marks.count=y,this.marks.instanceMatrix.needsUpdate=!0,this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0),this.jsMs=performance.now()-n,this.arrows=this.arrows.filter(m=>(m.t+=t/.22,m.t>=1?(this.group.remove(m.m),!1):(m.m.position.lerpVectors(m.from,m.to,m.t),m.m.position.y+=Math.sin(m.t*Math.PI)*.8,m.m.lookAt(m.to.x,m.m.position.y,m.to.z),!0)));let E=this.fxs;this.fxs=[];for(let m of E){if(m.t+=t/m.dur,m.t>=1){this.group.remove(m.obj);continue}this.fxs.push(m),m.tick(m.t)}this.stage.draw()}shard(t,e,n){let o=new x;t.blowhole?(t.blowhole.getWorldPosition(o),this.group.worldToLocal(o)):o.copy(t.root.position).setY(3.5);let r=this.at(e.x,e.y).setY(.3),a=new Ft(this.shardGeo,this.shardMat);this.group.add(a);let p=!1;this.fxs.push({obj:a,t:0,dur:.32,tick:s=>{a.position.lerpVectors(o,r,s),a.position.y+=Math.sin(s*Math.PI)*.6,a.rotation.set(s*6,s*9,0),s>.92&&!p&&(p=!0,this.impact(r,n+.35))}})}impact(t,e){let n=new De,o=new Ft(this.discGeo,new oe({color:4184532,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),r=new Ft(this.ringGeo,new oe({color:12124153,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,blending:vo}));o.position.set(t.x,.07,t.z),r.position.set(t.x,.075,t.z),n.add(o,r);let a=[];for(let p=0;p<5;p++){let s=new Ft(this.shardGeo,this.shardMat),u=p/5*Math.PI*2+.4;s.scale.setScalar(.6),n.add(s),a.push({m:s,a:u})}this.group.add(n),this.fxs.push({obj:n,t:0,dur:.42,tick:p=>{let s=.7+.3*Math.min(1,p*4);o.scale.setScalar(e*s),r.scale.setScalar(e*s),o.material.opacity=.5*(1-p),r.material.opacity=.9*(1-p);for(let u of a)u.m.position.set(t.x+Math.cos(u.a)*e*p,.15+Math.sin(p*Math.PI)*.5,t.z+Math.sin(u.a)*e*p),u.m.rotation.set(p*8,u.a+p*5,0),u.m.visible=p<.8}})}lightning(t,e,n){let o=new De,r=this.at(t,e),a=r.clone().add(new x(.6,9,-.4));for(let s=0;s<6;s++){let u=s===5?r.clone():a.clone().lerp(r,1/(6-s)).add(new x((Math.random()-.5)*.9,0,(Math.random()-.5)*.9)),f=new Ft(this.boltGeo,this.boltMat),l=u.clone().sub(a);f.position.copy(a),f.scale.set(1,l.length(),1),f.quaternion.setFromUnitVectors(new x(0,1,0),l.normalize()),o.add(f),a=u}let p=new Ft(this.discGeo,new oe({color:13616383,transparent:!0,opacity:.6,depthWrite:!1,blending:vo}));p.position.set(r.x,.07,r.z),p.scale.setScalar(n+.35),o.add(p),this.group.add(o),this.fxs.push({obj:o,t:0,dur:.38,tick:s=>{this.boltMat.opacity=s<.5?1:2*(1-s),p.material.opacity=.6*(1-s),o.children.forEach((u,f)=>{u!==p&&(u.visible=s<.35||(f+Math.floor(s*20))%2===0)})}})}cry(t,e){let n=new Ft(this.ringGeo,new oe({color:e,transparent:!0,opacity:.85,depthWrite:!1}));n.position.set(t.x,.08,t.z),this.group.add(n);let o=Z.taunt.radius;this.fxs.push({obj:n,t:0,dur:.5,tick:r=>{n.scale.setScalar(.8+(o-.8)*r),n.material.opacity=.85*(1-r)}})}colour(t){return t===Kn?nc:t===this.side?Tp:Ep}make(t){let e=t.side===Kn?2:t.side===this.side?0:1,n,o=[];if(t.kind==="banner")n=yT(e===0?Tp:Ep);else{let s=this.kinds[t.kind];if(!s)return null;n=Zh(s.template),n.scale.setScalar(s.scale),o=s.clips,n.traverse(u=>{let f=u;f.isMesh&&(f.material=bT(f.material,e))})}this.figs.size>70&&n.traverse(s=>{s.castShadow=!1}),this.group.add(n);let r=new Wa(n),a={};for(let s of o){let u=r.clipAction(s);(s.name==="death"||s.name==="attack"||s.name==="hit")&&(u.setLoop(zu,1),u.clampWhenFinished=!0),a[s.name]=u}let p={root:n,mixer:r,actions:a,current:"",px:t.x,py:t.y,cx:t.x,cy:t.y,ry:t.side===0?Math.PI:0,struck:-1,dead:0,born:t.born,phase:t.id*.618%1,cried:-1,blowhole:n.getObjectByName("blowhole")??null};return yf(p,"idle"),this.figs.set(t.id,p),p}shoot(t,e){let n=new Ft(this.arrowGeo,this.arrowMat),o={m:n,from:this.at(t.x,t.y).setY(1),to:this.at(e.x,e.y).setY(.7),t:0};this.group.add(n),this.arrows.push(o)}paintNoDrop(t){let e=this.dropKind==="banner",n=this.side,o=t.banners(n),r=e?t.awake:[],a=`${e}|${n}|${o.map(m=>m.id).join()}|${r.map(m=>`${m.x.toFixed(1)},${m.y.toFixed(1)}`).join()}|${t.map.id}`;if(a===this.noDropKey)return;this.noDropKey=a;let p=this.noDropCtx,s=t.map,u=s.width*lo,f=s.length*lo,l=4,h=s.width*l,c=s.length*l,d=this.noDropSmall??(this.noDropSmall=document.createElement("canvas"));d.width=h,d.height=c;let T=d.getContext("2d"),y=T.createImageData(h,c),b=e?"banner":this.dropKind;for(let m=0;m<c;m++)for(let g=0;g<h;g++){let L=(g+.5)/l,U=s.length-(m+.5)/l;if(!Zf(s,L,U)||t.canDrop(n,L,U,b))continue;let R=(g+m*h)*4;y.data[R]=176,y.data[R+1]=62,y.data[R+2]=40,y.data[R+3]=128}T.putImageData(y,0,0),p.clearRect(0,0,u,f),p.imageSmoothingEnabled=!0,p.drawImage(d,0,0,u,f);let E=(m,g,L)=>{p.beginPath(),p.arc(m*lo,f-g*lo,L*lo,0,Math.PI*2)};if(p.setLineDash([1.6*lo,1.1*lo]),p.lineWidth=.3*lo,p.strokeStyle="rgba(255,222,212,0.95)",e)for(let m of r)E(m.x,m.y,Z.banner.monsterGap),p.stroke();else for(let m of o)E(m.x,m.y,Z.banner.radius),p.stroke();p.setLineDash([]),this.noDropMat.map.needsUpdate=!0}drawZones(t){let e=new Set;if(t)for(let o of[0,1])for(let r of t.banners(o)){e.add(r.id);let a=this.zones.get(r.id);if(!a){let s=Z.banner.radius;a=new Ft(new cn(2*s+.6,2*s+.6).rotateX(-Math.PI/2),this.zoneMats[o===this.side?0:1]),a.renderOrder=1,this.at(r.x,r.y,a.position).setY(.03),this.group.add(a),this.zones.set(r.id,a)}let p=(r.zoneUntil-t.tick)*ze;a.visible=p>3||Math.sin(this.time*12)>-.3}for(let[o,r]of this.zones)e.has(o)||(this.group.remove(r),r.geometry.dispose(),this.zones.delete(o));let n=t?t.heralds.filter(o=>o.tick>t.tick):[];for(;this.heralds.length<n.length;){let o=new Ft(new cn(5,5).rotateX(-Math.PI/2),this.heraldMat);o.renderOrder=1,this.group.add(o),this.heralds.push(o)}this.heralds.forEach((o,r)=>{let a=n[r];o.visible=!!a,a&&(this.at(a.x,a.y,o.position).setY(.035),o.scale.setScalar(1+.12*Math.sin(this.time*6)))})}get drawn(){return this.figs.size}};function yf(i,t,e=!1,n=1){let o=i.actions[t]??(t==="run"?i.actions.walk:void 0);if(!o||(o.timeScale=n,i.current===t&&!e))return;let r=i.actions[i.current];o.reset(),o.setEffectiveWeight(1),o.play(),(t==="idle"||t==="run")&&(o.time=i.phase*o.getClip().duration),r&&r!==o&&r.crossFadeTo(o,t==="attack"?.08:.18,!1),i.current=t}var dT=(i,t,e)=>{let n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+Math.sign(n)*Math.min(Math.abs(n),e)},lo=12;function yT(i){let t=new De,e=new Je({color:7029795,roughness:.8}),n=new Ft(new In(.06,.08,2.6,8).translate(0,1.3,0),e),o=new Ft(new In(.3,.38,.2,10).translate(0,.1,0),new Je({color:9077624,roughness:.9})),r=new Ft(new Ci(.11,10,8).translate(0,2.66,0),new Je({color:16765770,metalness:.6,roughness:.35})),a=new Zo([new nt(0,0),new nt(1.15,0),new nt(.85,-.38),new nt(1.15,-.76),new nt(0,-.76)]),p=new Ft(new Dr(a).translate(.06,2.5,0),new Je({color:i,emissive:i,emissiveIntensity:.25,roughness:.7,side:qe}));for(let s of[n,o,r,p])s.castShadow=!0,t.add(s);return t}function gb(i,t,e="rgba(255,255,255,0.9)"){let n=2*i+.6,o=512/n,r=document.createElement("canvas");r.width=r.height=512;let a=r.getContext("2d"),p=256;a.fillStyle=t,a.beginPath(),a.arc(p,p,i*o,0,Math.PI*2),a.fill(),a.setLineDash([1.6*o*Math.min(1,i/4),1.1*o*Math.min(1,i/4)]),a.lineWidth=.3*o,a.strokeStyle=e,a.beginPath(),a.arc(p,p,i*o-.15*o,0,Math.PI*2),a.stroke();let s=new Uo(r);return s.colorSpace=Te,s.anisotropy=4,s}function mT(i,t){let e=new Zo([new nt(-t,-t),new nt(t,-t),new nt(t,t),new nt(-t,t)]);return e.holes.push(new Li(i.map(n=>new nt(n.x,-n.z)))),new Dr(e).rotateX(-Math.PI/2)}function oi(...i){let t=2166136261;for(let e of i){let n=e|0;for(let o=0;o<4;o++)t^=n&255,t=Math.imul(t,16777619),n>>>=8}return t^=t>>>16,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}var ni=class{constructor(t){C(this,"s");this.s=t>>>0}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}int(t){return Math.floor(this.next()*t)}range(t,e){return t+(e-t)*this.next()}pick(t){return t[this.int(t.length)]}weighted(t){let e=0;for(let o of t)e+=o;let n=this.next()*e;for(let o=0;o<t.length;o++)if(n-=t[o],n<0)return o;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){let n=this.int(e+1);[t[e],t[n]]=[t[n],t[e]]}return t}};var gT=["Brann","Ysolde","Korgan","Ma\xEBlis","Torvik","Sigrun","Aldric","Nessa"],Vp=i=>Z.army.stepCost+Z.army.stepRise*Math.max(0,(i-Z.army.startPlaces)/Z.army.step);function Tb(i,t){let e=[];for(let n=0;n<Z.match.players;n++){let o=n<t.length;e.push({seat:n,name:o?t[n]:gT[n],human:o,hp:Z.hp.start,gold:0,places:Z.army.startPlaces,army:Bn(),up:oa(),buys:[],offers:[],rerolls:0,out:null,lastOpp:null,here:!o,profile:Ub(oi(i,7,n))})}return{seed:i,round:0,phase:"lobby",players:e,pairs:[],history:[]}}var Qr=i=>i.players.filter(t=>!t.out);function TT(i){let t=Math.min(1,Math.max(0,(i-1)/(Z.lateRound-1)));return Z.rarities.map(e=>e.early+(e.late-e.early)*t)}function Eb(i,t,e,n){let o=new ni(oi(i,11,t,e,n)),r=TT(e),a=[];for(let p=0;p<Z.economy.offers;p++){let s=o.pick(mo),u=_o.filter(f=>f!=="range"||Z.troops[s].rangeUpgradable);a.push({kind:s,stat:o.pick(u),rarity:o.weighted(r)})}return a}var Ni=i=>Z.rarities[i.rarity].cost,oc=i=>Z.rarities[i.rarity].bonus;function Vb(i){if(i.phase!=="over"){i.round++,i.phase="prep";for(let t of Qr(i))t.gold+=Z.economy.goldPerRound+(i.round===1?Z.economy.startGold:0),t.rerolls=0,t.offers=Eb(i.seed,t.seat,i.round,0),t.here=!t.human;i.pairs=ET(i);for(let t of Qr(i))t.human||Cb(i,t)}}function co(i,t,e){let n=i.players[t];if(!n||n.out||i.phase!=="prep")return!1;switch(e.k){case"here":return n.here=!0,!0;case"buy":{let o=n.offers[e.slot];return!o||n.gold<Ni(o)?!1:(n.gold-=Ni(o),n.up[o.kind][o.stat]+=oc(o),n.buys.push({...o}),n.offers[e.slot]=null,!0)}case"reroll":return n.gold<Z.economy.reroll?!1:(n.gold-=Z.economy.reroll,n.rerolls++,n.offers=Eb(i.seed,t,i.round,n.rerolls),!0);case"cap":{let o=Vp(n.places);return n.gold<o||n.places>=Z.army.maxPlaces?!1:(n.gold-=o,n.places=Math.min(Z.army.maxPlaces,n.places+Z.army.step),!0)}case"army":{let o=Bn();for(let r of be){let a=e.army[r]??0;if(!Number.isInteger(a)||a<0)return!1;o[r]=a}return Fn(o)>n.places?!1:(n.army=o,!0)}}}function Sb(i){i.phase==="prep"&&(i.phase="battle")}function ic(i,t){let e=i.players[t];return{counts:{...e.army},upgrades:e.up}}function Sp(i,t,e){if(e===1&&t.ghost)return null;let n=i.players[e===0?t.a:t.b];return n.human?n.seat:null}var wb=i=>Wn[oi(i.seed,19,i.round)%Wn.length],Pb=(i,t)=>oi(i.seed,13,i.round,t);function rc(i,t){let e=Z.hp.damage;return Math.min(e.max,Math.ceil(e.base+e.perRound*i+e.perPlace*t))}function Lb(i,t){if(i.phase!=="battle")throw new Error("resolve outside a battle");let e=[],n=Qr(i).length;i.pairs.forEach((a,p)=>{let s=t[p],u=0,f=null;!a.ghost&&s.winner!==-1&&(f=s.winner===0?a.b:a.a,u=rc(i.round,s.places[s.winner]),i.players[f].hp-=u),i.players[a.a].lastOpp=a.b,a.ghost||(i.players[a.b].lastOpp=a.a),e.push({pair:a,result:s,damage:u,loser:f})});let o=Qr(i).filter(a=>a.hp<=0).sort((a,p)=>p.hp-a.hp||a.seat-p.seat);o.forEach((a,p)=>{a.out={round:i.round,place:n-o.length+1+p}}),i.history.push(e);let r=Qr(i);return r.length<=1||i.round>=Z.maxRounds?(r.sort((a,p)=>p.hp-a.hp||a.seat-p.seat).forEach((a,p)=>{a.out={round:i.round,place:p+1}}),i.phase="over"):i.phase="prep",e}function ac(i){return[...i.players].sort((t,e)=>t.out&&e.out?t.out.place-e.out.place:t.out?1:e.out?-1:e.hp-t.hp||t.seat-e.seat)}function ET(i){let t=new ni(oi(i.seed,17,i.round)),e=Qr(i).map(a=>a.seat),n=null,o=-1/0,r=1/0;for(let a=0;a<Z.match.pairingTries;a++){let p=t.shuffle([...e]),s=[],u=0,f=t.next();for(let l=0;l+1<p.length;l+=2){let h=i.players[p[l]],c=i.players[p[l+1]];(h.lastOpp===c.seat||c.lastOpp===h.seat)&&u++,h.human&&c.human&&(f+=Z.match.humanPairWeight),s.push({a:h.seat,b:c.seat,ghost:!1})}if(p.length%2){let l=p[p.length-1],h=p.slice(0,-1).filter(d=>d!==i.players[l].lastOpp),c=h.length?h[t.int(h.length)]:p[0];i.players[l].lastOpp===c&&u++,s.push({a:l,b:c,ghost:!0})}(u<r||u===r&&f>o)&&(n=s,o=f,r=u)}return n.map(a=>!a.ghost&&t.next()<.5?{a:a.b,b:a.a,ghost:!1}:a)}function wp(i,t){for(let e of i.pairs){if(e.a===t)return{seat:e.b,ghost:e.ghost,side:0};if(e.b===t&&!e.ghost)return{seat:e.a,ghost:!1,side:1}}return null}var Fe=Z.bots;function Ub(i){let t=new ni(i),e=t.pick(mo),n=t.pick(mo.filter(l=>l!==e)),o={banner:0},r=t.range(.45,.65),a=t.range(.2,.35),p=Math.max(0,1-r-a),s=mo.filter(l=>l!==e&&l!==n);for(let l of s)o[l]=p*t.range(0,1);let u=s.reduce((l,h)=>l+o[h],0)||1;for(let l of s)o[l]=o[l]/u*p;o[e]=r,o[n]=a;let f=t.range(-6,6);return{weights:o,lane:f,banners:t.weighted(Fe.banners)}}var VT={hp:1,damage:1,attackSpeed:1,moveSpeed:.45,range:.7},ST=(i,t)=>i.profile.weights[t]>=Fe.playedShare||i.army[t]>0&&i.profile.weights[t]>.05;function Cb(i,t){let e=t.seat;co(i,e,{k:"here"});let n=i.round<=Fe.capacityEagerUntil;n&&co(i,e,{k:"cap"});let o=()=>{let s=0,u=t.offers.map((f,l)=>({o:f,i:l})).filter(f=>f.o&&ST(t,f.o.kind)).sort((f,l)=>xb(t,l.o)-xb(t,f.o)||f.i-l.i);for(let{o:f,i:l}of u)t.gold>=Ni(f)&&co(i,e,{k:"buy",slot:l})&&s++;return s},r=o();for(;!r&&t.rerolls<Fe.rerollsPerRound&&t.gold>=Z.economy.reroll+3;)co(i,e,{k:"reroll"}),r=o();for(;!n&&t.gold>=Vp(t.places)&&t.places<Z.army.maxPlaces;)co(i,e,{k:"cap"});let a=wp(i,e),p=a?i.players[a.seat]:null;co(i,e,{k:"army",army:wT(t,p?p.army:null)})}var xb=(i,t)=>i.profile.weights[t.kind]*VT[t.stat]*oc(t)/Ni(t);function wT(i,t=null){let e={},n=0;for(let p of mo){let s=i.up[p],u=i.profile.weights[p];e[p]=u<.04?0:u*(1+1.2*(s.hp+s.damage+s.attackSpeed+.5*(s.moveSpeed+s.range))),n+=e[p]}if(e.banner=0,t){let p=Fn(t),s=p?t.whale*Z.troops.whale.places/p:0;if(s>0){let u=n*Math.min(.6,.9*s);e.archer+=u,n+=u}}let o=Bn();o.banner=Math.min(i.profile.banners??0,Math.floor(i.places/Fe.bannerPlaces));let r=i.places-Fn(o);for(let p of mo)o[p]=Math.floor(r*e[p]/n/Z.troops[p].places);let a=i.places-Fn(o);for(;a>0;){let p=null,s=-1/0;for(let u of mo){let f=Z.troops[u].places;if(f>a||e[u]===0)continue;let l=r*e[u]/n-o[u]*f;l>s&&(s=l,p=u)}p||(p="barbarian"),o[p]++,a-=Z.troops[p].places}return o}function PT(i){let t={...i,assassin:0,banner:0},e=be.reduce((r,a)=>r+t[a],0),n=[],o=Bn();for(let r=0;r<e;r++){let a=null,p=-1/0;for(let s of be){if(o[s]>=t[s])continue;let u=(r+1)*(t[s]/e)-o[s]+(s==="tank"||s==="whale"?.5:0);u>p&&(p=u,a=s)}n.push(a),o[a]++}for(let r=0;r<i.assassin;r++)n.push("assassin");return n}var gf=class{constructor(t,e,n,o=0,r=!1){C(this,"side",t);C(this,"lane",o);C(this,"wave",[]);C(this,"push",[]);C(this,"reserve",[]);C(this,"queue",[]);C(this,"sent",{wave:!1,push:!1,reserve:!1});C(this,"waveAt");C(this,"next",0);C(this,"seq",0);C(this,"flagAt",-1e3);C(this,"follow",[]);C(this,"planted",[]);C(this,"rng");C(this,"focus");C(this,"lean");C(this,"W",28);C(this,"L",40);C(this,"why","fight");this.rng=new ni(e);let a=PT(n),p=Fn({...n,banner:0}),s=0;for(let u of a){let f=s/Math.max(1,p);!r&&f<Fe.firstWave?this.wave.push(u):f<(r?.5:Fe.firstWave+Fe.counter)?this.push.push(u):this.reserve.push(u),s+=Z.troops[u].places}r&&(this.sent.wave=!0),this.waveAt=Fe.firstWaveTicks[0]+this.rng.int(Fe.firstWaveTicks[1]-Fe.firstWaveTicks[0]+1),this.focus=this.rng.next()<Fe.focusOne?"one":"split",this.lean=o>=0?1:-1}get bank(){return this.W/2+this.lean*Fe.bankLane}think(t){let e=this.side,n=1-e,o=t.tick;if(this.W=t.map.width,this.L=t.map.length,!this.sent.wave&&o>=this.waveAt&&(this.sent.wave=!0,this.formation(t,this.wave)),this.follow.length){let p=this.myBanner(t);p?(this.toZone(t,p,this.follow),this.follow=[]):o-this.flagAt>2*Z.tickHz&&!this.queue.some(s=>s.kind==="banner")&&(this.toShore(t,this.follow,null),this.follow=[])}if(o%5===0&&this.sent.wave){let p=null,s=!1,u=-1/0;for(let y of t.awake){let b=this.around(t,y.x,y.y,7),E=b[n]>0&&b[n]>=b[e],m=this.focus==="one"&&Math.abs(this.own(y.x,y.y)[0]-this.bank)<6,g=(E?100:0)+b[n]+b[e]*.5+(m?10:0);g>u&&(u=g,p=y,s=E)}let f=t.heralds[0]??null,l=this.fight(t),h=p&&(s||!f)?[p.x,p.y,"monster"]:f?[f.x,f.y,"herald"]:p?[p.x,p.y,"monster"]:l?[l[0],l[1],"fight"]:null,c=t.left(e);h&&c.banner>0&&!this.myBanner(t)&&o-this.flagAt>3*Z.tickHz&&this.own(h[0],h[1])[1]>this.shore(t)+Fe.bannerBeyond&&(h[2]!=="fight"||s||this.sent.push||t.time>20)&&this.plant(t,h[0],h[1],h[2])&&(this.flagAt=o,this.sent.push?!this.sent.reserve&&(s||h[2]!=="fight")&&(this.sent.reserve=!0,this.follow=this.reserve):(this.sent.push=!0,this.follow=this.push)),!this.sent.push&&(s||t.time>Fe.pushAfter)&&(this.sent.push=!0,this.send(t,this.push,h));let d=t.time,T=t.alive(e).length;!this.sent.reserve&&(this.sent.wave&&T===0&&!this.queue.length&&!this.follow.length||d>Fe.reserveAfter&&t.killed[e]<=t.killed[n]||d>Z.battle.maxSeconds-15)&&(this.sent.reserve=!0,this.sent.push||(this.sent.push=!0,this.reserve=[...this.push,...this.reserve]),this.send(t,this.reserve,h))}if(!this.queue.length||o<this.next)return[];let r=this.queue[0],a=this.findSpot(t,r);return a?(this.queue.shift(),this.next=o+ia(r.kind),r.kind==="banner"&&this.planted.push({x:a[0],y:a[1],tick:o,why:this.why}),[{tick:o,side:e,kind:r.kind,x:a[0],y:a[1],seq:this.seq++}]):r.kind==="banner"?(this.queue.shift(),[]):(this.queue.push(this.queue.shift()),this.next=o+2,[])}send(t,e,n){let o=this.myBanner(t);o?this.toZone(t,o,e):this.toShore(t,e,n)}myBanner(t){let e=t.banners(this.side);return e.length?e[e.length-1]:null}around(t,e,n,o){let r=[0,0];for(let a of t.units){if(!a.alive||a.side>1)continue;let p=a.x-e,s=a.y-n;p*p+s*s<=o*o&&(r[a.side]+=a.places)}return r}fight(t){let e=t.alive(this.side),n=t.alive(1-this.side),o=0,r=0,a=0;for(let p of n)p.anchored||e.some(s=>(s.x-p.x)*(s.x-p.x)+(s.y-p.y)*(s.y-p.y)<64)&&(o+=p.x,r+=p.y,a++);return a?[o/a,r/a]:null}plant(t,e,n,o){let[r,a]=this.own(e,n),p=Math.max(this.shore(t)+1,a-Fe.bannerBack),s={kind:"banner",ox:ho(r,1,this.W-1),oy:p};return this.findSpot(t,s)?(this.why=o,this.queue.unshift(s),!0):!1}formation(t,e){if(this.focus==="split"){let n=[],o=[];e.forEach((r,a)=>(a%2?o:n).push(r)),this.rows(t,n,this.W/2-Fe.bankLane+1),this.rows(t,o,this.W/2+Fe.bankLane-1)}else this.rows(t,e,this.bank)}rows(t,e,n){let o={tank:.5,whale:.5,barbarian:2,assassin:3,archer:5.5,druid:6.5,banner:.5},r=this.shore(t),a=new Map,p=n,s=Bn();for(let u of e)s[u]++;for(let u of e){let f=a.get(u)??0;a.set(u,f+1);let l=14,h=Math.floor(f/l),c=f%l,d=Math.min(l,s[u]-h*l),T=u==="tank"?1.7:u==="whale"?2.4:.9,y=p+(c-(d-1)/2)*T;u==="assassin"&&(y=(c%2?p+7:p-7)+Math.floor(c/2)*.8*(c%2?1:-1)),this.queue.push({kind:u,ox:ho(y,1,this.W-1),oy:r-o[u]-h*1.1})}}toZone(t,e,n){let[o,r]=this.own(e.x,e.y),a=Z.banner.radius*.75,p=0;for(let s of n){let u=1+Math.floor(p/8),f=p%8,l=u*.9>a?a:u*.9,h=Ob[f][0]*l,c=Ob[f][1]*l;this.queue.push({kind:s,ox:ho(o+h,.5,this.W-.5),oy:r+c}),p++}}toShore(t,e,n){let o=1-this.side,r=0,a=0,p=0,s=0;for(let y of t.units){if(!y.alive||y.side!==o)continue;let[b]=this.own(y.x,y.y);r+=b,a++,y.ranged&&(p+=b,s++)}let u=this.W,f=n?this.own(n[0],n[1])[0]:a?r/a:u/2,l=ho(f,4,u-4),h=this.shore(t)-.6,c=s?ho(p/s,3,u-3):l,d=0,T=0;for(let y of e)y==="assassin"?(this.queue.push({kind:y,ox:ho(c+(T%6-2.5)*.85,1,u-1),oy:h-Math.floor(T/6)*1.1}),T++):(this.queue.push({kind:y,ox:ho(l+(d%10-4.5)*.85,1,u-1),oy:h-Math.floor(d/10)*1.1}),d++)}shore(t){let e=t.map.starts[this.side][0];return this.side===0?e[3]:this.L-e[1]}findSpot(t,e){let n=this.W,o=this.L;if(e.kind==="banner"&&t.ground)return this.nearest(t,e.ox,e.oy,e.kind,6);for(let[p,s]of UT){let[u,f]=this.world(ho(e.ox+p,.5,n-.5),ho(e.oy+s,.5,o-.5));if(t.canDrop(this.side,u,f,e.kind))return[u,f]}if(e.kind==="banner")return null;let[r,a]=this.world(ho(e.ox,.5,n-.5),Math.min(e.oy,this.shore(t)-.5));return t.canDrop(this.side,r,a,e.kind)?[r,a]:t.ground?this.nearest(t,e.ox,e.oy,e.kind,14):null}nearest(t,e,n,o,r){let a=r*r;for(let[p,s,u]of LT){if(u>a)break;let[f,l]=this.world(e+p,n+s);if(t.canDrop(this.side,f,l,o))return[f,l]}return null}world(t,e){return this.side===0?[t,e]:[this.W-t,this.L-e]}own(t,e){return this.side===0?[t,e]:[this.W-t,this.L-e]}},LT=(()=>{let i=[];for(let t=-28;t<=28;t++)for(let e=-28;e<=28;e++)e*e+t*t<=784&&i.push([e*.5,t*.5,(e*e+t*t)*.25]);return i.sort((t,e)=>t[2]-e[2]||t[1]-e[1]||t[0]-e[0])})(),UT=[[0,0],[1.5,0],[-1.5,0],[0,-1.5],[3,-1.5],[-3,-1.5],[0,-3.5],[5,-3],[-5,-3],[0,-6],[8,-6],[-8,-6]],Ob=[[0,1],[.7,.7],[-.7,.7],[1,0],[-1,0],[.7,-.7],[-.7,-.7],[0,-1]],ho=(i,t,e)=>i<t?t:i>e?e:i;var pc=class{constructor(t,e,n,o=Wn[0]){C(this,"controls",e);C(this,"seed",n);C(this,"b");C(this,"pilots",[null,null]);this.b=new Wi(t,{map:o}),e.forEach((r,a)=>{if(r.bot)this.pilots[a]=new gf(a,oi(n,a),t[a].counts,r.lane??0);else for(let p of r.drops)(r.stopFrom===void 0||p.tick<r.stopFrom)&&this.b.schedule({...p,side:a})})}drop(t){this.b.schedule(t)}step(){let t=this.b;if(!t.over){for(let e of[0,1]){let n=this.pilots[e];if(n)for(let o of n.think(t))t.schedule(o)}t.step()}}run(){for(;!this.b.over;)this.step();return this.b.result}},CT=()=>({drops:new Map,takeover:new Map});function Pp(i,t,e=CT()){let n=i.pairs[t],o=[ic(i,n.a),ic(i,n.b)],r=[0,1].map(a=>{let p=Sp(i,n,a),s=i.players[a===0?n.a:n.b].profile.lane;return p===null?{bot:!0,lane:s}:{drops:e.drops.get(p)??[],stopFrom:e.takeover.get(p),lane:s}});return new pc(o,r,Pb(i,t),wb(i))}var Rb=new Set(["here","buy","reroll","cap","army"]),Tf=class{constructor(){C(this,"holds",0);C(this,"holdMax",0);C(this,"lost",0);C(this,"frameMax",0);C(this,"slow",0);C(this,"replayMs",0);C(this,"holdFrom",-1);C(this,"holdLast",-1)}hold(t){(this.holdLast<0||t-this.holdLast>.1)&&(this.holds++,this.holdFrom=t),this.holdLast=t;let e=t-this.holdFrom;e>this.holdMax&&(this.holdMax=e)}frame(t,e){let n=t*1e3;n>this.frameMax&&(this.frameMax=n),n>50&&this.slow++,e&&(this.lost+=t)}sum(){let t=(e,n=100)=>Math.round(e*n)/n;return{holds:this.holds,holdMax:t(this.holdMax),lost:t(this.lost),frameMax:Math.round(this.frameMax),slow:this.slow,replayMs:Math.round(this.replayMs)}}},Ef=class{constructor(t,e=null,n=t.solo?2:Z.net.delayTicks){C(this,"auth",t);C(this,"duelFactory",e);C(this,"delayTicks",n);C(this,"m");C(this,"stage","wait");C(this,"fight",null);C(this,"mySide",0);C(this,"oppSeat",null);C(this,"ghost",!1);C(this,"last",null);C(this,"myDrops",[]);C(this,"link","ok");C(this,"smooth",!1);C(this,"replayBudgetMs",1/0);C(this,"stats",new Tf);C(this,"watchers",null);C(this,"watching",null);C(this,"watches",new Map);C(this,"announce",null);C(this,"oppLost",!1);C(this,"lastDown",-1/0);C(this,"pairIndex",-1);C(this,"refought",!1);C(this,"base",null);C(this,"seen","");C(this,"dropSeq",0);C(this,"posted",!1);C(this,"duel",null);C(this,"oppDrops",[]);C(this,"replay",null);C(this,"endSent",!1);C(this,"readyNow",!1);this.m=Tb(t.seed,t.humans)}get me(){return this.auth.mySeat}get player(){return this.m.players[this.me]}get round(){return this.m.round}get alive(){return!this.player.out}get stageEnd(){let t=this.m.round;switch(this.stage){case"wait":return Ho(1);case"prep":return Tn(t);case"battle":return Kr(t);case"results":return Ho(t+1);default:return 1/0}}get myBattleOver(){return!this.fight||this.fight.b.over}update(){let t=this.auth.clock();this.checkLink(t);for(let e=0;e<400;e++){let n=this.m.round;if(this.stage==="over")return;if(this.stage==="wait"||this.stage==="results"){if(this.m.phase==="over"){this.stage="over";return}if(t<Ho(n+1))return;this.beginRound();continue}if(this.stage==="prep"){if(this.rebuild(),t<Tn(n)||this.auth.syncedTo()<Tn(n))return;this.rebuild(!0,!0),Sb(this.m),this.stage="battle",this.setupFight(t<Kr(n),t);continue}this.stepFight(t),this.stepOthers(t);let o=this.auth.solo?Kr(n):Fp(n)+.3;if(!(!this.auth.solo&&this.auth.confirmed().some(a=>a.kind==="end"&&a.round===n))&&(t<o||this.auth.syncedTo()<(this.auth.solo?0:Fp(n)))){this.earlyEnd(t);return}if(!this.finishRound())return}}do(t){if(this.stage!=="prep"||!this.alive)return!1;let e=structuredClone(this.m);return co(e,this.me,t)?(this.auth.post(this.m.round,t.k,t),this.rebuild(!0),!0):!1}canDrop(t,e,n){let o=this.fight;return!!o&&!o.b.over&&this.stage==="battle"&&o.b.canDrop(this.mySide,e,n,t)}drop(t,e,n){let o=this.fight;if(!o||o.b.over||this.stage!=="battle"||this.link!=="ok"||o.b.left(this.mySide)[t]<=0||!o.b.canDrop(this.mySide,e,n,t))return!1;let r=this.duel??this.announce,p={tick:Math.max(o.b.tick+this.delayTicks,r?r.promised()+1:0),side:this.mySide,kind:t,x:e,y:n,seq:this.dropSeq++};return o.drop(p),this.myDrops.push(p),this.duel?.send(p),this.announce?.send(p),!0}alpha(){let e=(this.watching!==null?this.watches.get(this.watching)?.fight:null)??this.fight;if(!e||e.b.over||this.stage!=="battle")return 1;let n=(this.auth.clock()-Tn(this.m.round))/ze;return Math.max(0,Math.min(1,n-e.b.tick+1))}beginRound(){Vb(this.m),this.base=structuredClone(this.m),this.seen="",this.stage="prep",this.fight=null,this.oppSeat=null,this.ghost=!1,this.myDrops.length=0,this.dropSeq=0,this.posted=!1,this.oppDrops=[],this.endSent=!1,this.readyNow=!1,this.replay=null,this.pairIndex=-1,this.refought=!1,this.oppLost=!1,this.duel?.close(),this.duel=null,this.closeWatches(),!this.auth.solo&&this.alive&&this.m.round>1&&this.auth.post(this.m.round,"stats",{round:this.m.round-1,...this.stats.sum()}),this.stats=new Tf,this.alive&&this.auth.clock()<Tn(this.m.round)&&this.auth.post(this.m.round,"here",{k:"here"}),this.rebuild(!0)}rebuild(t=!1,e=!1){if(!this.base)return;let n=this.m.round,o=e?[]:this.auth.pending().filter(u=>u.round===n&&Rb.has(u.kind)),r=this.auth.confirmed().filter(u=>u.round===n&&Rb.has(u.kind)),a=`${r.length}/${o.length}/${r.at(-1)?.seq??-1}`;if(!t&&a===this.seen)return;this.seen=a;let p=structuredClone(this.base),s=new Set;for(let u of[...r,...o])s.has(u.cid)||(s.add(u.cid),co(p,u.seat,u.data));this.m=p}setupFight(t,e){let n=this.alive?this.m.pairs.findIndex(s=>s.a===this.me||s.b===this.me&&!s.ghost):-1;if(this.followOthers(n),n<0)return;let o=this.m.pairs[n];if(this.mySide=o.a===this.me?0:1,this.oppSeat=this.mySide===0?o.b:o.a,this.ghost=o.ghost,this.pairIndex=n,!t||!this.player.here||!this.auth.solo&&e>Tn(this.m.round)+Z.net.cutSeconds-.5)return;let r={drops:new Map([[this.me,[]]]),takeover:new Map},a=this.m.players[this.oppSeat];!o.ghost&&a.human&&a.here?(r.drops.set(a.seat,[]),this.duel=this.duelFactory?this.duelFactory(this.m.round,this.me,a.seat,this.mySide):null,this.duel||r.takeover.set(a.seat,0)):this.watchers&&(this.announce=this.watchers.announce(this.m.round,this.me,this.oppSeat)),this.fight=Pp(this.m,n,r)}checkLink(t){if(this.auth.solo)return;let e=t-this.auth.syncedTo(),n=this.stage==="battle"?this.duel:null,o=e>Z.net.lostSeconds,r=!!n&&!n.linked();(o||r)&&(this.lastDown=t);let p=(this.stage==="battle"&&this.fight&&!this.fight.b.over?r:o||r)?"lost":"ok";this.stage==="battle"&&this.alive&&!this.fight&&this.oppSeat!==null&&(p="away"),n&&(n.cutMe()!==null?p="cut":this.fight&&!this.fight.b.over&&n.gone()===null&&n.silence()>Z.net.cutSeconds&&(!o&&!r&&e<n.silence()-1&&this.lastDown<t-n.silence()?n.cutOff():p="lost")),this.link=p,this.oppLost=!!n&&n.gone()!==null}stepFight(t){let e=this.duel?.cutMe()??null;e!==null&&!this.refought&&this.refight(e);let n=this.fight;if(!n)return;let o=Math.min(Wr,Math.floor((t-Tn(this.m.round))/ze)),r=1-this.mySide,a=o-n.b.tick,p=a>3&&this.smooth?n.b.tick+2+Math.ceil(a/4):o;for(this.duel&&this.duel.frontier(Math.max(0,o)),this.announce?.at(Math.max(0,o));!n.b.over&&n.b.tick<p;){if(this.duel){if(this.oppDrops.push(...this.duel.take()),n.b.tick>=this.duel.frontier(n.b.tick)){this.stats.hold(t);break}let s=this.duel.gone(),u=this.oppDrops.filter(f=>f.tick<=n.b.tick);this.oppDrops=this.oppDrops.filter(f=>f.tick>n.b.tick);for(let f of u)(s===null||f.tick<s)&&n.drop({...f,side:r})}n.step()}n.b.over&&!this.posted&&this.postDrops()}refight(t){this.refought=!0;let e=this.fight,n=this.duel;if(!e||!n||this.oppSeat===null||this.pairIndex<0)return;let o=this.myDrops.filter(p=>p.tick<t);this.myDrops.splice(0,this.myDrops.length,...o);let r=Pp(this.m,this.pairIndex,{drops:new Map([[this.me,o],[this.oppSeat,[]]]),takeover:new Map([[this.me,t]])});n.take();let a=1-this.mySide;for(let p of n.seen())r.drop({...p,side:a});this.oppDrops=[],this.fight=r}postDrops(){this.posted=!0,this.auth.post(this.m.round,"drops",{drops:this.myDrops});let t=this.duel?.gone();this.duel&&t!==null&&t!==void 0&&this.oppSeat!==null&&this.auth.post(this.m.round,"takeover",{seat:this.oppSeat,tick:t,drops:this.duel.seen().filter(e=>e.tick<t)})}followOthers(t){if(!this.watchers)return;let e=this.m.round;this.m.pairs.forEach((n,o)=>{if(o===t)return;let r=[Sp(this.m,n,0),Sp(this.m,n,1)],a=r[0]===null&&r[1]===null?null:this.watchers.watch(e,r,[r[0]===null||this.m.players[r[0]].here,r[1]===null||this.m.players[r[1]].here]);this.watches.set(o,{link:a,fight:null,seats:r})})}stepOthers(t){if(!this.watches.size||!this.myBattleOver)return;let e=Math.min(Wr,Math.floor((t-Tn(this.m.round))/ze)),n=performance.now()+this.replayBudgetMs;for(let[o,r]of this.watches){if(!r.fight){let s=new Map;for(let u of r.seats)u!==null&&s.set(u,[]);r.fight=Pp(this.m,o,{drops:s,takeover:new Map})}let a=r.fight;if(r.link)for(let s of[0,1])for(let u of r.link.take(s))a.drop({...u,side:s});let p=Math.min(e,r.link?r.link.frontier():1/0);for(;!a.b.over&&a.b.tick<p;)if(a.step(),(a.b.tick&15)===0&&performance.now()>n)return}}shown(){let t=this.watching!==null?this.watches.get(this.watching):void 0;if(t?.fight){let e=this.m.pairs[this.watching];return{b:t.fight.b,side:0,seats:[e.a,e.b],watched:!0}}return!this.fight||this.oppSeat===null?null:{b:this.fight.b,side:this.mySide,seats:this.mySide===0?[this.me,this.oppSeat]:[this.oppSeat,this.me],watched:!1}}duels(){return this.m.pairs.map((t,e)=>{let n=t.a===this.me||t.b===this.me&&!t.ghost,o=n?this.fight?.b:this.watches.get(e)?.fight?.b,r=o?.result??null,a=r&&r.winner!==-1&&!t.ghost?r.winner===0?t.b:t.a:null;return{pair:e,seats:[t.a,t.b],ghost:t.ghost,mine:n,watched:this.watching===e,killed:o?[o.killed[0],o.killed[1]]:null,over:!!r,loser:a,damage:a!==null&&r?rc(this.m.round,r.places[r.winner]):0}})}watch(t){this.watching=t!==null&&this.watches.has(t)&&this.myBattleOver?t:null}closeWatches(){for(let t of this.watches.values())t.link?.close();this.watches.clear(),this.watching=null,this.announce?.close(),this.announce=null}ready(){if(!(this.stage!=="prep"||!this.alive)){if(this.auth.solo){this.auth.skip?.(this.stageEnd);return}this.readyNow||(this.readyNow=!0,this.auth.post(this.m.round,"ready",{k:"ready"}))}}inputsKey(t){return this.auth.confirmed().filter(e=>e.round===t&&(e.kind==="drops"||e.kind==="takeover")).map(e=>e.seq).join(",")}earlyEnd(t){let e=this.m.round;if(this.auth.solo||this.endSent||this.fight&&!this.fight.b.over)return;let n=this.auth.confirmed().filter(a=>a.round===e),o=new Set(n.filter(a=>a.kind==="drops").map(a=>a.seat));if(!n.some(a=>a.kind==="here")||n.some(a=>a.kind==="here"&&!o.has(a.seat))||!this.playAll())return;let r=Math.max(...this.replay.fights.map(a=>a.b.result.tick));t<Tn(e)+r*ze+.5||(this.endSent=!0,this.auth.post(e,"end",{k:"end"}))}playAll(){let t=this.inputsKey(this.m.round);if(!this.replay||this.replay.key!==t){let n=this.inputsOf(this.m.round);this.replay={fights:this.m.pairs.map((o,r)=>Pp(this.m,r,n)),t0:performance.now(),key:t}}let e=performance.now()+this.replayBudgetMs;for(let n of this.replay.fights)for(;!n.b.over;)if(n.step(),(n.b.tick&15)===0&&performance.now()>e)return!1;return!0}finishRound(){let t=this.fight;if(t&&!t.b.over)for(;!t.b.over;)t.step();return t&&!this.posted&&this.postDrops(),this.duel?.close(),this.duel=null,this.closeWatches(),this.playAll()?(this.stats.replayMs=performance.now()-this.replay.t0,this.last=Lb(this.m,this.replay.fights.map(e=>e.b.result)),this.replay=null,this.stage=this.m.phase==="over"?"over":"results",!0):!1}inputsOf(t){let e={drops:new Map,takeover:new Map},n=new Map,o=this.auth.confirmed().filter(a=>a.round===t),r=a=>{let p=this.m.pairs.find(s=>!s.ghost&&(s.a===a||s.b===a));return p?p.a===a?p.b:p.a:null};for(let a of o)if(a.kind==="drops"&&!e.drops.has(a.seat)&&e.drops.set(a.seat,a.data.drops),a.kind==="takeover"){let p=a.data;if(r(p.seat)!==a.seat||e.takeover.has(p.seat)||e.takeover.has(a.seat))continue;e.takeover.set(p.seat,p.tick),n.set(p.seat,p.drops)}for(let[a,p]of n)e.drops.set(a,p);return this.auth.solo&&this.fight&&!e.drops.has(this.me)&&e.drops.set(this.me,[...this.myDrops]),e}};function Db(i){let t=i.last?.find(n=>n.pair.a===i.me||n.pair.b===i.me&&!n.pair.ghost);if(!t)return{won:null,result:null,damage:0};let e=t.pair.a===i.me?0:1;return{won:t.result.winner===-1?null:t.result.winner===e,result:t.result,damage:t.loser===i.me?t.damage:0}}var Lp=0,sc=()=>{let i=document.getElementById("toast");return i||(i=document.createElement("div"),i.id="toast",i.setAttribute("role","status"),i.hidden=!0,document.body.appendChild(i)),i},uc={show(i,t=2.6){let e=sc();e.textContent=i,e.hidden=!1,Lp=t},hide(){Lp=0,sc().hidden=!0},tick(i){Lp>0&&(Lp-=i,Lp<=0&&(sc().hidden=!0))}},iP=`<button class="x" data-do="close" aria-label="Fermer"><span class="face">${lt("close")}</span></button>`;var vb="./assets/druidesse-RZQML5EB.webp";var Mb="./assets/baleine-VRPXIB3D.webp";var Io={barbarian:"soldat",archer:"archere",tank:"veteran",assassin:"pillard",druid:"druidesse",whale:"baleine",banner:"etendard"},RT=`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b6b7a"/><stop offset="1" stop-color="#2c3540"/></linearGradient></defs>
  <rect width="64" height="64" fill="url(#s)"/><rect x="18" y="6" width="4.5" height="56" rx="2" fill="#6b4423" stroke="#2a1709" stroke-width="1.6"/>
  <circle cx="20.25" cy="7" r="3.6" fill="#ffd34a" stroke="#2a1709" stroke-width="1.6"/>
  <path d="M22.5 11 H52 L44 21.5 L52 32 H22.5 Z" fill="#3f8cff" stroke="#2a1709" stroke-width="2" stroke-linejoin="round"/>
  <path d="M27 16 H43" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
  <ellipse cx="20.25" cy="60" rx="10" ry="3" fill="#8a8378" stroke="#2a1709" stroke-width="1.6"/></svg>`)}`,DT={druidesse:vb,baleine:Mb,etendard:RT},vT=Object.fromEntries(D0.map(i=>[i,Z.monsters[i].name]));function Vf(i,t){let e=i.killed[t],n=i.killed[0]+i.killed[1];return{n:e,pc:n?100*e/n:0}}var jr=i=>`${i} pl.`;function Rp(i){Bf(i),i.querySelectorAll("img[data-art]").forEach(t=>{let e=DT[t.dataset.art??""];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var $b={hp:"heart",damage:"sword",attackSpeed:"fast",moveSpeed:"boot",range:"target"},cc=i=>`${Math.round(i*100)}`,xp=i=>String(Math.max(0,i)),hc=i=>Math.max(0,Math.min(100,100*i/Z.hp.start)),MT=15;function Ab(i){let t=null,e=0;for(let n of be){let o=i.army[n]*Z.troops[n].places;o>e&&(e=o,t=n)}return t}var Ib=i=>`<span class="face">${i?`<img data-art="${Io[i]}" alt="">`:lt("person")}</span>`,Sf=i=>i===1?"1er":`${i}e`,Ao=(i,t="")=>`<span class="bar${t?` ${t}`:""}"><i style="width:${Math.max(0,Math.min(100,i))}%"></i></span>`,AT=i=>`<div class="stat hp">${lt("heart")}<span class="track">${Ao(hc(i))}<b>${xp(i)}</b></span></div>`,Hb=(i,t,e)=>`<span class="chip">${lt($b[e])}+${cc(i.up[t][e])} %</span>`,fc=(i,t)=>_o.filter(e=>i.up[t][e]>0).sort((e,n)=>i.up[t][n]-i.up[t][e]),Cp={hp:"",damage:"",attackSpeed:"coup/s",moveSpeed:"m/s",range:"m"},IT={hp:0,damage:1,attackSpeed:2,moveSpeed:1,range:1};function xn(i,t=1){let e=(i+1e-9).toFixed(t);return e.includes(".")&&(e=e.replace(/0+$/,"").replace(/\.$/,"")),e.replace(".",",")}var lc=(i,t,e)=>Jp(i,e)[t],Op=(i,t)=>xn(t,IT[i]);function _T(i,t){let e={...i,[t.kind]:{...i[t.kind]}};return e[t.kind][t.stat]+=Z.rarities[t.rarity].bonus,e}var Up=Z.troops,Pf={barbarian:{name:"Barbare",she:!1,role:"Solide et rapide pour une seule place. Il fonce au contact et tient le front.",rules:[["sword","Corps \xE0 corps",`\xE0 ${xn(Up.barbarian.range)} m`]],fears:["druid","whale"],beats:["tank"]},archer:{name:"Arch\xE8re",she:!0,role:"Fragile, elle tire de loin. La seule \xE0 toucher ce qui vole.",rules:[["target","Tire de loin",`\xE0 ${xn(Up.archer.range)} m`],["fly","Touche ce qui vole","la seule contre la baleine"]],fears:["assassin","druid"],beats:["whale"]},tank:{name:"Colosse",she:!1,role:"Lent et massif, il encaisse. Son cri attire sur lui les ennemis proches.",rules:[["swords","Cri de guerre",`les ennemis \xE0 ${xn(Z.taunt.radius)} m le frappent ${xn(Z.taunt.seconds)} s, toutes les ${xn(Z.taunt.every)} s`]],fears:["barbarian","assassin","whale"],beats:[]},assassin:{name:"Assassin",she:!1,role:"Le plus rapide. Il fonce sur les arch\xE8res et les druidesses avant le reste.",rules:[["target","Chasse les tireurs",`arch\xE8res et druidesses \xE0 ${xn(Z.assassinHunt)} m d\u2019abord`]],fears:["whale"],beats:["archer","druid","tank"]},druid:{name:"Druidesse",she:!0,role:"Fragile, elle frappe de loin. Sa foudre touche tout un groupe au sol.",rules:[["target","Tire de loin",`\xE0 ${xn(Up.druid.range)} m`],["star","Foudre en zone",`tout le sol \xE0 ${xn(Up.druid.splash)} m de sa cible`]],fears:["assassin","whale"],beats:["barbarian","archer"]},whale:{name:"Baleine",she:!0,role:"Elle survole la m\xEAl\xE9e et nettoie le sol. Seules les arch\xE8res l\u2019atteignent.",rules:[["fly","Vole","seules les arch\xE8res la touchent"],["crystal","Frappe en zone",`tout le sol \xE0 ${xn(Up.whale.splash)} m de sa cible`]],fears:["archer"],beats:["barbarian","assassin"]},banner:{name:"Porte-\xE9tendard",she:!1,role:"Il ne se bat pas. Plant\xE9 o\xF9 tu veux, il ouvre un endroit o\xF9 poser tes renforts.",rules:[["target","O\xF9 tu veux",`sauf sur la rive ennemie et \xE0 moins de ${xn(Z.banner.monsterGap)} m d\u2019un monstre`],["star","Zone de pose",`tes troupes se posent \xE0 ${xn(Z.banner.radius)} m de lui pendant ${xn(Z.banner.seconds)} s`]],fears:[],beats:[]}},$T=i=>i==="fly"?lt("arrow","ic up"):lt(i),_b=!1;function bc(){if(_b)return;_b=!0;let i='stroke="#2a1709" stroke-width="3.6" stroke-linejoin="round"';document.body.insertAdjacentHTML("afterbegin",`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true">
    <symbol id="i-coin" viewBox="0 0 64 64" overflow="visible">
      <ellipse cx="32" cy="36" rx="26" ry="25" fill="#a8641a" ${i}/>
      <circle cx="32" cy="32" r="25" fill="url(#h-gold)" ${i}/>
      <circle cx="32" cy="32" r="17.5" fill="none" stroke="#c97a12" stroke-width="2.6" opacity=".8"/>
      <path d="M32 20 L40 32 L32 44 L24 32 Z" fill="url(#h-gold)" stroke="#2a1709" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M32 23 L35 28 L32 30 Z" fill="#fff" opacity=".7"/>
      <path d="M17 25 C19 18 24 13 31 12" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".8"/>
    </symbol></svg>`)}var HT=["top","quit","opp","army","shop","players","ready","gauges","deck","hint","life","win","net"],wf=`<svg class="nsig" viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke-linecap="round">
  <path class="w" d="M6 20a26 26 0 0 1 36 0M12.5 27a17 17 0 0 1 23 0M19 34a8 8 0 0 1 10 0"/><path class="o" d="M11 7l26 32"/><path class="r" d="M11 7l26 32"/></g>
  <circle cx="24" cy="40" r="3.4" fill="#fff"/></svg>`,Lf=class{constructor(t,e){C(this,"s",t);C(this,"acts",e);C(this,"root",document.createElement("div"));C(this,"parts",{});C(this,"pick",be[0]);C(this,"armed",!0);C(this,"sheet",-1);C(this,"troop",null);C(this,"toastAt",0);C(this,"lastFrame",performance.now());C(this,"spectating",!1);C(this,"asking",!1);bc(),this.root.className="ab",document.body.appendChild(this.root);for(let n of HT){let o=document.createElement("div");o.dataset.part=n,this.root.appendChild(o),this.parts[n]={el:o,key:""}}this.root.addEventListener("click",n=>this.click(n))}put(t,e,n){let o=this.parts[t];o.key!==e&&(o.key=e,o.el.innerHTML=e?n():"",Rp(o.el))}toast(t){let e=performance.now();e-this.toastAt<700||(this.toastAt=e,uc.show(t,1.5))}render(){let t=performance.now();uc.tick(Math.min(.5,(t-this.lastFrame)/1e3)),this.lastFrame=t;let e=this.s(),n=e.stage,o=e.player,r=e.auth.clock(),a=n==="prep"&&e.alive,p=n==="battle"&&!!e.fight,s=Math.max(0,e.stageEnd-r),u=n==="prep"?wp(e.m,e.me):null;n!=="prep"&&n!=="results"&&n!=="wait"&&(this.sheet=-1),a||(this.troop=null);let f=n==="results"&&e.alive&&!!e.last,l=n==="prep"?"Pr\xE9paration":n==="results"?"R\xE9sultats":"",h=!p&&n!=="over"&&(e.alive||this.spectating);this.put("top",h?`${n}|${e.round}|${Math.ceil(s)}|${o.gold}|${o.hp}|${e.alive}`:"",()=>`
      <div class="hud-l">${AT(o.hp)}${e.alive&&n!=="wait"?`<div class="stat gold">${lt("coin")}<b>${o.gold}</b></div>`:""}</div>
      ${n==="wait"?"":`<div class="hud-r"><div class="round"><b>Round ${e.round||1}</b>${l?`<small>${l}</small>`:""}</div>
        <div class="timer">${lt("clock")}<b>${ji(s)}</b></div></div>`}`),this.put("quit",(e.alive||this.spectating)&&n!=="over"?"q":"",()=>`<button class="qbtn" data-do="askquit" aria-label="Abandonner la partie">${lt("flag")}</button>`);let c=a&&u?e.m.players[u.seat]:null;this.put("opp",c?`o|${c.seat}|${u.ghost}|${JSON.stringify(c.army)}`:"",()=>`
      <button class="hud-c next" data-do="row" data-i="${c.seat}" aria-label="Prochain adversaire : ${ee(c.name)}">${lt("swords")}<span class="who">${u.ghost?"Copie de ":""}${ee(c.name)}</span>
        <span class="minis">${be.filter(_=>c.army[_]>0).map(_=>`<span class="mini"><img data-art="${Io[_]}" alt=""><i>${c.army[_]}</i></span>`).join("")}</span></button>`);let d=Fn(o.army),T=d>=o.places;this.put("army",a?`a|${JSON.stringify(o.army)}|${o.places}|${JSON.stringify(o.up)}|${this.troop}`:"",()=>`
      <div class="panel army"><div class="ph"><span class="t">Arm\xE9e</span><span class="cap${T?" full":""}">${lt("person")}<b>${d}</b>/${o.places}</span></div>
        ${Ao(100*d/o.places,"capbar")}
        <div class="rows">${be.map(_=>this.trow(o,_,d)).join("")}</div>
        <div class="foot"><button class="btn${T?" off":""}" data-do="fill">Remplir</button><button class="btn${d?"":" off"}" data-do="clear">Vider</button></div></div>`);let y=o.places>=Z.army.maxPlaces,b=Vp(o.places),E=!y&&o.gold>=b;this.put("shop",a&&!this.troop?`s|${JSON.stringify(o.offers)}|${o.gold}|${o.places}|${JSON.stringify(o.up)}`:"",()=>`
      <div class="panel shop lines"><div class="utils">
        ${y?`<button class="util off max" data-do="cap" aria-label="Ton arm\xE9e a toutes ses places">${lt("person")}<b>Max</b><span class="price">${o.places}</span></button>`:`<button class="util${E?"":" off"}" data-do="cap" aria-label="${Z.army.step} places de plus pour ${b} or">${lt("person")}<b>+${Z.army.step}</b><span class="price">${lt("coin")}${b}</span></button>`}
        <button class="util${o.gold>=Z.economy.reroll?"":" off"}" data-do="reroll" aria-label="Relancer la boutique pour ${Z.economy.reroll} or">${lt("rotate")}<b>&nbsp;</b><span class="price">${lt("coin")}${Z.economy.reroll}</span></button></div>
        <div class="otg">${o.offers.map((_,$)=>kT(_,$,o)).join("")}</div></div>`);let m=(n==="prep"||n==="wait"||n==="results")&&!f,g=n==="battle"&&(!e.auth.solo||!!e.watchers)&&e.myBattleOver&&(e.alive||this.spectating);if(g){let _=e.duels(),$=_.filter(F=>!F.over).length;this.put("players",`d|${_.map(F=>`${F.pair}${F.watched}${F.over}${F.loser}${F.killed}`).join()}|${e.m.players.map(F=>F.hp).join()}`,()=>`
        <div class="panel players duels"><div class="ph"><span class="t steel">Duels</span><span class="cap">${$?`<b>${$}</b>&nbsp;en cours`:"finis"}</span></div>
        <div class="dlist">${_.map(F=>this.duelBlock(e,F)).join("")}</div></div>`)}else this.put("players",m?`p|${e.m.players.map(_=>`${_.hp}${_.out?.place}`).join()}|${u?.seat}`:"",()=>`
      <div class="panel players"><div class="ph"><span class="t steel">Joueurs</span></div><div class="plist">${ac(e.m).map(_=>{let $=_.seat===e.me,F=!!u&&_.seat===u.seat;return`<button class="prow${`${$?" me":""}${F?" opp":""}${!$&&!F&&!_.out&&_.hp<=MT?" low":""}${_.out?" out":""}`}" data-do="row" data-i="${_.seat}"><span class="nm">${F?lt("swords"):""}<span>${ee(_.name)}</span></span>${_.out?`<span class="place">${Sf(_.out.place)}</span>`:`<span class="php">${lt("heart")}${Ao(hc(_.hp))}<b>${xp(_.hp)}</b></span>`}</button>`}).join("")}</div></div>`);let L=Math.max(0,Ho(e.round+1)-r),U=n==="battle"&&(e.alive||this.spectating)&&(!e.auth.solo||!!e.watchers)&&e.myBattleOver;this.put("ready",a?e.readyNow?`u|${Math.ceil(s)}`:"r":U?`w|${Math.ceil(L)}`:"",()=>a&&!e.readyNow?`<button class="go ready" data-do="ready">${lt("check")}<span>Pr\xEAt</span></button>`:a?`<div class="plate until">${lt("hourglass")}<span>Bataille dans<b>${ji(s)}</b></span></div>`:`<div class="plate until">${lt("hourglass")}<span>Prochain round dans<b>${ji(L)}</b></span></div>`);let R=n==="battle"&&e.watching!==null?e.shown():null,v=R?.watched?R:null;if(v){let[_,$]=v.seats.map(ft=>e.m.players[ft]),F=v.b,J=Vf(F,0),tt=Vf(F,1),z=Math.max(0,Z.battle.maxSeconds-F.time),et=e.m.pairs[e.watching].ghost;this.put("gauges",`w|${e.watching}|${J.n}|${tt.n}|${Math.ceil(z)}|${F.over}`,()=>`<div class="gauge">
        <div class="side me"><span class="nm">${ee(_.name)}</span><span class="pct">${jr(J.n)}</span>${Ao(J.pc,"gbar")}</div>
        <div class="clock"><b>${ji(z)}</b><small>${F.over?"Fini":`Round ${e.round}`}</small></div>
        <div class="side op"><span class="nm">${ee($.name)}${et?" (copie)":""}</span><span class="pct">${jr(tt.n)}</span>${Ao(tt.pc,"gbar")}</div></div>
        <div class="wtag">${lt("eye")}<span>Tu regardes</span></div>`)}let V=e.fight?.b;if(v||g)for(let _ of["deck","hint","life"])this.put(_,"",()=>"");if(!v)if(p&&V){let _=Vf(V,e.mySide),$=Vf(V,1-e.mySide),F=e.oppSeat!==null?e.m.players[e.oppSeat].name:"",J=Math.max(0,Z.battle.maxSeconds-V.time);this.put("gauges",`g|${_.n}|${$.n}|${Math.ceil(J)}`,()=>`<div class="gauge">
        <div class="side me"><span class="nm">${ee(o.name)}</span><span class="pct">${jr(_.n)}</span>${Ao(_.pc,"gbar")}</div>
        <div class="clock"><b>${ji(J)}</b><small>Round ${e.round}</small></div>
        <div class="side op"><span class="nm">${ee(F)}${e.ghost?" (copie)":""}</span><span class="pct">${jr($.n)}</span>${Ao($.pc,"gbar")}</div></div>`);let tt=V.left(e.mySide);if(!g){if(this.armed&&tt[this.pick]<=0){let $t=be.find(ie=>tt[ie]>0);$t&&(this.pick=$t)}let z=be.filter($t=>e.player.army[$t]>0),et=e.link==="cut"||e.link==="away";this.put("deck",et?"":`d|${JSON.stringify(tt)}|${this.pick}|${this.armed}`,()=>`<div class="deck">${z.map($t=>`
        <button class="dcard${$t===this.pick&&this.armed?" sel":""}${tt[$t]?"":" empty"}" data-do="pick" data-t="${$t}" aria-label="${zf[$t]}"><img class="dp" data-art="${Io[$t]}" alt=""><i>\xD7${tt[$t]}</i></button>`).join("")}</div>`);let ft=be.every($t=>tt[$t]===0),yt=V.heralds.find($t=>$t.tick>V.tick),_t=yt?Math.ceil((yt.tick-V.tick)/Z.tickHz):0;this.put("hint",yt?`m|${yt.kind}|${_t}`:V.tick<120&&!ft&&!et?"h":"",()=>yt?`<div class="plate ahint">${vT[yt.kind]} se r\xE9veille dans ${_t} s</div>`:'<div class="plate ahint">Touche une carte, puis garde le pouce sur le terrain</div>'),this.put("life",`l|${o.hp}`,()=>`<div class="plate hp-mini">${lt("heart")}<b>${xp(o.hp)}</b></div>`)}}else for(let _ of["gauges","deck","hint","life"])this.put(_,"",()=>"");let S=e.link,D=e.oppSeat!==null?e.m.players[e.oppSeat].name:"",A=!e.alive||n==="over"?"":n==="battle"?S==="lost"?"lost":S==="cut"||S==="away"?"cut":e.oppLost?`opp|${D}`:"":S==="lost"?n==="prep"?"top":"top hi":"";this.put("net",A,()=>A==="lost"?`<div class="dim soft"></div><div class="winwrap net"><div class="wt">Connexion perdue</div><div class="win">${wf}
          <p class="say">Reconnexion<span class="dots"><i>.</i><i>.</i><i>.</i></span></p></div></div>`:A==="cut"?`<div class="plate netp">${wf}<span><b>Connexion perdue</b><small>La bataille continue sans toi. Tu reviens au prochain round.</small></span></div>`:A.startsWith("top")?`<div class="plate netp ${A}">${wf}<span><b>Connexion perdue</b><small>Reconnexion<span class="dots"><i>.</i><i>.</i><i>.</i></span></small></span></div>`:`<div class="plate netp foe">${wf}<span><b>${ee(D)} a perdu la connexion</b><small>Plus de renforts de son c\xF4t\xE9</small></span></div>`),this.windows(e,s)}duelBlock(t,e){let n=`${e.watched?" sel":""}${e.over?" done":""}${e.mine?" mine":""}`,o=(r,a)=>{let p=t.m.players[r],s=e.over&&e.loser===r,u=a===1&&e.ghost,f=`${r===t.me&&!u?" me":""}${s?" dlost":""}`,l=!e.over&&e.killed?`<span class="dg">${jr(e.killed[a])}</span>`:s&&e.damage?`<span class="dl">\u2212${e.damage}</span>`:"<span></span>",h=p.out?`<span class="place">${Sf(p.out.place)}</span>`:`<span class="dlife">${lt("heart")}<b>${xp(p.hp)}</b></span>`;return`<span class="drow${f}"><span class="nm"><span>${ee(p.name)}${u?" (copie)":""}</span></span>${l}${h}</span>`};return`<button class="dblock${n}" data-do="watch" data-i="${e.pair}" aria-label="Regarder ${ee(t.m.players[e.seats[0]].name)} contre ${ee(t.m.players[e.seats[1]].name)}">${e.watched?`<span class="dst">${lt("eye")}</span>`:""}${o(e.seats[0],0)}${o(e.seats[1],1)}</button>`}trow(t,e,n){let o=t.army[e],r=n+Z.troops[e].places<=t.places,a=zf[e].toLowerCase();return`<div class="trow${o||r?"":" nofit"}${this.troop===e?" on":""}" data-do="troop" data-t="${e}"><img class="pt" data-art="${Io[e]}" alt=""><div class="tn"><b>${o}</b><small>${Z.troops[e].places} pl.</small></div>
      <div class="chips">${fc(t,e).slice(0,2).map(p=>Hb(t,e,p)).join("")}</div>
      <div class="pm"><button class="sq minus${o?"":" off"}" data-do="minus" data-t="${e}" aria-label="Un ${a} de moins">${lt("minus")}</button><button class="sq plus${r?"":" off"}" data-do="plus" data-t="${e}" aria-label="Un ${a} de plus">${lt("plus")}</button></div></div>`}windows(t,e){let n=t.stage,o=t.player;if(n==="over"){let r=ac(t.m),a=r[0].seat===t.me,p=r.findIndex(s=>s.seat===t.me)+1;this.put("win",`over|${r.map(s=>s.seat).join()}`,()=>{let s=f=>{let l=r[f];return l?`<div class="pod p${f+1}${l.seat===t.me?" me":""}">${Ib(Ab(l))}<span class="pn">${ee(l.name)}</span><span class="blk">${f+1}</span></div>`:""},u=r.slice(3).map((f,l)=>`<div class="rrow${f.seat===t.me?" me":""}"><b>${l+4}</b>${Ib(Ab(f))}<span class="nm">${ee(f.name)}</span>
          <span class="rr">${f.out?`${lt("swords")}Round ${f.out.round}`:""}</span></div>`).join("");return`<div class="dim"></div><div class="winwrap over"><div class="wt ${a?"yel":"steel"}">${a?"Victoire !":"Fin de la partie"}</div><div class="win">
          <div class="headline">${lt(a?"trophy":"rank")}<span>${a?"Ton arm\xE9e est la derni\xE8re debout":`Tu finis ${Sf(p)} sur ${r.length}`}</span></div>
          <div class="final"><div class="podium">${s(1)}${s(0)}${s(2)}</div><div class="rest">${u}</div></div>
          <button class="go small" data-do="again">${lt("replay")}<span>Rejouer</span></button></div></div>`});return}if(!t.alive&&!this.spectating){this.put("win",`out|${o.out?.place}`,()=>`<div class="dim"></div><div class="winwrap out"><div class="wt">\xC9limin\xE9</div><div class="win out">
        <div class="oplace"><b>${Sf(o.out?.place??8)}</b><span>sur ${t.m.players.length}</span></div>
        <div class="stl c">${lt("swords","ic w")}Round ${o.out?.round}</div>
        <p class="say">La partie continue sans toi.</p>
        <div class="foot2"><button class="btn big" data-do="spectate">Regarder la fin</button><button class="go small" data-do="again">${lt("replay")}<span>Rejouer</span></button></div></div></div>`);return}if(this.asking&&t.alive){this.put("win",`quit|${t.auth.solo}`,()=>`<div class="dim"></div><div class="winwrap quit"><div class="wt">Abandonner ?</div><div class="win">
        <p class="say">${t.auth.solo?"La partie s\u2019arr\xEAte et tu reviens \xE0 l\u2019accueil.":"Tu quittes la partie. Elle continue sans toi et tu perds tes batailles, jusqu\u2019\xE0 ce que tu la reprennes depuis l\u2019accueil."}</p>
        <div class="foot2"><button class="btn big" data-do="stay">Continuer</button><button class="btn big red" data-do="quit">${lt("flag","ic w")}Abandonner</button></div></div></div>`);return}if(n==="results"&&t.last&&t.alive){this.put("win",`res|${t.round}|${t.auth.solo}`,()=>this.results(t,t.last));return}if(this.troop&&n==="prep"){let r=this.troop;this.put("win",`troop|${r}|${o.army[r]}|${JSON.stringify(o.up[r])}|${o.buys.length}`,()=>BT(o,r));return}if(this.sheet>=0&&(n==="prep"||n==="results"||n==="wait")){let r=t.m.players[this.sheet],a=n==="prep"?wp(t.m,t.me):null;this.put("win",`sheet|${r.seat}|${r.hp}|${JSON.stringify(r.army)}|${r.places}|${JSON.stringify(r.up)}|${a?.seat}`,()=>FT(r,t.me,a?.seat??-1));return}if(n==="wait"){this.put("win",`wait|${Math.max(1,Math.ceil(e))}`,()=>`<div class="winwrap count"><div class="wt yel">La partie commence</div><div class="win count">
        <b class="cnum">${Math.max(1,Math.ceil(e))}</b><p class="say">Round 1 : ${Z.round.prep} s pour pr\xE9parer ton arm\xE9e, puis la bataille.</p></div></div>`);return}this.put("win","",()=>"")}results(t,e){let n=Db(t),o=t.player,r=t.oppSeat!==null?t.m.players[t.oppSeat]:null,a=e.find(E=>E.pair.a===t.me||E.pair.b===t.me&&!E.pair.ghost),p=n.won===null?"\xC9galit\xE9":n.won?"Victoire":"D\xE9faite",s=n.result,u=t.mySide,f=s?[s.killed[u],s.killed[1-u]]:[0,0],l=f[0]+f[1],h=r?ee(r.name)+(t.ghost?" (copie)":""):"",c=(E,m,g)=>`<div class="dside ${g}"><span class="nm">${E}</span>${Ao(l?100*m/l:0,"gbar")}<span class="pct">${jr(m)}</span></div>`,d=a?.damage??0,T=(E,m)=>s?.outcome==="wipe"?m?`L\u2019arm\xE9e de ${E} est an\xE9antie`:"Ton arm\xE9e est an\xE9antie":s?.outcome==="time"?m?"Tu as tu\xE9 le plus de places":`${E} a tu\xE9 le plus de places`:"Plus personne sur le terrain",y=t.ghost?'<b class="zero">0</b><span>Contre une copie : aucun PV en jeu</span>':n.won===null?'<b class="zero">0</b><span>\xC9galit\xE9 : personne ne perd de PV</span>':n.won?`<b>\u2212${d}</b><span>pour <strong>${h}</strong> \xB7 ${T(h,!0)}</span>`:`<b>\u2212${d}</b><span>${T(h,!1)}</span>`,b=e.filter(E=>E!==a).map(E=>{let m=t.m.players[E.pair.a],g=t.m.players[E.pair.b],L=E.loser!==null?t.m.players[E.loser]:null,U=E.pair.ghost?'<span class="loss none">Copie</span>':L&&E.damage?`<span class="loss">${ee(L.name)} ${lt("heart")}\u2212${E.damage}</span>`:'<span class="loss none">\xC9galit\xE9</span>';return`<div class="oline">${lt("swords")}<span class="pair"><b>${ee(m.name)}</b> \xB7 <b>${ee(g.name)}${E.pair.ghost?" (copie)":""}</b></span>${U}</div>`}).join("");return`<div class="dim"></div><div class="winwrap res"><div class="wt ${n.won===null?"steel":n.won?"me":""}">${p}</div><div class="win">
      <div class="duel">${c(ee(o.name),f[0],"me")}<div class="vs">${lt("swords")}</div>${c(h,f[1],"op")}</div>
      <div class="lost">${lt("heart")}${y}</div>
      <div class="others">${b}</div>
      ${t.auth.solo?`<button class="go small" data-do="next">${lt("arrow")}<span>Continuer</span></button>`:""}</div></div>`}click(t){let e=t.target.closest("[data-do]");if(!e)return;let n=this.s(),o=n.player,r=e.dataset.do,a=e.dataset.t,p={...o.army},s=(u,f)=>{u||this.toast(f)};switch(r){case"cap":s(o.places<Z.army.maxPlaces&&n.do({k:"cap"}),o.places>=Z.army.maxPlaces?"Ton arm\xE9e a d\xE9j\xE0 toutes ses places":"Pas assez d\u2019or");break;case"reroll":s(n.do({k:"reroll"}),"Pas assez d\u2019or");break;case"buy":s(n.do({k:"buy",slot:Number(e.dataset.i)}),"Pas assez d\u2019or");break;case"plus":p[a]++,s(n.do({k:"army",army:p}),"Plus de place");break;case"minus":p[a]>0&&(p[a]--,n.do({k:"army",army:p}));break;case"clear":n.do({k:"army",army:Bn()});break;case"fill":{let u=be.reduce((l,h)=>p[h]*Z.troops[h].places>p[l]*Z.troops[l].places?h:l,be[0]),f=o.places-Fn(p);for(;f>=Z.troops[u].places;)p[u]++,f-=Z.troops[u].places;for(;f>0;)p[be[0]]++,f-=Z.troops[be[0]].places;n.do({k:"army",army:p});break}case"row":this.sheet=Number(e.dataset.i),this.troop=null;break;case"watch":{let u=n.duels()[Number(e.dataset.i)];n.watch(!u||u.mine?null:u.pair);break}case"close":this.sheet=-1;break;case"troop":this.troop=this.troop===a?null:a,this.sheet=-1;break;case"tclose":this.troop=null;break;case"pick":a===this.pick&&this.armed?this.armed=!1:(this.pick=a,this.armed=!0);break;case"ready":this.acts.ready();break;case"next":this.acts.next();break;case"again":this.acts.again();break;case"spectate":this.spectating=!0,this.acts.spectate();break;case"askquit":n.alive?this.asking=!0:this.acts.quit();break;case"stay":this.asking=!1;break;case"quit":this.asking=!1,this.acts.quit();return}this.render()}};function kT(i,t,e){if(!i)return'<span class="ot sold"></span>';let n=Z.rarities[i.rarity],o=Ni(i),r=i.stat,a=Op(r,lc(i.kind,r,e.up)),p=Op(r,lc(i.kind,r,_T(e.up,i))),s=`${n.name} : ${Bp[r]} +${cc(n.bonus)} % pour ${Pf[i.kind].name.toLowerCase()} (${a} \u2192 ${p}${Cp[r]?` ${Cp[r]}`:""}), ${o} or`,u=a.length+p.length+Cp[r].length>=14;return`<button class="ot r${i.rarity+1}${e.gold<o?" poor":""}${u?" long":""}" data-do="buy" data-i="${t}" aria-label="${s}" title="${s}">
    <span class="opw"><img class="op" data-art="${Io[i.kind]}" alt=""><span class="price">${lt("coin")}${o}</span></span><span class="ott"><span class="otn"><b>${Bp[r]}</b></span>
    <span class="otv"><span class="b">${a}</span><span class="ar">\u2192</span><b>${p}</b><em>${Cp[r]}</em></span></span></button>`}function BT(i,t){let e=Pf[t],n=Z.troops[t],o=i.army[t],r=i.up[t],a=_o.map(f=>{let l=f==="range"&&!n.rangeUpgradable,h=[];for(let b of i.buys){if(b.kind!==t||b.stat!==f)continue;let E=h.find(m=>m.r===b.rarity);E?E.n++:h.push({r:b.rarity,n:1})}let c=h.reduce((b,E)=>b+E.n,0)>=3?h:h.flatMap(b=>Array.from({length:b.n},()=>({r:b.r,n:1}))),d=!l&&r[f]>0,T=c.length?c.map(({r:b,n:E})=>{let m=Z.rarities[b];return`<span class="buy r${b+1}"><b>+${cc(m.bonus)} %${E>1?` \xD7${E}`:""}</b><small>${m.name}</small></span>`}).join(""):l?'<span class="none">ne s\u2019am\xE9liore pas</span>':"",y=d?`<span class="b">${Op(f,n[f])}</span><span class="ar">\u2192</span><b class="v up">${Op(f,lc(t,f,i.up))}</b>`:`<b class="v">${Op(f,n[f])}</b>`;return`<div class="tfb-st${d?" on":""}">${lt($b[f])}<span class="n">${Bp[f]}</span><span class="comp">${T}</span><span class="vv">${y}<small>${Cp[f]}</small></span></div>`}).join(""),p=t==="banner"?'<p class="none tfb-none">La boutique ne lui propose rien.</p>':_o.every(f=>r[f]<=0)?`<p class="none tfb-none">Rien d\u2019achet\xE9 pour ${e.she?"elle":"lui"}. La boutique peut tout lui am\xE9liorer${n.rangeUpgradable?"":", sauf la port\xE9e"}.</p>`:"",s=(f,l)=>f.map(h=>`<span class="vsf ${l}" title="${Pf[h].name}"><img data-art="${Io[h]}" alt=""><b>${Pf[h].name}</b></span>`).join(""),u=(f,l,h)=>l.length?`<div><div class="tf-k">${f}</div><div class="vsi">${s(l,h)}</div></div>`:"";return`<div class="panel tfb">
    <div class="ph"><span class="t">${e.name}</span><span class="cap">\xD7${o} \xB7 ${n.places}&nbsp;place${n.places>1?"s":""}</span></div><button class="x" data-do="tclose" aria-label="Fermer">${lt("close")}</button>
    <p class="tf-role tfb-role">${e.role}</p>
    <div class="tfb-stats">${a}</div>
    ${p}
    <div class="tfb-f">
      <div><div class="tf-k">R\xE8gles</div><ul class="tf-rules">${e.rules.map(([f,l,h])=>`<li>${$T(f)}<span><b>${l}</b> ${h}</span></li>`).join("")}</ul></div>
      ${u("Craint",e.fears,"fear")}${u("Bat",e.beats,"beat")}
    </div></div>`}function FT(i,t,e){let n=be.filter(r=>i.army[r]>0||fc(i,r).length).map(r=>`<div class="srow"><img class="pt" data-art="${Io[r]}" alt=""><b>\xD7${i.army[r]}</b>
    <div class="chips">${fc(i,r).map(a=>Hb(i,r,a)).join("")}</div></div>`).join("");return`<div class="dim" data-do="close"></div><div class="winwrap sheet"><div class="win flat">
    <div class="ph"><span class="t${i.seat===t?"":i.seat===e?" red":" steel"}">${i.seat===e?lt("swords"):""}${ee(i.name)}${i.seat===t?" (toi)":""}</span></div><button class="x" data-do="close" aria-label="Fermer">${lt("close")}</button>
    <div class="sstats"><span class="stl">${lt("heart")}${Ao(hc(i.hp))}${xp(i.hp)}</span><span class="stl">${lt("person","ic w")}${Fn(i.army)}<small>/ ${i.places} places</small></span></div>
    ${n?`<div class="srows">${n}</div>`:'<p class="say empty">Pas encore d\u2019arm\xE9e.</p>'}</div></div>`}var Uf=class{constructor(t,e,n,o,r,a,p=!0,s=Z.net.delayTicks){C(this,"game",t);C(this,"round",e);C(this,"me",n);C(this,"opp",o);C(this,"net",r);C(this,"now",a);C(this,"delay",s);C(this,"mine",[]);C(this,"theirs",[]);C(this,"prefix",0);C(this,"delivered",0);C(this,"acked",0);C(this,"best",Z.net.delayTicks-1);C(this,"claims",[]);C(this,"myTick",0);C(this,"heard");C(this,"goneAt",null);C(this,"cutAt",null);C(this,"stop");C(this,"timer",null);this.heard=a(),this.stop=r.listen(u=>this.receive(u)),p&&(this.timer=setInterval(()=>this.flush(),Z.net.sendEvery)),this.flush()}send(t){this.mine.push(t),this.flush()}flush(){this.net.send({g:this.game,r:this.round,from:this.me,to:this.opp,upTo:this.myTick+this.delay-1,count:this.mine.length,base:this.acked,drops:this.mine.slice(this.acked),ack:this.prefix,...this.goneAt===null?{}:{cut:this.goneAt}})}receive(t){if(!(t.g!==this.game||t.r!==this.round||t.from!==this.opp||t.to!==this.me)){for(this.heard=this.now(),typeof t.cut=="number"&&this.cutAt===null&&(this.cutAt=t.cut),t.ack>this.acked&&(this.acked=Math.min(t.ack,this.mine.length)),t.drops.forEach((e,n)=>{this.theirs[t.base+n]||(this.theirs[t.base+n]=e)});this.theirs[this.prefix];)this.prefix++;this.claims.push({upTo:t.upTo,count:t.count}),this.claims=this.claims.filter(e=>e.count<=this.prefix?(e.upTo>this.best&&(this.best=e.upTo),!1):!0)}}take(){let t=this.theirs.slice(this.delivered,this.prefix);return this.delivered=this.prefix,t}promised(){return this.myTick+this.delay-1}frontier(t){return t>this.myTick&&(this.myTick=t),this.goneAt===null?this.best+1:1/0}silence(){return this.now()-this.heard}linked(){return this.net.connected?.()??!0}cutOff(){return this.goneAt===null&&(this.goneAt=this.best+1,this.flush()),this.goneAt}gone(){return this.goneAt}cutMe(){return this.cutAt}seen(){return this.theirs.slice(0,this.prefix)}close(){this.timer&&clearInterval(this.timer),this.timer=null,this.stop()}};var Cf=class{constructor(t,e,n){C(this,"url",t);C(this,"key",e);C(this,"ws",null);C(this,"ref",0);C(this,"joined",!1);C(this,"queue",[]);C(this,"listeners",new Set);C(this,"beat",null);C(this,"closed",!1);C(this,"topic");this.topic=`realtime:${n}`,this.open()}open(){if(this.closed)return;let t=new WebSocket(`${this.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${encodeURIComponent(this.key)}&vsn=1.0.0`);this.ws=t,this.joined=!1,t.onopen=()=>{this.raw({topic:this.topic,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:""},postgres_changes:[],private:!1}},ref:String(++this.ref),join_ref:"1"}),this.beat=setInterval(()=>this.raw({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++this.ref)}),25e3)},t.onmessage=e=>{let n;try{n=JSON.parse(String(e.data))}catch{return}if(n.topic===this.topic){if(n.event==="phx_reply"&&n.payload.status==="ok"&&!this.joined){this.joined=!0;for(let o of this.queue.splice(0))t.send(o)}else if(n.event==="broadcast"&&n.payload.event==="duel"&&n.payload.payload)for(let o of this.listeners)o(n.payload.payload)}},t.onclose=()=>{this.beat&&clearInterval(this.beat),this.beat=null,this.closed||setTimeout(()=>this.open(),800)},t.onerror=()=>{try{t.close()}catch{}}}raw(t){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}send(t){let e=JSON.stringify({topic:this.topic,event:"broadcast",payload:{type:"broadcast",event:"duel",payload:t},ref:String(++this.ref),join_ref:"1"});this.joined&&this.ws?.readyState===WebSocket.OPEN?this.ws.send(e):this.queue.length<50&&this.queue.push(e)}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}connected(){return this.joined&&this.ws?.readyState===WebSocket.OPEN&&(typeof navigator>"u"||navigator.onLine!==!1)}close(){this.closed=!0,this.beat&&clearInterval(this.beat),this.ws?.close()}};var xf=class{constructor(t,e,n){C(this,"seat",t);C(this,"drops",[]);C(this,"prefix",0);C(this,"delivered",0);C(this,"best",-1);C(this,"claims",[]);C(this,"heard");C(this,"stopAt",null);this.heard=e,(t===null||!n)&&(this.stopAt=0)}},Of=class{constructor(t,e,n,o,r,a){C(this,"game",t);C(this,"round",e);C(this,"now",a);C(this,"sides");C(this,"stop");this.sides=[new xf(n[0],a(),o[0]),new xf(n[1],a(),o[1])],this.stop=r.listen(p=>this.receive(p))}receive(t){if(t.g!==this.game||t.r!==this.round)return;let e=this.sides.findIndex(r=>r.seat===t.from);if(e<0)return;let n=this.sides[e],o=this.sides[1-e];for(n.heard=this.now(),t.drops.forEach((r,a)=>{n.drops[t.base+a]||(n.drops[t.base+a]=r)});n.drops[n.prefix];)n.prefix++;n.claims.push({upTo:t.upTo,count:t.count}),n.claims=n.claims.filter(r=>r.count<=n.prefix?(r.upTo>n.best&&(n.best=r.upTo),!1):!0),typeof t.cut=="number"&&o.seat===t.to&&(o.stopAt===null||t.cut<o.stopAt)&&(o.stopAt=t.cut)}take(t){let e=this.sides[t],n=e.drops.slice(e.delivered,e.prefix);return e.delivered=e.prefix,e.stopAt===null?n:n.filter(o=>o.tick<e.stopAt)}frontier(){let t=1/0;for(let e of this.sides)if(e.stopAt===null){if(this.now()-e.heard>Z.net.cutSeconds){e.stopAt=e.best+1;continue}t=Math.min(t,e.best+1)}return t}close(){this.stop()}},Rf=class{constructor(t,e,n,o,r,a=!0,p=Z.net.delayTicks){C(this,"game",t);C(this,"round",e);C(this,"me",n);C(this,"opp",o);C(this,"net",r);C(this,"delay",p);C(this,"mine",[]);C(this,"myTick",0);C(this,"timer",null);a&&(this.timer=setInterval(()=>this.flush(),200))}at(t){t>this.myTick&&(this.myTick=t)}promised(){return this.myTick+this.delay-1}send(t){this.mine.push(t),this.flush()}flush(){this.net.send({g:this.game,r:this.round,from:this.me,to:this.opp,upTo:this.promised(),count:this.mine.length,base:0,drops:this.mine,ack:0})}close(){this.timer&&clearInterval(this.timer),this.timer=null}};var NT=globalThis.__PLANETOID_NET,bo=NT??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var kb=(i,t,e)=>i("autobattler_open",{p_secret:t,p_name:e}),Bb=(i,t,e,n)=>i("autobattler_join",{p_secret:t,p_code:e,p_name:n}),dc=(i,t,e)=>i("autobattler_room",{p_secret:t,p_game:e}),Fb=(i,t,e)=>i("autobattler_launch",{p_secret:t,p_game:e});function Nb(i){return/unknown game/.test(i)?"Aucune partie avec ce code.":/game full/.test(i)?"La partie est compl\xE8te (8 joueurs).":/already started/.test(i)?"La partie a d\xE9j\xE0 commenc\xE9.":/bad name/.test(i)?"Choisis un nom (24 lettres au plus).":/only the creator/.test(i)?"Seul le cr\xE9ateur de la partie peut la lancer.":/not a player/.test(i)?"Ce t\xE9l\xE9phone ne fait pas partie de cette partie.":i}var Df=class{constructor(t,e,n,o,r=()=>Date.now(),a=!0){C(this,"rpc",t);C(this,"key",e);C(this,"game",n);C(this,"now",r);C(this,"solo",!1);C(this,"seed");C(this,"humans");C(this,"mySeat");C(this,"code");C(this,"onChange");C(this,"log",[]);C(this,"mine",[]);C(this,"lastSeq",0);C(this,"synced",-1/0);C(this,"offset");C(this,"bestRtt",1/0);C(this,"shift",0);C(this,"startAt");C(this,"closed",!1);C(this,"timer",null);C(this,"busy",!1);if(o.seed===null||o.startAt===null)throw new Error("the game is not launched");this.seed=o.seed,this.startAt=o.startAt,this.mySeat=o.seat,this.code=o.code,this.humans=[...o.players].sort((p,s)=>p.seat-s.seat).map(p=>p.name),this.offset=o.now-r(),a&&this.loop()}clock(){return(this.now()+this.offset-this.startAt)/1e3+this.shift}syncedTo(){return this.synced}confirmed(){return this.log}pending(){return this.mine}post(t,e,n){let o={seq:-1,seat:this.mySeat,round:t,kind:e,data:n,cid:Qf(),sent:0};return this.mine.push(o),this.sendOne(o),o.cid}async sendOne(t){t.sent=this.now();try{let e=await this.rpc("autobattler_act",{p_secret:this.key,p_game:this.game,p_round:t.round,p_kind:t.kind,p_data:t.data,p_cid:t.cid});typeof e?.shift=="number"&&e.shift>this.shift&&(this.shift=e.shift,this.onChange?.())}catch(e){let n=e.message??"";/connexion|fetch|network/i.test(n)||(this.mine=this.mine.filter(o=>o!==t),this.onChange?.())}}async poll(){if(!this.busy){this.busy=!0;try{let t=this.now(),e=await this.rpc("autobattler_log",{p_secret:this.key,p_game:this.game,p_since:this.lastSeq}),n=this.now();n-t<=this.bestRtt+30&&(this.bestRtt=Math.min(this.bestRtt,n-t),this.offset=e.now-(t+n)/2);let o=!1;for(let a of e.entries)a.seq<=this.lastSeq||(this.log.push(a),this.lastSeq=a.seq,o=!0);let r=new Set(this.log.map(a=>a.cid));this.mine=this.mine.filter(a=>!r.has(a.cid)),typeof e.shift=="number"&&e.shift>this.shift&&(this.shift=e.shift),this.synced=(e.now-this.startAt)/1e3+this.shift-.25;for(let a of this.mine)this.now()-a.sent>2500&&this.sendOne(a);o&&this.onChange?.()}catch{}finally{this.busy=!1}}}loop(){this.closed||this.poll().finally(()=>{let t=this.clock(),e=(t%$o+$o)%$o,n=e>=29&&e<32||e>=107.5&&e<110;this.timer=setTimeout(()=>this.loop(),n?250:e>=30?500:1e3)})}close(){this.closed=!0,this.timer&&clearTimeout(this.timer)}};var Xb=()=>!!bo.url&&!!bo.key;var Xi=async(i,t)=>{let e={apikey:bo.key,"Content-Type":"application/json"};bo.key.startsWith("sb_")||(e.Authorization=`Bearer ${bo.key}`);let n;try{n=await fetch(`${bo.url}/rest/v1/rpc/${i}`,{method:"POST",headers:e,body:JSON.stringify(t)})}catch{throw new Error("Pas de connexion au serveur.")}let o=await n.text();if(!n.ok){let r=o;try{r=JSON.parse(o).message??o}catch{}throw(n.status===404||/Could not find the function/.test(r))&&(r="Le serveur de ce mode n\u2019est pas encore install\xE9 (game/src/autobattler/net/schema.sql)."),new Error(Nb(r))}return o?JSON.parse(o):null},Dp={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function vp(){let i=Dp.get("ab-cle");if(!i||i.length<20){let t=crypto.getRandomValues(new Uint8Array(32));i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),Dp.set("ab-cle",i)}return i}var yc=()=>{try{let i=Dp.get("ab-partie");return i?JSON.parse(i):null}catch{return null}},Jb=(i,t)=>Dp.set("ab-partie",JSON.stringify({id:i,code:t,at:Date.now()})),mc=()=>Dp.del("ab-partie");var Tc=(i,t)=>`<div id="out" class="${i}" style="background-image:url(${cf})"><div class="shade"></div>${t}</div>`,gc=(i,t,e)=>`<div class="otop"><button class="back" data-a="${i}"><span class="bk">${lt("arrow")}</span>${t}</button><span class="fan">${e}</span></div>`;function Mp(i){let[t,e]=/Aucune partie/.test(i)?["Code inconnu","Aucune partie avec ce code. V\xE9rifie les 5 lettres."]:/déjà commencé/.test(i)?["Partie lanc\xE9e","Elle a commenc\xE9 sans toi. Demande \xE0 ton ami d\u2019en cr\xE9er une autre."]:/complète/.test(i)?["Partie compl\xE8te","Les 8 places sont prises."]:/Pas de connexion/.test(i)?["Serveur injoignable","V\xE9rifie ta connexion, puis r\xE9essaie."]:/pas encore installé|pas configuré/.test(i)?["Pas de serveur",i]:/code de la partie|5 lettres/.test(i)?["Code incomplet","Entre les 5 lettres du code."]:/nom/.test(i)?["Ton nom",i]:["Erreur",i];return`<div class="err" role="alert"><b>${t}</b><span>${ee(e)}</span></div>`}var zb=(i,t="hourglass")=>`<div class="note" role="status">${lt(t)}<span>${ee(i)}</span></div>`;function Qb(i,t,e,n,o=""){let r=null,a="",p=()=>{r&&clearTimeout(r),r=null},s=(b,E)=>{E!==a&&(a=E,i.innerHTML=Tc(b,E),Rp(i))},u=b=>{let E=i.querySelector(".msg");E&&(E.innerHTML=b)},f=b=>u(Mp(b.message??String(b)));function l(){let b=i.querySelector(".code5"),E=i.querySelector("#ab-code");if(!b||!E)return;let m=[...b.querySelectorAll("i")],g=()=>{let L=E.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5);E.value!==L&&(E.value=L),m.forEach((U,R)=>{U.textContent=L[R]??"",U.classList.toggle("on",R===Math.min(L.length,4))})};E.addEventListener("input",g),E.addEventListener("keydown",L=>{L.key==="Enter"&&c()}),g()}function h(b=""){if(p(),!Xb()){s("form",`${gc("back","Accueil","Partie entre amis")}<div class="msg">${Mp("Le serveur n\u2019est pas configur\xE9 dans cette version.")}</div>`);return}let E=yc(),m=E&&Date.now()-E.at<(Z.maxRounds*$o+600)*1e3;s("form",`${gc("back","Accueil","Partie entre amis")}
      <div class="lob">
        <div class="cols">
          <div class="panel create"><div class="ph"><span class="t">Cr\xE9er</span></div>
            <p class="say">Une partie \xE0 ${Z.match.players} joueurs. Les places encore libres au lancement vont \xE0 des bots.</p>
            <button class="go" data-a="open">${lt("flag")}<span>Cr\xE9er une partie</span></button></div>
          <div class="panel join"><div class="ph"><span class="t steel">Rejoindre</span></div>
            <p class="say">Entre le code de 5 lettres que ton ami t\u2019a donn\xE9.</p>
            <label class="code5">${"<i></i>".repeat(5)}<input id="ab-code" maxlength="5" value="${ee(b)}" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="go" aria-label="Code de la partie"></label>
            <button class="btn big blue" data-a="join">${lt("arrow")}Rejoindre</button></div>
        </div>
        ${m?`<button class="btn mid resume" data-a="resume">${lt("replay")}Reprendre la partie <b>${ee(E.code)}</b></button>`:""}
      </div>
      <div class="msg"></div>`),l()}function c(){let b=i.querySelector("#ab-code")?.value.trim().toUpperCase()??"";if(b.length<5){u(Mp("Entre les 5 lettres du code de la partie."));return}u(zb("Connexion \xE0 la partie\u2026")),Bb(Xi,vp(),b,t).then(d,f)}function d(b){if(p(),Jb(b.id,b.code),b.startAt!==null&&b.seed!==null){y(b);return}let E=b.seat,m=Z.match.players,g=$=>$.seat===E||$.seenAt!==null&&b.now-$.seenAt<12e3,L=[...b.players].sort(($,F)=>$.seat-F.seat),U=L.map($=>`<div class="seat${$.seat===E?" me":""}${g($)?"":" away"}"><span class="sn">${$.seat+1}</span><span class="li">${ee($.name)}</span>
      <span class="tags">${$.seat===0?'<span class="tag">Cr\xE9ateur</span>':""}${$.seat===E?'<span class="tag white">Toi</span>':""}${g($)?"":'<span class="tag steel">Absent</span>'}</span></div>`);for(let $=L.length;$<m;$++)U.push(`<div class="seat free"><span class="sn">${$+1}</span><span class="li">Bot</span><span class="tags"></span></div>`);let R=L.find($=>$.seat===0)?.name??"",v=L.length,V=m-v,S=v-1,D=($,F)=>`${$} ${F}${$>1?"s":""}`,A=V?S?`Toi, ${D(S,"ami")} et ${D(V,"bot")}.`:`Toi et ${D(V,"bot")}.`:"Toutes les places sont prises.",_=typeof navigator.share=="function";s("room",`${gc("leave","Quitter","Salle d\u2019attente")}
      <div class="lob">
        <div class="cols">
          <div class="lcol">
            <div class="panel codep"><div class="ph"><span class="t">Code de la partie</span></div>
              <div class="bigcode">${[...b.code].map($=>`<span>${ee($)}</span>`).join("")}</div>
              <button class="btn mid blue" data-a="share">${lt("arrow")}${_?"Partager le lien":"Copier le lien"}</button>
              <p class="say">Tes amis touchent \xAB Partie entre amis \xBB et entrent ce code.</p></div>
            ${E===0?`<button class="go" data-a="launch">${lt("swords")}<span>Lancer la partie</span></button><p class="say">${A}</p>`:`<div class="plate waiting">${lt("hourglass")}<span><b>En attente du cr\xE9ateur</b><small>${ee(R)} lance la partie</small></span></div>`}
          </div>
          <div class="panel seats"><div class="ph"><span class="t steel">Joueurs</span><span class="cap">${lt("person")}<b>${v}</b>/${m}</span></div><div class="slist">${U.join("")}</div></div>
        </div>
      </div>
      <div class="msg"></div>`),i.room=b,r=setTimeout(()=>{dc(Xi,vp(),b.id).then(d,$=>{f($),r=setTimeout(()=>d(b),2e3)})},1500)}function T(b){let E=`${location.origin}${location.pathname}?code=${b.code}`,m=`Rejoins ma partie de L\u2019\xC9clat : code ${b.code}`;if(typeof navigator.share=="function"){navigator.share({title:"L\u2019\xC9clat",text:m,url:E}).catch(()=>{});return}let g=i.querySelector("[data-a=share]"),L=()=>{g&&(g.innerHTML=`${lt("check")}Lien copi\xE9`,setTimeout(()=>{g.innerHTML=`${lt("arrow")}Copier le lien`},2500))};navigator.clipboard?navigator.clipboard.writeText(`${m}
${E}`).then(L,()=>u(Mp(`Copie impossible : le code est ${b.code}.`))):u(Mp(`Copie impossible : le code est ${b.code}.`))}function y(b){p();let E=new Cf(bo.url,bo.key,`ab-${b.id}`),m=new Df(Xi,vp(),b.id,b),g=m.close.bind(m);m.close=()=>{g(),E.close()};let L=()=>performance.now()/1e3;e(m,(v,V,S)=>new Uf(b.id,v,V,S,E,L),{watch:(v,V,S)=>new Of(b.id,v,V,S,E,L),announce:(v,V,S)=>new Rf(b.id,v,V,S,E)})}i.onclick=b=>{let E=b.target.closest("[data-a]")?.dataset.a,m=vp(),g=i.room;if(E==="back"&&(p(),i.onclick=null,n()),E==="open"&&(u(zb("Cr\xE9ation de la partie\u2026")),kb(Xi,m,t).then(d,f)),E==="join"&&c(),E==="resume"){let L=yc();L&&dc(Xi,m,L.id).then(d,U=>{mc(),f(U)})}E==="launch"&&g&&Fb(Xi,m,g.id).then(d,f),E==="share"&&g&&T(g),E==="leave"&&(mc(),h())},h(o),o.length===5&&c()}var Yr=new URLSearchParams(location.search);{let i=document.createElement("style");i.textContent=`@font-face{font-family:"Bungee";src:url(${x0}) format("woff2");font-display:block}
@font-face{font-family:"Rubik";src:url(${O0}) format("woff2");font-weight:400 800;font-display:block}
${U0}
${C0}`,document.head.appendChild(i)}kf();bc();Promise.race([Promise.all([document.fonts.load("16px Bungee"),document.fonts.load("600 16px Rubik")]),new Promise(i=>setTimeout(i,2500))]).then(()=>document.getElementById("boot")?.remove(),()=>document.getElementById("boot")?.remove());var yn=document.getElementById("scene"),se=new mf(yn),Sc=window,me=null,nn=null,Zr=document.createElement("div");document.body.appendChild(Zr);function wc(i,t=null,e=null){Zr.innerHTML="",me?.auth.close(),nn?.root.remove(),me=new Ef(i,t),me.smooth=!0,me.replayBudgetMs=8,me.watchers=e,i.solo&&Yr.has("spect")&&(me.watchers={watch:()=>{throw new Error("no humans to follow alone")},announce:()=>({at(){},promised:()=>-1,send(){},close(){}})}),i.onChange=()=>me?.update(),nn=new Lf(()=>me,{ready:()=>me.ready(),next:()=>{let n=me;n.auth.skip?.(n.stageEnd)},again:()=>_f(),quit:()=>_f(),spectate:()=>{}}),me.update()}function _f(){me?.auth.close(),me=null,nn?.root.remove(),nn=null,se.setBattle(null);let i="";try{i=localStorage.getItem("ab-nom")??""}catch{}Zr.innerHTML=Tc("home",`
    <div class="cast" aria-hidden="true">${be.map(t=>`<span class="dcard"><img class="dp" data-art="${Io[t]}" alt=""></span>`).join("")}</div>
    <div class="hplate">
      <h1 class="title">L\u2019\xC9clat</h1>
      <p class="tagline">Huit arm\xE9es. Une seule \xE0 la fin.</p>
      <p class="say">Pr\xE9pare ton arm\xE9e, puis prends l\u2019\xC9clat au centre de l\u2019ar\xE8ne.</p>
      ${ii?`<div class="invite">${lt("flag","ic w")}<span>Invitation : partie <b>${ee(ii)}</b></span></div>`:""}
      <label class="fld"><span>Ton nom</span><input id="ab-name" maxlength="24" placeholder="Ton nom" autocomplete="nickname" value="${ee(i)}"></label>
      <button class="go" data-go="solo">${lt("swords")}<span>Jouer contre 7 bots</span></button>
      <button class="btn big${ii?" blue":""}" data-go="multi">${lt(ii?"arrow":"person")}${ii?`Rejoindre ${ee(ii)}`:"Partie entre amis"}</button>
    </div>
    ${Yr.has("dev")?`<div class="plate devbar"><span>Test de charge</span>${[50,100,150].map(t=>`<button class="btn mid" data-go="load-${t}">2 \xD7 ${t}</button>`).join("")}</div>`:""}`),Rp(Zr)}var ii=(Yr.get("code")??"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5),jb=()=>{let i=document.getElementById("ab-name")?.value.trim()||"Toi";try{localStorage.setItem("ab-nom",i)}catch{}return i.slice(0,24)};Zr.addEventListener("click",i=>{let t=i.target.closest("[data-go]")?.dataset.go;if(t==="solo"&&wc(new qr(Math.floor(Math.random()*2**31),jb())),t==="multi"){let e=ii;ii="",Qb(Zr,jb(),wc,_f,e)}t?.startsWith("load-")&&(location.search=`?load=${t.slice(5)}`)});var XT=110,JT=12,On=null,Ne=null,kn=null,Ap={at:0,x:0,y:0},Pc=0,vf=0,ai=new Map,ri=null;yn.style.touchAction="none";var Yb=()=>{let[i,t]=[...ai.values()];return{d:Math.hypot(i.x-t.x,i.y-t.y)||1,x:(i.x+t.x)/2,y:(i.y+t.y)/2}},zT=()=>{let i=me,t=i?.fight;return!!i&&!!nn&&!!t&&i.stage==="battle"&&!t.b.over&&i.link==="ok"&&nn.armed&&t.b.left(i.mySide)[nn.pick]>0},Gb=(i,t,e)=>{Ne=null,On={x:t,y:e,id:i},se.showRed=!0,Pc=0,Kb(performance.now())};yn.addEventListener("pointerdown",i=>{if(Zi.unlock(),ai.set(i.pointerId,{x:i.clientX,y:i.clientY}),yn.setPointerCapture?.(i.pointerId),ai.size===2){On=null,Ne=null,kn=null,se.showRed=!1,ri=Yb();return}if(ai.size>2||ri)return;if(zT()){Ne={x:i.clientX,y:i.clientY,id:i.pointerId,at:performance.now()};return}kn={x:i.clientX,y:i.clientY,id:i.pointerId};let t=performance.now();t-Ap.at<320&&Math.hypot(i.clientX-Ap.x,i.clientY-Ap.y)<30?(se.toggleView(),Ap.at=0):Ap={at:t,x:i.clientX,y:i.clientY}});yn.addEventListener("pointermove",i=>{let t=ai.get(i.pointerId);if(t&&(t.x=i.clientX,t.y=i.clientY),ri&&ai.size>=2){let e=Yb();se.zoomAt(e.d/ri.d,e.x,e.y,yn),se.panScreen(ri.x,ri.y,e.x,e.y,yn),ri=e,Lc();return}if(Ne&&i.pointerId===Ne.id&&Math.hypot(i.clientX-Ne.x,i.clientY-Ne.y)>JT&&(kn={x:Ne.x,y:Ne.y,id:Ne.id},Ne=null),kn&&i.pointerId===kn.id){se.panScreen(kn.x,kn.y,i.clientX,i.clientY,yn),kn.x=i.clientX,kn.y=i.clientY,Lc();return}On&&i.pointerId===On.id&&(On.x=i.clientX,On.y=i.clientY)});var Lc=()=>{me?.stage==="battle"&&se.keepView()},Wb=i=>{if(ai.delete(i.pointerId),Ne&&i.pointerId===Ne.id){let t=Ne;Gb(t.id,t.x,t.y),On=null,se.showRed=!1}On&&i.pointerId===On.id&&(On=null,se.showRed=!1),kn&&i.pointerId===kn.id&&(kn=null),ai.size===0&&(ri=null)};yn.addEventListener("pointerup",Wb);yn.addEventListener("pointercancel",Wb);yn.addEventListener("wheel",i=>{i.preventDefault(),se.zoomAt(Math.exp(-i.deltaY*.0015),i.clientX,i.clientY,yn),Lc()},{passive:!1});function Kb(i){let t=me;if(Ne&&i-Ne.at>=XT&&Gb(Ne.id,Ne.x,Ne.y),!On||!t||!nn||i-Pc<1e3*ia(nn.pick)/Z.tickHz)return;Pc=i;let e=se.pick(On.x,On.y,yn);if(!e)return;let n=vf*2.399,o=.25+.12*(vf%5),r=e.x+Math.cos(n)*o,a=e.y+Math.sin(n)*o;t.drop(nn.pick,r,a)?(vf++,vf%3===1&&Zi.play("troop_drop",{vol:.5})):t.link==="ok"&&t.fight&&t.fight.b.left(t.mySide)[nn.pick]>0&&nn.toast(nn.pick==="banner"?"Pas ici : chez l\u2019ennemi ou trop pr\xE8s d\u2019un monstre":"Pas ici : sur ta rive ou pr\xE8s de ton \xE9tendard")}var Zb=performance.now(),Ec=0,Mf=0,Uc=0,Vc="",Af=0;function qb(i){let t=Math.min(.1,(i-Zb)/1e3);Zb=i,Ec++,Mf+=t,Mf>1&&(Uc=Ec/Mf,Ec=0,Mf=0),Ji&&Ji.step(t);let e=me;if(e){if(e.stats.frame(t,e.link!=="ok"),e.update(),Kb(i),e.stage!==Vc){if(e.stage==="battle"&&(Zi.music("music_raid"),Af=0,se.battleView()),e.stage==="prep"&&se.resetView(),Vc==="battle"&&Zi.music(null),e.stage==="results"){let o=e.last?.find(r=>r.loser===e.me);e.alive&&Zi.jingle(o?"music_lose":"music_win")}Vc=e.stage}e.auth.solo&&(e.stage==="battle"&&e.myBattleOver&&!e.watchers&&(Af||(Af=i),i-Af>1600&&e.auth.skip?.(e.stageEnd)),!e.alive&&e.stage!=="over"&&e.auth.skip?.(e.stageEnd));let n=e.stage==="battle"||e.stage==="results"?e.shown():null;se.setSide(n?n.side:e.mySide),se.setBattle(n?.b??null),nn?.render()}nn&&(se.dropKind=nn.pick),se.frame(t,e?e.alpha():Ji?Ji.alpha:1),Cc&&(Cc.textContent=`${Uc.toFixed(0)} i/s \xB7 ${se.drawn} troupes \xB7 ${se.jsMs.toFixed(1)} ms de script`),requestAnimationFrame(qb)}var If=Number(Yr.get("load")??0),Cc=null,Ji=If>0?(()=>{let i=Bn();i.barbarian=If;let t={...Wn[0],monsters:[]},e=t.width,n=t.length,o=t.starts[0][0][3]-1,r=new Wi([{counts:{...i},upgrades:oa()},{counts:{...i},upgrades:oa()}],{map:t});for(let p=0;p<If;p++){let s=e/2+(p%14-6.5)*.7,u=o-Math.floor(p/14)*.9;r.schedule({tick:0,side:0,kind:"barbarian",x:s,y:u,seq:p}),r.schedule({tick:0,side:1,kind:"barbarian",x:e-s,y:n-u,seq:p})}se.setBattle(r);let a={acc:0,alpha:1,b:r,step(p){for(a.acc+=p;a.acc>=ze;)a.acc-=ze,r.over||r.step();a.alpha=a.acc/ze}};return a})():null;if(Ji||Yr.has("fps")){let i=document.createElement("div");i.className="ab",i.innerHTML=`<div><div class="plate fps"></div>${Ji?`<div class="loadbar">
    <button class="btn mid" onclick="location.search='?dev'">${lt("arrow","ic flip")}Retour</button>
    <button class="btn mid" onclick="location.reload()">${lt("replay")}Relancer</button><span class="plate">2 \xD7 ${If} en m\xEAl\xE9e</span></div>`:""}</div>`,document.body.appendChild(i),Cc=i.querySelector(".fps")}Sc.game={get session(){return me},solo(i=1,t="Benoit"){return wc(new qr(i,t)),me.stage},skip(){let i=me;return i.auth.skip?.(i.stageEnd),i.update(),i.stage},advance(i){let t=me;return t.auth.skip?.(t.auth.clock()+i),t.update(),{stage:t.stage,tick:t.fight?.b.tick}},do(i){return me.do(i)},drop(i,t,e,n=1){let o=0;for(let r=0;r<n;r++)me.drop(i,t+r%6*.7,e+Math.floor(r/6)*.7)&&o++;return o},red(i){se.showRed=i},state(){let i=me;return{stage:i.stage,round:i.round,hp:i.player.hp,gold:i.player.gold,side:i.mySide,opp:i.oppSeat,alive:i.alive,units:i.fight?.b.units.length??0,troops:be.length}},fps:()=>({fps:Uc,js:se.jsMs,drawn:se.drawn}),link(i,t=!1){let e=me;return e.link=i,e.oppLost=t,e.link},watch(i){return me.watch(i),me.watching},look(i,t,e=1.8){return se.lookAt(i,t,e),se.zoom},zoom(i,t=innerWidth/2,e=innerHeight/2){return i===0?se.resetView():se.zoomAt(i,t,e,yn),se.zoom}};se.ready.then(()=>{Sc.__ready=!0},i=>{console.error(i),Sc.__ready=!0});!Ji&&!Yr.has("nohome")&&_f();requestAnimationFrame(qb);export{wc as play};
