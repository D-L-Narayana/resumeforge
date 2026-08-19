(function(){
const DATA={
features:[
{icon:'⚡',title:'Real-time ATS scoring',desc:'Every keystroke is re-scored against 8 recruiter checks, so you fix issues before you apply — not after the rejection.'},
{icon:'🎯',title:'Recruiter-approved templates',desc:'Four layouts modeled on what hiring managers at top companies actually shortlist. No gimmicks, just clarity.'},
{icon:'📄',title:'One-click PDF export',desc:'Pixel-perfect print styling turns your resume into a clean, ready-to-send PDF straight from the browser.'},
{icon:'🧠',title:'Smart content hints',desc:'Failing checks come with concrete fixes: quantify results, add action verbs, tighten your summary.'},
{icon:'🔒',title:'Private by design',desc:'Everything runs in your browser. Your career data never touches a server, ever.'},
{icon:'📱',title:'Works everywhere',desc:'A fully responsive builder that feels native on desktop, tablet, and mobile.'}
],
templates:[
{id:'modern',name:'Modern',accent:'#6366f1',desc:'Bold accent headers with a clean skills grid. Great for tech and product roles.'},
{id:'classic',name:'Classic',accent:'#111827',desc:'Timeless serif look trusted in finance, law, and consulting.'},
{id:'minimal',name:'Minimal',accent:'#94a3b8',desc:'Quiet, airy, typography-first. Perfect for design and research.'},
{id:'executive',name:'Executive',accent:'#0f766e',desc:'Authoritative teal accents for senior and leadership roles.'}
],
pricing:[
{name:'Free',price:'$0',per:'',popular:false,cta:'Start free',features:['1 pro template','Full ATS score engine','PDF export','No signup required']},
{name:'Pro',price:'$9',per:'/mo',popular:true,cta:'Go Pro',features:['All 4 templates','Unlimited resumes','Cover letter mode (soon)','AI bullet rewriting (soon)','Priority support']},
{name:'Lifetime',price:'$49',per:' once',popular:false,cta:'Buy once',features:['Everything in Pro','Lifetime updates','Early access to new templates','Commercial use']}
],
testimonials:[
{name:'Priya S.',role:'Data Analyst',text:'I rebuilt my resume in 20 minutes and the ATS checklist caught three things my paid reviewer missed.'},
{name:'Marcus T.',role:'Frontend Engineer',text:'Went from zero callbacks to four interviews in two weeks after fixing my quantified-achievement bullets.'},
{name:'Elena R.',role:'Product Manager',text:'The live preview is addictive. It is the first builder that made formatting feel completely effortless.'},
{name:'David K.',role:'Career Coach',text:'Clean, fast, private. I recommend it to every candidate I coach.'}
],
faq:[
{q:'Is ResumeForge really free?',a:'Yes. The Free plan includes the full ATS score engine, the Modern template, and PDF export — no signup, no watermark.'},
{q:'What is an ATS score?',a:'Applicant Tracking Systems filter resumes before a human ever reads them. Our engine simulates the most common checks — contact info, quantified achievements, action verbs, skills coverage — and scores you out of 100.'},
{q:'Is my data stored anywhere?',a:'No. Everything stays in your browser tab. Close the tab and it is gone — nothing is uploaded, tracked, or saved on any server.'},
{q:'How do I export to PDF?',a:'Click Download PDF in the builder. Your browser print dialog opens with a print-optimized layout — choose "Save as PDF" and you are done.'},
{q:'Can I get more templates?',a:'New templates ship regularly on the Pro plan roadmap, along with cover letter mode and AI bullet rewriting.'}
],
sample:{
name:'Alex Morgan',
title:'Senior Product Designer',
email:'alex.morgan@email.com',
phone:'+1 (415) 555-0134',
location:'San Francisco, CA',
summary:'Product designer with 7+ years shipping consumer and B2B experiences. Led design for products used by 2M+ people, pairing systems thinking with hands-on prototyping to move metrics that matter.',
skills:['Product Design','Design Systems','Figma','Prototyping','User Research','A/B Testing','Interaction Design','HTML/CSS'],
experience:[
{role:'Senior Product Designer',company:'Northwind Labs',period:'2022 — Present',bullets:['Led redesign of the checkout flow, increasing conversion 32% across 1.2M monthly users','Built a design system adopted by 6 product teams, reducing UI build time 40%','Launched the mobile app that reached a 4.8-star rating within 3 months']},
{role:'Product Designer',company:'Brightpath',period:'2019 — 2022',bullets:['Designed onboarding that improved 30-day retention 18%','Shipped 25+ experiments with PMs and engineers, driving a 12% lift in activation','Managed research sessions with 40+ users to shape the 2021 roadmap']}
],
education:[{degree:'B.Des, Interaction Design',school:'California College of the Arts',year:'2019'}]
}
};
if(typeof window!=='undefined')window.RF_DATA=DATA;
if(typeof module!=='undefined'&&module.exports)module.exports=DATA;
})();
