import{b as e,t,x as n,y as r}from"./LoaderHider-YAEzcJcv.js";import{t as i}from"./BlogArticlePage-cwyQ6RO8.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`Build a Weather App with HTML, CSS and JavaScript`,description:`Build a weather app with HTML, CSS and vanilla JavaScript using the OpenWeatherMap API: search a city and show its temperature, humidity and wind. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/weather-app/`,html:`<p>Type a city to see its current temperature, weather, humidity and wind speed, with an icon that matches the weather. The data comes from the OpenWeatherMap API.</p>
<p>📌 <strong>Difficulty:</strong> ★★★★ · <strong>Files:</strong> 3 · Plain HTML, CSS and JavaScript, no framework</p>
<h2 id="what-you-will-learn">What You Will Learn</h2>
<ul>
<li>Call a REST API with <code>fetch</code> and <code>async</code>/<code>await</code></li>
<li>Handle errors, like a city that doesn&#39;t exist</li>
<li>Pick an icon from the API&#39;s response</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>Create a folder with these files, and save the images below at the same paths:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>weather-app/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── script.js</span></span>
<span class="line"><span>├── style.css</span></span>
<span class="line"><span>└── images/</span></span>
<span class="line"><span>    ├── background.jpg</span></span>
<span class="line"><span>    ├── location-not-found.png</span></span>
<span class="line"><span>    └── icons/</span></span>
<span class="line"><span>        ├── clear.png</span></span>
<span class="line"><span>        ├── clouds.png</span></span>
<span class="line"><span>        ├── humidity.png</span></span>
<span class="line"><span>        ├── mist.png</span></span>
<span class="line"><span>        ├── rain.png</span></span>
<span class="line"><span>        ├── snow.png</span></span>
<span class="line"><span>        └── wind.png</span></span></code></pre><blockquote>
<p>You need a free API key from <a href="https://openweathermap.org/api">OpenWeatherMap</a>. Put it in <code>API_KEY</code>, at the top of <code>script.js</code>. A new key can take a few hours to start working.</p>
</blockquote>
<h2 id="index-html">index.html</h2>
<p>The page and its elements.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">&#x3C;!</span><span style="color:#116329">DOCTYPE</span><span style="color:#0550AE"> html</span><span style="color:#1F2328">></span></span>
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
<span class="line"><span style="color:#1F2328">}</span></span></code></pre><h2 id="script-js">script.js</h2>
<p>What makes the page work.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">const</span><span style="color:#0550AE"> API_KEY</span><span style="color:#CF222E"> =</span></span>
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
<td><img src="/assets/blog/weather-app/background.jpg" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/background.jpg</code></td>
<td><a href="/assets/blog/weather-app/background.jpg" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/clear.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/clear.png</code></td>
<td><a href="/assets/blog/weather-app/clear.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/clouds.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/clouds.png</code></td>
<td><a href="/assets/blog/weather-app/clouds.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/humidity.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/humidity.png</code></td>
<td><a href="/assets/blog/weather-app/humidity.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/location-not-found.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/location-not-found.png</code></td>
<td><a href="/assets/blog/weather-app/location-not-found.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/mist.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/mist.png</code></td>
<td><a href="/assets/blog/weather-app/mist.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/rain.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/rain.png</code></td>
<td><a href="/assets/blog/weather-app/rain.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/snow.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/snow.png</code></td>
<td><a href="/assets/blog/weather-app/snow.png" download>Download</a></td>
</tr>
<tr>
<td><img src="/assets/blog/weather-app/wind.png" alt="" width="96" style="background-color: #d4d4d8; padding: 4px" /></td>
<td><code>images/icons/wind.png</code></td>
<td><a href="/assets/blog/weather-app/wind.png" download>Download</a></td>
</tr>
</tbody></table>
<h2 id="ideas-to-go-further">Ideas to Go Further</h2>
<p>Once it works, make it yours:</p>
<ul>
<li>Use the browser&#39;s geolocation to show the weather where the user is</li>
<li>Add a five-day forecast</li>
<li>Let users switch between °C and °F</li>
</ul>
<h2 id="more-projects">More Projects</h2>
<p>This project is one of <a href="/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/">12 practical web projects to master HTML, CSS and JavaScript</a>. Pick the next one below.</p>
`,headings:[{id:`what-you-will-learn`,text:`What You Will Learn`},{id:`project-structure`,text:`Project Structure`},{id:`index-html`,text:`index.html`},{id:`style-css`,text:`style.css`},{id:`script-js`,text:`script.js`},{id:`images`,text:`Images`},{id:`ideas-to-go-further`,text:`Ideas to Go Further`},{id:`more-projects`,text:`More Projects`}],parents:[],related:[{title:`Build a BMI Calculator with HTML, CSS and JavaScript`,description:`Build a BMI calculator with HTML, CSS and vanilla JavaScript: validate a form, compute the Body Mass Index and color its range. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/bmi-calculator/`},{title:`Build a Calculator with HTML, CSS and JavaScript`,description:`Build a calculator with HTML, CSS and vanilla JavaScript: digits, the four operations, decimals and clear, in a glass-style design. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/calculator/`},{title:`Build a Countdown Timer with HTML, CSS and JavaScript`,description:`Build a countdown timer with HTML, CSS and vanilla JavaScript: count down to the next New Year in days, hours, minutes and seconds. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/countdown-timer/`},{title:`Build a Hash Generator with HTML, CSS and JavaScript`,description:`Build a hash generator with HTML, CSS and vanilla JavaScript: compute SHA-1, SHA-256, SHA-384 and SHA-512 hashes with the Web Crypto API. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/hash-generator/`},{title:`Build a Music Player with HTML, CSS and JavaScript`,description:`Build a music player with HTML, CSS and vanilla JavaScript: play, pause, skip songs and seek with a progress bar, from a JSON playlist. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/music-player/`},{title:`Build a Password Generator with HTML, CSS and JavaScript`,description:`Build a password generator with HTML, CSS and vanilla JavaScript: choose the length and characters, then copy the password. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/password-generator/`},{title:`Build a QR Code Generator with HTML, CSS and JavaScript`,description:`Build a QR code generator with HTML, CSS and vanilla JavaScript: turn text or a URL into a QR code and download it as a PNG. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/qr-code-generator/`},{title:`Build a Quiz App with HTML, CSS and JavaScript`,description:`Build a quiz app with HTML, CSS and vanilla JavaScript: multiple-choice questions from a JSON file, one at a time, with a final score. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/quiz-app/`},{title:`Build a Tic Tac Toe Game with HTML, CSS and JavaScript`,description:`Build a Tic Tac Toe game with HTML, CSS and vanilla JavaScript: take turns, detect the winner or a tie, and highlight the winning line. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/tic-tac-toe-game/`},{title:`Build a Todo List App with HTML, CSS and JavaScript`,description:`Build a todo list app with HTML, CSS and vanilla JavaScript: add, complete, filter and delete tasks, saved in localStorage. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/todo-list-app/`},{title:`Build a Typing Speed Test with HTML, CSS and JavaScript`,description:`Build a typing speed test with HTML, CSS and vanilla JavaScript: mark each letter as you type, and count words per minute and errors. Full source code included.`,date:`2026-11-11`,urlPath:`/blog/projects/typing-speed-test/`}]}})})}));