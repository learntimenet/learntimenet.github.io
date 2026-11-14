import{b as e,t,x as n,y as r}from"./LoaderHider-Cy-31tSi.js";import{t as i}from"./BlogArticlePage-IdUkNaPP.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Tic Tac Toe Game with HTML, CSS and JavaScript`,description:`Build a Tic Tac Toe game with HTML, CSS and vanilla JavaScript: take turns, detect the winner or a tie, and highlight the winning line. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/tic-tac-toe-game/`,html:`<p>The classic two-player game. Players take turns, the game finds the winner or a tie, highlights the winning line, and starts again with one click.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Keep a game&#39;s state in an array</li>
<li>Check every winning line after each move</li>
<li>Update the board and the message from the state</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>tic-tac-toe-game/</span></span>
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
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre><h2 id="style-css">style.css</h2>
<p>The design: layout, colors and fonts.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Varela+Round&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> EGameStatus</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> {</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="images">Images</h2>
<p>Download each image and save it at its path in the project folder.</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Preview</th>
<th>Save as</th>
<th></th>
</tr>
</thead>
<tbody><tr>
<td><img src="/assets/blog/tic-tac-toe-game/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/tic-tac-toe-game/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
</div>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Add a computer player</li>
<li>Keep the score across games</li>
<li>Let the board grow to 4 by 4</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Todo List App with HTML, CSS and JavaScript`,description:`Build a todo list app with HTML, CSS and vanilla JavaScript: add, complete, filter and delete tasks, saved in localStorage. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/todo-list-app/`},{title:`Build a Typing Speed Test with HTML, CSS and JavaScript`,description:`Build a typing speed test with HTML, CSS and vanilla JavaScript: mark each letter as you type, and count words per minute and errors. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/typing-speed-test/`}]}})})}));