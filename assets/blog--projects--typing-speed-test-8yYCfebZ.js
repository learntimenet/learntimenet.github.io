import{b as e,t,x as n,y as r}from"./LoaderHider-DQOP23vm.js";import{t as i}from"./BlogArticlePage-CrYERgyc.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Typing Speed Test with HTML, CSS and JavaScript`,description:`Build a typing speed test with HTML, CSS and vanilla JavaScript: mark each letter as you type, and count words per minute and errors. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/typing-speed-test/`,html:`<p>Type a random text as fast as you can. Each letter is marked right or wrong as you type, and the test shows your speed in words per minute and your number of errors.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★ · <strong>Files:</strong> 4 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Handle keyboard events and ignore keys that are not letters</li>
<li>Compare each typed letter with the text and move a cursor</li>
<li>Compute words per minute, and count the errors</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>typing-speed-test/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── background.jpg</span></span>
<span class="line"><span>├── lorem-ipsum.js</span></span>
<span class="line"><span>├── script.js</span></span>
<span class="line"><span>└── style.css</span></span></code></pre><h2 id="index-html">index.html</h2>
<p>The page and its elements.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
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
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre><h2 id="style-css">style.css</h2>
<p>The design: layout, colors and fonts.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> textToType</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">querySelector</span><span style="color:#1F2328">(</span><span style="color:#0A3069">".text-to-type"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="lorem-ipsum-js">lorem-ipsum.js</h2>
<p>The texts to type. The test picks one at random.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">(</span><span style="color:#CF222E">function</span><span style="color:#1F2328"> () {</span></span>
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
<span class="line"><span style="color:#1F2328">})();</span></span></code></pre><h2 id="images">Images</h2>
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
<td><img src="/assets/blog/typing-speed-test/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/typing-speed-test/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Add a 30 or 60 seconds mode</li>
<li>Keep the best score in <code>localStorage</code></li>
<li>Let users choose the language of the text</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`lorem-ipsum-js`,text:`lorem-ipsum.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Weather App with HTML, CSS and JavaScript`,description:`Build a weather app with HTML, CSS and vanilla JavaScript using the OpenWeatherMap API: search a city and show its temperature, humidity and wind. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/weather-app/`},{title:`Build a BMI Calculator with HTML, CSS and JavaScript`,description:`Build a BMI calculator with HTML, CSS and vanilla JavaScript: validate a form, compute the Body Mass Index and color its range. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/bmi-calculator/`}]}})})}));