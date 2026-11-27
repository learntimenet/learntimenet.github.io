import{C as e,S as t,t as n,x as r}from"./LoaderHider-5mlYNUIu.js";import{t as i}from"./BlogArticlePage-BQUfwQq6.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Should You Scale PostgreSQL Vertically or Horizontally?`,description:`Your PostgreSQL database is slowing down. Find what it's short of, scale up with the settings that matter, add PgBouncer and read replicas, partition big tables, and know when Citus or sharding is worth it, with the SQL and config for each step.`,date:`2026-11-27`,urlPath:`/blog/essentials/scale-postgresql-vertically-or-horizontally/`,html:`<p>Your app runs on PostgreSQL and it&#39;s getting slow: pages time out at peak, CPU sits at 90%, or you hit &quot;too many clients&quot;. Should you move to a bigger server, or spread the database over several?</p>
<p>For PostgreSQL the answer is clear: <strong>scale up first, pool connections, add read replicas for reads, and shard only when writes or data size outgrow one primary.</strong> PostgreSQL has a single writer by design, so most of the work is getting the most out of that one machine. The <a href="/blog/essentials/scale-database-vertically-or-horizontally/">general guide on database scaling</a> explains the trade-offs for any database; this one shows how each step looks in PostgreSQL.</p>
<h2 id="how-postgresql-uses-a-machine">How PostgreSQL Uses a Machine</h2>
<p>Three facts shape every scaling decision:</p>
<ul>
<li><strong>One process per connection.</strong> Each client connection is a separate operating system process, with its own memory. Thousands of connections cost a lot, even idle ones.</li>
<li><strong>Two caches.</strong> PostgreSQL keeps pages in its own <code>shared_buffers</code>, and relies on the operating system&#39;s file cache for the rest. RAM is speed: a working set that fits in memory avoids disk reads.</li>
<li><strong>One primary for writes.</strong> Every write goes to the primary and its write-ahead log (WAL). Replicas copy the WAL; they can serve reads but never writes.</li>
</ul>
<h2 id="step-1-find-what-it-s-short-of">Step 1: Find What It&#39;s Short Of</h2>
<p>Before buying anything, find the bottleneck. Turn on <code>pg_stat_statements</code>, which records time spent per query:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- postgresql.conf: shared_preload_libraries = 'pg_stat_statements' (needs a restart)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> EXTENSION </span><span style="color:#CF222E;--shiki-dark:#FF7B72">IF</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> EXISTS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> pg_stat_statements;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> left</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(query, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">60</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> query,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       calls,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       round</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(total_exec_time) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> total_ms,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       round</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(mean_exec_time::</span><span style="color:#CF222E;--shiki-dark:#FF7B72">numeric</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> avg_ms</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> pg_stat_statements</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> total_exec_time </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LIMIT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 10</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Usually a handful of queries use most of the time, and an index or a rewrite fixes them. Then check memory and connections:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- Share of table reads served from shared_buffers: aim for 99% on OLTP</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> round</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">100</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> *</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> sum</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(heap_blks_hit) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">/</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> nullif</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">sum</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(heap_blks_hit </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> heap_blks_read), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">       AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cache_hit_pct</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> pg_statio_user_tables;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- What the connections are doing</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> state</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">count</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> pg_stat_activity </span><span style="color:#CF222E;--shiki-dark:#FF7B72">GROUP BY</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> state</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>What you see</th>
<th>What it means</th>
<th>Next step</th>
</tr>
</thead>
<tbody><tr>
<td>A few queries dominate <code>total_exec_time</code></td>
<td>Missing index or bad query</td>
<td>Fix them first</td>
</tr>
<tr>
<td>Cache hit ratio well below 99%</td>
<td>Working set doesn&#39;t fit in RAM</td>
<td>More memory (scale up)</td>
</tr>
<tr>
<td>CPU near 100% after query fixes</td>
<td>Not enough cores</td>
<td>Scale up</td>
</tr>
<tr>
<td>Many <code>idle</code> connections, &quot;too many clients&quot;</td>
<td>Connection overhead</td>
<td>PgBouncer</td>
</tr>
<tr>
<td>Reads far outnumber writes, primary still busy</td>
<td>Read load</td>
<td>Read replicas</td>
</tr>
<tr>
<td>WAL and writes saturate the biggest machine</td>
<td>Write load</td>
<td>Partition, then shard</td>
</tr>
</tbody></table>
</div>
<h2 id="step-2-scale-up-and-retune">Step 2: Scale Up, and Retune</h2>
<p>A bigger instance is often a few clicks and a failover on a managed service (Amazon RDS, Cloud SQL, Azure Database for PostgreSQL). But PostgreSQL won&#39;t use the new RAM well with old settings. The ones to revisit:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Setting</th>
<th>What it controls</th>
<th>Common starting point</th>
</tr>
</thead>
<tbody><tr>
<td><code>shared_buffers</code></td>
<td>PostgreSQL&#39;s own page cache</td>
<td>About 25% of RAM (needs a restart)</td>
</tr>
<tr>
<td><code>effective_cache_size</code></td>
<td>How much cache the planner may assume</td>
<td>50 to 75% of RAM</td>
</tr>
<tr>
<td><code>work_mem</code></td>
<td>Memory per sort or hash, per operation</td>
<td>Raise carefully: it multiplies per query</td>
</tr>
<tr>
<td><code>maintenance_work_mem</code></td>
<td>Memory for <code>VACUUM</code> and index builds</td>
<td>1 to 2 GB on large machines</td>
</tr>
<tr>
<td><code>max_parallel_workers</code></td>
<td>Cores for parallel queries</td>
<td>Up to the number of cores</td>
</tr>
<tr>
<td><code>max_wal_size</code></td>
<td>WAL between checkpoints</td>
<td>Larger means fewer, smoother checkpoints</td>
</tr>
</tbody></table>
</div>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ALTER</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> SYSTEM</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> SET</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> effective_cache_size </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> '48GB'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ALTER</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> SYSTEM</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> SET</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> maintenance_work_mem </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> '2GB'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> pg_reload_conf();  </span><span style="color:#6E7781;--shiki-dark:#8B949E">-- shared_buffers still needs a restart</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Managed services often set these for you based on instance size: check before changing them.</p>
<h2 id="step-3-pool-connections-with-pgbouncer">Step 3: Pool Connections With PgBouncer</h2>
<p>Raising <code>max_connections</code> to thousands is the classic mistake: every connection is a process, and they compete for CPU and memory. Put <strong>PgBouncer</strong> between the app and the database instead. Thousands of app connections share a few dozen real ones.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>[databases]</span></span>
<span class="line"><span>app = host=10.0.0.5 port=5432 dbname=app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[pgbouncer]</span></span>
<span class="line"><span>pool_mode = transaction</span></span>
<span class="line"><span>default_pool_size = 40</span></span>
<span class="line"><span>max_client_conn = 5000</span></span>
<span class="line"><span>max_prepared_statements = 200</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>In <strong>transaction mode</strong>, a client holds a server connection only during a transaction. That&#39;s the mode that scales, with limits: session state like <code>SET</code>, advisory locks or <code>LISTEN</code> doesn&#39;t survive between transactions. Protocol-level prepared statements work in transaction mode with <code>max_prepared_statements</code>, from PgBouncer 1.21.</p>
<h2 id="step-4-add-read-replicas">Step 4: Add Read Replicas</h2>
<p>When reads dominate, add <strong>streaming replicas</strong>: copies that apply the primary&#39;s WAL and accept read-only queries. Send reports, search and other reads there, and keep writes on the primary.</p>
<p>Replicas are a little behind. Measure it on the primary:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> application_name, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">state</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, replay_lag</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> pg_stat_replication;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Plan for that lag in the app:</p>
<ul>
<li><strong>Read your own writes</strong> from the primary: after a user saves something, read it back from the primary for a few seconds.</li>
<li><strong>Long queries on a replica</strong> can be cancelled when they conflict with changes from the primary. <code>hot_standby_feedback = on</code> avoids that, at the cost of more table bloat on the primary.</li>
<li><strong>Replicas don&#39;t add write capacity</strong>: every replica replays every write.</li>
</ul>
<h2 id="step-5-partition-big-tables">Step 5: Partition Big Tables</h2>
<p><strong>Partitioning</strong> splits one big table into smaller ones, on the same server. It doesn&#39;t add capacity, but it makes huge tables manageable:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> events</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  id         </span><span style="color:#CF222E;--shiki-dark:#FF7B72">bigint</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> GENERATED</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ALWAYS</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AS</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> IDENTITY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">timestamptz</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  payload    jsonb</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> RANGE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (created_at);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> events_2026_11</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> PARTITION</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> OF events</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FOR</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> VALUES</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'2026-11-01'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TO</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'2026-12-01'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> events_2026_12</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> PARTITION</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> OF events</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FOR</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> VALUES</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'2026-12-01'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TO</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'2027-01-01'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- Queries on a date range only read the matching partitions</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">EXPLAIN </span><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> count</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> events </span><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">>=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> '2026-12-05'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- Removing a month of old data is instant, with no huge DELETE</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">DROP</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> events_2026_11;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It helps most with time-based data: logs, events, metrics. Indexes stay small, <code>VACUUM</code> works on one partition at a time, and old data goes away with a <code>DROP</code>.</p>
<h2 id="step-6-shard-when-one-primary-isn-t-enough">Step 6: Shard, When One Primary Isn&#39;t Enough</h2>
<p>When writes or data size outgrow the biggest primary you&#39;re willing to run, you need several writers:</p>
<ul>
<li><strong>Citus</strong>, a PostgreSQL extension, spreads tables over worker nodes by a distribution column, often the tenant ID, and keeps SQL working: <code>SELECT create_distributed_table(&#39;orders&#39;, &#39;tenant_id&#39;);</code></li>
<li><strong>Application-level sharding</strong>: one PostgreSQL database per group of tenants, with the app choosing the right one. Simple to start, more work for cross-shard reports.</li>
<li><strong>Distributed databases that speak PostgreSQL&#39;s protocol</strong>, like YugabyteDB or CockroachDB: scale-out built in, but not every PostgreSQL feature or extension behaves the same.</li>
</ul>
<p>Choose a shard key that keeps related data and transactions together, like the tenant: a transaction that spans shards is the expensive part.</p>
<h2 id="a-quick-example">A Quick Example</h2>
<p>A B2B app on PostgreSQL slows down every Monday morning.</p>
<ol>
<li><code>pg_stat_statements</code> shows one report query takes 35% of the time; a composite index brings it from 2 s to 20 ms.</li>
<li><code>pg_stat_activity</code> shows 1,800 connections, most <code>idle</code>: PgBouncer in transaction mode brings it to 60 real ones.</li>
<li>The cache hit ratio is 91%: moving from 64 to 256 GB of RAM, and retuning <code>shared_buffers</code> and <code>effective_cache_size</code>, takes it to 99.6%.</li>
<li>Two read replicas take the dashboards.</li>
</ol>
<p>The primary now runs at 35% CPU on Mondays. Sharding by tenant can wait until the biggest tenants dominate the writes.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Find the bottleneck first: <code>pg_stat_statements</code>, the cache hit ratio and <code>pg_stat_activity</code>.</li>
<li>Scale up for CPU and memory, and retune <code>shared_buffers</code>, <code>effective_cache_size</code> and <code>work_mem</code>.</li>
<li>Never fix connection limits with a huge <code>max_connections</code>: use PgBouncer in transaction mode.</li>
<li>Add read replicas for reads, and handle replication lag in the app.</li>
<li>Partition big time-based tables; shard with Citus or per tenant only when one primary can&#39;t keep up with writes.</li>
</ol>
`,headings:[{id:`how-postgresql-uses-a-machine`,text:`How PostgreSQL Uses a Machine`},{id:`step-1-find-what-it-s-short-of`,text:`Step 1: Find What It's Short Of`},{id:`step-2-scale-up-and-retune`,text:`Step 2: Scale Up, and Retune`},{id:`step-3-pool-connections-with-pgbouncer`,text:`Step 3: Pool Connections With PgBouncer`},{id:`step-4-add-read-replicas`,text:`Step 4: Add Read Replicas`},{id:`step-5-partition-big-tables`,text:`Step 5: Partition Big Tables`},{id:`step-6-shard-when-one-primary-isn-t-enough`,text:`Step 6: Shard, When One Primary Isn't Enough`},{id:`a-quick-example`,text:`A Quick Example`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`How to Publish Your First Expo App on the Google Play Store`,description:`A step-by-step guide to ship an Expo React Native app on Google Play. Set up app.json, build an Android App Bundle with EAS Build, create the Play Console listing, pass the 12-tester closed test, release to production, and ship updates.`,date:`2026-11-26`,urlPath:`/blog/essentials/publish-expo-app-google-play/`},{title:`LEAD and LAG in SQL, Explained with Examples`,description:`LEAD() OVER reads a value from the next row, and LAG() from the previous one, without a self join. Learn the syntax, PARTITION BY and ORDER BY, the offset and default arguments, and how to use them for time between orders, month-over-month changes and finding the last row.`,date:`2026-11-25`,urlPath:`/blog/essentials/lead-and-lag-in-sql/`},{title:`Should You Scale Your Database Vertically or Horizontally?`,description:`Your database is the bottleneck. Should you buy a bigger machine or spread it over many? Compare vertical and horizontal database scaling on limits, cost, complexity and risk, and follow a step-by-step order that avoids sharding until you really need it.`,date:`2026-11-25`,urlPath:`/blog/essentials/scale-database-vertically-or-horizontally/`},{title:`Classes and Objects in Java`,description:`Model your own data in Java. Classes and objects, fields and methods, constructors and this, private fields with methods that protect the rules, static members, toString, and how object references work.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-classes-and-objects/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`},{title:`SQL Quiz`,description:`Test your SQL: filtering with WHERE and HAVING, NULL, COUNT, joins, UNION, keys, indexes, and the order a query really runs in.`,urlPath:`/quiz/sql/`}]}})})}));