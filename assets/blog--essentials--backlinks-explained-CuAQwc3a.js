import{C as e,S as t,t as n,x as r}from"./LoaderHider-DMsSyvFD.js";import{t as i}from"./BlogArticlePage-B3jSur1j.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Backlinks Explained for Developers`,description:`What backlinks are, why search engines care, what nofollow, sponsored and ugc change, how to see who links to you, and honest ways for a developer to earn links without risking a penalty.`,date:`2026-11-19`,urlPath:`/blog/essentials/backlinks-explained/`,html:`<p>You built a useful site, a tool, or an open-source project, and search engines barely show it. Part of the answer is backlinks: links from other sites to yours. They tell search engines that someone found your page worth pointing to.</p>
<h2 id="what-a-backlink-is">What a Backlink Is</h2>
<p>A backlink is a link on another site that points to a page of yours. If a blog post on <code>example.org</code> writes:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">p</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  To check your JSON, I use</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> href</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://learntime.net/tools/json-formatter/"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>this formatter&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>.</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">p</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>that&#39;s a backlink to the JSON formatter. The visible words, &quot;this formatter&quot;, are the <strong>anchor text</strong>.</p>
<p>A link from one of your own pages to another is an <strong>internal link</strong>. Internal links help visitors and crawlers move around your site, but they don&#39;t count as other people vouching for you.</p>
<h2 id="why-search-engines-care">Why Search Engines Care</h2>
<p>Google&#39;s original idea, PageRank, treated a link as a vote: pages linked from many good pages are probably good too. Today links are one signal among hundreds, but they still matter in three ways:</p>
<ol>
<li><strong>Discovery.</strong> Crawlers find new pages by following links. A page nobody links to, not even your sitemap, may never be crawled.</li>
<li><strong>Trust.</strong> A link from a respected site in your field counts much more than dozens from unrelated or low-quality sites.</li>
<li><strong>Context.</strong> The anchor text and the words around a link tell search engines what your page is about.</li>
</ol>
<p>Links also bring visitors directly. A link in a popular README or forum answer can send more people than search ever will.</p>
<h2 id="nofollow-sponsored-and-ugc">Nofollow, Sponsored and UGC</h2>
<p>A site can tell search engines how much it stands behind a link with the <code>rel</code> attribute:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> href</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://shop.example/"</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> rel</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"sponsored"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>Our partner&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> href</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://someone.example/"</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> rel</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"ugc"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>A link in a comment&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> href</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"https://unknown.example/"</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> rel</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"nofollow"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>A link we don't vouch for&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">a</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>Value</th>
<th>Means</th>
<th>Typical use</th>
</tr>
</thead>
<tbody><tr>
<td>(none)</td>
<td>A normal link, often called &quot;dofollow&quot;</td>
<td>Editorial links</td>
</tr>
<tr>
<td><code>nofollow</code></td>
<td>&quot;We don&#39;t vouch for this page&quot;</td>
<td>Untrusted links</td>
</tr>
<tr>
<td><code>sponsored</code></td>
<td>The link is paid or part of a deal</td>
<td>Ads, affiliate links</td>
</tr>
<tr>
<td><code>ugc</code></td>
<td>User-generated content</td>
<td>Comments, forum posts</td>
</tr>
</tbody></table>
</div>
<p>Since 2019–2020, Google treats all three as <strong>hints</strong> rather than strict orders: it may still use them to discover pages. Many big platforms, like Wikipedia and most social networks, add <code>nofollow</code> or <code>ugc</code> to outgoing links. Those links pass little ranking value, but they still bring visitors.</p>
<p>If you sell a link or get paid for one, mark it <code>sponsored</code>. An unmarked paid link breaks Google&#39;s spam policies.</p>
<h2 id="see-who-links-to-you">See Who Links to You</h2>
<ul>
<li><strong>Google Search Console</strong> has a <strong>Links</strong> report: your most linked pages, the sites that link to you most, and the most common anchor texts. It&#39;s free, once you verify that you own the site.</li>
<li><strong>Bing Webmaster Tools</strong> shows backlinks too, also for free.</li>
<li>Paid tools, like Ahrefs, Semrush or Moz, crawl the web themselves and show more detail, including your competitors&#39; links.</li>
</ul>
<p>No tool sees every link, so the numbers never match exactly. Look at trends and at which pages earn links, not at one total.</p>
<h2 id="earn-links-as-a-developer">Earn Links as a Developer</h2>
<p>The links that help most are the ones people add because your page is useful. Developers have good ways to earn them:</p>
<ul>
<li><strong>Build something people reference.</strong> A free tool, a clear cheat sheet, a benchmark, or a well-explained guide gets linked from docs, READMEs and answers for years.</li>
<li><strong>Publish open source.</strong> Put your site in the <code>homepage</code> field of <code>package.json</code>, the repository&#39;s website field and the README. People who use the project follow those links.</li>
<li><strong>Answer questions where they&#39;re asked.</strong> A helpful answer on a forum that links to a deeper explanation brings visitors, even when the link is <code>nofollow</code>.</li>
<li><strong>Write for other sites.</strong> A guest article on a respected blog in your field, with a link back to your work, reaches its readers and earns a strong link.</li>
<li><strong>Fix broken links.</strong> Find pages in your field that link to something gone, and tell the owner about your page that covers the same thing.</li>
<li><strong>Keep your URLs stable.</strong> Every link points to an exact address. If a page must move, redirect the old address with a <code>301</code> so the links still work and their value follows.</li>
</ul>
<h2 id="what-to-avoid">What to Avoid</h2>
<p>Google&#39;s spam policies name <strong>link spam</strong>: links made to manipulate rankings. These can get a site ranked lower or removed from results:</p>
<ul>
<li>buying or selling links that aren&#39;t marked <code>sponsored</code>;</li>
<li>networks of sites created only to link to each other;</li>
<li>large-scale link exchanges (&quot;link to me and I&#39;ll link to you&quot;);</li>
<li>links stuffed into comments, forum signatures or low-quality directories;</li>
<li>anchor text that always repeats the same keyword.</li>
</ul>
<p>If you find many spammy links to your site that you didn&#39;t create, you usually don&#39;t need to act: Google tries to ignore them. The <strong>disavow</strong> tool in Search Console exists for rare cases, like a manual action for unnatural links. Using it carelessly can hurt you.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>A backlink is a link from another site to yours; its visible words are the anchor text.</li>
<li>Search engines use links to discover pages and to judge how trusted and relevant they are, among many other signals.</li>
<li><code>nofollow</code>, <code>sponsored</code> and <code>ugc</code> are hints that a link isn&#39;t an editorial vote. Mark paid links <code>sponsored</code>.</li>
<li>See your links in Google Search Console&#39;s Links report or Bing Webmaster Tools.</li>
<li>Earn links with useful tools, guides and open source, and keep your URLs stable with <code>301</code> redirects when pages move.</li>
<li>Never buy unmarked links or join link schemes; disavow only in rare cases.</li>
</ol>
`,headings:[{id:`what-a-backlink-is`,text:`What a Backlink Is`},{id:`why-search-engines-care`,text:`Why Search Engines Care`},{id:`nofollow-sponsored-and-ugc`,text:`Nofollow, Sponsored and UGC`},{id:`see-who-links-to-you`,text:`See Who Links to You`},{id:`earn-links-as-a-developer`,text:`Earn Links as a Developer`},{id:`what-to-avoid`,text:`What to Avoid`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`ROW_NUMBER in SQL, Explained with Examples`,description:`ROW_NUMBER gives each row a number, 1, 2, 3, starting over for each group. Learn its syntax, PARTITION BY and ORDER BY, how it differs from RANK and DENSE_RANK, and how to use it for top N per group, the latest row, duplicates and pagination.`,date:`2026-11-18`,urlPath:`/blog/essentials/row-number-in-sql/`},{title:`Claude Certified Associate (Foundations): A Study Guide`,description:`What the Claude Certified Associate – Foundations exam covers, domain by domain, with the ideas to know, exam tips, a study plan, and a free practice exam to check you're ready.`,date:`2026-11-17`,urlPath:`/blog/essentials/claude-certified-associate-foundations-study-guide/`},{title:`Delete Old Documents and Keep Only the Latest per Type`,description:`A user has many documents of different types and you only want the most recent one of each. Learn how to find and delete the older ones safely in PostgreSQL, MySQL and MongoDB, keep the last N, and stop duplicates from coming back.`,date:`2026-11-17`,urlPath:`/blog/essentials/delete-old-documents-keep-latest-per-type/`},{title:`A Modern CSS Reset, Explained Line by Line`,description:`Browsers style pages before you write a single rule. Learn what a modern CSS reset fixes, why each line is there, and copy a short reset you can drop into any project.`,date:`2026-11-15`,urlPath:`/blog/essentials/modern-css-reset/`}],relatedPages:[]}})})}));