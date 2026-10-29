/* ---------- icons (24 grid, 1.6 stroke) ---------- */
const P={
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',chev:'<path d="M6 9l6 6 6-6"/>',plus:'<path d="M12 5v14M5 12h14"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 play:'<path d="M8 5.5v13l11-6.5z"/>',pause:'<path d="M8 5v14M16 5v14"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
 clock:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 down:'<path d="M12 4v12M6 11l6 6 6-6M5 20h14"/>',send:'<path d="M5 12h12M12 6l6 6-6 6"/>',wand:'<path d="M5 19L15 9M14 4v2M19 9h-2M17.5 5.5l-1.5 1.5"/>',
 refresh:'<path d="M20 11a8 8 0 0 0-14.6-4.5M4 4v4h4M4 13a8 8 0 0 0 14.6 4.5M20 20v-4h-4"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'
};
const ic=(n,s=16,sw=1.6)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${n==='play'?'currentColor':'none'}" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const prop=(tip='Not in the product today. Proposed for this solutions concept.',label='Proposed')=>`<span class="badge badge-prop" tabindex="0" data-tip="${esc(tip)}">${label}</span>`;
const flag=(tip)=>`<span class="badge badge-flag" tabindex="0" data-tip="${esc(tip)}">Beta</span>`;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- personas ---------- */
const PERSONAS=[
 {id:'small-business',name:'Small business owners',short:'Small business',line:'Marketing done before you open.',need:'Always-on assistant'},
 {id:'online-sellers',name:'Online sellers',short:'Online sellers',line:'One product photo, a full listing.',need:'Product images'},
 {id:'creators',name:'Content creators',short:'Creators',line:'One idea in, a week of posts out.',need:'Social content'},
 {id:'marketing-teams',name:'Marketing teams',short:'Marketing teams',line:'Brief once, ship every channel on-brand.',need:'Campaigns'},
 {id:'agencies',name:'Agencies & freelancers',short:'Agencies',line:'Every client brand, one workspace.',need:'Client work'},
 {id:'startups',name:'Startups & founders',short:'Startups',line:'Brand, deck and launch in week one.',need:'Decks & launch'}
];
/* tiny media thumbs (gradients allowed inside media only) */
const THUMB={
 'small-business':`<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#F3E7D3"/><rect x="9" y="7" width="22" height="26" rx="2" fill="#2B2420"/><rect x="12" y="11" width="16" height="3" fill="#F3E7D3"/><circle cx="20" cy="23" r="5" fill="#C8873F"/></svg>`,
 'online-sellers':`<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#E9E4F2"/><rect x="16" y="14" width="8" height="18" rx="3" fill="#B6A4D6"/><rect x="18" y="8" width="4" height="7" rx="1" fill="#3B2F52"/><ellipse cx="20" cy="33" rx="9" ry="1.5" fill="#C9BEDD"/></svg>`,
 'creators':`<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#1E2430"/><rect x="13" y="6" width="14" height="28" rx="2" fill="#E8604C"/><rect x="15" y="26" width="10" height="2" fill="#fff"/><rect x="15" y="29" width="7" height="2" fill="#fff" opacity=".7"/></svg>`,
 'marketing-teams':`<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#EEF0F2"/><rect x="5" y="9" width="14" height="14" fill="#173F35"/><rect x="21" y="9" width="14" height="22" fill="#E3B23C"/><rect x="5" y="25" width="14" height="6" fill="#173F35" opacity=".5"/></svg>`,
 'agencies':`<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#F6F7F8"/><circle cx="14" cy="16" r="6" fill="#7A4A2A"/><circle cx="26" cy="16" r="6" fill="#2F6DF6"/><circle cx="20" cy="26" r="6" fill="#D9A6A0"/></svg>`,
 'startups':`<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#0E1013"/><rect x="6" y="11" width="28" height="18" rx="1.5" fill="#22262C"/><path d="M10 25l6-6 4 3 6-7 4 3" stroke="#F5F0E6" stroke-width="1.6" fill="none"/></svg>`
};

/* ---------- shared blocks ---------- */
function faqBlock(items,title='Questions'){return `<section class="rule"><div class="wrap"><div class="faq-wrap"><div class="kv" style="gap:12px"><h2 class="sec-t">${title}</h2><p class="small">Answers come from Designs.ai's public FAQ and product copy. Plan details change, so the app is the source of truth.</p></div><div class="faq">${items.map((q,i)=>`<div class="faq-i"><button class="faq-q" aria-expanded="${i===0}" aria-controls="fa-${i}">${q[0]}${ic('plus',18)}</button><div class="faq-a" id="fa-${i}" role="region"><div><p>${q[1]}</p></div></div></div>`).join('')}</div></div></div></section>`}
function crossLinks(cur){const o=PERSONAS.filter(p=>p.id!==cur);return `<section class="tight"><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Not quite you?</span><h2 class="t1">See how other people use Designs.ai</h2></div><a class="link-arrow" href="#/">All solutions ${ic('arrow')}</a></div><div class="xl">${o.map(p=>`<a href="#/${p.id}"><b>${p.name}</b><span>${p.line}</span></a>`).join('')}</div></div></section>`}
function finalCta(t,l,sales=false){return `<section class="final ink"><div class="wrap"><div class="box"><div class="kv" style="gap:12px;max-width:640px"><h2 class="sec-t">${t}</h2><p class="lead">${l}</p></div><div class="ctas"><button class="btn btn-lg" style="background:#fff;color:var(--neutral-900)" data-cta="start">Start free</button>${sales?`<button class="btn btn-lg btn-ghost" style="color:#fff;border:1px solid #3A4048" data-cta="sales">Talk to sales</button>`:`<a class="btn btn-lg btn-ghost" style="color:#fff;border:1px solid #3A4048" href="#/" data-cta="pricing">See plans</a>`}</div></div></div></section>`}
function quotePh(who){return `<div class="ph" style="min-height:120px;flex-direction:column;gap:6px"><b style="color:var(--text-secondary)">Customer story · placeholder</b><span>Add a real ${who} quote with name and permission. Nothing invented here.</span></div>`}
function subbar(p){return `<div class="subbar"><div class="wrap"><span class="crumb"><a href="#/">Solutions</a> /</span><div class="switcher"><button aria-haspopup="menu" aria-expanded="false" id="swBtn">${p.name} ${ic('chev',14)}</button><div class="menu" role="menu" id="swMenu">${PERSONAS.map(x=>`<a role="menuitem" href="#/${x.id}" ${x.id===p.id?'aria-current="page"':''}>${x.name}</a>`).join('')}<div style="height:1px;background:var(--border-subtle);margin:6px 0"></div><a role="menuitem" href="#/">All solutions</a></div></div><span class="sp"></span><span class="hide-sm" style="display:inline-flex;gap:8px;align-items:center">${prop('The whole Solutions section is a proposal. Features inside are real unless marked Proposed.','Concept page')}</span></div></div>`}

/* ---------- nav ---------- */
function navHTML(){return `<header class="nav"><div class="wrap"><a class="logo" href="#/" aria-label="Designs.ai home"><i></i>Designs.ai</a>
<nav class="nav-links" aria-label="Main"><a href="#/" data-fake="Agents">Agents</a><a href="#/" data-fake="Designs Claw">Designs Claw</a><button id="megaBtn" aria-expanded="false" aria-controls="mega" class="cur">Solutions ${ic('chev',14)}</button><a href="#/" data-fake="Pricing">Pricing</a></nav>
<div class="nav-cta"><a class="btn btn-ghost hide-m" href="#/" data-fake="Log in">Log in</a><button class="btn btn-primary" data-cta="start">Start free</button><button class="burger" id="burger" aria-label="Open menu" aria-expanded="false">${ic('menu',20)}</button></div></div>
<div class="mega" id="mega" role="region" aria-label="Solutions"><div class="wrap" style="padding:0"><div class="mega-in">
<div><h6>By who you are</h6><div class="mega-p">${PERSONAS.map(p=>`<a class="mrow" data-pid="${p.id}" href="#/${p.id}"><span class="mthumb">${THUMB[p.id]}</span><span><b>${p.name}</b><span>${p.line}</span></span></a>`).join('')}</div></div>
<div class="mneed"><h6>By what you make</h6>${PERSONAS.map(p=>`<a href="#/${p.id}">${p.need}<span>${p.short}</span></a>`).join('')}</div>
<div class="mfeat"><span class="over">Not sure where to start?</span><p class="t3">Two questions, one recommendation.</p><p class="small">Pick who you make for and what you need most.</p><a class="link-arrow" href="#/?fit=1">Find your fit ${ic('arrow')}</a></div>
</div></div></div></header>
<div class="scrim" id="scrim"></div>
<aside class="drawer" id="mnav" aria-label="Menu" aria-hidden="true"><div class="drawer-h"><a class="logo" href="#/"><i></i>Designs.ai</a><button class="iconbtn" data-close aria-label="Close menu">${ic('x',18)}</button></div><div class="drawer-b">
<p class="over" style="margin:4px 0 8px">Solutions</p>${PERSONAS.map(p=>`<a class="mrow" style="margin:0" href="#/${p.id}"><span class="mthumb">${THUMB[p.id]}</span><span><b>${p.name}</b><span>${p.line}</span></span></a>`).join('')}
<div style="height:1px;background:var(--border-subtle);margin:12px 0"></div>${['Agents','Designs Claw','Pricing','Log in'].map(x=>`<a class="mrow" style="margin:0" href="#/" data-fake="${x}"><span><b>${x}</b></span></a>`).join('')}</div>
<div class="drawer-f"><button class="btn btn-primary" style="width:100%" data-cta="start">Start free</button></div></aside>
<aside class="drawer" id="sales" aria-label="Talk to sales" aria-hidden="true"><div class="drawer-h"><h2 class="t2">Talk to sales</h2><button class="iconbtn" data-close aria-label="Close">${ic('x',18)}</button></div><div class="drawer-b" id="salesBody"></div><div class="drawer-f" id="salesFoot"><button class="btn btn-secondary" data-close>Cancel</button><button class="btn btn-primary" id="salesSend">Send request</button></div></aside>
<aside class="drawer" id="gd" aria-label="Details" aria-hidden="true"><div class="drawer-h"><h2 class="t2" id="gdT"></h2><button class="iconbtn" data-close aria-label="Close">${ic('x',18)}</button></div><div class="drawer-b" id="gdB"></div><div class="drawer-f" id="gdF"></div></aside>
<div class="toast" id="toast" role="status" aria-live="polite"></div><div class="tip" id="tip" role="tooltip"></div>
<div class="proto" role="group" aria-label="Prototype options"><span class="lbl">Prototype · show Proposed labels</span><button class="switch" role="switch" aria-checked="true" id="propSw" aria-label="Show Proposed labels"></button></div>`}
function footerHTML(){return `<footer><div class="wrap"><div class="kv" style="gap:8px;max-width:280px"><a class="logo" href="#/"><i></i>Designs.ai</a><span>Prototype of a Solutions section. Built for review, Oct 2026.</span></div><div class="cols"><div><b>Solutions</b>${PERSONAS.map(p=>`<a href="#/${p.id}">${p.name}</a>`).join('')}</div><div><b>Product</b>${['Agents','Designs Claw','Workflows','Plugins','Pricing'].map(x=>`<a href="#/" data-fake="${x}">${x}</a>`).join('')}</div></div></div></footer>`}

/* ---------- toast / tip ---------- */
let tt;function toast(msg,act){const t=$('#toast');t.innerHTML=`<span>${msg}</span>${act?`<button id="tAct">${act[0]}</button>`:''}`;t.classList.add('show');clearTimeout(tt);if(act)$('#tAct').onclick=()=>{act[1]();t.classList.remove('show')};tt=setTimeout(()=>t.classList.remove('show'),3600)}
function tipInit(){const tip=$('#tip');const show=e=>{const el=e.target.closest('[data-tip]');if(!el)return;tip.textContent=el.dataset.tip;const r=el.getBoundingClientRect();tip.classList.add('show');const w=tip.offsetWidth;let x=Math.min(Math.max(8,r.left+r.width/2-w/2),innerWidth-w-8);let y=r.top-tip.offsetHeight-8;if(y<8)y=r.bottom+8;tip.style.left=x+'px';tip.style.top=y+'px'};const hide=e=>{if(e.target.closest('[data-tip]'))tip.classList.remove('show')};document.addEventListener('mouseover',show);document.addEventListener('focusin',show);document.addEventListener('mouseout',hide);document.addEventListener('focusout',hide);addEventListener('scroll',()=>tip.classList.remove('show'),{passive:true})}

/* ---------- overlays ---------- */
let lastTrig=null;
function openDrawer(id,trig){lastTrig=trig||document.activeElement;closeMega();const d=$('#'+id);d.classList.add('open');d.setAttribute('aria-hidden','false');$('#scrim').classList.add('open');setTimeout(()=>{(d.querySelector('input,button:not([data-close])')||d.querySelector('button')).focus()},60);if(id==='mnav')$('#burger').setAttribute('aria-expanded','true')}
function closeDrawers(){$$('.drawer.open').forEach(d=>{d.classList.remove('open');d.setAttribute('aria-hidden','true')});$('#scrim').classList.remove('open');$('#burger').setAttribute('aria-expanded','false');if(lastTrig&&document.contains(lastTrig))lastTrig.focus({preventScroll:true});lastTrig=null}
function openMega(){const m=$('#mega');m.classList.add('open');$('#megaBtn').setAttribute('aria-expanded','true');$$('.mrow',m).forEach(a=>a.classList.toggle('cur',a.dataset.pid===currentId))}
function closeMega(focus){const m=$('#mega');if(!m.classList.contains('open'))return;m.classList.remove('open');$('#megaBtn').setAttribute('aria-expanded','false');if(focus)$('#megaBtn').focus()}
function salesForm(){$('#salesBody').innerHTML=`<p class="small" style="margin-bottom:16px">Tell us about your team. In this prototype nothing is sent.</p>
<label class="fld"><span>Work email</span><input type="email" id="sEmail" placeholder="you@company.com" autocomplete="off"></label>
<label class="fld"><span>Company</span><input type="text" placeholder="Company name" autocomplete="off"></label>
<div class="fld"><span>Team size</span><div class="seg" role="tablist" id="sSize">${['1–10','11–50','51–200','200+'].map((x,i)=>`<button role="tab" aria-selected="${i===1}">${x}</button>`).join('')}</div></div>
<label class="fld"><span>What do you want to make? <i class="cap" style="font-style:normal">(optional)</i></span><textarea rows="3" placeholder="e.g. monthly campaigns in 3 languages for 2 brands"></textarea></label><p class="fld-err" id="sErr" hidden>Enter a work email so we can reply.</p>`;$('#salesFoot').hidden=false}

function panel(t,b,f,trig){$('#gdT').textContent=t;$('#gdB').innerHTML=b;$('#gdF').innerHTML=f||'<button class="btn btn-secondary" data-close>Close</button>';openDrawer('gd',trig)}
/* ---------- global events ---------- */
function globalInit(){
 document.body.insertAdjacentHTML('afterbegin',navHTML());
 const mb=$('#megaBtn');let ht;
 mb.addEventListener('click',()=>$('#mega').classList.contains('open')?closeMega():openMega());
 const hdr=$('.nav');hdr.addEventListener('mouseleave',()=>{ht=setTimeout(()=>closeMega(),200)});hdr.addEventListener('mouseenter',()=>clearTimeout(ht));
 mb.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches)openMega()});
 mb.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();openMega();$('#mega .mrow').focus()}});
 $('#mega').addEventListener('keydown',e=>{const items=$$('#mega a');const i=items.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();items[(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length].focus()}});
 $('#burger').addEventListener('click',e=>openDrawer('mnav',e.currentTarget));
 $('#scrim').addEventListener('click',closeDrawers);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('.drawer.open'))closeDrawers();else if($('#mega.open'))closeMega(true);const om=$('.menu.open');if(om){om.classList.remove('open');const b=om.previousElementSibling;b&&b.setAttribute('aria-expanded','false');b&&b.focus()}}});
 document.addEventListener('click',async e=>{
  const t=e.target;
  if(t.closest('[data-close]')){closeDrawers();return}
  if(!t.closest('.switcher')){$$('.switcher .menu.open').forEach(m=>{m.classList.remove('open');m.previousElementSibling.setAttribute('aria-expanded','false')})}
  if(!t.closest('#mega')&&!t.closest('#megaBtn'))closeMega();
  const sl=t.closest('a[href^="#/"]');if(sl&&!sl.dataset.fake&&!sl.dataset.cta&&sl.getAttribute('href')===location.hash){e.preventDefault();window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});return}
  const fk=t.closest('[data-fake]');if(fk){e.preventDefault();toast(`“${fk.dataset.fake}” is outside this prototype. Solutions pages only.`);return}
  const cta=t.closest('[data-cta]');if(cta){e.preventDefault();const k=cta.dataset.cta;
   if(k==='sales'){salesForm();openDrawer('sales',cta);return}
   if(k==='pricing'){toast('Plans: Basic, Go, Plus, Pro and Enterprise. Pricing page is outside this prototype.');return}
   const lbl=cta.innerHTML;cta.setAttribute('aria-busy','true');await wait(700);cta.removeAttribute('aria-busy');cta.innerHTML=lbl;closeDrawers();
   toast(cta.dataset.msg||'Prototype: this would open sign-up with this solution preselected.',['Undo',()=>{}]);return}
  const fq=t.closest('.faq-q');if(fq){fq.setAttribute('aria-expanded',fq.getAttribute('aria-expanded')!=='true');return}
  const seg=t.closest('.seg button');if(seg&&!seg.closest('[data-own]')){$$('button',seg.parentElement).forEach(b=>b.setAttribute('aria-selected',b===seg))}
  if(t.closest('#salesSend')){const em=$('#sEmail');const b=$('#salesSend');if(!/.+@.+\..+/.test(em.value)){$('#sErr').hidden=false;em.setAttribute('aria-invalid','true');em.focus();return}b.setAttribute('aria-busy','true');await wait(800);b.removeAttribute('aria-busy');$('#salesBody').innerHTML=`<div class="kv" style="gap:8px;padding-top:8px"><span class="badge badge-live" style="align-self:flex-start">Request received</span><h3 class="t2">Thanks. We'll reply within one business day.</h3><p class="small">Prototype only. Nothing was sent.</p></div>`;$('#salesFoot').hidden=true;$('#salesFoot').insertAdjacentHTML('afterend','');setTimeout(()=>$('#sales [data-close]').focus(),50)}
  if(t.closest('#propSw')){const s=$('#propSw');const on=s.getAttribute('aria-checked')!=='true';s.setAttribute('aria-checked',on);document.body.classList.toggle('hide-prop',!on);toast(on?'Proposed labels shown':'Proposed labels hidden: the page as a visitor would see it')}
 });
 tipInit();
}

/* ---------- router ---------- */
let currentId='';const PAGES={};
function route(){const h=location.hash.replace(/^#\/?/,'');const [id,q]=h.split('?');const pid=PAGES[id]?id:'';currentId=pid;closeMega();closeDrawers();
 const main=$('#main');const pg=PAGES[pid];const per=PERSONAS.find(p=>p.id===pid);
 main.innerHTML=(per?subbar(per):'')+pg.html()+footerHTML();document.title=(per?per.name+' · ':'')+'Designs.ai Solutions (prototype)';
 if(per){const sb=$('#swBtn'),sm=$('#swMenu');sb.onclick=()=>{const o=!sm.classList.contains('open');sm.classList.toggle('open',o);sb.setAttribute('aria-expanded',o);if(o)sm.querySelector('a').focus()};sm.addEventListener('keydown',e=>{const it=$$('a',sm);const i=it.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();it[(i+(e.key==='ArrowDown'?1:-1)+it.length)%it.length].focus()}})}
 pg.mount&&pg.mount(q||'');
 if(!(q&&q.includes('fit')))window.scrollTo({top:0,behavior:'instant'});
}
addEventListener('hashchange',route);
