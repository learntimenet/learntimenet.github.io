import{_ as e,t,v as n,y as r}from"./LoaderHider-5509ZxPq.js";import{t as i}from"./BlogArticlePage-J0kuxtgd.js";var a=r(),o=n(),s=e();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`12 Practical Web Projects to Master HTML, CSS & JavaScript`,description:`Build & deploy 12 real-world web apps: Todo List, Weather App, Music Player, QR Generator, and more. Perfect for portfolios with complete source code!`,date:`2025-04-16`,urlPath:`/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/`,html:`<p><strong>Tired of tutorial hell?</strong> This is where your <em>real</em> frontend journey begins.</p>
<p>Whether you&#39;re:<br>✋ <strong>A total beginner</strong> looking to build your first real projects<br>💼 <strong>A job seeker</strong> needing portfolio pieces that impress employers<br>📈 <strong>An aspiring freelancer</strong> wanting practical, client-ready skills</p>
<p>These <strong>12 carefully crafted projects</strong> will give you the hands-on experience most courses only <em>talk</em> about. Each one:</p>
<p>✅ <strong>Solves real problems</strong> (no &quot;foo/bar&quot; examples)<br>✅ <strong>Grows with your skills</strong> (from basic DOM to complex APIs)<br>✅ <strong>Looks portfolio-ready</strong> (modern UI, clean code)<br>✅ <strong>Teaches professional workflows</strong> (debugging, optimization, deployment)</p>
<p>All projects use <strong>vanilla JavaScript</strong> (no frameworks) with clean code.</p>
<h2 id="todo-list-app">Todo List App</h2>
<p>A dynamic task manager with add, edit, delete, and prioritization features. Practice CRUD operations and localStorage for data persistence while mastering DOM manipulation.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-1-tab-0" aria-controls="code-tabs-1-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-1-tab-1" aria-controls="code-tabs-1-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-1-tab-2" aria-controls="code-tabs-1-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-1-panel-0" aria-labelledby="code-tabs-1-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>TODO LIST&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span></span>
<span class="line"><span style="color:#0550AE">      rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span></span>
<span class="line"><span style="color:#0550AE">      href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"</span></span>
<span class="line"><span style="color:#1F2328">    /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>Todo List&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"input-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"todo-input"</span><span style="color:#0550AE"> placeholder</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Add a new task..."</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"add-button"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">i</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"fa fa-plus-circle"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">i</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"filters"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"filter"</span><span style="color:#0550AE"> data-filter</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"completed"</span><span style="color:#1F2328">>Complete&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"filter"</span><span style="color:#0550AE"> data-filter</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"pending"</span><span style="color:#1F2328">>Incomplete&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"delete-all"</span><span style="color:#1F2328">>Delete All&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"todos-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">ul</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"todos"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">ul</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">img</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"empty-image"</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./empty.svg"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-1-panel-1" aria-labelledby="code-tabs-1-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">./background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">auto</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> #e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">36</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.input-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">25</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo-input</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  flex</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> #e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-right</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo-input::placeholder</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#bfbfbf</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.add-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">35</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.empty-image</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">55</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> auto</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">block</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  list-style</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#463c7b</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> #e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">all</span><span style="color:#0550AE"> 0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo:first-child</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo:last-child</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo</span><span style="color:#116329"> label</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">fit-content</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo</span><span style="color:#116329"> span</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  padding-left</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">relative</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">span</span><span style="color:#0550AE">::before</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  content</span><span style="color:#1F2328">: </span><span style="color:#0A3069">""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">absolute</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-left</span><span style="color:#1F2328">: </span><span style="color:#0550AE">-30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> #e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#1F2328">[</span><span style="color:#0550AE">type</span><span style="color:#CF222E">=</span><span style="color:#0A3069">"checkbox"</span><span style="color:#1F2328">] {</span></span>
<span class="line"><span style="color:#0550AE">  visibility</span><span style="color:#1F2328">: </span><span style="color:#0550AE">hidden</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#0550AE">:checked</span><span style="color:#CF222E"> +</span><span style="color:#116329"> span</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-decoration</span><span style="color:#1F2328">: </span><span style="color:#0550AE">line-through</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo:hover</span><span style="color:#116329"> input</span><span style="color:#0550AE">:checked</span><span style="color:#CF222E"> +</span><span style="color:#116329"> span</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#0550AE">:checked</span><span style="color:#CF222E"> +</span><span style="color:#116329"> span</span><span style="color:#0550AE">::before</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">./check.svg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">50</span><span style="color:#CF222E">%</span><span style="color:#0550AE"> 50</span><span style="color:#CF222E">%</span><span style="color:#0550AE"> no-repeat</span><span style="color:#0550AE"> #09bb21</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#09bb21</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo:hover</span><span style="color:#116329"> span</span><span style="color:#0550AE">::before</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todo</span><span style="color:#0550AE"> .delete-btn</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">24</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todos-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">300</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  overflow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">overlay</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todos-container::-webkit-scrollbar-track</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">rgb</span><span style="color:#1F2328">(</span><span style="color:#0550AE">247</span><span style="color:#1F2328">, </span><span style="color:#0550AE">247</span><span style="color:#1F2328">, </span><span style="color:#0550AE">247</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todos-container::-webkit-scrollbar</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todos-container:hover::-webkit-scrollbar</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">7</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.todos-container::-webkit-scrollbar-thumb</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#d5d5d5</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.filters</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">25</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.filter</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> #e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">all</span><span style="color:#0550AE"> 0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.filter.active</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">.filter:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.delete-all</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">7</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">all</span><span style="color:#0550AE"> 0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.delete-all:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#e6b7eca1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-1-panel-2" aria-labelledby="code-tabs-1-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> input</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"input"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> addButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".add-button"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> todosHtml</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".todos"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> emptyImage</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".empty-image"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> todosJson </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> JSON</span><span style="color:#1F2328">.</span><span style="color:#8250DF">parse</span><span style="color:#1F2328">(localStorage.</span><span style="color:#8250DF">getItem</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"todos"</span><span style="color:#1F2328">)) </span><span style="color:#CF222E">||</span><span style="color:#1F2328"> [];</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> deleteAllButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".delete-all"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> filters</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelectorAll</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".filter"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> filter </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">showTodos</span><span style="color:#1F2328">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> getTodoHtml</span><span style="color:#1F2328">(</span><span style="color:#953800">todo</span><span style="color:#1F2328">, </span><span style="color:#953800">index</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (filter </span><span style="color:#CF222E">&#x26;&#x26;</span><span style="color:#1F2328"> filter </span><span style="color:#CF222E">!=</span><span style="color:#1F2328"> todo.status) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> checked </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> todo.status </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "completed"</span><span style="color:#CF222E"> ?</span><span style="color:#0A3069"> "checked"</span><span style="color:#CF222E"> :</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#6E7781"> /* html */</span><span style="color:#0A3069"> \`</span></span>
<span class="line"><span style="color:#0A3069">    &#x3C;li class="todo"></span></span>
<span class="line"><span style="color:#0A3069">      &#x3C;label for="\${</span><span style="color:#1F2328">index</span><span style="color:#0A3069">}"></span></span>
<span class="line"><span style="color:#0A3069">        &#x3C;input id="\${</span><span style="color:#1F2328">index</span><span style="color:#0A3069">}" onclick="updateStatus(this)" type="checkbox" \${</span><span style="color:#1F2328">checked</span><span style="color:#0A3069">}></span></span>
<span class="line"><span style="color:#0A3069">        &#x3C;span class="\${</span><span style="color:#1F2328">checked</span><span style="color:#0A3069">}">\${</span><span style="color:#1F2328">todo</span><span style="color:#0A3069">.</span><span style="color:#1F2328">name</span><span style="color:#0A3069">}&#x3C;/span></span></span>
<span class="line"><span style="color:#0A3069">      &#x3C;/label></span></span>
<span class="line"><span style="color:#0A3069">      &#x3C;button class="delete-btn" data-index="\${</span><span style="color:#1F2328">index</span><span style="color:#0A3069">}" onclick="remove(this)">&#x3C;i class="fa fa-times">&#x3C;/i>&#x3C;/button></span></span>
<span class="line"><span style="color:#0A3069">    &#x3C;/li></span></span>
<span class="line"><span style="color:#0A3069">  \`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> showTodos</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (todosJson.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> ==</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    todosHtml.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    emptyImage.style.display </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "block"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    todosHtml.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> todosJson.</span><span style="color:#8250DF">map</span><span style="color:#1F2328">(getTodoHtml).</span><span style="color:#8250DF">join</span><span style="color:#1F2328">(</span><span style="color:#0A3069">""</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    emptyImage.style.display </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "none"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> addTodo</span><span style="color:#1F2328">(</span><span style="color:#953800">todo</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  input.value </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  todosJson.</span><span style="color:#8250DF">unshift</span><span style="color:#1F2328">({ name: todo, status: </span><span style="color:#0A3069">"pending"</span><span style="color:#1F2328"> });</span></span>
<span class="line"><span style="color:#1F2328">  localStorage.</span><span style="color:#8250DF">setItem</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"todos"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">JSON</span><span style="color:#1F2328">.</span><span style="color:#8250DF">stringify</span><span style="color:#1F2328">(todosJson));</span></span>
<span class="line"><span style="color:#8250DF">  showTodos</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">input.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"keyup"</span><span style="color:#1F2328">, (</span><span style="color:#953800">e</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> todo </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> input.value.</span><span style="color:#8250DF">trim</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">todo </span><span style="color:#CF222E">||</span><span style="color:#1F2328"> e.key </span><span style="color:#CF222E">!=</span><span style="color:#0A3069"> "Enter"</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#8250DF">  addTodo</span><span style="color:#1F2328">(todo);</span></span>
<span class="line"><span style="color:#1F2328">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">addButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, () </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> todo </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> input.value.</span><span style="color:#8250DF">trim</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">todo) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#8250DF">  addTodo</span><span style="color:#1F2328">(todo);</span></span>
<span class="line"><span style="color:#1F2328">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateStatus</span><span style="color:#1F2328">(</span><span style="color:#953800">todo</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> todoName </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> todo.parentElement.lastElementChild;</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (todo.checked) {</span></span>
<span class="line"><span style="color:#1F2328">    todoName.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"checked"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    todosJson[todo.id].status </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "completed"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    todoName.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"checked"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    todosJson[todo.id].status </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "pending"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">  localStorage.</span><span style="color:#8250DF">setItem</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"todos"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">JSON</span><span style="color:#1F2328">.</span><span style="color:#8250DF">stringify</span><span style="color:#1F2328">(todosJson));</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> remove</span><span style="color:#1F2328">(</span><span style="color:#953800">todo</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> index</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> todo.dataset.index;</span></span>
<span class="line"><span style="color:#1F2328">  todosJson.</span><span style="color:#8250DF">splice</span><span style="color:#1F2328">(index, </span><span style="color:#0550AE">1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#8250DF">  showTodos</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  localStorage.</span><span style="color:#8250DF">setItem</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"todos"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">JSON</span><span style="color:#1F2328">.</span><span style="color:#8250DF">stringify</span><span style="color:#1F2328">(todosJson));</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">filters.</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">(</span><span style="color:#CF222E">function</span><span style="color:#1F2328"> (</span><span style="color:#953800">el</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  el.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, (</span><span style="color:#953800">e</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (el.classList.</span><span style="color:#8250DF">contains</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"active"</span><span style="color:#1F2328">)) {</span></span>
<span class="line"><span style="color:#1F2328">      el.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"active"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      filter </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">      filters.</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">((</span><span style="color:#953800">tag</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> tag.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"active"</span><span style="color:#1F2328">));</span></span>
<span class="line"><span style="color:#1F2328">      el.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"active"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      filter </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> e.target.dataset.filter;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#8250DF">    showTodos</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"><span style="color:#1F2328">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">deleteAllButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, () </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">  todosJson </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> [];</span></span>
<span class="line"><span style="color:#1F2328">  localStorage.</span><span style="color:#8250DF">setItem</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"todos"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">JSON</span><span style="color:#1F2328">.</span><span style="color:#8250DF">stringify</span><span style="color:#1F2328">(todosJson));</span></span>
<span class="line"><span style="color:#8250DF">  showTodos</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">});</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary><div class="asset">
  <img src="/assets/blog/todo-list/empty.svg" /><p><a href="/assets/blog/todo-list/empty.svg" title="download">empty.svg</a></p>
</div><div class="asset">
  <img src="/assets/blog/todo-list/check.svg" /><p><a href="/assets/blog/todo-list/check.svg" title="download">check.svg</a></p>
</div><div class="asset">
  <img src="/assets/blog/todo-list/background.jpg" /><p><a href="/assets/blog/todo-list/background.jpg" title="download">background.jpg</a></p>
</div></details><h2 id="music-player">Music Player</h2>
<p>A sleek audio player with playlist management. Dive into the Web Audio API and media controls.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-2-tab-0" aria-controls="code-tabs-2-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-2-tab-1" aria-controls="code-tabs-2-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-2-tab-2" aria-controls="code-tabs-2-panel-2" aria-selected="false" tabindex="-1">script.js</button><button type="button" role="tab" id="code-tabs-2-tab-3" aria-controls="code-tabs-2-panel-3" aria-selected="false" tabindex="-1">songs.json</button></div><div role="tabpanel" id="code-tabs-2-panel-0" aria-labelledby="code-tabs-2-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Music player&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"player"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"thumbnail"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">img</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">""</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"thumb"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"details"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">h3</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"title"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">h3</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"artist"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">audio</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"song"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">source</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">""</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"audio/mp3"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#82071E;font-style:italic">source</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">audio</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"time"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"start"</span><span style="color:#1F2328">>00:00&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"end"</span><span style="color:#1F2328">>00:00&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"range"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"progress-bar"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"progress"</span><span style="color:#0550AE"> value</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"0"</span><span style="color:#0550AE"> max</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"0"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"action"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"prev-play"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"iconoir:skip-prev-solid"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"play"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"play"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"iconoir:play-solid"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-play"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"iconoir:pause-solid"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-pause hidden"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"next-play"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"iconoir:skip-next-solid"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"module"</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-2-panel-1" aria-labelledby="code-tabs-2-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#0170fe</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#11d2d9</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: Poppins, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"background.jpg"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.player</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  max-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">350</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  box-shadow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#0550AE"> 8</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 32</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> rgba</span><span style="color:#1F2328">(</span><span style="color:#0550AE">31</span><span style="color:#1F2328">, </span><span style="color:#0550AE">38</span><span style="color:#1F2328">, </span><span style="color:#0550AE">135</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0.37</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">img</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">150</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">150</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.thumbnail</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">linear-gradient</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0550AE">    120</span><span style="color:#CF222E">deg</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">160</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">160</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">auto</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">img</span><span style="color:#0550AE">.play</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  animation</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">s</span><span style="color:#1F2328"> rotate </span><span style="color:#0550AE">linear</span><span style="color:#0550AE"> infinite</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@keyframes</span><span style="color:#953800"> rotate</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  0%</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    transform</span><span style="color:#1F2328">: </span><span style="color:#0550AE">rotate</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#CF222E">deg</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#0550AE">  100%</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    transform</span><span style="color:#1F2328">: </span><span style="color:#0550AE">rotate</span><span style="color:#1F2328">(</span><span style="color:#0550AE">360</span><span style="color:#CF222E">deg</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.details</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.details</span><span style="color:#116329"> span</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.time</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.progress-bar</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  appearance</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">6</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.progress-bar::-webkit-slider-thumb</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  appearance</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">linear-gradient</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0550AE">    120</span><span style="color:#CF222E">deg</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease-in-out</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-evenly</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#0550AE">.prev-play:hover</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#0550AE">.next-play:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#116329"> iconify-icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#0550AE">.play</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">linear-gradient</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0550AE">    120</span><span style="color:#CF222E">deg</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#0550AE">.prev-play</span><span style="color:#116329"> iconify-icon</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">.action</span><span style="color:#116329"> button</span><span style="color:#0550AE">.next-play</span><span style="color:#116329"> iconify-icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.hidden</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-2-panel-2" aria-labelledby="code-tabs-2-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> songs</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#8250DF"> fetch</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"songs.json"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">res</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> res.</span><span style="color:#8250DF">json</span><span style="color:#1F2328">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> playBtn</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".icon-play"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> pauseBtn</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".icon-pause"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> song</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#song"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> title</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#title"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> artist</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#artist"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> thumb</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#thumb"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> progress</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#progress"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> start</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#start"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> end</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#end"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> playButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".play"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> prevPlayButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".prev-play"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> nextPlayButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".next-play"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">playButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, playPause);</span></span>
<span class="line"><span style="color:#1F2328">prevPlayButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, () </span><span style="color:#CF222E">=></span><span style="color:#8250DF"> changeSong</span><span style="color:#1F2328">(</span><span style="color:#CF222E">-</span><span style="color:#0550AE">1</span><span style="color:#1F2328">));</span></span>
<span class="line"><span style="color:#1F2328">nextPlayButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, () </span><span style="color:#CF222E">=></span><span style="color:#8250DF"> changeSong</span><span style="color:#1F2328">(</span><span style="color:#0550AE">1</span><span style="color:#1F2328">));</span></span>
<span class="line"><span style="color:#1F2328">progress.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"change"</span><span style="color:#1F2328">, updateSongProgress);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> index </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> interval;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> songProgressTrackerInterval;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">setSongDetails</span><span style="color:#1F2328">(index);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> setSongDetails</span><span style="color:#1F2328">(</span><span style="color:#953800">songIndex</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  song.src </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> songs[songIndex].link;</span></span>
<span class="line"><span style="color:#1F2328">  title.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> songs[songIndex].name;</span></span>
<span class="line"><span style="color:#1F2328">  artist.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> songs[songIndex].artists;</span></span>
<span class="line"><span style="color:#1F2328">  thumb.src </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> songs[songIndex].image;</span></span>
<span class="line"><span style="color:#1F2328">  start.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "00:00"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  end.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "00:00"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  clearInterval</span><span style="color:#1F2328">(interval);</span></span>
<span class="line"><span style="color:#1F2328">  song.onloadedmetadata </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> loadMetadata;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> loadMetadata</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  progress.max </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> song.duration;</span></span>
<span class="line"><span style="color:#1F2328">  progress.value </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> song.currentTime;</span></span>
<span class="line"><span style="color:#8250DF">  updateSongTimeDisplay</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  interval </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> setInterval</span><span style="color:#1F2328">(updateSongTimeDisplay, </span><span style="color:#0550AE">1000</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateSongTimeDisplay</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> min </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(song.duration </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> sec </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(song.duration </span><span style="color:#CF222E">%</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> curMin </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(song.currentTime </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> curSec </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(song.currentTime </span><span style="color:#CF222E">%</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (sec </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 10</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    sec </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> sec;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (curSec </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 10</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    curSec </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> curSec;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (min </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 10</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    min </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> min;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (curMin </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 10</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    curMin </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> curMin;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">  end.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> min </span><span style="color:#CF222E">+</span><span style="color:#0A3069"> ":"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> sec;</span></span>
<span class="line"><span style="color:#1F2328">  start.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> curMin </span><span style="color:#CF222E">+</span><span style="color:#0A3069"> ":"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> curSec;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> changeSong</span><span style="color:#1F2328">(</span><span style="color:#953800">increment</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  index </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> (index </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> increment </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> songs.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">) </span><span style="color:#CF222E">%</span><span style="color:#1F2328"> songs.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  setSongDetails</span><span style="color:#1F2328">(index);</span></span>
<span class="line"><span style="color:#1F2328">  song.</span><span style="color:#8250DF">play</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> playPause</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">pauseBtn.classList.</span><span style="color:#8250DF">contains</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">)) {</span></span>
<span class="line"><span style="color:#1F2328">    song.</span><span style="color:#8250DF">pause</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">    pauseBtn.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    playBtn.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    thumb.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"play"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">  song.</span><span style="color:#8250DF">play</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#8250DF">  startSongProgressTracker</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  playBtn.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  pauseBtn.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  thumb.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"play"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateSongProgress</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#8250DF">  clearInterval</span><span style="color:#1F2328">(songProgressTrackerInterval);</span></span>
<span class="line"><span style="color:#1F2328">  song.currentTime </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> progress.value;</span></span>
<span class="line"><span style="color:#8250DF">  startSongProgressTracker</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> startSongProgressTracker</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#8250DF">  clearInterval</span><span style="color:#1F2328">(songProgressTrackerInterval);</span></span>
<span class="line"><span style="color:#1F2328">  songProgressTrackerInterval </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> setInterval</span><span style="color:#1F2328">(() </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    progress.value </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> song.currentTime;</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (song.currentTime </span><span style="color:#CF222E">==</span><span style="color:#1F2328"> song.duration) {</span></span>
<span class="line"><span style="color:#8250DF">      changeSong</span><span style="color:#1F2328">(</span><span style="color:#0550AE">1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">  }, </span><span style="color:#0550AE">1000</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-2-panel-3" aria-labelledby="code-tabs-2-tab-3" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">[</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "name"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Happier"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "link"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/zp1xfir101y4sc3/happier.mp3?raw=1"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "artists"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Marshmello"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "image"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/xxmwcz14hkn7iwl/happier.png?raw=1"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "name"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Stay"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "link"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/umam9olakop001d/stay.mp3?raw=1"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "artists"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Justin Bieber"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "image"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/kierj5lzst1yx9n/stay.jpg?raw=1"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "name"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Perfect"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "link"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "artists"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Ed Sheeran"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "image"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/crlthbozdznb13g/perfect.jpeg?raw=1"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "name"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"7 Rings"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "link"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "artists"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Ariana Grande"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "image"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/gobvfxj4r0t053v/7-rings.jpg?raw=1"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "name"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Girls Like You"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "link"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "artists"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Maroon 5"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "image"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"https://www.dropbox.com/s/ouq5zzgbqsk9zx0/girls-like-you.png?raw=1"</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">]</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/music-player/background.jpg" /><p><a href="/assets/blog/music-player/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="weather-app">Weather App</h2>
<p>Get real-time forecasts using geolocation. Connect to weather APIs.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-3-tab-0" aria-controls="code-tabs-3-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-3-tab-1" aria-controls="code-tabs-3-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-3-tab-2" aria-controls="code-tabs-3-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-3-panel-0" aria-labelledby="code-tabs-3-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Weather App&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span></span>
<span class="line"><span style="color:#0550AE">      rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span></span>
<span class="line"><span style="color:#0550AE">      href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"</span></span>
<span class="line"><span style="color:#1F2328">    /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"input-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">input</span></span>
<span class="line"><span style="color:#0550AE">          class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"search-input"</span></span>
<span class="line"><span style="color:#0550AE">          id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"searchInput"</span></span>
<span class="line"><span style="color:#0550AE">          placeholder</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Search..."</span></span>
<span class="line"><span style="color:#1F2328">        /></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"search-button"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"searchButton"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">i</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"fa fa-search"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">i</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"weather-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cityWeather"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"city-weather hidden"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">img</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#0550AE"> alt</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">h1</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"temperature"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"temperature"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">h2</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"city"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"city"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"details"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"detail"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">img</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./images/icons/humidity.png"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"description"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">                &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"humidity"</span><span style="color:#1F2328">>%&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">                &#x3C;</span><span style="color:#116329">p</span><span style="color:#1F2328">>Humidity&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"detail"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">img</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./images/icons/wind.png"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"description"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">                &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"wind"</span><span style="color:#1F2328">>km/h&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">                &#x3C;</span><span style="color:#116329">p</span><span style="color:#1F2328">>Wind&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"noCityFound"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"no-city-found hidden"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">img</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"images/location-not-found.png"</span><span style="color:#0550AE"> alt</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#1F2328">>Oops! Location not found!&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-3-panel-1" aria-labelledby="code-tabs-3-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#4c77b6</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">images/background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.city-weather</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">.no-city-found</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  overflow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">hidden</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: height </span><span style="color:#0550AE">0.7</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.no-city-found</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">300</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.city-weather</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">410</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.hidden</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.input-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.search-input</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  flex</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-right</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.search-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">24</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.no-city-found</span><span style="color:#116329"> img</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.no-city-found</span><span style="color:#116329"> p</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">24</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.city-weather</span><span style="color:#0550AE"> .icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">170</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.city-weather</span><span style="color:#0550AE"> .temperature</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">75</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">500</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.city-weather</span><span style="color:#0550AE"> .city</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.city-weather</span><span style="color:#0550AE"> .details</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">48</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.details</span><span style="color:#0550AE"> .detail</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  column-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">left</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.detail</span><span style="color:#116329"> img</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.detail</span><span style="color:#0550AE"> .value</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">24</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-3-panel-2" aria-labelledby="code-tabs-3-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> API_KEY</span><span style="color:#CF222E"> =</span></span>
<span class="line"><span style="color:#0A3069">  "REPLACE_IT_WITH_YOUR_API_KEY: https://api.openweathermap.org"</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> searchInput</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"searchInput"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> searchButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"searchButton"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> city</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"city"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> temperature</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"temperature"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> humidity</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"humidity"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> wind</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"wind"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> icon</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"icon"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> cityWeather</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"cityWeather"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> noCityFound</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"noCityFound"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">searchButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, updateWeatherData);</span></span>
<span class="line"><span style="color:#1F2328">searchInput.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0A3069">  "keydown"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  (</span><span style="color:#953800">event</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> event.key </span><span style="color:#CF222E">===</span><span style="color:#0A3069"> "Enter"</span><span style="color:#CF222E"> &#x26;&#x26;</span><span style="color:#8250DF"> updateWeatherData</span><span style="color:#1F2328">(),</span></span>
<span class="line"><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">async</span><span style="color:#CF222E"> function</span><span style="color:#8250DF"> updateWeatherData</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  try</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">searchInput.value.</span><span style="color:#8250DF">trim</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#8250DF">      alert</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"Please enter the city"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    const</span><span style="color:#0550AE"> weatherData</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#8250DF"> getWeatherData</span><span style="color:#1F2328">(searchInput.value);</span></span>
<span class="line"><span style="color:#1F2328">    noCityFound.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    cityWeather.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    city.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> weatherData.city;</span></span>
<span class="line"><span style="color:#1F2328">    temperature.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> weatherData.temperature </span><span style="color:#CF222E">+</span><span style="color:#0A3069"> "°C"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    humidity.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> weatherData.humidity </span><span style="color:#CF222E">+</span><span style="color:#0A3069"> "%"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    wind.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> weatherData.wind </span><span style="color:#CF222E">+</span><span style="color:#0A3069"> " km/h"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    icon.src </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> weatherData.icon;</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">catch</span><span style="color:#1F2328"> (error) {</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (error?.code </span><span style="color:#CF222E">===</span><span style="color:#0A3069"> "404"</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">      cityWeather.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      noCityFound.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      console.</span><span style="color:#8250DF">error</span><span style="color:#1F2328">(error.message);</span></span>
<span class="line"><span style="color:#1F2328">    } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#8250DF">      alert</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"Unknown error: "</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> error);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> getIconUrl</span><span style="color:#1F2328">(</span><span style="color:#953800">icon</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#0A3069"> \`./images/icons/\${</span><span style="color:#1F2328">icon</span><span style="color:#0A3069">.</span><span style="color:#8250DF">toLowerCase</span><span style="color:#0A3069">()</span><span style="color:#0A3069">}.png\`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">async</span><span style="color:#CF222E"> function</span><span style="color:#8250DF"> getWeatherData</span><span style="color:#1F2328">(</span><span style="color:#953800">city</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> apiUrl</span><span style="color:#CF222E"> =</span><span style="color:#0A3069"> \`https://api.openweathermap.org/data/2.5/weather?q=\${</span><span style="color:#1F2328">city</span><span style="color:#0A3069">}&#x26;units=metric&#x26;appid=\${</span><span style="color:#0550AE">API_KEY</span><span style="color:#0A3069">}\`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> apiResponse</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#8250DF"> fetch</span><span style="color:#1F2328">(apiUrl);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> apiResponseBody</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#1F2328"> apiResponse.</span><span style="color:#8250DF">json</span><span style="color:#1F2328">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (apiResponseBody.cod </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "404"</span><span style="color:#CF222E"> ||</span><span style="color:#1F2328"> apiResponseBody.cod </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "400"</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">    throw</span><span style="color:#1F2328"> { code: </span><span style="color:#0A3069">"404"</span><span style="color:#1F2328">, message: </span><span style="color:#0A3069">"City not found"</span><span style="color:#1F2328"> };</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    city: apiResponseBody.name,</span></span>
<span class="line"><span style="color:#1F2328">    temperature: Math.</span><span style="color:#8250DF">round</span><span style="color:#1F2328">(apiResponseBody?.main?.temp),</span></span>
<span class="line"><span style="color:#1F2328">    humidity: apiResponseBody.main.humidity,</span></span>
<span class="line"><span style="color:#1F2328">    wind: Math.</span><span style="color:#8250DF">round</span><span style="color:#1F2328">(apiResponseBody.wind.speed),</span></span>
<span class="line"><span style="color:#1F2328">    icon: </span><span style="color:#8250DF">getIconUrl</span><span style="color:#1F2328">(apiResponseBody.weather[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">].main),</span></span>
<span class="line"><span style="color:#1F2328">  };</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/weather-app/background.jpg" /><p><a href="/assets/blog/weather-app/background.jpg" title="download">background.jpg</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/clear.png" /><p><a href="/assets/blog/weather-app/clear.png" title="download">clear.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/clouds.png" /><p><a href="/assets/blog/weather-app/clouds.png" title="download">clouds.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/humidity.png" /><p><a href="/assets/blog/weather-app/humidity.png" title="download">humidity.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/location-not-found.png" /><p><a href="/assets/blog/weather-app/location-not-found.png" title="download">location-not-found.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/mist.png" /><p><a href="/assets/blog/weather-app/mist.png" title="download">mist.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/rain.png" /><p><a href="/assets/blog/weather-app/rain.png" title="download">rain.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/snow.png" /><p><a href="/assets/blog/weather-app/snow.png" title="download">snow.png</a></p>
</div><div class="asset">
  <img src="/assets/blog/weather-app/wind.png" /><p><a href="/assets/blog/weather-app/wind.png" title="download">wind.png</a></p>
</div>
</details><h2 id="qr-code-generator">QR Code Generator</h2>
<p>Convert URLs/text to scannable QR codes. Integrate with third-party APIs.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-4-tab-0" aria-controls="code-tabs-4-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-4-tab-1" aria-controls="code-tabs-4-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-4-tab-2" aria-controls="code-tabs-4-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-4-panel-0" aria-labelledby="code-tabs-4-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>QR Code Generator&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"header-container mb-35"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>QR Code Generator&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          Online tool to generate QR Codes from texts, urls and much more.</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">input</span></span>
<span class="line"><span style="color:#0550AE">        type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"text"</span></span>
<span class="line"><span style="color:#0550AE">        class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"text-input mb-35"</span></span>
<span class="line"><span style="color:#0550AE">        placeholder</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Enter text or a link"</span></span>
<span class="line"><span style="color:#1F2328">      /></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"generate-button"</span><span style="color:#1F2328">>Generate QR Code&#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"qrcode-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"qrcode"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"download-button hidden"</span><span style="color:#1F2328">>Download QR Code&#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-4-panel-1" aria-labelledby="code-tabs-4-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#662d72</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eb4e9b</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f3f2f245</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --hover-1-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#783885</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --hover-2-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f15ea6</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#bb408c</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: Poppins, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.hidden</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--background-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">500</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.header-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.mb-35</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">35</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">36</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">22</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">white</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.3</span><span style="color:#CF222E">s</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.generate-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.generate-button:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--hover-1-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.download-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.download-button:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--hover-2-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.qrcode</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  overflow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">hidden</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: height </span><span style="color:#0550AE">0.35</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> linear</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.qrcode</span><span style="color:#116329"> img</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">white</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">250</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">250</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-4-panel-2" aria-labelledby="code-tabs-4-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> textInput</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".text-input"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> generateButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".generate-button"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> qrCodeContainer</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".qrcode-container"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> qrCodeElement</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".qrcode"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> downloadButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".download-button"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">generateButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, generateQRCode);</span></span>
<span class="line"><span style="color:#1F2328">textInput.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0A3069">  "keydown"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  (</span><span style="color:#953800">event</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> event.key </span><span style="color:#CF222E">===</span><span style="color:#0A3069"> "Enter"</span><span style="color:#CF222E"> &#x26;&#x26;</span><span style="color:#8250DF"> generateQRCode</span><span style="color:#1F2328">(),</span></span>
<span class="line"><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">downloadButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, download);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> generateQRCode</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> text</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> textInput.value.</span><span style="color:#8250DF">trim</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">text) {</span></span>
<span class="line"><span style="color:#8250DF">    alert</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"Please enter some text to generate a QR code."</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> firstGeneration</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> qrCodeElement.innerHTML </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  qrCodeElement.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  qrCodeElement.style.height </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">firstGeneration) {</span></span>
<span class="line"><span style="color:#1F2328">    qrCodeContainer.style.height </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "250px"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  new</span><span style="color:#8250DF"> QRCode</span><span style="color:#1F2328">(qrCodeElement, {</span></span>
<span class="line"><span style="color:#1F2328">    text: text,</span></span>
<span class="line"><span style="color:#1F2328">    width: </span><span style="color:#0550AE">250</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">    height: </span><span style="color:#0550AE">250</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  setTimeout</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">    () </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">      qrCodeElement.style.height </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "250px"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">      downloadButton.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      generateButton.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"mb-35"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      qrCodeContainer.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"mb-35"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    },</span></span>
<span class="line"><span style="color:#1F2328">    firstGeneration </span><span style="color:#CF222E">?</span><span style="color:#0550AE"> 0</span><span style="color:#CF222E"> :</span><span style="color:#0550AE"> 750</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> download</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> qrCodeImage</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".qrcode img"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> downloadLink</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">createElement</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"a"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  downloadLink.href </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> qrCodeImage.src;</span></span>
<span class="line"><span style="color:#1F2328">  downloadLink.download </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "qrcode.png"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  downloadLink.</span><span style="color:#8250DF">click</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/qrcode-generator/background.jpg" /><p><a href="/assets/blog/qrcode-generator/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="calculator">Calculator</h2>
<p>A fully functional calculator with keyboard support. Perfect for understanding mathematical operations and event handling in JavaScript.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-5-tab-0" aria-controls="code-tabs-5-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-5-tab-1" aria-controls="code-tabs-5-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-5-tab-2" aria-controls="code-tabs-5-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-5-panel-0" aria-labelledby="code-tabs-5-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Calculator&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>Calculator&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"display"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"expression"</span><span style="color:#1F2328">>0&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"result hidden"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"buttons"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>C&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>(&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>)&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>/&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>7&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>8&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>9&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>*&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>4&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>5&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>6&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>-&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>1&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>2&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>3&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>+&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>0&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button valuse"</span><span style="color:#1F2328">>00&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#1F2328">>.&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button equals"</span><span style="color:#1F2328">>=&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-5-panel-1" aria-labelledby="code-tabs-5-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#7552a0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#43377f</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#7552a0a0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: Poppins, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.hidden</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">300</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">768</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.display</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">200</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">25</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">end</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">end</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.buttons</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">grid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">repeat</span><span style="color:#1F2328">(</span><span style="color:#0550AE">4</span><span style="color:#1F2328">, </span><span style="color:#0550AE">1</span><span style="color:#CF222E">fr</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  grid-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.display</span><span style="color:#0550AE"> .expression</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">36</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.display</span><span style="color:#0550AE"> .result</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">46</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">500</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.display</span><span style="color:#0550AE"> .result::before</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  content</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"="</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding-right</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">45</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">45</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  user-select</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">all</span><span style="color:#0550AE"> 0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease-in</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">768</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">24</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.button:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">1</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">2</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">3</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">4</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">8</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">12</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">16</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">.button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">20</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:is</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">1</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">2</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">3</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">4</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">8</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">12</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">16</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">  .button:nth-child</span><span style="color:#1F2328">(</span><span style="color:#0550AE">20</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">)</span><span style="color:#0550AE">:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  opacity</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0.85</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-5-panel-2" aria-labelledby="code-tabs-5-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> displayContainer</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".display"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> displayExpression</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".display .expression"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> displayResult</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".display .result"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isResultHidden</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> () </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> displayResult.classList.</span><span style="color:#8250DF">contains</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isResultShown</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> () </span><span style="color:#CF222E">=></span><span style="color:#CF222E"> !</span><span style="color:#8250DF">isResultHidden</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> getResultValue</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> () </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#1F2328">  displayResult.innerText </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "Error"</span><span style="color:#CF222E"> ?</span><span style="color:#0A3069"> "0"</span><span style="color:#CF222E"> :</span><span style="color:#1F2328"> displayResult.innerText;</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isSymbol</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> (</span><span style="color:#953800">button</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#0A3069"> /</span><span style="color:#0550AE">[</span><span style="color:#116329;font-weight:bold">\\+</span><span style="color:#0550AE">\\-</span><span style="color:#116329;font-weight:bold">\\*\\/</span><span style="color:#0550AE">]</span><span style="color:#CF222E">$</span><span style="color:#0A3069">/</span><span style="color:#1F2328">.</span><span style="color:#8250DF">test</span><span style="color:#1F2328">(button.innerHTML);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">document</span></span>
<span class="line"><span style="color:#1F2328">  .</span><span style="color:#8250DF">querySelectorAll</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".button"</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">  .</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">((</span><span style="color:#953800">button</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#1F2328">    button.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, () </span><span style="color:#CF222E">=></span><span style="color:#8250DF"> handleButtonClick</span><span style="color:#1F2328">(button)),</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleButtonClick</span><span style="color:#1F2328">(</span><span style="color:#953800">button</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  switch</span><span style="color:#1F2328"> (button.innerHTML) {</span></span>
<span class="line"><span style="color:#CF222E">    case</span><span style="color:#0A3069"> "C"</span><span style="color:#1F2328">: {</span></span>
<span class="line"><span style="color:#1F2328">      displayExpression.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">      displayResult.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">      break</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    case</span><span style="color:#0A3069"> "="</span><span style="color:#1F2328">: {</span></span>
<span class="line"><span style="color:#CF222E">      try</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">        displayResult.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">        displayResult.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> eval</span><span style="color:#1F2328">(displayExpression.innerHTML);</span></span>
<span class="line"><span style="color:#1F2328">      } </span><span style="color:#CF222E">catch</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">        displayResult.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "Error"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"><span style="color:#CF222E">      break</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    default</span><span style="color:#1F2328">: {</span></span>
<span class="line"><span style="color:#CF222E">      if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isResultShown</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#1F2328">        displayExpression.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> isSymbol</span><span style="color:#1F2328">(button)</span></span>
<span class="line"><span style="color:#CF222E">          ?</span><span style="color:#8250DF"> getResultValue</span><span style="color:#1F2328">()</span></span>
<span class="line"><span style="color:#CF222E">          :</span><span style="color:#0A3069"> "0"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">        displayResult.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hidden"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"><span style="color:#CF222E">      if</span><span style="color:#1F2328"> (displayExpression.innerHTML </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "0"</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        displayExpression.innerHTML </span><span style="color:#CF222E">=</span></span>
<span class="line"><span style="color:#1F2328">          button.innerHTML </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "00"</span><span style="color:#CF222E"> ?</span><span style="color:#0A3069"> "0"</span><span style="color:#CF222E"> :</span><span style="color:#1F2328"> button.innerHTML;</span></span>
<span class="line"><span style="color:#1F2328">      } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">        displayExpression.innerHTML </span><span style="color:#CF222E">+=</span><span style="color:#1F2328"> button.innerHTML;</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/calculatrice/background.jpg" /><p><a href="/assets/blog/calculatrice/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="bmi-calculator">BMI Calculator</h2>
<p>A health tool that calculates Body Mass Index with visual feedback. Learn form validation and dynamic DOM updates.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-6-tab-0" aria-controls="code-tabs-6-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-6-tab-1" aria-controls="code-tabs-6-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-6-tab-2" aria-controls="code-tabs-6-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-6-panel-0" aria-labelledby="code-tabs-6-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>BMI Calculator&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"header-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>BMI Calculator&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h2</span><span style="color:#1F2328">>Calculate your Body Mass Index easily and accurately&#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">form</span><span style="color:#0550AE"> autocomplete</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"off"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"inputs-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"input-container height-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"height"</span><span style="color:#0550AE"> placeholder</span><span style="color:#1F2328">=</span><span style="color:#0A3069">" "</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"error"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">label</span><span style="color:#0550AE"> for</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"height"</span><span style="color:#1F2328">>Your height in cm&#x3C;/</span><span style="color:#116329">label</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"input-container weight-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"weight"</span><span style="color:#0550AE"> placeholder</span><span style="color:#1F2328">=</span><span style="color:#0A3069">" "</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"error"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">label</span><span style="color:#0550AE"> for</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"weight"</span><span style="color:#1F2328">>Your weight in kg&#x3C;/</span><span style="color:#116329">label</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">button</span><span style="color:#1F2328">>Calculate your BMI&#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">form</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-result"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-value"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-description"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container description-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">h2</span><span style="color:#1F2328">>Description&#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"description"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        Let's calculate the Body Mass Index (BMI) to assess the risks</span></span>
<span class="line"><span style="color:#1F2328">        associated with overweight based on the person's height and weight.</span></span>
<span class="line"><span style="color:#1F2328">        According to the World Health Organization (WHO), the formula is</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">b</span><span style="color:#1F2328">>BMI = W/H²&#x3C;/</span><span style="color:#116329">b</span><span style="color:#1F2328">>, where &#x3C;</span><span style="color:#116329">b</span><span style="color:#1F2328">>W&#x3C;/</span><span style="color:#116329">b</span><span style="color:#1F2328">> is the person's weight in kilograms</span></span>
<span class="line"><span style="color:#1F2328">        and &#x3C;</span><span style="color:#116329">b</span><span style="color:#1F2328">>H&#x3C;/</span><span style="color:#116329">b</span><span style="color:#1F2328">> is the height in meters</span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-ranges"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-container underweight"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range"</span><span style="color:#1F2328">>&#x3C;</span><span style="color:#82071E;font-style:italic">18,5&#x3C;/p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-label"</span><span style="color:#1F2328">>Underweight&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-container normal"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range"</span><span style="color:#1F2328">>18,5-25&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-label"</span><span style="color:#1F2328">>Normal&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-container overweight"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range"</span><span style="color:#1F2328">>25-30&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-label"</span><span style="color:#1F2328">>Overweight&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-container obesity"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range"</span><span style="color:#1F2328">>30-40&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-label"</span><span style="color:#1F2328">>Obese&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-container morbid-obesity"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range"</span><span style="color:#1F2328">>>40&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"bmi-range-label"</span><span style="color:#1F2328">>Extremely obesity&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-6-panel-1" aria-labelledby="code-tabs-6-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#b34083</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --primary-text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f0b23a</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ea96c7</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --hover-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#983979</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#d78fb980</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --error-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f94a4a</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: Poppins, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  max-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">700</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.header-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">45</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">inline-block</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">linear-gradient</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#CF222E">    to</span><span style="color:#0550AE"> right</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#0550AE">  -webkit-text-fill-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-clip</span><span style="color:#1F2328">: </span><span style="color:#0550AE">text</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  -webkit-background-clip</span><span style="color:#1F2328">: </span><span style="color:#0550AE">text</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">22</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">form</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  row-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.inputs-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  row-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.input-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">relative</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">label</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">500</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">absolute</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  left</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">all</span><span style="color:#0550AE"> 0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  pointer-events</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#0550AE">:focus</span><span style="color:#CF222E"> ~</span><span style="color:#116329"> label</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#0550AE">:not</span><span style="color:#1F2328">(:</span><span style="color:#116329">placeholder-shown</span><span style="color:#1F2328">) </span><span style="color:#CF222E">~</span><span style="color:#116329"> label</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">-16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">13</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.input-container.error</span><span style="color:#116329"> input</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--error-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--error-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  outline-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.input-container</span><span style="color:#0550AE"> .error</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--error-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease-in</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#0550AE">:hover</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#0550AE">:focus</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--hover-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-result</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: height </span><span style="color:#0550AE">0.2</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease-in</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-result</span><span style="color:#0550AE"> .bmi-value</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0550AE">.bmi-result</span><span style="color:#0550AE"> .bmi-description</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-result</span><span style="color:#0550AE"> .bmi-value</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">64</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-result</span><span style="color:#0550AE"> .bmi-description</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">500</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container.description-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.description</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">justify</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-ranges</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  column-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  row-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-wrap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">wrap</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-range-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#eee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">82</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-range</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">6</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.bmi-range-label</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">6</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.underweight</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#5bc8f3</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"><span style="color:#0550AE">.normal</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#9db63b</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"><span style="color:#0550AE">.overweight</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fac90e</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"><span style="color:#0550AE">.obesity</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f48a20</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"><span style="color:#0550AE">.morbid-obesity</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ff0000</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-6-panel-2" aria-labelledby="code-tabs-6-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> BMIRanges</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> [</span></span>
<span class="line"><span style="color:#1F2328">  { description: </span><span style="color:#0A3069">"Underweight"</span><span style="color:#1F2328">, color: </span><span style="color:#0A3069">"#5BC8F3"</span><span style="color:#1F2328">, range: [</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">18.5</span><span style="color:#1F2328">] },</span></span>
<span class="line"><span style="color:#1F2328">  { description: </span><span style="color:#0A3069">"Normal"</span><span style="color:#1F2328">, color: </span><span style="color:#0A3069">"#9DB63B"</span><span style="color:#1F2328">, range: [</span><span style="color:#0550AE">18.5</span><span style="color:#1F2328">, </span><span style="color:#0550AE">25</span><span style="color:#1F2328">] },</span></span>
<span class="line"><span style="color:#1F2328">  { description: </span><span style="color:#0A3069">"Overweight"</span><span style="color:#1F2328">, color: </span><span style="color:#0A3069">"#FAC90E"</span><span style="color:#1F2328">, range: [</span><span style="color:#0550AE">25</span><span style="color:#1F2328">, </span><span style="color:#0550AE">30</span><span style="color:#1F2328">] },</span></span>
<span class="line"><span style="color:#1F2328">  { description: </span><span style="color:#0A3069">"Obese"</span><span style="color:#1F2328">, color: </span><span style="color:#0A3069">"#F48A20"</span><span style="color:#1F2328">, range: [</span><span style="color:#0550AE">30</span><span style="color:#1F2328">, </span><span style="color:#0550AE">40</span><span style="color:#1F2328">] },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#1F2328">    description: </span><span style="color:#0A3069">"Extremely obesity"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">    color: </span><span style="color:#0A3069">"#FF0000"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">    range: [</span><span style="color:#0550AE">40</span><span style="color:#1F2328">, Number.MAX_VALUE],</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> form</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"form"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> heightInput</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#height"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> heightInputError</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#height + .error"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> weightInput</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#weight"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> weightInputError</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#weight + .error"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> bmiValue</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".bmi-value"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> bmiDescription</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".bmi-description"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> bmiResult</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".bmi-result"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">form.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"submit"</span><span style="color:#1F2328">, handleForm);</span></span>
<span class="line"><span style="color:#1F2328">heightInput.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"keyup"</span><span style="color:#1F2328">, validateInput);</span></span>
<span class="line"><span style="color:#1F2328">weightInput.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"keyup"</span><span style="color:#1F2328">, validateInput);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleForm</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  event.</span><span style="color:#8250DF">preventDefault</span><span style="color:#1F2328">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  resetErrors</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> containsErrors </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isNotNumber</span><span style="color:#1F2328">(heightInput)) {</span></span>
<span class="line"><span style="color:#1F2328">    containsErrors </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">    showError</span><span style="color:#1F2328">(heightInput);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isNotNumber</span><span style="color:#1F2328">(weightInput)) {</span></span>
<span class="line"><span style="color:#1F2328">    containsErrors </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">    showError</span><span style="color:#1F2328">(weightInput);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (containsErrors) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> height</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> parseInt</span><span style="color:#1F2328">(heightInput.value);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> weight</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> parseInt</span><span style="color:#1F2328">(weightInput.value);</span></span>
<span class="line"><span style="color:#8250DF">  showBmi</span><span style="color:#1F2328">(</span><span style="color:#8250DF">calculateBmi</span><span style="color:#1F2328">(weight, height));</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> validateInput</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (event.key </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> "Tab"</span><span style="color:#1F2328">) </span><span style="color:#CF222E">return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> input</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> event.target;</span></span>
<span class="line"><span style="color:#8250DF">  isNotNumber</span><span style="color:#1F2328">(input) </span><span style="color:#CF222E">?</span><span style="color:#8250DF"> showError</span><span style="color:#1F2328">(input) </span><span style="color:#CF222E">:</span><span style="color:#8250DF"> resetError</span><span style="color:#1F2328">(input);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isNumber</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> (</span><span style="color:#953800">input</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#0A3069"> /</span><span style="color:#CF222E">^</span><span style="color:#0550AE">[0-9]</span><span style="color:#CF222E">+$</span><span style="color:#0A3069">/</span><span style="color:#1F2328">.</span><span style="color:#8250DF">test</span><span style="color:#1F2328">(input.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isNotNumber</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> (</span><span style="color:#953800">input</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#CF222E"> !</span><span style="color:#8250DF">isNumber</span><span style="color:#1F2328">(input);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> showBmi</span><span style="color:#1F2328">(</span><span style="color:#953800">BMI</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> bmiRange</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> getBmiRange</span><span style="color:#1F2328">(</span><span style="color:#0550AE">BMI</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  bmiValue.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> BMI</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  bmiValue.style.color </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> bmiRange.color;</span></span>
<span class="line"><span style="color:#1F2328">  bmiDescription.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> bmiRange.description;</span></span>
<span class="line"><span style="color:#1F2328">  bmiDescription.style.color </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> bmiRange.color;</span></span>
<span class="line"><span style="color:#1F2328">  bmiResult.style.height </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "115px"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> calculateBmi</span><span style="color:#1F2328">(</span><span style="color:#953800">weight</span><span style="color:#1F2328">, </span><span style="color:#953800">height</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> (weight </span><span style="color:#CF222E">/</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">pow</span><span style="color:#1F2328">(height </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 100</span><span style="color:#1F2328">, </span><span style="color:#0550AE">2</span><span style="color:#1F2328">)).</span><span style="color:#8250DF">toFixed</span><span style="color:#1F2328">(</span><span style="color:#0550AE">1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> resetError</span><span style="color:#1F2328">(</span><span style="color:#953800">input</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  input.parentElement.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"error"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  input.nextElementSibling.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> showError</span><span style="color:#1F2328">(</span><span style="color:#953800">input</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  bmiValue.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  bmiDescription.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  bmiResult.style.height </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "0"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  input.parentElement.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"error"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  input.nextElementSibling.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "Value invalide"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> resetErrors</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  heightInput.parentElement.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"error"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  weightInput.parentElement.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"error"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  heightInputError.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  weightInputError.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> getBmiRange</span><span style="color:#1F2328">(</span><span style="color:#953800">BMI</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> BMIRanges.</span><span style="color:#8250DF">find</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">    (</span><span style="color:#953800">data</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#0550AE"> BMI</span><span style="color:#CF222E"> >=</span><span style="color:#1F2328"> data.range[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">] </span><span style="color:#CF222E">&#x26;&#x26;</span><span style="color:#0550AE"> BMI</span><span style="color:#CF222E"> &#x3C;</span><span style="color:#1F2328"> data.range[</span><span style="color:#0550AE">1</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/calculateur-imc/background.jpg" /><p><a href="/assets/blog/calculateur-imc/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="countdown-timer">Countdown Timer</h2>
<p>An interactive timer with pause/resume functionality. Master date handling and UI animations.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-7-tab-0" aria-controls="code-tabs-7-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-7-tab-1" aria-controls="code-tabs-7-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-7-tab-2" aria-controls="code-tabs-7-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-7-panel-0" aria-labelledby="code-tabs-7-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>COUNT DOWN&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">main</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>Comming Soon&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"days"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter"</span><span style="color:#1F2328">>0&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>Days&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hours"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter"</span><span style="color:#1F2328">>0&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>Hours&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"minutes"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter"</span><span style="color:#1F2328">>0&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>Minutes&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"seconds"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"counter"</span><span style="color:#1F2328">>0&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>Seconds&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">main</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./snow.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-7-panel-1" aria-labelledby="code-tabs-7-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">./background.png</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#c75263</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-transform</span><span style="color:#1F2328">: </span><span style="color:#0550AE">uppercase</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.counter-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">120</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">120</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> #8c1c44</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#8c1c44</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#0550AE"> 5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-transform</span><span style="color:#1F2328">: </span><span style="color:#0550AE">uppercase</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.counter</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">block</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">35</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-7-panel-2" aria-labelledby="code-tabs-7-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> countDownDate</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> Date</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"Jan 1, 2024 00:00:00"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">getTime</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> days</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"days"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> hours</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"hours"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> minutes</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"minutes"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> seconds</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"seconds"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> interval</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> setInterval</span><span style="color:#1F2328">(() </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> now</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> Date</span><span style="color:#1F2328">().</span><span style="color:#8250DF">getTime</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> duration</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> countDownDate </span><span style="color:#CF222E">-</span><span style="color:#1F2328"> now;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (duration </span><span style="color:#CF222E">&#x3C;</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#8250DF">    clearInterval</span><span style="color:#1F2328">(interval);</span></span>
<span class="line"><span style="color:#8250DF">    updateDuration</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  updateDuration</span><span style="color:#1F2328">(duration);</span></span>
<span class="line"><span style="color:#1F2328">}, </span><span style="color:#0550AE">1000</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateDuration</span><span style="color:#1F2328">(</span><span style="color:#953800">duration</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> days</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(duration </span><span style="color:#CF222E">/</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 24</span><span style="color:#1F2328">));</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> hours</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">    (duration </span><span style="color:#CF222E">%</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 24</span><span style="color:#1F2328">)) </span><span style="color:#CF222E">/</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> minutes</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">((duration </span><span style="color:#CF222E">%</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">)) </span><span style="color:#CF222E">/</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">));</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> seconds</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">((duration </span><span style="color:#CF222E">%</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">)) </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 1000</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">  days.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> days;</span></span>
<span class="line"><span style="color:#1F2328">  hours.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> hours;</span></span>
<span class="line"><span style="color:#1F2328">  minutes.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> minutes;</span></span>
<span class="line"><span style="color:#1F2328">  seconds.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> seconds;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary></details><h2 id="password-generator">Password Generator</h2>
<p>Create secure passwords with customizable rules. Learn randomization and strength validation.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-8-tab-0" aria-controls="code-tabs-8-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-8-tab-1" aria-controls="code-tabs-8-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-8-tab-2" aria-controls="code-tabs-8-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-8-panel-0" aria-labelledby="code-tabs-8-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Password generator&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"header-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h1</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"gradient-font"</span><span style="color:#1F2328">>Password Generator&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          Online tool to generate strong and secure password difficult to</span></span>
<span class="line"><span style="color:#1F2328">          crack</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"generated-password-container"</span><span style="color:#0550AE"> title</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Copy Password"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"password"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"password"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">button</span></span>
<span class="line"><span style="color:#0550AE">          class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-button copy-button"</span></span>
<span class="line"><span style="color:#0550AE">          id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"copyButton"</span></span>
<span class="line"><span style="color:#0550AE">          title</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Copy Password"</span></span>
<span class="line"><span style="color:#1F2328">        ></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"ci:copy"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"options-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"length-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"label"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            LENGTH:</span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"lengthValue"</span><span style="color:#1F2328">>20&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"length"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>5&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"length-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">input</span></span>
<span class="line"><span style="color:#0550AE">                type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"range"</span></span>
<span class="line"><span style="color:#0550AE">                min</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"5"</span></span>
<span class="line"><span style="color:#0550AE">                max</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"30"</span></span>
<span class="line"><span style="color:#0550AE">                value</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"20"</span></span>
<span class="line"><span style="color:#0550AE">                id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"lengthInput"</span></span>
<span class="line"><span style="color:#1F2328">              /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>30&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"error-message"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"errorMessage"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          At least one option must be selected</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">p</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"label"</span><span style="color:#1F2328">>SETTINGS&#x3C;/</span><span style="color:#116329">p</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"boolean-options-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">label</span><span style="color:#0550AE"> for</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeUppercase"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            Include Uppercase</span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"checkbox"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeUppercase"</span><span style="color:#0550AE"> checked</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"toggle-switch"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">label</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">label</span><span style="color:#0550AE"> for</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeLowercase"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            Include Lowercase</span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"checkbox"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeLowercase"</span><span style="color:#0550AE"> checked</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"toggle-switch"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">label</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">label</span><span style="color:#0550AE"> for</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeNumber"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            Include Numbers</span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"checkbox"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeNumber"</span><span style="color:#0550AE"> checked</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"toggle-switch"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">label</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">label</span><span style="color:#0550AE"> for</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeSymbols"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            Include Symbols</span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">input</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"checkbox"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"includeSymbols"</span><span style="color:#0550AE"> checked</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"toggle-switch"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">label</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"primary"</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"button"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"generatePasswordButton"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        Generate Password</span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-8-panel-1" aria-labelledby="code-tabs-8-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css?family=Roboto Mono"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ee4339</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ffdbc5e3</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --brick-red</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#820233</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f6dbce</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ffe3e299</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: Poppins, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--brick-red</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.hidden</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  max-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">850</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-shadow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 7</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> rgba</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0.1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.header-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">500</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">17</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.generated-password-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#0550AE"> 2</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">53</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">32</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">relative</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.password</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto Mono"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .password</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  all</span><span style="color:#1F2328">: </span><span style="color:#0550AE">initial</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">absolute</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  right</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">transparent</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.25</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .icon-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon-button:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--brick-red</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">25</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--brick-red</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">color</span><span style="color:#0550AE"> 0.25</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon-button:hover</span><span style="color:#0550AE"> .icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.length</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">13</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  column-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.length-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#1F2328">[</span><span style="color:#0550AE">type</span><span style="color:#CF222E">=</span><span style="color:#0A3069">"range"</span><span style="color:#1F2328">] {</span></span>
<span class="line"><span style="color:#0550AE">  all</span><span style="color:#1F2328">: </span><span style="color:#0550AE">initial</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--brick-red</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">7</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">linear-gradient</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">%</span><span style="color:#0550AE"> 100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-repeat</span><span style="color:#1F2328">: </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#1F2328">[</span><span style="color:#0550AE">type</span><span style="color:#CF222E">=</span><span style="color:#0A3069">"range"</span><span style="color:#1F2328">]</span><span style="color:#0550AE">::-webkit-slider-thumb</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  appearance</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.options-container</span><span style="color:#0550AE"> .label</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.boolean-options-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">grid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">fr</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  row-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  column-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .boolean-options-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">fr</span><span style="color:#0550AE"> 1</span><span style="color:#CF222E">fr</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">label</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">11</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.toggle-switch</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--brick-red</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">22</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">relative</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.25</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.toggle-switch:before</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  content</span><span style="color:#1F2328">: </span><span style="color:#0A3069">""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">absolute</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  left</span><span style="color:#1F2328">: </span><span style="color:#0550AE">4</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-shadow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 1</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> rgba</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0.25</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: </span><span style="color:#0550AE">left</span><span style="color:#0550AE"> 0.25</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#0550AE">:checked</span><span style="color:#CF222E"> +</span><span style="color:#0550AE"> .toggle-switch</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">input</span><span style="color:#0550AE">:checked</span><span style="color:#CF222E"> +</span><span style="color:#0550AE"> .toggle-switch:before</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  left</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-transform</span><span style="color:#1F2328">: </span><span style="color:#0550AE">uppercase</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  letter-spacing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1.6</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.error-message</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-8-panel-2" aria-labelledby="code-tabs-8-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> generatedPassword</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"password"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> lengthValue</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"lengthValue"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> lengthInput</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"lengthInput"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> options</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".boolean-options-container"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> includeLowercase</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"includeLowercase"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> includeUppercase</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"includeUppercase"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> includeNumber</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"includeNumber"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> includeSymbols</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"includeSymbols"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> errorMessage</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"errorMessage"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> generatePasswordButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0A3069">  "generatePasswordButton"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> copyButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"copyButton"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">lengthInput.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"input"</span><span style="color:#1F2328">, handleLengthChange);</span></span>
<span class="line"><span style="color:#1F2328">includeLowercase.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"change"</span><span style="color:#1F2328">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#1F2328">includeUppercase.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"change"</span><span style="color:#1F2328">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#1F2328">includeNumber.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"change"</span><span style="color:#1F2328">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#1F2328">includeSymbols.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"change"</span><span style="color:#1F2328">, handleCheckboxChange);</span></span>
<span class="line"><span style="color:#1F2328">generatePasswordButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, generatePassword);</span></span>
<span class="line"><span style="color:#1F2328">copyButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, copyPasswordToClipboard);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">generatePassword</span><span style="color:#1F2328">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> generatePassword</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> chars </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> buildCharacterString</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> passwordLength </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> lengthValue.textContent;</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> password </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">let</span><span style="color:#1F2328"> i </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">; i </span><span style="color:#CF222E">&#x3C;=</span><span style="color:#1F2328"> passwordLength; i</span><span style="color:#CF222E">++</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    password </span><span style="color:#CF222E">+=</span><span style="color:#8250DF"> generateRandomCharacter</span><span style="color:#1F2328">(chars);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">  generatedPassword.innerText </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> password;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> buildCharacterString</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> chars </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (includeLowercase.checked) {</span></span>
<span class="line"><span style="color:#1F2328">    chars </span><span style="color:#CF222E">+=</span><span style="color:#0A3069"> "abcdefghijklmnopqrstuvwxyz"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (includeUppercase.checked) {</span></span>
<span class="line"><span style="color:#1F2328">    chars </span><span style="color:#CF222E">+=</span><span style="color:#0A3069"> "ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (includeNumber.checked) {</span></span>
<span class="line"><span style="color:#1F2328">    chars </span><span style="color:#CF222E">+=</span><span style="color:#0A3069"> "0123456789"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (includeSymbols.checked) {</span></span>
<span class="line"><span style="color:#1F2328">    chars </span><span style="color:#CF222E">+=</span><span style="color:#0A3069"> "!@#$%^&#x26;*()"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> chars;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> generateRandomCharacter</span><span style="color:#1F2328">(</span><span style="color:#953800">chars</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  let</span><span style="color:#1F2328"> randomNumber </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#1F2328"> chars.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> chars.</span><span style="color:#8250DF">substring</span><span style="color:#1F2328">(randomNumber, randomNumber </span><span style="color:#CF222E">+</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleLengthChange</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  lengthValue.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> event.target.value;</span></span>
<span class="line"><span style="color:#1F2328">  lengthInput.style.backgroundSize </span><span style="color:#CF222E">=</span></span>
<span class="line"><span style="color:#1F2328">    ((event.target.value </span><span style="color:#CF222E">-</span><span style="color:#0550AE"> 5</span><span style="color:#1F2328">) </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 25</span><span style="color:#1F2328">) </span><span style="color:#CF222E">*</span><span style="color:#0550AE"> 100</span><span style="color:#CF222E"> +</span><span style="color:#0A3069"> "% 100%"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  generatePassword</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleCheckboxChange</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  errorMessage.style.display </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "none"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isNoOptionChecked</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#1F2328">    errorMessage.style.display </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "block"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    event.target.checked </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#8250DF">  generatePassword</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isAtLeastOneOptionChecked</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> () </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#1F2328">  options.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"input[type=checkbox]:checked"</span><span style="color:#1F2328">) </span><span style="color:#CF222E">?</span><span style="color:#0550AE"> true</span><span style="color:#CF222E"> :</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#8250DF"> isNoOptionChecked</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> () </span><span style="color:#CF222E">=></span><span style="color:#CF222E"> !</span><span style="color:#8250DF">isAtLeastOneOptionChecked</span><span style="color:#1F2328">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">async</span><span style="color:#CF222E"> function</span><span style="color:#8250DF"> copyPasswordToClipboard</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  try</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">navigator?.clipboard?.writeText) </span><span style="color:#CF222E">return</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">    await</span><span style="color:#1F2328"> navigator.clipboard.</span><span style="color:#8250DF">writeText</span><span style="color:#1F2328">(generatedPassword.textContent);</span></span>
<span class="line"><span style="color:#CF222E">    const</span><span style="color:#0550AE"> generatedPasswordValue</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> generatedPassword.textContent;</span></span>
<span class="line"><span style="color:#1F2328">    generatedPassword.textContent </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "Copied!"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">    setTimeout</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">      () </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> (generatedPassword.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> generatedPasswordValue),</span></span>
<span class="line"><span style="color:#0A3069">      "1000"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">    );</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">catch</span><span style="color:#1F2328"> (err) {</span></span>
<span class="line"><span style="color:#1F2328">    console.</span><span style="color:#8250DF">error</span><span style="color:#1F2328">(err);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/password-generator/background.jpg" /><p><a href="/assets/blog/password-generator/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="quiz-app">Quiz App</h2>
<p>A timed trivia game with scoring. Perfect for array manipulation practice.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-9-tab-0" aria-controls="code-tabs-9-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-9-tab-1" aria-controls="code-tabs-9-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-9-tab-2" aria-controls="code-tabs-9-panel-2" aria-selected="false" tabindex="-1">script.js</button><button type="button" role="tab" id="code-tabs-9-tab-3" aria-controls="code-tabs-9-panel-3" aria-selected="false" tabindex="-1">quizzes.json</button></div><div role="tabpanel" id="code-tabs-9-panel-0" aria-labelledby="code-tabs-9-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Quiz App&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"quiz"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"header-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>Quiz App&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h2</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"question"</span><span style="color:#1F2328">>Question text&#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"options"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"submit"</span><span style="color:#1F2328">>Submit&#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> type</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"module"</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-9-panel-1" aria-labelledby="code-tabs-9-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#a5183b</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ff6e3b</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#680131</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#a5183b21</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --option-background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f7efdca8</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --option-hover-background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f7efdc</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Poppins"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"background.jpg"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">768</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">700</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">992</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">900</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.header-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">12</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">22</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: opacity </span><span style="color:#0550AE">0.5</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#0550AE">:hover</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#0550AE">:focus</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  opacity</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0.9</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.options</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">grid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">fr</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  column-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  row-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 35</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">768</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .options</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">repeat</span><span style="color:#1F2328">(</span><span style="color:#0550AE">2</span><span style="color:#1F2328">, </span><span style="color:#0550AE">1</span><span style="color:#CF222E">fr</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.option</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--option-background-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.5</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.option:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--option-hover-background-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.option.selected</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.option.selected</span><span style="color:#116329"> span</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.index</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-right</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">22</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-transform</span><span style="color:#1F2328">: </span><span style="color:#0550AE">uppercase</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">1</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.option.selected</span><span style="color:#0550AE"> .index</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.answer</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.score</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">900</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-9-panel-2" aria-labelledby="code-tabs-9-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> quizData</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#8250DF"> fetch</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"quizzes.json"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">res</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> res.</span><span style="color:#8250DF">json</span><span style="color:#1F2328">());</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> container</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".container"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> options</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".options"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> questionEl</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"question"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> submitBtn</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"submit"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> currentQuiz </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> score </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">loadQuiz</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">options.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, selectAnswer);</span></span>
<span class="line"><span style="color:#1F2328">submitBtn.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, answerQuestion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> loadQuiz</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> currentQuizData</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> quizData[currentQuiz];</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> optionIndices</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> [</span><span style="color:#0A3069">"a"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"b"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"c"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"d"</span><span style="color:#1F2328">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">  questionEl.innerText </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> currentQuizData.question;</span></span>
<span class="line"><span style="color:#1F2328">  options.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  currentQuizData.options.</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">((</span><span style="color:#953800">option</span><span style="color:#1F2328">, </span><span style="color:#953800">index</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    options.innerHTML </span><span style="color:#CF222E">+=</span><span style="color:#0A3069"> \`</span></span>
<span class="line"><span style="color:#0A3069">        &#x3C;div class="option" data-option="\${</span><span style="color:#1F2328">option</span><span style="color:#0A3069">}"></span></span>
<span class="line"><span style="color:#0A3069">          &#x3C;div class="index">\${</span><span style="color:#1F2328">optionIndices</span><span style="color:#0A3069">[</span><span style="color:#1F2328">index</span><span style="color:#0A3069">]</span><span style="color:#0A3069">}&#x3C;/div></span></span>
<span class="line"><span style="color:#0A3069">          &#x3C;span class="option-answer">\${</span><span style="color:#1F2328">option</span><span style="color:#0A3069">}&#x3C;/span></span></span>
<span class="line"><span style="color:#0A3069">        &#x3C;/div>\`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> selectAnswer</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> selectedOption</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> event.target.</span><span style="color:#8250DF">closest</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".option"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">selectedOption) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> previouslySelectedOption</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> options.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".option.selected"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (previouslySelectedOption) {</span></span>
<span class="line"><span style="color:#1F2328">    previouslySelectedOption.classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"selected"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">  selectedOption.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"selected"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> answerQuestion</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> selectedOption</span><span style="color:#CF222E"> =</span><span style="color:#8250DF"> getSelected</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isAnswerCorrect</span><span style="color:#1F2328">(selectedOption)) {</span></span>
<span class="line"><span style="color:#1F2328">    score</span><span style="color:#CF222E">++</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">  currentQuiz</span><span style="color:#CF222E">++</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#8250DF">isQuizComplete</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#8250DF">    loadQuiz</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#8250DF">    showResults</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> getSelected</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> selectedOption</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> [</span><span style="color:#CF222E">...</span><span style="color:#1F2328">options.</span><span style="color:#8250DF">querySelectorAll</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".option"</span><span style="color:#1F2328">)].</span><span style="color:#8250DF">find</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">    (</span><span style="color:#953800">option</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> option.classList.</span><span style="color:#8250DF">contains</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"selected"</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> selectedOption </span><span style="color:#CF222E">?</span><span style="color:#1F2328"> selectedOption.</span><span style="color:#8250DF">getAttribute</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"data-option"</span><span style="color:#1F2328">) </span><span style="color:#CF222E">:</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> isAnswerCorrect</span><span style="color:#1F2328">(</span><span style="color:#953800">selectedOption</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> selectedOption </span><span style="color:#CF222E">&#x26;&#x26;</span><span style="color:#1F2328"> selectedOption </span><span style="color:#CF222E">===</span><span style="color:#8250DF"> getCurrentCorrectAnswer</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> getCurrentCorrectAnswer</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> quizData[currentQuiz].correct;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> isQuizComplete</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> currentQuiz </span><span style="color:#CF222E">>=</span><span style="color:#1F2328"> quizData.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> showResults</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  container.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> \`</span></span>
<span class="line"><span style="color:#0A3069">    &#x3C;h2 class="answer">You answered correctly at &#x3C;span class="score">\${</span><span style="color:#1F2328">score</span><span style="color:#0A3069">}/\${</span><span style="color:#1F2328">quizData</span><span style="color:#0A3069">.</span><span style="color:#0550AE">length</span><span style="color:#0A3069">}&#x3C;/span> questions&#x3C;/h2></span></span>
<span class="line"><span style="color:#0A3069">    &#x3C;button onclick="location.reload()">Reload&#x3C;/button></span></span>
<span class="line"><span style="color:#0A3069">  \`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-9-panel-3" aria-labelledby="code-tabs-9-tab-3" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">[</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "question"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Which language runs in a web browser?"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "options"</span><span style="color:#1F2328">: [</span><span style="color:#0A3069">"Java"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"C"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"Python"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"JavaScript"</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#116329">    "correct"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"JavaScript"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "question"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Which attribute is used to specify the URL of the page that the link goes to?"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "options"</span><span style="color:#1F2328">: [</span><span style="color:#0A3069">"src"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"href"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"url"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"link"</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#116329">    "correct"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"href"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "question"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Which CSS property is used to change the font size of an element?"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "options"</span><span style="color:#1F2328">: [</span><span style="color:#0A3069">"font-style"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"font-family"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"font-size"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"text-size"</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#116329">    "correct"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"font-size"</span></span>
<span class="line"><span style="color:#1F2328">  },</span></span>
<span class="line"><span style="color:#1F2328">  {</span></span>
<span class="line"><span style="color:#116329">    "question"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"What keyword is used to declare a function in JavaScript?"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">    "options"</span><span style="color:#1F2328">: [</span><span style="color:#0A3069">"func"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"def"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"function"</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"method"</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#116329">    "correct"</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"function"</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">]</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/quiz-app/background.jpg" /><p><a href="/assets/blog/quiz-app/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="tic-tac-toe-game">Tic Tac Toe Game</h2>
<p>The classic Tic Tac Toe game. Master game state management.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-10-tab-0" aria-controls="code-tabs-10-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-10-tab-1" aria-controls="code-tabs-10-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-10-tab-2" aria-controls="code-tabs-10-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-10-panel-0" aria-labelledby="code-tabs-10-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>tic tac toe&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>Tic Tac Toe&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"game-message current-player"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        Who's Turn :</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">span</span><span style="color:#1F2328">>X&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"game-board"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"row"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-1"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-2"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-3"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"row"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-4"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-5"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-6"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"row"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-7"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-8"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"cell-9"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"resetButton"</span><span style="color:#1F2328">>Reset Game&#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-10-panel-1" aria-labelledby="code-tabs-10-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Varela+Round&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f8a126</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#8d185e</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --hover-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#e07b23</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f8a1267a</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --bright-blue</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#2f76ff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --raspberry-red</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#e12472</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Varela Round"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#953800">background.jpg</span><span style="color:#1F2328">) </span><span style="color:#0550AE">no-repeat</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">15</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  flex-direction</span><span style="color:#1F2328">: </span><span style="color:#0550AE">column</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.current-player</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">56</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.current-player</span><span style="color:#116329"> span</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">inline-flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.game-board</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">grid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">repeat</span><span style="color:#1F2328">(</span><span style="color:#0550AE">3</span><span style="color:#1F2328">, </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  grid-template-rows</span><span style="color:#1F2328">: </span><span style="color:#0550AE">repeat</span><span style="color:#1F2328">(</span><span style="color:#0550AE">3</span><span style="color:#1F2328">, </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.cell</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">90</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#00000045</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.3</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.cell:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#00000060</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.cell-O</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-shadow</span><span style="color:#1F2328">:</span></span>
<span class="line"><span style="color:#0550AE">    0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--raspberry-red</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 20</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--raspberry-red</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 30</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--raspberry-red</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.cell-X</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-shadow</span><span style="color:#1F2328">:</span></span>
<span class="line"><span style="color:#0550AE">    0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--bright-blue</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 20</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--bright-blue</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#0550AE">    0</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> 30</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--bright-blue</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:is</span><span style="color:#1F2328">(</span><span style="color:#0550AE">.cell-O</span><span style="color:#1F2328">, </span><span style="color:#0550AE">.cell-X</span><span style="color:#1F2328">)</span><span style="color:#0550AE">:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#00000045</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.cell.correct</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.cell.correct:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> auto</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">0.3</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#0550AE">:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--hover-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">max-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .game-board</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">repeat</span><span style="color:#1F2328">(</span><span style="color:#0550AE">3</span><span style="color:#1F2328">, </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">    grid-template-rows</span><span style="color:#1F2328">: </span><span style="color:#0550AE">repeat</span><span style="color:#1F2328">(</span><span style="color:#0550AE">3</span><span style="color:#1F2328">, </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">  .cell</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">60</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">  button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-10-panel-2" aria-labelledby="code-tabs-10-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> EGameStatus</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">  NOT_STARTED: </span><span style="color:#0A3069">"NOT_STARTED"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  IN_PROGRESS: </span><span style="color:#0A3069">"IN_PROGRESS"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  FINISHED_WITH_WINNER: </span><span style="color:#0A3069">"FINISHED_WITH_WINNER"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  FINISHED_WITH_TIE: </span><span style="color:#0A3069">"FINISHED_WITH_TIE"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> gameStatus </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">NOT_STARTED</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> currentPlayer </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "X"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> cells</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelectorAll</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".cell"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> resetButton</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"resetButton"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> gameMessage</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".game-message"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">updateGameMessage</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">resetButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, reset);</span></span>
<span class="line"><span style="color:#1F2328">cells.</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">((</span><span style="color:#953800">cell</span><span style="color:#1F2328">, </span><span style="color:#953800">index</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#1F2328">  cell.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, () </span><span style="color:#CF222E">=></span><span style="color:#8250DF"> handleCellClick</span><span style="color:#1F2328">(index)),</span></span>
<span class="line"><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleCellClick</span><span style="color:#1F2328">(</span><span style="color:#953800">index</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isGameFinished</span><span style="color:#1F2328">() </span><span style="color:#CF222E">||</span><span style="color:#1F2328"> cells[index].innerHTML </span><span style="color:#CF222E">!==</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">  gameStatus </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">IN_PROGRESS</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  cells[index].innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> currentPlayer;</span></span>
<span class="line"><span style="color:#1F2328">  cells[index].classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"cell-"</span><span style="color:#CF222E"> +</span><span style="color:#1F2328"> currentPlayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">checkWinner</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#1F2328">    gameStatus </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">FINISHED_WITH_WINNER</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">    updateGameMessage</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">checkTie</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#1F2328">    gameStatus </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">FINISHED_WITH_TIE</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">    updateGameMessage</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">  currentPlayer </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> currentPlayer </span><span style="color:#CF222E">===</span><span style="color:#0A3069"> "X"</span><span style="color:#CF222E"> ?</span><span style="color:#0A3069"> "O"</span><span style="color:#CF222E"> :</span><span style="color:#0A3069"> "X"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  updateGameMessage</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> checkWinner</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> winPatterns</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> [</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">1</span><span style="color:#1F2328">, </span><span style="color:#0550AE">2</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">3</span><span style="color:#1F2328">, </span><span style="color:#0550AE">4</span><span style="color:#1F2328">, </span><span style="color:#0550AE">5</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">6</span><span style="color:#1F2328">, </span><span style="color:#0550AE">7</span><span style="color:#1F2328">, </span><span style="color:#0550AE">8</span><span style="color:#1F2328">], </span><span style="color:#6E7781">// Rows</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">3</span><span style="color:#1F2328">, </span><span style="color:#0550AE">6</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">1</span><span style="color:#1F2328">, </span><span style="color:#0550AE">4</span><span style="color:#1F2328">, </span><span style="color:#0550AE">7</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">2</span><span style="color:#1F2328">, </span><span style="color:#0550AE">5</span><span style="color:#1F2328">, </span><span style="color:#0550AE">8</span><span style="color:#1F2328">], </span><span style="color:#6E7781">// Columns</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">4</span><span style="color:#1F2328">, </span><span style="color:#0550AE">8</span><span style="color:#1F2328">],</span></span>
<span class="line"><span style="color:#1F2328">    [</span><span style="color:#0550AE">2</span><span style="color:#1F2328">, </span><span style="color:#0550AE">4</span><span style="color:#1F2328">, </span><span style="color:#0550AE">6</span><span style="color:#1F2328">], </span><span style="color:#6E7781">// Diagonals</span></span>
<span class="line"><span style="color:#1F2328">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">const</span><span style="color:#0550AE"> pattern</span><span style="color:#CF222E"> of</span><span style="color:#1F2328"> winPatterns) {</span></span>
<span class="line"><span style="color:#CF222E">    const</span><span style="color:#1F2328"> [</span><span style="color:#0550AE">a</span><span style="color:#1F2328">, </span><span style="color:#0550AE">b</span><span style="color:#1F2328">, </span><span style="color:#0550AE">c</span><span style="color:#1F2328">] </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> pattern;</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (</span></span>
<span class="line"><span style="color:#1F2328">      cells[a].innerHTML </span><span style="color:#CF222E">!==</span><span style="color:#0A3069"> ""</span><span style="color:#CF222E"> &#x26;&#x26;</span></span>
<span class="line"><span style="color:#1F2328">      cells[a].innerHTML </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> cells[b].innerHTML </span><span style="color:#CF222E">&#x26;&#x26;</span></span>
<span class="line"><span style="color:#1F2328">      cells[a].innerHTML </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> cells[c].innerHTML</span></span>
<span class="line"><span style="color:#1F2328">    ) {</span></span>
<span class="line"><span style="color:#8250DF">      updateCellsWinners</span><span style="color:#1F2328">(cells[a], cells[b], cells[c]);</span></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateCellsWinners</span><span style="color:#1F2328">(</span><span style="color:#953800">a</span><span style="color:#1F2328">, </span><span style="color:#953800">b</span><span style="color:#1F2328">, </span><span style="color:#953800">c</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">  a.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"correct"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  b.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"correct"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  c.classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"correct"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> checkTie</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> Array.</span><span style="color:#8250DF">from</span><span style="color:#1F2328">(cells).</span><span style="color:#8250DF">every</span><span style="color:#1F2328">((</span><span style="color:#953800">cell</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> cell.innerHTML </span><span style="color:#CF222E">!==</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> reset</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  gameStatus </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">NOT_STARTED</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  currentPlayer </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "X"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  updateGameMessage</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  cells.</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">((</span><span style="color:#953800">cell</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    cell.innerText </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    cell.className </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "cell"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateGameMessage</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (gameStatus </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">FINISHED_WITH_TIE</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    gameMessage.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "It's a tie!"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">else</span><span style="color:#CF222E"> if</span><span style="color:#1F2328"> (gameStatus </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">FINISHED_WITH_WINNER</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">    gameMessage.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> \`Winner : &#x3C;span>\${</span><span style="color:#1F2328">currentPlayer</span><span style="color:#0A3069">}&#x3C;/span>\`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    gameMessage.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> \`Who's Turn : &#x3C;span>\${</span><span style="color:#1F2328">currentPlayer</span><span style="color:#0A3069">}&#x3C;/span>\`</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> isGameFinished</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> (</span></span>
<span class="line"><span style="color:#1F2328">    gameStatus </span><span style="color:#CF222E">==</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">FINISHED_WITH_TIE</span><span style="color:#CF222E"> ||</span></span>
<span class="line"><span style="color:#1F2328">    gameStatus </span><span style="color:#CF222E">==</span><span style="color:#1F2328"> EGameStatus.</span><span style="color:#0550AE">FINISHED_WITH_TIE</span></span>
<span class="line"><span style="color:#1F2328">  );</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/tic-tac-toe-game/background.jpg" /><p><a href="/assets/blog/tic-tac-toe-game/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="typing-speed-test">Typing Speed Test</h2>
<p>Measure words-per-minute with accuracy tracking. Practice keyboard events.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-11-tab-0" aria-controls="code-tabs-11-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-11-tab-1" aria-controls="code-tabs-11-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-11-tab-2" aria-controls="code-tabs-11-panel-2" aria-selected="false" tabindex="-1">script.js</button><button type="button" role="tab" id="code-tabs-11-tab-3" aria-controls="code-tabs-11-panel-3" aria-selected="false" tabindex="-1">lorem-ipsum.js</button></div><div role="tabpanel" id="code-tabs-11-panel-0" aria-labelledby="code-tabs-11-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Typing Speed Test&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"header-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h1</span><span style="color:#1F2328">>Typing Speed Test&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          Online tool to help you improve your typing speed and accuracy.</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"text-to-type-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"text-to-type"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"footer-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-value-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"nbWord"</span><span style="color:#1F2328">> 0 &#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-label"</span><span style="color:#1F2328">>Word/min&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-value-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"errors"</span><span style="color:#1F2328">> 0 &#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"typed-text-stat-label"</span><span style="color:#1F2328">>Errors&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"tryAgainBtn"</span><span style="color:#1F2328">>Try again&#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"lorem-ipsum.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-11-panel-1" aria-labelledby="code-tabs-11-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css?family=Roboto Mono"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f7933d</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#424242</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --red-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f57173</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --green-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#34a055</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ffffff95</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --cursor-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#222</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color-1</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#f8a3a269</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color-2</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#74334799</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"background.jpg"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">800</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">auto</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> solid</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color-1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.header-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: Poppins, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">36</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">17</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--background-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">32</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type-container</span><span style="color:#0550AE"> .footer-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color-2</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.footer-container</span><span style="color:#0550AE"> .typed-text-stat-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.typed-text-stat-value-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-right</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color-2</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.typed-text-stat-value</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.typed-text-stat-value-container:first-child</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  padding-left</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type-container</span><span style="color:#0550AE"> .text-to-type</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Roboto Mono"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">22</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  word-break</span><span style="color:#1F2328">: </span><span style="color:#0550AE">break-all</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">32</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type</span><span style="color:#116329"> span</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type-container</span><span style="color:#0550AE"> .text-to-type.blink</span><span style="color:#116329"> span</span><span style="color:#0550AE">.cursor</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--cursor-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type-container</span><span style="color:#116329"> span</span><span style="color:#0550AE">.NOK</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--red-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.text-to-type-container</span><span style="color:#116329"> span</span><span style="color:#0550AE">.OK</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--green-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-11-panel-2" aria-labelledby="code-tabs-11-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> textToType</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".text-to-type"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> tryAgainBtn</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#tryAgainBtn"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> errorsElement</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#errors"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> nbWordElement</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"#nbWord"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> loremIpsum</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> LoremIpsum</span><span style="color:#1F2328">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> caractersToType;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> caracterToTypeIndex;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> typedCaractersErrors;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> typingStartTime;</span></span>
<span class="line"><span style="color:#CF222E">let</span><span style="color:#1F2328"> finished;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">initState</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#8250DF">toggleCursor</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">document.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"keydown"</span><span style="color:#1F2328">, handleKeyPress);</span></span>
<span class="line"><span style="color:#1F2328">tryAgainBtn.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, tryAgain);</span></span>
<span class="line"><span style="color:#1F2328">document.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#0A3069">  "keydown"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">  (</span><span style="color:#953800">event</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> event.key </span><span style="color:#CF222E">===</span><span style="color:#0A3069"> "Enter"</span><span style="color:#CF222E"> &#x26;&#x26;</span><span style="color:#8250DF"> tryAgain</span><span style="color:#1F2328">(),</span></span>
<span class="line"><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> tryAgain</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#8250DF">  initState</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> initState</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  caracterToTypeIndex </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  typedCaractersErrors </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  typingStartTime </span><span style="color:#CF222E">=</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> Date</span><span style="color:#1F2328">().</span><span style="color:#8250DF">getTime</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">  finished </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  setTextToType</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> setTextToType</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  textToType.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> getRandomText</span><span style="color:#1F2328">()</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">split</span><span style="color:#1F2328">(</span><span style="color:#0A3069">""</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">map</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">      (</span><span style="color:#953800">char</span><span style="color:#1F2328">, </span><span style="color:#953800">index</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#0A3069">        \`&#x3C;span class="\${</span><span style="color:#1F2328">index</span><span style="color:#CF222E"> ===</span><span style="color:#0550AE"> 0</span><span style="color:#CF222E"> ?</span><span style="color:#0A3069"> "cursor"</span><span style="color:#CF222E"> :</span><span style="color:#0A3069"> ""}">\${</span><span style="color:#1F2328">char</span><span style="color:#0A3069">}&#x3C;/span>\`</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">    )</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">join</span><span style="color:#1F2328">(</span><span style="color:#0A3069">""</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  caractersToType </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> textToType.</span><span style="color:#8250DF">querySelectorAll</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"span"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> getRandomText</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> loremIpsum</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">sentence</span><span style="color:#1F2328">(</span><span style="color:#0550AE">20</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">toLowerCase</span><span style="color:#1F2328">()</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">replace</span><span style="color:#1F2328">(</span><span style="color:#0A3069">/</span><span style="color:#0550AE">[</span><span style="color:#CF222E">^</span><span style="color:#0550AE">a-z ]</span><span style="color:#0A3069">/</span><span style="color:#CF222E">g</span><span style="color:#1F2328">, </span><span style="color:#0A3069">""</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> toggleCursor</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#8250DF">  setInterval</span><span style="color:#1F2328">(() </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> textToType.classList.</span><span style="color:#8250DF">toggle</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"blink"</span><span style="color:#1F2328">), </span><span style="color:#0550AE">500</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> isLastcaracter</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> caracterToTypeIndex </span><span style="color:#CF222E">>=</span><span style="color:#1F2328"> caractersToType.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleKeyPress</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isNotValidTypedKey</span><span style="color:#1F2328">(event.key) </span><span style="color:#CF222E">||</span><span style="color:#1F2328"> finished) {</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  handleTypedKey</span><span style="color:#1F2328">(event.key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isLastcaracter</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#8250DF">    finishTyping</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  moveCursor</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> isNotValidTypedKey</span><span style="color:#1F2328">(</span><span style="color:#953800">key</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#CF222E"> !</span><span style="color:#0A3069">/</span><span style="color:#CF222E">^</span><span style="color:#0550AE">[a-z ]</span><span style="color:#CF222E">$</span><span style="color:#0A3069">/</span><span style="color:#1F2328">.</span><span style="color:#8250DF">test</span><span style="color:#1F2328">(key);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> finishTyping</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  finished </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">  updateTypingStats</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#8250DF">  removeCursor</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> isTypedCharacterCorrect</span><span style="color:#1F2328">(</span><span style="color:#953800">key</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> key </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> caractersToType[caracterToTypeIndex].innerText;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleTypedKey</span><span style="color:#1F2328">(</span><span style="color:#953800">key</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (</span><span style="color:#8250DF">isTypedCharacterCorrect</span><span style="color:#1F2328">(key)) {</span></span>
<span class="line"><span style="color:#1F2328">    caractersToType[caracterToTypeIndex].classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"OK"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#1F2328">    caractersToType[caracterToTypeIndex].classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"NOK"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    typedCaractersErrors</span><span style="color:#CF222E">++</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> updateTypingStats</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  errorsElement.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> typedCaractersErrors;</span></span>
<span class="line"><span style="color:#1F2328">  nbWordElement.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#8250DF"> calculateNbWord</span><span style="color:#1F2328">(typingStartTime);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> calculateNbWord</span><span style="color:#1F2328">(</span><span style="color:#953800">startTime</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> elapsedTimeInMinutes</span><span style="color:#CF222E"> =</span></span>
<span class="line"><span style="color:#1F2328">    (</span><span style="color:#CF222E">new</span><span style="color:#8250DF"> Date</span><span style="color:#1F2328">().</span><span style="color:#8250DF">getTime</span><span style="color:#1F2328">() </span><span style="color:#CF222E">-</span><span style="color:#1F2328"> startTime) </span><span style="color:#CF222E">/</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">1000</span><span style="color:#CF222E"> *</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">); </span><span style="color:#6E7781">// Convert milliseconds to minutes</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> totalWordsTyped</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">ceil</span><span style="color:#1F2328">(caracterToTypeIndex </span><span style="color:#CF222E">/</span><span style="color:#0550AE"> 5</span><span style="color:#1F2328">); </span><span style="color:#6E7781">// Assuming an average word length of 5 characters</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">round</span><span style="color:#1F2328">(totalWordsTyped </span><span style="color:#CF222E">/</span><span style="color:#1F2328"> elapsedTimeInMinutes);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> moveCursor</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  caractersToType[caracterToTypeIndex</span><span style="color:#CF222E">++</span><span style="color:#1F2328">].classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"cursor"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  caractersToType[caracterToTypeIndex].classList.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"cursor"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> removeCursor</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#1F2328">  caractersToType[caracterToTypeIndex].classList.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"cursor"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-11-panel-3" aria-labelledby="code-tabs-11-tab-3" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">(</span><span style="color:#CF222E">function</span><span style="color:#1F2328"> () {</span></span>
<span class="line"><span style="color:#0A3069">  "use strict"</span><span style="color:#1F2328">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">  /**</span></span>
<span class="line"><span style="color:#6E7781">   * LoremIpsum constructor</span></span>
<span class="line"><span style="color:#6E7781">   *</span></span>
<span class="line"><span style="color:#6E7781">   * </span><span style="color:#CF222E">@type</span><span style="color:#953800"> {Function}</span></span>
<span class="line"><span style="color:#6E7781">   */</span></span>
<span class="line"><span style="color:#1F2328">  window.</span><span style="color:#8250DF">LoremIpsum</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> function</span><span style="color:#1F2328"> () {</span></span>
<span class="line"><span style="color:#6E7781">    // pass</span></span>
<span class="line"><span style="color:#1F2328">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">  /**</span></span>
<span class="line"><span style="color:#6E7781">   * LoremIpsum prototype</span></span>
<span class="line"><span style="color:#6E7781">   *</span></span>
<span class="line"><span style="color:#6E7781">   * </span><span style="color:#CF222E">@type</span><span style="color:#953800"> {Object}</span></span>
<span class="line"><span style="color:#6E7781">   */</span></span>
<span class="line"><span style="color:#1F2328">  window.LoremIpsum.</span><span style="color:#0550AE">prototype</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#6E7781">    /**</span></span>
<span class="line"><span style="color:#6E7781">     * Possible words</span></span>
<span class="line"><span style="color:#6E7781">     *</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@type</span><span style="color:#953800"> {Array}</span></span>
<span class="line"><span style="color:#6E7781">     */</span></span>
<span class="line"><span style="color:#1F2328">    _words: [</span></span>
<span class="line"><span style="color:#0A3069">      "a"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ac"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "accumsan"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ad"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "adipiscing"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "aenean"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "aenean"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "aliquam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "aliquam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "aliquet"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "amet"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ante"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "aptent"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "arcu"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "at"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "auctor"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "augue"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "bibendum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "blandit"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "class"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "commodo"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "condimentum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "congue"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "consectetur"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "consequat"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "conubia"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "convallis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "cras"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "cubilia"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "curabitur"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "curabitur"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "curae"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "cursus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "dapibus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "diam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "dictum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "dictumst"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "dolor"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "donec"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "donec"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "dui"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "duis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "egestas"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "eget"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "eleifend"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "elementum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "elit"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "enim"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "erat"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "eros"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "est"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "et"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "etiam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "etiam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "eu"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "euismod"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "facilisis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "fames"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "faucibus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "felis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "fermentum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "feugiat"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "fringilla"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "fusce"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "gravida"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "habitant"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "habitasse"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "hac"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "hendrerit"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "himenaeos"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "iaculis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "id"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "imperdiet"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "in"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "inceptos"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "integer"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "interdum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ipsum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "justo"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "lacinia"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "lacus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "laoreet"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "lectus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "leo"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "libero"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ligula"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "litora"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "lobortis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "lorem"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "luctus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "maecenas"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "magna"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "malesuada"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "massa"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "mattis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "mauris"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "metus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "mi"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "molestie"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "mollis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "morbi"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nec"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "neque"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "netus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nibh"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nisi"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nisl"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "non"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nostra"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nulla"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nullam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "nunc"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "odio"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "orci"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ornare"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "pellentesque"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "per"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "pharetra"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "phasellus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "placerat"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "platea"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "porta"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "porttitor"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "posuere"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "potenti"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "praesent"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "pretium"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "primis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "proin"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "pulvinar"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "purus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "quam"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "quis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "quisque"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "quisque"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "rhoncus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "risus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "rutrum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sagittis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sapien"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "scelerisque"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sed"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sem"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "semper"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "senectus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sit"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sociosqu"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sodales"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "sollicitudin"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "suscipit"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "suspendisse"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "taciti"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "tellus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "tempor"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "tempus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "tincidunt"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "torquent"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "tortor"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "tristique"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "turpis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ullamcorper"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ultrices"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ultricies"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "urna"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ut"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "ut"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "varius"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "vehicula"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "vel"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "velit"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "venenatis"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "vestibulum"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "vitae"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "vivamus"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "viverra"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "volutpat"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#0A3069">      "vulputate"</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#1F2328">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">    /**</span></span>
<span class="line"><span style="color:#6E7781">     * Get random number</span></span>
<span class="line"><span style="color:#6E7781">     *</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> x</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> y</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@return</span><span style="color:#953800"> {Number}</span></span>
<span class="line"><span style="color:#6E7781">     */</span></span>
<span class="line"><span style="color:#8250DF">    _random</span><span style="color:#1F2328">: </span><span style="color:#CF222E">function</span><span style="color:#1F2328"> (</span><span style="color:#953800">x</span><span style="color:#1F2328">, </span><span style="color:#953800">y</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> rnd </span><span style="color:#CF222E">=</span></span>
<span class="line"><span style="color:#1F2328">        Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#0550AE"> 2</span><span style="color:#CF222E"> -</span></span>
<span class="line"><span style="color:#0550AE">        1</span><span style="color:#CF222E"> +</span></span>
<span class="line"><span style="color:#1F2328">        (Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#0550AE"> 2</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">) </span><span style="color:#CF222E">+</span></span>
<span class="line"><span style="color:#1F2328">        (Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#0550AE"> 2</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">round</span><span style="color:#1F2328">(Math.</span><span style="color:#8250DF">abs</span><span style="color:#1F2328">(rnd) </span><span style="color:#CF222E">*</span><span style="color:#1F2328"> x </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> y);</span></span>
<span class="line"><span style="color:#1F2328">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">    /**</span></span>
<span class="line"><span style="color:#6E7781">     * Get random number between min and max</span></span>
<span class="line"><span style="color:#6E7781">     *</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> min</span><span style="color:#6E7781"> (optional) lower result limit</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> max</span><span style="color:#6E7781"> (optional) upper result limit</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@return</span><span style="color:#953800"> {Number}</span><span style="color:#6E7781">     random number</span></span>
<span class="line"><span style="color:#6E7781">     */</span></span>
<span class="line"><span style="color:#8250DF">    _count</span><span style="color:#1F2328">: </span><span style="color:#CF222E">function</span><span style="color:#1F2328"> (</span><span style="color:#953800">min</span><span style="color:#1F2328">, </span><span style="color:#953800">max</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> result;</span></span>
<span class="line"><span style="color:#CF222E">      if</span><span style="color:#1F2328"> (min </span><span style="color:#CF222E">&#x26;&#x26;</span><span style="color:#1F2328"> max)</span></span>
<span class="line"><span style="color:#1F2328">        result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#1F2328"> (max </span><span style="color:#CF222E">-</span><span style="color:#1F2328"> min </span><span style="color:#CF222E">+</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">) </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> min);</span></span>
<span class="line"><span style="color:#CF222E">      else</span><span style="color:#CF222E"> if</span><span style="color:#1F2328"> (min) result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> min;</span></span>
<span class="line"><span style="color:#CF222E">      else</span><span style="color:#CF222E"> if</span><span style="color:#1F2328"> (max) result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> max;</span></span>
<span class="line"><span style="color:#CF222E">      else</span><span style="color:#1F2328"> result </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">_random</span><span style="color:#1F2328">(</span><span style="color:#0550AE">8</span><span style="color:#1F2328">, </span><span style="color:#0550AE">2</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328"> result;</span></span>
<span class="line"><span style="color:#1F2328">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">    /**</span></span>
<span class="line"><span style="color:#6E7781">     * Get random words</span></span>
<span class="line"><span style="color:#6E7781">     *</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> min</span><span style="color:#6E7781"> (optional) minimal words count</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> max</span><span style="color:#6E7781"> (optional) maximal words count</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@return</span><span style="color:#953800"> {Object}</span><span style="color:#6E7781">     array of random words</span></span>
<span class="line"><span style="color:#6E7781">     */</span></span>
<span class="line"><span style="color:#8250DF">    words</span><span style="color:#1F2328">: </span><span style="color:#CF222E">function</span><span style="color:#1F2328"> (</span><span style="color:#953800">min</span><span style="color:#1F2328">, </span><span style="color:#953800">max</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> [];</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> count </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">_count</span><span style="color:#1F2328">(min, max);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">      // get random words</span></span>
<span class="line"><span style="color:#CF222E">      while</span><span style="color:#1F2328"> (result.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> &#x3C;</span><span style="color:#1F2328"> count) {</span></span>
<span class="line"><span style="color:#CF222E">        var</span><span style="color:#1F2328"> pos </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">._words.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">        var</span><span style="color:#1F2328"> rnd </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">._words[pos];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">        // do not allow same word twice in a row</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (result.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> &#x26;&#x26;</span><span style="color:#1F2328"> result[result.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">] </span><span style="color:#CF222E">===</span><span style="color:#1F2328"> rnd) {</span></span>
<span class="line"><span style="color:#CF222E">          continue</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">        result.</span><span style="color:#8250DF">push</span><span style="color:#1F2328">(rnd);</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328"> result;</span></span>
<span class="line"><span style="color:#1F2328">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">    /**</span></span>
<span class="line"><span style="color:#6E7781">     * Generate sentence</span></span>
<span class="line"><span style="color:#6E7781">     *</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> min</span><span style="color:#6E7781"> (optional) minimal words count</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> max</span><span style="color:#6E7781"> (optional) maximal words count</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@return</span><span style="color:#953800"> {String}</span><span style="color:#6E7781">     sentence</span></span>
<span class="line"><span style="color:#6E7781">     */</span></span>
<span class="line"><span style="color:#8250DF">    sentence</span><span style="color:#1F2328">: </span><span style="color:#CF222E">function</span><span style="color:#1F2328"> (</span><span style="color:#953800">min</span><span style="color:#1F2328">, </span><span style="color:#953800">max</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> words </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">words</span><span style="color:#1F2328">(min, max);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">      // add comma(s) to sentence</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> index </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">_random</span><span style="color:#1F2328">(</span><span style="color:#0550AE">6</span><span style="color:#1F2328">, </span><span style="color:#0550AE">2</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">      while</span><span style="color:#1F2328"> (index </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> words.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 2</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        words[index] </span><span style="color:#CF222E">+=</span><span style="color:#0A3069"> ","</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">        index </span><span style="color:#CF222E">+=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">_random</span><span style="color:#1F2328">(</span><span style="color:#0550AE">6</span><span style="color:#1F2328">, </span><span style="color:#0550AE">2</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">      // append puctation on end</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> punct </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "...!?"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">      words[words.</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> -</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">] </span><span style="color:#CF222E">+=</span><span style="color:#1F2328"> punct.</span><span style="color:#8250DF">charAt</span><span style="color:#1F2328">(</span></span>
<span class="line"><span style="color:#1F2328">        Math.</span><span style="color:#8250DF">floor</span><span style="color:#1F2328">(Math.</span><span style="color:#8250DF">random</span><span style="color:#1F2328">() </span><span style="color:#CF222E">*</span><span style="color:#1F2328"> punct.</span><span style="color:#0550AE">length</span><span style="color:#1F2328">),</span></span>
<span class="line"><span style="color:#1F2328">      );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">      // uppercase first letter</span></span>
<span class="line"><span style="color:#1F2328">      words[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">] </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> words[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">].</span><span style="color:#8250DF">charAt</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">).</span><span style="color:#8250DF">toUpperCase</span><span style="color:#1F2328">() </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> words[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">].</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(</span><span style="color:#0550AE">1</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328"> words.</span><span style="color:#8250DF">join</span><span style="color:#1F2328">(</span><span style="color:#0A3069">" "</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">    /**</span></span>
<span class="line"><span style="color:#6E7781">     * Generate paragraph</span></span>
<span class="line"><span style="color:#6E7781">     *</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> min</span><span style="color:#6E7781"> (optional) minimal words count</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@param</span><span style="color:#953800">  {Number}</span><span style="color:#1F2328"> max</span><span style="color:#6E7781"> (optional) maximal words count</span></span>
<span class="line"><span style="color:#6E7781">     * </span><span style="color:#CF222E">@return</span><span style="color:#953800"> {String}</span><span style="color:#6E7781">     paragraph</span></span>
<span class="line"><span style="color:#6E7781">     */</span></span>
<span class="line"><span style="color:#8250DF">    paragraph</span><span style="color:#1F2328">: </span><span style="color:#CF222E">function</span><span style="color:#1F2328"> (</span><span style="color:#953800">min</span><span style="color:#1F2328">, </span><span style="color:#953800">max</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">      if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">min </span><span style="color:#CF222E">&#x26;&#x26;</span><span style="color:#CF222E"> !</span><span style="color:#1F2328">max) {</span></span>
<span class="line"><span style="color:#1F2328">        min </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 20</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">        max </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> 60</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> result </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">      var</span><span style="color:#1F2328"> count </span><span style="color:#CF222E">=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">_count</span><span style="color:#1F2328">(min, max);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">      // append sentences until limit is reached</span></span>
<span class="line"><span style="color:#CF222E">      while</span><span style="color:#1F2328"> (result.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#CF222E">-</span><span style="color:#0550AE">1</span><span style="color:#1F2328">).</span><span style="color:#8250DF">split</span><span style="color:#1F2328">(</span><span style="color:#0A3069">" "</span><span style="color:#1F2328">).</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> &#x3C;</span><span style="color:#1F2328"> count) {</span></span>
<span class="line"><span style="color:#1F2328">        result </span><span style="color:#CF222E">+=</span><span style="color:#0550AE"> this</span><span style="color:#1F2328">.</span><span style="color:#8250DF">sentence</span><span style="color:#1F2328">() </span><span style="color:#CF222E">+</span><span style="color:#0A3069"> " "</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"><span style="color:#1F2328">      result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> result.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#CF222E">-</span><span style="color:#0550AE">1</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">      // remove words</span></span>
<span class="line"><span style="color:#CF222E">      if</span><span style="color:#1F2328"> (result.</span><span style="color:#8250DF">split</span><span style="color:#1F2328">(</span><span style="color:#0A3069">" "</span><span style="color:#1F2328">).</span><span style="color:#0550AE">length</span><span style="color:#CF222E"> ></span><span style="color:#1F2328"> count) {</span></span>
<span class="line"><span style="color:#CF222E">        var</span><span style="color:#1F2328"> punct </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> result.</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(</span><span style="color:#CF222E">-</span><span style="color:#0550AE">1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">        result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> result.</span><span style="color:#8250DF">split</span><span style="color:#1F2328">(</span><span style="color:#0A3069">" "</span><span style="color:#1F2328">).</span><span style="color:#8250DF">slice</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, count).</span><span style="color:#8250DF">join</span><span style="color:#1F2328">(</span><span style="color:#0A3069">" "</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">        result </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> result.</span><span style="color:#8250DF">replace</span><span style="color:#1F2328">(</span><span style="color:#0A3069">/,</span><span style="color:#CF222E">$</span><span style="color:#0A3069">/</span><span style="color:#1F2328">, </span><span style="color:#0A3069">""</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">        result </span><span style="color:#CF222E">+=</span><span style="color:#1F2328"> punct;</span></span>
<span class="line"><span style="color:#1F2328">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328"> result;</span></span>
<span class="line"><span style="color:#1F2328">    },</span></span>
<span class="line"><span style="color:#1F2328">  };</span></span>
<span class="line"><span style="color:#1F2328">})();</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/typing-speed-test/background.jpg" /><p><a href="/assets/blog/typing-speed-test/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="hash-generator">Hash Generator</h2>
<p>Generate cryptographic hashes (MD5, SHA-1) from user input. Explore web cryptography APIs.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆</p>
<details class="code-tabs-details">
<summary>📁 Source Code</summary><div data-code-tabs><div role="tablist" aria-label="Source files"><button type="button" role="tab" id="code-tabs-12-tab-0" aria-controls="code-tabs-12-panel-0" aria-selected="true" tabindex="0">index.html</button><button type="button" role="tab" id="code-tabs-12-tab-1" aria-controls="code-tabs-12-panel-1" aria-selected="false" tabindex="-1">style.css</button><button type="button" role="tab" id="code-tabs-12-tab-2" aria-controls="code-tabs-12-panel-2" aria-selected="false" tabindex="-1">script.js</button></div><div role="tabpanel" id="code-tabs-12-panel-0" aria-labelledby="code-tabs-12-tab-0"><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;</span><span style="color:#116329">html</span><span style="color:#0550AE"> lang</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"en"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> charset</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"UTF-8"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> http-equiv</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"X-UA-Compatible"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"IE=edge"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">meta</span><span style="color:#0550AE"> name</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"viewport"</span><span style="color:#0550AE"> content</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"width=device-width, initial-scale=1.0"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">title</span><span style="color:#1F2328">>Hash generator&#x3C;/</span><span style="color:#116329">title</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">link</span><span style="color:#0550AE"> rel</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"stylesheet"</span><span style="color:#0550AE"> href</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"./style.css"</span><span style="color:#1F2328"> /></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">head</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"header-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h1</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"gradient-font"</span><span style="color:#1F2328">>Hash Generator&#x3C;/</span><span style="color:#116329">h1</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          Online tool to instantly generate the hash value of an input text</span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">h2</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"generated-hash-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">textarea</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"inputText"</span><span style="color:#1F2328">>Text example&#x3C;/</span><span style="color:#116329">textarea</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"calculated-hashes-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"calculated-hash-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"left"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-algo"</span><span style="color:#1F2328">>SHA-1&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"SHA1"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-button copy-button"</span><span style="color:#0550AE"> title</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Copy"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"ci:copy"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"calculated-hash-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"left"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-algo"</span><span style="color:#1F2328">>SHA-256&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"SHA256"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-button copy-button"</span><span style="color:#0550AE"> title</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Copy"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"ci:copy"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"calculated-hash-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"left"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-algo"</span><span style="color:#1F2328">>SHA-384&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"SHA384"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-button copy-button"</span><span style="color:#0550AE"> title</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Copy"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"ci:copy"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"calculated-hash-container"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">div</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"left"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-algo"</span><span style="color:#1F2328">>SHA-512&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">span</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"hash-code-value"</span><span style="color:#0550AE"> id</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"SHA512"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">span</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;</span><span style="color:#116329">button</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon-button copy-button"</span><span style="color:#0550AE"> title</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"Copy"</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">              &#x3C;</span><span style="color:#116329">iconify-icon</span><span style="color:#0550AE"> icon</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"ci:copy"</span><span style="color:#0550AE"> class</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"icon"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">iconify-icon</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">            &#x3C;/</span><span style="color:#116329">button</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">          &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">        &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">      &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;/</span><span style="color:#116329">div</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">    &#x3C;</span><span style="color:#116329">script</span><span style="color:#0550AE"> src</span><span style="color:#1F2328">=</span><span style="color:#0A3069">"script.js"</span><span style="color:#1F2328">>&#x3C;/</span><span style="color:#116329">script</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">  &#x3C;/</span><span style="color:#116329">body</span><span style="color:#1F2328">></span></span>
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre></div><div role="tabpanel" id="code-tabs-12-panel-1" aria-labelledby="code-tabs-12-tab-1" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::before</span><span style="color:#1F2328">,</span></span>
<span class="line"><span style="color:#116329">*</span><span style="color:#0550AE">::after</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  box-sizing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">border-box</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">:root</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#953800">  --primary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#c3e3ee</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --secondary-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#26688b</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --white-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#fff</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --text-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#424242</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --border-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#c3e3ee73</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#953800">  --hover-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">#ddd</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">body</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-family</span><span style="color:#1F2328">: </span><span style="color:#0A3069">"Poppins"</span><span style="color:#1F2328">, </span><span style="color:#0550AE">sans-serif</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">vh</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-image</span><span style="color:#1F2328">: </span><span style="color:#0550AE">url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"background.jpg"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  background-position</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">cover</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  backdrop-filter</span><span style="color:#1F2328">: </span><span style="color:#0550AE">blur</span><span style="color:#1F2328">(</span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  max-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">950</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">2</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> var</span><span style="color:#1F2328">(</span><span style="color:#953800">--border-color</span><span style="color:#1F2328">) </span><span style="color:#0550AE">solid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  box-shadow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 7</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 0</span><span style="color:#0550AE"> rgba</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0</span><span style="color:#1F2328">, </span><span style="color:#0550AE">0.1</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">50</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 100</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.header-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-bottom</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h1</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">40</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">400</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#116329">  h2</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">17</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">textarea</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">100</span><span style="color:#CF222E">%</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  min-height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">150</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">18</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  outline</span><span style="color:#1F2328">: </span><span style="color:#0550AE">none</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">1</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#116329">textarea</span><span style="color:#0550AE">:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--hover-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.calculated-hashes-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">grid</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  grid-template-columns</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">fr</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  row-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  margin-top</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.calculated-hashes-container</span><span style="color:#0550AE"> .calculated-hash-container</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--primary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  padding</span><span style="color:#1F2328">: </span><span style="color:#0550AE">8</span><span style="color:#CF222E">px</span><span style="color:#0550AE"> 16</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">space-between</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.calculated-hash-container</span><span style="color:#0550AE"> .left</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  column-gap</span><span style="color:#1F2328">: </span><span style="color:#0550AE">10</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.calculated-hash-container</span><span style="color:#0550AE"> .left</span><span style="color:#0550AE"> .hash-code-algo</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#0550AE">  flex-shrink</span><span style="color:#1F2328">: </span><span style="color:#0550AE">0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-weight</span><span style="color:#1F2328">: </span><span style="color:#0550AE">600</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">85</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-align</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">5</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.calculated-hash-container</span><span style="color:#0550AE"> .left</span><span style="color:#0550AE"> .hash-code-value</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  overflow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">hidden</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  text-overflow</span><span style="color:#1F2328">: </span><span style="color:#0550AE">ellipsis</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  letter-spacing</span><span style="color:#1F2328">: </span><span style="color:#0550AE">1</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">14</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  white-space</span><span style="color:#1F2328">: </span><span style="color:#0550AE">nowrap</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  all</span><span style="color:#1F2328">: </span><span style="color:#0550AE">initial</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">20</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  border-radius</span><span style="color:#1F2328">: </span><span style="color:#0550AE">3</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  display</span><span style="color:#1F2328">: </span><span style="color:#0550AE">flex</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  align-items</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  justify-content</span><span style="color:#1F2328">: </span><span style="color:#0550AE">center</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  cursor</span><span style="color:#1F2328">: </span><span style="color:#0550AE">pointer</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  transition</span><span style="color:#1F2328">: background-color </span><span style="color:#0550AE">1</span><span style="color:#CF222E">s</span><span style="color:#0550AE"> ease</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">@media</span><span style="color:#CF222E"> only</span><span style="color:#0550AE"> screen</span><span style="color:#CF222E"> and</span><span style="color:#1F2328"> (</span><span style="color:#0550AE">min-width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">576</span><span style="color:#CF222E">px</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">  .icon-button</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    height</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    width</span><span style="color:#1F2328">: </span><span style="color:#0550AE">30</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon-button:hover</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  background-color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--secondary-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  font-size</span><span style="color:#1F2328">: </span><span style="color:#0550AE">25</span><span style="color:#CF222E">px</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--text-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE">.icon-button:hover</span><span style="color:#0550AE"> .icon</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">  color</span><span style="color:#1F2328">: </span><span style="color:#0550AE">var</span><span style="color:#1F2328">(</span><span style="color:#953800">--white-color</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div><div role="tabpanel" id="code-tabs-12-panel-2" aria-labelledby="code-tabs-12-tab-2" hidden><pre class="shiki github-light-default" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> SHA1</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"SHA1"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> SHA256</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"SHA256"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> SHA384</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"SHA384"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> SHA512</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"SHA512"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> inputText</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"inputText"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> copyButtons</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelectorAll</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".copy-button"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">handleKeyPress</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">document.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"keyup"</span><span style="color:#1F2328">, handleKeyPress);</span></span>
<span class="line"><span style="color:#1F2328">copyButtons.</span><span style="color:#8250DF">forEach</span><span style="color:#1F2328">((</span><span style="color:#953800">copyButton</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#1F2328">  copyButton.</span><span style="color:#8250DF">addEventListener</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"click"</span><span style="color:#1F2328">, (</span><span style="color:#953800">event</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span></span>
<span class="line"><span style="color:#8250DF">    copyHashCodeToClipboard</span><span style="color:#1F2328">(event),</span></span>
<span class="line"><span style="color:#1F2328">  ),</span></span>
<span class="line"><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">function</span><span style="color:#8250DF"> handleKeyPress</span><span style="color:#1F2328">() {</span></span>
<span class="line"><span style="color:#CF222E">  if</span><span style="color:#1F2328"> (inputText.value </span><span style="color:#CF222E">==</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">    SHA1</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    SHA256</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    SHA384</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#0550AE">    SHA512</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> ""</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  encode</span><span style="color:#1F2328">(inputText.value, </span><span style="color:#0A3069">"SHA-1"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">hash</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    SHA1</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> hash;</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  encode</span><span style="color:#1F2328">(inputText.value, </span><span style="color:#0A3069">"SHA-256"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">hash</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    SHA256</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> hash;</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  encode</span><span style="color:#1F2328">(inputText.value, </span><span style="color:#0A3069">"SHA-384"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">hash</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    SHA384</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> hash;</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">  encode</span><span style="color:#1F2328">(inputText.value, </span><span style="color:#0A3069">"SHA-512"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">hash</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#0550AE">    SHA512</span><span style="color:#1F2328">.innerHTML </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> hash;</span></span>
<span class="line"><span style="color:#1F2328">  });</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">async</span><span style="color:#CF222E"> function</span><span style="color:#8250DF"> encode</span><span style="color:#1F2328">(</span><span style="color:#953800">text</span><span style="color:#1F2328">, </span><span style="color:#953800">algo</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> encoder</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> TextEncoder</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> data</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> encoder.</span><span style="color:#8250DF">encode</span><span style="color:#1F2328">(text);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> hashBuffer</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#1F2328"> crypto.subtle.</span><span style="color:#8250DF">digest</span><span style="color:#1F2328">(algo, data);</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> hashArray</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> Array.</span><span style="color:#8250DF">from</span><span style="color:#1F2328">(</span><span style="color:#CF222E">new</span><span style="color:#8250DF"> Uint8Array</span><span style="color:#1F2328">(hashBuffer));</span></span>
<span class="line"><span style="color:#CF222E">  const</span><span style="color:#0550AE"> hashHex</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> hashArray</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">map</span><span style="color:#1F2328">((</span><span style="color:#953800">byte</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> byte.</span><span style="color:#8250DF">toString</span><span style="color:#1F2328">(</span><span style="color:#0550AE">16</span><span style="color:#1F2328">).</span><span style="color:#8250DF">padStart</span><span style="color:#1F2328">(</span><span style="color:#0550AE">2</span><span style="color:#1F2328">, </span><span style="color:#0A3069">"0"</span><span style="color:#1F2328">))</span></span>
<span class="line"><span style="color:#1F2328">    .</span><span style="color:#8250DF">join</span><span style="color:#1F2328">(</span><span style="color:#0A3069">""</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#CF222E">  return</span><span style="color:#1F2328"> hashHex;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">async</span><span style="color:#CF222E"> function</span><span style="color:#8250DF"> copyHashCodeToClipboard</span><span style="color:#1F2328">(</span><span style="color:#953800">event</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">  try</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">    if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">navigator?.clipboard?.writeText) {</span></span>
<span class="line"><span style="color:#CF222E">      return</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    const</span><span style="color:#0550AE"> hashCodeElement</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> event.target</span></span>
<span class="line"><span style="color:#1F2328">      .</span><span style="color:#8250DF">closest</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".calculated-hash-container"</span><span style="color:#1F2328">)</span></span>
<span class="line"><span style="color:#1F2328">      .</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".hash-code-value"</span><span style="color:#1F2328">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">    await</span><span style="color:#1F2328"> navigator.clipboard.</span><span style="color:#8250DF">writeText</span><span style="color:#1F2328">(hashCodeElement.textContent);</span></span>
<span class="line"><span style="color:#CF222E">    const</span><span style="color:#0550AE"> hashCodeValue</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> hashCodeElement.textContent;</span></span>
<span class="line"><span style="color:#1F2328">    hashCodeElement.textContent </span><span style="color:#CF222E">=</span><span style="color:#0A3069"> "Copied!"</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">    setTimeout</span><span style="color:#1F2328">(() </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> (hashCodeElement.textContent </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> hashCodeValue), </span><span style="color:#0A3069">"1000"</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">  } </span><span style="color:#CF222E">catch</span><span style="color:#1F2328"> (err) {</span></span>
<span class="line"><span style="color:#1F2328">    console.</span><span style="color:#8250DF">error</span><span style="color:#1F2328">(err);</span></span>
<span class="line"><span style="color:#1F2328">  }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre></div></div></details><details class="ressources-details">
<summary>📁 Ressources</summary>
<div class="asset">
  <img src="/assets/blog/hash-generator/background.jpg" /><p><a href="/assets/blog/hash-generator/background.jpg" title="download">background.jpg</a></p>
</div>
</details><h2 id="ready-to-build-your-portfolio">🚀 Ready to Build Your Portfolio?</h2>
<p>You now have 12 practical web projects to level up your frontend skills—from beginner-friendly calculators to expert-level weather apps. Each project is designed to:</p>
<p>✅ Teach real-world skills (APIs, DOM manipulation, algorithms)<br>✅ Boost your portfolio with interactive, deployable apps<br>✅ Prepare you for interviews with common technical challenges</p>
`,headings:[{id:`todo-list-app`,text:`Todo List App`},{id:`music-player`,text:`Music Player`},{id:`weather-app`,text:`Weather App`},{id:`qr-code-generator`,text:`QR Code Generator`},{id:`calculator`,text:`Calculator`},{id:`bmi-calculator`,text:`BMI Calculator`},{id:`countdown-timer`,text:`Countdown Timer`},{id:`password-generator`,text:`Password Generator`},{id:`quiz-app`,text:`Quiz App`},{id:`tic-tac-toe-game`,text:`Tic Tac Toe Game`},{id:`typing-speed-test`,text:`Typing Speed Test`},{id:`hash-generator`,text:`Hash Generator`},{id:`ready-to-build-your-portfolio`,text:`🚀 Ready to Build Your Portfolio?`}],parents:[],related:[]}})})}));