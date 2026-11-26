import{C as e,S as t,t as n,x as r}from"./LoaderHider-C1Z7ldQE.js";import{t as i}from"./BlogArticlePage-CqnXwq4H.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Message Queues and Event Streaming Explained`,description:`Why systems put a queue between services. Queues vs event streams like Kafka, at-least-once delivery and idempotent consumers, retries and dead-letter queues, ordering, and backpressure.`,date:`2026-11-24`,urlPath:`/blog/essentials/message-queues-explained/`,html:`<p>A user signs up, and your app must create the account, send a welcome email, resize their photo and update analytics. If the sign-up request does all of that, it&#39;s slow, and it fails when the email service is down. A message queue lets the request do the essential part and hand the rest off.</p>
<h2 id="what-a-queue-does">What a Queue Does</h2>
<p>A <strong>producer</strong> puts a message on a queue. A <strong>consumer</strong> takes it off and does the work, later and separately.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>sign-up ──► [ queue: "user-created" ] ──► email worker</span></span>
<span class="line"><span>                                     └──► photo worker</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>That gives you:</p>
<ul>
<li><strong>Faster responses:</strong> the sign-up answers as soon as the account exists.</li>
<li><strong>Resilience:</strong> if the email service is down, messages wait in the queue instead of failing the sign-up.</li>
<li><strong>Absorbing bursts:</strong> a flood of 10,000 orders a minute is processed at the pace the workers can handle.</li>
<li><strong>Independent scaling:</strong> add more photo workers without touching anything else.</li>
</ul>
<h2 id="queues-vs-event-streams">Queues vs Event Streams</h2>
<p>There are two main models, and they behave differently.</p>
<h3 id="message-queues-rabbitmq-amazon-sqs">Message Queues (RabbitMQ, Amazon SQS)</h3>
<ul>
<li>A message goes to <strong>one</strong> consumer and is <strong>removed</strong> once it&#39;s acknowledged.</li>
<li>Several workers share the load of one queue.</li>
<li>Good for <strong>tasks</strong>: send this email, resize this image.</li>
</ul>
<h3 id="event-streams-kafka-amazon-kinesis-redis-streams">Event Streams (Kafka, Amazon Kinesis, Redis Streams)</h3>
<ul>
<li>Messages are appended to a <strong>log</strong> and <strong>kept</strong> for a set time, like 7 days.</li>
<li>Each consumer group reads at its own position (offset), and several groups read the same events independently.</li>
<li>A topic is split into <strong>partitions</strong>; order is kept within a partition, and each partition is read by one consumer of a group.</li>
<li>Good for <strong>events</strong> many systems care about, and for replaying history after a bug fix.</li>
</ul>
<div data-table-scroll><table>
<thead>
<tr>
<th>Question</th>
<th>Queue (RabbitMQ, SQS)</th>
<th>Stream (Kafka)</th>
</tr>
</thead>
<tbody><tr>
<td>After reading, the message is</td>
<td>Removed</td>
<td>Kept, until retention ends</td>
</tr>
<tr>
<td>Several kinds of consumers</td>
<td>One queue each</td>
<td>One topic, many groups</td>
</tr>
<tr>
<td>Replay old messages</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Ordering</td>
<td>Mostly per queue</td>
<td>Per partition</td>
</tr>
</tbody></table>
</div>
<h2 id="delivery-guarantees">Delivery Guarantees</h2>
<p>Networks fail, and consumers crash halfway. So a broker gives one of these promises:</p>
<ul>
<li><strong>At most once:</strong> a message may be lost, but never processed twice.</li>
<li><strong>At least once:</strong> a message is never lost, but may be processed <strong>twice</strong>, for example if the consumer crashes after doing the work but before acknowledging it.</li>
<li><strong>Exactly once:</strong> possible within some systems (like Kafka transactions), but across real side effects, such as sending an email, you still end up needing the next point.</li>
</ul>
<p>Most systems choose <strong>at least once</strong>, and make consumers <strong>idempotent</strong>: processing the same message twice has the same effect as once. Store the IDs of processed messages, or make the operation naturally repeatable, like &quot;set status to paid&quot; instead of &quot;add 10 to the balance&quot;.</p>
<h2 id="retries-and-dead-letter-queues">Retries and Dead-Letter Queues</h2>
<p>When processing fails:</p>
<ol>
<li><strong>Retry</strong> with a growing delay (exponential backoff), since many failures are temporary.</li>
<li>After a few attempts, move the message to a <strong>dead-letter queue</strong> (DLQ), so one bad message doesn&#39;t block everything behind it.</li>
<li><strong>Alert</strong> on the DLQ, fix the cause, and replay the messages.</li>
</ol>
<h2 id="ordering">Ordering</h2>
<p>Strict order across a whole system is expensive. Usually you only need order <strong>per entity</strong>: all events of one order, in sequence. With Kafka, use the order ID as the message key, so all its events land in the same partition, in order.</p>
<h2 id="backpressure">Backpressure</h2>
<p>If producers are faster than consumers, the queue grows. Watch the <strong>queue length</strong> or <strong>consumer lag</strong>: growing all the time means you need more consumers, or faster ones. A queue absorbs bursts; it doesn&#39;t fix a system that&#39;s always too slow.</p>
<h2 id="when-not-to-use-a-queue">When Not to Use a Queue</h2>
<p>If the user needs the result right away, like &quot;is this password correct?&quot;, a queue only adds delay. Queues are for work that can happen a moment later.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>A queue decouples producers from consumers: faster responses, resilience and burst absorption.</li>
<li>Queues (RabbitMQ, SQS) remove messages once handled; streams (Kafka) keep them and let many groups read and replay.</li>
<li>Most systems deliver at least once, so make consumers idempotent.</li>
<li>Retry with backoff, then send failing messages to a dead-letter queue.</li>
<li>Keep order per entity with a message key, and watch queue length or consumer lag.</li>
</ol>
`,headings:[{id:`what-a-queue-does`,text:`What a Queue Does`},{id:`queues-vs-event-streams`,text:`Queues vs Event Streams`},{id:`delivery-guarantees`,text:`Delivery Guarantees`},{id:`retries-and-dead-letter-queues`,text:`Retries and Dead-Letter Queues`},{id:`ordering`,text:`Ordering`},{id:`backpressure`,text:`Backpressure`},{id:`when-not-to-use-a-queue`,text:`When Not to Use a Queue`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Modern JavaScript for React: Arrow Functions, Destructuring, Spread and Modules`,description:`The JavaScript syntax on every line of React code, explained with before and after examples. Arrow functions, destructuring, spread and rest, immutable updates of arrays and objects, ?? and ?., and import and export.`,date:`2026-11-24`,urlPath:`/blog/essentials/modern-javascript-for-react/`},{title:`Promises and async/await Explained`,description:`How JavaScript waits for data without freezing the page. What a promise is, then and catch, async and await, error handling with try and catch, running requests in parallel with Promise.all, and the mistakes everyone makes.`,date:`2026-11-24`,urlPath:`/blog/essentials/promises-and-async-await-explained/`},{title:`React Components, JSX and Props Explained`,description:`How a React page is built from components. What JSX is and turns into, writing components, passing data down with props, children, rendering lists with keys, and conditional rendering.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-components-jsx-and-props/`},{title:`Records, Enums and Sealed Classes in Modern Java`,description:`The short, safe ways modern Java models data. Records for immutable data with validation, enums with fields and methods, sealed interfaces for a closed set of types, and record patterns in switch.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-records-enums-sealed-classes/`}],relatedPages:[{title:`Kafka and messaging interview questions`,description:`Practice Kafka and messaging interview questions on Kafka vs RabbitMQ, consumer crashes and offsets, message ordering, and idempotency, with clear answers.`,urlPath:`/interview/kafka/`},{title:`Kafka Quiz`,description:`Test your Apache Kafka knowledge: topics, partitions, offsets, consumer groups, ordering, replication, delivery guarantees and retention.`,urlPath:`/quiz/kafka/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));