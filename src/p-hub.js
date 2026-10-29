const HUB_PREV={
 'small-business':{who:'Café owner · Designs Claw in WhatsApp',prompt:'Every day at 8.30am, draft one post for my café. Alternate promo and baking tip, plus a square visual in our colours.',out:['Daily post drafted','1:1 visual in brand colours','Waits for your yes']},
 'online-sellers':{who:'Online seller · Image agent',prompt:'Write the Shopee listing for this item, then generate 3 lifestyle images with different backgrounds.',out:['Listing title + bullets','3 lifestyle images','Sized per marketplace']},
 'creators':{who:'Creator · Designs Claw, scheduled',prompt:'Every 25th at 10am, draft next month\u2019s calendar: 12 ideas across trends, tips and personal stories.',out:['12 ideas, dated','Hooks + covers','Voiceover in your voice']},
 'marketing-teams':{who:'Marketing team · Brand kit + agents',prompt:'Launch our autumn range across Instagram, TikTok, LinkedIn and YouTube, plus a 30-second voiceover in English, Bahasa and Thai.',out:['Every size, on-brand','Voiceover in 3 languages','Drafted into Notion']},
 'agencies':{who:'Studio of three · Studio boards',prompt:'Same brief for Halden Coffee and Vela Skincare: an autumn launch post. Keep each brand\u2019s kit.',out:['Two brands, one brief','Estimate before spend','Guideline + ZIP hand-off']},
 'startups':{who:'Two founders · Brand + Slides agents',prompt:'Here\u2019s our URL. Build the brand kit, a 10-slide pitch deck and a 20-second launch video.',out:['Brand kit from URL','Pitch deck','Launch storyboard']}
};
const FIT_Q1=[['own','My own business'],['audience','My audience'],['clients','Clients'],['team','My company\u2019s team'],['startup','A startup I\u2019m building']];
const FIT_Q2=[['posts','Social posts'],['product','Product images'],['brand','A brand identity'],['video','Video'],['decks','Decks'],['always','Help that runs itself']];
function fitResult(a,b){
 if(a==='clients')return ['agencies','You juggle several brands. Agencies & freelancers shows multiple brand kits, Studio boards and clean hand-off.'];
 if(a==='team')return ['marketing-teams','A team needs one brand enforced for everyone. Marketing teams covers brand kit governance, workflows and localisation.'];
 if(a==='startup')return ['startups','You need everything at version one. Startups & founders goes from URL to brand, deck and launch video.'];
 if(a==='audience')return [b==='product'?'online-sellers':'creators',b==='product'?'You sell to your audience. Online sellers turns one product photo into a full listing.':'Content creators turns one idea into a week of posts, covers and voiceover.'];
 if(b==='product')return ['online-sellers','Product images are your bottleneck. Online sellers covers listings, backgrounds and marketplace sizes.'];
 if(b==='decks'||b==='brand')return ['startups','Brand and decks first. Startups & founders starts from your URL.'];
 return ['small-business','You run the business and the marketing. Small business owners shows Designs Claw doing the routine posts in your chat app.'];
}
const MATRIX=[
 ['Brand kit from a URL or description',[2,1,1,2,2,2]],['Image agent',[2,2,2,2,2,1]],['Video & Storyboard agents',[1,2,2,2,2,2]],['Slides agent',[0,0,1,2,1,2]],['Audio agent & voiceover',[1,0,2,2,1,1]],['Designs Claw (WhatsApp, Telegram, Slack)',[2,2,2,1,1,1]],['Workflows & plugins',[1,0,1,2,1,2]],['Studio boards (beta)',[0,1,1,1,2,0]]
];
PAGES['']={html:()=>`
<section class="hero"><div class="wrap"><div class="hero-g" style="grid-template-columns:minmax(0,5fr) minmax(0,7fr)">
<div class="hero-l"><span class="eyebrow"><span class="dot"></span>Solutions</span><h1 class="hero-t">The same agents.<br>Six very different weeks.</h1>
<p class="lead">Designs.ai gives you specialist agents for brand, image, video, slides and audio, plus Designs Claw inside your chat app. See what they take off your plate, whoever you are.</p>
<div class="ctas"><a class="btn btn-primary btn-lg" href="#/?fit=1" id="goFit">Find your fit</a><button class="btn btn-secondary btn-lg" data-cta="start">Start free</button></div></div>
<div class="stage" id="hubStage"><div class="stage-h"><div class="seg" role="tablist" aria-label="Preview a solution" id="hubSeg" data-own>${PERSONAS.map((p,i)=>`<button role="tab" aria-selected="${i===0}" data-p="${p.id}">${p.short}</button>`).join('')}</div></div><div class="stage-b" id="hubPrev" aria-live="polite"></div></div>
</div></div></section>

<section class="sunken rule" id="fit"><div class="wrap std" style="margin:0 auto"><div class="sec-head"><div class="l"><span class="over">Find your fit ${prop('A short chooser for the Solutions hub. Not in the product today.')}</span><h2 class="sec-t">Two questions. One page to read.</h2></div></div>
<div class="fit"><div class="fit-q"><p class="t3">1. Who do you make things for?</p><div class="chips" role="radiogroup" id="fq1">${FIT_Q1.map(([k,l])=>`<button class="chip" role="radio" aria-checked="false" aria-pressed="false" data-k="${k}">${l}</button>`).join('')}</div></div>
<div class="fit-q"><p class="t3">2. What do you need most?</p><div class="chips" role="radiogroup" id="fq2">${FIT_Q2.map(([k,l])=>`<button class="chip" role="radio" aria-checked="false" aria-pressed="false" data-k="${k}">${l}</button>`).join('')}</div></div>
<div class="fit-r" id="fitR" aria-live="polite"><p class="small">Pick one answer for each question.</p></div></div></div></section>

<section><div class="wrap"><div class="sec-head"><div class="l"><span class="over">All solutions</span><h2 class="sec-t">Start from the work, not the tool</h2></div></div>
<div class="sol-list">${PERSONAS.map((p,i)=>`<a class="sol" href="#/${p.id}"><span class="sol-n num">0${i+1}</span><span class="sol-th">${THUMB[p.id]}</span><span class="kv"><b class="t2">${p.name}</b><span class="small">${p.line}</span></span><span class="sol-ag small">${HUB_PREV[p.id].who.split(' · ')[1]}</span><span class="sol-go">${ic('arrow',18)}</span></a>`).join('')}</div></div></section>

<section class="rule"><div class="wrap"><div class="sec-head"><div class="l"><span class="over">What each solution leans on</span><h2 class="sec-t">One product, weighted differently</h2><p class="lead">Every capability below ships in Designs.ai today. Studio boards and Automations are behind a feature flag.</p></div><div class="legend small"><span><i class="dot2 full"></i>Core</span><span><i class="dot2 half"></i>Useful</span></div></div>
<div class="mx-wrap"><table class="mx" id="mx"><thead><tr><th scope="col"><span class="sr">Capability</span></th>${PERSONAS.map((p,i)=>`<th scope="col" data-c="${i}"><a href="#/${p.id}">${p.short}</a></th>`).join('')}</tr></thead><tbody>${MATRIX.map(([n,v])=>`<tr><th scope="row">${n}</th>${v.map((x,i)=>`<td data-c="${i}">${x?`<i class="dot2 ${x===2?'full':'half'}" aria-label="${x===2?'Core':'Useful'}"></i>`:'<span class="sr">Not used</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></section>

<section class="tight sunken rule"><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Next candidates ${prop('Possible next pages, based on Designs Claw persona copy and the enterprise FAQ.')}</span><h2 class="t1">Pages we could add after these six</h2></div></div>
<div class="g3"><div class="kv"><b class="t3">Tutors & educators</b><span class="small">Claw already has a "Tuition teacher" story: weekly quizzes, revision visuals, parent updates.</span></div><div class="kv"><b class="t3">Property & insurance agents</b><span class="small">Listing kits, viewing-day reminders and renewal messages, from the Claw persona copy.</span></div><div class="kv"><b class="t3">Enterprise</b><span class="small">Workspaces per region and brand, role-based access, GDPR. Better as its own page than a persona.</span></div></div></div></section>
${finalCta('Brief it once. Keep your evenings.','Start on the free tier. Upgrade when you need more credits, plugins or seats.')}
`,mount(q){
 const prev=$('#hubPrev');const draw=id=>{const d=HUB_PREV[id];const p=PERSONAS.find(x=>x.id===id);prev.innerHTML=`<div class="hp fade-in"><div class="hp-l"><span class="cap">${d.who}</span><div class="bubble">${esc(d.prompt)}</div><ul class="ticks">${d.out.map(o=>`<li>${ic('check',14)}${o}</li>`).join('')}</ul><a class="link-arrow" href="#/${id}">Read ${p.name.toLowerCase()} ${ic('arrow')}</a></div><div class="hp-r">${HUB_ART[id]}</div></div>`};
 draw('small-business');
 const seg=$('#hubSeg');seg.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',seg).forEach(x=>x.setAttribute('aria-selected',x===b));draw(b.dataset.p)});
 seg.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft'].includes(e.key))return;const bs=$$('button',seg);let i=bs.findIndex(b=>b.getAttribute('aria-selected')==='true');i=(i+(e.key==='ArrowRight'?1:-1)+bs.length)%bs.length;bs[i].click();bs[i].focus()});
 const ans={};const upd=()=>{const r=$('#fitR');if(!ans.a||!ans.b){r.innerHTML=`<p class="small">${ans.a||ans.b?'One more answer.':'Pick one answer for each question.'}</p>`;return}const [id,why]=fitResult(ans.a,ans.b);const p=PERSONAS.find(x=>x.id===id);r.innerHTML=`<div class="fit-card pop"><span class="mthumb" style="width:56px;height:56px;border-radius:var(--radius-md);overflow:hidden;flex:none">${THUMB[id]}</span><div class="kv" style="gap:4px;flex:1"><span class="cap">We'd start with</span><b class="t2">${p.name}</b><span class="small">${why}</span></div><a class="btn btn-primary" href="#/${id}">Open page</a></div>`};
 [['#fq1','a'],['#fq2','b']].forEach(([s,k])=>$(s).addEventListener('click',e=>{const c=e.target.closest('.chip');if(!c)return;$$('.chip',$(s)).forEach(x=>{x.setAttribute('aria-pressed',x===c);x.setAttribute('aria-checked',x===c)});ans[k]=c.dataset.k;upd()}));
 const mx=$('#mx');mx.addEventListener('mouseover',e=>{const c=e.target.closest('[data-c]');$$('[data-c]',mx).forEach(x=>x.classList.toggle('hl',c&&x.dataset.c===c.dataset.c))});mx.addEventListener('mouseleave',()=>$$('.hl',mx).forEach(x=>x.classList.remove('hl')));
 $('#goFit').addEventListener('click',e=>{e.preventDefault();$('#fit').scrollIntoView({behavior:reduce?'auto':'smooth'});setTimeout(()=>$('#fq1 .chip').focus({preventScroll:true}),400)});
 if(q.includes('fit'))setTimeout(()=>$('#fit').scrollIntoView({behavior:'instant'}),30);
}};
