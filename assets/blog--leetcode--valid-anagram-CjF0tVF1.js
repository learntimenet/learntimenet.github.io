import{C as e,S as t,t as n,x as r}from"./LoaderHider-BoK-Jrj2.js";import{t as i}from"./BlogArticlePage-BDdZbrbZ.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 242: Valid Anagram, Explained`,description:`Decide whether two words use exactly the same letters. Compare sorting with counting letters, in Python, and learn which one to choose and why.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-anagram/`,html:`<p>Two words are anagrams when one is the other with its letters in another order. Given two lowercase strings, say whether they&#39;re anagrams.</p>
<p><code>&quot;listen&quot;</code> and <code>&quot;silent&quot;</code> are. <code>&quot;apple&quot;</code> and <code>&quot;pale&quot;</code> aren&#39;t: they don&#39;t even have the same length.</p>
<h2 id="sorting">Sorting</h2>
<p>Sort both strings&#39; letters and compare: anagrams give the same sorted letters.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> is_anagram_sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(first, second):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(first) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> sorted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(second)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Short and clear, but sorting takes O(n log n) time.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>Two words are anagrams when every letter appears the same number of times in both. Count the letters of the first word, then subtract the letters of the second: every count must come back to zero.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> is_anagram</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(first, second):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(first) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(second):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> False</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    counts </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {}</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> letter </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> first:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        counts[letter] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> counts.get(letter, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> letter </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> second:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> counts.get(letter, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">==</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> False</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        counts[letter] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> True</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Python&#39;s <code>collections.Counter(first) == Counter(second)</code> does the same in one line, and is fine in an interview once you can explain it.</p>
<h2 id="step-by-step">Step by Step</h2>
<p>With <code>&quot;listen&quot;</code> and <code>&quot;silent&quot;</code>, the counts after the first word are <code>l: 1, i: 1, s: 1, t: 1, e: 1, n: 1</code>. Each letter of <code>&quot;silent&quot;</code> takes one away, and none is ever missing. With the same length, nothing can be left over: they&#39;re anagrams.</p>
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
<td>Sorting</td>
<td>O(n log n)</td>
<td>O(n), for the sorted copies</td>
</tr>
<tr>
<td>Counting</td>
<td>O(n)</td>
<td>O(k), for k different characters</td>
</tr>
</tbody></table>
</div>
<p>With only lowercase English letters, k is at most 26, so counting uses constant space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Skipping the length check.</strong> Without it, <code>&quot;aab&quot;</code> and <code>&quot;ab&quot;</code> would pass the subtraction loop.</li>
<li><strong>Comparing sets of letters.</strong> <code>set(&quot;aab&quot;) == set(&quot;abb&quot;)</code> is true, but the counts differ.</li>
<li><strong>Unicode.</strong> With accents or emoji, one visible character can be several code points: normalize the strings first, if the input allows them.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/valid-anagram/">LeetCode problem 242, Valid Anagram</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`sorting`,text:`Sorting`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 3: Longest Substring Without Repeating Characters, Explained`,description:`Find the longest run of characters with no repeat. Learn the sliding window technique with a hash map, in Python, with a step-by-step trace.`,date:`2026-11-19`,urlPath:`/blog/leetcode/longest-substring-without-repeating-characters/`},{title:`LeetCode 53: Maximum Subarray, Explained`,description:`Find the block of consecutive numbers with the biggest sum. Learn Kadane's algorithm, why it works, and a Python solution that runs in one pass.`,date:`2026-11-19`,urlPath:`/blog/leetcode/maximum-subarray/`},{title:`LeetCode 70: Climbing Stairs, Explained`,description:`Count the ways to climb n stairs taking one or two steps at a time. See why the answer follows the Fibonacci numbers, and go from slow recursion to an O(1)-space loop in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/climbing-stairs/`},{title:`LeetCode 704: Binary Search, Explained`,description:`Find a number in a sorted list by halving the range at each step. Learn the classic binary search in Python, its loop condition, and the off-by-one mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/binary-search/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`JavaScript Quiz`,description:`Check your JavaScript knowledge: types, equality, scope, closures, promises, and the event loop.`,urlPath:`/quiz/javascript/`}]}})})}));