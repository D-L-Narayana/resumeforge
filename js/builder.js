(function(){
const S=JSON.parse(JSON.stringify(window.RF_DATA.sample));
let tpl='modern';
const $=function(id){return document.getElementById(id);};
const esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};
function bindStatic(){
[['fName','name'],['fTitle','title'],['fEmail','email'],['fPhone','phone'],['fLocation','location'],['fSummary','summary']].forEach(function(p){
const el=$(p[0]);el.value=S[p[1]]||'';
el.addEventListener('input',function(){S[p[1]]=el.value;render();});
});
const sk=$('fSkills');sk.value=(S.skills||[]).join(', ');
sk.addEventListener('input',function(){S.skills=sk.value.split(',').map(function(s){return s.trim();}).filter(Boolean);render();});
}
function expEditor(){
const box=$('expList');box.innerHTML='';
S.experience.forEach(function(e,i){
const d=document.createElement('div');d.className='subcard';
d.innerHTML=`<button class="rm" data-i="${i}">\u2715</button><div class="row2"><div class="fgroup"><label>Role</label><input data-f="role" data-i="${i}" value="${esc(e.role)}"></div><div class="fgroup"><label>Company</label><input data-f="company" data-i="${i}" value="${esc(e.company)}"></div></div><div class="fgroup"><label>Period</label><input data-f="period" data-i="${i}" value="${esc(e.period)}"></div><div class="fgroup"><label>Bullets (one per line)</label><textarea data-f="bullets" data-i="${i}">${esc((e.bullets||[]).join('\n'))}</textarea></div>`;
box.appendChild(d);
});
box.querySelectorAll('input,textarea').forEach(function(el){el.addEventListener('input',function(){
const i=+el.dataset.i,f=el.dataset.f;
if(f==='bullets')S.experience[i].bullets=el.value.split('\n').map(function(s){return s.trim();}).filter(Boolean);
else S.experience[i][f]=el.value;
render();
});});
box.querySelectorAll('.rm').forEach(function(b){b.addEventListener('click',function(){S.experience.splice(+b.dataset.i,1);expEditor();render();});});
}
function eduEditor(){
const box=$('eduList');box.innerHTML='';
S.education.forEach(function(e,i){
const d=document.createElement('div');d.className='subcard';
d.innerHTML=`<button class="rm" data-i="${i}">\u2715</button><div class="fgroup"><label>Degree</label><input data-f="degree" data-i="${i}" value="${esc(e.degree)}"></div><div class="row2"><div class="fgroup"><label>School</label><input data-f="school" data-i="${i}" value="${esc(e.school)}"></div><div class="fgroup"><label>Year</label><input data-f="year" data-i="${i}" value="${esc(e.year)}"></div></div>`;
box.appendChild(d);
});
box.querySelectorAll('input').forEach(function(el){el.addEventListener('input',function(){S.education[+el.dataset.i][el.dataset.f]=el.value;render();});});
box.querySelectorAll('.rm').forEach(function(b){b.addEventListener('click',function(){S.education.splice(+b.dataset.i,1);eduEditor();render();});});
}
function render(){
const p=$('paper');
p.innerHTML=`<h1>${esc(S.name)}</h1><div class="p-title">${esc(S.title)}</div><div class="p-contact">${[S.email,S.phone,S.location].filter(Boolean).map(esc).join(' \u00B7 ')}</div>${S.summary?`<div class="p-sec"><h2>Summary</h2><p>${esc(S.summary)}</p></div>`:''}${S.skills&&S.skills.length?`<div class="p-sec"><h2>Skills</h2><div class="p-skills">${S.skills.map(function(s){return `<span class="p-skill">${esc(s)}</span>`;}).join('')}</div></div>`:''}${S.experience.length?`<div class="p-sec"><h2>Experience</h2>${S.experience.map(function(e){return `<div class="p-role"><div class="rhead"><span>${esc(e.role)}</span><span class="rmeta">${esc(e.period)}</span></div><div class="rmeta">${esc(e.company)}</div><ul>${(e.bullets||[]).map(function(b){return `<li>${esc(b)}</li>`;}).join('')}</ul></div>`;}).join('')}</div>`:''}${S.education.length?`<div class="p-sec"><h2>Education</h2>${S.education.map(function(e){return `<div class="p-role"><div class="rhead"><span>${esc(e.degree)}</span><span class="rmeta">${esc(e.year)}</span></div><div class="rmeta">${esc(e.school)}</div></div>`;}).join('')}</div>`:''}`;
updateScore();
}
function updateScore(){
const r=window.RF_ATS.score(S);
const chip=$('scoreChip');
chip.textContent='ATS '+r.total+'/100';
chip.className='score-chip '+(r.total>=80?'':(r.total>=50?'mid':'low'));
$('scoreChecks').innerHTML=r.checks.map(function(c){return `<div class="check ${c.ok?'ok':''}">${c.ok?'\u2713':'\u25CB'} ${c.label}${c.ok?'':' \u2014 '+c.tip}</div>`;}).join('');
}
const sel=$('templateSelect');
sel.innerHTML=window.RF_DATA.templates.map(function(t){return `<option value="${t.id}">${t.name}</option>`;}).join('');
sel.addEventListener('change',function(){tpl=sel.value;$('paper').className='paper t-'+tpl;render();});
$('addExp').addEventListener('click',function(){S.experience.push({role:'',company:'',period:'',bullets:[]});expEditor();render();});
$('addEdu').addEventListener('click',function(){S.education.push({degree:'',school:'',year:''});eduEditor();render();});
$('printBtn').addEventListener('click',function(){window.print();});
bindStatic();expEditor();eduEditor();render();
})();
