import{C as e,S as t,t as n,x as r}from"./LoaderHider-D7OyD3RV.js";import{t as i}from"./BlogArticlePage-Dv6NZAiN.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 1: Two Sum, Explained`,description:`Find the two numbers of a list that add up to a target. Go from the obvious double loop to a one-pass solution with a hash map, in Python, with the complexity of each.`,date:`2026-11-19`,urlPath:`/blog/leetcode/two-sum/`,html:`<p>You get a list of whole numbers and a target. Exactly one pair of numbers in the list adds up to the target: return their two positions. You can&#39;t use the same position twice.</p>
<p>With prices <code>[30, 12, 45, 8]</code> and a budget of <code>53</code>, the answer is <code>[2, 3]</code>: 45 and 8 make 53.</p>
<h2 id="brute-force">Brute Force</h2>
<p>Try every pair: for each number, look at every number after it.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> two_sum_slow</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers, target):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers)):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> j </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers)):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> numbers[i] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> numbers[j] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> target:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">                return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [i, j]</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It works, but with 10,000 numbers that&#39;s about 50 million pairs. The time grows with the square of the list: O(n²).</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>When you stand on a number, you already know which number would complete it: <code>target - number</code>. The question becomes &quot;have I seen that number before?&quot;, and a hash map (a Python <code>dict</code>) answers it in constant time on average.</p>
<p>So walk the list once. For each number, look up its complement in the map. If it&#39;s there, you&#39;re done. If not, remember the number and its position, and move on.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> two_sum</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers, target):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    seen </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {}  </span><span style="color:#6E7781;--shiki-dark:#8B949E"># number -> its position</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i, number </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> enumerate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(numbers):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        complement </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> target </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> number</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> complement </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> seen:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [seen[complement], i]</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        seen[number] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>[30, 12, 45, 8]</code> and a target of <code>53</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Position</th>
<th>Number</th>
<th>Complement</th>
<th>In <code>seen</code>?</th>
<th><code>seen</code> after</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>30</td>
<td>23</td>
<td>No</td>
<td>{30: 0}</td>
</tr>
<tr>
<td>1</td>
<td>12</td>
<td>41</td>
<td>No</td>
<td>{30: 0, 12: 1}</td>
</tr>
<tr>
<td>2</td>
<td>45</td>
<td>8</td>
<td>No</td>
<td>{30: 0, 12: 1, 45: 2}</td>
</tr>
<tr>
<td>3</td>
<td>8</td>
<td>45</td>
<td>Yes, at 2</td>
<td>Return <code>[2, 3]</code></td>
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
<td>Double loop</td>
<td>O(n²)</td>
<td>O(1)</td>
</tr>
<tr>
<td>One-pass map</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
</tbody></table>
</div>
<p>You trade memory for speed: the map can hold up to n numbers.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Storing before checking.</strong> If you put the number in the map first, a target of 10 with a 5 in the list would match the 5 with itself.</li>
<li><strong>Sorting the list.</strong> Sorting and using two pointers also works, in O(n log n), but sorting loses the original positions, which the problem asks for.</li>
<li><strong>Duplicates.</strong> With <code>[4, 4]</code> and a target of 8, the check-then-store order gives <code>[0, 1]</code>, which is right.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/two-sum/">LeetCode problem 1, Two Sum</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`brute-force`,text:`Brute Force`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 121: Best Time to Buy and Sell Stock, Explained`,description:`Find the biggest profit from buying a stock on one day and selling it on a later one. Learn the one-pass solution that tracks the lowest price so far, in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/best-time-to-buy-and-sell-stock/`},{title:`LeetCode 20: Valid Parentheses, Explained`,description:`Check that every bracket in a string is closed by the right kind, in the right order. Learn why a stack is the natural tool, with a Python solution and the mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-parentheses/`},{title:`LeetCode 200: Number of Islands, Explained`,description:`Count the islands in a grid of land and water. Learn to flood each island with a depth-first or breadth-first search, in Python, and how to avoid a stack overflow on big grids.`,date:`2026-11-19`,urlPath:`/blog/leetcode/number-of-islands/`},{title:`LeetCode 21: Merge Two Sorted Lists, Explained`,description:`Merge two sorted linked lists into one sorted list by relinking their nodes. Learn the dummy head trick, with a Python solution, a step-by-step trace and the complexity.`,date:`2026-11-19`,urlPath:`/blog/leetcode/merge-two-sorted-lists/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`JavaScript Quiz`,description:`Check your JavaScript knowledge: types, equality, scope, closures, promises, and the event loop.`,urlPath:`/quiz/javascript/`}]}})})}));