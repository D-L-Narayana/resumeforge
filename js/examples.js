(function(){
const EX={
swe:{label:'Software Engineer',blurb:'Backend-leaning senior engineer resume with strong systems and cost-reduction wins.',resume:{
name:'Jordan Lee',title:'Senior Software Engineer',email:'jordan.lee@email.com',phone:'+1 (206) 555-0187',location:'Seattle, WA',
summary:'Backend engineer with 8 years building high-throughput distributed systems. Led migrations, cut infra costs, and shipped services handling billions of daily events.',
skills:['Go','Python','TypeScript','Kubernetes','AWS','PostgreSQL','gRPC','CI/CD'],
experience:[
{role:'Senior Software Engineer',company:'Cloudline',period:'2021 — Present',bullets:['Led migration of a monolith to 14 microservices, reducing deploy time 85%','Built a rate-limiting service handling 40K requests per second','Reduced infra spend 22% by rightsizing Kubernetes workloads']},
{role:'Software Engineer',company:'Datapost',period:'2018 — 2021',bullets:['Shipped a real-time analytics pipeline processing 2B events daily','Improved API p95 latency 60% through query optimization','Managed the on-call rotation and cut incident MTTR 35%']}],
education:[{degree:'B.S. Computer Science',school:'University of Washington',year:'2018'}]}},
pm:{label:'Product Manager',blurb:'Revenue-focused senior PM resume with experimentation and activation wins.',resume:{
name:'Sarah Kim',title:'Senior Product Manager',email:'sarah.kim@email.com',phone:'+1 (917) 555-0142',location:'New York, NY',
summary:'Product manager with 7 years turning ambiguous problems into shipped products. Drove payments revenue up 28% and owns roadmaps for products with 800K monthly users.',
skills:['Product Strategy','Roadmapping','SQL','A/B Testing','User Research','Stakeholder Management','Analytics','Agile'],
experience:[
{role:'Senior Product Manager',company:'Finlight',period:'2022 — Present',bullets:['Led a 3-squad payments initiative that grew revenue 28% year over year','Launched a self-serve onboarding flow, increasing activation 19%','Owned the quarterly roadmap for a product with 800K MAU']},
{role:'Product Manager',company:'Loopworks',period:'2019 — 2022',bullets:['Shipped 30+ experiments, driving a 15% lift in retention','Built the analytics framework adopted across 4 product teams','Reduced churn 12% by redesigning the billing experience']}],
education:[{degree:'MBA',school:'NYU Stern School of Business',year:'2019'}]}},
data:{label:'Data Analyst',blurb:'Senior analyst resume centered on experimentation, automation, and stakeholder impact.',resume:{
name:'Priya Nair',title:'Senior Data Analyst',email:'priya.nair@email.com',phone:'+1 (312) 555-0165',location:'Chicago, IL',
summary:'Data analyst with 8 years translating messy data into decisions. Built dashboards used by 120+ stakeholders and experiments that moved checkout conversion 9%.',
skills:['SQL','Python','Tableau','dbt','Snowflake','Statistics','Experiment Design','Data Modeling'],
experience:[
{role:'Senior Data Analyst',company:'Cartfuel',period:'2021 — Present',bullets:['Built a self-serve dashboard suite used by 120+ stakeholders weekly','Designed experiments that increased checkout conversion 9%','Reduced reporting turnaround 70% by automating 25 pipelines']},
{role:'Data Analyst',company:'Metricly',period:'2018 — 2021',bullets:['Created LTV models that improved marketing ROI 18%','Led the migration to Snowflake, cutting query costs 40%','Delivered weekly insights to leadership across 6 business units']}],
education:[{degree:'B.S. Statistics',school:'University of Illinois',year:'2018'}]}},
marketing:{label:'Marketing Manager',blurb:'Growth marketing resume with organic, lifecycle, and paid-efficiency wins.',resume:{
name:'Diego Ramos',title:'Growth Marketing Manager',email:'diego.ramos@email.com',phone:'+1 (512) 555-0139',location:'Austin, TX',
summary:'Growth marketer with 8 years across SEO, lifecycle, and paid. Grew organic traffic 240% and built an email program driving 31% of monthly revenue.',
skills:['SEO','Paid Acquisition','Lifecycle Email','Content Strategy','Google Analytics','CRO','Copywriting','Marketing Automation'],
experience:[
{role:'Growth Marketing Manager',company:'Brewline',period:'2021 — Present',bullets:['Grew organic traffic 240% in 18 months through a full SEO overhaul','Launched a lifecycle email program driving 31% of monthly revenue','Reduced CAC 27% by rebalancing paid channels']},
{role:'Marketing Specialist',company:'Fondue',period:'2018 — 2021',bullets:['Built a content engine producing 20+ articles monthly','Increased trial-to-paid conversion 14% with an onboarding nurture','Managed a $1.2M annual ad budget across 5 channels']}],
education:[{degree:'B.A. Marketing',school:'University of Texas at Austin',year:'2018'}]}},
sales:{label:'Account Executive',blurb:'Enterprise sales resume with quota overachievement and pipeline growth.',resume:{
name:'Maya Thompson',title:'Enterprise Account Executive',email:'maya.thompson@email.com',phone:'+1 (617) 555-0173',location:'Boston, MA',
summary:'Enterprise AE with 8 years selling B2B SaaS. Delivered 132% of quota three years running and closed the largest deal in company history at $1.4M ARR.',
skills:['Enterprise Sales','Salesforce','Pipeline Management','Negotiation','Prospecting','MEDDIC','Forecasting','SaaS'],
experience:[
{role:'Enterprise Account Executive',company:'Signalpath',period:'2021 — Present',bullets:['Delivered 132% of quota for 3 consecutive years','Closed the largest deal in company history at $1.4M ARR','Grew territory pipeline 3x through outbound prospecting']},
{role:'Account Executive',company:'Bridgely',period:'2018 — 2021',bullets:['Increased win rate 21% by introducing MEDDIC qualification','Built a referral motion sourcing 25% of new pipeline','Managed 40+ active opportunities per quarter']}],
education:[{degree:'B.A. Economics',school:'Boston University',year:'2018'}]}}
};
if(typeof window!=='undefined')window.RF_EXAMPLES=EX;
if(typeof module!=='undefined'&&module.exports)module.exports=EX;
})();
