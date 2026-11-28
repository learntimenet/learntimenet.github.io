import{C as e,S as t,t as n,x as r}from"./LoaderHider-BcLKHTej.js";import{t as i}from"./BlogArticlePage-B9vrGxc-.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Design a Rate Limiter for an API`,description:`Allow each client 100 requests a minute, across many servers, without letting bursts through or slowing every request down. Compare fixed windows, sliding windows and token buckets, and build one on Redis.`,date:`2026-11-16`,urlPath:`/blog/system-design/rate-limiter/`,html:`<p>Another classic design question:</p>
<blockquote>
<p>Your public API must allow each API key <strong>100 requests per minute</strong>. Extra requests get <code>429 Too Many Requests</code>. The API runs on 10 servers behind a load balancer. How do you design the rate limiter?</p>
</blockquote>
<p>A rate limiter protects your servers from overload, stops one client from hogging capacity that others need, slows down brute-force attacks on login forms, and keeps costs under control when each request is expensive. It sits in front of everything, so it must be <strong>correct</strong> (no client gets far more than its limit), <strong>fast</strong> (it runs on every request) and <strong>reliable</strong> (it must not take the API down with it).</p>
<h2 id="the-naive-version">The Naive Version</h2>
<p>The first idea is a counter in memory:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> final</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Map</span><span style="color:#953800;--shiki-dark:#FFA657">&#x3C;</span><span style="color:#CF222E;--shiki-dark:#FF7B72">String</span><span style="color:#953800;--shiki-dark:#FFA657">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">Integer</span><span style="color:#953800;--shiki-dark:#FFA657">> </span><span style="color:#1F2328;--shiki-dark:#E6EDF3">counts</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ConcurrentHashMap&#x3C;>();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">boolean</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> allow</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(String apiKey) {</span></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">    // Reset every minute by a scheduled task.</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> counts.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">merge</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(apiKey, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, Integer</span><span style="color:#CF222E;--shiki-dark:#FF7B72">::</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">sum) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 100</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It has two problems.</p>
<p><strong>Each server counts alone.</strong> The load balancer spreads a client&#39;s requests over 10 servers, and each one allows 100. The client gets up to <strong>1,000 requests a minute</strong>. The count must be shared.</p>
<p><strong>The window resets all at once.</strong> With a counter per calendar minute, a client can send 100 requests at 12:00:59 and 100 more at 12:01:00: <strong>200 requests in two seconds</strong>, and the limiter is happy. That&#39;s the weakness of the <strong>fixed window</strong>.</p>
<p>So we need two decisions: which algorithm counts, and where the count lives.</p>
<h2 id="the-algorithms">The Algorithms</h2>
<h3 id="fixed-window">Fixed window</h3>
<p>Count requests per calendar window (12:00 to 12:01, 12:01 to 12:02…) and reject above the limit.</p>
<ul>
<li><strong>Pros:</strong> one counter per client, trivial to build.</li>
<li><strong>Cons:</strong> up to twice the limit around a window boundary.</li>
</ul>
<h3 id="sliding-window-log">Sliding window log</h3>
<p>Keep the timestamp of every request. To decide, drop the timestamps older than one minute and count the rest.</p>
<ul>
<li><strong>Pros:</strong> exact. &quot;100 in any 60 seconds&quot; means exactly that.</li>
<li><strong>Cons:</strong> stores up to 100 timestamps per client. With a million clients, that&#39;s a lot of memory.</li>
</ul>
<h3 id="sliding-window-counter">Sliding window counter</h3>
<p>Keep the fixed-window counts of the <strong>current</strong> and <strong>previous</strong> minute, and weigh the previous one by how much of it is still inside the last 60 seconds:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>estimate = previous × (1 − elapsed / 60s) + current</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>At 12:01:15, 25% of the current minute has passed, so 75% of the previous minute still counts. With 80 requests last minute and 30 this minute: 80 × 0.75 + 30 = 90. Allowed.</p>
<ul>
<li><strong>Pros:</strong> two counters per client, and no boundary burst.</li>
<li><strong>Cons:</strong> an approximation, since it assumes the previous minute&#39;s requests were spread evenly. In practice it&#39;s very close.</li>
</ul>
<h3 id="token-bucket">Token bucket</h3>
<p>Each client has a bucket holding up to <code>capacity</code> tokens, refilled at a steady <code>rate</code>. Each request takes a token; with no token left, it&#39;s rejected.</p>
<ul>
<li><strong>Pros:</strong> allows <strong>short bursts</strong> (up to the capacity) while holding the <strong>average</strong> rate. Two numbers per client: tokens left and last refill time. This is what AWS, Stripe and most API gateways use.</li>
<li><strong>Cons:</strong> two settings to tune instead of one.</li>
</ul>
<h3 id="leaky-bucket">Leaky bucket</h3>
<p>Requests go into a queue that&#39;s processed at a fixed rate; when the queue is full, new requests are dropped.</p>
<ul>
<li><strong>Pros:</strong> a perfectly smooth outflow, great in front of a fragile downstream system.</li>
<li><strong>Cons:</strong> requests wait instead of being answered at once, which suits traffic shaping more than an API&#39;s yes-or-no check.</li>
</ul>
<h3 id="which-one">Which one?</h3>
<div data-table-scroll><table>
<thead>
<tr>
<th>Algorithm</th>
<th>Memory per client</th>
<th>Bursts at the boundary</th>
<th>Allows planned bursts</th>
<th>Exact</th>
</tr>
</thead>
<tbody><tr>
<td>Fixed window</td>
<td>1 counter</td>
<td>Yes, up to 2×</td>
<td>No</td>
<td>Per window only</td>
</tr>
<tr>
<td>Sliding window log</td>
<td>1 entry a request</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Sliding window counter</td>
<td>2 counters</td>
<td>No</td>
<td>No</td>
<td>Close</td>
</tr>
<tr>
<td>Token bucket</td>
<td>2 numbers</td>
<td>No</td>
<td>Yes, up to capacity</td>
<td>Yes, for its rule</td>
</tr>
<tr>
<td>Leaky bucket</td>
<td>A queue</td>
<td>No</td>
<td>No, it smooths</td>
<td>Yes, for its rule</td>
</tr>
</tbody></table>
</div>
<p>For a public API, the <strong>token bucket</strong> is the usual answer: clients get the steady rate they pay for, plus a little slack for bursts, like loading a page that fires 10 requests at once. If the requirement really is &quot;never more than 100 in any 60 seconds&quot;, use the <strong>sliding window counter</strong>.</p>
<h2 id="where-the-count-lives-a-shared-store">Where the Count Lives: a Shared Store</h2>
<p>Every server must see the same count, so the counters go in a shared, fast store. <strong>Redis</strong> is the usual choice: it&#39;s in memory, it answers in well under a millisecond, and it can expire keys by itself.</p>
<h3 id="don-t-read-then-write">Don&#39;t read, then write</h3>
<p>The tempting code reads the count, checks it, and writes it back:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Don't: two servers can read 99 at the same time, and both allow.</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">int</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> count</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> redis.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">get</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(key);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (count </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 100</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    redis.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">set</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(key, count </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> true</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">return</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> false</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Two servers can read 99 at the same moment, both allow, and both write 100: one request too many. Under load, many more slip through. The check and the update must be <strong>one atomic step</strong>.</p>
<h3 id="a-fixed-window-with-incr">A fixed window with INCR</h3>
<p>Redis&#39;s <code>INCR</code> adds one and returns the new value atomically, so it&#39;s both the check and the update:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">INCR</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> rate:key_abc:202611161201</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">EXPIRE</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> rate:key_abc:202611161201</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 60</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> NX</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The minute is in the key, so each window gets a fresh counter, and <code>EXPIRE … NX</code> (Redis 7) sets the expiry only when the key is new. If <code>INCR</code> returns more than 100, reject. Send both commands in one round trip with a pipeline or a <code>MULTI</code> transaction, so a crash between them can&#39;t leave a counter without an expiry.</p>
<h3 id="a-token-bucket-with-a-lua-script">A token bucket with a Lua script</h3>
<p>A token bucket reads two values, computes, and writes two values: that&#39;s several commands, so it needs a <strong>Lua script</strong>, which Redis runs atomically, with no other command in between:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>-- KEYS[1]: the bucket. ARGV: capacity, refill rate per second, now in ms.</span></span>
<span class="line"><span>local capacity = tonumber(ARGV[1])</span></span>
<span class="line"><span>local rate     = tonumber(ARGV[2])</span></span>
<span class="line"><span>local now      = tonumber(ARGV[3])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>local bucket = redis.call("HMGET", KEYS[1], "tokens", "updated")</span></span>
<span class="line"><span>local tokens  = tonumber(bucket[1]) or capacity</span></span>
<span class="line"><span>local updated = tonumber(bucket[2]) or now</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- Refill for the time that passed, up to the capacity.</span></span>
<span class="line"><span>tokens = math.min(capacity, tokens + (now - updated) / 1000 * rate)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>local allowed = tokens >= 1</span></span>
<span class="line"><span>if allowed then tokens = tokens - 1 end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>redis.call("HSET", KEYS[1], "tokens", tokens, "updated", now)</span></span>
<span class="line"><span>redis.call("PEXPIRE", KEYS[1], math.ceil(capacity / rate * 1000))</span></span>
<span class="line"><span>return { allowed and 1 or 0, math.floor(tokens) }</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The expiry is the time a bucket takes to fill up again: after that, a missing bucket and a full one are the same, so idle clients cost no memory.</p>
<p>Pass <code>now</code> from the application servers only if their clocks are in sync. Otherwise, read Redis&#39;s own clock with <code>redis.call(&quot;TIME&quot;)</code> inside the script, so every server agrees on what time it is.</p>
<h2 id="the-filter-in-the-application">The Filter in the Application</h2>
<p>The limiter runs before any business code. In Spring, a filter does it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Component</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> RateLimitFilter</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> OncePerRequestFilter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> final</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> RateLimiter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> limiter;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> RateLimitFilter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(RateLimiter </span><span style="color:#953800;--shiki-dark:#FFA657">limiter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">        this</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.limiter </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> limiter;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Override</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    protected</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> doFilterInternal</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(HttpServletRequest </span><span style="color:#953800;--shiki-dark:#FFA657">request</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                                    HttpServletResponse </span><span style="color:#953800;--shiki-dark:#FFA657">response</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                                    FilterChain </span><span style="color:#953800;--shiki-dark:#FFA657">chain</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            throws</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ServletException, IOException {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        String</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> apiKey</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> request.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getHeader</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"X-Api-Key"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        Decision</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> decision</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> limiter.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">tryAcquire</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(apiKey);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        response.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setHeader</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"RateLimit-Limit"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"100"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        response.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setHeader</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"RateLimit-Remaining"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                String.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">valueOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(decision.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">remaining</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">!</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">decision.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">allowed</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            response.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setStatus</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">429</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">            response.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setHeader</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Retry-After"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">                    String.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">valueOf</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(decision.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">retryAfterSeconds</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()));</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        chain.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">doFilter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(request, response);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Tell clients where they stand: <code>429 Too Many Requests</code> with a <code>Retry-After</code> header saying how many seconds to wait, and <code>RateLimit-*</code> headers on every response so well-behaved clients can slow down before they hit the wall.</p>
<h2 id="design-decisions-interviewers-ask-about">Design Decisions Interviewers Ask About</h2>
<p><strong>What do you limit by?</strong> An API key or a user id is the fairest. Limiting by IP address is the fallback for anonymous traffic, but many users can share one address behind a company proxy or a mobile carrier, and one attacker can use many addresses. Often you combine them: a per-key limit for normal use, and a per-IP limit on the login endpoint against brute force.</p>
<p><strong>Where does it run?</strong> At the <strong>API gateway</strong> or load balancer, it stops abuse before it costs you anything, and every service gets it for free. In the <strong>application</strong>, it can use business knowledge, like a stricter limit for the free plan or for an expensive endpoint. Large systems do both: a coarse limit at the edge, finer ones inside.</p>
<p><strong>Different limits for different things.</strong> Real APIs have several rules at once: per second and per day, per endpoint, per plan. Each rule is one more counter, checked in the same script.</p>
<p><strong>What if Redis is down?</strong> You must choose:</p>
<ul>
<li><strong>Fail open:</strong> allow every request. The API stays up, unprotected for a while. Usually the right choice for a public API.</li>
<li><strong>Fail closed:</strong> reject every request. Safer for something like a login endpoint under attack, but Redis&#39;s outage becomes your outage.</li>
</ul>
<p>Whatever you choose, give the Redis call a short timeout, a few milliseconds, so a slow Redis can&#39;t make every request slow.</p>
<p><strong>Latency on every request.</strong> One round trip to Redis per request is usually fine, around a millisecond in the same data center. At very high traffic, each server can also keep a small local limit, or take tokens from Redis in batches of 10, trading a little accuracy for far fewer calls.</p>
<p><strong>Hot keys.</strong> One huge client can make one Redis key very busy. Redis Cluster spreads different keys across nodes, but a single key always lives on one node. For a giant client, split its limit across a few keys and pick one at random.</p>
<h2 id="every-failure-and-what-happens">Every Failure, and What Happens</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>What goes wrong</th>
<th>What happens</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td>Requests spread over 10 servers</td>
<td>All servers count in the same Redis key</td>
<td>100 a minute in total, not 1,000</td>
</tr>
<tr>
<td>Two servers check the same client at once</td>
<td><code>INCR</code> or the Lua script is atomic</td>
<td>No request slips through</td>
</tr>
<tr>
<td>A burst at the end and start of a window</td>
<td>The token bucket or sliding window counter has no reset moment</td>
<td>No 2× burst</td>
</tr>
<tr>
<td>Server clocks drift apart</td>
<td>The script reads Redis&#39;s own clock</td>
<td>Every server agrees</td>
</tr>
<tr>
<td>A client goes quiet</td>
<td>Its key expires</td>
<td>No memory used for idle clients</td>
</tr>
<tr>
<td>Redis is slow or down</td>
<td>A short timeout, then fail open (or closed for sensitive endpoints)</td>
<td>The API stays up, or stays protected</td>
</tr>
<tr>
<td>A client hits the limit</td>
<td><code>429</code> with <code>Retry-After</code> and <code>RateLimit-*</code> headers</td>
<td>It knows when to try again</td>
</tr>
</tbody></table>
</div>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Pick the algorithm: a <strong>token bucket</strong> to allow short bursts around a steady rate, or a <strong>sliding window counter</strong> for a strict &quot;N in any minute&quot;.</li>
<li>Keep the counters in <strong>Redis</strong>, shared by every server, with an expiry so idle clients cost nothing.</li>
<li>Make the check and the update <strong>atomic</strong>: <code>INCR</code> for a fixed window, a <strong>Lua script</strong> for a token bucket. Never read, then write.</li>
<li>Run it <strong>first</strong>, in a filter or at the gateway, and answer <code>429</code> with <code>Retry-After</code> and <code>RateLimit-*</code> headers.</li>
<li>Decide what happens when Redis fails, <strong>open or closed</strong>, and keep its timeout short.</li>
</ol>
`,headings:[{id:`the-naive-version`,text:`The Naive Version`},{id:`the-algorithms`,text:`The Algorithms`},{id:`where-the-count-lives-a-shared-store`,text:`Where the Count Lives: a Shared Store`},{id:`the-filter-in-the-application`,text:`The Filter in the Application`},{id:`design-decisions-interviewers-ask-about`,text:`Design Decisions Interviewers Ask About`},{id:`every-failure-and-what-happens`,text:`Every Failure, and What Happens`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Design an Order API That Saves Once and Emails Once`,description:`A client retries, a user double-clicks, a server crashes halfway. Learn how to design an endpoint that still creates exactly one order and sends exactly one email, with idempotency keys and the transactional outbox.`,date:`2026-11-16`,urlPath:`/blog/system-design/idempotent-order-api/`},{title:`Sell the Last Ticket Only Once`,description:`Thousands of people try to buy the last seats at the same moment. Learn how to never sell more than you have, with atomic updates, locks, versions and unique constraints, and how to hold a seat while the customer pays.`,date:`2026-11-16`,urlPath:`/blog/system-design/prevent-overselling/`},{title:`GitHub's Agent Host Protocol: Agent Sessions That Follow You Across Devices`,description:`Start a coding agent in your editor, check on it from your phone, approve its next step from the browser. How GitHub and Microsoft's open Agent Host Protocol does it, by moving the session out of the editor into a host that many clients attach to.`,date:`2026-11-27`,urlPath:`/blog/system-design/github-agent-host-protocol/`},{title:`Uber's Shard Manager: Balance the Load, Not the Shard Count`,description:`Giving every server the same number of shards doesn't give them the same load. How consistent hashing falls short, what a shard manager does instead, and how Uber's open-source Shard Manager cut its hottest hosts' CPU and its fleet size.`,date:`2026-11-27`,urlPath:`/blog/system-design/uber-shard-manager/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`Senior Java Spring developer interview questions`,description:`Practice the questions asked to a senior Java and Spring Boot developer: core Java, Spring Boot and microservices, resilience and rate limiting, JWT authentication, Kafka, databases and JPA, system design, and data structures and algorithms.`,urlPath:`/interview/senior-java-spring-developer/`},{title:`HTTP Status Codes`,description:`Look up any HTTP status code, from 100 to 505: what it means, when to use it, and the ones people mix up, like 401 vs 403 or 400 vs 422. Search by number or word.`,urlPath:`/tools/http-status-codes/`}]}})})}));