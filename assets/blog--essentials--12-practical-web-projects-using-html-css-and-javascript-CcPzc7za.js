import{h as e,m as t,p as n,t as r}from"./LoaderHider-DyTCKi1H.js";import{t as i}from"./BlogArticlePage-CIQR0YDV.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`12 Practical Web Projects to Master HTML, CSS & JavaScript`,description:`Build & deploy 12 real-world web apps: Todo List, Weather App, Music Player, QR Generator, and more. Perfect for portfolios with complete source code!`,date:`2025-04-16`,urlPath:`/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/`,html:`<p><strong>Tired of tutorial hell?</strong> This is where your <em>real</em> frontend journey begins.  </p>
<p>Whether you&#39;re:<br>✋ <strong>A total beginner</strong> looking to build your first real projects<br>💼 <strong>A job seeker</strong> needing portfolio pieces that impress employers<br>📈 <strong>An aspiring freelancer</strong> wanting practical, client-ready skills  </p>
<p>These <strong>12 carefully crafted projects</strong> will give you the hands-on experience most courses only <em>talk</em> about. Each one:  </p>
<p>✅ <strong>Solves real problems</strong> (no &quot;foo/bar&quot; examples)<br>✅ <strong>Grows with your skills</strong> (from basic DOM to complex APIs)<br>✅ <strong>Looks portfolio-ready</strong> (modern UI, clean code)<br>✅ <strong>Teaches professional workflows</strong> (debugging, optimization, deployment)  </p>
<p>All projects use <strong>vanilla JavaScript</strong> (no frameworks) with clean code.  </p>
<h2 id="todo-list-app">Todo List App</h2>
<p>A dynamic task manager with add, edit, delete, and prioritization features. Practice CRUD operations and localStorage for data persistence while mastering DOM manipulation.   </p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-1-tab-0" aria-controls="code-tabs-1-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-1-tab-1" aria-controls="code-tabs-1-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-1-tab-2" aria-controls="code-tabs-1-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-1-panel-0" aria-labelledby="code-tabs-1-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>TODO LIST&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Todo List&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"input-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"todo-input"</span><span style="color:#79C0FF"> placeholder</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Add a new task..."</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"add-button"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">i</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"fa fa-plus-circle"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">i</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"filters"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"filter"</span><span style="color:#79C0FF"> data-filter</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"completed"</span><span style="color:#E6EDF3">>Complete&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"filter"</span><span style="color:#79C0FF"> data-filter</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"pending"</span><span style="color:#E6EDF3">>Incomplete&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"delete-all"</span><span style="color:#E6EDF3">>Delete All&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"todos-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"todos"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"empty-image"</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./empty.svg"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-1-panel-1" aria-labelledby="code-tabs-1-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">'Roboto'</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">./background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">auto</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> #e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">36</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.input-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">25</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo-input</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  flex</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> #e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-right</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo-input::placeholder</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#bfbfbf</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.add-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">35</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.empty-image</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">55</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> auto</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">block</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  list-style</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#463c7b</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> #e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">all</span><span style="color:#79C0FF"> 0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo:first-child</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo:last-child</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">#e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo</span><span style="color:#7EE787"> label</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">fit-content</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">'Roboto'</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo</span><span style="color:#7EE787"> span</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  padding-left</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">relative</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">span</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  content</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">absolute</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-left</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">-30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> #e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#E6EDF3">[</span><span style="color:#79C0FF">type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">'checkbox'</span><span style="color:#E6EDF3">] {</span></span>
<span class="line"><span style="color:#79C0FF">  visibility</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">hidden</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#79C0FF">:checked</span><span style="color:#FF7B72"> +</span><span style="color:#7EE787"> span</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-decoration</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">line-through</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo:hover</span><span style="color:#7EE787"> input</span><span style="color:#79C0FF">:checked</span><span style="color:#FF7B72"> +</span><span style="color:#7EE787"> span</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">, </span><span style="color:#7EE787">input</span><span style="color:#79C0FF">:checked</span><span style="color:#FF7B72"> +</span><span style="color:#7EE787"> span</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">./check.svg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">%</span><span style="color:#79C0FF"> 50</span><span style="color:#FF7B72">%</span><span style="color:#79C0FF"> no-repeat</span><span style="color:#79C0FF"> #09bb21</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#09bb21</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo:hover</span><span style="color:#7EE787"> span</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todo</span><span style="color:#79C0FF"> .delete-btn</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">24</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todos-container</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">300</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  overflow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">overlay</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todos-container::-webkit-scrollbar-track</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">rgb</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">247</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">247</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">247</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todos-container::-webkit-scrollbar</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todos-container:hover::-webkit-scrollbar</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">7</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.todos-container::-webkit-scrollbar-thumb</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#d5d5d5</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.filters</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">25</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.filter</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> #e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">all</span><span style="color:#79C0FF"> 0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.filter.active</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">.filter:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.delete-all</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">7</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">all</span><span style="color:#79C0FF"> 0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.delete-all:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#e6b7eca1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-1-panel-2" aria-labelledby="code-tabs-1-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> input</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"input"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> addButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".add-button"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> todosHtml</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".todos"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> emptyImage</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".empty-image"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> todosJson </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> JSON</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">parse</span><span style="color:#E6EDF3">(localStorage.</span><span style="color:#D2A8FF">getItem</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"todos"</span><span style="color:#E6EDF3">)) </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> [];</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> deleteAllButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".delete-all"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> filters</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelectorAll</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".filter"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> filter </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">showTodos</span><span style="color:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> getTodoHtml</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">todo</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">index</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (filter </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> filter </span><span style="color:#FF7B72">!=</span><span style="color:#E6EDF3"> todo.status) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> checked </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> todo.status </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> "completed"</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> "checked"</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#8B949E"> /* html */</span><span style="color:#A5D6FF"> \`</span></span>
<span class="line"><span style="color:#A5D6FF">    &#x3C;li class="todo"></span></span>
<span class="line"><span style="color:#A5D6FF">      &#x3C;label for="\${</span><span style="color:#E6EDF3">index</span><span style="color:#A5D6FF">}"></span></span>
<span class="line"><span style="color:#A5D6FF">        &#x3C;input id="\${</span><span style="color:#E6EDF3">index</span><span style="color:#A5D6FF">}" onclick="updateStatus(this)" type="checkbox" \${</span><span style="color:#E6EDF3">checked</span><span style="color:#A5D6FF">}></span></span>
<span class="line"><span style="color:#A5D6FF">        &#x3C;span class="\${</span><span style="color:#E6EDF3">checked</span><span style="color:#A5D6FF">}">\${</span><span style="color:#E6EDF3">todo</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">name</span><span style="color:#A5D6FF">}&#x3C;/span></span></span>
<span class="line"><span style="color:#A5D6FF">      &#x3C;/label></span></span>
<span class="line"><span style="color:#A5D6FF">      &#x3C;button class="delete-btn" data-index="\${</span><span style="color:#E6EDF3">index</span><span style="color:#A5D6FF">}" onclick="remove(this)">&#x3C;i class="fa fa-times">&#x3C;/i>&#x3C;/button></span></span>
<span class="line"><span style="color:#A5D6FF">    &#x3C;/li></span></span>
<span class="line"><span style="color:#A5D6FF">  \`</span><span style="color:#E6EDF3">; </span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> showTodos</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (todosJson.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> ==</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    todosHtml.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    emptyImage.style.display </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'block'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    todosHtml.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> todosJson.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(getTodoHtml).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    emptyImage.style.display </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'none'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> addTodo</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">todo</span><span style="color:#E6EDF3">)  {</span></span>
<span class="line"><span style="color:#E6EDF3">  input.value </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  todosJson.</span><span style="color:#D2A8FF">unshift</span><span style="color:#E6EDF3">({ name: todo, status: </span><span style="color:#A5D6FF">"pending"</span><span style="color:#E6EDF3"> });</span></span>
<span class="line"><span style="color:#E6EDF3">  localStorage.</span><span style="color:#D2A8FF">setItem</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"todos"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">JSON</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">stringify</span><span style="color:#E6EDF3">(todosJson));</span></span>
<span class="line"><span style="color:#D2A8FF">  showTodos</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">input.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keyup"</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> todo </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> input.value.</span><span style="color:#D2A8FF">trim</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">todo </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> e.key </span><span style="color:#FF7B72">!=</span><span style="color:#A5D6FF"> "Enter"</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#D2A8FF">  addTodo</span><span style="color:#E6EDF3">(todo);</span></span>
<span class="line"><span style="color:#E6EDF3">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">addButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> todo </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> input.value.</span><span style="color:#D2A8FF">trim</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">todo) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#D2A8FF">  addTodo</span><span style="color:#E6EDF3">(todo);</span></span>
<span class="line"><span style="color:#E6EDF3">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateStatus</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">todo</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> todoName </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> todo.parentElement.lastElementChild;</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (todo.checked) {</span></span>
<span class="line"><span style="color:#E6EDF3">    todoName.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"checked"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    todosJson[todo.id].status </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "completed"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    todoName.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"checked"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    todosJson[todo.id].status </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "pending"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  localStorage.</span><span style="color:#D2A8FF">setItem</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"todos"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">JSON</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">stringify</span><span style="color:#E6EDF3">(todosJson));</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> remove</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">todo</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> index</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> todo.dataset.index;</span></span>
<span class="line"><span style="color:#E6EDF3">  todosJson.</span><span style="color:#D2A8FF">splice</span><span style="color:#E6EDF3">(index, </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#D2A8FF">  showTodos</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  localStorage.</span><span style="color:#D2A8FF">setItem</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"todos"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">JSON</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">stringify</span><span style="color:#E6EDF3">(todosJson));</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">filters.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">el</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  el.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (el.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'active'</span><span style="color:#E6EDF3">)) {</span></span>
<span class="line"><span style="color:#E6EDF3">      el.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'active'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">      filter </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">      filters.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">tag</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> tag.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'active'</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#E6EDF3">      el.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'active'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">      filter </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> e.target.dataset.filter;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#D2A8FF">    showTodos</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"><span style="color:#E6EDF3">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">deleteAllButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">  todosJson </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> [];</span></span>
<span class="line"><span style="color:#E6EDF3">  localStorage.</span><span style="color:#D2A8FF">setItem</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"todos"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">JSON</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">stringify</span><span style="color:#E6EDF3">(todosJson));</span></span>
<span class="line"><span style="color:#D2A8FF">  showTodos</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">});</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary><div class="asset">
  <img src="/assets/blog/todo-list/empty.svg" /><p>  <a href="/assets/blog/todo-list/empty.svg" title="download">empty.svg</a></p>
</div><div class="asset">
  <img src="/assets/blog/todo-list/check.svg" /><p>  <a href="/assets/blog/todo-list/check.svg" title="download">check.svg</a></p>
</div><div class="asset">
  <img src="/assets/blog/todo-list/background.jpg" /><p>  <a href="/assets/blog/todo-list/background.jpg" title="download">background.jpg</a></p>
</div></details><h2 id="music-player">Music Player</h2>
<p>A sleek audio player with playlist management. Dive into the Web Audio API and media controls.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-2-tab-0" aria-controls="code-tabs-2-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-2-tab-1" aria-controls="code-tabs-2-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-2-tab-2" aria-controls="code-tabs-2-panel-2" aria-selected="false" tabindex="-1">script.js</button><button type="button" role="tab" id="code-tabs-2-tab-3" aria-controls="code-tabs-2-panel-3" aria-selected="false" tabindex="-1">songs.json</button></div><div role="tabpanel" id="code-tabs-2-panel-0" aria-labelledby="code-tabs-2-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Music player&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"player"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"thumbnail"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">""</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"thumb"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"details"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">h3</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"title"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">h3</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"artist"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">audio</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"song"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">source</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">""</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"audio/mp3"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#FFA198;font-style:italic">source</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">audio</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"time"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"start"</span><span style="color:#E6EDF3">>00:00&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"end"</span><span style="color:#E6EDF3">>00:00&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"progress-bar"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"progress"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"action"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"prev-play"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"iconoir:skip-prev-solid"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"play"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"play"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"iconoir:play-solid"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-play"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"iconoir:pause-solid"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-pause hidden"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"next-play"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"iconoir:skip-next-solid"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"module"</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-2-panel-1" aria-labelledby="code-tabs-2-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#0170fe</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#11d2d9</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: Poppins, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"background.jpg"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.player</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  max-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">350</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  box-shadow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 8</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 32</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> rgba</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">31</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">38</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">135</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0.37</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">img</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">150</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">150</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.thumbnail</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">linear-gradient</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">120</span><span style="color:#FF7B72">deg</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">),</span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">160</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">160</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">auto</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">img</span><span style="color:#79C0FF">.play</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  animation</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">s</span><span style="color:#E6EDF3"> rotate </span><span style="color:#79C0FF">linear</span><span style="color:#79C0FF"> infinite</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@keyframes</span><span style="color:#FFA657"> rotate</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  0%</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    transform</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">rotate</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#FF7B72">deg</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#79C0FF">  100%</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    transform</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">rotate</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">360</span><span style="color:#FF7B72">deg</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.details</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.details</span><span style="color:#7EE787"> span</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.time</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.progress-bar</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  appearance</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">6</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.progress-bar::-webkit-slider-thumb</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  appearance</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">linear-gradient</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">120</span><span style="color:#FF7B72">deg</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">),</span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease-in-out</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-evenly</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#79C0FF">.prev-play:hover</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#79C0FF">.next-play:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#EEE</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#7EE787"> iconify-icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#79C0FF">.play</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">linear-gradient</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">120</span><span style="color:#FF7B72">deg</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">),</span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#79C0FF">.prev-play</span><span style="color:#7EE787"> iconify-icon</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#79C0FF">.action</span><span style="color:#7EE787"> button</span><span style="color:#79C0FF">.next-play</span><span style="color:#7EE787"> iconify-icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.hidden</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-2-panel-2" aria-labelledby="code-tabs-2-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> songs</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"songs.json"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">then</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">res</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> res.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> playBtn</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".icon-play"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> pauseBtn</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".icon-pause"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> song</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#song"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> title</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#title"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> artist</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#artist"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> thumb</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#thumb"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> progress</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#progress"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> start</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#start"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> end</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#end"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> playButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".play"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> prevPlayButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".prev-play"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> nextPlayButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".next-play"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">playButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, playPause);</span></span>
<span class="line"><span style="color:#E6EDF3">prevPlayButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> changeSong</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">-</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#E6EDF3">nextPlayButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> changeSong</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#E6EDF3">progress.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"change"</span><span style="color:#E6EDF3">, updateSongProgress);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> index </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> interval;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> songProgressTrackerInterval;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">setSongDetails</span><span style="color:#E6EDF3">(index);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> setSongDetails</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">songIndex</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  song.src </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> songs[songIndex].link;</span></span>
<span class="line"><span style="color:#E6EDF3">  title.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> songs[songIndex].name;</span></span>
<span class="line"><span style="color:#E6EDF3">  artist.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> songs[songIndex].artists;</span></span>
<span class="line"><span style="color:#E6EDF3">  thumb.src </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> songs[songIndex].image;</span></span>
<span class="line"><span style="color:#E6EDF3">  start.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "00:00"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  end.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "00:00"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  clearInterval</span><span style="color:#E6EDF3">(interval);</span></span>
<span class="line"><span style="color:#E6EDF3">  song.onloadedmetadata </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> loadMetadata;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> loadMetadata</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  progress.max </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> song.duration;</span></span>
<span class="line"><span style="color:#E6EDF3">  progress.value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> song.currentTime;</span></span>
<span class="line"><span style="color:#D2A8FF">  updateSongTimeDisplay</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  interval </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(updateSongTimeDisplay, </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateSongTimeDisplay</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> min </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(song.duration </span><span style="color:#FF7B72">/</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> sec </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(song.duration </span><span style="color:#FF7B72">%</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> curMin </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(song.currentTime </span><span style="color:#FF7B72">/</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> curSec </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(song.currentTime </span><span style="color:#FF7B72">%</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (sec </span><span style="color:#FF7B72">&#x3C;</span><span style="color:#79C0FF"> 10</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    sec </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "0"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> sec;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (curSec </span><span style="color:#FF7B72">&#x3C;</span><span style="color:#79C0FF"> 10</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    curSec </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "0"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> curSec;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (min </span><span style="color:#FF7B72">&#x3C;</span><span style="color:#79C0FF"> 10</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    min </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "0"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> min;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (curMin </span><span style="color:#FF7B72">&#x3C;</span><span style="color:#79C0FF"> 10</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    curMin </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "0"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> curMin;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  end.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> min </span><span style="color:#FF7B72">+</span><span style="color:#A5D6FF"> ":"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> sec;</span></span>
<span class="line"><span style="color:#E6EDF3">  start.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> curMin </span><span style="color:#FF7B72">+</span><span style="color:#A5D6FF"> ":"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> curSec;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> changeSong</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">increment</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  index </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> (index </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> increment </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> songs.</span><span style="color:#79C0FF">length</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3"> songs.</span><span style="color:#79C0FF">length</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  setSongDetails</span><span style="color:#E6EDF3">(index);</span></span>
<span class="line"><span style="color:#E6EDF3">  song.</span><span style="color:#D2A8FF">play</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> playPause</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">pauseBtn.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">)) {</span></span>
<span class="line"><span style="color:#E6EDF3">    song.</span><span style="color:#D2A8FF">pause</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">    pauseBtn.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    playBtn.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    thumb.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"play"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  song.</span><span style="color:#D2A8FF">play</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#D2A8FF">  startSongProgressTracker</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  playBtn.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  pauseBtn.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  thumb.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"play"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateSongProgress</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#D2A8FF">  clearInterval</span><span style="color:#E6EDF3">(songProgressTrackerInterval);</span></span>
<span class="line"><span style="color:#E6EDF3">  song.currentTime </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> progress.value;</span></span>
<span class="line"><span style="color:#D2A8FF">  startSongProgressTracker</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> startSongProgressTracker</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#D2A8FF">  clearInterval</span><span style="color:#E6EDF3">(songProgressTrackerInterval);</span></span>
<span class="line"><span style="color:#E6EDF3">  songProgressTrackerInterval </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    progress.value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> song.currentTime;</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (song.currentTime </span><span style="color:#FF7B72">==</span><span style="color:#E6EDF3"> song.duration) {</span></span>
<span class="line"><span style="color:#D2A8FF">      changeSong</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#E6EDF3">  }, </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-2-panel-3" aria-labelledby="code-tabs-2-tab-3" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">[</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "name"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Happier"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "link"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/zp1xfir101y4sc3/happier.mp3?raw=1"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "artists"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Marshmello"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "image"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/xxmwcz14hkn7iwl/happier.png?raw=1"</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "name"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Stay"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "link"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/umam9olakop001d/stay.mp3?raw=1"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "artists"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Justin Bieber"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "image"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/kierj5lzst1yx9n/stay.jpg?raw=1"</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "name"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Perfect"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "link"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "artists"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Ed Sheeran"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "image"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/crlthbozdznb13g/perfect.jpeg?raw=1"</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "name"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"7 Rings"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "link"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "artists"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Ariana Grande"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "image"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/gobvfxj4r0t053v/7-rings.jpg?raw=1"</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "name"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Girls Like You"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "link"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "artists"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Maroon 5"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "image"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"https://www.dropbox.com/s/ouq5zzgbqsk9zx0/girls-like-you.png?raw=1"</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#E6EDF3">]</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/music-player/background.jpg" /><p>  <a href="/assets/blog/music-player/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="weather-app">Weather App</h2>
<p>Get real-time forecasts using geolocation. Connect to weather APIs.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-3-tab-0" aria-controls="code-tabs-3-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-3-tab-1" aria-controls="code-tabs-3-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-3-tab-2" aria-controls="code-tabs-3-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-3-panel-0" aria-labelledby="code-tabs-3-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Weather App&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"input-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"search-input"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"searchInput"</span><span style="color:#79C0FF"> placeholder</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Search..."</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"search-button"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"searchButton"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">i</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"fa fa-search"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">i</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"weather-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cityWeather"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"city-weather hidden"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#79C0FF"> alt</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"temperature"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"temperature"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"city"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"city"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"details"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"detail"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./images/icons/humidity.png"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"description"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"value"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"humidity"</span><span style="color:#E6EDF3">>%&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Humidity&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"detail"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./images/icons/wind.png"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"description"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"value"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"wind"</span><span style="color:#E6EDF3">>km/h&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Wind&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"noCityFound"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"no-city-found hidden"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"images/location-not-found.png"</span><span style="color:#79C0FF"> alt</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Oops! Location not found!&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-3-panel-1" aria-labelledby="code-tabs-3-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#4c77b6</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Roboto"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">images/background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.city-weather</span><span style="color:#E6EDF3">,</span><span style="color:#79C0FF">.no-city-found</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  overflow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">hidden</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: height </span><span style="color:#79C0FF">0.7</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.no-city-found</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">300</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.city-weather</span><span style="color:#E6EDF3">  {</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">410</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.hidden</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.input-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.search-input</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  flex</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-right</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.search-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">24</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.no-city-found</span><span style="color:#7EE787"> img</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">} </span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.no-city-found</span><span style="color:#7EE787"> p</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">24</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.city-weather</span><span style="color:#79C0FF"> .icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">170</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.city-weather</span><span style="color:#79C0FF"> .temperature</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">75</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">500</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.city-weather</span><span style="color:#79C0FF"> .city</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.city-weather</span><span style="color:#79C0FF"> .details</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">48</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.details</span><span style="color:#79C0FF"> .detail</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  column-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">left</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.detail</span><span style="color:#7EE787"> img</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.detail</span><span style="color:#79C0FF"> .value</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">24</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-3-panel-2" aria-labelledby="code-tabs-3-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> API_KEY</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> "REPLACE_IT_WITH_YOUR_API_KEY: https://api.openweathermap.org"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> searchInput</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"searchInput"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> searchButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"searchButton"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> city</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"city"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> temperature</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"temperature"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> humidity</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"humidity"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> wind</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"wind"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> icon</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"icon"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> cityWeather</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"cityWeather"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> noCityFound</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"noCityFound"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">searchButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, updateWeatherData);</span></span>
<span class="line"><span style="color:#E6EDF3">searchInput.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keydown"</span><span style="color:#E6EDF3">,(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> event.key </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "Enter"</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#D2A8FF"> updateWeatherData</span><span style="color:#E6EDF3">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> updateWeatherData</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  try</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">searchInput.value.</span><span style="color:#D2A8FF">trim</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#D2A8FF">      alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"Please enter the city"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> weatherData</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> getWeatherData</span><span style="color:#E6EDF3">(searchInput.value);</span></span>
<span class="line"><span style="color:#E6EDF3">    noCityFound.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    cityWeather.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    city.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> weatherData.city;</span></span>
<span class="line"><span style="color:#E6EDF3">    temperature.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> weatherData.temperature </span><span style="color:#FF7B72">+</span><span style="color:#A5D6FF"> "°C"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    humidity.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> weatherData.humidity </span><span style="color:#FF7B72">+</span><span style="color:#A5D6FF"> "%"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    wind.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> weatherData.wind </span><span style="color:#FF7B72">+</span><span style="color:#A5D6FF"> " km/h"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    icon.src </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> weatherData.icon;</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (error) {</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (error?.code </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "404"</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">      cityWeather.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">      noCityFound.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">      console.</span><span style="color:#D2A8FF">error</span><span style="color:#E6EDF3">(error.message);</span></span>
<span class="line"><span style="color:#E6EDF3">    } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#D2A8FF">      alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"Unknown error: "</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> error);</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> getIconUrl</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">icon</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#A5D6FF"> \`./images/icons/\${</span><span style="color:#E6EDF3">icon</span><span style="color:#A5D6FF">.</span><span style="color:#D2A8FF">toLowerCase</span><span style="color:#A5D6FF">()</span><span style="color:#A5D6FF">}.png\`</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> getWeatherData</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">city</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> apiUrl</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> \`https://api.openweathermap.org/data/2.5/weather?q=\${</span><span style="color:#E6EDF3">city</span><span style="color:#A5D6FF">}&#x26;units=metric&#x26;appid=\${</span><span style="color:#79C0FF">API_KEY</span><span style="color:#A5D6FF">}\`</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> apiResponse</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(apiUrl);</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> apiResponseBody</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#E6EDF3"> apiResponse.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (apiResponseBody.cod </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> "404"</span><span style="color:#FF7B72"> ||</span><span style="color:#E6EDF3"> apiResponseBody.cod </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> "400"</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">    throw</span><span style="color:#E6EDF3"> { code: </span><span style="color:#A5D6FF">"404"</span><span style="color:#E6EDF3">, message: </span><span style="color:#A5D6FF">"City not found"</span><span style="color:#E6EDF3"> };</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    city: apiResponseBody.name,</span></span>
<span class="line"><span style="color:#E6EDF3">    temperature: Math.</span><span style="color:#D2A8FF">round</span><span style="color:#E6EDF3">(apiResponseBody?.main?.temp),</span></span>
<span class="line"><span style="color:#E6EDF3">    humidity: apiResponseBody.main.humidity,</span></span>
<span class="line"><span style="color:#E6EDF3">    wind: Math.</span><span style="color:#D2A8FF">round</span><span style="color:#E6EDF3">(apiResponseBody.wind.speed),</span></span>
<span class="line"><span style="color:#E6EDF3">    icon: </span><span style="color:#D2A8FF">getIconUrl</span><span style="color:#E6EDF3">(apiResponseBody.weather[</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">].main),</span></span>
<span class="line"><span style="color:#E6EDF3">  };</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/weather-app/background.jpg" /><p>  <a href="/assets/blog/weather-app/background.jpg" title="download">background.jpg</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/clear.png" /><p>  <a href="/assets/blog/weather-app/clear.png" title="download">clear.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/clouds.png" /><p>  <a href="/assets/blog/weather-app/clouds.png" title="download">clouds.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/humidity.png" /><p>  <a href="/assets/blog/weather-app/humidity.png" title="download">humidity.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/location-not-found.png" /><p>  <a href="/assets/blog/weather-app/location-not-found.png" title="download">location-not-found.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/mist.png" /><p>  <a href="/assets/blog/weather-app/mist.png" title="download">mist.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/rain.png" /><p>  <a href="/assets/blog/weather-app/rain.png" title="download">rain.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/snow.png" /><p>  <a href="/assets/blog/weather-app/snow.png" title="download">snow.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/wind.png" /><p>  <a href="/assets/blog/weather-app/wind.png" title="download">wind.png</a></p>
</div>
</details><h2 id="qr-code-generator">QR Code Generator</h2>
<p>Convert URLs/text to scannable QR codes. Integrate with third-party APIs.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-4-tab-0" aria-controls="code-tabs-4-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-4-tab-1" aria-controls="code-tabs-4-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-4-tab-2" aria-controls="code-tabs-4-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-4-panel-0" aria-labelledby="code-tabs-4-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>QR Code Generator&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"header-container mb-35"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>QR Code Generator&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        Online tool to generate QR Codes from texts, urls and much more.</span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text-input mb-35"</span><span style="color:#79C0FF"> placeholder</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Enter text or a link"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"generate-button"</span><span style="color:#E6EDF3">>Generate QR Code&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"qrcode-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"qrcode"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"download-button hidden"</span><span style="color:#E6EDF3">>Download QR Code&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-4-panel-1" aria-labelledby="code-tabs-4-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#662d72</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eb4e9b</span><span style="color:#E6EDF3">; </span></span>
<span class="line"><span style="color:#FFA657">  --background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f3f2f245</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --hover-1-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#783885</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --hover-2-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f15ea6</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#bb408c</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: Poppins, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.hidden</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--background-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">500</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.header-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.mb-35</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">35</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">36</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">22</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">white</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.3</span><span style="color:#FF7B72">s</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.generate-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.generate-button:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--hover-1-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.download-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">)</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.download-button:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--hover-2-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.qrcode</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  overflow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">hidden</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: height </span><span style="color:#79C0FF">0.35</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> linear</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.qrcode</span><span style="color:#7EE787"> img</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">white</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">250</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">250</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-4-panel-2" aria-labelledby="code-tabs-4-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> textInput</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".text-input"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> generateButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".generate-button"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> qrCodeContainer</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".qrcode-container"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> qrCodeElement</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".qrcode"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> downloadButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".download-button"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">generateButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, generateQRCode);</span></span>
<span class="line"><span style="color:#E6EDF3">textInput.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keydown"</span><span style="color:#E6EDF3">,(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> event.key </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "Enter"</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#D2A8FF"> generateQRCode</span><span style="color:#E6EDF3">());</span></span>
<span class="line"><span style="color:#E6EDF3">downloadButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, download);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> generateQRCode</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> text</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> textInput.value.</span><span style="color:#D2A8FF">trim</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">text) {</span></span>
<span class="line"><span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"Please enter some text to generate a QR code."</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> firstGeneration</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> qrCodeElement.innerHTML </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  qrCodeElement.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  qrCodeElement.style.height </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "0"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">firstGeneration) {</span></span>
<span class="line"><span style="color:#E6EDF3">    qrCodeContainer.style.height </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "250px"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  new</span><span style="color:#D2A8FF"> QRCode</span><span style="color:#E6EDF3">(qrCodeElement, {</span></span>
<span class="line"><span style="color:#E6EDF3">    text: text,</span></span>
<span class="line"><span style="color:#E6EDF3">    width: </span><span style="color:#79C0FF">250</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">    height: </span><span style="color:#79C0FF">250</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  setTimeout</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    qrCodeElement.style.height </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "250px"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    downloadButton.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hidden"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    generateButton.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"mb-35"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    qrCodeContainer.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"mb-35"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  }, firstGeneration </span><span style="color:#FF7B72">?</span><span style="color:#79C0FF"> 0</span><span style="color:#FF7B72"> :</span><span style="color:#79C0FF"> 750</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> download</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> qrCodeImage</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".qrcode img"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> downloadLink</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">createElement</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"a"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  downloadLink.href </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> qrCodeImage.src;</span></span>
<span class="line"><span style="color:#E6EDF3">  downloadLink.download </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "qrcode.png"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  downloadLink.</span><span style="color:#D2A8FF">click</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/qrcode-generator/background.jpg" /><p>  <a href="/assets/blog/qrcode-generator/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="calculator">Calculator</h2>
<p>A fully functional calculator with keyboard support. Perfect for understanding mathematical operations and event handling in JavaScript.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-5-tab-0" aria-controls="code-tabs-5-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-5-tab-1" aria-controls="code-tabs-5-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-5-tab-2" aria-controls="code-tabs-5-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-5-panel-0" aria-labelledby="code-tabs-5-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Calculator&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3"> /></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Calculator&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"display"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"expression"</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"result hidden"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"buttons"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>C&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>(&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>)&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>/&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>7&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>8&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>9&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>*&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>4&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>5&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>6&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>-&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>1&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>2&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>3&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>+&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button valuse"</span><span style="color:#E6EDF3">>00&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#E6EDF3">>.&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button equals"</span><span style="color:#E6EDF3">>=&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-5-panel-1" aria-labelledby="code-tabs-5-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#7552a0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#43377f</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#7552a0A0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: Poppins, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.hidden</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">300</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">768</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#FF7B72">px</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.display</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">200</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">25</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">end</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">end</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.buttons</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">grid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">repeat</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">fr</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  grid-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.display</span><span style="color:#79C0FF"> .expression</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">36</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.display</span><span style="color:#79C0FF"> .result</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">46</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">500</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.display</span><span style="color:#79C0FF"> .result::before</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  content</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">'='</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding-right</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">45</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">45</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  user-select</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">all</span><span style="color:#79C0FF"> .2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease-in</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">768</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">24</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.button:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">8</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">12</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">.button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">20</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:is</span><span style="color:#E6EDF3">(</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">8</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">12</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">),</span></span>
<span class="line"><span style="color:#79C0FF">  .button:nth-child</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">20</span><span style="color:#E6EDF3">)</span></span>
<span class="line"><span style="color:#E6EDF3">  )</span><span style="color:#79C0FF">:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    opacity</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">.85</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">} </span></span></code></pre></div><div role="tabpanel" id="code-tabs-5-panel-2" aria-labelledby="code-tabs-5-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> displayContainer</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.display'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> displayExpression</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.display .expression'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> displayResult</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.display .result'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isResultHidden</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> displayResult.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'hidden'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isResultShown</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#FF7B72"> !</span><span style="color:#D2A8FF">isResultHidden</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> getResultValue</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> displayResult.innerText </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> 'Error'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> '0'</span><span style="color:#FF7B72"> :</span><span style="color:#E6EDF3"> displayResult.innerText;</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isSymbol</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">button</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#A5D6FF"> /</span><span style="color:#79C0FF">[</span><span style="color:#7EE787;font-weight:bold">\\+</span><span style="color:#79C0FF">\\-</span><span style="color:#7EE787;font-weight:bold">\\*\\/</span><span style="color:#79C0FF">]</span><span style="color:#FF7B72">$</span><span style="color:#A5D6FF">/</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">test</span><span style="color:#E6EDF3">(button.innerHTML);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">document.</span><span style="color:#D2A8FF">querySelectorAll</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.button'</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">button</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> </span></span>
<span class="line"><span style="color:#E6EDF3">  button.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'click'</span><span style="color:#E6EDF3">, () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> handleButtonClick</span><span style="color:#E6EDF3">(button)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleButtonClick</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">button</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  switch</span><span style="color:#E6EDF3">(button.innerHTML) {</span></span>
<span class="line"><span style="color:#FF7B72">    case</span><span style="color:#A5D6FF"> 'C'</span><span style="color:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#E6EDF3">      displayExpression.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> '0'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">      displayResult.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'hidden'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">      break</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#FF7B72">    case</span><span style="color:#A5D6FF"> '='</span><span style="color:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#FF7B72">      try</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">        displayResult.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'hidden'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">        displayResult.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> eval</span><span style="color:#E6EDF3">(displayExpression.innerHTML);</span></span>
<span class="line"><span style="color:#E6EDF3">      } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">        displayResult.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "Error"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"><span style="color:#FF7B72">      break</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#FF7B72">    default</span><span style="color:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#FF7B72">      if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isResultShown</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#E6EDF3">        displayExpression.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> isSymbol</span><span style="color:#E6EDF3">(button) </span><span style="color:#FF7B72">?</span><span style="color:#D2A8FF"> getResultValue</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">:</span><span style="color:#A5D6FF"> '0'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">        displayResult.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'hidden'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"><span style="color:#FF7B72">      if</span><span style="color:#E6EDF3"> (displayExpression.innerHTML </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> '0'</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">        displayExpression.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> button.innerHTML </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> '00'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> '0'</span><span style="color:#FF7B72"> :</span><span style="color:#E6EDF3"> button.innerHTML;</span></span>
<span class="line"><span style="color:#E6EDF3">      } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">        displayExpression.innerHTML </span><span style="color:#FF7B72">+=</span><span style="color:#E6EDF3"> button.innerHTML;</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/calculatrice/background.jpg" /><p>  <a href="/assets/blog/calculatrice/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="bmi-calculator">BMI Calculator</h2>
<p>A health tool that calculates Body Mass Index with visual feedback. Learn form validation and dynamic DOM updates.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-6-tab-0" aria-controls="code-tabs-6-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-6-tab-1" aria-controls="code-tabs-6-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-6-tab-2" aria-controls="code-tabs-6-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-6-panel-0" aria-labelledby="code-tabs-6-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>BMI Calculator&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3"> /></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"header-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>BMI Calculator&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        Calculate your Body Mass Index easily and accurately</span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">form</span><span style="color:#79C0FF"> autocomplete</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"off"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"inputs-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"input-container height-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"height"</span><span style="color:#79C0FF"> placeholder</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"error"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"height"</span><span style="color:#E6EDF3">>Your height in cm&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"input-container weight-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"weight"</span><span style="color:#79C0FF"> placeholder</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"error"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"weight"</span><span style="color:#E6EDF3">>Your weight in kg&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Calculate your BMI&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-result"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-value"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-description"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container description-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">>Description&#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"description"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      Let's calculate the Body Mass Index (BMI) to </span></span>
<span class="line"><span style="color:#E6EDF3">      assess the risks associated with overweight based on the person's height and weight. </span></span>
<span class="line"><span style="color:#E6EDF3">      According to the World Health Organization (WHO), the formula is &#x3C;</span><span style="color:#7EE787">b</span><span style="color:#E6EDF3">>BMI = W/H²&#x3C;/</span><span style="color:#7EE787">b</span><span style="color:#E6EDF3">>, </span></span>
<span class="line"><span style="color:#E6EDF3">      where &#x3C;</span><span style="color:#7EE787">b</span><span style="color:#E6EDF3">>W&#x3C;/</span><span style="color:#7EE787">b</span><span style="color:#E6EDF3">> is the person's weight in kilograms and &#x3C;</span><span style="color:#7EE787">b</span><span style="color:#E6EDF3">>H&#x3C;/</span><span style="color:#7EE787">b</span><span style="color:#E6EDF3">> is the height in meters</span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-ranges"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-container underweight"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#FFA198;font-style:italic">18,5&#x3C;/p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-label"</span><span style="color:#E6EDF3">>Underweight&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-container normal"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range"</span><span style="color:#E6EDF3">>18,5-25&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-label"</span><span style="color:#E6EDF3">>Normal&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-container overweight"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range"</span><span style="color:#E6EDF3">>25-30&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-label"</span><span style="color:#E6EDF3">>Overweight&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-container obesity"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range"</span><span style="color:#E6EDF3">>30-40&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-label"</span><span style="color:#E6EDF3">>Obese&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-container morbid-obesity"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range"</span><span style="color:#E6EDF3">>>40&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"bmi-range-label"</span><span style="color:#E6EDF3">>Extremely obesity&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-6-panel-1" aria-labelledby="code-tabs-6-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#b34083</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --primary-text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f0b23a</span><span style="color:#E6EDF3">; </span></span>
<span class="line"><span style="color:#FFA657">  --secondary-text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ea96c7</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --hover-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#983979</span><span style="color:#E6EDF3">; </span></span>
<span class="line"><span style="color:#FFA657">  --border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#d78fb980</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --error-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f94a4a</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: Poppins, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  max-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">700</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.header-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">45</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">inline-block</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">linear-gradient</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">to</span><span style="color:#79C0FF"> right</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#79C0FF">  -webkit-text-fill-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-clip</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">text</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  -webkit-background-clip</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">text</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">22</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">form</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  row-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.inputs-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  row-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.input-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">relative</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">label</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">500</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">absolute</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  left</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">all</span><span style="color:#79C0FF"> 0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  pointer-events</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#79C0FF">:focus</span><span style="color:#FF7B72"> ~</span><span style="color:#7EE787"> label</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#79C0FF">:not</span><span style="color:#E6EDF3">(:</span><span style="color:#7EE787">placeholder-shown</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">~</span><span style="color:#7EE787"> label</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">-16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">13</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.input-container.error</span><span style="color:#7EE787"> input</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--error-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--error-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  outline-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.input-container</span><span style="color:#79C0FF"> .error</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--error-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease-in</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#79C0FF">:hover</span><span style="color:#E6EDF3">, </span><span style="color:#7EE787">button</span><span style="color:#79C0FF">:focus</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--hover-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-result</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: height </span><span style="color:#79C0FF">0.2</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease-in</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-result</span><span style="color:#79C0FF"> .bmi-value</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#79C0FF">.bmi-result</span><span style="color:#79C0FF"> .bmi-description</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-result</span><span style="color:#79C0FF"> .bmi-value</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">64</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-result</span><span style="color:#79C0FF"> .bmi-description</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">500</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container.description-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.description</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">justify</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-ranges</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  column-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  row-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-wrap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">wrap</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-range-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#eee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">82</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-range</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">6</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.bmi-range-label</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">6</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.underweight</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#5BC8F3</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"><span style="color:#79C0FF">.normal</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#9DB63B</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"><span style="color:#79C0FF">.overweight</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#FAC90E</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"><span style="color:#79C0FF">.obesity</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#F48A20</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"><span style="color:#79C0FF">.morbid-obesity</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#FF0000</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-6-panel-2" aria-labelledby="code-tabs-6-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> BMIRanges</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span></span>
<span class="line"><span style="color:#E6EDF3">  { description: </span><span style="color:#A5D6FF">"Underweight"</span><span style="color:#E6EDF3">, color: </span><span style="color:#A5D6FF">"#5BC8F3"</span><span style="color:#E6EDF3">, range: [</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">18.5</span><span style="color:#E6EDF3">] },</span></span>
<span class="line"><span style="color:#E6EDF3">  { description: </span><span style="color:#A5D6FF">"Normal"</span><span style="color:#E6EDF3">, color: </span><span style="color:#A5D6FF">"#9DB63B"</span><span style="color:#E6EDF3">, range: [</span><span style="color:#79C0FF">18.5</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">25</span><span style="color:#E6EDF3">] },</span></span>
<span class="line"><span style="color:#E6EDF3">  { description: </span><span style="color:#A5D6FF">"Overweight"</span><span style="color:#E6EDF3">, color: </span><span style="color:#A5D6FF">"#FAC90E"</span><span style="color:#E6EDF3">, range: [</span><span style="color:#79C0FF">25</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">30</span><span style="color:#E6EDF3">] },</span></span>
<span class="line"><span style="color:#E6EDF3">  { description: </span><span style="color:#A5D6FF">"Obese"</span><span style="color:#E6EDF3">, color: </span><span style="color:#A5D6FF">"#F48A20"</span><span style="color:#E6EDF3">, range: [</span><span style="color:#79C0FF">30</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">40</span><span style="color:#E6EDF3">] },</span></span>
<span class="line"><span style="color:#E6EDF3">  { description: </span><span style="color:#A5D6FF">"Extremely obesity"</span><span style="color:#E6EDF3">, color: </span><span style="color:#A5D6FF">"#FF0000"</span><span style="color:#E6EDF3">,range: [</span><span style="color:#79C0FF">40</span><span style="color:#E6EDF3">, Number.MAX_VALUE]}</span></span>
<span class="line"><span style="color:#E6EDF3">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> form</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"form"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> heightInput</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#height"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> heightInputError</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#height + .error"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> weightInput</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#weight"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> weightInputError</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#weight + .error"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> bmiValue</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".bmi-value"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> bmiDescription</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".bmi-description"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> bmiResult</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".bmi-result"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">form.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"submit"</span><span style="color:#E6EDF3">, handleForm);</span></span>
<span class="line"><span style="color:#E6EDF3">heightInput.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keyup"</span><span style="color:#E6EDF3">, validateInput);</span></span>
<span class="line"><span style="color:#E6EDF3">weightInput.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keyup"</span><span style="color:#E6EDF3">, validateInput);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleForm</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  event.</span><span style="color:#D2A8FF">preventDefault</span><span style="color:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  resetErrors</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> containsErrors </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> false</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isNotNumber</span><span style="color:#E6EDF3">(heightInput)) {</span></span>
<span class="line"><span style="color:#E6EDF3">    containsErrors </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">    showError</span><span style="color:#E6EDF3">(heightInput);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isNotNumber</span><span style="color:#E6EDF3">(weightInput)) {</span></span>
<span class="line"><span style="color:#E6EDF3">    containsErrors </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">    showError</span><span style="color:#E6EDF3">(weightInput);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (containsErrors) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> height</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> parseInt</span><span style="color:#E6EDF3">(heightInput.value);</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> weight</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> parseInt</span><span style="color:#E6EDF3">(weightInput.value);</span></span>
<span class="line"><span style="color:#D2A8FF">  showBmi</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">calculateBmi</span><span style="color:#E6EDF3">(weight, height));</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> validateInput</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (event.key </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> "Tab"</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> input</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> event.target;</span></span>
<span class="line"><span style="color:#D2A8FF">  isNotNumber</span><span style="color:#E6EDF3">(input) </span><span style="color:#FF7B72">?</span><span style="color:#D2A8FF"> showError</span><span style="color:#E6EDF3">(input) </span><span style="color:#FF7B72">:</span><span style="color:#D2A8FF"> resetError</span><span style="color:#E6EDF3">(input);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isNumber</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">input</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#A5D6FF"> /</span><span style="color:#FF7B72">^</span><span style="color:#79C0FF">[0-9]</span><span style="color:#FF7B72">+$</span><span style="color:#A5D6FF">/</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">test</span><span style="color:#E6EDF3">(input.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isNotNumber</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">input</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#FF7B72"> !</span><span style="color:#D2A8FF">isNumber</span><span style="color:#E6EDF3">(input);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> showBmi</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">BMI</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> bmiRange</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> getBmiRange</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">BMI</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiValue.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> BMI</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiValue.style.color </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> bmiRange.color;</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiDescription.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> bmiRange.description;</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiDescription.style.color </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> bmiRange.color;</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiResult.style.height </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "115px"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> calculateBmi</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">weight</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">height</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (weight </span><span style="color:#FF7B72">/</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">pow</span><span style="color:#E6EDF3">(height </span><span style="color:#FF7B72">/</span><span style="color:#79C0FF"> 100</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">)).</span><span style="color:#D2A8FF">toFixed</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> resetError</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">input</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  input.parentElement.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"error"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  input.nextElementSibling.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> showError</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">input</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiValue.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiDescription.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  bmiResult.style.height </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "0"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  input.parentElement.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"error"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  input.nextElementSibling.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "Value invalide"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> resetErrors</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  heightInput.parentElement.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"error"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  weightInput.parentElement.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"error"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  heightInputError.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  weightInputError.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> getBmiRange</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">BMI</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> BMIRanges.</span><span style="color:#D2A8FF">find</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">data</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#79C0FF"> BMI</span><span style="color:#FF7B72"> >=</span><span style="color:#E6EDF3"> data.range[</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#79C0FF"> BMI</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#E6EDF3"> data.range[</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">]);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/calculateur-imc/background.jpg" /><p>  <a href="/assets/blog/calculateur-imc/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="countdown-timer">Countdown Timer</h2>
<p>An interactive timer with pause/resume functionality. Master date handling and UI animations.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-7-tab-0" aria-controls="code-tabs-7-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-7-tab-1" aria-controls="code-tabs-7-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-7-tab-2" aria-controls="code-tabs-7-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-7-panel-0" aria-labelledby="code-tabs-7-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>COUNT DOWN&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">main</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Comming Soon&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"days"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter"</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>Days&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hours"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter"</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>Hours&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"minutes"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter"</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>Minutes&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"seconds"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counter"</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>Seconds&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">main</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./snow.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-7-panel-1" aria-labelledby="code-tabs-7-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">'Roboto'</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">./background.png</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#C75263</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-transform</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">uppercase</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.counter-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">120</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">120</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> #8c1c44</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#8c1c44</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-transform</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">uppercase</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.counter</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">block</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">35</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-7-panel-2" aria-labelledby="code-tabs-7-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> countDownDate</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"Jan 1, 2024 00:00:00"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">getTime</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> days</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"days"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> hours</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"hours"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> minutes</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"minutes"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> seconds</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"seconds"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> interval</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> now</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">getTime</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> duration</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> countDownDate </span><span style="color:#FF7B72">-</span><span style="color:#E6EDF3"> now;</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (duration </span><span style="color:#FF7B72">&#x3C;</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#D2A8FF">    clearInterval</span><span style="color:#E6EDF3">(interval);</span></span>
<span class="line"><span style="color:#D2A8FF">    updateDuration</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#D2A8FF">  updateDuration</span><span style="color:#E6EDF3">(duration);</span></span>
<span class="line"><span style="color:#E6EDF3">  }, </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateDuration</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">duration</span><span style="color:#E6EDF3">)  {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> days</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(duration </span><span style="color:#FF7B72">/</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 24</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> hours</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">((duration </span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 24</span><span style="color:#E6EDF3">)) </span><span style="color:#FF7B72">/</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> minutes</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">((duration </span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">)) </span><span style="color:#FF7B72">/</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> seconds</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">((duration </span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">)) </span><span style="color:#FF7B72">/</span><span style="color:#79C0FF"> 1000</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#E6EDF3">  days.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> days;</span></span>
<span class="line"><span style="color:#E6EDF3">  hours.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> hours;</span></span>
<span class="line"><span style="color:#E6EDF3">  minutes.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> minutes;</span></span>
<span class="line"><span style="color:#E6EDF3">  seconds.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> seconds;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary></details><h2 id="password-generator">Password Generator</h2>
<p>Create secure passwords with customizable rules. Learn randomization and strength validation.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-8-tab-0" aria-controls="code-tabs-8-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-8-tab-1" aria-controls="code-tabs-8-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-8-tab-2" aria-controls="code-tabs-8-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-8-panel-0" aria-labelledby="code-tabs-8-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Password generator&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"header-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"gradient-font"</span><span style="color:#E6EDF3">>Password Generator&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        Online tool to generate strong and secure password difficult to crack</span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"generated-password-container"</span><span style="color:#79C0FF"> title</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Copy Password"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-button copy-button"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"copyButton"</span><span style="color:#79C0FF"> title</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Copy Password"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"ci:copy"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"options-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"length-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"label"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          LENGTH:</span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"lengthValue"</span><span style="color:#E6EDF3">>20&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"length"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>5&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"length-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"5"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"30"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"20"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"lengthInput"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>30&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"error-message"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"errorMessage"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        At least one option must be selected</span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"label"</span><span style="color:#E6EDF3">>SETTINGS&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"boolean-options-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeUppercase"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          Include Uppercase</span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeUppercase"</span><span style="color:#79C0FF"> checked</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"toggle-switch"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeLowercase"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          Include Lowercase</span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeLowercase"</span><span style="color:#79C0FF"> checked</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"toggle-switch"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeNumber"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          Include Numbers</span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeNumber"</span><span style="color:#79C0FF"> checked</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"toggle-switch"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeSymbols"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          Include Symbols</span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"includeSymbols"</span><span style="color:#79C0FF"> checked</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"toggle-switch"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"primary"</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"button"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"generatePasswordButton"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      Generate Password</span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-8-panel-1" aria-labelledby="code-tabs-8-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css?family=Roboto Mono"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ee4339</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ffdbc5e3</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --brick-red</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#820233</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f6dbce</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ffe3e299</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: Poppins, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--brick-red</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.hidden</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  max-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">850</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-shadow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 7</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> rgba</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0.1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.header-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">500</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">17</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.generated-password-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#79C0FF"> 2</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">53</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">32</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">relative</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.password</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Roboto Mono"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .password</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  all</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">initial</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">absolute</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  right</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">transparent</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.25</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .icon-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon-button:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--brick-red</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">25</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--brick-red</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">color</span><span style="color:#79C0FF"> 0.25</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon-button:hover</span><span style="color:#79C0FF"> .icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.length</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">13</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  column-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.length-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#E6EDF3">[</span><span style="color:#79C0FF">type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#E6EDF3">] {</span></span>
<span class="line"><span style="color:#79C0FF">  all</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">initial</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--brick-red</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">7</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">linear-gradient</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">));</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">%</span><span style="color:#79C0FF"> 100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-repeat</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#E6EDF3">[</span><span style="color:#79C0FF">type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#E6EDF3">]</span><span style="color:#79C0FF">::-webkit-slider-thumb</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  appearance</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.options-container</span><span style="color:#79C0FF"> .label</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.boolean-options-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">grid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">fr</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  row-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  column-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .boolean-options-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">fr</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72">fr</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">label</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">11</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.toggle-switch</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--brick-red</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">22</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">relative</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.25</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.toggle-switch:before</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  content</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">absolute</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  left</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">4</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-shadow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> rgba</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0.25</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">left</span><span style="color:#79C0FF"> 0.25</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#79C0FF">:checked</span><span style="color:#FF7B72"> +</span><span style="color:#79C0FF"> .toggle-switch</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">input</span><span style="color:#79C0FF">:checked</span><span style="color:#FF7B72"> +</span><span style="color:#79C0FF"> .toggle-switch:before</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  left</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-transform</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">uppercase</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  letter-spacing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1.6</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.error-message</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-8-panel-2" aria-labelledby="code-tabs-8-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> generatedPassword</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> lengthValue</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"lengthValue"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> lengthInput</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"lengthInput"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> options</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".boolean-options-container"</span><span style="color:#E6EDF3">)</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> includeLowercase</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"includeLowercase"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> includeUppercase</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"includeUppercase"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> includeNumber</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"includeNumber"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> includeSymbols</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"includeSymbols"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> errorMessage</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"errorMessage"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> generatePasswordButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"generatePasswordButton"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> copyButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"copyButton"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">lengthInput.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"input"</span><span style="color:#E6EDF3">, handleLengthChange);</span></span>
<span class="line"><span style="color:#E6EDF3">includeLowercase.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"change"</span><span style="color:#E6EDF3">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#E6EDF3">includeUppercase.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"change"</span><span style="color:#E6EDF3">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#E6EDF3">includeNumber.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"change"</span><span style="color:#E6EDF3">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#E6EDF3">includeSymbols.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"change"</span><span style="color:#E6EDF3">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#E6EDF3">generatePasswordButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, generatePassword);</span></span>
<span class="line"><span style="color:#E6EDF3">copyButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, copyPasswordToClipboard);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">generatePassword</span><span style="color:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> generatePassword</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> chars </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> buildCharacterString</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> passwordLength </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> lengthValue.textContent;</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> password </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  for</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> i </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">; i </span><span style="color:#FF7B72">&#x3C;=</span><span style="color:#E6EDF3"> passwordLength; i</span><span style="color:#FF7B72">++</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    password </span><span style="color:#FF7B72">+=</span><span style="color:#D2A8FF"> generateRandomCharacter</span><span style="color:#E6EDF3">(chars);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  generatedPassword.innerText </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> password;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> buildCharacterString</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> chars </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (includeLowercase.checked) {</span></span>
<span class="line"><span style="color:#E6EDF3">    chars </span><span style="color:#FF7B72">+=</span><span style="color:#A5D6FF"> "abcdefghijklmnopqrstuvwxyz"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (includeUppercase.checked) {</span></span>
<span class="line"><span style="color:#E6EDF3">    chars </span><span style="color:#FF7B72">+=</span><span style="color:#A5D6FF"> "ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (includeNumber.checked) {</span></span>
<span class="line"><span style="color:#E6EDF3">    chars </span><span style="color:#FF7B72">+=</span><span style="color:#A5D6FF"> "0123456789"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (includeSymbols.checked) {</span></span>
<span class="line"><span style="color:#E6EDF3">    chars </span><span style="color:#FF7B72">+=</span><span style="color:#A5D6FF"> "!@#$%^&#x26;*()"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> chars;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> generateRandomCharacter</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">chars</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> randomNumber </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#E6EDF3"> chars.</span><span style="color:#79C0FF">length</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> chars.</span><span style="color:#D2A8FF">substring</span><span style="color:#E6EDF3">(randomNumber, randomNumber </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleLengthChange</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  lengthValue.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> event.target.value;</span></span>
<span class="line"><span style="color:#E6EDF3">  lengthInput.style.backgroundSize </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> ((event.target.value </span><span style="color:#FF7B72">-</span><span style="color:#79C0FF"> 5</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">/</span><span style="color:#79C0FF"> 25</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 100</span><span style="color:#FF7B72"> +</span><span style="color:#A5D6FF"> "% 100%"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  generatePassword</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleCheckboxChange</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  errorMessage.style.display </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "none"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isNoOptionChecked</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#E6EDF3">    errorMessage.style.display </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "block"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    event.target.checked </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#D2A8FF">  generatePassword</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isAtLeastOneOptionChecked</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> options.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"input[type=checkbox]:checked"</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">?</span><span style="color:#79C0FF"> true</span><span style="color:#FF7B72"> :</span><span style="color:#79C0FF"> false</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#D2A8FF"> isNoOptionChecked</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#FF7B72"> !</span><span style="color:#D2A8FF">isAtLeastOneOptionChecked</span><span style="color:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> copyPasswordToClipboard</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  try</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">navigator?.clipboard?.writeText) </span><span style="color:#FF7B72">return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">    await</span><span style="color:#E6EDF3"> navigator.clipboard.</span><span style="color:#D2A8FF">writeText</span><span style="color:#E6EDF3">(generatedPassword.textContent);</span></span>
<span class="line"><span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> generatedPasswordValue</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> generatedPassword.textContent;</span></span>
<span class="line"><span style="color:#E6EDF3">    generatedPassword.textContent </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'Copied!'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">    setTimeout</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> generatedPassword.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> generatedPasswordValue, </span><span style="color:#A5D6FF">"1000"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (err) {</span></span>
<span class="line"><span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">error</span><span style="color:#E6EDF3">(err);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/password-generator/background.jpg" /><p>  <a href="/assets/blog/password-generator/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="quiz-app">Quiz App</h2>
<p>A timed trivia game with scoring. Perfect for array manipulation practice.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-9-tab-0" aria-controls="code-tabs-9-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-9-tab-1" aria-controls="code-tabs-9-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-9-tab-2" aria-controls="code-tabs-9-panel-2" aria-selected="false" tabindex="-1">script.js</button><button type="button" role="tab" id="code-tabs-9-tab-3" aria-controls="code-tabs-9-panel-3" aria-selected="false" tabindex="-1">quizzes.json</button></div><div role="tabpanel" id="code-tabs-9-panel-0" aria-labelledby="code-tabs-9-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Quiz App&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"quiz"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"header-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Quiz App&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"question"</span><span style="color:#E6EDF3">>Question text&#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"options"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"submit"</span><span style="color:#E6EDF3">>Submit&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"module"</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-9-panel-1" aria-labelledby="code-tabs-9-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#a5183b</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ff6e3b</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#680131</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#a5183b21</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --option-background-color</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">#f7efdca8</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --option-hover-background-color</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">#f7efdc</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Poppins"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"background.jpg"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">768</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">700</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">992</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">900</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.header-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">12</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">22</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: opacity </span><span style="color:#79C0FF">0.5</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#79C0FF">:hover</span><span style="color:#E6EDF3">, </span><span style="color:#7EE787">button</span><span style="color:#79C0FF">:focus</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  opacity</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0.90</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.options</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">grid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">fr</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  column-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  row-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 35</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">768</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .options</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">repeat</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">fr</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.option</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--option-background-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.5</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.option:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--option-hover-background-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.option.selected</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.option.selected</span><span style="color:#7EE787"> span</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">); </span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.index</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-right</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">22</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-transform</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">uppercase</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.option.selected</span><span style="color:#79C0FF"> .index</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.answer</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.score</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">900</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-9-panel-2" aria-labelledby="code-tabs-9-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> quizData</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"quizzes.json"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">then</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">res</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> res.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">());</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> container</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".container"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> options</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".options"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> questionEl</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"question"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> submitBtn</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"submit"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> currentQuiz </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> score </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">loadQuiz</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">options.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, selectAnswer);</span></span>
<span class="line"><span style="color:#E6EDF3">submitBtn.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, answerQuestion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> loadQuiz</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> currentQuizData</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> quizData[currentQuiz];</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> optionIndices</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">"a"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"b"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"c"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"d"</span><span style="color:#E6EDF3">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">  questionEl.innerText </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> currentQuizData.question;</span></span>
<span class="line"><span style="color:#E6EDF3">  options.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  currentQuizData.options.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">option</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">index</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    options.innerHTML </span><span style="color:#FF7B72">+=</span><span style="color:#A5D6FF"> \`</span></span>
<span class="line"><span style="color:#A5D6FF">        &#x3C;div class="option" data-option="\${</span><span style="color:#E6EDF3">option</span><span style="color:#A5D6FF">}"></span></span>
<span class="line"><span style="color:#A5D6FF">          &#x3C;div class="index">\${</span><span style="color:#E6EDF3">optionIndices</span><span style="color:#A5D6FF">[</span><span style="color:#E6EDF3">index</span><span style="color:#A5D6FF">]</span><span style="color:#A5D6FF">}&#x3C;/div></span></span>
<span class="line"><span style="color:#A5D6FF">          &#x3C;span class="option-answer">\${</span><span style="color:#E6EDF3">option</span><span style="color:#A5D6FF">}&#x3C;/span></span></span>
<span class="line"><span style="color:#A5D6FF">        &#x3C;/div>\`</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> selectAnswer</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> selectedOption</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> event.target.</span><span style="color:#D2A8FF">closest</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.option'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">selectedOption) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> previouslySelectedOption</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> options.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.option.selected'</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (previouslySelectedOption) {</span></span>
<span class="line"><span style="color:#E6EDF3">    previouslySelectedOption.classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"selected"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">  selectedOption.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"selected"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> answerQuestion</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> selectedOption</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> getSelected</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isAnswerCorrect</span><span style="color:#E6EDF3">(selectedOption)) {</span></span>
<span class="line"><span style="color:#E6EDF3">    score</span><span style="color:#FF7B72">++</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">  currentQuiz</span><span style="color:#FF7B72">++</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#D2A8FF">isQuizComplete</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#D2A8FF">    loadQuiz</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#D2A8FF">    showResults</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> getSelected</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> selectedOption</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#FF7B72">...</span><span style="color:#E6EDF3">options.</span><span style="color:#D2A8FF">querySelectorAll</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".option"</span><span style="color:#E6EDF3">)].</span><span style="color:#D2A8FF">find</span><span style="color:#E6EDF3">(</span></span>
<span class="line"><span style="color:#E6EDF3">    (</span><span style="color:#FFA657">option</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> option.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"selected"</span><span style="color:#E6EDF3">)</span></span>
<span class="line"><span style="color:#E6EDF3">  );</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> selectedOption </span><span style="color:#FF7B72">?</span><span style="color:#E6EDF3"> selectedOption.</span><span style="color:#D2A8FF">getAttribute</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"data-option"</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">:</span><span style="color:#79C0FF"> null</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> isAnswerCorrect</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">selectedOption</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> selectedOption </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> selectedOption </span><span style="color:#FF7B72">===</span><span style="color:#D2A8FF"> getCurrentCorrectAnswer</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> getCurrentCorrectAnswer</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> quizData[currentQuiz].correct;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> isQuizComplete</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> currentQuiz </span><span style="color:#FF7B72">>=</span><span style="color:#E6EDF3"> quizData.</span><span style="color:#79C0FF">length</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> showResults</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  container.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> \`</span></span>
<span class="line"><span style="color:#A5D6FF">    &#x3C;h2 class="answer">You answered correctly at &#x3C;span class="score">\${</span><span style="color:#E6EDF3">score</span><span style="color:#A5D6FF">}/\${</span><span style="color:#E6EDF3">quizData</span><span style="color:#A5D6FF">.</span><span style="color:#79C0FF">length</span><span style="color:#A5D6FF">}&#x3C;/span> questions&#x3C;/h2></span></span>
<span class="line"><span style="color:#A5D6FF">    &#x3C;button onclick="location.reload()">Reload&#x3C;/button></span></span>
<span class="line"><span style="color:#A5D6FF">  \`</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-9-panel-3" aria-labelledby="code-tabs-9-tab-3" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">[</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "question"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Which language runs in a web browser?"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "options"</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#A5D6FF">            "Java"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "C"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "Python"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "JavaScript"</span></span>
<span class="line"><span style="color:#E6EDF3">        ],</span></span>
<span class="line"><span style="color:#7EE787">        "correct"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"JavaScript"</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "question"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Which attribute is used to specify the URL of the page that the link goes to?"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "options"</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#A5D6FF">            "src"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "href"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "url"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "link"</span></span>
<span class="line"><span style="color:#E6EDF3">        ],</span></span>
<span class="line"><span style="color:#7EE787">        "correct"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"href"</span></span>
<span class="line"><span style="color:#E6EDF3">    },    </span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "question"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Which CSS property is used to change the font size of an element?"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "options"</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#A5D6FF">            "font-style"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "font-family"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "font-size"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "text-size"</span></span>
<span class="line"><span style="color:#E6EDF3">        ],</span></span>
<span class="line"><span style="color:#7EE787">        "correct"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"font-size"</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#E6EDF3">    {</span></span>
<span class="line"><span style="color:#7EE787">        "question"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"What keyword is used to declare a function in JavaScript?"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">        "options"</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#A5D6FF">            "func"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "def"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "function"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#A5D6FF">            "method"</span></span>
<span class="line"><span style="color:#E6EDF3">        ],</span></span>
<span class="line"><span style="color:#7EE787">        "correct"</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"function"</span></span>
<span class="line"><span style="color:#E6EDF3">    }    </span></span>
<span class="line"><span style="color:#E6EDF3">]</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/quiz-app/background.jpg" /><p>  <a href="/assets/blog/quiz-app/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="tic-tac-toe-game">Tic Tac Toe Game</h2>
<p>The classic Tic Tac Toe game. Master game state management.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-10-tab-0" aria-controls="code-tabs-10-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-10-tab-1" aria-controls="code-tabs-10-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-10-tab-2" aria-controls="code-tabs-10-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-10-panel-0" aria-labelledby="code-tabs-10-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>tic tac toe&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Tic Tac Toe&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"game-message current-player"</span><span style="color:#E6EDF3">>Who's Turn : </span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>X&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"game-board"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"row"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-1"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-2"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-3"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"row"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-4"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-5"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-6"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"row"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-7"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-8"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"cell-9"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">                &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"resetButton"</span><span style="color:#E6EDF3">>Reset Game&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-10-panel-1" aria-labelledby="code-tabs-10-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Varela+Round&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f8a126</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#8d185e</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --hover-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#e07b23</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f8a1267a</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --bright-blue</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#2f76ff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --raspberry-red</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#e12472</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Varela Round"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">background.jpg</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">no-repeat</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">15</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  flex-direction</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">column</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.current-player</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">56</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.current-player</span><span style="color:#7EE787"> span</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">inline-flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.game-board</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">grid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">repeat</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  grid-template-rows</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">repeat</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.cell</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">90</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#00000045</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.3</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.cell:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#00000060</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.cell-O</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-shadow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--raspberry-red</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 20</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--raspberry-red</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 30</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--raspberry-red</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.cell-X</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-shadow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--bright-blue</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 20</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--bright-blue</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">0</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> 30</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--bright-blue</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:is</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">.cell-O</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">.cell-X</span><span style="color:#E6EDF3">)</span><span style="color:#79C0FF">:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#00000045</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.cell.correct</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.cell.correct:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> auto</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">0.3</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#79C0FF">:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--hover-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">max-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .game-board</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">repeat</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">    grid-template-rows</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">repeat</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">  .cell</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">60</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">  button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-10-panel-2" aria-labelledby="code-tabs-10-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> EGameStatus</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">  NOT_STARTED: </span><span style="color:#A5D6FF">"NOT_STARTED"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">  IN_PROGRESS: </span><span style="color:#A5D6FF">"IN_PROGRESS"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">  FINISHED_WITH_WINNER: </span><span style="color:#A5D6FF">"FINISHED_WITH_WINNER"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">  FINISHED_WITH_TIE: </span><span style="color:#A5D6FF">"FINISHED_WITH_TIE"</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> gameStatus </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">NOT_STARTED</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> currentPlayer </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "X"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> cells</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelectorAll</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".cell"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> resetButton</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"resetButton"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> gameMessage</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".game-message"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">updateGameMessage</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">resetButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, reset);</span></span>
<span class="line"><span style="color:#E6EDF3">cells.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">cell</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">index</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span></span>
<span class="line"><span style="color:#E6EDF3">  cell.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> handleCellClick</span><span style="color:#E6EDF3">(index))</span></span>
<span class="line"><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleCellClick</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">index</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isGameFinished</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> cells[index].innerHTML </span><span style="color:#FF7B72">!==</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">  gameStatus </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">IN_PROGRESS</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  cells[index].innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> currentPlayer;</span></span>
<span class="line"><span style="color:#E6EDF3">  cells[index].classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"cell-"</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3"> currentPlayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">checkWinner</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#E6EDF3">    gameStatus </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">FINISHED_WITH_WINNER</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">    updateGameMessage</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">checkTie</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#E6EDF3">    gameStatus </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">FINISHED_WITH_TIE</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">    updateGameMessage</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">  currentPlayer </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> currentPlayer </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "X"</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> "O"</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> "X"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  updateGameMessage</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> checkWinner</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> winPatterns</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span></span>
<span class="line"><span style="color:#E6EDF3">    [</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">], [</span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">5</span><span style="color:#E6EDF3">], [</span><span style="color:#79C0FF">6</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">7</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">8</span><span style="color:#E6EDF3">], </span><span style="color:#8B949E">// Rows</span></span>
<span class="line"><span style="color:#E6EDF3">    [</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">3</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">6</span><span style="color:#E6EDF3">], [</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">7</span><span style="color:#E6EDF3">], [</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">5</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">8</span><span style="color:#E6EDF3">], </span><span style="color:#8B949E">// Columns</span></span>
<span class="line"><span style="color:#E6EDF3">    [</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">8</span><span style="color:#E6EDF3">], [</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">4</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">6</span><span style="color:#E6EDF3">], </span><span style="color:#8B949E">// Diagonals</span></span>
<span class="line"><span style="color:#E6EDF3">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  for</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> pattern</span><span style="color:#FF7B72"> of</span><span style="color:#E6EDF3"> winPatterns) {</span></span>
<span class="line"><span style="color:#FF7B72">    const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">a</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">b</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> pattern;</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (</span></span>
<span class="line"><span style="color:#E6EDF3">      cells[a].innerHTML </span><span style="color:#FF7B72">!==</span><span style="color:#A5D6FF"> ""</span><span style="color:#FF7B72"> &#x26;&#x26;</span></span>
<span class="line"><span style="color:#E6EDF3">      cells[a].innerHTML </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> cells[b].innerHTML </span><span style="color:#FF7B72">&#x26;&#x26;</span></span>
<span class="line"><span style="color:#E6EDF3">      cells[a].innerHTML </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> cells[c].innerHTML</span></span>
<span class="line"><span style="color:#E6EDF3">    ) {</span></span>
<span class="line"><span style="color:#D2A8FF">      updateCellsWinners</span><span style="color:#E6EDF3">(cells[a], cells[b], cells[c]);</span></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#79C0FF"> true</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#79C0FF"> false</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateCellsWinners</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">a</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">b</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">c</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">  a.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"correct"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  b.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"correct"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  c.classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"correct"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> checkTie</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> Array.</span><span style="color:#D2A8FF">from</span><span style="color:#E6EDF3">(cells).</span><span style="color:#D2A8FF">every</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">cell</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> cell.innerHTML </span><span style="color:#FF7B72">!==</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> reset</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  gameStatus </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">NOT_STARTED</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  currentPlayer </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "X"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  updateGameMessage</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  cells.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">cell</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    cell.innerText </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    cell.className </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "cell"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateGameMessage</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (gameStatus </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">FINISHED_WITH_TIE</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    gameMessage.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "It's a tie!"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">else</span><span style="color:#FF7B72"> if</span><span style="color:#E6EDF3"> (gameStatus </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">FINISHED_WITH_WINNER</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">    gameMessage.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> \`Winner : &#x3C;span>\${</span><span style="color:#E6EDF3">currentPlayer</span><span style="color:#A5D6FF">}&#x3C;/span>\`</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    gameMessage.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> \`Who's Turn : &#x3C;span>\${</span><span style="color:#E6EDF3">currentPlayer</span><span style="color:#A5D6FF">}&#x3C;/span>\`</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> isGameFinished</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> gameStatus </span><span style="color:#FF7B72">==</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">FINISHED_WITH_TIE</span><span style="color:#FF7B72"> ||</span><span style="color:#E6EDF3"> gameStatus </span><span style="color:#FF7B72">==</span><span style="color:#E6EDF3"> EGameStatus.</span><span style="color:#79C0FF">FINISHED_WITH_TIE</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/tic-tac-toe-game/background.jpg" /><p>  <a href="/assets/blog/tic-tac-toe-game/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="typing-speed-test">Typing Speed Test</h2>
<p>Measure words-per-minute with accuracy tracking. Practice keyboard events.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-11-tab-0" aria-controls="code-tabs-11-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-11-tab-1" aria-controls="code-tabs-11-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-11-tab-2" aria-controls="code-tabs-11-panel-2" aria-selected="false" tabindex="-1">script.js</button><button type="button" role="tab" id="code-tabs-11-tab-3" aria-controls="code-tabs-11-panel-3" aria-selected="false" tabindex="-1">lorem-ipsum.js</button></div><div role="tabpanel" id="code-tabs-11-panel-0" aria-labelledby="code-tabs-11-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span></span>
<span class="line"><span style="color:#79C0FF">    content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span></span>
<span class="line"><span style="color:#79C0FF">    content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Typing Speed Test&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"header-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Typing Speed Test&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        Online tool to help you improve your typing speed and accuracy.</span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text-to-type-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text-to-type"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"footer-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-value-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-value"</span></span>
<span class="line"><span style="color:#79C0FF">              id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"nbWord"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              0</span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-label"</span><span style="color:#E6EDF3">>Word/min&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-value-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-value"</span></span>
<span class="line"><span style="color:#79C0FF">              id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"errors"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">              0</span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"typed-text-stat-label"</span><span style="color:#E6EDF3">>Errors&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"tryAgainBtn"</span><span style="color:#E6EDF3">>Try again&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"lorem-ipsum.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-11-panel-1" aria-labelledby="code-tabs-11-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css?family=Roboto Mono"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f7933d</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#424242</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --red-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f57173</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --green-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#34a055</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ffffff95</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --cursor-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#222</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color-1</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#f8a3a269</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color-2</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#74334799</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Roboto"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"background.jpg"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">800</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">auto</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> solid</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color-1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.header-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: Poppins, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">36</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">17</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--background-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">32</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type-container</span><span style="color:#79C0FF"> .footer-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color-2</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.footer-container</span><span style="color:#79C0FF"> .typed-text-stat-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.typed-text-stat-value-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-right</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color-2</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.typed-text-stat-value</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.typed-text-stat-value-container:first-child</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  padding-left</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type-container</span><span style="color:#79C0FF"> .text-to-type</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Roboto Mono"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">22</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  word-break</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">break-all</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">32</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type</span><span style="color:#7EE787"> span</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type-container</span><span style="color:#79C0FF"> .text-to-type.blink</span><span style="color:#7EE787"> span</span><span style="color:#79C0FF">.cursor</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--cursor-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type-container</span><span style="color:#7EE787"> span</span><span style="color:#79C0FF">.NOK</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--red-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.text-to-type-container</span><span style="color:#7EE787"> span</span><span style="color:#79C0FF">.OK</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--green-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-11-panel-2" aria-labelledby="code-tabs-11-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> textToType</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".text-to-type"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> tryAgainBtn</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#tryAgainBtn"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> errorsElement</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#errors"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> nbWordElement</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"#nbWord"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> loremIpsum</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> LoremIpsum</span><span style="color:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> caractersToType;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> caracterToTypeIndex;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> typedCaractersErrors;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> typingStartTime;</span></span>
<span class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> finished;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">initState</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#D2A8FF">toggleCursor</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">document.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keydown"</span><span style="color:#E6EDF3">, handleKeyPress);</span></span>
<span class="line"><span style="color:#E6EDF3">tryAgainBtn.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, tryAgain);</span></span>
<span class="line"><span style="color:#E6EDF3">document.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keydown"</span><span style="color:#E6EDF3">,(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> event.key </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "Enter"</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#D2A8FF"> tryAgain</span><span style="color:#E6EDF3">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> tryAgain</span><span style="color:#E6EDF3">(){</span></span>
<span class="line"><span style="color:#D2A8FF">  initState</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> initState</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  caracterToTypeIndex </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  typedCaractersErrors </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  typingStartTime </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">getTime</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">  finished </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> false</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  setTextToType</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> setTextToType</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  textToType.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> getRandomText</span><span style="color:#E6EDF3">()</span></span>
<span class="line"><span style="color:#E6EDF3">    .</span><span style="color:#D2A8FF">split</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">)</span></span>
<span class="line"><span style="color:#E6EDF3">    .</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">char</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">index</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#A5D6FF"> \`&#x3C;span class="\${</span><span style="color:#E6EDF3">index</span><span style="color:#FF7B72"> ===</span><span style="color:#79C0FF"> 0</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> "cursor"</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ""}">\${</span><span style="color:#E6EDF3">char</span><span style="color:#A5D6FF">}&#x3C;/span>\`</span><span style="color:#E6EDF3">)</span></span>
<span class="line"><span style="color:#E6EDF3">    .</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  caractersToType </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> textToType.</span><span style="color:#D2A8FF">querySelectorAll</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"span"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> getRandomText</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> loremIpsum.</span><span style="color:#D2A8FF">sentence</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">20</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">toLowerCase</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">replace</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">/</span><span style="color:#79C0FF">[</span><span style="color:#FF7B72">^</span><span style="color:#79C0FF">a-z ]</span><span style="color:#A5D6FF">/</span><span style="color:#FF7B72">g</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> toggleCursor</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#D2A8FF">  setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> textToType.classList.</span><span style="color:#D2A8FF">toggle</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"blink"</span><span style="color:#E6EDF3">), </span><span style="color:#79C0FF">500</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> isLastcaracter</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> caracterToTypeIndex </span><span style="color:#FF7B72">>=</span><span style="color:#E6EDF3"> caractersToType.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleKeyPress</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isNotValidTypedKey</span><span style="color:#E6EDF3">(event.key) </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> finished) {</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  handleTypedKey</span><span style="color:#E6EDF3">(event.key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isLastcaracter</span><span style="color:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#D2A8FF">    finishTyping</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  moveCursor</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> isNotValidTypedKey</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">key</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#FF7B72"> !</span><span style="color:#A5D6FF">/</span><span style="color:#FF7B72">^</span><span style="color:#79C0FF">[a-z ]</span><span style="color:#FF7B72">$</span><span style="color:#A5D6FF">/</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">test</span><span style="color:#E6EDF3">(key);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> finishTyping</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  finished </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">  updateTypingStats</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#D2A8FF">  removeCursor</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> isTypedCharacterCorrect</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">key</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> key </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> caractersToType[caracterToTypeIndex].innerText;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleTypedKey</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">key</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">isTypedCharacterCorrect</span><span style="color:#E6EDF3">(key)) {</span></span>
<span class="line"><span style="color:#E6EDF3">    caractersToType[caracterToTypeIndex].classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"OK"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#E6EDF3">    caractersToType[caracterToTypeIndex].classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"NOK"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    typedCaractersErrors</span><span style="color:#FF7B72">++</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> updateTypingStats</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  errorsElement.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> typedCaractersErrors;</span></span>
<span class="line"><span style="color:#E6EDF3">  nbWordElement.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> calculateNbWord</span><span style="color:#E6EDF3">(typingStartTime);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> calculateNbWord</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">startTime</span><span style="color:#E6EDF3">){</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> elapsedTimeInMinutes</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">getTime</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">-</span><span style="color:#E6EDF3"> startTime) </span><span style="color:#FF7B72">/</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">1000</span><span style="color:#FF7B72"> *</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">); </span><span style="color:#8B949E">// Convert milliseconds to minutes</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> totalWordsTyped</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">ceil</span><span style="color:#E6EDF3">(caracterToTypeIndex </span><span style="color:#FF7B72">/</span><span style="color:#79C0FF"> 5</span><span style="color:#E6EDF3">); </span><span style="color:#8B949E">// Assuming an average word length of 5 characters</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">round</span><span style="color:#E6EDF3">(totalWordsTyped </span><span style="color:#FF7B72">/</span><span style="color:#E6EDF3"> elapsedTimeInMinutes);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> moveCursor</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  caractersToType[caracterToTypeIndex</span><span style="color:#FF7B72">++</span><span style="color:#E6EDF3">].classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"cursor"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  caractersToType[caracterToTypeIndex].classList.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"cursor"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> removeCursor</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#E6EDF3">  caractersToType[caracterToTypeIndex].classList.</span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"cursor"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-11-panel-3" aria-labelledby="code-tabs-11-tab-3" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">;(</span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A5D6FF">  "use strict"</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">  /**</span></span>
<span class="line"><span style="color:#8B949E">  * LoremIpsum constructor</span></span>
<span class="line"><span style="color:#8B949E">  *</span></span>
<span class="line"><span style="color:#8B949E">  * </span><span style="color:#FF7B72">@type</span><span style="color:#FFA657"> {Function}</span></span>
<span class="line"><span style="color:#8B949E">  */</span></span>
<span class="line"><span style="color:#E6EDF3">  window.</span><span style="color:#D2A8FF">LoremIpsum</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> function</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#8B949E">    // pass</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">  /**</span></span>
<span class="line"><span style="color:#8B949E">  * LoremIpsum prototype</span></span>
<span class="line"><span style="color:#8B949E">  *</span></span>
<span class="line"><span style="color:#8B949E">  * </span><span style="color:#FF7B72">@type</span><span style="color:#FFA657"> {Object}</span></span>
<span class="line"><span style="color:#8B949E">  */</span></span>
<span class="line"><span style="color:#E6EDF3">  window.LoremIpsum.</span><span style="color:#79C0FF">prototype</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">    /**</span></span>
<span class="line"><span style="color:#8B949E">    * Possible words</span></span>
<span class="line"><span style="color:#8B949E">    *</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@type</span><span style="color:#FFA657"> {Array}</span></span>
<span class="line"><span style="color:#8B949E">    */</span></span>
<span class="line"><span style="color:#E6EDF3">    _words: [ </span><span style="color:#A5D6FF">"a"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ac"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"accumsan"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ad"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"adipiscing"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"aenean"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"aenean"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"aliquam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"aliquam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"aliquet"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"amet"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ante"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"aptent"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"arcu"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"at"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"auctor"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"augue"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"bibendum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"blandit"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"class"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"commodo"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"condimentum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"congue"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"consectetur"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"consequat"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"conubia"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"convallis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"cras"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"cubilia"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"curabitur"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"curabitur"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"curae"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"cursus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"dapibus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"diam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"dictum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"dictumst"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"dolor"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"donec"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"donec"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"dui"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"duis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"egestas"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"eget"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"eleifend"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"elementum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"elit"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"enim"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"erat"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"eros"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"est"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"et"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"etiam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"etiam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"eu"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"euismod"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"facilisis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"fames"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"faucibus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"felis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"fermentum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"feugiat"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"fringilla"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"fusce"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"gravida"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"habitant"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"habitasse"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"hac"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"hendrerit"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"himenaeos"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"iaculis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"id"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"imperdiet"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"in"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"inceptos"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"integer"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"interdum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ipsum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"justo"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"lacinia"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"lacus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"laoreet"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"lectus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"leo"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"libero"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ligula"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"litora"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"lobortis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"lorem"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"luctus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"maecenas"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"magna"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"malesuada"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"massa"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"mattis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"mauris"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"metus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"mi"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"molestie"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"mollis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"morbi"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nec"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"neque"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"netus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nibh"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nisi"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nisl"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"non"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nostra"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nulla"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nullam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"nunc"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"odio"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"orci"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ornare"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"pellentesque"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"per"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"pharetra"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"phasellus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"placerat"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"platea"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"porta"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"porttitor"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"posuere"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"potenti"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"praesent"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"pretium"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"primis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"proin"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"pulvinar"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"purus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"quam"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"quis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"quisque"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"quisque"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"rhoncus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"risus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"rutrum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sagittis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sapien"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"scelerisque"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sed"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sem"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"semper"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"senectus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sit"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sociosqu"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sodales"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"sollicitudin"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"suscipit"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"suspendisse"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"taciti"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"tellus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"tempor"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"tempus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"tincidunt"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"torquent"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"tortor"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"tristique"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"turpis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ullamcorper"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ultrices"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ultricies"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"urna"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ut"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"ut"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"varius"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"vehicula"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"vel"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"velit"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"venenatis"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"vestibulum"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"vitae"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"vivamus"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"viverra"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"volutpat"</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"vulputate"</span><span style="color:#E6EDF3"> ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">    /**</span></span>
<span class="line"><span style="color:#8B949E">    * Get random number</span></span>
<span class="line"><span style="color:#8B949E">    *</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> x</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> y</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@return</span><span style="color:#FFA657"> {Number}</span></span>
<span class="line"><span style="color:#8B949E">    */</span></span>
<span class="line"><span style="color:#D2A8FF">    _random</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">x</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">y</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> rnd </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> (Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> (Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> (Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">round</span><span style="color:#E6EDF3">(Math.</span><span style="color:#D2A8FF">abs</span><span style="color:#E6EDF3">(rnd) </span><span style="color:#FF7B72">*</span><span style="color:#E6EDF3"> x </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> y);</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">    /**</span></span>
<span class="line"><span style="color:#8B949E">    * Get random number between min and max</span></span>
<span class="line"><span style="color:#8B949E">    *</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> min</span><span style="color:#8B949E"> (optional) lower result limit</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> max</span><span style="color:#8B949E"> (optional) upper result limit</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@return</span><span style="color:#FFA657"> {Number}</span><span style="color:#8B949E">     random number</span></span>
<span class="line"><span style="color:#8B949E">    */</span></span>
<span class="line"><span style="color:#D2A8FF">    _count</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">min</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">max</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> result;</span></span>
<span class="line"><span style="color:#FF7B72">      if</span><span style="color:#E6EDF3"> (min </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> max) result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#E6EDF3"> (max </span><span style="color:#FF7B72">-</span><span style="color:#E6EDF3"> min </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> min);</span></span>
<span class="line"><span style="color:#FF7B72">      else</span><span style="color:#FF7B72"> if</span><span style="color:#E6EDF3"> (min) result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> min;</span></span>
<span class="line"><span style="color:#FF7B72">      else</span><span style="color:#FF7B72"> if</span><span style="color:#E6EDF3"> (max) result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> max;</span></span>
<span class="line"><span style="color:#FF7B72">      else</span><span style="color:#E6EDF3"> result </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">_random</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">8</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3"> result;</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">    /**</span></span>
<span class="line"><span style="color:#8B949E">    * Get random words</span></span>
<span class="line"><span style="color:#8B949E">    *</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> min</span><span style="color:#8B949E"> (optional) minimal words count</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> max</span><span style="color:#8B949E"> (optional) maximal words count</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@return</span><span style="color:#FFA657"> {Object}</span><span style="color:#8B949E">     array of random words</span></span>
<span class="line"><span style="color:#8B949E">    */</span></span>
<span class="line"><span style="color:#D2A8FF">    words</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">min</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">max</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> [];</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">_count</span><span style="color:#E6EDF3">(min, max);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">      // get random words</span></span>
<span class="line"><span style="color:#FF7B72">      while</span><span style="color:#E6EDF3"> (result.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#E6EDF3"> count) {</span></span>
<span class="line"><span style="color:#FF7B72">        var</span><span style="color:#E6EDF3"> pos </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">._words.</span><span style="color:#79C0FF">length</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">        var</span><span style="color:#E6EDF3"> rnd </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">._words[pos];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">        // do not allow same word twice in a row</span></span>
<span class="line"><span style="color:#FF7B72">        if</span><span style="color:#E6EDF3"> (result.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> result[result.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> rnd) {</span></span>
<span class="line"><span style="color:#FF7B72">          continue</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">        result.</span><span style="color:#D2A8FF">push</span><span style="color:#E6EDF3">(rnd);</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3"> result;</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">    /**</span></span>
<span class="line"><span style="color:#8B949E">    * Generate sentence</span></span>
<span class="line"><span style="color:#8B949E">    *</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> min</span><span style="color:#8B949E"> (optional) minimal words count</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> max</span><span style="color:#8B949E"> (optional) maximal words count</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@return</span><span style="color:#FFA657"> {String}</span><span style="color:#8B949E">     sentence</span></span>
<span class="line"><span style="color:#8B949E">    */</span></span>
<span class="line"><span style="color:#D2A8FF">    sentence</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">min</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">max</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> words </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">words</span><span style="color:#E6EDF3">(min, max);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">      // add comma(s) to sentence</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> index </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">_random</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">6</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">      while</span><span style="color:#E6EDF3"> (index </span><span style="color:#FF7B72">&#x3C;</span><span style="color:#E6EDF3"> words.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 2</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#E6EDF3">        words[index] </span><span style="color:#FF7B72">+=</span><span style="color:#A5D6FF"> ","</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">        index </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">_random</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">6</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">      // append puctation on end</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> punct </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> "...!?"</span></span>
<span class="line"><span style="color:#E6EDF3">      words[words.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> -</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">+=</span><span style="color:#E6EDF3"> punct.</span><span style="color:#D2A8FF">charAt</span><span style="color:#E6EDF3">(Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(Math.</span><span style="color:#D2A8FF">random</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#E6EDF3"> punct.</span><span style="color:#79C0FF">length</span><span style="color:#E6EDF3">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">      // uppercase first letter</span></span>
<span class="line"><span style="color:#E6EDF3">      words[</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> words[</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">].</span><span style="color:#D2A8FF">charAt</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">toUpperCase</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> words[</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">].</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3"> words.</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">    /**</span></span>
<span class="line"><span style="color:#8B949E">    * Generate paragraph</span></span>
<span class="line"><span style="color:#8B949E">    *</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> min</span><span style="color:#8B949E"> (optional) minimal words count</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@param</span><span style="color:#FFA657">  {Number}</span><span style="color:#E6EDF3"> max</span><span style="color:#8B949E"> (optional) maximal words count</span></span>
<span class="line"><span style="color:#8B949E">    * </span><span style="color:#FF7B72">@return</span><span style="color:#FFA657"> {String}</span><span style="color:#8B949E">     paragraph</span></span>
<span class="line"><span style="color:#8B949E">    */</span></span>
<span class="line"><span style="color:#D2A8FF">    paragraph</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">function</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">min</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">max</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">      if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">min </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">max) {</span></span>
<span class="line"><span style="color:#E6EDF3">        min </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 20</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">        max </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 60</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> result </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">      var</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">_count</span><span style="color:#E6EDF3">(min, max);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">      // append sentences until limit is reached</span></span>
<span class="line"><span style="color:#FF7B72">      while</span><span style="color:#E6EDF3"> (result.</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#FF7B72">-</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">split</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">).</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#E6EDF3"> count) {</span></span>
<span class="line"><span style="color:#E6EDF3">        result </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> this</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">sentence</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#A5D6FF"> " "</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"><span style="color:#E6EDF3">      result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> result.</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#FF7B72">-</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">      // remove words</span></span>
<span class="line"><span style="color:#FF7B72">      if</span><span style="color:#E6EDF3"> (result.</span><span style="color:#D2A8FF">split</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">).</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> ></span><span style="color:#E6EDF3"> count) {</span></span>
<span class="line"><span style="color:#FF7B72">        var</span><span style="color:#E6EDF3"> punct </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> result.</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">-</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">        result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> result.</span><span style="color:#D2A8FF">split</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, count).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">" "</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">        result </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> result.</span><span style="color:#D2A8FF">replace</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">/,</span><span style="color:#FF7B72">$</span><span style="color:#A5D6FF">/</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">        result </span><span style="color:#FF7B72">+=</span><span style="color:#E6EDF3"> punct;</span></span>
<span class="line"><span style="color:#E6EDF3">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3"> result;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">})();</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/typing-speed-test/background.jpg" /><p>  <a href="/assets/blog/typing-speed-test/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="hash-generator">Hash Generator</h2>
<p>Generate cryptographic hashes (MD5, SHA-1) from user input. Explore web cryptography APIs.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-12-tab-0" aria-controls="code-tabs-12-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-12-tab-1" aria-controls="code-tabs-12-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-12-tab-2" aria-controls="code-tabs-12-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-12-panel-0" aria-labelledby="code-tabs-12-tab-0"><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"UTF-8"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> http-equiv</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"X-UA-Compatible"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"IE=edge"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1.0"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">>Hash generator&#x3C;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./style.css"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"header-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"gradient-font"</span><span style="color:#E6EDF3">>Hash Generator&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        Online tool to instantly generate the hash value of an input text</span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">h2</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"generated-hash-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">textarea</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"inputText"</span><span style="color:#E6EDF3">>Text example&#x3C;/</span><span style="color:#7EE787">textarea</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"calculated-hashes-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"calculated-hash-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"left"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-algo"</span><span style="color:#E6EDF3">>SHA-1&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-value"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"SHA1"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-button copy-button"</span><span style="color:#79C0FF"> title</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Copy"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"ci:copy"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"calculated-hash-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"left"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-algo"</span><span style="color:#E6EDF3">>SHA-256&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-value"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"SHA256"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-button copy-button"</span><span style="color:#79C0FF"> title</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Copy"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"ci:copy"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"calculated-hash-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"left"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-algo"</span><span style="color:#E6EDF3">>SHA-384&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-value"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"SHA384"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-button copy-button"</span><span style="color:#79C0FF"> title</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Copy"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"ci:copy"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"calculated-hash-container"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"left"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-algo"</span><span style="color:#E6EDF3">>SHA-512&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hash-code-value"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"SHA512"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon-button copy-button"</span><span style="color:#79C0FF"> title</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Copy"</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">iconify-icon</span><span style="color:#79C0FF"> icon</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"ci:copy"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"icon"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">iconify-icon</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">          &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"script.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span></span>
<span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-12-panel-1" aria-labelledby="code-tabs-12-tab-1" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">@import</span><span style="color:#79C0FF"> url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::before</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#7EE787">*</span><span style="color:#79C0FF">::after</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  box-sizing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">border-box</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">:root</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FFA657">  --primary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#c3e3ee</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --secondary-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#26688b</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --white-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#fff</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --text-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#424242</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --border-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#c3e3ee73</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FFA657">  --hover-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">#ddd</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">body</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-family</span><span style="color:#E6EDF3">: </span><span style="color:#A5D6FF">"Poppins"</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">sans-serif</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">vh</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-image</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">url</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"background.jpg"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  background-position</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">cover</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  backdrop-filter</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">blur</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  max-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">950</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">2</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--border-color</span><span style="color:#E6EDF3">) </span><span style="color:#79C0FF">solid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  box-shadow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 7</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 0</span><span style="color:#79C0FF"> rgba</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">0.1</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">50</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.header-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-bottom</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h1</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">40</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">400</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#7EE787">  h2</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">17</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">textarea</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">%</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  min-height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">150</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">18</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  outline</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">none</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EE787">textarea</span><span style="color:#79C0FF">:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--hover-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.calculated-hashes-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">grid</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  grid-template-columns</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">fr</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  row-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  margin-top</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.calculated-hashes-container</span><span style="color:#79C0FF"> .calculated-hash-container</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--primary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  padding</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">8</span><span style="color:#FF7B72">px</span><span style="color:#79C0FF"> 16</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">space-between</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.calculated-hash-container</span><span style="color:#79C0FF"> .left</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  column-gap</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">10</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.calculated-hash-container</span><span style="color:#79C0FF"> .left</span><span style="color:#79C0FF"> .hash-code-algo</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#79C0FF">  flex-shrink</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">85</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-align</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">5</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.calculated-hash-container</span><span style="color:#79C0FF"> .left</span><span style="color:#79C0FF"> .hash-code-value</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  overflow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">hidden</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  text-overflow</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">ellipsis</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  letter-spacing</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">14</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  white-space</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">nowrap</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  all</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">initial</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">20</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  border-radius</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  display</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">flex</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  align-items</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  justify-content</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">center</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  cursor</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">pointer</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  transition</span><span style="color:#E6EDF3">: background-color </span><span style="color:#79C0FF">1</span><span style="color:#FF7B72">s</span><span style="color:#79C0FF"> ease</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">@media</span><span style="color:#FF7B72"> only</span><span style="color:#79C0FF"> screen</span><span style="color:#FF7B72"> and</span><span style="color:#E6EDF3"> (</span><span style="color:#79C0FF">min-width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">576</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">  .icon-button</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">30</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon-button:hover</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--secondary-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">25</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--text-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79C0FF">.icon-button:hover</span><span style="color:#79C0FF"> .icon</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">  color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">var</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">--white-color</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-12-panel-2" aria-labelledby="code-tabs-12-tab-2" hidden><pre class="shiki github-dark-default" tabindex="0"><code><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> SHA1</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"SHA1"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> SHA256</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"SHA256"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> SHA384</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"SHA384"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> SHA512</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"SHA512"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> inputText</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">getElementById</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"inputText"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> copyButtons</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">querySelectorAll</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".copy-button"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">handleKeyPress</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#E6EDF3">document.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"keyup"</span><span style="color:#E6EDF3">, handleKeyPress);</span></span>
<span class="line"><span style="color:#E6EDF3">copyButtons.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">copyButton</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span></span>
<span class="line"><span style="color:#E6EDF3">  copyButton.</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"click"</span><span style="color:#E6EDF3">, (</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> copyHashCodeToClipboard</span><span style="color:#E6EDF3">(event))</span></span>
<span class="line"><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> handleKeyPress</span><span style="color:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#FF7B72">  if</span><span style="color:#E6EDF3"> (inputText.value </span><span style="color:#FF7B72">==</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#79C0FF">    SHA1</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    SHA256</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    SHA384</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#79C0FF">    SHA512</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> ""</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#FF7B72">    return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  encode</span><span style="color:#E6EDF3">(inputText.value, </span><span style="color:#A5D6FF">"SHA-1"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">then</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">hash</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    SHA1</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> hash;</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  encode</span><span style="color:#E6EDF3">(inputText.value, </span><span style="color:#A5D6FF">"SHA-256"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">then</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">hash</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    SHA256</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> hash;</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  encode</span><span style="color:#E6EDF3">(inputText.value, </span><span style="color:#A5D6FF">"SHA-384"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">then</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">hash</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    SHA384</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> hash;</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF">  encode</span><span style="color:#E6EDF3">(inputText.value, </span><span style="color:#A5D6FF">"SHA-512"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">then</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">hash</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#79C0FF">    SHA512</span><span style="color:#E6EDF3">.innerHTML </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> hash;</span></span>
<span class="line"><span style="color:#E6EDF3">  });</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> encode</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">text</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">algo</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> encoder</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> TextEncoder</span><span style="color:#E6EDF3">();</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> data</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> encoder.</span><span style="color:#D2A8FF">encode</span><span style="color:#E6EDF3">(text);</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> hashBuffer</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#E6EDF3"> crypto.subtle.</span><span style="color:#D2A8FF">digest</span><span style="color:#E6EDF3">(algo, data);</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> hashArray</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> Array.</span><span style="color:#D2A8FF">from</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Uint8Array</span><span style="color:#E6EDF3">(hashBuffer));</span></span>
<span class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> hashHex</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> hashArray</span></span>
<span class="line"><span style="color:#E6EDF3">    .</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">byte</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> byte.</span><span style="color:#D2A8FF">toString</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">padStart</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">"0"</span><span style="color:#E6EDF3">))</span></span>
<span class="line"><span style="color:#E6EDF3">    .</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">""</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> hashHex;</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> copyHashCodeToClipboard</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">event</span><span style="color:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#FF7B72">  try</span><span style="color:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">navigator?.clipboard?.writeText) {</span></span>
<span class="line"><span style="color:#FF7B72">      return</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> hashCodeElement</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> event.target.</span><span style="color:#D2A8FF">closest</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".calculated-hash-container"</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">".hash-code-value"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">    await</span><span style="color:#E6EDF3"> navigator.clipboard.</span><span style="color:#D2A8FF">writeText</span><span style="color:#E6EDF3">(hashCodeElement.textContent);</span></span>
<span class="line"><span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> hashCodeValue</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> hashCodeElement.textContent;</span></span>
<span class="line"><span style="color:#E6EDF3">    hashCodeElement.textContent </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'Copied!'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"><span style="color:#D2A8FF">    setTimeout</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> hashCodeElement.textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> hashCodeValue, </span><span style="color:#A5D6FF">"1000"</span><span style="color:#E6EDF3">);</span></span>
<span class="line"><span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (err) {</span></span>
<span class="line"><span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">error</span><span style="color:#E6EDF3">(err);</span></span>
<span class="line"><span style="color:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#E6EDF3">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/hash-generator/background.jpg" /><p>  <a href="/assets/blog/hash-generator/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="ready-to-build-your-portfolio">🚀 Ready to Build Your Portfolio?</h2>
<p>You now have 12 practical web projects to level up your frontend skills—from beginner-friendly calculators to expert-level weather apps. Each project is designed to:</p>
<p>✅ Teach real-world skills (APIs, DOM manipulation, algorithms)<br>✅ Boost your portfolio with interactive, deployable apps<br>✅ Prepare you for interviews with common technical challenges   </p>
`,headings:[{id:`todo-list-app`,text:`Todo List App`},{id:`music-player`,text:`Music Player`},{id:`weather-app`,text:`Weather App`},{id:`qr-code-generator`,text:`QR Code Generator`},{id:`calculator`,text:`Calculator`},{id:`bmi-calculator`,text:`BMI Calculator`},{id:`countdown-timer`,text:`Countdown Timer`},{id:`password-generator`,text:`Password Generator`},{id:`quiz-app`,text:`Quiz App`},{id:`tic-tac-toe-game`,text:`Tic Tac Toe Game`},{id:`typing-speed-test`,text:`Typing Speed Test`},{id:`hash-generator`,text:`Hash Generator`},{id:`ready-to-build-your-portfolio`,text:`🚀 Ready to Build Your Portfolio?`}],parents:[],related:[]}})})}));