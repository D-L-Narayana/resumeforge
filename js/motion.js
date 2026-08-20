(function(){
document.addEventListener('DOMContentLoaded',function(){
if(typeof gsap==='undefined')return;
const hasST=typeof ScrollTrigger!=='undefined';
if(hasST)gsap.registerPlugin(ScrollTrigger);
if(hasST){
document.querySelectorAll('.section-title').forEach(function(t){
if(t.children.length)return;
const words=t.textContent.trim().split(/\s+/);
t.innerHTML=words.map(function(w){return '<span class="wrd">'+w+'</span>';}).join(' ');
gsap.from(t.querySelectorAll('.wrd'),{y:46,opacity:0,duration:.7,ease:'power3.out',stagger:.05,scrollTrigger:{trigger:t,start:'top 85%'}});
});
document.querySelectorAll('.hero-stats strong').forEach(function(s){
const v=s.textContent.trim();
if(!/^\d+$/.test(v))return;
const target=parseInt(v,10);
const o={n:0};
gsap.to(o,{n:target,duration:1.4,ease:'power2.out',snap:{n:1},onUpdate:function(){s.textContent=o.n;},scrollTrigger:{trigger:s,start:'top 95%'}});
});
const mf=document.querySelector('.meter-fill');
if(mf){
gsap.fromTo(mf,{width:'0%'},{width:'92%',duration:1.6,ease:'power3.out',scrollTrigger:{trigger:mf,start:'top 85%'}});
const mh=document.querySelector('.meter-head strong');
if(mh){
const o={n:0};
gsap.to(o,{n:92,duration:1.6,ease:'power3.out',snap:{n:1},onUpdate:function(){mh.textContent=o.n+'/100';},scrollTrigger:{trigger:mf,start:'top 85%'}});
}
}
}
if(window.matchMedia('(pointer:fine)').matches){
document.querySelectorAll('#featureGrid .card,#templateGrid .card,#testiGrid .card').forEach(function(c){
c.classList.add('in','tilt');
c.style.transition='box-shadow .25s';
const g=document.createElement('div');
g.className='glare';
c.appendChild(g);
c.addEventListener('mousemove',function(e){
const r=c.getBoundingClientRect();
const px=(e.clientX-r.left)/r.width;
const py=(e.clientY-r.top)/r.height;
gsap.to(c,{rotateY:(px-.5)*10,rotateX:(.5-py)*10,scale:1.02,duration:.4,ease:'power2.out',transformPerspective:800});
g.style.setProperty('--gx',(px*100)+'%');
g.style.setProperty('--gy',(py*100)+'%');
g.style.opacity=.7;
});
c.addEventListener('mouseleave',function(){
gsap.to(c,{rotateY:0,rotateX:0,scale:1,duration:.6,ease:'power3.out'});
g.style.opacity=0;
});
});
}
});
})();
