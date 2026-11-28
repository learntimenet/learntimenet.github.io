import{C as e,S as t,t as n,x as r}from"./LoaderHider-DMsSyvFD.js";import{t as i}from"./BlogArticlePage-B3jSur1j.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`CSS Basics: Selectors, the Box Model and Units`,description:`How CSS chooses which styles apply and how big things are. Selectors, the cascade and specificity, the box model with padding, border and margin, box-sizing, display, and when to use px, rem, % and viewport units.`,date:`2026-11-24`,urlPath:`/blog/essentials/css-basics/`,html:`<p>CSS decides how a page looks: colors, sizes, spacing and layout. Most CSS confusion comes from two questions: <strong>which rule wins</strong>, and <strong>how big is this box</strong>. Answer those, and the rest is looking up properties.</p>
<h2 id="a-rule">A Rule</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">.card</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  padding</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">16</span><span style="color:#CF222E;--shiki-dark:#FF7B72">px</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  border</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#CF222E;--shiki-dark:#FF7B72">px</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> solid</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> #ddd</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  border-radius</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">8</span><span style="color:#CF222E;--shiki-dark:#FF7B72">px</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>A rule is a <strong>selector</strong> (<code>.card</code>), then <strong>declarations</strong>: a property and a value. Add CSS in a <code>.css</code> file linked from the page&#39;s head with <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;</code>.</p>
<h2 id="selectors">Selectors</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Selector</th>
<th>Matches</th>
</tr>
</thead>
<tbody><tr>
<td><code>p</code></td>
<td>Every <code>p</code> element</td>
</tr>
<tr>
<td><code>.card</code></td>
<td>Elements with <code>class=&quot;card&quot;</code></td>
</tr>
<tr>
<td><code>#header</code></td>
<td>The element with <code>id=&quot;header&quot;</code></td>
</tr>
<tr>
<td><code>.card p</code></td>
<td><code>p</code> anywhere inside a <code>.card</code></td>
</tr>
<tr>
<td><code>.card &gt; p</code></td>
<td><code>p</code> directly inside a <code>.card</code></td>
</tr>
<tr>
<td><code>a:hover</code></td>
<td>A link under the mouse</td>
</tr>
<tr>
<td><code>input:focus</code></td>
<td>The input with keyboard focus</td>
</tr>
<tr>
<td><code>li:first-child</code></td>
<td>The first <code>li</code> of its list</td>
</tr>
<tr>
<td><code>[type=&quot;email&quot;]</code></td>
<td>Elements with that attribute value</td>
</tr>
</tbody></table>
</div>
<p>Style with <strong>classes</strong> in almost all cases. They&#39;re reusable and have a moderate weight, which keeps the next topic simple.</p>
<h2 id="the-cascade-which-rule-wins">The Cascade: Which Rule Wins?</h2>
<p>When several rules set the same property on the same element, the browser picks one:</p>
<ol>
<li><strong>Specificity:</strong> the more specific selector wins. Roughly, an ID beats classes, and classes beat element names.</li>
<li><strong>Order:</strong> with equal specificity, the rule written <strong>later</strong> wins.</li>
</ol>
<div data-table-scroll><table>
<thead>
<tr>
<th>Selector</th>
<th>Weight (IDs, classes, elements)</th>
</tr>
</thead>
<tbody><tr>
<td><code>p</code></td>
<td>0, 0, 1</td>
</tr>
<tr>
<td><code>.card p</code></td>
<td>0, 1, 1</td>
</tr>
<tr>
<td><code>.card .title</code></td>
<td>0, 2, 0</td>
</tr>
<tr>
<td><code>#main .title</code></td>
<td>1, 1, 0</td>
</tr>
</tbody></table>
</div>
<p>So <code>.card .title { color: red }</code> beats <code>.title { color: blue }</code>, wherever they are in the file.</p>
<p>Avoid IDs for styling and <code>!important</code>: both win so strongly that you need even stronger rules to override them later. Keep selectors short and flat.</p>
<h3 id="inheritance">Inheritance</h3>
<p>Some properties, mostly text ones like <code>color</code>, <code>font-family</code> and <code>line-height</code>, are <strong>inherited</strong> by children. Set them once on <code>body</code>, and everything follows. Box properties like <code>padding</code> and <code>border</code> aren&#39;t inherited.</p>
<h2 id="the-box-model">The Box Model</h2>
<p>Every element is a box made of four layers:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>┌───────────── margin ─────────────┐</span></span>
<span class="line"><span>│ ┌────────── border ────────────┐ │</span></span>
<span class="line"><span>│ │ ┌──────── padding ─────────┐ │ │</span></span>
<span class="line"><span>│ │ │        content           │ │ │</span></span>
<span class="line"><span>│ │ └──────────────────────────┘ │ │</span></span>
<span class="line"><span>│ └──────────────────────────────┘ │</span></span>
<span class="line"><span>└──────────────────────────────────┘</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><strong>content:</strong> the text or image.</li>
<li><strong>padding:</strong> space inside the border, with the background color.</li>
<li><strong>border:</strong> the line around it.</li>
<li><strong>margin:</strong> space outside, between this box and others.</li>
</ul>
<h3 id="box-sizing-border-box">box-sizing: border-box</h3>
<p>By default, <code>width</code> sets only the <strong>content</strong>. A box with <code>width: 300px</code>, <code>padding: 20px</code> and a 1px border is really 342px wide. That&#39;s rarely what you want, so almost every project starts with:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#116329;--shiki-dark:#7EE787">*</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">*</span><span style="color:#0550AE;--shiki-dark:#79C0FF">::before</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">*</span><span style="color:#0550AE;--shiki-dark:#79C0FF">::after</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  box-sizing</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">border-box</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Now <code>width: 300px</code> means the whole box, padding and border included.</p>
<h3 id="margin-collapse">Margin Collapse</h3>
<p>The vertical margins of two blocks one above the other <strong>collapse</strong>: a 20px bottom margin meeting a 30px top margin gives 30px, not 50px. It surprises everyone once. Flexbox and grid gaps don&#39;t collapse, which is one reason to prefer <code>gap</code> for spacing.</p>
<h2 id="display">display</h2>
<ul>
<li><code>block</code>: takes the full width and starts on a new line, like <code>div</code>, <code>p</code> and <code>h1</code>.</li>
<li><code>inline</code>: flows inside text, like <code>a</code>, <code>strong</code> and <code>span</code>. Width, height and vertical margins don&#39;t apply.</li>
<li><code>inline-block</code>: flows inline, but accepts width, height and padding.</li>
<li><code>flex</code> and <code>grid</code>: turn the element into a layout container for its children. That&#39;s how most layouts are built today; practice them in the <a href="/playgrounds/css-layout/">Flexbox &amp; Grid Playground</a>.</li>
<li><code>none</code>: hides the element completely.</li>
</ul>
<h2 id="units">Units</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Unit</th>
<th>Relative to</th>
<th>Good for</th>
</tr>
</thead>
<tbody><tr>
<td><code>px</code></td>
<td>Nothing (fixed)</td>
<td>Borders, small details</td>
</tr>
<tr>
<td><code>rem</code></td>
<td>The root font size (often 16px)</td>
<td>Font sizes, spacing</td>
</tr>
<tr>
<td><code>em</code></td>
<td>The element&#39;s own font size</td>
<td>Spacing that grows with the text</td>
</tr>
<tr>
<td><code>%</code></td>
<td>The parent&#39;s size</td>
<td>Fluid widths</td>
</tr>
<tr>
<td><code>vw</code> / <code>vh</code></td>
<td>1% of the viewport&#39;s width / height</td>
<td>Full-screen sections</td>
</tr>
<tr>
<td><code>fr</code></td>
<td>Free space in a grid</td>
<td>Grid columns</td>
</tr>
</tbody></table>
</div>
<p>Prefer <code>rem</code> for font sizes: if a user sets a larger default font in their browser, your whole page scales with it. <code>1.5rem</code> is 24px with the default settings. For responsive font sizes, <code>clamp(1rem, 2.5vw, 1.5rem)</code> grows with the screen between a minimum and a maximum.</p>
<h2 id="colors">Colors</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">color: #1f2937;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">color: rgb(31 41 55);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">color: rgb(31 41 55 / 50%); </span><span style="color:#6E7781;--shiki-dark:#8B949E">/* half transparent */</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Keep enough contrast between text and background: at least 4.5 to 1 for normal text, so it stays readable for everyone.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>A rule is a selector plus declarations; style mostly with classes.</li>
<li>The more specific selector wins, and with equal specificity the later one; avoid IDs and <code>!important</code>.</li>
<li>Every box is content, padding, border and margin; use <code>box-sizing: border-box</code>.</li>
<li><code>display</code> decides how a box flows; use flexbox and grid for layouts.</li>
<li>Use <code>rem</code> for text and spacing, <code>%</code> and <code>fr</code> for fluid layouts, <code>px</code> for small details.</li>
</ol>
`,headings:[{id:`a-rule`,text:`A Rule`},{id:`selectors`,text:`Selectors`},{id:`the-cascade-which-rule-wins`,text:`The Cascade: Which Rule Wins?`},{id:`the-box-model`,text:`The Box Model`},{id:`display`,text:`display`},{id:`units`,text:`Units`},{id:`colors`,text:`Colors`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Database Indexes Explained`,description:`Why a query on a million rows takes seconds without an index and milliseconds with one. How B-tree indexes work, composite indexes and column order, covering indexes, and what indexes cost on writes.`,date:`2026-11-24`,urlPath:`/blog/essentials/database-indexes-explained/`},{title:`Dependency Injection in Spring, Explained`,description:`Why Spring creates your objects for you. Dependency injection and the container, beans with @Component and @Service, constructor injection, @Bean methods, choosing between implementations with @Primary and @Qualifier, scopes, and testing without Spring.`,date:`2026-11-24`,urlPath:`/blog/essentials/spring-dependency-injection-explained/`},{title:`Exceptions in Java: Checked, Unchecked and try-with-resources`,description:`How Java reports errors, and how to handle them well. try, catch and finally, checked vs unchecked exceptions, try-with-resources to always close files and connections, custom exceptions, wrapping causes, and the mistakes to avoid.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-exceptions-explained/`},{title:`Fetching Data in React: Loading, Errors and Race Conditions`,description:`Load data from an API in React the right way. A fetch in useEffect with loading and error states, checking response.ok, aborting stale requests to avoid race conditions, a reusable hook, and when to use a library like TanStack Query.`,date:`2026-11-24`,urlPath:`/blog/essentials/fetching-data-in-react/`}],relatedPages:[{title:`CSS Quiz`,description:`Test your CSS: the box model, specificity, flexbox, grid, positioning, units and the cascade, with the questions that come up in front-end interviews.`,urlPath:`/quiz/css/`},{title:`Flexbox & Grid Playground`,description:`Learn CSS flexbox and grid by doing: change justify-content, align-items, flex-grow, grid-template-columns and more, watch the boxes move live, copy the CSS, and solve layout exercises.`,urlPath:`/playgrounds/css-layout/`},{title:`A Modern CSS Reset, Explained Line by Line`,description:`Browsers style pages before you write a single rule. Learn what a modern CSS reset fixes, why each line is there, and copy a short reset you can drop into any project.`,urlPath:`/blog/essentials/modern-css-reset/`}]}})})}));