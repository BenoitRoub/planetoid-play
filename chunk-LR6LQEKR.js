var Um=Object.defineProperty;var km=(r,t,e)=>t in r?Um(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Tt=(r,t,e)=>km(r,typeof t!="symbol"?t+"":t,e);var Fu="./assets/lilita-BW72GA3X.woff2";var Nu="./assets/fredoka-3UPZTCSC.woff2";var Bu="./assets/soldat-VD7AFEPS.webp";var Ou="./assets/archere-FKKFB2P7.webp";var Hu="./assets/recolteur-33TAN3DD.webp";var Vu="./assets/soldat-tete-AGMCDKZK.webp";var Gu="./assets/veteran-7QWA7NOQ.webp";var Wu="./assets/recolteur-tete-7BNM6UJ6.webp";var uo={soldat:Bu,archere:Ou,recolteur:Hu,veteran:Gu,"soldat-tete":Vu,"recolteur-tete":Wu},se="#2a1709",$u=3.6,st=(r=$u)=>`stroke="${se}" stroke-width="${r}" stroke-linejoin="round" stroke-linecap="round"`,Ie=(r,t,e='x1="0" y1="0" x2="0" y2="1"')=>`<linearGradient id="${r}" ${e}>${t.map(([n,i])=>`<stop offset="${n}" stop-color="${i}"/>`).join("")}</linearGradient>`,Wm=[Ie("h-cry",[[0,"#e4fffa"],[.45,"#52f0d6"],[1,"#0f9e90"]]),Ie("h-cry-dk",[[0,"#2fd6bf"],[1,"#0a6f68"]]),'<radialGradient id="h-cry-glow" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#8ffff0" stop-opacity=".85"/><stop offset="1" stop-color="#8ffff0" stop-opacity="0"/></radialGradient>',Ie("h-gold",[[0,"#fff2a8"],[.45,"#ffc93e"],[1,"#e2780f"]]),'<radialGradient id="h-gold-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></radialGradient>',Ie("h-steel",[[0,"#ffffff"],[.5,"#cfd5e2"],[1,"#7f879c"]]),Ie("h-steel-x",[[0,"#ffffff"],[.5,"#d3d8e4"],[1,"#8a91a6"]],'x1="0" y1="0" x2="1" y2="0"'),Ie("h-wood",[[0,"#e9ad6a"],[.55,"#b06a32"],[1,"#7c4420"]]),Ie("h-wood-x",[[0,"#e9ad6a"],[1,"#8f4f24"]],'x1="0" y1="0" x2="1" y2="0"'),Ie("h-roof",[[0,"#ffc98a"],[.5,"#f0913a"],[1,"#bf5c1b"]]),Ie("h-cream",[[0,"#fffbf0"],[1,"#eadbbb"]]),Ie("h-parch",[[0,"#fff4d8"],[1,"#e6c992"]]),Ie("h-leather",[[0,"#d27a3e"],[.55,"#9c4a1e"],[1,"#6c2f12"]]),Ie("h-red",[[0,"#ffb3a3"],[.5,"#ff5a47"],[1,"#c22a20"]]),Ie("h-green",[[0,"#e2ffb0"],[.5,"#7bd84a"],[1,"#2f8f2a"]]),Ie("h-sand",[[0,"#fff0b8"],[1,"#e7ae45"]]),Ie("h-glass",[[0,"#ffffff"],[1,"#cfeefa"]]),Ie("h-white",[[0,"#ffffff"],[1,"#e6dccb"]])].join(""),ec=`
  <path d="M28 9 L32 2 L36 9 L36 40 L28 40 Z" fill="url(#h-steel-x)" ${st()}/>
  <path d="M32 7 L32 37" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  <rect x="19" y="38" width="26" height="7" rx="3.5" fill="url(#h-gold)" ${st()}/>
  <rect x="29" y="45" width="6" height="11" rx="2" fill="url(#h-wood-x)" ${st(3)}/>
  <circle cx="32" cy="59" r="4" fill="url(#h-gold)" ${st(3)}/>`,Xm={crystal:`
    <circle cx="32" cy="38" r="27" fill="url(#h-cry-glow)"/>
    <path d="M10 56 L8 40 L16 30 L25 38 L24 56 Z" fill="url(#h-cry-dk)" ${st()}/>
    <path d="M40 56 L42 30 L50 22 L57 34 L54 56 Z" fill="url(#h-cry-dk)" ${st()}/>
    <path d="M20 56 L18 22 L32 4 L46 22 L44 56 Z" fill="url(#h-cry)" ${st()}/>
    <path d="M32 4 L32 56 L44 56 L46 22 Z" fill="#0b8b80" opacity=".35"/>
    <path d="M24 22 L32 10 L30 48 L25 48 Z" fill="#fff" opacity=".7"/>
    <path d="M12 42 L16 35 L20 40 Z" fill="#fff" opacity=".55"/>
    <path d="M46 30 L50 26 L52 32 Z" fill="#fff" opacity=".55"/>
    <path d="M6 58 L58 58" stroke="${se}" stroke-width="${$u}" stroke-linecap="round"/>`,energy:`
    <circle cx="32" cy="32" r="28" fill="url(#h-gold-glow)"/>
    <path d="M38 3 L13 36 L29 36 L23 61 L51 25 L35 25 L42 3 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M37 9 L21 31 L28 31 Z" fill="#fff" opacity=".75"/>`,swords:`<g transform="rotate(-42 32 32)">${ec}</g><g transform="rotate(42 32 32)">${ec}</g>`,shovel:`
    <g transform="rotate(-32 32 32)">
      <path d="M22 4 L42 4" stroke="${se}" stroke-width="11" stroke-linecap="round"/>
      <path d="M22 4 L42 4" stroke="url(#h-wood-x)" stroke-width="5" stroke-linecap="round"/>
      <rect x="28.5" y="4" width="7" height="32" rx="2" fill="url(#h-wood-x)" ${st()}/>
      <path d="M18 36 L46 36 L46 48 C46 56 40 63 32 63 C24 63 18 56 18 48 Z" fill="url(#h-steel)" ${st()}/>
      <path d="M23 41 L28 41 L28 52 C25 51 23 48 23 45 Z" fill="#fff" opacity=".75"/>
      <rect x="27" y="31" width="10" height="8" rx="2" fill="#8f97ab" ${st(3)}/>
    </g>`,house:`
    <path d="M14 30 L50 30 L50 57 L14 57 Z" fill="url(#h-cream)" ${st()}/>
    <path d="M14 46 L50 46 L50 57 L14 57 Z" fill="#cfc6b6" ${st(3)}/>
    <path d="M27 57 L27 45 C27 41 37 41 37 45 L37 57 Z" fill="url(#h-wood)" ${st(3)}/>
    <path d="M32 33 L35.5 37 L32 41 L28.5 37 Z" fill="url(#h-cry)" ${st(2.4)}/>
    <path d="M5 34 L32 8 L59 34 L52 37 L32 18 L12 37 Z" fill="url(#h-roof)" ${st()}/>
    <path d="M14 30 L32 13 L36 16 L17 33 Z" fill="#fff" opacity=".45"/>`,map:`
    <path d="M6 14 L23 8 L41 14 L58 8 L58 50 L41 56 L23 50 L6 56 Z" fill="url(#h-parch)" ${st()}/>
    <path d="M23 8 L23 50 L41 56 L41 14 Z" fill="#d9b779" opacity=".55"/>
    <path d="M23 8 L23 50 M41 14 L41 56" stroke="${se}" stroke-width="2.4"/>
    <path d="M10 22 C13 18 18 19 18 24 C18 28 12 29 10 26 Z" fill="#6fae3e" ${st(2.2)}/>
    <path d="M13 46 C20 40 24 36 31 36 C38 36 40 30 46 24" fill="none" stroke="#c22a20" stroke-width="3.2" stroke-dasharray="4 4.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="${se}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M46 16 L54 24 M54 16 L46 24" stroke="#ff5a47" stroke-width="3.5" stroke-linecap="round"/>`,village:`
    <path d="M2 56 C10 40 54 40 62 56 L62 60 L2 60 Z" fill="url(#h-green)" ${st()}/>
    <path d="M44 44 L44 34" stroke="${se}" stroke-width="7" stroke-linecap="round"/>
    <path d="M44 44 L44 34" stroke="url(#h-wood-x)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="44" cy="25" r="11" fill="url(#h-green)" ${st()}/>
    <path d="M38 22 C39 18 42 16 45 16" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M10 26 L32 26 L32 46 L10 46 Z" fill="url(#h-cream)" ${st()}/>
    <path d="M18 46 L18 37 C18 34 24 34 24 37 L24 46 Z" fill="url(#h-wood)" ${st(2.6)}/>
    <path d="M4 30 L21 12 L38 30 L33 32 L21 20 L9 32 Z" fill="url(#h-roof)" ${st()}/>`,book:`
    <path d="M16 10 L54 10 L54 58 L16 58 Z" fill="url(#h-cream)" ${st()}/>
    <path d="M50 14 L50 54" stroke="#cbbb98" stroke-width="2"/><path d="M46 14 L46 54" stroke="#cbbb98" stroke-width="2"/>
    <path d="M10 6 L44 6 C46 6 47 7 47 9 L47 56 C47 58 46 59 44 59 L10 59 Z" fill="url(#h-leather)" ${st()}/>
    <path d="M10 6 L18 6 L18 59 L10 59 Z" fill="#5a2610" ${st(3)}/>
    <path d="M32 20 L39 31 L32 42 L25 31 Z" fill="url(#h-cry)" ${st(2.8)}/>
    <path d="M30 24 L32 21 L32 30 L28 30 Z" fill="#fff" opacity=".7"/>
    <path d="M22 10 L42 10" stroke="#f5b97c" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`,hourglass:`
    <path d="M18 11 L46 11 C46 23 36 28 34 32 C36 36 46 41 46 53 L18 53 C18 41 28 36 30 32 C28 28 18 23 18 11 Z" fill="url(#h-glass)" ${st()}/>
    <path d="M22 15 L42 15 C40 22 34 25 32 29 C30 25 24 22 22 15 Z" fill="url(#h-sand)"/>
    <path d="M21 50 C24 43 40 43 43 50 Z" fill="url(#h-sand)"/>
    <path d="M32 30 L32 46" stroke="#e7ae45" stroke-width="2"/>
    <path d="M24 14 C24 20 28 24 30 26" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>
    <rect x="10" y="4" width="44" height="8" rx="3" fill="url(#h-wood)" ${st()}/>
    <rect x="10" y="52" width="44" height="8" rx="3" fill="url(#h-wood)" ${st()}/>`,fast:`
    <path d="M6 14 L30 32 L6 50 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M30 14 L54 32 L30 50 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M10 21 L20 28 L10 31 Z" fill="#fff" opacity=".7"/><path d="M34 21 L44 28 L34 31 Z" fill="#fff" opacity=".7"/>
    <path d="M58 14 L58 50" stroke="${se}" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 14 L58 50" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>`,clock:`
    <circle cx="32" cy="34" r="24" fill="url(#h-white)" ${st()}/>
    <path d="M32 20 L32 34 L42 40" fill="none" ${st()}/>
    <rect x="26" y="4" width="12" height="7" rx="3" fill="url(#h-gold)" ${st(2.5)}/>`,helmet:`
    <path d="M10 40 C10 22 20 12 32 12 C44 12 54 22 54 40 Z" fill="url(#h-steel)" ${st()}/>
    <path d="M32 6 L32 13" stroke="${se}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 6 L32 13" stroke="url(#h-gold)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="6" y="38" width="52" height="9" rx="4.5" fill="url(#h-gold)" ${st()}/>
    <rect x="28.5" y="45" width="7" height="14" rx="2.5" fill="url(#h-steel)" ${st(3)}/>
    <path d="M18 34 C18 26 23 20 30 18" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".85"/>`,tent:`
    <path d="M6 56 L32 8 L58 56 Z" fill="url(#h-cream)" ${st()}/>
    <path d="M32 8 L58 56 L40 56 Z" fill="#d8c7a2" opacity=".8"/>
    <path d="M24 56 L32 34 L40 56 Z" fill="#5a3418" ${st(3)}/>
    <path d="M32 8 L32 2" stroke="${se}" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 2 L44 5 L32 9 Z" fill="url(#h-red)" ${st(2.4)}/>`,flag:`
    <path d="M16 6 L16 60" stroke="${se}" stroke-width="9" stroke-linecap="round"/>
    <path d="M16 6 L16 60" stroke="url(#h-wood-x)" stroke-width="4" stroke-linecap="round"/>
    <path d="M18 10 C30 4 38 16 54 10 L54 36 C38 42 30 30 18 36 Z" fill="url(#h-white)" ${st()}/>
    <path d="M22 14 C28 11 32 13 36 15" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,mushroom:`
    <path d="M24 34 C24 44 22 52 20 58 L44 58 C42 52 40 44 40 34 Z" fill="url(#h-cream)" ${st()}/>
    <path d="M26 40 C27 47 26 52 25 56" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M4 34 C4 16 18 6 32 6 C46 6 60 16 60 34 C60 38 56 40 52 40 L12 40 C8 40 4 38 4 34 Z" fill="url(#h-roof)" ${st()}/>
    <circle cx="20" cy="22" r="5" fill="#fff4dc" ${st(2.4)}/><circle cx="38" cy="15" r="4" fill="#fff4dc" ${st(2.4)}/><circle cx="46" cy="29" r="4.5" fill="#fff4dc" ${st(2.4)}/><circle cx="29" cy="32" r="3" fill="#fff4dc" ${st(2.2)}/>
    <path d="M12 26 C14 18 20 13 27 11" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>`,rune:`
    <path d="M14 10 L48 6 L58 30 L50 56 L16 58 L6 34 Z" fill="url(#h-steel)" ${st()}/>
    <path d="M14 10 L48 6 L42 14 L18 16 Z" fill="#fff" opacity=".55"/>
    <path d="M20 22 L32 16 L44 22 M32 16 L32 48 M22 44 L32 48 L42 44" fill="none" stroke="#6b7186" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 26 L38 33 L32 40 L26 33 Z" fill="url(#h-cry)" ${st(2.6)}/>`,hammer:`
    <path d="M26 30 L46 58" stroke="${se}" stroke-width="13" stroke-linecap="round"/>
    <path d="M26 30 L46 58" stroke="url(#h-wood-x)" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M8 26 L22 8 L32 14 L40 10 L50 18 L42 26 L34 24 L20 40 Z" fill="url(#h-steel)" ${st()}/>
    <path d="M14 24 L23 13 L30 17 L22 22 Z" fill="#fff" opacity=".85"/>`,shield:`
    <path d="M32 5 L54 13 L54 30 C54 45 44 55 32 59 C20 55 10 45 10 30 L10 13 Z" fill="url(#h-steel)" ${st()}/>
    <path d="M32 12 L47 17.5 L47 30 C47 40 41 47 32 51 Z" fill="#9aa2b8" opacity=".55"/>
    <path d="M17 18 L29 13.5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>`,lock:`
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="${se}" stroke-width="11"/>
    <path d="M20 28 L20 20 C20 13 25 8 32 8 C39 8 44 13 44 20 L44 28" fill="none" stroke="url(#h-steel)" stroke-width="5"/>
    <rect x="12" y="26" width="40" height="32" rx="7" fill="url(#h-gold)" ${st()}/>
    <circle cx="32" cy="40" r="4.5" fill="${se}"/><rect x="30" y="41" width="4" height="9" rx="2" fill="${se}"/>`,heart:`
    <path d="M32 56 C18 46 6 36 6 22 C6 13 13 7 21 7 C26 7 30 10 32 14 C34 10 38 7 43 7 C51 7 58 13 58 22 C58 36 46 46 32 56 Z" fill="url(#h-red)" ${st()}/>
    <path d="M14 18 C15 14 18 12 22 12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>`,sword:`<g transform="rotate(38 32 32)">${ec}</g>`,boot:`
    <path d="M18 6 L36 6 L36 34 C44 36 54 40 56 48 L56 56 L10 56 L10 46 C14 44 18 40 18 34 Z" fill="url(#h-leather)" ${st()}/>
    <path d="M10 50 L56 50" stroke="${se}" stroke-width="2.6"/>
    <path d="M16 6 L38 6 L38 14 L16 14 Z" fill="#c58a52" ${st(3)}/>
    <path d="M23 18 C23 26 23 32 21 38" stroke="#f0a76a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,target:`
    <circle cx="32" cy="32" r="26" fill="url(#h-white)" ${st()}/>
    <circle cx="32" cy="32" r="17" fill="url(#h-red)" ${st(2.6)}/>
    <circle cx="32" cy="32" r="8" fill="url(#h-white)" ${st(2.4)}/>
    <path d="M32 32 L58 6" stroke="${se}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 L58 6" stroke="url(#h-wood-x)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M50 6 L58 6 L58 14" fill="none" stroke="${se}" stroke-width="3" stroke-linejoin="round"/>`,person:`
    <circle cx="32" cy="18" r="11" fill="url(#h-cream)" ${st()}/>
    <path d="M12 58 C12 42 20 34 32 34 C44 34 52 42 52 58 Z" fill="url(#h-cream)" ${st()}/>`,info:`
    <circle cx="32" cy="32" r="26" fill="url(#h-steel)" ${st()}/>
    <circle cx="32" cy="18" r="4.5" fill="${se}"/><rect x="27.5" y="27" width="9" height="22" rx="3" fill="${se}"/>`,minus:`<path d="M16 32 L48 32" stroke="${se}" stroke-width="15" stroke-linecap="round"/><path d="M16 32 L48 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,arrow:`<path d="M8 24 L34 24 L34 10 L58 32 L34 54 L34 40 L8 40 Z" fill="url(#h-gold)" ${st()}/>`,bell:`<circle cx="32" cy="51" r="6" fill="url(#h-gold)" ${st(3)}/>
    <path d="M32 7 C20 7 15 17 15 28 L15 37 L8 46 L56 46 L49 37 L49 28 C49 17 44 7 32 7 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M22 26 C22 19 26 14 31 13" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`,sound:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M42 22 C47 27 47 37 42 42" fill="none" stroke="${se}" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 15 C57 24 57 40 48 49" fill="none" stroke="${se}" stroke-width="5" stroke-linecap="round"/>`,mute:`<path d="M8 24 L20 24 L34 11 L34 53 L20 40 L8 40 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M42 24 L56 40 M56 24 L42 40" fill="none" stroke="${se}" stroke-width="5.5" stroke-linecap="round"/>`,check:`<path d="M12 34 L26 48 L52 18" fill="none" stroke="${se}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 34 L26 48 L52 18" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>`,move:`
    <path d="M32 4 L42 16 L35 16 L35 29 L48 29 L48 22 L60 32 L48 42 L48 35 L35 35 L35 48 L42 48 L32 60 L22 48 L29 48 L29 35 L16 35 L16 42 L4 32 L16 22 L16 29 L29 29 L29 16 L22 16 Z" fill="url(#h-white)" ${st()}/>`,barracks:`
    <path d="M10 30 L54 30 L54 58 L10 58 Z" fill="url(#h-cream)" ${st()}/>
    <path d="M10 46 L54 46 L54 58 L10 58 Z" fill="#cfc6b6" ${st(3)}/>
    <path d="M4 33 L32 8 L60 33 L53 36 L32 17 L11 36 Z" fill="url(#h-roof)" ${st()}/>
    <path d="M24 58 L24 46 C24 40 40 40 40 46 L40 58 Z" fill="url(#h-wood)" ${st(3)}/>
    <path d="M24 26 L40 26 L40 34 C40 39 36 42 32 43 C28 42 24 39 24 34 Z" fill="url(#h-red)" ${st(2.6)}/>
    <path d="M27 28 L37 39 M37 28 L27 39" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,tower:`
    <path d="M20 34 L44 34 L47 61 L17 61 Z" fill="url(#h-white)" ${st()}/>
    <path d="M19 44 L45 44 M18 53 L46 53 M28 34 L28 44 M38 44 L38 53 M27 53 L27 61" stroke="#a89f8c" stroke-width="2.2"/>
    <path d="M14 22 L50 22 L50 34 L14 34 Z" fill="url(#h-wood)" ${st()}/>
    <path d="M20 22 L20 34 M27 22 L27 34 M37 22 L37 34 M44 22 L44 34" stroke="#7c4420" stroke-width="2.2"/>
    <path d="M30 44 L34 44 L34 52 L30 52 Z" fill="${se}"/>
    <path d="M9 24 L32 2 L55 24 Z" fill="url(#h-roof)" ${st()}/>
    <path d="M17 21 L32 7 L29 21 Z" fill="#fff" opacity=".4"/>`,mortar:`
    <ellipse cx="32" cy="48" rx="26" ry="11" fill="url(#h-white)" ${st()}/>
    <path d="M6 48 L6 53 C6 59 58 59 58 53 L58 48" fill="#b8ae99" ${st()}/>
    <path d="M18 44 C16 30 22 18 34 12 L46 30 C40 36 34 42 30 48 Z" fill="#4a4f5e" ${st()}/>
    <ellipse cx="40" cy="21" rx="8" ry="11" transform="rotate(-56 40 21)" fill="#2b2f3a" ${st()}/>
    <path d="M22 40 C21 31 25 23 32 18" stroke="#9aa1b5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="40" r="5" fill="#3a3f4c" ${st(2.4)}/>`,wall:`
    <path d="M4 30 C4 24 12 22 16 26 C20 21 28 21 32 26 C36 21 44 21 48 26 C52 22 60 24 60 30 L60 56 L4 56 Z" fill="url(#h-white)" ${st()}/>
    <path d="M4 42 L60 42 M18 30 L18 42 M32 30 L32 42 M46 30 L46 42 M11 42 L11 56 M25 42 L25 56 M39 42 L39 56 M53 42 L53 56" stroke="#9b917c" stroke-width="2.4"/>
    <path d="M8 31 C10 27 14 27 15 29" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,chest:`
    <path d="M8 30 L56 30 L56 56 L8 56 Z" fill="url(#h-wood)" ${st()}/>
    <path d="M8 30 C8 16 56 16 56 30 Z" fill="url(#h-wood)" ${st()}/>
    <path d="M8 36 L56 36" stroke="${se}" stroke-width="3"/>
    <path d="M18 18 L18 56 M46 18 L46 56" stroke="${se}" stroke-width="7"/><path d="M18 19 L18 55 M46 19 L46 55" stroke="url(#h-gold)" stroke-width="3.6"/>
    <rect x="27" y="32" width="10" height="11" rx="2" fill="url(#h-gold)" ${st(2.4)}/>`,replay:`
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="${se}" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 8 A24 24 0 1 1 9 26" fill="none" stroke="url(#h-white)" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 10 L16 30 L22 12 Z" fill="url(#h-white)" ${st(2.6)}/>
    <path d="M26 22 L44 32 L26 42 Z" fill="url(#h-gold)" ${st(2.6)}/>`,alert:`
    <path d="M32 5 L60 54 C61 57 59 59 56 59 L8 59 C5 59 3 57 4 54 Z" fill="url(#h-red)" ${st()}/>
    <rect x="28.5" y="20" width="7" height="22" rx="3" fill="#fff" ${st(2)}/>
    <circle cx="32" cy="50" r="4" fill="#fff" ${st(2)}/>`,star:`<path d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z" fill="url(#h-gold)" ${st()}/>
    <path d="M32 13 L37 25 L28 26 Z" fill="#fff" opacity=".7"/>`,gate:`
    <rect x="4" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${st()}/><rect x="46" y="22" width="14" height="36" rx="3" fill="url(#h-white)" ${st()}/>
    <path d="M18 58 L18 34 C18 22 46 22 46 34 L46 58 Z" fill="url(#h-wood)" ${st()}/>
    <path d="M32 26 L32 58" stroke="${se}" stroke-width="3"/>
    <path d="M18 40 L46 40" stroke="url(#h-gold)" stroke-width="3.5"/>`,close:`<path d="M18 18 L46 46 M46 18 L18 46" stroke="${se}" stroke-width="13" stroke-linecap="round"/>
    <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`},on=(r,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${r}"/></svg>`,Xu=!1;function nc(){if(Xu){document.querySelectorAll("img[data-art]").forEach(e=>{e.src=uo[e.dataset.art],e.alt="",e.draggable=!1});return}Xu=!0;let r=document.createElement("style");r.textContent=`@font-face{font-family:"Lilita";src:url(${Fu}) format("woff2");font-display:block}
@font-face{font-family:"Fredoka";src:url(${Nu}) format("woff2");font-weight:300 700;font-display:block}`,document.head.appendChild(r);let t=`<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" aria-hidden="true"><defs>${Wm}</defs>`;for(let[e,n]of Object.entries(Xm))t+=`<symbol id="i-${e}" viewBox="0 0 64 64" overflow="visible">${n}</symbol>`;document.body.insertAdjacentHTML("afterbegin",`${t}</svg>`),document.querySelectorAll("img[data-art]").forEach(e=>{e.src=uo[e.dataset.art],e.alt="",e.draggable=!1})}var $m=r=>`<span class="lvl"><svg viewBox="0 0 48 52"><defs><linearGradient id="lv${r}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e7b8"/><stop offset=".5" stop-color="#d9b25a"/><stop offset="1" stop-color="#a87a26"/></linearGradient></defs>
  <path d="M24 2 L45 14 L45 38 L24 50 L3 38 L3 14 Z" fill="url(#lv${r})" stroke="#26211b" stroke-width="3" stroke-linejoin="round"/><path d="M24 8 L39 17 L24 20 L9 17 Z" fill="#fff" opacity=".45"/></svg><span class="n">${r}</span></span>`,fo=(r,t,e,n,i="")=>`<div class="ctr ${r}">${i?`<span class="max n">${i}</span>`:""}<span class="track"><i style="width:${n}%"></i></span><span class="v n">${e}</span>${on(t)}</div>`,fM=`<button class="x"><span class="face">${on("close")}</span></button>`,pM=`<div class="hud">
  <div class="tl">${fo("cry","crystal","1 240",83,"Max 1 500")}${fo("mush","mushroom","860",57,"Max 1 500")}${fo("rune","rune","3",0)}</div>
  <div class="tc">${fo("nrg","energy","72",72)}<div class="ctr builders"><span class="track"></span><span class="v n">1/2</span>${on("hammer")}</div><div class="ctr shield"><span class="track"></span><span class="v n">2 h 10</span>${on("shield")}</div></div>
  <div class="tr"><b class="n">Jour 1 sur 3</b><span class="n">Migration dans 6 h 20</span></div>
  <div class="bl">
    <div class="units">
      <button class="ubtn on"><span class="face"><img data-art="soldat-tete"></span><span class="st">${on("house")}</span></button>
      <button class="ubtn"><span class="face"><img data-art="recolteur-tete"><span class="tm n">12 min</span></span><span class="st">${on("shovel")}</span></button>
    </div>
    <button class="btn big nav"><span class="face">${on("map")}<span class="lab n">Carte</span></span></button>
  </div>
  <div class="br">
    <button class="btn small neutral"><span class="face">${on("book")}</span><span class="badge n">2</span></button>
    <button class="btn big action"><span class="face">${on("hammer")}<span class="lab n">Construire</span></span></button>
  </div>
</div>`;var qu=`/* The interface of the fantasy village, direction A \xAB Pierre et or \xBB (validated 04/11), as a theme: every colour and
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

/* the army and the harvester: framed buttons with the portrait, a status icon and the time left */
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
/* an attack on its way */
.incoming { position: absolute; left: 50%; top: 34px; transform: translateX(-50%); }
.incoming .face { display: flex; align-items: center; gap: 8px; height: 30px; padding: 0 12px 0 6px; border-radius: 8px; border: 1.5px solid #4a0c06; background: linear-gradient(#e86a55, #bf3a2c 55%, #8f2419);
  box-shadow: 0 2px 0 var(--ink), 0 0 12px 2px rgba(255, 80, 60, .55), inset 0 1.5px 0 rgba(255, 255, 255, .35); }
.incoming .face > .ic { width: 22px; height: 22px; }
.incoming .n { display: flex; align-items: center; gap: 3px; font-size: 13px; }
.incoming .lvl { width: 18px; height: 20px; } .incoming .lvl svg { width: 18px; height: 20px; } .incoming .lvl .n { font-size: 10px; }

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
`;var Zu=`/* A game page in the validated interface (direction A, GDD 04/11): what every page needs around the theme's
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
.hud, .hud > div, .hud .units, .bname, .notap, .mname, .meta, .mcamp, .mscale, .seltimer { pointer-events: none; }
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
#toast { position: fixed; left: 50%; top: calc(var(--t) + 34px); transform: translateX(-50%); z-index: 6; max-width: min(420px, 60vw); padding: 6px 12px 7px; border-radius: 8px;
  background: rgba(38, 33, 27, .82); box-shadow: 0 2px 0 rgba(0, 0, 0, .35), inset 0 0 0 1px rgba(242, 195, 90, .45);
  font: 600 12.5px/1.3 "Fredoka", system-ui, sans-serif; color: #f6efe0; text-align: center; pointer-events: none; }
body.winopen #toast { top: calc(var(--t) + 4px); }
@media (orientation: portrait) { #toast { top: calc(var(--t) + 120px); max-width: 82vw; } }
/* the windows' writing, under the theme's lines */
.jrow .txt { flex: 1; font: 600 12px/1.3 "Fredoka", system-ui, sans-serif; color: #f6efe0; white-space: normal; }
.jlist { max-height: min(220px, 52vh); overflow: auto; -webkit-overflow-scrolling: touch; }
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
.win { max-width: calc(100vw - 28px); }
.srow { flex-wrap: wrap; justify-content: center; }
`;var Yu="./assets/thumb-caserne-QZA7KSDD.webp";var Ku="./assets/thumb-champi-VFSAERTF.webp";var Ju="./assets/thumb-cristal-DYDVW2XR.webp";var Qu="./assets/thumb-maison-QP5FQHND.webp";var ju="./assets/thumb-mortier-5N3HR2GR.webp";var td="./assets/thumb-muraille-UVYJVIR2.webp";var ed="./assets/thumb-tour-PLF3FIO2.webp";var zM={caserne:Yu,champi:Ku,cristal:Ju,maison:Qu,mortier:ju,muraille:td,tour:ed},nd=!1;function FM(){if(nd){nc();return}nd=!0;let r=document.createElement("style");r.textContent=`${qu}
${Zu}`,document.head.prepend(r),document.body.dataset.theme="pierre",nc()}function NM(r){r.querySelectorAll("img[data-art]").forEach(t=>{let e=uo[t.dataset.art];e&&t.src!==e&&(t.src=e,t.alt="",t.draggable=!1)})}var BM=r=>r.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),OM=r=>String(Math.floor(r)).replace(/\B(?=(\d{3})+(?!\d))/g,"\u202F"),HM=r=>{if(r=Math.max(0,r),r<60)return`${Math.ceil(r)} s`;let t=Math.round(r/60);return t<60?`${t} min`:`${Math.floor(t/60)} h ${String(t%60).padStart(2,"0")}`},VM=r=>(r=Math.max(0,Math.ceil(r)),`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`);function GM(r,t,e){let n=r.querySelector(".v");n.textContent!==t&&(n.textContent=t);let i=r.querySelector(".track i");i&&e!==void 0&&(i.style.width=`${Math.max(0,Math.min(100,e))}%`)}var WM=(r,t,e,n,i="")=>`<div class="ctr ${r}">${i?`<span class="max n">${i}</span>`:""}<span class="track">${n===void 0?"":`<i style="width:${n}%"></i>`}</span><span class="v n">${e}</span>${on(t)}</div>`;var qM="./assets/icone-TVGJ5P4R.webp";var qd=0,_h=1,Zd=2;var yh=1,Yd=2,Pn=3,Wn=0,Ve=1,Ln=2,Zn=0,Ai=1,vh=2,Mh=3,wh=4,Kd=5,ci=100,Jd=101,Qd=102,jd=103,tf=104,ef=200,nf=201,rf=202,sf=203,Xo=204,$o=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,Ta=0,Aa=1,Ra=2,Ri=3,Ca=4,Ia=5,Pa=6,La=7,Da=0,mf=1,gf=2,Yn=0,xf=1,bf=2,_f=3,yf=4,vf=5,Mf=6,wf=7,Uc="attached",Sf="detached",Sh=300,Oi=301,Hi=302,Ua=303,ka=304,Hs=306,qo=1e3,li=1001,Zo=1002,$e=1003,Ef=1004;var Vs=1005;var bn=1006,za=1007;var di=1008;var vn=1009,Eh=1010,Th=1011,Pr=1012,Fa=1013,fi=1014,un=1015,Lr=1016,Na=1017,Ba=1018,Dr=1020,Ah=35902,Rh=35899,Ch=1021,Ih=1022,nn=1023,xr=1026,Ur=1027,Oa=1028,Ha=1029,Ph=1030,Va=1031;var Ga=1033,Gs=33776,Ws=33777,Xs=33778,$s=33779,Wa=35840,Xa=35841,$a=35842,qa=35843,Za=36196,Ya=37492,Ka=37496,Ja=37808,Qa=37809,ja=37810,tl=37811,el=37812,nl=37813,il=37814,rl=37815,sl=37816,ol=37817,al=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,gl=36285,xl=36286,Tf=2200,Af=2201,Rf=2202,hs=2300,Yo=2301,Wo=2302,Ei=2400,Ti=2401,us=2402,bl=2500,Cf=2501,Lh=0,Dh=1,_l=2,If=3200,Pf=3201;var qs=0,Lf=1,Kn="",Oe="srgb",Ci="srgb-linear",ds="linear",ae="srgb";var Si=7680,ig=7681;var rg=517;var kc=519,Df=512,Uf=513,kf=514,Uh=515,zf=516,Ff=517,Nf=518,Bf=519,Ko=35044;var kh="300 es",xn=2e3,fs=2001;var Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=1234567,os=Math.PI/180,Ii=180/Math.PI;function ln(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[r&255]+Pe[r>>8&255]+Pe[r>>16&255]+Pe[r>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Jt(r,t,e){return Math.max(t,Math.min(e,r))}function zh(r,t){return(r%t+t)%t}function sg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function og(r,t,e){return r!==t?(e-r)/(t-r):0}function as(r,t,e){return(1-e)*r+e*t}function ag(r,t,e,n){return as(r,t,1-Math.exp(-e*n))}function lg(r,t=1){return t-Math.abs(zh(r,t*2)-t)}function cg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function hg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ug(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dg(r,t){return r+Math.random()*(t-r)}function fg(r){return r*(.5-Math.random())}function pg(r){r!==void 0&&(id=r);let t=id+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(r){return r*os}function gg(r){return r*Ii}function xg(r){return(r&r-1)===0&&r!==0}function bg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _g(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yg(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ve={DEG2RAD:os,RAD2DEG:Ii,generateUUID:ln,clamp:Jt,euclideanModulo:zh,mapLinear:sg,inverseLerp:og,lerp:as,damp:ag,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:xg,ceilPowerOfTwo:bg,floorPowerOfTwo:_g,setQuaternionFromProperEuler:yg,normalize:oe,denormalize:gn},Q=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let A=Math.sqrt(w),C=Math.atan2(A,p*M);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}let y=a*M;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new L,rd=new Ue,Zt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],w=i[4],y=i[7],A=i[2],C=i[5],v=i[8];return s[0]=o*x+a*M+l*A,s[3]=o*g+a*w+l*C,s[6]=o*p+a*y+l*v,s[1]=c*x+h*M+u*A,s[4]=c*g+h*w+u*C,s[7]=c*p+h*y+u*v,s[2]=d*x+f*M+m*A,s[5]=d*g+f*w+m*C,s[8]=d*p+f*y+m*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rc=new Zt;function Fh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function br(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Of(){let r=br("canvas");return r.style.display="block",r}var sd={};function _r(r){r in sd||(sd[r]=!0,console.warn(r))}function Hf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var od=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){let r={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?ds:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ci]:{primaries:t,whitePoint:n,transfer:ds,toXYZ:od,fromXYZ:ad,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:od,fromXYZ:ad,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),r}var te=vg();function Gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Qi,Jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=br("canvas")),Qi.width=t.width,Qi.height=t.height;let i=Qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mg=0,yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(sc(i[o].image)):s.push(sc(i[o]))}else s=sc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function sc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wg=0,oc=new L,ke=class r extends Cn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=li,i=li,s=bn,o=di,a=nn,l=vn,c=r.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ln(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Sh;ke.DEFAULT_ANISOTROPY=1;var ne=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,A=(p+1)/2,C=(h+d)/4,v=(u+x)/4,E=(m+g)/4;return w>y&&w>A?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=C/n,s=v/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=E/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=v/s,i=E/s),this.set(n,i,s,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new ke(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ps=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),mo.subVectors(this.max,Zr),ji.subVectors(t.a,Zr),tr.subVectors(t.b,Zr),er.subVectors(t.c,Zr),ni.subVectors(tr,ji),ii.subVectors(er,tr),yi.subVectors(ji,er);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!ac(e,ji,tr,er,mo)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,ji,tr,er,mo))?!1:(go.crossVectors(ni,ii),e=[go.x,go.y,go.z],ac(e,ji,tr,er,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,po=new _n,ji=new L,tr=new L,er=new L,ni=new L,ii=new L,yi=new L,Zr=new L,mo=new L,go=new L,vi=new L;function ac(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vi.fromArray(r,s);let a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Sg=new _n,Yr=new L,lc=new L,cn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(lc)),this.expandByPoint(Yr.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fn=new L,cc=new L,xo=new L,ri=new L,hc=new L,bo=new L,uc=new L,hi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cc.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(cc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=ri.dot(this.direction),l=-ri.dot(xo),c=ri.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cc).addScaledVector(xo,d),f}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,s){hc.subVectors(e,t),bo.subVectors(n,t),uc.crossVectors(hc,bo);let o=this.direction.dot(uc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(bo.crossVectors(ri,bo));if(l<0)return null;let c=a*this.direction.dot(hc.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(uc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,m,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eg,t,Tg)}lookAt(t,e,n){let i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),si.crossVectors(n,Qe),si.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),si.crossVectors(n,Qe)),si.normalize(),_o.crossVectors(Qe,si),i[0]=si.x,i[4]=_o.x,i[8]=Qe.x,i[1]=si.y,i[5]=_o.y,i[9]=Qe.y,i[2]=si.z,i[6]=_o.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],w=n[7],y=n[11],A=n[15],C=i[0],v=i[4],E=i[8],b=i[12],_=i[1],R=i[5],P=i[9],U=i[13],N=i[2],V=i[6],O=i[10],Y=i[14],z=i[3],Z=i[7],et=i[11],ht=i[15];return s[0]=o*C+a*_+l*N+c*z,s[4]=o*v+a*R+l*V+c*Z,s[8]=o*E+a*P+l*O+c*et,s[12]=o*b+a*U+l*Y+c*ht,s[1]=h*C+u*_+d*N+f*z,s[5]=h*v+u*R+d*V+f*Z,s[9]=h*E+u*P+d*O+f*et,s[13]=h*b+u*U+d*Y+f*ht,s[2]=m*C+x*_+g*N+p*z,s[6]=m*v+x*R+g*V+p*Z,s[10]=m*E+x*P+g*O+p*et,s[14]=m*b+x*U+g*Y+p*ht,s[3]=M*C+w*_+y*N+A*z,s[7]=M*v+w*R+y*V+A*Z,s[11]=M*E+w*P+y*O+A*et,s[15]=M*b+w*U+y*Y+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+g*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,w=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,A=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,C=e*M+n*w+i*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/C;return t[0]=M*v,t[1]=(x*d*s-u*g*s-x*i*f+n*g*f+u*i*p-n*d*p)*v,t[2]=(a*g*s-x*l*s+x*i*c-n*g*c-a*i*p+n*l*p)*v,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*v,t[4]=w*v,t[5]=(h*g*s-m*d*s+m*i*f-e*g*f-h*i*p+e*d*p)*v,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*v,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*v,t[8]=y*v,t[9]=(m*u*s-h*x*s-m*n*f+e*x*f+h*n*p-e*u*p)*v,t[10]=(o*x*s-m*a*s+m*n*c-e*x*c-o*n*p+e*a*p)*v,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*v,t[12]=A*v,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*v,t[14]=(m*a*i-o*x*i-m*n*l+e*x*l+o*n*g-e*a*g)*v,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*v,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,x=o*h,g=o*u,p=a*u,M=l*c,w=l*h,y=l*u,A=n.x,C=n.y,v=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+y)*A,i[2]=(m-w)*A,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(d+p))*C,i[6]=(g+M)*C,i[7]=0,i[8]=(m+w)*v,i[9]=(g-M)*v,i[10]=(1-(d+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=nr.set(i[0],i[1],i[2]).length(),o=nr.set(i[4],i[5],i[6]).length(),a=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);let c=1/s,h=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=xn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===xn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fs)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===xn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===fs)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},nr=new L,pn=new qt,Eg=new L(0,0,0),Tg=new L(1,1,1),si=new L,_o=new L,Qe=new L,ld=new qt,cd=new Ue,qe=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ld,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cd.setFromEuler(this),this.setFromQuaternion(cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ag=0,hd=new L,ir=new Ue,Nn=new qt,yo=new L,Kr=new L,Rg=new L,Cg=new Ue,ud=new L(1,0,0),dd=new L(0,1,0),fd=new L(0,0,1),pd={type:"added"},Ig={type:"removed"},rr={type:"childadded",child:null},dc={type:"childremoved",child:null},ye=class r extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new L,e=new qe,n=new Ue,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new Zt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(ud,t)}rotateY(t){return this.rotateOnAxis(dd,t)}rotateZ(t){return this.rotateOnAxis(fd,t)}translateOnAxis(t,e){return hd.copy(t).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ud,t)}translateY(t){return this.translateOnAxis(dd,t)}translateZ(t){return this.translateOnAxis(fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Kr,yo,this.up):Nn.lookAt(yo,Kr,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(Nn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pd),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ig),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pd),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Rg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new L,Bn=new L,fc=new L,On=new L,sr=new L,or=new L,md=new L,pc=new L,mc=new L,gc=new L,xc=new ne,bc=new ne,_c=new ne,Vn=class r{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mn.subVectors(i,e),Bn.subVectors(n,e),fc.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(Bn),l=mn.dot(fc),c=Bn.dot(Bn),h=Bn.dot(fc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return xc.setScalar(0),bc.setScalar(0),_c.setScalar(0),xc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(xc,s.x),o.addScaledVector(bc,s.y),o.addScaledVector(_c,s.z),o}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Bn.subVectors(t,e),mn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),mn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;sr.subVectors(i,n),or.subVectors(s,n),pc.subVectors(t,n);let l=sr.dot(pc),c=or.dot(pc);if(l<=0&&c<=0)return e.copy(n);mc.subVectors(t,i);let h=sr.dot(mc),u=or.dot(mc);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(sr,o);gc.subVectors(t,s);let f=sr.dot(gc),m=or.dot(gc);if(m>=0&&f<=m)return e.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(or,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return md.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(md,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(sr,o).addScaledVector(or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function yc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=zh(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yc(o,s,t+1/3),this.g=yc(o,s,t),this.b=yc(o,s,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return te.workingToColorSpace(Le.copy(this),t),Math.round(Jt(Le.r*255,0,255))*65536+Math.round(Jt(Le.g*255,0,255))*256+Math.round(Jt(Le.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Le.copy(this),e);let n=Le.r,i=Le.g,s=Le.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Oe){te.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,i=Le.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(vo);let n=as(oi.h,vo.h,e),i=as(oi.s,vo.s,e),s=as(oi.l,vo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new St;St.NAMES=Vf;var Pg=0,tn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Ai,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=$o,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pi=class extends tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new L,Mo=new Q,Lg=0,he=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}};var ms=class extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gs=class extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dg=0,an=new qt,vc=new ye,ar=new L,je=new _n,Jr=new _n,Ae=new L,ue=class r extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?gs:ms)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(je.min,Jr.min),je.expandByPoint(Ae),Ae.addVectors(je.max,Jr.max),je.expandByPoint(Ae)):(je.expandByPoint(Jr.min),je.expandByPoint(Jr.max))}je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(t,c),Ae.add(ar)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new L,l[E]=new L;let c=new L,h=new L,u=new L,d=new Q,f=new Q,m=new Q,x=new L,g=new L;function p(E,b,_){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[E].add(x),a[b].add(x),a[_].add(x),l[E].add(g),l[b].add(g),l[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,b=M.length;E<b;++E){let _=M[E],R=_.start,P=_.count;for(let U=R,N=R+P;U<N;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let w=new L,y=new L,A=new L,C=new L;function v(E){A.fromBufferAttribute(i,E),C.copy(A);let b=a[E];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(C,b);let R=y.dot(l[E])<0?-1:1;o.setXYZW(E,w.x,w.y,w.z,R)}for(let E=0,b=M.length;E<b;++E){let _=M[E],R=_.start,P=_.count;for(let U=R,N=R+P;U<N;U+=3)v(t.getX(U+0)),v(t.getX(U+1)),v(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new he(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gd=new qt,Mi=new hi,wo=new cn,xd=new L,So=new L,Eo=new L,To=new L,Mc=new L,Ao=new L,bd=new L,Ro=new L,He=class extends ye{constructor(t=new ue,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Mc.fromBufferAttribute(u,t),o?Ao.addScaledVector(Mc,h):Ao.addScaledVector(Mc.sub(e),h))}e.add(Ao)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(wo.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(wo,xd)===null||Mi.origin.distanceToSquared(xd)>(t.far-t.near)**2))&&(gd.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(gd),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,A=w;y<A;y+=3){let C=a.getX(y),v=a.getX(y+1),E=a.getX(y+2);i=Co(this,p,t,n,c,h,u,C,v,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=a.getX(g),w=a.getX(g+1),y=a.getX(g+2);i=Co(this,o,t,n,c,h,u,M,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,A=w;y<A;y+=3){let C=y,v=y+1,E=y+2;i=Co(this,p,t,n,c,h,u,C,v,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=g,w=g+1,y=g+2;i=Co(this,o,t,n,c,h,u,M,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Ug(r,t,e,n,i,s,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Wn,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:r}}function Co(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,So),r.getVertexPosition(l,Eo),r.getVertexPosition(c,To);let h=Ug(r,t,e,n,So,Eo,To,bd);if(h){let u=new L;Vn.getBarycoord(bd,So,Eo,To,u),i&&(h.uv=Vn.getInterpolatedAttribute(i,a,l,c,u,new Q)),s&&(h.uv1=Vn.getInterpolatedAttribute(s,a,l,c,u,new Q)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Vn.getNormal(So,Eo,To,d.normal),h.face=d,h.barycoord=u}return h}var Mr=class r extends ue{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function m(x,g,p,M,w,y,A,C,v,E,b){let _=y/v,R=A/E,P=y/2,U=A/2,N=C/2,V=v+1,O=E+1,Y=0,z=0,Z=new L;for(let et=0;et<O;et++){let ht=et*R-U;for(let ft=0;ft<V;ft++){let Dt=ft*_-P;Z[x]=Dt*M,Z[g]=ht*w,Z[p]=N,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[p]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ft/v),u.push(1-et/E),Y+=1}}for(let et=0;et<E;et++)for(let ht=0;ht<v;ht++){let ft=d+ht+V*et,Dt=d+ht+V*(et+1),Nt=d+(ht+1)+V*(et+1),$t=d+(ht+1)+V*et;l.push(ft,Dt,$t),l.push(Dt,Nt,$t),z+=6}a.addGroup(f,z,b),f+=z,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vi(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(r){let t={};for(let e=0;e<r.length;e++){let n=Vi(r[e]);for(let i in n)t[i]=n[i]}return t}function kg(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Nh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Gf={clone:Vi,merge:ze},zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xs=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new L,_d=new Q,yd=new Q,De=class extends xs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,_d,yd),e.subVectors(yd,_d)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},lr=-90,cr=1,ta=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new De(lr,cr,t,e);i.layers=this.layers,this.add(i);let s=new De(lr,cr,t,e);s.layers=this.layers,this.add(s);let o=new De(lr,cr,t,e);o.layers=this.layers,this.add(o);let a=new De(lr,cr,t,e);a.layers=this.layers,this.add(a);let l=new De(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new De(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},bs=class extends ke{constructor(t=[],e=Oi,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ea=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mr(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Zn});s.uniforms.tEquirect.value=e;let o=new He(i,s),a=e.minFilter;return e.minFilter===di&&(e.minFilter=bn),new ta(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Tn=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var zc=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fc=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_s=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Be=new L,Sr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},na=class extends tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hr,Qr=new L,ur=new L,dr=new L,fr=new Q,jr=new Q,Wf=new qt,Io=new L,ts=new L,Po=new L,vd=new Q,wc=new Q,Md=new Q,Nc=class extends ye{constructor(t=new na){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _s(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Sr(n,3,0,!1)),hr.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new Q(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Lo(Io.set(-.5,-.5,0),dr,o,ur,i,s),Lo(ts.set(.5,-.5,0),dr,o,ur,i,s),Lo(Po.set(.5,.5,0),dr,o,ur,i,s),vd.set(0,0),wc.set(1,0),Md.set(1,1);let a=t.ray.intersectTriangle(Io,ts,Po,!1,Qr);if(a===null&&(Lo(ts.set(-.5,.5,0),dr,o,ur,i,s),wc.set(0,1),a=t.ray.intersectTriangle(Io,Po,ts,!1,Qr),a===null))return;let l=t.ray.origin.distanceTo(Qr);l<t.near||l>t.far||e.push({distance:l,point:Qr.clone(),uv:Vn.getInterpolation(Qr,Io,ts,Po,vd,wc,Md,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Lo(r,t,e,n,i,s){fr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(jr.x=s*fr.x-i*fr.y,jr.y=i*fr.x+s*fr.y):jr.copy(fr),r.copy(t),r.x+=jr.x,r.y+=jr.y,r.applyMatrix4(Wf)}var wd=new L,Sd=new ne,Ed=new ne,Bg=new L,Td=new qt,Do=new L,Sc=new cn,Ad=new qt,Ec=new hi,Bc=class extends He{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Do),this.boundingBox.expandByPoint(Do)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Do),this.boundingSphere.expandByPoint(Do)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(i),t.ray.intersectsSphere(Sc)!==!1&&(Ad.copy(i).invert(),Ec.copy(t.ray).applyMatrix4(Ad),!(this.boundingBox!==null&&Ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ec)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Sd.fromBufferAttribute(i.attributes.skinIndex,t),Ed.fromBufferAttribute(i.attributes.skinWeight,t),wd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let o=Ed.getComponent(s);if(o!==0){let a=Sd.getComponent(s);Td.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Bg.copy(wd).applyMatrix4(Td),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},ia=class extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},ys=class extends ke{constructor(t=null,e=1,n=1,i,s,o,a,l,c=$e,h=$e,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rd=new qt,Og=new qt,Oc=class r{constructor(t=[],e=[]){this.uuid=ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:Og;Rd.multiplyMatrices(a,e[s]),Rd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ys(e,t,t,nn,un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ia),this.bones.push(o),this.boneInverses.push(new qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Er=class extends he{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pr=new qt,Cd=new qt,Uo=[],Id=new _n,Hg=new qt,es=new He,ns=new cn,Tr=class extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Id.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Id)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),ns.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,pr),Cd.multiplyMatrices(n,pr),es.matrixWorld=Cd,es.raycast(t,Uo);for(let o=0,a=Uo.length;o<a;o++){let l=Uo[o];l.instanceId=s,l.object=this,e.push(l)}Uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(i*this.count),i,this.count,Oa,un));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tc=new L,Vg=new L,Gg=new Zt,En=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Tc.subVectors(n,e).cross(Vg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gg.getNormalMatrix(t),i=this.coplanarPoint(Tc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new cn,Wg=new Q(.5,.5),ko=new L,Ar=class{constructor(t=new En,e=new En,n=new En,i=new En,s=new En,o=new En){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],M=s[12],w=s[13],y=s[14],A=s[15];if(i[0].setComponents(c-o,f-h,p-m,A-M).normalize(),i[1].setComponents(c+o,f+h,p+m,A+M).normalize(),i[2].setComponents(c+a,f+u,p+x,A+w).normalize(),i[3].setComponents(c-a,f-u,p-x,A-w).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,p-g,A-y).normalize();else if(i[4].setComponents(c-l,f-d,p-g,A-y).normalize(),e===xn)i[5].setComponents(c+l,f+d,p+g,A+y).normalize();else if(e===fs)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);let e=Wg.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ko.x=i.normal.x>0?t.max.x:t.min.x,ko.y=i.normal.y>0?t.max.y:t.min.y,ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ra=class extends tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sa=new L,oa=new L,Pd=new qt,is=new hi,zo=new cn,Ac=new L,Ld=new L,vs=class extends ye{constructor(t=new ue,e=new ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)sa.fromBufferAttribute(e,i-1),oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sa.distanceTo(oa);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=s,t.ray.intersectsSphere(zo)===!1)return;Pd.copy(i).invert(),is.copy(t.ray).applyMatrix4(Pd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),M=h.getX(x+1),w=Fo(this,t,is,l,p,M,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Fo(this,t,is,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Fo(this,t,is,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Fo(this,t,is,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fo(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(sa.fromBufferAttribute(a,i),oa.fromBufferAttribute(a,s),e.distanceSqToSegment(sa,oa,Ac,Ld)>n)return;Ac.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Ac);if(!(c<t.near||c>t.far))return{distance:c,point:Ld.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Dd=new L,Ud=new L,Hc=class extends vs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dd.distanceTo(Ud);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vc=class extends vs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},aa=class extends tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kd=new qt,Gc=new hi,No=new cn,Bo=new L,Wc=class extends ye{constructor(t=new ue,e=new aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=s,t.ray.intersectsSphere(No)===!1)return;kd.copy(i).invert(),Gc.copy(t.ray).applyMatrix4(kd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);Bo.fromBufferAttribute(u,g),zd(Bo,g,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Bo.fromBufferAttribute(u,m),zd(Bo,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zd(r,t,e,n,i,s,o){let a=Gc.distanceSqToPoint(r);if(a<e){let l=new L;Gc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ms=class extends ke{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends ke{constructor(t,e,n=fi,i,s,o,a=$e,l=$e,c,h=xr,u=1){if(h!==xr&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ss=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Xc=class r extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new L,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ze=class r extends ue{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function M(){let y=new L,A=new L,C=0,v=(e-t)/n;for(let E=0;E<=s;E++){let b=[],_=E/s,R=_*(e-t)+t;for(let P=0;P<=i;P++){let U=P/i,N=U*l+a,V=Math.sin(N),O=Math.cos(N);A.x=R*V,A.y=-_*n+g,A.z=R*O,u.push(A.x,A.y,A.z),y.set(V,v,O).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-_),b.push(m++)}x.push(b)}for(let E=0;E<i;E++)for(let b=0;b<s;b++){let _=x[b][E],R=x[b+1][E],P=x[b+1][E+1],U=x[b][E+1];(t>0||b!==0)&&(h.push(_,R,U),C+=3),(e>0||b!==s-1)&&(h.push(R,P,U),C+=3)}c.addGroup(p,C,0),p+=C}function w(y){let A=m,C=new Q,v=new L,E=0,b=y===!0?t:e,_=y===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;let R=m;for(let P=0;P<=i;P++){let N=P/i*l+a,V=Math.cos(N),O=Math.sin(N);v.x=b*O,v.y=g*_,v.z=b*V,u.push(v.x,v.y,v.z),d.push(0,_,0),C.x=V*.5+.5,C.y=O*.5*_+.5,f.push(C.x,C.y),m++}for(let P=0;P<i;P++){let U=A+P,N=R+P;y===!0?h.push(N,N+1,U):h.push(N+1,N,U),E+=3}c.addGroup(p,E,y===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$c=class r extends Ze{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Es=class r extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(s.slice(),3)),this.setAttribute("uv",new Vt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new L,y=new L,A=new L;for(let C=0;C<e.length;C+=3)f(e[C+0],w),f(e[C+1],y),f(e[C+2],A),l(w,y,A,M)}function l(M,w,y,A){let C=A+1,v=[];for(let E=0;E<=C;E++){v[E]=[];let b=M.clone().lerp(y,E/C),_=w.clone().lerp(y,E/C),R=C-E;for(let P=0;P<=R;P++)P===0&&E===C?v[E][P]=b:v[E][P]=b.clone().lerp(_,P/R)}for(let E=0;E<C;E++)for(let b=0;b<2*(C-E)-1;b++){let _=Math.floor(b/2);b%2===0?(d(v[E][_+1]),d(v[E+1][_]),d(v[E][_])):(d(v[E][_+1]),d(v[E+1][_+1]),d(v[E+1][_]))}}function c(M){let w=new L;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(M),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function h(){let M=new L;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];let y=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(y,1-A)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let w=o[M+0],y=o[M+2],A=o[M+4],C=Math.max(w,y,A),v=Math.min(w,y,A);C>.9&&v<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,w){let y=M*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function m(){let M=new L,w=new L,y=new L,A=new L,C=new Q,v=new Q,E=new Q;for(let b=0,_=0;b<s.length;b+=9,_+=6){M.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),C.set(o[_+0],o[_+1]),v.set(o[_+2],o[_+3]),E.set(o[_+4],o[_+5]),A.copy(M).add(w).add(y).divideScalar(3);let R=g(A);x(C,_+0,M,R),x(v,_+2,w,R),x(E,_+4,y,R)}}function x(M,w,y,A){A<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},qc=class r extends Es{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Q:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],s=[],o=[],a=new L,l=new qt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Jt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Jt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rr=class extends en{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},la=class extends Rr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Oo=new L,Rc=new Bh,Cc=new Bh,Ic=new Bh,ca=class extends en{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Oo.subVectors(i[0],i[1]).add(i[0]),c=Oo);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Oo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Rc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),Cc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),Ic.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Cc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ic.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Rc.calc(l),Cc.calc(l),Ic.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fd(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Xg(r,t){let e=1-r;return e*e*t}function $g(r,t){return 2*(1-r)*r*t}function qg(r,t){return r*r*t}function ls(r,t,e,n){return Xg(r,t)+$g(r,e)+qg(r,n)}function Zg(r,t){let e=1-r;return e*e*e*t}function Yg(r,t){let e=1-r;return 3*e*e*r*t}function Kg(r,t){return 3*(1-r)*r*r*t}function Jg(r,t){return r*r*r*t}function cs(r,t,e,n,i){return Zg(r,t)+Yg(r,e)+Kg(r,n)+Jg(r,i)}var Ts=class extends en{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,i.x,s.x,o.x,a.x),cs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ha=class extends en{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,i.x,s.x,o.x,a.x),cs(t,i.y,s.y,o.y,a.y),cs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},As=class extends en{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends en{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rs=class extends en{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ls(t,i.x,s.x,o.x),ls(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends en{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ls(t,i.x,s.x,o.x),ls(t,i.y,s.y,o.y),ls(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Li=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Fd(a,l.x,c.x,h.x,u.x),Fd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Q().fromArray(i))}return this}},Zc=Object.freeze({__proto__:null,ArcCurve:la,CatmullRomCurve3:ca,CubicBezierCurve:Ts,CubicBezierCurve3:ha,EllipseCurve:Rr,LineCurve:As,LineCurve3:ua,QuadraticBezierCurve:Rs,QuadraticBezierCurve3:da,SplineCurve:Li}),fa=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Zc[i.type]().fromJSON(i))}return this}},Cs=class extends fa{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new As(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Rs(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Ts(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Li(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Rr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cr=class extends Cs{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Cs().fromJSON(i))}return this}};function Qg(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Xf(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=i0(r,t,s,e)),r.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){let f=r[d],m=r[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Is(s,o,e,a,l,c,0),o}function Xf(r,t,e,n,i){let s;if(i===p0(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=Nd(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Nd(o/n|0,r[o],r[o+1],s);return s&&Ir(s,s.next)&&(Ls(s),s=s.next),s}function Di(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ir(e,e.next)||be(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(r,t,e,n,i,s,o){if(!r)return;!o&&s&&l0(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?t0(r,n,i,s):jg(r)){t.push(l.i,r.i,c.i),Ls(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=e0(Di(r),t),Is(r,t,e,n,i,s,2)):o===2&&n0(r,t,e,n,i,s):Is(Di(r),t,e,n,i,s,1);break}}}function jg(r){let t=r.prev,e=r,n=r.next;if(be(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ss(i,a,s,l,o,c,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function t0(r,t,e,n){let i=r.prev,s=r,o=r.next;if(be(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=Yc(f,m,t,e,n),M=Yc(x,g,t,e,n),w=r.prevZ,y=r.nextZ;for(;w&&w.z>=p&&y&&y.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==i&&w!==o&&ss(a,h,l,u,c,d,w.x,w.y)&&be(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ss(a,h,l,u,c,d,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==i&&w!==o&&ss(a,h,l,u,c,d,w.x,w.y)&&be(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ss(a,h,l,u,c,d,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function e0(r,t){let e=r;do{let n=e.prev,i=e.next.next;!Ir(n,i)&&qf(n,e,e.next,i)&&Ps(n,i)&&Ps(i,n)&&(t.push(n.i,e.i,i.i),Ls(e),Ls(e.next),e=r=i),e=e.next}while(e!==r);return Di(e)}function n0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&u0(o,a)){let l=Zf(o,a);o=Di(o,o.next),l=Di(l,l.next),Is(o,t,e,n,i,s,0),Is(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function i0(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Xf(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(h0(c))}i.sort(r0);for(let s=0;s<i.length;s++)e=s0(i[s],e);return e}function r0(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function s0(r,t){let e=o0(r,t);if(!e)return t;let n=Zf(e,r);return Di(n,n.next),Di(e,e.next)}function o0(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(Ir(r,e))return e;do{if(Ir(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$f(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);Ps(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&a0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function a0(r,t){return be(r.prev,r,t.prev)<0&&be(t.next,r,r.next)<0}function l0(r,t,e,n){let i=r;do i.z===0&&(i.z=Yc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,c0(i)}function c0(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function Yc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function h0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function $f(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function ss(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&$f(r,t,e,n,i,s,o,a)}function u0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!d0(r,t)&&(Ps(r,t)&&Ps(t,r)&&f0(r,t)&&(be(r.prev,r,t.prev)||be(r,t.prev,t))||Ir(r,t)&&be(r.prev,r,r.next)>0&&be(t.prev,t,t.next)>0)}function be(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ir(r,t){return r.x===t.x&&r.y===t.y}function qf(r,t,e,n){let i=Vo(be(r,t,e)),s=Vo(be(r,t,n)),o=Vo(be(e,n,r)),a=Vo(be(e,n,t));return!!(i!==s&&o!==a||i===0&&Ho(r,e,t)||s===0&&Ho(r,n,t)||o===0&&Ho(e,r,n)||a===0&&Ho(e,t,n))}function Ho(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Vo(r){return r>0?1:r<0?-1:0}function d0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&qf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ps(r,t){return be(r.prev,r,r.next)<0?be(r,t,r.next)>=0&&be(r,r.prev,t)>=0:be(r,t,r.prev)<0||be(r,r.next,t)<0}function f0(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Zf(r,t){let e=Kc(r.i,r.x,r.y),n=Kc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Nd(r,t,e,n){let i=Kc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ls(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function p0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Jc=class{static triangulate(t,e,n=2){return Qg(t,e,n)}},An=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Bd(t),Od(n,t);let o=t.length;e.forEach(Bd);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Od(n,e[l]);let a=Jc.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Bd(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Od(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var pa=class r extends ue{constructor(t=new Cr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Vt(i,3)),this.setAttribute("uv",new Vt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:m0,w,y=!1,A,C,v,E;p&&(w=p.getSpacedPoints(h),y=!0,d=!1,A=p.computeFrenetFrames(h,!1),C=new L,v=new L,E=new L),d||(g=0,f=0,m=0,x=0);let b=a.extractPoints(c),_=b.shape,R=b.holes;if(!An.isClockWise(_)){_=_.reverse();for(let rt=0,j=R.length;rt<j;rt++){let J=R[rt];An.isClockWise(J)&&(R[rt]=J.reverse())}}function U(rt){let J=10000000000000001e-36,K=rt[0];for(let pt=1;pt<=rt.length;pt++){let ot=pt%rt.length,mt=rt[ot],Wt=mt.x-K.x,Gt=mt.y-K.y,I=Wt*Wt+Gt*Gt,S=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(K.x),Math.abs(K.y)),H=J*S*S;if(I<=H){rt.splice(ot,1),pt--;continue}K=mt}}U(_),R.forEach(U);let N=R.length,V=_;for(let rt=0;rt<N;rt++){let j=R[rt];_=_.concat(j)}function O(rt,j,J){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(j,J)}let Y=_.length;function z(rt,j,J){let K,pt,ot,mt=rt.x-j.x,Wt=rt.y-j.y,Gt=J.x-rt.x,I=J.y-rt.y,S=mt*mt+Wt*Wt,H=mt*I-Wt*Gt;if(Math.abs(H)>Number.EPSILON){let X=Math.sqrt(S),it=Math.sqrt(Gt*Gt+I*I),$=j.x-Wt/X,Pt=j.y+mt/X,dt=J.x-I/it,Rt=J.y+Gt/it,Ct=((dt-$)*I-(Rt-Pt)*Gt)/(mt*I-Wt*Gt);K=$+mt*Ct-rt.x,pt=Pt+Wt*Ct-rt.y;let at=K*K+pt*pt;if(at<=2)return new Q(K,pt);ot=Math.sqrt(at/2)}else{let X=!1;mt>Number.EPSILON?Gt>Number.EPSILON&&(X=!0):mt<-Number.EPSILON?Gt<-Number.EPSILON&&(X=!0):Math.sign(Wt)===Math.sign(I)&&(X=!0),X?(K=-Wt,pt=mt,ot=Math.sqrt(S)):(K=mt,pt=Wt,ot=Math.sqrt(S/2))}return new Q(K/ot,pt/ot)}let Z=[];for(let rt=0,j=V.length,J=j-1,K=rt+1;rt<j;rt++,J++,K++)J===j&&(J=0),K===j&&(K=0),Z[rt]=z(V[rt],V[J],V[K]);let et=[],ht,ft=Z.concat();for(let rt=0,j=N;rt<j;rt++){let J=R[rt];ht=[];for(let K=0,pt=J.length,ot=pt-1,mt=K+1;K<pt;K++,ot++,mt++)ot===pt&&(ot=0),mt===pt&&(mt=0),ht[K]=z(J[K],J[ot],J[mt]);et.push(ht),ft=ft.concat(ht)}let Dt;if(g===0)Dt=An.triangulateShape(V,R);else{let rt=[],j=[];for(let J=0;J<g;J++){let K=J/g,pt=f*Math.cos(K*Math.PI/2),ot=m*Math.sin(K*Math.PI/2)+x;for(let mt=0,Wt=V.length;mt<Wt;mt++){let Gt=O(V[mt],Z[mt],ot);Ut(Gt.x,Gt.y,-pt),K===0&&rt.push(Gt)}for(let mt=0,Wt=N;mt<Wt;mt++){let Gt=R[mt];ht=et[mt];let I=[];for(let S=0,H=Gt.length;S<H;S++){let X=O(Gt[S],ht[S],ot);Ut(X.x,X.y,-pt),K===0&&I.push(X)}K===0&&j.push(I)}}Dt=An.triangulateShape(rt,j)}let Nt=Dt.length,$t=m+x;for(let rt=0;rt<Y;rt++){let j=d?O(_[rt],ft[rt],$t):_[rt];y?(v.copy(A.normals[0]).multiplyScalar(j.x),C.copy(A.binormals[0]).multiplyScalar(j.y),E.copy(w[0]).add(v).add(C),Ut(E.x,E.y,E.z)):Ut(j.x,j.y,0)}for(let rt=1;rt<=h;rt++)for(let j=0;j<Y;j++){let J=d?O(_[j],ft[j],$t):_[j];y?(v.copy(A.normals[rt]).multiplyScalar(J.x),C.copy(A.binormals[rt]).multiplyScalar(J.y),E.copy(w[rt]).add(v).add(C),Ut(E.x,E.y,E.z)):Ut(J.x,J.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let j=rt/g,J=f*Math.cos(j*Math.PI/2),K=m*Math.sin(j*Math.PI/2)+x;for(let pt=0,ot=V.length;pt<ot;pt++){let mt=O(V[pt],Z[pt],K);Ut(mt.x,mt.y,u+J)}for(let pt=0,ot=R.length;pt<ot;pt++){let mt=R[pt];ht=et[pt];for(let Wt=0,Gt=mt.length;Wt<Gt;Wt++){let I=O(mt[Wt],ht[Wt],K);y?Ut(I.x,I.y+w[h-1].y,w[h-1].x+J):Ut(I.x,I.y,u+J)}}}q(),nt();function q(){let rt=i.length/3;if(d){let j=0,J=Y*j;for(let K=0;K<Nt;K++){let pt=Dt[K];At(pt[2]+J,pt[1]+J,pt[0]+J)}j=h+g*2,J=Y*j;for(let K=0;K<Nt;K++){let pt=Dt[K];At(pt[0]+J,pt[1]+J,pt[2]+J)}}else{for(let j=0;j<Nt;j++){let J=Dt[j];At(J[2],J[1],J[0])}for(let j=0;j<Nt;j++){let J=Dt[j];At(J[0]+Y*h,J[1]+Y*h,J[2]+Y*h)}}n.addGroup(rt,i.length/3-rt,0)}function nt(){let rt=i.length/3,j=0;vt(V,j),j+=V.length;for(let J=0,K=R.length;J<K;J++){let pt=R[J];vt(pt,j),j+=pt.length}n.addGroup(rt,i.length/3-rt,1)}function vt(rt,j){let J=rt.length;for(;--J>=0;){let K=J,pt=J-1;pt<0&&(pt=rt.length-1);for(let ot=0,mt=h+g*2;ot<mt;ot++){let Wt=Y*ot,Gt=Y*(ot+1),I=j+K+Wt,S=j+pt+Wt,H=j+pt+Gt,X=j+K+Gt;Qt(I,S,H,X)}}}function Ut(rt,j,J){l.push(rt),l.push(j),l.push(J)}function At(rt,j,J){de(rt),de(j),de(J);let K=i.length/3,pt=M.generateTopUV(n,i,K-3,K-2,K-1);D(pt[0]),D(pt[1]),D(pt[2])}function Qt(rt,j,J,K){de(rt),de(j),de(K),de(j),de(J),de(K);let pt=i.length/3,ot=M.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);D(ot[0]),D(ot[1]),D(ot[3]),D(ot[1]),D(ot[2]),D(ot[3])}function de(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function D(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return g0(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Zc[i.type]().fromJSON(i)),new r(n,t.options)}},m0={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(s,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(d,1-m),new Q(x,1-p)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-m),new Q(g,1-p)]}};function g0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yn=class r extends Es{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ds=class r extends ue{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new Q,f=new L,m=new L,x=new L,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let M=0;M<=e;M++){let w=n+M*h*i,y=Math.sin(w),A=Math.cos(w);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*y,u.y=t[C].y,u.z=t[C].x*A,o.push(u.x,u.y,u.z),d.x=M/e,d.y=C/(t.length-1),a.push(d.x,d.y);let v=l[3*C+0]*y,E=l[3*C+1],b=l[3*C+0]*A;c.push(v,E,b)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let y=w+M*t.length,A=y,C=y+t.length,v=y+t.length+1,E=y+1;s.push(A,C,E),s.push(v,E,C)}this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("uv",new Vt(a,2)),this.setAttribute("normal",new Vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ui=class r extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*d-o;for(let w=0;w<c;w++){let y=w*u-s;m.push(y,-M,0),x.push(0,0,1),g.push(w/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let w=M+c*p,y=M+c*(p+1),A=M+1+c*(p+1),C=M+1+c*p;f.push(w,y,C),f.push(y,A,C)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Us=class r extends ue{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new L,m=new Q;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=s+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let M=p+g,w=M,y=M+n+1,A=M+n+2,C=M+1;a.push(w,y,C),a.push(y,A,C)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Qc=class r extends ue{constructor(t=new Cr([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(i,3)),this.setAttribute("normal",new Vt(s,3)),this.setAttribute("uv",new Vt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;An.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];An.isClockWise(M)===!0&&(m[g]=M.reverse())}let x=An.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=x.length;g<p;g++){let M=x[g],w=M[0]+u,y=M[1]+u,A=M[2]+u;n.push(w,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return x0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let o=e[t.shapes[i]];n.push(o)}return new r(n,t.curveSegments)}};function x0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var ma=class r extends ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let M=[],w=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let C=A/e;u.x=-t*Math.cos(i+C*s)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+C*s)*Math.sin(o+w*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(C+y,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let w=h[p][M+1],y=h[p][M],A=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&f.push(w,y,C),(p!==n-1||l<Math.PI)&&f.push(y,A,C)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jc=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xn=class extends tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},th=class extends Xn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var eh=class extends tn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},nh=class extends tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Go(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function b0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _0(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Hd(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Yf(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}var ki=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ba=class extends ki{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ei,endingEnd:Ei}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ti:s=t,a=2*e-n;break;case us:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ti:o=t,l=2*n-e;break;case us:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+M*o[c+A]+w*o[l+A]+y*o[u+A];return s}},ks=class extends ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},_a=class extends ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ye=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Go(e,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Go(t.times,Array),values:Go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ks(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ba(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case hs:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Wo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&b0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=Yo;var $n=class extends Ye{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=hs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends Ye{constructor(t,e,n,i){super(t,e,n,i)}};zs.prototype.ValueTypeName="color";var zi=class extends Ye{constructor(t,e,n,i){super(t,e,n,i)}};zi.prototype.ValueTypeName="number";var ya=class extends ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ue.slerpFlat(s,0,o,c-a,o,c,l);return s}},Fi=class extends Ye{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Ye{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=hs;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Ye{constructor(t,e,n,i){super(t,e,n,i)}};Ni.prototype.ValueTypeName="vector";var Fs=class{constructor(t="",e=-1,n=[],i=bl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(v0(n[o]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(Ye.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=_0(l);l=Hd(l,1,h),c=Hd(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new zi(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];Yf(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){let w=d[m];g.push(w.time),p.push(w.morphTarget===x?1:0)}i.push(new zi(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{let f=".bones["+e[u].name+"]";n(Ni,f+".position",d,"pos",i),n(Fi,f+".quaternion",d,"rot",i),n(Ni,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function y0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return zs;case"quaternion":return Fi;case"bool":case"boolean":return $n;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function v0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=y0(r.type);if(r.times===void 0){let e=[],n=[];Yf(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var Rn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},va=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Kf=new va,ui=class{constructor(t){this.manager=t!==void 0?t:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hn={},ih=class extends Error{constructor(t,e){super(t),this.response=e}},rh=class extends ui{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Rn.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Hn[t]!==void 0){Hn[t].push({onLoad:e,onProgress:n,onError:i});return}Hn[t]=[],Hn[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Hn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){M();function M(){u.read().then(({done:w,value:y})=>{if(w)p.close();else{x+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let C=0,v=h.length;C<v;C++){let E=h[C];E.onProgress&&E.onProgress(A)}p.enqueue(y),M()}},w=>{p.error(w)})}}});return new Response(g)}else throw new ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Rn.add(`file:${t}`,c);let h=Hn[t];delete Hn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Hn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Hn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var mr=new WeakMap,Ma=class extends ui{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Rn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=mr.get(o);u===void 0&&(u=[],mr.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=br("img");function l(){h(),e&&e(this);let u=mr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}mr.delete(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),Rn.remove(`image:${t}`);let d=mr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}mr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Rn.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Ns=class extends ui{constructor(t){super(t)}load(t,e,n,i){let s=new ke,o=new Ma(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Bi=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sh=class extends Bi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Pc=new qt,Vd=new L,Gd=new L,Bs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),Pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oh=class extends Bs{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ii*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ah=class extends Bi{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new oh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Wd=new qt,rs=new L,Lc=new L,lh=class extends Bs{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(rs),Lc.copy(n.position),Lc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lc),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,n.coordinateSystem,n.reversedDepth)}},ch=class extends Bi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Os=class extends xs{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hh=class extends Bs{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uh=class extends Bi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var dh=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Dc=new WeakMap,fh=class extends ui{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Rn.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{if(Dc.has(o)===!0)i&&i(Dc.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Rn.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Dc.set(l,c),Rn.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Rn.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wa=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ph=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Sa=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ue.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let o=this._workIndex*s;Ue.multiplyQuaternionsFlat(t,o,t,e,t,n),Ue.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Oh="\\[\\]\\.:\\/",M0=new RegExp("["+Oh+"]","g"),Hh="[^"+Oh+"]",w0="[^"+Oh.replace("\\.","")+"]",S0=/((?:WC+[\/:])*)/.source.replace("WC",Hh),E0=/(WCOD+)?/.source.replace("WCOD",w0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),R0=new RegExp("^"+S0+E0+T0+A0+"$"),C0=["material","materials","bones","map"],mh=class{constructor(t,e,n){let i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(t){let e=R0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);C0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=mh;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ea=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Ei,endingEnd:Ei};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Af,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Cf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case bl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,o=n===Rf;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Tf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ti,i.endingEnd=Ti):(t?i.endingStart=this.zeroSlopeAtStart?Ti:Ei:i.endingStart=us,e?i.endingEnd=this.zeroSlopeAtEnd?Ti:Ei:i.endingEnd=us)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}},I0=new Float32Array(1),gh=class extends Cn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;m=new Sa(pe.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new ks(new Float32Array(2),new Float32Array(2),1,I0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,o=typeof t=="string"?Fs.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bl),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Ea(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?Fs.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Xd=new qt,xh=class{constructor(t,e,n=0,i=1/0){this.ray=new hi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(t,e=!0,n=[]){return bh(t,this,n,e),n.sort($d),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)bh(t[i],this,n,e);return n.sort($d),n}};function $d(r,t){return r.distance-t.distance}function bh(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)bh(s[o],t,e,!0)}}function Vh(r,t,e,n){let i=P0(n);switch(e){case Ch:return r*t;case Oa:return r*t/i.components*i.byteLength;case Ha:return r*t/i.components*i.byteLength;case Ph:return r*t*2/i.components*i.byteLength;case Va:return r*t*2/i.components*i.byteLength;case Ih:return r*t*3/i.components*i.byteLength;case nn:return r*t*4/i.components*i.byteLength;case Ga:return r*t*4/i.components*i.byteLength;case Gs:case Ws:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xs:case $s:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xa:case qa:return Math.max(r,16)*Math.max(t,8)/4;case Wa:case $a:return Math.max(r,8)*Math.max(t,8)/2;case Za:case Ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ul:case dl:case fl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case pl:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gl:case xl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P0(r){switch(r){case vn:case Eh:return{byteLength:1,components:1};case Pr:case Th:case Lr:return{byteLength:2,components:1};case Na:case Ba:return{byteLength:2,components:4};case fi:case Fa:case un:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function vp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function D0(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Z0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
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
#endif`,Lx=`struct PhysicalMaterial {
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
}`,Dx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nb=`#ifdef USE_NORMALMAP
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
#endif`,ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bb=`float getShadowMask() {
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
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
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
}`,Ob=`#if DEPTH_PACKING == 3200
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
}`,Hb=`#define DISTANCE
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
}`,Vb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
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
}`,$b=`uniform vec3 diffuse;
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
}`,qb=`#include <common>
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Yb=`#define LAMBERT
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
}`,Kb=`#define LAMBERT
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
}`,Jb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,t_=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,n_=`#define PHONG
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
}`,i_=`#define STANDARD
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
}`,r_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,o_=`#define TOON
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
}`,a_=`uniform float size;
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,h_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:U0,alphahash_pars_fragment:k0,alphamap_fragment:z0,alphamap_pars_fragment:F0,alphatest_fragment:N0,alphatest_pars_fragment:B0,aomap_fragment:O0,aomap_pars_fragment:H0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:$0,iridescence_fragment:q0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:j0,color_pars_fragment:tx,color_pars_vertex:ex,color_vertex:nx,common:ix,cube_uv_reflection_fragment:rx,defaultnormal_vertex:sx,displacementmap_pars_vertex:ox,displacementmap_vertex:ax,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:hx,colorspace_pars_fragment:ux,envmap_fragment:dx,envmap_common_pars_fragment:fx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Tx,envmap_vertex:gx,fog_vertex:xx,fog_pars_vertex:bx,fog_fragment:_x,fog_pars_fragment:yx,gradientmap_pars_fragment:vx,lightmap_pars_fragment:Mx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Ex,lights_toon_fragment:Ax,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:Ix,lights_physical_fragment:Px,lights_physical_pars_fragment:Lx,lights_fragment_begin:Dx,lights_fragment_maps:Ux,lights_fragment_end:kx,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Bx,map_fragment:Ox,map_pars_fragment:Hx,map_particle_fragment:Vx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:$x,morphcolor_vertex:qx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Yx,morphtarget_vertex:Kx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:jx,normal_pars_vertex:tb,normal_vertex:eb,normalmap_pars_fragment:nb,clearcoat_normal_fragment_begin:ib,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:sb,iridescence_pars_fragment:ob,opaque_fragment:ab,packing:lb,premultiplied_alpha_fragment:cb,project_vertex:hb,dithering_fragment:ub,dithering_pars_fragment:db,roughnessmap_fragment:fb,roughnessmap_pars_fragment:pb,shadowmap_pars_fragment:mb,shadowmap_pars_vertex:gb,shadowmap_vertex:xb,shadowmask_pars_fragment:bb,skinbase_vertex:_b,skinning_pars_vertex:yb,skinning_vertex:vb,skinnormal_vertex:Mb,specularmap_fragment:wb,specularmap_pars_fragment:Sb,tonemapping_fragment:Eb,tonemapping_pars_fragment:Tb,transmission_fragment:Ab,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:Ib,uv_vertex:Pb,worldpos_vertex:Lb,background_vert:Db,background_frag:Ub,backgroundCube_vert:kb,backgroundCube_frag:zb,cube_vert:Fb,cube_frag:Nb,depth_vert:Bb,depth_frag:Ob,distanceRGBA_vert:Hb,distanceRGBA_frag:Vb,equirect_vert:Gb,equirect_frag:Wb,linedashed_vert:Xb,linedashed_frag:$b,meshbasic_vert:qb,meshbasic_frag:Zb,meshlambert_vert:Yb,meshlambert_frag:Kb,meshmatcap_vert:Jb,meshmatcap_frag:Qb,meshnormal_vert:jb,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:r_,meshtoon_vert:s_,meshtoon_frag:o_,points_vert:a_,points_frag:l_,shadow_vert:c_,shadow_frag:h_,sprite_vert:u_,sprite_frag:d_},xt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Dn={basic:{uniforms:ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new St(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ze([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ze([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new St(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ze([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ze([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ze([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ze([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ze([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ze([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ze([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ze([xt.lights,xt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Dn.physical={uniforms:ze([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var yl={r:0,b:0,g:0},Gi=new qe,f_=new qt;function p_(r,t,e,n,i,s,o){let a=new St(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function x(w){let y=!1,A=m(w);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(w,y){let A=m(y);A&&(A.isCubeTexture||A.mapping===Hs)?(h===void 0&&(h=new He(new Mr(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Vi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Gi.copy(y.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Gi)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==ae,(u!==A||d!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new Ui(2,2),new hn({name:"BackgroundMaterial",uniforms:Vi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,y){w.getRGB(yl,Nh(r)),n.buffers.color.setClear(yl.r,yl.g,yl.b,y,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:x,addToRenderList:g,dispose:M}}function m_(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(_,R,P,U,N){let V=!1,O=u(U,P,R);s!==O&&(s=O,c(s.object)),V=f(_,U,P,N),V&&m(_,U,P,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(_,R,P,U),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function h(_){return r.deleteVertexArray(_)}function u(_,R,P){let U=P.wireframe===!0,N=n[_.id];N===void 0&&(N={},n[_.id]=N);let V=N[R.id];V===void 0&&(V={},N[R.id]=V);let O=V[U];return O===void 0&&(O=d(l()),V[U]=O),O}function d(_){let R=[],P=[],U=[];for(let N=0;N<e;N++)R[N]=0,P[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:U,object:_,attributes:{},index:null}}function f(_,R,P,U){let N=s.attributes,V=R.attributes,O=0,Y=P.getAttributes();for(let z in Y)if(Y[z].location>=0){let et=N[z],ht=V[z];if(ht===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function m(_,R,P,U){let N={},V=R.attributes,O=0,Y=P.getAttributes();for(let z in Y)if(Y[z].location>=0){let et=V[z];et===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(et=_.instanceColor));let ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),N[z]=ht,O++}s.attributes=N,s.attributesNum=O,s.index=U}function x(){let _=s.newAttributes;for(let R=0,P=_.length;R<P;R++)_[R]=0}function g(_){p(_,0)}function p(_,R){let P=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;P[_]=1,U[_]===0&&(r.enableVertexAttribArray(_),U[_]=1),N[_]!==R&&(r.vertexAttribDivisor(_,R),N[_]=R)}function M(){let _=s.newAttributes,R=s.enabledAttributes;for(let P=0,U=R.length;P<U;P++)R[P]!==_[P]&&(r.disableVertexAttribArray(P),R[P]=0)}function w(_,R,P,U,N,V,O){O===!0?r.vertexAttribIPointer(_,R,P,N,V):r.vertexAttribPointer(_,R,P,U,N,V)}function y(_,R,P,U){x();let N=U.attributes,V=P.getAttributes(),O=R.defaultAttributeValues;for(let Y in V){let z=V[Y];if(z.location>=0){let Z=N[Y];if(Z===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){let et=Z.normalized,ht=Z.itemSize,ft=t.get(Z);if(ft===void 0)continue;let Dt=ft.buffer,Nt=ft.type,$t=ft.bytesPerElement,q=Nt===r.INT||Nt===r.UNSIGNED_INT||Z.gpuType===Fa;if(Z.isInterleavedBufferAttribute){let nt=Z.data,vt=nt.stride,Ut=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let At=0;At<z.locationSize;At++)p(z.location+At,nt.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let At=0;At<z.locationSize;At++)g(z.location+At);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let At=0;At<z.locationSize;At++)w(z.location+At,ht/z.locationSize,Nt,et,vt*$t,(Ut+ht/z.locationSize*At)*$t,q)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt,Z.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<z.locationSize;nt++)g(z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let nt=0;nt<z.locationSize;nt++)w(z.location+nt,ht/z.locationSize,Nt,et,ht*$t,ht/z.locationSize*nt*$t,q)}}else if(O!==void 0){let et=O[Y];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(z.location,et);break;case 3:r.vertexAttrib3fv(z.location,et);break;case 4:r.vertexAttrib4fv(z.location,et);break;default:r.vertexAttrib1fv(z.location,et)}}}}M()}function A(){E();for(let _ in n){let R=n[_];for(let P in R){let U=R[P];for(let N in U)h(U[N].object),delete U[N];delete R[P]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let P in R){let U=R[P];for(let N in U)h(U[N].object),delete U[N];delete R[P]}delete n[_.id]}function v(_){for(let R in n){let P=n[R];if(P[_.id]===void 0)continue;let U=P[_.id];for(let N in U)h(U[N].object),delete U[N];delete P[_.id]}}function E(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function g_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==nn&&n.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let E=v===Lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==vn&&n.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==un&&!E)}function l(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function b_(r){let t=this,e=null,n=0,i=!1,s=!1,o=new En,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{let M=s?0:n,w=M*4,y=p.clippingState||null;l.value=y,y=h(m,d,w,f);for(let A=0;A!==w;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,y=f;w!==x;++w,y+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function __(r){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=Oi:a===ka&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ua||a===ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ea(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var zr=4,Jf=[.125,.215,.35,.446,.526,.582],$i=20,Gh=new Os,Qf=new St,Wh=null,Xh=0,$h=0,qh=!1,Xi=(1+Math.sqrt(5))/2,kr=1/Xi,jf=[new L(-Xi,kr,0),new L(Xi,kr,0),new L(-kr,0,Xi),new L(kr,0,Xi),new L(0,Xi,-kr),new L(0,Xi,kr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],y_=new L,wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=y_}=s;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wh,Xh,$h),this._renderer.xr.enabled=qh,t.scissorTest=!1,vl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Lr,format:nn,colorSpace:Ci,depthBuffer:!1},i=tp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(s)),this._blurMaterial=M_(s,t,e)}return i}_compileMaterial(t){let e=new He(this._lodPlanes[0],t);this._renderer.compile(e,Gh)}_sceneToCubeUV(t,e,n,i,s){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Qf),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Pi({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new He(new Mr,x),p=!1,M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,p=!0):(x.color.copy(Qf),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let A=this._cubeSize;vl(i,y*A,w>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Oi||t.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;vl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jf[(i-s-1)%jf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$i-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):$i;g>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);let p=[],M=0;for(let v=0;v<$i;++v){let E=v/x,b=Math.exp(-E*E/2);p.push(b),v===0?M+=b:v<g&&(M+=2*b)}for(let v=0;v<p.length;v++)p[v]=p[v]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=m,d.mipInt.value=w-n;let y=this._sizeLods[i],A=3*y*(i>w-zr?i-w+zr:0),C=4*(this._cubeSize-y);vl(e,A,C,3*y,2*y),l.setRenderTarget(e),l.render(u,Gh)}};function v_(r){let t=[],e=[],n=[],i=r,s=r-zr+1+Jf.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-zr?l=Jf[o-r+zr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*f),w=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let C=0;C<f;C++){let v=C%3*2/3-1,E=C>2?0:-1,b=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];M.set(b,x*m*C),w.set(d,g*m*C);let _=[C,C,C,C,C,C];y.set(_,p*m*C)}let A=new ue;A.setAttribute("position",new he(M,x)),A.setAttribute("uv",new he(w,g)),A.setAttribute("faceIndex",new he(y,p)),t.push(A),i>zr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tp(r,t,e){let n=new In(r,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vl(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function M_(r,t,e){let n=new Float32Array($i),i=new L(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ep(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function np(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function w_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ua||l===ka,h=l===Oi||l===Hi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new wl(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function S_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function E_(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let w=0,y=M.length;w<y;w+=3){let A=M[w+0],C=M[w+1],v=M[w+2];d.push(A,C,C,v,v,A)}}else if(m!==void 0){let M=m.array;x=m.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let A=w+0,C=w+1,v=w+2;d.push(A,C,C,v,v,A)}}else return;let g=new(Fh(d)?gs:ms)(d,1);g.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function T_(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*x[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function A_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function R_(r,t,e){let n=new WeakMap,i=new ne;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let y=a.attributes.position.count*w,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*A*4*u),v=new ps(C,y,A,u);v.type=un,v.needsUpdate=!0;let E=w*4;for(let _=0;_<u;_++){let R=g[_],P=p[_],U=M[_],N=y*A*4*_;for(let V=0;V<R.count;V++){let O=V*E;f===!0&&(i.fromBufferAttribute(R,V),C[N+O+0]=i.x,C[N+O+1]=i.y,C[N+O+2]=i.z,C[N+O+3]=0),m===!0&&(i.fromBufferAttribute(P,V),C[N+O+4]=i.x,C[N+O+5]=i.y,C[N+O+6]=i.z,C[N+O+7]=0),x===!0&&(i.fromBufferAttribute(U,V),C[N+O+8]=i.x,C[N+O+9]=i.y,C[N+O+10]=i.z,C[N+O+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new Q(y,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function C_(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Mp=new ke,ip=new ws(1,1),wp=new ps,Sp=new jo,Ep=new bs,rp=[],sp=[],op=new Float32Array(16),ap=new Float32Array(9),lp=new Float32Array(4);function Nr(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=rp[i];if(s===void 0&&(s=new Float32Array(i),rp[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Se(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ee(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Sl(r,t){let e=sp[t];e===void 0&&(e=new Int32Array(t),sp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function I_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function P_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2fv(this.addr,t),Ee(e,t)}}function L_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;r.uniform3fv(this.addr,t),Ee(e,t)}}function D_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4fv(this.addr,t),Ee(e,t)}}function U_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;lp.set(n),r.uniformMatrix2fv(this.addr,!1,lp),Ee(e,n)}}function k_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;ap.set(n),r.uniformMatrix3fv(this.addr,!1,ap),Ee(e,n)}}function z_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;op.set(n),r.uniformMatrix4fv(this.addr,!1,op),Ee(e,n)}}function F_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function N_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2iv(this.addr,t),Ee(e,t)}}function B_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3iv(this.addr,t),Ee(e,t)}}function O_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4iv(this.addr,t),Ee(e,t)}}function H_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function V_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2uiv(this.addr,t),Ee(e,t)}}function G_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3uiv(this.addr,t),Ee(e,t)}}function W_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4uiv(this.addr,t),Ee(e,t)}}function X_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ip.compareFunction=Uh,s=ip):s=Mp,e.setTexture2D(t||s,i)}function $_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sp,i)}function q_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ep,i)}function Z_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wp,i)}function Y_(r){switch(r){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return U_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return F_;case 35667:case 35671:return N_;case 35668:case 35672:return B_;case 35669:case 35673:return O_;case 5125:return H_;case 36294:return V_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Z_}}function K_(r,t){r.uniform1fv(this.addr,t)}function J_(r,t){let e=Nr(t,this.size,2);r.uniform2fv(this.addr,e)}function Q_(r,t){let e=Nr(t,this.size,3);r.uniform3fv(this.addr,e)}function j_(r,t){let e=Nr(t,this.size,4);r.uniform4fv(this.addr,e)}function ty(r,t){let e=Nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ey(r,t){let e=Nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ny(r,t){let e=Nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function iy(r,t){r.uniform1iv(this.addr,t)}function ry(r,t){r.uniform2iv(this.addr,t)}function sy(r,t){r.uniform3iv(this.addr,t)}function oy(r,t){r.uniform4iv(this.addr,t)}function ay(r,t){r.uniform1uiv(this.addr,t)}function ly(r,t){r.uniform2uiv(this.addr,t)}function cy(r,t){r.uniform3uiv(this.addr,t)}function hy(r,t){r.uniform4uiv(this.addr,t)}function uy(r,t,e){let n=this.cache,i=t.length,s=Sl(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Mp,s[o])}function dy(r,t,e){let n=this.cache,i=t.length,s=Sl(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Sp,s[o])}function fy(r,t,e){let n=this.cache,i=t.length,s=Sl(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ep,s[o])}function py(r,t,e){let n=this.cache,i=t.length,s=Sl(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wp,s[o])}function my(r){switch(r){case 5126:return K_;case 35664:return J_;case 35665:return Q_;case 35666:return j_;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return ry;case 35668:case 35672:return sy;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}var Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}},Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=my(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function cp(r,t){r.seq.push(t),r.map[t.id]=t}function gy(r,t,e){let n=r.name,i=n.length;for(Zh.lastIndex=0;;){let s=Zh.exec(n),o=Zh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cp(e,c===void 0?new Yh(a,r,t):new Kh(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Jh(a),cp(e,u)),e=u}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);gy(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function hp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var xy=37297,by=0;function _y(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var up=new Zt;function yy(r){te._getMatrix(up,te.workingColorSpace,r);let t=`mat3( ${up.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(r)){case ds:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dp(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_y(r.getShaderSource(t),a)}else return s}function vy(r,t){let e=yy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function My(r,t){let e;switch(t){case xf:e="Linear";break;case bf:e="Reinhard";break;case _f:e="Cineon";break;case yf:e="ACESFilmic";break;case Mf:e="AgX";break;case wf:e="Neutral";break;case vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new L;function wy(){te.getLuminanceCoefficients(Ml);let r=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Ey(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ty(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Zs(r){return r!==""}function fp(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(r){return r.replace(Ay,Cy)}var Ry=new Map;function Cy(r,t){let e=Yt[t];if(e===void 0){let n=Ry.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qh(e)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(r){return r.replace(Iy,Py)}function Py(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ly(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Oi:case Hi:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Hi&&(t="ENVMAP_MODE_REFRACTION"),t}function ky(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function zy(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fy(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ly(e),c=Dy(e),h=Uy(e),u=ky(e),d=zy(e),f=Sy(e),m=Ey(s),x=i.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(g=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?My("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,vy("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Qh(o),o=fp(o,e),o=pp(o,e),a=Qh(a),a=fp(a,e),a=pp(a,e),o=mp(o),a=mp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+g+o,y=M+p+a,A=hp(i,i.VERTEX_SHADER,w),C=hp(i,i.FRAGMENT_SHADER,y);i.attachShader(x,A),i.attachShader(x,C),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function v(R){if(r.debug.checkShaderErrors){let P=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(A)||"",N=i.getShaderInfoLog(C)||"",V=P.trim(),O=U.trim(),Y=N.trim(),z=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,A,C);else{let et=dp(i,A,"vertex"),ht=dp(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+et+`
`+ht)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||Y==="")&&(Z=!1);Z&&(R.diagnostics={runnable:z,programLog:V,vertexShader:{log:O,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(A),i.deleteShader(C),E=new Fr(i,x),b=Ty(i,x)}let E;this.getUniforms=function(){return E===void 0&&v(this),E};let b;this.getAttributes=function(){return b===void 0&&v(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,xy)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=by++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}var Ny=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tu(t),e.set(t,n)),n}},tu=class{constructor(t){this.id=Ny++,this.code=t,this.usedTimes=0}};function By(r,t,e,n,i,s,o){let a=new vr,l=new jh,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,_,R,P,U){let N=P.fog,V=U.geometry,O=b.isMeshStandardMaterial?P.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),z=Y&&Y.mapping===Hs?Y.image.height:null,Z=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=et!==void 0?et.length:0,ft=0;V.morphAttributes.position!==void 0&&(ft=1),V.morphAttributes.normal!==void 0&&(ft=2),V.morphAttributes.color!==void 0&&(ft=3);let Dt,Nt,$t,q;if(Z){let re=Dn[Z];Dt=re.vertexShader,Nt=re.fragmentShader}else Dt=b.vertexShader,Nt=b.fragmentShader,l.update(b),$t=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);let nt=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Ut=U.isInstancedMesh===!0,At=U.isBatchedMesh===!0,Qt=!!b.map,de=!!b.matcap,D=!!Y,rt=!!b.aoMap,j=!!b.lightMap,J=!!b.bumpMap,K=!!b.normalMap,pt=!!b.displacementMap,ot=!!b.emissiveMap,mt=!!b.metalnessMap,Wt=!!b.roughnessMap,Gt=b.anisotropy>0,I=b.clearcoat>0,S=b.dispersion>0,H=b.iridescence>0,X=b.sheen>0,it=b.transmission>0,$=Gt&&!!b.anisotropyMap,Pt=I&&!!b.clearcoatMap,dt=I&&!!b.clearcoatNormalMap,Rt=I&&!!b.clearcoatRoughnessMap,Ct=H&&!!b.iridescenceMap,at=H&&!!b.iridescenceThicknessMap,yt=X&&!!b.sheenColorMap,Ot=X&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,bt=!!b.specularColorMap,Kt=!!b.specularIntensityMap,k=it&&!!b.transmissionMap,ut=it&&!!b.thicknessMap,gt=!!b.gradientMap,wt=!!b.alphaMap,lt=b.alphaTest>0,tt=!!b.alphaHash,It=!!b.extensions,Xt=Yn;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Xt=r.toneMapping);let fe={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:Dt,fragmentShader:Nt,defines:b.defines,customVertexShaderID:$t,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:At,batchingColor:At&&U._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&U.instanceColor!==null,instancingMorph:Ut&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:Qt,matcap:de,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:z,aoMap:rt,lightMap:j,bumpMap:J,normalMap:K,displacementMap:d&&pt,emissiveMap:ot,normalMapObjectSpace:K&&b.normalMapType===Lf,normalMapTangentSpace:K&&b.normalMapType===qs,metalnessMap:mt,roughnessMap:Wt,anisotropy:Gt,anisotropyMap:$,clearcoat:I,clearcoatMap:Pt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Rt,dispersion:S,iridescence:H,iridescenceMap:Ct,iridescenceThicknessMap:at,sheen:X,sheenColorMap:yt,sheenRoughnessMap:Ot,specularMap:Lt,specularColorMap:bt,specularIntensityMap:Kt,transmission:it,transmissionMap:k,thicknessMap:ut,gradientMap:gt,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:wt,alphaTest:lt,alphaHash:tt,combine:b.combine,mapUv:Qt&&x(b.map.channel),aoMapUv:rt&&x(b.aoMap.channel),lightMapUv:j&&x(b.lightMap.channel),bumpMapUv:J&&x(b.bumpMap.channel),normalMapUv:K&&x(b.normalMap.channel),displacementMapUv:pt&&x(b.displacementMap.channel),emissiveMapUv:ot&&x(b.emissiveMap.channel),metalnessMapUv:mt&&x(b.metalnessMap.channel),roughnessMapUv:Wt&&x(b.roughnessMap.channel),anisotropyMapUv:$&&x(b.anisotropyMap.channel),clearcoatMapUv:Pt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(b.sheenRoughnessMap.channel),specularMapUv:Lt&&x(b.specularMap.channel),specularColorMapUv:bt&&x(b.specularColorMap.channel),specularIntensityMapUv:Kt&&x(b.specularIntensityMap.channel),transmissionMapUv:k&&x(b.transmissionMap.channel),thicknessMapUv:ut&&x(b.thicknessMap.channel),alphaMapUv:wt&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(K||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Qt||wt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Qt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:ot&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)_.push(R),_.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(M(_,b),w(_,b),_.push(r.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function w(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let _=m[b.type],R;if(_){let P=Dn[_];R=Gf.clone(P.uniforms)}else R=b.uniforms;return R}function A(b,_){let R;for(let P=0,U=h.length;P<U;P++){let N=h[P];if(N.cacheKey===_){R=N,++R.usedTimes;break}}return R===void 0&&(R=new Fy(r,_,b,s),h.push(R)),R}function C(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function v(b){l.remove(b)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:v,programs:h,dispose:E}}function Oy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Hy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Hy),n.length>1&&n.sort(d||xp),i.length>1&&i.sort(d||xp)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Vy(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new bp,r.set(n,[o])):i>=s.length?(o=new bp,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Gy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new St};break;case"SpotLight":e={position:new L,direction:new L,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function Wy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Xy=0;function $y(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qy(r){let t=new Gy,e=Wy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,s=new qt,o=new qt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,w=0,y=0,A=0,C=0,v=0;c.sort($y);for(let b=0,_=c.length;b<_;b++){let R=c[b],P=R.color,U=R.intensity,N=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=P.r*U,u+=P.g*U,d+=P.b*U;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],U);v++}else if(R.isDirectionalLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=O,f++}else if(R.isSpotLight){let O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(P).multiplyScalar(U),O.distance=N,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[x]=O;let Y=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Y.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=Y.matrix,R.castShadow){let z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=V,y++}x++}else if(R.isRectAreaLight){let O=t.get(R);O.color.copy(P).multiplyScalar(U),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=O,g++}else if(R.isPointLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let Y=R.shadow,z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,w++}n.point[m]=O,m++}else if(R.isHemisphereLight){let O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(U),O.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=O,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let E=n.hash;(E.directionalLength!==f||E.pointLength!==m||E.spotLength!==x||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==y||E.numSpotMaps!==A||E.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=v,E.directionalLength=f,E.pointLength=m,E.spotLength=x,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=y,E.numSpotMaps=A,E.numLightProbes=v,n.version=Xy++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let w=c[p];if(w.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(w.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(w.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function _p(r){let t=new qy(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Zy(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new _p(r),t.set(i,[a])):s>=o.length?(a=new _p(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
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
}`;function Jy(r,t,e){let n=new Ar,i=new Q,s=new Q,o=new ne,a=new ga({depthPacking:Pf}),l=new xa,c={},h=e.maxTextureSize,u={[Wn]:Ve,[Ve]:Wn,[Ln]:Ln},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Yy,fragmentShader:Ky}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(C,v,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let b=r.getRenderTarget(),_=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Zn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=p!==Pn&&this.type===Pn,N=p===Pn&&this.type!==Pn;for(let V=0,O=C.length;V<O;V++){let Y=C[V],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Z=z.getFrameExtents();if(i.multiply(Z),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,z.mapSize.y=s.y)),z.map===null||U===!0||N===!0){let ht=this.type!==Pn?{minFilter:$e,magFilter:$e}:{};z.map!==null&&z.map.dispose(),z.map=new In(i.x,i.y,ht),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();let et=z.getViewportCount();for(let ht=0;ht<et;ht++){let ft=z.getViewport(ht);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),P.viewport(o),z.updateMatrices(Y,ht),n=z.getFrustum(),y(v,E,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Pn&&M(z,E),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(b,_,R)};function M(C,v){let E=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(v,null,E,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(v,null,E,f,x,null)}function w(C,v,E,b){let _=null,R=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)_=R;else if(_=E.isPointLight===!0?l:a,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let P=_.uuid,U=v.uuid,N=c[P];N===void 0&&(N={},c[P]=N);let V=N[U];V===void 0&&(V=_.clone(),N[U]=V,v.addEventListener("dispose",A)),_=V}if(_.visible=v.visible,_.wireframe=v.wireframe,b===Pn?_.side=v.shadowSide!==null?v.shadowSide:v.side:_.side=v.shadowSide!==null?v.shadowSide:u[v.side],_.alphaMap=v.alphaMap,_.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,_.map=v.map,_.clipShadows=v.clipShadows,_.clippingPlanes=v.clippingPlanes,_.clipIntersection=v.clipIntersection,_.displacementMap=v.displacementMap,_.displacementScale=v.displacementScale,_.displacementBias=v.displacementBias,_.wireframeLinewidth=v.wireframeLinewidth,_.linewidth=v.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let P=r.properties.get(_);P.light=E}return _}function y(C,v,E,b,_){if(C.visible===!1)return;if(C.layers.test(v.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);let U=t.update(C),N=C.material;if(Array.isArray(N)){let V=U.groups;for(let O=0,Y=V.length;O<Y;O++){let z=V[O],Z=N[z.materialIndex];if(Z&&Z.visible){let et=w(C,Z,b,_);C.onBeforeShadow(r,C,v,E,U,et,z),r.renderBufferDirect(E,null,U,et,C,z),C.onAfterShadow(r,C,v,E,U,et,z)}}}else if(N.visible){let V=w(C,N,b,_);C.onBeforeShadow(r,C,v,E,U,V,null),r.renderBufferDirect(E,null,U,V,C,null),C.onAfterShadow(r,C,v,E,U,V,null)}}let P=C.children;for(let U=0,N=P.length;U<N;U++)y(P[U],v,E,b,_)}function A(C){C.target.removeEventListener("dispose",A);for(let E in c){let b=c[E],_=C.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var Qy={[Ta]:Aa,[Ra]:Pa,[Ca]:La,[Ri]:Ia,[Aa]:Ta,[Pa]:Ra,[La]:Ca,[Ia]:Ri};function jy(r,t){function e(){let k=!1,ut=new ne,gt=null,wt=new ne(0,0,0,0);return{setMask:function(lt){gt!==lt&&!k&&(r.colorMask(lt,lt,lt,lt),gt=lt)},setLocked:function(lt){k=lt},setClear:function(lt,tt,It,Xt,fe){fe===!0&&(lt*=Xt,tt*=Xt,It*=Xt),ut.set(lt,tt,It,Xt),wt.equals(ut)===!1&&(r.clearColor(lt,tt,It,Xt),wt.copy(ut))},reset:function(){k=!1,gt=null,wt.set(-1,0,0,0)}}}function n(){let k=!1,ut=!1,gt=null,wt=null,lt=null;return{setReversed:function(tt){if(ut!==tt){let It=t.get("EXT_clip_control");tt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ut=tt;let Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return ut},setTest:function(tt){tt?nt(r.DEPTH_TEST):vt(r.DEPTH_TEST)},setMask:function(tt){gt!==tt&&!k&&(r.depthMask(tt),gt=tt)},setFunc:function(tt){if(ut&&(tt=Qy[tt]),wt!==tt){switch(tt){case Ta:r.depthFunc(r.NEVER);break;case Aa:r.depthFunc(r.ALWAYS);break;case Ra:r.depthFunc(r.LESS);break;case Ri:r.depthFunc(r.LEQUAL);break;case Ca:r.depthFunc(r.EQUAL);break;case Ia:r.depthFunc(r.GEQUAL);break;case Pa:r.depthFunc(r.GREATER);break;case La:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=tt}},setLocked:function(tt){k=tt},setClear:function(tt){lt!==tt&&(ut&&(tt=1-tt),r.clearDepth(tt),lt=tt)},reset:function(){k=!1,gt=null,wt=null,lt=null,ut=!1}}}function i(){let k=!1,ut=null,gt=null,wt=null,lt=null,tt=null,It=null,Xt=null,fe=null;return{setTest:function(re){k||(re?nt(r.STENCIL_TEST):vt(r.STENCIL_TEST))},setMask:function(re){ut!==re&&!k&&(r.stencilMask(re),ut=re)},setFunc:function(re,kn,Sn){(gt!==re||wt!==kn||lt!==Sn)&&(r.stencilFunc(re,kn,Sn),gt=re,wt=kn,lt=Sn)},setOp:function(re,kn,Sn){(tt!==re||It!==kn||Xt!==Sn)&&(r.stencilOp(re,kn,Sn),tt=re,It=kn,Xt=Sn)},setLocked:function(re){k=re},setClear:function(re){fe!==re&&(r.clearStencil(re),fe=re)},reset:function(){k=!1,ut=null,gt=null,wt=null,lt=null,tt=null,It=null,Xt=null,fe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,M=null,w=null,y=null,A=null,C=null,v=new St(0,0,0),E=0,b=!1,_=null,R=null,P=null,U=null,N=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=Y>=2);let Z=null,et={},ht=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),Dt=new ne().fromArray(ht),Nt=new ne().fromArray(ft);function $t(k,ut,gt,wt){let lt=new Uint8Array(4),tt=r.createTexture();r.bindTexture(k,tt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let It=0;It<gt;It++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ut+It,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return tt}let q={};q[r.TEXTURE_2D]=$t(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=$t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=$t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=$t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(Ri),J(!1),K(_h),nt(r.CULL_FACE),rt(Zn);function nt(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function vt(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Ut(k,ut){return u[k]!==ut?(r.bindFramebuffer(k,ut),u[k]=ut,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function At(k,ut){let gt=f,wt=!1;if(k){gt=d.get(ut),gt===void 0&&(gt=[],d.set(ut,gt));let lt=k.textures;if(gt.length!==lt.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,It=lt.length;tt<It;tt++)gt[tt]=r.COLOR_ATTACHMENT0+tt;gt.length=lt.length,wt=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,wt=!0);wt&&r.drawBuffers(gt)}function Qt(k){return m!==k?(r.useProgram(k),m=k,!0):!1}let de={[ci]:r.FUNC_ADD,[Jd]:r.FUNC_SUBTRACT,[Qd]:r.FUNC_REVERSE_SUBTRACT};de[jd]=r.MIN,de[tf]=r.MAX;let D={[ef]:r.ZERO,[nf]:r.ONE,[rf]:r.SRC_COLOR,[Xo]:r.SRC_ALPHA,[hf]:r.SRC_ALPHA_SATURATE,[lf]:r.DST_COLOR,[of]:r.DST_ALPHA,[sf]:r.ONE_MINUS_SRC_COLOR,[$o]:r.ONE_MINUS_SRC_ALPHA,[cf]:r.ONE_MINUS_DST_COLOR,[af]:r.ONE_MINUS_DST_ALPHA,[uf]:r.CONSTANT_COLOR,[df]:r.ONE_MINUS_CONSTANT_COLOR,[ff]:r.CONSTANT_ALPHA,[pf]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(k,ut,gt,wt,lt,tt,It,Xt,fe,re){if(k===Zn){x===!0&&(vt(r.BLEND),x=!1);return}if(x===!1&&(nt(r.BLEND),x=!0),k!==Kd){if(k!==g||re!==b){if((p!==ci||y!==ci)&&(r.blendEquation(r.FUNC_ADD),p=ci,y=ci),re)switch(k){case Ai:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFunc(r.ONE,r.ONE);break;case Mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ai:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,w=null,A=null,C=null,v.set(0,0,0),E=0,g=k,b=re}return}lt=lt||ut,tt=tt||gt,It=It||wt,(ut!==p||lt!==y)&&(r.blendEquationSeparate(de[ut],de[lt]),p=ut,y=lt),(gt!==M||wt!==w||tt!==A||It!==C)&&(r.blendFuncSeparate(D[gt],D[wt],D[tt],D[It]),M=gt,w=wt,A=tt,C=It),(Xt.equals(v)===!1||fe!==E)&&(r.blendColor(Xt.r,Xt.g,Xt.b,fe),v.copy(Xt),E=fe),g=k,b=!1}function j(k,ut){k.side===Ln?vt(r.CULL_FACE):nt(r.CULL_FACE);let gt=k.side===Ve;ut&&(gt=!gt),J(gt),k.blending===Ai&&k.transparent===!1?rt(Zn):rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let wt=k.stencilWrite;a.setTest(wt),wt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(k){_!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),_=k)}function K(k){k!==qd?(nt(r.CULL_FACE),k!==R&&(k===_h?r.cullFace(r.BACK):k===Zd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):vt(r.CULL_FACE),R=k}function pt(k){k!==P&&(O&&r.lineWidth(k),P=k)}function ot(k,ut,gt){k?(nt(r.POLYGON_OFFSET_FILL),(U!==ut||N!==gt)&&(r.polygonOffset(ut,gt),U=ut,N=gt)):vt(r.POLYGON_OFFSET_FILL)}function mt(k){k?nt(r.SCISSOR_TEST):vt(r.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=r.TEXTURE0+V-1),Z!==k&&(r.activeTexture(k),Z=k)}function Gt(k,ut,gt){gt===void 0&&(Z===null?gt=r.TEXTURE0+V-1:gt=Z);let wt=et[gt];wt===void 0&&(wt={type:void 0,texture:void 0},et[gt]=wt),(wt.type!==k||wt.texture!==ut)&&(Z!==gt&&(r.activeTexture(gt),Z=gt),r.bindTexture(k,ut||q[k]),wt.type=k,wt.texture=ut)}function I(){let k=et[Z];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(k){Dt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Dt.copy(k))}function Ot(k){Nt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Nt.copy(k))}function Lt(k,ut){let gt=c.get(ut);gt===void 0&&(gt=new WeakMap,c.set(ut,gt));let wt=gt.get(k);wt===void 0&&(wt=r.getUniformBlockIndex(ut,k.name),gt.set(k,wt))}function bt(k,ut){let wt=c.get(ut).get(k);l.get(ut)!==wt&&(r.uniformBlockBinding(ut,wt,k.__bindingPointIndex),l.set(ut,wt))}function Kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,et={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,M=null,w=null,y=null,A=null,C=null,v=new St(0,0,0),E=0,b=!1,_=null,R=null,P=null,U=null,N=null,Dt.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:vt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Qt,setBlending:rt,setMaterial:j,setFlipSided:J,setCullFace:K,setLineWidth:pt,setPolygonOffset:ot,setScissorTest:mt,activeTexture:Wt,bindTexture:Gt,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Ct,texImage3D:at,updateUBOMapping:Lt,uniformBlockBinding:bt,texStorage2D:dt,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:it,compressedTexSubImage2D:$,compressedTexSubImage3D:Pt,scissor:yt,viewport:Ot,reset:Kt}}function tv(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return f?new OffscreenCanvas(I,S):br("canvas")}function x(I,S,H){let X=1,it=Gt(I);if((it.width>H||it.height>H)&&(X=H/Math.max(it.width,it.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let $=Math.floor(X*it.width),Pt=Math.floor(X*it.height);u===void 0&&(u=m($,Pt));let dt=S?m($,Pt):u;return dt.width=$,dt.height=Pt,dt.getContext("2d").drawImage(I,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+Pt+")."),dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){r.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(I,S,H,X,it=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=S;if(S===r.RED&&(H===r.FLOAT&&($=r.R32F),H===r.HALF_FLOAT&&($=r.R16F),H===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.R8UI),H===r.UNSIGNED_SHORT&&($=r.R16UI),H===r.UNSIGNED_INT&&($=r.R32UI),H===r.BYTE&&($=r.R8I),H===r.SHORT&&($=r.R16I),H===r.INT&&($=r.R32I)),S===r.RG&&(H===r.FLOAT&&($=r.RG32F),H===r.HALF_FLOAT&&($=r.RG16F),H===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RG8UI),H===r.UNSIGNED_SHORT&&($=r.RG16UI),H===r.UNSIGNED_INT&&($=r.RG32UI),H===r.BYTE&&($=r.RG8I),H===r.SHORT&&($=r.RG16I),H===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGB8UI),H===r.UNSIGNED_SHORT&&($=r.RGB16UI),H===r.UNSIGNED_INT&&($=r.RGB32UI),H===r.BYTE&&($=r.RGB8I),H===r.SHORT&&($=r.RGB16I),H===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGBA8UI),H===r.UNSIGNED_SHORT&&($=r.RGBA16UI),H===r.UNSIGNED_INT&&($=r.RGBA32UI),H===r.BYTE&&($=r.RGBA8I),H===r.SHORT&&($=r.RGBA16I),H===r.INT&&($=r.RGBA32I)),S===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),S===r.RGBA){let Pt=it?ds:te.getTransfer(X);H===r.FLOAT&&($=r.RGBA32F),H===r.HALF_FLOAT&&($=r.RGBA16F),H===r.UNSIGNED_BYTE&&($=Pt===ae?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(I,S){let H;return I?S===null||S===fi||S===Dr?H=r.DEPTH24_STENCIL8:S===un?H=r.DEPTH32F_STENCIL8:S===Pr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===Dr?H=r.DEPTH_COMPONENT24:S===un?H=r.DEPTH_COMPONENT32F:S===Pr&&(H=r.DEPTH_COMPONENT16),H}function A(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==$e&&I.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function C(I){let S=I.target;S.removeEventListener("dispose",C),E(S),S.isVideoTexture&&h.delete(S)}function v(I){let S=I.target;S.removeEventListener("dispose",v),_(S)}function E(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,X=d.get(H);if(X){let it=X[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(X).length===0&&d.delete(H)}n.remove(I)}function b(I){let S=n.get(I);r.deleteTexture(S.__webglTexture);let H=I.source,X=d.get(H);delete X[S.__cacheKey],o.memory.textures--}function _(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let it=0;it<S.__webglFramebuffer[X].length;it++)r.deleteFramebuffer(S.__webglFramebuffer[X][it]);else r.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)r.deleteFramebuffer(S.__webglFramebuffer[X]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=I.textures;for(let X=0,it=H.length;X<it;X++){let $=n.get(H[X]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(I)}let R=0;function P(){R=0}function U(){let I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function N(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function V(I,S){let H=n.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let X=I.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+S)}function O(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){q(H,I,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+S)}function Y(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){q(H,I,S);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+S)}function z(I,S){let H=n.get(I);if(I.version>0&&H.__version!==I.version){nt(H,I,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+S)}let Z={[qo]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Zo]:r.MIRRORED_REPEAT},et={[$e]:r.NEAREST,[Ef]:r.NEAREST_MIPMAP_NEAREST,[Vs]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[za]:r.LINEAR_MIPMAP_NEAREST,[di]:r.LINEAR_MIPMAP_LINEAR},ht={[Df]:r.NEVER,[Bf]:r.ALWAYS,[Uf]:r.LESS,[Uh]:r.LEQUAL,[kf]:r.EQUAL,[Nf]:r.GEQUAL,[zf]:r.GREATER,[Ff]:r.NOTEQUAL};function ft(I,S){if(S.type===un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===za||S.magFilter===Vs||S.magFilter===di||S.minFilter===bn||S.minFilter===za||S.minFilter===Vs||S.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Z[S.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Z[S.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Z[S.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,et[S.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==Vs&&S.minFilter!==di||S.type===un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Dt(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",C));let X=S.source,it=d.get(X);it===void 0&&(it={},d.set(X,it));let $=N(S);if($!==I.__cacheKey){it[$]===void 0&&(it[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[$].usedTimes++;let Pt=it[I.__cacheKey];Pt!==void 0&&(it[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(S)),I.__cacheKey=$,I.__webglTexture=it[$].texture}return H}function Nt(I,S,H){return Math.floor(Math.floor(I/H)/S)}function $t(I,S,H,X){let $=I.updateRanges;if($.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,H,X,S.data);else{$.sort((at,yt)=>at.start-yt.start);let Pt=0;for(let at=1;at<$.length;at++){let yt=$[Pt],Ot=$[at],Lt=yt.start+yt.count,bt=Nt(Ot.start,S.width,4),Kt=Nt(yt.start,S.width,4);Ot.start<=Lt+1&&bt===Kt&&Nt(Ot.start+Ot.count-1,S.width,4)===bt?yt.count=Math.max(yt.count,Ot.start+Ot.count-yt.start):(++Pt,$[Pt]=Ot)}$.length=Pt+1;let dt=r.getParameter(r.UNPACK_ROW_LENGTH),Rt=r.getParameter(r.UNPACK_SKIP_PIXELS),Ct=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let at=0,yt=$.length;at<yt;at++){let Ot=$[at],Lt=Math.floor(Ot.start/4),bt=Math.ceil(Ot.count/4),Kt=Lt%S.width,k=Math.floor(Lt/S.width),ut=bt,gt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,Kt,k,ut,gt,H,X,S.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Rt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ct)}}function q(I,S,H){let X=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=r.TEXTURE_3D);let it=Dt(I,S),$=S.source;e.bindTexture(X,I.__webglTexture,r.TEXTURE0+H);let Pt=n.get($);if($.version!==Pt.__version||it===!0){e.activeTexture(r.TEXTURE0+H);let dt=te.getPrimaries(te.workingColorSpace),Rt=S.colorSpace===Kn?null:te.getPrimaries(S.colorSpace),Ct=S.colorSpace===Kn||dt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let at=x(S.image,!1,i.maxTextureSize);at=Wt(S,at);let yt=s.convert(S.format,S.colorSpace),Ot=s.convert(S.type),Lt=w(S.internalFormat,yt,Ot,S.colorSpace,S.isVideoTexture);ft(X,S);let bt,Kt=S.mipmaps,k=S.isVideoTexture!==!0,ut=Pt.__version===void 0||it===!0,gt=$.dataReady,wt=A(S,at);if(S.isDepthTexture)Lt=y(S.format===Ur,S.type),ut&&(k?e.texStorage2D(r.TEXTURE_2D,1,Lt,at.width,at.height):e.texImage2D(r.TEXTURE_2D,0,Lt,at.width,at.height,0,yt,Ot,null));else if(S.isDataTexture)if(Kt.length>0){k&&ut&&e.texStorage2D(r.TEXTURE_2D,wt,Lt,Kt[0].width,Kt[0].height);for(let lt=0,tt=Kt.length;lt<tt;lt++)bt=Kt[lt],k?gt&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,bt.width,bt.height,yt,Ot,bt.data):e.texImage2D(r.TEXTURE_2D,lt,Lt,bt.width,bt.height,0,yt,Ot,bt.data);S.generateMipmaps=!1}else k?(ut&&e.texStorage2D(r.TEXTURE_2D,wt,Lt,at.width,at.height),gt&&$t(S,at,yt,Ot)):e.texImage2D(r.TEXTURE_2D,0,Lt,at.width,at.height,0,yt,Ot,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Lt,Kt[0].width,Kt[0].height,at.depth);for(let lt=0,tt=Kt.length;lt<tt;lt++)if(bt=Kt[lt],S.format!==nn)if(yt!==null)if(k){if(gt)if(S.layerUpdates.size>0){let It=Vh(bt.width,bt.height,S.format,S.type);for(let Xt of S.layerUpdates){let fe=bt.data.subarray(Xt*It/bt.data.BYTES_PER_ELEMENT,(Xt+1)*It/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,Xt,bt.width,bt.height,1,yt,fe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,at.depth,yt,bt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,Lt,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?gt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,at.depth,yt,Ot,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,lt,Lt,bt.width,bt.height,at.depth,0,yt,Ot,bt.data)}else{k&&ut&&e.texStorage2D(r.TEXTURE_2D,wt,Lt,Kt[0].width,Kt[0].height);for(let lt=0,tt=Kt.length;lt<tt;lt++)bt=Kt[lt],S.format!==nn?yt!==null?k?gt&&e.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,lt,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?gt&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,bt.width,bt.height,yt,Ot,bt.data):e.texImage2D(r.TEXTURE_2D,lt,Lt,bt.width,bt.height,0,yt,Ot,bt.data)}else if(S.isDataArrayTexture)if(k){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Lt,at.width,at.height,at.depth),gt)if(S.layerUpdates.size>0){let lt=Vh(at.width,at.height,S.format,S.type);for(let tt of S.layerUpdates){let It=at.data.subarray(tt*lt/at.data.BYTES_PER_ELEMENT,(tt+1)*lt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,yt,Ot,It)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Ot,at.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,at.width,at.height,at.depth,0,yt,Ot,at.data);else if(S.isData3DTexture)k?(ut&&e.texStorage3D(r.TEXTURE_3D,wt,Lt,at.width,at.height,at.depth),gt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Ot,at.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,at.width,at.height,at.depth,0,yt,Ot,at.data);else if(S.isFramebufferTexture){if(ut)if(k)e.texStorage2D(r.TEXTURE_2D,wt,Lt,at.width,at.height);else{let lt=at.width,tt=at.height;for(let It=0;It<wt;It++)e.texImage2D(r.TEXTURE_2D,It,Lt,lt,tt,0,yt,Ot,null),lt>>=1,tt>>=1}}else if(Kt.length>0){if(k&&ut){let lt=Gt(Kt[0]);e.texStorage2D(r.TEXTURE_2D,wt,Lt,lt.width,lt.height)}for(let lt=0,tt=Kt.length;lt<tt;lt++)bt=Kt[lt],k?gt&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,yt,Ot,bt):e.texImage2D(r.TEXTURE_2D,lt,Lt,yt,Ot,bt);S.generateMipmaps=!1}else if(k){if(ut){let lt=Gt(at);e.texStorage2D(r.TEXTURE_2D,wt,Lt,lt.width,lt.height)}gt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Ot,at)}else e.texImage2D(r.TEXTURE_2D,0,Lt,yt,Ot,at);g(S)&&p(X),Pt.__version=$.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function nt(I,S,H){if(S.image.length!==6)return;let X=Dt(I,S),it=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+H);let $=n.get(it);if(it.version!==$.__version||X===!0){e.activeTexture(r.TEXTURE0+H);let Pt=te.getPrimaries(te.workingColorSpace),dt=S.colorSpace===Kn?null:te.getPrimaries(S.colorSpace),Rt=S.colorSpace===Kn||Pt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Ct=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Ct&&!at?yt[tt]=x(S.image[tt],!0,i.maxCubemapSize):yt[tt]=at?S.image[tt].image:S.image[tt],yt[tt]=Wt(S,yt[tt]);let Ot=yt[0],Lt=s.convert(S.format,S.colorSpace),bt=s.convert(S.type),Kt=w(S.internalFormat,Lt,bt,S.colorSpace),k=S.isVideoTexture!==!0,ut=$.__version===void 0||X===!0,gt=it.dataReady,wt=A(S,Ot);ft(r.TEXTURE_CUBE_MAP,S);let lt;if(Ct){k&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,Kt,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){lt=yt[tt].mipmaps;for(let It=0;It<lt.length;It++){let Xt=lt[It];S.format!==nn?Lt!==null?k?gt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,0,0,Xt.width,Xt.height,Lt,Xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,Kt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,0,0,Xt.width,Xt.height,Lt,bt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,Kt,Xt.width,Xt.height,0,Lt,bt,Xt.data)}}}else{if(lt=S.mipmaps,k&&ut){lt.length>0&&wt++;let tt=Gt(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Lt,bt,yt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,yt[tt].width,yt[tt].height,0,Lt,bt,yt[tt].data);for(let It=0;It<lt.length;It++){let fe=lt[It].image[tt].image;k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,0,0,fe.width,fe.height,Lt,bt,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,Kt,fe.width,fe.height,0,Lt,bt,fe.data)}}else{k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,bt,yt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Lt,bt,yt[tt]);for(let It=0;It<lt.length;It++){let Xt=lt[It];k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,0,0,Lt,bt,Xt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,Kt,Lt,bt,Xt.image[tt])}}}g(S)&&p(r.TEXTURE_CUBE_MAP),$.__version=it.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function vt(I,S,H,X,it,$){let Pt=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),Rt=w(H.internalFormat,Pt,dt,H.colorSpace),Ct=n.get(S),at=n.get(H);if(at.__renderTarget=S,!Ct.__hasExternalTextures){let yt=Math.max(1,S.width>>$),Ot=Math.max(1,S.height>>$);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,$,Rt,yt,Ot,S.depth,0,Pt,dt,null):e.texImage2D(it,$,Rt,yt,Ot,0,Pt,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),ot(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,it,at.__webglTexture,0,pt(S)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,it,at.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(I,S,H){if(r.bindRenderbuffer(r.RENDERBUFFER,I),S.depthBuffer){let X=S.depthTexture,it=X&&X.isDepthTexture?X.type:null,$=y(S.stencilBuffer,it),Pt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=pt(S);ot(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,$,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,I)}else{let X=S.textures;for(let it=0;it<X.length;it++){let $=X[it],Pt=s.convert($.format,$.colorSpace),dt=s.convert($.type),Rt=w($.internalFormat,Pt,dt,$.colorSpace),Ct=pt(S);H&&ot(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,Rt,S.width,S.height):ot(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,Rt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let it=X.__webglTexture,$=pt(S);if(S.depthTexture.format===xr)ot(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(S.depthTexture.format===Ur)ot(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Qt(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",it)};X.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=X}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let X=I.texture.mipmaps;X&&X.length>0?At(S.__webglFramebuffer[0],I):At(S.__webglFramebuffer,I)}else if(H){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=r.createRenderbuffer(),Ut(S.__webglDepthbuffer[X],I,!1);else{let it=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,$)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ut(S.__webglDepthbuffer,I,!1);else{let it=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,$)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function de(I,S,H){let X=n.get(I);S!==void 0&&vt(X.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Qt(I)}function D(I){let S=I.texture,H=n.get(I),X=n.get(S);I.addEventListener("dispose",v);let it=I.textures,$=I.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=S.version,o.memory.textures++),$){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let Rt=0;Rt<S.mipmaps.length;Rt++)H.__webglFramebuffer[dt][Rt]=r.createFramebuffer()}else H.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)H.__webglFramebuffer[dt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let dt=0,Rt=it.length;dt<Rt;dt++){let Ct=n.get(it[dt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&ot(I)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){let Rt=it[dt];H.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);let Ct=s.convert(Rt.format,Rt.colorSpace),at=s.convert(Rt.type),yt=w(Rt.internalFormat,Ct,at,Rt.colorSpace,I.isXRRenderTarget===!0),Ot=pt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,yt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),ft(r.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)vt(H.__webglFramebuffer[dt][Rt],I,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt);else vt(H.__webglFramebuffer[dt],I,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,Rt=it.length;dt<Rt;dt++){let Ct=it[dt],at=n.get(Ct),yt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(yt,at.__webglTexture),ft(yt,Ct),vt(H.__webglFramebuffer,I,Ct,r.COLOR_ATTACHMENT0+dt,yt,0),g(Ct)&&p(yt)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(dt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),ft(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)vt(H.__webglFramebuffer[Rt],I,S,r.COLOR_ATTACHMENT0,dt,Rt);else vt(H.__webglFramebuffer,I,S,r.COLOR_ATTACHMENT0,dt,0);g(S)&&p(dt),e.unbindTexture()}I.depthBuffer&&Qt(I)}function rt(I){let S=I.textures;for(let H=0,X=S.length;H<X;H++){let it=S[H];if(g(it)){let $=M(I),Pt=n.get(it).__webglTexture;e.bindTexture($,Pt),p($),e.unbindTexture()}}}let j=[],J=[];function K(I){if(I.samples>0){if(ot(I)===!1){let S=I.textures,H=I.width,X=I.height,it=r.COLOR_BUFFER_BIT,$=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=n.get(I),dt=S.length>1;if(dt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let Rt=I.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ct]);let at=n.get(S[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,H,X,0,0,H,X,it,r.NEAREST),l===!0&&(j.length=0,J.length=0,j.push(r.COLOR_ATTACHMENT0+Ct),I.depthBuffer&&I.resolveDepthBuffer===!1&&(j.push($),J.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,J)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ct]);let at=n.get(S[Ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,at,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function pt(I){return Math.min(i.maxSamples,I.samples)}function ot(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Wt(I,S){let H=I.colorSpace,X=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Ci&&H!==Kn&&(te.getTransfer(H)===ae?(X!==nn||it!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=de,this.setupRenderTarget=D,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ot}function ev(r,t){function e(n,i=Kn){let s,o=te.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===Na)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return r.BYTE;if(n===Th)return r.SHORT;if(n===Pr)return r.UNSIGNED_SHORT;if(n===Fa)return r.INT;if(n===fi)return r.UNSIGNED_INT;if(n===un)return r.FLOAT;if(n===Lr)return r.HALF_FLOAT;if(n===Ch)return r.ALPHA;if(n===Ih)return r.RGB;if(n===nn)return r.RGBA;if(n===xr)return r.DEPTH_COMPONENT;if(n===Ur)return r.DEPTH_STENCIL;if(n===Oa)return r.RED;if(n===Ha)return r.RED_INTEGER;if(n===Ph)return r.RG;if(n===Va)return r.RG_INTEGER;if(n===Ga)return r.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===$s)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===$a||n===qa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ya||n===Ka)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Za||n===Ya)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===ja||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ul)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ss(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends Cn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new eu,p={},M=e.getContextAttributes(),w=null,y=null,A=[],C=[],v=new Q,E=null,b=new De;b.viewport=new ne;let _=new De;_.viewport=new ne;let R=[b,_],P=new wa,U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=A[q];return nt===void 0&&(nt=new wr,A[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=A[q];return nt===void 0&&(nt=new wr,A[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=A[q];return nt===void 0&&(nt=new wr,A[q]=nt),nt.getHandSpace()};function V(q){let nt=C.indexOf(q.inputSource);if(nt===-1)return;let vt=A[nt];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<A.length;q++){let nt=C[q];nt!==null&&(C[q]=null,A[q].disconnect(nt))}U=null,N=null,g.reset();for(let q in p)delete p[q];t.setRenderTarget(w),f=null,d=null,u=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,At=null;M.depth&&(At=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Ur:xr,Ut=M.stencil?Dr:fi);let Qt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Qt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new In(d.textureWidth,d.textureHeight,{format:nn,type:vn,depthTexture:new ws(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new In(f.framebufferWidth,f.framebufferHeight,{format:nn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(q){for(let nt=0;nt<q.removed.length;nt++){let vt=q.removed[nt],Ut=C.indexOf(vt);Ut>=0&&(C[Ut]=null,A[Ut].disconnect(vt))}for(let nt=0;nt<q.added.length;nt++){let vt=q.added[nt],Ut=C.indexOf(vt);if(Ut===-1){for(let Qt=0;Qt<A.length;Qt++)if(Qt>=C.length){C.push(vt),Ut=Qt;break}else if(C[Qt]===null){C[Qt]=vt,Ut=Qt;break}if(Ut===-1)break}let At=A[Ut];At&&At.connect(vt)}}let z=new L,Z=new L;function et(q,nt,vt){z.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);let Ut=z.distanceTo(Z),At=nt.projectionMatrix.elements,Qt=vt.projectionMatrix.elements,de=At[14]/(At[10]-1),D=At[14]/(At[10]+1),rt=(At[9]+1)/At[5],j=(At[9]-1)/At[5],J=(At[8]-1)/At[0],K=(Qt[8]+1)/Qt[0],pt=de*J,ot=de*K,mt=Ut/(-J+K),Wt=mt*-J;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Gt=de+mt,I=D+mt,S=pt-Wt,H=ot+(Ut-Wt),X=rt*D/I*Gt,it=j*D/I*Gt;q.projectionMatrix.makePerspective(S,H,X,it,Gt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ht(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let nt=q.near,vt=q.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),P.near=_.near=b.near=nt,P.far=_.far=b.far=vt,(U!==P.near||N!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,N=P.far),P.layers.mask=q.layers.mask|6,b.layers.mask=P.layers.mask&3,_.layers.mask=P.layers.mask&5;let Ut=q.parent,At=P.cameras;ht(P,Ut);for(let Qt=0;Qt<At.length;Qt++)ht(At[Qt],Ut);At.length===2?et(P,b,_):P.projectionMatrix.copy(b.projectionMatrix),ft(q,P,Ut)};function ft(q,nt,vt){vt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ii*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(q){return p[q]};let Dt=null;function Nt(q,nt){if(h=nt.getViewerPose(c||o),m=nt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;vt.length!==P.cameras.length&&(P.cameras.length=0,Ut=!0);for(let D=0;D<vt.length;D++){let rt=vt[D],j=null;if(f!==null)j=f.getViewport(rt);else{let K=u.getViewSubImage(d,rt);j=K.viewport,D===0&&(t.setRenderTargetTextures(y,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(y))}let J=R[D];J===void 0&&(J=new De,J.layers.enable(D),J.viewport=new ne,R[D]=J),J.matrix.fromArray(rt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(rt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(j.x,j.y,j.width,j.height),D===0&&(P.matrix.copy(J.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ut===!0&&P.cameras.push(J)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let D=u.getDepthInformation(vt[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<vt.length;D++){let rt=vt[D].camera;if(rt){let j=p[rt];j||(j=new Ss,p[rt]=j);let J=u.getCameraImage(rt);j.sourceTexture=J}}}}for(let vt=0;vt<A.length;vt++){let Ut=C[vt],At=A[vt];Ut!==null&&At!==void 0&&At.update(Ut,nt,c||o)}Dt&&Dt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let $t=new vp;$t.setAnimationLoop(Nt),this.setAnimationLoop=function(q){Dt=q},this.dispose=function(){}}},Wi=new qe,rv=new qt;function sv(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ve&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ve&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,y=M.envMapRotation;w&&(g.envMap.value=w,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),g.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Wi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ov(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let y=w.program;n.uniformBlockBinding(M,y)}function c(M,w){let y=i[M.id];y===void 0&&(m(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",g));let A=w.program;n.updateUBOMapping(M,A);let C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function h(M){let w=u();M.__bindingPointIndex=w;let y=r.createBuffer(),A=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let w=i[M.id],y=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let C=0,v=y.length;C<v;C++){let E=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,_=E.length;b<_;b++){let R=E[b];if(f(R,C,b,A)===!0){let P=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],N=0;for(let V=0;V<U.length;V++){let O=U[V],Y=x(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,P+N,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,w,y,A){let C=M.value,v=w+"_"+y;if(A[v]===void 0)return typeof C=="number"||typeof C=="boolean"?A[v]=C:A[v]=C.clone(),!0;{let E=A[v];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return A[v]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function m(M){let w=M.uniforms,y=0,A=16;for(let v=0,E=w.length;v<E;v++){let b=Array.isArray(w[v])?w[v]:[w[v]];for(let _=0,R=b.length;_<R;_++){let P=b[_],U=Array.isArray(P.value)?P.value:[P.value];for(let N=0,V=U.length;N<V;N++){let O=U[N],Y=x(O),z=y%A,Z=z%Y.boundary,et=z+Z;y+=Z,et!==0&&A-et<Y.storage&&(y+=A-et),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=Y.storage}}}let C=y%A;return C>0&&(y+=A-C),M.__size=y,M.__cache={},this}function x(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function g(M){let w=M.target;w.removeEventListener("dispose",g);let y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var yp=class{constructor(t={}){let{canvas:e=Of(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=Oe;let C=0,v=0,E=null,b=-1,_=null,R=new ne,P=new ne,U=null,N=new St(0),V=0,O=e.width,Y=e.height,z=1,Z=null,et=null,ht=new ne(0,0,O,Y),ft=new ne(0,0,O,Y),Dt=!1,Nt=new Ar,$t=!1,q=!1,nt=new qt,vt=new L,Ut=new ne,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function de(){return E===null?z:1}let D=n;function rt(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){let F="webgl2";if(D=rt(F,T),D===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let j,J,K,pt,ot,mt,Wt,Gt,I,S,H,X,it,$,Pt,dt,Rt,Ct,at,yt,Ot,Lt,bt,Kt;function k(){j=new S_(D),j.init(),Lt=new ev(D,j),J=new x_(D,j,t,Lt),K=new jy(D,j),J.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),pt=new A_(D),ot=new Oy,mt=new tv(D,j,K,ot,J,Lt,pt),Wt=new __(y),Gt=new w_(y),I=new D0(D),bt=new m_(D,I),S=new E_(D,I,pt,bt),H=new C_(D,S,I,pt),at=new R_(D,J,mt),dt=new b_(ot),X=new By(y,Wt,Gt,j,J,bt,dt),it=new sv(y,ot),$=new Vy,Pt=new Zy(j),Ct=new p_(y,Wt,Gt,K,H,f,l),Rt=new Jy(y,H,J),Kt=new ov(D,pt,J,K),yt=new g_(D,j,pt),Ot=new T_(D,j,pt),pt.programs=X.programs,y.capabilities=J,y.extensions=j,y.properties=ot,y.renderLists=$,y.shadowMap=Rt,y.state=K,y.info=pt}k();let ut=new nu(y,D);this.xr=ut,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(O,Y,!1))},this.getSize=function(T){return T.set(O,Y)},this.setSize=function(T,F,G=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,Y=F,e.width=Math.floor(T*z),e.height=Math.floor(F*z),G===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(O*z,Y*z).floor()},this.setDrawingBufferSize=function(T,F,G){O=T,Y=F,z=G,e.width=Math.floor(T*G),e.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,F,G,W){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,F,G,W),K.viewport(R.copy(ht).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ft)},this.setScissor=function(T,F,G,W){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,F,G,W),K.scissor(P.copy(ft).multiplyScalar(z).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){K.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,G=!0){let W=0;if(T){let B=!1;if(E!==null){let ct=E.texture.format;B=ct===Ga||ct===Va||ct===Ha}if(B){let ct=E.texture.type,_t=ct===vn||ct===fi||ct===Pr||ct===Dr||ct===Na||ct===Ba,Et=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Bt=Et.r,Ht=Et.g,kt=Et.b;_t?(m[0]=Bt,m[1]=Ht,m[2]=kt,m[3]=Mt,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Bt,x[1]=Ht,x[2]=kt,x[3]=Mt,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Ct.dispose(),$.dispose(),Pt.dispose(),ot.dispose(),Wt.dispose(),Gt.dispose(),H.dispose(),bt.dispose(),Kt.dispose(),X.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Sn),ut.removeEventListener("sessionend",Pu),bi.stop()};function gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=pt.autoReset,F=Rt.enabled,G=Rt.autoUpdate,W=Rt.needsUpdate,B=Rt.type;k(),pt.autoReset=T,Rt.enabled=F,Rt.autoUpdate=G,Rt.needsUpdate=W,Rt.type=B}function lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function tt(T){let F=T.target;F.removeEventListener("dispose",tt),It(F)}function It(T){Xt(T),ot.remove(T)}function Xt(T){let F=ot.get(T).programs;F!==void 0&&(F.forEach(function(G){X.releaseProgram(G)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,W,B,ct){F===null&&(F=At);let _t=B.isMesh&&B.matrixWorld.determinant()<0,Et=Rm(T,F,G,W,B);K.setMaterial(W,_t);let Mt=G.index,Bt=1;if(W.wireframe===!0){if(Mt=S.getWireframeAttribute(G),Mt===void 0)return;Bt=2}let Ht=G.drawRange,kt=G.attributes.position,jt=Ht.start*Bt,le=(Ht.start+Ht.count)*Bt;ct!==null&&(jt=Math.max(jt,ct.start*Bt),le=Math.min(le,(ct.start+ct.count)*Bt)),Mt!==null?(jt=Math.max(jt,0),le=Math.min(le,Mt.count)):kt!=null&&(jt=Math.max(jt,0),le=Math.min(le,kt.count));let _e=le-jt;if(_e<0||_e===1/0)return;bt.setup(B,W,Et,G,Mt);let me,ce=yt;if(Mt!==null&&(me=I.get(Mt),ce=Ot,ce.setIndex(me)),B.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*de()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(B.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),K.setLineWidth(Ft*de()),B.isLineSegments?ce.setMode(D.LINES):B.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else B.isPoints?ce.setMode(D.POINTS):B.isSprite&&ce.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ce.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ft=B._multiDrawStarts,ge=B._multiDrawCounts,ee=B._multiDrawCount,Ke=Mt?I.get(Mt).bytesPerElement:1,Ji=ot.get(W).currentProgram.getUniforms();for(let Je=0;Je<ee;Je++)Ji.setValue(D,"_gl_DrawID",Je),ce.render(Ft[Je]/Ke,ge[Je])}else if(B.isInstancedMesh)ce.renderInstances(jt,_e,B.count);else if(G.isInstancedBufferGeometry){let Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,Ft);ce.renderInstances(jt,_e,ge)}else ce.render(jt,_e)};function fe(T,F,G){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,ho(T,F,G),T.side=Wn,T.needsUpdate=!0,ho(T,F,G),T.side=Ln):ho(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),p=Pt.get(G),p.init(F),w.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==G&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let W=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ct=B.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Et=ct[_t];fe(Et,G,B),W.add(Et)}else fe(ct,G,B),W.add(ct)}),p=w.pop(),W},this.compileAsync=function(T,F,G=null){let W=this.compile(T,F,G);return new Promise(B=>{function ct(){if(W.forEach(function(_t){ot.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){B(T);return}setTimeout(ct,10)}j.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let re=null;function kn(T){re&&re(T)}function Sn(){bi.stop()}function Pu(){bi.start()}let bi=new vp;bi.setAnimationLoop(kn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){re=T,ut.setAnimationLoop(T),T===null?bi.stop():bi.start()},ut.addEventListener("sessionstart",Sn),ut.addEventListener("sessionend",Pu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,E),p=Pt.get(T,w.length),p.init(F),w.push(p),nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Nt.setFromProjectionMatrix(nt,xn,F.reversedDepth),q=this.localClippingEnabled,$t=dt.init(this.clippingPlanes,q),g=$.get(T,M.length),g.init(),M.push(g),ut.enabled===!0&&ut.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&jl(ct,F,-1/0,y.sortObjects)}jl(T,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Z,et),Qt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Qt&&Ct.addToRenderList(g,T),this.info.render.frame++,$t===!0&&dt.beginShadows();let G=p.state.shadowsArray;Rt.render(G,T,F),$t===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,B=g.transmissive;if(p.setupLights(),F.isArrayCamera){let ct=F.cameras;if(B.length>0)for(let _t=0,Et=ct.length;_t<Et;_t++){let Mt=ct[_t];Du(W,B,T,Mt)}Qt&&Ct.render(T);for(let _t=0,Et=ct.length;_t<Et;_t++){let Mt=ct[_t];Lu(g,T,Mt,Mt.viewport)}}else B.length>0&&Du(W,B,T,F),Qt&&Ct.render(T),Lu(g,T,F);E!==null&&v===0&&(mt.updateMultisampleRenderTarget(E),mt.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(y,T,F),bt.resetDefaultState(),b=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],$t===!0&&dt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function jl(T,F,G,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Nt.intersectsSprite(T)){W&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);let _t=H.update(T),Et=T.material;Et.visible&&g.push(T,_t,Et,G,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Nt.intersectsObject(T))){let _t=H.update(T),Et=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ut.copy(_t.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(nt)),Array.isArray(Et)){let Mt=_t.groups;for(let Bt=0,Ht=Mt.length;Bt<Ht;Bt++){let kt=Mt[Bt],jt=Et[kt.materialIndex];jt&&jt.visible&&g.push(T,_t,jt,G,Ut.z,kt)}}else Et.visible&&g.push(T,_t,Et,G,Ut.z,null)}}let ct=T.children;for(let _t=0,Et=ct.length;_t<Et;_t++)jl(ct[_t],F,G,W)}function Lu(T,F,G,W){let B=T.opaque,ct=T.transmissive,_t=T.transparent;p.setupLightsView(G),$t===!0&&dt.setGlobalState(y.clippingPlanes,G),W&&K.viewport(R.copy(W)),B.length>0&&co(B,F,G),ct.length>0&&co(ct,F,G),_t.length>0&&co(_t,F,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Du(T,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new In(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Lr:vn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let ct=p.state.transmissionRenderTarget[W.id],_t=W.viewport||R;ct.setSize(_t.z*y.transmissionResolutionScale,_t.w*y.transmissionResolutionScale);let Et=y.getRenderTarget(),Mt=y.getActiveCubeFace(),Bt=y.getActiveMipmapLevel();y.setRenderTarget(ct),y.getClearColor(N),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&Ct.render(G);let Ht=y.toneMapping;y.toneMapping=Yn;let kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$t===!0&&dt.setGlobalState(y.clippingPlanes,W),co(T,G,W),mt.updateMultisampleRenderTarget(ct),mt.updateRenderTargetMipmap(ct),j.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let le=0,_e=F.length;le<_e;le++){let me=F[le],ce=me.object,Ft=me.geometry,ge=me.material,ee=me.group;if(ge.side===Ln&&ce.layers.test(W.layers)){let Ke=ge.side;ge.side=Ve,ge.needsUpdate=!0,Uu(ce,G,W,Ft,ge,ee),ge.side=Ke,ge.needsUpdate=!0,jt=!0}}jt===!0&&(mt.updateMultisampleRenderTarget(ct),mt.updateRenderTargetMipmap(ct))}y.setRenderTarget(Et,Mt,Bt),y.setClearColor(N,V),kt!==void 0&&(W.viewport=kt),y.toneMapping=Ht}function co(T,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ct=T.length;B<ct;B++){let _t=T[B],Et=_t.object,Mt=_t.geometry,Bt=_t.group,Ht=_t.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),Et.layers.test(G.layers)&&Uu(Et,F,G,Mt,Ht,Bt)}}function Uu(T,F,G,W,B,ct){T.onBeforeRender(y,F,G,W,B,ct),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,F,G,W,T,ct),B.transparent===!0&&B.side===Ln&&B.forceSinglePass===!1?(B.side=Ve,B.needsUpdate=!0,y.renderBufferDirect(G,F,W,B,T,ct),B.side=Wn,B.needsUpdate=!0,y.renderBufferDirect(G,F,W,B,T,ct),B.side=Ln):y.renderBufferDirect(G,F,W,B,T,ct),T.onAfterRender(y,F,G,W,B,ct)}function ho(T,F,G){F.isScene!==!0&&(F=At);let W=ot.get(T),B=p.state.lights,ct=p.state.shadowsArray,_t=B.state.version,Et=X.getParameters(T,B.state,ct,F,G),Mt=X.getProgramCacheKey(Et),Bt=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?Gt:Wt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",tt),Bt=new Map,W.programs=Bt);let Ht=Bt.get(Mt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===_t)return zu(T,Et),Ht}else Et.uniforms=X.getUniforms(T),T.onBeforeCompile(Et,y),Ht=X.acquireProgram(Et,Mt),Bt.set(Mt,Ht),W.uniforms=Et.uniforms;let kt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=dt.uniform),zu(T,Et),W.needsLights=Im(T),W.lightsStateVersion=_t,W.needsLights&&(kt.ambientLightColor.value=B.state.ambient,kt.lightProbe.value=B.state.probe,kt.directionalLights.value=B.state.directional,kt.directionalLightShadows.value=B.state.directionalShadow,kt.spotLights.value=B.state.spot,kt.spotLightShadows.value=B.state.spotShadow,kt.rectAreaLights.value=B.state.rectArea,kt.ltc_1.value=B.state.rectAreaLTC1,kt.ltc_2.value=B.state.rectAreaLTC2,kt.pointLights.value=B.state.point,kt.pointLightShadows.value=B.state.pointShadow,kt.hemisphereLights.value=B.state.hemi,kt.directionalShadowMap.value=B.state.directionalShadowMap,kt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,kt.spotShadowMap.value=B.state.spotShadowMap,kt.spotLightMatrix.value=B.state.spotLightMatrix,kt.spotLightMap.value=B.state.spotLightMap,kt.pointShadowMap.value=B.state.pointShadowMap,kt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function ku(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Fr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function zu(T,F){let G=ot.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Rm(T,F,G,W,B){F.isScene!==!0&&(F=At),mt.resetTextureUnits();let ct=F.fog,_t=W.isMeshStandardMaterial?F.environment:null,Et=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ci,Mt=(W.isMeshStandardMaterial?Gt:Wt).get(W.envMap||_t),Bt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ht=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),kt=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,le=!!G.morphAttributes.color,_e=Yn;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_e=y.toneMapping);let me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=me!==void 0?me.length:0,Ft=ot.get(W),ge=p.state.lights;if($t===!0&&(q===!0||T!==_)){let Ne=T===_&&W.id===b;dt.setState(W,T,Ne)}let ee=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ge.state.version||Ft.outputColorSpace!==Et||B.isBatchedMesh&&Ft.batching===!1||!B.isBatchedMesh&&Ft.batching===!0||B.isBatchedMesh&&Ft.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ft.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ft.instancing===!1||!B.isInstancedMesh&&Ft.instancing===!0||B.isSkinnedMesh&&Ft.skinning===!1||!B.isSkinnedMesh&&Ft.skinning===!0||B.isInstancedMesh&&Ft.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ft.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ft.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ft.instancingMorph===!1&&B.morphTexture!==null||Ft.envMap!==Mt||W.fog===!0&&Ft.fog!==ct||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==dt.numPlanes||Ft.numIntersection!==dt.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==Ht||Ft.morphTargets!==kt||Ft.morphNormals!==jt||Ft.morphColors!==le||Ft.toneMapping!==_e||Ft.morphTargetsCount!==ce)&&(ee=!0):(ee=!0,Ft.__version=W.version);let Ke=Ft.currentProgram;ee===!0&&(Ke=ho(W,F,B));let Ji=!1,Je=!1,qr=!1,xe=Ke.getUniforms(),rn=Ft.uniforms;if(K.useProgram(Ke.program)&&(Ji=!0,Je=!0,qr=!0),W.id!==b&&(b=W.id,Je=!0),Ji||_!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xe.setValue(D,"projectionMatrix",T.projectionMatrix),xe.setValue(D,"viewMatrix",T.matrixWorldInverse);let Xe=xe.map.cameraPosition;Xe!==void 0&&Xe.setValue(D,vt.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,Je=!0,qr=!0)}if(B.isSkinnedMesh){xe.setOptional(D,B,"bindMatrix"),xe.setOptional(D,B,"bindMatrixInverse");let Ne=B.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),xe.setValue(D,"boneTexture",Ne.boneTexture,mt))}B.isBatchedMesh&&(xe.setOptional(D,B,"batchingTexture"),xe.setValue(D,"batchingTexture",B._matricesTexture,mt),xe.setOptional(D,B,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",B._indirectTexture,mt),xe.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",B._colorsTexture,mt));let sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&at.update(B,G,Ke),(Je||Ft.receiveShadow!==B.receiveShadow)&&(Ft.receiveShadow=B.receiveShadow,xe.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=Mt,rn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),Je&&(xe.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Cm(rn,qr),ct&&W.fog===!0&&it.refreshFogUniforms(rn,ct),it.refreshMaterialUniforms(rn,W,z,Y,p.state.transmissionRenderTarget[T.id]),Fr.upload(D,ku(Ft),rn,mt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fr.upload(D,ku(Ft),rn,mt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(D,"center",B.center),xe.setValue(D,"modelViewMatrix",B.modelViewMatrix),xe.setValue(D,"normalMatrix",B.normalMatrix),xe.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ne=W.uniformsGroups;for(let Xe=0,tc=Ne.length;Xe<tc;Xe++){let _i=Ne[Xe];Kt.update(_i,Ke),Kt.bind(_i,Ke)}}return Ke}function Cm(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Im(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,F,G){let W=ot.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ot.get(T.texture).__webglTexture=F,ot.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let G=ot.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let Pm=D.createFramebuffer();this.setRenderTarget=function(T,F=0,G=0){E=T,C=F,v=G;let W=!0,B=null,ct=!1,_t=!1;if(T){let Mt=ot.get(T);if(Mt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)mt.setupRenderTarget(T);else if(Mt.__hasExternalTextures)mt.rebindTextures(T,ot.get(T.texture).__webglTexture,ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let kt=T.depthTexture;if(Mt.__boundDepthTexture!==kt){if(kt!==null&&ot.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(T)}}let Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(_t=!0);let Ht=ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?B=Ht[F][G]:B=Ht[F],ct=!0):T.samples>0&&mt.useMultisampledRTT(T)===!1?B=ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[G]:B=Ht,R.copy(T.viewport),P.copy(T.scissor),U=T.scissorTest}else R.copy(ht).multiplyScalar(z).floor(),P.copy(ft).multiplyScalar(z).floor(),U=Dt;if(G!==0&&(B=Pm),K.bindFramebuffer(D.FRAMEBUFFER,B)&&W&&K.drawBuffers(T,B),K.viewport(R),K.scissor(P),K.setScissorTest(U),ct){let Mt=ot.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,G)}else if(_t){let Mt=F;for(let Bt=0;Bt<T.textures.length;Bt++){let Ht=ot.get(T.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,G,Mt)}}else if(T!==null&&G!==0){let Mt=ot.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(T,F,G,W,B,ct,_t,Et=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt){K.bindFramebuffer(D.FRAMEBUFFER,Mt);try{let Bt=T.textures[Et],Ht=Bt.format,kt=Bt.type;if(!J.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&G>=0&&G<=T.height-B&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),D.readPixels(F,G,W,B,Lt.convert(Ht),Lt.convert(kt),ct))}finally{let Bt=E!==null?ot.get(E).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,W,B,ct,_t,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt)if(F>=0&&F<=T.width-W&&G>=0&&G<=T.height-B){K.bindFramebuffer(D.FRAMEBUFFER,Mt);let Bt=T.textures[Et],Ht=Bt.format,kt=Bt.type;if(!J.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,jt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),D.readPixels(F,G,W,B,Lt.convert(Ht),Lt.convert(kt),0);let le=E!==null?ot.get(E).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,le);let _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hf(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(jt),D.deleteSync(_e),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,G=0){let W=Math.pow(2,-G),B=Math.floor(T.image.width*W),ct=Math.floor(T.image.height*W),_t=F!==null?F.x:0,Et=F!==null?F.y:0;mt.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,_t,Et,B,ct),K.unbindTexture()};let Lm=D.createFramebuffer(),Dm=D.createFramebuffer();this.copyTextureToTexture=function(T,F,G=null,W=null,B=0,ct=null){ct===null&&(B!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=B,B=0):ct=0);let _t,Et,Mt,Bt,Ht,kt,jt,le,_e,me=T.isCompressedTexture?T.mipmaps[ct]:T.image;if(G!==null)_t=G.max.x-G.min.x,Et=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Bt=G.min.x,Ht=G.min.y,kt=G.isBox3?G.min.z:0;else{let sn=Math.pow(2,-B);_t=Math.floor(me.width*sn),Et=Math.floor(me.height*sn),T.isDataArrayTexture?Mt=me.depth:T.isData3DTexture?Mt=Math.floor(me.depth*sn):Mt=1,Bt=0,Ht=0,kt=0}W!==null?(jt=W.x,le=W.y,_e=W.z):(jt=0,le=0,_e=0);let ce=Lt.convert(F.format),Ft=Lt.convert(F.type),ge;F.isData3DTexture?(mt.setTexture3D(F,0),ge=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(mt.setTexture2DArray(F,0),ge=D.TEXTURE_2D_ARRAY):(mt.setTexture2D(F,0),ge=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let ee=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ji=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),qr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt);let xe=T.isDataArrayTexture||T.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let sn=ot.get(T),Ne=ot.get(F),Xe=ot.get(sn.__renderTarget),tc=ot.get(Ne.__renderTarget);K.bindFramebuffer(D.READ_FRAMEBUFFER,Xe.__webglFramebuffer),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,tc.__webglFramebuffer);for(let _i=0;_i<Mt;_i++)xe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ot.get(T).__webglTexture,B,kt+_i),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ot.get(F).__webglTexture,ct,_e+_i)),D.blitFramebuffer(Bt,Ht,_t,Et,jt,le,_t,Et,D.DEPTH_BUFFER_BIT,D.NEAREST);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||ot.has(T)){let sn=ot.get(T),Ne=ot.get(F);K.bindFramebuffer(D.READ_FRAMEBUFFER,Lm),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dm);for(let Xe=0;Xe<Mt;Xe++)xe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,B,kt+Xe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,B),rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,ct,_e+Xe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,ct),B!==0?D.blitFramebuffer(Bt,Ht,_t,Et,jt,le,_t,Et,D.COLOR_BUFFER_BIT,D.NEAREST):rn?D.copyTexSubImage3D(ge,ct,jt,le,_e+Xe,Bt,Ht,_t,Et):D.copyTexSubImage2D(ge,ct,jt,le,Bt,Ht,_t,Et);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(ge,ct,jt,le,_e,_t,Et,Mt,ce,Ft,me.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,ct,jt,le,_e,_t,Et,Mt,ce,me.data):D.texSubImage3D(ge,ct,jt,le,_e,_t,Et,Mt,ce,Ft,me):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,jt,le,_t,Et,ce,Ft,me.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,jt,le,me.width,me.height,ce,me.data):D.texSubImage2D(D.TEXTURE_2D,ct,jt,le,_t,Et,ce,Ft,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qr),ct===0&&F.generateMipmaps&&D.generateMipmap(ge),K.unbindTexture()},this.initRenderTarget=function(T){ot.get(T).__webglFramebuffer===void 0&&mt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?mt.setTextureCube(T,0):T.isData3DTexture?mt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?mt.setTexture2DArray(T,0):mt.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){C=0,v=0,E=null,K.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function Mn(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Tp(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=Tp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Tp(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new he(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Br(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,o=0,a=Object.keys(r.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,w=a.length;M<w;M++){let y=a[M],A=r.attributes[y];l[y]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let C=r.morphAttributes[y];C&&(c[y]||(c[y]=[]),C.forEach((v,E)=>{let b=new v.array.constructor(v.count*v.itemSize);c[y][E]=new v.constructor(b,v.itemSize,v.normalized)}))}let f=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),g=f*x;for(let M=0;M<s;M++){let w=n?n.getX(M):M,y="";for(let A=0,C=a.length;A<C;A++){let v=a[A],E=r.getAttribute(v),b=E.itemSize;for(let _=0;_<b;_++)y+=`${~~(E[u[_]](w)*x+g)},`}if(y in e)h.push(e[y]);else{for(let A=0,C=a.length;A<C;A++){let v=a[A],E=r.getAttribute(v),b=r.morphAttributes[v],_=E.itemSize,R=l[v],P=c[v];for(let U=0;U<_;U++){let N=u[U],V=d[U];if(R[V](o,E[N](w)),b)for(let O=0,Y=b.length;O<Y;O++)P[O][V](o,b[O][N](w))}}e[y]=o,h.push(o),o++}}let p=r.clone();for(let M in r.attributes){let w=l[M];if(p.setAttribute(M,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),M in c)for(let y=0;y<c[M].length;y++){let A=c[M][y];p.morphAttributes[M][y]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}function sS(r,t){if(t===Lh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===_l||t===Dh){let e=r.getIndex();if(e===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===_l)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}function we(r){let t=r*2654435761>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var av=(r,t,e)=>{let n=Math.sin(r*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)},ru=r=>r*r*(3-2*r);function lv(r,t,e){let n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=ru(r-n),a=ru(t-i),l=ru(e-s),c=(u,d,f)=>u+(d-u)*f,h=(u,d,f)=>av(n+u,i+d,s+f);return c(c(c(h(0,0,0),h(1,0,0),o),c(h(0,1,0),h(1,1,0),o),a),c(c(h(0,0,1),h(1,0,1),o),c(h(0,1,1),h(1,1,1),o),a),l)}function El(r,t,e,n=3){let i=0,s=.5,o=1,a=0;for(let l=0;l<n;l++)i+=(lv(r*o,t*o,e*o)-.5)*s,a+=s,s*=.5,o*=2.03;return i/a}var ie=r=>new St(r),cv=new St,su=new L(-.99,1.9,.42).normalize();function ou(r=.35){return Yt.lights_physical_pars_fragment.replace("vec3 irradiance = dotNL * directLight.color;",`vec3 irradiance = dotNL * directLight.color;
	vec3 wrapIrradiance = clamp((dot(geometryNormal, directLight.direction) + ${r.toFixed(2)}) / ${(1+r).toFixed(2)}, 0.0, 1.0) * directLight.color;`).replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );","reflectedLight.directDiffuse += wrapIrradiance * BRDF_Lambert( material.diffuseColor );")}function Rp(r=.35,t=.82){let e=new Xn({vertexColors:!0,roughness:t,metalness:0});return e.customProgramCacheKey=()=>`veg${r}`,e.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",ou(r))},e}function Al(r,t){let e=r.getAttribute("position"),n=r.getAttribute("normal"),i=new Float32Array(e.count*3),s=new L,o=new L;for(let a=0;a<e.count;a++){s.fromBufferAttribute(e,a),o.fromBufferAttribute(n,a);let l=t(s,o,a);i[a*3]=l.r,i[a*3+1]=l.g,i[a*3+2]=l.b}r.setAttribute("color",new he(i,3))}function Rl(r){for(let t of Object.keys(r.attributes))t!=="position"&&t!=="normal"&&t!=="color"&&r.deleteAttribute(t);return r}var Qs=(r,t,e)=>cv.copy(r).lerp(t,ve.clamp(e,0,1)).clone(),Ks={deep:ie(3105856),mid:ie(5808210),lit:ie(10146920),tip:ie(11853424)},Tl={dark:ie(4139548),lit:ie(7754810)};function hv(r,t,e,n,i,s,o=!0){let a=e*(o==="tiny"?2:o?6:4),l=new Li([new Q(0,t),new Q(.28*r,.7*t),new Q(.6*r,.38*t),new Q(.9*r,.1*t),new Q(1*r,-.02*t),new Q(.8*r,-.08*t),new Q(.45*r,.02*t)]),c=o==="tiny"?4:o?10:5,h=l.getSpacedPoints(c-1),u=[],d=[];for(let x=0;x<c;x++){let g=x/(c-1),{x:p,y:M}=h[x],w=ve.smoothstep(g,.25,.7);for(let y=0;y<a;y++){let A=y/a*Math.PI*2,C=Math.pow(.5+.5*Math.cos(e*A+n),1.4),v=x===0?0:p*(1+.24*(C-.4)*w),E=M-i*t*w*C+.1*t*w*(1-C);u.push(Math.cos(A)*v,E,Math.sin(A)*v),d.push(g,C)}}let f=[];for(let x=0;x<c-1;x++)for(let g=0;g<a;g++){let p=x*a+g,M=x*a+(g+1)%a,w=(x+1)*a+g,y=(x+1)*a+(g+1)%a;f.push(p,M,w,M,y,w)}let m=new ue;return m.setAttribute("position",new Vt(u,3)),m.setIndex(f),m.computeVertexNormals(),Al(m,(x,g,p)=>{let M=d[p*2],w=d[p*2+1],y=g.dot(su),A=Qs(Ks.mid,Ks.lit,ve.smoothstep(.35*g.y+.65*y,.05,.7)+.2*w*M);return M<.2&&A.lerp(Ks.tip,(.2-M)*2.5*Math.max(0,y+.3)),g.y<0&&A.lerp(Ks.deep,Math.min(1,-g.y*1.8)),A.lerp(Ks.deep,(1-w)*.2*M+(1-s)*.18),A}),Rl(m)}function Cp(r,t,e,n=12){let i=new Ze(r*.8,r,t,n,4,!0);i.translate(0,t/2,0);let s=i.getAttribute("position");for(let o=0;o<s.count;o++){let a=s.getY(o),l=1+e*Math.pow(1-ve.clamp(a/(t*.35),0,1),2);s.setX(o,s.getX(o)*l),s.setZ(o,s.getZ(o)*l)}return i.computeVertexNormals(),Al(i,(o,a)=>Qs(Tl.dark,Tl.lit,.3+.5*(a.x*.5+.5)+.2*(o.y/t))),Rl(i)}function au(r,t=3,e=!0){let n=we(r),i=t>2.6?5:4,s=t*.1,o=[Cp(t*.05,s+t*.22,.5,e===!0?10:6)],a=t*(i===5?.3:.36),l=(t-s-a)/(i-1),c=new Q(n()-.5,n()-.5).multiplyScalar(t*.03);for(let h=0;h<i;h++){let u=h/(i-1),d=t*(.36-.24*u)*(.94+.12*n()),f=hv(d,a*(1-.15*u),h===i-1?6:7+h%2+(h===0?1:0),n()*Math.PI*2,.13,.4+.6*u,e);f.translate(c.x*u,s+h*l,c.y*u),o.push(f)}return Mn(o,!1)}var Js={deep:ie(1324063),mid:ie(2843175),lit:ie(5741104),sun:ie(9421374)};function uv(r,t,e,n){let i=[Cp(.15*r,t,.75,n>2?10:7)];for(let s of e){let o=new L(0,t*.82,0),a=s.clone(),l=o.distanceTo(a),c=new Ze(.045*r,.085*r,l,n>2?7:5,1,!0);c.translate(0,l/2,0),c.applyQuaternion(new Ue().setFromUnitVectors(new L(0,1,0),a.clone().sub(o).normalize())),c.translate(o.x,o.y,o.z),c.deleteAttribute("uv"),Al(c,(h,u)=>Qs(Tl.dark,Tl.lit,.2+.6*Math.max(0,u.dot(su)))),i.push(Rl(c))}return Mn(i,!1)}var Ap=(r,t)=>{let e=Math.acos(ve.clamp(r.dot(t.d),-1,1));return e>=t.w?0:t.h*Math.sqrt(1-e/t.w*(e/t.w))};function Ip(r,t,e,n,i){let s=we(r),o=(p,M)=>new L(Math.cos(M)*Math.sqrt(1-p*p),p,Math.sin(M)*Math.sqrt(1-p*p)),a=[{d:o(.9,s()*6.28),w:.8,h:.3}],l=s()*Math.PI*2;for(let p=0;p<i.lobes;p++){let M=p===0?1.25:p===2?.75:.9+.25*s();a.push({d:o(.05+.4*s(),l+p/i.lobes*Math.PI*2+(s()-.5)*.6),w:.66*M,h:.4*M})}let c=[];for(let p=0;p<14;p++)c.push({d:o(-.1+1.05*s(),s()*6.28),w:.34+.12*s(),h:.045+.025*s()});let h=new yn(1,n);h.deleteAttribute("normal"),h.deleteAttribute("uv"),h=Br(h);let u=h.getAttribute("position"),d=new L,f=new L,m=[],x=[],g=30;for(let p=0;p<u.count;p++){d.fromBufferAttribute(u,p).normalize();let M=a.map(v=>Ap(d,v)).sort((v,E)=>E-v),w=M[0]+Math.log(1+Math.exp(-g*(M[0]-M[1])))/g,y=0;for(let v of c)y=Math.max(y,Ap(d,v));let A=(El(d.x*1.7+r*.31,d.y*1.7,d.z*1.7,2)-.5)*.08,C=.66+w+y+A;f.copy(d).multiplyScalar(C),f.y*=i.squash??.86,f.y<-.3&&(f.y=-.3+(f.y+.3)*.35),f.x*=i.spread??1,f.z*=i.spread??1,u.setXYZ(p,f.x*t,f.y*t+e,f.z*t),m.push(ve.clamp(1-(M[0]-M[1])/.12,0,1)*(M[1]>0?1:0)),x.push(f.y)}return h.computeVertexNormals(),Al(h,(p,M,w)=>{let y=M.y,A=M.dot(su),C=x[w],v=Qs(Js.deep,Js.mid,ve.smoothstep(.55*y+.8*C,-.5,.25));return v=Qs(v,Js.lit,ve.smoothstep(.3*y+.7*A,.2,.78)),v.lerp(Js.sun,ve.smoothstep(.3*y+.7*A,.8,.98)*.75),v.lerp(Js.deep,m[w]*.7),v}),Rl(h)}function Cl(r,t=3,e=!0){let n=we(r),i=t/3,s=e==="tiny"?4:e?11:7,o=1.75*i,a=.95*i,l=[],c=2+Math.floor(n()*2),h=n()*6.28;for(let u=0;u<c;u++){let d=h+u/c*6.28;l.push(new L(Math.cos(d)*.5*i,1.38*i,Math.sin(d)*.5*i))}return Mn([uv(i,.98*i,l,e?3:2),Ip(r*7+1,a,o,s,{lobes:5+Math.floor(n()*3)})],!1)}function Il(r,t=.8){let e=we(r),n=Ip(r*3+1,.62*t,.42*t,4,{lobes:3+Math.floor(e()*2),squash:.78});return n.translate(0,-.06*t,0),n}var hS={base:ie(5082924),tip:ie(10408527)};var uS=ie(16512740),dS=ie(15908655);var Or=ve.degToRad(45),lu=ve.degToRad(47),Dl=new L(Math.cos(Or),0,-Math.sin(Or)),Pp=new L(-Math.sin(Or),0,-Math.cos(Or)),Ll=new L(-Math.sin(Or)*Math.cos(lu),-Math.sin(lu),-Math.cos(Or)*Math.cos(lu)),dv=new L().crossVectors(Dl,Ll);function kp(r=4,t=7){let e=new yn(1,r);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=Br(e);let n=we(t),i=[];for(let l=0;l<46;l++)i.push(new L(n()*2-1,n()*2-1,n()*2-1).normalize());let s=e.getAttribute("position"),o=new Float32Array(s.count*2),a=new L;for(let l=0;l<s.count;l++){a.fromBufferAttribute(s,l).normalize(),o[l*2]=.5+.5*a.dot(Dl),o[l*2+1]=.5+.5*a.dot(dv);let c=0;for(let h of i){let u=a.dot(h);u>.93&&(c=Math.max(c,Math.sqrt((u-.93)/.07)))}a.multiplyScalar(.95+.07*c),s.setXYZ(l,a.x,a.y,a.z)}return e.setAttribute("uv",new he(o,2)),e.computeVertexNormals(),e}var Lp={dark:new St(3810840),lit:new St(7227952)},cu=1.5;function zp(){let r=new Ze(.1,.14,cu,8,4,!0);r.translate(0,cu/2,0);let t=r.getAttribute("position");for(let o=0;o<t.count;o++){let a=1+.9*Math.pow(1-Math.min(1,t.getY(o)/(cu*.3)),2);t.setX(o,t.getX(o)*a),t.setZ(o,t.getZ(o)*a)}r.deleteAttribute("uv"),r.computeVertexNormals();let e=r.getAttribute("normal"),n=new Float32Array(t.count*3),i=new St,s=new L(.75,0,.55).normalize();for(let o=0;o<t.count;o++)i.copy(Lp.dark).lerp(Lp.lit,.25+.6*Math.max(0,e.getX(o)*s.x+e.getZ(o)*s.z)),n[o*3]=i.r,n[o*3+1]=i.g,n[o*3+2]=i.b;return r.setAttribute("color",new he(n,3)),r}function gS(r){return new Ns().loadAsync(r).then(t=>(t.colorSpace=Oe,t.anisotropy=4,t))}var Pl=[{a:0,b:.5,y:1.7,r:.8,d:.9},{a:-.43,b:-.06,y:1.41,r:.72,d:.45},{a:.47,b:.01,y:1.41,r:.71,d:0}],Dp=[[.4,Pl],[.2,[{a:0,b:.15,y:1.55,r:.92,d:0}]],[.2,[{a:-.36,b:.05,y:1.46,r:.74,d:.55},{a:.38,b:.32,y:1.62,r:.78,d:0}]],[.2,[{...Pl[0],d:1.2},{...Pl[1],d:.75},{...Pl[2],d:.3},{a:.08,b:.32,y:2.3,r:.52,d:0}]]],Up=new St(1,1,1),fv=new St(1.04,1,.86),pv=new St(.9,1,.97);function hu(r,t,e,n,i,s,o){let a=i(),l=Dp[0][1];for(let[u,d]of Dp){if(a<u){l=d;break}a-=u}let c=i(),h=(n??Up).clone().multiply(c<.6?Up:c<.8?fv:pv);for(let u of l){let d=u.a+(i()-.5)*.12,f=u.b+(i()-.5)*.12,m=u.r*(.92+.16*i()),x=h.clone().multiplyScalar(1-.25*u.d);s.push({x:r+e*(d*Dl.x+f*Pp.x+u.d*Ll.x),y:e*(u.y+(i()-.5)*.08+u.d*Ll.y),z:t+e*(d*Dl.z+f*Pp.z+u.d*Ll.z),s:e*m,ry:0,c:x})}o.push({x:r,z:t,s:e,ry:i()*6.28,c:n})}var mv=new St,Vr=(r,t,e)=>mv.copy(r).lerp(t,ve.clamp(e,0,1)).clone();function zl(r,t){let e=r.getAttribute("position"),n=r.getAttribute("normal"),i=new Float32Array(e.count*3),s=new L,o=new L;for(let a=0;a<e.count;a++){s.fromBufferAttribute(e,a),o.fromBufferAttribute(n,a);let l=t(s,o);i[a*3]=l.r,i[a*3+1]=l.g,i[a*3+2]=l.b}r.setAttribute("color",new he(i,3));for(let a of Object.keys(r.attributes))a!=="position"&&a!=="normal"&&a!=="color"&&r.deleteAttribute(a);return r}var Ul={dark:ie(9405305),mid:ie(11773847),lit:ie(14077116),moss:ie(8367685)};function js(r,t=0){let e=we(r),n=new yn(1,2);n.deleteAttribute("normal"),n.deleteAttribute("uv"),n=Br(n);let i=n.getAttribute("position"),s=new L,o=.9+e()*.5,a=.8+e()*.4,l=.55+e()*.25;for(let m=0;m<i.count;m++){s.fromBufferAttribute(i,m);let x=1+El(s.x*1.1+r,s.y*1.1,s.z*1.1,2)*.5;s.multiplyScalar(x),s.set(s.x*o,Math.max(s.y*l,-.18),s.z*a),i.setXYZ(m,s.x,s.y+.18,s.z)}let c=n.toNonIndexed();c.computeVertexNormals();let h=n.clone();h.computeVertexNormals();let u=h.toNonIndexed(),d=c.getAttribute("normal"),f=u.getAttribute("normal");for(let m=0;m<d.count;m++)d.setXYZ(m,d.getX(m)*.35+f.getX(m)*.65,d.getY(m)*.35+f.getY(m)*.65,d.getZ(m)*.35+f.getZ(m)*.65);return c.normalizeNormals(),zl(c,(m,x)=>{let g=Vr(Ul.dark,Ul.mid,.3+m.y*.9);return g=Vr(g,Ul.lit,(x.y-.35)*1.4),t>0&&x.y>.75&&g.lerp(Ul.moss,t*(x.y-.75)*4),g})}var Hr={bark:ie(8011298),barkLit:ie(11230515),ring:ie(14262369),core:ie(12944455),groove:ie(5975064)};function uu(r){let t=new Us(.001,1,r,5);return t.rotateX(-Math.PI/2),t.computeVertexNormals(),zl(t,e=>{let n=Math.hypot(e.x,e.z),i=.5+.5*Math.cos(n*22);return n>.86?Hr.bark:Vr(Hr.core,Hr.ring,.4+.6*i*(.5+n*.5))})}function Fp(r,t,e,n){let i=new Ze(r,t,e,n,3,!0);return i.computeVertexNormals(),zl(i,(s,o)=>{let a=Math.atan2(s.z,s.x),l=Math.pow(.5+.5*Math.cos(a*9+s.y*.8),6);return Vr(Hr.bark,Hr.barkLit,.25+.6*(o.y*.4+o.x*.3+.5)).lerp(Hr.groove,l*.6)})}function Np(r=1.7,t=.26){let e=Fp(t,t,r,16),n=uu(16);n.scale(t*.98,1,t*.98),n.translate(0,r/2,0);let i=uu(16);i.scale(t*.98,1,t*.98),i.rotateX(Math.PI),i.translate(0,-r/2,0);let s=Mn([e,n,i],!1);return s.rotateZ(Math.PI/2),s.translate(0,t*.85,0),s}function Bp(r=.32,t=.35){let e=Fp(r,r*1.3,t,16);e.translate(0,t/2,0);let n=uu(16);return n.scale(r*.98,1,r*.98),n.translate(0,t,0),Mn([e,n],!1)}var vS={top:ie(9724991),lit:ie(11565643),side:ie(5912613),deep:ie(4139550),crack:ie(15327439)};function gv(r,t){let e=[new Q(0,0),new Q(t*.85,0),new Q(t,r*.12),new Q(t,r*.72),new Q(0,r)];return new Ds(e,6).toNonIndexed()}function MS(r,t=1){let e=we(r),n=[],i=5+Math.floor(e()*3);for(let c=0;c<i;c++){let h=c===0,u=t*(h?1.5:.5+e()*.7),d=t*(h?.32:.12+e()*.12),f=gv(u,d);f.rotateY(e()*Math.PI),h||(f.rotateZ((e()-.5)*1.1),f.rotateX((e()-.5)*1.1));let m=e()*Math.PI*2,x=h?0:t*(.25+e()*.3);f.translate(Math.cos(m)*x,-.05,Math.sin(m)*x),n.push(f)}let s=Mn(n,!1);s.computeVertexNormals();let o=ie(3112928),a=ie(6075647),l=ie(12183807);return zl(s,(c,h)=>Vr(Vr(o,a,.4+c.y/(t*1.5)),l,(h.y+h.x*.5-.2)*1.2))}var kl=null;function Op(){if(kl)return kl;let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.45,"rgba(0,0,0,0.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),kl=new Ms(r),kl}var Te=r=>new St(r),xv=new St,to=(r,t,e)=>xv.copy(r).lerp(t,ve.clamp(e,0,1)).clone(),bv={value:0},Hp=new Map;function eo(r,t=.35,e){let n=`${r}/${t}${e?"/"+e.uuid:""}`,i=Hp.get(n);return i||(i=new Xn(e?{map:e,roughness:.85,metalness:0,emissive:16777215,emissiveMap:e,emissiveIntensity:.22}:{vertexColors:!0,roughness:.85,metalness:0}),i.customProgramCacheKey=()=>`wind${r}/${t}${e?"/map":""}`,i.onBeforeCompile=s=>{s.uniforms.uWindT=bv,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uWindT;`).replace("#include <project_vertex>",`
        vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
          vec2 root = instanceMatrix[3].xz;
        #else
          vec2 root = vec2(0.0);
        #endif
        float ph = uWindT * 1.7 + root.x * 0.31 + root.y * 0.23;
        float gust = 0.6 + 0.4 * sin(uWindT * 0.37 + root.x * 0.013 - root.y * 0.011);
        float h = max(mvPosition.y, 0.0);
        float sway = (sin(ph) * 0.7 + sin(ph * 2.3 + 1.7) * 0.3) * gust * ${r.toFixed(4)} * h * h;
        mvPosition.xz += vec2(0.8, 0.6) * sway;
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`),s.fragmentShader=s.fragmentShader.replace("#include <lights_physical_pars_fragment>",ou(t)),e&&(s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`float rimK = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight *= 1.0 - 0.2 * smoothstep(0.55, 0.95, rimK);
#include <opaque_fragment>`))},Hp.set(n,i),i)}function fu(r,t,e,n=0){let i=new ue;if(i.setAttribute("position",new Vt(r,3)),i.setAttribute("color",new Vt(t,3)),i.setIndex(e),i.computeVertexNormals(),n){let s=i.getAttribute("normal");for(let o=0;o<s.count;o++)s.setXYZ(o,s.getX(o)*n,1,s.getZ(o)*n);i.normalizeNormals()}return i.toNonIndexed()}function Nl(r,t,e,n,i,s,o,a,l,c,h,u=3){let d=r.length/3;for(let f=0;f<=u;f++){let m=f/u,x=a*(1-m*.9),g=n+Math.cos(s)*l*m*m,p=i+Math.sin(s)*l*m*m,M=o*m,w=-Math.sin(s)*x,y=Math.cos(s)*x;r.push(g-w,M,p-y,g+w,M,p+y);let A=to(c,h,m);t.push(A.r,A.g,A.b,A.r,A.g,A.b)}for(let f=0;f<u;f++){let m=d+f*2;e.push(m,m+1,m+2,m+1,m+3,m+2)}}var du={base:Te(3107358),tip:Te(11919194),dry:Te(14211184)};function pu(r,t=8,e=.5){let n=we(r),i=[],s=[],o=[];for(let a=0;a<t;a++){let l=a/t*Math.PI*2+n()*.9,c=.03+n()*.06,h=to(du.tip,du.dry,n()<.3?.6:0);Nl(i,s,o,Math.cos(l)*c,Math.sin(l)*c,l,e*(.6+n()*.5),.05+n()*.02,.12+n()*.14,du.base,h)}return fu(i,s,o,.3)}function mu(r,t=7,e=.42){let n=we(r),i=[],s=[],o=[],a=Te(16777215),l=Te(16773808),c=Te(4028966),h=Te(8372037);for(let m=0;m<t;m++){let x=n()*Math.PI*2,g=Math.sqrt(n())*e,p=Math.cos(x)*g,M=Math.sin(x)*g,w=.1+n()*.12,y=.085+n()*.035,A=i.length/3;i.push(p,w+.01,M),s.push(l.r,l.g,l.b);for(let C=0;C<6;C++){let v=C/6*Math.PI*2+x;i.push(p+Math.cos(v)*y,w,M+Math.sin(v)*y),s.push(a.r,a.g,a.b)}for(let C=0;C<6;C++)o.push(A,A+1+(C+1)%6,A+1+C);m%2===0&&Nl(i,s,o,p,M,x+1.5,.12+n()*.06,.04,.1,c,h,2)}let u=new ue;u.setAttribute("position",new Vt(i,3)),u.setAttribute("color",new Vt(s,3)),u.setIndex(o);let d=u.toNonIndexed(),f=new Float32Array(d.getAttribute("position").count*3);for(let m=0;m<f.length;m+=3)f[m+1]=1;return d.setAttribute("normal",new he(f,3)),d}var Vp={dark:Te(9076854),mid:Te(11774104),lit:Te(14537924)};function gu(r,t=5,e=.55){let n=we(r),i=[];for(let s=0;s<t;s++){let o=new yn(1,0);o.deleteAttribute("uv");let a=s===0?.2+n()*.08:.07+n()*.1,l=n()*Math.PI*2,c=s===0?0:.15+n()*e;o.scale(a*(1+n()*.4),a*(.45+n()*.2),a*(.9+n()*.3)),o.rotateY(n()*6.28),o.translate(Math.cos(l)*c,a*.25,Math.sin(l)*c),o.index&&(o=o.toNonIndexed()),o.computeVertexNormals();let h=o.getAttribute("position"),u=o.getAttribute("normal"),d=[],f=.9+n()*.2;for(let m=0;m<h.count;m++){let x=to(Vp.dark,Vp.lit,.25+u.getY(m)*.75).multiplyScalar(f);d.push(x.r,x.g,x.b)}o.setAttribute("color",new Vt(d,3)),i.push(o)}return Mn(i,!1)}var Fl={base:Te(4158504),tip:Te(11128922),head:Te(7226406)};function xu(r,t=9){let e=we(r),n=[],i=[],s=[];for(let l=0;l<t;l++){let c=e()*Math.PI*2,h=e()*.5,u=Math.cos(c)*h,d=Math.sin(c)*h;Nl(n,i,s,u,d,c,.6+e()*.6,.05,.1+e()*.15,Fl.base,Fl.tip,3)}let o=fu(n,i,s,.4),a=[o];for(let l=0;l<3;l++){let c=e()*Math.PI*2,h=e()*.25,u=.9+e()*.35,d=new Ze(.012,.015,u,3,1,!0);d.translate(Math.cos(c)*h,u/2,Math.sin(c)*h);let f=new Ze(.045,.045,.2,5,1);f.translate(Math.cos(c)*h,u+.05,Math.sin(c)*h);for(let[m,x]of[[d,Fl.base],[f,Fl.head]]){m.deleteAttribute("uv");let g=m.index?m.toNonIndexed():m;g.computeVertexNormals();let p=g.getAttribute("position").count,M=[];for(let w=0;w<p;w++)M.push(x.r,x.g,x.b);g.setAttribute("color",new Vt(M,3)),a.push(g)}}return Mn(a,!1)}function bu(r,t=4){let e=we(r),n=[],i=[],s=[],o=Te(4164148),a=Te(7649354),l=Te(16765922),c=Te(16769658);for(let f=0;f<t;f++){let m=e()*Math.PI*2,x=f===0?0:.45+e()*.45,g=Math.cos(m)*x,p=Math.sin(m)*x,M=.3+e()*.18,w=e()*6.28,y=n.length/3,A=11,C=to(o,a,.4+e()*.6);n.push(g,.075,p),i.push(C.r,C.g,C.b);for(let v=0;v<=A;v++){let E=w+.15+v/A*(Math.PI*2-.3);n.push(g+Math.cos(E)*M,.07,p+Math.sin(E)*M);let b=to(C,o,.15);i.push(b.r,b.g,b.b)}for(let v=0;v<A;v++)s.push(y,y+2+v,y+1+v);if(f===1){let v=n.length/3;n.push(g,.16,p),i.push(c.r,c.g,c.b);for(let E=0;E<6;E++){let b=E/6*Math.PI*2;n.push(g+Math.cos(b)*.11,.1,p+Math.sin(b)*.11),i.push(l.r,l.g,l.b)}for(let E=0;E<6;E++)s.push(v,v+1+(E+1)%6,v+1+E)}}let h=new ue;h.setAttribute("position",new Vt(n,3)),h.setAttribute("color",new Vt(i,3)),h.setIndex(s);let u=h.toNonIndexed(),d=new Float32Array(u.getAttribute("position").count*3);for(let f=0;f<d.length;f+=3)d[f+1]=1;return u.setAttribute("normal",new he(d,3)),u}var Gp={base:Te(3105828),tip:Te(9423948)};function Wp(r,t=9){let e=we(r),n=[],i=[],s=[];for(let o=0;o<t;o++){let a=o/t*Math.PI*2+e()*.5;Nl(n,i,s,0,0,a,.26+e()*.1,.2+e()*.05,.38+e()*.12,Gp.base,Gp.tip,4)}return fu(n,i,s,.5)}var no=[16777215,16777215,16767050,16767050,12096767,16749757,16738898,9225471].map(r=>new St(r));var Re=(r,t)=>Math.hypot(r.x-t.x,r.z-t.z);function Bl(r,t,e){let n=Math.imul(r,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function dn(r,t,e){let n=Math.floor(r),i=Math.floor(t),s=r-n,o=t-i,a=s*s*(3-2*s),l=o*o*(3-2*o),c=Bl(n,i,e),h=Bl(n+1,i,e),u=Bl(n,i+1,e),d=Bl(n+1,i+1,e);return c+(h-c)*a+(u-c)*l+(c-h-u+d)*a*l}var _v=(r,t,e)=>(dn(r,t,e)-.5)*.57+(dn(r*2.03,t*2.03,e+1)-.5)*.29+(dn(r*4.1,t*4.1,e+2)-.5)*.14;function Xp(r,t,e,n){let i=n.x-e.x,s=n.z-e.z,o=i*i+s*s||1,a=Math.max(0,Math.min(1,((r-e.x)*i+(t-e.z)*s)/o));return Math.hypot(r-e.x-i*a,t-e.z-s*a)}var $p=.7,Ge=class Ge{constructor(t,e=8e3,n=2){Tt(this,"size");Tt(this,"half");Tt(this,"seed");Tt(this,"villages");Tt(this,"home");Tt(this,"bot");Tt(this,"deposits",[]);Tt(this,"camps",[]);Tt(this,"tutoDep",[]);Tt(this,"tutoCamp",[]);Tt(this,"rivers",[]);Tt(this,"lakes",[]);Tt(this,"crossings",[]);Tt(this,"G");Tt(this,"grid");Tt(this,"water",new Map);Tt(this,"fr");Tt(this,"routeCache",new Map);Tt(this,"gS",null);Tt(this,"from",null);Tt(this,"shut",null);this.seed=t,this.size=e,this.half=e/2;let i=we(t),s=this.half,o=i()*Math.PI*2,a=o+Math.PI+(i()-.5)*.6,l=n<=2?[o,a]:Array.from({length:n},(v,E)=>E===0?o:o+E*Math.PI*2/n+(i()-.5)*(1.2/n));this.villages=l.map(v=>({x:Math.cos(v)*2800,z:Math.sin(v)*2800})),this.home=this.villages[0],this.bot=this.villages[1];let c={x:this.bot.x-this.home.x,z:this.bot.z-this.home.z},h=Math.hypot(c.x,c.z),u={x:-c.z/h,z:c.x/h},f=[{at:{x:(this.home.x+this.bot.x)/2+(i()-.5)*800,z:(this.home.z+this.bot.z)/2+(i()-.5)*800},dir:u}];for(let v=0;v<1+Math.floor(i()*2);v++){let E=i()*Math.PI,b={x:(i()-.5)*e*.7,z:(i()-.5)*e*.7};f.push({at:b,dir:{x:Math.cos(E),z:Math.sin(E)}})}let m=(v,E)=>this.rivers.some(b=>b.pts.some((_,R)=>R%2===0&&Math.abs(_.x-v.x)<E&&Math.abs(_.z-v.z)<E&&Re(_,v)<E));for(let v of f){if(this.rivers.length&&m(v.at,300))continue;let E=11+i()*7,b=[],_=R=>{let P=[],U={...v.at},N={x:v.dir.x*R,z:v.dir.z*R},V=i()*100;for(let O=0;O<2e3;O++){let Y=(dn(O*.035+V,.5,t)-.5)*1.6,z=Math.atan2(v.dir.z*R,v.dir.x*R),Z=Math.atan2(N.z,N.x),et=z+Y,ht=Math.atan2(Math.sin(et-Z),Math.cos(et-Z))*.12;N={x:Math.cos(Z+ht),z:Math.sin(Z+ht)},U={x:U.x+N.x*22,z:U.z+N.z*22};for(let ft of this.villages){let Dt=Re(U,ft);Dt<260&&(U={x:ft.x+(U.x-ft.x)*260/Dt,z:ft.z+(U.z-ft.z)*260/Dt})}if(P.push(U),Math.abs(U.x)>s+40||Math.abs(U.z)>s+40||O%3===0&&this.rivers.length&&m(U,24))break}return P};b.push(..._(-1).reverse(),{...v.at},..._(1)),this.rivers.push({pts:b,w:E})}for(let v of this.rivers){let E=[],b=0;for(let _=0;_<v.pts.length-1;_++){let R=v.pts[_],P=v.pts[_+1],U=Re(R,P)||1,N=-(P.z-R.z)/U,V=(P.x-R.x)/U;for(let O=0;O<4;O++){let Y=O/4,z=b+U*Y,Z=(dn(z*.017,3.3,t+5)-.5)*9+(dn(z*.07,7.7,t+6)-.5)*2.6;E.push({x:R.x+(P.x-R.x)*Y+N*Z,z:R.z+(P.z-R.z)*Y+V*Z})}b+=U}E.push(v.pts[v.pts.length-1]),v.pts=E}for(let v=0,E=3+Math.floor(i()*4);v<200&&this.lakes.length<E;v++){let b={x:(i()*2-1)*(s-300),z:(i()*2-1)*(s-300)};if(this.villages.some(U=>Re(b,U)<400)||this.lakes.some(U=>Re(U,b)<600))continue;let _=40+i()*80,R=[],P=i()*6.28;for(let U=0;U<120;U++){let N=U/120*Math.PI*2,V=1+.25*Math.sin(N*3+P)+.12*Math.sin(N*5+P*2)+.04*Math.sin(N*13+P*3)+.02*Math.sin(N*29+P*5);R.push({x:b.x+Math.cos(N)*_*V,z:b.z+Math.sin(N)*_*V})}this.lakes.push({...b,pts:R})}let x=128,g=(v,E)=>v*100003+E,p=(v,E,b,_,R)=>{for(let P=Math.floor(v/x);P<=Math.floor(E/x);P++)for(let U=Math.floor(b/x);U<=Math.floor(_/x);U++){let N=g(P,U),V=this.water.get(N);V||this.water.set(N,V={s:[],l:[]}),R(V)}};this.rivers.forEach((v,E)=>{for(let b=1;b<v.pts.length;b++){let _=v.pts[b-1],R=v.pts[b],P=v.w+30;p(Math.min(_.x,R.x)-P,Math.max(_.x,R.x)+P,Math.min(_.z,R.z)-P,Math.max(_.z,R.z)+P,U=>U.s.push([E,b]))}}),this.lakes.forEach((v,E)=>p(v.x-200,v.x+200,v.z-200,v.z+200,b=>b.l.push(E)));for(let v of this.rivers){let E=300+i()*400,b=i()<.5?"bridge":"ford";for(let _=1;_<v.pts.length;_++){let R=v.pts[_-1],P=v.pts[_],U=Re(R,P);E-=U,!(E>0)&&(E=650+i()*400,!(Math.abs(P.x)>s-60||Math.abs(P.z)>s-60||this.lakes.some(N=>Re(N,P)<200))&&(this.crossings.push({x:P.x,z:P.z,tx:(P.x-R.x)/U,tz:(P.z-R.z)/U,w:v.w,kind:b}),b=b==="bridge"?"ford":"bridge"))}}let M=this.G=Math.round(e/Ge.CELL),w=this.grid=new Uint8Array(M*M),y=this.fr=new Float32Array(M*M);for(let v=0;v<M;v++)for(let E=0;E<M;E++){let b=-s+(E+.5)*Ge.CELL,_=-s+(v+.5)*Ge.CELL,R=_v(b*.0016,_*.0016,t)+.3*(dn(b*.006,_*.006,t+5)-.5),P=1/0;for(let N of this.villages)P=Math.min(P,Re({x:b,z:_},N));let U=ve.smoothstep(R,.06,.16)*ve.smoothstep(P,90,160);y[v*M+E]=U,w[v*M+E]=U>.5?2:1}for(let v of this.rivers)for(let E=1;E<v.pts.length;E++){let b=v.pts[E-1],_=v.pts[E],R=Math.ceil(Re(b,_)/3),P=v.w/2+2;for(let U=0;U<=R;U++){let N=b.x+(_.x-b.x)*U/R,V=b.z+(_.z-b.z)*U/R;for(let O=-P;O<=P;O+=Ge.CELL/2)for(let Y=-P;Y<=P;Y+=Ge.CELL/2)if(Y*Y+O*O<=P*P){let[z,Z]=this.cell(N+Y,V+O);w[Z*M+z]=0}}}for(let v of this.lakes)for(let E=v.z-180;E<=v.z+180;E+=Ge.CELL)for(let b=v.x-180;b<=v.x+180;b+=Ge.CELL)if(this.waterDist(b,E)<2){let[_,R]=this.cell(b,E);w[R*M+_]=0}for(let v of this.crossings)for(let E=-v.w*.5-14;E<=v.w*.5+14;E+=2)for(let b=-7;b<=7;b+=2){let _=v.x-v.tz*E+v.tx*b,R=v.z+v.tx*E+v.tz*b,[P,U]=this.cell(_,R);w[U*M+P]===0&&(w[U*M+P]=1)}let A=v=>Math.abs(v.x)<s-150&&Math.abs(v.z)<s-150&&this.forest(v.x,v.z)<.3&&this.waterDist(v.x,v.z)>40;for(let v of this.villages){let E=0;for(let b=0;b<400&&E<3;b++){let _=i()*Math.PI*2,R=900+i()*1100,P={x:v.x+Math.cos(_)*R,z:v.z+Math.sin(_)*R};!A(P)||this.deposits.some(U=>Re(U,P)<350)||(this.deposits.push(P),E++)}}for(let v=0;v<8e3&&this.deposits.length<55;v++){let E={x:(i()*2-1)*(s-150),z:(i()*2-1)*(s-150)};!A(E)||this.villages.some(b=>Re(E,b)<700)||this.deposits.some(b=>Re(b,E)<420)||this.deposits.push(E)}let C=v=>A(v)&&!this.deposits.some(E=>Re(E,v)<250)&&!this.camps.some(E=>Re(E,v)<500);for(let v of this.villages)for(let E=0;E<400;E++){let b=i()*Math.PI*2,_=1100+i()*800,R={x:v.x+Math.cos(b)*_,z:v.z+Math.sin(b)*_};if(!(!C(R)||this.villages.some(P=>Re(R,P)<900))){this.camps.push(R);break}}for(let v of this.villages){let E=(b,_,R)=>{for(let P=0;P<200;P++){let U=i()*Math.PI*2,N=b+i()*(_-b),V={x:v.x+Math.cos(U)*N,z:v.z+Math.sin(U)*N};if(!(V.z>v.z+6&&Math.abs(V.x-v.x)<20)&&this.forest(V.x,V.z)<.25&&this.waterDist(V.x,V.z)>25)return V}return R};this.tutoDep.push(E(42,60,{x:v.x-50,z:v.z-10})),this.tutoCamp.push(E(105,140,{x:v.x+110,z:v.z-40}))}for(let v=0;v<8e3&&this.camps.length<this.villages.length+24;v++){let E={x:(i()*2-1)*(s-150),z:(i()*2-1)*(s-150)};!C(E)||this.villages.some(b=>Re(E,b)<900)||this.camps.push(E)}}cell(t,e){let n=this.G;return[Math.max(0,Math.min(n-1,Math.floor((t+this.half)/Ge.CELL))),Math.max(0,Math.min(n-1,Math.floor((e+this.half)/Ge.CELL)))]}forest(t,e){let n=this.G,i=Math.max(0,Math.min(n-1.001,(t+this.half)/Ge.CELL-.5)),s=Math.max(0,Math.min(n-1.001,(e+this.half)/Ge.CELL-.5)),o=Math.floor(i),a=Math.floor(s),l=i-o,c=s-a,h=this.fr,u=h[a*n+o]+(h[a*n+o+1]-h[a*n+o])*l,d=h[(a+1)*n+o]+(h[(a+1)*n+o+1]-h[(a+1)*n+o])*l;return u+(d-u)*c}waterDist(t,e){let n=this.water.get(Math.floor(t/128)*100003+Math.floor(e/128));if(!n)return 999;let i=999;for(let[s,o]of n.s){let a=this.rivers[s];i=Math.min(i,Xp(t,e,a.pts[o-1],a.pts[o])-a.w/2)}for(let s of n.l){let o=this.lakes[s],a=!1,l=999;for(let c=0,h=o.pts.length-1;c<o.pts.length;h=c++){let u=o.pts[c],d=o.pts[h];u.z>e!=d.z>e&&t<(d.x-u.x)*(e-u.z)/(d.z-u.z)+u.x&&(a=!a),l=Math.min(l,Xp(t,e,u,d))}i=Math.min(i,a?-l:l)}return i}crossingAt(t,e,n=0){for(let i of this.crossings){let s=Math.abs((t-i.x)*i.tx+(e-i.z)*i.tz),o=Math.abs(-(t-i.x)*i.tz+(e-i.z)*i.tx);if(s<8+n&&o<i.w/2+16)return i}return null}path(t,e){let n=`${t.x},${t.z}>${e.x},${e.z}`;if(this.routeCache.has(n))return this.routeCache.get(n);let i=this.search(t,e);return this.routeCache.size>400&&this.routeCache.clear(),this.routeCache.set(n,i),i}nearestOpen(t,e){let n=this.G;if(this.grid[e*n+t])return[t,e];for(let i=1;i<40;i++)for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++){if(Math.abs(o)!==i&&Math.abs(s)!==i)continue;let a=t+o,l=e+s;if(a>=0&&l>=0&&a<n&&l<n&&this.grid[l*n+a])return[a,l]}return[t,e]}search(t,e){let n=this.G,i=this.grid,s=n*n,o=Ge.CELL,a=this.half;this.gS??(this.gS=new Float32Array(s)),this.from??(this.from=new Int32Array(s)),this.shut??(this.shut=new Uint8Array(s));let l=this.gS,c=this.from,h=this.shut;l.fill(1/0),c.fill(-1),h.fill(0);let[u,d]=this.nearestOpen(...this.cell(t.x,t.z)),[f,m]=this.nearestOpen(...this.cell(e.x,e.z)),x=d*n+u,g=m*n+f,p=z=>z===2?1/$p:1,M=new Int32Array(65536),w=new Float32Array(65536),y=0,A=(z,Z)=>{if(y>=M.length){let ht=new Int32Array(M.length*2),ft=new Float32Array(M.length*2);ht.set(M),ft.set(w),M=ht,w=ft}let et=y++;for(M[et]=z,w[et]=Z;et>0;){let ht=et-1>>1;if(w[ht]<=w[et])break;let ft=M[ht],Dt=w[ht];M[ht]=M[et],w[ht]=w[et],M[et]=ft,w[et]=Dt,et=ht}},C=()=>{let z=M[0];if(y--,y>0){M[0]=M[y],w[0]=w[y];let Z=0;for(;;){let et=Z*2+1,ht=et+1,ft=Z;if(et<y&&w[et]<w[ft]&&(ft=et),ht<y&&w[ht]<w[ft]&&(ft=ht),ft===Z)break;let Dt=M[ft],Nt=w[ft];M[ft]=M[Z],w[ft]=w[Z],M[Z]=Dt,w[Z]=Nt,Z=ft}}return z},v=z=>{let Z=Math.abs(z%n-f),et=Math.abs((z/n|0)-m);return 1.2*(Math.max(Z,et)+.414*Math.min(Z,et))};l[x]=0,A(x,v(x));let E=!1;for(;y;){let z=C();if(h[z])continue;if(z===g){E=!0;break}h[z]=1;let Z=z%n,et=z/n|0,ht=p(i[z]);for(let ft=-1;ft<=1;ft++)for(let Dt=-1;Dt<=1;Dt++){if(!Dt&&!ft)continue;let Nt=Z+Dt,$t=et+ft;if(Nt<0||$t<0||Nt>=n||$t>=n)continue;let q=$t*n+Nt,nt=i[q];if(!nt||h[q]||Dt&&ft&&(!i[et*n+Nt]||!i[$t*n+Z]))continue;let vt=l[z]+(Dt&&ft?1.414:1)*(ht+p(nt))/2;vt<l[q]&&(l[q]=vt,c[q]=z,A(q,vt+v(q)))}}if(!E)return null;let b=[];for(let z=g;z!==-1;z=c[z])b.push(z);b.reverse();let _=z=>({x:-a+(z%n+.5)*o,z:-a+((z/n|0)+.5)*o}),R=(z,Z)=>{let et=_(b[z]),ht=_(b[Z]),ft=Math.ceil(Re(et,ht)/(o*.5)),Dt=!1;for(let Nt=z;Nt<=Z;Nt++)if(i[b[Nt]]===2){Dt=!0;break}for(let Nt=1;Nt<ft;Nt++){let[$t,q]=this.cell(et.x+(ht.x-et.x)*Nt/ft,et.z+(ht.z-et.z)*Nt/ft),nt=i[q*n+$t];if(!nt||nt===2&&!Dt)return!1}return!0},P=[0];for(let z=0;z<b.length-1;){let Z=Math.min(b.length-1,z+400);for(;Z>z+1&&!R(z,Z);)Z=Z-Math.max(1,Math.floor((Z-z)/6));P.push(Z),z=Z}let U=P.map(z=>_(b[z]));U[0]={...t};let[N,V]=this.cell(e.x,e.z);i[V*n+N]&&(U[U.length-1]={...e});let O=[],Y=0;for(let z=1;z<U.length;z++){let Z=U[z-1],et=U[z],ht=Re(Z,et),ft=Math.max(1,Math.ceil(ht/o)),Dt=0;for(let Nt=0;Nt<ft;Nt++){let[$t,q]=this.cell(Z.x+(et.x-Z.x)*(Nt+.5)/ft,Z.z+(et.z-Z.z)*(Nt+.5)/ft);i[q*n+$t]===2&&Dt++}O.push(1-(1-$p)*Dt/ft),Y+=ht}return{pts:U,slow:O,len:Y}}texture(){let t=new Uint8Array(this.G*this.G*2);for(let e=0;e<this.G*this.G;e++)t[e*2]=Math.round(this.fr[e]*255),t[e*2+1]=this.grid[e]===0?255:0;return t}};Tt(Ge,"CELL",8);var qp=Ge,yv=new Ui(1,1).rotateX(-Math.PI/2),Zp=new Map;function vv(r){let t=Zp.get(r);return t||(t=new Pi({map:Op(),color:1585937,transparent:!0,opacity:r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Zp.set(r,t)),t}function Yp(r,t,e){if(!t.length)return;let n=new Tr(yv,vv(e),t.length),i=new qt;t.forEach((s,o)=>{i.makeScale(s.r*2,1,s.r*2),i.setPosition(s.x,.04,s.z),n.setMatrixAt(o,i)}),n.computeBoundingSphere(),n.renderOrder=1,r.add(n)}var Mv=new St(1,1,1);function pi(r,t,e,n,i){let s=new Map;n.forEach((u,d)=>{let f=u.g??d%t.length,m=s.get(f);m||s.set(f,m=[]),m.push(u)});let o=new qt,a=new Ue,l=new qe,c=new L,h=new L;for(let[u,d]of s){let f=new Tr(t[u],e,d.length),m=d.some(x=>x.c);d.forEach((x,g)=>{a.setFromEuler(l.set(0,x.ry,0)),o.compose(c.set(x.x,x.y??0,x.z),a,h.set(x.s*(x.w??1),x.s,x.s*(x.w??1))),f.setMatrixAt(g,o),m&&f.setColorAt(g,x.c??Mv)}),f.computeBoundingSphere(),f.castShadow=i,f.receiveShadow=!0,r.add(f)}}var qi=ve.smoothstep,io=class io{constructor(t){Tt(this,"map",t);Tt(this,"group",new Tn);Tt(this,"veg",Rp(.35));Tt(this,"trees",eo(.003));Tt(this,"grass",eo(.32));Tt(this,"reed",eo(.11));Tt(this,"chunks",new Map);Tt(this,"FO",{round:[33,34].map(t=>Cl(t,3.2,!1)),pine:[13,14].map(t=>au(t,3.4,!1)),bush:[Il(53,.9)]});Tt(this,"OB",{round:[Cl(31,3.2,!1)],pine:[au(11,3.4,!1)],bush:[Il(51,.9),Il(52,.9)],big:[Cl(37,3.2,!1)],rock:[js(71,.5),js(72,0),js(73,.6),js(74,.9)],stump:[Bp(.36,.38)],log:[Np(1.8,.27)],clump:[pu(1,10,.55),pu(2,16,.75)],flowers:[mu(3,9,.38),mu(4,16,.55)],pebbles:[gu(5,5,.55),gu(6,3,.35)],reeds:[xu(7,14),xu(8,20)],lily:[bu(9,4),bu(10,6)],fern:[Wp(11,9)]});Tt(this,"painted",null);Tt(this,"puff",[kp()]);Tt(this,"trunk",[zp()]);this.group.name="decor"}setRoundTree(t){this.painted=eo(.003,.35,t);for(let e of this.chunks.values())this.group.remove(e);this.chunks.clear()}update(t,e,n=3){let i=io.SIZE,s=Math.floor(t.x/i),o=Math.floor(t.z/i),a=Math.ceil(e/i)+1,l=[];for(let h=o-a;h<=o+a;h++)for(let u=s-a;u<=s+a;u++){let d=Math.hypot((u+.5)*i-t.x,(h+.5)*i-t.z);d<e+i&&l.push([u,h,d])}l.sort((h,u)=>h[2]-u[2]);let c=0;for(let[h,u]of l){let d=`${h},${u}`;if(this.chunks.has(d))continue;if(c>=n)break;let f=this.build(h,u);this.chunks.set(d,f),this.group.add(f),c++}for(let[h,u]of this.chunks){let[d,f]=h.split(",").map(Number);Math.hypot((d+.5)*i-t.x,(f+.5)*i-t.z)>e+i*2.5&&(this.group.remove(u),u.traverse(m=>{let x=m;x.isInstancedMesh&&x.dispose()}),this.chunks.delete(h))}return c}build(t,e){let n=new Tn,i=io.SIZE,s=this.map,o=we(t*73856093^e*19349663^s.seed*83492791),a=t*i,l=e*i,c={round:[],pine:[],bush:[]},h={fo:[],ob:[]},u={fo:[],ob:[]},d=Object.fromEntries(Object.keys(this.OB).map(v=>[v,[]])),f=[],m=[],x=(v,E)=>{let b=v+(E-v)*o();return new St(b,b,b)},g=(v,E,b,_)=>Math.abs(v-b.x)<_&&Math.abs(E-b.z)<_&&Math.hypot(v-b.x,E-b.z)<_,p=(v,E,b,_,R)=>s.waterDist(v,E)>b&&!s.crossingAt(v,E,4)&&!s.villages.some(P=>g(v,E,P,_))&&!s.deposits.some(P=>g(v,E,P,R))&&!s.camps.some(P=>g(v,E,P,_*.8))&&!s.tutoCamp.some(P=>g(v,E,P,_*.8))&&!s.tutoDep.some(P=>g(v,E,P,R)),M=3.3;for(let v=l;v<l+i;v+=M)for(let E=a;E<a+i;E+=M){let b=E+o()*M,_=v+o()*M;if(Math.abs(b)>s.half||Math.abs(_)>s.half)continue;let R=s.forest(b,_),P=dn(b*.025,_*.025,s.seed+11),U=R>.5?R>.95&&o()<.45?0:.92:.02+.55*qi(P,.72,.86)+.35*qi(R,.15,.5);if(o()>=U||!p(b,_,3,24,9))continue;let N=dn(b*.08,_*.08,7)>.5,V=R>.95,O=(1.15+.35*o())*(V?1.35:1),Y=x(.9,1.08),z=R>.3?"fo":"ob";N&&this.painted&&hu(b,_,O,Y,o,h[z],u[z]),R>.5?(N&&this.painted||(N?c.round:c.pine).push({x:b,z:_,s:O,ry:o()*6.28,w:N?1.3:1.12,c:Y}),V||f.push({x:b,z:_,r:2.1*O})):R>.3?(N&&this.painted||(N?c.round:c.pine).push({x:b,z:_,s:O,ry:o()*6.28,w:N?1.15:1.05,c:Y}),f.push({x:b,z:_,r:1.9*O})):(N&&this.painted||(N?d.round:d.pine).push({x:b,z:_,s:O,ry:o()*6.28,c:Y}),m.push({x:b,z:_,r:1.8*O}),o()<.35&&d.bush.push({x:b+1.3,z:_+.6,s:.9,ry:o()*6.28,c:x(.85,1.1)}))}if(o()<.14){let v=a+6+o()*(i-12),E=l+6+o()*(i-12),b=2+o()*.5;if(s.forest(v,E)<.15&&p(v,E,8,26,12)){this.painted?hu(v,E,b,x(.95,1.05),o,h.ob,u.ob):d.big.push({x:v,z:E,s:b,ry:o()*6.28,c:x(.95,1.05)}),m.push({x:v,z:E,r:1.9*b});for(let R=0;R<7;R++){let P=o()*6.28,U=2.2+o()*2.5;d.clump.push({x:v+Math.cos(P)*U,z:E+Math.sin(P)*U,s:.9+o()*.4,ry:o()*6.28,g:1,c:x(.9,1.1)})}let _=no[Math.floor(o()*no.length)];for(let R=0;R<3;R++){let P=o()*6.28,U=3+o()*2;d.flowers.push({x:v+Math.cos(P)*U,z:E+Math.sin(P)*U,s:1,ry:o()*6.28,c:_})}}}for(let v=l;v<l+i;v+=2.2)for(let E=a;E<a+i;E+=2.2){let b=E+o()*2.2,_=v+o()*2.2,R=s.forest(b,_),P=s.waterDist(b,_),U=R>.35&&R<.55||P>1.5&&P<4?.4:R<.3?.012:0;o()<U&&p(b,_,1.5,12,6)&&(R>.3?c.bush:d.bush).push({x:b,z:_,s:.8+o()*.5,ry:o()*6.28,c:x(.85,1.1)})}let w=1.7;for(let v=l;v<l+i;v+=w)for(let E=a;E<a+i;E+=w){let b=E+o()*w,_=v+o()*w;if(Math.abs(b)>s.half||Math.abs(_)>s.half)continue;let R=s.waterDist(b,_);if(R<1.2){if(s.crossingAt(b,_,2))continue;let O=dn(b*.06,_*.06,s.seed+23);R>-.7&&o()<.15+.6*qi(O,.4,.6)?d.reeds.push({x:b,z:_,s:.8+o()*.45,ry:o()*6.28,c:x(.88,1.08)}):R<-1.3&&R>-6&&o()<.05+.2*qi(O,.55,.7)&&d.lily.push({x:b,z:_,s:.9+o()*.4,ry:o()*6.28,c:x(.9,1.08)});continue}if(s.villages.some(O=>g(b,_,O,6.5))||s.deposits.some(O=>g(b,_,O,3.5)))continue;let P=s.forest(b,_);if(R<3.5){o()<.1&&d.pebbles.push({x:b,z:_,s:.8+o()*.5,ry:o()*6.28,c:x(.9,1.1)});continue}if(P>.55){o()<.14?d.fern.push({x:b,z:_,s:.9+o()*.5,ry:o()*6.28,c:x(.85,1.1)}):o()<.03&&d.pebbles.push({x:b,z:_,s:1,ry:o()*6.28,c:x(.75,.9)});continue}let U=dn(b*.07,_*.07,s.seed+31),N=dn(b*.045,_*.045,s.seed+41),V=o();if(V<.12+.5*qi(U,.55,.75)+.2*qi(P,.2,.5))d.clump.push({x:b,z:_,s:.9+o()*.6,ry:o()*6.28,g:U>.62?1:0,c:x(.88,1.1)});else if(V<.6&&o()<.03+.5*qi(N,.6,.72)){let O=Math.floor(b/40)*7+Math.floor(_/40)*13+s.seed,Y=no[((O%8+8)%8+(o()<.25?3:0))%no.length];d.flowers.push({x:b,z:_,s:.85+o()*.4,ry:o()*6.28,g:N>.68?1:0,c:Y})}else V>.97&&d.pebbles.push({x:b,z:_,s:.8+o()*.6,ry:o()*6.28,c:x(.9,1.1)})}let y=1+Math.floor(o()*3);for(let v=0;v<y;v++){let E=a+2+o()*(i-4),b=l+2+o()*(i-4),_=.35+o()*.5,R=s.forest(E,b);p(E,b,2.5,10,5)&&(d.rock.push({x:E,z:b,s:_,ry:o()*6.28,g:R>.5?3:Math.floor(o()*3),c:x(.88,1.08)}),o()<.5&&d.rock.push({x:E+.6+_,z:b+.3,s:_*.45,ry:o()*6.28,g:1,c:x(.88,1.08)}),m.push({x:E,z:b,r:1.3*_}))}if(o()<.1){let v=a+6+o()*(i-12),E=l+6+o()*(i-12),b=1.6+o()*.9;if(s.forest(v,E)<.5&&p(v,E,6,22,10)){d.rock.push({x:v,z:E,s:b,ry:o()*6.28,g:0,c:x(.95,1.05)}),m.push({x:v,z:E,r:1.5*b});for(let _=0;_<4;_++){let R=o()*6.28,P=b*(1.1+o()*.5),U=b*(.25+o()*.3);d.rock.push({x:v+Math.cos(R)*P,z:E+Math.sin(R)*P,s:U,ry:o()*6.28,g:1+Math.floor(o()*3),c:x(.88,1.05)}),m.push({x:v+Math.cos(R)*P,z:E+Math.sin(R)*P,r:1.2*U})}for(let _=0;_<5;_++){let R=o()*6.28,P=b*(1.3+o()*.8);d.clump.push({x:v+Math.cos(R)*P,z:E+Math.sin(R)*P,s:1,ry:o()*6.28,g:1,c:x(.9,1.1)})}}}for(let v of[.35,.2]){if(o()>=v)continue;let E=a+3+o()*(i-6),b=l+3+o()*(i-6),_=s.forest(E,b),R=o()*6.28;_<.2||!p(E,b,4,14,6)||(o()<.5?(d.log.push({x:E,z:b,ry:R,s:.9+o()*.3}),m.push({x:E,z:b,r:1.2}),o()<.6&&d.fern.push({x:E+.8,z:b+.9,s:.9,ry:R,c:x(.9,1.05)})):(d.stump.push({x:E,z:b,ry:R,s:1.1+o()*.4}),m.push({x:E,z:b,r:.7})))}pi(n,this.FO.round,this.trees,c.round,!1),this.painted&&(pi(n,this.puff,this.painted,h.fo,!1),pi(n,this.puff,this.painted,h.ob,!0),pi(n,this.trunk,this.trees,u.fo,!1),pi(n,this.trunk,this.trees,u.ob,!0)),pi(n,this.FO.pine,this.trees,c.pine,!1),pi(n,this.FO.bush,this.veg,c.bush,!1);let A={round:this.trees,pine:this.trees,big:this.trees,clump:this.grass,flowers:this.grass,fern:this.grass,reeds:this.reed},C={round:!0,pine:!0,big:!0,bush:!0,rock:!0,stump:!0,log:!0};for(let v of Object.keys(d))d[v].length&&pi(n,this.OB[v],A[v]??this.veg,d[v],!!C[v]);return Yp(n,f,.35),Yp(n,m,.3),n.name=`chunk ${t},${e}`,n}count(){return this.chunks.size}};Tt(io,"SIZE",32);var Kp=io;var We={UNIT:1.25,THICK:.8,GATE:2.75,POST:1,HP:[0,300,500],GATE_HP:600,COST:20,UP:20},Jp=[0,75,100],_u=()=>({posts:[],runs:[],next:1}),Vl=(r,t,e,n)=>Math.sqrt((e-r)*(e-r)+(n-t)*(n-t)),Ol=(r,t)=>r.posts.find(e=>e.id===t);function Gr(r,t){return[Ol(r,t.a),Ol(r,t.b)]}function Gl(r,t){if(t.gate)return 1;let[e,n]=Gr(r,t);return Math.max(1,Math.round(Vl(e.x,e.z,n.x,n.z)/We.UNIT))}function Qp(r){let t=[];for(let e of r.runs){let[n,i]=Gr(r,e),s=Gl(r,e),o=e.gate?We.GATE_HP:We.HP[e.level]??We.HP[1];for(let a=0;a<s;a++)t.push({run:e.id,piece:a,x0:n.x+(i.x-n.x)*(a/s),z0:n.z+(i.z-n.z)*(a/s),x1:n.x+(i.x-n.x)*((a+1)/s),z1:n.z+(i.z-n.z)*((a+1)/s),gate:e.gate,hp:o})}return t}function jp(r,t){let e=We.THICK/2+.15;for(let n of r.runs){let[i,s]=Gr(r,n);for(let o=0;o<=40;o++){let a=i.x+(s.x-i.x)*o/40,l=i.z+(s.z-i.z)*o/40;if(Math.abs(a-t.x)<t.size+e&&Math.abs(l-t.z)<t.size+e)return!0}}return!1}function tm(r,t){let e=r.runs.find(a=>a.id===t);if(!e)return[];let n=a=>{let[l,c]=Gr(r,a),h=Vl(l.x,l.z,c.x,c.z)||1;return[(c.x-l.x)/h,(c.z-l.z)/h]},[i,s]=n(e),o=[e];for(let a=!0;a;){a=!1;for(let l of r.runs){if(o.includes(l))continue;let[c,h]=n(l);o.some(d=>d.a===l.a||d.a===l.b||d.b===l.a||d.b===l.b)&&Math.abs(i*h-s*c)<.05&&(o.push(l),a=!0)}}return o.map(a=>a.id)}var em=r=>r.runs.reduce((t,e)=>t+(e.gate?0:Gl(r,e)),0);function wv(r,t,e,n,i,s,o,a){let l=(f,m,x,g,p,M)=>(x-f)*(M-m)-(g-m)*(p-f),c=l(r,t,e,n,i,s),h=l(r,t,e,n,o,a),u=l(i,s,o,a,r,t),d=l(i,s,o,a,e,n);return c*h<-1e-6&&u*d<-1e-6}function nm(r,t,e,n,i){if(Vl(t.x,t.z,e.x,e.z)<We.UNIT*.9||t.post!==void 0&&t.post===e.post)return"short";if(t.post!==void 0&&!Ol(r,t.post)||e.post!==void 0&&!Ol(r,e.post)||t.run!==void 0&&!r.runs.some(l=>l.id===t.run&&!l.gate)||e.run!==void 0&&!r.runs.some(l=>l.id===e.run&&!l.gate))return"none";for(let l of r.runs){let[c,h]=Gr(r,l);if(t.post===c.id&&e.post===h.id||t.post===h.id&&e.post===c.id)return"there";if(!(l.id===t.run||l.id===e.run)&&wv(t.x,t.z,e.x,e.z,c.x,c.z,h.x,h.z))return"cross"}let o=We.THICK/2+.15;for(let l=0;l<=40;l++){let c=t.x+(e.x-t.x)*l/40,h=t.z+(e.z-t.z)*l/40;for(let u of n)if(Math.abs(c-u.x)<u.size+o&&Math.abs(h-u.z)<u.size+o)return"building"}let a=l=>n.some(c=>{let h=Math.max(0,Math.abs(l.x-c.x)-c.size),u=Math.max(0,Math.abs(l.z-c.z)-c.size);return h*h+u*u<=i*i});return!a(t)||!a(e)?"far":null}function Hl(r,t,e){let n={id:r.next++,x:t,z:e};return r.posts.push(n),n}function Sv(r,t,e,n){let i=r.runs.find(o=>o.id===t),s=Hl(r,e,n);return r.runs=r.runs.filter(o=>o!==i),r.runs.push({id:r.next++,a:i.a,b:s.id,gate:!1,level:i.level},{id:r.next++,a:s.id,b:i.b,gate:!1,level:i.level}),s.id}function im(r,t,e){let n=a=>a.post!==void 0?a.post:a.run!==void 0?Sv(r,a.run,a.x,a.z):Hl(r,a.x,a.z).id,i=n(t),s=n(e),o=r.next++;return r.runs.push({id:o,a:i,b:s,gate:!1,level:1}),o}function rm(r,t,e,n){let i=r.runs.find(x=>x.id===t);if(!i||i.gate)return!1;let[s,o]=Gr(r,i),a=Vl(s.x,s.z,o.x,o.z);if(a<We.GATE-.01)return!1;let l=(o.x-s.x)/a,c=(o.z-s.z)/a,h=Math.max(0,Math.min(a,(e-s.x)*l+(n-s.z)*c)),u=We.GATE/2,d=.6;h=Math.max(u,Math.min(a-u,h)),h-u>.01&&h-u<d&&(h=u+(h-u<d/2?0:d)),a-h-u>.01&&a-h-u<d&&(h=a-u-(a-h-u<d/2?0:d)),h=Math.max(u,Math.min(a-u,h)),r.runs=r.runs.filter(x=>x!==i);let f=h-u<.01?s:Hl(r,s.x+l*(h-u),s.z+c*(h-u)),m=a-h-u<.01?o:Hl(r,s.x+l*(h+u),s.z+c*(h+u));return f!==s&&r.runs.push({id:r.next++,a:s.id,b:f.id,gate:!1,level:i.level}),r.runs.push({id:r.next++,a:f.id,b:m.id,gate:!0,level:1}),m!==o&&r.runs.push({id:r.next++,a:m.id,b:o.id,gate:!1,level:i.level}),!0}function sm(r,t){let e=r.runs.find(n=>n.id===t);return e?(r.runs=r.runs.filter(n=>n!==e),r.posts=r.posts.filter(n=>r.runs.some(i=>i.a===n.id||i.b===n.id)),!0):!1}var Ev=3600,Zi=60,Ce={maison:{size:2.8,hp:900,up:{1:{cost:{crystal:5e3},time:2*Ev}}},caserne:{size:3.2,hp:900,shop:{cost:{crystal:400},time:15*Zi,max:[0,1,1]},up:{1:{cost:{crystal:600},time:20*Zi},2:{cost:{crystal:1200},time:40*Zi}}},tour:{size:2,hp:600,shop:{cost:{crystal:350},time:10*Zi,max:[0,2,3]},up:{1:{cost:{crystal:350},time:15*Zi}}},mortier:{size:2.4,hp:800,shop:{cost:{crystal:1500},time:30*Zi,max:[0,1,1]},up:{1:{cost:{crystal:1500},time:30*Zi}}},cristal:{size:1.4,hp:300,up:{},bed:{res:"crystal",rate:120,cap:600}},champignons:{size:2.2,hp:300,up:{},bed:{res:"mushroom",rate:120,cap:600}}},yu=[0,8,10],am=r=>r>=2?{crystal:3e3,mushroom:3e3}:{crystal:1500,mushroom:1500},Xl=2,$l=6,lm=.6,Tv=80,om=8;function Wl(r,t){let e=Math.max(0,Math.abs(r.x-t.x)-r.size-t.size),n=Math.max(0,Math.abs(r.z-t.z)-r.size-t.size);return Math.sqrt(e*e+n*n)}var ro=r=>({x:r.x,z:r.z,size:Ce[r.kind].size});function Av(r){let t=r.findIndex(i=>i.kind==="maison");if(t<0)return r.length===0;let e=new Set([t]),n=[t];for(;n.length;){let i=n.pop();for(let s=0;s<r.length;s++)!e.has(s)&&Wl(ro(r[i]),ro(r[s]))<=$l&&(e.add(s),n.push(s))}return e.size===r.length}function vu(r,t,e,n,i,s,o,a=-1){let l={x:i,z:s,size:Ce[n].size},c=t[e].buildings.filter(u=>u.id!==a);if(!c.some(u=>Wl(l,ro(u))<=$l))return"zone";if(c.some(u=>Wl(l,ro(u))<lm))return"overlap";let h=t[e].walls;if(h&&jp(h,l))return"wall";for(let u=0;u<t.length;u++)if(u!==e&&t[u].buildings.some(d=>Wl(l,ro(d))<Tv))return"foe";for(let u of o){let d=u.x-i,f=u.z-s;if(d*d+f*f<(om+l.size)*(om+l.size))return"deposit"}for(let[u,d]of[[0,0],[-1,-1],[1,-1],[-1,1],[1,1]]){let[f,m]=r.cell(i+u*l.size,s+d*l.size);if(f<0||m<0||f>=r.G||m>=r.G||r.grid[m*r.G+f]!==1)return"ground"}return a>=0&&!Av([...c,{kind:n,x:i,z:s}])?"chain":null}function Rv(r,t,e,n){let i=Ce[t].size;return Math.abs(e-r.x)<3+i&&n+i>r.z+Ce.maison.size&&n-i<r.z+17}var mi=Math.SQRT1_2,Cv=[[0,1],[mi,mi],[1,0],[mi,-mi],[0,-1],[-mi,-mi],[-1,0],[-mi,mi]];function Mu(r,t,e,n,i){let s=Ce[n].size,o=t[e].buildings,a=o.find(l=>l.kind==="maison")??o[0];for(let l of o){let c=Ce[l.kind].size+s+lm+1.4;for(let[h,u]of Cv){let d={x:Math.round((l.x+h*c)*2)/2,z:Math.round((l.z+u*c)*2)/2};if(!(a&&Rv(a,n,d.x,d.z))&&!vu(r,t,e,n,d.x,d.z,i))return d}}return null}var Jn=(r,t)=>r.reduce((e,n)=>n.kind===t&&n.busy?.what!=="build"?Math.max(e,n.level):e,0),so=(r,t)=>r.filter(e=>e.kind===t).length,ql=r=>r.filter(t=>t.busy).length;var wu=r=>r==="crystal"?"cristal":"champignons";var Su={soldat:{hp:100,dmg:16,period:1,range:.9,speed:1.9,hitAt:.36666666666666664,ranged:!1},archere:{hp:60,dmg:11,period:1.3,range:5.2,speed:1.9,hitAt:.5333333333333333,ranged:!0},veteran:{hp:320,dmg:42,period:1.4,range:1,speed:1.6,hitAt:.36666666666666664,ranged:!1},brigand:{hp:80,dmg:13,period:1,range:.9,speed:1.8,hitAt:.36666666666666664,ranged:!1},archer_brigand:{hp:50,dmg:9,period:1.4,range:5,speed:1.8,hitAt:.5333333333333333,ranged:!0},chef:{hp:320,dmg:28,period:1.2,range:1,speed:1.6,hitAt:.4,ranged:!1}},Iv={tour:{min:0,max:13.5,period:1,dmg:20,blast:0,flight:0,arrow:!0},mortier:{min:4,max:14.5,period:4.2,dmg:46,blast:1.8,flight:1.7,arrow:!1},guet:{min:0,max:11.5,period:1.2,dmg:12,blast:0,flight:0,arrow:!0}},ti=(r,t,e)=>{let n=Math.max(0,Math.abs(t-r.x)-r.size),i=Math.max(0,Math.abs(e-r.z)-r.size);return Math.sqrt(n*n+i*i)},Qn=r=>Math.max(1,Math.round(r/.05)),cm=.4,jn=.68,Zl=.5,Fe=.5,Yi=1073741823,Pv=400,Lv=1.6,hm=[[1,0,10],[-1,0,10],[0,1,10],[0,-1,10],[1,1,14],[-1,1,14],[1,-1,14],[-1,-1,14]];function oo(r,t,e){let n=r.x1-r.x0,i=r.z1-r.z0,s=n*n+i*i,o=s>0?Math.max(0,Math.min(1,((t-r.x0)*n+(e-r.z0)*i)/s)):0,a=t-r.x0-n*o,l=e-r.z0-i*o;return{d:Math.sqrt(a*a+l*l),t:o}}function Dv(r,t,e,n,i,s,o,a){let l=e-r,c=n-t,h=o-i,u=a-s,d=l*(s-t)-c*(i-r),f=l*(a-t)-c*(o-r);if(d*f>=0)return!1;let m=h*(t-s)-u*(r-i),x=h*(n-s)-u*(e-i);return m*x<0}function um(r,t,e,n){let i=1/0;for(let s of r){if(s.dead)continue;let o=ti(s,t,e);if(o<5)return!1;o<i&&(i=o)}if(n){for(let s of n)if(!s.dead&&oo(s,t,e).d<1.2)return!1}return i<=22}var gi=2,Wr=class{constructor(t){Tt(this,"input",t);Tt(this,"t",0);Tt(this,"units",[]);Tt(this,"blds");Tt(this,"shots",[]);Tt(this,"reserve",{soldat:[],archere:[],veteran:[],brigand:[],archer_brigand:[],chef:[]});Tt(this,"events",[]);Tt(this,"record",!1);Tt(this,"over",null);Tt(this,"retreatAt",-1);Tt(this,"ws");Tt(this,"posts");Tt(this,"seed");Tt(this,"nextId",0);Tt(this,"grid",null);Tt(this,"fields",new Map);this.seed=t.seed%2147483646+1,this.blds=t.buildings.map(n=>{let i=n.def?Iv[n.def]:null,s=Math.round(n.hp*(n.mods?.hp??1));return{id:n.id,kind:n.kind,x:n.x,z:n.z,size:n.size,hp:s,max:s,dead:!1,def:i,defKind:n.def??null,cd:Qn(.6),dmgK:n.mods?.dmg??1,rangeK:n.mods?.range??1}}),this.ws=(t.walls??[]).map(n=>({...n,max:n.hp,dead:!1})),this.posts=(t.posts??[]).map(n=>({x:n.x,z:n.z})),this.ws.length&&(this.grid=this.makeGrid());for(let n of t.attackers)this.reserve[n.k].push(n.hp);let e=t.defenders.length;t.defenders.forEach((n,i)=>{let s=Math.floor(i/5),o=Math.min(5,e-s*5),a=i%5,l={x:t.rally.x+(a-(o-1)/2)*1.1,z:t.rally.z-s*1.1};this.spawn(1,n.k,n.hp,l.x,l.z,n.tag)})}rnd(){return this.seed=this.seed*16807%2147483647,this.seed/2147483647}emit(t){this.record&&this.events.push(t)}spawn(t,e,n,i,s,o){let a=Su[e],l=(t?this.input.mods?.def:this.input.mods?.att)?.[e]??{},c=Math.round(a.hp*(l.hp??1)),h={id:this.nextId++,side:t,k:e,tag:o,x:i,z:s,hp:Math.min(c,Math.round(n*(l.hp??1))),max:c,dmg:a.dmg*(l.dmg??1),range:a.range*(l.range??1),speed:a.speed*(l.speed??1),period:a.period,hitAt:a.hitAt,ranged:a.ranged,tu:-1,tb:-1,tw:-1,blk:-1,rx:i,rz:s,rt:-99,cd:0,swing:-1,dealt:!1,dead:!1,deadAt:-1,mx:0,mz:0,home:{x:i,z:s}};return this.units.push(h),h}canDrop(t,e){return um(this.blds,t,e,this.ws)}left(t){return this.reserve[t].length}drop(t,e,n){if(this.over||!this.reserve[t].length||!this.canDrop(e,n))return!1;let i=this.reserve[t].shift(),s=this.spawn(0,t,i,e+(this.rnd()-.5)*.4,n+(this.rnd()-.5)*.4,"raid");return this.emit({e:"drop",u:s.id}),!0}retreat(){this.over||(this.retreatAt=this.t,this.finish("retreat"))}step(){if(this.over)return;this.t++;let t=this.units,e=this.blds;for(let n of t){if(n.dead)continue;let i=n.tu>=0?t[n.tu]:null,s=n.tb>=0?e[n.tb]:null;(i&&i.dead||s&&s.dead||!i&&!s||(this.t+n.id)%6===0&&n.swing<0)&&this.choose(n)}for(let n of t)n.dead||this.act(n);this.separate();for(let n of e)!n.dead&&n.def&&this.fire(n);this.land(),this.end()}run(t,e=-1,n=3600){let i=0;for(;!this.over;){for(;i<t.length&&t[i].t<=this.t;){let s=t[i++];this.drop(s.k,s.x,s.z)}if(e>=0&&this.t>=e&&this.retreat(),this.t>=n&&!this.over){this.finish("time");break}this.step()}return this.over}choose(t){let e=this.units,n=this.blds,i=-1,s=-1,o=1/0;if(t.side===0&&t.k==="veteran"){let a=this.ws,l=()=>n.some(u=>!u.dead&&u.def)||a.some(u=>!u.dead);if(t.tb>=0&&!n[t.tb].dead&&(n[t.tb].def||!l())||t.tb<0&&t.tw>=0&&!a[t.tw].dead)return;let h=-1;for(let u=0;u<n.length;u++){let d=n[u];if(d.dead||!d.def)continue;let f=ti(d,t.x,t.z);f<o&&(o=f,s=u)}for(let u=0;u<a.length;u++){let d=a[u];if(d.dead)continue;let f=oo(d,t.x,t.z).d-cm;f<o&&(o=f,h=u,s=-1)}if(s<0&&h<0)for(let u=0;u<n.length;u++){let d=n[u];if(d.dead)continue;let f=ti(d,t.x,t.z);f<o&&(o=f,s=u)}t.tu=-1,t.tb=s,t.tw=h,t.blk=-1;return}else if(t.side===0){for(let l=0;l<e.length;l++){let c=e[l];if(c.dead||c.side===0)continue;let h=c.x-t.x,u=c.z-t.z,d=Math.sqrt(h*h+u*u);d<o&&(o=d,i=l,s=-1)}for(let l=0;l<n.length;l++){let c=n[l];if(c.dead)continue;let h=ti(c,t.x,t.z);h<o&&(o=h,s=l,i=-1)}let a=t.tu>=0&&!e[t.tu].dead?this.distU(t,e[t.tu]):t.tb>=0&&!n[t.tb].dead?ti(n[t.tb],t.x,t.z):1/0;if(a<1/0&&a<=o+1.2)return}else{for(let a=0;a<e.length;a++){let l=e[a];if(l.dead||l.side===1||!this.nearHome(l))continue;let c=l.x-t.x,h=l.z-t.z,u=Math.sqrt(c*c+h*h);u<o&&(u<=t.range||this.wallAcross(t.x,t.z,l.x,l.z,1)<0)&&(o=u,i=a)}if(t.tu>=0&&!e[t.tu].dead&&this.nearHome(e[t.tu])&&this.distU(t,e[t.tu])<=o+1.2)return}(i!==t.tu||s!==t.tb)&&(t.tw=-1,t.blk=-1),t.tu=i,t.tb=s}distU(t,e){let n=e.x-t.x,i=e.z-t.z;return Math.sqrt(n*n+i*i)}nearHome(t){for(let e of this.blds)if(!e.dead&&ti(e,t.x,t.z)<12)return!0;return!1}act(t){let e=t.tu>=0?this.units[t.tu]:null,n=t.tb>=0?this.blds[t.tb]:null;t.cd--,t.mx=0,t.mz=0;let i,s,o;if(e&&!e.dead)i=e.x,s=e.z,o=this.distU(t,e);else if(n&&!n.dead)i=Math.max(n.x-n.size,Math.min(n.x+n.size,t.x)),s=Math.max(n.z-n.size,Math.min(n.z+n.size,t.z)),o=ti(n,t.x,t.z);else if(t.tw>=0&&!this.ws[t.tw].dead)i=t.x,s=t.z,o=1/0;else{if(t.side===1){let c=t.home.x-t.x,h=t.home.z-t.z;this.walk(t,t.home.x,t.home.z,Math.sqrt(c*c+h*h),.3)}t.swing=-1;return}let a=t.range*.9;if(t.tw>=0&&this.ws[t.tw].dead&&(t.tw=-1),t.tw<0&&o>t.range&&this.grid&&t.side===0&&t.swing<0&&((t.blk<0||(this.t+t.id)%6===0)&&(t.blk=this.wallAcross(t.x,t.z,i,s,0)>=0?1:0),t.blk===1)){if(this.t-t.rt>=4){t.rt=this.t;let c=e?null:this.route(t,t.tb);if(c&&c.w<0)t.rx=c.x,t.rz=c.z;else{let h=c?c.w:this.wallAcross(t.x,t.z,i,s,0);h>=0?t.tw=h:(t.rx=i,t.rz=s)}}t.tw<0&&(i=t.rx,s=t.rz,o=Math.sqrt((i-t.x)*(i-t.x)+(s-t.z)*(s-t.z)),a=0)}let l=t.tw>=0?this.ws[t.tw]:null;if(l){let c=oo(l,t.x,t.z);i=l.x0+(l.x1-l.x0)*c.t,s=l.z0+(l.z1-l.z0)*c.t,o=Math.max(0,c.d-cm),a=t.range*.9}if(t.swing>=0){t.swing++,!t.dealt&&t.swing>=Qn(t.hitAt)&&(t.dealt=!0,t.ranged?this.loose(t,l?null:e,l?null:n,l?t.tw:-1,i,s):o<t.range+.4&&(l?this.hurtW(l,t.dmg):e&&!e.dead?this.hurt(e,t.dmg):n&&!n.dead&&this.hurtB(n,t.dmg))),t.swing>=Qn(t.period*.9)&&(t.swing=-1);return}if(o<=t.range&&(l||a>0)){t.cd<=0&&(t.swing=0,t.dealt=!1,t.cd=Qn(t.period*(.9+this.rnd()*.2)),this.emit({e:"swing",u:t.id}));return}this.walk(t,i,s,o,a)}walk(t,e,n,i,s){if(i<=s+1e-6)return;let o=Math.min(i-s,t.speed*.05),a=Math.sqrt((e-t.x)*(e-t.x)+(n-t.z)*(n-t.z))||1;t.mx=(e-t.x)/a*o,t.mz=(n-t.z)/a*o,t.x+=t.mx,t.z+=t.mz}separate(){let t=this.units.filter(i=>!i.dead),e=.62;for(let i=0;i<t.length;i++)for(let s=i+1;s<t.length;s++){let o=t[i],a=t[s],l=a.x-o.x,c=a.z-o.z;if(l>e||l<-e||c>e||c<-e)continue;let h=Math.sqrt(l*l+c*c);if(h>1e-6&&h<e){let u=(e-h)/2,d=l/h,f=c/h,m=o.swing>=0?.3:1,x=a.swing>=0?.3:1;o.x-=d*u*m,o.z-=f*u*m,a.x+=d*u*x,a.z+=f*u*x}}for(let i of t)for(let s of this.blds){if(s.dead)continue;let o=s.size+.3,a=Math.abs(i.x-s.x)-o,l=Math.abs(i.z-s.z)-o;a<0&&l<0&&(a>l?i.x=s.x+(i.x>=s.x?o:-o):i.z=s.z+(i.z>=s.z?o:-o))}if(!this.ws.length)return;let n=this.grid;for(let i of t){let s=Math.floor((i.x-n.x0)/gi),o=Math.floor((i.z-n.z0)/gi),a=s>=0&&o>=0&&s<n.bn&&o<n.bm?n.bucket[o*n.bn+s]:[];for(let l of a){let c=this.ws[l];if(c.dead||c.gate&&i.side===1||i.x<Math.min(c.x0,c.x1)-jn||i.x>Math.max(c.x0,c.x1)+jn||i.z<Math.min(c.z0,c.z1)-jn||i.z>Math.max(c.z0,c.z1)+jn)continue;let h=c.x1-c.x0,u=c.z1-c.z0,d=h*h+u*u;if(d<1e-9)continue;let f=((i.x-c.x0)*h+(i.z-c.z0)*u)/d;if(f<0||f>1)continue;let m=Math.sqrt(d),x=-u/m,g=h/m,p=(i.x-c.x0)*x+(i.z-c.z0)*g;if(p>=jn||p<=-jn)continue;let M=p>1e-6?1:p<-1e-6||i.mx*x+i.mz*g>0?-1:1;i.x+=x*(M*jn-p),i.z+=g*(M*jn-p)}for(let l of this.posts){let c=i.x-l.x,h=i.z-l.z,u=Zl+.28;if(c>u||c<-u||h>u||h<-u)continue;let d=Math.sqrt(c*c+h*h);d<u&&(d>1e-6?(i.x=l.x+c/d*u,i.z=l.z+h/d*u):i.x=l.x+u)}}}loose(t,e,n,i,s,o){let a=Math.sqrt((s-t.x)*(s-t.x)+(o-t.z)*(o-t.z)),l={kind:"arrow",from:t.id,fromBld:-1,x0:t.x,z0:t.z,x:s,z:o,t0:this.t,land:this.t+Qn(a/13),dmg:t.dmg,tu:e?e.id:-1,tb:n?this.blds.indexOf(n):-1,tw:i,side:t.side,blast:0};this.shots.push(l),this.emit({e:"shot",s:l})}fire(t){if(--t.cd>0)return;let e=t.def,n=e.max*t.rangeK,i=null,s=1/0;for(let c of this.units){if(c.dead||c.side!==0)continue;let h=c.x-t.x,u=c.z-t.z,d=Math.sqrt(h*h+u*u);d<e.min||d>n||d<s&&(s=d,i=c)}if(!i){t.cd=Qn(.25);return}t.cd=Qn(e.period);let o=e.arrow?s/13:e.flight,a=e.arrow?0:Qn(o),l={kind:e.arrow?"arrow":"ball",from:-1,fromBld:this.blds.indexOf(t),x0:t.x,z0:t.z,x:i.x+i.mx*a,z:i.z+i.mz*a,t0:this.t,land:this.t+Qn(o),dmg:e.dmg*t.dmgK,tu:e.arrow?i.id:-1,tb:-1,tw:-1,side:1,blast:e.blast};this.shots.push(l),this.emit({e:"shot",s:l})}land(){for(let t=this.shots.length-1;t>=0;t--){let e=this.shots[t];if(!(e.land>this.t)){if(this.shots.splice(t,1),e.kind==="ball"){this.emit({e:"blast",x:e.x,z:e.z});for(let n of this.units){if(n.dead||n.side===e.side)continue;let i=Math.sqrt((n.x-e.x)*(n.x-e.x)+(n.z-e.z)*(n.z-e.z));i<e.blast&&this.hurt(n,e.dmg*(1-.5*i/e.blast))}}else if(e.tu>=0){let n=this.units[e.tu];n.dead||this.hurt(n,e.dmg)}else if(e.tb>=0){let n=this.blds[e.tb];n.dead||this.hurtB(n,e.dmg)}else if(e.tw>=0){let n=this.ws[e.tw];n.dead||this.hurtW(n,e.dmg)}}}}hurt(t,e){t.hp-=e,this.emit({e:"hit",u:t.id,dmg:e}),t.hp<=0&&(t.hp=0,t.dead=!0,t.deadAt=this.t,t.swing=-1,this.emit({e:"death",u:t.id}))}hurtB(t,e){if(t.hp-=e,this.emit({e:"hitB",b:this.blds.indexOf(t),dmg:e}),t.hp<=0){t.hp=0,t.dead=!0,this.emit({e:"fall",b:this.blds.indexOf(t)});for(let n of this.units)n.tb>=0&&this.blds[n.tb]===t&&(n.tb=-1);this.rethink()}}hurtW(t,e){if(t.hp-=e,this.emit({e:"hitW",w:this.ws.indexOf(t),dmg:e}),t.hp<=0){t.hp=0,t.dead=!0,this.emit({e:"fallW",w:this.ws.indexOf(t)});for(let n of this.units)n.tw>=0&&this.ws[n.tw]===t&&(n.tw=-1);this.rethink()}}rethink(){if(this.grid){this.fields.clear();for(let t of this.units)t.blk=-1,t.rt=-99}}wallAcross(t,e,n,i,s){let o=-1,a=1/0,l=Math.min(t,n),c=Math.max(t,n),h=Math.min(e,i),u=Math.max(e,i);for(let d=0;d<this.ws.length;d++){let f=this.ws[d];if(f.dead||f.gate&&s===1||f.x0<l&&f.x1<l||f.x0>c&&f.x1>c||f.z0<h&&f.z1<h||f.z0>u&&f.z1>u||!Dv(t,e,n,i,f.x0,f.z0,f.x1,f.z1))continue;let m=oo(f,t,e);m.d<a&&(a=m.d,o=d)}return o}makeGrid(){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let f of this.blds)t=Math.min(t,f.x-f.size),n=Math.max(n,f.x+f.size),e=Math.min(e,f.z-f.size),i=Math.max(i,f.z+f.size);for(let f of this.ws)t=Math.min(t,f.x0,f.x1),n=Math.max(n,f.x0,f.x1),e=Math.min(e,f.z0,f.z1),i=Math.max(i,f.z0,f.z1);let s=25;t=Math.floor(t-s),e=Math.floor(e-s);let o=Math.ceil((n+s-t)/Fe),a=Math.ceil((i+s-e)/Fe),l=Math.ceil(o*Fe/gi),c=Math.ceil(a*Fe/gi),h={x0:t,z0:e,n:o,m:a,wall:new Int32Array(o*a).fill(-1),bld:new Int32Array(o*a).fill(-1),post:new Uint8Array(o*a),bn:l,bm:c,bucket:Array.from({length:l*c},()=>[])};this.ws.forEach((f,m)=>{let x=jn+.1,g=Math.max(0,Math.floor((Math.min(f.x0,f.x1)-x-t)/gi)),p=Math.min(l-1,Math.floor((Math.max(f.x0,f.x1)+x-t)/gi)),M=Math.max(0,Math.floor((Math.min(f.z0,f.z1)-x-e)/gi)),w=Math.min(c-1,Math.floor((Math.max(f.z0,f.z1)+x-e)/gi));for(let y=M;y<=w;y++)for(let A=g;A<=p;A++)h.bucket[y*l+A].push(m)});let u=new Float64Array(o*a).fill(1/0),d=(f,m,x,g,p,M)=>{let w=Math.max(0,Math.floor((Math.min(f,x)-p-t)/Fe)),y=Math.min(o-1,Math.floor((Math.max(f,x)+p-t)/Fe)),A=Math.max(0,Math.floor((Math.min(m,g)-p-e)/Fe)),C=Math.min(a-1,Math.floor((Math.max(m,g)+p-e)/Fe));for(let v=A;v<=C;v++)for(let E=w;E<=y;E++)M(v*o+E,t+(E+.5)*Fe,e+(v+.5)*Fe)};this.ws.forEach((f,m)=>d(f.x0,f.z0,f.x1,f.z1,.5,(x,g,p)=>{let M=oo(f,g,p).d;M<=.45&&M<u[x]&&(u[x]=M,h.wall[x]=m)})),this.blds.forEach((f,m)=>d(f.x-f.size,f.z-f.size,f.x+f.size,f.z+f.size,0,(x,g,p)=>{h.bld[x]<0&&Math.abs(g-f.x)<f.size&&Math.abs(p-f.z)<f.size&&(h.bld[x]=m)}));for(let f of this.posts)d(f.x,f.z,f.x,f.z,Zl,(m,x,g)=>{Math.abs(x-f.x)<=Zl&&Math.abs(g-f.z)<=Zl&&(h.post[m]=1)});return h}extra(t,e){let n=this.grid;if(n.post[t])return Yi;let i=n.wall[t];if(i>=0&&!this.ws[i].dead)return Math.round(this.ws[i].hp*Lv);let s=n.bld[t];return s>=0&&s!==e&&!this.blds[s].dead?Pv:0}field(t){let e=this.fields.get(t);if(e)return e;let n=this.grid,i=n.n*n.m,s=new Int32Array(i).fill(Yi),o=this.blds[t],a=[],l=h=>{let u=a.length;for(a.push(h);u>0;){let d=u-1>>1;if(a[d]<=h)break;a[u]=a[d],u=d}a[u]=h},c=()=>{let h=a[0],u=a.pop();if(a.length){let d=0;for(;;){let f=2*d+1,m=f+1,x=d,g=u;if(f<a.length&&a[f]<g&&(x=f,g=a[f]),m<a.length&&a[m]<g&&(x=m),x===d)break;a[d]=a[x],d=x}a[d]=u}return h};for(let h=0;h<i;h++){if(n.post[h])continue;let u=n.wall[h];if(u>=0&&!this.ws[u].dead)continue;let d=h%n.n,f=(h-d)/n.n;ti(o,n.x0+(d+.5)*Fe,n.z0+(f+.5)*Fe)<=.75&&(s[h]=0,l(h))}for(;a.length;){let h=c(),u=h%i,d=(h-u)/i;if(d>s[u])continue;let f=this.extra(u,t);if(f>=Yi)continue;let m=u%n.n,x=(u-m)/n.n;for(let[g,p,M]of hm){let w=m+g,y=x+p;if(w<0||y<0||w>=n.n||y>=n.m)continue;let A=y*n.n+w,C=d+M+f;C<s[A]&&(s[A]=C,l(C*i+A))}}return this.fields.set(t,s),s}route(t,e){let n=this.grid,i=Math.floor((t.x-n.x0)/Fe),s=Math.floor((t.z-n.z0)/Fe);if(i<0||s<0||i>=n.n||s>=n.m)return null;let o=this.field(e),a=d=>{let f=d%n.n;return{x:n.x0+(f+.5)*Fe,z:n.z0+((d-f)/n.n+.5)*Fe}},l=(d,f)=>{let m=d%n.n,x=(d-m)/n.n;for(let[g,p,M]of hm){let w=m+g,y=x+p;w>=0&&y>=0&&w<n.n&&y<n.m&&f(y*n.n+w,M)}},c=s*n.n+i,h=n.wall[c];if(h>=0&&!this.ws[h].dead){let d=this.ws[h],f=(p,M)=>(d.x1-d.x0)*(M-d.z0)-(d.z1-d.z0)*(p-d.x0),m=f(t.x,t.z),x=-1,g=1/0;l(c,p=>{let M=n.wall[p];if(M>=0&&!this.ws[M].dead||n.post[p])return;let w=a(p);if(f(w.x,w.z)*m<=0)return;let y=(w.x-t.x)*(w.x-t.x)+(w.z-t.z)*(w.z-t.z);y<g&&(g=y,x=p)}),x>=0&&(c=x)}let u=[];for(let d=0;d<6;d++){let f=-1,m=Yi;if(l(c,(g,p)=>{let M=this.extra(g,e);if(M>=Yi||o[g]>=Yi)return;let w=o[g]+p+M;w<m&&(m=w,f=g)}),f<0||o[f]>=o[c]&&o[c]<Yi)break;let x=n.wall[f];if(x>=0&&!this.ws[x].dead){if(!u.length)return{...a(f),w:x};break}if(u.push(f),c=f,o[c]===0)break}for(let d=u.length-1;d>=0;d--){let f=a(u[d]);if(this.wallAcross(t.x,t.z,f.x,f.z,0)<0)return{x:f.x,z:f.z,w:-1}}return u.length?{...a(u[0]),w:-1}:null}end(){let t=this.units.some(n=>!n.dead&&n.side===0),e=Object.values(this.reserve).some(n=>n.length);this.blds.every(n=>n.dead)?this.finish("razed"):!t&&!e&&this.units.some(n=>n.side===0)?this.finish("wiped"):this.t>=3600&&this.finish("time")}finish(t){let e=this.units.filter(o=>!o.dead),n=[...e.filter(o=>o.side===0).map(o=>({k:o.k,hp:Math.round(o.hp/(this.input.mods?.att?.[o.k]?.hp??1))})),...Object.keys(this.reserve).flatMap(o=>this.reserve[o].map(a=>({k:o,hp:a})))],i=e.filter(o=>o.side===1).map(o=>({k:o.k,hp:Math.round(o.hp/(this.input.mods?.def?.[o.k]?.hp??1)),tag:o.tag})),s=this.input.defenders.map((o,a)=>{let l=this.units[a];return l.dead?0:Math.round(l.hp/(this.input.mods?.def?.[l.k]?.hp??1))});this.over={survivors:n,left:i,defHp:s,down:this.blds.filter(o=>o.dead).map(o=>o.id),lost:this.units.filter(o=>o.side===0&&o.dead).length,killed:this.units.filter(o=>o.side===1&&o.dead).length,why:t,t:this.t}}};function Eu(r,t){let e=r.buildings,n={x:t.x,z:t.z},i=a=>e.reduce((l,c)=>{let h=ti(c,a.x,a.z);return h<l.g?{b:c,g:h}:l},{b:e[0],g:1/0}),s=(a,l)=>um(e,a,l,r.walls);for(let a=0;a<400&&!s(n.x,n.z);a++){let l=i(n),c=l.b.x-n.x,h=l.b.z-n.z,u=Math.sqrt(c*c+h*h)||1,d=l.g>5?.5:-.5;n={x:n.x+c/u*d,z:n.z+h/u*d}}let o=[];return r.attackers.forEach((a,l)=>{let c=Math.floor(l/6),h=l%6,u=[[0,0],[.8,0],[-.8,0],[.4,.7],[-.4,.7],[0,-.8]][h],d={x:n.x+u[0]*(1+c),z:n.z+u[1]*(1+c)};s(d.x,d.z)||(d=n),o.push({t:1+l*2,k:a.k,x:d.x,z:d.z})}),o}var Yl={petit:{pieces:[{id:1,kind:"tente",dx:-1.2,dz:-.8,size:1.6,hp:320},{id:2,kind:"coffre",dx:2.4,dz:1.4,size:.7,hp:220}],guards:["brigand","brigand","archer_brigand"],loot:{crystal:300,mushroom:200},palisade:5.5},grand:{pieces:[{id:1,kind:"guet",dx:-4,dz:-2.5,size:1.4,hp:480,def:"guet"},{id:2,kind:"tente",dx:2.6,dz:-2.6,size:1.6,hp:320},{id:3,kind:"tente",dx:-1.2,dz:3.2,size:1.6,hp:320},{id:4,kind:"coffre",dx:3.2,dz:2.4,size:.7,hp:260}],guards:["brigand","brigand","brigand","brigand","archer_brigand","archer_brigand","chef"],loot:{crystal:800,mushroom:500},palisade:8}},dm=6*3600,fm=r=>({x:r.x,z:r.z+16});function Kl(r,t,e,n,i,s=-1){let o=Yl[n],a=s>=0?o.guards.slice(0,2):o.guards;return{id:r,x:t,z:e,size:n,up:!0,back:0,down:[],guards:a.map(l=>({k:l,hp:Su[l].hp})),loot:s>=0?{crystal:400,mushroom:250}:{...o.loot},rune:i,raidBy:-1,raidUntil:0,tuto:s}}function pm(r,t,e,n){return{seed:e,buildings:Yl[r.size].pieces.filter(i=>!r.down.includes(i.id)).map(i=>({id:i.id,kind:i.kind,x:r.x+i.dx,z:r.z+i.dz,size:i.size,hp:i.hp,def:i.def})),defenders:r.guards.map(i=>({k:i.k,hp:i.hp,tag:"camp"})),rally:{x:r.x,z:r.z+1.5},attackers:t,mods:n}}var gm=[.05,.1,.2,.35],Uv=["commune","rare","\xE9pique","l\xE9gendaire"],kv={dmg:"d\xE9g\xE2ts",hp:"points de vie",speed:"vitesse",range:"port\xE9e"},mm={troop:2,defense:1},xm=["dmg","hp","range"],zv={petit:[70,22,7,1],grand:[45,32,18,5]},Tu={petit:15,grand:50},bm=r=>r.startsWith("b")?mm.defense:mm.troop;function ao(r){let t={dmg:1,hp:1,speed:1,range:1};for(let e of r??[])t[e.stat]+=gm[e.rarity];return t}function Jl(r){return{soldat:ao(r.soldat),archere:ao(r.archere),veteran:ao(r.veteran)}}function _m(r,t,e,n){let i=zv[t],s=e*100,o=0,a=0;for(let c=0;c<4;c++)if(o+=i[c],s<o){a=c;break}return{id:r,stat:["dmg","hp","speed","range"][Math.min(3,Math.floor(n*4))],rarity:a}}var lo=r=>`une rune ${Uv[r.rarity]} (+${Math.round(gm[r.rarity]*100)} % ${kv[r.stat]})`;var Ql={soldat:{hp:100,dps:16},archere:{hp:60,dps:11/1.3},veteran:{hp:320,dps:42/1.4}},Em={soldat:1,archere:1,veteran:3},Fv={soldat:60,archere:60,veteran:180},Nv={soldat:1,archere:1,veteran:3},Au=r=>r.reduce((t,e)=>t+(Em[e.k]??1),0),zt={armySpeed:2.4,harvSpeed:1.5,loadedSpeed:1.2,digT:90,trainT:60,cap:30,botCap:18,cost:{soldat:25,archere:40,veteran:80},start:{crystal:450,mushroom:150,energy:100},energy:{max:100,perHour:12.5,army:4,harv:3,raid:6},respawn:4*3600,load:30,campT:3600,meet:7,loot:.3,bot:{firstAttack:2.5*3600,every:5*3600,minArmy:10,firstWave:6},tuto:!0,houseHp:900,fallLoot:.5,shieldT:3*3600,raidLock:480},ym=["Bruneval","Rochefer","Valgris","Hautefeuille","Pierrelune","Combefroide"],vm="local";function Bv(r,t){let e=Math.max(0,t-r.t0);if(e>=r.total)return r.cum[r.cum.length-1];let n=1;for(;n<r.tcum.length-1&&r.tcum[n]<e;)n++;let i=(e-r.tcum[n-1])/Math.max(1e-6,r.tcum[n]-r.tcum[n-1]);return r.cum[n-1]+(r.cum[n]-r.cum[n-1])*i}function Ov(r,t){let e=r.pts.length;if(e<2)return{p:r.pts[0],dir:{x:0,z:1}};t=Math.max(0,Math.min(r.cum[e-1],t));let n=1;for(;n<e-1&&r.cum[n]<t;)n++;let i=r.pts[n-1],s=r.pts[n],o=Math.max(1e-6,r.cum[n]-r.cum[n-1]),a=(t-r.cum[n-1])/o;return{p:{x:i.x+(s.x-i.x)*a,z:i.z+(s.z-i.z)*a},dir:{x:(s.x-i.x)/o,z:(s.z-i.z)/o}}}var Ru=(r,t)=>({...Ov(r,Bv(r,t)),done:t-r.t0>=r.total}),ZS=(r,t)=>Math.max(0,r.total-(t-r.t0)),Cu=r=>{if(r<60)return"moins d\u20191 min";let t=Math.round(r/60);return t<60?`${t} min`:`${Math.floor(t/60)} h ${String(t%60).padStart(2,"0")}`},Xr=r=>r.charAt(0).toUpperCase()+r.slice(1),wn=(r,t)=>`${r} ${t}${r>1?"s":""}`,$r=r=>r.mushroom?`${r.crystal} cristal et ${r.mushroom} champignons`:`${r.crystal} cristal`,Mm=r=>r.filter(t=>t.k==="soldat"||t.k==="archere"||t.k==="veteran").map(t=>({k:t.k,hp:t.hp})),wm={maison:"La maison commune",caserne:"La caserne",tour:"La tour d\u2019archers",mortier:"Le mortier",cristal:"Le parterre de cristal",champignons:"Le parterre de champignons"},ei=(r,t)=>{let e=r.x-t.x,n=r.z-t.z;return Math.sqrt(e*e+n*n)},Sm=class r{constructor(t,e){Tt(this,"map",t);Tt(this,"w");Tt(this,"frac",0);Tt(this,"onReport",null);this.w=e??r.fresh(t)}get now(){return this.w.t+this.frac}static fresh(t,e=[vm],n=[]){let i=t.villages,s=i.length>2||e.filter(Boolean).length>1,o=i.map((d,f)=>{let m=e[f]??null;return{team:f,name:n[f]??(m?"Toi":s?ym[f%ym.length]:""),owner:m,x:d.x,z:d.z,crystal:zt.start.crystal,mushroom:zt.start.mushroom,energy:zt.start.energy,garrison:[],queue:[],hp:zt.houseHp,dead:!1,shield:0,raidBy:-1,raidUntil:0,full:!1,buildings:[{id:1,kind:"maison",x:d.x,z:d.z,level:1,busy:null,store:0}],nextId:2,runes:[],slots:{},tuto:m&&zt.tuto?"tour":"",walls:_u()}}),a=o.map(d=>({team:d.team,units:[],state:"home",at:{x:d.x,z:d.z},mission:null,campUntil:0,target:-1,camp:-1,battle:null})),l=o.map(d=>({team:d.team,state:"home",at:{x:d.x,z:d.z},mission:null,digEnd:0,dep:-1,carrying:!1,load:"crystal"})),c=t.deposits.map((d,f)=>({x:d.x,z:d.z,present:!0,back:0,kind:f%2?"mushroom":"crystal"})),h=d=>d.map(f=>({x:f.x,z:f.z})),u={v:6,seed:t.seed,t:0,villages:o,armies:a,harvs:l,deposits:c,reports:[],nextAttack:o.map(()=>zt.bot.firstAttack),winner:-1,camps:[],bands:[],rng:t.seed%2147483646+1,nextRune:1,sites:{camps:h(t.camps),tutoDep:h(t.tutoDep),tutoCamp:h(t.tutoCamp)}};return r.seedCamps(t,u),u}static seedCamps(t,e){let n=Math.min(t.camps.length,e.villages.length+2);for(let i=0;i<n;i++){let s=t.camps[i],o=i<e.villages.length?"petit":"grand";e.camps.push(Kl(i+1,s.x,s.z,o,r.draw(e)*100<Tu[o]))}}static draw(t){return t.rng=t.rng*16807%2147483647,t.rng/2147483647}static load(t){let e=t;if(!e||typeof e!="object")return null;if(e.v===3){let n=e.villages.map((s,o)=>({...s,name:o?"":"Toi",owner:o?null:vm,shield:0,raidBy:-1,raidUntil:0,full:!1})),i=e.armies.map(s=>({...s,target:s.state==="camp"||s.mission?.kind==="attack"?1-s.team:-1}));e={v:4,seed:e.seed,t:Math.round(e.t),villages:n,armies:i,harvs:e.harvs,deposits:e.deposits,reports:e.reports,nextAttack:[0,e.nextBot??zt.bot.firstAttack],winner:e.winner}}if(e.v===4){let n=[[-8,-3],[8,-3],[-7,-9],[7,-9],[0,-10],[-11,4],[11,4],[-3,-14]];for(let i of e.villages)i.mushroom=0,i.buildings=[{id:1,kind:"maison",x:i.x,z:i.z,level:1,busy:null,store:0}],(i.planted??[]).forEach((s,o)=>i.buildings.push({id:o+2,kind:"cristal",x:i.x+n[o%8][0],z:i.z+n[o%8][1],level:1,busy:null,store:s.reserve})),i.nextId=i.buildings.length+1,delete i.planted;e.deposits.forEach((i,s)=>{i.kind=s%2?"mushroom":"crystal"});for(let i of e.harvs)i.load="crystal";e.v=5}if(e.v===5){for(let i of e.villages)i.runes=[],i.slots={},i.tuto="";for(let i of e.armies)i.camp=-1,i.battle=null;let n=e;n.camps=[],n.bands=[],n.rng=e.seed%2147483646+1,n.nextRune=1,e.v=6}if(e.v!==6)return null;for(let n of e.villages){n.walls??(n.walls=_u());for(let i of n.walls.runs)i.level??(i.level=1)}return e}isHuman(t){return!!this.w.villages[t]?.owner}teamOf(t){return this.w.villages.findIndex(e=>e.owner===t)}of(t){let e=this.w.villages[t]?.name;return e?`le village de ${e}`:"le village rouge"}armyOf(t){let e=this.w.villages[t]?.name;return e?`l\u2019arm\xE9e de ${e}`:"l\u2019arm\xE9e rouge"}houseOf(t){let e=this.w.villages[t]?.name;return e?`la maison de ${e}`:"la maison du village rouge"}harvOf(t){let e=this.w.villages[t]?.name;return e?`le r\xE9colteur de ${e}`:"le r\xE9colteur rouge"}report(t,e,n,i,s){if(!this.isHuman(t))return;let o=i?{t:this.w.t,team:t,kind:e,text:n,note:i}:{t:this.w.t,team:t,kind:e,text:n};if(s){o.replay=s;let a=this.w.reports.filter(l=>l.team===t&&l.replay);for(let l of a.slice(0,Math.max(0,a.length-2)))delete l.replay}this.w.reports.push(o),this.w.reports.length>240&&this.w.reports.splice(0,this.w.reports.length-240),this.onReport?.(o)}gate(t){let e=this.w.villages[t];return{x:e.x,z:e.z+14}}foes(t){let e=this.w.villages[t];return this.w.villages.filter(n=>n.team!==t&&!n.dead).sort((n,i)=>ei(n,e)-ei(i,e)).map(n=>n.team)}apply(t,e){let n=i=>({ok:!1,why:i});if(this.locked(t)&&["collect","build","move","upgrade","cancel","plant","train","rune","wall","gate","unwall","wallUp"].includes(e.c))return n("locked");switch(e.c){case"army":{let i=this.sendArmy(t,e.kind,e.to??this.gate(t),e.target??-1,e.camp??-1);return typeof i=="string"?n(i):i?{ok:!0,mission:i}:n("none")}case"harv":{let i=this.sendHarv(t,e.kind,e.dep??-1);return typeof i=="string"?n(i):i?{ok:!0,mission:i}:n("none")}case"train":{let i=this.train(t,e.k);return i==="ok"?{ok:!0}:n(i)}case"collect":return{ok:!0,n:this.collect(t,e.id)};case"build":{let i=this.build(t,e.kind,e.x,e.z);return typeof i=="number"?{ok:!0,n:i}:n(i)}case"move":{let i=this.moveBld(t,e.id,e.x,e.z);return i==="ok"?{ok:!0}:n(i)}case"upgrade":{let i=this.upgrade(t,e.id);return i==="ok"?{ok:!0}:n(i)}case"cancel":{let i=this.cancel(t,e.id);return i==="ok"?{ok:!0}:n(i)}case"plant":{let i=this.plant(t,e.x,e.z);return typeof i=="number"?{ok:!0,n:i}:n(i)}case"raid":{let i=this.raidStart(t,e.target??-1,e.camp??-1);return i==="ok"?{ok:!0}:n(i)}case"raidEnd":return this.raidEnd(t,e.drops,e.retreat)?{ok:!0}:n("none");case"rune":{let i=this.equip(t,e.rune,e.slot,e.at);return i==="ok"?{ok:!0}:n(i)}case"tuto":{let i=this.w.villages[t];return i&&(i.tuto=""),{ok:!0}}case"wall":{let i=this.buildWall(t,e.a,e.b);return typeof i=="number"?{ok:!0,n:i}:n(i)}case"gate":{let i=this.w.villages[t];return i&&!i.dead&&rm(i.walls,e.run,e.x,e.z)?{ok:!0}:n("none")}case"unwall":{let i=this.w.villages[t];return i&&!i.dead&&sm(i.walls,e.run)?{ok:!0}:n("none")}case"wallUp":{let i=this.wallUp(t,e.run,e.line);return typeof i=="number"?{ok:!0,n:i}:n(i)}case"claim":{let i=this.w.villages[e.team];return!i||i.dead||i.owner&&i.owner!==e.uid?n("busy"):(i.owner=e.uid,i.name=e.name,{ok:!0})}}}mission(t,e,n,i,s=-1){let o=this.map.path(e,n);if(!o)return null;let a=o.pts.map(h=>({...h})),l=[0],c=[0];a[0]={...e};for(let h=1;h<a.length;h++){let u=a[h].x-a[h-1].x,d=a[h].z-a[h-1].z,f=Math.sqrt(u*u+d*d);l.push(l[h-1]+f),c.push(c[h-1]+f/(i*o.slow[h-1]))}return{kind:t,pts:a,cum:l,tcum:c,total:c[c.length-1],t0:this.w.t,target:s}}walkT(t,e){let n=this.mission("move",t,e,zt.armySpeed);return n?n.total:null}pay(t,e){let n=this.w.villages[t];return this.isHuman(t)?n.energy<e?!1:(n.energy-=e,!0):!0}here(t){return t.mission?Ru(t.mission,this.w.t).p:t.at}release(t){for(let e of this.w.villages)e.raidBy===t&&(e.raidBy=-1,e.raidUntil=0);for(let e of this.w.camps)e.raidBy===t&&(e.raidBy=-1,e.raidUntil=0)}locked(t){let e=this.w.villages[t];return!!e&&e.raidUntil>this.w.t&&e.raidBy!==t&&e.raidBy>=0}goHome(t){t.target=-1,t.camp=-1,t.battle=null,this.release(t.team);let e=this.mission("home",this.here(t),this.gate(t.team),zt.armySpeed);e&&t.units.length?(t.mission=e,t.state="move"):(t.mission=null,t.state="home",t.at=this.gate(t.team))}sendArmy(t,e,n,i=-1,s=-1){let o=this.w.armies[t],a=this.w.villages[t],l=this.w;if(!o.units.length)return null;if(a.raidUntil>l.t)return"locked";if(o.battle)return"busy";let c=-1;if(e==="attack"&&s>=0){let d=this.camp(s);if(!d||!d.up||d.tuto>=0&&d.tuto!==t)return null;if(this.isHuman(t)&&a.energy<zt.energy.army)return"energy";let f=this.mission("attack",o.state==="home"?this.gate(t):this.here(o),fm(d),zt.armySpeed,-1);return f?(this.pay(t,zt.energy.army),o.mission=f,o.state="move",o.target=-1,o.camp=s,f):null}if(e==="attack"){c=i>=0?i:this.foes(t)[0]??-1;let d=l.villages[c];if(!d||c===t||d.dead)return null;if(d.shield>l.t)return"shield"}if(this.isHuman(t)&&a.energy<zt.energy.army)return"energy";let h=e==="attack"?this.gate(c):e==="home"?this.gate(t):n,u=this.mission(e,o.state==="home"?this.gate(t):this.here(o),h,zt.armySpeed,c);return u?(this.pay(t,zt.energy.army),o.mission=u,o.state="move",o.target=c,o.camp=-1,e==="attack"&&this.report(c,"bad",`${Xr(this.armyOf(t))} (${wn(o.units.length,"troupe")}) marche sur ton village : elle arrive dans ${Cu(u.total)}.`,"attack"),u):null}sendHarv(t,e,n=-1){let i=this.w.harvs[t];if(i.state==="dig")return null;if(i.state==="home"&&i.carrying)return"busy";if(this.isHuman(t)&&this.w.villages[t].energy<zt.energy.harv)return"energy";let s=this.w.villages[t],o=this.w.deposits[n];if(e==="harvest"&&(!o||!o.present||o.tuto!==void 0&&o.tuto!==t))return null;let a=e==="harvest"&&o?{x:o.x+1.35,z:o.z+.1}:{x:s.x+2.2,z:s.z+4.4},l=this.mission(e,this.here(i),a,i.carrying?zt.loadedSpeed:zt.harvSpeed,n);return l?(this.pay(t,zt.energy.harv),i.mission=l,i.state=e==="harvest"?"out":"back",i.dep=e==="harvest"?n:-1,l):null}train(t,e){let n=this.w.villages[t],i=this.w.armies[t];if(!Ql[e])return"none";let s=Jn(n.buildings,"caserne");if(!s)return"barracks";if(s<Nv[e])return"level";if(Au(i.units)+Au(n.garrison)+Au(n.queue)+Em[e]>this.armyCap(t))return"full";if(n.mushroom<zt.cost[e])return"cost";n.mushroom-=zt.cost[e];let o=n.queue.length?n.queue[n.queue.length-1].end:this.w.t;return n.queue.push({k:e,end:n.tuto==="train"?this.w.t:o+Fv[e]}),n.tuto==="train"&&i.units.length+n.garrison.length+n.queue.length>=3&&this.tutoTo(t,"camp"),"ok"}armyCap(t){return this.isHuman(t)?Jn(this.w.villages[t].buildings,"caserne")>=3?zt.cap+4:zt.cap:zt.botCap}storage(t){return am(Jn(this.w.villages[t].buildings,"maison")||1)}collect(t,e){let n=this.w.villages[t],i=this.storage(t),s=0;for(let o of n.buildings){let a=Ce[o.kind].bed;if(!a||e!==void 0&&o.id!==e)continue;let l=Math.max(0,Math.min(Math.floor(o.store+1e-9),i[a.res]-Math.floor(n[a.res])));n[a.res]+=l,o.store-=l,s+=l}return s&&(n.full=!1),s}afford(t,e){return(e.crystal??0)<=t.crystal&&(e.mushroom??0)<=t.mushroom}spend(t,e,n=1){t.crystal-=n*(e.crystal??0),t.mushroom-=n*(e.mushroom??0)}bld(t,e){return this.w.villages[t]?.buildings.find(n=>n.id===e)}placeRefusal(t,e,n,i,s=-1){return vu(this.map,this.w.villages,t,e,n,i,this.w.deposits,s)}build(t,e,n,i){let s=this.w.villages[t],o=Ce[e].shop;if(!s||s.dead||!o)return"none";if(so(s.buildings,e)>=(o.max[Jn(s.buildings,"maison")]??0))return"max";let a=s.tuto==="tour"&&e==="tour"||s.tuto==="caserne"&&e==="caserne";if(!a&&ql(s.buildings)>=Xl)return"builders";if(!a&&!this.afford(s,o.cost))return"cost";let l=this.placeRefusal(t,e,n,i);if(l)return l;let c=s.nextId++;return a?(s.buildings.push({id:c,kind:e,x:n,z:i,level:1,busy:null,store:0}),this.tutoTo(t,e==="tour"?"band":"train"),c):(this.spend(s,o.cost),s.buildings.push({id:c,kind:e,x:n,z:i,level:1,busy:{what:"build",end:this.w.t+o.time,cost:o.cost},store:0}),c)}moveBld(t,e,n,i){let s=this.bld(t,e);if(!s||s.kind==="maison")return"none";let o=this.placeRefusal(t,s.kind,n,i,e);return o||(s.x=n,s.z=i,"ok")}upgrade(t,e){let n=this.w.villages[t],i=this.bld(t,e);if(!i||i.busy)return i?"busy":"none";let s=Ce[i.kind].up[i.level];return s?ql(n.buildings)>=Xl?"builders":this.afford(n,s.cost)?(this.spend(n,s.cost),i.busy={what:"up",end:this.w.t+s.time,cost:s.cost},"ok"):"cost":"max"}cancel(t,e){let n=this.w.villages[t],i=this.bld(t,e);return i?.busy?(this.spend(n,i.busy.cost,-1),i.busy.what==="build"?(n.buildings=n.buildings.filter(s=>s!==i),delete n.slots[`b${i.id}`]):i.busy=null,"ok"):"none"}plant(t,e,n){let i=this.w.villages[t],s=this.w.harvs[t];if(!i||s.state!=="home"||!s.carrying)return"none";let o=wu(s.load);if(i.buildings.filter(c=>Ce[c.kind].bed).length>=(yu[Jn(i.buildings,"maison")]??0))return"max";let a=this.placeRefusal(t,o,e,n);if(a)return a;let l=i.nextId++;return i.buildings.push({id:l,kind:o,x:e,z:n,level:1,busy:null,store:i.tuto==="plant"?60:0}),s.carrying=!1,i.tuto==="plant"&&this.tutoTo(t,"caserne"),l}wallRefusal(t,e,n){let i=this.w.villages[t];if(!i||i.dead||![e.x,e.z,n.x,n.z].every(Number.isFinite))return"none";let s=nm(i.walls,e,n,i.buildings.map(l=>({x:l.x,z:l.z,size:Ce[l.kind].size})),$l);if(s)return s;let o=ei(e,n),a=Math.max(1,Math.round(o/We.UNIT));if(em(i.walls)+a>(Jp[Jn(i.buildings,"maison")]??0))return"max";for(let l=0;l<=Math.ceil(o/.5);l++){let c=l/Math.ceil(o/.5),h=e.x+(n.x-e.x)*c,u=e.z+(n.z-e.z)*c,[d,f]=this.map.cell(h,u),m=this.map;if(d<0||f<0||d>=m.G||f>=m.G||m.grid[f*m.G+d]!==1)return"ground";if(this.w.deposits.some(x=>(x.x-h)*(x.x-h)+(x.z-u)*(x.z-u)<9))return"deposit"}return null}buildWall(t,e,n){let i=this.wallRefusal(t,e,n);if(i)return i;let s=this.w.villages[t],o=We.COST*Math.max(1,Math.round(ei(e,n)/We.UNIT));return s.crystal<o?"cost":(s.crystal-=o,im(s.walls,e,n))}wallUp(t,e,n){let i=this.w.villages[t];if(!i||i.dead)return"none";let s=(n?tm(i.walls,e):[e]).map(l=>i.walls.runs.find(c=>c.id===l)).filter(l=>l&&!l.gate&&l.level<We.HP.length-1);if(!s.length)return i.walls.runs.some(l=>l.id===e)?"max":"none";let o=s.reduce((l,c)=>l+Gl(i.walls,c),0),a=We.UP*o;if(i.crystal<a)return"cost";i.crystal-=a;for(let l of s)l.level++;return o}camp(t){return this.w.camps.find(e=>e.id===t)}seedOf(t,e){return(this.w.t%1000003*7919+(t+2)*131+(e+2)*17)%2147483646+1}villageInput(t,e,n){let i=this.w.villages[t],s=this.w.armies[t],o=i.buildings.map(h=>{let u=1+.25*(h.level-1),d=ao(i.slots[`b${h.id}`]),f=(h.kind==="tour"||h.kind==="mortier")&&!h.busy;return{id:h.id,kind:h.kind,x:h.x,z:h.z,size:Ce[h.kind].size,hp:Math.round(Ce[h.kind].hp*u),def:f?h.kind:void 0,mods:{dmg:(d.dmg??1)*u,hp:d.hp,range:d.range}}}),a=[...s.state==="home"?s.units.map(h=>({...h,tag:"army"})):[],...i.garrison.map(h=>({...h,tag:"garrison"}))],l=Qp(i.walls),c=i.walls.posts.map(h=>({x:h.x,z:h.z}));return{seed:this.seedOf(n,t),buildings:o,defenders:a,rally:this.gate(t),attackers:e.map(h=>({...h})),mods:{att:n>=0?Jl(this.w.villages[n].slots):void 0,def:Jl(i.slots)},...l.length?{walls:l,posts:c}:{}}}raidStart(t,e,n=-1){let i=this.w,s=i.armies[t];if(s.state!=="camp"||!s.units.length)return"none";if(n>=0){let a=this.camp(n);return!a||!a.up||s.camp!==n?"none":a.raidUntil>i.t&&a.raidBy!==t?"busy":this.pay(t,zt.energy.raid)?(a.raidBy=t,a.raidUntil=i.t+zt.raidLock,s.campUntil=Math.max(s.campUntil,a.raidUntil),s.battle={target:-1,camp:n,t0:i.t,input:pm(a,s.units,this.seedOf(t,-10-n),{att:Jl(i.villages[t].slots)})},"ok"):"energy"}let o=i.villages[e];return!o||s.target!==e||o.dead?"none":o.raidUntil>i.t&&o.raidBy!==t?"busy":o.shield>i.t?"shield":this.pay(t,zt.energy.raid)?(o.raidBy=t,o.raidUntil=i.t+zt.raidLock,s.campUntil=Math.max(s.campUntil,o.raidUntil),s.battle={target:e,camp:-1,t0:i.t,input:this.villageInput(e,s.units,t)},"ok"):"energy"}raidEnd(t,e,n){let i=this.w,s=i.armies[t],o=s.battle;if(!o)return!1;let a=e.filter(h=>h&&typeof h.t=="number").map(h=>({t:Math.max(0,Math.floor(h.t)),k:h.k,x:h.x,z:h.z})).sort((h,u)=>h.t-u.t),l=new Wr(o.input).run(a,n),c={input:o.input,drops:a,retreat:n,t0:o.t0};if(s.battle=null,o.camp>=0)this.settleCamp(t,o.camp,l);else{let h=i.villages[o.target];h.raidBy===t&&(h.raidBy=-1,h.raidUntil=0);let u=this.settleVillage(t,o.target,o.input,l),d=wn(l.lost,"troupe"),f=u.take.crystal+u.take.mushroom?` Butin : ${$r(u.take)}${u.rune?`, et ${lo(u.rune)}`:""}.`:"";this.report(t,u.fell?"good":s.units.length?"info":"bad",`Raid sur ${this.of(o.target)} : ${u.fell?`${this.houseOf(o.target)} est tomb\xE9e`:`${wn(l.down.length,"b\xE2timent")} d\xE9truit${l.down.length>1?"s":""}`}, ${wn(l.killed,"d\xE9fenseur")} ${l.killed>1?"sont tomb\xE9s":"est tomb\xE9"}, tu as perdu ${d}.${f}${s.units.length?" Les survivants rentrent.":""}`),this.report(o.target,u.fell||u.take.crystal+u.take.mushroom?"bad":"good",`${Xr(this.armyOf(t))} a attaqu\xE9 ton village : ${u.fell?"ta maison est tomb\xE9e":l.down.length?`${wn(l.down.length,"b\xE2timent")} touch\xE9${l.down.length>1?"s":""}`:"elle a \xE9t\xE9 repouss\xE9e"} (elle a perdu ${l.lost}, toi ${l.killed}).${u.take.crystal+u.take.mushroom?` Elle a pill\xE9 ${$r(u.take)}${u.rune?` et ${lo(u.rune)}`:""}.`:""}${u.fell&&!h.dead?` Ton village est prot\xE9g\xE9 par un bouclier pendant ${Cu(zt.shieldT)}.`:""}`,"attack",c)}return this.goHome(s),!0}settleVillage(t,e,n,i){let s=this.w,o=s.villages[e],a=s.armies[e];t>=0&&(s.armies[t].units=Mm(i.survivors));for(let d of["army","garrison"]){let f=n.defenders.map((g,p)=>g.tag===d?p:-1).filter(g=>g>=0),m=d==="army"?a.state==="home"?a.units:null:o.garrison;if(!m)continue;let x=[];m.forEach((g,p)=>{p>=f.length?x.push(g):i.defHp[f[p]]>0&&x.push({k:g.k,hp:i.defHp[f[p]]})}),d==="army"?a.units=x:o.garrison=x}let l=new Set(i.down),c={crystal:0,mushroom:0},h=o.buildings.some(d=>d.kind==="maison"&&l.has(d.id));for(let d of o.buildings){let f=Ce[d.kind].bed;if(f&&l.has(d.id)){let m=Math.floor(d.store+1e-9);c[f.res]+=m,d.store-=m}}let u=null;if(h){for(let d of["crystal","mushroom"]){let f=Math.floor(o[d]*zt.fallLoot);o[d]-=f,c[d]+=f}if(o.runes.length){let d=o.runes.reduce((f,m)=>m.rarity>f.rarity?m:f);o.runes=o.runes.filter(f=>f!==d),u=d}if(this.isHuman(e))o.shield=s.t+zt.shieldT;else{o.dead=!0,o.hp=0;let d=s.villages.filter(f=>!f.dead);d.length===1&&(s.winner=d[0].team)}}if(t>=0){let d=s.villages[t];d.crystal+=c.crystal,d.mushroom+=c.mushroom,u&&d.runes.push(u)}return{take:c,fell:h,rune:u}}settleCamp(t,e,n){let i=this.w,s=this.camp(e),o=i.armies[t],a=i.villages[t];o.units=Mm(n.survivors),s.guards=n.left.map(({k:f,hp:m})=>({k:f,hp:m}));let l=n.down.filter(f=>!s.down.includes(f));s.down.push(...l),s.raidBy=-1,s.raidUntil=0;let c=Yl[s.size].pieces,h=c.find(f=>f.kind==="coffre"),u="";if(l.includes(h.id)){if(a.crystal+=s.loot.crystal,a.mushroom+=s.loot.mushroom,u=` Le coffre est \xE0 toi : ${$r(s.loot)}`,s.loot={crystal:0,mushroom:0},s.rune){let f=_m(i.nextRune++,s.size,r.draw(i),r.draw(i));a.runes.push(f),s.rune=!1,u+=`, et ${lo(f)}`}u+="."}let d=c.every(f=>s.down.includes(f.id));d&&(s.up=!1,s.back=s.tuto>=0?0:i.t+dm),this.report(t,d||u?"good":o.units.length?"info":"bad",`Raid sur le camp de brigands : ${d?"le camp est ras\xE9":`${wn(l.length,"pi\xE8ce")} d\xE9truite${l.length>1?"s":""}`}, ${wn(n.killed,"brigand")} ${n.killed>1?"sont tomb\xE9s":"est tomb\xE9"}, tu as perdu ${wn(n.lost,"troupe")}.${u}${o.units.length?" Les survivants rentrent.":""}`),s.tuto===t&&a.tuto==="camp"&&(a.tuto="")}equip(t,e,n,i){let s=this.w.villages[t],o=s?.runes.findIndex(c=>c.id===e)??-1;if(!s||o<0)return"none";let a=s.runes[o];if(n.startsWith("b")){let c=s.buildings.find(h=>`b${h.id}`===n);if(!c||c.kind!=="tour"&&c.kind!=="mortier"||!xm.includes(a.stat))return"none"}else if(n!=="soldat"&&n!=="archere"&&n!=="veteran")return"none";if(!(i>=0&&i<bm(n)))return"none";let l=s.slots[n]??[];return i<l.length?l[i]=a:l.push(a),s.slots[n]=l,s.runes.splice(o,1),"ok"}tutoTo(t,e){let n=this.w,i=n.villages[t];if(e==="caserne"&&so(i.buildings,"caserne")&&(e="train"),i.tuto=e,e==="band"){let s=n.sites?.tutoCamp[t]??this.map.tutoCamp[t]??{x:i.x+110,z:i.z-40},o=this.mission("attack",s,this.gate(t),zt.armySpeed*1.6,t);o?n.bands.push({target:t,units:[{k:"brigand",hp:80},{k:"brigand",hp:80},{k:"brigand",hp:80}],mission:o}):i.tuto="harv"}if(e==="harv"){let s=n.sites?.tutoDep[t]??this.map.tutoDep[t]??{x:i.x-50,z:i.z-10};n.deposits.push({x:s.x,z:s.z,present:!0,back:0,kind:"crystal",tuto:t})}if(e==="camp"){let s=n.sites?.tutoCamp[t]??this.map.tutoCamp[t]??{x:i.x+110,z:i.z-40};n.camps.push(Kl(Math.max(0,...n.camps.map(o=>o.id))+1,s.x,s.z,"petit",!0,t))}}bandArrives(t){let e=this.w,n=this.villageInput(t.target,t.units,-1),i=Eu(n,this.gate(t.target)),s=new Wr(n).run(i),o=this.settleVillage(-1,t.target,n,s),a=!s.survivors.length;this.report(t.target,a?"good":"bad",`Des brigands ont attaqu\xE9 ton village : ${a?"ils ont \xE9t\xE9 repouss\xE9s":`ils ont pill\xE9 ${$r(o.take)}`} (ils ont perdu ${s.lost}, toi ${s.killed}).`,"attack",{input:n,drops:i,retreat:-1,t0:e.t}),e.villages[t.target].tuto==="band"&&this.tutoTo(t.target,"harv")}advance(t){for(this.frac+=t;this.frac>=1;)this.frac-=1,this.step()}advanceTo(t){for(;this.w.t+1<=t;)this.step();this.frac=Math.max(0,Math.min(.999,t-this.w.t))}static forecast(t,e,n){let i=new r(t,JSON.parse(JSON.stringify(e))),s=[];i.onReport=a=>{a.note&&s.push({team:a.team,t:a.t,note:a.note,text:a.text})};let o=i.w.t+n;for(;i.w.t<o;)i.step();return s}step(){let t=this.w;t.t+=1,t.camps.length||r.seedCamps(this.map,t);for(let e of t.villages){if(e.dead)continue;e.energy=Math.min(zt.energy.max,e.energy+zt.energy.perHour/3600);for(let i of e.buildings){let s=Ce[i.kind].bed;if(s&&(i.store=Math.min(s.cap,i.store+s.rate/3600),i.store>=s.cap&&!e.full&&(e.full=!0,this.report(e.team,"info","Tes parterres sont pleins : viens ramasser leur r\xE9colte.","full"))),i.busy&&i.busy.end<=t.t){let o=i.busy.what==="up";o&&i.level++,i.busy=null,this.report(e.team,"good",o?`${wm[i.kind]} passe au niveau ${i.level}.`:`${wm[i.kind]} est ${i.kind==="mortier"?"construit":"construite"}.`,"build")}}let n=!1;for(;e.queue.length&&e.queue[0].end<=t.t;){let i=e.queue.shift(),s=t.armies[e.team],o={k:i.k,hp:Ql[i.k].hp};s.state==="home"?s.units.push(o):e.garrison.push(o),n=!0}if(n&&!e.queue.length){let i=t.armies[e.team],s=(i.state==="home"?i.units.length:0)+e.garrison.length;this.report(e.team,"good",`Tes troupes sont form\xE9es : ${wn(s,"troupe")} t\u2019attendent au village.`,"train")}}for(let e of t.deposits)!e.present&&e.back>0&&t.t>=e.back&&(e.present=!0,e.back=0);for(let e of t.armies)this.stepArmy(e);for(let e of t.harvs)this.stepHarv(e);for(let e of t.bands.slice())t.t-e.mission.t0>=e.mission.total&&!this.locked(e.target)&&(t.bands.splice(t.bands.indexOf(e),1),this.bandArrives(e));for(let e of t.camps)!e.up&&e.back>0&&t.t>=e.back&&this.campBack(e);this.meetings(),this.bots()}campBack(t){let e=this.w,n=e.sites?.camps??this.map.camps,i=Math.floor(r.draw(e)*n.length);for(let s=0;s<n.length;s++){let o=n[(i+s)%n.length];if(!e.camps.some(a=>a.up&&ei(a,o)<300)){Object.assign(t,Kl(t.id,o.x,o.z,t.size,r.draw(e)*100<Tu[t.size]));return}}t.back=e.t+3600}stepArmy(t){let e=this.w;if(t.state==="camp"&&e.t>t.campUntil&&(t.battle?this.report(t.team,"info","Le raid n\u2019a pas \xE9t\xE9 termin\xE9 \xE0 temps : ton arm\xE9e s\u2019est retir\xE9e sans combattre et rentre.","army"):this.isHuman(t.team)&&this.report(t.team,"info","Ton arm\xE9e a lev\xE9 le camp et rentre : le raid n\u2019a pas \xE9t\xE9 lanc\xE9 dans l\u2019heure.","army"),this.goHome(t)),t.state==="camp"&&!this.isHuman(t.team)&&t.target>=0&&t.camp<0&&!t.mission&&!this.locked(t.target)&&e.villages[t.target]&&!e.villages[t.target].dead){this.autoRaid(t,t.target);return}if(!t.mission)return;let n=Ru(t.mission,e.t);if(t.at=n.p,!n.done||t.mission.kind==="home"&&this.locked(t.team))return;let i=t.mission;t.mission=null;let s=e.villages[t.team];if(i.kind==="home")t.state="home",t.target=-1,t.units.push(...s.garrison),s.garrison=[],this.report(t.team,"info","Ton arm\xE9e est rentr\xE9e au village.","army");else if(i.kind==="attack"&&t.camp>=0){let o=this.camp(t.camp);!o||!o.up?(this.report(t.team,"info","Le camp de brigands a \xE9t\xE9 ras\xE9 avant ton arriv\xE9e : ton arm\xE9e rentre.","army"),this.goHome(t)):this.isHuman(t.team)?(t.state="camp",t.campUntil=e.t+zt.campT,this.report(t.team,"info","Ton arm\xE9e campe devant le camp de brigands : lance le raid dans l\u2019heure.","army")):this.goHome(t)}else if(i.kind==="attack"){let o=e.villages[i.target];!o||o.dead?(this.report(t.team,"info","Il n\u2019y a plus rien \xE0 attaquer : ton arm\xE9e rentre.","army"),this.goHome(t)):o.shield>e.t?(this.report(t.team,"info",`${Xr(this.of(i.target))} est prot\xE9g\xE9 par un bouclier : ton arm\xE9e rentre.`,"army"),this.goHome(t)):this.isHuman(t.team)?(t.state="camp",t.target=i.target,t.campUntil=e.t+zt.campT,this.report(t.team,"info",`Ton arm\xE9e campe devant ${this.of(i.target)} : lance le raid dans l\u2019heure.`,"army"),this.report(i.target,"bad",`${Xr(this.armyOf(t.team))} campe devant ton village : le raid peut partir \xE0 tout moment.`,"attack")):this.locked(i.target)?(t.state="camp",t.target=i.target,t.campUntil=e.villages[i.target].raidUntil+600):this.autoRaid(t,i.target)}else t.state="idle",this.report(t.team,"info","Ton arm\xE9e est arriv\xE9e.","army")}stepHarv(t){let e=this.w;if(t.state==="dig"){if(e.t<t.digEnd)return;let a=e.deposits[t.dep];a&&a.present?(a.present=!1,a.back=a.tuto!==void 0?0:e.t+zt.respawn,t.carrying=!0,t.load=a.kind):this.report(t.team,"bad","Le gisement avait d\xE9j\xE0 \xE9t\xE9 pris : le r\xE9colteur rentre les mains vides.");let l=e.villages[t.team],c=this.mission("back",t.at,{x:l.x+2.2,z:l.z+4.4},t.carrying?zt.loadedSpeed:zt.harvSpeed);c&&(t.mission=c,t.state="back");return}if(!t.mission)return;let n=Ru(t.mission,e.t);if(t.at=n.p,!n.done)return;let i=t.mission;if(t.mission=null,i.kind==="harvest"){t.state="dig",t.digEnd=e.t+(e.deposits[t.dep]?.tuto!==void 0?15:zt.digT);return}t.state="home";let s=e.villages[t.team],o=t.load==="crystal"?"de cristal":"de champignons";t.carrying&&s.tuto==="harv"&&(s.tuto="plant"),t.carrying?s.buildings.filter(a=>Ce[a.kind].bed).length<(yu[Jn(s.buildings,"maison")]??0)?this.report(t.team,"good",`Le r\xE9colteur a rapport\xE9 un gisement ${o} : viens choisir o\xF9 le planter.`,"harv"):(t.carrying=!1,s[t.load]+=zt.load,this.report(t.team,"good",`Le r\xE9colteur a rapport\xE9 ${zt.load} ${t.load==="crystal"?"cristal":"champignons"} (le village n\u2019a plus de place pour un parterre).`,"harv")):this.report(t.team,"info","Ton r\xE9colteur est rentr\xE9 au village, les mains vides.","harv")}static fight(t,e,n=240){let i={veteran:0,soldat:1,archere:2},s=(o,a)=>{for(o.sort((l,c)=>i[l.k]-i[c.k]);a>0&&o.length;){let l=o[0],c=Math.min(l.hp,a);l.hp-=c,a-=c,l.hp<=0&&o.shift()}};for(let o=0;o<n&&t.length&&e.length;o++){let a=t.reduce((c,h)=>c+Ql[h.k].dps,0),l=e.reduce((c,h)=>c+Ql[h.k].dps,0);s(e,a),s(t,l)}}meetings(){let t=this.w,e=t.armies,n=i=>i.state!=="home"&&i.units.length>0&&!i.battle;for(let i=0;i<e.length;i++)for(let s=i+1;s<e.length;s++){let o=e[i],a=e[s];if(!n(o)||!n(a)||ei(o.at,a.at)>=zt.meet)continue;let l=o.units.length,c=a.units.length;r.fight(o.units,a.units);let h=l-o.units.length,u=c-a.units.length;for(let[d,f,m,x]of[[o,a,h,u],[a,o,u,h]])this.report(d.team,d.units.length?"good":"bad",`Combat en chemin contre ${this.armyOf(f.team)} : tu as perdu ${wn(m,"troupe")}, elle ${x}.${d.units.length?"":" Il ne reste rien de ton arm\xE9e."}`,"army");for(let d of[o,a])d.units.length||(d.mission=null,d.state="home",d.target=-1,d.camp=-1,d.battle=null,this.release(d.team),d.at=this.gate(d.team))}for(let i of e)if(n(i))for(let s of t.harvs)s.team===i.team||!s.carrying||s.state==="home"||ei(i.at,s.at)>=zt.meet||(s.carrying=!1,t.villages[i.team][s.load]+=zt.load,this.report(i.team,"good",`Ton arm\xE9e a pris le chargement ${this.harvOf(s.team).replace(/^le /,"du ")} : +${zt.load} ${s.load==="crystal"?"cristal":"champignons"}.`,"army"),this.report(s.team,"bad",`${Xr(this.armyOf(i.team))} a pris le chargement de ton r\xE9colteur.`,"attack"))}autoRaid(t,e){let n=this.w,i=this.villageInput(e,t.units,t.team),s=Eu(i,this.gate(e)),o=t.units.length,a=new Wr(i).run(s),l=this.settleVillage(t.team,e,i,a),c=n.villages[e],h=`${Xr(this.of(t.team))} t\u2019a attaqu\xE9 avec ${wn(o,"troupe")} : tu as perdu ${a.killed}, il en a perdu ${a.lost}.`;l.fell?h+=` Ta maison est tomb\xE9e : il a pill\xE9 ${$r(l.take)}${l.rune?` et ${lo(l.rune)}`:""}.${c.dead?"":` Ton village est prot\xE9g\xE9 par un bouclier pendant ${Cu(zt.shieldT)}.`}`:l.take.crystal+l.take.mushroom?h+=` Il a pill\xE9 ${$r(l.take)} dans tes parterres.`:h+=" Il a \xE9t\xE9 repouss\xE9.",this.report(e,l.fell||l.take.crystal+l.take.mushroom?"bad":"good",h,"attack",{input:i,drops:s,retreat:-1,t0:n.t}),this.goHome(t)}bots(){let t=this.w;for(let e of t.villages){if(e.owner||e.dead)continue;let n=e.team,i=t.armies[n],s=t.harvs[n];if(this.collect(n),s.state==="home"&&s.carrying){let a=Mu(this.map,t.villages,n,wu(s.load),t.deposits);(!a||this.plant(n,a.x,a.z)==="max")&&(s.carrying=!1,e[s.load]+=zt.load)}if(s.state==="home"&&!s.carrying){let a=u=>so(e.buildings,u),l=a("cristal")<=a("champignons")?"crystal":"mushroom",c=new Set(t.harvs.filter(u=>u.team!==n&&u.state!=="home").map(u=>u.dep)),h=t.deposits.map((u,d)=>({d:u,i:d})).filter(({d:u,i:d})=>u.present&&u.tuto===void 0&&!c.has(d)).sort((u,d)=>(u.d.kind===l?0:1)-(d.d.kind===l?0:1)||ei(u.d,e)-ei(d.d,e));h.length&&this.sendHarv(n,"harvest",h[0].i)}for(let a of["caserne","tour","mortier"]){let l=Ce[a].shop;if(!(so(e.buildings,a)>=(l.max[Jn(e.buildings,"maison")]??0))){if(this.afford(e,l.cost)&&ql(e.buildings)<Xl){let c=Mu(this.map,t.villages,n,a,t.deposits);c&&this.build(n,a,c.x,c.z)}break}}for(;this.train(n,(i.units.length+e.garrison.length+e.queue.length)%3===2?"archere":"soldat")==="ok";);let o=t.nextAttack[n]===zt.bot.firstAttack;if(i.state==="home"&&t.t>t.nextAttack[n]&&i.units.length>=(o?zt.bot.firstWave:zt.bot.minArmy)){let a=this.foes(n).find(l=>this.isHuman(l)&&t.villages[l].shield<=t.t);if(a!==void 0){let l=o?i.units.splice(zt.bot.firstWave):[],c=this.sendArmy(n,"attack",this.gate(a),a);c&&typeof c!="string"?e.garrison.push(...l):i.units.push(...l)}t.nextAttack[n]=t.t+zt.bot.every}i.state==="move"&&i.mission?.kind==="attack"&&t.armies.some(a=>a.state==="camp"&&a.target===n)&&this.sendArmy(n,"home",this.gate(n))}}};var Hv=globalThis.__PLANETOID_NET,xi=Hv??{url:"https://dlmtrkljlhyvnihvndzj.supabase.co",key:"sb_publishable_WzVrlKPDEvHbO5XnKrGW0g_uFE4zUe5"};var Tm="planetoid-cle",Iu="planetoid-partie",Ki={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,t){try{localStorage.setItem(r,t)}catch{}},del(r){try{localStorage.removeItem(r)}catch{}}},Vv=r=>btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function jS(){let r=Ki.get(Tm);return(!r||r.length<20)&&(r=Vv(crypto.getRandomValues(new Uint8Array(32))),Ki.set(Tm,r)),r}async function tE(r){return"p"+[...new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(r))).slice(0,8)].map(e=>e.toString(16).padStart(2,"0")).join("")}var eE=()=>{try{let r=Ki.get(Iu);return r?JSON.parse(r):null}catch{return null}},nE=r=>Ki.set(Iu,JSON.stringify(r)),iE=()=>Ki.del(Iu),rE=()=>Ki.get("planetoid-nom")??"",sE=r=>Ki.set("planetoid-nom",r),oE=()=>!!xi.url&&!!xi.key;function Gv(r){return/unknown game/.test(r)?"Aucune partie avec ce code.":/game full/.test(r)?"La partie est compl\xE8te.":/bad name/.test(r)?"Choisis un nom (24 lettres au plus).":/not a player/.test(r)?"Ce t\xE9l\xE9phone ne fait plus partie de cette partie : rejoins-la avec ton nom.":/only the creator/.test(r)?"Seul le cr\xE9ateur de la partie peut la lancer.":r}async function Un(r,t={}){let e={apikey:xi.key,"Content-Type":"application/json"};xi.key.startsWith("sb_")||(e.Authorization=`Bearer ${xi.key}`);let n;try{n=await fetch(`${xi.url}/rest/v1/rpc/${r}`,{method:"POST",headers:e,body:JSON.stringify(t)})}catch{throw new Error("Pas de connexion au serveur.")}let i=await n.text();if(!n.ok){let s=i;try{s=JSON.parse(i).message??i}catch{}throw new Error(Gv(s))}return i?JSON.parse(i):null}var aE=(r,t,e)=>Un("planetoid_join",{p_secret:r,p_code:t,p_name:e}),lE=(r,t,e,n)=>Un("planetoid_open",{p_secret:r,p_name:t,p_seed:e,p_seats:n,p_state:{v:4,villages:[]}}),cE=(r,t)=>Un("planetoid_lobby",{p_secret:r,p_game:t}),hE=(r,t,e)=>Un("planetoid_launch",{p_secret:r,p_game:t,p_state:e}),Am=class{constructor(t,e){Tt(this,"key",t);Tt(this,"game",e)}async load(){let t=await Un("planetoid_state",{p_secret:this.key,p_game:this.game});return{version:t.version,state:t.state,startedAt:t.startedAt,now:t.now,players:t.players}}poll(){return Un("planetoid_poll",{p_secret:this.key,p_game:this.game})}commit(t,e,n){return Un("planetoid_commit",{p_secret:this.key,p_game:this.game,p_version:t,p_state:e,p_notes:n})}},Wv=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,Xv=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;async function $v(){if(!("serviceWorker"in navigator)||!("PushManager"in window)||!("Notification"in window))return Xv()&&!Wv()?"install":"unsupported";if(Notification.permission==="denied")return"denied";let r=await navigator.serviceWorker.getRegistration();return(r?await r.pushManager.getSubscription():null)&&Notification.permission==="granted"?"on":"off"}function qv(r){let t=atob(r.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((r.length+3)%4));return Uint8Array.from(t,e=>e.charCodeAt(0))}async function uE(r){let t=await $v();if(t==="install"||t==="unsupported"||t==="denied")return t;if(await Notification.requestPermission()!=="granted")return Notification.permission==="denied"?"denied":"off";let e=await Un("planetoid_vapid");if(!e&&(await fetch(`${xi.url}/functions/v1/planetoid-push`,{method:"POST",mode:"no-cors"}).catch(()=>null),e=await Un("planetoid_vapid"),!e))throw new Error("Le serveur des notifications ne r\xE9pond pas encore.");let n=await navigator.serviceWorker.ready,i=await n.pushManager.getSubscription();i||(i=await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qv(e)}));let s=i.toJSON();return await Un("planetoid_subscribe",{p_secret:r,p_endpoint:s.endpoint,p_p256dh:s.keys.p256dh,p_auth:s.keys.auth}),"on"}export{Tt as a,on as b,nc as c,$m as d,zM as e,FM as f,NM as g,BM as h,OM as i,HM as j,VM as k,GM as l,WM as m,qM as n,yh as o,Wn as p,Ve as q,Ln as r,Zn as s,Ai as t,vh as u,Kd as v,ci as w,ef as x,of as y,lf as z,xf as A,bf as B,_f as C,yf as D,vf as E,Mf as F,wf as G,qo as H,li as I,Zo as J,$e as K,Ef as L,Vs as M,bn as N,za as O,di as P,vn as Q,Lr as R,Dr as S,nn as T,Ur as U,Ph as V,Tf as W,hs as X,Yo as Y,Dh as Z,_l as _,Oe as $,Ci as aa,ae as ba,ig as ca,rg as da,ve as ea,Q as fa,Ue as ga,L as ha,te as ia,ke as ja,In as ka,_n as la,cn as ma,qt as na,qe as oa,ye as pa,St as qa,tn as ra,Pi as sa,he as ta,Vt as ua,ue as va,He as wa,Mr as xa,Gf as ya,hn as za,De as Aa,Tn as Ba,zc as Ca,Fc as Da,_s as Ea,Sr as Fa,na as Ga,Nc as Ha,Bc as Ia,ia as Ja,ys as Ka,Oc as La,Er as Ma,Tr as Na,En as Oa,ra as Pa,vs as Qa,Hc as Ra,Vc as Sa,aa as Ta,Wc as Ua,Ms as Va,ws as Wa,Xc as Xa,Ze as Ya,$c as Za,qc as _a,Cr as $a,pa as ab,Ds as bb,Ui as cb,Us as db,Qc as eb,ma as fb,jc as gb,Xn as hb,th as ib,eh as jb,nh as kb,ki as lb,zi as mb,Fi as nb,Ni as ob,Fs as pb,ui as qb,rh as rb,Ns as sb,sh as tb,ah as ub,ch as vb,Os as wb,uh as xb,dh as yb,fh as zb,ph as Ab,pe as Bb,gh as Cb,xh as Db,Yt as Eb,wl as Fb,yp as Gb,we as Hb,Mn as Ib,sS as Jb,ou as Kb,Rp as Lb,gS as Mb,js as Nb,MS as Ob,Op as Pb,bv as Qb,dn as Rb,qp as Sb,Kp as Tb,We as Ub,Jp as Vb,Gl as Wb,tm as Xb,em as Yb,Ce as Zb,Xl as _b,$l as $b,Rv as ac,Jn as bc,so as cc,ql as dc,Iv as ec,Wr as fc,Yl as gc,fm as hc,gm as ic,Uv as jc,kv as kc,bm as lc,Ql as mc,Em as nc,Fv as oc,Nv as pc,Au as qc,zt as rc,Bv as sc,Ov as tc,Ru as uc,ZS as vc,Sm as wc,jS as xc,tE as yc,eE as zc,nE as Ac,iE as Bc,rE as Cc,sE as Dc,oE as Ec,aE as Fc,lE as Gc,cE as Hc,hE as Ic,Am as Jc,$v as Kc,uE as Lc};
