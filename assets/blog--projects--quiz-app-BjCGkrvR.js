import{b as e,t,x as n,y as r}from"./LoaderHider-DN66B8qz.js";import{t as i}from"./BlogArticlePage-C5Sa91Rv.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Quiz App with HTML, CSS and JavaScript`,description:`Build a quiz app with HTML, CSS and vanilla JavaScript: multiple-choice questions from a JSON file, one at a time, with a final score. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/quiz-app/`,html:`<p>A multiple-choice quiz that shows one question at a time and your score at the end. The questions come from a JSON file, so you can write your own.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆ · <strong>Files:</strong> 4 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Load data from a JSON file with <code>fetch</code></li>
<li>Keep the quiz state: the current question and the score</li>
<li>Let users pick an answer, and check it</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>quiz-app/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── background.jpg</span></span>
<span class="line"><span>├── quizzes.json</span></span>
<span class="line"><span>├── script.js</span></span>
<span class="line"><span>└── style.css</span></span></code></pre><blockquote>
<p>This project loads a JSON file with <code>fetch</code>, which browsers block on pages opened from disk. Serve the folder instead, for example with <code>npx serve</code> or the Live Server extension of VS Code, and open the address it gives you.</p>
</blockquote>
<h2 id="index-html">index.html</h2>
<p>The page and its elements.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> quizData</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#8250DF"> fetch</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"quizzes.json"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">res</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> res.</span><span style="color:#8250DF">json</span><span style="color:#1F2328">());</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="quizzes-json">quizzes.json</h2>
<p>The questions. Add your own: each one has its options and the correct answer.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">[</span></span>
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
<span class="line"><span style="color:#1F2328">]</span></span></code></pre><h2 id="images">Images</h2>
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
<td><img src="/assets/blog/quiz-app/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/quiz-app/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Add a timer for each question</li>
<li>Shuffle the questions and the answers</li>
<li>Show which answers were right at the end</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`quizzes-json`,text:`quizzes.json`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Tic Tac Toe Game with HTML, CSS and JavaScript`,description:`Build a Tic Tac Toe game with HTML, CSS and vanilla JavaScript: take turns, detect the winner or a tie, and highlight the winning line. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/tic-tac-toe-game/`},{title:`Build a Todo List App with HTML, CSS and JavaScript`,description:`Build a todo list app with HTML, CSS and vanilla JavaScript: add, complete, filter and delete tasks, saved in localStorage. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/todo-list-app/`}]}})})}));