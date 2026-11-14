import{b as e,t,x as n,y as r}from"./LoaderHider-Cy-31tSi.js";import{t as i}from"./BlogArticlePage-IdUkNaPP.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`What Happens When You Type a URL and Press Enter`,description:`Follow one page load from the address bar to the pixels on your screen. DNS, TCP, TLS, HTTP, caching and rendering, explained step by step with commands you can run yourself.`,date:`2026-11-13`,urlPath:`/blog/essentials/what-happens-when-you-type-a-url/`,html:`<p>You type <code>learntime.net</code> into the address bar, press Enter, and a page appears. It takes less than a second, and it feels like nothing happened.</p>
<p>A lot happened. Your browser talked to at least three different kinds of servers, agreed on encryption keys with one of them, and turned a few hundred kilobytes of text into pixels. This is also one of the most common interview questions for web developers, because there&#39;s no part of the stack it doesn&#39;t touch.</p>
<p>Here&#39;s the whole trip, one step at a time.</p>
<h2 id="the-browser-reads-what-you-typed">The Browser Reads What You Typed</h2>
<p>First, the browser decides whether you typed an address or a search. <code>learntime.net</code> looks like a domain, so it becomes a URL. <code>how dns works</code> doesn&#39;t, so it goes to your search engine.</p>
<p>The browser also fills in what you left out. With no scheme, modern browsers try <code>https://</code> first. Some sites are on the <strong>HSTS preload list</strong>, built into the browser, which says they must only ever be loaded over HTTPS. For those, the browser never even tries plain HTTP.</p>
<h2 id="dns-finding-the-server-s-address">DNS: Finding the Server&#39;s Address</h2>
<p>Computers on the internet find each other by IP address, not by name. So the browser needs to turn <code>learntime.net</code> into something like <code>185.199.108.153</code>. That&#39;s the job of DNS, the Domain Name System.</p>
<p>It checks a few caches first, from the closest to the farthest: the browser&#39;s own cache, then the operating system&#39;s. If the answer isn&#39;t there, it asks a <strong>recursive resolver</strong>, usually run by your internet provider or a public service like <code>1.1.1.1</code> or <code>8.8.8.8</code>.</p>
<p>When the resolver doesn&#39;t know either, it does the real work:</p>
<ol>
<li>It asks a <strong>root server</strong>: who handles <code>.net</code>?</li>
<li>It asks the <code>.net</code> server: who handles <code>learntime.net</code>?</li>
<li>It asks that domain&#39;s <strong>authoritative server</strong>: what is the address of <code>learntime.net</code>?</li>
</ol>
<p>Every answer comes with a TTL, a time to live, which says how long it can be cached. That&#39;s why a DNS change can take hours to reach everyone: the old answer is still sitting in caches until its TTL runs out.</p>
<p>You can watch the answer yourself:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">dig</span><span style="color:#0A3069"> learntime.net</span><span style="color:#0A3069"> +short</span></span></code></pre><h2 id="connecting-to-the-server">Connecting to the Server</h2>
<p>With an IP address, the browser opens a connection. For HTTP/1.1 and HTTP/2, that&#39;s a <strong>TCP</strong> connection, which starts with a three-step handshake:</p>
<ol>
<li>The browser sends <code>SYN</code>: I&#39;d like to talk.</li>
<li>The server answers <code>SYN-ACK</code>: fine, I&#39;m listening.</li>
<li>The browser sends <code>ACK</code>: let&#39;s go.</li>
</ol>
<p>That&#39;s one full round trip before a single byte of the page is sent. Between Paris and New York, a round trip takes around 80 milliseconds, just because of the distance light has to travel through fiber.</p>
<p><strong>HTTP/3</strong> works differently. It runs on QUIC, which uses UDP and folds the connection setup and the encryption setup into a single round trip. On slow or unstable mobile networks, that saving is easy to feel.</p>
<h2 id="tls-making-it-private">TLS: Making It Private</h2>
<p>The <code>s</code> in <code>https</code> means the connection is encrypted with TLS. Before sending the request, the browser and the server agree on keys, and the browser checks that it&#39;s really talking to <code>learntime.net</code>.</p>
<p>That check relies on the server&#39;s <strong>certificate</strong>. It says &quot;this key belongs to learntime.net&quot;, and it&#39;s signed by a certificate authority that your operating system or browser already trusts. If the name doesn&#39;t match, or the certificate has expired, you get the full-page warning everyone has learned to fear.</p>
<p>With TLS 1.3, the version most connections use today, this takes one round trip. When you come back to a site you visited recently, the connection can even be resumed with no extra round trip at all.</p>
<h2 id="the-http-request-and-response">The HTTP Request and Response</h2>
<p>Now the browser can finally ask for the page. The request is just text, sent over the encrypted connection:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>GET / HTTP/1.1</span></span>
<span class="line"><span>Host: learntime.net</span></span>
<span class="line"><span>User-Agent: Mozilla/5.0 ...</span></span>
<span class="line"><span>Accept: text/html</span></span>
<span class="line"><span>Accept-Encoding: gzip, br</span></span>
<span class="line"><span>Cookie: theme=light</span></span></code></pre><p>The <code>Host</code> header matters more than it looks: one IP address often serves hundreds of sites, and this is how the server knows which one you want. (HTTP/2 and HTTP/3 send the same information in a compact binary form, but the meaning is the same.)</p>
<p>The server answers with a status code, headers and the body:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Content-Type: text/html; charset=utf-8</span></span>
<span class="line"><span>Content-Encoding: br</span></span>
<span class="line"><span>Cache-Control: max-age=600</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;!doctype html></span></span>
<span class="line"><span>&#x3C;html lang="en"> ...</span></span></code></pre><p><code>200</code> means everything went fine. A <code>301</code> would send the browser somewhere else, a <code>404</code> means there&#39;s nothing at that address, and a <code>503</code> means the server is overloaded or down for maintenance. If you want the full list with what each one means, the <a href="/tools/http-status-codes/">HTTP status codes reference</a> has them all.</p>
<p><code>Cache-Control</code> tells the browser how long it may reuse this response without asking again. Good caching is the cheapest performance work there is: the fastest request is the one you don&#39;t make.</p>
<p>To see the real request and response for any site, run curl with <code>-v</code>:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">curl</span><span style="color:#0550AE"> -v</span><span style="color:#0A3069"> https://learntime.net</span><span style="color:#0550AE"> -o</span><span style="color:#0A3069"> /dev/null</span></span></code></pre><h2 id="behind-the-server">Behind the Server</h2>
<p>&quot;The server&quot; is rarely one machine. The request may first reach a <strong>CDN</strong>, a network of servers close to you that keeps copies of static files. If the CDN has a fresh copy, the answer comes from a few kilometers away instead of another continent.</p>
<p>When it doesn&#39;t, the request goes on to a <strong>load balancer</strong>, which picks one of several application servers. That server might read from a cache like Redis, query a database, call other services, and then build the response. All of this happens while you&#39;re looking at a blank tab, and the time it takes is called <strong>time to first byte</strong>.</p>
<p>If you&#39;d like to go deeper into this part, the <a href="/interview/system-design/">system design interview questions</a> walk through how these pieces fit together at scale.</p>
<h2 id="from-html-to-pixels">From HTML to Pixels</h2>
<p>The browser starts working as soon as the first bytes of HTML arrive. It doesn&#39;t wait for the whole file.</p>
<ol>
<li><strong>Parsing.</strong> It reads the HTML and builds the <strong>DOM</strong>, a tree of every element on the page.</li>
<li><strong>More requests.</strong> Every stylesheet, script, font and image it finds starts a new request, often on the same connection.</li>
<li><strong>Styles.</strong> It parses the CSS into the <strong>CSSOM</strong> and works out which rules apply to which element.</li>
<li><strong>Layout.</strong> It computes where every box goes and how big it is.</li>
<li><strong>Paint and composite.</strong> It fills in the pixels, in layers, and the GPU puts them together on screen.</li>
</ol>
<p>Two kinds of files can hold this up. CSS blocks rendering, because the browser doesn&#39;t want to show unstyled content and then redraw it. And a plain <code>&lt;script&gt;</code> tag stops the HTML parser until the script has downloaded and run, because the script could change the page. That&#39;s why scripts usually get <code>defer</code> or <code>async</code>, or go at the end of the body.</p>
<p>After the first paint, JavaScript can keep changing the page, and every change that moves boxes around means another round of layout and paint.</p>
<h2 id="why-it-still-feels-instant">Why It Still Feels Instant</h2>
<p>With all those steps, a page load could easily take seconds. Several tricks keep it fast:</p>
<ul>
<li><strong>Caching</strong> at every level: DNS answers, TLS sessions, files in the browser, copies on the CDN.</li>
<li><strong>Connection reuse.</strong> One TCP or QUIC connection carries many requests, so the handshakes are paid once.</li>
<li><strong>Compression.</strong> Text files shrink by 70 to 90 percent with gzip or Brotli.</li>
<li><strong>Hints.</strong> <code>&lt;link rel=&quot;preconnect&quot;&gt;</code> lets the browser open a connection to a domain before it needs it.</li>
</ul>
<h2 id="see-it-for-yourself">See It for Yourself</h2>
<p>Open your browser&#39;s developer tools, go to the <strong>Network</strong> tab, and reload a page. Click the first request, then <strong>Timing</strong>. You&#39;ll see the steps from this article as a bar chart: DNS lookup, initial connection, SSL, waiting for the server, and the download.</p>
<p>It&#39;s the fastest way to make all of this concrete. And the next time a site feels slow, it tells you exactly which step to blame.</p>
`,headings:[{id:`the-browser-reads-what-you-typed`,text:`The Browser Reads What You Typed`},{id:`dns-finding-the-server-s-address`,text:`DNS: Finding the Server's Address`},{id:`connecting-to-the-server`,text:`Connecting to the Server`},{id:`tls-making-it-private`,text:`TLS: Making It Private`},{id:`the-http-request-and-response`,text:`The HTTP Request and Response`},{id:`behind-the-server`,text:`Behind the Server`},{id:`from-html-to-pixels`,text:`From HTML to Pixels`},{id:`why-it-still-feels-instant`,text:`Why It Still Feels Instant`},{id:`see-it-for-yourself`,text:`See It for Yourself`}],parents:[],related:[{title:`How to Read a Stack Trace Without Panicking`,description:`A stack trace looks scary, but it tells you exactly where your code broke. Learn to read Java, JavaScript and Python stack traces, find the line that matters, and fix the bug faster.`,date:`2026-11-12`,urlPath:`/blog/essentials/how-to-read-a-stack-trace/`},{title:`How to Undo Almost Anything in Git`,description:`Committed to the wrong branch, deleted a branch, or pushed something you shouldn't have? Here is how to undo common Git mistakes, from unstaged changes to lost commits, and which commands are safe on shared branches.`,date:`2026-11-12`,urlPath:`/blog/essentials/how-to-undo-almost-anything-in-git/`}]}})})}));