import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-88cmZ_nG.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`how-to-approach-a-system-design-interview`,html:`<p>&quot;Design a URL shortener.&quot; You have 45 minutes and an empty whiteboard. The interviewer isn&#39;t looking for one right answer: they want to see how you think, choose and explain. A simple, repeatable plan keeps you calm and makes sure you show all of it.</p>
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
`})})}));