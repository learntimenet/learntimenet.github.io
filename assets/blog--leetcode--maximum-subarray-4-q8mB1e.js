import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cpmy0p86.js";import{t as i}from"./BlogArticlePage-uRZXyIte.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 53: Maximum Subarray, Explained`,description:`Find the block of consecutive numbers with the biggest sum. Learn Kadane's algorithm, why it works, and a Python solution that runs in one pass.`,date:`2026-11-19`,urlPath:`/blog/leetcode/maximum-subarray/`,html:`<p>You get a list of whole numbers, some negative. Find the consecutive block, at least one number long, whose sum is the biggest, and return that sum.</p>
<p>With daily gains and losses <code>[3, -5, 4, -1, 2, 6, -7, 3]</code>, the best block is <code>[4, -1, 2, 6]</code>: its sum is 11.</p>
<h2 id="brute-force">Brute Force</h2>
<p>Every block has a start and an end: try them all and keep the best sum. That&#39;s O(n²) blocks, even when you add up each one as you extend it.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>Walk the list and ask, at each number: does the best block <strong>ending here</strong> include what came before, or start fresh?</p>
<ul>
<li>If the best sum ending at the previous number is positive, adding it helps: extend the block.</li>
<li>If it&#39;s zero or negative, it only drags the sum down: start a new block at this number.</li>
</ul>
<p>The answer is the best of these &quot;ending here&quot; sums. This is Kadane&#39;s algorithm, a small case of dynamic programming.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> max_subarray</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    best </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> current </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> numbers[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> number </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> numbers[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:]:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        current </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> max</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(number, current </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> number)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        best </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> max</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(best, current)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> best</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>[3, -5, 4, -1, 2, 6, -7, 3]</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Number</th>
<th>Best ending here</th>
<th>Best so far</th>
</tr>
</thead>
<tbody><tr>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>−5</td>
<td>max(−5, −2) = −2</td>
<td>3</td>
</tr>
<tr>
<td>4</td>
<td>max(4, 2) = 4</td>
<td>4</td>
</tr>
<tr>
<td>−1</td>
<td>max(−1, 3) = 3</td>
<td>4</td>
</tr>
<tr>
<td>2</td>
<td>max(2, 5) = 5</td>
<td>5</td>
</tr>
<tr>
<td>6</td>
<td>max(6, 11) = 11</td>
<td>11</td>
</tr>
<tr>
<td>−7</td>
<td>max(−7, 4) = 4</td>
<td>11</td>
</tr>
<tr>
<td>3</td>
<td>max(3, 7) = 7</td>
<td>11</td>
</tr>
</tbody></table>
</div>
<h2 id="complexity">Complexity</h2>
<p>One pass: O(n) time, and two variables: O(1) extra space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Starting at 0.</strong> With <code>[-4, -2, -9]</code>, starting <code>best</code> at 0 returns 0, but the block must hold a number: the answer is −2. Start from the first number.</li>
<li><strong>Resetting too eagerly.</strong> Resetting <code>current</code> to 0 whenever it&#39;s negative works, but only if <code>best</code> is updated before the reset; <code>max(number, current + number)</code> avoids the question.</li>
<li><strong>Returning the block.</strong> The problem asks for the sum. If you need the block too, remember where <code>current</code> last started.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/maximum-subarray/">LeetCode problem 53, Maximum Subarray</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`brute-force`,text:`Brute Force`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 70: Climbing Stairs, Explained`,description:`Count the ways to climb n stairs taking one or two steps at a time. See why the answer follows the Fibonacci numbers, and go from slow recursion to an O(1)-space loop in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/climbing-stairs/`},{title:`LeetCode 704: Binary Search, Explained`,description:`Find a number in a sorted list by halving the range at each step. Learn the classic binary search in Python, its loop condition, and the off-by-one mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/binary-search/`},{title:`LeetCode 217: Contains Duplicate, Explained`,description:`Find out whether any number appears twice in a list. Compare checking every pair, sorting and a hash set, in Python, and see why the set wins.`,date:`2026-11-21`,urlPath:`/blog/leetcode/contains-duplicate/`},{title:`LeetCode 238: Product of Array Except Self, Explained`,description:`For each position, multiply every other number, without division and in linear time. Learn the prefix and suffix product trick, in Python, step by step.`,date:`2026-11-21`,urlPath:`/blog/leetcode/product-of-array-except-self/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`Merge sort visualizer`,description:`Watch merge sort split the array in halves until single values remain, then merge the sorted halves back together.`,urlPath:`/visualizers/merge-sort/`}]}})})}));