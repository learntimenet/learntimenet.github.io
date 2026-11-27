import{C as e,S as t,t as n,x as r}from"./LoaderHider-BI9PdNvU.js";import{t as i}from"./BlogArticlePage-DWPwmkv6.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Regex Cheat Sheet`,description:`Regular expressions on one page: characters, classes, quantifiers, anchors, groups, lookarounds and flags, with ready-to-use patterns for emails, dates, numbers and more, and how to use them in JavaScript and Python.`,date:`2026-11-21`,urlPath:`/blog/cheatsheet/regex/`,html:`<p>A regular expression is a pattern that matches text. Most languages share the syntax below; differences are noted. Try every pattern in the <a href="/tools/regex-tester/">regex tester</a>, which highlights each match as you type.</p>
<h2 id="characters">Characters</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Pattern</th>
<th>Matches</th>
</tr>
</thead>
<tbody><tr>
<td><code>abc</code></td>
<td>The text &quot;abc&quot;</td>
</tr>
<tr>
<td><code>.</code></td>
<td>Any character except a line break</td>
</tr>
<tr>
<td><code>\\.</code></td>
<td>A real dot (escape special characters with <code>\\</code>)</td>
</tr>
<tr>
<td><code>\\t</code> <code>\\n</code></td>
<td>A tab, a line break</td>
</tr>
</tbody></table>
</div>
<p>Characters to escape when you mean them literally: <code>. * + ? ^ $ ( ) [ ] { } | \\ /</code>.</p>
<h2 id="character-classes">Character Classes</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Pattern</th>
<th>Matches</th>
</tr>
</thead>
<tbody><tr>
<td><code>[abc]</code></td>
<td>One of a, b or c</td>
</tr>
<tr>
<td><code>[^abc]</code></td>
<td>Any character except a, b or c</td>
</tr>
<tr>
<td><code>[a-z]</code></td>
<td>A lowercase letter</td>
</tr>
<tr>
<td><code>[a-zA-Z0-9]</code></td>
<td>A letter or digit</td>
</tr>
<tr>
<td><code>\\d</code></td>
<td>A digit, like <code>[0-9]</code></td>
</tr>
<tr>
<td><code>\\w</code></td>
<td>A word character: letter, digit or underscore</td>
</tr>
<tr>
<td><code>\\s</code></td>
<td>Whitespace: space, tab, line break</td>
</tr>
<tr>
<td><code>\\D</code> <code>\\W</code> <code>\\S</code></td>
<td>The opposite of <code>\\d</code>, <code>\\w</code>, <code>\\s</code></td>
</tr>
</tbody></table>
</div>
<h2 id="quantifiers">Quantifiers</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Pattern</th>
<th>Means</th>
</tr>
</thead>
<tbody><tr>
<td><code>a*</code></td>
<td>0 or more</td>
</tr>
<tr>
<td><code>a+</code></td>
<td>1 or more</td>
</tr>
<tr>
<td><code>a?</code></td>
<td>0 or 1 (optional)</td>
</tr>
<tr>
<td><code>a{3}</code></td>
<td>Exactly 3</td>
</tr>
<tr>
<td><code>a{2,}</code></td>
<td>2 or more</td>
</tr>
<tr>
<td><code>a{2,5}</code></td>
<td>Between 2 and 5</td>
</tr>
<tr>
<td><code>a+?</code></td>
<td>1 or more, as few as possible (lazy)</td>
</tr>
</tbody></table>
</div>
<p>Quantifiers are <strong>greedy</strong> by default: <code>&lt;.+&gt;</code> on <code>&lt;b&gt;bold&lt;/b&gt;</code> matches the whole string. The lazy <code>&lt;.+?&gt;</code> matches <code>&lt;b&gt;</code>, then <code>&lt;/b&gt;</code>.</p>
<h2 id="anchors-and-boundaries">Anchors and Boundaries</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Pattern</th>
<th>Matches</th>
</tr>
</thead>
<tbody><tr>
<td><code>^</code></td>
<td>Start of the text (or line, with the <code>m</code> flag)</td>
</tr>
<tr>
<td><code>$</code></td>
<td>End of the text (or line, with the <code>m</code> flag)</td>
</tr>
<tr>
<td><code>\\b</code></td>
<td>A word boundary</td>
</tr>
<tr>
<td><code>\\B</code></td>
<td>Not a word boundary</td>
</tr>
</tbody></table>
</div>
<p><code>\\bcat\\b</code> matches &quot;cat&quot; but not &quot;category&quot;. <code>^\\d+$</code> matches text that is only digits.</p>
<h2 id="groups-and-alternatives">Groups and Alternatives</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Pattern</th>
<th>Means</th>
</tr>
</thead>
<tbody><tr>
<td><code>(abc)</code></td>
<td>A capturing group</td>
</tr>
<tr>
<td><code>(?:abc)</code></td>
<td>A group that doesn&#39;t capture</td>
</tr>
<tr>
<td><code>(?&lt;year&gt;\\d{4})</code></td>
<td>A named group</td>
</tr>
<tr>
<td><code>a|b</code></td>
<td>a or b</td>
</tr>
<tr>
<td><code>\\1</code></td>
<td>The text captured by group 1 again</td>
</tr>
</tbody></table>
</div>
<p><code>(\\w+) \\1</code> finds repeated words, like &quot;the the&quot;.</p>
<h2 id="lookarounds">Lookarounds</h2>
<p>They check what comes before or after without including it in the match:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Pattern</th>
<th>Means</th>
</tr>
</thead>
<tbody><tr>
<td><code>a(?=b)</code></td>
<td>a, followed by b</td>
</tr>
<tr>
<td><code>a(?!b)</code></td>
<td>a, not followed by b</td>
</tr>
<tr>
<td><code>(?&lt;=b)a</code></td>
<td>a, preceded by b</td>
</tr>
<tr>
<td><code>(?&lt;!b)a</code></td>
<td>a, not preceded by b</td>
</tr>
</tbody></table>
</div>
<p><code>\\d+(?=€)</code> matches &quot;25&quot; in &quot;25€&quot;. Password rule &quot;at least one digit&quot;: <code>^(?=.*\\d).{8,}$</code>.</p>
<h2 id="flags">Flags</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Flag</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td><code>g</code></td>
<td>Find every match, not just the first (JavaScript)</td>
</tr>
<tr>
<td><code>i</code></td>
<td>Ignore case</td>
</tr>
<tr>
<td><code>m</code></td>
<td><code>^</code> and <code>$</code> match at each line</td>
</tr>
<tr>
<td><code>s</code></td>
<td><code>.</code> also matches line breaks</td>
</tr>
<tr>
<td><code>u</code></td>
<td>Full Unicode support (JavaScript)</td>
</tr>
</tbody></table>
</div>
<h2 id="useful-patterns">Useful Patterns</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>What</th>
<th>Pattern</th>
</tr>
</thead>
<tbody><tr>
<td>Whole number</td>
<td><code>^-?\\d+$</code></td>
</tr>
<tr>
<td>Decimal number</td>
<td><code>^-?\\d+(\\.\\d+)?$</code></td>
</tr>
<tr>
<td>Date YYYY-MM-DD (format only)</td>
<td><code>^\\d{4}-\\d{2}-\\d{2}$</code></td>
</tr>
<tr>
<td>Time HH:MM, 24 hours</td>
<td><code>^([01]\\d|2[0-3]):[0-5]\\d$</code></td>
</tr>
<tr>
<td>Hex color</td>
<td><code>^#([0-9a-fA-F]{3}){1,2}$</code></td>
</tr>
<tr>
<td>Simple email check</td>
<td><code>^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$</code></td>
</tr>
<tr>
<td>Slug</td>
<td><code>^[a-z0-9]+(-[a-z0-9]+)*$</code></td>
</tr>
<tr>
<td>Extra spaces</td>
<td><code>\\s{2,}</code> (replace with one space)</td>
</tr>
<tr>
<td>Leading and trailing spaces</td>
<td><code>^\\s+|\\s+$</code> (replace with nothing)</td>
</tr>
</tbody></table>
</div>
<p>A regex can check that an email <em>looks</em> right, not that it exists. Send a confirmation email for that. And a date pattern like the one above accepts <code>2026-13-45</code>: validate real dates with a date library.</p>
<h2 id="in-javascript">In JavaScript</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> text</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "Order 42 shipped on 2026-11-21"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">test</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(text); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// true</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">text.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">match</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#CF222E;--shiki-dark:#FF7B72">g</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// ["42", "2026", "11", "21"]</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">text.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">replace</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{4}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{2}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{2}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"today"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// "Order 42 shipped on today"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { </span><span style="color:#0550AE;--shiki-dark:#79C0FF">groups</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> text.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">match</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/(?&#x3C;</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">year</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">></span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{4}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">)-(?&#x3C;</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">month</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">></span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{2}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">)/</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">groups.year; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// "2026"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">for</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> match</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> of</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> text.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">matchAll</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">/</span><span style="color:#CF222E;--shiki-dark:#FF7B72">g</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  console.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">log</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(match[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">], match.index);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="in-python">In Python</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> re</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">text </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "Order 42 shipped on 2026-11-21"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">re.search(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, text).group()           </span><span style="color:#6E7781;--shiki-dark:#8B949E"># "42"</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">re.findall(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, text)                  </span><span style="color:#6E7781;--shiki-dark:#8B949E"># ["42", "2026", "11", "21"]</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">re.sub(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{4}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{2}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{2}</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"today"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, text)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">re.fullmatch(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"123"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">is</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> not</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> None</span><span style="color:#6E7781;--shiki-dark:#8B949E">   # True: the whole string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">m </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> re.search(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#0550AE;--shiki-dark:#79C0FF">(</span><span style="color:#116329;--shiki-dark:#7EE787">?P&#x3C;year></span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{4}</span><span style="color:#0550AE;--shiki-dark:#79C0FF">)</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">(</span><span style="color:#116329;--shiki-dark:#7EE787">?P&#x3C;month></span><span style="color:#0550AE;--shiki-dark:#79C0FF">\\d</span><span style="color:#CF222E;--shiki-dark:#FF7B72">{2}</span><span style="color:#0550AE;--shiki-dark:#79C0FF">)</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, text)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">m.group(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"year"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)                           </span><span style="color:#6E7781;--shiki-dark:#8B949E"># "2026"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Write Python patterns as raw strings, <code>r&quot;\\d+&quot;</code>, so backslashes reach the regex engine unchanged. Python names groups with <code>(?P&lt;name&gt;…)</code>.</p>
<h2 id="avoid-catastrophic-backtracking">Avoid Catastrophic Backtracking</h2>
<p>Nested quantifiers like <code>(a+)+$</code> can take exponential time on text that almost matches, freezing a page or a server. Keep patterns specific, avoid a quantifier inside another on the same characters, and limit input length for patterns that run on user input.</p>
`,headings:[{id:`characters`,text:`Characters`},{id:`character-classes`,text:`Character Classes`},{id:`quantifiers`,text:`Quantifiers`},{id:`anchors-and-boundaries`,text:`Anchors and Boundaries`},{id:`groups-and-alternatives`,text:`Groups and Alternatives`},{id:`lookarounds`,text:`Lookarounds`},{id:`flags`,text:`Flags`},{id:`useful-patterns`,text:`Useful Patterns`},{id:`in-javascript`,text:`In JavaScript`},{id:`in-python`,text:`In Python`},{id:`avoid-catastrophic-backtracking`,text:`Avoid Catastrophic Backtracking`}],parents:[{title:`CheatSheet Hub`,description:`Explore a complete hub of developer cheat sheets—quick, reliable references for JavaScript, Java, SQL, HTML, and more. Ideal for all levels of programmers.`,date:`2025-04-05`,urlPath:`/blog/cheatsheet/`}],related:[{title:`SQL Cheat Sheet`,description:`The SQL you use every day on one page: SELECT, filtering, sorting, joins, grouping, subqueries, CTEs, window functions, inserts, updates, deletes, tables, indexes and transactions, with short examples.`,date:`2026-11-21`,urlPath:`/blog/cheatsheet/sql/`},{title:`TypeScript Cheat Sheet`,description:`TypeScript on one page: basic types, interfaces and type aliases, unions and narrowing, generics, utility types, mapped and conditional types, classes, enums alternatives and tsconfig options, with short examples.`,date:`2026-11-20`,urlPath:`/blog/cheatsheet/typescript/`},{title:`CheatSheet Hub`,description:`Explore a complete hub of developer cheat sheets—quick, reliable references for JavaScript, Java, SQL, HTML, and more. Ideal for all levels of programmers.`,date:`2025-04-05`,urlPath:`/blog/cheatsheet/`},{title:`Angular CheatSheet`,description:`Master Angular development with this comprehensive cheat sheet! Learn essential Angular CLI commands, component syntax, directives, HTTP requests, routing, forms, and best practices. Perfect for beginners and advanced developers. Save time and code efficiently!`,date:`2025-04-04`,urlPath:`/blog/cheatsheet/angular/`}],relatedPages:[{title:`Regex Tester`,description:`Test regular expressions online for free. See every match and capture group highlighted as you type, try replacements, and toggle the g, i, m, s and u flags.`,urlPath:`/tools/regex-tester/`},{title:`JavaScript interview questions`,description:`Practice JavaScript interview questions on closures, the event loop, equality, this, and variable scope, with clear answers and code.`,urlPath:`/interview/javascript/`}]}})})}));