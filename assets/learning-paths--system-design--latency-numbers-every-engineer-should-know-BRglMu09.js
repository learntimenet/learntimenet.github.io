import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./LearningPathPage-88cmZ_nG.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{path:{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,keywords:`learn system design, system design roadmap, system design learning path, system design interview preparation, how to learn system design, distributed systems for beginners, backend architecture`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stages:[{title:`Foundations`,description:`Every design starts with a request from a user and a few numbers. Know each step, and what's fast or slow.`,steps:[{id:`what-happens-when-you-type-a-url`,href:`/blog/essentials/what-happens-when-you-type-a-url/`,note:`DNS, TCP, TLS and HTTP: the whole trip of a request, the base of every design.`,minutes:20,title:`What Happens When You Type a URL and Press Enter`,kind:`Article`,external:!1},{id:`latency-numbers-every-engineer-should-know`,href:`/blog/essentials/latency-numbers-every-engineer-should-know/`,note:`Memory, disk and network speeds, and how to estimate load on the back of an envelope.`,minutes:30,title:`Latency, Throughput and the Numbers Every Engineer Should Know`,kind:`Article`,external:!1},{id:`vertical-vs-horizontal-scaling`,href:`/blog/essentials/vertical-vs-horizontal-scaling/`,note:`Bigger machines or more machines, and why servers should keep no state.`,minutes:30,title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,kind:`Article`,external:!1},{id:`rest-api-design-best-practices`,href:`/blog/essentials/rest-api-design-best-practices/`,note:`The API is the contract of your system: URLs, status codes, errors and pagination.`,minutes:20,title:`REST API Design: 10 Rules That Age Well`,kind:`Article`,external:!1}]},{title:`Data`,description:`Most systems are slow or wrong because of their data. Learn how to store it, find it fast and spread it over machines.`,steps:[{id:`sql-vs-nosql`,href:`/blog/essentials/sql-vs-nosql/`,note:`Relational, document, key-value and wide-column stores, and what each is good at.`,minutes:30,title:`SQL vs NoSQL: How to Choose a Database`,kind:`Article`,external:!1},{id:`database-indexes-explained`,href:`/blog/essentials/database-indexes-explained/`,note:`How an index turns a full scan into a lookup, and what it costs on writes.`,minutes:30,title:`Database Indexes Explained`,kind:`Article`,external:!1},{id:`replication-and-sharding-explained`,href:`/blog/essentials/replication-and-sharding-explained/`,note:`Copies for reading and safety, partitions for size, and the problems both bring.`,minutes:45,title:`Replication and Sharding Explained`,kind:`Article`,external:!1},{id:`scale-database-vertically-or-horizontally`,href:`/blog/essentials/scale-database-vertically-or-horizontally/`,note:`Put it together: when a bigger machine is enough, and when to scale out.`,minutes:20,title:`Should You Scale Your Database Vertically or Horizontally?`,kind:`Article`,external:!1},{id:`databases-jpa-interview-questions`,href:`/interview/databases-jpa/`,note:`Transactions, isolation levels and indexes, with clear answers.`,minutes:45,title:`Databases and JPA interview questions`,kind:`Interview questions`,external:!1}]},{title:`Building blocks`,description:`Load balancers, caches, queues and rate limits show up in almost every design. Learn what each solves and what it costs.`,steps:[{id:`load-balancers-explained`,href:`/blog/essentials/load-balancers-explained/`,note:`Spread traffic over servers: algorithms, health checks and layer 4 vs layer 7.`,minutes:30,title:`Load Balancers Explained`,kind:`Article`,external:!1},{id:`http-caching-explained`,href:`/blog/essentials/http-caching-explained/`,note:`Browser and CDN caching: the cheapest request never reaches your server.`,minutes:20,title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,kind:`Article`,external:!1},{id:`caching-without-stale-data`,href:`/blog/system-design/caching-without-stale-data/`,note:`Cache-aside, invalidation, and how to stop a cache stampede from melting the database.`,minutes:30,title:`Add a Cache Without Serving Stale Data`,kind:`Article`,external:!1},{id:`message-queues-explained`,href:`/blog/essentials/message-queues-explained/`,note:`Decouple services and absorb bursts: queues, topics, consumer groups and delivery guarantees.`,minutes:45,title:`Message Queues and Event Streaming Explained`,kind:`Article`,external:!1},{id:`rate-limiter`,href:`/blog/system-design/rate-limiter/`,note:`Fixed windows, sliding windows and token buckets, built on Redis.`,minutes:30,title:`Design a Rate Limiter for an API`,kind:`Article`,external:!1}]},{title:`Consistency and reliability`,description:`With many machines, users and retries, the hard part is staying correct when things fail.`,steps:[{id:`cap-theorem-and-consistency-models`,href:`/blog/essentials/cap-theorem-and-consistency-models/`,note:`Strong vs eventual consistency, and the trade-off every distributed system makes.`,minutes:30,title:`The CAP Theorem and Consistency Models, Explained`,kind:`Article`,external:!1},{id:`prevent-overselling`,href:`/blog/system-design/prevent-overselling/`,note:`Thousands of buyers, one last seat: atomic updates, locks and versions.`,minutes:30,title:`Sell the Last Ticket Only Once`,kind:`Article`,external:!1},{id:`idempotent-order-api`,href:`/blog/system-design/idempotent-order-api/`,note:`Retries and double clicks: idempotency keys and the transactional outbox.`,minutes:30,title:`Design an Order API That Saves Once and Emails Once`,kind:`Article`,external:!1}]},{title:`Classic design problems`,description:`Put it together on the problems interviewers ask most. Try each one on paper first, then read the design.`,steps:[{id:`url-shortener`,href:`/blog/system-design/url-shortener/`,note:`The classic first problem: unique codes, a hot cache and fast redirects.`,minutes:40,title:`Design a URL Shortener`,kind:`Article`,external:!1},{id:`notification-system`,href:`/blog/system-design/notification-system/`,note:`Queues per channel, retries without duplicates, and bursts of millions.`,minutes:40,title:`Design a Notification System`,kind:`Article`,external:!1},{id:`news-feed`,href:`/blog/system-design/news-feed/`,note:`Fan-out on write or on read, and the celebrity problem.`,minutes:40,title:`Design a News Feed`,kind:`Article`,external:!1}]},{title:`Interview practice`,description:`In a system design interview, the reasoning matters more than the boxes. Practice explaining your choices out loud.`,steps:[{id:`how-to-approach-a-system-design-interview`,href:`/blog/essentials/how-to-approach-a-system-design-interview/`,note:`A repeatable plan for 45 minutes: requirements, estimates, design, deep dives and trade-offs.`,minutes:30,title:`How to Approach a System Design Interview`,kind:`Article`,external:!1},{id:`system-design-interview-questions`,href:`/interview/system-design/`,note:`The questions asked most, with short and long answers. Answer each out loud before reading.`,minutes:120,title:`System design interview questions`,kind:`Interview questions`,external:!1}]}]},paths:[{slug:`react`,name:`React`,description:`A step-by-step path to learn React: the HTML, CSS and JavaScript you need first, components, state and hooks, data, TypeScript and testing, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-sky-500`,stepHrefs:`/blog/essentials/html-basics/,/blog/essentials/css-basics/,/playgrounds/css-layout/,/quiz/css/,/blog/essentials/javascript-basics/,/blog/essentials/modern-javascript-for-react/,/blog/essentials/promises-and-async-await-explained/,/blog/essentials/javascript-event-loop-explained/,/quiz/javascript/,/blog/essentials/the-dom-explained/,/blog/projects/todo-list-app/,https://react.dev/learn,/blog/essentials/react-components-jsx-and-props/,/blog/essentials/react-state-usestate/,https://react.dev/learn/thinking-in-react,/quiz/react/,/blog/essentials/react-useeffect-explained/,/blog/essentials/fetching-data-in-react/,/blog/essentials/forms-in-react/,/blog/essentials/cors-explained/,/blog/essentials/typescript-for-react/,/blog/cheatsheet/typescript/,https://react.dev/learn/creating-a-react-app,/playgrounds/git/,/blog/essentials/testing-react-components/,/interview/javascript/,/interview/senior-react-developer/`.split(`,`),hours:19},{slug:`java`,name:`Java`,description:`A step-by-step path to learn Java: the language, objects, collections and streams, exceptions, tests and build tools, databases and Spring Boot, then interview practice.`,level:`Beginner`,prerequisites:`None. Basic computer skills are enough.`,accentClassName:`bg-orange-500`,stepHrefs:`https://dev.java/learn/getting-started/,/blog/essentials/java-variables-types-and-operators/,/blog/essentials/java-control-flow-if-switch-loops/,/quiz/java/,/blog/essentials/java-classes-and-objects/,/blog/essentials/java-inheritance-interfaces-polymorphism/,/blog/essentials/java-records-enums-sealed-classes/,/blog/essentials/java-collections-explained/,/blog/essentials/java-streams-and-lambdas-explained/,/blog/essentials/java-exceptions-explained/,/blog/essentials/how-to-read-a-stack-trace/,/blog/essentials/maven-and-gradle-basics/,/blog/essentials/unit-testing-java-with-junit/,/playgrounds/git/,/blog/essentials/big-o-notation-explained/,/blog/leetcode/two-sum/,/blog/leetcode/valid-parentheses/,/playgrounds/sql/,/blog/essentials/sql-joins-explained/,/blog/essentials/jdbc-and-jpa-basics/,/blog/essentials/spring-dependency-injection-explained/,/blog/essentials/rest-api-design-best-practices/,/blog/essentials/build-a-rest-api-with-spring-boot/,/blog/essentials/securing-a-spring-boot-api/,/quiz/spring/,/interview/java/,/interview/spring/,/blog/essentials/java-concurrency-basics/,/exams/java-se-21-developer/`.split(`,`),hours:22},{slug:`system-design`,name:`System Design`,description:`A step-by-step path to learn system design: how requests travel, scaling, databases, caching and queues, consistency, then classic design problems and interview practice.`,level:`Intermediate`,prerequisites:`You can build a small web app with a database.`,accentClassName:`bg-emerald-500`,stepHrefs:[`/blog/essentials/what-happens-when-you-type-a-url/`,`/blog/essentials/latency-numbers-every-engineer-should-know/`,`/blog/essentials/vertical-vs-horizontal-scaling/`,`/blog/essentials/rest-api-design-best-practices/`,`/blog/essentials/sql-vs-nosql/`,`/blog/essentials/database-indexes-explained/`,`/blog/essentials/replication-and-sharding-explained/`,`/blog/essentials/scale-database-vertically-or-horizontally/`,`/interview/databases-jpa/`,`/blog/essentials/load-balancers-explained/`,`/blog/essentials/http-caching-explained/`,`/blog/system-design/caching-without-stale-data/`,`/blog/essentials/message-queues-explained/`,`/blog/system-design/rate-limiter/`,`/blog/essentials/cap-theorem-and-consistency-models/`,`/blog/system-design/prevent-overselling/`,`/blog/system-design/idempotent-order-api/`,`/blog/system-design/url-shortener/`,`/blog/system-design/notification-system/`,`/blog/system-design/news-feed/`,`/blog/essentials/how-to-approach-a-system-design-interview/`,`/interview/system-design/`],hours:13}],stepId:`latency-numbers-every-engineer-should-know`,html:`<p>Most design decisions come down to one question: is this fast enough, and does it fit? You can&#39;t answer it without a feel for how long things take and how much data moves. This guide gives you that feel, and a way to estimate a system&#39;s size in two minutes.</p>
<h2 id="latency-vs-throughput">Latency vs Throughput</h2>
<ul>
<li><strong>Latency</strong> is how long one thing takes: a request answered in 80 ms.</li>
<li><strong>Throughput</strong> is how many things get done per second: 5,000 requests per second.</li>
</ul>
<p>They are related but different. A highway has the same travel time (latency) with one lane or six, but six lanes carry more cars (throughput). Adding servers usually raises throughput; making one request faster needs less work per request, a cache, or a shorter distance.</p>
<h2 id="the-numbers">The Numbers</h2>
<p>Exact values depend on the hardware, so remember the <strong>orders of magnitude</strong>, not the digits:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Operation</th>
<th>Roughly</th>
</tr>
</thead>
<tbody><tr>
<td>Read from CPU cache</td>
<td>1 ns</td>
</tr>
<tr>
<td>Read from main memory (RAM)</td>
<td>100 ns</td>
</tr>
<tr>
<td>Read 1 MB sequentially from memory</td>
<td>10 µs</td>
</tr>
<tr>
<td>Random read from an SSD</td>
<td>20–100 µs</td>
</tr>
<tr>
<td>Round trip inside one data center</td>
<td>0.5 ms</td>
</tr>
<tr>
<td>Read 1 MB sequentially from an SSD</td>
<td>0.5–1 ms</td>
</tr>
<tr>
<td>Disk seek on a spinning hard drive</td>
<td>5–10 ms</td>
</tr>
<tr>
<td>Round trip between continents</td>
<td>100–150 ms</td>
</tr>
</tbody></table>
</div>
<p>What they tell you:</p>
<ul>
<li><strong>Memory is about 1,000 times faster than an SSD</strong>, and an SSD is much faster than a network call to another continent. That&#39;s why caches live in memory.</li>
<li><strong>A call inside the data center costs about half a millisecond.</strong> A page that makes 50 sequential calls to other services spends 25 ms just waiting, before any work.</li>
<li><strong>Distance is physics.</strong> Light in fiber needs about 70 ms to cross the Atlantic and back. Only moving the data closer, with a CDN or a second region, makes that faster.</li>
</ul>
<h2 id="percentiles-not-averages">Percentiles, Not Averages</h2>
<p>An average hides the slow requests. Measure <strong>percentiles</strong> instead:</p>
<ul>
<li><strong>p50</strong> (median): half the requests are faster.</li>
<li><strong>p99</strong>: 99% are faster, 1% are slower.</li>
</ul>
<p>If one page calls 100 backends in parallel, it waits for the slowest one, so almost every page view hits some backend&#39;s p99. That&#39;s why big systems care about <strong>tail latency</strong>, and why &quot;fast on average&quot; isn&#39;t enough.</p>
<h2 id="back-of-the-envelope-estimates">Back-of-the-Envelope Estimates</h2>
<p>Before designing anything, estimate the load. Round hard: you want the order of magnitude.</p>
<p>Useful shortcuts:</p>
<ul>
<li>A day has about <strong>100,000 seconds</strong> (86,400).</li>
<li>1 request per second is about 100,000 a day, and <strong>2.5 million a month</strong>.</li>
<li>Peak traffic is often <strong>2 to 3 times</strong> the average.</li>
</ul>
<h3 id="example-a-photo-sharing-app">Example: A Photo-Sharing App</h3>
<p>Say 10 million users are active daily, each views 50 photos and uploads 1 photo a day.</p>
<ul>
<li><strong>Reads:</strong> 10 M × 50 = 500 M views a day ÷ 100,000 s = <strong>5,000 reads per second</strong>, about 15,000 at peak.</li>
<li><strong>Writes:</strong> 10 M uploads a day = <strong>100 writes per second</strong>. A read-heavy system: caching will matter more than write speed.</li>
<li><strong>Storage:</strong> 10 M photos × 500 KB = <strong>5 TB a day</strong>, about <strong>1.8 PB a year</strong>. That&#39;s object storage, not a database column.</li>
<li><strong>Bandwidth:</strong> 5,000 views/s × 500 KB = <strong>2.5 GB/s</strong> out. A CDN has to serve most of it.</li>
</ul>
<p>Four lines of math, and you already know the design needs a CDN, object storage and caches.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Ignoring peaks.</strong> Systems fall over at the Monday 9 a.m. spike, not at the daily average.</li>
<li><strong>Mixing bits and bytes.</strong> Network speeds are in bits: a 1 Gbit/s link moves about 125 MB/s.</li>
<li><strong>Forgetting replication.</strong> Three copies of the data triple the storage.</li>
<li><strong>Being too precise.</strong> &quot;About 5,000 per second&quot; is the right answer; &quot;5,787&quot; wastes interview time.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Latency is the time for one operation; throughput is how many per second.</li>
<li>Memory is nanoseconds, SSDs are microseconds, networks are milliseconds, other continents are about 100 ms.</li>
<li>Measure p99, not averages: users feel the slow tail.</li>
<li>Estimate with round numbers: 100,000 seconds a day, peaks 2–3× the average.</li>
<li>Let the estimate drive the design: reads vs writes, storage size and bandwidth.</li>
</ol>
`})})}));