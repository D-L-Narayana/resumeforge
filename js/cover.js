(function(){
const $=function(id){return document.getElementById(id);};
const esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
const C={name:'Alex Morgan',email:'alex.morgan@email.com',phone:'+1 (415) 555-0134',company:'Northwind Labs',role:'Senior Product Designer',manager:'Hiring Manager',tone:'confident',hook:'',body:'',close:''};
function regen(){
const g=window.RF_COVER.generate(C.tone,C);
C.hook=g.hook;C.body=g.body;C.close=g.close;
$('fHook').value=C.hook;$('fBody').value=C.body;$('fClose').value=C.close;
render();
}
function render(){
const p=$('paper');
const date=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
p.innerHTML=`<div class="l-date">${date}</div><h1>${esc(C.name)}</h1><div class="p-contact">${[C.email,C.phone].filter(Boolean).map(esc).join(' \u00B7 ')}</div><div class="l-body"><p>Dear ${esc(C.manager||'Hiring Manager')},</p><p>${esc(C.hook)}</p><p>${esc(C.body)}</p><p>${esc(C.close)}</p><p>Sincerely,<br>${esc(C.name)}</p></div>`;
const words=(C.hook+' '+C.body+' '+C.close).trim().split(/\s+/).filter(Boolean).length;
const chip=$('wordChip');
chip.textContent=words+' words';
chip.className='score-chip '+(words>=120&&words<=350?'':(words>=80?'mid':'low'));
}
[['fcName','name'],['fcEmail','email'],['fcPhone','phone'],['fcCompany','company'],['fcRole','role'],['fcManager','manager'],['fHook','hook'],['fBody','body'],['fClose','close']].forEach(function(p){
const el=$(p[0]);el.value=C[p[1]]||'';
el.addEventListener('input',function(){C[p[1]]=el.value;render();});
});
$('toneSelect').addEventListener('change',function(){C.tone=$('toneSelect').value;regen();});
$('regenBtn').addEventListener('click',regen);
$('printBtn').addEventListener('click',function(){window.print();});
regen();
})();
