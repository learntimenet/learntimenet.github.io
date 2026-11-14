import{b as e,t,x as n,y as r}from"./LoaderHider-Dvr4wQ6o.js";import{t as i}from"./BlogArticlePage-LxYR3S96.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Hash Generator with HTML, CSS and JavaScript`,description:`Build a hash generator with HTML, CSS and vanilla JavaScript: compute SHA-1, SHA-256, SHA-384 and SHA-512 hashes with the Web Crypto API. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/hash-generator/`,html:`<p>Type some text to see its SHA-1, SHA-256, SHA-384 and SHA-512 hashes, and copy any of them with one click.</p>
<p>📌 <strong>Difficulty:</strong> ★★★☆ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Hash text with the Web Crypto API, <code>crypto.subtle.digest</code></li>
<li>Turn bytes into a hexadecimal string</li>
<li>Copy text with the Clipboard API</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>hash-generator/</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> SHA1</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"SHA1"</span><span style="color:#1F2328">);</span></span>
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
<td><img src="/assets/blog/hash-generator/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/hash-generator/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Hash a file the user drops on the page</li>
<li>Compare a hash with one the user pastes</li>
<li>Show the hash in uppercase or in Base64</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Music Player with HTML, CSS and JavaScript`,description:`Build a music player with HTML, CSS and vanilla JavaScript: play, pause, skip songs and seek with a progress bar, from a JSON playlist. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/music-player/`},{title:`Build a Password Generator with HTML, CSS and JavaScript`,description:`Build a password generator with HTML, CSS and vanilla JavaScript: choose the length and characters, then copy the password. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/password-generator/`}]}})})}));