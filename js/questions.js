(function(){
const Q={
general:[
{q:'Tell me about yourself.',tip:'Keep it to 90 seconds: present role, one big win with a number, why this role.'},
{q:'Why do you want to work here?',tip:'Name one product detail and one company value; tie both to your experience.'},
{q:'Tell me about a time you failed.',tip:'Pick a real failure, own it, and spend most of the answer on what changed after.'},
{q:'Describe a conflict with a coworker.',tip:'Use STAR; show you sought their view first and ended aligned on the goal.'},
{q:'What is your greatest strength?',tip:'Choose one strength the job description asks for and prove it with a metric.'},
{q:'Where do you see yourself in five years?',tip:'Show ambition inside the company track, not away from it.'},
{q:'Why are you leaving your current role?',tip:'Stay positive: the growth you seek, not the problems you flee.'},
{q:'Do you have any questions for us?',tip:'Always ask two: one about success metrics, one about how the team works.'}],
swe:[
{q:'Walk me through a system you designed.',tip:'Sketch the data flow, call out one tradeoff, and quantify the scale.'},
{q:'How do you approach debugging a production incident?',tip:'Triage impact first, then bisect: logs, metrics, recent deploys.'},
{q:'Tell me about a time you improved performance.',tip:'Name the metric before and after, and the profiling that found it.'},
{q:'How do you review code?',tip:'Correctness, then readability, then nitpicks — and praise good patterns.'},
{q:'SQL vs NoSQL — how do you choose?',tip:'Anchor on access patterns and consistency needs, not fashion.'},
{q:'How do you keep services reliable during deploys?',tip:'Talk canaries, feature flags, rollbacks, and health checks.'},
{q:'Describe a hard technical decision you drove.',tip:'Show the options you compared and exactly why the loser lost.'},
{q:'How do you handle tech debt?',tip:'Budget it like a feature: small consistent payments beat big rewrites.'}],
pm:[
{q:'How do you prioritize a roadmap?',tip:'Show a framework like RICE plus the judgment layer you add on top.'},
{q:'Tell me about a product you shipped end to end.',tip:'Problem, bet, metric moved — in that order.'},
{q:'How do you say no to stakeholders?',tip:'Anchor on the goal metric and offer the tradeoff explicitly.'},
{q:'A metric dropped 10% overnight — what do you do?',tip:'Segment first (platform, geo, funnel step) before hypothesizing.'},
{q:'How do you work with engineers?',tip:'Bring problems not solutions, protect scope, and always share the why.'},
{q:'Describe a failed launch.',tip:'Show the kill criteria you set upfront and what the next bet learned.'},
{q:'How do you measure product success?',tip:'One north star, two guardrails; say why vanity metrics fail.'},
{q:'Walk me through discovery for a new feature.',tip:'Interviews, sizing, prototype, then the smallest testable slice.'}],
data:[
{q:'Walk me through an analysis that changed a decision.',tip:'Start with the decision it changed, not the query you wrote.'},
{q:'How do you design an A/B test?',tip:'Hypothesis, power calculation, guardrails, and a pre-registered decision rule.'},
{q:'Explain p-values to a non-technical stakeholder.',tip:'Practice a two-sentence version with zero jargon.'},
{q:'How do you handle messy data?',tip:'Profile first, document assumptions, and quantify what cleaning changed.'},
{q:'How would you measure month-over-month retention in SQL?',tip:'Talk cohorts plus self-joins or window functions.'},
{q:'A dashboard number looks wrong — what now?',tip:'Reproduce it, trace lineage upstream, then fix at the source.'},
{q:'Dashboard or one-off analysis — how do you choose?',tip:'A recurring decision gets a dashboard; a one-off gets a memo.'},
{q:'Describe a time your analysis was wrong.',tip:'Show the check that caught it and the process change that followed.'}],
marketing:[
{q:'Walk me through a campaign you are proud of.',tip:'Lead with the business number, then the creative insight behind it.'},
{q:'How do you allocate budget across channels?',tip:'Marginal CAC per channel, not blended averages.'},
{q:'How do you grow organic traffic?',tip:'Talk intent clusters and content velocity, with one real example.'},
{q:'A campaign is underperforming — what do you check first?',tip:'Audience, then creative, then landing page — in funnel order.'},
{q:'How do you measure brand marketing?',tip:'Be honest about the lag; use share of search and branded traffic.'},
{q:'Describe your testing process for ads.',tip:'One variable at a time, minimum spend thresholds, clear kill rules.'},
{q:'How do you work with sales?',tip:'Shared pipeline definitions and a feedback loop on lead quality.'},
{q:'What would you do in your first 90 days here?',tip:'Audit, quick wins by day 30, one big bet by day 90.'}],
sales:[
{q:'Walk me through your sales process.',tip:'Map it to a framework like MEDDIC with a real deal example.'},
{q:'How do you handle the price objection?',tip:'Reframe to the cost of the problem before defending the number.'},
{q:'Tell me about a deal you lost.',tip:'Show the early signal you missed and how you qualify for it now.'},
{q:'How do you prospect a new territory?',tip:'Tiered accounts, trigger events, and a multi-channel cadence.'},
{q:'A champion goes quiet late in the deal — what do you do?',tip:'Multithread: you should already know three other stakeholders.'},
{q:'How do you forecast accurately?',tip:'Stage criteria based on buyer actions, not seller feelings.'},
{q:'What makes you better than other reps?',tip:'Pick one repeatable behavior and quantify its result.'},
{q:'How do you run a discovery call?',tip:'Their words, their metrics; end with agreed next steps and a date.'}]
};
if(typeof window!=='undefined')window.RF_QUESTIONS=Q;
if(typeof module!=='undefined'&&module.exports)module.exports=Q;
})();
