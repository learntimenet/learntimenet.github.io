import{C as e,S as t,t as n,x as r}from"./LoaderHider-8EMcAm3O.js";import{t as i}from"./BlogArticlePage-B5eVrMDj.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Should You Scale Your Database Vertically or Horizontally?`,description:`Your database is the bottleneck. Should you buy a bigger machine or spread it over many? Compare vertical and horizontal database scaling on limits, cost, complexity and risk, and follow a step-by-step order that avoids sharding until you really need it.`,date:`2026-11-25`,urlPath:`/blog/essentials/scale-database-vertically-or-horizontally/`,html:`<p>Your app servers scale easily: add another one behind the load balancer. The database is different. It holds the state, every server talks to it, and it&#39;s usually the first thing to slow down. When it does, you face a real choice: a <strong>bigger database server</strong> (vertical) or <strong>more database servers</strong> (horizontal).</p>
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
`,headings:[{id:`the-two-options`,text:`The Two Options`},{id:`side-by-side`,text:`Side by Side`},{id:`why-vertical-goes-further-than-you-think`,text:`Why Vertical Goes Further Than You Think`},{id:`why-horizontal-is-harder-than-it-looks`,text:`Why Horizontal Is Harder Than It Looks`},{id:`the-order-that-works`,text:`The Order That Works`},{id:`signs-you-really-need-to-scale-out`,text:`Signs You Really Need to Scale Out`},{id:`a-quick-example`,text:`A Quick Example`},{id:`what-to-say-in-an-interview`,text:`What to Say in an Interview`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Classes and Objects in Java`,description:`Model your own data in Java. Classes and objects, fields and methods, constructors and this, private fields with methods that protect the rules, static members, toString, and how object references work.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-classes-and-objects/`},{title:`Control Flow in Java: if, switch and Loops`,description:`Make decisions and repeat work in Java. if and else, the ternary operator, the modern switch expression with patterns and guards, for, for-each, while and do-while loops, and break and continue.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-control-flow-if-switch-loops/`},{title:`CSS Basics: Selectors, the Box Model and Units`,description:`How CSS chooses which styles apply and how big things are. Selectors, the cascade and specificity, the box model with padding, border and margin, box-sizing, display, and when to use px, rem, % and viewport units.`,date:`2026-11-24`,urlPath:`/blog/essentials/css-basics/`},{title:`Database Indexes Explained`,description:`Why a query on a million rows takes seconds without an index and milliseconds with one. How B-tree indexes work, composite indexes and column order, covering indexes, and what indexes cost on writes.`,date:`2026-11-24`,urlPath:`/blog/essentials/database-indexes-explained/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`},{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`}]}})})}));