(function(){
document.addEventListener('DOMContentLoaded',function(){
if(!window.matchMedia('(pointer:fine)').matches)return;
const glow=document.createElement('div');glow.id='cursorGlow';document.body.appendChild(glow);
const ring=document.createElement('div');ring.className='cur-ring';document.body.appendChild(ring);
const dot=document.createElement('div');dot.className='cur-dot';document.body.appendChild(dot);
const hasGsap=typeof gsap!=='undefined';
if(hasGsap){
gsap.set([dot,ring,glow],{xPercent:-50,yPercent:-50});
const dx=gsap.quickTo(dot,'x',{duration:.12,ease:'power3.out'});
const dy=gsap.quickTo(dot,'y',{duration:.12,ease:'power3.out'});
const rx=gsap.quickTo(ring,'x',{duration:.35,ease:'power3.out'});
const ry=gsap.quickTo(ring,'y',{duration:.35,ease:'power3.out'});
const gx=gsap.quickTo(glow,'x',{duration:.8,ease:'power3.out'});
const gy=gsap.quickTo(glow,'y',{duration:.8,ease:'power3.out'});
window.addEventListener('mousemove',function(e){dx(e.clientX);dy(e.clientY);rx(e.clientX);ry(e.clientY);gx(e.clientX);gy(e.clientY);});
}else{
window.addEventListener('mousemove',function(e){[dot,ring,glow].forEach(function(el){el.style.left=e.clientX+'px';el.style.top=e.clientY+'px';});});
}
document.addEventListener('mouseover',function(e){
if(e.target.closest('a,button,select,input,textarea,.q-card,.drop'))ring.classList.add('hot');
else ring.classList.remove('hot');
});
if(hasGsap){
document.querySelectorAll('.btn').forEach(function(b){
b.style.transitionProperty='box-shadow,background,border-color,color';
b.addEventListener('mousemove',function(e){
const r=b.getBoundingClientRect();
gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.3,ease:'power3.out'});
});
b.addEventListener('mouseleave',function(){gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'});});
});
if(document.querySelector('.hero-copy')){
gsap.from('.hero-copy > *',{opacity:0,y:26,duration:.8,ease:'power3.out',stagger:.09,clearProps:'all'});
}
if(document.querySelector('.page-head')){
gsap.from('.page-head > .container > *',{opacity:0,y:20,duration:.7,ease:'power3.out',stagger:.08,clearProps:'all'});
}
}
});
})();
