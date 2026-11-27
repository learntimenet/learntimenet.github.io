import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-DvK8Rf9_.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`scale-database-vertically-or-horizontally`,html:`<p>Your app servers scale easily: add another one behind the load balancer. The database is different. It holds the state, every server talks to it, and it&#39;s usually the first thing to slow down. When it does, you face a real choice: a <strong>bigger database server</strong> (vertical) or <strong>more database servers</strong> (horizontal).</p>
<p>The short answer: <strong>scale vertically for as long as you reasonably can, add read replicas for reads, and shard only when writes or data size truly outgrow one machine.</strong> Here&#39;s why, and how to tell when you&#39;ve reached each step.</p>
<h2 id="the-two-options">The Two Options</h2>
<p><strong>Vertical scaling (scale up):</strong> move the database to a machine with more CPU, memory and faster disks. Same database, same code, same queries.</p>
<p><strong>Horizontal scaling (scale out):</strong> spread the database over several machines, either as <strong>copies</strong> (replicas) that share the reads, or as <strong>parts</strong> (shards) that each hold some of the data. The <a href="/blog/essentials/replication-and-sharding-explained/">replication and sharding guide</a> explains how each works.</p>
<p>For stateless app servers, horizontal wins almost every time, as the <a href="/blog/essentials/vertical-vs-horizontal-scaling/">scaling guide</a> shows. Databases are the exception, because splitting data is much harder than splitting traffic.</p>
<h2 id="side-by-side">Side by Side</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Question</th>
<th>Vertical</th>
<th>Horizontal</th>
</tr>
</thead>
<tbody><tr>
<td>Code changes</td>
<td>None</td>
<td>Replicas: some; sharding: a lot</td>
</tr>
<tr>
<td>Joins and transactions</td>
<td>Work as before</td>
<td>Hard or impossible across shards</td>
</tr>
<tr>
<td>Ceiling</td>
<td>The biggest machine you can get</td>
<td>Almost none</td>
</tr>
<tr>
<td>Cost as you grow</td>
<td>Rises faster than the power you gain</td>
<td>Roughly linear, plus the cost of complexity</td>
</tr>
<tr>
<td>A machine fails</td>
<td>Fail over to a standby</td>
<td>Only part of the data or load is affected</td>
</tr>
<tr>
<td>Write capacity</td>
<td>Grows with the machine</td>
<td>Grows with the number of shards</td>
</tr>
<tr>
<td>Operations</td>
<td>One database to back up and upgrade</td>
<td>Many: rebalancing, cross-shard queries, IDs</td>
</tr>
<tr>
<td>Time to do it</td>
<td>Minutes to hours</td>
<td>Replicas: days; sharding: weeks to months</td>
</tr>
</tbody></table>
</div>
<h2 id="why-vertical-goes-further-than-you-think">Why Vertical Goes Further Than You Think</h2>
<p>Modern machines are huge. Common managed database instances go up to around 100 to 200 virtual CPUs and one to a few terabytes of memory, with fast NVMe storage. A well-indexed PostgreSQL or MySQL database on such a machine handles tens of thousands of transactions per second, and keeps a working set of hundreds of gigabytes entirely in memory.</p>
<p>Most applications never get close. And scaling up keeps everything that makes a relational database pleasant: joins, transactions, foreign keys, and any query you didn&#39;t plan for.</p>
<p>What vertical scaling doesn&#39;t fix:</p>
<ul>
<li><strong>The ceiling:</strong> at some point there&#39;s no bigger machine.</li>
<li><strong>Cost:</strong> the largest instances cost far more per unit of power than mid-size ones.</li>
<li><strong>Failover time:</strong> one big primary still needs a standby replica, and failing over takes seconds to minutes.</li>
<li><strong>Maintenance:</strong> a bigger database takes longer to back up, restore and upgrade.</li>
</ul>
<h2 id="why-horizontal-is-harder-than-it-looks">Why Horizontal Is Harder Than It Looks</h2>
<p>Read replicas are a moderate step. Sharding is a big one: it turns one database into a distributed system. Suddenly you need to answer:</p>
<ul>
<li><strong>Which shard holds this row?</strong> Every query needs the shard key, or it must ask every shard.</li>
<li><strong>How do I join or report across shards?</strong> In the application, or in a separate analytics store.</li>
<li><strong>What about a transaction touching two shards?</strong> Avoid it by design, or use patterns like the outbox and sagas.</li>
<li><strong>How do I add a shard?</strong> Move data while the app keeps running.</li>
<li><strong>How do I generate unique IDs?</strong> Not with one auto-increment counter.</li>
</ul>
<p>Each answer is code to write, test and run forever. That&#39;s the real cost of horizontal scaling.</p>
<h2 id="the-order-that-works">The Order That Works</h2>
<p>Before any of the big steps, make sure the database isn&#39;t just doing too much work.</p>
<h3 id="1-make-it-do-less">1. Make It Do Less</h3>
<ul>
<li><strong>Find the slow queries</strong> (<code>pg_stat_statements</code> in PostgreSQL, the slow query log in MySQL) and fix the top few. Usually a handful cause most of the load.</li>
<li><strong>Add the right indexes.</strong> A missing index can make a query thousands of times slower; see <a href="/blog/essentials/database-indexes-explained/">Database Indexes Explained</a>.</li>
<li><strong>Fix N+1 queries</strong> in the ORM: one page making 200 queries is common and easy to fix.</li>
<li><strong>Pool connections</strong> with PgBouncer or the app&#39;s pool, so thousands of app threads don&#39;t open thousands of connections.</li>
</ul>
<p>This step is cheap and often buys years.</p>
<h3 id="2-cache-hot-reads">2. Cache Hot Reads</h3>
<p>Put Redis or an in-memory cache in front of data read often and changed rarely: product pages, settings, sessions. A cache that answers 90% of reads takes 90% of that load off the database.</p>
<h3 id="3-scale-up">3. Scale Up</h3>
<p>Move to a bigger instance. It&#39;s often a few clicks on a managed database and a short failover. Watch CPU, memory (does the working set fit in RAM?) and disk I/O to know which resource you&#39;re short of.</p>
<h3 id="4-add-read-replicas">4. Add Read Replicas</h3>
<p>When reads dominate, which is true for most apps, send them to replicas and keep writes on the primary. Plan for <strong>replication lag</strong>: a user who just saved something should read it back from the primary.</p>
<h3 id="5-split-by-function">5. Split by Function</h3>
<p>Before sharding one table, move <strong>unrelated data</strong> to separate databases: analytics events, logs, search, sessions. Each gets the store that suits it, and the main database shrinks.</p>
<h3 id="6-shard-or-use-a-distributed-database">6. Shard, or Use a Distributed Database</h3>
<p>When <strong>writes</strong> or <strong>data size</strong> truly outgrow the biggest sensible machine, scale out writes:</p>
<ul>
<li><strong>Shard yourself</strong> by a key that keeps related data together, often the customer or tenant ID.</li>
<li><strong>Use a sharding layer</strong> on a database you know: Citus for PostgreSQL, Vitess for MySQL.</li>
<li><strong>Use a distributed SQL database</strong>: CockroachDB, YugabyteDB, Google Spanner. They shard and replicate automatically and keep SQL and transactions, at the cost of higher latency per write and new operational knowledge.</li>
<li><strong>Use a NoSQL store</strong> built for scale-out, like Cassandra or DynamoDB, when the access patterns are simple and known in advance. See <a href="/blog/essentials/sql-vs-nosql/">SQL vs NoSQL</a>.</li>
</ul>
<h2 id="signs-you-really-need-to-scale-out">Signs You Really Need to Scale Out</h2>
<ul>
<li>The primary&#39;s CPU or disk stays near its limit on the <strong>biggest instance</strong> you&#39;re willing to pay for, after tuning.</li>
<li><strong>Write</strong> volume, not reads, is the bottleneck: replicas don&#39;t help writes.</li>
<li>The data is so large that backups, restores or schema changes take too long to be safe.</li>
<li>You need data close to users in several regions, or legal rules require keeping some data in a given country.</li>
<li>One customer or tenant is large enough to hurt everyone else&#39;s performance.</li>
</ul>
<p>If none of these apply, scaling out is probably premature.</p>
<h2 id="a-quick-example">A Quick Example</h2>
<p>A SaaS app on PostgreSQL slows down at 2,000 requests per second.</p>
<ol>
<li><code>pg_stat_statements</code> shows one dashboard query is 40% of the load; an index brings it from 300 ms to 3 ms.</li>
<li>Settings and plan limits move to Redis.</li>
<li>The instance goes from 8 to 32 vCPUs.</li>
<li>Two read replicas take the reports and search pages.</li>
</ol>
<p>The database now runs at 30% CPU, with room to grow several times over, and the code barely changed. Sharding by tenant becomes worth planning only when the biggest tenants start to dominate the writes.</p>
<h2 id="what-to-say-in-an-interview">What to Say in an Interview</h2>
<p>Show you know the order and the trade-off:</p>
<blockquote>
<p>&quot;I&#39;d start with a single primary, scaled vertically, with a standby for failover. Reads go to replicas and hot data to a cache. If writes outgrow the largest instance, I&#39;d shard by tenant ID, so each tenant&#39;s data and transactions stay on one shard.&quot;</p>
</blockquote>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>For databases, scale vertically first: no code changes, and joins and transactions keep working.</li>
<li>Before scaling at all, tune queries, add indexes, fix N+1 queries and pool connections.</li>
<li>Cache hot reads, then add read replicas; they scale reads, not writes.</li>
<li>Split unrelated data into separate stores before sharding a single database.</li>
<li>Shard, or move to a distributed database, only when writes or data size truly outgrow one machine.</li>
</ol>
`})})}));