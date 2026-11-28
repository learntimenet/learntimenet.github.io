import{C as e,S as t,t as n,x as r}from"./LoaderHider-B2RGA5Hn.js";import{t as i}from"./BlogArticlePage-CY-ftdK2.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`How Uber Tests Thousands of AI Agent Skills, and What You Can Copy`,description:`Uber went from one AI agent skill to more than 5,000 in a year, used a million times a month. What an agent skill is, why skills need evals, how Uber measures and ranks them, and how to start evaluating your own prompts and skills.`,date:`2026-11-27`,urlPath:`/blog/essentials/uber-agent-skills-evals/`,html:`<p>Coding agents can follow instructions written in plain text, so teams start writing those instructions down: how to query the data warehouse, how to open a pull request the team&#39;s way, how to debug a failing deploy. Soon there are hundreds of them. Which ones actually help? Uber faced that question at a large scale, and wrote about it on its engineering blog in November 2026.</p>
<h2 id="what-an-agent-skill-is">What an Agent Skill Is</h2>
<p>An <strong>agent skill</strong> is a reusable set of instructions for an AI agent, usually a Markdown file: when to use it, the steps to follow, the commands or queries to run, and the pitfalls to avoid. Instead of explaining your team&#39;s deploy process in every chat, you write it once, and the agent loads it when the task matches.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-light-font-weight:bold;--shiki-dark:#79C0FF;--shiki-dark-font-weight:bold"># Query the orders warehouse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">Use this skill when the user asks about order volumes or revenue.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">1.</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Use the </span><span style="color:#0550AE;--shiki-dark:#79C0FF">\`orders_daily\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> table, never the raw </span><span style="color:#0550AE;--shiki-dark:#79C0FF">\`orders\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> events.</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">2.</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Filter on </span><span style="color:#0550AE;--shiki-dark:#79C0FF">\`city_id\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, not on city names: names aren't unique.</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">3.</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Dates are in UTC. Convert to the city's time zone before grouping by day.</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Skills are cheap to write, which is the good news and the problem: anyone can add one, and nobody knows if it makes the agent better or worse.</p>
<h2 id="what-uber-reported">What Uber Reported</h2>
<p>According to Uber&#39;s post, its internal skills marketplace grew from <strong>one skill in October 2025 to more than 5,000 a year later</strong>, written by thousands of employees, with <strong>more than a million skill invocations a month</strong>.</p>
<p>To keep that useful, Uber:</p>
<ul>
<li><strong>Measures usage</strong> through agent hooks: each event records which skill ran, its version, and whether the agent picked it or a person called it by its command.</li>
<li><strong>Runs evals</strong> of skills in its agent environments, including its background agent platform and remote development machines.</li>
<li><strong>Ranks skills</strong> with a quality score built from eval results and how often they run, and splits them into tiers.</li>
<li><strong>Distributes skills</strong> to different agents with a command-line tool, so one skill works wherever people work.</li>
</ul>
<h2 id="why-skills-need-evals">Why Skills Need Evals</h2>
<p>A skill can make an agent worse: outdated steps, a wrong table name, or instructions that conflict with another skill. Without measurement, you only hear about failures when someone complains.</p>
<p>An <strong>eval</strong> is a repeatable test of the agent&#39;s output. For skills, the most useful question is simple: <strong>does the agent do better with this skill than without it?</strong></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Approach</th>
<th>What it tells you</th>
<th>Limits</th>
</tr>
</thead>
<tbody><tr>
<td>Usage counts</td>
<td>Which skills people and agents reach for</td>
<td>Popular isn&#39;t the same as helpful</td>
</tr>
<tr>
<td>Exact checks</td>
<td>Did the query return the right numbers?</td>
<td>Only works when there&#39;s one answer</td>
</tr>
<tr>
<td>A/B with and without</td>
<td>Whether the skill improves the result</td>
<td>Needs a set of realistic tasks</td>
</tr>
<tr>
<td>LLM or human as a judge</td>
<td>Which of two answers is better</td>
<td>Judges need clear criteria; blind them</td>
</tr>
</tbody></table>
</div>
<p>Secondary write-ups of Uber&#39;s post describe the A/B approach for data-warehouse skills: real queries run twice, with and without the skill, and judges who don&#39;t know which answer is which pick the better one.</p>
<h2 id="how-to-start-with-your-own-skills">How to Start With Your Own Skills</h2>
<p>You don&#39;t need Uber&#39;s scale to use the same idea:</p>
<ol>
<li><strong>Collect 20 to 50 real tasks</strong> the skill is meant for, from tickets, chat history or your own work.</li>
<li><strong>Write down what a good answer looks like</strong> for each: the right numbers, the files that must change, or a short checklist.</li>
<li><strong>Run each task twice</strong>, with and without the skill, in the same agent and model.</li>
<li><strong>Compare blind</strong>: shuffle the two answers and judge them against your checklist, yourself or with another model.</li>
<li><strong>Keep a score per skill version</strong>, so an edit that makes things worse is caught before everyone uses it.</li>
</ol>
<p>Log which skill ran and its version on every use, without the prompt text or file contents, as Uber describes: that&#39;s enough to find unused skills, and it keeps private data out of your logs.</p>
<h2 id="what-to-take-away">What to Take Away</h2>
<ol>
<li>A skill is a Markdown file of instructions; writing them is easy, knowing which ones help is the hard part.</li>
<li>Measure usage to find what&#39;s used, and evals to find what&#39;s useful: they answer different questions.</li>
<li>The core eval is an A/B test: the same task with and without the skill, judged blind.</li>
<li>Version your skills and score each version, like code with tests.</li>
<li>Rank and tier skills so people and agents find the good ones first.</li>
</ol>
<h2 id="source">Source</h2>
<p>Based on <a href="https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills/">How Uber Evals 1 Million Agent Skill Invocations a Month</a>, Uber Engineering, November 2026. The explanations and examples here are our own.</p>
`,headings:[{id:`what-an-agent-skill-is`,text:`What an Agent Skill Is`},{id:`what-uber-reported`,text:`What Uber Reported`},{id:`why-skills-need-evals`,text:`Why Skills Need Evals`},{id:`how-to-start-with-your-own-skills`,text:`How to Start With Your Own Skills`},{id:`what-to-take-away`,text:`What to Take Away`},{id:`source`,text:`Source`}],parents:[],related:[{title:`nginx2root: What the New nginx Flaws Teach About Protecting Your Origin`,description:`In November 2026, ten nginx vulnerabilities were disclosed, five of them memory corruption bugs called nginx2root. Why a proxy in front of nginx protects from some of them and not others, what "origin protection" means, and the checklist to secure your own servers.`,date:`2026-11-27`,urlPath:`/blog/essentials/cloudflare-nginx2root/`},{title:`Should You Scale PostgreSQL Vertically or Horizontally?`,description:`Your PostgreSQL database is slowing down. Find what it's short of, scale up with the settings that matter, add PgBouncer and read replicas, partition big tables, and know when Citus or sharding is worth it, with the SQL and config for each step.`,date:`2026-11-27`,urlPath:`/blog/essentials/scale-postgresql-vertically-or-horizontally/`},{title:`How to Publish Your First Expo App on the Google Play Store`,description:`A step-by-step guide to ship an Expo React Native app on Google Play. Set up app.json, build an Android App Bundle with EAS Build, create the Play Console listing, pass the 12-tester closed test, release to production, and ship updates.`,date:`2026-11-26`,urlPath:`/blog/essentials/publish-expo-app-google-play/`},{title:`LEAD and LAG in SQL, Explained with Examples`,description:`LEAD() OVER reads a value from the next row, and LAG() from the previous one, without a self join. Learn the syntax, PARTITION BY and ORDER BY, the offset and default arguments, and how to use them for time between orders, month-over-month changes and finding the last row.`,date:`2026-11-25`,urlPath:`/blog/essentials/lead-and-lag-in-sql/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Python Quiz`,description:`Test your Python: lists and dictionaries, mutable defaults, comprehensions, generators, scope, and the details that trip up even experienced developers.`,urlPath:`/quiz/python/`}]}})})}));