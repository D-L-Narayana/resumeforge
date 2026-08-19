(function(){
const WEAK=['responsible for','helped with','worked on','assisted with','participated in','involved in','tasked with','duties included'];
const VERBS=['led','built','launched','designed','improved','increased','reduced','managed','created','delivered','drove','shipped','grew','owned','scaled','automated','optimized','negotiated','closed'];
function analyze(b){
const t=String(b||'').trim();
const lower=t.toLowerCase();
const checks=[];
const startsVerb=VERBS.some(function(v){return lower.indexOf(v)===0;});
checks.push({label:'Starts with an action verb',ok:startsVerb,tip:'Open with led, built, shipped, grew...'});
checks.push({label:'Includes a number',ok:/\d/.test(t),tip:'Quantify it: %, $, time saved, users reached.'});
const weak=WEAK.filter(function(w){return lower.indexOf(w)!==-1;});
checks.push({label:'No weak phrases',ok:weak.length===0,tip:weak.length?'Replace "'+weak[0]+'" with a strong verb.':'Avoid "responsible for", "helped with"...'});
checks.push({label:'Good length (40-160 chars)',ok:t.length>=40&&t.length<=160,tip:'One outcome per bullet, not a paragraph.'});
const total=checks.filter(function(c){return c.ok;}).length*25;
return {score:total,checks:checks};
}
const api={analyze:analyze};
if(typeof window!=='undefined')window.RF_BULLET=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
