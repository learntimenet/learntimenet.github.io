import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-Blefks_7.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`url-shortener`,html:`<p>One of the most common warm-up questions in system design interviews:</p>
<blockquote>
<p>Design a service like bit.ly. Users submit a long URL and get a short one, like <code>lt.io/aZ3k9Q</code>. Anyone opening the short link is redirected to the original. Expect <strong>100 million new links a month</strong> and <strong>100 times more clicks than new links</strong>.</p>
</blockquote>
<h2 id="the-numbers-first">The Numbers First</h2>
<ul>
<li>100 million links a month is about <strong>40 writes per second</strong>.</li>
<li>100 times more reads: about <strong>4,000 redirects per second</strong>, more at peak.</li>
<li>At 500 bytes per link, a year of links is 100 M × 12 × 500 B = <strong>600 GB</strong>: one database can hold that.</li>
<li>Base62 codes (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) of 7 characters give 62⁷ ≈ <strong>3.5 trillion</strong> possible codes.</li>
</ul>
<p>So this is a read-heavy system with modest storage. The hard parts are generating unique codes and serving redirects fast.</p>
<h2 id="the-naive-version">The Naive Version</h2>
<p>Hash the long URL and keep the first 7 characters:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> hashlib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> short_code</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(long_url):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    digest </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> hashlib.md5(long_url.encode()).hexdigest()</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> digest[:</span><span style="color:#0550AE;--shiki-dark:#79C0FF">7</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It breaks in two ways:</p>
<ul>
<li><strong>Collisions.</strong> Two different URLs can share the first 7 characters. You must check the database on every create, and pick another code when it&#39;s taken.</li>
<li><strong>Same URL, same code.</strong> Two users shortening the same link get the same code, so one user&#39;s expiry date or statistics affect the other.</li>
</ul>
<h2 id="generating-unique-codes">Generating Unique Codes</h2>
<p>Give each link a unique number, then encode the number in base62:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">ALPHABET</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> base62</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(number):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    code </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ""</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    while</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> number </span><span style="color:#CF222E;--shiki-dark:#FF7B72">></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        number, rest </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> divmod</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(number, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">62</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        code </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ALPHABET</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[rest] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> code</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> code </span><span style="color:#CF222E;--shiki-dark:#FF7B72">or</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "0"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>A unique number can&#39;t collide, so no check is needed. Where do the numbers come from?</p>
<ul>
<li><strong>A database sequence.</strong> Simple, but a single counter is a bottleneck and a single point of failure.</li>
<li><strong>Ranges.</strong> A small coordination service hands each app server a block, like 1 to 1,000,000. The server uses its block from memory, then asks for the next one. Losing a server only wastes the rest of its block.</li>
<li><strong>Snowflake-style IDs.</strong> Each server builds 64-bit IDs from a timestamp, its worker number and a counter, with no coordination at all.</li>
</ul>
<p>Sequential codes are easy to guess: someone can walk through <code>aZ3k9Q</code>, <code>aZ3k9R</code>… and find private links. If that matters, shuffle the bits of the number with a reversible function before encoding, or add a few random characters.</p>
<h2 id="the-design">The Design</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Client → Load balancer → Link service → Cache (Redis) → Database</span></span>
<span class="line"><span>                              ↓</span></span>
<span class="line"><span>                       ID ranges service</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><strong>Creating a link:</strong> the link service takes the next number from its range, encodes it, stores <code>code → long_url</code> in the database and returns the short URL.</p>
<p><strong>Following a link:</strong> the service looks the code up in the cache, then in the database on a miss, and answers with a redirect. A few popular links get most of the clicks, so a cache of the hottest links absorbs most of the reads.</p>
<p>The servers keep no state, so you add servers behind the load balancer as traffic grows.</p>
<h2 id="301-or-302">301 or 302?</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Redirect</th>
<th>Browser behavior</th>
<th>Good for</th>
</tr>
</thead>
<tbody><tr>
<td><code>301</code></td>
<td>Cached: later clicks may skip your server</td>
<td>Less load, permanent links</td>
</tr>
<tr>
<td><code>302</code></td>
<td>Every click comes back to your server</td>
<td>Click counts, editable links</td>
</tr>
</tbody></table>
</div>
<p>Most shorteners use <code>302</code> (or <code>307</code>), because statistics and the ability to change or disable a link matter more than the saved requests.</p>
<h2 id="counting-clicks-without-slowing-redirects">Counting Clicks Without Slowing Redirects</h2>
<p>Updating a counter row on every click puts a write in the hot path, and popular links turn one row into a bottleneck. Instead, the redirect sends a small click event to a queue and returns immediately. Workers read the queue and update counts in batches, every few seconds.</p>
<h2 id="every-failure-and-what-happens">Every Failure, and What Happens</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>What goes wrong</th>
<th>What happens</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td>Cache is down</td>
<td>Every redirect reads the database</td>
<td>Slower, but works if the database can take the load</td>
</tr>
<tr>
<td>A link server crashes</td>
<td>The load balancer stops sending it traffic</td>
<td>Its unused ID range is skipped; no duplicates</td>
</tr>
<tr>
<td>ID ranges service is down</td>
<td>Servers keep using the ranges they hold</td>
<td>New ranges wait; existing ones last a while</td>
</tr>
<tr>
<td>Click queue is slow</td>
<td>Events wait in the queue</td>
<td>Counts lag; redirects stay fast</td>
</tr>
<tr>
<td>A link is deleted</td>
<td>The cache may still hold it</td>
<td>Delete the cache key too, or wait for its TTL</td>
</tr>
</tbody></table>
</div>
<h2 id="details-interviewers-ask-about">Details Interviewers Ask About</h2>
<ul>
<li><strong>Custom aliases.</strong> <code>lt.io/summer-sale</code> must be checked for uniqueness on create, and kept apart from generated codes, for example with a reserved prefix or a minimum length.</li>
<li><strong>Expiry.</strong> Store <code>expires_at</code>, check it on every redirect, and delete expired links in the background.</li>
<li><strong>Abuse.</strong> Check new URLs against lists of malware and phishing sites, and rate limit creation per user or IP.</li>
<li><strong>Several regions.</strong> Replicate links to read replicas near users; writes can go to one primary, since they&#39;re rare.</li>
<li><strong>Sharding.</strong> Not needed at 600 GB a year. If it grows, shard by code: every redirect knows its code, so it knows its shard.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Estimate first: about 40 writes and 4,000 reads per second, 600 GB a year.</li>
<li>Give each link a unique number from pre-allocated ranges, and encode it in base62.</li>
<li>Store <code>code → long_url</code> in a database, with the code as the key.</li>
<li>Serve redirects through a cache, from stateless servers behind a load balancer.</li>
<li>Use <code>302</code> to keep click statistics, and count clicks through a queue, in batches.</li>
<li>Add custom aliases, expiry and abuse checks as extras.</li>
</ol>
`})})}));