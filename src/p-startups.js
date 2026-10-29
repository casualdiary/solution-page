const ST_STAGES=[['Brand kit','Logo, colours, type, voice'],['Pitch deck','10 slides in your brand'],['Launch video','Storyboard → 20 s clip'],['Launch posts','LinkedIn, X, Product Hunt copy']];
const ST_SLIDES=[['01','Invoices that chase themselves'],['02','Freelancers wait weeks to get paid [add your data]'],['03','Loop sends the nudge so you don\u2019t have to']];
const ST_KIT=[
 ['Hiring','Job Description Writer','Skill','An inclusive job description: responsibilities, must-haves and why-join.',['Role','Team','Location','Must-haves']],
 ['Money','Financial Summary','Skill','Raw figures into an exec summary, variance commentary and key metrics.',['Upload figures (XLSX, CSV)','Period','Audience']],
 ['Legal','Contract Reviewer','Skill','Flag risky clauses, summarise obligations and suggest redlines.',['Upload contract','Your side','What to watch for']],
 ['Data','Data Insights','Skill','A dataset into headline insights, patterns and recommended actions.',['Upload dataset','Question to answer']],
 ['Sales','Prospect research','Workflow','A company and its decision-makers into a sourced brief.',['Company','Cover · Overview, News, Funding, Leadership']],
 ['Product','Release notes','Workflow','Merged PRs and closed issues into notes for each audience.',['What shipped · repo + range','Write for · Internal / Customer / Changelog','GitHub connection']]
];
const PLANS=[['Basic','Perfect for individuals getting started'],['Go','Everything you need to get started'],['Plus','More power for everyday creativity'],['Pro','Ideal for growing teams and businesses'],['Enterprise','For large organizations with advanced needs']];
BRANDS.loop={name:'Loop',type:'Fintech',bg:'#0E1013',ink:'#F5F0E6',acc:'#E07A3F',font:'Inter',mark:'L',voice:'Calm, precise, a little dry'};
PAGES['startups']={html:()=>`
<section class="hero st-hero"><div class="wrap"><div class="kv" style="gap:20px;max-width:820px;margin:0 auto;text-align:center;align-items:center"><span class="eyebrow"><span class="dot"></span>For startups & founders</span><h1 class="hero-t">From a URL to a launch kit, in week one.</h1><p class="lead" style="max-width:600px">Paste your site, even a rough one. Designs.ai builds the brand, then uses it for the deck, the launch video and the posts.</p>
<form class="url-f st-f" id="stF"><label class="sr" for="stU">Your website</label><span class="cap" style="padding-left:12px">https://</span><input id="stU" value="loop.app" autocomplete="off"><button class="btn btn-primary" id="stGo">Build launch kit</button></form></div>
<div class="pipe" id="pipe">${ST_STAGES.map(([t,d],i)=>`<div class="pipe-s" data-i="${i}"><div class="pipe-h"><span class="pipe-n num">${i+1}</span><div class="kv"><b class="t3">${t}</b><span class="small">${d}</span></div><span class="pipe-st cap">Waiting</span></div><div class="pipe-art"></div></div>`).join('')}</div></div></section>

<section class="sunken rule"><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Slides agent</span><h2 class="sec-t">Pick how the story feels. Keep what it says.</h2><p class="lead">Same content, five deck styles. Numbers stay as placeholders until you add yours.</p></div></div>
<div class="dk"><div class="dk-list" role="radiogroup" id="dkL">${Object.entries(DECKS).map(([k,d],i)=>`<button class="vrow" role="radio" aria-checked="${i===0}" data-k="${k}"><b>${d.name}</b><span class="small">${d.d}</span></button>`).join('')}</div>
<div class="dk-prev"><div class="art-frame dk-main" id="dkMain" style="aspect-ratio:16/9"></div><div class="dk-strip" id="dkStrip" role="tablist" aria-label="Slides"></div></div></div></div></section>

<section><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Skills & workflows</span><h2 class="sec-t">The writing nobody on a four-person team has time for</h2></div></div>
<div class="rows" id="stKit">${ST_KIT.map(([g,n,t,d],i)=>`<button class="wf-r" data-i="${i}"><span class="cap" style="width:72px">${g}</span><span class="kv"><b class="t3">${n}</b><span class="small">${d}</span></span><span class="badge badge-soon">${t}</span>${ic('arrow',16)}</button>`).join('')}</div></div></section>

<section class="rule"><div class="wrap"><div class="g2" style="align-items:start"><div class="kv" style="gap:16px"><span class="over">Pricing model</span><h2 class="sec-t">Start free. Pay as you make more.</h2><p class="lead">Every plan runs on credits. Subscribe for a monthly allowance, or buy a credit package when launch week spikes.</p><div class="seg" role="tablist" id="plT" data-own><button role="tab" aria-selected="true" data-k="sub">Subscriptions</button><button role="tab" aria-selected="false" data-k="pkg">Packages</button></div></div>
<div id="plans"></div></div></div></section>

<section class="tight"><div class="wrap">${quotePh('founder')}</div></section>
${faqBlock([
 ['We don\u2019t have a website yet. Can we still start?','Yes. Describe the business instead of pasting a URL and it builds the brand kit from that.'],
 ['Can we edit the brand after it\u2019s generated?','Yes. Edit the kit any time; new work follows the updated brand.'],
 ['Is there a free tier?','Yes. Start creating on the free tier and upgrade when you need more credits or features.'],
 ['Can we use the deck and assets with investors and customers?','Yes. Commercial use is supported; rights vary by plan.'],
 ['Does it connect to our tools?','Plugins for GitHub, Linear, Notion, Slack, Google Drive and more are on Pro and Enterprise.']
])}
${crossLinks('startups')}
${finalCta('Launch looking like you meant it.','Start free with your URL. No designer required.')}
`,mount(){
 const artFor=i=>[`<div class="pk pop"><span class="kit-m" style="background:#0E1013;color:#F5F0E6;width:40px;height:40px;font-size:18px">L</span><div class="sw">${['#0E1013','#E07A3F','#F5F0E6','#8A8F98'].map(c=>`<i style="background:${c}"></i>`).join('')}</div><span class="small">Inter Display · Inter</span></div>`,`<div class="art-frame pop" style="aspect-ratio:16/9">${slide('cinematic',{name:'Loop'})}</div>`,`<div class="pv pop">${[0,1,2].map(j=>`<div class="art-frame" style="aspect-ratio:9/16">${cover({bg:'#0E1013',acc:'#E07A3F',title:['Invoice sent.','Still unpaid?','Loop it.'][j],tag:'SHOT '+(j+1),ratio:'9/16'})}</div>`).join('')}</div>`,`<div class="pp pop"><p class="small" style="color:var(--text-primary)">“Freelancers shouldn\u2019t have to chase. Today we\u2019re launching Loop: invoices that send their own reminders.”</p><span class="cap">LinkedIn · 3 variants</span></div>`][i];
 const build=async silent=>{const b=$('#stGo');if(!$('#stU').value.trim()){$('#stU').focus();return}b.setAttribute('aria-busy','true');
  $$('.pipe-s').forEach(s=>{s.className='pipe-s';s.querySelector('.pipe-st').textContent='Waiting';s.querySelector('.pipe-art').innerHTML=''});
  for(const s of $$('.pipe-s')){s.classList.add('run');s.querySelector('.pipe-st').textContent='Working';await wait(reduce?0:700);s.classList.remove('run');s.classList.add('ok');s.querySelector('.pipe-st').innerHTML=`${ic('check',13)} Done`;s.querySelector('.pipe-art').innerHTML=artFor(+s.dataset.i)}
  b.removeAttribute('aria-busy');if(!silent)toast('Launch kit ready. Everything is in Library.')};
 $('#stF').addEventListener('submit',e=>{e.preventDefault();build(false)});build(true);
 let dk='cinematic',si=0;const drawD=()=>{$('#dkMain').innerHTML=slide(dk,{name:'Loop',title:ST_SLIDES[si][1],n:ST_SLIDES[si][0]});$('#dkStrip').innerHTML=ST_SLIDES.map(([n,t],i)=>`<button role="tab" aria-selected="${i===si}" data-i="${i}" aria-label="Slide ${n}" class="art-frame">${slide(dk,{name:'Loop',title:t,n})}</button>`).join('')};drawD();
 $('#dkL').addEventListener('click',e=>{const b=e.target.closest('.vrow');if(!b)return;$$('#dkL .vrow').forEach(x=>x.setAttribute('aria-checked',x===b));dk=b.dataset.k;drawD();$('#dkMain').classList.remove('pop');void $('#dkMain').offsetWidth;$('#dkMain').classList.add('pop')});
 $('#dkStrip').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;si=+b.dataset.i;drawD()});
 $('#stKit').addEventListener('click',e=>{const r=e.target.closest('.wf-r');if(!r)return;const [g,n,t,d,f]=ST_KIT[+r.dataset.i];panel(n,`<span class="badge badge-soon" style="margin-bottom:12px">${t} · ${g}</span><p class="small" style="margin-bottom:16px">${d}</p><div class="kv" style="gap:12px">${f.map(x=>`<label class="fld"><span>${x.split(' · ')[0]}</span><input value="${x.includes(' · ')?x.split(' · ')[1]:''}" autocomplete="off"></label>`).join('')}</div>`,`<button class="btn btn-secondary" data-close>Cancel</button><button class="btn btn-primary" data-cta="start" data-msg="Prototype: “${n}” would start in a new thread.">Try ${n}</button>`,r)});
 const pl=k=>{$('#plans').innerHTML=k==='sub'?`<div class="rows fade-in">${PLANS.map(([n,d])=>`<div class="row" style="grid-template-columns:120px 1fr auto"><b class="t3">${n}</b><span class="muted">${d}</span><span class="cap">${n==='Enterprise'?'Custom':'Monthly or annual'}</span></div>`).join('')}</div><p class="cap" style="margin-top:12px">Plan names and descriptions from designs.ai. Prices are on the pricing page.</p>`:`<div class="rows fade-in"><div class="row" style="grid-template-columns:1fr auto"><div class="kv"><b class="t3">Credit packages</b><span class="small">One-off top-ups on top of any plan, priced per credit.</span></div><button class="btn btn-secondary btn-sm" data-cta="pricing">See packages</button></div></div>`};pl('sub');
 $('#plT').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#plT button').forEach(x=>x.setAttribute('aria-selected',x===b));pl(b.dataset.k)});
}};
