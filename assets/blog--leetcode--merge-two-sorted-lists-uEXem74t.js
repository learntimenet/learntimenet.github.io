import{E as e,T as t,t as n,w as r}from"./LoaderHider-DXAL0qs1.js";import{t as i}from"./BlogArticlePage-Cgtknh-i.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 21: Merge Two Sorted Lists, Explained`,description:`Merge two sorted linked lists into one sorted list by relinking their nodes. Learn the dummy head trick, with a Python solution, a step-by-step trace and the complexity.`,date:`2026-11-19`,urlPath:`/blog/leetcode/merge-two-sorted-lists/`,html:`<p>You get the first nodes of two singly linked lists, each sorted from smallest to largest. Join them into one sorted list, made of the same nodes, and return its first node.</p>
<p>Merging <code>1 → 4 → 9</code> and <code>2 → 3 → 10</code> gives <code>1 → 2 → 3 → 4 → 9 → 10</code>.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>The smallest remaining value is always at the front of one of the two lists. Compare the two fronts, take the smaller node, and move forward in that list. When one list runs out, the rest of the other is already sorted: attach it as it is.</p>
<p>It&#39;s the merge step of <a href="/visualizers/merge-sort/">merge sort</a>, on linked lists.</p>
<p>The <strong>dummy head</strong> avoids a special case for the first node: start with a fake node, append to it, and return what comes after it.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">class</span><span style="color:#953800;--shiki-dark:#FFA657"> Node</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    def</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> __init__</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(self, value, next</span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF">None</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">):</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">        self</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">        self</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.next </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> next</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> merge</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(first, second):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    dummy </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Node(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    tail </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> dummy</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    while</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> first </span><span style="color:#CF222E;--shiki-dark:#FF7B72">and</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> second:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> first.value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> second.value:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            tail.next, first </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> first, first.next</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        else</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            tail.next, second </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> second, second.next</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        tail </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> tail.next</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    tail.next </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> first </span><span style="color:#CF222E;--shiki-dark:#FF7B72">or</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> second</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> dummy.next</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>1 → 4 → 9</code> and <code>2 → 3 → 10</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Fronts compared</th>
<th>Takes</th>
<th>Merged so far</th>
</tr>
</thead>
<tbody><tr>
<td>1 and 2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>4 and 2</td>
<td>2</td>
<td>1, 2</td>
</tr>
<tr>
<td>4 and 3</td>
<td>3</td>
<td>1, 2, 3</td>
</tr>
<tr>
<td>4 and 10</td>
<td>4</td>
<td>1, 2, 3, 4</td>
</tr>
<tr>
<td>9 and 10</td>
<td>9</td>
<td>1, 2, 3, 4, 9</td>
</tr>
<tr>
<td>(first is done)</td>
<td>10</td>
<td>1, 2, 3, 4, 9, 10</td>
</tr>
</tbody></table>
</div>
<h2 id="complexity">Complexity</h2>
<p>Each step places one node: O(n + m) time for lists of n and m nodes. No new node is created besides the dummy: O(1) extra space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Copying values into new nodes.</strong> It works, but uses O(n + m) memory the problem doesn&#39;t need: relink the nodes you have.</li>
<li><strong>Losing the rest.</strong> Stopping when one list ends without attaching the other drops nodes.</li>
<li><strong>Using <code>&lt;</code> instead of <code>&lt;=</code>.</strong> Both give a sorted list, but <code>&lt;=</code> keeps equal values in their original order, which makes the merge stable.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/merge-two-sorted-lists/">LeetCode problem 21, Merge Two Sorted Lists</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 242: Valid Anagram, Explained`,description:`Decide whether two words use exactly the same letters. Compare sorting with counting letters, in Python, and learn which one to choose and why.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-anagram/`},{title:`LeetCode 3: Longest Substring Without Repeating Characters, Explained`,description:`Find the longest run of characters with no repeat. Learn the sliding window technique with a hash map, in Python, with a step-by-step trace.`,date:`2026-11-19`,urlPath:`/blog/leetcode/longest-substring-without-repeating-characters/`},{title:`LeetCode 53: Maximum Subarray, Explained`,description:`Find the block of consecutive numbers with the biggest sum. Learn Kadane's algorithm, why it works, and a Python solution that runs in one pass.`,date:`2026-11-19`,urlPath:`/blog/leetcode/maximum-subarray/`},{title:`LeetCode 70: Climbing Stairs, Explained`,description:`Count the ways to climb n stairs taking one or two steps at a time. See why the answer follows the Fibonacci numbers, and go from slow recursion to an O(1)-space loop in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/climbing-stairs/`}],relatedPages:[{title:`Merge sort visualizer`,description:`Watch merge sort split the array in halves until single values remain, then merge the sorted halves back together.`,urlPath:`/visualizers/merge-sort/`},{title:`Reverse a linked list visualizer`,description:`Watch three pointers, prev, current and next, walk along a linked list and turn every arrow around, in one pass.`,urlPath:`/visualizers/reverse-linked-list/`}]}})})}));