const {chromium}=require('playwright');
(async function(){
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:8043/index.html',{waitUntil:'domcontentloaded'});
await p.waitForTimeout(1800);
const vis=await p.evaluate(function(){
var els=Array.prototype.slice.call(document.querySelectorAll('.hero-copy *'));
return els.filter(function(e){return /UPLOAD & SCAN/.test(e.textContent)&&e.offsetParent!==null&&!e.closest('.ann-pill');}).length;
});
const pill=await p.locator('.ann-pill').count();
console.log('OLD_VISIBLE '+vis+' PILL '+pill);
await p.screenshot({path:'/tmp/hero2.png',clip:{x:0,y:60,width:1440,height:420}});
await b.close();
})().catch(function(e){console.error('ERR '+e.message);process.exit(1);});
