import{b as e,t,x as n,y as r}from"./LoaderHider-BMHex9NB.js";import{t as i}from"./BlogArticlePage-CD114Cae.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Calculator with HTML, CSS and JavaScript`,description:`Build a calculator with HTML, CSS and vanilla JavaScript: digits, the four operations, decimals and clear, in a glass-style design. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/calculator/`,html:`<p>A calculator with digits, the four operations, a decimal point and a clear button, in a clean glass-style design.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Lay out buttons with CSS grid</li>
<li>Handle many buttons with one click listener</li>
<li>Build an expression and compute its result</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>calculator/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── background.jpg</span></span>
<span class="line"><span>├── script.js</span></span>
<span class="line"><span>└── style.css</span></span></code></pre><h2 id="index-html">index.html</h2>
<p>The page and its elements.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
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
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre><h2 id="style-css">style.css</h2>
<p>The design: layout, colors and fonts.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> displayContainer</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".display"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="images">Images</h2>
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
<td><img src="/assets/blog/calculatrice/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/calculatrice/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Add keyboard support, so digits and operators can be typed</li>
<li>Add a percent and a plus/minus button</li>
<li>Keep a history of the last results</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Countdown Timer with HTML, CSS and JavaScript`,description:`Build a countdown timer with HTML, CSS and vanilla JavaScript: count down to the next New Year in days, hours, minutes and seconds. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/countdown-timer/`},{title:`Build a Hash Generator with HTML, CSS and JavaScript`,description:`Build a hash generator with HTML, CSS and vanilla JavaScript: compute SHA-1, SHA-256, SHA-384 and SHA-512 hashes with the Web Crypto API. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/hash-generator/`}]}})})}));