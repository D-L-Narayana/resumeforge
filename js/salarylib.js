(function(){
function money(n){return Math.round(n/500)*500;}
function fmt(n){return '$'+(+n).toLocaleString('en-US');}
function analyzeOffer(current,offer,market){
current=+current||0;offer=+offer||0;market=+market||0;
const raisePct=current>0?Math.round(((offer-current)/current)*1000)/10:null;
const vsMarketPct=market>0?Math.round(((offer-market)/market)*1000)/10:null;
let verdict='unknown';
if(market>0){if(offer>=market*1.05)verdict='strong';else if(offer>=market*0.95)verdict='fair';else verdict='below';}
else if(raisePct!==null){verdict=raisePct>=15?'strong':raisePct>=5?'fair':'below';}
const anchor=Math.max(offer,market||offer);
return{raisePct:raisePct,vsMarketPct:vsMarketPct,counterLow:money(anchor*1.08),counterHigh:money(anchor*1.18),verdict:verdict};
}
function buildScript(kind,f){
f=f||{};
const c=f.company||'the company';
const r=f.role||'the role';
const m=f.manager||'there';
const offer=f.offer?fmt(f.offer):'the current offer';
const counter=f.counter?fmt(f.counter):'a stronger number';
const strength=f.strength||'the results I have consistently delivered in this space';
if(kind==='counter'){return 'Hi '+m+',\n\nThank you so much for the offer for the '+r+' position. I am genuinely excited about what the team at '+c+' is building.\n\nHaving researched current market rates for this role and considering '+strength+', I was targeting a base closer to '+counter+'. Is there flexibility to move from '+offer+' toward that number?\n\nI am confident we can land on a figure that feels great for both sides, and I am ready to move quickly once we do.\n\nBest regards';}
if(kind==='competing'){const comp=f.competing?fmt(f.competing):'a higher base';return 'Hi '+m+',\n\nThank you again for the offer for the '+r+' role. I want to be fully transparent with you: I have received another offer at '+comp+'.\n\n'+c+' remains my first choice \u2014 the team, the product, and the problems are exactly where I want to be. If we can bring the base to '+counter+', I am ready to sign immediately.\n\nIs that something we can work toward this week?\n\nBest regards';}
if(kind==='benefits'){return 'Hi '+m+',\n\nThank you for the offer for the '+r+' position at '+c+' \u2014 I am excited to get started.\n\nI understand the base of '+offer+' may be fixed at this level. If that is the case, I would love to explore the rest of the package: a signing bonus, an additional week of PTO, a remote-work arrangement, a learning budget, or an early 6-month compensation review tied to clear goals.\n\nWhich of these levers has the most room? I am flexible on the mix.\n\nBest regards';}
if(kind==='time'){return 'Hi '+m+',\n\nThank you so much for the offer for the '+r+' position \u2014 I am honored and genuinely excited about '+c+'.\n\nBecause this decision matters a great deal to me, I would like to ask for a few extra days to give it the consideration it deserves. Could I come back to you with my final answer by end of day Friday?\n\nI appreciate your patience, and I will not need longer than that.\n\nBest regards';}
return '';
}
const API={analyzeOffer:analyzeOffer,buildScript:buildScript,fmt:fmt};
if(typeof window!=='undefined')window.RF_SALARY=API;
if(typeof module!=='undefined'&&module.exports)module.exports=API;
})();
