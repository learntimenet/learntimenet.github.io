import{C as e,S as t,t as n,x as r}from"./LoaderHider-qy7qUd2V.js";import{t as i}from"./BlogArticlePage-Bp8EWTHX.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Design a URL Shortener`,description:`Turn long links into short codes and redirect millions of clicks a day, fast. Generate unique codes without collisions, cache the hot links, count clicks without slowing redirects, and choose between 301 and 302.`,date:`2026-11-21`,urlPath:`/blog/system-design/url-shortener/`,html:`<p>One of the most common warm-up questions in system design interviews:</p>
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
`,headings:[{id:`the-numbers-first`,text:`The Numbers First`},{id:`the-naive-version`,text:`The Naive Version`},{id:`generating-unique-codes`,text:`Generating Unique Codes`},{id:`the-design`,text:`The Design`},{id:`301-or-302`,text:`301 or 302?`},{id:`counting-clicks-without-slowing-redirects`,text:`Counting Clicks Without Slowing Redirects`},{id:`every-failure-and-what-happens`,text:`Every Failure, and What Happens`},{id:`details-interviewers-ask-about`,text:`Details Interviewers Ask About`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Add a Cache Without Serving Stale Data`,description:`A cache makes a slow endpoint fast, until it serves an old price or melts the database when it empties. Learn cache-aside, why you delete instead of update, and how to stop stampedes, penetration and avalanches.`,date:`2026-11-16`,urlPath:`/blog/system-design/caching-without-stale-data/`},{title:`Design a Rate Limiter for an API`,description:`Allow each client 100 requests a minute, across many servers, without letting bursts through or slowing every request down. Compare fixed windows, sliding windows and token buckets, and build one on Redis.`,date:`2026-11-16`,urlPath:`/blog/system-design/rate-limiter/`},{title:`Design an Order API That Saves Once and Emails Once`,description:`A client retries, a user double-clicks, a server crashes halfway. Learn how to design an endpoint that still creates exactly one order and sends exactly one email, with idempotency keys and the transactional outbox.`,date:`2026-11-16`,urlPath:`/blog/system-design/idempotent-order-api/`},{title:`Sell the Last Ticket Only Once`,description:`Thousands of people try to buy the last seats at the same moment. Learn how to never sell more than you have, with atomic updates, locks, versions and unique constraints, and how to hold a seat while the customer pays.`,date:`2026-11-16`,urlPath:`/blog/system-design/prevent-overselling/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`URL Encoder and Decoder`,description:`Percent-encode and decode URLs and query strings online for free, and split any URL into its parts and query parameters. Runs in your browser.`,urlPath:`/tools/url-encoder/`},{title:`HTTP Status Codes`,description:`Look up any HTTP status code, from 100 to 505: what it means, when to use it, and the ones people mix up, like 401 vs 403 or 400 vs 422. Search by number or word.`,urlPath:`/tools/http-status-codes/`}]}})})}));