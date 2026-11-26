import{E as e,T as t,t as n,w as r}from"./LoaderHider-DXAL0qs1.js";import{t as i}from"./BlogArticlePage-Cgtknh-i.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`ROW_NUMBER in SQL, Explained with Examples`,description:`ROW_NUMBER gives each row a number, 1, 2, 3, starting over for each group. Learn its syntax, PARTITION BY and ORDER BY, how it differs from RANK and DENSE_RANK, and how to use it for top N per group, the latest row, duplicates and pagination.`,date:`2026-11-18`,urlPath:`/blog/essentials/row-number-in-sql/`,html:`<p>You want the two most expensive products of each category, the last order of each customer, or one row out of every group of duplicates. <code>GROUP BY</code> can&#39;t do it: it squashes each group into a single row and loses the other columns. <code>ROW_NUMBER()</code> keeps every row and gives it a number inside its group: 1, 2, 3, and back to 1 for the next group. Then you keep the rows you want by their number.</p>
<p><code>ROW_NUMBER()</code> is a window function: it looks at a set of rows around the current one, the &quot;window&quot;, without merging them. It works in PostgreSQL 8.4 and later, MySQL 8.0 and later, MariaDB 10.2 and later, SQLite 3.25 and later, SQL Server and Oracle.</p>
<h2 id="the-example-database">The Example Database</h2>
<p>Every example uses the small online shop of the <a href="/playgrounds/sql/">SQL playground</a>: <code>products</code> (with a <code>category</code> and a <code>price</code>), <code>customers</code> and <code>orders</code>. Each query has a link that opens it there, so you can run it and change it.</p>
<h2 id="the-syntax">The Syntax</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> column_a   </span><span style="color:#6E7781;--shiki-dark:#8B949E">-- optional: start over at 1 for each value</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> column_b       </span><span style="color:#6E7781;--shiki-dark:#8B949E">-- which row gets 1, then 2, then 3</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The parentheses after <code>ROW_NUMBER</code> stay empty. Everything happens in <code>OVER (…)</code>, which describes the window. Start with the simplest case, products numbered from the most expensive:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20name%2C%20price%2C%0A%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28ORDER%20BY%20price%20DESC%29%20AS%20rn%0AFROM%20products%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>price</th>
<th>rn</th>
</tr>
</thead>
<tbody><tr>
<td>Ergonomic chair</td>
<td>249</td>
<td>1</td>
</tr>
<tr>
<td>27-inch monitor</td>
<td>219</td>
<td>2</td>
</tr>
<tr>
<td>Mechanical keyboard</td>
<td>89.9</td>
<td>3</td>
</tr>
<tr>
<td>Desk lamp</td>
<td>45</td>
<td>4</td>
</tr>
<tr>
<td>The Pragmatic Programmer</td>
<td>40</td>
<td>5</td>
</tr>
<tr>
<td>Clean Code</td>
<td>35</td>
<td>6</td>
</tr>
<tr>
<td>Wireless mouse</td>
<td>24.5</td>
<td>7</td>
</tr>
<tr>
<td>SQL in 10 Minutes</td>
<td>20</td>
<td>8</td>
</tr>
</tbody></table>
</div>
<p>PostgreSQL, MySQL and SQLite accept <code>OVER ()</code> with no <code>ORDER BY</code>, but the numbers then follow whatever order the rows come in, which can change from one run to the next. SQL Server and Oracle refuse <code>ROW_NUMBER</code> without an <code>ORDER BY</code>. Always give one.</p>
<h2 id="start-over-for-each-group">Start Over for Each Group</h2>
<p><code>PARTITION BY</code> splits the rows into groups, the partitions, and the numbering starts over at 1 in each one. Here, products are numbered by price inside their category:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20category%2C%20name%2C%20price%2C%0A%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20PARTITION%20BY%20category%0A%20%20%20%20%20%20%20%20%20ORDER%20BY%20price%20DESC%0A%20%20%20%20%20%20%20%29%20AS%20rn%0AFROM%20products%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>category</th>
<th>name</th>
<th>price</th>
<th>rn</th>
</tr>
</thead>
<tbody><tr>
<td>Books</td>
<td>The Pragmatic Programmer</td>
<td>40</td>
<td>1</td>
</tr>
<tr>
<td>Books</td>
<td>Clean Code</td>
<td>35</td>
<td>2</td>
</tr>
<tr>
<td>Books</td>
<td>SQL in 10 Minutes</td>
<td>20</td>
<td>3</td>
</tr>
<tr>
<td>Electronics</td>
<td>27-inch monitor</td>
<td>219</td>
<td>1</td>
</tr>
<tr>
<td>Electronics</td>
<td>Mechanical keyboard</td>
<td>89.9</td>
<td>2</td>
</tr>
<tr>
<td>Electronics</td>
<td>Wireless mouse</td>
<td>24.5</td>
<td>3</td>
</tr>
<tr>
<td>Home office</td>
<td>Ergonomic chair</td>
<td>249</td>
<td>1</td>
</tr>
<tr>
<td>Home office</td>
<td>Desk lamp</td>
<td>45</td>
<td>2</td>
</tr>
</tbody></table>
</div>
<p>You can partition by several columns, like <code>PARTITION BY customer_id, status</code>, and sort by several, like <code>ORDER BY ordered_on DESC, id DESC</code>.</p>
<p>The <code>ORDER BY</code> inside <code>OVER</code> only decides the numbers. It doesn&#39;t sort the result: add an <code>ORDER BY</code> at the end of the query for that. The rows above happen to come out grouped, but don&#39;t count on it.</p>
<h2 id="row-number-rank-and-dense-rank">ROW_NUMBER, RANK and DENSE_RANK</h2>
<p>The three functions number rows the same way until two rows tie. Here, customers are numbered by how many orders they placed. Ben and Chloé both have 2 orders; Diego, Emma and Farid have 1. (The columns aren&#39;t called <code>rank</code> or <code>row_number</code>: those are reserved words in MySQL 8.)</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       COUNT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> COUNT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> row_num,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       RANK</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()       </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> COUNT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rank_num,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       DENSE_RANK</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> COUNT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> dense_num</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LEFT JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">GROUP BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> row_num;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20customers.name%2C%0A%20%20%20%20%20%20%20COUNT%28orders.id%29%20AS%20orders%2C%0A%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28ORDER%20BY%20COUNT%28orders.id%29%20DESC%2C%20customers.name%29%20AS%20row_num%2C%0A%20%20%20%20%20%20%20RANK%28%29%20%20%20%20%20%20%20OVER%20%28ORDER%20BY%20COUNT%28orders.id%29%20DESC%29%20AS%20rank_num%2C%0A%20%20%20%20%20%20%20DENSE_RANK%28%29%20OVER%20%28ORDER%20BY%20COUNT%28orders.id%29%20DESC%29%20AS%20dense_num%0AFROM%20customers%0ALEFT%20JOIN%20orders%20ON%20orders.customer_id%20%3D%20customers.id%0AGROUP%20BY%20customers.id%2C%20customers.name%0AORDER%20BY%20row_num%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>orders</th>
<th>row_num</th>
<th>rank_num</th>
<th>dense_num</th>
</tr>
</thead>
<tbody><tr>
<td>Alice Martin</td>
<td>3</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>Ben Carter</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Chloé Dubois</td>
<td>2</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Diego Ramos</td>
<td>1</td>
<td>4</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>Emma Schmidt</td>
<td>1</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>Farid Haddad</td>
<td>1</td>
<td>6</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>Grace Lee</td>
<td>0</td>
<td>7</td>
<td>7</td>
<td>4</td>
</tr>
<tr>
<td>Hugo Rossi</td>
<td>0</td>
<td>8</td>
<td>7</td>
<td>4</td>
</tr>
</tbody></table>
</div>
<ul>
<li><code>ROW_NUMBER()</code> never repeats a number: each row gets its own, even on a tie. Which tied row comes first depends on the rest of the <code>ORDER BY</code>, here the name.</li>
<li><code>RANK()</code> gives tied rows the same number, then skips: 2, 2, then 4. Like a race where two runners share second place and nobody is third.</li>
<li><code>DENSE_RANK()</code> gives tied rows the same number without skipping: 2, 2, then 3.</li>
</ul>
<p>Use <code>ROW_NUMBER()</code> when you need exactly one row per position, like &quot;the latest order&quot;. Use <code>RANK()</code> or <code>DENSE_RANK()</code> when ties should share a place, like &quot;every product in the top 3 prices, ties included&quot;.</p>
<h2 id="filter-on-the-number">Filter on the Number</h2>
<p>The first idea that comes to mind doesn&#39;t work:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The database fails with an error like <code>column &quot;rn&quot; does not exist</code>. The reason is the order in which SQL runs a query: <code>FROM</code>, then <code>WHERE</code>, <code>GROUP BY</code> and <code>HAVING</code>, then window functions, then <code>ORDER BY</code> and <code>LIMIT</code>. When <code>WHERE</code> runs, <code>rn</code> doesn&#39;t exist yet.</p>
<p>So compute the number in a subquery, and filter outside it. Here are the two most expensive products of each category:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, rn;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20category%2C%20name%2C%20price%0AFROM%20%28%0A%20%20SELECT%20category%2C%20name%2C%20price%2C%0A%20%20%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20%20%20PARTITION%20BY%20category%0A%20%20%20%20%20%20%20%20%20%20%20ORDER%20BY%20price%20DESC%0A%20%20%20%20%20%20%20%20%20%29%20AS%20rn%0A%20%20FROM%20products%0A%29%20ranked%0AWHERE%20rn%20%3C%3D%202%0AORDER%20BY%20category%2C%20rn%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>category</th>
<th>name</th>
<th>price</th>
</tr>
</thead>
<tbody><tr>
<td>Books</td>
<td>The Pragmatic Programmer</td>
<td>40</td>
</tr>
<tr>
<td>Books</td>
<td>Clean Code</td>
<td>35</td>
</tr>
<tr>
<td>Electronics</td>
<td>27-inch monitor</td>
<td>219</td>
</tr>
<tr>
<td>Electronics</td>
<td>Mechanical keyboard</td>
<td>89.9</td>
</tr>
<tr>
<td>Home office</td>
<td>Ergonomic chair</td>
<td>249</td>
</tr>
<tr>
<td>Home office</td>
<td>Desk lamp</td>
<td>45</td>
</tr>
</tbody></table>
</div>
<p>A common table expression (a <code>WITH</code> clause, a named subquery) says the same thing and reads top to bottom, which helps once queries grow:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WITH</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ranked </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, rn;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=WITH%20ranked%20AS%20%28%0A%20%20SELECT%20category%2C%20name%2C%20price%2C%0A%20%20%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20%20%20PARTITION%20BY%20category%0A%20%20%20%20%20%20%20%20%20%20%20ORDER%20BY%20price%20DESC%0A%20%20%20%20%20%20%20%20%20%29%20AS%20rn%0A%20%20FROM%20products%0A%29%0ASELECT%20category%2C%20name%2C%20price%0AFROM%20ranked%0AWHERE%20rn%20%3C%3D%202%0AORDER%20BY%20category%2C%20rn%3B">Run it in the SQL playground</a></p>
<p>Some databases, like Snowflake, BigQuery, Databricks and DuckDB, have a <code>QUALIFY</code> clause: a <code>WHERE</code> for window functions, so no subquery is needed. PostgreSQL, MySQL, SQL Server and SQLite don&#39;t have it.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">QUALIFY </span><span style="color:#0550AE;--shiki-dark:#79C0FF">ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> category </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="the-latest-row-of-each-group">The Latest Row of Each Group</h2>
<p>This is the most common use of <code>ROW_NUMBER()</code>: the latest order of each customer, the current price of each product, the last login of each user. Number the rows of each group from the newest, and keep number 1:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WITH</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ranked </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">ordered_on</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">status</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">ordered_on</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, ordered_on, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">status</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=WITH%20ranked%20AS%20%28%0A%20%20SELECT%20customers.name%2C%20orders.ordered_on%2C%20orders.status%2C%0A%20%20%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20%20%20PARTITION%20BY%20orders.customer_id%0A%20%20%20%20%20%20%20%20%20%20%20ORDER%20BY%20orders.ordered_on%20DESC%2C%20orders.id%20DESC%0A%20%20%20%20%20%20%20%20%20%29%20AS%20rn%0A%20%20FROM%20orders%0A%20%20JOIN%20customers%20ON%20customers.id%20%3D%20orders.customer_id%0A%29%0ASELECT%20name%2C%20ordered_on%2C%20status%0AFROM%20ranked%0AWHERE%20rn%20%3D%201%0AORDER%20BY%20ordered_on%20DESC%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>ordered_on</th>
<th>status</th>
</tr>
</thead>
<tbody><tr>
<td>Alice Martin</td>
<td>2025-06-12</td>
<td>shipped</td>
</tr>
<tr>
<td>Chloé Dubois</td>
<td>2025-06-01</td>
<td>pending</td>
</tr>
<tr>
<td>Ben Carter</td>
<td>2025-05-20</td>
<td>pending</td>
</tr>
<tr>
<td>Farid Haddad</td>
<td>2025-05-05</td>
<td>shipped</td>
</tr>
<tr>
<td>Emma Schmidt</td>
<td>2025-04-18</td>
<td>cancelled</td>
</tr>
<tr>
<td>Diego Ramos</td>
<td>2025-04-10</td>
<td>delivered</td>
</tr>
</tbody></table>
</div>
<p>Customers without orders don&#39;t appear, because the query starts from <code>orders</code>. The <code>orders.id DESC</code> after the date breaks ties: if a customer placed two orders on the same day, the one with the bigger id counts as the latest, every time you run the query. Keeping <code>rn &gt; 1</code> instead gives every older order; that&#39;s how you <a href="/blog/essentials/delete-old-documents-keep-latest-per-type/">delete old rows and keep the latest of each type</a>.</p>
<h2 id="number-the-rows-of-each-group">Number the Rows of Each Group</h2>
<p>Sometimes the number itself is what you want: &quot;this is Alice&#39;s 3rd order&quot;. Sort from the oldest and show the number:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">ordered_on</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">ordered_on</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> order_number</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> orders</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> customers</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, order_number;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20customers.name%2C%20orders.ordered_on%2C%0A%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28%0A%20%20%20%20%20%20%20%20%20PARTITION%20BY%20orders.customer_id%0A%20%20%20%20%20%20%20%20%20ORDER%20BY%20orders.ordered_on%0A%20%20%20%20%20%20%20%29%20AS%20order_number%0AFROM%20orders%0AJOIN%20customers%20ON%20customers.id%20%3D%20orders.customer_id%0AORDER%20BY%20customers.name%2C%20order_number%3B">Run it in the SQL playground</a></p>
<div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>ordered_on</th>
<th>order_number</th>
</tr>
</thead>
<tbody><tr>
<td>Alice Martin</td>
<td>2025-03-01</td>
<td>1</td>
</tr>
<tr>
<td>Alice Martin</td>
<td>2025-03-15</td>
<td>2</td>
</tr>
<tr>
<td>Alice Martin</td>
<td>2025-06-12</td>
<td>3</td>
</tr>
<tr>
<td>Ben Carter</td>
<td>2025-03-04</td>
<td>1</td>
</tr>
<tr>
<td>Ben Carter</td>
<td>2025-05-20</td>
<td>2</td>
</tr>
<tr>
<td>Chloé Dubois</td>
<td>2025-04-02</td>
<td>1</td>
</tr>
<tr>
<td>Chloé Dubois</td>
<td>2025-06-01</td>
<td>2</td>
</tr>
<tr>
<td>Diego Ramos</td>
<td>2025-04-10</td>
<td>1</td>
</tr>
<tr>
<td>Emma Schmidt</td>
<td>2025-04-18</td>
<td>1</td>
</tr>
<tr>
<td>Farid Haddad</td>
<td>2025-05-05</td>
<td>1</td>
</tr>
</tbody></table>
</div>
<p>With <code>WHERE order_number = 1</code> around it, you get each customer&#39;s first order: handy to count new customers per month.</p>
<h2 id="remove-duplicates">Remove Duplicates</h2>
<p>Say a <code>subscribers</code> table (<code>id</code>, <code>email</code>, <code>created_at</code>) got the same email twice, once as <code>Ana@mail.com</code> and once as <code>ana@mail.com</code>. Number the rows of each email, case ignored, from the first signup, and every row after the first is a duplicate. Look at them first:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id, email, created_at</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id, email, created_at,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> LOWER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(email)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at, id</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> subscribers</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Then delete them, keeping the first signup of each email:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">DELETE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> subscribers</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">IN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">           ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">             PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> LOWER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(email)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">             ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at, id</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">           ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> subscribers</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  ) ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>This works in PostgreSQL, SQL Server, Oracle and SQLite. MySQL refuses a subquery on the table you delete from (error 1093); join on the ranked rows instead, as shown in <a href="/blog/essentials/delete-old-documents-keep-latest-per-type/">Delete Old Documents and Keep Only the Latest per Type</a>. Run the delete in a transaction, check the number of deleted rows, and add a unique index on <code>LOWER(email)</code> afterwards, so duplicates can&#39;t come back.</p>
<h2 id="pagination">Pagination</h2>
<p>Before <code>LIMIT</code> and <code>OFFSET</code> were everywhere, <code>ROW_NUMBER()</code> was the way to get &quot;page 2&quot; in SQL Server and Oracle. Products 4 to 6 by price:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) numbered</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BETWEEN</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 4</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AND</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 6</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20name%2C%20price%0AFROM%20%28%0A%20%20SELECT%20name%2C%20price%2C%0A%20%20%20%20%20%20%20%20%20ROW_NUMBER%28%29%20OVER%20%28ORDER%20BY%20price%20DESC%2C%20id%29%20AS%20rn%0A%20%20FROM%20products%0A%29%20numbered%0AWHERE%20rn%20BETWEEN%204%20AND%206%3B">Run it in the SQL playground</a></p>
<p>Today, <code>LIMIT … OFFSET</code> (PostgreSQL, MySQL, SQLite) or <code>OFFSET … FETCH NEXT</code> (SQL Server 2012+, Oracle 12c+) is shorter and does the same:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LIMIT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> OFFSET </span><span style="color:#0550AE;--shiki-dark:#79C0FF">3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20name%2C%20price%0AFROM%20products%0AORDER%20BY%20price%20DESC%2C%20id%0ALIMIT%203%20OFFSET%203%3B">Run it in the SQL playground</a></p>
<p>Both get slower on deep pages: to show rows 100,001 to 100,020, the database still reads and throws away the first 100,000. For large tables, use keyset pagination: remember the last row of the previous page (here the Mechanical keyboard, at 89.90 with id 1) and ask for the rows after it. It gives the same page as above:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, price</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> products</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 89</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">90</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> OR</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 89</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">90</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AND</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LIMIT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><a href="/playgrounds/sql/#query=SELECT%20name%2C%20price%0AFROM%20products%0AWHERE%20price%20%3C%2089.90%20OR%20%28price%20%3D%2089.90%20AND%20id%20%3E%201%29%0AORDER%20BY%20price%20DESC%2C%20id%0ALIMIT%203%3B">Run it in the SQL playground</a></p>
<p>With an index on the sorting columns, this stays fast on any page.</p>
<h2 id="make-the-numbers-repeatable">Make the Numbers Repeatable</h2>
<p>If the <code>ORDER BY</code> inside <code>OVER</code> can tie, the database may number tied rows in any order, and the order can change between runs, after an update or after a new index. With &quot;keep row number 1&quot;, that means keeping a different row each time. Always end the <code>ORDER BY</code> with a column that is unique, usually the primary key:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customer_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ordered_on </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="performance">Performance</h2>
<p>To number rows, the database sorts each partition by the window&#39;s <code>ORDER BY</code>. On a big table, that sort is most of the cost. An index on the partition columns followed by the order columns, like <code>(customer_id, ordered_on DESC, id DESC)</code>, can let the database read rows already in order instead of sorting them.</p>
<p>Filter early, too: a <code>WHERE</code> inside the subquery (like <code>WHERE ordered_on &gt;= &#39;2025-01-01&#39;</code>) runs before the numbering, so fewer rows are sorted. A filter on <code>rn</code> outside can&#39;t help with that.</p>
<h2 id="what-can-go-wrong">What Can Go Wrong</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Mistake</th>
<th>What happens</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td><code>WHERE rn = 1</code> in the same query</td>
<td>Error: the column doesn&#39;t exist yet</td>
<td>Filter in an outer query or a <code>WITH</code></td>
</tr>
<tr>
<td>No unique column at the end of ORDER BY</td>
<td>Ties get numbers in any order, rows change</td>
<td>End with the primary key: <code>…, id DESC</code></td>
</tr>
<tr>
<td>Forgetting <code>PARTITION BY</code></td>
<td>One numbering for the whole table</td>
<td>Partition by the group: <code>PARTITION BY user_id</code></td>
</tr>
<tr>
<td><code>ORDER BY</code> only inside <code>OVER</code></td>
<td>The result isn&#39;t sorted</td>
<td>Add an <code>ORDER BY</code> at the end of the query</td>
</tr>
<tr>
<td><code>ROW_NUMBER</code> when ties should share</td>
<td>One of two equal rows is left out of a top N</td>
<td>Use <code>RANK()</code> or <code>DENSE_RANK()</code></td>
</tr>
<tr>
<td>Using it on MySQL 5.7</td>
<td>Syntax error: no window functions before 8.0</td>
<td>Upgrade, or use a self-join</td>
</tr>
</tbody></table>
</div>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li><code>ROW_NUMBER() OVER (PARTITION BY group ORDER BY sort)</code> numbers the rows of each group 1, 2, 3, without merging them.</li>
<li>The <code>ORDER BY</code> inside <code>OVER</code> decides who gets 1; end it with a unique column so the numbers are always the same.</li>
<li>You can&#39;t filter on the number in the same query&#39;s <code>WHERE</code>: compute it in a subquery or a <code>WITH</code>, then filter, or use <code>QUALIFY</code> where it exists.</li>
<li><code>rn = 1</code> gives the latest (or first) row of each group, <code>rn &lt;= N</code> the top N, and <code>rn &gt; 1</code> the duplicates or old rows to delete.</li>
<li>On ties, <code>ROW_NUMBER</code> still gives distinct numbers; <code>RANK</code> repeats and skips, <code>DENSE_RANK</code> repeats without skipping.</li>
<li>Index the partition and order columns, and filter before numbering, to keep it fast on big tables.</li>
</ol>
`,headings:[{id:`the-example-database`,text:`The Example Database`},{id:`the-syntax`,text:`The Syntax`},{id:`start-over-for-each-group`,text:`Start Over for Each Group`},{id:`row-number-rank-and-dense-rank`,text:`ROW_NUMBER, RANK and DENSE_RANK`},{id:`filter-on-the-number`,text:`Filter on the Number`},{id:`the-latest-row-of-each-group`,text:`The Latest Row of Each Group`},{id:`number-the-rows-of-each-group`,text:`Number the Rows of Each Group`},{id:`remove-duplicates`,text:`Remove Duplicates`},{id:`pagination`,text:`Pagination`},{id:`make-the-numbers-repeatable`,text:`Make the Numbers Repeatable`},{id:`performance`,text:`Performance`},{id:`what-can-go-wrong`,text:`What Can Go Wrong`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Claude Certified Associate (Foundations): A Study Guide`,description:`What the Claude Certified Associate – Foundations exam covers, domain by domain, with the ideas to know, exam tips, a study plan, and a free practice exam to check you're ready.`,date:`2026-11-17`,urlPath:`/blog/essentials/claude-certified-associate-foundations-study-guide/`},{title:`Delete Old Documents and Keep Only the Latest per Type`,description:`A user has many documents of different types and you only want the most recent one of each. Learn how to find and delete the older ones safely in PostgreSQL, MySQL and MongoDB, keep the last N, and stop duplicates from coming back.`,date:`2026-11-17`,urlPath:`/blog/essentials/delete-old-documents-keep-latest-per-type/`},{title:`A Modern CSS Reset, Explained Line by Line`,description:`Browsers style pages before you write a single rule. Learn what a modern CSS reset fixes, why each line is there, and copy a short reset you can drop into any project.`,date:`2026-11-15`,urlPath:`/blog/essentials/modern-css-reset/`},{title:`What Happens When You Type a URL and Press Enter`,description:`Follow one page load from the address bar to the pixels on your screen. DNS, TCP, TLS, HTTP, caching and rendering, explained step by step with commands you can run yourself.`,date:`2026-11-13`,urlPath:`/blog/essentials/what-happens-when-you-type-a-url/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`SQL Quiz`,description:`Test your SQL: filtering with WHERE and HAVING, NULL, COUNT, joins, UNION, keys, indexes, and the order a query really runs in.`,urlPath:`/quiz/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));