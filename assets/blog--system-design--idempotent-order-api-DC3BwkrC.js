import{C as e,S as t,t as n,w as r}from"./LoaderHider-UqLPXW91.js";import{t as i}from"./BlogArticlePage-BdlO_NRK.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Design an Order API That Saves Once and Emails Once`,description:`A client retries, a user double-clicks, a server crashes halfway. Learn how to design an endpoint that still creates exactly one order and sends exactly one email, with idempotency keys and the transactional outbox.`,date:`2026-11-16`,urlPath:`/blog/system-design/idempotent-order-api/`,html:`<p>Here&#39;s a classic design question, in interviews and in real projects:</p>
<blockquote>
<p>A <code>POST /orders</code> endpoint saves an order and sends a confirmation email. Each order must be saved <strong>once</strong>, and its email sent <strong>once</strong>. How do you design it?</p>
</blockquote>
<p>It sounds simple: save the order, send the email, done. But networks fail, clients retry, users double-click and servers crash at the worst moment. A naive endpoint creates duplicate orders, sends emails for orders that don&#39;t exist, or never sends the email at all.</p>
<p>This guide builds a design that holds up, one problem at a time.</p>
<h2 id="the-naive-version">The Naive Version</h2>
<p>Most endpoints start like this:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">PostMapping</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"/orders"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Order </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">create</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">RequestBody</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> CreateOrderRequest request) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Order</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> order</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orderRepository.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">save</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Order.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">from</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(request));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    emailService.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">sendConfirmation</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(order);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> order;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It works in a demo. In production, every one of these happens sooner or later:</p>
<ol>
<li><strong>The client retries.</strong> The order is saved and the response is on its way, but the mobile connection drops. The app never gets the answer, so it sends the request again. Now there are <strong>two orders and two emails</strong>.</li>
<li><strong>The user double-clicks.</strong> Two identical requests arrive a few milliseconds apart, and both create an order.</li>
<li><strong>The server crashes between the two lines.</strong> The order is saved, the email is never sent, and nothing will ever try again.</li>
<li><strong>The email goes out, then the transaction fails.</strong> If the save runs in a transaction that commits after the email (with <code>@Transactional</code> on the method, for example), a failed commit leaves the customer with a confirmation for an order that doesn&#39;t exist.</li>
</ol>
<p>Problems 1 and 2 are <strong>duplicates</strong>. Problems 3 and 4 are <strong>lost or wrong side effects</strong>. They need two different fixes.</p>
<h2 id="why-exactly-once-is-tricky">Why &quot;Exactly Once&quot; Is Tricky</h2>
<p>Over a network, a message can&#39;t be delivered exactly once. When a request times out, the client can&#39;t know whether the server never got it or got it and the answer was lost. It has two choices:</p>
<ul>
<li><strong>Don&#39;t retry</strong>, and maybe lose the order: <em>at most once</em>.</li>
<li><strong>Retry</strong>, and maybe send it twice: <em>at least once</em>.</li>
</ul>
<p>Neither is what we want. The way out is to retry (at least once) and make the second copy <strong>harmless</strong>. An operation is <strong>idempotent</strong> when doing it twice has the same effect as doing it once. So the goal isn&#39;t exactly-once <em>delivery</em>, it&#39;s exactly-once <em>effect</em>:</p>
<p><strong>At-least-once delivery + idempotent processing = exactly-once effect.</strong></p>
<p>We need this twice: between the client and the API (so retries don&#39;t create duplicate orders), and between the API and the email provider (so a crash doesn&#39;t lose or duplicate the email).</p>
<h2 id="step-1-an-idempotency-key-from-the-client">Step 1: An Idempotency Key From the Client</h2>
<p>The server can&#39;t tell a retry from a new order by looking at the body: two orders for the same items can be perfectly legitimate. So the client tells it, with a unique key per order attempt:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>POST /orders</span></span>
<span class="line"><span>Idempotency-Key: 3f1c9a2e-7b4d-4e8a-9c61-0d5f2b8e4a17</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ "customerId": 42, "items": [{ "productId": 7, "quantity": 1 }] }</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The rules for the client are simple:</p>
<ul>
<li>Generate a new key (a UUID) when the user starts checking out.</li>
<li>Send <strong>the same key</strong> on every retry of that order.</li>
<li>Generate a <strong>new key</strong> only for a new order.</li>
</ul>
<p>The server&#39;s promise: for a given key, it does the work once, and every later request with that key gets the <strong>same response</strong> as the first one, without doing anything.</p>
<p>The key must come from the client. If the server generated it, a retry after a lost response would have no way to send it back.</p>
<h2 id="step-2-store-the-key-in-the-same-transaction-as-the-order">Step 2: Store the Key in the Same Transaction as the Order</h2>
<p>The server needs to remember which keys it has seen, and what it answered. A table does the job:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> idempotency_keys</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  customer_id   </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BIGINT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">      NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  key</span><span style="color:#CF222E;--shiki-dark:#FF7B72">           TEXT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">        NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  request_hash  </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TEXT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">        NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  response_code </span><span style="color:#CF222E;--shiki-dark:#FF7B72">INT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  response_body JSONB,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  created_at    </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TIMESTAMPTZ</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT NULL</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> DEFAULT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> now</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  PRIMARY KEY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (customer_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">key</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Two details matter:</p>
<ul>
<li>The key is unique <strong>per customer</strong>, so one customer can&#39;t replay or collide with another&#39;s key.</li>
<li><code>request_hash</code> is a hash of the request body. If a client reuses a key with a <em>different</em> body, that&#39;s a bug on their side, and we should say so instead of silently returning the wrong order.</li>
</ul>
<h3 id="don-t-check-then-insert">Don&#39;t check, then insert</h3>
<p>The tempting code checks whether the key exists, and inserts it if not:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Don't: two requests can both pass the check before either inserts.</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">!</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">idempotencyKeys.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">exists</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, key)) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    idempotencyKeys.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">insert</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, key);</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    createOrder</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(request);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Two requests arriving at the same time (the double-click) both see &quot;no key&quot;, and both create an order. The check and the insert must be one atomic step, and the database&#39;s <strong>unique constraint</strong> gives us that for free. In PostgreSQL:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">INSERT INTO</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> idempotency_keys (customer_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">key</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, request_hash)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">VALUES</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (?, ?, ?)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> CONFLICT (customer_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">key</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) DO NOTHING;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If this inserts one row, we&#39;re first. If it inserts zero, the key already exists. And here is the part that makes it work under concurrency: if another transaction has inserted the same key but <strong>hasn&#39;t committed yet</strong>, PostgreSQL makes the second insert <strong>wait</strong> until the first one commits or rolls back. So the second request never sees a half-done order. MySQL behaves the same way with <code>INSERT IGNORE</code> on a unique key.</p>
<p>This relies on the default <code>READ COMMITTED</code> isolation level, where the second transaction&#39;s next query sees the row the first one just committed. Under <code>REPEATABLE READ</code> or <code>SERIALIZABLE</code>, PostgreSQL raises a serialization error instead: catch it and retry the whole request, which then finds the key.</p>
<h3 id="the-whole-endpoint-in-one-transaction">The whole endpoint in one transaction</h3>
<p>Now the key, the order and the stored response all go in one transaction:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Transactional</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> StoredResponse </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">createOrder</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customerId, String key,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                                  CreateOrderRequest request) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    String</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> hash</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> sha256</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    boolean</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> isFirst</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> idempotencyKeys.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">insertIfAbsent</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, key, hash);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">!</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">isFirst) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        IdempotencyKey</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> existing</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> idempotencyKeys.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">find</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, key);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">!</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">existing.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">requestHash</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">().</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">equals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(hash)) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            throw</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> KeyReusedException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// 422: same key, different order</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        }</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> existing.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">response</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// a retry: answer exactly as before</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Order</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> order</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">save</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Order.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">from</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, request));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    StoredResponse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> response</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> StoredResponse.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">created</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(order);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    idempotencyKeys.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">saveResponse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, key, response);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> response;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Because it&#39;s all one transaction, there&#39;s no in-between state to clean up. If anything fails before the commit, the key disappears with the order, and the client&#39;s retry starts fresh. If the commit succeeds, the key and the order exist together, and every retry gets the stored response.</p>
<h2 id="step-3-the-transactional-outbox-for-the-email">Step 3: The Transactional Outbox for the Email</h2>
<p>The order is now saved once. But where do we send the email?</p>
<ul>
<li><strong>Inside the transaction</strong>: if the commit fails after the email is sent, we&#39;ve confirmed an order that doesn&#39;t exist. You can&#39;t roll back an email.</li>
<li><strong>After the commit</strong>: if the server crashes right after committing, the email is lost forever.</li>
</ul>
<p>The problem is that the database and the email provider are two different systems, and no transaction spans both. The <strong>transactional outbox</strong> pattern fixes this: instead of sending the email, we <strong>write down that it must be sent</strong>, in the same database, in the same transaction as the order.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> outbox</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  id         UUID        </span><span style="color:#CF222E;--shiki-dark:#FF7B72">PRIMARY KEY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  type</span><span style="color:#CF222E;--shiki-dark:#FF7B72">       TEXT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">        NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  payload    JSONB       </span><span style="color:#CF222E;--shiki-dark:#FF7B72">NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TIMESTAMPTZ</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT NULL</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> DEFAULT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> now</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  sent_at    </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TIMESTAMPTZ</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  attempts   </span><span style="color:#CF222E;--shiki-dark:#FF7B72">INT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">         NOT NULL</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> DEFAULT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>One more line in the service:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">Order</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> order</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">save</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Order.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">from</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(customerId, request));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">outbox.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">save</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(OutboxMessage.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">orderConfirmation</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(order)); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// same transaction</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">StoredResponse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> response</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> StoredResponse.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">created</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(order);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Now the order and its &quot;email to send&quot; are saved together, or not at all. There&#39;s no way to have one without the other.</p>
<h2 id="step-4-a-worker-sends-what-s-in-the-outbox">Step 4: A Worker Sends What&#39;s in the Outbox</h2>
<p>A background job reads the outbox and sends the emails:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Scheduled</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">fixedDelay</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1000</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Transactional</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> sendPendingMessages</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (OutboxMessage</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> message</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> :</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> outbox.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">lockPending</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">10</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        emailClient.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">send</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(message.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toEmail</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(), message.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">());</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        outbox.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">markSent</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(message.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">());</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>lockPending</code> uses <code>SKIP LOCKED</code>, so you can run several workers, or several copies of the app, without two of them picking the same message:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, payload</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> outbox</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> sent_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">IS</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NULL</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LIMIT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 10</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FOR</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> UPDATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> SKIP</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> LOCKED;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Each worker locks the rows it takes, and the others skip them and take the next ones.</p>
<h3 id="the-last-gap-the-email-provider">The last gap: the email provider</h3>
<p>There&#39;s still one crack. The worker sends the email, then crashes before <code>markSent</code> commits. On restart, the message is still pending, and the worker sends it <strong>again</strong>.</p>
<p>The outbox gives us at-least-once delivery to the email provider, so this step needs to be idempotent too:</p>
<ul>
<li><strong>Use the provider&#39;s idempotency key.</strong> Many email and messaging APIs accept one, in a header or as a message id. Pass the outbox message id: the provider drops the second send. That&#39;s why <code>emailClient.send</code> takes <code>message.id()</code>.</li>
<li><strong>If the provider has none</strong>, you can only make the window smaller, not close it: mark the message as &quot;sending&quot; before the call, and alert on messages stuck in that state. For a confirmation email, a rare duplicate is usually acceptable. For a payment, it isn&#39;t, which is why most payment APIs support idempotency keys.</li>
</ul>
<p>Be honest about this in an interview: when a side effect leaves your system, its exactly-once guarantee depends on the receiving system supporting idempotency.</p>
<h2 id="every-failure-and-what-happens">Every Failure, and What Happens</h2>
<p>Here&#39;s the design under each failure from the start, and a few more:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>What goes wrong</th>
<th>What happens</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td>The response is lost, the client retries</td>
<td>The key exists, the stored response is returned</td>
<td>One order, one email</td>
</tr>
<tr>
<td>Double-click: two requests at once</td>
<td>The second insert waits for the first transaction, then finds the key</td>
<td>One order, one email</td>
</tr>
<tr>
<td>Crash before the commit</td>
<td>The key, the order and the outbox row all roll back; the retry starts fresh</td>
<td>One order, one email</td>
</tr>
<tr>
<td>Crash after the commit, before the email</td>
<td>The outbox row is still pending; a worker sends it</td>
<td>One email, a few seconds late</td>
</tr>
<tr>
<td>Crash after the email, before marking it sent</td>
<td>The worker sends it again with the same id; the provider drops the duplicate</td>
<td>One email</td>
</tr>
<tr>
<td>The email provider is down</td>
<td>The send fails, the transaction rolls back, the worker retries later</td>
<td>One email, once it&#39;s back</td>
</tr>
<tr>
<td>The client reuses a key for a different order</td>
<td>The request hash differs</td>
<td><code>422</code>, nothing is created</td>
</tr>
</tbody></table>
</div>
<h2 id="the-details-that-make-it-production-ready">The Details That Make It Production-Ready</h2>
<p><strong>Status codes.</strong> A replay returns the <strong>same</strong> status and body as the original, usually <code>201 Created</code>. A request with a missing key gets <code>400 Bad Request</code>. A key reused with a different body gets <code>422 Unprocessable Content</code>. Some APIs return <code>409 Conflict</code> while the first request is still running; with the single-transaction design, the second request simply waits instead.</p>
<p><strong>Expire old keys.</strong> Nobody retries an order a week later. Delete keys older than a day or so with a scheduled job, and delete sent outbox rows after a while too, so both tables stay small.</p>
<p><strong>Long work needs a &quot;processing&quot; state.</strong> The single transaction is perfect when the work is quick and only touches your database. If creating the order calls another service, like charging a card, you don&#39;t want a transaction open during that call. Then you insert the key with a <code>processing</code> status and a <code>locked_at</code> time in its own transaction, do the work, and store the response. A key stuck in <code>processing</code> for too long means a crash, and a retry may take it over.</p>
<p><strong>Retries with backoff.</strong> Increment <code>attempts</code> when a send fails, wait longer between tries, and after a few failures move the message aside and alert someone, instead of retrying forever.</p>
<p><strong>Natural keys can help.</strong> If an order always comes from a cart, a unique constraint on <code>cart_id</code> in the orders table also prevents duplicates, even without a header. It&#39;s a good second line of defense.</p>
<h2 id="alternatives-you-might-be-asked-about">Alternatives You Might Be Asked About</h2>
<ul>
<li><strong>A distributed lock</strong> (in Redis, for example) around the request: it adds a system that can fail, and locks expire. The database&#39;s unique constraint already gives atomicity, durably.</li>
<li><strong>Two-phase commit</strong> between the database and the email provider: email providers don&#39;t support it, and it&#39;s slow and fragile even where it exists.</li>
<li><strong>Publishing to Kafka instead of an outbox table</strong>: publishing after the commit has the same crash problem as sending the email directly. The outbox is still the safe way in; a tool like Debezium can stream the outbox table to Kafka through change data capture, instead of polling. The consumer must then be idempotent, for example by recording the ids it has processed.</li>
<li><strong>Sending the email from a database trigger</strong>: it hides business logic in the database, and the trigger runs inside the transaction, so it has the same problem as sending before the commit.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>The client sends an <strong>idempotency key</strong>: a UUID per order attempt, the same on every retry.</li>
<li>The server inserts the key with a <strong>unique constraint</strong>, in the <strong>same transaction</strong> as the order. A duplicate finds the key and gets the stored response.</li>
<li>The email isn&#39;t sent in the request: an <strong>outbox row</strong> is saved in that same transaction.</li>
<li>A <strong>worker</strong> sends pending outbox messages, retrying until they succeed, with <code>SKIP LOCKED</code> so workers don&#39;t collide.</li>
<li>The worker passes the outbox id as the email provider&#39;s <strong>idempotency key</strong>, so a resend after a crash is dropped.</li>
</ol>
<p>At-least-once delivery everywhere, idempotent processing at every step: that&#39;s how you get an order saved once and an email sent once, whatever fails.</p>
`,headings:[{id:`the-naive-version`,text:`The Naive Version`},{id:`why-exactly-once-is-tricky`,text:`Why "Exactly Once" Is Tricky`},{id:`step-1-an-idempotency-key-from-the-client`,text:`Step 1: An Idempotency Key From the Client`},{id:`step-2-store-the-key-in-the-same-transaction-as-the-order`,text:`Step 2: Store the Key in the Same Transaction as the Order`},{id:`step-3-the-transactional-outbox-for-the-email`,text:`Step 3: The Transactional Outbox for the Email`},{id:`step-4-a-worker-sends-what-s-in-the-outbox`,text:`Step 4: A Worker Sends What's in the Outbox`},{id:`every-failure-and-what-happens`,text:`Every Failure, and What Happens`},{id:`the-details-that-make-it-production-ready`,text:`The Details That Make It Production-Ready`},{id:`alternatives-you-might-be-asked-about`,text:`Alternatives You Might Be Asked About`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Sell the Last Ticket Only Once`,description:`Thousands of people try to buy the last seats at the same moment. Learn how to never sell more than you have, with atomic updates, locks, versions and unique constraints, and how to hold a seat while the customer pays.`,date:`2026-11-16`,urlPath:`/blog/system-design/prevent-overselling/`},{title:`Design a Notification System`,description:`Send push, email and SMS notifications for every service in a company, reliably and without spamming users. Queues per channel, retries without duplicates, user preferences, bursts of millions, and priorities.`,date:`2026-11-21`,urlPath:`/blog/system-design/notification-system/`},{title:`Design a URL Shortener`,description:`Turn long links into short codes and redirect millions of clicks a day, fast. Generate unique codes without collisions, cache the hot links, count clicks without slowing redirects, and choose between 301 and 302.`,date:`2026-11-21`,urlPath:`/blog/system-design/url-shortener/`},{title:`Design a News Feed`,description:`Show each user the latest posts from the people they follow, in milliseconds, for 200 million users. Fan-out on write vs fan-out on read, the celebrity problem, feed caches in Redis, ranking and pagination.`,date:`2026-11-20`,urlPath:`/blog/system-design/news-feed/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));