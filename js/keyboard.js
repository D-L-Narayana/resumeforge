(function(){
document.addEventListener('DOMContentLoaded',function(){
const btn=document.getElementById('kbBtn');
if(!btn)return;
const R=[
[['Esc','',1.3,'Escape'],['1','!',1,'Digit1'],['2','@',1,'Digit2'],['3','#',1,'Digit3'],['4','$',1,'Digit4'],['5','%',1,'Digit5'],['6','^',1,'Digit6'],['7','&',1,'Digit7'],['8','*',1,'Digit8'],['9','(',1,'Digit9'],['0',')',1,'Digit0'],['-','_',1,'Minus'],['=','+',1,'Equal'],['Backspace','',1.9,'Backspace']],
[['Tab','',1.6,'Tab'],['Q','',1,'KeyQ'],['W','',1,'KeyW'],['E','',1,'KeyE'],['R','',1,'KeyR'],['T','',1,'KeyT'],['Y','',1,'KeyY'],['U','',1,'KeyU'],['I','',1,'KeyI'],['O','',1,'KeyO'],['P','',1,'KeyP'],['[','{',1,'BracketLeft'],[']','}',1,'BracketRight'],['\\','|',1.3,'Backslash']],
[['CapsLock','',2,'CapsLock'],['A','',1,'KeyA'],['S','',1,'KeyS'],['D','',1,'KeyD'],['F','',1,'KeyF'],['G','',1,'KeyG'],['H','',1,'KeyH'],['J','',1,'KeyJ'],['K','',1,'KeyK'],['L','',1,'KeyL'],[';',':',1,'Semicolon'],["'",'"',1,'Quote'],['Enter','',2,'Enter']],
[['Shift','',2.5,'ShiftLeft'],['Z','',1,'KeyZ'],['X','',1,'KeyX'],['C','',1,'KeyC'],['V','',1,'KeyV'],['B','',1,'KeyB'],['N','',1,'KeyN'],['M','',1,'KeyM'],[',','<',1,'Comma'],['.','>',1,'Period'],['/','?',1,'Slash'],['Shift','',2.5,'ShiftRight']],
[['Ctrl','',1.4,'ControlLeft'],['Win','',1.2,'MetaLeft'],['Alt','',1.2,'AltLeft'],['Space','',7,'Space'],['Alt','',1.2,'AltRight'],['Win','',1.2,'MetaRight'],['Fn','',1.2,'Fn']]
];
const pop=document.createElement('div');
pop.id='kbPop';
pop.innerHTML='<div class="kb-head"><span>Type anywhere \u2014 watch it play</span><div id="kbCombo" class="kb-combo"><span class="kb-hint">press keys\u2026</span></div><button id="kbClose" aria-label="Close">\u2715</button></div><div class="kb"><div class="kb-rows" id="kbRows"></div></div>';
document.body.appendChild(pop);
const rowsBox=pop.querySelector('#kbRows');
const keyEls={};
const keyLabels={};
R.forEach(function(row){
const r=document.createElement('div');
r.className='krow';
row.forEach(function(k){
const el=document.createElement('div');
el.className='key';
el.style.flexGrow=k[2];
const sub=k[1]?'<span class="sub">'+k[1].replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span>':'';
el.innerHTML=sub+'<span>'+(k[0]==='Space'?'':k[0]).replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span>';
if(k[3]&&k[3]!=='Fn'){keyEls[k[3]]=el;keyLabels[k[3]]=k[0];}
el.addEventListener('mousedown',function(){el.classList.add('down');setTimeout(function(){el.classList.remove('down');},150);});
r.appendChild(el);
});
rowsBox.appendChild(r);
});
const held={};
const combo=pop.querySelector('#kbCombo');
function renderCombo(){
const keys=Object.keys(held);
combo.innerHTML=keys.length?keys.map(function(c){return '<span class="kchip">'+(keyLabels[c]||c)+'</span>';}).join('<i>+</i>'):'<span class="kb-hint">press keys\u2026</span>';
}
window.addEventListener('keydown',function(e){
if(!pop.classList.contains('open'))return;
const el=keyEls[e.code];
if(el)el.classList.add('down');
if(keyLabels[e.code]){held[e.code]=1;renderCombo();}
});
window.addEventListener('keyup',function(e){
const el=keyEls[e.code];
if(el)el.classList.remove('down');
if(held[e.code]){delete held[e.code];if(pop.classList.contains('open'))renderCombo();}
});
window.addEventListener('blur',function(){
Object.keys(held).forEach(function(k){delete held[k];});
Object.keys(keyEls).forEach(function(c){keyEls[c].classList.remove('down');});
renderCombo();
});
btn.addEventListener('click',function(){pop.classList.toggle('open');});
pop.querySelector('#kbClose').addEventListener('click',function(){pop.classList.remove('open');});
});
})();
