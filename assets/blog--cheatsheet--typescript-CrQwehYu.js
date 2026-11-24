import{D as e,E as t,T as n,t as r}from"./LoaderHider-Bpn5Pb5P.js";import{t as i}from"./BlogArticlePage-gmuQ-CXT.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`TypeScript Cheat Sheet`,description:`TypeScript on one page: basic types, interfaces and type aliases, unions and narrowing, generics, utility types, mapped and conditional types, classes, enums alternatives and tsconfig options, with short examples.`,date:`2026-11-20`,urlPath:`/blog/cheatsheet/typescript/`,html:`<p>The TypeScript you write every day, with an example for each feature. Paste a JSON response into the <a href="/tools/json-to-typescript/">JSON to TypeScript tool</a> to get its types instantly.</p>
<h2 id="basic-types">Basic Types</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> name</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "Ada"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> age</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 36</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> active</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> boolean</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> true</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> tags</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"ts"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"js"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">];</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> point</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0550AE;--shiki-dark:#79C0FF">number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0550AE;--shiki-dark:#79C0FF">3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">4</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// tuple</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> anything</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> unknown</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> JSON</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">parse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"{}"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// must be narrowed before use</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">let</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> id</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 42</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// union</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>Type</th>
<th>Use it for</th>
</tr>
</thead>
<tbody><tr>
<td><code>unknown</code></td>
<td>Values you know nothing about yet: safe, forces a check</td>
</tr>
<tr>
<td><code>any</code></td>
<td>Turning type checking off; avoid</td>
</tr>
<tr>
<td><code>void</code></td>
<td>Functions that return nothing</td>
</tr>
<tr>
<td><code>never</code></td>
<td>Things that can&#39;t happen: a function that always throws</td>
</tr>
<tr>
<td><code>null</code>, <code>undefined</code></td>
<td>Missing values, checked with <code>strictNullChecks</code></td>
</tr>
</tbody></table>
</div>
<h2 id="objects-interface-or-type">Objects: Interface or Type</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">interface</span><span style="color:#953800;--shiki-dark:#FFA657"> User</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">  id</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">  name</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">  email</span><span style="color:#CF222E;--shiki-dark:#FF7B72">?:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// optional</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  readonly</span><span style="color:#953800;--shiki-dark:#FFA657"> createdAt</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> Date</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// can't be reassigned</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Point</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { </span><span style="color:#953800;--shiki-dark:#FFA657">x</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#953800;--shiki-dark:#FFA657">y</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> };</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Id</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// only \`type\` can name a union</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>Feature</th>
<th><code>interface</code></th>
<th><code>type</code></th>
</tr>
</thead>
<tbody><tr>
<td>Object shapes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Unions, tuples, primitives</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td><code>extends</code> another</td>
<td>Yes</td>
<td>With <code>&amp;</code></td>
</tr>
<tr>
<td>Merges duplicate declarations</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody></table>
</div>
<p>Use either for objects; be consistent. Index signatures for dictionaries: <code>{ [key: string]: number }</code> or <code>Record&lt;string, number&gt;</code>.</p>
<h2 id="functions">Functions</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">a</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">b</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> a </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> b;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> greet</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#953800;--shiki-dark:#FFA657">name</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">greeting</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "Hello"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =></span></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">  \`\${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">greeting</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}, \${</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">name</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> log</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">message</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">...</span><span style="color:#953800;--shiki-dark:#FFA657">values</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> unknown</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[])</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> void</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Handler</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#953800;--shiki-dark:#FFA657">event</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> MouseEvent</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#0550AE;--shiki-dark:#79C0FF"> void</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Overloads</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> parse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">value</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> parse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">value</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> parse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">value</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> typeof</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">===</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "string"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ?</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(value) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> String</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(value);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="narrowing">Narrowing</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> format</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">value</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> Date</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">typeof</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">===</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "string"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toUpperCase</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">instanceof</span><span style="color:#953800;--shiki-dark:#FFA657"> Date</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toISOString</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toFixed</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// number here</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Discriminated union: a shared literal field tells the cases apart</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Result</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  { </span><span style="color:#953800;--shiki-dark:#FFA657">status</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "ok"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#953800;--shiki-dark:#FFA657">data</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">|</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { </span><span style="color:#953800;--shiki-dark:#FFA657">status</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "error"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#953800;--shiki-dark:#FFA657">message</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> show</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">result</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> Result</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  switch</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (result.status) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    case</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "ok"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">      return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> result.data;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    case</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "error"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">:</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">      return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> result.message;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    default</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">      const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> unreachable</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> never</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> result; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// errors if a case is missing</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">      return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> unreachable;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Custom type guard</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> isUser</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">value</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> unknown</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> value</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> is</span><span style="color:#953800;--shiki-dark:#FFA657"> User</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> typeof</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">===</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "object"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> &#x26;&#x26;</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value </span><span style="color:#CF222E;--shiki-dark:#FF7B72">!==</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> null</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> &#x26;&#x26;</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "id"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> in</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> value;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="generics">Generics</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> first</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>(</span><span style="color:#953800;--shiki-dark:#FFA657">items</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[])</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> undefined</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> items[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">];</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">first</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">([</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">3</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// number | undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">function</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> getProperty</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">K</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> keyof</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>(</span><span style="color:#953800;--shiki-dark:#FFA657">object</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#953800;--shiki-dark:#FFA657">key</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> K</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[</span><span style="color:#953800;--shiki-dark:#FFA657">K</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> object[key];</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">interface</span><span style="color:#953800;--shiki-dark:#FFA657"> ApiResponse</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> unknown</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">> {</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">  data</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">  error</span><span style="color:#CF222E;--shiki-dark:#FF7B72">?:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>extends</code> constrains a type parameter; <code>= unknown</code> gives it a default.</p>
<h2 id="utility-types">Utility Types</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Utility</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td><code>Partial&lt;User&gt;</code></td>
<td>Every property optional</td>
</tr>
<tr>
<td><code>Required&lt;User&gt;</code></td>
<td>Every property required</td>
</tr>
<tr>
<td><code>Readonly&lt;User&gt;</code></td>
<td>Every property <code>readonly</code></td>
</tr>
<tr>
<td><code>Pick&lt;User, &quot;id&quot; | &quot;name&quot;&gt;</code></td>
<td>Only those properties</td>
</tr>
<tr>
<td><code>Omit&lt;User, &quot;email&quot;&gt;</code></td>
<td>Every property except those</td>
</tr>
<tr>
<td><code>Record&lt;&quot;a&quot; | &quot;b&quot;, number&gt;</code></td>
<td>An object with those keys and value type</td>
</tr>
<tr>
<td><code>Exclude&lt;&quot;a&quot; | &quot;b&quot;, &quot;a&quot;&gt;</code></td>
<td><code>&quot;b&quot;</code>: removes members from a union</td>
</tr>
<tr>
<td><code>Extract&lt;T, U&gt;</code></td>
<td>Members of <code>T</code> assignable to <code>U</code></td>
</tr>
<tr>
<td><code>NonNullable&lt;T&gt;</code></td>
<td><code>T</code> without <code>null</code> and <code>undefined</code></td>
</tr>
<tr>
<td><code>ReturnType&lt;typeof fn&gt;</code></td>
<td>What a function returns</td>
</tr>
<tr>
<td><code>Parameters&lt;typeof fn&gt;</code></td>
<td>A tuple of a function&#39;s parameters</td>
</tr>
<tr>
<td><code>Awaited&lt;Promise&lt;User&gt;&gt;</code></td>
<td><code>User</code>: unwraps promises</td>
</tr>
</tbody></table>
</div>
<h2 id="keyof-typeof-and-indexed-types">keyof, typeof and Indexed Types</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> config</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { port: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">8080</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, host: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"localhost"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> };</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Config</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> typeof</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> config; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// { port: number; host: string }</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> ConfigKey</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> keyof</span><span style="color:#953800;--shiki-dark:#FFA657"> Config</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// "port" | "host"</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Port</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#953800;--shiki-dark:#FFA657"> Config</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"port"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> roles</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> [</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"admin"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"editor"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"viewer"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">as</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> const</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Role</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">typeof</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> roles)[</span><span style="color:#0550AE;--shiki-dark:#79C0FF">number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// "admin" | "editor" | "viewer"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>as const</code> keeps literal values and makes arrays readonly tuples.</p>
<h2 id="mapped-and-conditional-types">Mapped and Conditional Types</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Mapped: transform every property</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Nullable</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">> </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { [</span><span style="color:#953800;--shiki-dark:#FFA657">K</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> in</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> keyof</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[</span><span style="color:#953800;--shiki-dark:#FFA657">K</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">|</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> null</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> };</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Getters</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">> </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  [</span><span style="color:#953800;--shiki-dark:#FFA657">K</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> in</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> keyof</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> as</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> \`get\${</span><span style="color:#953800;--shiki-dark:#FFA657">Capitalize</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF">string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> &#x26;</span><span style="color:#953800;--shiki-dark:#FFA657"> K</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">></span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">]</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[</span><span style="color:#953800;--shiki-dark:#FFA657">K</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">];</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Conditional: pick a type based on another</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> IsString</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">> </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ?</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> true</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> :</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> false</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> ElementType</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#953800;--shiki-dark:#FFA657">T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">> </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (</span><span style="color:#CF222E;--shiki-dark:#FF7B72">infer</span><span style="color:#953800;--shiki-dark:#FFA657"> E</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)[] </span><span style="color:#CF222E;--shiki-dark:#FF7B72">?</span><span style="color:#953800;--shiki-dark:#FFA657"> E</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> :</span><span style="color:#953800;--shiki-dark:#FFA657"> T</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> A</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#953800;--shiki-dark:#FFA657"> ElementType</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF">number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">[]>; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// number</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="template-literal-types">Template Literal Types</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Size</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "sm"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "md"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "lg"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Side</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "top"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "bottom"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Spacing</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> \`\${</span><span style="color:#953800;--shiki-dark:#FFA657">Side</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}-\${</span><span style="color:#953800;--shiki-dark:#FFA657">Size</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">}\`</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// "top-sm" | "top-md" | ... 6 members</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="satisfies">satisfies</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> routes</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  home: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"/"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  blog: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"/blog/"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">} </span><span style="color:#CF222E;--shiki-dark:#FF7B72">satisfies</span><span style="color:#953800;--shiki-dark:#FFA657"> Record</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF">string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#0550AE;--shiki-dark:#79C0FF">string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">routes.home; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// still typed as its literal shape, but checked against Record</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>satisfies</code> checks a value against a type without widening it, unlike <code>const routes: Record&lt;string, string&gt;</code>, which loses the exact keys.</p>
<h2 id="classes">Classes</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">class</span><span style="color:#953800;--shiki-dark:#FFA657"> Account</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  private</span><span style="color:#953800;--shiki-dark:#FFA657"> balance</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  static</span><span style="color:#953800;--shiki-dark:#FFA657"> count</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  constructor</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> readonly</span><span style="color:#953800;--shiki-dark:#FFA657"> owner</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> string</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Account.count</span><span style="color:#CF222E;--shiki-dark:#FF7B72">++</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  deposit</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#953800;--shiki-dark:#FFA657">amount</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> void</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">    this</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.balance </span><span style="color:#CF222E;--shiki-dark:#FF7B72">+=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> amount;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">abstract</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> Shape</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  abstract</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> area</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">class</span><span style="color:#953800;--shiki-dark:#FFA657"> Circle</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> extends</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> Shape</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  constructor</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">private</span><span style="color:#953800;--shiki-dark:#FFA657"> radius</span><span style="color:#CF222E;--shiki-dark:#FF7B72">:</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> number</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">    super</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  area</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Math.</span><span style="color:#0550AE;--shiki-dark:#79C0FF">PI</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> *</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> this</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.radius </span><span style="color:#CF222E;--shiki-dark:#FF7B72">**</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>private</code> is checked at compile time only; <code>#balance</code> is truly private at runtime.</p>
<h2 id="enums-and-their-alternative">Enums and Their Alternative</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">enum</span><span style="color:#953800;--shiki-dark:#FFA657"> Direction</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  Up</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "UP"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  Down</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "DOWN"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">// Often preferred: a union of literals, no runtime code</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">type</span><span style="color:#953800;--shiki-dark:#FFA657"> Direction2</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "UP"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "DOWN"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="assertions">Assertions</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> input</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> document.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">querySelector</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"#email"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">as</span><span style="color:#953800;--shiki-dark:#FFA657"> HTMLInputElement</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> user</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> maybeUser</span><span style="color:#CF222E;--shiki-dark:#FF7B72">!</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">; </span><span style="color:#6E7781;--shiki-dark:#8B949E">// non-null assertion: you promise it's not null</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Assertions don&#39;t check anything at runtime: prefer narrowing when you can.</p>
<h2 id="tsconfig-options-worth-knowing">tsconfig Options Worth Knowing</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Option</th>
<th>Does</th>
</tr>
</thead>
<tbody><tr>
<td><code>&quot;strict&quot;: true</code></td>
<td>Turns on all strict checks: always use it in new code</td>
</tr>
<tr>
<td><code>&quot;noUncheckedIndexedAccess&quot;</code></td>
<td><code>array[i]</code> is <code>T | undefined</code>, catching out-of-range bugs</td>
</tr>
<tr>
<td><code>&quot;target&quot;</code></td>
<td>The JavaScript version to emit, like <code>&quot;ES2022&quot;</code></td>
</tr>
<tr>
<td><code>&quot;module&quot;</code> / <code>&quot;moduleResolution&quot;</code></td>
<td>How imports work: <code>&quot;NodeNext&quot;</code> for Node, <code>&quot;bundler&quot;</code> with Vite</td>
</tr>
<tr>
<td><code>&quot;noEmit&quot;: true</code></td>
<td>Only type check, let a bundler build</td>
</tr>
<tr>
<td><code>&quot;paths&quot;</code></td>
<td>Import aliases like <code>@/components</code></td>
</tr>
<tr>
<td><code>&quot;skipLibCheck&quot;: true</code></td>
<td>Skip checking <code>.d.ts</code> files in dependencies: faster</td>
</tr>
</tbody></table>
</div>
`,headings:[{id:`basic-types`,text:`Basic Types`},{id:`objects-interface-or-type`,text:`Objects: Interface or Type`},{id:`functions`,text:`Functions`},{id:`narrowing`,text:`Narrowing`},{id:`generics`,text:`Generics`},{id:`utility-types`,text:`Utility Types`},{id:`keyof-typeof-and-indexed-types`,text:`keyof, typeof and Indexed Types`},{id:`mapped-and-conditional-types`,text:`Mapped and Conditional Types`},{id:`template-literal-types`,text:`Template Literal Types`},{id:`satisfies`,text:`satisfies`},{id:`classes`,text:`Classes`},{id:`enums-and-their-alternative`,text:`Enums and Their Alternative`},{id:`assertions`,text:`Assertions`},{id:`tsconfig-options-worth-knowing`,text:`tsconfig Options Worth Knowing`}],parents:[{title:`CheatSheet Hub`,description:`Explore a complete hub of developer cheat sheets—quick, reliable references for JavaScript, Java, SQL, HTML, and more. Ideal for all levels of programmers.`,date:`2025-04-05`,urlPath:`/blog/cheatsheet/`}],related:[{title:`CheatSheet Hub`,description:`Explore a complete hub of developer cheat sheets—quick, reliable references for JavaScript, Java, SQL, HTML, and more. Ideal for all levels of programmers.`,date:`2025-04-05`,urlPath:`/blog/cheatsheet/`},{title:`Angular CheatSheet`,description:`Master Angular development with this comprehensive cheat sheet! Learn essential Angular CLI commands, component syntax, directives, HTTP requests, routing, forms, and best practices. Perfect for beginners and advanced developers. Save time and code efficiently!`,date:`2025-04-04`,urlPath:`/blog/cheatsheet/angular/`},{title:`Git CheatSheet`,description:`Master Git with this comprehensive cheat sheet! Learn essential Git commands, tips, and best practices for version control, branching, merging, and more. Perfect for developers of all levels to streamline their workflow and collaborate efficiently`,date:`2025-03-03`,urlPath:`/blog/cheatsheet/git/`},{title:`Docker CheatSheet`,description:`A comprehensive guide to essential Docker commands, tips, and best practices. Perfect for developers and DevOps professionals to streamline containerization efficiently`,date:`2025-02-09`,urlPath:`/blog/cheatsheet/docker/`}],relatedPages:[{title:`JSON to TypeScript`,description:`Convert JSON to TypeScript interfaces or types online for free: nested objects, arrays, optional keys and null are detected for you. Paste an API response and copy the types.`,urlPath:`/tools/json-to-typescript/`},{title:`TypeScript Quiz`,description:`Practice TypeScript types: unions, narrowing, generics, utility types, and the difference between any and unknown.`,urlPath:`/quiz/typescript/`},{title:`TypeScript interview questions`,description:`Practice TypeScript interview questions on interfaces and types, any, unknown and never, generics, and narrowing, with clear answers and code.`,urlPath:`/interview/typescript/`}]}})})}));