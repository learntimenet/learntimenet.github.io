import{C as e,S as t,t as n,x as r}from"./LoaderHider-BzNS1_6s.js";import{t as i}from"./BlogArticlePage-jEs3xYuc.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LEAD and LAG in SQL, Explained with Examples`,description:`LEAD() OVER reads a value from the next row, and LAG() from the previous one, without a self join. Learn the syntax, PARTITION BY and ORDER BY, the offset and default arguments, and how to use them for time between orders, month-over-month changes and finding the last row.`,date:`2026-11-25`,urlPath:`/blog/essentials/lead-and-lag-in-sql/`,html:`<p>How many days pass between a customer&#39;s orders? How much did sales change since last month? What&#39;s the next cheaper product? Each question compares a row with the one <strong>before or after it</strong>. Without window functions you&#39;d join the table to itself, with a tricky condition to find &quot;the next row&quot;. <code>LEAD()</code> and <code>LAG()</code> do it in one line.</p>
<p><code>LEAD(column) OVER (…)</code> returns the value of <code>column</code> from the <strong>next</strong> row, and <code>LAG(column) OVER (…)</code> from the <strong>previous</strong> one, in the order you choose. Like <a href="/blog/essentials/row-number-in-sql/">ROW_NUMBER</a>, they&#39;re window functions: they look at other rows without merging them, so every row stays in the result. They work in PostgreSQL, MySQL 8.0 and later, MariaDB 10.2 and later, SQLite 3.25 and later, SQL Server 2012 and later, and Oracle.</p>
<h2 id="the-example-database">The Example Database</h2>
<p>Every example uses the small online shop of the <a href="/playgrounds/sql/">SQL playground</a>: <code>orders</code> (with a <code>customer_id</code> and an <code>ordered_on</code> date), <code>customers</code> and <code>products</code>. Each query has a link that opens it there, so you can run it and change it.</p>
<h2 id="the-syntax">The Syntax</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(column, offset, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">default</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> column_a   </span><span style="color:#6E7781;--shiki-dark:#8B949E">-- optional: look only inside each group</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> column_b       </span><span style="color:#6E7781;--shiki-dark:#8B949E">-- what "next" means</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><code>column</code>: the value to read from the other row.</li>
<li><code>offset</code> (optional, default 1): how many rows ahead. <code>LEAD(x, 2)</code> reads two rows ahead.</li>
<li><code>default</code> (optional, default <code>NULL</code>): what to return when there&#39;s no such row.</li>
</ul>
<p><code>LAG</code> takes exactly the same arguments and looks <strong>back</strong> instead of ahead. <code>LEAD(x)</code> with <code>ORDER BY a</code> gives the same result as <code>LAG(x)</code> with <code>ORDER BY a DESC</code>.</p>
<h2 id="lead-the-next-row-s-value">LEAD: The Next Row&#39;s Value</h2>
<p>Each order, with the date of the order that came after it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id, ordered_on,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_order</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20id%2C%20ordered_on%2C%0A%20%20%20%20%20%20%20LEAD%28ordered_on%29%20OVER%20%28ORDER%20BY%20ordered_on%29%20AS%20next_order%0AFROM%20orders%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>id</th>
<th>ordered_on</th>
<th>next_order</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>2025-03-01</td>
<td>2025-03-04</td>
</tr>
<tr>
<td>2</td>
<td>2025-03-04</td>
<td>2025-03-15</td>
</tr>
<tr>
<td>3</td>
<td>2025-03-15</td>
<td>2025-04-02</td>
</tr>
<tr>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
<tr>
<td>9</td>
<td>2025-06-01</td>
<td>2025-06-12</td>
</tr>
<tr>
<td>10</td>
<td>2025-06-12</td>
<td>NULL</td>
</tr>
</tbody></table>
</div>
<p>The last order has no next one, so <code>next_order</code> is <code>NULL</code>.</p>
<p>The <code>ORDER BY</code> inside <code>OVER</code> decides what &quot;next&quot; means. It&#39;s independent from the query&#39;s own <code>ORDER BY</code>, which only sorts the output. Without an <code>ORDER BY</code> in <code>OVER</code>, &quot;next&quot; is whatever order the database happens to read the rows in, so always give one.</p>
<h2 id="partition-by-next-within-each-group">PARTITION BY: Next Within Each Group</h2>
<p>Usually you want the next order <strong>of the same customer</strong>, not of anyone. <code>PARTITION BY</code> splits the rows into groups, and <code>LEAD</code> never crosses from one group to the next:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, id, ordered_on,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_order</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, ordered_on;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20customer_id%2C%20id%2C%20ordered_on%2C%0A%20%20%20%20%20%20%20LEAD%28ordered_on%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20PARTITION%20BY%20customer_id%0A%20%20%20%20%20%20%20%20%20ORDER%20BY%20ordered_on%0A%20%20%20%20%20%20%20%29%20AS%20next_order%0AFROM%20orders%0AORDER%20BY%20customer_id%2C%20ordered_on%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>customer_id</th>
<th>id</th>
<th>ordered_on</th>
<th>next_order</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1</td>
<td>2025-03-01</td>
<td>2025-03-15</td>
</tr>
<tr>
<td>1</td>
<td>3</td>
<td>2025-03-15</td>
<td>2025-06-12</td>
</tr>
<tr>
<td>1</td>
<td>10</td>
<td>2025-06-12</td>
<td>NULL</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>2025-03-04</td>
<td>2025-05-20</td>
</tr>
<tr>
<td>2</td>
<td>8</td>
<td>2025-05-20</td>
<td>NULL</td>
</tr>
<tr>
<td>3</td>
<td>4</td>
<td>2025-04-02</td>
<td>2025-06-01</td>
</tr>
<tr>
<td>3</td>
<td>9</td>
<td>2025-06-01</td>
<td>NULL</td>
</tr>
<tr>
<td>4</td>
<td>5</td>
<td>2025-04-10</td>
<td>NULL</td>
</tr>
<tr>
<td>…</td>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
</tbody></table>
</div>
<p>Each customer&#39;s last order now gets <code>NULL</code>, and customer 1&#39;s last order doesn&#39;t &quot;see&quot; customer 2&#39;s first one.</p>
<h2 id="lag-the-previous-row-and-time-between-rows">LAG: The Previous Row, and Time Between Rows</h2>
<p><code>LAG</code> is the mirror image. A classic use: how long since the customer&#39;s previous order.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, ordered_on,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       LAG</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> w </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> previous_order,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       julianday(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> julianday(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">LAG</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> w) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> days_since</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WINDOW</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> w </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, ordered_on;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20customer_id%2C%20ordered_on%2C%0A%20%20%20%20%20%20%20LAG%28ordered_on%29%20OVER%20w%20AS%20previous_order%2C%0A%20%20%20%20%20%20%20julianday%28ordered_on%29%20-%20julianday%28LAG%28ordered_on%29%20OVER%20w%29%20AS%20days_since%0AFROM%20orders%0AWINDOW%20w%20AS%20%28PARTITION%20BY%20customer_id%20ORDER%20BY%20ordered_on%29%0AORDER%20BY%20customer_id%2C%20ordered_on%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>customer_id</th>
<th>ordered_on</th>
<th>previous_order</th>
<th>days_since</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>2025-03-01</td>
<td>NULL</td>
<td>NULL</td>
</tr>
<tr>
<td>1</td>
<td>2025-03-15</td>
<td>2025-03-01</td>
<td>14</td>
</tr>
<tr>
<td>1</td>
<td>2025-06-12</td>
<td>2025-03-15</td>
<td>89</td>
</tr>
<tr>
<td>2</td>
<td>2025-03-04</td>
<td>NULL</td>
<td>NULL</td>
</tr>
<tr>
<td>2</td>
<td>2025-05-20</td>
<td>2025-03-04</td>
<td>77</td>
</tr>
<tr>
<td>3</td>
<td>2025-06-01</td>
<td>2025-04-02</td>
<td>60</td>
</tr>
<tr>
<td>…</td>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
</tbody></table>
</div>
<p>Two things in this query:</p>
<ul>
<li><code>WINDOW w AS (…)</code> names the window once, so the two <code>OVER w</code> don&#39;t repeat it. PostgreSQL, MySQL 8 and SQLite support it, and SQL Server since 2022. Otherwise, write the full <code>OVER (…)</code> twice.</li>
<li>Date arithmetic differs between databases. SQLite subtracts <code>julianday()</code> values; in PostgreSQL, subtract two <code>DATE</code>s directly (<code>ordered_on - LAG(ordered_on) OVER w</code>); in MySQL use <code>DATEDIFF(a, b)</code>, and in SQL Server <code>DATEDIFF(day, b, a)</code>.</li>
</ul>
<h2 id="offset-and-default">Offset and Default</h2>
<p>The second argument looks further away; the third replaces the <code>NULL</code> at the edge. The next cheaper product, and how much cheaper it is:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'(cheapest)'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_cheaper,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROUND</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(price) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> gap</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20name%2C%20price%2C%0A%20%20%20%20%20%20%20LEAD%28name%2C%201%2C%20%27%28cheapest%29%27%29%20OVER%20%28ORDER%20BY%20price%20DESC%29%20AS%20next_cheaper%2C%0A%20%20%20%20%20%20%20ROUND%28price%20-%20LEAD%28price%29%20OVER%20%28ORDER%20BY%20price%20DESC%29%2C%202%29%20AS%20gap%0AFROM%20products%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>price</th>
<th>next_cheaper</th>
<th>gap</th>
</tr>
</thead>
<tbody><tr>
<td>Ergonomic chair</td>
<td>249</td>
<td>27-inch monitor</td>
<td>30</td>
</tr>
<tr>
<td>27-inch monitor</td>
<td>219</td>
<td>Mechanical keyboard</td>
<td>129.1</td>
</tr>
<tr>
<td>Mechanical keyboard</td>
<td>89.9</td>
<td>Desk lamp</td>
<td>44.9</td>
</tr>
<tr>
<td>…</td>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
<tr>
<td>SQL in 10 Minutes</td>
<td>20</td>
<td>(cheapest)</td>
<td>NULL</td>
</tr>
</tbody></table>
</div>
<p>The default must have the same type as the column: <code>&#39;(cheapest)&#39;</code> works for a name, <code>0</code> would for a price.</p>
<p>An offset of 2 skips one row: <code>LEAD(ordered_on, 2) OVER (ORDER BY ordered_on)</code> gives, for each order, the date of the order <strong>two</strong> places later.</p>
<p><a href="/playgrounds/sql/#query=SELECT%20id%2C%20ordered_on%2C%0A%20%20%20%20%20%20%20LEAD%28ordered_on%2C%202%29%20OVER%20%28ORDER%20BY%20ordered_on%29%20AS%20two_orders_later%0AFROM%20orders%0ALIMIT%204%3B">Run it in the SQL playground</a></p>
<h2 id="month-over-month-change">Month-Over-Month Change</h2>
<p><code>LAG</code> shines on summaries. First count orders per month, then compare each month with the previous one:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WITH</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> monthly </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> strftime(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'%Y-%m'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> month</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">COUNT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  GROUP BY</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> month</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> month</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, orders,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       LAG</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(orders) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> month</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> previous,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       orders </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> LAG</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(orders) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> month</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> change</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> monthly;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=WITH%20monthly%20AS%20%28%0A%20%20SELECT%20strftime%28%27%25Y-%25m%27%2C%20ordered_on%29%20AS%20month%2C%20COUNT%28%2A%29%20AS%20orders%0A%20%20FROM%20orders%0A%20%20GROUP%20BY%20month%0A%29%0ASELECT%20month%2C%20orders%2C%0A%20%20%20%20%20%20%20LAG%28orders%29%20OVER%20%28ORDER%20BY%20month%29%20AS%20previous%2C%0A%20%20%20%20%20%20%20orders%20-%20LAG%28orders%29%20OVER%20%28ORDER%20BY%20month%29%20AS%20change%0AFROM%20monthly%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>month</th>
<th>orders</th>
<th>previous</th>
<th>change</th>
</tr>
</thead>
<tbody><tr>
<td>2025-03</td>
<td>3</td>
<td>NULL</td>
<td>NULL</td>
</tr>
<tr>
<td>2025-04</td>
<td>3</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>2025-05</td>
<td>2</td>
<td>3</td>
<td>-1</td>
</tr>
<tr>
<td>2025-06</td>
<td>2</td>
<td>2</td>
<td>0</td>
</tr>
</tbody></table>
</div>
<p><code>strftime(&#39;%Y-%m&#39;, …)</code> is SQLite&#39;s way to get the month; use <code>DATE_TRUNC(&#39;month&#39;, ordered_on)</code> in PostgreSQL or <code>DATE_FORMAT(ordered_on, &#39;%Y-%m&#39;)</code> in MySQL.</p>
<h2 id="filtering-on-lead-use-a-subquery">Filtering on LEAD: Use a Subquery</h2>
<p>You can&#39;t use <code>LEAD</code> in a <code>WHERE</code> clause: window functions run <strong>after</strong> <code>WHERE</code>. Compute it in a CTE or subquery, then filter. Customers who ordered again within 30 days:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WITH</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> with_next </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, ordered_on,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_order</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, ordered_on, next_order,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       julianday(next_order) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> julianday(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> days_between</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> with_next</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> with_next</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_order </span><span style="color:#CF222E;--shiki-dark:#FF7B72">IS NOT NULL</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  AND</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> julianday(next_order) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> julianday(ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 30</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=WITH%20with_next%20AS%20%28%0A%20%20SELECT%20customer_id%2C%20ordered_on%2C%0A%20%20%20%20%20%20%20%20%20LEAD%28ordered_on%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20%20%20PARTITION%20BY%20customer_id%20ORDER%20BY%20ordered_on%0A%20%20%20%20%20%20%20%20%20%29%20AS%20next_order%0A%20%20FROM%20orders%0A%29%0ASELECT%20customers.name%2C%20ordered_on%2C%20next_order%2C%0A%20%20%20%20%20%20%20julianday%28next_order%29%20-%20julianday%28ordered_on%29%20AS%20days_between%0AFROM%20with_next%0AJOIN%20customers%20ON%20customers.id%20%3D%20with_next.customer_id%0AWHERE%20next_order%20IS%20NOT%20NULL%0A%20%20AND%20julianday%28next_order%29%20-%20julianday%28ordered_on%29%20%3C%3D%2030%3B">Run it in the SQL playground</a></p>
<p>Only Alice Martin comes back, ordering again 14 days after her first order.</p>
<h2 id="the-last-row-of-each-group">The Last Row of Each Group</h2>
<p>A row whose <code>LEAD</code> is <code>NULL</code> has no next row: it&#39;s the last of its group. That gives each customer&#39;s latest order, like <code>ROW_NUMBER</code> ordered by date descending would:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, ordered_on, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">status</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id, ordered_on, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">status</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         LEAD</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(id) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> t</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> next_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">IS</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NULL</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20customer_id%2C%20ordered_on%2C%20status%0AFROM%20%28%0A%20%20SELECT%20customer_id%2C%20ordered_on%2C%20status%2C%0A%20%20%20%20%20%20%20%20%20LEAD%28id%29%20OVER%20%28PARTITION%20BY%20customer_id%20ORDER%20BY%20ordered_on%29%20AS%20next_id%0A%20%20FROM%20orders%0A%29%20AS%20t%0AWHERE%20next_id%20IS%20NULL%0AORDER%20BY%20customer_id%3B">Run it in the SQL playground</a></p>
<p>Use <code>LEAD(id)</code> here, not <code>LEAD(ordered_on)</code>: if the next row&#39;s date could be <code>NULL</code>, you couldn&#39;t tell &quot;no next row&quot; from &quot;next row with no date&quot;. A primary key is never <code>NULL</code>.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>No <code>ORDER BY</code> in <code>OVER</code>:</strong> &quot;next&quot; then means an arbitrary row. Always say what order you mean.</li>
<li><strong>Forgetting <code>PARTITION BY</code>:</strong> <code>LEAD</code> crosses into the next customer&#39;s rows, and the last order of one customer &quot;sees&quot; the first order of another.</li>
<li><strong>Ties in the order:</strong> two orders on the same day have no defined order between them, so which one is &quot;next&quot; can change from run to run. Add a tiebreaker, like <code>ORDER BY ordered_on, id</code>.</li>
<li><strong>Using it in <code>WHERE</code> or <code>GROUP BY</code>:</strong> compute it in a subquery or CTE first.</li>
<li><strong>Treating the edge <code>NULL</code> as data:</strong> the first row has no <code>LAG</code> and the last no <code>LEAD</code>. Filter them out or give a default.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li><code>LEAD(x)</code> reads <code>x</code> from the next row, <code>LAG(x)</code> from the previous one, without a self join.</li>
<li><code>ORDER BY</code> inside <code>OVER</code> defines &quot;next&quot;; <code>PARTITION BY</code> keeps it within each group.</li>
<li>The optional offset looks further (<code>LEAD(x, 2)</code>), and the default replaces the <code>NULL</code> at the edge.</li>
<li>Subtract a row from its neighbor to get time between events or month-over-month changes.</li>
<li>To filter on the result, wrap the query in a CTE or subquery; <code>LEAD(id) IS NULL</code> finds the last row of each group.</li>
</ol>
`,headings:[{id:`the-example-database`,text:`The Example Database`},{id:`the-syntax`,text:`The Syntax`},{id:`lead-the-next-row-s-value`,text:`LEAD: The Next Row's Value`},{id:`partition-by-next-within-each-group`,text:`PARTITION BY: Next Within Each Group`},{id:`lag-the-previous-row-and-time-between-rows`,text:`LAG: The Previous Row, and Time Between Rows`},{id:`offset-and-default`,text:`Offset and Default`},{id:`month-over-month-change`,text:`Month-Over-Month Change`},{id:`filtering-on-lead-use-a-subquery`,text:`Filtering on LEAD: Use a Subquery`},{id:`the-last-row-of-each-group`,text:`The Last Row of Each Group`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Should You Scale Your Database Vertically or Horizontally?`,description:`Your database is the bottleneck. Should you buy a bigger machine or spread it over many? Compare vertical and horizontal database scaling on limits, cost, complexity and risk, and follow a step-by-step order that avoids sharding until you really need it.`,date:`2026-11-25`,urlPath:`/blog/essentials/scale-database-vertically-or-horizontally/`},{title:`Classes and Objects in Java`,description:`Model your own data in Java. Classes and objects, fields and methods, constructors and this, private fields with methods that protect the rules, static members, toString, and how object references work.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-classes-and-objects/`},{title:`Control Flow in Java: if, switch and Loops`,description:`Make decisions and repeat work in Java. if and else, the ternary operator, the modern switch expression with patterns and guards, for, for-each, while and do-while loops, and break and continue.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-control-flow-if-switch-loops/`},{title:`CSS Basics: Selectors, the Box Model and Units`,description:`How CSS chooses which styles apply and how big things are. Selectors, the cascade and specificity, the box model with padding, border and margin, box-sizing, display, and when to use px, rem, % and viewport units.`,date:`2026-11-24`,urlPath:`/blog/essentials/css-basics/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`SQL Quiz`,description:`Test your SQL: filtering with WHERE and HAVING, NULL, COUNT, joins, UNION, keys, indexes, and the order a query really runs in.`,urlPath:`/quiz/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));