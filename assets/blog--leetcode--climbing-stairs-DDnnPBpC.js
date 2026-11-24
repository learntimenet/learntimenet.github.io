import{D as e,E as t,T as n,t as r}from"./LoaderHider-nhEBgbWY.js";import{t as i}from"./BlogArticlePage--wdWzwJN.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`LeetCode 70: Climbing Stairs, Explained`,description:`Count the ways to climb n stairs taking one or two steps at a time. See why the answer follows the Fibonacci numbers, and go from slow recursion to an O(1)-space loop in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/climbing-stairs/`,html:`<p>A staircase has n steps. Each time, you climb either one step or two. In how many different ways can you reach the top?</p>
<p>With 4 steps there are 5 ways: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1 and 2+2.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>Think about your <strong>last</strong> move. To stand on step n, you came either from step n − 1 (one step) or from step n − 2 (two steps). So:</p>
<p>ways(n) = ways(n − 1) + ways(n − 2)</p>
<p>with ways(1) = 1 and ways(2) = 2. That&#39;s the Fibonacci sequence, shifted by one.</p>
<h2 id="plain-recursion-is-too-slow">Plain Recursion Is Too Slow</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> climb_slow</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(n):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> climb_slow(n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> climb_slow(n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It computes the same values again and again: <code>climb_slow(40)</code> makes hundreds of millions of calls. Its time grows exponentially.</p>
<h2 id="the-solution">The Solution</h2>
<p>Each value only needs the two before it, so build them from the bottom up and keep just those two:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> climb</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(n):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    before, last </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # ways(1), ways(2)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> _ </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        before, last </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> last, before </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> last</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> last</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Steps</th>
<th>Ways</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>1 + 2 = 3</td>
</tr>
<tr>
<td>4</td>
<td>2 + 3 = 5</td>
</tr>
<tr>
<td>5</td>
<td>3 + 5 = 8</td>
</tr>
<tr>
<td>6</td>
<td>5 + 8 = 13</td>
</tr>
</tbody></table>
</div>
<h2 id="complexity">Complexity</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Solution</th>
<th>Time</th>
<th>Extra space</th>
</tr>
</thead>
<tbody><tr>
<td>Plain recursion</td>
<td>O(2ⁿ)</td>
<td>O(n)</td>
</tr>
<tr>
<td>Recursion with a cache</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
<tr>
<td>Bottom-up, two variables</td>
<td>O(n)</td>
<td>O(1)</td>
</tr>
</tbody></table>
</div>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Wrong base cases.</strong> ways(2) is 2 (1+1 or 2), not 1.</li>
<li><strong>Counting combinations instead of orders.</strong> 1+2 and 2+1 are different ways: the order of steps matters here.</li>
<li><strong>Big numbers in other languages.</strong> The count grows fast: ways(45) is over a billion. In Java or C, check the integer type for larger n.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/climbing-stairs/">LeetCode problem 70, Climbing Stairs</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`the-key-idea`,text:`The Key Idea`},{id:`plain-recursion-is-too-slow`,text:`Plain Recursion Is Too Slow`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 704: Binary Search, Explained`,description:`Find a number in a sorted list by halving the range at each step. Learn the classic binary search in Python, its loop condition, and the off-by-one mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/binary-search/`},{title:`LeetCode 217: Contains Duplicate, Explained`,description:`Find out whether any number appears twice in a list. Compare checking every pair, sorting and a hash set, in Python, and see why the set wins.`,date:`2026-11-21`,urlPath:`/blog/leetcode/contains-duplicate/`},{title:`LeetCode 238: Product of Array Except Self, Explained`,description:`For each position, multiply every other number, without division and in linear time. Learn the prefix and suffix product trick, in Python, step by step.`,date:`2026-11-21`,urlPath:`/blog/leetcode/product-of-array-except-self/`},{title:`LeetCode 49: Group Anagrams, Explained`,description:`Put words that use the same letters into the same group. Learn the key idea of a canonical key in a hash map, with sorted letters or letter counts, in Python.`,date:`2026-11-20`,urlPath:`/blog/leetcode/group-anagrams/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`Stack visualizer`,description:`Watch values pile up on a stack and come back off in reverse order: the last one pushed is the first one popped.`,urlPath:`/visualizers/stack/`}]}})})}));