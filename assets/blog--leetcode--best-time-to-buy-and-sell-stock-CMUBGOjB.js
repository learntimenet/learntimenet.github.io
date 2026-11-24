import{C as e,S as t,t as n,w as r}from"./LoaderHider-DMu09J5V.js";import{t as i}from"./BlogArticlePage-iNklNWhq.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 121: Best Time to Buy and Sell Stock, Explained`,description:`Find the biggest profit from buying a stock on one day and selling it on a later one. Learn the one-pass solution that tracks the lowest price so far, in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/best-time-to-buy-and-sell-stock/`,html:`<p>You get the price of a stock on each day, in order. Buy once and sell once, on a later day, to make the biggest profit. If no trade makes money, the answer is 0.</p>
<p>With prices <code>[9, 4, 7, 3, 8, 5]</code>, buy at 3 and sell at 8: the profit is 5. Buying at 4 and selling at 8 also gives 4, which is less.</p>
<h2 id="brute-force">Brute Force</h2>
<p>Try every buying day with every later selling day: O(n²) pairs. With a year of minute prices, that&#39;s far too many.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>If you sell today, the best day to have bought is the cheapest day so far. So walk the prices once, keeping two numbers:</p>
<ul>
<li>the lowest price seen so far,</li>
<li>the best profit seen so far.</li>
</ul>
<p>Each day, the profit of selling today is <code>price - lowest</code>. Keep it if it beats the best, then update the lowest.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> max_profit</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(prices):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    lowest </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> float</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"inf"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    best </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> prices:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        best </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> max</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(best, price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> lowest)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        lowest </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> min</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(lowest, price)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> best</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>[9, 4, 7, 3, 8, 5]</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Day</th>
<th>Price</th>
<th>Profit if sold today</th>
<th>Best</th>
<th>Lowest after</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>9</td>
<td>(nothing bought)</td>
<td>0</td>
<td>9</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>4 − 9 = −5</td>
<td>0</td>
<td>4</td>
</tr>
<tr>
<td>3</td>
<td>7</td>
<td>7 − 4 = 3</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>3</td>
<td>3 − 4 = −1</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>5</td>
<td>8</td>
<td>8 − 3 = 5</td>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>6</td>
<td>5</td>
<td>5 − 3 = 2</td>
<td>5</td>
<td>3</td>
</tr>
</tbody></table>
</div>
<h2 id="complexity">Complexity</h2>
<p>One pass: O(n) time, and two variables: O(1) extra space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Taking the lowest and highest prices.</strong> In <code>[9, 1, 2]</code>, the highest price, 9, comes before the lowest, 1: you can&#39;t sell before you buy. The answer there is 1, not 8.</li>
<li><strong>Updating the lowest price first.</strong> Then selling on the day you buy counts as a trade. It still gives 0 profit here, but it hides the order the problem requires.</li>
<li><strong>Returning a negative number.</strong> When prices only fall, no trade is better than a loss: start <code>best</code> at 0.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">LeetCode problem 121, Best Time to Buy and Sell Stock</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`brute-force`,text:`Brute Force`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 20: Valid Parentheses, Explained`,description:`Check that every bracket in a string is closed by the right kind, in the right order. Learn why a stack is the natural tool, with a Python solution and the mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-parentheses/`},{title:`LeetCode 200: Number of Islands, Explained`,description:`Count the islands in a grid of land and water. Learn to flood each island with a depth-first or breadth-first search, in Python, and how to avoid a stack overflow on big grids.`,date:`2026-11-19`,urlPath:`/blog/leetcode/number-of-islands/`},{title:`LeetCode 21: Merge Two Sorted Lists, Explained`,description:`Merge two sorted linked lists into one sorted list by relinking their nodes. Learn the dummy head trick, with a Python solution, a step-by-step trace and the complexity.`,date:`2026-11-19`,urlPath:`/blog/leetcode/merge-two-sorted-lists/`},{title:`LeetCode 242: Valid Anagram, Explained`,description:`Decide whether two words use exactly the same letters. Compare sorting with counting letters, in Python, and learn which one to choose and why.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-anagram/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`Binary search visualizer`,description:`Watch binary search find a value in a sorted array by checking the middle and throwing away half of the values at every step.`,urlPath:`/visualizers/binary-search/`}]}})})}));