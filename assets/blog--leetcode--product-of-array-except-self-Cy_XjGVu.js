import{C as e,S as t,t as n,x as r}from"./LoaderHider-5mlYNUIu.js";import{t as i}from"./BlogArticlePage-BQUfwQq6.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`LeetCode 238: Product of Array Except Self, Explained`,description:`For each position, multiply every other number, without division and in linear time. Learn the prefix and suffix product trick, in Python, step by step.`,date:`2026-11-21`,urlPath:`/blog/leetcode/product-of-array-except-self/`,html:`<p>Given a list of integers, build a new list where each position holds the product of all the <em>other</em> numbers. You can&#39;t use division, and the solution should run in O(n) time.</p>
<p>For <code>[2, 5, 3, 4]</code>, the answer is <code>[60, 24, 40, 30]</code>: position 0 is <code>5 × 3 × 4 = 60</code>, position 1 is <code>2 × 3 × 4 = 24</code>, and so on.</p>
<h2 id="why-not-divide">Why Not Divide?</h2>
<p>Multiplying everything (<code>120</code>) and dividing by each number gives <code>[60, 24, 40, 30]</code>. But it breaks with zeros: for <code>[3, 0, 2, -1]</code>, the total is <code>0</code>, and you can&#39;t divide by the <code>0</code>. The problem rules division out anyway.</p>
<h2 id="checking-every-pair">Checking Every Pair</h2>
<p>The direct way multiplies all the other numbers for each position:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> product_except_self</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    answer </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> []</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        product </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> j, x </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> enumerate</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> j </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                product </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> x</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        answer.append(product)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> answer</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>That&#39;s O(n²): too slow for long lists.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>The product of everything except position <code>i</code> is:</p>
<blockquote>
<p>(product of everything to the <strong>left</strong> of <code>i</code>) × (product of everything to the <strong>right</strong> of <code>i</code>)</p>
</blockquote>
<p>For <code>[2, 5, 3, 4]</code> at position 2 (the <code>3</code>): left is <code>2 × 5 = 10</code>, right is <code>4</code>, and <code>10 × 4 = 40</code>.</p>
<p>You can compute all the left products in one pass from the start, and all the right products in one pass from the end.</p>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> product_except_self</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> len</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(nums)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    answer </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    left </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(n):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        answer[i] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> left        </span><span style="color:#6E7781;--shiki-dark:#8B949E"># product of nums[0..i-1]</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        left </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums[i]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    right </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> i </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> range</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(n </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        answer[i] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> right      </span><span style="color:#6E7781;--shiki-dark:#8B949E"># times product of nums[i+1..]</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        right </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> nums[i]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> answer</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>[2, 5, 3, 4]</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>i</th>
<th>After the left pass</th>
<th>Right product</th>
<th>Final answer</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>1</td>
<td>5 × 3 × 4 = 60</td>
<td>60</td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>3 × 4 = 12</td>
<td>24</td>
</tr>
<tr>
<td>2</td>
<td>2 × 5 = 10</td>
<td>4</td>
<td>40</td>
</tr>
<tr>
<td>3</td>
<td>2 × 5 × 3 = 30</td>
<td>1</td>
<td>30</td>
</tr>
</tbody></table>
</div>
<p>Zeros need no special case: <code>[3, 0, 2, -1]</code> gives <code>[0, -6, 0, 0]</code>, because only the position of the zero has a product without it.</p>
<h2 id="complexity">Complexity</h2>
<ul>
<li><strong>Time:</strong> O(n), two passes over the list.</li>
<li><strong>Space:</strong> O(1) extra, not counting the answer list: the left and right products are single numbers.</li>
</ul>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Storing separate left and right lists.</strong> It works and is easier to explain first, but uses O(n) extra memory. Mention it, then reuse the answer list.</li>
<li><strong>Off-by-one in the left pass.</strong> Write <code>answer[i]</code> <em>before</em> multiplying <code>left</code> by <code>nums[i]</code>, so position <code>i</code> never includes itself.</li>
<li><strong>Overflow.</strong> Python integers don&#39;t overflow, but in Java or C++ a long list of large numbers can. Say so in an interview.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/product-of-array-except-self/">LeetCode problem 238, Product of Array Except Self</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`why-not-divide`,text:`Why Not Divide?`},{id:`checking-every-pair`,text:`Checking Every Pair`},{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 49: Group Anagrams, Explained`,description:`Put words that use the same letters into the same group. Learn the key idea of a canonical key in a hash map, with sorted letters or letter counts, in Python.`,date:`2026-11-20`,urlPath:`/blog/leetcode/group-anagrams/`},{title:`LeetCode 1: Two Sum, Explained`,description:`Find the two numbers of a list that add up to a target. Go from the obvious double loop to a one-pass solution with a hash map, in Python, with the complexity of each.`,date:`2026-11-19`,urlPath:`/blog/leetcode/two-sum/`},{title:`LeetCode 121: Best Time to Buy and Sell Stock, Explained`,description:`Find the biggest profit from buying a stock on one day and selling it on a later one. Learn the one-pass solution that tracks the lowest price so far, in Python.`,date:`2026-11-19`,urlPath:`/blog/leetcode/best-time-to-buy-and-sell-stock/`},{title:`LeetCode 20: Valid Parentheses, Explained`,description:`Check that every bracket in a string is closed by the right kind, in the right order. Learn why a stack is the natural tool, with a Python solution and the mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-parentheses/`}],relatedPages:[{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`}]}})})}));