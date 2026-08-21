(function(){
document.addEventListener('DOMContentLoaded',function(){
if(!document.querySelector('.builder-main'))return;
const R=[
[['Esc','',1.3,'Escape'],['1','!',1,'Digit1'],['2','@',1,'Digit2'],['3','#',1,'Digit3'],['4','$',1,'Digit4'],['5','%',1,'Digit5'],['6','^',1,'Digit6'],['7','&',1,'Digit7'],['8','*',1,'Digit8'],['9','(',1,'Digit9'],['0',')',1,'Digit0'],['-','_',1,'Minus'],['=','+',1,'Equal'],['Backspace','',1.9,'Backspace']],
[['Tab','',1.6,'Tab'],['Q','',1,'KeyQ'],['W','',1,'KeyW'],['E','',1,'KeyE'],['R','',1,'KeyR'],['T','',1,'KeyT'],['Y','',1,'KeyY'],['U','',1,'KeyU'],['I','',1,'KeyI'],['O','',1,'KeyO'],['P','',1,'KeyP'],['[','{',1,'BracketLeft'],[']','}',1,'BracketRight'],['\\','|',1.3,'Backslash']],
[['CapsLock','',2,'CapsLock'],['A','',1,'KeyA'],['S','',1,'KeyS'],['D','',1,'KeyD'],['F','',1,'KeyF'],['G','',1,'KeyG'],['H','',1,'KeyH'],['J','',1,'KeyJ'],['K','',1,'KeyK'],['L','',1,'KeyL'],[';',':',1,'Semicolon'],["'",'"',1,'Quote'],['Enter','',2,'Enter']],
[['Shift','',2.5,'ShiftLeft'],['Z','',1,'KeyZ'],['X','',1,'KeyX'],['C','',1,'KeyC'],['V','',1,'KeyV'],['B','',1,'KeyB'],['N','',1,'KeyN'],['M','',1,'KeyM'],[',','<',1,'Comma'],['.','>',1,'Period'],['/','?',1,'Slash'],['Shift','',2.5,'ShiftRight']],
[['Ctrl','',1.4,'ControlLeft'],['Win','',1.2,'MetaLeft'],['Alt','',1.2,'AltLeft'],['Space','',7,'Space'],['Alt','',1.2,'AltRight'],['Win','',1.2,'MetaRight'],['Fn','',1.2,'Fn']]
];
const pop=document.createElement('div');
pop.id='kbPop';
pop.innerHTML='<div class="kb-head"><span>Drag me \u00b7 type anywhere</span><div id="kbCombo" class="kb-combo"><span class="kb-hint">press keys\u2026</span></div><button id="kbHide">\u2193 Hide</button></div><div class="kb"><div class="kb-rows" id="kbRows"></div></div>';
document.body.appendChild(pop);
const kbKey=document.createElement('button');
kbKey.id='kbKey';
kbKey.setAttribute('title','Bring back the keyboard');
kbKey.textContent='\u2328';
document.body.appendChild(kbKey);
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
el.innerHTML=sub+'<span>'+k[0].replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span>';
if(k[3]&&k[3]!=='Fn'){keyEls[k[3]]=el;keyLabels[k[3]]=k[0];}
el.addEventListener('mousedown',function(){el.classList.add('down');setTimeout(function(){el.classList.remove('down');},150);});
r.appendChild(el);
});
rowsBox.appendChild(r);
});
const held={};
const combo=pop.querySelector('#kbCombo');
let hidden=false;
let busy=false;
function renderCombo(){
const keys=Object.keys(held);
combo.innerHTML=keys.length?keys.map(function(c){return '<span class="kchip">'+(keyLabels[c]||c)+'</span>';}).join('<i>+</i>'):'<span class="kb-hint">press keys\u2026</span>';
}
window.addEventListener('keydown',function(e){
if(hidden)return;
const el=keyEls[e.code];
if(el)el.classList.add('down');
if(keyLabels[e.code]){held[e.code]=1;renderCombo();}
});
window.addEventListener('keyup',function(e){
const el=keyEls[e.code];
if(el)el.classList.remove('down');
if(held[e.code]){delete held[e.code];renderCombo();}
});
window.addEventListener('blur',function(){
Object.keys(held).forEach(function(k){delete held[k];});
Object.keys(keyEls).forEach(function(c){keyEls[c].classList.remove('down');});
renderCombo();
});
const hasG=typeof gsap!=='undefined';
if(!hasG){
pop.querySelector('#kbHide').addEventListener('click',function(){pop.style.display='none';kbKey.style.display='flex';hidden=true;});
kbKey.addEventListener('click',function(){pop.style.display='block';kbKey.style.display='none';hidden=false;});
return;
}
gsap.set(pop,{xPercent:-50});
const qx=gsap.quickTo(pop,'x',{duration:.28,ease:'power3.out'});
const qy=gsap.quickTo(pop,'y',{duration:.28,ease:'power3.out'});
const qr=gsap.quickTo(pop,'rotation',{duration:.4,ease:'power2.out'});
let dragging=false;
let sx=0,sy=0,bx=0,by=0,lx=0,ly=0,lt=0,vx=0,vy=0;
pop.addEventListener('pointerdown',function(e){
if(busy||hidden)return;
if(e.target.closest('.key,button'))return;
dragging=true;
pop.classList.add('grabbing');
pop.setPointerCapture(e.pointerId);
sx=e.clientX;sy=e.clientY;
bx=gsap.getProperty(pop,'x');by=gsap.getProperty(pop,'y');
lx=e.clientX;ly=e.clientY;lt=performance.now();vx=0;vy=0;
});
pop.addEventListener('pointermove',function(e){
if(!dragging)return;
const nx=bx+(e.clientX-sx);
const ny=by+(e.clientY-sy);
const now=performance.now();
const dt=Math.max(now-lt,1);
vx=vx*.7+((e.clientX-lx)/dt)*.3;
vy=vy*.7+((e.clientY-ly)/dt)*.3;
lx=e.clientX;ly=e.clientY;lt=now;
qx(nx);qy(ny);
qr(Math.max(-9,Math.min(9,vx*14)));
});
function endDrag(e){
if(!dragging)return;
dragging=false;
pop.classList.remove('grabbing');
const curX=bx+(e.clientX-sx);
const curY=by+(e.clientY-sy);
let ex=curX+vx*240;
let ey=curY+vy*240;
const r=pop.getBoundingClientRect();
const fl=r.left+(ex-gsap.getProperty(pop,'x'));
const ft=r.top+(ey-gsap.getProperty(pop,'y'));
const vw=window.innerWidth,vh=window.innerHeight;
if(fl<8)ex+=8-fl;
if(fl+r.width>vw-8)ex-=(fl+r.width)-(vw-8);
if(ft<8)ey+=8-ft;
if(ft+r.height>vh-8)ey-=(ft+r.height)-(vh-8);
gsap.to(pop,{x:ex,y:ey,duration:.95,ease:'power3.out'});
gsap.to(pop,{rotation:0,duration:.9,ease:'elastic.out(1,.45)'});
}
pop.addEventListener('pointerup',endDrag);
pop.addEventListener('pointercancel',endDrag);
pop.querySelector('#kbHide').addEventListener('click',function(){
if(busy||hidden)return;
busy=true;
kbKey.style.display='flex';
gsap.set(kbKey,{opacity:0,scale:0});
const kr=pop.getBoundingClientRect();
const br=kbKey.getBoundingClientRect();
const dx=(br.left+br.width/2)-(kr.left+kr.width/2);
const dy=(br.top+br.height/2)-(kr.top+kr.height/2);
const tl=gsap.timeline({onComplete:function(){hidden=true;busy=false;}});
tl.to(pop,{y:'-=150',rotation:-4,duration:.32,ease:'power2.out'});
tl.to(pop,{x:'+='+dx,y:'+='+(dy+150),scale:.05,rotation:32,duration:.55,ease:'power2.in'});
tl.to(pop,{opacity:0,duration:.1},'-=0.08');
tl.set(pop,{display:'none'});
tl.to(kbKey,{opacity:1,scale:1,duration:.45,ease:'back.out(2.4)'});
});
kbKey.addEventListener('click',function(){
if(busy||!hidden)return;
busy=true;
const tl=gsap.timeline({onComplete:function(){hidden=false;busy=false;}});
tl.to(kbKey,{scale:0,opacity:0,duration:.2,ease:'back.in(2)'});
tl.set(kbKey,{display:'none'});
tl.set(pop,{display:'block'});
tl.to(pop,{opacity:1,duration:.08});
tl.to(pop,{x:0,y:-170,scale:1,rotation:0,duration:.55,ease:'power2.out'});
tl.to(pop,{y:0,duration:.55,ease:'bounce.out'});
});
});
})();
