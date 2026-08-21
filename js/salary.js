(function(){
document.addEventListener('DOMContentLoaded',function(){
const $=function(id){return document.getElementById(id);};
const S=window.RF_SALARY;
function num(id){const v=parseFloat($(id).value);return isNaN(v)?0:v;}
$('scType').addEventListener('change',function(){$('compWrap').classList.toggle('hide',$('scType').value!=='competing');});
$('analyzeBtn').addEventListener('click',function(){
const cur=num('curSal'),off=num('offSal'),mkt=num('mktSal');
if(!off){$('anaOut').innerHTML='<p class="hint">Enter at least the offered salary.</p>';return;}
const r=S.analyzeOffer(cur,off,mkt);
const V={strong:['Strong offer','v-strong'],fair:['Fair offer','v-fair'],below:['Below market','v-below'],unknown:['Offer received','v-fair']}[r.verdict];
let h='<div class="verdict '+V[1]+'">'+V[0]+'</div>';
if(r.raisePct!==null)h+='<div class="ana-row"><span>Raise vs current</span><strong>'+(r.raisePct>0?'+':'')+r.raisePct+'%</strong></div>';
if(r.vsMarketPct!==null)h+='<div class="ana-row"><span>Vs market rate</span><strong>'+(r.vsMarketPct>0?'+':'')+r.vsMarketPct+'%</strong></div>';
h+='<div class="ana-row"><span>Counter with</span><strong class="counter-big">'+S.fmt(r.counterLow)+' \u2013 '+S.fmt(r.counterHigh)+'</strong></div>';
$('anaOut').innerHTML=h;
$('scCounter').value=r.counterLow;
if(window.gsap)gsap.from('#anaOut',{y:14,duration:.5,ease:'power2.out',clearProps:'transform'});
});
$('genBtn').addEventListener('click',function(){
const f={company:$('scCompany').value.trim(),role:$('scRole').value.trim(),manager:$('scManager').value.trim(),strength:$('scStrength').value.trim(),offer:num('scOffer'),counter:num('scCounter'),competing:num('scCompeting')};
$('scriptOut').textContent=S.buildScript($('scType').value,f);
if(window.gsap)gsap.from('#scriptOut',{y:12,duration:.45,ease:'power2.out',clearProps:'transform'});
});
$('copyBtn').addEventListener('click',function(){
const t=$('scriptOut').textContent;
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){$('copyBtn').textContent='Copied \u2713';setTimeout(function(){$('copyBtn').textContent='Copy';},1400);});}
});
});
})();
