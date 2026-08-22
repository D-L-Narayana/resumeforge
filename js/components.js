(function(){
var RM=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.addEventListener('DOMContentLoaded',function(){
var hero=document.querySelector('.hero');
if(!hero)return;
var hc=document.querySelector('.hero-copy')||hero;
var h1=hc.querySelector('h1');
Array.prototype.slice.call(hc.querySelectorAll('*')).forEach(function(el){
if(/UPLOAD & SCAN/.test(el.textContent)&&(!h1||!el.contains(h1))&&!el.closest('.ann-pill'))el.style.display='none';
});
var accents=['#0071e3','#0d9488','#b45309','#111827','#8a6d3b'];
var pill=document.createElement('a');
pill.className='ann-pill';
pill.href='#templates';
pill.innerHTML='<span class="ann-icons">'+accents.map(function(a){return '<span class="ann-ic" style="background:linear-gradient(145deg,'+a+'cc,'+a+')"></span>';}).join('')+'<span class="ann-ic ann-plus">+4</span></span><span class="ann-text">Introducing 9 Pro Templates</span><span class="ann-arrow">\u2192</span>';
hc.insertBefore(pill,hc.firstChild);
pill.addEventListener('mouseenter',function(){pill.classList.add('open');});
pill.addEventListener('mouseleave',function(){pill.classList.remove('open');});
var cue=document.createElement('div');
cue.className='scroll-cue';
cue.innerHTML='SCROLL TO<br>SEE MORE<span class="cue-line"><i></i></span>';
hero.appendChild(cue);
if(window.gsap&&!RM)gsap.fromTo('.cue-line i',{yPercent:-105},{yPercent:105,duration:1.7,ease:'power2.inOut',repeat:-1,repeatDelay:.35});
var ah=document.querySelector('#ats h2');
if(ah){
var defs=[['Parsing',1.2],['Scoring',3.7],['Matching',2.4]];
var row=document.createElement('div');
row.className='proc-row';
row.innerHTML=defs.map(function(d){var dots='';for(var k=0;k<9;k++)dots+='<i></i>';return '<span class="proc-pill"><span class="proc-grid">'+dots+'</span><span class="proc-name">'+d[0]+'</span><b class="proc-time" data-t="'+d[1]+'">0.0s</b></span>';}).join('');
ah.insertAdjacentElement('afterend',row);
if(!RM){
row.querySelectorAll('.proc-pill').forEach(function(p){
var ds=p.querySelectorAll('.proc-grid i');
setInterval(function(){ds.forEach(function(d){d.style.opacity=(0.18+Math.random()*0.82).toFixed(2);});},170);
});
}
var started=false;
var io=new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting&&!started){
started=true;
row.querySelectorAll('.proc-time').forEach(function(t){
var target=parseFloat(t.getAttribute('data-t')),v=0;
var iv=setInterval(function(){v+=0.1;if(v>=target){v=target;clearInterval(iv);}t.textContent=v.toFixed(1)+'s';},90);
});
io.disconnect();
}
});
},{threshold:0.4});
io.observe(row);
}
var pricing=document.querySelector('#pricing');
if(pricing&&window.RF_LOGOS){
var sec=document.createElement('section');
sec.className='section stack-strip';
var title='FITS YOUR WORKFLOW';
var spans=title.split('').map(function(ch){return ch===' '?'<span class="sp">&nbsp;</span>':'<span>'+ch+'</span>';}).join('');
var names=['discord','figma','github','notion','slack','googledocs'];
sec.innerHTML='<h2 class="flip-big" aria-label="'+title+'">'+spans+'</h2><p class="brace-line"><span class="brace">{</span> integrate with your fav tech stack <span class="brace">}</span></p><div class="stack-logos">'+names.map(function(n){return '<span class="slogo" title="'+n+'">'+(window.RF_LOGOS[n]||'')+'</span>';}).join('')+'</div>';
pricing.parentNode.insertBefore(sec,pricing);
if(window.gsap&&window.ScrollTrigger&&!RM){
gsap.from('.flip-big span',{rotationX:-95,opacity:0,y:10,transformPerspective:700,transformOrigin:'50% 100%',stagger:.04,duration:.75,ease:'back.out(1.5)',scrollTrigger:{trigger:sec,start:'top 74%',once:true}});
gsap.from('.slogo',{y:26,opacity:0,scale:.85,stagger:.07,duration:.6,ease:'back.out(2)',scrollTrigger:{trigger:'.stack-logos',start:'top 85%',once:true},clearProps:'transform'});
}
}
});
})();
