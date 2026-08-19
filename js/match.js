(function(){
const STOP=['the','and','a','an','to','of','in','for','with','on','at','by','is','are','was','be','as','or','from','that','this','you','we','our','your','will','it','its','their','they','have','has','had','not','but','all','can','more','than','who','what','when','where','how','into','across','within','about','over','under','per','plus','also','etc','using','use','used','while','both','each','other','such','via','any','may','must','should','would','could','them','these','those','if','so','do','does','did','been','being','which','there','here','out','up','down','off','no','yes','one','two','three','new','work','working','team','teams','role','job','years','experience','ability','strong','excellent','including','required','preferred','requirements','responsibilities','qualifications','skills','candidate','position','company','looking','join','help','well','good','great','hiring','apply','ideal','plus'];
function tokens(text){
return String(text||'').toLowerCase().replace(/[^a-z0-9+#./-]+/g,' ').split(/\s+/).filter(function(w){return w.length>2&&STOP.indexOf(w)===-1&&!/^\d+$/.test(w);});
}
function keywords(jd,limit){
const freq={};
tokens(jd).forEach(function(w){freq[w]=(freq[w]||0)+1;});
return Object.keys(freq).sort(function(a,b){return freq[b]-freq[a]||a.localeCompare(b);}).slice(0,limit||18);
}
function resumeText(r){
r=r||{};
const parts=[r.name,r.title,r.summary,(r.skills||[]).join(' ')];
(r.experience||[]).forEach(function(e){parts.push(e.role,e.company,(e.bullets||[]).join(' '));});
(r.education||[]).forEach(function(e){parts.push(e.degree,e.school);});
return parts.filter(Boolean).join(' ').toLowerCase();
}
function match(jd,r){
const kws=keywords(jd,18);
const text=resumeText(r);
const matched=[],missing=[];
kws.forEach(function(k){(text.indexOf(k)!==-1?matched:missing).push(k);});
const pct=kws.length?Math.round(matched.length/kws.length*100):0;
return {keywords:kws,matched:matched,missing:missing,pct:pct};
}
const api={match:match,keywords:keywords,tokens:tokens};
if(typeof window!=='undefined')window.RF_MATCH=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
