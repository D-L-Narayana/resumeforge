(function(){
document.addEventListener('DOMContentLoaded',function(){
const Q=window.RF_QUESTIONS;
const sel=document.getElementById('roleSelect');
const list=document.getElementById('qList');
const prog=document.getElementById('progChip');
const labels={general:'General / Behavioral',swe:'Software Engineer',pm:'Product Manager',data:'Data Analyst',marketing:'Marketing',sales:'Sales'};
sel.innerHTML=Object.keys(Q).map(function(id){return `<option value="${id}">${labels[id]||id}</option>`;}).join('');
let done={};
function renderProg(){
const total=Q[sel.value].length;
const n=Object.keys(done).filter(function(k){return done[k];}).length;
prog.textContent=n+' of '+total+' marked ready';
}
function render(){
done={};
list.innerHTML=Q[sel.value].map(function(item,i){
return `<div class="card q-card" data-i="${i}"><div class="q-top"><h3>${item.q}</h3><span class="q-mark">Mark ready</span></div><p class="q-tip">${item.tip}</p></div>`;
}).join('');
list.querySelectorAll('.q-card').forEach(function(c){
c.addEventListener('click',function(){
const i=c.dataset.i;
done[i]=!done[i];
c.classList.toggle('ready',!!done[i]);
c.querySelector('.q-mark').textContent=done[i]?'\u2713 Ready':'Mark ready';
renderProg();
});
});
renderProg();
}
sel.addEventListener('change',render);
render();
const y=document.getElementById('year');
if(y)y.textContent=new Date().getFullYear();
});
})();
