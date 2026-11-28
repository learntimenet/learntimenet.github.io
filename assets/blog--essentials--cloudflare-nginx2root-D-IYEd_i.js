import{C as e,S as t,t as n,x as r}from"./LoaderHider-DvbO1pKo.js";import{t as i}from"./BlogArticlePage-B9Q6w81L.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`nginx2root: What the New nginx Flaws Teach About Protecting Your Origin`,description:`In November 2026, ten nginx vulnerabilities were disclosed, five of them memory corruption bugs called nginx2root. Why a proxy in front of nginx protects from some of them and not others, what "origin protection" means, and the checklist to secure your own servers.`,date:`2026-11-27`,urlPath:`/blog/essentials/cloudflare-nginx2root/`,html:`<p>nginx runs a huge share of the web, as a web server, reverse proxy and load balancer. On November 18, 2026, F5 and nginx.org disclosed <strong>ten nginx vulnerabilities</strong>, including five memory corruption bugs nicknamed <strong>nginx2root</strong> that can let an attacker who isn&#39;t logged in run commands on the server. Cloudflare&#39;s blog explained which of its customers were protected and why. The reasons apply to any setup with a proxy in front of a server.</p>
<h2 id="what-happened">What Happened</h2>
<p>According to Cloudflare&#39;s post and the advisories it summarizes:</p>
<ul>
<li>The worst bugs are in nginx&#39;s <strong>HTTP/2 and HTTP/3</strong> handling, and are triggered by specially crafted requests.</li>
<li>One bug is in the <strong>mail proxy</strong> module (IMAP, POP3, SMTP).</li>
<li>Cloudflare said it had seen no attacks exploiting the five nginx2root flaws as of November 19, though a limited proof of concept had been published.</li>
<li>The fix is to <strong>upgrade nginx and restart it</strong>. Published summaries name nginx 1.31.9 and 1.30.7 as fixed versions; check <a href="https://nginx.org/">nginx.org</a> for the versions that apply to you.</li>
</ul>
<h2 id="why-a-proxy-protects-from-some-bugs">Why a Proxy Protects From Some Bugs</h2>
<p>When a site is behind Cloudflare&#39;s proxy, the visitor&#39;s browser never talks to your nginx. Cloudflare <strong>ends the visitor&#39;s HTTP/2 or HTTP/3 connection at its own servers</strong> and opens a separate connection to yours. A malicious HTTP/2 frame reaches Cloudflare&#39;s software, not nginx&#39;s HTTP/2 code.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Browser ──HTTP/2──► Cloudflare edge ──new connection──► your nginx</span></span>
<span class="line"><span>          attack ends here                  clean requests only</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>That&#39;s why Cloudflare says origins behind its HTTP proxy are protected from the HTTP/2 and HTTP/3 bugs, with no rule to turn on. The same reasoning holds for any reverse proxy or load balancer that terminates connections itself.</p>
<h2 id="why-it-doesn-t-protect-from-others">Why It Doesn&#39;t Protect From Others</h2>
<p>The protection has limits, and they are the useful part:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Situation</th>
<th>Protected by the proxy?</th>
<th>Why</th>
</tr>
</thead>
<tbody><tr>
<td>HTTP/2 or HTTP/3 bug, proxied hostname</td>
<td>Yes</td>
<td>The connection ends at the proxy</td>
</tr>
<tr>
<td>Mail proxy bug (IMAP, POP3, SMTP)</td>
<td>No</td>
<td>The HTTP proxy doesn&#39;t carry mail</td>
</tr>
<tr>
<td>DNS-only record (no proxy)</td>
<td>No</td>
<td>Visitors connect straight to your server</td>
</tr>
<tr>
<td>Origin reachable by its IP address</td>
<td>No</td>
<td>An attacker skips the proxy and goes direct</td>
</tr>
</tbody></table>
</div>
<p>The last row is the one people forget. If your server answers anyone on port 443, an attacker who finds its IP address, from old DNS records, certificates or scans, sends the attack straight to nginx.</p>
<h2 id="lock-down-the-origin">Lock Down the Origin</h2>
<p>A proxy only protects an origin that <strong>can&#39;t be reached any other way</strong>:</p>
<ul>
<li><strong>Outbound-only tunnels</strong>, like Cloudflare Tunnel: your server opens a connection out to the proxy and exposes no inbound ports at all.</li>
<li><strong>Firewall allowlists</strong>: accept HTTP and HTTPS only from the proxy&#39;s published IP ranges.</li>
<li><strong>Authenticated origin pulls</strong>: the proxy presents a client certificate, and the origin refuses requests without it.</li>
</ul>
<h2 id="the-checklist">The Checklist</h2>
<ol>
<li><strong>Patch first.</strong> A proxy buys time; it doesn&#39;t replace upgrading nginx and restarting it.</li>
<li><strong>Find every nginx</strong>: internal tools, staging, containers and sidecars count too.</li>
<li><strong>Turn off what you don&#39;t use</strong>, like the mail module or HTTP/3, to shrink what can be attacked.</li>
<li><strong>Make the origin private</strong> with a tunnel, an allowlist or client certificates.</li>
<li><strong>Check DNS records</strong>: any record that bypasses the proxy exposes the server behind it.</li>
</ol>
<h2 id="what-to-take-away">What to Take Away</h2>
<ol>
<li>Ten nginx vulnerabilities were disclosed on November 18, 2026; the worst, nginx2root, can lead to remote code execution.</li>
<li>A proxy that terminates connections shields the origin from protocol bugs like these HTTP/2 and HTTP/3 flaws.</li>
<li>It doesn&#39;t help for traffic it doesn&#39;t carry, like mail, or for origins attackers can reach directly.</li>
<li>Origin protection means the server is reachable only through the proxy.</li>
<li>Patching is still required: defense in depth means both.</li>
</ol>
<h2 id="source">Source</h2>
<p>Based on <a href="https://blog.cloudflare.com/nginx2root/">nginx2root: five new nginx vulnerabilities, and how Cloudflare protects origins from the worst of them</a>, Cloudflare Blog, November 2026. The explanations here are our own.</p>
`,headings:[{id:`what-happened`,text:`What Happened`},{id:`why-a-proxy-protects-from-some-bugs`,text:`Why a Proxy Protects From Some Bugs`},{id:`why-it-doesn-t-protect-from-others`,text:`Why It Doesn't Protect From Others`},{id:`lock-down-the-origin`,text:`Lock Down the Origin`},{id:`the-checklist`,text:`The Checklist`},{id:`what-to-take-away`,text:`What to Take Away`},{id:`source`,text:`Source`}],parents:[],related:[{title:`Should You Scale PostgreSQL Vertically or Horizontally?`,description:`Your PostgreSQL database is slowing down. Find what it's short of, scale up with the settings that matter, add PgBouncer and read replicas, partition big tables, and know when Citus or sharding is worth it, with the SQL and config for each step.`,date:`2026-11-27`,urlPath:`/blog/essentials/scale-postgresql-vertically-or-horizontally/`},{title:`How to Publish Your First Expo App on the Google Play Store`,description:`A step-by-step guide to ship an Expo React Native app on Google Play. Set up app.json, build an Android App Bundle with EAS Build, create the Play Console listing, pass the 12-tester closed test, release to production, and ship updates.`,date:`2026-11-26`,urlPath:`/blog/essentials/publish-expo-app-google-play/`},{title:`LEAD and LAG in SQL, Explained with Examples`,description:`LEAD() OVER reads a value from the next row, and LAG() from the previous one, without a self join. Learn the syntax, PARTITION BY and ORDER BY, the offset and default arguments, and how to use them for time between orders, month-over-month changes and finding the last row.`,date:`2026-11-25`,urlPath:`/blog/essentials/lead-and-lag-in-sql/`},{title:`Should You Scale Your Database Vertically or Horizontally?`,description:`Your database is the bottleneck. Should you buy a bigger machine or spread it over many? Compare vertical and horizontal database scaling on limits, cost, complexity and risk, and follow a step-by-step order that avoids sharding until you really need it.`,date:`2026-11-25`,urlPath:`/blog/essentials/scale-database-vertically-or-horizontally/`}],relatedPages:[{title:`HTTP Status Codes`,description:`Look up any HTTP status code, from 100 to 505: what it means, when to use it, and the ones people mix up, like 401 vs 403 or 400 vs 422. Search by number or word.`,urlPath:`/tools/http-status-codes/`},{title:`Docker interview questions`,description:`Practice Docker interview questions on images and containers, layers and caching, CMD and ENTRYPOINT, and volumes, with clear answers.`,urlPath:`/interview/docker/`}]}})})}));