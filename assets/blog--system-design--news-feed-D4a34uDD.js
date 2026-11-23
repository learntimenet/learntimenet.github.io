import{C as e,S as t,t as n,w as r}from"./LoaderHider-w0i5Hj1w.js";import{t as i}from"./BlogArticlePage-2Qm6RugK.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Design a News Feed`,description:`Show each user the latest posts from the people they follow, in milliseconds, for 200 million users. Fan-out on write vs fan-out on read, the celebrity problem, feed caches in Redis, ranking and pagination.`,date:`2026-11-20`,urlPath:`/blog/system-design/news-feed/`,html:`<p>A classic design question about reads, writes and one very popular user:</p>
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
`,headings:[{id:`the-numbers-first`,text:`The Numbers First`},{id:`the-naive-version`,text:`The Naive Version`},{id:`fan-out-on-write`,text:`Fan-Out on Write`},{id:`the-celebrity-problem`,text:`The Celebrity Problem`},{id:`fan-out-on-read-for-celebrities-only`,text:`Fan-Out on Read, for Celebrities Only`},{id:`ranking`,text:`Ranking`},{id:`pagination`,text:`Pagination`},{id:`every-failure-and-what-happens`,text:`Every Failure, and What Happens`},{id:`details-interviewers-ask-about`,text:`Details Interviewers Ask About`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Add a Cache Without Serving Stale Data`,description:`A cache makes a slow endpoint fast, until it serves an old price or melts the database when it empties. Learn cache-aside, why you delete instead of update, and how to stop stampedes, penetration and avalanches.`,date:`2026-11-16`,urlPath:`/blog/system-design/caching-without-stale-data/`},{title:`Design a Rate Limiter for an API`,description:`Allow each client 100 requests a minute, across many servers, without letting bursts through or slowing every request down. Compare fixed windows, sliding windows and token buckets, and build one on Redis.`,date:`2026-11-16`,urlPath:`/blog/system-design/rate-limiter/`},{title:`Design an Order API That Saves Once and Emails Once`,description:`A client retries, a user double-clicks, a server crashes halfway. Learn how to design an endpoint that still creates exactly one order and sends exactly one email, with idempotency keys and the transactional outbox.`,date:`2026-11-16`,urlPath:`/blog/system-design/idempotent-order-api/`},{title:`Sell the Last Ticket Only Once`,description:`Thousands of people try to buy the last seats at the same moment. Learn how to never sell more than you have, with atomic updates, locks, versions and unique constraints, and how to hold a seat while the customer pays.`,date:`2026-11-16`,urlPath:`/blog/system-design/prevent-overselling/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Kafka and messaging interview questions`,description:`Practice Kafka and messaging interview questions on Kafka vs RabbitMQ, consumer crashes and offsets, message ordering, and idempotency, with clear answers.`,urlPath:`/interview/kafka/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));