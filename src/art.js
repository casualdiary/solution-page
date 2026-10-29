/* SVG media. Gradients live only inside media, never on chrome. */
let _gid=0;const gid=()=> 'g'+(++_gid);
function cafePoster(o={}){const c=Object.assign({bg:'#F3E7D3',ink:'#2B2420',acc:'#C8873F',kicker:'KOPI TEDUH',title:'Weekend set lunch',sub:'Sat–Sun · 11am–3pm',price:'$8.90'},o);const g=gid();
return `<svg viewBox="0 0 300 400" class="art" role="img" aria-label="${esc(c.title)} poster"><defs><radialGradient id="${g}" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="${c.acc}" stop-opacity=".35"/><stop offset="1" stop-color="${c.acc}" stop-opacity="0"/></radialGradient></defs>
<rect width="300" height="400" fill="${c.bg}"/><rect x="20" y="20" width="56" height="56" rx="6" fill="none" stroke="${c.ink}" stroke-dasharray="4 4" opacity=".35"/><text x="48" y="52" font-size="9" text-anchor="middle" fill="${c.ink}" opacity=".5" font-family="Inter">LOGO</text>
<text x="280" y="40" font-size="10" text-anchor="end" letter-spacing="2" fill="${c.ink}" font-family="Inter" font-weight="700">${c.kicker}</text>
<circle cx="150" cy="190" r="110" fill="url(#${g})"/><ellipse cx="150" cy="222" rx="78" ry="16" fill="${c.ink}" opacity=".12"/><path d="M80 180h140a70 46 0 0 1-140 0z" fill="${c.ink}"/><ellipse cx="150" cy="180" rx="70" ry="13" fill="${c.acc}"/><circle cx="130" cy="176" r="9" fill="#E9D9B8"/><circle cx="160" cy="174" r="7" fill="#7E9B5B"/><circle cx="174" cy="182" r="6" fill="#E9D9B8"/>
${wrapText(c.title,13).map((l,i,a)=>`<text x="20" y="${298-(a.length-1-i)*32}" font-size="31" font-weight="800" fill="${c.ink}" font-family="Inter" letter-spacing="-1.1">${esc(l)}</text>`).join('')}<text x="20" y="326" font-size="13" fill="${c.ink}" opacity=".7" font-family="Inter">${esc(c.sub)}</text>
<rect x="20" y="350" width="96" height="32" rx="16" fill="${c.ink}"/><text x="68" y="371" font-size="15" font-weight="700" text-anchor="middle" fill="${c.bg}" font-family="Inter">${esc(c.price)}</text></svg>`}
const SCENES={
 studio:{name:'Studio white',bg:['#FFFFFF','#ECEEF1'],floor:'#E3E6EA'},
 marble:{name:'Marble',bg:['#F4F1EC','#DCD6CD'],floor:'#CFC7BB',veins:true},
 cafe:{name:'Morning café',bg:['#E8C9A0','#8C5A3C'],floor:'#6B4430',window:true},
 pastel:{name:'Pastel podium',bg:['#F5DCE3','#E6D5F2'],floor:'#F0C9D4',podium:true},
 cutout:{name:'Background removed',cut:true}
};
function serum(scene='studio',o={}){const s=SCENES[scene];const g=gid();const lbl=o.label||'VELA';
const bg=s.cut?`<pattern id="${g}c" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#fff"/><rect width="8" height="8" fill="#ECEEF1"/><rect x="8" y="8" width="8" height="8" fill="#ECEEF1"/></pattern>`:`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.bg[0]}"/><stop offset="1" stop-color="${s.bg[1]}"/></linearGradient>`;
return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" class="art" role="img" aria-label="Serum bottle, ${s.name}"><defs>${bg}<linearGradient id="${g}b" x1="0" x2="1"><stop offset="0" stop-color="#C9A97A"/><stop offset=".45" stop-color="#F1DDB8"/><stop offset="1" stop-color="#A9844F"/></linearGradient></defs>
<rect width="400" height="400" fill="url(#${g}${s.cut?'c':''})"/>
${s.window?'<rect x="250" y="30" width="110" height="170" fill="#FFF4DE" opacity=".55"/><path d="M305 30v170M250 115h110" stroke="#8C5A3C" stroke-width="6" opacity=".5"/>':''}
${s.veins?'<path d="M0 90 C80 70 120 140 220 110 S340 60 400 100M30 0 C70 80 40 160 110 230" stroke="#BDB3A6" stroke-width="1.5" fill="none" opacity=".7"/>':''}
${s.cut?'':`<rect y="300" width="400" height="100" fill="${s.floor}"/>`}
${s.podium?'<ellipse cx="200" cy="318" rx="110" ry="22" fill="#fff" opacity=".85"/><rect x="90" y="318" width="220" height="60" fill="#fff" opacity=".85"/><ellipse cx="200" cy="378" rx="110" ry="22" fill="#F7E4EA"/>':''}
${s.cut?'':'<ellipse cx="200" cy="312" rx="62" ry="9" fill="#000" opacity=".16"/>'}
<rect x="160" y="150" width="80" height="160" rx="18" fill="url(#${g}b)"/><rect x="160" y="150" width="80" height="160" rx="18" fill="none" stroke="#000" stroke-opacity=".08"/>
<rect x="176" y="96" width="48" height="58" rx="8" fill="#2B2420"/><rect x="186" y="62" width="28" height="40" rx="14" fill="#3A302A"/>
<rect x="172" y="212" width="56" height="58" rx="3" fill="#FBF6EE" opacity=".92"/><text x="200" y="236" font-size="13" font-weight="800" text-anchor="middle" fill="#2B2420" font-family="Inter" letter-spacing="2">${lbl}</text><text x="200" y="254" font-size="7" text-anchor="middle" fill="#2B2420" opacity=".7" font-family="Inter">NIACINAMIDE 10%</text>
<rect x="168" y="160" width="10" height="130" rx="5" fill="#fff" opacity=".35"/></svg>`}
function lum(h){const n=parseInt(h.slice(1),16);return (0.299*(n>>16)+0.587*((n>>8)&255)+0.114*(n&255))/255}
function cover(o){const c=Object.assign({bg:'#1E2430',acc:'#E8604C',title:'3 grinder upgrades under $50',tag:'EP 42',ratio:'9/16'},o);const [w,h]=c.ratio.split('/').map(Number);const W=180,H=Math.round(W*h/w);const m=Math.min(W,H);const tx=lum(c.bg)>.6?'#171A1F':'#FFFFFF';const tall=H>W*1.2;
const cx=W*0.68,cy=tall?H*0.34:H*0.4,r=m*(tall?0.34:0.26);const lines=wrapText(c.title,tall?16:W>H?26:18);const fs=tall?17:W>H?12:13;
return `<svg viewBox="0 0 ${W} ${H}" class="art" role="img" aria-label="Cover: ${esc(c.title)}"><rect width="${W}" height="${H}" fill="${c.bg}"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="${c.acc}"/><rect x="${cx-r*0.4}" y="${cy-r*0.55}" width="${r*0.8}" height="${r*1.1}" rx="${r*0.1}" fill="#F5F0E6"/><rect x="${cx-r*0.22}" y="${cy-r*0.72}" width="${r*0.44}" height="${r*0.22}" rx="${r*0.05}" fill="#2B2420"/>
<text x="12" y="20" font-size="8" font-weight="700" fill="${tx}" opacity=".7" font-family="Inter" letter-spacing="1.5">${c.tag}</text>
${lines.map((l,i,a)=>`<text x="12" y="${H-12-(a.length-1-i)*(fs*1.2)}" font-size="${fs}" font-weight="800" fill="${tx}" font-family="Inter" letter-spacing="-.4">${esc(l)}</text>`).join('')}</svg>`}
function wrapText(t,n){const w=t.split(' ');const out=[];let l='';w.forEach(x=>{if((l+' '+x).trim().length>n){out.push(l.trim());l=x}else l+=' '+x});out.push(l.trim());return out}
const BRANDS={
 halden:{name:'Halden Coffee',type:'Specialty coffee',bg:'#F3E7D3',ink:'#2B2420',acc:'#B5652B',font:'Georgia, serif',mark:'H',voice:'Warm, craft-led'},
 north:{name:'Northwind Fitness',type:'Fitness app',bg:'#0F1A2B',ink:'#F4F7FB',acc:'#C6F432',font:'Inter',mark:'N',voice:'Energetic, direct'},
 vela:{name:'Vela Skincare',type:'Premium skincare',bg:'#F6EEEA',ink:'#4A3B36',acc:'#D9A6A0',font:'Georgia, serif',mark:'V',voice:'Refined, natural'},
 generic:{name:'No brand kit',type:'',bg:'#FFFFFF',ink:'#3A3A3A',acc:'#7E7E7E',font:'Arial, sans-serif',mark:'?',voice:''}
};
function brandPost(k,o={}){const b=BRANDS[k];const c=Object.assign({title:'Autumn is here',sub:'New season, new ritual.',ratio:'1/1'},o);const [w,h]=c.ratio.split('/').map(Number);const W=240,H=Math.round(W*h/w);const big=Math.min(W,H);
return `<svg viewBox="0 0 ${W} ${H}" class="art" role="img" aria-label="${esc(b.name)}: ${esc(c.title)}"><rect width="${W}" height="${H}" fill="${b.bg}"/><circle cx="${W-big*0.3}" cy="${H>W*1.2?H*0.36:big*0.38}" r="${big*0.25}" fill="${b.acc}"/><rect x="${W-big*0.3-big*0.1}" y="${(H>W*1.2?H*0.36:big*0.38)-big*0.13}" width="${big*0.2}" height="${big*0.26}" rx="${big*0.035}" fill="${b.ink}" opacity=".9"/>
<g transform="translate(14 14)"><rect width="22" height="22" rx="${k==='north'?4:11}" fill="${b.ink}"/><text x="11" y="15.5" font-size="12" font-weight="700" text-anchor="middle" fill="${b.bg}" font-family="${b.font}">${b.mark}</text><text x="30" y="15" font-size="9" font-weight="600" fill="${b.ink}" font-family="${b.font}" opacity=".85">${esc(b.name)}</text></g>
${wrapText(c.title,W>H?18:12).map((l,i,a)=>`<text x="14" y="${H-34-(a.length-1-i)*(big*0.13)}" font-size="${big*0.12}" font-weight="700" fill="${b.ink}" font-family="${b.font}" letter-spacing="-.5">${esc(l)}</text>`).join('')}
<text x="14" y="${H-16}" font-size="${Math.max(8,big*0.045)}" fill="${b.ink}" opacity=".7" font-family="Inter">${esc(c.sub)}</text></svg>`}
const DECKS={
 cinematic:{name:'Cinematic Pitch Deck',d:'Film-grade investor story with full-bleed visuals.',bg:'#0E1013',ink:'#F5F0E6',acc:'#E07A3F'},
 founder:{name:'Founder Vision Narrative',d:'Mission-led story with human-centred scenes.',bg:'#F5F0E6',ink:'#1E1B18',acc:'#3E6B57'},
 bold:{name:'Bold Startup Story',d:'High-energy product narrative with vivid visuals.',bg:'#2F3CF5',ink:'#FFFFFF',acc:'#FFD84D'},
 data:{name:'Data-Driven Briefing',d:'Executive story with charts and evidence.',bg:'#FFFFFF',ink:'#171A1F',acc:'#00737D'},
 clean:{name:'Clean Product Showcase',d:'Product-led pages with a clear value proposition.',bg:'#EEF0F2',ink:'#171A1F',acc:'#E8604C'}
};
function slide(k,o={}){const d=DECKS[k];const c=Object.assign({name:'Loop',title:'Invoices that chase themselves',n:'01'},o);
const vis={cinematic:`<rect x="190" y="0" width="130" height="180" fill="${d.acc}" opacity=".85"/><circle cx="255" cy="80" r="40" fill="${d.bg}" opacity=".5"/>`,
 founder:`<circle cx="250" cy="90" r="52" fill="${d.acc}"/><circle cx="250" cy="76" r="16" fill="${d.bg}"/><path d="M222 126a28 26 0 0 1 56 0" fill="${d.bg}"/>`,
 bold:`<rect x="200" y="30" width="96" height="120" rx="14" fill="${d.acc}" transform="rotate(8 248 90)"/><rect x="214" y="48" width="68" height="84" rx="6" fill="${d.bg}" transform="rotate(8 248 90)"/>`,
 data:`${[40,62,52,88,110].map((h,i)=>`<rect x="${200+i*22}" y="${150-h}" width="14" height="${h}" fill="${i===4?d.acc:'#C9CED3'}"/>`).join('')}<path d="M196 150h118" stroke="#9BA1A9"/>`,
 clean:`<rect x="196" y="36" width="108" height="108" rx="12" fill="#fff"/><rect x="212" y="54" width="76" height="10" rx="3" fill="${d.acc}"/><rect x="212" y="72" width="56" height="6" rx="3" fill="#C9CED3"/><rect x="212" y="84" width="64" height="6" rx="3" fill="#C9CED3"/><rect x="212" y="110" width="40" height="18" rx="5" fill="${d.ink}"/>`}[k];
return `<svg viewBox="0 0 320 180" class="art" role="img" aria-label="${d.name} slide"><rect width="320" height="180" fill="${d.bg}"/>${vis}<text x="18" y="26" font-size="8" font-weight="700" fill="${d.ink}" opacity=".6" font-family="Inter" letter-spacing="1.5">${esc(c.name.toUpperCase())} · ${c.n}</text>${wrapText(c.title,c.title.length>30?20:16).map((l,i)=>`<text x="18" y="${(c.title.length>30?62:72)+i*(c.title.length>30?20:24)}" font-size="${c.title.length>30?16:(k==='cinematic'?21:20)}" font-weight="${k==='founder'?600:800}" fill="${d.ink}" font-family="${k==='founder'||k==='cinematic'?'Georgia, serif':'Inter'}" letter-spacing="-.6">${esc(l)}</text>`).join('')}<rect x="18" y="150" width="40" height="3" fill="${d.acc}"/></svg>`}
const HUB_ART={
 'small-business':`<div class="art-frame" style="aspect-ratio:3/4">${cafePoster()}</div>`,
 'online-sellers':`<div class="art-frame" style="aspect-ratio:1/1">${serum('cafe')}</div>`,
 'creators':`<div class="art-frame" style="aspect-ratio:9/16;max-width:200px">${cover({})}</div>`,
 'marketing-teams':`<div class="hp-mx"><div class="art-frame" style="aspect-ratio:1/1">${brandPost('halden')}</div><div class="art-frame" style="aspect-ratio:9/16">${brandPost('halden',{ratio:'9/16'})}</div></div>`,
 'agencies':`<div class="hp-mx"><div class="art-frame" style="aspect-ratio:1/1">${brandPost('halden')}</div><div class="art-frame" style="aspect-ratio:1/1">${brandPost('vela')}</div></div>`,
 'startups':`<div class="art-frame" style="aspect-ratio:16/9">${slide('cinematic')}</div>`
};
BRANDS.tandem={name:'Tandem',type:'Digital bank',bg:'#173F35',ink:'#F5F1E6',acc:'#E3B23C',font:'Inter',mark:'T',voice:'Trustworthy, plain-spoken'};
