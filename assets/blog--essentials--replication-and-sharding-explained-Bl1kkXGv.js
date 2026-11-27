import{C as e,S as t,t as n,x as r}from"./LoaderHider-5mlYNUIu.js";import{t as i}from"./BlogArticlePage-BQUfwQq6.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Replication and Sharding Explained`,description:`Copies for safety and reads, partitions for size. How database replication works, what replication lag breaks, how to choose a shard key, and the problems sharding brings.`,date:`2026-11-24`,urlPath:`/blog/essentials/replication-and-sharding-explained/`,html:`<p>One database server eventually isn&#39;t enough: too many reads, too much data, or too much risk if it dies. There are two answers, and they solve different problems. <strong>Replication</strong> copies the same data to several machines. <strong>Sharding</strong> splits the data so each machine holds a part.</p>
<h2 id="replication-the-same-data-several-times">Replication: The Same Data, Several Times</h2>
<p>The most common setup has one <strong>primary</strong> (also called leader) that takes all writes, and several <strong>replicas</strong> (followers) that receive a copy of every change.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>          writes</span></span>
<span class="line"><span>app ───────────────► primary</span></span>
<span class="line"><span>  │                   │  │</span></span>
<span class="line"><span>  │ reads             ▼  ▼</span></span>
<span class="line"><span>  └──────────► replica  replica</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>What it gives you:</p>
<ul>
<li><strong>More read capacity:</strong> spread reads over the replicas.</li>
<li><strong>Safety:</strong> if the primary dies, a replica is promoted and takes over.</li>
<li><strong>Closer data:</strong> a replica in another region serves local users faster.</li>
</ul>
<p>What it doesn&#39;t give you: more <strong>write</strong> capacity. Every write still goes through one primary.</p>
<h3 id="synchronous-or-asynchronous">Synchronous or Asynchronous</h3>
<ul>
<li><strong>Synchronous:</strong> the primary waits until a replica confirms before answering &quot;saved&quot;. No data is lost if the primary dies, but every write is slower, and a stuck replica blocks writes.</li>
<li><strong>Asynchronous:</strong> the primary answers at once and sends the change afterward. Fast, but the last changes can be lost in a crash, and replicas are slightly behind.</li>
</ul>
<p>Most setups are asynchronous, sometimes with one synchronous replica as a safe backup.</p>
<h3 id="replication-lag">Replication Lag</h3>
<p>With asynchronous replicas, a replica can be a few milliseconds, or in bad moments seconds, behind. That causes classic bugs:</p>
<ul>
<li>A user edits their profile, the page reloads from a replica, and the old name shows. Fix: <strong>read your own writes</strong> from the primary for a short time after a change.</li>
<li>Two reads hit two replicas at different points, and data seems to go back in time. Fix: send a user&#39;s reads to the same replica.</li>
</ul>
<h2 id="sharding-splitting-the-data">Sharding: Splitting the Data</h2>
<p>When the data or the writes don&#39;t fit on one primary, you <strong>shard</strong> (or partition): each shard is a separate database holding some of the rows.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>user_id 1–1M   ─► shard A</span></span>
<span class="line"><span>user_id 1M–2M  ─► shard B</span></span>
<span class="line"><span>user_id 2M–3M  ─► shard C</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Each shard takes only its part of the writes and storage, so capacity grows with the number of shards. Each shard is usually replicated too.</p>
<h3 id="choosing-the-shard-key">Choosing the Shard Key</h3>
<p>The <strong>shard key</strong> decides where each row goes. It&#39;s the most important decision, and hard to change later.</p>
<ul>
<li><strong>Range-based</strong> (user IDs 1–1M on shard A…): easy range queries, but new users all land on the last shard, a <strong>hot shard</strong>.</li>
<li><strong>Hash-based</strong> (hash of the user ID, modulo the number of shards): spreads load evenly, but range queries must ask every shard.</li>
<li><strong>Consistent hashing</strong> places shards on a ring, so adding a shard moves only a small part of the data instead of almost all of it.</li>
</ul>
<p>A good shard key:</p>
<ul>
<li>spreads writes evenly, with no single huge customer or celebrity on one shard,</li>
<li>keeps data read together on the same shard, like all of a user&#39;s orders under the user ID.</li>
</ul>
<h3 id="what-sharding-makes-hard">What Sharding Makes Hard</h3>
<ul>
<li><strong>Queries across shards:</strong> &quot;top 10 products of all users&quot; must ask every shard and merge the results.</li>
<li><strong>Joins across shards:</strong> usually done in the application, or avoided by keeping related data together.</li>
<li><strong>Transactions across shards:</strong> need distributed transactions, or a design that avoids them, like the outbox pattern.</li>
<li><strong>Rebalancing:</strong> moving data when adding shards, without downtime.</li>
<li><strong>Unique IDs:</strong> auto-increment per shard collides, so use UUIDs or an ID generator.</li>
</ul>
<p>That&#39;s why sharding is the last step, after caching, query tuning, a bigger machine and read replicas.</p>
<h2 id="replication-vs-sharding">Replication vs Sharding</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Question</th>
<th>Replication</th>
<th>Sharding</th>
</tr>
</thead>
<tbody><tr>
<td>Each machine holds</td>
<td>All the data</td>
<td>Part of the data</td>
</tr>
<tr>
<td>More read capacity</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>More write capacity</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Survives a machine failure</td>
<td>Yes</td>
<td>Only with replication</td>
</tr>
<tr>
<td>Complexity</td>
<td>Moderate</td>
<td>High</td>
</tr>
</tbody></table>
</div>
<p>Large systems use both: each shard is a small primary with its replicas.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Replication copies all data to replicas: more reads, safety, and nearby copies, but not more writes.</li>
<li>Asynchronous replicas lag; read your own writes from the primary after a change.</li>
<li>Sharding splits data across databases: more writes and storage, but harder queries, joins and transactions.</li>
<li>Choose a shard key that spreads load evenly and keeps data read together on one shard.</li>
<li>Shard last, after caching, tuning, scaling up and replicas.</li>
</ol>
`,headings:[{id:`replication-the-same-data-several-times`,text:`Replication: The Same Data, Several Times`},{id:`sharding-splitting-the-data`,text:`Sharding: Splitting the Data`},{id:`replication-vs-sharding`,text:`Replication vs Sharding`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,description:`Your app is getting slow under load. Should you buy a bigger server or add more servers? Learn vertical and horizontal scaling, why stateless servers make scaling easy, and where sessions and files should go instead.`,date:`2026-11-24`,urlPath:`/blog/essentials/vertical-vs-horizontal-scaling/`},{title:`Securing a Spring Boot API: Authentication Basics`,description:`Protect a Spring Boot REST API with Spring Security. Authentication vs authorization, a SecurityFilterChain with public and protected endpoints, roles, password hashing, HTTP Basic, stateless APIs and CSRF, JWT tokens, and testing it all.`,date:`2026-11-24`,urlPath:`/blog/essentials/securing-a-spring-boot-api/`},{title:`SQL vs NoSQL: How to Choose a Database`,description:`Relational, document, key-value, wide-column and graph databases, what each is good at, and a simple way to choose. Spoiler, PostgreSQL is the right default more often than you'd think.`,date:`2026-11-24`,urlPath:`/blog/essentials/sql-vs-nosql/`},{title:`State in React: useState and Re-renders`,description:`Why changing a variable doesn't update the screen, and how state does. useState, re-renders, the state snapshot and functional updates, updating objects and arrays without mutating them, derived values, and lifting state up.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-state-usestate/`}],relatedPages:[{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));