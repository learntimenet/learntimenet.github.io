import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-88cmZ_nG.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`caching-without-stale-data`,html:`<p>The product page of an online shop gets 5,000 requests per second, and the database behind it is struggling. Everyone agrees: add a cache. The design question:</p>
<blockquote>
<p>How do you add a cache so the page stays fast, <strong>a changed price shows up within seconds</strong>, and the database <strong>survives when the cache is empty</strong>?</p>
</blockquote>
<p>Adding a cache takes ten lines. Adding one that never shows a wrong price and never takes the database down with it takes a bit more thought. There&#39;s a reason for the old joke: there are only two hard things in computer science, cache invalidation and naming things.</p>
<h2 id="the-basic-pattern-cache-aside">The Basic Pattern: Cache-Aside</h2>
<p>The most common pattern is <strong>cache-aside</strong>, also called lazy loading. The application checks the cache first, and on a miss, reads the database and fills the cache:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Product </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getProduct</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    String</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> key</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "product:"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Product</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cached</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cache.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">get</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(key);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (cached </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> null</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cached; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// a hit: no database query</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Product</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> product</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">findById</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(id);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    cache.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">set</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(key, product, Duration.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">ofMinutes</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">10</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">));</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> product;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Spring can do the same with one annotation:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Cacheable</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">value</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "products"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">key</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "#id"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Product </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getProduct</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">findById</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(id);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>With a 99% hit rate, the database goes from 5,000 queries a second to 50. The <strong>TTL</strong> (time to live), 10 minutes here, makes every entry disappear eventually, so nothing stays wrong forever.</p>
<p>But 10 minutes is far too long for a price. When the price changes, the cache must know.</p>
<h2 id="problem-1-stale-data-after-an-update">Problem 1: Stale Data After an Update</h2>
<h3 id="delete-the-entry-don-t-update-it">Delete the entry, don&#39;t update it</h3>
<p>When a product changes, there are two options: write the new value into the cache, or delete the entry and let the next read fill it. <strong>Delete it.</strong> Updating looks more efficient, but two writers can race:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Time</th>
<th>Writer A</th>
<th>Writer B</th>
<th>Database</th>
<th>Cache</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Saves price 10 to the database</td>
<td></td>
<td>10</td>
<td>8</td>
</tr>
<tr>
<td>2</td>
<td></td>
<td>Saves price 12 to the database</td>
<td>12</td>
<td>8</td>
</tr>
<tr>
<td>3</td>
<td></td>
<td>Writes 12 into the cache</td>
<td>12</td>
<td>12</td>
</tr>
<tr>
<td>4</td>
<td>Writes 10 into the cache</td>
<td></td>
<td>12</td>
<td>10</td>
</tr>
</tbody></table>
</div>
<p>The database says 12, the cache says 10, and it stays wrong until the TTL runs out. Deleting has no such race: whatever order the deletes run in, the entry is gone, and the next read loads the latest value. Deleting is also cheaper when an entry is built from several tables: you don&#39;t have to rebuild it on every write.</p>
<h3 id="update-the-database-first-then-delete">Update the database first, then delete</h3>
<p>The order matters too. If you delete first, a reader can sneak in between:</p>
<ol>
<li>The writer deletes the cache entry.</li>
<li>A reader misses, reads the <strong>old</strong> price from the database, and caches it.</li>
<li>The writer saves the new price to the database.</li>
</ol>
<p>The cache now holds the old price, until the TTL. So: <strong>save to the database, then delete the cache entry.</strong></p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Transactional</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> updatePrice</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id, BigDecimal price) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    products.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">updatePrice</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(id, price);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    events.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">publishEvent</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> PriceChanged</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(id));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Runs once the transaction has committed, so no reader can load</span></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// the old value from a transaction that hasn't finished.</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">TransactionalEventListener</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">phase</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> TransactionPhase.AFTER_COMMIT)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> onPriceChanged</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(PriceChanged event) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    cache.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">delete</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"product:"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> event.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">productId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">());</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Delete <strong>after the commit</strong>. If you delete inside the transaction, a reader can miss, read the old committed value, and cache it before your transaction commits.</p>
<h3 id="the-race-that-s-left">The race that&#39;s left</h3>
<p>Even &quot;update, then delete&quot; has a rare race. A reader misses and reads the old price, the writer updates and deletes, then the reader, which was slow, writes the old price into the cache. It needs a reader to be slower than a whole write, so it&#39;s rare, but under load it happens. Three ways to deal with it:</p>
<ul>
<li><strong>Keep a TTL anyway.</strong> It bounds how long any mistake can last. This is why you always set one, even with perfect invalidation.</li>
<li><strong>Delete twice.</strong> Delete right after the commit, and again a second or so later, which catches the slow reader. It&#39;s cheap and widely used.</li>
<li><strong>Invalidate from the database&#39;s change log.</strong> A tool like Debezium reads the database&#39;s change stream (change data capture) and deletes the cache entry for every committed change, from one place, even for updates made outside your application. It&#39;s more infrastructure, but it&#39;s the most reliable.</li>
</ul>
<h3 id="when-there-are-many-servers-with-local-caches">When there are many servers with local caches</h3>
<p>A cache in each server&#39;s memory (like Caffeine) is even faster than Redis, but a delete on one server leaves the others stale. Either keep the local TTL very short (a few seconds), or broadcast invalidations to every server, with Redis pub/sub for example. A common setup is two levels: a small local cache with a short TTL in front of a shared Redis.</p>
<h2 id="problem-2-the-stampede-when-a-popular-entry-expires">Problem 2: The Stampede When a Popular Entry Expires</h2>
<p>The home page&#39;s best-selling product is in the cache, read 2,000 times a second. Its entry expires. In the next few milliseconds, hundreds of requests miss at once, and <strong>all of them</strong> query the database for the same product. If the query is slow, more requests pile up behind it. This is a <strong>cache stampede</strong>, or thundering herd.</p>
<p>The fixes:</p>
<ul>
<li><strong>Let one request rebuild.</strong> On a miss, try to take a short lock in Redis with <code>SET lock:product:42 1 NX PX 5000</code>. The one that gets it reads the database and fills the cache; the others wait a few milliseconds and read the cache again, or get the old value if you kept it.</li>
<li><strong>Coalesce within a server.</strong> Within one server, concurrent misses for the same key can share one database call. Caffeine&#39;s <code>get(key, loader)</code> does this out of the box.</li>
<li><strong>Serve stale while refreshing.</strong> Store the value with a &quot;refresh after&quot; time, shorter than its real expiry. After that time, return the cached value right away and refresh it in the background. Users never wait, and only one refresh runs.</li>
<li><strong>Refresh early, at random.</strong> Each reader that finds an entry close to its expiry has a small chance of refreshing it early, and the chance grows as the expiry nears. Popular entries get refreshed before they expire, by one request, without any lock. It&#39;s known as probabilistic early expiration.</li>
</ul>
<h2 id="problem-3-penetration-by-things-that-don-t-exist">Problem 3: Penetration by Things That Don&#39;t Exist</h2>
<p>A bot asks for products <code>/products/999999901</code>, <code>/products/999999902</code>… None of them exist. A miss on a product that doesn&#39;t exist caches nothing, so <strong>every request goes to the database</strong>, and the cache protects nothing.</p>
<ul>
<li><strong>Cache the &quot;not found&quot; too</strong>, with a short TTL, like a minute: a negative cache.</li>
<li>For huge sets of possible keys, put a <strong>Bloom filter</strong> in front: a compact structure that answers &quot;definitely not there&quot; or &quot;maybe there&quot;. Load every existing product id into it, and reject the ids it has never seen without a database query.</li>
<li><strong>Validate the input</strong> and rate-limit clients that make many misses.</li>
</ul>
<h2 id="problem-4-the-avalanche-when-everything-expires-at-once">Problem 4: The Avalanche When Everything Expires at Once</h2>
<p>Two related disasters:</p>
<ul>
<li><strong>Many entries expire at the same moment.</strong> You loaded the whole catalog at 3:00 with a one-hour TTL, so at 4:00 everything expires together, and the database takes the whole load at once.</li>
<li><strong>The cache restarts empty</strong>, or the cache cluster goes down. Every request becomes a miss.</li>
</ul>
<p>The fixes:</p>
<ul>
<li><strong>Add jitter to TTLs.</strong> Instead of exactly 60 minutes, use 60 minutes plus or minus a random 10%. Expiries spread out.</li>
<li><strong>Warm the cache</strong> before sending traffic to a new cache node: load the most popular keys first.</li>
<li><strong>Protect the database.</strong> Limit how many queries can reach it at once (a connection pool limit, a bulkhead or a circuit breaker), so a cold cache makes requests slower instead of taking the database down.</li>
<li><strong>Make the cache highly available:</strong> Redis replicas with automatic failover, so losing one node doesn&#39;t empty the cache.</li>
</ul>
<h2 id="other-patterns-you-might-be-asked-about">Other Patterns You Might Be Asked About</h2>
<ul>
<li><strong>Read-through:</strong> like cache-aside, but the cache itself loads missing entries from the database. The application only talks to the cache.</li>
<li><strong>Write-through:</strong> every write goes to the cache and the database together. Reads are always fresh, but every write is slower, and the race between two writers comes back.</li>
<li><strong>Write-behind:</strong> writes go to the cache, and are saved to the database later, in batches. Very fast writes, but data is lost if the cache crashes before it saves. Fine for view counters, not for orders.</li>
<li><strong>HTTP caching and CDNs:</strong> for public pages, <code>Cache-Control</code> headers let browsers and a CDN cache responses close to users, before they even reach your servers. The same rules apply: a short <code>max-age</code>, or a way to purge on change.</li>
</ul>
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
<td>A price changes</td>
<td>The entry is deleted after the commit; the next read loads it</td>
<td>The new price, within milliseconds</td>
</tr>
<tr>
<td>Two writers update at once</td>
<td>Both delete instead of writing values</td>
<td>No old value written over a new one</td>
</tr>
<tr>
<td>A slow reader caches an old value</td>
<td>A second, delayed delete and the TTL remove it</td>
<td>Stale for a second, at worst</td>
</tr>
<tr>
<td>A popular entry expires</td>
<td>One request rebuilds it; the others wait or get the stale value</td>
<td>One database query, not hundreds</td>
</tr>
<tr>
<td>A bot requests products that don&#39;t exist</td>
<td>&quot;Not found&quot; is cached briefly, or a Bloom filter rejects them</td>
<td>The database isn&#39;t hit</td>
</tr>
<tr>
<td>Many entries expire together</td>
<td>TTLs have jitter, so they don&#39;t</td>
<td>The load stays spread out</td>
</tr>
<tr>
<td>The cache restarts empty</td>
<td>It&#39;s warmed first, and a limit protects the database</td>
<td>Slower for a while, not down</td>
</tr>
</tbody></table>
</div>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Use <strong>cache-aside</strong>: read from the cache, and on a miss, read the database and fill the cache, always with a <strong>TTL</strong>.</li>
<li>On a change, <strong>update the database, then delete</strong> the cache entry, after the commit. Delete, don&#39;t update.</li>
<li>Close the remaining gap with a <strong>delayed second delete</strong>, or invalidate from the database&#39;s <strong>change log</strong>.</li>
<li>Stop <strong>stampedes</strong> by letting one request rebuild an entry, or serve the stale value while refreshing.</li>
<li>Cache <strong>&quot;not found&quot;</strong> results, and filter impossible keys, so missing items can&#39;t bypass the cache.</li>
<li>Add <strong>jitter</strong> to TTLs, warm new caches, and <strong>limit</strong> the load that can reach the database.</li>
</ol>
`})})}));