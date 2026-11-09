import{a as y}from"./chunk-T7GJABOB.js";var de=()=>document.documentElement.classList.contains("rot"),J=()=>window.__screen??{w:innerWidth,h:innerHeight},ni=()=>de()?J().h:J().w,ii=()=>de()?J().w:J().h;function oi(i,e){return de()?{x:e,y:J().w-i}:{x:i,y:e}}function Sr(){let i=(e,t,r)=>{Object.defineProperty(e,"clientX",{configurable:!0,enumerable:!0,get(){return de()?r.call(this):t.call(this)}}),Object.defineProperty(e,"clientY",{configurable:!0,enumerable:!0,get(){return de()?J().w-t.call(this):r.call(this)}})};for(let e of[MouseEvent,typeof Touch<"u"?Touch:null]){if(!e)continue;let t=Object.getOwnPropertyDescriptor(e.prototype,"clientX"),r=Object.getOwnPropertyDescriptor(e.prototype,"clientY");t?.get&&r?.get&&i(e.prototype,t.get,r.get)}}var tt=window;tt.__rotate||(tt.__rotate=!0,Sr());var rt="./assets/lilita-BW72GA3X.woff2";var nt="./assets/fredoka-3UPZTCSC.woff2";var it="./assets/soldat-VD7AFEPS.webp";var ot="./assets/archere-FKKFB2P7.webp";var st="./assets/recolteur-33TAN3DD.webp";var at="./assets/soldat-tete-AGMCDKZK.webp";var lt="./assets/colosse-JB5EJSFW.webp";var dt="./assets/recolteur-tete-7BNM6UJ6.webp";var pt="./assets/pillard-333ZQL3C.webp";var be={soldat:it,archere:ot,recolteur:st,veteran:lt,pillard:pt,"soldat-tete":at,"recolteur-tete":dt},k="#2a1709",ut=3.6,f=(i=ut)=>`stroke="${k}" stroke-width="${i}" stroke-linejoin="round" stroke-linecap="round"`,I=(i,e,t='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${i}" ${t}>${e.map(([r,n])=>`<stop offset="${r}" stop-color="${n}"/>`).join("")}</linearGradient>`,Ur=[I("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),I("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',I("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',I("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),I("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),I("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),I("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),I("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),I("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),I("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),I("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),I("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),I("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),I("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),I("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),I("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),me=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${f()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${f()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${f(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${f(3)}/>`,ee=`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="var(--rc, #cfd5e2)" ${f()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".5"/>
    <path d="M16 58 L50 56 L58 30 L52 32 L46 50 L18 52 Z" fill="#000" opacity=".16"/>`,Dr={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${f()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${f()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${f()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${k}" stroke-width="${ut}" stroke-linecap="round"/>`,trophy:`
    <path d="M18 8 L46 8 L46 22 C46 32 40 38 32 39 C24 38 18 32 18 22 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="${k}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M18 13 C9 13 7 18 8 22 C9 27 14 29 19 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="${k}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 13 C55 13 57 18 56 22 C55 27 50 29 45 28" fill="none" stroke="url(#h-gold)" stroke-width="3" stroke-linecap="round"/>
    <rect x="28" y="38" width="8" height="10" fill="url(#h-gold)" ${f(3)}/>
    <rect x="18" y="47" width="28" height="10" rx="3" fill="url(#h-wood)" ${f()}/>
    <path d="M24 13 L24 24 C24 28 26 31 29 33" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".75"/>`,rank:`
    <rect x="22" y="22" width="20" height="36" rx="2" fill="url(#h-gold)" ${f()}/>
    <rect x="4" y="34" width="18" height="24" rx="2" fill="url(#h-steel)" ${f()}/>
    <rect x="42" y="42" width="18" height="16" rx="2" fill="url(#h-wood)" ${f()}/>
    <path d="M32 4 L35 10 L42 11 L37 16 L38 22 L32 19 L26 22 L27 16 L22 11 L29 10 Z" fill="url(#h-gold)" ${f(2.6)}/>
    <path d="M26 27 L26 52" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".6"/>`,countdown:`
    <circle cx="32" cy="35" r="24" fill="url(#h-white)" ${f()}/>
    <path d="M32 35 L32 15 A20 20 0 0 1 51 41 Z" fill="url(#h-red)" opacity=".85"/>
    <circle cx="32" cy="35" r="24" fill="none" ${f()}/>
    <path d="M32 21 L32 35 L22 41" fill="none" ${f()}/>
    <rect x="26" y="3" width="12" height="7" rx="3" fill="url(#h-gold)" ${f(2.5)}/>
    <path d="M50 10 L56 16" stroke="${k}" stroke-width="6" stroke-linecap="round"/>`,forge:`
    <path d="M6 26 L32 8 L58 26 L52 29 L32 16 L12 29 Z" fill="url(#h-roof)" ${f()}/>
    <path d="M12 28 L12 56 M52 28 L52 56" stroke="${k}" stroke-width="7"/><path d="M12 29 L12 55 M52 29 L52 55" stroke="url(#h-wood-x)" stroke-width="3"/>
    <circle cx="32" cy="36" r="10" fill="url(#h-gold-glow)"/>
    <path d="M18 40 L46 40 L42 46 L36 46 L38 54 L26 54 L28 46 L22 46 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M44 40 L54 40 L48 44 L44 44 Z" fill="url(#h-steel)" ${f(2.6)}/>
    <path d="M22 41 L34 41" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`,reserve:`
    <path d="M18 14 L30 6 L36 12 L46 8 L50 20 L42 26 L22 26 Z" fill="url(#h-cry)" ${f()}/>
    <path d="M29 8 L31 22 L26 22 Z" fill="#fff" opacity=".7"/>
    <path d="M6 22 L32 12 L58 22 L58 46 L32 58 L6 46 Z" fill="url(#h-white)" ${f()}/>
    <path d="M6 22 L32 32 L58 22 L32 12 Z" fill="url(#h-cry)" ${f()}/>
    <path d="M14 22 L32 16 L44 20" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M32 32 L32 58" stroke="${k}" stroke-width="3.2"/>
    <path d="M6 34 L32 44 L58 34" stroke="#a89f8c" stroke-width="2.2" fill="none"/>
    <path d="M6 22 L6 46 M32 32 L32 58 M58 22 L58 46" stroke="${k}" stroke-width="8"/>
    <path d="M6 23 L6 45 M32 33 L32 57 M58 23 L58 45" stroke="#5a5560" stroke-width="4"/>`,sanctuaire:`
    <ellipse cx="32" cy="50" rx="28" ry="10" fill="url(#h-white)" ${f()}/>
    <circle cx="32" cy="34" r="22" fill="url(#h-cry-glow)"/>
    <path d="M17 42 L18 22 L23 19 L27 23 L26 42 Z" fill="url(#h-steel)" ${f(2.8)}/>
    <path d="M37 42 L37 23 L41 19 L46 22 L47 42 Z" fill="url(#h-steel)" ${f(2.8)}/>
    <path d="M24 49 L25 16 L32 6 L39 16 L40 49 Z" fill="url(#h-cry)" ${f()}/>
    <path d="M32 18 L32 40 M27 24 L32 29 L37 24 M28 36 L32 40 L36 36" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
    <path d="M4 52 L6 30 L12 27 L16 31 L15 54 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M48 54 L48 31 L53 27 L58 30 L60 52 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M8 33 L11 30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`,"rune-soldat":`${ee}<g transform="translate(32 33) scale(.42) rotate(38) translate(-32 -32)">${me}</g>`,"rune-archere":`${ee}
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="${k}" stroke-width="6" stroke-linecap="round"/>
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="url(#h-wood-x)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M22 16 L22 50" stroke="${k}" stroke-width="1.6"/>
    <path d="M18 33 L44 33" stroke="${k}" stroke-width="3.2" stroke-linecap="round"/><path d="M44 33 L38 29 M44 33 L38 37" stroke="${k}" stroke-width="3" stroke-linecap="round"/>`,"rune-veteran":`${ee}
    <path d="M28 26 L40 48" stroke="${k}" stroke-width="8" stroke-linecap="round"/><path d="M28 26 L40 48" stroke="url(#h-wood-x)" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M17 24 L27 14 L37 22 L27 32 Z" fill="url(#h-steel)" ${f(2.6)}/>`,"rune-pillard":`${ee}
    <path d="M24 48 L38 20" stroke="${k}" stroke-width="7" stroke-linecap="round"/><path d="M24 48 L38 20" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <path d="M33 18 C38 12 46 14 48 20 C44 22 41 26 40 30 Z" fill="url(#h-steel)" ${f(2.6)}/>`,"rune-tour":`${ee}
    <path d="M25 30 L39 30 L41 48 L23 48 Z" fill="url(#h-white)" ${f(2.6)}/>
    <path d="M21 22 L43 22 L43 30 L21 30 Z" fill="url(#h-wood)" ${f(2.6)}/>
    <path d="M18 23 L32 12 L46 23 Z" fill="url(#h-roof)" ${f(2.6)}/>`,"rune-mortier":`${ee}
    <ellipse cx="32" cy="42" rx="14" ry="6" fill="url(#h-white)" ${f(2.6)}/>
    <path d="M24 40 C23 31 27 24 34 20 L41 30 C37 33 34 37 31 42 Z" fill="#4a4f5e" ${f(2.6)}/>
    <circle cx="44" cy="17" r="4" fill="#2b2f3a" ${f(2.2)}/>`,swords:`<g transform="rotate(-42 32 32)">${me}</g><g transform="rotate(42 32 32)">${me}</g>`,shovel:`
    <g transform="rotate(-32 32 32)">
      <path d="M22 4 L42 4" stroke="${k}" stroke-width="11" stroke-linecap="round"/>
      <path d="M22 4 L42 4" stroke="url(#h-wood-x)" stroke-width="5" stroke-linecap="round"/>
      <rect x="28.5" y="4" width="7" height="32" rx="2" fill="url(#h-wood-x)" ${f()}/>
      <path d="M18 36 L46 36 L46 48 C46 56 40 63 32 63 C24 63 18 56 18 48 Z" fill="url(#h-steel)" ${f()}/>
      <path d="M23 41 L28 41 L28 52 C25 51 23 48 23 45 Z" fill="#fff" opacity=".75"/>
      <rect x="27" y="31" width="10" height="8" rx="2" fill="#8f97ab" ${f(3)}/>
    </g>`,house:`
    <path d="M14 30 L50 30 L50 57 L14 57 Z" fill="url(#h-cream)" ${f()}/>
    <path d="M14 46 L50 46 L50 57 L14 57 Z" fill="#cfc6b6" ${f(3)}/>
    <path d="M27 57 L27 45 C27 41 37 41 37 45 L37 57 Z" fill="url(#h-wood)" ${f(3)}/>
    <path d="M32 33 L35.5 37 L32 41 L28.5 37 Z" fill="url(#h-cry)" ${f(2.4)}/>
    <path d="M5 34 L32 8 L59 34 L52 37 L32 18 L12 37 Z" fill="url(#h-roof)" ${f()}/>
    <path d="M14 30 L32 13 L36 16 L17 33 Z" fill="#fff" opacity=".45"/>`,map:`
    <path d="M6 14 L23 8 L41 14 L58 8 L58 50 L41 56 L23 50 L6 56 Z" fill="url(#h-parch)" ${f()}/>
    <path d="M23 8 L23 50 L41 56 L41 14 Z" fill="#d9b779" opacity=".55"/>
    <path d="M23 8 L23 50 M41 14 L41 56" stroke="${k}" stroke-width="2.4"/>
    <path d="M10 22 C13 18 18 19 18 24 C18 28 12 29 10 26 Z" fill="#6fae3e" ${f(2.2)}/>
    <path d="M13 46 C20 40 24 36 31 36 C38 36 40 30 46 24" fill="none" stroke="#c22a20" stroke-width="3.2" stroke-dasharray="4 4.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="${k}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="#ff5a47" stroke-width="3.5" stroke-linecap="round"/>`,village:`
    <path d="M2 56 C10 40 54 40 62 56 L62 60 L2 60 Z" fill="url(#h-green)" ${f()}/>
    <path d="M44 44 L44 34" stroke="${k}" stroke-width="7" stroke-linecap="round"/>
    <path d="M44 44 L44 34" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="44" cy="25" r="11" fill="url(#h-green)" ${f()}/>
    <path d="M38 22 C39 18 42 16 45 16" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M10 26 L32 26 L32 46 L10 46 Z" fill="url(#h-cream)" ${f()}/>
    <path d="M18 46 L18 37 C18 34 24 34 24 37 L24 46 Z" fill="url(#h-wood)" ${f(2.6)}/>
    <path d="M4 30 L21 12 L38 30 L33 32 L21 20 L9 32 Z" fill="url(#h-roof)" ${f()}/>`,book:`
    <path d="M16 10 L54 10 L54 58 L16 58 Z" fill="url(#h-cream)" ${f()}/>
    <path d="M50 14 L50 54" stroke="#cbbb98" stroke-width="2"/><path d="M46 14 L46 54" stroke="#cbbb98" stroke-width="2"/>
    <path d="M10 6 L44 6 C46 6 47 7 47 9 L47 56 C47 58 46 59 44 59 L10 59 Z" fill="url(#h-leather)" ${f()}/>
    <path d="M10 6 L18 6 L18 59 L10 59 Z" fill="#5a2610" ${f(3)}/>
    <path d="M32 20 L39 31 L32 42 L25 31 Z" fill="url(#h-cry)" ${f(2.8)}/>
    <path d="M30 24 L32 21 L32 30 L28 30 Z" fill="#fff" opacity=".7"/>
    <path d="M22 10 L42 10" stroke="#f5b97c" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`,hourglass:`
    <path d="M18 11 L46 11 C46 23 36 28 34 32 C36 36 46 41 46 53 L18 53 C18 41 28 36 30 32 C28 28 18 23 18 11 Z" fill="url(#h-glass)" ${f()}/>
    <path d="M22 15 L42 15 C40 22 34 25 32 29 C30 25 24 22 22 15 Z" fill="url(#h-sand)"/>
    <path d="M21 50 C24 43 40 43 43 50 Z" fill="url(#h-sand)"/>
    <path d="M32 30 L32 46" stroke="#e7ae45" stroke-width="2"/>
    <path d="M24 14 C24 20 28 24 30 26" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>
    <rect x="10" y="4" width="44" height="8" rx="3" fill="url(#h-wood)" ${f()}/>
    <rect x="10" y="52" width="44" height="8" rx="3" fill="url(#h-wood)" ${f()}/>`,fast:`
    <path d="M6 14 L30 32 L6 50 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M30 14 L54 32 L30 50 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M10 21 L20 28 L10 31 Z" fill="#fff" opacity=".7"/><path d="M34 21 L44 28 L34 31 Z" fill="#fff" opacity=".7"/>
    <path d="M58 14 L58 50" stroke="${k}" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 14 L58 50" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>`,clock:`
    <circle cx="32" cy="34" r="24" fill="url(#h-white)" ${f()}/>
    <path d="M32 20 L32 34 L42 40" fill="none" ${f()}/>
    <rect x="26" y="4" width="12" height="7" rx="3" fill="url(#h-gold)" ${f(2.5)}/>`,helmet:`
    <path d="M10 40 C10 22 20 12 32 12 C44 12 54 22 54 40 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M32 6 L32 13" stroke="${k}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 6 L32 13" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="6" y="38" width="52" height="9" rx="4.5" fill="url(#h-gold)" ${f()}/>
    <rect x="28.5" y="45" width="7" height="14" rx="2.5" fill="url(#h-steel)" ${f(3)}/>
    <path d="M18 34 C18 26 23 20 30 18" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".85"/>`,tent:`
    <path d="M6 56 L32 8 L58 56 Z" fill="url(#h-cream)" ${f()}/>
    <path d="M32 8 L58 56 L40 56 Z" fill="#d8c7a2" opacity=".8"/>
    <path d="M24 56 L32 34 L40 56 Z" fill="#5a3418" ${f(3)}/>
    <path d="M32 8 L32 2" stroke="${k}" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 2 L44 5 L32 9 Z" fill="url(#h-red)" ${f(2.4)}/>`,flag:`
    <path d="M16 6 L16 60" stroke="${k}" stroke-width="9" stroke-linecap="round"/>
    <path d="M16 6 L16 60" stroke="url(#h-wood-x)" stroke-width="4" stroke-linecap="round"/>
    <path d="M18 10 C30 4 38 16 54 10 L54 36 C38 42 30 30 18 36 Z" fill="url(#h-white)" ${f()}/>
    <path d="M22 14 C28 11 32 13 36 15" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,mushroom:`
    <path d="M24 34 C24 44 22 52 20 58 L44 58 C42 52 40 44 40 34 Z" fill="url(#h-cream)" ${f()}/>
    <path d="M26 40 C27 47 26 52 25 56" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M4 34 C4 16 18 6 32 6 C46 6 60 16 60 34 C60 38 56 40 52 40 L12 40 C8 40 4 38 4 34 Z" fill="url(#h-roof)" ${f()}/>
    <circle cx="20" cy="22" r="5" fill="#fff4dc" ${f(2.4)}/><circle cx="38" cy="15" r="4" fill="#fff4dc" ${f(2.4)}/><circle cx="46" cy="29" r="4.5" fill="#fff4dc" ${f(2.4)}/><circle cx="29" cy="32" r="3" fill="#fff4dc" ${f(2.2)}/>
    <path d="M12 26 C14 18 20 13 27 11" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>`,rune:`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".55"/>
    <path d="M20 22 L32 16 L44 22 M32 16 L32 48 M22 44 L32 48 L42 44" fill="none" stroke="#6b7186" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 26 L38 33 L32 40 L26 33 Z" fill="url(#h-cry)" ${f(2.6)}/>`,hammer:`
    <path d="M26 30 L46 58" stroke="${k}" stroke-width="13" stroke-linecap="round"/>
    <path d="M26 30 L46 58" stroke="url(#h-wood-x)" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M8 26 L22 8 L32 14 L40 10 L50 18 L42 26 L34 24 L20 40 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M14 24 L23 13 L30 17 L22 22 Z" fill="#fff" opacity=".85"/>`,shield:`
    <path d="M32 5 L54 13 L54 30 C54 45 44 55 32 59 C20 55 10 45 10 30 L10 13 Z" fill="url(#h-steel)" ${f()}/>
    <path d="M32 12 L47 17.5 L47 30 C47 40 41 47 32 51 Z" fill="#9aa2b8" opacity=".55"/>
    <path d="M17 18 L29 13.5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>`,lock:`
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="${k}" stroke-width="11"/>
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="url(#h-steel)" stroke-width="5"/>
    <rect x="12" y="26" width="40" height="32" rx="7" fill="url(#h-gold)" ${f()}/>
    <circle cx="32" cy="40" r="4.5" fill="${k}"/><rect x="30" y="41" width="4" height="9" rx="2" fill="${k}"/>`,heart:`
    <path d="M32 56 C18 46 6 36 6 22 C6 13 13 7 21 7 C26 7 30 10 32 14 C34 10 38 7 43 7 C51 7 58 13 58 22 C58 36 46 46 32 56 Z" fill="url(#h-red)" ${f()}/>
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${me}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${f()}/>
    <path d="M10 50 L56 50" stroke="${k}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${f(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${f()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${f(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${f(2.4)}/>
    <path d="M32 32 L58 6" stroke="${k}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${k}" stroke-width="3" stroke-linejoin="round"/>`,eye:`
    <path d="M3 33 C13 15 51 15 61 33 C51 51 13 51 3 33 Z" fill="url(#h-white)" ${f()}/>
    <circle cx="32" cy="33" r="13" fill="url(#h-cry)" ${f(3)}/>
    <circle cx="32" cy="33" r="5.5" fill="${k}"/>
    <circle cx="27.5" cy="28.5" r="3" fill="#fff"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${f()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${f()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${f()}/>
    <circle cx="32" cy="18" r="4.5" fill="${k}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${k}"/>`,minus:`<path d="M16 32 L48 32" stroke="${k}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,plus:`<path d="M16 32 L48 32 M32 16 L32 48" stroke="${k}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32 M32 16 L32 48" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${f()}/>`,share:`<path d="M32 10 L32 38 M20 22 L32 10 L44 22 M14 32 L14 54 L50 54 L50 32" fill="none" stroke="${k}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 10 L32 38 M20 22 L32 10 L44 22 M14 32 L14 54 L50 54 L50 32" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,copy:`<path d="M24 22 L52 22 L52 54 L24 54 Z M12 42 L12 10 L40 10" fill="none" stroke="${k}" stroke-width="13" stroke-linejoin="round"/><path d="M24 22 L52 22 L52 54 L24 54 Z M12 42 L12 10 L40 10" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${f(3)}/>
    <path d="M32 7 C20 7 15 17 15 28 L15 37 L8 46 L56 46 L49 37 L49 28 C49 17 44 7 32 7 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M22 26 C22 19 26 14 31 13" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`,sound:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M42 22 C47 27 47 37 42 42" fill="none" stroke="${k}" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 15 C57 24 57 40 48 49" fill="none" stroke="${k}" stroke-width="5" stroke-linecap="round"/>`,mute:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M42 24 L56 40 M56 24 L42 40" fill="none" stroke="${k}" stroke-width="5.5" stroke-linecap="round"/>`,check:`<path d="M12 34 L26 48 L52 18" fill="none" stroke="${k}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 34 L26 48 L52 18" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>`,move:`
    <path d="M32 4 L42 16 L35 16 L35 29 L48 29 L48 22 L60 32 L48 42 L48 35 L35 35 L35 48 L42 48 L32 60 L22 48 L29 48 L29 35 L16 35 L16 42 L4 32 L16 22 L16 29 L29 29 L29 16 L22 16 Z" fill="url(#h-white)" ${f()}/>`,barracks:`
    <path d="M10 30 L54 30 L54 58 L10 58 Z" fill="url(#h-cream)" ${f()}/>
    <path d="M10 46 L54 46 L54 58 L10 58 Z" fill="#cfc6b6" ${f(3)}/>
    <path d="M4 33 L32 8 L60 33 L53 36 L32 17 L11 36 Z" fill="url(#h-roof)" ${f()}/>
    <path d="M24 58 L24 46 C24 40 40 40 40 46 L40 58 Z" fill="url(#h-wood)" ${f(3)}/>
    <path d="M24 26 L40 26 L40 34 C40 39 36 42 32 43 C28 42 24 39 24 34 Z" fill="url(#h-red)" ${f(2.6)}/>
    <path d="M27 28 L37 39 M37 28 L27 39" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,tower:`
    <path d="M20 34 L44 34 L47 61 L17 61 Z" fill="url(#h-white)" ${f()}/>
    <path d="M19 44 L45 44 M18 53 L46 53 M28 34 L28 44 M38 44 L38 53 M27 53 L27 61" stroke="#a89f8c" stroke-width="2.2"/>
    <path d="M14 22 L50 22 L50 34 L14 34 Z" fill="url(#h-wood)" ${f()}/>
    <path d="M20 22 L20 34 M27 22 L27 34 M37 22 L37 34 M44 22 L44 34" stroke="#7c4420" stroke-width="2.2"/>
    <path d="M30 44 L34 44 L34 52 L30 52 Z" fill="${k}"/>
    <path d="M9 24 L32 2 L55 24 Z" fill="url(#h-roof)" ${f()}/>
    <path d="M17 21 L32 7 L29 21 Z" fill="#fff" opacity=".4"/>`,mortar:`
    <ellipse cx="32" cy="48" rx="26" ry="11" fill="url(#h-white)" ${f()}/>
    <path d="M6 48 L6 53 C6 59 58 59 58 53 L58 48" fill="#b8ae99" ${f()}/>
    <path d="M18 44 C16 30 22 18 34 12 L46 30 C40 36 34 42 30 48 Z" fill="#4a4f5e" ${f()}/>
    <ellipse cx="40" cy="21" rx="8" ry="11" transform="rotate(-56 40 21)" fill="#2b2f3a" ${f()}/>
    <path d="M22 40 C21 31 25 23 32 18" stroke="#9aa1b5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="40" r="5" fill="#3a3f4c" ${f(2.4)}/>`,wall:`
    <path d="M4 30 C4 24 12 22 16 26 C20 21 28 21 32 26 C36 21 44 21 48 26 C52 22 60 24 60 30 L60 56 L4 56 Z" fill="url(#h-white)" ${f()}/>
    <path d="M4 42 L60 42 M18 30 L18 42 M32 30 L32 42 M46 30 L46 42 M11 42 L11 56 M25 42 L25 56 M39 42 L39 56 M53 42 L53 56" stroke="#9b917c" stroke-width="2.4"/>
    <path d="M8 31 C10 27 14 27 15 29" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,chest:`
    <path d="M8 30 L56 30 L56 56 L8 56 Z" fill="url(#h-wood)" ${f()}/>
    <path d="M8 30 C8 16 56 16 56 30 Z" fill="url(#h-wood)" ${f()}/>
    <path d="M8 36 L56 36" stroke="${k}" stroke-width="3"/>
    <path d="M18 18 L18 56 M46 18 L46 56" stroke="${k}" stroke-width="7"/><path d="M18 19 L18 55 M46 19 L46 55" stroke="url(#h-gold)" stroke-width="3.6"/>
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${f(2.4)}/>`,rotate:`
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="${k}" stroke-width="11" stroke-linecap="round"/>
    <path d="M50 22 A22 22 0 1 0 54 38" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 6 L60 10 L54 30 Z" fill="url(#h-gold)" ${f(2.6)}/>`,replay:`
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="${k}" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 10 L16 30 L22 12 Z" fill="url(#h-white)" ${f(2.6)}/>
    <path d="M26 22 L44 32 L26 42 Z" fill="url(#h-gold)" ${f(2.6)}/>`,alert:`
    <path d="M32 5 L60 54 C61 57 59 59 56 59 L8 59 C5 59 3 57 4 54 Z" fill="url(#h-red)" ${f()}/>
    <rect x="28.5" y="20" width="7" height="22" rx="3" fill="#fff" ${f(2)}/>
    <circle cx="32" cy="50" r="4" fill="#fff" ${f(2)}/>`,star:`<path d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z" fill="url(#h-gold)" ${f()}/>
    <path d="M32 13 L37 25 L28 26 Z" fill="#fff" opacity=".7"/>`,gate:`
    <rect x="4" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${f()}/><rect x="46" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${f()}/>
    <path d="M18 58 L18 34 C18 22 46 22 46 34 L46 58 Z" fill="url(#h-wood)" ${f()}/>
    <path d="M32 26 L32 58" stroke="${k}" stroke-width="3"/>
    <path d="M18 40 L46 40" stroke="url(#h-gold)" stroke-width="3.5"/>`,close:`<path d="M18 18 L46 46 M46 18 L18 46" stroke="${k}" stroke-width="13" stroke-linecap="round"/>
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},K=(i,e="ic")=>`<svg class="${e}" aria-hidden="true"><use href="#i-${i}"/></svg>`,ct=!1;function Ie(){if(ct){document.querySelectorAll("img[data-art]").forEach(t=>{t.src=be[t.dataset.art],t.alt="",t.draggable=!1});return}ct=!0;let i=document.createElement("style");i.textContent=`@font-face{font-family:"Lilita";src:url(${rt}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${nt}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(i);let e=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${Ur}</defs>`;for(let[t,r]of Object.entries(Dr))e+=`<symbol id="i-${t}" viewBox="0 0 64 64" overflow="visible">${r}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${e}</svg>`),document.querySelectorAll("img[data-art]").forEach(t=>{t.src=be[t.dataset.art],t.alt="",t.draggable=!1})}var Nr=i=>`<span class="lvl"><svg viewBox="0 0 48 52"><defs><linearGradient id="lv${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e7b8"/><stop offset=".5" stop-color="#d9b25a"/><stop offset="1" stop-color="#a87a26"/></linearGradient></defs>
  <path d="M24 2 L45 14 L45 38 L24 50 L3 38 L3 14 Z" fill="url(#lv${i})" stroke="#26211b" stroke-width="3" stroke-linejoin="round"/><path d="M24 8 L39 17 L24 20 L9 17 Z" fill="#fff" opacity=".45"/></svg><span class="n">${i}</span></span>`,xe=(i,e,t,r,n="")=>`<div class="ctr ${i}">${n?`<span class="max n">${n}</span>`:""}<span class="track"><i style="width:${r}%"></i></span><span class="v n">${t}</span>${K(e)}</div>`,Ri=`<button class="x"><span class="face">${K("close")}</span></button>`,Ai=`<div class="hud">
  <div class="tl">${xe("cry","crystal","1 240",83,"Max 1 500")}${xe("mush","mushroom","860",57,"Max 1 500")}${xe("rune","rune","3",0)}</div>
  <div class="tc">${xe("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${K("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${K("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${K("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${K("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${K("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${K("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${K("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;var ht=`/* The interface of the fantasy village, direction A \xAB Pierre et or \xBB (validated 04/11), as a theme: every colour and
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
`;var ft=`/* A game page in the validated interface (direction A, GDD 04/11): what every page needs around the theme's
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
`;var mt="./assets/thumb-caserne-QZA7KSDD.webp";var bt="./assets/thumb-champi-VFSAERTF.webp";var xt="./assets/thumb-cristal-DYDVW2XR.webp";var gt="./assets/thumb-forge-CUZH2DZR.webp";var wt="./assets/thumb-maison-QP5FQHND.webp";var kt="./assets/thumb-mortier-5N3HR2GR.webp";var yt="./assets/thumb-reserve-XWPQUOHM.webp";var vt="./assets/thumb-grenier-OBZFKGDD.webp";var zt="./assets/thumb-muraille-UVYJVIR2.webp";var Lt="./assets/thumb-tour-PLF3FIO2.webp";var ro={caserne:mt,champi:bt,cristal:xt,forge:gt,grenier:vt,maison:wt,mortier:kt,muraille:zt,reserve:yt,tour:Lt},Mt=!1;function no(){if(Mt){Ie();return}Mt=!0;let i=document.createElement("style");i.textContent=`${ht}
${ft}`,document.head.prepend(i),document.body.dataset.theme="pierre",Ie()}function io(i){i.querySelectorAll("img[data-art]").forEach(e=>{let t=be[e.dataset.art];t&&e.src!==t&&(e.src=t,e.alt="",e.draggable=!1)})}var oo=i=>i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),so=i=>String(Math.floor(i)).replace(/\B(?=(\d{3})+(?!\d))/g,"\u202F"),nn=i=>{if(i=Math.max(0,i),i<60)return`${Math.ceil(i)} s`;let e=Math.round(i/60);return e<60?`${e} min`:`${Math.floor(e/60)} h ${String(e%60).padStart(2,"0")}`},ao=i=>(i=Math.max(0,Math.floor(i)),i<1e3?String(i):i<1e4?`${String(Math.floor(i/100)/10).replace(".",",")} k`:`${Math.floor(i/1e3)} k`),lo=i=>{if(i=Math.max(0,i),i<24*3600)return nn(i);let e=Math.floor(i/3600);return`${Math.floor(e/24)} j ${e%24} h`},po=i=>(i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`);function co(i,e,t){let r=i.querySelector(".v");r.textContent!==e&&(r.textContent=e);let n=i.querySelector(".track i");n&&t!==void 0&&(n.style.width=`${Math.max(0,Math.min(100,t))}%`)}var uo=(i,e,t,r,n="")=>`<div class="ctr ${i}">${n?`<span class="max n">${n}</span>`:""}<span class="track">${r===void 0?"":`<i style="width:${r}%"></i>`}</span><span class="v n">${t}</span>${K(e)}</div>`;var mo="./assets/icone-TVGJ5P4R.webp";var S={UNIT:1.25,THICK:.8,GATE:2.5,POST:1,HP:[0,300,500],GATE_HP:600,COST:20,UP:20},ge=.9,$t=.05,_e=()=>({pieces:[],next:1}),T=(i,e,t,r)=>Math.sqrt((t-i)*(t-i)+(r-e)*(r-e)),pe=i=>T(i.x0,i.z0,i.x1,i.z1),te=(i,e,t,r)=>Math.abs(i-t)<$t&&Math.abs(e-r)<$t,Z=(i,e)=>e?[i.x1,i.z1]:[i.x0,i.z0],We=(i,e)=>{let t=i.x1-i.x0,r=i.z1-i.z0,n=e.x1-e.x0,o=e.z1-e.z0,s=Math.sqrt((t*t+r*r)*(n*n+o*o))||1;return Math.abs(t*o-r*n)/s<.05};function Oe(i){let e=i;if(e&&Array.isArray(e.pieces))return e;let t=_e();if(!e||!Array.isArray(e.runs)||!Array.isArray(e.posts))return t;for(let r of e.runs){let n=e.posts.find(a=>a.id===r.a),o=e.posts.find(a=>a.id===r.b);if(!n||!o)continue;let s=r.gate?1:Math.max(1,Math.round(T(n.x,n.z,o.x,o.z)/S.UNIT));for(let a=0;a<s;a++)t.pieces.push({id:t.next++,x0:n.x+(o.x-n.x)*a/s,z0:n.z+(o.z-n.z)*a/s,x1:n.x+(o.x-n.x)*(a+1)/s,z1:n.z+(o.z-n.z)*(a+1)/s,level:r.gate?1:r.level??1,gate:!!r.gate})}return t}function Ee(i,e){let t=e?i.pieces.filter(s=>!e.has(s.id)):i.pieces,r=(s,a)=>{let l=t[s],[d,p]=Z(l,a),c=null,h=0;for(let u=0;u<t.length;u++)if(u!==s)for(let b=0;b<2;b++){let[m,g]=Z(t[u],b);te(d,p,m,g)&&(h++,c=[u,b])}return h!==1||!c||l.gate||t[c[0]].gate||!We(l,t[c[0]])?null:c},n=[],o=new Set;for(let s=0;s<t.length;s++){if(o.has(s))continue;let a=s,l=0;for(let p=0;p<t.length;p++){let c=r(a,l);if(!c||c[0]===s)break;a=c[0],l=1-c[1]}let d={id:n.length+1,pieces:[]};for(let p=0;p<=t.length&&!o.has(a);p++){o.add(a);let c=t[a],[h,u]=Z(c,l),[b,m]=Z(c,1-l);d.pieces.push({id:c.id,x0:h,z0:u,x1:b,z1:m,gate:c.gate,level:c.level});let g=r(a,1-l);if(!g)break;a=g[0],l=g[1]}n.push(d)}return n}function Rt(i){let e=[];for(let t of i){let r=t.pieces[0],n=t.pieces[t.pieces.length-1];for(let[o,s]of[[r.x0,r.z0],[n.x1,n.z1]])e.some(a=>te(a.x,a.z,o,s))||e.push({x:o,z:s})}return e}function bo(i,e){let t=Ee(i,e),r=Rt(t).map((a,l)=>({id:l+1,x:a.x,z:a.z})),n=new Map,o=(a,l)=>r.find(d=>te(d.x,d.z,a,l)).id,s=t.map(a=>{a.pieces.forEach((p,c)=>n.set(p.id,{run:a.id,piece:c}));let l=a.pieces[0],d=a.pieces[a.pieces.length-1];return{id:a.id,a:o(l.x0,l.z0),b:o(d.x1,d.z1),gate:l.gate}});return{posts:r,runs:s,at:n}}function At(i){let e=[];for(let t of Ee(i))t.pieces.forEach((r,n)=>e.push({run:t.id,piece:n,x0:r.x0,z0:r.z0,x1:r.x1,z1:r.z1,gate:r.gate,hp:r.gate?S.GATE_HP:S.HP[r.level]??S.HP[1]}));return e}var Pt=i=>Rt(Ee(i));function Se(i,e,t){let r=t.x1-t.x0,n=t.z1-t.z0,o=r*r+n*n,s=o>0?Math.max(0,Math.min(1,((i-t.x0)*r+(e-t.z0)*n)/o)):0;return T(i,e,t.x0+r*s,t.z0+n*s)}function xo(i,e,t,r=.9){let n=null,o=r;for(let s of i.pieces){let a=Se(e,t,s);a<o&&(o=a,n=s)}return n}function Ct(i,e){return i.pieces.some(t=>It(t,[e]))}function It(i,e){let t=S.THICK/2+.15;for(let r=0;r<=8;r++){let n=i.x0+(i.x1-i.x0)*r/8,o=i.z0+(i.z1-i.z0)*r/8;for(let s of e)if(Math.abs(n-s.x)<s.size+t&&Math.abs(o-s.z)<s.size+t)return!0}return!1}function go(i,e){let t=i.pieces.find(n=>n.id===e);if(!t)return[];let r=new Set([t]);for(let n=!0;n;){n=!1;for(let o of i.pieces){if(r.has(o)||!We(t,o))continue;[...r].some(a=>[0,1].some(l=>[0,1].some(d=>{let[p,c]=Z(o,l),[h,u]=Z(a,d);return te(p,c,h,u)})))&&(r.add(o),n=!0)}}return i.pieces.filter(n=>r.has(n)).map(n=>n.id)}var St=i=>i.pieces.reduce((e,t)=>e+(t.gate?0:1),0);function sn(i,e){let t=(a,l,d,p,c,h)=>(d-a)*(h-l)-(p-l)*(c-a),r=t(i.x0,i.z0,i.x1,i.z1,e.x0,e.z0),n=t(i.x0,i.z0,i.x1,i.z1,e.x1,e.z1),o=t(e.x0,e.z0,e.x1,e.z1,i.x0,i.z0),s=t(e.x0,e.z0,e.x1,e.z1,i.x1,i.z1);return r*n<-1e-6&&o*s<-1e-6}function _t(i,e,t=!1){let r=T(i.x,i.z,e.x,e.z),n=t?1:Math.max(1,Math.round(r/S.UNIT));return Array.from({length:n},(o,s)=>({x0:i.x+(e.x-i.x)*s/n,z0:i.z+(e.z-i.z)*s/n,x1:i.x+(e.x-i.x)*(s+1)/n,z1:i.z+(e.z-i.z)*(s+1)/n}))}function Wt(i,e,t,r,n){for(let l of e){let d=pe(l);if(l.gate?d<S.GATE*.8||d>3:d<S.UNIT*.8||d>S.UNIT*1.25)return"short"}let o=n?i.pieces.filter(l=>!n.has(l.id)):i.pieces,s=an;for(let l of e)for(let d of o)if(sn(l,d))return"cross";for(let l of e){let d=(l.x0+l.x1)/2,p=(l.z0+l.z1)/2;for(let c of o)if(Se(d,p,c)<s||Se((c.x0+c.x1)/2,(c.z0+c.z1)/2,l)<s)return"there"}for(let l of e)if(It(l,t))return"building";let a=(l,d)=>t.some(p=>{let c=Math.max(0,Math.abs(l-p.x)-p.size),h=Math.max(0,Math.abs(d-p.z)-p.size);return c*c+h*h<=r*r});for(let l of e)if(!a((l.x0+l.x1)/2,(l.z0+l.z1)/2))return"far";return null}var an=S.THICK*.6;function Ze(i,e,t=!1){return e.map(r=>{let n=i.next++;return i.pieces.push({id:n,x0:r.x0,z0:r.z0,x1:r.x1,z1:r.z1,level:1,gate:t}),n})}function Ot(i,e){for(let t of e){let r=i.pieces.find(n=>n.id===t.id);r&&Object.assign(r,{x0:t.x0,z0:t.z0,x1:t.x1,z1:t.z1})}}function Et(i,e){return!Array.isArray(e)||!e.length||new Set(e.map(t=>t.id)).size!==e.length?!1:e.every(t=>{let r=i.pieces.find(n=>n.id===t.id);return!!r&&[t.x0,t.z0,t.x1,t.z1].every(Number.isFinite)&&Math.abs(pe(t)-pe(r))<.02})}function Zt(i,e){let t=i.pieces.find(r=>r.id===e);if(!t||t.gate)return null;for(let r of[1,0]){let[n,o]=Z(t,r),s=i.pieces.find(h=>h!==t&&!h.gate&&We(t,h)&&[0,1].some(u=>{let[b,m]=Z(h,u);return te(n,o,b,m)}));if(!s)continue;let[a,l]=Z(t,1-r),d=te(n,o,s.x0,s.z0)?1:0,[p,c]=Z(s,d);return{ids:[t.id,s.id],seg:{x0:a,z0:l,x1:p,z1:c}}}return null}function Ke(i,e){let t=i.pieces.length;return i.pieces=i.pieces.filter(r=>!e.includes(r.id)),t-i.pieces.length}function wo(i,e,t,r,n){let o=e.map(p=>({x0:p.x0+t,z0:p.z0+r,x1:p.x1+t,z1:p.z1+r})),s=i.pieces.filter(p=>!n.has(p.id));if(!s.length)return o;if(o.length===1){let p=o[0],c=pe(p),h=(p.x0+p.x1)/2,u=(p.z0+p.z1)/2,b=(p.x1-p.x0)/(c||1),m=(p.z1-p.z0)/(c||1),g=null,v=ge;for(let w of s){let x=pe(w)||1,L=(w.x1-w.x0)/x,$=(w.z1-w.z0)/x;for(let M=0;M<2;M++){let[W,P]=Z(w,M);if(!(T(W,P,h,u)>c/2+ge))for(let[O,E]of[[b,m],[L,$],[-$,L]])for(let D of[1,-1]){let ae=W+D*O*c/2,le=P+D*E*c/2,N=T(ae,le,h,u);N<v&&(v=N,g={x0:ae-O*c/2,z0:le-E*c/2,x1:ae+O*c/2,z1:le+E*c/2})}}}return g?[g]:o}let a=0,l=0,d=ge;for(let p of o)for(let c=0;c<2;c++){let[h,u]=Z(p,c);for(let b of s)for(let m=0;m<2;m++){let[g,v]=Z(b,m),w=T(h,u,g,v);w<d&&(d=w,a=g-h,l=v-u)}}return o.map(p=>({x0:p.x0+a,z0:p.z0+l,x1:p.x1+a,z1:p.z1+l}))}function ko(i,e,t){let r={x:e,z:t},n=ge;for(let o of i.pieces)for(let s=0;s<2;s++){let[a,l]=Z(o,s),d=T(e,t,a,l);d<n&&(n=d,r={x:a,z:l})}return r}function yo(i,e,t){let r=(n,o)=>[e-(o-t),t+(n-e)];return i.map(n=>{let[o,s]=r(n.x0,n.z0),[a,l]=r(n.x1,n.z1);return{...n,x0:o,z0:s,x1:a,z1:l}})}function re(i,e,t,r=0){let n=i.h-r;return n>0&&Math.abs(e-i.x)<=n&&Math.abs(t-i.z)<=n}function Kt(i,e,t,r,n=0){return re(i,e,t,n+r)}var ln=3600,A=60,Bt=[0,800,1200,1800,2700],Ht=[0,800,1200,1800,2700],Ft=i=>i.map(e=>e/4),R={maison:{size:2.8,hp:900,up:{1:{cost:{crystal:5e3},time:1*ln}}},caserne:{size:3.2,hp:900,shop:{cost:{crystal:400},time:30,max:[0,1,1]},up:{1:{cost:{crystal:600},time:5*A},2:{cost:{crystal:1200},time:30*A}}},tour:{size:2,hp:600,shop:{cost:{crystal:350},time:30,max:[0,2,3]},up:{1:{cost:{crystal:350},time:5*A}}},mortier:{size:2.4,hp:800,shop:{cost:{crystal:1500},time:2*A,max:[0,1,1]},up:{1:{cost:{crystal:1500},time:15*A}}},cristal:{size:1.4,hp:300,shop:{cost:{crystal:150},time:10,max:[0,3,5]},up:{1:{cost:{crystal:300},time:2*A},2:{cost:{crystal:700},time:20*A},3:{cost:{crystal:1500},time:90*A}},bed:{res:"crystal",rate:Ft(Bt),cap:Bt}},champignons:{size:2.2,hp:300,shop:{cost:{crystal:200},time:10,max:[0,2,4]},up:{1:{cost:{crystal:350},time:2*A},2:{cost:{crystal:800},time:20*A},3:{cost:{crystal:1700},time:90*A}},bed:{res:"mushroom",rate:Ft(Ht),cap:Ht}},reserve:{size:2,hp:700,shop:{cost:{crystal:300},time:20,max:[0,2,3]},up:{1:{cost:{crystal:500},time:5*A},2:{cost:{crystal:1200},time:45*A}},vault:{res:"crystal",cap:[0,1500,3e3,5e3]}},grenier:{size:2,hp:700,shop:{cost:{crystal:300},time:20,max:[0,1,2]},up:{1:{cost:{crystal:500},time:5*A},2:{cost:{crystal:1200},time:45*A}},vault:{res:"mushroom",cap:[0,1500,3e3,5e3]}},forge:{size:2.4,hp:800,shop:{cost:{crystal:1500},time:5*A,max:[0,0,1]},up:{1:{cost:{crystal:3e3},time:45*A}}},sanctuaire:{size:2.4,hp:800,shop:{cost:{crystal:500},time:30,max:[0,1,1]},up:{1:{cost:{crystal:1500},time:10*A},2:{cost:{crystal:3500},time:45*A,needs:2}}}},Ut=i=>{let e=R[i.kind].bed;if(!e)return null;let t=Math.min(i.level,e.cap.length-1);return{res:e.res,rate:e.rate[t],cap:e.cap[t]}},ke=i=>i>=2?{crystal:1500,mushroom:1500}:{crystal:1e3,mushroom:1e3},Dt=i=>i>=2?{crystal:500,mushroom:500}:{crystal:300,mushroom:300};function Nt(i){let e={...ke(C(i,"maison")||1)};for(let t of i){let r=R[t.kind].vault;r&&t.busy?.what!=="build"&&(e[r.res]+=r.cap[Math.min(t.level,r.cap.length-1)])}return e}var Tt=(()=>{let i=(R.caserne.shop?.max.length??1)-1,e=[0];for(let t=1;t<=i;t++){let r=0,n=0;for(let d of Object.keys(R)){let p=d==="maison"?1:R[d].shop?.max[t]??0,c=2*R[d].size+2;r+=p*c*c,n+=p}let o=Math.sqrt(r),s=Math.ceil(n/3),a=Math.max(1,Math.floor(Math.sqrt(s))),l=Math.ceil(s/a);e.push(Math.round((4+a-1+l-1)*o/S.UNIT))}return e})(),ye=2,ve=6,Gt=.6,dn=80,pn=26,ue=6;function Be(i){return{x:i.x,z:i.z,h:pn}}function we(i,e){let t=Math.max(0,Math.abs(i.x-e.x)-i.size-e.size),r=Math.max(0,Math.abs(i.z-e.z)-i.size-e.size);return Math.sqrt(t*t+r*r)}var ce=i=>({x:i.x,z:i.z,size:R[i.kind].size});function cn(i){let e=i.findIndex(n=>n.kind==="maison");if(e<0)return i.length===0;let t=new Set([e]),r=[e];for(;r.length;){let n=r.pop();for(let o=0;o<i.length;o++)!t.has(o)&&we(ce(i[n]),ce(i[o]))<=ve&&(t.add(o),r.push(o))}return t.size===i.length}function He(i,e,t,r,n,o,s=-1){let a={x:n,z:o,size:R[r].size},l=e[t].buildings.filter(p=>p.id!==s);if(l.length&&!l.some(p=>we(a,ce(p))<=ve))return"zone";if(l.some(p=>we(a,ce(p))<Gt))return"overlap";let d=e[t].walls;if(d&&Ct(d,a))return"wall";if(i.villages[t]&&!Kt(Be(i.villages[t]),n,o,a.size,ue))return"edge";for(let p=0;p<e.length;p++)if(p!==t&&e[p].buildings.some(c=>we(a,ce(c))<dn))return"foe";for(let[p,c]of[[0,0],[-1,-1],[1,-1],[-1,1],[1,1]]){let[h,u]=i.cell(n+p*a.size,o+c*a.size);if(h<0||u<0||h>=i.G||u>=i.G||i.grid[u*i.G+h]!==1)return"ground"}return s>=0&&!cn([...l,{kind:r,x:n,z:o}])?"chain":null}function un(i,e,t,r){let n=R[e].size;return Math.abs(t-i.x)<3+n&&r+n>i.z+R.maison.size&&r-n<i.z+17}var G=Math.SQRT1_2,hn=[[0,1],[G,G],[1,0],[G,-G],[0,-1],[-G,-G],[-1,0],[-G,G]];function qt(i,e,t,r){let n=R[r].size,o=e[t].buildings,s=o.find(a=>a.kind==="maison")??o[0];for(let a of o){let l=R[a.kind].size+n+Gt+1.4;for(let[d,p]of hn){let c={x:Math.round((a.x+d*l)*2)/2,z:Math.round((a.z+p*l)*2)/2};if(!(s&&un(s,r,c.x,c.z))&&!He(i,e,t,r,c.x,c.z))return c}}return null}var C=(i,e)=>i.reduce((t,r)=>r.kind===e&&r.busy?.what!=="build"?Math.max(t,r.level):t,0),ze=(i,e)=>i.filter(t=>t.kind===e).length,Le=i=>i.filter(e=>e.busy).length;var Fe=1/20,fn=180,Yt=5,Qt=22,jt=fn/Fe,Ue={soldat:{hp:100,dmg:16,period:1,range:.9,speed:1.9,hitAt:11/30,ranged:!1},archere:{hp:60,dmg:11,period:1.3,range:5.2,speed:1.9,hitAt:16/30,ranged:!0},veteran:{hp:320,dmg:42,period:1.4,range:1,speed:1.6,hitAt:11/30,ranged:!1},pillard:{hp:55,dmg:10,period:1,range:.9,speed:2.8,hitAt:11/30,ranged:!1},brigand:{hp:80,dmg:13,period:1,range:.9,speed:1.8,hitAt:11/30,ranged:!1}},mn={tour:{min:0,max:13.5,period:1,dmg:20,blast:0,flight:0,arrow:!0},mortier:{min:4,max:14.5,period:4.2,dmg:46,blast:1.8,flight:1.7,arrow:!1}},bn=["reserve","cristal","champignons","tente"],B=(i,e,t)=>{let r=Math.max(0,Math.abs(e-i.x)-i.size),n=Math.max(0,Math.abs(t-i.z)-i.size);return Math.sqrt(r*r+n*n)},F=i=>Math.max(1,Math.round(i/Fe)),Vt=.4,U=.68,Me=.5,_=.5,X=1073741823,xn=400,gn=1.6,Xt=[[1,0,10],[-1,0,10],[0,1,10],[0,-1,10],[1,1,14],[-1,1,14],[1,-1,14],[-1,-1,14]];function he(i,e,t){let r=i.x1-i.x0,n=i.z1-i.z0,o=r*r+n*n,s=o>0?Math.max(0,Math.min(1,((e-i.x0)*r+(t-i.z0)*n)/o)):0,a=e-i.x0-r*s,l=t-i.z0-n*s;return{d:Math.sqrt(a*a+l*l),t:s}}function wn(i,e,t,r,n,o,s,a){let l=t-i,d=r-e,p=s-n,c=a-o,h=l*(o-e)-d*(n-i),u=l*(a-e)-d*(s-i);if(h*u>=0)return!1;let b=p*(e-o)-c*(i-n),m=p*(r-o)-c*(t-n);return b*m<0}function Jt(i,e,t,r,n){if(n&&!re(n,e,t))return!1;let o=1/0;for(let s of i){if(s.dead)continue;let a=B(s,e,t);if(a<Yt)return!1;a<o&&(o=a)}if(r){for(let s of r)if(!s.dead&&he(s,e,t).d<1.2)return!1}return o<=Qt}var q=2,ne=class{constructor(e){y(this,"input",e);y(this,"t",0);y(this,"units",[]);y(this,"blds");y(this,"shots",[]);y(this,"reserve",{soldat:[],archere:[],veteran:[],pillard:[],brigand:[]});y(this,"events",[]);y(this,"record",!1);y(this,"over",null);y(this,"retreatAt",-1);y(this,"ws");y(this,"posts");y(this,"seed");y(this,"nextId",0);y(this,"grid",null);y(this,"fields",new Map);this.seed=e.seed%2147483646+1,this.blds=e.buildings.map(r=>{let n=r.def?mn[r.def]:null,o=Math.round(r.hp*(r.mods?.hp??1));return{id:r.id,kind:r.kind,x:r.x,z:r.z,size:r.size,hp:o,max:o,dead:!1,def:n,defKind:r.def??null,cd:F(.6),dmgK:r.mods?.dmg??1,rangeK:r.mods?.range??1}}),this.ws=(e.walls??[]).map(r=>({...r,max:r.hp,dead:!1})),this.posts=(e.posts??[]).map(r=>({x:r.x,z:r.z})),this.ws.length&&(this.grid=this.makeGrid());for(let r of e.attackers)this.reserve[r.k].push(r.hp);let t=e.defenders.length;e.defenders.forEach((r,n)=>{let o=Math.floor(n/5),s=Math.min(5,t-o*5),a=n%5,l={x:e.rally.x+(a-(s-1)/2)*1.1,z:e.rally.z-o*1.1};this.spawn(1,r.k,r.hp,l.x,l.z,r.tag)})}rnd(){return this.seed=this.seed*16807%2147483647,this.seed/2147483647}emit(e){this.record&&this.events.push(e)}spawn(e,t,r,n,o,s){let a=Ue[t],l=(e?this.input.mods?.def:this.input.mods?.att)?.[t]??{},d=Math.round(a.hp*(l.hp??1)),p={id:this.nextId++,side:e,k:t,tag:s,x:n,z:o,hp:Math.min(d,Math.round(r*(l.hp??1))),max:d,dmg:a.dmg*(l.dmg??1),range:a.range*(l.range??1),speed:a.speed*(l.speed??1),period:a.period,hitAt:a.hitAt,ranged:a.ranged,tu:-1,tb:-1,tw:-1,blk:-1,rx:n,rz:o,rt:-99,cd:0,swing:-1,dealt:!1,dead:!1,deadAt:-1,mx:0,mz:0,home:{x:n,z:o}};return this.units.push(p),p}canDrop(e,t){return Jt(this.blds,e,t,this.ws,this.input.plot)}left(e){return this.reserve[e].length}drop(e,t,r){if(this.over||!this.reserve[e].length||!this.canDrop(t,r))return!1;let n=this.reserve[e].shift(),o=this.spawn(0,e,n,t+(this.rnd()-.5)*.4,r+(this.rnd()-.5)*.4,"raid");return this.emit({e:"drop",u:o.id}),!0}retreat(){this.over||(this.retreatAt=this.t,this.finish("retreat"))}step(){if(this.over)return;this.t++;let e=this.units,t=this.blds;for(let r of e){if(r.dead)continue;let n=r.tu>=0?e[r.tu]:null,o=r.tb>=0?t[r.tb]:null;(n&&n.dead||o&&o.dead||!n&&!o||(this.t+r.id)%6===0&&r.swing<0)&&this.choose(r)}for(let r of e)r.dead||this.act(r);this.separate();for(let r of t)!r.dead&&r.def&&this.fire(r);this.land(),this.end()}run(e,t=-1,r=jt){let n=0;for(;!this.over;){for(;n<e.length&&e[n].t<=this.t;){let o=e[n++];this.drop(o.k,o.x,o.z)}if(t>=0&&this.t>=t&&this.retreat(),this.t>=r&&!this.over){this.finish("time");break}this.step()}return this.over}choose(e){let t=this.units,r=this.blds,n=-1,o=-1,s=1/0;if(e.side===0&&e.k==="veteran"){let a=this.ws,l=()=>r.some(c=>!c.dead&&c.def)||a.some(c=>!c.dead);if(e.tb>=0&&!r[e.tb].dead&&(r[e.tb].def||!l())||e.tb<0&&e.tw>=0&&!a[e.tw].dead)return;let p=-1;for(let c=0;c<r.length;c++){let h=r[c];if(h.dead||!h.def)continue;let u=B(h,e.x,e.z);u<s&&(s=u,o=c)}for(let c=0;c<a.length;c++){let h=a[c];if(h.dead)continue;let u=he(h,e.x,e.z).d-Vt;u<s&&(s=u,p=c,o=-1)}if(o<0&&p<0)for(let c=0;c<r.length;c++){let h=r[c];if(h.dead)continue;let u=B(h,e.x,e.z);u<s&&(s=u,o=c)}e.tu=-1,e.tb=o,e.tw=p,e.blk=-1;return}else if(e.side===0&&e.k==="pillard"){let a=d=>bn.includes(d.kind);if(e.tb>=0&&!r[e.tb].dead&&(a(r[e.tb])||!r.some(d=>!d.dead&&a(d))))return;for(let d=0;d<r.length;d++){let p=r[d];if(p.dead||!a(p))continue;let c=B(p,e.x,e.z);c<s&&(s=c,o=d)}if(o<0)for(let d=0;d<r.length;d++){let p=r[d];if(p.dead)continue;let c=B(p,e.x,e.z);c<s&&(s=c,o=d)}e.tu=-1,e.tb=o,e.tw=-1,e.blk=-1;return}else if(e.side===0){for(let l=0;l<t.length;l++){let d=t[l];if(d.dead||d.side===0)continue;let p=d.x-e.x,c=d.z-e.z,h=Math.sqrt(p*p+c*c);h<s&&(s=h,n=l,o=-1)}for(let l=0;l<r.length;l++){let d=r[l];if(d.dead)continue;let p=B(d,e.x,e.z);p<s&&(s=p,o=l,n=-1)}let a=e.tu>=0&&!t[e.tu].dead?this.distU(e,t[e.tu]):e.tb>=0&&!r[e.tb].dead?B(r[e.tb],e.x,e.z):1/0;if(a<1/0&&a<=s+1.2)return}else{for(let a=0;a<t.length;a++){let l=t[a];if(l.dead||l.side===1||!this.nearHome(l))continue;let d=l.x-e.x,p=l.z-e.z,c=Math.sqrt(d*d+p*p);c<s&&(c<=e.range||this.wallAcross(e.x,e.z,l.x,l.z,1)<0)&&(s=c,n=a)}if(e.tu>=0&&!t[e.tu].dead&&this.nearHome(t[e.tu])&&this.distU(e,t[e.tu])<=s+1.2)return}(n!==e.tu||o!==e.tb)&&(e.tw=-1,e.blk=-1),e.tu=n,e.tb=o}nearestBld(e,t){let r=-1,n=1/0;for(let o=0;o<this.blds.length;o++){let s=this.blds[o];if(s.dead)continue;let a=B(s,e,t);a<n&&(n=a,r=o)}return r}distU(e,t){let r=t.x-e.x,n=t.z-e.z;return Math.sqrt(r*r+n*n)}nearHome(e){for(let t of this.blds)if(!t.dead&&B(t,e.x,e.z)<12)return!0;return!1}act(e){let t=e.tu>=0?this.units[e.tu]:null,r=e.tb>=0?this.blds[e.tb]:null;e.cd--,e.mx=0,e.mz=0;let n,o,s;if(t&&!t.dead)n=t.x,o=t.z,s=this.distU(e,t);else if(r&&!r.dead)n=Math.max(r.x-r.size,Math.min(r.x+r.size,e.x)),o=Math.max(r.z-r.size,Math.min(r.z+r.size,e.z)),s=B(r,e.x,e.z);else if(e.tw>=0&&!this.ws[e.tw].dead)n=e.x,o=e.z,s=1/0;else{if(e.side===1){let d=e.home.x-e.x,p=e.home.z-e.z;this.walk(e,e.home.x,e.home.z,Math.sqrt(d*d+p*p),.3)}e.swing=-1;return}let a=e.range*.9;if(e.tw>=0&&this.ws[e.tw].dead&&(e.tw=-1),e.tw<0&&s>e.range&&this.grid&&e.side===0&&e.swing<0&&((e.blk<0||(this.t+e.id)%6===0)&&(e.blk=this.wallAcross(e.x,e.z,n,o,0)>=0?1:0),e.blk===1)){if(this.t-e.rt>=4){e.rt=this.t;let d=t?this.nearestBld(t.x,t.z):e.tb,p=d>=0?this.route(e,d):null;if(p&&p.w<0)e.rx=p.x,e.rz=p.z;else{let c=p?p.w:this.wallAcross(e.x,e.z,n,o,0);c>=0?e.tw=c:(e.rx=n,e.rz=o)}}e.tw<0&&(n=e.rx,o=e.rz,s=Math.sqrt((n-e.x)*(n-e.x)+(o-e.z)*(o-e.z)),a=0)}let l=e.tw>=0?this.ws[e.tw]:null;if(l){let d=he(l,e.x,e.z);n=l.x0+(l.x1-l.x0)*d.t,o=l.z0+(l.z1-l.z0)*d.t,s=Math.max(0,d.d-Vt),a=e.range*.9}if(e.swing>=0){e.swing++,!e.dealt&&e.swing>=F(e.hitAt)&&(e.dealt=!0,e.ranged?this.loose(e,l?null:t,l?null:r,l?e.tw:-1,n,o):s<e.range+.4&&(l?this.hurtW(l,e.dmg):t&&!t.dead?this.hurt(t,e.dmg):r&&!r.dead&&this.hurtB(r,e.dmg))),e.swing>=F(e.period*.9)&&(e.swing=-1);return}if(s<=e.range&&(l||a>0)){e.cd<=0&&(e.swing=0,e.dealt=!1,e.cd=F(e.period*(.9+this.rnd()*.2)),this.emit({e:"swing",u:e.id}));return}this.walk(e,n,o,s,a)}walk(e,t,r,n,o){if(n<=o+1e-6)return;let s=Math.min(n-o,e.speed*Fe),a=Math.sqrt((t-e.x)*(t-e.x)+(r-e.z)*(r-e.z))||1;e.mx=(t-e.x)/a*s,e.mz=(r-e.z)/a*s,e.x+=e.mx,e.z+=e.mz}separate(){let e=this.units.filter(n=>!n.dead),t=.62;for(let n=0;n<e.length;n++)for(let o=n+1;o<e.length;o++){let s=e[n],a=e[o],l=a.x-s.x,d=a.z-s.z;if(l>t||l<-t||d>t||d<-t)continue;let p=Math.sqrt(l*l+d*d);if(p>1e-6&&p<t){let c=(t-p)/2,h=l/p,u=d/p,b=s.swing>=0?.3:1,m=a.swing>=0?.3:1;s.x-=h*c*b,s.z-=u*c*b,a.x+=h*c*m,a.z+=u*c*m}}for(let n of e)for(let o of this.blds){if(o.dead)continue;let s=o.size+.3,a=Math.abs(n.x-o.x)-s,l=Math.abs(n.z-o.z)-s;a<0&&l<0&&(a>l?n.x=o.x+(n.x>=o.x?s:-s):n.z=o.z+(n.z>=o.z?s:-s))}if(!this.ws.length)return;let r=this.grid;for(let n of e){let o=Math.floor((n.x-r.x0)/q),s=Math.floor((n.z-r.z0)/q),a=o>=0&&s>=0&&o<r.bn&&s<r.bm?r.bucket[s*r.bn+o]:[];for(let l of a){let d=this.ws[l];if(d.dead||d.gate&&n.side===1||n.x<Math.min(d.x0,d.x1)-U||n.x>Math.max(d.x0,d.x1)+U||n.z<Math.min(d.z0,d.z1)-U||n.z>Math.max(d.z0,d.z1)+U)continue;let p=d.x1-d.x0,c=d.z1-d.z0,h=p*p+c*c;if(h<1e-9)continue;let u=((n.x-d.x0)*p+(n.z-d.z0)*c)/h,b=Math.sqrt(h),m=(d.ext??0)/b;if(u<-m||u>1+m)continue;let g=-c/b,v=p/b,w=(n.x-d.x0)*g+(n.z-d.z0)*v;if(w>=U||w<=-U)continue;let x=w>1e-6?1:w<-1e-6||n.mx*g+n.mz*v>0?-1:1;n.x+=g*(x*U-w),n.z+=v*(x*U-w)}for(let l of this.posts){let d=n.x-l.x,p=n.z-l.z,c=Me+.28;if(d>c||d<-c||p>c||p<-c)continue;let h=Math.sqrt(d*d+p*p);h<c&&(h>1e-6?(n.x=l.x+d/h*c,n.z=l.z+p/h*c):n.x=l.x+c)}}}loose(e,t,r,n,o,s){let a=Math.sqrt((o-e.x)*(o-e.x)+(s-e.z)*(s-e.z)),l={kind:"arrow",from:e.id,fromBld:-1,x0:e.x,z0:e.z,x:o,z:s,t0:this.t,land:this.t+F(a/13),dmg:e.dmg,tu:t?t.id:-1,tb:r?this.blds.indexOf(r):-1,tw:n,side:e.side,blast:0};this.shots.push(l),this.emit({e:"shot",s:l})}fire(e){if(--e.cd>0)return;let t=e.def,r=t.max*e.rangeK,n=null,o=1/0;for(let d of this.units){if(d.dead||d.side!==0)continue;let p=d.x-e.x,c=d.z-e.z,h=Math.sqrt(p*p+c*c);h<t.min||h>r||h<o&&(o=h,n=d)}if(!n){e.cd=F(.25);return}e.cd=F(t.period);let s=t.arrow?o/13:t.flight,a=t.arrow?0:F(s),l={kind:t.arrow?"arrow":"ball",from:-1,fromBld:this.blds.indexOf(e),x0:e.x,z0:e.z,x:n.x+n.mx*a,z:n.z+n.mz*a,t0:this.t,land:this.t+F(s),dmg:t.dmg*e.dmgK,tu:t.arrow?n.id:-1,tb:-1,tw:-1,side:1,blast:t.blast};this.shots.push(l),this.emit({e:"shot",s:l})}land(){for(let e=this.shots.length-1;e>=0;e--){let t=this.shots[e];if(!(t.land>this.t)){if(this.shots.splice(e,1),t.kind==="ball"){this.emit({e:"blast",x:t.x,z:t.z});for(let r of this.units){if(r.dead||r.side===t.side)continue;let n=Math.sqrt((r.x-t.x)*(r.x-t.x)+(r.z-t.z)*(r.z-t.z));n<t.blast&&this.hurt(r,t.dmg*(1-.5*n/t.blast))}}else if(t.tu>=0){let r=this.units[t.tu];r.dead||this.hurt(r,t.dmg)}else if(t.tb>=0){let r=this.blds[t.tb];r.dead||this.hurtB(r,t.dmg)}else if(t.tw>=0){let r=this.ws[t.tw];r.dead||this.hurtW(r,t.dmg)}}}}hurt(e,t){e.hp-=t,this.emit({e:"hit",u:e.id,dmg:t}),e.hp<=0&&(e.hp=0,e.dead=!0,e.deadAt=this.t,e.swing=-1,this.emit({e:"death",u:e.id}))}hurtB(e,t){if(e.hp-=t,this.emit({e:"hitB",b:this.blds.indexOf(e),dmg:t}),e.hp<=0){e.hp=0,e.dead=!0,this.emit({e:"fall",b:this.blds.indexOf(e)});for(let r of this.units)r.tb>=0&&this.blds[r.tb]===e&&(r.tb=-1);this.rethink()}}hurtW(e,t){if(e.hp-=t,this.emit({e:"hitW",w:this.ws.indexOf(e),dmg:t}),e.hp<=0){e.hp=0,e.dead=!0,this.emit({e:"fallW",w:this.ws.indexOf(e)});for(let r of this.units)r.tw>=0&&this.ws[r.tw]===e&&(r.tw=-1);this.rethink()}}rethink(){if(this.grid){this.fields.clear();for(let e of this.units)e.blk=-1,e.rt=-99}}wallAcross(e,t,r,n,o){let s=-1,a=1/0,l=Math.min(e,r),d=Math.max(e,r),p=Math.min(t,n),c=Math.max(t,n);for(let h=0;h<this.ws.length;h++){let u=this.ws[h];if(u.dead||u.gate&&o===1||u.x0<l&&u.x1<l||u.x0>d&&u.x1>d||u.z0<p&&u.z1<p||u.z0>c&&u.z1>c||!wn(e,t,r,n,u.x0,u.z0,u.x1,u.z1))continue;let b=he(u,e,t);b.d<a&&(a=b.d,s=h)}return s}makeGrid(){let e=1/0,t=1/0,r=-1/0,n=-1/0;for(let u of this.blds)e=Math.min(e,u.x-u.size),r=Math.max(r,u.x+u.size),t=Math.min(t,u.z-u.size),n=Math.max(n,u.z+u.size);for(let u of this.ws)e=Math.min(e,u.x0,u.x1),r=Math.max(r,u.x0,u.x1),t=Math.min(t,u.z0,u.z1),n=Math.max(n,u.z0,u.z1);let o=Qt+3;e=Math.floor(e-o),t=Math.floor(t-o);let s=Math.ceil((r+o-e)/_),a=Math.ceil((n+o-t)/_),l=Math.ceil(s*_/q),d=Math.ceil(a*_/q),p={x0:e,z0:t,n:s,m:a,wall:new Int32Array(s*a).fill(-1),bld:new Int32Array(s*a).fill(-1),post:new Uint8Array(s*a),bn:l,bm:d,bucket:Array.from({length:l*d},()=>[])};this.ws.forEach((u,b)=>{let m=U+.1,g=Math.max(0,Math.floor((Math.min(u.x0,u.x1)-m-e)/q)),v=Math.min(l-1,Math.floor((Math.max(u.x0,u.x1)+m-e)/q)),w=Math.max(0,Math.floor((Math.min(u.z0,u.z1)-m-t)/q)),x=Math.min(d-1,Math.floor((Math.max(u.z0,u.z1)+m-t)/q));for(let L=w;L<=x;L++)for(let $=g;$<=v;$++)p.bucket[L*l+$].push(b)});let c=new Float64Array(s*a).fill(1/0),h=(u,b,m,g,v,w)=>{let x=Math.max(0,Math.floor((Math.min(u,m)-v-e)/_)),L=Math.min(s-1,Math.floor((Math.max(u,m)+v-e)/_)),$=Math.max(0,Math.floor((Math.min(b,g)-v-t)/_)),M=Math.min(a-1,Math.floor((Math.max(b,g)+v-t)/_));for(let W=$;W<=M;W++)for(let P=x;P<=L;P++)w(W*s+P,e+(P+.5)*_,t+(W+.5)*_)};this.ws.forEach((u,b)=>h(u.x0,u.z0,u.x1,u.z1,.5,(m,g,v)=>{let w=he(u,g,v).d;w<=.45&&w<c[m]&&(c[m]=w,p.wall[m]=b)})),this.blds.forEach((u,b)=>h(u.x-u.size,u.z-u.size,u.x+u.size,u.z+u.size,0,(m,g,v)=>{p.bld[m]<0&&Math.abs(g-u.x)<u.size&&Math.abs(v-u.z)<u.size&&(p.bld[m]=b)}));for(let u of this.posts)h(u.x,u.z,u.x,u.z,Me,(b,m,g)=>{Math.abs(m-u.x)<=Me&&Math.abs(g-u.z)<=Me&&(p.post[b]=1)});return p}extra(e,t){let r=this.grid;if(r.post[e])return X;let n=r.wall[e];if(n>=0&&!this.ws[n].dead)return Math.round(this.ws[n].hp*gn);let o=r.bld[e];return o>=0&&o!==t&&!this.blds[o].dead?xn:0}field(e){let t=this.fields.get(e);if(t)return t;let r=this.grid,n=r.n*r.m,o=new Int32Array(n).fill(X),s=this.blds[e],a=[],l=p=>{let c=a.length;for(a.push(p);c>0;){let h=c-1>>1;if(a[h]<=p)break;a[c]=a[h],c=h}a[c]=p},d=()=>{let p=a[0],c=a.pop();if(a.length){let h=0;for(;;){let u=2*h+1,b=u+1,m=h,g=c;if(u<a.length&&a[u]<g&&(m=u,g=a[u]),b<a.length&&a[b]<g&&(m=b),m===h)break;a[h]=a[m],h=m}a[h]=c}return p};for(let p=0;p<n;p++){if(r.post[p])continue;let c=r.wall[p];if(c>=0&&!this.ws[c].dead)continue;let h=p%r.n,u=(p-h)/r.n;B(s,r.x0+(h+.5)*_,r.z0+(u+.5)*_)<=.75&&(o[p]=0,l(p))}for(;a.length;){let p=d(),c=p%n,h=(p-c)/n;if(h>o[c])continue;let u=this.extra(c,e);if(u>=X)continue;let b=c%r.n,m=(c-b)/r.n;for(let[g,v,w]of Xt){let x=b+g,L=m+v;if(x<0||L<0||x>=r.n||L>=r.m)continue;let $=L*r.n+x,M=h+w+u;M<o[$]&&(o[$]=M,l(M*n+$))}}return this.fields.set(e,o),o}route(e,t){let r=this.grid,n=Math.floor((e.x-r.x0)/_),o=Math.floor((e.z-r.z0)/_);if(n<0||o<0||n>=r.n||o>=r.m)return null;let s=this.field(t),a=h=>{let u=h%r.n;return{x:r.x0+(u+.5)*_,z:r.z0+((h-u)/r.n+.5)*_}},l=(h,u)=>{let b=h%r.n,m=(h-b)/r.n;for(let[g,v,w]of Xt){let x=b+g,L=m+v;x>=0&&L>=0&&x<r.n&&L<r.m&&u(L*r.n+x,w)}},d=o*r.n+n,p=r.wall[d];if(p>=0&&!this.ws[p].dead){let h=this.ws[p],u=(v,w)=>(h.x1-h.x0)*(w-h.z0)-(h.z1-h.z0)*(v-h.x0),b=u(e.x,e.z),m=-1,g=1/0;l(d,v=>{let w=r.wall[v];if(w>=0&&!this.ws[w].dead||r.post[v])return;let x=a(v);if(u(x.x,x.z)*b<=0)return;let L=(x.x-e.x)*(x.x-e.x)+(x.z-e.z)*(x.z-e.z);L<g&&(g=L,m=v)}),m>=0&&(d=m)}let c=[];for(let h=0;h<6;h++){let u=-1,b=X;if(l(d,(g,v)=>{let w=this.extra(g,t);if(w>=X||s[g]>=X)return;let x=s[g]+v+w;x<b&&(b=x,u=g)}),u<0||s[u]>=s[d]&&s[d]<X)break;let m=r.wall[u];if(m>=0&&!this.ws[m].dead){if(!c.length)return{...a(u),w:m};break}if(c.push(u),d=u,s[d]===0)break}for(let h=c.length-1;h>=0;h--){let u=a(c[h]);if(this.wallAcross(e.x,e.z,u.x,u.z,0)<0)return{x:u.x,z:u.z,w:-1}}return c.length?{...a(c[0]),w:-1}:null}end(){let e=this.units.some(r=>!r.dead&&r.side===0),t=Object.values(this.reserve).some(r=>r.length);this.blds.every(r=>r.dead)?this.finish("razed"):!e&&!t&&this.units.some(r=>r.side===0)?this.finish("wiped"):this.t>=jt&&this.finish("time")}finish(e){let t=this.units.filter(s=>!s.dead),r=[...t.filter(s=>s.side===0).map(s=>({k:s.k,hp:Math.round(s.hp/(this.input.mods?.att?.[s.k]?.hp??1))})),...Object.keys(this.reserve).flatMap(s=>this.reserve[s].map(a=>({k:s,hp:a})))],n=t.filter(s=>s.side===1).map(s=>({k:s.k,hp:Math.round(s.hp/(this.input.mods?.def?.[s.k]?.hp??1)),tag:s.tag})),o=this.input.defenders.map((s,a)=>{let l=this.units[a];return l.dead?0:Math.round(l.hp/(this.input.mods?.def?.[l.k]?.hp??1))});this.over={survivors:r,left:n,defHp:o,down:this.blds.filter(s=>s.dead).map(s=>s.id),lost:this.units.filter(s=>s.side===0&&s.dead).length,killed:this.units.filter(s=>s.side===1&&s.dead).length,why:e,t:this.t}}};function De(i,e){let t=i.buildings,r={x:e.x,z:e.z},n=a=>t.reduce((l,d)=>{let p=B(d,a.x,a.z);return p<l.g?{b:d,g:p}:l},{b:t[0],g:1/0}),o=(a,l)=>Jt(t,a,l,i.walls,i.plot);for(let a=0;a<400&&!o(r.x,r.z);a++){let l=n(r),d=l.b.x-r.x,p=l.b.z-r.z,c=Math.sqrt(d*d+p*p)||1,h=l.g>Yt?.5:-.5;r={x:r.x+d/c*h,z:r.z+p/c*h}}let s=[];return i.attackers.forEach((a,l)=>{let d=Math.floor(l/6),p=l%6,c=[[0,0],[.8,0],[-.8,0],[.4,.7],[-.4,.7],[0,-.8]][p],h={x:r.x+c[0]*(1+d),z:r.z+c[1]*(1+d)};o(h.x,h.z)||(h=r),s.push({t:1+l*2,k:a.k,x:h.x,z:h.z})}),s}function rr(i){let e=i*i,t=1,r=1;for(let n=9;n>=1;n--)t=1-e/(2*n*(2*n+1))*t,r=1-e/((2*n-1)*(2*n))*r;return[i*t,r]}var nr=["facile","moyen","difficile"],oe={tente:{size:1.6,hp:320},tour:{size:2,hp:600,def:"tour"},mortier:{size:2.4,hp:800,def:"mortier"}},kn={facile:300,moyen:500,difficile:800},yn={facile:250,moyen:450,difficile:700},ir={facile:[{tente:1,tour:1,mortier:0,def:1,loot:100},{tente:2,tour:2,mortier:0,def:2,loot:160}],moyen:[{tente:2,tour:2,mortier:0,def:1,loot:100},{tente:3,tour:2,mortier:1,def:2,loot:160}],difficile:[{tente:2,tour:2,mortier:1,def:1,loot:100},{tente:3,tour:3,mortier:1,def:2,loot:160}]},Re={min:3*3600,max:5*3600},er={dmg:.15,hp:.4},or=i=>Math.max(1,Math.min(Math.floor(i)||1,ir.facile.length)),Ae=(i,e)=>ir[i][or(e)-1],j={GAP:1,MARGIN:1.2,R_MIN:6,R_MAX:11,LANE:{half:1.6,from:3.4}},vn={mortier:[0,.8],tour:[2.6,4],alone:[0,1.2],tente:[3.2,4.6]},zn=Array.from({length:16},(i,e)=>rr(-Math.PI+Math.PI*e/8)),ie=i=>Math.round(i*20)/20,sr=i=>{let e=Math.abs(i.dx)+i.size,t=Math.abs(i.dz)+i.size;return Math.sqrt(e*e+t*t)},Ln=(i,e)=>Math.max(Math.abs(i.dx-e.dx),Math.abs(i.dz-e.dz))-i.size-e.size,tr=(i,e,t)=>Math.abs(i)-t>=j.LANE.half||e+t<=j.LANE.from,fe=i=>Math.max(j.R_MIN,Math.ceil((i.reduce((e,t)=>Math.max(e,sr(t)),0)+j.MARGIN)*4)/4);function Mn(i,e,t){let r=Ae(i,e),n=[...Array(r.mortier).fill("mortier"),...Array(r.tour).fill("tour"),...Array(r.tente).fill("tente")],o=(d,p,c,h)=>{let u=oe[p];return u.def?{id:d,kind:p,dx:c,dz:h,size:u.size,hp:u.hp,def:u.def}:{id:d,kind:p,dx:c,dz:h,size:u.size,hp:u.hp}},s=j.R_MAX-j.MARGIN;for(let d=0;d<24;d++){let p=[];for(let x of n){let L=oe[x].size,[$,M]=vn[x==="tour"&&!r.mortier?"alone":x],W=Math.floor(t()*16),P=$+t()*(M-$),O=null;for(let E=P;!O&&E<=s;E+=.4)for(let D=0;D<16&&!O;D++){let[ae,le]=zn[(W+(D%2?(D+1)/2:16-D/2))%16],N=o(p.length+1,x,ie(ae*E),ie(le*E));sr(N)<=s&&tr(N.dx,N.dz,L)&&p.every(Ir=>Ln(Ir,N)>=j.GAP-1e-9)&&(O=N)}if(!O)break;p.push(O)}if(p.length!==n.length)continue;let c=1/0,h=-1/0,u=1/0,b=-1/0;for(let x of p)c=Math.min(c,x.dx-x.size),h=Math.max(h,x.dx+x.size),u=Math.min(u,x.dz-x.size),b=Math.max(b,x.dz+x.size);let m=ie(-(c+h)/2),g=ie(-(u+b)/2),v=p.map(x=>({...x,dx:ie(x.dx+m),dz:ie(x.dz+g)})),w=v.every(x=>tr(x.dx,x.dz,x.size))&&fe(v)<fe(p)?v:p;return{pieces:w,palisade:fe(w)}}let a=[[0,0],[-5.4,0],[5.4,0],[0,-5.4],[-5,-5],[5,-5],[-5,5],[5,5]],l=n.map((d,p)=>o(p+1,d,...a[Math.min(p,a.length-1)]));return{pieces:l,palisade:Math.min(j.R_MAX,fe(l))}}function ar(){let i=[{id:1,kind:"tour",dx:2.4,dz:-1.4,size:oe.tour.size,hp:oe.tour.hp,def:"tour"},{id:2,kind:"tente",dx:-2.3,dz:-1,size:oe.tente.size,hp:oe.tente.hp}];return{pieces:i,palisade:fe(i)}}function $n(i){let e=Math.abs(Math.floor(i))%2147483646+1;return()=>(e=e*16807%2147483647,e/2147483647)}function Ne(i,e,t,r,n,o,s,a,l=$n(i*7919+t)){let d=or(s),p=Mn(o,d,l),c=Math.round(kn[o]*Ae(o,d).loot/100);return{id:i,owner:e,site:t,x:r,z:n,level:o,tier:d,pieces:p.pieces,palisade:p.palisade,up:!0,back:0,down:[],loot:c,food:lr(o,d),rune:a,raidBy:-1,raidUntil:0}}var lr=(i,e)=>Math.round(yn[i]*Ae(i,e).loot/100);function dr(i,e,t){let r=i.pieces.filter(s=>s.kind==="tente"),n=r.findIndex(s=>s.id===e);if(n<0||i.down.includes(e))return 0;let o=Math.floor(t/r.length);return n===r.length-1?t-o*(r.length-1):o}var Te=(i,e)=>dr(i,e,i.loot),Ge=(i,e)=>dr(i,e,i.food??lr(i.level,i.tier)),$e={OPEN:.42,PIECE:1.25,HP:400};function Rn(i){let e=i.palisade,t=2*Math.PI-2*$e.OPEN,r=Math.max(1,Math.round(e*t/$e.PIECE)),n=s=>{let a=$e.OPEN+t*s/r;a>Math.PI&&(a-=2*Math.PI);let[l,d]=rr(a);return{x:i.x+l*e,z:i.z+d*e}},o=[];for(let s=0;s<r;s++){let a=n(s),l=n(s+1);o.push({x0:a.x,z0:a.z,x1:l.x,z1:l.z,hp:$e.HP,gate:!1,run:0,piece:s,ext:.25})}return o}var An=18;function Pn(i){return{x:i.x,z:i.z,h:An}}function pr(i,e,t,r){let n=1+.25*(Ae(i.level,i.tier).def-1),o=i.weak?n*er.dmg:n,s=i.weak?n*er.hp:n;return{seed:t,buildings:i.pieces.filter(a=>!i.down.includes(a.id)).map(a=>a.def?{id:a.id,kind:a.kind,x:i.x+a.dx,z:i.z+a.dz,size:a.size,hp:Math.round(a.hp*s),def:a.def,mods:{dmg:o}}:{id:a.id,kind:a.kind,x:i.x+a.dx,z:i.z+a.dz,size:a.size,hp:a.hp}),defenders:[],rally:{x:i.x,z:i.z+1.5},attackers:e,mods:r,walls:Rn(i),plot:Pn(i)}}var qe=["soldat","archere","veteran","tour","mortier","pillard"],Cn={soldat:"soldat",archere:"arch\xE8re",veteran:"colosse",tour:"tour d\u2019archers",mortier:"mortier",pillard:"pillard"},cr=[.05,.1,.2,.35],In=["commune","rare","\xE9pique","l\xE9gendaire"],Sn={dmg:"d\xE9g\xE2ts",hp:"points de vie",speed:"vitesse",range:"port\xE9e"},_n=3,ur=i=>Math.max(0,Math.min(_n,i)),Wn=["dmg","hp","range"],On={facile:[70,22,7,1],moyen:[55,30,12,3],difficile:[40,32,20,8]},je={facile:25,moyen:50,difficile:80},hr=i=>/^b\d+$/.test(i);function se(i,e){let t={dmg:1,hp:1,speed:1,range:1};for(let r of(i??[]).slice(0,Math.max(0,e)))t[r.stat]+=cr[r.rarity];return t}function Ve(i,e){return{soldat:se(i.soldat,e),archere:se(i.archere,e),veteran:se(i.veteran,e),pillard:se(i.pillard,e)}}function fr(i,e,t,r,n){let o=On[e],s=t*100,a=0,l=0;for(let c=0;c<4;c++)if(a+=o[c],s<a){l=c;break}let d=qe[Math.min(qe.length-1,Math.floor(n*qe.length))],p=d==="tour"||d==="mortier"?Wn:["dmg","hp","speed","range"];return{id:i,stat:p[Math.min(p.length-1,Math.floor(r*p.length))],rarity:l,for:d}}var mr=(i,e)=>i.for===e,En=i=>/^[aeiouéèêh]/i.test(i)?`d\u2019${i}`:`de ${i}`,br=i=>`une rune ${In[i.rarity]} ${En(Cn[i.for])} (+${Math.round(cr[i.rarity]*100)} % ${Sn[i.stat]})`;var Zn=7,Kn={soldat:{hp:100,dps:16},archere:{hp:60,dps:11/1.3},veteran:{hp:320,dps:42/1.4},pillard:{hp:55,dps:10}},Ye={soldat:1,archere:1,veteran:3,pillard:1},xr={soldat:1,archere:1,veteran:3,pillard:1},Pe=["soldat","archere","veteran","pillard"],Ce=i=>i.reduce((e,t)=>e+(Ye[t.k]??1),0),Bn=i=>{let e=[1e3,800,650];for(;e.length<i;)e.push(Math.max(100,Math.floor(e[e.length-1]*95/100)));return e},z={gameT:96*3600,villages:{min:3,max:30,solo:20},cap:30,botCap:30,cost:{soldat:25,archere:40,veteran:80,pillard:30},start:{crystal:450,mushroom:750},loot:{reserve:.5,house:.5,extractor:.5},trophies:[1,2,3,4,5,6,9,12,14,17,20,23,26,29,32,35,37,39,41,43,45],ladder:{every:6*3600,pay:Bn(30)},camps:{facile:2,moyen:2,difficile:2},bot:{think:60,every:{min:2*3600,max:3*3600},firstAttack:2*3600,minArmy:6},power:{soldat:10,archere:10,veteran:35,pillard:8,tour:50,mortier:70,wall:1,fall:1.5},tuto:!0,tutoCrop:100,tutoBand:3,raidLock:480,troopUp:{max:3,bonus:.2,cost:{soldat:[0,800,2e3],archere:[0,1e3,2400],veteran:[0,2e3,4500],pillard:[0,900,2200]},time:[0,600,3600]}},gr=["Bruneval","Rochefer","Valgris","Hautefeuille","Pierrelune","Combefroide","Morneterre","Clairbois","Fontbrune","Givremont","Sombreval","Ronci\xE8res","Aubepierre","Haut-Gu\xE9","Brisec\xF4te","Lanterne","Vieilles-Forges","Malvent","Pr\xE9br\xFBl\xE9","Ormegrise","Ch\xEAnefort","Roquebise","Ventgris","Bellegarde","Fauchelune","Noirmoulin","Ambrecombe","Gu\xE9-du-Loup","Cendrebourg","Dormelande"],Hn="local";var wr=i=>i.charAt(0).toUpperCase()+i.slice(1),kr=(i,e)=>`${i} ${e}${i>1?"s":""}`,yr={maison:"La maison commune",caserne:"La caserne",tour:"La tour d\u2019archers",mortier:"Le mortier",cristal:"L\u2019extracteur de cristal",champignons:"L\u2019extracteur de champignons",reserve:"La r\xE9serve de cristal",grenier:"La r\xE9serve de champignons",forge:"La forge",sanctuaire:"Le sanctuaire des runes"},Fn={soldat:"Le soldat",archere:"L\u2019arch\xE8re",veteran:"Le colosse",pillard:"Le pillard"},Un={mortier:!0,cristal:!0,champignons:!0,sanctuaire:!0},vr={facile:"facile",moyen:"moyen",difficile:"difficile"},Dn=(i,e)=>{let t=i.x-e.x,r=i.z-e.z;return Math.sqrt(t*t+r*r)},Nn=i=>({survivors:i.attackers.map(e=>({k:e.k,hp:e.hp})),left:i.defenders.map(e=>({k:e.k,hp:e.hp,tag:e.tag})),defHp:i.defenders.map(e=>e.hp),down:[],lost:0,killed:0,why:"retreat",t:0}),zr=i=>i>1?`${i} troupes sont rentr\xE9es au village.`:"Une troupe est rentr\xE9e au village.",Xe=(i,e,t=0,r=0)=>{let n=[i||!e?`${i} cristal`:"",e?`${e} champignons`:""].filter(Boolean).join(" et "),o=[t>0?`${t} cristal`:"",r>0?`${r} champignons`:""].filter(Boolean).join(" et ");return o?`${n} (${o} perdus : tes r\xE9serves sont pleines)`:n},Lr=i=>i>0?`+${i}`:i<0?`\u2212${-i}`:"0",Mr=[["cristal",1,1],["champignons",1,1],["caserne",1,1],["cristal",2,1],["tour",1,1],["champignons",2,1],["reserve",1,1],["grenier",1,1],["cristal",3,1],["tour",2,1],["reserve",2,1],["cristal",3,2],["champignons",2,2],["mortier",1,1],["caserne",1,2],["reserve",2,2],["grenier",1,2],["tour",2,2],["maison",1,2],["forge",1,1],["cristal",5,1],["champignons",4,1],["reserve",3,1],["grenier",2,1],["tour",3,1],["cristal",5,2],["champignons",4,2],["caserne",1,3],["reserve",3,2],["grenier",2,2],["cristal",5,3],["champignons",4,3],["mortier",1,2],["tour",3,2],["reserve",3,3],["grenier",2,3],["cristal",5,4],["champignons",4,4],["forge",1,2]],Tn=["soldat","archere","veteran"],$r=["soldat","soldat","archere","soldat","soldat","archere","veteran"],Y=class i{constructor(e,t){y(this,"map",e);y(this,"w");y(this,"frac",0);y(this,"onReport",null);y(this,"lad",[]);y(this,"ladKey",[]);y(this,"ladW",null);y(this,"planFrom",[]);y(this,"planW",null);this.w=t??i.fresh(e);for(let r of this.w.villages)r.walls=Oe(r.walls)}get now(){return this.w.t+this.frac}static fresh(e,t=[Hn],r=[]){let n=e.villages.map((a,l)=>{let d=t[l]??null;return{team:l,name:r[l]??(d?"Toi":gr[l%gr.length]),owner:d,x:a.x,z:a.z,crystal:z.start.crystal,mushroom:z.start.mushroom,trophies:0,buildings:[{id:1,kind:"maison",x:a.x,z:a.z,level:1,busy:null,store:0}],nextId:2,raidBy:-1,raidUntil:0,full:!1,runes:[],slots:{},tuto:d&&z.tuto?"extract":"",walls:_e(),troopLv:{soldat:1,archere:1,veteran:1,pillard:1},research:null}}),o=n.map(a=>({team:a.team,units:[],battle:null})),s={v:7,seed:e.seed,t:0,villages:n,armies:o,reports:[],nextAttack:n.map(()=>z.bot.firstAttack),camps:[],bands:[],sites:{camps:e.campSites.map(a=>a.map(l=>({x:l.x,z:l.z})))},rng:e.seed%2147483646+1,nextRune:1,nextCamp:1};for(let a of n)a.owner&&i.seedCamps(s,a.team);return s}static seedCamps(e,t){let r=e.sites.camps[t]??[],n=C(e.villages[t].buildings,"maison")||1,o=0;for(let s of nr)for(let a=0;a<z.camps[s]&&o<r.length;a++,o++){let l=i.draw(e)*100<je[s];e.camps.push(Ne(e.nextCamp++,t,o,r[o].x,r[o].z,s,n,l,()=>i.draw(e)))}}static draw(e){return e.rng=e.rng*16807%2147483647,e.rng/2147483647}static load(e){let t=e;if(!t||typeof t!="object"||t.v!==Zn)return null;if(Array.isArray(t.villages))for(let r of t.villages)r.walls=Oe(r.walls);return t}isHuman(e){return!!this.w.villages[e]?.owner}teamOf(e){return this.w.villages.findIndex(t=>t.owner===e)}of(e){let t=this.w.villages[e]?.name;return t?`le village de ${t}`:"le village rouge"}armyOf(e){let t=this.w.villages[e]?.name;return t?`l\u2019arm\xE9e de ${t}`:"l\u2019arm\xE9e rouge"}houseOf(e){let t=this.w.villages[e]?.name;return t?`la maison de ${t}`:"la maison du village rouge"}report(e,t,r,n,o){if(!this.isHuman(e))return;let s=n?{t:this.w.t,team:e,kind:t,text:r,note:n}:{t:this.w.t,team:e,kind:t,text:r};if(o){s.replay=o;let a=this.w.reports.filter(l=>l.team===e&&l.replay);for(let l of a.slice(0,Math.max(0,a.length-2)))delete l.replay}this.w.reports.push(s),this.w.reports.length>150&&this.w.reports.splice(0,this.w.reports.length-150),this.onReport?.(s)}gate(e){let t=this.w.villages[e],r=t.buildings.find(a=>a.kind==="maison")??t,n=this.plotOf(e),o=n.h-ue/2,s=(a,l)=>Math.max(l-o,Math.min(l+o,a));return{x:s(r.x,n.x),z:s(r.z+14,n.z)}}endsAt(){return z.gameT}over(){return this.w.t>=z.gameT}ladder(){return this.order().slice()}order(){let e=this.w.villages,t=this.ladKey,r=this.ladW===this.w&&t.length===e.length;for(let n=0;r&&n<e.length;n++)r=e[n].trophies===t[n];return r||(this.lad=e.map(n=>n.team).sort((n,o)=>e[o].trophies-e[n].trophies||n-o),this.ladKey=e.map(n=>n.trophies),this.ladW=this.w),this.lad}rankOf(e){return this.order().indexOf(e)+1}stake(e,t){let r=Math.max(-10,Math.min(10,this.rankOf(e)-this.rankOf(t)));return z.trophies[r+10]}reward(e){let t=z.ladder.pay;return t[Math.min(e,t.length)-1]??100}apply(e,t){let r=n=>({ok:!1,why:n});if(this.over()&&t.c!=="claim"&&t.c!=="raidEnd")return r("over");if(this.locked(e)&&["train","untrain","research","collect","build","move","upgrade","cancel","raid","rune","unrune","wall","wmove","gate","unwall","wallUp"].includes(t.c))return r("locked");switch(t.c){case"train":{let n=this.train(e,t.k);return n==="ok"?{ok:!0}:r(n)}case"untrain":{let n=this.untrain(e,t.k);return n==="ok"?{ok:!0}:r(n)}case"research":{let n=this.research(e,t.k);return n==="ok"?{ok:!0}:r(n)}case"collect":return{ok:!0,n:this.collect(e,t.id)};case"build":{let n=this.build(e,t.kind,t.x,t.z);return typeof n=="number"?{ok:!0,n}:r(n)}case"move":{let n=this.moveBld(e,t.id,t.x,t.z);return n==="ok"?{ok:!0}:r(n)}case"upgrade":{let n=this.upgrade(e,t.id);return n==="ok"?{ok:!0}:r(n)}case"cancel":{let n=this.cancel(e,t.id);return n==="ok"?{ok:!0}:r(n)}case"raid":{let n=this.raidStart(e,t.target??-1,t.camp??-1);return n==="ok"?{ok:!0}:r(n)}case"raidEnd":{let n=this.raidEnd(e,t.drops,t.retreat);return n?{ok:!0,raid:n}:r("none")}case"rune":{let n=this.equip(e,t.rune,t.slot,t.at);return n==="ok"?{ok:!0}:r(n)}case"unrune":{let n=this.unequip(e,t.slot,t.at);return n==="ok"?{ok:!0}:r(n)}case"tuto":{let n=this.w.villages[e];return n?(n.tuto="",this.w.bands=this.w.bands.filter(o=>o.target!==e),{ok:!0}):r("none")}case"wall":{let n=this.buildWall(e,t.a,t.b,!!t.gate);return typeof n=="number"?{ok:!0,n}:r(n)}case"wmove":{let n=this.moveWall(e,t.to);return n?r(n):{ok:!0}}case"gate":{let n=this.makeGate(e,t.id);return typeof n=="number"?{ok:!0,n}:r(n)}case"unwall":{let n=this.w.villages[e];return n&&Array.isArray(t.ids)&&Ke(n.walls,t.ids)?{ok:!0}:r("none")}case"wallUp":{let n=this.wallUp(e,t.ids);return typeof n=="number"?{ok:!0,n}:r(n)}case"claim":{let n=this.w.villages[t.team];if(!n||n.owner&&n.owner!==t.uid)return r("busy");let o=!n.owner;return n.owner=t.uid,n.name=t.name,o&&!this.w.camps.some(s=>s.owner===t.team)&&i.seedCamps(this.w,t.team),{ok:!0}}}}release(e){for(let t of this.w.villages)t.raidBy===e&&(t.raidBy=-1,t.raidUntil=0);for(let t of this.w.camps)t.raidBy===e&&(t.raidBy=-1,t.raidUntil=0)}locked(e){let t=this.w.villages[e];return!!t&&t.raidUntil>this.w.t&&t.raidBy!==e&&t.raidBy>=0}armyCap(e){return C(this.w.villages[e].buildings,"caserne")>=3?z.cap+4:z.cap}armyCost(e){let t=0;for(let r of e)t+=z.cost[r.k]??0;return t}armyReady(e){return(this.w.armies[e]?.units.length??0)>0}train(e,t){let r=this.w.villages[e],n=this.w.armies[e];if(!r||!n||!Pe.includes(t))return"none";if(n.battle)return"busy";let o=C(r.buildings,"caserne");return o?o<xr[t]?"level":Ce(n.units)+Ye[t]>this.armyCap(e)?"full":r.mushroom<z.cost[t]?"cost":(r.mushroom-=z.cost[t],n.units.push({k:t,hp:this.troopHp(e,t)}),"ok"):"barracks"}troopMax(e){let t=C(this.w.villages[e]?.buildings??[],"forge");return t?Math.min(z.troopUp.max,t+1):1}researchCost(e,t){let r=z.troopUp.cost[e]?.[t],n=z.troopUp.time[t];return t>=1&&t<z.troopUp.max&&r&&n?{crystal:r,time:n}:null}troopFactor(e,t){return 1+z.troopUp.bonus*((this.w.villages[e]?.troopLv?.[t]??1)-1)}troopHp(e,t){return Math.round(Kn[t].hp*this.troopFactor(e,t))}attMods(e){let t=Ve(this.w.villages[e].slots,this.runeSlots(e));for(let r of Pe){let n=this.troopFactor(e,r),o=t[r]??{};t[r]={...o,hp:(o.hp??1)*n,dmg:(o.dmg??1)*n}}return t}research(e,t){let r=this.w.villages[e];if(!r||!Pe.includes(t))return"none";let n=r.buildings.find(a=>a.kind==="forge"&&a.busy?.what!=="build");if(!n)return"forge";if(r.research||n.busy)return"busy";let o=r.troopLv[t]??1;if(o>=z.troopUp.max)return"max";if(o+1>this.troopMax(e))return"level";let s=this.researchCost(t,o);return s?r.crystal<s.crystal?"cost":(r.crystal-=s.crystal,r.research={k:t,end:this.w.t+s.time,cost:s.crystal},"ok"):"max"}researched(e){let t=e.research.k,r=this.w.armies[e.team];if(e.troopLv[t]=(e.troopLv[t]??1)+1,e.research=null,r&&!r.battle)for(let n of r.units)n.k===t&&(n.hp=this.troopHp(e.team,t));this.report(e.team,"good",`${Fn[t]} passe au niveau ${e.troopLv[t]}.`,"build")}untrain(e,t){let r=this.w.villages[e],n=this.w.armies[e];if(!r||!n)return"none";if(n.battle)return"busy";let o=n.units.length-1;for(;o>=0&&n.units[o].k!==t;)o--;return o<0?"none":(n.units.splice(o,1),r.mushroom+=z.cost[t],"ok")}comeBack(e,t){let r=this.w.armies[e],n={};if(t)for(let s of t.units)s.side===0&&(n[s.k]=(n[s.k]??0)+1);let o=[];for(let s of r.units){if(n[s.k]){n[s.k]--;continue}o.push({k:s.k,hp:this.troopHp(e,s.k)})}return r.units=o,o.length}storage(e){return Nt(this.w.villages[e].buildings)}collect(e,t){let r=this.w.villages[e],n=this.storage(e),o=0,s=!1;for(let a of r.buildings){let l=Ut(a);if(l){if(t===void 0||a.id===t){let d=Math.max(0,Math.min(Math.floor(a.store+1e-9),n[l.res]-Math.floor(r[l.res])));r[l.res]+=d,a.store-=d,o+=d}a.store>=l.cap&&(s=!0)}}return r.full=s,o&&r.tuto==="collect"&&this.tutoTo(e,"tour"),o}afford(e,t){return(t.crystal??0)<=e.crystal&&(t.mushroom??0)<=e.mushroom}spend(e,t,r=1){e.crystal-=r*(t.crystal??0),e.mushroom-=r*(t.mushroom??0)}bld(e,t){return this.w.villages[e]?.buildings.find(r=>r.id===t)}placeRefusal(e,t,r,n,o=-1){return He(this.map,this.w.villages,e,t,r,n,o)}isGift(e,t){let r=this.w.villages[e]?.tuto;return r==="extract"&&t==="cristal"||r==="tour"&&t==="tour"||r==="caserne"&&t==="caserne"}build(e,t,r,n){let o=this.w.villages[e],s=R[t].shop;if(!o||!s)return"none";if(ze(o.buildings,t)>=(s.max[C(o.buildings,"maison")]??0))return"max";let a=this.isGift(e,t);if(!a&&Le(o.buildings)>=ye)return"builders";if(!a&&!this.afford(o,s.cost))return"cost";let l=this.placeRefusal(e,t,r,n);if(l)return l;let d=o.nextId++;return a?(o.buildings.push({id:d,kind:t,x:r,z:n,level:1,busy:null,store:t==="cristal"?z.tutoCrop:0}),this.tutoTo(e,t==="cristal"?"collect":t==="tour"?"band":"camp"),d):(this.spend(o,s.cost),o.buildings.push({id:d,kind:t,x:r,z:n,level:1,busy:{what:"build",end:this.w.t+s.time,cost:s.cost},store:0}),d)}moveBld(e,t,r,n){let o=this.bld(e,t);if(!o)return"none";let s=this.placeRefusal(e,o.kind,r,n,t);return s||(o.x=r,o.z=n,"ok")}upgrade(e,t){let r=this.w.villages[e],n=this.bld(e,t);if(!n||n.busy)return n?"busy":"none";let o=R[n.kind].up[n.level];return o?o.needs&&C(r.buildings,"maison")<o.needs?"house":Le(r.buildings)>=ye?"builders":this.afford(r,o.cost)?(this.spend(r,o.cost),n.busy={what:"up",end:this.w.t+o.time,cost:o.cost},"ok"):"cost":"max"}cancel(e,t){let r=this.w.villages[e],n=this.bld(e,t);return n?.busy?(this.spend(r,n.busy.cost,-1),n.busy.what==="build"?(r.buildings=r.buildings.filter(o=>o!==n),r.runes.push(...r.slots[`b${n.id}`]??[]),delete r.slots[`b${n.id}`]):n.busy=null,"ok"):"none"}wallRefusal(e,t,r,n=0){let o=this.w.villages[e];if(!o||!t.length||!t.every(d=>[d.x0,d.z0,d.x1,d.z1].every(Number.isFinite)))return"none";let s=this.plotOf(e);if(!t.every(d=>re(s,d.x0,d.z0,ue)&&re(s,d.x1,d.z1,ue)))return"edge";let a=Wt(o.walls,t,o.buildings.map(d=>({x:d.x,z:d.z,size:R[d.kind].size})),ve,r);if(a)return a;if(n&&St(o.walls)+n>(Tt[C(o.buildings,"maison")]??0))return"max";let l=this.map;for(let d of t){let p=Math.ceil(Dn({x:d.x0,z:d.z0},{x:d.x1,z:d.z1})/.5);for(let c=0;c<=p;c++){let h=d.x0+(d.x1-d.x0)*c/p,u=d.z0+(d.z1-d.z0)*c/p,[b,m]=l.cell(h,u);if(b<0||m<0||b>=l.G||m>=l.G||l.grid[m*l.G+b]!==1)return"ground"}}return null}buildWall(e,t,r,n=!1){if(!t||!r)return"none";let o=_t(t,r,n).map(d=>({...d,gate:n})),s=this.wallRefusal(e,o,void 0,n?0:o.length);if(s)return s;let a=this.w.villages[e],l=n?0:S.COST*o.length;return a.crystal<l?"cost":(a.crystal-=l,Ze(a.walls,o,n),o.length)}moveWall(e,t){let r=this.w.villages[e];if(!r||!Et(r.walls,t))return"none";let n=t.map(s=>({...s,gate:r.walls.pieces.find(a=>a.id===s.id).gate})),o=this.wallRefusal(e,n,new Set(t.map(s=>s.id)));return o||(Ot(r.walls,t),null)}makeGate(e,t){let r=this.w.villages[e],n=r?Zt(r.walls,t):null;return r?n?(Ke(r.walls,n.ids),Ze(r.walls,[n.seg],!0)[0]):r.walls.pieces.some(o=>o.id===t&&!o.gate)?"short":"none":"none"}wallUp(e,t){let r=this.w.villages[e];if(!r||!Array.isArray(t))return"none";let n=r.walls.pieces.filter(a=>t.includes(a.id)),o=n.filter(a=>!a.gate&&a.level<S.HP.length-1);if(!o.length)return n.length?"max":"none";let s=S.UP*o.length;if(r.crystal<s)return"cost";r.crystal-=s;for(let a of o)a.level++;return o.length}camp(e){return this.w.camps.find(t=>t.id===e)}myCamps(e){return this.w.camps.filter(t=>t.owner===e&&t.up)}runeSlots(e){let t=this.w.villages[e];return t?ur(C(t.buildings,"sanctuaire")):0}equip(e,t,r,n){let o=this.w.villages[e],s=o?.runes.findIndex(h=>h.id===t)??-1;if(!o||s<0)return"none";let a=o.runes[s],l=this.runeSlots(e),d;if(hr(r)){let h=o.buildings.find(u=>`b${u.id}`===r);if(!h||h.kind!=="tour"&&h.kind!=="mortier")return"none";d=h.kind}else if(r==="soldat"||r==="archere"||r==="veteran"||r==="pillard")d=r;else return"none";if(!mr(a,d))return"none";if(!l)return"sanctuary";if(!Number.isInteger(n)||n<0)return"none";if(n>=l)return"slot";let p=o.slots[r]??[],c=n<p.length?p[n]:null;return c?p[n]=a:p.push(a),o.slots[r]=p,c?o.runes.splice(s,1,c):o.runes.splice(s,1),"ok"}unequip(e,t,r){let n=this.w.villages[e],o=n?.slots[t];if(!n||!o||!Number.isInteger(r)||r<0||r>=o.length)return"none";let[s]=o.splice(r,1);return o.length||delete n.slots[t],n.runes.push(s),"ok"}seedOf(e,t){return(this.w.t%1000003*7919+(e+2)*131+(t+2)*17)%2147483646+1}plotOf(e){let t=this.w.villages[e];return Be({x:t.x,z:t.z})}villageInput(e,t,r){let n=this.w.villages[e],o=this.runeSlots(e),s=n.buildings.map(d=>{let p=1+.25*(d.level-1),c=se(n.slots[`b${d.id}`],o),h=(d.kind==="tour"||d.kind==="mortier")&&!d.busy;return{id:d.id,kind:d.kind,x:d.x,z:d.z,size:R[d.kind].size,hp:Math.round(R[d.kind].hp*p),def:h?d.kind:void 0,mods:{dmg:(c.dmg??1)*p,hp:c.hp,range:c.range}}}),a=At(n.walls),l=Pt(n.walls);return{seed:this.seedOf(r,e),buildings:s,defenders:[],rally:this.gate(e),attackers:t.map(d=>({...d})),mods:{att:r>=0?this.attMods(r):void 0,def:Ve(n.slots,o)},...a.length?{walls:a,posts:l}:{},plot:this.plotOf(e)}}raidRefusal(e,t,r=-1){let n=this.w,o=n.armies[e];if(this.over())return"over";if(!o||o.battle)return"busy";if(!o.units.length)return"ready";if(r>=0){let a=this.camp(r);return!a||!a.up||a.owner!==e?"none":a.raidUntil>n.t&&a.raidBy!==e?"busy":null}let s=n.villages[t];return s?t===e?"self":s.raidUntil>n.t&&s.raidBy!==e?"busy":null:"none"}raidStart(e,t,r=-1){let n=this.raidRefusal(e,t,r);if(n)return n;let o=this.w,s=o.armies[e];if(r>=0){let p=this.camp(r);return p.raidBy=e,p.raidUntil=o.t+z.raidLock,s.battle={target:-1,camp:r,t0:o.t,input:pr(p,s.units,this.seedOf(e,-10-r),{att:this.attMods(e)})},"ok"}let a=o.villages[t],l=this.lootOf(t,"crystal"),d=this.lootOf(t,"mushroom");return a.raidBy=e,a.raidUntil=o.t+z.raidLock,s.battle={target:t,camp:-1,t0:o.t,input:this.villageInput(t,s.units,e),loot:l,lootM:d,stake:this.stake(e,t)},"ok"}raidEnd(e,t,r){let n=this.w,o=n.armies[e],s=o?.battle;if(!s)return null;let a=(Array.isArray(t)?t:[]).filter(u=>u&&Pe.includes(u.k)&&Number.isFinite(u.t)&&Number.isFinite(u.x)&&Number.isFinite(u.z)).map(u=>({t:Math.max(0,Math.floor(u.t)),k:u.k,x:u.x,z:u.z})).sort((u,b)=>u.t-b.t),l=Number.isFinite(r)?Math.floor(r):-1,d=Nn(s.input),p=!1,c=null;a.length&&(c=new ne(s.input),d=c.run(a,l),p=c.units.some(u=>u.side===0)),o.battle=null;let h=this.comeBack(e,c);return this.release(e),s.camp>=0?this.settleCamp(e,s.camp,d,p,h):this.settleVillage(e,s.target,d,p,h,p?{input:s.input,drops:a,retreat:l,t0:s.t0}:void 0,s)}pieceLoot(e,t,r){let n={crystal:0,mushroom:0,rune:0};if(t>=0){let l=this.camp(t);if(!l||l.down.includes(r)||!l.pieces.some(p=>p.id===r))return n;let d=l.pieces.every(p=>p.id===r||l.down.includes(p.id));return{crystal:Te(l,r),mushroom:Ge(l,r),rune:l.rune&&d?1:0}}let o=this.w.villages[e];if(!o)return n;let s=this.liveSnap(e);if(s?.loot)return{crystal:s.loot[r]??0,mushroom:s.lootM?.[r]??0,rune:0};let a=o.buildings.find(l=>l.id===r);return a?{crystal:this.lootNow(o,a,"crystal"),mushroom:this.lootNow(o,a,"mushroom"),rune:0}:n}lootNow(e,t,r){let n=R[t.kind].bed;if(n)return n.res===r?Math.floor(Math.floor(t.store+1e-9)*z.loot.extractor):0;if(t.kind==="maison"){let d=C(e.buildings,"maison")||1,p=Math.min(Math.floor(e[r]),ke(d)[r]);return Math.floor(Math.max(0,p-Dt(d)[r])*z.loot.house)}let o=R[t.kind].vault;if(!o||o.res!==r||t.busy?.what==="build")return 0;let s=0;for(let d of e.buildings){let p=R[d.kind].vault;p&&p.res===r&&d.busy?.what!=="build"&&(s+=p.cap[Math.min(d.level,p.cap.length-1)])}let a=Math.max(0,Math.floor(e[r])-ke(C(e.buildings,"maison")||1)[r]),l=o.cap[Math.min(t.level,o.cap.length-1)];return Math.floor(a*l/Math.max(1,s)*z.loot.reserve)}lootOf(e,t){let r=this.w.villages[e],n={};for(let o of r.buildings){let s=this.lootNow(r,o,t);s&&(n[o.id]=s)}return n}liveSnap(e){let t=this.w.villages[e];if(!t||t.raidBy<0||t.raidUntil<=this.w.t)return null;let r=this.w.armies[t.raidBy]?.battle;return r&&r.target===e?r:null}raidLoot(e,t,r){let n={crystal:0,mushroom:0,rune:0};for(let s of r){let a=this.pieceLoot(e,t,s);n.crystal+=a.crystal,n.mushroom+=a.mushroom}let o=t>=0?this.camp(t):void 0;return o?.rune&&o.pieces.every(s=>r.includes(s.id)||o.down.includes(s.id))&&(n.rune=1),n}lootable(e){let t=this.w.villages[e];return t?this.raidLoot(e,-1,t.buildings.map(r=>r.id)):{crystal:0,mushroom:0,rune:0}}keep(e,t,r="crystal"){let n=this.w.villages[e],o=Math.max(0,Math.min(t,this.storage(e)[r]-Math.floor(n[r])));return n[r]+=o,o}settleVillage(e,t,r,n,o,s,a){let l=this.w,d=l.villages[t],p=new Set(r.down),c={crystal:0,mushroom:0};for(let M of["crystal","mushroom"]){let W=M==="crystal"?a?.loot:a?.lootM;for(let P of d.buildings){if(!p.has(P.id))continue;let O=a?.loot?W?.[P.id]??0:this.lootNow(d,P,M);if(O)if(R[P.kind].bed){let E=Math.min(O,Math.max(0,Math.floor(P.store+1e-9)));P.store-=E,c[M]+=E}else{let E=Math.min(O,Math.max(0,Math.floor(d[M])));d[M]-=E,c[M]+=E}}}let h=c.crystal,u=c.mushroom,b=d.buildings.find(M=>M.kind==="maison"),m=!!b&&p.has(b.id),g=r.down.filter(M=>M!==b?.id).length,v=e>=0&&n?a?.stake??this.stake(e,t):0,w=m?v:0-Math.floor(v/2)||0,x=h,L=u;if(e>=0){let M=l.villages[e];h=this.keep(e,h),u=this.keep(e,u,"mushroom"),M.trophies=Math.max(0,M.trophies+w),d.trophies=Math.max(0,d.trophies-w)}let $=g?`${kr(g,"b\xE2timent")} d\xE9truit${g>1?"s":""}`:"";if(e>=0){let M=n?o?` ${zr(o)}`:"":" Ton arm\xE9e est rentr\xE9e au village.",W=m?`${this.houseOf(t)} est tomb\xE9e${$?`, ${$}`:""}`:`${this.houseOf(t)} a tenu${$?` (${$})`:""}`;this.report(e,n?m?"good":w<0?"bad":"info":"info",n?`Raid sur ${this.of(t)} : ${W}. Butin : ${Xe(h,u,x-h,L-u)}. Troph\xE9es : ${Lr(w)}.${M}`:`Raid sur ${this.of(t)} : aucune troupe pos\xE9e, rien n\u2019a \xE9t\xE9 pris.${M}`)}if(!n)this.report(t,"info",`${wr(this.armyOf(e))} est venue jusqu\u2019\xE0 ton village, sans attaquer.`);else{let M=e>=0?wr(this.armyOf(e)):"Une bande de brigands",W=m?`ta maison est tomb\xE9e${$?`, ${$}`:""}`:`ta maison a tenu${$?` (${$})`:""}`,P=x||L?` Pill\xE9 : ${Xe(x,L)}.`:" Rien n\u2019a \xE9t\xE9 pill\xE9.",O=e>=0?` Troph\xE9es : ${Lr(-w)}.`:"";this.report(t,m||x||L?"bad":"good",`${M} a attaqu\xE9 ton village : ${W}.${P}${O}`,"attack",s)}return{fell:m,crystal:h,mushroom:u,trophies:w,rune:null,back:o}}settleCamp(e,t,r,n,o){let s=this.w,a=this.camp(t),l=s.villages[e],d={fell:!1,crystal:0,mushroom:0,trophies:0,rune:null},p=a.pieces,c=r.down.filter(x=>!a.down.includes(x)&&p.some(L=>L.id===x));for(let x of c)d.crystal+=Te(a,x),d.mushroom+=Ge(a,x);a.down.push(...c),a.raidBy=-1,a.raidUntil=0;let h={...d,back:o},u=h.crystal,b=h.mushroom;h.crystal=this.keep(e,u),h.mushroom=this.keep(e,b,"mushroom");let m=p.every(x=>a.down.includes(x.id));if(h.fell=m,m&&a.rune){let x=i.draw(s),L=i.draw(s),$=i.draw(s);h.rune=fr(s.nextRune++,a.level,x,$,L),l.runes.push(h.rune),a.rune=!1}m&&(a.up=!1,a.back=s.t+Re.min+Math.floor(i.draw(s)*(Re.max-Re.min)));let g=m?"le camp est ras\xE9":c.length?`${kr(c.length,"pi\xE8ce")} d\xE9truite${c.length>1?"s":""}`:"rien n\u2019est tomb\xE9",v=u||b?` Butin : ${Xe(h.crystal,h.mushroom,u-h.crystal,b-h.mushroom)}.`:"",w=h.rune?` Tu gagnes ${br(h.rune)}.`:m?" Pas de rune dans ce camp.":"";return this.report(e,m||h.crystal||h.mushroom?"good":"info",n?`Raid sur le camp de brigands ${vr[a.level]} : ${g}.${v}${w}${o?` ${zr(o)}`:""}`:`Raid sur le camp de brigands ${vr[a.level]} : aucune troupe pos\xE9e. Ton arm\xE9e est rentr\xE9e au village.`),n&&l.tuto==="camp"&&(l.tuto=""),h}bots(){let e=this.w,t=z.bot.think;for(let r of e.villages)!r.owner&&(e.t+r.team)%t===0&&!this.locked(r.team)&&this.botThink(r)}botThink(e){let t=this.w,r=e.team,n=t.armies[r];if(this.collect(r),this.botBuild(e),!e.research&&C(e.buildings,"forge")){for(let a of Tn)if(e.troopLv[a]<this.troopMax(r)){this.research(r,a);break}}if(!C(e.buildings,"caserne")||!(t.t>=t.nextAttack[r])||(this.botBuy(r),Ce(n.units)<z.bot.minArmy))return;let s=this.botTarget(r);s<0||(this.botRaid(r,s),t.nextAttack[r]=t.t+z.bot.every.min+Math.floor(i.draw(t)*(z.bot.every.max-z.bot.every.min)))}botBuild(e){let t=e.team,r=e.buildings,n=this.storage(t).crystal,o=C(r,"maison");this.planW!==this.w&&(this.planW=this.w,this.planFrom=[]);let s=!0;for(let a=this.planFrom[t]??0;a<Mr.length;a++){let[l,d,p]=Mr[a];if(Le(e.buildings)>=ye)return;let c=0,h=0,u=null;for(let m of e.buildings){if(m.kind!==l)continue;h++,(m.busy?m.busy.what==="up"?m.level+1:1:m.level)>=p?c++:!m.busy&&(!u||m.level<u.level)&&(u=m)}if(c>=d){s&&!e.buildings.some(m=>m.kind===l&&m.busy)&&(this.planFrom[t]=a+1);continue}if(s=!1,h<d){let m=R[l].shop;if(!m||h>=(m.max[o]??0)||(m.cost.crystal??0)>n)continue;if(!this.afford(e,m.cost))return;let g=qt(this.map,this.w.villages,t,l);g&&this.build(t,l,g.x,g.z);continue}if(!u)continue;let b=R[l].up[u.level];if(!(!b||(b.cost.crystal??0)>n)){if(!this.afford(e,b.cost))return;this.upgrade(t,u.id)}}}botBuy(e){let t=C(this.w.villages[e].buildings,"caserne"),r=this.w.armies[e];for(let n=0;n<4*z.botCap;n++){let o=$r[n%$r.length];if(!(t<xr[o])&&(Ce(r.units)+Ye[o]>Math.min(this.armyCap(e),z.botCap)||this.train(e,o)!=="ok"))break}}botTarget(e){let t=this.w,r=this.order(),n=r.indexOf(e),o=s=>{let a=t.villages[s];return!(a.raidUntil>t.t&&a.raidBy>=0)};for(let s=n-1;s>=0;s--)if(o(r[s]))return r[s];for(let s=n+1;s<r.length;s++)if(o(r[s]))return r[s];return-1}botRaid(e,t){let r=this.w,n=r.armies[e],o=n.units;if(this.isHuman(t)){let s=this.villageInput(t,o,e),a=De(s,this.gate(t)),l=new ne(s),d=l.run(a);this.settleVillage(e,t,d,!0,this.comeBack(e,l),{input:s,drops:a,retreat:-1,t0:r.t})}else n.units=[],this.settleVillage(e,t,this.byNumbers(o,t,e),!0,0)}byNumbers(e,t,r=-1){let n=z.power,o=this.w.villages[t],s=0,a=0;for(let m of e)s+=n[m.k]*(r>=0?this.troopFactor(r,m.k):1);for(let m of o.buildings)(m.kind==="tour"||m.kind==="mortier")&&!m.busy&&(a+=n[m.kind]*(3+m.level)/4);for(let m of o.walls.pieces)m.gate||(a+=n.wall*m.level);let l=o.buildings.find(m=>m.kind==="maison"),d=l?.x??o.x,p=l?.z??o.z,c=s>0&&s>=a*n.fall,h=a>0?Math.min(1,s/(2*a)):s>0?1:0,u=o.buildings.filter(m=>m!==l).map(m=>({id:m.id,d:(m.x-d)*(m.x-d)+(m.z-p)*(m.z-p)})).sort((m,g)=>g.d-m.d||m.id-g.id),b=u.slice(0,Math.floor(h*u.length+1e-9)).map(m=>m.id);return c&&l&&b.push(l.id),{survivors:[],left:[],defHp:[],down:b,lost:e.length,killed:0,why:b.length===o.buildings.length?"razed":"time",t:0}}tutoTo(e,t){let r=this.w,n=r.villages[e];if(t==="tour"&&ze(n.buildings,"tour")&&(t="band"),t==="caserne"&&ze(n.buildings,"caserne")&&(t="camp"),n.tuto=t,t==="band"&&r.bands.push({target:e,units:Array.from({length:z.tutoBand},()=>({k:"brigand",hp:Ue.brigand.hp})),at:r.t+5}),t==="camp"){let o=r.armies[e];for(let a=0;a<3&&!o.battle&&Ce(o.units)<this.armyCap(e);a++)o.units.push({k:"soldat",hp:this.troopHp(e,"soldat")});let s=r.camps.find(a=>a.owner===e&&a.up&&a.level==="facile");s&&(s.rune=!0,s.weak=!0,!s.down.length&&!(s.raidBy>=0&&s.raidUntil>r.t)&&Object.assign(s,ar()))}}bandArrives(e){let t=this.w,r=this.villageInput(e.target,e.units,-1),n=De(r,this.gate(e.target)),o=new ne(r).run(n),s=!o.survivors.length;this.report(e.target,s?"good":"bad",`Des brigands ont attaqu\xE9 ton village : ${s?"ils ont \xE9t\xE9 repouss\xE9s":"ils ont fait des d\xE9g\xE2ts"} (ils ont perdu ${o.lost}).`,"attack",{input:r,drops:n,retreat:-1,t0:t.t}),t.villages[e.target].tuto==="band"&&this.tutoTo(e.target,"caserne")}advance(e){for(this.frac+=e;this.frac>=1;)this.frac-=1,this.step()}advanceTo(e){for(;this.w.t+1<=e;)this.step();this.frac=Math.max(0,Math.min(.999,e-this.w.t))}static forecast(e,t,r){let n=new i(e,JSON.parse(JSON.stringify(t))),o=[];n.onReport=a=>{a.note&&o.push({team:a.team,t:a.t,note:a.note,text:a.text})};let s=n.w.t+r;for(;n.w.t<s;)n.step();return o}step(){let e=this.w,t=R;e.t+=1;for(let r of e.villages){r.research&&r.research.end<=e.t&&this.researched(r);for(let n of r.buildings){if(n.busy){if(n.busy.end<=e.t){let l=n.busy.what==="up";l&&n.level++,n.busy=null,this.report(r.team,"good",l?`${yr[n.kind]} passe au niveau ${n.level}.`:`${yr[n.kind]} est ${Un[n.kind]?"construit":"construite"}.`,"build")}continue}let o=t[n.kind].bed;if(!o)continue;let s=n.level<o.cap.length?n.level:o.cap.length-1,a=o.cap[s];n.store>=a||(n.store=Math.min(a,n.store+o.rate[s]/3600),n.store>=a&&!r.full&&(r.full=!0,this.report(r.team,"info","Tes extracteurs sont pleins : viens ramasser leur r\xE9colte.","full")))}}if(e.bands.length)for(let r of e.bands.slice())e.t>=r.at&&!this.locked(r.target)&&(e.bands.splice(e.bands.indexOf(r),1),this.bandArrives(r));for(let r of e.camps)!r.up&&r.back>0&&e.t>=r.back&&this.campBack(r);for(let r of e.armies)r.battle&&e.t>=r.battle.t0+z.raidLock&&this.raidEnd(r.team,[],-1);e.t<=z.gameT&&e.t%z.ladder.every===0&&this.payLadder(),this.over()||this.bots()}payLadder(){this.order().forEach((e,t)=>{let r=this.w.villages[e],n=this.storage(e).crystal-Math.floor(r.crystal),o=this.reward(t+1),s=Math.max(0,Math.min(n,o)),a=t?`${t+1}e place`:"1re place";r.crystal+=s,this.report(e,s?"good":"info",s===o?`Le classement te verse ${s} cristal (${a}).`:s?`Le classement te verse ${s} cristal sur ${o} (${a}) : tes r\xE9serves sont pleines.`:`Tes r\xE9serves sont pleines : les ${o} cristal du classement (${a}) sont perdus.`)})}campBack(e){let t=this.w,n=(t.sites.camps[e.owner]??[]).map((l,d)=>({p:l,i:d})).filter(({i:l})=>!t.camps.some(d=>d!==e&&d.owner===e.owner&&d.up&&d.site===l));if(!n.length){e.back=t.t+3600;return}let o=n[Math.floor(i.draw(t)*n.length)],s=C(t.villages[e.owner].buildings,"maison")||1,a=i.draw(t)*100<je[e.level];Object.assign(e,Ne(e.id,e.owner,o.i,o.p.x,o.p.z,e.level,s,a,()=>i.draw(t))),delete e.weak}sky(e){let t=this.order(),r=this.w;return{villages:r.villages.map(n=>({team:n.team,name:n.name,x:n.x,z:n.z,rank:t.indexOf(n.team)+1,trophies:n.trophies,...(o=>({loot:o.crystal,lootM:o.mushroom}))(this.lootable(n.team)),me:n.team===e,bot:!n.owner,locked:n.raidUntil>r.t&&n.raidBy>=0&&n.raidBy!==e})),camps:this.myCamps(e).map(n=>({id:n.id,level:n.level,x:n.x,z:n.z,pieces:n.pieces,palisade:n.palisade,locked:n.raidUntil>r.t&&n.raidBy>=0&&n.raidBy!==e}))}}};var Gn=16*3600,qn="La partie est termin\xE9e : le classement est arr\xEAt\xE9, viens voir ta place.",Je={v:0,villages:[]},Rr=i=>JSON.parse(JSON.stringify(i)),Qe=i=>{let e=Y.load(i);if(e)return e;throw i?.v===Je.v?new Error("Cette partie n\u2019est pas encore lanc\xE9e."):new Error("Cette partie a \xE9t\xE9 cr\xE9\xE9e par une version du jeu que celle-ci ne sait pas lire.")},jn=i=>new Promise(e=>setTimeout(e,i)),Ar=class{constructor(e,t,r,n,o=()=>Date.now()){y(this,"map",e);y(this,"camp",t);y(this,"backend",r);y(this,"team",n);y(this,"clock",o);y(this,"base",{version:0,state:null});y(this,"startedAt",0);y(this,"players",[]);y(this,"offset",0);y(this,"bestRtt",1/0);y(this,"pending",[]);y(this,"online",!0);y(this,"running",null);y(this,"onRefuse",null);y(this,"onChange",null)}skew(e,t,r){let n=r-t;n>this.bestRtt*1.5+50||(n<this.bestRtt&&(this.bestRtt=n),this.offset=e-(t+r)/2)}serverNow(){return this.clock()+this.offset}worldNow(){return Math.max(0,(this.serverNow()-this.startedAt)/1e3)}async start(){let e=this.clock(),t=await this.backend.load();this.skew(t.now,e,this.clock()),this.base={version:t.version,state:Qe(t.state)},this.startedAt=t.startedAt,this.players=t.players,this.rebuild()}rebuild(){let e=this.camp;e.w=Rr(this.base.state),e.frac=0,e.advanceTo(this.worldNow());for(let t of this.pending)e.apply(this.team,t);this.onChange?.()}tick(){this.camp.advanceTo(this.worldNow())}issue(e){this.tick();let t=this.camp.apply(this.team,e);return t.ok&&(this.pending.push(e),this.flush()),t}notesFor(e,t){let r=[...t,...Y.forecast(this.map,e,Gn).map(n=>({seat:n.team,t:n.t,kind:n.note,body:n.text}))];return[...r,...Vn(this.map,e,r)]}flush(){return this.running||(this.running=this.send().finally(()=>{this.running=null})),this.running}async send(){let e=1e3;for(;this.pending.length;){let t=this.pending[0],r=new Y(this.map,Rr(this.base.state));r.advanceTo(Math.max(r.w.t,Math.floor(this.worldNow())));let n=[];r.onReport=d=>{d.note&&n.push({seat:d.team,t:d.t,kind:d.note,body:d.text})};let o=r.apply(this.team,t);if(r.onReport=null,!o.ok){this.pending.shift(),this.onRefuse?.(t,o.why),this.rebuild();continue}let s=this.notesFor(r.w,n),a=this.clock(),l;try{l=await this.backend.commit(this.base.version,r.w,s)}catch{this.online=!1,await jn(e),e=Math.min(15e3,e*2);continue}this.online=!0,e=1e3,this.skew(l.now,a,this.clock()),l.ok?(this.base={version:l.version,state:r.w},this.pending.shift()):this.base={version:l.version,state:Qe(l.state)},this.rebuild()}}async poll(){if(this.running)return!1;let e,t=this.clock();try{e=await this.backend.poll()}catch{return this.online=!1,!1}if(this.online=!0,this.skew(e.now,t,this.clock()),e.version<=this.base.version)return!1;let r=await this.backend.load();return this.running||r.version<=this.base.version?!1:(this.base={version:r.version,state:Qe(r.state)},this.players=r.players,this.rebuild(),!0)}};function Vn(i,e,t=[]){let r=new Y(i,e),n=r.endsAt();return r.over()?[]:e.villages.filter(o=>o.owner&&!t.some(s=>s.seat===o.team&&s.kind==="end")).map(o=>({seat:o.team,t:n,kind:"end",body:qn}))}var Xn=globalThis.__PLANETOID_NET,V=Xn??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var Pr="planetoid-cle",et="planetoid-partie",Q={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}},Yn=i=>btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function Go(){let i=Q.get(Pr);return(!i||i.length<20)&&(i=Yn(crypto.getRandomValues(new Uint8Array(32))),Q.set(Pr,i)),i}async function qo(i){return"p"+[...new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i))).slice(0,8)].map(t=>t.toString(16).padStart(2,"0")).join("")}var jo=()=>{try{let i=Q.get(et);return i?JSON.parse(i):null}catch{return null}},Vo=i=>Q.set(et,JSON.stringify(i)),Xo=()=>Q.del(et),Yo=()=>Q.get("planetoid-nom")??"",Qo=i=>Q.set("planetoid-nom",i),Jo=()=>!!V.url&&!!V.key;function Qn(i){return/unknown game/.test(i)?"Aucune partie avec ce code.":/game full/.test(i)?"La partie est compl\xE8te.":/bad name/.test(i)?"Choisis un nom (24 lettres au plus).":/not a player/.test(i)?"Ce t\xE9l\xE9phone ne fait plus partie de cette partie : rejoins-la avec ton nom.":/only the creator/.test(i)?"Seul le cr\xE9ateur de la partie peut la lancer.":i}async function H(i,e={}){let t={apikey:V.key,"Content-Type":"application/json"};V.key.startsWith("sb_")||(t.Authorization=`Bearer ${V.key}`);let r;try{r=await fetch(`${V.url}/rest/v1/rpc/${i}`,{method:"POST",headers:t,body:JSON.stringify(e)})}catch{throw new Error("Pas de connexion au serveur.")}let n=await r.text();if(!r.ok){let o=n;try{o=JSON.parse(n).message??n}catch{}throw new Error(Qn(o))}return n?JSON.parse(n):null}var es=(i,e,t)=>H("planetoid_join",{p_secret:i,p_code:e,p_name:t}),ts=(i,e,t,r)=>H("planetoid_open",{p_secret:i,p_name:e,p_seed:t,p_seats:r,p_state:Je}),rs=(i,e)=>H("planetoid_lobby",{p_secret:i,p_game:e}),ns=(i,e,t)=>H("planetoid_launch",{p_secret:i,p_game:e,p_state:t}),Cr=class{constructor(e,t){y(this,"key",e);y(this,"game",t)}async load(){let e=await H("planetoid_state",{p_secret:this.key,p_game:this.game});return{version:e.version,state:e.state,startedAt:e.startedAt,now:e.now,players:e.players}}poll(){return H("planetoid_poll",{p_secret:this.key,p_game:this.game})}commit(e,t,r){return H("planetoid_commit",{p_secret:this.key,p_game:this.game,p_version:e,p_state:t,p_notes:r})}},Jn=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,ei=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;async function ti(){if(!("serviceWorker"in navigator)||!("PushManager"in window)||!("Notification"in window))return ei()&&!Jn()?"install":"unsupported";if(Notification.permission==="denied")return"denied";let i=await navigator.serviceWorker.getRegistration();return(i?await i.pushManager.getSubscription():null)&&Notification.permission==="granted"?"on":"off"}function ri(i){let e=atob(i.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((i.length+3)%4));return Uint8Array.from(e,t=>t.charCodeAt(0))}async function is(i){let e=await ti();if(e==="install"||e==="unsupported"||e==="denied")return e;if(await Notification.requestPermission()!=="granted")return Notification.permission==="denied"?"denied":"off";let t=await H("planetoid_vapid");if(!t&&(await fetch(`${V.url}/functions/v1/planetoid-push`,{method:"POST",mode:"no-cors"}).catch(()=>null),t=await H("planetoid_vapid"),!t))throw new Error("Le serveur des notifications ne r\xE9pond pas encore.");let r=await navigator.serviceWorker.ready,n=await r.pushManager.getSubscription();n||(n=await r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ri(t)}));let o=n.toJSON();return await H("planetoid_subscribe",{p_secret:i,p_endpoint:o.endpoint,p_p256dh:o.keys.p256dh,p_auth:o.keys.auth}),"on"}export{ni as a,ii as b,oi as c,K as d,Ie as e,Nr as f,ro as g,no as h,io as i,oo as j,so as k,nn as l,ao as m,lo as n,po as o,co as p,uo as q,mo as r,S as s,Ee as t,bo as u,xo as v,go as w,St as x,_t as y,wo as z,ko as A,yo as B,R as C,Ut as D,ke as E,Nt as F,Tt as G,ye as H,ve as I,un as J,C as K,ze as L,Le as M,Fe as N,fn as O,Yt as P,Qt as Q,Ue as R,mn as S,ne as T,De as U,tr as V,$e as W,Rn as X,pr as Y,qe as Z,Cn as _,cr as $,In as aa,Sn as ba,_n as ca,Zn as da,Kn as ea,Ye as fa,xr as ga,Pe as ha,Ce as ia,z as ja,Y as ka,Ar as la,Go as ma,qo as na,jo as oa,Vo as pa,Xo as qa,Yo as ra,Qo as sa,Jo as ta,es as ua,ts as va,rs as wa,ns as xa,Cr as ya,ti as za,is as Aa};
