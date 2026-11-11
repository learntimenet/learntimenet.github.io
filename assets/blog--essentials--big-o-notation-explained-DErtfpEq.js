import{b as e,t,x as n,y as r}from"./LoaderHider-YJTHKzIo.js";import{t as i}from"./BlogArticlePage-ddW8x4Gf.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Big O Notation Explained, With Examples`,description:`Learn Big O notation the simple way. See O(1), O(log n), O(n), O(n log n), O(n²) and O(2ⁿ) with JavaScript examples, a cheat sheet table, and visualizers you can watch.`,date:`2026-11-11`,urlPath:`/blog/essentials/big-o-notation-explained/`,html:`<p>You wrote two functions that do the same job. Both pass the tests. Which one is better?</p>
<p>On ten items, you can&#39;t tell. On ten million, one finishes in a blink and the other never seems to end. <strong>Big O notation</strong> is how developers talk about that difference, before it hurts in production or in an interview.</p>
<p>This guide explains it with plain words, short JavaScript examples, and visualizers you can watch step by step.</p>
<h2 id="what-big-o-measures">What Big O Measures</h2>
<p>Big O describes <strong>how the work grows when the input grows</strong>. It does not tell you how many milliseconds a function takes: that depends on the machine, the language and the data. It tells you the <em>shape</em> of the growth.</p>
<p>Say <code>n</code> is the size of the input, like the length of an array.</p>
<ul>
<li>If the work stays the same when <code>n</code> doubles, the function is <strong>O(1)</strong>.</li>
<li>If the work doubles when <code>n</code> doubles, it is <strong>O(n)</strong>.</li>
<li>If the work is multiplied by four when <code>n</code> doubles, it is <strong>O(n²)</strong>.</li>
</ul>
<p>Two rules make this simple:</p>
<ol>
<li><strong>Drop the constants.</strong> A loop that runs <code>2n + 10</code> times is O(n). When <code>n</code> is a million, the <code>+ 10</code> and the <code>2</code> don&#39;t change the story.</li>
<li><strong>Keep the biggest term.</strong> <code>n² + n</code> is O(n²). When <code>n</code> is large, <code>n²</code> is so much bigger that <code>n</code> doesn&#39;t matter.</li>
</ol>
<blockquote>
<p>Big O usually describes the <strong>worst case</strong>: the slowest an algorithm can be for an input of size <code>n</code>. That is the promise you can rely on.</p>
</blockquote>
<h2 id="o-1-constant-time">O(1): Constant Time</h2>
<p>The work doesn&#39;t depend on the size of the input. Reading an array item by its index, or a value in a <code>Map</code> by its key, takes the same time with 10 items or 10 million.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> first</span><span style="color:#1F2328">(</span><span style="color:#953800">items</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> items[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">];</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> ages</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> Map</span><span style="color:#1F2328">([</span></span>
<span class="line"><span style="color:#1F2328">  [</span><span style="color:#0A3069">"ada"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">36</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">  [</span><span style="color:#0A3069">"alan"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">41</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">]);</span></span>
<span class="line"><span style="color:#1F2328">ages.</span><span style="color:#8250DF">get</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"alan"</span><span style="color:#1F2328">); </span><span style="color:#6E7781">// O(1) on average</span></span></code></pre><p>Pushing to and popping from a <a href="/visualizers/stack/">stack</a> is O(1) too: you only touch the top.</p>
<h2 id="o-log-n-logarithmic-time">O(log n): Logarithmic Time</h2>
<p>The work grows by one step each time the input <strong>doubles</strong>. This happens when each step throws away half of what is left.</p>
<p>The classic example is <a href="/visualizers/binary-search/">binary search</a> in a sorted array: look at the middle, then keep only the half that can hold the value.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> binarySearch</span><span style="color:#1F2328">(</span><span style="color:#953800">sorted</span><span style="color:#1F2328">, </span><span style="color:#953800">target</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> low </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> high </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> sorted.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  while</span><span style="color:#1F2328"> (low </span><span style="color:#CF222E">&#x3C;=</span><span style="color:#1F2328"> high) {</span></span>
<span class="line"><span style="color:#CF222E">    const</span><span style="color:#0550AE"> middle</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">((low </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> high) </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (sorted[middle] </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> target) </span><span style="color:#CF222E">return</span><span style="color:#1F2328"> middle;</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (sorted[middle] </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> target) low </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> middle </span><span style="color:#CF222E">+</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">    else</span><span style="color:#1F2328"> high </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> middle </span><span style="color:#CF222E">-</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#CF222E"> -</span><span style="color:#0550AE">1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><p>On a million items, that is at most about <strong>20 steps</strong>. On a billion, about 30. That is why O(log n) feels almost as fast as O(1).</p>
<h2 id="o-n-linear-time">O(n): Linear Time</h2>
<p>The work grows at the same pace as the input. You look at each item once, or a fixed number of times.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> sum</span><span style="color:#1F2328">(</span><span style="color:#953800">numbers</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> total </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">const</span><span style="color:#0550AE"> number</span><span style="color:#CF222E"> of</span><span style="color:#1F2328"> numbers) {</span></span>
<span class="line"><span style="color:#1F2328">    total </span><span style="color:#CF222E">+=</span><span style="color:#1F2328"> number;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> total;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><p>Finding the largest value, counting words, or searching an <strong>unsorted</strong> array are all O(n): in the worst case, the item you want is the last one.</p>
<h2 id="o-n-log-n-linearithmic-time">O(n log n): Linearithmic Time</h2>
<p>This is the cost of the fast, general sorting algorithms. <a href="/visualizers/merge-sort/">Merge sort</a> splits the array in half again and again (that is the <code>log n</code> part), then merges every level back together (that is the <code>n</code> part).</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> mergeSort</span><span style="color:#1F2328">(</span><span style="color:#953800">items</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (items.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> &#x3C;=</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">) </span><span style="color:#CF222E">return</span><span style="color:#1F2328"> items;</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> middle</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(items.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> /</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> left</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> mergeSort</span><span style="color:#1F2328">(items.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, middle));</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> right</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> mergeSort</span><span style="color:#1F2328">(items.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(middle));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> merged</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> [];</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> i </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> j </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  while</span><span style="color:#1F2328"> (i </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> left.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> &#x26;&#x26;</span><span style="color:#1F2328"> j </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> right.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    merged.</span><span style="color:#8250DF">push</span><span style="color:#1F2328">(left[i] </span><span style="color:#CF222E">&#x3C;=</span><span style="color:#1F2328"> right[j] </span><span style="color:#CF222E">?</span><span style="color:#1F2328"> left[i</span><span style="color:#CF222E">++</span><span style="color:#1F2328">] </span><span style="color:#CF222E">:</span><span style="color:#1F2328"> right[j</span><span style="color:#CF222E">++</span><span style="color:#1F2328">]);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> [</span><span style="color:#CF222E">...</span><span style="color:#1F2328">merged, </span><span style="color:#CF222E">...</span><span style="color:#1F2328">left.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(i), </span><span style="color:#CF222E">...</span><span style="color:#1F2328">right.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(j)];</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><p><code>Array.prototype.sort</code> in modern JavaScript engines is O(n log n) as well. As a rule of thumb, <strong>you can&#39;t sort faster than O(n log n)</strong> by comparing items.</p>
<h2 id="o-n-quadratic-time">O(n²): Quadratic Time</h2>
<p>The work grows with the square of the input. It usually comes from a <strong>loop inside a loop</strong> over the same data.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> hasDuplicate</span><span style="color:#1F2328">(</span><span style="color:#953800">items</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">let</span><span style="color:#1F2328"> i </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">; i </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> items.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">; i</span><span style="color:#CF222E">++</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">    for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">let</span><span style="color:#1F2328"> j </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> i </span><span style="color:#CF222E">+</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">; j </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> items.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">; j</span><span style="color:#CF222E">++</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">      if</span><span style="color:#1F2328"> (items[i] </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> items[j]) </span><span style="color:#CF222E">return</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><p>With 1,000 items, that is about half a million comparisons. With 100,000 items, about <strong>5 billion</strong>. Simple sorts like <a href="/visualizers/bubble-sort/">bubble sort</a>, <a href="/visualizers/selection-sort/">selection sort</a> and <a href="/visualizers/insertion-sort/">insertion sort</a> are O(n²): watch how many swaps they need compared with merge sort.</p>
<p>The good news: a <code>Set</code> turns this example into O(n), because checking a <code>Set</code> is O(1) on average.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> hasDuplicate</span><span style="color:#1F2328">(</span><span style="color:#953800">items</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> seen</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> Set</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">const</span><span style="color:#0550AE"> item</span><span style="color:#CF222E"> of</span><span style="color:#1F2328"> items) {</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (seen.</span><span style="color:#8250DF">has</span><span style="color:#1F2328">(item)) </span><span style="color:#CF222E">return</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    seen.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(item);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><p>This trade, <strong>a little more memory for a lot less time</strong>, is one of the most common answers in coding interviews.</p>
<h2 id="o-2-exponential-time">O(2ⁿ): Exponential Time</h2>
<p>The work <strong>doubles</strong> each time the input grows by one. It shows up when a function calls itself twice for each step, without remembering results.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> fibonacci</span><span style="color:#1F2328">(</span><span style="color:#953800">n</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (n </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">) </span><span style="color:#CF222E">return</span><span style="color:#1F2328"> n;</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#8250DF"> fibonacci</span><span style="color:#1F2328">(n </span><span style="color:#CF222E">-</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">) </span><span style="color:#CF222E">+</span><span style="color:#8250DF"> fibonacci</span><span style="color:#1F2328">(n </span><span style="color:#CF222E">-</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><p><code>fibonacci(30)</code> makes more than a million calls. <code>fibonacci(50)</code> would make billions of billions. Remembering the results you already computed, called <strong>memoization</strong>, brings it down to O(n):</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> fibonacci</span><span style="color:#1F2328">(</span><span style="color:#953800">n</span><span style="color:#1F2328">, </span><span style="color:#953800">memo</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> Map</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (n </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">) </span><span style="color:#CF222E">return</span><span style="color:#1F2328"> n;</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (memo.</span><span style="color:#8250DF">has</span><span style="color:#1F2328">(n)) </span><span style="color:#CF222E">return</span><span style="color:#1F2328"> memo.</span><span style="color:#8250DF">get</span><span style="color:#1F2328">(n);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> value</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> fibonacci</span><span style="color:#1F2328">(n </span><span style="color:#CF222E">-</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">, memo) </span><span style="color:#CF222E">+</span><span style="color:#8250DF"> fibonacci</span><span style="color:#1F2328">(n </span><span style="color:#CF222E">-</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">, memo);</span></span>
<span class="line"><span style="color:#1F2328">  memo.</span><span style="color:#8250DF">set</span><span style="color:#1F2328">(n, value);</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> value;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="how-they-compare">How They Compare</h2>
<p>How many steps each class needs, roughly, as <code>n</code> grows:</p>
<table>
<thead>
<tr>
<th>n</th>
<th>O(1)</th>
<th>O(log n)</th>
<th>O(n)</th>
<th>O(n log n)</th>
<th>O(n²)</th>
<th>O(2ⁿ)</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>1</td>
<td>3</td>
<td>10</td>
<td>33</td>
<td>100</td>
<td>1,024</td>
</tr>
<tr>
<td>100</td>
<td>1</td>
<td>7</td>
<td>100</td>
<td>664</td>
<td>10,000</td>
<td>31 digits</td>
</tr>
<tr>
<td>1,000</td>
<td>1</td>
<td>10</td>
<td>1,000</td>
<td>9,966</td>
<td>1,000,000</td>
<td>302 digits</td>
</tr>
<tr>
<td>1,000,000</td>
<td>1</td>
<td>20</td>
<td>1,000,000</td>
<td>19,931,569</td>
<td>10¹²</td>
<td>way too many</td>
</tr>
</tbody></table>
<p>If a computer does about a billion simple steps per second, O(n²) on a million items takes <strong>about 17 minutes</strong>. O(n log n) takes <strong>0.02 seconds</strong>.</p>
<h2 id="space-complexity">Space Complexity</h2>
<p>Big O works for memory too. <strong>Space complexity</strong> counts the extra memory a function needs as the input grows, not counting the input itself.</p>
<ul>
<li><code>sum</code> above keeps one number: <strong>O(1)</strong> space.</li>
<li>The <code>Set</code> version of <code>hasDuplicate</code> may store every item: <strong>O(n)</strong> space.</li>
<li>Merge sort builds new arrays while it merges: <strong>O(n)</strong> space.</li>
<li>A recursive function also uses memory for each call that is still waiting: recursion <code>n</code> levels deep is O(n) space.</li>
</ul>
<h2 id="cheat-sheet-for-common-operations">Cheat Sheet for Common Operations</h2>
<table>
<thead>
<tr>
<th>Operation</th>
<th>Time</th>
</tr>
</thead>
<tbody><tr>
<td>Read <code>array[i]</code></td>
<td>O(1)</td>
</tr>
<tr>
<td><code>push</code> and <code>pop</code> at the end of an array</td>
<td>O(1)</td>
</tr>
<tr>
<td><code>shift</code> and <code>unshift</code> at the start</td>
<td>O(n)</td>
</tr>
<tr>
<td><code>includes</code>, <code>indexOf</code>, <code>find</code> on an array</td>
<td>O(n)</td>
</tr>
<tr>
<td><code>get</code>, <code>set</code>, <code>has</code> on a <code>Map</code> or <code>Set</code></td>
<td>O(1)</td>
</tr>
<tr>
<td>Sort an array</td>
<td>O(n log n)</td>
</tr>
<tr>
<td>Binary search in a sorted array</td>
<td>O(log n)</td>
</tr>
<tr>
<td>Insert into a <a href="/visualizers/binary-heap/">binary heap</a></td>
<td>O(log n)</td>
</tr>
<tr>
<td><a href="/visualizers/breadth-first-search/">Breadth-first search</a> on a graph</td>
<td>O(V + E)</td>
</tr>
</tbody></table>
<p><code>V</code> and <code>E</code> are the number of vertices and edges: graph algorithms often have more than one input size.</p>
<h2 id="how-to-find-the-big-o-of-your-code">How to Find the Big O of Your Code</h2>
<ol>
<li><strong>Find the input</strong> and call its size <code>n</code>.</li>
<li><strong>Count the loops.</strong> One loop over the input is O(n). A loop inside a loop is O(n²). A loop that halves what is left is O(log n).</li>
<li><strong>Look inside each line.</strong> <code>items.includes(x)</code> inside a loop is a hidden second loop: the whole thing is O(n²).</li>
<li><strong>Add steps in a row, multiply steps inside each other.</strong> A loop followed by another loop is O(n + n), so O(n). A loop inside a loop is O(n × n).</li>
<li><strong>Drop the constants and keep the biggest term.</strong></li>
</ol>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Thinking O(1) means fast.</strong> It means the time doesn&#39;t grow. A constant step that takes a second is still O(1).</li>
<li><strong>Forgetting built-in methods.</strong> <code>slice</code>, <code>includes</code>, <code>indexOf</code> and the spread operator all go through the array.</li>
<li><strong>Optimizing too early.</strong> For 50 items, O(n²) is fine. Pick clear code first, and reach for a better complexity when <code>n</code> can get large.</li>
<li><strong>Ignoring the average case.</strong> <a href="/visualizers/quick-sort/">Quick sort</a> is O(n²) in the worst case, but O(n log n) on average, and often the fastest in practice.</li>
</ul>
<h2 id="practice">Practice</h2>
<p>The best way to make Big O stick is to watch it happen:</p>
<ul>
<li>Open the <a href="/visualizers/">visualizers</a> and run bubble sort and merge sort on the same values. Count the steps.</li>
<li>Try the <a href="/interview/algorithms/">data structures and algorithms interview questions</a> to test yourself, from junior to senior.</li>
<li>Take a <a href="/quiz/">quiz</a> to check what you know.</li>
</ul>
<p>Once you start asking <em>&quot;what happens when this list gets 1,000 times bigger?&quot;</em>, you are thinking in Big O.</p>
`,headings:[{id:`what-big-o-measures`,text:`What Big O Measures`},{id:`o-1-constant-time`,text:`O(1): Constant Time`},{id:`o-log-n-logarithmic-time`,text:`O(log n): Logarithmic Time`},{id:`o-n-linear-time`,text:`O(n): Linear Time`},{id:`o-n-log-n-linearithmic-time`,text:`O(n log n): Linearithmic Time`},{id:`o-n-quadratic-time`,text:`O(n²): Quadratic Time`},{id:`o-2-exponential-time`,text:`O(2ⁿ): Exponential Time`},{id:`how-they-compare`,text:`How They Compare`},{id:`space-complexity`,text:`Space Complexity`},{id:`cheat-sheet-for-common-operations`,text:`Cheat Sheet for Common Operations`},{id:`how-to-find-the-big-o-of-your-code`,text:`How to Find the Big O of Your Code`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`practice`,text:`Practice`}],parents:[],related:[{title:`12 Practical Web Projects to Master HTML, CSS & JavaScript`,description:`Build & deploy 12 real-world web apps: Todo List, Weather App, Music Player, QR Generator, and more. Perfect for portfolios with complete source code!`,date:`2025-04-16`,urlPath:`/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/`}]}})})}));