import{D as e,E as t,T as n,t as r}from"./LoaderHider-BDsmk_sZ.js";import{t as i}from"./BlogArticlePage-Bi2SCAka.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`How to Approach a System Design Interview`,description:`A repeatable plan for a 45-minute system design interview, from requirements and estimates to the high-level design, deep dives and trade-offs, with the mistakes that cost candidates the most.`,date:`2026-11-24`,urlPath:`/blog/essentials/how-to-approach-a-system-design-interview/`,html:`<p>&quot;Design a URL shortener.&quot; You have 45 minutes and an empty whiteboard. The interviewer isn&#39;t looking for one right answer: they want to see how you think, choose and explain. A simple, repeatable plan keeps you calm and makes sure you show all of it.</p>
<h2 id="the-plan-at-a-glance">The Plan at a Glance</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Step</th>
<th>Time</th>
</tr>
</thead>
<tbody><tr>
<td>1. Clarify the requirements</td>
<td>5 min</td>
</tr>
<tr>
<td>2. Estimate the scale</td>
<td>3–5 min</td>
</tr>
<tr>
<td>3. Define the API and data</td>
<td>5 min</td>
</tr>
<tr>
<td>4. Draw the high-level design</td>
<td>10 min</td>
</tr>
<tr>
<td>5. Deep dive into the hard parts</td>
<td>15 min</td>
</tr>
<tr>
<td>6. Wrap up: trade-offs, failures</td>
<td>5 min</td>
</tr>
</tbody></table>
</div>
<h2 id="1-clarify-the-requirements">1. Clarify the Requirements</h2>
<p>Never start drawing straight away. Ask questions, and write the answers down.</p>
<p><strong>Functional requirements:</strong> what the system does.</p>
<blockquote>
<p>&quot;Users create a short link from a long URL, and visiting the short link redirects. Do links expire? Can users choose a custom alias? Do we need click statistics?&quot;</p>
</blockquote>
<p><strong>Non-functional requirements:</strong> how well it must do it.</p>
<blockquote>
<p>&quot;How many users? Is it read-heavy? How fast must a redirect be? Can a link ever be lost?&quot;</p>
</blockquote>
<p>Then agree on the scope: &quot;I&#39;ll focus on creating and redirecting, and leave statistics for the end if we have time.&quot;</p>
<h2 id="2-estimate-the-scale">2. Estimate the Scale</h2>
<p>Quick, round numbers tell you what the design must handle:</p>
<blockquote>
<p>&quot;100 million new links a month is about 40 per second. Reads are 100 times more: 4,000 per second, maybe 10,000 at peak. Each link is about 500 bytes, so 50 GB a month, 3 TB over 5 years.&quot;</p>
</blockquote>
<p>Then say what it means: &quot;Reads dominate, so caching is key. The data fits in one database for years.&quot;</p>
<h2 id="3-define-the-api-and-the-data">3. Define the API and the Data</h2>
<p>A few lines make everything after them concrete:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>POST /links        { url, alias? }  → { code }</span></span>
<span class="line"><span>GET  /{code}       → 302 redirect to the long URL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>links(code PK, long_url, created_at, expires_at)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="4-draw-the-high-level-design">4. Draw the High-Level Design</h2>
<p>Draw the main path end to end, with simple boxes: clients, load balancer, app servers, cache, database. Walk through one request out loud:</p>
<blockquote>
<p>&quot;A redirect hits the load balancer, then a stateless app server. It checks Redis for the code; on a miss it reads the database and fills the cache. Then it returns a 302.&quot;</p>
</blockquote>
<p>Keep it simple and working first. The interviewer will push you toward the interesting parts.</p>
<h2 id="5-deep-dive-into-the-hard-parts">5. Deep Dive Into the Hard Parts</h2>
<p>Pick, or let the interviewer pick, the two or three parts that make this problem hard. For a URL shortener: generating unique codes, caching hot links, and handling traffic spikes.</p>
<p>For each one:</p>
<ol>
<li><strong>State the problem:</strong> &quot;Two servers could generate the same random code.&quot;</li>
<li><strong>Give options:</strong> &quot;Check and retry, a counter encoded in base 62, or pre-generated ranges per server.&quot;</li>
<li><strong>Choose, and say why:</strong> &quot;Ranges per server: no collisions and no central call per link. The cost is unused codes when a server restarts, which is fine.&quot;</li>
</ol>
<p>That three-part shape, problem, options, choice with a reason, is what interviewers listen for.</p>
<h2 id="6-wrap-up">6. Wrap Up</h2>
<p>Finish with what could go wrong and how the design copes:</p>
<ul>
<li>What if the cache or the database fails?</li>
<li>Where is the bottleneck at 10 times the traffic?</li>
<li>What would you monitor? What would you build next?</li>
</ul>
<h2 id="mistakes-that-cost-the-most">Mistakes That Cost the Most</h2>
<ul>
<li><strong>Designing before asking.</strong> You may solve the wrong problem.</li>
<li><strong>Going silent.</strong> Think out loud; the reasoning is what&#39;s being graded.</li>
<li><strong>Buzzword boxes.</strong> Don&#39;t add Kafka, microservices and sharding unless the numbers call for them. Say <em>why</em> each box exists.</li>
<li><strong>One perfect answer.</strong> Every choice has a cost. Name it before the interviewer does.</li>
<li><strong>Ignoring hints.</strong> When the interviewer asks &quot;what about…?&quot;, that&#39;s where they want you to go.</li>
</ul>
<h2 id="how-to-practice">How to Practice</h2>
<ol>
<li>Learn the building blocks: load balancers, caches, databases, replication, sharding, queues.</li>
<li>Do classic problems on paper, out loud, with a 45-minute timer, before reading a solution.</li>
<li>Read designs, then redo them a week later without looking.</li>
</ol>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Clarify functional and non-functional requirements, and agree on the scope.</li>
<li>Estimate the scale with round numbers, and say what they mean for the design.</li>
<li>Write the API and data model, then draw and walk through a simple design.</li>
<li>Deep dive into the hard parts: problem, options, choice with a reason.</li>
<li>Wrap up with failures, bottlenecks and monitoring, and think out loud the whole time.</li>
</ol>
`,headings:[{id:`the-plan-at-a-glance`,text:`The Plan at a Glance`},{id:`1-clarify-the-requirements`,text:`1. Clarify the Requirements`},{id:`2-estimate-the-scale`,text:`2. Estimate the Scale`},{id:`3-define-the-api-and-the-data`,text:`3. Define the API and the Data`},{id:`4-draw-the-high-level-design`,text:`4. Draw the High-Level Design`},{id:`5-deep-dive-into-the-hard-parts`,text:`5. Deep Dive Into the Hard Parts`},{id:`6-wrap-up`,text:`6. Wrap Up`},{id:`mistakes-that-cost-the-most`,text:`Mistakes That Cost the Most`},{id:`how-to-practice`,text:`How to Practice`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`HTML Basics: Elements, Forms and Accessibility`,description:`The HTML every web developer needs. A page's structure, headings and text, links and images, lists, semantic elements like header, nav and main, forms with labels, and the accessibility habits that make a page usable by everyone.`,date:`2026-11-24`,urlPath:`/blog/essentials/html-basics/`},{title:`Inheritance, Interfaces and Polymorphism in Java`,description:`Share behavior and write flexible code in Java. Interfaces and default methods, abstract classes, extends and super, overriding, polymorphism, instanceof patterns, and why composition is often better than inheritance.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-inheritance-interfaces-polymorphism/`},{title:`Java Basics: Variables, Types and Operators`,description:`Your first Java building blocks. Variables and var, the eight primitive types, String, arithmetic and its traps (integer division, overflow, decimals), comparison and logical operators, and converting between types.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-variables-types-and-operators/`},{title:`Java Concurrency Basics: Threads, Executors and Virtual Threads`,description:`Run work in parallel in Java, safely. Threads, race conditions and how to fix them with synchronized, atomics and concurrent collections, executors and futures, CompletableFuture, and Java 21's virtual threads.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-concurrency-basics/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));