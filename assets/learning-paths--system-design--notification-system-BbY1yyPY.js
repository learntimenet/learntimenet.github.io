import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-Blefks_7.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`notification-system`,html:`<p>A design question that tests queues, retries and good manners:</p>
<blockquote>
<p>Many services in your company need to notify users: &quot;Your order has shipped&quot;, &quot;New login from Chrome&quot;, &quot;Sale starts now&quot;. Design one system that sends <strong>push, email and SMS</strong> for all of them. About <strong>50 million notifications a day</strong>, with marketing bursts to <strong>10 million users</strong> at once.</p>
</blockquote>
<h2 id="the-numbers-first">The Numbers First</h2>
<ul>
<li>50 million a day is about <strong>600 per second</strong> on average.</li>
<li>A marketing burst of 10 million in a few minutes is <strong>tens of thousands per second</strong>.</li>
<li>Providers set the real limits: push services, email providers and SMS gateways each accept only so many requests per second, and SMS costs money per message.</li>
</ul>
<p>So the system must absorb bursts and send at the pace each provider allows.</p>
<h2 id="the-naive-version">The Naive Version</h2>
<p>Each service calls the email or push provider directly, inside its own request:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> ship_order</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(order):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    mark_as_shipped(order)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    email_provider.send(order.customer.email, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Your order has shipped"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It breaks quickly:</p>
<ul>
<li><strong>A slow provider slows the order service.</strong> If the email call hangs, shipping an order hangs.</li>
<li><strong>A failed call is lost.</strong> Nobody retries it.</li>
<li><strong>No shared rules.</strong> Every team has to handle opt-outs, quiet hours and templates again, differently.</li>
<li><strong>No limits.</strong> A marketing script can send a user ten messages in an hour.</li>
</ul>
<h2 id="the-design">The Design</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Services → Notification API → Queues (push / email / SMS) → Channel workers → Providers</span></span>
<span class="line"><span>                 ↓</span></span>
<span class="line"><span>      Preferences, templates, rate limits</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ol>
<li><strong>Services call one API</strong>, with a user, a notification type and data: <code>{ userId, type: &quot;order_shipped&quot;, data: { orderId } }</code>.</li>
<li><strong>The API applies the rules:</strong> is this type enabled for this user and channel? Is it quiet hours? Has the user had too many today? Then it renders the template in the user&#39;s language.</li>
<li><strong>It puts one message per channel on a queue</strong> and answers right away. The calling service is done.</li>
<li><strong>Workers per channel</strong> read their queue and call the provider. Each attempt updates the notification&#39;s status.</li>
</ol>
<p>The queue decouples the services from the providers: bursts wait in the queue, and a slow SMS gateway only slows SMS.</p>
<h2 id="retries-without-duplicates">Retries Without Duplicates</h2>
<p>Providers fail and time out. Workers retry with <strong>exponential backoff</strong>: after 1 second, then 2, 4, 8… up to a limit. After the last attempt, the message goes to a <strong>dead-letter queue</strong> for someone to look at.</p>
<p>A timeout is tricky: the provider may have sent the message before the connection dropped. Retrying could send it twice. Two defenses:</p>
<ul>
<li>Give each notification an <strong>idempotency key</strong> and pass it to providers that support one.</li>
<li>Record what was sent, and skip a notification whose key is already marked as delivered.</li>
</ul>
<p>Exactly-once delivery isn&#39;t possible end to end, so the goal is <strong>at least once, with deduplication</strong> for the messages that matter.</p>
<h2 id="priorities">Priorities</h2>
<p>A password reset must not wait behind 10 million sale announcements. Use separate queues, or priority levels, for:</p>
<ul>
<li><strong>Transactional</strong> messages: password resets, security alerts, receipts. Small volume, sent first.</li>
<li><strong>Marketing</strong> messages: campaigns and newsletters. Huge volume, sent at a steady pace.</li>
</ul>
<h2 id="respecting-users">Respecting Users</h2>
<ul>
<li><strong>Preferences</strong> per type and channel: someone may want order updates by push but never by SMS.</li>
<li><strong>Quiet hours</strong> in the user&#39;s time zone, except for urgent security alerts.</li>
<li><strong>Frequency caps:</strong> at most a few marketing messages a day.</li>
<li><strong>Digests:</strong> group many similar events, like ten new comments, into one notification.</li>
<li><strong>Unsubscribe links</strong> in every email, as the law requires in many countries.</li>
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
<td>Email provider is down</td>
<td>Email workers retry with backoff</td>
<td>Emails are delayed, push and SMS unaffected</td>
</tr>
<tr>
<td>A worker crashes mid-send</td>
<td>The queue gives the message to another worker</td>
<td>Possibly sent twice; the key deduplicates it</td>
</tr>
<tr>
<td>A 10-million-user burst arrives</td>
<td>Messages wait in the marketing queue</td>
<td>Sent over minutes; transactional ones go first</td>
</tr>
<tr>
<td>A device token has expired</td>
<td>The push provider rejects it</td>
<td>Remove the token; stop sending to it</td>
</tr>
<tr>
<td>A bug sends the same campaign twice</td>
<td>The idempotency key matches the first run</td>
<td>The repeat is skipped</td>
</tr>
</tbody></table>
</div>
<h2 id="details-interviewers-ask-about">Details Interviewers Ask About</h2>
<ul>
<li><strong>Scheduling.</strong> &quot;Send at 9 a.m. local time&quot; means storing the send time per user and releasing messages into the queue when due.</li>
<li><strong>Tracking.</strong> Record sent, delivered, opened and clicked, from provider callbacks and tracking links, to measure campaigns.</li>
<li><strong>Templates.</strong> Keep them versioned, with a preview, so a typo in a campaign is caught before 10 million people see it.</li>
<li><strong>Multiple providers.</strong> A second email or SMS provider gives a fallback when the first one fails.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Put one notification API in front of every service, so rules live in one place.</li>
<li>Check preferences, quiet hours and caps, then render the template.</li>
<li>Queue one message per channel, and answer immediately.</li>
<li>Send with workers per channel, at each provider&#39;s pace.</li>
<li>Retry with backoff and a dead-letter queue; deduplicate with idempotency keys.</li>
<li>Keep transactional messages ahead of marketing ones.</li>
</ol>
`})})}));