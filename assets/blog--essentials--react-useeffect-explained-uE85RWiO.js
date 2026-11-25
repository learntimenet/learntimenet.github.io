import{D as e,E as t,T as n,t as r}from"./LoaderHider-BDsmk_sZ.js";import{t as i}from"./BlogArticlePage-Bi2SCAka.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`useEffect Explained, and When You Don't Need It`,description:`What useEffect is for in React, and what it isn't for. Syncing with the outside world, the dependency array, cleanup functions, why effects run twice in development, and the common effects you should replace with plain code.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-useeffect-explained/`,html:`<p><code>useEffect</code> is the most misused hook in React. It has one job: keep a component <strong>in sync with something outside React</strong>, like the page title, a timer, a WebSocket or a chart library. Most bugs come from using it for things that aren&#39;t outside React at all.</p>
<h2 id="what-an-effect-does">What an Effect Does</h2>
<p>React components describe the page. An <strong>effect</strong> is code that runs <strong>after</strong> React has updated the page, to sync something else:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { useEffect } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">from</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "react"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> PageTitle</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({ </span><span style="color:#953800;--shiki-dark:#FFA657">count</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }) {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  useEffect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    document.title </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> \`\${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">count</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">} new messages\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }, [count]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> null</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Every time <code>count</code> changes, React re-renders, updates the page, then runs the effect, so the browser tab&#39;s title matches.</p>
<h2 id="the-dependency-array">The Dependency Array</h2>
<p>The second argument says <strong>when</strong> the effect re-runs:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Code</th>
<th>Runs</th>
</tr>
</thead>
<tbody><tr>
<td><code>useEffect(fn, [count])</code></td>
<td>After the first render, then when <code>count</code> changes</td>
</tr>
<tr>
<td><code>useEffect(fn, [])</code></td>
<td>Once, after the first render</td>
</tr>
<tr>
<td><code>useEffect(fn)</code></td>
<td>After every render (rarely what you want)</td>
</tr>
</tbody></table>
</div>
<p>List <strong>every</strong> value from the component that the effect uses: props, state and functions defined in the component. Leaving one out gives you stale values. The <code>react-hooks/exhaustive-deps</code> lint rule checks this for you; don&#39;t silence it.</p>
<h2 id="cleanup">Cleanup</h2>
<p>If an effect starts something, return a function that stops it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Clock</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({ </span><span style="color:#953800;--shiki-dark:#FFA657">onTick</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }) {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  useEffect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> setInterval</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(onTick, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1000</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> clearInterval</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(id); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// cleanup</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }, [onTick]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> null</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>React runs the cleanup before running the effect again, and when the component is removed. Without it, every re-run would add another timer, and they&#39;d keep running after the component is gone.</p>
<p>The same goes for event listeners (<code>removeEventListener</code>), subscriptions and network requests (abort them).</p>
<h3 id="why-it-runs-twice-in-development">Why It Runs Twice in Development</h3>
<p>In development with Strict Mode, React mounts components, unmounts them and mounts them again. Your effect runs, cleans up, and runs again. That&#39;s on purpose: if a double run breaks your app, your cleanup is missing. In production, it runs once.</p>
<h2 id="when-you-don-t-need-an-effect">When You Don&#39;t Need an Effect</h2>
<p>If there&#39;s no outside system involved, you probably don&#39;t need an effect.</p>
<h3 id="values-you-can-compute">Values You Can Compute</h3>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Unnecessary: an extra render, and a moment where fullName is stale</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0550AE;--shiki-dark:#79C0FF">fullName</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">setFullName</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> useState</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">""</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">useEffect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  setFullName</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">\`\${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">first</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">} \${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">last</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}, [first, last]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Better: just compute it</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> fullName</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> \`\${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">first</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">} \${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">last</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The same for filtered lists, sorted lists and totals. If computing is slow, wrap it in <code>useMemo</code>, not an effect.</p>
<h3 id="reacting-to-a-user-action">Reacting to a User Action</h3>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Unnecessary: the effect runs on any change of \`submitted\`, even unrelated ones</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">useEffect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (submitted) </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">sendAnalytics</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"signup"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}, [submitted]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Better: do it where the action happens</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> handleSubmit</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  setSubmitted</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">true</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  sendAnalytics</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"signup"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Code that runs <strong>because the user did something</strong> belongs in the event handler. Effects are for code that runs <strong>because the component is on the screen</strong>.</p>
<h3 id="resetting-state-when-a-prop-changes">Resetting State When a Prop Changes</h3>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Unnecessary</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">useEffect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(() </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  setComment</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">""</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}, [userId]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Better: a different key gives a fresh component with fresh state</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">Profile</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> userId</span><span style="color:#CF222E;--shiki-dark:#FF7B72">={</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">userId</span><span style="color:#CF222E;--shiki-dark:#FF7B72">}</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> key</span><span style="color:#CF222E;--shiki-dark:#FF7B72">={</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">userId</span><span style="color:#CF222E;--shiki-dark:#FF7B72">}</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> />;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>An infinite loop:</strong> an effect that sets state it also depends on, without a condition, re-runs forever.</li>
<li><strong>Objects and functions as dependencies:</strong> a new object or function is created on every render, so the effect re-runs every time. Move them inside the effect, or memoize them.</li>
<li><strong>Missing cleanup:</strong> timers, listeners and requests that outlive the component.</li>
<li><strong>Fetching without handling races:</strong> see <a href="/blog/essentials/fetching-data-in-react/">Fetching Data in React</a>.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li><code>useEffect</code> syncs a component with something outside React, after the page updates.</li>
<li>List every value the effect uses in its dependency array; let the lint rule check it.</li>
<li>Return a cleanup function for timers, listeners, subscriptions and requests.</li>
<li>Effects run twice in development on purpose, to reveal missing cleanups.</li>
<li>Don&#39;t use effects for computed values, user actions or resetting state: compute, handle events, or use a <code>key</code>.</li>
</ol>
`,headings:[{id:`what-an-effect-does`,text:`What an Effect Does`},{id:`the-dependency-array`,text:`The Dependency Array`},{id:`cleanup`,text:`Cleanup`},{id:`when-you-don-t-need-an-effect`,text:`When You Don't Need an Effect`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Build a REST API With Spring Boot, Step by Step`,description:`Build a small book API with Spring Boot 4. A controller, a service, a JPA entity and repository, validation, clear error responses and a test, then try it with curl.`,date:`2026-11-23`,urlPath:`/blog/essentials/build-a-rest-api-with-spring-boot/`},{title:`Java Collections Explained: List, Set, Map and Queue`,description:`Which Java collection to use and why. ArrayList, HashSet, TreeSet, HashMap, TreeMap, ArrayDeque and PriorityQueue with short examples, plus the traps that cause most bugs.`,date:`2026-11-23`,urlPath:`/blog/essentials/java-collections-explained/`},{title:`Java Streams and Lambdas Explained With Real Examples`,description:`Lambdas, method references and the Stream API on one small list of orders. Filter, map, sort, group, sum and Optional, plus how laziness works and the mistakes to avoid.`,date:`2026-11-23`,urlPath:`/blog/essentials/java-streams-and-lambdas-explained/`},{title:`Unit Testing in Java With JUnit: A Beginner's Guide`,description:`Set up JUnit with Maven and write your first Java unit tests. Assertions, testing exceptions, @BeforeEach, parameterized tests, reading a failure and what makes a good test.`,date:`2026-11-23`,urlPath:`/blog/essentials/unit-testing-java-with-junit/`}],relatedPages:[{title:`React Quiz`,description:`Test your React skills: components, props, state, hooks, effects, keys, and how rendering works.`,urlPath:`/quiz/react/`},{title:`Senior React developer interview questions`,description:`Practice the questions asked to a senior React developer: rendering and re-renders, hooks and effects, state and data fetching, performance and the React Compiler, Suspense and React 19, Server Components and streaming, TypeScript, accessibility and testing.`,urlPath:`/interview/senior-react-developer/`}]}})})}));