(function(){
document.addEventListener('DOMContentLoaded',function(){
const pill=document.createElement('div');
pill.className='theme-pill';
pill.setAttribute('aria-label','Theme');
const opts=[['light','\u2600','Light mode'],['dark','\u263E','Dark mode'],['warm','\u2668','Warm mode']];
opts.forEach(function(o){
const b=document.createElement('button');
b.type='button';
b.title=o[2];
b.textContent=o[1];
if(o[0]==='light')b.classList.add('on');
b.addEventListener('click',function(){
pill.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
b.classList.add('on');
if(o[0]==='light')document.documentElement.removeAttribute('data-theme');
else document.documentElement.setAttribute('data-theme',o[0]);
});
pill.appendChild(b);
});
document.body.appendChild(pill);
});
})();
