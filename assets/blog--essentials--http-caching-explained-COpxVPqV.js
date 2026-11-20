import{C as e,S as t,t as n,x as r}from"./LoaderHider-KFW_vTay.js";import{t as i}from"./BlogArticlePage-D7svjuOq.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,description:`How browsers and CDNs decide whether to reuse a response, with Cache-Control, ETag, Last-Modified and 304 Not Modified. Plus the settings that work for HTML, versioned assets, APIs and private data.`,date:`2026-11-21`,urlPath:`/blog/essentials/http-caching-explained/`,html:`<p>The fastest request is the one you never send. HTTP caching lets browsers and CDNs reuse responses instead of downloading them again, and a few headers control all of it. Get them right and pages load instantly; get them wrong and users see old versions after every deploy.</p>
<h2 id="two-questions-every-cache-asks">Two Questions Every Cache Asks</h2>
<p>When a cache has a stored response, it asks:</p>
<ol>
<li><strong>Is it still fresh?</strong> If yes, use it without contacting the server at all.</li>
<li><strong>If it&#39;s stale, has it changed?</strong> Ask the server. If nothing changed, the server answers <code>304 Not Modified</code> with no body, and the cache reuses its copy.</li>
</ol>
<p>Freshness saves the whole request. Revalidation saves the download, but still costs a round trip.</p>
<h2 id="freshness-cache-control">Freshness: Cache-Control</h2>
<p>The server says how long a response stays fresh:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Cache-Control: max-age=3600</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>For the next hour, the browser reuses the response without asking. The most useful directives:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Directive</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>max-age=N</code></td>
<td>Fresh for N seconds</td>
</tr>
<tr>
<td><code>s-maxage=N</code></td>
<td>Like <code>max-age</code>, but only for shared caches such as CDNs</td>
</tr>
<tr>
<td><code>no-cache</code></td>
<td>Store it, but check with the server <strong>before every use</strong></td>
</tr>
<tr>
<td><code>no-store</code></td>
<td>Don&#39;t store it at all</td>
</tr>
<tr>
<td><code>private</code></td>
<td>Only the user&#39;s browser may store it, not a CDN</td>
</tr>
<tr>
<td><code>public</code></td>
<td>Any cache may store it, even if the request had credentials</td>
</tr>
<tr>
<td><code>immutable</code></td>
<td>Never changes: don&#39;t even revalidate when the user reloads</td>
</tr>
<tr>
<td><code>stale-while-revalidate=N</code></td>
<td>After expiry, serve the old copy for N more seconds while refreshing it in the background</td>
</tr>
</tbody></table>
</div>
<p>The name <code>no-cache</code> misleads many people: it doesn&#39;t forbid caching, it forbids using the cache <em>without checking</em>. To forbid storing, use <code>no-store</code>.</p>
<h2 id="revalidation-etag-and-last-modified">Revalidation: ETag and Last-Modified</h2>
<p>To make revalidation possible, the server labels each response.</p>
<p>An <strong>ETag</strong> is an identifier of the content, often a hash:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>ETag: "5f2a9c"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>When the copy is stale, the browser asks:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>GET /api/products</span></span>
<span class="line"><span>If-None-Match: "5f2a9c"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If the content still has that ETag, the server answers:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>HTTP/1.1 304 Not Modified</span></span>
<span class="line"><span>ETag: "5f2a9c"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>No body is sent, just the headers. <strong>Last-Modified</strong> works the same way with a date and <code>If-Modified-Since</code>, but it&#39;s less precise: it can&#39;t tell two changes within the same second apart.</p>
<h2 id="settings-that-work">Settings That Work</h2>
<h3 id="versioned-assets">Versioned Assets</h3>
<p>Build tools name files after their content, like <code>app.3f9c2.js</code>. A new version gets a new name, so the old file can be cached forever:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Cache-Control: public, max-age=31536000, immutable</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>This is the single biggest caching win for most sites.</p>
<h3 id="html-pages">HTML Pages</h3>
<p>The HTML must point to the newest asset names, so it should always be checked:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Cache-Control: no-cache</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>With an ETag, an unchanged page costs a quick <code>304</code>, and a deploy shows up on the next visit.</p>
<h3 id="api-responses">API Responses</h3>
<p>Public data that changes now and then, like a product list, can be cached briefly and refreshed in the background:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Cache-Control: public, max-age=60, stale-while-revalidate=300</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h3 id="private-or-sensitive-data">Private or Sensitive Data</h3>
<p>A user&#39;s account page or bank balance must never be stored by a shared cache, and often not at all:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Cache-Control: private, no-store</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="cdns-and-the-vary-header">CDNs and the Vary Header</h2>
<p>A CDN caches one copy per URL for everyone. If the response depends on a request header, say so with <code>Vary</code>, or one user may get another&#39;s version:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Vary: Accept-Encoding</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Here the CDN keeps a gzip copy and a brotli copy separately. Be careful with <code>Vary: Cookie</code> or <code>Vary: Authorization</code>: since nearly every request differs, the CDN can barely cache anything. Don&#39;t cache personalized responses in a CDN at all; mark them <code>private</code>.</p>
<h2 id="busting-the-cache">Busting the Cache</h2>
<p>When a cached file must change before it expires, you have three options:</p>
<ol>
<li><strong>Change the URL.</strong> New name, new cache entry. The best option, and why build tools add hashes.</li>
<li><strong>Purge the CDN.</strong> Works for the CDN, but not for copies already in browsers.</li>
<li><strong>Wait.</strong> Which is why long <code>max-age</code> values belong only on versioned files.</li>
</ol>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Long <code>max-age</code> on HTML.</strong> Users keep an old page that points to old assets after a deploy.</li>
<li><strong><code>no-cache</code> when you meant <code>no-store</code>.</strong> Sensitive data still gets stored.</li>
<li><strong>Caching personalized pages in a CDN.</strong> One user&#39;s page served to another. Use <code>private</code>.</li>
<li><strong>No validators.</strong> Without an ETag or Last-Modified, a stale copy must be downloaded again in full.</li>
<li><strong>Short cache times on hashed assets.</strong> You pay for revalidation on files that can never change.</li>
</ul>
<h2 id="the-rules-in-short">The Rules in Short</h2>
<ol>
<li>Hashed assets: <code>max-age=31536000, immutable</code>.</li>
<li>HTML: <code>no-cache</code>, with an ETag.</li>
<li>Shared API data: a short <code>max-age</code> with <code>stale-while-revalidate</code>.</li>
<li>Private data: <code>private</code>, or <code>no-store</code> when it&#39;s sensitive.</li>
<li>Send an ETag so stale copies can be revalidated with a cheap <code>304</code>.</li>
</ol>
`,headings:[{id:`two-questions-every-cache-asks`,text:`Two Questions Every Cache Asks`},{id:`freshness-cache-control`,text:`Freshness: Cache-Control`},{id:`revalidation-etag-and-last-modified`,text:`Revalidation: ETag and Last-Modified`},{id:`settings-that-work`,text:`Settings That Work`},{id:`cdns-and-the-vary-header`,text:`CDNs and the Vary Header`},{id:`busting-the-cache`,text:`Busting the Cache`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`the-rules-in-short`,text:`The Rules in Short`}],parents:[],related:[{title:`REST API Design: 10 Rules That Age Well`,description:`Resource names, HTTP methods, status codes, errors, pagination, filtering, versioning and idempotency. Ten practical rules for APIs that clients find easy to use and you find easy to change.`,date:`2026-11-21`,urlPath:`/blog/essentials/rest-api-design-best-practices/`},{title:`SQL Joins Explained With One Small Example`,description:`INNER, LEFT, RIGHT, FULL and CROSS joins, plus self joins and anti joins, all on the same two tiny tables, so you can see exactly which rows each one returns.`,date:`2026-11-21`,urlPath:`/blog/essentials/sql-joins-explained/`},{title:`The JavaScript Event Loop, Explained`,description:`Why setTimeout(fn, 0) doesn't run right away, why promises run before timers, and how one thread handles clicks, network calls and rendering. With examples you can predict line by line.`,date:`2026-11-21`,urlPath:`/blog/essentials/javascript-event-loop-explained/`},{title:`CORS Explained: Why Your Fetch Is Blocked and How to Fix It`,description:`What the same-origin policy protects, what CORS headers the server must send, when the browser sends a preflight OPTIONS request, how credentials change the rules, and how to fix the most common CORS errors.`,date:`2026-11-20`,urlPath:`/blog/essentials/cors-explained/`}],relatedPages:[{title:`HTTP Status Codes`,description:`Look up any HTTP status code, from 100 to 505: what it means, when to use it, and the ones people mix up, like 401 vs 403 or 400 vs 422. Search by number or word.`,urlPath:`/tools/http-status-codes/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));