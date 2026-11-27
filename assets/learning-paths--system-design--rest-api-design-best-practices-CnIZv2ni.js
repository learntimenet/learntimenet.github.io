import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-Blefks_7.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`rest-api-design-best-practices`,html:`<p>An API is a promise: once clients depend on it, every change can break someone. These ten rules keep APIs predictable for the people who call them, and leave you room to change them later.</p>
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
`})})}));