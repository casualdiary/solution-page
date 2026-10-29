import {createRequire} from 'module';const require=createRequire('/workspace/shot-tools/package.json');const p=require('puppeteer-core');
const b=await p.launch({executablePath:'/usr/bin/google-chrome-stable',args:['--no-sandbox']});const w=ms=>new Promise(r=>setTimeout(r,ms));
const routes=(process.argv[2]||',small-business,online-sellers,creators,marketing-teams,agencies,startups').split(',');const VWS=(process.argv[3]||'1440,390').split(',').map(Number);
const errs=[];const dead=[];let total=0;
for(const vw of VWS){
const pg=await b.newPage();await pg.setViewport({width:vw,height:900});
pg.on('console',m=>{if(m.type()==='error'||m.type()==='warning')errs.push(m.text())});pg.on('pageerror',e=>errs.push('PAGEERR '+e.message));
await pg.goto('file:///workspace/designs-solutions/index.html',{waitUntil:'networkidle0'});
for(const r of routes){
 const load=async()=>{await pg.evaluate(r=>{location.hash='#/x';location.hash='#/'+r},r);await w(1800);};
 await load();
 const n=await pg.evaluate(()=>{const els=[...document.querySelectorAll('#main a,#main button,#main [role=tab],#main [role=radio],#main input,header a,header button')].filter(e=>{const s=getComputedStyle(e);const rc=e.getBoundingClientRect();return rc.width>0&&rc.height>0&&s.visibility!=='hidden'&&!e.disabled&&!e.closest('[hidden]')&&!e.closest('.menu')&&!e.closest('.mega')});els.forEach((e,i)=>e.dataset.aid=i);return els.length});
 for(let i=0;i<n;i++){
  const info=await pg.evaluate(i=>{const e=document.querySelector(`[data-aid="${i}"]`);if(!e)return null;const rc=e.getBoundingClientRect();if(e.disabled||rc.width===0)return null;e.scrollIntoView({block:'center'});return {t:(e.innerText||e.value||e.getAttribute('aria-label')||e.tagName).trim().slice(0,40),tag:e.tagName}},i);
  if(!info)continue;total++;
  if(info.tag==='INPUT')continue;
  const before=await pg.evaluate(()=>[(()=>{const h=document.body.innerHTML;let a=0;for(let k=0;k<h.length;k+=3)a=(a*31+h.charCodeAt(k))|0;return h.length+'|'+a})(),location.hash,document.activeElement&&document.activeElement.dataset.aid].join('#'));
  const h0=await pg.evaluate(()=>location.hash);
  try{await pg.evaluate(i=>document.querySelector(`[data-aid="${i}"]`).click(),i)}catch(e){}
  await w(380);
  const after=await pg.evaluate(()=>[(()=>{const h=document.body.innerHTML;let a=0;for(let k=0;k<h.length;k+=3)a=(a*31+h.charCodeAt(k))|0;return h.length+'|'+a})(),location.hash,document.activeElement&&document.activeElement.dataset.aid].join('#'));
  if(before===after)dead.push(`${vw} #/${r} [${i}] ${info.tag} "${info.t}"`);
  const h1=await pg.evaluate(()=>location.hash);
  await pg.keyboard.press('Escape');
  if(h1!==h0||!(await pg.evaluate(i=>!!document.querySelector(`[data-aid="${i}"]`),i))){await load();await pg.evaluate(()=>{const els=[...document.querySelectorAll('#main a,#main button,#main [role=tab],#main [role=radio],#main input,header a,header button')].filter(e=>{const s=getComputedStyle(e);const rc=e.getBoundingClientRect();return rc.width>0&&rc.height>0&&s.visibility!=='hidden'&&!e.disabled&&!e.closest('[hidden]')&&!e.closest('.menu')&&!e.closest('.mega')});els.forEach((e,i)=>e.dataset.aid=i)})}
 }
}
await pg.close();}
console.log('TOTAL',total);console.log('DEAD',dead.length);console.log(dead.join('\n'));console.log('ERRORS',JSON.stringify([...new Set(errs)]));await b.close();
