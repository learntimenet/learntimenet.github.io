import{C as e,S as t,t as n,x as r}from"./LoaderHider-DMsSyvFD.js";import{t as i}from"./LearningPathPage-UnsNYjAW.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`news-feed`,html:`<p>A classic design question about reads, writes and one very popular user:</p>
<blockquote>
<p>Design the home feed of a social app. Users follow other users and see their latest posts, newest first. <strong>200 million daily users</strong>, each opening the feed about <strong>10 times a day</strong>. Users post about <strong>50 million times a day</strong>. Most follow a few hundred accounts; a few accounts have <strong>50 million followers</strong>.</p>
</blockquote>
<h2 id="the-numbers-first">The Numbers First</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>What</th>
<th>Estimate</th>
</tr>
</thead>
<tbody><tr>
<td>Feed reads</td>
<td>200M × 10 = 2 billion a day ≈ <strong>23,000 per second</strong>, peaks ~70,000</td>
</tr>
<tr>
<td>New posts</td>
<td>50M a day ≈ <strong>600 per second</strong></td>
</tr>
<tr>
<td>Reads per write</td>
<td>About 40 to 1</td>
</tr>
<tr>
<td>Feed target</td>
<td>Under 200 ms at the 99th percentile</td>
</tr>
</tbody></table>
</div>
<p>Reads dominate. The design should make reading a feed cheap, even if writing a post costs more.</p>
<h2 id="the-naive-version">The Naive Version</h2>
<p>Store posts in one table, follows in another, and build the feed on every request:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> p.</span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> posts p</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> follows f </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> f</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">followee_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> p</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">author_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> f</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">follower_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> :me</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> p</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">created_at</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> DESC</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LIMIT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 20</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>For a user following 500 accounts, the database collects recent posts from 500 authors, merges and sorts them, 70,000 times a second. Posts are sharded by author, so this query touches many shards. It doesn&#39;t hold.</p>
<h2 id="fan-out-on-write">Fan-Out on Write</h2>
<p>Do the work when a post is created, not when the feed is read. Each user gets a precomputed <strong>feed list</strong>: the IDs of the latest posts for them, kept in Redis.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>User posts ──▶ Post service ──▶ posts DB</span></span>
<span class="line"><span>                    │</span></span>
<span class="line"><span>                    ▼</span></span>
<span class="line"><span>              Kafka "new-posts"</span></span>
<span class="line"><span>                    │</span></span>
<span class="line"><span>                    ▼</span></span>
<span class="line"><span>            Fan-out workers ──▶ for each follower:</span></span>
<span class="line"><span>                                LPUSH feed:&#x3C;follower> &#x3C;post_id></span></span>
<span class="line"><span>                                LTRIM feed:&#x3C;follower> 0 799</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Reading the feed is now one Redis call for 20 post IDs, then a batch lookup of those posts (themselves cached). That&#39;s fast and simple.</p>
<p>The cost moves to writes: a user with 300 followers causes 300 list pushes. At 600 posts a second and a few hundred followers each, that&#39;s a few hundred thousand Redis writes a second, spread over a cluster. Fine.</p>
<p>Keep only the latest ~800 IDs per user: few people scroll further, and memory stays bounded. 200M users × 800 IDs × 8 bytes ≈ 1.3 TB, across a Redis cluster. Only keep feeds for users active in the last 30 days; rebuild the rest on demand.</p>
<h2 id="the-celebrity-problem">The Celebrity Problem</h2>
<p>A singer with 50 million followers posts. Fan-out on write means 50 million list pushes for one post. Even at 1 million a second, the last followers see it nearly a minute later, and the workers fall behind on everyone else&#39;s posts.</p>
<h2 id="fan-out-on-read-for-celebrities-only">Fan-Out on Read, for Celebrities Only</h2>
<p>The fix is a <strong>hybrid</strong>:</p>
<ul>
<li><strong>Regular accounts</strong> (say, under 100,000 followers): fan out on write, as above.</li>
<li><strong>Celebrity accounts</strong>: don&#39;t fan out. Store their posts only in their own recent-posts list.</li>
</ul>
<p>When a user opens the feed:</p>
<ol>
<li>Read their precomputed feed from Redis.</li>
<li>Look up which celebrities they follow (usually a handful) and read each one&#39;s latest posts.</li>
<li>Merge by time, take the top 20.</li>
</ol>
<p>Step 2 is cheap: a few small reads of lists that are hot in cache, because millions of people read them.</p>
<h2 id="ranking">Ranking</h2>
<p>A purely chronological feed is the simple answer, and fine in an interview if you say so. Ranked feeds add a step after collecting candidates: score the few hundred candidate posts with signals like how often you interact with the author, post age, likes so far, and content type, then sort by score. The ranking model runs in a separate service with a strict time budget; if it&#39;s slow, fall back to chronological order.</p>
<h2 id="pagination">Pagination</h2>
<p>Don&#39;t use <code>OFFSET</code>: new posts arrive at the top while the user scrolls, so page 2 would repeat items from page 1. Use a <strong>cursor</strong>: the ID (or timestamp) of the last post shown.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>GET /feed?limit=20</span></span>
<span class="line"><span>GET /feed?limit=20&#x26;before=post_98123</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The server returns posts older than the cursor, and the next cursor.</p>
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
<td>Fan-out workers fall behind</td>
<td>Kafka keeps the posts; workers catch up</td>
<td>Posts appear late, none lost</td>
</tr>
<tr>
<td>A Redis node dies</td>
<td>Replica takes over; missing feeds rebuilt from the posts DB</td>
<td>A slower first load for some users</td>
</tr>
<tr>
<td>User deletes a post</td>
<td>Remove from posts DB; feeds still hold the ID</td>
<td>Hydration skips missing posts</td>
</tr>
<tr>
<td>Celebrity threshold crossed</td>
<td>Account switches to fan-out on read</td>
<td>Followers keep seeing posts through the merge</td>
</tr>
<tr>
<td>User follows someone new</td>
<td>Backfill that account&#39;s recent posts into the feed</td>
<td>New posts show up right away</td>
</tr>
<tr>
<td>Ranking service times out</td>
<td>Fall back to chronological order</td>
<td>Feed still loads</td>
</tr>
</tbody></table>
</div>
<h2 id="details-interviewers-ask-about">Details Interviewers Ask About</h2>
<ul>
<li><strong>Why store IDs, not full posts, in feeds?</strong> An edited post would need updating in millions of feeds. IDs stay valid; posts are fetched from a post cache.</li>
<li><strong>Inactive users?</strong> Skip their fan-out and drop their feed after 30 days. On return, build it once with the naive query.</li>
<li><strong>Unfollow?</strong> Filter at read time against the follow list, and stop future fan-out. Old IDs age out.</li>
<li><strong>Ordering across shards?</strong> Use time-sortable IDs (like Snowflake IDs) so sorting by ID sorts by time.</li>
<li><strong>Why Kafka between post and fan-out?</strong> It absorbs bursts, retries failed fan-outs, and lets other consumers (notifications, search indexing) read the same events.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Reads outnumber writes 40 to 1: precompute feeds.</li>
<li>Fan out on write into a capped Redis list of post IDs per user.</li>
<li>Don&#39;t fan out celebrities; merge their recent posts at read time.</li>
<li>Hydrate IDs from a post cache; skip deleted ones.</li>
<li>Paginate with a cursor, rank with a time budget and a chronological fallback.</li>
</ol>
`})})}));