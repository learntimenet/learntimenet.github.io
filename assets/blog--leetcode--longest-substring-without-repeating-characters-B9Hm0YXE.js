import{C as e,S as t,t as n,x as r}from"./LoaderHider-CY1vMfpC.js";import{t as i}from"./BlogArticlePage-DnsDAnA1.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 3: Longest Substring Without Repeating Characters, Explained`,description:`Find the longest run of characters with no repeat. Learn the sliding window technique with a hash map, in Python, with a step-by-step trace.`,date:`2026-11-19`,urlPath:`/blog/leetcode/longest-substring-without-repeating-characters/`,html:`<p>In a string, find the longest stretch of consecutive characters where no character appears twice, and return its length.</p>
<p>In <code>&quot;tmmzuxt&quot;</code>, the longest such stretch is <code>&quot;mzuxt&quot;</code>: 5 characters. In <code>&quot;aaaa&quot;</code>, it&#39;s <code>&quot;a&quot;</code>: 1.</p>
<h2 id="brute-force">Brute Force</h2>
<p>Check every substring for repeats: there are O(n²) substrings, and checking each one takes up to O(n) more. Far too slow for long strings.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>Use a <strong>sliding window</strong>: two positions, <code>start</code> and the current one, that frame a stretch with no repeats.</p>
<ul>
<li>Move the right edge forward one character at a time.</li>
<li>If the new character already appears <strong>inside</strong> the window, slide <code>start</code> just past its previous position.</li>
<li>After each step, the window has no repeats: compare its length with the best.</li>
</ul>
<p>A map from each character to the last position where you saw it tells you where to move <code>start</code> in one jump.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> longest_unique</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(text):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    last_seen </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {}</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    start </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> best </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i, char </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> enumerate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(text):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> last_seen.get(char, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">>=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> start:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            start </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> last_seen[char] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        last_seen[char] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        best </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> max</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(best, i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> start </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> best</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>&quot;tmmzuxt&quot;</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>i</th>
<th>Char</th>
<th>Seen inside window?</th>
<th>start</th>
<th>Window</th>
<th>Best</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>t</td>
<td>No</td>
<td>0</td>
<td>t</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>m</td>
<td>No</td>
<td>0</td>
<td>tm</td>
<td>2</td>
</tr>
<tr>
<td>2</td>
<td>m</td>
<td>Yes, at 1</td>
<td>2</td>
<td>m</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>z</td>
<td>No</td>
<td>2</td>
<td>mz</td>
<td>2</td>
</tr>
<tr>
<td>4</td>
<td>u</td>
<td>No</td>
<td>2</td>
<td>mzu</td>
<td>3</td>
</tr>
<tr>
<td>5</td>
<td>x</td>
<td>No</td>
<td>2</td>
<td>mzux</td>
<td>4</td>
</tr>
<tr>
<td>6</td>
<td>t</td>
<td>At 0, before start</td>
<td>2</td>
<td>mzuxt</td>
<td>5</td>
</tr>
</tbody></table>
</div>
<p>The last <code>t</code> was seen at position 0, outside the window, so the window doesn&#39;t move: that&#39;s the case people often get wrong.</p>
<h2 id="complexity">Complexity</h2>
<p>Each character is visited once: O(n) time. The map holds at most one entry per distinct character: O(k) space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Moving <code>start</code> backwards.</strong> Without the <code>&gt;= start</code> check, the last <code>t</code> above would move <code>start</code> back to 1 and break the window.</li>
<li><strong>Using a set and removing one by one.</strong> It works too, with a <code>while</code> loop that drops characters from the left, but the map jumps straight to the right place.</li>
<li><strong>Off by one.</strong> The window from <code>start</code> to <code>i</code> holds <code>i - start + 1</code> characters.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">LeetCode problem 3, Longest Substring Without Repeating Characters</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`brute-force`,text:`Brute Force`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 53: Maximum Subarray, Explained`,description:`Find the block of consecutive numbers with the biggest sum. Learn Kadane's algorithm, why it works, and a Python solution that runs in one pass.`,date:`2026-11-19`,urlPath:`/blog/leetcode/maximum-subarray/`},{title:`LeetCode 70: Climbing Stairs, Explained`,description:`Count the ways to climb n stairs taking one or two steps at a time. See why the answer follows the Fibonacci numbers, and go from slow recursion to an O(1)-space loop in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/climbing-stairs/`},{title:`LeetCode 704: Binary Search, Explained`,description:`Find a number in a sorted list by halving the range at each step. Learn the classic binary search in Python, its loop condition, and the off-by-one mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/binary-search/`},{title:`LeetCode 217: Contains Duplicate, Explained`,description:`Find out whether any number appears twice in a list. Compare checking every pair, sorting and a hash set, in Python, and see why the set wins.`,date:`2026-11-21`,urlPath:`/blog/leetcode/contains-duplicate/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`},{title:`Queue visualizer`,description:`Watch values join the back of a queue and leave from the front, in the order they arrived: first in, first out.`,urlPath:`/visualizers/queue/`}]}})})}));