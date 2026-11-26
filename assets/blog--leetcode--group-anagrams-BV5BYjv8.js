import{C as e,S as t,t as n,x as r}from"./LoaderHider-BRHmV56b.js";import{t as i}from"./BlogArticlePage-DF7LtE6e.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 49: Group Anagrams, Explained`,description:`Put words that use the same letters into the same group. Learn the key idea of a canonical key in a hash map, with sorted letters or letter counts, in Python.`,date:`2026-11-20`,urlPath:`/blog/leetcode/group-anagrams/`,html:`<p>Given a list of lowercase words, put the anagrams together: words made of exactly the same letters go in the same group. The groups, and the words inside them, can come in any order.</p>
<p>With <code>[&quot;stop&quot;, &quot;pots&quot;, &quot;rat&quot;, &quot;tops&quot;, &quot;tar&quot;, &quot;art&quot;, &quot;moon&quot;]</code>, the answer is three groups: <code>[&quot;stop&quot;, &quot;pots&quot;, &quot;tops&quot;]</code>, <code>[&quot;rat&quot;, &quot;tar&quot;, &quot;art&quot;]</code> and <code>[&quot;moon&quot;]</code>.</p>
<h2 id="comparing-every-pair">Comparing Every Pair</h2>
<p>The first idea: for each word not yet grouped, compare it with every later word, and pull in the ones that are anagrams of it.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> group_anagrams_slow</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    groups, used </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [], [</span><span style="color:#0550AE;--shiki-dark:#79C0FF">False</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i, word </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> enumerate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> used[i]:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            continue</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        group, used[i] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [word], </span><span style="color:#0550AE;--shiki-dark:#79C0FF">True</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> j </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words)):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            if</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> not</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> used[j] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">and</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words[j]) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(word):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                group.append(words[j])</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                used[j] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> True</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        groups.append(group)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> groups</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It works, but with n words of length k it compares up to n² pairs, each costing O(k log k). With 10,000 words, that&#39;s 50 million comparisons.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>Instead of comparing words with each other, give every word a <strong>key</strong> that&#39;s the same for all its anagrams and different for everything else. Then a hash map from key to list of words groups them in one pass.</p>
<p>Sorting the letters makes such a key: <code>&quot;stop&quot;</code>, <code>&quot;pots&quot;</code> and <code>&quot;tops&quot;</code> all sort to <code>&quot;opst&quot;</code>.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">from</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> collections </span><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> defaultdict</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> group_anagrams</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    groups </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> defaultdict(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">list</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> word </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> words:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        groups[</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">""</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.join(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(word))].append(word)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> list</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(groups.values())</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>defaultdict(list)</code> creates an empty list the first time a key appears, so there&#39;s no &quot;is the key there yet?&quot; check.</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Word</th>
<th>Key</th>
<th>Groups after it</th>
</tr>
</thead>
<tbody><tr>
<td><code>stop</code></td>
<td><code>opst</code></td>
<td><code>opst: [stop]</code></td>
</tr>
<tr>
<td><code>pots</code></td>
<td><code>opst</code></td>
<td><code>opst: [stop, pots]</code></td>
</tr>
<tr>
<td><code>rat</code></td>
<td><code>art</code></td>
<td><code>opst: [stop, pots]</code>, <code>art: [rat]</code></td>
</tr>
<tr>
<td><code>tops</code></td>
<td><code>opst</code></td>
<td><code>opst: [stop, pots, tops]</code>, <code>art: …</code></td>
</tr>
<tr>
<td><code>tar</code></td>
<td><code>art</code></td>
<td><code>art: [rat, tar]</code></td>
</tr>
<tr>
<td><code>art</code></td>
<td><code>art</code></td>
<td><code>art: [rat, tar, art]</code></td>
</tr>
<tr>
<td><code>moon</code></td>
<td><code>mnoo</code></td>
<td>three groups</td>
</tr>
</tbody></table>
</div>
<h2 id="a-key-without-sorting">A Key Without Sorting</h2>
<p>Sorting each word costs O(k log k). Counting its letters costs O(k): a tuple of 26 counts is also the same for all anagrams.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> group_anagrams_counts</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(words):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    groups </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> defaultdict(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">list</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> word </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> words:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        counts </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 26</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> letter </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> word:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            counts[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">ord</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(letter) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> ord</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"a"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        groups[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">tuple</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(counts)].append(word)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> list</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(groups.values())</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The tuple is needed because lists can&#39;t be dictionary keys: they can change, so they have no stable hash.</p>
<h2 id="complexity">Complexity</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Version</th>
<th>Time</th>
<th>Extra space</th>
</tr>
</thead>
<tbody><tr>
<td>Every pair</td>
<td>O(n² · k log k)</td>
<td>O(n)</td>
</tr>
<tr>
<td>Sorted key</td>
<td>O(n · k log k)</td>
<td>O(n · k)</td>
</tr>
<tr>
<td>Letter count key</td>
<td>O(n · k)</td>
<td>O(n · k)</td>
</tr>
</tbody></table>
</div>
<p>In practice the sorted key is often as fast in Python, because <code>sorted</code> runs in C and words are short. Mention the counting key as the follow-up: interviewers like hearing why it&#39;s O(n · k).</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Using a list as the key.</strong> <code>groups[counts]</code> raises <code>TypeError: unhashable type: &#39;list&#39;</code>. Convert it with <code>tuple(counts)</code>.</li>
<li><strong>Using a set of letters as the key.</strong> <code>&quot;aab&quot;</code> and <code>&quot;abb&quot;</code> have the same set but aren&#39;t anagrams.</li>
<li><strong>Sorting into a list and forgetting to join.</strong> <code>sorted(&quot;pots&quot;)</code> is a list: join it into a string, or turn it into a tuple.</li>
<li><strong>Forgetting the empty word.</strong> <code>&quot;&quot;</code> is a valid word and gets its own group; both solutions handle it.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/group-anagrams/">LeetCode problem 49, Group Anagrams</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`comparing-every-pair`,text:`Comparing Every Pair`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`a-key-without-sorting`,text:`A Key Without Sorting`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 1: Two Sum, Explained`,description:`Find the two numbers of a list that add up to a target. Go from the obvious double loop to a one-pass solution with a hash map, in Python, with the complexity of each.`,date:`2026-11-19`,urlPath:`/blog/leetcode/two-sum/`},{title:`LeetCode 121: Best Time to Buy and Sell Stock, Explained`,description:`Find the biggest profit from buying a stock on one day and selling it on a later one. Learn the one-pass solution that tracks the lowest price so far, in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/best-time-to-buy-and-sell-stock/`},{title:`LeetCode 20: Valid Parentheses, Explained`,description:`Check that every bracket in a string is closed by the right kind, in the right order. Learn why a stack is the natural tool, with a Python solution and the mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-parentheses/`},{title:`LeetCode 200: Number of Islands, Explained`,description:`Count the islands in a grid of land and water. Learn to flood each island with a depth-first or breadth-first search, in Python, and how to avoid a stack overflow on big grids.`,date:`2026-11-19`,urlPath:`/blog/leetcode/number-of-islands/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`Algorithm visualizers`,description:`See algorithms run step by step, with animated bars and their code: bubble sort, insertion sort, selection sort, merge sort, quick sort, binary search, stack, queue, reverse a linked list, binary search tree, binary heap, breadth-first search, depth-first search, dijkstra's shortest paths, shortest path on a grid, a* pathfinding, javascript event loop, git branching and rebase, tcp handshake.`,urlPath:`/visualizers/`}]}})})}));