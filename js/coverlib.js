(function(){
function generate(tone,c){
c=c||{};
const company=c.company||'your company';
const role=c.role||'this role';
const t={
confident:{
hook:`I am excited to apply for the ${role} position at ${company}. I have spent the last several years shipping work that moved real metrics, and I want to bring that same impact to your team.`,
body:`In my current role I led projects end to end: scoping the problem, aligning stakeholders, and delivering measurable results — including a 32% lift on our core conversion flow. ${company}'s focus on craft and speed matches exactly how I like to work, and the ${role} role sits at the center of what I do best.`,
close:`I would love the chance to walk you through my work and show how I can contribute from week one. Thank you for your time and consideration.`
},
friendly:{
hook:`When I saw the ${role} opening at ${company}, it immediately felt like a fit. I love building things people actually enjoy using, and everything I have read about your team suggests you do too.`,
body:`Over the past few years I have taken projects from rough idea to shipped product, working closely with engineers, PMs, and customers along the way. One highlight: a redesign I drove lifted conversion 32% for over a million monthly users. I would bring that same energy, curiosity, and follow-through to ${company}.`,
close:`I would genuinely enjoy chatting about how I can help your team. Thanks so much for reading, and I hope we get to talk soon.`
},
formal:{
hook:`I am writing to express my interest in the ${role} position at ${company}. My background aligns closely with the responsibilities outlined in the role description.`,
body:`In my most recent position, I was responsible for leading initiatives end to end, from requirements gathering through delivery. These efforts produced measurable outcomes, including a 32% improvement in a core conversion metric. I am confident this experience would translate directly to the priorities of ${company}.`,
close:`I would welcome the opportunity to discuss my qualifications in further detail. Thank you for your consideration.`
}
};
return t[tone]||t.confident;
}
const api={generate:generate};
if(typeof window!=='undefined')window.RF_COVER=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
