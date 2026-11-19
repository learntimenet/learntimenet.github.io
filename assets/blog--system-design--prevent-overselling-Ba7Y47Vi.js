import{C as e,S as t,t as n,x as r}from"./LoaderHider-D8DNrSx1.js";import{t as i}from"./BlogArticlePage-WhUpYHIX.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Sell the Last Ticket Only Once`,description:`Thousands of people try to buy the last seats at the same moment. Learn how to never sell more than you have, with atomic updates, locks, versions and unique constraints, and how to hold a seat while the customer pays.`,date:`2026-11-16`,urlPath:`/blog/system-design/prevent-overselling/`,html:`<p>Tickets for a concert go on sale at 10:00. There are 100 seats, and 20,000 people are waiting with their finger on the button. The design question:</p>
<blockquote>
<p>How do you make sure you <strong>never sell more seats than you have</strong>, and <strong>never sell the same seat twice</strong>, while thousands of people buy at the same time?</p>
</blockquote>
<p>The same problem shows up everywhere: the last item in stock, a hotel room, a doctor&#39;s appointment, a limited coupon. It&#39;s one of the best ways to show you understand <strong>concurrency</strong> in an interview, because the naive code looks right and passes every test, until real traffic arrives.</p>
<h2 id="the-naive-version">The Naive Version</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Transactional</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> buy</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> productId) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Product</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> product</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">findById</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(productId);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (product.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getStock</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        throw</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> SoldOutException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    product.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setStock</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(product.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getStock</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    products.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">save</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(product);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Read the stock, check it, write it back. Now two buyers arrive at the same moment, with one item left:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Time</th>
<th>Buyer A</th>
<th>Buyer B</th>
<th>Stock in the database</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Reads stock: 1</td>
<td></td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td></td>
<td>Reads stock: 1</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td>1 ≥ 1, writes stock 0</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td></td>
<td>1 ≥ 1, writes stock 0</td>
<td>0</td>
</tr>
</tbody></table>
</div>
<p>Both checks passed, both buyers paid, and the stock says 0. <strong>Two items sold, one existed.</strong> This is a <strong>lost update</strong>: B&#39;s write is based on a value that A had already changed.</p>
<p><code>@Transactional</code> doesn&#39;t help. Under the default isolation level, <code>READ COMMITTED</code>, both transactions can read the same row, and the database doesn&#39;t know that the value you write depends on the one you read. The check and the update must happen as <strong>one atomic step</strong>, or the row must be <strong>protected</strong> between them.</p>
<p>There are four good ways to do that. Which one fits depends on what you sell.</p>
<h2 id="fix-1-an-atomic-conditional-update">Fix 1: An Atomic Conditional Update</h2>
<p>For a simple counter, let the database do the check and the update in one statement:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">UPDATE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SET</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> :id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AND</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock </span><span style="color:#CF222E;--shiki-dark:#FF7B72">>=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The database locks the row while it updates it, so two of these can&#39;t run on the same row at once. The second one waits, then sees the new stock, 0, and the <code>WHERE</code> no longer matches. So you only need to check how many rows changed:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Transactional</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> buy</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> productId) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    int</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> updated</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> jdbc.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">update</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">        "UPDATE products SET stock = stock - 1 WHERE id = ? AND stock >= 1"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        productId);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (updated </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        throw</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> SoldOutException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    orders.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">save</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Order</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(productId));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><strong>Pros:</strong> one statement, no extra round trip, and no lock held longer than the update. The best choice for quantities.</li>
<li><strong>Cons:</strong> the rule must fit in a <code>WHERE</code> clause.</li>
</ul>
<p>Add a constraint as a safety net, so even a bug elsewhere can&#39;t push the stock below zero:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ALTER</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ADD</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> CONSTRAINT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock_not_negative </span><span style="color:#CF222E;--shiki-dark:#FF7B72">CHECK</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (stock </span><span style="color:#CF222E;--shiki-dark:#FF7B72">>=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="fix-2-a-pessimistic-lock">Fix 2: A Pessimistic Lock</h2>
<p>When the decision needs more than a <code>WHERE</code> clause (a maximum of 4 tickets per customer, a price that depends on what&#39;s left, several rows to check), lock the row before reading it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock </span><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products </span><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> :id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">FOR</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> UPDATE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>FOR UPDATE</code> locks the row until the transaction ends. Another buyer&#39;s <code>SELECT … FOR UPDATE</code> on the same row <strong>waits</strong> until the first transaction commits, then reads the new stock. The naive code becomes correct:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> interface</span><span style="color:#953800;--shiki-dark:#FFA657"> ProductRepository</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> JpaRepository</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Product</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">Long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Lock</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(LockModeType.PESSIMISTIC_WRITE) </span><span style="color:#6E7781;--shiki-dark:#8B949E">// SELECT … FOR UPDATE</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Query</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"select p from Product p where p.id = :id"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Product </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">findByIdForUpdate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#953800;--shiki-dark:#FFA657"> id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><strong>Pros:</strong> any logic you like between the read and the write.</li>
<li><strong>Cons:</strong> buyers of the same product wait in line, one at a time. Keep these transactions <strong>short</strong>, and never hold the lock while calling a slow service, like a payment provider. When you lock several rows, always lock them in the same order (by id, for example), or two transactions can each wait for the other forever: a <strong>deadlock</strong>.</li>
</ul>
<h2 id="fix-3-optimistic-locking-with-a-version">Fix 3: Optimistic Locking With a Version</h2>
<p>Pessimistic locking assumes conflicts are likely. When they&#39;re rare, it&#39;s cheaper to let everyone read freely and detect a conflict when writing. Add a version column:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Entity</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> Product</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> int</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Version</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> version;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>JPA now writes the update like this:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">UPDATE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products </span><span style="color:#CF222E;--shiki-dark:#FF7B72">SET</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stock </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">version</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 8</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 42</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AND</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> version</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 7</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If someone else changed the row since you read it, the version is no longer 7, no row matches, and JPA throws an <code>OptimisticLockException</code>. Catch it and <strong>retry</strong> the whole operation a few times, reading the fresh stock each time.</p>
<ul>
<li><strong>Pros:</strong> no waiting, no locks held; great when two people rarely change the same row, like editing a profile or an article.</li>
<li><strong>Cons:</strong> under heavy contention, like 20,000 people buying the same product, most attempts fail and retry, and the retries add even more load. Optimistic locking is the <strong>wrong tool for a flash sale</strong>.</li>
</ul>
<h2 id="fix-4-a-unique-constraint-for-things-with-an-identity">Fix 4: A Unique Constraint for Things With an Identity</h2>
<p>Concert seats aren&#39;t a quantity: seat F12 either belongs to someone or it doesn&#39;t. Model each seat as a row, and let a <strong>unique constraint</strong> settle who gets it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> seat_bookings</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  event_id   </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BIGINT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  seat       </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TEXT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">   NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  order_id   </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BIGINT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  PRIMARY KEY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (event_id, seat)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Two buyers insert the same <code>(event_id, seat)</code>: the first succeeds, and the second gets a unique violation, which you turn into &quot;Sorry, this seat was just taken.&quot; The database guarantees it, whatever the code, the number of servers or the isolation level. The same trick stops double bookings of hotel rooms per night, or appointments per time slot.</p>
<h2 id="holding-a-seat-while-the-customer-pays">Holding a Seat While the Customer Pays</h2>
<p>Payment takes time: the customer types a card number, confirms with their bank, maybe gives up. You can&#39;t hold a database lock for minutes, and you don&#39;t want to sell a seat and then find out the payment failed.</p>
<p>The answer is a <strong>reservation with an expiry</strong>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> reservations</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  id         UUID        </span><span style="color:#CF222E;--shiki-dark:#FF7B72">PRIMARY KEY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  event_id   </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BIGINT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">      NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  seat       </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TEXT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">        NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  status</span><span style="color:#CF222E;--shiki-dark:#FF7B72">     TEXT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">        NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#6E7781;--shiki-dark:#8B949E">-- 'held', 'confirmed' or 'released'</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  expires_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TIMESTAMPTZ</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT NULL</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- At most one active reservation per seat.</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> UNIQUE INDEX</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> one_active_reservation</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> reservations (event_id, seat)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> status</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> IN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'held'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'confirmed'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ol>
<li><strong>Hold:</strong> when the customer picks a seat, insert a <code>held</code> reservation that expires in 10 minutes. The partial unique index makes sure no one else can hold or buy the same seat.</li>
<li><strong>Pay:</strong> the customer pays, with the reservation id as the payment&#39;s idempotency key.</li>
<li><strong>Confirm:</strong> when the payment succeeds, set the status to <code>confirmed</code>, but only if it&#39;s still held: <code>UPDATE … SET status = &#39;confirmed&#39; WHERE id = ? AND status = &#39;held&#39;</code>.</li>
<li><strong>Release:</strong> a scheduled job sets expired <code>held</code> reservations to <code>released</code>, which frees the seat for the next buyer.</li>
</ol>
<p>There&#39;s one tricky case: the payment succeeds just after the hold expired and the seat went to someone else. The <code>WHERE status = &#39;held&#39;</code> makes the confirmation fail, so you refund automatically. The rule: <strong>check the hold when you confirm, never only when you start</strong>.</p>
<p>For quantities instead of seats, the same idea works with the atomic update: move one unit from <code>stock</code> to <code>reserved</code> when the customer starts paying, and move it back if the hold expires.</p>
<h2 id="when-one-row-gets-too-hot">When One Row Gets Too Hot</h2>
<p>All the fixes above serialize the buyers of one product on one row. That&#39;s fine for hundreds of sales per second. For a huge flash sale, a single row becomes the bottleneck, so you take the pressure off it:</p>
<ul>
<li><strong>Gate the traffic in Redis.</strong> Keep the stock in a Redis counter too, and <code>DECR</code> it first: Redis handles a huge number of these per second. If the result is below zero, answer &quot;sold out&quot; right away without touching the database. Only the requests that got a unit go on to the database, which stays the source of truth.</li>
<li><strong>Split the stock.</strong> Store 1,000 units as 10 rows of 100, and have each buyer take a unit from a random row. That&#39;s 10 times less contention, at the cost of a little bookkeeping when the rows run out unevenly.</li>
<li><strong>Queue the orders.</strong> Accept purchase requests into a queue and process them in order with a few workers, telling customers &quot;you&#39;re in line&quot;. It&#39;s slower for each customer, but fair, and the database load stays flat whatever the traffic.</li>
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
<td>Two buyers take the last item at once</td>
<td>The conditional update matches for only one of them</td>
<td>One sold, one &quot;sold out&quot;</td>
</tr>
<tr>
<td>Two buyers pick the same seat</td>
<td>The unique constraint rejects the second insert</td>
<td>One booking</td>
</tr>
<tr>
<td>A bug tries to make the stock negative</td>
<td>The <code>CHECK</code> constraint rejects it</td>
<td>The stock stays at 0 or more</td>
</tr>
<tr>
<td>A customer holds a seat and never pays</td>
<td>The hold expires and a job releases it</td>
<td>The seat goes back on sale</td>
</tr>
<tr>
<td>The payment succeeds after the hold expired</td>
<td>The confirmation&#39;s <code>WHERE status = &#39;held&#39;</code> fails</td>
<td>Automatic refund, no double sale</td>
</tr>
<tr>
<td>The payment request is retried</td>
<td>The reservation id is the payment&#39;s idempotency key</td>
<td>Charged once</td>
</tr>
<tr>
<td>20,000 buyers hit one product</td>
<td>Redis turns most away; the database handles the rest one at a time</td>
<td>The database stays up</td>
</tr>
</tbody></table>
</div>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li><strong>Never read, check, then write</strong> in separate steps: two buyers can pass the check together.</li>
<li>For a <strong>quantity</strong>, use an atomic conditional update (<code>WHERE stock &gt;= 1</code>) and check the number of rows changed, with a <code>CHECK (stock &gt;= 0)</code> safety net.</li>
<li>For <strong>complex rules</strong>, lock the row with <code>SELECT … FOR UPDATE</code> and keep the transaction short. For <strong>rare conflicts</strong>, use a version column and retry.</li>
<li>For things with an <strong>identity</strong>, like seats, let a <strong>unique constraint</strong> decide who gets them.</li>
<li>While the customer pays, <strong>hold</strong> the item with an expiry, confirm only if the hold is still valid, and release expired holds.</li>
<li>For flash sales, take the pressure off the hot row: a <strong>Redis gate</strong>, split stock, or a <strong>queue</strong>.</li>
</ol>
`,headings:[{id:`the-naive-version`,text:`The Naive Version`},{id:`fix-1-an-atomic-conditional-update`,text:`Fix 1: An Atomic Conditional Update`},{id:`fix-2-a-pessimistic-lock`,text:`Fix 2: A Pessimistic Lock`},{id:`fix-3-optimistic-locking-with-a-version`,text:`Fix 3: Optimistic Locking With a Version`},{id:`fix-4-a-unique-constraint-for-things-with-an-identity`,text:`Fix 4: A Unique Constraint for Things With an Identity`},{id:`holding-a-seat-while-the-customer-pays`,text:`Holding a Seat While the Customer Pays`},{id:`when-one-row-gets-too-hot`,text:`When One Row Gets Too Hot`},{id:`every-failure-and-what-happens`,text:`Every Failure, and What Happens`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Add a Cache Without Serving Stale Data`,description:`A cache makes a slow endpoint fast, until it serves an old price or melts the database when it empties. Learn cache-aside, why you delete instead of update, and how to stop stampedes, penetration and avalanches.`,date:`2026-11-16`,urlPath:`/blog/system-design/caching-without-stale-data/`},{title:`Design a Rate Limiter for an API`,description:`Allow each client 100 requests a minute, across many servers, without letting bursts through or slowing every request down. Compare fixed windows, sliding windows and token buckets, and build one on Redis.`,date:`2026-11-16`,urlPath:`/blog/system-design/rate-limiter/`},{title:`Design an Order API That Saves Once and Emails Once`,description:`A client retries, a user double-clicks, a server crashes halfway. Learn how to design an endpoint that still creates exactly one order and sends exactly one email, with idempotency keys and the transactional outbox.`,date:`2026-11-16`,urlPath:`/blog/system-design/idempotent-order-api/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`SQL Quiz`,description:`Test your SQL: filtering with WHERE and HAVING, NULL, COUNT, joins, UNION, keys, indexes, and the order a query really runs in.`,urlPath:`/quiz/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));