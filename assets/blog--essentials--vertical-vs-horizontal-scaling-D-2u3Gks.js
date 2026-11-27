import{C as e,S as t,t as n,x as r}from"./LoaderHider-BzNS1_6s.js";import{t as i}from"./BlogArticlePage-jEs3xYuc.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Scaling Explained: Vertical vs Horizontal, and Stateless Servers`,description:`Your app is getting slow under load. Should you buy a bigger server or add more servers? Learn vertical and horizontal scaling, why stateless servers make scaling easy, and where sessions and files should go instead.`,date:`2026-11-24`,urlPath:`/blog/essentials/vertical-vs-horizontal-scaling/`,html:`<p>Your app works fine for 100 users. At 10,000, pages slow down and the CPU sits at 100%. There are two ways to handle more load, and one design rule that makes the better way possible.</p>
<h2 id="vertical-scaling-a-bigger-machine">Vertical Scaling: A Bigger Machine</h2>
<p><strong>Scaling up</strong> means giving the server more CPU, memory or faster disks.</p>
<ul>
<li><strong>Simple:</strong> no code changes, often just a restart on a larger instance.</li>
<li><strong>Limited:</strong> the biggest machine you can buy has a ceiling, and the price grows faster than the power.</li>
<li><strong>Fragile:</strong> it&#39;s still one machine. When it fails or restarts for an update, everything is down.</li>
</ul>
<p>Vertical scaling is a good first step, and often the right one for databases, which are hard to split. But it doesn&#39;t take you far.</p>
<h2 id="horizontal-scaling-more-machines">Horizontal Scaling: More Machines</h2>
<p><strong>Scaling out</strong> means running several copies of the server behind a load balancer, which spreads the requests between them.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>              ┌─ server 1</span></span>
<span class="line"><span>users ─ load ─┼─ server 2</span></span>
<span class="line"><span>      balancer└─ server 3</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><strong>Nearly no ceiling:</strong> need more capacity? Add servers.</li>
<li><strong>Resilient:</strong> if one server dies, the others keep serving.</li>
<li><strong>Elastic:</strong> in the cloud, auto scaling adds servers at peak and removes them at night.</li>
</ul>
<p>The catch: it only works if any server can answer any request. That&#39;s what &quot;stateless&quot; means.</p>
<h2 id="stateless-servers">Stateless Servers</h2>
<p>A <strong>stateful</strong> server keeps something about the user in its own memory or disk: a login session, a shopping cart, an uploaded file. The next request has to come back to the same server, or that data is missing.</p>
<p>A <strong>stateless</strong> server keeps nothing between requests. Everything it needs comes with the request or from a shared store. Then:</p>
<ul>
<li>the load balancer can send each request anywhere,</li>
<li>a server can be added, restarted or removed at any time,</li>
<li>a crash loses nothing but the requests in progress.</li>
</ul>
<h3 id="where-the-state-goes-instead">Where the State Goes Instead</h3>
<div data-table-scroll><table>
<thead>
<tr>
<th>State</th>
<th>Stateful (avoid)</th>
<th>Stateless (prefer)</th>
</tr>
</thead>
<tbody><tr>
<td>Login session</td>
<td>In the server&#39;s memory</td>
<td>In Redis, or a signed token (like a JWT)</td>
</tr>
<tr>
<td>Shopping cart</td>
<td>In the server&#39;s memory</td>
<td>In the database or Redis</td>
</tr>
<tr>
<td>Uploaded files</td>
<td>On the server&#39;s disk</td>
<td>In object storage, like S3</td>
</tr>
<tr>
<td>Cache</td>
<td>Only in local memory</td>
<td>A shared cache (Redis), local cache as extra</td>
</tr>
<tr>
<td>Scheduled jobs</td>
<td>A timer in every server</td>
<td>A job queue, or one scheduler</td>
</tr>
</tbody></table>
</div>
<h3 id="what-about-sticky-sessions">What About Sticky Sessions?</h3>
<p>A load balancer can send each user back to the same server (&quot;sticky sessions&quot;). It&#39;s a quick fix for a stateful app, but it brings the problems back: uneven load, and lost sessions when that server dies. Treat it as a stopgap, not a design.</p>
<h2 id="where-scaling-gets-hard-the-data">Where Scaling Gets Hard: The Data</h2>
<p>Stateless servers scale easily because they push the state elsewhere, usually to the database. So the database becomes the bottleneck. The next tools are:</p>
<ol>
<li><strong>Caching</strong> frequent reads in memory.</li>
<li><strong>Read replicas</strong> that serve reads while one primary takes writes.</li>
<li><strong>Sharding</strong> that splits the data over several databases.</li>
</ol>
<p>Each one is more complex than the last, so use them in that order and only when the numbers say you need to.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Vertical scaling (a bigger machine) is simple but limited and still a single point of failure.</li>
<li>Horizontal scaling (more machines behind a load balancer) has almost no ceiling and survives failures.</li>
<li>Horizontal scaling needs stateless servers: no sessions, carts or files kept on one server.</li>
<li>Put state in shared stores: Redis, the database, object storage.</li>
<li>After the servers, the database is the bottleneck: cache, then replicas, then shards.</li>
</ol>
`,headings:[{id:`vertical-scaling-a-bigger-machine`,text:`Vertical Scaling: A Bigger Machine`},{id:`horizontal-scaling-more-machines`,text:`Horizontal Scaling: More Machines`},{id:`stateless-servers`,text:`Stateless Servers`},{id:`where-scaling-gets-hard-the-data`,text:`Where Scaling Gets Hard: The Data`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Securing a Spring Boot API: Authentication Basics`,description:`Protect a Spring Boot REST API with Spring Security. Authentication vs authorization, a SecurityFilterChain with public and protected endpoints, roles, password hashing, HTTP Basic, stateless APIs and CSRF, JWT tokens, and testing it all.`,date:`2026-11-24`,urlPath:`/blog/essentials/securing-a-spring-boot-api/`},{title:`SQL vs NoSQL: How to Choose a Database`,description:`Relational, document, key-value, wide-column and graph databases, what each is good at, and a simple way to choose. Spoiler, PostgreSQL is the right default more often than you'd think.`,date:`2026-11-24`,urlPath:`/blog/essentials/sql-vs-nosql/`},{title:`State in React: useState and Re-renders`,description:`Why changing a variable doesn't update the screen, and how state does. useState, re-renders, the state snapshot and functional updates, updating objects and arrays without mutating them, derived values, and lifting state up.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-state-usestate/`},{title:`Testing React Components with Testing Library`,description:`Test what users see, not how components are built. Set up Vitest and React Testing Library, find elements by role and label, simulate clicks and typing with user-event, test async data with findBy, mock fetch, and avoid the common mistakes.`,date:`2026-11-24`,urlPath:`/blog/essentials/testing-react-components/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));