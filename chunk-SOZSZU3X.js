import{a as w}from"./chunk-T7GJABOB.js";var oe=()=>document.documentElement.classList.contains("rot"),q=()=>window.__screen??{w:innerWidth,h:innerHeight},Ni=()=>oe()?q().h:q().w,Gi=()=>oe()?q().w:q().h;function ji(n,e){return oe()?{x:e,y:q().w-n}:{x:n,y:e}}function vr(){let n=(e,t,r)=>{Object.defineProperty(e,"clientX",{configurable:!0,enumerable:!0,get(){return oe()?r.call(this):t.call(this)}}),Object.defineProperty(e,"clientY",{configurable:!0,enumerable:!0,get(){return oe()?q().w-t.call(this):r.call(this)}})};for(let e of[MouseEvent,typeof Touch<"u"?Touch:null]){if(!e)continue;let t=Object.getOwnPropertyDescriptor(e.prototype,"clientX"),r=Object.getOwnPropertyDescriptor(e.prototype,"clientY");t?.get&&r?.get&&n(e.prototype,t.get,r.get)}}var Ge=window;Ge.__rotate||(Ge.__rotate=!0,vr());var je="./assets/lilita-BW72GA3X.woff2";var Ve="./assets/fredoka-3UPZTCSC.woff2";var qe="./assets/soldat-VD7AFEPS.webp";var Xe="./assets/archere-FKKFB2P7.webp";var Ye="./assets/recolteur-33TAN3DD.webp";var Qe="./assets/soldat-tete-AGMCDKZK.webp";var Je="./assets/colosse-JB5EJSFW.webp";var et="./assets/recolteur-tete-7BNM6UJ6.webp";var tt="./assets/pillard-333ZQL3C.webp";var he={soldat:qe,archere:Xe,recolteur:Ye,veteran:Je,pillard:tt,"soldat-tete":Qe,"recolteur-tete":et},k="#2a1709",it=3.6,f=(n=it)=>`stroke="${k}" stroke-width="${n}" stroke-linejoin="round" stroke-linecap="round"`,A=(n,e,t='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${n}" ${t}>${e.map(([r,i])=>`<stop offset="${r}" stop-color="${i}"/>`).join("")}</linearGradient>`,_r=[A("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),A("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',A("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',A("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),A("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),A("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),A("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),A("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),A("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),A("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),A("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),A("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),A("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),A("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),A("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),A("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),ce=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${f()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${f()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${f(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${f(3)}/>`,X=`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="var(--rc, #cfd5e2)" ${f()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".5"/>
    <path d="M16 58 L50 56 L58 30 L52 32 L46 50 L18 52 Z" fill="#000" opacity=".16"/>`,Or={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${f()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${f()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${f()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${k}" stroke-width="${it}" stroke-linecap="round"/>`,trophy:`
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
    <path d="M8 33 L11 30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`,"rune-soldat":`${X}<g transform="translate(32 33) scale(.42) rotate(38) translate(-32 -32)">${ce}</g>`,"rune-archere":`${X}
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="${k}" stroke-width="6" stroke-linecap="round"/>
    <path d="M22 16 C40 20 44 42 22 50" fill="none" stroke="url(#h-wood-x)" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M22 16 L22 50" stroke="${k}" stroke-width="1.6"/>
    <path d="M18 33 L44 33" stroke="${k}" stroke-width="3.2" stroke-linecap="round"/><path d="M44 33 L38 29 M44 33 L38 37" stroke="${k}" stroke-width="3" stroke-linecap="round"/>`,"rune-veteran":`${X}
    <path d="M28 26 L40 48" stroke="${k}" stroke-width="8" stroke-linecap="round"/><path d="M28 26 L40 48" stroke="url(#h-wood-x)" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M17 24 L27 14 L37 22 L27 32 Z" fill="url(#h-steel)" ${f(2.6)}/>`,"rune-pillard":`${X}
    <path d="M24 48 L38 20" stroke="${k}" stroke-width="7" stroke-linecap="round"/><path d="M24 48 L38 20" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <path d="M33 18 C38 12 46 14 48 20 C44 22 41 26 40 30 Z" fill="url(#h-steel)" ${f(2.6)}/>`,"rune-tour":`${X}
    <path d="M25 30 L39 30 L41 48 L23 48 Z" fill="url(#h-white)" ${f(2.6)}/>
    <path d="M21 22 L43 22 L43 30 L21 30 Z" fill="url(#h-wood)" ${f(2.6)}/>
    <path d="M18 23 L32 12 L46 23 Z" fill="url(#h-roof)" ${f(2.6)}/>`,"rune-mortier":`${X}
    <ellipse cx="32" cy="42" rx="14" ry="6" fill="url(#h-white)" ${f(2.6)}/>
    <path d="M24 40 C23 31 27 24 34 20 L41 30 C37 33 34 37 31 42 Z" fill="#4a4f5e" ${f(2.6)}/>
    <circle cx="44" cy="17" r="4" fill="#2b2f3a" ${f(2.2)}/>`,swords:`<g transform="rotate(-42 32 32)">${ce}</g><g transform="rotate(42 32 32)">${ce}</g>`,shovel:`
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
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${ce}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${f()}/>
    <path d="M10 50 L56 50" stroke="${k}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${f(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${f()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${f(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${f(2.4)}/>
    <path d="M32 32 L58 6" stroke="${k}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${k}" stroke-width="3" stroke-linejoin="round"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${f()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${f()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${f()}/>
    <circle cx="32" cy="18" r="4.5" fill="${k}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${k}"/>`,minus:`<path d="M16 32 L48 32" stroke="${k}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,plus:`<path d="M16 32 L48 32 M32 16 L32 48" stroke="${k}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32 M32 16 L32 48" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${f()}/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${f(3)}/>
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
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${f(2.4)}/>`,replay:`
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
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},S=(n,e="ic")=>`<svg class="${e}" aria-hidden="true"><use href="#i-${n}"/></svg>`,rt=!1;function Pe(){if(rt){document.querySelectorAll("img[data-art]").forEach(t=>{t.src=he[t.dataset.art],t.alt="",t.draggable=!1});return}rt=!0;let n=document.createElement("style");n.textContent=`@font-face{font-family:"Lilita";src:url(${je}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${Ve}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(n);let e=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${_r}</defs>`;for(let[t,r]of Object.entries(Or))e+=`<symbol id="i-${t}" viewBox="0 0 64 64" overflow="visible">${r}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${e}</svg>`),document.querySelectorAll("img[data-art]").forEach(t=>{t.src=he[t.dataset.art],t.alt="",t.draggable=!1})}var Wr=n=>`<span class="lvl"><svg viewBox="0 0 48 52"><defs><linearGradient id="lv${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e7b8"/><stop offset=".5" stop-color="#d9b25a"/><stop offset="1" stop-color="#a87a26"/></linearGradient></defs>
  <path d="M24 2 L45 14 L45 38 L24 50 L3 38 L3 14 Z" fill="url(#lv${n})" stroke="#26211b" stroke-width="3" stroke-linejoin="round"/><path d="M24 8 L39 17 L24 20 L9 17 Z" fill="#fff" opacity=".45"/></svg><span class="n">${n}</span></span>`,ue=(n,e,t,r,i="")=>`<div class="ctr ${n}">${i?`<span class="max n">${i}</span>`:""}<span class="track"><i style="width:${r}%"></i></span><span class="v n">${t}</span>${S(e)}</div>`,bn=`<button class="x"><span class="face">${S("close")}</span></button>`,xn=`<div class="hud">
  <div class="tl">${ue("cry","crystal","1 240",83,"Max 1 500")}${ue("mush","mushroom","860",57,"Max 1 500")}${ue("rune","rune","3",0)}</div>
  <div class="tc">${ue("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${S("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${S("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${S("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${S("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${S("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${S("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${S("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;var nt=`/* The interface of the fantasy village, direction A \xAB Pierre et or \xBB (validated 04/11), as a theme: every colour and
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
`;var ot=`/* A game page in the validated interface (direction A, GDD 04/11): what every page needs around the theme's
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
`;var st="./assets/thumb-caserne-QZA7KSDD.webp";var at="./assets/thumb-champi-VFSAERTF.webp";var lt="./assets/thumb-cristal-DYDVW2XR.webp";var dt="./assets/thumb-forge-CUZH2DZR.webp";var pt="./assets/thumb-maison-QP5FQHND.webp";var ct="./assets/thumb-mortier-5N3HR2GR.webp";var ht="./assets/thumb-reserve-XWPQUOHM.webp";var ut="./assets/thumb-grenier-OBZFKGDD.webp";var ft="./assets/thumb-muraille-UVYJVIR2.webp";var mt="./assets/thumb-tour-PLF3FIO2.webp";var Nn={caserne:st,champi:at,cristal:lt,forge:dt,grenier:ut,maison:pt,mortier:ct,muraille:ft,reserve:ht,tour:mt},bt=!1;function Gn(){if(bt){Pe();return}bt=!0;let n=document.createElement("style");n.textContent=`${nt}
${ot}`,document.head.prepend(n),document.body.dataset.theme="pierre",Pe()}function jn(n){n.querySelectorAll("img[data-art]").forEach(e=>{let t=he[e.dataset.art];t&&e.src!==t&&(e.src=t,e.alt="",e.draggable=!1)})}var Vn=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),qn=n=>String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,"\u202F"),jr=n=>{if(n=Math.max(0,n),n<60)return`${Math.ceil(n)} s`;let e=Math.round(n/60);return e<60?`${e} min`:`${Math.floor(e/60)} h ${String(e%60).padStart(2,"0")}`},Xn=n=>(n=Math.max(0,Math.floor(n)),n<1e3?String(n):n<1e4?`${String(Math.floor(n/100)/10).replace(".",",")} k`:`${Math.floor(n/1e3)} k`),Yn=n=>{if(n=Math.max(0,n),n<24*3600)return jr(n);let e=Math.floor(n/3600);return`${Math.floor(e/24)} j ${e%24} h`},Qn=n=>(n=Math.max(0,Math.ceil(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`);function Jn(n,e,t){let r=n.querySelector(".v");r.textContent!==e&&(r.textContent=e);let i=n.querySelector(".track i");i&&t!==void 0&&(i.style.width=`${Math.max(0,Math.min(100,t))}%`)}var eo=(n,e,t,r,i="")=>`<div class="ctr ${n}">${i?`<span class="max n">${i}</span>`:""}<span class="track">${r===void 0?"":`<i style="width:${r}%"></i>`}</span><span class="v n">${t}</span>${S(e)}</div>`;var io="./assets/icone-TVGJ5P4R.webp";var C={UNIT:1.25,THICK:.8,GATE:2.75,POST:1,HP:[0,300,500],GATE_HP:600,COST:20,UP:20},xt=()=>({posts:[],runs:[],next:1}),be=(n,e,t,r)=>Math.sqrt((t-n)*(t-n)+(r-e)*(r-e)),fe=(n,e)=>n.posts.find(t=>t.id===e);function Y(n,e){return[fe(n,e.a),fe(n,e.b)]}function se(n,e){if(e.gate)return 1;let[t,r]=Y(n,e);return Math.max(1,Math.round(be(t.x,t.z,r.x,r.z)/C.UNIT))}function gt(n){let e=[];for(let t of n.runs){let[r,i]=Y(n,t),o=se(n,t),s=t.gate?C.GATE_HP:C.HP[t.level]??C.HP[1];for(let a=0;a<o;a++)e.push({run:t.id,piece:a,x0:r.x+(i.x-r.x)*(a/o),z0:r.z+(i.z-r.z)*(a/o),x1:r.x+(i.x-r.x)*((a+1)/o),z1:r.z+(i.z-r.z)*((a+1)/o),gate:t.gate,hp:s})}return e}function wt(n,e){let t=C.THICK/2+.15;for(let r of n.runs){let[i,o]=Y(n,r);for(let s=0;s<=40;s++){let a=i.x+(o.x-i.x)*s/40,l=i.z+(o.z-i.z)*s/40;if(Math.abs(a-e.x)<e.size+t&&Math.abs(l-e.z)<e.size+t)return!0}}return!1}function kt(n,e){let t=n.runs.find(a=>a.id===e);if(!t)return[];let r=a=>{let[l,d]=Y(n,a),p=be(l.x,l.z,d.x,d.z)||1;return[(d.x-l.x)/p,(d.z-l.z)/p]},[i,o]=r(t),s=[t];for(let a=!0;a;){a=!1;for(let l of n.runs){if(s.includes(l))continue;let[d,p]=r(l);s.some(u=>u.a===l.a||u.a===l.b||u.b===l.a||u.b===l.b)&&Math.abs(i*p-o*d)<.05&&(s.push(l),a=!0)}}return s.map(a=>a.id)}var yt=n=>n.runs.reduce((e,t)=>e+(t.gate?0:se(n,t)),0);function qr(n,e,t,r,i,o,s,a){let l=(h,b,m,g,L,y)=>(m-h)*(y-b)-(g-b)*(L-h),d=l(n,e,t,r,i,o),p=l(n,e,t,r,s,a),c=l(i,o,s,a,n,e),u=l(i,o,s,a,t,r);return d*p<-1e-6&&c*u<-1e-6}function vt(n,e,t,r,i){if(be(e.x,e.z,t.x,t.z)<C.UNIT*.9||e.post!==void 0&&e.post===t.post)return"short";if(e.post!==void 0&&!fe(n,e.post)||t.post!==void 0&&!fe(n,t.post)||e.run!==void 0&&!n.runs.some(l=>l.id===e.run&&!l.gate)||t.run!==void 0&&!n.runs.some(l=>l.id===t.run&&!l.gate))return"none";for(let l of n.runs){let[d,p]=Y(n,l);if(e.post===d.id&&t.post===p.id||e.post===p.id&&t.post===d.id)return"there";if(!(l.id===e.run||l.id===t.run)&&qr(e.x,e.z,t.x,t.z,d.x,d.z,p.x,p.z))return"cross"}let s=C.THICK/2+.15;for(let l=0;l<=40;l++){let d=e.x+(t.x-e.x)*l/40,p=e.z+(t.z-e.z)*l/40;for(let c of r)if(Math.abs(d-c.x)<c.size+s&&Math.abs(p-c.z)<c.size+s)return"building"}let a=l=>r.some(d=>{let p=Math.max(0,Math.abs(l.x-d.x)-d.size),c=Math.max(0,Math.abs(l.z-d.z)-d.size);return p*p+c*c<=i*i});return!a(e)||!a(t)?"far":null}function me(n,e,t){let r={id:n.next++,x:e,z:t};return n.posts.push(r),r}function Xr(n,e,t,r){let i=n.runs.find(s=>s.id===e),o=me(n,t,r);return n.runs=n.runs.filter(s=>s!==i),n.runs.push({id:n.next++,a:i.a,b:o.id,gate:!1,level:i.level},{id:n.next++,a:o.id,b:i.b,gate:!1,level:i.level}),o.id}function Lt(n,e,t){let r=a=>a.post!==void 0?a.post:a.run!==void 0?Xr(n,a.run,a.x,a.z):me(n,a.x,a.z).id,i=r(e),o=r(t),s=n.next++;return n.runs.push({id:s,a:i,b:o,gate:!1,level:1}),s}function Mt(n,e,t,r){let i=n.runs.find(m=>m.id===e);if(!i||i.gate)return!1;let[o,s]=Y(n,i),a=be(o.x,o.z,s.x,s.z);if(a<C.GATE-.01)return!1;let l=(s.x-o.x)/a,d=(s.z-o.z)/a,p=Math.max(0,Math.min(a,(t-o.x)*l+(r-o.z)*d)),c=C.GATE/2,u=.6;p=Math.max(c,Math.min(a-c,p)),p-c>.01&&p-c<u&&(p=c+(p-c<u/2?0:u)),a-p-c>.01&&a-p-c<u&&(p=a-c-(a-p-c<u/2?0:u)),p=Math.max(c,Math.min(a-c,p)),n.runs=n.runs.filter(m=>m!==i);let h=p-c<.01?o:me(n,o.x+l*(p-c),o.z+d*(p-c)),b=a-p-c<.01?s:me(n,o.x+l*(p+c),o.z+d*(p+c));return h!==o&&n.runs.push({id:n.next++,a:o.id,b:h.id,gate:!1,level:i.level}),n.runs.push({id:n.next++,a:h.id,b:b.id,gate:!0,level:1}),b!==s&&n.runs.push({id:n.next++,a:b.id,b:s.id,gate:!1,level:i.level}),!0}function zt(n,e){let t=n.runs.find(r=>r.id===e);return t?(n.runs=n.runs.filter(r=>r!==t),n.posts=n.posts.filter(r=>n.runs.some(i=>i.a===r.id||i.b===r.id)),!0):!1}function Q(n,e,t,r=0){let i=n.h-r;return i>0&&Math.abs(e-n.x)<=i&&Math.abs(t-n.z)<=i}function $t(n,e,t,r,i=0){return Q(n,e,t,i+r)}var Yr=3600,P=60,Rt=[0,800,1200,1800,2700],Pt=[0,800,1200,1800,2700],Ct=n=>n.map(e=>e/4),$={maison:{size:2.8,hp:900,up:{1:{cost:{crystal:5e3},time:1*Yr}}},caserne:{size:3.2,hp:900,shop:{cost:{crystal:400},time:30,max:[0,1,1]},up:{1:{cost:{crystal:600},time:5*P},2:{cost:{crystal:1200},time:30*P}}},tour:{size:2,hp:600,shop:{cost:{crystal:350},time:30,max:[0,2,3]},up:{1:{cost:{crystal:350},time:5*P}}},mortier:{size:2.4,hp:800,shop:{cost:{crystal:1500},time:2*P,max:[0,1,1]},up:{1:{cost:{crystal:1500},time:15*P}}},cristal:{size:1.4,hp:300,shop:{cost:{crystal:150},time:10,max:[0,3,5]},up:{1:{cost:{crystal:300},time:2*P},2:{cost:{crystal:700},time:20*P},3:{cost:{crystal:1500},time:90*P}},bed:{res:"crystal",rate:Ct(Rt),cap:Rt}},champignons:{size:2.2,hp:300,shop:{cost:{crystal:200},time:10,max:[0,2,4]},up:{1:{cost:{crystal:350},time:2*P},2:{cost:{crystal:800},time:20*P},3:{cost:{crystal:1700},time:90*P}},bed:{res:"mushroom",rate:Ct(Pt),cap:Pt}},reserve:{size:2,hp:700,shop:{cost:{crystal:300},time:20,max:[0,2,3]},up:{1:{cost:{crystal:500},time:5*P},2:{cost:{crystal:1200},time:45*P}},vault:{res:"crystal",cap:[0,1500,3e3,5e3]}},grenier:{size:2,hp:700,shop:{cost:{crystal:300},time:20,max:[0,1,2]},up:{1:{cost:{crystal:500},time:5*P},2:{cost:{crystal:1200},time:45*P}},vault:{res:"mushroom",cap:[0,1500,3e3,5e3]}},forge:{size:2.4,hp:800,shop:{cost:{crystal:1500},time:5*P,max:[0,0,1]},up:{1:{cost:{crystal:3e3},time:45*P}}},sanctuaire:{size:2.4,hp:800,shop:{cost:{crystal:500},time:30,max:[0,1,1]},up:{1:{cost:{crystal:1500},time:10*P},2:{cost:{crystal:3500},time:45*P,needs:2}}}},At=n=>{let e=$[n.kind].bed;if(!e)return null;let t=Math.min(n.level,e.cap.length-1);return{res:e.res,rate:e.rate[t],cap:e.cap[t]}},Ce=n=>n>=2?{crystal:1500,mushroom:1500}:{crystal:1e3,mushroom:1e3};function It(n){let e={...Ce(I(n,"maison")||1)};for(let t of n){let r=$[t.kind].vault;r&&t.busy?.what!=="build"&&(e[r.res]+=r.cap[Math.min(t.level,r.cap.length-1)])}return e}var _t=(()=>{let n=($.caserne.shop?.max.length??1)-1,e=[0];for(let t=1;t<=n;t++){let r=0,i=0;for(let d of Object.keys($)){let p=d==="maison"?1:$[d].shop?.max[t]??0,c=2*$[d].size+2;r+=p*c*c,i+=p}let o=Math.sqrt(r),s=Math.ceil(i/3),a=Math.max(1,Math.floor(Math.sqrt(s))),l=Math.ceil(s/a);e.push(Math.round((4+a-1+l-1)*o/C.UNIT))}return e})(),ge=2,we=6,Ot=.6,Qr=80,Jr=26,le=6;function Ae(n){return{x:n.x,z:n.z,h:Jr}}function xe(n,e){let t=Math.max(0,Math.abs(n.x-e.x)-n.size-e.size),r=Math.max(0,Math.abs(n.z-e.z)-n.size-e.size);return Math.sqrt(t*t+r*r)}var ae=n=>({x:n.x,z:n.z,size:$[n.kind].size});function ei(n){let e=n.findIndex(i=>i.kind==="maison");if(e<0)return n.length===0;let t=new Set([e]),r=[e];for(;r.length;){let i=r.pop();for(let o=0;o<n.length;o++)!t.has(o)&&xe(ae(n[i]),ae(n[o]))<=we&&(t.add(o),r.push(o))}return t.size===n.length}function Ie(n,e,t,r,i,o,s=-1){let a={x:i,z:o,size:$[r].size},l=e[t].buildings.filter(p=>p.id!==s);if(l.length&&!l.some(p=>xe(a,ae(p))<=we))return"zone";if(l.some(p=>xe(a,ae(p))<Ot))return"overlap";let d=e[t].walls;if(d&&wt(d,a))return"wall";if(n.villages[t]&&!$t(Ae(n.villages[t]),i,o,a.size,le))return"edge";for(let p=0;p<e.length;p++)if(p!==t&&e[p].buildings.some(c=>xe(a,ae(c))<Qr))return"foe";for(let[p,c]of[[0,0],[-1,-1],[1,-1],[-1,1],[1,1]]){let[u,h]=n.cell(i+p*a.size,o+c*a.size);if(u<0||h<0||u>=n.G||h>=n.G||n.grid[h*n.G+u]!==1)return"ground"}return s>=0&&!ei([...l,{kind:r,x:i,z:o}])?"chain":null}function ti(n,e,t,r){let i=$[e].size;return Math.abs(t-n.x)<3+i&&r+i>n.z+$.maison.size&&r-i<n.z+17}var U=Math.SQRT1_2,ri=[[0,1],[U,U],[1,0],[U,-U],[0,-1],[-U,-U],[-1,0],[-U,U]];function Wt(n,e,t,r){let i=$[r].size,o=e[t].buildings,s=o.find(a=>a.kind==="maison")??o[0];for(let a of o){let l=$[a.kind].size+i+Ot+1.4;for(let[d,p]of ri){let c={x:Math.round((a.x+d*l)*2)/2,z:Math.round((a.z+p*l)*2)/2};if(!(s&&ti(s,r,c.x,c.z))&&!Ie(n,e,t,r,c.x,c.z))return c}}return null}var I=(n,e)=>n.reduce((t,r)=>r.kind===e&&r.busy?.what!=="build"?Math.max(t,r.level):t,0),ke=(n,e)=>n.filter(t=>t.kind===e).length,ye=n=>n.filter(e=>e.busy).length;var _e=1/20,ii=180,Zt=5,Bt=22,St=ii/_e,Oe={soldat:{hp:100,dmg:16,period:1,range:.9,speed:1.9,hitAt:11/30,ranged:!1},archere:{hp:60,dmg:11,period:1.3,range:5.2,speed:1.9,hitAt:16/30,ranged:!0},veteran:{hp:320,dmg:42,period:1.4,range:1,speed:1.6,hitAt:11/30,ranged:!1},pillard:{hp:55,dmg:10,period:1,range:.9,speed:2.8,hitAt:11/30,ranged:!1},brigand:{hp:80,dmg:13,period:1,range:.9,speed:1.8,hitAt:11/30,ranged:!1}},ni={tour:{min:0,max:13.5,period:1,dmg:20,blast:0,flight:0,arrow:!0},mortier:{min:4,max:14.5,period:4.2,dmg:46,blast:1.8,flight:1.7,arrow:!1}},oi=["reserve","cristal","champignons","tente"],E=(n,e,t)=>{let r=Math.max(0,Math.abs(e-n.x)-n.size),i=Math.max(0,Math.abs(t-n.z)-n.size);return Math.sqrt(r*r+i*i)},H=n=>Math.max(1,Math.round(n/_e)),Et=.4,F=.68,ve=.5,_=.5,G=1073741823,si=400,ai=1.6,Kt=[[1,0,10],[-1,0,10],[0,1,10],[0,-1,10],[1,1,14],[-1,1,14],[1,-1,14],[-1,-1,14]];function de(n,e,t){let r=n.x1-n.x0,i=n.z1-n.z0,o=r*r+i*i,s=o>0?Math.max(0,Math.min(1,((e-n.x0)*r+(t-n.z0)*i)/o)):0,a=e-n.x0-r*s,l=t-n.z0-i*s;return{d:Math.sqrt(a*a+l*l),t:s}}function li(n,e,t,r,i,o,s,a){let l=t-n,d=r-e,p=s-i,c=a-o,u=l*(o-e)-d*(i-n),h=l*(a-e)-d*(s-n);if(u*h>=0)return!1;let b=p*(e-o)-c*(n-i),m=p*(r-o)-c*(t-i);return b*m<0}function Ht(n,e,t,r,i){if(i&&!Q(i,e,t))return!1;let o=1/0;for(let s of n){if(s.dead)continue;let a=E(s,e,t);if(a<Zt)return!1;a<o&&(o=a)}if(r){for(let s of r)if(!s.dead&&de(s,e,t).d<1.2)return!1}return o<=Bt}var D=2,J=class{constructor(e){w(this,"input",e);w(this,"t",0);w(this,"units",[]);w(this,"blds");w(this,"shots",[]);w(this,"reserve",{soldat:[],archere:[],veteran:[],pillard:[],brigand:[]});w(this,"events",[]);w(this,"record",!1);w(this,"over",null);w(this,"retreatAt",-1);w(this,"ws");w(this,"posts");w(this,"seed");w(this,"nextId",0);w(this,"grid",null);w(this,"fields",new Map);this.seed=e.seed%2147483646+1,this.blds=e.buildings.map(r=>{let i=r.def?ni[r.def]:null,o=Math.round(r.hp*(r.mods?.hp??1));return{id:r.id,kind:r.kind,x:r.x,z:r.z,size:r.size,hp:o,max:o,dead:!1,def:i,defKind:r.def??null,cd:H(.6),dmgK:r.mods?.dmg??1,rangeK:r.mods?.range??1}}),this.ws=(e.walls??[]).map(r=>({...r,max:r.hp,dead:!1})),this.posts=(e.posts??[]).map(r=>({x:r.x,z:r.z})),this.ws.length&&(this.grid=this.makeGrid());for(let r of e.attackers)this.reserve[r.k].push(r.hp);let t=e.defenders.length;e.defenders.forEach((r,i)=>{let o=Math.floor(i/5),s=Math.min(5,t-o*5),a=i%5,l={x:e.rally.x+(a-(s-1)/2)*1.1,z:e.rally.z-o*1.1};this.spawn(1,r.k,r.hp,l.x,l.z,r.tag)})}rnd(){return this.seed=this.seed*16807%2147483647,this.seed/2147483647}emit(e){this.record&&this.events.push(e)}spawn(e,t,r,i,o,s){let a=Oe[t],l=(e?this.input.mods?.def:this.input.mods?.att)?.[t]??{},d=Math.round(a.hp*(l.hp??1)),p={id:this.nextId++,side:e,k:t,tag:s,x:i,z:o,hp:Math.min(d,Math.round(r*(l.hp??1))),max:d,dmg:a.dmg*(l.dmg??1),range:a.range*(l.range??1),speed:a.speed*(l.speed??1),period:a.period,hitAt:a.hitAt,ranged:a.ranged,tu:-1,tb:-1,tw:-1,blk:-1,rx:i,rz:o,rt:-99,cd:0,swing:-1,dealt:!1,dead:!1,deadAt:-1,mx:0,mz:0,home:{x:i,z:o}};return this.units.push(p),p}canDrop(e,t){return Ht(this.blds,e,t,this.ws,this.input.plot)}left(e){return this.reserve[e].length}drop(e,t,r){if(this.over||!this.reserve[e].length||!this.canDrop(t,r))return!1;let i=this.reserve[e].shift(),o=this.spawn(0,e,i,t+(this.rnd()-.5)*.4,r+(this.rnd()-.5)*.4,"raid");return this.emit({e:"drop",u:o.id}),!0}retreat(){this.over||(this.retreatAt=this.t,this.finish("retreat"))}step(){if(this.over)return;this.t++;let e=this.units,t=this.blds;for(let r of e){if(r.dead)continue;let i=r.tu>=0?e[r.tu]:null,o=r.tb>=0?t[r.tb]:null;(i&&i.dead||o&&o.dead||!i&&!o||(this.t+r.id)%6===0&&r.swing<0)&&this.choose(r)}for(let r of e)r.dead||this.act(r);this.separate();for(let r of t)!r.dead&&r.def&&this.fire(r);this.land(),this.end()}run(e,t=-1,r=St){let i=0;for(;!this.over;){for(;i<e.length&&e[i].t<=this.t;){let o=e[i++];this.drop(o.k,o.x,o.z)}if(t>=0&&this.t>=t&&this.retreat(),this.t>=r&&!this.over){this.finish("time");break}this.step()}return this.over}choose(e){let t=this.units,r=this.blds,i=-1,o=-1,s=1/0;if(e.side===0&&e.k==="veteran"){let a=this.ws,l=()=>r.some(c=>!c.dead&&c.def)||a.some(c=>!c.dead);if(e.tb>=0&&!r[e.tb].dead&&(r[e.tb].def||!l())||e.tb<0&&e.tw>=0&&!a[e.tw].dead)return;let p=-1;for(let c=0;c<r.length;c++){let u=r[c];if(u.dead||!u.def)continue;let h=E(u,e.x,e.z);h<s&&(s=h,o=c)}for(let c=0;c<a.length;c++){let u=a[c];if(u.dead)continue;let h=de(u,e.x,e.z).d-Et;h<s&&(s=h,p=c,o=-1)}if(o<0&&p<0)for(let c=0;c<r.length;c++){let u=r[c];if(u.dead)continue;let h=E(u,e.x,e.z);h<s&&(s=h,o=c)}e.tu=-1,e.tb=o,e.tw=p,e.blk=-1;return}else if(e.side===0&&e.k==="pillard"){let a=d=>oi.includes(d.kind);if(e.tb>=0&&!r[e.tb].dead&&(a(r[e.tb])||!r.some(d=>!d.dead&&a(d))))return;for(let d=0;d<r.length;d++){let p=r[d];if(p.dead||!a(p))continue;let c=E(p,e.x,e.z);c<s&&(s=c,o=d)}if(o<0)for(let d=0;d<r.length;d++){let p=r[d];if(p.dead)continue;let c=E(p,e.x,e.z);c<s&&(s=c,o=d)}e.tu=-1,e.tb=o,e.tw=-1,e.blk=-1;return}else if(e.side===0){for(let l=0;l<t.length;l++){let d=t[l];if(d.dead||d.side===0)continue;let p=d.x-e.x,c=d.z-e.z,u=Math.sqrt(p*p+c*c);u<s&&(s=u,i=l,o=-1)}for(let l=0;l<r.length;l++){let d=r[l];if(d.dead)continue;let p=E(d,e.x,e.z);p<s&&(s=p,o=l,i=-1)}let a=e.tu>=0&&!t[e.tu].dead?this.distU(e,t[e.tu]):e.tb>=0&&!r[e.tb].dead?E(r[e.tb],e.x,e.z):1/0;if(a<1/0&&a<=s+1.2)return}else{for(let a=0;a<t.length;a++){let l=t[a];if(l.dead||l.side===1||!this.nearHome(l))continue;let d=l.x-e.x,p=l.z-e.z,c=Math.sqrt(d*d+p*p);c<s&&(c<=e.range||this.wallAcross(e.x,e.z,l.x,l.z,1)<0)&&(s=c,i=a)}if(e.tu>=0&&!t[e.tu].dead&&this.nearHome(t[e.tu])&&this.distU(e,t[e.tu])<=s+1.2)return}(i!==e.tu||o!==e.tb)&&(e.tw=-1,e.blk=-1),e.tu=i,e.tb=o}nearestBld(e,t){let r=-1,i=1/0;for(let o=0;o<this.blds.length;o++){let s=this.blds[o];if(s.dead)continue;let a=E(s,e,t);a<i&&(i=a,r=o)}return r}distU(e,t){let r=t.x-e.x,i=t.z-e.z;return Math.sqrt(r*r+i*i)}nearHome(e){for(let t of this.blds)if(!t.dead&&E(t,e.x,e.z)<12)return!0;return!1}act(e){let t=e.tu>=0?this.units[e.tu]:null,r=e.tb>=0?this.blds[e.tb]:null;e.cd--,e.mx=0,e.mz=0;let i,o,s;if(t&&!t.dead)i=t.x,o=t.z,s=this.distU(e,t);else if(r&&!r.dead)i=Math.max(r.x-r.size,Math.min(r.x+r.size,e.x)),o=Math.max(r.z-r.size,Math.min(r.z+r.size,e.z)),s=E(r,e.x,e.z);else if(e.tw>=0&&!this.ws[e.tw].dead)i=e.x,o=e.z,s=1/0;else{if(e.side===1){let d=e.home.x-e.x,p=e.home.z-e.z;this.walk(e,e.home.x,e.home.z,Math.sqrt(d*d+p*p),.3)}e.swing=-1;return}let a=e.range*.9;if(e.tw>=0&&this.ws[e.tw].dead&&(e.tw=-1),e.tw<0&&s>e.range&&this.grid&&e.side===0&&e.swing<0&&((e.blk<0||(this.t+e.id)%6===0)&&(e.blk=this.wallAcross(e.x,e.z,i,o,0)>=0?1:0),e.blk===1)){if(this.t-e.rt>=4){e.rt=this.t;let d=t?this.nearestBld(t.x,t.z):e.tb,p=d>=0?this.route(e,d):null;if(p&&p.w<0)e.rx=p.x,e.rz=p.z;else{let c=p?p.w:this.wallAcross(e.x,e.z,i,o,0);c>=0?e.tw=c:(e.rx=i,e.rz=o)}}e.tw<0&&(i=e.rx,o=e.rz,s=Math.sqrt((i-e.x)*(i-e.x)+(o-e.z)*(o-e.z)),a=0)}let l=e.tw>=0?this.ws[e.tw]:null;if(l){let d=de(l,e.x,e.z);i=l.x0+(l.x1-l.x0)*d.t,o=l.z0+(l.z1-l.z0)*d.t,s=Math.max(0,d.d-Et),a=e.range*.9}if(e.swing>=0){e.swing++,!e.dealt&&e.swing>=H(e.hitAt)&&(e.dealt=!0,e.ranged?this.loose(e,l?null:t,l?null:r,l?e.tw:-1,i,o):s<e.range+.4&&(l?this.hurtW(l,e.dmg):t&&!t.dead?this.hurt(t,e.dmg):r&&!r.dead&&this.hurtB(r,e.dmg))),e.swing>=H(e.period*.9)&&(e.swing=-1);return}if(s<=e.range&&(l||a>0)){e.cd<=0&&(e.swing=0,e.dealt=!1,e.cd=H(e.period*(.9+this.rnd()*.2)),this.emit({e:"swing",u:e.id}));return}this.walk(e,i,o,s,a)}walk(e,t,r,i,o){if(i<=o+1e-6)return;let s=Math.min(i-o,e.speed*_e),a=Math.sqrt((t-e.x)*(t-e.x)+(r-e.z)*(r-e.z))||1;e.mx=(t-e.x)/a*s,e.mz=(r-e.z)/a*s,e.x+=e.mx,e.z+=e.mz}separate(){let e=this.units.filter(i=>!i.dead),t=.62;for(let i=0;i<e.length;i++)for(let o=i+1;o<e.length;o++){let s=e[i],a=e[o],l=a.x-s.x,d=a.z-s.z;if(l>t||l<-t||d>t||d<-t)continue;let p=Math.sqrt(l*l+d*d);if(p>1e-6&&p<t){let c=(t-p)/2,u=l/p,h=d/p,b=s.swing>=0?.3:1,m=a.swing>=0?.3:1;s.x-=u*c*b,s.z-=h*c*b,a.x+=u*c*m,a.z+=h*c*m}}for(let i of e)for(let o of this.blds){if(o.dead)continue;let s=o.size+.3,a=Math.abs(i.x-o.x)-s,l=Math.abs(i.z-o.z)-s;a<0&&l<0&&(a>l?i.x=o.x+(i.x>=o.x?s:-s):i.z=o.z+(i.z>=o.z?s:-s))}if(!this.ws.length)return;let r=this.grid;for(let i of e){let o=Math.floor((i.x-r.x0)/D),s=Math.floor((i.z-r.z0)/D),a=o>=0&&s>=0&&o<r.bn&&s<r.bm?r.bucket[s*r.bn+o]:[];for(let l of a){let d=this.ws[l];if(d.dead||d.gate&&i.side===1||i.x<Math.min(d.x0,d.x1)-F||i.x>Math.max(d.x0,d.x1)+F||i.z<Math.min(d.z0,d.z1)-F||i.z>Math.max(d.z0,d.z1)+F)continue;let p=d.x1-d.x0,c=d.z1-d.z0,u=p*p+c*c;if(u<1e-9)continue;let h=((i.x-d.x0)*p+(i.z-d.z0)*c)/u,b=Math.sqrt(u),m=(d.ext??0)/b;if(h<-m||h>1+m)continue;let g=-c/b,L=p/b,y=(i.x-d.x0)*g+(i.z-d.z0)*L;if(y>=F||y<=-F)continue;let x=y>1e-6?1:y<-1e-6||i.mx*g+i.mz*L>0?-1:1;i.x+=g*(x*F-y),i.z+=L*(x*F-y)}for(let l of this.posts){let d=i.x-l.x,p=i.z-l.z,c=ve+.28;if(d>c||d<-c||p>c||p<-c)continue;let u=Math.sqrt(d*d+p*p);u<c&&(u>1e-6?(i.x=l.x+d/u*c,i.z=l.z+p/u*c):i.x=l.x+c)}}}loose(e,t,r,i,o,s){let a=Math.sqrt((o-e.x)*(o-e.x)+(s-e.z)*(s-e.z)),l={kind:"arrow",from:e.id,fromBld:-1,x0:e.x,z0:e.z,x:o,z:s,t0:this.t,land:this.t+H(a/13),dmg:e.dmg,tu:t?t.id:-1,tb:r?this.blds.indexOf(r):-1,tw:i,side:e.side,blast:0};this.shots.push(l),this.emit({e:"shot",s:l})}fire(e){if(--e.cd>0)return;let t=e.def,r=t.max*e.rangeK,i=null,o=1/0;for(let d of this.units){if(d.dead||d.side!==0)continue;let p=d.x-e.x,c=d.z-e.z,u=Math.sqrt(p*p+c*c);u<t.min||u>r||u<o&&(o=u,i=d)}if(!i){e.cd=H(.25);return}e.cd=H(t.period);let s=t.arrow?o/13:t.flight,a=t.arrow?0:H(s),l={kind:t.arrow?"arrow":"ball",from:-1,fromBld:this.blds.indexOf(e),x0:e.x,z0:e.z,x:i.x+i.mx*a,z:i.z+i.mz*a,t0:this.t,land:this.t+H(s),dmg:t.dmg*e.dmgK,tu:t.arrow?i.id:-1,tb:-1,tw:-1,side:1,blast:t.blast};this.shots.push(l),this.emit({e:"shot",s:l})}land(){for(let e=this.shots.length-1;e>=0;e--){let t=this.shots[e];if(!(t.land>this.t)){if(this.shots.splice(e,1),t.kind==="ball"){this.emit({e:"blast",x:t.x,z:t.z});for(let r of this.units){if(r.dead||r.side===t.side)continue;let i=Math.sqrt((r.x-t.x)*(r.x-t.x)+(r.z-t.z)*(r.z-t.z));i<t.blast&&this.hurt(r,t.dmg*(1-.5*i/t.blast))}}else if(t.tu>=0){let r=this.units[t.tu];r.dead||this.hurt(r,t.dmg)}else if(t.tb>=0){let r=this.blds[t.tb];r.dead||this.hurtB(r,t.dmg)}else if(t.tw>=0){let r=this.ws[t.tw];r.dead||this.hurtW(r,t.dmg)}}}}hurt(e,t){e.hp-=t,this.emit({e:"hit",u:e.id,dmg:t}),e.hp<=0&&(e.hp=0,e.dead=!0,e.deadAt=this.t,e.swing=-1,this.emit({e:"death",u:e.id}))}hurtB(e,t){if(e.hp-=t,this.emit({e:"hitB",b:this.blds.indexOf(e),dmg:t}),e.hp<=0){e.hp=0,e.dead=!0,this.emit({e:"fall",b:this.blds.indexOf(e)});for(let r of this.units)r.tb>=0&&this.blds[r.tb]===e&&(r.tb=-1);this.rethink()}}hurtW(e,t){if(e.hp-=t,this.emit({e:"hitW",w:this.ws.indexOf(e),dmg:t}),e.hp<=0){e.hp=0,e.dead=!0,this.emit({e:"fallW",w:this.ws.indexOf(e)});for(let r of this.units)r.tw>=0&&this.ws[r.tw]===e&&(r.tw=-1);this.rethink()}}rethink(){if(this.grid){this.fields.clear();for(let e of this.units)e.blk=-1,e.rt=-99}}wallAcross(e,t,r,i,o){let s=-1,a=1/0,l=Math.min(e,r),d=Math.max(e,r),p=Math.min(t,i),c=Math.max(t,i);for(let u=0;u<this.ws.length;u++){let h=this.ws[u];if(h.dead||h.gate&&o===1||h.x0<l&&h.x1<l||h.x0>d&&h.x1>d||h.z0<p&&h.z1<p||h.z0>c&&h.z1>c||!li(e,t,r,i,h.x0,h.z0,h.x1,h.z1))continue;let b=de(h,e,t);b.d<a&&(a=b.d,s=u)}return s}makeGrid(){let e=1/0,t=1/0,r=-1/0,i=-1/0;for(let h of this.blds)e=Math.min(e,h.x-h.size),r=Math.max(r,h.x+h.size),t=Math.min(t,h.z-h.size),i=Math.max(i,h.z+h.size);for(let h of this.ws)e=Math.min(e,h.x0,h.x1),r=Math.max(r,h.x0,h.x1),t=Math.min(t,h.z0,h.z1),i=Math.max(i,h.z0,h.z1);let o=Bt+3;e=Math.floor(e-o),t=Math.floor(t-o);let s=Math.ceil((r+o-e)/_),a=Math.ceil((i+o-t)/_),l=Math.ceil(s*_/D),d=Math.ceil(a*_/D),p={x0:e,z0:t,n:s,m:a,wall:new Int32Array(s*a).fill(-1),bld:new Int32Array(s*a).fill(-1),post:new Uint8Array(s*a),bn:l,bm:d,bucket:Array.from({length:l*d},()=>[])};this.ws.forEach((h,b)=>{let m=F+.1,g=Math.max(0,Math.floor((Math.min(h.x0,h.x1)-m-e)/D)),L=Math.min(l-1,Math.floor((Math.max(h.x0,h.x1)+m-e)/D)),y=Math.max(0,Math.floor((Math.min(h.z0,h.z1)-m-t)/D)),x=Math.min(d-1,Math.floor((Math.max(h.z0,h.z1)+m-t)/D));for(let M=y;M<=x;M++)for(let R=g;R<=L;R++)p.bucket[M*l+R].push(b)});let c=new Float64Array(s*a).fill(1/0),u=(h,b,m,g,L,y)=>{let x=Math.max(0,Math.floor((Math.min(h,m)-L-e)/_)),M=Math.min(s-1,Math.floor((Math.max(h,m)+L-e)/_)),R=Math.max(0,Math.floor((Math.min(b,g)-L-t)/_)),z=Math.min(a-1,Math.floor((Math.max(b,g)+L-t)/_));for(let W=R;W<=z;W++)for(let O=x;O<=M;O++)y(W*s+O,e+(O+.5)*_,t+(W+.5)*_)};this.ws.forEach((h,b)=>u(h.x0,h.z0,h.x1,h.z1,.5,(m,g,L)=>{let y=de(h,g,L).d;y<=.45&&y<c[m]&&(c[m]=y,p.wall[m]=b)})),this.blds.forEach((h,b)=>u(h.x-h.size,h.z-h.size,h.x+h.size,h.z+h.size,0,(m,g,L)=>{p.bld[m]<0&&Math.abs(g-h.x)<h.size&&Math.abs(L-h.z)<h.size&&(p.bld[m]=b)}));for(let h of this.posts)u(h.x,h.z,h.x,h.z,ve,(b,m,g)=>{Math.abs(m-h.x)<=ve&&Math.abs(g-h.z)<=ve&&(p.post[b]=1)});return p}extra(e,t){let r=this.grid;if(r.post[e])return G;let i=r.wall[e];if(i>=0&&!this.ws[i].dead)return Math.round(this.ws[i].hp*ai);let o=r.bld[e];return o>=0&&o!==t&&!this.blds[o].dead?si:0}field(e){let t=this.fields.get(e);if(t)return t;let r=this.grid,i=r.n*r.m,o=new Int32Array(i).fill(G),s=this.blds[e],a=[],l=p=>{let c=a.length;for(a.push(p);c>0;){let u=c-1>>1;if(a[u]<=p)break;a[c]=a[u],c=u}a[c]=p},d=()=>{let p=a[0],c=a.pop();if(a.length){let u=0;for(;;){let h=2*u+1,b=h+1,m=u,g=c;if(h<a.length&&a[h]<g&&(m=h,g=a[h]),b<a.length&&a[b]<g&&(m=b),m===u)break;a[u]=a[m],u=m}a[u]=c}return p};for(let p=0;p<i;p++){if(r.post[p])continue;let c=r.wall[p];if(c>=0&&!this.ws[c].dead)continue;let u=p%r.n,h=(p-u)/r.n;E(s,r.x0+(u+.5)*_,r.z0+(h+.5)*_)<=.75&&(o[p]=0,l(p))}for(;a.length;){let p=d(),c=p%i,u=(p-c)/i;if(u>o[c])continue;let h=this.extra(c,e);if(h>=G)continue;let b=c%r.n,m=(c-b)/r.n;for(let[g,L,y]of Kt){let x=b+g,M=m+L;if(x<0||M<0||x>=r.n||M>=r.m)continue;let R=M*r.n+x,z=u+y+h;z<o[R]&&(o[R]=z,l(z*i+R))}}return this.fields.set(e,o),o}route(e,t){let r=this.grid,i=Math.floor((e.x-r.x0)/_),o=Math.floor((e.z-r.z0)/_);if(i<0||o<0||i>=r.n||o>=r.m)return null;let s=this.field(t),a=u=>{let h=u%r.n;return{x:r.x0+(h+.5)*_,z:r.z0+((u-h)/r.n+.5)*_}},l=(u,h)=>{let b=u%r.n,m=(u-b)/r.n;for(let[g,L,y]of Kt){let x=b+g,M=m+L;x>=0&&M>=0&&x<r.n&&M<r.m&&h(M*r.n+x,y)}},d=o*r.n+i,p=r.wall[d];if(p>=0&&!this.ws[p].dead){let u=this.ws[p],h=(L,y)=>(u.x1-u.x0)*(y-u.z0)-(u.z1-u.z0)*(L-u.x0),b=h(e.x,e.z),m=-1,g=1/0;l(d,L=>{let y=r.wall[L];if(y>=0&&!this.ws[y].dead||r.post[L])return;let x=a(L);if(h(x.x,x.z)*b<=0)return;let M=(x.x-e.x)*(x.x-e.x)+(x.z-e.z)*(x.z-e.z);M<g&&(g=M,m=L)}),m>=0&&(d=m)}let c=[];for(let u=0;u<6;u++){let h=-1,b=G;if(l(d,(g,L)=>{let y=this.extra(g,t);if(y>=G||s[g]>=G)return;let x=s[g]+L+y;x<b&&(b=x,h=g)}),h<0||s[h]>=s[d]&&s[d]<G)break;let m=r.wall[h];if(m>=0&&!this.ws[m].dead){if(!c.length)return{...a(h),w:m};break}if(c.push(h),d=h,s[d]===0)break}for(let u=c.length-1;u>=0;u--){let h=a(c[u]);if(this.wallAcross(e.x,e.z,h.x,h.z,0)<0)return{x:h.x,z:h.z,w:-1}}return c.length?{...a(c[0]),w:-1}:null}end(){let e=this.units.some(r=>!r.dead&&r.side===0),t=Object.values(this.reserve).some(r=>r.length);this.blds.every(r=>r.dead)?this.finish("razed"):!e&&!t&&this.units.some(r=>r.side===0)?this.finish("wiped"):this.t>=St&&this.finish("time")}finish(e){let t=this.units.filter(s=>!s.dead),r=[...t.filter(s=>s.side===0).map(s=>({k:s.k,hp:Math.round(s.hp/(this.input.mods?.att?.[s.k]?.hp??1))})),...Object.keys(this.reserve).flatMap(s=>this.reserve[s].map(a=>({k:s,hp:a})))],i=t.filter(s=>s.side===1).map(s=>({k:s.k,hp:Math.round(s.hp/(this.input.mods?.def?.[s.k]?.hp??1)),tag:s.tag})),o=this.input.defenders.map((s,a)=>{let l=this.units[a];return l.dead?0:Math.round(l.hp/(this.input.mods?.def?.[l.k]?.hp??1))});this.over={survivors:r,left:i,defHp:o,down:this.blds.filter(s=>s.dead).map(s=>s.id),lost:this.units.filter(s=>s.side===0&&s.dead).length,killed:this.units.filter(s=>s.side===1&&s.dead).length,why:e,t:this.t}}};function We(n,e){let t=n.buildings,r={x:e.x,z:e.z},i=a=>t.reduce((l,d)=>{let p=E(d,a.x,a.z);return p<l.g?{b:d,g:p}:l},{b:t[0],g:1/0}),o=(a,l)=>Ht(t,a,l,n.walls,n.plot);for(let a=0;a<400&&!o(r.x,r.z);a++){let l=i(r),d=l.b.x-r.x,p=l.b.z-r.z,c=Math.sqrt(d*d+p*p)||1,u=l.g>Zt?.5:-.5;r={x:r.x+d/c*u,z:r.z+p/c*u}}let s=[];return n.attackers.forEach((a,l)=>{let d=Math.floor(l/6),p=l%6,c=[[0,0],[.8,0],[-.8,0],[.4,.7],[-.4,.7],[0,-.8]][p],u={x:r.x+c[0]*(1+d),z:r.z+c[1]*(1+d)};o(u.x,u.z)||(u=r),s.push({t:1+l*2,k:a.k,x:u.x,z:u.z})}),s}var Se=["soldat","archere","veteran","tour","mortier","pillard"],di={soldat:"soldat",archere:"arch\xE8re",veteran:"colosse",tour:"tour d\u2019archers",mortier:"mortier",pillard:"pillard"},Ft=[.05,.1,.2,.35],pi=["commune","rare","\xE9pique","l\xE9gendaire"],ci={dmg:"d\xE9g\xE2ts",hp:"points de vie",speed:"vitesse",range:"port\xE9e"},hi=3,Ut=n=>Math.max(0,Math.min(hi,n)),ui=["dmg","hp","range"],fi={facile:[70,22,7,1],moyen:[55,30,12,3],difficile:[40,32,20,8]},Ee={facile:25,moyen:50,difficile:80},Dt=n=>/^b\d+$/.test(n);function ee(n,e){let t={dmg:1,hp:1,speed:1,range:1};for(let r of(n??[]).slice(0,Math.max(0,e)))t[r.stat]+=Ft[r.rarity];return t}function Ke(n,e){return{soldat:ee(n.soldat,e),archere:ee(n.archere,e),veteran:ee(n.veteran,e),pillard:ee(n.pillard,e)}}function Tt(n,e,t,r,i){let o=fi[e],s=t*100,a=0,l=0;for(let c=0;c<4;c++)if(a+=o[c],s<a){l=c;break}let d=Se[Math.min(Se.length-1,Math.floor(i*Se.length))],p=d==="tour"||d==="mortier"?ui:["dmg","hp","speed","range"];return{id:n,stat:p[Math.min(p.length-1,Math.floor(r*p.length))],rarity:l,for:d}}var Nt=(n,e)=>n.for===e,mi=n=>/^[aeiouéèêh]/i.test(n)?`d\u2019${n}`:`de ${n}`,Gt=n=>`une rune ${pi[n.rarity]} ${mi(di[n.for])} (+${Math.round(Ft[n.rarity]*100)} % ${ci[n.stat]})`;function qt(n){let e=n*n,t=1,r=1;for(let i=9;i>=1;i--)t=1-e/(2*i*(2*i+1))*t,r=1-e/((2*i-1)*(2*i))*r;return[n*t,r]}var Xt=["facile","moyen","difficile"],re={tente:{size:1.6,hp:320},tour:{size:2,hp:600,def:"tour"},mortier:{size:2.4,hp:800,def:"mortier"}},bi={facile:300,moyen:500,difficile:800},xi={facile:250,moyen:450,difficile:700},Yt={facile:[{tente:1,tour:1,mortier:0,def:1,loot:100},{tente:2,tour:2,mortier:0,def:2,loot:160}],moyen:[{tente:2,tour:2,mortier:0,def:1,loot:100},{tente:3,tour:2,mortier:1,def:2,loot:160}],difficile:[{tente:2,tour:2,mortier:1,def:1,loot:100},{tente:3,tour:3,mortier:1,def:2,loot:160}]},Me={min:3*3600,max:5*3600},jt={dmg:.15,hp:.4},Qt=n=>Math.max(1,Math.min(Math.floor(n)||1,Yt.facile.length)),ze=(n,e)=>Yt[n][Qt(e)-1],T={GAP:1,MARGIN:1.2,R_MIN:6,R_MAX:11,LANE:{half:1.6,from:3.4}},gi={mortier:[0,.8],tour:[2.6,4],alone:[0,1.2],tente:[3.2,4.6]},wi=Array.from({length:16},(n,e)=>qt(-Math.PI+Math.PI*e/8)),te=n=>Math.round(n*20)/20,Jt=n=>{let e=Math.abs(n.dx)+n.size,t=Math.abs(n.dz)+n.size;return Math.sqrt(e*e+t*t)},ki=(n,e)=>Math.max(Math.abs(n.dx-e.dx),Math.abs(n.dz-e.dz))-n.size-e.size,Vt=(n,e,t)=>Math.abs(n)-t>=T.LANE.half||e+t<=T.LANE.from,pe=n=>Math.max(T.R_MIN,Math.ceil((n.reduce((e,t)=>Math.max(e,Jt(t)),0)+T.MARGIN)*4)/4);function yi(n,e,t){let r=ze(n,e),i=[...Array(r.mortier).fill("mortier"),...Array(r.tour).fill("tour"),...Array(r.tente).fill("tente")],o=(d,p,c,u)=>{let h=re[p];return h.def?{id:d,kind:p,dx:c,dz:u,size:h.size,hp:h.hp,def:h.def}:{id:d,kind:p,dx:c,dz:u,size:h.size,hp:h.hp}},s=T.R_MAX-T.MARGIN;for(let d=0;d<24;d++){let p=[];for(let x of i){let M=re[x].size,[R,z]=gi[x==="tour"&&!r.mortier?"alone":x],W=Math.floor(t()*16),O=R+t()*(z-R),K=null;for(let Z=O;!K&&Z<=s;Z+=.4)for(let ie=0;ie<16&&!K;ie++){let[wr,kr]=wi[(W+(ie%2?(ie+1)/2:16-ie/2))%16],ne=o(p.length+1,x,te(wr*Z),te(kr*Z));Jt(ne)<=s&&Vt(ne.dx,ne.dz,M)&&p.every(yr=>ki(yr,ne)>=T.GAP-1e-9)&&(K=ne)}if(!K)break;p.push(K)}if(p.length!==i.length)continue;let c=1/0,u=-1/0,h=1/0,b=-1/0;for(let x of p)c=Math.min(c,x.dx-x.size),u=Math.max(u,x.dx+x.size),h=Math.min(h,x.dz-x.size),b=Math.max(b,x.dz+x.size);let m=te(-(c+u)/2),g=te(-(h+b)/2),L=p.map(x=>({...x,dx:te(x.dx+m),dz:te(x.dz+g)})),y=L.every(x=>Vt(x.dx,x.dz,x.size))&&pe(L)<pe(p)?L:p;return{pieces:y,palisade:pe(y)}}let a=[[0,0],[-5.4,0],[5.4,0],[0,-5.4],[-5,-5],[5,-5],[-5,5],[5,5]],l=i.map((d,p)=>o(p+1,d,...a[Math.min(p,a.length-1)]));return{pieces:l,palisade:Math.min(T.R_MAX,pe(l))}}function er(){let n=[{id:1,kind:"tour",dx:2.4,dz:-1.4,size:re.tour.size,hp:re.tour.hp,def:"tour"},{id:2,kind:"tente",dx:-2.3,dz:-1,size:re.tente.size,hp:re.tente.hp}];return{pieces:n,palisade:pe(n)}}function vi(n){let e=Math.abs(Math.floor(n))%2147483646+1;return()=>(e=e*16807%2147483647,e/2147483647)}function Ze(n,e,t,r,i,o,s,a,l=vi(n*7919+t)){let d=Qt(s),p=yi(o,d,l),c=Math.round(bi[o]*ze(o,d).loot/100);return{id:n,owner:e,site:t,x:r,z:i,level:o,tier:d,pieces:p.pieces,palisade:p.palisade,up:!0,back:0,down:[],loot:c,food:tr(o,d),rune:a,raidBy:-1,raidUntil:0}}var tr=(n,e)=>Math.round(xi[n]*ze(n,e).loot/100);function rr(n,e,t){let r=n.pieces.filter(s=>s.kind==="tente"),i=r.findIndex(s=>s.id===e);if(i<0||n.down.includes(e))return 0;let o=Math.floor(t/r.length);return i===r.length-1?t-o*(r.length-1):o}var Be=(n,e)=>rr(n,e,n.loot),He=(n,e)=>rr(n,e,n.food??tr(n.level,n.tier)),Le={OPEN:.42,PIECE:1.25,HP:400};function Li(n){let e=n.palisade,t=2*Math.PI-2*Le.OPEN,r=Math.max(1,Math.round(e*t/Le.PIECE)),i=s=>{let a=Le.OPEN+t*s/r;a>Math.PI&&(a-=2*Math.PI);let[l,d]=qt(a);return{x:n.x+l*e,z:n.z+d*e}},o=[];for(let s=0;s<r;s++){let a=i(s),l=i(s+1);o.push({x0:a.x,z0:a.z,x1:l.x,z1:l.z,hp:Le.HP,gate:!1,run:0,piece:s,ext:.25})}return o}var Mi=18;function zi(n){return{x:n.x,z:n.z,h:Mi}}function ir(n,e,t,r){let i=1+.25*(ze(n.level,n.tier).def-1),o=n.weak?i*jt.dmg:i,s=n.weak?i*jt.hp:i;return{seed:t,buildings:n.pieces.filter(a=>!n.down.includes(a.id)).map(a=>a.def?{id:a.id,kind:a.kind,x:n.x+a.dx,z:n.z+a.dz,size:a.size,hp:Math.round(a.hp*s),def:a.def,mods:{dmg:o}}:{id:a.id,kind:a.kind,x:n.x+a.dx,z:n.z+a.dz,size:a.size,hp:a.hp}),defenders:[],rally:{x:n.x,z:n.z+1.5},attackers:e,mods:r,walls:Li(n),plot:zi(n)}}var $i=7,Ri={soldat:{hp:100,dps:16},archere:{hp:60,dps:11/1.3},veteran:{hp:320,dps:42/1.4},pillard:{hp:55,dps:10}},Ue={soldat:1,archere:1,veteran:3,pillard:1},nr={soldat:1,archere:1,veteran:3,pillard:1},$e=["soldat","archere","veteran","pillard"],Re=n=>n.reduce((e,t)=>e+(Ue[t.k]??1),0),Pi=n=>{let e=[1e3,800,650];for(;e.length<n;)e.push(Math.max(100,Math.floor(e[e.length-1]*95/100)));return e},v={gameT:96*3600,villages:{min:3,max:30,solo:20},cap:30,botCap:30,cost:{soldat:25,archere:40,veteran:80,pillard:30},start:{crystal:450,mushroom:750},loot:{reserve:.2,extractor:.5},trophies:[1,2,3,4,5,6,9,12,14,17,20,23,26,29,32,35,37,39,41,43,45],ladder:{every:6*3600,pay:Pi(30)},camps:{facile:2,moyen:2,difficile:2},bot:{think:60,every:{min:2*3600,max:3*3600},firstAttack:2*3600,minArmy:6},power:{soldat:10,archere:10,veteran:35,pillard:8,tour:50,mortier:70,wall:1,fall:1.5},tuto:!0,tutoCrop:100,tutoBand:3,raidLock:480,troopUp:{max:3,bonus:.2,cost:{soldat:[0,800,2e3],archere:[0,1e3,2400],veteran:[0,2e3,4500],pillard:[0,900,2200]},time:[0,600,3600]}},or=["Bruneval","Rochefer","Valgris","Hautefeuille","Pierrelune","Combefroide","Morneterre","Clairbois","Fontbrune","Givremont","Sombreval","Ronci\xE8res","Aubepierre","Haut-Gu\xE9","Brisec\xF4te","Lanterne","Vieilles-Forges","Malvent","Pr\xE9br\xFBl\xE9","Ormegrise","Ch\xEAnefort","Roquebise","Ventgris","Bellegarde","Fauchelune","Noirmoulin","Ambrecombe","Gu\xE9-du-Loup","Cendrebourg","Dormelande"],Ci="local";var sr=n=>n.charAt(0).toUpperCase()+n.slice(1),ar=(n,e)=>`${n} ${e}${n>1?"s":""}`,lr={maison:"La maison commune",caserne:"La caserne",tour:"La tour d\u2019archers",mortier:"Le mortier",cristal:"L\u2019extracteur de cristal",champignons:"L\u2019extracteur de champignons",reserve:"La r\xE9serve de cristal",grenier:"La r\xE9serve de champignons",forge:"La forge",sanctuaire:"Le sanctuaire des runes"},Ai={soldat:"Le soldat",archere:"L\u2019arch\xE8re",veteran:"Le colosse",pillard:"Le pillard"},Ii={mortier:!0,cristal:!0,champignons:!0,sanctuaire:!0},dr={facile:"facile",moyen:"moyen",difficile:"difficile"},pr=(n,e)=>{let t=n.x-e.x,r=n.z-e.z;return Math.sqrt(t*t+r*r)},_i=n=>({survivors:n.attackers.map(e=>({k:e.k,hp:e.hp})),left:n.defenders.map(e=>({k:e.k,hp:e.hp,tag:e.tag})),defHp:n.defenders.map(e=>e.hp),down:[],lost:0,killed:0,why:"retreat",t:0}),cr=n=>n>1?`${n} troupes sont rentr\xE9es au village.`:"Une troupe est rentr\xE9e au village.",Fe=(n,e,t=0,r=0)=>{let i=[n||!e?`${n} cristal`:"",e?`${e} champignons`:""].filter(Boolean).join(" et "),o=[t>0?`${t} cristal`:"",r>0?`${r} champignons`:""].filter(Boolean).join(" et ");return o?`${i} (${o} perdus : tes r\xE9serves sont pleines)`:i},hr=n=>n>0?`+${n}`:n<0?`\u2212${-n}`:"0",ur=[["cristal",1,1],["champignons",1,1],["caserne",1,1],["cristal",2,1],["tour",1,1],["champignons",2,1],["reserve",1,1],["grenier",1,1],["cristal",3,1],["tour",2,1],["reserve",2,1],["cristal",3,2],["champignons",2,2],["mortier",1,1],["caserne",1,2],["reserve",2,2],["grenier",1,2],["tour",2,2],["maison",1,2],["forge",1,1],["cristal",5,1],["champignons",4,1],["reserve",3,1],["grenier",2,1],["tour",3,1],["cristal",5,2],["champignons",4,2],["caserne",1,3],["reserve",3,2],["grenier",2,2],["cristal",5,3],["champignons",4,3],["mortier",1,2],["tour",3,2],["reserve",3,3],["grenier",2,3],["cristal",5,4],["champignons",4,4],["forge",1,2]],Oi=["soldat","archere","veteran"],fr=["soldat","soldat","archere","soldat","soldat","archere","veteran"],j=class n{constructor(e,t){w(this,"map",e);w(this,"w");w(this,"frac",0);w(this,"onReport",null);w(this,"lad",[]);w(this,"ladKey",[]);w(this,"ladW",null);w(this,"planFrom",[]);w(this,"planW",null);this.w=t??n.fresh(e)}get now(){return this.w.t+this.frac}static fresh(e,t=[Ci],r=[]){let i=e.villages.map((a,l)=>{let d=t[l]??null;return{team:l,name:r[l]??(d?"Toi":or[l%or.length]),owner:d,x:a.x,z:a.z,crystal:v.start.crystal,mushroom:v.start.mushroom,trophies:0,buildings:[{id:1,kind:"maison",x:a.x,z:a.z,level:1,busy:null,store:0}],nextId:2,raidBy:-1,raidUntil:0,full:!1,runes:[],slots:{},tuto:d&&v.tuto?"extract":"",walls:xt(),troopLv:{soldat:1,archere:1,veteran:1,pillard:1},research:null}}),o=i.map(a=>({team:a.team,units:[],battle:null})),s={v:7,seed:e.seed,t:0,villages:i,armies:o,reports:[],nextAttack:i.map(()=>v.bot.firstAttack),camps:[],bands:[],sites:{camps:e.campSites.map(a=>a.map(l=>({x:l.x,z:l.z})))},rng:e.seed%2147483646+1,nextRune:1,nextCamp:1};for(let a of i)a.owner&&n.seedCamps(s,a.team);return s}static seedCamps(e,t){let r=e.sites.camps[t]??[],i=I(e.villages[t].buildings,"maison")||1,o=0;for(let s of Xt)for(let a=0;a<v.camps[s]&&o<r.length;a++,o++){let l=n.draw(e)*100<Ee[s];e.camps.push(Ze(e.nextCamp++,t,o,r[o].x,r[o].z,s,i,l,()=>n.draw(e)))}}static draw(e){return e.rng=e.rng*16807%2147483647,e.rng/2147483647}static load(e){let t=e;return!t||typeof t!="object"||t.v!==$i?null:t}isHuman(e){return!!this.w.villages[e]?.owner}teamOf(e){return this.w.villages.findIndex(t=>t.owner===e)}of(e){let t=this.w.villages[e]?.name;return t?`le village de ${t}`:"le village rouge"}armyOf(e){let t=this.w.villages[e]?.name;return t?`l\u2019arm\xE9e de ${t}`:"l\u2019arm\xE9e rouge"}houseOf(e){let t=this.w.villages[e]?.name;return t?`la maison de ${t}`:"la maison du village rouge"}report(e,t,r,i,o){if(!this.isHuman(e))return;let s=i?{t:this.w.t,team:e,kind:t,text:r,note:i}:{t:this.w.t,team:e,kind:t,text:r};if(o){s.replay=o;let a=this.w.reports.filter(l=>l.team===e&&l.replay);for(let l of a.slice(0,Math.max(0,a.length-2)))delete l.replay}this.w.reports.push(s),this.w.reports.length>150&&this.w.reports.splice(0,this.w.reports.length-150),this.onReport?.(s)}gate(e){let t=this.w.villages[e],r=t.buildings.find(a=>a.kind==="maison")??t,i=this.plotOf(e),o=i.h-le/2,s=(a,l)=>Math.max(l-o,Math.min(l+o,a));return{x:s(r.x,i.x),z:s(r.z+14,i.z)}}endsAt(){return v.gameT}over(){return this.w.t>=v.gameT}ladder(){return this.order().slice()}order(){let e=this.w.villages,t=this.ladKey,r=this.ladW===this.w&&t.length===e.length;for(let i=0;r&&i<e.length;i++)r=e[i].trophies===t[i];return r||(this.lad=e.map(i=>i.team).sort((i,o)=>e[o].trophies-e[i].trophies||i-o),this.ladKey=e.map(i=>i.trophies),this.ladW=this.w),this.lad}rankOf(e){return this.order().indexOf(e)+1}stake(e,t){let r=Math.max(-10,Math.min(10,this.rankOf(e)-this.rankOf(t)));return v.trophies[r+10]}reward(e){let t=v.ladder.pay;return t[Math.min(e,t.length)-1]??100}apply(e,t){let r=i=>({ok:!1,why:i});if(this.over()&&t.c!=="claim"&&t.c!=="raidEnd")return r("over");if(this.locked(e)&&["train","untrain","research","collect","build","move","upgrade","cancel","raid","rune","unrune","wall","gate","unwall","wallUp"].includes(t.c))return r("locked");switch(t.c){case"train":{let i=this.train(e,t.k);return i==="ok"?{ok:!0}:r(i)}case"untrain":{let i=this.untrain(e,t.k);return i==="ok"?{ok:!0}:r(i)}case"research":{let i=this.research(e,t.k);return i==="ok"?{ok:!0}:r(i)}case"collect":return{ok:!0,n:this.collect(e,t.id)};case"build":{let i=this.build(e,t.kind,t.x,t.z);return typeof i=="number"?{ok:!0,n:i}:r(i)}case"move":{let i=this.moveBld(e,t.id,t.x,t.z);return i==="ok"?{ok:!0}:r(i)}case"upgrade":{let i=this.upgrade(e,t.id);return i==="ok"?{ok:!0}:r(i)}case"cancel":{let i=this.cancel(e,t.id);return i==="ok"?{ok:!0}:r(i)}case"raid":{let i=this.raidStart(e,t.target??-1,t.camp??-1);return i==="ok"?{ok:!0}:r(i)}case"raidEnd":{let i=this.raidEnd(e,t.drops,t.retreat);return i?{ok:!0,raid:i}:r("none")}case"rune":{let i=this.equip(e,t.rune,t.slot,t.at);return i==="ok"?{ok:!0}:r(i)}case"unrune":{let i=this.unequip(e,t.slot,t.at);return i==="ok"?{ok:!0}:r(i)}case"tuto":{let i=this.w.villages[e];return i?(i.tuto="",this.w.bands=this.w.bands.filter(o=>o.target!==e),{ok:!0}):r("none")}case"wall":{let i=this.buildWall(e,t.a,t.b);return typeof i=="number"?{ok:!0,n:i}:r(i)}case"gate":{let i=this.w.villages[e];return i&&Mt(i.walls,t.run,t.x,t.z)?{ok:!0}:r("none")}case"unwall":{let i=this.w.villages[e];return i&&zt(i.walls,t.run)?{ok:!0}:r("none")}case"wallUp":{let i=this.wallUp(e,t.run,t.line);return typeof i=="number"?{ok:!0,n:i}:r(i)}case"claim":{let i=this.w.villages[t.team];if(!i||i.owner&&i.owner!==t.uid)return r("busy");let o=!i.owner;return i.owner=t.uid,i.name=t.name,o&&!this.w.camps.some(s=>s.owner===t.team)&&n.seedCamps(this.w,t.team),{ok:!0}}}}release(e){for(let t of this.w.villages)t.raidBy===e&&(t.raidBy=-1,t.raidUntil=0);for(let t of this.w.camps)t.raidBy===e&&(t.raidBy=-1,t.raidUntil=0)}locked(e){let t=this.w.villages[e];return!!t&&t.raidUntil>this.w.t&&t.raidBy!==e&&t.raidBy>=0}armyCap(e){return I(this.w.villages[e].buildings,"caserne")>=3?v.cap+4:v.cap}armyCost(e){let t=0;for(let r of e)t+=v.cost[r.k]??0;return t}armyReady(e){return(this.w.armies[e]?.units.length??0)>0}train(e,t){let r=this.w.villages[e],i=this.w.armies[e];if(!r||!i||!$e.includes(t))return"none";if(i.battle)return"busy";let o=I(r.buildings,"caserne");return o?o<nr[t]?"level":Re(i.units)+Ue[t]>this.armyCap(e)?"full":r.mushroom<v.cost[t]?"cost":(r.mushroom-=v.cost[t],i.units.push({k:t,hp:this.troopHp(e,t)}),"ok"):"barracks"}troopMax(e){let t=I(this.w.villages[e]?.buildings??[],"forge");return t?Math.min(v.troopUp.max,t+1):1}researchCost(e,t){let r=v.troopUp.cost[e]?.[t],i=v.troopUp.time[t];return t>=1&&t<v.troopUp.max&&r&&i?{crystal:r,time:i}:null}troopFactor(e,t){return 1+v.troopUp.bonus*((this.w.villages[e]?.troopLv?.[t]??1)-1)}troopHp(e,t){return Math.round(Ri[t].hp*this.troopFactor(e,t))}attMods(e){let t=Ke(this.w.villages[e].slots,this.runeSlots(e));for(let r of $e){let i=this.troopFactor(e,r),o=t[r]??{};t[r]={...o,hp:(o.hp??1)*i,dmg:(o.dmg??1)*i}}return t}research(e,t){let r=this.w.villages[e];if(!r||!$e.includes(t))return"none";let i=r.buildings.find(a=>a.kind==="forge"&&a.busy?.what!=="build");if(!i)return"forge";if(r.research||i.busy)return"busy";let o=r.troopLv[t]??1;if(o>=v.troopUp.max)return"max";if(o+1>this.troopMax(e))return"level";let s=this.researchCost(t,o);return s?r.crystal<s.crystal?"cost":(r.crystal-=s.crystal,r.research={k:t,end:this.w.t+s.time,cost:s.crystal},"ok"):"max"}researched(e){let t=e.research.k,r=this.w.armies[e.team];if(e.troopLv[t]=(e.troopLv[t]??1)+1,e.research=null,r&&!r.battle)for(let i of r.units)i.k===t&&(i.hp=this.troopHp(e.team,t));this.report(e.team,"good",`${Ai[t]} passe au niveau ${e.troopLv[t]}.`,"build")}untrain(e,t){let r=this.w.villages[e],i=this.w.armies[e];if(!r||!i)return"none";if(i.battle)return"busy";let o=i.units.length-1;for(;o>=0&&i.units[o].k!==t;)o--;return o<0?"none":(i.units.splice(o,1),r.mushroom+=v.cost[t],"ok")}comeBack(e,t){let r=this.w.armies[e],i={};if(t)for(let s of t.units)s.side===0&&(i[s.k]=(i[s.k]??0)+1);let o=[];for(let s of r.units){if(i[s.k]){i[s.k]--;continue}o.push({k:s.k,hp:this.troopHp(e,s.k)})}return r.units=o,o.length}storage(e){return It(this.w.villages[e].buildings)}collect(e,t){let r=this.w.villages[e],i=this.storage(e),o=0,s=!1;for(let a of r.buildings){let l=At(a);if(l){if(t===void 0||a.id===t){let d=Math.max(0,Math.min(Math.floor(a.store+1e-9),i[l.res]-Math.floor(r[l.res])));r[l.res]+=d,a.store-=d,o+=d}a.store>=l.cap&&(s=!0)}}return r.full=s,o&&r.tuto==="collect"&&this.tutoTo(e,"tour"),o}afford(e,t){return(t.crystal??0)<=e.crystal&&(t.mushroom??0)<=e.mushroom}spend(e,t,r=1){e.crystal-=r*(t.crystal??0),e.mushroom-=r*(t.mushroom??0)}bld(e,t){return this.w.villages[e]?.buildings.find(r=>r.id===t)}placeRefusal(e,t,r,i,o=-1){return Ie(this.map,this.w.villages,e,t,r,i,o)}isGift(e,t){let r=this.w.villages[e]?.tuto;return r==="extract"&&t==="cristal"||r==="tour"&&t==="tour"||r==="caserne"&&t==="caserne"}build(e,t,r,i){let o=this.w.villages[e],s=$[t].shop;if(!o||!s)return"none";if(ke(o.buildings,t)>=(s.max[I(o.buildings,"maison")]??0))return"max";let a=this.isGift(e,t);if(!a&&ye(o.buildings)>=ge)return"builders";if(!a&&!this.afford(o,s.cost))return"cost";let l=this.placeRefusal(e,t,r,i);if(l)return l;let d=o.nextId++;return a?(o.buildings.push({id:d,kind:t,x:r,z:i,level:1,busy:null,store:t==="cristal"?v.tutoCrop:0}),this.tutoTo(e,t==="cristal"?"collect":t==="tour"?"band":"camp"),d):(this.spend(o,s.cost),o.buildings.push({id:d,kind:t,x:r,z:i,level:1,busy:{what:"build",end:this.w.t+s.time,cost:s.cost},store:0}),d)}moveBld(e,t,r,i){let o=this.bld(e,t);if(!o)return"none";let s=this.placeRefusal(e,o.kind,r,i,t);return s||(o.x=r,o.z=i,"ok")}upgrade(e,t){let r=this.w.villages[e],i=this.bld(e,t);if(!i||i.busy)return i?"busy":"none";let o=$[i.kind].up[i.level];return o?o.needs&&I(r.buildings,"maison")<o.needs?"house":ye(r.buildings)>=ge?"builders":this.afford(r,o.cost)?(this.spend(r,o.cost),i.busy={what:"up",end:this.w.t+o.time,cost:o.cost},"ok"):"cost":"max"}cancel(e,t){let r=this.w.villages[e],i=this.bld(e,t);return i?.busy?(this.spend(r,i.busy.cost,-1),i.busy.what==="build"?(r.buildings=r.buildings.filter(o=>o!==i),r.runes.push(...r.slots[`b${i.id}`]??[]),delete r.slots[`b${i.id}`]):i.busy=null,"ok"):"none"}wallRefusal(e,t,r){let i=this.w.villages[e];if(!i||![t.x,t.z,r.x,r.z].every(Number.isFinite))return"none";let o=this.plotOf(e);if(!Q(o,t.x,t.z,le)||!Q(o,r.x,r.z,le))return"edge";let s=vt(i.walls,t,r,i.buildings.map(d=>({x:d.x,z:d.z,size:$[d.kind].size})),we);if(s)return s;let a=pr(t,r),l=Math.max(1,Math.round(a/C.UNIT));if(yt(i.walls)+l>(_t[I(i.buildings,"maison")]??0))return"max";for(let d=0;d<=Math.ceil(a/.5);d++){let p=d/Math.ceil(a/.5),c=t.x+(r.x-t.x)*p,u=t.z+(r.z-t.z)*p,[h,b]=this.map.cell(c,u),m=this.map;if(h<0||b<0||h>=m.G||b>=m.G||m.grid[b*m.G+h]!==1)return"ground"}return null}buildWall(e,t,r){let i=this.wallRefusal(e,t,r);if(i)return i;let o=this.w.villages[e],s=C.COST*Math.max(1,Math.round(pr(t,r)/C.UNIT));return o.crystal<s?"cost":(o.crystal-=s,Lt(o.walls,t,r))}wallUp(e,t,r){let i=this.w.villages[e];if(!i)return"none";let o=(r?kt(i.walls,t):[t]).map(l=>i.walls.runs.find(d=>d.id===l)).filter(l=>l&&!l.gate&&l.level<C.HP.length-1);if(!o.length)return i.walls.runs.some(l=>l.id===t)?"max":"none";let s=o.reduce((l,d)=>l+se(i.walls,d),0),a=C.UP*s;if(i.crystal<a)return"cost";i.crystal-=a;for(let l of o)l.level++;return s}camp(e){return this.w.camps.find(t=>t.id===e)}myCamps(e){return this.w.camps.filter(t=>t.owner===e&&t.up)}runeSlots(e){let t=this.w.villages[e];return t?Ut(I(t.buildings,"sanctuaire")):0}equip(e,t,r,i){let o=this.w.villages[e],s=o?.runes.findIndex(u=>u.id===t)??-1;if(!o||s<0)return"none";let a=o.runes[s],l=this.runeSlots(e),d;if(Dt(r)){let u=o.buildings.find(h=>`b${h.id}`===r);if(!u||u.kind!=="tour"&&u.kind!=="mortier")return"none";d=u.kind}else if(r==="soldat"||r==="archere"||r==="veteran"||r==="pillard")d=r;else return"none";if(!Nt(a,d))return"none";if(!l)return"sanctuary";if(!Number.isInteger(i)||i<0)return"none";if(i>=l)return"slot";let p=o.slots[r]??[],c=i<p.length?p[i]:null;return c?p[i]=a:p.push(a),o.slots[r]=p,c?o.runes.splice(s,1,c):o.runes.splice(s,1),"ok"}unequip(e,t,r){let i=this.w.villages[e],o=i?.slots[t];if(!i||!o||!Number.isInteger(r)||r<0||r>=o.length)return"none";let[s]=o.splice(r,1);return o.length||delete i.slots[t],i.runes.push(s),"ok"}seedOf(e,t){return(this.w.t%1000003*7919+(e+2)*131+(t+2)*17)%2147483646+1}plotOf(e){let t=this.w.villages[e];return Ae({x:t.x,z:t.z})}villageInput(e,t,r){let i=this.w.villages[e],o=this.runeSlots(e),s=i.buildings.map(d=>{let p=1+.25*(d.level-1),c=ee(i.slots[`b${d.id}`],o),u=(d.kind==="tour"||d.kind==="mortier")&&!d.busy;return{id:d.id,kind:d.kind,x:d.x,z:d.z,size:$[d.kind].size,hp:Math.round($[d.kind].hp*p),def:u?d.kind:void 0,mods:{dmg:(c.dmg??1)*p,hp:c.hp,range:c.range}}}),a=gt(i.walls),l=i.walls.posts.map(d=>({x:d.x,z:d.z}));return{seed:this.seedOf(r,e),buildings:s,defenders:[],rally:this.gate(e),attackers:t.map(d=>({...d})),mods:{att:r>=0?this.attMods(r):void 0,def:Ke(i.slots,o)},...a.length?{walls:a,posts:l}:{},plot:this.plotOf(e)}}raidRefusal(e,t,r=-1){let i=this.w,o=i.armies[e];if(this.over())return"over";if(!o||o.battle)return"busy";if(!o.units.length)return"ready";if(r>=0){let a=this.camp(r);return!a||!a.up||a.owner!==e?"none":a.raidUntil>i.t&&a.raidBy!==e?"busy":null}let s=i.villages[t];return s?t===e?"self":s.raidUntil>i.t&&s.raidBy!==e?"busy":null:"none"}raidStart(e,t,r=-1){let i=this.raidRefusal(e,t,r);if(i)return i;let o=this.w,s=o.armies[e];if(r>=0){let p=this.camp(r);return p.raidBy=e,p.raidUntil=o.t+v.raidLock,s.battle={target:-1,camp:r,t0:o.t,input:ir(p,s.units,this.seedOf(e,-10-r),{att:this.attMods(e)})},"ok"}let a=o.villages[t],l=this.lootOf(t,"crystal"),d=this.lootOf(t,"mushroom");return a.raidBy=e,a.raidUntil=o.t+v.raidLock,s.battle={target:t,camp:-1,t0:o.t,input:this.villageInput(t,s.units,e),loot:l,lootM:d,stake:this.stake(e,t)},"ok"}raidEnd(e,t,r){let i=this.w,o=i.armies[e],s=o?.battle;if(!s)return null;let a=(Array.isArray(t)?t:[]).filter(h=>h&&$e.includes(h.k)&&Number.isFinite(h.t)&&Number.isFinite(h.x)&&Number.isFinite(h.z)).map(h=>({t:Math.max(0,Math.floor(h.t)),k:h.k,x:h.x,z:h.z})).sort((h,b)=>h.t-b.t),l=Number.isFinite(r)?Math.floor(r):-1,d=_i(s.input),p=!1,c=null;a.length&&(c=new J(s.input),d=c.run(a,l),p=c.units.some(h=>h.side===0)),o.battle=null;let u=this.comeBack(e,c);return this.release(e),s.camp>=0?this.settleCamp(e,s.camp,d,p,u):this.settleVillage(e,s.target,d,p,u,p?{input:s.input,drops:a,retreat:l,t0:s.t0}:void 0,s)}pieceLoot(e,t,r){let i={crystal:0,mushroom:0,rune:0};if(t>=0){let l=this.camp(t);if(!l||l.down.includes(r)||!l.pieces.some(p=>p.id===r))return i;let d=l.pieces.every(p=>p.id===r||l.down.includes(p.id));return{crystal:Be(l,r),mushroom:He(l,r),rune:l.rune&&d?1:0}}let o=this.w.villages[e];if(!o)return i;let s=this.liveSnap(e);if(s?.loot)return{crystal:s.loot[r]??0,mushroom:s.lootM?.[r]??0,rune:0};let a=o.buildings.find(l=>l.id===r);return a?{crystal:this.lootNow(o,a,"crystal"),mushroom:this.lootNow(o,a,"mushroom"),rune:0}:i}lootNow(e,t,r){let i=$[t.kind].bed;if(i)return i.res===r?Math.floor(Math.floor(t.store+1e-9)*v.loot.extractor):0;let o=$[t.kind].vault;if(!o||o.res!==r||t.busy?.what==="build")return 0;let s=0;for(let d of e.buildings){let p=$[d.kind].vault;p&&p.res===r&&d.busy?.what!=="build"&&(s+=p.cap[Math.min(d.level,p.cap.length-1)])}let a=Math.max(0,Math.floor(e[r])-Ce(I(e.buildings,"maison")||1)[r]),l=o.cap[Math.min(t.level,o.cap.length-1)];return Math.floor(a*l/Math.max(1,s)*v.loot.reserve)}lootOf(e,t){let r=this.w.villages[e],i={};for(let o of r.buildings){let s=this.lootNow(r,o,t);s&&(i[o.id]=s)}return i}liveSnap(e){let t=this.w.villages[e];if(!t||t.raidBy<0||t.raidUntil<=this.w.t)return null;let r=this.w.armies[t.raidBy]?.battle;return r&&r.target===e?r:null}raidLoot(e,t,r){let i={crystal:0,mushroom:0,rune:0};for(let s of r){let a=this.pieceLoot(e,t,s);i.crystal+=a.crystal,i.mushroom+=a.mushroom}let o=t>=0?this.camp(t):void 0;return o?.rune&&o.pieces.every(s=>r.includes(s.id)||o.down.includes(s.id))&&(i.rune=1),i}lootable(e){let t=this.w.villages[e];return t?this.raidLoot(e,-1,t.buildings.map(r=>r.id)):{crystal:0,mushroom:0,rune:0}}keep(e,t,r="crystal"){let i=this.w.villages[e],o=Math.max(0,Math.min(t,this.storage(e)[r]-Math.floor(i[r])));return i[r]+=o,o}settleVillage(e,t,r,i,o,s,a){let l=this.w,d=l.villages[t],p=new Set(r.down),c={crystal:0,mushroom:0};for(let z of["crystal","mushroom"]){let W=z==="crystal"?a?.loot:a?.lootM;for(let O of d.buildings){if(!p.has(O.id))continue;let K=a?.loot?W?.[O.id]??0:this.lootNow(d,O,z);if(K)if($[O.kind].bed){let Z=Math.min(K,Math.max(0,Math.floor(O.store+1e-9)));O.store-=Z,c[z]+=Z}else{let Z=Math.min(K,Math.max(0,Math.floor(d[z])));d[z]-=Z,c[z]+=Z}}}let u=c.crystal,h=c.mushroom,b=d.buildings.find(z=>z.kind==="maison"),m=!!b&&p.has(b.id),g=r.down.filter(z=>z!==b?.id).length,L=e>=0&&i?a?.stake??this.stake(e,t):0,y=m?L:0-Math.floor(L/2)||0,x=u,M=h;if(e>=0){let z=l.villages[e];u=this.keep(e,u),h=this.keep(e,h,"mushroom"),z.trophies=Math.max(0,z.trophies+y),d.trophies=Math.max(0,d.trophies-y)}let R=g?`${ar(g,"b\xE2timent")} d\xE9truit${g>1?"s":""}`:"";if(e>=0){let z=i?o?` ${cr(o)}`:"":" Ton arm\xE9e est rentr\xE9e au village.",W=m?`${this.houseOf(t)} est tomb\xE9e${R?`, ${R}`:""}`:`${this.houseOf(t)} a tenu${R?` (${R})`:""}`;this.report(e,i?m?"good":y<0?"bad":"info":"info",i?`Raid sur ${this.of(t)} : ${W}. Butin : ${Fe(u,h,x-u,M-h)}. Troph\xE9es : ${hr(y)}.${z}`:`Raid sur ${this.of(t)} : aucune troupe pos\xE9e, rien n\u2019a \xE9t\xE9 pris.${z}`)}if(!i)this.report(t,"info",`${sr(this.armyOf(e))} est venue jusqu\u2019\xE0 ton village, sans attaquer.`);else{let z=e>=0?sr(this.armyOf(e)):"Une bande de brigands",W=m?`ta maison est tomb\xE9e${R?`, ${R}`:""}`:`ta maison a tenu${R?` (${R})`:""}`,O=x||M?` Pill\xE9 : ${Fe(x,M)}.`:" Rien n\u2019a \xE9t\xE9 pill\xE9.",K=e>=0?` Troph\xE9es : ${hr(-y)}.`:"";this.report(t,m||x||M?"bad":"good",`${z} a attaqu\xE9 ton village : ${W}.${O}${K}`,"attack",s)}return{fell:m,crystal:u,mushroom:h,trophies:y,rune:null,back:o}}settleCamp(e,t,r,i,o){let s=this.w,a=this.camp(t),l=s.villages[e],d={fell:!1,crystal:0,mushroom:0,trophies:0,rune:null},p=a.pieces,c=r.down.filter(x=>!a.down.includes(x)&&p.some(M=>M.id===x));for(let x of c)d.crystal+=Be(a,x),d.mushroom+=He(a,x);a.down.push(...c),a.raidBy=-1,a.raidUntil=0;let u={...d,back:o},h=u.crystal,b=u.mushroom;u.crystal=this.keep(e,h),u.mushroom=this.keep(e,b,"mushroom");let m=p.every(x=>a.down.includes(x.id));if(u.fell=m,m&&a.rune){let x=n.draw(s),M=n.draw(s),R=n.draw(s);u.rune=Tt(s.nextRune++,a.level,x,R,M),l.runes.push(u.rune),a.rune=!1}m&&(a.up=!1,a.back=s.t+Me.min+Math.floor(n.draw(s)*(Me.max-Me.min)));let g=m?"le camp est ras\xE9":c.length?`${ar(c.length,"pi\xE8ce")} d\xE9truite${c.length>1?"s":""}`:"rien n\u2019est tomb\xE9",L=h||b?` Butin : ${Fe(u.crystal,u.mushroom,h-u.crystal,b-u.mushroom)}.`:"",y=u.rune?` Tu gagnes ${Gt(u.rune)}.`:m?" Pas de rune dans ce camp.":"";return this.report(e,m||u.crystal||u.mushroom?"good":"info",i?`Raid sur le camp de brigands ${dr[a.level]} : ${g}.${L}${y}${o?` ${cr(o)}`:""}`:`Raid sur le camp de brigands ${dr[a.level]} : aucune troupe pos\xE9e. Ton arm\xE9e est rentr\xE9e au village.`),i&&l.tuto==="camp"&&(l.tuto=""),u}bots(){let e=this.w,t=v.bot.think;for(let r of e.villages)!r.owner&&(e.t+r.team)%t===0&&!this.locked(r.team)&&this.botThink(r)}botThink(e){let t=this.w,r=e.team,i=t.armies[r];if(this.collect(r),this.botBuild(e),!e.research&&I(e.buildings,"forge")){for(let a of Oi)if(e.troopLv[a]<this.troopMax(r)){this.research(r,a);break}}if(!I(e.buildings,"caserne")||!(t.t>=t.nextAttack[r])||(this.botBuy(r),Re(i.units)<v.bot.minArmy))return;let s=this.botTarget(r);s<0||(this.botRaid(r,s),t.nextAttack[r]=t.t+v.bot.every.min+Math.floor(n.draw(t)*(v.bot.every.max-v.bot.every.min)))}botBuild(e){let t=e.team,r=e.buildings,i=this.storage(t).crystal,o=I(r,"maison");this.planW!==this.w&&(this.planW=this.w,this.planFrom=[]);let s=!0;for(let a=this.planFrom[t]??0;a<ur.length;a++){let[l,d,p]=ur[a];if(ye(e.buildings)>=ge)return;let c=0,u=0,h=null;for(let m of e.buildings){if(m.kind!==l)continue;u++,(m.busy?m.busy.what==="up"?m.level+1:1:m.level)>=p?c++:!m.busy&&(!h||m.level<h.level)&&(h=m)}if(c>=d){s&&!e.buildings.some(m=>m.kind===l&&m.busy)&&(this.planFrom[t]=a+1);continue}if(s=!1,u<d){let m=$[l].shop;if(!m||u>=(m.max[o]??0)||(m.cost.crystal??0)>i)continue;if(!this.afford(e,m.cost))return;let g=Wt(this.map,this.w.villages,t,l);g&&this.build(t,l,g.x,g.z);continue}if(!h)continue;let b=$[l].up[h.level];if(!(!b||(b.cost.crystal??0)>i)){if(!this.afford(e,b.cost))return;this.upgrade(t,h.id)}}}botBuy(e){let t=I(this.w.villages[e].buildings,"caserne"),r=this.w.armies[e];for(let i=0;i<4*v.botCap;i++){let o=fr[i%fr.length];if(!(t<nr[o])&&(Re(r.units)+Ue[o]>Math.min(this.armyCap(e),v.botCap)||this.train(e,o)!=="ok"))break}}botTarget(e){let t=this.w,r=this.order(),i=r.indexOf(e),o=s=>{let a=t.villages[s];return!(a.raidUntil>t.t&&a.raidBy>=0)};for(let s=i-1;s>=0;s--)if(o(r[s]))return r[s];for(let s=i+1;s<r.length;s++)if(o(r[s]))return r[s];return-1}botRaid(e,t){let r=this.w,i=r.armies[e],o=i.units;if(this.isHuman(t)){let s=this.villageInput(t,o,e),a=We(s,this.gate(t)),l=new J(s),d=l.run(a);this.settleVillage(e,t,d,!0,this.comeBack(e,l),{input:s,drops:a,retreat:-1,t0:r.t})}else i.units=[],this.settleVillage(e,t,this.byNumbers(o,t,e),!0,0)}byNumbers(e,t,r=-1){let i=v.power,o=this.w.villages[t],s=0,a=0;for(let m of e)s+=i[m.k]*(r>=0?this.troopFactor(r,m.k):1);for(let m of o.buildings)(m.kind==="tour"||m.kind==="mortier")&&!m.busy&&(a+=i[m.kind]*(3+m.level)/4);for(let m of o.walls.runs)m.gate||(a+=i.wall*m.level*se(o.walls,m));let l=o.buildings.find(m=>m.kind==="maison"),d=l?.x??o.x,p=l?.z??o.z,c=s>0&&s>=a*i.fall,u=a>0?Math.min(1,s/(2*a)):s>0?1:0,h=o.buildings.filter(m=>m!==l).map(m=>({id:m.id,d:(m.x-d)*(m.x-d)+(m.z-p)*(m.z-p)})).sort((m,g)=>g.d-m.d||m.id-g.id),b=h.slice(0,Math.floor(u*h.length+1e-9)).map(m=>m.id);return c&&l&&b.push(l.id),{survivors:[],left:[],defHp:[],down:b,lost:e.length,killed:0,why:b.length===o.buildings.length?"razed":"time",t:0}}tutoTo(e,t){let r=this.w,i=r.villages[e];if(t==="tour"&&ke(i.buildings,"tour")&&(t="band"),t==="caserne"&&ke(i.buildings,"caserne")&&(t="camp"),i.tuto=t,t==="band"&&r.bands.push({target:e,units:Array.from({length:v.tutoBand},()=>({k:"brigand",hp:Oe.brigand.hp})),at:r.t+5}),t==="camp"){let o=r.armies[e];for(let a=0;a<3&&!o.battle&&Re(o.units)<this.armyCap(e);a++)o.units.push({k:"soldat",hp:this.troopHp(e,"soldat")});let s=r.camps.find(a=>a.owner===e&&a.up&&a.level==="facile");s&&(s.rune=!0,s.weak=!0,!s.down.length&&!(s.raidBy>=0&&s.raidUntil>r.t)&&Object.assign(s,er()))}}bandArrives(e){let t=this.w,r=this.villageInput(e.target,e.units,-1),i=We(r,this.gate(e.target)),o=new J(r).run(i),s=!o.survivors.length;this.report(e.target,s?"good":"bad",`Des brigands ont attaqu\xE9 ton village : ${s?"ils ont \xE9t\xE9 repouss\xE9s":"ils ont fait des d\xE9g\xE2ts"} (ils ont perdu ${o.lost}).`,"attack",{input:r,drops:i,retreat:-1,t0:t.t}),t.villages[e.target].tuto==="band"&&this.tutoTo(e.target,"caserne")}advance(e){for(this.frac+=e;this.frac>=1;)this.frac-=1,this.step()}advanceTo(e){for(;this.w.t+1<=e;)this.step();this.frac=Math.max(0,Math.min(.999,e-this.w.t))}static forecast(e,t,r){let i=new n(e,JSON.parse(JSON.stringify(t))),o=[];i.onReport=a=>{a.note&&o.push({team:a.team,t:a.t,note:a.note,text:a.text})};let s=i.w.t+r;for(;i.w.t<s;)i.step();return o}step(){let e=this.w,t=$;e.t+=1;for(let r of e.villages){r.research&&r.research.end<=e.t&&this.researched(r);for(let i of r.buildings){if(i.busy){if(i.busy.end<=e.t){let l=i.busy.what==="up";l&&i.level++,i.busy=null,this.report(r.team,"good",l?`${lr[i.kind]} passe au niveau ${i.level}.`:`${lr[i.kind]} est ${Ii[i.kind]?"construit":"construite"}.`,"build")}continue}let o=t[i.kind].bed;if(!o)continue;let s=i.level<o.cap.length?i.level:o.cap.length-1,a=o.cap[s];i.store>=a||(i.store=Math.min(a,i.store+o.rate[s]/3600),i.store>=a&&!r.full&&(r.full=!0,this.report(r.team,"info","Tes extracteurs sont pleins : viens ramasser leur r\xE9colte.","full")))}}if(e.bands.length)for(let r of e.bands.slice())e.t>=r.at&&!this.locked(r.target)&&(e.bands.splice(e.bands.indexOf(r),1),this.bandArrives(r));for(let r of e.camps)!r.up&&r.back>0&&e.t>=r.back&&this.campBack(r);for(let r of e.armies)r.battle&&e.t>=r.battle.t0+v.raidLock&&this.raidEnd(r.team,[],-1);e.t<=v.gameT&&e.t%v.ladder.every===0&&this.payLadder(),this.over()||this.bots()}payLadder(){this.order().forEach((e,t)=>{let r=this.w.villages[e],i=this.storage(e).crystal-Math.floor(r.crystal),o=this.reward(t+1),s=Math.max(0,Math.min(i,o)),a=t?`${t+1}e place`:"1re place";r.crystal+=s,this.report(e,s?"good":"info",s===o?`Le classement te verse ${s} cristal (${a}).`:s?`Le classement te verse ${s} cristal sur ${o} (${a}) : tes r\xE9serves sont pleines.`:`Tes r\xE9serves sont pleines : les ${o} cristal du classement (${a}) sont perdus.`)})}campBack(e){let t=this.w,i=(t.sites.camps[e.owner]??[]).map((l,d)=>({p:l,i:d})).filter(({i:l})=>!t.camps.some(d=>d!==e&&d.owner===e.owner&&d.up&&d.site===l));if(!i.length){e.back=t.t+3600;return}let o=i[Math.floor(n.draw(t)*i.length)],s=I(t.villages[e.owner].buildings,"maison")||1,a=n.draw(t)*100<Ee[e.level];Object.assign(e,Ze(e.id,e.owner,o.i,o.p.x,o.p.z,e.level,s,a,()=>n.draw(t))),delete e.weak}sky(e){let t=this.order(),r=this.w;return{villages:r.villages.map(i=>({team:i.team,name:i.name,x:i.x,z:i.z,rank:t.indexOf(i.team)+1,trophies:i.trophies,...(o=>({loot:o.crystal,lootM:o.mushroom}))(this.lootable(i.team)),me:i.team===e,bot:!i.owner,locked:i.raidUntil>r.t&&i.raidBy>=0&&i.raidBy!==e})),camps:this.myCamps(e).map(i=>({id:i.id,level:i.level,x:i.x,z:i.z,pieces:i.pieces,palisade:i.palisade,locked:i.raidUntil>r.t&&i.raidBy>=0&&i.raidBy!==e}))}}};var Wi=16*3600,Si="La partie est termin\xE9e : le classement est arr\xEAt\xE9, viens voir ta place.",Te={v:0,villages:[]},mr=n=>JSON.parse(JSON.stringify(n)),De=n=>{let e=j.load(n);if(e)return e;throw n?.v===Te.v?new Error("Cette partie n\u2019est pas encore lanc\xE9e."):new Error("Cette partie a \xE9t\xE9 cr\xE9\xE9e par une version du jeu que celle-ci ne sait pas lire.")},Ei=n=>new Promise(e=>setTimeout(e,n)),br=class{constructor(e,t,r,i,o=()=>Date.now()){w(this,"map",e);w(this,"camp",t);w(this,"backend",r);w(this,"team",i);w(this,"clock",o);w(this,"base",{version:0,state:null});w(this,"startedAt",0);w(this,"players",[]);w(this,"offset",0);w(this,"bestRtt",1/0);w(this,"pending",[]);w(this,"online",!0);w(this,"running",null);w(this,"onRefuse",null);w(this,"onChange",null)}skew(e,t,r){let i=r-t;i>this.bestRtt*1.5+50||(i<this.bestRtt&&(this.bestRtt=i),this.offset=e-(t+r)/2)}serverNow(){return this.clock()+this.offset}worldNow(){return Math.max(0,(this.serverNow()-this.startedAt)/1e3)}async start(){let e=this.clock(),t=await this.backend.load();this.skew(t.now,e,this.clock()),this.base={version:t.version,state:De(t.state)},this.startedAt=t.startedAt,this.players=t.players,this.rebuild()}rebuild(){let e=this.camp;e.w=mr(this.base.state),e.frac=0,e.advanceTo(this.worldNow());for(let t of this.pending)e.apply(this.team,t);this.onChange?.()}tick(){this.camp.advanceTo(this.worldNow())}issue(e){this.tick();let t=this.camp.apply(this.team,e);return t.ok&&(this.pending.push(e),this.flush()),t}notesFor(e,t){let r=[...t,...j.forecast(this.map,e,Wi).map(i=>({seat:i.team,t:i.t,kind:i.note,body:i.text}))];return[...r,...Ki(this.map,e,r)]}flush(){return this.running||(this.running=this.send().finally(()=>{this.running=null})),this.running}async send(){let e=1e3;for(;this.pending.length;){let t=this.pending[0],r=new j(this.map,mr(this.base.state));r.advanceTo(Math.max(r.w.t,Math.floor(this.worldNow())));let i=[];r.onReport=d=>{d.note&&i.push({seat:d.team,t:d.t,kind:d.note,body:d.text})};let o=r.apply(this.team,t);if(r.onReport=null,!o.ok){this.pending.shift(),this.onRefuse?.(t,o.why),this.rebuild();continue}let s=this.notesFor(r.w,i),a=this.clock(),l;try{l=await this.backend.commit(this.base.version,r.w,s)}catch{this.online=!1,await Ei(e),e=Math.min(15e3,e*2);continue}this.online=!0,e=1e3,this.skew(l.now,a,this.clock()),l.ok?(this.base={version:l.version,state:r.w},this.pending.shift()):this.base={version:l.version,state:De(l.state)},this.rebuild()}}async poll(){if(this.running)return!1;let e,t=this.clock();try{e=await this.backend.poll()}catch{return this.online=!1,!1}if(this.online=!0,this.skew(e.now,t,this.clock()),e.version<=this.base.version)return!1;let r=await this.backend.load();return this.running||r.version<=this.base.version?!1:(this.base={version:r.version,state:De(r.state)},this.players=r.players,this.rebuild(),!0)}};function Ki(n,e,t=[]){let r=new j(n,e),i=r.endsAt();return r.over()?[]:e.villages.filter(o=>o.owner&&!t.some(s=>s.seat===o.team&&s.kind==="end")).map(o=>({seat:o.team,t:i,kind:"end",body:Si}))}var Zi=globalThis.__PLANETOID_NET,N=Zi??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var xr="planetoid-cle",Ne="planetoid-partie",V={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}},del(n){try{localStorage.removeItem(n)}catch{}}},Bi=n=>btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function Co(){let n=V.get(xr);return(!n||n.length<20)&&(n=Bi(crypto.getRandomValues(new Uint8Array(32))),V.set(xr,n)),n}async function Ao(n){return"p"+[...new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n))).slice(0,8)].map(t=>t.toString(16).padStart(2,"0")).join("")}var Io=()=>{try{let n=V.get(Ne);return n?JSON.parse(n):null}catch{return null}},_o=n=>V.set(Ne,JSON.stringify(n)),Oo=()=>V.del(Ne),Wo=()=>V.get("planetoid-nom")??"",So=n=>V.set("planetoid-nom",n),Eo=()=>!!N.url&&!!N.key;function Hi(n){return/unknown game/.test(n)?"Aucune partie avec ce code.":/game full/.test(n)?"La partie est compl\xE8te.":/bad name/.test(n)?"Choisis un nom (24 lettres au plus).":/not a player/.test(n)?"Ce t\xE9l\xE9phone ne fait plus partie de cette partie : rejoins-la avec ton nom.":/only the creator/.test(n)?"Seul le cr\xE9ateur de la partie peut la lancer.":n}async function B(n,e={}){let t={apikey:N.key,"Content-Type":"application/json"};N.key.startsWith("sb_")||(t.Authorization=`Bearer ${N.key}`);let r;try{r=await fetch(`${N.url}/rest/v1/rpc/${n}`,{method:"POST",headers:t,body:JSON.stringify(e)})}catch{throw new Error("Pas de connexion au serveur.")}let i=await r.text();if(!r.ok){let o=i;try{o=JSON.parse(i).message??i}catch{}throw new Error(Hi(o))}return i?JSON.parse(i):null}var Ko=(n,e,t)=>B("planetoid_join",{p_secret:n,p_code:e,p_name:t}),Zo=(n,e,t,r)=>B("planetoid_open",{p_secret:n,p_name:e,p_seed:t,p_seats:r,p_state:Te}),Bo=(n,e)=>B("planetoid_lobby",{p_secret:n,p_game:e}),Ho=(n,e,t)=>B("planetoid_launch",{p_secret:n,p_game:e,p_state:t}),gr=class{constructor(e,t){w(this,"key",e);w(this,"game",t)}async load(){let e=await B("planetoid_state",{p_secret:this.key,p_game:this.game});return{version:e.version,state:e.state,startedAt:e.startedAt,now:e.now,players:e.players}}poll(){return B("planetoid_poll",{p_secret:this.key,p_game:this.game})}commit(e,t,r){return B("planetoid_commit",{p_secret:this.key,p_game:this.game,p_version:e,p_state:t,p_notes:r})}},Fi=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,Ui=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;async function Di(){if(!("serviceWorker"in navigator)||!("PushManager"in window)||!("Notification"in window))return Ui()&&!Fi()?"install":"unsupported";if(Notification.permission==="denied")return"denied";let n=await navigator.serviceWorker.getRegistration();return(n?await n.pushManager.getSubscription():null)&&Notification.permission==="granted"?"on":"off"}function Ti(n){let e=atob(n.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((n.length+3)%4));return Uint8Array.from(e,t=>t.charCodeAt(0))}async function Fo(n){let e=await Di();if(e==="install"||e==="unsupported"||e==="denied")return e;if(await Notification.requestPermission()!=="granted")return Notification.permission==="denied"?"denied":"off";let t=await B("planetoid_vapid");if(!t&&(await fetch(`${N.url}/functions/v1/planetoid-push`,{method:"POST",mode:"no-cors"}).catch(()=>null),t=await B("planetoid_vapid"),!t))throw new Error("Le serveur des notifications ne r\xE9pond pas encore.");let r=await navigator.serviceWorker.ready,i=await r.pushManager.getSubscription();i||(i=await r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ti(t)}));let o=i.toJSON();return await B("planetoid_subscribe",{p_secret:n,p_endpoint:o.endpoint,p_p256dh:o.keys.p256dh,p_auth:o.keys.auth}),"on"}export{Ni as a,Gi as b,ji as c,S as d,Pe as e,Wr as f,Nn as g,Gn as h,jn as i,Vn as j,qn as k,jr as l,Xn as m,Yn as n,Qn as o,Jn as p,eo as q,io as r,C as s,se as t,kt as u,yt as v,$ as w,At as x,Ce as y,It as z,_t as A,ge as B,we as C,ti as D,I as E,ke as F,ye as G,_e as H,ii as I,Zt as J,Bt as K,Oe as L,ni as M,J as N,We as O,Vt as P,Le as Q,Li as R,Se as S,di as T,Ft as U,pi as V,ci as W,hi as X,$i as Y,Ri as Z,Ue as _,nr as $,$e as aa,Re as ba,v as ca,j as da,br as ea,Co as fa,Ao as ga,Io as ha,_o as ia,Oo as ja,Wo as ka,So as la,Eo as ma,Ko as na,Zo as oa,Bo as pa,Ho as qa,gr as ra,Di as sa,Fo as ta};
