(function(){
document.addEventListener('DOMContentLoaded',function(){
const EX=window.RF_EXAMPLES;
const grid=document.getElementById('exGrid');
grid.innerHTML=Object.keys(EX).map(function(id){
const e=EX[id];
const s=window.RF_ATS.score(e.resume);
return `<div class="card ex-card reveal in"><div class="ex-head"><h3>${e.label}</h3><span class="ex-score">ATS ${s.total}/100</span></div><p>${e.blurb}</p><div class="ex-meta">${e.resume.skills.slice(0,5).map(function(k){return `<span class="kw">${k}</span>`;}).join('')}</div><a class="btn btn-primary" href="builder.html?example=${id}">Open in builder</a></div>`;
}).join('');
const y=document.getElementById('year');
if(y)y.textContent=new Date().getFullYear();
});
})();
