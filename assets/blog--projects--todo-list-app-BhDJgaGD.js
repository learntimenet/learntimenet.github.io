import{b as e,t,x as n,y as r}from"./LoaderHider-CGGeEROU.js";import{t as i}from"./BlogArticlePage-DBpzhwMi.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Todo List App with HTML, CSS and JavaScript`,description:`Build a todo list app with HTML, CSS and vanilla JavaScript: add, complete, filter and delete tasks, saved in localStorage. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/todo-list-app/`,html:`<p>A task manager where you add tasks, tick them off, filter them by status and delete them. The list is saved in <code>localStorage</code>, so it is still there when you come back.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Create and update DOM elements from an array of objects</li>
<li>Save and load data with <code>localStorage</code> and <code>JSON</code></li>
<li>Filter a list by status, and handle clicks and the Enter key</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>todo-list-app/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── background.jpg</span></span>
<span class="line"><span>├── check.svg</span></span>
<span class="line"><span>├── empty.svg</span></span>
<span class="line"><span>├── script.js</span></span>
<span class="line"><span>└── style.css</span></span></code></pre><h2 id="index-html">index.html</h2>
<p>The page and its elements.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
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
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre><h2 id="style-css">style.css</h2>
<p>The design: layout, colors and fonts.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#116329">*</span><span style="color:#1F2328">,</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> input</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"input"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">});</span></span></code></pre><h2 id="images">Images</h2>
<p>Download each image and save it at its path in the project folder.</p>
<table>
<thead>
<tr>
<th>Preview</th>
<th>Save as</th>
<th></th>
</tr>
</thead>
<tbody><tr>
<td><img src="/assets/blog/todo-list/empty.svg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>empty.svg</code></td>
<td><a href="/assets/blog/todo-list/empty.svg" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/todo-list/check.svg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>check.svg</code></td>
<td><a href="/assets/blog/todo-list/check.svg" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/todo-list/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/todo-list/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Let users edit a task by double-clicking it</li>
<li>Add a due date, and sort tasks by it</li>
<li>Show how many tasks are left</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Typing Speed Test with HTML, CSS and JavaScript`,description:`Build a typing speed test with HTML, CSS and vanilla JavaScript: mark each letter as you type, and count words per minute and errors. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/typing-speed-test/`},{title:`Build a Weather App with HTML, CSS and JavaScript`,description:`Build a weather app with HTML, CSS and vanilla JavaScript using the OpenWeatherMap API: search a city and show its temperature, humidity and wind. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/weather-app/`}]}})})}));