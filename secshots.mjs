import {createRequire} from 'module';const require=createRequire('/workspace/shot-tools/package.json');const p=require('puppeteer-core');
const b=await p.launch({executablePath:'/usr/bin/google-chrome-stable',args:['--no-sandbox']});const w=ms=>new Promise(r=>setTimeout(r,ms));
const r=process.argv[2]||'';const vw=+(process.argv[3]||1440);
const pg=await b.newPage();await pg.setViewport({width:vw,height:900,deviceScaleFactor:vw<500?2:1});
await pg.goto('file:///workspace/designs-solutions/index.html#/'+r,{waitUntil:'networkidle0'});await w(2500);await pg.addStyleTag({content:'.proto{display:none!important}'});
const n=await pg.$$eval('#main > section',s=>s.length);
for(let i=0;i<n;i++){const el=(await pg.$$('#main > section'))[i];await el.screenshot({path:`/tmp/sec-${r||'hub'}-${vw}-${i}.png`});}
console.log(n);await b.close();
