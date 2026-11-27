import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./BlogArticlePage-uRZXyIte.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Uber's Shard Manager: Balance the Load, Not the Shard Count`,description:`Giving every server the same number of shards doesn't give them the same load. How consistent hashing falls short, what a shard manager does instead, and how Uber's open-source Shard Manager cut its hottest hosts' CPU and its fleet size.`,date:`2026-11-27`,urlPath:`/blog/system-design/uber-shard-manager/`,html:`<p>Many services split their work into <strong>shards</strong>: each server owns some shards, like a set of users, queues or workflows, and handles everything for them. The classic way to assign shards is to spread them evenly. The catch: an even number of shards is not an even amount of work. Uber&#39;s engineering blog explained in November 2026 how this hurt them, and the open-source Shard Manager they built to fix it.</p>
<h2 id="why-even-shard-counts-aren-t-enough">Why Even Shard Counts Aren&#39;t Enough</h2>
<p>Picture 100 shards on 10 servers, 10 shards each. If one shard holds a few huge customers, the server that owns it runs hot while the others sit idle. Adding servers doesn&#39;t help much: the hot shard is still on one machine.</p>
<p><strong>Consistent hashing</strong>, which puts servers and keys on a hash ring, is a popular way to spread shards with little movement when servers come and go. But it places shards by their hash, not by their load. It&#39;s great for balance on average and blind to hot spots.</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Assignment method</th>
<th>Moves few shards on change</th>
<th>Knows about load</th>
<th>Hot shard handling</th>
</tr>
</thead>
<tbody><tr>
<td>Modulo (<code>hash % N</code>)</td>
<td>No: almost all move</td>
<td>No</td>
<td>None</td>
</tr>
<tr>
<td>Consistent hashing ring</td>
<td>Yes</td>
<td>No</td>
<td>None</td>
</tr>
<tr>
<td>Shard manager</td>
<td>Yes, within a budget</td>
<td>Yes</td>
<td>Moves it, or its neighbors</td>
</tr>
</tbody></table>
</div>
<h2 id="what-uber-saw">What Uber Saw</h2>
<p>According to the post, Uber&#39;s Cadence workflow platform (its Matching and History services) used Ringpop, a hash-ring library. Some hosts overloaded while autoscaled fleets had idle machines, because <strong>the ring ignored how busy each shard was</strong>.</p>
<h2 id="what-a-shard-manager-does">What a Shard Manager Does</h2>
<p>A shard manager is a separate service that <strong>decides who owns which shard</strong>, using live load data:</p>
<ol>
<li>Each application server <strong>reports the load</strong> of the shards it owns: requests per second, CPU, queue depth.</li>
<li>The manager keeps the <strong>ownership map</strong> in a reliable store, so every server agrees on who owns what.</li>
<li>When a server is too hot, the manager <strong>moves shards</strong> to cooler servers, choosing moves that reduce the peak the most.</li>
<li>It limits how many shards move at once, a <strong>movement budget</strong>, because every move costs warm caches and in-flight work.</li>
</ol>
<p>Requests don&#39;t go through the manager: clients look up the owner and talk to it directly. The manager only changes the map, so it isn&#39;t a bottleneck or a single point of failure for traffic.</p>
<h2 id="uber-s-design">Uber&#39;s Design</h2>
<p>Uber describes its Shard Manager as open source, with:</p>
<ul>
<li><strong>Explicit ownership</strong>: the owner of each shard is recorded, not computed from a hash.</li>
<li><strong>Load-aware greedy rebalancing</strong>: it repeatedly moves load from the hottest hosts to the coolest.</li>
<li><strong>Movement budgets</strong> to keep rebalancing gentle.</li>
<li><strong>State in etcd</strong>, a consistent key-value store often used for this kind of coordination.</li>
</ul>
<p>Uber reports that its <strong>hottest hosts&#39; CPU dropped 38%</strong>, which let the same traffic run on <strong>about 40% fewer hosts</strong>. Cadence&#39;s Matching service is the first user.</p>
<h2 id="a-greedy-rebalance-in-a-few-lines">A Greedy Rebalance in a Few Lines</h2>
<p>The core idea is simple enough to sketch:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// hosts: [{ id, shards: [{ id, load }] }]</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> rebalance</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">hosts</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">budget</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  const</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> loadOf</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#953800;--shiki-dark:#FFA657">host</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> host.shards.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">reduce</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">((</span><span style="color:#953800;--shiki-dark:#FFA657">sum</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">s</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> sum </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> s.load, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> moves</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [];</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> budget; i</span><span style="color:#CF222E;--shiki-dark:#FF7B72">++</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    hosts.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">sort</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">((</span><span style="color:#953800;--shiki-dark:#FFA657">a</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">b</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> loadOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(b) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> loadOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(a));</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> hottest</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> hosts[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">];</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> coolest</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> hosts[hosts.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">length</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> -</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">];</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> gap</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> loadOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(hottest) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> loadOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(coolest);</span></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">    // Move the biggest shard that still makes the gap smaller.</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> shard</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> hottest.shards</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">filter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">((</span><span style="color:#953800;--shiki-dark:#FFA657">s</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> s.load </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> gap)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">sort</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">((</span><span style="color:#953800;--shiki-dark:#FFA657">a</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">b</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> b.load </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> a.load)[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">];</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">!</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">shard) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">break</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    hottest.shards.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">splice</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(hottest.shards.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">indexOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(shard), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    coolest.shards.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">push</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(shard);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    moves.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">push</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({ shard: shard.id, from: hottest.id, to: coolest.id });</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> moves;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>A real system adds what this sketch skips: smoothing noisy load numbers, waiting for a move to finish before the next, draining hosts before deploys, and never moving a shard twice in a row.</p>
<h2 id="what-to-take-away">What to Take Away</h2>
<ol>
<li>Even shard counts don&#39;t mean even load: real traffic has hot keys and big customers.</li>
<li>Consistent hashing minimizes movement but ignores load.</li>
<li>A shard manager owns the shard map, reads live load, and moves shards from hot hosts to cool ones.</li>
<li>Movement budgets keep rebalancing from causing the problems it&#39;s meant to fix.</li>
<li>Keep the manager out of the request path: it changes the map, clients talk to owners directly.</li>
</ol>
<h2 id="source">Source</h2>
<p>Based on <a href="https://www.uber.com/us/en/blog/introducing-shard-manager/">Introducing Shard Manager</a>, Uber Engineering, November 2026. The explanations and code here are our own.</p>
`,headings:[{id:`why-even-shard-counts-aren-t-enough`,text:`Why Even Shard Counts Aren't Enough`},{id:`what-uber-saw`,text:`What Uber Saw`},{id:`what-a-shard-manager-does`,text:`What a Shard Manager Does`},{id:`uber-s-design`,text:`Uber's Design`},{id:`a-greedy-rebalance-in-a-few-lines`,text:`A Greedy Rebalance in a Few Lines`},{id:`what-to-take-away`,text:`What to Take Away`},{id:`source`,text:`Source`}],parents:[],related:[{title:`Design a Notification System`,description:`Send push, email and SMS notifications for every service in a company, reliably and without spamming users. Queues per channel, retries without duplicates, user preferences, bursts of millions, and priorities.`,date:`2026-11-21`,urlPath:`/blog/system-design/notification-system/`},{title:`Design a URL Shortener`,description:`Turn long links into short codes and redirect millions of clicks a day, fast. Generate unique codes without collisions, cache the hot links, count clicks without slowing redirects, and choose between 301 and 302.`,date:`2026-11-21`,urlPath:`/blog/system-design/url-shortener/`},{title:`Design a News Feed`,description:`Show each user the latest posts from the people they follow, in milliseconds, for 200 million users. Fan-out on write vs fan-out on read, the celebrity problem, feed caches in Redis, ranking and pagination.`,date:`2026-11-20`,urlPath:`/blog/system-design/news-feed/`},{title:`Add a Cache Without Serving Stale Data`,description:`A cache makes a slow endpoint fast, until it serves an old price or melts the database when it empties. Learn cache-aside, why you delete instead of update, and how to stop stampedes, penetration and avalanches.`,date:`2026-11-16`,urlPath:`/blog/system-design/caching-without-stale-data/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));