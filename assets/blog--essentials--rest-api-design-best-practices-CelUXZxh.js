import{E as e,T as t,t as n,w as r}from"./LoaderHider-Ci_3tj_y.js";import{t as i}from"./BlogArticlePage-DdJwnD8V.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`REST API Design: 10 Rules That Age Well`,description:`Resource names, HTTP methods, status codes, errors, pagination, filtering, versioning and idempotency. Ten practical rules for APIs that clients find easy to use and you find easy to change.`,date:`2026-11-21`,urlPath:`/blog/essentials/rest-api-design-best-practices/`,html:`<p>An API is a promise: once clients depend on it, every change can break someone. These ten rules keep APIs predictable for the people who call them, and leave you room to change them later.</p>
<h2 id="1-name-resources-with-plural-nouns">1. Name Resources With Plural Nouns</h2>
<p>URLs name things; HTTP methods say what to do with them.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>GET    /orders          list orders</span></span>
<span class="line"><span>POST   /orders          create an order</span></span>
<span class="line"><span>GET    /orders/42       read order 42</span></span>
<span class="line"><span>PATCH  /orders/42       change part of order 42</span></span>
<span class="line"><span>DELETE /orders/42       delete order 42</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Avoid verbs in paths like <code>/getOrders</code> or <code>/createOrder</code>. Nest only to show ownership, and only one level deep: <code>/customers/7/orders</code> is clear, <code>/customers/7/orders/42/items/3/notes</code> is not.</p>
<h2 id="2-use-the-methods-for-what-they-mean">2. Use the Methods for What They Mean</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Method</th>
<th>Use</th>
<th>Safe</th>
<th>Idempotent</th>
</tr>
</thead>
<tbody><tr>
<td><code>GET</code></td>
<td>Read</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td><code>POST</code></td>
<td>Create, or run an action</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><code>PUT</code></td>
<td>Replace a whole resource</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td><code>PATCH</code></td>
<td>Change some fields</td>
<td>No</td>
<td>Not necessarily</td>
</tr>
<tr>
<td><code>DELETE</code></td>
<td>Remove</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody></table>
</div>
<p><em>Safe</em> means it changes nothing; <em>idempotent</em> means doing it twice has the same effect as once. A <code>GET</code> must never change data: crawlers, prefetching and caches call it freely.</p>
<p>For actions that don&#39;t fit, like cancelling an order, a sub-resource reads well: <code>POST /orders/42/cancellation</code>.</p>
<h2 id="3-return-honest-status-codes">3. Return Honest Status Codes</h2>
<p>Clients and monitoring tools rely on them. The ones you need most:</p>
<ul>
<li><code>200 OK</code>, <code>201 Created</code> (with a <code>Location</code> header), <code>204 No Content</code>.</li>
<li><code>400 Bad Request</code> for malformed input, <code>422 Unprocessable Content</code> for valid JSON that breaks rules.</li>
<li><code>401 Unauthorized</code> when not logged in, <code>403 Forbidden</code> when logged in but not allowed.</li>
<li><code>404 Not Found</code>, <code>409 Conflict</code> for a state clash, like a duplicate email.</li>
<li><code>429 Too Many Requests</code>, with <code>Retry-After</code>.</li>
<li><code>500</code> for your bugs, <code>503</code> when temporarily down.</li>
</ul>
<p>Never answer <code>200</code> with <code>{&quot;error&quot;: &quot;...&quot;}</code> in the body: every client then has to read the body to know whether it worked. The <a href="/tools/http-status-codes/">HTTP status codes reference</a> explains each one.</p>
<h2 id="4-use-one-error-format-everywhere">4. Use One Error Format Everywhere</h2>
<p>Pick a shape and use it for every error, so clients write the handling once:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">{</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "type"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"validation_error"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "message"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Some fields are invalid."</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "errors"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    { </span><span style="color:#116329;--shiki-dark:#7EE787">"field"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"email"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#116329;--shiki-dark:#7EE787">"message"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Must be a valid email address."</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    { </span><span style="color:#116329;--shiki-dark:#7EE787">"field"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"quantity"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#116329;--shiki-dark:#7EE787">"message"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Must be at least 1."</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  ],</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "requestId"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"req_8f2a"</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>A stable <code>type</code> lets code react; <code>message</code> is for people; a <code>requestId</code> lets support find the logs. The standard RFC 9457 &quot;problem details&quot; format is a good starting point.</p>
<h2 id="5-paginate-every-list">5. Paginate Every List</h2>
<p>A list that&#39;s small today grows. Return pages from day one:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>GET /orders?limit=50&#x26;cursor=eyJpZCI6MTA0fQ</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">{</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "data"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: [ </span><span style="color:#82071E;--shiki-light-font-style:italic;--shiki-dark:#FFA198;--shiki-dark-font-style:italic">...</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ],</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "nextCursor"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"eyJpZCI6MTU0fQ"</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><strong>Cursor pagination</strong> (start after the last item seen) stays fast on huge tables and doesn&#39;t skip or repeat items when new rows arrive. <strong>Offset pagination</strong> (<code>?page=3</code>) is simpler and allows jumping to a page, but slows down deep into large tables. Cap <code>limit</code>, so no one asks for a million rows.</p>
<h2 id="6-filter-sort-and-select-with-query-parameters">6. Filter, Sort and Select With Query Parameters</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>GET /orders?status=paid&#x26;created_after=2026-01-01&#x26;sort=-created_at&#x26;fields=id,total</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Use the same names across the whole API. A minus sign for descending order and a <code>fields</code> parameter for smaller responses are common conventions.</p>
<h2 id="7-make-retries-safe-with-idempotency-keys">7. Make Retries Safe With Idempotency Keys</h2>
<p>Networks fail, and clients retry. Retrying a <code>POST /payments</code> after a timeout must not charge twice. Let clients send a key:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>POST /payments</span></span>
<span class="line"><span>Idempotency-Key: 6c1a2e9b-3f4d-4a7e-9a51-0e2c8b7d4f10</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The server stores the result under that key and returns the same response for a repeat, without doing the work again. It matters for anything that creates or moves something valuable.</p>
<h2 id="8-version-from-the-start">8. Version From the Start</h2>
<p>Breaking changes will come. Put a version in the path, <code>/v1/orders</code>, or in a header. Then:</p>
<ul>
<li><strong>Additive changes</strong>, like a new optional field or a new endpoint, don&#39;t need a new version.</li>
<li><strong>Breaking changes</strong>, like removing or renaming a field or changing its type, do.</li>
<li>Announce deprecations early and give clients months to move.</li>
</ul>
<p>Clients should ignore fields they don&#39;t know, so you can add fields freely.</p>
<h2 id="9-be-consistent-in-the-small-things">9. Be Consistent in the Small Things</h2>
<p>Inconsistency costs clients more than any single choice:</p>
<ul>
<li>One naming style for JSON fields: <code>camelCase</code> or <code>snake_case</code>, not both.</li>
<li>Dates in ISO 8601 with a time zone: <code>2026-11-21T09:30:00Z</code>.</li>
<li>Money as an integer in the smallest unit, plus a currency: <code>{&quot;amount&quot;: 1999, &quot;currency&quot;: &quot;EUR&quot;}</code>. Floats round badly.</li>
<li>IDs as strings, so they can change format later.</li>
</ul>
<h2 id="10-secure-and-document-it">10. Secure and Document It</h2>
<ul>
<li>HTTPS only, with authentication on every endpoint except the ones meant to be public.</li>
<li>Check permissions per resource: being logged in doesn&#39;t mean you may read order 42.</li>
<li>Rate limit, and validate every input.</li>
<li>Publish an OpenAPI description, with examples of real requests and responses. If an example is hard to write, the endpoint is probably hard to use.</li>
</ul>
<h2 id="the-rules-in-short">The Rules in Short</h2>
<ol>
<li>Plural nouns for resources, methods for actions.</li>
<li>Methods with their real meaning; <code>GET</code> never changes data.</li>
<li>Honest status codes, never <code>200</code> with an error.</li>
<li>One error format, with a type, a message and a request ID.</li>
<li>Paginate every list, preferably with cursors.</li>
<li>Filtering, sorting and fields through query parameters.</li>
<li>Idempotency keys for anything that mustn&#39;t happen twice.</li>
<li>A version from day one; additive changes don&#39;t need a new one.</li>
<li>Consistent names, dates, money and IDs.</li>
<li>HTTPS, permissions per resource, rate limits and real documentation.</li>
</ol>
`,headings:[{id:`1-name-resources-with-plural-nouns`,text:`1. Name Resources With Plural Nouns`},{id:`2-use-the-methods-for-what-they-mean`,text:`2. Use the Methods for What They Mean`},{id:`3-return-honest-status-codes`,text:`3. Return Honest Status Codes`},{id:`4-use-one-error-format-everywhere`,text:`4. Use One Error Format Everywhere`},{id:`5-paginate-every-list`,text:`5. Paginate Every List`},{id:`6-filter-sort-and-select-with-query-parameters`,text:`6. Filter, Sort and Select With Query Parameters`},{id:`7-make-retries-safe-with-idempotency-keys`,text:`7. Make Retries Safe With Idempotency Keys`},{id:`8-version-from-the-start`,text:`8. Version From the Start`},{id:`9-be-consistent-in-the-small-things`,text:`9. Be Consistent in the Small Things`},{id:`10-secure-and-document-it`,text:`10. Secure and Document It`},{id:`the-rules-in-short`,text:`The Rules in Short`}],parents:[],related:[{title:`SQL Joins Explained With One Small Example`,description:`INNER, LEFT, RIGHT, FULL and CROSS joins, plus self joins and anti joins, all on the same two tiny tables, so you can see exactly which rows each one returns.`,date:`2026-11-21`,urlPath:`/blog/essentials/sql-joins-explained/`},{title:`The JavaScript Event Loop, Explained`,description:`Why setTimeout(fn, 0) doesn't run right away, why promises run before timers, and how one thread handles clicks, network calls and rendering. With examples you can predict line by line.`,date:`2026-11-21`,urlPath:`/blog/essentials/javascript-event-loop-explained/`},{title:`CORS Explained: Why Your Fetch Is Blocked and How to Fix It`,description:`What the same-origin policy protects, what CORS headers the server must send, when the browser sends a preflight OPTIONS request, how credentials change the rules, and how to fix the most common CORS errors.`,date:`2026-11-20`,urlPath:`/blog/essentials/cors-explained/`},{title:`Git Merge vs Rebase, Explained`,description:`Merge and rebase both bring the changes of one branch into another, but they leave a different history. See what each one does to your commits, when to use which, and the one rule that keeps rebase safe.`,date:`2026-11-20`,urlPath:`/blog/essentials/git-merge-vs-rebase/`}],relatedPages:[{title:`HTTP Status Codes`,description:`Look up any HTTP status code, from 100 to 505: what it means, when to use it, and the ones people mix up, like 401 vs 403 or 400 vs 422. Search by number or word.`,urlPath:`/tools/http-status-codes/`},{title:`JSON Formatter`,description:`Format, validate and minify JSON online for free. See the line and column of any error, pick the indentation and sort keys. Runs in your browser.`,urlPath:`/tools/json-formatter/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));