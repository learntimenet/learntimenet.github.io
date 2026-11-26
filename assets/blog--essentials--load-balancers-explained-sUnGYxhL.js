import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cnf8ShMN.js";import{t as i}from"./BlogArticlePage-BntAd276.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Load Balancers Explained`,description:`How a load balancer spreads traffic over servers. Round robin, least connections and hashing, health checks, layer 4 vs layer 7, TLS termination, and how to avoid making the load balancer the single point of failure.`,date:`2026-11-24`,urlPath:`/blog/essentials/load-balancers-explained/`,html:`<p>Once you run more than one server, something has to decide which server answers each request. That&#39;s the load balancer. It looks like a simple box in diagrams, but its choices affect speed, reliability and even security.</p>
<h2 id="what-it-does">What It Does</h2>
<p>A load balancer sits between users and your servers. Users connect to one address, and the load balancer forwards each request to one of the healthy servers behind it.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>                    ┌──► server 1</span></span>
<span class="line"><span>users ──► load ─────┼──► server 2</span></span>
<span class="line"><span>          balancer  └──► server 3 (down, skipped)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It gives you three things:</p>
<ol>
<li><strong>Capacity:</strong> the load is spread, so you add servers to handle more traffic.</li>
<li><strong>Availability:</strong> a dead server is taken out of rotation automatically.</li>
<li><strong>Zero-downtime deploys:</strong> update servers one at a time while the others serve.</li>
</ol>
<h2 id="choosing-a-server-the-algorithms">Choosing a Server: The Algorithms</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Algorithm</th>
<th>How it picks</th>
<th>Good for</th>
</tr>
</thead>
<tbody><tr>
<td>Round robin</td>
<td>Each server in turn</td>
<td>Similar servers, similar requests</td>
</tr>
<tr>
<td>Weighted round robin</td>
<td>In turn, more often for bigger servers</td>
<td>Servers of different sizes</td>
</tr>
<tr>
<td>Least connections</td>
<td>The server with the fewest open connections</td>
<td>Requests of very different lengths</td>
</tr>
<tr>
<td>IP or key hash</td>
<td>Always the same server for the same client/key</td>
<td>Caches per server, sticky routing</td>
</tr>
<tr>
<td>Random of two</td>
<td>Pick two at random, use the less busy one</td>
<td>Large fleets; simple and effective</td>
</tr>
</tbody></table>
</div>
<p>Round robin is the usual default. If some requests take 10 ms and others 10 seconds, least connections keeps slow requests from piling up on one server.</p>
<h2 id="health-checks">Health Checks</h2>
<p>The load balancer regularly calls each server, for example <code>GET /health</code> every 5 seconds. A server that fails a few checks in a row is taken out; when it passes again, it comes back.</p>
<p>Make the health endpoint honest but cheap: check that the app runs and can reach what it can&#39;t work without. Don&#39;t fail it because an optional service is slow, or one slow dependency can take every server out at once.</p>
<h2 id="layer-4-vs-layer-7">Layer 4 vs Layer 7</h2>
<p>Load balancers work at one of two levels of the network:</p>
<ul>
<li><strong>Layer 4 (transport):</strong> sees only IP addresses and ports, and forwards TCP or UDP connections. Very fast, and it doesn&#39;t care what protocol runs inside.</li>
<li><strong>Layer 7 (application):</strong> understands HTTP. It can route by path or header (<code>/api/*</code> to the API servers, <code>/images/*</code> to the image servers), add headers, rewrite URLs, and retry a failed request on another server.</li>
</ul>
<p>Most web apps use a layer 7 load balancer, like Nginx, HAProxy, Envoy, or a cloud load balancer such as AWS ALB.</p>
<h2 id="tls-termination">TLS Termination</h2>
<p>HTTPS needs encryption and certificates. The load balancer usually <strong>terminates TLS</strong>: it decrypts the request, and forwards it to the servers inside the private network. That puts certificates in one place and saves the servers the work. When the internal network must also be encrypted, it can open a new TLS connection to each server.</p>
<h2 id="sessions-and-stickiness">Sessions and Stickiness</h2>
<p>If servers keep sessions in memory, a user must always reach the same server (&quot;sticky sessions&quot;), usually with a cookie. It works, but uneven load and lost sessions when a server dies follow. The better fix is stateless servers, with sessions in a shared store like Redis.</p>
<h2 id="the-load-balancer-must-not-fail">The Load Balancer Must Not Fail</h2>
<p>One load balancer in front of everything is a new single point of failure. Common answers:</p>
<ul>
<li><strong>A pair</strong> of load balancers, with a floating IP that moves to the standby if the active one dies.</li>
<li><strong>A managed cloud load balancer</strong>, which is redundant across zones by design.</li>
<li><strong>DNS</strong> that returns several load balancer addresses, often in several regions.</li>
</ul>
<h2 id="load-balancer-vs-reverse-proxy-vs-api-gateway">Load Balancer vs Reverse Proxy vs API Gateway</h2>
<ul>
<li>A <strong>reverse proxy</strong> forwards requests for servers, with caching, compression or TLS. A load balancer is a reverse proxy that also spreads load.</li>
<li>An <strong>API gateway</strong> is a layer 7 proxy with API concerns on top: authentication, rate limiting, request validation and routing to many services.</li>
</ul>
<p>In practice the same tool, like Nginx or Envoy, often plays all three roles.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>A load balancer spreads requests over servers and skips the unhealthy ones.</li>
<li>Round robin is the default; least connections helps when request times vary a lot.</li>
<li>Health checks take failing servers out and bring them back.</li>
<li>Layer 4 forwards connections; layer 7 understands HTTP and can route by path.</li>
<li>Terminate TLS at the load balancer, keep servers stateless, and make the load balancer itself redundant.</li>
</ol>
`,headings:[{id:`what-it-does`,text:`What It Does`},{id:`choosing-a-server-the-algorithms`,text:`Choosing a Server: The Algorithms`},{id:`health-checks`,text:`Health Checks`},{id:`layer-4-vs-layer-7`,text:`Layer 4 vs Layer 7`},{id:`tls-termination`,text:`TLS Termination`},{id:`sessions-and-stickiness`,text:`Sessions and Stickiness`},{id:`the-load-balancer-must-not-fail`,text:`The Load Balancer Must Not Fail`},{id:`load-balancer-vs-reverse-proxy-vs-api-gateway`,text:`Load Balancer vs Reverse Proxy vs API Gateway`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Maven and Gradle Basics for Java Projects`,description:`What a build tool does for a Java project, and how to use the two most common ones. The standard folder layout, pom.xml and build.gradle.kts, dependencies and scopes, the commands you'll run every day, and the wrapper.`,date:`2026-11-24`,urlPath:`/blog/essentials/maven-and-gradle-basics/`},{title:`Message Queues and Event Streaming Explained`,description:`Why systems put a queue between services. Queues vs event streams like Kafka, at-least-once delivery and idempotent consumers, retries and dead-letter queues, ordering, and backpressure.`,date:`2026-11-24`,urlPath:`/blog/essentials/message-queues-explained/`},{title:`Modern JavaScript for React: Arrow Functions, Destructuring, Spread and Modules`,description:`The JavaScript syntax on every line of React code, explained with before and after examples. Arrow functions, destructuring, spread and rest, immutable updates of arrays and objects, ?? and ?., and import and export.`,date:`2026-11-24`,urlPath:`/blog/essentials/modern-javascript-for-react/`},{title:`Promises and async/await Explained`,description:`How JavaScript waits for data without freezing the page. What a promise is, then and catch, async and await, error handling with try and catch, running requests in parallel with Promise.all, and the mistakes everyone makes.`,date:`2026-11-24`,urlPath:`/blog/essentials/promises-and-async-await-explained/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`TCP handshake visualizer`,description:`Watch a client and a server open a TCP connection with the three-way handshake, exchange data with sequence numbers, and close it with FIN and ACK.`,urlPath:`/visualizers/tcp-handshake/`}]}})})}));