(function(){
var RM=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var FINE=window.matchMedia&&window.matchMedia('(pointer: fine)').matches;
document.addEventListener('DOMContentLoaded',function(){
var hero=document.querySelector('.hero');
var pg=document.createElement('i');
pg.id='pgbar';
document.body.appendChild(pg);
var tick=false;
function upd(){var h=document.documentElement;var m=h.scrollHeight-window.innerHeight;pg.style.width=(m>0?(h.scrollTop||document.body.scrollTop)/m*100:0)+'%';tick=false;}
window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});
upd();
if(FINE){
Array.prototype.slice.call(document.querySelectorAll('.card')).forEach(function(c){
var g=document.createElement('i');
g.className='spot-glow';
c.appendChild(g);
c.classList.add('spot');
c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});
});
}
if(hero){
var h1=hero.querySelector('h1');
Array.prototype.slice.call(hero.querySelectorAll('*')).forEach(function(el){
if(/upload & scan/i.test(el.textContent)&&(!h1||!el.contains(h1))&&!el.closest('.ann-pill'))el.style.display='none';
});
var hc=document.querySelector('.hero-copy')||hero;
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
var grad=hero.querySelector('h1 .grad');
if(grad&&!RM&&/interviews/i.test(grad.textContent)){
grad.innerHTML=grad.innerHTML.replace(/interviews/i,'<span class="rotor"><span class="rotor-word">interviews</span></span>');
var rw=grad.querySelector('.rotor-word');
var words=['interviews','callbacks','offers','noticed','hired'];
var wi=0;
setInterval(function(){
rw.classList.add('out');
setTimeout(function(){
wi=(wi+1)%words.length;
rw.textContent=words[wi];
rw.classList.remove('out');
rw.classList.add('pre');
void rw.offsetWidth;
rw.classList.remove('pre');
},460);
},3000);
}
if(!RM){
var feed=[['Priya S.','scored 94/100 on the ATS scanner','#0071e3'],['Alex M.','exported the Onyx template as PDF','#111827'],['Jordan L.','matched 87% against a job post','#0d9488'],['Sara K.','finished a cover letter in 3 minutes','#b45309'],['Ken W.','negotiated +$14,500 with the salary tool','#c25e00'],['Mia R.','is trying the Aurora template','#8a6d3b'],['Ana T.','scanned an uploaded resume','#e0447f'],['Dev P.','added 4 applications to the tracker','#2fd8c9']];
var wrap=document.createElement('div');
wrap.id='toasts';
document.body.appendChild(wrap);
var ti=0;
function pop(){
var d=feed[ti%feed.length];
ti++;
var t=document.createElement('div');
t.className='toast';
t.innerHTML='<span class="t-av" style="background:'+d[2]+'">'+d[0].charAt(0)+'</span><span class="t-tx"><strong>'+d[0]+'</strong> '+d[1]+'<em>just now</em></span>';
wrap.appendChild(t);
requestAnimationFrame(function(){requestAnimationFrame(function(){t.classList.add('on');});});
setTimeout(function(){t.classList.remove('on');setTimeout(function(){t.remove();},500);},4600);
}
setTimeout(function(){pop();setInterval(pop,9500);},3000);
}
}
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
