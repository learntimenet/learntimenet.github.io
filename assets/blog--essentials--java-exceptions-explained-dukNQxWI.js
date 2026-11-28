import{C as e,S as t,t as n,x as r}from"./LoaderHider-B2RGA5Hn.js";import{t as i}from"./BlogArticlePage-CY-ftdK2.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Exceptions in Java: Checked, Unchecked and try-with-resources`,description:`How Java reports errors, and how to handle them well. try, catch and finally, checked vs unchecked exceptions, try-with-resources to always close files and connections, custom exceptions, wrapping causes, and the mistakes to avoid.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-exceptions-explained/`,html:`<p>A file is missing, the network drops, or a user types &quot;abc&quot; where a number belongs. Java reports problems like these with <strong>exceptions</strong>. Handling them well is the difference between a program that crashes with a 300-line stack trace and one that recovers, or fails with a clear message.</p>
<h2 id="try-catch-and-finally">try, catch and finally</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">static</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> int</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> parsePort</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(String text) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    try</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Integer.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">parseInt</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(text);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">catch</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (NumberFormatException </span><span style="color:#953800;--shiki-dark:#FFA657">e</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        System.out.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">println</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Not a number: "</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> text);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 8080</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">finally</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        System.out.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">println</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"parsed"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li>The <strong>try</strong> block runs the code that might fail.</li>
<li>If it throws a <code>NumberFormatException</code>, the matching <strong>catch</strong> block runs instead of crashing.</li>
<li>The <strong>finally</strong> block runs in every case, success or failure, even after a <code>return</code>.</li>
</ul>
<p><code>parsePort(&quot;abc&quot;)</code> prints &quot;Not a number: abc&quot;, then &quot;parsed&quot;, and returns 8080.</p>
<h2 id="checked-vs-unchecked">Checked vs Unchecked</h2>
<p>Java has two kinds of exceptions, and the compiler treats them differently.</p>
<p><strong>Checked exceptions</strong> extend <code>Exception</code>, like <code>IOException</code>. They describe problems outside your program&#39;s control: a missing file, a closed connection. The compiler <strong>forces</strong> you to deal with them: catch them, or declare them with <code>throws</code>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">String </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">readConfig</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() throws IOException {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Files.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">readString</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Path.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">of</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"config.json"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><strong>Unchecked exceptions</strong> extend <code>RuntimeException</code>, like <code>NullPointerException</code>, <code>IllegalArgumentException</code> or <code>ArrayIndexOutOfBoundsException</code>. They usually mean a bug or invalid input, and the compiler doesn&#39;t force you to catch them.</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Kind</th>
<th>Extends</th>
<th>Examples</th>
<th>Usually means</th>
</tr>
</thead>
<tbody><tr>
<td>Checked</td>
<td><code>Exception</code></td>
<td><code>IOException</code>, <code>SQLException</code></td>
<td>The outside world failed</td>
</tr>
<tr>
<td>Unchecked</td>
<td><code>RuntimeException</code></td>
<td><code>NullPointerException</code>, <code>IllegalArgumentException</code></td>
<td>A bug or bad input</td>
</tr>
<tr>
<td>Error</td>
<td><code>Error</code></td>
<td><code>OutOfMemoryError</code>, <code>StackOverflowError</code></td>
<td>Don&#39;t catch: the JVM is in trouble</td>
</tr>
</tbody></table>
</div>
<p>Modern libraries, like Spring, mostly use unchecked exceptions, so you only catch the ones you can actually handle.</p>
<h2 id="try-with-resources">try-with-resources</h2>
<p>Files, database connections and network sockets must be <strong>closed</strong>, or the program runs out of them. try-with-resources closes them automatically, even if an exception happens:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">try</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (BufferedReader</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> reader</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Files.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">newBufferedReader</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Path.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">of</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"data.csv"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">))) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    String</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> line;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    while</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ((line </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> reader.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">readLine</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> null</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">        process</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(line);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}   </span><span style="color:#6E7781;--shiki-dark:#8B949E">// reader.close() is called here, always</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It works with any class implementing <code>AutoCloseable</code>. With several resources, they&#39;re closed in <strong>reverse</strong> order of opening. Always prefer it over closing in <code>finally</code> by hand.</p>
<h2 id="throwing-your-own">Throwing Your Own</h2>
<p>Throw an exception when a method can&#39;t do its job, especially for invalid arguments:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> withdraw</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cents) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (cents </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        throw</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> IllegalArgumentException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"amount must be positive: "</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cents);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    …</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Note the difference: <code>throw</code> throws an exception now; <code>throws</code> in a method signature declares that it might.</p>
<h3 id="custom-exceptions">Custom Exceptions</h3>
<p>Create your own when callers need to tell your error apart from others:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">class</span><span style="color:#953800;--shiki-dark:#FFA657"> InsufficientFundsException</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> RuntimeException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    InsufficientFundsException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">long</span><span style="color:#953800;--shiki-dark:#FFA657"> missingCents</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">        super</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Missing "</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> missingCents </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> " cents"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Give it a clear message with the values involved: it&#39;s what you&#39;ll read in the logs at 2 a.m.</p>
<h3 id="wrapping-and-keeping-the-cause">Wrapping and Keeping the Cause</h3>
<p>When you catch a low-level exception and throw a higher-level one, <strong>pass the original as the cause</strong>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">try</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Files.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">readString</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Path.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">of</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"config.json"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">));</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">} </span><span style="color:#CF222E;--shiki-dark:#FF7B72">catch</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (IOException </span><span style="color:#953800;--shiki-dark:#FFA657">e</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    throw</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> IllegalStateException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Can't load config"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, e);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The stack trace then shows both, with &quot;Caused by: java.nio.file.NoSuchFileException&quot;. Dropping the cause throws away the real reason.</p>
<h2 id="mistakes-to-avoid">Mistakes to Avoid</h2>
<ul>
<li><strong>Swallowing exceptions:</strong> <code>catch (Exception e) {}</code> hides failures. At least log them, or don&#39;t catch them.</li>
<li><strong>Catching too broadly:</strong> <code>catch (Exception e)</code> also catches bugs you didn&#39;t mean to handle. Catch the specific types you can deal with.</li>
<li><strong>Using exceptions for normal flow:</strong> checking a condition is clearer and faster than throwing and catching.</li>
<li><strong>Logging and rethrowing:</strong> the same error then appears several times in the logs. Do one or the other.</li>
<li><strong>Returning null on failure:</strong> the caller forgets to check, and gets a <code>NullPointerException</code> far from the real problem. Throw, or return an <code>Optional</code>.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li><code>try</code> runs risky code, <code>catch</code> handles specific exceptions, <code>finally</code> always runs.</li>
<li>Checked exceptions (<code>IOException</code>) must be caught or declared; unchecked ones (<code>RuntimeException</code>) usually mean bugs or bad input.</li>
<li>Use try-with-resources to always close files and connections.</li>
<li>Throw <code>IllegalArgumentException</code> for bad input, and custom exceptions with clear messages when callers need to tell them apart.</li>
<li>Keep the cause when wrapping, and never swallow exceptions silently.</li>
</ol>
`,headings:[{id:`try-catch-and-finally`,text:`try, catch and finally`},{id:`checked-vs-unchecked`,text:`Checked vs Unchecked`},{id:`try-with-resources`,text:`try-with-resources`},{id:`throwing-your-own`,text:`Throwing Your Own`},{id:`mistakes-to-avoid`,text:`Mistakes to Avoid`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Fetching Data in React: Loading, Errors and Race Conditions`,description:`Load data from an API in React the right way. A fetch in useEffect with loading and error states, checking response.ok, aborting stale requests to avoid race conditions, a reusable hook, and when to use a library like TanStack Query.`,date:`2026-11-24`,urlPath:`/blog/essentials/fetching-data-in-react/`},{title:`Forms in React: Controlled Inputs and Validation`,description:`Read and check what users type in React. Controlled inputs with useState, handling submit, checkboxes and selects, one state object for many fields, validation with helpful, accessible error messages, and when to use a form library.`,date:`2026-11-24`,urlPath:`/blog/essentials/forms-in-react/`},{title:`How to Approach a System Design Interview`,description:`A repeatable plan for a 45-minute system design interview, from requirements and estimates to the high-level design, deep dives and trade-offs, with the mistakes that cost candidates the most.`,date:`2026-11-24`,urlPath:`/blog/essentials/how-to-approach-a-system-design-interview/`},{title:`HTML Basics: Elements, Forms and Accessibility`,description:`The HTML every web developer needs. A page's structure, headings and text, links and images, lists, semantic elements like header, nav and main, forms with labels, and the accessibility habits that make a page usable by everyone.`,date:`2026-11-24`,urlPath:`/blog/essentials/html-basics/`}],relatedPages:[{title:`Java Quiz`,description:`Test your Java basics: equality, strings, collections, exceptions, and the keywords that come up every day.`,urlPath:`/quiz/java/`},{title:`Java interview questions`,description:`Practice Java interview questions on HashMap and ConcurrentHashMap, JVM memory, garbage collection, concurrency, and records, with clear answers and code.`,urlPath:`/interview/java/`},{title:`How to Read a Stack Trace Without Panicking`,description:`A stack trace looks scary, but it tells you exactly where your code broke. Learn to read Java, JavaScript and Python stack traces, find the line that matters, and fix the bug faster.`,urlPath:`/blog/essentials/how-to-read-a-stack-trace/`}]}})})}));