(function(){
const VERBS=['led','built','launched','designed','improved','increased','reduced','managed','created','delivered','drove','shipped','grew','owned','scaled','automated','optimized','negotiated','closed'];
function analyzeText(text){
const t=String(text||'');
const lower=t.toLowerCase();
const checks=[];
function add(label,ok,pts,tip){checks.push({label:label,ok:!!ok,pts:ok?pts:0,max:pts,tip:tip});}
const email=/\S+@\S+\.\S+/.test(t);
const phone=/(\+?\d[\d\s().-]{7,})/.test(t);
add('Contact info (email + phone)',email&&phone,15,'Put a professional email and phone number near the top.');
add('Experience section',/(experience|employment|work history)/.test(lower),10,'Add a clearly labeled Experience section.');
add('Education section',/education/.test(lower),10,'Add an Education section with your degree.');
add('Skills section',/skills/.test(lower),10,'Add a Skills section with keywords recruiters search.');
add('Summary or profile',/(summary|objective|profile|about)/.test(lower),5,'Open with a 2-3 sentence summary.');
const nums=(t.match(/\d+(\.\d+)?%?/g)||[]).length;
add('Quantified achievements',nums>=3,15,'Use numbers: percentages, dollars, users, time saved.');
const verbHits=VERBS.filter(function(v){return lower.indexOf(v)!==-1;}).length;
add('Action verbs',verbHits>=4,10,'Start bullets with led, built, shipped, grew...');
const words=lower.split(/\s+/).filter(Boolean).length;
add('Healthy length (300-1000 words)',words>=300&&words<=1000,10,'Aim for one tight page: 300-1000 words.');
const bullets=(t.match(/^\s*[-\u2022*]/gm)||[]).length;
add('Bullet-point formatting',bullets>=5,10,'Use 5+ bullet points; ATS parsers and recruiters both prefer them.');
const iCount=(lower.match(/\bi\b/g)||[]).length;
add('Minimal first-person pronouns',iCount<=4,5,'Cut "I" \u2014 resumes use implied first person.');
const total=checks.reduce(function(s,c){return s+c.pts;},0);
return {total:total,checks:checks,stats:{words:words,bullets:bullets,numbers:nums,verbs:verbHits}};
}
const api={analyzeText:analyzeText};
if(typeof window!=='undefined')window.RF_PARSE=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
