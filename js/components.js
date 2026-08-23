(function(){
var RM=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var FINE=window.matchMedia&&window.matchMedia('(pointer: fine)').matches;
document.addEventListener('click',function(e){
var a=e.target.closest?e.target.closest('a[href^="#"]'):null;
if(!a)return;
var id=a.getAttribute('href');
if(id.length>1&&!document.querySelector(id)){e.preventDefault();window.location.href='index.html'+id;}
});
document.addEventListener('DOMContentLoaded',function(){
if(window.location.hash){
setTimeout(function(){
var tgt=null;
try{tgt=document.querySelector(window.location.hash);}catch(er){}
if(tgt)tgt.scrollIntoView({behavior:'smooth',block:'start'});
},600);
}
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
var feats=document.querySelector('#features');
if(feats){
var cs=document.createElement('section');
cs.className='section compare-sec';
var mklines=function(n,cls){var s='';for(var i=0;i<n;i++)s+='<i class="'+cls+'" style="width:'+(55+((i*17)%40))+'%"></i>';return s;};
cs.innerHTML='<h2 class="section-title">From ignored to interviewed</h2><p class="section-sub">Drag the handle to compare a typical resume with a forged one.</p>'+
'<div class="compare" id="compare">'+
'<div class="cmp-side cmp-before"><span class="cmp-tag tl">BEFORE</span><div class="cmp-paper"><b class="cmp-name dim">ALEX MORGAN</b>'+mklines(11,'bl')+'<span class="cmp-chip bad">ATS 34/100</span></div></div>'+
'<div class="cmp-side cmp-after"><span class="cmp-tag tr">AFTER</span><div class="cmp-paper"><b class="cmp-name">ALEX MORGAN</b><i class="ah"></i>'+mklines(3,'al')+'<i class="ah"></i>'+mklines(4,'al')+'<i class="ah"></i>'+mklines(2,'al')+'<span class="cmp-chip good">ATS 92/100</span></div></div>'+
'<div class="cmp-handle"><span>\u2194</span></div></div>';
feats.insertAdjacentElement('afterend',cs);
var cmp=cs.querySelector('.compare'),aft=cs.querySelector('.cmp-after'),hnd=cs.querySelector('.cmp-handle');
var setP=function(p){p=Math.max(6,Math.min(94,p));aft.style.clipPath='inset(0 0 0 '+p+'%)';hnd.style.left=p+'%';};
setP(50);
var drag=false;
cmp.addEventListener('pointerdown',function(e){drag=true;cmp.setPointerCapture(e.pointerId);var r=cmp.getBoundingClientRect();setP((e.clientX-r.left)/r.width*100);});
cmp.addEventListener('pointermove',function(e){if(!drag)return;var r=cmp.getBoundingClientRect();setP((e.clientX-r.left)/r.width*100);});
cmp.addEventListener('pointerup',function(){drag=false;});
cmp.addEventListener('pointercancel',function(){drag=false;});
if(window.gsap&&window.ScrollTrigger&&!RM){
var co={p:50};
gsap.to(co,{p:66,duration:.8,yoyo:true,repeat:1,ease:'power2.inOut',onUpdate:function(){setP(co.p);},scrollTrigger:{trigger:cmp,start:'top 70%',once:true}});
}
}
var faqEl=document.querySelector('#faqList');
var wallHost=faqEl?faqEl.closest('section'):null;
if(wallHost){
var quotes=[["Priya S.","Data Analyst","The ATS checklist caught three things my paid reviewer missed."],["Alex M.","Frontend Engineer","Rebuilt my resume in 20 minutes. Two callbacks the same week."],["Jordan L.","Product Manager","The JD matcher told me exactly which keywords I was missing."],["Sara K.","UX Designer","Cover letter studio nailed my tone on the first try."],["Ken W.","Sales Lead","Used the salary script word for word. +$14.5k."],["Mia R.","Marketing Manager","Aurora template got compliments in the final round."],["Dev P.","Backend Engineer","Tracker kept my 30 applications from becoming chaos."],["Ana T.","Recruiter","I recommend the scanner to every candidate I reject."],["Leo F.","Data Scientist","Bullet doctor turned my duties into achievements."],["Nina G.","PM Intern","Interview prep questions showed up in my actual interview."],["Omar H.","DevOps","From 34 to 92 ATS in one evening."],["Tara V.","Copywriter","It feels like Apple built a resume tool."]];
var wsec=document.createElement('section');
wsec.className='section wall-sec';
var wcols=[[],[],[]];
quotes.forEach(function(q,i){wcols[i%3].push(q);});
wsec.innerHTML='<h2 class="section-title">Wall of wins</h2><p class="section-sub">Real workflows, real callbacks.</p><div class="wall">'+wcols.map(function(col){var cards=col.concat(col).map(function(q){return '<div class="wall-card">\u201C'+q[2]+'\u201D<strong>'+q[0]+'</strong><em>'+q[1]+'</em></div>';}).join('');return '<div class="wall-col">'+cards+'</div>';}).join('')+'</div>';
wallHost.insertAdjacentElement('beforebegin',wsec);
}
var mw=hero?hero.querySelector('.mock-wrap'):null;
if(mw&&!RM){
[['PDF ready \u2713',''],['JD match 87%','r2']].forEach(function(c){
var ring=document.createElement('span');
ring.className='orbit-ring '+c[1];
ring.innerHTML='<span class="orbit-chip">'+c[0]+'</span>';
mw.appendChild(ring);
});
}
if(!hero&&!RM){
var sh=document.querySelector('.page-head h1, main h1, .swrap h1');
if(sh&&sh.children.length===0){
var fin=sh.textContent,schars='!<>-_/[]{}=+*^?#';
var fr=0,total=26;
var siv=setInterval(function(){
fr++;
var reveal=Math.floor(fin.length*fr/total),out='';
for(var i=0;i<fin.length;i++){out+=i<reveal?fin[i]:(fin[i]===' '?' ':schars[Math.floor(Math.random()*schars.length)]);}
sh.textContent=out;
if(fr>=total){sh.textContent=fin;clearInterval(siv);}
},40);
}
}
});
})();
