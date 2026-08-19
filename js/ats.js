(function(){
function score(r){
r=r||{};
const checks=[];
function add(label,ok,pts,tip){checks.push({label:label,ok:!!ok,pts:ok?pts:0,max:pts,tip:tip});}
const email=/\S+@\S+\.\S+/.test(r.email||'');
const phone=((r.phone||'').replace(/\D/g,'').length)>=7;
add('Contact info complete',email&&phone,10,'Add a professional email and phone number.');
const sum=(r.summary||'').trim();
add('Strong summary',sum.length>=60&&sum.length<=500,15,'Write a 2\u20134 sentence summary (60\u2013500 characters).');
const skills=(r.skills||[]).filter(Boolean);
add('6+ relevant skills',skills.length>=6,15,'List at least 6 skills recruiters search for.');
const exp=r.experience||[];
add('2+ experience entries',exp.length>=2,20,'Add at least two roles with bullet points.');
const bullets=exp.reduce(function(a,e){return a.concat(e.bullets||[]);},[]);
const quantified=bullets.filter(function(b){return /\d/.test(b);}).length;
add('Quantified achievements',quantified>=2,15,'Use numbers: "increased revenue 32%".');
const verbs=['led','built','launched','designed','improved','increased','reduced','managed','created','delivered','drove','shipped','grew','owned','scaled'];
const text=bullets.join(' ').toLowerCase();
const verbHits=verbs.filter(function(v){return text.indexOf(v)!==-1;}).length;
add('Action verbs',verbHits>=3,10,'Start bullets with strong verbs (led, built, shipped\u2026).');
add('Education listed',(r.education||[]).length>=1,10,'Add your degree or certification.');
add('Location provided',!!(r.location||'').trim(),5,'Add your city \u2014 many ATS filters use it.');
const total=checks.reduce(function(s,c){return s+c.pts;},0);
return {total:total,checks:checks};
}
const api={score:score};
if(typeof window!=='undefined')window.RF_ATS=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
