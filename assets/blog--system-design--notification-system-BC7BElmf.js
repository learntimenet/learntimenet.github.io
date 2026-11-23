import{C as e,S as t,t as n,w as r}from"./LoaderHider-DU6kZ_cW.js";import{t as i}from"./BlogArticlePage-DVoZjRgD.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Design a Notification System`,description:`Send push, email and SMS notifications for every service in a company, reliably and without spamming users. Queues per channel, retries without duplicates, user preferences, bursts of millions, and priorities.`,date:`2026-11-21`,urlPath:`/blog/system-design/notification-system/`,html:`<p>A design question that tests queues, retries and good manners:</p>
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
`,headings:[{id:`the-numbers-first`,text:`The Numbers First`},{id:`the-naive-version`,text:`The Naive Version`},{id:`the-design`,text:`The Design`},{id:`retries-without-duplicates`,text:`Retries Without Duplicates`},{id:`priorities`,text:`Priorities`},{id:`respecting-users`,text:`Respecting Users`},{id:`every-failure-and-what-happens`,text:`Every Failure, and What Happens`},{id:`details-interviewers-ask-about`,text:`Details Interviewers Ask About`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Design a URL Shortener`,description:`Turn long links into short codes and redirect millions of clicks a day, fast. Generate unique codes without collisions, cache the hot links, count clicks without slowing redirects, and choose between 301 and 302.`,date:`2026-11-21`,urlPath:`/blog/system-design/url-shortener/`},{title:`Design a News Feed`,description:`Show each user the latest posts from the people they follow, in milliseconds, for 200 million users. Fan-out on write vs fan-out on read, the celebrity problem, feed caches in Redis, ranking and pagination.`,date:`2026-11-20`,urlPath:`/blog/system-design/news-feed/`},{title:`Add a Cache Without Serving Stale Data`,description:`A cache makes a slow endpoint fast, until it serves an old price or melts the database when it empties. Learn cache-aside, why you delete instead of update, and how to stop stampedes, penetration and avalanches.`,date:`2026-11-16`,urlPath:`/blog/system-design/caching-without-stale-data/`},{title:`Design a Rate Limiter for an API`,description:`Allow each client 100 requests a minute, across many servers, without letting bursts through or slowing every request down. Compare fixed windows, sliding windows and token buckets, and build one on Redis.`,date:`2026-11-16`,urlPath:`/blog/system-design/rate-limiter/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Kafka and messaging interview questions`,description:`Practice Kafka and messaging interview questions on Kafka vs RabbitMQ, consumer crashes and offsets, message ordering, and idempotency, with clear answers.`,urlPath:`/interview/kafka/`}]}})})}));