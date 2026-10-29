import {createRequire} from 'module';const require=createRequire('/workspace/shot-tools/package.json');const p=require('puppeteer-core');
const b=await p.launch({executablePath:'/usr/bin/google-chrome-stable',args:['--no-sandbox']});const w=ms=>new Promise(r=>setTimeout(r,ms));
const errs=[];const O='/workspace/designs-solutions/shots';
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
pg.on('console',m=>{if(m.type()==='error'||m.type()==='warning')errs.push(m.text())});pg.on('pageerror',e=>errs.push('PAGEERR '+e.message));
const go=async r=>{await pg.goto('file:///workspace/designs-solutions/index.html#/'+r,{waitUntil:'networkidle0'});await pg.addStyleTag({content:'.proto{display:none!important}'});await w(1600)};
const shot=n=>pg.screenshot({path:`${O}/${n}.png`});
const into=async s=>{await pg.evaluate(s=>{document.documentElement.style.scrollBehavior='auto';const e=document.querySelector(s);window.scrollTo(0,e.getBoundingClientRect().top+scrollY-90)},s);await w(400)};
// mega
await go('');await pg.click('#megaBtn');await w(400);await shot('i01-mega-menu');await pg.click('#megaBtn');
// fit
await into('#fit');await pg.click('#fq1 [data-k=clients]');await pg.click('#fq2 [data-k=brand]');await w(400);await shot('i02-hub-fit-result');
await into('#mx');await pg.hover('#mx thead th[data-c="4"]');await w(200);await shot('i03-hub-matrix-hover');
// smb
await go('small-business');await pg.click('#smbSeg [data-k=property]');await w(2200);await shot('i04-smb-property-chat');
await pg.click('#smbChat [data-ok]').catch(()=>{});await w(300);
await into('#bk');await w(2500);await shot('i05-smb-brandkit');
// sellers
await go('online-sellers');await pg.click('#lsScene [data-k=pastel]');await pg.click('#lsRatio [data-r="9/16"]');await w(500);await shot('i06-sellers-pastel-916');
await pg.click('#lsView [data-v=copy]');await pg.click('#lsMkt [data-k=tokopedia]');await w(300);await shot('i07-sellers-listing-copy');
await into('#cs');await pg.click('#csGo');await w(1200);await pg.click('[data-apply=crop]');await w(400);await shot('i08-sellers-creative-score');
// creators
await go('creators');await w(1600);await shot('i09-creators-week');await pg.click('.wk-d[data-i="4"]');await w(500);await shot('i10-creators-draft-drawer');await pg.keyboard.press('Escape');await w(300);
await into('.vc');await pg.click('#vcRecB');await w(1200);await pg.click('#vcPlay');await w(300);await shot('i11-creators-voice');
await into('#sbG');await pg.click('#sbG [data-g=Comedy]');await w(400);await shot('i12-creators-storyboard');
// marketing
await go('marketing-teams');await into('.mk');await pg.click('#mkBrand');await w(400);await shot('i13-marketing-brand-off');await pg.click('#mkBrand');
await into('#flowS');await pg.click('#flowS [data-i="2"]');await w(300);await shot('i14-marketing-approve-spend');
await into('#wfRows');await pg.click('.wf-r[data-i="1"]');await w(500);await shot('i15-marketing-workflow-drawer');await pg.keyboard.press('Escape');await w(300);
await pg.click('[data-cta=sales]');await w(500);await pg.click('#salesSend');await w(300);await shot('i16-sales-drawer-validation');await pg.keyboard.press('Escape');
// agencies
await go('agencies');await into('.ag');await pg.click('#agMode [data-m=all]');await w(400);await shot('i17-agencies-compare');
await into('#board');await pg.click('#nRun');await w(400);await shot('i18-agencies-approve-spend');await pg.click('[data-ap=once]');await w(2200);await shot('i19-agencies-board-done');
// startups
await go('startups');await w(3500);await shot('i20-startups-pipeline');await into('.dk');await pg.click('#dkL [data-k=bold]');await w(400);await shot('i21-startups-deck-bold');
// mobile
await pg.setViewport({width:390,height:844,deviceScaleFactor:2});await go('online-sellers');await pg.click('#burger');await w(500);await shot('i22-mobile-menu');await pg.keyboard.press('Escape');
await go('agencies');await pg.click('#swBtn');await w(300);await shot('i23-mobile-persona-switcher');
console.log('ERRORS',JSON.stringify(errs));await b.close();
