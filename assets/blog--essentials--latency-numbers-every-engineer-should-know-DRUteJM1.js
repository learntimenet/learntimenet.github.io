import{C as e,S as t,t as n,x as r}from"./LoaderHider-DvbO1pKo.js";import{t as i}from"./BlogArticlePage-B9Q6w81L.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Latency, Throughput and the Numbers Every Engineer Should Know`,description:`How fast memory, disks and networks really are, the difference between latency and throughput, and how to estimate the load of a system on the back of an envelope before you design it.`,date:`2026-11-24`,urlPath:`/blog/essentials/latency-numbers-every-engineer-should-know/`,html:`<p>Most design decisions come down to one question: is this fast enough, and does it fit? You can&#39;t answer it without a feel for how long things take and how much data moves. This guide gives you that feel, and a way to estimate a system&#39;s size in two minutes.</p>
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
`,headings:[{id:`latency-vs-throughput`,text:`Latency vs Throughput`},{id:`the-numbers`,text:`The Numbers`},{id:`percentiles-not-averages`,text:`Percentiles, Not Averages`},{id:`back-of-the-envelope-estimates`,text:`Back-of-the-Envelope Estimates`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Load Balancers Explained`,description:`How a load balancer spreads traffic over servers. Round robin, least connections and hashing, health checks, layer 4 vs layer 7, TLS termination, and how to avoid making the load balancer the single point of failure.`,date:`2026-11-24`,urlPath:`/blog/essentials/load-balancers-explained/`},{title:`Maven and Gradle Basics for Java Projects`,description:`What a build tool does for a Java project, and how to use the two most common ones. The standard folder layout, pom.xml and build.gradle.kts, dependencies and scopes, the commands you'll run every day, and the wrapper.`,date:`2026-11-24`,urlPath:`/blog/essentials/maven-and-gradle-basics/`},{title:`Message Queues and Event Streaming Explained`,description:`Why systems put a queue between services. Queues vs event streams like Kafka, at-least-once delivery and idempotent consumers, retries and dead-letter queues, ordering, and backpressure.`,date:`2026-11-24`,urlPath:`/blog/essentials/message-queues-explained/`},{title:`Modern JavaScript for React: Arrow Functions, Destructuring, Spread and Modules`,description:`The JavaScript syntax on every line of React code, explained with before and after examples. Arrow functions, destructuring, spread and rest, immutable updates of arrays and objects, ?? and ?., and import and export.`,date:`2026-11-24`,urlPath:`/blog/essentials/modern-javascript-for-react/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));