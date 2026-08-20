(function(){
document.addEventListener('DOMContentLoaded',function(){
const D=window.RF_DATA;
const $=function(id){return document.getElementById(id);};
$('featureGrid').innerHTML=D.features.map(function(f){return `<div class="card feature reveal"><div class="icon">${f.icon}</div><h3>${f.title}</h3><p>${f.desc}</p></div>`;}).join('');
$('templateGrid').innerHTML=D.templates.map(function(t){return `<a class="card template reveal" href="builder.html?template=${t.id}" style="--acc:${t.accent}"><div class="thumb"><div class="tbar"></div><div class="tline" style="width:85%"></div><div class="tline" style="width:60%"></div><div class="tline" style="width:75%"></div><div class="tline" style="width:42%"></div><div class="tline" style="width:70%"></div></div><h3>${t.name}</h3><p>${t.desc}</p></a>`;}).join('');
$('pricingGrid').innerHTML=D.pricing.map(function(p){return `<div class="card price-card reveal ${p.popular?'popular':''}">${p.popular?'<span class="pop-tag">MOST POPULAR</span>':''}<h3>${p.name}</h3><div class="price">${p.price}<small>${p.per}</small></div><ul class="plist">${p.features.map(function(f){return `<li>${f}</li>`;}).join('')}</ul><a class="btn ${p.popular?'btn-primary':'btn-ghost'}" href="builder.html">${p.cta}</a></div>`;}).join('');
$('testiGrid').innerHTML=D.testimonials.map(function(t){return `<div class="card testi reveal"><p>\u201C${t.text}\u201D</p><div class="who"><strong>${t.name}</strong> \u00B7 ${t.role}</div></div>`;}).join('');
$('faqList').innerHTML=D.faq.map(function(f){return `<div class="faq-item"><button class="faq-q">${f.q}<span>+</span></button><div class="faq-a"><p>${f.a}</p></div></div>`;}).join('');
document.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){b.parentElement.classList.toggle('open');});});
const obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
const mock=document.querySelector('.mock-paper');
const heroEl=document.querySelector('.hero');
if(mock&&heroEl&&window.matchMedia('(pointer:fine)').matches){
heroEl.addEventListener('mousemove',function(e){
const r=mock.getBoundingClientRect();
const dx=(e.clientX-(r.left+r.width/2))/r.width;
const dy=(e.clientY-(r.top+r.height/2))/r.height;
mock.style.transform='rotateY('+(dx*7).toFixed(2)+'deg) rotateX('+(-dy*7).toFixed(2)+'deg)';
});
heroEl.addEventListener('mouseleave',function(){mock.style.transform='none';});
}
$('year').textContent=new Date().getFullYear();
});
})();
