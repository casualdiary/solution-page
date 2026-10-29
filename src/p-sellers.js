const RATIOS=[['1/1','1:1','Shopee · Instagram'],['4/5','4:5','Facebook'],['9/16','9:16','TikTok'],['2/3','2:3','Pinterest']];
const MKT={shopee:{n:'Shopee',t:'VELA Niacinamide 10% Serum 30ml – Brightening, Oil Control, Fragrance-Free',b:['10% niacinamide + 1% zinc for visibly smaller pores','Lightweight, fast-absorbing, no sticky finish','Fragrance-free, suitable for sensitive skin','30ml amber glass bottle with dropper','Use AM & PM after cleansing, before moisturiser']},
 tokopedia:{n:'Tokopedia',t:'VELA Serum Niacinamide 10% 30ml | Mencerahkan & Kontrol Minyak',b:['Niacinamide 10% + zinc 1% untuk pori tampak lebih kecil','Tekstur ringan, cepat meresap','Tanpa pewangi, aman untuk kulit sensitif','Botol kaca 30ml dengan pipet','Pakai pagi & malam setelah cuci muka']},
 tiktok:{n:'TikTok Shop',t:'The 10% niacinamide serum my pores needed 🫧 VELA 30ml',b:['Hook: “Day 14 of the same serum…”','Pore-blurring 10% niacinamide + zinc','No fragrance, no sticky finish','Pinned comment: how to layer it','CTA: tap the yellow basket']}};
const LAUNCH=[['3 days','Something amber is coming.','Teaser: bottle in shadow, no label.'],['2 days','10% niacinamide. 0% fragrance.','Detail: the dropper, close up.'],['Tomorrow','Launching 9am. First 100 orders get the travel size.','Hero: full product on podium.']];
PAGES['online-sellers']={html:()=>`
<section class="hero"><div class="wrap"><div class="hero-g" style="grid-template-columns:minmax(0,4fr) minmax(0,8fr)">
<div class="hero-l"><span class="eyebrow"><span class="dot"></span>For online sellers</span><h1 class="hero-t">One product photo. Every listing it needs.</h1>
<p class="lead">Upload the photo you already took. The Image agent puts it in new scenes, sizes it for each marketplace and writes the listing in the same thread.</p>
<div class="jobline"><span>Lifestyle images</span><span>Background removal</span><span>Listing copy</span><span>Launch teasers</span></div>
<div class="ctas"><button class="btn btn-primary btn-lg" data-cta="start">Make my first listing</button></div></div>
<div class="stage ls"><div class="stage-h"><span class="ttl"><span class="dots3"><i></i><i></i><i></i></span>Image agent · vela-serum.jpg</span><div class="seg" role="tablist" aria-label="View" id="lsView" data-own><button role="tab" aria-selected="true" data-v="img">Images</button><button role="tab" aria-selected="false" data-v="copy">Listing copy</button></div></div>
<div class="ls-b"><div class="ls-canvas"><div class="ls-frame" id="lsFrame" style="aspect-ratio:1/1">${serum('cafe')}</div><span class="ls-dim cap num" id="lsDim">1:1 · Shopee · Instagram</span></div>
<div class="ls-side" id="lsSide"></div></div></div>
</div></div></section>

<section class="rule"><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Same photo, moving</span><h2 class="sec-t">A product video without a shoot</h2><p class="lead">The Video agent turns the same image into a short clip. Pick a camera move.</p></div></div>
<div class="vid-g"><div class="vid" id="vid" data-move="orbit"><div class="vid-in">${serum('studio')}</div><div class="vid-bar"><button class="iconbtn" id="vidPlay" aria-label="Pause" style="color:#fff">${ic('pause',16)}</button><span class="cap num" style="color:#C9CED3" id="vidT">0:00 / 0:06</span><span class="vid-prog"><i id="vidP"></i></span></div></div>
<div class="kv" style="gap:8px"><p class="over" style="margin-bottom:4px">Camera move</p><div class="vlist" role="radiogroup" id="vMoves">${[['orbit','360° orbit','Turntable spin around the product.'],['push','Cinematic push-in','Slow dolly towards the label.'],['float','Floating reveal','Rises into frame, settles.']].map(([k,n,d],i)=>`<button class="vrow" role="radio" aria-checked="${i===0}" data-k="${k}"><b>${n}</b><span class="small">${d}</span></button>`).join('')}</div><p class="cap" style="margin-top:8px">“360° orbit” and “Cinematic push-in” are Video agent examples today. ${prop('Floating reveal is an example move for this page, not a shipped preset.')}</p></div></div></div></section>

<section class="sunken rule"><div class="wrap"><div class="g2" style="align-items:start"><div class="kv" style="gap:16px"><span class="over">Launch week, scheduled</span><h2 class="sec-t">A three-day countdown from one message</h2><p class="lead">Ask Designs Claw in your chat app: “3-day launch countdown: one teaser caption and visual per day, remind me to post at 9am.”</p><div class="seg" role="tablist" id="lcSeg" data-own aria-label="Countdown day">${LAUNCH.map((l,i)=>`<button role="tab" aria-selected="${i===0}" data-i="${i}">${l[0]}</button>`).join('')}</div><div id="lcCopy" aria-live="polite"></div></div>
<div class="lc-art" id="lcArt"></div></div></div></section>

<section><div class="wrap"><div class="g2" style="align-items:start">
<div class="card kv care" style="gap:12px"><span class="over">Customer care</span><div class="msg in"><b class="cap">Buyer · 2 min ago</b>hi where is my parcel?? ordered 5 days ago</div><div class="msg claw" id="careReply"><b class="cap">Draft reply</b><span id="careTxt"></span></div><div class="chips" role="radiogroup" id="careTone">${['Calm','Friendly','Short'].map((t,i)=>`<button class="chip" role="radio" aria-checked="${i===0}" aria-pressed="${i===0}" data-k="${t}">${t}</button>`).join('')}</div><div style="display:flex;gap:8px"><button class="btn btn-secondary" id="careCopy">${ic('copy')} Copy reply</button></div></div>
<div class="card kv" style="gap:12px"><span class="over">Before you list ${prop('Creative Score exists in Creative mode today. Moving it into Agent mode is part of the Creative-mode sunset proposal.')}</span><b class="t2">Creative Score</b><p class="small">Upload a product image, get a score and suggestions, and apply the fix you like.</p><div class="cs" id="cs"><div class="cs-img">${serum('studio')}</div><div class="kv" style="gap:8px;flex:1" id="csOut"><button class="btn btn-primary" id="csGo">Score this image</button></div></div></div>
</div></div></section>

<section class="tight"><div class="wrap">${quotePh('online seller')}</div></section>
${faqBlock([
 ['Will the product still look like my product?','You start from your own photo as the reference (JPG, PNG or WebP, up to 10 MB). Always check labels and details before you list.'],
 ['Which sizes can I export?','Presets named by platform: 1:1 Instagram, 4:5 Facebook, 9:16 TikTok, 2:3 Pinterest, 16:9 YouTube and more. Today these live in Creative mode and are proposed for Agent mode.'],
 ['Does it publish to my store?','No. It writes the listing and makes the images; you paste and publish. Nothing is sent for you.'],
 ['Can I remove the background?','Yes. Remove background is one click today in Creative mode, and the Image agent can replace backgrounds from a prompt.'],
 ['Can I use the images commercially?','Yes. Rights vary by plan (Standard on Plus and Pro, or Enterprise). Check the licence agreement.']
])}
${crossLinks('online-sellers')}
${finalCta('List it tonight.','Start free with one product photo. Upgrade when you list more.')}
`,mount(){
 const st={scene:'cafe',ratio:'1/1',mkt:'shopee',view:'img'};
 const frame=$('#lsFrame');
 function side(){const s=$('#lsSide');if(st.view==='img'){s.innerHTML=`<div class="kv" style="gap:8px"><span class="over">Background</span><div class="chips" role="radiogroup" id="lsScene">${Object.entries(SCENES).map(([k,v])=>`<button class="chip" role="radio" aria-checked="${k===st.scene}" aria-pressed="${k===st.scene}" data-k="${k}">${v.name}</button>`).join('')}</div></div>
  <div class="kv" style="gap:8px"><span class="over">Size</span><div class="chips" role="radiogroup" id="lsRatio">${RATIOS.map(([r,l,p])=>`<button class="chip" role="radio" aria-checked="${r===st.ratio}" aria-pressed="${r===st.ratio}" data-r="${r}" data-tip="${p}"><span class="rbox" style="aspect-ratio:${r}"></span>${l}</button>`).join('')}</div></div>
  <div class="kv" style="gap:8px"><span class="over">Variations</span><div class="ls-vars">${['marble','pastel','studio'].map(k=>`<button class="ls-var" data-k="${k}" aria-label="Use ${SCENES[k].name}">${serum(k)}</button>`).join('')}</div></div>
  <div class="ls-foot"><span class="cap">≈ credits shown before you run</span><button class="btn btn-primary" id="lsDl">${ic('down')} Download all</button></div>`}
  else{const m=MKT[st.mkt];s.innerHTML=`<div class="kv" style="gap:8px"><span class="over">Marketplace ${prop('Per-marketplace presets (title length, language) are proposed. Today you name the marketplace in the prompt.')}</span><div class="seg" role="tablist" id="lsMkt" data-own>${Object.entries(MKT).map(([k,v])=>`<button role="tab" aria-selected="${k===st.mkt}" data-k="${k}">${v.n}</button>`).join('')}</div></div>
  <div class="copyb fade-in"><span class="cap num">Title · ${m.t.length} chars</span><p class="t3" style="font-size:15px">${esc(m.t)}</p><ul>${m.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="ls-foot"><span class="cap">Drafted, never posted for you</span><button class="btn btn-secondary" id="lsCopy">${ic('copy')} Copy listing</button></div>`}}
 function draw(){frame.style.aspectRatio=st.ratio;frame.innerHTML=serum(st.scene);const r=RATIOS.find(x=>x[0]===st.ratio);$('#lsDim').textContent=`${r[1]} · ${r[2]}${st.scene==='cutout'?' · transparent PNG':''}`}
 side();
 $('#lsView').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#lsView button').forEach(x=>x.setAttribute('aria-selected',x===b));st.view=b.dataset.v;side()});
 $('#lsSide').addEventListener('click',async e=>{const t=e.target;let c;
  if(c=t.closest('#lsScene .chip')){st.scene=c.dataset.k;side();draw();frame.classList.remove('pop');void frame.offsetWidth;frame.classList.add('pop')}
  else if(c=t.closest('#lsRatio .chip')){st.ratio=c.dataset.r;side();draw()}
  else if(c=t.closest('.ls-var')){st.scene=c.dataset.k;side();draw()}
  else if(c=t.closest('#lsMkt button')){st.mkt=c.dataset.k;side()}
  else if(c=t.closest('#lsCopy')){c.innerHTML=`${ic('check')} Copied`;c.classList.add('done');setTimeout(()=>{if(document.contains(c)){c.innerHTML=`${ic('copy')} Copy listing`;c.classList.remove('done')}},1600)}
  else if(c=t.closest('#lsDl')){c.setAttribute('aria-busy','true');await wait(800);c.removeAttribute('aria-busy');toast('Prototype: 4 images would download as a ZIP.')}});
 const vid=$('#vid');let playing=!reduce,t0=performance.now(),acc=0,raf;
 const tick=n=>{if(!document.contains(vid))return;if(playing){const s=((acc+(n-t0))/1000)%6;$('#vidT').textContent=`0:0${Math.floor(s)} / 0:06`;$('#vidP').style.width=(s/6*100)+'%'}raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);
 const setPlay=p=>{if(p){t0=performance.now()}else{acc+=performance.now()-t0}playing=p;vid.classList.toggle('paused',!p);$('#vidPlay').innerHTML=ic(p?'pause':'play',16);$('#vidPlay').setAttribute('aria-label',p?'Pause':'Play')};setPlay(playing);
 $('#vidPlay').addEventListener('click',()=>setPlay(!playing));
 $('#vMoves').addEventListener('click',e=>{const b=e.target.closest('.vrow');if(!b)return;$$('.vrow').forEach(x=>x.setAttribute('aria-checked',x===b));vid.dataset.move=b.dataset.k;acc=0;t0=performance.now();const i=$('.vid-in');i.style.animation='none';void i.offsetWidth;i.style.animation=''});
 const lc=i=>{const [d,cap,vis]=LAUNCH[i];$('#lcCopy').innerHTML=`<div class="copyb fade-in"><span class="cap">Caption · posts ${d==='Tomorrow'?'tomorrow':'in '+d} at 9:00 WIB</span><p class="t3">${cap}</p><span class="small">${vis}</span></div>`;const sc=['studio','marble','pastel'][i];$('#lcArt').innerHTML=`<div class="art-frame fade-in" style="aspect-ratio:4/5;${i===0?'filter:brightness(.35) contrast(1.1)':''}">${serum(sc,{label:i===0?'':'VELA'})}</div>`};lc(0);
 $('#lcSeg').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#lcSeg button').forEach(x=>x.setAttribute('aria-selected',x===b));lc(+b.dataset.i)});
 const R={Calm:'Hi! Sorry for the wait. Your parcel left our warehouse on Monday and is with the courier now. Here\u2019s your tracking link: [link]. If it hasn\u2019t moved in 2 days, reply here and we\u2019ll chase it for you.',Friendly:'Hi there! 😊 Totally get it, waiting is the worst. Good news: it\u2019s on the way with the courier. Tracking: [link]. We\u2019ll keep an eye on it too!',Short:'Hi! It shipped Monday and is with the courier. Tracking: [link]. Reply if it hasn\u2019t moved in 2 days.'};
 const care=k=>{$('#careTxt').textContent=R[k]};care('Calm');
 $('#careTone').addEventListener('click',e=>{const c=e.target.closest('.chip');if(!c)return;$$('#careTone .chip').forEach(x=>{x.setAttribute('aria-checked',x===c);x.setAttribute('aria-pressed',x===c)});care(c.dataset.k)});
 $('#careCopy').addEventListener('click',e=>{const b=e.currentTarget;b.innerHTML=`${ic('check')} Copied`;b.classList.add('done');setTimeout(()=>{b.innerHTML=`${ic('copy')} Copy reply`;b.classList.remove('done')},1600)});
 $('#cs').addEventListener('click',async e=>{const g=e.target.closest('#csGo'),ap=e.target.closest('[data-apply]');
  if(g){g.setAttribute('aria-busy','true');await wait(900);$('#csOut').innerHTML=`<div class="kv pop" style="gap:8px"><span class="cap">Score</span><b class="t1 num">72<span class="small"> / 100</span></b><ul class="sugg"><li><span>Product fills 30% of frame. Try 50–60%.</span><button class="btn btn-sm btn-secondary" data-apply="crop">Apply</button></li><li><span>Flat light. Add a warm key light.</span><button class="btn btn-sm btn-secondary" data-apply="light">Apply</button></li></ul></div>`}
  if(ap){ap.textContent='Applied';ap.disabled=true;ap.classList.add('done');const img=$('.cs-img');if(ap.dataset.apply==='crop')img.classList.add('crop');else img.innerHTML=serum('cafe');const n=$$('#csOut [data-apply]:disabled').length;$('#csOut b.t1').innerHTML=`${72+n*9}<span class="small"> / 100</span>`}});
}};
