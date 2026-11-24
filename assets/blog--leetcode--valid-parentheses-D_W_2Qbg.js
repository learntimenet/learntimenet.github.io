import{D as e,E as t,T as n,t as r}from"./LoaderHider-D_H9EqK2.js";import{t as i}from"./BlogArticlePage-bSQQ2zBo.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`LeetCode 20: Valid Parentheses, Explained`,description:`Check that every bracket in a string is closed by the right kind, in the right order. Learn why a stack is the natural tool, with a Python solution and the mistakes to avoid.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-parentheses/`,html:`<p>A string holds only the brackets <code>( ) [ ] { }</code>. Decide whether it&#39;s balanced: every opening bracket is closed by the same kind of bracket, and a bracket opened later is closed first.</p>
<p><code>&quot;{[()]}&quot;</code> is balanced. <code>&quot;([)]&quot;</code> isn&#39;t: the <code>[</code> is closed after the <code>(</code> it contains was left open. <code>&quot;((&quot;</code> isn&#39;t either: two brackets never close.</p>
<h2 id="the-key-idea">The Key Idea</h2>
<p>The last bracket you opened is the first one that must close. &quot;Last in, first out&quot; is exactly what a <a href="/visualizers/stack/">stack</a> does.</p>
<ul>
<li>On an opening bracket, push it.</li>
<li>On a closing bracket, the top of the stack must be its partner. Pop it; if it isn&#39;t the partner, or the stack is empty, the string is invalid.</li>
<li>At the end, the stack must be empty: an opening bracket left on it never closed.</li>
</ul>
<h2 id="the-solution">The Solution</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">def</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> is_balanced</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(text):</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    partner </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">")"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"("</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"]"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"["</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"}"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"{"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    stack </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> []</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> char </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> text:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> char </span><span style="color:#CF222E;--shiki-dark:#FF7B72">in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> partner:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            if</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> not</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stack </span><span style="color:#CF222E;--shiki-dark:#FF7B72">or</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stack.pop() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> partner[char]:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">                return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> False</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        else</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            stack.append(char)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> not</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> stack</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="step-by-step">Step by Step</h2>
<p>With <code>&quot;{[()]}&quot;</code>:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Character</th>
<th>Action</th>
<th>Stack after</th>
</tr>
</thead>
<tbody><tr>
<td><code>{</code></td>
<td>Push</td>
<td><code>{</code></td>
</tr>
<tr>
<td><code>[</code></td>
<td>Push</td>
<td><code>{ [</code></td>
</tr>
<tr>
<td><code>(</code></td>
<td>Push</td>
<td><code>{ [ (</code></td>
</tr>
<tr>
<td><code>)</code></td>
<td>Pop <code>(</code>, matches</td>
<td><code>{ [</code></td>
</tr>
<tr>
<td><code>]</code></td>
<td>Pop <code>[</code>, matches</td>
<td><code>{</code></td>
</tr>
<tr>
<td><code>}</code></td>
<td>Pop <code>{</code>, matches</td>
<td>empty</td>
</tr>
</tbody></table>
</div>
<p>The stack ends empty, so the string is balanced. With <code>&quot;([)]&quot;</code>, the <code>)</code> pops a <code>[</code>, which doesn&#39;t match: invalid.</p>
<h2 id="complexity">Complexity</h2>
<p>One pass over the string: O(n) time. The stack can hold every character when they&#39;re all opening brackets: O(n) extra space.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Counting instead of stacking.</strong> Counting each kind catches <code>&quot;((&quot;</code> but not <code>&quot;([)]&quot;</code>, where every count is balanced and the order is wrong.</li>
<li><strong>Popping an empty stack.</strong> A string starting with <code>)</code> must return false, not crash: check the stack before popping.</li>
<li><strong>Forgetting the end.</strong> <code>&quot;((&quot;</code> never hits a mismatch. Only the final &quot;is the stack empty?&quot; check catches it.</li>
</ul>
<h2 id="about-this-problem">About This Problem</h2>
<p>This is <a href="https://leetcode.com/problems/valid-parentheses/">LeetCode problem 20, Valid Parentheses</a>, described here in our own words, with our own examples and code. Read the original statement and submit your solution there. LeetCode is a trademark of LeetCode LLC; Learn Time is not affiliated with or endorsed by LeetCode.</p>
`,headings:[{id:`the-key-idea`,text:`The Key Idea`},{id:`the-solution`,text:`The Solution`},{id:`step-by-step`,text:`Step by Step`},{id:`complexity`,text:`Complexity`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`about-this-problem`,text:`About This Problem`}],parents:[],related:[{title:`LeetCode 200: Number of Islands, Explained`,description:`Count the islands in a grid of land and water. Learn to flood each island with a depth-first or breadth-first search, in Python, and how to avoid a stack overflow on big grids.`,date:`2026-11-19`,urlPath:`/blog/leetcode/number-of-islands/`},{title:`LeetCode 21: Merge Two Sorted Lists, Explained`,description:`Merge two sorted linked lists into one sorted list by relinking their nodes. Learn the dummy head trick, with a Python solution, a step-by-step trace and the complexity.`,date:`2026-11-19`,urlPath:`/blog/leetcode/merge-two-sorted-lists/`},{title:`LeetCode 242: Valid Anagram, Explained`,description:`Decide whether two words use exactly the same letters. Compare sorting with counting letters, in Python, and learn which one to choose and why.`,date:`2026-11-19`,urlPath:`/blog/leetcode/valid-anagram/`},{title:`LeetCode 3: Longest Substring Without Repeating Characters, Explained`,description:`Find the longest run of characters with no repeat. Learn the sliding window technique with a hash map, in Python, with a step-by-step trace.`,date:`2026-11-19`,urlPath:`/blog/leetcode/longest-substring-without-repeating-characters/`}],relatedPages:[{title:`Stack visualizer`,description:`Watch values pile up on a stack and come back off in reverse order: the last one pushed is the first one popped.`,urlPath:`/visualizers/stack/`},{title:`Data structures and algorithms interview questions`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,urlPath:`/interview/algorithms/`}]}})})}));