import{C as e,S as t,t as n,w as r}from"./LoaderHider-CS5e2bH6.js";import{t as i}from"./BlogArticlePage-CqP71tkJ.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`CORS Explained: Why Your Fetch Is Blocked and How to Fix It`,description:`What the same-origin policy protects, what CORS headers the server must send, when the browser sends a preflight OPTIONS request, how credentials change the rules, and how to fix the most common CORS errors.`,date:`2026-11-20`,urlPath:`/blog/essentials/cors-explained/`,html:`<p>Your front end on <code>http://localhost:5173</code> calls your API on <code>http://localhost:8080</code>, and the console says:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Access to fetch at 'http://localhost:8080/api/users' from origin 'http://localhost:5173'</span></span>
<span class="line"><span>has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present</span></span>
<span class="line"><span>on the requested resource.</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The request often reached the server and got an answer. The <strong>browser</strong> refused to hand the answer to your code. Here&#39;s why, and what to change.</p>
<h2 id="origins-and-the-same-origin-policy">Origins and the Same-Origin Policy</h2>
<p>An <strong>origin</strong> is the scheme, host and port of a URL together:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>URL A</th>
<th>URL B</th>
<th>Same origin?</th>
<th>Why</th>
</tr>
</thead>
<tbody><tr>
<td><code>https://app.example.com</code></td>
<td><code>https://app.example.com/x</code></td>
<td>Yes</td>
<td>Only the path differs</td>
</tr>
<tr>
<td><code>https://example.com</code></td>
<td><code>http://example.com</code></td>
<td>No</td>
<td>Scheme</td>
</tr>
<tr>
<td><code>https://example.com</code></td>
<td><code>https://api.example.com</code></td>
<td>No</td>
<td>Host</td>
</tr>
<tr>
<td><code>http://localhost:5173</code></td>
<td><code>http://localhost:8080</code></td>
<td>No</td>
<td>Port</td>
</tr>
</tbody></table>
</div>
<p>By default, a page&#39;s JavaScript can only <strong>read</strong> responses from its own origin. That&#39;s the same-origin policy. Without it, any site you visit could call <code>fetch(&quot;https://yourbank.com/account&quot;)</code>: your browser would attach your bank cookies, and the page would read your balance.</p>
<p><strong>CORS</strong> (Cross-Origin Resource Sharing) is how a server opts out, for the origins it trusts.</p>
<h2 id="the-header-that-fixes-most-cases">The Header That Fixes Most Cases</h2>
<p>For a simple <code>GET</code>, the browser sends the request with an <code>Origin</code> header, and checks the response:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>GET /api/users HTTP/1.1</span></span>
<span class="line"><span>Origin: http://localhost:5173</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Origin: http://localhost:5173</span></span>
<span class="line"><span>Content-Type: application/json</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If <code>Access-Control-Allow-Origin</code> matches the page&#39;s origin, or is <code>*</code>, your code gets the response. Otherwise it gets a network error, and the details are only in the console.</p>
<h2 id="preflight-requests">Preflight Requests</h2>
<p>Some requests could change data on servers that never expected cross-origin calls. For those, the browser first asks permission with an <code>OPTIONS</code> request, the <strong>preflight</strong>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>OPTIONS /api/users/42 HTTP/1.1</span></span>
<span class="line"><span>Origin: http://localhost:5173</span></span>
<span class="line"><span>Access-Control-Request-Method: PUT</span></span>
<span class="line"><span>Access-Control-Request-Headers: content-type, authorization</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The server must answer with what it allows:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>HTTP/1.1 204 No Content</span></span>
<span class="line"><span>Access-Control-Allow-Origin: http://localhost:5173</span></span>
<span class="line"><span>Access-Control-Allow-Methods: GET, POST, PUT, DELETE</span></span>
<span class="line"><span>Access-Control-Allow-Headers: content-type, authorization</span></span>
<span class="line"><span>Access-Control-Max-Age: 600</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Only then does the browser send the real <code>PUT</code>. <code>Access-Control-Max-Age</code> lets it cache the answer, here for 10 minutes, so it doesn&#39;t preflight every call.</p>
<p>A request skips the preflight only when it&#39;s &quot;simple&quot;: method <code>GET</code>, <code>HEAD</code> or <code>POST</code>, no custom headers, and a <code>Content-Type</code> of <code>text/plain</code>, <code>multipart/form-data</code> or <code>application/x-www-form-urlencoded</code>. So sending JSON with <code>Content-Type: application/json</code>, or an <code>Authorization</code> header, always triggers a preflight.</p>
<h2 id="cookies-and-credentials">Cookies and Credentials</h2>
<p>By default, cross-origin <code>fetch</code> sends no cookies. To send them:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">fetch</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://api.example.com/me"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, { credentials: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"include"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> });</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The server must then answer with both:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Access-Control-Allow-Origin: https://app.example.com</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>With credentials, <code>*</code> is not allowed: the origin must be named exactly. Cookies also need <code>SameSite=None; Secure</code> to be sent cross-site at all.</p>
<h2 id="setting-it-up-on-the-server">Setting It Up on the Server</h2>
<p>In Express, with the <code>cors</code> package:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cors </span><span style="color:#CF222E;--shiki-dark:#FF7B72">from</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "cors"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">app.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">use</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  cors</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    origin: [</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://app.example.com"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"http://localhost:5173"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">],</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    credentials: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">true</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }),</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>In Spring Boot:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Configuration</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> CorsConfig</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> implements</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> WebMvcConfigurer</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Override</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> addCorsMappings</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(CorsRegistry </span><span style="color:#953800;--shiki-dark:#FFA657">registry</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        registry.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">addMapping</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"/api/**"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">allowedOrigins</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://app.example.com"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">allowedMethods</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"GET"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"POST"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"PUT"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"DELETE"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            .</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">allowCredentials</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">true</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If you list several origins by hand, send back only the one that matches the request&#39;s <code>Origin</code>, and add <code>Vary: Origin</code> so caches don&#39;t serve one origin&#39;s answer to another. The libraries above do both.</p>
<h2 id="in-development-use-a-proxy">In Development: Use a Proxy</h2>
<p>Often the simplest fix is to make the calls same-origin. Vite can forward <code>/api</code> to your back end:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// vite.config.js</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">export</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> default</span><span style="color:#953800;--shiki-dark:#FFA657"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  server: {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    proxy: { </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"/api"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"http://localhost:8080"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> },</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span><span style="color:#953800;--shiki-dark:#FFA657">,</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">}</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Your code calls <code>fetch(&quot;/api/users&quot;)</code>, the browser sees one origin, and CORS never comes up. In production, a reverse proxy like nginx serving the app and the API on the same domain does the same.</p>
<h2 id="common-errors-and-their-fix">Common Errors and Their Fix</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Console message says</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td>No <code>Access-Control-Allow-Origin</code> header</td>
<td>Send it from the server, on errors too (a 500 often lacks it)</td>
</tr>
<tr>
<td>Response to preflight doesn&#39;t pass access control</td>
<td>Answer <code>OPTIONS</code> with 2xx and the allow headers; check auth isn&#39;t blocking it</td>
</tr>
<tr>
<td>Header <code>authorization</code> not allowed</td>
<td>Add it to <code>Access-Control-Allow-Headers</code></td>
</tr>
<tr>
<td>Wildcard <code>*</code> with credentials mode <code>include</code></td>
<td>Name the exact origin and send <code>Allow-Credentials: true</code></td>
</tr>
<tr>
<td>Value doesn&#39;t equal the supplied origin</td>
<td>Check scheme, port and trailing slash: <code>https://a.com/</code> is wrong</td>
</tr>
</tbody></table>
</div>
<h2 id="what-cors-does-not-do">What CORS Does Not Do</h2>
<ul>
<li><strong>It doesn&#39;t protect your API.</strong> <code>curl</code>, Postman and other servers ignore CORS completely. Authentication and authorization still do the protecting.</li>
<li><strong>It doesn&#39;t stop the request.</strong> For simple requests, the server runs the code; the browser only hides the answer. That&#39;s why state-changing endpoints also need CSRF protection when they use cookies.</li>
<li><strong>&quot;Disable CORS&quot; browser extensions only hide the problem</strong> on your machine. Your users won&#39;t have them.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>An origin is scheme + host + port; pages can read only their own origin&#39;s responses by default.</li>
<li>The server allows others with <code>Access-Control-Allow-Origin</code>.</li>
<li>JSON bodies and custom headers trigger a preflight <code>OPTIONS</code> the server must answer.</li>
<li>With cookies, name the exact origin and send <code>Access-Control-Allow-Credentials: true</code>.</li>
<li>In development, a dev-server proxy avoids CORS entirely.</li>
</ol>
`,headings:[{id:`origins-and-the-same-origin-policy`,text:`Origins and the Same-Origin Policy`},{id:`the-header-that-fixes-most-cases`,text:`The Header That Fixes Most Cases`},{id:`preflight-requests`,text:`Preflight Requests`},{id:`cookies-and-credentials`,text:`Cookies and Credentials`},{id:`setting-it-up-on-the-server`,text:`Setting It Up on the Server`},{id:`in-development-use-a-proxy`,text:`In Development: Use a Proxy`},{id:`common-errors-and-their-fix`,text:`Common Errors and Their Fix`},{id:`what-cors-does-not-do`,text:`What CORS Does Not Do`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Git Merge vs Rebase, Explained`,description:`Merge and rebase both bring the changes of one branch into another, but they leave a different history. See what each one does to your commits, when to use which, and the one rule that keeps rebase safe.`,date:`2026-11-20`,urlPath:`/blog/essentials/git-merge-vs-rebase/`},{title:`Backlinks Explained for Developers`,description:`What backlinks are, why search engines care, what nofollow, sponsored and ugc change, how to see who links to you, and honest ways for a developer to earn links without risking a penalty.`,date:`2026-11-19`,urlPath:`/blog/essentials/backlinks-explained/`},{title:`ROW_NUMBER in SQL, Explained with Examples`,description:`ROW_NUMBER gives each row a number, 1, 2, 3, starting over for each group. Learn its syntax, PARTITION BY and ORDER BY, how it differs from RANK and DENSE_RANK, and how to use it for top N per group, the latest row, duplicates and pagination.`,date:`2026-11-18`,urlPath:`/blog/essentials/row-number-in-sql/`},{title:`Claude Certified Associate (Foundations): A Study Guide`,description:`What the Claude Certified Associate – Foundations exam covers, domain by domain, with the ideas to know, exam tips, a study plan, and a free practice exam to check you're ready.`,date:`2026-11-17`,urlPath:`/blog/essentials/claude-certified-associate-foundations-study-guide/`}],relatedPages:[{title:`HTTP Status Codes`,description:`Look up any HTTP status code, from 100 to 505: what it means, when to use it, and the ones people mix up, like 401 vs 403 or 400 vs 422. Search by number or word.`,urlPath:`/tools/http-status-codes/`},{title:`JavaScript interview questions`,description:`Practice JavaScript interview questions on closures, the event loop, equality, this, and variable scope, with clear answers and code.`,urlPath:`/interview/javascript/`},{title:`URL Encoder and Decoder`,description:`Percent-encode and decode URLs and query strings online for free, and split any URL into its parts and query parameters. Runs in your browser.`,urlPath:`/tools/url-encoder/`}]}})})}));