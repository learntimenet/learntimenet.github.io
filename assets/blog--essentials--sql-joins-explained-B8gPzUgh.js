import{C as e,S as t,t as n,w as r}from"./LoaderHider-DLVOV6CD.js";import{t as i}from"./BlogArticlePage-CMRlvVfx.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`SQL Joins Explained With One Small Example`,description:`INNER, LEFT, RIGHT, FULL and CROSS joins, plus self joins and anti joins, all on the same two tiny tables, so you can see exactly which rows each one returns.`,date:`2026-11-21`,urlPath:`/blog/essentials/sql-joins-explained/`,html:`<p>A join combines rows from two tables that belong together. The hard part isn&#39;t the syntax, it&#39;s knowing which rows come back, especially the ones with no match. Here&#39;s every join on the same two small tables.</p>
<h2 id="the-example-tables">The Example Tables</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- customers</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">id | </span><span style="color:#CF222E;--shiki-dark:#FF7B72">name</span></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">---+-------</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">  | Ana</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">  | Ben</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">  | Chloé</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- orders</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">id  | customer_id | total</span></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">----+-------------+------</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">101</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">           | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">40</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">102</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">           | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">15</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">103</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">           | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">70</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">104</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">9</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">           | </span><span style="color:#0550AE;--shiki-dark:#79C0FF">25</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Ana has two orders, Ben has one, Chloé has none, and order 104 points to a customer (9) that doesn&#39;t exist.</p>
<h2 id="inner-join-only-matches">INNER JOIN: Only Matches</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">total</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">INNER JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>id</th>
<th>total</th>
</tr>
</thead>
<tbody><tr>
<td>Ana</td>
<td>101</td>
<td>40</td>
</tr>
<tr>
<td>Ana</td>
<td>102</td>
<td>15</td>
</tr>
<tr>
<td>Ben</td>
<td>103</td>
<td>70</td>
</tr>
</tbody></table>
</div>
<p>Chloé and order 104 disappear: an inner join keeps only rows that match on both sides. <code>JOIN</code> on its own means <code>INNER JOIN</code>.</p>
<p>Notice that Ana appears twice. A join repeats a row once per match, which is why counts and sums after a join can be bigger than you expect.</p>
<h2 id="left-join-everything-on-the-left">LEFT JOIN: Everything on the Left</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">total</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LEFT JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>name</th>
<th>id</th>
<th>total</th>
</tr>
</thead>
<tbody><tr>
<td>Ana</td>
<td>101</td>
<td>40</td>
</tr>
<tr>
<td>Ana</td>
<td>102</td>
<td>15</td>
</tr>
<tr>
<td>Ben</td>
<td>103</td>
<td>70</td>
</tr>
<tr>
<td>Chloé</td>
<td>NULL</td>
<td>NULL</td>
</tr>
</tbody></table>
</div>
<p>Every customer appears. Where there&#39;s no order, the order columns are <code>NULL</code>. Use it when the left table is the list you care about: &quot;all customers, with their orders if any&quot;.</p>
<h2 id="right-join-everything-on-the-right">RIGHT JOIN: Everything on the Right</h2>
<p><code>RIGHT JOIN</code> is the mirror image: every order, with its customer if any. Order 104 comes back with <code>name</code> as <code>NULL</code>, and Chloé doesn&#39;t.</p>
<p>Most people write a <code>LEFT JOIN</code> with the tables swapped instead, because reading from the main table first is easier to follow.</p>
<h2 id="full-outer-join-everything">FULL OUTER JOIN: Everything</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FULL OUTER JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>You get all matches, plus Chloé with no order, plus order 104 with no customer. It&#39;s handy for comparing two lists and finding what&#39;s missing on either side. PostgreSQL, SQL Server and Oracle support it; MySQL doesn&#39;t, and you combine a <code>LEFT</code> and a <code>RIGHT</code> join with <code>UNION</code> instead.</p>
<h2 id="cross-join-every-combination">CROSS JOIN: Every Combination</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">s</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">size</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CROSS JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">VALUES</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'S'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">), (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'M'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">), (</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'L'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> s(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">size</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Every customer paired with every size: 3 × 3 = 9 rows. There&#39;s no <code>ON</code>. It&#39;s useful to generate combinations, like every product in every store, and dangerous by accident: a forgotten join condition on two large tables multiplies their sizes.</p>
<h2 id="self-join-a-table-with-itself">Self Join: A Table With Itself</h2>
<p>To show each employee with their manager, join <code>employees</code> to itself with two aliases:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> e</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> employee, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">m</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> manager</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> employees e</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LEFT JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> employees m </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> m</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> e</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">manager_id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The <code>LEFT JOIN</code> keeps the CEO, who has no manager.</p>
<h2 id="anti-join-rows-with-no-match">Anti Join: Rows With No Match</h2>
<p>&quot;Customers who never ordered&quot; is a left join where the right side is missing:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LEFT JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> IS</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>This returns Chloé. <code>NOT EXISTS</code> says the same thing and is often clearer:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> NOT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> EXISTS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Avoid <code>NOT IN (SELECT customer_id FROM orders)</code> if that column can be <code>NULL</code>: one <code>NULL</code> in the list makes <code>NOT IN</code> return no rows at all.</p>
<h2 id="the-classic-left-join-trap">The Classic LEFT JOIN Trap</h2>
<p>You want every customer with their orders over 30:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">-- Wrong: Chloé disappears</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">total</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LEFT JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">total</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 30</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The <code>WHERE</code> runs after the join, and <code>NULL &gt; 30</code> isn&#39;t true, so the rows with no order are removed. The left join silently became an inner join. Put the condition in the <code>ON</code> instead:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">total</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> customers c</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">LEFT JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> orders o </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">customer_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> c</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AND</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> o</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">total</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 30</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Now Chloé stays, with <code>NULL</code>, and Ana keeps only her 40 order.</p>
<h2 id="which-join-do-i-need">Which Join Do I Need?</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>You want</th>
<th>Use</th>
</tr>
</thead>
<tbody><tr>
<td>Only rows that match on both sides</td>
<td><code>INNER JOIN</code></td>
</tr>
<tr>
<td>All rows of the main table, matches if any</td>
<td><code>LEFT JOIN</code></td>
</tr>
<tr>
<td>All rows of both, matched where possible</td>
<td><code>FULL OUTER JOIN</code></td>
</tr>
<tr>
<td>Every combination</td>
<td><code>CROSS JOIN</code></td>
</tr>
<tr>
<td>Rows of A with no match in B</td>
<td><code>NOT EXISTS</code> or anti join</td>
</tr>
<tr>
<td>A table related to itself</td>
<td>Self join with two aliases</td>
</tr>
</tbody></table>
</div>
<p>Try them on your own data in the <a href="/playgrounds/sql/">SQL playground</a>: change one join and watch which rows appear or vanish.</p>
`,headings:[{id:`the-example-tables`,text:`The Example Tables`},{id:`inner-join-only-matches`,text:`INNER JOIN: Only Matches`},{id:`left-join-everything-on-the-left`,text:`LEFT JOIN: Everything on the Left`},{id:`right-join-everything-on-the-right`,text:`RIGHT JOIN: Everything on the Right`},{id:`full-outer-join-everything`,text:`FULL OUTER JOIN: Everything`},{id:`cross-join-every-combination`,text:`CROSS JOIN: Every Combination`},{id:`self-join-a-table-with-itself`,text:`Self Join: A Table With Itself`},{id:`anti-join-rows-with-no-match`,text:`Anti Join: Rows With No Match`},{id:`the-classic-left-join-trap`,text:`The Classic LEFT JOIN Trap`},{id:`which-join-do-i-need`,text:`Which Join Do I Need?`}],parents:[],related:[{title:`The JavaScript Event Loop, Explained`,description:`Why setTimeout(fn, 0) doesn't run right away, why promises run before timers, and how one thread handles clicks, network calls and rendering. With examples you can predict line by line.`,date:`2026-11-21`,urlPath:`/blog/essentials/javascript-event-loop-explained/`},{title:`CORS Explained: Why Your Fetch Is Blocked and How to Fix It`,description:`What the same-origin policy protects, what CORS headers the server must send, when the browser sends a preflight OPTIONS request, how credentials change the rules, and how to fix the most common CORS errors.`,date:`2026-11-20`,urlPath:`/blog/essentials/cors-explained/`},{title:`Git Merge vs Rebase, Explained`,description:`Merge and rebase both bring the changes of one branch into another, but they leave a different history. See what each one does to your commits, when to use which, and the one rule that keeps rebase safe.`,date:`2026-11-20`,urlPath:`/blog/essentials/git-merge-vs-rebase/`},{title:`Backlinks Explained for Developers`,description:`What backlinks are, why search engines care, what nofollow, sponsored and ugc change, how to see who links to you, and honest ways for a developer to earn links without risking a penalty.`,date:`2026-11-19`,urlPath:`/blog/essentials/backlinks-explained/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`SQL Quiz`,description:`Test your SQL: filtering with WHERE and HAVING, NULL, COUNT, joins, UNION, keys, indexes, and the order a query really runs in.`,urlPath:`/quiz/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));