import{C as e,S as t,t as n,x as r}from"./LoaderHider-5mlYNUIu.js";import{t as i}from"./BlogArticlePage-BQUfwQq6.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`The CAP Theorem and Consistency Models, Explained`,description:`What the CAP theorem really says, why "pick two of three" is misleading, and the consistency models you'll actually choose between, from strong consistency to eventual consistency, with PACELC.`,date:`2026-11-24`,urlPath:`/blog/essentials/cap-theorem-and-consistency-models/`,html:`<p>Store data on more than one machine and you face a question a single database never asks: when machines disagree, which answer is right? The CAP theorem names the trade-off, and consistency models describe the choices.</p>
<h2 id="the-cap-theorem">The CAP Theorem</h2>
<p>The three letters:</p>
<ul>
<li><strong>Consistency (C):</strong> every read sees the latest write, as if there were one copy of the data.</li>
<li><strong>Availability (A):</strong> every request to a working node gets an answer, not an error.</li>
<li><strong>Partition tolerance (P):</strong> the system keeps working when the network between nodes breaks.</li>
</ul>
<p>The theorem says: <strong>when the network is partitioned, you must choose between consistency and availability.</strong></p>
<h3 id="why-pick-two-is-misleading">Why &quot;Pick Two&quot; Is Misleading</h3>
<p>You can&#39;t choose to skip partitions: networks do fail, so every distributed system must tolerate them. The real choice is only about <strong>what happens during a partition</strong>:</p>
<ul>
<li><strong>CP:</strong> refuse some requests (return an error or wait) rather than risk stale or conflicting data.</li>
<li><strong>AP:</strong> keep answering on both sides, accepting that the answers may be stale or conflict, and reconcile later.</li>
</ul>
<p>When the network is fine, a good system gives you both.</p>
<h3 id="an-example">An Example</h3>
<p>Two data centers, each with a copy of an account balance of $100. The link between them breaks. A withdrawal of $80 arrives in each one.</p>
<ul>
<li>A <strong>CP</strong> bank refuses the withdrawal in one data center (or both) until the link is back. Some users see errors, but the account never goes below zero.</li>
<li>An <strong>AP</strong> shopping cart accepts additions on both sides and merges the carts later. Nobody sees an error; a removed item might reappear.</li>
</ul>
<p>Money, stock and bookings usually want CP. Carts, likes, view counts and feeds are usually fine with AP.</p>
<h2 id="pacelc-the-trade-off-without-failures">PACELC: The Trade-Off Without Failures</h2>
<p>CAP only talks about partitions. <strong>PACELC</strong> adds the everyday case:</p>
<blockquote>
<p>If there is a <strong>P</strong>artition, choose <strong>A</strong> or <strong>C</strong>. <strong>E</strong>lse, choose <strong>L</strong>atency or <strong>C</strong>onsistency.</p>
</blockquote>
<p>Even with a healthy network, keeping replicas strongly consistent means waiting for other machines on each write. So systems that favor low latency often accept weaker consistency all the time, not just during failures.</p>
<h2 id="consistency-models">Consistency Models</h2>
<p>&quot;Consistent&quot; isn&#39;t on or off. From strongest to weakest:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Model</th>
<th>What a read guarantees</th>
</tr>
</thead>
<tbody><tr>
<td>Strong (linearizable)</td>
<td>The latest write, as if there were one copy</td>
</tr>
<tr>
<td>Sequential</td>
<td>Everyone sees writes in the same order, maybe a bit late</td>
</tr>
<tr>
<td>Causal</td>
<td>If B was caused by A (a reply to a post), everyone sees A first</td>
</tr>
<tr>
<td>Read your own writes</td>
<td>You always see your own changes, others may see them later</td>
</tr>
<tr>
<td>Monotonic reads</td>
<td>You never see data go back in time</td>
</tr>
<tr>
<td>Eventual</td>
<td>If writes stop, all copies end up the same, some time later</td>
</tr>
</tbody></table>
</div>
<p>The weaker models are cheaper and faster. Many apps mix them: strong consistency for payments, read-your-own-writes for profiles, eventual consistency for like counts.</p>
<h2 id="how-systems-get-strong-consistency">How Systems Get Strong Consistency</h2>
<ul>
<li><strong>A single leader</strong> for each piece of data: all writes go through it, in order.</li>
<li><strong>Quorums:</strong> with N copies, a write waits for W of them and a read asks R of them. If <strong>W + R &gt; N</strong>, every read overlaps at least one copy with the latest write. With N = 3, W = 2 and R = 2 is a common choice.</li>
<li><strong>Consensus protocols</strong> like Raft or Paxos, used by etcd, ZooKeeper and many distributed databases, to agree on one order of writes even when machines fail.</li>
</ul>
<h2 id="what-to-say-in-an-interview">What to Say in an Interview</h2>
<p>Don&#39;t just say &quot;we choose AP&quot;. Say which data needs which guarantee, and why:</p>
<blockquote>
<p>&quot;Orders and payments go to a strongly consistent database. The product catalog and the review counts are served from caches and replicas, eventually consistent, because a few seconds of staleness is fine there.&quot;</p>
</blockquote>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>CAP: during a network partition, a system must choose consistency or availability.</li>
<li>Partitions are unavoidable, so the real choice is CP or AP, and only while the network is broken.</li>
<li>PACELC adds the normal case: without failures, choose between latency and consistency.</li>
<li>Consistency is a range, from strong to eventual; read-your-own-writes and causal sit in between.</li>
<li>Choose per kind of data: strong for money and stock, eventual for counts and feeds.</li>
</ol>
`,headings:[{id:`the-cap-theorem`,text:`The CAP Theorem`},{id:`pacelc-the-trade-off-without-failures`,text:`PACELC: The Trade-Off Without Failures`},{id:`consistency-models`,text:`Consistency Models`},{id:`how-systems-get-strong-consistency`,text:`How Systems Get Strong Consistency`},{id:`what-to-say-in-an-interview`,text:`What to Say in an Interview`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`The DOM Explained: Select, Change and Listen`,description:`How JavaScript changes a web page. What the DOM is, selecting elements with querySelector, changing text, classes and attributes, creating and removing elements, listening to events, event delegation, forms, and why React exists.`,date:`2026-11-24`,urlPath:`/blog/essentials/the-dom-explained/`},{title:`TypeScript for React: Props, State and Events`,description:`Type your React components so mistakes show up in the editor. Typing props with optional values and unions, children, useState with null, event handlers, extending HTML element props, and modeling loading states with discriminated unions.`,date:`2026-11-24`,urlPath:`/blog/essentials/typescript-for-react/`},{title:`useEffect Explained, and When You Don't Need It`,description:`What useEffect is for in React, and what it isn't for. Syncing with the outside world, the dependency array, cleanup functions, why effects run twice in development, and the common effects you should replace with plain code.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-useeffect-explained/`},{title:`Build a REST API With Spring Boot, Step by Step`,description:`Build a small book API with Spring Boot 4. A controller, a service, a JPA entity and repository, validation, clear error responses and a test, then try it with curl.`,date:`2026-11-23`,urlPath:`/blog/essentials/build-a-rest-api-with-spring-boot/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Sell the Last Ticket Only Once`,description:`Thousands of people try to buy the last seats at the same moment. Learn how to never sell more than you have, with atomic updates, locks, versions and unique constraints, and how to hold a seat while the customer pays.`,urlPath:`/blog/system-design/prevent-overselling/`}]}})})}));