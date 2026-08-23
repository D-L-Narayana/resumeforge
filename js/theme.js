(function(){
function getT(){try{var m=document.cookie.match(/(?:^|; )rftheme=(dark|warm)/);return m?m[1]:null;}catch(e){return null;}}
function apply(v){if(v==='dark'||v==='warm')document.documentElement.setAttribute('data-theme',v);else document.documentElement.removeAttribute('data-theme');}
var cur=getT();
apply(cur);
document.addEventListener('DOMContentLoaded',function(){
var pill=document.createElement('div');
pill.className='theme-pill';
pill.setAttribute('aria-label','Theme');
var opts=[['light','\u2600','Light mode'],['dark','\u263E','Dark mode'],['warm','\u2668','Warm mode']];
opts.forEach(function(o){
var b=document.createElement('button');
b.type='button';
b.title=o[2];
b.textContent=o[1];
if((cur||'light')===o[0])b.classList.add('on');
b.addEventListener('click',function(){
pill.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
b.classList.add('on');
cur=o[0]==='light'?null:o[0];
apply(cur);
try{document.cookie='rftheme='+o[0]+';path=/;max-age=31536000';}catch(e){}
});
pill.appendChild(b);
});
document.body.appendChild(pill);
});
})();
