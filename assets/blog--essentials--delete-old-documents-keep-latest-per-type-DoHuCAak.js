import{D as e,E as t,T as n,t as r}from"./LoaderHider-Bpn5Pb5P.js";import{t as i}from"./BlogArticlePage-gmuQ-CXT.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`Delete Old Documents and Keep Only the Latest per Type`,description:`A user has many documents of different types and you only want the most recent one of each. Learn how to find and delete the older ones safely in PostgreSQL, MySQL and MongoDB, keep the last N, and stop duplicates from coming back.`,date:`2026-11-17`,urlPath:`/blog/essentials/delete-old-documents-keep-latest-per-type/`,html:`<p>A user uploads an ID card, then a new ID card, then a proof of address, then another ID card. Your table now holds three ID cards for the same person, and you only care about the newest one. You want to delete the old documents and keep only the most recent one of each type, for every user.</p>
<p>This is a classic problem, often called &quot;greatest N per group&quot;. The trick is to stop thinking about what to delete and first answer a simpler question: for each user and type, which row is the latest?</p>
<h2 id="the-example-table">The Example Table</h2>
<p>Here is the table used in every example below:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> documents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  id         </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BIGINT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> PRIMARY KEY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  user_id    </span><span style="color:#CF222E;--shiki-dark:#FF7B72">BIGINT</span><span style="color:#CF222E;--shiki-dark:#FF7B72">       NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  type</span><span style="color:#CF222E;--shiki-dark:#FF7B72">       VARCHAR</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">50</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)  </span><span style="color:#CF222E;--shiki-dark:#FF7B72">NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  file_name  </span><span style="color:#CF222E;--shiki-dark:#FF7B72">VARCHAR</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">255</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">NOT NULL</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">TIMESTAMP</span><span style="color:#CF222E;--shiki-dark:#FF7B72">    NOT NULL</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>And the data for user 42 (the <code>user_id</code> column is 42 on every row, so it&#39;s left out):</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>id</th>
<th>type</th>
<th>file_name</th>
<th>created_at</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>id_card</td>
<td>id-old.pdf</td>
<td>2024-01-10</td>
</tr>
<tr>
<td>2</td>
<td>proof_of_address</td>
<td>bill-jan.pdf</td>
<td>2024-01-12</td>
</tr>
<tr>
<td>3</td>
<td>id_card</td>
<td>id-2025.pdf</td>
<td>2025-03-02</td>
</tr>
<tr>
<td>4</td>
<td>proof_of_address</td>
<td>bill-jun.pdf</td>
<td>2025-06-20</td>
</tr>
<tr>
<td>5</td>
<td>id_card</td>
<td>id-new.pdf</td>
<td>2026-02-01</td>
</tr>
<tr>
<td>6</td>
<td>payslip</td>
<td>pay-oct.pdf</td>
<td>2026-10-31</td>
</tr>
</tbody></table>
</div>
<p>The goal is to keep rows 4, 5 and 6 (the newest of each type) and delete rows 1, 2 and 3.</p>
<h2 id="step-1-rank-the-rows-in-each-group">Step 1: Rank the Rows in Each Group</h2>
<p>A window function gives every row a number inside its group without collapsing the rows the way <code>GROUP BY</code> does. <code>ROW_NUMBER()</code> with <code>PARTITION BY user_id, type</code> restarts the count for each user and type, and <code>ORDER BY created_at DESC</code> puts the newest row first:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id, user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, created_at,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">       ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">       ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 42</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>id</th>
<th>type</th>
<th>created_at</th>
<th>rn</th>
</tr>
</thead>
<tbody><tr>
<td>5</td>
<td>id_card</td>
<td>2026-02-01</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td>id_card</td>
<td>2025-03-02</td>
<td>2</td>
</tr>
<tr>
<td>1</td>
<td>id_card</td>
<td>2024-01-10</td>
<td>3</td>
</tr>
<tr>
<td>6</td>
<td>payslip</td>
<td>2026-10-31</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>proof_of_address</td>
<td>2025-06-20</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>proof_of_address</td>
<td>2024-01-12</td>
<td>2</td>
</tr>
</tbody></table>
</div>
<p>Every row with <code>rn = 1</code> is a keeper. Every row with <code>rn &gt; 1</code> is an old document.</p>
<p>Why <code>id DESC</code> as a second sort key? If two documents of the same type have exactly the same <code>created_at</code> (a batch import, a double click), <code>ROW_NUMBER()</code> would pick one of them at random. Adding the id makes the result the same every time you run it.</p>
<p>Window functions work in PostgreSQL, MySQL 8.0 and later, MariaDB 10.2 and later, SQL Server, Oracle and SQLite 3.25 and later. You can try them in the <a href="/playgrounds/sql/">SQL playground</a>.</p>
<h2 id="step-2-look-before-you-delete">Step 2: Look Before You Delete</h2>
<p>Run the query as a plain <code>SELECT</code> first and check the list of rows that would go away. A delete with a wrong condition is very hard to undo, and this costs ten seconds:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">SELECT</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> *</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> d.</span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents d</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If the count looks right, you&#39;re ready for the delete.</p>
<h2 id="step-3-delete-the-old-rows">Step 3: Delete the Old Rows</h2>
<p>The delete syntax depends on the database, because each one has its own rules about deleting from a table while reading from it.</p>
<h3 id="postgresql">PostgreSQL</h3>
<p>PostgreSQL lets you join the ranked rows with <code>USING</code>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">DELETE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents d</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">USING</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> d</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ranked</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  AND</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ranked</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">rn</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">RETURNING </span><span style="color:#0550AE;--shiki-dark:#79C0FF">d</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">d</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">d</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">file_name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>RETURNING</code> prints the deleted rows, which is handy for a log or to delete the matching files from storage.</p>
<h3 id="mysql-8">MySQL 8</h3>
<p>MySQL refuses <code>DELETE … WHERE id IN (SELECT … FROM documents)</code> on the same table (error 1093). A join on a derived table works, because MySQL builds the ranked list first:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">DELETE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> d</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents d</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">JOIN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">         ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">           ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">         ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">) ranked </span><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ranked</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> d</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ranked</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">rn</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h3 id="any-database-without-window-functions">Any Database, Without Window Functions</h3>
<p>On an older database you can say the same thing in plain words: &quot;delete a document if a newer document of the same type exists for the same user&quot;.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">DELETE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> EXISTS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents newer</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> newer</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">user_id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> documents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">user_id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    AND</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> newer</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">type</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> documents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">type</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    AND</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0550AE;--shiki-dark:#79C0FF">newer</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">created_at</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> documents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">created_at</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">         OR</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0550AE;--shiki-dark:#79C0FF">newer</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">created_at</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> documents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">created_at</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> AND</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> newer</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> documents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">id</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">))</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>This works in PostgreSQL, SQL Server, Oracle and SQLite. MySQL rejects it with the same error 1093, so use the join version there.</p>
<h2 id="keep-the-last-n-instead-of-one">Keep the Last N Instead of One</h2>
<p>Maybe you want to keep a little history: the three most recent documents of each type. Only the number changes:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ranked</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">rn</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 3</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>With the <code>EXISTS</code> version, it&#39;s harder: you&#39;d have to count the newer rows (<code>(SELECT COUNT(*) …) &gt;= 3</code>), which is slower. Window functions are the better tool here.</p>
<h2 id="only-one-user-or-everyone">Only One User, or Everyone</h2>
<p>The queries above clean the whole table. To clean a single user, for example right after they upload a new document, filter inside the ranked list:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 42</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Put the filter in the inner query, not only in the outer one, so the database ranks a few rows instead of the whole table.</p>
<h2 id="mongodb">MongoDB</h2>
<p>In MongoDB, each document is a JSON-like object in a collection. Since MongoDB 5.0, <code>$setWindowFields</code> does the same job as <code>ROW_NUMBER()</code>. Find the ids of the old documents, then delete them:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> documents</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> db.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">collection</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"documents"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> oldOnes</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">aggregate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">([</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    { $match: { userId: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">42</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> } },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      $setWindowFields: {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        partitionBy: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"$type"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        sortBy: { createdAt: </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, _id: </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        output: { rank: { $documentNumber: {} } },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    { $match: { rank: { $gt: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> } } },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    { $project: { _id: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> } },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  ])</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toArray</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">deleteMany</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({ _id: { $in: oldOnes.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">map</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">((</span><span style="color:#953800;--shiki-dark:#FFA657">doc</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> doc._id) } });</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>To clean every user at once, remove the first <code>$match</code> and use <code>partitionBy: { userId: &quot;$userId&quot;, type: &quot;$type&quot; }</code>. For a large collection, delete the ids in chunks of a few thousand instead of one huge <code>$in</code> list.</p>
<h2 id="make-it-safe-and-fast">Make It Safe and Fast</h2>
<p>Deleting data in production deserves a few extra precautions.</p>
<p><strong>Add an index.</strong> The ranking reads rows by user, type and date. An index in that order lets the database read them already sorted:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">CREATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> INDEX</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> idx_documents_user_type_created</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  ON</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents (user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><strong>Use a transaction.</strong> Run the delete inside <code>BEGIN … COMMIT</code>. If the number of deleted rows isn&#39;t what you expected, <code>ROLLBACK</code> brings everything back.</p>
<p><strong>Delete in batches on big tables.</strong> Deleting millions of rows in one statement holds locks for a long time and fills the transaction log. Delete a few thousand rows at a time and repeat until nothing is left:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">DELETE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">IN</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    SELECT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">           ROW_NUMBER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">OVER</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">             PARTITION</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">             ORDER BY</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, id </span><span style="color:#CF222E;--shiki-dark:#FF7B72">DESC</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">           ) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">AS</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    FROM</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  ) ranked</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  WHERE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> rn </span><span style="color:#CF222E;--shiki-dark:#FF7B72">></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  LIMIT</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 5000</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>This form works in PostgreSQL. In MySQL, keep the join version and add a filter on an id range, such as <code>d.id BETWEEN 1 AND 100000</code>, then move the range.</p>
<p><strong>Don&#39;t forget the files.</strong> Documents often have a file in storage (like S3) next to the row. Collect the file names first (with <code>RETURNING</code> or a <code>SELECT</code>), delete the rows, then delete the files. If the file delete fails, you can retry it later. The other way round, you could end up with rows pointing to files that are gone.</p>
<p><strong>Think about a soft delete.</strong> If someone might ask for an old document back, or a law says you must keep it for a while, set a <code>deleted_at</code> column instead of deleting the row, and purge it later.</p>
<h2 id="stop-the-duplicates-from-coming-back">Stop the Duplicates from Coming Back</h2>
<p>Cleaning once is good. Not needing to clean again is better.</p>
<p>If a user should only ever have <strong>one</strong> document per type, let the database enforce it with a unique constraint, and replace the row instead of adding a new one:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ALTER</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> TABLE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  ADD</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> CONSTRAINT</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> uq_documents_user_type </span><span style="color:#CF222E;--shiki-dark:#FF7B72">UNIQUE</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">INSERT INTO</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> documents (id, user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, file_name, created_at)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">VALUES</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#0550AE;--shiki-dark:#79C0FF">7</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">42</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'id_card'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">'id-2026-11.pdf'</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">NOW</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">())</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">ON</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> CONFLICT (user_id, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">DO </span><span style="color:#CF222E;--shiki-dark:#FF7B72">UPDATE</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> SET</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> file_name </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> EXCLUDED</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">file_name</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">              created_at </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> EXCLUDED</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">created_at</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>That&#39;s PostgreSQL syntax. MySQL uses <code>ON DUPLICATE KEY UPDATE</code>, and MongoDB uses <code>updateOne(filter, update, { upsert: true })</code> with a unique index on <code>{ userId: 1, type: 1 }</code>.</p>
<p>If you want to keep the last N, insert the new document and run the &quot;keep the last N&quot; delete for that one user in the same transaction. The cleanup then only touches a handful of rows, so it stays fast.</p>
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
<td>Sorting by <code>created_at</code> only</td>
<td>Two rows with the same date: a random one stays</td>
<td>Add <code>id DESC</code> as a tie-breaker</td>
</tr>
<tr>
<td>Using <code>MAX(created_at)</code> and <code>created_at</code></td>
<td>Both rows with the max date are kept</td>
<td>Use <code>ROW_NUMBER()</code> and compare ids</td>
</tr>
<tr>
<td>Forgetting <code>user_id</code> in the partition</td>
<td>Keeps one document per type for the whole table</td>
<td><code>PARTITION BY user_id, type</code></td>
</tr>
<tr>
<td>Ranking by <code>updated_at</code></td>
<td>An old document edited yesterday counts as &quot;new&quot;</td>
<td>Decide what &quot;recent&quot; means: usually creation</td>
</tr>
<tr>
<td>Deleting without looking first</td>
<td>Wrong condition, data gone</td>
<td>Run the <code>SELECT</code>, then delete in transaction</td>
</tr>
<tr>
<td>One huge delete on a big table</td>
<td>Long locks, slow app, huge transaction log</td>
<td>Delete in batches</td>
</tr>
<tr>
<td>Deleting files before rows</td>
<td>Rows pointing to missing files</td>
<td>Delete rows first, then files, and retry them</td>
</tr>
</tbody></table>
</div>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Rank each user&#39;s documents per type with <code>ROW_NUMBER() OVER (PARTITION BY user_id, type ORDER BY created_at DESC, id DESC)</code>.</li>
<li>Rows with rank 1 are the latest. Rows with rank greater than 1 (or greater than N) are the old ones.</li>
<li>Look at them with a <code>SELECT</code> before deleting anything.</li>
<li>Delete with <code>DELETE … USING</code> in PostgreSQL, <code>DELETE … JOIN</code> in MySQL, or <code>WHERE EXISTS (a newer row)</code> on older databases. In MongoDB, use <code>$setWindowFields</code> and <code>deleteMany</code>.</li>
<li>Add an index on <code>(user_id, type, created_at)</code>, use a transaction, and delete in batches on big tables.</li>
<li>Prevent new duplicates with a unique constraint and an upsert, or clean up one user right after each insert.</li>
</ol>
`,headings:[{id:`the-example-table`,text:`The Example Table`},{id:`step-1-rank-the-rows-in-each-group`,text:`Step 1: Rank the Rows in Each Group`},{id:`step-2-look-before-you-delete`,text:`Step 2: Look Before You Delete`},{id:`step-3-delete-the-old-rows`,text:`Step 3: Delete the Old Rows`},{id:`keep-the-last-n-instead-of-one`,text:`Keep the Last N Instead of One`},{id:`only-one-user-or-everyone`,text:`Only One User, or Everyone`},{id:`mongodb`,text:`MongoDB`},{id:`make-it-safe-and-fast`,text:`Make It Safe and Fast`},{id:`stop-the-duplicates-from-coming-back`,text:`Stop the Duplicates from Coming Back`},{id:`what-can-go-wrong`,text:`What Can Go Wrong`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`A Modern CSS Reset, Explained Line by Line`,description:`Browsers style pages before you write a single rule. Learn what a modern CSS reset fixes, why each line is there, and copy a short reset you can drop into any project.`,date:`2026-11-15`,urlPath:`/blog/essentials/modern-css-reset/`},{title:`What Happens When You Type a URL and Press Enter`,description:`Follow one page load from the address bar to the pixels on your screen. DNS, TCP, TLS, HTTP, caching and rendering, explained step by step with commands you can run yourself.`,date:`2026-11-13`,urlPath:`/blog/essentials/what-happens-when-you-type-a-url/`},{title:`How to Read a Stack Trace Without Panicking`,description:`A stack trace looks scary, but it tells you exactly where your code broke. Learn to read Java, JavaScript and Python stack traces, find the line that matters, and fix the bug faster.`,date:`2026-11-12`,urlPath:`/blog/essentials/how-to-read-a-stack-trace/`},{title:`How to Undo Almost Anything in Git`,description:`Committed to the wrong branch, deleted a branch, or pushed something you shouldn't have? Here is how to undo common Git mistakes, from unstaged changes to lost commits, and which commands are safe on shared branches.`,date:`2026-11-12`,urlPath:`/blog/essentials/how-to-undo-almost-anything-in-git/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`SQL Quiz`,description:`Test your SQL: filtering with WHERE and HAVING, NULL, COUNT, joins, UNION, keys, indexes, and the order a query really runs in.`,urlPath:`/quiz/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`}]}})})}));