import{b as e,t,x as n,y as r}from"./LoaderHider-wMUDau3b.js";import{t as i}from"./BlogArticlePage-DQtUPlGb.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Music Player with HTML, CSS and JavaScript`,description:`Build a music player with HTML, CSS and vanilla JavaScript: play, pause, skip songs and seek with a progress bar, from a JSON playlist. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/music-player/`,html:`<p>An audio player with a cover, the song name and artist, a progress bar you can drag, and previous, play and next buttons. The playlist comes from a JSON file.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★ · <strong>Files:</strong> 4 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Control an <code>&lt;audio&gt;</code> element: play, pause, seek and read its duration</li>
<li>Load a playlist from a JSON file with <code>fetch</code></li>
<li>Keep a progress bar and a time display in sync with the song</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>music-player/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── background.jpg</span></span>
<span class="line"><span>├── script.js</span></span>
<span class="line"><span>├── songs.json</span></span>
<span class="line"><span>└── style.css</span></span></code></pre><blockquote>
<p>This project loads a JSON file with <code>fetch</code>, which browsers block on pages opened from disk. Serve the folder instead, for example with <code>npx serve</code> or the Live Server extension of VS Code, and open the address it gives you.</p>
</blockquote>
<h2 id="index-html">index.html</h2>
<p>The page and its elements.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> songs</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> await</span><span style="color:#8250DF"> fetch</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"songs.json"</span><span style="color:#1F2328">).</span><span style="color:#8250DF">then</span><span style="color:#1F2328">((</span><span style="color:#953800">res</span><span style="color:#1F2328">) </span><span style="color:#CF222E">=></span><span style="color:#1F2328"> res.</span><span style="color:#8250DF">json</span><span style="color:#1F2328">());</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="songs-json">songs.json</h2>
<p>The playlist. Each song has a name, an artist, an audio link and a cover image.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">[</span></span>
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
<td><img src="/assets/blog/music-player/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/music-player/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Add a shuffle and a repeat button</li>
<li>Add a volume slider</li>
<li>Show the whole playlist and let users pick a song</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`songs-json`,text:`songs.json`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Password Generator with HTML, CSS and JavaScript`,description:`Build a password generator with HTML, CSS and vanilla JavaScript: choose the length and characters, then copy the password. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/password-generator/`},{title:`Build a QR Code Generator with HTML, CSS and JavaScript`,description:`Build a QR code generator with HTML, CSS and vanilla JavaScript: turn text or a URL into a QR code and download it as a PNG. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/qr-code-generator/`}]}})})}));