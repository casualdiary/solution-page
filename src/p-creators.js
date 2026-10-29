const WEEK=[
 {d:'Mon',f:'Short',r:'9/16',hook:'Rain at 5pm means one thing in Jakarta.',cap:'Ranking 5 rainy-season street snacks by how fast they sell out.',c:['#1E2430','#E8604C']},
 {d:'Tue',f:'Carousel',r:'1/1',hook:'Where to find them (save this).',cap:'7 slides: stall, dish, price, best time to go.',c:['#F3E7D3','#B5652B']},
 {d:'Wed',f:'Voiceover',r:'9/16',hook:'The story of wedang ronde, in 40 seconds.',cap:'Narrated in your cloned voice over b-roll.',c:['#2E2A3A','#D9A441']},
 {d:'Thu',f:'Story',r:'9/16',hook:'Poll: martabak manis or telor?',cap:'2 frames + poll sticker text.',c:['#0F3D3A','#F2C14E']},
 {d:'Fri',f:'Long video',r:'16/9',hook:'I ate only rainy-season food for 3 days',cap:'Thumbnail, title options and chapter list.',c:['#3A1F1A','#F07B3F']},
 {d:'Sat',f:'Community',r:'1/1',hook:'Your turn: best gorengan in your area?',cap:'Pinned comment + 5 reply templates.',c:['#EEF0F2','#2F6DF6']},
 {d:'Sun',f:'Recap',r:'4/5',hook:'This week in 4 photos.',cap:'Photo dump caption, 3 options.',c:['#E9E4F2','#6B4FA0']}
];
const GENRES=['Cinematic','Comedy','Dark Comedy','Emotional','Fantasy','Product','Satire','Sci-Fi','Sports Ad','Stop-Motion','Animation','Travel'];
const SB={Cinematic:['SLOW',['Wide: street under rain, neon reflections','Close: steam rising from the wok','Medium: vendor\u2019s hands, slow motion','Wide: you, umbrella, first bite']],
 Comedy:['FAST',['You sprint between stalls','Smash cut: soaked, still holding food','Vendor\u2019s deadpan reaction','Title card: “worth it”']],
 Travel:['BALANCED',['Drone-style establishing shot','Map overlay: 3 stalls','POV walk through the market','Golden-hour sign-off']],
 'Stop-Motion':['FAST',['Ingredients arrive one by one','Batter pours itself','Martabak folds in 6 frames','Plate slides to camera']]};
const sbFor=g=>SB[g]||[['Emotional','Fantasy','Sci-Fi','Animation'].includes(g)?'SLOW':['Sports Ad','Satire','Dark Comedy'].includes(g)?'FAST':'BALANCED',[`Opening: ${g.toLowerCase()} tone set in one shot`,'Build: the street, the rain, the queue','Turn: the first bite','Close: your line to camera']];
const VOICES=['English','Bahasa Indonesia','Español','日本語'];
const REPLIES=[['“What camera?”','Phone, always. Settings in the pinned post.'],['“Where is this stall?”','Every location is on the map in my bio.'],['“Is it halal?”','I ask every vendor; it\u2019s in each caption.'],['“Collab?”','Email in bio. I reply within a week.'],['“How much?”','Prices are on slide 3 of every carousel.']];
PAGES['creators']={html:()=>`
<section class="hero ink cr-hero"><div class="wrap"><div class="kv" style="gap:20px;max-width:760px"><span class="eyebrow" style="color:#AEB4BB"><span class="dot"></span>For content creators</span><h1 class="hero-t">Film once. Post all week.</h1><p class="lead">Give Designs.ai one idea. It drafts seven days of shorts, carousels, covers and voiceover in your voice, and waits for your yes on each.</p></div>
<div class="wk" id="wk"><form class="wk-f" id="wkForm"><label class="sr" for="wkIdea">Your idea</label><span class="cap" style="color:#8C939B">Idea</span><input id="wkIdea" value="Rainy-season street food in Jakarta" autocomplete="off"><button class="btn" style="background:#fff;color:var(--neutral-900)" id="wkGo">Plan my week</button></form>
<div class="wk-grid" id="wkGrid" role="list">${WEEK.map((w,i)=>`<button class="wk-d" role="listitem" data-i="${i}" disabled><span class="cap num">${w.d}</span><span class="wk-slot"></span><span class="wk-f2 cap">${w.f}</span></button>`).join('')}</div>
<p class="cap" style="color:#8C939B;margin-top:12px">Calendar view ${prop('Today Designs Claw drafts the plan as a message (e.g. every 25th at 10am). A calendar view is proposed.')} · Click a day to open its draft.</p></div>
</div></section>

<section><div class="wrap"><div class="g2"><div class="kv" style="gap:16px"><span class="over">Sounds like you ${prop('Clone my voice is in Creative mode today; proposed to move into Agent mode with the Creative sunset.','From Creative mode')}</span><h2 class="sec-t">Your voice, on the takes you didn\u2019t record</h2><p class="lead">Record a 1–2 minute sample once. Name the voice, use it for narration, and delete it whenever you want. Multilingual voiceover is built in.</p></div>
<div class="card vc"><div class="vc-step" id="vcRec"><div class="kv"><b class="t3">1. Record a sample</b><span class="small" id="vcRecS">1–2 minutes, natural tone</span></div><button class="btn btn-secondary" id="vcRecB">${ic('mic')} Record</button></div>
<div class="vc-step" id="vcUse" aria-disabled="true"><div class="kv" style="gap:8px;flex:1"><b class="t3">2. Read a script in your voice</b><div class="chips" role="radiogroup" id="vcLang">${VOICES.map((v,i)=>`<button class="chip" role="radio" aria-checked="${i===0}" aria-pressed="${i===0}" disabled>${v}</button>`).join('')}</div><div class="wave" id="wave">${Array.from({length:48},(_,i)=>`<i style="height:${10+Math.round(Math.abs(Math.sin(i*0.7)*Math.cos(i*0.23))*28)}px"></i>`).join('')}</div></div><button class="iconbtn vc-play" id="vcPlay" aria-label="Play" disabled>${ic('play',18)}</button></div>
<p class="cap">Language list is an example. Check the app for supported languages.</p></div></div></div></section>

<section class="sunken rule"><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Storyboard agent</span><h2 class="sec-t">See the edit before you shoot it</h2><p class="lead">Pick a genre. The Storyboard agent plans the shots and the pace, then hands the plan to the Video agent.</p></div></div>
<div class="chips" role="radiogroup" id="sbG" style="margin-bottom:24px">${GENRES.map((g,i)=>`<button class="chip" role="radio" aria-checked="${i===0}" aria-pressed="${i===0}" data-g="${g}">${g}</button>`).join('')}</div>
<div class="sb" id="sb" aria-live="polite"></div></div></section>

<section><div class="wrap"><div class="split"><div class="kv" style="gap:16px"><span class="over">Community</span><h2 class="sec-t">The questions you always get, answered once</h2><p class="lead">“Write the pinned comment and 5 reply templates for the questions I always get.”</p></div>
<div class="rows">${REPLIES.map(([q,a],i)=>`<div class="row" style="grid-template-columns:200px 1fr auto"><b class="t3">${q}</b><span class="muted">${a}</span><button class="btn btn-sm btn-ghost" data-copy="${i}">${ic('copy',14)} Copy</button></div>`).join('')}</div></div></div></section>

<section class="tight"><div class="wrap">${quotePh('creator')}</div></section>
${faqBlock([
 ['Will it actually sound like me?','Clone my voice builds a voice from a 1–2 minute sample. You can name voices and delete them at any time.'],
 ['Does it post for me?','No. Every slot is a draft that waits for your yes, a tweak or a no.'],
 ['Which sizes does it make?','9:16 TikTok and Shorts, 1:1 Instagram, 4:5 Facebook, 16:9 YouTube, 2:3 Pinterest and more.'],
 ['Can I use it for sponsored posts?','Yes. Commercial use is supported; rights vary by plan, so check the licence agreement.'],
 ['Which AI models does it use?','Each task is routed to the model best suited for it, or you choose your own: Claude, ChatGPT, Gemini, Grok and more.']
])}
${crossLinks('creators')}
${finalCta('Spend the week creating.','Start free. Bring one idea.')}
`,mount(){
 let planned=false;
 const plan=async(silent)=>{const b=$('#wkGo');b.setAttribute('aria-busy','true');const ds=$$('.wk-d');ds.forEach(d=>{d.classList.remove('on');d.disabled=true;d.querySelector('.wk-slot').innerHTML=''});
  for(const [i,d] of ds.entries()){await wait(reduce?0:160);const w=WEEK[i];d.querySelector('.wk-slot').innerHTML=`<span class="art-frame pop" style="aspect-ratio:${w.r}">${cover({bg:w.c[0],acc:w.c[1],title:w.hook,tag:w.f.toUpperCase(),ratio:w.r})}</span>`;d.classList.add('on');d.disabled=false;d.setAttribute('aria-label',`${w.d}: ${w.f}. ${w.hook}`)}
  b.removeAttribute('aria-busy');planned=true;if(!silent)toast('7 drafts ready. Nothing is posted until you approve.')};
 $('#wkForm').addEventListener('submit',e=>{e.preventDefault();plan(false)});plan(true);
 $('#wkGrid').addEventListener('click',e=>{const d=e.target.closest('.wk-d');if(!d||d.disabled)return;const w=WEEK[+d.dataset.i];
  panel('Draft · '+w.d,`<div class="kv" style="gap:16px"><span class="cap">${w.d} · ${w.f} · ${w.r.replace('/',':')}</span><div class="art-frame" style="aspect-ratio:${w.r};max-width:${w.r==='16/9'?'100%':'220px'}">${cover({bg:w.c[0],acc:w.c[1],title:w.hook,tag:w.f.toUpperCase(),ratio:w.r})}</div><div class="kv"><span class="over">Hook</span><p class="t3">${w.hook}</p></div><div class="kv"><span class="over">Plan</span><p class="small">${w.cap}</p></div></div>`,`<button class="btn btn-secondary" id="twk">Tweak</button><button class="btn btn-primary" id="apprv">${d.classList.contains('ok')?'Approved':'Approve draft'}</button>`,d);
  $('#twk').onclick=()=>{closeDrawers();toast('Prototype: opens the thread with this draft attached.')};
  $('#apprv').onclick=()=>{d.classList.add('ok');closeDrawers();toast(`${w.d} approved`,['Undo',()=>d.classList.remove('ok')])}});
 // voice
 $('#vcRecB').addEventListener('click',async e=>{const b=e.currentTarget;b.disabled=true;const s=$('#vcRecS');for(let t=0;t<=84;t+=reduce?84:6){s.textContent=`Recording… ${Math.floor(t/60)}:${String(t%60).padStart(2,'0')}`;await wait(50)}s.textContent='Sample 1:24 saved as “My voice”';b.innerHTML=`${ic('check')} Saved`;b.classList.add('done');$('#vcUse').setAttribute('aria-disabled','false');$$('#vcLang .chip,#vcPlay').forEach(x=>x.disabled=false)});
 $('#vcLang').addEventListener('click',e=>{const c=e.target.closest('.chip');if(!c||c.disabled)return;$$('#vcLang .chip').forEach(x=>{x.setAttribute('aria-checked',x===c);x.setAttribute('aria-pressed',x===c)})});
 let pt;$('#vcPlay').addEventListener('click',e=>{const b=e.currentTarget,w=$('#wave');const on=!w.classList.contains('play');w.classList.toggle('play',on);b.innerHTML=ic(on?'pause':'play',18);b.setAttribute('aria-label',on?'Pause':'Play');clearTimeout(pt);if(on)pt=setTimeout(()=>{w.classList.remove('play');b.innerHTML=ic('play',18);b.setAttribute('aria-label','Play')},4000)});
 // storyboard
 const pal=[['#1E2430','#E8604C'],['#0F3D3A','#F2C14E'],['#3A1F1A','#F07B3F'],['#2E2A3A','#D9A441']];
 const sb=g=>{const [pace,shots]=sbFor(g);$('#sb').innerHTML=`<div class="sb-h"><span class="badge badge-soon">Pace · ${pace}</span><span class="small">4 shots · ${g} · ≈ 20 s</span></div><div class="sb-g">${shots.map((s,i)=>`<figure class="sb-f fade-in" style="animation-delay:${i*50}ms"><div class="art-frame" style="aspect-ratio:16/9">${sbFrame(i,pal[i],g)}</div><figcaption><span class="cap num">Shot ${i+1}</span><span class="small" style="color:var(--text-primary)">${s}</span></figcaption></figure>`).join('')}</div>`};
 sb('Cinematic');$('#sbG').addEventListener('click',e=>{const c=e.target.closest('.chip');if(!c)return;$$('#sbG .chip').forEach(x=>{x.setAttribute('aria-checked',x===c);x.setAttribute('aria-pressed',x===c)});sb(c.dataset.g)});
 $$('[data-copy]').forEach(b=>b.addEventListener('click',()=>{b.innerHTML=`${ic('check',14)} Copied`;setTimeout(()=>b.innerHTML=`${ic('copy',14)} Copy`,1500)}));
}};
function sbFrame(i,[bg,ac],g){const comp=[`<rect y="70" width="320" height="110" fill="${ac}" opacity=".25"/><path d="M0 120h320" stroke="${ac}" stroke-width="2" opacity=".6"/><rect x="60" y="40" width="30" height="80" fill="${ac}" opacity=".7"/><rect x="220" y="30" width="40" height="90" fill="${ac}" opacity=".5"/>`,`<circle cx="160" cy="110" r="50" fill="${ac}"/><path d="M140 60c0-20 20-20 20-40M170 60c0-20 15-20 15-35" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>`,`<rect x="100" y="60" width="120" height="80" rx="40" fill="${ac}" opacity=".85"/><circle cx="130" cy="100" r="14" fill="${bg}"/>`,`<circle cx="200" cy="80" r="26" fill="${ac}"/><path d="M160 180c0-40 80-40 80 0" fill="${ac}"/><path d="M60 60l40 40" stroke="${ac}" stroke-width="4"/>`][i];
return `<svg viewBox="0 0 320 180" class="art" role="img" aria-label="${g} storyboard frame ${i+1}"><rect width="320" height="180" fill="${bg}"/>${comp}<text x="12" y="20" font-size="10" fill="#fff" opacity=".6" font-family="Inter">${String(i+1).padStart(2,'0')}</text></svg>`}
