(function(){
document.addEventListener('DOMContentLoaded',function(){
const $=function(id){return document.getElementById(id);};
const esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
let resumeText='';
function setStatus(msg){$('dropNote').textContent=msg;}
function analyze(){
const text=(resumeText||$('pasteBox').value||'').trim();
if(!text){setStatus('Add a resume first \u2014 drop a file above or paste text below.');return;}
const r=window.RF_PARSE.analyzeText(text);
$('report').classList.add('show');
$('scoreNum').textContent=r.total;
$('ringFill').style.strokeDashoffset=327-(327*r.total/100);
$('statChips').innerHTML='<span>'+r.stats.words+' words</span><span>'+r.stats.bullets+' bullets</span><span>'+r.stats.numbers+' numbers</span><span>'+r.stats.verbs+' action verbs</span>';
$('repChecks').innerHTML=r.checks.map(function(c){
return '<div class="rep-check '+(c.ok?'pass':'')+'">'+(c.ok?'\u2713':'\u25CB')+' <div><strong>'+c.label+'</strong>'+(c.ok?'':' \u2014 '+c.tip)+'</div></div>';
}).join('');
const jd=$('jdText').value.trim();
const box=$('jdMatch');
if(jd){
const kws=window.RF_MATCH.keywords(jd,18);
const lower=text.toLowerCase();
const matched=kws.filter(function(k){return lower.indexOf(k)!==-1;});
const missing=kws.filter(function(k){return lower.indexOf(k)===-1;});
const pct=kws.length?Math.round(matched.length/kws.length*100):0;
box.style.display='block';
box.innerHTML='<h3>Job match: '+pct+'%</h3><div class="kw-wrap">'+matched.map(function(k){return '<span class="kw kw-ok">\u2713 '+esc(k)+'</span>';}).join('')+missing.map(function(k){return '<span class="kw kw-miss">'+esc(k)+'</span>';}).join('')+'</div>';
}else{box.style.display='none';}
$('report').scrollIntoView({behavior:'smooth',block:'start'});
}
function handleFile(f){
if(!f)return;
if(f.type==='application/pdf'||/\.pdf$/i.test(f.name)){
if(!window.pdfjsLib){setStatus('PDF engine unavailable \u2014 paste your resume text below instead.');return;}
setStatus('Reading '+f.name+'\u2026');
const reader=new FileReader();
reader.onload=function(){
window.pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdf.worker.min.js';
window.pdfjsLib.getDocument({data:new Uint8Array(reader.result)}).promise.then(function(doc){
const jobs=[];
for(let i=1;i<=doc.numPages;i++){jobs.push(doc.getPage(i).then(function(p){return p.getTextContent();}).then(function(tc){return tc.items.map(function(it){return it.str;}).join(' ');}));}
return Promise.all(jobs);
}).then(function(pages){
resumeText=pages.join('\n');
$('pasteBox').value=resumeText;
setStatus('\u2713 '+f.name+' loaded \u2014 '+resumeText.split(/\s+/).filter(Boolean).length+' words extracted');
analyze();
}).catch(function(){setStatus('Could not read that PDF \u2014 paste your resume text below instead.');});
};
reader.readAsArrayBuffer(f);
}else{
const reader=new FileReader();
reader.onload=function(){resumeText=String(reader.result||'');$('pasteBox').value=resumeText;setStatus('\u2713 '+f.name+' loaded');analyze();};
reader.readAsText(f);
}
}
const drop=$('drop');
drop.addEventListener('click',function(){$('fileInput').click();});
$('fileInput').addEventListener('change',function(){handleFile($('fileInput').files[0]);});
['dragover','dragenter'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.add('over');});});
['dragleave','drop'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.remove('over');});});
drop.addEventListener('drop',function(e){handleFile(e.dataTransfer.files[0]);});
$('pasteBox').addEventListener('input',function(){resumeText='';});
$('analyzeBtn').addEventListener('click',analyze);
const y=$('year');
if(y)y.textContent=new Date().getFullYear();
});
})();
