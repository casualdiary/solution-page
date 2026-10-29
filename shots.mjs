import {createRequire} from 'module';const require=createRequire('/workspace/shot-tools/package.json');const p=require('puppeteer-core');
const b=await p.launch({executablePath:'/usr/bin/google-chrome-stable',args:['--no-sandbox']});
const errs=[];const w=ms=>new Promise(r=>setTimeout(r,ms));
const routes=(process.argv[2]||',small-business,online-sellers,creators,marketing-teams,agencies,startups').split(',');
const OUT='/workspace/designs-solutions/shots';const only=process.argv[3];
for(const [vw,vh,tag] of [[1440,900,'d'],[390,844,'m']]){ if(only&&only!==tag)continue;
 const pg=await b.newPage();await pg.setViewport({width:vw,height:vh,deviceScaleFactor:vw<500?2:1});
 pg.on('console',m=>{if(m.type()==='error'||m.type()==='warning')errs.push(tag+' '+m.text())});pg.on('pageerror',e=>errs.push(tag+' PAGEERR '+e.message));
 await pg.goto('file:///workspace/designs-solutions/index.html',{waitUntil:'networkidle0'});
 for(const r of routes){await pg.evaluate(r=>location.hash='#/'+r,r);await w(1300);
  await pg.addStyleTag({content:'.proto{display:none!important}'});
  await pg.screenshot({path:`${OUT}/${tag}-${r||'hub'}-full.png`,fullPage:true});
  await pg.screenshot({path:`${OUT}/${tag}-${r||'hub'}-hero.png`});
 }
 await pg.close();}
console.log('ERRORS',JSON.stringify(errs));await b.close();
