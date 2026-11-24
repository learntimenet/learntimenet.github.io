import{D as e,E as t,T as n,t as r}from"./LoaderHider-Z-hK6SAB.js";import{t as i}from"./BlogArticlePage-DXxXrC8b.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`LeetCode 217: Contains Duplicate, Explained`,description:`Find out whether any number appears twice in a list. Compare checking every pair, sorting and a hash set, in Python, and see why the set wins.`,date:`2026-11-21`,urlPath:`/blog/leetcode/contains-duplicate/`,html:`<p>Given a list of integers, return <code>True</code> if any value appears at least twice, and <code>False</code> if every value is different.</p>
<p><code>[4, 8, 15, 8]</code> contains a duplicate: <code>8</code>. <code>[7, 1, 9]</code> doesn&#39;t.</p>
<h2 id="checking-every-pair">Checking Every Pair</h2>
<p>The first idea is to compare each number with every number after it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> contains_duplicate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> j </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums[i] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums[j]:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">                return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> True</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> False</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It&#39;s correct, but with 100,000 numbers it makes about 5 billion comparisons. That&#39;s O(n²), far too slow.</p>
<h2 id="sorting-first">Sorting First</h2>
<p>After sorting, equal values sit next to each other, so you only compare neighbors:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> contains_duplicate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    nums </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums[i] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums[i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> True</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> False</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>That&#39;s O(n log n) time for the sort. It&#39;s a good answer when memory is very tight and you&#39;re allowed to sort the list in place.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>You don&#39;t need order at all. You only need to remember which numbers you&#39;ve already seen, and ask &quot;have I seen this one?&quot; in constant time. That&#39;s exactly what a hash set does.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> contains_duplicate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    seen </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> set</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> seen:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> True</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        seen.add(n)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> False</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It stops at the first duplicate, so a repeat near the start returns right away.</p>
<h2 id="step-by-step">Step by Step</h2>
<p>With <code>[4, 8, 15, 8]</code>: the set grows to <code>{4}</code>, then <code>{4, 8}</code>, then <code>{4, 8, 15}</code>. The last <code>8</code> is already in the set, so the function returns <code>True</code> after four steps.</p>
<h2 id="complexity">Complexity</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Approach</th>
<th>Time</th>
<th>Extra space</th>
</tr>
</thead>
<tbody><tr>
<td>Every pair</td>
<td>O(n²)</td>
<td>O(1)</td>
</tr>
<tr>
<td>Sort first</td>
<td>O(n log n)</td>
<td>O(1) to O(n)</td>
</tr>
<tr>
<td>Hash set</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
</tbody></table>
</div>
<p>The set trades memory for speed: in the worst case, with no duplicates, it holds every number.</p>
<h2 id="a-one-line-version">A One-Line Version</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> contains_duplicate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">set</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It&#39;s short and clear, but it always builds the full set, even when the duplicate is in the first two numbers. In an interview, mention both, and say which one you&#39;d pick and why.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Sorting the caller&#39;s list.</strong> <code>nums.sort()</code> changes the list passed in. Use <code>sorted(nums)</code> unless changing it is allowed.</li>
<li><strong>Forgetting the empty list.</strong> An empty or one-item list has no duplicates; both solutions above already return <code>False</code>.</li>
<li><strong>Using a list instead of a set.</strong> <code>if n in seen</code> on a list is O(n) per check, which brings back O(n²).</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/contains-duplicate/">LeetCode problem 217, Contains Duplicate</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`checking-every-pair`,text:`Checking Every Pair`},{id:`sorting-first`,text:`Sorting First`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`a-one-line-version`,text:`A One-Line Version`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 238: Product of Array Except Self, Explained`,description:`For each position, multiply every other number, without division and in linear time. Learn the prefix and suffix product trick, in Python, step by step.`,date:`2026-11-21`,urlPath:`/blog/leetcode/product-of-array-except-self/`},{title:`LeetCode 49: Group Anagrams, Explained`,description:`Put words that use the same letters into the same group. Learn the key idea of a canonical key in a hash map, with sorted letters or letter counts, in Python.`,date:`2026-11-20`,urlPath:`/blog/leetcode/group-anagrams/`},{title:`LeetCode 1: Two Sum, Explained`,description:`Find the two numbers of a list that add up to a target. Go from the obvious double loop to a one-pass solution with a hash map, in Python, with the complexity of each.`,date:`2026-11-19`,urlPath:`/blog/leetcode/two-sum/`},{title:`LeetCode 121: Best Time to Buy and Sell Stock, Explained`,description:`Find the biggest profit from buying a stock on one day and selling it on a later one. Learn the one-pass solution that tracks the lowest price so far, in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/best-time-to-buy-and-sell-stock/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`}]}})})}));