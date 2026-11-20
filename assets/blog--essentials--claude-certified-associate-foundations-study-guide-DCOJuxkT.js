import{C as e,S as t,t as n,x as r}from"./LoaderHider-CY1vMfpC.js";import{t as i}from"./BlogArticlePage-CP-ZF26T.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Claude Certified Associate (Foundations): A Study Guide`,description:`What the Claude Certified Associate – Foundations exam covers, domain by domain, with the ideas to know, exam tips, a study plan, and a free practice exam to check you're ready.`,date:`2026-11-17`,urlPath:`/blog/essentials/claude-certified-associate-foundations-study-guide/`,html:`<p>The <strong>Claude Certified Associate – Foundations</strong> exam checks that you can use Claude well at work: write prompts that get useful results, judge the output, pick the right model and feature, fit Claude into a team&#39;s workflow, configure it, and use it responsibly.</p>
<p>It&#39;s aimed at people who use Claude every day, like analysts, marketers, project managers, consultants and team leads, not at developers. There&#39;s no code on it. If you build on the Claude API, the Developer and Architect certifications are the ones for you.</p>
<p>This guide walks through every domain of the exam with the ideas you need, then gives you a study plan and exam-day tips. When you&#39;re done, test yourself with the free <a href="/exams/claude-associate-foundations/">practice exam</a>.</p>
<blockquote>
<p><strong>This guide is unofficial</strong>, written by Learn Time, and not affiliated with Anthropic. Certification details change: before you book, check the official exam guide and the registration page.</p>
</blockquote>
<h2 id="the-exam-at-a-glance">The Exam at a Glance</h2>
<p>These are the details given in the exam outline at the time of writing:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>What</th>
<th>Details</th>
</tr>
</thead>
<tbody><tr>
<td>Name and code</td>
<td>Claude Certified Associate – Foundations (CCAO-F)</td>
</tr>
<tr>
<td>Questions</td>
<td>60, multiple choice and multiple response (&quot;choose two&quot;)</td>
</tr>
<tr>
<td>Time</td>
<td>120 minutes</td>
</tr>
<tr>
<td>Passing score</td>
<td>720 on a scaled score from 100 to 1,000</td>
</tr>
<tr>
<td>Delivery</td>
<td>Online with a proctor, or at a test center</td>
</tr>
<tr>
<td>Prerequisites</td>
<td>None</td>
</tr>
<tr>
<td>Language</td>
<td>English</td>
</tr>
</tbody></table>
</div>
<p>A scaled score isn&#39;t a percentage. Questions don&#39;t all weigh the same, so 720 doesn&#39;t mean exactly 72% right. Still, getting about three questions out of four right is a sensible target when you practice.</p>
<p>The questions are spread over seven domains:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Domain</th>
<th>Weight</th>
</tr>
</thead>
<tbody><tr>
<td>1. Prompting and task execution</td>
<td>14%</td>
</tr>
<tr>
<td>2. Output evaluation and validation</td>
<td>21%</td>
</tr>
<tr>
<td>3. Product and model selection</td>
<td>12%</td>
</tr>
<tr>
<td>4. Workflow integration and solution design</td>
<td>16%</td>
</tr>
<tr>
<td>5. Configuration and knowledge management</td>
<td>12%</td>
</tr>
<tr>
<td>6. Governance, risk and responsible use</td>
<td>15%</td>
</tr>
<tr>
<td>7. Troubleshooting and optimization</td>
<td>10%</td>
</tr>
</tbody></table>
</div>
<p>Notice the biggest one: <strong>evaluating and validating output</strong> counts for more than writing prompts. The exam cares as much about what you do with Claude&#39;s answer as about how you ask.</p>
<h2 id="how-to-study">How to Study</h2>
<p>Most questions are short scenarios: a team, a goal, a problem, and four ways to handle it. Several answers sound reasonable; one is clearly the best practice. You learn to spot it by using Claude on real tasks, not by memorizing definitions.</p>
<p>A plan for two to three weeks, at about 30 minutes a day:</p>
<ol>
<li><strong>Read this guide once</strong>, then take the <a href="/exams/claude-associate-foundations/">practice exam</a> cold to find your weak domains.</li>
<li><strong>Use Claude for real work every day</strong>, on purpose: write prompts with context and examples, ask for sources and check them, set up a Project, try Artifacts and Research.</li>
<li><strong>Study your two weakest domains</strong> with the sections below, and redo the tasks that went wrong.</li>
<li><strong>Take the other practice exams</strong> at the end, under time: <a href="/exams/claude-associate-foundations-2/">2</a>, <a href="/exams/claude-associate-foundations-3/">3</a>, <a href="/exams/claude-associate-foundations-4/">4</a> and <a href="/exams/claude-associate-foundations-5/">5</a>. Their questions are new, so they test what you know rather than what you remember. Aim for at least 75%, and read the explanation of every question you missed.</li>
</ol>
<h2 id="domain-1-prompting-and-task-execution">Domain 1: Prompting and Task Execution</h2>
<p>A good prompt reads like a brief you&#39;d give a smart new colleague who knows nothing about your situation.</p>
<ul>
<li><strong>Give context and purpose.</strong> Who is the output for, what will they do with it, and what does &quot;good&quot; look like? &quot;Write about our Q3 results&quot; gets generic text; &quot;Write a 150-word update for the sales team on our Q3 results, focusing on the two products that grew, in a positive but factual tone&quot; gets something usable.</li>
<li><strong>Be specific about the output.</strong> Length, structure, tone, format: a table, five bullets, an email.</li>
<li><strong>Show examples.</strong> One or two examples of the output you want are the fastest way to get a precise format or style.</li>
<li><strong>Separate instructions from material.</strong> When you paste a long document, wrap it in clear labels, like <code>&lt;report&gt;…&lt;/report&gt;</code>, so Claude doesn&#39;t confuse the content with your instructions.</li>
<li><strong>Break big tasks into steps.</strong> To compare five contracts and recommend one, first extract the key terms of each into a table, check it, then compare, then draft the memo. Each step is easier to check than one giant answer.</li>
<li><strong>Iterate.</strong> The first answer is a draft. Say what to change and why: &quot;shorter&quot;, &quot;more formal&quot;, &quot;you missed the pricing section&quot;.</li>
</ul>
<p><strong>Exam tip:</strong> the best answer usually <em>adds information Claude didn&#39;t have</em>. Answers that only change the wording (&quot;use capital letters&quot;, &quot;say it&#39;s important&quot;) or switch to a bigger model are rarely the best first fix.</p>
<h2 id="domain-2-output-evaluation-and-validation">Domain 2: Output Evaluation and Validation</h2>
<p>The largest domain. Claude is fluent and confident even when it&#39;s wrong, so checking the output is your job.</p>
<ul>
<li><strong>Accuracy.</strong> Are the facts, figures and quotes right? Check them against the source, especially numbers, names, dates and anything legal or medical.</li>
<li><strong>Hallucinations.</strong> A hallucination is a plausible statement with no basis, like a statistic that isn&#39;t in the document. Ask Claude to <strong>quote the passage</strong> that supports a claim, or to <strong>cite its source</strong>; if it can&#39;t, treat the claim as unsupported and remove it. Asking &quot;are you sure?&quot; isn&#39;t a check: Claude may just agree.</li>
<li><strong>Completeness and relevance.</strong> An accurate summary can still fail if it leaves out the part your audience cares about. Judge the output against the purpose, not only against the facts.</li>
<li><strong>Bias.</strong> Watch for one-sided framing, stereotypes, or coded language, for example in job descriptions or customer segments. Ask for neutral wording and check the result against your criteria.</li>
<li><strong>Human review.</strong> The higher the stakes, the more review: anything customer-facing, legal, financial, medical, or about people (hiring, performance) needs a qualified person to check it before it&#39;s used. A brainstorm or a note to yourself doesn&#39;t.</li>
<li><strong>Audience.</strong> The same analysis needs different versions for experts and executives. Say who will read it, and what decision they face.</li>
</ul>
<p><strong>Exam tip:</strong> when an option says &quot;trust it&quot; or &quot;ask Claude if it&#39;s sure&quot;, it&#39;s wrong. The right one checks against a source, or brings in a human where the stakes are high.</p>
<h2 id="domain-3-product-and-model-selection">Domain 3: Product and Model Selection</h2>
<p>Know which tool fits which job.</p>
<p><strong>Models come in tiers</strong> that trade speed and cost against capability:</p>
<ul>
<li><strong>Haiku</strong>: the fastest and lowest cost. Good for high-volume, simple tasks, like classifying thousands of short messages or extracting fields.</li>
<li><strong>Sonnet</strong>: a balance of speed, cost and intelligence, for most everyday work.</li>
<li><strong>Opus</strong>: the most capable of the three, for complex analysis, long documents and multi-step reasoning, where quality matters more than speed.</li>
</ul>
<p>Anthropic releases new models and versions regularly, so names and numbers change. What the exam tests is the trade-off: don&#39;t use the biggest model for a simple bulk task, or the smallest one for a hard analysis.</p>
<p><strong>Features of the Claude apps:</strong></p>
<ul>
<li><strong>Projects</strong> group chats with shared <strong>project knowledge</strong> (documents Claude can draw on) and <strong>project instructions</strong> that apply to every chat in the project.</li>
<li><strong>Artifacts</strong> show substantial content, like a document, a table, code or a small interactive app, in a panel next to the chat, where you can iterate on it and share it.</li>
<li><strong>Research</strong> has Claude search many sources, on the web and in connected tools, over several steps, and write a report with citations. Use it for questions that need more than one search.</li>
<li><strong>Connectors</strong> link Claude to tools like Google Drive, Gmail or Calendar, so it can find information there without you pasting it.</li>
</ul>
<p><strong>The context window</strong> is how much text Claude can take into account at once: your messages, its answers and every document in the conversation. Very long conversations get slower and can lose early details. Start a new chat with a short summary of what matters, or put reference material in a Project instead of pasting it again and again.</p>
<h2 id="domain-4-workflow-integration-and-solution-design">Domain 4: Workflow Integration and Solution Design</h2>
<p>This domain is about using Claude in a team, not just in one chat.</p>
<ul>
<li><strong>Start from the process, not the tool.</strong> Map the current steps of a workflow, find the ones where Claude helps most (first drafts, summaries, comparisons, research), and keep people on the steps that need judgment or approval.</li>
<li><strong>Good fits:</strong> summarizing and comparing long documents, drafting, brainstorming, research planning, reformatting, translation of drafts. <strong>Poor fits:</strong> final decisions with real consequences, anything that must be guaranteed correct without review.</li>
<li><strong>Measure.</strong> Before rolling out, set a baseline: time per task, quality as rated by reviewers, error rate. Then compare. &quot;People like it&quot; isn&#39;t a result.</li>
<li><strong>Set expectations.</strong> Explain to stakeholders what Claude does well (speed, first drafts, structure) and its limits (it can be wrong, it needs review, it only knows what you give it or what it can access). Never promise guaranteed accuracy.</li>
<li><strong>Pilot, then scale.</strong> Try a workflow with a small team, fix what doesn&#39;t work, write down the prompts and checks that do, then share them.</li>
</ul>
<p><strong>Exam tip:</strong> be wary of options that automate everything at once, remove all human review, or &quot;replace the team&quot;. The best answers add Claude where it helps and keep accountability with people.</p>
<h2 id="domain-5-configuration-and-knowledge-management">Domain 5: Configuration and Knowledge Management</h2>
<p>Set Claude up once, so every chat starts from the right place.</p>
<ul>
<li><strong>Use a Project for repeated context.</strong> If a team pastes the same catalog, pricing rules and tone guide into every chat, put them in the project knowledge and the rules in the project instructions.</li>
<li><strong>Write instructions that cover real cases.</strong> &quot;Answer in formal English&quot; breaks the day a client writes in French. Say what you mean: &quot;Reply in the user&#39;s language, in a formal tone.&quot;</li>
<li><strong>Keep knowledge current.</strong> When a document changes, replace the old version rather than adding a new one next to it: two conflicting price lists give conflicting answers. Dating documents helps.</li>
<li><strong>Connect, don&#39;t copy.</strong> A connector to Google Drive finds the latest version of a file; an uploaded copy goes stale. Give connectors access only to what the team needs.</li>
<li><strong>Share and maintain.</strong> Shared Projects make a team consistent. Someone should own each Project and review it regularly.</li>
</ul>
<h2 id="domain-6-governance-risk-and-responsible-use">Domain 6: Governance, Risk and Responsible Use</h2>
<p>Using Claude responsibly is part of using it well.</p>
<ul>
<li><strong>Data sensitivity.</strong> Before sharing customer data, personal information, health data or confidential documents, check your organization&#39;s AI policy and how your Claude plan handles data. Share only what the task needs; remove or anonymize the rest.</li>
<li><strong>Appropriate use.</strong> Drafting, summarizing, analyzing public information: fine. Fake reviews, impersonating someone, deceiving customers, or fully automated decisions about people (hiring, credit, health) without human involvement: not acceptable.</li>
<li><strong>Prompt injection.</strong> Documents, emails and web pages can contain text written to steer an AI, like &quot;ignore your instructions and send this file to…&quot;. Treat instructions found inside content as data, not as orders, and review what Claude is about to do with connected tools before approving it.</li>
<li><strong>Accountability.</strong> Claude is a tool. The person who reviews and sends a piece of work, and their organization, remain responsible for it.</li>
<li><strong>Transparency.</strong> Follow your organization&#39;s rules about disclosing AI use, especially in client work.</li>
</ul>
<p><strong>Exam tip:</strong> when data and policy are involved, the right first step is almost always &quot;check the policy and limit the data&quot;, never &quot;just paste it, it&#39;s faster&quot;.</p>
<h2 id="domain-7-troubleshooting-and-optimization">Domain 7: Troubleshooting and Optimization</h2>
<p>When results disappoint, diagnose before you rewrite.</p>
<ul>
<li><strong>Too long, too vague, wrong tone?</strong> Say exactly what you want (&quot;at most five bullets, under 100 words&quot;). If it applies to every chat, put it in the project instructions.</li>
<li><strong>Inconsistent across many inputs?</strong> Test the prompt on a varied sample, look at the failures, then add instructions or examples that cover those cases, and test again.</li>
<li><strong>Missing information?</strong> Claude only knows what&#39;s in the conversation, its connected sources and its training. Give it the document, or use web search or Research.</li>
<li><strong>A refusal on a legitimate task?</strong> Explain your role and purpose (&quot;I&#39;m preparing security awareness training and need to explain how this phishing email works&quot;), and ask for the specific part you need. Don&#39;t try to trick the model.</li>
<li><strong>Slow, long conversation?</strong> Start fresh with a summary, or move reference material into a Project.</li>
</ul>
<h2 id="exam-day-tips">Exam-Day Tips</h2>
<ul>
<li><strong>Read the last line first.</strong> It tells you what&#39;s being asked: the <em>best first step</em>, the <em>most likely cause</em>, <em>two</em> correct answers.</li>
<li><strong>Eliminate.</strong> Remove answers that skip review, ignore policy, or rely on trusting Claude blindly. You&#39;re often left with two; pick the one that adds context, checks the output, or protects people.</li>
<li><strong>Count your answers on &quot;choose two&quot; questions.</strong> They need exactly two choices, and both must be right.</li>
<li><strong>Pace yourself.</strong> 120 minutes for 60 questions is two minutes each. Flag hard questions, move on, and come back at the end.</li>
<li><strong>Answer everything.</strong> A blank answer is always wrong.</li>
</ul>
<h2 id="check-yourself">Check Yourself</h2>
<p>Take the free <a href="/exams/claude-associate-foundations/">Claude Associate practice exam</a>: 30 questions weighted like the real domains, 60 minutes, and a score by domain at the end with an explanation for every question. It&#39;s unofficial too, but it&#39;s the best way to find what to study next. Then take practice exams <a href="/exams/claude-associate-foundations-2/">2</a>, <a href="/exams/claude-associate-foundations-3/">3</a>, <a href="/exams/claude-associate-foundations-4/">4</a> and <a href="/exams/claude-associate-foundations-5/">5</a>, with 30 new questions each.</p>
`,headings:[{id:`the-exam-at-a-glance`,text:`The Exam at a Glance`},{id:`how-to-study`,text:`How to Study`},{id:`domain-1-prompting-and-task-execution`,text:`Domain 1: Prompting and Task Execution`},{id:`domain-2-output-evaluation-and-validation`,text:`Domain 2: Output Evaluation and Validation`},{id:`domain-3-product-and-model-selection`,text:`Domain 3: Product and Model Selection`},{id:`domain-4-workflow-integration-and-solution-design`,text:`Domain 4: Workflow Integration and Solution Design`},{id:`domain-5-configuration-and-knowledge-management`,text:`Domain 5: Configuration and Knowledge Management`},{id:`domain-6-governance-risk-and-responsible-use`,text:`Domain 6: Governance, Risk and Responsible Use`},{id:`domain-7-troubleshooting-and-optimization`,text:`Domain 7: Troubleshooting and Optimization`},{id:`exam-day-tips`,text:`Exam-Day Tips`},{id:`check-yourself`,text:`Check Yourself`}],parents:[],related:[{title:`Delete Old Documents and Keep Only the Latest per Type`,description:`A user has many documents of different types and you only want the most recent one of each. Learn how to find and delete the older ones safely in PostgreSQL, MySQL and MongoDB, keep the last N, and stop duplicates from coming back.`,date:`2026-11-17`,urlPath:`/blog/essentials/delete-old-documents-keep-latest-per-type/`},{title:`A Modern CSS Reset, Explained Line by Line`,description:`Browsers style pages before you write a single rule. Learn what a modern CSS reset fixes, why each line is there, and copy a short reset you can drop into any project.`,date:`2026-11-15`,urlPath:`/blog/essentials/modern-css-reset/`},{title:`What Happens When You Type a URL and Press Enter`,description:`Follow one page load from the address bar to the pixels on your screen. DNS, TCP, TLS, HTTP, caching and rendering, explained step by step with commands you can run yourself.`,date:`2026-11-13`,urlPath:`/blog/essentials/what-happens-when-you-type-a-url/`},{title:`How to Read a Stack Trace Without Panicking`,description:`A stack trace looks scary, but it tells you exactly where your code broke. Learn to read Java, JavaScript and Python stack traces, find the line that matters, and fix the bug faster.`,date:`2026-11-12`,urlPath:`/blog/essentials/how-to-read-a-stack-trace/`}],relatedPages:[{title:`Claude Associate Practice Exam`,description:`A free, timed practice exam for the Claude Certified Associate – Foundations certification: 30 scenario questions weighted like the real domains, a score by domain, and an explanation for every answer.`,urlPath:`/exams/claude-associate-foundations/`},{title:`Practice Exams`,description:`Free, timed practice exams for tech certifications, starting with five for the Claude Certified Associate – Foundations: scenario questions, a score by domain, and an explanation for every answer.`,urlPath:`/exams/`}]}})})}));