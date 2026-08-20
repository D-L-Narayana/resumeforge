(function(){
document.addEventListener('DOMContentLoaded',function(){
if(!document.getElementById('templateGrid'))return;
function magnetize(bar,items,maxScale,radius){
if(!window.matchMedia('(pointer:fine)').matches)return;
let raf=null;
const cur=items.map(function(){return 1;});
const tgt=items.map(function(){return 1;});
function tick(){
let live=false;
items.forEach(function(it,i){
cur[i]+=(tgt[i]-cur[i])*.22;
if(Math.abs(tgt[i]-cur[i])>.002)live=true;
it.style.transform='scale('+cur[i].toFixed(3)+')';
});
raf=live?requestAnimationFrame(tick):null;
}
function kick(){if(!raf)raf=requestAnimationFrame(tick);}
bar.addEventListener('mousemove',function(e){
items.forEach(function(it,i){
const r=it.getBoundingClientRect();
const d=Math.abs(e.clientX-(r.left+r.width/2));
tgt[i]=1+(maxScale-1)*Math.exp(-(d*d)/(2*radius*radius));
});
kick();
});
bar.addEventListener('mouseleave',function(){
items.forEach(function(_,i){tgt[i]=1;});
kick();
});
}
const APPS=[
['\ud83d\udcdd','Builder','builder.html','linear-gradient(145deg,#4da2ff,#0a66d9)'],
['\ud83e\uddea','ATS Scanner','scan.html','linear-gradient(145deg,#3ddc84,#0f9d58)'],
['\ud83d\udcda','Examples','examples.html','linear-gradient(145deg,#ffd60a,#f5a623)'],
['\ud83c\udfa4','Interview prep','interview.html','linear-gradient(145deg,#ff7ab8,#e0447f)'],
['\ud83d\udccb','Tracker','tracker.html','linear-gradient(145deg,#2fd8c9,#0e8f86)'],
['\u2709\ufe0f','Cover letters','coverletter.html','linear-gradient(145deg,#5ac8fa,#0071e3)'],
['\u2b50','Pricing','#pricing','linear-gradient(145deg,#48484c,#242427)']
];
const dock=document.createElement('nav');
dock.className='dock';
dock.setAttribute('aria-label','Quick dock');
const dItems=APPS.map(function(a){
const el=document.createElement('a');
el.className='dock-item';el.href=a[2];
el.setAttribute('data-label',a[1]);
el.style.background=a[3];
el.textContent=a[0];
dock.appendChild(el);
return el;
});
document.body.appendChild(dock);
magnetize(dock,dItems,1.65,95);
const foot=document.querySelector('footer');
if(foot){
const ICONS={
github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.5 22H3.34l7.24-8.28L1.2 2h6.4l4.42 5.84L18.9 2zm-1.1 18.1h1.73L7.02 3.8H5.16l12.64 16.3z"/></svg>',
youtube:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>',
site:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.7-3.9-9s1.4-6.4 3.9-9z"/></svg>'
};
const LINKS=[['github','https://github.com/Rahul777111/resumeforge'],['x','https://x.com'],['youtube','https://youtube.com'],['site','https://resumeforge-ruby-rho.vercel.app']];
const sd=document.createElement('div');
sd.className='sdock';
const sItems=LINKS.map(function(l){
const el=document.createElement('a');
el.className='sd-item';el.href=l[1];el.target='_blank';el.rel='noopener';
el.innerHTML=ICONS[l[0]];
sd.appendChild(el);
return el;
});
foot.insertBefore(sd,foot.firstChild);
magnetize(sd,sItems,1.5,80);
}
});
})();
