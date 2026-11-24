import{D as e,E as t,T as n,t as r}from"./LoaderHider-DmHOT98K.js";import{t as i}from"./BlogArticlePage-D3DlMMq5.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`LeetCode 704: Binary Search, Explained`,description:`Find a number in a sorted list by halving the range at each step. Learn the classic binary search in Python, its loop condition, and the off-by-one mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/binary-search/`,html:`<p>You get a list of numbers sorted from smallest to largest, with no duplicates, and a target. Return the position of the target, or <code>-1</code> if it isn&#39;t there. The solution must run in O(log n) time.</p>
<p>In <code>[2, 5, 8, 12, 16, 23, 38]</code>, the target <code>23</code> is at position 5, and <code>7</code> isn&#39;t there: <code>-1</code>.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>Look at the middle value. Because the list is sorted:</p>
<ul>
<li>if it&#39;s the target, you&#39;re done;</li>
<li>if it&#39;s smaller, the target can only be on the right;</li>
<li>if it&#39;s bigger, the target can only be on the left.</li>
</ul>
<p>Each comparison throws away half of the list. A million numbers take at most 20 steps. Watch it run in the <a href="/visualizers/binary-search/">binary search visualizer</a>.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> search</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers, target):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    low, high </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    while</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> low </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> high:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        middle </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (low </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> high) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">//</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> numbers[middle] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> target:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> middle</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> numbers[middle] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> target:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            low </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> middle </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        else</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            high </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> middle </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> -</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>Looking for <code>23</code> in <code>[2, 5, 8, 12, 16, 23, 38]</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>low</th>
<th>high</th>
<th>middle</th>
<th>Value</th>
<th>Then</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>6</td>
<td>3</td>
<td>12</td>
<td>12 &lt; 23: low = 4</td>
</tr>
<tr>
<td>4</td>
<td>6</td>
<td>5</td>
<td>23</td>
<td>Found: return 5</td>
</tr>
</tbody></table>
</div>
<p>Looking for <code>7</code>, the range shrinks to nothing (<code>low</code> passes <code>high</code>), and the loop ends with <code>-1</code>.</p>
<h2 id="complexity">Complexity</h2>
<p>The range halves at each step: O(log n) time, and O(1) extra space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong><code>while low &lt; high</code>.</strong> With that condition, a range of one number is never checked: searching for the only number of <code>[4]</code> would fail.</li>
<li><strong><code>low = middle</code> instead of <code>middle + 1</code>.</strong> When <code>low</code> and <code>high</code> are next to each other, <code>middle</code> stays the same and the loop never ends.</li>
<li><strong>Overflow.</strong> In Java or C, <code>(low + high) / 2</code> can overflow for huge arrays: write <code>low + (high - low) / 2</code>. Python&#39;s integers don&#39;t overflow.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/binary-search/">LeetCode problem 704, Binary Search</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 217: Contains Duplicate, Explained`,description:`Find out whether any number appears twice in a list. Compare checking every pair, sorting and a hash set, in Python, and see why the set wins.`,date:`2026-11-21`,urlPath:`/blog/leetcode/contains-duplicate/`},{title:`LeetCode 238: Product of Array Except Self, Explained`,description:`For each position, multiply every other number, without division and in linear time. Learn the prefix and suffix product trick, in Python, step by step.`,date:`2026-11-21`,urlPath:`/blog/leetcode/product-of-array-except-self/`},{title:`LeetCode 49: Group Anagrams, Explained`,description:`Put words that use the same letters into the same group. Learn the key idea of a canonical key in a hash map, with sorted letters or letter counts, in Python.`,date:`2026-11-20`,urlPath:`/blog/leetcode/group-anagrams/`},{title:`LeetCode 1: Two Sum, Explained`,description:`Find the two numbers of a list that add up to a target. Go from the obvious double loop to a one-pass solution with a hash map, in Python, with the complexity of each.`,date:`2026-11-19`,urlPath:`/blog/leetcode/two-sum/`}],relatedPages:[{title:`Binary search visualizer`,description:`Watch binary search find a value in a sorted array by checking the middle and throwing away half of the values at every step.`,urlPath:`/visualizers/binary-search/`},{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`}]}})})}));