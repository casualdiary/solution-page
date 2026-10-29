function storyCard(){return `<svg viewBox="0 0 180 320" class="art" role="img" aria-label="Open house story"><rect width="180" height="320" fill="#EDEBE6"/><rect x="0" y="0" width="180" height="170" fill="#9DB1A6"/><path d="M30 170V95l60-40 60 40v75z" fill="#F7F5F0"/><rect x="78" y="120" width="24" height="50" fill="#3E4A44"/><rect x="44" y="105" width="22" height="22" fill="#C9D6CF"/><rect x="114" y="105" width="22" height="22" fill="#C9D6CF"/><text x="14" y="200" font-size="9" font-weight="700" letter-spacing="1.5" fill="#3E4A44" font-family="Inter">OPEN HOUSE · SUN 2–5PM</text><text x="14" y="232" font-size="22" font-weight="800" fill="#1E2420" font-family="Inter" letter-spacing="-.6">12 Jalan</text><text x="14" y="258" font-size="22" font-weight="800" fill="#1E2420" font-family="Inter" letter-spacing="-.6">Kenanga</text><text x="14" y="282" font-size="9" fill="#3E4A44" font-family="Inter">1,100 sq ft · corner · 2 parking</text></svg>`}
function quoteCard(){return `<svg viewBox="0 0 300 300" class="art" role="img" aria-label="Testimonial quote card"><rect width="300" height="300" fill="#E4EDF7"/><text x="24" y="70" font-size="64" fill="#7FA3C9" font-family="Georgia">“</text><text x="24" y="120" font-size="19" font-weight="600" fill="#1F3550" font-family="Georgia">She explained my policy</text><text x="24" y="146" font-size="19" font-weight="600" fill="#1F3550" font-family="Georgia">better than the brochure.</text><text x="24" y="190" font-size="12" fill="#1F3550" opacity=".7" font-family="Inter">— Aisyah</text><rect x="24" y="250" width="60" height="4" fill="#7FA3C9"/></svg>`}
function revisionCard(){return `<svg viewBox="0 0 220 300" class="art" role="img" aria-label="Electrolysis revision visual"><rect width="220" height="300" fill="#FFFDF7"/><text x="16" y="34" font-size="17" font-weight="800" fill="#1C2A3A" font-family="Inter">Electrolysis</text><text x="16" y="52" font-size="9" fill="#1C2A3A" opacity=".6" font-family="Inter">Key points · Form 4</text><rect x="40" y="70" width="140" height="90" rx="6" fill="#E3F0FA" stroke="#1C2A3A"/><rect x="70" y="60" width="8" height="70" fill="#1C2A3A"/><rect x="142" y="60" width="8" height="70" fill="#C0392B"/><text x="74" y="56" font-size="9" text-anchor="middle" fill="#1C2A3A" font-family="Inter">−</text><text x="146" y="56" font-size="9" text-anchor="middle" fill="#C0392B" font-family="Inter">+</text>${['Cathode: reduction (gain e⁻)','Anode: oxidation (lose e⁻)','Ions move to opposite charge'].map((t,i)=>`<circle cx="22" cy="${190+i*28}" r="4" fill="#1C2A3A"/><text x="34" y="${194+i*28}" font-size="10.5" fill="#1C2A3A" font-family="Inter">${t}</text>`).join('')}</svg>`}
const SMB={
 cafe:{tab:'Café & F&B',group:'Kopi Teduh · staff',items:[
  {tag:'Daily content · scheduled',q:'Every day at 8.30am, draft one post for my café. Alternate promo and baking tip, plus a square visual in our colours.',a:'Done. Tomorrow 8.30am I\u2019ll send a caption + 1:1 visual here for your yes.'},
  {tag:'Reputation',q:'Draft a warm reply to this Google review, in English. Apologise for the wait, offer an Americano on us.',a:'“Thank you for the honest note, Daniel. Saturday got busier than we planned… next Americano is on us.”'},
  {tag:'Print',q:'A3 poster: "Weekend set lunch $8.90". Teal and cream, bold, space top left for our logo.',a:'Here\u2019s the A3 poster. Logo space kept top left.',art:'poster'}]},
 property:{tab:'Property agent',group:'Listings · Rina',items:[
  {tag:'Listing kit',q:'Write the listing: 1,100 sq ft corner unit, 2 parking, near international school. Headline plus 5 bullets.',a:'“Corner light, school-run easy.” Headline and 5 bullets ready, in your listing tone.'},
  {tag:'Viewing day · scheduled',q:'Every Saturday at 9am, remind me which viewings are on today and draft a confirmation message for each client.',a:'Set for Saturdays 9am. Drafts only: you send them.'},
  {tag:'Stories',q:'Story visual for the open house: Sunday 2 to 5pm, clean modern look, the address big.',a:'9:16 story, address set large.',art:'story'}]},
 insurance:{tab:'Insurance agent',group:'Clients · Hafiz',items:[
  {tag:'Weekly education · scheduled',q:'Every Monday at 10am, draft one educational post. This week: why young people need coverage. Simple language, no hard sell.',a:'Mondays 10am. This week\u2019s draft: “Three things nobody tells you at 25.”'},
  {tag:'Renewals',q:'Here\u2019s my client renewal list. Remind me 2 weeks before each date, with a draft message for that client.',a:'14 renewals found. First reminder: 12 Nov, for Mr Tan.'},
  {tag:'Social proof',q:'Turn this testimonial into a clean quote card, soft blue, client\u2019s first name only.',a:'Quote card ready, first name only.',art:'quote'}]},
 tuition:{tab:'Tuition teacher',group:'Form 4 Chemistry',items:[
  {tag:'Weekly quiz · scheduled',q:'Every Friday at 8pm, drop a 5-question quiz on this week\u2019s topic in the class group. Reveal answers Saturday 9am.',a:'Fridays 8pm in this group, answers Saturdays 9am.'},
  {tag:'Parents',q:'Draft a short parent update: what we covered, what to revise at home. Friendly tone.',a:'Parent update drafted, 90 words.'},
  {tag:'Revision',q:'One-page revision visual: electrolysis key points, clean layout, easy to read on a phone.',a:'One-page visual, sized for phones.',art:'rev'}]}
};
const SMB_ART={poster:()=>cafePoster({ink:'#0E4A52',acc:'#3AA6B0'}),story:storyCard,quote:quoteCard,rev:revisionCard};
const SCHED=[['DAILY · 7:30 AM','Morning brief','Weather, headlines that matter to you, and what you said this week is about.',false],['DAILY · 8:30 AM','Today\u2019s post, drafted','Caption and visual waiting for a yes, a tweak, or a no.',true],['MON · 9:00 AM','The week\u2019s content plan','Seven days mapped before your first meeting.',true],['FRI · 6:00 PM','Numbers recap','It asks the group for the week\u2019s figures, then hands back a one-pager.',false],['SUN · 8:00 PM','Week in review','What moved, what stalled, and next week\u2019s three priorities.',false],['1ST · 9:00 AM','Invoice reminders','Drafted and ready to send to whoever still owes you.',true]];
const CHANNELS={
 whatsapp:{n:'WhatsApp',steps:['Use a secondary WhatsApp number for your Claw (not your personal one).','Link it from Designs Claw in your account.','Add it to your staff group. Mention it when you need it.'],note:'Only the owner needs a Designs.ai login.'},
 telegram:{n:'Telegram',steps:['Open Designs Claw and choose Telegram.','Scan the QR code, then enter the 6-digit code.','Add it to a group and make it an admin so everyone can tag it.'],note:'Live in about 10 seconds after linking.'},
 slack:{n:'Slack',steps:['Create your own Slack app and paste its configuration token.','Invite the Claw to the channels you want.','It reads and replies once mentioned.'],note:'Teammates\u2019 replies use your credits.'},
 discord:{n:'Discord',soon:true,steps:['Coming soon.'],note:''}
};
PAGES['small-business']={html:()=>`
<section class="hero"><div class="wrap"><div class="hero-g">
<div class="hero-l"><span class="eyebrow"><span class="dot"></span>For small business owners</span><h1 class="hero-t">Close at nine. Tomorrow\u2019s post is already waiting for a yes.</h1>
<p class="lead">Designs Claw lives in the WhatsApp, Telegram or Slack group you already run the shop from. Tell it once. It drafts the posts, posters and replies on a schedule, in your brand.</p>
<div class="jobline"><span>Daily posts</span><span>Posters & promos</span><span>Review replies</span><span>Weekly numbers</span></div>
<div class="ctas"><button class="btn btn-primary btn-lg" data-cta="start" data-msg="Prototype: this would open sign-up, then Designs Claw setup.">Start Designs Claw</button><a class="btn btn-secondary btn-lg" href="#smb-sched">See the weekly routine</a></div>
<p class="cap">Hosting is included with every plan. You pay credits only for what it creates.</p></div>
<div class="smb-demo"><div class="seg" role="tablist" aria-label="Business type" id="smbSeg" data-own>${Object.entries(SMB).map(([k,v],i)=>`<button role="tab" aria-selected="${i===0}" data-k="${k}">${v.tab}</button>`).join('')}</div>
<div class="phone"><div class="ph-top"><span class="ph-av">KT</span><span class="kv" style="gap:0"><b id="smbGroup">Kopi Teduh · staff</b><span class="cap" id="smbMembers">You, Ayu, Bima, Designs Claw</span></span><span class="sp"></span><button class="iconbtn" id="smbReplay" aria-label="Replay conversation" data-tip="Replay">${ic('refresh',16)}</button></div>
<div class="ph-chat" id="smbChat" aria-live="polite"></div>
<div class="ph-tags" id="smbTags" role="tablist" aria-label="Example requests"></div></div></div>
</div></div></section>

<section class="sunken rule" id="smb-sched"><div class="wrap"><div class="split"><div class="kv" style="gap:16px;position:sticky;top:96px"><span class="over">On a schedule</span><h2 class="sec-t">Say it once. It happens every week.</h2><p class="lead">Every routine is one sentence in the chat. Turn on the two or three that matter. Scheduled runs spend credits like any other request.</p><p class="small num" id="schedSum"></p></div>
<div class="sched" role="list">${SCHED.map(([t,h,d,on],i)=>`<div class="sched-r" role="listitem"><span class="k num">${t}</span><div class="kv"><b class="t3">${h}</b><span class="small">${d}</span></div><button class="switch" role="switch" aria-checked="${on}" aria-label="${h}" data-i="${i}"></button></div>`).join('')}</div></div></div></section>

<section><div class="wrap"><div class="sec-head"><div class="l"><span class="over">Set up</span><h2 class="sec-t">In the chat your staff already open</h2><p class="lead">No app to install. Pick a channel and follow three steps.</p></div></div>
<div class="ch-g"><div class="ch-tabs" role="tablist" aria-label="Channel" id="chTabs">${Object.entries(CHANNELS).map(([k,v],i)=>`<button role="tab" aria-selected="${i===0}" data-k="${k}"><b>${v.n}</b>${v.soon?'<span class="badge badge-soon">Soon</span>':''}</button>`).join('')}</div><div class="ch-panel" id="chPanel" role="tabpanel"></div></div></div></section>

<section class="rule"><div class="wrap"><div class="g2"><div class="kv" style="gap:16px"><span class="over">Your brand, from your website</span><h2 class="sec-t">Paste your URL. Every post after that looks like you.</h2><p class="lead">Designs.ai pulls your logo, colours and type into a brand kit. If you don\u2019t have a site yet, describe the business instead.</p>
<form class="url-f" id="bkForm"><label class="sr" for="bkUrl">Website</label><input id="bkUrl" value="kopiteduh.id" autocomplete="off"><button class="btn btn-primary" id="bkGo">Build brand kit</button></form></div>
<div class="bk" id="bk" aria-live="polite"><div class="bk-empty small">Your brand kit appears here.</div></div></div></div></section>

<section class="tight"><div class="wrap">${quotePh('small business owner')}</div></section>
${faqBlock([
 ['Do I need any design experience?','No. Describe what you need in plain words. If something is missing, it asks one question at a time.'],
 ['What does Designs Claw cost to run?','Hosting is included with every Designs.ai plan. Activating it needs an active plan and a credit balance above zero; what it creates is billed to your credits.'],
 ['Will it post to Instagram for me?','No. It drafts the caption and visual and waits for your yes, a tweak or a no. You stay the one who posts.'],
 ['Can my staff use it?','Yes. Add your Claw to the group chat; everyone can mention it and only you need the login. On Slack, teammates\u2019 replies use your credits.'],
 ['Can I use what it makes commercially?','Yes. Designs.ai supports commercial use. Rights vary by plan (Standard on Plus and Pro, or Enterprise), so check the licence agreement.']
])}
${crossLinks('small-business')}
${finalCta('Get your evenings back.','Start on the free tier, set up your Claw, and turn on one routine tonight.')}
`,mount(){
 let cur='cafe',tagI=2,run=0;const chat=$('#smbChat');
 const bubble=(cls,html)=>{const d=document.createElement('div');d.className='msg '+cls+' fade-in';d.innerHTML=html;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;return d};
 async function play(){const my=++run;const it=SMB[cur].items[tagI];chat.innerHTML='';
  bubble('me',`<span class="cap tagc">${it.tag}</span>${esc(it.q)}`);await wait(reduce?0:500);if(my!==run)return;
  const ty=bubble('claw','<span class="typing"><i></i><i></i><i></i></span>');await wait(reduce?0:900);if(my!==run)return;ty.remove();
  bubble('claw',`<b class="cap" style="color:var(--text-secondary)">Designs Claw</b>${esc(it.a)}${it.art?`<div class="msg-art">${SMB_ART[it.art]()}</div><div class="msg-act"><button class="btn btn-sm btn-primary" data-ok>Looks good</button><button class="btn btn-sm btn-secondary" data-tweak>Tweak</button></div>`:''}`)}
 function tags(){$('#smbTags').innerHTML=SMB[cur].items.map((x,i)=>`<button class="chip" role="tab" aria-selected="${i===tagI}" data-i="${i}">${x.tag.replace(' · scheduled','')}${x.tag.includes('scheduled')?ic('clock',13):''}</button>`).join('')}
 const MEM={cafe:'You, Ayu, Bima, Designs Claw',property:'You, Designs Claw',insurance:'You, Designs Claw',tuition:'You, 24 students, Designs Claw'};
 function setBiz(k){cur=k;tagI=SMB[k].items.findIndex(x=>x.art);$('#smbGroup').textContent=SMB[k].group;$('#smbMembers').textContent=MEM[k];tags();play()}
 $('#smbSeg').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#smbSeg button').forEach(x=>x.setAttribute('aria-selected',x===b));setBiz(b.dataset.k)});
 $('#smbTags').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;tagI=+b.dataset.i;tags();play()});
 $('#smbReplay').addEventListener('click',play);
 chat.addEventListener('click',e=>{if(e.target.closest('[data-ok]')){const a=e.target.closest('.msg-act');a.innerHTML=`<span class="badge badge-live">Approved · saved to Library</span>`}if(e.target.closest('[data-tweak]')){bubble('me','Make the title bigger and warmer.');setTimeout(()=>bubble('claw','<b class="cap" style="color:var(--text-secondary)">Designs Claw</b>Updated: bigger title, warmer cream. Same layout.'),reduce?0:700)}});
 setBiz('cafe');
 const sum=()=>{const n=$$('.sched .switch[aria-checked=true]').length;$('#schedSum').textContent=n?`${n} routine${n>1?'s':''} on. Each one runs in your time zone (WIB).`:'No routines on. Nothing will run.'};sum();
 $('.sched').addEventListener('click',e=>{const s=e.target.closest('.switch');if(!s)return;const on=s.getAttribute('aria-checked')!=='true';s.setAttribute('aria-checked',on);sum();toast(on?`“${s.getAttribute('aria-label')}” turned on`:`“${s.getAttribute('aria-label')}” paused`,['Undo',()=>{s.setAttribute('aria-checked',!on);sum()}])});
 const ch=k=>{const c=CHANNELS[k];$('#chPanel').innerHTML=`<div class="fade-in kv" style="gap:16px"><ol class="steps">${c.steps.map(s=>`<li>${s}</li>`).join('')}</ol>${c.note?`<p class="small">${c.note}</p>`:''}${c.soon?`<button class="btn btn-secondary" id="notify">Notify me</button>`:`<button class="btn btn-primary" data-cta="start" data-msg="Prototype: this would open Designs Claw, ${c.n} setup.">Set up on ${c.n}</button>`}</div>`;const n=$('#notify');if(n)n.onclick=()=>{n.textContent='We\u2019ll email you';n.disabled=true;n.classList.add('done')}};
 ch('whatsapp');const ct=$('#chTabs');ct.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',ct).forEach(x=>x.setAttribute('aria-selected',x===b));ch(b.dataset.k)});
 const bkRun=async()=>{const b=$('#bkGo'),v=$('#bkUrl').value.trim();if(!v){$('#bkUrl').focus();return}b.setAttribute('aria-busy','true');const bk=$('#bk');
  const steps=['Reading '+esc(v),'Finding logo','Picking colours','Choosing type'];bk.innerHTML=`<ul class="ticks prog">${steps.map(s=>`<li>${s}</li>`).join('')}</ul>`;
  for(const li of $$('.prog li',bk)){li.classList.add('on');await wait(reduce?0:380);li.classList.add('ok')}b.removeAttribute('aria-busy');
  bk.innerHTML=`<div class="bk-kit pop"><div class="bk-logo"><span>KT</span><div class="kv"><b class="t3">Kopi Teduh</b><span class="cap">Logo · wordmark</span></div></div><div class="bk-row"><span class="cap">Colours</span><div class="sw">${['#2B2420','#C8873F','#F3E7D3','#7E9B5B'].map(c=>`<button class="swc" style="background:${c}" data-tip="${c} · click to copy" aria-label="Copy ${c}" data-c="${c}"></button>`).join('')}</div></div><div class="bk-row"><span class="cap">Type</span><div><b style="font:700 22px/1 Georgia,serif">Aa</b> <span class="small">Display · Georgia</span> &nbsp; <b style="font:600 18px/1 Inter">Aa</b> <span class="small">Body · Inter</span></div></div><div class="bk-row"><span class="cap">Voice</span><span class="small">Warm, neighbourly, short sentences</span></div><div class="bk-art">${cafePoster({title:'Pandan latte is back',sub:'This week only',price:'Rp 32k'})}</div></div>`;
  $$('.swc',bk).forEach(s=>s.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(s.dataset.c).catch(()=>{});toast(`Copied ${s.dataset.c}`)})};
 $('#bkForm').addEventListener('submit',e=>{e.preventDefault();bkRun()});
 const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();bkRun()}},{threshold:.3});io.observe($('#bk'));
}};
