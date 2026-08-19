(function(){
document.addEventListener('DOMContentLoaded',function(){
const $=function(id){return document.getElementById(id);};
const esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};
const STATUSES=['Saved','Applied','Interview','Offer','Rejected'];
let rows=[
{company:'Northwind Labs',role:'Senior Product Designer',status:'Interview',date:'2026-08-10',notes:'Onsite scheduled'},
{company:'Cloudline',role:'Product Designer',status:'Applied',date:'2026-08-14',notes:'Referred by Sam'},
{company:'Finlight',role:'Design Lead',status:'Saved',date:'2026-08-18',notes:''}
];
function render(){
$('pipeRow').innerHTML=STATUSES.map(function(s){
const n=rows.filter(function(r){return r.status===s;}).length;
return `<div class="pipe"><strong>${n}</strong><span>${s}</span></div>`;
}).join('');
$('tbody').innerHTML=rows.map(function(r,i){
return `<tr><td><input data-i="${i}" data-f="company" value="${esc(r.company)}"></td><td><input data-i="${i}" data-f="role" value="${esc(r.role)}"></td><td><select data-i="${i}" data-f="status">${STATUSES.map(function(s){return `<option ${s===r.status?'selected':''}>${s}</option>`;}).join('')}</select></td><td><input type="date" data-i="${i}" data-f="date" value="${esc(r.date)}"></td><td><input data-i="${i}" data-f="notes" value="${esc(r.notes)}"></td><td><button class="rm" data-i="${i}" aria-label="Remove">\u2715</button></td></tr>`;
}).join('');
const tb=$('tbody');
tb.querySelectorAll('input').forEach(function(el){el.addEventListener('input',function(){rows[+el.dataset.i][el.dataset.f]=el.value;});});
tb.querySelectorAll('select').forEach(function(el){el.addEventListener('change',function(){rows[+el.dataset.i][el.dataset.f]=el.value;render();});});
tb.querySelectorAll('.rm').forEach(function(b){b.addEventListener('click',function(){rows.splice(+b.dataset.i,1);render();});});
}
$('addBtn').addEventListener('click',function(){
rows.unshift({company:'',role:'',status:'Saved',date:new Date().toISOString().slice(0,10),notes:''});
render();
});
$('exportBtn').addEventListener('click',function(){
const blob=new Blob([JSON.stringify(rows,null,2)],{type:'application/json'});
const a=document.createElement('a');
a.href=URL.createObjectURL(blob);
a.download='applications.json';
a.click();
setTimeout(function(){URL.revokeObjectURL(a.href);},2000);
});
$('importFile').addEventListener('change',function(){
const f=$('importFile').files[0];
if(!f)return;
const reader=new FileReader();
reader.onload=function(){
try{
const parsed=JSON.parse(reader.result);
if(Array.isArray(parsed)){rows=parsed.map(function(r){return {company:r.company||'',role:r.role||'',status:STATUSES.indexOf(r.status)!==-1?r.status:'Saved',date:r.date||'',notes:r.notes||''};});render();}
}catch(e){}
$('importFile').value='';
};
reader.readAsText(f);
});
render();
const y=$('year');
if(y)y.textContent=new Date().getFullYear();
});
})();
