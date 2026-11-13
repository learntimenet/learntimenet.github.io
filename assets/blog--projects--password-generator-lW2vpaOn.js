import{b as e,t,x as n,y as r}from"./LoaderHider-BMHex9NB.js";import{t as i}from"./BlogArticlePage-CD114Cae.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Password Generator with HTML, CSS and JavaScript`,description:`Build a password generator with HTML, CSS and vanilla JavaScript: choose the length and characters, then copy the password. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/password-generator/`,html:`<p>Generate a random password from the length and the characters you choose: uppercase, lowercase, numbers and symbols. Copy it with one click.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Build a random string from character sets</li>
<li>Keep a range slider and checkboxes in sync with the result</li>
<li>Copy text with the Clipboard API</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>password-generator/</span></span>
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
<span class="line"><span style="color:#1F2328">&#x3C;/</span><span style="color:#116329">html</span><span style="color:#1F2328">></span></span></code></pre><h2 id="style-css">style.css</h2>
<p>The design: layout, colors and fonts.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">@import</span><span style="color:#0550AE"> url</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&#x26;display=swap"</span><span style="color:#1F2328">);</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> generatedPassword</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> document.</span><span style="color:#8250DF">getElementById</span><span style="color:#1F2328">(</span><span style="color:#0A3069">"password"</span><span style="color:#1F2328">);</span></span>
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
<td><img src="/assets/blog/password-generator/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/password-generator/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Show the password&#39;s strength</li>
<li>Use <code>crypto.getRandomValues</code> for stronger randomness</li>
<li>Add an option to avoid look-alike characters like 0 and O</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a QR Code Generator with HTML, CSS and JavaScript`,description:`Build a QR code generator with HTML, CSS and vanilla JavaScript: turn text or a URL into a QR code and download it as a PNG. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/qr-code-generator/`},{title:`Build a Quiz App with HTML, CSS and JavaScript`,description:`Build a quiz app with HTML, CSS and vanilla JavaScript: multiple-choice questions from a JSON file, one at a time, with a final score. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/quiz-app/`}]}})})}));