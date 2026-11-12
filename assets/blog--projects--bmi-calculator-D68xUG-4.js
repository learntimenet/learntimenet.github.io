import{b as e,t,x as n,y as r}from"./LoaderHider-Bv3LCimC.js";import{t as i}from"./BlogArticlePage-CWkYyqH8.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a BMI Calculator with HTML, CSS and JavaScript`,description:`Build a BMI calculator with HTML, CSS and vanilla JavaScript: validate a form, compute the Body Mass Index and color its range. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/bmi-calculator/`,html:`<p>Enter a height and a weight to get the Body Mass Index, with a color and a label for its range, from underweight to obese. Each field shows an error if its value is not valid.</p>
<p>📌 <strong>Difficulty:</strong> ★★☆☆ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Validate form fields and show an error next to each one</li>
<li>Handle a form&#39;s <code>submit</code> event</li>
<li>Map a number to a range, with its color and label</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>bmi-calculator/</span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> BMIRanges</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> [</span></span>
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
<td><img src="/assets/blog/calculateur-imc/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>background.jpg</code></td>
<td><a href="/assets/blog/calculateur-imc/background.jpg" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Add a switch between metric and imperial units</li>
<li>Show the healthy weight range for the height</li>
<li>Draw the ranges as a colored bar with a marker</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a Calculator with HTML, CSS and JavaScript`,description:`Build a calculator with HTML, CSS and vanilla JavaScript: digits, the four operations, decimals and clear, in a glass-style design. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/calculator/`},{title:`Build a Countdown Timer with HTML, CSS and JavaScript`,description:`Build a countdown timer with HTML, CSS and vanilla JavaScript: count down to the next New Year in days, hours, minutes and seconds. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/countdown-timer/`}]}})})}));